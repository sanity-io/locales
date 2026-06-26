import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Action text for scheduling publish of a draft document */
  'action.schedule-publish': 'Agendar publicação',
  /** Tooltip text for when schedule publish fails */
  'action.schedule-publish-error': 'Falha ao agendar a publicação',
  /** Tooltip text for when a document is scheduled for publishing */
  'action.schedule-publish-success': 'Documento agendado para publicação',
  /** Tooltip description for when a document is scheduled for publishing */
  'action.schedule-publish-success-description': 'Publicação agendada para {{publishAt}}',
  /** Tooltip text for when schedule publish is disabled due to cardinality one releases */
  'action.schedule-publish.disabled.cardinality-one':
    'Já existe um Rascunho Agendado para este documento.',
  /** Tooltip text for when schedule publish is disabled due to validation errors */
  'action.schedule-publish.disabled.validation-issues':
    'Não é possível agendar o rascunho devido a erros de validação no rascunho atual.',

  /** Empty state action documentation for scheduled drafts */
  'empty-state.action.documentation': 'Saiba mais sobre agendamento',
  /** Empty state description for scheduled drafts */
  'empty-state.description':
    'Agende e bloqueie documentos de rascunho para publicação em uma data e hora futuras.',
  /** Empty state title for scheduled drafts */
  'empty-state.title': 'Rascunhos Agendados',
})
