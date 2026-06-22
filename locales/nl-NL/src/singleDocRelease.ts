import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Action text for scheduling publish of a draft document */
  'action.schedule-publish': 'Publicatie inplannen',
  /** Tooltip text for when schedule publish fails */
  'action.schedule-publish-error': 'Inplannen van publicatie mislukt',
  /** Tooltip text for when a document is scheduled for publishing */
  'action.schedule-publish-success': 'Document ingepland voor publicatie',
  /** Tooltip description for when a document is scheduled for publishing */
  'action.schedule-publish-success-description': 'Publicatie ingepland voor {{publishAt}}',
  /** Tooltip text for when schedule publish is disabled due to cardinality one releases */
  'action.schedule-publish.disabled.cardinality-one':
    'Er bestaat al een ingepland concept voor dit document.',
  /** Tooltip text for when schedule publish is disabled due to validation errors */
  'action.schedule-publish.disabled.validation-issues':
    'Kan concept niet inplannen vanwege validatiefouten in het huidige concept.',

  /** Empty state action documentation for scheduled drafts */
  'empty-state.action.documentation': 'Meer informatie over inplannen',
  /** Empty state description for scheduled drafts */
  'empty-state.description':
    'Plan conceptdocumenten in en vergrendel ze voor publicatie op een toekomstige datum en tijd.',
  /** Empty state title for scheduled drafts */
  'empty-state.title': 'Ingeplande concepten',
})
