import {defineLocale, definePlugin, type LocaleDefinition} from 'sanity'

const locale = defineLocale({
  id: 'ar-SA',
  title: 'العربية (السعودية)',
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
    weekend: [5, 6],
    minimalDays: 1,
  },
})

/**
 * العربية (السعودية) / Arabic (Saudi Arabia) locale/translation plugin for Sanity Studio
 *
 * @public
 */
export const arSALocale = definePlugin<{
  title?: string
  weekInfo?: LocaleDefinition['weekInfo']
} | void>((config) => ({
  name: '@sanity/locale-ar-sa',
  i18n: {
    locales: [config ? {...locale, ...config} : locale],
  },
}))
