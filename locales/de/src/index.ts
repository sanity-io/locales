import {defineLocale, definePlugin} from 'sanity'

const locale = defineLocale({
  id: 'de',
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
})

/**
 * Deutsch locale/translation plugin for Sanity Studio
 *
 * @public
 */
export const deLocale = definePlugin({
  name: '@sanity/locale-de',
  i18n: {
    locales: [locale],
  },
})
