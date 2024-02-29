import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Tooltip when action button is disabled because the operation is not ready   */
  'action.delete.disabled.not-ready': 'Операція ще не готова',
  /** Tooltip when action button is disabled because the document does not exist */
  'action.delete.disabled.nothing-to-delete': 'Цей документ ще не існує або вже видалений',
  /** Label for the "Delete" document action button */
  'action.delete.label': 'Видалити',
  /** Label for the "Delete" document action while the document is being deleted */
  'action.delete.running.label': 'Видаляється…',
  /** Message prompting the user to confirm discarding changes */
  'action.discard-changes.confirm-dialog.confirm-discard-changes':
    'Ви впевнені, що хочете скасувати всі зміни з моменту останньої публікації?',
  /** Tooltip when action is disabled because the document has no unpublished changes */
  'action.discard-changes.disabled.no-change': 'Цей документ не має неопублікованих змін',
  /** Tooltip when action is disabled because the document is not published */
  'action.discard-changes.disabled.not-published': 'Цей документ не опублікований',
  /** Tooltip when action button is disabled because the operation is not ready   */
  'action.discard-changes.disabled.not-ready': 'Операція ще не готова',
  /** Label for the "Discard changes" document action */
  'action.discard-changes.label': 'Скасувати зміни',
  /** Tooltip when action is disabled because the operation is not ready   */
  'action.duplicate.disabled.not-ready': 'Операція ще не готова',
  /** Tooltip when action is disabled because the document doesn't exist */
  'action.duplicate.disabled.nothing-to-duplicate':
    'Цей документ ще не існує, тому немає чого дублювати',
  /** Label for the "Duplicate" document action */
  'action.duplicate.label': 'Дублювати',
  /** Label for the "Duplicate" document action while the document is being duplicated */
  'action.duplicate.running.label': 'Дублюється…',
  /** Tooltip when publish button is disabled because the document is already published, and published time is unavailable.*/
  'action.publish.already-published.no-time-ago.tooltip': 'Вже опубліковано',
  /** Tooltip when publish button is disabled because the document is already published.*/
  'action.publish.already-published.tooltip': 'Опубліковано {{timeSincePublished}} тому',
  /** Tooltip when action is disabled because the studio is not ready.*/
  'action.publish.disabled.not-ready': 'Операція ще не готова',
  /** Label for action when there are pending changes.*/
  'action.publish.draft.label': 'Опублікувати',
  /** Label for the "Publish" document action when the document has live edit enabled.*/
  'action.publish.live-edit.label': 'Опублікувати',
  /** Fallback tooltip for the "Publish" document action when publish is invoked for a document with live edit enabled.*/
  'action.publish.live-edit.publish-disabled':
    'Не можна опублікувати, оскільки для цього типу документа включено режим Live Edit',
  /** Tooltip for the "Publish" document action when the document has live edit enabled.*/
  'action.publish.live-edit.tooltip':
    'Для цього типу контенту включено режим Live Edit, і публікація відбувається автоматично, коли ви вносите зміни',
  /** Tooltip when publish button is disabled because there are no changes.*/
  'action.publish.no-changes.tooltip': 'Немає неопублікованих змін',
  /** Label for the "Publish" document action when there are no changes.*/
  'action.publish.published.label': 'Опубліковано',
  /** Label for the "Publish" document action while publish is being executed.*/
  'action.publish.running.label': 'Публікується…',
  /** Tooltip when the "Publish" document action is disabled due to validation issues */
  'action.publish.validation-issues.tooltip':
    'Є помилки перевірки, які потрібно виправити перед публікацією цього документа',
  /** Tooltip when publish button is waiting for validation and async tasks to complete.*/
  'action.publish.waiting': 'Очікування завершення завдань перед публікацією',
  /** Message prompting the user to confirm that they want to restore to an earlier version*/
  'action.restore.confirm.message': 'Ви впевнені, що хочете відновити цей документ?',
  /** Fallback tooltip for when user is looking at the initial version */
  'action.restore.disabled.cannot-restore-initial': 'Ви не можете відновити початкову версію',
  /** Label for the "Restore" document action */
  'action.restore.label': 'Відновити',
  /** Default tooltip for the action */
  'action.restore.tooltip': 'Відновити до цієї версії',
  /** Tooltip when action is disabled because the document is not already published */
  'action.unpublish.disabled.not-published': 'Цей документ не опубліковано',
  /** Tooltip when action is disabled because the operation is not ready   */
  'action.unpublish.disabled.not-ready': 'Операція не готова',
  /** Label for the "Unpublish" document action */
  'action.unpublish.label': 'Зняти з публікації',
  /** Fallback tooltip for the Unpublish document action when publish is invoked for a document with live edit enabled.*/
  'action.unpublish.live-edit.disabled':
    'Цей документ має увімкнене редагування в реальному часі і не може бути знятий з публікації',

  /** The text for the restore button on the deleted document banner */
  'banners.deleted-document-banner.restore-button.text': 'Відновити найновішу версію',
  /** The text content for the deleted document banner */
  'banners.deleted-document-banner.text': 'Цей документ було видалено.',
  /** The text content for the deprecated document type banner */
  'banners.deprecated-document-type-banner.text': 'Цей тип документа застарів.',
  /** The text for the permission check banner if the user only has one role, and it does not allow updating this document */
  'banners.permission-check-banner.missing-permission_create_one':
    'Ваша роль <Roles/> не має дозволів на створення цього документа.',
  /** The text for the permission check banner if the user only has one role, and it does not allow updating this document */
  'banners.permission-check-banner.missing-permission_update_one':
    'Ваша роль <Roles/> не має дозволів на оновлення цього документа.',
  /** The text for the reload button */
  'banners.reference-changed-banner.reason-changed.reload-button.text': 'Перезавантажити посилання',
  /** The text for the reference change banner if the reason is that the reference has been changed */
  'banners.reference-changed-banner.reason-changed.text':
    'Це посилання змінилося з моменту вашого відкриття.',
  /** The text for the close button */
  'banners.reference-changed-banner.reason-removed.close-button.text': 'Закрити посилання',
  /** The text for the reference change banner if the reason is that the reference has been deleted */
  'banners.reference-changed-banner.reason-removed.text':
    'Це посилання було видалено з моменту вашого відкриття.',

  /** Browser/tab title when creating a new document of a given type */
  'browser-document-title.new-document': 'Новий {{schemaType}}',
  /** Browser/tab title when editing a document where the title cannot be resolved from preview configuration */
  'browser-document-title.untitled-document': 'Без назви',

  /** The action menu button aria-label */
  'buttons.action-menu-button.aria-label': 'Відкрити дії з документом',
  /** The action menu button tooltip */
  'buttons.action-menu-button.tooltip': 'Дії з документом',
  /** The aria-label for the split pane button on the document panel header */
  'buttons.split-pane-button.aria-label': 'Розділити панель праворуч',
  /** The tool tip for the split pane button on the document panel header */
  'buttons.split-pane-button.tooltip': 'Розділити панель праворуч',
  /** The title for the close button on the split pane on the document panel header */
  'buttons.split-pane-close-button.title': 'Закрити розділену панель',
  /** The title for the close group button on the split pane on the document panel header */
  'buttons.split-pane-close-group-button.title': 'Закрити групу панелей',

  /** The text in the "Cancel" button in the confirm delete dialog that cancels the action and closes the dialog */
  'confirm-delete-dialog.cancel-button.text': 'Скасувати',
  /** Used in `confirm-delete-dialog.cdr-summary.title` */
  'confirm-delete-dialog.cdr-summary.document-count_one': '1 документ',
  /** The text that appears in the subtitle `<summary>` that lists the datasets below the title */
  'confirm-delete-dialog.cdr-summary.subtitle_one': 'Набір даних: {{datasets}}',
  /** The text that appears in the subtitle `<summary>` that lists the datasets below the title */
  'confirm-delete-dialog.cdr-summary.subtitle_unavailable_one': 'Недоступний dataset',
  /** The text that appears in the title `<summary>` that includes the list of CDRs (singular) */
  'confirm-delete-dialog.cdr-summary.title_one': '{{documentCount}} в іншому dataset',
  /** Appears when hovering over the copy button to copy */
  'confirm-delete-dialog.cdr-table.copy-id-button.tooltip': 'Скопіювати ID до буфера обміну',
  /** The header for the dataset column in the list of cross-dataset references found */
  'confirm-delete-dialog.cdr-table.dataset.label': 'Dataset',
  /** The header for the document ID column in the list of cross-dataset references found */
  'confirm-delete-dialog.cdr-table.document-id.label': 'ID документа',
  /** The toast title when the copy button has been clicked */
  'confirm-delete-dialog.cdr-table.id-copied-toast.title':
    'Скопійовано ID документа до буфера обміну!',
  /** The header for the project ID column in the list of cross-dataset references found */
  'confirm-delete-dialog.cdr-table.project-id.label': 'ID проекту',
  /** The text in the "Delete anyway" button in the confirm delete dialog that confirms the action */
  'confirm-delete-dialog.confirm-anyway-button.text_delete': 'Видалити все одно',
  /** The text in the "Unpublish anyway" button in the confirm delete dialog that confirms the action */
  'confirm-delete-dialog.confirm-anyway-button.text_unpublish': 'Зняти з публікації все одно',
  /** The text in the "Delete now" button in the confirm delete dialog that confirms the action */
  'confirm-delete-dialog.confirm-button.text_delete': 'Видалити зараз',
  /** The text in the "Unpublish now" button in the confirm delete dialog that confirms the action */
  'confirm-delete-dialog.confirm-button.text_unpublish': 'Зняти з публікації зараз',
  /** If no referring documents are found, this text appears above the cancel and confirmation buttons */
  'confirm-delete-dialog.confirmation.text_delete':
    'Ви впевнені, що хочете видалити “<DocumentTitle/>”?',
  /** If no referring documents are found, this text appears above the cancel and confirmation buttons */
  'confirm-delete-dialog.confirmation.text_unpublish':
    'Ви впевнені, що хочете зняти з публікації “<DocumentTitle/>”?',
  /** The text body of the error dialog. */
  'confirm-delete-dialog.error.message.text':
    'Під час завантаження документів, що посилаються, сталася помилка.',
  /** The text in the retry button of the confirm delete dialog if an error occurred. */
  'confirm-delete-dialog.error.retry-button.text': 'Повторити',
  /** The header of the confirm delete dialog if an error occurred while the confirm delete dialog was open. */
  'confirm-delete-dialog.error.title.text': 'Помилка',
  /** The header of the confirm delete dialog */
  'confirm-delete-dialog.header.text_delete': 'Видалити документ?',
  /** The header of the confirm delete dialog */
  'confirm-delete-dialog.header.text_unpublish': 'Зняти документ з публікації?',
  /** The text that appears while the referring documents are queried */
  'confirm-delete-dialog.loading.text': 'Пошук документів, що посилаються…',
  /** Shown if there are references to other documents but the user does not have the permission to see the relevant document IDs */
  'confirm-delete-dialog.other-reference-count.title_one': '1 інше посилання не показано',
  /** Text in the tooltip of this component if hovering over the info icon */
  'confirm-delete-dialog.other-reference-count.tooltip':
    'Ми не можемо відобразити метадані цих посилань через відсутність токена доступу для відповідних datasets.',
  /** Appears when unable to render a document preview in the referring document list */
  'confirm-delete-dialog.preview-item.preview-unavailable.subtitle': 'ID: {{documentId}}',
  /** Appears when unable to render a document preview in the referring document list */
  'confirm-delete-dialog.preview-item.preview-unavailable.title': 'Попередній перегляд недоступний',
  /** Warns the user of affects to other documents if the action is confirmed (delete) */
  'confirm-delete-dialog.referential-integrity-disclaimer.text_delete':
    'Якщо ви видалите цей документ, документи, які на нього посилаються, більше не зможуть отримати до нього доступ.',
  /** Warns the user of affects to other documents if the action is confirmed (unpublish) */
  'confirm-delete-dialog.referential-integrity-disclaimer.text_unpublish':
    'Якщо ви знімете цей документ з публікації, документи, які на нього посилаються, більше не зможуть отримати до нього доступ.',
  /** Tells the user the count of how many other referring documents there are before listing them. (singular) */
  'confirm-delete-dialog.referring-document-count.text_one':
    '1 документ посилається на “<DocumentTitle/>”',
  /** Describes the list of documents that refer to the one trying to be deleted (delete) */
  'confirm-delete-dialog.referring-documents-descriptor.text_delete':
    'Ви не зможете видалити “<DocumentTitle/>”, оскільки на нього посилаються наступні документи:',
  /** Describes the list of documents that refer to the one trying to be deleted (unpublish) */
  'confirm-delete-dialog.referring-documents-descriptor.text_unpublish':
    'Ви не зможете зняти з публікації “<DocumentTitle/>”, оскільки на нього посилаються наступні документи:',

  /** The text for the cancel button in the confirm dialog used in document action shortcuts if none is provided */
  'confirm-dialog.cancel-button.fallback-text': 'Скасувати',
  /** The text for the confirm button in the confirm dialog used in document action shortcuts if none is provided */
  'confirm-dialog.confirm-button.fallback-text': 'Підтвердити',

  /** For the default structure definition, the title for the "Content" pane */
  'default-definition.content-title': 'Контент',

  /** The text shown if there was an error while getting the document's title via a preview value */
  'doc-title.error.text': 'Помилка: {{errorMessage}}',
  /** The text shown if the preview value for a document is non-existent or empty */
  'doc-title.fallback.text': 'Без назви',
  /** The text shown if a document's title via a preview value cannot be determined due to an unknown schema type */
  'doc-title.unknown-schema-type.text': 'Невідомий тип схеми: {{schemaType}}',

  /** Tooltip text shown for the close button of the document inspector */
  'document-inspector.close-button.tooltip': 'Закрити',
  /** The title shown in the dialog header, when inspecting a valid document */
  'document-inspector.dialog.title': 'Інспектування <DocumentTitle/>',
  /** The title shown in the dialog header, when the document being inspected is not created yet/has no value */
  'document-inspector.dialog.title-no-value': 'Немає значення',
  /** Title shown for menu item that opens the "Inspect" dialog */
  'document-inspector.menu-item.title': 'Інспектувати',
  /** the placeholder text for the search input on the inspect dialog */
  'document-inspector.search.placeholder': 'Пошук',
  /** The "parsed" view mode, meaning the JSON is searchable, collapsible etc */
  'document-inspector.view-mode.parsed': 'Розібраний',
  /** The "raw" view mode, meaning the JSON is presented syntax-highlighted, but with no other features - optimal for copying */
  'document-inspector.view-mode.raw-json': 'Сирий JSON',

  /** The text for when a form is hidden */
  'document-view.form-view.form-hidden': 'Ця форма прихована',
  /** Fallback title shown when a form title is not provided */
  'document-view.form-view.form-title-fallback': 'Без назви',
  /** The text for when the form view is loading a document */
  'document-view.form-view.loading': 'Завантаження документа…',
  /** The description of the sync lock toast on the form view */
  'document-view.form-view.sync-lock-toast.description':
    'Будь ласка, зачекайте, поки документ синхронізується. Це зазвичай відбувається відразу після публікації документа, і це не повинно зайняти більше кількох секунд',
  /** The title of the sync lock toast on the form view */
  'document-view.form-view.sync-lock-toast.title': 'Синхронізація документа…',

  /** The loading messaging for when the tooltip is still loading permission info */
  'insufficient-permissions-message-tooltip.loading-text': 'Завантаження…',

  /** --- Menu items --- */
  /** The menu item group title to use for the Action menu items */
  'menu-item-groups.actions-group': 'Дії',
  /** The menu item group title to use for the Layout menu items */
  'menu-item-groups.layout-group': 'Макет',
  /** The menu item group title to use for the Sort menu items */
  'menu-item-groups.sorting-group': 'Сортування',

  /** The menu item title to use the compact view */
  'menu-items.layout.compact-view': 'Компактний вигляд',
  /** The menu item title to use the detailed view */
  'menu-items.layout.detailed-view': 'Детальний вигляд',
  /** The menu item title to Sort by Created */
  'menu-items.sort-by.created': 'Сортувати за датою створення',
  /** The menu item title to Sort by Last Edited */
  'menu-items.sort-by.last-edited': 'Сортувати за датою останнього редагування',

  /** The link text of the no document type screen that appears directly below the subtitle */
  'no-document-types-screen.link-text': 'Дізнайтеся, як додати тип документа →',
  /** The subtitle of the no document type screen that appears directly below the title */
  'no-document-types-screen.subtitle':
    'Будь ласка, визначте принаймні один тип документа у вашій схемі.',
  /** The title of the no document type screen */
  'no-document-types-screen.title': 'Типи документів відсутні',

  /** Text shown on back button visible on smaller breakpoints */
  'pane-header.back-button.text': 'Назад',
  /** tooltip text (via `title` attribute) for the menu button */
  'pane-header.context-menu-button.tooltip': 'Показати меню',
  /** Appears in a document list pane header if there are more than one option for create. This is the label for that menu */
  'pane-header.create-menu.label': 'Створити',
  /** Tooltip displayed on the create new button in document lists */
  'pane-header.create-new-button.tooltip': 'Створити новий документ',
  /** The `aria-label` for the disabled button in the pane header if create permissions are granted */
  'pane-header.disabled-created-button.aria-label': 'Недостатньо прав',

  /** The text shown in the tooltip of pane item previews of documents if there are unpublished edits */
  'pane-item.draft-status.has-draft.tooltip': 'Відредаговано <RelativeTime/>',
  /** The text shown in the tooltip of pane item previews of documents if there are no unpublished edits */
  'pane-item.draft-status.no-draft.tooltip': 'Немає неопублікованих редагувань',
  /** The subtitle tor pane item previews if there isn't a matching schema type found */
  'pane-item.missing-schema-type.subtitle': 'Документ: <Code>{{documentId}}</Code>',
  /** The title tor pane item previews if there isn't a matching schema type found */
  'pane-item.missing-schema-type.title': 'Схему для типу <Code>{{documentType}}</Code> не знайдено',
  /** The text shown in the tooltip of pane item previews of documents if there are unpublished edits */
  'pane-item.published-status.has-published.tooltip': 'Опубліковано <RelativeTime/>',
  /** The text shown in the tooltip of pane item previews of documents if there are no unpublished edits */
  'pane-item.published-status.no-published.tooltip': 'Немає неопублікованих редагувань',

  /** The text used in the document header title if there is an error */
  'panes.document-header-title.error.text': 'Помилка: {{error}}',
  /** The text used in the document header title if creating a new item */
  'panes.document-header-title.new.text': 'Новий {{schemaType}}',
  /** The text used in the document header title if no other title can be determined */
  'panes.document-header-title.untitled.text': 'Без назви',
  /** The text for the retry button on the document list pane */
  'panes.document-list-pane.error.retry-button.text': 'Спробувати знову',
  /** The error text on the document list pane */
  'panes.document-list-pane.error.text': 'Помилка: <Code>{{error}}</Code>',
  /** The error title on the document list pane */
  'panes.document-list-pane.error.title': 'Не вдалося отримати список елементів',
  /** The text of the document list pane if more than a maximum number of documents are returned */
  'panes.document-list-pane.max-items.text': 'Показано максимум {{limit}} документів',
  /** The text of the document list pane if no documents are found for a specified type */
  'panes.document-list-pane.no-documents-of-type.text': 'Документів цього типу не знайдено',
  /** The text of the document list pane if no documents are found */
  'panes.document-list-pane.no-documents.text': 'Результатів не знайдено',
  /** The text of the document list pane if no documents are found matching specified criteria */
  'panes.document-list-pane.no-matching-documents.text': 'Немає відповідних документів',
  /** The aria-label for the search input on the document list pane */
  'panes.document-list-pane.search-input.aria-label': 'Пошук у списку',
  /** The search input for the search input on the document list pane */
  'panes.document-list-pane.search-input.placeholder': 'Пошук у списку',
  /** The summary title when displaying an error for a document operation result */
  'panes.document-operation-results.error.summary.title': 'Деталі',
  /** The text when a generic operation failed (fallback, generally not shown)  */
  'panes.document-operation-results.operation-error': 'Під час {{context}} сталася помилка',
  /** The text when a delete operation failed  */
  'panes.document-operation-results.operation-error_delete':
    'Під час спроби видалити цей документ сталася помилка. Це зазвичай означає, що інші документи посилаються на нього.',
  /** The text when an unpublish operation failed  */
  'panes.document-operation-results.operation-error_unpublish':
    'Під час спроби зняти з публікації цей документ сталася помилка. Це зазвичай означає, що інші документи посилаються на нього.',
  /** The text when a generic operation succeeded (fallback, generally not shown)  */
  'panes.document-operation-results.operation-success':
    'Успішно виконано {{context}} над документом',
  /** The text when a delete operation succeeded  */
  'panes.document-operation-results.operation-success_delete': 'Документ було успішно видалено',
  /** The text when a discard changes operation succeeded  */
  'panes.document-operation-results.operation-success_discardChanges':
    'Усі зміни з моменту останньої публікації було скасовано. Відкинутий чернет можна відновити з історії',
  /** The text when a publish operation succeeded  */
  'panes.document-operation-results.operation-success_publish': 'Документ було опубліковано',
  /** The text when a restore operation succeeded  */
  'panes.document-operation-results.operation-success_restore': undefined, // '<Strong>{{title}}</Strong> was restored'
  /** The text when an unpublish operation succeeded  */
  'panes.document-operation-results.operation-success_unpublish':
    'Документ було знято з публікації. Чернет було створено з останньої опублікованої версії.',
  /** The document title shown when document title is "undefined" in operation message */
  'panes.document-operation-results.operation-undefined-title': 'Без назви',
  /** The title of the reconnecting toast */
  'panes.document-pane-provider.reconnecting.title': "З'єднання втрачено. Перепідключення…",
  /** The loading message for the document not found pane */
  'panes.document-pane.document-not-found.loading': 'Завантаження документа…',
  /** The text of the document not found pane if the schema is known */
  'panes.document-pane.document-not-found.text':
    'Тип документа не визначено, і документ з ідентифікатором <Code>{{id}}</Code> не може бути знайдений.',
  /** The title of the document not found pane if the schema is known */
  'panes.document-pane.document-not-found.title': 'Документ не знайдено',
  /** The text of the document not found pane if the schema is not found */
  'panes.document-pane.document-unknown-type.text':
    'Цей документ має тип схеми <Code>{{documentType}}</Code>, який не визначено як тип у локальній схемі контент-студії.',
  /** The title of the document not found pane if the schema is not found or unknown */
  'panes.document-pane.document-unknown-type.title':
    'Невідомий тип документа: <Code>{{documentType}}</Code>',
  /** The title of the document not found pane if the schema is unknown */
  'panes.document-pane.document-unknown-type.without-schema.text':
    'Цей документ не існує, і для нього не було вказано тип схеми.',
  /** Default message shown while resolving the structure definition for an asynchronous node */
  'panes.resolving.default-message': 'Завантаження…',
  /** Message shown while resolving the structure definition for an asynchronous node and it is taking a while (more than 5s) */
  'panes.resolving.slow-resolve-message': 'Досі завантажується…',
  /** The text to display when type is missing */
  'panes.unknown-pane-type.missing-type.text':
    'Елемент структури не має необхідної властивості <Code>type</Code>.',
  /** The title of the unknown pane */
  'panes.unknown-pane-type.title': 'Невідомий тип панелі',
  /** The text to display when type is unknown */
  'panes.unknown-pane-type.unknown-type.text':
    'Елемент структури типу <Code>{{type}}</Code> не є відомою сутністю.',

  /** The text for the "Open preview" action for a document */
  'production-preview.menu-item.title': 'Відкрити перегляд',

  /** Label for button when status is saved */
  'status-bar.document-status-pulse.status.saved.text': 'Збережено',
  /** Label for button when status is syncing */
  'status-bar.document-status-pulse.status.syncing.text': 'Зберігається...',
  /** Accessibility label indicating when the document was last published, in relative time, eg "3 weeks ago" */
  'status-bar.publish-status-button.last-published-time.aria-label':
    'Остання публікація {{relativeTime}}',
  /** Text for tooltip showing explanation of timestamp/relative time, eg "Last published <RelativeTime/>" */
  'status-bar.publish-status-button.last-published-time.tooltip':
    'Остання публікація <RelativeTime/>',
  /** Accessibility label indicating when the document was last updated, in relative time, eg "2 hours ago" */
  'status-bar.publish-status-button.last-updated-time.aria-label':
    'Останнє оновлення {{relativeTime}}',
  /** Text for tooltip showing explanation of timestamp/relative time, eg "Last updated <RelativeTime/>" */
  'status-bar.publish-status-button.last-updated-time.tooltip': 'Останнє оновлення <RelativeTime/>',
  /** Aria label for the button */
  'status-bar.review-changes-button.aria-label': 'Переглянути зміни',
  /** Label for button when status is saved */
  'status-bar.review-changes-button.status.saved.text': 'Збережено!',
  /** Label for button when status is syncing */
  'status-bar.review-changes-button.status.syncing.text': 'Зберігається...',
  /** Text for the secondary text for tooltip for the button */
  'status-bar.review-changes-button.tooltip.changes-saved': 'Зміни збережено',
  /** Primary text for tooltip for the button */
  'status-bar.review-changes-button.tooltip.text': 'Переглянути зміни',

  /** The text that appears in side the documentation link */
  'structure-error.docs-link.text': 'Переглянути документацію',
  /** Labels the error message or error stack of the structure error screen */
  'structure-error.error.label': 'Помилка',
  /** The header that appears at the top of the error screen */
  'structure-error.header.text': 'Виникла помилка під час читання структури',
  /** The text in the reload button to retry rendering the structure */
  'structure-error.reload-button.text': 'Перезавантажити',
  /** Labels the structure path of the structure error screen */
  'structure-error.structure-path.label': 'Шлях структури',
})
