export function buildPackageConfig() {
  return `
  import {defineConfig} from '@sanity/pkg-utils'

  export default defineConfig({
    tsconfig: '../../tsconfig.locale.json',
  })
  `
}
