import {defineLocale, definePlugin, type LocaleDefinition} from 'sanity'

const locale = defineLocale({
  id: 'es-ES',
  title: 'Español',
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
 * Español / Spanish locale/translation plugin for Sanity Studio
 *
 * @public
 */
export const esESLocale = definePlugin<{
  title?: string
  weekInfo?: LocaleDefinition['weekInfo']
} | void>((config) => ({
  name: '@sanity/locale-es-es',
  i18n: {
    locales: [config ? {...locale, ...config} : locale],
  },
}))
