import {defineLocale, definePlugin} from 'sanity'

const locale = defineLocale({
  id: 'is',
  title: 'Íslenska',
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
 * Íslenska locale/translation plugin for Sanity Studio
 *
 * @public
 */
export const isLocale = definePlugin({
  name: '@sanity/locale-is',
  i18n: {
    locales: [locale],
  },
})
