import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Tooltip when action button is disabled because the operation is not ready   */
  'action.delete.disabled.not-ready': 'العملية غير جاهزة',
  /** Tooltip when action button is disabled because the document does not exist */
  'action.delete.disabled.nothing-to-delete': 'هذا المستند غير موجود بعد أو تم حذفه بالفعل',
  /** Label for the "Delete" document action button */
  'action.delete.label': 'حذف',
  /** Label for the "Delete" document action while the document is being deleted */
  'action.delete.running.label': 'جاري الحذف…',
  /** Message prompting the user to confirm discarding changes */
  'action.discard-changes.confirm-dialog.confirm-discard-changes':
    'هل أنت متأكد أنك تريد التخلص من جميع التغييرات منذ آخر نشر؟',
  /** Tooltip when action is disabled because the document has no unpublished changes */
  'action.discard-changes.disabled.no-change': 'هذا المستند لا يحتوي على تغييرات غير منشورة',
  /** Tooltip when action is disabled because the document is not published */
  'action.discard-changes.disabled.not-published': 'هذا المستند غير منشور',
  /** Tooltip when action button is disabled because the operation is not ready   */
  'action.discard-changes.disabled.not-ready': 'العملية غير جاهزة',
  /** Label for the "Discard changes" document action */
  'action.discard-changes.label': 'تجاهل التغييرات',
  /** Tooltip when action is disabled because the operation is not ready   */
  'action.duplicate.disabled.not-ready': 'العملية غير جاهزة',
  /** Tooltip when action is disabled because the document doesn't exist */
  'action.duplicate.disabled.nothing-to-duplicate':
    'هذا المستند غير موجود بعد لذا لا يوجد شيء لتكراره',
  /** Label for the "Duplicate" document action */
  'action.duplicate.label': 'تكرار',
  /** Label for the "Duplicate" document action while the document is being duplicated */
  'action.duplicate.running.label': 'جاري التكرار…',
  /** Tooltip when publish button is disabled because the document is already published, and published time is unavailable.*/
  'action.publish.already-published.no-time-ago.tooltip': 'تم النشر بالفعل',
  /** Tooltip when publish button is disabled because the document is already published.*/
  'action.publish.already-published.tooltip': 'تم النشر منذ {{timeSincePublished}}',
  /** Tooltip when action is disabled because the studio is not ready.*/
  'action.publish.disabled.not-ready': 'العملية غير جاهزة',
  /** Label for action when there are pending changes.*/
  'action.publish.draft.label': 'نشر',
  /** Label for the "Publish" document action when the document has live edit enabled.*/
  'action.publish.live-edit.label': 'نشر',
  /** Fallback tooltip for the "Publish" document action when publish is invoked for a document with live edit enabled.*/
  'action.publish.live-edit.publish-disabled':
    'لا يمكن النشر لأن التحرير المباشر مفعل لهذا النوع من المستندات',
  /** Tooltip for the "Publish" document action when the document has live edit enabled.*/
  'action.publish.live-edit.tooltip':
    'التحرير المباشر مفعل لهذا النوع من المحتوى والنشر يحدث تلقائيًا أثناء إجراء التغييرات',
  /** Tooltip when publish button is disabled because there are no changes.*/
  'action.publish.no-changes.tooltip': 'لا توجد تغييرات غير منشورة',
  /** Label for the "Publish" document action when there are no changes.*/
  'action.publish.published.label': 'منشور',
  /** Label for the "Publish" document action while publish is being executed.*/
  'action.publish.running.label': 'جاري النشر…',
  /** Tooltip when the "Publish" document action is disabled due to validation issues */
  'action.publish.validation-issues.tooltip':
    'هناك أخطاء تحقق يجب إصلاحها قبل أن يمكن نشر هذا المستند',
  /** Tooltip when publish button is waiting for validation and async tasks to complete.*/
  'action.publish.waiting': 'انتظار اكتمال المهام قبل النشر',
  /** Message prompting the user to confirm that they want to restore to an earlier version*/
  'action.restore.confirm.message': 'هل أنت متأكد أنك تريد استعادة هذا المستند؟',
  /** Fallback tooltip for when user is looking at the initial version */
  'action.restore.disabled.cannot-restore-initial': 'لا يمكنك استعادة النسخة الأولية',
  /** Label for the "Restore" document action */
  'action.restore.label': 'استعادة',
  /** Default tooltip for the action */
  'action.restore.tooltip': 'استعادة إلى هذه النسخة',
  /** Tooltip when action is disabled because the document is not already published */
  'action.unpublish.disabled.not-published': 'هذا المستند لم يتم نشره',
  /** Tooltip when action is disabled because the operation is not ready   */
  'action.unpublish.disabled.not-ready': 'العملية غير جاهزة',
  /** Label for the "Unpublish" document action */
  'action.unpublish.label': 'إلغاء النشر',
  /** Fallback tooltip for the Unpublish document action when publish is invoked for a document with live edit enabled.*/
  'action.unpublish.live-edit.disabled': 'هذا المستند يتيح التحرير المباشر ولا يمكن إلغاء نشره',

  /** The text for the restore button on the deleted document banner */
  'banners.deleted-document-banner.restore-button.text': 'استعادة النسخة الأخيرة',
  /** The text content for the deleted document banner */
  'banners.deleted-document-banner.text': 'تم حذف هذا المستند.',
  /** The text content for the deprecated document type banner */
  'banners.deprecated-document-type-banner.text': 'تم إيقاف نوع هذا المستند.',
  /** The text for the permission check banner if the user only has one role, and it does not allow updating this document */
  'banners.permission-check-banner.missing-permission_create_one':
    'دورك <Roles/> لا يملك الصلاحيات لإنشاء هذا المستند.',
  /** The text for the permission check banner if the user only has one role, and it does not allow updating this document */
  'banners.permission-check-banner.missing-permission_update_one':
    'دورك <Roles/> لا يملك الصلاحيات لتحديث هذا المستند.',
  /** The text for the reload button */
  'banners.reference-changed-banner.reason-changed.reload-button.text': 'إعادة تحميل المرجع',
  /** The text for the reference change banner if the reason is that the reference has been changed */
  'banners.reference-changed-banner.reason-changed.text': 'تم تغيير هذا المرجع منذ فتحته.',
  /** The text for the close button */
  'banners.reference-changed-banner.reason-removed.close-button.text': 'إغلاق المرجع',
  /** The text for the reference change banner if the reason is that the reference has been deleted */
  'banners.reference-changed-banner.reason-removed.text': 'تم إزالة هذا المرجع منذ فتحته.',

  /** Browser/tab title when creating a new document of a given type */
  'browser-document-title.new-document': 'مستند جديد {{schemaType}}',
  /** Browser/tab title when editing a document where the title cannot be resolved from preview configuration */
  'browser-document-title.untitled-document': 'بدون عنوان',

  /** The action menu button aria-label */
  'buttons.action-menu-button.aria-label': 'فتح إجراءات المستند',
  /** The action menu button tooltip */
  'buttons.action-menu-button.tooltip': 'إجراءات المستند',
  /** The aria-label for the split pane button on the document panel header */
  'buttons.split-pane-button.aria-label': 'تقسيم اللوحة إلى اليمين',
  /** The tool tip for the split pane button on the document panel header */
  'buttons.split-pane-button.tooltip': 'تقسيم اللوحة إلى اليمين',
  /** The title for the close button on the split pane on the document panel header */
  'buttons.split-pane-close-button.title': 'إغلاق تقسيم اللوحة',
  /** The title for the close group button on the split pane on the document panel header */
  'buttons.split-pane-close-group-button.title': 'إغلاق مجموعة اللوحة',

  /** The text in the "Cancel" button in the confirm delete dialog that cancels the action and closes the dialog */
  'confirm-delete-dialog.cancel-button.text': 'إلغاء',
  /** Used in `confirm-delete-dialog.cdr-summary.title` */
  'confirm-delete-dialog.cdr-summary.document-count_one': '1 وثيقة',
  /** The text that appears in the subtitle `<summary>` that lists the datasets below the title */
  'confirm-delete-dialog.cdr-summary.subtitle_one': 'مجموعة البيانات: {{datasets}}',
  /** The text that appears in the subtitle `<summary>` that lists the datasets below the title */
  'confirm-delete-dialog.cdr-summary.subtitle_unavailable_one': 'مجموعة البيانات غير متوفرة',
  /** The text that appears in the title `<summary>` that includes the list of CDRs (singular) */
  'confirm-delete-dialog.cdr-summary.title_one': '{{documentCount}} في مجموعة بيانات أخرى',
  /** Appears when hovering over the copy button to copy */
  'confirm-delete-dialog.cdr-table.copy-id-button.tooltip': 'نسخ الهوية إلى الحافظة',
  /** The header for the dataset column in the list of cross-dataset references found */
  'confirm-delete-dialog.cdr-table.dataset.label': 'مجموعة البيانات',
  /** The header for the document ID column in the list of cross-dataset references found */
  'confirm-delete-dialog.cdr-table.document-id.label': 'هوية الوثيقة',
  /** The toast title when the copy button has been clicked */
  'confirm-delete-dialog.cdr-table.id-copied-toast.title': 'تم نسخ هوية الوثيقة إلى الحافظة!',
  /** The header for the project ID column in the list of cross-dataset references found */
  'confirm-delete-dialog.cdr-table.project-id.label': 'هوية المشروع',
  /** The text in the "Delete anyway" button in the confirm delete dialog that confirms the action */
  'confirm-delete-dialog.confirm-anyway-button.text_delete': 'احذف على أي حال',
  /** The text in the "Unpublish anyway" button in the confirm delete dialog that confirms the action */
  'confirm-delete-dialog.confirm-anyway-button.text_unpublish': 'أوقف النشر على أي حال',
  /** The text in the "Delete now" button in the confirm delete dialog that confirms the action */
  'confirm-delete-dialog.confirm-button.text_delete': 'احذف الآن',
  /** The text in the "Unpublish now" button in the confirm delete dialog that confirms the action */
  'confirm-delete-dialog.confirm-button.text_unpublish': 'أوقف النشر الآن',
  /** If no referring documents are found, this text appears above the cancel and confirmation buttons */
  'confirm-delete-dialog.confirmation.text_delete': 'هل أنت متأكد أنك تريد حذف “<DocumentTitle/>”؟',
  /** If no referring documents are found, this text appears above the cancel and confirmation buttons */
  'confirm-delete-dialog.confirmation.text_unpublish':
    'هل أنت متأكد أنك تريد إيقاف نشر “<DocumentTitle/>”؟',
  /** The text body of the error dialog. */
  'confirm-delete-dialog.error.message.text': 'حدث خطأ أثناء تحميل الوثائق المرجعية.',
  /** The text in the retry button of the confirm delete dialog if an error occurred. */
  'confirm-delete-dialog.error.retry-button.text': 'أعد المحاولة',
  /** The header of the confirm delete dialog if an error occurred while the confirm delete dialog was open. */
  'confirm-delete-dialog.error.title.text': 'خطأ',
  /** The header of the confirm delete dialog */
  'confirm-delete-dialog.header.text_delete': 'حذف الوثيقة؟',
  /** The header of the confirm delete dialog */
  'confirm-delete-dialog.header.text_unpublish': 'إيقاف نشر الوثيقة؟',
  /** The text that appears while the referring documents are queried */
  'confirm-delete-dialog.loading.text': 'جارٍ البحث عن الوثائق المرجعية...',
  /** Shown if there are references to other documents but the user does not have the permission to see the relevant document IDs */
  'confirm-delete-dialog.other-reference-count.title_one': '1 مرجع آخر غير معروض',
  /** Text in the tooltip of this component if hovering over the info icon */
  'confirm-delete-dialog.other-reference-count.tooltip':
    'لا يمكننا عرض البيانات الوصفية لهذه المراجع بسبب عدم وجود رمز وصول لمجموعات البيانات ذات الصلة.',
  /** Appears when unable to render a document preview in the referring document list */
  'confirm-delete-dialog.preview-item.preview-unavailable.subtitle': 'الهوية: {{documentId}}',
  /** Appears when unable to render a document preview in the referring document list */
  'confirm-delete-dialog.preview-item.preview-unavailable.title': 'المعاينة غير متوفرة',
  /** Warns the user of affects to other documents if the action is confirmed (delete) */
  'confirm-delete-dialog.referential-integrity-disclaimer.text_delete':
    'إذا قمت بحذف هذا المستند، فلن تتمكن المستندات التي تشير إليه من الوصول إليه.',
  /** Warns the user of affects to other documents if the action is confirmed (unpublish) */
  'confirm-delete-dialog.referential-integrity-disclaimer.text_unpublish':
    'إذا قمت بإلغاء نشر هذا المستند، فلن تتمكن المستندات التي تشير إليه من الوصول إليه.',
  /** Tells the user the count of how many other referring documents there are before listing them. (singular) */
  'confirm-delete-dialog.referring-document-count.text_one':
    'مستند واحد يشير إلى “<DocumentTitle/>”',
  /** Describes the list of documents that refer to the one trying to be deleted (delete) */
  'confirm-delete-dialog.referring-documents-descriptor.text_delete':
    'قد لا تتمكن من حذف “<DocumentTitle/>” لأن المستندات التالية تشير إليه:',
  /** Describes the list of documents that refer to the one trying to be deleted (unpublish) */
  'confirm-delete-dialog.referring-documents-descriptor.text_unpublish':
    'قد لا تتمكن من إلغاء نشر “<DocumentTitle/>” لأن المستندات التالية تشير إليه:',

  /** The text for the cancel button in the confirm dialog used in document action shortcuts if none is provided */
  'confirm-dialog.cancel-button.fallback-text': 'إلغاء',
  /** The text for the confirm button in the confirm dialog used in document action shortcuts if none is provided */
  'confirm-dialog.confirm-button.fallback-text': 'تأكيد',

  /** For the default structure definition, the title for the "Content" pane */
  'default-definition.content-title': 'المحتوى',

  /** The text shown if there was an error while getting the document's title via a preview value */
  'doc-title.error.text': 'خطأ: {{errorMessage}}',
  /** The text shown if the preview value for a document is non-existent or empty */
  'doc-title.fallback.text': 'بدون عنوان',
  /** The text shown if a document's title via a preview value cannot be determined due to an unknown schema type */
  'doc-title.unknown-schema-type.text': 'نوع المخطط غير معروف: {{schemaType}}',

  /** Tooltip text shown for the close button of the document inspector */
  'document-inspector.close-button.tooltip': 'إغلاق',
  /** The title shown in the dialog header, when inspecting a valid document */
  'document-inspector.dialog.title': 'فحص <DocumentTitle/>',
  /** The title shown in the dialog header, when the document being inspected is not created yet/has no value */
  'document-inspector.dialog.title-no-value': 'لا يوجد قيمة',
  /** Title shown for menu item that opens the "Inspect" dialog */
  'document-inspector.menu-item.title': 'فحص',
  /** the placeholder text for the search input on the inspect dialog */
  'document-inspector.search.placeholder': 'بحث',
  /** The "parsed" view mode, meaning the JSON is searchable, collapsible etc */
  'document-inspector.view-mode.parsed': 'محلل',
  /** The "raw" view mode, meaning the JSON is presented syntax-highlighted, but with no other features - optimal for copying */
  'document-inspector.view-mode.raw-json': 'JSON الخام',

  /** The text for when a form is hidden */
  'document-view.form-view.form-hidden': 'هذا النموذج مخفي',
  /** Fallback title shown when a form title is not provided */
  'document-view.form-view.form-title-fallback': 'بدون عنوان',
  /** The text for when the form view is loading a document */
  'document-view.form-view.loading': 'جاري تحميل المستند...',
  /** The description of the sync lock toast on the form view */
  'document-view.form-view.sync-lock-toast.description':
    'يرجى الانتظار بينما يتم مزامنة المستند. هذا يحدث عادةً بعد نشر المستند مباشرةً، ولا ينبغي أن يستغرق أكثر من بضع ثوانٍ',
  /** The title of the sync lock toast on the form view */
  'document-view.form-view.sync-lock-toast.title': 'جاري مزامنة المستند...',

  /** The loading messaging for when the tooltip is still loading permission info */
  'insufficient-permissions-message-tooltip.loading-text': 'جاري التحميل...',

  /** --- Menu items --- */
  /** The menu item group title to use for the Action menu items */
  'menu-item-groups.actions-group': 'الإجراءات',
  /** The menu item group title to use for the Layout menu items */
  'menu-item-groups.layout-group': 'التخطيط',
  /** The menu item group title to use for the Sort menu items */
  'menu-item-groups.sorting-group': 'الترتيب',

  /** The menu item title to use the compact view */
  'menu-items.layout.compact-view': 'عرض مضغوط',
  /** The menu item title to use the detailed view */
  'menu-items.layout.detailed-view': 'عرض تفصيلي',
  /** The menu item title to Sort by Created */
  'menu-items.sort-by.created': 'الترتيب حسب التاريخ الإنشاء',
  /** The menu item title to Sort by Last Edited */
  'menu-items.sort-by.last-edited': 'الترتيب حسب آخر تعديل',

  /** The link text of the no document type screen that appears directly below the subtitle */
  'no-document-types-screen.link-text': 'تعلم كيفية إضافة نوع وثيقة →',
  /** The subtitle of the no document type screen that appears directly below the title */
  'no-document-types-screen.subtitle': 'يرجى تحديد نوع وثيقة واحد على الأقل في مخططك.',
  /** The title of the no document type screen */
  'no-document-types-screen.title': 'لا توجد أنواع وثائق',

  /** Text shown on back button visible on smaller breakpoints */
  'pane-header.back-button.text': 'رجوع',
  /** tooltip text (via `title` attribute) for the menu button */
  'pane-header.context-menu-button.tooltip': 'إظهار القائمة',
  /** Appears in a document list pane header if there are more than one option for create. This is the label for that menu */
  'pane-header.create-menu.label': 'إنشاء',
  /** Tooltip displayed on the create new button in document lists */
  'pane-header.create-new-button.tooltip': 'إنشاء وثيقة جديدة',
  /** The `aria-label` for the disabled button in the pane header if create permissions are granted */
  'pane-header.disabled-created-button.aria-label': 'أذونات غير كافية',

  /** The text shown in the tooltip of pane item previews of documents if there are unpublished edits */
  'pane-item.draft-status.has-draft.tooltip': 'تم التعديل <RelativeTime/>',
  /** The text shown in the tooltip of pane item previews of documents if there are no unpublished edits */
  'pane-item.draft-status.no-draft.tooltip': 'لا توجد تعديلات غير منشورة',
  /** The subtitle tor pane item previews if there isn't a matching schema type found */
  'pane-item.missing-schema-type.subtitle': 'الوثيقة: <Code>{{documentId}}</Code>',
  /** The title tor pane item previews if there isn't a matching schema type found */
  'pane-item.missing-schema-type.title':
    'لم يتم العثور على مخطط للنوع <Code>{{documentType}}</Code>',
  /** The text shown in the tooltip of pane item previews of documents if there are unpublished edits */
  'pane-item.published-status.has-published.tooltip': 'تم النشر <RelativeTime/>',
  /** The text shown in the tooltip of pane item previews of documents if there are no unpublished edits */
  'pane-item.published-status.no-published.tooltip': 'لا توجد تعديلات منشورة',

  /** The text used in the document header title if there is an error */
  'panes.document-header-title.error.text': 'خطأ: {{error}}',
  /** The text used in the document header title if creating a new item */
  'panes.document-header-title.new.text': 'جديد {{schemaType}}',
  /** The text used in the document header title if no other title can be determined */
  'panes.document-header-title.untitled.text': 'بدون عنوان',
  /** The text for the retry button on the document list pane */
  'panes.document-list-pane.error.retry-button.text': 'أعد المحاولة',
  /** The error text on the document list pane */
  'panes.document-list-pane.error.text': 'خطأ: <Code>{{error}}</Code>',
  /** The error title on the document list pane */
  'panes.document-list-pane.error.title': 'تعذر جلب عناصر القائمة',
  /** The text of the document list pane if more than a maximum number of documents are returned */
  'panes.document-list-pane.max-items.text': 'يتم عرض أقصى عدد من المستندات وهو {{limit}}',
  /** The text of the document list pane if no documents are found for a specified type */
  'panes.document-list-pane.no-documents-of-type.text': 'لا توجد مستندات من هذا النوع',
  /** The text of the document list pane if no documents are found */
  'panes.document-list-pane.no-documents.text': 'لم يتم العثور على نتائج',
  /** The text of the document list pane if no documents are found matching specified criteria */
  'panes.document-list-pane.no-matching-documents.text': 'لا توجد مستندات مطابقة',
  /** The aria-label for the search input on the document list pane */
  'panes.document-list-pane.search-input.aria-label': 'بحث في القائمة',
  /** The search input for the search input on the document list pane */
  'panes.document-list-pane.search-input.placeholder': 'بحث في القائمة',
  /** The summary title when displaying an error for a document operation result */
  'panes.document-operation-results.error.summary.title': 'التفاصيل',
  /** The text when a generic operation failed (fallback, generally not shown)  */
  'panes.document-operation-results.operation-error': 'حدث خطأ أثناء {{context}}',
  /** The text when a delete operation failed  */
  'panes.document-operation-results.operation-error_delete':
    'حدث خطأ أثناء محاولة حذف هذا المستند. هذا يعني عادةً أن هناك مستندات أخرى تشير إليه.',
  /** The text when an unpublish operation failed  */
  'panes.document-operation-results.operation-error_unpublish':
    'حدث خطأ أثناء محاولة إلغاء نشر هذا المستند. هذا يعني عادةً أن هناك مستندات أخرى تشير إليه.',
  /** The text when a generic operation succeeded (fallback, generally not shown)  */
  'panes.document-operation-results.operation-success': 'تم بنجاح {{context}} على المستند',
  /** The text when a delete operation succeeded  */
  'panes.document-operation-results.operation-success_delete': 'تم حذف المستند بنجاح',
  /** The text when a discard changes operation succeeded  */
  'panes.document-operation-results.operation-success_discardChanges':
    'تم التخلص من جميع التغييرات منذ آخر نشر. يمكن استرداد المسودة المرفوضة من التاريخ',
  /** The text when a publish operation succeeded  */
  'panes.document-operation-results.operation-success_publish':
    '<Strong>{{title}}</Strong> تم نشره',
  /** The text when a restore operation succeeded  */
  'panes.document-operation-results.operation-success_restore':
    '<Strong>{{title}}</Strong> تم استعادته',
  /** The text when an unpublish operation succeeded  */
  'panes.document-operation-results.operation-success_unpublish':
    '<Strong>{{title}}</Strong> تم إلغاء نشره. تم إنشاء مسودة من آخر نسخة تم نشرها.',
  /** The document title shown when document title is "undefined" in operation message */
  'panes.document-operation-results.operation-undefined-title': 'بدون عنوان',
  /** The title of the reconnecting toast */
  'panes.document-pane-provider.reconnecting.title': 'تم فقد الاتصال. جارٍ إعادة الاتصال...',
  /** The loading message for the document not found pane */
  'panes.document-pane.document-not-found.loading': 'جارٍ تحميل المستند...',
  /** The text of the document not found pane if the schema is known */
  'panes.document-pane.document-not-found.text':
    'لم يتم تعريف نوع المستند، ولم يتم العثور على مستند بمعرف <Code>{{id}}</Code>.',
  /** The title of the document not found pane if the schema is known */
  'panes.document-pane.document-not-found.title': 'لم يتم العثور على المستند',
  /** The text of the document not found pane if the schema is not found */
  'panes.document-pane.document-unknown-type.text':
    'هذا المستند يحتوي على نوع الخطة <Code>{{documentType}}</Code>، الذي لم يتم تعريفه كنوع في خطة الاستوديو المحلي للمحتوى.',
  /** The title of the document not found pane if the schema is not found or unknown */
  'panes.document-pane.document-unknown-type.title':
    'نوع المستند غير معروف: <Code>{{documentType}}</Code>',
  /** The title of the document not found pane if the schema is unknown */
  'panes.document-pane.document-unknown-type.without-schema.text':
    'هذا المستند غير موجود، ولم يتم تحديد نوع المخطط له.',
  /** Default message shown while resolving the structure definition for an asynchronous node */
  'panes.resolving.default-message': 'جارِ التحميل...',
  /** Message shown while resolving the structure definition for an asynchronous node and it is taking a while (more than 5s) */
  'panes.resolving.slow-resolve-message': 'ما زال يتم التحميل...',
  /** The text to display when type is missing */
  'panes.unknown-pane-type.missing-type.text':
    'عنصر البنية يفتقد إلى خاصية <Code>type</Code> المطلوبة.',
  /** The title of the unknown pane */
  'panes.unknown-pane-type.title': 'نوع لوحة غير معروف',
  /** The text to display when type is unknown */
  'panes.unknown-pane-type.unknown-type.text':
    'عنصر البنية من نوع <Code>{{type}}</Code> ليس كيانًا معروفًا.',

  /** The text for the "Open preview" action for a document */
  'production-preview.menu-item.title': 'فتح المعاينة',

  /** Label for button when status is saved */
  'status-bar.document-status-pulse.status.saved.text': 'تم الحفظ',
  /** Label for button when status is syncing */
  'status-bar.document-status-pulse.status.syncing.text': 'جارِ الحفظ...',
  /** Accessibility label indicating when the document was last published, in relative time, eg "3 weeks ago" */
  'status-bar.publish-status-button.last-published-time.aria-label': 'آخر نشر {{relativeTime}}',
  /** Text for tooltip showing explanation of timestamp/relative time, eg "Last published <RelativeTime/>" */
  'status-bar.publish-status-button.last-published-time.tooltip': 'آخر نشر <RelativeTime/>',
  /** Accessibility label indicating when the document was last updated, in relative time, eg "2 hours ago" */
  'status-bar.publish-status-button.last-updated-time.aria-label': 'آخر تحديث {{relativeTime}}',
  /** Text for tooltip showing explanation of timestamp/relative time, eg "Last updated <RelativeTime/>" */
  'status-bar.publish-status-button.last-updated-time.tooltip': 'آخر تحديث <RelativeTime/>',
  /** Aria label for the button */
  'status-bar.review-changes-button.aria-label': 'مراجعة التغييرات',
  /** Label for button when status is saved */
  'status-bar.review-changes-button.status.saved.text': 'تم الحفظ!',
  /** Label for button when status is syncing */
  'status-bar.review-changes-button.status.syncing.text': 'جارِ الحفظ...',
  /** Text for the secondary text for tooltip for the button */
  'status-bar.review-changes-button.tooltip.changes-saved': 'تم حفظ التغييرات',
  /** Primary text for tooltip for the button */
  'status-bar.review-changes-button.tooltip.text': 'مراجعة التغييرات',

  /** The text that appears in side the documentation link */
  'structure-error.docs-link.text': 'عرض التوثيق',
  /** Labels the error message or error stack of the structure error screen */
  'structure-error.error.label': 'خطأ',
  /** The header that appears at the top of the error screen */
  'structure-error.header.text': 'حدث خطأ أثناء قراءة البنية',
  /** The text in the reload button to retry rendering the structure */
  'structure-error.reload-button.text': 'إعادة التحميل',
  /** Labels the structure path of the structure error screen */
  'structure-error.structure-path.label': 'مسار البنية',
})
