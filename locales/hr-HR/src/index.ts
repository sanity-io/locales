import {defineLocale, definePlugin, type LocaleDefinition} from 'sanity'

const locale = defineLocale({
  id: 'hr-HR',
  title: 'Hrvatski',
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
 * Hrvatski / Croatian locale/translation plugin for Sanity Studio
 *
 * @public
 */
export const hrHRLocale = definePlugin<{
  title?: string
  weekInfo?: LocaleDefinition['weekInfo']
} | void>((config) => ({
  name: '@sanity/locale-hr-hr',
  i18n: {
    locales: [config ? {...locale, ...config} : locale],
  },
}))
