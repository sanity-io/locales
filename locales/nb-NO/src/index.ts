import {defineLocale, definePlugin} from 'sanity'

const locale = defineLocale({
  id: 'nb-NO',
  title: 'Norsk (Bokmål)',
  bundles: [
    {
      namespace: 'structure',
      resources: () => import('./structure'),
    },

    {
      namespace: 'studio',
      resources: () => import('./studio'),
    },

    {
      namespace: 'validation',
      resources: () => import('./validation'),
    },

    {
      namespace: 'vision',
      resources: () => import('./vision'),
    },
  ],
})

/**
 * Norsk (Bokmål) locale/translation plugin for Sanity Studio
 *
 * @public
 */
export const noNBLocale = definePlugin({
  name: '@sanity/locale-nb-NO',
  i18n: {
    locales: [locale],
  },
})
