import {format} from 'prettier'
import {z} from 'zod'
import {fromZodError} from 'zod-validation-error'

import type {Locale} from '../types'

const NPM_API_BASE = 'https://api.npmjs.org/downloads/point'

const slackMessageSchema = z.object({
  text: z.string(),
  blocks: z.array(
    z.object({
      type: z.string(),
      text: z
        .object({
          type: z.string(),
          text: z.string(),
        })
        .optional(),
    }),
  ),
})

/**
 * @internal
 */
export interface PackageStats {
  package: string
  localeId: string
  localeName: string
  weeklyDownloads: number
}

/**
 * @internal
 */
export type SlackMessage = z.infer<typeof slackMessageSchema>

export async function getPackageStats(locale: Locale): Promise<PackageStats> {
  const currentStats = await fetchWeeklyStats(locale.packageName)

  return {
    package: locale.packageName,
    localeId: locale.id,
    localeName: locale.englishName,
    weeklyDownloads: currentStats.downloads,
  }
}

/**
 * Send a message to a Slack webhook
 *
 * @param webhookUrl - The URL of the Slack webhook
 * @param message - The message to send
 * @internal
 */
export async function sendToSlack(webhookUrl: string, message: SlackMessage): Promise<void> {
  const response = await fetch(webhookUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(message),
  })

  if (!response.ok) {
    throw new Error(`Failed to send to Slack: ${response.statusText}`)
  }
}

/**
 * Format the stats for Slack
 *
 * @param stats - The stats to format
 * @returns The formatted stats
 * @internal
 */
export async function formatStatsForSlack(stats: PackageStats[]): Promise<SlackMessage> {
  const sortedStats = [...stats].sort((a, b) => b.weeklyDownloads - a.weeklyDownloads)

  let tableText = '| ID | Locale | Downloads |\n|--|--|--|\n'

  for (const stat of sortedStats) {
    tableText += `| ${stat.localeId} | ${stat.localeName} | ${stat.weeklyDownloads.toLocaleString()} |\n`
  }

  tableText = codeBlock(await format(tableText, {parser: 'markdown'}))

  const blocks = [
    {
      type: 'header',
      text: {
        type: 'plain_text',
        text: '📊 Weekly locale download stats',
      },
    },
    {
      type: 'divider',
    },
    {
      type: 'section',
      text: {
        type: 'mrkdwn',
        text: tableText,
      },
    },
  ]

  const message: SlackMessage = {
    text: 'Weekly download stats locale modules',
    blocks,
  }

  // Validate the message
  const result = slackMessageSchema.safeParse(message)
  if (!result.success) {
    throw new Error(`Invalid Slack message: ${fromZodError(result.error).message}`)
  }

  return result.data
}

const npmStatsSchema = z.object({
  downloads: z.number(),
  package: z.string(),
})

type NpmStats = z.infer<typeof npmStatsSchema>

async function fetchWeeklyStats(packageName: string): Promise<NpmStats> {
  const response = await fetch(`${NPM_API_BASE}/last-week/${packageName}`)
  if (response.status === 404) {
    return {downloads: 0, package: packageName}
  }

  if (!response.ok) {
    throw new Error(
      `Failed to fetch stats for ${packageName}: ${response.status} ${response.statusText}`,
    )
  }

  const data = await response.json()
  const result = npmStatsSchema.safeParse(data)

  if (!result.success) {
    throw new Error(`Invalid NPM API response: ${fromZodError(result.error).message}`)
  }

  return result.data
}

function codeBlock(text: string): string {
  return `\`\`\`\n${text.trimEnd()}\n\`\`\``
}
