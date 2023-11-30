import type {Resource} from '../../types'
import {buildStringLiteral} from './buildStringLiteral'

/**
 * Builds the code used to export a resource bundle
 *
 * @param resources - Resources to include
 * @returns The code, which should be run through prettier
 * @internal
 */
export function buildResourceBundle(resources: Resource[]) {
  // Note: We're not using an AST approach here because the semantics around comments are difficult
  // and often leaves comments on the same line as the property. Prettier doesn't always understand
  // quite how to format it, so this was the best I could come up with for now.
  let prevKeySegment = ''
  const props = resources.map((resource) => {
    const keySegment = firstKeySegment(resource.key)
    const spacing = keySegment === prevKeySegment ? '' : '\n'
    const comments = formatComments(resource.comments || [])
    const value = resource.value ? buildStringLiteral(resource.value) : null
    const baseValue = resource.value ? null : buildStringLiteral(resource.baseValue)
    const propValue = resource.value ? `${value},` : `undefined, // ${baseValue}`
    prevKeySegment = keySegment
    return `${spacing}${comments}  '${resource.key}': ${propValue}`
  })

  // Sorta correctly formatted code, but should be run through prettier
  const resourcesObject = `{\n  ${props.join('\n').trimStart()}\n}`
  const defaultExport = `export default removeUndefinedLocaleResources(${resourcesObject})\n`
  const moduleCode = `import {removeUndefinedLocaleResources} from 'sanity'\n\n${defaultExport}`

  return moduleCode
}

function formatComments(comments: string[]) {
  if (comments.length === 0) {
    return ''
  }

  return comments
    .map((comment) => `  /*${comment}*/`)
    .concat([''])
    .join('\n')
}

function firstKeySegment(key: string): string {
  const firstDot = key.indexOf('.')
  return firstDot === -1 ? key : key.slice(0, firstDot)
}
