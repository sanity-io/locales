import {defineLocale, definePlugin, type LocaleDefinition} from 'sanity'

const locale = defineLocale({
  id: 'kn-IN',
  title: 'ಕನ್ನಡ',
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
    firstDay: 7,
    minimalDays: 1,
    weekend: [7],
  },
})

/**
 * ಕನ್ನಡ / Kannada (India) locale/translation plugin for Sanity Studio
 *
 * @public
 */
export const knINLocale = definePlugin<{
  title?: string
  weekInfo?: LocaleDefinition['weekInfo']
} | void>((config) => ({
  name: '@sanity/locale-kn-in',
  i18n: {
    locales: [config ? {...locale, ...config} : locale],
  },
}))
