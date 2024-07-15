import {parseArgs} from 'node:util'

import {nudgeStale} from '../api/nudgeStale'
import {runScript} from '../util/runScript'

const args = parseArgs({
  strict: true,
  options: {
    'dry-run': {
      type: 'boolean',
      description: 'Do not execute any actions, only log what would have been done',
      default: false,
    },
  },
})

const dryRun = args.values['dry-run'] ?? false

runScript(() =>
  nudgeStale({
    logger: (message) => console.log(dryRun ? `[dry-run] ${message}` : message),
    dryRun,
  }),
)
