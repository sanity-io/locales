import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Action text for adding a document to release */
  'action.add-document': undefined, // 'Add document'
  /** Action text for archiving a release */
  'action.archive': undefined, // 'Archive release'
  /** Tooltip for when the archive release action is disabled due to release being scheduled  */
  'action.archive.tooltip': undefined, // 'Unschedule this release to archive it'
  /** Action text for showing the archived releases */
  'action.archived': undefined, // 'Archived'
  /** Menu item label for copying release ID */
  'action.copy-release-id.label': undefined, // 'Copy release ID'
  /** Menu item label for copying release URL */
  'action.copy-release-link.label': undefined, // 'Copy release URL'
  /** Menu item label for copying release title */
  'action.copy-release-title.label': undefined, // 'Copy release title'
  /** Tooltip for copy release actions button */
  'action.copy-release.label': undefined, // 'Copy'
  /** Action text for staging a new revert release */
  'action.create-revert-release': undefined, // 'Create a new release'
  /** Action text for deleting a release */
  'action.delete-release': undefined, // 'Delete release'
  /** Menu item label for showing scheduled drafts */
  'action.drafts': undefined, // 'Scheduled drafts'
  /** Action text for duplicating a release */
  'action.duplicate-release': undefined, // 'Duplicate release'
  /** Action text for editing a release */
  'action.edit': undefined, // 'Edit release'
  /** Action text for reverting a release immediately without staging changes */
  'action.immediate-revert-release': undefined, // 'Revert now'
  /** Action text for opening a release */
  'action.open': undefined, // 'Active'
  /** Action text for showing the paused scheduled drafts */
  'action.paused': undefined, // 'Paused'
  /** Action text for publishing all documents in a release (and the release itself) */
  'action.publish-all-documents': undefined, // 'Run release'
  /** Menu item label for showing releases (multi-document releases) */
  'action.releases': undefined, // 'Releases'
  /** Action text for reverting a release */
  'action.revert': undefined, // 'Revert release'
  /** Action message for when document is scheduled for unpublishing a document and you want to no longer unpublish it */
  'action.revert-unpublish-actions': undefined, // 'Revert unpublish when releasing'
  /** Text for the review changes button in release tool */
  'action.review': undefined, // 'Review changes'
  /** Action text for scheduling a release */
  'action.schedule': undefined, // 'Schedule release...'
  /** Action text for scheduling unpublish of a draft document */
  'action.schedule-unpublish': undefined, // 'Schedule Unpublish'
  /** Tooltip text for when schedule unpublish is disabled because document is not published */
  'action.schedule-unpublish.disabled.not-published': undefined, // 'Document must be published to schedule unpublish'
  /** Label for unarchiving a release */
  'action.unarchive': undefined, // 'Unarchive release'
  /** Action text for unpublishing a document in a release in the context menu */
  'action.unpublish': undefined, // 'Unpublish'
  /** Action message for scheduling an unpublished of a document  */
  'action.unpublish-doc-actions': undefined, // 'Unpublish when releasing'
  /** Action text for unscheduling a release */
  'action.unschedule': undefined, // 'Unschedule release'

  /** Text for the summary button in release tool */
  'actions.summary': undefined, // 'Summary'

  /* The text for the activity event when a document is added to a release */
  'activity.event.add-document': undefined, // 'Added a document version'
  /* The text for the activity event when the release is archived */
  'activity.event.archive': undefined, // 'Archived the <strong>{{releaseTitle}}</strong> release'
  /* The text for the activity event when the release is created */
  'activity.event.create': undefined, // 'Created the <strong>{{releaseTitle}}</strong> release <ScheduleTarget>targeting </ScheduleTarget>'
  /* The text for the activity event when a document is removed from a release */
  'activity.event.discard-document': undefined, // 'Discarded a document version'
  'activity.event.edit': undefined, // 'Set release time to <ScheduleTarget></ScheduleTarget>'
  /**The text to display in the changes when the release type changes to asap */
  'activity.event.edit-time-asap': undefined, // 'As soon as possible'
  /**The text to display in the changes when the release type changes to undecided */
  'activity.event.edit-time-undecided': undefined, // 'Undecided'
  /* The text for the activity event when the release is published */
  'activity.event.publish': undefined, // 'Published the <strong>{{releaseTitle}}</strong> release'
  /* The text for the activity event when the release is scheduled */
  'activity.event.schedule': undefined, // 'Marked as scheduled'
  /** The text for the activity event when the release is unarchived */
  'activity.event.unarchive': undefined, // 'Unarchived the <strong>{{releaseTitle}}</strong> release'
  /** The text for the activity event when the release is unscheduled */
  'activity.event.unschedule': undefined, // 'Marked as unscheduled'
  /** The loading text for when releases are loading */
  'activity.panel.error': undefined, // 'An error occurred getting the release activity'
  /** The loading text for when releases are loading */
  'activity.panel.loading': undefined, // 'Loading release activity'
  /** The title for the activity panel shown in the releases detail screen */
  'activity.panel.title': undefined, // 'Activity'

  /** Label for the button to proceed with archiving a release */
  'archive-dialog.confirm-archive-button': undefined, // 'Yes, archive release'
  /** Description for the dialog confirming the archive of a release with more than one document */
  'archive-dialog.confirm-archive-description_other': undefined, // 'This will archive {{count}} document versions.'
  /** Header for the dialog confirming the archive of a release */
  'archive-dialog.confirm-archive-header': undefined, // 'Are you sure you want to archive this release?'
  /** Title for the dialog confirming the archive of a release */
  'archive-dialog.confirm-archive-title': undefined, // 'Are you sure you want to archive the <strong>\'{{title}}\'</strong> release?'

  /** Description for information card on a published or archived release to description retention effects */
  'archive-info.description': undefined, // 'It will be available for {{retentionDays}} days, then automatically removed on {{removalDate}}. <Link>Learn about retention</Link>.'
  /** Title for information card on a archived release */
  'archive-info.title': undefined, // 'This release is archived'

  /** Banner text showing count of active scheduled drafts requiring confirmation with multiple drafts */
  'banner.confirm-active-scheduled-drafts_other': undefined, // 'There are {{count}} Scheduled Drafts that require scheduling confirmation'
  /** Button text for confirming scheduling of active drafts */
  'banner.confirm-active-scheduled-drafts.button': undefined, // 'Resume scheduling'
  /** Button text when confirming schedules from paused mode */
  'banner.confirm-active-scheduled-drafts.button-paused': undefined, // 'Resume all schedules'
  /** Banner text shown when drafts mode is disabled but there are still scheduled drafts */
  'banner.drafts-mode-disabled': undefined, // 'Drafts mode has been disabled but there are still scheduled drafts to be published.'
  /** Banner text shown when navigating to a release that does not exist */
  'banner.release-not-found': undefined, // 'This release could not be found'
  /** Tooltip for the dismiss button in the release not found banner */
  'banner.release-not-found.dismiss': undefined, // 'Dismiss'
  /** Banner text shown when scheduled drafts feature is disabled but there are still scheduled drafts */
  'banner.scheduled-drafts-disabled': undefined, // 'Scheduled drafts has been disabled but there are still scheduled drafts to be published.'

  /** Title for changes to published documents */
  'changes-published-docs.title': undefined, // 'Changes to published documents'

  /** Dialog confirm button text for confirming all scheduled drafts */
  'confirm-active-scheduled-drafts-dialog.confirm-button': undefined, // 'Confirm Schedules'
  /** Dialog description for confirming active scheduled drafts */
  'confirm-active-scheduled-drafts-dialog.description': undefined, // 'Schedule all paused Scheduled Drafts for their intended publish dates'
  /** Dialog warning when some scheduled drafts have past dates */
  'confirm-active-scheduled-drafts-dialog.past-dates-warning': undefined, // 'Some of these Scheduled Drafts are scheduled for past dates. Confirming schedules will immediately publish those versions of documents.'
  /** Dialog title for confirming active scheduled drafts */
  'confirm-active-scheduled-drafts-dialog.title': undefined, // 'Resume Scheduled Drafts'

  /** Suffix for when a release is a copy of another release */
  'copy-suffix': undefined, // 'Copy'

  /** Confirm button text for overriding existing draft */
  'copy-to-draft-dialog.confirm-button': undefined, // 'Yes, override Draft'
  /** Description for dialog when copying version to draft that already exists */
  'copy-to-draft-dialog.description': undefined, // 'A draft version of this document already exists. Copy the current version to the draft and override the existing draft version.'
  /** Title for dialog when copying version to draft that already exists */
  'copy-to-draft-dialog.title': undefined, // 'Draft version already exists'

  /** Text for when a release / document was created */
  created: undefined, // 'Created <RelativeTime/>'

  /** Activity inspector button text */
  'dashboard.details.activity': undefined, // 'Activity'
  /** Text for the releases detail screen in the pin release button. */
  'dashboard.details.pin-release': undefined, // 'Pin release to studio'
  /** Text for the releases detail screen when a release was published ASAP */
  'dashboard.details.published-asap': undefined, // 'Published'
  /** Text for the releases detail screen when a release was published from scheduling */
  'dashboard.details.published-on': undefined, // 'Published on {{date}}'
  /** Text for the releases detail screen in the unpin release button. */
  'dashboard.details.unpin-release': undefined, // 'Unpin release from studio'

  /** Label for the button to proceed deleting a release */
  'delete-dialog.confirm-delete-button': undefined, // 'Yes, delete release'
  /** Description for the dialog confirming the deleting of a release with more than one document */
  'delete-dialog.confirm-delete-description_other': undefined, // 'This will delete {{count}} document versions.'
  /** Header for deleting a release dialog */
  'delete-dialog.confirm-delete.header': undefined, // 'Are you sure you want to delete this release?'

  /** Label when a release has been deleted by a different user */
  'deleted-release': undefined, // 'The \'<strong>{{title}}</strong>\' release has been deleted'

  /** Text for when there's no changes in a release diff */
  'diff.list-empty': undefined, // 'Changes list is empty, see document'
  /** Text for when there's no changes in a release diff */
  'diff.no-changes': undefined, // 'No changes'

  /** Description for discarding a draft of a document dialog */
  'discard-version-dialog.description-draft': undefined, // 'This will permanently remove all changes made to this document. This action cannot be undone.'
  /** Description for discarding a version of a document dialog */
  'discard-version-dialog.description-release': undefined, // 'This will permanently remove all changes made to this document within the \'<strong>{{releaseTitle}}</strong>\' release. This action cannot be undone.'
  /** Title for dialog for discarding a draft of a document */
  'discard-version-dialog.header-draft': undefined, // 'Discard draft?'
  /** Header for discarding a version from a release of a document dialog */
  'discard-version-dialog.header-release': undefined, // 'Remove document from the \'<strong>{{releaseTitle}}</strong>\' release?'
  /** Title for dialog for discarding a draft of a document */
  'discard-version-dialog.title-draft': undefined, // 'Discard draft'
  /** Title for dialog for discarding a version of a document */
  'discard-version-dialog.title-release': undefined, // 'Remove from release'

  /** Label for when a document in a release has multiple validation warnings */
  'document-validation.error_other': undefined, // '{{count}} validation errors'

  /** Label for the button to proceed with duplicating a release */
  'duplicate-dialog.confirm-duplicate-button': undefined, // 'Yes, duplicate release'
  /** Description for the dialog confirming the duplicate of a release with more than one document */
  'duplicate-dialog.confirm-duplicate-description_other': undefined, // 'This will duplicate the release and the {{count}} document versions.'
  /** Header for the dialog confirming the duplicate of a release */
  'duplicate-dialog.confirm-duplicate-header': undefined, // 'Are you sure you want to duplicate this release?'

  /** Title text displayed for technical error details */
  'error-details-title': undefined, // 'Error details'

  /** Title text when error during release update */
  'failed-edit-title': undefined, // 'Failed to save changes'

  /** Title text displayed for releases that failed to publish  */
  'failed-publish-title': undefined, // 'Failed to publish'

  /** Title text displayed for releases that failed to schedule  */
  'failed-schedule-title': undefined, // 'Failed to schedule'

  /** Filter tab label for all documents */
  'filter-tab.all': undefined, // 'All'
  /** Filter tab label for documents with validation errors */
  'filter-tab.errors': undefined, // 'Errors'

  /**The text that will be shown in the footer to indicate the time the release was archived */
  'footer.status.archived': undefined, // 'Archived'
  /**The text that will be shown in the footer to indicate the time the release was created */
  'footer.status.created': undefined, // 'Created'
  /**The text that will be shown in the footer to indicate the time the release was created */
  'footer.status.edited': undefined, // 'Edited'
  /**The text that will be shown in the footer to indicate the time the release was published */
  'footer.status.published': undefined, // 'Published'
  /**The text that will be shown in the footer to indicate the time the release was unarchived */
  'footer.status.unarchived': undefined, // 'Unarchived'

  /** Label text for the loading state whilst release is being loaded */
  'loading-release': undefined, // 'Loading release'

  /** Text for when documents of a release are loading */
  'loading-release-documents': undefined, // 'Loading documents'
  /** Description text for when loading documents on a release failed */
  'loading-release-documents.error.description': undefined, // 'We\'re unable to load the documents for this release. Please try again later.'
  /** Title text for when loading documents on a release failed */
  'loading-release-documents.error.title': undefined, // 'Something went wrong'

  /** Label for title of actions for "when releasing" */
  'menu.group.when-releasing': undefined, // 'When releasing'
  /** Label for the release menu */
  'menu.label': undefined, // 'Release menu'
  /** Tooltip for the release menu */
  'menu.tooltip': undefined, // 'Actions'

  /** Text for when no archived releases are found */
  'no-archived-release': undefined, // 'No archived releases'

  /** Tooltip text when there are no paused scheduled drafts */
  'no-paused-release': undefined, // 'No paused scheduled drafts'

  /** Text for when no releases are found */
  'no-releases': undefined, // 'No Releases'

  /** Text for when no scheduled drafts are found */
  'no-scheduled-drafts': undefined, // 'No Scheduled Drafts'

  /** Text for the button name for the release tool */
  'overview.action.documentation': undefined, // 'Documentation'
  /** Tooltip for the calendar button in the release overview */
  'overview.calendar.tooltip': undefined, // 'View calendar'
  /** Description for the release tool */
  'overview.description': undefined, // 'Releases are collections of document changes which can be managed, scheduled, and rolled back together.'
  /** Text for the placeholder in the search release input  */
  'overview.search-releases-placeholder': undefined, // 'Search releases'
  /** Title for the release tool */
  'overview.title': undefined, // 'Releases'

  /** Tooltip text for releases that have passed their intended publish date */
  'passed-intended-publish-date': undefined, // 'This release has passed its intended publish date'

  /** Tooltip text for scheduled drafts that have passed their intended publish date */
  'passed-intended-publish-date-draft': undefined, // 'This draft has passed its intended publish date'

  /** Description for when a user doesn't have publish or schedule releases */
  'permission-missing-description': undefined, // 'Your role currently limits what you can see in this release. You may not publish nor schedule this release.'

  /** Text for when a user doesn't have publish or schedule releases */
  'permission-missing-title': undefined, // 'Limited access'

  /** Tooltip label when the user doesn't have permission to archive release */
  'permissions.error.archive': undefined, // 'You do not have permission to archive this release'
  /** Tooltip label when the user doesn't have permission to delete release */
  'permissions.error.delete': undefined, // 'You do not have permission to delete this release'
  /** Tooltip label when the user doesn't have permission for discarding a version */
  'permissions.error.discard-version': undefined, // 'You do not have permission to discard this version'
  /** Tooltip label when the user doesn't have permission to duplicate release */
  'permissions.error.duplicate': undefined, // 'You do not have permission to duplicate this release'
  /** Tooltip label when the user doesn't have permission to unarchive release */
  'permissions.error.unarchive': undefined, // 'You do not have permission to unarchive this release'
  /** Tooltip label when the user doesn't have permission for unpublishing a document */
  'permissions.error.unpublish': undefined, // 'You do not have permission to unpublish this document'

  /** Tooltip text for when one user is editing a document in a release */
  'presence.tooltip.one': undefined, // '{{displayName}} is editing this document in the "{{releaseTitle}}" release right now'

  /** Tooltip text for publish release action when there are no documents */
  'publish-action.validation.no-documents': undefined, // 'There are no documents to publish'

  /** Description for the dialog confirming the publish of a release with multiple documents */
  'publish-dialog.confirm-publish-description_other': undefined, // 'The \'<strong>{{title}}</strong>\' release and its {{releaseDocumentsLength}} documents will be published.'
  /** Title for the dialog confirming the publish of a release */
  'publish-dialog.confirm-publish.title': undefined, // 'Are you sure you want to publish the release and all document versions?'
  /** Label for when documents in release have validation errors */
  'publish-dialog.validation.error': undefined, // 'Some documents have validation errors'
  /** Label for when documents are being validated */
  'publish-dialog.validation.loading': undefined, // 'Validating documents...'
  /** Label for the button when the user doesn't have permissions to publish a release */
  'publish-dialog.validation.no-permission': undefined, // 'You do not have permission to publish'

  /** Title for information card on a published release */
  'publish-info.title': undefined, // 'This release is published successfully.'

  /** Placeholder title for a release with no title */
  'release-placeholder.title': undefined, // 'Untitled'

  /** Description for the dialog confirming the revert of a release with multiple documents */
  'revert-dialog.confirm-revert-description_other': undefined, // 'This will revert {{releaseDocumentsLength}} document versions.'
  /** Checkbox label to confirm whether to create a staged release for revert or immediately revert */
  'revert-dialog.confirm-revert.stage-revert-checkbox-label': undefined, // 'Immediately revert the release'
  /** Title for the dialog confirming the revert of a release */
  'revert-dialog.confirm-revert.title': undefined, // 'Are you sure you want to revert the \'{{title}}\' release?'
  /** Warning card text for when immediately revert a release with history */
  'revert-dialog.confirm-revert.warning-card': undefined, // 'Changes were made to documents in this release after they were published. Reverting will overwrite these changes.'

  /** Description of a reverted release */
  'revert-release.description': undefined, // 'Revert changes to document versions in "{{title}}".'
  /** Title of a reverted release */
  'revert-release.title': undefined, // 'Reverting "{{title}}"'

  /** Description for the review changes button in release tool */
  'review.description': undefined, // 'Add documents to this release to review changes'
  /** Text for when a document is edited */
  'review.edited': undefined, // 'Edited <RelativeTime/>'

  /** Schedule release button tooltip when there are no documents to schedule */
  'schedule-action.validation.no-documents': undefined, // 'There are no documents to schedule'

  /** Schedule release button tooltip when the release is already scheduled */
  'schedule-button-tooltip.already-scheduled': undefined, // 'This release is already scheduled'
  /** Schedule release button tooltip when there are validation errors */
  'schedule-button-tooltip.validation.error': undefined, // 'Some documents have validation errors'
  /** Schedule release button tooltip when validation is loading */
  'schedule-button-tooltip.validation.loading': undefined, // 'Validating documents...'
  /** Schedule release button tooltip when user has no permissions to schedule */
  'schedule-button-tooltip.validation.no-permission': undefined, // 'You do not have permission to schedule'

  /** Title of unschedule release dialog */
  'schedule-button.tooltip': undefined, // 'Are you sure you want to unschedule the release?'

  /** Description for the confirm button for scheduling a release */
  'schedule-dialog.confirm-button': undefined, // 'Yes, schedule'
  /** Description for the dialog confirming the publish of a release with multiple documents */
  'schedule-dialog.confirm-description_other': undefined, // 'The <strong>{{title}}</strong> release and its {{count}} document versions will be scheduled.'
  /** Title for unschedule release dialog */
  'schedule-dialog.confirm-title': undefined, // 'Schedule the release'
  /** Description for warning that the published schedule time is in the past */
  'schedule-dialog.publish-date-in-past-warning': undefined, // 'Schedule for a future time and date.'
  /** Label for date picker when scheduling a release */
  'schedule-dialog.select-publish-date-label': undefined, // 'Schedule on'

  /** Confirm button text for the schedule unpublish dialog */
  'schedule-unpublish-dialog.confirm': undefined, // 'Schedule Unpublish'
  /** Description for the schedule unpublish dialog */
  'schedule-unpublish-dialog.description': undefined, // 'Select when this document should be unpublished.'
  /** Header for the schedule unpublish dialog */
  'schedule-unpublish-dialog.header': undefined, // 'Schedule draft for Unpublish'

  /** Placeholder for search of documents in a release */
  'search-documents-placeholder': undefined, // 'Search documents'

  /** Text for when the release has no errors found */
  'summary.all-documents-errors-found': undefined, // 'All documents validated, issues found'
  /** Text for when the release has validated all documents */
  'summary.all-documents-validated': undefined, // 'All documents validated, no issues found'
  /** Text for when the release was created */
  'summary.created': undefined, // 'Created <RelativeTime/>'
  /** Text for when the release is composed of multiple documents */
  'summary.document-count_other': undefined, // '{{count}} documents'
  /** Text for when the release has some errors found */
  'summary.errors-found': undefined, // 'In order to publish or schedule the release, please resolve the issues found in the documents'
  /** Text for when the release has no documents */
  'summary.no-documents': undefined, // 'No documents'
  /** Description for the empty state when a cardinality-one release has no documents */
  'summary.no-documents-cardinality-one.description': undefined, // 'This scheduled draft does not contain a document. It may have been removed.'
  /** Title for the empty state when a cardinality-one release has no documents */
  'summary.no-documents-cardinality-one.title': undefined, // 'No document in this release'
  /** Text for when the release has not published */
  'summary.not-published': undefined, // 'Not published'
  /** Text for when the release was published */
  'summary.published': undefined, // 'Published <RelativeTime/>'
  /** Text for when the release has validated documents */
  'summary.validated-documents': undefined, // '{{validatedCount}} of {{totalCount}} documents validated'
  /** Text for validation loading indicator */
  'summary.validating-documents': undefined, // 'Validating documents: {{validatedCount}} of {{totalCount}}'

  /** add action type that will be shown in the table*/
  'table-body.action.add': undefined, // 'Add'
  /** Change action type that will be shown in the table*/
  'table-body.action.change': undefined, // 'Change'
  /** Change action type that will be shown in the table*/
  'table-body.action.unpublish': undefined, // 'Unpublish'

  /** Header for the document table in the release tool - action */
  'table-header.action': undefined, // 'Action'
  /** Header for the document table in the release tool - Archived */
  'table-header.archivedAt': undefined, // 'Archived'
  /** Header for the document table in the release tool - contributors */
  'table-header.contributors': undefined, // 'Contributors'
  /** Header for the document table in the release tool - created by */
  'table-header.created-by': undefined, // 'Created by'
  /** Header for the document table in the release tool - document preview */
  'table-header.document': undefined, // 'Document'
  /** Header for the document table in the release tool - title */
  'table-header.documents': undefined, // 'Documents'
  /** Header for the document table in the release tool - edited */
  'table-header.edited': undefined, // 'Edited'
  /** Header for the paused scheduled drafts table - intended for */
  'table-header.intended-for': undefined, // 'Intended for'
  /** Header for the document table in the release tool - Published */
  'table-header.published-at': undefined, // 'Published'
  /** Header for the document table in the release tool - Published */
  'table-header.publishedAt': undefined, // 'Published'
  /** Header for the scheduled drafts document table in the release tool - published at */
  'table-header.scheduled-draft.published-at': undefined, // 'Published at'
  /** Header for the scheduled drafts document table in the release tool - scheduled for */
  'table-header.scheduled-for': undefined, // 'Scheduled for'
  /** Header for the document table in the release tool - time */
  'table-header.time': undefined, // 'Time'
  /** Header for the  document table in the release tool - release title */
  'table-header.title': undefined, // 'Release'
  /** Header for the document table in the release tool - type */
  'table-header.type': undefined, // 'Type'
  /** Header for the document table in the release tool - when */
  'table-header.when': undefined, // 'When'

  /** Text for the release time label for scheduled releases  which has not been scheduled yet*/
  'time.estimated': undefined, // 'Estimated'
  /** Text for the release time label for scheduled releases  which has been scheduled*/
  'time.scheduled': undefined, // 'Scheduled'

  /** Text for toast when release failed to archive */
  'toast.archive.error': undefined, // 'Failed to archive \'<strong>{{title}}</strong>\': {{error}}'
  /** Toast error message when bulk scheduling of active drafts fails */
  'toast.confirm-active-scheduled-drafts.error': undefined, // 'Failed to schedule drafts: {{error}}'
  /** Toast message after copying release ID */
  'toast.copy-release-id.success': undefined, // 'Release ID copied to clipboard'
  /** Toast message after copying release link */
  'toast.copy-release-link.success': undefined, // 'Release link copied to clipboard'
  /** Toast message after copying release title */
  'toast.copy-release-title.success': undefined, // 'Release title copied to clipboard'
  /** Description for toast when creating new version of document in release failed */
  'toast.create-version.error': undefined, // 'Failed to add document to release: {{error}}'
  /** Description for toast when release deletion failed */
  'toast.delete.error': undefined, // 'Failed to delete \'<strong>{{title}}</strong>\': {{error}}'
  /** Description for toast when release is successfully deleted */
  'toast.delete.success': undefined, // 'The \'<strong>{{title}}</strong>\' release was successfully deleted'
  /** Description for toast when release duplication failed */
  'toast.duplicate.error': undefined, // 'Failed to duplicate \'<strong>{{title}}</strong>\': {{error}}'
  /** Description for toast when release is successfully duplicated */
  'toast.duplicate.success': undefined, // 'The \'<strong>{{title}}</strong>\' release was duplicated. <Link/>'
  /** Link text for toast link to the duplicated release */
  'toast.duplicate.success-link': undefined, // 'View duplicated release'
  /** Text for toast when release has been reverted immediately */
  'toast.immediate-revert.success': undefined, // 'The \'{{title}}\' release was successfully reverted'
  /** Text for toast when release failed to publish */
  'toast.publish.error': undefined, // 'Failed to publish \'<strong>{{title}}</strong>\': {{error}}'
  /** Text for toast when release has reverted release successfully staged */
  'toast.revert-stage.success': undefined, // 'Revert release for \'{{title}}\' was successfully created. <Link/>'
  /** Link text for toast link to the generated revert release */
  'toast.revert-stage.success-link': undefined, // 'View revert release'
  /** Text for toast when release failed to revert */
  'toast.revert.error': undefined, // 'Failed to revert release: {{error}}'
  /** Text for toast when release failed to schedule */
  'toast.schedule.error': undefined, // 'Failed to schedule \'<strong>{{title}}</strong>\': {{error}}'
  /** Text for toast when release has been scheduled */
  'toast.schedule.success': undefined, // 'The \'<strong>{{title}}</strong>\' release was scheduled.'
  /** Text for toast when release failed to unarchive */
  'toast.unarchive.error': undefined, // 'Failed to unarchive \'<strong>{{title}}</strong>\': {{error}}'
  /** Text for toast when release failed to unschedule */
  'toast.unschedule.error': undefined, // 'Failed to unscheduled \'<strong>{{title}}</strong>\': {{error}}'

  /** Text for tooltip when a release has been scheduled */
  'type-picker.tooltip.scheduled': undefined, // 'The release is scheduled, unschedule it to change type'

  /** Text action in unpublish dialog to cancel */
  'unpublish-dialog.action.cancel': undefined, // 'Cancel'
  /** Text action in unpublish dialog to unpublish */
  'unpublish-dialog.action.unpublish': undefined, // 'Yes, unpublish when releasing'
  /** Description for unpublish dialog, explaining that all changes made to this document will be lost */
  'unpublish-dialog.description.lost-changes': undefined, // 'Any changes made to this document version will be lost.'
  /** Description for the unpublish dialog, explaining that it will create a draft if no draft exists at time of release */
  'unpublish-dialog.description.to-draft': undefined, // 'This will unpublish the document as part of the <Label>{{title}}</Label> release, and create a draft if no draft exists at the time of release.'
  /** Title for the dialog confirming the unpublish of a release */
  'unpublish-dialog.header': undefined, // 'Are you sure you want to unpublish this document when releasing?'

  /** Text for when a document is unpublished */
  'unpublish.already-unpublished': undefined, // 'This document is already unpublished.'
  /** Tooltip label for when a document is unpublished */
  'unpublish.no-published-version': undefined, // 'There is no published version of this document.'

  /** Description shown in unschedule relaease dialog */
  'unschedule-dialog.confirm-description': undefined, // 'The release will no longer be published on the scheduled date'
  /** Title for unschedule release dialog */
  'unschedule-dialog.confirm-title': undefined, // 'Are you sure you want to unschedule the release?'
})
