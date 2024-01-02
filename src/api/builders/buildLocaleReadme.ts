import type {Locale} from '../../types'

export function buildLocaleReadme(locale: Locale): string {
  return `
# ${locale.packageName}

${locale.englishName} / ${locale.name} language support for [Sanity Studio](https://www.sanity.io/).

## Description

This is a community maintained language plugin. Initial translations were done by AI and may have errors. Contributions are [more than welcome](#contributing)!

## Installation

\`\`\`sh
npm install ${locale.packageName}
\`\`\`

## Usage

\`\`\`ts
// sanity.config.ts / sanity.config.js:
import {defineConfig} from 'sanity'
import {${locale.exportName}} from '${locale.packageName}'

export default defineConfig({
  // ...
  plugins: [
    // ... other plugins here ...
    ${locale.exportName}(),
  ]
})
\`\`\`

The language should now show up in the Studio's user menu.

If you want to customize the title of the locale, pass it as an option to the plugin:

\`\`\`ts
// sanity.config.ts / sanity.config.js:
import {defineConfig} from 'sanity'
import {${locale.exportName}} from '${locale.packageName}'

export default defineConfig({
  // ...
  plugins: [
    // ... other plugins here ...
    ${locale.exportName}({
      title: ${JSON.stringify(locale.englishName)},
    }),
  ]
})
\`\`\`

${buildMaintainersMessage(locale)}
${buildContributorsMessage(locale)}

## Contributing

Feel free to contribute improvements/changes! The strings are located in the \`src\` folder, where the file name represents the "namespace". Send a pull request, and feel free to add yourself to the \`contributors\` array in \`locales/registry.ts\`. If you want to help review new translations, add yourself to the \`maintainers\` array instead. After doing your changes, run \`pnpm run reconcile\` and add the changes to version control.

## License

MIT-licensed. See LICENSE.`.trim()
}

function buildMaintainersMessage(locale: Locale): string {
  if (locale.maintainers.length > 0) {
    return ''
  }

  return `
  ## Maintainers

  We are looking for maintainers for this plugin!
  If you are interested, please [send a PR](/CONTRIBUTING.md#maintaining-a-locale) adding yourself as a maintainer.\n\n`.trimStart()
}

function buildContributorsMessage(locale: Locale) {
  if (locale.contributors.length === 0) {
    return ''
  }

  return `## Contributors\n\n${locale.contributors
    .map((name) => `- [@${name}](https://github.com/${name})`)
    .join('\n')}\n\n`
}
