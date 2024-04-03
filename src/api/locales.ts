import {copyFile, mkdir, readFile, writeFile} from 'node:fs/promises'
import {join as joinPath} from 'node:path'
import type {Locale} from '../types'
import {getLocaleSourcePath} from '../util/getLocalesPath'
import {getRootPath} from '../util/getRootPath'
import {writeFormattedFile} from '../util/writeFormattedFile'
import {buildLocaleIndexModule} from './builders/buildLocaleIndexModule'
import {buildLocaleReadme} from './builders/buildLocaleReadme'
import {buildPackageConfig} from './builders/buildPackageConfig'
import {buildPackageJson} from './builders/buildPackageJson'
import {buildRootReadme} from './builders/buildRootReadme'
import {getLocaleRegistry} from './registry'
import {reconcileResources} from './resources'

export async function reconcileLocalePackages(): Promise<void> {
  await writeRootLicense()
  const locales = await getLocaleRegistry()
  for (const locale of locales) {
    await reconcileLocalePackage(locale)
  }
  await writeRootReadme()
}

export async function reconcileLocalePackage(locale: Locale): Promise<void> {
  await ensureLocaleSourceDir(locale)
  await writeIndexModule(locale)
  await writePackageJson(locale)
  await writePkgConfig(locale)
  await writeLicense(locale)
  await writeReadme(locale)
  await reconcileResources(locale)
}

async function ensureLocaleSourceDir(locale: Locale) {
  const srcDir = await getLocaleSourcePath(locale)
  await mkdir(srcDir, {recursive: true})
}

async function writeIndexModule(locale: Locale) {
  const targetPath = joinPath(await getLocaleSourcePath(locale), 'index.ts')
  const code = await buildLocaleIndexModule(locale)
  return writeFormattedFile(targetPath, code)
}

async function writePackageJson(locale: Locale) {
  const targetPath = joinPath(locale.path, 'package.json')
  const pkg = await buildPackageJson(locale)
  return writeFormattedFile(targetPath, pkg)
}

async function writePkgConfig(locale: Locale) {
  const config = await buildPackageConfig()
  return writeFormattedFile(joinPath(locale.path, 'package.config.ts'), config)
}

async function writeRootLicense() {
  const licensePath = joinPath(await getRootPath(), 'LICENSE')
  const baseLicense = await readFile(licensePath, 'utf8')
  const year = new Date().getFullYear()
  const dstLicense = baseLicense.replace(/ 20\d\d Sanity/g, ` ${year} Sanity`)
  return writeFile(licensePath, dstLicense, {encoding: 'utf8'})
}

async function writeLicense(locale: Locale) {
  const fromPath = joinPath(await getRootPath(), 'LICENSE')
  const toPath = joinPath(locale.path, 'LICENSE')
  return copyFile(fromPath, toPath)
}

async function writeReadme(locale: Locale) {
  const targetPath = joinPath(locale.path, 'README.md')
  const readme = await buildLocaleReadme(locale)
  return writeFormattedFile(targetPath, readme)
}

async function writeRootReadme() {
  const targetPath = joinPath(await getRootPath(), 'README.md')
  const readme = await buildRootReadme()
  return writeFormattedFile(targetPath, readme)
}
