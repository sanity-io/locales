import {defineLocale, definePlugin} from 'sanity'

const locale = defineLocale({
  id: 'jp',
  title: 'Japanese',
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
 * Japanese locale/translation plugin for Sanity Studio
 *
 * @public
 */
export const jpLocale = definePlugin({
  name: '@sanity/locale-jp',
  i18n: {
    locales: [locale],
  },
})
