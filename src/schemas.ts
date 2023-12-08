import {z} from 'zod'

const ghUsernamePattern = /^[a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,38}$/i

const localeIdSchema = z.string().regex(/^([a-z]+)|([a-z]+-[A-Z]+)$/, {
  message:
    'Should only include lowercase characters, or lowercased followed by uppercase, eg `en` or `en-US`',
})

/**
 * An entry in the `locales/registry.ts` file, which records the available locales and their maintainers
 *
 * @internal
 */
export const localeEntrySchema = z.object({
  /**
   * Language code for the locale, eg `en-us`
   */
  id: localeIdSchema,

  /**
   * Name of the locale, eg `Norsk (Bokmål)`
   */
  name: z.string().min(2).max(120),

  /**
   * Name of the locale in English, eg `Norwegian (Bokmål)`.
   * Optional, will be auto-generated if not specified.
   */
  englishName: z.string().min(2).max(120).optional(),

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
 * An array of `Locale` objects, eg the contents of `locales/registry.ts`
 *
 * @internal
 */
export const localeRegistrySchema = z.array(localeEntrySchema)

/**
 * A very minimal package.json schema
 *
 * @internal
 */
export const packageJsonSchema = z
  .object({
    // NOTE: Intentionally NOT ordered alphabetically, but by "preferred order",
    // since zod orders the returned objects according to this
    name: z.string(),
    description: z.string(),
    private: z.boolean(),
    version: z.string(),
    main: z.string(),
    license: z.string(),
    scripts: z.record(z.string()),
    keywords: z.array(z.string()),
    homepage: z.string(),
    bugs: z.object({
      url: z.string(),
    }),
    repository: z
      .object({
        type: z.string(),
        url: z.string(),
        directory: z.string(),
      })
      .partial(),
    dependencies: z.record(z.string()),
    devDependencies: z.record(z.string()),
    peerDependencies: z.record(z.string()),
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
    homepage: true,
    bugs: true,
    repository: true,
    dependencies: true,
    devDependencies: true,
    peerDependencies: true,
    prettier: true,
  })
  .passthrough()

/**
 * Object of resources, eg `key: value` pairs
 *
 * @internal
 */
export const resourcesSchema = z.record(
  z
    .string()
    .min(1)
    .regex(/^[a-z][a-zA-Z0-9.-_]/),
  z.string().optional(),
)

/**
 * A very minimal tsconfig.json schema, including only the parts we care about validating
 *
 * @internal
 */
export const tsConfigSchema = z
  .object({
    compilerOptions: z
      .object({
        paths: z.record(z.string(), z.array(z.string())),
      })
      .partial(),
  })
  .partial({
    compilerOptions: true,
  })
  .passthrough()
