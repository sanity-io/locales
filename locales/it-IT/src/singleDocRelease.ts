import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Action text for scheduling publish of a draft document */
  'action.schedule-publish': 'Pianifica pubblicazione',
  /** Tooltip text for when schedule publish fails */
  'action.schedule-publish-error': 'Impossibile pianificare la pubblicazione',
  /** Tooltip text for when a document is scheduled for publishing */
  'action.schedule-publish-success': 'Documento pianificato per la pubblicazione',
  /** Tooltip description for when a document is scheduled for publishing */
  'action.schedule-publish-success-description': 'Pubblicazione pianificata per {{publishAt}}',
  /** Tooltip text for when schedule publish is disabled due to cardinality one releases */
  'action.schedule-publish.disabled.cardinality-one':
    'Esiste già una bozza pianificata per questo documento.',
  /** Tooltip text for when schedule publish is disabled due to validation errors */
  'action.schedule-publish.disabled.validation-issues':
    'Impossibile pianificare la bozza a causa di errori di validazione nella bozza corrente.',

  /** Empty state action documentation for scheduled drafts */
  'empty-state.action.documentation': 'Scopri la pianificazione',
  /** Empty state description for scheduled drafts */
  'empty-state.description':
    "Pianifica e blocca le bozze dei documenti per la pubblicazione in una data e un'ora future.",
  /** Empty state title for scheduled drafts */
  'empty-state.title': 'Bozze pianificate',
})
