import {defineLocale, definePlugin} from 'sanity'

const locale = defineLocale({
  id: 'sv-SE',
  title: 'Svenska',
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
 * Svenska locale/translation plugin for Sanity Studio
 *
 * @public
 */
export const svSELocale = definePlugin({
  name: '@sanity/locale-sv-se',
  i18n: {
    locales: [locale],
  },
})
