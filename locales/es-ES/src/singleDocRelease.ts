import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Action text for scheduling publish of a draft document */
  'action.schedule-publish': 'Programar publicación',
  /** Tooltip text for when schedule publish fails */
  'action.schedule-publish-error': 'Error al programar la publicación',
  /** Tooltip text for when a document is scheduled for publishing */
  'action.schedule-publish-success': 'Documento programado para publicación',
  /** Tooltip description for when a document is scheduled for publishing */
  'action.schedule-publish-success-description': 'Publicación programada para {{publishAt}}',
  /** Tooltip text for when schedule publish is disabled due to cardinality one releases */
  'action.schedule-publish.disabled.cardinality-one':
    'Ya existe un borrador programado para este documento.',
  /** Tooltip text for when schedule publish is disabled due to validation errors */
  'action.schedule-publish.disabled.validation-issues':
    'No se puede programar el borrador debido a errores de validación en el borrador actual.',

  /** Empty state action documentation for scheduled drafts */
  'empty-state.action.documentation': 'Más información sobre la programación',
  /** Empty state description for scheduled drafts */
  'empty-state.description':
    'Programa y bloquea borradores de documentos para su publicación en una fecha y hora futuras.',
  /** Empty state title for scheduled drafts */
  'empty-state.title': 'Borradores programados',
})
