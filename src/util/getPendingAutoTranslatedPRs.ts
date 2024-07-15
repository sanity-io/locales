import {execFile as execFileCb} from 'node:child_process'
import {promisify} from 'node:util'

import {ZodError} from 'zod'
import {fromZodError} from 'zod-validation-error'

import {AUTO_TRANSLATE_BRANCH_PREFIX} from '../api/autoTranslate'
import {PR_LABEL_AWAITING_REVIEW} from '../api/ghLabels'
import {githubPrListSchema} from '../schemas'
import type {GitHubPRList} from '../types'
import {getRootPath} from './getRootPath'

const execFile = promisify(execFileCb)

const GH_REPO_OWNER = 'sanity-io'
const GH_REPO_NAME = 'locales'

/**
 * Get a list of pending auto-translated PRs that are awaiting review, and are not in conflict.
 *
 * @returns A promise that resolves with a list of PRs
 */
export async function getPendingAutoTranslatedPRs(): Promise<GitHubPRList> {
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
      pr.mergeable === 'MERGEABLE',
  )
}
