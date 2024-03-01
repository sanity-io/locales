import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Menu item for deleting the asset */
  'asset-source.asset-list.menu.delete': 'Выдаліць',
  /** Menu item for showing where a particular asset is used */
  'asset-source.asset-list.menu.show-usage': 'Паказаць выкарыстанне',
  /** Header in usage dialog for file assets */
  'asset-source.asset-usage-dialog.header_file': 'Дакументы, якія выкарыстоўваюць файл',
  /** Header in usage dialog for image assets */
  'asset-source.asset-usage-dialog.header_image': 'Дакументы, якія выкарыстоўваюць малюнак',
  /** Text shown in usage dialog when loading documents using the selected asset */
  'asset-source.asset-usage-dialog.loading': 'Загрузка…',
  /** Text for cancel action in delete-asset dialog */
  'asset-source.delete-dialog.action.cancel': 'Адмяніць',
  /** Text for "confirm delete" action in delete-asset dialog */
  'asset-source.delete-dialog.action.delete': 'Выдаліць',
  /** Dialog header for delete-asset dialog when deleting a file */
  'asset-source.delete-dialog.header_file': 'Выдаліць файл',
  /** Dialog header for delete-asset dialog when deleting an image */
  'asset-source.delete-dialog.header_image': 'Выдаліць малюнак',
  /** Text shown in delete dialog when loading documents using the selected asset */
  'asset-source.delete-dialog.loading': 'Загрузка…',
  /** Message confirming to delete *named* file */
  'asset-source.delete-dialog.usage-list.confirm-delete-file_named':
    'Вы збіраецеся выдаліць файл <strong>{{filename}}}</strong> і яго метададзеныя. Вы ўпэўнены?',
  /** Message confirming to delete *unnamed* file */
  'asset-source.delete-dialog.usage-list.confirm-delete-file_unnamed':
    'Вы збіраецеся выдаліць файл і яго метададзеныя. Вы ўпэўнены?',
  /** Message confirming to delete *named* image */
  'asset-source.delete-dialog.usage-list.confirm-delete-image_named':
    'Вы збіраецеся выдаліць малюнак <strong>{{filename}}</strong> і яго метададзеныя. Вы ўпэўнены?',
  /** Message confirming to delete *unnamed* image */
  'asset-source.delete-dialog.usage-list.confirm-delete-image_unnamed':
    'Вы збіраецеся выдаліць малюнак і яго метададзеныя. Вы ўпэўнены?',
  /** Alt text showing on image preview in delete asset dialog  */
  'asset-source.delete-dialog.usage-list.image-preview-alt': 'Прадпрагляд малюнка',
  /** Warning message showing when *named* file can't be deleted because it is in use */
  'asset-source.delete-dialog.usage-list.warning-file-is-in-use_named':
    '{{filename}} нельга выдаліць, таму што ён выкарыстоўваецца. Каб выдаліць гэты файл, спачатку вам трэба выдаліць усе яго выкарыстанні.',
  /** Warning message showing when *unnamed* file can't be deleted because it is in use */
  'asset-source.delete-dialog.usage-list.warning-file-is-in-use_unnamed':
    'Гэты файл нельга выдаліць, таму што ён выкарыстоўваецца. Каб выдаліць яго, спачатку вам трэба выдаліць усе яго выкарыстанні.',
  /** Warning message showing when *named* image can't be deleted because it is in use */
  'asset-source.delete-dialog.usage-list.warning-image-is-in-use_named':
    '{{filename}} нельга выдаліць, таму што ён выкарыстоўваецца. Каб выдаліць гэты малюнак, спачатку вам трэба выдаліць усе яго выкарыстанні.',
  /** Warning message showing when *unnamed* image can't be deleted because it is in use */
  'asset-source.delete-dialog.usage-list.warning-image-is-in-use_unnamed':
    'Гэты малюнак нельга выдаліць, таму што ён выкарыстоўваецца. Каб выдаліць яго, спачатку вам трэба выдаліць усе яго выкарыстанні.',
  /** Text shown when the list of assets only include a specific set of types */
  'asset-source.dialog.accept-message':
    'Паказваюцца толькі актывы прынятых тыпаў: <strong>{{acceptTypes}}</strong>',
  /** Keys shared between both image asset source and file asset source */
  /** Select asset dialog title for files */
  'asset-source.dialog.default-title_file': 'Выбраць файл',
  /** Select asset dialog title for images */
  'asset-source.dialog.default-title_image': 'Выбраць малюнак',
  /** Select asset dialog load more items */
  'asset-source.dialog.load-more': 'Загрузіць больш',
  /** Text shown when selecting a file but there's no files to select from */
  'asset-source.dialog.no-assets_file': 'Няма файлаў',
  /** Text shown when selecting an image but there's no images to select from */
  'asset-source.dialog.no-assets_image': 'Няма малюнкаў',
  'asset-source.file.asset-list.action.delete.disabled-cannot-delete-current-file':
    'Немагчыма выдаліць файл, які зараз выбраны',
  'asset-source.file.asset-list.action.delete.text': 'Выдаліць',
  'asset-source.file.asset-list.action.delete.title': 'Выдаліць файл',
  'asset-source.file.asset-list.action.select-file.title': 'Выбраць файл {{filename}}',
  'asset-source.file.asset-list.action.show-usage.title': 'Паказаць выкарыстанне',
  'asset-source.file.asset-list.delete-failed': 'Файл не атрымалася выдаліць',
  'asset-source.file.asset-list.delete-successful': 'Файл быў выдалены',
  'asset-source.file.asset-list.header.date-added': 'Дата дадання',
  /** File asset source */
  'asset-source.file.asset-list.header.filename': 'Імя файла',
  'asset-source.file.asset-list.header.size': 'Памер',
  'asset-source.file.asset-list.header.type': 'Тып',
  /** Text displayed on button or menu invoking the file asset source */
  'asset-source.file.title': 'Загружаныя файлы',
  'asset-source.image.asset-list.delete-failed': 'Малюнак не атрымалася выдаліць',
  /** Image asset source */
  'asset-source.image.asset-list.delete-successful': 'Малюнак быў выдалены',
  /** Text displayed on button or menu invoking the image asset source */
  'asset-source.image.title': 'Загружаныя малюнкі',
  'asset-source.usage-list.documents-using-file_named_one':
    'Адзін дакумент выкарыстоўвае файл <code>{{filename}}</code>',
  /** Text shown in usage dialog for a file asset when there are zero, one or more documents using the *named* file **/
  'asset-source.usage-list.documents-using-file_named_zero':
    'Ні адзін дакумент не выкарыстоўвае файл <code>{{filename}}</code>',
  'asset-source.usage-list.documents-using-file_unnamed_one':
    'Адзін дакумент выкарыстоўвае гэты файл',
  /** Text shown in usage dialog for a file asset when there are zero, one or more documents using the *unnamed* file **/
  'asset-source.usage-list.documents-using-file_unnamed_zero':
    'Ні адзін дакумент не выкарыстоўвае гэты файл',
  'asset-source.usage-list.documents-using-image_named_one':
    'Адзін дакумент выкарыстоўвае малюнак <code>{{filename}}</code>',
  /** Text shown in usage dialog for an image asset when there are zero, one or more documents using the *named* image **/
  'asset-source.usage-list.documents-using-image_named_zero':
    'Ні адзін дакумент не выкарыстоўвае малюнак <code>{{filename}}</code>',
  'asset-source.usage-list.documents-using-image_unnamed_one':
    'Адзін дакумент выкарыстоўвае гэты малюнак',
  /** Text shown in usage dialog for an image asset when there are zero, one or more documents using the *unnamed* image **/
  'asset-source.usage-list.documents-using-image_unnamed_zero':
    'Ні адзін дакумент не выкарыстоўвае гэты малюнак',

  /** Action message for navigating to next month */
  'calendar.action.go-to-next-month': 'Перайсці да наступнага месяца',
  /** Action message for navigating to next year */
  'calendar.action.go-to-next-year': 'Перайсці да наступнага года',
  /** Action message for navigating to previous month */
  'calendar.action.go-to-previous-month': 'Перайсці да папярэдняга месяца',
  /** Action message for navigating to previous year */
  'calendar.action.go-to-previous-year': 'Перайсці да папярэдняга года',
  /* Label for navigating the calendar to "today", without _selecting_ today. Short form, eg `Today`, not `Go to today` */
  'calendar.action.go-to-today': 'Сёння',
  /* Accessibility label for navigating the calendar to "today", without _selecting_ today */
  'calendar.action.go-to-today-aria-label': 'Перайсці да сённяшняга дня',
  /* Label for navigating the calendar to "tomorrow", without _selecting_ tomorrow. Short form, eg `Tomorrow`, not `Go to tomorrow` */
  'calendar.action.go-to-tomorrow': 'Заўтра',
  /* Label for navigating the calendar to "yesterday", without _selecting_ yesterday. Short form, eg `Yesterday`, not `Go to yesterday` */
  'calendar.action.go-to-yesterday': 'Учора',
  /** Label for switch that controls whether or not to include time in given timestamp */
  'calendar.action.include-time-label': 'Уключыць час',
  /** Action message for selecting the hour */
  'calendar.action.select-hour': 'Выбраць гадзіну',
  /** Action message for selecting the minute */
  'calendar.action.select-minute': 'Выбраць хвіліну',
  /** Action message for setting to the current time */
  'calendar.action.set-to-current-time': 'Усталяваць бягучы час',
  /** Label for selecting an hour preset. Receives a `time` param as a string on hh:mm format and a `date` param as a Date instance denoting the preset date */
  'calendar.action.set-to-time-preset': '{{time}} на {{date, datetime}}',
  /** Error message displayed in calendar when entered date is not the correct format */
  'calendar.error.must-be-in-format': 'Павінна быць у фармаце: {{exampleDate}}',
  /** Month name for April */
  'calendar.month-names.april': 'Красавік',
  /** Month name for August */
  'calendar.month-names.august': 'Жнівень',
  /** Month name for December */
  'calendar.month-names.december': 'Снежань',
  /** Month name for February */
  'calendar.month-names.february': 'Люты',
  /** Month name for January */
  'calendar.month-names.january': 'Студзень',
  /** Month name for July */
  'calendar.month-names.july': 'Ліпень',
  /** Month name for June */
  'calendar.month-names.june': 'Чэрвень',
  /** Month name for March */
  'calendar.month-names.march': 'Сакавік',
  /** Month name for May */
  'calendar.month-names.may': 'Травень',
  /** Month name for November */
  'calendar.month-names.november': 'Лістапад',
  /** Month name for October */
  'calendar.month-names.october': 'Кастрычнік',
  /** Month name for September */
  'calendar.month-names.september': 'Верасень',
  /** Short weekday name for Friday */
  'calendar.weekday-names.short.friday': 'Пт',
  /** Short weekday name for Monday */
  'calendar.weekday-names.short.monday': 'Пн',
  /** Short weekday name for Saturdayday */
  'calendar.weekday-names.short.saturday': 'Сб',
  /** Short weekday name for Sunday */
  'calendar.weekday-names.short.sunday': 'Нд',
  /** Short weekday name for Thursday */
  'calendar.weekday-names.short.thursday': 'Чц',
  /** Short weekday name for Tuesday */
  'calendar.weekday-names.short.tuesday': 'Аў',
  /** Short weekday name for Wednesday */
  'calendar.weekday-names.short.wednesday': 'Ср',

  /** Label for the close button label in Review Changes pane */
  'changes.action.close-label': 'Зачыніць прагляд зменаў',
  /** Cancel label for revert button prompt action */
  'changes.action.revert-all-cancel': 'Адмяніць',
  /** Revert all confirm label for revert button action - used on prompt button + review changes pane */
  'changes.action.revert-all-confirm': 'Адкаціць усё',
  /** Prompt for confirming revert change (singular) label for field change action */
  'changes.action.revert-changes-confirm-change_one': 'Адкаціць змену',
  /** Prompt for reverting changes for a field change */
  'changes.action.revert-changes-description': 'Вы ўпэўнены, што хочаце адкаціць змены?',
  /** Prompt for reverting changes for a group change, eg multiple changes */
  'changes.action.revert-changes-description_one': 'Вы ўпэўнены, што хочаце адкаціць змену?',
  /** Label for when the action of the change was to set something that was previously empty, eg a field was given a value, an array item was added, an asset was selected or similar */
  'changes.added-label': 'Дададзена',
  /** Array diff: An item was added in a given position (`{{position}}`) */
  'changes.array.item-added-in-position': 'Дададзена на пазіцыю {{position}}',
  'changes.array.item-moved_down_one': 'Перамешчана на {{count}} пазіцыю ўніз',
  /**
   * Array diff: An item was moved within the array.
   * Receives `{{count}}` representing number of positions it moved.
   * Context is the direction of the move, either `up` or `down`.
   */
  'changes.array.item-moved_up_one': 'Перамешчана на {{count}} пазіцыю ўверх',
  /** Array diff: An item was removed from a given position (`{{position}}`) */
  'changes.array.item-removed-from-position': 'Выдалена з пазіцыі {{position}}',
  /** Accessibility label for the "change bar" shown when there are edits on a field-level */
  'changes.change-bar.aria-label': 'Прагляд зменаў',
  /** Label for when the action of the change was _not_ an add/remove, eg a text field changed value, an image was changed from one asset to another or similar */
  'changes.changed-label': 'Зменена',
  /** Label and text for tooltip that indicates the authors of the changes */
  'changes.changes-by-author': 'Змены аўтара',
  /** Additional text shown in development mode when a diff component crashes during rendering */
  'changes.error-boundary.developer-info':
    'Праверце кансоль распрацоўшчыка для атрымання дадатковай інфармацыі',
  /** Text shown when a diff component crashes during rendering, triggering the error boundary */
  'changes.error-boundary.title': 'Адлюстраванне зменаў у гэтым полі выклікала памылку',
  /** Error message shown when the value of a field is not the expected one */
  'changes.error.incorrect-type-message':
    'Памылка значэння: Значэнне мае тып "<code>{{actualType}}</code>", чакаецца "<code>{{expectedType}}</code>"',
  /** File diff: Fallback title for the meta info section when there is no original filename to use  */
  'changes.file.meta-info-fallback-title': 'Без назвы',
  /** Image diff: Text shown in tooltip when hovering hotspot that has changed in diff view */
  'changes.image.crop-changed': 'Кадраванне зменена',
  /** Image diff: Text shown if the previous image asset was deleted (shouldn't theoretically happen) */
  'changes.image.deleted': 'Выдалены малюнак',
  /** Image diff: Text shown if the image failed to be loaded when previewing it */
  'changes.image.error-loading-image': 'Памылка загрузкі малюнка',
  /** Image diff: Text shown in tooltip when hovering hotspot that has changed in diff view */
  'changes.image.hotspot-changed': 'Гарачая кропка зменена',
  /** Image diff: Fallback title for the meta info section when there is no original filename to use  */
  'changes.image.meta-info-fallback-title': 'Без назвы',
  /** Image diff: Text shown if no asset has been set for the field (but has metadata changes) */
  'changes.image.no-asset-set': 'Малюнак не ўстаноўлены',
  /** Image diff: Text shown when the from/to state has/had no image */
  'changes.image.no-image-placeholder': '(няма малюнка)',
  /** Label for the "from" value in the change inspector */
  'changes.inspector.from-label': 'Ад',
  /** Label for the "meta" (field path, action etc) information in the change inspector */
  'changes.inspector.meta-label': 'Мета',
  /** Label for the "to" value in the change inspector */
  'changes.inspector.to-label': 'Да',
  /** Loading author of change in the differences tooltip in the review changes pane */
  'changes.loading-author': 'Загрузка…',
  /** Loading changes in Review Changes Pane */
  'changes.loading-changes': 'Загрузка зменаў…',
  /** No Changes description in the Review Changes pane */
  'changes.no-changes-description':
    'Рэдагуйце дакумент або выберыце старэйшую версію ў храналогіі, каб убачыць спіс зменаў у гэтай панэлі.',
  /** No Changes title in the Review Changes pane */
  'changes.no-changes-title': 'Зменаў няма',
  /** Portable Text diff: An annotation was added */
  'changes.portable-text.annotation_added': 'Дададзеная анатацыя',
  /** Portable Text diff: An annotation was changed */
  'changes.portable-text.annotation_changed': 'Змененая анатацыя',
  /** Portable Text diff: An annotation was removed */
  'changes.portable-text.annotation_removed': 'Выдаленая анатацыя',
  /** Portable Text diff: An annotation was left unchanged */
  'changes.portable-text.annotation_unchanged': 'Анатацыя без зменаў',
  /** Portable Text diff: A block changed from one style to another (eg `normal` to `h1` or similar) */
  'changes.portable-text.block-style-changed':
    'Зменены стыль блока з "{{fromStyle}}" на "{{toStyle}}"',
  /** Portable Text diff: Change formatting of text (setting/unsetting marks, eg bold/italic etc) */
  'changes.portable-text.changed-formatting': 'Фарматаванне зменена',
  /** Portable Text diff: An empty inline object is part of a change */
  'changes.portable-text.empty-inline-object': 'Пусты {{inlineObjectType}}',
  /** Portable Text diff: An empty object is the result of adding/removing an annotation */
  'changes.portable-text.empty-object-annotation': 'Пустая {{annotationType}}',
  /** Portable Text diff: Added a block containing no text (eg empty block) */
  'changes.portable-text.empty-text_added': 'Дададзены пусты тэкст',
  /** Portable Text diff: Changed a block that contained no text (eg empty block) */
  'changes.portable-text.empty-text_changed': 'Зменены пусты тэкст',
  /** Portable Text diff: Removed a block containing no text (eg empty block) */
  'changes.portable-text.empty-text_removed': 'Выдалены пусты тэкст',
  /** Portable Text diff: An inline object was added */
  'changes.portable-text.inline-object_added': "Дададзены ўбудаваны аб'ект",
  /** Portable Text diff: An inline object was changed */
  'changes.portable-text.inline-object_changed': "Зменены ўбудаваны аб'ект",
  /** Portable Text diff: An inline object was removed */
  'changes.portable-text.inline-object_removed': "Выдалены ўбудаваны аб'ект",
  /** Portable Text diff: An inline object was left unchanged */
  'changes.portable-text.inline-object_unchanged': "Не зменены ўбудаваны аб'ект",
  /** Portable Text diff: Added a chunk of text */
  'changes.portable-text.text_added': 'Дададзены тэкст',
  /** Portable Text diff: Removed a chunk of text */
  'changes.portable-text.text_removed': 'Выдалены тэкст',
  /** Portable Text diff: Annotation has an unknown schema type */
  'changes.portable-text.unknown-annotation-schema-type': 'Невядомы тып схемы анатацыі',
  /** Portable Text diff: Inline object has an unknown schema type */
  'changes.portable-text.unknown-inline-object-schema-type':
    "Невядомы тып схемы ўбудаванага аб'екта",
  /** Label for when the action of the change was a removal, eg a field was cleared, an array item was removed, an asset was deselected or similar */
  'changes.removed-label': 'Выдалена',
  /** Title for the Review Changes pane */
  'changes.title': 'Прагляд зменаў',

  /** --- Common components --- */
  /** Tooltip text for context menu buttons */
  'common.context-menu-button.tooltip': 'Паказаць больш',
  /** Default text for dialog cancel button */
  'common.dialog.cancel-button.text': 'Адмяніць',
  /** Default text for dialog confirm button */
  'common.dialog.confirm-button.text': 'Пацвердзіць',
  /** Default text in shared loader text / spinner lockup */
  'common.loading': 'Загрузка',

  /** --- Configuration issues --- */
  /** Tooltip displayed on configuration issues button */
  'configuration-issues.button.tooltip': 'Знойдзены праблемы канфігурацыі',

  /** The fallback title for an ordering menu item if no localized titles are provided. */
  'default-menu-item.fallback-title': 'Сартаваць па {{title}}',

  /** Title for the default ordering/SortOrder if no orderings are provided and the caption field is found */
  'default-orderings.caption': 'Сартаваць па Подпісу',
  /** Title for the default ordering/SortOrder if no orderings are provided and the description field is found */
  'default-orderings.description': 'Сартаваць па Апісанні',
  /** Title for the default ordering/SortOrder if no orderings are provided and the header field is found */
  'default-orderings.header': 'Сартаваць па Загалоўку',
  /** Title for the default ordering/SortOrder if no orderings are provided and the heading field is found */
  'default-orderings.heading': 'Сартаваць па Загалоўку',
  /** Title for the default ordering/SortOrder if no orderings are provided and the label field is found */
  'default-orderings.label': 'Сартаваць па Ярлыку',
  /** Title for the default ordering/SortOrder if no orderings are provided and the name field is found */
  'default-orderings.name': 'Сартаваць па Імені',
  /** Title for the default ordering/SortOrder if no orderings are provided and the title field is found */
  'default-orderings.title': 'Сартаваць па Назве',

  /** Label to show in the document footer indicating the last edited date of the document */
  'document-status.edited': 'Адрэдагавана {{date}}',
  /** Label to show in the document footer indicating the document is not published*/
  'document-status.not-published': 'Не апублікавана',
  /** Label to show in the document footer indicating the published date of the document */
  'document-status.published': 'Апублікавана {{date}}',

  /** The value of the <code>_key</code> property must be a unique string. */
  'form.error.duplicate-keys-alert.details.additional-description':
    'Значэнне ўласцівасці <code>_key</code> павінна быць унікальным радком.',
  /** This usually happens when items are created using an API client, and the <code>_key</code> property of each elements has been generated non-uniquely. */
  'form.error.duplicate-keys-alert.details.description':
    'Гэта звычайна адбываецца, калі элементы ствараюцца з дапамогай API-кліенту, і ўласцівасць <code>_key</code> кожнага элемента была створана неўнікальна.',
  /** Developer info */
  'form.error.duplicate-keys-alert.details.title': 'Інфармацыя для распрацоўшчыкаў',
  /** Generate unique keys */
  'form.error.duplicate-keys-alert.generate-button.text': 'Генераваць унікальныя ключы',
  /** Several items in this list share the same identifier (key). Every item must have an unique identifier. */
  'form.error.duplicate-keys-alert.summary':
    'Некалькі элементаў у гэтым спісе маюць аднолькавы ідэнтыфікатар (ключ). Кожны элемент павінен мець унікальны ідэнтыфікатар.',
  /** Non-unique keys */
  'form.error.duplicate-keys-alert.title': 'Неўнікальныя ключы',
  /** Error text shown when a field with a given name cannot be found in the schema or is conditionally hidden but explicitly told to render  */
  'form.error.field-not-found':
    'Поле "{{fieldName}}" не знойдзена сярод членаў – праверце, ці ёсць яно вызначана ў схеме і ці не было ўмоўна схавана.',
  /** Add missing keys */
  'form.error.missing-keys-alert.add-button.text': 'Дадаць адсутнічаючыя ключы',
  /** The value of the <code>_key</code> property must be a unique string. */
  'form.error.missing-keys-alert.details.additional-description':
    'Значэнне ўласцівасці <code>_key</code> павінна быць унікальным радком.',
  /** This usually happens when items are created using an API client, and the <code>_key</code> property has not been included. */
  'form.error.missing-keys-alert.details.description':
    'Гэта звычайна адбываецца, калі элементы ствараюцца з дапамогай кліента API, і ўласцівасць <code>_key</code> не была ўключана.',
  /** Developer info */
  'form.error.missing-keys-alert.details.title': 'Інфармацыя для распрацоўшчыкаў',
  /** Some items in the list are missing their keys. This must be fixed in order to edit the list. */
  'form.error.missing-keys-alert.summary':
    'У некаторых элементах спіса адсутнічаюць ключы. Гэта павінна быць выпраўлена для рэдагавання спіса.',
  /** Missing keys */
  'form.error.missing-keys-alert.title': 'Адсутныя ключы',
  /** This usually happens when items are created using an API client, or when a custom input component has added invalid data to the list. */
  'form.error.mixed-array-alert.details.description':
    'Гэта звычайна адбываецца, калі элементы ствараюцца з дапамогай API-кліенту, альбо калі карыстацкі кампанент уводу дадаў няправільныя дадзеныя ў спіс.',
  /** Developer info */
  'form.error.mixed-array-alert.details.title': 'Інфармацыя для распрацоўшчыкаў',
  /**  Remove non-object values */
  'form.error.mixed-array-alert.remove-button.text': "Выдаліць неаб'ектныя значэнні",
  /** Some items in this list are not objects. This must be fixed in order to edit the list. */
  'form.error.mixed-array-alert.summary':
    "Некаторыя элементы ў гэтым спісе не з'яўляюцца аб'ектамі. Гэта павінна быць выпраўлена для рэдагавання спіса.",
  /** Invalid list values */
  'form.error.mixed-array-alert.title': 'Няправільныя значэнні спіса',
  /** Error text shown when form is unable to find an array item at a given indexed path */
  'form.error.no-array-item-at-index':
    'Элемент масіва па індэксе <code>{{index}}</code> не знойдзены па шляху <code>{{path}}</code>',
  /** Error text shown when form is unable to find an array item at a given keyed path */
  'form.error.no-array-item-at-key':
    'Элемент масіва з `_key` <code>"{{key}}"</code> не знойдзены па шляху <code>{{path}}</code>',
  /** Form field deprecated label */
  'form.field.deprecated-label': 'састарэлы',
  /** Fallback title shown above field if it has no defined title */
  'form.field.untitled-field-label': 'Без назвы',
  /** Fallback title shown above fieldset if it has no defined title */
  'form.field.untitled-fieldset-label': 'Без назвы',
  /** Accessibility label for the icon that indicates the field has a validation error */
  'form.validation.has-error-aria-label': 'Ёсць памылка',
  /** Accessibility label for the icon that indicates the field has validation information */
  'form.validation.has-info-aria-label': 'Ёсць інфармацыя',
  /** Accessibility label for the icon that indicates the field has a validation warning */
  'form.validation.has-warning-aria-label': 'Ёсць папярэджанне',
  /** Text shown when summarizing validation information, when the field has one or more errors */
  'form.validation.summary.errors-count_one': '{{count}} памылка',
  /** Text shown when summarizing validation information, when the field has one or more warnings */
  'form.validation.summary.warnings-count_one': '{{count}} папярэджанне',

  /** Tooltip for free trial navbar button indicating remaining days */
  'free-trial.tooltip.days-count_one': '{{count}} дзён засталося ў пробным перыядзе',
  /** Tooltip for free trial navbar button, once trial has ended */
  'free-trial.tooltip.trial-finished': 'Абнавіце ваш праект',

  /**
   * Label for "contact sales" call to action
   * These are titles for fallback links in the event the help & resources endpoint isn't able to be fetched
   */
  'help-resources.action.contact-sales': 'Звязацца з аддзелам продажаў',
  /**
   * Label for "help and support" call to action
   * These are titles for fallback links in the event the help & resources endpoint isn't able to be fetched
   */
  'help-resources.action.help-and-support': 'Дапамога і падтрымка',
  /**
   * Label for "join our community" call to action
   * These are titles for fallback links in the event the help & resources endpoint isn't able to be fetched
   */
  'help-resources.action.join-our-community': 'Далучайцеся да нашай супольнасці',
  /** Information for what the latest sanity version is */
  'help-resources.latest-sanity-version': 'Апошняя версія - {{latestVersion}}',
  /** Information for what studio version the current studio is running */
  'help-resources.studio-version': 'Версія Sanity Studio {{studioVersion}}',
  /** Title for help and resources menus */
  'help-resources.title': 'Дапамога і рэсурсы',

  /** Text for button to cancel an ongoing upload */
  'input.files.common.cancel-upload': 'Адмяніць загрузку',
  /** Text for file input button in upload placeholder */
  'input.files.common.upload-placeholder.file-input-button.text': 'Загрузіць',
  /** Uploading <FileName/> */
  'input.files.common.upload-progress': 'Загрузка <FileName/>',
  /** The referenced document cannot be opened, because the URL failed to be resolved */
  'input.reference.document-cannot-be-opened.failed-to-resolve-url':
    'Гэты дакумент немагчыма адкрыць (немагчыма вызначыць URL да Studio)',

  /** Label for adding item after a specific array item */
  'inputs.array.action.add-after': 'Дадаць элемент пасля',
  /** Label for adding item before a specific array item */
  'inputs.array.action.add-before': 'Дадаць элемент перад',
  /** Label for adding array item action when the schema allows for only one schema type */
  'inputs.array.action.add-item': 'Дадаць элемент',
  /**
   * Label for adding one array item action when the schema allows for multiple schema types,
   * eg. will prompt the user to select a type once triggered
   */
  'inputs.array.action.add-item-select-type': 'Дадаць элемент...',
  /** Array drag handle button tooltip */
  'inputs.array.action.drag.tooltip': 'Цягніце для змянення парадку',
  /** Label for duplicating an array item  */
  'inputs.array.action.duplicate': 'Дубляваць',
  /** Label for editing the item of a specific type, eg "Edit Person" */
  'inputs.array.action.edit': 'Рэдагаваць {{itemTypeTitle}}',
  /** Label for removing an array item action  */
  'inputs.array.action.remove': 'Выдаліць',
  /** Label for removing action when an array item has an error  */
  'inputs.array.action.remove-invalid-item': 'Выдаліць',
  /** Label for viewing the item of a specific type, eg "View Person" */
  'inputs.array.action.view': 'Праглядзець {{itemTypeTitle}}',
  /** Error description for the array item tooltip that explains that the current item can still be moved or deleted but not edited since the schema definition is not found */
  'inputs.array.error.can-delete-but-no-edit-description':
    'Вы можаце перамяшчаць або выдаляць гэты элемент, але яго немагчыма рэдагаваць, паколькі апісанне схемы для яго тыпу нідзе не знойдзена.',
  /** Error label for toast when array could not resolve the initial value */
  'inputs.array.error.cannot-resolve-initial-value-title':
    'Немагчыма вызначыць пачатковае значэнне для тыпу: {{schemaTypeTitle}}: {{errorMessage}}.',
  /** Error label for toast when trying to upload one array item of a type that cannot be converted to array */
  'inputs.array.error.cannot-upload-unable-to-convert_one':
    'Наступны элемент нельга загрузіць, таму што няма вядомага пераўтварэння з тыпу кантэнту ў элемент масіва:',
  /** Error description for the array item tooltip that explains that the current type item is not valid for the list  */
  'inputs.array.error.current-schema-not-declare-description':
    'Бягучая схема не дэкларуе элементы тыпу <code>{{typeName}}</code> як дапушчальныя для гэтага спісу. Гэта можа азначаць, што тып быў выдалены як дапушчальны тып элемента, альбо хтосьці іншы дадаў яго да сваёй лакальнай схемы, якая яшчэ не разгорнута.',
  /** Error description to show how the item is being represented in the json format */
  'inputs.array.error.json-representation-description': 'JSON-прадстаўленне гэтага элемента:',
  /** Error description for the array item tooltip that explains what the error means with more context */
  'inputs.array.error.type-is-incompatible-prompt':
    'Элемент тыпу <code>{{typeName}}</code> не дапушчальны для гэтага спісу',
  /** Error title for when an item type within an array input is incompatible, used in the tooltip */
  'inputs.array.error.type-is-incompatible-title': 'Чаму гэта адбываецца?',
  /** Error label for unexpected errors in the Array Input */
  'inputs.array.error.unexpected-error': 'Нечаканая памылка: {{error}}',
  /** Label for when the array input doesn't have any items */
  'inputs.array.no-items-label': 'Няма элементаў',
  /** Label for read only array fields */
  'inputs.array.read-only-label': 'Гэта поле толькі для чытання',
  /** Label for when the array input is resolving the initial value for the item */
  'inputs.array.resolving-initial-value': 'Вызначэнне пачатковага значэння…',
  /** Placeholder value for datetime input */
  'inputs.datetime.placeholder': 'напр. {{example}}',
  /** Acessibility label for button to open file options menu */
  'inputs.file.actions-menu.file-options.aria-label': 'Адкрыць меню опцый файла',
  /** Browse */
  'inputs.file.browse-button.text': 'Прагляд',
  /** Select file */
  'inputs.file.dialog.title': 'Выбраць файл',
  /** Unknown member kind: `{{kind}}` */
  'inputs.file.error.unknown-member-kind': 'Невядомы тып элемента: {{kind}}',
  /** The value of this field is not a valid file. Resetting this field will let you choose a new file. */
  'inputs.file.invalid-file-warning.description':
    "Значэнне гэтага поля не з'яўляецца сапраўдным файлам. Скіданне гэтага поля дазволіць вам выбраць новы файл.",
  /** Reset value */
  'inputs.file.invalid-file-warning.reset-button.text': 'Скінуць значэнне',
  /** Invalid file value */
  'inputs.file.invalid-file-warning.title': 'Недапушчальнае значэнне файла',
  /** Select */
  'inputs.file.multi-browse-button.text': 'Выбраць',
  /** The upload could not be completed at this time. */
  'inputs.file.upload-failed.description': 'Загрузка не можа быць завершана ў гэты час.',
  /** Upload failed */
  'inputs.file.upload-failed.title': 'Загрузка не атрымалася',
  /** Clear field */
  'inputs.files.common.actions-menu.clear-field.label': 'Ачысціць поле',
  /** Copy URL */
  'inputs.files.common.actions-menu.copy-url.label': 'Капіяваць URL',
  /** Download */
  'inputs.files.common.actions-menu.download.label': 'Спампаваць',
  /** The URL is copied to the clipboard */
  'inputs.files.common.actions-menu.notification.url-copied': 'URL скапіраваны ў буфер абмену',
  /** Replace */
  'inputs.files.common.actions-menu.replace.label': 'Замяніць',
  /** Upload */
  'inputs.files.common.actions-menu.upload.label': 'Загрузіць',
  /** Drop to upload */
  'inputs.files.common.drop-message.drop-to-upload': 'Пакіньце, каб загрузіць',
  /** Drop to upload `{{count}}` file */
  'inputs.files.common.drop-message.drop-to-upload-multi_one':
    'Пакіньце, каб загрузіць {{count}} файл',
  /** Can't upload this file here */
  'inputs.files.common.drop-message.drop-to-upload.no-accepted-file-message_one':
    'Немагчыма загрузіць гэты файл тут',
  /** `{{count}}` file can't be uploaded here */
  'inputs.files.common.drop-message.drop-to-upload.rejected-file-message_one':
    '{{count}} файл нельга загрузіць тут',
  /** Cannot upload `{{count}}` files */
  'inputs.files.common.placeholder.cannot-upload-some-files_one': 'Немагчыма загрузіць файл',
  /** Drag or paste type here */
  'inputs.files.common.placeholder.drag-or-paste-to-upload_file':
    'Перацягніце або ўстаўце файл тут',
  /** Drag or paste image here */
  'inputs.files.common.placeholder.drag-or-paste-to-upload_image':
    'Перацягніце або ўстаўце малюнак тут',
  /** Drop to upload file */
  'inputs.files.common.placeholder.drop-to-upload_file': 'Пакіньце, каб загрузіць файл',
  /** Drop to upload image */
  'inputs.files.common.placeholder.drop-to-upload_image': 'Пакіньце, каб загрузіць малюнак',
  /** Read only */
  'inputs.files.common.placeholder.read-only': 'Толькі для чытання',
  /** Can't upload files here */
  'inputs.files.common.placeholder.upload-not-supported': 'Немагчыма загрузіць файлы тут',
  /** Clear upload */
  'inputs.files.common.stale-upload-warning.clear': 'Ачысціць загрузку',
  /** An upload has made no progress for at least `{{staleThresholdMinutes}}` minutes and likely got interrupted. You can safely clear the incomplete upload and try uploading again. */
  'inputs.files.common.stale-upload-warning.description':
    'Загрузка не рухалася прынамсі {{staleThresholdMinutes}} хвілін і, верагодна, была перапынена. Вы можаце бяспечна ачысціць незавершаную загрузку і паспрабаваць загрузіць зноў.',
  /** Incomplete upload */
  'inputs.files.common.stale-upload-warning.title': 'Незавершаная загрузка',
  /** Tooltip text for action to crop image */
  'inputs.image.actions-menu.crop-image-tooltip': 'Абрэзаць малюнак',
  /** Accessibility label for button to open image edit dialog */
  'inputs.image.actions-menu.edit-details.aria-label': 'Адкрыць дыялог рэдагавання малюнка',
  /** Accessibility label for button to open image options menu */
  'inputs.image.actions-menu.options.aria-label': 'Адкрыць меню опцый малюнка',
  /** Select */
  'inputs.image.browse-menu.text': 'Выбраць',
  /** Cannot upload this file here */
  'inputs.image.drag-overlay.cannot-upload-here': 'Немагчыма загрузіць гэты файл тут',
  /** Drop image to upload */
  'inputs.image.drag-overlay.drop-to-upload-image': 'Пакіньце малюнак, каб загрузіць',
  /** This field is read only */
  'inputs.image.drag-overlay.this-field-is-read-only': 'Гэта поле толькі для чытання',
  /** Unknown member kind: `{{kind}}` */
  'inputs.image.error.unknown-member-kind': 'Невядомы тып элемента: {{kind}}',
  /** Edit hotspot and crop */
  'inputs.image.hotspot-dialog.title': 'Рэдагаваць гарачую кропку і абрэзаць',
  /** The value of this field is not a valid image. Resetting this field will let you choose a new image. */
  'inputs.image.invalid-image-warning.description':
    "Значэнне гэтага поля не з'яўляецца сапраўдным малюнкам. Скід гэтага поля дазволіць вам выбраць новы малюнак.",
  /** Reset value */
  'inputs.image.invalid-image-warning.reset-button.text': 'Скінуць значэнне',
  /** Invalid image value */
  'inputs.image.invalid-image-warning.title': 'Несапраўднае значэнне малюнка',
  /** Preview of uploaded image */
  'inputs.image.preview-uploaded-image': 'Папярэдні прагляд загружанага малюнка',
  /** The upload could not be completed at this time. */
  'inputs.image.upload-error.description': 'Загрузка не можа быць завершана ў цяперашні час.',
  /** Upload failed */
  'inputs.image.upload-error.title': 'Загрузка не атрымалася',
  /** Adjust the rectangle to crop image. Adjust the circle to specify the area that should always be visible. */
  'inputs.imagetool.description':
    'Наладзьце прамавугольнік для абразання малюнка. Наладзьце кола, каб вызначыць абласць, якая павінна заўсёды заставацца бачнай.',
  /** Error: `{{errorMessage}}` */
  'inputs.imagetool.load-error': 'Памылка: {{errorMessage}}',
  /** Hotspot & Crop */
  'inputs.imagetool.title': 'Hotspot & Crop',
  /** Convert to `{{targetType}}` */
  'inputs.invalid-value.convert-button.text': 'Канвертаваць у {{targetType}}',
  /** The current value (<code>`{{actualType}}`</code>) */
  'inputs.invalid-value.current-type': 'Бягучае значэнне (<code>{{actualType}}</code>)',
  /** The property value is stored as a value type that does not match the expected type. */
  'inputs.invalid-value.description':
    'Значэнне ўласцівасці захоўваецца ў выглядзе тыпу значэння, які не адпавядае чаканаму тыпу.',
  /** The value of this property must be of type <code>`{{validType}}`</code> according to the schema. */
  'inputs.invalid-value.details.description':
    'Значэнне гэтай уласцівасці павінна быць тыпу <code>{{validType}}</code> згодна схеме.',
  /** Only the following types are valid here according to schema: */
  'inputs.invalid-value.details.multi-type-description':
    "Толькі наступныя тыпы з'яўляюцца сапраўднымі тут згодна схеме:",
  /** Mismatching value types typically occur when the schema has recently been changed. */
  'inputs.invalid-value.details.possible-reason':
    'Несупадзенне тыпаў значэнняў звычайна адбываецца, калі схема нядаўна была зменена.',
  /** Developer info */
  'inputs.invalid-value.details.title': 'Інфармацыя для распрацоўшчыкаў',
  /** -- Invalid Value Input -- */
  /** Reset value */
  'inputs.invalid-value.reset-button.text': 'Скінуць значэнне',
  /** Invalid property value */
  'inputs.invalid-value.title': 'Несапраўднае значэнне ўласцівасці',
  /** Field groups */
  'inputs.object.field-group-tabs.aria-label': 'Групы палёў',
  /** Read-only field description */
  'inputs.object.unknown-fields.read-only.description':
    'Гэта поле <strong>толькі для чытання</strong> згодна схеме дакумента і не можа быць выключана. Калі вы хочаце мець магчымасць выключыць гэта ў Studio, пераканайцеся, што вы выдалілі поле <code>readOnly</code> з ахопнага тыпу ў схеме.',
  /** Remove field */
  'inputs.object.unknown-fields.remove-field-button.text': 'Выдаліць поле',
  /** Encountered `{{count}}` fields that are not defined in the schema. */
  'inputs.object.unknown-fields.warning.description_one':
    'Выяўлена поле, якое не вызначана ў схеме.',
  /** Detailed description of unknown field warning */
  'inputs.object.unknown-fields.warning.details.description_one':
    'Гэта поле не вызначана ў схеме, што можа азначаць, што апісанне поля было выдаленае, альбо хтосьці іншы дадаў яго да свайго лакальнага праекта і яшчэ не разгарнуў свае змены.',
  /** Developer info */
  'inputs.object.unknown-fields.warning.details.title': 'Інфармацыя для распрацоўшчыкаў',
  /** Unknown field found */
  'inputs.object.unknown-fields.warning.title_one': 'Знойдзена невядомае поле',
  /** Collapse the editor to save screen space  */
  'inputs.portable-text.action.collapse-editor': 'Згарнуць рэдактар',
  /** Aria label for action to edit an existing annotation */
  'inputs.portable-text.action.edit-annotation-aria-label': 'Рэдагаваць анатацыю',
  /** Expand the editor to give more editing space */
  'inputs.portable-text.action.expand-editor': 'Разгарнуць рэдактар',
  /** Label label for action to insert a block of a given type (`{{typeName}}`) */
  'inputs.portable-text.action.insert-block': 'Уставіць {{typeName}}',
  /** Accessibility label for action to insert a block of a given type (`{{typeName}}`) */
  'inputs.portable-text.action.insert-block-aria-label': 'Уставіць {{typeName}} (блок)',
  /** Label for action to insert an inline object of a given type (`{{typeName}}`) */
  'inputs.portable-text.action.insert-inline-object': 'Уставіць {{typeName}}',
  /** Accessibility label for action to insert an inline object of a given type (`{{typeName}}`) */
  'inputs.portable-text.action.insert-inline-object-aria-label': 'Уставіць {{typeName}} (у лінію)',
  /** Aria label for action to remove an annotation */
  'inputs.portable-text.action.remove-annotation-aria-label': 'Выдаліць анатацыю',
  /** Label for activate on focus with context of click and not focused */
  'inputs.portable-text.activate-on-focus-message_click': 'Націсніце, каб актываваць',
  /** Label for activate on focus with context of click and focused */
  'inputs.portable-text.activate-on-focus-message_click-focused':
    'Націсніце або націсніце прастору, каб актываваць',
  /** Label for activate on focus with context of tap and not focused */
  'inputs.portable-text.activate-on-focus-message_tap': 'Націсніце, каб актываваць',
  /**Aria label for the annotation object */
  'inputs.portable-text.annotation-aria-label': "Аб'ект анатацыі",
  /** Title for dialog that allows editing an annotation */
  'inputs.portable-text.annotation-editor.title': 'Рэдагаваць {{schemaType}}',
  /** Title of the default "link" annotation */
  'inputs.portable-text.annotation.link': 'Спасылка',
  /**Aria label for the block object */
  'inputs.portable-text.block.aria-label': "Аб'ект блока",
  /** Label for action to edit a block item, in the case where it is editable */
  'inputs.portable-text.block.edit': 'Рэдагаваць',
  /** Accessibility label for the button that opens the actions menu on blocks */
  'inputs.portable-text.block.open-menu-aria-label': 'Адкрыць меню',
  /** Label for action to open a reference, in the case of block-level reference types */
  'inputs.portable-text.block.open-reference': 'Адкрыць спасылку',
  /** Label for action to remove a block item */
  'inputs.portable-text.block.remove': 'Выдаліць',
  /** Label for action to view a block item, in the case where it is read-only and thus cannot be edited */
  'inputs.portable-text.block.view': 'Праглядзець',
  /** Title of the "code" decorator */
  'inputs.portable-text.decorator.code': 'Код',
  /** Title of the "em" (emphasis) decorator */
  'inputs.portable-text.decorator.emphasis': 'Курсіў',
  /** Title of the "strike-through" decorator */
  'inputs.portable-text.decorator.strike-through': 'Перакрэслены',
  /** Title of the "strong" decorator */
  'inputs.portable-text.decorator.strong': 'Тоўсты',
  /** Title of the "underline" decorator */
  'inputs.portable-text.decorator.underline': 'Падкрэслены',
  /** Placeholder text for when the editor is empty */
  'inputs.portable-text.empty-placeholder': 'Пуста',
  /**Aria label for the block object */
  'inputs.portable-text.inline-block.aria-label': "Убудаваны аб'ект",
  /** Label for action to edit an inline object item */
  'inputs.portable-text.inline-object.edit': "Рэдагаваць аб'ект",
  /** Aria label for icon for action to edit an inline object item */
  'inputs.portable-text.inline-object.edit-aria-label': "Рэдагаваць аб'ект",
  /** Label for action to remove an inline object item */
  'inputs.portable-text.inline-object.remove': "Выдаліць аб'ект",
  /** Aria label for icon for action to remove an inline object item */
  'inputs.portable-text.inline-object.remove-aria-label': "Выдаліць аб'ект",
  /** Disclaimer text shown on invalid Portable Text value, when an action is available to unblock the user, but it is not guaranteed to be safe */
  'inputs.portable-text.invalid-value.action-disclaimer':
    'УВАГА: Звычайна можна бяспечна выканаць дзеянне вышэй, але калі ў вас ёсць сумневы, звяжыцеся з адказнымі за канфігурацыю вашай студыі.',
  /** Action presented when the Portable Text field value is invalid, when block with key `{{key}}` has a child with key `{{childKey}}` of type `{{childType}}` which is not allowed by the schema definition */
  'inputs.portable-text.invalid-value.disallowed-child-type.action': "Выдаліце аб'ект",
  /** Text explaining that the Portable Text field value is invalid, when block with key `{{key}}` has a child with key `{{childKey}}` of type `{{childType}}` which is not allowed by the schema definition */
  'inputs.portable-text.invalid-value.disallowed-child-type.description':
    'Даччына з ключом {{childKey}} блока з ключом <code>{{key}}</code> мае тып <code>{{childType}}</code>, які не дазволены схемай.',
  /** Action presented when the Portable Text field value is invalid, when child with key `{{key}}` has a type (`{{typeName}}`) that is not an allowed block type for this field */
  'inputs.portable-text.invalid-value.disallowed-type.action': 'Выдаліце блок',
  /** Text explaining that the Portable Text field value is invalid, when child with key `{{key}}` has a type (`{{typeName}}`) that is not an allowed block type for this field */
  'inputs.portable-text.invalid-value.disallowed-type.description':
    'Блок з ключом <code>{{key}}</code> мае тып <code>{{typeName}}</code>, які не дазволены схемай.',
  /** Action presented when the Portable Text field value is invalid, when block with key `{{key}}` contains no children */
  'inputs.portable-text.invalid-value.empty-children.action': 'Уставіце пусты тэкставы спан',
  /** Text explaining that the Portable Text field value is invalid, when block with key `{{key}}` contains no children */
  'inputs.portable-text.invalid-value.empty-children.description':
    'Тэкставы блок з ключом <code>{{key}}</code> не мае тэкставых спанаў.',
  /** Label for the button to ignore invalid values in the Portable Text editor */
  'inputs.portable-text.invalid-value.ignore-button.text': 'Ігнараваць',
  /** Action presented when the Portable Text field value is invalid, when child with key `{{key}}` has a `_type` property that is set to `block`, but the block type defined in schema has a different name (`{{expectedTypeName}}`) */
  'inputs.portable-text.invalid-value.incorrect-block-type.action':
    'Выкарыстоўвайце тып <code>{{expectedTypeName}}</code>',
  /** Text explaining that the Portable Text field value is invalid, when child with key `{{key}}` has a `_type` property that is set to `block`, but the block type defined in schema has a different name (`{{expectedTypeName}}`) */
  'inputs.portable-text.invalid-value.incorrect-block-type.description':
    'Блок з ключом <code>{{key}}</code> мае няправільнае імя тыпу. Згодна схеме, яно павінна быць <code>{{expectedTypeName}}</code>.',
  /** Action presented when the Portable Text field value is invalid, when block with key `{{key}}` has a span with key `{{childKey}}` that has a missing or invalid `text` property */
  'inputs.portable-text.invalid-value.invalid-span-text.action':
    'Усталяваць пустое значэнне тэксту',
  /** Text explaining that the Portable Text field value is invalid, when block with key `{{key}}` has a span with key `{{childKey}}` that has a missing or invalid `text` property */
  'inputs.portable-text.invalid-value.invalid-span-text.description':
    'Спан з ключом {{childKey}} блока з ключом <code>{{key}}</code> адсутнічае або мае няправільную <code>text</code> уласцівасць.',
  /** Action presented when the Portable Text field value is invalid, when child with key `{{key}}` is missing a `_type` property, but seems to be a block of type `{{expectedTypeName}}` */
  'inputs.portable-text.invalid-value.missing-block-type.action':
    'Выкарыстоўвайце тып <code>{{expectedTypeName}}</code>',
  /** Text explaining that the Portable Text field value is invalid, when child with key `{{key}}` is missing a `_type` property, but seems to be a block of type `{{expectedTypeName}}` */
  'inputs.portable-text.invalid-value.missing-block-type.description':
    'Блок з ключом <code>{{key}}</code> не мае імя тыпу. Згодна схеме, яно павінна быць <code>{{expectedTypeName}}</code>.',
  /** Action presented when the Portable Text field value is invalid, when block with key `{{key}}` has a child at `{{index}}` which is missing `_key` property */
  'inputs.portable-text.invalid-value.missing-child-key.action': 'Прызначце выпадковы ключ',
  /** Text explaining that the Portable Text field value is invalid, when block with key `{{key}}` has a child at `{{index}}` which is missing `_key` property */
  'inputs.portable-text.invalid-value.missing-child-key.description':
    'Даччына на пазіцыі <code>{{index}}</code> блока з ключом <code>{{key}}</code> не мае <code>_key</code> уласцівасць.',
  /** Action presented when the Portable Text field value is invalid, when block with key `{{key}}` has a child with key `{{childKey}}` which is missing a `_type` property */
  'inputs.portable-text.invalid-value.missing-child-type.action': "Выдаліце аб'ект",
  /** Text explaining that the Portable Text field value is invalid, when block with key `{{key}}` has a child with key `{{childKey}}` which is missing a `_type` property */
  'inputs.portable-text.invalid-value.missing-child-type.description':
    'Даччына з ключом {{childKey}} блока з ключом <code>{{key}}</code> не мае <code>_type</code> уласцівасць.',
  /** Action presented when the Portable Text field value is invalid, when child at `{{index}}` is missing the required `_key` property */
  'inputs.portable-text.invalid-value.missing-key.action': 'Прызначце выпадковы ключ',
  /** Text explaining that the Portable Text field value is invalid, when child at `{{index}}` is missing the required `_key` property */
  'inputs.portable-text.invalid-value.missing-key.description':
    'Блок на пазіцыі <code>{{index}}</code> не мае патрабаванай <code>_key</code> уласцівасць.',
  /** Action presented when the Portable Text field value is invalid, when child with key `{{key}}` has a missing or invalid `children` property */
  'inputs.portable-text.invalid-value.missing-or-invalid-children.action': 'Выдаліце блок',
  /** Text explaining that the Portable Text field value is invalid, when child with key `{{key}}` has a missing or invalid `children` property */
  'inputs.portable-text.invalid-value.missing-or-invalid-children.description':
    'Тэкставы блок з ключом <code>{{key}}</code> мае няправільную або не мае ўвогуле уласцівасць `children`.',
  /** Action presented when the Portable Text field value is invalid, when child with key `{{key}}` has a missing or invalid `markDefs` property */
  'inputs.portable-text.invalid-value.missing-or-invalid-markdefs.action': 'Дадайце уласцівасць',
  /** Text explaining that the Portable Text field value is invalid, when child with key `{{key}}` has a missing or invalid `markDefs` property */
  'inputs.portable-text.invalid-value.missing-or-invalid-markdefs.description':
    'Тэкставы блок з ключом <code>{{key}}</code> мае няправільную або не мае ўвогуле уласцівасць `markDefs`.',
  /** Action presented when the Portable Text field value is invalid, when child with key `{{key}}` is missing a `_type` property  */
  'inputs.portable-text.invalid-value.missing-type.action': 'Выдаліце блок',
  /** Text explaining that the Portable Text field value is invalid, when child with key `{{key}}` is missing a `_type` property  */
  'inputs.portable-text.invalid-value.missing-type.description':
    'Блок з ключом <code>{{key}}</code> не мае імя тыпу.',
  /** Action presented when the Portable Text field value is invalid, when block with key `{{key}}` contains a non-object child at index `{{index}}` */
  'inputs.portable-text.invalid-value.non-object-child.action': 'Выдаліць элемент',
  /** Text explaining that the Portable Text field value is invalid, when block with key `{{key}}` contains a non-object child at index `{{index}}` */
  'inputs.portable-text.invalid-value.non-object-child.description':
    "Дачка ў індэксе <code>{{index}}</code> блока з ключом <code>{{key}}</code> не з'яўляецца аб'ектам.",
  /** Action presented when the Portable Text field value is invalid, when the Portable Text field is not an array, or the array is empty */
  'inputs.portable-text.invalid-value.not-an-array.action': 'Ачысціць значэнне',
  /** Text explaining that the Portable Text field value is invalid, when the Portable Text field is not an array, or the array is empty */
  'inputs.portable-text.invalid-value.not-an-array.description':
    'Значэнне павінна быць масівам блокаў Portable Text або не вызначана.',
  /** Action presented when the Portable Text field value is invalid, when child at `{{index}}` is not an object */
  'inputs.portable-text.invalid-value.not-an-object.action': 'Выдаліць элемент',
  /** Text explaining that the Portable Text field value is invalid, when child at `{{index}}` is not an object */
  'inputs.portable-text.invalid-value.not-an-object.description':
    "Элемент у <code>{{index}}</code> не з'яўляецца аб'ектам,.",
  /** Action presented when the Portable Text field value is invalid, when block with key `{{key}}` contains marks (`{{orphanedMarks}}`) that are not supported by the current schema */
  'inputs.portable-text.invalid-value.orphaned-marks.action': 'Выдаліць недазволеныя маркіроўкі',
  /** Text explaining that the Portable Text field value is invalid, when block with key `{{key}}` contains marks (`{{orphanedMarks}}`) that are not supported by the current schema */
  'inputs.portable-text.invalid-value.orphaned-marks.description':
    'Тэкставы блок з ключом <code>{{key}}</code> змяшчае маркіроўкі <code>({{orphanedMarks, list}})</code>, якія не дазволены схемай.',
  /** Title for the alert indicating that the Portable Text field has an invalid value */
  'inputs.portable-text.invalid-value.title': 'Несапраўднае значэнне Portable Text',
  /** Title of "bulleted" list type */
  'inputs.portable-text.list-type.bullet': 'Спіс з маркерамі',
  /** Title of numbered list type */
  'inputs.portable-text.list-type.number': 'Нумараваны спіс',
  /** Title of the "h1" block style */
  'inputs.portable-text.style.h1': 'Загаловак 1',
  /** Title of the "h2" block style */
  'inputs.portable-text.style.h2': 'Загаловак 2',
  /** Title of the "h3" block style */
  'inputs.portable-text.style.h3': 'Загаловак 3',
  /** Title of the "h4" block style */
  'inputs.portable-text.style.h4': 'Загаловак 4',
  /** Title of the "h5" block style */
  'inputs.portable-text.style.h5': 'Загаловак 5',
  /** Title of the "h6" block style */
  'inputs.portable-text.style.h6': 'Загаловак 6',
  /** Title shown when multiple blocks of varying styles is selected */
  'inputs.portable-text.style.multiple': 'Некалькі',
  /** Title of fallback when no style is given for a block */
  'inputs.portable-text.style.none': 'Без стылю',
  /** Title of the "normal" block style */
  'inputs.portable-text.style.normal': 'Звычайны',
  /** Title of the "quote" block style */
  'inputs.portable-text.style.quote': 'Цытата',
  /** Label for action to clear the current value of the reference field */
  'inputs.reference.action.clear': 'Ачысціць',
  /** Label for action to create a new document from the reference input */
  'inputs.reference.action.create-new-document': 'Стварыць',
  /** Label for action to create a new document from the reference input, when there are multiple templates or document types to choose from */
  'inputs.reference.action.create-new-document-select': 'Стварыць…',
  /** Label for action to duplicate the current item to a new item (used within arrays) */
  'inputs.reference.action.duplicate': 'Дубляваць',
  /** Label for action that opens the referenced document in a new tab */
  'inputs.reference.action.open-in-new-tab': 'Адкрыць у новай укладцы',
  /** Label for action to remove the reference from an array */
  'inputs.reference.action.remove': 'Выдаліць',
  /** Label for action to replace the current value of the field */
  'inputs.reference.action.replace': 'Замяніць',
  /** Label for action to cancel a previously initiated replace action  */
  'inputs.reference.action.replace-cancel': 'Адмяніць замену',
  /** The cross-dataset reference field currently has a reference, but the feature has been disabled since it was created. This explains what can/cannot be done in its current state. */
  'inputs.reference.cross-dataset.feature-disabled-actions':
    'Вы ўсё яшчэ можаце ачысціць існуючую спасылку ў гэтым полі, але яе нельга змяніць на іншы дакумент, пакуль функцыя адключана.',
  /** A cross-dataset reference field exists but the feature has been disabled. A <DocumentationLink> component is available. */
  'inputs.reference.cross-dataset.feature-disabled-description':
    'Гэтая функцыя была адключана. Прачытайце як яе ўключыць, у <DocumentationLink>дакументацыі</DocumentationLink>.',
  /** Title for a warning telling the user that the current project does not have the "cross dataset references" feature */
  'inputs.reference.cross-dataset.feature-unavailable-title':
    'Недаступная функцыя: Спасылка паміж наборамі дадзеных',
  /** The cross-dataset reference points to a document with an invalid type  */
  'inputs.reference.cross-dataset.invalid-type':
    'Спасылка на дакумент няправільнага тыпу ({{typeName}}) <JsonValue/>',
  /** The referenced document will open in a new tab (due to external studio) */
  'inputs.reference.document-opens-in-new-tab': 'Гэты дакумент адкрываецца ў новай укладцы',
  /** Error title for when the document is unavailable (for any possible reason) */
  'inputs.reference.error.document-unavailable-title': 'Дакумент недаступны',
  /** Error title for when the referenced document failed to be loaded */
  'inputs.reference.error.failed-to-load-document-title': 'Не ўдалося загрузіць спасыланы дакумент',
  /** Error title for when the reference search returned a document that is not an allowed type for the field */
  'inputs.reference.error.invalid-search-result-type-title':
    'Пошук вярнуў тып, які не з\'яўляецца дапушчальным для гэтай спасылкі: "{{returnedType}}"',
  /** Error description for when the document referenced is not one of the types declared as allowed target types in schema */
  'inputs.reference.error.invalid-type-description':
    'Спасыланы дакумент (<code>{{documentId}}</code>) мае тып <code>{{actualType}}</code>. Згодна схеме, спасыланыя дакументы могуць быць толькі тыпу <AllowedTypes />.',
  /** Error title for when the document referenced is not one of the types declared as allowed target types in schema */
  'inputs.reference.error.invalid-type-title': 'Дакумент няправільнага тыпу',
  /** Error description for when the user does not have permissions to read the referenced document */
  'inputs.reference.error.missing-read-permissions-description':
    'Спасыланы дакумент не можа быць даступны з-за недастатковых правоў',
  /** Error title for when the user does not have permissions to read the referenced document */
  'inputs.reference.error.missing-read-permissions-title': 'Недастатковыя правы',
  /** Error description for when the current reference value points to a document that does not exist (on weak references) */
  'inputs.reference.error.nonexistent-document-description':
    'Спасыланы дакумент не існуе (ID: <code>{{documentId}}</code>). Вы можаце выдаліць спасылку альбо замяніць яе на іншы дакумент.',
  /** Error title for when the current reference value points to a document that does not exist (on weak references) */
  'inputs.reference.error.nonexistent-document-title': 'Не знойдзена',
  /** Label for button that clears the reference when it points to a document that does not exist (on weak references) */
  'inputs.reference.error.nonexistent-document.clear-button-label': 'Ачысціць',
  /** Error title for when the search for a reference failed. Note that the message sent by the backend may not be localized. */
  'inputs.reference.error.search-failed-title': 'Пошук спасылкі не атрымаўся',
  /** Alternative text for the image shown in cross-dataset reference input */
  'inputs.reference.image-preview-alt-text': 'Папярэдні прагляд малюнка спасыланага дакумента',
  /** Description for alert shown when a reference in a live-edit document is marked as being weak, the referenced document exists, AND the reference is supposed to be have been strengthened on publish */
  'inputs.reference.incomplete-reference.finalize-action-description':
    '<strong>{{referencedDocument}}</strong> апублікаваны і гэтая спасылка цяпер павінна быць завершана.',
  /** Title for alert shown when a reference in a live-edit document is marked as being weak, the referenced document exists, AND the reference is supposed to be have been strengthened on publish */
  'inputs.reference.incomplete-reference.finalize-action-title': 'Завяршыць спасылку',
  /** Description for alert shown when a reference in a live-edit document points to a document that exists and has been published, but the reference is still marked as weak */
  'inputs.reference.incomplete-reference.strengthen-action-description':
    '<strong>{{referencedDocument}}</strong> апублікаваны і гэтая спасылка цяпер павінна быць ператворана ў моцную спасылку.',
  /** Title for alert shown when a reference in a live-edit document points to a document that exists and has been published, but the reference is still marked as weak */
  'inputs.reference.incomplete-reference.strengthen-action-title': 'Ператварыць у моцную спасылку',
  /** Label for button that triggers the action that strengthen a reference */
  'inputs.reference.incomplete-reference.strengthen-button-label': 'Ператварыць у моцную спасылку',
  /** Label for button that triggers a retry attempt for reference metadata  */
  'inputs.reference.metadata-error.retry-button-label': 'Паспрабаваць зноў',
  /** Title for alert shown when reference metadata fails to be loaded */
  'inputs.reference.metadata-error.title': 'Не ўдалося загрузіць метададзеныя спасылкі',
  /** Message shown when no documents were found that matched the given search string */
  'inputs.reference.no-results-for-query': 'Няма вынікаў для <strong>“{{searchTerm}}”</strong>',
  /** Text for tooltip showing when a document was edited, using relative time (eg "how long ago was it edited?") */
  'inputs.reference.preview.edited-at-time': 'Адрэдагавана <RelativeTime/>',
  /** Accessibility label for icon indicating that document does _not_ have any unpublished changes */
  'inputs.reference.preview.has-no-unpublished-changes-aria-label':
    'Няма неапублікаваных рэдагаванняў',
  /** Accessibility label for icon indicating that document has unpublished changes */
  'inputs.reference.preview.has-unpublished-changes-aria-label': 'Адрэдагавана',
  /** Accessibility label for icon indicating that document does _not_ have a published version */
  'inputs.reference.preview.is-not-published-aria-label': 'Не апублікавана',
  /** Accessibility label for icon indicating that document has a published version */
  'inputs.reference.preview.is-published-aria-label': 'Апублікавана',
  /** Text for tooltip indicating that a document has no unpublished edits */
  'inputs.reference.preview.no-unpublished-edits': 'Няма неапублікаваных рэдагаванняў',
  /** Text for tooltip indicating that a document has not yet been published */
  'inputs.reference.preview.not-published': 'Не апублікавана',
  /** Text for tooltip showing when a document was published, using relative time (eg "how long ago was it published?") */
  'inputs.reference.preview.published-at-time': 'Апублікавана <RelativeTime/>',
  /** The referenced document no longer exist and might have been deleted (for weak references) */
  'inputs.reference.referenced-document-does-not-exist':
    'Згаданы дакумент больш не існуе і магчыма быў выдалены (ID дакумента: <code>{{documentId}}</code>).',
  /** The referenced document could not be displayed to the user because of insufficient permissions */
  'inputs.reference.referenced-document-insufficient-permissions':
    'Немагчыма атрымаць доступ да згаданага дакумента з-за недастатковых правоў',
  /** Label for when the reference input is resolving the initial value for an item */
  'inputs.reference.resolving-initial-value': 'Вызначэнне пачатковага значэння…',
  /** Placeholder shown in a reference input with no current value */
  'inputs.reference.search-placeholder': 'Пачніце пісаць, каб знайсці',
  /** Explanation of the consequences of leaving the reference as strong instead of weak */
  'inputs.reference.strength-mismatch.is-strong-consquences':
    'Немагчыма будзе выдаліць дакумент-спасылку без папярэдняга выдалення гэтай спасылкі альбо пераўтварэння яе ў слабую.',
  /** Description for alert shown when a reference is supposed to be weak, but the actual value is strong */
  'inputs.reference.strength-mismatch.is-strong-description':
    'Гэтая спасылка <em>моцная</em>, але згодна з бягучай схемай яна павінна быць <em>слабой</em>.',
  /** Explanation of the consequences of leaving the reference as weak instead of strong */
  'inputs.reference.strength-mismatch.is-weak-consquences':
    'Гэта дазваляе выдаляць згаданы дакумент без папярэдняга выдалення гэтай спасылкі, што пакідае гэта поле са спасылкай на неіснуючы дакумент.',
  /** Description for alert shown when a reference is supposed to be strong, but the actual value is weak */
  'inputs.reference.strength-mismatch.is-weak-description':
    'Гэтая спасылка <em>слабая</em>, але згодна з бягучай схемай яна павінна быць <em>моцнай</em>.',
  /** Label for button that triggers the action that strengthens a reference on strength mismatch */
  'inputs.reference.strength-mismatch.strengthen-button-label': 'Ператварыць у моцную спасылку',
  /** Title for alert shown when a reference is supposed to be weak/strong, but the actual value is the opposite of what it is supposed to be */
  'inputs.reference.strength-mismatch.title': 'Несупадзенне моцнасці спасылкі',
  /** Label for button that triggers the action that weakens a reference on strength mismatch */
  'inputs.reference.strength-mismatch.weaken-button-label': 'Ператварыць у слабую спасылку',
  /** Action message for generating the slug */
  'inputs.slug.action.generate': 'Стварыць',
  /** Loading message for when the input is actively generating a slug */
  'inputs.slug.action.generating': 'Стварэнне…',
  /** Error message for when the source to generate a slug from is missing */
  'inputs.slug.error.missing-source':
    'Крыніца адсутнічае. Праверце крыніцу ў тыпе {{schemaType}} ў схеме',
  /** Placeholder for an empty tag input */
  'inputs.tags.placeholder': 'Увядзіце тэг і націсніце ENTER…',
  /** Placeholder for an empty tag input on touch devices */
  'inputs.tags.placeholder_touch': 'Увядзіце тэг…',
  /** Convert to `{{targetType}}` */
  'inputs.untyped-value.convert-button.text': 'Канвертаваць у {{targetType}}',
  /** Encountered an object value without a <code>_type</code> property. */
  'inputs.untyped-value.description': "Выяўлены аб'ект без уласцівасці <code>_type</code>.",
  /** Either remove the <code>name</code> property of the object declaration, or set <code>_type</code> property on items. */
  'inputs.untyped-value.details.description':
    "Альбо выдаліце уласцівасць <code>name</code> аб'яўлення аб'екта, альбо ўсталюйце уласцівасць <code>_type</code> для элементаў.",
  /** Current value (<code>object</code>): */
  'inputs.untyped-value.details.json-dump-prefix': 'Бягучае значэнне (<code>object</code>):',
  /** The following types are valid here according to schema: */
  'inputs.untyped-value.details.multi-type-description':
    "Наступныя тыпы з'яўляюцца дапушчальнымі згодна схеме:",
  /** Developer info */
  'inputs.untyped-value.details.title': 'Інфармацыя для распрацоўшчыкаў',
  /** Property value missing <code>_type</code> */
  'inputs.untyped-value.title': 'Уласцівасць значэння адсутнічае <code>_type</code>',
  /** Unset value */
  'inputs.untyped-value.unset-item-button.text': 'Скінуць значэнне',

  /** The fallback explanation if no context is provided */
  'insufficient-permissions-message.not-authorized-explanation':
    'У вас няма дазволу на доступ да гэтай функцыі.',
  /** The explanation when unable to create any document at all */
  'insufficient-permissions-message.not-authorized-explanation_create-any-document':
    'У вас няма дазволу на стварэнне дакумента.',
  /** The explanation when unable to create a particular document */
  'insufficient-permissions-message.not-authorized-explanation_create-document':
    'У вас няма дазволу на стварэнне гэтага дакумента.',
  /** The explanation when unable to create a particular type of document */
  'insufficient-permissions-message.not-authorized-explanation_create-document-type':
    'У вас няма дазволу на стварэнне гэтага тыпу дакумента.',
  /** The explanation when unable to create a new reference in a document */
  'insufficient-permissions-message.not-authorized-explanation_create-new-reference':
    'У вас няма дазволу на стварэнне новай спасылкі.',
  /** The explanation when unable to delete a particular document */
  'insufficient-permissions-message.not-authorized-explanation_delete-document':
    'У вас няма дазволу на выдаленне гэтага дакумента.',
  /** The explanation when unable to discard changes in a particular document */
  'insufficient-permissions-message.not-authorized-explanation_discard-changes':
    'У вас няма дазволу на адхіленне змен у гэтым дакуменце.',
  /** The explanation when unable to duplicate a particular document */
  'insufficient-permissions-message.not-authorized-explanation_duplicate-document':
    'У вас няма дазволу на дубляванне гэтага дакумента.',
  /** The explanation when unable to publish a particular document */
  'insufficient-permissions-message.not-authorized-explanation_publish-document':
    'У вас няма дазволу на публікацыю гэтага дакумента.',
  /** The explanation when unable to unpublish a particular document */
  'insufficient-permissions-message.not-authorized-explanation_unpublish-document':
    'У вас няма дазволу на зняцце з публікацыі гэтага дакумента.',
  /** Appears after the not-authorized message. Lists the current roles. */
  'insufficient-permissions-message.roles': 'Вашыя ролі: <Roles/>',
  /** The title for the insufficient permissions message component */
  'insufficient-permissions-message.title': 'Недастатковыя правы',

  /** Unexpected error: `{{error}}` */
  'member-field-error.unexpected-error': 'Нечаканая памылка: {{error}}',

  /** Button label for "Create new document" button */
  'new-document.button': 'Стварыць',
  /**
   * Tooltip message displayed when hovering/activating the "Create new document" action,
   * when there are templates/types available for creation
   */
  'new-document.create-new-document-label': 'Новы дакумент…',
  /** Placeholder for the "filter" input within the new document menu */
  'new-document.filter-placeholder': 'Фільтр',
  /** Loading indicator text within the new document menu */
  'new-document.loading': 'Загрузка…',
  /** Accessibility label for the list displaying options in the new document menu */
  'new-document.new-document-aria-label': 'Новы дакумент',
  /** Message for when there are no document type options in the new document menu */
  'new-document.no-document-types-found': 'Тыпы дакументаў не знойдзены',
  /**
   * Tooltip message displayed when hovering/activating the "Create new document" action,
   * when there are no templates/types to create from
   */
  'new-document.no-document-types-label': 'Няма тыпаў дакументаў',
  /** Message for when no results are found for a specific search query in the new document menu */
  'new-document.no-results': 'Няма вынікаў для <strong>{{searchQuery}}</strong>',
  /** Aria label for the button that opens the "Create new document" popover/dialog */
  'new-document.open-dialog-aria-label': 'Стварыць новы дакумент',
  /** Title for "Create new document" dialog */
  'new-document.title': 'Стварыць новы дакумент',

  /** Label for action to manage members of the current studio project */
  'presence.action.manage-members': 'Кіраванне ўдзельнікамі',
  /** Accessibility label for presence menu button */
  'presence.aria-label': 'Хто тут',
  /** Message description for when no one else is currently present */
  'presence.no-one-else-description': 'Запрасіце людзей у праект, каб бачыць іх статус анлайн.',
  /** Message title for when no one else is currently present */
  'presence.no-one-else-title': 'Тут нікога няма',
  /** Message for when a user is not in a document (displayed in the global presence menu) */
  'presence.not-in-a-document': 'Не ў дакуменце',
  /** Tooltip content text for presence menu button */
  'presence.tooltip-content': undefined, // 'Who is here'

  /** Fallback title shown when a preview does not provide a title */
  'preview.default.title-fallback': 'Без назвы',
  /** Fallback preview value for types that have "no value" (eg null, undefined) */
  'preview.fallback.no-value': '(няма значэння)',
  /** Alternative text for image being shown while image is being uploaded, in previews */
  'preview.image.file-is-being-uploaded.alt-text': 'Малюнак, які зараз загружаецца',

  /* Relative time, just now */
  'relative-time.just-now': 'толькі што',

  /** Accessibility label to open search action when the search would go fullscreen (eg on narrower screens) */
  'search.action-open-aria-label': 'Адкрыць пошук',
  /** Action label for adding a search filter */
  'search.action.add-filter': 'Дадаць фільтр',
  /** Action label for clearing search filters */
  'search.action.clear-filters': 'Ачысціць фільтры',
  /** Label for action to clear recent searches */
  'search.action.clear-recent-searches': 'Ачысціць апошнія пошукі',
  /** Accessibility label for action to clear all currently applied document type filters */
  'search.action.clear-type-filters-aria-label': 'Ачысціць абраныя фільтры',
  /** Label for action to clear all currently applied document type filters */
  'search.action.clear-type-filters-label': 'Ачысціць',
  /** Accessibility label for when the search is full screen (on narrow screens) and you want to close the search */
  'search.action.close-search-aria-label': 'Зачыніць пошук',
  /** Accessibility label for filtering by document type */
  'search.action.filter-by-document-type-aria-label': 'Фільтраваць па тыпе дакумента',
  /** Accessibility action label for removing an already applied search filter */
  'search.action.remove-filter-aria-label': 'Выдаліць фільтр',
  /**
   * Text displayed when either no document type(s) have been selected, or we need a fallback,
   * eg "Search for all types".
   */
  'search.action.search-all-types': 'Шукаць усе дакументы',
  /**
   * Text displayed when we are able to determine one or more document types that will be used for
   * searching, and can fit within the space assigned by the design.
   */
  'search.action.search-specific-types': 'Шукаць {{types, list}}',
  /** Dialog title for action to select an asset of unknown type */
  'search.action.select-asset': 'Выбраць рэсурс',
  /** Dialog title for action to select a file asset */
  'search.action.select-asset_file': 'Выбраць файл',
  /** Dialog title for action to select an image asset */
  'search.action.select-asset_image': 'Выбраць малюнак',
  /** Accessibility label for when the search is full screen (on narrow screens) and you want to hide filters */
  'search.action.toggle-filters-aria-label_hide': 'Схаваць фільтры',
  /** Accessibility label for when the search is full screen (on narrow screens) and you want to show filters */
  'search.action.toggle-filters-aria-label_show': 'Паказаць фільтры',
  /** Label for when the search is full screen (on narrow screens) and you want to hide filters */
  'search.action.toggle-filters-label_hide': 'Схаваць фільтры',
  /** Label for when the search is full screen (on narrow screens) and you want to show filters */
  'search.action.toggle-filters-label_show': 'Паказаць фільтры',
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
  'search.document-type-list-all-types': 'Усе тыпы',
  /** Accessibility label for list displaying the available document types */
  'search.document-types-aria-label': 'Тыпы дакументаў',
  /** Label for when no document types matching the filter are found */
  'search.document-types-no-matches-found': 'Няма супадзенняў для {{filter}}',
  /** Description for error when a filter cannot be displayed, describes that you should check the schema */
  'search.error.display-filter-description':
    'Гэта можа азначаць няправільныя параметры, вызначаныя ў вашай схеме.',
  /** Title for error when a filter cannot be displayed (mainly a developer-oriented error) */
  'search.error.display-filter-title': 'Пры адлюстраванні гэтага фільтра адбылася памылка.',
  /** Description for error when no valid asset source is found, describes that you should check the the current studio config */
  'search.error.no-valid-asset-source-check-config-description':
    'Калі ласка, пераканайцеся, што ён уключаны ў файл канфігурацыі вашай студыі.',
  /** Description for error when no valid asset source is found, describes that only the default asset is supported */
  'search.error.no-valid-asset-source-only-default-description':
    'На дадзены момант падтрымліваецца толькі стандартная крыніца рэсурсаў.',
  /** Title for error when no valid asset sources found */
  'search.error.no-valid-asset-source-title': 'Не знойдзены дапушчальныя крыніцы рэсурсаў.',
  /** Helpful description for when search returned an error that we are not able to describe in detail */
  'search.error.unspecified-error-help-description':
    'Калі ласка, паспрабуйце яшчэ раз або праверце вашае злучэнне',
  /** Title label for when search returned an error that we are not able to describe in detail */
  'search.error.unspecified-error-title': 'Падчас пошуку адбылася памылка',
  /**
   * Label for "All fields", a label that appears above the list of available fields when filtering.
   * If one or more document type has been chosen as filter, this label is replaced with a group of
   * fields per selected document type
   */
  'search.filter-all-fields-header': 'Усе палі',
  /** Label for the action of changing from one file to a different file in asset search filter */
  'search.filter-asset-change_file': 'Змяніць файл',
  /** Label for the action of changing from one image to a different image in asset search filter */
  'search.filter-asset-change_image': 'Змяніць малюнак',
  /** Label for the action of clearing the currently selected asset in an image/file filter */
  'search.filter-asset-clear': 'Ачысціць',
  /** Label for the action of selecting a file in asset search filter */
  'search.filter-asset-select_file': 'Выбраць файл',
  /** Label for the action of selecting an image in asset search filter */
  'search.filter-asset-select_image': 'Выбраць малюнак',
  /** Label for boolean filter - false */
  'search.filter-boolean-false': 'Няправільна',
  /** Label for boolean filter - true */
  'search.filter-boolean-true': 'Праўда',
  /** Accessibility label for list that lets you filter fields by title, when adding a new filter in search */
  'search.filter-by-title-aria-label': 'Фільтраваць па назве',
  /** Accessibility label for date filter input */
  'search.filter-date-aria-label': 'Дата',
  /** Accessibility label for selecting end date on the date range search filter */
  'search.filter-date-range-end-date-aria-label': 'Дата заканчэння',
  /** Accessibility label for selecting start date on the date range search filter */
  'search.filter-date-range-start-date-aria-label': 'Дата пачатку',
  /**
   * Label for "Days"/"Months"/"Years" when selecting it as unit in "X days ago" search filter.
   * Capitalized, as it would be listed in a dropdown.
   */
  'search.filter-date-unit_days': 'Дні',
  'search.filter-date-unit_months': 'Месяцы',
  'search.filter-date-unit_years': 'Гады',
  /** Accessibility label for selecting the unit (day/month/year) when adding "X days ago" search filter */
  'search.filter-date-unit-aria-label': 'Выбраць адзінку',
  /** Accessibility label for the input value (days/months/years) when adding "X days ago" search filter */
  'search.filter-date-value-aria-label': 'Значэнне адзінкі',
  /** Label for "field description" shown in tooltip when navigating list of possible fields to filter */
  'search.filter-field-tooltip-description': 'Апісанне поля',
  /** Label for "field name" shown in tooltip when navigating list of possible fields to filter */
  'search.filter-field-tooltip-name': 'Назва поля',
  /** Label for "Used in document types", a list of the document types a field appears in. Shown in tooltip when navigating list of possible fields to filter */
  'search.filter-field-tooltip-used-in-document-types': 'Выкарыстоўваецца ў тыпах дакументаў',
  /** Label for when no fields/filters are found for the given term */
  'search.filter-no-matches-found': 'Няма супадзенняў для {{filter}}',
  /** Placeholder value for maximum numeric value filter */
  'search.filter-number-max-value-placeholder': 'Максімальнае значэнне',
  /** Placeholder value for minimum numeric value filter */
  'search.filter-number-min-value-placeholder': 'Мінімальнае значэнне',
  /** Placeholder value for the number filter */
  'search.filter-number-value-placeholder': 'Значэнне',
  /** Placeholder for the "Filter" input, when narrowing possible fields/filters */
  'search.filter-placeholder': 'Фільтр',
  /** Label for the action of clearing the currently selected document in a reference filter */
  'search.filter-reference-clear': 'Ачысціць',
  /**
   * Label for "shared fields", a label that appears above a list of fields that all filtered types
   * have in common, when adding a new filter. For instance, if "book" and "employee" both have a
   * "title" field, this field would be listed under "shared fields".
   * */
  'search.filter-shared-fields-header': 'Агульныя палі',
  /** Placeholder value for the string filter */
  'search.filter-string-value-placeholder': 'Значэнне',
  /** Label/placeholder prompting user to select one of the predefined, allowed values for a string field */
  'search.filter-string-value-select-predefined-value': 'Выбраць…',
  /** Accessibility label for the "Filters" list, that is shown when using "Add filter" in search (singular) */
  'search.filters-aria-label_one': 'Фільтр',
  /** Label for instructions on how to use the search - displayed when no recent searches are available */
  'search.instructions': 'Выкарыстоўвайце <ControlsIcon/>, каб удакладніць пошук',
  /** Helpful description for when no search results are found */
  'search.no-results-help-description': 'Паспрабуйце іншае ключавое слова або наладзьце фільтры',
  /** Title label for when no search results are found */
  'search.no-results-title': 'Вынікаў не знойдзена',
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
    '<Field/> <Operator>мае</Operator> <Value>{{count}} элемент</Value>',
  'search.operator.array-count-equal.name': 'колькасць роўная',
  /* Array should have a count greater than given filter value */
  'search.operator.array-count-gt.description_one':
    '<Field/> <Operator>мае ></Operator> <Value>{{count}} элемент</Value>',
  'search.operator.array-count-gt.name': 'колькасць большая за',
  /* Array should have a count greater than or equal to the given filter value */
  'search.operator.array-count-gte.description_one':
    '<Field/> <Operator>мае ≥</Operator> <Value>{{count}} элемент</Value>',
  'search.operator.array-count-gte.name': 'колькасць большая або роўная',
  /* Array should have a count less than given filter value */
  'search.operator.array-count-lt.description_one':
    '<Field/> <Operator>мае <</Operator> <Value>{{count}} элемент</Value>',
  'search.operator.array-count-lt.name': 'колькасць меншая за',
  /* Array should have a count less than or equal to the given filter value */
  'search.operator.array-count-lte.description_one':
    '<Field/> <Operator>мае ≤</Operator> <Value>{{count}} элемент</Value>',
  'search.operator.array-count-lte.name': 'колькасць меншая або роўная',
  /* Array should have a count that is not equal to the given filter value */
  'search.operator.array-count-not-equal.description_one':
    '<Field/> <Operator>не мае</Operator> <Value>{{count}} элемент</Value>',
  'search.operator.array-count-not-equal.name': 'колькасць не роўная',
  /**
   * Array should have a count within the range of given filter values.
   * Gets passed `{{from}}` and `{{to}}` values.
   **/
  'search.operator.array-count-range.description':
    '<Field/> <Operator>мае паміж</Operator> <Value>{{from}} → {{to}} элементаў</Value>',
  'search.operator.array-count-range.name': 'колькасць паміж',
  /* Array should include the given value */
  'search.operator.array-list-includes.description':
    '<Field/> <Operator>ўключае</Operator> <Value>{{value}}</Value>',
  'search.operator.array-list-includes.name': 'ўключае',
  /* Array should not include the given value */
  'search.operator.array-list-not-includes.description':
    '<Field/> <Operator>не ўключае</Operator> <Value>{{value}}</Value>',
  'search.operator.array-list-not-includes.name': 'не ўключае',
  /* Array should include the given reference */
  'search.operator.array-reference-includes.description':
    '<Field/> <Operator>ўключае</Operator> <Value>{{value}}</Value>',
  'search.operator.array-reference-includes.name': 'уключае',
  /* Array should not include the given reference */
  'search.operator.array-reference-not-includes.description':
    '<Field/> <Operator>не ўключае</Operator> <Value>{{value}}</Value>',
  'search.operator.array-reference-not-includes.name': 'не ўключае',
  /* Asset (file) should be the selected asset */
  'search.operator.asset-file-equal.description':
    "<Field/> <Operator>з'яўляецца</Operator> <Value>{{value}}</Value>",
  'search.operator.asset-file-equal.name': "з'яўляецца",
  /* Asset (file) should not be the selected asset */
  'search.operator.asset-file-not-equal.description':
    "<Field/> <Operator>не з'яўляецца</Operator> <Value>{{value}}</Value>",
  'search.operator.asset-file-not-equal.name': "не з'яўляецца",
  /* Asset (image) should be the selected asset */
  'search.operator.asset-image-equal.description':
    "<Field/> <Operator>з'яўляецца</Operator> <Value>{{value}}</Value>",
  'search.operator.asset-image-equal.name': "з'яўляецца",
  /* Asset (image) should not be the selected asset */
  'search.operator.asset-image-not-equal.description':
    "<Field/> <Operator>не з'яўляецца</Operator> <Value>{{value}}</Value>",
  'search.operator.asset-image-not-equal.name': "не з'яўляецца",
  /**
   * Boolean value should be the given filter value (true/false).
   * Context passed is `true` and `false`, allowing for more specific translations:
   * - `search.operator.boolean-equal.description_true`
   * - `search.operator.boolean-equal.description_false`
   */
  'search.operator.boolean-equal.description':
    "<Field/> <Operator>з'яўляецца</Operator> <Value>{{value}}</Value>",
  'search.operator.boolean-equal.name': "з'яўляецца",
  /* Date should be after (later than) given filter value */
  'search.operator.date-after.description':
    '<Field/> <Operator>пасля</Operator> <Value>{{value}}</Value>',
  'search.operator.date-after.name': 'пасля',
  /* Date should be before (earlier than) given filter value */
  'search.operator.date-before.description':
    '<Field/> <Operator>да</Operator> <Value>{{value}}</Value>',
  'search.operator.date-before.name': 'да',
  /* Date should be the given filter value */
  'search.operator.date-equal.description':
    "<Field/> <Operator>з'яўляецца</Operator> <Value>{{value}}</Value>",
  'search.operator.date-equal.name': "з'яўляецца",
  /* Date should be within the given filter value range (eg "within the last X days") */
  'search.operator.date-last.description':
    '<Field/> <Operator>знаходзіцца ў апошнім</Operator> <Value>{{value}}</Value>',
  'search.operator.date-last.name': 'апошні',
  /* Date should not be the given filter value */
  'search.operator.date-not-equal.description':
    "<Field/> <Operator>не з'яўляецца</Operator> <Value>{{value}}</Value>",
  'search.operator.date-not-equal.name': "не з'яўляецца",
  /* Date should be within the range of given filter values */
  'search.operator.date-range.description':
    '<Field/> <Operator>знаходзіцца паміж</Operator> <Value/>',
  'search.operator.date-range.name': 'знаходзіцца паміж',
  /* Date and time should be after (later than) given filter value */
  'search.operator.date-time-after.description':
    '<Field/> <Operator>пасля</Operator> <Value>{{value}}</Value>',
  'search.operator.date-time-after.name': 'пасля',
  /* Date and time should be before (earlier than) given filter value */
  'search.operator.date-time-before.description':
    '<Field/> <Operator>да</Operator> <Value>{{value}}</Value>',
  'search.operator.date-time-before.name': 'да',
  /* Date and time should be the given filter value */
  'search.operator.date-time-equal.description':
    "<Field/> <Operator>з'яўляецца</Operator> <Value>{{value}}</Value>",
  'search.operator.date-time-equal.name': "з'яўляецца",
  /* Date and time should be within the given filter value range (eg "within the last X days") */
  'search.operator.date-time-last.description':
    '<Field/> <Operator>знаходзіцца ў апошнім</Operator> <Value>{{value}}</Value>',
  'search.operator.date-time-last.name': 'апошні',
  /* Date and time should not be the given filter value */
  'search.operator.date-time-not-equal.description':
    "<Field/> <Operator>не з'яўляецца</Operator> <Value>{{value}}</Value>",
  'search.operator.date-time-not-equal.name': "не з'яўляецца",
  /* Date and time should be within the range of given filter values */
  'search.operator.date-time-range.description':
    '<Field/> <Operator>знаходзіцца паміж</Operator> <Value/>',
  'search.operator.date-time-range.name': 'знаходзіцца паміж',
  /* Value should be defined */
  'search.operator.defined.description':
    "<Field/> <Operator>з'яўляецца</Operator> <Value>не пустым</Value>",
  'search.operator.defined.name': 'не пусты',
  /* Value should not be defined */
  'search.operator.not-defined.description':
    "<Field/> <Operator>з'яўляецца</Operator> <Value>пустым</Value>",
  'search.operator.not-defined.name': 'пусты',
  /* Number should be the given filter value */
  'search.operator.number-equal.description':
    "<Field/> <Operator>з'яўляецца</Operator> <Value>{{value}}</Value>",
  'search.operator.number-equal.name': "з'яўляецца",
  /* Number should be greater than given filter value */
  'search.operator.number-gt.description':
    '<Field/> <Operator>></Operator> <Value>{{value}}</Value>',
  'search.operator.number-gt.name': 'больш за',
  /* Number should be greater than or the given filter value */
  'search.operator.number-gte.description':
    '<Field/> <Operator>≥</Operator> <Value>{{value}}</Value>',
  'search.operator.number-gte.name': 'больш за або роўна',
  /* Number should be less than given filter value */
  'search.operator.number-lt.description':
    '<Field/> <Operator><</Operator> <Value>{{value}}</Value>',
  'search.operator.number-lt.name': 'менш за',
  /* Number should be less than or the given filter value */
  'search.operator.number-lte.description':
    '<Field/> <Operator>≤</Operator> <Value>{{value}}</Value>',
  'search.operator.number-lte.name': 'менш або роўна',
  /* Number should not be the given filter value */
  'search.operator.number-not-equal.description':
    "<Field/> <Operator>не з'яўляецца</Operator> <Value>{{value}}</Value>",
  'search.operator.number-not-equal.name': "не з'яўляецца",
  /* Number should be within the range of given filter values */
  'search.operator.number-range.description':
    '<Field/> <Operator>знаходзіцца паміж</Operator> <Value>{{from}} → {{to}}</Value>',
  'search.operator.number-range.name': 'знаходзіцца паміж',
  /* Portable Text should contain the given filter value */
  'search.operator.portable-text-contains.description':
    '<Field/> <Operator>ўтрымлівае</Operator> <Value>{{value}}</Value>',
  'search.operator.portable-text-contains.name': 'ўтрымлівае',
  /* Portable Text should be the given filter value */
  'search.operator.portable-text-equal.description':
    "<Field/> <Operator>з'яўляецца</Operator> <Value>{{value}}</Value>",
  'search.operator.portable-text-equal.name': "з'яўляецца",
  /* Portable Text should not contain the given filter value */
  'search.operator.portable-text-not-contains.description':
    '<Field/> <Operator>не ўтрымлівае</Operator> <Value>{{value}}</Value>',
  'search.operator.portable-text-not-contains.name': 'не ўтрымлівае',
  /* Portable Text should not be the given filter value */
  'search.operator.portable-text-not-equal.description':
    "<Field/> <Operator>не з'яўляецца</Operator> <Value>{{value}}</Value>",
  'search.operator.portable-text-not-equal.name': "не з'яўляецца",
  /* References the given asset (file) */
  'search.operator.reference-asset-file.description':
    '<Field/> <Operator>→</Operator> <Value>{{value}}</Value>',
  'search.operator.reference-asset-file.name': 'файл',
  /* References the given asset (image) */
  'search.operator.reference-asset-image.description':
    '<Field/> <Operator>→</Operator> <Value>{{value}}</Value>',
  'search.operator.reference-asset-image.name': 'малюнак',
  /* References the given document */
  'search.operator.reference-document.description':
    '<Field/> <Operator>→</Operator> <Value>{{value}}</Value>',
  'search.operator.reference-document.name': 'дакумент',
  /* Reference should be the given document */
  'search.operator.reference-equal.description':
    "<Field/> <Operator>з'яўляецца</Operator> <Value>{{value}}</Value>",
  'search.operator.reference-equal.name': "з'яўляецца",
  /* Reference should not be the given document */
  'search.operator.reference-not-equal.description':
    "<Field/> <Operator>не з'яўляецца</Operator> <Value>{{value}}</Value>",
  'search.operator.reference-not-equal.name': "не з'яўляецца",
  /* Slug contains the given value */
  'search.operator.slug-contains.description':
    '<Field/> <Operator>ўтрымлівае</Operator> <Value>{{value}}</Value>',
  'search.operator.slug-contains.name': 'ўтрымлівае',
  /* Slug equals the given filter value */
  'search.operator.slug-equal.description':
    "<Field/> <Operator>з'яўляецца</Operator> <Value>{{value}}</Value>",
  'search.operator.slug-equal.name': "з'яўляецца",
  /* Slug does not contain the given value */
  'search.operator.slug-not-contains.description':
    '<Field/> <Operator>не ўтрымлівае</Operator> <Value>{{value}}</Value>',
  'search.operator.slug-not-contains.name': 'не ўтрымлівае',
  /* Slug does not equal the given filter value */
  'search.operator.slug-not-equal.description':
    "<Field/> <Operator>не з'яўляецца</Operator> <Value>{{value}}</Value>",
  'search.operator.slug-not-equal.name': "не з'яўляецца",
  /* String contains the given filter value */
  'search.operator.string-contains.description':
    '<Field/> <Operator>ўтрымлівае</Operator> <Value>{{value}}</Value>',
  'search.operator.string-contains.name': 'ўтрымлівае',
  /* String equals the given filter value */
  'search.operator.string-equal.description':
    "<Field/> <Operator>з'яўляецца</Operator> <Value>{{value}}</Value>",
  'search.operator.string-equal.name': "з'яўляецца",
  /* String equals one of the predefined allowed values */
  'search.operator.string-list-equal.description':
    "<Field/> <Operator>з'яўляецца</Operator> <Value>{{value}}</Value>",
  'search.operator.string-list-equal.name': "з'яўляецца",
  /* String does not equal one of the predefined allowed values */
  'search.operator.string-list-not-equal.description':
    "<Field/> <Operator>не з'яўляецца</Operator> <Value>{{value}}</Value>",
  'search.operator.string-list-not-equal.name': "не з'яўляецца",
  /* String does not contain the given filter value */
  'search.operator.string-not-contains.description':
    '<Field/> <Operator>не ўтрымлівае</Operator> <Value>{{value}}</Value>',
  'search.operator.string-not-contains.name': 'не ўтрымлівае',
  /* String does not equal the given filter value */
  'search.operator.string-not-equal.description':
    "<Field/> <Operator>не з'яўляецца</Operator> <Value>{{value}}</Value>",
  'search.operator.string-not-equal.name': "не з'яўляецца",
  /** Label for the "Best match" search ordering type */
  'search.ordering.best-match-label': 'Найлепшае супадзенне',
  /** Label for the "Created: Oldest first" search ordering type */
  'search.ordering.created-ascending-label': 'Створана: Спачатку старыя',
  /** Label for the "Created: Newest first" search ordering type */
  'search.ordering.created-descending-label': 'Створана: Спачатку новыя',
  /** Label for the "Updated: Oldest first" search ordering type */
  'search.ordering.updated-ascending-label': 'Абноўлена: Спачатку старыя',
  /** Label for the "Updated: Newest first" search ordering type */
  'search.ordering.updated-descending-label': 'Абноўлена: Спачатку новыя',
  /** Placeholder text for the global search input field */
  'search.placeholder': 'Пошук',
  /** Accessibility label for the recent searches section, shown when no valid search terms has been given */
  'search.recent-searches-aria-label': 'Апошнія пошукі',
  /** Label/heading shown for the recent searches section */
  'search.recent-searches-label': 'Апошнія пошукі',
  /** Accessibility label for the search results section, shown when the user has typed valid terms */
  'search.search-results-aria-label': 'Вынікі пошуку',

  /** Accessibility label for the navbar status button */
  'status-button.aria-label': undefined, // 'Configuration status'

  /** Description for error when the timeline for the given document can't be loaded */
  'timeline.error.load-document-changes-description':
    'Транзакцыі гісторыі дакументаў не былі загружаны.',
  /** Title for error when the timeline for the given document can't be loaded */
  'timeline.error.load-document-changes-title': 'Пры атрыманні зменаў дакумента адбылася памылка.',
  /** Error description for when the document doesn't have history */
  'timeline.error.no-document-history-description':
    "Пры змене змесціва дакумента версіі дакумента будуць з'яўляцца ў гэтым меню.",
  /** Error title for when the document doesn't have history */
  'timeline.error.no-document-history-title': 'Няма гісторыі дакумента',
  /** Error prompt when revision cannot be loaded */
  'timeline.error.unable-to-load-revision': 'Немагчыма загрузіць рэвізію',
  /** Label for when the timeline item is the latest in the history */
  'timeline.latest': 'Апошняя',
  /** Label for latest version for timeline menu dropdown */
  'timeline.latest-version': 'Апошняя версія',
  /** The aria-label for the list of revisions in the timeline */
  'timeline.list.aria-label': 'Рэвізіі дакумента',
  /** Label for loading history */
  'timeline.loading-history': 'Загрузка гісторыі…',
  /** Label shown in review changes timeline when a document has been created */
  'timeline.operation.created': 'Створана',
  /** Label shown in review changes timeline when a document has been created, with a timestamp */
  'timeline.operation.created_timestamp': 'Створана: {{timestamp, datetime}}',
  /** Label shown in review changes timeline when a document was initially created */
  'timeline.operation.created-initial': 'Створана',
  /** Label shown in review changes timeline when a document was initially created, with a timestamp */
  'timeline.operation.created-initial_timestamp': 'Створана: {{timestamp, datetime}}',
  /** Label shown in review changes timeline when a document has been deleted */
  'timeline.operation.deleted': 'Выдалена',
  /** Label shown in review changes timeline when a document has been deleted, with a timestamp */
  'timeline.operation.deleted_timestamp': 'Выдалена: {{timestamp, datetime}}',
  /** Label shown in review changes timeline when a draft has been discarded */
  'timeline.operation.draft-discarded': 'Чарнавік адхілены',
  /** Label shown in review changes timeline when a draft has been discarded, with a timestamp */
  'timeline.operation.draft-discarded_timestamp': 'Чарнавік адхілены: {{timestamp, datetime}}',
  /** Label shown in review changes timeline when a draft has been edited */
  'timeline.operation.edited-draft': 'Адрэдагавана',
  /** Label shown in review changes timeline when a draft has been edited, with a timestamp */
  'timeline.operation.edited-draft_timestamp': 'Адрэдагавана: {{timestamp, datetime}}',
  /** Label shown in review changes timeline when a document has been edited live */
  'timeline.operation.edited-live': 'Адрэдагавана ў рэжыме рэальнага часу',
  /** Label shown in review changes timeline when a document has been edited live, with a timestamp */
  'timeline.operation.edited-live_timestamp':
    'Адрэдагавана ў рэжыме рэальнага часу: {{timestamp, datetime}}',
  /** Label shown in review changes timeline when a document was published */
  'timeline.operation.published': 'Апублікавана',
  /** Label shown in review changes timeline when a document was published, with a timestamp */
  'timeline.operation.published_timestamp': 'Апублікавана: {{timestamp, datetime}}',
  /** Label shown in review changes timeline when a document was unpublished */
  'timeline.operation.unpublished': 'Неапублікавана',
  /** Label shown in review changes timeline when a document was unpublished, with a timestamp */
  'timeline.operation.unpublished_timestamp': 'Неапублікавана: {{timestamp, datetime}}',
  /**
   * Label for determining since which version the changes for timeline menu dropdown are showing.
   * Receives the time label as a parameter (`timestamp`).
   */
  'timeline.since': 'З: {{timestamp, datetime}}',
  /** Label for missing change version for timeline menu dropdown are showing */
  'timeline.since-version-missing': 'З: невядомая версія',

  /**Aria label for the action buttons in the PTE toolbar */
  'toolbar.portable-text.action-button-aria-label': undefined, // '{{action}}'

  /** Label for button showing the free trial days left */
  'user-menu.action.free-trial_one': '{{count}} дзень засталося ў пробным перыядзе',
  /** Label for the button showed after trial ended */
  'user-menu.action.free-trial-finished': 'Перайсці з бясплатнай версіі',
  /** Label for action to invite members to the current sanity project */
  'user-menu.action.invite-members': 'Запрасіць удзельнікаў',
  /** Accessibility label for action to invite members to the current sanity project */
  'user-menu.action.invite-members-aria-label': 'Запрасіць удзельнікаў',
  /** Label for action to manage the current sanity project */
  'user-menu.action.manage-project': 'Кіраваць праектам',
  /** Accessibility label for the action to manage the current project */
  'user-menu.action.manage-project-aria-label': 'Кіраваць праектам',
  /** Tooltip helper text when portable text annotation is disabled for empty block*/
  'user-menu.action.portable-text.annotation-disabled_empty-block':
    'Немагчыма прымяніць {{name}} да пустога блока',
  /** Tooltip helper text when portable text annotation is disabled for multiple blocks */
  'user-menu.action.portable-text.annotation-disabled_multiple-blocks':
    'Немагчыма прымяніць {{name}} да некалькіх блокаў',
  /** Label for action to sign out of the current sanity project */
  'user-menu.action.sign-out': 'Выйсці',
  /** Title for appearance section for the current studio (dark / light / system scheme) */
  'user-menu.appearance-title': 'Знешні выгляд',
  /** Label for close menu button for user menu */
  'user-menu.close-menu': 'Зачыніць меню',
  /** Description for using the "dark theme" in the appearance user menu */
  'user-menu.color-scheme.dark-description': 'Выкарыстоўваць цёмную тэму',
  /** Title for using the "dark theme" in the appearance user menu */
  'user-menu.color-scheme.dark-title': 'Цёмная',
  /** Description for using the "light theme" in the appearance user menu */
  'user-menu.color-scheme.light-description': 'Выкарыстоўваць светлую тэму',
  /** Title for using the "light theme" in the appearance user menu */
  'user-menu.color-scheme.light-title': 'Светлая',
  /** Description for using "system apparence" in the appearance user menu */
  'user-menu.color-scheme.system-description': 'Выкарыстоўваць сістэмную тэму',
  /** Title for using system apparence in the appearance user menu */
  'user-menu.color-scheme.system-title': 'Сістэма',
  /** Title for locale section for the current studio */
  'user-menu.locale-title': 'Мова',
  /** Label for tooltip to show which provider the currently logged in user is using */
  'user-menu.login-provider': 'Увайшлі з {{providerTitle}}',
  /** Label for open menu button for user menu */
  'user-menu.open-menu': 'Адкрыць меню',

  /**
   * Label for action to add a workspace (currently a developer-oriented action, as this will
   * lead to the documentation on workspace configuration)
   */
  'workspaces.action.add-workspace': 'Дадаць працоўны прастор',
  /**
   * Label for action to choose a different workspace, in the case where you are not logged in,
   * have selected a workspace, and are faced with the authentication options for the selected
   * workspace. In other words, label for the action shown when you have reconsidered which
   * workspace to authenticate in.
   */
  'workspaces.action.choose-another-workspace': 'Выбраць іншы працоўны прастор',
  /** Label for heading that indicates that you can choose your workspace */
  'workspaces.choose-your-workspace-label': 'Выберыце ваш працоўны прастор',
  /** Label for the workspace menu */
  'workspaces.select-workspace-aria-label': 'Выбраць працоўны прастор',
  /** Button label for opening the workspace switcher */
  'workspaces.select-workspace-label': 'Выбраць працоўны прастор',
  /** Tooltip for the workspace menu */
  'workspaces.select-workspace-tooltip': 'Выбраць працоўную вобласць',
  /** Title for Workplaces dropdown menu */
  'workspaces.title': 'Працоўныя прасторы',
})
