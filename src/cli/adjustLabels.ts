import {adjustLabels} from '../api/ghLabels'
import {runScript} from '../util/runScript'

const PR_NUMBER = parseInt((process.env.PR_NUMBER || '').trim(), 10)
if (!PR_NUMBER || PR_NUMBER <= 0 || isNaN(PR_NUMBER)) {
  throw new Error('PR_NUMBER environment variable is required')
}

runScript(() => adjustLabels(PR_NUMBER))
