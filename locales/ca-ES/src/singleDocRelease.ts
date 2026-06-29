import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Action text for scheduling publish of a draft document */
  'action.schedule-publish': 'Programar publicació',
  /** Tooltip text for when schedule publish fails */
  'action.schedule-publish-error': "No s'ha pogut programar la publicació",
  /** Tooltip text for when a document is scheduled for publishing */
  'action.schedule-publish-success': 'Document programat per a la publicació',
  /** Tooltip description for when a document is scheduled for publishing */
  'action.schedule-publish-success-description': 'Publicació programada per a {{publishAt}}',
  /** Tooltip text for when schedule publish is disabled due to cardinality one releases */
  'action.schedule-publish.disabled.cardinality-one':
    'Ja existeix un esborrany programat per a aquest document.',
  /** Tooltip text for when schedule publish is disabled due to validation errors */
  'action.schedule-publish.disabled.validation-issues':
    "No es pot programar l'esborrany a causa d'errors de validació a l'esborrany actual.",

  /** Empty state action documentation for scheduled drafts */
  'empty-state.action.documentation': 'Aprèn sobre la programació',
  /** Empty state description for scheduled drafts */
  'empty-state.description':
    'Programa i bloqueja documents esborranys per publicar-los en una data i hora futures.',
  /** Empty state title for scheduled drafts */
  'empty-state.title': 'Esborranys programats',
})
