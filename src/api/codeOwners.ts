import {writeFile} from 'node:fs/promises'
import {join as joinPath} from 'node:path'
import {getRootPath} from '../util/getRootPath'
import {getLocaleRegistry} from './registry'

const MAX_FILE_SIZE = 3e6 // 3 MB

const template = `
# By default, assign the studio developer experience team.
# Later matching rules will take precedence.
* @sanity-io/locales-reviewers

# Locale-specific owners:
`.trim()

export async function reconcileCodeOwners(): Promise<void> {
  const codeOwnersPath = joinPath(await getRootPath(), 'CODEOWNERS')
  const locales = await getLocaleRegistry()

  const owners: string[] = []
  for (const {id, maintainers} of locales) {
    if (maintainers.length === 0) {
      continue
    }
    const users = maintainers.map((user) => `@${user}`).join(' ')
    owners.push(`/locales/${id}/ ${users}`)
  }

  const content = `${template}\n${owners.join('\n')}\n`

  if (content.length > MAX_FILE_SIZE) {
    throw new Error('Code owners file too large! Please file an issue with the Sanity team.')
  }

  await writeFile(codeOwnersPath, content, {encoding: 'utf8'})
}
