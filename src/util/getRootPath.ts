import {dirname} from 'path'
import {fileURLToPath} from 'url'
import {packageUp} from 'package-up'

/**
 * Get the path to the root of this project
 *
 * @returns Resolves to the path of the root of this project
 * @internal
 */
export async function getRootPath() {
  const currentDir = fileURLToPath(new URL('.', import.meta.url))
  const pkgJsonPath = await packageUp({cwd: currentDir})
  if (!pkgJsonPath) {
    throw new Error('Unable to find parent `package.json`')
  }

  return dirname(pkgJsonPath)
}
