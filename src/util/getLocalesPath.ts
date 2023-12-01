import {join as joinPath} from 'path'
import {getRootPath} from './getRootPath'
import {Locale} from '../types'

/**
 * Get the path to the `locales` directory
 *
 * @returns Resolves to the path of the locales directory
 * @internal
 */
export async function getLocalesPath(): Promise<string> {
  return joinPath(await getRootPath(), 'locales')
}

/**
 * Get the path to a specific locale directory
 *
 * @param locale - The locale to get the path for
 * @returns Resolves to the path of the specific locale directory
 * @internal
 */
export async function getLocalePath(locale: string | Locale): Promise<string> {
  if (typeof locale === 'string') {
    return joinPath(await getLocalesPath(), locale)
  }

  return locale.path
}

/**
 * Get the path to a specific locale source (`src`) directory
 *
 * @param locale - The locale to get the path for
 * @returns Resolves to the path of the specific locale source directory
 * @internal
 */
export async function getLocaleSourcePath(locale: string | Locale): Promise<string> {
  if (typeof locale === 'string') {
    return joinPath(await getLocalePath(locale), 'src')
  }

  return joinPath(locale.path, 'src')
}

/**
 * Get the path to a specific namespace bundle file within a locale
 *
 * @param locale - The locale to get the path for
 * @param namespace - The namespace to get the path for
 * @returns Resolves to the path of the specific namespace directory
 * @internal
 */
export async function getNamespacePath(
  locale: string | Locale,
  namespace: string,
): Promise<string> {
  const base = typeof locale === 'string' ? await getLocalePath(locale) : locale.path
  return joinPath(base, 'src', `${namespace}.ts`)
}
