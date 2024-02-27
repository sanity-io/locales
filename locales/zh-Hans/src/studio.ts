import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Menu item for deleting the asset */
  'asset-source.asset-list.menu.delete': '删除',
  /** Menu item for showing where a particular asset is used */
  'asset-source.asset-list.menu.show-usage': '显示用途',
  /** Header in usage dialog for file assets */
  'asset-source.asset-usage-dialog.header_file': '使用文件的文档',
  /** Header in usage dialog for image assets */
  'asset-source.asset-usage-dialog.header_image': '使用图片的文档',
  /** Text shown in usage dialog when loading documents using the selected asset */
  'asset-source.asset-usage-dialog.loading': '加载中…',
  /** Text for cancel action in delete-asset dialog */
  'asset-source.delete-dialog.action.cancel': '取消',
  /** Text for "confirm delete" action in delete-asset dialog */
  'asset-source.delete-dialog.action.delete': '删除',
  /** Dialog header for delete-asset dialog when deleting a file */
  'asset-source.delete-dialog.header_file': '删除文件',
  /** Dialog header for delete-asset dialog when deleting an image */
  'asset-source.delete-dialog.header_image': '删除图片',
  /** Text shown in delete dialog when loading documents using the selected asset */
  'asset-source.delete-dialog.loading': '加载中…',
  /** Message confirming to delete *named* file */
  'asset-source.delete-dialog.usage-list.confirm-delete-file_named':
    '您即将删除文件<strong>{{filename}}}</strong>及其元数据。您确定吗？',
  /** Message confirming to delete *unnamed* file */
  'asset-source.delete-dialog.usage-list.confirm-delete-file_unnamed':
    '您即将删除文件及其元数据。您确定吗？',
  /** Message confirming to delete *named* image */
  'asset-source.delete-dialog.usage-list.confirm-delete-image_named':
    '您即将删除图片<strong>{{filename}}</strong>及其元数据。您确定吗？',
  /** Message confirming to delete *unnamed* image */
  'asset-source.delete-dialog.usage-list.confirm-delete-image_unnamed':
    '您即将删除图片及其元数据。您确定吗？',
  /** Alt text showing on image preview in delete asset dialog  */
  'asset-source.delete-dialog.usage-list.image-preview-alt': '图片预览',
  /** Warning message showing when *named* file can't be deleted because it is in use */
  'asset-source.delete-dialog.usage-list.warning-file-is-in-use_named':
    '{{filename}}无法删除，因为它正在被使用。要删除此文件，您首先需要移除它的所有用途。',
  /** Warning message showing when *unnamed* file can't be deleted because it is in use */
  'asset-source.delete-dialog.usage-list.warning-file-is-in-use_unnamed':
    '此文件无法删除，因为它正在被使用。要删除它，您首先需要移除它的所有用途。',
  /** Warning message showing when *named* image can't be deleted because it is in use */
  'asset-source.delete-dialog.usage-list.warning-image-is-in-use_named':
    '{{filename}}无法删除，因为它正在被使用。要删除此图片，您首先需要移除它的所有用途。',
  /** Warning message showing when *unnamed* image can't be deleted because it is in use */
  'asset-source.delete-dialog.usage-list.warning-image-is-in-use_unnamed':
    '此图片无法删除，因为它正在被使用。要删除它，您首先需要移除它的所有用途。',
  /** Text shown when the list of assets only include a specific set of types */
  'asset-source.dialog.accept-message': '仅显示接受类型的资产：<strong>{{acceptTypes}}</strong>',
  /** Keys shared between both image asset source and file asset source */
  /** Select asset dialog title for files */
  'asset-source.dialog.default-title_file': '选择文件',
  /** Select asset dialog title for images */
  'asset-source.dialog.default-title_image': '选择图片',
  /** Select asset dialog load more items */
  'asset-source.dialog.load-more': '加载更多',
  /** Text shown when selecting a file but there's no files to select from */
  'asset-source.dialog.no-assets_file': '没有文件',
  /** Text shown when selecting an image but there's no images to select from */
  'asset-source.dialog.no-assets_image': '没有图片',
  'asset-source.file.asset-list.action.delete.disabled-cannot-delete-current-file':
    '无法删除当前选中的文件',
  'asset-source.file.asset-list.action.delete.text': '删除',
  'asset-source.file.asset-list.action.delete.title': '删除文件',
  'asset-source.file.asset-list.action.select-file.title': '选择文件 {{filename}}',
  'asset-source.file.asset-list.action.show-usage.title': '显示使用情况',
  'asset-source.file.asset-list.delete-failed': '文件无法被删除',
  'asset-source.file.asset-list.delete-successful': '文件已被删除',
  'asset-source.file.asset-list.header.date-added': '添加日期',
  /** File asset source */
  'asset-source.file.asset-list.header.filename': '文件名',
  'asset-source.file.asset-list.header.size': '大小',
  'asset-source.file.asset-list.header.type': '类型',
  /** Text displayed on button or menu invoking the file asset source */
  'asset-source.file.title': '已上传文件',
  'asset-source.image.asset-list.delete-failed': '图片无法被删除',
  /** Image asset source */
  'asset-source.image.asset-list.delete-successful': '图片已被删除',
  /** Text displayed on button or menu invoking the image asset source */
  'asset-source.image.title': '已上传图片',
  'asset-source.usage-list.documents-using-file_named_other':
    '{{count}} 个文档正在使用文件 <code>{{filename}}</code>',
  /** Text shown in usage dialog for a file asset when there are zero, one or more documents using the *named* file **/
  'asset-source.usage-list.documents-using-file_named_zero':
    '没有文档正在使用文件 <code>{{filename}}</code>',
  'asset-source.usage-list.documents-using-file_unnamed_other': '{{count}} 个文档正在使用此文件',
  /** Text shown in usage dialog for a file asset when there are zero, one or more documents using the *unnamed* file **/
  'asset-source.usage-list.documents-using-file_unnamed_zero': '没有文档正在使用此文件',
  'asset-source.usage-list.documents-using-image_named_other':
    '{{count}} 个文档正在使用图片 <code>{{filename}}</code>',
  /** Text shown in usage dialog for an image asset when there are zero, one or more documents using the *named* image **/
  'asset-source.usage-list.documents-using-image_named_zero':
    '没有文档正在使用图片 <code>{{filename}}</code>',
  'asset-source.usage-list.documents-using-image_unnamed_other': '{{count}} 个文档正在使用此图片',
  /** Text shown in usage dialog for an image asset when there are zero, one or more documents using the *unnamed* image **/
  'asset-source.usage-list.documents-using-image_unnamed_zero': '没有文档正在使用此图片',

  /** Action message for navigating to next month */
  'calendar.action.go-to-next-month': '前往下个月',
  /** Action message for navigating to next year */
  'calendar.action.go-to-next-year': '前往下一年',
  /** Action message for navigating to previous month */
  'calendar.action.go-to-previous-month': '转到上个月',
  /** Action message for navigating to previous year */
  'calendar.action.go-to-previous-year': '转到上一年',
  /* Label for navigating the calendar to "today", without _selecting_ today. Short form, eg `Today`, not `Go to today` */
  'calendar.action.go-to-today': '今天',
  /* Accessibility label for navigating the calendar to "today", without _selecting_ today */
  'calendar.action.go-to-today-aria-label': '转到今天',
  /* Label for navigating the calendar to "tomorrow", without _selecting_ tomorrow. Short form, eg `Tomorrow`, not `Go to tomorrow` */
  'calendar.action.go-to-tomorrow': '明天',
  /* Label for navigating the calendar to "yesterday", without _selecting_ yesterday. Short form, eg `Yesterday`, not `Go to yesterday` */
  'calendar.action.go-to-yesterday': '昨天',
  /** Label for switch that controls whether or not to include time in given timestamp */
  'calendar.action.include-time-label': '包括时间',
  /** Action message for selecting the hour */
  'calendar.action.select-hour': '选择小时',
  /** Action message for selecting the minute */
  'calendar.action.select-minute': '选择分钟',
  /** Action message for setting to the current time */
  'calendar.action.set-to-current-time': '设置为当前时间',
  /** Label for selecting an hour preset. Receives a `time` param as a string on hh:mm format and a `date` param as a Date instance denoting the preset date */
  'calendar.action.set-to-time-preset': '{{time}} 在 {{date, datetime}}',
  /** Error message displayed in calendar when entered date is not the correct format */
  'calendar.error.must-be-in-format': '必须是以下格式 <Emphasis>{{exampleDate}}</Emphasis>',
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
  'calendar.weekday-names.short.friday': '周五',
  /** Short weekday name for Monday */
  'calendar.weekday-names.short.monday': '周一',
  /** Short weekday name for Saturdayday */
  'calendar.weekday-names.short.saturday': '周六',
  /** Short weekday name for Sunday */
  'calendar.weekday-names.short.sunday': '周日',
  /** Short weekday name for Thursday */
  'calendar.weekday-names.short.thursday': '周四',
  /** Short weekday name for Tuesday */
  'calendar.weekday-names.short.tuesday': '周二',
  /** Short weekday name for Wednesday */
  'calendar.weekday-names.short.wednesday': '周三',

  /** Label for the close button label in Review Changes pane */
  'changes.action.close-label': '关闭变更审查',
  /** Cancel label for revert button prompt action */
  'changes.action.revert-all-cancel': '取消',
  /** Revert all confirm label for revert button action - used on prompt button + review changes pane */
  'changes.action.revert-all-confirm': '全部还原',
  /** Revert for confirming revert (plural) label for field change action */
  'changes.action.revert-changes-confirm-change_other': '还原更改',
  /** Prompt for reverting changes for a field change */
  'changes.action.revert-changes-description': '您确定要还原这些更改吗？',
  /** Label for when the action of the change was to set something that was previously empty, eg a field was given a value, an array item was added, an asset was selected or similar */
  'changes.added-label': '已添加',
  /** Array diff: An item was added in a given position (`{{position}}`) */
  'changes.array.item-added-in-position': '在位置 {{position}} 添加',
  'changes.array.item-moved_down_other': '向下移动 {{count}} 个位置',
  'changes.array.item-moved_up_other': '向上移动 {{count}} 个位置',
  /** Array diff: An item was removed from a given position (`{{position}}`) */
  'changes.array.item-removed-from-position': '从位置 {{position}} 移除',
  /** Accessibility label for the "change bar" shown when there are edits on a field-level */
  'changes.change-bar.aria-label': '审查更改',
  /** Label for when the action of the change was _not_ an add/remove, eg a text field changed value, an image was changed from one asset to another or similar */
  'changes.changed-label': '已更改',
  /** Label and text for tooltip that indicates the authors of the changes */
  'changes.changes-by-author': '更改者',
  /** Additional text shown in development mode when a diff component crashes during rendering */
  'changes.error-boundary.developer-info': '检查开发者控制台以获取更多信息',
  /** Text shown when a diff component crashes during rendering, triggering the error boundary */
  'changes.error-boundary.title': '渲染此字段的更改时出现错误',
  /** Error message shown when the value of a field is not the expected one */
  'changes.error.incorrect-type-message':
    '值错误：值的类型为 "<code>{{actualType}}</code>", 期望的类型为 "<code>{{expectedType}}</code>"',
  /** File diff: Fallback title for the meta info section when there is no original filename to use  */
  'changes.file.meta-info-fallback-title': '无标题',
  /** Image diff: Text shown in tooltip when hovering hotspot that has changed in diff view */
  'changes.image.crop-changed': '裁剪已更改',
  /** Image diff: Text shown if the previous image asset was deleted (shouldn't theoretically happen) */
  'changes.image.deleted': '图片已删除',
  /** Image diff: Text shown if the image failed to be loaded when previewing it */
  'changes.image.error-loading-image': '加载图片出错',
  /** Image diff: Text shown in tooltip when hovering hotspot that has changed in diff view */
  'changes.image.hotspot-changed': '热点已更改',
  /** Image diff: Fallback title for the meta info section when there is no original filename to use  */
  'changes.image.meta-info-fallback-title': '无标题',
  /** Image diff: Text shown if no asset has been set for the field (but has metadata changes) */
  'changes.image.no-asset-set': '未设置图片',
  /** Image diff: Text shown when the from/to state has/had no image */
  'changes.image.no-image-placeholder': '（无图片）',
  /** Label for the "from" value in the change inspector */
  'changes.inspector.from-label': '从',
  /** Label for the "meta" (field path, action etc) information in the change inspector */
  'changes.inspector.meta-label': '元数据',
  /** Label for the "to" value in the change inspector */
  'changes.inspector.to-label': '到',
  /** Loading author of change in the differences tooltip in the review changes pane */
  'changes.loading-author': '正在加载…',
  /** Loading changes in Review Changes Pane */
  'changes.loading-changes': '正在加载更改…',
  /** No Changes description in the Review Changes pane */
  'changes.no-changes-description': '编辑文档或在时间线中选择旧版本，以在此面板中看到更改列表。',
  /** No Changes title in the Review Changes pane */
  'changes.no-changes-title': '没有更改',
  /** Portable Text diff: An annotation was added */
  'changes.portable-text.annotation_added': '已添加注释',
  /** Portable Text diff: An annotation was changed */
  'changes.portable-text.annotation_changed': '已更改注释',
  /** Portable Text diff: An annotation was removed */
  'changes.portable-text.annotation_removed': '已移除注释',
  /** Portable Text diff: An annotation was left unchanged */
  'changes.portable-text.annotation_unchanged': '注释未更改',
  /** Portable Text diff: A block changed from one style to another (eg `normal` to `h1` or similar) */
  'changes.portable-text.block-style-changed': '已从“{{fromStyle}}”更改块样式为“{{toStyle}}”',
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
  'changes.portable-text.inline-object_added': '已添加内联对象',
  /** Portable Text diff: An inline object was changed */
  'changes.portable-text.inline-object_changed': '已更改内联对象',
  /** Portable Text diff: An inline object was removed */
  'changes.portable-text.inline-object_removed': '移除了内联对象',
  /** Portable Text diff: An inline object was left unchanged */
  'changes.portable-text.inline-object_unchanged': '未更改的内联对象',
  /** Portable Text diff: Added a chunk of text */
  'changes.portable-text.text_added': '添加了文本',
  /** Portable Text diff: Removed a chunk of text */
  'changes.portable-text.text_removed': '移除了文本',
  /** Portable Text diff: Annotation has an unknown schema type */
  'changes.portable-text.unknown-annotation-schema-type': '未知的注释模式类型',
  /** Portable Text diff: Inline object has an unknown schema type */
  'changes.portable-text.unknown-inline-object-schema-type': '未知的内联对象模式类型',
  /** Label for when the action of the change was a removal, eg a field was cleared, an array item was removed, an asset was deselected or similar */
  'changes.removed-label': '已移除',
  /** Title for the Review Changes pane */
  'changes.title': '审查更改',

  /** --- Common components --- */
  /** Tooltip text for context menu buttons */
  'common.context-menu-button.tooltip': '显示更多',
  /** Default text for dialog cancel button */
  'common.dialog.cancel-button.text': '取消',
  /** Default text for dialog confirm button */
  'common.dialog.confirm-button.text': '确认',
  /** Default text in shared loader text / spinner lockup */
  'common.loading': '加载中',

  /** --- Configuration issues --- */
  /** Tooltip displayed on configuration issues button */
  'configuration-issues.button.tooltip': '发现配置问题',

  /** The fallback title for an ordering menu item if no localized titles are provided. */
  'default-menu-item.fallback-title': '按 {{title}} 排序',

  /** Title for the default ordering/SortOrder if no orderings are provided and the caption field is found */
  'default-orderings.caption': '按标题排序',
  /** Title for the default ordering/SortOrder if no orderings are provided and the description field is found */
  'default-orderings.description': '按描述排序',
  /** Title for the default ordering/SortOrder if no orderings are provided and the header field is found */
  'default-orderings.header': '按页眉排序',
  /** Title for the default ordering/SortOrder if no orderings are provided and the heading field is found */
  'default-orderings.heading': '按标题排序',
  /** Title for the default ordering/SortOrder if no orderings are provided and the label field is found */
  'default-orderings.label': '按标签排序',
  /** Title for the default ordering/SortOrder if no orderings are provided and the name field is found */
  'default-orderings.name': '按名称排序',
  /** Title for the default ordering/SortOrder if no orderings are provided and the title field is found */
  'default-orderings.title': '按标题排序',

  /** Label to show in the document footer indicating the last edited date of the document */
  'document-status.edited': '编辑于 {{date}}',
  /** Label to show in the document footer indicating the document is not published*/
  'document-status.not-published': '未发布',
  /** Label to show in the document footer indicating the published date of the document */
  'document-status.published': '发布于 {{date}}',

  /** The value of the <code>_key</code> property must be a unique string. */
  'form.error.duplicate-keys-alert.details.additional-description':
    '属性<code>_key</code>的值必须是唯一的字符串。',
  /** This usually happens when items are created using an API client, and the <code>_key</code> property of each elements has been generated non-uniquely. */
  'form.error.duplicate-keys-alert.details.description':
    '这通常发生在使用API客户端创建项目时，每个元素的<code>_key</code>属性生成的不是唯一的。',
  /** Developer info */
  'form.error.duplicate-keys-alert.details.title': '开发者信息',
  /** Generate unique keys */
  'form.error.duplicate-keys-alert.generate-button.text': '生成唯一键值',
  /** Several items in this list share the same identifier (key). Every item must have an unique identifier. */
  'form.error.duplicate-keys-alert.summary':
    '这个列表中的几个项目共享相同的标识符（键）。每个项目必须有一个唯一的标识符。',
  /** Non-unique keys */
  'form.error.duplicate-keys-alert.title': '键值不唯一',
  /** Error text shown when a field with a given name cannot be found in the schema or is conditionally hidden but explicitly told to render  */
  'form.error.field-not-found':
    '在成员中找不到字段"{{fieldName}}" – 验证它是否在模式中定义，并且没有被条件隐藏。',
  /** Add missing keys */
  'form.error.missing-keys-alert.add-button.text': '添加缺失的键值',
  /** The value of the <code>_key</code> property must be a unique string. */
  'form.error.missing-keys-alert.details.additional-description':
    '属性<code>_key</code>的值必须是唯一的字符串。',
  /** This usually happens when items are created using an API client, and the <code>_key</code> property has not been included. */
  'form.error.missing-keys-alert.details.description':
    '这通常发生在使用API客户端创建项目时，并且没有包含<code>_key</code>属性。',
  /** Developer info */
  'form.error.missing-keys-alert.details.title': '开发者信息',
  /** Some items in the list are missing their keys. This must be fixed in order to edit the list. */
  'form.error.missing-keys-alert.summary':
    '列表中的一些项目缺少键值。为了编辑列表，必须修复这个问题。',
  /** Missing keys */
  'form.error.missing-keys-alert.title': '缺失的键值',
  /** This usually happens when items are created using an API client, or when a custom input component has added invalid data to the list. */
  'form.error.mixed-array-alert.details.description':
    '这通常发生在使用API客户端创建项目，或者当自定义输入组件向列表中添加了无效数据时。',
  /** Developer info */
  'form.error.mixed-array-alert.details.title': '开发者信息',
  /**  Remove non-object values */
  'form.error.mixed-array-alert.remove-button.text': '移除非对象值',
  /** Some items in this list are not objects. This must be fixed in order to edit the list. */
  'form.error.mixed-array-alert.summary':
    '这个列表中的一些项目不是对象。为了编辑列表，必须修复这个问题。',
  /** Invalid list values */
  'form.error.mixed-array-alert.title': '无效的列表值',
  /** Error text shown when form is unable to find an array item at a given indexed path */
  'form.error.no-array-item-at-index':
    '在路径 <code>{{path}}</code> 上未找到索引 <code>{{index}}</code> 的数组项',
  /** Error text shown when form is unable to find an array item at a given keyed path */
  'form.error.no-array-item-at-key':
    '在路径 <code>{{path}}</code> 上未找到 `_key` <code>"{{key}}"</code> 的数组项',
  /** Form field deprecated label */
  'form.field.deprecated-label': '已弃用',
  /** Fallback title shown above field if it has no defined title */
  'form.field.untitled-field-label': '无标题',
  /** Fallback title shown above fieldset if it has no defined title */
  'form.field.untitled-fieldset-label': '无标题',
  /** Accessibility label for the icon that indicates the field has a validation error */
  'form.validation.has-error-aria-label': '有错误',
  /** Accessibility label for the icon that indicates the field has validation information */
  'form.validation.has-info-aria-label': '有信息',
  /** Accessibility label for the icon that indicates the field has a validation warning */
  'form.validation.has-warning-aria-label': '有警告',
  'form.validation.summary.errors-count_other': '{{count}} 个错误',
  'form.validation.summary.warnings-count_other': '{{count}} 个警告',

  'free-trial.tooltip.days-count_other': '{{count}} 天的试用期剩余',
  /** Tooltip for free trial navbar button, once trial has ended */
  'free-trial.tooltip.trial-finished': '升级您的项目',

  /**
   * Label for "contact sales" call to action
   * These are titles for fallback links in the event the help & resources endpoint isn't able to be fetched
   */
  'help-resources.action.contact-sales': '联系销售',
  /**
   * Label for "help and support" call to action
   * These are titles for fallback links in the event the help & resources endpoint isn't able to be fetched
   */
  'help-resources.action.help-and-support': '帮助与支持',
  /**
   * Label for "join our community" call to action
   * These are titles for fallback links in the event the help & resources endpoint isn't able to be fetched
   */
  'help-resources.action.join-our-community': '加入我们的社区',
  /** Information for what the latest sanity version is */
  'help-resources.latest-sanity-version': '最新版本是 {{latestVersion}}',
  /** Information for what studio version the current studio is running */
  'help-resources.studio-version': 'Sanity Studio 版本 {{studioVersion}}',
  /** Title for help and resources menus */
  'help-resources.title': '帮助与资源',

  /** Text for button to cancel an ongoing upload */
  'input.files.common.cancel-upload': '取消',
  /** Text for file input button in upload placeholder */
  'input.files.common.upload-placeholder.file-input-button.text': '上传',
  /** Uploading <FileName/> */
  'input.files.common.upload-progress': '正在上传 <FileName/>',
  /** The referenced document cannot be opened, because the URL failed to be resolved */
  'input.reference.document-cannot-be-opened.failed-to-resolve-url':
    '无法打开此文档（无法解析 URL 到 Studio）',

  /** Label for adding item after a specific array item */
  'inputs.array.action.add-after': '在后面添加项',
  /** Label for adding item before a specific array item */
  'inputs.array.action.add-before': '在前面添加项',
  /** Label for adding array item action when the schema allows for only one schema type */
  'inputs.array.action.add-item': '添加项',
  /**
   * Label for adding one array item action when the schema allows for multiple schema types,
   * eg. will prompt the user to select a type once triggered
   */
  'inputs.array.action.add-item-select-type': '添加项...',
  /** Array drag handle button tooltip */
  'inputs.array.action.drag.tooltip': '拖动以重新排序',
  /** Label for duplicating an array item  */
  'inputs.array.action.duplicate': '复制',
  /** Label for editing the item of a specific type, eg "Edit Person" */
  'inputs.array.action.edit': '编辑 {{itemTypeTitle}}',
  /** Label for removing an array item action  */
  'inputs.array.action.remove': '删除',
  /** Label for removing action when an array item has an error  */
  'inputs.array.action.remove-invalid-item': '删除',
  /** Label for viewing the item of a specific type, eg "View Person" */
  'inputs.array.action.view': '查看{{itemTypeTitle}}',
  /** Error description for the array item tooltip that explains that the current item can still be moved or deleted but not edited since the schema definition is not found */
  'inputs.array.error.can-delete-but-no-edit-description':
    '您仍然可以移动或删除此项，但由于找不到其类型的模式定义，因此无法编辑。',
  /** Error label for toast when array could not resolve the initial value */
  'inputs.array.error.cannot-resolve-initial-value-title':
    '无法为类型解析初始值：{{schemaTypeTitle}}：{{errorMessage}}。',
  /** Error label for toast when trying to upload multiple array items of a type that cannot be converted to array */
  'inputs.array.error.cannot-upload-unable-to-convert_other':
    '以下项目无法上传，因为没有已知的从内容类型到数组项的转换：',
  /** Error description for the array item tooltip that explains that the current type item is not valid for the list  */
  'inputs.array.error.current-schema-not-declare-description':
    '当前模式没有声明类型<code>{{typeName}}</code>的项对此列表有效。这可能意味着该类型已被移除为有效项类型，或者有人将其添加到尚未部署的本地模式中。',
  /** Error description to show how the item is being represented in the json format */
  'inputs.array.error.json-representation-description': '此项的JSON表示形式：',
  /** Error description for the array item tooltip that explains what the error means with more context */
  'inputs.array.error.type-is-incompatible-prompt': '类型<code>{{typeName}}</code>的项对此列表无效',
  /** Error title for when an item type within an array input is incompatible, used in the tooltip */
  'inputs.array.error.type-is-incompatible-title': '为什么会这样？',
  /** Error label for unexpected errors in the Array Input */
  'inputs.array.error.unexpected-error': '意外错误：{{error}}',
  /** Label for when the array input doesn't have any items */
  'inputs.array.no-items-label': '没有项目',
  /** Label for read only array fields */
  'inputs.array.read-only-label': '此字段为只读',
  /** Label for when the array input is resolving the initial value for the item */
  'inputs.array.resolving-initial-value': '正在解析初始值…',
  /** Placeholder value for datetime input */
  'inputs.datetime.placeholder': '例如 {{example}}',
  /** Acessibility label for button to open file options menu */
  'inputs.file.actions-menu.file-options.aria-label': '打开文件选项菜单',
  /** Browse */
  'inputs.file.browse-button.text': '浏览',
  /** Select file */
  'inputs.file.dialog.title': '选择文件',
  /** Unknown member kind: `{{kind}}` */
  'inputs.file.error.unknown-member-kind': '未知成员类型：{{kind}}',
  /** The value of this field is not a valid file. Resetting this field will let you choose a new file. */
  'inputs.file.invalid-file-warning.description':
    '此字段的值不是有效的文件。重置此字段将允许您选择一个新文件。',
  /** Reset value */
  'inputs.file.invalid-file-warning.reset-button.text': '重置值',
  /** Invalid file value */
  'inputs.file.invalid-file-warning.title': '文件值无效',
  /** Select */
  'inputs.file.multi-browse-button.text': '选择',
  /** The upload could not be completed at this time. */
  'inputs.file.upload-failed.description': '此时无法完成上传。',
  /** Upload failed */
  'inputs.file.upload-failed.title': '上传失败',
  /** Clear field */
  'inputs.files.common.actions-menu.clear-field.label': '清除字段',
  /** Copy URL */
  'inputs.files.common.actions-menu.copy-url.label': '复制URL',
  /** Download */
  'inputs.files.common.actions-menu.download.label': '下载',
  /** The URL is copied to the clipboard */
  'inputs.files.common.actions-menu.notification.url-copied': 'URL已复制到剪贴板',
  /** Replace */
  'inputs.files.common.actions-menu.replace.label': '替换',
  /** Upload */
  'inputs.files.common.actions-menu.upload.label': '上传',
  /** Drop to upload */
  'inputs.files.common.drop-message.drop-to-upload': '拖放以上传',
  /** Drop to upload `{{count}}` files */
  'inputs.files.common.drop-message.drop-to-upload-multi_other': '拖放以上传{{count}}个文件',
  /** Can't upload any of these files here */
  'inputs.files.common.drop-message.drop-to-upload.no-accepted-file-message_other':
    '无法在这里上传任何文件',
  /** `{{count}}` files can't be uploaded here */
  'inputs.files.common.drop-message.drop-to-upload.rejected-file-message_other':
    '{{count}}个文件无法在这里上传',
  'inputs.files.common.placeholder.cannot-upload-some-files_other': '无法上传{{count}}个文件',
  /** Drag or paste type here */
  'inputs.files.common.placeholder.drag-or-paste-to-upload_file': '拖拽或粘贴文件到这里',
  /** Drag or paste image here */
  'inputs.files.common.placeholder.drag-or-paste-to-upload_image': '拖拽或粘贴图片到这里',
  /** Drop to upload file */
  'inputs.files.common.placeholder.drop-to-upload_file': '拖放以上传文件',
  /** Drop to upload image */
  'inputs.files.common.placeholder.drop-to-upload_image': '拖放以上传图片',
  /** Read only */
  'inputs.files.common.placeholder.read-only': '只读',
  /** Can't upload files here */
  'inputs.files.common.placeholder.upload-not-supported': '无法在这里上传文件',
  /** Clear upload */
  'inputs.files.common.stale-upload-warning.clear': '清除上传',
  /** An upload has made no progress for at least `{{staleThresholdMinutes}}` minutes and likely got interrupted. You can safely clear the incomplete upload and try uploading again. */
  'inputs.files.common.stale-upload-warning.description':
    '至少{{staleThresholdMinutes}}分钟没有上传进度，很可能被中断了。您可以安全地清除未完成的上传并再次尝试上传。',
  /** Incomplete upload */
  'inputs.files.common.stale-upload-warning.title': '上传未完成',
  /** Tooltip text for action to crop image */
  'inputs.image.actions-menu.crop-image-tooltip': '裁剪图片',
  /** Accessibility label for button to open image edit dialog */
  'inputs.image.actions-menu.edit-details.aria-label': '打开图片编辑对话框',
  /** Accessibility label for button to open image options menu */
  'inputs.image.actions-menu.options.aria-label': '打开图片选项菜单',
  /** Select */
  'inputs.image.browse-menu.text': '选择',
  /** Cannot upload this file here */
  'inputs.image.drag-overlay.cannot-upload-here': '无法在这里上传此文件',
  /** Drop image to upload */
  'inputs.image.drag-overlay.drop-to-upload-image': '拖放图片以上传',
  /** This field is read only */
  'inputs.image.drag-overlay.this-field-is-read-only': '此字段为只读',
  /** Unknown member kind: `{{kind}}` */
  'inputs.image.error.unknown-member-kind': '未知成员类型：{{kind}}',
  /** Edit hotspot and crop */
  'inputs.image.hotspot-dialog.title': '编辑热点和裁剪',
  /** The value of this field is not a valid image. Resetting this field will let you choose a new image. */
  'inputs.image.invalid-image-warning.description':
    '此字段的值不是有效的图片。重置此字段将让您选择新的图片。',
  /** Reset value */
  'inputs.image.invalid-image-warning.reset-button.text': '重置值',
  /** Invalid image value */
  'inputs.image.invalid-image-warning.title': '无效的图片值',
  /** Preview of uploaded image */
  'inputs.image.preview-uploaded-image': '上传图片的预览',
  /** The upload could not be completed at this time. */
  'inputs.image.upload-error.description': '此时无法完成上传。',
  /** Upload failed */
  'inputs.image.upload-error.title': '上传失败',
  /** Adjust the rectangle to crop image. Adjust the circle to specify the area that should always be visible. */
  'inputs.imagetool.description': '调整矩形以裁剪图片。调整圆圈以指定应始终可见的区域。',
  /** Error: `{{errorMessage}}` */
  'inputs.imagetool.load-error': '错误：{{errorMessage}}',
  /** Hotspot & Crop */
  'inputs.imagetool.title': '热点 & 裁剪',
  /** Convert to `{{targetType}}` */
  'inputs.invalid-value.convert-button.text': '转换为<code>{{targetType}}</code>',
  /** The current value (<code>`{{actualType}}`</code>) */
  'inputs.invalid-value.current-type': '当前值（<code>{{actualType}}</code>）',
  /** The property value is stored as a value type that does not match the expected type. */
  'inputs.invalid-value.description': '属性值存储为与预期类型不匹配的值类型。',
  /** The value of this property must be of type <code>`{{validType}}`</code> according to the schema. */
  'inputs.invalid-value.details.description':
    '根据架构，此属性的值必须是<code>{{validType}}</code>类型。',
  /** Only the following types are valid here according to schema: */
  'inputs.invalid-value.details.multi-type-description': '根据架构，这里只有以下类型是有效的：',
  /** Mismatching value types typically occur when the schema has recently been changed. */
  'inputs.invalid-value.details.possible-reason':
    '当架构最近发生变化时，通常会出现不匹配的值类型。',
  /** Developer info */
  'inputs.invalid-value.details.title': '开发者信息',
  /** -- Invalid Value Input -- */
  /** Reset value */
  'inputs.invalid-value.reset-button.text': '重置值',
  /** Invalid property value */
  'inputs.invalid-value.title': '无效的属性值',
  /** Field groups */
  'inputs.object.field-group-tabs.aria-label': '字段组',
  /** Read-only field description */
  'inputs.object.unknown-fields.read-only.description':
    '根据文档的架构，此字段为<strong>只读</strong>，不能被取消设置。如果您希望在Studio中能够取消设置此字段，请确保从架构中的封闭类型中移除<code>readOnly</code>字段。',
  /** Remove field */
  'inputs.object.unknown-fields.remove-field-button.text': '移除字段',
  'inputs.object.unknown-fields.warning.description_other': '遇到{{count}}个未在模式中定义的字段。',
  'inputs.object.unknown-fields.warning.details.description_other':
    '这些字段未在文档的模式中定义，这可能意味着字段定义已被移除，或者有人在他们自己的本地项目中添加了这些字段，但尚未部署他们的更改。',
  /** Developer info */
  'inputs.object.unknown-fields.warning.details.title': '开发者信息',
  'inputs.object.unknown-fields.warning.title_other': '发现未知字段',
  /** Collapse the editor to save screen space  */
  'inputs.portable-text.action.collapse-editor': '折叠编辑器',
  /** Aria label for action to edit an existing annotation */
  'inputs.portable-text.action.edit-annotation-aria-label': '编辑注释',
  /** Expand the editor to give more editing space */
  'inputs.portable-text.action.expand-editor': '展开编辑器',
  /** Label label for action to insert a block of a given type (`{{typeName}}`) */
  'inputs.portable-text.action.insert-block': '插入{{typeName}}',
  /** Accessibility label for action to insert a block of a given type (`{{typeName}}`) */
  'inputs.portable-text.action.insert-block-aria-label': '插入{{typeName}}（块）',
  /** Label for action to insert an inline object of a given type (`{{typeName}}`) */
  'inputs.portable-text.action.insert-inline-object': '插入{{typeName}}',
  /** Accessibility label for action to insert an inline object of a given type (`{{typeName}}`) */
  'inputs.portable-text.action.insert-inline-object-aria-label': '插入{{typeName}}（内联）',
  /** Aria label for action to remove an annotation */
  'inputs.portable-text.action.remove-annotation-aria-label': '移除注释',
  /** Label for activate on focus with context of click and not focused */
  'inputs.portable-text.activate-on-focus-message_click': '点击以激活',
  /** Label for activate on focus with context of click and focused */
  'inputs.portable-text.activate-on-focus-message_click-focused': '点击或按空格以激活',
  /** Label for activate on focus with context of tap and not focused */
  'inputs.portable-text.activate-on-focus-message_tap': '轻触以激活',
  /**Aria label for the annotation object */
  'inputs.portable-text.annotation-aria-label': '注释对象',
  /** Title for dialog that allows editing an annotation */
  'inputs.portable-text.annotation-editor.title': '编辑{{schemaType}}',
  /** Title of the default "link" annotation */
  'inputs.portable-text.annotation.link': '链接',
  /**Aria label for the block object */
  'inputs.portable-text.block.aria-label': '块对象',
  /** Label for action to edit a block item, in the case where it is editable */
  'inputs.portable-text.block.edit': '编辑',
  /** Accessibility label for the button that opens the actions menu on blocks */
  'inputs.portable-text.block.open-menu-aria-label': '打开菜单',
  /** Label for action to open a reference, in the case of block-level reference types */
  'inputs.portable-text.block.open-reference': '打开引用',
  /** Label for action to remove a block item */
  'inputs.portable-text.block.remove': '移除',
  /** Label for action to view a block item, in the case where it is read-only and thus cannot be edited */
  'inputs.portable-text.block.view': '查看',
  /** Title of the "code" decorator */
  'inputs.portable-text.decorator.code': '代码',
  /** Title of the "em" (emphasis) decorator */
  'inputs.portable-text.decorator.emphasis': '斜体',
  /** Title of the "strike-through" decorator */
  'inputs.portable-text.decorator.strike-through': '删除线',
  /** Title of the "strong" decorator */
  'inputs.portable-text.decorator.strong': '加粗',
  /** Title of the "underline" decorator */
  'inputs.portable-text.decorator.underline': '下划线',
  /** Placeholder text for when the editor is empty */
  'inputs.portable-text.empty-placeholder': '空',
  /**Aria label for the block object */
  'inputs.portable-text.inline-block.aria-label': '内联对象',
  /** Label for action to edit an inline object item */
  'inputs.portable-text.inline-object.edit': '编辑对象',
  /** Aria label for icon for action to edit an inline object item */
  'inputs.portable-text.inline-object.edit-aria-label': '编辑对象',
  /** Label for action to remove an inline object item */
  'inputs.portable-text.inline-object.remove': '移除对象',
  /** Aria label for icon for action to remove an inline object item */
  'inputs.portable-text.inline-object.remove-aria-label': '移除对象',
  /** Disclaimer text shown on invalid Portable Text value, when an action is available to unblock the user, but it is not guaranteed to be safe */
  'inputs.portable-text.invalid-value.action-disclaimer':
    '注意：通常执行上述操作是安全的，但如果您有疑问，请与负责配置您工作室的人员联系。',
  /** Action presented when the Portable Text field value is invalid, when block with key `{{key}}` has a child with key `{{childKey}}` of type `{{childType}}` which is not allowed by the schema definition */
  'inputs.portable-text.invalid-value.disallowed-child-type.action': '移除对象',
  /** Text explaining that the Portable Text field value is invalid, when block with key `{{key}}` has a child with key `{{childKey}}` of type `{{childType}}` which is not allowed by the schema definition */
  'inputs.portable-text.invalid-value.disallowed-child-type.description':
    '键为 {{childKey}} 的子项属于键为 <code>{{key}}</code> 的块，其类型为 <code>{{childType}}</code>，这不符合模式定义。',
  /** Action presented when the Portable Text field value is invalid, when child with key `{{key}}` has a type (`{{typeName}}`) that is not an allowed block type for this field */
  'inputs.portable-text.invalid-value.disallowed-type.action': '移除块',
  /** Text explaining that the Portable Text field value is invalid, when child with key `{{key}}` has a type (`{{typeName}}`) that is not an allowed block type for this field */
  'inputs.portable-text.invalid-value.disallowed-type.description':
    '键为 <code>{{key}}</code> 的块的类型为 <code>{{typeName}}</code>，这不符合模式定义。',
  /** Action presented when the Portable Text field value is invalid, when block with key `{{key}}` contains no children */
  'inputs.portable-text.invalid-value.empty-children.action': '插入空文本跨度',
  /** Text explaining that the Portable Text field value is invalid, when block with key `{{key}}` contains no children */
  'inputs.portable-text.invalid-value.empty-children.description':
    '键为 <code>{{key}}</code> 的文本块没有文本跨度。',
  /** Label for the button to ignore invalid values in the Portable Text editor */
  'inputs.portable-text.invalid-value.ignore-button.text': '忽略',
  /** Action presented when the Portable Text field value is invalid, when child with key `{{key}}` has a `_type` property that is set to `block`, but the block type defined in schema has a different name (`{{expectedTypeName}}`) */
  'inputs.portable-text.invalid-value.incorrect-block-type.action':
    '使用类型 <code>{{expectedTypeName}}</code>',
  /** Text explaining that the Portable Text field value is invalid, when child with key `{{key}}` has a `_type` property that is set to `block`, but the block type defined in schema has a different name (`{{expectedTypeName}}`) */
  'inputs.portable-text.invalid-value.incorrect-block-type.description':
    '键为 <code>{{key}}</code> 的块具有无效的类型名称。根据模式，它应该是 <code>{{expectedTypeName}}</code>。',
  /** Action presented when the Portable Text field value is invalid, when block with key `{{key}}` has a span with key `{{childKey}}` that has a missing or invalid `text` property */
  'inputs.portable-text.invalid-value.invalid-span-text.action': '设置空文本值',
  /** Text explaining that the Portable Text field value is invalid, when block with key `{{key}}` has a span with key `{{childKey}}` that has a missing or invalid `text` property */
  'inputs.portable-text.invalid-value.invalid-span-text.description':
    '键为 {{childKey}} 的块的键为 <code>{{key}}</code> 的跨度具有缺失或无效的 <code>text</code> 属性。',
  /** Action presented when the Portable Text field value is invalid, when child with key `{{key}}` is missing a `_type` property, but seems to be a block of type `{{expectedTypeName}}` */
  'inputs.portable-text.invalid-value.missing-block-type.action':
    '使用类型 <code>{{expectedTypeName}}</code>',
  /** Text explaining that the Portable Text field value is invalid, when child with key `{{key}}` is missing a `_type` property, but seems to be a block of type `{{expectedTypeName}}` */
  'inputs.portable-text.invalid-value.missing-block-type.description':
    '键为 <code>{{key}}</code> 的块缺少类型名称。根据模式，它应该是 <code>{{expectedTypeName}}</code>。',
  /** Action presented when the Portable Text field value is invalid, when block with key `{{key}}` has a child at `{{index}}` which is missing `_key` property */
  'inputs.portable-text.invalid-value.missing-child-key.action': '分配随机键',
  /** Text explaining that the Portable Text field value is invalid, when block with key `{{key}}` has a child at `{{index}}` which is missing `_key` property */
  'inputs.portable-text.invalid-value.missing-child-key.description':
    '键为 <code>{{key}}</code> 的块的索引为 <code>{{index}}</code> 的子项缺少 <code>_key</code> 属性。',
  /** Action presented when the Portable Text field value is invalid, when block with key `{{key}}` has a child with key `{{childKey}}` which is missing a `_type` property */
  'inputs.portable-text.invalid-value.missing-child-type.action': '移除对象',
  /** Text explaining that the Portable Text field value is invalid, when block with key `{{key}}` has a child with key `{{childKey}}` which is missing a `_type` property */
  'inputs.portable-text.invalid-value.missing-child-type.description':
    '键为 {{childKey}} 的块的键为 <code>{{key}}</code> 的子项缺少 <code>_type</code> 属性。',
  /** Action presented when the Portable Text field value is invalid, when child at `{{index}}` is missing the required `_key` property */
  'inputs.portable-text.invalid-value.missing-key.action': '分配随机键',
  /** Text explaining that the Portable Text field value is invalid, when child at `{{index}}` is missing the required `_key` property */
  'inputs.portable-text.invalid-value.missing-key.description':
    '位于索引 <code>{{index}}</code> 的块缺少必需的 <code>_key</code> 属性。',
  /** Action presented when the Portable Text field value is invalid, when child with key `{{key}}` has a missing or invalid `children` property */
  'inputs.portable-text.invalid-value.missing-or-invalid-children.action': '移除该块',
  /** Text explaining that the Portable Text field value is invalid, when child with key `{{key}}` has a missing or invalid `children` property */
  'inputs.portable-text.invalid-value.missing-or-invalid-children.description':
    '带有键 <code>{{key}}</code> 的文本块有一个无效或缺失的 `children` 属性。',
  /** Action presented when the Portable Text field value is invalid, when child with key `{{key}}` has a missing or invalid `markDefs` property */
  'inputs.portable-text.invalid-value.missing-or-invalid-markdefs.action': '添加属性',
  /** Text explaining that the Portable Text field value is invalid, when child with key `{{key}}` has a missing or invalid `markDefs` property */
  'inputs.portable-text.invalid-value.missing-or-invalid-markdefs.description':
    '带有键 <code>{{key}}</code> 的文本块有一个无效或缺失的 `markDefs` 属性。',
  /** Action presented when the Portable Text field value is invalid, when child with key `{{key}}` is missing a `_type` property  */
  'inputs.portable-text.invalid-value.missing-type.action': '移除该块',
  /** Text explaining that the Portable Text field value is invalid, when child with key `{{key}}` is missing a `_type` property  */
  'inputs.portable-text.invalid-value.missing-type.description':
    '带有键 <code>{{key}}</code> 的块缺少类型名称。',
  /** Action presented when the Portable Text field value is invalid, when block with key `{{key}}` contains a non-object child at index `{{index}}` */
  'inputs.portable-text.invalid-value.non-object-child.action': '移除该项',
  /** Text explaining that the Portable Text field value is invalid, when block with key `{{key}}` contains a non-object child at index `{{index}}` */
  'inputs.portable-text.invalid-value.non-object-child.description':
    '带有键 <code>{{key}}</code> 的块在索引 <code>{{index}}</code> 处的子项不是一个对象。',
  /** Action presented when the Portable Text field value is invalid, when the Portable Text field is not an array, or the array is empty */
  'inputs.portable-text.invalid-value.not-an-array.action': '取消设置该值',
  /** Text explaining that the Portable Text field value is invalid, when the Portable Text field is not an array, or the array is empty */
  'inputs.portable-text.invalid-value.not-an-array.description':
    '值必须是一个 Portable Text 块的数组，或未定义。',
  /** Action presented when the Portable Text field value is invalid, when child at `{{index}}` is not an object */
  'inputs.portable-text.invalid-value.not-an-object.action': '移除该项',
  /** Text explaining that the Portable Text field value is invalid, when child at `{{index}}` is not an object */
  'inputs.portable-text.invalid-value.not-an-object.description':
    '位于 <code>{{index}}</code> 的项不是一个对象。',
  /** Action presented when the Portable Text field value is invalid, when block with key `{{key}}` contains marks (`{{orphanedMarks}}`) that are not supported by the current schema */
  'inputs.portable-text.invalid-value.orphaned-marks.action': '移除不允许的标记',
  /** Text explaining that the Portable Text field value is invalid, when block with key `{{key}}` contains marks (`{{orphanedMarks}}`) that are not supported by the current schema */
  'inputs.portable-text.invalid-value.orphaned-marks.description':
    '带有键 <code>{{key}}</code> 的文本块包含不被架构允许的标记 <code>({{orphanedMarks, list}})</code>。',
  /** Title for the alert indicating that the Portable Text field has an invalid value */
  'inputs.portable-text.invalid-value.title': '无效的 Portable Text 值',
  /** Title of "bulleted" list type */
  'inputs.portable-text.list-type.bullet': '项目符号列表',
  /** Title of numbered list type */
  'inputs.portable-text.list-type.number': '编号列表',
  /** Title of the "h1" block style */
  'inputs.portable-text.style.h1': '标题 1',
  /** Title of the "h2" block style */
  'inputs.portable-text.style.h2': '标题 2',
  /** Title of the "h3" block style */
  'inputs.portable-text.style.h3': '标题 3',
  /** Title of the "h4" block style */
  'inputs.portable-text.style.h4': '标题 4',
  /** Title of the "h5" block style */
  'inputs.portable-text.style.h5': '标题 5',
  /** Title of the "h6" block style */
  'inputs.portable-text.style.h6': '标题 6',
  /** Title shown when multiple blocks of varying styles is selected */
  'inputs.portable-text.style.multiple': '多个',
  /** Title of fallback when no style is given for a block */
  'inputs.portable-text.style.none': '无样式',
  /** Title of the "normal" block style */
  'inputs.portable-text.style.normal': '正常',
  /** Title of the "quote" block style */
  'inputs.portable-text.style.quote': '引用',
  /** Label for action to clear the current value of the reference field */
  'inputs.reference.action.clear': '清除',
  /** Label for action to create a new document from the reference input */
  'inputs.reference.action.create-new-document': '创建新的',
  /** Label for action to create a new document from the reference input, when there are multiple templates or document types to choose from */
  'inputs.reference.action.create-new-document-select': '创建新的…',
  /** Label for action to duplicate the current item to a new item (used within arrays) */
  'inputs.reference.action.duplicate': '复制',
  /** Label for action that opens the referenced document in a new tab */
  'inputs.reference.action.open-in-new-tab': '在新标签页中打开',
  /** Label for action to remove the reference from an array */
  'inputs.reference.action.remove': '移除',
  /** Label for action to replace the current value of the field */
  'inputs.reference.action.replace': '替换',
  /** Label for action to cancel a previously initiated replace action  */
  'inputs.reference.action.replace-cancel': '取消替换',
  /** The cross-dataset reference field currently has a reference, but the feature has been disabled since it was created. This explains what can/cannot be done in its current state. */
  'inputs.reference.cross-dataset.feature-disabled-actions':
    '您仍然可以清除此字段的现有引用，但只要功能被禁用，就无法将其更改为不同的文档。',
  /** A cross-dataset reference field exists but the feature has been disabled. A <DocumentationLink> component is available. */
  'inputs.reference.cross-dataset.feature-disabled-description':
    '此功能已被禁用。阅读如何在<DocumentationLink>文档</DocumentationLink>中启用它。',
  /** Title for a warning telling the user that the current project does not have the "cross dataset references" feature */
  'inputs.reference.cross-dataset.feature-unavailable-title': '不可用的功能：跨数据集引用',
  /** The cross-dataset reference points to a document with an invalid type  */
  'inputs.reference.cross-dataset.invalid-type': '引用的文档类型无效 ({{typeName}}) <JsonValue/>',
  /** The referenced document will open in a new tab (due to external studio) */
  'inputs.reference.document-opens-in-new-tab': '此文档将在新标签页中打开',
  /** Error title for when the document is unavailable (for any possible reason) */
  'inputs.reference.error.document-unavailable-title': '文档不可用',
  /** Error title for when the referenced document failed to be loaded */
  'inputs.reference.error.failed-to-load-document-title': '无法加载引用的文档',
  /** Error title for when the reference search returned a document that is not an allowed type for the field */
  'inputs.reference.error.invalid-search-result-type-title':
    '搜索返回的类型对此引用无效："{{returnedType}}"',
  /** Error description for when the document referenced is not one of the types declared as allowed target types in schema */
  'inputs.reference.error.invalid-type-description':
    '引用的文档（<code>{{documentId}}</code>）的类型为<code>{{actualType}}</code>。根据模式，引用的文档只能是<AllowedTypes />类型。',
  /** Error title for when the document referenced is not one of the types declared as allowed target types in schema */
  'inputs.reference.error.invalid-type-title': '文档类型无效',
  /** Error description for when the user does not have permissions to read the referenced document */
  'inputs.reference.error.missing-read-permissions-description': '由于权限不足，无法访问引用的文档',
  /** Error title for when the user does not have permissions to read the referenced document */
  'inputs.reference.error.missing-read-permissions-title': '权限不足',
  /** Error description for when the current reference value points to a document that does not exist (on weak references) */
  'inputs.reference.error.nonexistent-document-description':
    '引用的文档不存在（ID：<code>{{documentId}}</code>）。您可以移除引用或用另一个文档替换。',
  /** Error title for when the current reference value points to a document that does not exist (on weak references) */
  'inputs.reference.error.nonexistent-document-title': '未找到',
  /** Label for button that clears the reference when it points to a document that does not exist (on weak references) */
  'inputs.reference.error.nonexistent-document.clear-button-label': '清除',
  /** Error title for when the search for a reference failed. Note that the message sent by the backend may not be localized. */
  'inputs.reference.error.search-failed-title': '引用搜索失败',
  /** Alternative text for the image shown in cross-dataset reference input */
  'inputs.reference.image-preview-alt-text': '引用文档的图片预览',
  /** Description for alert shown when a reference in a live-edit document is marked as being weak, the referenced document exists, AND the reference is supposed to be have been strengthened on publish */
  'inputs.reference.incomplete-reference.finalize-action-description':
    '<strong>{{referencedDocument}}</strong> 已发布，此引用现在应该被最终确定。',
  /** Title for alert shown when a reference in a live-edit document is marked as being weak, the referenced document exists, AND the reference is supposed to be have been strengthened on publish */
  'inputs.reference.incomplete-reference.finalize-action-title': '最终确定引用',
  /** Description for alert shown when a reference in a live-edit document points to a document that exists and has been published, but the reference is still marked as weak */
  'inputs.reference.incomplete-reference.strengthen-action-description':
    '<strong>{{referencedDocument}}</strong> 已发布，此引用现在应该转换为强引用。',
  /** Title for alert shown when a reference in a live-edit document points to a document that exists and has been published, but the reference is still marked as weak */
  'inputs.reference.incomplete-reference.strengthen-action-title': '转换为强引用',
  /** Label for button that triggers the action that strengthen a reference */
  'inputs.reference.incomplete-reference.strengthen-button-label': '转换为强引用',
  /** Label for button that triggers a retry attempt for reference metadata  */
  'inputs.reference.metadata-error.retry-button-label': '重试',
  /** Title for alert shown when reference metadata fails to be loaded */
  'inputs.reference.metadata-error.title': '无法加载引用元数据',
  /** Message shown when no documents were found that matched the given search string */
  'inputs.reference.no-results-for-query': '没有找到与<strong>“{{searchTerm}}”</strong>匹配的文档',
  /** Text for tooltip showing when a document was edited, using relative time (eg "how long ago was it edited?") */
  'inputs.reference.preview.edited-at-time': '编辑于<RelativeTime/>',
  /** Accessibility label for icon indicating that document does _not_ have any unpublished changes */
  'inputs.reference.preview.has-no-unpublished-changes-aria-label': '没有未发布的编辑',
  /** Accessibility label for icon indicating that document has unpublished changes */
  'inputs.reference.preview.has-unpublished-changes-aria-label': '已编辑',
  /** Accessibility label for icon indicating that document does _not_ have a published version */
  'inputs.reference.preview.is-not-published-aria-label': '未发布',
  /** Accessibility label for icon indicating that document has a published version */
  'inputs.reference.preview.is-published-aria-label': '已发布',
  /** Text for tooltip indicating that a document has no unpublished edits */
  'inputs.reference.preview.no-unpublished-edits': '没有未发布的编辑',
  /** Text for tooltip indicating that a document has not yet been published */
  'inputs.reference.preview.not-published': '未发布',
  /** Text for tooltip showing when a document was published, using relative time (eg "how long ago was it published?") */
  'inputs.reference.preview.published-at-time': '发布于<RelativeTime/>',
  /** The referenced document no longer exist and might have been deleted (for weak references) */
  'inputs.reference.referenced-document-does-not-exist':
    '引用的文档不再存在，可能已被删除（文档ID：<code>{{documentId}}</code>）。',
  /** The referenced document could not be displayed to the user because of insufficient permissions */
  'inputs.reference.referenced-document-insufficient-permissions':
    '由于权限不足，无法访问引用的文档',
  /** Label for when the reference input is resolving the initial value for an item */
  'inputs.reference.resolving-initial-value': '正在解析初始值…',
  /** Placeholder shown in a reference input with no current value */
  'inputs.reference.search-placeholder': '输入以搜索',
  /** Explanation of the consequences of leaving the reference as strong instead of weak */
  'inputs.reference.strength-mismatch.is-strong-consquences':
    '如果不先移除此引用或将其转换为弱引用，将无法删除引用文档。',
  /** Description for alert shown when a reference is supposed to be weak, but the actual value is strong */
  'inputs.reference.strength-mismatch.is-strong-description':
    '此引用是<em>强</em>的，但根据当前模式，它应该是<em>弱</em>的。',
  /** Explanation of the consequences of leaving the reference as weak instead of strong */
  'inputs.reference.strength-mismatch.is-weak-consquences':
    '这使得可以在不先删除此引用的情况下删除被引用的文档，留下一个引用不存在文档的字段。',
  /** Description for alert shown when a reference is supposed to be strong, but the actual value is weak */
  'inputs.reference.strength-mismatch.is-weak-description':
    '这个引用是<em>弱</em>的，但根据当前的模式，它应该是<em>强</em>的。',
  /** Label for button that triggers the action that strengthens a reference on strength mismatch */
  'inputs.reference.strength-mismatch.strengthen-button-label': '转换为强引用',
  /** Title for alert shown when a reference is supposed to be weak/strong, but the actual value is the opposite of what it is supposed to be */
  'inputs.reference.strength-mismatch.title': '引用强度不匹配',
  /** Label for button that triggers the action that weakens a reference on strength mismatch */
  'inputs.reference.strength-mismatch.weaken-button-label': '转换为弱引用',
  /** Action message for generating the slug */
  'inputs.slug.action.generate': '生成',
  /** Loading message for when the input is actively generating a slug */
  'inputs.slug.action.generating': '正在生成…',
  /** Error message for when the source to generate a slug from is missing */
  'inputs.slug.error.missing-source': '源缺失。检查模式中的类型{{schemaType}}上的源',
  /** Placeholder for an empty tag input */
  'inputs.tags.placeholder': '输入标签并按 ENTER…',
  /** Placeholder for an empty tag input on touch devices */
  'inputs.tags.placeholder_touch': '输入标签…',
  /** Convert to `{{targetType}}` */
  'inputs.untyped-value.convert-button.text': '转换为<code>{{targetType}}</code>',
  /** Encountered an object value without a <code>_type</code> property. */
  'inputs.untyped-value.description': '遇到一个没有<code>_type</code>属性的对象值。',
  /** Either remove the <code>name</code> property of the object declaration, or set <code>_type</code> property on items. */
  'inputs.untyped-value.details.description':
    '要么移除对象声明的<code>name</code>属性，要么在项上设置<code>_type</code>属性。',
  /** Current value (<code>object</code>): */
  'inputs.untyped-value.details.json-dump-prefix': '当前值(<code>object</code>):',
  /** The following types are valid here according to schema: */
  'inputs.untyped-value.details.multi-type-description': '根据模式，以下类型在这里是有效的：',
  /** Developer info */
  'inputs.untyped-value.details.title': '开发者信息',
  /** Property value missing <code>_type</code> */
  'inputs.untyped-value.title': '属性值缺少<code>_type</code>',
  /** Unset value */
  'inputs.untyped-value.unset-item-button.text': '取消设置值',

  /** The fallback explanation if no context is provided */
  'insufficient-permissions-message.not-authorized-explanation': '您没有权限访问此功能。',
  /** The explanation when unable to create any document at all */
  'insufficient-permissions-message.not-authorized-explanation_create-any-document':
    '您没有权限创建文档。',
  /** The explanation when unable to create a particular document */
  'insufficient-permissions-message.not-authorized-explanation_create-document':
    '您没有权限创建这个文档。',
  /** The explanation when unable to create a particular type of document */
  'insufficient-permissions-message.not-authorized-explanation_create-document-type':
    '您没有权限创建这种类型的文档。',
  /** The explanation when unable to create a new reference in a document */
  'insufficient-permissions-message.not-authorized-explanation_create-new-reference':
    '您没有权限创建新的引用。',
  /** The explanation when unable to delete a particular document */
  'insufficient-permissions-message.not-authorized-explanation_delete-document':
    '您没有权限删除这个文档。',
  /** The explanation when unable to discard changes in a particular document */
  'insufficient-permissions-message.not-authorized-explanation_discard-changes':
    '您没有权限在这个文档中放弃更改。',
  /** The explanation when unable to duplicate a particular document */
  'insufficient-permissions-message.not-authorized-explanation_duplicate-document':
    '您没有权限复制这个文档。',
  /** The explanation when unable to publish a particular document */
  'insufficient-permissions-message.not-authorized-explanation_publish-document':
    '您没有权限发布这个文档。',
  /** The explanation when unable to unpublish a particular document */
  'insufficient-permissions-message.not-authorized-explanation_unpublish-document':
    '您没有权限取消发布此文档。',
  /** Appears after the not-authorized message. Lists the current roles. */
  'insufficient-permissions-message.roles': '您的角色：<Roles/>',
  /** The title for the insufficient permissions message component */
  'insufficient-permissions-message.title': '权限不足',

  /** Unexpected error: `{{error}}` */
  'member-field-error.unexpected-error': '意外错误：{{error}}',

  /** Button label for "Create new document" button */
  'new-document.button': '创建',
  /**
   * Tooltip message displayed when hovering/activating the "Create new document" action,
   * when there are templates/types available for creation
   */
  'new-document.create-new-document-label': '新建文档…',
  /** Placeholder for the "filter" input within the new document menu */
  'new-document.filter-placeholder': '筛选',
  /** Loading indicator text within the new document menu */
  'new-document.loading': '加载中…',
  /** Accessibility label for the list displaying options in the new document menu */
  'new-document.new-document-aria-label': '新建文档',
  /** Message for when there are no document type options in the new document menu */
  'new-document.no-document-types-found': '未找到文档类型',
  /**
   * Tooltip message displayed when hovering/activating the "Create new document" action,
   * when there are no templates/types to create from
   */
  'new-document.no-document-types-label': '没有文档类型',
  /** Message for when no results are found for a specific search query in the new document menu */
  'new-document.no-results': '没有找到与<strong>{{searchQuery}}</strong>相关的结果',
  /** Aria label for the button that opens the "Create new document" popover/dialog */
  'new-document.open-dialog-aria-label': '创建新文档',
  /** Title for "Create new document" dialog */
  'new-document.title': '创建新文档',

  /** Label for action to manage members of the current studio project */
  'presence.action.manage-members': '管理成员',
  /** Accessibility label for presence menu button */
  'presence.aria-label': '谁在这里',
  /** Message description for when no one else is currently present */
  'presence.no-one-else-description': '邀请人们加入项目，以查看他们的在线状态。',
  /** Message title for when no one else is currently present */
  'presence.no-one-else-title': '没有其他人在这里',
  /** Message for when a user is not in a document (displayed in the global presence menu) */
  'presence.not-in-a-document': '不在文档中',
  /** Tooltip content text for presence menu button */
  'presence.tooltip-content': '谁在这里',

  /** Fallback title shown when a preview does not provide a title */
  'preview.default.title-fallback': '无标题',
  /** Fallback preview value for types that have "no value" (eg null, undefined) */
  'preview.fallback.no-value': '（无值）',
  /** Alternative text for image being shown while image is being uploaded, in previews */
  'preview.image.file-is-being-uploaded.alt-text': '当前正在上传的图片',

  /* Relative time, just now */
  'relative-time.just-now': '刚刚',

  /** Accessibility label to open search action when the search would go fullscreen (eg on narrower screens) */
  'search.action-open-aria-label': '打开搜索',
  /** Action label for adding a search filter */
  'search.action.add-filter': '添加筛选器',
  /** Action label for clearing search filters */
  'search.action.clear-filters': '清除筛选器',
  /** Label for action to clear recent searches */
  'search.action.clear-recent-searches': '清除最近的搜索',
  /** Accessibility label for action to clear all currently applied document type filters */
  'search.action.clear-type-filters-aria-label': '清除已选过滤器',
  /** Label for action to clear all currently applied document type filters */
  'search.action.clear-type-filters-label': '清除',
  /** Accessibility label for when the search is full screen (on narrow screens) and you want to close the search */
  'search.action.close-search-aria-label': '关闭搜索',
  /** Accessibility label for filtering by document type */
  'search.action.filter-by-document-type-aria-label': '按文档类型过滤',
  /** Accessibility action label for removing an already applied search filter */
  'search.action.remove-filter-aria-label': '移除过滤器',
  /**
   * Text displayed when either no document type(s) have been selected, or we need a fallback,
   * eg "Search for all types".
   */
  'search.action.search-all-types': '搜索所有文档',
  /**
   * Text displayed when we are able to determine one or more document types that will be used for
   * searching, and can fit within the space assigned by the design.
   */
  'search.action.search-specific-types': '搜索 {{types, list}}',
  /** Dialog title for action to select an asset of unknown type */
  'search.action.select-asset': '选择资产',
  /** Dialog title for action to select a file asset */
  'search.action.select-asset_file': '选择文件',
  /** Dialog title for action to select an image asset */
  'search.action.select-asset_image': '选择图片',
  /** Accessibility label for when the search is full screen (on narrow screens) and you want to hide filters */
  'search.action.toggle-filters-aria-label_hide': '隐藏过滤器',
  /** Accessibility label for when the search is full screen (on narrow screens) and you want to show filters */
  'search.action.toggle-filters-aria-label_show': '显示过滤器',
  /** Label for when the search is full screen (on narrow screens) and you want to hide filters */
  'search.action.toggle-filters-label_hide': '隐藏过滤器',
  /** Label for when the search is full screen (on narrow screens) and you want to show filters */
  'search.action.toggle-filters-label_show': '显示过滤器',
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
  'search.document-type-list-all-types': '所有类型',
  /** Accessibility label for list displaying the available document types */
  'search.document-types-aria-label': '文档类型',
  /** Label for when no document types matching the filter are found */
  'search.document-types-no-matches-found': '没有找到与 {{filter}} 相匹配的结果',
  /** Description for error when a filter cannot be displayed, describes that you should check the schema */
  'search.error.display-filter-description': '这可能表明您的架构中定义了无效的选项。',
  /** Title for error when a filter cannot be displayed (mainly a developer-oriented error) */
  'search.error.display-filter-title': '显示此过滤器时发生错误。',
  /** Description for error when no valid asset source is found, describes that you should check the the current studio config */
  'search.error.no-valid-asset-source-check-config-description':
    '请确保它在您的工作室配置文件中已启用。',
  /** Description for error when no valid asset source is found, describes that only the default asset is supported */
  'search.error.no-valid-asset-source-only-default-description': '目前，只支持默认的资产来源。',
  /** Title for error when no valid asset sources found */
  'search.error.no-valid-asset-source-title': '未找到有效的资产来源。',
  /** Helpful description for when search returned an error that we are not able to describe in detail */
  'search.error.unspecified-error-help-description': '请再试一次或检查您的连接',
  /** Title label for when search returned an error that we are not able to describe in detail */
  'search.error.unspecified-error-title': '搜索时出了点问题',
  /**
   * Label for "All fields", a label that appears above the list of available fields when filtering.
   * If one or more document type has been chosen as filter, this label is replaced with a group of
   * fields per selected document type
   */
  'search.filter-all-fields-header': '所有字段',
  /** Label for the action of changing from one file to a different file in asset search filter */
  'search.filter-asset-change_file': '更换文件',
  /** Label for the action of changing from one image to a different image in asset search filter */
  'search.filter-asset-change_image': '更换图片',
  /** Label for the action of clearing the currently selected asset in an image/file filter */
  'search.filter-asset-clear': '清除',
  /** Label for the action of selecting a file in asset search filter */
  'search.filter-asset-select_file': '选择文件',
  /** Label for the action of selecting an image in asset search filter */
  'search.filter-asset-select_image': '选择图片',
  /** Label for boolean filter - false */
  'search.filter-boolean-false': '假',
  /** Label for boolean filter - true */
  'search.filter-boolean-true': '真',
  /** Accessibility label for list that lets you filter fields by title, when adding a new filter in search */
  'search.filter-by-title-aria-label': '按标题筛选',
  /** Accessibility label for date filter input */
  'search.filter-date-aria-label': '日期',
  /** Accessibility label for selecting end date on the date range search filter */
  'search.filter-date-range-end-date-aria-label': '结束日期',
  /** Accessibility label for selecting start date on the date range search filter */
  'search.filter-date-range-start-date-aria-label': '开始日期',
  /**
   * Label for "Days"/"Months"/"Years" when selecting it as unit in "X days ago" search filter.
   * Capitalized, as it would be listed in a dropdown.
   */
  'search.filter-date-unit_days': '天',
  'search.filter-date-unit_months': '月',
  'search.filter-date-unit_years': '年',
  /** Accessibility label for selecting the unit (day/month/year) when adding "X days ago" search filter */
  'search.filter-date-unit-aria-label': '选择单位',
  /** Accessibility label for the input value (days/months/years) when adding "X days ago" search filter */
  'search.filter-date-value-aria-label': '单位值',
  /** Label for "field description" shown in tooltip when navigating list of possible fields to filter */
  'search.filter-field-tooltip-description': '字段描述',
  /** Label for "field name" shown in tooltip when navigating list of possible fields to filter */
  'search.filter-field-tooltip-name': '字段名称',
  /** Label for "Used in document types", a list of the document types a field appears in. Shown in tooltip when navigating list of possible fields to filter */
  'search.filter-field-tooltip-used-in-document-types': '用于文档类型',
  /** Label for when no fields/filters are found for the given term */
  'search.filter-no-matches-found': '没有找到与{{filter}}相符的项',
  /** Placeholder value for maximum numeric value filter */
  'search.filter-number-max-value-placeholder': '最大值',
  /** Placeholder value for minimum numeric value filter */
  'search.filter-number-min-value-placeholder': '最小值',
  /** Placeholder value for the number filter */
  'search.filter-number-value-placeholder': '值',
  /** Placeholder for the "Filter" input, when narrowing possible fields/filters */
  'search.filter-placeholder': '筛选',
  /** Label for the action of clearing the currently selected document in a reference filter */
  'search.filter-reference-clear': '清除',
  /**
   * Label for "shared fields", a label that appears above a list of fields that all filtered types
   * have in common, when adding a new filter. For instance, if "book" and "employee" both have a
   * "title" field, this field would be listed under "shared fields".
   * */
  'search.filter-shared-fields-header': '共享字段',
  /** Placeholder value for the string filter */
  'search.filter-string-value-placeholder': '值',
  /** Label/placeholder prompting user to select one of the predefined, allowed values for a string field */
  'search.filter-string-value-select-predefined-value': '选择…',
  /** Accessibility label for the "Filters" list, that is shown when using "Add filter" in search (plural) */
  'search.filters-aria-label_other': '过滤器',
  /** Label for instructions on how to use the search - displayed when no recent searches are available */
  'search.instructions': '使用 <ControlsIcon/> 来精细化您的搜索',
  /** Helpful description for when no search results are found */
  'search.no-results-help-description': '尝试另一个关键词或调整您的过滤器',
  /** Title label for when no search results are found */
  'search.no-results-title': '未找到结果',
  'search.operator.array-count-equal.description_other':
    '<Field/> <Operator>有</Operator> <Value>{{count}} 项</Value>',
  'search.operator.array-count-equal.name': '数量是',
  'search.operator.array-count-gt.description_other':
    '<Field/> <Operator>有 ></Operator> <Value>{{count}} 项</Value>',
  'search.operator.array-count-gt.name': '数量大于',
  'search.operator.array-count-gte.description_other':
    '<Field/> <Operator>有 ≥</Operator> <Value>{{count}} 项</Value>',
  'search.operator.array-count-gte.name': '数量大于或等于',
  'search.operator.array-count-lt.description_other':
    '<Field/> <Operator>有 <</Operator> <Value>{{count}} 项</Value>',
  'search.operator.array-count-lt.name': '数量小于',
  'search.operator.array-count-lte.description_other':
    '<Field/> <Operator>有 ≤</Operator> <Value>{{count}} 项</Value>',
  'search.operator.array-count-lte.name': '数量小于或等于',
  'search.operator.array-count-not-equal.description_other':
    '<Field/> <Operator>没有</Operator> <Value>{{count}} 项</Value>',
  'search.operator.array-count-not-equal.name': '数量不是',
  /**
   * Array should have a count within the range of given filter values.
   * Gets passed `{{from}}` and `{{to}}` values.
   **/
  'search.operator.array-count-range.description':
    '<Field/> <Operator>有</Operator> <Value>{{from}} → {{to}} 项</Value>',
  'search.operator.array-count-range.name': '数量介于',
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
    '<Field/> <Operator>在之后</Operator> <Value>{{value}}</Value>',
  'search.operator.date-after.name': '之后',
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
    '<Field/> <Operator>在最后</Operator> <Value>{{value}}</Value>',
  'search.operator.date-last.name': '最后',
  /* Date should not be the given filter value */
  'search.operator.date-not-equal.description':
    '<Field/> <Operator>不是</Operator> <Value>{{value}}</Value>',
  'search.operator.date-not-equal.name': '不是',
  /* Date should be within the range of given filter values */
  'search.operator.date-range.description': '<Field/> <Operator>在之间</Operator> <Value/>',
  'search.operator.date-range.name': '介于',
  /* Date and time should be after (later than) given filter value */
  'search.operator.date-time-after.description':
    '<Field/> <Operator>在之后</Operator> <Value>{{value}}</Value>',
  'search.operator.date-time-after.name': '之后',
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
    '<Field/> <Operator>在最后</Operator> <Value>{{value}}</Value>',
  'search.operator.date-time-last.name': '最后',
  /* Date and time should not be the given filter value */
  'search.operator.date-time-not-equal.description':
    '<Field/> <Operator>不是</Operator> <Value>{{value}}</Value>',
  'search.operator.date-time-not-equal.name': '不是',
  /* Date and time should be within the range of given filter values */
  'search.operator.date-time-range.description': '<Field/> <Operator>介于</Operator> <Value/>',
  'search.operator.date-time-range.name': '介于',
  /* Value should be defined */
  'search.operator.defined.description': '<Field/> <Operator>是</Operator> <Value>非空</Value>',
  'search.operator.defined.name': '非空',
  /* Value should not be defined */
  'search.operator.not-defined.description': '<Field/> <Operator>是</Operator> <Value>空</Value>',
  'search.operator.not-defined.name': '空',
  /* Number should be the given filter value */
  'search.operator.number-equal.description':
    '<Field/> <Operator>是</Operator> <Value>{{value}}</Value>',
  'search.operator.number-equal.name': '是',
  /* Number should be greater than given filter value */
  'search.operator.number-gt.description':
    '<Field/> <Operator>></Operator> <Value>{{value}}</Value>',
  'search.operator.number-gt.name': '大于',
  /* Number should be greater than or the given filter value */
  'search.operator.number-gte.description':
    '<Field/> <Operator>≥</Operator> <Value>{{value}}</Value>',
  'search.operator.number-gte.name': '大于或等于',
  /* Number should be less than given filter value */
  'search.operator.number-lt.description':
    '<Field/> <Operator><</Operator> <Value>{{value}}</Value>',
  'search.operator.number-lt.name': '小于',
  /* Number should be less than or the given filter value */
  'search.operator.number-lte.description':
    '<Field/> <Operator>≤</Operator> <Value>{{value}}</Value>',
  'search.operator.number-lte.name': '小于或等于',
  /* Number should not be the given filter value */
  'search.operator.number-not-equal.description':
    '<Field/> <Operator>不是</Operator> <Value>{{value}}</Value>',
  'search.operator.number-not-equal.name': '不是',
  /* Number should be within the range of given filter values */
  'search.operator.number-range.description':
    '<Field/> <Operator>介于</Operator> <Value>{{from}} → {{to}}</Value>',
  'search.operator.number-range.name': '介于',
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
  'search.operator.reference-asset-file.name': '文件',
  /* References the given asset (image) */
  'search.operator.reference-asset-image.description':
    '<Field/> <Operator>→</Operator> <Value>{{value}}</Value>',
  'search.operator.reference-asset-image.name': '图像',
  /* References the given document */
  'search.operator.reference-document.description':
    '<Field/> <Operator>→</Operator> <Value>{{value}}</Value>',
  'search.operator.reference-document.name': '文档',
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
  'search.ordering.created-ascending-label': '创建时间：最早的在前',
  /** Label for the "Created: Newest first" search ordering type */
  'search.ordering.created-descending-label': '创建时间：最新的在前',
  /** Label for the "Updated: Oldest first" search ordering type */
  'search.ordering.updated-ascending-label': '更新时间：最早的在前',
  /** Label for the "Updated: Newest first" search ordering type */
  'search.ordering.updated-descending-label': '更新时间：最新的在前',
  /** Placeholder text for the global search input field */
  'search.placeholder': '搜索',
  /** Accessibility label for the recent searches section, shown when no valid search terms has been given */
  'search.recent-searches-aria-label': '最近的搜索',
  /** Label/heading shown for the recent searches section */
  'search.recent-searches-label': '最近的搜索',
  /** Accessibility label for the search results section, shown when the user has typed valid terms */
  'search.search-results-aria-label': '搜索结果',

  /** Accessibility label for the navbar status button */
  'status-button.aria-label': '配置状态',

  /** Description for error when the timeline for the given document can't be loaded */
  'timeline.error.load-document-changes-description': '文档历史事务未受影响。',
  /** Title for error when the timeline for the given document can't be loaded */
  'timeline.error.load-document-changes-title': '检索文档更改时发生错误。',
  /** Error description for when the document doesn't have history */
  'timeline.error.no-document-history-description': '更改文档内容时，文档版本将出现在此菜单中。',
  /** Error title for when the document doesn't have history */
  'timeline.error.no-document-history-title': '无文档历史',
  /** Error prompt when revision cannot be loaded */
  'timeline.error.unable-to-load-revision': '无法加载修订版',
  /** Label for when the timeline item is the latest in the history */
  'timeline.latest': '最新',
  /** Label for latest version for timeline menu dropdown */
  'timeline.latest-version': '最新版本',
  /** The aria-label for the list of revisions in the timeline */
  'timeline.list.aria-label': '文档修订版',
  /** Label for loading history */
  'timeline.loading-history': '正在加载历史记录…',
  /** Label shown in review changes timeline when a document has been created */
  'timeline.operation.created': '已创建',
  /** Label shown in review changes timeline when a document has been created, with a timestamp */
  'timeline.operation.created_timestamp': '创建时间：{{timestamp, datetime}}',
  /** Label shown in review changes timeline when a document was initially created */
  'timeline.operation.created-initial': '已创建',
  /** Label shown in review changes timeline when a document was initially created, with a timestamp */
  'timeline.operation.created-initial_timestamp': '创建时间：{{timestamp, datetime}}',
  /** Label shown in review changes timeline when a document has been deleted */
  'timeline.operation.deleted': '已删除',
  /** Label shown in review changes timeline when a document has been deleted, with a timestamp */
  'timeline.operation.deleted_timestamp': '删除时间：{{timestamp, datetime}}',
  /** Label shown in review changes timeline when a draft has been discarded */
  'timeline.operation.draft-discarded': '已丢弃草稿',
  /** Label shown in review changes timeline when a draft has been discarded, with a timestamp */
  'timeline.operation.draft-discarded_timestamp': '丢弃草稿时间：{{timestamp, datetime}}',
  /** Label shown in review changes timeline when a draft has been edited */
  'timeline.operation.edited-draft': '已编辑',
  /** Label shown in review changes timeline when a draft has been edited, with a timestamp */
  'timeline.operation.edited-draft_timestamp': '编辑时间：{{timestamp, datetime}}',
  /** Label shown in review changes timeline when a document has been edited live */
  'timeline.operation.edited-live': '实时编辑',
  /** Label shown in review changes timeline when a document has been edited live, with a timestamp */
  'timeline.operation.edited-live_timestamp': '实时编辑时间：{{timestamp, datetime}}',
  /** Label shown in review changes timeline when a document was published */
  'timeline.operation.published': '已发布',
  /** Label shown in review changes timeline when a document was published, with a timestamp */
  'timeline.operation.published_timestamp': '已发布：{{timestamp, datetime}}',
  /** Label shown in review changes timeline when a document was unpublished */
  'timeline.operation.unpublished': '未发布',
  /** Label shown in review changes timeline when a document was unpublished, with a timestamp */
  'timeline.operation.unpublished_timestamp': '未发布：{{timestamp, datetime}}',
  /**
   * Label for determining since which version the changes for timeline menu dropdown are showing.
   * Receives the time label as a parameter (`timestamp`).
   */
  'timeline.since': '自：{{timestamp, datetime}}',
  /** Label for missing change version for timeline menu dropdown are showing */
  'timeline.since-version-missing': '自：未知版本',

  /**Aria label for the action buttons in the PTE toolbar */
  'toolbar.portable-text.action-button-aria-label': '{{action}}',

  'user-menu.action.free-trial_other': '试用期还剩 {{count}} 天',
  /** Label for the button showed after trial ended */
  'user-menu.action.free-trial-finished': '从免费版升级',
  /** Label for action to invite members to the current sanity project */
  'user-menu.action.invite-members': '邀请成员',
  /** Accessibility label for action to invite members to the current sanity project */
  'user-menu.action.invite-members-aria-label': '邀请成员',
  /** Label for action to manage the current sanity project */
  'user-menu.action.manage-project': '管理项目',
  /** Accessibility label for the action to manage the current project */
  'user-menu.action.manage-project-aria-label': '管理项目',
  /** Tooltip helper text when portable text annotation is disabled for empty block*/
  'user-menu.action.portable-text.annotation-disabled_empty-block': '无法对空白块应用 {{name}}',
  /** Tooltip helper text when portable text annotation is disabled for multiple blocks */
  'user-menu.action.portable-text.annotation-disabled_multiple-blocks': '无法对多个块应用 {{name}}',
  /** Label for action to sign out of the current sanity project */
  'user-menu.action.sign-out': '登出',
  /** Title for appearance section for the current studio (dark / light / system scheme) */
  'user-menu.appearance-title': '外观',
  /** Label for close menu button for user menu */
  'user-menu.close-menu': '关闭菜单',
  /** Description for using the "dark theme" in the appearance user menu */
  'user-menu.color-scheme.dark-description': '使用深色外观',
  /** Title for using the "dark theme" in the appearance user menu */
  'user-menu.color-scheme.dark-title': '深色',
  /** Description for using the "light theme" in the appearance user menu */
  'user-menu.color-scheme.light-description': '使用浅色外观',
  /** Title for using the "light theme" in the appearance user menu */
  'user-menu.color-scheme.light-title': '浅色',
  /** Description for using "system apparence" in the appearance user menu */
  'user-menu.color-scheme.system-description': '使用系统外观',
  /** Title for using system apparence in the appearance user menu */
  'user-menu.color-scheme.system-title': '系统',
  /** Title for locale section for the current studio */
  'user-menu.locale-title': '语言',
  /** Label for tooltip to show which provider the currently logged in user is using */
  'user-menu.login-provider': '已通过{{providerTitle}}登录',
  /** Label for open menu button for user menu */
  'user-menu.open-menu': '打开菜单',

  /**
   * Label for action to add a workspace (currently a developer-oriented action, as this will
   * lead to the documentation on workspace configuration)
   */
  'workspaces.action.add-workspace': '添加工作区',
  /**
   * Label for action to choose a different workspace, in the case where you are not logged in,
   * have selected a workspace, and are faced with the authentication options for the selected
   * workspace. In other words, label for the action shown when you have reconsidered which
   * workspace to authenticate in.
   */
  'workspaces.action.choose-another-workspace': '选择另一个工作区',
  /** Label for heading that indicates that you can choose your workspace */
  'workspaces.choose-your-workspace-label': '选择您的工作区',
  /** Label for the workspace menu */
  'workspaces.select-workspace-aria-label': '选择工作区',
  /** Button label for opening the workspace switcher */
  'workspaces.select-workspace-label': '选择工作区',
  /** Tooltip for the workspace menu */
  'workspaces.select-workspace-tooltip': '选择工作区',
  /** Title for Workplaces dropdown menu */
  'workspaces.title': '工作区',
})
