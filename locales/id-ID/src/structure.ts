import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Label for the "Copy Document URL" document action */
  'action.copy-document-url.label': undefined, // 'Copy Document URL'
  /** Tooltip when action button is disabled because the operation is not ready   */
  'action.delete.disabled.not-ready': undefined, // 'Operation not ready'
  /** Tooltip when action button is disabled because the document does not exist */
  'action.delete.disabled.nothing-to-delete': undefined, // 'This document doesn\'t yet exist or is already deleted'
  /** Label for the "Delete" document action button */
  'action.delete.label': undefined, // 'Delete'
  /** Label for the "Delete" document action while the document is being deleted */
  'action.delete.running.label': undefined, // 'Deleting…'
  /** Tooltip when action is disabled because the document is linked to Canvas */
  'action.disabled-by-canvas.tooltip': undefined, // 'Some document actions are disabled for documents linked to Canvas'
  /** Message prompting the user to confirm discarding changes */
  'action.discard-changes.confirm-dialog.confirm-discard-changes': undefined, // 'Are you sure you want to discard all changes since last published?'
  /** Tooltip when action is disabled because the document has no unpublished changes */
  'action.discard-changes.disabled.no-change': undefined, // 'This document has no unpublished changes'
  /** Tooltip when action is disabled because the document is not published */
  'action.discard-changes.disabled.not-published': undefined, // 'This document is not published'
  /** Tooltip when action button is disabled because the operation is not ready   */
  'action.discard-changes.disabled.not-ready': undefined, // 'Operation not ready'
  /** Label for the "Discard changes" document action */
  'action.discard-changes.label': undefined, // 'Discard changes'
  /** Tooltip when action is disabled because the operation is not ready   */
  'action.duplicate.disabled.not-ready': undefined, // 'Operation not ready'
  /** Tooltip when action is disabled because the document doesn't exist */
  'action.duplicate.disabled.nothing-to-duplicate': undefined, // 'This document doesn\'t yet exist so there\'s nothing to duplicate'
  /** Label for the "Duplicate" document action */
  'action.duplicate.label': undefined, // 'Duplicate'
  /** Label for the "Duplicate" document action while the document is being duplicated */
  'action.duplicate.running.label': undefined, // 'Duplicating…'
  /** Tooltip when publish button is disabled because the document is already published, and published time is unavailable.*/
  'action.publish.already-published.no-time-ago.tooltip': undefined, // 'Already published'
  /** Tooltip when publish button is disabled because the document is already published.*/
  'action.publish.already-published.tooltip': undefined, // 'Published {{timeSincePublished}}'
  /** Tooltip when action is disabled because the studio is not ready.*/
  'action.publish.disabled.not-ready': undefined, // 'Operation not ready'
  /** Label for action when there are pending changes.*/
  'action.publish.draft.label': undefined, // 'Publish'
  /** Label for the "Publish" document action */
  'action.publish.label': undefined, // 'Publish'
  /** Label for the "Publish" document action when the document has live edit enabled.*/
  'action.publish.live-edit.label': undefined, // 'Publish'
  /** Fallback tooltip for the "Publish" document action when publish is invoked for a document with live edit enabled.*/
  'action.publish.live-edit.publish-disabled': undefined, // 'Cannot publish since Live Edit is enabled for this document type'
  /** Tooltip for the "Publish" document action when the document has live edit enabled.*/
  'action.publish.live-edit.tooltip': undefined, // 'Live Edit is enabled for this content type and publishing happens automatically as you make changes'
  /** Tooltip when publish button is disabled because there are no changes.*/
  'action.publish.no-changes.tooltip': undefined, // 'No unpublished changes'
  /** Label for the "Publish" document action when there are no changes.*/
  'action.publish.published.label': undefined, // 'Published'
  /** Label for the "Publish" document action while publish is being executed.*/
  'action.publish.running.label': undefined, // 'Publishing…'
  /** Tooltip when the "Publish" document action is disabled due to validation issues */
  'action.publish.validation-issues.tooltip': undefined, // 'There are validation errors that need to be fixed before this document can be published'
  /** Tooltip when publish button is waiting for validation and async tasks to complete.*/
  'action.publish.waiting': undefined, // 'Waiting for tasks to finish before publishing'
  /** Message prompting the user to confirm that they want to restore to an earlier revision*/
  'action.restore.confirm.message': undefined, // 'Are you sure you want to restore this document?'
  /** Fallback tooltip for when user is looking at the initial revision */
  'action.restore.disabled.cannot-restore-initial': undefined, // 'You can\'t restore to the initial revision'
  /** Label for the "Restore" document action */
  'action.restore.label': undefined, // 'Revert to revision'
  /** Default tooltip for the action */
  'action.restore.tooltip': undefined, // 'Restore to this revision'
  /** Tooltip when action is disabled because the document is not already published */
  'action.unpublish.disabled.not-published': undefined, // 'This document is not published'
  /** Tooltip when action is disabled because the operation is not ready   */
  'action.unpublish.disabled.not-ready': undefined, // 'Operation not ready'
  /** Label for the "Unpublish" document action */
  'action.unpublish.label': undefined, // 'Unpublish'
  /** Fallback tooltip for the Unpublish document action when publish is invoked for a document with live edit enabled.*/
  'action.unpublish.live-edit.disabled': undefined, // 'This document has live edit enabled and cannot be unpublished'

  /** Description for the archived release banner, rendered when viewing the history of a version document from the publihed view */
  'banners.archived-release.description': undefined, // 'This document version belongs to the archived <VersionBadge>{{title}}</VersionBadge> release'
  /** The text for the restore button on the deleted document banner */
  'banners.deleted-document-banner.restore-button.text': undefined, // 'Restore most recent revision'
  /** The text content for the deleted document banner */
  'banners.deleted-document-banner.text': undefined, // 'This document has been deleted.'
  /** The text content for the deprecated document type banner */
  'banners.deprecated-document-type-banner.text': undefined, // 'This document type has been deprecated.'
  /** The text for publish action for discarding the version */
  'banners.live-edit-draft-banner.discard.tooltip': undefined, // 'Discard draft'
  /** The text for publish action for the draft banner */
  'banners.live-edit-draft-banner.publish.tooltip': undefined, // 'Publish to continue editing'
  /** The text content for the live edit document when it's a draft */
  'banners.live-edit-draft-banner.text': undefined, // 'The type <strong>{{schemaType}}</strong> has <code>liveEdit</code> enabled, but a draft version of this document exists. Publish or discard the draft in order to continue live editing it.'
  /** The text for the permission check banner if the user only has multiple roles, but they do not allow publishing this document */
  'banners.permission-check-banner.missing-permission_create_other': undefined, // 'Your roles <Roles/> do not have permission to publish this document.'
  /** The text for the permission check banner if the user only has multiple roles, but they do not allow editing this document */
  'banners.permission-check-banner.missing-permission_update_other': undefined, // 'Your roles <Roles/> do not have permission to edit this document.'
  /** The pending text for the request permission button that appears for viewer roles */
  'banners.permission-check-banner.request-permission-button.sent': undefined, // 'Editor request sent'
  /** The text for the request permission button that appears for viewer roles */
  'banners.permission-check-banner.request-permission-button.text': undefined, // 'Ask to edit'
  /** Description for the archived release banner, rendered when viewing the history of a version document from the published view */
  'banners.published-release.description': undefined, // 'You are viewing a read-only document that was published as part of <VersionBadge>{{title}}</VersionBadge>. It can\'t be edited'
  /** The text for the reload button */
  'banners.reference-changed-banner.reason-changed.reload-button.text': undefined, // 'Reload reference'
  /** The text for the reference change banner if the reason is that the reference has been changed */
  'banners.reference-changed-banner.reason-changed.text': undefined, // 'This reference has changed since you opened it.'
  /** The text for the close button */
  'banners.reference-changed-banner.reason-removed.close-button.text': undefined, // 'Close reference'
  /** The text for the reference change banner if the reason is that the reference has been deleted */
  'banners.reference-changed-banner.reason-removed.text': undefined, // 'This reference has been removed since you opened it.'
  /** The text that appears for the action button to add the current document to the global release */
  'banners.release.action.add-to-release': undefined, // 'Add to release'
  /** The text that appears for the action button to add the current document to the global release */
  'banners.release.action.open-to-edit': undefined, // 'Open release to edit'
  /** Toast description in case an error occurs when adding a document to a release  */
  'banners.release.error.description': undefined, // 'An error occurred when adding document to the release: {{message}}'
  /** Toast title in case an error occurs when adding a document to a release  */
  'banners.release.error.title': undefined, // 'Error adding document to release'
  /** The text for the banner that appears when a document only has versions but is in a draft or published pinned release */
  'banners.release.navigate-to-edit-description': undefined, // 'The document only exists in the'
  /** The text for the banner that appears when a document only has versions but is in a draft or published pinned release */
  'banners.release.navigate-to-edit-description-end_other': undefined, // 'releases'
  /** The text for the banner that appears when there are multiple versions but no drafts or published, more than one extra releases */
  'banners.release.navigate-to-edit-description-multiple_other': undefined, // 'This document is part of the <VersionBadge/> release and {{count}} more releases'
  /** The text for the banner that appears when a document only has one version but is in a draft or published pinned release */
  'banners.release.navigate-to-edit-description-single': undefined, // 'This document is part of the <VersionBadge/> release'
  /** The text for the banner that appears when a document is not in the current global release */
  'banners.release.not-in-release': undefined, // 'Not in the <VersionBadge>{{title}}</VersionBadge> release.'
  /** Description of toast that will appear in case of latency between the user adding a document to a release and the UI reflecting it */
  'banners.release.waiting.description': undefined, // 'Please hold tight while the document is added to the release. It should not take longer than a few seconds.'
  /** Title of toast that will appear in case of latency between the user adding a document to a release and the UI reflecting it */
  'banners.release.waiting.title': undefined, // 'Adding document to release…'
  /** The text content for the unpublished document banner when is part of a release */
  'banners.unpublished-release-banner.text': undefined, // 'This document will be unpublished as part of the <VersionBadge>{{title}}</VersionBadge> release'

  /** Browser/tab title when creating a new document of a given type */
  'browser-document-title.new-document': undefined, // 'New {{schemaType}}'
  /** Browser/tab title when editing a document where the title cannot be resolved from preview configuration */
  'browser-document-title.untitled-document': undefined, // 'Untitled'

  /** The action menu button aria-label */
  'buttons.action-menu-button.aria-label': undefined, // 'Open document actions'
  /** The action menu button tooltip */
  'buttons.action-menu-button.tooltip': undefined, // 'Document actions'
  /** The aria-label for the split pane button on the document panel header */
  'buttons.split-pane-button.aria-label': undefined, // 'Split pane right'
  /** The tool tip for the split pane button on the document panel header */
  'buttons.split-pane-button.tooltip': undefined, // 'Split pane right'
  /** The title for the close button on the split pane on the document panel header */
  'buttons.split-pane-close-button.title': undefined, // 'Close split pane'
  /** The title for the close group button on the split pane on the document panel header */
  'buttons.split-pane-close-group-button.title': undefined, // 'Close pane group'

  /** The text for the canvas linked banner action button */
  'canvas.banner.edit-in-canvas-action': undefined, // 'Edit in Canvas'
  /** The text for the canvas linked banner when the document is a draft */
  'canvas.banner.linked-text.draft': undefined, // 'This draft document is linked to Canvas'
  /** The text for the canvas linked banner when the document is a live document */
  'canvas.banner.linked-text.published': undefined, // 'This live document is linked to Canvas'
  /** The text for the canvas linked banner when the document is a version document */
  'canvas.banner.linked-text.version': undefined, // 'This version document is linked to Canvas'
  /** The text for the canvas linked banner popover button */
  'canvas.banner.popover-button-text': undefined, // 'Learn more'
  /** The description for the canvas linked banner popover */
  'canvas.banner.popover-description': undefined, // 'Canvas lets you author in a free-form editor that automatically maps back to the Studio as structured content - as you type.'
  /** The heading for the canvas linked banner popover */
  'canvas.banner.popover-heading': undefined, // 'Idea first authoring'

  /** The label used in the changes inspector for the from selector */
  'changes.from.label': undefined, // 'From'
  /* The label for the history tab in the changes inspector*/
  'changes.tab.history': undefined, // 'History'
  /* The label for the review tab in the changes inspector*/
  'changes.tab.review-changes': undefined, // 'Review changes'
  /** The label used in the changes inspector for the to selector */
  'changes.to.label': undefined, // 'To'

  /** The error message shown when the specified document comparison mode is not supported */
  'compare-version.error.invalidModeParam': undefined, // '"{{input}}" is not a supported document comparison mode.'
  /** The error message shown when the next document for comparison could not be extracted from the URL */
  'compare-version.error.invalidNextDocumentParam': undefined, // 'The next document parameter is invalid.'
  /** The error message shown when the document comparison URL could not be parsed */
  'compare-version.error.invalidParams.title': undefined, // 'Unable to compare documents'
  /** The error message shown when the previous document for comparison could not be extracted from the URL */
  'compare-version.error.invalidPreviousDocumentParam': undefined, // 'The previous document parameter is invalid.'

  /** The text for the tooltip when the "Compare versions" action for a document is disabled */
  'compare-versions.menu-item.disabled-reason': undefined, // 'There are no other versions of this document to compare.'
  /** The text for the "Compare versions" action for a document */
  'compare-versions.menu-item.title': undefined, // 'Compare versions'
  /** The string used to label draft documents */
  'compare-versions.status.draft': undefined, // 'Draft'
  /** The string used to label published documents */
  'compare-versions.status.published': undefined, // 'Published'
  /** The title used when comparing versions of a document */
  'compare-versions.title': undefined, // 'Compare versions'

  /** The text in the "Cancel" button in the confirm delete dialog that cancels the action and closes the dialog */
  'confirm-delete-dialog.cancel-button.text': undefined, // 'Cancel'
  /** Used in `confirm-delete-dialog.cdr-summary.title` */
  'confirm-delete-dialog.cdr-summary.document-count_other': undefined, // '{{count}} documents'
  /** The text that appears in the subtitle `<summary>` that lists the datasets below the title */
  'confirm-delete-dialog.cdr-summary.subtitle_other': undefined, // 'Datasets: {{datasets}}'
  /** The text that appears in the subtitle `<summary>` that lists the datasets below the title */
  'confirm-delete-dialog.cdr-summary.subtitle_unavailable_other': undefined, // 'Unavailable datasets'
  /** The text that appears in the title `<summary>` that includes the list of CDRs (plural) */
  'confirm-delete-dialog.cdr-summary.title_other': undefined, // '{{documentCount}} in {{count}} datasets'
  /** Appears when hovering over the copy button to copy */
  'confirm-delete-dialog.cdr-table.copy-id-button.tooltip': undefined, // 'Copy ID to clipboard'
  /** The header for the dataset column in the list of cross-dataset references found */
  'confirm-delete-dialog.cdr-table.dataset.label': undefined, // 'Dataset'
  /** The header for the document ID column in the list of cross-dataset references found */
  'confirm-delete-dialog.cdr-table.document-id.label': undefined, // 'Document ID'
  /** The toast title when the copy button has been clicked but copying failed */
  'confirm-delete-dialog.cdr-table.id-copied-toast.title-failed': undefined, // 'Failed to copy document ID'
  /** The header for the project ID column in the list of cross-dataset references found */
  'confirm-delete-dialog.cdr-table.project-id.label': undefined, // 'Project ID'
  /** The text in the "Delete anyway" button in the confirm delete dialog that confirms the action */
  'confirm-delete-dialog.confirm-anyway-button.text_delete': undefined, // 'Delete anyway'
  /** The text in the "Unpublish anyway" button in the confirm delete dialog that confirms the action */
  'confirm-delete-dialog.confirm-anyway-button.text_unpublish': undefined, // 'Unpublish anyway'
  /** The text in the "Delete now" button in the confirm delete dialog that confirms the action */
  'confirm-delete-dialog.confirm-button.text_delete': undefined, // 'Delete now'
  /** The text in the "Unpublish now" button in the confirm delete dialog that confirms the action */
  'confirm-delete-dialog.confirm-button.text_unpublish': undefined, // 'Unpublish now'
  /** If no referring documents are found, this text appears above the cancel and confirmation buttons */
  'confirm-delete-dialog.confirmation.text_delete': undefined, // 'Are you sure you want to delete “<DocumentTitle/>”?'
  /** If no referring documents are found, this text appears above the cancel and confirmation buttons */
  'confirm-delete-dialog.confirmation.text_unpublish': undefined, // 'Are you sure you want to unpublish “<DocumentTitle/>”?'
  /** The text body of the error dialog. */
  'confirm-delete-dialog.error.message.text': undefined, // 'An error occurred while loading referencing documents.'
  /** The text in the retry button of the confirm delete dialog if an error occurred. */
  'confirm-delete-dialog.error.retry-button.text': undefined, // 'Retry'
  /** The header of the confirm delete dialog if an error occurred while the confirm delete dialog was open. */
  'confirm-delete-dialog.error.title.text': undefined, // 'Error'
  /** The header of the confirm delete dialog */
  'confirm-delete-dialog.header.text_delete': undefined, // 'Delete document?'
  /** The header of the confirm delete dialog */
  'confirm-delete-dialog.header.text_unpublish': undefined, // 'Unpublish document?'
  /** The text that appears while the referring documents are queried */
  'confirm-delete-dialog.loading.text': undefined, // 'Looking for referring documents…'
  /** Shown if there are references to other documents but the user does not have the permission to see the relevant document IDs */
  'confirm-delete-dialog.other-reference-count.title_other': undefined, // '{{count}} other references not shown'
  /** Text in the tooltip of this component if hovering over the info icon */
  'confirm-delete-dialog.other-reference-count.tooltip': undefined, // 'We can\'t display metadata for these references due to a missing access token for the related datasets.'
  /** Appears when unable to render a document preview in the referring document list */
  'confirm-delete-dialog.preview-item.preview-unavailable.subtitle': undefined, // 'ID: {{documentId}}'
  /** Appears when unable to render a document preview in the referring document list */
  'confirm-delete-dialog.preview-item.preview-unavailable.title': undefined, // 'Preview unavailable'
  /** Warns the user of affects to other documents if the action is confirmed (delete) */
  'confirm-delete-dialog.referential-integrity-disclaimer.text_delete': undefined, // 'If you delete this document, documents that refer to it will no longer be able to access it.'
  /** Warns the user of affects to other documents if the action is confirmed (unpublish) */
  'confirm-delete-dialog.referential-integrity-disclaimer.text_unpublish': undefined, // 'If you unpublish this document, documents that refer to it will no longer be able to access it.'
  /** Tells the user the count of how many other referring documents there are before listing them. (plural) */
  'confirm-delete-dialog.referring-document-count.text_other': undefined, // '{{count}} documents refer to “<DocumentTitle/>”'
  /** Describes the list of documents that refer to the one trying to be deleted (delete) */
  'confirm-delete-dialog.referring-documents-descriptor.text_delete': undefined, // 'You may not be able to delete “<DocumentTitle/>” because the following documents refer to it:'
  /** Describes the list of documents that refer to the one trying to be deleted (unpublish) */
  'confirm-delete-dialog.referring-documents-descriptor.text_unpublish': undefined, // 'You may not be able to unpublish “<DocumentTitle/>” because the following documents refer to it:'

  /** The text for the cancel button in the confirm dialog used in document action shortcuts if none is provided */
  'confirm-dialog.cancel-button.fallback-text': undefined, // 'Cancel'
  /** The text for the confirm button in the confirm dialog used in document action shortcuts if none is provided */
  'confirm-dialog.confirm-button.fallback-text': undefined, // 'Confirm'

  /** For the default structure definition, the title for the "Content" pane */
  'default-definition.content-title': undefined, // 'Content'

  /** The text shown if there was an error while getting the document's title via a preview value */
  'doc-title.error.text': undefined, // 'Error: {{errorMessage}}'
  /** The text shown if the preview value for a document is non-existent or empty */
  'doc-title.fallback.text': undefined, // 'Untitled'
  /** The text shown if a document's title via a preview value cannot be determined due to an unknown schema type */
  'doc-title.unknown-schema-type.text': undefined, // 'Unknown schema type: {{schemaType}}'

  /** Tooltip text shown for the close button of the document inspector */
  'document-inspector.close-button.tooltip': undefined, // 'Close'
  /** The title shown in the dialog header, when inspecting a valid document */
  'document-inspector.dialog.title': undefined, // 'Inspecting <DocumentTitle/>'
  /** The title shown in the dialog header, when the document being inspected is not created yet/has no value */
  'document-inspector.dialog.title-no-value': undefined, // 'No value'
  /** Title shown for menu item that opens the "Inspect" dialog */
  'document-inspector.menu-item.title': undefined, // 'Inspect'
  /** the placeholder text for the search input on the inspect dialog */
  'document-inspector.search.placeholder': undefined, // 'Search'
  /** The "parsed" view mode, meaning the JSON is searchable, collapsible etc */
  'document-inspector.view-mode.parsed': undefined, // 'Parsed'
  /** The "raw" view mode, meaning the JSON is presented syntax-highlighted, but with no other features - optimal for copying */
  'document-inspector.view-mode.raw-json': undefined, // 'Raw JSON'

  /** The text for when a form is hidden */
  'document-view.form-view.form-hidden': undefined, // 'This form is hidden'
  /** Fallback title shown when a form title is not provided */
  'document-view.form-view.form-title-fallback': undefined, // 'Untitled'
  /** The text for when the form view is loading a document */
  'document-view.form-view.loading': undefined, // 'Loading document…'
  /** The description of the sync lock toast on the form view */
  'document-view.form-view.sync-lock-toast.description': undefined, // 'Please hold tight while the document is synced. This usually happens right after the document has been published, and it should not take more than a few seconds'
  /** The title of the sync lock toast on the form view */
  'document-view.form-view.sync-lock-toast.title': undefined, // 'Syncing document…'

  /** The description for the document favorite action */
  'document.favorites.add-to-favorites': undefined, // 'Add to favorites'
  /** The description for the document unfavorite action */
  'document.favorites.remove-from-favorites': undefined, // 'Remove from favorites'

  /**The title for the menu items that will be shown when expanding a publish release event to inspect the document */
  'events.inspect.release': undefined, // 'Inspect <VersionBadge>{{releaseTitle}}</VersionBadge> document'
  /**The title for the menu items that will be shown when expanding a publish draft event to inspect the draft document*/
  'events.open.draft': undefined, // 'Open <VersionBadge>draft</VersionBadge> document'
  /**The title for the menu items that will be shown when expanding a publish release event to inspect the release*/
  'events.open.release': undefined, // 'Open <VersionBadge>{{releaseTitle}}</VersionBadge> release'

  /** The loading messaging for when the tooltip is still loading permission info */
  'insufficient-permissions-message-tooltip.loading-text': undefined, // 'Loading…'

  /** --- Menu items --- */
  /** The menu item group title to use for the Action menu items */
  'menu-item-groups.actions-group': undefined, // 'Actions'
  /** The menu item group title to use for the Layout menu items */
  'menu-item-groups.layout-group': undefined, // 'Layout'
  /** The menu item group title to use for the Sort menu items */
  'menu-item-groups.sorting-group': undefined, // 'Sort'

  /** The menu item title to use the compact view */
  'menu-items.layout.compact-view': undefined, // 'Compact view'
  /** The menu item title to use the detailed view */
  'menu-items.layout.detailed-view': undefined, // 'Detailed view'
  /** The menu item title to Sort by Created */
  'menu-items.sort-by.created': undefined, // 'Sort by Created'
  /** The menu item title to Sort by Last Edited */
  'menu-items.sort-by.last-edited': undefined, // 'Sort by Last Edited'

  /** The link text of the no document type screen that appears directly below the subtitle */
  'no-document-types-screen.link-text': undefined, // 'Learn how to add a document type →'
  /** The subtitle of the no document type screen that appears directly below the title */
  'no-document-types-screen.subtitle': undefined, // 'Please define at least one document type in your schema.'
  /** The title of the no document type screen */
  'no-document-types-screen.title': undefined, // 'No document types'

  /** Text shown on back button visible on smaller breakpoints */
  'pane-header.back-button.text': undefined, // 'Back'
  /** tooltip text (via `title` attribute) for the menu button */
  'pane-header.context-menu-button.tooltip': undefined, // 'Show menu'
  /** Appears in a document list pane header if there are more than one option for create. This is the label for that menu */
  'pane-header.create-menu.label': undefined, // 'Create'
  /** Tooltip displayed on the create new button in document lists */
  'pane-header.create-new-button.tooltip': undefined, // 'Create new document'
  /** The `aria-label` for the disabled button in the pane header if create permissions are granted */
  'pane-header.disabled-created-button.aria-label': undefined, // 'Insufficient permissions'

  /** The text shown in the tooltip of pane item previews of documents if there are unpublished edits */
  'pane-item.draft-status.has-draft.tooltip': undefined, // 'Edited <RelativeTime/>'
  /** The text shown in the tooltip of pane item previews of documents if there are no unpublished edits */
  'pane-item.draft-status.no-draft.tooltip': undefined, // 'No unpublished edits'
  /** The subtitle tor pane item previews if there isn't a matching schema type found */
  'pane-item.missing-schema-type.subtitle': undefined, // 'Document: <Code>{{documentId}}</Code>'
  /** The title tor pane item previews if there isn't a matching schema type found */
  'pane-item.missing-schema-type.title': undefined, // 'No schema found for type <Code>{{documentType}}</Code>'
  /** The text shown in the tooltip of pane item previews of documents if there are unpublished edits */
  'pane-item.published-status.has-published.tooltip': undefined, // 'Published <RelativeTime/>'
  /** The text shown in the tooltip of pane item previews of documents if there are no unpublished edits */
  'pane-item.published-status.no-published.tooltip': undefined, // 'No unpublished edits'

  /** The text used in the document header title if there is an error */
  'panes.document-header-title.error.text': undefined, // 'Error: {{error}}'
  /** The text used in the document header title if creating a new item */
  'panes.document-header-title.new.text': undefined, // 'New {{schemaType}}'
  /** The text used in the document header title if no other title can be determined */
  'panes.document-header-title.untitled.text': undefined, // 'Untitled'
  /** The error text on the document list pane */
  'panes.document-list-pane.error.text': undefined, // 'Error: <Code>{{error}}</Code>'
  /** The error title on the document list pane */
  'panes.document-list-pane.error.title': undefined, // 'Could not fetch list items'
  /** The text of the document list pane if more than a maximum number of documents are returned */
  'panes.document-list-pane.max-items.text': undefined, // 'Displaying a maximum of {{limit}} documents'
  /** The text of the document list pane if no documents are found for a specified type */
  'panes.document-list-pane.no-documents-of-type.text': undefined, // 'No documents of this type'
  /** The text of the document list pane if no documents are found */
  'panes.document-list-pane.no-documents.text': undefined, // 'No results found'
  /** The text of the document list pane if no documents are found matching specified criteria */
  'panes.document-list-pane.no-matching-documents.text': undefined, // 'No matching documents'
  /** The aria-label for the search input on the document list pane */
  'panes.document-list-pane.search-input.aria-label': undefined, // 'Search list'
  /** The search input for the search input on the document list pane */
  'panes.document-list-pane.search-input.placeholder': undefined, // 'Search list'
  /** The summary title when displaying an error for a document operation result */
  'panes.document-operation-results.error.summary.title': undefined, // 'Details'
  /** The text when a generic operation failed (fallback, generally not shown)  */
  'panes.document-operation-results.operation-error': undefined, // 'An error occurred during {{context}}'
  /** The text when a delete operation failed  */
  'panes.document-operation-results.operation-error_delete': undefined, // 'An error occurred while attempting to delete this document. This usually means that there are other documents that refers to it.'
  /** The text when an unpublish operation failed  */
  'panes.document-operation-results.operation-error_unpublish': undefined, // 'An error occurred while attempting to unpublish this document. This usually means that there are other documents that refers to it.'
  /** The text when a generic operation succeeded (fallback, generally not shown)  */
  'panes.document-operation-results.operation-success': undefined, // 'Successfully performed {{op}} on document'
  /** The text when copy URL operation succeeded  */
  'panes.document-operation-results.operation-success_copy-url': undefined, // 'Document URL copied to clipboard'
  /**  */
  'panes.document-operation-results.operation-success_createVersion': undefined, // '<Strong>{{title}}</Strong> was added to the release'
  /** The text when a delete operation succeeded  */
  'panes.document-operation-results.operation-success_delete': undefined, // 'The document was successfully deleted'
  /** The text when a discard changes operation succeeded  */
  'panes.document-operation-results.operation-success_discardChanges': undefined, // 'All changes since last publish has now been discarded. The discarded draft can still be recovered from history'
  /** The text when a duplicate operation succeeded  */
  'panes.document-operation-results.operation-success_duplicate': undefined, // 'The document was successfully duplicated'
  /** The text when a publish operation succeeded  */
  'panes.document-operation-results.operation-success_publish': undefined, // '<Strong>{{title}}</Strong> was published'
  /** The text when a restore operation succeeded  */
  'panes.document-operation-results.operation-success_restore': undefined, // '<Strong>{{title}}</Strong> was restored'
  /** The text when an unpublish operation succeeded  */
  'panes.document-operation-results.operation-success_unpublish': undefined, // '<Strong>{{title}}</Strong> was unpublished. A draft has been created from the latest published revision.'
  /** The document title shown when document title is "undefined" in operation message */
  'panes.document-operation-results.operation-undefined-title': undefined, // 'Untitled'
  /** The loading message for the document not found pane */
  'panes.document-pane.document-not-found.loading': undefined, // 'Loading document…'
  /** The text of the document not found pane if the schema is known */
  'panes.document-pane.document-not-found.text': undefined, // 'The document type is not defined, and a document with the <Code>{{id}}</Code> identifier could not be found.'
  /** The title of the document not found pane if the schema is known */
  'panes.document-pane.document-not-found.title': undefined, // 'The document was not found'
  /** The text of the document not found pane if the schema is not found */
  'panes.document-pane.document-unknown-type.text': undefined, // 'This document has the schema type <Code>{{documentType}}</Code>, which is not defined as a type in the local content studio schema.'
  /** The title of the document not found pane if the schema is not found or unknown */
  'panes.document-pane.document-unknown-type.title': undefined, // 'Unknown document type: <Code>{{documentType}}</Code>'
  /** The title of the document not found pane if the schema is unknown */
  'panes.document-pane.document-unknown-type.without-schema.text': undefined, // 'This document does not exist, and no schema type was specified for it.'
  /** Default message shown while resolving the structure definition for an asynchronous node */
  'panes.resolving.default-message': undefined, // 'Loading…'
  /** Message shown while resolving the structure definition for an asynchronous node and it is taking a while (more than 5s) */
  'panes.resolving.slow-resolve-message': undefined, // 'Still loading…'
  /** The text to display when type is missing */
  'panes.unknown-pane-type.missing-type.text': undefined, // 'Structure item is missing required <Code>type</Code> property.'
  /** The title of the unknown pane */
  'panes.unknown-pane-type.title': undefined, // 'Unknown pane type'
  /** The text to display when type is unknown */
  'panes.unknown-pane-type.unknown-type.text': undefined, // 'Structure item of type <Code>{{type}}</Code> is not a known entity.'

  /** The text for the "Open preview" action for a document */
  'production-preview.menu-item.title': undefined, // 'Open preview'

  /** The text for the confirm button in the request permission dialog used in the permissions banner */
  'request-permission-dialog.confirm-button.text': undefined, // 'Send request'
  /** The description text for the request permission dialog used in the permissions banner */
  'request-permission-dialog.description.text': undefined, // 'Your request will be sent to the project administrator(s). If you\'d like, you can also include a note'
  /** The header/title for the request permission dialog used in the permissions banner */
  'request-permission-dialog.header.text': undefined, // 'Ask for edit access'
  /** The text describing the note input for the request permission dialog used in the permissions banner */
  'request-permission-dialog.note-input.description.text': undefined, // 'If you\'d like, you can add a note'
  /** The placeholder for the note input in the request permission dialog used in the permissions banner */
  'request-permission-dialog.note-input.placeholder.text': undefined, // 'Add note...'
  /** The error/warning text in the request permission dialog when the user's request has been declined */
  'request-permission-dialog.warning.denied.text': undefined, // 'Your request to access this project has been declined.'
  /** The error/warning text in the request permission dialog when the user's request has been denied due to too many outstanding requests */
  'request-permission-dialog.warning.limit-reached.text': undefined, // 'You\'ve reached the limit for role requests across all projects. Please wait before submitting more requests or contact an administrator for assistance.'

  /** Label for button when status is saved */
  'status-bar.document-status-pulse.status.saved.text': undefined, // 'Saved'
  /** Label for button when status is syncing */
  'status-bar.document-status-pulse.status.syncing.text': undefined, // 'Saving...'
  /** Accessibility label indicating when the document was last published, in relative time, eg "3 weeks ago" */
  'status-bar.publish-status-button.last-published-time.aria-label': undefined, // 'Last published {{relativeTime}}'
  /** Text for tooltip showing explanation of timestamp/relative time, eg "Last published <RelativeTime/>" */
  'status-bar.publish-status-button.last-published-time.tooltip': undefined, // 'Last published <RelativeTime/>'
  /** Accessibility label indicating when the document was last updated, in relative time, eg "2 hours ago" */
  'status-bar.publish-status-button.last-updated-time.aria-label': undefined, // 'Last updated {{relativeTime}}'
  /** Text for tooltip showing explanation of timestamp/relative time, eg "Last updated <RelativeTime/>" */
  'status-bar.publish-status-button.last-updated-time.tooltip': undefined, // 'Last updated <RelativeTime/>'
  /** Aria label for the button */
  'status-bar.review-changes-button.aria-label': undefined, // 'Review changes'
  /** Label for button when status is saved */
  'status-bar.review-changes-button.status.saved.text': undefined, // 'Saved!'
  /** Label for button when status is syncing */
  'status-bar.review-changes-button.status.syncing.text': undefined, // 'Saving...'
  /** Text for the secondary text for tooltip for the button */
  'status-bar.review-changes-button.tooltip.changes-saved': undefined, // 'Changes saved'
  /** Primary text for tooltip for the button */
  'status-bar.review-changes-button.tooltip.text': undefined, // 'Review changes'

  /** The text that appears in side the documentation link */
  'structure-error.docs-link.text': undefined, // 'View documentation'
  /** Labels the error message or error stack of the structure error screen */
  'structure-error.error.label': undefined, // 'Error'
  /** The header that appears at the top of the error screen */
  'structure-error.header.text': undefined, // 'Encountered an error while reading structure'
  /** The text in the reload button to retry rendering the structure */
  'structure-error.reload-button.text': undefined, // 'Reload'
  /** Labels the structure path of the structure error screen */
  'structure-error.structure-path.label': undefined, // 'Structure path'

  /** The aria label for the menu button in the timeline item */
  'timeline-item.menu-button.aria-label': undefined, // 'Open action menu'
  /** The text for the tooltip in menu button the timeline item */
  'timeline-item.menu-button.tooltip': undefined, // 'Actions'
  /** The text for the collapse action in the timeline item menu */
  'timeline-item.menu.action-collapse': undefined, // 'Collapse'
  /** The text for the expand action in the timeline item menu */
  'timeline-item.menu.action-expand': undefined, // 'Expand'
})
