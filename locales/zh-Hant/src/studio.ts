import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Menu item for deleting the asset */
  'asset-source.asset-list.menu.delete': '刪除',
  /** Menu item for showing where a particular asset is used */
  'asset-source.asset-list.menu.show-usage': '顯示用途',
  /** Header in usage dialog for file assets */
  'asset-source.asset-usage-dialog.header_file': '使用檔案的文件',
  /** Header in usage dialog for image assets */
  'asset-source.asset-usage-dialog.header_image': '使用圖片的文件',
  /** Text shown in usage dialog when loading documents using the selected asset */
  'asset-source.asset-usage-dialog.loading': '加載中…',
  /** Text for cancel action in delete-asset dialog */
  'asset-source.delete-dialog.action.cancel': '取消',
  /** Text for "confirm delete" action in delete-asset dialog */
  'asset-source.delete-dialog.action.delete': '刪除',
  /** Dialog header for delete-asset dialog when deleting a file */
  'asset-source.delete-dialog.header_file': '刪除檔案',
  /** Dialog header for delete-asset dialog when deleting an image */
  'asset-source.delete-dialog.header_image': '刪除圖片',
  /** Text shown in delete dialog when loading documents using the selected asset */
  'asset-source.delete-dialog.loading': '加載中…',
  /** Message confirming to delete *named* file */
  'asset-source.delete-dialog.usage-list.confirm-delete-file_named':
    '您即將刪除檔案<strong>{{filename}}}</strong>及其元數據。您確定嗎？',
  /** Message confirming to delete *unnamed* file */
  'asset-source.delete-dialog.usage-list.confirm-delete-file_unnamed':
    '您即將刪除檔案及其元數據。您確定嗎？',
  /** Message confirming to delete *named* image */
  'asset-source.delete-dialog.usage-list.confirm-delete-image_named':
    '您即將刪除圖片<strong>{{filename}}</strong>及其元數據。您確定嗎？',
  /** Message confirming to delete *unnamed* image */
  'asset-source.delete-dialog.usage-list.confirm-delete-image_unnamed':
    '您即將刪除圖片及其元數據。您確定嗎？',
  /** Alt text showing on image preview in delete asset dialog  */
  'asset-source.delete-dialog.usage-list.image-preview-alt': '圖片預覽',
  /** Warning message showing when *named* file can't be deleted because it is in use */
  'asset-source.delete-dialog.usage-list.warning-file-is-in-use_named':
    '{{filename}}無法刪除，因為它正在被使用。要刪除此檔案，您首先需要移除其所有用途。',
  /** Warning message showing when *unnamed* file can't be deleted because it is in use */
  'asset-source.delete-dialog.usage-list.warning-file-is-in-use_unnamed':
    '此檔案無法刪除，因為它正在被使用。要刪除它，您首先需要移除其所有用途。',
  /** Warning message showing when *named* image can't be deleted because it is in use */
  'asset-source.delete-dialog.usage-list.warning-image-is-in-use_named':
    '{{filename}}無法刪除，因為它正在被使用。要刪除此圖片，您首先需要移除其所有用途。',
  /** Warning message showing when *unnamed* image can't be deleted because it is in use */
  'asset-source.delete-dialog.usage-list.warning-image-is-in-use_unnamed':
    '此圖片無法刪除，因為它正在被使用。要刪除它，您首先需要移除其所有用途。',
  /** Text shown when the list of assets only include a specific set of types */
  'asset-source.dialog.accept-message': '僅顯示接受類型的資產：<strong>{{acceptTypes}}</strong>',
  /** Keys shared between both image asset source and file asset source */
  /** Select asset dialog title for files */
  'asset-source.dialog.default-title_file': '選擇檔案',
  /** Select asset dialog title for images */
  'asset-source.dialog.default-title_image': '選擇圖片',
  /** Select asset dialog load more items */
  'asset-source.dialog.load-more': '加載更多',
  /** Text shown when selecting a file but there's no files to select from */
  'asset-source.dialog.no-assets_file': '沒有檔案',
  /** Text shown when selecting an image but there's no images to select from */
  'asset-source.dialog.no-assets_image': '沒有圖片',
  'asset-source.file.asset-list.action.delete.disabled-cannot-delete-current-file':
    '無法刪除當前選擇的文件',
  'asset-source.file.asset-list.action.delete.text': '刪除',
  'asset-source.file.asset-list.action.delete.title': '刪除文件',
  'asset-source.file.asset-list.action.select-file.title': '選擇文件 {{filename}}',
  'asset-source.file.asset-list.action.show-usage.title': '顯示使用情況',
  'asset-source.file.asset-list.delete-failed': '文件無法被刪除',
  'asset-source.file.asset-list.delete-successful': '文件已被刪除',
  'asset-source.file.asset-list.header.date-added': '添加日期',
  /** File asset source */
  'asset-source.file.asset-list.header.filename': '文件名',
  'asset-source.file.asset-list.header.size': '大小',
  'asset-source.file.asset-list.header.type': '類型',
  /** Text displayed on button or menu invoking the file asset source */
  'asset-source.file.title': '已上傳文件',
  'asset-source.image.asset-list.delete-failed': '圖片無法被刪除',
  /** Image asset source */
  'asset-source.image.asset-list.delete-successful': '圖片已被刪除',
  /** Text displayed on button or menu invoking the image asset source */
  'asset-source.image.title': '已上傳圖片',
  'asset-source.usage-list.documents-using-file_named_other':
    '{{count}}份文件正在使用文件<code>{{filename}}</code>',
  /** Text shown in usage dialog for a file asset when there are zero, one or more documents using the *named* file **/
  'asset-source.usage-list.documents-using-file_named_zero':
    '沒有文件正在使用文件<code>{{filename}}</code>',
  'asset-source.usage-list.documents-using-file_unnamed_other': '{{count}}份文件正在使用這個文件',
  /** Text shown in usage dialog for a file asset when there are zero, one or more documents using the *unnamed* file **/
  'asset-source.usage-list.documents-using-file_unnamed_zero': '沒有文件正在使用這個文件',
  'asset-source.usage-list.documents-using-image_named_other':
    '{{count}}份文件正在使用圖片<code>{{filename}}</code>',
  /** Text shown in usage dialog for an image asset when there are zero, one or more documents using the *named* image **/
  'asset-source.usage-list.documents-using-image_named_zero':
    '沒有文件正在使用圖片<code>{{filename}}</code>',
  'asset-source.usage-list.documents-using-image_unnamed_other': '{{count}}份文件正在使用這張圖片',
  /** Text shown in usage dialog for an image asset when there are zero, one or more documents using the *unnamed* image **/
  'asset-source.usage-list.documents-using-image_unnamed_zero': '沒有文件正在使用這張圖片',

  /** Action message for navigating to next month */
  'calendar.action.go-to-next-month': '前往下個月',
  /** Action message for navigating to next year */
  'calendar.action.go-to-next-year': '前往下一年',
  /** Action message for navigating to previous month */
  'calendar.action.go-to-previous-month': '前往上個月',
  /** Action message for navigating to previous year */
  'calendar.action.go-to-previous-year': '前往上一年',
  /* Label for navigating the calendar to "today", without _selecting_ today. Short form, eg `Today`, not `Go to today` */
  'calendar.action.go-to-today': '今天',
  /* Accessibility label for navigating the calendar to "today", without _selecting_ today */
  'calendar.action.go-to-today-aria-label': '前往今天',
  /* Label for navigating the calendar to "tomorrow", without _selecting_ tomorrow. Short form, eg `Tomorrow`, not `Go to tomorrow` */
  'calendar.action.go-to-tomorrow': '明天',
  /* Label for navigating the calendar to "yesterday", without _selecting_ yesterday. Short form, eg `Yesterday`, not `Go to yesterday` */
  'calendar.action.go-to-yesterday': '昨天',
  /** Label for switch that controls whether or not to include time in given timestamp */
  'calendar.action.include-time-label': '包括時間',
  /** Action message for selecting the hour */
  'calendar.action.select-hour': '選擇小時',
  /** Action message for selecting the minute */
  'calendar.action.select-minute': '選擇分鐘',
  /** Action message for setting to the current time */
  'calendar.action.set-to-current-time': '設為當前時間',
  /** Label for selecting an hour preset. Receives a `time` param as a string on hh:mm format and a `date` param as a Date instance denoting the preset date */
  'calendar.action.set-to-time-preset': '{{time}} 在 {{date, datetime}}',
  /** Error message displayed in calendar when entered date is not the correct format */
  'calendar.error.must-be-in-format': '必須是以下格式 <Emphasis>{{exampleDate}}</Emphasis>',
  /** Month name for April */
  'calendar.month-names.april': '四月',
  /** Month name for August */
  'calendar.month-names.august': '八月',
  /** Month name for December */
  'calendar.month-names.december': '十二月',
  /** Month name for February */
  'calendar.month-names.february': '二月',
  /** Month name for January */
  'calendar.month-names.january': '一月',
  /** Month name for July */
  'calendar.month-names.july': '七月',
  /** Month name for June */
  'calendar.month-names.june': '六月',
  /** Month name for March */
  'calendar.month-names.march': '三月',
  /** Month name for May */
  'calendar.month-names.may': '五月',
  /** Month name for November */
  'calendar.month-names.november': '十一月',
  /** Month name for October */
  'calendar.month-names.october': '十月',
  /** Month name for September */
  'calendar.month-names.september': '九月',
  /** Short weekday name for Friday */
  'calendar.weekday-names.short.friday': '週五',
  /** Short weekday name for Monday */
  'calendar.weekday-names.short.monday': '週一',
  /** Short weekday name for Saturdayday */
  'calendar.weekday-names.short.saturday': '週六',
  /** Short weekday name for Sunday */
  'calendar.weekday-names.short.sunday': '週日',
  /** Short weekday name for Thursday */
  'calendar.weekday-names.short.thursday': '週四',
  /** Short weekday name for Tuesday */
  'calendar.weekday-names.short.tuesday': '週二',
  /** Short weekday name for Wednesday */
  'calendar.weekday-names.short.wednesday': '週三',

  /** Label for the close button label in Review Changes pane */
  'changes.action.close-label': '關閉審查更改',
  /** Cancel label for revert button prompt action */
  'changes.action.revert-all-cancel': '取消',
  /** Revert all confirm label for revert button action - used on prompt button + review changes pane */
  'changes.action.revert-all-confirm': '全部還原',
  /** Revert for confirming revert (plural) label for field change action */
  'changes.action.revert-changes-confirm-change_other': '還原更改',
  /** Prompt for reverting changes for a field change */
  'changes.action.revert-changes-description': '您確定要還原這些更改嗎？',
  /** Label for when the action of the change was to set something that was previously empty, eg a field was given a value, an array item was added, an asset was selected or similar */
  'changes.added-label': '已添加',
  /** Array diff: An item was added in a given position (`{{position}}`) */
  'changes.array.item-added-in-position': '在位置 {{position}} 添加',
  'changes.array.item-moved_down_other': '向下移動 {{count}} 個位置',
  'changes.array.item-moved_up_other': '向上移動 {{count}} 個位置',
  /** Array diff: An item was removed from a given position (`{{position}}`) */
  'changes.array.item-removed-from-position': '從位置 {{position}} 移除',
  /** Accessibility label for the "change bar" shown when there are edits on a field-level */
  'changes.change-bar.aria-label': '審查更改',
  /** Label for when the action of the change was _not_ an add/remove, eg a text field changed value, an image was changed from one asset to another or similar */
  'changes.changed-label': '已更改',
  /** Label and text for tooltip that indicates the authors of the changes */
  'changes.changes-by-author': '更改者',
  /** Additional text shown in development mode when a diff component crashes during rendering */
  'changes.error-boundary.developer-info': '檢查開發者控制台以獲取更多信息',
  /** Text shown when a diff component crashes during rendering, triggering the error boundary */
  'changes.error-boundary.title': '渲染此字段的更改時發生錯誤',
  /** Error message shown when the value of a field is not the expected one */
  'changes.error.incorrect-type-message':
    '值錯誤：值的類型為 "<code>{{actualType}}</code>"，預期為 "<code>{{expectedType}}</code>"',
  /** File diff: Fallback title for the meta info section when there is no original filename to use  */
  'changes.file.meta-info-fallback-title': '無標題',
  /** Image diff: Text shown in tooltip when hovering hotspot that has changed in diff view */
  'changes.image.crop-changed': '裁剪已更改',
  /** Image diff: Text shown if the previous image asset was deleted (shouldn't theoretically happen) */
  'changes.image.deleted': '圖片已刪除',
  /** Image diff: Text shown if the image failed to be loaded when previewing it */
  'changes.image.error-loading-image': '加載圖片出錯',
  /** Image diff: Text shown in tooltip when hovering hotspot that has changed in diff view */
  'changes.image.hotspot-changed': '熱點已更改',
  /** Image diff: Fallback title for the meta info section when there is no original filename to use  */
  'changes.image.meta-info-fallback-title': '無標題',
  /** Image diff: Text shown if no asset has been set for the field (but has metadata changes) */
  'changes.image.no-asset-set': '未設置圖片',
  /** Image diff: Text shown when the from/to state has/had no image */
  'changes.image.no-image-placeholder': '（無圖片）',
  /** Label for the "from" value in the change inspector */
  'changes.inspector.from-label': '從',
  /** Label for the "meta" (field path, action etc) information in the change inspector */
  'changes.inspector.meta-label': '元數據',
  /** Label for the "to" value in the change inspector */
  'changes.inspector.to-label': '到',
  /** Loading author of change in the differences tooltip in the review changes pane */
  'changes.loading-author': '加載中…',
  /** Loading changes in Review Changes Pane */
  'changes.loading-changes': '正在加載更改…',
  /** No Changes description in the Review Changes pane */
  'changes.no-changes-description':
    '編輯文檔或在時間線中選擇較舊的版本，以在此面板中看到更改列表。',
  /** No Changes title in the Review Changes pane */
  'changes.no-changes-title': '沒有更改',
  /** Portable Text diff: An annotation was added */
  'changes.portable-text.annotation_added': '已添加批註',
  /** Portable Text diff: An annotation was changed */
  'changes.portable-text.annotation_changed': '已更改批註',
  /** Portable Text diff: An annotation was removed */
  'changes.portable-text.annotation_removed': '已移除批註',
  /** Portable Text diff: An annotation was left unchanged */
  'changes.portable-text.annotation_unchanged': '批註未更改',
  /** Portable Text diff: A block changed from one style to another (eg `normal` to `h1` or similar) */
  'changes.portable-text.block-style-changed': '已從「{{fromStyle}}」更改塊樣式為「{{toStyle}}」',
  /** Portable Text diff: Change formatting of text (setting/unsetting marks, eg bold/italic etc) */
  'changes.portable-text.changed-formatting': '已更改格式',
  /** Portable Text diff: An empty inline object is part of a change */
  'changes.portable-text.empty-inline-object': '空的{{inlineObjectType}}',
  /** Portable Text diff: An empty object is the result of adding/removing an annotation */
  'changes.portable-text.empty-object-annotation': '空的{{annotationType}}',
  /** Portable Text diff: Added a block containing no text (eg empty block) */
  'changes.portable-text.empty-text_added': '已添加空文本',
  /** Portable Text diff: Changed a block that contained no text (eg empty block) */
  'changes.portable-text.empty-text_changed': '已更改空文本',
  /** Portable Text diff: Removed a block containing no text (eg empty block) */
  'changes.portable-text.empty-text_removed': '已移除空文本',
  /** Portable Text diff: An inline object was added */
  'changes.portable-text.inline-object_added': '已添加內聯對象',
  /** Portable Text diff: An inline object was changed */
  'changes.portable-text.inline-object_changed': '已更改內聯對象',
  /** Portable Text diff: An inline object was removed */
  'changes.portable-text.inline-object_removed': '移除了內嵌物件',
  /** Portable Text diff: An inline object was left unchanged */
  'changes.portable-text.inline-object_unchanged': '未變更的內嵌物件',
  /** Portable Text diff: Added a chunk of text */
  'changes.portable-text.text_added': '新增了文字',
  /** Portable Text diff: Removed a chunk of text */
  'changes.portable-text.text_removed': '移除了文字',
  /** Portable Text diff: Annotation has an unknown schema type */
  'changes.portable-text.unknown-annotation-schema-type': '未知的標註架構類型',
  /** Portable Text diff: Inline object has an unknown schema type */
  'changes.portable-text.unknown-inline-object-schema-type': '未知的內嵌物件架構類型',
  /** Label for when the action of the change was a removal, eg a field was cleared, an array item was removed, an asset was deselected or similar */
  'changes.removed-label': '已移除',
  /** Title for the Review Changes pane */
  'changes.title': '審查變更',

  /** --- Common components --- */
  /** Tooltip text for context menu buttons */
  'common.context-menu-button.tooltip': '顯示更多',
  /** Default text for dialog cancel button */
  'common.dialog.cancel-button.text': '取消',
  /** Default text for dialog confirm button */
  'common.dialog.confirm-button.text': '確認',
  /** Default text in shared loader text / spinner lockup */
  'common.loading': '加載中',

  /** --- Configuration issues --- */
  /** Tooltip displayed on configuration issues button */
  'configuration-issues.button.tooltip': '發現配置問題',

  /** The fallback title for an ordering menu item if no localized titles are provided. */
  'default-menu-item.fallback-title': '按 {{title}} 排序',

  /** Title for the default ordering/SortOrder if no orderings are provided and the caption field is found */
  'default-orderings.caption': '按標題排序',
  /** Title for the default ordering/SortOrder if no orderings are provided and the description field is found */
  'default-orderings.description': '按描述排序',
  /** Title for the default ordering/SortOrder if no orderings are provided and the header field is found */
  'default-orderings.header': '按標頭排序',
  /** Title for the default ordering/SortOrder if no orderings are provided and the heading field is found */
  'default-orderings.heading': '按標題排序',
  /** Title for the default ordering/SortOrder if no orderings are provided and the label field is found */
  'default-orderings.label': '按標籤排序',
  /** Title for the default ordering/SortOrder if no orderings are provided and the name field is found */
  'default-orderings.name': '按名稱排序',
  /** Title for the default ordering/SortOrder if no orderings are provided and the title field is found */
  'default-orderings.title': '按標題排序',

  /** Label to show in the document footer indicating the last edited date of the document */
  'document-status.edited': '編輯於 {{date}}',
  /** Label to show in the document footer indicating the document is not published*/
  'document-status.not-published': '未發布',
  /** Label to show in the document footer indicating the published date of the document */
  'document-status.published': '發布於 {{date}}',

  /** The value of the <code>_key</code> property must be a unique string. */
  'form.error.duplicate-keys-alert.details.additional-description':
    'The value of the <code>_key</code> property must be a unique string.',
  /** This usually happens when items are created using an API client, and the <code>_key</code> property of each elements has been generated non-uniquely. */
  'form.error.duplicate-keys-alert.details.description':
    'This usually happens when items are created using an API client, and the <code>_key</code> property of each elements has been generated non-uniquely.',
  /** Developer info */
  'form.error.duplicate-keys-alert.details.title': '開發者資訊',
  /** Generate unique keys */
  'form.error.duplicate-keys-alert.generate-button.text': '生成唯一鍵值',
  /** Several items in this list share the same identifier (key). Every item must have an unique identifier. */
  'form.error.duplicate-keys-alert.summary':
    '這個列表中的幾個項目共享相同的標識符（鍵）。每個項目必須有一個唯一的標識符。',
  /** Non-unique keys */
  'form.error.duplicate-keys-alert.title': '鍵值不唯一',
  /** Error text shown when a field with a given name cannot be found in the schema or is conditionally hidden but explicitly told to render  */
  'form.error.field-not-found':
    '字段 "{{fieldName}}" 在成員中未找到 – 請確認它已在架構中定義並且沒有被條件隱藏。',
  /** Add missing keys */
  'form.error.missing-keys-alert.add-button.text': '添加缺失的鍵值',
  /** The value of the <code>_key</code> property must be a unique string. */
  'form.error.missing-keys-alert.details.additional-description':
    'The value of the <code>_key</code> property must be a unique string.',
  /** This usually happens when items are created using an API client, and the <code>_key</code> property has not been included. */
  'form.error.missing-keys-alert.details.description':
    'This usually happens when items are created using an API client, and the <code>_key</code> property has not been included.',
  /** Developer info */
  'form.error.missing-keys-alert.details.title': '開發者資訊',
  /** Some items in the list are missing their keys. This must be fixed in order to edit the list. */
  'form.error.missing-keys-alert.summary':
    '列表中的一些項目缺少鍵值。必須修正這個問題才能編輯列表。',
  /** Missing keys */
  'form.error.missing-keys-alert.title': '缺少鍵值',
  /** This usually happens when items are created using an API client, or when a custom input component has added invalid data to the list. */
  'form.error.mixed-array-alert.details.description':
    'This usually happens when items are created using an API client, or when a custom input component has added invalid data to the list.',
  /** Developer info */
  'form.error.mixed-array-alert.details.title': '開發者資訊',
  /**  Remove non-object values */
  'form.error.mixed-array-alert.remove-button.text': '移除非物件值',
  /** Some items in this list are not objects. This must be fixed in order to edit the list. */
  'form.error.mixed-array-alert.summary':
    '這個列表中的一些項目不是物件。必須修正這個問題才能編輯列表。',
  /** Invalid list values */
  'form.error.mixed-array-alert.title': '無效的列表值',
  /** Error text shown when form is unable to find an array item at a given indexed path */
  'form.error.no-array-item-at-index':
    '在路徑 <code>{{path}}</code> 上未找到索引 <code>{{index}}</code> 的陣列項目',
  /** Error text shown when form is unable to find an array item at a given keyed path */
  'form.error.no-array-item-at-key':
    '在路徑 <code>{{path}}</code> 上未找到 `_key` <code>"{{key}}"</code> 的陣列項目',
  /** Form field deprecated label */
  'form.field.deprecated-label': '已棄用',
  /** Fallback title shown above field if it has no defined title */
  'form.field.untitled-field-label': '無標題',
  /** Fallback title shown above fieldset if it has no defined title */
  'form.field.untitled-fieldset-label': '無標題',
  /** Accessibility label for the icon that indicates the field has a validation error */
  'form.validation.has-error-aria-label': '有錯誤',
  /** Accessibility label for the icon that indicates the field has validation information */
  'form.validation.has-info-aria-label': '有資訊',
  /** Accessibility label for the icon that indicates the field has a validation warning */
  'form.validation.has-warning-aria-label': '有警告',
  'form.validation.summary.errors-count_other': '{{count}} 個錯誤',
  'form.validation.summary.warnings-count_other': '{{count}} 個警告',

  'free-trial.tooltip.days-count_other': '{{count}} 天試用期剩餘',
  /** Tooltip for free trial navbar button, once trial has ended */
  'free-trial.tooltip.trial-finished': '升級您的項目',

  /**
   * Label for "contact sales" call to action
   * These are titles for fallback links in the event the help & resources endpoint isn't able to be fetched
   */
  'help-resources.action.contact-sales': '聯繫銷售',
  /**
   * Label for "help and support" call to action
   * These are titles for fallback links in the event the help & resources endpoint isn't able to be fetched
   */
  'help-resources.action.help-and-support': '幫助與支持',
  /**
   * Label for "join our community" call to action
   * These are titles for fallback links in the event the help & resources endpoint isn't able to be fetched
   */
  'help-resources.action.join-our-community': '加入我們的社群',
  /** Information for what the latest sanity version is */
  'help-resources.latest-sanity-version': '最新版本是 {{latestVersion}}',
  /** Information for what studio version the current studio is running */
  'help-resources.studio-version': 'Sanity Studio 版本 {{studioVersion}}',
  /** Title for help and resources menus */
  'help-resources.title': '幫助與資源',

  /** Text for button to cancel an ongoing upload */
  'input.files.common.cancel-upload': '取消上傳',
  /** Text for file input button in upload placeholder */
  'input.files.common.upload-placeholder.file-input-button.text': '上傳',
  /** Uploading <FileName/> */
  'input.files.common.upload-progress': '正在上傳 <FileName/>',
  /** The referenced document cannot be opened, because the URL failed to be resolved */
  'input.reference.document-cannot-be-opened.failed-to-resolve-url':
    '無法打開此文件（無法解析 URL 到 Studio）',

  /** Label for adding item after a specific array item */
  'inputs.array.action.add-after': '在之後添加項目',
  /** Label for adding item before a specific array item */
  'inputs.array.action.add-before': '在之前添加項目',
  /** Label for adding array item action when the schema allows for only one schema type */
  'inputs.array.action.add-item': '添加項目',
  /**
   * Label for adding one array item action when the schema allows for multiple schema types,
   * eg. will prompt the user to select a type once triggered
   */
  'inputs.array.action.add-item-select-type': '添加項目...',
  /** Array drag handle button tooltip */
  'inputs.array.action.drag.tooltip': '拖動以重新排序',
  /** Label for duplicating an array item  */
  'inputs.array.action.duplicate': '複製',
  /** Label for editing the item of a specific type, eg "Edit Person" */
  'inputs.array.action.edit': '編輯 {{itemTypeTitle}}',
  /** Label for removing an array item action  */
  'inputs.array.action.remove': '移除',
  /** Label for removing action when an array item has an error  */
  'inputs.array.action.remove-invalid-item': '移除',
  /** Label for viewing the item of a specific type, eg "View Person" */
  'inputs.array.action.view': '查看{{itemTypeTitle}}',
  /** Error description for the array item tooltip that explains that the current item can still be moved or deleted but not edited since the schema definition is not found */
  'inputs.array.error.can-delete-but-no-edit-description':
    '您仍然可以移動或刪除此項目，但由於找不到其類型的架構定義，因此無法編輯。',
  /** Error label for toast when array could not resolve the initial value */
  'inputs.array.error.cannot-resolve-initial-value-title':
    '無法為類型解析初始值：{{schemaTypeTitle}}：{{errorMessage}}。',
  /** Error label for toast when trying to upload multiple array items of a type that cannot be converted to array */
  'inputs.array.error.cannot-upload-unable-to-convert_other':
    '以下項目無法上傳，因為沒有已知的從內容類型到陣列項目的轉換：',
  /** Error description for the array item tooltip that explains that the current type item is not valid for the list  */
  'inputs.array.error.current-schema-not-declare-description':
    '當前架構沒有聲明類型<code>{{typeName}}</code>的項目對此列表有效。這可能意味著該類型已被移除為有效項目類型，或者有人將其添加到他們自己的本地架構中，該架構尚未部署。',
  /** Error description to show how the item is being represented in the json format */
  'inputs.array.error.json-representation-description': '此項目的JSON表示形式：',
  /** Error description for the array item tooltip that explains what the error means with more context */
  'inputs.array.error.type-is-incompatible-prompt':
    '類型<code>{{typeName}}</code>的項目對此列表無效',
  /** Error title for when an item type within an array input is incompatible, used in the tooltip */
  'inputs.array.error.type-is-incompatible-title': '為什麼會這樣？',
  /** Error label for unexpected errors in the Array Input */
  'inputs.array.error.unexpected-error': '意外錯誤：{{error}}',
  /** Label for when the array input doesn't have any items */
  'inputs.array.no-items-label': '沒有項目',
  /** Label for read only array fields */
  'inputs.array.read-only-label': '此欄位為唯讀',
  /** Label for when the array input is resolving the initial value for the item */
  'inputs.array.resolving-initial-value': '正在解析初始值…',
  /** Placeholder value for datetime input */
  'inputs.datetime.placeholder': '例如 {{example}}',
  /** Acessibility label for button to open file options menu */
  'inputs.file.actions-menu.file-options.aria-label': '打開文件選項菜單',
  /** Browse */
  'inputs.file.browse-button.text': '瀏覽',
  /** Select file */
  'inputs.file.dialog.title': '選擇文件',
  /** Unknown member kind: `{{kind}}` */
  'inputs.file.error.unknown-member-kind': '未知成員類型：{{kind}}',
  /** The value of this field is not a valid file. Resetting this field will let you choose a new file. */
  'inputs.file.invalid-file-warning.description':
    '此欄位的值不是有效的文件。重置此欄位將允許您選擇新文件。',
  /** Reset value */
  'inputs.file.invalid-file-warning.reset-button.text': '重置值',
  /** Invalid file value */
  'inputs.file.invalid-file-warning.title': '文件值無效',
  /** Select */
  'inputs.file.multi-browse-button.text': '選擇',
  /** The upload could not be completed at this time. */
  'inputs.file.upload-failed.description': '此時無法完成上傳。',
  /** Upload failed */
  'inputs.file.upload-failed.title': '上傳失敗',
  /** Clear field */
  'inputs.files.common.actions-menu.clear-field.label': '清除欄位',
  /** Copy URL */
  'inputs.files.common.actions-menu.copy-url.label': '複製網址',
  /** Download */
  'inputs.files.common.actions-menu.download.label': '下載',
  /** The URL is copied to the clipboard */
  'inputs.files.common.actions-menu.notification.url-copied': '網址已複製到剪貼簿',
  /** Replace */
  'inputs.files.common.actions-menu.replace.label': '替換',
  /** Upload */
  'inputs.files.common.actions-menu.upload.label': '上傳',
  /** Drop to upload */
  'inputs.files.common.drop-message.drop-to-upload': '拖放以上傳',
  /** Drop to upload `{{count}}` files */
  'inputs.files.common.drop-message.drop-to-upload-multi_other': '拖放以上傳 {{count}} 個檔案',
  /** Can't upload any of these files here */
  'inputs.files.common.drop-message.drop-to-upload.no-accepted-file-message_other':
    '無法在此上傳任何檔案',
  /** `{{count}}` files can't be uploaded here */
  'inputs.files.common.drop-message.drop-to-upload.rejected-file-message_other':
    '{{count}} 個檔案無法在此上傳',
  'inputs.files.common.placeholder.cannot-upload-some-files_other': '無法上傳 {{count}} 個檔案',
  /** Drag or paste type here */
  'inputs.files.common.placeholder.drag-or-paste-to-upload_file': '拖曳或貼上檔案到這裡',
  /** Drag or paste image here */
  'inputs.files.common.placeholder.drag-or-paste-to-upload_image': '拖曳或貼上圖片到這裡',
  /** Drop to upload file */
  'inputs.files.common.placeholder.drop-to-upload_file': '拖放以上傳檔案',
  /** Drop to upload image */
  'inputs.files.common.placeholder.drop-to-upload_image': '拖放以上傳圖片',
  /** Read only */
  'inputs.files.common.placeholder.read-only': '唯讀',
  /** Can't upload files here */
  'inputs.files.common.placeholder.upload-not-supported': '無法在此上傳檔案',
  /** Clear upload */
  'inputs.files.common.stale-upload-warning.clear': '清除上傳',
  /** An upload has made no progress for at least `{{staleThresholdMinutes}}` minutes and likely got interrupted. You can safely clear the incomplete upload and try uploading again. */
  'inputs.files.common.stale-upload-warning.description':
    '一個上傳已經至少 {{staleThresholdMinutes}} 分鐘沒有進展，很可能已經中斷。您可以安全地清除未完成的上傳並再次嘗試上傳。',
  /** Incomplete upload */
  'inputs.files.common.stale-upload-warning.title': '未完成的上傳',
  /** Tooltip text for action to crop image */
  'inputs.image.actions-menu.crop-image-tooltip': '裁剪圖片',
  /** Accessibility label for button to open image edit dialog */
  'inputs.image.actions-menu.edit-details.aria-label': '開啟圖片編輯對話框',
  /** Accessibility label for button to open image options menu */
  'inputs.image.actions-menu.options.aria-label': '開啟圖片選項菜單',
  /** Select */
  'inputs.image.browse-menu.text': '選擇',
  /** Cannot upload this file here */
  'inputs.image.drag-overlay.cannot-upload-here': '無法在此上傳此檔案',
  /** Drop image to upload */
  'inputs.image.drag-overlay.drop-to-upload-image': '拖放圖片以上傳',
  /** This field is read only */
  'inputs.image.drag-overlay.this-field-is-read-only': '此欄位為唯讀',
  /** Unknown member kind: `{{kind}}` */
  'inputs.image.error.unknown-member-kind': '未知的成員類型：{{kind}}',
  /** Edit hotspot and crop */
  'inputs.image.hotspot-dialog.title': '編輯熱點和裁剪',
  /** The value of this field is not a valid image. Resetting this field will let you choose a new image. */
  'inputs.image.invalid-image-warning.description':
    '此欄位的值不是有效的圖片。重置此欄位將讓您選擇新圖片。',
  /** Reset value */
  'inputs.image.invalid-image-warning.reset-button.text': '重置值',
  /** Invalid image value */
  'inputs.image.invalid-image-warning.title': '無效的圖片值',
  /** Preview of uploaded image */
  'inputs.image.preview-uploaded-image': '上傳圖片的預覽',
  /** The upload could not be completed at this time. */
  'inputs.image.upload-error.description': '目前無法完成上傳。',
  /** Upload failed */
  'inputs.image.upload-error.title': '上傳失敗',
  /** Adjust the rectangle to crop image. Adjust the circle to specify the area that should always be visible. */
  'inputs.imagetool.description': '調整矩形以裁剪圖片。調整圓圈以指定應始終可見的區域。',
  /** Error: `{{errorMessage}}` */
  'inputs.imagetool.load-error': '錯誤：{{errorMessage}}',
  /** Hotspot & Crop */
  'inputs.imagetool.title': '熱點 & 裁剪',
  /** Convert to `{{targetType}}` */
  'inputs.invalid-value.convert-button.text': '轉換為<code>{{targetType}}</code>',
  /** The current value (<code>`{{actualType}}`</code>) */
  'inputs.invalid-value.current-type': '當前值（<code>{{actualType}}</code>）',
  /** The property value is stored as a value type that does not match the expected type. */
  'inputs.invalid-value.description': '屬性值以不符合預期類型的值類型存儲。',
  /** The value of this property must be of type <code>`{{validType}}`</code> according to the schema. */
  'inputs.invalid-value.details.description':
    '根據架構，此屬性的值必須是<code>{{validType}}</code>類型。',
  /** Only the following types are valid here according to schema: */
  'inputs.invalid-value.details.multi-type-description': '根據架構，這裡只有以下類型是有效的：',
  /** Mismatching value types typically occur when the schema has recently been changed. */
  'inputs.invalid-value.details.possible-reason':
    '當架構最近發生變化時，通常會出現不匹配的值類型。',
  /** Developer info */
  'inputs.invalid-value.details.title': '開發者資訊',
  /** -- Invalid Value Input -- */
  /** Reset value */
  'inputs.invalid-value.reset-button.text': '重置值',
  /** Invalid property value */
  'inputs.invalid-value.title': '無效的屬性值',
  /** Field groups */
  'inputs.object.field-group-tabs.aria-label': '欄位群組',
  /** Read-only field description */
  'inputs.object.unknown-fields.read-only.description':
    '根據文件的架構，此欄位為<strong>唯讀</strong>，不能被取消設置。如果您希望在Studio中能夠取消設置此欄位，請確保您從架構中的封閉類型中移除<code>readOnly</code>欄位。',
  /** Remove field */
  'inputs.object.unknown-fields.remove-field-button.text': '移除欄位',
  'inputs.object.unknown-fields.warning.description_other': '遇到{{count}}個未在架構中定義的欄位。',
  'inputs.object.unknown-fields.warning.details.description_other':
    '這些欄位未在文件的架構中定義，這可能意味著欄位定義已被移除，或者有人在他們自己的本地項目中添加了這些欄位，並且還沒有部署他們的更改。',
  /** Developer info */
  'inputs.object.unknown-fields.warning.details.title': '開發者資訊',
  'inputs.object.unknown-fields.warning.title_other': '發現未知欄位',
  /** Collapse the editor to save screen space  */
  'inputs.portable-text.action.collapse-editor': '摺疊編輯器',
  /** Aria label for action to edit an existing annotation */
  'inputs.portable-text.action.edit-annotation-aria-label': '編輯批註',
  /** Expand the editor to give more editing space */
  'inputs.portable-text.action.expand-editor': '展開編輯器',
  /** Label label for action to insert a block of a given type (`{{typeName}}`) */
  'inputs.portable-text.action.insert-block': '插入{{typeName}}',
  /** Accessibility label for action to insert a block of a given type (`{{typeName}}`) */
  'inputs.portable-text.action.insert-block-aria-label': '插入{{typeName}}（區塊）',
  /** Label for action to insert an inline object of a given type (`{{typeName}}`) */
  'inputs.portable-text.action.insert-inline-object': '插入{{typeName}}',
  /** Accessibility label for action to insert an inline object of a given type (`{{typeName}}`) */
  'inputs.portable-text.action.insert-inline-object-aria-label': '插入{{typeName}}（內聯）',
  /** Aria label for action to remove an annotation */
  'inputs.portable-text.action.remove-annotation-aria-label': '移除批註',
  /** Label for activate on focus with context of click and not focused */
  'inputs.portable-text.activate-on-focus-message_click': '點擊以啟動',
  /** Label for activate on focus with context of click and focused */
  'inputs.portable-text.activate-on-focus-message_click-focused': '點擊或按空格以啟動',
  /** Label for activate on focus with context of tap and not focused */
  'inputs.portable-text.activate-on-focus-message_tap': '輕觸以啟動',
  /**Aria label for the annotation object */
  'inputs.portable-text.annotation-aria-label': '批註物件',
  /** Title for dialog that allows editing an annotation */
  'inputs.portable-text.annotation-editor.title': '編輯{{schemaType}}',
  /** Title of the default "link" annotation */
  'inputs.portable-text.annotation.link': '鏈接',
  /**Aria label for the block object */
  'inputs.portable-text.block.aria-label': '塊物件',
  /** Label for action to edit a block item, in the case where it is editable */
  'inputs.portable-text.block.edit': '編輯',
  /** Accessibility label for the button that opens the actions menu on blocks */
  'inputs.portable-text.block.open-menu-aria-label': '打開菜單',
  /** Label for action to open a reference, in the case of block-level reference types */
  'inputs.portable-text.block.open-reference': '打開參考',
  /** Label for action to remove a block item */
  'inputs.portable-text.block.remove': '移除',
  /** Label for action to view a block item, in the case where it is read-only and thus cannot be edited */
  'inputs.portable-text.block.view': '查看',
  /** Title of the "code" decorator */
  'inputs.portable-text.decorator.code': '代碼',
  /** Title of the "em" (emphasis) decorator */
  'inputs.portable-text.decorator.emphasis': '斜體',
  /** Title of the "strike-through" decorator */
  'inputs.portable-text.decorator.strike-through': '刪除線',
  /** Title of the "strong" decorator */
  'inputs.portable-text.decorator.strong': '加粗',
  /** Title of the "underline" decorator */
  'inputs.portable-text.decorator.underline': '下劃線',
  /** Placeholder text for when the editor is empty */
  'inputs.portable-text.empty-placeholder': '空的',
  /**Aria label for the block object */
  'inputs.portable-text.inline-block.aria-label': '內聯物件',
  /** Label for action to edit an inline object item */
  'inputs.portable-text.inline-object.edit': '編輯物件',
  /** Aria label for icon for action to edit an inline object item */
  'inputs.portable-text.inline-object.edit-aria-label': '編輯物件',
  /** Label for action to remove an inline object item */
  'inputs.portable-text.inline-object.remove': '移除物件',
  /** Aria label for icon for action to remove an inline object item */
  'inputs.portable-text.inline-object.remove-aria-label': '移除物件',
  /** Disclaimer text shown on invalid Portable Text value, when an action is available to unblock the user, but it is not guaranteed to be safe */
  'inputs.portable-text.invalid-value.action-disclaimer':
    '注意：執行上述操作通常是安全的，但如果您有疑問，請聯繫負責配置您工作室的相關人員。',
  /** Action presented when the Portable Text field value is invalid, when block with key `{{key}}` has a child with key `{{childKey}}` of type `{{childType}}` which is not allowed by the schema definition */
  'inputs.portable-text.invalid-value.disallowed-child-type.action': '移除該物件',
  /** Text explaining that the Portable Text field value is invalid, when block with key `{{key}}` has a child with key `{{childKey}}` of type `{{childType}}` which is not allowed by the schema definition */
  'inputs.portable-text.invalid-value.disallowed-child-type.description':
    '鍵為 {{childKey}} 的子項目屬於鍵為 <code>{{key}}</code> 的塊的類型為 <code>{{childType}}</code>，該類型不被模式定義允許。',
  /** Action presented when the Portable Text field value is invalid, when child with key `{{key}}` has a type (`{{typeName}}`) that is not an allowed block type for this field */
  'inputs.portable-text.invalid-value.disallowed-type.action': '移除該塊',
  /** Text explaining that the Portable Text field value is invalid, when child with key `{{key}}` has a type (`{{typeName}}`) that is not an allowed block type for this field */
  'inputs.portable-text.invalid-value.disallowed-type.description':
    '鍵為 <code>{{key}}</code> 的塊的類型為 <code>{{typeName}}</code>，該類型不被模式定義允許。',
  /** Action presented when the Portable Text field value is invalid, when block with key `{{key}}` contains no children */
  'inputs.portable-text.invalid-value.empty-children.action': '插入空的文本跨度',
  /** Text explaining that the Portable Text field value is invalid, when block with key `{{key}}` contains no children */
  'inputs.portable-text.invalid-value.empty-children.description':
    '鍵為 <code>{{key}}</code> 的文本塊沒有文本跨度。',
  /** Label for the button to ignore invalid values in the Portable Text editor */
  'inputs.portable-text.invalid-value.ignore-button.text': '忽略',
  /** Action presented when the Portable Text field value is invalid, when child with key `{{key}}` has a `_type` property that is set to `block`, but the block type defined in schema has a different name (`{{expectedTypeName}}`) */
  'inputs.portable-text.invalid-value.incorrect-block-type.action':
    '使用類型 <code>{{expectedTypeName}}</code>',
  /** Text explaining that the Portable Text field value is invalid, when child with key `{{key}}` has a `_type` property that is set to `block`, but the block type defined in schema has a different name (`{{expectedTypeName}}`) */
  'inputs.portable-text.invalid-value.incorrect-block-type.description':
    '鍵為 <code>{{key}}</code> 的塊有一個無效的類型名稱。根據模式，它應該是 <code>{{expectedTypeName}}</code>。',
  /** Action presented when the Portable Text field value is invalid, when block with key `{{key}}` has a span with key `{{childKey}}` that has a missing or invalid `text` property */
  'inputs.portable-text.invalid-value.invalid-span-text.action': '設置空的文本值',
  /** Text explaining that the Portable Text field value is invalid, when block with key `{{key}}` has a span with key `{{childKey}}` that has a missing or invalid `text` property */
  'inputs.portable-text.invalid-value.invalid-span-text.description':
    '鍵為 {{childKey}} 的跨度屬於鍵為 <code>{{key}}</code> 的塊，具有缺失或無效的 <code>text</code> 屬性。',
  /** Action presented when the Portable Text field value is invalid, when child with key `{{key}}` is missing a `_type` property, but seems to be a block of type `{{expectedTypeName}}` */
  'inputs.portable-text.invalid-value.missing-block-type.action':
    '使用類型 <code>{{expectedTypeName}}</code>',
  /** Text explaining that the Portable Text field value is invalid, when child with key `{{key}}` is missing a `_type` property, but seems to be a block of type `{{expectedTypeName}}` */
  'inputs.portable-text.invalid-value.missing-block-type.description':
    '鍵為 <code>{{key}}</code> 的塊缺少類型名稱。根據模式，它應該是 <code>{{expectedTypeName}}</code>。',
  /** Action presented when the Portable Text field value is invalid, when block with key `{{key}}` has a child at `{{index}}` which is missing `_key` property */
  'inputs.portable-text.invalid-value.missing-child-key.action': '分配隨機鍵',
  /** Text explaining that the Portable Text field value is invalid, when block with key `{{key}}` has a child at `{{index}}` which is missing `_key` property */
  'inputs.portable-text.invalid-value.missing-child-key.description':
    '鍵為 <code>{{key}}</code> 的塊在索引 <code>{{index}}</code> 處的子項目缺少 <code>_key</code> 屬性。',
  /** Action presented when the Portable Text field value is invalid, when block with key `{{key}}` has a child with key `{{childKey}}` which is missing a `_type` property */
  'inputs.portable-text.invalid-value.missing-child-type.action': '移除該物件',
  /** Text explaining that the Portable Text field value is invalid, when block with key `{{key}}` has a child with key `{{childKey}}` which is missing a `_type` property */
  'inputs.portable-text.invalid-value.missing-child-type.description':
    '鍵為 {{childKey}} 的子項目屬於鍵為 <code>{{key}}</code> 的塊缺少 <code>_type</code> 屬性。',
  /** Action presented when the Portable Text field value is invalid, when child at `{{index}}` is missing the required `_key` property */
  'inputs.portable-text.invalid-value.missing-key.action': '分配隨機鍵',
  /** Text explaining that the Portable Text field value is invalid, when child at `{{index}}` is missing the required `_key` property */
  'inputs.portable-text.invalid-value.missing-key.description':
    '位於索引<code>{{index}}</code>的區塊缺少必要的<code>_key</code>屬性。',
  /** Action presented when the Portable Text field value is invalid, when child with key `{{key}}` has a missing or invalid `children` property */
  'inputs.portable-text.invalid-value.missing-or-invalid-children.action': '移除該區塊',
  /** Text explaining that the Portable Text field value is invalid, when child with key `{{key}}` has a missing or invalid `children` property */
  'inputs.portable-text.invalid-value.missing-or-invalid-children.description':
    '鍵值為<code>{{key}}</code>的文字區塊有一個無效或缺失的`children`屬性。',
  /** Action presented when the Portable Text field value is invalid, when child with key `{{key}}` has a missing or invalid `markDefs` property */
  'inputs.portable-text.invalid-value.missing-or-invalid-markdefs.action': '添加屬性',
  /** Text explaining that the Portable Text field value is invalid, when child with key `{{key}}` has a missing or invalid `markDefs` property */
  'inputs.portable-text.invalid-value.missing-or-invalid-markdefs.description':
    '鍵值為<code>{{key}}</code>的文字區塊有一個無效或缺失的`markDefs`屬性。',
  /** Action presented when the Portable Text field value is invalid, when child with key `{{key}}` is missing a `_type` property  */
  'inputs.portable-text.invalid-value.missing-type.action': '移除該區塊',
  /** Text explaining that the Portable Text field value is invalid, when child with key `{{key}}` is missing a `_type` property  */
  'inputs.portable-text.invalid-value.missing-type.description':
    '鍵值為<code>{{key}}</code>的區塊缺少類型名稱。',
  /** Action presented when the Portable Text field value is invalid, when block with key `{{key}}` contains a non-object child at index `{{index}}` */
  'inputs.portable-text.invalid-value.non-object-child.action': '移除該項目',
  /** Text explaining that the Portable Text field value is invalid, when block with key `{{key}}` contains a non-object child at index `{{index}}` */
  'inputs.portable-text.invalid-value.non-object-child.description':
    '鍵值為<code>{{key}}</code>的區塊中索引為<code>{{index}}</code>的子項不是一個物件。',
  /** Action presented when the Portable Text field value is invalid, when the Portable Text field is not an array, or the array is empty */
  'inputs.portable-text.invalid-value.not-an-array.action': '取消設定值',
  /** Text explaining that the Portable Text field value is invalid, when the Portable Text field is not an array, or the array is empty */
  'inputs.portable-text.invalid-value.not-an-array.description':
    '值必須是一個Portable Text區塊的陣列，或未定義。',
  /** Action presented when the Portable Text field value is invalid, when child at `{{index}}` is not an object */
  'inputs.portable-text.invalid-value.not-an-object.action': '移除項目',
  /** Text explaining that the Portable Text field value is invalid, when child at `{{index}}` is not an object */
  'inputs.portable-text.invalid-value.not-an-object.description':
    '位於<code>{{index}}</code>的項目不是一個物件。',
  /** Action presented when the Portable Text field value is invalid, when block with key `{{key}}` contains marks (`{{orphanedMarks}}`) that are not supported by the current schema */
  'inputs.portable-text.invalid-value.orphaned-marks.action': '移除不允許的標記',
  /** Text explaining that the Portable Text field value is invalid, when block with key `{{key}}` contains marks (`{{orphanedMarks}}`) that are not supported by the current schema */
  'inputs.portable-text.invalid-value.orphaned-marks.description':
    '鍵值為<code>{{key}}</code>的文字區塊包含了不被架構允許的標記<code>({{orphanedMarks, list}})</code>。',
  /** Title for the alert indicating that the Portable Text field has an invalid value */
  'inputs.portable-text.invalid-value.title': '無效的Portable Text值',
  /** Title of "bulleted" list type */
  'inputs.portable-text.list-type.bullet': '項目符號列表',
  /** Title of numbered list type */
  'inputs.portable-text.list-type.number': '編號列表',
  /** Title of the "h1" block style */
  'inputs.portable-text.style.h1': '標題 1',
  /** Title of the "h2" block style */
  'inputs.portable-text.style.h2': '標題 2',
  /** Title of the "h3" block style */
  'inputs.portable-text.style.h3': '標題 3',
  /** Title of the "h4" block style */
  'inputs.portable-text.style.h4': '標題 4',
  /** Title of the "h5" block style */
  'inputs.portable-text.style.h5': '標題 5',
  /** Title of the "h6" block style */
  'inputs.portable-text.style.h6': '標題 6',
  /** Title shown when multiple blocks of varying styles is selected */
  'inputs.portable-text.style.multiple': '多種',
  /** Title of fallback when no style is given for a block */
  'inputs.portable-text.style.none': '無樣式',
  /** Title of the "normal" block style */
  'inputs.portable-text.style.normal': '正常',
  /** Title of the "quote" block style */
  'inputs.portable-text.style.quote': '引用',
  /** Label for action to clear the current value of the reference field */
  'inputs.reference.action.clear': '清除',
  /** Label for action to create a new document from the reference input */
  'inputs.reference.action.create-new-document': '創建新的',
  /** Label for action to create a new document from the reference input, when there are multiple templates or document types to choose from */
  'inputs.reference.action.create-new-document-select': '創建新文件…',
  /** Label for action to duplicate the current item to a new item (used within arrays) */
  'inputs.reference.action.duplicate': '複製',
  /** Label for action that opens the referenced document in a new tab */
  'inputs.reference.action.open-in-new-tab': '在新標籤頁中打開',
  /** Label for action to remove the reference from an array */
  'inputs.reference.action.remove': '移除',
  /** Label for action to replace the current value of the field */
  'inputs.reference.action.replace': '替換',
  /** Label for action to cancel a previously initiated replace action  */
  'inputs.reference.action.replace-cancel': '取消替換',
  /** The cross-dataset reference field currently has a reference, but the feature has been disabled since it was created. This explains what can/cannot be done in its current state. */
  'inputs.reference.cross-dataset.feature-disabled-actions':
    '您仍然可以清除此欄位的現有參考，但只要功能被禁用，就無法將其更改為不同的文檔。',
  /** A cross-dataset reference field exists but the feature has been disabled. A <DocumentationLink> component is available. */
  'inputs.reference.cross-dataset.feature-disabled-description':
    '此功能已被禁用。閱讀如何在<DocumentationLink>文檔</DocumentationLink>中啟用它。',
  /** Title for a warning telling the user that the current project does not have the "cross dataset references" feature */
  'inputs.reference.cross-dataset.feature-unavailable-title': '不可用功能：跨數據集參考',
  /** The cross-dataset reference points to a document with an invalid type  */
  'inputs.reference.cross-dataset.invalid-type': '參考的文檔類型無效 ({{typeName}}) <JsonValue/>',
  /** The referenced document will open in a new tab (due to external studio) */
  'inputs.reference.document-opens-in-new-tab': '此文檔將在新標籤頁中打開',
  /** Error title for when the document is unavailable (for any possible reason) */
  'inputs.reference.error.document-unavailable-title': '文檔不可用',
  /** Error title for when the referenced document failed to be loaded */
  'inputs.reference.error.failed-to-load-document-title': '無法加載參考文檔',
  /** Error title for when the reference search returned a document that is not an allowed type for the field */
  'inputs.reference.error.invalid-search-result-type-title':
    '搜索返回的類型對此參考無效："{{returnedType}}"',
  /** Error description for when the document referenced is not one of the types declared as allowed target types in schema */
  'inputs.reference.error.invalid-type-description':
    '參考文檔（<code>{{documentId}}</code>）的類型為<code>{{actualType}}</code>。根據模式，參考文檔只能是<AllowedTypes />類型。',
  /** Error title for when the document referenced is not one of the types declared as allowed target types in schema */
  'inputs.reference.error.invalid-type-title': '文檔類型無效',
  /** Error description for when the user does not have permissions to read the referenced document */
  'inputs.reference.error.missing-read-permissions-description': '由於權限不足，無法訪問參考文檔',
  /** Error title for when the user does not have permissions to read the referenced document */
  'inputs.reference.error.missing-read-permissions-title': '權限不足',
  /** Error description for when the current reference value points to a document that does not exist (on weak references) */
  'inputs.reference.error.nonexistent-document-description':
    '參考的文檔不存在（ID：<code>{{documentId}}</code>）。您可以選擇移除參考或用另一個文檔替換。',
  /** Error title for when the current reference value points to a document that does not exist (on weak references) */
  'inputs.reference.error.nonexistent-document-title': '未找到',
  /** Label for button that clears the reference when it points to a document that does not exist (on weak references) */
  'inputs.reference.error.nonexistent-document.clear-button-label': '清除',
  /** Error title for when the search for a reference failed. Note that the message sent by the backend may not be localized. */
  'inputs.reference.error.search-failed-title': '參考搜索失敗',
  /** Alternative text for the image shown in cross-dataset reference input */
  'inputs.reference.image-preview-alt-text': '參考文件的圖片預覽',
  /** Description for alert shown when a reference in a live-edit document is marked as being weak, the referenced document exists, AND the reference is supposed to be have been strengthened on publish */
  'inputs.reference.incomplete-reference.finalize-action-description':
    '<strong>{{referencedDocument}}</strong> 已發布，此參考現在應該被最終確定。',
  /** Title for alert shown when a reference in a live-edit document is marked as being weak, the referenced document exists, AND the reference is supposed to be have been strengthened on publish */
  'inputs.reference.incomplete-reference.finalize-action-title': '最終確定參考',
  /** Description for alert shown when a reference in a live-edit document points to a document that exists and has been published, but the reference is still marked as weak */
  'inputs.reference.incomplete-reference.strengthen-action-description':
    '<strong>{{referencedDocument}}</strong> 已發布，此參考現在應該轉換為強參考。',
  /** Title for alert shown when a reference in a live-edit document points to a document that exists and has been published, but the reference is still marked as weak */
  'inputs.reference.incomplete-reference.strengthen-action-title': '轉換為強參考',
  /** Label for button that triggers the action that strengthen a reference */
  'inputs.reference.incomplete-reference.strengthen-button-label': '轉換為強參考',
  /** Label for button that triggers a retry attempt for reference metadata  */
  'inputs.reference.metadata-error.retry-button-label': '重試',
  /** Title for alert shown when reference metadata fails to be loaded */
  'inputs.reference.metadata-error.title': '無法加載參考元數據',
  /** Message shown when no documents were found that matched the given search string */
  'inputs.reference.no-results-for-query': '沒有符合<strong>“{{searchTerm}}”</strong>的結果',
  /** Text for tooltip showing when a document was edited, using relative time (eg "how long ago was it edited?") */
  'inputs.reference.preview.edited-at-time': '編輯於<RelativeTime/>',
  /** Accessibility label for icon indicating that document does _not_ have any unpublished changes */
  'inputs.reference.preview.has-no-unpublished-changes-aria-label': '沒有未發布的編輯',
  /** Accessibility label for icon indicating that document has unpublished changes */
  'inputs.reference.preview.has-unpublished-changes-aria-label': '已編輯',
  /** Accessibility label for icon indicating that document does _not_ have a published version */
  'inputs.reference.preview.is-not-published-aria-label': '未發布',
  /** Accessibility label for icon indicating that document has a published version */
  'inputs.reference.preview.is-published-aria-label': '已發布',
  /** Text for tooltip indicating that a document has no unpublished edits */
  'inputs.reference.preview.no-unpublished-edits': '沒有未發布的編輯',
  /** Text for tooltip indicating that a document has not yet been published */
  'inputs.reference.preview.not-published': '未發布',
  /** Text for tooltip showing when a document was published, using relative time (eg "how long ago was it published?") */
  'inputs.reference.preview.published-at-time': '發布於<RelativeTime/>',
  /** The referenced document no longer exist and might have been deleted (for weak references) */
  'inputs.reference.referenced-document-does-not-exist':
    '參考的文件不再存在，可能已被刪除（文件ID：<code>{{documentId}}</code>）。',
  /** The referenced document could not be displayed to the user because of insufficient permissions */
  'inputs.reference.referenced-document-insufficient-permissions':
    '由於權限不足，無法訪問參考的文件',
  /** Label for when the reference input is resolving the initial value for an item */
  'inputs.reference.resolving-initial-value': '正在解析初始值…',
  /** Placeholder shown in a reference input with no current value */
  'inputs.reference.search-placeholder': '輸入以搜索',
  /** Explanation of the consequences of leaving the reference as strong instead of weak */
  'inputs.reference.strength-mismatch.is-strong-consquences':
    '如果不先移除此參考或將其轉換為弱參考，將無法刪除參考文件。',
  /** Description for alert shown when a reference is supposed to be weak, but the actual value is strong */
  'inputs.reference.strength-mismatch.is-strong-description':
    '此參考是<em>強</em>的，但根據當前架構它應該是<em>弱</em>的。',
  /** Explanation of the consequences of leaving the reference as weak instead of strong */
  'inputs.reference.strength-mismatch.is-weak-consquences':
    '這使得可以在不先刪除此參考的情況下刪除被參考的文檔，留下此欄位參考一個不存在的文檔。',
  /** Description for alert shown when a reference is supposed to be strong, but the actual value is weak */
  'inputs.reference.strength-mismatch.is-weak-description':
    '這個參考是<em>弱</em>的，但根據當前架構它應該是<em>強</em>的。',
  /** Label for button that triggers the action that strengthens a reference on strength mismatch */
  'inputs.reference.strength-mismatch.strengthen-button-label': '轉換為強參考',
  /** Title for alert shown when a reference is supposed to be weak/strong, but the actual value is the opposite of what it is supposed to be */
  'inputs.reference.strength-mismatch.title': '參考強度不匹配',
  /** Label for button that triggers the action that weakens a reference on strength mismatch */
  'inputs.reference.strength-mismatch.weaken-button-label': '轉換為弱參考',
  /** Action message for generating the slug */
  'inputs.slug.action.generate': '生成',
  /** Loading message for when the input is actively generating a slug */
  'inputs.slug.action.generating': '正在生成…',
  /** Error message for when the source to generate a slug from is missing */
  'inputs.slug.error.missing-source': '來源缺失。檢查架構中的類型{{schemaType}}上的來源',
  /** Placeholder for an empty tag input */
  'inputs.tags.placeholder': '輸入標籤並按 ENTER…',
  /** Placeholder for an empty tag input on touch devices */
  'inputs.tags.placeholder_touch': '輸入標籤…',
  /** Convert to `{{targetType}}` */
  'inputs.untyped-value.convert-button.text': '轉換為<code>{{targetType}}</code>',
  /** Encountered an object value without a <code>_type</code> property. */
  'inputs.untyped-value.description': '遇到一個沒有<code>_type</code>屬性的物件值。',
  /** Either remove the <code>name</code> property of the object declaration, or set <code>_type</code> property on items. */
  'inputs.untyped-value.details.description':
    '要麼移除物件聲明的<code>name</code>屬性，要麼在項目上設置<code>_type</code>屬性。',
  /** Current value (<code>object</code>): */
  'inputs.untyped-value.details.json-dump-prefix': '當前值(<code>物件</code>)：',
  /** The following types are valid here according to schema: */
  'inputs.untyped-value.details.multi-type-description': '根據架構，以下類型在這裡是有效的：',
  /** Developer info */
  'inputs.untyped-value.details.title': '開發者信息',
  /** Property value missing <code>_type</code> */
  'inputs.untyped-value.title': '屬性值缺少<code>_type</code>',
  /** Unset value */
  'inputs.untyped-value.unset-item-button.text': '取消設置值',

  /** The fallback explanation if no context is provided */
  'insufficient-permissions-message.not-authorized-explanation': '您沒有權限訪問此功能。',
  /** The explanation when unable to create any document at all */
  'insufficient-permissions-message.not-authorized-explanation_create-any-document':
    '您沒有權限創建文檔。',
  /** The explanation when unable to create a particular document */
  'insufficient-permissions-message.not-authorized-explanation_create-document':
    '您沒有權限創建此文檔。',
  /** The explanation when unable to create a particular type of document */
  'insufficient-permissions-message.not-authorized-explanation_create-document-type':
    '您沒有權限創建這種類型的文檔。',
  /** The explanation when unable to create a new reference in a document */
  'insufficient-permissions-message.not-authorized-explanation_create-new-reference':
    '您沒有權限創建新的參考。',
  /** The explanation when unable to delete a particular document */
  'insufficient-permissions-message.not-authorized-explanation_delete-document':
    '您沒有權限刪除此文檔。',
  /** The explanation when unable to discard changes in a particular document */
  'insufficient-permissions-message.not-authorized-explanation_discard-changes':
    '您沒有權限在此文檔中放棄更改。',
  /** The explanation when unable to duplicate a particular document */
  'insufficient-permissions-message.not-authorized-explanation_duplicate-document':
    '您沒有權限複製此文檔。',
  /** The explanation when unable to publish a particular document */
  'insufficient-permissions-message.not-authorized-explanation_publish-document':
    '您沒有權限發布此文檔。',
  /** The explanation when unable to unpublish a particular document */
  'insufficient-permissions-message.not-authorized-explanation_unpublish-document':
    '您沒有權限取消發布此文件。',
  /** Appears after the not-authorized message. Lists the current roles. */
  'insufficient-permissions-message.roles': '您的角色：<Roles/>',
  /** The title for the insufficient permissions message component */
  'insufficient-permissions-message.title': '權限不足',

  /** Unexpected error: `{{error}}` */
  'member-field-error.unexpected-error': '意外錯誤：{{error}}',

  /** Button label for "Create new document" button */
  'new-document.button': '創建',
  /**
   * Tooltip message displayed when hovering/activating the "Create new document" action,
   * when there are templates/types available for creation
   */
  'new-document.create-new-document-label': '新建文件…',
  /** Placeholder for the "filter" input within the new document menu */
  'new-document.filter-placeholder': '篩選',
  /** Loading indicator text within the new document menu */
  'new-document.loading': '加載中…',
  /** Accessibility label for the list displaying options in the new document menu */
  'new-document.new-document-aria-label': '新建文件',
  /** Message for when there are no document type options in the new document menu */
  'new-document.no-document-types-found': '未找到文件類型',
  /**
   * Tooltip message displayed when hovering/activating the "Create new document" action,
   * when there are no templates/types to create from
   */
  'new-document.no-document-types-label': '沒有文件類型',
  /** Message for when no results are found for a specific search query in the new document menu */
  'new-document.no-results': '對於<strong>{{searchQuery}}</strong>沒有結果',
  /** Aria label for the button that opens the "Create new document" popover/dialog */
  'new-document.open-dialog-aria-label': '創建新文件',
  /** Title for "Create new document" dialog */
  'new-document.title': '創建新文件',

  /** Label for action to manage members of the current studio project */
  'presence.action.manage-members': '管理成員',
  /** Accessibility label for presence menu button */
  'presence.aria-label': '誰在這裡',
  /** Message description for when no one else is currently present */
  'presence.no-one-else-description': '邀請人們到項目中來查看他們的在線狀態。',
  /** Message title for when no one else is currently present */
  'presence.no-one-else-title': '沒有其他人在這裡',
  /** Message for when a user is not in a document (displayed in the global presence menu) */
  'presence.not-in-a-document': '不在文件中',
  /** Tooltip content text for presence menu button */
  'presence.tooltip-content': '誰在這裡',

  /** Fallback title shown when a preview does not provide a title */
  'preview.default.title-fallback': '無標題',
  /** Fallback preview value for types that have "no value" (eg null, undefined) */
  'preview.fallback.no-value': '（無值）',
  /** Alternative text for image being shown while image is being uploaded, in previews */
  'preview.image.file-is-being-uploaded.alt-text': '當前正在上傳的圖片',

  /* Relative time, just now */
  'relative-time.just-now': '剛剛',

  /** Accessibility label to open search action when the search would go fullscreen (eg on narrower screens) */
  'search.action-open-aria-label': '打開搜索',
  /** Action label for adding a search filter */
  'search.action.add-filter': '添加篩選器',
  /** Action label for clearing search filters */
  'search.action.clear-filters': '清除篩選器',
  /** Label for action to clear recent searches */
  'search.action.clear-recent-searches': '清除最近的搜索',
  /** Accessibility label for action to clear all currently applied document type filters */
  'search.action.clear-type-filters-aria-label': '清除已勾選的篩選器',
  /** Label for action to clear all currently applied document type filters */
  'search.action.clear-type-filters-label': '清除',
  /** Accessibility label for when the search is full screen (on narrow screens) and you want to close the search */
  'search.action.close-search-aria-label': '關閉搜索',
  /** Accessibility label for filtering by document type */
  'search.action.filter-by-document-type-aria-label': '按文件類型篩選',
  /** Accessibility action label for removing an already applied search filter */
  'search.action.remove-filter-aria-label': '移除篩選器',
  /**
   * Text displayed when either no document type(s) have been selected, or we need a fallback,
   * eg "Search for all types".
   */
  'search.action.search-all-types': '搜索所有文件',
  /**
   * Text displayed when we are able to determine one or more document types that will be used for
   * searching, and can fit within the space assigned by the design.
   */
  'search.action.search-specific-types': '搜索 {{types, list}}',
  /** Dialog title for action to select an asset of unknown type */
  'search.action.select-asset': '選擇資產',
  /** Dialog title for action to select a file asset */
  'search.action.select-asset_file': '選擇文件',
  /** Dialog title for action to select an image asset */
  'search.action.select-asset_image': '選擇圖片',
  /** Accessibility label for when the search is full screen (on narrow screens) and you want to hide filters */
  'search.action.toggle-filters-aria-label_hide': '隱藏篩選器',
  /** Accessibility label for when the search is full screen (on narrow screens) and you want to show filters */
  'search.action.toggle-filters-aria-label_show': '顯示篩選器',
  /** Label for when the search is full screen (on narrow screens) and you want to hide filters */
  'search.action.toggle-filters-label_hide': '隱藏過濾器',
  /** Label for when the search is full screen (on narrow screens) and you want to show filters */
  'search.action.toggle-filters-label_show': '顯示過濾器',
  /** Tooltip text for the global search button */
  'search.button.tooltip': '搜索',
  /**
   * A list of provided types (use `list` formatter preferably).
   */
  'search.document-type-list': '{{types, list}}',
  /**
   * In the context of a list of document types - no filtering selection has been done,
   * thus the default is "all types".
   */
  'search.document-type-list-all-types': '所有類型',
  /** Accessibility label for list displaying the available document types */
  'search.document-types-aria-label': '文件類型',
  /** Label for when no document types matching the filter are found */
  'search.document-types-no-matches-found': '沒有符合 {{filter}} 的匹配項',
  /** Description for error when a filter cannot be displayed, describes that you should check the schema */
  'search.error.display-filter-description': '這可能表示您的架構中定義了無效選項。',
  /** Title for error when a filter cannot be displayed (mainly a developer-oriented error) */
  'search.error.display-filter-title': '顯示此篩選器時發生錯誤。',
  /** Description for error when no valid asset source is found, describes that you should check the the current studio config */
  'search.error.no-valid-asset-source-check-config-description':
    '請確保它在您的工作室配置文件中已啟用。',
  /** Description for error when no valid asset source is found, describes that only the default asset is supported */
  'search.error.no-valid-asset-source-only-default-description': '目前，僅支持默認資產源。',
  /** Title for error when no valid asset sources found */
  'search.error.no-valid-asset-source-title': '未找到有效的資產源。',
  /** Helpful description for when search returned an error that we are not able to describe in detail */
  'search.error.unspecified-error-help-description': '請再試一次或檢查您的連接',
  /** Title label for when search returned an error that we are not able to describe in detail */
  'search.error.unspecified-error-title': '搜索時出了點問題',
  /**
   * Label for "All fields", a label that appears above the list of available fields when filtering.
   * If one or more document type has been chosen as filter, this label is replaced with a group of
   * fields per selected document type
   */
  'search.filter-all-fields-header': '所有字段',
  /** Label for the action of changing from one file to a different file in asset search filter */
  'search.filter-asset-change_file': '更換檔案',
  /** Label for the action of changing from one image to a different image in asset search filter */
  'search.filter-asset-change_image': '更換圖片',
  /** Label for the action of clearing the currently selected asset in an image/file filter */
  'search.filter-asset-clear': '清除',
  /** Label for the action of selecting a file in asset search filter */
  'search.filter-asset-select_file': '選擇檔案',
  /** Label for the action of selecting an image in asset search filter */
  'search.filter-asset-select_image': '選擇圖片',
  /** Label for boolean filter - false */
  'search.filter-boolean-false': '假',
  /** Label for boolean filter - true */
  'search.filter-boolean-true': '真',
  /** Accessibility label for list that lets you filter fields by title, when adding a new filter in search */
  'search.filter-by-title-aria-label': '按標題篩選',
  /** Accessibility label for date filter input */
  'search.filter-date-aria-label': '日期',
  /** Accessibility label for selecting end date on the date range search filter */
  'search.filter-date-range-end-date-aria-label': '結束日期',
  /** Accessibility label for selecting start date on the date range search filter */
  'search.filter-date-range-start-date-aria-label': '開始日期',
  /**
   * Label for "Days"/"Months"/"Years" when selecting it as unit in "X days ago" search filter.
   * Capitalized, as it would be listed in a dropdown.
   */
  'search.filter-date-unit_days': '天',
  'search.filter-date-unit_months': '月',
  'search.filter-date-unit_years': '年',
  /** Accessibility label for selecting the unit (day/month/year) when adding "X days ago" search filter */
  'search.filter-date-unit-aria-label': '選擇單位',
  /** Accessibility label for the input value (days/months/years) when adding "X days ago" search filter */
  'search.filter-date-value-aria-label': '單位值',
  /** Label for "field description" shown in tooltip when navigating list of possible fields to filter */
  'search.filter-field-tooltip-description': '欄位描述',
  /** Label for "field name" shown in tooltip when navigating list of possible fields to filter */
  'search.filter-field-tooltip-name': '欄位名稱',
  /** Label for "Used in document types", a list of the document types a field appears in. Shown in tooltip when navigating list of possible fields to filter */
  'search.filter-field-tooltip-used-in-document-types': '用於文件類型',
  /** Label for when no fields/filters are found for the given term */
  'search.filter-no-matches-found': '沒有符合 {{filter}} 的結果',
  /** Placeholder value for maximum numeric value filter */
  'search.filter-number-max-value-placeholder': '最大值',
  /** Placeholder value for minimum numeric value filter */
  'search.filter-number-min-value-placeholder': '最小值',
  /** Placeholder value for the number filter */
  'search.filter-number-value-placeholder': '值',
  /** Placeholder for the "Filter" input, when narrowing possible fields/filters */
  'search.filter-placeholder': '篩選',
  /** Label for the action of clearing the currently selected document in a reference filter */
  'search.filter-reference-clear': '清除',
  /**
   * Label for "shared fields", a label that appears above a list of fields that all filtered types
   * have in common, when adding a new filter. For instance, if "book" and "employee" both have a
   * "title" field, this field would be listed under "shared fields".
   * */
  'search.filter-shared-fields-header': '共享欄位',
  /** Placeholder value for the string filter */
  'search.filter-string-value-placeholder': '值',
  /** Label/placeholder prompting user to select one of the predefined, allowed values for a string field */
  'search.filter-string-value-select-predefined-value': '選擇…',
  /** Accessibility label for the "Filters" list, that is shown when using "Add filter" in search (plural) */
  'search.filters-aria-label_other': '篩選器',
  /** Label for instructions on how to use the search - displayed when no recent searches are available */
  'search.instructions': '使用 <ControlsIcon/> 來精煉您的搜索',
  /** Helpful description for when no search results are found */
  'search.no-results-help-description': '嘗試另一個關鍵詞或調整您的篩選條件',
  /** Title label for when no search results are found */
  'search.no-results-title': '未找到結果',
  'search.operator.array-count-equal.description_other':
    '<Field/> <Operator>有</Operator> <Value>{{count}} 個項目</Value>',
  'search.operator.array-count-equal.name': '數量是',
  'search.operator.array-count-gt.description_other':
    '<Field/> <Operator>有 ></Operator> <Value>{{count}} 個項目</Value>',
  'search.operator.array-count-gt.name': '數量大於',
  'search.operator.array-count-gte.description_other':
    '<Field/> <Operator>有 ≥</Operator> <Value>{{count}} 個項目</Value>',
  'search.operator.array-count-gte.name': '數量大於或等於',
  'search.operator.array-count-lt.description_other':
    '<Field/> <Operator>有 <</Operator> <Value>{{count}} 個項目</Value>',
  'search.operator.array-count-lt.name': '數量小於',
  'search.operator.array-count-lte.description_other':
    '<Field/> <Operator>有 ≤</Operator> <Value>{{count}} 個項目</Value>',
  'search.operator.array-count-lte.name': '數量小於或等於',
  'search.operator.array-count-not-equal.description_other':
    '<Field/> <Operator>沒有</Operator> <Value>{{count}} 個項目</Value>',
  'search.operator.array-count-not-equal.name': '數量不是',
  /**
   * Array should have a count within the range of given filter values.
   * Gets passed `{{from}}` and `{{to}}` values.
   **/
  'search.operator.array-count-range.description':
    '<Field/> <Operator>有介於</Operator> <Value>{{from}} → {{to}} 個項目</Value>',
  'search.operator.array-count-range.name': '數量介於',
  /* Array should include the given value */
  'search.operator.array-list-includes.description':
    '<Field/> <Operator>包括</Operator> <Value>{{value}}</Value>',
  'search.operator.array-list-includes.name': '包括',
  /* Array should not include the given value */
  'search.operator.array-list-not-includes.description':
    '<Field/> <Operator>不包括</Operator> <Value>{{value}}</Value>',
  'search.operator.array-list-not-includes.name': '不包括',
  /* Array should include the given reference */
  'search.operator.array-reference-includes.description':
    '<Field/> <Operator>包含</Operator> <Value>{{value}}</Value>',
  'search.operator.array-reference-includes.name': '包含',
  /* Array should not include the given reference */
  'search.operator.array-reference-not-includes.description':
    '<Field/> <Operator>不包含</Operator> <Value>{{value}}</Value>',
  'search.operator.array-reference-not-includes.name': '不包含',
  /* Asset (file) should be the selected asset */
  'search.operator.asset-file-equal.description':
    '<Field/> <Operator>是</Operator> <Value>{{value}}</Value>',
  'search.operator.asset-file-equal.name': '是',
  /* Asset (file) should not be the selected asset */
  'search.operator.asset-file-not-equal.description':
    '<Field/> <Operator>不是</Operator> <Value>{{value}}</Value>',
  'search.operator.asset-file-not-equal.name': '不是',
  /* Asset (image) should be the selected asset */
  'search.operator.asset-image-equal.description':
    '<Field/> <Operator>是</Operator> <Value>{{value}}</Value>',
  'search.operator.asset-image-equal.name': '是',
  /* Asset (image) should not be the selected asset */
  'search.operator.asset-image-not-equal.description':
    '<Field/> <Operator>不是</Operator> <Value>{{value}}</Value>',
  'search.operator.asset-image-not-equal.name': '不是',
  /**
   * Boolean value should be the given filter value (true/false).
   * Context passed is `true` and `false`, allowing for more specific translations:
   * - `search.operator.boolean-equal.description_true`
   * - `search.operator.boolean-equal.description_false`
   */
  'search.operator.boolean-equal.description':
    '<Field/> <Operator>是</Operator> <Value>{{value}}</Value>',
  'search.operator.boolean-equal.name': '是',
  /* Date should be after (later than) given filter value */
  'search.operator.date-after.description':
    '<Field/> <Operator>在之後</Operator> <Value>{{value}}</Value>',
  'search.operator.date-after.name': '之後',
  /* Date should be before (earlier than) given filter value */
  'search.operator.date-before.description':
    '<Field/> <Operator>在之前</Operator> <Value>{{value}}</Value>',
  'search.operator.date-before.name': '之前',
  /* Date should be the given filter value */
  'search.operator.date-equal.description':
    '<Field/> <Operator>是</Operator> <Value>{{value}}</Value>',
  'search.operator.date-equal.name': '是',
  /* Date should be within the given filter value range (eg "within the last X days") */
  'search.operator.date-last.description':
    '<Field/> <Operator>在最後</Operator> <Value>{{value}}</Value>',
  'search.operator.date-last.name': '最後',
  /* Date should not be the given filter value */
  'search.operator.date-not-equal.description':
    '<Field/> <Operator>不是</Operator> <Value>{{value}}</Value>',
  'search.operator.date-not-equal.name': '不是',
  /* Date should be within the range of given filter values */
  'search.operator.date-range.description': '<Field/> <Operator>介於</Operator> <Value/>',
  'search.operator.date-range.name': '介於',
  /* Date and time should be after (later than) given filter value */
  'search.operator.date-time-after.description':
    '<Field/> <Operator>在之後</Operator> <Value>{{value}}</Value>',
  'search.operator.date-time-after.name': '之後',
  /* Date and time should be before (earlier than) given filter value */
  'search.operator.date-time-before.description':
    '<Field/> <Operator>在之前</Operator> <Value>{{value}}</Value>',
  'search.operator.date-time-before.name': '之前',
  /* Date and time should be the given filter value */
  'search.operator.date-time-equal.description':
    '<Field/> <Operator>是</Operator> <Value>{{value}}</Value>',
  'search.operator.date-time-equal.name': '是',
  /* Date and time should be within the given filter value range (eg "within the last X days") */
  'search.operator.date-time-last.description':
    '<Field/> <Operator>在最後</Operator> <Value>{{value}}</Value>',
  'search.operator.date-time-last.name': '最後',
  /* Date and time should not be the given filter value */
  'search.operator.date-time-not-equal.description':
    '<Field/> <Operator>不是</Operator> <Value>{{value}}</Value>',
  'search.operator.date-time-not-equal.name': '不是',
  /* Date and time should be within the range of given filter values */
  'search.operator.date-time-range.description': '<Field/> <Operator>介於</Operator> <Value/>',
  'search.operator.date-time-range.name': '介於',
  /* Value should be defined */
  'search.operator.defined.description': '<Field/> <Operator>是</Operator> <Value>非空</Value>',
  'search.operator.defined.name': '非空',
  /* Value should not be defined */
  'search.operator.not-defined.description': '<Field/> <Operator>是</Operator> <Value>空的</Value>',
  'search.operator.not-defined.name': '空的',
  /* Number should be the given filter value */
  'search.operator.number-equal.description':
    '<Field/> <Operator>是</Operator> <Value>{{value}}</Value>',
  'search.operator.number-equal.name': '是',
  /* Number should be greater than given filter value */
  'search.operator.number-gt.description':
    '<Field/> <Operator>></Operator> <Value>{{value}}</Value>',
  'search.operator.number-gt.name': '大於',
  /* Number should be greater than or the given filter value */
  'search.operator.number-gte.description':
    '<Field/> <Operator>≥</Operator> <Value>{{value}}</Value>',
  'search.operator.number-gte.name': '大於或等於',
  /* Number should be less than given filter value */
  'search.operator.number-lt.description':
    '<Field/> <Operator><</Operator> <Value>{{value}}</Value>',
  'search.operator.number-lt.name': '小於',
  /* Number should be less than or the given filter value */
  'search.operator.number-lte.description':
    '<Field/> <Operator>≤</Operator> <Value>{{value}}</Value>',
  'search.operator.number-lte.name': '小於或等於',
  /* Number should not be the given filter value */
  'search.operator.number-not-equal.description':
    '<Field/> <Operator>不是</Operator> <Value>{{value}}</Value>',
  'search.operator.number-not-equal.name': '不是',
  /* Number should be within the range of given filter values */
  'search.operator.number-range.description':
    '<Field/> <Operator>介於</Operator> <Value>{{from}} → {{to}}</Value>',
  'search.operator.number-range.name': '介於',
  /* Portable Text should contain the given filter value */
  'search.operator.portable-text-contains.description':
    '<Field/> <Operator>包含</Operator> <Value>{{value}}</Value>',
  'search.operator.portable-text-contains.name': '包含',
  /* Portable Text should be the given filter value */
  'search.operator.portable-text-equal.description':
    '<Field/> <Operator>是</Operator> <Value>{{value}}</Value>',
  'search.operator.portable-text-equal.name': '是',
  /* Portable Text should not contain the given filter value */
  'search.operator.portable-text-not-contains.description':
    '<Field/> <Operator>不包含</Operator> <Value>{{value}}</Value>',
  'search.operator.portable-text-not-contains.name': '不包含',
  /* Portable Text should not be the given filter value */
  'search.operator.portable-text-not-equal.description':
    '<Field/> <Operator>不是</Operator> <Value>{{value}}</Value>',
  'search.operator.portable-text-not-equal.name': '不是',
  /* References the given asset (file) */
  'search.operator.reference-asset-file.description':
    '<Field/> <Operator>→</Operator> <Value>{{value}}</Value>',
  'search.operator.reference-asset-file.name': '檔案',
  /* References the given asset (image) */
  'search.operator.reference-asset-image.description':
    '<Field/> <Operator>→</Operator> <Value>{{value}}</Value>',
  'search.operator.reference-asset-image.name': '圖片',
  /* References the given document */
  'search.operator.reference-document.description':
    '<Field/> <Operator>→</Operator> <Value>{{value}}</Value>',
  'search.operator.reference-document.name': '文件',
  /* Reference should be the given document */
  'search.operator.reference-equal.description':
    '<Field/> <Operator>是</Operator> <Value>{{value}}</Value>',
  'search.operator.reference-equal.name': '是',
  /* Reference should not be the given document */
  'search.operator.reference-not-equal.description':
    '<Field/> <Operator>不是</Operator> <Value>{{value}}</Value>',
  'search.operator.reference-not-equal.name': '不是',
  /* Slug contains the given value */
  'search.operator.slug-contains.description':
    '<Field/> <Operator>包含</Operator> <Value>{{value}}</Value>',
  'search.operator.slug-contains.name': '包含',
  /* Slug equals the given filter value */
  'search.operator.slug-equal.description':
    '<Field/> <Operator>是</Operator> <Value>{{value}}</Value>',
  'search.operator.slug-equal.name': '是',
  /* Slug does not contain the given value */
  'search.operator.slug-not-contains.description':
    '<Field/> <Operator>不包含</Operator> <Value>{{value}}</Value>',
  'search.operator.slug-not-contains.name': '不包含',
  /* Slug does not equal the given filter value */
  'search.operator.slug-not-equal.description':
    '<Field/> <Operator>不是</Operator> <Value>{{value}}</Value>',
  'search.operator.slug-not-equal.name': '不是',
  /* String contains the given filter value */
  'search.operator.string-contains.description':
    '<Field/> <Operator>包含</Operator> <Value>{{value}}</Value>',
  'search.operator.string-contains.name': '包含',
  /* String equals the given filter value */
  'search.operator.string-equal.description':
    '<Field/> <Operator>是</Operator> <Value>{{value}}</Value>',
  'search.operator.string-equal.name': '是',
  /* String equals one of the predefined allowed values */
  'search.operator.string-list-equal.description':
    '<Field/> <Operator>是</Operator> <Value>{{value}}</Value>',
  'search.operator.string-list-equal.name': '是',
  /* String does not equal one of the predefined allowed values */
  'search.operator.string-list-not-equal.description':
    '<Field/> <Operator>不是</Operator> <Value>{{value}}</Value>',
  'search.operator.string-list-not-equal.name': '不是',
  /* String does not contain the given filter value */
  'search.operator.string-not-contains.description':
    '<Field/> <Operator>不包含</Operator> <Value>{{value}}</Value>',
  'search.operator.string-not-contains.name': '不包含',
  /* String does not equal the given filter value */
  'search.operator.string-not-equal.description':
    '<Field/> <Operator>不是</Operator> <Value>{{value}}</Value>',
  'search.operator.string-not-equal.name': '不是',
  /** Label for the "Best match" search ordering type */
  'search.ordering.best-match-label': '最佳匹配',
  /** Label for the "Created: Oldest first" search ordering type */
  'search.ordering.created-ascending-label': '創建時間：最早的在前',
  /** Label for the "Created: Newest first" search ordering type */
  'search.ordering.created-descending-label': '創建時間：最新的在前',
  /** Label for the "Updated: Oldest first" search ordering type */
  'search.ordering.updated-ascending-label': '更新時間：最早的在前',
  /** Label for the "Updated: Newest first" search ordering type */
  'search.ordering.updated-descending-label': '更新時間：最新的在前',
  /** Placeholder text for the global search input field */
  'search.placeholder': '搜索',
  /** Accessibility label for the recent searches section, shown when no valid search terms has been given */
  'search.recent-searches-aria-label': '最近的搜索',
  /** Label/heading shown for the recent searches section */
  'search.recent-searches-label': '最近的搜索',
  /** Accessibility label for the search results section, shown when the user has typed valid terms */
  'search.search-results-aria-label': '搜索結果',

  /** Accessibility label for the navbar status button */
  'status-button.aria-label': '配置狀態',

  /** Description for error when the timeline for the given document can't be loaded */
  'timeline.error.load-document-changes-description': '文檔歷史交易未受影響。',
  /** Title for error when the timeline for the given document can't be loaded */
  'timeline.error.load-document-changes-title': '檢索文檔更改時發生錯誤。',
  /** Error description for when the document doesn't have history */
  'timeline.error.no-document-history-description': '更改文檔內容時，文檔版本將出現在此菜單中。',
  /** Error title for when the document doesn't have history */
  'timeline.error.no-document-history-title': '沒有文檔歷史',
  /** Error prompt when revision cannot be loaded */
  'timeline.error.unable-to-load-revision': '無法加載修訂版',
  /** Label for when the timeline item is the latest in the history */
  'timeline.latest': '最新',
  /** Label for latest version for timeline menu dropdown */
  'timeline.latest-version': '最新版本',
  /** The aria-label for the list of revisions in the timeline */
  'timeline.list.aria-label': '文檔修訂版',
  /** Label for loading history */
  'timeline.loading-history': '正在加載歷史記錄…',
  /** Label shown in review changes timeline when a document has been created */
  'timeline.operation.created': '已創建',
  /** Label shown in review changes timeline when a document has been created, with a timestamp */
  'timeline.operation.created_timestamp': '創建時間：{{timestamp, datetime}}',
  /** Label shown in review changes timeline when a document was initially created */
  'timeline.operation.created-initial': '已創建',
  /** Label shown in review changes timeline when a document was initially created, with a timestamp */
  'timeline.operation.created-initial_timestamp': '創建時間：{{timestamp, datetime}}',
  /** Label shown in review changes timeline when a document has been deleted */
  'timeline.operation.deleted': '已刪除',
  /** Label shown in review changes timeline when a document has been deleted, with a timestamp */
  'timeline.operation.deleted_timestamp': '刪除時間：{{timestamp, datetime}}',
  /** Label shown in review changes timeline when a draft has been discarded */
  'timeline.operation.draft-discarded': '已丟棄草稿',
  /** Label shown in review changes timeline when a draft has been discarded, with a timestamp */
  'timeline.operation.draft-discarded_timestamp': '丟棄草稿時間：{{timestamp, datetime}}',
  /** Label shown in review changes timeline when a draft has been edited */
  'timeline.operation.edited-draft': '已編輯',
  /** Label shown in review changes timeline when a draft has been edited, with a timestamp */
  'timeline.operation.edited-draft_timestamp': '編輯時間：{{timestamp, datetime}}',
  /** Label shown in review changes timeline when a document has been edited live */
  'timeline.operation.edited-live': '即時編輯',
  /** Label shown in review changes timeline when a document has been edited live, with a timestamp */
  'timeline.operation.edited-live_timestamp': '即時編輯時間：{{timestamp, datetime}}',
  /** Label shown in review changes timeline when a document was published */
  'timeline.operation.published': '已發布',
  /** Label shown in review changes timeline when a document was published, with a timestamp */
  'timeline.operation.published_timestamp': '已發布：{{timestamp, datetime}}',
  /** Label shown in review changes timeline when a document was unpublished */
  'timeline.operation.unpublished': '未發布',
  /** Label shown in review changes timeline when a document was unpublished, with a timestamp */
  'timeline.operation.unpublished_timestamp': '未發布：{{timestamp, datetime}}',
  /**
   * Label for determining since which version the changes for timeline menu dropdown are showing.
   * Receives the time label as a parameter (`timestamp`).
   */
  'timeline.since': '自：{{timestamp, datetime}}',
  /** Label for missing change version for timeline menu dropdown are showing */
  'timeline.since-version-missing': '自：未知版本',

  /**Aria label for the action buttons in the PTE toolbar */
  'toolbar.portable-text.action-button-aria-label': '{{action}}',

  'user-menu.action.free-trial_other': '試用期還剩 {{count}} 天',
  /** Label for the button showed after trial ended */
  'user-menu.action.free-trial-finished': '從免費版升級',
  /** Label for action to invite members to the current sanity project */
  'user-menu.action.invite-members': '邀請成員',
  /** Accessibility label for action to invite members to the current sanity project */
  'user-menu.action.invite-members-aria-label': '邀請成員',
  /** Label for action to manage the current sanity project */
  'user-menu.action.manage-project': '管理項目',
  /** Accessibility label for the action to manage the current project */
  'user-menu.action.manage-project-aria-label': '管理項目',
  /** Tooltip helper text when portable text annotation is disabled for empty block*/
  'user-menu.action.portable-text.annotation-disabled_empty-block': '不能對空白塊應用 {{name}}',
  /** Tooltip helper text when portable text annotation is disabled for multiple blocks */
  'user-menu.action.portable-text.annotation-disabled_multiple-blocks': '不能對多個塊應用 {{name}}',
  /** Label for action to sign out of the current sanity project */
  'user-menu.action.sign-out': '登出',
  /** Title for appearance section for the current studio (dark / light / system scheme) */
  'user-menu.appearance-title': '外觀',
  /** Label for close menu button for user menu */
  'user-menu.close-menu': '關閉菜單',
  /** Description for using the "dark theme" in the appearance user menu */
  'user-menu.color-scheme.dark-description': '使用深色外觀',
  /** Title for using the "dark theme" in the appearance user menu */
  'user-menu.color-scheme.dark-title': '深色',
  /** Description for using the "light theme" in the appearance user menu */
  'user-menu.color-scheme.light-description': '使用淺色外觀',
  /** Title for using the "light theme" in the appearance user menu */
  'user-menu.color-scheme.light-title': '淺色',
  /** Description for using "system apparence" in the appearance user menu */
  'user-menu.color-scheme.system-description': '使用系統外觀',
  /** Title for using system apparence in the appearance user menu */
  'user-menu.color-scheme.system-title': '系統',
  /** Title for locale section for the current studio */
  'user-menu.locale-title': '語言',
  /** Label for tooltip to show which provider the currently logged in user is using */
  'user-menu.login-provider': '已使用{{providerTitle}}登入',
  /** Label for open menu button for user menu */
  'user-menu.open-menu': '開啟選單',

  /**
   * Label for action to add a workspace (currently a developer-oriented action, as this will
   * lead to the documentation on workspace configuration)
   */
  'workspaces.action.add-workspace': '添加工作區',
  /**
   * Label for action to choose a different workspace, in the case where you are not logged in,
   * have selected a workspace, and are faced with the authentication options for the selected
   * workspace. In other words, label for the action shown when you have reconsidered which
   * workspace to authenticate in.
   */
  'workspaces.action.choose-another-workspace': '選擇另一個工作區',
  /** Label for heading that indicates that you can choose your workspace */
  'workspaces.choose-your-workspace-label': '選擇您的工作區',
  /** Label for the workspace menu */
  'workspaces.select-workspace-aria-label': '選擇工作區',
  /** Button label for opening the workspace switcher */
  'workspaces.select-workspace-label': '選擇工作區',
  /** Tooltip for the workspace menu */
  'workspaces.select-workspace-tooltip': '選擇工作區',
  /** Title for Workplaces dropdown menu */
  'workspaces.title': '工作區',
})
