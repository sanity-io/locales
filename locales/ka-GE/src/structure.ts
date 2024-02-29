import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Tooltip when action button is disabled because the operation is not ready   */
  'action.delete.disabled.not-ready': 'ოპერაიცა არ არის მზად', // 'Operation not ready'
  /** Tooltip when action button is disabled because the document does not exist */
  'action.delete.disabled.nothing-to-delete': 'ეს დოკუმენტი არ არსებობს ან უკვე წაიშალა.', // 'This document doesn\'t yet exist or is already deleted'
  /** Label for the "Delete" document action button */
  'action.delete.label': 'წაშლა', // 'Delete'
  /** Label for the "Delete" document action while the document is being deleted */
  'action.delete.running.label': 'იშლება', // 'Deleting…'
  /** Message prompting the user to confirm discarding changes */
  'action.discard-changes.confirm-dialog.confirm-discard-changes':
    'დარწმუნებული ხარ რომ გინდა გააუქმო ყველა ცვლილება რომელიც მოხდა ბოლო გამოქვეყნების შემდეგ ?', // 'Are you sure you want to discard all changes since last published?'
  /** Tooltip when action is disabled because the document has no unpublished changes */
  'action.discard-changes.disabled.no-change': 'ამ დოკუმენტს არ აქვს გამოუქვეყნებელი ცვლილებები.', // 'This document has no unpublished changes'
  /** Tooltip when action is disabled because the document is not published */
  'action.discard-changes.disabled.not-published': 'ეს დოკუმენტი არ გამოქვეყნებულა.', // 'This document is not published'
  /** Tooltip when action button is disabled because the operation is not ready   */
  'action.discard-changes.disabled.not-ready': 'ოპერაცია არ არის მზად.', // 'Operation not ready'
  /** Label for the "Discard changes" document action */
  'action.discard-changes.label': 'ცლილებების გაუქმება', // 'Discard changes'
  /** Tooltip when action is disabled because the operation is not ready   */
  'action.duplicate.disabled.not-ready': 'ოპერაცია არ არის მზად.', // 'Operation not ready'
  /** Tooltip when action is disabled because the document doesn't exist */
  'action.duplicate.disabled.nothing-to-duplicate':
    'დოკუმენტი არ არსებობს, რაც ნიშნავს რომ აქ არაფერია რომ გაიმეორო.', // 'This document doesn\'t yet exist so there\'s nothing to duplicate'
  /** Label for the "Duplicate" document action */
  'action.duplicate.label': 'გააორმაგე', // 'Duplicate'
  /** Label for the "Duplicate" document action while the document is being duplicated */
  'action.duplicate.running.label': 'მიმდინარებს გაორმაგება', // 'Duplicating…'
  /** Tooltip when publish button is disabled because the document is already published, and published time is unavailable.*/
  'action.publish.already-published.no-time-ago.tooltip': 'უკვე გამოქვეყნდა', // 'Already published'
  /** Tooltip when publish button is disabled because the document is already published.*/
  'action.publish.already-published.tooltip': 'გამოქვეყნდა {{timeSincePublished}} წინ', // 'Published {{timeSincePublished}} ago'
  /** Tooltip when action is disabled because the studio is not ready.*/
  'action.publish.disabled.not-ready': 'ოპერაცია არ არის მზად', // 'Operation not ready'
  /** Label for action when there are pending changes.*/
  'action.publish.draft.label': 'გამოქვეყნება', // 'Publish'
  /** Label for the "Publish" document action when the document has live edit enabled.*/
  'action.publish.live-edit.label': 'გამოქვეყნება', // 'Publish'
  /** Fallback tooltip for the "Publish" document action when publish is invoked for a document with live edit enabled.*/
  'action.publish.live-edit.publish-disabled':
    'შეუძლებელია გამოქვეყნება რადგან მყისიერი განახლების რეჟიმი ჩართულია ამ დოკუმენტის ტიპისთვის.', // 'Cannot publish since Live Edit is enabled for this document type'
  /** Tooltip for the "Publish" document action when the document has live edit enabled.*/
  'action.publish.live-edit.tooltip':
    'მყისიერი განახლების რეჟიმი ჩართულია ამ კონტენტის ტიპისთვის, რაც ნიშნავს რომ ის გამოქვეყნდება ავტომატურად განახლებისთანავე', // 'Live Edit is enabled for this content type and publishing happens automatically as you make changes'
  /** Tooltip when publish button is disabled because there are no changes.*/
  'action.publish.no-changes.tooltip': ' არ არის გამოუქვეყნებელი ცვლილებები.', // 'No unpublished changes'
  /** Label for the "Publish" document action when there are no changes.*/
  'action.publish.published.label': 'გამოქვეყნებულია', // 'Published'
  /** Label for the "Publish" document action while publish is being executed.*/
  'action.publish.running.label': 'ქვეყნდება', // 'Publishing…'
  /** Tooltip when the "Publish" document action is disabled due to validation issues */
  'action.publish.validation-issues.tooltip':
    'დაფიქსირდა დადასტურების შეცდომები, რომლებსაც ჭირდება გამოსწორება, სანამ დოკუმენტი გამოქვეყნდება', // 'There are validation errors that need to be fixed before this document can be published'
  /** Tooltip when publish button is waiting for validation and async tasks to complete.*/
  'action.publish.waiting': 'ქვეყნდება, იქამდე მიმდინარეობს დავალებების შესრულება. ', // 'Waiting for tasks to finish before publishing'
  /** Message prompting the user to confirm that they want to restore to an earlier version*/
  'action.restore.confirm.message': 'დარწმუნებული ხარ რომ ამ დოკუმენტის აღდგენა გსურს?', // 'Are you sure you want to restore this document?'
  /** Fallback tooltip for when user is looking at the initial version */
  'action.restore.disabled.cannot-restore-initial': 'შენ არ შეგიძლია აღადგინო საწყისი ვერსია.', // 'You can\'t restore to the initial version'
  /** Label for the "Restore" document action */
  'action.restore.label': 'აღდგენა', // 'Restore'
  /** Default tooltip for the action */
  'action.restore.tooltip': 'აღადგინა ეს ვერსიაა', // 'Restore to this version'
  /** Tooltip when action is disabled because the document is not already published */
  'action.unpublish.disabled.not-published': 'ეს დოკუმენტი არ არის გამოქვეყნებული', // 'This document is not published'
  /** Tooltip when action is disabled because the operation is not ready   */
  'action.unpublish.disabled.not-ready': 'ოპერაცია არ არის მზად', // 'Operation not ready'
  /** Label for the "Unpublish" document action */
  'action.unpublish.label': 'გამოუქვეყნებელი', // 'Unpublish'
  /** Fallback tooltip for the Unpublish document action when publish is invoked for a document with live edit enabled.*/
  'action.unpublish.live-edit.disabled':
    'ამ დოკუმენტს ჩართული აქვს პირდაპირი რედაქტირება და მისი გამოქვეყნება შეუძლებელია', // 'This document has live edit enabled and cannot be unpublished'

  /** The text for the restore button on the deleted document banner */
  'banners.deleted-document-banner.restore-button.text': 'აღადგინე ბოლო ვერსია', // 'Restore most recent version'
  /** The text content for the deleted document banner */
  'banners.deleted-document-banner.text': 'ეს დოკუმენტი წაშლილია.', // 'This document has been deleted.'
  /** The text content for the deprecated document type banner */
  'banners.deprecated-document-type-banner.text': 'დოკუმენტის ეს ტიპი მოძველებულია', // 'This document type has been deprecated.'
  /** The text for the permission check banner if the user only has one role, and it does not allow updating this document */
  'banners.permission-check-banner.missing-permission_create_one':
    "'Your role <Roles/> does not have permissions to create this document.'", // 'Your role <Roles/> does not have permissions to create this document.'
  /** The text for the permission check banner if the user only has multiple roles, but they do not allow updating this document */
  'banners.permission-check-banner.missing-permission_create_other':
    'Your roles <Roles/> do not have permissions to create this document.', // 'Your roles <Roles/> do not have permissions to create this document.'
  /** The text for the permission check banner if the user only has one role, and it does not allow updating this document */
  'banners.permission-check-banner.missing-permission_update_one':
    'Your role <Roles/> does not have permissions to update this document.', // 'Your role <Roles/> does not have permissions to update this document.'
  /** The text for the permission check banner if the user only has multiple roles, but they do not allow updating this document */
  'banners.permission-check-banner.missing-permission_update_other':
    'Your roles <Roles/> do not have permissions to update this document.', // 'Your roles <Roles/> do not have permissions to update this document.'
  /** The text for the reload button */
  'banners.reference-changed-banner.reason-changed.reload-button.text': 'გადატვირთვის მითითება.', // 'Reload reference'
  /** The text for the reference change banner if the reason is that the reference has been changed */
  'banners.reference-changed-banner.reason-changed.text':
    'ეს მიმთითებელი შეიცვალა, მას შემდეგ რაც გახსენი', // 'This reference has changed since you opened it.'
  /** The text for the close button */
  'banners.reference-changed-banner.reason-removed.close-button.text': 'გათიშე მიმთითებელი', // 'Close reference'
  /** The text for the reference change banner if the reason is that the reference has been deleted */
  'banners.reference-changed-banner.reason-removed.text':
    'მიმთითებელი მოიხსნა, მას შემდეგ რაც გახსენი ის.', // 'This reference has been removed since you opened it.'

  /** Browser/tab title when creating a new document of a given type */
  'browser-document-title.new-document': 'ახალი {{schemaType}}', // 'New {{schemaType}}'
  /** Browser/tab title when editing a document where the title cannot be resolved from preview configuration */
  'browser-document-title.untitled-document': 'უსათაურო', // 'Untitled'

  /** The action menu button aria-label */
  'buttons.action-menu-button.aria-label': 'გახსენი დოკუმენტის მოქმედებები.', // 'Open document actions'
  /** The action menu button tooltip */
  'buttons.action-menu-button.tooltip': 'დოკუმენტის მოქმედებები', // 'Document actions'
  /** The aria-label for the split pane button on the document panel header */
  'buttons.split-pane-button.aria-label': 'გაყავი პანელი მარჯვნივ', // 'Split pane right'
  /** The tool tip for the split pane button on the document panel header */
  'buttons.split-pane-button.tooltip': 'გაყავი პანელი მარჯვნივ', // 'Split pane right'
  /** The title for the close button on the split pane on the document panel header */
  'buttons.split-pane-close-button.title': 'გათიშე გაყოფის პანელი', // 'Close split pane'
  /** The title for the close group button on the split pane on the document panel header */
  'buttons.split-pane-close-group-button.title': 'გათიშე პანელის ჯგუფი.', // 'Close pane group'

  /** The text in the "Cancel" button in the confirm delete dialog that cancels the action and closes the dialog */
  'confirm-delete-dialog.cancel-button.text': 'გადი უკან.', // 'Cancel'
  /** Used in `confirm-delete-dialog.cdr-summary.title` */
  'confirm-delete-dialog.cdr-summary.document-count_one': '1 დოკუმენტი', // '1 document'
  /** Used in `confirm-delete-dialog.cdr-summary.title` */
  'confirm-delete-dialog.cdr-summary.document-count_other': '{{count}} დოკუმენტები', // '{{count}} documents'
  /** The text that appears in the subtitle `<summary>` that lists the datasets below the title */
  'confirm-delete-dialog.cdr-summary.subtitle_one': 'Dataset: {{datasets}}', // 'Dataset: {{datasets}}'
  /** The text that appears in the subtitle `<summary>` that lists the datasets below the title */
  'confirm-delete-dialog.cdr-summary.subtitle_other': 'Datasets: {{datasets}}', // 'Datasets: {{datasets}}'
  /** The text that appears in the subtitle `<summary>` that lists the datasets below the title */
  'confirm-delete-dialog.cdr-summary.subtitle_unavailable_one': 'მონაცემთა ნაკრები მიუწვდომელია', // 'Unavailable dataset'
  /** The text that appears in the subtitle `<summary>` that lists the datasets below the title */
  'confirm-delete-dialog.cdr-summary.subtitle_unavailable_other': 'მონაცემთა ნაკრები მიუწვდომელია', // 'Unavailable datasets'
  /** The text that appears in the title `<summary>` that includes the list of CDRs (singular) */
  'confirm-delete-dialog.cdr-summary.title_one': '{{documentCount}} in another dataset', // '{{documentCount}} in another dataset'
  /** The text that appears in the title `<summary>` that includes the list of CDRs (plural) */
  'confirm-delete-dialog.cdr-summary.title_other': '{{documentCount}} in {{count}} datasets', // '{{documentCount}} in {{count}} datasets'
  /** Appears when hovering over the copy button to copy */
  'confirm-delete-dialog.cdr-table.copy-id-button.tooltip': 'Copy ID to clipboard', // 'Copy ID to clipboard'
  /** The header for the dataset column in the list of cross-dataset references found */
  'confirm-delete-dialog.cdr-table.dataset.label': 'მონაცემების ნაკრები', // 'Dataset'
  /** The header for the document ID column in the list of cross-dataset references found */
  'confirm-delete-dialog.cdr-table.document-id.label': 'დოკუმენტის ID', // 'Document ID'
  /** The toast title when the copy button has been clicked */
  'confirm-delete-dialog.cdr-table.id-copied-toast.title': 'დააკოპირე დოკუმენტის ID.', // 'Copied document ID to clipboard!'
  /** The header for the project ID column in the list of cross-dataset references found */
  'confirm-delete-dialog.cdr-table.project-id.label': 'პროექტის ID', // 'Project ID'
  /** The text in the "Delete anyway" button in the confirm delete dialog that confirms the action */
  'confirm-delete-dialog.confirm-anyway-button.text_delete': 'მკიდია წაშალე.', // 'Delete anyway'
  /** The text in the "Unpublish anyway" button in the confirm delete dialog that confirms the action */
  'confirm-delete-dialog.confirm-anyway-button.text_unpublish': 'მკიდია გააუქმე გამოქვეყნება. ', // 'Unpublish anyway'
  /** The text in the "Delete now" button in the confirm delete dialog that confirms the action */
  'confirm-delete-dialog.confirm-button.text_delete': 'ახლავე წაშალე.', // 'Delete now'
  /** The text in the "Unpublish now" button in the confirm delete dialog that confirms the action */
  'confirm-delete-dialog.confirm-button.text_unpublish': 'გააუქმე გამოქვეყნება ახლავე.', // 'Unpublish now'
  /** If no referring documents are found, this text appears above the cancel and confirmation buttons */
  'confirm-delete-dialog.confirmation.text_delete':
    'ჩემო კარგო, ნამდვილად გინდა წაშალო “<DocumentTitle/>”?', // 'Are you sure you want to delete “<DocumentTitle/>”?'
  /** If no referring documents are found, this text appears above the cancel and confirmation buttons */
  'confirm-delete-dialog.confirmation.text_unpublish':
    'ჩემო კარგო, ნამდვილად გინდა წაშალო “<DocumentTitle/>”?', // 'Are you sure you want to unpublish “<DocumentTitle/>”?'
  /** The text body of the error dialog. */
  'confirm-delete-dialog.error.message.text':
    'რაღაც შეცდომა მოხდა სანამ მიმნიშებელი დოკუმენტი იტვირთებოდა', // 'An error occurred while loading referencing documents.'
  /** The text in the retry button of the confirm delete dialog if an error occurred. */
  'confirm-delete-dialog.error.retry-button.text': 'თავიდან', // 'Retry'
  /** The header of the confirm delete dialog if an error occurred while the confirm delete dialog was open. */
  'confirm-delete-dialog.error.title.text': 'შეცდომა', // 'Error'
  /** The header of the confirm delete dialog */
  'confirm-delete-dialog.header.text_delete': 'წავშალო დოკუმენტი?', // 'Delete document?'
  /** The header of the confirm delete dialog */
  'confirm-delete-dialog.header.text_unpublish': 'გსურს დოკუმენტის გამოქვეყნების გაუქმება?', // 'Unpublish document?'
  /** The text that appears while the referring documents are queried */
  'confirm-delete-dialog.loading.text': 'ვეძებ მიმთითებელ დოკუმენტებს...', // 'Looking for referring documents…'
  /** Shown if there are references to other documents but the user does not have the permission to see the relevant document IDs */
  'confirm-delete-dialog.other-reference-count.title_one': '1 სხვა მითითება არ არის ნაჩვენები', // '1 other reference not show'
  /** Shown if there are references to other documents but the user does not have the permission to see the relevant document IDs */
  'confirm-delete-dialog.other-reference-count.title_other': '{{count}} other references not shown', // '{{count}} other references not shown'
  /** Text in the tooltip of this component if hovering over the info icon */
  'confirm-delete-dialog.other-reference-count.tooltip':
    " 'We can't display metadata for these references due to a missing access token for the related datasets.'", // 'We can\'t display metadata for these references due to a missing access token for the related datasets.'
  /** Appears when unable to render a document preview in the referring document list */
  'confirm-delete-dialog.preview-item.preview-unavailable.subtitle': 'ID: {{documentId}}', // 'ID: {{documentId}}'
  /** Appears when unable to render a document preview in the referring document list */
  'confirm-delete-dialog.preview-item.preview-unavailable.title':
    'წინასწარი გადახედვა მიუწვდომელია', // 'Preview unavailable'
  /** Warns the user of affects to other documents if the action is confirmed (delete) */
  'confirm-delete-dialog.referential-integrity-disclaimer.text_delete':
    'თუ შენ წაშლი ამ დოკუმენტს, მასზე წვდომა ვეღარ გექნება', // 'If you delete this document, documents that refer to it will no longer be able to access it.'
  /** Warns the user of affects to other documents if the action is confirmed (unpublish) */
  'confirm-delete-dialog.referential-integrity-disclaimer.text_unpublish':
    ' თუ შენ გააუქმებ დოკუმენტის გამოქვეყნებას, დოკუმენტზე ვეღარ გექნება წვდომა ', // 'If you unpublish this document, documents that refer to it will no longer be able to access it.'
  /** Tells the user the count of how many other referring documents there are before listing them. (singular) */
  'confirm-delete-dialog.referring-document-count.text_one':
    "'1 დოკუმენტი მიუთითებს “<DocumentTitle/>”'", // '1 document refers to “<DocumentTitle/>”'
  /** Tells the user the count of how many other referring documents there are before listing them. (plural) */
  'confirm-delete-dialog.referring-document-count.text_other':
    '{{count}} documents refer to “<DocumentTitle/>” ', // '{{count}} documents refer to “<DocumentTitle/>”'
  /** Describes the list of documents that refer to the one trying to be deleted (delete) */
  'confirm-delete-dialog.referring-documents-descriptor.text_delete':
    'You may not be able to unpublish “<DocumentTitle/>” because the following documents refer to it:', // 'You may not be able to delete “<DocumentTitle/>” because the following documents refer to it:'
  /** Describes the list of documents that refer to the one trying to be deleted (unpublish) */
  'confirm-delete-dialog.referring-documents-descriptor.text_unpublish':
    'You may not be able to unpublish “<DocumentTitle/>” because the following documents refer to it:', // 'You may not be able to unpublish “<DocumentTitle/>” because the following documents refer to it:'

  /** The text for the cancel button in the confirm dialog used in document action shortcuts if none is provided */
  'confirm-dialog.cancel-button.fallback-text': 'უკან გამოსვლა', // 'Cancel'
  /** The text for the confirm button in the confirm dialog used in document action shortcuts if none is provided */
  'confirm-dialog.confirm-button.fallback-text': 'დადასტურება', // 'Confirm'

  /** For the default structure definition, the title for the "Content" pane */
  'default-definition.content-title': 'შინაარსი', // 'Content'

  /** The text shown if there was an error while getting the document's title via a preview value */
  'doc-title.error.text': 'შეცდომა: {{errorMessage}}', // 'Error: {{errorMessage}}'
  /** The text shown if the preview value for a document is non-existent or empty */
  'doc-title.fallback.text': 'უსათაურო', // 'Untitled'
  /** The text shown if a document's title via a preview value cannot be determined due to an unknown schema type */
  'doc-title.unknown-schema-type.text': 'უცნობი სქემის ტიპი: {{schemaType}}', // 'Unknown schema type: {{schemaType}}'

  /** Tooltip text shown for the close button of the document inspector */
  'document-inspector.close-button.tooltip': 'გათიშე', // 'Close'
  /** The title shown in the dialog header, when inspecting a valid document */
  'document-inspector.dialog.title': 'შეამოწმე <DocumentTitle/>', // 'Inspecting <DocumentTitle/>'
  /** The title shown in the dialog header, when the document being inspected is not created yet/has no value */
  'document-inspector.dialog.title-no-value': 'არ არის მნიშვნელობა', // 'No value'
  /** Title shown for menu item that opens the "Inspect" dialog */
  'document-inspector.menu-item.title': 'შეამოწმე', // 'Inspect'
  /** the placeholder text for the search input on the inspect dialog */
  'document-inspector.search.placeholder': 'მოძებნე', // 'Search'
  /** The "parsed" view mode, meaning the JSON is searchable, collapsible etc */
  'document-inspector.view-mode.parsed': 'გაანალიზებული', // 'Parsed'
  /** The "raw" view mode, meaning the JSON is presented syntax-highlighted, but with no other features - optimal for copying */
  'document-inspector.view-mode.raw-json': 'JSON ის მწკრივი', // 'Raw JSON'

  /** The text for when a form is hidden */
  'document-view.form-view.form-hidden': 'ეს ფორმა დამალულია', // 'This form is hidden'
  /** Fallback title shown when a form title is not provided */
  'document-view.form-view.form-title-fallback': 'უსათაურო', // 'Untitled'
  /** The text for when the form view is loading a document */
  'document-view.form-view.loading': 'იტვირთება დოკუმენტი...', // 'Loading document…'
  /** The description of the sync lock toast on the form view */
  'document-view.form-view.sync-lock-toast.description':
    'გთხოვთ, მოითმინოთ, სანამ დოკუმენტი დასინქრონდება. ეს ჩვეულებრივ ხდება დოკუმენტის გამოქვეყნებისთანავე და ამას არ უნდა დასჭირდეს რამდენიმე წამზე მეტი', // 'Please hold tight while the document is synced. This usually happens right after the document has been published, and it should not take more than a few seconds'
  /** The title of the sync lock toast on the form view */
  'document-view.form-view.sync-lock-toast.title': 'მიმდინარეობს დოკუმენტის სინქრონიზაცია…', // 'Syncing document…'

  /** The loading messaging for when the tooltip is still loading permission info */
  'insufficient-permissions-message-tooltip.loading-text': 'ჩატვირთვა', // 'Loading…'

  /** --- Menu items --- */
  /** The menu item group title to use for the Action menu items */
  'menu-item-groups.actions-group': 'მოქმედებები', // 'Actions'
  /** The menu item group title to use for the Layout menu items */
  'menu-item-groups.layout-group': 'განლაგება', // 'Layout'
  /** The menu item group title to use for the Sort menu items */
  'menu-item-groups.sorting-group': 'დახარისხებული', // 'Sort'

  /** The menu item title to use the compact view */
  'menu-items.layout.compact-view': 'მიჭყლეტილი ნახვა', // 'Compact view'
  /** The menu item title to use the detailed view */
  'menu-items.layout.detailed-view': 'დეტალური ნახვა', // 'Detailed view'
  /** The menu item title to Sort by Created */
  'menu-items.sort-by.created': 'დახარისხებული შექმნის მიხედვით', // 'Sort by Created'
  /** The menu item title to Sort by Last Edited */
  'menu-items.sort-by.last-edited': 'დახარისხებული სია ბოლო ცვლილებების მიხედვით', // 'Sort by Last Edited'

  /** The link text of the no document type screen that appears directly below the subtitle */
  'no-document-types-screen.link-text': 'ისწავლე როგორ დაამატო ახალი დოკუმენტი', // 'Learn how to add a document type →'
  /** The subtitle of the no document type screen that appears directly below the title */
  'no-document-types-screen.subtitle': 'გთხოვთ, განმარტოთ სულ ცოტა ერთი დოკუმენტი მაინც სქემაში', // 'Please define at least one document type in your schema.'
  /** The title of the no document type screen */
  'no-document-types-screen.title': 'არ არის დოკუმენტის ტიპები', // 'No document types'

  /** Text shown on back button visible on smaller breakpoints */
  'pane-header.back-button.text': 'უკან', // 'Back'
  /** tooltip text (via `title` attribute) for the menu button */
  'pane-header.context-menu-button.tooltip': 'მანახე მენიუ', // 'Show menu'
  /** Appears in a document list pane header if there are more than one option for create. This is the label for that menu */
  'pane-header.create-menu.label': 'შექმენი', // 'Create'
  /** Tooltip displayed on the create new button in document lists */
  'pane-header.create-new-button.tooltip': 'შექმენი ახალი დოკუმენტი', // 'Create new document'
  /** The `aria-label` for the disabled button in the pane header if create permissions are granted */
  'pane-header.disabled-created-button.aria-label': 'არასაკმარისი ნებართვები', // 'Insufficient permissions'

  /** The text shown in the tooltip of pane item previews of documents if there are unpublished edits */
  'pane-item.draft-status.has-draft.tooltip': 'გადაკეთებულია <RelativeTime/>', // 'Edited <RelativeTime/>'
  /** The text shown in the tooltip of pane item previews of documents if there are no unpublished edits */
  'pane-item.draft-status.no-draft.tooltip': 'არ არის გამოუქვეყნებელი ცვლილებები.', // 'No unpublished edits'
  /** The subtitle tor pane item previews if there isn't a matching schema type found */
  'pane-item.missing-schema-type.subtitle': 'Document: <Code>{{documentId}}</Code>', // 'Document: <Code>{{documentId}}</Code>'
  /** The title tor pane item previews if there isn't a matching schema type found */
  'pane-item.missing-schema-type.title':
    'სქემა არ არსებობს ამ ტიპისთვის : <Code>{{documentType}}</Code>', // 'No schema found for type <Code>{{documentType}}</Code>'
  /** The text shown in the tooltip of pane item previews of documents if there are unpublished edits */
  'pane-item.published-status.has-published.tooltip': 'გამოქვეყნებული <RelativeTime/>', // 'Published <RelativeTime/>'
  /** The text shown in the tooltip of pane item previews of documents if there are no unpublished edits */
  'pane-item.published-status.no-published.tooltip': 'არ არის გამოუქვეყნებელი ცვლილებები.', // 'No unpublished edits'

  /** The text used in the document header title if there is an error */
  'panes.document-header-title.error.text': 'შეცდომა: {{error}}', // 'Error: {{error}}'
  /** The text used in the document header title if creating a new item */
  'panes.document-header-title.new.text': 'ახალი {{schemaType}}', // 'New {{schemaType}}'
  /** The text used in the document header title if no other title can be determined */
  'panes.document-header-title.untitled.text': 'უსათაურო', // 'Untitled'
  /** The text for the retry button on the document list pane */
  'panes.document-list-pane.error.retry-button.text': 'კიდევ ერთხელ.', // 'Retry'
  /** The error text on the document list pane */
  'panes.document-list-pane.error.text': 'Error: <Code>{{error}}</Code>', // 'Error: <Code>{{error}}</Code>'
  /** The error title on the document list pane */
  'panes.document-list-pane.error.title': 'ვერ მოხერხდა სიის ნივთების მიღება.', // 'Could not fetch list items'
  /** The text of the document list pane if more than a maximum number of documents are returned */
  'panes.document-list-pane.max-items.text': 'Displaying a maximum of {{limit}} documents', // 'Displaying a maximum of {{limit}} documents'
  /** The text of the document list pane if no documents are found for a specified type */
  'panes.document-list-pane.no-documents-of-type.text': 'ამ ტიპის დოკუმენტი ალალი.', // 'No documents of this type'
  /** The text of the document list pane if no documents are found */
  'panes.document-list-pane.no-documents.text': 'ვერაფერი მოიძებნა', // 'No results found'
  /** The text of the document list pane if no documents are found matching specified criteria */
  'panes.document-list-pane.no-matching-documents.text': 'არ ემთხვევა დოკუმენტები', // 'No matching documents'
  /** The aria-label for the search input on the document list pane */
  'panes.document-list-pane.search-input.aria-label': 'სიის მოძებნა', // 'Search list'
  /** The search input for the search input on the document list pane */
  'panes.document-list-pane.search-input.placeholder': 'სიის მოძებნა', // 'Search list'
  /** The summary title when displaying an error for a document operation result */
  'panes.document-operation-results.error.summary.title': 'დეტალები', // 'Details'
  /** The text when a generic operation failed (fallback, generally not shown)  */
  'panes.document-operation-results.operation-error': 'რაღაც ერორი მოხდა', // 'An error occurred during {{context}}'
  /** The text when a delete operation failed  */
  'panes.document-operation-results.operation-error_delete':
    'რაღაც ერორი მხოდა სანამ იშლებოდა ეს დოკუმენტი. როგორც წესი ეს ნიშნავს იმას რომ აქ არსებობს სხვა დოკუმენტი რომელიც მიუთითებულია მასზე.', // 'An error occurred while attempting to delete this document. This usually means that there are other documents that refers to it.'
  /** The text when an unpublish operation failed  */
  'panes.document-operation-results.operation-error_unpublish':
    'რაღაც ერორი მოხდა დოკუმენტის გამოქვეყნებისას. როგორც წესი ეს ნიშნავს იმას რომ აქ არსებობს სხვა დოკუმენტი რომელიც მიუთითებულია მასზე.', // 'An error occurred while attempting to unpublish this document. This usually means that there are other documents that refers to it.'
  /** The text when a generic operation succeeded (fallback, generally not shown)  */
  'panes.document-operation-results.operation-success':
    'Successfully performed {{context}} on document', // 'Successfully performed {{context}} on document'
  /** The text when a delete operation succeeded  */
  'panes.document-operation-results.operation-success_delete': 'ეს დოკუმენტი წარმატებით წაიშალა.', // 'The document was successfully deleted'
  /** The text when a discard changes operation succeeded  */
  'panes.document-operation-results.operation-success_discardChanges':
    'ბოლო გამოქვეყნების შემდეგ ყველა ცვლილება ახლა გაუქმებულია. გაუქმებული მონახაზი კვლავ შეიძლება აღდგეს ისტორიიდან', // 'All changes since last publish has now been discarded. The discarded draft can still be recovered from history'
  /** The text when a publish operation succeeded  */
  'panes.document-operation-results.operation-success_publish':
    '<Strong>{{title}}</Strong> was published', // '<Strong>{{title}}</Strong> was published'
  /** The text when a restore operation succeeded  */
  'panes.document-operation-results.operation-success_restore':
    '<Strong>{{title}}</Strong> was restored', // '<Strong>{{title}}</Strong> was restored'
  /** The text when an unpublish operation succeeded  */
  'panes.document-operation-results.operation-success_unpublish':
    '<Strong>{{title}}</Strong> was unpublished. A draft has been created from the latest published version.', // '<Strong>{{title}}</Strong> was unpublished. A draft has been created from the latest published version.'
  /** The document title shown when document title is "undefined" in operation message */
  'panes.document-operation-results.operation-undefined-title': 'უსათაურო', // 'Untitled'
  /** The title of the reconnecting toast */
  'panes.document-pane-provider.reconnecting.title': 'კავშირი დაიკარგა, ხელახლადაკავშირება...', // 'Connection lost. Reconnecting…'
  /** The loading message for the document not found pane */
  'panes.document-pane.document-not-found.loading': 'დოკუმენტი იტვირთება', // 'Loading document…'
  /** The text of the document not found pane if the schema is known */
  'panes.document-pane.document-not-found.text':
    'he document type is not defined, and a document with the <Code>{{id}}</Code> identifier could not be found.', // 'The document type is not defined, and a document with the <Code>{{id}}</Code> identifier could not be found.'
  /** The title of the document not found pane if the schema is known */
  'panes.document-pane.document-not-found.title': 'დოკუმენტი ვერ ვიპოვნე.', // 'The document was not found'
  /** The text of the document not found pane if the schema is not found */
  'panes.document-pane.document-unknown-type.text':
    'This document has the schema type <Code>{{documentType}}</Code>, which is not defined as a type in the local content studio schema', // 'This document has the schema type <Code>{{documentType}}</Code>, which is not defined as a type in the local content studio schema.'
  /** The title of the document not found pane if the schema is not found or unknown */
  'panes.document-pane.document-unknown-type.title': 'უცნობი დოკუმენტის ტიპი', // 'Unknown document type: <Code>{{documentType}}</Code>'
  /** The title of the document not found pane if the schema is unknown */
  'panes.document-pane.document-unknown-type.without-schema.text':
    'ეს დოკუმენტი არ არსებობს და სქემის ტიპი არ იტო მითითებული მისთვის', // 'This document does not exist, and no schema type was specified for it.'
  /** Default message shown while resolving the structure definition for an asynchronous node */
  'panes.resolving.default-message': 'დალოდება', // 'Loading…'
  /** Message shown while resolving the structure definition for an asynchronous node and it is taking a while (more than 5s) */
  'panes.resolving.slow-resolve-message': 'ისევ ველოდები', // 'Still loading…'
  /** The text to display when type is missing */
  'panes.unknown-pane-type.missing-type.text':
    'Structure item is missing required <Code>type</Code> property.', // 'Structure item is missing required <Code>type</Code> property.'
  /** The title of the unknown pane */
  'panes.unknown-pane-type.title': 'პანელის უცნობი ტიპი. ', // 'Unknown pane type'
  /** The text to display when type is unknown */
  'panes.unknown-pane-type.unknown-type.text':
    'Structure item of type <Code>{{type}}</Code> is not a known entity.', // 'Structure item of type <Code>{{type}}</Code> is not a known entity.'

  /** The text for the "Open preview" action for a document */
  'production-preview.menu-item.title': 'გახსენი ესკიზი', // 'Open preview'

  /** Label for button when status is saved */
  'status-bar.document-status-pulse.status.saved.text': 'შენახულია', // 'Saved'
  /** Label for button when status is syncing */
  'status-bar.document-status-pulse.status.syncing.text': 'ინახება', // 'Saving...'
  /** Accessibility label indicating when the document was last published, in relative time, eg "3 weeks ago" */
  'status-bar.publish-status-button.last-published-time.aria-label': 'ბოლოს გამოქვეყნდა', // 'Last published {{relativeTime}}'
  /** Text for tooltip showing explanation of timestamp/relative time, eg "Last published <RelativeTime/>" */
  'status-bar.publish-status-button.last-published-time.tooltip': 'ბოლოს გამოქვეყნდა', // 'Last published <RelativeTime/>'
  /** Accessibility label indicating when the document was last updated, in relative time, eg "2 hours ago" */
  'status-bar.publish-status-button.last-updated-time.aria-label': 'ბოლო განახლება', // 'Last updated {{relativeTime}}'
  /** Text for tooltip showing explanation of timestamp/relative time, eg "Last updated <RelativeTime/>" */
  'status-bar.publish-status-button.last-updated-time.tooltip': 'ბოლო განახლება', // 'Last updated <RelativeTime/>'
  /** Aria label for the button */
  'status-bar.review-changes-button.aria-label': 'ცვლილებების მიმოხილვა', // 'Review changes'
  /** Label for button when status is saved */
  'status-bar.review-changes-button.status.saved.text': 'შენახულია!', // 'Saved!'
  /** Label for button when status is syncing */
  'status-bar.review-changes-button.status.syncing.text': 'ინახება...', // 'Saving...'
  /** Text for the secondary text for tooltip for the button */
  'status-bar.review-changes-button.tooltip.changes-saved': 'ცვლილებები შენახულია', // 'Changes saved'
  /** Primary text for tooltip for the button */
  'status-bar.review-changes-button.tooltip.text': 'ცვლილებების მიმოხილვა', // 'Review changes'

  /** The text that appears in side the documentation link */
  'structure-error.docs-link.text': 'ნახე დოკუმენტაცია', // 'View documentation'
  /** Labels the error message or error stack of the structure error screen */
  'structure-error.error.label': 'შეცდომა', // 'Error'
  /** The header that appears at the top of the error screen */
  'structure-error.header.text': 'სტრუქტურის წაკითხვისას წარმოიშვა შეცდომა', // 'Encountered an error while reading structure'
  /** The text in the reload button to retry rendering the structure */
  'structure-error.reload-button.text': 'ხელახლა ჩატვირთვა', // 'Reload'
  /** Labels the structure path of the structure error screen */
  'structure-error.structure-path.label': 'შეადგინე მისამართი', // 'Structure path'
})
