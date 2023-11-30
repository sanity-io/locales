import {defineLocale, definePlugin} from 'sanity'

const locale = defineLocale({
  id: 'ko',
  title: 'Korean',
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
 * Korean locale/translation plugin for Sanity Studio
 *
 * @public
 */
export const koLocale = definePlugin({
  name: '@sanity/locale-ko',
  i18n: {
    locales: [locale],
  },
})
