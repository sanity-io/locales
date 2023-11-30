import {join as joinPath} from 'node:path'
import type {Locale, PackageJson} from '../../types'
import {getLocalePath} from '../../util/getLocalesPath'
import {readJsonFile} from '../../util/readJsonFile'
import {getRootPath} from '../../util/getRootPath'
import {packageJsonSchema} from '../../schemas'

// @todo change to the minimum released version that has i18n
const MINIMUM_SANITY_VERSION = 'i18n'

export async function buildPackageJson(locale: Locale): Promise<string> {
  const targetPath = joinPath(await getLocalePath(locale), 'package.json')

  // Get some shared values from the root package.json
  const pkgJson = await readRootPackageJson()
  const {license, homepage, bugs, repository} = pkgJson

  // Get current values (if any)
  const prevPkg: Partial<PackageJson> = await readJsonFile(targetPath, packageJsonSchema).catch(
    () => ({}),
  )

  const pkg: PackageJson = {
    name: locale.packageName,
    description: `${locale.name} locale/translation for Sanity Studio`,
    private: false,
    version: prevPkg.version || '1.0.0',
    license,
    scripts: {
      build: 'npm run clean && npm run pkg:build && npm run pkg:check',
      clean: 'rimraf dist',
      'pkg:build': 'pkg build --strict',
      'pkg:check': 'pkg check --strict',
    },
    keywords: ['sanity', 'i18n', 'locale', 'localization', locale.id],
    files: ['dist', 'src'],
    homepage,
    bugs,
    repository: {
      ...repository,
      directory: `locales/${locale.id}`,
    },
    peerDependencies: {
      sanity: /^\d/.test(MINIMUM_SANITY_VERSION)
        ? `^${MINIMUM_SANITY_VERSION}`
        : MINIMUM_SANITY_VERSION,
    },

    // pkg-utils preferred export order
    type: 'module',
    exports: {
      '.': {
        types: './dist/index.d.ts',
        source: './src/index.ts',
        import: './dist/index.js',
        require: './dist/index.cjs',
        default: './dist/index.js',
      },
      './package.json': './package.json',
    },
    main: './dist/index.cjs',
    module: './dist/index.js',
    source: './src/index.ts',
    types: './dist/index.d.ts',
  }

  return JSON.stringify(pkg, null, 2)
}

async function readRootPackageJson() {
  return readJsonFile(joinPath(await getRootPath(), 'package.json'), packageJsonSchema)
}
