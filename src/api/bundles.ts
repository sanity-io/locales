import {join as joinPath} from 'node:path'
import {readdir as readDir} from 'node:fs/promises'
import {stringLiteral, Comment} from '@babel/types'
import generateFromAst from '@babel/generator'
import {getRootPath} from '../util/getRootPath'
import {getLocalesPath} from '../util/getLocalesPath'
import {getOfficialBundles} from '../util/getOfficialBundles'
import type {Locale, ResourceBundle} from '../types'
import {writeFormattedFile} from '../util/writeFormattedFile'

const bundleFileNameRegex = /^[a-zA-Z0-9]+\.ts$/
const excludedFiles = ['index.ts']

export async function getBundlesFromLocale(locale: Locale): Promise<Bundle[]> {
  const rootPath = await getRootPath()
  const localePath = joinPath(rootPath, 'locales', locale.id)

  const entries = await readDir(joinPath(localePath, 'src'), {withFileTypes: true})
  const files = entries.filter((entry) => entry.isFile() && !excludedFiles.includes(entry.name))

  const knownNamespaces = await getOfficalBundleMap()
  const bundles: Bundle[] = []
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
    const bundleModule = await import(joinPath(localePath, entry.name))
    if (!bundleModule.default) {
      throw new Error(
        `Locale ${locale.id} contained file with missing default export: ${entry.name}`,
      )
    }

    bundles.push({
      namespace,
      filename: entry.name,
    })
  }

  return bundles
}

export async function createPlaceholderBundles(locale: Locale) {
  const knownNamespaces = await getOfficalBundleMap()
  const missingNamespaces = await findMissingNamespaces(locale)

  const rootPath = await getRootPath()
  const localePath = joinPath(rootPath, 'locales', locale.id)

  // For the namespaces that are missing, automatically create the bundle files
  const bundles: Bundle[] = []
  for (const namespace of missingNamespaces) {
    const resources = knownNamespaces.get(namespace)
    if (!resources) {
      throw new Error(`Known namespaces should include ${namespace}`)
    }

    console.log('Missing namespace found for locale, creating file:', namespace)
    await writeBundleNamespace(locale, resources, {placeholders: true})
    bundles.push({namespace, filename: joinPath(localePath, `${namespace}.ts`)})
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
  const nsPath = joinPath(localesPath, locale.id, `${bundle.namespace}.ts`)

  // Sometimes we may only want "placeholders", eg when we do not have translated strings yet
  // In this case, prefix the keys with a comment, to indicate their purpose
  const prefix = options.placeholders ? '// ' : ''

  // Note: We're not using an AST approach here because the semantics around comments are difficult
  // and often leaves comments on the same line as the property. Prettier doesn't always understand
  // quite how to format it, so this was the best I could come up with for now.
  const props = bundle.resources.map((resource) => {
    const comments = formatComments(resource.comments || [])
    return `${comments}  ${prefix}'${resource.key}': ${formatLiteral(resource.value)},`
  })

  // Sorta correctly formatted code, to be run through prettier
  const moduleCode = `export default {\n  ${props.join('\n').trimStart()}\n}\n`

  // Run it through prettier for fully formatted code according to our preferences
  await writeFormattedFile(nsPath, moduleCode, {
    configPath: localesPath,
    postProcess: (code) => code.replace(/(\/\*+\s+---)/, '\n$1'),
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
      // prevent things like
      // `…` -> `\u2026`
      // `→` -> `\u2192` etc
      minimal: true,
    },
  }).code
}

export interface Bundle {
  namespace: string
  filename: string
}
