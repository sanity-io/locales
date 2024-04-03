import {defineLocale, definePlugin, type LocaleDefinition} from 'sanity'

const locale = defineLocale({
  id: 'fi-FI',
  title: 'Suomi',
  bundles: [
    {
      namespace: 'structure',
      resources: () => import('./structure'),
    },

    {
      namespace: 'tasks',
      resources: () => import('./tasks'),
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
    firstDay: 1,
    minimalDays: 4,
    weekend: [6, 7],
  },
})

/**
 * Suomi / Finnish locale/translation plugin for Sanity Studio
 *
 * @public
 */
export const fiFILocale = definePlugin<{
  title?: string
  weekInfo?: LocaleDefinition['weekInfo']
} | void>((config) => ({
  name: '@sanity/locale-fi-fi',
  i18n: {
    locales: [config ? {...locale, ...config} : locale],
  },
}))
