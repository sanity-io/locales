import {readFile, writeFile} from 'node:fs/promises'
import {join as joinPath} from 'node:path'

import {format, type FormatConfig, type Oxfmtrc} from 'oxfmt'

import {getRootPath} from './getRootPath'
import {memoizeAsyncFunction} from './memoizeAsyncFunction'

/**
 * Write the given code to the given file path, formatting it using oxfmt.
 * Formatting options are read from the repository root `.oxfmtrc.json` - the oxfmt node API does
 * not resolve configuration files on its own, unlike prettier.
 *
 * @param filePath - File path to write file to
 * @param content - Content to format and write
 * @returns Promise resolving when file has been written
 * @internal
 */
export async function writeFormattedFile(filePath: string, content: string): Promise<void> {
  const options = await getFormatConfig()
  const result = await format(filePath, content, options)

  if (result.errors.length > 0) {
    const messages = result.errors.map((error) => error.message).join('\n')
    throw new Error(`Failed to format ${filePath}:\n${messages}`)
  }

  return writeFile(filePath, result.code)
}

/**
 * Read the oxfmt configuration from the repository root `.oxfmtrc.json`, dropping the keys that
 * only apply to the CLI (`ignorePatterns`, `overrides`) and are not part of `FormatConfig`.
 */
const getFormatConfig = memoizeAsyncFunction(async (): Promise<FormatConfig> => {
  const rootPath = await getRootPath()
  const options = JSON.parse(
    await readFile(joinPath(rootPath, '.oxfmtrc.json'), 'utf8'),
  ) as FormatConfig & Pick<Oxfmtrc, 'ignorePatterns' | 'overrides'> & {$schema?: string}

  delete options.$schema
  delete options.ignorePatterns
  delete options.overrides
  return options
})
