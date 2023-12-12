import { defineLocale, definePlugin } from "sanity";

const locale = defineLocale({
  id: "th-TH",
  title: "ไทย",
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
    minimalDays: 1,
    weekend: [6, 7],
  },
});

/**
 * ไทย locale/translation plugin for Sanity Studio
 *
 * @public
 */
export const thTHLocale = definePlugin({
  name: "@sanity/locale-th-th",
  i18n: {
    locales: [locale],
  },
});
