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
  return parsed.map(
    (locale): Locale => ({
      ...locale,
      exportName: getIdentifier(locale),
      packageName: getPackageName(locale),
      path: joinPath(localesPath, locale.id),
    }),
  )
})

function getIdentifier(locale: LocaleEntry): string {
  return `${locale.id.replace(/-/g, '')}Locale`
}

function getPackageName(locale: LocaleEntry): string {
  return `@sanity/locale-${locale.id}`.toLowerCase()
}
