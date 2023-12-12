import { defineLocale, definePlugin } from "sanity";

const locale = defineLocale({
  id: "es-ES",
  title: "Español",
  bundles: [
    {
      namespace: "structure",
      resources: () => import("./structure"),
    },

    {
      namespace: "studio",
      resources: () => import("./studio"),
    },

    {
      namespace: "validation",
      resources: () => import("./validation"),
    },

    {
      namespace: "vision",
      resources: () => import("./vision"),
    },
  ],
  weekInfo: {
    firstDay: 1,
    minimalDays: 4,
    weekend: [6, 7],
  },
});

/**
 * Español locale/translation plugin for Sanity Studio
 *
 * @public
 */
export const esESLocale = definePlugin({
  name: "@sanity/locale-es-es",
  i18n: {
    locales: [locale],
  },
});
