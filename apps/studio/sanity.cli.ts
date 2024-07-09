import {defineCliConfig} from 'sanity/cli'

import locales from '../../locales/registry'
import {getPackageName} from '../../src/api/registry'
import {getLocaleSourcePath} from '../../src/util/getLocalesPath'

export default defineCliConfig({
  vite: async (config) => ({
    ...config,

    resolve: {
      ...config.resolve,
      alias: {
        ...config.resolve?.alias,
        ...(await findLocaleAliases()),
      },
    },
  }),
})

/**
 * In order to be able to develop on locales without recompiling bundles, we add both TSConfig
 * path entries as well as Vite aliases to the src directory of each locale.
 *
 * @returns A record of package names to source paths
 * @internal
 */
async function findLocaleAliases() {
  const aliases: Record<string, string> = {}
  for (const locale of locales) {
    aliases[getPackageName(locale)] = await getLocaleSourcePath(locale.id)
  }

  return aliases
}
