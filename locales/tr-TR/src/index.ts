import {defineLocale, definePlugin, type LocaleDefinition} from 'sanity'

const locale = defineLocale({
  id: 'tr-TR',
  title: 'Türkçe',
  bundles: [
    {
      namespace: 'comments',
      resources: () => import('./comments'),
    },

    {
      namespace: 'copy-paste',
      resources: () => import('./copy-paste'),
    },

    {
      namespace: 'create',
      resources: () => import('./create'),
    },

    {
      namespace: 'structure',
      resources: () => import('./structure'),
    },

    {
      namespace: 'studio',
      resources: () => import('./studio'),
    },

    {
      namespace: 'tasks',
      resources: () => import('./tasks'),
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
 * Türkçe / Turkish locale/translation plugin for Sanity Studio
 *
 * @public
 */
export const trTRLocale = definePlugin<{
  title?: string
  weekInfo?: LocaleDefinition['weekInfo']
} | void>((config) => ({
  name: '@sanity/locale-tr-tr',
  i18n: {
    locales: [config ? {...locale, ...config} : locale],
  },
}))
