import { defineLocale, definePlugin } from "sanity";

const locale = defineLocale({
  id: "pt-PT",
  title: "Português",
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
    firstDay: 7,
    minimalDays: 4,
    weekend: [6, 7],
  },
});

/**
 * Português locale/translation plugin for Sanity Studio
 *
 * @public
 */
export const ptPTLocale = definePlugin({
  name: "@sanity/locale-pt-pt",
  i18n: {
    locales: [locale],
  },
});
