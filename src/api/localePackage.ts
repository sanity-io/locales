import path from 'node:path'
import fs from 'node:fs/promises'
import {format} from 'prettier'
import {readLocales} from '../util/readLocales'
import type {Locale} from '../types'
import {type Bundle, getBundlesFromLocale} from './bundles'
import {readJsonFile} from '../util/readJsonFile'
import {packageJsonSchema} from '../schemas'

const rootPath = path.join(__dirname, '..', '..')
const localesPath = path.join(rootPath, 'locales')

export async function writeLocalePackage(locale: Locale) {
  const dir = path.join(localesPath, locale.id)
  const indexFile = path.join(dir, 'index.ts')

  await fs.mkdir(dir, {recursive: true})
  await writeFormattedFile(indexFile, await getLocaleTemplate(locale))
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

async function writeFormattedFile(filePath: string, content: string) {
  const pkgJson = await readJsonFile(path.join(rootPath, 'package.json'), packageJsonSchema)
  const prettierConfig = pkgJson.prettier || {}
  return fs.writeFile(filePath, await format(content, {parser: 'typescript', ...prettierConfig}))
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
