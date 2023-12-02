import type {BaseResource, Resource} from '../types'

const pluralSuffixes = ['zero', 'one', 'two', 'few', 'many', 'other']
const pluralSuffixRegex = new RegExp(`_(${pluralSuffixes.join('|')})$`)

const enPluralSuffixes = ['zero', 'one', 'other']
const enPluralSuffixRegex = new RegExp(`_(${enPluralSuffixes.join('|')})$`)

/**
 * Checks whether or not the given key is a pluralized resource key, eg ends with `_other`, `_one`,
 *  - OR - that the value contains `{{count}}`.
 *
 * @param resource - The resource to check
 * @returns `true` if the key is pluralized, `false` otherwise
 * @internal
 */
export function isPluralizedResource(resource: BaseResource): boolean {
  return pluralSuffixRegex.test(resource.key) || resource.value.includes('{{count}}')
}

/**
 * Checks whether or not the given resource is a pluralizable English resource.
 * Determined by the key ending with suffixes recognized in English pluralization rules,
 * in other words `_zero`, `_one` or `_other` - OR - that the value contains `{{count}}`.
 *
 * While not a fool-proof solution, this should be good enough to cover most cases.
 *
 * @param resource - The resource to check
 * @returns `true` if the resource is pluralizable, `false` otherwise
 * @internal
 */
export function isPluralizableEnglishResource(resource: BaseResource): boolean {
  return enPluralSuffixRegex.test(resource.key) || resource.value.includes('{{count}}')
}

/**
 * Get the plural suffix of a resource key, eg `zero`, `one`, `other`, etc.
 *
 * @param resource - The resource to get the plural suffix of
 * @returns Suffix, or blank string if no pluralization suffix is found
 */
export function getPluralSuffix(resource: BaseResource | Resource | string): string {
  const key = typeof resource === 'string' ? resource : resource.key
  const [, suffix] = key.match(pluralSuffixRegex) || []
  return suffix || ''
}

/**
 * Gets a "canonical" resource key, which is the key without a plural suffix.
 *
 * This is useful for finding missing keys between languages, where one language
 * may have a plural suffix and the other may not.
 *
 * @param key - The key to get the canonical version of
 * @returns The canonical version of the key
 * @internal
 */
export function getCanonicalResourceKey(key: string): string {
  return key.replace(pluralSuffixRegex, '')
}
