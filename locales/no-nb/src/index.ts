import {defineLocale, definePlugin} from 'sanity'

const locale = defineLocale({
  id: 'no-nb',
  title: 'Norsk (Bokmål)',
  bundles: [],
})

/**
 * Norsk (Bokmål) locale/translation plugin for Sanity Studio
 *
 * @public
 */
export const nonbLocale = definePlugin({
  name: '@sanity/locale-no-nb',
  i18n: {
    locales: [locale],
  },
})
