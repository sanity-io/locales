import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** --- PUBLISH ACTION --- */
  /** Tooltip when action is disabled because the studio is not ready.*/
  'action.publish.disabled.not-ready': undefined, // 'Operation not ready'
  /** Label for action when there are pending changes.*/
  'action.publish.draft.label': undefined, // 'Publish'
  /** Label for the "Publish" document action while publish is being executed.*/
  'action.publish.running.label': undefined, // 'Publishing…'
  /** Label for the "Publish" document action when there are no changes.*/
  'action.publish.published.label': undefined, // 'Published'
  /** Label for the "Publish" document action when the document has live edit enabled.*/
  'action.publish.live-edit.label': undefined, // 'Publish'
  /** Tooltip for the "Publish" document action when the document has live edit enabled.*/
  'action.publish.live-edit.tooltip': undefined, // 'Live Edit is enabled for this content type and publishing happens automatically as you make changes'
  /** Fallback tooltip for the "Publish" document action when publish is invoked for a document with live edit enabled.*/
  'action.publish.live-edit.publish-disabled': undefined, // 'Cannot publish since Live Edit is enabled for this document type'
  /** Tooltip when the "Publish" document action is disabled due to validation issues */
  'action.publish.validation-issues.tooltip': undefined, // 'There are validation errors that need to be fixed before this document can be published'
  /** Tooltip when publish button is disabled because the document is already published.*/
  'action.publish.already-published.tooltip': undefined, // 'Published {{timeSincePublished}} ago'
  /** Tooltip when publish button is disabled because the document is already published, and published time is unavailable.*/
  'action.publish.already-published.no-time-ago.tooltip': undefined, // 'Already published'
  /** Tooltip when publish button is disabled because there are no changes.*/
  'action.publish.no-changes.tooltip': undefined, // 'No unpublished changes'
  /** Tooltip when publish button is waiting for validation and async tasks to complete.*/
  'action.publish.waiting': undefined, // 'Waiting for tasks to finish before publishing'

  /** --- DELETE ACTION --- **/
  /** Tooltip when action button is disabled because the operation is not ready   */
  'action.delete.disabled.not-ready': undefined, // 'Operation not ready'
  /** Tooltip when action button is disabled because the document does not exist */
  'action.delete.disabled.nothing-to-delete': undefined, // 'This document doesn\'t yet exist or is already deleted'
  /** Label for the "Delete" document action button */
  'action.delete.label': undefined, // 'Delete'
  /** Label for the "Delete" document action while the document is being deleted */
  'action.delete.running.label': undefined, // 'Deleting…'

  /** --- DISCARD CHANGES ACTION --- **/
  /** Tooltip when action button is disabled because the operation is not ready   */
  'action.discard-changes.disabled.not-ready': undefined, // 'Operation not ready'
  /** Label for the "Discard changes" document action */
  'action.discard-changes.label': undefined, // 'Discard changes'
  /** Tooltip when action is disabled because the document has no unpublished changes */
  'action.discard-changes.disabled.no-change': undefined, // 'This document has no unpublished changes'
  /** Tooltip when action is disabled because the document is not published */
  'action.discard-changes.disabled.not-published': undefined, // 'This document is not published'
  /** Message prompting the user to confirm discarding changes */
  'action.discard-changes.confirm-dialog.confirm-discard-changes': undefined, // 'Are you sure you want to discard all changes since last published?'

  /** --- DUPLICATE ACTION --- */
  /** Tooltip when action is disabled because the operation is not ready   */
  'action.duplicate.disabled.not-ready': undefined, // 'Operation not ready'
  /** Tooltip when action is disabled because the document doesn't exist */
  'action.duplicate.disabled.nothing-to-duplicate': undefined, // 'This document doesn\'t yet exist so there\'s nothing to duplicate'
  /** Label for the "Duplicate" document action */
  'action.duplicate.label': undefined, // 'Duplicate'
  /** Label for the "Duplicate" document action while the document is being duplicated */
  'action.duplicate.running.label': undefined, // 'Duplicating…'

  /** --- UNPUBLISH ACTION --- */
  /** Tooltip when action is disabled because the operation is not ready   */
  'action.unpublish.disabled.not-ready': undefined, // 'Operation not ready'
  /** Label for the "Unpublish" document action */
  'action.unpublish.label': undefined, // 'Unpublish'
  /** Tooltip when action is disabled because the document is not already published */
  'action.unpublish.disabled.not-published': undefined, // 'This document is not published'
  /** Fallback tooltip for the Unpublish document action when publish is invoked for a document with live edit enabled.*/
  'action.unpublish.live-edit.disabled': undefined, // 'This document has live edit enabled and cannot be unpublished'

  /** --- RESTORE ACTION --- */
  /** Label for the "Restore" document action */
  'action.restore.label': undefined, // 'Restore'
  /** Fallback tooltip for when user is looking at the initial version */
  'action.restore.disabled.cannot-restore-initial': undefined, // 'You can\'t restore to the initial version'
  /** Default tooltip for the action */
  'action.restore.tooltip': undefined, // 'Restore to this version'
  /** Message prompting the user to confirm that they want to restore to an earlier version*/
  'action.restore.confirm-dialog.confirm-discard-changes': undefined, // 'Are you sure you want to restore this document?'

  /** --- PUBLISH STATUS BUTTON --- */
  /** Accessibility label indicating when the document was last updated, in relative time, eg "2 hours ago" */
  'status-bar.publish-status-button.last-updated-time.aria-label': undefined, // 'Last updated {{relativeTime}}'
  /** Accessibility label indicating when the document was last published, in relative time, eg "3 weeks ago" */
  'status-bar.publish-status-button.last-published-time.aria-label': undefined, // 'Last published {{relativeTime}}'
  /** Text for tooltip showing explanation of timestamp/relative time, eg "Last updated <RelativeTime/>" */
  'status-bar.publish-status-button.last-updated-time.tooltip': undefined, // 'Last updated <RelativeTime/>'
  /** Text for tooltip showing explanation of timestamp/relative time, eg "Last published <RelativeTime/>" */
  'status-bar.publish-status-button.last-published-time.tooltip': undefined, // 'Last published <RelativeTime/>'

  /** --- REVIEW CHANGES BUTTON --- */
  /** Label for button when status is syncing */
  'status-bar.review-changes-button.status.syncing.text': undefined, // 'Saving...'
  /** Label for button when status is saved */
  'status-bar.review-changes-button.status.saved.text': undefined, // 'Saved!'
  /** Primary text for tooltip for the button */
  'status-bar.review-changes-button.tooltip.text': undefined, // 'Review changes'
  /** Text for the secondary text for tooltip for the button */
  'status-bar.review-changes-button.tooltip.changes-saved': undefined, // 'Changes saved'
  /** Aria label for the button */
  'status-bar.review-changes-button.aria-label': undefined, // 'Review changes'

  /** --- DOCUMENT JSON INSPECTOR --- */
  /** Title shown for menu item that opens the "Inspect" dialog */
  'document-inspector.menu-item.title': undefined, // 'Inspect'
  /** The title shown in the dialog header, when inspecting a valid document */
  'document-inspector.dialog.title': undefined, // 'Inspecting <DocumentTitle/>'
  /** The title shown in the dialog header, when the document being inspected is not created yet/has no value */
  'document-inspector.dialog.title-no-value': undefined, // 'No value'
  /** The "parsed" view mode, meaning the JSON is searchable, collapsible etc */
  'document-inspector.view-mode.parsed': undefined, // 'Parsed'
  /** The "raw" view mode, meaning the JSON is presented syntax-highlighted, but with no other features - optimal for copying */
  'document-inspector.view-mode.raw-json': undefined, // 'Raw JSON'

  /** --- "PRODUCTION PREVIEW", eg link to content --- */
  'production-preview.menu-item.title': undefined, // 'Open preview'
  /** -- STRUCTURE PANES -- */
  /** The tool tip for the split pane button on the document panel header */
  'buttons.split-pane-button.tooltip': undefined, // 'Split pane right'
  /** The aria-label for the split pane button on the document panel header */
  'buttons.split-pane-button.aria-label': undefined, // 'Split pane right'
  /** The title for the close button on the split pane on the document panel header */
  'buttons.split-pane-close-button.title': undefined, // 'Close split pane'
  /** The title for the close group button on the split pane on the document panel header */
  'buttons.split-pane-close-group-button.title': undefined, // 'Close pane group'
  /** The text content for the deleted document banner */
  'banners.deleted-document-banner.text': undefined, // 'This document has been deleted.'
  /** The text for the restore button on the deleted document banner */
  'banners.deleted-document-banner.restore-button.text': undefined, // 'Restore most recent version'
  /** The text for the reference change banner if the reason is that the reference has been changed */
  'banners.reference-changed-banner.reason-changed.text': undefined, // 'This reference has changed since you opened it.'
  /** The text for the reload button */
  'banners.reference-changed-banner.reason-changed.reload-button.text': undefined, // 'Reload reference'
  /** The text for the reference change banner if the reason is that the reference has been deleted */
  'banners.reference-changed-banner.reason-removed.text': undefined, // 'This reference has been removed since you opened it.'
  /** The text for the close button */
  'banners.reference-changed-banner.reason-removed.close-button.text': undefined, // 'Close reference'
  /** The text for the permission check banner if there is only one role */
  'banners.permission-check-banner.singular-role.text': undefined, // 'Your role {{roles}} does not have permissions to {{requiredPermission}} this document.'
  /** The text for the permission check banner if there is are multiple roles */
  'banners.permission-check-banner.plural-roles.text': undefined, // 'Your roles {{roles}} do not have permissions to {{requiredPermission}} this document.'
  /** The text for when a form is hidden */
  'document-view.form-view.form-hidden': undefined, // 'This form is hidden'
  /** The text for when the form view is loading a document */
  'document-view.form-view.loading': undefined, // 'Loading document…'
  /** The title of the sync lock toast on the form view */
  'document-view.form-view.sync-lock-toast.title': undefined, // 'Syncing document…'
  /** The description of the sync lock toast on the form view */
  'document-view.form-view.sync-lock-toast.description': undefined, // 'Please hold tight while the document is synced. This usually happens right after the document has been published, and it should not take more than a few seconds'
  /** The title of the reconnecting toast */
  'panes.document-pane-provider.reconnecting.title': undefined, // 'Connection lost. Reconnecting…'
  /** The loading message for the document not found pane */
  'panes.document-pane.document-not-found.loading': undefined, // 'Loading document…'
  /** The title of the document not found pane if the schema is known */
  'panes.document-pane.document-not-found.title': undefined, // 'The document was not found'
  /** The text of the document not found pane if the schema is known */
  'panes.document-pane.document-not-found.text': undefined, // 'The document type is not defined, and a document with the <Code>{{id}}</Code> identifier could not be found.'
  /** The title of the document not found pane if the schema is not found or unknown */
  'panes.document-pane.document-unknown-type.title': undefined, // 'Unknown document type: <Code>{{documentType}}</Code>'
  /** The text of the document not found pane if the schema is not found */
  'panes.document-pane.document-unknown-type.text': undefined, // 'This document has the schema type <Code>{{documentType}}</Code>, which is not defined as a type in the local content studio schema.'
  /** The title of the document not found pane if the schema is unknown */
  'panes.document-pane.document-unknown-type.without-schema.text': undefined, // 'This document does not exist, and no schema type was specified for it.'
  /** The text of the document list pane if more than a maximum number of documents are returned */
  'panes.document-list-pane.max-items.text': undefined, // 'Displaying a maximum of {{limit}} documents'
  /** The text of the document list pane if no documents are found */
  'panes.document-list-pane.no-documents.text': undefined, // 'No results found'
  /** The text of the document list pane if no documents are found matching specified criteria */
  'panes.document-list-pane.no-matching-documents.text': undefined, // 'No matching documents'
  /** The text of the document list pane if no documents are found for a specified type */
  'panes.document-list-pane.no-documents-of-type.text': undefined, // 'No documents of this type'
  /** The error title on the document list pane */
  'panes.document-list-pane.error.title': undefined, // 'Could not fetch list items'
  /** The error text on the document list pane */
  'panes.document-list-pane.error.text': undefined, // 'Error: <Code>{{error}}</Code>'
  /** The text for the retry button on the document list pane */
  'panes.document-list-pane.error.retry-button.text': undefined, // 'Retry'
  /** The summary title when displaying an error for a document operation result */
  'panes.document-operation-results.error.summary.title': undefined, // 'Details'
  /** The text when a delete operation failed  */
  'panes.document-operation-results.operation-error_delete': undefined, // 'An error occurred while attempting to delete this document. This usually means that there are other documents that refers to it.'
  /** The text when an unpublish operation failed  */
  'panes.document-operation-results.operation-error_unpublish': undefined, // 'An error occurred while attempting to unpublish this document. This usually means that there are other documents that refers to it.'
  /** The text when a generic operation failed (fallback, generally not shown)  */
  'panes.document-operation-results.operation-error': undefined, // 'An error occurred during {{context}}'
  /** The text when a publish operation succeeded  */
  'panes.document-operation-results.operation-success_publish': undefined, // 'The document was published'
  /** The text when an unpublish operation succeeded  */
  'panes.document-operation-results.operation-success_unpublish': undefined, // 'The document was unpublished. A draft has been created from the latest published version.'
  /** The text when a discard changes operation succeeded  */
  'panes.document-operation-results.operation-success_discardChanges': undefined, // 'All changes since last publish has now been discarded. The discarded draft can still be recovered from history'
  /** The text when a delete operation succeded  */
  'panes.document-operation-results.operation-success_delete': undefined, // 'The document was successfully deleted'
  /** The text when a generic operation succeded (fallback, generally not shown)  */
  'panes.document-operation-results.operation-success': undefined, // 'Successfully performed {{context}} on document'
  /** The text used in the document header title if creating a new item */
  'panes.document-header-title.new.text': undefined, // 'New {{schemaType}}'
  /** The text used in the document header title if there is an error */
  'panes.document-header-title.error.text': undefined, // 'Error: {{error}}'
  /** The text used in the document header title if no other title can be determined */
  'panes.document-header-title.untitled.text': undefined, // 'Untitled'
  /** The aria-label for the search input on the document list pane */
  'panes.document-list-pane.search-input.aria-label': undefined, // 'Search list'
  /** The search input for the search input on the document list pane */
  'panes.document-list-pane.search-input.placeholder': undefined, // 'Search list'
  /** The action menu button aria-label */
  'buttons.action-menu-button.aria-label': undefined, // 'Open document actions'
  /** the placeholder text for the search input on the inspect dialog */
  'inputs.inspect-dialog.search.placeholder': undefined, // 'Search'
  /** -- UNKNOWN PANE TYPE */
  /** The text to display when type is missing */
  'panes.unknown-pane-type.missing-type.text': undefined, // 'Structure item is missing required <Code>type</Code> property.'
  /** The text to display when type is unknown */
  'panes.unknown-pane-type.unknown-type.text': undefined, // 'Structure item of type <Code>{{type}}</Code> is not a known entity.'
  /** The title of the unknown pane */
  'panes.unknown-pane-type.title': undefined, // 'Unknown pane type'

  /** --- DOCUMENT TITLE --- */
  /** The text shown if a document's title via a preview value cannot be determined due to an unknown schema type */
  'doc-title.unknown-schema-type.text': undefined, // 'Unknown schema type: {{schemaType}}'
  /** The text shown if there was an error while getting the document's title via a preview value */
  'doc-title.error.text': undefined, // 'Error: {{errorMessage}}'
  /** The text shown if the preview value for a document is non-existent or empty */
  'doc-title.fallback.text': undefined, // 'Untitled'

  /** --- PANE ITEM --- */
  /** The text shown in the tooltip of pane item previews of documents if there are unpublished edits */
  'pane-item.draft-status.has-draft.tooltip': undefined, // 'Edited <RelativeTime/>'
  /** The text shown in the tooltip of pane item previews of documents if there are no unpublished edits */
  'pane-item.draft-status.no-draft.tooltip': undefined, // 'No unpublished edits'
  /** The text shown in the tooltip of pane item previews of documents if there are unpublished edits */
  'pane-item.published-status.has-published.tooltip': undefined, // 'Published <RelativeTime/>'
  /** The text shown in the tooltip of pane item previews of documents if there are no unpublished edits */
  'pane-item.published-status.no-published.tooltip': undefined, // 'No unpublished edits'
  /** The title tor pane item previews if there isn't a matching schema type found */
  'pane-item.missing-schema-type.title': undefined, // 'No schema found for type <Code>{{documentType}}</Code>'
  /** The subtitle tor pane item previews if there isn't a matching schema type found */
  'pane-item.missing-schema-type.subtitle': undefined, // 'Document: <Code>{{documentId}}</Code>'

  /** --- CONFIRM DELETE DIALOG e.g. when trying to delete or unpublished a document --- */
  /** The header of the confirm delete dialog */
  'confirm-delete-dialog.header.text_delete': undefined, // 'Delete document?'
  /** The header of the confirm delete dialog */
  'confirm-delete-dialog.header.text_unpublish': undefined, // 'Unpublish document?'
  /** The text that appears while the referring documents are queried */
  'confirm-delete-dialog.loading.text': undefined, // 'Looking for referring documents…'
  /** The text in the "Cancel" button in the confirm delete dialog that cancels the action and closes the dialog */
  'confirm-delete-dialog.cancel-button.text': undefined, // 'Cancel'
  /** The text in the "Delete now" button in the confirm delete dialog that confirms the action */
  'confirm-delete-dialog.confirm-button.text_delete': undefined, // 'Delete now'
  /** The text in the "Unpublish now" button in the confirm delete dialog that confirms the action */
  'confirm-delete-dialog.confirm-button.text_unpublish': undefined, // 'Unpublish now'
  /** The text in the "Delete anyway" button in the confirm delete dialog that confirms the action */
  'confirm-delete-dialog.confirm-anyway-button.text_delete': undefined, // 'Delete anyway'
  /** The text in the "Unpublish anyway" button in the confirm delete dialog that confirms the action */
  'confirm-delete-dialog.confirm-anyway-button.text_unpublish': undefined, // 'Unpublish anyway'
  /** If no referring documents are found, this text appears above the cancel and confirmation buttons */
  'confirm-delete-dialog.confirmation.text_delete': undefined, // 'Are you sure you want to delete “<DocumentTitle/>”?'
  /** If no referring documents are found, this text appears above the cancel and confirmation buttons */
  'confirm-delete-dialog.confirmation.text_unpublish': undefined, // 'Are you sure you want to unpublish “<DocumentTitle/>”?'
  /** Tells the user the count of how many other referring documents there are before listing them. (singular) */
  'confirm-delete-dialog.referring-document-count.text_one': undefined, // '1 document refers to “<DocumentTitle/>”'
  /** Tells the user the count of how many other referring documents there are before listing them. (plural) */
  'confirm-delete-dialog.referring-document-count.text_other': undefined, // '{{count}} documents refer to “<DocumentTitle/>”'
  /** Describes the list of documents that refer to the one trying to be deleted (delete) */
  'confirm-delete-dialog.referring-documents-descriptor.text_delete': undefined, // 'You may not be able to delete “<DocumentTitle/>” because the following documents refer to it:'
  /** Describes the list of documents that refer to the one trying to be deleted (unpublish) */
  'confirm-delete-dialog.referring-documents-descriptor.text_unpublish': undefined, // 'You may not be able to unpublish “<DocumentTitle/>” because the following documents refer to it:'
  /** Warns the user of affects to other documents if the action is confirmed (delete) */
  'confirm-delete-dialog.referential-integrity-disclaimer.text_delete': undefined, // 'If you delete this document, documents that refer to it will no longer be able to access it.'
  /** Warns the user of affects to other documents if the action is confirmed (unpublish) */
  'confirm-delete-dialog.referential-integrity-disclaimer.text_unpublish': undefined, // 'If you unpublish this document, documents that refer to it will no longer be able to access it.'
  /** The header for the project ID column in the list of cross-dataset references found */
  'confirm-delete-dialog.cdr-table.project-id.label': undefined, // 'Project ID'
  /** The header for the dataset column in the list of cross-dataset references found */
  'confirm-delete-dialog.cdr-table.dataset.label': undefined, // 'Dataset'
  /** The header for the document ID column in the list of cross-dataset references found */
  'confirm-delete-dialog.cdr-table.document-id.label': undefined, // 'Document ID'
  /** Appears when hovering over the copy button to copy */
  'confirm-delete-dialog.cdr-table.copy-id-button.tooltip': undefined, // 'Copy ID to clipboard'
  /** The toast title when the copy button has been clicked */
  'confirm-delete-dialog.cdr-table.id-copied-toast.title': undefined, // 'Copied document ID to clipboard!'
  /** Appears when unable to render a document preview in the referring document list */
  'confirm-delete-dialog.preview-item.preview-unavailable.title': undefined, // 'Preview unavailable'
  /** Appears when unable to render a document preview in the referring document list */
  'confirm-delete-dialog.preview-item.preview-unavailable.subtitle': undefined, // 'ID: {{documentId}}'
  /** The text that appears in the title `<summary>` that includes the list of CDRs (singular) */
  'confirm-delete-dialog.cdr-summary.title_one': undefined, // '{{documentCount}} in another dataset'
  /** The text that appears in the title `<summary>` that includes the list of CDRs (plural) */
  'confirm-delete-dialog.cdr-summary.title_other': undefined, // '{{documentCount}} in {{count}} datasets'
  /** Used in `confirm-delete-dialog.cdr-summary.title` */
  'confirm-delete-dialog.cdr-summary.document-count_one': undefined, // '1 document'
  /** Used in `confirm-delete-dialog.cdr-summary.title` */
  'confirm-delete-dialog.cdr-summary.document-count_other': undefined, // '{{count}} documents'
  /** The text that appears in the subtitle `<summary>` that lists the datasets below the title */
  'confirm-delete-dialog.cdr-summary.subtitle_one': undefined, // 'Dataset: {{datasets}}'
  /** The text that appears in the subtitle `<summary>` that lists the datasets below the title */
  'confirm-delete-dialog.cdr-summary.subtitle_other': undefined, // 'Datasets: {{datasets}}'
  /** The text that appears in the subtitle `<summary>` that lists the datasets below the title */
  'confirm-delete-dialog.cdr-summary.subtitle_unavailable_one': undefined, // 'Unavailable dataset'
  /** The text that appears in the subtitle `<summary>` that lists the datasets below the title */
  'confirm-delete-dialog.cdr-summary.subtitle_unavailable_other': undefined, // 'Unavailable datasets'
  /** Shown if there are references to other documents but the user does not have the permission to see the relevant document IDs */
  'confirm-delete-dialog.other-reference-count.title_one': undefined, // '1 other reference not show'
  /** Shown if there are references to other documents but the user does not have the permission to see the relevant document IDs */
  'confirm-delete-dialog.other-reference-count.title_other': undefined, // '{{count}} other references not shown'
  /** Text in the tooltip of this component if hovering over the info icon */
  'confirm-delete-dialog.other-reference-count.tooltip': undefined, // 'We can\'t display metadata for these references due to a missing access token for the related datasets.'
  /** The header of the confirm delete dialog if an error occurred while the confirm delete dialog was open. */
  'confirm-delete-dialog.error.title.text': undefined, // 'Error'
  /** The text in the retry button of the confirm delete dialog if an error occurred. */
  'confirm-delete-dialog.error.retry-button.text': undefined, // 'Retry'
  /** The text body of the error dialog. */
  'confirm-delete-dialog.error.message.text': undefined, // 'An error occurred while loading referencing documents.'

  /** --- NO DOCUMENT TYPES SCREEN i.e. appears when there are no document types defined and the desk tool has nothing to render --- */
  /** The title of the no document type screen */
  'no-document-types-screen.title': undefined, // 'No document types'
  /** The subtitle of the no document type screen that appears directly below the title */
  'no-document-types-screen.subtitle': undefined, // 'Please define at least one document type in your schema.'
  /** The link text of the no document type screen that appears directly below the subtitle */
  'no-document-types-screen.link-text': undefined, // 'Learn how to add a document type →'

  /** --- STRUCTURE ERROR SCREEN i.e. appears if there was an error while rendering the structure from the structure builder --- */
  /** The header that appears at the top of the error screen */
  'structure-error.header.text': undefined, // 'Encountered an error while reading structure'
  /** Labels the structure path of the structure error screen */
  'structure-error.structure-path.label': undefined, // 'Structure path'
  /** Labels the error message or error stack of the structure error screen */
  'structure-error.error.label': undefined, // 'Error'
  /** The text that appears in side the documentation link */
  'structure-error.docs-link.text': undefined, // 'View documentation'
  /** The text in the reload button to retry rendering the structure */
  'structure-error.reload-button.text': undefined, // 'Reload'

  /** --- PANE HEADER MENU --- */
  /** tooltip text (via `title` attribute) for the menu button */
  'pane-header.context-menu-button.tooltip': undefined, // 'Show menu'
  /** The `aria-label` for the disabled button in the pane header if create permissions are granted */
  'pane-header.disabled-created-button.aria-label': undefined, // 'Insufficient permissions'
  /** Appears in a document list pane header if there are more than one option for create. This is the label for that menu */
  'pane-header.create-menu.label': undefined, // 'Create'

  /** --- Insufficient permissions message --- */
  /** the loading messaging for when the tooltip is still loading permission info */
  'insufficient-permissions-message-tooltip.loading-text': undefined, // 'Loading…'
})
