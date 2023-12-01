import {parseArgs} from 'node:util'
import {green, red, cyan, bold} from 'ansi-colors'
import {findMissingResources} from '../api/resources'
import {getLocaleRegistry} from '../util/getLocaleRegistry'
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
    const missing = await findMissingResources(locale)
    if (missing.length === 0) {
      continue
    }

    console.log(bold('Missing resources for locale %s'), cyan(locale.id))
    for (const entry of missing) {
      console.log('\n  Namespace %s:', red(entry.namespace))
      for (const key of entry.missingKeys) {
        console.log('    %s', green(JSON.stringify(key)))
      }
    }
  }
}

runScript(printMissingResources)
