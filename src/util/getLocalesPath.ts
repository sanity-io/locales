import {join as joinPath} from 'path'
import {getRootPath} from './getRootPath'

/**
 * Get the path to the `locales` directory
 *
 * @returns Resolves to the path of the locales directory
 * @internal
 */
export async function getLocalesPath() {
  return joinPath(await getRootPath(), 'locales')
}
