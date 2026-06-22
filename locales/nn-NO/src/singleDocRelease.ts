import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Action text for scheduling publish of a draft document */
  'action.schedule-publish': 'Planlegg publisering',
  /** Tooltip text for when schedule publish fails */
  'action.schedule-publish-error': 'Klarte ikkje å planleggje publisering',
  /** Tooltip text for when a document is scheduled for publishing */
  'action.schedule-publish-success': 'Dokumentet er planlagt for publisering',
  /** Tooltip description for when a document is scheduled for publishing */
  'action.schedule-publish-success-description': 'Publisering planlagt til {{publishAt}}',
  /** Tooltip text for when schedule publish is disabled due to cardinality one releases */
  'action.schedule-publish.disabled.cardinality-one':
    'Det finst allereie eit planlagt utkast for dette dokumentet.',
  /** Tooltip text for when schedule publish is disabled due to validation errors */
  'action.schedule-publish.disabled.validation-issues':
    'Kan ikkje planleggje utkast på grunn av valideringsfeil i det gjeldande utkastet.',

  /** Empty state action documentation for scheduled drafts */
  'empty-state.action.documentation': 'Lær om planlegging',
  /** Empty state description for scheduled drafts */
  'empty-state.description':
    'Planlegg og lås utkastdokument for publisering på ein framtidig dato og eit framtidig tidspunkt.',
  /** Empty state title for scheduled drafts */
  'empty-state.title': 'Planlagde utkast',
})
