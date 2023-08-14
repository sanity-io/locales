import {localeRegistrySchema} from '../schemas'
import {LocaleRegistry} from '../types'

/**
 * Read and validate the configured locales from `locales/index.ts`.
 *
 * @internal
 */
export const readLocales: () => Promise<LocaleRegistry> = (() => {
  let locales: Promise<LocaleRegistry> | undefined
  return async () => {
    if (locales) {
      return locales
    }

    const registry: LocaleRegistry = await import('../../locales/index.js').then(
      (locale) => locale.default
    )

    localeRegistrySchema.parse(registry)
    return registry
  }
})()
