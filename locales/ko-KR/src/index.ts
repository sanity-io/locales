import {defineLocale, definePlugin} from 'sanity'

const locale = defineLocale({
  id: 'ko-KR',
  title: '한국어',
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
 * 한국어 locale/translation plugin for Sanity Studio
 *
 * @public
 */
export const koKRLocale = definePlugin({
  name: '@sanity/locale-ko-kr',
  i18n: {
    locales: [locale],
  },
})
