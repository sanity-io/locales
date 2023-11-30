/**
 * This is an example of how you can provide localized strings to your own plugins/customizations.
 * Using the `i18n` property on the studio configuration, or in a plugin, allows registering one or
 * more localization bundles.
 */
import {definePlugin} from 'sanity'

export const i18nNamespace = 'i18n-demo'

export const i18nDemo = definePlugin({
  name: 'i18n-demo',
  i18n: {
    bundles: [
      {
        locale: 'en-US',
        namespace: i18nNamespace,
        resources: () => import('./en-US'),
      },
      {
        locale: 'no-NB',
        namespace: i18nNamespace,
        resources: () => import('./no-NB'),
      },
    ],
  },
})
