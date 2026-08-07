import {dirname} from 'node:path'
import {fileURLToPath} from 'node:url'

import {packageUp} from 'package-up'

import {memoizeAsyncFunction} from './memoizeAsyncFunction'

/**
 * Get the path to the root of this project
 *
 * @returns Resolves to the path of the root of this project
 * @internal
 */
export const getRootPath = memoizeAsyncFunction<string>(async function getRootPath() {
  const currentDir = fileURLToPath(new URL('.', import.meta.url))
  const pkgJsonPath = await packageUp({cwd: currentDir})
  if (!pkgJsonPath) {
    throw new Error('Unable to find parent `package.json`')
  }

  return dirname(pkgJsonPath)
})
