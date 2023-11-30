/**
 * Generates the `apps/studio/locales.ts` file, which contains import statements for all the locale
 * packages, and an array of all the plugin identifiers. This lets the studio app load all the
 * defined locales.
 *
 * It also adds `dependencies` entries to `apps/studio/package.json` for all the locale packages,
 * which uses the `workspace:` protocol to make the studio app use the local packages instead of
 * the published ones.
 */
import {join as joinPath} from 'node:path'
import {readJsonFile} from '../util/readJsonFile'
import {getRootPath} from '../util/getRootPath'
import {packageJsonSchema} from '../schemas'
import {buildLocalesImporter} from './builders/buildLocalesImporter'
import {writeFormattedFile} from '../util/writeFormattedFile'
import {getLocaleRegistry} from '../util/getLocaleRegistry'

export async function reconcileStudio(): Promise<void> {
  const studioRootPath = joinPath(await getRootPath(), 'apps', 'studio')

  // Write the `locales.ts` file which imports all the modules and exports an array of them all
  const locales = await getLocaleRegistry()
  const code = await buildLocalesImporter(locales)
  const localesFilePath = joinPath(studioRootPath, 'locales.ts')
  await writeFormattedFile(localesFilePath, code)

  // Add dependencies for all the locale packs to `package.json`
  const pkgJsonPath = joinPath(studioRootPath, 'package.json')
  const pkgJson = await readJsonFile(pkgJsonPath, packageJsonSchema)

  const dependencies: Record<string, string> = {}

  // Add all the non-locale packages in existing dependencies
  const existingDeps = pkgJson.dependencies || {}
  for (const dependency in existingDeps) {
    if (!dependency.startsWith('@sanity/locale-')) {
      dependencies[dependency] = existingDeps[dependency]
    }
  }

  // Add all locale packages as dependencies
  for (const locale of locales) {
    dependencies[locale.packageName] = 'workspace:*'
  }

  pkgJson.dependencies = sortDependencies(dependencies)
  await writeFormattedFile(pkgJsonPath, JSON.stringify(pkgJson, null, 2))
}

function sortDependencies(dependencies: Record<string, string>): Record<string, string> {
  return Object.fromEntries(Object.entries(dependencies).sort(([a], [b]) => a.localeCompare(b)))
}
