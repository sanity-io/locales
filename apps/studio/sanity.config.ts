import {visionTool} from '@sanity/vision'
import {defineConfig, type PluginOptions, type WorkspaceOptions} from 'sanity'
import {structureTool} from 'sanity/structure'

import {i18nDemo} from './i18n'
import {locales} from './locales'
import {localizationTest} from './schemas/localizationTest'
import {structureDefinition} from './structure/definition'

const projectId = 'ppsg7ml5'
const dataset = 'test'

export default defineConfig([
  // en-US is built-in, but we'll still want a workspace for it
  withDefaultConfig({id: 'en-US', title: 'English (US)'}),

  // Add workspaces for all the locale plugins we have defined
  ...locales
    .map((plugin) => localePluginToWorkspace(plugin))
    .filter((workspace) => workspace !== null)
    .sort((a, b) => a?.title?.localeCompare(b?.title || '') || 0),
])

function withDefaultConfig(
  {id, title}: {id: string; title: string},
  plugin?: PluginOptions,
): WorkspaceOptions {
  return {
    name: id,
    title: title,
    basePath: `/${id}`,
    icon: () => null,

    projectId,
    dataset,

    plugins: (plugin ? [plugin] : []).concat([
      // A custom i18n plugin (with a namespace for this demo studio)
      i18nDemo(),
      // Our old trusty structure tool
      structureTool({structure: structureDefinition}),
      // And the vision developer tool
      visionTool(),
    ]),

    schema: {
      types: [localizationTest],
    },
  }
}

function localePluginToWorkspace(plugin: PluginOptions): WorkspaceOptions | null {
  const i18n = plugin.i18n || {}
  if (!Array.isArray(i18n.locales)) {
    return null
  }

  const locale = i18n.locales[0]
  if (!locale) {
    return null
  }

  return withDefaultConfig(locale, plugin)
}
