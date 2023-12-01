import {writeFile} from 'node:fs/promises'
import {format, resolveConfig} from 'prettier'
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
  const prettierConfig = (await resolveConfig(rootPath)) || {}

  const formattedCode = await format(content, {
    ...prettierConfig,
    filepath: filePath,
  })

  return writeFile(filePath, formattedCode)
}
