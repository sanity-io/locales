import { defineLocale, definePlugin } from "sanity";

const locale = defineLocale({
  id: "pl-PL",
  title: "Polski",
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
 * Polski locale/translation plugin for Sanity Studio
 *
 * @public
 */
export const plPLLocale = definePlugin({
  name: "@sanity/locale-pl-pl",
  i18n: {
    locales: [locale],
  },
});
