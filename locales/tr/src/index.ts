import {defineLocale, definePlugin} from 'sanity'

const locale = defineLocale({
  id: 'tr',
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
})

/**
 * Türkçe locale/translation plugin for Sanity Studio
 *
 * @public
 */
export const trLocale = definePlugin({
  name: '@sanity/locale-tr',
  i18n: {
    locales: [locale],
  },
})
