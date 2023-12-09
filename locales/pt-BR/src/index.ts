import {defineLocale, definePlugin} from 'sanity'

const locale = defineLocale({
  id: 'pt-BR',
  title: 'Português (Brasil)',
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
 * Português (Brasil) locale/translation plugin for Sanity Studio
 *
 * @public
 */
export const ptBRLocale = definePlugin({
  name: '@sanity/locale-pt-br',
  i18n: {
    locales: [locale],
  },
})
