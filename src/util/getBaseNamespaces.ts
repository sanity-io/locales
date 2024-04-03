import {getBaseBundles} from './getBaseBundles'

/**
 * Get the names of all the base namespaces
 *
 * @returns Resolves to an array of namespace names
 * @internal
 */
export async function getBaseNamespaces(): Promise<string[]> {
  const base = await getBaseBundles()
  return base.map((bundle) => bundle.namespace).sort()
}
