import {defineLocale, definePlugin} from 'sanity'

const locale = defineLocale({
  id: 'fr-FR',
  title: 'Français',
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
 * Français locale/translation plugin for Sanity Studio
 *
 * @public
 */
export const frFRLocale = definePlugin({
  name: '@sanity/locale-fr-fr',
  i18n: {
    locales: [locale],
  },
})
