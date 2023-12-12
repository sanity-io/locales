import { defineLocale, definePlugin } from "sanity";

const locale = defineLocale({
  id: "zh-Hant",
  title: "繁體中文",
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
 * 繁體中文 locale/translation plugin for Sanity Studio
 *
 * @public
 */
export const zhHantLocale = definePlugin({
  name: "@sanity/locale-zh-hant",
  i18n: {
    locales: [locale],
  },
});
