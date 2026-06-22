import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Action text for scheduling publish of a draft document */
  'action.schedule-publish': 'Planlegg publisering',
  /** Tooltip text for when schedule publish fails */
  'action.schedule-publish-error': 'Kunne ikke planlegge publisering',
  /** Tooltip text for when a document is scheduled for publishing */
  'action.schedule-publish-success': 'Dokument planlagt for publisering',
  /** Tooltip description for when a document is scheduled for publishing */
  'action.schedule-publish-success-description': 'Publisering planlagt til {{publishAt}}',
  /** Tooltip text for when schedule publish is disabled due to cardinality one releases */
  'action.schedule-publish.disabled.cardinality-one':
    'Det finnes allerede et planlagt utkast for dette dokumentet.',
  /** Tooltip text for when schedule publish is disabled due to validation errors */
  'action.schedule-publish.disabled.validation-issues':
    'Kan ikke planlegge utkast på grunn av valideringsfeil i gjeldende utkast.',

  /** Empty state action documentation for scheduled drafts */
  'empty-state.action.documentation': 'Lær om planlegging',
  /** Empty state description for scheduled drafts */
  'empty-state.description':
    'Planlegg og lås utkastdokumenter for publisering på en fremtidig dato og tid.',
  /** Empty state title for scheduled drafts */
  'empty-state.title': 'Planlagte utkast',
})
