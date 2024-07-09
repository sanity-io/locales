import {platform} from 'node:os'
import {pathToFileURL} from 'node:url'

import {getLocaleRegistry} from '../api/registry'
import {resourcesSchema} from '../schemas'
import type {
  Locale,
  LocaleWithBundles,
  LocaleWithResources,
  NamespacedBaseResources,
  NamespaceModule,
  OrderedResources,
  Resource,
} from '../types'
import {getBaseBundles} from './getBaseBundles'
import {getNamespacePath} from './getLocalesPath'
import {
  getCanonicalResourceKey,
  getPluralSuffix,
  isPluralizableEnglishResource,
} from './pluralization'

export async function getOrderedResources(): Promise<OrderedResources> {
  const [base, registry] = await Promise.all([getBaseBundles(), getLocaleRegistry()])
  const namespaceNames = base.map(({namespace}) => namespace)
  const locales = await loadNamespacesForRegistry(registry, namespaceNames)

  const namespacedBaseResources: NamespacedBaseResources[] = []
  const namespacedLocaleResources: LocaleWithResources[] = []

  for (const {namespace, resources} of base) {
    const baseIndex: NamespacedBaseResources['indexedResources'] = {}
    const basePluralizable: NamespacedBaseResources['groupedPluralizableResources'] = {}

    for (const resource of resources) {
      baseIndex[resource.key] = resource

      if (isPluralizableEnglishResource(resource)) {
        const canonical = getCanonicalResourceKey(resource.key)
        if (!basePluralizable[canonical]) {
          basePluralizable[canonical] = []
        }
        basePluralizable[canonical].push(resource)
      }
    }

    namespacedBaseResources.push({
      namespace,
      resources,
      indexedResources: baseIndex,
      groupedPluralizableResources: basePluralizable,
    })
  }

  for (const locale of locales) {
    const namespaces: LocaleWithResources['namespaces'] = []
    for (const {namespace, resources} of base) {
      const indexedBase = namespacedBaseResources.find(
        (candidate) => candidate.namespace === namespace,
      )
      if (!indexedBase) {
        throw new Error(`Base bundle for namespace ${namespace} not found`)
      }

      const localeResources: Resource[] = []
      const localeIndex: Record<string, Resource | undefined> = {}
      const missing: Resource[] = []
      const bundle =
        locale.bundles.find((candidate) => candidate.namespace === namespace)?.resources || {}

      for (const baseResource of resources) {
        const resource: Resource = {
          key: baseResource.key,
          value: bundle[baseResource.key] || null,
          baseValue: baseResource.value,
          comments: baseResource.comments,
          canonicalKey: getCanonicalResourceKey(baseResource.key),
          isPluralizable: isPluralizableEnglishResource(baseResource),
        }

        // If the resource does not have a value, and the suffix used in English (eg `one`) is not
        // supported by the locale, do not count it as missing, and skip including it in the output
        if (
          resource.value === null &&
          resource.isPluralizable &&
          !locale.cardinalSuffixes.includes(getPluralSuffix(resource))
        ) {
          continue
        }

        if (resource.value === null) {
          missing.push(resource)
        }

        localeResources.push(resource)
        localeIndex[resource.key] = resource
      }

      namespaces.push({
        namespace,
        filePath: await getNamespacePath(locale, namespace),
        resources: localeResources,
        missingResources: missing,
        indexedResources: localeIndex,
      })
    }

    namespacedLocaleResources.push({
      ...locale,
      namespaces,
    })
  }

  return {
    base: namespacedBaseResources,
    locales: namespacedLocaleResources,
  }
}

function loadNamespacesForRegistry(
  registry: Locale[],
  namespaceNames: string[],
): Promise<LocaleWithBundles[]> {
  return Promise.all(registry.map((locale) => enrichWithBundles(locale, namespaceNames)))
}

async function enrichWithBundles(
  locale: Locale,
  namespaceNames: string[],
): Promise<LocaleWithBundles> {
  const bundles = await Promise.all(
    namespaceNames.map((namespace) => loadNamespace(locale, namespace)),
  )

  return {...locale, bundles}
}

async function loadNamespace(locale: Locale, namespace: string): Promise<NamespaceModule> {
  const filePath = await getNamespacePath(locale, namespace)
  const importPath = platform() === 'win32' ? pathToFileURL(filePath).href : filePath
  const mod = await import(importPath).catch((err) => {
    if (err.code === 'ERR_MODULE_NOT_FOUND') {
      return {default: {}}
    }

    throw err
  })

  if (!('default' in mod)) {
    throw new Error(
      `Locale ${locale.id} contained namespace with missing default export: ${namespace}`,
    )
  }

  return {
    namespace,
    filePath,
    resources: resourcesSchema.parse(mod.default),
  }
}
