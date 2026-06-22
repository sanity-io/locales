import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Action text for scheduling publish of a draft document */
  'action.schedule-publish': '排程發布',
  /** Tooltip text for when schedule publish fails */
  'action.schedule-publish-error': '排程發布失敗',
  /** Tooltip text for when a document is scheduled for publishing */
  'action.schedule-publish-success': '文件已排程發布',
  /** Tooltip description for when a document is scheduled for publishing */
  'action.schedule-publish-success-description': '已排程於 {{publishAt}} 發布',
  /** Tooltip text for when schedule publish is disabled due to cardinality one releases */
  'action.schedule-publish.disabled.cardinality-one': '此文件的排程草稿已存在。',
  /** Tooltip text for when schedule publish is disabled due to validation errors */
  'action.schedule-publish.disabled.validation-issues': '由於目前草稿存在驗證錯誤，無法排程草稿。',

  /** Empty state action documentation for scheduled drafts */
  'empty-state.action.documentation': '了解排程功能',
  /** Empty state description for scheduled drafts */
  'empty-state.description': '排程並鎖定草稿文件，以便在未來的日期和時間發布。',
  /** Empty state title for scheduled drafts */
  'empty-state.title': '排程草稿',
})
