import {defineLocale, definePlugin} from 'sanity'

const locale = defineLocale({
  id: 'de-DE',
  title: 'Deutsch',
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
 * Deutsch locale/translation plugin for Sanity Studio
 *
 * @public
 */
export const deDELocale = definePlugin({
  name: '@sanity/locale-de-de',
  i18n: {
    locales: [locale],
  },
})
