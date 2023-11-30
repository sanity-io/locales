import type {
  NamespaceModule,
  Locale,
  LocaleWithBundles,
  LocaleWithResources,
  NamespacedBaseResources,
  OrderedResources,
  Resource,
} from '../types'
import {getBaseBundles} from './getBaseBundles'
import {getLocaleRegistry} from './getLocaleRegistry'
import {getNamespacePath} from './getLocalesPath'
import {resourcesSchema} from '../schemas'

export async function getOrderedResources(): Promise<OrderedResources> {
  const [base, registry] = await Promise.all([getBaseBundles(), getLocaleRegistry()])
  const namespaceNames = base.map(({namespace}) => namespace)
  const locales = await loadNamespacesForRegistry(registry, namespaceNames)

  const namespacedBaseResources: NamespacedBaseResources[] = []
  const namespacedLocaleResources: LocaleWithResources[] = []

  for (const {namespace, resources} of base) {
    const baseIndex: NamespacedBaseResources['indexedResources'] = {}

    for (const resource of resources) {
      baseIndex[resource.key] = resource
    }

    namespacedBaseResources.push({
      namespace,
      resources,
      indexedResources: baseIndex,
    })
  }

  for (const locale of locales) {
    const namespaces: LocaleWithResources['namespaces'] = []
    for (const {namespace, resources} of base) {
      const localeResources: Resource[] = []
      const localeIndex: Record<string, Resource | undefined> = {}
      const missing: Resource[] = []
      const bundle =
        locale.bundles.find((bundle) => bundle.namespace === namespace)?.resources || {}

      for (const baseResource of resources) {
        const resource: Resource = {
          key: baseResource.key,
          value: bundle[baseResource.key] || null,
          baseValue: baseResource.value,
          comments: baseResource.comments,
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

async function loadNamespacesForRegistry(
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
  const mod = await import(filePath).catch((err) => {
    if (err.code === 'ERR_MODULE_NOT_FOUND') {
      return { default: {} }
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
