import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {locales} from './locales'

export default defineConfig({
  title: 'i18n',

  projectId: 'ppsg7ml5',
  dataset: 'test',

  plugins: [deskTool(), visionTool(), ...locales],

  schema: {
    types: schemaTypes,
  },
})
