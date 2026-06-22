import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Action text for scheduling publish of a draft document */
  'action.schedule-publish': 'Programează publicarea',
  /** Tooltip text for when schedule publish fails */
  'action.schedule-publish-error': 'Programarea publicării a eșuat',
  /** Tooltip text for when a document is scheduled for publishing */
  'action.schedule-publish-success': 'Document programat pentru publicare',
  /** Tooltip description for when a document is scheduled for publishing */
  'action.schedule-publish-success-description': 'Publicare programată pentru {{publishAt}}',
  /** Tooltip text for when schedule publish is disabled due to cardinality one releases */
  'action.schedule-publish.disabled.cardinality-one':
    'Un Draft Programat pentru acest document există deja.',
  /** Tooltip text for when schedule publish is disabled due to validation errors */
  'action.schedule-publish.disabled.validation-issues':
    'Nu se poate programa draft-ul din cauza erorilor de validare din draft-ul curent.',

  /** Empty state action documentation for scheduled drafts */
  'empty-state.action.documentation': 'Aflați despre programare',
  /** Empty state description for scheduled drafts */
  'empty-state.description':
    'Programați și blocați documentele draft pentru publicare la o dată și oră viitoare.',
  /** Empty state title for scheduled drafts */
  'empty-state.title': 'Draft-uri Programate',
})
