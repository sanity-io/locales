import {execFile as execFileCb} from 'node:child_process'
import {promisify} from 'node:util'
import OpenAI from 'openai'
import pMap from 'p-map'
import {buildResourceBundle} from '../api/builders/buildResourceBundle'
import {findMissingResources} from '../api/resources'
import type {Locale, Resource} from '../types'
import {getOrderedResources} from '../util/getOrderedResources'
import {getRootPath} from '../util/getRootPath'
import {writeFormattedFile} from '../util/writeFormattedFile'
import {getLocaleRegistry} from './registry'

const execFile = promisify(execFileCb)

const OPENAI_MODEL = 'gpt-4-1106-preview'

/**
 * Memoized getter for the OpenAI API client
 *
 * @internal
 */
const getOpenAIApi = (() => {
  let openai: OpenAI | null = null
  return () => {
    if (!openai) {
      openai = new OpenAI()
    }
    return openai
  }
})()

/**
 * Options for the auto translate operation
 *
 * @internal
 */
export interface AutoTranslateOptions {
  /**
   * Array of locale IDs to translate.
   * By default will translate all locales.
   */
  targetLocales?: string[]

  /**
   * Array of namespaces to translate.
   * By default will translate all namespaces.
   */
  namespaces?: string[]

  /**
   * Optional logging function that will be called with progress messages
   *
   * @param message - The message to log
   */
  logger?: (message: string) => void
}

/**
 * Automatically translate missing resources using AI.
 * Writes back the translations to namespace files on success.
 *
 * @param options - Options for the auto translate operation
 * @returns A promise that resolves with the total number of autotranslated resources
 * @internal
 */
export async function autoTranslate(options: AutoTranslateOptions): Promise<number> {
  const {targetLocales, namespaces, logger = noop} = options
  const {locales} = await getOrderedResources()

  // Filter out locales that are not requested
  const targetLocaleIds = targetLocales?.map((id) => id.toLowerCase())
  const filteredLocales = locales.filter((locale) => {
    return !targetLocaleIds || targetLocaleIds.includes(locale.id.toLowerCase())
  })

  if (targetLocales && targetLocales.length !== filteredLocales.length) {
    throw new Error(
      `Could not find one or more of the requested locales: ${targetLocales.filter(
        (locale) => !filteredLocales.find((l) => l.id === locale),
      )}`,
    )
  }

  let numTotalTranslated = 0
  for (const locale of filteredLocales) {
    const missingResources = await findMissingResources(locale)
    const localeName = locale.englishName || locale.name

    for (const entry of missingResources) {
      if (namespaces && !namespaces.includes(entry.namespace)) {
        continue
      }
      logger(
        `Found ${entry.missingKeys.length} missing resources for ${localeName} in ${entry.namespace}`,
      )
      const ns = locale.namespaces.find((namespace) => namespace.namespace === entry.namespace)
      if (!ns) {
        logger(`Could not find namespace ${entry.namespace} in locale ${localeName}`)
        continue
      }

      // Group entry.missingKeys into max 25 keys per request
      const BATCH_SIZE = 25
      const batches = []
      let batch = []
      for (const key of entry.missingKeys) {
        if (batch.length === BATCH_SIZE) {
          batches.push(batch)
          batch = []
        }
        batch.push(key)
      }

      if (batch.length > 0) {
        batches.push(batch)
      }

      // For each of the batches, translate the keys (do X batches in parallel)
      const numTranslatedInBatches = await pMap(
        batches,
        async function translateBatch(currentBatch, index) {
          const tpl = templateMissingResources(ns.indexedResources, currentBatch)
          logger(
            `[${locale.name}] Translating ${index + 1}/${
              batches.length
            } key batches for namespace ${ns.namespace}`,
          )

          const translation = JSON.parse(await translateText(tpl, localeName))

          // Set the values from translation into the namespace
          let batchTranslated = 0
          for (const key of currentBatch) {
            const val = ns.indexedResources[key.key]
            // eslint-disable-next-line max-depth
            if (!val) {
              continue
            }

            const translated = translation[key.key]
            if (!translated) {
              logger(`[WARN] No translation returned for ${key.key}`)
              continue
            }

            val.value = translation[key.key]
            batchTranslated++
          }

          return batchTranslated
        },
        {concurrency: 3},
      )

      const numTranslatedInNamespace = numTranslatedInBatches.reduce((acc, val) => acc + val, 0)
      numTotalTranslated += numTranslatedInNamespace

      // Only write back changes if there are actual changes
      if (numTranslatedInNamespace > 0) {
        const moduleCode = buildResourceBundle(ns.resources)
        await writeFormattedFile(ns.filePath, moduleCode)
      }
    }
  }

  return numTotalTranslated
}

/**
 * Takes existing resources, missing key names and generates a template for the AI to translate.
 * Expects the missing keys to already have values in indexedResources.
 *
 * @param indexedResources - Base resources, eg english variants
 * @param missingKeys - The keys that are missing from the target locale
 * @returns A template string that can be translated
 */
function templateMissingResources(
  indexedResources: Record<string, Resource | undefined>,
  missingKeys: {key: string; pluralizable: boolean}[],
): string {
  let tpl = `// English base translation\n`
  tpl += `const i18nextKeys = {\n`
  missingKeys.forEach((entry) => {
    const val = indexedResources[entry.key]
    if (val) {
      tpl += `  // ${val.comments}\n`
      tpl += `  ${JSON.stringify(entry.key)}: ${JSON.stringify(val.baseValue)},\n`
    }
  })
  tpl += `};\n`
  return tpl
}

/**
 * Translate the given text to the given target language, returning JSON
 *
 * @param text
 * @param targetLanguage
 * @returns
 */
async function translateText(text: string, targetLanguage: string): Promise<string> {
  // Note: will thrown on missing environment variable
  const openai = getOpenAIApi()

  if (text.trim() === '') {
    return JSON.stringify({})
  }

  const chatCompletion = await openai.chat.completions.create({
    messages: [
      {
        role: 'system',
        content: getSystemPrompt(),
      },
      {
        role: 'user',
        content: `I would like this translated to ${targetLanguage}. Respond with JSON:`,
      },
      {
        role: 'user',
        content: text,
      },
    ],
    model: OPENAI_MODEL,
    stream: false,
    temperature: 0,
    // eslint-disable-next-line camelcase
    response_format: {
      type: 'json_object',
    },
  })

  return chatCompletion.choices[0].message.content || ''
}

/**
 * Get the system prompt for the AI to translate our source code and return JSON.
 *
 * @returns The system prompt
 * @internal
 */
function getSystemPrompt(): string {
  return `You are a helpful translation assistant. Your job is to
receive source code files and translate the values within, and return the exact same
file back to the user, with the translations included. The user will give you a
segment from a typescript file representing i18next resource bundles. Preserve
exactly the source code, english comments and keys. Do not translate any of
those. You WILL translate the values of the keys into the requested target
language. Respond with valid JSON, keeping it EXACTLY the same as given to you,
except your translation. If there is nothing to translate, just return the input
back. Your output will be read programmatically by a node script so it is very
important that you do not change its structure at all, except translation of the
value strings. The values may contain branded feature names of the Sanity.io
platform, such as "dataset", "webhook", "GROQ", "perspective", "Content Lake"
etc. Do not translate any words and terms that are Sanity.io product features as
it is important that the branding is preserved.`
}

/**
 * Push the automated changes back to origin repository
 *
 * @internal
 */
export async function pushChanges(): Promise<void> {
  const rootPath = await getRootPath()
  const locales = await getLocaleRegistry()
  const execGitCommand = (args: string[]) => execFile('git', args, {cwd: rootPath})

  // Start from main branch
  await execGitCommand(['checkout', 'main'])

  // Check if there are _any_ changes (eg across locales)
  const {stdout: allChanges} = await execGitCommand(['status', '--porcelain'])
  if (allChanges.trim() === '') {
    return
  }

  // Store the current git sha so we can revert to it later
  const {stdout: sha} = await execGitCommand(['rev-parse', '--short', 'HEAD'])
  const headSha = sha.trim()

  // Create a branch with _all_ changes and push it, but do not create a PR for it.
  // This allows us to mass-merge all changes in one go should we _want_ to,
  // while the _default_ approach would be to wait for
  for (const locale of locales) {
    // Check if the locale has changes
    const {stdout: changes} = await execGitCommand(['status', '--porcelain', locale.path])
    if (changes.trim() !== '') {
      await addAndCommit(locale)
    }
  }

  // Push the "all changes" branch
  await execGitCommand(['push', 'origin', 'main:fix/auto/translate', '--force'])

  // Now revert to the original HEAD
  await execGitCommand(['reset', '--mixed', headSha])

  // Now do individual branches and send PRs
  for (const locale of locales) {
    // Check if the locale has changes
    const {stdout: changes} = await execGitCommand(['status', '--porcelain', locale.path])
    if (changes.trim() === '') {
      continue
    }

    const hasMaintainers = locale.maintainers.length > 0

    // Switch to a branch for the given locale
    const branchName = `fix/auto/${locale.id}`
    await execGitCommand(['checkout', '-B', branchName])

    // The locale has changes, add the changes to index and commit them
    const commitMessage = await addAndCommit(locale)

    // Push the branch
    await execGitCommand(['push', 'origin', branchName, '--force'])

    if (!(await hasExistingPR(branchName))) {
      let body = `This PR includes AI-generated, automated translation updates for the ${locale.englishName} locale.`

      if (hasMaintainers) {
        const maintainers = locale.maintainers.map((maintainer) => `@${maintainer}`)
        body += `\n\nCC: ${maintainers.join(', ')}`
      }

      const labels = ['autotranslate', hasMaintainers ? 'awaiting-review' : 'maintainerless']
      const labelFlags = labels.flatMap((label) => ['--label', label])

      // Now create the PR 🎉
      await execFile(
        'gh',
        [
          'pr',
          'create',
          '--title',
          commitMessage,
          '--body',
          body,
          '--head',
          branchName,
          '--base',
          'main',
          '--repo',
          'sanity-io/locales',
          '--fill',
          '--reviewer',
          locale.maintainers.join(','),
          ...labelFlags,
        ],
        {cwd: rootPath},
      )
    }

    // Switch back to main branch for next locale
    await execGitCommand(['checkout', 'main'])
  }

  async function addAndCommit(locale: Locale) {
    // The locale has changes, add the changes to index
    await execGitCommand(['add', locale.path])

    // Commit the changes
    const commitMessage = `fix(${locale.id}): automated translation updates`
    await execGitCommand(['commit', '-m', commitMessage])

    return commitMessage
  }
}

async function hasExistingPR(branchName: string) {
  const {stdout} = await execFile('gh', [
    'pr',
    'list',
    '--head',
    branchName,
    '--repo',
    'sanity-io/locales',
    '--limit',
    '1',
  ])

  return stdout.trim() !== ''
}

function noop() {
  /* intentional noop */
}
