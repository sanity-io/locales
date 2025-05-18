import pMap from 'p-map'

import {formatStatsForSlack, getPackageStats, sendToSlack} from '../api/npmStats'
import {getLocaleRegistry} from '../api/registry'

async function main() {
  const webhookUrl = process.env.SLACK_STATS_WEBHOOK_URL
  if (!webhookUrl) {
    console.error('Error: SLACK_STATS_WEBHOOK_URL environment variable is not set')
    process.exit(1)
  }

  const registry = await getLocaleRegistry()

  console.log('Fetching stats for all locale packages...')
  const stats = await pMap(registry, getPackageStats, {concurrency: 3})

  console.log('Formatting message...')
  const message = await formatStatsForSlack(stats)

  console.log('Sending to Slack...')
  await sendToSlack(webhookUrl, message)

  console.log('Done!')
}

main()
