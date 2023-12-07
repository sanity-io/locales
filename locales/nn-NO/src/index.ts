import {defineLocale, definePlugin} from 'sanity'

const locale = defineLocale({
  id: 'nn-NO',
  title: 'Norsk (Nynorsk)',
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
 * Norsk (Nynorsk) locale/translation plugin for Sanity Studio
 *
 * @public
 */
export const nnNOLocale = definePlugin({
  name: '@sanity/locale-nn-no',
  i18n: {
    locales: [locale],
  },
})
