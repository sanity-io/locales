import {defineLocale, definePlugin} from 'sanity'

const locale = defineLocale({
  id: 'zh-Hans',
  title: '简体中文',
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
 * 简体中文 locale/translation plugin for Sanity Studio
 *
 * @public
 */
export const zhHansLocale = definePlugin({
  name: '@sanity/locale-zh-hans',
  i18n: {
    locales: [locale],
  },
})
