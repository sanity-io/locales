import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Tooltip when action button is disabled because the operation is not ready   */
  'action.delete.disabled.not-ready': 'Операция не готова',
  /** Tooltip when action button is disabled because the document does not exist */
  'action.delete.disabled.nothing-to-delete': 'Этот документ еще не существует или уже удален',
  /** Label for the "Delete" document action button */
  'action.delete.label': 'Удалить',
  /** Label for the "Delete" document action while the document is being deleted */
  'action.delete.running.label': 'Удаление…',
  /** Message prompting the user to confirm discarding changes */
  'action.discard-changes.confirm-dialog.confirm-discard-changes':
    'Вы уверены, что хотите отменить все изменения с момента последней публикации?',
  /** Tooltip when action is disabled because the document has no unpublished changes */
  'action.discard-changes.disabled.no-change': 'В этом документе нет неопубликованных изменений',
  /** Tooltip when action is disabled because the document is not published */
  'action.discard-changes.disabled.not-published': 'Этот документ не опубликован',
  /** Tooltip when action button is disabled because the operation is not ready   */
  'action.discard-changes.disabled.not-ready': 'Операция не готова',
  /** Label for the "Discard changes" document action */
  'action.discard-changes.label': 'Отменить изменения',
  /** Tooltip when action is disabled because the operation is not ready   */
  'action.duplicate.disabled.not-ready': 'Операция не готова',
  /** Tooltip when action is disabled because the document doesn't exist */
  'action.duplicate.disabled.nothing-to-duplicate':
    'Этот документ еще не существует, поэтому нет ничего для дублирования',
  /** Label for the "Duplicate" document action */
  'action.duplicate.label': 'Дублировать',
  /** Label for the "Duplicate" document action while the document is being duplicated */
  'action.duplicate.running.label': 'Дублирование…',
  /** Tooltip when publish button is disabled because the document is already published, and published time is unavailable.*/
  'action.publish.already-published.no-time-ago.tooltip': 'Уже опубликовано',
  /** Tooltip when publish button is disabled because the document is already published.*/
  'action.publish.already-published.tooltip': 'Опубликовано {{timeSincePublished}} назад',
  /** Tooltip when action is disabled because the studio is not ready.*/
  'action.publish.disabled.not-ready': 'Операция не готова',
  /** Label for action when there are pending changes.*/
  'action.publish.draft.label': 'Опубликовать',
  /** Label for the "Publish" document action when the document has live edit enabled.*/
  'action.publish.live-edit.label': 'Опубликовать',
  /** Fallback tooltip for the "Publish" document action when publish is invoked for a document with live edit enabled.*/
  'action.publish.live-edit.publish-disabled':
    'Невозможно опубликовать, поскольку для этого типа документа включено редактирование в реальном времени',
  /** Tooltip for the "Publish" document action when the document has live edit enabled.*/
  'action.publish.live-edit.tooltip':
    'Для этого типа контента включено редактирование в реальном времени, и публикация происходит автоматически по мере внесения изменений',
  /** Tooltip when publish button is disabled because there are no changes.*/
  'action.publish.no-changes.tooltip': 'Нет неопубликованных изменений',
  /** Label for the "Publish" document action when there are no changes.*/
  'action.publish.published.label': 'Опубликовано',
  /** Label for the "Publish" document action while publish is being executed.*/
  'action.publish.running.label': 'Публикация…',
  /** Tooltip when the "Publish" document action is disabled due to validation issues */
  'action.publish.validation-issues.tooltip':
    'Есть ошибки валидации, которые необходимо исправить перед публикацией этого документа',
  /** Tooltip when publish button is waiting for validation and async tasks to complete.*/
  'action.publish.waiting': 'Ожидание завершения задач перед публикацией',
  /** Message prompting the user to confirm that they want to restore to an earlier version*/
  'action.restore.confirm.message': 'Вы уверены, что хотите восстановить этот документ?',
  /** Fallback tooltip for when user is looking at the initial version */
  'action.restore.disabled.cannot-restore-initial': 'Вы не можете восстановить начальную версию',
  /** Label for the "Restore" document action */
  'action.restore.label': 'Восстановить',
  /** Default tooltip for the action */
  'action.restore.tooltip': 'Восстановить до этой версии',
  /** Tooltip when action is disabled because the document is not already published */
  'action.unpublish.disabled.not-published': 'Этот документ не опубликован',
  /** Tooltip when action is disabled because the operation is not ready   */
  'action.unpublish.disabled.not-ready': 'Операция не готова',
  /** Label for the "Unpublish" document action */
  'action.unpublish.label': 'Снять с публикации',
  /** Fallback tooltip for the Unpublish document action when publish is invoked for a document with live edit enabled.*/
  'action.unpublish.live-edit.disabled':
    'Этот документ включает редактирование в реальном времени и не может быть снят с публикации',

  /** The text for the restore button on the deleted document banner */
  'banners.deleted-document-banner.restore-button.text': 'Восстановить последнюю версию',
  /** The text content for the deleted document banner */
  'banners.deleted-document-banner.text': 'Этот документ был удален.',
  /** The text content for the deprecated document type banner */
  'banners.deprecated-document-type-banner.text': 'Этот тип документа устарел.',
  /** The text for the permission check banner if the user only has one role, and it does not allow updating this document */
  'banners.permission-check-banner.missing-permission_create_one':
    'Ваша роль <Roles/> не имеет разрешений на создание этого документа.',
  /** The text for the permission check banner if the user only has one role, and it does not allow updating this document */
  'banners.permission-check-banner.missing-permission_update_one':
    'Ваша роль <Roles/> не имеет разрешений на обновление этого документа.',
  /** The text for the reload button */
  'banners.reference-changed-banner.reason-changed.reload-button.text': 'Перезагрузить ссылку',
  /** The text for the reference change banner if the reason is that the reference has been changed */
  'banners.reference-changed-banner.reason-changed.text':
    'Эта ссылка изменилась с тех пор, как вы ее открыли.',
  /** The text for the close button */
  'banners.reference-changed-banner.reason-removed.close-button.text': 'Закрыть ссылку',
  /** The text for the reference change banner if the reason is that the reference has been deleted */
  'banners.reference-changed-banner.reason-removed.text':
    'Эта ссылка была удалена с тех пор, как вы ее открыли.',

  /** Browser/tab title when creating a new document of a given type */
  'browser-document-title.new-document': 'Новый {{schemaType}}',
  /** Browser/tab title when editing a document where the title cannot be resolved from preview configuration */
  'browser-document-title.untitled-document': 'Без названия',

  /** The action menu button aria-label */
  'buttons.action-menu-button.aria-label': 'Открыть действия документа',
  /** The action menu button tooltip */
  'buttons.action-menu-button.tooltip': 'Действия с документом',
  /** The aria-label for the split pane button on the document panel header */
  'buttons.split-pane-button.aria-label': 'Разделить панель справа',
  /** The tool tip for the split pane button on the document panel header */
  'buttons.split-pane-button.tooltip': 'Разделить панель справа',
  /** The title for the close button on the split pane on the document panel header */
  'buttons.split-pane-close-button.title': 'Закрыть разделенную панель',
  /** The title for the close group button on the split pane on the document panel header */
  'buttons.split-pane-close-group-button.title': 'Закрыть группу панелей',

  /** The text in the "Cancel" button in the confirm delete dialog that cancels the action and closes the dialog */
  'confirm-delete-dialog.cancel-button.text': 'Отмена',
  /** Used in `confirm-delete-dialog.cdr-summary.title` */
  'confirm-delete-dialog.cdr-summary.document-count_one': '1 документ',
  /** The text that appears in the subtitle `<summary>` that lists the datasets below the title */
  'confirm-delete-dialog.cdr-summary.subtitle_one': 'Набор данных: {{datasets}}',
  /** The text that appears in the subtitle `<summary>` that lists the datasets below the title */
  'confirm-delete-dialog.cdr-summary.subtitle_unavailable_one': 'Недоступный набор данных',
  /** The text that appears in the title `<summary>` that includes the list of CDRs (singular) */
  'confirm-delete-dialog.cdr-summary.title_one': '{{documentCount}} в другом наборе данных',
  /** Appears when hovering over the copy button to copy */
  'confirm-delete-dialog.cdr-table.copy-id-button.tooltip': 'Скопировать ID в буфер обмена',
  /** The header for the dataset column in the list of cross-dataset references found */
  'confirm-delete-dialog.cdr-table.dataset.label': 'Набор данных',
  /** The header for the document ID column in the list of cross-dataset references found */
  'confirm-delete-dialog.cdr-table.document-id.label': 'ID документа',
  /** The toast title when the copy button has been clicked */
  'confirm-delete-dialog.cdr-table.id-copied-toast.title':
    'ID документа скопирован в буфер обмена!',
  /** The header for the project ID column in the list of cross-dataset references found */
  'confirm-delete-dialog.cdr-table.project-id.label': 'ID проекта',
  /** The text in the "Delete anyway" button in the confirm delete dialog that confirms the action */
  'confirm-delete-dialog.confirm-anyway-button.text_delete': 'Удалить в любом случае',
  /** The text in the "Unpublish anyway" button in the confirm delete dialog that confirms the action */
  'confirm-delete-dialog.confirm-anyway-button.text_unpublish': 'Снять с публикации в любом случае',
  /** The text in the "Delete now" button in the confirm delete dialog that confirms the action */
  'confirm-delete-dialog.confirm-button.text_delete': 'Удалить сейчас',
  /** The text in the "Unpublish now" button in the confirm delete dialog that confirms the action */
  'confirm-delete-dialog.confirm-button.text_unpublish': 'Снять с публикации сейчас',
  /** If no referring documents are found, this text appears above the cancel and confirmation buttons */
  'confirm-delete-dialog.confirmation.text_delete':
    'Вы уверены, что хотите удалить «<DocumentTitle/>»?',
  /** If no referring documents are found, this text appears above the cancel and confirmation buttons */
  'confirm-delete-dialog.confirmation.text_unpublish':
    'Вы уверены, что хотите снять с публикации «<DocumentTitle/>»?',
  /** The text body of the error dialog. */
  'confirm-delete-dialog.error.message.text':
    'Произошла ошибка при загрузке ссылающихся документов.',
  /** The text in the retry button of the confirm delete dialog if an error occurred. */
  'confirm-delete-dialog.error.retry-button.text': 'Повторить',
  /** The header of the confirm delete dialog if an error occurred while the confirm delete dialog was open. */
  'confirm-delete-dialog.error.title.text': 'Ошибка',
  /** The header of the confirm delete dialog */
  'confirm-delete-dialog.header.text_delete': 'Удалить документ?',
  /** The header of the confirm delete dialog */
  'confirm-delete-dialog.header.text_unpublish': 'Снять документ с публикации?',
  /** The text that appears while the referring documents are queried */
  'confirm-delete-dialog.loading.text': 'Поиск ссылающихся документов…',
  /** Shown if there are references to other documents but the user does not have the permission to see the relevant document IDs */
  'confirm-delete-dialog.other-reference-count.title_one': '1 другая ссылка не показана',
  /** Text in the tooltip of this component if hovering over the info icon */
  'confirm-delete-dialog.other-reference-count.tooltip':
    'Мы не можем отобразить метаданные для этих ссылок из-за отсутствия токена доступа для связанных наборов данных.',
  /** Appears when unable to render a document preview in the referring document list */
  'confirm-delete-dialog.preview-item.preview-unavailable.subtitle': 'ID: {{documentId}}',
  /** Appears when unable to render a document preview in the referring document list */
  'confirm-delete-dialog.preview-item.preview-unavailable.title':
    'Предварительный просмотр недоступен',
  /** Warns the user of affects to other documents if the action is confirmed (delete) */
  'confirm-delete-dialog.referential-integrity-disclaimer.text_delete':
    'Если вы удалите этот документ, документы, которые на него ссылаются, больше не смогут получить к нему доступ.',
  /** Warns the user of affects to other documents if the action is confirmed (unpublish) */
  'confirm-delete-dialog.referential-integrity-disclaimer.text_unpublish':
    'Если вы снимете этот документ с публикации, документы, которые на него ссылаются, больше не смогут получить к нему доступ.',
  /** Tells the user the count of how many other referring documents there are before listing them. (singular) */
  'confirm-delete-dialog.referring-document-count.text_one':
    '1 документ ссылается на «<DocumentTitle/>»',
  /** Describes the list of documents that refer to the one trying to be deleted (delete) */
  'confirm-delete-dialog.referring-documents-descriptor.text_delete':
    'Вы не сможете удалить «<DocumentTitle/>», потому что следующие документы ссылаются на него:',
  /** Describes the list of documents that refer to the one trying to be deleted (unpublish) */
  'confirm-delete-dialog.referring-documents-descriptor.text_unpublish':
    'Вы не сможете отменить публикацию «<DocumentTitle/>», потому что следующие документы ссылаются на него:',

  /** The text for the cancel button in the confirm dialog used in document action shortcuts if none is provided */
  'confirm-dialog.cancel-button.fallback-text': 'Отмена',
  /** The text for the confirm button in the confirm dialog used in document action shortcuts if none is provided */
  'confirm-dialog.confirm-button.fallback-text': 'Подтвердить',

  /** For the default structure definition, the title for the "Content" pane */
  'default-definition.content-title': 'Контент',

  /** The text shown if there was an error while getting the document's title via a preview value */
  'doc-title.error.text': 'Ошибка: {{errorMessage}}',
  /** The text shown if the preview value for a document is non-existent or empty */
  'doc-title.fallback.text': 'Без названия',
  /** The text shown if a document's title via a preview value cannot be determined due to an unknown schema type */
  'doc-title.unknown-schema-type.text': 'Неизвестный тип схемы: {{schemaType}}',

  /** Tooltip text shown for the close button of the document inspector */
  'document-inspector.close-button.tooltip': 'Закрыть',
  /** The title shown in the dialog header, when inspecting a valid document */
  'document-inspector.dialog.title': 'Инспектирование <DocumentTitle/>',
  /** The title shown in the dialog header, when the document being inspected is not created yet/has no value */
  'document-inspector.dialog.title-no-value': 'Нет значения',
  /** Title shown for menu item that opens the "Inspect" dialog */
  'document-inspector.menu-item.title': 'Инспектировать',
  /** the placeholder text for the search input on the inspect dialog */
  'document-inspector.search.placeholder': 'Поиск',
  /** The "parsed" view mode, meaning the JSON is searchable, collapsible etc */
  'document-inspector.view-mode.parsed': 'Разобранный',
  /** The "raw" view mode, meaning the JSON is presented syntax-highlighted, but with no other features - optimal for copying */
  'document-inspector.view-mode.raw-json': 'Исходный JSON',

  /** The text for when a form is hidden */
  'document-view.form-view.form-hidden': 'Эта форма скрыта',
  /** Fallback title shown when a form title is not provided */
  'document-view.form-view.form-title-fallback': 'Без названия',
  /** The text for when the form view is loading a document */
  'document-view.form-view.loading': 'Загрузка документа…',
  /** The description of the sync lock toast on the form view */
  'document-view.form-view.sync-lock-toast.description':
    'Пожалуйста, подождите, пока документ синхронизируется. Это обычно происходит сразу после публикации документа и не должно занять более нескольких секунд',
  /** The title of the sync lock toast on the form view */
  'document-view.form-view.sync-lock-toast.title': 'Синхронизация документа…',

  /** The loading messaging for when the tooltip is still loading permission info */
  'insufficient-permissions-message-tooltip.loading-text': 'Загрузка…',

  /** --- Menu items --- */
  /** The menu item group title to use for the Action menu items */
  'menu-item-groups.actions-group': 'Действия',
  /** The menu item group title to use for the Layout menu items */
  'menu-item-groups.layout-group': 'Макет',
  /** The menu item group title to use for the Sort menu items */
  'menu-item-groups.sorting-group': 'Сортировка',

  /** The menu item title to use the compact view */
  'menu-items.layout.compact-view': 'Компактный вид',
  /** The menu item title to use the detailed view */
  'menu-items.layout.detailed-view': 'Подробный вид',
  /** The menu item title to Sort by Created */
  'menu-items.sort-by.created': 'Сортировать по дате создания',
  /** The menu item title to Sort by Last Edited */
  'menu-items.sort-by.last-edited': 'Сортировать по последнему редактированию',

  /** The link text of the no document type screen that appears directly below the subtitle */
  'no-document-types-screen.link-text': 'Узнайте, как добавить тип документа →',
  /** The subtitle of the no document type screen that appears directly below the title */
  'no-document-types-screen.subtitle':
    'Пожалуйста, определите хотя бы один тип документа в вашей схеме.',
  /** The title of the no document type screen */
  'no-document-types-screen.title': 'Нет типов документов',

  /** Text shown on back button visible on smaller breakpoints */
  'pane-header.back-button.text': 'Назад',
  /** tooltip text (via `title` attribute) for the menu button */
  'pane-header.context-menu-button.tooltip': 'Показать меню',
  /** Appears in a document list pane header if there are more than one option for create. This is the label for that menu */
  'pane-header.create-menu.label': 'Создать',
  /** Tooltip displayed on the create new button in document lists */
  'pane-header.create-new-button.tooltip': 'Создать новый документ',
  /** The `aria-label` for the disabled button in the pane header if create permissions are granted */
  'pane-header.disabled-created-button.aria-label': 'Недостаточно прав',

  /** The text shown in the tooltip of pane item previews of documents if there are unpublished edits */
  'pane-item.draft-status.has-draft.tooltip': 'Отредактировано <RelativeTime/>',
  /** The text shown in the tooltip of pane item previews of documents if there are no unpublished edits */
  'pane-item.draft-status.no-draft.tooltip': 'Нет неопубликованных правок',
  /** The subtitle tor pane item previews if there isn't a matching schema type found */
  'pane-item.missing-schema-type.subtitle': 'Документ: <Code>{{documentId}}</Code>',
  /** The title tor pane item previews if there isn't a matching schema type found */
  'pane-item.missing-schema-type.title': 'Схема для типа <Code>{{documentType}}</Code> не найдена',
  /** The text shown in the tooltip of pane item previews of documents if there are unpublished edits */
  'pane-item.published-status.has-published.tooltip': 'Опубликовано <RelativeTime/>',
  /** The text shown in the tooltip of pane item previews of documents if there are no unpublished edits */
  'pane-item.published-status.no-published.tooltip': 'Нет неопубликованных изменений',

  /** The text used in the document header title if there is an error */
  'panes.document-header-title.error.text': 'Ошибка: {{error}}',
  /** The text used in the document header title if creating a new item */
  'panes.document-header-title.new.text': 'Новый {{schemaType}}',
  /** The text used in the document header title if no other title can be determined */
  'panes.document-header-title.untitled.text': 'Без названия',
  /** The text for the retry button on the document list pane */
  'panes.document-list-pane.error.retry-button.text': 'Повторить',
  /** The error text on the document list pane */
  'panes.document-list-pane.error.text': 'Ошибка: <Code>{{error}}</Code>',
  /** The error title on the document list pane */
  'panes.document-list-pane.error.title': 'Не удалось получить список элементов',
  /** The text of the document list pane if more than a maximum number of documents are returned */
  'panes.document-list-pane.max-items.text': 'Отображается максимум {{limit}} документов',
  /** The text of the document list pane if no documents are found for a specified type */
  'panes.document-list-pane.no-documents-of-type.text': 'Документов этого типа не найдено',
  /** The text of the document list pane if no documents are found */
  'panes.document-list-pane.no-documents.text': 'Результаты не найдены',
  /** The text of the document list pane if no documents are found matching specified criteria */
  'panes.document-list-pane.no-matching-documents.text': 'Соответствующих документов не найдено',
  /** The aria-label for the search input on the document list pane */
  'panes.document-list-pane.search-input.aria-label': 'Поиск по списку',
  /** The search input for the search input on the document list pane */
  'panes.document-list-pane.search-input.placeholder': 'Поиск по списку',
  /** The summary title when displaying an error for a document operation result */
  'panes.document-operation-results.error.summary.title': 'Подробности',
  /** The text when a generic operation failed (fallback, generally not shown)  */
  'panes.document-operation-results.operation-error': 'Произошла ошибка во время {{context}}',
  /** The text when a delete operation failed  */
  'panes.document-operation-results.operation-error_delete':
    'Произошла ошибка при попытке удалить этот документ. Обычно это означает, что есть другие документы, которые ссылаются на него.',
  /** The text when an unpublish operation failed  */
  'panes.document-operation-results.operation-error_unpublish':
    'Произошла ошибка при попытке снять с публикации этот документ. Обычно это означает, что есть другие документы, которые ссылаются на него.',
  /** The text when a generic operation succeeded (fallback, generally not shown)  */
  'panes.document-operation-results.operation-success':
    'Успешно выполнено {{context}} над документом',
  /** The text when a delete operation succeeded  */
  'panes.document-operation-results.operation-success_delete': 'Документ был успешно удален',
  /** The text when a discard changes operation succeeded  */
  'panes.document-operation-results.operation-success_discardChanges':
    'Все изменения с последней публикации теперь отменены. Отмененный черновик все еще можно восстановить из истории',
  /** The text when a publish operation succeeded  */
  'panes.document-operation-results.operation-success_publish': 'Документ был опубликован',
  /** The text when a restore operation succeeded  */
  'panes.document-operation-results.operation-success_restore': undefined, // '<Strong>{{title}}</Strong> was restored'
  /** The text when an unpublish operation succeeded  */
  'panes.document-operation-results.operation-success_unpublish':
    'Документ был снят с публикации. Черновик был создан из последней опубликованной версии.',
  /** The document title shown when document title is "undefined" in operation message */
  'panes.document-operation-results.operation-undefined-title': undefined, // 'Untitled'
  /** The title of the reconnecting toast */
  'panes.document-pane-provider.reconnecting.title': 'Соединение потеряно. Переподключение…',
  /** The loading message for the document not found pane */
  'panes.document-pane.document-not-found.loading': 'Загрузка документа…',
  /** The text of the document not found pane if the schema is known */
  'panes.document-pane.document-not-found.text':
    'Тип документа не определен, и документ с идентификатором <Code>{{id}}</Code> не может быть найден.',
  /** The title of the document not found pane if the schema is known */
  'panes.document-pane.document-not-found.title': 'Документ не найден',
  /** The text of the document not found pane if the schema is not found */
  'panes.document-pane.document-unknown-type.text':
    'У этого документа тип схемы <Code>{{documentType}}</Code>, который не определен как тип в локальной схеме контент-студии.',
  /** The title of the document not found pane if the schema is not found or unknown */
  'panes.document-pane.document-unknown-type.title':
    'Неизвестный тип документа: <Code>{{documentType}}</Code>',
  /** The title of the document not found pane if the schema is unknown */
  'panes.document-pane.document-unknown-type.without-schema.text':
    'Этот документ не существует, и для него не был указан тип схемы.',
  /** Default message shown while resolving the structure definition for an asynchronous node */
  'panes.resolving.default-message': 'Загрузка…',
  /** Message shown while resolving the structure definition for an asynchronous node and it is taking a while (more than 5s) */
  'panes.resolving.slow-resolve-message': 'Всё ещё загружается…',
  /** The text to display when type is missing */
  'panes.unknown-pane-type.missing-type.text':
    'Элемент структуры не содержит необходимое свойство <Code>type</Code>.',
  /** The title of the unknown pane */
  'panes.unknown-pane-type.title': 'Неизвестный тип панели',
  /** The text to display when type is unknown */
  'panes.unknown-pane-type.unknown-type.text':
    'Элемент структуры типа <Code>{{type}}</Code> не является известной сущностью.',

  /** The text for the "Open preview" action for a document */
  'production-preview.menu-item.title': 'Открыть предпросмотр',

  /** Label for button when status is saved */
  'status-bar.document-status-pulse.status.saved.text': 'Сохранено',
  /** Label for button when status is syncing */
  'status-bar.document-status-pulse.status.syncing.text': 'Сохранение...',
  /** Accessibility label indicating when the document was last published, in relative time, eg "3 weeks ago" */
  'status-bar.publish-status-button.last-published-time.aria-label':
    'Последняя публикация {{relativeTime}}',
  /** Text for tooltip showing explanation of timestamp/relative time, eg "Last published <RelativeTime/>" */
  'status-bar.publish-status-button.last-published-time.tooltip':
    'Последняя публикация <RelativeTime/>',
  /** Accessibility label indicating when the document was last updated, in relative time, eg "2 hours ago" */
  'status-bar.publish-status-button.last-updated-time.aria-label':
    'Последнее обновление {{relativeTime}}',
  /** Text for tooltip showing explanation of timestamp/relative time, eg "Last updated <RelativeTime/>" */
  'status-bar.publish-status-button.last-updated-time.tooltip':
    'Последнее обновление <RelativeTime/>',
  /** Aria label for the button */
  'status-bar.review-changes-button.aria-label': 'Просмотр изменений',
  /** Label for button when status is saved */
  'status-bar.review-changes-button.status.saved.text': 'Сохранено!',
  /** Label for button when status is syncing */
  'status-bar.review-changes-button.status.syncing.text': 'Сохранение...',
  /** Text for the secondary text for tooltip for the button */
  'status-bar.review-changes-button.tooltip.changes-saved': 'Изменения сохранены',
  /** Primary text for tooltip for the button */
  'status-bar.review-changes-button.tooltip.text': 'Просмотр изменений',

  /** The text that appears in side the documentation link */
  'structure-error.docs-link.text': 'Посмотреть документацию',
  /** Labels the error message or error stack of the structure error screen */
  'structure-error.error.label': 'Ошибка',
  /** The header that appears at the top of the error screen */
  'structure-error.header.text': 'Возникла ошибка при чтении структуры',
  /** The text in the reload button to retry rendering the structure */
  'structure-error.reload-button.text': 'Перезагрузить',
  /** Labels the structure path of the structure error screen */
  'structure-error.structure-path.label': 'Путь структуры',
})
