import {readFile} from 'node:fs/promises'

import {parse} from '@babel/parser'
import traverse from '@babel/traverse'
import type {CallExpression, File, Node} from '@babel/types'
import {globby} from 'globby'

import type {BaseResource, ResourceBundle} from '../types'
import {getRootPath} from './getRootPath'
import {memoizeAsyncFunction} from './memoizeAsyncFunction'

const DEPENDENCIES = ['sanity', '@sanity/vision']
const GLOB_PATTERN = `node_modules/{${DEPENDENCIES.join(',')}}/lib/**/*.mjs`
const LOCALE_DEF_FN_NAME = 'defineLocalesResources'

/**
 * Get officially defined bundles from the Sanity source code.
 * Packages extracted from are defined in `DEPENDENCIES` and must be installed.
 *
 * @note This function is memoized, and does not invalidate
 * @returns An array of bundles
 * @internal
 */

export const getBaseBundles = memoizeAsyncFunction(async function getBaseBundles() {
  const rootPath = await getRootPath()
  const files = await globby(GLOB_PATTERN, {cwd: rootPath})

  if (files.length === 0) {
    throw new Error('No files found for dependencies - did you install dependencies?')
  }

  const bundles: ResourceBundle[] = []
  for (const file of files) {
    const ast = await parse(await readFile(file, 'utf-8'), {
      sourceFilename: file,
      sourceType: 'module',
    })

    const resourceDefName = getLocaleResourceImportName(ast) || getLocaleResourceDefinerFn(ast)
    if (!resourceDefName) {
      continue
    }

    bundles.push(...extractResources(ast, resourceDefName, file))
  }

  if (bundles.length === 0) {
    throw new Error('No bundles found - did you install dependencies?')
  }

  return bundles
})

function getLocaleResourceImportName(file: File) {
  let importName: string | undefined
  traverse(file, {
    ImportSpecifier(path) {
      if (
        path.node.imported.type !== 'Identifier' ||
        path.node.imported.name !== LOCALE_DEF_FN_NAME
      ) {
        return
      }

      importName = path.node.local.name
      path.stop()
    },
  })
  return importName
}

function getLocaleResourceDefinerFn(ast: File) {
  let fnName: string | undefined
  traverse(ast, {
    FunctionDeclaration(path) {
      if (
        path.node.id?.name !== LOCALE_DEF_FN_NAME ||
        path.node.params.length !== 2 ||
        path.node.params[0].type !== 'Identifier' ||
        path.node.params[0].name !== 'namespace' ||
        path.node.body.type !== 'BlockStatement'
      ) {
        path.skip()
        return
      }

      const resourcesParam = path.node.params[1]
      if (resourcesParam.type !== 'Identifier') {
        path.skip()
        return
      }

      const resourcesName = resourcesParam.name
      const retCall = path.node.body.body[0]
      if (
        !retCall ||
        path.node.body.body.length !== 1 ||
        retCall.type !== 'ReturnStatement' ||
        !retCall.argument ||
        retCall.argument.type !== 'Identifier' ||
        retCall.argument.name !== resourcesName
      ) {
        path.skip()
        return
      }

      fnName = path.node.id.name
      path.stop()
    },
  })

  return fnName
}

function extractResources(ast: Node, local: string, fileName: string): Array<ResourceBundle> {
  const nodes: Array<CallExpression> = []
  traverse(ast, {
    CallExpression(path) {
      if (path.node.callee.type !== 'Identifier' || path.node.callee.name !== local) {
        return
      }

      nodes.push(path.node)
    },
  })

  if (nodes.length === 0) {
    throw new Error(`Could not find call to ${LOCALE_DEF_FN_NAME} in ${fileName}`)
  }

  const bundles: Array<ResourceBundle> = []
  for (const node of nodes) {
    if (node.arguments.length !== 2) {
      throw new Error(`Expected two arguments to ${LOCALE_DEF_FN_NAME} in ${fileName}`)
    }

    const namespaceArg = node.arguments[0]
    if (namespaceArg.type !== 'StringLiteral') {
      throw new Error(
        `Expected first argument to ${LOCALE_DEF_FN_NAME} to be a string literal in ${fileName}`,
      )
    }

    let resourcesArg = node.arguments[1]

    // Handle `{key: value} as const`
    if (resourcesArg.type === 'TSAsExpression') {
      resourcesArg = resourcesArg.expression
    }

    if (resourcesArg.type !== 'ObjectExpression') {
      throw new Error(
        `Expected second argument to ${LOCALE_DEF_FN_NAME} to be an object expression in ${fileName}`,
      )
    }

    const resources: BaseResource[] = resourcesArg.properties.map((prop) => {
      if (prop.type !== 'ObjectProperty') {
        throw new Error(`Found non-object property in ${LOCALE_DEF_FN_NAME} in ${fileName}`)
      }

      if (prop.computed || prop.shorthand) {
        throw new Error(
          `Found computed or shorthand property in ${LOCALE_DEF_FN_NAME} in ${fileName}`,
        )
      }

      if (prop.key.type !== 'StringLiteral') {
        throw new Error(`Found non-string key in ${LOCALE_DEF_FN_NAME} in ${fileName}`)
      }

      if (prop.value.type !== 'StringLiteral' && prop.value.type !== 'TemplateLiteral') {
        throw new Error(`Found non-string value in ${LOCALE_DEF_FN_NAME} in ${fileName}`)
      }

      if (prop.value.type === 'TemplateLiteral') {
        if (prop.value.expressions.length > 0) {
          throw new Error(
            `Found template literal with expressions in ${LOCALE_DEF_FN_NAME} in ${fileName}`,
          )
        }

        if (prop.value.quasis.length > 1) {
          throw new Error(
            `Found template literal with multiple quasis in ${LOCALE_DEF_FN_NAME} in ${fileName}`,
          )
        }
      }

      const key = prop.key.value
      const comments = (prop.leadingComments || [])
        .filter((comment) => comment.type === 'CommentBlock')
        .map((comment) => comment.value)
      const value =
        prop.value.type === 'StringLiteral'
          ? prop.value.value
          : prop.value.quasis.map((tplEl) => tplEl.value.cooked).join('')

      return {
        key,
        value,
        comments,
      }
    })

    bundles.push({
      namespace: namespaceArg.value,
      resources: sortResources(resources),
    })
  }

  return bundles
}

function sortResources(resources: BaseResource[]) {
  return resources.sort((a, b) => a.key.localeCompare(b.key))
}
