import {join as joinPath} from 'node:path'
import {readdir as readDir} from 'node:fs/promises'
import {getRootPath} from '../util/getRootPath'
import type {Locale} from '../types'

const bundleFileNameRegex = /^[a-zA-Z0-9]+\.ts$/
const excludedFiles = ['package.json', 'index.ts']

export async function getBundlesFromLocale(locale: Locale): Promise<Bundle[]> {
  const rootPath = await getRootPath()
  const localePath = joinPath(rootPath, 'locales', locale.id)
  const entries = await readDir(localePath, {withFileTypes: true})
  const files = entries.filter((entry) => entry.isFile() && !excludedFiles.includes(entry.name))

  const bundles: Bundle[] = []
  for (const entry of files) {
    if (!bundleFileNameRegex.test(entry.name)) {
      throw new Error(`Locale ${locale.id} contained file with invalid name: ${entry.name}`)
    }

    const bundleModule = await import(joinPath(localePath, entry.name))
    if (!bundleModule.default) {
      throw new Error(
        `Locale ${locale.id} contained file with missing default export: ${entry.name}`,
      )
    }

    bundles.push({
      namespace: entry.name.replace(/\.ts$/, ''),
      filename: entry.name,
    })
  }

  return bundles
}

export interface Bundle {
  namespace: string
  filename: string
}
