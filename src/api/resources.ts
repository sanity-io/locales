import type {Locale, MissingResources} from '../types'
import {writeFormattedFile} from '../util/writeFormattedFile'
import {getOrderedResources} from '../util/getOrderedResources'
import {buildResourceBundle} from './builders/buildResourceBundle'

export async function reconcileResources(locale: Locale): Promise<void> {
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

export interface MissingResourcesOptions {
  /**
   * Whether to use the canonical key for the missing resources, or the original key
   *
   * @default false
   */
  useCanonicalKeys?: boolean
}

export async function findMissingResources(
  forLocale?: Locale,
  options: MissingResourcesOptions = {},
): Promise<MissingResources[]> {
  const {locales} = await getOrderedResources()
  const {useCanonicalKeys = false} = options

  const namespaces: MissingResources[] = []
  for (const locale of locales) {
    if (forLocale && locale.id !== forLocale.id) {
      continue
    }

    for (const namespace of locale.namespaces) {
      if (namespace.missingResources.length === 0) {
        continue
      }

      const keys = new Set<string>()
      const missing: MissingResources['missingKeys'] = []
      for (const resource of namespace.missingResources) {
        const resourceKey = useCanonicalKeys ? resource.canonicalKey : resource.key
        if (keys.has(resourceKey)) {
          continue
        }

        keys.add(resourceKey)
        missing.push({
          key: resourceKey,
          pluralizable: resource.isPluralizable,
        })
      }

      namespaces.push({
        namespace: namespace.namespace,
        missingKeys: missing,
      })
    }
  }

  return namespaces
}
