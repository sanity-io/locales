import {execFile as execFileCb} from 'node:child_process'
import {promisify} from 'node:util'
import {getRootPath} from '../util/getRootPath'
import {reconcileCodeOwners} from './codeOwners'
import {reconcileLocalePackages} from './locales'
import {reconcileStudio} from './studio'

const execFile = promisify(execFileCb)

export async function reconcileAll(): Promise<void> {
  await reconcileLocalePackages()
  await reconcileCodeOwners()
  await reconcileStudio()
  await reconcileLockFile()
}

async function reconcileLockFile() {
  await execFile('pnpm', ['install', '--lockfile-only'], {
    cwd: await getRootPath(),
  })
}
