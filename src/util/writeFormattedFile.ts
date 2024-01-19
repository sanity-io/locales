import {readFile, writeFile} from 'node:fs/promises'
import {join as joinPath} from 'node:path'
import {format} from 'prettier'
import {getRootPath} from './getRootPath'

/**
 * Write the given code to the given file path, formatting it using Prettier
 * Config will be resolved from file path, or from the given config path
 *
 * @param filePath - File path to write file to
 * @param content - Content to format and write
 * @returns Promise resolving when file has been written
 * @internal
 */
export async function writeFormattedFile(filePath: string, content: string): Promise<void> {
  const rootPath = await getRootPath()
  const prettierConfig = JSON.parse(await readFile(joinPath(rootPath, '.prettierrc'), 'utf8'))

  const formattedCode = await format(content, {
    ...prettierConfig,
    filepath: filePath,
    trailingComma: filePath.endsWith('.json') ? 'none' : prettierConfig.trailingComma,
  })

  return writeFile(filePath, formattedCode)
}
