import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Action text for scheduling publish of a draft document */
  'action.schedule-publish': 'Schemalägg publicering',
  /** Tooltip text for when schedule publish fails */
  'action.schedule-publish-error': 'Det gick inte att schemalägga publicering',
  /** Tooltip text for when a document is scheduled for publishing */
  'action.schedule-publish-success': 'Dokument schemalagt för publicering',
  /** Tooltip description for when a document is scheduled for publishing */
  'action.schedule-publish-success-description': 'Publicering schemalagd för {{publishAt}}',
  /** Tooltip text for when schedule publish is disabled due to cardinality one releases */
  'action.schedule-publish.disabled.cardinality-one':
    'Ett schemalagt utkast för detta dokument finns redan.',
  /** Tooltip text for when schedule publish is disabled due to validation errors */
  'action.schedule-publish.disabled.validation-issues':
    'Kan inte schemalägga utkast på grund av valideringsfel i det aktuella utkastet.',

  /** Empty state action documentation for scheduled drafts */
  'empty-state.action.documentation': 'Lär dig om schemaläggning',
  /** Empty state description for scheduled drafts */
  'empty-state.description':
    'Schemalägg och lås utkastdokument för publicering vid ett framtida datum och tid.',
  /** Empty state title for scheduled drafts */
  'empty-state.title': 'Schemalagda utkast',
})
