import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'

import {i18nDemo} from './i18n'
import {locales} from './locales'
import {localizationTest} from './schemas/localizationTest'
import {structureDefinition} from './structure/definition'

export default defineConfig({
  title: 'Localization',

  projectId: 'ppsg7ml5',
  dataset: 'test',

  plugins: [
    // All the defined locales
    ...locales,
    // A custom i18n plugin (with a namespace for this demo studio)
    i18nDemo(),
    // Our old trusty structure tool
    structureTool({structure: structureDefinition}),
    // And the vision developer tool
    visionTool(),
  ],

  schema: {
    types: [localizationTest],
  },
})
