import {readFile} from 'node:fs/promises'
import {join as joinPath} from 'node:path'
import {localeRegistrySchema} from '../schemas'
import type {Locale, LocaleEntry, LocaleRegistry} from '../types'
import {getLocalesPath} from '../util/getLocalesPath'
import {getRootPath} from '../util/getRootPath'
import {memoizeAsyncFunction} from '../util/memoizeAsyncFunction'

/**
 * Read and validate the configured locales from `locales/registry.ts`.
 *
 * @note Memoized - this function will only read the registry file once, and cache the result.
 * @internal
 */
export const getLocaleRegistry = memoizeAsyncFunction(async () => {
  const localesPath = await getLocalesPath()
  const locales = await loadRegistry()

  return locales
    .sort((a, b) => a.id.localeCompare(b.id))
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

async function loadRegistry(): Promise<LocaleRegistry> {
  // esbuild does not throw a catchable error on syntax errors, so we need to check for them in a
  // slightly less elegant way (string matching for the win, am i right?)
  const registryFile = joinPath(await getRootPath(), 'locales', 'registry.ts')
  const lines = (await readFile(registryFile, 'utf8')).split('\n')
  if (
    lines.some((line) => line.startsWith('<<<<<<< ')) ||
    lines.some((line) => line.startsWith('>>>>>>> ')) ||
    lines.some((line) => line.startsWith('======='))
  ) {
    throw new Error(
      `Locale registry (locales/registry.ts) contains merge conflict markers, please resolve them and run reconcile again`,
    )
  }

  let mod: any
  try {
    mod = await import(registryFile)
  } catch (err: unknown) {
    throw new Error(
      `Failed to load locale registry (locales/registry.ts): ${
        err instanceof Error ? err.message : err
      }`,
    )
  }

  if (!mod || typeof mod !== 'object' || Array.isArray(mod) || !('default' in mod)) {
    throw new Error(
      `Locale registry (locales/registry.ts) must have a default export with an array of locales`,
    )
  }

  try {
    const registry: LocaleRegistry = mod.default
    return localeRegistrySchema.parse(registry)
  } catch (err: unknown) {
    throw new Error(
      `Locale registry (locales/registry.ts) is invalid: ${
        err instanceof Error ? err.message : err
      }`,
    )
  }
}
