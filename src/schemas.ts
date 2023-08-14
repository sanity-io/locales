import {z} from 'zod'

const ghUsernamePattern = /^[a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,38}$/i

const localeIdSchema = z
  .string()
  .regex(/^[a-z-]+$/, {
    message:
      'Should only include lowercase characters in the a-z range, and dashes to seperate language and regional codes, eg `en-us`.',
  })
  .refine((val) => !val.startsWith('-') && !val.endsWith('-'), {
    message: 'Should not start or end with a dash',
  })
  .refine((val) => !val.includes('--'), {message: 'Should not include multiple dashes'})

/**
 * An entry in the `locales/index.ts` file, which records the available locales and their maintainers
 *
 * @internal
 */
export const localeSchema = z.object({
  /**
   * Language code for the locale, eg `en-us`
   */
  id: localeIdSchema,

  /**
   * Name for the locale, eg `English (US)`
   */
  name: z.string().min(2).max(120),

  /**
   * Array of GitHub usernames of maintainers for the locale, eg ['rexxars', 'bjoerge'].
   *
   * Note that these are _active_ maintainers - historical contributors that have stopped
   * maintaining (eg responding to PR reviews etc) should be moved to `contributors`.
   */
  maintainers: z
    .array(z.string().regex(ghUsernamePattern, {message: 'Invalid GitHub username'}))
    .refine((val) => new Set(val).size === val.length, {message: 'Values should be unique'}),

  /**
   * Array of GitHub usernames of contributors for the locale, eg ['rexxars', 'bjoerge'].
   *
   * This may hold duplicates from `maintainers`, as it holds both active and inactive contributors
   */
  contributors: z
    .array(z.string().regex(ghUsernamePattern, {message: 'Invalid GitHub username'}))
    .refine((val) => new Set(val).size === val.length, {message: 'Values should be unique'}),

  /**
   * Whether or not this locale is considered "official", eg maintained and vetted by Sanity.
   */
  isOfficial: z.boolean(),
})

/**
 * An array of `Locale` objects, eg the contents of `locales/index.ts`
 *
 * @internal
 */
export const localeRegistrySchema = z.array(localeSchema)

/**
 * A very minimal package.json schema
 *
 * @internal
 */
export const packageJsonSchema = z
  .object({
    // NOTE: Intentionally not ordered alphabetically, but by "preferred order",
    // since zod orders the returned objects according to this
    name: z.string(),
    private: z.boolean(),
    version: z.string(),
    main: z.string(),
    license: z.string(),
    scripts: z.record(z.string()),
    keywords: z.array(z.string()),
    dependencies: z.record(z.string()),
    devDependencies: z.record(z.string()),
    prettier: z
      .object({
        bracketSpacing: z.boolean(),
        printWidth: z.number(),
        semi: z.boolean(),
        singleQuote: z.boolean(),
      })
      .partial(),
  })
  .partial({
    private: true,
    version: true,
    main: true,
    scripts: true,
    keywords: true,
    dependencies: true,
    devDependencies: true,
    prettier: true,
  })
  .passthrough()
