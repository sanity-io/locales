import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Action text for scheduling publish of a draft document */
  'action.schedule-publish': undefined, // 'Schedule publish'
  /** Tooltip text for when schedule publish fails */
  'action.schedule-publish-error': undefined, // 'Failed to schedule publishing'
  /** Tooltip text for when a document is scheduled for publishing */
  'action.schedule-publish-success': undefined, // 'Document scheduled for publishing'
  /** Tooltip description for when a document is scheduled for publishing */
  'action.schedule-publish-success-description': undefined, // 'Publishing scheduled for {{publishAt}}'
  /** Tooltip text for when schedule publish is disabled due to cardinality one releases */
  'action.schedule-publish.disabled.cardinality-one': undefined, // 'A Scheduled Draft for this document already exists.'
  /** Tooltip text for when schedule publish is disabled due to validation errors */
  'action.schedule-publish.disabled.validation-issues': undefined, // 'Cannot Schedule Draft due to validation errors in the current draft.'

  /** Empty state action documentation for scheduled drafts */
  'empty-state.action.documentation': undefined, // 'Learn about scheduling'
  /** Empty state description for scheduled drafts */
  'empty-state.description': undefined, // 'Schedule and lock draft documents for publishing at a future date and time.'
  /** Empty state title for scheduled drafts */
  'empty-state.title': undefined, // 'Scheduled Drafts'
})
