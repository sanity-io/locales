import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Action text for scheduling publish of a draft document */
  'action.schedule-publish': 'Veröffentlichung planen',
  /** Tooltip text for when schedule publish fails */
  'action.schedule-publish-error': 'Planung der Veröffentlichung fehlgeschlagen',
  /** Tooltip text for when a document is scheduled for publishing */
  'action.schedule-publish-success': 'Dokument zur Veröffentlichung geplant',
  /** Tooltip description for when a document is scheduled for publishing */
  'action.schedule-publish-success-description': 'Veröffentlichung geplant für {{publishAt}}',
  /** Tooltip text for when schedule publish is disabled due to cardinality one releases */
  'action.schedule-publish.disabled.cardinality-one':
    'Für dieses Dokument existiert bereits ein geplanter Entwurf.',
  /** Tooltip text for when schedule publish is disabled due to validation errors */
  'action.schedule-publish.disabled.validation-issues':
    'Entwurf kann aufgrund von Validierungsfehlern im aktuellen Entwurf nicht geplant werden.',

  /** Empty state action documentation for scheduled drafts */
  'empty-state.action.documentation': 'Mehr über Planung erfahren',
  /** Empty state description for scheduled drafts */
  'empty-state.description':
    'Planen und sperren Sie Entwurfsdokumente für die Veröffentlichung zu einem zukünftigen Datum und einer zukünftigen Uhrzeit.',
  /** Empty state title for scheduled drafts */
  'empty-state.title': 'Geplante Entwürfe',
})
