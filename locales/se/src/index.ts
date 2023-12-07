import {defineLocale, definePlugin} from 'sanity'

const locale = defineLocale({
  id: 'se',
  title: 'Svenska',
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
 * Svenska locale/translation plugin for Sanity Studio
 *
 * @public
 */
export const seLocale = definePlugin({
  name: '@sanity/locale-se',
  i18n: {
    locales: [locale],
  },
})
