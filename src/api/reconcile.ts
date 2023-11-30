import {reconcileCodeOwners} from './codeOwners'
import {reconcileLocalePackages} from './locales'
import {reconcileStudio} from './studio'

export async function reconcileAll(): Promise<void> {
  await reconcileLocalePackages()
  await reconcileCodeOwners()
  await reconcileStudio()
}
