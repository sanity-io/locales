import {defineLocale, definePlugin, type LocaleDefinition} from 'sanity'

const locale = defineLocale({
  id: 'zh-Hant',
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
      namespace: 'comments',
      resources: () => import('./comments'),
    },

    {
      namespace: 'vision',
      resources: () => import('./vision'),
    },
  ],
  weekInfo: {
    firstDay: 7,
    weekend: [6, 7],
    minimalDays: 1,
  },
})

/**
 * 繁體中文 / Chinese (Traditional) locale/translation plugin for Sanity Studio
 *
 * @public
 */
export const zhHantLocale = definePlugin<{
  title?: string
  weekInfo?: LocaleDefinition['weekInfo']
} | void>((config) => ({
  name: '@sanity/locale-zh-hant',
  i18n: {
    locales: [config ? {...locale, ...config} : locale],
  },
}))
