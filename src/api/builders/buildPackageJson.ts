import {join as joinPath} from 'node:path'
import type {Locale, PackageJson} from '../../types'
import {getLocalePath} from '../../util/getLocalesPath'
import {readJsonFile} from '../../util/readJsonFile'
import {getRootPath} from '../../util/getRootPath'
import {packageJsonSchema} from '../../schemas'

const MINIMUM_SANITY_VERSION = '3.21.3'

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
      sanity: /^(\d+|\d+\.\d+\.\d+)$/.test(MINIMUM_SANITY_VERSION)
        ? `^${MINIMUM_SANITY_VERSION}`
        : MINIMUM_SANITY_VERSION,
    },

    contributors: Array.from(contributors)
      .sort()
      .map((contributor) => ({
        name: contributor,
        url: `https://github.com/${contributor}`,
      })),

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

async function readRootPackageJson(): Promise<PackageJson> {
  return readJsonFile(joinPath(await getRootPath(), 'package.json'), packageJsonSchema)
}
