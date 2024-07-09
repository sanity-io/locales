import {readFile} from 'node:fs/promises'
import {join as joinPath, relative as relativePath} from 'node:path'

import {getRootPath} from '../../util/getRootPath'
import {getLocaleRegistry} from '../registry'

/**
 * Builds the root README.md file
 *
 * @returns A promise that resolves to the README.md file contents
 * @internal
 */
export async function buildRootReadme(): Promise<string> {
  const registry = await getLocaleRegistry()
  const rootPath = await getRootPath()
  const readme = await readFile(joinPath(rootPath, 'README.md'), 'utf-8')

  const lines = readme.split('\n')

  let localeListIndex = -1
  let inLocaleList = false

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]
    if (line.includes('<!-- <locale-list> -->')) {
      localeListIndex = i + 1
      inLocaleList = true
    } else if (line.includes('<!-- </locale-list> -->')) {
      inLocaleList = false
    } else if (inLocaleList) {
      lines.splice(i, 1)
      i--
    }
  }

  if (localeListIndex === -1) {
    throw new Error('Could not find locale list in README.md')
  }

  const localeList = []
  localeList.push(`| Language | Package | Has maintainers |`)
  localeList.push(`| -------- | ------- | --------------- |`)

  const enSorted = registry.slice().sort((a, b) => a.englishName.localeCompare(b.englishName))
  for (const locale of enSorted) {
    const path = relativePath(rootPath, locale.path)
    const ghUrl = `https://github.com/sanity-io/locales/tree/main/${path}`
    const npmUrl = `https://www.npmjs.com/package/${locale.packageName}`
    const issueUrl = `https://github.com/sanity-io/locales/issues/new?assignees=&labels=&projects=&template=request-maintainer.md&title=Maintainer%3A+${locale.id}`
    const maintainer = locale.maintainers.length > 0 ? '✅' : ` [Join](${issueUrl}) `
    localeList.push(
      `| [${locale.englishName} / ${locale.name}](${ghUrl}) | [${locale.packageName}](${npmUrl}) | ${maintainer} |`,
    )
  }

  lines.splice(localeListIndex, 0, ...localeList)

  return lines.join('\n')
}
