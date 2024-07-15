import {execFile as execFileCb} from 'node:child_process'
import {promisify} from 'node:util'

import {outdent} from 'outdent'
import {ZodError} from 'zod'
import {fromZodError} from 'zod-validation-error'

import {githubPrListSchema} from '../schemas'
import type {GitHubPRList, Locale} from '../types'
import {getRootPath} from '../util/getRootPath'
import {STALE_MERGE_THRESHOLD_DAYS} from './autoMergeStale'
import {AUTO_TRANSLATE_BRANCH_PREFIX} from './autoTranslate'
import {PR_LABEL_AWAITING_REVIEW, PR_LABEL_NUDGED} from './ghLabels'
import {getLocaleRegistry} from './registry'

const execFile = promisify(execFileCb)

const ONE_DAY_MS = 864e5
const STALE_NUDGE_THRESHOLD_DAYS = 7
const GH_REPO_OWNER = 'sanity-io'
const GH_REPO_NAME = 'locales'

/**
 * Options for the nudge stale operation
 *
 * @internal
 */
export interface NudgeStaleOptions {
  /**
   * If true, the operation will not actually comment on any PRs, but will instead log what
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
 * not responded to pull request review requests for X days, and nudges them with a
 * comment for the maintainers indicating that it's been a while without activity.
 * Also adds a label to the PR to indicate that a nudge has happened, preventing it
 * from doing the same operation again in the future.
 *
 * @param options - Options for the nudge operation
 * @returns A promise that resolves when operation is complete
 * @internal
 */
export async function nudgeStale(options: NudgeStaleOptions): Promise<void> {
  const {dryRun, logger = noop} = options

  if (dryRun) {
    logger('Running in dry-run mode, no actions will be executed')
  }

  logger('Finding pending auto-translated PRs')
  const [locales, pendingPRs] = await Promise.all([
    getLocaleRegistry(),
    findPendingStaleAutoTranslatedPRs(),
  ])

  // Filter down to the PRs that are _stale_, eg beyond our threshold
  const now = new Date()
  const daysSinceDate = (date: string) =>
    Math.floor((now.getTime() - new Date(date).getTime()) / ONE_DAY_MS)

  const stale = pendingPRs.filter((pr) => daysSinceDate(pr.createdAt) > STALE_NUDGE_THRESHOLD_DAYS)
  logger(`Found ${pendingPRs.length} pending PRs`)
  logger(`Found ${stale.length} stale PRs`)
  if (stale.length === 0) {
    return
  }

  // For each PR, comment on it
  for (const pr of stale) {
    logger(`Processing PR #${pr.number}`)
    const localeId = pr.headRefName.slice(AUTO_TRANSLATE_BRANCH_PREFIX.length + 1)
    const locale = locales.find((candidate) => candidate.id === localeId)
    if (!locale) {
      logger(`No locale found for ${localeId}, skipping`)
      continue
    }

    logger(
      `Commenting on PR #${pr.number} for locale ${localeId} (${locale.englishName || locale.name})`,
    )
    await commentOnStalePR(pr, locale, options)
  }
}

async function commentOnStalePR(
  pr: GitHubPRList[number],
  locale: Locale,
  {dryRun, logger = noop}: NudgeStaleOptions,
) {
  const rootPath = await getRootPath()
  const execOptions = {cwd: rootPath, env: {...process.env, CLICOLOR: '0'}}
  const comment = getCommentBody(locale)
  const addLabel = PR_LABEL_NUDGED

  if (dryRun) {
    logger(`Would have commented on PR #${pr.number} with:\n\`\`\`\n${comment}\n\`\`\``)
    logger(`Would have added "${addLabel}" label on PR #${pr.number}`)
    return
  }

  await execFile('gh', ['pr', 'comment', `${pr.number}`, '--body', comment], execOptions)
  await execFile('gh', ['pr', 'edit', `${pr.number}`, '--add-label', addLabel], execOptions)
}

async function findPendingStaleAutoTranslatedPRs() {
  const rootPath = await getRootPath()
  const {stdout} = await execFile(
    'gh',
    [
      'pr',
      'list',
      '--label',
      PR_LABEL_AWAITING_REVIEW,
      '--json',
      'createdAt,mergeable,number,headRefName,headRepository,headRepositoryOwner,labels',
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
      pr.mergeable === 'MERGEABLE' &&
      // Does not already have the "nudged" label, eg has already been nudged
      !pr.labels.some((label) => label.name === PR_LABEL_NUDGED),
  )
}

function getCommentBody(locale: Locale) {
  const daysUntilMerge = Math.max(STALE_MERGE_THRESHOLD_DAYS - STALE_NUDGE_THRESHOLD_DAYS, 1)
  const ats = locale.maintainers.map((maintainer) => `@${maintainer}`).join(' ')
  return outdent`
    It has been ${STALE_NUDGE_THRESHOLD_DAYS} days since this PR was created, and no maintainer
    has responded to the review request. This PR will automatically be merged as-is if no
    review has been made within the next ${daysUntilMerge} days.

    ${ats}, a review of the changes suggested here would be greatly appreciated 🙏

    This is an automatic workflow, replies are not monitored.
  `.trim()
}

function noop() {
  /* intentional noop */
}
