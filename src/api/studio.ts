/**
 * Generates the `apps/studio/locales.ts` file, which contains import statements for all the locale
 * packages, and an array of all the plugin identifiers. This lets the studio app load all the
 * defined locales.
 *
 * It also adds `dependencies` entries to `apps/studio/package.json` for all the locale packages,
 * which uses the `workspace:` protocol to make the studio app use the local packages instead of
 * the published ones.
 */
import {join as joinPath, relative as relativePath} from 'node:path'
import {packageJsonSchema, tsConfigSchema} from '../schemas'
import type {Locale, TSConfig} from '../types'
import {getRootPath} from '../util/getRootPath'
import {readJsonFile} from '../util/readJsonFile'
import {writeFormattedFile} from '../util/writeFormattedFile'
import {buildLocalesImporter} from './builders/buildLocalesImporter'
import {getLocaleRegistry} from './registry'
import {tryHandlePackageJsonMergeConflict} from './resolvers/packageJsonMergeConflict'
import {tryHandleTsConfigMergeConflict} from './resolvers/tsConfigMergeConflict'

export async function reconcileStudio(): Promise<void> {
  const studioRootPath = joinPath(await getRootPath(), 'apps', 'studio')

  // Write the `locales.ts` file which imports all the modules and exports an array of them all
  const locales = await getLocaleRegistry()
  const code = await buildLocalesImporter(locales)
  const localesFilePath = joinPath(studioRootPath, 'locales.ts')
  await writeFormattedFile(localesFilePath, code)

  // Add dependencies for all the locale packs to `package.json`
  const pkgJsonPath = joinPath(studioRootPath, 'package.json')
  const pkgJson = await readJsonFile(pkgJsonPath, packageJsonSchema, [
    tryHandlePackageJsonMergeConflict,
  ])

  const rootPkgDeps =
    (await readJsonFile(joinPath(await getRootPath(), 'package.json'), packageJsonSchema))
      .dependencies || {}

  const dependencies: Record<string, string> = {}

  // Add all the non-locale packages in existing dependencies
  const existingDeps = pkgJson.dependencies || {}
  for (const dependency in existingDeps) {
    if (dependency.startsWith('@sanity/locale-')) {
      continue
    }

    if (dependency in rootPkgDeps) {
      // Ensure we're on the same version of sanity packages as the root package.json
      dependencies[dependency] = rootPkgDeps[dependency]
    } else {
      dependencies[dependency] = existingDeps[dependency]
    }
  }

  // Add all locale packages as dependencies
  for (const locale of locales) {
    dependencies[locale.packageName] = 'workspace:*'
  }

  pkgJson.dependencies = sortDependencies(dependencies)
  await writeFormattedFile(pkgJsonPath, JSON.stringify(pkgJson, null, 2))

  // Add path entries to `tsconfig.json` for the studio, so it can use the source files for locale
  // imports, avoiding the need to build.
  await reconcileTsConfigPaths(locales, studioRootPath)
}

async function reconcileTsConfigPaths(locales: Locale[], studioRootPath: string) {
  const tsConfigPath = joinPath(studioRootPath, 'tsconfig.json')
  const tsConfig = await readJsonFile(tsConfigPath, tsConfigSchema, [
    tryHandleTsConfigMergeConflict,
  ])
  const newConfig = {
    ...tsConfig,
    compilerOptions: {
      ...tsConfig.compilerOptions,
      paths: {
        // Remove all existing locale paths, as we'll re-add them below,
        // and we don't want any removed ones to stick around
        ...removeLocalePaths(tsConfig.compilerOptions?.paths || {}),
      },
    },
  } satisfies TSConfig

  const sortedLocales = locales.slice().sort((a, b) => a.packageName.localeCompare(b.packageName))
  for (const locale of sortedLocales) {
    newConfig.compilerOptions.paths[locale.packageName] = [
      relativePath(studioRootPath, joinPath(locale.path, 'src')),
    ]
  }

  await writeFormattedFile(tsConfigPath, JSON.stringify(newConfig, null, 2))
}

function sortDependencies(dependencies: Record<string, string>): Record<string, string> {
  return Object.fromEntries(Object.entries(dependencies).sort(([a], [b]) => a.localeCompare(b)))
}

function removeLocalePaths(paths: Record<string, string[]>): Record<string, string[]> {
  const newPaths: Record<string, string[]> = {}
  for (const path in paths) {
    if (!path.startsWith('@sanity/locale-')) {
      newPaths[path] = paths[path]
    }
  }
  return newPaths
}
