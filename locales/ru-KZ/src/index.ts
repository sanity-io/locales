import {defineLocale, definePlugin, type LocaleDefinition} from 'sanity'

const locale = defineLocale({
  id: 'ru-KZ',
  title: 'Русский',
  bundles: [
    {
      namespace: 'canvas',
      resources: () => import('./canvas'),
    },

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
 * Русский / Russian (Kazakhstan) locale/translation plugin for Sanity Studio
 *
 * @public
 */
export const ruKZLocale = definePlugin<{
  title?: string
  weekInfo?: LocaleDefinition['weekInfo']
} | void>((config) => ({
  name: '@sanity/locale-ru-kz',
  i18n: {
    locales: [config ? {...locale, ...config} : locale],
  },
}))
