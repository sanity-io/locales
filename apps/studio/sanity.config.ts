import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {locales} from './locales'

export default defineConfig({
  title: 'i18n',

  projectId: 'p0m51e1s',
  dataset: 'lolokay',

  plugins: [deskTool(), visionTool(), ...locales],

  schema: {
    types: schemaTypes,
  },
})
