import dotenv from 'dotenv'
import {parseArgs} from 'util'
import {autoTranslate, pushChanges} from '../api/autoTranslate'
import {runScript} from '../util/runScript'

// Load environment variables from .env file, where API key for OpenAI is hopefully present.
// The auto-translation will throw an error if the API key is missing.
dotenv.config()

// ¡Vamos!
;(async () => {
  const args = parseArgs({
    strict: true,
    options: {
      git: {
        type: 'boolean',
        description: 'Create git branches and push changes, then create PRs',
      },
    },
  })

  await runScript(autoTranslate)

  if (args.values.git) {
    await runScript(pushChanges)
  }
})()
