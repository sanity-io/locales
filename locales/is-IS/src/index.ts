import { defineLocale, definePlugin } from "sanity";

const locale = defineLocale({
  id: "is-IS",
  title: "Íslenska",
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
 * Íslenska locale/translation plugin for Sanity Studio
 *
 * @public
 */
export const isISLocale = definePlugin({
  name: "@sanity/locale-is-is",
  i18n: {
    locales: [locale],
  },
});
