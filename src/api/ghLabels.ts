import {execFile as execFileCb} from 'node:child_process'
import {promisify} from 'node:util'
import {getRootPath} from '../util/getRootPath'
import {getLocaleRegistry} from './registry'

const execFile = promisify(execFileCb)
const SANITY_REVIEWER = 'sanity-io/locales-reviewers'

/**
 * The shape of an individual review within the JSON returned by `gh pr view --json`
 *
 * @internal
 */
interface Review {
  id: string
  author: {
    login: string
  }
  authorAssociation: string
  body: string
  submittedAt: string
  includesCreatedEdit: boolean
  state: 'APPROVED' | 'CHANGES_REQUESTED' | 'COMMENTED' | 'DISMISSED'
}

/**
 * The shape of an individual label within the JSON returned by `gh pr view --json`
 *
 * @internal
 */
interface Label {
  id: string
  name: string
  description: string
  color: string
}

/**
 * The shape of the JSON returned by `gh pr view --json <parts>`
 *
 * @internal
 */
interface ReviewResponse {
  author: {is_bot: boolean; login: string}
  reviews: Review[]
  labels: Label[]
}

/**
 * Assigns reviewers to the given PR, based on the currently checked out branch.
 * There is no guarantee that the PR and the branch in question matches, so treat with caution.
 *
 * @param prNumber - The PR number to add reviewers to
 * @returns A promise that resolves to the assigned reviewers
 * @internal
 */
export async function adjustLabels(prNumber: number): Promise<void> {
  const [rootPath, {reviews, labels, author}, maintainers] = await Promise.all([
    getRootPath(),
    getPullRequestDetails(prNumber),
    getMaintainersFromBranchDiff(),
  ])

  let isApproved: boolean | undefined
  for (const review of reviews) {
    if (!maintainers.includes(review.author.login)) {
      continue
    }

    if (review.state.toUpperCase() === 'APPROVED') {
      isApproved = true
      continue
    }

    if (review.state.toUpperCase() === 'CHANGES_REQUESTED') {
      isApproved = false
      continue
    }
  }

  const removeLabels = []
  const addLabels =
    !labels.some((label) => label.name === 'autotranslate') && author.is_bot
      ? ['autotranslate']
      : []

  if (isApproved) {
    addLabels.push('approved')
    removeLabels.push('awaiting-review')
  } else if (isApproved === false) {
    removeLabels.push('approved', 'awaiting-review')
  }

  const flags = []
  if (removeLabels.length > 0) {
    flags.push('--remove-label', removeLabels.join(','))
  }
  if (addLabels.length > 0) {
    flags.push('--add-label', addLabels.join(','))
  }

  if (flags.length > 0) {
    await execFile('gh', ['pr', 'edit', `${prNumber}`, ...flags], {cwd: rootPath})
  }
}

/**
 * Retrieves the reviews, labels and author info for a given PR
 *
 * @param prNumber - The PR number to get info for
 * @returns A promise that resolves to the reviews and labels of the PR
 * @internal
 */
async function getPullRequestDetails(prNumber: number): Promise<ReviewResponse> {
  const rootPath = await getRootPath()
  const {stdout} = await execFile(
    'gh',
    ['pr', 'view', `${prNumber}`, '--json', 'reviews,labels,author'],
    {
      cwd: rootPath,
      env: {...process.env, CLICOLOR: '0'},
    },
  )

  return JSON.parse(stdout)
}

/**
 * Uses the currently checked out branch and gets the diffs from origin/main,
 * then figures out which reviewers are applicable for the changes.
 *
 * @returns A promise that resolves to an array of maintainers for the locale
 * @throws If the PR touches more than a single locale
 * @internal
 */
async function getMaintainersFromBranchDiff(): Promise<string[]> {
  const rootPath = await getRootPath()
  const locales = await getLocaleRegistry()
  const execGitCommand = (args: string[]) => execFile('git', args, {cwd: rootPath})

  const {stdout: currentBranch} = await execGitCommand(['branch', '--show-current'])

  const range = `origin/main...${currentBranch.trim()}`
  const {stdout: fileDiffs} = await execGitCommand([
    '--no-pager',
    'diff',
    '--name-only',
    `${range}`,
  ])

  const changedFiles = fileDiffs.trim().split('\n')
  const localeDiffs = new Set(
    changedFiles.filter((file) => file.startsWith('locales/')).map((file) => file.split('/')[1]),
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
