import type {Locale, MissingResources} from '../types'
import {writeFormattedFile} from '../util/writeFormattedFile'
import {getOrderedResources} from '../util/getOrderedResources'
import {buildResourceBundle} from './builders/buildResourceBundle'

export async function reconcileResources(locale: Locale) {
  const {locales} = await getOrderedResources()
  const localeResources = locales.find((candidate) => candidate.id === locale.id)
  if (!localeResources) {
    throw new Error(`Locale ${locale.id} not found`)
  }

  for (const {filePath, resources} of localeResources.namespaces) {
    const moduleCode = buildResourceBundle(resources)
    await writeFormattedFile(filePath, moduleCode)
  }
}

export async function findMissingResources(forLocale?: Locale): Promise<MissingResources[]> {
  const {locales} = await getOrderedResources()

  const missingKeys: {namespace: string; missingKeys: string[]}[] = []
  for (const locale of locales) {
    if (forLocale && locale.id !== forLocale.id) {
      continue
    }

    for (const namespace of locale.namespaces) {
      if (namespace.missingResources.length === 0) {
        continue
      }

      const missingKeys = []
      for (const resource of namespace.missingResources) {
        missingKeys.push(resource.key)
      }

      missingKeys.push({namespace, missingKeys})
    }
  }

  return missingKeys
}
