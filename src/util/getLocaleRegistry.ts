import {join as joinPath} from 'node:path'
import type {Locale, LocaleEntry, LocaleRegistry} from '../types'
import {localeRegistrySchema} from '../schemas'
import {memoizeAsyncFunction} from './memoizeAsyncFunction'
import {getLocalesPath} from './getLocalesPath'

/**
 * Read and validate the configured locales from `locales/registry.ts`.
 *
 * @note Memoized - this function will only read the registry file once, and cache the result.
 * @internal
 */
export const getLocaleRegistry = memoizeAsyncFunction(async () => {
  const registry: LocaleRegistry = await import('../../locales/registry.js').then(
    (locale) => locale.default,
  )

  const localesPath = await getLocalesPath()

  const parsed = localeRegistrySchema.parse(registry)
  return parsed
    .map(
      (locale): Locale => ({
        ...locale,
        exportName: getExportName(locale),
        packageName: getPackageName(locale),
        path: joinPath(localesPath, locale.id),
        cardinalSuffixes: getPluralSuffixes(locale, 'cardinal'),
        ordinalSuffixes: getPluralSuffixes(locale, 'ordinal'),
      }),
    )
    .sort((a, b) => a.id.localeCompare(b.id))
})

/**
 * Get the package name for a locale
 *
 * @param locale - Locale to get package name for
 * @returns The package name
 * @internal
 */
export function getPackageName(locale: LocaleEntry): string {
  return `@sanity/locale-${locale.id}`.toLowerCase()
}

/**
 * Get locale export identifer
 *
 * @param locale - Locale to get identifier for
 * @returns The export name
 * @internal
 */
function getExportName(locale: LocaleEntry): string {
  return `${locale.id.replace(/-/g, '')}Locale`
}

function getPluralSuffixes(locale: LocaleEntry, type: Intl.PluralRuleType): string[] {
  const rules = new Intl.PluralRules(locale.id, {type})

  // While not technically true for all locales, we want to support `zero` as a suffix for all
  // locales anyway, since it is supported by the underlying framework and is often used for
  // more natural "empty states".
  const suffixes = new Set<string>(['zero'])
  for (let i = 0; i < 15; i++) {
    suffixes.add(rules.select(i))
  }

  return Array.from(suffixes)
}
