import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Action text for scheduling publish of a draft document */
  'action.schedule-publish': 'Запланировать публикацию',
  /** Tooltip text for when schedule publish fails */
  'action.schedule-publish-error': 'Не удалось запланировать публикацию',
  /** Tooltip text for when a document is scheduled for publishing */
  'action.schedule-publish-success': 'Публикация документа запланирована',
  /** Tooltip description for when a document is scheduled for publishing */
  'action.schedule-publish-success-description': 'Публикация запланирована на {{publishAt}}',
  /** Tooltip text for when schedule publish is disabled due to cardinality one releases */
  'action.schedule-publish.disabled.cardinality-one':
    'Запланированный черновик для этого документа уже существует.',
  /** Tooltip text for when schedule publish is disabled due to validation errors */
  'action.schedule-publish.disabled.validation-issues':
    'Невозможно запланировать черновик из-за ошибок валидации в текущем черновике.',

  /** Empty state action documentation for scheduled drafts */
  'empty-state.action.documentation': 'Узнать о планировании',
  /** Empty state description for scheduled drafts */
  'empty-state.description':
    'Планируйте и блокируйте черновики документов для публикации в будущую дату и время.',
  /** Empty state title for scheduled drafts */
  'empty-state.title': 'Запланированные черновики',
})
