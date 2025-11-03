import registry from '../../locales/registry'

interface ValidationResult {
  username: string
  exists: boolean
  locales: Array<{id: string; role: 'maintainer' | 'contributor'}>
  error?: string
}

interface RateLimitInfo {
  limit: number
  remaining: number
  reset: Date
}

let cachedRateLimitInfo: RateLimitInfo | null = null

/**
 * Get GitHub token from environment variable if available
 */
function getGitHubToken(): string | undefined {
  return process.env.GITHUB_TOKEN || process.env.GH_TOKEN
}

/**
 * Create headers for GitHub API request
 */
function createHeaders(): HeadersInit {
  const headers: HeadersInit = {
    Accept: 'application/vnd.github.v3+json',
    'User-Agent': 'sanity-locales-maintainer-verifier',
  }

  const token = getGitHubToken()
  if (token) {
    headers.Authorization = `Bearer ${token}`
  }

  return headers
}

/**
 * Parse rate limit info from response headers
 */
function parseRateLimitInfo(headers: Headers): RateLimitInfo | null {
  const limit = headers.get('X-RateLimit-Limit')
  const remaining = headers.get('X-RateLimit-Remaining')
  const reset = headers.get('X-RateLimit-Reset')

  if (!limit || !remaining || !reset) {
    return null
  }

  return {
    limit: parseInt(limit),
    remaining: parseInt(remaining),
    reset: new Date(parseInt(reset) * 1000),
  }
}

/**
 * Wait until rate limit resets
 */
async function waitForRateLimit(resetTime: Date): Promise<void> {
  const now = new Date()
  const waitMs = resetTime.getTime() - now.getTime()

  if (waitMs > 0) {
    const waitSeconds = Math.ceil(waitMs / 1000)
    process.stdout.write(`\r\x1b[K Rate limit reached. Waiting ${waitSeconds}s until ${resetTime.toLocaleTimeString()}...`)

    // Wait with periodic updates
    const startTime = Date.now()
    while (Date.now() - startTime < waitMs) {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      const remainingSeconds = Math.ceil((waitMs - (Date.now() - startTime)) / 1000)
      if (remainingSeconds > 0) {
        process.stdout.write(
          `\r\x1b[K Rate limit reached. Waiting ${remainingSeconds}s until ${resetTime.toLocaleTimeString()}...`,
        )
      }
    }
    process.stdout.write('\r\x1b[K Rate limit reset. Continuing...\n')
  }
}

/**
 * Check rate limit status before making requests
 */
async function checkRateLimitStatus(): Promise<boolean> {
  if (cachedRateLimitInfo && cachedRateLimitInfo.remaining <= 1) {
    await waitForRateLimit(cachedRateLimitInfo.reset)
    cachedRateLimitInfo = null
    return true
  }
  return false
}

/**
 * Checks if a GitHub username exists using the GitHub API
 */
async function checkGitHubUsername(username: string): Promise<{exists: boolean; error?: string}> {
  try {
    // Check if we need to wait for rate limit
    await checkRateLimitStatus()

    const response = await fetch(`https://api.github.com/users/${username}`, {
      headers: createHeaders(),
    })

    // Update cached rate limit info
    const rateLimitInfo = parseRateLimitInfo(response.headers)
    if (rateLimitInfo) {
      cachedRateLimitInfo = rateLimitInfo
    }

    if (response.status === 200) {
      return {exists: true}
    }

    if (response.status === 404) {
      return {exists: false}
    }

    // Handle rate limiting
    if (response.status === 403) {
      const rateLimitRemaining = response.headers.get('X-RateLimit-Remaining')
      if (rateLimitRemaining === '0') {
        const resetTime = response.headers.get('X-RateLimit-Reset')
        if (resetTime) {
          const resetDate = new Date(parseInt(resetTime) * 1000)
          await waitForRateLimit(resetDate)
          // Retry after waiting
          return checkGitHubUsername(username)
        }
        return {
          exists: false,
          error: 'Rate limit exceeded with no reset time',
        }
      }
    }

    return {
      exists: false,
      error: `Unexpected response: ${response.status} ${response.statusText}`,
    }
  } catch (error) {
    return {
      exists: false,
      error: error instanceof Error ? error.message : String(error),
    }
  }
}

/**
 * Collects all unique usernames from the registry
 */
function collectUsernames(): Map<
  string,
  Array<{id: string; role: 'maintainer' | 'contributor'}>
> {
  const usernamesMap = new Map<string, Array<{id: string; role: 'maintainer' | 'contributor'}>>()

  for (const locale of registry) {
    // Collect maintainers
    for (const maintainer of locale.maintainers) {
      if (!usernamesMap.has(maintainer)) {
        usernamesMap.set(maintainer, [])
      }
      usernamesMap.get(maintainer)!.push({id: locale.id, role: 'maintainer'})
    }

    // Collect contributors
    for (const contributor of locale.contributors) {
      if (!usernamesMap.has(contributor)) {
        usernamesMap.set(contributor, [])
      }
      usernamesMap.get(contributor)!.push({id: locale.id, role: 'contributor'})
    }
  }

  return usernamesMap
}

/**
 * Main function to verify all maintainer and contributor usernames
 */
async function verifyMaintainers() {
  console.log('Collecting usernames from registry...\n')

  const usernamesMap = collectUsernames()
  const totalUsernames = usernamesMap.size

  console.log(`Found ${totalUsernames} unique username(s) to verify\n`)

  // Show authentication status
  const token = getGitHubToken()
  if (token) {
    console.log('✓ Using GitHub token authentication (5000 requests/hour)')
  } else {
    console.log('⚠ No GitHub token found. Using unauthenticated requests (60 requests/hour)')
    console.log('  Set GITHUB_TOKEN or GH_TOKEN environment variable for higher rate limits\n')
  }

  console.log('Verifying GitHub usernames...\n')

  const results: ValidationResult[] = []
  let completed = 0

  // Verify each username
  for (const [username, locales] of usernamesMap.entries()) {
    const {exists, error} = await checkGitHubUsername(username)
    results.push({username, exists, locales, error})

    completed++
    // Show progress - clear line and rewrite
    const rateLimitStr = cachedRateLimitInfo
      ? ` (Rate limit: ${cachedRateLimitInfo.remaining}/${cachedRateLimitInfo.limit})`
      : ''
    process.stdout.write(`\r\x1b[K Progress: ${completed}/${totalUsernames}${rateLimitStr}`)
  }

  console.log('\n\n' + '='.repeat(80))
  console.log('VERIFICATION RESULTS')
  console.log('='.repeat(80) + '\n')

  // Separate valid and invalid results
  const validUsernames = results.filter((r) => r.exists)
  const invalidUsernames = results.filter((r) => !r.exists)

  // Report invalid usernames
  if (invalidUsernames.length > 0) {
    console.log(`❌ INVALID USERNAMES (${invalidUsernames.length}):\n`)

    for (const result of invalidUsernames) {
      console.log(`  @${result.username}`)
      if (result.error) {
        console.log(`    Error: ${result.error}`)
      }
      console.log(`    Used in:`)
      for (const locale of result.locales) {
        console.log(`      - ${locale.id} (${locale.role})`)
      }
      console.log()
    }
  } else {
    console.log('✅ All usernames are valid!\n')
  }

  // Report valid usernames
  console.log(`✅ VALID USERNAMES (${validUsernames.length}):\n`)
  for (const result of validUsernames) {
    const localeCount = result.locales.length
    const rolesSummary = result.locales
      .map((l) => `${l.id} (${l.role})`)
      .slice(0, 3)
      .join(', ')
    const moreText = localeCount > 3 ? ` and ${localeCount - 3} more` : ''
    console.log(`  @${result.username} - ${localeCount} locale(s): ${rolesSummary}${moreText}`)
  }

  console.log('\n' + '='.repeat(80))
  console.log('SUMMARY')
  console.log('='.repeat(80) + '\n')
  console.log(`Total unique usernames: ${totalUsernames}`)
  console.log(`Valid: ${validUsernames.length}`)
  console.log(`Invalid: ${invalidUsernames.length}`)
  console.log()

  // Exit with error code if there are invalid usernames
  if (invalidUsernames.length > 0) {
    process.exit(1)
  }
}

// Run the verification
verifyMaintainers().catch((error) => {
  console.error('Error running verification:', error)
  process.exit(1)
})
