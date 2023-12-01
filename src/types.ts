import type {infer as zodInfer} from 'zod'
import type {
  localeRegistrySchema,
  localeEntrySchema,
  packageJsonSchema,
  resourcesSchema,
  tsConfigSchema,
} from './schemas'

/**
 * An entry in the `locales/registry.ts` file, which records the available locales and their maintainers
 *
 * @internal
 */
export type LocaleEntry = zodInfer<typeof localeEntrySchema>

/**
 * Array of `Locale` objects, eg the contents of `locales/registry.ts`
 *
 * @internal
 */
export type LocaleRegistry = zodInfer<typeof localeRegistrySchema>

/**
 * A locale, with the `exportName` and `packageName` properties added
 *
 * @internal
 */
export interface Locale extends LocaleEntry {
  /**
   * The identifier exported, eg `noNBLocale`, or `enUSLocale`
   */
  exportName: string

  /**
   * The name of the npm module that this locale is/will be published under
   */
  packageName: string

  /**
   * Path to the root of the locale directory
   */
  path: string
}

/**
 * A very minimal package.json schema
 *
 * @internal
 */
export type PackageJson = zodInfer<typeof packageJsonSchema>

/**
 * A very minimal tsconfig.json schema
 *
 * @internal
 */
export type TSConfig = zodInfer<typeof tsConfigSchema>

/**
 * Object of resources, eg `key: value` pairs
 *
 * @internal
 */
export type ResourceMap = zodInfer<typeof resourcesSchema>

/**
 * A locale, with the bundles loaded from the filesystem
 *
 * @internal
 */
export interface LocaleWithBundles extends Locale {
  bundles: NamespaceModule[]
}

/**
 * A resource entry extracted from the Sanity core source code, with original comments
 *
 * @internal
 */
export interface BaseResource {
  key: string
  value: string
  comments?: string[]
}

/**
 * A resource that holds both the translated value _AND_ the base value,
 * along with the original comment that goes along with it.
 *
 * @internal
 */
export interface Resource {
  /**
   * The key of this resource, eg `structure.menuItem`
   */
  key: string

  /**
   * The translated value of this resource, eg the value that is used in the locale.
   * `null` if not translated.
   */
  value: string | null

  /**
   * The "base" value of this resource, eg the value that is used as the default
   * (the english value, in other words)
   */
  baseValue: string

  /**
   * The "canonical" name of this resource, without any pluralization suffix
   */
  canonicalKey: string

  /**
   * Whether this resource is pluralizable or not, eg by adding `_one`, `_other` etc
   */
  pluralizable: boolean

  /**
   * Comments for this resource, eg the original comment from the source code
   */
  comments?: string[]
}

/**
 * A "bundle" of resources, namespaced under a given string
 *
 * @internal
 */
export interface ResourceBundle {
  namespace: string
  resources: BaseResource[]
}

/**
 * A "bundle" of resources, namespaced under a given string, loaded from the given file path
 *
 * @internal
 */
export interface NamespaceModule {
  namespace: string
  filePath: string
  resources: ResourceMap
}

/**
 * A record of a namespace and the keys it is missing
 *
 * @internal
 */
export interface MissingResources {
  namespace: string
  missingKeys: string[]
}

/**
 * Result of a missing resources operation (eg either find, add missing etc),
 * with the original bundle resources included under the `missingResources` property
 *
 * @internal
 */
export interface MissingResourcesWithOriginals extends MissingResources {
  missingResources: Resource[]
}

export interface OrderedResources {
  base: NamespacedBaseResources[]
  locales: LocaleWithResources[]
}

export interface NamespacedBaseResources {
  namespace: string
  resources: BaseResource[]
  indexedResources: Record<string, BaseResource | undefined>
}

export interface LocaleWithResources extends Locale {
  namespaces: {
    /**
     * The name of this namespace (eg `structure`, `studio` etc)
     */
    namespace: string

    /**
     * The file path for this bundle
     */
    filePath: string

    /**
     * Note: Includes resources that are missing from the namespace - its `value` will be `null`
     */
    resources: Resource[]

    /**
     * Note: Includes resources that are missing from the namespace - its `value` will be `null`
     */
    indexedResources: Record<string, Resource | undefined>

    /**
     * Array of the resources that have no translation in this namespace
     */
    missingResources: Resource[]
  }[]
}
