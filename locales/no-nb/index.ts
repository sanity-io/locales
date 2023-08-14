import {defineLocale, definePlugin} from 'sanity'

const locale = defineLocale({
  id: 'no-nb',
  title: 'Norsk (Bokmål)',
  bundles: [],
})

export const nonbLocale = definePlugin({
  name: '@sanity/locale-no-nb',
  i18n: {
    locales: [locale],
  },
})
