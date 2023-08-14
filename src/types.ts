import type {infer as zodInfer} from 'zod'
import type {localeRegistrySchema, localeSchema, packageJsonSchema} from './schemas'

/**
 * An entry in the `locales/index.ts` file, which records the available locales and their maintainers
 *
 * @internal
 */
export type Locale = zodInfer<typeof localeSchema>

/**
 * Array of `Locale` objects, eg the contents of `locales/index.ts`
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
