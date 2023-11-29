import {join as joinPath} from 'node:path'
import {mkdir} from 'node:fs/promises'
import {readJsonFile} from '../util/readJsonFile'
import {getRootPath} from '../util/getRootPath'
import {getLocalesPath} from '../util/getLocalesPath'
import {readLocaleRegistry} from '../util/readLocaleRegistry'
import {writeFormattedFile} from '../util/writeFormattedFile'
import {packageJsonSchema} from '../schemas'
import type {Locale, PackageJson} from '../types'
import {type Bundle, getBundlesFromLocale} from './bundles'

const MINIMUM_SANITY_VERSION = '3.21.0'

export async function writeLocalePackage(locale: Locale) {
  const dir = joinPath(await getLocalesPath(), locale.id)
  const srcDir = joinPath(dir, 'src')
  const indexFile = joinPath(srcDir, 'index.ts')

  await mkdir(srcDir, {recursive: true})
  await writeFormattedFile(indexFile, await getLocaleTemplate(locale))
  await writePackageJson(locale)
  await writePkgConfig(dir)
}

export async function writeLocalePackages() {
  const locales = await readLocaleRegistry()
  for (const locale of locales) {
    await writeLocalePackage(locale)
  }
}

export function getIdentifier(locale: Locale): string {
  return `${locale.id.replace(/-/g, '')}Locale`
}

export function getPackageName(locale: Locale): string {
  return `@sanity/locale-${locale.id}`
}

export async function writePackageJson(locale: Locale) {
  const targetPath = joinPath(await getLocalesPath(), locale.id, 'package.json')

  // Get some shared values from the root package.json
  const pkgJson = await readRootPackageJson()
  const {license, homepage, bugs, repository} = pkgJson

  // Get current values (if any)
  const prevPkg: Partial<PackageJson> = await readJsonFile(targetPath, packageJsonSchema).catch(
    () => ({}),
  )

  const pkg: PackageJson = {
    name: getPackageName(locale),
    description: `${locale.name} locale/translation for Sanity Studio`,
    private: false,
    version: prevPkg.version || '1.0.0',
    license,
    scripts: {
      build: 'npm run clean && npm run pkg:build && npm run pkg:check',
      clean: 'rimraf dist',
      'pkg:build': 'pkg build --strict',
      'pkg:check': 'pkg check --strict',
    },
    keywords: ['sanity', 'i18n', 'locale', 'localization', locale.id],
    homepage,
    bugs,
    repository: {
      ...repository,
      directory: `locales/${locale.id}`,
    },
    peerDependencies: {
      sanity: `^${MINIMUM_SANITY_VERSION}`,
    },

    // pkg-utils preferred export order
    type: 'module',
    exports: {
      '.': {
        types: './dist/index.d.ts',
        source: './src/index.ts',
        import: './dist/index.js',
        require: './dist/index.cjs',
        default: './dist/index.js',
      },
      './package.json': './package.json',
    },
    main: './dist/index.cjs',
    module: './dist/index.js',
    source: './src/index.ts',
    types: './dist/index.d.ts',
  }

  return writeFormattedFile(targetPath, JSON.stringify(pkg, null, 2))
}

async function readRootPackageJson() {
  return readJsonFile(joinPath(await getRootPath(), 'package.json'), packageJsonSchema)
}

function esc(item: string) {
  return JSON.stringify(item)
}

async function getLocaleTemplate(locale: Locale) {
  const {id, name} = locale
  const identifier = getIdentifier(locale)
  const pkgName = getPackageName(locale)
  const bundles = await getBundlesFromLocale(locale)
  const bundleTemplates =
    bundles.length > 0 ? `\n${bundles.map(getBundleTemplate).join(',\n')},\n` : ''
  return `
import {defineLocale, definePlugin} from 'sanity'

const locale = defineLocale({
  id: ${esc(id)},
  title: ${esc(name)},
  bundles: [${bundleTemplates}],
})

/**
 * ${locale.name} locale/translation plugin for Sanity Studio
 * 
 * @public
 */
export const ${identifier} = definePlugin({
  name: ${esc(pkgName)},
  i18n: {
    locales: [locale],
  },
}) 
`.trim()
}

function getBundleTemplate({namespace}: Bundle) {
  const importPath = `./${namespace}`
  return `
    {
      namespace: ${esc(namespace)},
      resources: () => import(${esc(importPath)}),
    }`
}

async function writePkgConfig(dirPath: string) {
  const config = `
  import {defineConfig} from '@sanity/pkg-utils'

  export default defineConfig({
    tsconfig: '../../tsconfig.locale.json',
  })`

  await writeFormattedFile(joinPath(dirPath, 'pkg.config.ts'), config)
}
