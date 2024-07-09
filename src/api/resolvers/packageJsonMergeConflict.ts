import {parse} from 'json5'

import {JsonParseErrorResolver} from '../../types'

const dependencyEntryRegex = /^\s+".*?": ".*?",?$/

/**
 * Conflicts tend to arise when adding/removing locale packages to the `dependencies` key.
 * This function tries to handle the most common case, by using all the lines, even if that creates
 * duplicates. The rationale is that this file will be reconciled again soon, which will dedupe
 * entries, but we want to ensure any non-locale paths are preserved.
 *
 * @param content - The content of the `package.json` file, with potential merge conflicts
 * @param err - The error that was thrown when trying to parse the JSON
 * @returns The parsed JSON, with merge conflicts resolved
 * @throws If the content doesn't contain merge conflicts, or if unable to resolve them
 * @internal
 */
export const tryHandlePackageJsonMergeConflict: JsonParseErrorResolver = (content, err) => {
  if (!content.includes('<<<<<<<') || !content.includes('>>>>>>>')) {
    throw err
  }

  const lines = content.split('\n')
  const newLines: string[] = []
  let inConflict = false
  for (const line of lines) {
    if (line.startsWith('<<<<<<<')) {
      inConflict = true
    } else if (line.startsWith('>>>>>>>')) {
      inConflict = false
    } else if (inConflict && dependencyEntryRegex.test(line)) {
      // Ensure it has a comma at the end
      newLines.push(line.replace(/"$/, '",'))
    } else if (!inConflict) {
      newLines.push(line)
    }
  }

  // Use JSON5 because of trailing commas
  return parse(newLines.join('\n'))
}
