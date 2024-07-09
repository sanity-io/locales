import {execFile as execFileCb} from 'node:child_process'
import {promisify} from 'node:util'

import {getRootPath} from '../util/getRootPath'
import {reconcileLocalePackages} from './locales'
import {reconcileRegistry} from './registry'
import {reconcileReleasePleaseConfig} from './release'
import {reconcileStudio} from './studio'
import {reconcileAutoTranslateWorkflow} from './workflows'

const execFile = promisify(execFileCb)

export async function reconcileAll(): Promise<void> {
  await reconcileRegistry()
  await reconcileLocalePackages()
  await reconcileStudio()
  await reconcileReleasePleaseConfig()
  await reconcileLockFile()
  await reconcileAutoTranslateWorkflow()
}

async function reconcileLockFile() {
  await execFile('pnpm', ['install', '--lockfile-only'], {
    cwd: await getRootPath(),
  })
}
