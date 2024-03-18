import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Menu item for deleting the asset */
  'asset-source.asset-list.menu.delete': 'Удалить',
  /** Menu item for showing where a particular asset is used */
  'asset-source.asset-list.menu.show-usage': 'Показать использование',
  /** Header in usage dialog for file assets */
  'asset-source.asset-usage-dialog.header_file': 'Документы, использующие файл',
  /** Header in usage dialog for image assets */
  'asset-source.asset-usage-dialog.header_image': 'Документы, использующие изображение',
  /** Text shown in usage dialog when loading documents using the selected asset */
  'asset-source.asset-usage-dialog.loading': 'Загрузка…',
  /** Text for cancel action in delete-asset dialog */
  'asset-source.delete-dialog.action.cancel': 'Отмена',
  /** Text for "confirm delete" action in delete-asset dialog */
  'asset-source.delete-dialog.action.delete': 'Удалить',
  /** Dialog header for delete-asset dialog when deleting a file */
  'asset-source.delete-dialog.header_file': 'Удалить файл',
  /** Dialog header for delete-asset dialog when deleting an image */
  'asset-source.delete-dialog.header_image': 'Удалить изображение',
  /** Text shown in delete dialog when loading documents using the selected asset */
  'asset-source.delete-dialog.loading': 'Загрузка…',
  /** Message confirming to delete *named* file */
  'asset-source.delete-dialog.usage-list.confirm-delete-file_named':
    'Вы собираетесь удалить файл <strong>{{filename}}}</strong> и его метаданные. Вы уверены?',
  /** Message confirming to delete *unnamed* file */
  'asset-source.delete-dialog.usage-list.confirm-delete-file_unnamed':
    'Вы собираетесь удалить файл и его метаданные. Вы уверены?',
  /** Message confirming to delete *named* image */
  'asset-source.delete-dialog.usage-list.confirm-delete-image_named':
    'Вы собираетесь удалить изображение <strong>{{filename}}</strong> и его метаданные. Вы уверены?',
  /** Message confirming to delete *unnamed* image */
  'asset-source.delete-dialog.usage-list.confirm-delete-image_unnamed':
    'Вы собираетесь удалить изображение и его метаданные. Вы уверены?',
  /** Alt text showing on image preview in delete asset dialog  */
  'asset-source.delete-dialog.usage-list.image-preview-alt': 'Предпросмотр изображения',
  /** Warning message showing when *named* file can't be deleted because it is in use */
  'asset-source.delete-dialog.usage-list.warning-file-is-in-use_named':
    '{{filename}} не может быть удален, так как он используется. Чтобы удалить этот файл, сначала нужно удалить все его использования.',
  /** Warning message showing when *unnamed* file can't be deleted because it is in use */
  'asset-source.delete-dialog.usage-list.warning-file-is-in-use_unnamed':
    'Этот файл не может быть удален, так как он используется. Чтобы удалить его, сначала нужно удалить все его использования.',
  /** Warning message showing when *named* image can't be deleted because it is in use */
  'asset-source.delete-dialog.usage-list.warning-image-is-in-use_named':
    '{{filename}} не может быть удалено, так как оно используется. Чтобы удалить это изображение, сначала нужно удалить все его использования.',
  /** Warning message showing when *unnamed* image can't be deleted because it is in use */
  'asset-source.delete-dialog.usage-list.warning-image-is-in-use_unnamed':
    'Это изображение не может быть удалено, так как оно используется. Чтобы удалить его, сначала нужно удалить все его использования.',
  /** Text shown when the list of assets only include a specific set of types */
  'asset-source.dialog.accept-message':
    'Показаны только ресурсы принятых типов: <strong>{{acceptTypes}}</strong>',
  /** Keys shared between both image asset source and file asset source */
  /** Select asset dialog title for files */
  'asset-source.dialog.default-title_file': 'Выбрать файл',
  /** Select asset dialog title for images */
  'asset-source.dialog.default-title_image': 'Выбрать изображение',
  /** Select asset dialog load more items */
  'asset-source.dialog.load-more': 'Загрузить больше',
  /** Text shown when selecting a file but there's no files to select from */
  'asset-source.dialog.no-assets_file': 'Нет файлов',
  /** Text shown when selecting an image but there's no images to select from */
  'asset-source.dialog.no-assets_image': 'Нет изображений',
  'asset-source.file.asset-list.action.delete.disabled-cannot-delete-current-file':
    'Невозможно удалить текущий выбранный файл',
  'asset-source.file.asset-list.action.delete.text': 'Удалить',
  'asset-source.file.asset-list.action.delete.title': 'Удалить файл',
  'asset-source.file.asset-list.action.select-file.title': 'Выберите файл {{filename}}',
  'asset-source.file.asset-list.action.show-usage.title': 'Показать использование',
  'asset-source.file.asset-list.delete-failed': 'Файл не удалось удалить',
  'asset-source.file.asset-list.delete-successful': 'Файл был удален',
  'asset-source.file.asset-list.header.date-added': 'Дата добавления',
  /** File asset source */
  'asset-source.file.asset-list.header.filename': 'Имя файла',
  'asset-source.file.asset-list.header.size': 'Размер',
  'asset-source.file.asset-list.header.type': 'Тип',
  /** Text displayed on button or menu invoking the file asset source */
  'asset-source.file.title': 'Загруженные файлы',
  'asset-source.image.asset-list.delete-failed': 'Изображение не удалось удалить',
  /** Image asset source */
  'asset-source.image.asset-list.delete-successful': 'Изображение было удалено',
  /** Text displayed on button or menu invoking the image asset source */
  'asset-source.image.title': 'Загруженные изображения',
  'asset-source.usage-list.documents-using-file_named_one':
    'Один документ использует файл <code>{{filename}}</code>',
  /** Text shown in usage dialog for a file asset when there are zero, one or more documents using the *named* file **/
  'asset-source.usage-list.documents-using-file_named_zero':
    'Ни один документ не использует файл <code>{{filename}}</code>',
  'asset-source.usage-list.documents-using-file_unnamed_one': 'Один документ использует этот файл',
  /** Text shown in usage dialog for a file asset when there are zero, one or more documents using the *unnamed* file **/
  'asset-source.usage-list.documents-using-file_unnamed_zero':
    'Ни один документ не использует этот файл',
  'asset-source.usage-list.documents-using-image_named_one':
    'Один документ использует изображение <code>{{filename}}</code>',
  /** Text shown in usage dialog for an image asset when there are zero, one or more documents using the *named* image **/
  'asset-source.usage-list.documents-using-image_named_zero':
    'Ни один документ не использует изображение <code>{{filename}}</code>',
  'asset-source.usage-list.documents-using-image_unnamed_one':
    'Один документ использует это изображение',
  /** Text shown in usage dialog for an image asset when there are zero, one or more documents using the *unnamed* image **/
  'asset-source.usage-list.documents-using-image_unnamed_zero':
    'Ни один документ не использует это изображение',

  /** Action message for navigating to next month */
  'calendar.action.go-to-next-month': 'Перейти к следующему месяцу',
  /** Action message for navigating to next year */
  'calendar.action.go-to-next-year': 'Перейти к следующему году',
  /** Action message for navigating to previous month */
  'calendar.action.go-to-previous-month': 'Перейти к предыдущему месяцу',
  /** Action message for navigating to previous year */
  'calendar.action.go-to-previous-year': 'Перейти к предыдущему году',
  /* Label for navigating the calendar to "today", without _selecting_ today. Short form, eg `Today`, not `Go to today` */
  'calendar.action.go-to-today': 'Сегодня',
  /* Accessibility label for navigating the calendar to "today", without _selecting_ today */
  'calendar.action.go-to-today-aria-label': 'Перейти к сегодняшнему дню',
  /* Label for navigating the calendar to "tomorrow", without _selecting_ tomorrow. Short form, eg `Tomorrow`, not `Go to tomorrow` */
  'calendar.action.go-to-tomorrow': 'Завтра',
  /* Label for navigating the calendar to "yesterday", without _selecting_ yesterday. Short form, eg `Yesterday`, not `Go to yesterday` */
  'calendar.action.go-to-yesterday': 'Вчера',
  /** Label for switch that controls whether or not to include time in given timestamp */
  'calendar.action.include-time-label': 'Включить время',
  /** Action message for selecting the hour */
  'calendar.action.select-hour': 'Выбрать час',
  /** Action message for selecting the minute */
  'calendar.action.select-minute': 'Выбрать минуту',
  /** Action message for setting to the current time */
  'calendar.action.set-to-current-time': 'Установить текущее время',
  /** Label for selecting an hour preset. Receives a `time` param as a string on hh:mm format and a `date` param as a Date instance denoting the preset date */
  'calendar.action.set-to-time-preset': '{{time}} на {{date, datetime}}',
  /** Error message displayed in calendar when entered date is not the correct format */
  'calendar.error.must-be-in-format': 'Должно быть в формате <Emphasis>{{exampleDate}}</Emphasis>',
  /** Month name for April */
  'calendar.month-names.april': 'Апрель',
  /** Month name for August */
  'calendar.month-names.august': 'Август',
  /** Month name for December */
  'calendar.month-names.december': 'Декабрь',
  /** Month name for February */
  'calendar.month-names.february': 'Февраль',
  /** Month name for January */
  'calendar.month-names.january': 'Январь',
  /** Month name for July */
  'calendar.month-names.july': 'Июль',
  /** Month name for June */
  'calendar.month-names.june': 'Июнь',
  /** Month name for March */
  'calendar.month-names.march': 'Март',
  /** Month name for May */
  'calendar.month-names.may': 'Май',
  /** Month name for November */
  'calendar.month-names.november': 'Ноябрь',
  /** Month name for October */
  'calendar.month-names.october': 'Октябрь',
  /** Month name for September */
  'calendar.month-names.september': 'Сентябрь',
  /** Short weekday name for Friday */
  'calendar.weekday-names.short.friday': 'Пт',
  /** Short weekday name for Monday */
  'calendar.weekday-names.short.monday': 'Пн',
  /** Short weekday name for Saturdayday */
  'calendar.weekday-names.short.saturday': 'Сб',
  /** Short weekday name for Sunday */
  'calendar.weekday-names.short.sunday': 'Вс',
  /** Short weekday name for Thursday */
  'calendar.weekday-names.short.thursday': 'Чт',
  /** Short weekday name for Tuesday */
  'calendar.weekday-names.short.tuesday': 'Вт',
  /** Short weekday name for Wednesday */
  'calendar.weekday-names.short.wednesday': 'Ср',

  /** Label for the close button label in Review Changes pane */
  'changes.action.close-label': 'Закрыть просмотр изменений',
  /** Cancel label for revert button prompt action */
  'changes.action.revert-all-cancel': 'Отмена',
  /** Revert all confirm label for revert button action - used on prompt button + review changes pane */
  'changes.action.revert-all-confirm': 'Отменить все',
  /** Prompt for confirming revert change (singular) label for field change action */
  'changes.action.revert-changes-confirm-change_one': 'Отменить изменение',
  /** Prompt for reverting changes for a field change */
  'changes.action.revert-changes-description': 'Вы уверены, что хотите отменить изменения?',
  /** Prompt for reverting changes for a group change, eg multiple changes */
  'changes.action.revert-changes-description_one': 'Вы уверены, что хотите отменить изменение?',
  /** Label for when the action of the change was to set something that was previously empty, eg a field was given a value, an array item was added, an asset was selected or similar */
  'changes.added-label': 'Добавлено',
  /** Array diff: An item was added in a given position (`{{position}}`) */
  'changes.array.item-added-in-position': 'Добавлено на позицию {{position}}',
  'changes.array.item-moved_down_one': 'Перемещено на {{count}} позицию вниз',
  /**
   * Array diff: An item was moved within the array.
   * Receives `{{count}}` representing number of positions it moved.
   * Context is the direction of the move, either `up` or `down`.
   */
  'changes.array.item-moved_up_one': 'Перемещено на {{count}} позицию вверх',
  /** Array diff: An item was removed from a given position (`{{position}}`) */
  'changes.array.item-removed-from-position': 'Удалено с позиции {{position}}',
  /** Accessibility label for the "change bar" shown when there are edits on a field-level */
  'changes.change-bar.aria-label': 'Просмотр изменений',
  /** Label for when the action of the change was _not_ an add/remove, eg a text field changed value, an image was changed from one asset to another or similar */
  'changes.changed-label': 'Изменено',
  /** Label and text for tooltip that indicates the authors of the changes */
  'changes.changes-by-author': 'Изменения от',
  /** Additional text shown in development mode when a diff component crashes during rendering */
  'changes.error-boundary.developer-info':
    'Проверьте консоль разработчика для получения дополнительной информации',
  /** Text shown when a diff component crashes during rendering, triggering the error boundary */
  'changes.error-boundary.title': 'Отображение изменений в этом поле вызвало ошибку',
  /** Error message shown when the value of a field is not the expected one */
  'changes.error.incorrect-type-message':
    'Ошибка значения: значение имеет тип "<code>{{actualType}}</code>", ожидалось "<code>{{expectedType}}</code>"',
  /** File diff: Fallback title for the meta info section when there is no original filename to use  */
  'changes.file.meta-info-fallback-title': 'Без названия',
  /** Image diff: Text shown in tooltip when hovering hotspot that has changed in diff view */
  'changes.image.crop-changed': 'Обрезка изменена',
  /** Image diff: Text shown if the previous image asset was deleted (shouldn't theoretically happen) */
  'changes.image.deleted': 'Изображение удалено',
  /** Image diff: Text shown if the image failed to be loaded when previewing it */
  'changes.image.error-loading-image': 'Ошибка загрузки изображения',
  /** Image diff: Text shown in tooltip when hovering hotspot that has changed in diff view */
  'changes.image.hotspot-changed': 'Хотспот изменен',
  /** Image diff: Fallback title for the meta info section when there is no original filename to use  */
  'changes.image.meta-info-fallback-title': 'Без названия',
  /** Image diff: Text shown if no asset has been set for the field (but has metadata changes) */
  'changes.image.no-asset-set': 'Изображение не установлено',
  /** Image diff: Text shown when the from/to state has/had no image */
  'changes.image.no-image-placeholder': '(нет изображения)',
  /** Label for the "from" value in the change inspector */
  'changes.inspector.from-label': 'От',
  /** Label for the "meta" (field path, action etc) information in the change inspector */
  'changes.inspector.meta-label': 'Мета',
  /** Label for the "to" value in the change inspector */
  'changes.inspector.to-label': 'К',
  /** Loading author of change in the differences tooltip in the review changes pane */
  'changes.loading-author': 'Загрузка…',
  /** Loading changes in Review Changes Pane */
  'changes.loading-changes': 'Загрузка изменений…',
  /** No Changes description in the Review Changes pane */
  'changes.no-changes-description':
    'Отредактируйте документ или выберите более старую версию во временной шкале, чтобы увидеть список изменений в этой панели.',
  /** No Changes title in the Review Changes pane */
  'changes.no-changes-title': 'Изменений нет',
  /** Portable Text diff: An annotation was added */
  'changes.portable-text.annotation_added': 'Добавлена аннотация',
  /** Portable Text diff: An annotation was changed */
  'changes.portable-text.annotation_changed': 'Изменена аннотация',
  /** Portable Text diff: An annotation was removed */
  'changes.portable-text.annotation_removed': 'Удалена аннотация',
  /** Portable Text diff: An annotation was left unchanged */
  'changes.portable-text.annotation_unchanged': 'Аннотация без изменений',
  /** Portable Text diff: A block changed from one style to another (eg `normal` to `h1` or similar) */
  'changes.portable-text.block-style-changed':
    'Изменен стиль блока с "{{fromStyle}}" на "{{toStyle}}"',
  /** Portable Text diff: Change formatting of text (setting/unsetting marks, eg bold/italic etc) */
  'changes.portable-text.changed-formatting': 'Изменено форматирование',
  /** Portable Text diff: An empty inline object is part of a change */
  'changes.portable-text.empty-inline-object': 'Пустой {{inlineObjectType}}',
  /** Portable Text diff: An empty object is the result of adding/removing an annotation */
  'changes.portable-text.empty-object-annotation': 'Пустой {{annotationType}}',
  /** Portable Text diff: Added a block containing no text (eg empty block) */
  'changes.portable-text.empty-text_added': 'Добавлен пустой текст',
  /** Portable Text diff: Changed a block that contained no text (eg empty block) */
  'changes.portable-text.empty-text_changed': 'Изменен пустой текст',
  /** Portable Text diff: Removed a block containing no text (eg empty block) */
  'changes.portable-text.empty-text_removed': 'Удален пустой текст',
  /** Portable Text diff: An inline object was added */
  'changes.portable-text.inline-object_added': 'Добавлен встроенный объект',
  /** Portable Text diff: An inline object was changed */
  'changes.portable-text.inline-object_changed': 'Изменен встроенный объект',
  /** Portable Text diff: An inline object was removed */
  'changes.portable-text.inline-object_removed': 'Удален встроенный объект',
  /** Portable Text diff: An inline object was left unchanged */
  'changes.portable-text.inline-object_unchanged': 'Встроенный объект без изменений',
  /** Portable Text diff: Added a chunk of text */
  'changes.portable-text.text_added': 'Текст добавлен',
  /** Portable Text diff: Removed a chunk of text */
  'changes.portable-text.text_removed': 'Текст удален',
  /** Portable Text diff: Annotation has an unknown schema type */
  'changes.portable-text.unknown-annotation-schema-type': 'Неизвестный тип схемы аннотации',
  /** Portable Text diff: Inline object has an unknown schema type */
  'changes.portable-text.unknown-inline-object-schema-type':
    'Неизвестный тип схемы встроенного объекта',
  /** Label for when the action of the change was a removal, eg a field was cleared, an array item was removed, an asset was deselected or similar */
  'changes.removed-label': 'Удалено',
  /** Title for the Review Changes pane */
  'changes.title': 'Просмотр изменений',

  /** --- Common components --- */
  /** Tooltip text for context menu buttons */
  'common.context-menu-button.tooltip': 'Показать больше',
  /** Default text for dialog cancel button */
  'common.dialog.cancel-button.text': 'Отмена',
  /** Default text for dialog confirm button */
  'common.dialog.confirm-button.text': 'Подтвердить',
  /** Default text in shared loader text / spinner lockup */
  'common.loading': 'Загрузка',

  /** --- Configuration issues --- */
  /** Tooltip displayed on configuration issues button */
  'configuration-issues.button.tooltip': 'Обнаружены проблемы конфигурации',

  /** The fallback title for an ordering menu item if no localized titles are provided. */
  'default-menu-item.fallback-title': 'Сортировать по {{title}}',

  /** Title for the default ordering/SortOrder if no orderings are provided and the caption field is found */
  'default-orderings.caption': 'Сортировать по подписи',
  /** Title for the default ordering/SortOrder if no orderings are provided and the description field is found */
  'default-orderings.description': 'Сортировать по описанию',
  /** Title for the default ordering/SortOrder if no orderings are provided and the header field is found */
  'default-orderings.header': 'Сортировать по заголовку',
  /** Title for the default ordering/SortOrder if no orderings are provided and the heading field is found */
  'default-orderings.heading': 'Сортировать по заголовку',
  /** Title for the default ordering/SortOrder if no orderings are provided and the label field is found */
  'default-orderings.label': 'Сортировать по метке',
  /** Title for the default ordering/SortOrder if no orderings are provided and the name field is found */
  'default-orderings.name': 'Сортировать по имени',
  /** Title for the default ordering/SortOrder if no orderings are provided and the title field is found */
  'default-orderings.title': 'Сортировать по названию',

  /** Label to show in the document footer indicating the last edited date of the document */
  'document-status.edited': 'Отредактировано {{date}}',
  /** Label to show in the document footer indicating the document is not published*/
  'document-status.not-published': 'Не опубликовано',
  /** Label to show in the document footer indicating the published date of the document */
  'document-status.published': 'Опубликовано {{date}}',

  /** The value of the <code>_key</code> property must be a unique string. */
  'form.error.duplicate-keys-alert.details.additional-description':
    'Значение свойства <code>_key</code> должно быть уникальной строкой.',
  /** This usually happens when items are created using an API client, and the <code>_key</code> property of each elements has been generated non-uniquely. */
  'form.error.duplicate-keys-alert.details.description':
    'Это обычно происходит, когда элементы создаются с помощью клиента API, и свойство <code>_key</code> каждого элемента было сгенерировано неуникально.',
  /** Developer info */
  'form.error.duplicate-keys-alert.details.title': 'Информация для разработчиков',
  /** Generate unique keys */
  'form.error.duplicate-keys-alert.generate-button.text': 'Сгенерировать уникальные ключи',
  /** Several items in this list share the same identifier (key). Every item must have an unique identifier. */
  'form.error.duplicate-keys-alert.summary':
    'Несколько элементов в этом списке имеют одинаковый идентификатор (ключ). Каждый элемент должен иметь уникальный идентификатор.',
  /** Non-unique keys */
  'form.error.duplicate-keys-alert.title': 'Неуникальные ключи',
  /** Error text shown when a field with a given name cannot be found in the schema or is conditionally hidden but explicitly told to render  */
  'form.error.field-not-found':
    'Поле "{{fieldName}}" не найдено среди элементов – убедитесь, что оно определено в схеме и что оно не было условно скрыто.',
  /** Add missing keys */
  'form.error.missing-keys-alert.add-button.text': 'Добавить отсутствующие ключи',
  /** The value of the <code>_key</code> property must be a unique string. */
  'form.error.missing-keys-alert.details.additional-description':
    'Значение свойства <code>_key</code> должно быть уникальной строкой.',
  /** This usually happens when items are created using an API client, and the <code>_key</code> property has not been included. */
  'form.error.missing-keys-alert.details.description':
    'Это обычно происходит, когда элементы создаются с помощью клиента API, и свойство <code>_key</code> не было включено.',
  /** Developer info */
  'form.error.missing-keys-alert.details.title': 'Информация для разработчиков',
  /** Some items in the list are missing their keys. This must be fixed in order to edit the list. */
  'form.error.missing-keys-alert.summary':
    'Некоторым элементам в списке не хватает ключей. Это должно быть исправлено для редактирования списка.',
  /** Missing keys */
  'form.error.missing-keys-alert.title': 'Отсутствующие ключи',
  /** This usually happens when items are created using an API client, or when a custom input component has added invalid data to the list. */
  'form.error.mixed-array-alert.details.description':
    'Это обычно происходит, когда элементы создаются с помощью клиента API, или когда пользовательский компонент ввода добавил неверные данные в список.',
  /** Developer info */
  'form.error.mixed-array-alert.details.title': 'Информация для разработчиков',
  /**  Remove non-object values */
  'form.error.mixed-array-alert.remove-button.text': 'Удалить необъектные значения',
  /** Some items in this list are not objects. This must be fixed in order to edit the list. */
  'form.error.mixed-array-alert.summary':
    'Некоторые элементы в этом списке не являются объектами. Это должно быть исправлено для редактирования списка.',
  /** Invalid list values */
  'form.error.mixed-array-alert.title': 'Неверные значения списка',
  /** Error text shown when form is unable to find an array item at a given indexed path */
  'form.error.no-array-item-at-index':
    'Элемент массива по индексу <code>{{index}}</code> не найден по пути <code>{{path}}</code>',
  /** Error text shown when form is unable to find an array item at a given keyed path */
  'form.error.no-array-item-at-key':
    'Элемент массива с `_key` <code>"{{key}}"</code> не найден по пути <code>{{path}}</code>',
  /** Form field deprecated label */
  'form.field.deprecated-label': 'устаревший',
  /** Fallback title shown above field if it has no defined title */
  'form.field.untitled-field-label': 'Без названия',
  /** Fallback title shown above fieldset if it has no defined title */
  'form.field.untitled-fieldset-label': 'Без названия',
  /** Accessibility label for the icon that indicates the field has a validation error */
  'form.validation.has-error-aria-label': 'Есть ошибка',
  /** Accessibility label for the icon that indicates the field has validation information */
  'form.validation.has-info-aria-label': 'Есть информация',
  /** Accessibility label for the icon that indicates the field has a validation warning */
  'form.validation.has-warning-aria-label': 'Есть предупреждение',
  /** Text shown when summarizing validation information, when the field has one or more errors */
  'form.validation.summary.errors-count_one': '{{count}} ошибка',
  /** Text shown when summarizing validation information, when the field has one or more warnings */
  'form.validation.summary.warnings-count_one': '{{count}} предупреждение',

  /** Tooltip for free trial navbar button indicating remaining days */
  'free-trial.tooltip.days-count_one': '{{count}} день остался в пробной версии',
  /** Tooltip for free trial navbar button, once trial has ended */
  'free-trial.tooltip.trial-finished': 'Перейдите на расширенный тарифный план',

  /**
   * Label for "contact sales" call to action
   * These are titles for fallback links in the event the help & resources endpoint isn't able to be fetched
   */
  'help-resources.action.contact-sales': 'Связаться с отделом продаж',
  /**
   * Label for "help and support" call to action
   * These are titles for fallback links in the event the help & resources endpoint isn't able to be fetched
   */
  'help-resources.action.help-and-support': 'Помощь и поддержка',
  /**
   * Label for "join our community" call to action
   * These are titles for fallback links in the event the help & resources endpoint isn't able to be fetched
   */
  'help-resources.action.join-our-community': 'Присоединиться к нашему сообществу',
  /** Information for what the latest sanity version is */
  'help-resources.latest-sanity-version': 'Последняя версия {{latestVersion}}',
  /** Information for what studio version the current studio is running */
  'help-resources.studio-version': 'Версия Sanity Studio {{studioVersion}}',
  /** Title for help and resources menus */
  'help-resources.title': 'Помощь и ресурсы',

  /** Text for button to cancel an ongoing upload */
  'input.files.common.cancel-upload': 'Отменить загрузку',
  /** Text for file input button in upload placeholder */
  'input.files.common.upload-placeholder.file-input-button.text': 'Загрузить',
  /** Uploading <FileName/> */
  'input.files.common.upload-progress': 'Загрузка <FileName/>',
  /** The referenced document cannot be opened, because the URL failed to be resolved */
  'input.reference.document-cannot-be-opened.failed-to-resolve-url':
    'Этот документ не может быть открыт (не удалось разрешить URL к Studio)',

  /** Label for adding item after a specific array item */
  'inputs.array.action.add-after': 'Добавить элемент после',
  /** Label for adding item before a specific array item */
  'inputs.array.action.add-before': 'Добавить элемент до',
  /** Label for adding array item action when the schema allows for only one schema type */
  'inputs.array.action.add-item': 'Добавить элемент',
  /**
   * Label for adding one array item action when the schema allows for multiple schema types,
   * eg. will prompt the user to select a type once triggered
   */
  'inputs.array.action.add-item-select-type': 'Добавить элемент...',
  /** Array drag handle button tooltip */
  'inputs.array.action.drag.tooltip': 'Перетащите для изменения порядка',
  /** Label for duplicating an array item  */
  'inputs.array.action.duplicate': 'Дублировать',
  /** Label for editing the item of a specific type, eg "Edit Person" */
  'inputs.array.action.edit': 'Редактировать {{itemTypeTitle}}',
  /** Label for removing an array item action  */
  'inputs.array.action.remove': 'Удалить',
  /** Label for removing action when an array item has an error  */
  'inputs.array.action.remove-invalid-item': 'Удалить',
  /** Label for viewing the item of a specific type, eg "View Person" */
  'inputs.array.action.view': 'Просмотреть {{itemTypeTitle}}',
  /** Error description for the array item tooltip that explains that the current item can still be moved or deleted but not edited since the schema definition is not found */
  'inputs.array.error.can-delete-but-no-edit-description':
    'Вы все еще можете переместить или удалить этот элемент, но его нельзя редактировать, поскольку определение схемы для его типа нигде не найдено.',
  /** Error label for toast when array could not resolve the initial value */
  'inputs.array.error.cannot-resolve-initial-value-title':
    'Невозможно определить исходное значение для типа: {{schemaTypeTitle}}: {{errorMessage}}.',
  /** Error label for toast when trying to upload one array item of a type that cannot be converted to array */
  'inputs.array.error.cannot-upload-unable-to-convert_one':
    'Следующий элемент не может быть загружен, потому что нет известного преобразования из типа содержимого в элемент массива:',
  /** Error description for the array item tooltip that explains that the current type item is not valid for the list  */
  'inputs.array.error.current-schema-not-declare-description':
    'Текущая схема не объявляет элементы типа <code>{{typeName}}</code> допустимыми для этого списка. Это может означать, что тип был удален как допустимый тип элемента, или кто-то другой добавил его в свою локальную схему, которая еще не развернута.',
  /** Error description to show how the item is being represented in the json format */
  'inputs.array.error.json-representation-description':
    'Представление этого элемента в формате JSON:',
  /** Error description for the array item tooltip that explains what the error means with more context */
  'inputs.array.error.type-is-incompatible-prompt':
    'Элемент типа <code>{{typeName}}</code> не допустим для этого списка',
  /** Error title for when an item type within an array input is incompatible, used in the tooltip */
  'inputs.array.error.type-is-incompatible-title': 'Почему это происходит?',
  /** Error label for unexpected errors in the Array Input */
  'inputs.array.error.unexpected-error': 'Неожиданная ошибка: {{error}}',
  /** Label for when the array input doesn't have any items */
  'inputs.array.no-items-label': 'Нет элементов',
  /** Label for read only array fields */
  'inputs.array.read-only-label': 'Это поле только для чтения',
  /** Label for when the array input is resolving the initial value for the item */
  'inputs.array.resolving-initial-value': 'Определение исходного значения…',
  /** Placeholder value for datetime input */
  'inputs.datetime.placeholder': 'например, {{example}}',
  /** Acessibility label for button to open file options menu */
  'inputs.file.actions-menu.file-options.aria-label': 'Открыть меню параметров файла',
  /** Browse */
  'inputs.file.browse-button.text': 'Обзор',
  /** Select file */
  'inputs.file.dialog.title': 'Выбрать файл',
  /** Unknown member kind: `{{kind}}` */
  'inputs.file.error.unknown-member-kind': 'Неизвестный тип элемента: {{kind}}',
  /** The value of this field is not a valid file. Resetting this field will let you choose a new file. */
  'inputs.file.invalid-file-warning.description':
    'Значение этого поля не является допустимым файлом. Сброс этого поля позволит вам выбрать новый файл.',
  /** Reset value */
  'inputs.file.invalid-file-warning.reset-button.text': 'Сбросить значение',
  /** Invalid file value */
  'inputs.file.invalid-file-warning.title': 'Недопустимое значение файла',
  /** Select */
  'inputs.file.multi-browse-button.text': 'Выбрать',
  /** The upload could not be completed at this time. */
  'inputs.file.upload-failed.description': 'Загрузка не может быть завершена в настоящее время.',
  /** Upload failed */
  'inputs.file.upload-failed.title': 'Загрузка не удалась',
  /** Clear field */
  'inputs.files.common.actions-menu.clear-field.label': 'Очистить поле',
  /** Copy URL */
  'inputs.files.common.actions-menu.copy-url.label': 'Копировать URL',
  /** Download */
  'inputs.files.common.actions-menu.download.label': 'Скачать',
  /** The URL is copied to the clipboard */
  'inputs.files.common.actions-menu.notification.url-copied': 'URL скопирован в буфер обмена',
  /** Replace */
  'inputs.files.common.actions-menu.replace.label': 'Заменить',
  /** Upload */
  'inputs.files.common.actions-menu.upload.label': 'Загрузить',
  /** Drop to upload */
  'inputs.files.common.drop-message.drop-to-upload': 'Перетащите для загрузки',
  /** Drop to upload `{{count}}` file */
  'inputs.files.common.drop-message.drop-to-upload-multi_one':
    'Перетащите для загрузки {{count}} файла',
  /** Can't upload this file here */
  'inputs.files.common.drop-message.drop-to-upload.no-accepted-file-message_one':
    'Невозможно загрузить этот файл здесь',
  /** `{{count}}` file can't be uploaded here */
  'inputs.files.common.drop-message.drop-to-upload.rejected-file-message_one':
    '{{count}} файл не может быть загружен здесь',
  /** Cannot upload `{{count}}` files */
  'inputs.files.common.placeholder.cannot-upload-some-files_one': 'Невозможно загрузить файл',
  /** Drag or paste type here */
  'inputs.files.common.placeholder.drag-or-paste-to-upload_file':
    'Перетащите или вставьте файл сюда',
  /** Drag or paste image here */
  'inputs.files.common.placeholder.drag-or-paste-to-upload_image':
    'Перетащите или вставьте изображение сюда',
  /** Drop to upload file */
  'inputs.files.common.placeholder.drop-to-upload_file': 'Перетащите для загрузки файла',
  /** Drop to upload image */
  'inputs.files.common.placeholder.drop-to-upload_image': 'Перетащите для загрузки изображения',
  /** Read only */
  'inputs.files.common.placeholder.read-only': 'Только для чтения',
  /** Can't upload files here */
  'inputs.files.common.placeholder.upload-not-supported': 'Загрузка файлов здесь невозможна',
  /** Clear upload */
  'inputs.files.common.stale-upload-warning.clear': 'Очистить загрузку',
  /** An upload has made no progress for at least `{{staleThresholdMinutes}}` minutes and likely got interrupted. You can safely clear the incomplete upload and try uploading again. */
  'inputs.files.common.stale-upload-warning.description':
    'Загрузка не продвигалась как минимум {{staleThresholdMinutes}} минут и, вероятно, была прервана. Вы можете безопасно очистить незавершенную загрузку и попробовать загрузить снова.',
  /** Incomplete upload */
  'inputs.files.common.stale-upload-warning.title': 'Незавершенная загрузка',
  /** Tooltip text for action to crop image */
  'inputs.image.actions-menu.crop-image-tooltip': 'Обрезать изображение',
  /** Accessibility label for button to open image edit dialog */
  'inputs.image.actions-menu.edit-details.aria-label': 'Открыть диалог редактирования изображения',
  /** Accessibility label for button to open image options menu */
  'inputs.image.actions-menu.options.aria-label': 'Открыть меню опций изображения',
  /** Select */
  'inputs.image.browse-menu.text': 'Выбрать',
  /** Cannot upload this file here */
  'inputs.image.drag-overlay.cannot-upload-here': 'Здесь нельзя загружать этот файл',
  /** Drop image to upload */
  'inputs.image.drag-overlay.drop-to-upload-image': 'Перетащите изображение для загрузки',
  /** This field is read only */
  'inputs.image.drag-overlay.this-field-is-read-only': 'Это поле только для чтения',
  /** Unknown member kind: `{{kind}}` */
  'inputs.image.error.unknown-member-kind': 'Неизвестный тип элемента: {{kind}}',
  /** Edit hotspot and crop */
  'inputs.image.hotspot-dialog.title': 'Редактировать хотспот и обрезку',
  /** The value of this field is not a valid image. Resetting this field will let you choose a new image. */
  'inputs.image.invalid-image-warning.description':
    'Значение этого поля не является допустимым изображением. Сброс этого поля позволит вам выбрать новое изображение.',
  /** Reset value */
  'inputs.image.invalid-image-warning.reset-button.text': 'Сбросить значение',
  /** Invalid image value */
  'inputs.image.invalid-image-warning.title': 'Недопустимое значение изображения',
  /** Preview of uploaded image */
  'inputs.image.preview-uploaded-image': 'Предварительный просмотр загруженного изображения',
  /** The upload could not be completed at this time. */
  'inputs.image.upload-error.description': 'Загрузка не может быть завершена в данный момент.',
  /** Upload failed */
  'inputs.image.upload-error.title': 'Ошибка загрузки',
  /** Adjust the rectangle to crop image. Adjust the circle to specify the area that should always be visible. */
  'inputs.imagetool.description':
    'Настройте прямоугольник для обрезки изображения. Настройте круг, чтобы указать область, которая всегда должна быть видна.',
  /** Error: `{{errorMessage}}` */
  'inputs.imagetool.load-error': 'Ошибка: {{errorMessage}}',
  /** Hotspot & Crop */
  'inputs.imagetool.title': 'Хотспот и обрезка',
  /** Convert to `{{targetType}}` */
  'inputs.invalid-value.convert-button.text': 'Преобразовать в <code>{{targetType}}</code>',
  /** The current value (<code>`{{actualType}}`</code>) */
  'inputs.invalid-value.current-type': 'Текущее значение (<code>{{actualType}}</code>)',
  /** The property value is stored as a value type that does not match the expected type. */
  'inputs.invalid-value.description':
    'Значение свойства сохранено как тип значения, который не соответствует ожидаемому типу.',
  /** The value of this property must be of type <code>`{{validType}}`</code> according to the schema. */
  'inputs.invalid-value.details.description':
    'Значение этого свойства должно быть типа <code>{{validType}}</code> согласно схеме.',
  /** Only the following types are valid here according to schema: */
  'inputs.invalid-value.details.multi-type-description':
    'Только следующие типы допустимы здесь согласно схеме:',
  /** Mismatching value types typically occur when the schema has recently been changed. */
  'inputs.invalid-value.details.possible-reason':
    'Несоответствие типов значений обычно происходит, когда схема недавно была изменена.',
  /** Developer info */
  'inputs.invalid-value.details.title': 'Информация для разработчиков',
  /** -- Invalid Value Input -- */
  /** Reset value */
  'inputs.invalid-value.reset-button.text': 'Сбросить значение',
  /** Invalid property value */
  'inputs.invalid-value.title': 'Недопустимое значение свойства',
  /** Field groups */
  'inputs.object.field-group-tabs.aria-label': 'Группы полей',
  /** Read-only field description */
  'inputs.object.unknown-fields.read-only.description':
    'Это поле является <strong>только для чтения</strong> согласно схеме документа и не может быть снято. Если вы хотите иметь возможность снимать это в Studio, убедитесь, что вы удалили поле <code>readOnly</code> из окружающего типа в схеме.',
  /** Remove field */
  'inputs.object.unknown-fields.remove-field-button.text': 'Удалить поле',
  /** Encountered `{{count}}` fields that are not defined in the schema. */
  'inputs.object.unknown-fields.warning.description_one':
    'Обнаружено поле, которое не определено в схеме.',
  /** Detailed description of unknown field warning */
  'inputs.object.unknown-fields.warning.details.description_one':
    'Это поле не определено в схеме, что может означать, что определение поля было удалено или кто-то другой добавил его в свой локальный проект и еще не развернул свои изменения.',
  /** Developer info */
  'inputs.object.unknown-fields.warning.details.title': 'Информация для разработчиков',
  /** Unknown field found */
  'inputs.object.unknown-fields.warning.title_one': 'Обнаружено неизвестное поле',
  /** Collapse the editor to save screen space  */
  'inputs.portable-text.action.collapse-editor': 'Свернуть редактор',
  /** Aria label for action to edit an existing annotation */
  'inputs.portable-text.action.edit-annotation-aria-label': 'Редактировать аннотацию',
  /** Expand the editor to give more editing space */
  'inputs.portable-text.action.expand-editor': 'Развернуть редактор',
  /** Label label for action to insert a block of a given type (`{{typeName}}`) */
  'inputs.portable-text.action.insert-block': 'Вставить {{typeName}}',
  /** Accessibility label for action to insert a block of a given type (`{{typeName}}`) */
  'inputs.portable-text.action.insert-block-aria-label': 'Вставить {{typeName}} (блок)',
  /** Label for action to insert an inline object of a given type (`{{typeName}}`) */
  'inputs.portable-text.action.insert-inline-object': 'Вставить {{typeName}}',
  /** Accessibility label for action to insert an inline object of a given type (`{{typeName}}`) */
  'inputs.portable-text.action.insert-inline-object-aria-label':
    'Вставить {{typeName}} (встроенный)',
  /** Aria label for action to remove an annotation */
  'inputs.portable-text.action.remove-annotation-aria-label': 'Удалить аннотацию',
  /** Label for activate on focus with context of click and not focused */
  'inputs.portable-text.activate-on-focus-message_click': 'Нажмите для активации',
  /** Label for activate on focus with context of click and focused */
  'inputs.portable-text.activate-on-focus-message_click-focused':
    'Нажмите или нажмите пробел для активации',
  /** Label for activate on focus with context of tap and not focused */
  'inputs.portable-text.activate-on-focus-message_tap': 'Коснитесь для активации',
  /**Aria label for the annotation object */
  'inputs.portable-text.annotation-aria-label': 'Объект аннотации',
  /** Title for dialog that allows editing an annotation */
  'inputs.portable-text.annotation-editor.title': 'Редактировать {{schemaType}}',
  /** Title of the default "link" annotation */
  'inputs.portable-text.annotation.link': 'Ссылка',
  /**Aria label for the block object */
  'inputs.portable-text.block.aria-label': 'Блочный объект',
  /** Label for action to edit a block item, in the case where it is editable */
  'inputs.portable-text.block.edit': 'Редактировать',
  /** Accessibility label for the button that opens the actions menu on blocks */
  'inputs.portable-text.block.open-menu-aria-label': 'Открыть меню',
  /** Label for action to open a reference, in the case of block-level reference types */
  'inputs.portable-text.block.open-reference': 'Открыть ссылку',
  /** Label for action to remove a block item */
  'inputs.portable-text.block.remove': 'Удалить',
  /** Label for action to view a block item, in the case where it is read-only and thus cannot be edited */
  'inputs.portable-text.block.view': 'Просмотреть',
  /** Title of the "code" decorator */
  'inputs.portable-text.decorator.code': 'Код',
  /** Title of the "em" (emphasis) decorator */
  'inputs.portable-text.decorator.emphasis': 'Курсив',
  /** Title of the "strike-through" decorator */
  'inputs.portable-text.decorator.strike-through': 'Зачеркнутый',
  /** Title of the "strong" decorator */
  'inputs.portable-text.decorator.strong': 'Жирный',
  /** Title of the "underline" decorator */
  'inputs.portable-text.decorator.underline': 'Подчеркнутый',
  /** Placeholder text for when the editor is empty */
  'inputs.portable-text.empty-placeholder': 'Пусто',
  /**Aria label for the block object */
  'inputs.portable-text.inline-block.aria-label': 'Встроенный объект',
  /** Label for action to edit an inline object item */
  'inputs.portable-text.inline-object.edit': 'Редактировать объект',
  /** Aria label for icon for action to edit an inline object item */
  'inputs.portable-text.inline-object.edit-aria-label': 'Редактировать объект',
  /** Label for action to remove an inline object item */
  'inputs.portable-text.inline-object.remove': 'Удалить объект',
  /** Aria label for icon for action to remove an inline object item */
  'inputs.portable-text.inline-object.remove-aria-label': 'Удалить объект',
  /** Disclaimer text shown on invalid Portable Text value, when an action is available to unblock the user, but it is not guaranteed to be safe */
  'inputs.portable-text.invalid-value.action-disclaimer':
    'ПРИМЕЧАНИЕ: Обычно безопасно выполнять действие выше, но если вы сомневаетесь, свяжитесь с ответственными за настройку вашей студии.',
  /** Action presented when the Portable Text field value is invalid, when block with key `{{key}}` has a child with key `{{childKey}}` of type `{{childType}}` which is not allowed by the schema definition */
  'inputs.portable-text.invalid-value.disallowed-child-type.action': 'Удалить объект',
  /** Text explaining that the Portable Text field value is invalid, when block with key `{{key}}` has a child with key `{{childKey}}` of type `{{childType}}` which is not allowed by the schema definition */
  'inputs.portable-text.invalid-value.disallowed-child-type.description':
    'Дочерний элемент с ключом {{childKey}} блока с ключом <code>{{key}}</code> имеет тип <code>{{childType}}</code>, который не разрешен определением схемы.',
  /** Action presented when the Portable Text field value is invalid, when child with key `{{key}}` has a type (`{{typeName}}`) that is not an allowed block type for this field */
  'inputs.portable-text.invalid-value.disallowed-type.action': 'Удалить блок',
  /** Text explaining that the Portable Text field value is invalid, when child with key `{{key}}` has a type (`{{typeName}}`) that is not an allowed block type for this field */
  'inputs.portable-text.invalid-value.disallowed-type.description':
    'Блок с ключом <code>{{key}}</code> имеет тип <code>{{typeName}}</code>, который не разрешен определением схемы.',
  /** Action presented when the Portable Text field value is invalid, when block with key `{{key}}` contains no children */
  'inputs.portable-text.invalid-value.empty-children.action': 'Вставить пустой текстовый спан',
  /** Text explaining that the Portable Text field value is invalid, when block with key `{{key}}` contains no children */
  'inputs.portable-text.invalid-value.empty-children.description':
    'Текстовый блок с ключом <code>{{key}}</code> не имеет текстовых спанов.',
  /** Label for the button to ignore invalid values in the Portable Text editor */
  'inputs.portable-text.invalid-value.ignore-button.text': 'Игнорировать',
  /** Action presented when the Portable Text field value is invalid, when child with key `{{key}}` has a `_type` property that is set to `block`, but the block type defined in schema has a different name (`{{expectedTypeName}}`) */
  'inputs.portable-text.invalid-value.incorrect-block-type.action':
    'Использовать тип <code>{{expectedTypeName}}</code>',
  /** Text explaining that the Portable Text field value is invalid, when child with key `{{key}}` has a `_type` property that is set to `block`, but the block type defined in schema has a different name (`{{expectedTypeName}}`) */
  'inputs.portable-text.invalid-value.incorrect-block-type.description':
    'Блок с ключом <code>{{key}}</code> имеет неверное имя типа. Согласно схеме, это должно быть <code>{{expectedTypeName}}</code>.',
  /** Action presented when the Portable Text field value is invalid, when block with key `{{key}}` has a span with key `{{childKey}}` that has a missing or invalid `text` property */
  'inputs.portable-text.invalid-value.invalid-span-text.action':
    'Установить пустое текстовое значение',
  /** Text explaining that the Portable Text field value is invalid, when block with key `{{key}}` has a span with key `{{childKey}}` that has a missing or invalid `text` property */
  'inputs.portable-text.invalid-value.invalid-span-text.description':
    'Спан с ключом {{childKey}} блока с ключом <code>{{key}}</code> имеет отсутствующее или неверное свойство <code>text</code>.',
  /** Action presented when the Portable Text field value is invalid, when child with key `{{key}}` is missing a `_type` property, but seems to be a block of type `{{expectedTypeName}}` */
  'inputs.portable-text.invalid-value.missing-block-type.action':
    'Использовать тип <code>{{expectedTypeName}}</code>',
  /** Text explaining that the Portable Text field value is invalid, when child with key `{{key}}` is missing a `_type` property, but seems to be a block of type `{{expectedTypeName}}` */
  'inputs.portable-text.invalid-value.missing-block-type.description':
    'Блок с ключом <code>{{key}}</code> не имеет имени типа. Согласно схеме, это должно быть <code>{{expectedTypeName}}</code>.',
  /** Action presented when the Portable Text field value is invalid, when block with key `{{key}}` has a child at `{{index}}` which is missing `_key` property */
  'inputs.portable-text.invalid-value.missing-child-key.action': 'Присвоить случайный ключ',
  /** Text explaining that the Portable Text field value is invalid, when block with key `{{key}}` has a child at `{{index}}` which is missing `_key` property */
  'inputs.portable-text.invalid-value.missing-child-key.description':
    'Дочерний элемент на позиции <code>{{index}}</code> блока с ключом <code>{{key}}</code> не имеет свойства <code>_key</code>.',
  /** Action presented when the Portable Text field value is invalid, when block with key `{{key}}` has a child with key `{{childKey}}` which is missing a `_type` property */
  'inputs.portable-text.invalid-value.missing-child-type.action': 'Удалить объект',
  /** Text explaining that the Portable Text field value is invalid, when block with key `{{key}}` has a child with key `{{childKey}}` which is missing a `_type` property */
  'inputs.portable-text.invalid-value.missing-child-type.description':
    'Дочерний элемент с ключом {{childKey}} блока с ключом <code>{{key}}</code> не имеет свойства <code>_type</code>.',
  /** Action presented when the Portable Text field value is invalid, when child at `{{index}}` is missing the required `_key` property */
  'inputs.portable-text.invalid-value.missing-key.action': 'Назначить случайный ключ',
  /** Text explaining that the Portable Text field value is invalid, when child at `{{index}}` is missing the required `_key` property */
  'inputs.portable-text.invalid-value.missing-key.description':
    'Блок с индексом <code>{{index}}</code> не содержит необходимого свойства <code>_key</code>.',
  /** Action presented when the Portable Text field value is invalid, when child with key `{{key}}` has a missing or invalid `children` property */
  'inputs.portable-text.invalid-value.missing-or-invalid-children.action': 'Удалить блок',
  /** Text explaining that the Portable Text field value is invalid, when child with key `{{key}}` has a missing or invalid `children` property */
  'inputs.portable-text.invalid-value.missing-or-invalid-children.description':
    'Текстовый блок с ключом <code>{{key}}</code> содержит недопустимое или отсутствующее свойство `children`.',
  /** Action presented when the Portable Text field value is invalid, when child with key `{{key}}` has a missing or invalid `markDefs` property */
  'inputs.portable-text.invalid-value.missing-or-invalid-markdefs.action': 'Добавить свойство',
  /** Text explaining that the Portable Text field value is invalid, when child with key `{{key}}` has a missing or invalid `markDefs` property */
  'inputs.portable-text.invalid-value.missing-or-invalid-markdefs.description':
    'Текстовый блок с ключом <code>{{key}}</code> содержит недопустимое или отсутствующее свойство `markDefs`.',
  /** Action presented when the Portable Text field value is invalid, when child with key `{{key}}` is missing a `_type` property  */
  'inputs.portable-text.invalid-value.missing-type.action': 'Удалить блок',
  /** Text explaining that the Portable Text field value is invalid, when child with key `{{key}}` is missing a `_type` property  */
  'inputs.portable-text.invalid-value.missing-type.description':
    'Блок с ключом <code>{{key}}</code> не содержит название типа.',
  /** Action presented when the Portable Text field value is invalid, when block with key `{{key}}` contains a non-object child at index `{{index}}` */
  'inputs.portable-text.invalid-value.non-object-child.action': 'Удалить элемент',
  /** Text explaining that the Portable Text field value is invalid, when block with key `{{key}}` contains a non-object child at index `{{index}}` */
  'inputs.portable-text.invalid-value.non-object-child.description':
    'Элемент с индексом <code>{{index}}</code> в блоке с ключом <code>{{key}}</code> не является объектом.',
  /** Action presented when the Portable Text field value is invalid, when the Portable Text field is not an array, or the array is empty */
  'inputs.portable-text.invalid-value.not-an-array.action': 'Сбросить значение',
  /** Text explaining that the Portable Text field value is invalid, when the Portable Text field is not an array, or the array is empty */
  'inputs.portable-text.invalid-value.not-an-array.description':
    'Значение должно быть массивом блоков Portable Text или неопределенным.',
  /** Action presented when the Portable Text field value is invalid, when child at `{{index}}` is not an object */
  'inputs.portable-text.invalid-value.not-an-object.action': 'Удалить элемент',
  /** Text explaining that the Portable Text field value is invalid, when child at `{{index}}` is not an object */
  'inputs.portable-text.invalid-value.not-an-object.description':
    'Элемент с <code>{{index}}</code> не является объектом,.',
  /** Action presented when the Portable Text field value is invalid, when block with key `{{key}}` contains marks (`{{orphanedMarks}}`) that are not supported by the current schema */
  'inputs.portable-text.invalid-value.orphaned-marks.action': 'Удалить недопустимые маркировки',
  /** Text explaining that the Portable Text field value is invalid, when block with key `{{key}}` contains marks (`{{orphanedMarks}}`) that are not supported by the current schema */
  'inputs.portable-text.invalid-value.orphaned-marks.description':
    'Текстовый блок с ключом <code>{{key}}</code> содержит маркировки <code>({{orphanedMarks, list}})</code>, которые не разрешены схемой.',
  /** Title for the alert indicating that the Portable Text field has an invalid value */
  'inputs.portable-text.invalid-value.title': 'Недопустимое значение Portable Text',
  /** Title of "bulleted" list type */
  'inputs.portable-text.list-type.bullet': 'Маркированный список',
  /** Title of numbered list type */
  'inputs.portable-text.list-type.number': 'Нумерованный список',
  /** Title of the "h1" block style */
  'inputs.portable-text.style.h1': 'Заголовок 1',
  /** Title of the "h2" block style */
  'inputs.portable-text.style.h2': 'Заголовок 2',
  /** Title of the "h3" block style */
  'inputs.portable-text.style.h3': 'Заголовок 3',
  /** Title of the "h4" block style */
  'inputs.portable-text.style.h4': 'Заголовок 4',
  /** Title of the "h5" block style */
  'inputs.portable-text.style.h5': 'Заголовок 5',
  /** Title of the "h6" block style */
  'inputs.portable-text.style.h6': 'Заголовок 6',
  /** Title shown when multiple blocks of varying styles is selected */
  'inputs.portable-text.style.multiple': 'Несколько',
  /** Title of fallback when no style is given for a block */
  'inputs.portable-text.style.none': 'Без стиля',
  /** Title of the "normal" block style */
  'inputs.portable-text.style.normal': 'Обычный',
  /** Title of the "quote" block style */
  'inputs.portable-text.style.quote': 'Цитата',
  /** Label for action to clear the current value of the reference field */
  'inputs.reference.action.clear': 'Очистить',
  /** Label for action to create a new document from the reference input */
  'inputs.reference.action.create-new-document': 'Создать новый',
  /** Label for action to create a new document from the reference input, when there are multiple templates or document types to choose from */
  'inputs.reference.action.create-new-document-select': 'Создать новый…',
  /** Label for action to duplicate the current item to a new item (used within arrays) */
  'inputs.reference.action.duplicate': 'Дублировать',
  /** Label for action that opens the referenced document in a new tab */
  'inputs.reference.action.open-in-new-tab': 'Открыть в новой вкладке',
  /** Label for action to remove the reference from an array */
  'inputs.reference.action.remove': 'Удалить',
  /** Label for action to replace the current value of the field */
  'inputs.reference.action.replace': 'Заменить',
  /** Label for action to cancel a previously initiated replace action  */
  'inputs.reference.action.replace-cancel': 'Отменить замену',
  /** The cross-dataset reference field currently has a reference, but the feature has been disabled since it was created. This explains what can/cannot be done in its current state. */
  'inputs.reference.cross-dataset.feature-disabled-actions':
    'Вы все еще можете очистить существующую ссылку в этом поле, но пока функция отключена, ссылку на другой документ изменить нельзя.',
  /** A cross-dataset reference field exists but the feature has been disabled. A <DocumentationLink> component is available. */
  'inputs.reference.cross-dataset.feature-disabled-description':
    'Эта функция была отключена. Прочтите, как ее включить, в <DocumentationLink>документации</DocumentationLink>.',
  /** Title for a warning telling the user that the current project does not have the "cross dataset references" feature */
  'inputs.reference.cross-dataset.feature-unavailable-title':
    'Недоступная функция: Ссылка на другой набор данных',
  /** The cross-dataset reference points to a document with an invalid type  */
  'inputs.reference.cross-dataset.invalid-type':
    'Ссылка на документ недопустимого типа ({{typeName}}) <JsonValue/>',
  /** The referenced document will open in a new tab (due to external studio) */
  'inputs.reference.document-opens-in-new-tab': 'Этот документ откроется в новой вкладке',
  /** Error title for when the document is unavailable (for any possible reason) */
  'inputs.reference.error.document-unavailable-title': 'Документ недоступен',
  /** Error title for when the referenced document failed to be loaded */
  'inputs.reference.error.failed-to-load-document-title': 'Не удалось загрузить ссылочный документ',
  /** Error title for when the reference search returned a document that is not an allowed type for the field */
  'inputs.reference.error.invalid-search-result-type-title':
    'Поиск вернул тип, который не допустим для этой ссылки: "{{returnedType}}"',
  /** Error description for when the document referenced is not one of the types declared as allowed target types in schema */
  'inputs.reference.error.invalid-type-description':
    'Ссылочный документ (<code>{{documentId}}</code>) имеет тип <code>{{actualType}}</code>. Согласно схеме, ссылочные документы могут быть только типа <AllowedTypes />.',
  /** Error title for when the document referenced is not one of the types declared as allowed target types in schema */
  'inputs.reference.error.invalid-type-title': 'Документ недопустимого типа',
  /** Error description for when the user does not have permissions to read the referenced document */
  'inputs.reference.error.missing-read-permissions-description':
    'Невозможно получить доступ к ссылочному документу из-за недостаточных прав',
  /** Error title for when the user does not have permissions to read the referenced document */
  'inputs.reference.error.missing-read-permissions-title': 'Недостаточно прав',
  /** Error description for when the current reference value points to a document that does not exist (on weak references) */
  'inputs.reference.error.nonexistent-document-description':
    'Ссылочный документ не существует (ID: <code>{{documentId}}</code>). Вы можете либо удалить ссылку, либо заменить ее другим документом.',
  /** Error title for when the current reference value points to a document that does not exist (on weak references) */
  'inputs.reference.error.nonexistent-document-title': 'Не найдено',
  /** Label for button that clears the reference when it points to a document that does not exist (on weak references) */
  'inputs.reference.error.nonexistent-document.clear-button-label': 'Очистить',
  /** Error title for when the search for a reference failed. Note that the message sent by the backend may not be localized. */
  'inputs.reference.error.search-failed-title': 'Поиск ссылки не удался',
  /** Alternative text for the image shown in cross-dataset reference input */
  'inputs.reference.image-preview-alt-text':
    'Предварительный просмотр изображения ссылочного документа',
  /** Description for alert shown when a reference in a live-edit document is marked as being weak, the referenced document exists, AND the reference is supposed to be have been strengthened on publish */
  'inputs.reference.incomplete-reference.finalize-action-description':
    '<strong>{{referencedDocument}}</strong> опубликован и эта ссылка теперь должна быть окончательно оформлена.',
  /** Title for alert shown when a reference in a live-edit document is marked as being weak, the referenced document exists, AND the reference is supposed to be have been strengthened on publish */
  'inputs.reference.incomplete-reference.finalize-action-title': 'Оформить ссылку',
  /** Description for alert shown when a reference in a live-edit document points to a document that exists and has been published, but the reference is still marked as weak */
  'inputs.reference.incomplete-reference.strengthen-action-description':
    '<strong>{{referencedDocument}}</strong> опубликован и эта ссылка теперь должна быть преобразована в сильную ссылку.',
  /** Title for alert shown when a reference in a live-edit document points to a document that exists and has been published, but the reference is still marked as weak */
  'inputs.reference.incomplete-reference.strengthen-action-title': 'Преобразовать в сильную ссылку',
  /** Label for button that triggers the action that strengthen a reference */
  'inputs.reference.incomplete-reference.strengthen-button-label': 'Преобразовать в сильную ссылку',
  /** Label for button that triggers a retry attempt for reference metadata  */
  'inputs.reference.metadata-error.retry-button-label': 'Повторить попытку',
  /** Title for alert shown when reference metadata fails to be loaded */
  'inputs.reference.metadata-error.title': 'Не удалось загрузить метаданные ссылки',
  /** Message shown when no documents were found that matched the given search string */
  'inputs.reference.no-results-for-query': 'Нет результатов для <strong>“{{searchTerm}}”</strong>',
  /** Text for tooltip showing when a document was edited, using relative time (eg "how long ago was it edited?") */
  'inputs.reference.preview.edited-at-time': 'Отредактировано <RelativeTime/>',
  /** Accessibility label for icon indicating that document does _not_ have any unpublished changes */
  'inputs.reference.preview.has-no-unpublished-changes-aria-label': 'Нет неопубликованных правок',
  /** Accessibility label for icon indicating that document has unpublished changes */
  'inputs.reference.preview.has-unpublished-changes-aria-label': 'Отредактировано',
  /** Accessibility label for icon indicating that document does _not_ have a published version */
  'inputs.reference.preview.is-not-published-aria-label': 'Не опубликовано',
  /** Accessibility label for icon indicating that document has a published version */
  'inputs.reference.preview.is-published-aria-label': 'Опубликовано',
  /** Text for tooltip indicating that a document has no unpublished edits */
  'inputs.reference.preview.no-unpublished-edits': 'Нет неопубликованных правок',
  /** Text for tooltip indicating that a document has not yet been published */
  'inputs.reference.preview.not-published': 'Не опубликовано',
  /** Text for tooltip showing when a document was published, using relative time (eg "how long ago was it published?") */
  'inputs.reference.preview.published-at-time': 'Опубликовано <RelativeTime/>',
  /** The referenced document no longer exist and might have been deleted (for weak references) */
  'inputs.reference.referenced-document-does-not-exist':
    'Ссылочный документ больше не существует и, возможно, был удален (ID документа: <code>{{documentId}}</code>).',
  /** The referenced document could not be displayed to the user because of insufficient permissions */
  'inputs.reference.referenced-document-insufficient-permissions':
    'Доступ к ссылочному документу невозможен из-за недостаточных прав',
  /** Label for when the reference input is resolving the initial value for an item */
  'inputs.reference.resolving-initial-value': 'Определение исходного значения…',
  /** Placeholder shown in a reference input with no current value */
  'inputs.reference.search-placeholder': 'Начните печатать для поиска',
  /** Explanation of the consequences of leaving the reference as strong instead of weak */
  'inputs.reference.strength-mismatch.is-strong-consquences':
    'Будет невозможно удалить документ-ссылку без предварительного удаления этой ссылки или преобразования ее в слабую.',
  /** Description for alert shown when a reference is supposed to be weak, but the actual value is strong */
  'inputs.reference.strength-mismatch.is-strong-description':
    'Эта ссылка <em>сильная</em>, но согласно текущей схеме она должна быть <em>слабой</em>.',
  /** Explanation of the consequences of leaving the reference as weak instead of strong */
  'inputs.reference.strength-mismatch.is-weak-consquences':
    'Это позволяет удалять ссылочный документ без предварительного удаления этой ссылки, оставляя это поле, ссылающееся на несуществующий документ.',
  /** Description for alert shown when a reference is supposed to be strong, but the actual value is weak */
  'inputs.reference.strength-mismatch.is-weak-description':
    'Эта ссылка <em>слабая</em>, но согласно текущей схеме она должна быть <em>сильной</em>.',
  /** Label for button that triggers the action that strengthens a reference on strength mismatch */
  'inputs.reference.strength-mismatch.strengthen-button-label': 'Преобразовать в сильную ссылку',
  /** Title for alert shown when a reference is supposed to be weak/strong, but the actual value is the opposite of what it is supposed to be */
  'inputs.reference.strength-mismatch.title': 'Несоответствие силы ссылки',
  /** Label for button that triggers the action that weakens a reference on strength mismatch */
  'inputs.reference.strength-mismatch.weaken-button-label': 'Преобразовать в слабую ссылку',
  /** Action message for generating the slug */
  'inputs.slug.action.generate': 'Сгенерировать',
  /** Loading message for when the input is actively generating a slug */
  'inputs.slug.action.generating': 'Генерация…',
  /** Error message for when the source to generate a slug from is missing */
  'inputs.slug.error.missing-source':
    'Источник отсутствует. Проверьте источник для типа {{schemaType}} в схеме',
  /** Placeholder for an empty tag input */
  'inputs.tags.placeholder': 'Введите тег и нажмите ENTER…',
  /** Placeholder for an empty tag input on touch devices */
  'inputs.tags.placeholder_touch': 'Введите тег…',
  /** Convert to `{{targetType}}` */
  'inputs.untyped-value.convert-button.text': 'Преобразовать в <code>{{targetType}}</code>',
  /** Encountered an object value without a <code>_type</code> property. */
  'inputs.untyped-value.description':
    'Обнаружено значение объекта без свойства <code>_type</code>.',
  /** Either remove the <code>name</code> property of the object declaration, or set <code>_type</code> property on items. */
  'inputs.untyped-value.details.description':
    'Удалите свойство <code>name</code> из объявления объекта или установите свойство <code>_type</code> для элементов.',
  /** Current value (<code>object</code>): */
  'inputs.untyped-value.details.json-dump-prefix': 'Текущее значение (<code>object</code>):',
  /** The following types are valid here according to schema: */
  'inputs.untyped-value.details.multi-type-description':
    'Согласно схеме здесь допустимы следующие типы:',
  /** Developer info */
  'inputs.untyped-value.details.title': 'Информация для разработчиков',
  /** Property value missing <code>_type</code> */
  'inputs.untyped-value.title': 'Отсутствует значение свойства <code>_type</code>',
  /** Unset value */
  'inputs.untyped-value.unset-item-button.text': 'Сбросить значение',

  /** The fallback explanation if no context is provided */
  'insufficient-permissions-message.not-authorized-explanation':
    'У вас нет разрешения на доступ к этой функции.',
  /** The explanation when unable to create any document at all */
  'insufficient-permissions-message.not-authorized-explanation_create-any-document':
    'У вас нет разрешения на создание документа.',
  /** The explanation when unable to create a particular document */
  'insufficient-permissions-message.not-authorized-explanation_create-document':
    'У вас нет разрешения на создание этого документа.',
  /** The explanation when unable to create a particular type of document */
  'insufficient-permissions-message.not-authorized-explanation_create-document-type':
    'У вас нет разрешения на создание документа этого типа.',
  /** The explanation when unable to create a new reference in a document */
  'insufficient-permissions-message.not-authorized-explanation_create-new-reference':
    'У вас нет разрешения на создание новой ссылки.',
  /** The explanation when unable to delete a particular document */
  'insufficient-permissions-message.not-authorized-explanation_delete-document':
    'У вас нет разрешения на удаление этого документа.',
  /** The explanation when unable to discard changes in a particular document */
  'insufficient-permissions-message.not-authorized-explanation_discard-changes':
    'У вас нет разрешения на отмену изменений в этом документе.',
  /** The explanation when unable to duplicate a particular document */
  'insufficient-permissions-message.not-authorized-explanation_duplicate-document':
    'У вас нет разрешения на дублирование этого документа.',
  /** The explanation when unable to publish a particular document */
  'insufficient-permissions-message.not-authorized-explanation_publish-document':
    'У вас нет разрешения на публикацию этого документа.',
  /** The explanation when unable to unpublish a particular document */
  'insufficient-permissions-message.not-authorized-explanation_unpublish-document':
    'У вас нет разрешения на отмену публикации этого документа.',
  /** Appears after the not-authorized message. Lists the current roles. */
  'insufficient-permissions-message.roles': 'Ваши роли: <Roles/>',
  /** The title for the insufficient permissions message component */
  'insufficient-permissions-message.title': 'Недостаточно прав',

  /** Unexpected error: `{{error}}` */
  'member-field-error.unexpected-error': 'Неожиданная ошибка: {{error}}',

  /** Button label for "Create new document" button */
  'new-document.button': 'Создать',
  /**
   * Tooltip message displayed when hovering/activating the "Create new document" action,
   * when there are templates/types available for creation
   */
  'new-document.create-new-document-label': 'Новый документ…',
  /** Placeholder for the "filter" input within the new document menu */
  'new-document.filter-placeholder': 'Фильтр',
  /** Loading indicator text within the new document menu */
  'new-document.loading': 'Загрузка…',
  /** Accessibility label for the list displaying options in the new document menu */
  'new-document.new-document-aria-label': 'Новый документ',
  /** Message for when there are no document type options in the new document menu */
  'new-document.no-document-types-found': 'Типы документов не найдены',
  /**
   * Tooltip message displayed when hovering/activating the "Create new document" action,
   * when there are no templates/types to create from
   */
  'new-document.no-document-types-label': 'Нет типов документов',
  /** Message for when no results are found for a specific search query in the new document menu */
  'new-document.no-results': 'Нет результатов для <strong>{{searchQuery}}</strong>',
  /** Aria label for the button that opens the "Create new document" popover/dialog */
  'new-document.open-dialog-aria-label': 'Создать новый документ',
  /** Title for "Create new document" dialog */
  'new-document.title': 'Создать новый документ',

  /** Label for action to manage members of the current studio project */
  'presence.action.manage-members': 'Управление участниками',
  /** Accessibility label for presence menu button */
  'presence.aria-label': 'Кто здесь',
  /** Message description for when no one else is currently present */
  'presence.no-one-else-description': 'Пригласите людей в проект, чтобы видеть их онлайн-статус.',
  /** Message title for when no one else is currently present */
  'presence.no-one-else-title': 'Здесь никого нет',
  /** Message for when a user is not in a document (displayed in the global presence menu) */
  'presence.not-in-a-document': 'Не в документе',
  /** Tooltip content text for presence menu button */
  'presence.tooltip-content': 'Кто здесь',

  /** Fallback title shown when a preview does not provide a title */
  'preview.default.title-fallback': 'Без названия',
  /** Fallback preview value for types that have "no value" (eg null, undefined) */
  'preview.fallback.no-value': '(нет значения)',
  /** Alternative text for image being shown while image is being uploaded, in previews */
  'preview.image.file-is-being-uploaded.alt-text': 'Изображение в процессе загрузки',

  /* Relative time, just now */
  'relative-time.just-now': 'только что',

  /** Accessibility label to open search action when the search would go fullscreen (eg on narrower screens) */
  'search.action-open-aria-label': 'Открыть поиск',
  /** Action label for adding a search filter */
  'search.action.add-filter': 'Добавить фильтр',
  /** Action label for clearing search filters */
  'search.action.clear-filters': 'Очистить фильтры',
  /** Label for action to clear recent searches */
  'search.action.clear-recent-searches': 'Очистить последние поиски',
  /** Accessibility label for action to clear all currently applied document type filters */
  'search.action.clear-type-filters-aria-label': 'Очистить отмеченные фильтры',
  /** Label for action to clear all currently applied document type filters */
  'search.action.clear-type-filters-label': 'Очистить',
  /** Accessibility label for when the search is full screen (on narrow screens) and you want to close the search */
  'search.action.close-search-aria-label': 'Закрыть поиск',
  /** Accessibility label for filtering by document type */
  'search.action.filter-by-document-type-aria-label': 'Фильтровать по типу документа',
  /** Accessibility action label for removing an already applied search filter */
  'search.action.remove-filter-aria-label': 'Удалить фильтр',
  /**
   * Text displayed when either no document type(s) have been selected, or we need a fallback,
   * eg "Search for all types".
   */
  'search.action.search-all-types': 'Искать все документы',
  /**
   * Text displayed when we are able to determine one or more document types that will be used for
   * searching, and can fit within the space assigned by the design.
   */
  'search.action.search-specific-types': 'Искать {{types, list}}',
  /** Dialog title for action to select an asset of unknown type */
  'search.action.select-asset': 'Выбрать ресурс',
  /** Dialog title for action to select a file asset */
  'search.action.select-asset_file': 'Выбрать файл',
  /** Dialog title for action to select an image asset */
  'search.action.select-asset_image': 'Выбрать изображение',
  /** Accessibility label for when the search is full screen (on narrow screens) and you want to hide filters */
  'search.action.toggle-filters-aria-label_hide': 'Скрыть фильтры',
  /** Accessibility label for when the search is full screen (on narrow screens) and you want to show filters */
  'search.action.toggle-filters-aria-label_show': 'Показать фильтры',
  /** Label for when the search is full screen (on narrow screens) and you want to hide filters */
  'search.action.toggle-filters-label_hide': 'Скрыть фильтры',
  /** Label for when the search is full screen (on narrow screens) and you want to show filters */
  'search.action.toggle-filters-label_show': 'Показать фильтры',
  /** Tooltip text for the global search button */
  'search.button.tooltip': 'Поиск',
  /**
   * A list of provided types (use `list` formatter preferably).
   */
  'search.document-type-list': '{{types, list}}',
  /**
   * In the context of a list of document types - no filtering selection has been done,
   * thus the default is "all types".
   */
  'search.document-type-list-all-types': 'Все типы',
  /** Accessibility label for list displaying the available document types */
  'search.document-types-aria-label': 'Типы документов',
  /** Label for when no document types matching the filter are found */
  'search.document-types-no-matches-found': 'Нет совпадений для {{filter}}',
  /** Description for error when a filter cannot be displayed, describes that you should check the schema */
  'search.error.display-filter-description':
    'Это может указывать на неверные опции, определенные в вашей схеме.',
  /** Title for error when a filter cannot be displayed (mainly a developer-oriented error) */
  'search.error.display-filter-title': 'Произошла ошибка при отображении этого фильтра.',
  /** Description for error when no valid asset source is found, describes that you should check the the current studio config */
  'search.error.no-valid-asset-source-check-config-description':
    'Пожалуйста, убедитесь, что он включен в файле конфигурации вашей студии.',
  /** Description for error when no valid asset source is found, describes that only the default asset is supported */
  'search.error.no-valid-asset-source-only-default-description':
    'В настоящее время поддерживается только источник ресурсов по умолчанию.',
  /** Title for error when no valid asset sources found */
  'search.error.no-valid-asset-source-title': 'Не найдены действительные источники ресурсов.',
  /** Helpful description for when search returned an error that we are not able to describe in detail */
  'search.error.unspecified-error-help-description':
    'Пожалуйста, попробуйте еще раз или проверьте ваше соединение',
  /** Title label for when search returned an error that we are not able to describe in detail */
  'search.error.unspecified-error-title': 'Что-то пошло не так во время поиска',
  /**
   * Label for "All fields", a label that appears above the list of available fields when filtering.
   * If one or more document type has been chosen as filter, this label is replaced with a group of
   * fields per selected document type
   */
  'search.filter-all-fields-header': 'Все поля',
  /** Label for the action of changing from one file to a different file in asset search filter */
  'search.filter-asset-change_file': 'Сменить файл',
  /** Label for the action of changing from one image to a different image in asset search filter */
  'search.filter-asset-change_image': 'Сменить изображение',
  /** Label for the action of clearing the currently selected asset in an image/file filter */
  'search.filter-asset-clear': 'Очистить',
  /** Label for the action of selecting a file in asset search filter */
  'search.filter-asset-select_file': 'Выбрать файл',
  /** Label for the action of selecting an image in asset search filter */
  'search.filter-asset-select_image': 'Выбрать изображение',
  /** Label for boolean filter - false */
  'search.filter-boolean-false': 'Ложь',
  /** Label for boolean filter - true */
  'search.filter-boolean-true': 'Истина',
  /** Accessibility label for list that lets you filter fields by title, when adding a new filter in search */
  'search.filter-by-title-aria-label': 'Фильтровать по названию',
  /** Accessibility label for date filter input */
  'search.filter-date-aria-label': 'Дата',
  /** Accessibility label for selecting end date on the date range search filter */
  'search.filter-date-range-end-date-aria-label': 'Дата окончания',
  /** Accessibility label for selecting start date on the date range search filter */
  'search.filter-date-range-start-date-aria-label': 'Дата начала',
  /**
   * Label for "Days"/"Months"/"Years" when selecting it as unit in "X days ago" search filter.
   * Capitalized, as it would be listed in a dropdown.
   */
  'search.filter-date-unit_days': 'Дни',
  'search.filter-date-unit_months': 'Месяцы',
  'search.filter-date-unit_years': 'Годы',
  /** Accessibility label for selecting the unit (day/month/year) when adding "X days ago" search filter */
  'search.filter-date-unit-aria-label': 'Выбрать единицу измерения',
  /** Accessibility label for the input value (days/months/years) when adding "X days ago" search filter */
  'search.filter-date-value-aria-label': 'Значение единицы',
  /** Label for "field description" shown in tooltip when navigating list of possible fields to filter */
  'search.filter-field-tooltip-description': 'Описание поля',
  /** Label for "field name" shown in tooltip when navigating list of possible fields to filter */
  'search.filter-field-tooltip-name': 'Название поля',
  /** Label for "Used in document types", a list of the document types a field appears in. Shown in tooltip when navigating list of possible fields to filter */
  'search.filter-field-tooltip-used-in-document-types': 'Используется в типах документов',
  /** Label for when no fields/filters are found for the given term */
  'search.filter-no-matches-found': 'Нет совпадений для {{filter}}',
  /** Placeholder value for maximum numeric value filter */
  'search.filter-number-max-value-placeholder': 'Максимальное значение',
  /** Placeholder value for minimum numeric value filter */
  'search.filter-number-min-value-placeholder': 'Минимальное значение',
  /** Placeholder value for the number filter */
  'search.filter-number-value-placeholder': 'Значение',
  /** Placeholder for the "Filter" input, when narrowing possible fields/filters */
  'search.filter-placeholder': 'Фильтр',
  /** Label for the action of clearing the currently selected document in a reference filter */
  'search.filter-reference-clear': 'Очистить',
  /**
   * Label for "shared fields", a label that appears above a list of fields that all filtered types
   * have in common, when adding a new filter. For instance, if "book" and "employee" both have a
   * "title" field, this field would be listed under "shared fields".
   * */
  'search.filter-shared-fields-header': 'Общие поля',
  /** Placeholder value for the string filter */
  'search.filter-string-value-placeholder': 'Значение',
  /** Label/placeholder prompting user to select one of the predefined, allowed values for a string field */
  'search.filter-string-value-select-predefined-value': 'Выбрать…',
  /** Accessibility label for the "Filters" list, that is shown when using "Add filter" in search (singular) */
  'search.filters-aria-label_one': 'Фильтр',
  /** Label for instructions on how to use the search - displayed when no recent searches are available */
  'search.instructions': 'Используйте <ControlsIcon/>, чтобы уточнить поиск',
  /** Helpful description for when no search results are found */
  'search.no-results-help-description':
    'Попробуйте другое ключевое слово или настройте ваши фильтры',
  /** Title label for when no search results are found */
  'search.no-results-title': 'Результаты не найдены',
  /**
   * Individual search operators.
   *
   * The `name` variant is the form we use when the user is building a query, and selecting from a
   * list of available operators for a field. Keep in mind that since the user knows what the field
   * represents, we do not need to contextualize too much, and that the user may not be a developer
   * eg prefer "quantity is" over "array has length". Additionally, (if applicable in language) use
   * lowercased names.
   *
   * The `description` variant is the form shown once the filter has enough information to apply,
   * and is shown in the list of applied filters. It is passed components that _should_ be used to
   * compose the filter string, and to format them correctly:
   *
   * `<Field/>` - eg "Bird species", "Category", "Date of birth"
   * `<Operator>operator text</Operator>` - eg "has ≤", "includes", "is"
   * `<Value>{{value}}</Value>` - eg "Hawk", "Sparrow", "Eagle"
   *
   * Where applicable, a `count` is passed, allowing you to pluralize where needed, by using
   * suffixes such as `_zero`, `_one`, `_other` etc.
   *
   * Prefer (reasonable) brevity since many filters may be applied. For instance:
   * `<Field/> has ≤ <Value/>` may be better than
   * `<Field/> has less than or equal to <Value/>`
   **/
  /* Array should have a count the given filter value */
  'search.operator.array-count-equal.description_one':
    '<Field/> <Operator>имеет</Operator> <Value>{{count}} элемент</Value>',
  'search.operator.array-count-equal.name': 'количество равно',
  /* Array should have a count greater than given filter value */
  'search.operator.array-count-gt.description_one':
    '<Field/> <Operator>имеет ></Operator> <Value>{{count}} элемент</Value>',
  'search.operator.array-count-gt.name': 'количество больше',
  /* Array should have a count greater than or equal to the given filter value */
  'search.operator.array-count-gte.description_one':
    '<Field/> <Operator>имеет ≥</Operator> <Value>{{count}} элемент</Value>',
  'search.operator.array-count-gte.name': 'количество больше или равно',
  /* Array should have a count less than given filter value */
  'search.operator.array-count-lt.description_one':
    '<Field/> <Operator>имеет <</Operator> <Value>{{count}} элемент</Value>',
  'search.operator.array-count-lt.name': 'количество меньше',
  /* Array should have a count less than or equal to the given filter value */
  'search.operator.array-count-lte.description_one':
    '<Field/> <Operator>имеет ≤</Operator> <Value>{{count}} элемент</Value>',
  'search.operator.array-count-lte.name': 'количество меньше или равно',
  /* Array should have a count that is not equal to the given filter value */
  'search.operator.array-count-not-equal.description_one':
    '<Field/> <Operator>не имеет</Operator> <Value>{{count}} элемент</Value>',
  'search.operator.array-count-not-equal.name': 'количество не равно',
  /**
   * Array should have a count within the range of given filter values.
   * Gets passed `{{from}}` and `{{to}}` values.
   **/
  'search.operator.array-count-range.description':
    '<Field/> <Operator>имеет от</Operator> <Value>{{from}} → {{to}} элементов</Value>',
  'search.operator.array-count-range.name': 'количество между',
  /* Array should include the given value */
  'search.operator.array-list-includes.description':
    '<Field/> <Operator>включает</Operator> <Value>{{value}}</Value>',
  'search.operator.array-list-includes.name': 'включает',
  /* Array should not include the given value */
  'search.operator.array-list-not-includes.description':
    '<Field/> <Operator>не включает</Operator> <Value>{{value}}</Value>',
  'search.operator.array-list-not-includes.name': 'не включает',
  /* Array should include the given reference */
  'search.operator.array-reference-includes.description':
    '<Field/> <Operator>включает</Operator> <Value>{{value}}</Value>',
  'search.operator.array-reference-includes.name': 'включает',
  /* Array should not include the given reference */
  'search.operator.array-reference-not-includes.description':
    '<Field/> <Operator>не включает</Operator> <Value>{{value}}</Value>',
  'search.operator.array-reference-not-includes.name': 'не включает',
  /* Asset (file) should be the selected asset */
  'search.operator.asset-file-equal.description':
    '<Field/> <Operator>является</Operator> <Value>{{value}}</Value>',
  'search.operator.asset-file-equal.name': 'является',
  /* Asset (file) should not be the selected asset */
  'search.operator.asset-file-not-equal.description':
    '<Field/> <Operator>не является</Operator> <Value>{{value}}</Value>',
  'search.operator.asset-file-not-equal.name': 'не является',
  /* Asset (image) should be the selected asset */
  'search.operator.asset-image-equal.description':
    '<Field/> <Operator>является</Operator> <Value>{{value}}</Value>',
  'search.operator.asset-image-equal.name': 'является',
  /* Asset (image) should not be the selected asset */
  'search.operator.asset-image-not-equal.description':
    '<Field/> <Operator>не является</Operator> <Value>{{value}}</Value>',
  'search.operator.asset-image-not-equal.name': 'не является',
  /**
   * Boolean value should be the given filter value (true/false).
   * Context passed is `true` and `false`, allowing for more specific translations:
   * - `search.operator.boolean-equal.description_true`
   * - `search.operator.boolean-equal.description_false`
   */
  'search.operator.boolean-equal.description':
    '<Field/> <Operator>является</Operator> <Value>{{value}}</Value>',
  'search.operator.boolean-equal.name': 'является',
  /* Date should be after (later than) given filter value */
  'search.operator.date-after.description':
    '<Field/> <Operator>после</Operator> <Value>{{value}}</Value>',
  'search.operator.date-after.name': 'после',
  /* Date should be before (earlier than) given filter value */
  'search.operator.date-before.description':
    '<Field/> <Operator>до</Operator> <Value>{{value}}</Value>',
  'search.operator.date-before.name': 'до',
  /* Date should be the given filter value */
  'search.operator.date-equal.description':
    '<Field/> <Operator>является</Operator> <Value>{{value}}</Value>',
  'search.operator.date-equal.name': 'является',
  /* Date should be within the given filter value range (eg "within the last X days") */
  'search.operator.date-last.description':
    '<Field/> <Operator>в последние</Operator> <Value>{{value}}</Value>',
  'search.operator.date-last.name': 'последние',
  /* Date should not be the given filter value */
  'search.operator.date-not-equal.description':
    '<Field/> <Operator>не является</Operator> <Value>{{value}}</Value>',
  'search.operator.date-not-equal.name': 'не является',
  /* Date should be within the range of given filter values */
  'search.operator.date-range.description':
    '<Field/> <Operator>находится между</Operator> <Value/>',
  'search.operator.date-range.name': 'между',
  /* Date and time should be after (later than) given filter value */
  'search.operator.date-time-after.description':
    '<Field/> <Operator>после</Operator> <Value>{{value}}</Value>',
  'search.operator.date-time-after.name': 'после',
  /* Date and time should be before (earlier than) given filter value */
  'search.operator.date-time-before.description':
    '<Field/> <Operator>до</Operator> <Value>{{value}}</Value>',
  'search.operator.date-time-before.name': 'до',
  /* Date and time should be the given filter value */
  'search.operator.date-time-equal.description':
    '<Field/> <Operator>является</Operator> <Value>{{value}}</Value>',
  'search.operator.date-time-equal.name': 'является',
  /* Date and time should be within the given filter value range (eg "within the last X days") */
  'search.operator.date-time-last.description':
    '<Field/> <Operator>в последние</Operator> <Value>{{value}}</Value>',
  'search.operator.date-time-last.name': 'последние',
  /* Date and time should not be the given filter value */
  'search.operator.date-time-not-equal.description':
    '<Field/> <Operator>не является</Operator> <Value>{{value}}</Value>',
  'search.operator.date-time-not-equal.name': 'не является',
  /* Date and time should be within the range of given filter values */
  'search.operator.date-time-range.description':
    '<Field/> <Operator>находится между</Operator> <Value/>',
  'search.operator.date-time-range.name': 'между',
  /* Value should be defined */
  'search.operator.defined.description':
    '<Field/> <Operator>является</Operator> <Value>не пустым</Value>',
  'search.operator.defined.name': 'не пустое',
  /* Value should not be defined */
  'search.operator.not-defined.description':
    '<Field/> <Operator>является</Operator> <Value>пустым</Value>',
  'search.operator.not-defined.name': 'пустое',
  /* Number should be the given filter value */
  'search.operator.number-equal.description':
    '<Field/> <Operator>является</Operator> <Value>{{value}}</Value>',
  'search.operator.number-equal.name': 'является',
  /* Number should be greater than given filter value */
  'search.operator.number-gt.description':
    '<Field/> <Operator>></Operator> <Value>{{value}}</Value>',
  'search.operator.number-gt.name': 'больше чем',
  /* Number should be greater than or the given filter value */
  'search.operator.number-gte.description':
    '<Field/> <Operator>≥</Operator> <Value>{{value}}</Value>',
  'search.operator.number-gte.name': 'больше или равно',
  /* Number should be less than given filter value */
  'search.operator.number-lt.description':
    '<Field/> <Operator><</Operator> <Value>{{value}}</Value>',
  'search.operator.number-lt.name': 'меньше чем',
  /* Number should be less than or the given filter value */
  'search.operator.number-lte.description':
    '<Field/> <Operator>≤</Operator> <Value>{{value}}</Value>',
  'search.operator.number-lte.name': 'меньше или равно',
  /* Number should not be the given filter value */
  'search.operator.number-not-equal.description':
    '<Field/> <Operator>не является</Operator> <Value>{{value}}</Value>',
  'search.operator.number-not-equal.name': 'не является',
  /* Number should be within the range of given filter values */
  'search.operator.number-range.description':
    '<Field/> <Operator>находится между</Operator> <Value>{{from}} → {{to}}</Value>',
  'search.operator.number-range.name': 'находится между',
  /* Portable Text should contain the given filter value */
  'search.operator.portable-text-contains.description':
    '<Field/> <Operator>содержит</Operator> <Value>{{value}}</Value>',
  'search.operator.portable-text-contains.name': 'содержит',
  /* Portable Text should be the given filter value */
  'search.operator.portable-text-equal.description':
    '<Field/> <Operator>является</Operator> <Value>{{value}}</Value>',
  'search.operator.portable-text-equal.name': 'является',
  /* Portable Text should not contain the given filter value */
  'search.operator.portable-text-not-contains.description':
    '<Field/> <Operator>не содержит</Operator> <Value>{{value}}</Value>',
  'search.operator.portable-text-not-contains.name': 'не содержит',
  /* Portable Text should not be the given filter value */
  'search.operator.portable-text-not-equal.description':
    '<Field/> <Operator>не является</Operator> <Value>{{value}}</Value>',
  'search.operator.portable-text-not-equal.name': 'не является',
  /* References the given asset (file) */
  'search.operator.reference-asset-file.description':
    '<Field/> <Operator>→</Operator> <Value>{{value}}</Value>',
  'search.operator.reference-asset-file.name': 'файл',
  /* References the given asset (image) */
  'search.operator.reference-asset-image.description':
    '<Field/> <Operator>→</Operator> <Value>{{value}}</Value>',
  'search.operator.reference-asset-image.name': 'изображение',
  /* References the given document */
  'search.operator.reference-document.description':
    '<Field/> <Operator>→</Operator> <Value>{{value}}</Value>',
  'search.operator.reference-document.name': 'документ',
  /* Reference should be the given document */
  'search.operator.reference-equal.description':
    '<Field/> <Operator>является</Operator> <Value>{{value}}</Value>',
  'search.operator.reference-equal.name': 'является',
  /* Reference should not be the given document */
  'search.operator.reference-not-equal.description':
    '<Field/> <Operator>не является</Operator> <Value>{{value}}</Value>',
  'search.operator.reference-not-equal.name': 'не является',
  /* Slug contains the given value */
  'search.operator.slug-contains.description':
    '<Field/> <Operator>содержит</Operator> <Value>{{value}}</Value>',
  'search.operator.slug-contains.name': 'содержит',
  /* Slug equals the given filter value */
  'search.operator.slug-equal.description':
    '<Field/> <Operator>является</Operator> <Value>{{value}}</Value>',
  'search.operator.slug-equal.name': 'является',
  /* Slug does not contain the given value */
  'search.operator.slug-not-contains.description':
    '<Field/> <Operator>не содержит</Operator> <Value>{{value}}</Value>',
  'search.operator.slug-not-contains.name': 'не содержит',
  /* Slug does not equal the given filter value */
  'search.operator.slug-not-equal.description':
    '<Field/> <Operator>не является</Operator> <Value>{{value}}</Value>',
  'search.operator.slug-not-equal.name': 'не является',
  /* String contains the given filter value */
  'search.operator.string-contains.description':
    '<Field/> <Operator>содержит</Operator> <Value>{{value}}</Value>',
  'search.operator.string-contains.name': 'содержит',
  /* String equals the given filter value */
  'search.operator.string-equal.description':
    '<Field/> <Operator>является</Operator> <Value>{{value}}</Value>',
  'search.operator.string-equal.name': 'является',
  /* String equals one of the predefined allowed values */
  'search.operator.string-list-equal.description':
    '<Field/> <Operator>является</Operator> <Value>{{value}}</Value>',
  'search.operator.string-list-equal.name': 'является',
  /* String does not equal one of the predefined allowed values */
  'search.operator.string-list-not-equal.description':
    '<Field/> <Operator>не является</Operator> <Value>{{value}}</Value>',
  'search.operator.string-list-not-equal.name': 'не является',
  /* String does not contain the given filter value */
  'search.operator.string-not-contains.description':
    '<Field/> <Operator>не содержит</Operator> <Value>{{value}}</Value>',
  'search.operator.string-not-contains.name': 'не содержит',
  /* String does not equal the given filter value */
  'search.operator.string-not-equal.description':
    '<Field/> <Operator>не является</Operator> <Value>{{value}}</Value>',
  'search.operator.string-not-equal.name': 'не является',
  /** Label for the "Best match" search ordering type */
  'search.ordering.best-match-label': 'Наилучшее соответствие',
  /** Label for the "Created: Oldest first" search ordering type */
  'search.ordering.created-ascending-label': 'Создано: Сначала старые',
  /** Label for the "Created: Newest first" search ordering type */
  'search.ordering.created-descending-label': 'Создано: Сначала новые',
  /** Label for the "Updated: Oldest first" search ordering type */
  'search.ordering.updated-ascending-label': 'Обновлено: Сначала старые',
  /** Label for the "Updated: Newest first" search ordering type */
  'search.ordering.updated-descending-label': 'Обновлено: Сначала новые',
  /** Placeholder text for the global search input field */
  'search.placeholder': 'Поиск',
  /** Accessibility label for the recent searches section, shown when no valid search terms has been given */
  'search.recent-searches-aria-label': 'Недавние поиски',
  /** Label/heading shown for the recent searches section */
  'search.recent-searches-label': 'Недавние поиски',
  /** Accessibility label for the search results section, shown when the user has typed valid terms */
  'search.search-results-aria-label': 'Результаты поиска',

  /** Accessibility label for the navbar status button */
  'status-button.aria-label': 'Статус конфигурации',

  /** Description for error when the timeline for the given document can't be loaded */
  'timeline.error.load-document-changes-description':
    'Транзакции истории документа не были затронуты.',
  /** Title for error when the timeline for the given document can't be loaded */
  'timeline.error.load-document-changes-title':
    'Произошла ошибка при получении изменений документа.',
  /** Error description for when the document doesn't have history */
  'timeline.error.no-document-history-description':
    'При изменении содержимого документа версии документа появятся в этом меню.',
  /** Error title for when the document doesn't have history */
  'timeline.error.no-document-history-title': 'Нет истории документа',
  /** Error prompt when revision cannot be loaded */
  'timeline.error.unable-to-load-revision': 'Невозможно загрузить ревизию',
  /** Label for when the timeline item is the latest in the history */
  'timeline.latest': 'Последний',
  /** Label for latest version for timeline menu dropdown */
  'timeline.latest-version': 'Последняя версия',
  /** The aria-label for the list of revisions in the timeline */
  'timeline.list.aria-label': 'Ревизии документа',
  /** Label for loading history */
  'timeline.loading-history': 'Загрузка истории…',
  /** Label shown in review changes timeline when a document has been created */
  'timeline.operation.created': 'Создано',
  /** Label shown in review changes timeline when a document has been created, with a timestamp */
  'timeline.operation.created_timestamp': 'Создано: {{timestamp, datetime}}',
  /** Label shown in review changes timeline when a document was initially created */
  'timeline.operation.created-initial': 'Создано',
  /** Label shown in review changes timeline when a document was initially created, with a timestamp */
  'timeline.operation.created-initial_timestamp': 'Создано: {{timestamp, datetime}}',
  /** Label shown in review changes timeline when a document has been deleted */
  'timeline.operation.deleted': 'Удалено',
  /** Label shown in review changes timeline when a document has been deleted, with a timestamp */
  'timeline.operation.deleted_timestamp': 'Удалено: {{timestamp, datetime}}',
  /** Label shown in review changes timeline when a draft has been discarded */
  'timeline.operation.draft-discarded': 'Черновик отменен',
  /** Label shown in review changes timeline when a draft has been discarded, with a timestamp */
  'timeline.operation.draft-discarded_timestamp': 'Черновик отменен: {{timestamp, datetime}}',
  /** Label shown in review changes timeline when a draft has been edited */
  'timeline.operation.edited-draft': 'Отредактировано',
  /** Label shown in review changes timeline when a draft has been edited, with a timestamp */
  'timeline.operation.edited-draft_timestamp': 'Отредактировано: {{timestamp, datetime}}',
  /** Label shown in review changes timeline when a document has been edited live */
  'timeline.operation.edited-live': 'Отредактировано в реальном времени',
  /** Label shown in review changes timeline when a document has been edited live, with a timestamp */
  'timeline.operation.edited-live_timestamp':
    'Отредактировано в реальном времени: {{timestamp, datetime}}',
  /** Label shown in review changes timeline when a document was published */
  'timeline.operation.published': 'Опубликовано',
  /** Label shown in review changes timeline when a document was published, with a timestamp */
  'timeline.operation.published_timestamp': 'Опубликовано: {{timestamp, datetime}}',
  /** Label shown in review changes timeline when a document was unpublished */
  'timeline.operation.unpublished': 'Снято с публикации',
  /** Label shown in review changes timeline when a document was unpublished, with a timestamp */
  'timeline.operation.unpublished_timestamp': 'Снято с публикации: {{timestamp, datetime}}',
  /**
   * Label for determining since which version the changes for timeline menu dropdown are showing.
   * Receives the time label as a parameter (`timestamp`).
   */
  'timeline.since': 'С: {{timestamp, datetime}}',
  /** Label for missing change version for timeline menu dropdown are showing */
  'timeline.since-version-missing': 'С: неизвестная версия',

  /**Aria label for the action buttons in the PTE toolbar */
  'toolbar.portable-text.action-button-aria-label': '{{action}}',

  /** Label for button showing the free trial days left */
  'user-menu.action.free-trial_one': 'Остался {{count}} день пробного периода',
  /** Label for the button showed after trial ended */
  'user-menu.action.free-trial-finished': 'Перейти с бесплатной версии',
  /** Label for action to invite members to the current sanity project */
  'user-menu.action.invite-members': 'Пригласить участников',
  /** Accessibility label for action to invite members to the current sanity project */
  'user-menu.action.invite-members-aria-label': 'Пригласить участников',
  /** Label for action to manage the current sanity project */
  'user-menu.action.manage-project': 'Управление проектом',
  /** Accessibility label for the action to manage the current project */
  'user-menu.action.manage-project-aria-label': 'Управление проектом',
  /** Tooltip helper text when portable text annotation is disabled for empty block*/
  'user-menu.action.portable-text.annotation-disabled_empty-block':
    'Невозможно применить {{name}} к пустому блоку',
  /** Tooltip helper text when portable text annotation is disabled for multiple blocks */
  'user-menu.action.portable-text.annotation-disabled_multiple-blocks':
    'Невозможно применить {{name}} к нескольким блокам',
  /** Label for action to sign out of the current sanity project */
  'user-menu.action.sign-out': 'Выйти',
  /** Title for appearance section for the current studio (dark / light / system scheme) */
  'user-menu.appearance-title': 'Внешний вид',
  /** Label for close menu button for user menu */
  'user-menu.close-menu': 'Закрыть меню',
  /** Description for using the "dark theme" in the appearance user menu */
  'user-menu.color-scheme.dark-description': 'Использовать темное оформление',
  /** Title for using the "dark theme" in the appearance user menu */
  'user-menu.color-scheme.dark-title': 'Темная',
  /** Description for using the "light theme" in the appearance user menu */
  'user-menu.color-scheme.light-description': 'Использовать светлое оформление',
  /** Title for using the "light theme" in the appearance user menu */
  'user-menu.color-scheme.light-title': 'Светлая',
  /** Description for using "system apparence" in the appearance user menu */
  'user-menu.color-scheme.system-description': 'Использовать системное оформление',
  /** Title for using system apparence in the appearance user menu */
  'user-menu.color-scheme.system-title': 'Системная',
  /** Title for locale section for the current studio */
  'user-menu.locale-title': 'Язык',
  /** Label for tooltip to show which provider the currently logged in user is using */
  'user-menu.login-provider': 'Вошли через {{providerTitle}}',
  /** Label for open menu button for user menu */
  'user-menu.open-menu': 'Открыть меню',

  /**
   * Label for action to add a workspace (currently a developer-oriented action, as this will
   * lead to the documentation on workspace configuration)
   */
  'workspaces.action.add-workspace': 'Добавить рабочее пространство',
  /**
   * Label for action to choose a different workspace, in the case where you are not logged in,
   * have selected a workspace, and are faced with the authentication options for the selected
   * workspace. In other words, label for the action shown when you have reconsidered which
   * workspace to authenticate in.
   */
  'workspaces.action.choose-another-workspace': 'Выбрать другое рабочее пространство',
  /** Label for heading that indicates that you can choose your workspace */
  'workspaces.choose-your-workspace-label': 'Выберите ваше рабочее пространство',
  /** Label for the workspace menu */
  'workspaces.select-workspace-aria-label': 'Выбрать рабочее пространство',
  /** Button label for opening the workspace switcher */
  'workspaces.select-workspace-label': 'Выбрать рабочее пространство',
  /** Tooltip for the workspace menu */
  'workspaces.select-workspace-tooltip': 'Выберите рабочее пространство',
  /** Title for Workplaces dropdown menu */
  'workspaces.title': 'Рабочие пространства',
})
