import {execFile as execFileCb} from 'node:child_process'
import {promisify} from 'node:util'
import {ZodError} from 'zod'
import {fromZodError} from 'zod-validation-error'
import {githubPrCommentsSchema, githubPrSchema} from '../schemas'
import type {GitHubFile, GitHubPR} from '../types'
import {getRootPath} from '../util/getRootPath'
import {getLocaleRegistry} from './registry'

const execFile = promisify(execFileCb)
const SANITY_REVIEWER = 'sanity-io/locales-reviewers'

/**
 * Options for the label adjustments operation
 *
 * @internal
 */
export interface AdjustLabelsOptions {
  /**
   * GitHub PR number to adjust labels for
   */
  prNumber: number

  /**
   * Optional logging function that will be called with progress messages
   *
   * @param message - The message to log
   */
  logger?: (message: string) => void
}

/**
 * Assigns reviewers to the given PR, based on the currently checked out branch.
 * There is no guarantee that the PR and the branch in question matches, so treat with caution.
 *
 * @param options - Options for the label adjustments operation
 * @returns A promise that resolves when operation is complete
 * @internal
 */
export async function adjustLabels(options: AdjustLabelsOptions): Promise<void> {
  const {prNumber, logger = noop} = options

  logger(`Adjusting labels for PR #${prNumber}`)

  const [rootPath, {reviews, labels, author, files}] = await Promise.all([
    getRootPath(),
    getPullRequestDetails(prNumber),
  ])

  const maintainers = await getMaintainersFromChangedFiles(files, logger)
  const isMaintainer = (login: string) => maintainers.includes(login)

  const labelNames = labels.map((label) => label.name)
  logger(`Found ${labels.length} current labels for the PR: ${labelNames.join(', ')}`)
  logger(`Found ${reviews.length} reviews for the PR`)
  logger(`Found ${maintainers.length} maintainers: ${maintainers.join(', ')}`)

  let isApproved: boolean | undefined
  let hasMaintainerReview = false
  for (const review of reviews) {
    if (!isMaintainer(review.author.login)) {
      logger(`Skipping review from ${review.author.login} as they are not a maintainer`)
      continue
    }

    hasMaintainerReview = true

    if (review.state.toUpperCase() === 'APPROVED') {
      logger(`Review from ${review.author.login} is approved`)
      isApproved = true
      continue
    }

    if (review.state.toUpperCase() === 'CHANGES_REQUESTED') {
      logger(`Review from ${review.author.login} has requested changes`)
      isApproved = false
      break // Don't continue once we have a requested changes review
    }
  }

  if (isApproved === undefined && hasMaintainerReview) {
    // See if there are _comments_ that include a `suggestion` block,
    // in which case we should treat it as requesting changes
    const comments = await getCommentsForPR(prNumber)
    if (
      comments.some(({user, body}) => isMaintainer(user.login) && body.includes('```suggestion'))
    ) {
      logger('Comments include suggestions, treating as requested changes')
      isApproved = false
    }
  }

  const removeLabels = []
  const addLabels =
    !labels.some((label) => label.name === 'autotranslate') && author.is_bot
      ? ['autotranslate']
      : []

  if (isApproved) {
    logger('PR is approved - adjusting labels to match')
    addLabels.push('approved')
    removeLabels.push('awaiting-review')
  } else if (isApproved === false) {
    logger('PR has requested changes - adjusting labels to match')
    removeLabels.push('approved', 'awaiting-review')
    addLabels.push('changes-requested')
  } else {
    logger(reviews.length > 0 ? 'PR is in an indeterminate state' : 'PR is awaiting review')
  }

  const flags = []
  if (removeLabels.length > 0) {
    flags.push('--remove-label', removeLabels.join(','))
  }
  if (addLabels.length > 0) {
    flags.push('--add-label', addLabels.join(','))
  }

  if (flags.length === 0) {
    logger('No changes to labels, skipping')
    return
  }

  await execFile('gh', ['pr', 'edit', `${prNumber}`, ...flags], {cwd: rootPath})
}

/**
 * Retrieves the details for a GitHub PR
 *
 * @param prNumber - The PR number to get info for
 * @returns A promise that resolves with the PR details
 * @internal
 */
async function getPullRequestDetails(prNumber: number): Promise<GitHubPR> {
  const rootPath = await getRootPath()
  const {stdout} = await execFile(
    'gh',
    ['pr', 'view', `${prNumber}`, '--json', 'reviews,labels,author,files'],
    {
      cwd: rootPath,
      // eslint-disable-next-line no-process-env
      env: {...process.env, CLICOLOR: '0'},
    },
  )

  try {
    return githubPrSchema.parse(JSON.parse(stdout))
  } catch (err: unknown) {
    throw err instanceof ZodError ? fromZodError(err) : err
  }
}

async function getCommentsForPR(prNumber: number) {
  const rootPath = await getRootPath()
  const {stdout} = await execFile(
    'gh',
    [
      'api',
      '-H',
      'Accept: application/vnd.github+json',
      '-H',
      'X-GitHub-Api-Version: 2022-11-28',
      `/repos/sanity-io/locales/pulls/${prNumber}/comments`,
    ],
    {
      cwd: rootPath,
      // eslint-disable-next-line no-process-env
      env: {...process.env, CLICOLOR: '0'},
    },
  )

  try {
    return githubPrCommentsSchema.parse(JSON.parse(stdout))
  } catch (err: unknown) {
    throw err instanceof ZodError ? fromZodError(err) : err
  }
}

/**
 * Uses the passed files to determine the maintainers for the changes in the PR
 *
 * @param files - List of files to use for determining reviewers
 * @param logger - Optional logging function that will be called with progress messages
 * @returns A promise that resolves to an array of maintainers for the locale
 * @throws If the PR touches more than a single locale
 * @internal
 */
async function getMaintainersFromChangedFiles(
  files: GitHubFile[],
  logger: AdjustLabelsOptions['logger'] = noop,
): Promise<string[]> {
  logger(`PR has ${files.length} changed files:`)
  logger(files.map((file) => `  - ${file.path}`).join('\n'))

  const locales = await getLocaleRegistry()
  const localeDiffs = new Set(
    files.filter((file) => file.path.startsWith('locales/')).map((file) => file.path.split('/')[1]),
  )

  if (localeDiffs.size > 1) {
    const ids = Array.from(localeDiffs).join(', ')
    throw new Error(`PR touches more than one locale (${ids}), cannot assign reviewers`)
  }

  if (localeDiffs.size === 0) {
    return [SANITY_REVIEWER]
  }

  const localeId = Array.from(localeDiffs)[0]
  const locale = locales.find((candidate) => candidate.id === localeId)
  if (!locale) {
    return [SANITY_REVIEWER]
  }

  return locale.maintainers.length > 0 ? locale.maintainers : [SANITY_REVIEWER]
}

function noop() {
  /* intentional noop */
}
