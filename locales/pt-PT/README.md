# @sanity/locale-pt-pt

Portuguese / Português language support for [Sanity Studio](https://www.sanity.io/).

## Description

This is a community maintained language plugin. Initial translations were done by AI and may have errors. Contributions are [more than welcome](#contributing)!

## Installation

```sh
npm install @sanity/locale-pt-pt
```

## Usage

```ts
// sanity.config.ts / sanity.config.js:
import {defineConfig} from 'sanity'
import {ptPTLocale} from '@sanity/locale-pt-pt'

export default defineConfig({
  // ...
  plugins: [
    // ... other plugins here ...
    ptPTLocale(),
  ],
})
```

The language should now show up in the Studio's user menu.

If you want to customize the title of the locale, pass it as an option to the plugin:

```ts
// sanity.config.ts / sanity.config.js:
import {defineConfig} from 'sanity'
import {ptPTLocale} from '@sanity/locale-pt-pt'

export default defineConfig({
  // ...
  plugins: [
    // ... other plugins here ...
    ptPTLocale({
      title: 'Portuguese',
    }),
  ],
})
```

## Maintainers

We are looking for maintainers for this plugin!
If you are interested, please [send a PR](/CONTRIBUTING.md#maintaining-a-locale) adding yourself as a maintainer.

## Contributing

Feel free to contribute improvements/changes! The strings are located in the `src` folder, where the file name represents the "namespace". Send a pull request, and feel free to add yourself to the `contributors` array in `locales/registry.ts`. If you want to help review new translations, add yourself to the `maintainers` array instead. After doing your changes, run `pnpm run reconcile` and add the changes to version control.

## License

MIT-licensed. See LICENSE.
