import {execFile as execFileCb} from 'node:child_process'
import {promisify} from 'node:util'

import {getRootPath} from '../util/getRootPath'

const execFile = promisify(execFileCb)

/**
 * Options for merging a PR
 *
 * @internal
 */
export interface MergePROptions {
  /**
   * Whether or not to delete the branch after merging
   * Defaults to `true`
   */
  deleteBranch?: boolean
}

/**
 * Merges a PR with the given PR number or branch name
 *
 * @param prNumberOrBranchName The PR number or branch name to merge
 * @param options Options for the merge operation
 * @returns A promise that resolves when the PR has been merged
 * @internal
 */
export async function mergePR(
  prNumberOrBranchName: number | string,
  options: MergePROptions = {},
): Promise<void> {
  const flags = options.deleteBranch === false ? [] : ['--delete-branch']
  await execFile('gh', ['pr', 'merge', `${prNumberOrBranchName}`, '--squash', ...flags], {
    cwd: await getRootPath(),
  })
}
