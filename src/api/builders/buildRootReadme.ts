import {readFile} from 'fs/promises'
import {join as joinPath, relative as relativePath} from 'node:path'
import {getLocaleRegistry} from '../registry'
import {getRootPath} from '../../util/getRootPath'

export async function buildRootReadme() {
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
  localeList.push(`| Language | Package | Folder |`)
  localeList.push(`| -------- | ------- | ------ |`)

  for (const locale of registry) {
    const path = relativePath(rootPath, locale.path)
    const ghUrl = `https://github.com/sanity-io/locales/tree/main/${path}`
    const npmUrl = `https://www.npmjs.com/package/${locale.packageName}`
    localeList.push(
      `| ${locale.englishName} / ${locale.name} | [${locale.packageName}](${npmUrl}) | [${path}](${ghUrl}) |`,
    )
  }

  lines.splice(localeListIndex, 0, ...localeList)

  return lines.join('\n')
}
