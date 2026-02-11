import {parseArgs} from 'node:util'

import dotenv from 'dotenv'

import {autoTranslate, getLocalesWithReviewedPRs, pushChanges} from '../api/autoTranslate'
import {getLocaleRegistry} from '../api/registry'
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

  const logger = (message: string) => console.log(message)

  // When running in git mode, skip locales whose PRs have already been reviewed
  // to avoid wasting translation API calls on changes that won't be pushed.
  let targetLocales = args.values.locale
  if (args.values.git) {
    const reviewedLocales = await getLocalesWithReviewedPRs({logger})
    if (reviewedLocales.length > 0) {
      const allLocales = targetLocales ?? (await getLocaleRegistry()).map((l) => l.id)
      targetLocales = allLocales.filter((id) => !reviewedLocales.includes(id))
    }
  }

  await autoTranslate({
    targetLocales,
    namespaces: args.values.namespace,
    logger,
  })

  if (args.values.git) {
    await runScript(() => pushChanges({allLocales: !args.values.locale, logger}))
  }
}

runScript(autoTranslateWithParams)
