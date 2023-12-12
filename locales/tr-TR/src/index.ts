import {defineLocale, definePlugin} from 'sanity'

const locale = defineLocale({
  id: 'tr-TR',
  title: 'Türkçe',
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
    minimalDays: 1,
    weekend: [6, 7],
  },
})

/**
 * Türkçe locale/translation plugin for Sanity Studio
 *
 * @public
 */
export const trTRLocale = definePlugin({
  name: '@sanity/locale-tr-tr',
  i18n: {
    locales: [locale],
  },
})
