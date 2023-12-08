import {join as joinPath, relative as relativePath} from 'node:path'
import {releasePleaseSchema} from '../schemas'
import {ReleasePleaseConfig} from '../types'
import {getRootPath} from '../util/getRootPath'
import {readJsonFile} from '../util/readJsonFile'
import {writeFormattedFile} from '../util/writeFormattedFile'
import {getLocaleRegistry} from './registry'

/**
 * Reconciles the release-please-config.json file with the current state of the locales registry.
 * Tries to preserve any existing configuration, but will rewrite it if it fails to be parsed.
 *
 * @internal
 */
export async function reconcileReleasePleaseConfig(): Promise<void> {
  const rootPath = await getRootPath()
  const locales = await getLocaleRegistry()

  const configPath = joinPath(rootPath, 'release-please-config.json')
  const config = await readJsonFile(configPath, releasePleaseSchema).catch(() => {
    console.warn(`Error reading release-please-config.json, recreating from scratch`)
    return getDefaultReleasePleaseConfig()
  })

  const newConfig = {
    ...config,
    packages: {
      ...removeLocalePackages(config.packages || {}),
    },
  } satisfies ReleasePleaseConfig

  for (const locale of locales) {
    const path = relativePath(rootPath, locale.path)
    newConfig.packages[path] = {}
  }

  await writeFormattedFile(configPath, JSON.stringify(newConfig, null, 2))
}

function getDefaultReleasePleaseConfig(): ReleasePleaseConfig {
  return {
    $schema: 'https://raw.githubusercontent.com/googleapis/release-please/main/schemas/config.json',
    'bump-minor-pre-major': true,
    'always-link-local': true,
    plugins: ['node-workspace'],
    packages: {},
  }
}

function removeLocalePackages(packages: Record<string, {}>): Record<string, {}> {
  const newPackages: Record<string, {}> = {}
  for (const pkg in packages) {
    if (!pkg.startsWith('locales/')) {
      newPackages[pkg] = packages[pkg]
    }
  }
  return newPackages
}
