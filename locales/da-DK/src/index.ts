import {defineLocale, definePlugin, type LocaleDefinition} from 'sanity'

const locale = defineLocale({
  id: 'da-DK',
  title: 'Dansk',
  bundles: [
    {
      namespace: 'comments',
      resources: () => import('./comments'),
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
    minimalDays: 4,
    weekend: [6, 7],
  },
})

/**
 * Dansk / Danish locale/translation plugin for Sanity Studio
 *
 * @public
 */
export const daDKLocale = definePlugin<{
  title?: string
  weekInfo?: LocaleDefinition['weekInfo']
} | void>((config) => ({
  name: '@sanity/locale-da-dk',
  i18n: {
    locales: [config ? {...locale, ...config} : locale],
  },
}))
