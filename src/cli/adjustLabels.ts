import {parseArgs} from 'node:util'

import {adjustLabels, PR_LABEL_APPROVED} from '../api/ghLabels'
import {mergePR} from '../api/gitActions'
import {runScript} from '../util/runScript'

const PR_NUMBER = parseInt((process.env.PR_NUMBER || '').trim(), 10)
if (!PR_NUMBER || PR_NUMBER <= 0 || isNaN(PR_NUMBER)) {
  throw new Error('PR_NUMBER environment variable is required')
}

const {
  values: {'merge-if-approved': mergeIfApproved},
} = parseArgs({
  strict: true,
  options: {
    'merge-if-approved': {
      type: 'boolean',
      description: 'Merge the PR if it is approved by a maintainer',
      default: false,
    },
  },
})

runScript(async () => {
  const result = await adjustLabels({
    prNumber: PR_NUMBER,
    logger: (message) => console.log(message),
  })

  if (mergeIfApproved && result === PR_LABEL_APPROVED) {
    console.log('PR is approved, merging')
    await mergePR(PR_NUMBER)
  }
})
