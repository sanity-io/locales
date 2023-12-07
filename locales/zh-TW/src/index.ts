import {defineLocale, definePlugin} from 'sanity'

const locale = defineLocale({
  id: 'zh-TW',
  title: '繁體中文',
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
 * 繁體中文 locale/translation plugin for Sanity Studio
 *
 * @public
 */
export const zhTWLocale = definePlugin({
  name: '@sanity/locale-zh-tw',
  i18n: {
    locales: [locale],
  },
})
