import {localeRegistrySchema} from '../schemas'
import type {LocaleRegistry} from '../types'

/**
 * Read and validate the configured locales from `locales/registry.ts`.
 *
 * @internal
 */
export const readLocales: () => Promise<LocaleRegistry> = (() => {
  let locales: Promise<LocaleRegistry> | undefined
  return async () => {
    if (locales) {
      return locales
    }

    const registry: LocaleRegistry = await import('../../locales/registry.js').then(
      (locale) => locale.default,
    )

    localeRegistrySchema.parse(registry)
    return registry
  }
})()
