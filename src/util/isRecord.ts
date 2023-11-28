/**
 * Checks if the given object is a "record" (i.e. a plain object with string keys)
 *
 * @param obj - The object to check
 * @returns `true` if the object is a record, `false` otherwise
 * @internal
 */
export function isRecord(obj: unknown): obj is Record<string, unknown> {
  return typeof obj === 'object' && obj !== null && !Array.isArray(obj)
}
