import dotenv from 'dotenv'
import {parseArgs} from 'node:util'
import {WILDCARD_FLAG} from '../api/workflows'
import {autoTranslate, pushChanges} from '../api/autoTranslate'
import {runScript} from '../util/runScript'

// Load environment variables from .env file, where API key for OpenAI is hopefully present.
// The auto-translation will throw an error if the API key is missing.
dotenv.config()

async function autoTranslateWithParams() {
  const args = parseArgs({
    strict: true,
    options: {
      git: {
        type: 'boolean',
        description: 'Create git branches and push changes, then create PRs',
      },
      locale: {
        type: 'string',
        short: 'l',
        description: 'Locale ID',
        multiple: true,
      },
      namespace: {
        type: 'string',
        short: 'n',
        description: 'Namespace',
        multiple: true,
      },
    },
  })

  const targetLocales = args.values.locale?.includes(WILDCARD_FLAG) ? undefined : args.values.locale
  const namespaces = args.values.namespace?.includes(WILDCARD_FLAG)
    ? undefined
    : args.values.namespace

  await autoTranslate({
    targetLocales,
    namespaces,
    logger: (message) => console.log(message),
  })

  if (args.values.git) {
    await runScript(pushChanges)
  }
}

runScript(autoTranslateWithParams)
