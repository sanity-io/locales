import {defineLocale, definePlugin} from 'sanity'

const locale = defineLocale({
  id: 'it',
  title: 'Italiano',
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
 * Italiano locale/translation plugin for Sanity Studio
 *
 * @public
 */
export const itLocale = definePlugin({
  name: '@sanity/locale-it',
  i18n: {
    locales: [locale],
  },
})
