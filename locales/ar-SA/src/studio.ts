import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Menu item for deleting the asset */
  'asset-source.asset-list.menu.delete': 'حذف',
  /** Menu item for showing where a particular asset is used */
  'asset-source.asset-list.menu.show-usage': 'إظهار الاستخدام',
  /** Header in usage dialog for file assets */
  'asset-source.asset-usage-dialog.header_file': 'المستندات التي تستخدم الملف',
  /** Header in usage dialog for image assets */
  'asset-source.asset-usage-dialog.header_image': 'المستندات التي تستخدم الصورة',
  /** Text shown in usage dialog when loading documents using the selected asset */
  'asset-source.asset-usage-dialog.loading': 'جار التحميل…',
  /** Text for cancel action in delete-asset dialog */
  'asset-source.delete-dialog.action.cancel': 'إلغاء',
  /** Text for "confirm delete" action in delete-asset dialog */
  'asset-source.delete-dialog.action.delete': 'حذف',
  /** Dialog header for delete-asset dialog when deleting a file */
  'asset-source.delete-dialog.header_file': 'حذف الملف',
  /** Dialog header for delete-asset dialog when deleting an image */
  'asset-source.delete-dialog.header_image': 'حذف الصورة',
  /** Text shown in delete dialog when loading documents using the selected asset */
  'asset-source.delete-dialog.loading': 'جار التحميل…',
  /** Message confirming to delete *named* file */
  'asset-source.delete-dialog.usage-list.confirm-delete-file_named':
    'أنت على وشك حذف الملف <strong>{{filename}}}</strong> وبياناته الوصفية. هل أنت متأكد؟',
  /** Message confirming to delete *unnamed* file */
  'asset-source.delete-dialog.usage-list.confirm-delete-file_unnamed':
    'أنت على وشك حذف الملف وبياناته الوصفية. هل أنت متأكد؟',
  /** Message confirming to delete *named* image */
  'asset-source.delete-dialog.usage-list.confirm-delete-image_named':
    'أنت على وشك حذف الصورة <strong>{{filename}}</strong> وبياناتها الوصفية. هل أنت متأكد؟',
  /** Message confirming to delete *unnamed* image */
  'asset-source.delete-dialog.usage-list.confirm-delete-image_unnamed':
    'أنت على وشك حذف الصورة وبياناتها الوصفية. هل أنت متأكد؟',
  /** Alt text showing on image preview in delete asset dialog  */
  'asset-source.delete-dialog.usage-list.image-preview-alt': 'معاينة الصورة',
  /** Warning message showing when *named* file can't be deleted because it is in use */
  'asset-source.delete-dialog.usage-list.warning-file-is-in-use_named':
    '{{filename}} لا يمكن حذفه لأنه يستخدم حالياً. لحذف هذا الملف، يجب عليك أولاً إزالة جميع استخداماته.',
  /** Warning message showing when *unnamed* file can't be deleted because it is in use */
  'asset-source.delete-dialog.usage-list.warning-file-is-in-use_unnamed':
    'لا يمكن حذف هذا الملف لأنه يستخدم حالياً. لحذفه، يجب عليك أولاً إزالة جميع استخداماته.',
  /** Warning message showing when *named* image can't be deleted because it is in use */
  'asset-source.delete-dialog.usage-list.warning-image-is-in-use_named':
    '{{filename}} لا يمكن حذفها لأنها تستخدم حالياً. لحذف هذه الصورة، يجب عليك أولاً إزالة جميع استخداماتها.',
  /** Warning message showing when *unnamed* image can't be deleted because it is in use */
  'asset-source.delete-dialog.usage-list.warning-image-is-in-use_unnamed':
    'لا يمكن حذف هذه الصورة لأنها تستخدم حالياً. لحذفها، يجب عليك أولاً إزالة جميع استخداماتها.',
  /** Text shown when the list of assets only include a specific set of types */
  'asset-source.dialog.accept-message':
    'يتم عرض الأصول من الأنواع المقبولة فقط: <strong>{{acceptTypes}}</strong>',
  /** Keys shared between both image asset source and file asset source */
  /** Select asset dialog title for files */
  'asset-source.dialog.default-title_file': 'اختر ملف',
  /** Select asset dialog title for images */
  'asset-source.dialog.default-title_image': 'اختر صورة',
  /** Select asset dialog load more items */
  'asset-source.dialog.load-more': 'تحميل المزيد',
  /** Text shown when selecting a file but there's no files to select from */
  'asset-source.dialog.no-assets_file': 'لا توجد ملفات',
  /** Text shown when selecting an image but there's no images to select from */
  'asset-source.dialog.no-assets_image': 'لا توجد صور',
  'asset-source.file.asset-list.action.delete.disabled-cannot-delete-current-file':
    'لا يمكن حذف الملف المحدد حالياً',
  'asset-source.file.asset-list.action.delete.text': 'حذف',
  'asset-source.file.asset-list.action.delete.title': 'حذف الملف',
  'asset-source.file.asset-list.action.select-file.title': 'اختر الملف {{filename}}',
  'asset-source.file.asset-list.action.show-usage.title': 'عرض الاستخدام',
  'asset-source.file.asset-list.delete-failed': 'لم يتمكن من حذف الملف',
  'asset-source.file.asset-list.delete-successful': 'تم حذف الملف',
  'asset-source.file.asset-list.header.date-added': 'تاريخ الإضافة',
  /** File asset source */
  'asset-source.file.asset-list.header.filename': 'اسم الملف',
  'asset-source.file.asset-list.header.size': 'الحجم',
  'asset-source.file.asset-list.header.type': 'النوع',
  /** Text displayed on button or menu invoking the file asset source */
  'asset-source.file.title': 'الملفات المرفوعة',
  'asset-source.image.asset-list.delete-failed': 'لم يتمكن من حذف الصورة',
  /** Image asset source */
  'asset-source.image.asset-list.delete-successful': 'تم حذف الصورة',
  /** Text displayed on button or menu invoking the image asset source */
  'asset-source.image.title': 'الصور المرفوعة',
  'asset-source.usage-list.documents-using-file_named_one':
    'يستخدم مستند واحد الملف <code>{{filename}}</code>',
  /** Text shown in usage dialog for a file asset when there are zero, one or more documents using the *named* file **/
  'asset-source.usage-list.documents-using-file_named_zero':
    'لا يوجد مستندات تستخدم الملف <code>{{filename}}</code>',
  'asset-source.usage-list.documents-using-file_unnamed_one': 'يستخدم مستند واحد هذا الملف',
  /** Text shown in usage dialog for a file asset when there are zero, one or more documents using the *unnamed* file **/
  'asset-source.usage-list.documents-using-file_unnamed_zero': 'لا يوجد مستندات تستخدم هذا الملف',
  'asset-source.usage-list.documents-using-image_named_one':
    'يستخدم مستند واحد الصورة <code>{{filename}}</code>',
  /** Text shown in usage dialog for an image asset when there are zero, one or more documents using the *named* image **/
  'asset-source.usage-list.documents-using-image_named_zero':
    'لا يوجد مستندات تستخدم الصورة <code>{{filename}}</code>',
  'asset-source.usage-list.documents-using-image_unnamed_one': 'يستخدم مستند واحد هذه الصورة',
  /** Text shown in usage dialog for an image asset when there are zero, one or more documents using the *unnamed* image **/
  'asset-source.usage-list.documents-using-image_unnamed_zero': 'لا يستخدم أي مستندات هذه الصورة',

  /** Action message for navigating to next month */
  'calendar.action.go-to-next-month': 'الانتقال إلى الشهر التالي',
  /** Action message for navigating to next year */
  'calendar.action.go-to-next-year': 'الانتقال إلى السنة التالية',
  /** Action message for navigating to previous month */
  'calendar.action.go-to-previous-month': 'اذهب إلى الشهر السابق',
  /** Action message for navigating to previous year */
  'calendar.action.go-to-previous-year': 'اذهب إلى السنة السابقة',
  /* Label for navigating the calendar to "today", without _selecting_ today. Short form, eg `Today`, not `Go to today` */
  'calendar.action.go-to-today': 'اليوم',
  /* Accessibility label for navigating the calendar to "today", without _selecting_ today */
  'calendar.action.go-to-today-aria-label': 'اذهب إلى اليوم',
  /* Label for navigating the calendar to "tomorrow", without _selecting_ tomorrow. Short form, eg `Tomorrow`, not `Go to tomorrow` */
  'calendar.action.go-to-tomorrow': 'غدًا',
  /* Label for navigating the calendar to "yesterday", without _selecting_ yesterday. Short form, eg `Yesterday`, not `Go to yesterday` */
  'calendar.action.go-to-yesterday': 'أمس',
  /** Label for switch that controls whether or not to include time in given timestamp */
  'calendar.action.include-time-label': 'تضمين الوقت',
  /** Action message for selecting the hour */
  'calendar.action.select-hour': 'اختر الساعة',
  /** Action message for selecting the minute */
  'calendar.action.select-minute': 'اختر الدقيقة',
  /** Action message for setting to the current time */
  'calendar.action.set-to-current-time': 'تعيين إلى الوقت الحالي',
  /** Label for selecting an hour preset. Receives a `time` param as a string on hh:mm format and a `date` param as a Date instance denoting the preset date */
  'calendar.action.set-to-time-preset': '{{time}} في {{date, datetime}}',
  /** Error message displayed in calendar when entered date is not the correct format */
  'calendar.error.must-be-in-format': 'يجب أن يكون الشكل: {{exampleDate}}',
  /** Month name for April */
  'calendar.month-names.april': 'أبريل',
  /** Month name for August */
  'calendar.month-names.august': 'أغسطس',
  /** Month name for December */
  'calendar.month-names.december': 'ديسمبر',
  /** Month name for February */
  'calendar.month-names.february': 'فبراير',
  /** Month name for January */
  'calendar.month-names.january': 'يناير',
  /** Month name for July */
  'calendar.month-names.july': 'يوليو',
  /** Month name for June */
  'calendar.month-names.june': 'يونيو',
  /** Month name for March */
  'calendar.month-names.march': 'مارس',
  /** Month name for May */
  'calendar.month-names.may': 'مايو',
  /** Month name for November */
  'calendar.month-names.november': 'نوفمبر',
  /** Month name for October */
  'calendar.month-names.october': 'أكتوبر',
  /** Month name for September */
  'calendar.month-names.september': 'سبتمبر',
  /** Short weekday name for Friday */
  'calendar.weekday-names.short.friday': 'الجمعة',
  /** Short weekday name for Monday */
  'calendar.weekday-names.short.monday': 'الإثنين',
  /** Short weekday name for Saturdayday */
  'calendar.weekday-names.short.saturday': 'السبت',
  /** Short weekday name for Sunday */
  'calendar.weekday-names.short.sunday': 'الأحد',
  /** Short weekday name for Thursday */
  'calendar.weekday-names.short.thursday': 'الخميس',
  /** Short weekday name for Tuesday */
  'calendar.weekday-names.short.tuesday': 'الثلاثاء',
  /** Short weekday name for Wednesday */
  'calendar.weekday-names.short.wednesday': 'الأربعاء',

  /** Label for the close button label in Review Changes pane */
  'changes.action.close-label': 'إغلاق مراجعة التغييرات',
  /** Cancel label for revert button prompt action */
  'changes.action.revert-all-cancel': 'إلغاء',
  /** Revert all confirm label for revert button action - used on prompt button + review changes pane */
  'changes.action.revert-all-confirm': 'استرجاع الكل',
  /** Prompt for confirming revert change (singular) label for field change action */
  'changes.action.revert-changes-confirm-change_one': 'استرجاع التغيير',
  /** Prompt for reverting changes for a field change */
  'changes.action.revert-changes-description': 'هل أنت متأكد أنك تريد استرجاع التغييرات؟',
  /** Prompt for reverting changes for a group change, eg multiple changes */
  'changes.action.revert-changes-description_one': 'هل أنت متأكد أنك تريد استرجاع التغيير؟',
  /** Label for when the action of the change was to set something that was previously empty, eg a field was given a value, an array item was added, an asset was selected or similar */
  'changes.added-label': 'تمت الإضافة',
  /** Array diff: An item was added in a given position (`{{position}}`) */
  'changes.array.item-added-in-position': 'تمت الإضافة في الموقع {{position}}',
  'changes.array.item-moved_down_one': 'تم النقل {{count}} مركز للأسفل',
  /**
   * Array diff: An item was moved within the array.
   * Receives `{{count}}` representing number of positions it moved.
   * Context is the direction of the move, either `up` or `down`.
   */
  'changes.array.item-moved_up_one': 'تم النقل {{count}} مركز للأعلى',
  /** Array diff: An item was removed from a given position (`{{position}}`) */
  'changes.array.item-removed-from-position': 'تم الإزالة من الموقع {{position}}',
  /** Accessibility label for the "change bar" shown when there are edits on a field-level */
  'changes.change-bar.aria-label': 'مراجعة التغييرات',
  /** Label for when the action of the change was _not_ an add/remove, eg a text field changed value, an image was changed from one asset to another or similar */
  'changes.changed-label': 'تغير',
  /** Label and text for tooltip that indicates the authors of the changes */
  'changes.changes-by-author': 'التغييرات بواسطة',
  /** Additional text shown in development mode when a diff component crashes during rendering */
  'changes.error-boundary.developer-info':
    'راجع وحدة التحكم الخاصة بالمطور للحصول على مزيد من المعلومات',
  /** Text shown when a diff component crashes during rendering, triggering the error boundary */
  'changes.error-boundary.title': 'تسبب تقديم التغييرات لهذا الحقل في حدوث خطأ',
  /** Error message shown when the value of a field is not the expected one */
  'changes.error.incorrect-type-message':
    'خطأ في القيمة: القيمة من النوع "<code>{{actualType}}</code>", المتوقع "<code>{{expectedType}}</code>"',
  /** File diff: Fallback title for the meta info section when there is no original filename to use  */
  'changes.file.meta-info-fallback-title': 'بدون عنوان',
  /** Image diff: Text shown in tooltip when hovering hotspot that has changed in diff view */
  'changes.image.crop-changed': 'تغير القص',
  /** Image diff: Text shown if the previous image asset was deleted (shouldn't theoretically happen) */
  'changes.image.deleted': 'تم حذف الصورة',
  /** Image diff: Text shown if the image failed to be loaded when previewing it */
  'changes.image.error-loading-image': 'خطأ في تحميل الصورة',
  /** Image diff: Text shown in tooltip when hovering hotspot that has changed in diff view */
  'changes.image.hotspot-changed': 'تغير النقطة الساخنة',
  /** Image diff: Fallback title for the meta info section when there is no original filename to use  */
  'changes.image.meta-info-fallback-title': 'بدون عنوان',
  /** Image diff: Text shown if no asset has been set for the field (but has metadata changes) */
  'changes.image.no-asset-set': 'لم يتم تعيين صورة',
  /** Image diff: Text shown when the from/to state has/had no image */
  'changes.image.no-image-placeholder': '(لا توجد صورة)',
  /** Label for the "from" value in the change inspector */
  'changes.inspector.from-label': 'من',
  /** Label for the "meta" (field path, action etc) information in the change inspector */
  'changes.inspector.meta-label': 'البيانات الوصفية',
  /** Label for the "to" value in the change inspector */
  'changes.inspector.to-label': 'إلى',
  /** Loading author of change in the differences tooltip in the review changes pane */
  'changes.loading-author': 'جار التحميل…',
  /** Loading changes in Review Changes Pane */
  'changes.loading-changes': 'جار تحميل التغييرات…',
  /** No Changes description in the Review Changes pane */
  'changes.no-changes-description':
    'قم بتعديل المستند أو اختر نسخة أقدم في الجدول الزمني لرؤية قائمة التغييرات تظهر في هذه اللوحة.',
  /** No Changes title in the Review Changes pane */
  'changes.no-changes-title': 'لا توجد تغييرات',
  /** Portable Text diff: An annotation was added */
  'changes.portable-text.annotation_added': 'تم إضافة تعليق توضيحي',
  /** Portable Text diff: An annotation was changed */
  'changes.portable-text.annotation_changed': 'تم تغيير التعليق التوضيحي',
  /** Portable Text diff: An annotation was removed */
  'changes.portable-text.annotation_removed': 'تم إزالة التعليق التوضيحي',
  /** Portable Text diff: An annotation was left unchanged */
  'changes.portable-text.annotation_unchanged': 'التعليق التوضيحي بدون تغيير',
  /** Portable Text diff: A block changed from one style to another (eg `normal` to `h1` or similar) */
  'changes.portable-text.block-style-changed':
    'تغير نمط الكتلة من "{{fromStyle}}" إلى "{{toStyle}}"',
  /** Portable Text diff: Change formatting of text (setting/unsetting marks, eg bold/italic etc) */
  'changes.portable-text.changed-formatting': 'تغير التنسيق',
  /** Portable Text diff: An empty inline object is part of a change */
  'changes.portable-text.empty-inline-object': '{{inlineObjectType}} فارغ',
  /** Portable Text diff: An empty object is the result of adding/removing an annotation */
  'changes.portable-text.empty-object-annotation': '{{annotationType}} فارغ',
  /** Portable Text diff: Added a block containing no text (eg empty block) */
  'changes.portable-text.empty-text_added': 'تم إضافة نص فارغ',
  /** Portable Text diff: Changed a block that contained no text (eg empty block) */
  'changes.portable-text.empty-text_changed': 'تم تغيير نص فارغ',
  /** Portable Text diff: Removed a block containing no text (eg empty block) */
  'changes.portable-text.empty-text_removed': 'تم إزالة نص فارغ',
  /** Portable Text diff: An inline object was added */
  'changes.portable-text.inline-object_added': 'تم إضافة كائن مضمن',
  /** Portable Text diff: An inline object was changed */
  'changes.portable-text.inline-object_changed': 'تم تغيير الكائن المضمن',
  /** Portable Text diff: An inline object was removed */
  'changes.portable-text.inline-object_removed': 'تم إزالة الكائن المضمن',
  /** Portable Text diff: An inline object was left unchanged */
  'changes.portable-text.inline-object_unchanged': 'الكائن المضمن دون تغيير',
  /** Portable Text diff: Added a chunk of text */
  'changes.portable-text.text_added': 'تم إضافة نص',
  /** Portable Text diff: Removed a chunk of text */
  'changes.portable-text.text_removed': 'تم إزالة نص',
  /** Portable Text diff: Annotation has an unknown schema type */
  'changes.portable-text.unknown-annotation-schema-type': 'نوع المخطط غير معروف',
  /** Portable Text diff: Inline object has an unknown schema type */
  'changes.portable-text.unknown-inline-object-schema-type': 'نوع المخطط غير معروف',
  /** Label for when the action of the change was a removal, eg a field was cleared, an array item was removed, an asset was deselected or similar */
  'changes.removed-label': 'تم الإزالة',
  /** Title for the Review Changes pane */
  'changes.title': 'مراجعة التغييرات',

  /** --- Common components --- */
  /** Tooltip text for context menu buttons */
  'common.context-menu-button.tooltip': 'إظهار المزيد',
  /** Default text for dialog cancel button */
  'common.dialog.cancel-button.text': 'إلغاء',
  /** Default text for dialog confirm button */
  'common.dialog.confirm-button.text': 'تأكيد',
  /** Default text in shared loader text / spinner lockup */
  'common.loading': 'جار التحميل',

  /** --- Configuration issues --- */
  /** Tooltip displayed on configuration issues button */
  'configuration-issues.button.tooltip': 'تم العثور على مشاكل في التكوين',

  /** The fallback title for an ordering menu item if no localized titles are provided. */
  'default-menu-item.fallback-title': 'الترتيب حسب {{title}}',

  /** Title for the default ordering/SortOrder if no orderings are provided and the caption field is found */
  'default-orderings.caption': 'الترتيب حسب التعليق التوضيحي',
  /** Title for the default ordering/SortOrder if no orderings are provided and the description field is found */
  'default-orderings.description': 'الترتيب حسب الوصف',
  /** Title for the default ordering/SortOrder if no orderings are provided and the header field is found */
  'default-orderings.header': 'الترتيب حسب الرأس',
  /** Title for the default ordering/SortOrder if no orderings are provided and the heading field is found */
  'default-orderings.heading': 'الترتيب حسب العنوان',
  /** Title for the default ordering/SortOrder if no orderings are provided and the label field is found */
  'default-orderings.label': 'الترتيب حسب التسمية',
  /** Title for the default ordering/SortOrder if no orderings are provided and the name field is found */
  'default-orderings.name': 'الترتيب حسب الاسم',
  /** Title for the default ordering/SortOrder if no orderings are provided and the title field is found */
  'default-orderings.title': 'الترتيب حسب العنوان',

  /** Label to show in the document footer indicating the last edited date of the document */
  'document-status.edited': 'تم التحرير {{date}}',
  /** Label to show in the document footer indicating the document is not published*/
  'document-status.not-published': 'غير منشور',
  /** Label to show in the document footer indicating the published date of the document */
  'document-status.published': 'تم النشر {{date}}',

  /** The value of the <code>_key</code> property must be a unique string. */
  'form.error.duplicate-keys-alert.details.additional-description':
    'يجب أن تكون قيمة خاصية <code>_key</code> نصًا فريدًا.',
  /** This usually happens when items are created using an API client, and the <code>_key</code> property of each elements has been generated non-uniquely. */
  'form.error.duplicate-keys-alert.details.description':
    'هذا يحدث عادةً عندما يتم إنشاء العناصر باستخدام عميل API، وتم توليد خاصية <code>_key</code> لكل عنصر بشكل غير فريد.',
  /** Developer info */
  'form.error.duplicate-keys-alert.details.title': 'معلومات المطور',
  /** Generate unique keys */
  'form.error.duplicate-keys-alert.generate-button.text': 'توليد مفاتيح فريدة',
  /** Several items in this list share the same identifier (key). Every item must have an unique identifier. */
  'form.error.duplicate-keys-alert.summary':
    'عدة عناصر في هذه القائمة تشارك نفس المعرف (المفتاح). يجب أن يكون لكل عنصر معرف فريد.',
  /** Non-unique keys */
  'form.error.duplicate-keys-alert.title': 'مفاتيح غير فريدة',
  /** Error text shown when a field with a given name cannot be found in the schema or is conditionally hidden but explicitly told to render  */
  'form.error.field-not-found':
    'لم يتم العثور على الحقل "{{fieldName}}" بين الأعضاء – تحقق من أنه محدد في المخطط وأنه لم يتم إخفاؤه بشكل مشروط.',
  /** Add missing keys */
  'form.error.missing-keys-alert.add-button.text': 'إضافة مفاتيح مفقودة',
  /** The value of the <code>_key</code> property must be a unique string. */
  'form.error.missing-keys-alert.details.additional-description':
    'يجب أن تكون قيمة خاصية <code>_key</code> نصًا فريدًا.',
  /** This usually happens when items are created using an API client, and the <code>_key</code> property has not been included. */
  'form.error.missing-keys-alert.details.description':
    'هذا يحدث عادةً عندما يتم إنشاء العناصر باستخدام عميل API، ولم تتضمن خاصية <code>_key</code>.',
  /** Developer info */
  'form.error.missing-keys-alert.details.title': 'معلومات المطور',
  /** Some items in the list are missing their keys. This must be fixed in order to edit the list. */
  'form.error.missing-keys-alert.summary':
    'بعض العناصر في القائمة تفتقد إلى مفاتيحها. يجب إصلاح ذلك من أجل تحرير القائمة.',
  /** Missing keys */
  'form.error.missing-keys-alert.title': 'مفاتيح مفقودة',
  /** This usually happens when items are created using an API client, or when a custom input component has added invalid data to the list. */
  'form.error.mixed-array-alert.details.description':
    'هذا يحدث عادةً عندما يتم إنشاء العناصر باستخدام عميل API، أو عندما يضيف مكون إدخال مخصص بيانات غير صالحة إلى القائمة.',
  /** Developer info */
  'form.error.mixed-array-alert.details.title': 'معلومات المطور',
  /**  Remove non-object values */
  'form.error.mixed-array-alert.remove-button.text': 'إزالة القيم غير الكائنية',
  /** Some items in this list are not objects. This must be fixed in order to edit the list. */
  'form.error.mixed-array-alert.summary':
    'بعض العناصر في هذه القائمة ليست كائنات. يجب إصلاح ذلك من أجل تحرير القائمة.',
  /** Invalid list values */
  'form.error.mixed-array-alert.title': 'قيم القائمة غير صالحة',
  /** Error text shown when form is unable to find an array item at a given indexed path */
  'form.error.no-array-item-at-index':
    'لم يتم العثور على عنصر مصفوفة في الفهرس <code>{{index}}</code> على المسار <code>{{path}}</code>',
  /** Error text shown when form is unable to find an array item at a given keyed path */
  'form.error.no-array-item-at-key':
    'لم يتم العثور على عنصر مصفوفة بـ \'_key\' <code>"{{key}}"</code> على المسار <code>{{path}}</code>',
  /** Form field deprecated label */
  'form.field.deprecated-label': 'مهجور',
  /** Fallback title shown above field if it has no defined title */
  'form.field.untitled-field-label': 'حقل بدون عنوان',
  /** Fallback title shown above fieldset if it has no defined title */
  'form.field.untitled-fieldset-label': 'مجموعة حقول بدون عنوان',
  /** Accessibility label for the icon that indicates the field has a validation error */
  'form.validation.has-error-aria-label': 'يحتوي على خطأ',
  /** Accessibility label for the icon that indicates the field has validation information */
  'form.validation.has-info-aria-label': 'يحتوي على معلومات',
  /** Accessibility label for the icon that indicates the field has a validation warning */
  'form.validation.has-warning-aria-label': 'يوجد تحذير',
  /** Text shown when summarizing validation information, when the field has one or more errors */
  'form.validation.summary.errors-count_one': '{{count}} خطأ',
  /** Text shown when summarizing validation information, when the field has one or more warnings */
  'form.validation.summary.warnings-count_one': '{{count}} تحذير',

  /** Tooltip for free trial navbar button indicating remaining days */
  'free-trial.tooltip.days-count_one': 'باقي {{count}} يوم في الفترة التجريبية',
  /** Tooltip for free trial navbar button, once trial has ended */
  'free-trial.tooltip.trial-finished': 'قم بترقية مشروعك',

  /**
   * Label for "contact sales" call to action
   * These are titles for fallback links in the event the help & resources endpoint isn't able to be fetched
   */
  'help-resources.action.contact-sales': 'تواصل مع المبيعات',
  /**
   * Label for "help and support" call to action
   * These are titles for fallback links in the event the help & resources endpoint isn't able to be fetched
   */
  'help-resources.action.help-and-support': 'المساعدة والدعم',
  /**
   * Label for "join our community" call to action
   * These are titles for fallback links in the event the help & resources endpoint isn't able to be fetched
   */
  'help-resources.action.join-our-community': 'انضم إلى مجتمعنا',
  /** Information for what the latest sanity version is */
  'help-resources.latest-sanity-version': 'آخر إصدار هو {{latestVersion}}',
  /** Information for what studio version the current studio is running */
  'help-resources.studio-version': 'إصدار Sanity Studio {{studioVersion}}',
  /** Title for help and resources menus */
  'help-resources.title': 'المساعدة والموارد',

  /** Text for button to cancel an ongoing upload */
  'input.files.common.cancel-upload': 'إلغاء',
  /** Text for file input button in upload placeholder */
  'input.files.common.upload-placeholder.file-input-button.text': 'رفع',
  /** Uploading <FileName/> */
  'input.files.common.upload-progress': 'جاري الرفع <FileName/>',
  /** The referenced document cannot be opened, because the URL failed to be resolved */
  'input.reference.document-cannot-be-opened.failed-to-resolve-url':
    'لا يمكن فتح هذا المستند (تعذر حل عنوان URL إلى Studio)',

  /** Label for adding item after a specific array item */
  'inputs.array.action.add-after': 'إضافة عنصر بعد',
  /** Label for adding item before a specific array item */
  'inputs.array.action.add-before': 'إضافة عنصر قبل',
  /** Label for adding array item action when the schema allows for only one schema type */
  'inputs.array.action.add-item': 'إضافة عنصر',
  /**
   * Label for adding one array item action when the schema allows for multiple schema types,
   * eg. will prompt the user to select a type once triggered
   */
  'inputs.array.action.add-item-select-type': 'إضافة عنصر...',
  /** Array drag handle button tooltip */
  'inputs.array.action.drag.tooltip': 'اسحب لإعادة الترتيب',
  /** Label for duplicating an array item  */
  'inputs.array.action.duplicate': 'تكرار',
  /** Label for editing the item of a specific type, eg "Edit Person" */
  'inputs.array.action.edit': 'تحرير {{itemTypeTitle}}',
  /** Label for removing an array item action  */
  'inputs.array.action.remove': 'إزالة',
  /** Label for removing action when an array item has an error  */
  'inputs.array.action.remove-invalid-item': 'إزالة',
  /** Label for viewing the item of a specific type, eg "View Person" */
  'inputs.array.action.view': 'عرض {{itemTypeTitle}}',
  /** Error description for the array item tooltip that explains that the current item can still be moved or deleted but not edited since the schema definition is not found */
  'inputs.array.error.can-delete-but-no-edit-description':
    'لا يمكنك تحريك أو حذف هذا العنصر، ولكن لا يمكن تعديله لأن تعريف المخطط الخاص بنوعه غير موجود.',
  /** Error label for toast when array could not resolve the initial value */
  'inputs.array.error.cannot-resolve-initial-value-title':
    'غير قادر على تحديد القيمة الأولية للنوع: {{schemaTypeTitle}}: {{errorMessage}}.',
  /** Error label for toast when trying to upload one array item of a type that cannot be converted to array */
  'inputs.array.error.cannot-upload-unable-to-convert_one':
    'لا يمكن تحميل العنصر التالي لأنه لا توجد تحويلة معروفة من نوع المحتوى إلى عنصر المصفوفة:',
  /** Error description for the array item tooltip that explains that the current type item is not valid for the list  */
  'inputs.array.error.current-schema-not-declare-description':
    'المخطط الحالي لا يعلن عناصر من النوع <code>{{typeName}}</code> كصالحة لهذه القائمة. قد يعني ذلك أن النوع قد تم إزالته كعنصر صالح، أو أن شخصًا آخر قد أضافه إلى مخططه المحلي الخاص الذي لم يتم نشره بعد.',
  /** Error description to show how the item is being represented in the json format */
  'inputs.array.error.json-representation-description': 'تمثيل JSON لهذا العنصر:',
  /** Error description for the array item tooltip that explains what the error means with more context */
  'inputs.array.error.type-is-incompatible-prompt':
    'عنصر من النوع <code>{{typeName}}</code> غير صالح لهذه القائمة',
  /** Error title for when an item type within an array input is incompatible, used in the tooltip */
  'inputs.array.error.type-is-incompatible-title': 'لماذا يحدث هذا؟',
  /** Error label for unexpected errors in the Array Input */
  'inputs.array.error.unexpected-error': 'خطأ غير متوقع: {{error}}',
  /** Label for when the array input doesn't have any items */
  'inputs.array.no-items-label': 'لا توجد عناصر',
  /** Label for read only array fields */
  'inputs.array.read-only-label': 'هذا الحقل للقراءة فقط',
  /** Label for when the array input is resolving the initial value for the item */
  'inputs.array.resolving-initial-value': 'جاري تحديد القيمة الأولية...',
  /** Placeholder value for datetime input */
  'inputs.datetime.placeholder': 'مثال. {{example}}',
  /** Acessibility label for button to open file options menu */
  'inputs.file.actions-menu.file-options.aria-label': 'فتح قائمة خيارات الملف',
  /** Browse */
  'inputs.file.browse-button.text': 'تصفح',
  /** Select file */
  'inputs.file.dialog.title': 'اختر ملف',
  /** Unknown member kind: `{{kind}}` */
  'inputs.file.error.unknown-member-kind': 'نوع العضو غير معروف: {{kind}}',
  /** The value of this field is not a valid file. Resetting this field will let you choose a new file. */
  'inputs.file.invalid-file-warning.description':
    'قيمة هذا الحقل ليست ملفًا صالحًا. إعادة تعيين هذا الحقل ستتيح لك اختيار ملف جديد.',
  /** Reset value */
  'inputs.file.invalid-file-warning.reset-button.text': 'إعادة تعيين القيمة',
  /** Invalid file value */
  'inputs.file.invalid-file-warning.title': 'قيمة الملف غير صالحة',
  /** Select */
  'inputs.file.multi-browse-button.text': 'اختر',
  /** The upload could not be completed at this time. */
  'inputs.file.upload-failed.description': 'لم يتم إكمال التحميل في هذا الوقت.',
  /** Upload failed */
  'inputs.file.upload-failed.title': 'فشل التحميل',
  /** Clear field */
  'inputs.files.common.actions-menu.clear-field.label': 'مسح الحقل',
  /** Copy URL */
  'inputs.files.common.actions-menu.copy-url.label': 'نسخ الرابط',
  /** Download */
  'inputs.files.common.actions-menu.download.label': 'تحميل',
  /** The URL is copied to the clipboard */
  'inputs.files.common.actions-menu.notification.url-copied': 'تم نسخ الرابط إلى الحافظة',
  /** Replace */
  'inputs.files.common.actions-menu.replace.label': 'استبدال',
  /** Upload */
  'inputs.files.common.actions-menu.upload.label': 'رفع',
  /** Drop to upload */
  'inputs.files.common.drop-message.drop-to-upload': 'إسقاط للرفع',
  /** Drop to upload `{{count}}` file */
  'inputs.files.common.drop-message.drop-to-upload-multi_one': 'إسقاط لرفع ملف {{count}}',
  /** Can't upload this file here */
  'inputs.files.common.drop-message.drop-to-upload.no-accepted-file-message_one':
    'لا يمكن رفع هذا الملف هنا',
  /** `{{count}}` file can't be uploaded here */
  'inputs.files.common.drop-message.drop-to-upload.rejected-file-message_one':
    'لا يمكن رفع ملف {{count}} هنا',
  /** Cannot upload `{{count}}` files */
  'inputs.files.common.placeholder.cannot-upload-some-files_one': 'لا يمكن رفع الملف',
  /** Drag or paste type here */
  'inputs.files.common.placeholder.drag-or-paste-to-upload_file': 'اسحب أو الصق الملف هنا',
  /** Drag or paste image here */
  'inputs.files.common.placeholder.drag-or-paste-to-upload_image': 'اسحب أو الصق الصورة هنا',
  /** Drop to upload file */
  'inputs.files.common.placeholder.drop-to-upload_file': 'إسقاط لرفع الملف',
  /** Drop to upload image */
  'inputs.files.common.placeholder.drop-to-upload_image': 'إسقاط لرفع الصورة',
  /** Read only */
  'inputs.files.common.placeholder.read-only': 'للقراءة فقط',
  /** Can't upload files here */
  'inputs.files.common.placeholder.upload-not-supported': 'لا يمكن رفع الملفات هنا',
  /** Clear upload */
  'inputs.files.common.stale-upload-warning.clear': 'مسح الرفع',
  /** An upload has made no progress for at least `{{staleThresholdMinutes}}` minutes and likely got interrupted. You can safely clear the incomplete upload and try uploading again. */
  'inputs.files.common.stale-upload-warning.description':
    'لم يتقدم الرفع لمدة {{staleThresholdMinutes}} دقائق على الأقل ومن المحتمل أن يكون قد تعطل. يمكنك مسح الرفع غير المكتمل بأمان ومحاولة الرفع مرة أخرى.',
  /** Incomplete upload */
  'inputs.files.common.stale-upload-warning.title': 'رفع غير مكتمل',
  /** Tooltip text for action to crop image */
  'inputs.image.actions-menu.crop-image-tooltip': 'قص الصورة',
  /** Accessibility label for button to open image edit dialog */
  'inputs.image.actions-menu.edit-details.aria-label': 'فتح حوار تعديل الصورة',
  /** Accessibility label for button to open image options menu */
  'inputs.image.actions-menu.options.aria-label': 'فتح قائمة خيارات الصورة',
  /** Select */
  'inputs.image.browse-menu.text': 'اختيار',
  /** Cannot upload this file here */
  'inputs.image.drag-overlay.cannot-upload-here': 'لا يمكن رفع هذا الملف هنا',
  /** Drop image to upload */
  'inputs.image.drag-overlay.drop-to-upload-image': 'إسقاط الصورة للرفع',
  /** This field is read only */
  'inputs.image.drag-overlay.this-field-is-read-only': 'هذا الحقل للقراءة فقط',
  /** Unknown member kind: `{{kind}}` */
  'inputs.image.error.unknown-member-kind': 'نوع العضو غير معروف: {{kind}}',
  /** Edit hotspot and crop */
  'inputs.image.hotspot-dialog.title': 'تعديل نقطة التركيز والقص',
  /** The value of this field is not a valid image. Resetting this field will let you choose a new image. */
  'inputs.image.invalid-image-warning.description':
    'قيمة هذا الحقل ليست صورة صالحة. إعادة تعيين هذا الحقل ستتيح لك اختيار صورة جديدة.',
  /** Reset value */
  'inputs.image.invalid-image-warning.reset-button.text': 'إعادة تعيين القيمة',
  /** Invalid image value */
  'inputs.image.invalid-image-warning.title': 'قيمة الصورة غير صالحة',
  /** Preview of uploaded image */
  'inputs.image.preview-uploaded-image': 'معاينة الصورة المرفوعة',
  /** The upload could not be completed at this time. */
  'inputs.image.upload-error.description': 'لا يمكن إكمال الرفع في هذا الوقت.',
  /** Upload failed */
  'inputs.image.upload-error.title': 'فشل الرفع',
  /** Adjust the rectangle to crop image. Adjust the circle to specify the area that should always be visible. */
  'inputs.imagetool.description':
    'اضبط المستطيل لقص الصورة. اضبط الدائرة لتحديد المنطقة التي يجب أن تكون مرئية دائمًا.',
  /** Error: `{{errorMessage}}` */
  'inputs.imagetool.load-error': 'خطأ: {{errorMessage}}',
  /** Hotspot & Crop */
  'inputs.imagetool.title': 'نقطة التركيز والقص',
  /** Convert to `{{targetType}}` */
  'inputs.invalid-value.convert-button.text': 'تحويل إلى {{targetType}}',
  /** The current value (<code>`{{actualType}}`</code>) */
  'inputs.invalid-value.current-type': 'القيمة الحالية (<code>{{actualType}}</code>)',
  /** The property value is stored as a value type that does not match the expected type. */
  'inputs.invalid-value.description': 'قيمة الخاصية مخزنة كنوع قيمة لا يتطابق مع النوع المتوقع.',
  /** The value of this property must be of type <code>`{{validType}}`</code> according to the schema. */
  'inputs.invalid-value.details.description':
    'يجب أن تكون قيمة هذه الخاصية من النوع <code>{{validType}}</code> وفقًا للمخطط.',
  /** Only the following types are valid here according to schema: */
  'inputs.invalid-value.details.multi-type-description':
    'فقط الأنواع التالية صالحة هنا وفقًا للمخطط:',
  /** Mismatching value types typically occur when the schema has recently been changed. */
  'inputs.invalid-value.details.possible-reason':
    'عادة ما تحدث أنواع القيم غير المتطابقة عندما يتم تغيير المخطط مؤخرًا.',
  /** Developer info */
  'inputs.invalid-value.details.title': 'معلومات المطور',
  /** -- Invalid Value Input -- */
  /** Reset value */
  'inputs.invalid-value.reset-button.text': 'إعادة تعيين القيمة',
  /** Invalid property value */
  'inputs.invalid-value.title': 'قيمة الخاصية غير صالحة',
  /** Field groups */
  'inputs.object.field-group-tabs.aria-label': 'مجموعات الحقول',
  /** Read-only field description */
  'inputs.object.unknown-fields.read-only.description':
    'هذا الحقل <strong>للقراءة فقط</strong> وفقًا لمخطط المستند ولا يمكن إلغاء تعيينه. إذا كنت تريد أن تكون قادرًا على إلغاء تعيين هذا في الاستوديو، تأكد من إزالة حقل <code>readOnly</code> من النوع المحيط في المخطط.',
  /** Remove field */
  'inputs.object.unknown-fields.remove-field-button.text': 'إزالة الحقل',
  /** Encountered `{{count}}` fields that are not defined in the schema. */
  'inputs.object.unknown-fields.warning.description_one': 'تم العثور على حقل غير محدد في المخطط.',
  /** Detailed description of unknown field warning */
  'inputs.object.unknown-fields.warning.details.description_one':
    'هذا الحقل غير محدد في المخطط، وهذا قد يعني أن تعريف الحقل قد تم إزالته أو أن شخصًا آخر قد أضافه إلى مشروعه المحلي ولم يقم بنشر تغييراته بعد.',
  /** Developer info */
  'inputs.object.unknown-fields.warning.details.title': 'معلومات المطور',
  /** Unknown field found */
  'inputs.object.unknown-fields.warning.title_one': 'تم العثور على حقل غير معروف',
  /** Collapse the editor to save screen space  */
  'inputs.portable-text.action.collapse-editor': 'طي المحرر',
  /** Aria label for action to edit an existing annotation */
  'inputs.portable-text.action.edit-annotation-aria-label': 'تحرير التعليق التوضيحي',
  /** Expand the editor to give more editing space */
  'inputs.portable-text.action.expand-editor': 'توسيع المحرر',
  /** Label label for action to insert a block of a given type (`{{typeName}}`) */
  'inputs.portable-text.action.insert-block': 'إدراج {{typeName}}',
  /** Accessibility label for action to insert a block of a given type (`{{typeName}}`) */
  'inputs.portable-text.action.insert-block-aria-label': 'إدراج {{typeName}} (كتلة)',
  /** Label for action to insert an inline object of a given type (`{{typeName}}`) */
  'inputs.portable-text.action.insert-inline-object': 'إدراج {{typeName}}',
  /** Accessibility label for action to insert an inline object of a given type (`{{typeName}}`) */
  'inputs.portable-text.action.insert-inline-object-aria-label': 'إدراج {{typeName}} (مضمن)',
  /** Aria label for action to remove an annotation */
  'inputs.portable-text.action.remove-annotation-aria-label': 'إزالة التعليق التوضيحي',
  /** Label for activate on focus with context of click and not focused */
  'inputs.portable-text.activate-on-focus-message_click': 'انقر للتفعيل',
  /** Label for activate on focus with context of click and focused */
  'inputs.portable-text.activate-on-focus-message_click-focused':
    'انقر أو اضغط على المسافة للتفعيل',
  /** Label for activate on focus with context of tap and not focused */
  'inputs.portable-text.activate-on-focus-message_tap': 'اضغط للتفعيل',
  /**Aria label for the annotation object */
  'inputs.portable-text.annotation-aria-label': 'كائن التعليق التوضيحي',
  /** Title for dialog that allows editing an annotation */
  'inputs.portable-text.annotation-editor.title': 'تحرير {{schemaType}}',
  /** Title of the default "link" annotation */
  'inputs.portable-text.annotation.link': 'رابط',
  /**Aria label for the block object */
  'inputs.portable-text.block.aria-label': 'كائن الكتلة',
  /** Label for action to edit a block item, in the case where it is editable */
  'inputs.portable-text.block.edit': 'تحرير',
  /** Accessibility label for the button that opens the actions menu on blocks */
  'inputs.portable-text.block.open-menu-aria-label': 'فتح القائمة',
  /** Label for action to open a reference, in the case of block-level reference types */
  'inputs.portable-text.block.open-reference': 'فتح المرجع',
  /** Label for action to remove a block item */
  'inputs.portable-text.block.remove': 'إزالة',
  /** Label for action to view a block item, in the case where it is read-only and thus cannot be edited */
  'inputs.portable-text.block.view': 'عرض',
  /** Title of the "code" decorator */
  'inputs.portable-text.decorator.code': 'كود',
  /** Title of the "em" (emphasis) decorator */
  'inputs.portable-text.decorator.emphasis': 'مائل',
  /** Title of the "strike-through" decorator */
  'inputs.portable-text.decorator.strike-through': 'يتوسطه خط',
  /** Title of the "strong" decorator */
  'inputs.portable-text.decorator.strong': 'غامق',
  /** Title of the "underline" decorator */
  'inputs.portable-text.decorator.underline': 'تسطير',
  /** Placeholder text for when the editor is empty */
  'inputs.portable-text.empty-placeholder': 'فارغ',
  /**Aria label for the block object */
  'inputs.portable-text.inline-block.aria-label': 'كائن داخل السطر',
  /** Label for action to edit an inline object item */
  'inputs.portable-text.inline-object.edit': 'تحرير الكائن',
  /** Aria label for icon for action to edit an inline object item */
  'inputs.portable-text.inline-object.edit-aria-label': 'تحرير الكائن',
  /** Label for action to remove an inline object item */
  'inputs.portable-text.inline-object.remove': 'إزالة الكائن',
  /** Aria label for icon for action to remove an inline object item */
  'inputs.portable-text.inline-object.remove-aria-label': 'إزالة الكائن',
  /** Disclaimer text shown on invalid Portable Text value, when an action is available to unblock the user, but it is not guaranteed to be safe */
  'inputs.portable-text.invalid-value.action-disclaimer':
    'ملاحظة: من الآمن عمومًا تنفيذ الإجراء أعلاه، ولكن إذا كنت في شك، فتواصل مع المسؤولين عن تكوين استوديو العمل الخاص بك.',
  /** Action presented when the Portable Text field value is invalid, when block with key `{{key}}` has a child with key `{{childKey}}` of type `{{childType}}` which is not allowed by the schema definition */
  'inputs.portable-text.invalid-value.disallowed-child-type.action': 'إزالة الكائن',
  /** Text explaining that the Portable Text field value is invalid, when block with key `{{key}}` has a child with key `{{childKey}}` of type `{{childType}}` which is not allowed by the schema definition */
  'inputs.portable-text.invalid-value.disallowed-child-type.description':
    'الطفل ذو المفتاح {{childKey}} للكتلة ذات المفتاح <code>{{key}}</code> هو من النوع <code>{{childType}}</code>، وهو غير مسموح به حسب تعريف المخطط.',
  /** Action presented when the Portable Text field value is invalid, when child with key `{{key}}` has a type (`{{typeName}}`) that is not an allowed block type for this field */
  'inputs.portable-text.invalid-value.disallowed-type.action': 'إزالة الكتلة',
  /** Text explaining that the Portable Text field value is invalid, when child with key `{{key}}` has a type (`{{typeName}}`) that is not an allowed block type for this field */
  'inputs.portable-text.invalid-value.disallowed-type.description':
    'الكتلة ذات المفتاح <code>{{key}}</code> هي من النوع <code>{{typeName}}</code>، وهو غير مسموح به حسب المخطط.',
  /** Action presented when the Portable Text field value is invalid, when block with key `{{key}}` contains no children */
  'inputs.portable-text.invalid-value.empty-children.action': 'إدراج نص فارغ',
  /** Text explaining that the Portable Text field value is invalid, when block with key `{{key}}` contains no children */
  'inputs.portable-text.invalid-value.empty-children.description':
    'كتلة النص ذات المفتاح <code>{{key}}</code> لا تحتوي على أجزاء نصية.',
  /** Label for the button to ignore invalid values in the Portable Text editor */
  'inputs.portable-text.invalid-value.ignore-button.text': 'تجاهل',
  /** Action presented when the Portable Text field value is invalid, when child with key `{{key}}` has a `_type` property that is set to `block`, but the block type defined in schema has a different name (`{{expectedTypeName}}`) */
  'inputs.portable-text.invalid-value.incorrect-block-type.action':
    'استخدم النوع <code>{{expectedTypeName}}</code>',
  /** Text explaining that the Portable Text field value is invalid, when child with key `{{key}}` has a `_type` property that is set to `block`, but the block type defined in schema has a different name (`{{expectedTypeName}}`) */
  'inputs.portable-text.invalid-value.incorrect-block-type.description':
    'الكتلة ذات المفتاح <code>{{key}}</code> لديها اسم نوع غير صالح. وفقًا للمخطط، يجب أن يكون <code>{{expectedTypeName}}</code>.',
  /** Action presented when the Portable Text field value is invalid, when block with key `{{key}}` has a span with key `{{childKey}}` that has a missing or invalid `text` property */
  'inputs.portable-text.invalid-value.invalid-span-text.action': 'تعيين قيمة نص فارغة',
  /** Text explaining that the Portable Text field value is invalid, when block with key `{{key}}` has a span with key `{{childKey}}` that has a missing or invalid `text` property */
  'inputs.portable-text.invalid-value.invalid-span-text.description':
    'الجزء ذو المفتاح {{childKey}} للكتلة ذات المفتاح <code>{{key}}</code> يفتقد إلى خاصية <code>text</code> أو أنها غير صالحة.',
  /** Action presented when the Portable Text field value is invalid, when child with key `{{key}}` is missing a `_type` property, but seems to be a block of type `{{expectedTypeName}}` */
  'inputs.portable-text.invalid-value.missing-block-type.action':
    'استخدم النوع <code>{{expectedTypeName}}</code>',
  /** Text explaining that the Portable Text field value is invalid, when child with key `{{key}}` is missing a `_type` property, but seems to be a block of type `{{expectedTypeName}}` */
  'inputs.portable-text.invalid-value.missing-block-type.description':
    'الكتلة ذات المفتاح <code>{{key}}</code> تفتقد إلى اسم النوع. وفقًا للمخطط، يجب أن يكون <code>{{expectedTypeName}}</code>.',
  /** Action presented when the Portable Text field value is invalid, when block with key `{{key}}` has a child at `{{index}}` which is missing `_key` property */
  'inputs.portable-text.invalid-value.missing-child-key.action': 'تعيين مفتاح عشوائي',
  /** Text explaining that the Portable Text field value is invalid, when block with key `{{key}}` has a child at `{{index}}` which is missing `_key` property */
  'inputs.portable-text.invalid-value.missing-child-key.description':
    'الطفل في الفهرس <code>{{index}}</code> للكتلة ذات المفتاح <code>{{key}}</code> يفتقد إلى خاصية <code>_key</code>.',
  /** Action presented when the Portable Text field value is invalid, when block with key `{{key}}` has a child with key `{{childKey}}` which is missing a `_type` property */
  'inputs.portable-text.invalid-value.missing-child-type.action': 'إزالة الكائن',
  /** Text explaining that the Portable Text field value is invalid, when block with key `{{key}}` has a child with key `{{childKey}}` which is missing a `_type` property */
  'inputs.portable-text.invalid-value.missing-child-type.description':
    'الطفل ذو المفتاح {{childKey}} للكتلة ذات المفتاح <code>{{key}}</code> يفتقد إلى خاصية <code>_type</code>.',
  /** Action presented when the Portable Text field value is invalid, when child at `{{index}}` is missing the required `_key` property */
  'inputs.portable-text.invalid-value.missing-key.action': 'تعيين مفتاح عشوائي',
  /** Text explaining that the Portable Text field value is invalid, when child at `{{index}}` is missing the required `_key` property */
  'inputs.portable-text.invalid-value.missing-key.description':
    'الكتلة في الفهرس <code>{{index}}</code> تفتقد إلى خاصية <code>_key</code> المطلوبة.',
  /** Action presented when the Portable Text field value is invalid, when child with key `{{key}}` has a missing or invalid `children` property */
  'inputs.portable-text.invalid-value.missing-or-invalid-children.action': 'إزالة الكتلة',
  /** Text explaining that the Portable Text field value is invalid, when child with key `{{key}}` has a missing or invalid `children` property */
  'inputs.portable-text.invalid-value.missing-or-invalid-children.description':
    'كتلة النص بالمفتاح <code>{{key}}</code> تحتوي على خاصية `children` غير صالحة أو مفقودة.',
  /** Action presented when the Portable Text field value is invalid, when child with key `{{key}}` has a missing or invalid `markDefs` property */
  'inputs.portable-text.invalid-value.missing-or-invalid-markdefs.action': 'إضافة خاصية',
  /** Text explaining that the Portable Text field value is invalid, when child with key `{{key}}` has a missing or invalid `markDefs` property */
  'inputs.portable-text.invalid-value.missing-or-invalid-markdefs.description':
    'كتلة النص بالمفتاح <code>{{key}}</code> تحتوي على خاصية `markDefs` غير صالحة أو مفقودة.',
  /** Action presented when the Portable Text field value is invalid, when child with key `{{key}}` is missing a `_type` property  */
  'inputs.portable-text.invalid-value.missing-type.action': 'إزالة الكتلة',
  /** Text explaining that the Portable Text field value is invalid, when child with key `{{key}}` is missing a `_type` property  */
  'inputs.portable-text.invalid-value.missing-type.description':
    'الكتلة بالمفتاح <code>{{key}}</code> تفتقد إلى اسم النوع.',
  /** Action presented when the Portable Text field value is invalid, when block with key `{{key}}` contains a non-object child at index `{{index}}` */
  'inputs.portable-text.invalid-value.non-object-child.action': 'إزالة العنصر',
  /** Text explaining that the Portable Text field value is invalid, when block with key `{{key}}` contains a non-object child at index `{{index}}` */
  'inputs.portable-text.invalid-value.non-object-child.description':
    'العنصر في الفهرس <code>{{index}}</code> للكتلة بالمفتاح <code>{{key}}</code> ليس كائنًا.',
  /** Action presented when the Portable Text field value is invalid, when the Portable Text field is not an array, or the array is empty */
  'inputs.portable-text.invalid-value.not-an-array.action': 'إلغاء تعيين القيمة',
  /** Text explaining that the Portable Text field value is invalid, when the Portable Text field is not an array, or the array is empty */
  'inputs.portable-text.invalid-value.not-an-array.description':
    'يجب أن تكون القيمة مصفوفة من كتل النص المحمول، أو غير محددة.',
  /** Action presented when the Portable Text field value is invalid, when child at `{{index}}` is not an object */
  'inputs.portable-text.invalid-value.not-an-object.action': 'إزالة العنصر',
  /** Text explaining that the Portable Text field value is invalid, when child at `{{index}}` is not an object */
  'inputs.portable-text.invalid-value.not-an-object.description':
    'العنصر في <code>{{index}}</code> ليس كائنًا،.',
  /** Action presented when the Portable Text field value is invalid, when block with key `{{key}}` contains marks (`{{orphanedMarks}}`) that are not supported by the current schema */
  'inputs.portable-text.invalid-value.orphaned-marks.action': 'إزالة العلامات غير المسموح بها',
  /** Text explaining that the Portable Text field value is invalid, when block with key `{{key}}` contains marks (`{{orphanedMarks}}`) that are not supported by the current schema */
  'inputs.portable-text.invalid-value.orphaned-marks.description':
    'كتلة النص بالمفتاح <code>{{key}}</code> تحتوي على علامات <code>({{orphanedMarks, list}})</code> غير مسموح بها بموجب المخطط.',
  /** Title for the alert indicating that the Portable Text field has an invalid value */
  'inputs.portable-text.invalid-value.title': 'قيمة نص محمول غير صالحة',
  /** Title of "bulleted" list type */
  'inputs.portable-text.list-type.bullet': 'قائمة نقطية',
  /** Title of numbered list type */
  'inputs.portable-text.list-type.number': 'قائمة مرقمة',
  /** Title of the "h1" block style */
  'inputs.portable-text.style.h1': 'عنوان 1',
  /** Title of the "h2" block style */
  'inputs.portable-text.style.h2': 'عنوان 2',
  /** Title of the "h3" block style */
  'inputs.portable-text.style.h3': 'عنوان 3',
  /** Title of the "h4" block style */
  'inputs.portable-text.style.h4': 'عنوان 4',
  /** Title of the "h5" block style */
  'inputs.portable-text.style.h5': 'عنوان 5',
  /** Title of the "h6" block style */
  'inputs.portable-text.style.h6': 'عنوان 6',
  /** Title shown when multiple blocks of varying styles is selected */
  'inputs.portable-text.style.multiple': 'متعدد',
  /** Title of fallback when no style is given for a block */
  'inputs.portable-text.style.none': 'بدون نمط',
  /** Title of the "normal" block style */
  'inputs.portable-text.style.normal': 'عادي',
  /** Title of the "quote" block style */
  'inputs.portable-text.style.quote': 'اقتباس',
  /** Label for action to clear the current value of the reference field */
  'inputs.reference.action.clear': 'مسح',
  /** Label for action to create a new document from the reference input */
  'inputs.reference.action.create-new-document': 'إنشاء',
  /** Label for action to create a new document from the reference input, when there are multiple templates or document types to choose from */
  'inputs.reference.action.create-new-document-select': 'إنشاء...',
  /** Label for action to duplicate the current item to a new item (used within arrays) */
  'inputs.reference.action.duplicate': 'تكرار',
  /** Label for action that opens the referenced document in a new tab */
  'inputs.reference.action.open-in-new-tab': 'فتح في علامة تبويب جديدة',
  /** Label for action to remove the reference from an array */
  'inputs.reference.action.remove': 'إزالة',
  /** Label for action to replace the current value of the field */
  'inputs.reference.action.replace': 'استبدال',
  /** Label for action to cancel a previously initiated replace action  */
  'inputs.reference.action.replace-cancel': 'إلغاء الاستبدال',
  /** The cross-dataset reference field currently has a reference, but the feature has been disabled since it was created. This explains what can/cannot be done in its current state. */
  'inputs.reference.cross-dataset.feature-disabled-actions':
    'لا يزال بإمكانك مسح مرجع هذا الحقل الحالي، لكن لا يمكن تغييره إلى مستند مختلف طالما أن الميزة معطلة.',
  /** A cross-dataset reference field exists but the feature has been disabled. A <DocumentationLink> component is available. */
  'inputs.reference.cross-dataset.feature-disabled-description':
    'تم تعطيل هذه الميزة. اقرأ كيفية تمكينها في <DocumentationLink>التوثيق</DocumentationLink>.',
  /** Title for a warning telling the user that the current project does not have the "cross dataset references" feature */
  'inputs.reference.cross-dataset.feature-unavailable-title':
    'ميزة غير متوفرة: مرجع مجموعة البيانات المتقاطعة',
  /** The cross-dataset reference points to a document with an invalid type  */
  'inputs.reference.cross-dataset.invalid-type':
    'المستند المشار إليه من نوع غير صالح ({{typeName}}) <JsonValue/>',
  /** The referenced document will open in a new tab (due to external studio) */
  'inputs.reference.document-opens-in-new-tab': 'هذا المستند يفتح في علامة تبويب جديدة',
  /** Error title for when the document is unavailable (for any possible reason) */
  'inputs.reference.error.document-unavailable-title': 'المستند غير متوفر',
  /** Error title for when the referenced document failed to be loaded */
  'inputs.reference.error.failed-to-load-document-title': 'فشل في تحميل المستند المشار إليه',
  /** Error title for when the reference search returned a document that is not an allowed type for the field */
  'inputs.reference.error.invalid-search-result-type-title':
    'البحث أعاد نوعًا غير صالح لهذا المرجع: "{{returnedType}}"',
  /** Error description for when the document referenced is not one of the types declared as allowed target types in schema */
  'inputs.reference.error.invalid-type-description':
    'المستند المشار إليه (<code>{{documentId}}</code>) من نوع <code>{{actualType}}</code>. وفقًا للمخطط، يمكن أن تكون المستندات المشار إليها فقط من نوع <AllowedTypes />.',
  /** Error title for when the document referenced is not one of the types declared as allowed target types in schema */
  'inputs.reference.error.invalid-type-title': 'مستند من نوع غير صالح',
  /** Error description for when the user does not have permissions to read the referenced document */
  'inputs.reference.error.missing-read-permissions-description':
    'لم يتم الوصول إلى المستند المشار إليه بسبب عدم كفاية الأذونات',
  /** Error title for when the user does not have permissions to read the referenced document */
  'inputs.reference.error.missing-read-permissions-title': 'أذونات غير كافية',
  /** Error description for when the current reference value points to a document that does not exist (on weak references) */
  'inputs.reference.error.nonexistent-document-description':
    'المستند المشار إليه غير موجود (المعرف: <code>{{documentId}}</code>). يمكنك إما إزالة المرجع أو استبداله بمستند آخر.',
  /** Error title for when the current reference value points to a document that does not exist (on weak references) */
  'inputs.reference.error.nonexistent-document-title': 'غير موجود',
  /** Label for button that clears the reference when it points to a document that does not exist (on weak references) */
  'inputs.reference.error.nonexistent-document.clear-button-label': 'مسح',
  /** Error title for when the search for a reference failed. Note that the message sent by the backend may not be localized. */
  'inputs.reference.error.search-failed-title': 'فشل البحث عن المرجع',
  /** Alternative text for the image shown in cross-dataset reference input */
  'inputs.reference.image-preview-alt-text': 'معاينة الصورة للوثيقة المرجعية',
  /** Description for alert shown when a reference in a live-edit document is marked as being weak, the referenced document exists, AND the reference is supposed to be have been strengthened on publish */
  'inputs.reference.incomplete-reference.finalize-action-description':
    '<strong>{{referencedDocument}}</strong> تم نشره ويجب الآن إنهاء هذا المرجع.',
  /** Title for alert shown when a reference in a live-edit document is marked as being weak, the referenced document exists, AND the reference is supposed to be have been strengthened on publish */
  'inputs.reference.incomplete-reference.finalize-action-title': 'إنهاء المرجع',
  /** Description for alert shown when a reference in a live-edit document points to a document that exists and has been published, but the reference is still marked as weak */
  'inputs.reference.incomplete-reference.strengthen-action-description':
    '<strong>{{referencedDocument}}</strong> تم نشره ويجب الآن تحويل هذا المرجع إلى مرجع قوي.',
  /** Title for alert shown when a reference in a live-edit document points to a document that exists and has been published, but the reference is still marked as weak */
  'inputs.reference.incomplete-reference.strengthen-action-title': 'تحويل إلى مرجع قوي',
  /** Label for button that triggers the action that strengthen a reference */
  'inputs.reference.incomplete-reference.strengthen-button-label': 'تحويل إلى مرجع قوي',
  /** Label for button that triggers a retry attempt for reference metadata  */
  'inputs.reference.metadata-error.retry-button-label': 'إعادة المحاولة',
  /** Title for alert shown when reference metadata fails to be loaded */
  'inputs.reference.metadata-error.title': 'تعذر تحميل بيانات المرجع',
  /** Message shown when no documents were found that matched the given search string */
  'inputs.reference.no-results-for-query': 'لا توجد نتائج لـ <strong>“{{searchTerm}}”</strong>',
  /** Text for tooltip showing when a document was edited, using relative time (eg "how long ago was it edited?") */
  'inputs.reference.preview.edited-at-time': 'تم التعديل <RelativeTime/>',
  /** Accessibility label for icon indicating that document does _not_ have any unpublished changes */
  'inputs.reference.preview.has-no-unpublished-changes-aria-label': 'لا توجد تعديلات غير منشورة',
  /** Accessibility label for icon indicating that document has unpublished changes */
  'inputs.reference.preview.has-unpublished-changes-aria-label': 'تم التعديل',
  /** Accessibility label for icon indicating that document does _not_ have a published version */
  'inputs.reference.preview.is-not-published-aria-label': 'غير منشور',
  /** Accessibility label for icon indicating that document has a published version */
  'inputs.reference.preview.is-published-aria-label': 'منشور',
  /** Text for tooltip indicating that a document has no unpublished edits */
  'inputs.reference.preview.no-unpublished-edits': 'لا توجد تعديلات غير منشورة',
  /** Text for tooltip indicating that a document has not yet been published */
  'inputs.reference.preview.not-published': 'غير منشور',
  /** Text for tooltip showing when a document was published, using relative time (eg "how long ago was it published?") */
  'inputs.reference.preview.published-at-time': 'تم النشر <RelativeTime/>',
  /** The referenced document no longer exist and might have been deleted (for weak references) */
  'inputs.reference.referenced-document-does-not-exist':
    'الوثيقة المرجعية لم تعد موجودة وربما تم حذفها (معرف الوثيقة: <code>{{documentId}}</code>).',
  /** The referenced document could not be displayed to the user because of insufficient permissions */
  'inputs.reference.referenced-document-insufficient-permissions':
    'تعذر الوصول إلى الوثيقة المرجعية بسبب عدم كفاية الأذونات',
  /** Label for when the reference input is resolving the initial value for an item */
  'inputs.reference.resolving-initial-value': 'جاري تحديد القيمة الأولية...',
  /** Placeholder shown in a reference input with no current value */
  'inputs.reference.search-placeholder': 'اكتب للبحث',
  /** Explanation of the consequences of leaving the reference as strong instead of weak */
  'inputs.reference.strength-mismatch.is-strong-consquences':
    'لن يكون من الممكن حذف الوثيقة المرجعية دون إزالة هذا المرجع أولاً أو تحويله إلى مرجع ضعيف.',
  /** Description for alert shown when a reference is supposed to be weak, but the actual value is strong */
  'inputs.reference.strength-mismatch.is-strong-description':
    'هذه الإشارة <em>قوية</em>، ولكن وفقًا للمخطط الحالي يجب أن تكون <em>ضعيفة</em>.',
  /** Explanation of the consequences of leaving the reference as weak instead of strong */
  'inputs.reference.strength-mismatch.is-weak-consquences':
    'هذا يجعل من الممكن حذف المستند المشار إليه دون الحاجة إلى حذف هذه الإشارة أولاً، مما يترك هذا الحقل يشير إلى مستند غير موجود.',
  /** Description for alert shown when a reference is supposed to be strong, but the actual value is weak */
  'inputs.reference.strength-mismatch.is-weak-description':
    'هذه الإشارة <em>ضعيفة</em>، ولكن وفقًا للمخطط الحالي يجب أن تكون <em>قوية</em>.',
  /** Label for button that triggers the action that strengthens a reference on strength mismatch */
  'inputs.reference.strength-mismatch.strengthen-button-label': 'تحويل إلى إشارة قوية',
  /** Title for alert shown when a reference is supposed to be weak/strong, but the actual value is the opposite of what it is supposed to be */
  'inputs.reference.strength-mismatch.title': 'عدم تطابق قوة الإشارة',
  /** Label for button that triggers the action that weakens a reference on strength mismatch */
  'inputs.reference.strength-mismatch.weaken-button-label': 'تحويل إلى إشارة ضعيفة',
  /** Action message for generating the slug */
  'inputs.slug.action.generate': 'توليد',
  /** Loading message for when the input is actively generating a slug */
  'inputs.slug.action.generating': 'جاري التوليد…',
  /** Error message for when the source to generate a slug from is missing */
  'inputs.slug.error.missing-source':
    'المصدر مفقود. تحقق من المصدر في النوع {{schemaType}} في المخطط',
  /** Placeholder for an empty tag input */
  'inputs.tags.placeholder': 'أدخل العلامة واضغط ENTER…',
  /** Placeholder for an empty tag input on touch devices */
  'inputs.tags.placeholder_touch': 'أدخل العلامة…',
  /** Convert to `{{targetType}}` */
  'inputs.untyped-value.convert-button.text': 'تحويل إلى {{targetType}}',
  /** Encountered an object value without a <code>_type</code> property. */
  'inputs.untyped-value.description': 'تم العثور على قيمة كائن بدون خاصية <code>_type</code>.',
  /** Either remove the <code>name</code> property of the object declaration, or set <code>_type</code> property on items. */
  'inputs.untyped-value.details.description':
    'إما أن تزيل خاصية <code>name</code> من إعلان الكائن، أو تضع خاصية <code>_type</code> على العناصر.',
  /** Current value (<code>object</code>): */
  'inputs.untyped-value.details.json-dump-prefix': 'القيمة الحالية (<code>object</code>):',
  /** The following types are valid here according to schema: */
  'inputs.untyped-value.details.multi-type-description': 'الأنواع التالية صالحة هنا وفقًا للمخطط:',
  /** Developer info */
  'inputs.untyped-value.details.title': 'معلومات المطور',
  /** Property value missing <code>_type</code> */
  'inputs.untyped-value.title': 'قيمة الخاصية تفتقد إلى <code>_type</code>',
  /** Unset value */
  'inputs.untyped-value.unset-item-button.text': 'إلغاء تعيين القيمة',

  /** The fallback explanation if no context is provided */
  'insufficient-permissions-message.not-authorized-explanation':
    'ليس لديك إذن للوصول إلى هذه الميزة.',
  /** The explanation when unable to create any document at all */
  'insufficient-permissions-message.not-authorized-explanation_create-any-document':
    'ليس لديك إذن لإنشاء مستند.',
  /** The explanation when unable to create a particular document */
  'insufficient-permissions-message.not-authorized-explanation_create-document':
    'ليس لديك إذن لإنشاء هذا المستند.',
  /** The explanation when unable to create a particular type of document */
  'insufficient-permissions-message.not-authorized-explanation_create-document-type':
    'ليس لديك إذن لإنشاء هذا النوع من المستندات.',
  /** The explanation when unable to create a new reference in a document */
  'insufficient-permissions-message.not-authorized-explanation_create-new-reference':
    'ليس لديك إذن لإنشاء إشارة جديدة.',
  /** The explanation when unable to delete a particular document */
  'insufficient-permissions-message.not-authorized-explanation_delete-document':
    'ليس لديك إذن لحذف هذا المستند.',
  /** The explanation when unable to discard changes in a particular document */
  'insufficient-permissions-message.not-authorized-explanation_discard-changes':
    'ليس لديك الإذن لرفض التغييرات في هذا المستند.',
  /** The explanation when unable to duplicate a particular document */
  'insufficient-permissions-message.not-authorized-explanation_duplicate-document':
    'ليس لديك الإذن لتكرار هذا المستند.',
  /** The explanation when unable to publish a particular document */
  'insufficient-permissions-message.not-authorized-explanation_publish-document':
    'ليس لديك الإذن لنشر هذا المستند.',
  /** The explanation when unable to unpublish a particular document */
  'insufficient-permissions-message.not-authorized-explanation_unpublish-document':
    'ليس لديك الإذن لإلغاء نشر هذا المستند.',
  /** Appears after the not-authorized message. Lists the current roles. */
  'insufficient-permissions-message.roles': 'أدوارك: <Roles/>',
  /** The title for the insufficient permissions message component */
  'insufficient-permissions-message.title': 'صلاحيات غير كافية',

  /** Unexpected error: `{{error}}` */
  'member-field-error.unexpected-error': 'خطأ غير متوقع: {{error}}',

  /** Button label for "Create new document" button */
  'new-document.button': 'إنشاء',
  /**
   * Tooltip message displayed when hovering/activating the "Create new document" action,
   * when there are templates/types available for creation
   */
  'new-document.create-new-document-label': 'مستند جديد…',
  /** Placeholder for the "filter" input within the new document menu */
  'new-document.filter-placeholder': 'ابحث في أنواع المستندات',
  /** Loading indicator text within the new document menu */
  'new-document.loading': 'جاري التحميل…',
  /** Accessibility label for the list displaying options in the new document menu */
  'new-document.new-document-aria-label': 'مستند جديد',
  /** Message for when there are no document type options in the new document menu */
  'new-document.no-document-types-found': 'لم يتم العثور على أنواع المستندات',
  /**
   * Tooltip message displayed when hovering/activating the "Create new document" action,
   * when there are no templates/types to create from
   */
  'new-document.no-document-types-label': 'لا توجد أنواع مستندات',
  /** Message for when no results are found for a specific search query in the new document menu */
  'new-document.no-results': 'لا توجد نتائج لـ <strong>{{searchQuery}}</strong>',
  /** Aria label for the button that opens the "Create new document" popover/dialog */
  'new-document.open-dialog-aria-label': 'إنشاء مستند جديد',
  /** Title for "Create new document" dialog */
  'new-document.title': 'إنشاء مستند جديد',

  /** Label for action to manage members of the current studio project */
  'presence.action.manage-members': 'إدارة الأعضاء',
  /** Accessibility label for presence menu button */
  'presence.aria-label': 'الحضور العالمي',
  /** Message description for when no one else is currently present */
  'presence.no-one-else-description': 'ادعو الأشخاص إلى المشروع لرؤية حالتهم الأونلاين.',
  /** Message title for when no one else is currently present */
  'presence.no-one-else-title': 'لا أحد آخر موجود',
  /** Message for when a user is not in a document (displayed in the global presence menu) */
  'presence.not-in-a-document': 'ليس في مستند',
  /** Tooltip content text for presence menu button */
  'presence.tooltip-content': 'من الموجود',

  /** Fallback title shown when a preview does not provide a title */
  'preview.default.title-fallback': 'بدون عنوان',
  /** Fallback preview value for types that have "no value" (eg null, undefined) */
  'preview.fallback.no-value': '(لا قيمة)',
  /** Alternative text for image being shown while image is being uploaded, in previews */
  'preview.image.file-is-being-uploaded.alt-text': 'الصورة قيد التحميل حالياً',

  /* Relative time, just now */
  'relative-time.just-now': 'الآن',

  /** Accessibility label to open search action when the search would go fullscreen (eg on narrower screens) */
  'search.action-open-aria-label': 'افتح البحث',
  /** Action label for adding a search filter */
  'search.action.add-filter': 'أضف فلتر',
  /** Action label for clearing search filters */
  'search.action.clear-filters': 'مسح الفلاتر',
  /** Label for action to clear recent searches */
  'search.action.clear-recent-searches': 'مسح البحوث الأخيرة',
  /** Accessibility label for action to clear all currently applied document type filters */
  'search.action.clear-type-filters-aria-label': 'مسح الفلاتر المحددة',
  /** Label for action to clear all currently applied document type filters */
  'search.action.clear-type-filters-label': 'مسح',
  /** Accessibility label for when the search is full screen (on narrow screens) and you want to close the search */
  'search.action.close-search-aria-label': 'إغلاق البحث',
  /** Accessibility label for filtering by document type */
  'search.action.filter-by-document-type-aria-label': 'فلترة حسب نوع المستند',
  /** Accessibility action label for removing an already applied search filter */
  'search.action.remove-filter-aria-label': 'إزالة الفلتر',
  /**
   * Text displayed when either no document type(s) have been selected, or we need a fallback,
   * eg "Search for all types".
   */
  'search.action.search-all-types': 'البحث في جميع المستندات',
  /**
   * Text displayed when we are able to determine one or more document types that will be used for
   * searching, and can fit within the space assigned by the design.
   */
  'search.action.search-specific-types': 'البحث عن {{types, list}}',
  /** Dialog title for action to select an asset of unknown type */
  'search.action.select-asset': 'اختر أصل',
  /** Dialog title for action to select a file asset */
  'search.action.select-asset_file': 'اختر ملف',
  /** Dialog title for action to select an image asset */
  'search.action.select-asset_image': 'اختر صورة',
  /** Accessibility label for when the search is full screen (on narrow screens) and you want to hide filters */
  'search.action.toggle-filters-aria-label_hide': 'إخفاء الفلاتر',
  /** Accessibility label for when the search is full screen (on narrow screens) and you want to show filters */
  'search.action.toggle-filters-aria-label_show': 'إظهار الفلاتر',
  /** Label for when the search is full screen (on narrow screens) and you want to hide filters */
  'search.action.toggle-filters-label_hide': 'إخفاء الفلاتر',
  /** Label for when the search is full screen (on narrow screens) and you want to show filters */
  'search.action.toggle-filters-label_show': 'إظهار الفلاتر',
  /** Tooltip text for the global search button */
  'search.button.tooltip': 'بحث',
  /**
   * A list of provided types (use `list` formatter preferably).
   */
  'search.document-type-list': '{{types, list}}',
  /**
   * In the context of a list of document types - no filtering selection has been done,
   * thus the default is "all types".
   */
  'search.document-type-list-all-types': 'جميع الأنواع',
  /** Accessibility label for list displaying the available document types */
  'search.document-types-aria-label': 'أنواع المستندات',
  /** Label for when no document types matching the filter are found */
  'search.document-types-no-matches-found': 'لا توجد نتائج لـ {{filter}}',
  /** Description for error when a filter cannot be displayed, describes that you should check the schema */
  'search.error.display-filter-description': 'قد يشير ذلك إلى خيارات غير صالحة محددة في مخططك.',
  /** Title for error when a filter cannot be displayed (mainly a developer-oriented error) */
  'search.error.display-filter-title': 'حدث خطأ أثناء عرض هذا الفلتر.',
  /** Description for error when no valid asset source is found, describes that you should check the the current studio config */
  'search.error.no-valid-asset-source-check-config-description':
    'يرجى التأكد من تمكينه في ملف تكوين الاستوديو الخاص بك.',
  /** Description for error when no valid asset source is found, describes that only the default asset is supported */
  'search.error.no-valid-asset-source-only-default-description':
    'حاليًا، فقط مصدر الأصول الافتراضي مدعوم.',
  /** Title for error when no valid asset sources found */
  'search.error.no-valid-asset-source-title': 'لم يتم العثور على مصادر أصول صالحة.',
  /** Helpful description for when search returned an error that we are not able to describe in detail */
  'search.error.unspecified-error-help-description': 'يرجى المحاولة مرة أخرى أو التحقق من اتصالك',
  /** Title label for when search returned an error that we are not able to describe in detail */
  'search.error.unspecified-error-title': 'حدث خطأ ما أثناء البحث',
  /**
   * Label for "All fields", a label that appears above the list of available fields when filtering.
   * If one or more document type has been chosen as filter, this label is replaced with a group of
   * fields per selected document type
   */
  'search.filter-all-fields-header': 'جميع الحقول',
  /** Label for the action of changing from one file to a different file in asset search filter */
  'search.filter-asset-change_file': 'تغيير الملف',
  /** Label for the action of changing from one image to a different image in asset search filter */
  'search.filter-asset-change_image': 'تغيير الصورة',
  /** Label for the action of clearing the currently selected asset in an image/file filter */
  'search.filter-asset-clear': 'مسح',
  /** Label for the action of selecting a file in asset search filter */
  'search.filter-asset-select_file': 'اختر ملف',
  /** Label for the action of selecting an image in asset search filter */
  'search.filter-asset-select_image': 'اختر صورة',
  /** Label for boolean filter - false */
  'search.filter-boolean-false': 'خطأ',
  /** Label for boolean filter - true */
  'search.filter-boolean-true': 'صحيح',
  /** Accessibility label for list that lets you filter fields by title, when adding a new filter in search */
  'search.filter-by-title-aria-label': 'تصفية حسب العنوان',
  /** Accessibility label for date filter input */
  'search.filter-date-aria-label': 'التاريخ',
  /** Accessibility label for selecting end date on the date range search filter */
  'search.filter-date-range-end-date-aria-label': 'تاريخ الانتهاء',
  /** Accessibility label for selecting start date on the date range search filter */
  'search.filter-date-range-start-date-aria-label': 'تاريخ البدء',
  /**
   * Label for "Days"/"Months"/"Years" when selecting it as unit in "X days ago" search filter.
   * Capitalized, as it would be listed in a dropdown.
   */
  'search.filter-date-unit_days': 'أيام',
  'search.filter-date-unit_months': 'أشهر',
  'search.filter-date-unit_years': 'سنوات',
  /** Accessibility label for selecting the unit (day/month/year) when adding "X days ago" search filter */
  'search.filter-date-unit-aria-label': 'اختر وحدة',
  /** Accessibility label for the input value (days/months/years) when adding "X days ago" search filter */
  'search.filter-date-value-aria-label': 'قيمة الوحدة',
  /** Label for "field description" shown in tooltip when navigating list of possible fields to filter */
  'search.filter-field-tooltip-description': 'وصف الحقل',
  /** Label for "field name" shown in tooltip when navigating list of possible fields to filter */
  'search.filter-field-tooltip-name': 'اسم الحقل',
  /** Label for "Used in document types", a list of the document types a field appears in. Shown in tooltip when navigating list of possible fields to filter */
  'search.filter-field-tooltip-used-in-document-types': 'يُستخدم في أنواع المستندات',
  /** Label for when no fields/filters are found for the given term */
  'search.filter-no-matches-found': 'لا توجد نتائج لـ {{filter}}',
  /** Placeholder value for maximum numeric value filter */
  'search.filter-number-max-value-placeholder': 'القيمة القصوى',
  /** Placeholder value for minimum numeric value filter */
  'search.filter-number-min-value-placeholder': 'القيمة الدنيا',
  /** Placeholder value for the number filter */
  'search.filter-number-value-placeholder': 'القيمة',
  /** Placeholder for the "Filter" input, when narrowing possible fields/filters */
  'search.filter-placeholder': 'تصفية',
  /** Label for the action of clearing the currently selected document in a reference filter */
  'search.filter-reference-clear': 'مسح',
  /**
   * Label for "shared fields", a label that appears above a list of fields that all filtered types
   * have in common, when adding a new filter. For instance, if "book" and "employee" both have a
   * "title" field, this field would be listed under "shared fields".
   * */
  'search.filter-shared-fields-header': 'الحقول المشتركة',
  /** Placeholder value for the string filter */
  'search.filter-string-value-placeholder': 'القيمة',
  /** Label/placeholder prompting user to select one of the predefined, allowed values for a string field */
  'search.filter-string-value-select-predefined-value': 'اختر...',
  /** Accessibility label for the "Filters" list, that is shown when using "Add filter" in search (singular) */
  'search.filters-aria-label_one': 'تصفية',
  /** Label for instructions on how to use the search - displayed when no recent searches are available */
  'search.instructions': 'استخدم <ControlsIcon/> لتحسين بحثك',
  /** Helpful description for when no search results are found */
  'search.no-results-help-description': 'جرب كلمة مفتاحية أخرى أو قم بتعديل مرشحاتك',
  /** Title label for when no search results are found */
  'search.no-results-title': 'لم يتم العثور على نتائج',
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
    '<Field/> <Operator>يحتوي على</Operator> <Value>{{count}} عنصر</Value>',
  'search.operator.array-count-equal.name': 'الكمية هي',
  /* Array should have a count greater than given filter value */
  'search.operator.array-count-gt.description_one':
    '<Field/> <Operator>يحتوي على ></Operator> <Value>{{count}} عنصر</Value>',
  'search.operator.array-count-gt.name': 'الكمية أكبر من',
  /* Array should have a count greater than or equal to the given filter value */
  'search.operator.array-count-gte.description_one':
    '<Field/> <Operator>يحتوي على ≥</Operator> <Value>{{count}} عنصر</Value>',
  'search.operator.array-count-gte.name': 'الكمية أكبر من أو تساوي',
  /* Array should have a count less than given filter value */
  'search.operator.array-count-lt.description_one':
    '<Field/> <Operator>يحتوي على <</Operator> <Value>{{count}} عنصر</Value>',
  'search.operator.array-count-lt.name': 'الكمية أقل من',
  /* Array should have a count less than or equal to the given filter value */
  'search.operator.array-count-lte.description_one':
    '<Field/> <Operator>يحتوي على ≤</Operator> <Value>{{count}} عنصر</Value>',
  'search.operator.array-count-lte.name': 'الكمية أقل من أو تساوي',
  /* Array should have a count that is not equal to the given filter value */
  'search.operator.array-count-not-equal.description_one':
    '<Field/> <Operator>لا يحتوي</Operator> <Value>{{count}} عنصر</Value>',
  'search.operator.array-count-not-equal.name': 'الكمية ليست',
  /**
   * Array should have a count within the range of given filter values.
   * Gets passed `{{from}}` and `{{to}}` values.
   **/
  'search.operator.array-count-range.description':
    '<Field/> <Operator>يحتوي بين</Operator> <Value>{{from}} → {{to}} عناصر</Value>',
  'search.operator.array-count-range.name': 'الكمية بين',
  /* Array should include the given value */
  'search.operator.array-list-includes.description':
    '<Field/> <Operator>يتضمن</Operator> <Value>{{value}}</Value>',
  'search.operator.array-list-includes.name': 'يتضمن',
  /* Array should not include the given value */
  'search.operator.array-list-not-includes.description':
    '<Field/> <Operator>لا يتضمن</Operator> <Value>{{value}}</Value>',
  'search.operator.array-list-not-includes.name': 'لا يتضمن',
  /* Array should include the given reference */
  'search.operator.array-reference-includes.description':
    '<Field/> <Operator>يتضمن</Operator> <Value>{{value}}</Value>',
  'search.operator.array-reference-includes.name': 'يتضمن',
  /* Array should not include the given reference */
  'search.operator.array-reference-not-includes.description':
    '<Field/> <Operator>لا يتضمن</Operator> <Value>{{value}}</Value>',
  'search.operator.array-reference-not-includes.name': 'لا يتضمن',
  /* Asset (file) should be the selected asset */
  'search.operator.asset-file-equal.description':
    '<Field/> <Operator>هو</Operator> <Value>{{value}}</Value>',
  'search.operator.asset-file-equal.name': 'هو',
  /* Asset (file) should not be the selected asset */
  'search.operator.asset-file-not-equal.description':
    '<Field/> <Operator>ليس</Operator> <Value>{{value}}</Value>',
  'search.operator.asset-file-not-equal.name': 'ليس',
  /* Asset (image) should be the selected asset */
  'search.operator.asset-image-equal.description':
    '<Field/> <Operator>هو</Operator> <Value>{{value}}</Value>',
  'search.operator.asset-image-equal.name': 'هو',
  /* Asset (image) should not be the selected asset */
  'search.operator.asset-image-not-equal.description':
    '<Field/> <Operator>ليس</Operator> <Value>{{value}}</Value>',
  'search.operator.asset-image-not-equal.name': 'ليس',
  /**
   * Boolean value should be the given filter value (true/false).
   * Context passed is `true` and `false`, allowing for more specific translations:
   * - `search.operator.boolean-equal.description_true`
   * - `search.operator.boolean-equal.description_false`
   */
  'search.operator.boolean-equal.description':
    '<Field/> <Operator>هو</Operator> <Value>{{value}}</Value>',
  'search.operator.boolean-equal.name': 'هو',
  /* Date should be after (later than) given filter value */
  'search.operator.date-after.description':
    '<Field/> <Operator>بعد</Operator> <Value>{{value}}</Value>',
  'search.operator.date-after.name': 'بعد',
  /* Date should be before (earlier than) given filter value */
  'search.operator.date-before.description':
    '<Field/> <Operator>قبل</Operator> <Value>{{value}}</Value>',
  'search.operator.date-before.name': 'قبل',
  /* Date should be the given filter value */
  'search.operator.date-equal.description':
    '<Field/> <Operator>هو</Operator> <Value>{{value}}</Value>',
  'search.operator.date-equal.name': 'هو',
  /* Date should be within the given filter value range (eg "within the last X days") */
  'search.operator.date-last.description':
    '<Field/> <Operator>هو في آخر</Operator> <Value>{{value}}</Value>',
  'search.operator.date-last.name': 'آخر',
  /* Date should not be the given filter value */
  'search.operator.date-not-equal.description':
    '<Field/> <Operator>ليس</Operator> <Value>{{value}}</Value>',
  'search.operator.date-not-equal.name': 'ليس',
  /* Date should be within the range of given filter values */
  'search.operator.date-range.description': '<Field/> <Operator>هو بين</Operator> <Value/>',
  'search.operator.date-range.name': 'هو بين',
  /* Date and time should be after (later than) given filter value */
  'search.operator.date-time-after.description':
    '<Field/> <Operator>هو بعد</Operator> <Value>{{value}}</Value>',
  'search.operator.date-time-after.name': 'بعد',
  /* Date and time should be before (earlier than) given filter value */
  'search.operator.date-time-before.description':
    '<Field/> <Operator>هو قبل</Operator> <Value>{{value}}</Value>',
  'search.operator.date-time-before.name': 'قبل',
  /* Date and time should be the given filter value */
  'search.operator.date-time-equal.description':
    '<Field/> <Operator>هو</Operator> <Value>{{value}}</Value>',
  'search.operator.date-time-equal.name': 'هو',
  /* Date and time should be within the given filter value range (eg "within the last X days") */
  'search.operator.date-time-last.description':
    '<Field/> <Operator>هو في آخر</Operator> <Value>{{value}}</Value>',
  'search.operator.date-time-last.name': 'آخر',
  /* Date and time should not be the given filter value */
  'search.operator.date-time-not-equal.description':
    '<Field/> <Operator>ليس</Operator> <Value>{{value}}</Value>',
  'search.operator.date-time-not-equal.name': 'ليس',
  /* Date and time should be within the range of given filter values */
  'search.operator.date-time-range.description': '<Field/> <Operator>هو بين</Operator> <Value/>',
  'search.operator.date-time-range.name': 'هو بين',
  /* Value should be defined */
  'search.operator.defined.description':
    '<Field/> <Operator>هو</Operator> <Value>ليس فارغًا</Value>',
  'search.operator.defined.name': 'ليس فارغًا',
  /* Value should not be defined */
  'search.operator.not-defined.description': '<Field/> <Operator>هو</Operator> <Value>فارغ</Value>',
  'search.operator.not-defined.name': 'فارغ',
  /* Number should be the given filter value */
  'search.operator.number-equal.description':
    '<Field/> <Operator>هو</Operator> <Value>{{value}}</Value>',
  'search.operator.number-equal.name': 'هو',
  /* Number should be greater than given filter value */
  'search.operator.number-gt.description':
    '<Field/> <Operator>></Operator> <Value>{{value}}</Value>',
  'search.operator.number-gt.name': 'أكبر من',
  /* Number should be greater than or the given filter value */
  'search.operator.number-gte.description':
    '<Field/> <Operator>≥</Operator> <Value>{{value}}</Value>',
  'search.operator.number-gte.name': 'أكبر من أو يساوي',
  /* Number should be less than given filter value */
  'search.operator.number-lt.description':
    '<Field/> <Operator><</Operator> <Value>{{value}}</Value>',
  'search.operator.number-lt.name': 'أقل من',
  /* Number should be less than or the given filter value */
  'search.operator.number-lte.description':
    '<Field/> <Operator>≤</Operator> <Value>{{value}}</Value>',
  'search.operator.number-lte.name': 'أقل من أو يساوي',
  /* Number should not be the given filter value */
  'search.operator.number-not-equal.description':
    '<Field/> <Operator>ليس</Operator> <Value>{{value}}</Value>',
  'search.operator.number-not-equal.name': 'ليس',
  /* Number should be within the range of given filter values */
  'search.operator.number-range.description':
    '<Field/> <Operator>بين</Operator> <Value>{{from}} → {{to}}</Value>',
  'search.operator.number-range.name': 'بين',
  /* Portable Text should contain the given filter value */
  'search.operator.portable-text-contains.description':
    '<Field/> <Operator>يحتوي</Operator> <Value>{{value}}</Value>',
  'search.operator.portable-text-contains.name': 'يحتوي',
  /* Portable Text should be the given filter value */
  'search.operator.portable-text-equal.description':
    '<Field/> <Operator>هو</Operator> <Value>{{value}}</Value>',
  'search.operator.portable-text-equal.name': 'هو',
  /* Portable Text should not contain the given filter value */
  'search.operator.portable-text-not-contains.description':
    '<Field/> <Operator>لا يحتوي</Operator> <Value>{{value}}</Value>',
  'search.operator.portable-text-not-contains.name': 'لا يحتوي',
  /* Portable Text should not be the given filter value */
  'search.operator.portable-text-not-equal.description':
    '<Field/> <Operator>ليس</Operator> <Value>{{value}}</Value>',
  'search.operator.portable-text-not-equal.name': 'ليس',
  /* References the given asset (file) */
  'search.operator.reference-asset-file.description':
    '<Field/> <Operator>→</Operator> <Value>{{value}}</Value>',
  'search.operator.reference-asset-file.name': 'ملف',
  /* References the given asset (image) */
  'search.operator.reference-asset-image.description':
    '<Field/> <Operator>→</Operator> <Value>{{value}}</Value>',
  'search.operator.reference-asset-image.name': 'صورة',
  /* References the given document */
  'search.operator.reference-document.description':
    '<Field/> <Operator>→</Operator> <Value>{{value}}</Value>',
  'search.operator.reference-document.name': 'وثيقة',
  /* Reference should be the given document */
  'search.operator.reference-equal.description':
    '<Field/> <Operator>هو</Operator> <Value>{{value}}</Value>',
  'search.operator.reference-equal.name': 'هو',
  /* Reference should not be the given document */
  'search.operator.reference-not-equal.description':
    '<Field/> <Operator>ليس</Operator> <Value>{{value}}</Value>',
  'search.operator.reference-not-equal.name': 'ليس',
  /* Slug contains the given value */
  'search.operator.slug-contains.description':
    '<Field/> <Operator>يحتوي</Operator> <Value>{{value}}</Value>',
  'search.operator.slug-contains.name': 'يحتوي',
  /* Slug equals the given filter value */
  'search.operator.slug-equal.description':
    '<Field/> <Operator>هو</Operator> <Value>{{value}}</Value>',
  'search.operator.slug-equal.name': 'هو',
  /* Slug does not contain the given value */
  'search.operator.slug-not-contains.description':
    '<Field/> <Operator>لا يحتوي</Operator> <Value>{{value}}</Value>',
  'search.operator.slug-not-contains.name': 'لا يحتوي',
  /* Slug does not equal the given filter value */
  'search.operator.slug-not-equal.description':
    '<Field/> <Operator>ليس</Operator> <Value>{{value}}</Value>',
  'search.operator.slug-not-equal.name': 'ليس',
  /* String contains the given filter value */
  'search.operator.string-contains.description':
    '<Field/> <Operator>يحتوي</Operator> <Value>{{value}}</Value>',
  'search.operator.string-contains.name': 'يحتوي',
  /* String equals the given filter value */
  'search.operator.string-equal.description':
    '<Field/> <Operator>هو</Operator> <Value>{{value}}</Value>',
  'search.operator.string-equal.name': 'هو',
  /* String equals one of the predefined allowed values */
  'search.operator.string-list-equal.description':
    '<Field/> <Operator>هو</Operator> <Value>{{value}}</Value>',
  'search.operator.string-list-equal.name': 'هو',
  /* String does not equal one of the predefined allowed values */
  'search.operator.string-list-not-equal.description':
    '<Field/> <Operator>ليس</Operator> <Value>{{value}}</Value>',
  'search.operator.string-list-not-equal.name': 'ليس',
  /* String does not contain the given filter value */
  'search.operator.string-not-contains.description':
    '<Field/> <Operator>لا يحتوي</Operator> <Value>{{value}}</Value>',
  'search.operator.string-not-contains.name': 'لا يحتوي',
  /* String does not equal the given filter value */
  'search.operator.string-not-equal.description':
    '<Field/> <Operator>ليس</Operator> <Value>{{value}}</Value>',
  'search.operator.string-not-equal.name': 'ليس',
  /** Label for the "Best match" search ordering type */
  'search.ordering.best-match-label': 'أفضل تطابق',
  /** Label for the "Created: Oldest first" search ordering type */
  'search.ordering.created-ascending-label': 'تم الإنشاء: الأقدم أولاً',
  /** Label for the "Created: Newest first" search ordering type */
  'search.ordering.created-descending-label': 'تم الإنشاء: الأحدث أولاً',
  /** Label for the "Updated: Oldest first" search ordering type */
  'search.ordering.updated-ascending-label': 'تم التحديث: الأقدم أولاً',
  /** Label for the "Updated: Newest first" search ordering type */
  'search.ordering.updated-descending-label': 'تم التحديث: الأحدث أولاً',
  /** Placeholder text for the global search input field */
  'search.placeholder': 'بحث',
  /** Accessibility label for the recent searches section, shown when no valid search terms has been given */
  'search.recent-searches-aria-label': 'عمليات البحث الأخيرة',
  /** Label/heading shown for the recent searches section */
  'search.recent-searches-label': 'عمليات البحث الأخيرة',
  /** Accessibility label for the search results section, shown when the user has typed valid terms */
  'search.search-results-aria-label': 'نتائج البحث',

  /** Accessibility label for the navbar status button */
  'status-button.aria-label': 'حالة التكوين',

  /** Description for error when the timeline for the given document can't be loaded */
  'timeline.error.load-document-changes-description': 'لم تتأثر معاملات تاريخ المستند.',
  /** Title for error when the timeline for the given document can't be loaded */
  'timeline.error.load-document-changes-title': 'حدث خطأ أثناء استرجاع تغييرات المستند.',
  /** Error description for when the document doesn't have history */
  'timeline.error.no-document-history-description':
    'عند تغيير محتوى المستند، ستظهر إصدارات المستند في هذه القائمة.',
  /** Error title for when the document doesn't have history */
  'timeline.error.no-document-history-title': 'لا يوجد تاريخ للمستند',
  /** Error prompt when revision cannot be loaded */
  'timeline.error.unable-to-load-revision': 'غير قادر على تحميل المراجعة',
  /** Label for when the timeline item is the latest in the history */
  'timeline.latest': 'الأحدث',
  /** Label for latest version for timeline menu dropdown */
  'timeline.latest-version': 'الإصدار الأحدث',
  /** The aria-label for the list of revisions in the timeline */
  'timeline.list.aria-label': 'مراجعات المستند',
  /** Label for loading history */
  'timeline.loading-history': 'جارٍ تحميل التاريخ...',
  /** Label shown in review changes timeline when a document has been created */
  'timeline.operation.created': 'تم الإنشاء',
  /** Label shown in review changes timeline when a document has been created, with a timestamp */
  'timeline.operation.created_timestamp': 'تم الإنشاء: {{timestamp, datetime}}',
  /** Label shown in review changes timeline when a document was initially created */
  'timeline.operation.created-initial': 'تم الإنشاء',
  /** Label shown in review changes timeline when a document was initially created, with a timestamp */
  'timeline.operation.created-initial_timestamp': 'تم الإنشاء: {{timestamp, datetime}}',
  /** Label shown in review changes timeline when a document has been deleted */
  'timeline.operation.deleted': 'تم الحذف',
  /** Label shown in review changes timeline when a document has been deleted, with a timestamp */
  'timeline.operation.deleted_timestamp': 'تم الحذف: {{timestamp, datetime}}',
  /** Label shown in review changes timeline when a draft has been discarded */
  'timeline.operation.draft-discarded': 'تم إهمال المسودة',
  /** Label shown in review changes timeline when a draft has been discarded, with a timestamp */
  'timeline.operation.draft-discarded_timestamp': 'تم إهمال المسودة: {{timestamp, datetime}}',
  /** Label shown in review changes timeline when a draft has been edited */
  'timeline.operation.edited-draft': 'تم التحرير',
  /** Label shown in review changes timeline when a draft has been edited, with a timestamp */
  'timeline.operation.edited-draft_timestamp': 'تم التحرير: {{timestamp, datetime}}',
  /** Label shown in review changes timeline when a document has been edited live */
  'timeline.operation.edited-live': 'تم التحرير مباشرة',
  /** Label shown in review changes timeline when a document has been edited live, with a timestamp */
  'timeline.operation.edited-live_timestamp': 'تم التحرير مباشرة: {{timestamp, datetime}}',
  /** Label shown in review changes timeline when a document was published */
  'timeline.operation.published': 'تم النشر',
  /** Label shown in review changes timeline when a document was published, with a timestamp */
  'timeline.operation.published_timestamp': 'تم النشر: {{timestamp, datetime}}',
  /** Label shown in review changes timeline when a document was unpublished */
  'timeline.operation.unpublished': 'غير منشور',
  /** Label shown in review changes timeline when a document was unpublished, with a timestamp */
  'timeline.operation.unpublished_timestamp': 'غير منشور: {{timestamp, datetime}}',
  /**
   * Label for determining since which version the changes for timeline menu dropdown are showing.
   * Receives the time label as a parameter (`timestamp`).
   */
  'timeline.since': 'منذ: {{timestamp, datetime}}',
  /** Label for missing change version for timeline menu dropdown are showing */
  'timeline.since-version-missing': 'منذ: إصدار غير معروف',

  /**Aria label for the action buttons in the PTE toolbar */
  'toolbar.portable-text.action-button-aria-label': '{{action}}',

  /** Label for button showing the free trial days left */
  'user-menu.action.free-trial_one': 'يوم واحد متبقي في الفترة التجريبية',
  /** Label for the button showed after trial ended */
  'user-menu.action.free-trial-finished': 'الترقية من النسخة المجانية',
  /** Label for action to invite members to the current sanity project */
  'user-menu.action.invite-members': 'دعوة الأعضاء',
  /** Accessibility label for action to invite members to the current sanity project */
  'user-menu.action.invite-members-aria-label': 'دعوة الأعضاء',
  /** Label for action to manage the current sanity project */
  'user-menu.action.manage-project': 'إدارة المشروع',
  /** Accessibility label for the action to manage the current project */
  'user-menu.action.manage-project-aria-label': 'إدارة المشروع',
  /** Tooltip helper text when portable text annotation is disabled for empty block*/
  'user-menu.action.portable-text.annotation-disabled_empty-block':
    'لا يمكن تطبيق {{name}} على كتلة فارغة',
  /** Tooltip helper text when portable text annotation is disabled for multiple blocks */
  'user-menu.action.portable-text.annotation-disabled_multiple-blocks':
    'لا يمكن تطبيق {{name}} على كتل متعددة',
  /** Label for action to sign out of the current sanity project */
  'user-menu.action.sign-out': 'تسجيل الخروج',
  /** Title for appearance section for the current studio (dark / light / system scheme) */
  'user-menu.appearance-title': 'المظهر',
  /** Label for close menu button for user menu */
  'user-menu.close-menu': 'إغلاق القائمة',
  /** Description for using the "dark theme" in the appearance user menu */
  'user-menu.color-scheme.dark-description': 'استخدم الواجهة الداكنة',
  /** Title for using the "dark theme" in the appearance user menu */
  'user-menu.color-scheme.dark-title': 'داكن',
  /** Description for using the "light theme" in the appearance user menu */
  'user-menu.color-scheme.light-description': 'استخدم الواجهة الفاتحة',
  /** Title for using the "light theme" in the appearance user menu */
  'user-menu.color-scheme.light-title': 'فاتح',
  /** Description for using "system apparence" in the appearance user menu */
  'user-menu.color-scheme.system-description': 'استخدم واجهة النظام',
  /** Title for using system apparence in the appearance user menu */
  'user-menu.color-scheme.system-title': 'النظام',
  /** Title for locale section for the current studio */
  'user-menu.locale-title': 'اللغة',
  /** Label for tooltip to show which provider the currently logged in user is using */
  'user-menu.login-provider': 'تم تسجيل الدخول باستخدام {{providerTitle}}',
  /** Label for open menu button for user menu */
  'user-menu.open-menu': 'فتح القائمة',

  /**
   * Label for action to add a workspace (currently a developer-oriented action, as this will
   * lead to the documentation on workspace configuration)
   */
  'workspaces.action.add-workspace': 'إضافة مساحة عمل',
  /**
   * Label for action to choose a different workspace, in the case where you are not logged in,
   * have selected a workspace, and are faced with the authentication options for the selected
   * workspace. In other words, label for the action shown when you have reconsidered which
   * workspace to authenticate in.
   */
  'workspaces.action.choose-another-workspace': 'اختر مساحة عمل أخرى',
  /** Label for heading that indicates that you can choose your workspace */
  'workspaces.choose-your-workspace-label': 'اختر مساحة عملك',
  /** Label for the workspace menu */
  'workspaces.select-workspace-aria-label': 'اختر مساحة عمل',
  /** Button label for opening the workspace switcher */
  'workspaces.select-workspace-label': 'اختر مساحة عمل',
  /** Tooltip for the workspace menu */
  'workspaces.select-workspace-tooltip': 'اختر مساحة عمل',
  /** Title for Workplaces dropdown menu */
  'workspaces.title': 'مساحات العمل',
})
