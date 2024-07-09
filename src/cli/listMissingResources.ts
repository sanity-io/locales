import {parseArgs} from 'node:util'

import {bold, cyan, green, yellow} from 'ansi-colors'

import {getLocaleRegistry} from '../api/registry'
import {findMissingResources} from '../api/resources'
import {runScript} from '../util/runScript'

async function printMissingResources() {
  const args = parseArgs({
    strict: true,
    options: {
      locale: {
        type: 'string',
        short: 'l',
        description: 'Locale ID',
        multiple: true,
      },
    },
  })

  const registry = await getLocaleRegistry()
  const locales = args.values.locale
    ? args.values.locale.map((id) => {
        const entry = registry.find((locale) => locale.id === id)
        if (!entry) {
          throw new Error(`Locale "${id}" not defined in 'locales/registry.ts'`)
        }
        return entry
      })
    : registry

  for (const locale of locales) {
    const resources = await findMissingResources(locale)
    if (resources.length === 0) {
      continue
    }

    console.log(bold('Missing resources for locale %s'), cyan(locale.id))
    for (const entry of resources) {
      console.log('\n  Namespace %s:', bold(yellow(entry.namespace)))
      for (const missing of entry.missingKeys) {
        const suffix = missing.pluralizable ? yellow(' (pluralizable)') : ''
        console.log('    %s%s', green(JSON.stringify(missing.key)), suffix)
      }
    }
  }
}

runScript(printMissingResources)
