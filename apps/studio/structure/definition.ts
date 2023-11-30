import {StructureBuilder} from 'sanity/desk'
import {TestDocumentDeleter} from './TestDocumentDeleter'
import {localizationTest} from '../schemas/localizationTest'
import {TrashIcon} from '@sanity/icons'

export const structureDefinition = (S: StructureBuilder) =>
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
