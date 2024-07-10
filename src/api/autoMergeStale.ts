import {execFile as execFileCb} from 'node:child_process'
import {promisify} from 'node:util'

import {outdent} from 'outdent'
import {ZodError} from 'zod'
import {fromZodError} from 'zod-validation-error'

import {githubPrListSchema} from '../schemas'
import type {GitHubPRList, Locale} from '../types'
import {getRootPath} from '../util/getRootPath'
import {AUTO_TRANSLATE_BRANCH_PREFIX} from './autoTranslate'
import {PR_LABEL_AWAITING_REVIEW} from './ghLabels'
import {getLocaleRegistry} from './registry'

const execFile = promisify(execFileCb)

const ONE_DAY_MS = 864e5
const STALE_THRESHOLD_DAYS = 14
const GH_REPO_OWNER = 'sanity-io'
const GH_REPO_NAME = 'locales'

/**
 * Options for the auto merge stale operation
 *
 * @internal
 */
export interface AutoMergeStaleOptions {
  /**
   * If true, the operation will not actually merge/comment on any PRs, but will instead log what
   * it would have done. Useful for testing.
   */
  dryRun?: boolean

  /**
   * Optional logging function that will be called with progress messages
   *
   * @param message - The message to log
   */
  logger?: (message: string) => void
}

/**
 * Finds auto-translation PRs that are stale, eg the maintainers of the locales have
 * not responded to pull request review requests for X days, and merges them with a
 * comment for the maintainers indicating why it was done and how they can address
 * any issues with the automatic translations.
 *
 * @param options - Options for the auto merging operation
 * @returns A promise that resolves when operation is complete
 * @internal
 */
export async function autoMergeStale(options: AutoMergeStaleOptions): Promise<void> {
  const {dryRun, logger = noop} = options

  if (dryRun) {
    logger('Running in dry-run mode, no actions will be executed')
  }

  logger('Finding pending auto-translated PRs')
  const [locales, pendingPRs] = await Promise.all([
    getLocaleRegistry(),
    findPendingMergeableAutoTranslatedPRs(),
  ])

  // Filter down to the PRs that are _stale_, eg beyond our threshold
  const now = new Date()
  const daysSinceDate = (date: string) =>
    Math.floor((now.getTime() - new Date(date).getTime()) / ONE_DAY_MS)

  const stale = pendingPRs.filter((pr) => daysSinceDate(pr.createdAt) > STALE_THRESHOLD_DAYS)
  logger(`Found ${pendingPRs.length} pending PRs`)
  logger(`Found ${stale.length} stale PRs`)
  if (stale.length === 0) {
    return
  }

  // For each PR, comment on it and then merge it
  for (const pr of stale) {
    logger(`Processing PR #${pr.number}`)
    const localeId = pr.headRefName.slice(AUTO_TRANSLATE_BRANCH_PREFIX.length + 1)
    const locale = locales.find((candidate) => candidate.id === localeId)
    if (!locale) {
      logger(`No locale found for ${localeId}, skipping`)
      continue
    }

    logger(`Merging PR #${pr.number} for locale ${localeId} (${locale.englishName || locale.name})`)
    await commentAndMergeStalePR(pr, locale, options)
  }
}

async function commentAndMergeStalePR(
  pr: GitHubPRList[number],
  locale: Locale,
  {dryRun, logger = noop}: AutoMergeStaleOptions,
) {
  const rootPath = await getRootPath()
  const execOptions = {cwd: rootPath, env: {...process.env, CLICOLOR: '0'}}
  const comment = getCommentBody(locale)
  const removeLabel = PR_LABEL_AWAITING_REVIEW

  if (dryRun) {
    logger(`Would have commented on PR #${pr.number} with: ${comment}`)
    logger(`Would have merged PR #${pr.number}`)
    return
  }

  await execFile('gh', ['pr', 'comment', `${pr.number}`, '--body', comment], execOptions)
  await execFile('gh', ['pr', 'edit', `${pr.number}`, '--remove-label', removeLabel], execOptions)
  await execFile('gh', ['pr', 'merge', `${pr.number}`, '--squash', '--delete-branch'], execOptions)
}

async function findPendingMergeableAutoTranslatedPRs() {
  const rootPath = await getRootPath()
  const {stdout} = await execFile(
    'gh',
    [
      'pr',
      'list',
      '--label',
      PR_LABEL_AWAITING_REVIEW,
      '--json',
      'createdAt,mergeable,number,headRefName,headRepository,headRepositoryOwner',
    ],
    {
      cwd: rootPath,
      // eslint-disable-next-line no-process-env
      env: {...process.env, CLICOLOR: '0'},
    },
  )

  let pending: GitHubPRList = []
  try {
    pending = githubPrListSchema.parse(JSON.parse(stdout))
  } catch (err: unknown) {
    throw err instanceof ZodError ? fromZodError(err) : err
  }

  return pending.filter(
    (pr) =>
      // PR is in our own repository
      pr.headRepositoryOwner.login === GH_REPO_OWNER &&
      pr.headRepository.name === GH_REPO_NAME &&
      // PR is an auto-translated PR
      pr.headRefName.startsWith(`${AUTO_TRANSLATE_BRANCH_PREFIX}/`) &&
      // Does not have any conflicts
      pr.mergeable === 'MERGEABLE',
  )
}

function getCommentBody(locale: Locale) {
  const ats = locale.maintainers.map((maintainer) => `@${maintainer}`).join(' ')
  return outdent`
    It has been ${STALE_THRESHOLD_DAYS} days since this PR was created, and no maintainer
    has responded to the review request. Merging with automatic translations as-is.

    ${ats}, if you find any changes to be necessary, please open a new pull request with
    the suggested changes. This is an automatic workflow, replies are not monitored.
  `.trim()
}

function noop() {
  /* intentional noop */
}
