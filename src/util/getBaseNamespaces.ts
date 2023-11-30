import {getBaseBundles} from './getBaseBundles'

export async function getBaseNamespaces() {
  const base = await getBaseBundles()
  return base.map((bundle) => bundle.namespace)
}
