import {join as joinPath} from 'node:path'

import {packageJsonSchema} from '../../schemas'
import type {Locale, PackageJson} from '../../types'
import {getLocalePath} from '../../util/getLocalesPath'
import {getRootPath} from '../../util/getRootPath'
import {readJsonFile} from '../../util/readJsonFile'

const MINIMUM_SANITY_VERSION_3 = '3.22.0'
const MINIMUM_SANITY_VERSION_4 = '4.0.0-0'

export async function buildPackageJson(locale: Locale): Promise<string> {
  const targetPath = joinPath(await getLocalePath(locale), 'package.json')

  // Get some shared values from the root package.json
  const pkgJson = await readRootPackageJson()
  const {license, homepage, bugs, repository} = pkgJson

  // Get current values (if any)
  const prevPkg: Partial<PackageJson> = await readJsonFile(targetPath, packageJsonSchema).catch(
    () => ({}),
  )

  const contributors = new Set<string>()
  locale.maintainers.forEach((contributor) => contributors.add(contributor))
  locale.contributors.forEach((contributor) => contributors.add(contributor))

  const pkg: PackageJson = {
    name: locale.packageName,
    description: `${locale.englishName} / ${locale.name} locale/translation for Sanity Studio`,
    private: false,
    version: prevPkg.version || '1.0.0',
    license,
    publishConfig: {
      access: 'public',
    },
    sideEffects: false,
    scripts: {
      build: 'npm run clean && npm run pkg:build && npm run pkg:check',
      clean: 'rimraf dist',
      'pkg:build': 'pkg build --strict',
      'pkg:check': 'pkg check --strict',
      prepublishOnly: 'pnpm build',
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
      sanity: [MINIMUM_SANITY_VERSION_3, MINIMUM_SANITY_VERSION_4]
        .map((version) => (/^(\d+|\d+\.\d+\.\d+(-\d+)?)$/.test(version) ? `^${version}` : version))
        .join(' || '),
    },

    contributors: Array.from(contributors)
      .sort()
      .map((contributor) => ({
        name: contributor,
        url: `https://github.com/${contributor}`,
      })),

    browserslist: 'extends @sanity/browserslist-config',

    // pkg-utils preferred export order
    type: 'module',
    exports: {
      '.': {
        source: './src/index.ts',
        import: './dist/index.js',
        require: './dist/index.cjs',
        default: './dist/index.js',
      },
      './package.json': './package.json',
    },
    main: './dist/index.cjs',
    module: './dist/index.js',
    types: './dist/index.d.ts',
  }

  return JSON.stringify(pkg, null, 2)
}

async function readRootPackageJson(): Promise<PackageJson> {
  return readJsonFile(joinPath(await getRootPath(), 'package.json'), packageJsonSchema)
}
