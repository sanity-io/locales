import {defineLocale, definePlugin} from 'sanity'

const locale = defineLocale({
  id: 'fi',
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
export const fiLocale = definePlugin({
  name: '@sanity/locale-fi',
  i18n: {
    locales: [locale],
  },
})
