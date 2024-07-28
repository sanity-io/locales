import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Menu item for deleting the asset */
  'asset-source.asset-list.menu.delete': 'წაშლა',
  /** Menu item for showing where a particular asset is used */
  'asset-source.asset-list.menu.show-usage': 'გამოყენების ჩვენება',
  /** Header in usage dialog for file assets */
  'asset-source.asset-usage-dialog.header_file': 'ფაილს გამოყენებული დოკუმენტები',
  /** Header in usage dialog for image assets */
  'asset-source.asset-usage-dialog.header_image': 'სურათს გამოყენებული დოკუმენტები',
  /** Text shown in usage dialog when loading documents using the selected asset */
  'asset-source.asset-usage-dialog.loading': 'იტვირთება…',
  /** Text for cancel action in delete-asset dialog */
  'asset-source.delete-dialog.action.cancel': 'გაუქმება',
  /** Text for "confirm delete" action in delete-asset dialog */
  'asset-source.delete-dialog.action.delete': 'წაშლა',
  /** Dialog header for delete-asset dialog when deleting a file */
  'asset-source.delete-dialog.header_file': 'ფაილის წაშლა',
  /** Dialog header for delete-asset dialog when deleting an image */
  'asset-source.delete-dialog.header_image': 'სურათის წაშლა',
  /** Text shown in delete dialog when loading documents using the selected asset */
  'asset-source.delete-dialog.loading': 'იტვირთება…',
  /** Message confirming to delete *named* file */
  'asset-source.delete-dialog.usage-list.confirm-delete-file_named':
    'თქვენ აპირებთ წაშალოთ ფაილი <strong>{{filename}}}</strong> და მისი მეტადატა. დარწმუნებული ხართ?',
  /** Message confirming to delete *unnamed* file */
  'asset-source.delete-dialog.usage-list.confirm-delete-file_unnamed':
    'თქვენ აპირებთ წაშალოთ ფაილი და მისი მეტადატა. დარწმუნებული ხართ?',
  /** Message confirming to delete *named* image */
  'asset-source.delete-dialog.usage-list.confirm-delete-image_named':
    'თქვენ აპირებთ წაშალოთ სურათი <strong>{{filename}}</strong> და მისი მეტადატა. დარწმუნებული ხართ?',
  /** Message confirming to delete *unnamed* image */
  'asset-source.delete-dialog.usage-list.confirm-delete-image_unnamed':
    'თქვენ აპირებთ წაშალოთ სურათი და მისი მეტადატა. დარწმუნებული ხართ?',
  /** Alt text showing on image preview in delete asset dialog  */
  'asset-source.delete-dialog.usage-list.image-preview-alt': 'სურათის წინასწარი ხილვა',
  /** Warning message showing when *named* file can't be deleted because it is in use */
  'asset-source.delete-dialog.usage-list.warning-file-is-in-use_named':
    '{{filename}} ვერ იქნება წაშლილი, რადგან ის იყენება. ამ ფაილის წასაშლელად, ჯერ უნდა მოხსნათ მისი ყველა გამოყენება.',
  /** Warning message showing when *unnamed* file can't be deleted because it is in use */
  'asset-source.delete-dialog.usage-list.warning-file-is-in-use_unnamed':
    'ეს ფაილი ვერ იქნება წაშლილი, რადგან ის იყენება. მის წასაშლელად, ჯერ უნდა მოხსნათ მისი ყველა გამოყენება.',
  /** Warning message showing when *named* image can't be deleted because it is in use */
  'asset-source.delete-dialog.usage-list.warning-image-is-in-use_named':
    '{{filename}} ვერ იქნება წაშლილი, რადგან ის იყენება. ამ სურათის წასაშლელად, ჯერ უნდა მოხსნათ მისი ყველა გამოყენება.',
  /** Warning message showing when *unnamed* image can't be deleted because it is in use */
  'asset-source.delete-dialog.usage-list.warning-image-is-in-use_unnamed':
    'ეს სურათი ვერ იქნება წაშლილი, რადგან ის იყენება. მის წასაშლელად, ჯერ უნდა მოხსნათ მისი ყველა გამოყენება.',
  /** Text shown when the list of assets only include a specific set of types */
  'asset-source.dialog.accept-message':
    'მხოლოდ მიღებული ტიპების აქტივების ჩვენება: <strong>{{acceptTypes}}</strong>',
  /** Keys shared between both image asset source and file asset source */
  /** Select asset dialog title for files */
  'asset-source.dialog.default-title_file': 'ფაილის არჩევა',
  /** Select asset dialog title for images */
  'asset-source.dialog.default-title_image': 'სურათის არჩევა',
  /** Select asset dialog load more items */
  'asset-source.dialog.load-more': 'მეტის ჩატვირთვა',
  /** Text shown when selecting a file but there's no files to select from */
  'asset-source.dialog.no-assets_file': 'ფაილები არ არის',
  /** Text shown when selecting an image but there's no images to select from */
  'asset-source.dialog.no-assets_image': 'სურათები არ არის',
  'asset-source.file.asset-list.action.delete.disabled-cannot-delete-current-file':
    'მიმდინარედ შერჩეული ფაილის წაშლა არ შეიძლება',
  'asset-source.file.asset-list.action.delete.text': 'წაშლა',
  'asset-source.file.asset-list.action.delete.title': 'ფაილის წაშლა',
  'asset-source.file.asset-list.action.select-file.title': 'აირჩიეთ ფაილი {{filename}}',
  'asset-source.file.asset-list.action.show-usage.title': 'გამოყენების ჩვენება',
  'asset-source.file.asset-list.delete-failed': 'ფაილი ვერ წაიშალა',
  'asset-source.file.asset-list.delete-successful': 'ფაილი წაიშალა',
  'asset-source.file.asset-list.header.date-added': 'დამატების თარიღი',
  /** File asset source */
  'asset-source.file.asset-list.header.filename': 'ფაილის სახელი',
  'asset-source.file.asset-list.header.size': 'ზომა',
  'asset-source.file.asset-list.header.type': 'ტიპი',
  /** Text displayed on button or menu invoking the file asset source */
  'asset-source.file.title': 'ატვირთული ფაილები',
  'asset-source.image.asset-list.delete-failed': 'სურათი ვერ წაიშალა',
  /** Image asset source */
  'asset-source.image.asset-list.delete-successful': 'სურათი წაიშალა',
  /** Text displayed on button or menu invoking the image asset source */
  'asset-source.image.title': 'ატვირთული სურათები',
  'asset-source.usage-list.documents-using-file_named_one':
    'ერთი დოკუმენტი იყენებს ფაილს <code>{{filename}}</code>',
  'asset-source.usage-list.documents-using-file_named_other':
    '{{count}} დოკუმენტი იყენებს ფაილს <code>{{filename}}</code>',
  /** Text shown in usage dialog for a file asset when there are zero, one or more documents using the *named* file **/
  'asset-source.usage-list.documents-using-file_named_zero':
    'არცერთი დოკუმენტი არ იყენებს ფაილს <code>{{filename}}</code>',
  'asset-source.usage-list.documents-using-file_unnamed_one': 'ერთი დოკუმენტი იყენებს ამ ფაილს',
  'asset-source.usage-list.documents-using-file_unnamed_other':
    '{{count}} დოკუმენტი იყენებს ამ ფაილს',
  /** Text shown in usage dialog for a file asset when there are zero, one or more documents using the *unnamed* file **/
  'asset-source.usage-list.documents-using-file_unnamed_zero':
    'არცერთი დოკუმენტი არ იყენებს ამ ფაილს',
  'asset-source.usage-list.documents-using-image_named_one':
    'ერთი დოკუმენტი იყენებს სურათს <code>{{filename}}</code>',
  'asset-source.usage-list.documents-using-image_named_other':
    '{{count}} დოკუმენტი იყენებს სურათს <code>{{filename}}</code>',
  /** Text shown in usage dialog for an image asset when there are zero, one or more documents using the *named* image **/
  'asset-source.usage-list.documents-using-image_named_zero':
    'არცერთი დოკუმენტი არ იყენებს სურათს <code>{{filename}}</code>',
  'asset-source.usage-list.documents-using-image_unnamed_one': 'ერთი დოკუმენტი იყენებს ამ სურათს',
  'asset-source.usage-list.documents-using-image_unnamed_other':
    '{{count}} დოკუმენტი იყენებს ამ სურათს',
  /** Text shown in usage dialog for an image asset when there are zero, one or more documents using the *unnamed* image **/
  'asset-source.usage-list.documents-using-image_unnamed_zero':
    'არცერთი დოკუმენტი არ იყენებს ამ სურათს',

  /** Action message for navigating to next month */
  'calendar.action.go-to-next-month': 'გადასვლა შემდეგ თვეში',
  /** Action message for navigating to next year */
  'calendar.action.go-to-next-year': 'გადასვლა შემდეგ წელში',
  /** Action message for navigating to previous month */
  'calendar.action.go-to-previous-month': 'გადასვლა წინა თვეში',
  /** Action message for navigating to previous year */
  'calendar.action.go-to-previous-year': 'გადასვლა წინა წელში',
  /* Label for navigating the calendar to "today", without _selecting_ today. Short form, eg `Today`, not `Go to today` */
  'calendar.action.go-to-today': 'დღეს',
  /* Accessibility label for navigating the calendar to "today", without _selecting_ today */
  'calendar.action.go-to-today-aria-label': 'გადასვლა დღეს',
  /* Label for navigating the calendar to "tomorrow", without _selecting_ tomorrow. Short form, eg `Tomorrow`, not `Go to tomorrow` */
  'calendar.action.go-to-tomorrow': 'ხვალ',
  /* Label for navigating the calendar to "yesterday", without _selecting_ yesterday. Short form, eg `Yesterday`, not `Go to yesterday` */
  'calendar.action.go-to-yesterday': 'გუშინ',
  /** Label for switch that controls whether or not to include time in given timestamp */
  'calendar.action.include-time-label': 'დროის ჩათვლა',
  /** Action message for selecting the hour */
  'calendar.action.select-hour': 'საათის არჩევა',
  /** Action message for selecting the minute */
  'calendar.action.select-minute': 'წუთის არჩევა',
  /** Action message for setting to the current time */
  'calendar.action.set-to-current-time': 'დაყენება მიმდინარე დროზე',
  /** Label for selecting an hour preset. Receives a `time` param as a string on hh:mm format and a `date` param as a Date instance denoting the preset date */
  'calendar.action.set-to-time-preset': '{{time}} დროზე {{date, datetime}}',
  /** Error message displayed in calendar when entered date is not the correct format */
  'calendar.error.must-be-in-format': 'უნდა იყოს ფორმატში: {{exampleDate}}',
  /** Month name for April */
  'calendar.month-names.april': 'აპრილი',
  /** Month name for August */
  'calendar.month-names.august': 'აგვისტო',
  /** Month name for December */
  'calendar.month-names.december': 'დეკემბერი',
  /** Month name for February */
  'calendar.month-names.february': 'თებერვალი',
  /** Month name for January */
  'calendar.month-names.january': 'იანვარი',
  /** Month name for July */
  'calendar.month-names.july': 'ივლისი',
  /** Month name for June */
  'calendar.month-names.june': 'ივნისი',
  /** Month name for March */
  'calendar.month-names.march': 'მარტი',
  /** Month name for May */
  'calendar.month-names.may': 'მაისი',
  /** Month name for November */
  'calendar.month-names.november': 'ნოემბერი',
  /** Month name for October */
  'calendar.month-names.october': 'ოქტომბერი',
  /** Month name for September */
  'calendar.month-names.september': 'სექტემბერი',
  /** Short weekday name for Friday */
  'calendar.weekday-names.short.friday': 'პარ',
  /** Short weekday name for Monday */
  'calendar.weekday-names.short.monday': 'ორშ',
  /** Short weekday name for Saturdayday */
  'calendar.weekday-names.short.saturday': 'შაბ',
  /** Short weekday name for Sunday */
  'calendar.weekday-names.short.sunday': 'კვი',
  /** Short weekday name for Thursday */
  'calendar.weekday-names.short.thursday': 'ხუთ',
  /** Short weekday name for Tuesday */
  'calendar.weekday-names.short.tuesday': 'სამ',
  /** Short weekday name for Wednesday */
  'calendar.weekday-names.short.wednesday': 'ოთხ',

  /** Label for the close button label in Review Changes pane */
  'changes.action.close-label': 'დახურვა შესწორებების გადახედვა',
  /** Cancel label for revert button prompt action */
  'changes.action.revert-all-cancel': 'გაუქმება',
  /** Revert all confirm label for revert button action - used on prompt button + review changes pane */
  'changes.action.revert-all-confirm': 'ყველას დაბრუნება',
  /** Prompt for confirming revert change (singular) label for field change action */
  'changes.action.revert-changes-confirm-change_one': 'ცვლილების დაბრუნება',
  /** Revert for confirming revert (plural) label for field change action */
  'changes.action.revert-changes-confirm-change_other': 'ცვლილებების დაბრუნება',
  /** Prompt for reverting changes for a field change */
  'changes.action.revert-changes-description':
    'დარწმუნებული ხართ, რომ გსურთ ცვლილებების დაბრუნება?',
  /** Prompt for reverting changes for a group change, eg multiple changes */
  'changes.action.revert-changes-description_one':
    'დარწმუნებული ხართ, რომ გსურთ ცვლილების დაბრუნება?',
  /** Label for when the action of the change was to set something that was previously empty, eg a field was given a value, an array item was added, an asset was selected or similar */
  'changes.added-label': 'დამატებულია',
  /** Array diff: An item was added in a given position (`{{position}}`) */
  'changes.array.item-added-in-position': 'დამატებულია პოზიციაზე {{position}}',
  'changes.array.item-moved_down_one': 'გადატანილია {{count}} პოზიცია ქვემოთ',
  'changes.array.item-moved_down_other': 'გადატანილია {{count}} პოზიციები ქვემოთ',
  /**
   * Array diff: An item was moved within the array.
   * Receives `{{count}}` representing number of positions it moved.
   * Context is the direction of the move, either `up` or `down`.
   */
  'changes.array.item-moved_up_one': 'გადატანილია {{count}} პოზიცია ზემოთ',
  'changes.array.item-moved_up_other': 'გადატანილია {{count}} პოზიციები ზემოთ',
  /** Array diff: An item was removed from a given position (`{{position}}`) */
  'changes.array.item-removed-from-position': 'წაშლილია პოზიციიდან {{position}}',
  /** Accessibility label for the "change bar" shown when there are edits on a field-level */
  'changes.change-bar.aria-label': 'შესწორებების გადახედვა',
  /** Label for when the action of the change was _not_ an add/remove, eg a text field changed value, an image was changed from one asset to another or similar */
  'changes.changed-label': 'შეცვლილია',
  /** Label and text for tooltip that indicates the authors of the changes */
  'changes.changes-by-author': 'ცვლილებები ავტორის მიერ',
  /** Additional text shown in development mode when a diff component crashes during rendering */
  'changes.error-boundary.developer-info': 'დეველოპერის კონსოლში იხილეთ მეტი ინფორმაცია',
  /** Text shown when a diff component crashes during rendering, triggering the error boundary */
  'changes.error-boundary.title': 'ამ ველის ცვლილებების რენდერინგი გამოიწვია შეცდომა',
  /** Error message shown when the value of a field is not the expected one */
  'changes.error.incorrect-type-message':
    'მნიშვნელობის შეცდომა: მნიშვნელობა არის ტიპის "<code>{{actualType}}</code>", მოსალოდნელია "<code>{{expectedType}}</code>"',
  /** File diff: Fallback title for the meta info section when there is no original filename to use  */
  'changes.file.meta-info-fallback-title': 'უსათაურო',
  /** Image diff: Text shown in tooltip when hovering hotspot that has changed in diff view */
  'changes.image.crop-changed': 'კროპი შეცვლილია',
  /** Image diff: Text shown if the previous image asset was deleted (shouldn't theoretically happen) */
  'changes.image.deleted': 'სურათი წაშლილია',
  /** Image diff: Text shown if the image failed to be loaded when previewing it */
  'changes.image.error-loading-image': 'სურათის ჩატვირთვის შეცდომა',
  /** Image diff: Text shown in tooltip when hovering hotspot that has changed in diff view */
  'changes.image.hotspot-changed': 'ჰოტსპოტი შეცვლილია',
  /** Image diff: Fallback title for the meta info section when there is no original filename to use  */
  'changes.image.meta-info-fallback-title': 'უსათაურო',
  /** Image diff: Text shown if no asset has been set for the field (but has metadata changes) */
  'changes.image.no-asset-set': 'სურათი არ არის მითითებული',
  /** Image diff: Text shown when the from/to state has/had no image */
  'changes.image.no-image-placeholder': '(სურათი არ არის)',
  /** Label for the "from" value in the change inspector */
  'changes.inspector.from-label': 'დან',
  /** Label for the "meta" (field path, action etc) information in the change inspector */
  'changes.inspector.meta-label': 'მეტა',
  /** Label for the "to" value in the change inspector */
  'changes.inspector.to-label': 'დამდე',
  /** Loading author of change in the differences tooltip in the review changes pane */
  'changes.loading-author': 'იტვირთება…',
  /** Loading changes in Review Changes Pane */
  'changes.loading-changes': 'ცვლილებების იტვირთება…',
  /** No Changes description in the Review Changes pane */
  'changes.no-changes-description':
    'რედაქტირება დოკუმენტი ან აირჩიეთ უფრო ძველი ვერსია დროის ზოლში, რათა ამ პანელზე გამოჩნდეს ცვლილებების სია.',
  /** No Changes title in the Review Changes pane */
  'changes.no-changes-title': 'ცვლილებები არ არის',
  /** Portable Text diff: An annotation was added */
  'changes.portable-text.annotation_added': 'დამატებული ანოტაცია',
  /** Portable Text diff: An annotation was changed */
  'changes.portable-text.annotation_changed': 'შეცვლილი ანოტაცია',
  /** Portable Text diff: An annotation was removed */
  'changes.portable-text.annotation_removed': 'წაშლილი ანოტაცია',
  /** Portable Text diff: An annotation was left unchanged */
  'changes.portable-text.annotation_unchanged': 'უცვლელი ანოტაცია',
  /** Portable Text diff: A block changed from one style to another (eg `normal` to `h1` or similar) */
  'changes.portable-text.block-style-changed':
    'ბლოკის სტილი შეცვლილია "{{fromStyle}}"-დან "{{toStyle}}"-ზე',
  /** Portable Text diff: Change formatting of text (setting/unsetting marks, eg bold/italic etc) */
  'changes.portable-text.changed-formatting': 'ფორმატირების შეცვლა',
  /** Portable Text diff: An empty inline object is part of a change */
  'changes.portable-text.empty-inline-object': 'ცარიელი {{inlineObjectType}}',
  /** Portable Text diff: An empty object is the result of adding/removing an annotation */
  'changes.portable-text.empty-object-annotation': 'ცარიელი {{annotationType}}',
  /** Portable Text diff: Added a block containing no text (eg empty block) */
  'changes.portable-text.empty-text_added': 'დაემატა ცარიელი ტექსტი',
  /** Portable Text diff: Changed a block that contained no text (eg empty block) */
  'changes.portable-text.empty-text_changed': 'შეცვლილია ცარიელი ტექსტი',
  /** Portable Text diff: Removed a block containing no text (eg empty block) */
  'changes.portable-text.empty-text_removed': 'წაშლილია ცარიელი ტექსტი',
  /** Portable Text diff: An inline object was added */
  'changes.portable-text.inline-object_added': 'დაემატა ჩასასმელი ობიექტი',
  /** Portable Text diff: An inline object was changed */
  'changes.portable-text.inline-object_changed': 'შეცვლილია ჩასასმელი ობიექტი',
  /** Portable Text diff: An inline object was removed */
  'changes.portable-text.inline-object_removed': 'წაშლილია ჩასასმელი ობიექტი',
  /** Portable Text diff: An inline object was left unchanged */
  'changes.portable-text.inline-object_unchanged': 'უცვლელი ჩასასმელი ობიექტი',
  /** Portable Text diff: Added a chunk of text */
  'changes.portable-text.text_added': 'დაემატა ტექსტი',
  /** Portable Text diff: Removed a chunk of text */
  'changes.portable-text.text_removed': 'წაშლილია ტექსტი',
  /** Portable Text diff: Annotation has an unknown schema type */
  'changes.portable-text.unknown-annotation-schema-type': 'უცნობი სქემის ტიპი',
  /** Portable Text diff: Inline object has an unknown schema type */
  'changes.portable-text.unknown-inline-object-schema-type': 'უცნობი სქემის ტიპი',
  /** Label for when the action of the change was a removal, eg a field was cleared, an array item was removed, an asset was deselected or similar */
  'changes.removed-label': 'წაშლილია',
  /** Title for the Review Changes pane */
  'changes.title': 'ცვლილებების გადახედვა',

  /** --- Common components --- */
  /** Tooltip text for context menu buttons */
  'common.context-menu-button.tooltip': 'მეტის ჩვენება',
  /** Default text for dialog cancel button */
  'common.dialog.cancel-button.text': 'გაუქმება',
  /** Default text for dialog confirm button */
  'common.dialog.confirm-button.text': 'დადასტურება',
  /** Default text in shared loader text / spinner lockup */
  'common.loading': 'იტვირთება',

  /** --- Configuration issues --- */
  /** Default label text on configuration issues button */
  'configuration-issues.button.label': 'კონფიგურაციის პრობლემები',
  /** Tooltip displayed on configuration issues button */
  'configuration-issues.button.tooltip': 'კონფიგურაციის პრობლემები აღმოჩენილია',

  /** The fallback title for an ordering menu item if no localized titles are provided. */
  'default-menu-item.fallback-title': 'დალაგება {{title}}-ით',

  /** Title for the default ordering/SortOrder if no orderings are provided and the caption field is found */
  'default-orderings.caption': 'დალაგება წარწერით',
  /** Title for the default ordering/SortOrder if no orderings are provided and the description field is found */
  'default-orderings.description': 'დალაგება აღწერით',
  /** Title for the default ordering/SortOrder if no orderings are provided and the header field is found */
  'default-orderings.header': 'დალაგება სათაურით',
  /** Title for the default ordering/SortOrder if no orderings are provided and the heading field is found */
  'default-orderings.heading': 'დალაგება სათაურის მიხედვით',
  /** Title for the default ordering/SortOrder if no orderings are provided and the label field is found */
  'default-orderings.label': 'დალაგება ლეიბლის მიხედვით',
  /** Title for the default ordering/SortOrder if no orderings are provided and the name field is found */
  'default-orderings.name': 'დალაგება სახელის მიხედვით',
  /** Title for the default ordering/SortOrder if no orderings are provided and the title field is found */
  'default-orderings.title': 'დალაგება სათაურის მიხედვით',

  /** Label to show in the document footer indicating the last edited date of the document */
  'document-status.edited': 'რედაქტირებულია {{date}}',
  /** Label to show in the document footer indicating the document is not published*/
  'document-status.not-published': 'არ არის გამოქვეყნებული',
  /** Label to show in the document footer indicating the published date of the document */
  'document-status.published': 'გამოქვეყნებულია {{date}}',

  /** The value of the <code>_key</code> property must be a unique string. */
  'form.error.duplicate-keys-alert.details.additional-description':
    '<code>_key</code> თვისების მნიშვნელობამ უნიკალური სტრიქონი უნდა იყოს.',
  /** This usually happens when items are created using an API client, and the <code>_key</code> property of each elements has been generated non-uniquely. */
  'form.error.duplicate-keys-alert.details.description':
    'ეს ხშირად ხდება, როდესაც ელემენტები ქმნიან API კლიენტის მეშვეობით, და თითოეული ელემენტის <code>_key</code> თვისება არაუნიკალურად იქმნება.',
  /** Developer info */
  'form.error.duplicate-keys-alert.details.title': 'დეველოპერის ინფორმაცია',
  /** Generate unique keys */
  'form.error.duplicate-keys-alert.generate-button.text': 'გენერირება უნიკალური გასაღებები',
  /** Several items in this list share the same identifier (key). Every item must have an unique identifier. */
  'form.error.duplicate-keys-alert.summary':
    'ამ სიაში რამდენიმე ელემენტი იყენებს იდენტიფიკატორს (გასაღებს). თითოეულ ელემენტს უნდა ჰქონდეს უნიკალური იდენტიფიკატორი.',
  /** Non-unique keys */
  'form.error.duplicate-keys-alert.title': 'არაუნიკალური გასაღებები',
  /** Error text shown when a field with a given name cannot be found in the schema or is conditionally hidden but explicitly told to render  */
  'form.error.field-not-found':
    'ველი "{{fieldName}}" ვერ მოიძებნა წევრებში – შეამოწმეთ, რომ ის განსაზღვრულია სქემაში და არ იყოფა პირობითად.',
  /** Add missing keys */
  'form.error.missing-keys-alert.add-button.text': 'დაამატეთ აკლიანი გასაღებები',
  /** The value of the <code>_key</code> property must be a unique string. */
  'form.error.missing-keys-alert.details.additional-description':
    '<code>_key</code> თვისების მნიშვნელობამ უნიკალური სტრიქონი უნდა იყოს.',
  /** This usually happens when items are created using an API client, and the <code>_key</code> property has not been included. */
  'form.error.missing-keys-alert.details.description':
    'ეს ხშირად ხდება, როდესაც ელემენტები ქმნიან API კლიენტის მეშვეობით, და <code>_key</code> თვისება არ შეიცავს.',
  /** Developer info */
  'form.error.missing-keys-alert.details.title': 'დეველოპერის ინფორმაცია',
  /** Some items in the list are missing their keys. This must be fixed in order to edit the list. */
  'form.error.missing-keys-alert.summary':
    'სიის რამდენიმე ელემენტს აკლია გასაღებები. ეს უნდა გასწორდეს სიის რედაქტირებამდე.',
  /** Missing keys */
  'form.error.missing-keys-alert.title': 'აკლიანი გასაღებები',
  /** This usually happens when items are created using an API client, or when a custom input component has added invalid data to the list. */
  'form.error.mixed-array-alert.details.description':
    'ეს ხშირად ხდება, როდესაც ელემენტები ქმნიან API კლიენტის მეშვეობით, ან როდესაც საბაზისო შემავალი კომპონენტი სიაში ამატებს არასწორ მონაცემებს.',
  /** Developer info */
  'form.error.mixed-array-alert.details.title': 'დეველოპერის ინფორმაცია',
  /**  Remove non-object values */
  'form.error.mixed-array-alert.remove-button.text': 'არა-ობიექტური მნიშვნელობების ამოღება',
  /** Some items in this list are not objects. This must be fixed in order to edit the list. */
  'form.error.mixed-array-alert.summary':
    'სიის რამდენიმე ელემენტი არ არის ობიექტები. ეს უნდა გასწორდეს სიის რედაქტირებამდე.',
  /** Invalid list values */
  'form.error.mixed-array-alert.title': 'არასწორი სიის მნიშვნელობები',
  /** Error text shown when form is unable to find an array item at a given indexed path */
  'form.error.no-array-item-at-index':
    'მასივის ელემენტი ინდექსზე <code>{{index}}</code> ვერ მოიძებნა გზაზე <code>{{path}}</code>',
  /** Error text shown when form is unable to find an array item at a given keyed path */
  'form.error.no-array-item-at-key':
    'მასივის ელემენტი `_key`-ით <code>"{{key}}"</code> ვერ მოიძებნა გზაზე <code>{{path}}</code>',
  /** The title above the error call stack output related to the crash */
  'form.error.unhandled-runtime-error.call-stack.title': 'გამოძახების სტეკი:',
  /** The title above the error component stack provided by React's underlying ErrorBoundary component */
  'form.error.unhandled-runtime-error.component-stack.title': 'კომპონენტის სტეკი:',
  /** The error message for the unhandled error that crashed the Input component during render */
  'form.error.unhandled-runtime-error.error-message': 'შეცდომა: {{message}}',
  /** The title for the error card rendered inside a field in place of a crashing input */
  'form.error.unhandled-runtime-error.title': 'დაუმართავი შესრულების შეცდომა',
  /** Form field deprecated label */
  'form.field.deprecated-label': 'გაუქმებული',
  /** Fallback title shown above field if it has no defined title */
  'form.field.untitled-field-label': 'უსათაურო',
  /** Accessibility label for the icon that indicates the field has a validation error */
  'form.validation.has-error-aria-label': 'აქვს შეცდომა',
  /** Accessibility label for the icon that indicates the field has validation information */
  'form.validation.has-info-aria-label': 'აქვს ინფორმაცია',
  /** Accessibility label for the icon that indicates the field has a validation warning */
  'form.validation.has-warning-aria-label': 'აქვს გაფრთხილება',
  /** Text shown when summarizing validation information, when the field has one or more errors */
  'form.validation.summary.errors-count_one': '{{count}} შეცდომა',
  'form.validation.summary.errors-count_other': '{{count}} შეცდომები',
  /** Text shown when summarizing validation information, when the field has one or more warnings */
  'form.validation.summary.warnings-count_one': '{{count}} გაფრთხილება',
  'form.validation.summary.warnings-count_other': '{{count}} გაფრთხილებები',

  /** Tooltip for free trial navbar button indicating remaining days */
  'free-trial.tooltip.days-count_one': 'საცდელ ვერსიაში დარჩა {{count}} დღე',
  'free-trial.tooltip.days-count_other': 'საცდელ ვერსიაში დარჩა {{count}} დღე',
  /** Tooltip for free trial navbar button, once trial has ended */
  'free-trial.tooltip.trial-finished': 'განაახლეთ თქვენი პროექტი',

  /**
   * Label for "contact sales" call to action
   * These are titles for fallback links in the event the help & resources endpoint isn't able to be fetched
   */
  'help-resources.action.contact-sales': 'დაკავშირება გაყიდვებთან',
  /**
   * Label for "help and support" call to action
   * These are titles for fallback links in the event the help & resources endpoint isn't able to be fetched
   */
  'help-resources.action.help-and-support': 'დახმარება და მხარდაჭერა',
  /**
   * Label for "join our community" call to action
   * These are titles for fallback links in the event the help & resources endpoint isn't able to be fetched
   */
  'help-resources.action.join-our-community': 'შეუერთდით ჩვენს თემას',
  /** Information for what the latest sanity version is */
  'help-resources.latest-sanity-version': 'უახლესი ვერსიაა {{latestVersion}}',
  /** Information for what studio version the current studio is running */
  'help-resources.studio-version': 'Sanity Studio ვერსია {{studioVersion}}',
  /** Title for help and resources menus */
  'help-resources.title': 'დახმარება და რესურსები',

  /** Text for button to cancel an ongoing upload */
  'input.files.common.cancel-upload': 'ატვირთვის შეწყვეტა',
  /** Text for file input button in upload placeholder */
  'input.files.common.upload-placeholder.file-input-button.text': 'ატვირთვა',
  /** Uploading <FileName/> */
  'input.files.common.upload-progress': 'იტვირთება <FileName/>',
  /** The referenced document cannot be opened, because the URL failed to be resolved */
  'input.reference.document-cannot-be-opened.failed-to-resolve-url':
    'ეს დოკუმენტი ვერ იხსნება (ვერ ხდება URL-ის სტუდიოში გადაყვანა)',

  /** Label for adding item after a specific array item */
  'inputs.array.action.add-after': 'დაამატეთ ელემენტი შემდეგ',
  /** Label for adding item before a specific array item */
  'inputs.array.action.add-before': 'დაამატეთ ელემენტი წინ',
  /** Label for adding array item action when the schema allows for only one schema type */
  'inputs.array.action.add-item': 'დაამატეთ ელემენტი',
  /**
   * Label for adding one array item action when the schema allows for multiple schema types,
   * eg. will prompt the user to select a type once triggered
   */
  'inputs.array.action.add-item-select-type': 'დაამატეთ ელემენტი...',
  /** Array drag handle button tooltip */
  'inputs.array.action.drag.tooltip': 'გადაადგილება რიგითი შეცვლისთვის',
  /** Label for duplicating an array item  */
  'inputs.array.action.duplicate': 'დუბლირება',
  /** Label for editing the item of a specific type, eg "Edit Person" */
  'inputs.array.action.edit': 'რედაქტირება {{itemTypeTitle}}',
  /** Label for removing an array item action  */
  'inputs.array.action.remove': 'წაშლა',
  /** Label for removing action when an array item has an error  */
  'inputs.array.action.remove-invalid-item': 'წაშლა',
  /** Label for viewing the item of a specific type, eg "View Person" */
  'inputs.array.action.view': 'ნახვა {{itemTypeTitle}}',
  /** Error description for the array item tooltip that explains that the current item can still be moved or deleted but not edited since the schema definition is not found */
  'inputs.array.error.can-delete-but-no-edit-description':
    'თქვენ შეგიძლიათ ელემენტის გადაადგილება ან წაშლა, თუმცა რედაქტირება არ შეიძლება, რადგან მისი ტიპის სქემის განმარტება ვერ იპოვება.',
  /** Error label for toast when array could not resolve the initial value */
  'inputs.array.error.cannot-resolve-initial-value-title':
    'ვერ ხერხდება ტიპისთვის საწყისი მნიშვნელობის გარკვევა: {{schemaTypeTitle}}: {{errorMessage}}.',
  /** Error label for toast when trying to upload one array item of a type that cannot be converted to array */
  'inputs.array.error.cannot-upload-unable-to-convert_one':
    'შემდეგი ელემენტი ვერ იტვირთება, რადგან არ არის ცნობილი კონვერსია კონტენტის ტიპიდან მასივის ელემენტში:',
  /** Error label for toast when trying to upload multiple array items of a type that cannot be converted to array */
  'inputs.array.error.cannot-upload-unable-to-convert_other':
    'შემდეგი ელემენტები ვერ იტვირთება, რადგან არ არის ცნობილი კონვერსია კონტენტის ტიპებიდან მასივის ელემენტში:',
  /** Error description for the array item tooltip that explains that the current type item is not valid for the list  */
  'inputs.array.error.current-schema-not-declare-description':
    'მიმდინარე სქემა არ აღიარებს ტიპის <code>{{typeName}}</code> ელემენტებს ვალიდურად ამ სიისთვის. ეს ნიშნავს, რომ ტიპი ამოღებულია ვალიდური ელემენტის ტიპებიდან, ან ვინმე სხვამ დაამატებინა მას თავის ლოკალურ სქემაში, რომელიც ჯერ არ არის გაშვებული.',
  /** Error description to show how the item is being represented in the json format */
  'inputs.array.error.json-representation-description': 'ამ ელემენტის JSON წარმოდგენა:',
  /** Error description for the array item tooltip that explains what the error means with more context */
  'inputs.array.error.type-is-incompatible-prompt':
    'ტიპის <code>{{typeName}}</code> ელემენტი არ არის ვალიდური ამ სიისთვის',
  /** Error title for when an item type within an array input is incompatible, used in the tooltip */
  'inputs.array.error.type-is-incompatible-title': 'რატომ ხდება ეს?',
  /** Error label for unexpected errors in the Array Input */
  'inputs.array.error.unexpected-error': 'მოულოდნელი შეცდომა: {{error}}',
  /** Label for the array insert menu all items filter  */
  'inputs.array.insert-menu.filter.all-items': 'ყველა',
  /** Label for when the array insert menu search shows no items */
  'inputs.array.insert-menu.search.no-results': 'ელემენტები ვერ მოიძებნა',
  /** Placeholder for the array insert menu search field */
  'inputs.array.insert-menu.search.placeholder': 'ძებნა',
  /** Tooltip for the array insert menu grid view toggle */
  'inputs.array.insert-menu.toggle-grid-view.tooltip': 'გრიდის ხედის გადართვა',
  /** Tooltip for the array insert menu list view toggle */
  'inputs.array.insert-menu.toggle-list-view.tooltip': 'სიის ხედის გადართვა',
  /** Label for when the array input doesn't have any items */
  'inputs.array.no-items-label': 'ელემენტები არ არის',
  /** Label for read only array fields */
  'inputs.array.read-only-label': 'ეს ველი არის მხოლოდ კითხვისთვის',
  /** Label for when the array input is resolving the initial value for the item */
  'inputs.array.resolving-initial-value': 'საწყისი მნიშვნელობის გარკვევა…',
  /** Tooltip content when boolean input is disabled */
  'inputs.boolean.disabled': 'გამორთულია',
  /** Placeholder value for datetime input */
  'inputs.datetime.placeholder': 'მაგ. {{example}}',
  /** Acessibility label for button to open file options menu */
  'inputs.file.actions-menu.file-options.aria-label': 'ფაილის ოპციების მენიუს გახსნა',
  /** Browse */
  'inputs.file.browse-button.text': 'დათვალიერება',
  /** Select file */
  'inputs.file.dialog.title': 'ფაილის არჩევა',
  /** Unknown member kind: `{{kind}}` */
  'inputs.file.error.unknown-member-kind': 'უცნობი წევრის ტიპი: {{kind}}',
  /** The value of this field is not a valid file. Resetting this field will let you choose a new file. */
  'inputs.file.invalid-file-warning.description':
    'ამ ველის მნიშვნელობა არ არის მართებული ფაილი. ველის განულება გაძლევთ ახალი ფაილის არჩევის შესაძლებლობას.',
  /** Reset value */
  'inputs.file.invalid-file-warning.reset-button.text': 'მნიშვნელობის განულება',
  /** Invalid file value */
  'inputs.file.invalid-file-warning.title': 'არამართებული ფაილის მნიშვნელობა',
  /** Select */
  'inputs.file.multi-browse-button.text': 'არჩევა',
  /** The upload could not be completed at this time. */
  'inputs.file.upload-failed.description': 'ატვირთვა ამ დროს ვერ შესრულდა.',
  /** Upload failed */
  'inputs.file.upload-failed.title': 'ატვირთვა ჩაიშალა',
  /** Clear field */
  'inputs.files.common.actions-menu.clear-field.label': 'ველის გასუფთავება',
  /** Copy URL */
  'inputs.files.common.actions-menu.copy-url.label': 'URL-ის კოპირება',
  /** Download */
  'inputs.files.common.actions-menu.download.label': 'ჩამოტვირთვა',
  /** The URL is copied to the clipboard */
  'inputs.files.common.actions-menu.notification.url-copied': 'URL დაკოპირდა ბუფერში',
  /** Replace */
  'inputs.files.common.actions-menu.replace.label': 'შეცვლა',
  /** Upload */
  'inputs.files.common.actions-menu.upload.label': 'ატვირთვა',
  /** Drop to upload */
  'inputs.files.common.drop-message.drop-to-upload': 'ჩააგდეთ ატვირთვისთვის',
  /** Drop to upload `{{count}}` file */
  'inputs.files.common.drop-message.drop-to-upload-multi_one':
    'ჩააგდეთ {{count}} ფაილი ატვირთვისთვის',
  /** Drop to upload `{{count}}` files */
  'inputs.files.common.drop-message.drop-to-upload-multi_other':
    'ჩააგდეთ {{count}} ფაილი ატვირთვისთვის',
  /** Can't upload this file here */
  'inputs.files.common.drop-message.drop-to-upload.no-accepted-file-message_one':
    'ამ ფაილს აქ ვერ ატვირთავთ',
  /** Can't upload any of these files here */
  'inputs.files.common.drop-message.drop-to-upload.no-accepted-file-message_other':
    'ამ ფაილებს აქ ვერ ატვირთავთ',
  /** `{{count}}` file can't be uploaded here */
  'inputs.files.common.drop-message.drop-to-upload.rejected-file-message_one':
    '{{count}} ფაილს აქ ვერ ატვირთავთ',
  /** `{{count}}` files can't be uploaded here */
  'inputs.files.common.drop-message.drop-to-upload.rejected-file-message_other':
    '{{count}} ფაილს აქ ვერ ატვირთავთ',
  /** Cannot upload `{{count}}` files */
  'inputs.files.common.placeholder.cannot-upload-some-files_one': 'ვერ ატვირთავთ ფაილს',
  'inputs.files.common.placeholder.cannot-upload-some-files_other': 'ვერ ატვირთავთ {{count}} ფაილს',
  /** Drag or paste type here */
  'inputs.files.common.placeholder.drag-or-paste-to-upload_file': 'ჩააგდეთ ან ჩასვით ტიპი აქ',
  /** Drag or paste image here */
  'inputs.files.common.placeholder.drag-or-paste-to-upload_image': 'ჩააგდეთ ან ჩასვით სურათი აქ',
  /** Drop to upload file */
  'inputs.files.common.placeholder.drop-to-upload_file': 'ჩააგდეთ ფაილი ატვირთვისთვის',
  /** Drop to upload image */
  'inputs.files.common.placeholder.drop-to-upload_image': 'ჩააგდეთ სურათი ატვირთვისთვის',
  /** Read only */
  'inputs.files.common.placeholder.read-only': 'მხოლოდ კითხვა',
  /** Can't upload files here */
  'inputs.files.common.placeholder.upload-not-supported': 'აქ ფაილების ატვირთვა არ შეიძლება',
  /** Clear upload */
  'inputs.files.common.stale-upload-warning.clear': 'წაშლა ატვირთვა',
  /** An upload has made no progress for at least `{{staleThresholdMinutes}}` minutes and likely got interrupted. You can safely clear the incomplete upload and try uploading again. */
  'inputs.files.common.stale-upload-warning.description':
    'ატვირთვა არ განახლდა მინიმუმ {{staleThresholdMinutes}} წუთის განმავლობაში და შესაძლოა შეწყდა. შეგიძლიათ უსაფრთხოდ წაშალოთ დაუსრულებელი ატვირთვა და სცადოთ ხელახლა ატვირთვა.',
  /** Incomplete upload */
  'inputs.files.common.stale-upload-warning.title': 'დაუსრულებელი ატვირთვა',
  /** Tooltip text for action to crop image */
  'inputs.image.actions-menu.crop-image-tooltip': 'სურათის მოჭრა',
  /** Accessibility label for button to open image edit dialog */
  'inputs.image.actions-menu.edit-details.aria-label': 'სურათის რედაქტირების დიალოგის გახსნა',
  /** Accessibility label for button to open image options menu */
  'inputs.image.actions-menu.options.aria-label': 'სურათის ოპციების მენიუს გახსნა',
  /** Select */
  'inputs.image.browse-menu.text': 'არჩევა',
  /** Cannot upload this file here */
  'inputs.image.drag-overlay.cannot-upload-here': 'აქ არ შეიძლება ატვირთვა ამ ფაილის',
  /** Drop image to upload */
  'inputs.image.drag-overlay.drop-to-upload-image': 'ჩააგდეთ სურათი ატვირთვისთვის',
  /** This field is read only */
  'inputs.image.drag-overlay.this-field-is-read-only': 'ეს ველი მხოლოდ კითხვისაა',
  /** Unknown member kind: `{{kind}}` */
  'inputs.image.error.unknown-member-kind': 'უცნობი წევრის ტიპი: {{kind}}',
  /** Edit hotspot and crop */
  'inputs.image.hotspot-dialog.title': 'ჰოტსპოტის და სურათის მოჭრის რედაქტირება',
  /** The value of this field is not a valid image. Resetting this field will let you choose a new image. */
  'inputs.image.invalid-image-warning.description':
    'ამ ველის მნიშვნელობა არ არის სწორი სურათი. ველის გადაყენებით შეძლებთ ახალი სურათის არჩევას.',
  /** Reset value */
  'inputs.image.invalid-image-warning.reset-button.text': 'მნიშვნელობის გადაყენება',
  /** Invalid image value */
  'inputs.image.invalid-image-warning.title': 'არასწორი სურათის მნიშვნელობა',
  /** Preview of uploaded image */
  'inputs.image.preview-uploaded-image': 'ატვირთული სურათის წინასწარი ხილვა',
  /** The upload could not be completed at this time. */
  'inputs.image.upload-error.description': 'ატვირთვა ამ დროს ვერ შესრულდა.',
  /** Upload failed */
  'inputs.image.upload-error.title': 'ატვირთვის შეცდომა',
  /** Adjust the rectangle to crop image. Adjust the circle to specify the area that should always be visible. */
  'inputs.imagetool.description':
    'მოარგეთ კვადრატი სურათის მოჭრისთვის. მოარგეთ წრე იმ არეალის მითითებას, რომელიც უნდა იყოს მუდამ ხილვადი.',
  /** Error: `{{errorMessage}}` */
  'inputs.imagetool.load-error': 'შეცდომა: {{errorMessage}}',
  /** Hotspot & Crop */
  'inputs.imagetool.title': 'ჰოტსპოტი & მოჭრა',
  /** Convert to `{{targetType}}` */
  'inputs.invalid-value.convert-button.text': 'გადაყვანა {{targetType}}-ში',
  /** The current value (<code>`{{actualType}}`</code>) */
  'inputs.invalid-value.current-type': 'მიმდინარე მნიშვნელობა (<code>{{actualType}}</code>)',
  /** The property value is stored as a value type that does not match the expected type. */
  'inputs.invalid-value.description':
    'თვისების მნიშვნელობა შენახულია მნიშვნელობის ტიპად, რომელიც არ ემთხვევა მოსალოდნელ ტიპს.',
  /** The value of this property must be of type <code>`{{validType}}`</code> according to the schema. */
  'inputs.invalid-value.details.description':
    'ამ თვისების მნიშვნელობას ტიპი <code>{{validType}}</code> უნდა ჰქონდეს სქემის თანახმად.',
  /** Only the following types are valid here according to schema: */
  'inputs.invalid-value.details.multi-type-description':
    'სქემის თანახმად, აქ მხოლოდ შემდეგი ტიპები არის ვალიდური:',
  /** Mismatching value types typically occur when the schema has recently been changed. */
  'inputs.invalid-value.details.possible-reason':
    'მნიშვნელობის ტიპების არასწორი შესაბამისობა ხშირად ხდება, როცა სქემა ახლახანს შეიცვალა.',
  /** Developer info */
  'inputs.invalid-value.details.title': 'დეველოპერის ინფო',
  /** -- Invalid Value Input -- */
  /** Reset value */
  'inputs.invalid-value.reset-button.text': 'მნიშვნელობის განულება',
  /** Invalid property value */
  'inputs.invalid-value.title': 'თვისების არასწორი მნიშვნელობა',
  /** Title for the "All fields" field group */
  'inputs.object.field-group-tabs.all-fields-title': 'ყველა ველი',
  /** Aria label for the "Field groups" select control on smaller screens */
  'inputs.object.field-group-tabs.aria-label': 'ველის ჯგუფები',
  /** Read-only field description */
  'inputs.object.unknown-fields.read-only.description':
    'ეს ველი <strong>წაკითხვადი მხარეა</strong> დოკუმენტის სქემის თანახმად და ვერ მოიხსნება. თუ გსურთ, რომ სტუდიაში შეძლოთ ამის გაუქმება, დარწმუნდით, რომ სქემის შემოსავალ ტიპში ამოიღებთ <code>readOnly</code> ველს.',
  /** Remove field */
  'inputs.object.unknown-fields.remove-field-button.text': 'ველის ამოღება',
  /** Encountered `{{count}}` fields that are not defined in the schema. */
  'inputs.object.unknown-fields.warning.description_one':
    'გამოჩნდა ველი, რომელიც სქემაში არ არის განსაზღვრული.',
  'inputs.object.unknown-fields.warning.description_other':
    'გამოჩნდა {{count}} ველი, რომელიც სქემაში არ არის განსაზღვრული.',
  /** Detailed description of unknown field warning */
  'inputs.object.unknown-fields.warning.details.description_one':
    'ეს ველი სქემაში არ არის განსაზღვრული, რაც ნიშნავს, რომ ველის განსაზღვრება ამოღებულია ან ვინმე სხვამ დაამატებინა თავის ლოკალურ პროექტში და ჯერ არ არის გაფართოებული.',
  'inputs.object.unknown-fields.warning.details.description_other':
    'ეს ველები დოკუმენტის სქემაში არ არის განსაზღვრული, რაც ნიშნავს, რომ ველების განსაზღვრება ამოღებულია ან ვინმე სხვამ დაამატებინა თავის ლოკალურ პროექტში და ჯერ არ არის გაფართოებული.',
  /** Developer info */
  'inputs.object.unknown-fields.warning.details.title': 'დეველოპერის ინფო',
  /** Unknown field found */
  'inputs.object.unknown-fields.warning.title_one': 'უცნობი ველი აღმოჩენილია',
  'inputs.object.unknown-fields.warning.title_other': 'უცნობი ველები აღმოჩენილია',
  /** Collapse the editor to save screen space  */
  'inputs.portable-text.action.collapse-editor': 'რედაქტორის შეკუმშვა ეკრანის ზომის დასაზოგად',
  /** Aria label for action to edit an existing annotation */
  'inputs.portable-text.action.edit-annotation-aria-label': 'ანოტაციის რედაქტირება',
  /** Expand the editor to give more editing space */
  'inputs.portable-text.action.expand-editor':
    'რედაქტორის გაშლა უფრო მეტი რედაქტირების სივრცისთვის',
  /** Label label for action to insert a block of a given type (`{{typeName}}`) */
  'inputs.portable-text.action.insert-block': 'ჩასმა {{typeName}}',
  /** Accessibility label for action to insert a block of a given type (`{{typeName}}`) */
  'inputs.portable-text.action.insert-block-aria-label': 'ჩასმა {{typeName}} (ბლოკი)',
  /** Label for action to insert an inline object of a given type (`{{typeName}}`) */
  'inputs.portable-text.action.insert-inline-object': 'ჩასმა {{typeName}}',
  /** Accessibility label for action to insert an inline object of a given type (`{{typeName}}`) */
  'inputs.portable-text.action.insert-inline-object-aria-label': 'ჩასვით {{typeName}} (ჩასმული)',
  /** Aria label for action to remove an annotation */
  'inputs.portable-text.action.remove-annotation-aria-label': 'ანოტაციის წაშლა',
  /** Label for activate on focus with context of click and not focused */
  'inputs.portable-text.activate-on-focus-message_click': 'დააჭირეთ აქტივაციისთვის',
  /** Label for activate on focus with context of click and focused */
  'inputs.portable-text.activate-on-focus-message_click-focused':
    'დააჭირეთ ან დააჭირეთ სივრცეს აქტივაციისთვის',
  /** Label for activate on focus with context of tap and not focused */
  'inputs.portable-text.activate-on-focus-message_tap': 'შეეხეთ აქტივაციისთვის',
  /** Aria label for the annotation object */
  'inputs.portable-text.annotation-aria-label': 'ანოტაციის ობიექტი',
  /** Title for dialog that allows editing an annotation */
  'inputs.portable-text.annotation-editor.title': 'რედაქტირება {{schemaType}}',
  /** Title of the default "link" annotation */
  'inputs.portable-text.annotation.link': 'ბმული',
  /** Aria label for the block object */
  'inputs.portable-text.block.aria-label': 'ბლოკის ობიექტი',
  /** Label for action to edit a block item, in the case where it is editable */
  'inputs.portable-text.block.edit': 'რედაქტირება',
  /** Accessibility label for the button that opens the actions menu on blocks */
  'inputs.portable-text.block.open-menu-aria-label': 'მენიუს გახსნა',
  /** Label for action to open a reference, in the case of block-level reference types */
  'inputs.portable-text.block.open-reference': 'გახსენით რეფერენსი',
  /** Label for action to remove a block item */
  'inputs.portable-text.block.remove': 'წაშლა',
  /** Label for action to view a block item, in the case where it is read-only and thus cannot be edited */
  'inputs.portable-text.block.view': 'ნახვა',
  /** Title of the "code" decorator */
  'inputs.portable-text.decorator.code': 'კოდი',
  /** Title of the "em" (emphasis) decorator */
  'inputs.portable-text.decorator.emphasis': 'დახრილი',
  /** Title of the "strike-through" decorator */
  'inputs.portable-text.decorator.strike-through': 'გადახაზული',
  /** Title of the "strong" decorator */
  'inputs.portable-text.decorator.strong': 'ძლიერი',
  /** Title of the "underline" decorator */
  'inputs.portable-text.decorator.underline': 'ხაზგასმული',
  /** Placeholder text for when the editor is empty */
  'inputs.portable-text.empty-placeholder': 'ცარიელი',
  /** Aria label for the block object */
  'inputs.portable-text.inline-block.aria-label': 'ჩასმული ობიექტი',
  /** Label for action to edit an inline object item */
  'inputs.portable-text.inline-object.edit': 'ობიექტის რედაქტირება',
  /** Aria label for icon for action to edit an inline object item */
  'inputs.portable-text.inline-object.edit-aria-label': 'ობიექტის რედაქტირება',
  /** Label for action to remove an inline object item */
  'inputs.portable-text.inline-object.remove': 'ობიექტის წაშლა',
  /** Aria label for icon for action to remove an inline object item */
  'inputs.portable-text.inline-object.remove-aria-label': 'ობიექტის წაშლა',
  /** Disclaimer text shown on invalid Portable Text value, when an action is available to unblock the user, but it is not guaranteed to be safe */
  'inputs.portable-text.invalid-value.action-disclaimer':
    'შენიშვნა: ზოგადად უსაფრთხოა ზემოთ მოყვანილი ქმედების შესრულება, თუმცა თუ გაქვთ ეჭვები, დაუკავშირდით იმათ, ვინც თქვენს სტუდიას კონფიგურაციაში პასუხისმგებელია.',
  /** Action presented when the Portable Text field value is invalid, when block with key `{{key}}` has a child with key `{{childKey}}` of type `{{childType}}` which is not allowed by the schema definition */
  'inputs.portable-text.invalid-value.disallowed-child-type.action': 'წაშალეთ ობიექტი',
  /** Text explaining that the Portable Text field value is invalid, when block with key `{{key}}` has a child with key `{{childKey}}` of type `{{childType}}` which is not allowed by the schema definition */
  'inputs.portable-text.invalid-value.disallowed-child-type.description':
    'ბლოკის <code>{{key}}</code> შვილი გასაღებით {{childKey}} არის ტიპის <code>{{childType}}</code>, რაც სქემის განსაზღვრებით არ არის დასაშვები.',
  /** Action presented when the Portable Text field value is invalid, when child with key `{{key}}` has a type (`{{typeName}}`) that is not an allowed block type for this field */
  'inputs.portable-text.invalid-value.disallowed-type.action': 'წაშალეთ ბლოკი',
  /** Text explaining that the Portable Text field value is invalid, when child with key `{{key}}` has a type (`{{typeName}}`) that is not an allowed block type for this field */
  'inputs.portable-text.invalid-value.disallowed-type.description':
    'ბლოკი გასაღებით <code>{{key}}</code> არის ტიპის <code>{{typeName}}</code>, რაც სქემის განსაზღვრებით არ არის დასაშვები.',
  /** Action presented when the Portable Text field value is invalid, when block with key `{{key}}` contains no children */
  'inputs.portable-text.invalid-value.empty-children.action': 'ჩასვით ცარიელი ტექსტის სპანი',
  /** Text explaining that the Portable Text field value is invalid, when block with key `{{key}}` contains no children */
  'inputs.portable-text.invalid-value.empty-children.description':
    'ტექსტის ბლოკი გასაღებით <code>{{key}}</code> არ აქვს ტექსტის სპანები.',
  /** Label for the button to ignore invalid values in the Portable Text editor */
  'inputs.portable-text.invalid-value.ignore-button.text': 'იგნორირება',
  /** Action presented when the Portable Text field value is invalid, when child with key `{{key}}` has a `_type` property that is set to `block`, but the block type defined in schema has a different name (`{{expectedTypeName}}`) */
  'inputs.portable-text.invalid-value.incorrect-block-type.action':
    'გამოიყენეთ ტიპი <code>{{expectedTypeName}}</code>',
  /** Text explaining that the Portable Text field value is invalid, when child with key `{{key}}` has a `_type` property that is set to `block`, but the block type defined in schema has a different name (`{{expectedTypeName}}`) */
  'inputs.portable-text.invalid-value.incorrect-block-type.description':
    'ბლოკი გასაღებით <code>{{key}}</code> აქვს არასწორი ტიპის სახელი. სქემის მიხედვით, ის უნდა იყოს <code>{{expectedTypeName}}</code>.',
  /** Action presented when the Portable Text field value is invalid, when block with key `{{key}}` has a span with key `{{childKey}}` that has a missing or invalid `text` property */
  'inputs.portable-text.invalid-value.invalid-span-text.action':
    'მიანიჭეთ ცარიელი ტექსტის მნიშვნელობა',
  /** Text explaining that the Portable Text field value is invalid, when block with key `{{key}}` has a span with key `{{childKey}}` that has a missing or invalid `text` property */
  'inputs.portable-text.invalid-value.invalid-span-text.description':
    'სპანი გასაღებით {{childKey}} ბლოკის <code>{{key}}</code> გასაღებით აქვს აკლია ან არასწორი <code>text</code> თვისება.',
  /** Action presented when the Portable Text field value is invalid, when child with key `{{key}}` is missing a `_type` property, but seems to be a block of type `{{expectedTypeName}}` */
  'inputs.portable-text.invalid-value.missing-block-type.action':
    'გამოიყენეთ ტიპი <code>{{expectedTypeName}}</code>',
  /** Text explaining that the Portable Text field value is invalid, when child with key `{{key}}` is missing a `_type` property, but seems to be a block of type `{{expectedTypeName}}` */
  'inputs.portable-text.invalid-value.missing-block-type.description':
    'ბლოკი გასაღებით <code>{{key}}</code> აკლია ტიპის სახელი. სქემის მიხედვით, ის უნდა იყოს <code>{{expectedTypeName}}</code>.',
  /** Action presented when the Portable Text field value is invalid, when block with key `{{key}}` has a child at `{{index}}` which is missing `_key` property */
  'inputs.portable-text.invalid-value.missing-child-key.action': 'მიანიჭეთ შემთხვევითი გასაღები',
  /** Text explaining that the Portable Text field value is invalid, when block with key `{{key}}` has a child at `{{index}}` which is missing `_key` property */
  'inputs.portable-text.invalid-value.missing-child-key.description':
    'შვილი ინდექსით <code>{{index}}</code> ბლოკის <code>{{key}}</code> გასაღებით აკლია <code>_key</code> თვისება.',
  /** Action presented when the Portable Text field value is invalid, when block with key `{{key}}` has a child with key `{{childKey}}` which is missing a `_type` property */
  'inputs.portable-text.invalid-value.missing-child-type.action': 'წაშალეთ ობიექტი',
  /** Text explaining that the Portable Text field value is invalid, when block with key `{{key}}` has a child with key `{{childKey}}` which is missing a `_type` property */
  'inputs.portable-text.invalid-value.missing-child-type.description':
    'შვილი გასაღებით {{childKey}} ბლოკის <code>{{key}}</code> გასაღებით აკლია <code>_type</code> თვისება.',
  /** Action presented when the Portable Text field value is invalid, when child at `{{index}}` is missing the required `_key` property */
  'inputs.portable-text.invalid-value.missing-key.action': 'მიანიჭეთ შემთხვევითი გასაღები',
  /** Text explaining that the Portable Text field value is invalid, when child at `{{index}}` is missing the required `_key` property */
  'inputs.portable-text.invalid-value.missing-key.description':
    'ბლოკი ინდექსით <code>{{index}}</code> აკლია საჭირო <code>_key</code> თვისება.',
  /** Action presented when the Portable Text field value is invalid, when child with key `{{key}}` has a missing or invalid `children` property */
  'inputs.portable-text.invalid-value.missing-or-invalid-children.action': 'წაშალეთ ბლოკი',
  /** Text explaining that the Portable Text field value is invalid, when child with key `{{key}}` has a missing or invalid `children` property */
  'inputs.portable-text.invalid-value.missing-or-invalid-children.description':
    'ტექსტის ბლოკი გასაღებით <code>{{key}}</code> აქვს არასწორი ან აკლია `children` თვისება.',
  /** Action presented when the Portable Text field value is invalid, when child with key `{{key}}` has a missing or invalid `markDefs` property */
  'inputs.portable-text.invalid-value.missing-or-invalid-markdefs.action': 'დაამატეთ თვისება',
  /** Text explaining that the Portable Text field value is invalid, when child with key `{{key}}` has a missing or invalid `markDefs` property */
  'inputs.portable-text.invalid-value.missing-or-invalid-markdefs.description':
    'ტექსტის ბლოკი გასაღებით <code>{{key}}</code> აქვს არასწორი ან აკლია `markDefs` თვისება.',
  /** Action presented when the Portable Text field value is invalid, when child with key `{{key}}` is missing a `_type` property  */
  'inputs.portable-text.invalid-value.missing-type.action': 'წაშალეთ ბლოკი',
  /** Text explaining that the Portable Text field value is invalid, when child with key `{{key}}` is missing a `_type` property  */
  'inputs.portable-text.invalid-value.missing-type.description':
    'ბლოკი გასაღებით <code>{{key}}</code> არ აქვს ტიპის სახელი.',
  /** Action presented when the Portable Text field value is invalid, when block with key `{{key}}` contains a non-object child at index `{{index}}` */
  'inputs.portable-text.invalid-value.non-object-child.action': 'წაშალე ელემენტი',
  /** Text explaining that the Portable Text field value is invalid, when block with key `{{key}}` contains a non-object child at index `{{index}}` */
  'inputs.portable-text.invalid-value.non-object-child.description':
    'შვილობილი ელემენტი ინდექსით <code>{{index}}</code> ბლოკში გასაღებით <code>{{key}}</code> არ არის ობიექტი.',
  /** Action presented when the Portable Text field value is invalid, when the Portable Text field is not an array, or the array is empty */
  'inputs.portable-text.invalid-value.not-an-array.action': 'განახლება მნიშვნელობის',
  /** Text explaining that the Portable Text field value is invalid, when the Portable Text field is not an array, or the array is empty */
  'inputs.portable-text.invalid-value.not-an-array.description':
    'მნიშვნელობამ უნდა იყოს Portable Text ბლოკების მასივი, ან უგუნური.',
  /** Action presented when the Portable Text field value is invalid, when child at `{{index}}` is not an object */
  'inputs.portable-text.invalid-value.not-an-object.action': 'წაშალე ელემენტი',
  /** Text explaining that the Portable Text field value is invalid, when child at `{{index}}` is not an object */
  'inputs.portable-text.invalid-value.not-an-object.description':
    'ელემენტი <code>{{index}}</code> არ არის ობიექტი,.',
  /** Action presented when the Portable Text field value is invalid, when block with key `{{key}}` contains marks (`{{orphanedMarks}}`) that are not supported by the current schema */
  'inputs.portable-text.invalid-value.orphaned-marks.action': 'წაშალე არადაშვებული ნიშნები',
  /** Text explaining that the Portable Text field value is invalid, when block with key `{{key}}` contains marks (`{{orphanedMarks}}`) that are not supported by the current schema */
  'inputs.portable-text.invalid-value.orphaned-marks.description':
    'ტექსტის ბლოკი გასაღებით <code>{{key}}</code> შეიცავს ნიშნებს <code>({{orphanedMarks, list}})</code>, რომლებიც არ არის დაშვებული სქემაში.',
  /** Title for the alert indicating that the Portable Text field has an invalid value */
  'inputs.portable-text.invalid-value.title': 'არასწორი Portable Text მნიშვნელობა',
  /** Title of "bulleted" list type */
  'inputs.portable-text.list-type.bullet': 'წერტილებიანი სია',
  /** Title of numbered list type */
  'inputs.portable-text.list-type.number': 'ნომრიანი სია',
  /** Title of the "h1" block style */
  'inputs.portable-text.style.h1': 'სათაური 1',
  /** Title of the "h2" block style */
  'inputs.portable-text.style.h2': 'სათაური 2',
  /** Title of the "h3" block style */
  'inputs.portable-text.style.h3': 'სათაური 3',
  /** Title of the "h4" block style */
  'inputs.portable-text.style.h4': 'სათაური 4',
  /** Title of the "h5" block style */
  'inputs.portable-text.style.h5': 'სათაური 5',
  /** Title of the "h6" block style */
  'inputs.portable-text.style.h6': 'სათაური 6',
  /** Title shown when multiple blocks of varying styles is selected */
  'inputs.portable-text.style.multiple': 'მრავალი',
  /** Title of fallback when no style is given for a block */
  'inputs.portable-text.style.none': 'სტილი არ არის',
  /** Title of the "normal" block style */
  'inputs.portable-text.style.normal': 'ნორმალური',
  /** Title of the "quote" block style */
  'inputs.portable-text.style.quote': 'ციტატა',
  /** Label for action to clear the current value of the reference field */
  'inputs.reference.action.clear': 'გასუფთავება',
  /** Label for action to create a new document from the reference input */
  'inputs.reference.action.create-new-document': 'შექმნა',
  /** Label for action to create a new document from the reference input, when there are multiple templates or document types to choose from */
  'inputs.reference.action.create-new-document-select': 'შექმნა…',
  /** Label for action to duplicate the current item to a new item (used within arrays) */
  'inputs.reference.action.duplicate': 'დუბლირება',
  /** Label for action that opens the referenced document in a new tab */
  'inputs.reference.action.open-in-new-tab': 'გახსნა ახალ ჩანართში',
  /** Label for action to remove the reference from an array */
  'inputs.reference.action.remove': 'წაშლა',
  /** Label for action to replace the current value of the field */
  'inputs.reference.action.replace': 'შეცვლა',
  /** Label for action to cancel a previously initiated replace action  */
  'inputs.reference.action.replace-cancel': 'შეცვლის გაუქმება',
  /** The cross-dataset reference field currently has a reference, but the feature has been disabled since it was created. This explains what can/cannot be done in its current state. */
  'inputs.reference.cross-dataset.feature-disabled-actions':
    'ამ ველის არსებული რეფერენსის წაშლა კი შეგიძლიათ, თუმცა სხვა დოკუმენტზე შეცვლა არ შეიძლება, სანამ ფუნქცია გამორთულია.',
  /** A cross-dataset reference field exists but the feature has been disabled. A <DocumentationLink> component is available. */
  'inputs.reference.cross-dataset.feature-disabled-description':
    'ეს ფუნქცია გამორთულია. წაიკითხეთ, როგორ ჩართოთ იგი <DocumentationLink>დოკუმენტაციაში</DocumentationLink>.',
  /** Title for a warning telling the user that the current project does not have the "cross dataset references" feature */
  'inputs.reference.cross-dataset.feature-unavailable-title':
    'მიუწვდომელი ფუნქცია: კროს-დატასეტის რეფერენსი',
  /** The cross-dataset reference points to a document with an invalid type  */
  'inputs.reference.cross-dataset.invalid-type':
    'რეფერენსირებული დოკუმენტი არის არასწორი ტიპის ({{typeName}}) <JsonValue/>',
  /** The referenced document will open in a new tab (due to external studio) */
  'inputs.reference.document-opens-in-new-tab': 'ეს დოკუმენტი იხსნება ახალ ჩანართში',
  /** Error title for when the document is unavailable (for any possible reason) */
  'inputs.reference.error.document-unavailable-title': 'დოკუმენტი მიუწვდომელია',
  /** Error title for when the referenced document failed to be loaded */
  'inputs.reference.error.failed-to-load-document-title':
    'რეფერენსირებული დოკუმენტის ჩატვირთვა ჩავარდა',
  /** Error title for when the reference search returned a document that is not an allowed type for the field */
  'inputs.reference.error.invalid-search-result-type-title':
    'ძებნის შედეგად მიღებულია ტიპი, რომელიც არ არის სწორი ამ რეფერენსისთვის: "{{returnedType}}"',
  /** Error description for when the document referenced is not one of the types declared as allowed target types in schema */
  'inputs.reference.error.invalid-type-description':
    'რეფერენსირებული დოკუმენტი (<code>{{documentId}}</code>) არის ტიპის <code>{{actualType}}</code>. სქემის მიხედვით, რეფერენსირებული დოკუმენტები შეიძლება იყოს მხოლოდ <AllowedTypes /> ტიპის.',
  /** Error title for when the document referenced is not one of the types declared as allowed target types in schema */
  'inputs.reference.error.invalid-type-title': 'არასწორი ტიპის დოკუმენტი',
  /** Error description for when the user does not have permissions to read the referenced document */
  'inputs.reference.error.missing-read-permissions-description':
    'რეფერენსირებულ დოკუმენტზე წვდომა შეუძლებელია არასაკმარისი უფლებების გამო',
  /** Error title for when the user does not have permissions to read the referenced document */
  'inputs.reference.error.missing-read-permissions-title': 'უფლებები არაა საკმარისი',
  /** Error description for when the current reference value points to a document that does not exist (on weak references) */
  'inputs.reference.error.nonexistent-document-description':
    'რეფერენსირებული დოკუმენტი არ არსებობს (ID: <code>{{documentId}}</code>). შეგიძლიათ წაშალოთ რეფერენსი ან შეცვალოთ სხვა დოკუმენტით.',
  /** Error title for when the current reference value points to a document that does not exist (on weak references) */
  'inputs.reference.error.nonexistent-document-title': 'ვერ მოიძებნა',
  /** Label for button that clears the reference when it points to a document that does not exist (on weak references) */
  'inputs.reference.error.nonexistent-document.clear-button-label': 'გასუფთავება',
  /** Error title for when the search for a reference failed. Note that the message sent by the backend may not be localized. */
  'inputs.reference.error.search-failed-title': 'რეფერენსის ძებნა ჩავარდა',
  /** Alternative text for the image shown in cross-dataset reference input */
  'inputs.reference.image-preview-alt-text': 'რეფერენსირებული დოკუმენტის სურათის წინასწარი ხილვა',
  /** Description for alert shown when a reference in a live-edit document is marked as being weak, the referenced document exists, AND the reference is supposed to be have been strengthened on publish */
  'inputs.reference.incomplete-reference.finalize-action-description':
    '<strong>{{referencedDocument}}</strong> გამოქვეყნდა და ეს რეფერენსი ახლა უნდა დასრულდეს.',
  /** Title for alert shown when a reference in a live-edit document is marked as being weak, the referenced document exists, AND the reference is supposed to be have been strengthened on publish */
  'inputs.reference.incomplete-reference.finalize-action-title': 'რეფერენსის დასრულება',
  /** Description for alert shown when a reference in a live-edit document points to a document that exists and has been published, but the reference is still marked as weak */
  'inputs.reference.incomplete-reference.strengthen-action-description':
    '<strong>{{referencedDocument}}</strong> გამოქვეყნდა და ეს რეფერენსი ახლა უნდა გახდეს მყარი რეფერენსი.',
  /** Title for alert shown when a reference in a live-edit document points to a document that exists and has been published, but the reference is still marked as weak */
  'inputs.reference.incomplete-reference.strengthen-action-title': 'გადაქცევა ძლიერ რეფერენსად',
  /** Label for button that triggers the action that strengthen a reference */
  'inputs.reference.incomplete-reference.strengthen-button-label': 'გადაქცევა ძლიერ რეფერენსად',
  /** Label for button that triggers a retry attempt for reference metadata  */
  'inputs.reference.metadata-error.retry-button-label': 'ხელახლა ცდა',
  /** Title for alert shown when reference metadata fails to be loaded */
  'inputs.reference.metadata-error.title': 'რეფერენსის მეტადატას ჩატვირთვა ვერ მოხერხდა',
  /** Message shown when no documents were found that matched the given search string */
  'inputs.reference.no-results-for-query':
    'შედეგები არ მოიძებნა <strong>“{{searchTerm}}”</strong>-ზე',
  /** Text for tooltip showing when a document was edited, using relative time (eg "how long ago was it edited?") */
  'inputs.reference.preview.edited-at-time': 'რედაქტირებულია <RelativeTime/>',
  /** Accessibility label for icon indicating that document does _not_ have any unpublished changes */
  'inputs.reference.preview.has-no-unpublished-changes-aria-label':
    'არაგამოცემული რედაქტირებები არ არის',
  /** Accessibility label for icon indicating that document has unpublished changes */
  'inputs.reference.preview.has-unpublished-changes-aria-label': 'რედაქტირებულია',
  /** Accessibility label for icon indicating that document does _not_ have a published version */
  'inputs.reference.preview.is-not-published-aria-label': 'არ არის გამოცემული',
  /** Accessibility label for icon indicating that document has a published version */
  'inputs.reference.preview.is-published-aria-label': 'გამოცემულია',
  /** Text for tooltip indicating that a document has no unpublished edits */
  'inputs.reference.preview.no-unpublished-edits': 'არაგამოცემული რედაქტირებები არ არის',
  /** Text for tooltip indicating that a document has not yet been published */
  'inputs.reference.preview.not-published': 'არ არის გამოცემული',
  /** Text for tooltip showing when a document was published, using relative time (eg "how long ago was it published?") */
  'inputs.reference.preview.published-at-time': 'გამოცემულია <RelativeTime/>',
  /** The referenced document no longer exist and might have been deleted (for weak references) */
  'inputs.reference.referenced-document-does-not-exist':
    'რეფერენსირებული დოკუმენტი აღარ არსებობს და შესაძლოა წაშლილი იყოს (დოკუმენტის ID: <code>{{documentId}}</code>).',
  /** The referenced document could not be displayed to the user because of insufficient permissions */
  'inputs.reference.referenced-document-insufficient-permissions':
    'რეფერენსირებულ დოკუმენტზე წვდომა შეუძლებელია არასაკმარისი უფლებების გამო',
  /** Label for when the reference input is resolving the initial value for an item */
  'inputs.reference.resolving-initial-value': 'საწყისი მნიშვნელობის გარჩევა…',
  /** Placeholder shown in a reference input with no current value */
  'inputs.reference.search-placeholder': 'დაწერეთ რაიმე ძებნისთვის',
  /** Explanation of the consequences of leaving the reference as strong instead of weak */
  'inputs.reference.strength-mismatch.is-strong-consquences':
    'რეფერენსის დოკუმენტის წაშლა შეუძლებელი იქნება ამ რეფერენსის წაშლა ან სისუსტეში გადაქცევა სანამ არ მოხდება.',
  /** Description for alert shown when a reference is supposed to be weak, but the actual value is strong */
  'inputs.reference.strength-mismatch.is-strong-description':
    'ეს რეფერენსი <em>ძლიერია</em>, თუმცა მიმდინარე სქემის თანახმად ის <em>სუსტი</em> უნდა იყოს.',
  /** Explanation of the consequences of leaving the reference as weak instead of strong */
  'inputs.reference.strength-mismatch.is-weak-consquences':
    'ეს შეუძლებს რეფერენსირებული დოკუმენტის წაშლას ამ რეფერენსის წაშლა ან გადაქცევა სისუსტეში სანამ არ მოხდება, რაც ამ ველს არარსებულ დოკუმენტს დატოვებს.',
  /** Description for alert shown when a reference is supposed to be strong, but the actual value is weak */
  'inputs.reference.strength-mismatch.is-weak-description':
    'ეს რეფერენსი <em>სუსტია</em>, თუმცა მიმდინარე სქემის თანახმად ის <em>ძლიერი</em> უნდა იყოს.',
  /** Label for button that triggers the action that strengthens a reference on strength mismatch */
  'inputs.reference.strength-mismatch.strengthen-button-label': 'გადაქცევა ძლიერ რეფერენსად',
  /** Title for alert shown when a reference is supposed to be weak/strong, but the actual value is the opposite of what it is supposed to be */
  'inputs.reference.strength-mismatch.title': 'რეფერენსის სიმტკიცის შეუსაბამოება',
  /** Label for button that triggers the action that weakens a reference on strength mismatch */
  'inputs.reference.strength-mismatch.weaken-button-label': 'გადაქცევა სუსტ რეფერენსად',
  /** Action message for generating the slug */
  'inputs.slug.action.generate': 'გენერირება',
  /** Loading message for when the input is actively generating a slug */
  'inputs.slug.action.generating': 'გენერირება…',
  /** Error message for when the source to generate a slug from is missing */
  'inputs.slug.error.missing-source': 'წყარო აკლია. შეამოწმეთ წყარო ტიპის {{schemaType}} სქემაში',
  /** Placeholder for an empty tag input */
  'inputs.tags.placeholder': 'შეიყვანეთ ტეგი და დააჭირეთ ENTER…',
  /** Placeholder for an empty tag input on touch devices */
  'inputs.tags.placeholder_touch': 'შეიყვანეთ ტეგი…',
  /** Convert to `{{targetType}}` */
  'inputs.untyped-value.convert-button.text': 'გადაყვანა {{targetType}}-ში',
  /** Encountered an object value without a <code>_type</code> property. */
  'inputs.untyped-value.description':
    'შემოწმებულია ობიექტის მნიშვნელობა <code>_type</code> თვისების გარეშე.',
  /** Either remove the <code>name</code> property of the object declaration, or set <code>_type</code> property on items. */
  'inputs.untyped-value.details.description':
    'ან წაშალეთ ობიექტის ცხრილის <code>name</code> თვისება, ან დააყენეთ <code>_type</code> თვისება ელემენტებზე.',
  /** Current value (<code>object</code>): */
  'inputs.untyped-value.details.json-dump-prefix': 'მიმდინარე მნიშვნელობა (<code>object</code>):',
  /** The following types are valid here according to schema: */
  'inputs.untyped-value.details.multi-type-description':
    'სქემის თანახმად, აქ ვალიდურია შემდეგი ტიპები:',
  /** Developer info */
  'inputs.untyped-value.details.title': 'დეველოპერის ინფო',
  /** Property value missing <code>_type</code> */
  'inputs.untyped-value.title': 'თვისების მნიშვნელობაში აკლია <code>_type</code>',
  /** Unset value */
  'inputs.untyped-value.unset-item-button.text': 'მნიშვნელობის გაუქმება',

  /** The fallback explanation if no context is provided */
  'insufficient-permissions-message.not-authorized-explanation':
    'თქვენ არ გაქვთ ნებართვა წვდომაზე ამ ფუნქციაზე.',
  /** The explanation when unable to create any document at all */
  'insufficient-permissions-message.not-authorized-explanation_create-any-document':
    'თქვენ არ გაქვთ ნებართვა დოკუმენტის შექმნაზე.',
  /** The explanation when unable to create a particular document */
  'insufficient-permissions-message.not-authorized-explanation_create-document':
    'თქვენ არ გაქვთ ნებართვა ამ დოკუმენტის შექმნაზე.',
  /** The explanation when unable to create a particular type of document */
  'insufficient-permissions-message.not-authorized-explanation_create-document-type':
    'თქვენ არ გაქვთ ნებართვა ამ ტიპის დოკუმენტის შექმნაზე.',
  /** The explanation when unable to create a new reference in a document */
  'insufficient-permissions-message.not-authorized-explanation_create-new-reference':
    'თქვენ არ გაქვთ ნებართვა ახალი რეფერენციის შექმნაზე.',
  /** The explanation when unable to delete a particular document */
  'insufficient-permissions-message.not-authorized-explanation_delete-document':
    'თქვენ არ გაქვთ ნებართვა ამ დოკუმენტის წაშლაზე.',
  /** The explanation when unable to delete a schedule on scheduled publishing */
  'insufficient-permissions-message.not-authorized-explanation_delete-schedules':
    'თქვენ არ გაქვთ გრაფიკების წაშლის უფლება.',
  /** The explanation when unable to discard changes in a particular document */
  'insufficient-permissions-message.not-authorized-explanation_discard-changes':
    'თქვენ არ გაქვთ ნებართვა ამ დოკუმენტში ცვლილებების უარყოფაზე.',
  /** The explanation when unable to duplicate a particular document */
  'insufficient-permissions-message.not-authorized-explanation_duplicate-document':
    'თქვენ არ გაქვთ ნებართვა ამ დოკუმენტის დუბლირებაზე.',
  /** The explanation when unable to edit a schedule on scheduled publishing */
  'insufficient-permissions-message.not-authorized-explanation_edit-schedules':
    'თქვენ არ გაქვთ გრაფიკების რედაქტირების უფლება.',
  /** The explanation when unable to execute a schedule on scheduled publishing */
  'insufficient-permissions-message.not-authorized-explanation_execute-schedules':
    'თქვენ არ გაქვთ გრაფიკების შესრულების უფლება.',
  /** The explanation when unable to publish a particular document */
  'insufficient-permissions-message.not-authorized-explanation_publish-document':
    'თქვენ არ გაქვთ ნებართვა ამ დოკუმენტის გამოქვეყნებაზე.',
  /** The explanation when unable to unpublish a particular document */
  'insufficient-permissions-message.not-authorized-explanation_unpublish-document':
    'თქვენ არ გაქვთ ნებართვა ამ დოკუმენტის გამოქვეყნების გაუქმებაზე.',
  /** Appears after the not-authorized message. Lists the current roles. */
  'insufficient-permissions-message.roles': 'თქვენი როლები: <Roles/>',
  /** The title for the insufficient permissions message component */
  'insufficient-permissions-message.title': 'არასაკმარისი ნებართვები',

  /** Unexpected error: `{{error}}` */
  'member-field-error.unexpected-error': 'მოულოდნელი შეცდომა: {{error}}',

  /** Button label for "Create new document" button */
  'new-document.button': 'შექმნა',
  /**
   * Tooltip message displayed when hovering/activating the "Create new document" action,
   * when there are templates/types available for creation
   */
  'new-document.create-new-document-label': 'ახალი დოკუმენტი…',
  /** Placeholder for the "filter" input within the new document menu */
  'new-document.filter-placeholder': 'ფილტრი',
  /** Loading indicator text within the new document menu */
  'new-document.loading': 'იტვირთება…',
  /** Accessibility label for the list displaying options in the new document menu */
  'new-document.new-document-aria-label': 'ახალი დოკუმენტი',
  /** Message for when there are no document type options in the new document menu */
  'new-document.no-document-types-found': 'დოკუმენტის ტიპები ვერ მოიძებნა',
  /**
   * Tooltip message displayed when hovering/activating the "Create new document" action,
   * when there are no templates/types to create from
   */
  'new-document.no-document-types-label': 'დოკუმენტის ტიპები არ არის',
  /** Message for when no results are found for a specific search query in the new document menu */
  'new-document.no-results': 'შედეგები არ მოიძებნა <strong>{{searchQuery}}</strong>-თვის',
  /** Aria label for the button that opens the "Create new document" popover/dialog */
  'new-document.open-dialog-aria-label': 'ახალი დოკუმენტის შექმნა',
  /** Title for "Create new document" dialog */
  'new-document.title': 'ახალი დოკუმენტის შექმნა',

  /** Label for button that will make the browser reload when users' studio version is out-of-date */
  'package-version.new-package-available.reload-button': 'გადატვირთვა',
  /** Title of the alert for studio users when packages in their studio are out-of-date */
  'package-version.new-package-available.title': 'Sanity Studio განახლდა',

  /** Label for action to manage members of the current studio project */
  'presence.action.manage-members': 'წევრების მართვა',
  /** Accessibility label for presence menu button */
  'presence.aria-label': 'გლობალური ყოფნა',
  /** Message description for when no one else is currently present */
  'presence.no-one-else-description': 'მოიწვიეთ ხალხი პროექტში, რომ ნახოთ მათი ონლაინ სტატუსი.',
  /** Message title for when no one else is currently present */
  'presence.no-one-else-title': 'აქ არავინ არის',
  /** Message for when a user is not in a document (displayed in the global presence menu) */
  'presence.not-in-a-document': 'არ არის დოკუმენტში',
  /** Tooltip content text for presence menu button */
  'presence.tooltip-content': 'ვინ არის აქ',

  /** Fallback title shown when a preview does not provide a title */
  'preview.default.title-fallback': 'უსათაურო',
  /** Fallback preview value for types that have "no value" (eg null, undefined) */
  'preview.fallback.no-value': '(არაფერი)',
  /** Alternative text for image being shown while image is being uploaded, in previews */
  'preview.image.file-is-being-uploaded.alt-text': 'ამ დროს იტვირთება სურათი',

  /* Relative time, just now */
  'relative-time.just-now': 'წუთის წინ',

  /** Accessibility label to open search action when the search would go fullscreen (eg on narrower screens) */
  'search.action-open-aria-label': 'ძებნის გახსნა',
  /** Action label for adding a search filter */
  'search.action.add-filter': 'ფილტრის დამატება',
  /** Action label for clearing search filters */
  'search.action.clear-filters': 'ფილტრების გასუფთავება',
  /** Label for action to clear recent searches */
  'search.action.clear-recent-searches': 'ბოლო ძებნების გასუფთავება',
  /** Accessibility label for action to clear all currently applied document type filters */
  'search.action.clear-type-filters-aria-label': 'შემოწმებული ფილტრების გასუფთავება',
  /** Label for action to clear all currently applied document type filters */
  'search.action.clear-type-filters-label': 'გასუფთავება',
  /** Accessibility label for when the search is full screen (on narrow screens) and you want to close the search */
  'search.action.close-search-aria-label': 'ძებნის დახურვა',
  /** Accessibility label for filtering by document type */
  'search.action.filter-by-document-type-aria-label': 'ფილტრი დოკუმენტის ტიპით',
  /** Accessibility action label for removing an already applied search filter */
  'search.action.remove-filter-aria-label': 'ფილტრის მოხსნა',
  /**
   * Text displayed when either no document type(s) have been selected, or we need a fallback,
   * eg "Search for all types".
   */
  'search.action.search-all-types': 'ყველა ტიპის დოკუმენტის ძებნა',
  /**
   * Text displayed when we are able to determine one or more document types that will be used for
   * searching, and can fit within the space assigned by the design.
   */
  'search.action.search-specific-types': '{{types, list}} ძებნა',
  /** Dialog title for action to select an asset of unknown type */
  'search.action.select-asset': 'აქტივის არჩევა',
  /** Dialog title for action to select a file asset */
  'search.action.select-asset_file': 'ფაილის არჩევა',
  /** Dialog title for action to select an image asset */
  'search.action.select-asset_image': 'სურათის არჩევა',
  /** Accessibility label for when the search is full screen (on narrow screens) and you want to hide filters */
  'search.action.toggle-filters-aria-label_hide': 'ფილტრების დამალვა',
  /** Accessibility label for when the search is full screen (on narrow screens) and you want to show filters */
  'search.action.toggle-filters-aria-label_show': 'ფილტრების ჩვენება',
  /** Label for when the search is full screen (on narrow screens) and you want to hide filters */
  'search.action.toggle-filters-label_hide': 'ფილტრების დამალვა',
  /** Label for when the search is full screen (on narrow screens) and you want to show filters */
  'search.action.toggle-filters-label_show': 'ფილტრების ჩვენება',
  /** Tooltip text for the global search button */
  'search.button.tooltip': 'ძებნა',
  /**
   * A list of provided types (use `list` formatter preferably).
   */
  'search.document-type-list': '{{types, list}}',
  /**
   * In the context of a list of document types - no filtering selection has been done,
   * thus the default is "all types".
   */
  'search.document-type-list-all-types': 'ყველა ტიპი',
  /** Accessibility label for list displaying the available document types */
  'search.document-types-aria-label': 'დოკუმენტის ტიპები',
  /** Label for when no document types matching the filter are found */
  'search.document-types-no-matches-found': '{{filter}}-ისთვის შესაბამისობები არ მოიძებნა',
  /** Description for error when a filter cannot be displayed, describes that you should check the schema */
  'search.error.display-filter-description':
    'ეს შესაძლოა აჩვენებდეს თქვენს სქემაში განსაზღვრულ არასწორ ვარიანტებს.',
  /** Title for error when a filter cannot be displayed (mainly a developer-oriented error) */
  'search.error.display-filter-title': 'ფილტრის ჩვენებისას წარმოიშვა შეცდომა.',
  /** Description for error when no valid asset source is found, describes that you should check the the current studio config */
  'search.error.no-valid-asset-source-check-config-description':
    'გთხოვთ, გადაამოწმეთ, რომ ის ჩართულია თქვენს სტუდიოს კონფიგურაციაში.',
  /** Description for error when no valid asset source is found, describes that only the default asset is supported */
  'search.error.no-valid-asset-source-only-default-description':
    'ამ ეტაპზე, მხოლოდ ძირითადი აქტივის წყარო მხარდაჭერილია.',
  /** Title for error when no valid asset sources found */
  'search.error.no-valid-asset-source-title': 'ვალიდური აქტივის წყაროები ვერ მოიძებნა.',
  /** Helpful description for when search returned an error that we are not able to describe in detail */
  'search.error.unspecified-error-help-description':
    'გთხოვთ, სცადეთ ხელახლა ან შეამოწმეთ თქვენი კავშირი',
  /** Title label for when search returned an error that we are not able to describe in detail */
  'search.error.unspecified-error-title': 'ძებნისას წარმოიშვა უცნობი შეცდომა',
  /**
   * Label for "All fields", a label that appears above the list of available fields when filtering.
   * If one or more document type has been chosen as filter, this label is replaced with a group of
   * fields per selected document type
   */
  'search.filter-all-fields-header': 'ყველა ველი',
  /** Label for the action of changing from one file to a different file in asset search filter */
  'search.filter-asset-change_file': 'ფაილის შეცვლა',
  /** Label for the action of changing from one image to a different image in asset search filter */
  'search.filter-asset-change_image': 'სურათის შეცვლა',
  /** Label for the action of clearing the currently selected asset in an image/file filter */
  'search.filter-asset-clear': 'გასუფთავება',
  /** Label for the action of selecting a file in asset search filter */
  'search.filter-asset-select_file': 'ფაილის არჩევა',
  /** Label for the action of selecting an image in asset search filter */
  'search.filter-asset-select_image': 'სურათის არჩევა',
  /** Label for boolean filter - false */
  'search.filter-boolean-false': 'მცდარი',
  /** Label for boolean filter - true */
  'search.filter-boolean-true': 'მართალი',
  /** Accessibility label for list that lets you filter fields by title, when adding a new filter in search */
  'search.filter-by-title-aria-label': 'ფილტრი სათაურით',
  /** Accessibility label for date filter input */
  'search.filter-date-aria-label': 'თარიღი',
  /** Accessibility label for selecting end date on the date range search filter */
  'search.filter-date-range-end-date-aria-label': 'დასასრული თარიღი',
  /** Accessibility label for selecting start date on the date range search filter */
  'search.filter-date-range-start-date-aria-label': 'დაწყების თარიღი',
  /**
   * Label for "Days"/"Months"/"Years" when selecting it as unit in "X days ago" search filter.
   * Capitalized, as it would be listed in a dropdown.
   */
  'search.filter-date-unit_days': 'დღეები',
  'search.filter-date-unit_months': 'თვეები',
  'search.filter-date-unit_years': 'წლები',
  /** Accessibility label for selecting the unit (day/month/year) when adding "X days ago" search filter */
  'search.filter-date-unit-aria-label': 'აირჩიეთ ერთეული',
  /** Accessibility label for the input value (days/months/years) when adding "X days ago" search filter */
  'search.filter-date-value-aria-label': 'ერთეულის მნიშვნელობა',
  /** Label for "field description" shown in tooltip when navigating list of possible fields to filter */
  'search.filter-field-tooltip-description': 'ველის აღწერა',
  /** Label for "field name" shown in tooltip when navigating list of possible fields to filter */
  'search.filter-field-tooltip-name': 'ველის სახელი',
  /** Label for "Used in document types", a list of the document types a field appears in. Shown in tooltip when navigating list of possible fields to filter */
  'search.filter-field-tooltip-used-in-document-types': 'გამოყენებულია დოკუმენტის ტიპებში',
  /** Label for when no fields/filters are found for the given term */
  'search.filter-no-matches-found': 'არ მოიძებნა დამთხვევები {{filter}}-თვის',
  /** Placeholder value for maximum numeric value filter */
  'search.filter-number-max-value-placeholder': 'მაქსიმუმი მნიშვნელობა',
  /** Placeholder value for minimum numeric value filter */
  'search.filter-number-min-value-placeholder': 'მინიმუმი მნიშვნელობა',
  /** Placeholder value for the number filter */
  'search.filter-number-value-placeholder': 'მნიშვნელობა',
  /** Placeholder for the "Filter" input, when narrowing possible fields/filters */
  'search.filter-placeholder': 'ფილტრი',
  /** Label for the action of clearing the currently selected document in a reference filter */
  'search.filter-reference-clear': 'გასუფთავება',
  /**
   * Label for "shared fields", a label that appears above a list of fields that all filtered types
   * have in common, when adding a new filter. For instance, if "book" and "employee" both have a
   * "title" field, this field would be listed under "shared fields".
   * */
  'search.filter-shared-fields-header': 'საერთო ველები',
  /** Placeholder value for the string filter */
  'search.filter-string-value-placeholder': 'მნიშვნელობა',
  /** Label/placeholder prompting user to select one of the predefined, allowed values for a string field */
  'search.filter-string-value-select-predefined-value': 'აირჩიეთ...',
  /** Accessibility label for the "Filters" list, that is shown when using "Add filter" in search (singular) */
  'search.filters-aria-label_one': 'ფილტრი',
  /** Accessibility label for the "Filters" list, that is shown when using "Add filter" in search (plural) */
  'search.filters-aria-label_other': 'ფილტრები',
  /** Label for instructions on how to use the search - displayed when no recent searches are available */
  'search.instructions': '<ControlsIcon/>-ის გამოყენებით დააზუსტეთ ძიება',
  /** Helpful description for when no search results are found */
  'search.no-results-help-description': 'სცადეთ სხვა სიტყვა ან შეცვალეთ ფილტრები',
  /** Title label for when no search results are found */
  'search.no-results-title': 'შედეგები ვერ მოიძებნა',
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
    '<Field/> <Operator>აქვს</Operator> <Value>{{count}} ერთეული</Value>',
  'search.operator.array-count-equal.description_other':
    '<Field/> <Operator>აქვს</Operator> <Value>{{count}} ერთეული</Value>',
  'search.operator.array-count-equal.name': 'რაოდენობა არის',
  /* Array should have a count greater than given filter value */
  'search.operator.array-count-gt.description_one':
    '<Field/> <Operator>აქვს ></Operator> <Value>{{count}} ერთეული</Value>',
  'search.operator.array-count-gt.description_other':
    '<Field/> <Operator>აქვს ></Operator> <Value>{{count}} ერთეული</Value>',
  'search.operator.array-count-gt.name': 'რაოდენობა მეტია',
  /* Array should have a count greater than or equal to the given filter value */
  'search.operator.array-count-gte.description_one':
    '<Field/> <Operator>აქვს ≥</Operator> <Value>{{count}} ერთეული</Value>',
  'search.operator.array-count-gte.description_other':
    '<Field/> <Operator>აქვს ≥</Operator> <Value>{{count}} ერთეული</Value>',
  'search.operator.array-count-gte.name': 'რაოდენობა მეტია ან ტოლი',
  /* Array should have a count less than given filter value */
  'search.operator.array-count-lt.description_one':
    '<Field/> <Operator>აქვს <</Operator> <Value>{{count}} ერთეული</Value>',
  'search.operator.array-count-lt.description_other':
    '<Field/> <Operator>აქვს <</Operator> <Value>{{count}} ერთეული</Value>',
  'search.operator.array-count-lt.name': 'რაოდენობა ნაკლებია',
  /* Array should have a count less than or equal to the given filter value */
  'search.operator.array-count-lte.description_one':
    '<Field/> <Operator>აქვს ≤</Operator> <Value>{{count}} ერთეული</Value>',
  'search.operator.array-count-lte.description_other':
    '<Field/> <Operator>აქვს ≤</Operator> <Value>{{count}} ერთეული</Value>',
  'search.operator.array-count-lte.name': 'რაოდენობა ნაკლებია ან ტოლი',
  /* Array should have a count that is not equal to the given filter value */
  'search.operator.array-count-not-equal.description_one':
    '<Field/> <Operator>არ აქვს</Operator> <Value>{{count}} ერთეული</Value>',
  'search.operator.array-count-not-equal.description_other':
    '<Field/> <Operator>არ აქვს</Operator> <Value>{{count}} ერთეული</Value>',
  'search.operator.array-count-not-equal.name': 'რაოდენობა არ არის',
  /**
   * Array should have a count within the range of given filter values.
   * Gets passed `{{from}}` and `{{to}}` values.
   **/
  'search.operator.array-count-range.description':
    '<Field/> <Operator>შეიცავს</Operator> <Value>{{from}} → {{to}} ერთეულს</Value>',
  'search.operator.array-count-range.name': 'რაოდენობა შედის შუალედში',
  /* Array should include the given value */
  'search.operator.array-list-includes.description':
    '<Field/> <Operator>შეიცავს</Operator> <Value>{{value}}</Value>',
  'search.operator.array-list-includes.name': 'შეიცავს',
  /* Array should not include the given value */
  'search.operator.array-list-not-includes.description':
    '<Field/> <Operator>არ შეიცავს</Operator> <Value>{{value}}</Value>',
  'search.operator.array-list-not-includes.name': 'არ შეიცავს',
  /* Array should include the given reference */
  'search.operator.array-reference-includes.description':
    '<Field/> <Operator>შეიცავს</Operator> <Value>{{value}}</Value>',
  'search.operator.array-reference-includes.name': 'შეიცავს',
  /* Array should not include the given reference */
  'search.operator.array-reference-not-includes.description':
    '<Field/> <Operator>არ შეიცავს</Operator> <Value>{{value}}</Value>',
  'search.operator.array-reference-not-includes.name': 'არ შეიცავს',
  /* Asset (file) should be the selected asset */
  'search.operator.asset-file-equal.description':
    '<Field/> <Operator>არის</Operator> <Value>{{value}}</Value>',
  'search.operator.asset-file-equal.name': 'არის',
  /* Asset (file) should not be the selected asset */
  'search.operator.asset-file-not-equal.description':
    '<Field/> <Operator>არ არის</Operator> <Value>{{value}}</Value>',
  'search.operator.asset-file-not-equal.name': 'არ არის',
  /* Asset (image) should be the selected asset */
  'search.operator.asset-image-equal.description':
    '<Field/> <Operator>არის</Operator> <Value>{{value}}</Value>',
  'search.operator.asset-image-equal.name': 'არის',
  /* Asset (image) should not be the selected asset */
  'search.operator.asset-image-not-equal.description':
    '<Field/> <Operator>არ არის</Operator> <Value>{{value}}</Value>',
  'search.operator.asset-image-not-equal.name': 'არ არის',
  /**
   * Boolean value should be the given filter value (true/false).
   * Context passed is `true` and `false`, allowing for more specific translations:
   * - `search.operator.boolean-equal.description_true`
   * - `search.operator.boolean-equal.description_false`
   */
  'search.operator.boolean-equal.description':
    '<Field/> <Operator>არის</Operator> <Value>{{value}}</Value>',
  'search.operator.boolean-equal.name': 'არის',
  /* Date should be after (later than) given filter value */
  'search.operator.date-after.description':
    '<Field/> <Operator>არის შემდეგ</Operator> <Value>{{value}}</Value>',
  'search.operator.date-after.name': 'შემდეგ',
  /* Date should be before (earlier than) given filter value */
  'search.operator.date-before.description':
    '<Field/> <Operator>არის უკან</Operator> <Value>{{value}}</Value>',
  'search.operator.date-before.name': 'უფრო ადრე',
  /* Date should be the given filter value */
  'search.operator.date-equal.description':
    '<Field/> <Operator>არის</Operator> <Value>{{value}}</Value>',
  'search.operator.date-equal.name': 'არის',
  /* Date should be within the given filter value range (eg "within the last X days") */
  'search.operator.date-last.description':
    '<Field/> <Operator>არის ბოლო</Operator> <Value>{{value}}</Value> დღეებში',
  'search.operator.date-last.name': 'ბოლო',
  /* Date should not be the given filter value */
  'search.operator.date-not-equal.description':
    '<Field/> <Operator>არ არის</Operator> <Value>{{value}}</Value>',
  'search.operator.date-not-equal.name': 'არ არის',
  /* Date should be within the range of given filter values */
  'search.operator.date-range.description': '<Field/> <Operator>არის შუალედში</Operator> <Value/>',
  'search.operator.date-range.name': 'არის შუალედში',
  /* Date and time should be after (later than) given filter value */
  'search.operator.date-time-after.description':
    '<Field/> <Operator>არის შემდეგ</Operator> <Value>{{value}}</Value>',
  'search.operator.date-time-after.name': 'შემდეგ',
  /* Date and time should be before (earlier than) given filter value */
  'search.operator.date-time-before.description':
    '<Field/> <Operator>არის ადრე</Operator> <Value>{{value}}</Value>',
  'search.operator.date-time-before.name': 'უფრო ადრე',
  /* Date and time should be the given filter value */
  'search.operator.date-time-equal.description':
    '<Field/> <Operator>არის</Operator> <Value>{{value}}</Value>',
  'search.operator.date-time-equal.name': 'არის',
  /* Date and time should be within the given filter value range (eg "within the last X days") */
  'search.operator.date-time-last.description':
    '<Field/> <Operator>არის ბოლო</Operator> <Value>{{value}}</Value> დღეებში',
  'search.operator.date-time-last.name': 'ბოლო',
  /* Date and time should not be the given filter value */
  'search.operator.date-time-not-equal.description':
    '<Field/> <Operator>არ არის</Operator> <Value>{{value}}</Value>',
  'search.operator.date-time-not-equal.name': 'არ არის',
  /* Date and time should be within the range of given filter values */
  'search.operator.date-time-range.description':
    '<Field/> <Operator>არის შუალედში</Operator> <Value/>',
  'search.operator.date-time-range.name': 'არის შუალედში',
  /* Value should be defined */
  'search.operator.defined.description':
    '<Field/> <Operator>არის</Operator> <Value>არაცარიელი</Value>',
  'search.operator.defined.name': 'არაცარიელი',
  /* Value should not be defined */
  'search.operator.not-defined.description':
    '<Field/> <Operator>არის</Operator> <Value>ცარიელი</Value>',
  'search.operator.not-defined.name': 'ცარიელი',
  /* Number should be the given filter value */
  'search.operator.number-equal.description':
    '<Field/> <Operator>არის</Operator> <Value>{{value}}</Value>',
  'search.operator.number-equal.name': 'არის',
  /* Number should be greater than given filter value */
  'search.operator.number-gt.description':
    '<Field/> <Operator>></Operator> <Value>{{value}}</Value>',
  'search.operator.number-gt.name': 'მეტია',
  /* Number should be greater than or the given filter value */
  'search.operator.number-gte.description':
    '<Field/> <Operator>≥</Operator> <Value>{{value}}</Value>',
  'search.operator.number-gte.name': 'მეტია ან ტოლია',
  /* Number should be less than given filter value */
  'search.operator.number-lt.description':
    '<Field/> <Operator><</Operator> <Value>{{value}}</Value>',
  'search.operator.number-lt.name': 'ნაკლებია',
  /* Number should be less than or the given filter value */
  'search.operator.number-lte.description':
    '<Field/> <Operator>≤</Operator> <Value>{{value}}</Value>',
  'search.operator.number-lte.name': 'ნაკლებია ან ტოლია',
  /* Number should not be the given filter value */
  'search.operator.number-not-equal.description':
    '<Field/> <Operator>არ არის</Operator> <Value>{{value}}</Value>',
  'search.operator.number-not-equal.name': 'არ არის',
  /* Number should be within the range of given filter values */
  'search.operator.number-range.description':
    '<Field/> <Operator>არის შუალედში</Operator> <Value>{{from}} → {{to}}</Value>',
  'search.operator.number-range.name': 'არის შუალედში',
  /* Portable Text should contain the given filter value */
  'search.operator.portable-text-contains.description':
    '<Field/> <Operator>შეიცავს</Operator> <Value>{{value}}</Value>',
  'search.operator.portable-text-contains.name': 'შეიცავს',
  /* Portable Text should be the given filter value */
  'search.operator.portable-text-equal.description':
    '<Field/> <Operator>არის</Operator> <Value>{{value}}</Value>',
  'search.operator.portable-text-equal.name': 'არის',
  /* Portable Text should not contain the given filter value */
  'search.operator.portable-text-not-contains.description':
    '<Field/> <Operator>არ შეიცავს</Operator> <Value>{{value}}</Value>',
  'search.operator.portable-text-not-contains.name': 'არ შეიცავს',
  /* Portable Text should not be the given filter value */
  'search.operator.portable-text-not-equal.description':
    '<Field/> <Operator>არ არის</Operator> <Value>{{value}}</Value>',
  'search.operator.portable-text-not-equal.name': 'არ არის',
  /* References the given asset (file) */
  'search.operator.reference-asset-file.description':
    '<Field/> <Operator>→</Operator> <Value>{{value}}</Value>',
  'search.operator.reference-asset-file.name': 'ფაილი',
  /* References the given asset (image) */
  'search.operator.reference-asset-image.description':
    '<Field/> <Operator>→</Operator> <Value>{{value}}</Value>',
  'search.operator.reference-asset-image.name': 'სურათი',
  /* References the given document */
  'search.operator.reference-document.description':
    '<Field/> <Operator>→</Operator> <Value>{{value}}</Value>',
  'search.operator.reference-document.name': 'დოკუმენტი',
  /* Reference should be the given document */
  'search.operator.reference-equal.description':
    '<Field/> <Operator>არის</Operator> <Value>{{value}}</Value>',
  'search.operator.reference-equal.name': 'არის',
  /* Reference should not be the given document */
  'search.operator.reference-not-equal.description':
    '<Field/> <Operator>არ არის</Operator> <Value>{{value}}</Value>',
  'search.operator.reference-not-equal.name': 'არ არის',
  /* Slug contains the given value */
  'search.operator.slug-contains.description':
    '<Field/> <Operator>შეიცავს</Operator> <Value>{{value}}</Value>',
  'search.operator.slug-contains.name': 'შეიცავს',
  /* Slug equals the given filter value */
  'search.operator.slug-equal.description':
    '<Field/> <Operator>არის</Operator> <Value>{{value}}</Value>',
  'search.operator.slug-equal.name': 'არის',
  /* Slug does not contain the given value */
  'search.operator.slug-not-contains.description':
    '<Field/> <Operator>არ შეიცავს</Operator> <Value>{{value}}</Value>',
  'search.operator.slug-not-contains.name': 'არ შეიცავს',
  /* Slug does not equal the given filter value */
  'search.operator.slug-not-equal.description':
    '<Field/> <Operator>არ არის</Operator> <Value>{{value}}</Value>',
  'search.operator.slug-not-equal.name': 'არ არის',
  /* String contains the given filter value */
  'search.operator.string-contains.description':
    '<Field/> <Operator>შეიცავს</Operator> <Value>{{value}}</Value>',
  'search.operator.string-contains.name': 'შეიცავს',
  /* String equals the given filter value */
  'search.operator.string-equal.description':
    '<Field/> <Operator>არის</Operator> <Value>{{value}}</Value>',
  'search.operator.string-equal.name': 'არის',
  /* String equals one of the predefined allowed values */
  'search.operator.string-list-equal.description':
    '<Field/> <Operator>არის</Operator> <Value>{{value}}</Value>',
  'search.operator.string-list-equal.name': 'არის',
  /* String does not equal one of the predefined allowed values */
  'search.operator.string-list-not-equal.description':
    '<Field/> <Operator>არ არის</Operator> <Value>{{value}}</Value>',
  'search.operator.string-list-not-equal.name': 'არ არის',
  /* String does not contain the given filter value */
  'search.operator.string-not-contains.description':
    '<Field/> <Operator>არ შეიცავს</Operator> <Value>{{value}}</Value>',
  'search.operator.string-not-contains.name': 'არ შეიცავს',
  /* String does not equal the given filter value */
  'search.operator.string-not-equal.description':
    '<Field/> <Operator>არ არის</Operator> <Value>{{value}}</Value>',
  'search.operator.string-not-equal.name': 'არ არის',
  /** Label for the "Best match" search ordering type */
  'search.ordering.best-match-label': 'საუკეთესო დამთხვევა',
  /** Label for the "Created: Oldest first" search ordering type */
  'search.ordering.created-ascending-label': 'შეიქმნა: ძველები ჯერ',
  /** Label for the "Created: Newest first" search ordering type */
  'search.ordering.created-descending-label': 'შეიქმნა: უახლესი ჯერ',
  /** Label for the "Updated: Oldest first" search ordering type */
  'search.ordering.updated-ascending-label': 'განახლდა: ძველები ჯერ',
  /** Label for the "Updated: Newest first" search ordering type */
  'search.ordering.updated-descending-label': 'განახლდა: უახლესი ჯერ',
  /** Placeholder text for the global search input field */
  'search.placeholder': 'ძიება',
  /** Accessibility label for the recent searches section, shown when no valid search terms has been given */
  'search.recent-searches-aria-label': 'ბოლო ძიებები',
  /** Label/heading shown for the recent searches section */
  'search.recent-searches-label': 'ბოლო ძიებები',
  /** Accessibility label for the search results section, shown when the user has typed valid terms */
  'search.search-results-aria-label': 'ძიების შედეგები',

  /** Label for the edit columns button to change field visibility in sheet list */
  'sheet-list.edit-columns': 'სვეტების რედაქტირება',
  /** Label for the header menu option to hide a field from the sheet list */
  'sheet-list.hide-field': 'მაგიდიდან ამოშლა',
  /** Label for reset column visibilities button */
  'sheet-list.reset-columns': 'სვეტების აღდგენა',
  /** Title for the edit columns menu */
  'sheet-list.select-fields': 'აირჩიეთ მაქსიმუმ 5 ველის ტიპი',

  /** Accessibility label for the navbar status button */
  'status-button.aria-label': 'კონფიგურაციის სტატუსი',

  /** Description for error when the timeline for the given document can't be loaded */
  'timeline.error.load-document-changes-description':
    'დოკუმენტის ისტორიის ტრანზაქციები არ შეიცვალა.',
  /** Title for error when the timeline for the given document can't be loaded */
  'timeline.error.load-document-changes-title':
    'დოკუმენტის ცვლილებების მიღებისას წარმოიშვა შეცდომა.',
  /** Error description for when the document doesn't have history */
  'timeline.error.no-document-history-description':
    'დოკუმენტის შინაარსის შეცვლისას, დოკუმენტის ვერსიები გამოჩნდება ამ მენიუში.',
  /** Error title for when the document doesn't have history */
  'timeline.error.no-document-history-title': 'დოკუმენტის ისტორია არ არის',
  /** Error prompt when revision cannot be loaded */
  'timeline.error.unable-to-load-revision': 'ვერ მიმართავს რევიზიას',
  /** Label for when the timeline item is the latest in the history */
  'timeline.latest': 'უახლესი',
  /** Label for latest revision for timeline menu dropdown */
  'timeline.latest-revision': 'უახლესი რევიზია',
  /**
   * Label for latest revision for timeline menu dropdown
   * @deprecated as of `v3.47.0` `timeline.latest-revision` should be used instead. Note: _usage_ of this key is deprecated, but Studios on `< v3.47.0` still require this key to be _defined_
   * */
  'timeline.latest-version': 'უახლესი ვერსია',
  /** The aria-label for the list of revisions in the timeline */
  'timeline.list.aria-label': 'დოკუმენტის რევიზიები',
  /** Label for loading history */
  'timeline.loading-history': 'ისტორიის ჩატვირთვა…',
  /** Label shown in review changes timeline when a document has been created */
  'timeline.operation.created': 'შეიქმნა',
  /** Label shown in review changes timeline when a document has been created, with a timestamp */
  'timeline.operation.created_timestamp': 'შეიქმნა: {{timestamp, datetime}}',
  /** Label shown in review changes timeline when a document was initially created */
  'timeline.operation.created-initial': 'შეიქმნა',
  /** Label shown in review changes timeline when a document was initially created, with a timestamp */
  'timeline.operation.created-initial_timestamp': 'შეიქმნა: {{timestamp, datetime}}',
  /** Label shown in review changes timeline when a document has been deleted */
  'timeline.operation.deleted': 'წაშლილია',
  /** Label shown in review changes timeline when a document has been deleted, with a timestamp */
  'timeline.operation.deleted_timestamp': 'წაშლილია: {{timestamp, datetime}}',
  /** Label shown in review changes timeline when a draft has been discarded */
  'timeline.operation.draft-discarded': 'დრაფტი უარყოფილია',
  /** Label shown in review changes timeline when a draft has been discarded, with a timestamp */
  'timeline.operation.draft-discarded_timestamp': 'დრაფტი უარყოფილია: {{timestamp, datetime}}',
  /** Label shown in review changes timeline when a draft has been edited */
  'timeline.operation.edited-draft': 'რედაქტირებულია',
  /** Label shown in review changes timeline when a draft has been edited, with a timestamp */
  'timeline.operation.edited-draft_timestamp': 'რედაქტირებულია: {{timestamp, datetime}}',
  /** Label shown in review changes timeline when a document has been edited live */
  'timeline.operation.edited-live': 'პირდაპირ რედაქტირებულია',
  /** Label shown in review changes timeline when a document has been edited live, with a timestamp */
  'timeline.operation.edited-live_timestamp': 'პირდაპირ რედაქტირებულია: {{timestamp, datetime}}',
  /** Label shown in review changes timeline when a document was published */
  'timeline.operation.published': 'გამოქვეყნებულია',
  /** Label shown in review changes timeline when a document was published, with a timestamp */
  'timeline.operation.published_timestamp': 'გამოქვეყნებულია: {{timestamp, datetime}}',
  /** Label shown in review changes timeline when a document was unpublished */
  'timeline.operation.unpublished': 'გამოქვეყნება შეწყვიტებულია',
  /** Label shown in review changes timeline when a document was unpublished, with a timestamp */
  'timeline.operation.unpublished_timestamp': 'გამოქვეყნება შეწყვიტებულია: {{timestamp, datetime}}',
  /**
   * Label for determining since which version the changes for timeline menu dropdown are showing.
   * Receives the time label as a parameter (`timestamp`).
   */
  'timeline.since': 'დან: {{timestamp, datetime}}',
  /** Label for missing change version for timeline menu dropdown are showing */
  'timeline.since-version-missing': 'დან: უცნობი ვერსია',

  /** Aria label for the action buttons in the PTE toolbar */
  'toolbar.portable-text.action-button-aria-label': '{{action}}',

  /** Accessibility label for the breadcrumb menu */
  'tree-editing-dialog.breadcrumbs.menu': 'ნავიგაციის მენიუ',
  /** Title placeholder for search input in array of objects */
  'tree-editing-dialog.search-placeholder': 'ძებნა',
  /** Menu aria label for the search menu */
  'tree-editing-dialog.search.menu-label': 'ძებნის მენიუ',
  /** Title label for when no search results are found on the tree of objects */
  'tree-editing-dialog.search.no-results-title': 'შედეგები ვერ მოიძებნა',
  /** Label to close the sidebar */
  'tree-editing-dialog.sidebar.action.close': 'გვერდითი ზოლის დახურვა',
  /** Collapse label the menu item in the sidebar  */
  'tree-editing-dialog.sidebar.action.collapse': 'შეკუმშვა',
  /** Label to close the dialog */
  'tree-editing-dialog.sidebar.action.done': 'დასრულებულია',
  /** Exapnd label the menu item in the sidebar  */
  'tree-editing-dialog.sidebar.action.expand': 'გაშლა',
  /** Label to open the sidebar */
  'tree-editing-dialog.sidebar.action.open': 'გვერდითი ზოლის გახსნა',

  /** Label for button showing the free trial days left */
  'user-menu.action.free-trial_one': '{{count}} დღე დარჩენილია ცდუნებრივი ვერსიიდან',
  'user-menu.action.free-trial_other': '{{count}} დღე დარჩენილია ცდუნებრივი ვერსიიდან',
  /** Label for the button showed after trial ended */
  'user-menu.action.free-trial-finished': 'გადასვლა უფასოდ პრემიუმზე',
  /** Label for action to invite members to the current sanity project */
  'user-menu.action.invite-members': 'წევრების მოწვევა',
  /** Accessibility label for action to invite members to the current sanity project */
  'user-menu.action.invite-members-aria-label': 'წევრების მოწვევა',
  /** Label for action to manage the current sanity project */
  'user-menu.action.manage-project': 'პროექტის მართვა',
  /** Accessibility label for the action to manage the current project */
  'user-menu.action.manage-project-aria-label': 'პროექტის მართვა',
  /** Tooltip helper text when portable text annotation is disabled for empty block*/
  'user-menu.action.portable-text.annotation-disabled_empty-block':
    'ვერ გამოიყენება {{name}} ცარიელ ბლოკზე',
  /** Tooltip helper text when portable text annotation is disabled for multiple blocks */
  'user-menu.action.portable-text.annotation-disabled_multiple-blocks':
    'ვერ გამოიყენება {{name}} მრავალ ბლოკზე',
  /** Label for action to sign out of the current sanity project */
  'user-menu.action.sign-out': 'გამოსვლა',
  /** Title for appearance section for the current studio (dark / light / system scheme) */
  'user-menu.appearance-title': 'გარეგნობა',
  /** Label for close menu button for user menu */
  'user-menu.close-menu': 'დახურე მენიუ',
  /** Description for using the "dark theme" in the appearance user menu */
  'user-menu.color-scheme.dark-description': 'გამოიყენე მუქი გარეგნობა',
  /** Title for using the "dark theme" in the appearance user menu */
  'user-menu.color-scheme.dark-title': 'მუქი',
  /** Description for using the "light theme" in the appearance user menu */
  'user-menu.color-scheme.light-description': 'გამოიყენე ღია გარეგნობა',
  /** Title for using the "light theme" in the appearance user menu */
  'user-menu.color-scheme.light-title': 'ღია',
  /** Description for using "system apparence" in the appearance user menu */
  'user-menu.color-scheme.system-description': 'გამოიყენე სისტემის გარეგნობა',
  /** Title for using system apparence in the appearance user menu */
  'user-menu.color-scheme.system-title': 'სისტემა',
  /** Title for locale section for the current studio */
  'user-menu.locale-title': 'ენა',
  /** Label for tooltip to show which provider the currently logged in user is using */
  'user-menu.login-provider': 'შესული {{providerTitle}}-ით',
  /** Label for open menu button for user menu */
  'user-menu.open-menu': 'გახსენი მენიუ',

  /**
   * Label for action to add a workspace (currently a developer-oriented action, as this will
   * lead to the documentation on workspace configuration)
   */
  'workspaces.action.add-workspace': 'დაამატე სამუშაო სივრცე',
  /**
   * Label for action to choose a different workspace, in the case where you are not logged in,
   * have selected a workspace, and are faced with the authentication options for the selected
   * workspace. In other words, label for the action shown when you have reconsidered which
   * workspace to authenticate in.
   */
  'workspaces.action.choose-another-workspace': 'აირჩიე სხვა სამუშაო სივრცე',
  /** Label for heading that indicates that you can choose your workspace */
  'workspaces.choose-your-workspace-label': 'აირჩიე შენი სამუშაო სივრცე',
  /** Label for the workspace menu */
  'workspaces.select-workspace-aria-label': 'აირჩიე სამუშაო სივრცე',
  /** Button label for opening the workspace switcher */
  'workspaces.select-workspace-label': 'აირჩიე სამუშაო სივრცე',
  /** Tooltip for the workspace menu */
  'workspaces.select-workspace-tooltip': 'აირჩიე სამუშაო სივრცე',
  /** Title for Workplaces dropdown menu */
  'workspaces.title': 'სამუშაო სივრცეები',
})
