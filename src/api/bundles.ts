import {dirname, join as joinPath} from 'node:path'
import {mkdir, readdir as readDir} from 'node:fs/promises'
import {green} from 'ansi-colors'
import {stringLiteral, Comment} from '@babel/types'
import generateFromAst from '@babel/generator'
import {getRootPath} from '../util/getRootPath'
import {getLocalesPath} from '../util/getLocalesPath'
import {getOfficialBundles} from '../util/getOfficialBundles'
import type {BundleModule, Locale, ResourceBundle} from '../types'
import {writeFormattedFile} from '../util/writeFormattedFile'
import {getCanonicalResourceKey} from '../util/canonicalResourceKey'

const bundleFileNameRegex = /^[a-zA-Z0-9]+\.ts$/
const excludedFiles = ['index.ts']

export async function getBundlesFromLocale(locale: Locale): Promise<BundleModule[]> {
  const rootPath = await getRootPath()
  const localePath = joinPath(rootPath, 'locales', locale.id)

  const entries = await readDir(joinPath(localePath, 'src'), {withFileTypes: true})
  const files = entries.filter((entry) => entry.isFile() && !excludedFiles.includes(entry.name))

  const knownNamespaces = await getOfficalBundleMap()
  const bundles: BundleModule[] = []
  for (const entry of files) {
    if (!bundleFileNameRegex.test(entry.name)) {
      throw new Error(`Locale ${locale.id} contained file with invalid name: ${entry.name}`)
    }

    // We do not want arbitrary files and namespaces, only the one we officially recognize
    const namespace = entry.name.replace(/\.ts$/, '')
    if (!knownNamespaces.has(namespace)) {
      throw new Error(`Locale ${locale.id} contained file with unknown namespace: ${entry.name}`)
    }

    // Import the bundle module to ensure it's valid, has an `export` etc
    const resources = await import(joinPath(localePath, 'src', entry.name))
    if (!resources.default) {
      throw new Error(
        `Locale ${locale.id} contained file with missing default export: ${entry.name}`,
      )
    }

    bundles.push({
      namespace,
      filename: entry.name,
      resources: resources.default,
    })
  }

  return bundles
}

export async function writeLocaleDirectory(locale: Locale) {
  await mkdir(joinPath(await getLocalesPath(), locale.id, 'src'), {recursive: true})
}

export async function createPlaceholderBundles(locale: Locale) {
  const knownNamespaces = await getOfficalBundleMap()
  const missingNamespaces = await findMissingNamespaces(locale)

  const rootPath = await getRootPath()
  const localePath = joinPath(rootPath, 'locales', locale.id)

  // For the namespaces that are missing, automatically create the bundle files
  const bundles: BundleModule[] = []
  for (const namespace of missingNamespaces) {
    const resources = knownNamespaces.get(namespace)
    if (!resources) {
      throw new Error(`Known namespaces should include ${namespace}`)
    }

    console.log(
      'Locale "%s" is missing namespace "%s", creating file',
      green(locale.id),
      green(namespace),
    )
    await writeBundleNamespace(locale, resources, {placeholders: true})
    bundles.push({
      namespace,
      filename: joinPath(localePath, 'src', `${namespace}.ts`),
      resources: {},
    })
  }

  return bundles
}

export async function findMissingNamespaces(locale: Locale): Promise<string[]> {
  const official = await getOfficialBundles()
  const missingNamespaces = new Set(official.map(({namespace}) => namespace))

  const existing = await getBundlesFromLocale(locale)
  for (const bundle of existing) {
    missingNamespaces.delete(bundle.namespace)
  }

  return Array.from(missingNamespaces)
}

export async function findMissingResources(locale: Locale) {
  const bundles = await getBundlesFromLocale(locale)
  const official = await getOfficialBundles()

  // Key: namespace, value: canonical keys
  const officialKeys = new Map<string, Set<string>>()
  official.forEach((bundle) => {
    officialKeys.set(
      bundle.namespace,
      new Set(bundle.resources.map((resource) => getCanonicalResourceKey(resource.key))),
    )
  })

  // Key: namespace, value: canonical keys
  const localeKeys = new Map<string, Set<string>>()
  bundles.forEach((bundle) => {
    localeKeys.set(
      bundle.namespace,
      new Set(Object.keys(bundle.resources).map((key) => getCanonicalResourceKey(key))),
    )
  })

  // Key: namespace, value: canonical keys
  const missingKeys: {namespace: string; missingKeys: Set<string>}[] = []
  for (const [namespace, keys] of officialKeys) {
    const missing = new Set<string>()

    const nsKeys = localeKeys.get(namespace)
    for (const key of keys) {
      if (!nsKeys || !nsKeys.has(key)) {
        missing.add(key)
      }
    }

    if (missing.size > 0) {
      missingKeys.push({namespace, missingKeys: missing})
    }
  }

  return missingKeys
}

async function getOfficalBundleMap() {
  const official = await getOfficialBundles()
  const knownNamespaces = new Map<string, ResourceBundle>()
  official.forEach((bundle) => knownNamespaces.set(bundle.namespace, bundle))
  return knownNamespaces
}

async function writeBundleNamespace(
  locale: Locale,
  bundle: ResourceBundle,
  options: {placeholders?: boolean} = {},
) {
  const localesPath = await getLocalesPath()
  const nsPath = joinPath(localesPath, locale.id, 'src', `${bundle.namespace}.ts`)

  // Sometimes we may only want "placeholders", eg when we do not have translated strings yet
  // In this case, use an `undefined` value that will make them easy to spot, and leave the
  // original, english translation as a comment behind it.
  const {placeholders = false} = options

  // Note: We're not using an AST approach here because the semantics around comments are difficult
  // and often leaves comments on the same line as the property. Prettier doesn't always understand
  // quite how to format it, so this was the best I could come up with for now.
  const props = bundle.resources.map((resource) => {
    const comments = formatComments(resource.comments || [])
    const value = formatLiteral(resource.value)
    const propValue = placeholders ? `undefined, // ${value}` : `${value},`
    return `${comments}  '${resource.key}': ${propValue}`
  })

  // Sorta correctly formatted code, to be run through prettier
  const resourcesObject = `{\n  ${props.join('\n').trimStart()}\n}`
  const defaultExport = `export default removeUndefinedLocaleResources(${resourcesObject})\n`
  const moduleCode = `import {removeUndefinedLocaleResources} from 'sanity'\n\n${defaultExport}`

  // Run it through prettier for fully formatted code according to our preferences
  await mkdir(dirname(nsPath), {recursive: true})
  await writeFormattedFile(nsPath, moduleCode, {
    configPath: localesPath,
  })
}

function formatComments(comments: Comment[]) {
  if (comments.length === 0) {
    return ''
  }

  const lines = comments
    .map((comment) => {
      if (comment.type === 'CommentLine') {
        return `  //${comment.value}`
      }

      // "Chunk seperators" gets an extra newline
      if (comment.value.includes('---')) {
        return `\n  /*${comment.value}*/`
      }

      return `  /*${comment.value}*/`
    })
    .concat([''])

  return lines.join('\n')
}

function formatLiteral(value: string) {
  return generateFromAst(stringLiteral(value), {
    jsescOption: {
      quotes: 'single',
      // prevent things like
      // `…` -> `\u2026`
      // `→` -> `\u2192` etc
      minimal: true,
    },
  }).code
}
