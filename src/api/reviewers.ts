import {execFile as execFileCb} from 'node:child_process'
import {promisify} from 'node:util'
import {getRootPath} from '../util/getRootPath'
import {getLocaleRegistry} from './registry'

const execFile = promisify(execFileCb)
const SANITY_REVIEWER = 'sanity-io/locales-reviewers'

/**
 * An object containing resolved reviewers
 *
 * @internal
 */
export interface Reviewers {
  /**
   * All reviewers, eg regardless of which locale they are reviewers _of_
   */
  all: Set<string>

  /**
   * Reviewers by locale, eg which reviewers are applicable for which locale
   */
  byLocale: Map<string, Set<string>>
}

/**
 * Uses the currently checked out branch and gets the diffs from origin/main,
 * then figures out which reviewers are applicable for the changes.
 *
 * @returns A promise that resolves to an object that contains reviewers
 */
export async function getReviewersFromBranchDiff(): Promise<Reviewers> {
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

  // Find locales corresponding to the changed files
  const reviewers = new Set<string>()
  const byLocale = new Map<string, Set<string>>()
  for (const localeId of localeDiffs) {
    const localeReviewers = byLocale.get(localeId) || new Set<string>()
    byLocale.set(localeId, localeReviewers)

    const locale = locales.find((candidate) => candidate.id === localeId)
    if (!locale) {
      // New locale, add Sanity team as reviewer
      localeReviewers.add(SANITY_REVIEWER)
      continue
    }

    // Add all maintainers of the locale as reviewers
    for (const maintainer of locale.maintainers) {
      reviewers.add(maintainer)
      localeReviewers.add(maintainer)
    }
  }

  // If we have no reviewers at all, add Sanity team as reviewer
  if (reviewers.size === 0) {
    reviewers.add(SANITY_REVIEWER)
  }

  return {
    all: reviewers,
    byLocale,
  }
}

/**
 * Assigns reviewers to the given PR, based on the currently checked out branch.
 * There is no guarantee that the PR and the branch in question matches, so treat with caution.
 *
 * @param prNumber - The PR number to add reviewers to
 * @returns A promise that resolves to the assigned reviewers
 * @internal
 */
export async function assignReviewers(prNumber: number): Promise<Reviewers['all']> {
  const rootPath = await getRootPath()
  const {all: reviewers} = await getReviewersFromBranchDiff()

  await execFile(
    'gh',
    ['pr', 'edit', `${prNumber}`, '--add-reviewer', Array.from(reviewers).join(',')],
    {cwd: rootPath},
  )

  return reviewers
}
