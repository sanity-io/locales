import {writeFile} from 'node:fs/promises'
import {format, resolveConfig} from 'prettier'

/**
 * Write the given code to the given file path, formatting it using Prettier
 * Config will be resolved from file path, or from the given config path
 *
 * @param filePath - File path to write file to
 * @param content - Content to format and write
 * @param options - Optional options for the formatter
 * @returns Promise resolving when file has been written
 * @internal
 */
export async function writeFormattedFile(
  filePath: string,
  content: string,
  options: {configPath?: string; postProcess?: (code: string) => string} = {},
): Promise<void> {
  const prettierConfig = (await resolveConfig(options.configPath || filePath)) || {}

  let formattedCode = await format(content, {
    ...prettierConfig,
    filepath: filePath,
  })

  if (options.postProcess) {
    formattedCode = options.postProcess(formattedCode)
  }

  return writeFile(filePath, formattedCode)
}
