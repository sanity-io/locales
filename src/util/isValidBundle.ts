import type {LocaleResourceRecord} from 'sanity'
import {isRecord} from './isRecord'

/**
 * Checks whether the given thing is a valid bundle
 *
 * @param thing - The thing to check
 * @returns `true` if the thing is a valid bundle, `false` otherwise
 * @internal
 */
export function isValidBundle(thing: unknown): thing is LocaleResourceRecord {
  return (
    isRecord(thing) &&
    Object.entries(thing).every(
      ([key, value]) =>
        typeof key === 'string' && (typeof value === 'string' || isValidBundle(value)),
    )
  )
}
