import fs from 'node:fs/promises'
import type {ZodTypeAny, infer as zodInfer} from 'zod'
import {JsonParseErrorResolver} from '../types'

/**
 * Read a JSON file and parse it. Throws with a helpful message (include file path) on errors.
 *
 * @param jsonFilePath - File system path for the JSON file to read
 * @param schema - Zod schema to validate the data against
 * @param resolvers - Array of functions to try to resolve common errors (merge conflicts etc)
 * @returns The parsed JSON file
 * @internal
 */
export async function readJsonFile<T extends ZodTypeAny>(
  jsonFilePath: string,
  schema: T,
  resolvers?: JsonParseErrorResolver[],
): Promise<zodInfer<T>> {
  const content = await fs.readFile(jsonFilePath, 'utf-8')

  let parsed: any
  try {
    parsed = JSON.parse(content)
  } catch (err: unknown) {
    for (const resolver of resolvers || []) {
      try {
        parsed = resolver(content, err)
        break
      } catch {
        // Ignore, move on to next resolver
      }
    }

    // If we still haven't parsed the JSON, throw the original error
    if (typeof parsed === 'undefined') {
      throw err
    }
  }

  try {
    return schema.parse(parsed)
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : `${err}`
    throw new Error(`Failed to parse JSON file: ${jsonFilePath}: ${message}`)
  }
}
