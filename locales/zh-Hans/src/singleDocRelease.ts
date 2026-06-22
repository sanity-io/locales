import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Action text for scheduling publish of a draft document */
  'action.schedule-publish': '计划发布',
  /** Tooltip text for when schedule publish fails */
  'action.schedule-publish-error': '计划发布失败',
  /** Tooltip text for when a document is scheduled for publishing */
  'action.schedule-publish-success': '文档已计划发布',
  /** Tooltip description for when a document is scheduled for publishing */
  'action.schedule-publish-success-description': '已计划于 {{publishAt}} 发布',
  /** Tooltip text for when schedule publish is disabled due to cardinality one releases */
  'action.schedule-publish.disabled.cardinality-one': '该文档的计划草稿已存在。',
  /** Tooltip text for when schedule publish is disabled due to validation errors */
  'action.schedule-publish.disabled.validation-issues': '由于当前草稿存在验证错误，无法计划草稿。',

  /** Empty state action documentation for scheduled drafts */
  'empty-state.action.documentation': '了解计划发布',
  /** Empty state description for scheduled drafts */
  'empty-state.description': '计划并锁定草稿文档，以便在未来的日期和时间发布。',
  /** Empty state title for scheduled drafts */
  'empty-state.title': '计划草稿',
})
