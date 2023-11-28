import path from 'node:path'
import fs from 'node:fs/promises'
import {format} from 'prettier'
import {readLocales} from '../util/readLocales'
import {readJsonFile} from '../util/readJsonFile'
import {getRootPath} from '../util/getRootPath'
import {getLocalesPath} from '../util/getLocalesPath'
import type {Locale, PackageJson} from '../types'
import {type Bundle, getBundlesFromLocale} from './bundles'
import {packageJsonSchema} from '../schemas'

export async function writeLocalePackage(locale: Locale) {
  const dir = path.join(await getLocalesPath(), locale.id)
  const indexFile = path.join(dir, 'index.ts')

  await fs.mkdir(dir, {recursive: true})
  await writeFormattedFile(indexFile, await getLocaleTemplate(locale))
  await writePackageJson(locale)
}

export async function writeLocalePackages() {
  const locales = await readLocales()
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
  const targetPath = path.join(await getLocalesPath(), locale.id, 'package.json')

  // Get some shared values from the root package.json
  const pkgJson = await readRootPackageJson()
  const {license, homepage, bugs, repository, dependencies} = pkgJson
  const sanityVersion = dependencies?.sanity
  if (!sanityVersion) {
    throw new Error('Could not resolve `sanity` module peer dependency range')
  }

  // Get current values (if any)
  const prevPkg: Partial<PackageJson> = await readJsonFile(targetPath, packageJsonSchema).catch(
    () => ({}),
  )

  const pkg: PackageJson = {
    name: getPackageName(locale),
    private: false,
    version: prevPkg.version || '1.0.0',
    main: 'dist/index.js',
    license,
    scripts: {},
    keywords: ['sanity', 'i18n', 'locale', 'localization', locale.id],
    homepage,
    bugs,
    repository: {
      ...repository,
      directory: `locales/${locale.id}`,
    },
    devDependencies: {
      sanity: sanityVersion,
    },
    peerDependencies: {
      sanity: sanityVersion,
    },
  }

  return writeFormattedFile(targetPath, JSON.stringify(pkg, null, 2))
}

async function readRootPackageJson() {
  return readJsonFile(path.join(await getRootPath(), 'package.json'), packageJsonSchema)
}

async function writeFormattedFile(filePath: string, content: string) {
  const pkgJson = await readRootPackageJson()
  const prettierConfig = pkgJson.prettier || {}
  return fs.writeFile(
    filePath,
    await format(content, {parser: getParser(filePath), ...prettierConfig}),
  )
}

function getParser(filePath: string): string | undefined {
  const ext = path.extname(filePath)
  switch (ext) {
    case '.ts':
      return 'typescript'
    case '.json':
      return 'json'
    default:
      return undefined
  }
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
