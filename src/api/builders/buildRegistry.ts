import type {LocaleRegistry} from '../../types'

export function buildRegistry(registry: LocaleRegistry): string {
  const locales = registry.sort((a, b) => a.id.localeCompare(b.id))
  return `
  import type { LocaleRegistry } from '../src/types'

  // See CONTRIBUTING.md for more information on how to add a new locale
  const registry: LocaleRegistry = ${JSON.stringify(locales, null, 2)}

  export default registry
`
}
