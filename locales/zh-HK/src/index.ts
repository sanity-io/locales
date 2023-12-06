import {defineLocale, definePlugin} from 'sanity'

const locale = defineLocale({
  id: 'zh-HK',
  title: '中文（香港）',
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
 * 中文（香港） locale/translation plugin for Sanity Studio
 *
 * @public
 */
export const zhHKLocale = definePlugin({
  name: '@sanity/locale-zh-hk',
  i18n: {
    locales: [locale],
  },
})
