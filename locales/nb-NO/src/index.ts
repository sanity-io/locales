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
  weekInfo: {
    firstDay: 1,
    minimalDays: 4,
    weekend: [6, 7],
  },
})

/**
 * Norsk (Bokmål) locale/translation plugin for Sanity Studio
 *
 * @public
 */
export const nbNOLocale = definePlugin({
  name: '@sanity/locale-nb-no',
  i18n: {
    locales: [locale],
  },
})
