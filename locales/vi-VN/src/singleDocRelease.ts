import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Action text for scheduling publish of a draft document */
  'action.schedule-publish': 'Lên lịch xuất bản',
  /** Tooltip text for when schedule publish fails */
  'action.schedule-publish-error': 'Không thể lên lịch xuất bản',
  /** Tooltip text for when a document is scheduled for publishing */
  'action.schedule-publish-success': 'Tài liệu đã được lên lịch xuất bản',
  /** Tooltip description for when a document is scheduled for publishing */
  'action.schedule-publish-success-description': 'Đã lên lịch xuất bản vào {{publishAt}}',
  /** Tooltip text for when schedule publish is disabled due to cardinality one releases */
  'action.schedule-publish.disabled.cardinality-one':
    'Đã tồn tại một Scheduled Draft cho tài liệu này.',
  /** Tooltip text for when schedule publish is disabled due to validation errors */
  'action.schedule-publish.disabled.validation-issues':
    'Không thể lên lịch Draft do lỗi xác thực trong bản nháp hiện tại.',

  /** Empty state action documentation for scheduled drafts */
  'empty-state.action.documentation': 'Tìm hiểu về lên lịch',
  /** Empty state description for scheduled drafts */
  'empty-state.description':
    'Lên lịch và khóa các tài liệu nháp để xuất bản vào ngày và giờ trong tương lai.',
  /** Empty state title for scheduled drafts */
  'empty-state.title': 'Scheduled Drafts',
})
