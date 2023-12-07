import {defineLocale, definePlugin} from 'sanity'

const locale = defineLocale({
  id: 'fi-FI',
  title: 'Suomi',
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
 * Suomi locale/translation plugin for Sanity Studio
 *
 * @public
 */
export const fiFILocale = definePlugin({
  name: '@sanity/locale-fi-fi',
  i18n: {
    locales: [locale],
  },
})
