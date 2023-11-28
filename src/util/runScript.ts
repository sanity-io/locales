/**
 * Execute a script (in the form of an async function) and log the result,
 * exiting with a proper error message (with stack) on any rejection.
 *
 * @param fn - Function to execute
 * @internal
 */
export function runScript(fn: () => Promise<unknown>) {
  fn()
    .then((result) => {
      if (typeof result !== 'undefined') {
        console.log(result)
      }
    })
    .catch((err: unknown) => {
      const stack = err instanceof Error ? err.stack : `${err}`
      console.error(stack)
      process.exit(1)
    })
}
