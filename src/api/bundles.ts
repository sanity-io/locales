import path from 'node:path'
import fs from 'node:fs/promises'
import type {Locale} from '../types'

const bundleFileNameRegex = /^[a-zA-Z0-9]+\.ts$/

export async function getBundlesFromLocale(locale: Locale): Promise<Bundle[]> {
  const localePath = path.join(__dirname, '..', '..', 'locales', locale.id)
  const entries = await fs.readdir(localePath, {withFileTypes: true})
  const files = entries.filter((entry) => entry.isFile())
  const bundles = files
    .filter((file) => file.name !== 'index.ts')
    .map((entry): Bundle => {
      if (!bundleFileNameRegex.test(entry.name)) {
        throw new Error(`Locale ${locale.id} contained file with invalid name: ${entry.name}`)
      }

      return {
        namespace: entry.name.replace(/\.ts$/, ''),
        filename: entry.name,
      }
    })

  return bundles
}

export interface Bundle {
  namespace: string
  filename: string
}
