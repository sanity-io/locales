import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Action text for scheduling publish of a draft document */
  'action.schedule-publish': 'Planlæg publicering',
  /** Tooltip text for when schedule publish fails */
  'action.schedule-publish-error': 'Kunne ikke planlægge publicering',
  /** Tooltip text for when a document is scheduled for publishing */
  'action.schedule-publish-success': 'Dokument planlagt til publicering',
  /** Tooltip description for when a document is scheduled for publishing */
  'action.schedule-publish-success-description': 'Publicering planlagt til {{publishAt}}',
  /** Tooltip text for when schedule publish is disabled due to cardinality one releases */
  'action.schedule-publish.disabled.cardinality-one':
    'Der findes allerede et planlagt kladde for dette dokument.',
  /** Tooltip text for when schedule publish is disabled due to validation errors */
  'action.schedule-publish.disabled.validation-issues':
    'Kan ikke planlægge kladde på grund af valideringsfejl i den aktuelle kladde.',

  /** Empty state action documentation for scheduled drafts */
  'empty-state.action.documentation': 'Lær om planlægning',
  /** Empty state description for scheduled drafts */
  'empty-state.description':
    'Planlæg og lås kladdedokumenter til publicering på en fremtidig dato og tidspunkt.',
  /** Empty state title for scheduled drafts */
  'empty-state.title': 'Planlagte kladder',
})
