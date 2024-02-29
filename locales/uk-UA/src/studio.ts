import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Menu item for deleting the asset */
  'asset-source.asset-list.menu.delete': 'Видалити',
  /** Menu item for showing where a particular asset is used */
  'asset-source.asset-list.menu.show-usage': 'Показати використання',
  /** Header in usage dialog for file assets */
  'asset-source.asset-usage-dialog.header_file': 'Документи, що використовують файл',
  /** Header in usage dialog for image assets */
  'asset-source.asset-usage-dialog.header_image': 'Документи, що використовують зображення',
  /** Text shown in usage dialog when loading documents using the selected asset */
  'asset-source.asset-usage-dialog.loading': 'Завантаження…',
  /** Text for cancel action in delete-asset dialog */
  'asset-source.delete-dialog.action.cancel': 'Скасувати',
  /** Text for "confirm delete" action in delete-asset dialog */
  'asset-source.delete-dialog.action.delete': 'Видалити',
  /** Dialog header for delete-asset dialog when deleting a file */
  'asset-source.delete-dialog.header_file': 'Видалити файл',
  /** Dialog header for delete-asset dialog when deleting an image */
  'asset-source.delete-dialog.header_image': 'Видалити зображення',
  /** Text shown in delete dialog when loading documents using the selected asset */
  'asset-source.delete-dialog.loading': 'Завантаження…',
  /** Message confirming to delete *named* file */
  'asset-source.delete-dialog.usage-list.confirm-delete-file_named':
    'Ви збираєтеся видалити файл <strong>{{filename}}}</strong> та його метадані. Ви впевнені?',
  /** Message confirming to delete *unnamed* file */
  'asset-source.delete-dialog.usage-list.confirm-delete-file_unnamed':
    'Ви збираєтеся видалити файл та його метадані. Ви впевнені?',
  /** Message confirming to delete *named* image */
  'asset-source.delete-dialog.usage-list.confirm-delete-image_named':
    'Ви збираєтеся видалити зображення <strong>{{filename}}</strong> та його метадані. Ви впевнені?',
  /** Message confirming to delete *unnamed* image */
  'asset-source.delete-dialog.usage-list.confirm-delete-image_unnamed':
    'Ви збираєтеся видалити зображення та його метадані. Ви впевнені?',
  /** Alt text showing on image preview in delete asset dialog  */
  'asset-source.delete-dialog.usage-list.image-preview-alt': 'Попередній перегляд зображення',
  /** Warning message showing when *named* file can't be deleted because it is in use */
  'asset-source.delete-dialog.usage-list.warning-file-is-in-use_named':
    '{{filename}} не може бути видалений, оскільки він використовується. Щоб видалити цей файл, спершу вам потрібно видалити всі його використання.',
  /** Warning message showing when *unnamed* file can't be deleted because it is in use */
  'asset-source.delete-dialog.usage-list.warning-file-is-in-use_unnamed':
    'Цей файл не може бути видалений, оскільки він використовується. Щоб видалити його, спершу вам потрібно видалити всі його використання.',
  /** Warning message showing when *named* image can't be deleted because it is in use */
  'asset-source.delete-dialog.usage-list.warning-image-is-in-use_named':
    '{{filename}} не може бути видалений, оскільки він використовується. Щоб видалити це зображення, спершу вам потрібно видалити всі його використання.',
  /** Warning message showing when *unnamed* image can't be deleted because it is in use */
  'asset-source.delete-dialog.usage-list.warning-image-is-in-use_unnamed':
    'Це зображення не може бути видалене, оскільки воно використовується. Щоб видалити його, спершу вам потрібно видалити всі його використання.',
  /** Text shown when the list of assets only include a specific set of types */
  'asset-source.dialog.accept-message':
    'Показуються лише активи прийнятих типів: <strong>{{acceptTypes}}</strong>',
  /** Keys shared between both image asset source and file asset source */
  /** Select asset dialog title for files */
  'asset-source.dialog.default-title_file': 'Вибрати файл',
  /** Select asset dialog title for images */
  'asset-source.dialog.default-title_image': 'Вибрати зображення',
  /** Select asset dialog load more items */
  'asset-source.dialog.load-more': 'Завантажити більше',
  /** Text shown when selecting a file but there's no files to select from */
  'asset-source.dialog.no-assets_file': 'Немає файлів',
  /** Text shown when selecting an image but there's no images to select from */
  'asset-source.dialog.no-assets_image': 'Немає зображень',
  'asset-source.file.asset-list.action.delete.disabled-cannot-delete-current-file':
    'Не можна видалити поточно вибраний файл',
  'asset-source.file.asset-list.action.delete.text': 'Видалити',
  'asset-source.file.asset-list.action.delete.title': 'Видалити файл',
  'asset-source.file.asset-list.action.select-file.title': 'Вибрати файл {{filename}}',
  'asset-source.file.asset-list.action.show-usage.title': 'Показати використання',
  'asset-source.file.asset-list.delete-failed': 'Файл не вдалося видалити',
  'asset-source.file.asset-list.delete-successful': 'Файл було видалено',
  'asset-source.file.asset-list.header.date-added': 'Дата додавання',
  /** File asset source */
  'asset-source.file.asset-list.header.filename': 'Назва файлу',
  'asset-source.file.asset-list.header.size': 'Розмір',
  'asset-source.file.asset-list.header.type': 'Тип',
  /** Text displayed on button or menu invoking the file asset source */
  'asset-source.file.title': 'Завантажені файли',
  'asset-source.image.asset-list.delete-failed': 'Зображення не вдалося видалити',
  /** Image asset source */
  'asset-source.image.asset-list.delete-successful': 'Зображення було видалено',
  /** Text displayed on button or menu invoking the image asset source */
  'asset-source.image.title': 'Завантажені зображення',
  'asset-source.usage-list.documents-using-file_named_one':
    'Один документ використовує файл <code>{{filename}}</code>',
  /** Text shown in usage dialog for a file asset when there are zero, one or more documents using the *named* file **/
  'asset-source.usage-list.documents-using-file_named_zero':
    'Жоден документ не використовує файл <code>{{filename}}</code>',
  'asset-source.usage-list.documents-using-file_unnamed_one': 'Один документ використовує цей файл',
  /** Text shown in usage dialog for a file asset when there are zero, one or more documents using the *unnamed* file **/
  'asset-source.usage-list.documents-using-file_unnamed_zero':
    'Жоден документ не використовує цей файл',
  'asset-source.usage-list.documents-using-image_named_one':
    'Один документ використовує зображення <code>{{filename}}</code>',
  /** Text shown in usage dialog for an image asset when there are zero, one or more documents using the *named* image **/
  'asset-source.usage-list.documents-using-image_named_zero':
    'Жоден документ не використовує зображення <code>{{filename}}</code>',
  'asset-source.usage-list.documents-using-image_unnamed_one':
    'Один документ використовує це зображення',
  /** Text shown in usage dialog for an image asset when there are zero, one or more documents using the *unnamed* image **/
  'asset-source.usage-list.documents-using-image_unnamed_zero':
    'Жоден документ не використовує це зображення',

  /** Action message for navigating to next month */
  'calendar.action.go-to-next-month': 'Перейти до наступного місяця',
  /** Action message for navigating to next year */
  'calendar.action.go-to-next-year': 'Перейти до наступного року',
  /** Action message for navigating to previous month */
  'calendar.action.go-to-previous-month': 'Перейти до попереднього місяця',
  /** Action message for navigating to previous year */
  'calendar.action.go-to-previous-year': 'Перейти до попереднього року',
  /* Label for navigating the calendar to "today", without _selecting_ today. Short form, eg `Today`, not `Go to today` */
  'calendar.action.go-to-today': 'Сьогодні',
  /* Accessibility label for navigating the calendar to "today", without _selecting_ today */
  'calendar.action.go-to-today-aria-label': 'Перейти до сьогоднішнього дня',
  /* Label for navigating the calendar to "tomorrow", without _selecting_ tomorrow. Short form, eg `Tomorrow`, not `Go to tomorrow` */
  'calendar.action.go-to-tomorrow': 'Завтра',
  /* Label for navigating the calendar to "yesterday", without _selecting_ yesterday. Short form, eg `Yesterday`, not `Go to yesterday` */
  'calendar.action.go-to-yesterday': 'Вчора',
  /** Label for switch that controls whether or not to include time in given timestamp */
  'calendar.action.include-time-label': 'Включити час',
  /** Action message for selecting the hour */
  'calendar.action.select-hour': 'Вибрати годину',
  /** Action message for selecting the minute */
  'calendar.action.select-minute': 'Вибрати хвилину',
  /** Action message for setting to the current time */
  'calendar.action.set-to-current-time': 'Встановити поточний час',
  /** Label for selecting an hour preset. Receives a `time` param as a string on hh:mm format and a `date` param as a Date instance denoting the preset date */
  'calendar.action.set-to-time-preset': '{{time}} на {{date, datetime}}',
  /** Error message displayed in calendar when entered date is not the correct format */
  'calendar.error.must-be-in-format': 'Повинно бути у форматі: {{exampleDate}}',
  /** Month name for April */
  'calendar.month-names.april': 'Квітень',
  /** Month name for August */
  'calendar.month-names.august': 'Серпень',
  /** Month name for December */
  'calendar.month-names.december': 'Грудень',
  /** Month name for February */
  'calendar.month-names.february': 'Лютий',
  /** Month name for January */
  'calendar.month-names.january': 'Січень',
  /** Month name for July */
  'calendar.month-names.july': 'Липень',
  /** Month name for June */
  'calendar.month-names.june': 'Червень',
  /** Month name for March */
  'calendar.month-names.march': 'Березень',
  /** Month name for May */
  'calendar.month-names.may': 'Травень',
  /** Month name for November */
  'calendar.month-names.november': 'Листопад',
  /** Month name for October */
  'calendar.month-names.october': 'Жовтень',
  /** Month name for September */
  'calendar.month-names.september': 'Вересень',
  /** Short weekday name for Friday */
  'calendar.weekday-names.short.friday': 'Пт',
  /** Short weekday name for Monday */
  'calendar.weekday-names.short.monday': 'Пн',
  /** Short weekday name for Saturdayday */
  'calendar.weekday-names.short.saturday': 'Сб',
  /** Short weekday name for Sunday */
  'calendar.weekday-names.short.sunday': 'Нд',
  /** Short weekday name for Thursday */
  'calendar.weekday-names.short.thursday': 'Чт',
  /** Short weekday name for Tuesday */
  'calendar.weekday-names.short.tuesday': 'Вт',
  /** Short weekday name for Wednesday */
  'calendar.weekday-names.short.wednesday': 'Ср',

  /** Label for the close button label in Review Changes pane */
  'changes.action.close-label': 'Закрити перегляд змін',
  /** Cancel label for revert button prompt action */
  'changes.action.revert-all-cancel': 'Скасувати',
  /** Revert all confirm label for revert button action - used on prompt button + review changes pane */
  'changes.action.revert-all-confirm': 'Відмінити всі',
  /** Prompt for confirming revert change (singular) label for field change action */
  'changes.action.revert-changes-confirm-change_one': 'Відмінити зміну',
  /** Prompt for reverting changes for a field change */
  'changes.action.revert-changes-description': 'Ви впевнені, що хочете відмінити зміни?',
  /** Prompt for reverting changes for a group change, eg multiple changes */
  'changes.action.revert-changes-description_one': 'Ви впевнені, що хочете відмінити зміну?',
  /** Label for when the action of the change was to set something that was previously empty, eg a field was given a value, an array item was added, an asset was selected or similar */
  'changes.added-label': 'Додано',
  /** Array diff: An item was added in a given position (`{{position}}`) */
  'changes.array.item-added-in-position': 'Додано на позицію {{position}}',
  'changes.array.item-moved_down_one': 'Переміщено на {{count}} позицію вниз',
  /**
   * Array diff: An item was moved within the array.
   * Receives `{{count}}` representing number of positions it moved.
   * Context is the direction of the move, either `up` or `down`.
   */
  'changes.array.item-moved_up_one': 'Переміщено на {{count}} позицію вгору',
  /** Array diff: An item was removed from a given position (`{{position}}`) */
  'changes.array.item-removed-from-position': 'Видалено з позиції {{position}}',
  /** Accessibility label for the "change bar" shown when there are edits on a field-level */
  'changes.change-bar.aria-label': 'Переглянути зміни',
  /** Label for when the action of the change was _not_ an add/remove, eg a text field changed value, an image was changed from one asset to another or similar */
  'changes.changed-label': 'Змінено',
  /** Label and text for tooltip that indicates the authors of the changes */
  'changes.changes-by-author': 'Зміни від',
  /** Additional text shown in development mode when a diff component crashes during rendering */
  'changes.error-boundary.developer-info':
    'Перевірте консоль розробника для отримання додаткової інформації',
  /** Text shown when a diff component crashes during rendering, triggering the error boundary */
  'changes.error-boundary.title': 'Відображення змін у цьому полі спричинило помилку',
  /** Error message shown when the value of a field is not the expected one */
  'changes.error.incorrect-type-message':
    'Помилка значення: Значення є типу "<code>{{actualType}}</code>", очікуваний тип "<code>{{expectedType}}</code>"',
  /** File diff: Fallback title for the meta info section when there is no original filename to use  */
  'changes.file.meta-info-fallback-title': 'Без назви',
  /** Image diff: Text shown in tooltip when hovering hotspot that has changed in diff view */
  'changes.image.crop-changed': 'Кадрування змінено',
  /** Image diff: Text shown if the previous image asset was deleted (shouldn't theoretically happen) */
  'changes.image.deleted': 'Зображення видалено',
  /** Image diff: Text shown if the image failed to be loaded when previewing it */
  'changes.image.error-loading-image': 'Помилка завантаження зображення',
  /** Image diff: Text shown in tooltip when hovering hotspot that has changed in diff view */
  'changes.image.hotspot-changed': 'Гаряча точка змінена',
  /** Image diff: Fallback title for the meta info section when there is no original filename to use  */
  'changes.image.meta-info-fallback-title': 'Без назви',
  /** Image diff: Text shown if no asset has been set for the field (but has metadata changes) */
  'changes.image.no-asset-set': 'Зображення не встановлено',
  /** Image diff: Text shown when the from/to state has/had no image */
  'changes.image.no-image-placeholder': '(немає зображення)',
  /** Label for the "from" value in the change inspector */
  'changes.inspector.from-label': 'З',
  /** Label for the "meta" (field path, action etc) information in the change inspector */
  'changes.inspector.meta-label': 'Мета',
  /** Label for the "to" value in the change inspector */
  'changes.inspector.to-label': 'До',
  /** Loading author of change in the differences tooltip in the review changes pane */
  'changes.loading-author': 'Завантаження…',
  /** Loading changes in Review Changes Pane */
  'changes.loading-changes': 'Завантаження змін…',
  /** No Changes description in the Review Changes pane */
  'changes.no-changes-description':
    "Відредагуйте документ або виберіть старішу версію в часовій шкалі, щоб у цій панелі з'явився список змін.",
  /** No Changes title in the Review Changes pane */
  'changes.no-changes-title': 'Змін немає',
  /** Portable Text diff: An annotation was added */
  'changes.portable-text.annotation_added': 'Додано анотацію',
  /** Portable Text diff: An annotation was changed */
  'changes.portable-text.annotation_changed': 'Змінено анотацію',
  /** Portable Text diff: An annotation was removed */
  'changes.portable-text.annotation_removed': 'Видалено анотацію',
  /** Portable Text diff: An annotation was left unchanged */
  'changes.portable-text.annotation_unchanged': 'Анотація без змін',
  /** Portable Text diff: A block changed from one style to another (eg `normal` to `h1` or similar) */
  'changes.portable-text.block-style-changed':
    'Змінено стиль блоку з "{{fromStyle}}" на "{{toStyle}}"',
  /** Portable Text diff: Change formatting of text (setting/unsetting marks, eg bold/italic etc) */
  'changes.portable-text.changed-formatting': 'Змінено форматування',
  /** Portable Text diff: An empty inline object is part of a change */
  'changes.portable-text.empty-inline-object': 'Порожній {{inlineObjectType}}',
  /** Portable Text diff: An empty object is the result of adding/removing an annotation */
  'changes.portable-text.empty-object-annotation': 'Порожній {{annotationType}}',
  /** Portable Text diff: Added a block containing no text (eg empty block) */
  'changes.portable-text.empty-text_added': 'Додано порожній текст',
  /** Portable Text diff: Changed a block that contained no text (eg empty block) */
  'changes.portable-text.empty-text_changed': 'Змінено порожній текст',
  /** Portable Text diff: Removed a block containing no text (eg empty block) */
  'changes.portable-text.empty-text_removed': 'Видалено порожній текст',
  /** Portable Text diff: An inline object was added */
  'changes.portable-text.inline-object_added': "Додано вбудований об'єкт",
  /** Portable Text diff: An inline object was changed */
  'changes.portable-text.inline-object_changed': "Змінено вбудований об'єкт",
  /** Portable Text diff: An inline object was removed */
  'changes.portable-text.inline-object_removed': "Видалено вбудований об'єкт",
  /** Portable Text diff: An inline object was left unchanged */
  'changes.portable-text.inline-object_unchanged': "Вбудований об'єкт без змін",
  /** Portable Text diff: Added a chunk of text */
  'changes.portable-text.text_added': 'Додано текст',
  /** Portable Text diff: Removed a chunk of text */
  'changes.portable-text.text_removed': 'Видалено текст',
  /** Portable Text diff: Annotation has an unknown schema type */
  'changes.portable-text.unknown-annotation-schema-type': 'Невідомий тип схеми анотації',
  /** Portable Text diff: Inline object has an unknown schema type */
  'changes.portable-text.unknown-inline-object-schema-type':
    "Невідомий тип схеми вбудованого об'єкта",
  /** Label for when the action of the change was a removal, eg a field was cleared, an array item was removed, an asset was deselected or similar */
  'changes.removed-label': 'Видалено',
  /** Title for the Review Changes pane */
  'changes.title': 'Переглянути зміни',

  /** --- Common components --- */
  /** Tooltip text for context menu buttons */
  'common.context-menu-button.tooltip': 'Показати більше',
  /** Default text for dialog cancel button */
  'common.dialog.cancel-button.text': 'Скасувати',
  /** Default text for dialog confirm button */
  'common.dialog.confirm-button.text': 'Підтвердити',
  /** Default text in shared loader text / spinner lockup */
  'common.loading': 'Завантаження',

  /** --- Configuration issues --- */
  /** Tooltip displayed on configuration issues button */
  'configuration-issues.button.tooltip': 'Знайдено проблеми конфігурації',

  /** The fallback title for an ordering menu item if no localized titles are provided. */
  'default-menu-item.fallback-title': 'Сортувати за {{title}}',

  /** Title for the default ordering/SortOrder if no orderings are provided and the caption field is found */
  'default-orderings.caption': 'Сортувати за підписом',
  /** Title for the default ordering/SortOrder if no orderings are provided and the description field is found */
  'default-orderings.description': 'Сортувати за описом',
  /** Title for the default ordering/SortOrder if no orderings are provided and the header field is found */
  'default-orderings.header': 'Сортувати за заголовком',
  /** Title for the default ordering/SortOrder if no orderings are provided and the heading field is found */
  'default-orderings.heading': 'Сортувати за рубрикою',
  /** Title for the default ordering/SortOrder if no orderings are provided and the label field is found */
  'default-orderings.label': 'Сортувати за міткою',
  /** Title for the default ordering/SortOrder if no orderings are provided and the name field is found */
  'default-orderings.name': 'Сортувати за іменем',
  /** Title for the default ordering/SortOrder if no orderings are provided and the title field is found */
  'default-orderings.title': 'Сортувати за назвою',

  /** Label to show in the document footer indicating the last edited date of the document */
  'document-status.edited': 'Відредаговано {{date}}',
  /** Label to show in the document footer indicating the document is not published*/
  'document-status.not-published': 'Не опубліковано',
  /** Label to show in the document footer indicating the published date of the document */
  'document-status.published': 'Опубліковано {{date}}',

  /** The value of the <code>_key</code> property must be a unique string. */
  'form.error.duplicate-keys-alert.details.additional-description':
    'Значення властивості <code>_key</code> має бути унікальним рядком.',
  /** This usually happens when items are created using an API client, and the <code>_key</code> property of each elements has been generated non-uniquely. */
  'form.error.duplicate-keys-alert.details.description':
    'Це зазвичай трапляється, коли елементи створюються за допомогою API клієнта, і властивість <code>_key</code> кожного елемента була згенерована неунікально.',
  /** Developer info */
  'form.error.duplicate-keys-alert.details.title': 'Інформація для розробників',
  /** Generate unique keys */
  'form.error.duplicate-keys-alert.generate-button.text': 'Генерувати унікальні ключі',
  /** Several items in this list share the same identifier (key). Every item must have an unique identifier. */
  'form.error.duplicate-keys-alert.summary':
    'Декілька елементів у цьому списку мають однаковий ідентифікатор (ключ). Кожен елемент має мати унікальний ідентифікатор.',
  /** Non-unique keys */
  'form.error.duplicate-keys-alert.title': 'Неунікальні ключі',
  /** Error text shown when a field with a given name cannot be found in the schema or is conditionally hidden but explicitly told to render  */
  'form.error.field-not-found':
    'Поле "{{fieldName}}" не знайдено серед членів – перевірте, чи воно визначене в схемі та чи не було умовно приховане.',
  /** Add missing keys */
  'form.error.missing-keys-alert.add-button.text': 'Додати відсутні ключі',
  /** The value of the <code>_key</code> property must be a unique string. */
  'form.error.missing-keys-alert.details.additional-description':
    'Значення властивості <code>_key</code> має бути унікальним рядком.',
  /** This usually happens when items are created using an API client, and the <code>_key</code> property has not been included. */
  'form.error.missing-keys-alert.details.description':
    'Це зазвичай трапляється, коли елементи створюються за допомогою API клієнта, і властивість <code>_key</code> не була включена.',
  /** Developer info */
  'form.error.missing-keys-alert.details.title': 'Інформація для розробників',
  /** Some items in the list are missing their keys. This must be fixed in order to edit the list. */
  'form.error.missing-keys-alert.summary':
    'Деякі елементи у списку не мають ключів. Це потрібно виправити для редагування списку.',
  /** Missing keys */
  'form.error.missing-keys-alert.title': 'Відсутні ключі',
  /** This usually happens when items are created using an API client, or when a custom input component has added invalid data to the list. */
  'form.error.mixed-array-alert.details.description':
    'Це зазвичай трапляється, коли елементи створюються за допомогою API клієнта, або коли користувацький компонент вводу додав недійсні дані до списку.',
  /** Developer info */
  'form.error.mixed-array-alert.details.title': 'Інформація для розробників',
  /**  Remove non-object values */
  'form.error.mixed-array-alert.remove-button.text': "Видалити необ'єктні значення",
  /** Some items in this list are not objects. This must be fixed in order to edit the list. */
  'form.error.mixed-array-alert.summary':
    "Деякі елементи у цьому списку не є об'єктами. Це потрібно виправити для редагування списку.",
  /** Invalid list values */
  'form.error.mixed-array-alert.title': 'Недійсні значення списку',
  /** Error text shown when form is unable to find an array item at a given indexed path */
  'form.error.no-array-item-at-index':
    'Елемент масиву за індексом <code>{{index}}</code> не знайдено за шляхом <code>{{path}}</code>',
  /** Error text shown when form is unable to find an array item at a given keyed path */
  'form.error.no-array-item-at-key':
    'Елемент масиву з `_key` <code>"{{key}}"</code> не знайдено за шляхом <code>{{path}}</code>',
  /** Form field deprecated label */
  'form.field.deprecated-label': 'застарілий',
  /** Fallback title shown above field if it has no defined title */
  'form.field.untitled-field-label': 'Без назви',
  /** Fallback title shown above fieldset if it has no defined title */
  'form.field.untitled-fieldset-label': 'Без назви',
  /** Accessibility label for the icon that indicates the field has a validation error */
  'form.validation.has-error-aria-label': 'Має помилку',
  /** Accessibility label for the icon that indicates the field has validation information */
  'form.validation.has-info-aria-label': 'Має інформацію',
  /** Accessibility label for the icon that indicates the field has a validation warning */
  'form.validation.has-warning-aria-label': 'Має попередження',
  /** Text shown when summarizing validation information, when the field has one or more errors */
  'form.validation.summary.errors-count_one': '{{count}} помилка',
  /** Text shown when summarizing validation information, when the field has one or more warnings */
  'form.validation.summary.warnings-count_one': '{{count}} попередження',

  /** Tooltip for free trial navbar button indicating remaining days */
  'free-trial.tooltip.days-count_one': '{{count}} день залишився в пробному періоді',
  /** Tooltip for free trial navbar button, once trial has ended */
  'free-trial.tooltip.trial-finished': 'Оновіть ваш проект',

  /**
   * Label for "contact sales" call to action
   * These are titles for fallback links in the event the help & resources endpoint isn't able to be fetched
   */
  'help-resources.action.contact-sales': "Зв'язатися з відділом продажу",
  /**
   * Label for "help and support" call to action
   * These are titles for fallback links in the event the help & resources endpoint isn't able to be fetched
   */
  'help-resources.action.help-and-support': 'Допомога та підтримка',
  /**
   * Label for "join our community" call to action
   * These are titles for fallback links in the event the help & resources endpoint isn't able to be fetched
   */
  'help-resources.action.join-our-community': 'Приєднатися до нашої спільноти',
  /** Information for what the latest sanity version is */
  'help-resources.latest-sanity-version': 'Остання версія {{latestVersion}}',
  /** Information for what studio version the current studio is running */
  'help-resources.studio-version': 'Версія Sanity Studio {{studioVersion}}',
  /** Title for help and resources menus */
  'help-resources.title': 'Допомога та ресурси',

  /** Text for button to cancel an ongoing upload */
  'input.files.common.cancel-upload': 'Скасувати',
  /** Text for file input button in upload placeholder */
  'input.files.common.upload-placeholder.file-input-button.text': 'Завантажити',
  /** Uploading <FileName/> */
  'input.files.common.upload-progress': 'Завантаження <FileName/>',
  /** The referenced document cannot be opened, because the URL failed to be resolved */
  'input.reference.document-cannot-be-opened.failed-to-resolve-url':
    'Цей документ не можна відкрити (не вдалося вирішити URL до Studio)',

  /** Label for adding item after a specific array item */
  'inputs.array.action.add-after': 'Додати елемент після',
  /** Label for adding item before a specific array item */
  'inputs.array.action.add-before': 'Додати елемент перед',
  /** Label for adding array item action when the schema allows for only one schema type */
  'inputs.array.action.add-item': 'Додати елемент',
  /**
   * Label for adding one array item action when the schema allows for multiple schema types,
   * eg. will prompt the user to select a type once triggered
   */
  'inputs.array.action.add-item-select-type': 'Додати елемент...',
  /** Array drag handle button tooltip */
  'inputs.array.action.drag.tooltip': 'Перетягнути для зміни порядку',
  /** Label for duplicating an array item  */
  'inputs.array.action.duplicate': 'Дублювати',
  /** Label for editing the item of a specific type, eg "Edit Person" */
  'inputs.array.action.edit': 'Редагувати {{itemTypeTitle}}',
  /** Label for removing an array item action  */
  'inputs.array.action.remove': 'Видалити',
  /** Label for removing action when an array item has an error  */
  'inputs.array.action.remove-invalid-item': 'Видалити',
  /** Label for viewing the item of a specific type, eg "View Person" */
  'inputs.array.action.view': 'Переглянути {{itemTypeTitle}}',
  /** Error description for the array item tooltip that explains that the current item can still be moved or deleted but not edited since the schema definition is not found */
  'inputs.array.error.can-delete-but-no-edit-description':
    'Ви все ще можете перемістити або видалити цей елемент, але його не можна редагувати, оскільки визначення схеми для його типу ніде не знайдено.',
  /** Error label for toast when array could not resolve the initial value */
  'inputs.array.error.cannot-resolve-initial-value-title':
    'Не вдається вирішити початкове значення для типу: {{schemaTypeTitle}}: {{errorMessage}}.',
  /** Error label for toast when trying to upload one array item of a type that cannot be converted to array */
  'inputs.array.error.cannot-upload-unable-to-convert_one':
    'Наступний елемент не можна завантажити, оскільки немає відомого перетворення з типу вмісту в елемент масиву:',
  /** Error description for the array item tooltip that explains that the current type item is not valid for the list  */
  'inputs.array.error.current-schema-not-declare-description':
    'Поточна схема не оголошує елементи типу <code>{{typeName}}</code> як дійсні для цього списку. Це може означати, що тип було вилучено як дійсний тип елемента, або хтось інший додав його до своєї локальної схеми, яка ще не розгорнута.',
  /** Error description to show how the item is being represented in the json format */
  'inputs.array.error.json-representation-description': 'JSON-представлення цього елемента:',
  /** Error description for the array item tooltip that explains what the error means with more context */
  'inputs.array.error.type-is-incompatible-prompt':
    'Елемент типу <code>{{typeName}}</code> не дійсний для цього списку',
  /** Error title for when an item type within an array input is incompatible, used in the tooltip */
  'inputs.array.error.type-is-incompatible-title': 'Чому це відбувається?',
  /** Error label for unexpected errors in the Array Input */
  'inputs.array.error.unexpected-error': 'Несподівана помилка: {{error}}',
  /** Label for when the array input doesn't have any items */
  'inputs.array.no-items-label': 'Немає елементів',
  /** Label for read only array fields */
  'inputs.array.read-only-label': 'Це поле тільки для читання',
  /** Label for when the array input is resolving the initial value for the item */
  'inputs.array.resolving-initial-value': 'Визначення початкового значення…',
  /** Placeholder value for datetime input */
  'inputs.datetime.placeholder': 'наприклад, {{example}}',
  /** Acessibility label for button to open file options menu */
  'inputs.file.actions-menu.file-options.aria-label': 'Відкрити меню опцій файлу',
  /** Browse */
  'inputs.file.browse-button.text': 'Переглянути',
  /** Select file */
  'inputs.file.dialog.title': 'Вибрати файл',
  /** Unknown member kind: `{{kind}}` */
  'inputs.file.error.unknown-member-kind': 'Невідомий тип елемента: {{kind}}',
  /** The value of this field is not a valid file. Resetting this field will let you choose a new file. */
  'inputs.file.invalid-file-warning.description':
    'Значення цього поля не є дійсним файлом. Скидання цього поля дозволить вам вибрати новий файл.',
  /** Reset value */
  'inputs.file.invalid-file-warning.reset-button.text': 'Скинути значення',
  /** Invalid file value */
  'inputs.file.invalid-file-warning.title': 'Недійсне значення файлу',
  /** Select */
  'inputs.file.multi-browse-button.text': 'Вибрати',
  /** The upload could not be completed at this time. */
  'inputs.file.upload-failed.description': 'Завантаження не може бути завершене на даний момент.',
  /** Upload failed */
  'inputs.file.upload-failed.title': 'Завантаження не вдалося',
  /** Clear field */
  'inputs.files.common.actions-menu.clear-field.label': 'Очистити поле',
  /** Copy URL */
  'inputs.files.common.actions-menu.copy-url.label': 'Копіювати URL',
  /** Download */
  'inputs.files.common.actions-menu.download.label': 'Завантажити',
  /** The URL is copied to the clipboard */
  'inputs.files.common.actions-menu.notification.url-copied': 'URL скопійовано до буфера обміну',
  /** Replace */
  'inputs.files.common.actions-menu.replace.label': 'Замінити',
  /** Upload */
  'inputs.files.common.actions-menu.upload.label': 'Завантажити',
  /** Drop to upload */
  'inputs.files.common.drop-message.drop-to-upload': 'Перетягніть, щоб завантажити',
  /** Drop to upload `{{count}}` file */
  'inputs.files.common.drop-message.drop-to-upload-multi_one':
    'Перетягніть, щоб завантажити {{count}} файл',
  /** Can't upload this file here */
  'inputs.files.common.drop-message.drop-to-upload.no-accepted-file-message_one':
    'Не можна завантажити цей файл тут',
  /** `{{count}}` file can't be uploaded here */
  'inputs.files.common.drop-message.drop-to-upload.rejected-file-message_one':
    '{{count}} файл не можна завантажити тут',
  /** Cannot upload `{{count}}` files */
  'inputs.files.common.placeholder.cannot-upload-some-files_one': 'Не можна завантажити файл',
  /** Drag or paste type here */
  'inputs.files.common.placeholder.drag-or-paste-to-upload_file':
    'Перетягніть або вставте файл сюди',
  /** Drag or paste image here */
  'inputs.files.common.placeholder.drag-or-paste-to-upload_image':
    'Перетягніть або вставте зображення сюди',
  /** Drop to upload file */
  'inputs.files.common.placeholder.drop-to-upload_file': 'Перетягніть, щоб завантажити файл',
  /** Drop to upload image */
  'inputs.files.common.placeholder.drop-to-upload_image': 'Перетягніть, щоб завантажити зображення',
  /** Read only */
  'inputs.files.common.placeholder.read-only': 'Тільки для читання',
  /** Can't upload files here */
  'inputs.files.common.placeholder.upload-not-supported': 'Не можна завантажити файли тут',
  /** Clear upload */
  'inputs.files.common.stale-upload-warning.clear': 'Очистити завантаження',
  /** An upload has made no progress for at least `{{staleThresholdMinutes}}` minutes and likely got interrupted. You can safely clear the incomplete upload and try uploading again. */
  'inputs.files.common.stale-upload-warning.description':
    'Завантаження не робилося протягом щонайменше {{staleThresholdMinutes}} хвилин і, ймовірно, було перервано. Ви можете безпечно очистити неповне завантаження та спробувати завантажити знову.',
  /** Incomplete upload */
  'inputs.files.common.stale-upload-warning.title': 'Неповне завантаження',
  /** Tooltip text for action to crop image */
  'inputs.image.actions-menu.crop-image-tooltip': 'Обрізати зображення',
  /** Accessibility label for button to open image edit dialog */
  'inputs.image.actions-menu.edit-details.aria-label': 'Відкрити діалог редагування зображення',
  /** Accessibility label for button to open image options menu */
  'inputs.image.actions-menu.options.aria-label': 'Відкрити меню параметрів зображення',
  /** Select */
  'inputs.image.browse-menu.text': 'Вибрати',
  /** Cannot upload this file here */
  'inputs.image.drag-overlay.cannot-upload-here': 'Не можна завантажити цей файл тут',
  /** Drop image to upload */
  'inputs.image.drag-overlay.drop-to-upload-image': 'Перетягніть зображення, щоб завантажити',
  /** This field is read only */
  'inputs.image.drag-overlay.this-field-is-read-only': 'Це поле тільки для читання',
  /** Unknown member kind: `{{kind}}` */
  'inputs.image.error.unknown-member-kind': 'Невідомий тип елемента: {{kind}}',
  /** Edit hotspot and crop */
  'inputs.image.hotspot-dialog.title': 'Редагувати гарячу точку та обрізати',
  /** The value of this field is not a valid image. Resetting this field will let you choose a new image. */
  'inputs.image.invalid-image-warning.description':
    'Значення цього поля не є дійсним зображенням. Скидання цього поля дозволить вам вибрати нове зображення.',
  /** Reset value */
  'inputs.image.invalid-image-warning.reset-button.text': 'Скинути значення',
  /** Invalid image value */
  'inputs.image.invalid-image-warning.title': 'Недійсне значення зображення',
  /** Preview of uploaded image */
  'inputs.image.preview-uploaded-image': 'Попередній перегляд завантаженого зображення',
  /** The upload could not be completed at this time. */
  'inputs.image.upload-error.description': 'Завантаження не може бути завершене на даний момент.',
  /** Upload failed */
  'inputs.image.upload-error.title': 'Завантаження не вдалося',
  /** Adjust the rectangle to crop image. Adjust the circle to specify the area that should always be visible. */
  'inputs.imagetool.description':
    'Відрегулюйте прямокутник для обрізки зображення. Відрегулюйте коло, щоб вказати область, яка завжди повинна бути видимою.',
  /** Error: `{{errorMessage}}` */
  'inputs.imagetool.load-error': 'Помилка: {{errorMessage}}',
  /** Hotspot & Crop */
  'inputs.imagetool.title': 'Hotspot & Crop',
  /** Convert to `{{targetType}}` */
  'inputs.invalid-value.convert-button.text': 'Перетворити на {{targetType}}',
  /** The current value (<code>`{{actualType}}`</code>) */
  'inputs.invalid-value.current-type': 'Поточне значення (<code>{{actualType}}</code>)',
  /** The property value is stored as a value type that does not match the expected type. */
  'inputs.invalid-value.description':
    'Значення властивості зберігається як тип значення, який не відповідає очікуваному типу.',
  /** The value of this property must be of type <code>`{{validType}}`</code> according to the schema. */
  'inputs.invalid-value.details.description':
    'Значення цієї властивості має бути типу <code>{{validType}}</code> згідно зі схемою.',
  /** Only the following types are valid here according to schema: */
  'inputs.invalid-value.details.multi-type-description':
    'Тільки наступні типи є дійсними тут згідно зі схемою:',
  /** Mismatching value types typically occur when the schema has recently been changed. */
  'inputs.invalid-value.details.possible-reason':
    'Невідповідність типів значень зазвичай виникає, коли схема нещодавно була змінена.',
  /** Developer info */
  'inputs.invalid-value.details.title': 'Інформація для розробників',
  /** -- Invalid Value Input -- */
  /** Reset value */
  'inputs.invalid-value.reset-button.text': 'Скинути значення',
  /** Invalid property value */
  'inputs.invalid-value.title': 'Недійсне значення властивості',
  /** Field groups */
  'inputs.object.field-group-tabs.aria-label': 'Групи полів',
  /** Read-only field description */
  'inputs.object.unknown-fields.read-only.description':
    'Це поле є <strong>тільки для читання</strong> згідно зі схемою документа і не може бути видалене. Якщо ви хочете мати можливість видалити це в Studio, переконайтеся, що ви видалили поле <code>readOnly</code> з охоплюючого типу в схемі.',
  /** Remove field */
  'inputs.object.unknown-fields.remove-field-button.text': 'Видалити поле',
  /** Encountered `{{count}}` fields that are not defined in the schema. */
  'inputs.object.unknown-fields.warning.description_one':
    'Зустрічено поле, яке не визначено в схемі.',
  /** Detailed description of unknown field warning */
  'inputs.object.unknown-fields.warning.details.description_one':
    'Це поле не визначено в схемі, що може означати, що визначення поля було видалено або хтось інший додав його до свого локального проекту і ще не розгорнув свої зміни.',
  /** Developer info */
  'inputs.object.unknown-fields.warning.details.title': 'Інформація для розробників',
  /** Unknown field found */
  'inputs.object.unknown-fields.warning.title_one': 'Знайдено невідоме поле',
  /** Collapse the editor to save screen space  */
  'inputs.portable-text.action.collapse-editor': 'Згорнути редактор',
  /** Aria label for action to edit an existing annotation */
  'inputs.portable-text.action.edit-annotation-aria-label': 'Редагувати анотацію',
  /** Expand the editor to give more editing space */
  'inputs.portable-text.action.expand-editor': 'Розгорнути редактор',
  /** Label label for action to insert a block of a given type (`{{typeName}}`) */
  'inputs.portable-text.action.insert-block': 'Вставити {{typeName}}',
  /** Accessibility label for action to insert a block of a given type (`{{typeName}}`) */
  'inputs.portable-text.action.insert-block-aria-label': 'Вставити {{typeName}} (блок)',
  /** Label for action to insert an inline object of a given type (`{{typeName}}`) */
  'inputs.portable-text.action.insert-inline-object': 'Вставити {{typeName}}',
  /** Accessibility label for action to insert an inline object of a given type (`{{typeName}}`) */
  'inputs.portable-text.action.insert-inline-object-aria-label':
    'Вставити {{typeName}} (вбудований)',
  /** Aria label for action to remove an annotation */
  'inputs.portable-text.action.remove-annotation-aria-label': 'Видалити анотацію',
  /** Label for activate on focus with context of click and not focused */
  'inputs.portable-text.activate-on-focus-message_click': 'Клікніть, щоб активувати',
  /** Label for activate on focus with context of click and focused */
  'inputs.portable-text.activate-on-focus-message_click-focused':
    'Клікніть або натисніть пробіл, щоб активувати',
  /** Label for activate on focus with context of tap and not focused */
  'inputs.portable-text.activate-on-focus-message_tap': 'Торкніться, щоб активувати',
  /**Aria label for the annotation object */
  'inputs.portable-text.annotation-aria-label': "Об'єкт анотації",
  /** Title for dialog that allows editing an annotation */
  'inputs.portable-text.annotation-editor.title': 'Редагувати {{schemaType}}',
  /** Title of the default "link" annotation */
  'inputs.portable-text.annotation.link': 'Посилання',
  /**Aria label for the block object */
  'inputs.portable-text.block.aria-label': "Об'єкт блоку",
  /** Label for action to edit a block item, in the case where it is editable */
  'inputs.portable-text.block.edit': 'Редагувати',
  /** Accessibility label for the button that opens the actions menu on blocks */
  'inputs.portable-text.block.open-menu-aria-label': 'Відкрити меню',
  /** Label for action to open a reference, in the case of block-level reference types */
  'inputs.portable-text.block.open-reference': 'Відкрити посилання',
  /** Label for action to remove a block item */
  'inputs.portable-text.block.remove': 'Видалити',
  /** Label for action to view a block item, in the case where it is read-only and thus cannot be edited */
  'inputs.portable-text.block.view': 'Переглянути',
  /** Title of the "code" decorator */
  'inputs.portable-text.decorator.code': 'Код',
  /** Title of the "em" (emphasis) decorator */
  'inputs.portable-text.decorator.emphasis': 'Курсив',
  /** Title of the "strike-through" decorator */
  'inputs.portable-text.decorator.strike-through': 'Закреслення',
  /** Title of the "strong" decorator */
  'inputs.portable-text.decorator.strong': 'Напівжирний',
  /** Title of the "underline" decorator */
  'inputs.portable-text.decorator.underline': 'Підкреслення',
  /** Placeholder text for when the editor is empty */
  'inputs.portable-text.empty-placeholder': 'Порожньо',
  /**Aria label for the block object */
  'inputs.portable-text.inline-block.aria-label': "Вбудований об'єкт",
  /** Label for action to edit an inline object item */
  'inputs.portable-text.inline-object.edit': "Редагувати об'єкт",
  /** Aria label for icon for action to edit an inline object item */
  'inputs.portable-text.inline-object.edit-aria-label': "Редагувати об'єкт",
  /** Label for action to remove an inline object item */
  'inputs.portable-text.inline-object.remove': "Видалити об'єкт",
  /** Aria label for icon for action to remove an inline object item */
  'inputs.portable-text.inline-object.remove-aria-label': "Видалити об'єкт",
  /** Disclaimer text shown on invalid Portable Text value, when an action is available to unblock the user, but it is not guaranteed to be safe */
  'inputs.portable-text.invalid-value.action-disclaimer':
    "УВАГА: Зазвичай дія вище є безпечною, але якщо ви сумніваєтеся, зв'яжіться з відповідальними за налаштування вашої студії.",
  /** Action presented when the Portable Text field value is invalid, when block with key `{{key}}` has a child with key `{{childKey}}` of type `{{childType}}` which is not allowed by the schema definition */
  'inputs.portable-text.invalid-value.disallowed-child-type.action': "Видалити об'єкт",
  /** Text explaining that the Portable Text field value is invalid, when block with key `{{key}}` has a child with key `{{childKey}}` of type `{{childType}}` which is not allowed by the schema definition */
  'inputs.portable-text.invalid-value.disallowed-child-type.description':
    'Дочірній елемент з ключем {{childKey}} блоку з ключем <code>{{key}}</code> має тип <code>{{childType}}</code>, який не дозволений визначенням схеми.',
  /** Action presented when the Portable Text field value is invalid, when child with key `{{key}}` has a type (`{{typeName}}`) that is not an allowed block type for this field */
  'inputs.portable-text.invalid-value.disallowed-type.action': 'Видалити блок',
  /** Text explaining that the Portable Text field value is invalid, when child with key `{{key}}` has a type (`{{typeName}}`) that is not an allowed block type for this field */
  'inputs.portable-text.invalid-value.disallowed-type.description':
    'Блок з ключем <code>{{key}}</code> має тип <code>{{typeName}}</code>, який не дозволений визначенням схеми.',
  /** Action presented when the Portable Text field value is invalid, when block with key `{{key}}` contains no children */
  'inputs.portable-text.invalid-value.empty-children.action': 'Вставити порожній текстовий спан',
  /** Text explaining that the Portable Text field value is invalid, when block with key `{{key}}` contains no children */
  'inputs.portable-text.invalid-value.empty-children.description':
    'Текстовий блок з ключем <code>{{key}}</code> не має текстових спанів.',
  /** Label for the button to ignore invalid values in the Portable Text editor */
  'inputs.portable-text.invalid-value.ignore-button.text': 'Ігнорувати',
  /** Action presented when the Portable Text field value is invalid, when child with key `{{key}}` has a `_type` property that is set to `block`, but the block type defined in schema has a different name (`{{expectedTypeName}}`) */
  'inputs.portable-text.invalid-value.incorrect-block-type.action':
    'Використовувати тип <code>{{expectedTypeName}}</code>',
  /** Text explaining that the Portable Text field value is invalid, when child with key `{{key}}` has a `_type` property that is set to `block`, but the block type defined in schema has a different name (`{{expectedTypeName}}`) */
  'inputs.portable-text.invalid-value.incorrect-block-type.description':
    'Блок з ключем <code>{{key}}</code> має неправильну назву типу. Згідно зі схемою, вона повинна бути <code>{{expectedTypeName}}</code>.',
  /** Action presented when the Portable Text field value is invalid, when block with key `{{key}}` has a span with key `{{childKey}}` that has a missing or invalid `text` property */
  'inputs.portable-text.invalid-value.invalid-span-text.action':
    'Встановити порожнє значення тексту',
  /** Text explaining that the Portable Text field value is invalid, when block with key `{{key}}` has a span with key `{{childKey}}` that has a missing or invalid `text` property */
  'inputs.portable-text.invalid-value.invalid-span-text.description':
    'Спан з ключем {{childKey}} блоку з ключем <code>{{key}}</code> має відсутнє або неправильне значення властивості <code>text</code>.',
  /** Action presented when the Portable Text field value is invalid, when child with key `{{key}}` is missing a `_type` property, but seems to be a block of type `{{expectedTypeName}}` */
  'inputs.portable-text.invalid-value.missing-block-type.action':
    'Використовувати тип <code>{{expectedTypeName}}</code>',
  /** Text explaining that the Portable Text field value is invalid, when child with key `{{key}}` is missing a `_type` property, but seems to be a block of type `{{expectedTypeName}}` */
  'inputs.portable-text.invalid-value.missing-block-type.description':
    'Блок з ключем <code>{{key}}</code> не має назви типу. Згідно зі схемою, вона повинна бути <code>{{expectedTypeName}}</code>.',
  /** Action presented when the Portable Text field value is invalid, when block with key `{{key}}` has a child at `{{index}}` which is missing `_key` property */
  'inputs.portable-text.invalid-value.missing-child-key.action': 'Присвоїти випадковий ключ',
  /** Text explaining that the Portable Text field value is invalid, when block with key `{{key}}` has a child at `{{index}}` which is missing `_key` property */
  'inputs.portable-text.invalid-value.missing-child-key.description':
    'Дочірній елемент на позиції <code>{{index}}</code> блоку з ключем <code>{{key}}</code> не має властивості <code>_key</code>.',
  /** Action presented when the Portable Text field value is invalid, when block with key `{{key}}` has a child with key `{{childKey}}` which is missing a `_type` property */
  'inputs.portable-text.invalid-value.missing-child-type.action': "Видалити об'єкт",
  /** Text explaining that the Portable Text field value is invalid, when block with key `{{key}}` has a child with key `{{childKey}}` which is missing a `_type` property */
  'inputs.portable-text.invalid-value.missing-child-type.description':
    'Дочірній елемент з ключем {{childKey}} блоку з ключем <code>{{key}}</code> не має властивості <code>_type</code>.',
  /** Action presented when the Portable Text field value is invalid, when child at `{{index}}` is missing the required `_key` property */
  'inputs.portable-text.invalid-value.missing-key.action': 'Присвоїти випадковий ключ',
  /** Text explaining that the Portable Text field value is invalid, when child at `{{index}}` is missing the required `_key` property */
  'inputs.portable-text.invalid-value.missing-key.description':
    'Блок на позиції <code>{{index}}</code> не має необхідної властивості <code>_key</code>.',
  /** Action presented when the Portable Text field value is invalid, when child with key `{{key}}` has a missing or invalid `children` property */
  'inputs.portable-text.invalid-value.missing-or-invalid-children.action': 'Видалити блок',
  /** Text explaining that the Portable Text field value is invalid, when child with key `{{key}}` has a missing or invalid `children` property */
  'inputs.portable-text.invalid-value.missing-or-invalid-children.description':
    'Текстовий блок з ключем <code>{{key}}</code> має неправильну або відсутню властивість `children`.',
  /** Action presented when the Portable Text field value is invalid, when child with key `{{key}}` has a missing or invalid `markDefs` property */
  'inputs.portable-text.invalid-value.missing-or-invalid-markdefs.action': 'Додати властивість',
  /** Text explaining that the Portable Text field value is invalid, when child with key `{{key}}` has a missing or invalid `markDefs` property */
  'inputs.portable-text.invalid-value.missing-or-invalid-markdefs.description':
    'Текстовий блок з ключем <code>{{key}}</code> має неправильну або відсутню властивість `markDefs`.',
  /** Action presented when the Portable Text field value is invalid, when child with key `{{key}}` is missing a `_type` property  */
  'inputs.portable-text.invalid-value.missing-type.action': 'Видалити блок',
  /** Text explaining that the Portable Text field value is invalid, when child with key `{{key}}` is missing a `_type` property  */
  'inputs.portable-text.invalid-value.missing-type.description':
    'Блок з ключем <code>{{key}}</code> не має назви типу.',
  /** Action presented when the Portable Text field value is invalid, when block with key `{{key}}` contains a non-object child at index `{{index}}` */
  'inputs.portable-text.invalid-value.non-object-child.action': 'Видалити елемент',
  /** Text explaining that the Portable Text field value is invalid, when block with key `{{key}}` contains a non-object child at index `{{index}}` */
  'inputs.portable-text.invalid-value.non-object-child.description':
    "Дочірній елемент за індексом <code>{{index}}</code> блоку з ключем <code>{{key}}</code> не є об'єктом.",
  /** Action presented when the Portable Text field value is invalid, when the Portable Text field is not an array, or the array is empty */
  'inputs.portable-text.invalid-value.not-an-array.action': 'Скинути значення',
  /** Text explaining that the Portable Text field value is invalid, when the Portable Text field is not an array, or the array is empty */
  'inputs.portable-text.invalid-value.not-an-array.description':
    'Значення має бути масивом блоків Portable Text або не визначеним.',
  /** Action presented when the Portable Text field value is invalid, when child at `{{index}}` is not an object */
  'inputs.portable-text.invalid-value.not-an-object.action': 'Видалити елемент',
  /** Text explaining that the Portable Text field value is invalid, when child at `{{index}}` is not an object */
  'inputs.portable-text.invalid-value.not-an-object.description':
    "Елемент за <code>{{index}}</code> не є об'єктом.",
  /** Action presented when the Portable Text field value is invalid, when block with key `{{key}}` contains marks (`{{orphanedMarks}}`) that are not supported by the current schema */
  'inputs.portable-text.invalid-value.orphaned-marks.action': 'Видалити недозволені маркування',
  /** Text explaining that the Portable Text field value is invalid, when block with key `{{key}}` contains marks (`{{orphanedMarks}}`) that are not supported by the current schema */
  'inputs.portable-text.invalid-value.orphaned-marks.description':
    'Текстовий блок з ключем <code>{{key}}</code> містить маркування <code>({{orphanedMarks, list}})</code>, які не дозволені схемою.',
  /** Title for the alert indicating that the Portable Text field has an invalid value */
  'inputs.portable-text.invalid-value.title': 'Недійсне значення Portable Text',
  /** Title of "bulleted" list type */
  'inputs.portable-text.list-type.bullet': 'Маркований список',
  /** Title of numbered list type */
  'inputs.portable-text.list-type.number': 'Нумерований список',
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
  'inputs.portable-text.style.multiple': 'Декілька',
  /** Title of fallback when no style is given for a block */
  'inputs.portable-text.style.none': 'Без стилю',
  /** Title of the "normal" block style */
  'inputs.portable-text.style.normal': 'Звичайний',
  /** Title of the "quote" block style */
  'inputs.portable-text.style.quote': 'Цитата',
  /** Label for action to clear the current value of the reference field */
  'inputs.reference.action.clear': 'Очистити',
  /** Label for action to create a new document from the reference input */
  'inputs.reference.action.create-new-document': 'Створити',
  /** Label for action to create a new document from the reference input, when there are multiple templates or document types to choose from */
  'inputs.reference.action.create-new-document-select': 'Створити…',
  /** Label for action to duplicate the current item to a new item (used within arrays) */
  'inputs.reference.action.duplicate': 'Дублювати',
  /** Label for action that opens the referenced document in a new tab */
  'inputs.reference.action.open-in-new-tab': 'Відкрити у новій вкладці',
  /** Label for action to remove the reference from an array */
  'inputs.reference.action.remove': 'Видалити',
  /** Label for action to replace the current value of the field */
  'inputs.reference.action.replace': 'Замінити',
  /** Label for action to cancel a previously initiated replace action  */
  'inputs.reference.action.replace-cancel': 'Скасувати заміну',
  /** The cross-dataset reference field currently has a reference, but the feature has been disabled since it was created. This explains what can/cannot be done in its current state. */
  'inputs.reference.cross-dataset.feature-disabled-actions':
    'Ви все ще можете очистити існуюче посилання цього поля, але ви не можете змінити його на інший документ, поки функція вимкнена.',
  /** A cross-dataset reference field exists but the feature has been disabled. A <DocumentationLink> component is available. */
  'inputs.reference.cross-dataset.feature-disabled-description':
    'Ця функція була вимкнена. Прочитайте, як її увімкнути, у <DocumentationLink>документації</DocumentationLink>.',
  /** Title for a warning telling the user that the current project does not have the "cross dataset references" feature */
  'inputs.reference.cross-dataset.feature-unavailable-title':
    'Недоступна функція: Посилання між наборами даних',
  /** The cross-dataset reference points to a document with an invalid type  */
  'inputs.reference.cross-dataset.invalid-type':
    'Посиланий документ має недійсний тип ({{typeName}}) <JsonValue/>',
  /** The referenced document will open in a new tab (due to external studio) */
  'inputs.reference.document-opens-in-new-tab': 'Цей документ відкриється у новій вкладці',
  /** Error title for when the document is unavailable (for any possible reason) */
  'inputs.reference.error.document-unavailable-title': 'Документ недоступний',
  /** Error title for when the referenced document failed to be loaded */
  'inputs.reference.error.failed-to-load-document-title':
    'Не вдалося завантажити посиланий документ',
  /** Error title for when the reference search returned a document that is not an allowed type for the field */
  'inputs.reference.error.invalid-search-result-type-title':
    'Пошук повернув тип, який не є дійсним для цього посилання: "{{returnedType}}"',
  /** Error description for when the document referenced is not one of the types declared as allowed target types in schema */
  'inputs.reference.error.invalid-type-description':
    'Посиланий документ (<code>{{documentId}}</code>) є типу <code>{{actualType}}</code>. Згідно зі схемою, посилані документи можуть бути лише типу <AllowedTypes />.',
  /** Error title for when the document referenced is not one of the types declared as allowed target types in schema */
  'inputs.reference.error.invalid-type-title': 'Документ недійсного типу',
  /** Error description for when the user does not have permissions to read the referenced document */
  'inputs.reference.error.missing-read-permissions-description':
    'Посиланий документ не може бути доступний через недостатні права',
  /** Error title for when the user does not have permissions to read the referenced document */
  'inputs.reference.error.missing-read-permissions-title': 'Недостатньо прав',
  /** Error description for when the current reference value points to a document that does not exist (on weak references) */
  'inputs.reference.error.nonexistent-document-description':
    'Посиланий документ не існує (ID: <code>{{documentId}}</code>). Ви можете або видалити посилання, або замінити його іншим документом.',
  /** Error title for when the current reference value points to a document that does not exist (on weak references) */
  'inputs.reference.error.nonexistent-document-title': 'Не знайдено',
  /** Label for button that clears the reference when it points to a document that does not exist (on weak references) */
  'inputs.reference.error.nonexistent-document.clear-button-label': 'Очистити',
  /** Error title for when the search for a reference failed. Note that the message sent by the backend may not be localized. */
  'inputs.reference.error.search-failed-title': 'Пошук посилання не вдався',
  /** Alternative text for the image shown in cross-dataset reference input */
  'inputs.reference.image-preview-alt-text': 'Попередній перегляд зображення посиланого документа',
  /** Description for alert shown when a reference in a live-edit document is marked as being weak, the referenced document exists, AND the reference is supposed to be have been strengthened on publish */
  'inputs.reference.incomplete-reference.finalize-action-description':
    '<strong>{{referencedDocument}}</strong> опубліковано і це посилання тепер має бути остаточно завершено.',
  /** Title for alert shown when a reference in a live-edit document is marked as being weak, the referenced document exists, AND the reference is supposed to be have been strengthened on publish */
  'inputs.reference.incomplete-reference.finalize-action-title': 'Завершити посилання',
  /** Description for alert shown when a reference in a live-edit document points to a document that exists and has been published, but the reference is still marked as weak */
  'inputs.reference.incomplete-reference.strengthen-action-description':
    '<strong>{{referencedDocument}}</strong> опубліковано і це посилання тепер має бути перетворено на сильне посилання.',
  /** Title for alert shown when a reference in a live-edit document points to a document that exists and has been published, but the reference is still marked as weak */
  'inputs.reference.incomplete-reference.strengthen-action-title':
    'Перетворити на сильне посилання',
  /** Label for button that triggers the action that strengthen a reference */
  'inputs.reference.incomplete-reference.strengthen-button-label': 'Перетворити на міцне посилання',
  /** Label for button that triggers a retry attempt for reference metadata  */
  'inputs.reference.metadata-error.retry-button-label': 'Повторити спробу',
  /** Title for alert shown when reference metadata fails to be loaded */
  'inputs.reference.metadata-error.title': 'Не вдалося завантажити метадані посилання',
  /** Message shown when no documents were found that matched the given search string */
  'inputs.reference.no-results-for-query':
    'Немає результатів для <strong>“{{searchTerm}}”</strong>',
  /** Text for tooltip showing when a document was edited, using relative time (eg "how long ago was it edited?") */
  'inputs.reference.preview.edited-at-time': 'Відредаговано <RelativeTime/>',
  /** Accessibility label for icon indicating that document does _not_ have any unpublished changes */
  'inputs.reference.preview.has-no-unpublished-changes-aria-label':
    'Немає неопублікованих редагувань',
  /** Accessibility label for icon indicating that document has unpublished changes */
  'inputs.reference.preview.has-unpublished-changes-aria-label': 'Відредаговано',
  /** Accessibility label for icon indicating that document does _not_ have a published version */
  'inputs.reference.preview.is-not-published-aria-label': 'Не опубліковано',
  /** Accessibility label for icon indicating that document has a published version */
  'inputs.reference.preview.is-published-aria-label': 'Опубліковано',
  /** Text for tooltip indicating that a document has no unpublished edits */
  'inputs.reference.preview.no-unpublished-edits': 'Немає неопублікованих редагувань',
  /** Text for tooltip indicating that a document has not yet been published */
  'inputs.reference.preview.not-published': 'Не опубліковано',
  /** Text for tooltip showing when a document was published, using relative time (eg "how long ago was it published?") */
  'inputs.reference.preview.published-at-time': 'Опубліковано <RelativeTime/>',
  /** The referenced document no longer exist and might have been deleted (for weak references) */
  'inputs.reference.referenced-document-does-not-exist':
    'Документ, на який було посилання, більше не існує і міг бути видалений (ID документа: <code>{{documentId}}</code>).',
  /** The referenced document could not be displayed to the user because of insufficient permissions */
  'inputs.reference.referenced-document-insufficient-permissions':
    'Доступ до документа, на який було посилання, неможливий через недостатні права',
  /** Label for when the reference input is resolving the initial value for an item */
  'inputs.reference.resolving-initial-value': 'Визначення початкового значення…',
  /** Placeholder shown in a reference input with no current value */
  'inputs.reference.search-placeholder': 'Почніть вводити для пошуку',
  /** Explanation of the consequences of leaving the reference as strong instead of weak */
  'inputs.reference.strength-mismatch.is-strong-consquences':
    'Буде неможливо видалити документ, на який є посилання, без попереднього видалення цього посилання або перетворення його на слабке.',
  /** Description for alert shown when a reference is supposed to be weak, but the actual value is strong */
  'inputs.reference.strength-mismatch.is-strong-description':
    'Це посилання є <em>міцним</em>, але згідно з поточною схемою воно повинно бути <em>слабким</em>.',
  /** Explanation of the consequences of leaving the reference as weak instead of strong */
  'inputs.reference.strength-mismatch.is-weak-consquences':
    'Це дозволяє видалити документ, на який є посилання, без попереднього видалення цього посилання, залишаючи це поле з посиланням на неіснуючий документ.',
  /** Description for alert shown when a reference is supposed to be strong, but the actual value is weak */
  'inputs.reference.strength-mismatch.is-weak-description':
    'Це посилання є <em>слабким</em>, але згідно з поточною схемою воно повинно бути <em>міцним</em>.',
  /** Label for button that triggers the action that strengthens a reference on strength mismatch */
  'inputs.reference.strength-mismatch.strengthen-button-label': 'Перетворити на міцне посилання',
  /** Title for alert shown when a reference is supposed to be weak/strong, but the actual value is the opposite of what it is supposed to be */
  'inputs.reference.strength-mismatch.title': 'Невідповідність міцності посилання',
  /** Label for button that triggers the action that weakens a reference on strength mismatch */
  'inputs.reference.strength-mismatch.weaken-button-label': 'Перетворити на слабке посилання',
  /** Action message for generating the slug */
  'inputs.slug.action.generate': 'Згенерувати',
  /** Loading message for when the input is actively generating a slug */
  'inputs.slug.action.generating': 'Генерація…',
  /** Error message for when the source to generate a slug from is missing */
  'inputs.slug.error.missing-source':
    'Джерело відсутнє. Перевірте джерело для типу {{schemaType}} у схемі',
  /** Placeholder for an empty tag input */
  'inputs.tags.placeholder': 'Введіть тег та натисніть ENTER…',
  /** Placeholder for an empty tag input on touch devices */
  'inputs.tags.placeholder_touch': 'Введіть тег…',
  /** Convert to `{{targetType}}` */
  'inputs.untyped-value.convert-button.text': 'Конвертувати в {{targetType}}',
  /** Encountered an object value without a <code>_type</code> property. */
  'inputs.untyped-value.description': "Зустрінуто об'єкт без властивості <code>_type</code>.",
  /** Either remove the <code>name</code> property of the object declaration, or set <code>_type</code> property on items. */
  'inputs.untyped-value.details.description':
    "Або видаліть властивість <code>name</code> з оголошення об'єкта, або встановіть властивість <code>_type</code> для елементів.",
  /** Current value (<code>object</code>): */
  'inputs.untyped-value.details.json-dump-prefix': 'Поточне значення (<code>object</code>):',
  /** The following types are valid here according to schema: */
  'inputs.untyped-value.details.multi-type-description':
    'Згідно зі схемою тут допустимі наступні типи:',
  /** Developer info */
  'inputs.untyped-value.details.title': 'Інформація для розробників',
  /** Property value missing <code>_type</code> */
  'inputs.untyped-value.title': "Властивість об'єкта відсутня <code>_type</code>",
  /** Unset value */
  'inputs.untyped-value.unset-item-button.text': 'Скинути значення',

  /** The fallback explanation if no context is provided */
  'insufficient-permissions-message.not-authorized-explanation':
    'У вас немає дозволу на доступ до цієї функції.',
  /** The explanation when unable to create any document at all */
  'insufficient-permissions-message.not-authorized-explanation_create-any-document':
    'У вас немає дозволу на створення документа.',
  /** The explanation when unable to create a particular document */
  'insufficient-permissions-message.not-authorized-explanation_create-document':
    'У вас немає дозволу на створення цього документа.',
  /** The explanation when unable to create a particular type of document */
  'insufficient-permissions-message.not-authorized-explanation_create-document-type':
    'У вас немає дозволу на створення цього типу документа.',
  /** The explanation when unable to create a new reference in a document */
  'insufficient-permissions-message.not-authorized-explanation_create-new-reference':
    'У вас немає дозволу на створення нового посилання.',
  /** The explanation when unable to delete a particular document */
  'insufficient-permissions-message.not-authorized-explanation_delete-document':
    'У вас немає дозволу на видалення цього документа.',
  /** The explanation when unable to discard changes in a particular document */
  'insufficient-permissions-message.not-authorized-explanation_discard-changes':
    'У вас немає дозволу на скасування змін у цьому документі.',
  /** The explanation when unable to duplicate a particular document */
  'insufficient-permissions-message.not-authorized-explanation_duplicate-document':
    'У вас немає дозволу на дублювання цього документа.',
  /** The explanation when unable to publish a particular document */
  'insufficient-permissions-message.not-authorized-explanation_publish-document':
    'У вас немає дозволу на публікацію цього документа.',
  /** The explanation when unable to unpublish a particular document */
  'insufficient-permissions-message.not-authorized-explanation_unpublish-document':
    'У вас немає дозволу на зняття з публікації цього документа.',
  /** Appears after the not-authorized message. Lists the current roles. */
  'insufficient-permissions-message.roles': 'Ваші ролі: <Roles/>',
  /** The title for the insufficient permissions message component */
  'insufficient-permissions-message.title': 'Недостатньо прав',

  /** Unexpected error: `{{error}}` */
  'member-field-error.unexpected-error': 'Несподівана помилка: {{error}}',

  /** Button label for "Create new document" button */
  'new-document.button': 'Створити',
  /**
   * Tooltip message displayed when hovering/activating the "Create new document" action,
   * when there are templates/types available for creation
   */
  'new-document.create-new-document-label': 'Новий документ…',
  /** Placeholder for the "filter" input within the new document menu */
  'new-document.filter-placeholder': 'Фільтр',
  /** Loading indicator text within the new document menu */
  'new-document.loading': 'Завантаження…',
  /** Accessibility label for the list displaying options in the new document menu */
  'new-document.new-document-aria-label': 'Новий документ',
  /** Message for when there are no document type options in the new document menu */
  'new-document.no-document-types-found': 'Типи документів не знайдено',
  /**
   * Tooltip message displayed when hovering/activating the "Create new document" action,
   * when there are no templates/types to create from
   */
  'new-document.no-document-types-label': 'Немає типів документів',
  /** Message for when no results are found for a specific search query in the new document menu */
  'new-document.no-results': 'Немає результатів для <strong>{{searchQuery}}</strong>',
  /** Aria label for the button that opens the "Create new document" popover/dialog */
  'new-document.open-dialog-aria-label': 'Створити новий документ',
  /** Title for "Create new document" dialog */
  'new-document.title': 'Створити новий документ',

  /** Label for action to manage members of the current studio project */
  'presence.action.manage-members': 'Керування учасниками',
  /** Accessibility label for presence menu button */
  'presence.aria-label': 'Хто тут',
  /** Message description for when no one else is currently present */
  'presence.no-one-else-description': 'Запросіть людей до проекту, щоб бачити їх онлайн-статус.',
  /** Message title for when no one else is currently present */
  'presence.no-one-else-title': 'Тут нікого немає',
  /** Message for when a user is not in a document (displayed in the global presence menu) */
  'presence.not-in-a-document': 'Не в документі',
  /** Tooltip content text for presence menu button */
  'presence.tooltip-content': undefined, // 'Who is here'

  /** Fallback title shown when a preview does not provide a title */
  'preview.default.title-fallback': 'Без назви',
  /** Fallback preview value for types that have "no value" (eg null, undefined) */
  'preview.fallback.no-value': '(немає значення)',
  /** Alternative text for image being shown while image is being uploaded, in previews */
  'preview.image.file-is-being-uploaded.alt-text': 'Зображення, яке зараз завантажується',

  /* Relative time, just now */
  'relative-time.just-now': 'щойно',

  /** Accessibility label to open search action when the search would go fullscreen (eg on narrower screens) */
  'search.action-open-aria-label': 'Відкрити пошук',
  /** Action label for adding a search filter */
  'search.action.add-filter': 'Додати фільтр',
  /** Action label for clearing search filters */
  'search.action.clear-filters': 'Очистити фільтри',
  /** Label for action to clear recent searches */
  'search.action.clear-recent-searches': 'Очистити останні пошуки',
  /** Accessibility label for action to clear all currently applied document type filters */
  'search.action.clear-type-filters-aria-label': 'Очистити вибрані фільтри',
  /** Label for action to clear all currently applied document type filters */
  'search.action.clear-type-filters-label': 'Очистити',
  /** Accessibility label for when the search is full screen (on narrow screens) and you want to close the search */
  'search.action.close-search-aria-label': 'Закрити пошук',
  /** Accessibility label for filtering by document type */
  'search.action.filter-by-document-type-aria-label': 'Фільтрувати за типом документа',
  /** Accessibility action label for removing an already applied search filter */
  'search.action.remove-filter-aria-label': 'Видалити фільтр',
  /**
   * Text displayed when either no document type(s) have been selected, or we need a fallback,
   * eg "Search for all types".
   */
  'search.action.search-all-types': 'Шукати всі документи',
  /**
   * Text displayed when we are able to determine one or more document types that will be used for
   * searching, and can fit within the space assigned by the design.
   */
  'search.action.search-specific-types': 'Шукати {{types, list}}',
  /** Dialog title for action to select an asset of unknown type */
  'search.action.select-asset': 'Вибрати актив',
  /** Dialog title for action to select a file asset */
  'search.action.select-asset_file': 'Вибрати файл',
  /** Dialog title for action to select an image asset */
  'search.action.select-asset_image': 'Вибрати зображення',
  /** Accessibility label for when the search is full screen (on narrow screens) and you want to hide filters */
  'search.action.toggle-filters-aria-label_hide': 'Сховати фільтри',
  /** Accessibility label for when the search is full screen (on narrow screens) and you want to show filters */
  'search.action.toggle-filters-aria-label_show': 'Показати фільтри',
  /** Label for when the search is full screen (on narrow screens) and you want to hide filters */
  'search.action.toggle-filters-label_hide': 'Сховати фільтри',
  /** Label for when the search is full screen (on narrow screens) and you want to show filters */
  'search.action.toggle-filters-label_show': 'Показати фільтри',
  /** Tooltip text for the global search button */
  'search.button.tooltip': 'Пошук',
  /**
   * A list of provided types (use `list` formatter preferably).
   */
  'search.document-type-list': '{{types, list}}',
  /**
   * In the context of a list of document types - no filtering selection has been done,
   * thus the default is "all types".
   */
  'search.document-type-list-all-types': 'Всі типи',
  /** Accessibility label for list displaying the available document types */
  'search.document-types-aria-label': 'Типи документів',
  /** Label for when no document types matching the filter are found */
  'search.document-types-no-matches-found': 'Не знайдено відповідностей для {{filter}}',
  /** Description for error when a filter cannot be displayed, describes that you should check the schema */
  'search.error.display-filter-description':
    'Це може вказувати на невірні параметри, визначені у вашій схемі.',
  /** Title for error when a filter cannot be displayed (mainly a developer-oriented error) */
  'search.error.display-filter-title': 'Під час відображення цього фільтра сталася помилка.',
  /** Description for error when no valid asset source is found, describes that you should check the the current studio config */
  'search.error.no-valid-asset-source-check-config-description':
    'Будь ласка, переконайтеся, що він увімкнений у файлі конфігурації вашої студії.',
  /** Description for error when no valid asset source is found, describes that only the default asset is supported */
  'search.error.no-valid-asset-source-only-default-description':
    'Наразі підтримується лише стандартне джерело активів.',
  /** Title for error when no valid asset sources found */
  'search.error.no-valid-asset-source-title': 'Не знайдено дійсних джерел активів.',
  /** Helpful description for when search returned an error that we are not able to describe in detail */
  'search.error.unspecified-error-help-description':
    "Будь ласка, спробуйте ще раз або перевірте ваше з'єднання",
  /** Title label for when search returned an error that we are not able to describe in detail */
  'search.error.unspecified-error-title': 'Щось пішло не так під час пошуку',
  /**
   * Label for "All fields", a label that appears above the list of available fields when filtering.
   * If one or more document type has been chosen as filter, this label is replaced with a group of
   * fields per selected document type
   */
  'search.filter-all-fields-header': 'Всі поля',
  /** Label for the action of changing from one file to a different file in asset search filter */
  'search.filter-asset-change_file': 'Змінити файл',
  /** Label for the action of changing from one image to a different image in asset search filter */
  'search.filter-asset-change_image': 'Змінити зображення',
  /** Label for the action of clearing the currently selected asset in an image/file filter */
  'search.filter-asset-clear': 'Очистити',
  /** Label for the action of selecting a file in asset search filter */
  'search.filter-asset-select_file': 'Вибрати файл',
  /** Label for the action of selecting an image in asset search filter */
  'search.filter-asset-select_image': 'Вибрати зображення',
  /** Label for boolean filter - false */
  'search.filter-boolean-false': 'Неправда',
  /** Label for boolean filter - true */
  'search.filter-boolean-true': 'Правда',
  /** Accessibility label for list that lets you filter fields by title, when adding a new filter in search */
  'search.filter-by-title-aria-label': 'Фільтрувати за назвою',
  /** Accessibility label for date filter input */
  'search.filter-date-aria-label': 'Дата',
  /** Accessibility label for selecting end date on the date range search filter */
  'search.filter-date-range-end-date-aria-label': 'Дата закінчення',
  /** Accessibility label for selecting start date on the date range search filter */
  'search.filter-date-range-start-date-aria-label': 'Дата початку',
  /**
   * Label for "Days"/"Months"/"Years" when selecting it as unit in "X days ago" search filter.
   * Capitalized, as it would be listed in a dropdown.
   */
  'search.filter-date-unit_days': 'Дні',
  'search.filter-date-unit_months': 'Місяці',
  'search.filter-date-unit_years': 'Роки',
  /** Accessibility label for selecting the unit (day/month/year) when adding "X days ago" search filter */
  'search.filter-date-unit-aria-label': 'Вибрати одиницю',
  /** Accessibility label for the input value (days/months/years) when adding "X days ago" search filter */
  'search.filter-date-value-aria-label': 'Значення одиниці',
  /** Label for "field description" shown in tooltip when navigating list of possible fields to filter */
  'search.filter-field-tooltip-description': 'Опис поля',
  /** Label for "field name" shown in tooltip when navigating list of possible fields to filter */
  'search.filter-field-tooltip-name': 'Назва поля',
  /** Label for "Used in document types", a list of the document types a field appears in. Shown in tooltip when navigating list of possible fields to filter */
  'search.filter-field-tooltip-used-in-document-types': 'Використовується в типах документів',
  /** Label for when no fields/filters are found for the given term */
  'search.filter-no-matches-found': 'Немає відповідностей для {{filter}}',
  /** Placeholder value for maximum numeric value filter */
  'search.filter-number-max-value-placeholder': 'Максимальне значення',
  /** Placeholder value for minimum numeric value filter */
  'search.filter-number-min-value-placeholder': 'Мінімальне значення',
  /** Placeholder value for the number filter */
  'search.filter-number-value-placeholder': 'Значення',
  /** Placeholder for the "Filter" input, when narrowing possible fields/filters */
  'search.filter-placeholder': 'Фільтр',
  /** Label for the action of clearing the currently selected document in a reference filter */
  'search.filter-reference-clear': 'Очистити',
  /**
   * Label for "shared fields", a label that appears above a list of fields that all filtered types
   * have in common, when adding a new filter. For instance, if "book" and "employee" both have a
   * "title" field, this field would be listed under "shared fields".
   * */
  'search.filter-shared-fields-header': 'Спільні поля',
  /** Placeholder value for the string filter */
  'search.filter-string-value-placeholder': 'Значення',
  /** Label/placeholder prompting user to select one of the predefined, allowed values for a string field */
  'search.filter-string-value-select-predefined-value': 'Вибрати…',
  /** Accessibility label for the "Filters" list, that is shown when using "Add filter" in search (singular) */
  'search.filters-aria-label_one': 'Фільтр',
  /** Label for instructions on how to use the search - displayed when no recent searches are available */
  'search.instructions': 'Використовуйте <ControlsIcon/>, щоб уточнити ваш пошук',
  /** Helpful description for when no search results are found */
  'search.no-results-help-description': 'Спробуйте інше ключове слово або налаштуйте ваші фільтри',
  /** Title label for when no search results are found */
  'search.no-results-title': 'Результатів не знайдено',
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
    '<Field/> <Operator>має</Operator> <Value>{{count}} елемент</Value>',
  'search.operator.array-count-equal.name': 'кількість є',
  /* Array should have a count greater than given filter value */
  'search.operator.array-count-gt.description_one':
    '<Field/> <Operator>має ></Operator> <Value>{{count}} елемент</Value>',
  'search.operator.array-count-gt.name': 'кількість більша ніж',
  /* Array should have a count greater than or equal to the given filter value */
  'search.operator.array-count-gte.description_one':
    '<Field/> <Operator>має ≥</Operator> <Value>{{count}} елемент</Value>',
  'search.operator.array-count-gte.name': 'кількість більша або дорівнює',
  /* Array should have a count less than given filter value */
  'search.operator.array-count-lt.description_one':
    '<Field/> <Operator>має <</Operator> <Value>{{count}} елемент</Value>',
  'search.operator.array-count-lt.name': 'кількість менша ніж',
  /* Array should have a count less than or equal to the given filter value */
  'search.operator.array-count-lte.description_one':
    '<Field/> <Operator>має ≤</Operator> <Value>{{count}} елемент</Value>',
  'search.operator.array-count-lte.name': 'кількість менша або дорівнює',
  /* Array should have a count that is not equal to the given filter value */
  'search.operator.array-count-not-equal.description_one':
    '<Field/> <Operator>не має</Operator> <Value>{{count}} елемент</Value>',
  'search.operator.array-count-not-equal.name': 'кількість не є',
  /**
   * Array should have a count within the range of given filter values.
   * Gets passed `{{from}}` and `{{to}}` values.
   **/
  'search.operator.array-count-range.description':
    '<Field/> <Operator>має від</Operator> <Value>{{from}} → {{to}} елементів</Value>',
  'search.operator.array-count-range.name': 'кількість між',
  /* Array should include the given value */
  'search.operator.array-list-includes.description':
    '<Field/> <Operator>включає</Operator> <Value>{{value}}</Value>',
  'search.operator.array-list-includes.name': 'включає',
  /* Array should not include the given value */
  'search.operator.array-list-not-includes.description':
    '<Field/> <Operator>не включає</Operator> <Value>{{value}}</Value>',
  'search.operator.array-list-not-includes.name': 'не включає',
  /* Array should include the given reference */
  'search.operator.array-reference-includes.description':
    '<Field/> <Operator>включає</Operator> <Value>{{value}}</Value>',
  'search.operator.array-reference-includes.name': 'включає',
  /* Array should not include the given reference */
  'search.operator.array-reference-not-includes.description':
    '<Field/> <Operator>не включає</Operator> <Value>{{value}}</Value>',
  'search.operator.array-reference-not-includes.name': 'не включає',
  /* Asset (file) should be the selected asset */
  'search.operator.asset-file-equal.description':
    '<Field/> <Operator>є</Operator> <Value>{{value}}</Value>',
  'search.operator.asset-file-equal.name': 'є',
  /* Asset (file) should not be the selected asset */
  'search.operator.asset-file-not-equal.description':
    '<Field/> <Operator>не є</Operator> <Value>{{value}}</Value>',
  'search.operator.asset-file-not-equal.name': 'не є',
  /* Asset (image) should be the selected asset */
  'search.operator.asset-image-equal.description':
    '<Field/> <Operator>є</Operator> <Value>{{value}}</Value>',
  'search.operator.asset-image-equal.name': 'є',
  /* Asset (image) should not be the selected asset */
  'search.operator.asset-image-not-equal.description':
    '<Field/> <Operator>не є</Operator> <Value>{{value}}</Value>',
  'search.operator.asset-image-not-equal.name': 'не є',
  /**
   * Boolean value should be the given filter value (true/false).
   * Context passed is `true` and `false`, allowing for more specific translations:
   * - `search.operator.boolean-equal.description_true`
   * - `search.operator.boolean-equal.description_false`
   */
  'search.operator.boolean-equal.description':
    '<Field/> <Operator>є</Operator> <Value>{{value}}</Value>',
  'search.operator.boolean-equal.name': 'є',
  /* Date should be after (later than) given filter value */
  'search.operator.date-after.description':
    '<Field/> <Operator>після</Operator> <Value>{{value}}</Value>',
  'search.operator.date-after.name': 'після',
  /* Date should be before (earlier than) given filter value */
  'search.operator.date-before.description':
    '<Field/> <Operator>до</Operator> <Value>{{value}}</Value>',
  'search.operator.date-before.name': 'до',
  /* Date should be the given filter value */
  'search.operator.date-equal.description':
    '<Field/> <Operator>є</Operator> <Value>{{value}}</Value>',
  'search.operator.date-equal.name': 'є',
  /* Date should be within the given filter value range (eg "within the last X days") */
  'search.operator.date-last.description':
    '<Field/> <Operator>в останні</Operator> <Value>{{value}}</Value>',
  'search.operator.date-last.name': 'останні',
  /* Date should not be the given filter value */
  'search.operator.date-not-equal.description':
    '<Field/> <Operator>не є</Operator> <Value>{{value}}</Value>',
  'search.operator.date-not-equal.name': 'не є',
  /* Date should be within the range of given filter values */
  'search.operator.date-range.description': '<Field/> <Operator>між</Operator> <Value/>',
  'search.operator.date-range.name': 'між',
  /* Date and time should be after (later than) given filter value */
  'search.operator.date-time-after.description':
    '<Field/> <Operator>після</Operator> <Value>{{value}}</Value>',
  'search.operator.date-time-after.name': 'після',
  /* Date and time should be before (earlier than) given filter value */
  'search.operator.date-time-before.description':
    '<Field/> <Operator>до</Operator> <Value>{{value}}</Value>',
  'search.operator.date-time-before.name': 'до',
  /* Date and time should be the given filter value */
  'search.operator.date-time-equal.description':
    '<Field/> <Operator>є</Operator> <Value>{{value}}</Value>',
  'search.operator.date-time-equal.name': 'є',
  /* Date and time should be within the given filter value range (eg "within the last X days") */
  'search.operator.date-time-last.description':
    '<Field/> <Operator>в останні</Operator> <Value>{{value}}</Value>',
  'search.operator.date-time-last.name': 'останні',
  /* Date and time should not be the given filter value */
  'search.operator.date-time-not-equal.description':
    '<Field/> <Operator>не є</Operator> <Value>{{value}}</Value>',
  'search.operator.date-time-not-equal.name': 'не є',
  /* Date and time should be within the range of given filter values */
  'search.operator.date-time-range.description': '<Field/> <Operator>між</Operator> <Value/>',
  'search.operator.date-time-range.name': 'між',
  /* Value should be defined */
  'search.operator.defined.description':
    '<Field/> <Operator>є</Operator> <Value>не порожнім</Value>',
  'search.operator.defined.name': 'не порожній',
  /* Value should not be defined */
  'search.operator.not-defined.description':
    '<Field/> <Operator>є</Operator> <Value>порожнім</Value>',
  'search.operator.not-defined.name': 'порожній',
  /* Number should be the given filter value */
  'search.operator.number-equal.description':
    '<Field/> <Operator>є</Operator> <Value>{{value}}</Value>',
  'search.operator.number-equal.name': 'є',
  /* Number should be greater than given filter value */
  'search.operator.number-gt.description':
    '<Field/> <Operator>></Operator> <Value>{{value}}</Value>',
  'search.operator.number-gt.name': 'більше ніж',
  /* Number should be greater than or the given filter value */
  'search.operator.number-gte.description':
    '<Field/> <Operator>≥</Operator> <Value>{{value}}</Value>',
  'search.operator.number-gte.name': 'більше ніж або дорівнює',
  /* Number should be less than given filter value */
  'search.operator.number-lt.description':
    '<Field/> <Operator><</Operator> <Value>{{value}}</Value>',
  'search.operator.number-lt.name': 'менше ніж',
  /* Number should be less than or the given filter value */
  'search.operator.number-lte.description':
    '<Field/> <Operator>≤</Operator> <Value>{{value}}</Value>',
  'search.operator.number-lte.name': 'менше або дорівнює',
  /* Number should not be the given filter value */
  'search.operator.number-not-equal.description':
    '<Field/> <Operator>не є</Operator> <Value>{{value}}</Value>',
  'search.operator.number-not-equal.name': 'не є',
  /* Number should be within the range of given filter values */
  'search.operator.number-range.description':
    '<Field/> <Operator>знаходиться між</Operator> <Value>{{from}} → {{to}}</Value>',
  'search.operator.number-range.name': 'знаходиться між',
  /* Portable Text should contain the given filter value */
  'search.operator.portable-text-contains.description':
    '<Field/> <Operator>містить</Operator> <Value>{{value}}</Value>',
  'search.operator.portable-text-contains.name': 'містить',
  /* Portable Text should be the given filter value */
  'search.operator.portable-text-equal.description':
    '<Field/> <Operator>є</Operator> <Value>{{value}}</Value>',
  'search.operator.portable-text-equal.name': 'є',
  /* Portable Text should not contain the given filter value */
  'search.operator.portable-text-not-contains.description':
    '<Field/> <Operator>не містить</Operator> <Value>{{value}}</Value>',
  'search.operator.portable-text-not-contains.name': 'не містить',
  /* Portable Text should not be the given filter value */
  'search.operator.portable-text-not-equal.description':
    '<Field/> <Operator>не є</Operator> <Value>{{value}}</Value>',
  'search.operator.portable-text-not-equal.name': 'не є',
  /* References the given asset (file) */
  'search.operator.reference-asset-file.description':
    '<Field/> <Operator>→</Operator> <Value>{{value}}</Value>',
  'search.operator.reference-asset-file.name': 'файл',
  /* References the given asset (image) */
  'search.operator.reference-asset-image.description':
    '<Field/> <Operator>→</Operator> <Value>{{value}}</Value>',
  'search.operator.reference-asset-image.name': 'зображення',
  /* References the given document */
  'search.operator.reference-document.description':
    '<Field/> <Operator>→</Operator> <Value>{{value}}</Value>',
  'search.operator.reference-document.name': 'документ',
  /* Reference should be the given document */
  'search.operator.reference-equal.description':
    '<Field/> <Operator>є</Operator> <Value>{{value}}</Value>',
  'search.operator.reference-equal.name': 'є',
  /* Reference should not be the given document */
  'search.operator.reference-not-equal.description':
    '<Field/> <Operator>не є</Operator> <Value>{{value}}</Value>',
  'search.operator.reference-not-equal.name': 'не є',
  /* Slug contains the given value */
  'search.operator.slug-contains.description':
    '<Field/> <Operator>містить</Operator> <Value>{{value}}</Value>',
  'search.operator.slug-contains.name': 'містить',
  /* Slug equals the given filter value */
  'search.operator.slug-equal.description':
    '<Field/> <Operator>є</Operator> <Value>{{value}}</Value>',
  'search.operator.slug-equal.name': 'є',
  /* Slug does not contain the given value */
  'search.operator.slug-not-contains.description':
    '<Field/> <Operator>не містить</Operator> <Value>{{value}}</Value>',
  'search.operator.slug-not-contains.name': 'не містить',
  /* Slug does not equal the given filter value */
  'search.operator.slug-not-equal.description':
    '<Field/> <Operator>не є</Operator> <Value>{{value}}</Value>',
  'search.operator.slug-not-equal.name': 'не є',
  /* String contains the given filter value */
  'search.operator.string-contains.description':
    '<Field/> <Operator>містить</Operator> <Value>{{value}}</Value>',
  'search.operator.string-contains.name': 'містить',
  /* String equals the given filter value */
  'search.operator.string-equal.description':
    '<Field/> <Operator>є</Operator> <Value>{{value}}</Value>',
  'search.operator.string-equal.name': 'є',
  /* String equals one of the predefined allowed values */
  'search.operator.string-list-equal.description':
    '<Field/> <Operator>є</Operator> <Value>{{value}}</Value>',
  'search.operator.string-list-equal.name': 'є',
  /* String does not equal one of the predefined allowed values */
  'search.operator.string-list-not-equal.description':
    '<Field/> <Operator>не є</Operator> <Value>{{value}}</Value>',
  'search.operator.string-list-not-equal.name': 'не є',
  /* String does not contain the given filter value */
  'search.operator.string-not-contains.description':
    '<Field/> <Operator>не містить</Operator> <Value>{{value}}</Value>',
  'search.operator.string-not-contains.name': 'не містить',
  /* String does not equal the given filter value */
  'search.operator.string-not-equal.description':
    '<Field/> <Operator>не є</Operator> <Value>{{value}}</Value>',
  'search.operator.string-not-equal.name': 'не є',
  /** Label for the "Best match" search ordering type */
  'search.ordering.best-match-label': 'Найкраща відповідність',
  /** Label for the "Created: Oldest first" search ordering type */
  'search.ordering.created-ascending-label': 'Створено: спочатку найстаріші',
  /** Label for the "Created: Newest first" search ordering type */
  'search.ordering.created-descending-label': 'Створено: спочатку найновіші',
  /** Label for the "Updated: Oldest first" search ordering type */
  'search.ordering.updated-ascending-label': 'Оновлено: спочатку найстаріші',
  /** Label for the "Updated: Newest first" search ordering type */
  'search.ordering.updated-descending-label': 'Оновлено: спочатку найновіші',
  /** Placeholder text for the global search input field */
  'search.placeholder': 'Пошук',
  /** Accessibility label for the recent searches section, shown when no valid search terms has been given */
  'search.recent-searches-aria-label': 'Останні пошуки',
  /** Label/heading shown for the recent searches section */
  'search.recent-searches-label': 'Останні пошуки',
  /** Accessibility label for the search results section, shown when the user has typed valid terms */
  'search.search-results-aria-label': 'Результати пошуку',

  /** Accessibility label for the navbar status button */
  'status-button.aria-label': undefined, // 'Configuration status'

  /** Description for error when the timeline for the given document can't be loaded */
  'timeline.error.load-document-changes-description':
    'Транзакції історії документів не були змінені.',
  /** Title for error when the timeline for the given document can't be loaded */
  'timeline.error.load-document-changes-title': 'Під час отримання змін документа сталася помилка.',
  /** Error description for when the document doesn't have history */
  'timeline.error.no-document-history-description':
    "Після зміни вмісту документа версії документа з'являться в цьому меню.",
  /** Error title for when the document doesn't have history */
  'timeline.error.no-document-history-title': 'Немає історії документа',
  /** Error prompt when revision cannot be loaded */
  'timeline.error.unable-to-load-revision': 'Неможливо завантажити ревізію',
  /** Label for when the timeline item is the latest in the history */
  'timeline.latest': 'Останні',
  /** Label for latest version for timeline menu dropdown */
  'timeline.latest-version': 'Остання версія',
  /** The aria-label for the list of revisions in the timeline */
  'timeline.list.aria-label': 'Ревізії документа',
  /** Label for loading history */
  'timeline.loading-history': 'Завантаження історії…',
  /** Label shown in review changes timeline when a document has been created */
  'timeline.operation.created': 'Створено',
  /** Label shown in review changes timeline when a document has been created, with a timestamp */
  'timeline.operation.created_timestamp': 'Створено: {{timestamp, datetime}}',
  /** Label shown in review changes timeline when a document was initially created */
  'timeline.operation.created-initial': 'Створено',
  /** Label shown in review changes timeline when a document was initially created, with a timestamp */
  'timeline.operation.created-initial_timestamp': 'Створено: {{timestamp, datetime}}',
  /** Label shown in review changes timeline when a document has been deleted */
  'timeline.operation.deleted': 'Видалено',
  /** Label shown in review changes timeline when a document has been deleted, with a timestamp */
  'timeline.operation.deleted_timestamp': 'Видалено: {{timestamp, datetime}}',
  /** Label shown in review changes timeline when a draft has been discarded */
  'timeline.operation.draft-discarded': 'Чернетку відхилено',
  /** Label shown in review changes timeline when a draft has been discarded, with a timestamp */
  'timeline.operation.draft-discarded_timestamp': 'Чернетку відхилено: {{timestamp, datetime}}',
  /** Label shown in review changes timeline when a draft has been edited */
  'timeline.operation.edited-draft': 'Відредаговано',
  /** Label shown in review changes timeline when a draft has been edited, with a timestamp */
  'timeline.operation.edited-draft_timestamp': 'Відредаговано: {{timestamp, datetime}}',
  /** Label shown in review changes timeline when a document has been edited live */
  'timeline.operation.edited-live': 'Відредаговано наживо',
  /** Label shown in review changes timeline when a document has been edited live, with a timestamp */
  'timeline.operation.edited-live_timestamp': 'Відредаговано наживо: {{timestamp, datetime}}',
  /** Label shown in review changes timeline when a document was published */
  'timeline.operation.published': 'Опубліковано',
  /** Label shown in review changes timeline when a document was published, with a timestamp */
  'timeline.operation.published_timestamp': 'Опубліковано: {{timestamp, datetime}}',
  /** Label shown in review changes timeline when a document was unpublished */
  'timeline.operation.unpublished': 'Неопубліковано',
  /** Label shown in review changes timeline when a document was unpublished, with a timestamp */
  'timeline.operation.unpublished_timestamp': 'Неопубліковано: {{timestamp, datetime}}',
  /**
   * Label for determining since which version the changes for timeline menu dropdown are showing.
   * Receives the time label as a parameter (`timestamp`).
   */
  'timeline.since': 'З: {{timestamp, datetime}}',
  /** Label for missing change version for timeline menu dropdown are showing */
  'timeline.since-version-missing': 'З: невідома версія',

  /**Aria label for the action buttons in the PTE toolbar */
  'toolbar.portable-text.action-button-aria-label': undefined, // '{{action}}'

  /** Label for button showing the free trial days left */
  'user-menu.action.free-trial_one': '{{count}} день залишився у пробному періоді',
  /** Label for the button showed after trial ended */
  'user-menu.action.free-trial-finished': 'Перехід з безкоштовної версії',
  /** Label for action to invite members to the current sanity project */
  'user-menu.action.invite-members': 'Запросити учасників',
  /** Accessibility label for action to invite members to the current sanity project */
  'user-menu.action.invite-members-aria-label': 'Запросити учасників',
  /** Label for action to manage the current sanity project */
  'user-menu.action.manage-project': 'Керувати проектом',
  /** Accessibility label for the action to manage the current project */
  'user-menu.action.manage-project-aria-label': 'Керувати проектом',
  /** Tooltip helper text when portable text annotation is disabled for empty block*/
  'user-menu.action.portable-text.annotation-disabled_empty-block':
    'Неможливо застосувати {{name}} до порожнього блоку',
  /** Tooltip helper text when portable text annotation is disabled for multiple blocks */
  'user-menu.action.portable-text.annotation-disabled_multiple-blocks':
    'Неможливо застосувати {{name}} до декількох блоків',
  /** Label for action to sign out of the current sanity project */
  'user-menu.action.sign-out': 'Вийти',
  /** Title for appearance section for the current studio (dark / light / system scheme) */
  'user-menu.appearance-title': 'Зовнішній вигляд',
  /** Label for close menu button for user menu */
  'user-menu.close-menu': 'Закрити меню',
  /** Description for using the "dark theme" in the appearance user menu */
  'user-menu.color-scheme.dark-description': 'Використовувати темний вигляд',
  /** Title for using the "dark theme" in the appearance user menu */
  'user-menu.color-scheme.dark-title': 'Темна',
  /** Description for using the "light theme" in the appearance user menu */
  'user-menu.color-scheme.light-description': 'Використовувати світлий вигляд',
  /** Title for using the "light theme" in the appearance user menu */
  'user-menu.color-scheme.light-title': 'Світла',
  /** Description for using "system apparence" in the appearance user menu */
  'user-menu.color-scheme.system-description': 'Використовувати системний вигляд',
  /** Title for using system apparence in the appearance user menu */
  'user-menu.color-scheme.system-title': 'Система',
  /** Title for locale section for the current studio */
  'user-menu.locale-title': 'Мова',
  /** Label for tooltip to show which provider the currently logged in user is using */
  'user-menu.login-provider': 'Увійшли через {{providerTitle}}',
  /** Label for open menu button for user menu */
  'user-menu.open-menu': 'Відкрити меню',

  /**
   * Label for action to add a workspace (currently a developer-oriented action, as this will
   * lead to the documentation on workspace configuration)
   */
  'workspaces.action.add-workspace': 'Додати робочий простір',
  /**
   * Label for action to choose a different workspace, in the case where you are not logged in,
   * have selected a workspace, and are faced with the authentication options for the selected
   * workspace. In other words, label for the action shown when you have reconsidered which
   * workspace to authenticate in.
   */
  'workspaces.action.choose-another-workspace': 'Вибрати інший робочий простір',
  /** Label for heading that indicates that you can choose your workspace */
  'workspaces.choose-your-workspace-label': 'Оберіть ваш робочий простір',
  /** Label for the workspace menu */
  'workspaces.select-workspace-aria-label': 'Обрати робочий простір',
  /** Button label for opening the workspace switcher */
  'workspaces.select-workspace-label': 'Обрати робочий простір',
  /** Tooltip for the workspace menu */
  'workspaces.select-workspace-tooltip': 'Вибрати робочий простір',
  /** Title for Workplaces dropdown menu */
  'workspaces.title': 'Робочі простори',
})
