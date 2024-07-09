/* eslint-disable @typescript-eslint/no-explicit-any */
export function memoizeAsyncFunction<R>(func: () => Promise<R>): () => Promise<R> {
  let cachedPromise: Promise<any> | null = null

  return function (): Promise<any> {
    if (!cachedPromise) {
      cachedPromise = func()
    }
    return cachedPromise
  }
}
