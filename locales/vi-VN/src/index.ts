import {defineLocale, definePlugin} from 'sanity'

const locale = defineLocale({
  id: 'vi-VN',
  title: 'Tiếng Việt',
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
    minimalDays: 1,
    weekend: [6, 7],
  },
})

/**
 * Tiếng Việt locale/translation plugin for Sanity Studio
 *
 * @public
 */
export const viVNLocale = definePlugin({
  name: '@sanity/locale-vi-vn',
  i18n: {
    locales: [locale],
  },
})
