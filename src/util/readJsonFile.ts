import fs from 'node:fs/promises'
import type {ZodTypeAny, infer as zodInfer} from 'zod'

/**
 * Read a JSON file and parse it. Throws with a helpful message (include file path) on errors.
 *
 * @param jsonFilePath - File system path for the JSON file to read
 * @param schema - Zod schema to validate the data against
 * @returns The parsed JSON file
 */
export async function readJsonFile<T extends ZodTypeAny>(
  jsonFilePath: string,
  schema: T
): Promise<zodInfer<T>> {
  const content = await fs.readFile(jsonFilePath, 'utf-8')
  try {
    const parsed = JSON.parse(content)
    return schema.parse(parsed)
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : `${err}`
    throw new Error(`Failed to parse JSON file: ${jsonFilePath}: ${message}`)
  }
}
