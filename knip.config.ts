import type {KnipConfig} from 'knip'

const config: KnipConfig = {
  workspaces: {
    '.': {
      entry: ['src/cli/*.ts'],
      project: ['src/**/*.ts', 'test/**/*.ts', 'locales/registry.ts'],
      // `sanity` and `@sanity/vision` are read from `node_modules` with a filesystem glob (see
      // `src/util/getBaseBundles.ts`), which knip cannot detect as usage.
      // `tsrs` is loaded at runtime by oxlint as its type-aware backend, but is not an oxlint peer
      ignoreDependencies: ['@sanity/vision', 'tsrs'],
    },
    'apps/studio': {
      entry: ['locales.ts'],
      project: ['**/*.{ts,tsx}'],
    },
    'locales/*': {
      entry: ['package.config.ts'],
      project: ['src/**/*.ts'],
    },
  },
}

export default config
