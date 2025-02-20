import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Label for the "Copy Document URL" document action */
  'action.copy-document-url.label': 'დოკუმენტის URL-ის კოპირება',
  /** Tooltip when action button is disabled because the operation is not ready   */
  'action.delete.disabled.not-ready': 'ოპერაცია არ არის მზად',
  /** Tooltip when action button is disabled because the document does not exist */
  'action.delete.disabled.nothing-to-delete': 'ეს დოკუმენტი ჯერ არ არსებობს ან უკვე წაშლილია',
  /** Label for the "Delete" document action button */
  'action.delete.label': 'წაშლა',
  /** Label for the "Delete" document action while the document is being deleted */
  'action.delete.running.label': 'წაშლა…',
  /** Message prompting the user to confirm discarding changes */
  'action.discard-changes.confirm-dialog.confirm-discard-changes':
    'დარწმუნებული ხართ, რომ გსურთ ყველა ცვლილებათა გაუქმება ბოლო გამოცემიდან?',
  /** Tooltip when action is disabled because the document has no unpublished changes */
  'action.discard-changes.disabled.no-change': 'ეს დოკუმენტი არ აქვს გამოუშვებელი ცვლილებები',
  /** Tooltip when action is disabled because the document is not published */
  'action.discard-changes.disabled.not-published': 'ეს დოკუმენტი არ არის გამოცემული',
  /** Tooltip when action button is disabled because the operation is not ready   */
  'action.discard-changes.disabled.not-ready': 'ოპერაცია არ არის მზად',
  /** Label for the "Discard changes" document action */
  'action.discard-changes.label': 'ცვლილებების უარყოფა',
  /** Tooltip when action is disabled because the operation is not ready   */
  'action.duplicate.disabled.not-ready': 'ოპერაცია არ არის მზად',
  /** Tooltip when action is disabled because the document doesn't exist */
  'action.duplicate.disabled.nothing-to-duplicate':
    'ეს დოკუმენტი ჯერ არ არსებობს, ამიტომ არაფერია დუბლირება',
  /** Label for the "Duplicate" document action */
  'action.duplicate.label': 'დუბლირება',
  /** Label for the "Duplicate" document action while the document is being duplicated */
  'action.duplicate.running.label': 'დუბლირება…',
  /** Tooltip when publish button is disabled because the document is already published, and published time is unavailable.*/
  'action.publish.already-published.no-time-ago.tooltip': 'უკვე გამოცემულია',
  /** Tooltip when publish button is disabled because the document is already published.*/
  'action.publish.already-published.tooltip': 'გამოცემულია {{timeSincePublished}} წინ',
  /** Tooltip when action is disabled because the studio is not ready.*/
  'action.publish.disabled.not-ready': 'ოპერაცია არ არის მზად',
  /** Label for action when there are pending changes.*/
  'action.publish.draft.label': 'გამოცემა',
  /** Label for the "Publish" document action when the document has live edit enabled.*/
  'action.publish.live-edit.label': 'გამოცემა',
  /** Fallback tooltip for the "Publish" document action when publish is invoked for a document with live edit enabled.*/
  'action.publish.live-edit.publish-disabled':
    'ვერ ხდება გამოცემა, რადგან ეს დოკუმენტის ტიპისთვის ჩართულია Live Edit',
  /** Tooltip for the "Publish" document action when the document has live edit enabled.*/
  'action.publish.live-edit.tooltip':
    'ეს ტიპის კონტენტისთვის ჩართულია Live Edit და გამოცემა ავტომატურად ხდება, როგორც ცვლილებებს აკეთებთ',
  /** Tooltip when publish button is disabled because there are no changes.*/
  'action.publish.no-changes.tooltip': 'არ არის გამოუშვებელი ცვლილებები',
  /** Label for the "Publish" document action when there are no changes.*/
  'action.publish.published.label': 'გამოცემულია',
  /** Label for the "Publish" document action while publish is being executed.*/
  'action.publish.running.label': 'გამოცემა…',
  /** Tooltip when the "Publish" document action is disabled due to validation issues */
  'action.publish.validation-issues.tooltip':
    'არის ვალიდაციის შეცდომები, რომლებიც უნდა გასწორდეს, სანამ ეს დოკუმენტი გამოიცემა',
  /** Tooltip when publish button is waiting for validation and async tasks to complete.*/
  'action.publish.waiting': 'ველოდებით დავალებების დასრულებას გამოცემამდე',
  /** Message prompting the user to confirm that they want to restore to an earlier revision*/
  'action.restore.confirm.message': 'დარწმუნებული ხართ, რომ გსურთ ამ დოკუმენტის აღდგენა?',
  /** Fallback tooltip for when user is looking at the initial revision */
  'action.restore.disabled.cannot-restore-initial': 'თქვენ ვერ აღადგენთ საწყის ვერსიას',
  /** Label for the "Restore" document action */
  'action.restore.label': 'აღდგენა',
  /** Default tooltip for the action */
  'action.restore.tooltip': 'აღადგინეთ ამ ვერსიამდე',
  /** Tooltip when action is disabled because the document is not already published */
  'action.unpublish.disabled.not-published': 'ეს დოკუმენტი არ არის გამოქვეყნებული',
  /** Tooltip when action is disabled because the operation is not ready   */
  'action.unpublish.disabled.not-ready': 'ოპერაცია ჯერ არ არის მზად',
  /** Label for the "Unpublish" document action */
  'action.unpublish.label': 'გამოქვეყნების შეწყვეტა',
  /** Fallback tooltip for the Unpublish document action when publish is invoked for a document with live edit enabled.*/
  'action.unpublish.live-edit.disabled':
    'ეს დოკუმენტი აქვს ცოცხალი რედაქტირება ჩართული და ვერ შეწყდება გამოქვეყნება',

  /** Description for the archived release banner, rendered when viewing the history of a version document from the publihed view */
  'banners.archived-release.description':
    'თქვენ ნახულობთ მხოლოდ წაკითხვის დოკუმენტს, რომელიც არქივდა <VersionBadge>{{title}}</VersionBadge> რელიზის ნაწილად. იგი ვერ შეიცვლება',
  /** The text for the restore button on the deleted document banner */
  'banners.deleted-document-banner.restore-button.text': 'აღადგინეთ უახლესი ვერსია',
  /** The text content for the deleted document banner */
  'banners.deleted-document-banner.text': 'ეს დოკუმენტი წაშლილია.',
  /** The text content for the deprecated document type banner */
  'banners.deprecated-document-type-banner.text': 'ეს დოკუმენტის ტიპი გაუქმებულია.',
  /** The text for publish action for discarding the version */
  'banners.live-edit-draft-banner.discard.tooltip': 'მონახაზის უარყოფა',
  /** The text for publish action for the draft banner */
  'banners.live-edit-draft-banner.publish.tooltip': 'გამოაქვეყნეთ რედაქტირების გაგრძელებად',
  /** The text content for the live edit document when it's a draft */
  'banners.live-edit-draft-banner.text':
    'ტიპი <strong>{{schemaType}}</strong> აქვს <code>liveEdit</code> ჩართული, თუმცა ამ დოკუმენტის მონახაზი არსებობს. გამოაქვეყნეთ ან უარყეთ მონახაზი რედაქტირების გაგრძელებად.',
  /** The text for the permission check banner if the user only has one role, and it does not allow publishing this document */
  'banners.permission-check-banner.missing-permission_create_one':
    'თქვენი როლი <Roles/> არ აქვს უფლება შექმნას ეს დოკუმენტი.',
  /** The text for the permission check banner if the user only has multiple roles, but they do not allow publishing this document */
  'banners.permission-check-banner.missing-permission_create_other':
    'თქვენი როლები <Roles/> არ აქვთ უფლება შექმნას ეს დოკუმენტი.',
  /** The text for the permission check banner if the user only has one role, and it does not allow editing this document */
  'banners.permission-check-banner.missing-permission_update_one':
    'თქვენი როლი <Roles/> არ აქვს უფლება განახლებას ამ დოკუმენტში.',
  /** The text for the permission check banner if the user only has multiple roles, but they do not allow editing this document */
  'banners.permission-check-banner.missing-permission_update_other':
    'თქვენი როლები <Roles/> არ აქვთ უფლება განახლებას ამ დოკუმენტში.',
  /** The pending text for the request permission button that appears for viewer roles */
  'banners.permission-check-banner.request-permission-button.sent':
    'რედაქტორის მოთხოვნა გაგზავნილია',
  /** The text for the request permission button that appears for viewer roles */
  'banners.permission-check-banner.request-permission-button.text': 'მოითხოვეთ რედაქტირების უფლება',
  /** Description for the archived release banner, rendered when viewing the history of a version document from the published view */
  'banners.published-release.description':
    'თქვენ ნახულობთ მხოლოდ წაკითხვის დოკუმენტს, რომელიც გამოქვეყნდა <VersionBadge>{{title}}</VersionBadge> რელიზის ნაწილად. იგი ვერ შეიცვლება',
  /** The text for the reload button */
  'banners.reference-changed-banner.reason-changed.reload-button.text': 'რეფერენციის ჩატვირთვა',
  /** The text for the reference change banner if the reason is that the reference has been changed */
  'banners.reference-changed-banner.reason-changed.text':
    'ეს რეფერენცია შეიცვალა თქვენი გახსნის შემდეგ.',
  /** The text for the close button */
  'banners.reference-changed-banner.reason-removed.close-button.text': 'რეფერენციის დახურვა',
  /** The text for the reference change banner if the reason is that the reference has been deleted */
  'banners.reference-changed-banner.reason-removed.text':
    'ეს რეფერენცია წაშლილია თქვენი გახსნის შემდეგ.',
  /** The text that appears for the action button to add the current document to the global release */
  'banners.release.action.add-to-release': 'დაამატეთ რელიზს',
  /** The text for the banner that appears when a document is not in the current global release */
  'banners.release.not-in-release': 'არ არის <VersionBadge>{{title}}</VersionBadge> რელიზში.',
  /** The text content for the unpublished document banner when is part of a release */
  'banners.unpublished-release-banner.text':
    'ეს დოკუმენტი გამოქვეყნდება <VersionBadge>{{title}}</VersionBadge> რელიზის ნაწილად',

  /** Browser/tab title when creating a new document of a given type */
  'browser-document-title.new-document': 'ახალი {{schemaType}}',
  /** Browser/tab title when editing a document where the title cannot be resolved from preview configuration */
  'browser-document-title.untitled-document': 'უსათაურო',

  /** The action menu button aria-label */
  'buttons.action-menu-button.aria-label': 'დოკუმენტის ქმედებების გახსნა',
  /** The action menu button tooltip */
  'buttons.action-menu-button.tooltip': 'დოკუმენტის ქმედებები',
  /** The aria-label for the split pane button on the document panel header */
  'buttons.split-pane-button.aria-label': 'გაყოფა ფანჯარა მარჯვნივ',
  /** The tool tip for the split pane button on the document panel header */
  'buttons.split-pane-button.tooltip': 'გაყოფა ფანჯარა მარჯვნივ',
  /** The title for the close button on the split pane on the document panel header */
  'buttons.split-pane-close-button.title': 'დახურვა გაყოფილი ფანჯრის',
  /** The title for the close group button on the split pane on the document panel header */
  'buttons.split-pane-close-group-button.title': 'დახურვა ფანჯრის ჯგუფის',

  /** The label used in the changes inspector for the from selector */
  'changes.from.label': 'დან',
  /* The label for the history tab in the changes inspector*/
  'changes.tab.history': 'ისტორია',
  /* The label for the review tab in the changes inspector*/
  'changes.tab.review-changes': 'ცვლილებების გადახედვა',
  /** The label used in the changes inspector for the to selector */
  'changes.to.label': 'მდე',

  /** The text in the "Cancel" button in the confirm delete dialog that cancels the action and closes the dialog */
  'confirm-delete-dialog.cancel-button.text': 'გაუქმება',
  /** Used in `confirm-delete-dialog.cdr-summary.title` */
  'confirm-delete-dialog.cdr-summary.document-count_one': '1 დოკუმენტი',
  /** Used in `confirm-delete-dialog.cdr-summary.title` */
  'confirm-delete-dialog.cdr-summary.document-count_other': '{{count}} დოკუმენტი',
  /** The text that appears in the subtitle `<summary>` that lists the datasets below the title */
  'confirm-delete-dialog.cdr-summary.subtitle_one': 'დატასეტი: {{datasets}}',
  /** The text that appears in the subtitle `<summary>` that lists the datasets below the title */
  'confirm-delete-dialog.cdr-summary.subtitle_other': 'დატასეტები: {{datasets}}',
  /** The text that appears in the subtitle `<summary>` that lists the datasets below the title */
  'confirm-delete-dialog.cdr-summary.subtitle_unavailable_one': 'მიუწვდომელი დატასეტი',
  /** The text that appears in the subtitle `<summary>` that lists the datasets below the title */
  'confirm-delete-dialog.cdr-summary.subtitle_unavailable_other': 'მიუწვდომელი დატასეტები',
  /** The text that appears in the title `<summary>` that includes the list of CDRs (singular) */
  'confirm-delete-dialog.cdr-summary.title_one': '{{documentCount}} სხვა დატასეტში',
  /** The text that appears in the title `<summary>` that includes the list of CDRs (plural) */
  'confirm-delete-dialog.cdr-summary.title_other': '{{documentCount}} {{count}} დატასეტში',
  /** Appears when hovering over the copy button to copy */
  'confirm-delete-dialog.cdr-table.copy-id-button.tooltip': 'ID-ის კოპირება ბუფერში',
  /** The header for the dataset column in the list of cross-dataset references found */
  'confirm-delete-dialog.cdr-table.dataset.label': 'დატასეტი',
  /** The header for the document ID column in the list of cross-dataset references found */
  'confirm-delete-dialog.cdr-table.document-id.label': 'დოკუმენტის ID',
  /** The toast title when the copy button has been clicked */
  'confirm-delete-dialog.cdr-table.id-copied-toast.title': 'დოკუმენტის ID კოპირებულია ბუფერში!',
  /** The toast title when the copy button has been clicked but copying failed */
  'confirm-delete-dialog.cdr-table.id-copied-toast.title-failed':
    'დოკუმენტის ID-ის კოპირება ჩაიშალა',
  /** The header for the project ID column in the list of cross-dataset references found */
  'confirm-delete-dialog.cdr-table.project-id.label': 'პროექტის ID',
  /** The text in the "Delete anyway" button in the confirm delete dialog that confirms the action */
  'confirm-delete-dialog.confirm-anyway-button.text_delete': 'წაშლა მაინც',
  /** The text in the "Unpublish anyway" button in the confirm delete dialog that confirms the action */
  'confirm-delete-dialog.confirm-anyway-button.text_unpublish': 'გაუქმება მაინც',
  /** The text in the "Delete now" button in the confirm delete dialog that confirms the action */
  'confirm-delete-dialog.confirm-button.text_delete': 'წაშლა ახლავე',
  /** The text in the "Unpublish now" button in the confirm delete dialog that confirms the action */
  'confirm-delete-dialog.confirm-button.text_unpublish': 'გაუქმება ახლავე',
  /** If no referring documents are found, this text appears above the cancel and confirmation buttons */
  'confirm-delete-dialog.confirmation.text_delete':
    'დარწმუნებული ხართ, რომ გსურთ „<DocumentTitle/>“-ის წაშლა?',
  /** If no referring documents are found, this text appears above the cancel and confirmation buttons */
  'confirm-delete-dialog.confirmation.text_unpublish':
    'დარწმუნებული ხართ, რომ გსურთ „<DocumentTitle/>“-ის გაუქმება?',
  /** The text body of the error dialog. */
  'confirm-delete-dialog.error.message.text':
    'მიმართულების დოკუმენტების ჩატვირთვისას მოხდა შეცდომა.',
  /** The text in the retry button of the confirm delete dialog if an error occurred. */
  'confirm-delete-dialog.error.retry-button.text': 'სცადეთ თავიდან',
  /** The header of the confirm delete dialog if an error occurred while the confirm delete dialog was open. */
  'confirm-delete-dialog.error.title.text': 'შეცდომა',
  /** The header of the confirm delete dialog */
  'confirm-delete-dialog.header.text_delete': 'დოკუმენტის წაშლა?',
  /** The header of the confirm delete dialog */
  'confirm-delete-dialog.header.text_unpublish': 'დოკუმენტის გამოქვეყნების შეწყვეტა?',
  /** The text that appears while the referring documents are queried */
  'confirm-delete-dialog.loading.text': 'მიმართულების დოკუმენტების ძიება…',
  /** Shown if there are references to other documents but the user does not have the permission to see the relevant document IDs */
  'confirm-delete-dialog.other-reference-count.title_one': '1 სხვა მიმართულება არ ჩანს',
  /** Shown if there are references to other documents but the user does not have the permission to see the relevant document IDs */
  'confirm-delete-dialog.other-reference-count.title_other': '{{count}} სხვა მიმართულება არ ჩანს',
  /** Text in the tooltip of this component if hovering over the info icon */
  'confirm-delete-dialog.other-reference-count.tooltip':
    'ჩვენ ვერ ვაჩვენებთ ამ მიმართულებების მეტადატებს, რადგან შესაბამისი დატასეტებისთვის აკლია წვდომის ტოკენი.',
  /** Appears when unable to render a document preview in the referring document list */
  'confirm-delete-dialog.preview-item.preview-unavailable.subtitle': 'ID: {{documentId}}',
  /** Appears when unable to render a document preview in the referring document list */
  'confirm-delete-dialog.preview-item.preview-unavailable.title':
    'წინასწარმედეგება არ არის მისაწვდომი',
  /** Warns the user of affects to other documents if the action is confirmed (delete) */
  'confirm-delete-dialog.referential-integrity-disclaimer.text_delete':
    'თუ წაშლით ამ დოკუმენტს, მასზე მიმართულების დოკუმენტებს ვეღარ შეეძლებათ მისი წვდომა.',
  /** Warns the user of affects to other documents if the action is confirmed (unpublish) */
  'confirm-delete-dialog.referential-integrity-disclaimer.text_unpublish':
    'თუ შეწყვეტთ ამ დოკუმენტის გამოქვეყნებას, მასზე მიმართულების დოკუმენტებს ვეღარ შეეძლებათ მისი წვდომა.',
  /** Tells the user the count of how many other referring documents there are before listing them. (singular) */
  'confirm-delete-dialog.referring-document-count.text_one':
    '1 დოკუმენტი მიმართულებს “<DocumentTitle/>”',
  /** Tells the user the count of how many other referring documents there are before listing them. (plural) */
  'confirm-delete-dialog.referring-document-count.text_other':
    '{{count}} დოკუმენტი მიმართულებს “<DocumentTitle/>”',
  /** Describes the list of documents that refer to the one trying to be deleted (delete) */
  'confirm-delete-dialog.referring-documents-descriptor.text_delete':
    'შესაძლოა ვერ შეძლოთ “<DocumentTitle/>” წაშლა, რადგან შემდეგი დოკუმენტები მიმართულებენ მას:',
  /** Describes the list of documents that refer to the one trying to be deleted (unpublish) */
  'confirm-delete-dialog.referring-documents-descriptor.text_unpublish':
    'შესაძლოა ვერ შეძლოთ “<DocumentTitle/>” გამოქვეყნების შეწყვეტა, რადგან შემდეგი დოკუმენტები მიმართულებენ მას:',

  /** The text for the cancel button in the confirm dialog used in document action shortcuts if none is provided */
  'confirm-dialog.cancel-button.fallback-text': 'გაუქმება',
  /** The text for the confirm button in the confirm dialog used in document action shortcuts if none is provided */
  'confirm-dialog.confirm-button.fallback-text': 'დადასტურება',

  /** For the default structure definition, the title for the "Content" pane */
  'default-definition.content-title': 'კონტენტი',

  /** The text shown if there was an error while getting the document's title via a preview value */
  'doc-title.error.text': 'შეცდომა: {{errorMessage}}',
  /** The text shown if the preview value for a document is non-existent or empty */
  'doc-title.fallback.text': 'დაუსახელებელი',
  /** The text shown if a document's title via a preview value cannot be determined due to an unknown schema type */
  'doc-title.unknown-schema-type.text': 'უცნობი სქემის ტიპი: {{schemaType}}',

  /** Tooltip text shown for the close button of the document inspector */
  'document-inspector.close-button.tooltip': 'დახურვა',
  /** The title shown in the dialog header, when inspecting a valid document */
  'document-inspector.dialog.title': 'შემოწმება <DocumentTitle/>',
  /** The title shown in the dialog header, when the document being inspected is not created yet/has no value */
  'document-inspector.dialog.title-no-value': 'არაფერის მქონე',
  /** Title shown for menu item that opens the "Inspect" dialog */
  'document-inspector.menu-item.title': 'შემოწმება',
  /** the placeholder text for the search input on the inspect dialog */
  'document-inspector.search.placeholder': 'ძებნა',
  /** The "parsed" view mode, meaning the JSON is searchable, collapsible etc */
  'document-inspector.view-mode.parsed': 'განმარტებული',
  /** The "raw" view mode, meaning the JSON is presented syntax-highlighted, but with no other features - optimal for copying */
  'document-inspector.view-mode.raw-json': 'მუშარი JSON',

  /** The text for when a form is hidden */
  'document-view.form-view.form-hidden': 'ეს ფორმა დამალულია',
  /** Fallback title shown when a form title is not provided */
  'document-view.form-view.form-title-fallback': 'უსათაურო',
  /** The text for when the form view is loading a document */
  'document-view.form-view.loading': 'დოკუმენტის ჩატვირთვა…',
  /** The description of the sync lock toast on the form view */
  'document-view.form-view.sync-lock-toast.description':
    'გთხოვთ, დაელოდოთ, სანამ დოკუმენტი სინქრონიზდება. ეს ხშირად ხდება მაშინ, როცა დოკუმენტი გამოქვეყნდება, და არ უნდა მიიღოს მეტი, ვიდრე რამდენიმე წამი',
  /** The title of the sync lock toast on the form view */
  'document-view.form-view.sync-lock-toast.title': 'დოკუმენტის სინქრონიზაცია…',

  /**The title for the menu items that will be shown when expanding a publish release event to inspect the document */
  'events.inspect.release': 'შეამოწმეთ <VersionBadge>{{releaseTitle}}</VersionBadge> დოკუმენტი',
  /**The title for the menu items that will be shown when expanding a publish draft event to inspect the draft document*/
  'events.open.draft': 'გახსენით <VersionBadge>draft</VersionBadge> დოკუმენტი',
  /**The title for the menu items that will be shown when expanding a publish release event to inspect the release*/
  'events.open.release': 'გახსენით <VersionBadge>{{releaseTitle}}</VersionBadge> რელიზი',

  /** The loading messaging for when the tooltip is still loading permission info */
  'insufficient-permissions-message-tooltip.loading-text': 'ჩატვირთვა…',

  /** --- Menu items --- */
  /** The menu item group title to use for the Action menu items */
  'menu-item-groups.actions-group': 'ქმედებები',
  /** The menu item group title to use for the Layout menu items */
  'menu-item-groups.layout-group': 'განლაგება',
  /** The menu item group title to use for the Sort menu items */
  'menu-item-groups.sorting-group': 'დალაგება',

  /** The menu item title to use the compact view */
  'menu-items.layout.compact-view': 'კომპაქტური ხედვა',
  /** The menu item title to use the detailed view */
  'menu-items.layout.detailed-view': 'დეტალური ხედვა',
  /** The menu item title to Sort by Created */
  'menu-items.sort-by.created': 'დალაგება შექმნის თარიღით',
  /** The menu item title to Sort by Last Edited */
  'menu-items.sort-by.last-edited': 'დალაგება ბოლოს რედაქტირებულით',

  /** The link text of the no document type screen that appears directly below the subtitle */
  'no-document-types-screen.link-text': 'გაიგეთ, როგორ დაამატოთ დოკუმენტის ტიპი →',
  /** The subtitle of the no document type screen that appears directly below the title */
  'no-document-types-screen.subtitle': 'გთხოვთ, განსაზღვრეთ სქემაში მინიმუმ ერთი დოკუმენტის ტიპი.',
  /** The title of the no document type screen */
  'no-document-types-screen.title': 'დოკუმენტის ტიპები არ არის',

  /** Text shown on back button visible on smaller breakpoints */
  'pane-header.back-button.text': 'უკან',
  /** tooltip text (via `title` attribute) for the menu button */
  'pane-header.context-menu-button.tooltip': 'მენიუს ჩვენება',
  /** Appears in a document list pane header if there are more than one option for create. This is the label for that menu */
  'pane-header.create-menu.label': 'შექმნა',
  /** Tooltip displayed on the create new button in document lists */
  'pane-header.create-new-button.tooltip': 'ახალი დოკუმენტის შექმნა',
  /** The `aria-label` for the disabled button in the pane header if create permissions are granted */
  'pane-header.disabled-created-button.aria-label': 'არასაკმაო უფლებები',

  /** The text shown in the tooltip of pane item previews of documents if there are unpublished edits */
  'pane-item.draft-status.has-draft.tooltip': 'რედაქტირებულია <RelativeTime/>',
  /** The text shown in the tooltip of pane item previews of documents if there are no unpublished edits */
  'pane-item.draft-status.no-draft.tooltip': 'გამოუშვებელი რედაქტირებები არ არის',
  /** The subtitle tor pane item previews if there isn't a matching schema type found */
  'pane-item.missing-schema-type.subtitle': 'დოკუმენტი: <Code>{{documentId}}</Code>',
  /** The title tor pane item previews if there isn't a matching schema type found */
  'pane-item.missing-schema-type.title':
    'სქემა ვერ მოიძებნა ტიპისთვის <Code>{{documentType}}</Code>',
  /** The text shown in the tooltip of pane item previews of documents if there are unpublished edits */
  'pane-item.published-status.has-published.tooltip': 'გამოქვეყნებულია <RelativeTime/>',
  /** The text shown in the tooltip of pane item previews of documents if there are no unpublished edits */
  'pane-item.published-status.no-published.tooltip': 'გამოუქვეყნებელი რედაქციები არ არის',

  /** The text used in the document header title if there is an error */
  'panes.document-header-title.error.text': 'შეცდომა: {{error}}',
  /** The text used in the document header title if creating a new item */
  'panes.document-header-title.new.text': 'ახალი {{schemaType}}',
  /** The text used in the document header title if no other title can be determined */
  'panes.document-header-title.untitled.text': 'უსათაურო',
  /** The error text on the document list pane */
  'panes.document-list-pane.error.text': 'შეცდომა: <Code>{{error}}</Code>',
  /** The error title on the document list pane */
  'panes.document-list-pane.error.title': 'სიის ელემენტების მიღება ვერ მოხერხდა',
  /** The text of the document list pane if more than a maximum number of documents are returned */
  'panes.document-list-pane.max-items.text': 'ნაჩვენებია მაქსიმუმ {{limit}} დოკუმენტი',
  /** The text of the document list pane if no documents are found for a specified type */
  'panes.document-list-pane.no-documents-of-type.text': 'ამ ტიპის დოკუმენტები არ არის',
  /** The text of the document list pane if no documents are found */
  'panes.document-list-pane.no-documents.text': 'შედეგები ვერ მოიძებნა',
  /** The text of the document list pane if no documents are found matching specified criteria */
  'panes.document-list-pane.no-matching-documents.text': 'დოკუმენტები არ მოიძებნა',
  /** The aria-label for the search input on the document list pane */
  'panes.document-list-pane.search-input.aria-label': 'სიის ძიება',
  /** The search input for the search input on the document list pane */
  'panes.document-list-pane.search-input.placeholder': 'სიის ძიება',
  /** The summary title when displaying an error for a document operation result */
  'panes.document-operation-results.error.summary.title': 'დეტალები',
  /** The text when a generic operation failed (fallback, generally not shown)  */
  'panes.document-operation-results.operation-error': 'შეცდომა მოხდა {{context}}-ის დროს',
  /** The text when a delete operation failed  */
  'panes.document-operation-results.operation-error_delete':
    'შეცდომა მოხდა დოკუმენტის წაშლისას. ეს ჩვეულებრივ ნიშნავს, რომ სხვა დოკუმენტები მიუთითებენ მას.',
  /** The text when an unpublish operation failed  */
  'panes.document-operation-results.operation-error_unpublish':
    'შეცდომა მოხდა დოკუმენტის გამოქვეყნებისას. ეს ჩვეულებრივ ნიშნავს, რომ სხვა დოკუმენტები მიუთითებენ მას.',
  /** The text when a generic operation succeeded (fallback, generally not shown)  */
  'panes.document-operation-results.operation-success':
    'წარმატებით შესრულდა {{context}} დოკუმენტზე',
  /** The text when copy URL operation succeeded  */
  'panes.document-operation-results.operation-success_copy-url': 'დოკუმენტის URL დაკოპირდა ბუფერში',
  /**  */
  'panes.document-operation-results.operation-success_createVersion':
    '<Strong>{{title}}</Strong> დაემატა რელიზს',
  /** The text when a delete operation succeeded  */
  'panes.document-operation-results.operation-success_delete': 'დოკუმენტი წარმატებით წაიშალა',
  /** The text when a discard changes operation succeeded  */
  'panes.document-operation-results.operation-success_discardChanges':
    'ყველა ცვლილება ბოლო გამოქვეყნებიდან ახლა გაუქმდა. გაუქმებული ჩანაწერი კვლავ აღდგენილი შეიძლება ისტორიიდან',
  /** The text when a duplicate operation succeeded  */
  'panes.document-operation-results.operation-success_duplicate': 'დოკუმენტი წარმატებით დუბლირდა',
  /** The text when a publish operation succeeded  */
  'panes.document-operation-results.operation-success_publish':
    '<Strong>{{title}}</Strong> გამოქვეყნდა',
  /** The text when a restore operation succeeded  */
  'panes.document-operation-results.operation-success_restore': '<Strong>{{title}}</Strong> აღდგა',
  /** The text when an unpublish operation succeeded  */
  'panes.document-operation-results.operation-success_unpublish':
    '<Strong>{{title}}</Strong> გაუქმებულია. ბოლო გამოქვეყნებულ ვერსიიდან შეიქმნა დრაფტი.',
  /** The document title shown when document title is "undefined" in operation message */
  'panes.document-operation-results.operation-undefined-title': 'უსათაურო',
  /** The title of the reconnecting toast */
  'panes.document-pane-provider.reconnecting.title': 'კავშირი დაიკარგა. ხელახლა შეერთება…',
  /** The loading message for the document not found pane */
  'panes.document-pane.document-not-found.loading': 'დოკუმენტის ჩატვირთვა…',
  /** The text of the document not found pane if the schema is known */
  'panes.document-pane.document-not-found.text':
    'დოკუმენტის ტიპი არ არის განსაზღვრული, და დოკუმენტი <Code>{{id}}</Code> იდენტიფიკატორით ვერ მოიძებნა.',
  /** The title of the document not found pane if the schema is known */
  'panes.document-pane.document-not-found.title': 'დოკუმენტი ვერ მოიძებნა',
  /** The text of the document not found pane if the schema is not found */
  'panes.document-pane.document-unknown-type.text':
    'ამ დოკუმენტს აქვს სქემის ტიპი <Code>{{documentType}}</Code>, რომელიც არ არის განსაზღვრული ტიპი ლოკალურ კონტენტის სტუდიის სქემაში.',
  /** The title of the document not found pane if the schema is not found or unknown */
  'panes.document-pane.document-unknown-type.title':
    'უცნობი დოკუმენტის ტიპი: <Code>{{documentType}}</Code>',
  /** The title of the document not found pane if the schema is unknown */
  'panes.document-pane.document-unknown-type.without-schema.text':
    'ეს დოკუმენტი არ არსებობს, და მასთვის არ იყო განსაზღვრული სქემის ტიპი.',
  /** Default message shown while resolving the structure definition for an asynchronous node */
  'panes.resolving.default-message': 'ჩატვირთვა…',
  /** Message shown while resolving the structure definition for an asynchronous node and it is taking a while (more than 5s) */
  'panes.resolving.slow-resolve-message': 'ჯერ კიდევ იტვირთება…',
  /** The text to display when type is missing */
  'panes.unknown-pane-type.missing-type.text':
    'სტრუქტურის ელემენტს აკლია საჭირო <Code>type</Code> თვისება.',
  /** The title of the unknown pane */
  'panes.unknown-pane-type.title': 'უცნობი ფანჯრის ტიპი',
  /** The text to display when type is unknown */
  'panes.unknown-pane-type.unknown-type.text':
    'სტრუქტურის ელემენტის ტიპი <Code>{{type}}</Code> არ არის ცნობილი ენტიტეტი.',

  /** The text for the "Open preview" action for a document */
  'production-preview.menu-item.title': 'გახსნა პრევიუში',

  /** The text for the confirm button in the request permission dialog used in the permissions banner */
  'request-permission-dialog.confirm-button.text': 'გაგზავნას მოთხოვნა',
  /** The description text for the request permission dialog used in the permissions banner */
  'request-permission-dialog.description.text':
    'თქვენი მოთხოვნა გაიგზავნება პროექტის ადმინისტრატორ(ებ)ს. თუ გსურთ, შეგიძლიათ ასევე დაურთოთ შენიშვნა',
  /** The header/title for the request permission dialog used in the permissions banner */
  'request-permission-dialog.header.text': 'მოითხოვეთ რედაქტირების უფლება',
  /** The text describing the note input for the request permission dialog used in the permissions banner */
  'request-permission-dialog.note-input.description.text': 'თუ გსურთ, შეგიძლიათ დაურთოთ შენიშვნა',
  /** The placeholder for the note input in the request permission dialog used in the permissions banner */
  'request-permission-dialog.note-input.placeholder.text': 'დაამატეთ შენიშვნა...',
  /** The error/warning text in the request permission dialog when the user's request has been declined */
  'request-permission-dialog.warning.denied.text':
    'თქვენი მოთხოვნა ამ პროექტში წვდომისთვის უარყოფილია.',
  /** The error/warning text in the request permission dialog when the user's request has been denied due to too many outstanding requests */
  'request-permission-dialog.warning.limit-reached.text':
    'თქვენ მიაღწიეთ როლების მოთხოვნების ლიმიტს ყველა პროექტში. გთხოვთ, დაელოდოთ მეტი მოთხოვნის გაგზავნამდე ან დაუკავშირდეთ ადმინისტრატორს დახმარებისთვის.',

  /** Label for button when status is saved */
  'status-bar.document-status-pulse.status.saved.text': 'შენახულია',
  /** Label for button when status is syncing */
  'status-bar.document-status-pulse.status.syncing.text': 'ინახება...',
  /** Accessibility label indicating when the document was last published, in relative time, eg "3 weeks ago" */
  'status-bar.publish-status-button.last-published-time.aria-label':
    'ბოლოს გამოქვეყნდა {{relativeTime}}',
  /** Text for tooltip showing explanation of timestamp/relative time, eg "Last published <RelativeTime/>" */
  'status-bar.publish-status-button.last-published-time.tooltip':
    'ბოლოს გამოქვეყნდა <RelativeTime/>',
  /** Accessibility label indicating when the document was last updated, in relative time, eg "2 hours ago" */
  'status-bar.publish-status-button.last-updated-time.aria-label':
    'ბოლოს განახლდა {{relativeTime}}',
  /** Text for tooltip showing explanation of timestamp/relative time, eg "Last updated <RelativeTime/>" */
  'status-bar.publish-status-button.last-updated-time.tooltip': 'ბოლოს განახლდა <RelativeTime/>',
  /** Aria label for the button */
  'status-bar.review-changes-button.aria-label': 'ცვლილებების გადახედვა',
  /** Label for button when status is saved */
  'status-bar.review-changes-button.status.saved.text': 'შენახულია!',
  /** Label for button when status is syncing */
  'status-bar.review-changes-button.status.syncing.text': 'ინახება...',
  /** Text for the secondary text for tooltip for the button */
  'status-bar.review-changes-button.tooltip.changes-saved': 'ცვლილებები შენახულია',
  /** Primary text for tooltip for the button */
  'status-bar.review-changes-button.tooltip.text': 'გადახედეთ ცვლილებებს',

  /** The text that appears in side the documentation link */
  'structure-error.docs-link.text': 'იხილეთ დოკუმენტაცია',
  /** Labels the error message or error stack of the structure error screen */
  'structure-error.error.label': 'შეცდომა',
  /** The header that appears at the top of the error screen */
  'structure-error.header.text': 'შეცდომა სტრუქტურის კითხვისას',
  /** The text in the reload button to retry rendering the structure */
  'structure-error.reload-button.text': 'გადატვირთვა',
  /** Labels the structure path of the structure error screen */
  'structure-error.structure-path.label': 'სტრუქტურის გზა',

  /** The aria label for the menu button in the timeline item */
  'timeline-item.menu-button.aria-label': 'მენიუს ღილაკის გახსნა',
  /** The text for the tooltip in menu button the timeline item */
  'timeline-item.menu-button.tooltip': 'ქმედებები',
  /** The text for the collapse action in the timeline item menu */
  'timeline-item.menu.action-collapse': 'შეკუმშვა',
  /** The text for the expand action in the timeline item menu */
  'timeline-item.menu.action-expand': 'გაშლა',
})
