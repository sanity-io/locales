import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Action text for scheduling publish of a draft document */
  'action.schedule-publish': 'Запланаваць публікацыю',
  /** Tooltip text for when schedule publish fails */
  'action.schedule-publish-error': 'Не ўдалося запланаваць публікацыю',
  /** Tooltip text for when a document is scheduled for publishing */
  'action.schedule-publish-success': 'Дакумент запланаваны для публікацыі',
  /** Tooltip description for when a document is scheduled for publishing */
  'action.schedule-publish-success-description': 'Публікацыя запланавана на {{publishAt}}',
  /** Tooltip text for when schedule publish is disabled due to cardinality one releases */
  'action.schedule-publish.disabled.cardinality-one':
    'Запланаваны чарнавік для гэтага дакумента ўжо існуе.',
  /** Tooltip text for when schedule publish is disabled due to validation errors */
  'action.schedule-publish.disabled.validation-issues':
    'Немагчыма запланаваць чарнавік з-за памылак валідацыі ў бягучым чарнавіку.',

  /** Empty state action documentation for scheduled drafts */
  'empty-state.action.documentation': 'Даведацца пра планаванне',
  /** Empty state description for scheduled drafts */
  'empty-state.description':
    'Плануйце і блакуйце чарнавыя дакументы для публікацыі ў будучай даце і часе.',
  /** Empty state title for scheduled drafts */
  'empty-state.title': 'Запланаваныя чарнавікі',
})
