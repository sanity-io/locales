import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Action text for scheduling publish of a draft document */
  'action.schedule-publish': 'Yayını zamanla',
  /** Tooltip text for when schedule publish fails */
  'action.schedule-publish-error': 'Yayın zamanlaması başarısız oldu',
  /** Tooltip text for when a document is scheduled for publishing */
  'action.schedule-publish-success': 'Belge yayın için zamanlandı',
  /** Tooltip description for when a document is scheduled for publishing */
  'action.schedule-publish-success-description': 'Yayın {{publishAt}} için zamanlandı',
  /** Tooltip text for when schedule publish is disabled due to cardinality one releases */
  'action.schedule-publish.disabled.cardinality-one':
    'Bu belge için zaten bir Zamanlanmış Taslak mevcut.',
  /** Tooltip text for when schedule publish is disabled due to validation errors */
  'action.schedule-publish.disabled.validation-issues':
    'Mevcut taslaktaki doğrulama hataları nedeniyle Taslak zamanlanamıyor.',

  /** Empty state action documentation for scheduled drafts */
  'empty-state.action.documentation': 'Zamanlama hakkında bilgi edinin',
  /** Empty state description for scheduled drafts */
  'empty-state.description':
    'Taslak belgeleri gelecekteki bir tarih ve saat için yayınlanmak üzere zamanlayın ve kilitleyin.',
  /** Empty state title for scheduled drafts */
  'empty-state.title': 'Zamanlanmış Taslaklar',
})
