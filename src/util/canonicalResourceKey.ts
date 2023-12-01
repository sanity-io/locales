const pluralSuffixes = ['zero', 'one', 'two', 'few', 'many', 'other']
const pluralSuffixRegex = new RegExp(`_(${pluralSuffixes.join('|')})$`)

/**
 * Gets a "canonical" resource key, which is the key without a plural suffix.
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

/**
 * Checks whether or not the given key is a pluralized resource key, eg ends with `_other`, `_one`
 *
 * @param key - The key to check
 * @returns `true` if the key is pluralized, `false` otherwise
 * @internal
 */
export function isPluralizedResourceKey(key: string): boolean {
  return pluralSuffixRegex.test(key)
}
