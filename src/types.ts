import type {infer as zodInfer} from 'zod'
import type {
  githubFileSchema,
  githubLabelSchema,
  githubPrCommentSchema,
  githubPrSchema,
  githubReviewSchema,
  localeEntrySchema,
  localeRegistrySchema,
  packageJsonSchema,
  releasePleaseSchema,
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
   * English name of the language
   */
  englishName: string

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

  /**
   * The different suffixes that can be used for cardinal pluralization
   */
  cardinalSuffixes: string[]

  /**
   * The different suffixes that can be used for ordinal pluralization
   */
  ordinalSuffixes: string[]
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
 * A very minimal release-please-config.json schema
 *
 * @internal
 */
export type ReleasePleaseConfig = zodInfer<typeof releasePleaseSchema>

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
  isPluralizable: boolean

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
  missingKeys: {key: string; pluralizable: boolean}[]
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
  groupedPluralizableResources: Record<string, BaseResource[]>
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

/**
 * A function that tries to resolve a parse error in a JSON file.
 * If it can't resolve the error, it should throw.
 * If it can resolve the error, it should return the parsed JSON.
 *
 * @param content - The content of the JSON file, with potential parse errors
 * @param error - The error that was thrown when trying to parse the JSON
 * @returns The parsed JSON, with parse errors resolved
 * @throws If unable to resolve errors
 * @internal
 */
export type JsonParseErrorResolver = (content: string, error: unknown) => any

/**
 * A minimal GitHub PR type
 *
 * @internal
 */
export type GitHubPR = zodInfer<typeof githubPrSchema>

/**
 * A minimal GitHub file type
 *
 * @internal
 */
export type GitHubFile = zodInfer<typeof githubFileSchema>

/**
 * A minimal GitHub label type
 *
 * @internal
 */
export type GitHubLabel = zodInfer<typeof githubLabelSchema>

/**
 * A minimal GitHub review type
 *
 * @internal
 */
export type GitHubReview = zodInfer<typeof githubReviewSchema>

/**
 * A minimal GitHub PR comment type
 *
 * @internal
 */
export type GitHubPRComment = zodInfer<typeof githubPrCommentSchema>
