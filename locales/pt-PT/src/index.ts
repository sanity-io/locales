import {defineLocale, definePlugin} from 'sanity'

const locale = defineLocale({
  id: 'pt-PT',
  title: 'Português Europeu',
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
 * Português Europeu locale/translation plugin for Sanity Studio
 *
 * @public
 */
export const ptPTLocale = definePlugin({
  name: '@sanity/locale-pt-pt',
  i18n: {
    locales: [locale],
  },
})
