import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Action text for scheduling publish of a draft document */
  'action.schedule-publish': 'Запланувати публікацію',
  /** Tooltip text for when schedule publish fails */
  'action.schedule-publish-error': 'Не вдалося запланувати публікацію',
  /** Tooltip text for when a document is scheduled for publishing */
  'action.schedule-publish-success': 'Документ заплановано до публікації',
  /** Tooltip description for when a document is scheduled for publishing */
  'action.schedule-publish-success-description': 'Публікацію заплановано на {{publishAt}}',
  /** Tooltip text for when schedule publish is disabled due to cardinality one releases */
  'action.schedule-publish.disabled.cardinality-one':
    'Для цього документа вже існує запланований чернетковий варіант.',
  /** Tooltip text for when schedule publish is disabled due to validation errors */
  'action.schedule-publish.disabled.validation-issues':
    'Неможливо запланувати чернетку через помилки валідації в поточній чернетці.',

  /** Empty state action documentation for scheduled drafts */
  'empty-state.action.documentation': 'Дізнатися про планування',
  /** Empty state description for scheduled drafts */
  'empty-state.description':
    'Плануйте та блокуйте чернеткові документи для публікації у майбутню дату й час.',
  /** Empty state title for scheduled drafts */
  'empty-state.title': 'Заплановані чернетки',
})
