import {defineLocale, definePlugin} from 'sanity'

const locale = defineLocale({
  id: 'nl-NL',
  title: 'Nederlands',
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
  weekInfo: {
    firstDay: 1,
    minimalDays: 4,
    weekend: [6, 7],
  },
})

/**
 * Nederlands locale/translation plugin for Sanity Studio
 *
 * @public
 */
export const nlNLLocale = definePlugin({
  name: '@sanity/locale-nl-nl',
  i18n: {
    locales: [locale],
  },
})
