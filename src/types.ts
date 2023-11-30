import type {infer as zodInfer} from 'zod'
import type {Comment} from '@babel/types'
import type {
  localeRegistrySchema,
  localeSchema,
  packageJsonSchema,
  resourcesSchema,
} from './schemas'

/**
 * An entry in the `locales/registry.ts` file, which records the available locales and their maintainers
 *
 * @internal
 */
export type Locale = zodInfer<typeof localeSchema>

/**
 * Array of `Locale` objects, eg the contents of `locales/registry.ts`
 *
 * @internal
 */
export type LocaleRegistry = zodInfer<typeof localeRegistrySchema>

/**
 * A very minimal package.json schema
 *
 * @internal
 */
export type PackageJson = zodInfer<typeof packageJsonSchema>

/**
 * Object of resources, eg `key: value` pairs
 *
 * @internal
 */
export type ResourceMap = zodInfer<typeof resourcesSchema>

/**
 * A resource entry in a locale file
 *
 * @internal
 */
export interface Resource {
  key: string
  value: string
  comments?: Comment[] | null
}

/**
 * A "bundle" of resources, namespaced under a given string
 *
 * @internal
 */
export interface ResourceBundle {
  namespace: string
  resources: Resource[]
}

/**
 * A "bundle" of resources, namespaced under a given string, loaded from the given filename
 *
 * @internal
 */
export interface BundleModule {
  namespace: string
  filename: string
  resources: ResourceMap
}

/**
 * Result of a missing resources operation (eg either find, add missing etc)
 *
 * @internal
 */
export interface MissingResources {
  namespace: string
  missingKeys: Set<string>
}
