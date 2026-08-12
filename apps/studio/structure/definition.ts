import {TrashIcon} from '@sanity/icons/Trash'
import type {ListBuilder, StructureBuilder} from 'sanity/structure'

import {localizationTest} from '../schemas/localizationTest'
import {TestDocumentDeleter} from './TestDocumentDeleter'

export const structureDefinition = (S: StructureBuilder): ListBuilder =>
  S.list()
    .id('root')
    .title('🌍 🌏 🌎')
    .items([
      S.documentTypeListItem(localizationTest.name).title('Test documents'),
      S.divider(),
      S.listItem()
        .title('Delete test documents')
        .icon(TrashIcon)
        .child(S.component().title('Confirm delete').component(TestDocumentDeleter)),
    ])
