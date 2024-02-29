import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Menu item for deleting the asset */
  'asset-source.asset-list.menu.delete': 'ลบ',
  /** Menu item for showing where a particular asset is used */
  'asset-source.asset-list.menu.show-usage': 'แสดงการใช้งาน',
  /** Header in usage dialog for file assets */
  'asset-source.asset-usage-dialog.header_file': 'เอกสารที่ใช้ไฟล์',
  /** Header in usage dialog for image assets */
  'asset-source.asset-usage-dialog.header_image': 'เอกสารที่ใช้รูปภาพ',
  /** Text shown in usage dialog when loading documents using the selected asset */
  'asset-source.asset-usage-dialog.loading': 'กำลังโหลด…',
  /** Text for cancel action in delete-asset dialog */
  'asset-source.delete-dialog.action.cancel': 'ยกเลิก',
  /** Text for "confirm delete" action in delete-asset dialog */
  'asset-source.delete-dialog.action.delete': 'ลบ',
  /** Dialog header for delete-asset dialog when deleting a file */
  'asset-source.delete-dialog.header_file': 'ลบไฟล์',
  /** Dialog header for delete-asset dialog when deleting an image */
  'asset-source.delete-dialog.header_image': 'ลบรูปภาพ',
  /** Text shown in delete dialog when loading documents using the selected asset */
  'asset-source.delete-dialog.loading': 'กำลังโหลด…',
  /** Message confirming to delete *named* file */
  'asset-source.delete-dialog.usage-list.confirm-delete-file_named':
    'คุณกำลังจะลบไฟล์ <strong>{{filename}}}</strong> และข้อมูลเมตาของมัน คุณแน่ใจหรือไม่?',
  /** Message confirming to delete *unnamed* file */
  'asset-source.delete-dialog.usage-list.confirm-delete-file_unnamed':
    'คุณกำลังจะลบไฟล์และข้อมูลเมตาของมัน คุณแน่ใจหรือไม่?',
  /** Message confirming to delete *named* image */
  'asset-source.delete-dialog.usage-list.confirm-delete-image_named':
    'คุณกำลังจะลบรูปภาพ <strong>{{filename}}</strong> และข้อมูลเมตาของมัน คุณแน่ใจหรือไม่?',
  /** Message confirming to delete *unnamed* image */
  'asset-source.delete-dialog.usage-list.confirm-delete-image_unnamed':
    'คุณกำลังจะลบรูปภาพและข้อมูลเมตาของมัน คุณแน่ใจหรือไม่?',
  /** Alt text showing on image preview in delete asset dialog  */
  'asset-source.delete-dialog.usage-list.image-preview-alt': 'ตัวอย่างภาพ',
  /** Warning message showing when *named* file can't be deleted because it is in use */
  'asset-source.delete-dialog.usage-list.warning-file-is-in-use_named':
    '{{filename}} ไม่สามารถลบได้เพราะกำลังถูกใช้งาน ในการลบไฟล์นี้ คุณต้องลบการใช้งานทั้งหมดของมันก่อน',
  /** Warning message showing when *unnamed* file can't be deleted because it is in use */
  'asset-source.delete-dialog.usage-list.warning-file-is-in-use_unnamed':
    'ไฟล์นี้ไม่สามารถลบได้เพราะกำลังถูกใช้งาน ในการลบมัน คุณต้องลบการใช้งานทั้งหมดของมันก่อน',
  /** Warning message showing when *named* image can't be deleted because it is in use */
  'asset-source.delete-dialog.usage-list.warning-image-is-in-use_named':
    '{{filename}} ไม่สามารถลบได้เพราะกำลังถูกใช้งาน ในการลบรูปภาพนี้ คุณต้องลบการใช้งานทั้งหมดของมันก่อน',
  /** Warning message showing when *unnamed* image can't be deleted because it is in use */
  'asset-source.delete-dialog.usage-list.warning-image-is-in-use_unnamed':
    'รูปภาพนี้ไม่สามารถลบได้เพราะกำลังถูกใช้งาน ในการลบมัน คุณต้องลบการใช้งานทั้งหมดของมันก่อน',
  /** Text shown when the list of assets only include a specific set of types */
  'asset-source.dialog.accept-message':
    'แสดงเฉพาะสินทรัพย์ของประเภทที่ยอมรับ: <strong>{{acceptTypes}}</strong>',
  /** Keys shared between both image asset source and file asset source */
  /** Select asset dialog title for files */
  'asset-source.dialog.default-title_file': 'เลือกไฟล์',
  /** Select asset dialog title for images */
  'asset-source.dialog.default-title_image': 'เลือกรูปภาพ',
  /** Select asset dialog load more items */
  'asset-source.dialog.load-more': 'โหลดเพิ่มเติม',
  /** Text shown when selecting a file but there's no files to select from */
  'asset-source.dialog.no-assets_file': 'ไม่มีไฟล์',
  /** Text shown when selecting an image but there's no images to select from */
  'asset-source.dialog.no-assets_image': 'ไม่มีรูปภาพ',
  'asset-source.file.asset-list.action.delete.disabled-cannot-delete-current-file':
    'ไม่สามารถลบไฟล์ที่เลือกไว้ในปัจจุบัน',
  'asset-source.file.asset-list.action.delete.text': 'ลบ',
  'asset-source.file.asset-list.action.delete.title': 'ลบไฟล์',
  'asset-source.file.asset-list.action.select-file.title': 'เลือกไฟล์ {{filename}}',
  'asset-source.file.asset-list.action.show-usage.title': 'แสดงการใช้งาน',
  'asset-source.file.asset-list.delete-failed': 'ไม่สามารถลบไฟล์ได้',
  'asset-source.file.asset-list.delete-successful': 'ไฟล์ถูกลบแล้ว',
  'asset-source.file.asset-list.header.date-added': 'วันที่เพิ่ม',
  /** File asset source */
  'asset-source.file.asset-list.header.filename': 'ชื่อไฟล์',
  'asset-source.file.asset-list.header.size': 'ขนาด',
  'asset-source.file.asset-list.header.type': 'ประเภท',
  /** Text displayed on button or menu invoking the file asset source */
  'asset-source.file.title': 'ไฟล์ที่อัปโหลด',
  'asset-source.image.asset-list.delete-failed': 'ไม่สามารถลบรูปภาพได้',
  /** Image asset source */
  'asset-source.image.asset-list.delete-successful': 'รูปภาพถูกลบแล้ว',
  /** Text displayed on button or menu invoking the image asset source */
  'asset-source.image.title': 'รูปภาพที่อัปโหลด',
  'asset-source.usage-list.documents-using-file_named_other':
    '{{count}} เอกสารกำลังใช้ไฟล์ <code>{{filename}}</code>',
  /** Text shown in usage dialog for a file asset when there are zero, one or more documents using the *named* file **/
  'asset-source.usage-list.documents-using-file_named_zero':
    'ไม่มีเอกสารใดกำลังใช้ไฟล์ <code>{{filename}}</code>',
  'asset-source.usage-list.documents-using-file_unnamed_other': '{{count}} เอกสารกำลังใช้ไฟล์นี้',
  /** Text shown in usage dialog for a file asset when there are zero, one or more documents using the *unnamed* file **/
  'asset-source.usage-list.documents-using-file_unnamed_zero': 'ไม่มีเอกสารใดกำลังใช้ไฟล์นี้',
  'asset-source.usage-list.documents-using-image_named_other':
    '{{count}} เอกสารกำลังใช้รูปภาพ <code>{{filename}}</code>',
  /** Text shown in usage dialog for an image asset when there are zero, one or more documents using the *named* image **/
  'asset-source.usage-list.documents-using-image_named_zero':
    'ไม่มีเอกสารใดกำลังใช้รูปภาพ <code>{{filename}}</code>',
  'asset-source.usage-list.documents-using-image_unnamed_other':
    '{{count}} เอกสารกำลังใช้รูปภาพนี้',
  /** Text shown in usage dialog for an image asset when there are zero, one or more documents using the *unnamed* image **/
  'asset-source.usage-list.documents-using-image_unnamed_zero': 'ไม่มีเอกสารใดกำลังใช้รูปภาพนี้',

  /** Action message for navigating to next month */
  'calendar.action.go-to-next-month': 'ไปยังเดือนถัดไป',
  /** Action message for navigating to next year */
  'calendar.action.go-to-next-year': 'ไปยังปีถัดไป',
  /** Action message for navigating to previous month */
  'calendar.action.go-to-previous-month': 'ไปยังเดือนก่อนหน้า',
  /** Action message for navigating to previous year */
  'calendar.action.go-to-previous-year': 'ไปยังปีก่อนหน้า',
  /* Label for navigating the calendar to "today", without _selecting_ today. Short form, eg `Today`, not `Go to today` */
  'calendar.action.go-to-today': 'วันนี้',
  /* Accessibility label for navigating the calendar to "today", without _selecting_ today */
  'calendar.action.go-to-today-aria-label': 'ไปยังวันนี้',
  /* Label for navigating the calendar to "tomorrow", without _selecting_ tomorrow. Short form, eg `Tomorrow`, not `Go to tomorrow` */
  'calendar.action.go-to-tomorrow': 'พรุ่งนี้',
  /* Label for navigating the calendar to "yesterday", without _selecting_ yesterday. Short form, eg `Yesterday`, not `Go to yesterday` */
  'calendar.action.go-to-yesterday': 'เมื่อวาน',
  /** Label for switch that controls whether or not to include time in given timestamp */
  'calendar.action.include-time-label': 'รวมเวลา',
  /** Action message for selecting the hour */
  'calendar.action.select-hour': 'เลือกชั่วโมง',
  /** Action message for selecting the minute */
  'calendar.action.select-minute': 'เลือกนาที',
  /** Action message for setting to the current time */
  'calendar.action.set-to-current-time': 'ตั้งเป็นเวลาปัจจุบัน',
  /** Label for selecting an hour preset. Receives a `time` param as a string on hh:mm format and a `date` param as a Date instance denoting the preset date */
  'calendar.action.set-to-time-preset': '{{time}} ใน {{date, datetime}}',
  /** Error message displayed in calendar when entered date is not the correct format */
  'calendar.error.must-be-in-format': 'ต้องอยู่ในรูปแบบ <Emphasis>{{exampleDate}}</Emphasis>',
  /** Month name for April */
  'calendar.month-names.april': 'เมษายน',
  /** Month name for August */
  'calendar.month-names.august': 'สิงหาคม',
  /** Month name for December */
  'calendar.month-names.december': 'ธันวาคม',
  /** Month name for February */
  'calendar.month-names.february': 'กุมภาพันธ์',
  /** Month name for January */
  'calendar.month-names.january': 'มกราคม',
  /** Month name for July */
  'calendar.month-names.july': 'กรกฎาคม',
  /** Month name for June */
  'calendar.month-names.june': 'มิถุนายน',
  /** Month name for March */
  'calendar.month-names.march': 'มีนาคม',
  /** Month name for May */
  'calendar.month-names.may': 'พฤษภาคม',
  /** Month name for November */
  'calendar.month-names.november': 'พฤศจิกายน',
  /** Month name for October */
  'calendar.month-names.october': 'ตุลาคม',
  /** Month name for September */
  'calendar.month-names.september': 'กันยายน',
  /** Short weekday name for Friday */
  'calendar.weekday-names.short.friday': 'ศ.',
  /** Short weekday name for Monday */
  'calendar.weekday-names.short.monday': 'จ.',
  /** Short weekday name for Saturdayday */
  'calendar.weekday-names.short.saturday': 'ส.',
  /** Short weekday name for Sunday */
  'calendar.weekday-names.short.sunday': 'อา.',
  /** Short weekday name for Thursday */
  'calendar.weekday-names.short.thursday': 'พฤ.',
  /** Short weekday name for Tuesday */
  'calendar.weekday-names.short.tuesday': 'อ.',
  /** Short weekday name for Wednesday */
  'calendar.weekday-names.short.wednesday': 'พ.',

  /** Label for the close button label in Review Changes pane */
  'changes.action.close-label': 'ปิดการตรวจสอบการเปลี่ยนแปลง',
  /** Cancel label for revert button prompt action */
  'changes.action.revert-all-cancel': 'ยกเลิก',
  /** Revert all confirm label for revert button action - used on prompt button + review changes pane */
  'changes.action.revert-all-confirm': 'ย้อนกลับทั้งหมด',
  /** Revert for confirming revert (plural) label for field change action */
  'changes.action.revert-changes-confirm-change_other': 'ย้อนการเปลี่ยนแปลง',
  /** Prompt for reverting changes for a field change */
  'changes.action.revert-changes-description': 'คุณแน่ใจหรือไม่ว่าต้องการย้อนการเปลี่ยนแปลง?',
  /** Label for when the action of the change was to set something that was previously empty, eg a field was given a value, an array item was added, an asset was selected or similar */
  'changes.added-label': 'เพิ่ม',
  /** Array diff: An item was added in a given position (`{{position}}`) */
  'changes.array.item-added-in-position': 'เพิ่มในตำแหน่ง {{position}}',
  'changes.array.item-moved_down_other': 'ย้ายลง {{count}} ตำแหน่ง',
  'changes.array.item-moved_up_other': 'ย้ายขึ้น {{count}} ตำแหน่ง',
  /** Array diff: An item was removed from a given position (`{{position}}`) */
  'changes.array.item-removed-from-position': 'ลบออกจากตำแหน่ง {{position}}',
  /** Accessibility label for the "change bar" shown when there are edits on a field-level */
  'changes.change-bar.aria-label': 'ตรวจสอบการเปลี่ยนแปลง',
  /** Label for when the action of the change was _not_ an add/remove, eg a text field changed value, an image was changed from one asset to another or similar */
  'changes.changed-label': 'เปลี่ยนแปลง',
  /** Label and text for tooltip that indicates the authors of the changes */
  'changes.changes-by-author': 'การเปลี่ยนแปลงโดย',
  /** Additional text shown in development mode when a diff component crashes during rendering */
  'changes.error-boundary.developer-info': 'ตรวจสอบคอนโซลนักพัฒนาเพื่อข้อมูลเพิ่มเติม',
  /** Text shown when a diff component crashes during rendering, triggering the error boundary */
  'changes.error-boundary.title': 'การแสดงการเปลี่ยนแปลงในฟิลด์นี้ทำให้เกิดข้อผิดพลาด',
  /** Error message shown when the value of a field is not the expected one */
  'changes.error.incorrect-type-message':
    'ข้อผิดพลาดของค่า: ค่าเป็นประเภท "<code>{{actualType}}</code>", คาดหวัง "<code>{{expectedType}}</code>"',
  /** File diff: Fallback title for the meta info section when there is no original filename to use  */
  'changes.file.meta-info-fallback-title': 'ไม่มีชื่อ',
  /** Image diff: Text shown in tooltip when hovering hotspot that has changed in diff view */
  'changes.image.crop-changed': 'การครอบตัดเปลี่ยนแปลง',
  /** Image diff: Text shown if the previous image asset was deleted (shouldn't theoretically happen) */
  'changes.image.deleted': 'ลบภาพ',
  /** Image diff: Text shown if the image failed to be loaded when previewing it */
  'changes.image.error-loading-image': 'เกิดข้อผิดพลาดในการโหลดภาพ',
  /** Image diff: Text shown in tooltip when hovering hotspot that has changed in diff view */
  'changes.image.hotspot-changed': 'จุดฮอตสปอตมีการเปลี่ยนแปลง',
  /** Image diff: Fallback title for the meta info section when there is no original filename to use  */
  'changes.image.meta-info-fallback-title': 'ไม่มีชื่อ',
  /** Image diff: Text shown if no asset has been set for the field (but has metadata changes) */
  'changes.image.no-asset-set': 'ไม่ได้ตั้งค่าภาพ',
  /** Image diff: Text shown when the from/to state has/had no image */
  'changes.image.no-image-placeholder': '(ไม่มีภาพ)',
  /** Label for the "from" value in the change inspector */
  'changes.inspector.from-label': 'จาก',
  /** Label for the "meta" (field path, action etc) information in the change inspector */
  'changes.inspector.meta-label': 'เมตา',
  /** Label for the "to" value in the change inspector */
  'changes.inspector.to-label': 'ไปยัง',
  /** Loading author of change in the differences tooltip in the review changes pane */
  'changes.loading-author': 'กำลังโหลด…',
  /** Loading changes in Review Changes Pane */
  'changes.loading-changes': 'กำลังโหลดการเปลี่ยนแปลง…',
  /** No Changes description in the Review Changes pane */
  'changes.no-changes-description':
    'แก้ไขเอกสารหรือเลือกเวอร์ชันที่เก่ากว่าในไทม์ไลน์เพื่อดูรายการการเปลี่ยนแปลงที่ปรากฏในแผงนี้',
  /** No Changes title in the Review Changes pane */
  'changes.no-changes-title': 'ไม่มีการเปลี่ยนแปลง',
  /** Portable Text diff: An annotation was added */
  'changes.portable-text.annotation_added': 'เพิ่มการอ้างอิง',
  /** Portable Text diff: An annotation was changed */
  'changes.portable-text.annotation_changed': 'เปลี่ยนการอ้างอิง',
  /** Portable Text diff: An annotation was removed */
  'changes.portable-text.annotation_removed': 'ลบการอ้างอิง',
  /** Portable Text diff: An annotation was left unchanged */
  'changes.portable-text.annotation_unchanged': 'การอ้างอิงไม่เปลี่ยนแปลง',
  /** Portable Text diff: A block changed from one style to another (eg `normal` to `h1` or similar) */
  'changes.portable-text.block-style-changed':
    'เปลี่ยนสไตล์บล็อกจาก "{{fromStyle}}" เป็น "{{toStyle}}"',
  /** Portable Text diff: Change formatting of text (setting/unsetting marks, eg bold/italic etc) */
  'changes.portable-text.changed-formatting': 'เปลี่ยนการจัดรูปแบบ',
  /** Portable Text diff: An empty inline object is part of a change */
  'changes.portable-text.empty-inline-object': 'วัตถุอินไลน์ว่างเปล่า {{inlineObjectType}}',
  /** Portable Text diff: An empty object is the result of adding/removing an annotation */
  'changes.portable-text.empty-object-annotation': 'วัตถุว่างเปล่า {{annotationType}}',
  /** Portable Text diff: Added a block containing no text (eg empty block) */
  'changes.portable-text.empty-text_added': 'เพิ่มข้อความว่างเปล่า',
  /** Portable Text diff: Changed a block that contained no text (eg empty block) */
  'changes.portable-text.empty-text_changed': 'เปลี่ยนข้อความว่างเปล่า',
  /** Portable Text diff: Removed a block containing no text (eg empty block) */
  'changes.portable-text.empty-text_removed': 'ลบข้อความว่างเปล่า',
  /** Portable Text diff: An inline object was added */
  'changes.portable-text.inline-object_added': 'เพิ่มวัตถุอินไลน์',
  /** Portable Text diff: An inline object was changed */
  'changes.portable-text.inline-object_changed': 'เปลี่ยนวัตถุอินไลน์',
  /** Portable Text diff: An inline object was removed */
  'changes.portable-text.inline-object_removed': 'ลบออบเจ็กต์อินไลน์',
  /** Portable Text diff: An inline object was left unchanged */
  'changes.portable-text.inline-object_unchanged': 'ออบเจ็กต์อินไลน์ที่ไม่มีการเปลี่ยนแปลง',
  /** Portable Text diff: Added a chunk of text */
  'changes.portable-text.text_added': 'เพิ่มข้อความ',
  /** Portable Text diff: Removed a chunk of text */
  'changes.portable-text.text_removed': 'ลบข้อความ',
  /** Portable Text diff: Annotation has an unknown schema type */
  'changes.portable-text.unknown-annotation-schema-type': 'ประเภทสคีมาที่ไม่รู้จัก',
  /** Portable Text diff: Inline object has an unknown schema type */
  'changes.portable-text.unknown-inline-object-schema-type':
    'ประเภทสคีมาของออบเจ็กต์อินไลน์ที่ไม่รู้จัก',
  /** Label for when the action of the change was a removal, eg a field was cleared, an array item was removed, an asset was deselected or similar */
  'changes.removed-label': 'ถูกลบ',
  /** Title for the Review Changes pane */
  'changes.title': 'ตรวจสอบการเปลี่ยนแปลง',

  /** --- Common components --- */
  /** Tooltip text for context menu buttons */
  'common.context-menu-button.tooltip': 'แสดงเพิ่มเติม',
  /** Default text for dialog cancel button */
  'common.dialog.cancel-button.text': 'ยกเลิก',
  /** Default text for dialog confirm button */
  'common.dialog.confirm-button.text': 'ยืนยัน',
  /** Default text in shared loader text / spinner lockup */
  'common.loading': 'กำลังโหลด',

  /** --- Configuration issues --- */
  /** Tooltip displayed on configuration issues button */
  'configuration-issues.button.tooltip': 'พบปัญหาการตั้งค่า',

  /** The fallback title for an ordering menu item if no localized titles are provided. */
  'default-menu-item.fallback-title': 'เรียงตาม {{title}}',

  /** Title for the default ordering/SortOrder if no orderings are provided and the caption field is found */
  'default-orderings.caption': 'เรียงตามคำบรรยาย',
  /** Title for the default ordering/SortOrder if no orderings are provided and the description field is found */
  'default-orderings.description': 'เรียงตามคำอธิบาย',
  /** Title for the default ordering/SortOrder if no orderings are provided and the header field is found */
  'default-orderings.header': 'เรียงตามส่วนหัว',
  /** Title for the default ordering/SortOrder if no orderings are provided and the heading field is found */
  'default-orderings.heading': 'เรียงตามหัวข้อ',
  /** Title for the default ordering/SortOrder if no orderings are provided and the label field is found */
  'default-orderings.label': 'เรียงตามป้ายกำกับ',
  /** Title for the default ordering/SortOrder if no orderings are provided and the name field is found */
  'default-orderings.name': 'เรียงตามชื่อ',
  /** Title for the default ordering/SortOrder if no orderings are provided and the title field is found */
  'default-orderings.title': 'เรียงตามชื่อเรื่อง',

  /** Label to show in the document footer indicating the last edited date of the document */
  'document-status.edited': 'แก้ไข {{date}}',
  /** Label to show in the document footer indicating the document is not published*/
  'document-status.not-published': 'ไม่ได้เผยแพร่',
  /** Label to show in the document footer indicating the published date of the document */
  'document-status.published': 'เผยแพร่ {{date}}',

  /** The value of the <code>_key</code> property must be a unique string. */
  'form.error.duplicate-keys-alert.details.additional-description':
    'ค่าของคุณสมบัติ <code>_key</code> ต้องเป็นสตริงที่ไม่ซ้ำกัน',
  /** This usually happens when items are created using an API client, and the <code>_key</code> property of each elements has been generated non-uniquely. */
  'form.error.duplicate-keys-alert.details.description':
    'สิ่งนี้มักเกิดขึ้นเมื่อมีการสร้างรายการโดยใช้ไคลเอนต์ API และคุณสมบัติ <code>_key</code> ของแต่ละองค์ประกอบถูกสร้างขึ้นไม่เป็นเอกลักษณ์',
  /** Developer info */
  'form.error.duplicate-keys-alert.details.title': 'ข้อมูลสำหรับนักพัฒนา',
  /** Generate unique keys */
  'form.error.duplicate-keys-alert.generate-button.text': 'สร้างคีย์ที่ไม่ซ้ำกัน',
  /** Several items in this list share the same identifier (key). Every item must have an unique identifier. */
  'form.error.duplicate-keys-alert.summary':
    'หลายรายการในรายการนี้มีตัวระบุ (คีย์) เดียวกัน ทุกรายการต้องมีตัวระบุที่ไม่ซ้ำกัน',
  /** Non-unique keys */
  'form.error.duplicate-keys-alert.title': 'คีย์ที่ไม่เป็นเอกลักษณ์',
  /** Error text shown when a field with a given name cannot be found in the schema or is conditionally hidden but explicitly told to render  */
  'form.error.field-not-found':
    'ไม่พบฟิลด์ "{{fieldName}}" ในสมาชิก – ตรวจสอบว่าได้กำหนดไว้ในสคีมาและไม่ได้ถูกซ่อนไว้โดยเงื่อนไข',
  /** Add missing keys */
  'form.error.missing-keys-alert.add-button.text': 'เพิ่มคีย์ที่ขาดหายไป',
  /** The value of the <code>_key</code> property must be a unique string. */
  'form.error.missing-keys-alert.details.additional-description':
    'ค่าของคุณสมบัติ <code>_key</code> ต้องเป็นสตริงที่ไม่ซ้ำกัน',
  /** This usually happens when items are created using an API client, and the <code>_key</code> property has not been included. */
  'form.error.missing-keys-alert.details.description':
    'สิ่งนี้มักเกิดขึ้นเมื่อมีการสร้างรายการโดยใช้ไคลเอนต์ API และไม่ได้รวมคุณสมบัติ <code>_key</code>',
  /** Developer info */
  'form.error.missing-keys-alert.details.title': 'ข้อมูลสำหรับนักพัฒนา',
  /** Some items in the list are missing their keys. This must be fixed in order to edit the list. */
  'form.error.missing-keys-alert.summary':
    'บางรายการในรายการนี้ขาดคีย์ ต้องแก้ไขเพื่อที่จะแก้ไขรายการ',
  /** Missing keys */
  'form.error.missing-keys-alert.title': 'คีย์ที่ขาดหายไป',
  /** This usually happens when items are created using an API client, or when a custom input component has added invalid data to the list. */
  'form.error.mixed-array-alert.details.description':
    'สิ่งนี้มักเกิดขึ้นเมื่อมีการสร้างรายการโดยใช้ไคลเอนต์ API หรือเมื่อคอมโพเนนต์อินพุตที่กำหนดเองได้เพิ่มข้อมูลที่ไม่ถูกต้องเข้าไปในรายการ',
  /** Developer info */
  'form.error.mixed-array-alert.details.title': 'ข้อมูลสำหรับนักพัฒนา',
  /**  Remove non-object values */
  'form.error.mixed-array-alert.remove-button.text': 'ลบค่าที่ไม่ใช่ออบเจ็กต์',
  /** Some items in this list are not objects. This must be fixed in order to edit the list. */
  'form.error.mixed-array-alert.summary':
    'บางรายการในรายการนี้ไม่ใช่ออบเจ็กต์ ต้องแก้ไขเพื่อที่จะแก้ไขรายการ',
  /** Invalid list values */
  'form.error.mixed-array-alert.title': 'ค่าในรายการไม่ถูกต้อง',
  /** Error text shown when form is unable to find an array item at a given indexed path */
  'form.error.no-array-item-at-index':
    'ไม่พบรายการในอาร์เรย์ที่ดัชนี <code>{{index}}</code> ที่เส้นทาง <code>{{path}}</code>',
  /** Error text shown when form is unable to find an array item at a given keyed path */
  'form.error.no-array-item-at-key':
    'ไม่พบรายการในอาร์เรย์ที่มี `_key` <code>"{{key}}"</code> ที่เส้นทาง <code>{{path}}</code>',
  /** Form field deprecated label */
  'form.field.deprecated-label': undefined, // 'deprecated'
  /** Fallback title shown above field if it has no defined title */
  'form.field.untitled-field-label': 'ไม่มีชื่อ',
  /** Fallback title shown above fieldset if it has no defined title */
  'form.field.untitled-fieldset-label': 'ไม่มีชื่อ',
  /** Accessibility label for the icon that indicates the field has a validation error */
  'form.validation.has-error-aria-label': 'มีข้อผิดพลาด',
  /** Accessibility label for the icon that indicates the field has validation information */
  'form.validation.has-info-aria-label': 'มีข้อมูล',
  /** Accessibility label for the icon that indicates the field has a validation warning */
  'form.validation.has-warning-aria-label': 'มีคำเตือน',
  'form.validation.summary.errors-count_other': '{{count}} ข้อผิดพลาด',
  'form.validation.summary.warnings-count_other': '{{count}} คำเตือน',

  'free-trial.tooltip.days-count_other': undefined, // '{{count}} days left in trial'
  /** Tooltip for free trial navbar button, once trial has ended */
  'free-trial.tooltip.trial-finished': undefined, // 'Upgrade your project'

  /**
   * Label for "contact sales" call to action
   * These are titles for fallback links in the event the help & resources endpoint isn't able to be fetched
   */
  'help-resources.action.contact-sales': 'ติดต่อฝ่ายขาย',
  /**
   * Label for "help and support" call to action
   * These are titles for fallback links in the event the help & resources endpoint isn't able to be fetched
   */
  'help-resources.action.help-and-support': 'ความช่วยเหลือและสนับสนุน',
  /**
   * Label for "join our community" call to action
   * These are titles for fallback links in the event the help & resources endpoint isn't able to be fetched
   */
  'help-resources.action.join-our-community': 'เข้าร่วมชุมชนของเรา',
  /** Information for what the latest sanity version is */
  'help-resources.latest-sanity-version': 'เวอร์ชันล่าสุดคือ {{latestVersion}}',
  /** Information for what studio version the current studio is running */
  'help-resources.studio-version': 'Sanity Studio เวอร์ชัน {{studioVersion}}',
  /** Title for help and resources menus */
  'help-resources.title': 'ความช่วยเหลือและทรัพยากร',

  /** Text for button to cancel an ongoing upload */
  'input.files.common.cancel-upload': 'ยกเลิก',
  /** Text for file input button in upload placeholder */
  'input.files.common.upload-placeholder.file-input-button.text': 'อัปโหลด',
  /** Uploading <FileName/> */
  'input.files.common.upload-progress': 'กำลังอัปโหลด <FileName/>',
  /** The referenced document cannot be opened, because the URL failed to be resolved */
  'input.reference.document-cannot-be-opened.failed-to-resolve-url':
    'ไม่สามารถเปิดเอกสารนี้ได้ (ไม่สามารถแก้ไข URL ไปยัง Studio ได้)',

  /** Label for adding item after a specific array item */
  'inputs.array.action.add-after': 'เพิ่มรายการหลังจาก',
  /** Label for adding item before a specific array item */
  'inputs.array.action.add-before': 'เพิ่มรายการก่อน',
  /** Label for adding array item action when the schema allows for only one schema type */
  'inputs.array.action.add-item': 'เพิ่มรายการ',
  /**
   * Label for adding one array item action when the schema allows for multiple schema types,
   * eg. will prompt the user to select a type once triggered
   */
  'inputs.array.action.add-item-select-type': 'เพิ่มรายการ...',
  /** Array drag handle button tooltip */
  'inputs.array.action.drag.tooltip': 'ลากเพื่อจัดเรียงใหม่',
  /** Label for duplicating an array item  */
  'inputs.array.action.duplicate': 'ทำซ้ำ',
  /** Label for editing the item of a specific type, eg "Edit Person" */
  'inputs.array.action.edit': 'แก้ไข {{itemTypeTitle}}',
  /** Label for removing an array item action  */
  'inputs.array.action.remove': 'ลบ',
  /** Label for removing action when an array item has an error  */
  'inputs.array.action.remove-invalid-item': 'ลบ',
  /** Label for viewing the item of a specific type, eg "View Person" */
  'inputs.array.action.view': 'ดู {{itemTypeTitle}}',
  /** Error description for the array item tooltip that explains that the current item can still be moved or deleted but not edited since the schema definition is not found */
  'inputs.array.error.can-delete-but-no-edit-description':
    'คุณยังสามารถย้ายหรือลบรายการนี้ได้ แต่ไม่สามารถแก้ไขได้เนื่องจากไม่พบคำจำกัดความของสคีมาสำหรับประเภทของมัน',
  /** Error label for toast when array could not resolve the initial value */
  'inputs.array.error.cannot-resolve-initial-value-title':
    'ไม่สามารถกำหนดค่าเริ่มต้นสำหรับประเภท: {{schemaTypeTitle}}: {{errorMessage}}',
  /** Error label for toast when trying to upload multiple array items of a type that cannot be converted to array */
  'inputs.array.error.cannot-upload-unable-to-convert_other':
    'รายการต่อไปนี้ไม่สามารถอัปโหลดได้เนื่องจากไม่มีการแปลงที่รู้จักจากประเภทเนื้อหาเป็นรายการอาร์เรย์:',
  /** Error description for the array item tooltip that explains that the current type item is not valid for the list  */
  'inputs.array.error.current-schema-not-declare-description':
    'สคีมาปัจจุบันไม่ได้ประกาศรายการประเภท <code>{{typeName}}</code> ว่าถูกต้องสำหรับรายการนี้ นี่อาจหมายความว่าประเภทนั้นถูกลบออกเป็นรายการที่ถูกต้อง หรือว่ามีคนอื่นเพิ่มเข้าไปในสคีมาท้องถิ่นของตนเองที่ยังไม่ได้ถูกปรับใช้',
  /** Error description to show how the item is being represented in the json format */
  'inputs.array.error.json-representation-description': 'การแสดงข้อมูล JSON ของรายการนี้:',
  /** Error description for the array item tooltip that explains what the error means with more context */
  'inputs.array.error.type-is-incompatible-prompt':
    'รายการประเภท <code>{{typeName}}</code> ไม่ถูกต้องสำหรับรายการนี้',
  /** Error title for when an item type within an array input is incompatible, used in the tooltip */
  'inputs.array.error.type-is-incompatible-title': 'ทำไมสิ่งนี้ถึงเกิดขึ้น?',
  /** Error label for unexpected errors in the Array Input */
  'inputs.array.error.unexpected-error': 'ข้อผิดพลาดที่ไม่คาดคิด: {{error}}',
  /** Label for when the array input doesn't have any items */
  'inputs.array.no-items-label': 'ไม่มีรายการ',
  /** Label for read only array fields */
  'inputs.array.read-only-label': 'ฟิลด์นี้เป็นแบบอ่านอย่างเดียว',
  /** Label for when the array input is resolving the initial value for the item */
  'inputs.array.resolving-initial-value': 'กำลังกำหนดค่าเริ่มต้น…',
  /** Placeholder value for datetime input */
  'inputs.datetime.placeholder': 'เช่น {{example}}',
  /** Acessibility label for button to open file options menu */
  'inputs.file.actions-menu.file-options.aria-label': 'เปิดเมนูตัวเลือกไฟล์',
  /** Browse */
  'inputs.file.browse-button.text': 'เรียกดู',
  /** Select file */
  'inputs.file.dialog.title': 'เลือกไฟล์',
  /** Unknown member kind: `{{kind}}` */
  'inputs.file.error.unknown-member-kind': 'ไม่รู้จักประเภทสมาชิก: {{kind}}',
  /** The value of this field is not a valid file. Resetting this field will let you choose a new file. */
  'inputs.file.invalid-file-warning.description':
    'ค่าของฟิลด์นี้ไม่ใช่ไฟล์ที่ถูกต้อง การรีเซ็ตฟิลด์นี้จะช่วยให้คุณเลือกไฟล์ใหม่ได้',
  /** Reset value */
  'inputs.file.invalid-file-warning.reset-button.text': 'รีเซ็ตค่า',
  /** Invalid file value */
  'inputs.file.invalid-file-warning.title': 'ค่าไฟล์ไม่ถูกต้อง',
  /** Select */
  'inputs.file.multi-browse-button.text': 'เลือก',
  /** The upload could not be completed at this time. */
  'inputs.file.upload-failed.description': 'การอัปโหลดไม่สามารถเสร็จสิ้นได้ในขณะนี้',
  /** Upload failed */
  'inputs.file.upload-failed.title': 'อัปโหลดไม่สำเร็จ',
  /** Clear field */
  'inputs.files.common.actions-menu.clear-field.label': 'ล้างข้อมูล',
  /** Copy URL */
  'inputs.files.common.actions-menu.copy-url.label': 'คัดลอก URL',
  /** Download */
  'inputs.files.common.actions-menu.download.label': 'ดาวน์โหลด',
  /** The URL is copied to the clipboard */
  'inputs.files.common.actions-menu.notification.url-copied': 'URL ถูกคัดลอกไปยังคลิปบอร์ด',
  /** Replace */
  'inputs.files.common.actions-menu.replace.label': 'แทนที่',
  /** Upload */
  'inputs.files.common.actions-menu.upload.label': 'อัปโหลด',
  /** Drop to upload */
  'inputs.files.common.drop-message.drop-to-upload': 'วางเพื่ออัปโหลด',
  /** Drop to upload `{{count}}` files */
  'inputs.files.common.drop-message.drop-to-upload-multi_other': 'วางเพื่ออัปโหลด {{count}} ไฟล์',
  /** Can't upload any of these files here */
  'inputs.files.common.drop-message.drop-to-upload.no-accepted-file-message_other':
    'ไม่สามารถอัปโหลดไฟล์เหล่านี้ที่นี่',
  /** `{{count}}` files can't be uploaded here */
  'inputs.files.common.drop-message.drop-to-upload.rejected-file-message_other':
    '{{count}} ไฟล์ไม่สามารถอัปโหลดที่นี่',
  'inputs.files.common.placeholder.cannot-upload-some-files_other':
    'ไม่สามารถอัปโหลด {{count}} ไฟล์',
  /** Drag or paste type here */
  'inputs.files.common.placeholder.drag-or-paste-to-upload_file': 'ลากหรือวางไฟล์ที่นี่',
  /** Drag or paste image here */
  'inputs.files.common.placeholder.drag-or-paste-to-upload_image': 'ลากหรือวางรูปภาพที่นี่',
  /** Drop to upload file */
  'inputs.files.common.placeholder.drop-to-upload_file': 'วางเพื่ออัปโหลดไฟล์',
  /** Drop to upload image */
  'inputs.files.common.placeholder.drop-to-upload_image': 'วางเพื่ออัปโหลดรูปภาพ',
  /** Read only */
  'inputs.files.common.placeholder.read-only': 'อ่านอย่างเดียว',
  /** Can't upload files here */
  'inputs.files.common.placeholder.upload-not-supported': 'ไม่สามารถอัปโหลดไฟล์ที่นี่',
  /** Clear upload */
  'inputs.files.common.stale-upload-warning.clear': 'ล้างการอัปโหลด',
  /** An upload has made no progress for at least `{{staleThresholdMinutes}}` minutes and likely got interrupted. You can safely clear the incomplete upload and try uploading again. */
  'inputs.files.common.stale-upload-warning.description':
    'การอัปโหลดไม่มีความคืบหน้าอย่างน้อย {{staleThresholdMinutes}} นาทีและอาจถูกขัดจังหวะ คุณสามารถล้างการอัปโหลดที่ไม่สมบูรณ์และลองอัปโหลดอีกครั้งได้อย่างปลอดภัย',
  /** Incomplete upload */
  'inputs.files.common.stale-upload-warning.title': 'การอัปโหลดไม่สมบูรณ์',
  /** Tooltip text for action to crop image */
  'inputs.image.actions-menu.crop-image-tooltip': 'ครอบตัดรูปภาพ',
  /** Accessibility label for button to open image edit dialog */
  'inputs.image.actions-menu.edit-details.aria-label': 'เปิดกล่องโต้ตอบแก้ไขรูปภาพ',
  /** Accessibility label for button to open image options menu */
  'inputs.image.actions-menu.options.aria-label': 'เปิดเมนูตัวเลือกรูปภาพ',
  /** Select */
  'inputs.image.browse-menu.text': 'เลือก',
  /** Cannot upload this file here */
  'inputs.image.drag-overlay.cannot-upload-here': 'ไม่สามารถอัปโหลดไฟล์นี้ที่นี่',
  /** Drop image to upload */
  'inputs.image.drag-overlay.drop-to-upload-image': 'วางรูปภาพเพื่ออัปโหลด',
  /** This field is read only */
  'inputs.image.drag-overlay.this-field-is-read-only': 'ฟิลด์นี้เป็นแบบอ่านอย่างเดียว',
  /** Unknown member kind: `{{kind}}` */
  'inputs.image.error.unknown-member-kind': 'ไม่รู้จักประเภทสมาชิก: {{kind}}',
  /** Edit hotspot and crop */
  'inputs.image.hotspot-dialog.title': 'แก้ไขจุดศูนย์กลางและตัดภาพ',
  /** The value of this field is not a valid image. Resetting this field will let you choose a new image. */
  'inputs.image.invalid-image-warning.description':
    'ค่าของฟิลด์นี้ไม่ใช่รูปภาพที่ถูกต้อง การรีเซ็ตฟิลด์นี้จะช่วยให้คุณเลือกรูปภาพใหม่ได้',
  /** Reset value */
  'inputs.image.invalid-image-warning.reset-button.text': 'รีเซ็ตค่า',
  /** Invalid image value */
  'inputs.image.invalid-image-warning.title': 'ค่ารูปภาพไม่ถูกต้อง',
  /** Preview of uploaded image */
  'inputs.image.preview-uploaded-image': 'ตัวอย่างรูปภาพที่อัปโหลด',
  /** The upload could not be completed at this time. */
  'inputs.image.upload-error.description': 'ไม่สามารถอัปโหลดได้ในเวลานี้',
  /** Upload failed */
  'inputs.image.upload-error.title': 'อัปโหลดไม่สำเร็จ',
  /** Adjust the rectangle to crop image. Adjust the circle to specify the area that should always be visible. */
  'inputs.imagetool.description':
    'ปรับสี่เหลี่ยมเพื่อตัดภาพ ปรับวงกลมเพื่อระบุพื้นที่ที่ควรจะแสดงเสมอ',
  /** Error: `{{errorMessage}}` */
  'inputs.imagetool.load-error': 'ข้อผิดพลาด: {{errorMessage}}',
  /** Hotspot & Crop */
  'inputs.imagetool.title': 'จุดศูนย์กลาง & ตัดภาพ',
  /** Convert to `{{targetType}}` */
  'inputs.invalid-value.convert-button.text': 'แปลงเป็น <code>{{targetType}}</code>',
  /** The current value (<code>`{{actualType}}`</code>) */
  'inputs.invalid-value.current-type': 'ค่าปัจจุบัน (<code>{{actualType}}</code>)',
  /** The property value is stored as a value type that does not match the expected type. */
  'inputs.invalid-value.description':
    'ค่าของคุณสมบัตินี้ถูกเก็บเป็นประเภทค่าที่ไม่ตรงกับประเภทที่คาดหวัง',
  /** The value of this property must be of type <code>`{{validType}}`</code> according to the schema. */
  'inputs.invalid-value.details.description':
    'ค่าของคุณสมบัตินี้ต้องเป็นประเภท <code>{{validType}}</code> ตามสคีมา',
  /** Only the following types are valid here according to schema: */
  'inputs.invalid-value.details.multi-type-description': 'เฉพาะประเภทต่อไปนี้ที่ถูกต้องตามสคีมา:',
  /** Mismatching value types typically occur when the schema has recently been changed. */
  'inputs.invalid-value.details.possible-reason':
    'ประเภทค่าที่ไม่ตรงกันมักเกิดขึ้นเมื่อสคีมามีการเปลี่ยนแปลงเร็วๆ นี้',
  /** Developer info */
  'inputs.invalid-value.details.title': 'ข้อมูลสำหรับนักพัฒนา',
  /** -- Invalid Value Input -- */
  /** Reset value */
  'inputs.invalid-value.reset-button.text': 'รีเซ็ตค่า',
  /** Invalid property value */
  'inputs.invalid-value.title': 'ค่าคุณสมบัติไม่ถูกต้อง',
  /** Field groups */
  'inputs.object.field-group-tabs.aria-label': 'กลุ่มฟิลด์',
  /** Read-only field description */
  'inputs.object.unknown-fields.read-only.description':
    'ฟิลด์นี้เป็น <strong>อ่านอย่างเดียว</strong> ตามสคีมาของเอกสารและไม่สามารถยกเลิกได้ หากคุณต้องการยกเลิกใน Studio ให้แน่ใจว่าคุณได้ลบฟิลด์ <code>readOnly</code> ออกจากประเภทที่รวมอยู่ในสคีมา',
  /** Remove field */
  'inputs.object.unknown-fields.remove-field-button.text': 'ลบฟิลด์',
  'inputs.object.unknown-fields.warning.description_other':
    'พบฟิลด์ที่ไม่ได้กำหนดไว้ในสคีมา {{count}} ฟิลด์',
  'inputs.object.unknown-fields.warning.details.description_other':
    'ฟิลด์เหล่านี้ไม่ได้ถูกกำหนดไว้ในสคีมาของเอกสาร ซึ่งอาจหมายความว่าการกำหนดฟิลด์ได้ถูกลบออก หรือว่ามีคนอื่นเพิ่มพวกมันเข้าไปในโปรเจคส่วนตัวของตนเองและยังไม่ได้ทำการปรับปรุงการเปลี่ยนแปลงเหล่านั้น',
  /** Developer info */
  'inputs.object.unknown-fields.warning.details.title': 'ข้อมูลสำหรับนักพัฒนา',
  'inputs.object.unknown-fields.warning.title_other': 'พบฟิลด์ที่ไม่รู้จัก',
  /** Collapse the editor to save screen space  */
  'inputs.portable-text.action.collapse-editor': 'ย่อตัวแก้ไข',
  /** Aria label for action to edit an existing annotation */
  'inputs.portable-text.action.edit-annotation-aria-label': undefined, // 'Edit annotation'
  /** Expand the editor to give more editing space */
  'inputs.portable-text.action.expand-editor': 'ขยายตัวแก้ไข',
  /** Label label for action to insert a block of a given type (`{{typeName}}`) */
  'inputs.portable-text.action.insert-block': 'แทรก {{typeName}}',
  /** Accessibility label for action to insert a block of a given type (`{{typeName}}`) */
  'inputs.portable-text.action.insert-block-aria-label': 'แทรก {{typeName}} (บล็อก)',
  /** Label for action to insert an inline object of a given type (`{{typeName}}`) */
  'inputs.portable-text.action.insert-inline-object': 'แทรก {{typeName}}',
  /** Accessibility label for action to insert an inline object of a given type (`{{typeName}}`) */
  'inputs.portable-text.action.insert-inline-object-aria-label': 'แทรก {{typeName}} (อินไลน์)',
  /** Aria label for action to remove an annotation */
  'inputs.portable-text.action.remove-annotation-aria-label': undefined, // 'Remove annotation'
  /** Label for activate on focus with context of click and not focused */
  'inputs.portable-text.activate-on-focus-message_click': 'คลิกเพื่อเปิดใช้งาน',
  /** Label for activate on focus with context of click and focused */
  'inputs.portable-text.activate-on-focus-message_click-focused':
    'คลิกหรือกดปุ่ม space เพื่อเปิดใช้งาน',
  /** Label for activate on focus with context of tap and not focused */
  'inputs.portable-text.activate-on-focus-message_tap': 'แตะเพื่อเปิดใช้งาน',
  /**Aria label for the annotation object */
  'inputs.portable-text.annotation-aria-label': undefined, // 'Annotation object'
  /** Title for dialog that allows editing an annotation */
  'inputs.portable-text.annotation-editor.title': 'แก้ไข {{schemaType}}',
  /** Title of the default "link" annotation */
  'inputs.portable-text.annotation.link': 'ลิงก์',
  /**Aria label for the block object */
  'inputs.portable-text.block.aria-label': undefined, // 'Block object'
  /** Label for action to edit a block item, in the case where it is editable */
  'inputs.portable-text.block.edit': 'แก้ไข',
  /** Accessibility label for the button that opens the actions menu on blocks */
  'inputs.portable-text.block.open-menu-aria-label': 'เปิดเมนู',
  /** Label for action to open a reference, in the case of block-level reference types */
  'inputs.portable-text.block.open-reference': 'เปิดอ้างอิง',
  /** Label for action to remove a block item */
  'inputs.portable-text.block.remove': 'ลบ',
  /** Label for action to view a block item, in the case where it is read-only and thus cannot be edited */
  'inputs.portable-text.block.view': 'ดู',
  /** Title of the "code" decorator */
  'inputs.portable-text.decorator.code': 'โค้ด',
  /** Title of the "em" (emphasis) decorator */
  'inputs.portable-text.decorator.emphasis': 'ตัวเอียง',
  /** Title of the "strike-through" decorator */
  'inputs.portable-text.decorator.strike-through': 'ขีดฆ่า',
  /** Title of the "strong" decorator */
  'inputs.portable-text.decorator.strong': 'ตัวหนา',
  /** Title of the "underline" decorator */
  'inputs.portable-text.decorator.underline': 'ขีดเส้นใต้',
  /** Placeholder text for when the editor is empty */
  'inputs.portable-text.empty-placeholder': 'ว่างเปล่า',
  /**Aria label for the block object */
  'inputs.portable-text.inline-block.aria-label': undefined, // 'Inline object'
  /** Label for action to edit an inline object item */
  'inputs.portable-text.inline-object.edit': 'แก้ไขวัตถุ',
  /** Aria label for icon for action to edit an inline object item */
  'inputs.portable-text.inline-object.edit-aria-label': undefined, // 'Edit object'
  /** Label for action to remove an inline object item */
  'inputs.portable-text.inline-object.remove': 'ลบวัตถุ',
  /** Aria label for icon for action to remove an inline object item */
  'inputs.portable-text.inline-object.remove-aria-label': undefined, // 'Remove object'
  /** Disclaimer text shown on invalid Portable Text value, when an action is available to unblock the user, but it is not guaranteed to be safe */
  'inputs.portable-text.invalid-value.action-disclaimer':
    'หมายเหตุ: โดยทั่วไปแล้วการดำเนินการข้างต้นนั้นปลอดภัย แต่หากคุณมีข้อสงสัย ให้ติดต่อผู้ที่รับผิดชอบในการกำหนดค่าสตูดิโอของคุณ',
  /** Action presented when the Portable Text field value is invalid, when block with key `{{key}}` has a child with key `{{childKey}}` of type `{{childType}}` which is not allowed by the schema definition */
  'inputs.portable-text.invalid-value.disallowed-child-type.action': 'ลบวัตถุ',
  /** Text explaining that the Portable Text field value is invalid, when block with key `{{key}}` has a child with key `{{childKey}}` of type `{{childType}}` which is not allowed by the schema definition */
  'inputs.portable-text.invalid-value.disallowed-child-type.description':
    'ลูกของบล็อกที่มีคีย์ <code>{{key}}</code> มีคีย์ {{childKey}} และเป็นประเภท <code>{{childType}}</code> ซึ่งไม่ได้รับอนุญาตจากการกำหนดสคีมา',
  /** Action presented when the Portable Text field value is invalid, when child with key `{{key}}` has a type (`{{typeName}}`) that is not an allowed block type for this field */
  'inputs.portable-text.invalid-value.disallowed-type.action': 'ลบบล็อก',
  /** Text explaining that the Portable Text field value is invalid, when child with key `{{key}}` has a type (`{{typeName}}`) that is not an allowed block type for this field */
  'inputs.portable-text.invalid-value.disallowed-type.description':
    'บล็อกที่มีคีย์ <code>{{key}}</code> เป็นประเภท <code>{{typeName}}</code> ซึ่งไม่ได้รับอนุญาตจากการกำหนดสคีมา',
  /** Action presented when the Portable Text field value is invalid, when block with key `{{key}}` contains no children */
  'inputs.portable-text.invalid-value.empty-children.action': 'แทรกข้อความว่างเปล่า',
  /** Text explaining that the Portable Text field value is invalid, when block with key `{{key}}` contains no children */
  'inputs.portable-text.invalid-value.empty-children.description':
    'บล็อกข้อความที่มีคีย์ <code>{{key}}</code> ไม่มีข้อความ',
  /** Label for the button to ignore invalid values in the Portable Text editor */
  'inputs.portable-text.invalid-value.ignore-button.text': 'ไม่สนใจ',
  /** Action presented when the Portable Text field value is invalid, when child with key `{{key}}` has a `_type` property that is set to `block`, but the block type defined in schema has a different name (`{{expectedTypeName}}`) */
  'inputs.portable-text.invalid-value.incorrect-block-type.action':
    'ใช้ประเภท <code>{{expectedTypeName}}</code>',
  /** Text explaining that the Portable Text field value is invalid, when child with key `{{key}}` has a `_type` property that is set to `block`, but the block type defined in schema has a different name (`{{expectedTypeName}}`) */
  'inputs.portable-text.invalid-value.incorrect-block-type.description':
    'บล็อกที่มีคีย์ <code>{{key}}</code> มีชื่อประเภทที่ไม่ถูกต้อง ตามสคีมา ควรเป็น <code>{{expectedTypeName}}</code>',
  /** Action presented when the Portable Text field value is invalid, when block with key `{{key}}` has a span with key `{{childKey}}` that has a missing or invalid `text` property */
  'inputs.portable-text.invalid-value.invalid-span-text.action': 'ตั้งค่าข้อความว่างเปล่า',
  /** Text explaining that the Portable Text field value is invalid, when block with key `{{key}}` has a span with key `{{childKey}}` that has a missing or invalid `text` property */
  'inputs.portable-text.invalid-value.invalid-span-text.description':
    'สแปนที่มีคีย์ {{childKey}} ของบล็อกที่มีคีย์ <code>{{key}}</code> ไม่มีหรือมีคุณสมบัติ <code>text</code> ที่ไม่ถูกต้อง',
  /** Action presented when the Portable Text field value is invalid, when child with key `{{key}}` is missing a `_type` property, but seems to be a block of type `{{expectedTypeName}}` */
  'inputs.portable-text.invalid-value.missing-block-type.action':
    'ใช้ประเภท <code>{{expectedTypeName}}</code>',
  /** Text explaining that the Portable Text field value is invalid, when child with key `{{key}}` is missing a `_type` property, but seems to be a block of type `{{expectedTypeName}}` */
  'inputs.portable-text.invalid-value.missing-block-type.description':
    'บล็อกที่มีคีย์ <code>{{key}}</code> ไม่มีชื่อประเภท ตามสคีมา ควรเป็น <code>{{expectedTypeName}}</code>',
  /** Action presented when the Portable Text field value is invalid, when block with key `{{key}}` has a child at `{{index}}` which is missing `_key` property */
  'inputs.portable-text.invalid-value.missing-child-key.action': 'กำหนดคีย์แบบสุ่ม',
  /** Text explaining that the Portable Text field value is invalid, when block with key `{{key}}` has a child at `{{index}}` which is missing `_key` property */
  'inputs.portable-text.invalid-value.missing-child-key.description':
    'ลูกที่ตำแหน่ง <code>{{index}}</code> ของบล็อกที่มีคีย์ <code>{{key}}</code> ไม่มีคุณสมบัติ <code>_key</code>',
  /** Action presented when the Portable Text field value is invalid, when block with key `{{key}}` has a child with key `{{childKey}}` which is missing a `_type` property */
  'inputs.portable-text.invalid-value.missing-child-type.action': 'ลบวัตถุ',
  /** Text explaining that the Portable Text field value is invalid, when block with key `{{key}}` has a child with key `{{childKey}}` which is missing a `_type` property */
  'inputs.portable-text.invalid-value.missing-child-type.description':
    'ลูกที่มีคีย์ {{childKey}} ของบล็อกที่มีคีย์ <code>{{key}}</code> ไม่มีคุณสมบัติ <code>_type</code>',
  /** Action presented when the Portable Text field value is invalid, when child at `{{index}}` is missing the required `_key` property */
  'inputs.portable-text.invalid-value.missing-key.action': 'กำหนดคีย์แบบสุ่ม',
  /** Text explaining that the Portable Text field value is invalid, when child at `{{index}}` is missing the required `_key` property */
  'inputs.portable-text.invalid-value.missing-key.description':
    'บล็อกที่ดัชนี <code>{{index}}</code> ไม่มีคุณสมบัติ <code>_key</code> ที่จำเป็น',
  /** Action presented when the Portable Text field value is invalid, when child with key `{{key}}` has a missing or invalid `children` property */
  'inputs.portable-text.invalid-value.missing-or-invalid-children.action': 'ลบบล็อก',
  /** Text explaining that the Portable Text field value is invalid, when child with key `{{key}}` has a missing or invalid `children` property */
  'inputs.portable-text.invalid-value.missing-or-invalid-children.description':
    'บล็อกข้อความที่มีคีย์ <code>{{key}}</code> มีคุณสมบัติ `children` ที่ไม่ถูกต้องหรือหายไป',
  /** Action presented when the Portable Text field value is invalid, when child with key `{{key}}` has a missing or invalid `markDefs` property */
  'inputs.portable-text.invalid-value.missing-or-invalid-markdefs.action': 'เพิ่มคุณสมบัติ',
  /** Text explaining that the Portable Text field value is invalid, when child with key `{{key}}` has a missing or invalid `markDefs` property */
  'inputs.portable-text.invalid-value.missing-or-invalid-markdefs.description':
    'บล็อกข้อความที่มีคีย์ <code>{{key}}</code> มีคุณสมบัติ `markDefs` ที่ไม่ถูกต้องหรือหายไป',
  /** Action presented when the Portable Text field value is invalid, when child with key `{{key}}` is missing a `_type` property  */
  'inputs.portable-text.invalid-value.missing-type.action': 'ลบบล็อก',
  /** Text explaining that the Portable Text field value is invalid, when child with key `{{key}}` is missing a `_type` property  */
  'inputs.portable-text.invalid-value.missing-type.description':
    'บล็อกที่มีคีย์ <code>{{key}}</code> ไม่มีชื่อประเภท',
  /** Action presented when the Portable Text field value is invalid, when block with key `{{key}}` contains a non-object child at index `{{index}}` */
  'inputs.portable-text.invalid-value.non-object-child.action': 'ลบรายการ',
  /** Text explaining that the Portable Text field value is invalid, when block with key `{{key}}` contains a non-object child at index `{{index}}` */
  'inputs.portable-text.invalid-value.non-object-child.description':
    'รายการที่ดัชนี <code>{{index}}</code> ของบล็อกที่มีคีย์ <code>{{key}}</code> ไม่ใช่วัตถุ',
  /** Action presented when the Portable Text field value is invalid, when the Portable Text field is not an array, or the array is empty */
  'inputs.portable-text.invalid-value.not-an-array.action': 'ยกเลิกค่า',
  /** Text explaining that the Portable Text field value is invalid, when the Portable Text field is not an array, or the array is empty */
  'inputs.portable-text.invalid-value.not-an-array.description':
    'ค่าต้องเป็นอาร์เรย์ของบล็อกข้อความพกพาหรือไม่กำหนด',
  /** Action presented when the Portable Text field value is invalid, when child at `{{index}}` is not an object */
  'inputs.portable-text.invalid-value.not-an-object.action': 'ลบรายการ',
  /** Text explaining that the Portable Text field value is invalid, when child at `{{index}}` is not an object */
  'inputs.portable-text.invalid-value.not-an-object.description':
    'รายการที่ <code>{{index}}</code> ไม่ใช่วัตถุ,',
  /** Action presented when the Portable Text field value is invalid, when block with key `{{key}}` contains marks (`{{orphanedMarks}}`) that are not supported by the current schema */
  'inputs.portable-text.invalid-value.orphaned-marks.action': 'ลบเครื่องหมายที่ไม่ได้รับอนุญาต',
  /** Text explaining that the Portable Text field value is invalid, when block with key `{{key}}` contains marks (`{{orphanedMarks}}`) that are not supported by the current schema */
  'inputs.portable-text.invalid-value.orphaned-marks.description':
    'บล็อกข้อความที่มีคีย์ <code>{{key}}</code> มีเครื่องหมาย <code>({{orphanedMarks, list}})</code> ที่ไม่ได้รับอนุญาตจากสคีมา',
  /** Title for the alert indicating that the Portable Text field has an invalid value */
  'inputs.portable-text.invalid-value.title': 'ค่าข้อความพกพาไม่ถูกต้อง',
  /** Title of "bulleted" list type */
  'inputs.portable-text.list-type.bullet': 'รายการแบบจุด',
  /** Title of numbered list type */
  'inputs.portable-text.list-type.number': 'รายการแบบตัวเลข',
  /** Title of the "h1" block style */
  'inputs.portable-text.style.h1': 'หัวข้อ 1',
  /** Title of the "h2" block style */
  'inputs.portable-text.style.h2': 'หัวข้อ 2',
  /** Title of the "h3" block style */
  'inputs.portable-text.style.h3': 'หัวข้อ 3',
  /** Title of the "h4" block style */
  'inputs.portable-text.style.h4': 'หัวข้อ 4',
  /** Title of the "h5" block style */
  'inputs.portable-text.style.h5': 'หัวข้อ 5',
  /** Title of the "h6" block style */
  'inputs.portable-text.style.h6': 'หัวข้อ 6',
  /** Title shown when multiple blocks of varying styles is selected */
  'inputs.portable-text.style.multiple': 'หลายอย่าง',
  /** Title of fallback when no style is given for a block */
  'inputs.portable-text.style.none': 'ไม่มีสไตล์',
  /** Title of the "normal" block style */
  'inputs.portable-text.style.normal': 'ปกติ',
  /** Title of the "quote" block style */
  'inputs.portable-text.style.quote': 'อ้างอิง',
  /** Label for action to clear the current value of the reference field */
  'inputs.reference.action.clear': 'ล้าง',
  /** Label for action to create a new document from the reference input */
  'inputs.reference.action.create-new-document': 'สร้างใหม่',
  /** Label for action to create a new document from the reference input, when there are multiple templates or document types to choose from */
  'inputs.reference.action.create-new-document-select': 'สร้างใหม่…',
  /** Label for action to duplicate the current item to a new item (used within arrays) */
  'inputs.reference.action.duplicate': 'ทำซ้ำ',
  /** Label for action that opens the referenced document in a new tab */
  'inputs.reference.action.open-in-new-tab': 'เปิดในแท็บใหม่',
  /** Label for action to remove the reference from an array */
  'inputs.reference.action.remove': 'ลบ',
  /** Label for action to replace the current value of the field */
  'inputs.reference.action.replace': 'แทนที่',
  /** Label for action to cancel a previously initiated replace action  */
  'inputs.reference.action.replace-cancel': 'ยกเลิกการแทนที่',
  /** The cross-dataset reference field currently has a reference, but the feature has been disabled since it was created. This explains what can/cannot be done in its current state. */
  'inputs.reference.cross-dataset.feature-disabled-actions':
    'คุณยังสามารถล้างการอ้างอิงที่มีอยู่ในฟิลด์นี้ได้ แต่ไม่สามารถเปลี่ยนไปยังเอกสารอื่นได้ตราบใดที่ฟีเจอร์นี้ถูกปิดใช้งาน',
  /** A cross-dataset reference field exists but the feature has been disabled. A <DocumentationLink> component is available. */
  'inputs.reference.cross-dataset.feature-disabled-description':
    'ฟีเจอร์นี้ถูกปิดใช้งาน อ่านวิธีการเปิดใช้งานใน <DocumentationLink>เอกสารประกอบ</DocumentationLink>',
  /** Title for a warning telling the user that the current project does not have the "cross dataset references" feature */
  'inputs.reference.cross-dataset.feature-unavailable-title':
    'ฟีเจอร์ที่ไม่สามารถใช้งานได้: การอ้างอิงข้ามชุดข้อมูล',
  /** The cross-dataset reference points to a document with an invalid type  */
  'inputs.reference.cross-dataset.invalid-type':
    'เอกสารที่อ้างอิงมีประเภทที่ไม่ถูกต้อง ({{typeName}}) <JsonValue/>',
  /** The referenced document will open in a new tab (due to external studio) */
  'inputs.reference.document-opens-in-new-tab': 'เอกสารนี้จะเปิดในแท็บใหม่',
  /** Error title for when the document is unavailable (for any possible reason) */
  'inputs.reference.error.document-unavailable-title': 'เอกสารไม่สามารถใช้งานได้',
  /** Error title for when the referenced document failed to be loaded */
  'inputs.reference.error.failed-to-load-document-title': 'ไม่สามารถโหลดเอกสารที่อ้างอิงได้',
  /** Error title for when the reference search returned a document that is not an allowed type for the field */
  'inputs.reference.error.invalid-search-result-type-title':
    'การค้นหาส่งคืนประเภทที่ไม่ถูกต้องสำหรับการอ้างอิงนี้: "{{returnedType}}"',
  /** Error description for when the document referenced is not one of the types declared as allowed target types in schema */
  'inputs.reference.error.invalid-type-description':
    'เอกสารที่อ้างอิง (<code>{{documentId}}</code>) เป็นประเภท <code>{{actualType}}</code> ตามสคีมา เอกสารที่อ้างอิงสามารถเป็นได้เฉพาะประเภท <AllowedTypes />',
  /** Error title for when the document referenced is not one of the types declared as allowed target types in schema */
  'inputs.reference.error.invalid-type-title': 'เอกสารประเภทที่ไม่ถูกต้อง',
  /** Error description for when the user does not have permissions to read the referenced document */
  'inputs.reference.error.missing-read-permissions-description':
    'ไม่สามารถเข้าถึงเอกสารที่อ้างอิงได้เนื่องจากสิทธิ์ไม่เพียงพอ',
  /** Error title for when the user does not have permissions to read the referenced document */
  'inputs.reference.error.missing-read-permissions-title': 'สิทธิ์ไม่เพียงพอ',
  /** Error description for when the current reference value points to a document that does not exist (on weak references) */
  'inputs.reference.error.nonexistent-document-description':
    'เอกสารที่อ้างอิงไม่มีอยู่ (ID: <code>{{documentId}}</code>) คุณสามารถลบการอ้างอิงหรือแทนที่ด้วยเอกสารอื่น',
  /** Error title for when the current reference value points to a document that does not exist (on weak references) */
  'inputs.reference.error.nonexistent-document-title': 'ไม่พบ',
  /** Label for button that clears the reference when it points to a document that does not exist (on weak references) */
  'inputs.reference.error.nonexistent-document.clear-button-label': 'ล้าง',
  /** Error title for when the search for a reference failed. Note that the message sent by the backend may not be localized. */
  'inputs.reference.error.search-failed-title': 'การค้นหาอ้างอิงล้มเหลว',
  /** Alternative text for the image shown in cross-dataset reference input */
  'inputs.reference.image-preview-alt-text': 'ตัวอย่างภาพของเอกสารที่อ้างถึง',
  /** Description for alert shown when a reference in a live-edit document is marked as being weak, the referenced document exists, AND the reference is supposed to be have been strengthened on publish */
  'inputs.reference.incomplete-reference.finalize-action-description':
    '<strong>{{referencedDocument}}</strong> ได้รับการเผยแพร่และการอ้างอิงนี้ควรจะถูกสรุปให้เสร็จสิ้นแล้ว',
  /** Title for alert shown when a reference in a live-edit document is marked as being weak, the referenced document exists, AND the reference is supposed to be have been strengthened on publish */
  'inputs.reference.incomplete-reference.finalize-action-title': 'สรุปการอ้างอิง',
  /** Description for alert shown when a reference in a live-edit document points to a document that exists and has been published, but the reference is still marked as weak */
  'inputs.reference.incomplete-reference.strengthen-action-description':
    '<strong>{{referencedDocument}}</strong> ได้รับการเผยแพร่และการอ้างอิงนี้ควรจะถูกเปลี่ยนเป็นการอ้างอิงที่แข็งแกร่ง',
  /** Title for alert shown when a reference in a live-edit document points to a document that exists and has been published, but the reference is still marked as weak */
  'inputs.reference.incomplete-reference.strengthen-action-title':
    'เปลี่ยนเป็นการอ้างอิงที่แข็งแกร่ง',
  /** Label for button that triggers the action that strengthen a reference */
  'inputs.reference.incomplete-reference.strengthen-button-label':
    'เปลี่ยนเป็นการอ้างอิงที่แข็งแกร่ง',
  /** Label for button that triggers a retry attempt for reference metadata  */
  'inputs.reference.metadata-error.retry-button-label': 'ลองใหม่',
  /** Title for alert shown when reference metadata fails to be loaded */
  'inputs.reference.metadata-error.title': 'ไม่สามารถโหลดข้อมูลอ้างอิงได้',
  /** Message shown when no documents were found that matched the given search string */
  'inputs.reference.no-results-for-query': 'ไม่มีผลลัพธ์สำหรับ <strong>“{{searchTerm}}”</strong>',
  /** Text for tooltip showing when a document was edited, using relative time (eg "how long ago was it edited?") */
  'inputs.reference.preview.edited-at-time': 'แก้ไข <RelativeTime/>',
  /** Accessibility label for icon indicating that document does _not_ have any unpublished changes */
  'inputs.reference.preview.has-no-unpublished-changes-aria-label':
    'ไม่มีการแก้ไขที่ยังไม่ได้เผยแพร่',
  /** Accessibility label for icon indicating that document has unpublished changes */
  'inputs.reference.preview.has-unpublished-changes-aria-label': 'แก้ไขแล้ว',
  /** Accessibility label for icon indicating that document does _not_ have a published version */
  'inputs.reference.preview.is-not-published-aria-label': 'ยังไม่ได้เผยแพร่',
  /** Accessibility label for icon indicating that document has a published version */
  'inputs.reference.preview.is-published-aria-label': 'เผยแพร่แล้ว',
  /** Text for tooltip indicating that a document has no unpublished edits */
  'inputs.reference.preview.no-unpublished-edits': 'ไม่มีการแก้ไขที่ยังไม่ได้เผยแพร่',
  /** Text for tooltip indicating that a document has not yet been published */
  'inputs.reference.preview.not-published': 'ยังไม่ได้เผยแพร่',
  /** Text for tooltip showing when a document was published, using relative time (eg "how long ago was it published?") */
  'inputs.reference.preview.published-at-time': 'เผยแพร่ <RelativeTime/>',
  /** The referenced document no longer exist and might have been deleted (for weak references) */
  'inputs.reference.referenced-document-does-not-exist':
    'เอกสารที่อ้างถึงไม่มีอยู่อีกต่อไปและอาจถูกลบไปแล้ว (รหัสเอกสาร: <code>{{documentId}}</code>).',
  /** The referenced document could not be displayed to the user because of insufficient permissions */
  'inputs.reference.referenced-document-insufficient-permissions':
    'ไม่สามารถเข้าถึงเอกสารที่อ้างถึงได้เนื่องจากสิทธิ์ไม่เพียงพอ',
  /** Label for when the reference input is resolving the initial value for an item */
  'inputs.reference.resolving-initial-value': 'กำลังแก้ไขค่าเริ่มต้น...',
  /** Placeholder shown in a reference input with no current value */
  'inputs.reference.search-placeholder': 'พิมพ์เพื่อค้นหา',
  /** Explanation of the consequences of leaving the reference as strong instead of weak */
  'inputs.reference.strength-mismatch.is-strong-consquences':
    'จะไม่สามารถลบเอกสารที่อ้างถึงได้โดยไม่ต้องลบการอ้างอิงนี้ออกหรือเปลี่ยนเป็นการอ้างอิงที่อ่อนแอก่อน',
  /** Description for alert shown when a reference is supposed to be weak, but the actual value is strong */
  'inputs.reference.strength-mismatch.is-strong-description':
    'การอ้างอิงนี้เป็น <em>แข็งแกร่ง</em> แต่ตามโครงสร้างปัจจุบันควรจะเป็น <em>อ่อนแอ</em>',
  /** Explanation of the consequences of leaving the reference as weak instead of strong */
  'inputs.reference.strength-mismatch.is-weak-consquences':
    'สิ่งนี้ทำให้สามารถลบเอกสารที่อ้างอิงได้โดยไม่ต้องลบการอ้างอิงนี้ก่อน ทำให้ฟิลด์นี้อ้างอิงถึงเอกสารที่ไม่มีอยู่จริง',
  /** Description for alert shown when a reference is supposed to be strong, but the actual value is weak */
  'inputs.reference.strength-mismatch.is-weak-description':
    'การอ้างอิงนี้เป็น <em>อ่อนแอ</em> แต่ตามสคีมาปัจจุบันควรจะเป็น <em>แข็งแรง</em>',
  /** Label for button that triggers the action that strengthens a reference on strength mismatch */
  'inputs.reference.strength-mismatch.strengthen-button-label': 'แปลงเป็นการอ้างอิงแบบแข็งแรง',
  /** Title for alert shown when a reference is supposed to be weak/strong, but the actual value is the opposite of what it is supposed to be */
  'inputs.reference.strength-mismatch.title': 'ความไม่ตรงกันของความแข็งแรงในการอ้างอิง',
  /** Label for button that triggers the action that weakens a reference on strength mismatch */
  'inputs.reference.strength-mismatch.weaken-button-label': 'แปลงเป็นการอ้างอิงแบบอ่อนแอ',
  /** Action message for generating the slug */
  'inputs.slug.action.generate': 'สร้าง',
  /** Loading message for when the input is actively generating a slug */
  'inputs.slug.action.generating': 'กำลังสร้าง…',
  /** Error message for when the source to generate a slug from is missing */
  'inputs.slug.error.missing-source':
    'ไม่มีแหล่งที่มา ตรวจสอบแหล่งที่มาในประเภท {{schemaType}} ในสคีมา',
  /** Placeholder for an empty tag input */
  'inputs.tags.placeholder': 'ใส่แท็กและกด ENTER…',
  /** Placeholder for an empty tag input on touch devices */
  'inputs.tags.placeholder_touch': 'ใส่แท็ก…',
  /** Convert to `{{targetType}}` */
  'inputs.untyped-value.convert-button.text': 'แปลงเป็น <code>{{targetType}}</code>',
  /** Encountered an object value without a <code>_type</code> property. */
  'inputs.untyped-value.description': 'พบค่าของวัตถุที่ไม่มีคุณสมบัติ <code>_type</code>',
  /** Either remove the <code>name</code> property of the object declaration, or set <code>_type</code> property on items. */
  'inputs.untyped-value.details.description':
    'ลบคุณสมบัติ <code>name</code> ออกจากการประกาศวัตถุ หรือตั้งค่าคุณสมบัติ <code>_type</code> ในรายการ',
  /** Current value (<code>object</code>): */
  'inputs.untyped-value.details.json-dump-prefix': 'ค่าปัจจุบัน (<code>object</code>):',
  /** The following types are valid here according to schema: */
  'inputs.untyped-value.details.multi-type-description': 'ประเภทต่อไปนี้ถูกต้องที่นี่ตามสคีมา:',
  /** Developer info */
  'inputs.untyped-value.details.title': 'ข้อมูลสำหรับนักพัฒนา',
  /** Property value missing <code>_type</code> */
  'inputs.untyped-value.title': 'คุณสมบัติของค่าที่ไม่มี <code>_type</code>',
  /** Unset value */
  'inputs.untyped-value.unset-item-button.text': 'ยกเลิกการตั้งค่า',

  /** The fallback explanation if no context is provided */
  'insufficient-permissions-message.not-authorized-explanation':
    'คุณไม่มีสิทธิ์เข้าถึงคุณสมบัตินี้',
  /** The explanation when unable to create any document at all */
  'insufficient-permissions-message.not-authorized-explanation_create-any-document':
    'คุณไม่มีสิทธิ์สร้างเอกสาร',
  /** The explanation when unable to create a particular document */
  'insufficient-permissions-message.not-authorized-explanation_create-document':
    'คุณไม่มีสิทธิ์สร้างเอกสารนี้',
  /** The explanation when unable to create a particular type of document */
  'insufficient-permissions-message.not-authorized-explanation_create-document-type':
    'คุณไม่มีสิทธิ์สร้างเอกสารประเภทนี้',
  /** The explanation when unable to create a new reference in a document */
  'insufficient-permissions-message.not-authorized-explanation_create-new-reference':
    'คุณไม่มีสิทธิ์สร้างการอ้างอิงใหม่',
  /** The explanation when unable to delete a particular document */
  'insufficient-permissions-message.not-authorized-explanation_delete-document':
    'คุณไม่มีสิทธิ์ลบเอกสารนี้',
  /** The explanation when unable to discard changes in a particular document */
  'insufficient-permissions-message.not-authorized-explanation_discard-changes':
    'คุณไม่มีสิทธิ์ทิ้งการเปลี่ยนแปลงในเอกสารนี้',
  /** The explanation when unable to duplicate a particular document */
  'insufficient-permissions-message.not-authorized-explanation_duplicate-document':
    'คุณไม่มีสิทธิ์ทำสำเนาเอกสารนี้',
  /** The explanation when unable to publish a particular document */
  'insufficient-permissions-message.not-authorized-explanation_publish-document':
    'คุณไม่มีสิทธิ์เผยแพร่เอกสารนี้',
  /** The explanation when unable to unpublish a particular document */
  'insufficient-permissions-message.not-authorized-explanation_unpublish-document':
    'คุณไม่มีสิทธิ์ในการยกเลิกการเผยแพร่เอกสารนี้',
  /** Appears after the not-authorized message. Lists the current roles. */
  'insufficient-permissions-message.roles': 'บทบาทของคุณ: <Roles/>',
  /** The title for the insufficient permissions message component */
  'insufficient-permissions-message.title': 'สิทธิ์ไม่เพียงพอ',

  /** Unexpected error: `{{error}}` */
  'member-field-error.unexpected-error': 'เกิดข้อผิดพลาดที่ไม่คาดคิด: {{error}}',

  /** Button label for "Create new document" button */
  'new-document.button': 'สร้าง',
  /**
   * Tooltip message displayed when hovering/activating the "Create new document" action,
   * when there are templates/types available for creation
   */
  'new-document.create-new-document-label': 'เอกสารใหม่…',
  /** Placeholder for the "filter" input within the new document menu */
  'new-document.filter-placeholder': 'กรอง',
  /** Loading indicator text within the new document menu */
  'new-document.loading': 'กำลังโหลด…',
  /** Accessibility label for the list displaying options in the new document menu */
  'new-document.new-document-aria-label': 'เอกสารใหม่',
  /** Message for when there are no document type options in the new document menu */
  'new-document.no-document-types-found': 'ไม่พบประเภทเอกสาร',
  /**
   * Tooltip message displayed when hovering/activating the "Create new document" action,
   * when there are no templates/types to create from
   */
  'new-document.no-document-types-label': 'ไม่มีประเภทเอกสาร',
  /** Message for when no results are found for a specific search query in the new document menu */
  'new-document.no-results': 'ไม่พบผลลัพธ์สำหรับ <strong>{{searchQuery}}</strong>',
  /** Aria label for the button that opens the "Create new document" popover/dialog */
  'new-document.open-dialog-aria-label': 'สร้างเอกสารใหม่',
  /** Title for "Create new document" dialog */
  'new-document.title': 'สร้างเอกสารใหม่',

  /** Label for action to manage members of the current studio project */
  'presence.action.manage-members': 'จัดการสมาชิก',
  /** Accessibility label for presence menu button */
  'presence.aria-label': 'ใครอยู่ที่นี่',
  /** Message description for when no one else is currently present */
  'presence.no-one-else-description': 'เชิญคนเข้าโปรเจ็กต์เพื่อดูสถานะออนไลน์ของพวกเขา',
  /** Message title for when no one else is currently present */
  'presence.no-one-else-title': 'ไม่มีคนอื่นอยู่ที่นี่',
  /** Message for when a user is not in a document (displayed in the global presence menu) */
  'presence.not-in-a-document': 'ไม่ได้อยู่ในเอกสาร',
  /** Tooltip content text for presence menu button */
  'presence.tooltip-content': undefined, // 'Who is here'

  /** Fallback title shown when a preview does not provide a title */
  'preview.default.title-fallback': 'ไม่มีชื่อ',
  /** Fallback preview value for types that have "no value" (eg null, undefined) */
  'preview.fallback.no-value': '(ไม่มีค่า)',
  /** Alternative text for image being shown while image is being uploaded, in previews */
  'preview.image.file-is-being-uploaded.alt-text': 'กำลังอัปโหลดภาพ',

  /* Relative time, just now */
  'relative-time.just-now': 'เมื่อกี้นี้',

  /** Accessibility label to open search action when the search would go fullscreen (eg on narrower screens) */
  'search.action-open-aria-label': 'เปิดการค้นหา',
  /** Action label for adding a search filter */
  'search.action.add-filter': 'เพิ่มตัวกรอง',
  /** Action label for clearing search filters */
  'search.action.clear-filters': 'ล้างตัวกรอง',
  /** Label for action to clear recent searches */
  'search.action.clear-recent-searches': 'ล้างการค้นหาล่าสุด',
  /** Accessibility label for action to clear all currently applied document type filters */
  'search.action.clear-type-filters-aria-label': 'ล้างตัวกรองที่เลือก',
  /** Label for action to clear all currently applied document type filters */
  'search.action.clear-type-filters-label': 'ล้าง',
  /** Accessibility label for when the search is full screen (on narrow screens) and you want to close the search */
  'search.action.close-search-aria-label': 'ปิดการค้นหา',
  /** Accessibility label for filtering by document type */
  'search.action.filter-by-document-type-aria-label': 'กรองตามประเภทเอกสาร',
  /** Accessibility action label for removing an already applied search filter */
  'search.action.remove-filter-aria-label': 'ลบตัวกรอง',
  /**
   * Text displayed when either no document type(s) have been selected, or we need a fallback,
   * eg "Search for all types".
   */
  'search.action.search-all-types': 'ค้นหาเอกสารทั้งหมด',
  /**
   * Text displayed when we are able to determine one or more document types that will be used for
   * searching, and can fit within the space assigned by the design.
   */
  'search.action.search-specific-types': 'ค้นหาสำหรับ {{types, list}}',
  /** Dialog title for action to select an asset of unknown type */
  'search.action.select-asset': 'เลือกสินทรัพย์',
  /** Dialog title for action to select a file asset */
  'search.action.select-asset_file': 'เลือกไฟล์',
  /** Dialog title for action to select an image asset */
  'search.action.select-asset_image': 'เลือกรูปภาพ',
  /** Accessibility label for when the search is full screen (on narrow screens) and you want to hide filters */
  'search.action.toggle-filters-aria-label_hide': 'ซ่อนตัวกรอง',
  /** Accessibility label for when the search is full screen (on narrow screens) and you want to show filters */
  'search.action.toggle-filters-aria-label_show': 'แสดงตัวกรอง',
  /** Label for when the search is full screen (on narrow screens) and you want to hide filters */
  'search.action.toggle-filters-label_hide': 'ซ่อนตัวกรอง',
  /** Label for when the search is full screen (on narrow screens) and you want to show filters */
  'search.action.toggle-filters-label_show': 'แสดงตัวกรอง',
  /** Tooltip text for the global search button */
  'search.button.tooltip': 'ค้นหา',
  /**
   * A list of provided types (use `list` formatter preferably).
   */
  'search.document-type-list': '{{types, list}}',
  /**
   * In the context of a list of document types - no filtering selection has been done,
   * thus the default is "all types".
   */
  'search.document-type-list-all-types': 'ทุกประเภท',
  /** Accessibility label for list displaying the available document types */
  'search.document-types-aria-label': 'ประเภทเอกสาร',
  /** Label for when no document types matching the filter are found */
  'search.document-types-no-matches-found': 'ไม่พบการจับคู่สำหรับ {{filter}}',
  /** Description for error when a filter cannot be displayed, describes that you should check the schema */
  'search.error.display-filter-description':
    'นี่อาจบ่งบอกถึงตัวเลือกที่ไม่ถูกต้องที่กำหนดไว้ในสคีมาของคุณ',
  /** Title for error when a filter cannot be displayed (mainly a developer-oriented error) */
  'search.error.display-filter-title': 'เกิดข้อผิดพลาดขณะแสดงตัวกรองนี้',
  /** Description for error when no valid asset source is found, describes that you should check the the current studio config */
  'search.error.no-valid-asset-source-check-config-description':
    'โปรดตรวจสอบว่าได้เปิดใช้งานในไฟล์การกำหนดค่าสตูดิโอของคุณ',
  /** Description for error when no valid asset source is found, describes that only the default asset is supported */
  'search.error.no-valid-asset-source-only-default-description':
    'ปัจจุบัน รองรับเฉพาะแหล่งทรัพย์สินเริ่มต้นเท่านั้น',
  /** Title for error when no valid asset sources found */
  'search.error.no-valid-asset-source-title': 'ไม่พบแหล่งทรัพย์สินที่ถูกต้อง',
  /** Helpful description for when search returned an error that we are not able to describe in detail */
  'search.error.unspecified-error-help-description': 'โปรดลองอีกครั้งหรือตรวจสอบการเชื่อมต่อของคุณ',
  /** Title label for when search returned an error that we are not able to describe in detail */
  'search.error.unspecified-error-title': 'เกิดข้อผิดพลาดบางอย่างขณะค้นหา',
  /**
   * Label for "All fields", a label that appears above the list of available fields when filtering.
   * If one or more document type has been chosen as filter, this label is replaced with a group of
   * fields per selected document type
   */
  'search.filter-all-fields-header': 'ทุกฟิลด์',
  /** Label for the action of changing from one file to a different file in asset search filter */
  'search.filter-asset-change_file': 'เปลี่ยนไฟล์',
  /** Label for the action of changing from one image to a different image in asset search filter */
  'search.filter-asset-change_image': 'เปลี่ยนรูปภาพ',
  /** Label for the action of clearing the currently selected asset in an image/file filter */
  'search.filter-asset-clear': 'ล้าง',
  /** Label for the action of selecting a file in asset search filter */
  'search.filter-asset-select_file': 'เลือกไฟล์',
  /** Label for the action of selecting an image in asset search filter */
  'search.filter-asset-select_image': 'เลือกรูปภาพ',
  /** Label for boolean filter - false */
  'search.filter-boolean-false': 'เท็จ',
  /** Label for boolean filter - true */
  'search.filter-boolean-true': 'จริง',
  /** Accessibility label for list that lets you filter fields by title, when adding a new filter in search */
  'search.filter-by-title-aria-label': 'กรองตามชื่อเรื่อง',
  /** Accessibility label for date filter input */
  'search.filter-date-aria-label': 'วันที่',
  /** Accessibility label for selecting end date on the date range search filter */
  'search.filter-date-range-end-date-aria-label': 'วันที่สิ้นสุด',
  /** Accessibility label for selecting start date on the date range search filter */
  'search.filter-date-range-start-date-aria-label': 'วันที่เริ่มต้น',
  /**
   * Label for "Days"/"Months"/"Years" when selecting it as unit in "X days ago" search filter.
   * Capitalized, as it would be listed in a dropdown.
   */
  'search.filter-date-unit_days': 'วัน',
  'search.filter-date-unit_months': 'เดือน',
  'search.filter-date-unit_years': 'ปี',
  /** Accessibility label for selecting the unit (day/month/year) when adding "X days ago" search filter */
  'search.filter-date-unit-aria-label': 'เลือกหน่วย',
  /** Accessibility label for the input value (days/months/years) when adding "X days ago" search filter */
  'search.filter-date-value-aria-label': 'ค่าหน่วย',
  /** Label for "field description" shown in tooltip when navigating list of possible fields to filter */
  'search.filter-field-tooltip-description': 'คำอธิบายฟิลด์',
  /** Label for "field name" shown in tooltip when navigating list of possible fields to filter */
  'search.filter-field-tooltip-name': 'ชื่อฟิลด์',
  /** Label for "Used in document types", a list of the document types a field appears in. Shown in tooltip when navigating list of possible fields to filter */
  'search.filter-field-tooltip-used-in-document-types': 'ใช้ในประเภทเอกสาร',
  /** Label for when no fields/filters are found for the given term */
  'search.filter-no-matches-found': 'ไม่พบการจับคู่สำหรับ {{filter}}',
  /** Placeholder value for maximum numeric value filter */
  'search.filter-number-max-value-placeholder': 'ค่าสูงสุด',
  /** Placeholder value for minimum numeric value filter */
  'search.filter-number-min-value-placeholder': 'ค่าต่ำสุด',
  /** Placeholder value for the number filter */
  'search.filter-number-value-placeholder': 'ค่า',
  /** Placeholder for the "Filter" input, when narrowing possible fields/filters */
  'search.filter-placeholder': 'กรอง',
  /** Label for the action of clearing the currently selected document in a reference filter */
  'search.filter-reference-clear': 'ล้าง',
  /**
   * Label for "shared fields", a label that appears above a list of fields that all filtered types
   * have in common, when adding a new filter. For instance, if "book" and "employee" both have a
   * "title" field, this field would be listed under "shared fields".
   * */
  'search.filter-shared-fields-header': 'ฟิลด์ที่ใช้ร่วมกัน',
  /** Placeholder value for the string filter */
  'search.filter-string-value-placeholder': 'ค่า',
  /** Label/placeholder prompting user to select one of the predefined, allowed values for a string field */
  'search.filter-string-value-select-predefined-value': 'เลือก...',
  /** Accessibility label for the "Filters" list, that is shown when using "Add filter" in search (plural) */
  'search.filters-aria-label_other': 'ตัวกรอง',
  /** Label for instructions on how to use the search - displayed when no recent searches are available */
  'search.instructions': 'ใช้ <ControlsIcon/> เพื่อปรับแต่งการค้นหาของคุณ',
  /** Helpful description for when no search results are found */
  'search.no-results-help-description': 'ลองใช้คำค้นหาอื่นหรือปรับตัวกรองของคุณ',
  /** Title label for when no search results are found */
  'search.no-results-title': 'ไม่พบผลลัพธ์',
  'search.operator.array-count-equal.description_other':
    '<Field/> <Operator>มี</Operator> <Value>{{count}} รายการ</Value>',
  'search.operator.array-count-equal.name': 'จำนวนเท่ากับ',
  'search.operator.array-count-gt.description_other':
    '<Field/> <Operator>มี ></Operator> <Value>{{count}} รายการ</Value>',
  'search.operator.array-count-gt.name': 'จำนวนมากกว่า',
  'search.operator.array-count-gte.description_other':
    '<Field/> <Operator>มี ≥</Operator> <Value>{{count}} รายการ</Value>',
  'search.operator.array-count-gte.name': 'จำนวนมากกว่าหรือเท่ากับ',
  'search.operator.array-count-lt.description_other':
    '<Field/> <Operator>มี <</Operator> <Value>{{count}} รายการ</Value>',
  'search.operator.array-count-lt.name': 'จำนวนน้อยกว่า',
  'search.operator.array-count-lte.description_other':
    '<Field/> <Operator>มี ≤</Operator> <Value>{{count}} รายการ</Value>',
  'search.operator.array-count-lte.name': 'จำนวนน้อยกว่าหรือเท่ากับ',
  'search.operator.array-count-not-equal.description_other':
    '<Field/> <Operator>ไม่มี</Operator> <Value>{{count}} รายการ</Value>',
  'search.operator.array-count-not-equal.name': 'จำนวนไม่เท่ากับ',
  /**
   * Array should have a count within the range of given filter values.
   * Gets passed `{{from}}` and `{{to}}` values.
   **/
  'search.operator.array-count-range.description':
    '<Field/> <Operator>มีระหว่าง</Operator> <Value>{{from}} → {{to}} รายการ</Value>',
  'search.operator.array-count-range.name': 'จำนวนอยู่ระหว่าง',
  /* Array should include the given value */
  'search.operator.array-list-includes.description':
    '<Field/> <Operator>รวม</Operator> <Value>{{value}}</Value>',
  'search.operator.array-list-includes.name': 'รวม',
  /* Array should not include the given value */
  'search.operator.array-list-not-includes.description':
    '<Field/> <Operator>ไม่รวม</Operator> <Value>{{value}}</Value>',
  'search.operator.array-list-not-includes.name': 'ไม่รวม',
  /* Array should include the given reference */
  'search.operator.array-reference-includes.description':
    '<Field/> <Operator>รวม</Operator> <Value>{{value}}</Value>',
  'search.operator.array-reference-includes.name': 'รวม',
  /* Array should not include the given reference */
  'search.operator.array-reference-not-includes.description':
    '<Field/> <Operator>ไม่รวม</Operator> <Value>{{value}}</Value>',
  'search.operator.array-reference-not-includes.name': 'ไม่รวม',
  /* Asset (file) should be the selected asset */
  'search.operator.asset-file-equal.description':
    '<Field/> <Operator>คือ</Operator> <Value>{{value}}</Value>',
  'search.operator.asset-file-equal.name': 'คือ',
  /* Asset (file) should not be the selected asset */
  'search.operator.asset-file-not-equal.description':
    '<Field/> <Operator>ไม่คือ</Operator> <Value>{{value}}</Value>',
  'search.operator.asset-file-not-equal.name': 'ไม่คือ',
  /* Asset (image) should be the selected asset */
  'search.operator.asset-image-equal.description':
    '<Field/> <Operator>คือ</Operator> <Value>{{value}}</Value>',
  'search.operator.asset-image-equal.name': 'คือ',
  /* Asset (image) should not be the selected asset */
  'search.operator.asset-image-not-equal.description':
    '<Field/> <Operator>ไม่คือ</Operator> <Value>{{value}}</Value>',
  'search.operator.asset-image-not-equal.name': 'ไม่คือ',
  /**
   * Boolean value should be the given filter value (true/false).
   * Context passed is `true` and `false`, allowing for more specific translations:
   * - `search.operator.boolean-equal.description_true`
   * - `search.operator.boolean-equal.description_false`
   */
  'search.operator.boolean-equal.description':
    '<Field/> <Operator>คือ</Operator> <Value>{{value}}</Value>',
  'search.operator.boolean-equal.name': 'คือ',
  /* Date should be after (later than) given filter value */
  'search.operator.date-after.description':
    '<Field/> <Operator>หลังจาก</Operator> <Value>{{value}}</Value>',
  'search.operator.date-after.name': 'หลังจาก',
  /* Date should be before (earlier than) given filter value */
  'search.operator.date-before.description':
    '<Field/> <Operator>ก่อน</Operator> <Value>{{value}}</Value>',
  'search.operator.date-before.name': 'ก่อน',
  /* Date should be the given filter value */
  'search.operator.date-equal.description':
    '<Field/> <Operator>คือ</Operator> <Value>{{value}}</Value>',
  'search.operator.date-equal.name': 'คือ',
  /* Date should be within the given filter value range (eg "within the last X days") */
  'search.operator.date-last.description':
    '<Field/> <Operator>อยู่ในช่วงสุดท้าย</Operator> <Value>{{value}}</Value>',
  'search.operator.date-last.name': 'สุดท้าย',
  /* Date should not be the given filter value */
  'search.operator.date-not-equal.description':
    '<Field/> <Operator>ไม่คือ</Operator> <Value>{{value}}</Value>',
  'search.operator.date-not-equal.name': 'ไม่คือ',
  /* Date should be within the range of given filter values */
  'search.operator.date-range.description': '<Field/> <Operator>อยู่ระหว่าง</Operator> <Value/>',
  'search.operator.date-range.name': 'อยู่ระหว่าง',
  /* Date and time should be after (later than) given filter value */
  'search.operator.date-time-after.description':
    '<Field/> <Operator>หลังจาก</Operator> <Value>{{value}}</Value>',
  'search.operator.date-time-after.name': 'หลังจาก',
  /* Date and time should be before (earlier than) given filter value */
  'search.operator.date-time-before.description':
    '<Field/> <Operator>ก่อน</Operator> <Value>{{value}}</Value>',
  'search.operator.date-time-before.name': 'ก่อน',
  /* Date and time should be the given filter value */
  'search.operator.date-time-equal.description':
    '<Field/> <Operator>คือ</Operator> <Value>{{value}}</Value>',
  'search.operator.date-time-equal.name': 'คือ',
  /* Date and time should be within the given filter value range (eg "within the last X days") */
  'search.operator.date-time-last.description':
    '<Field/> <Operator>อยู่ในช่วง</Operator> <Value>{{value}}</Value>',
  'search.operator.date-time-last.name': 'ช่วงล่าสุด',
  /* Date and time should not be the given filter value */
  'search.operator.date-time-not-equal.description':
    '<Field/> <Operator>ไม่ใช่</Operator> <Value>{{value}}</Value>',
  'search.operator.date-time-not-equal.name': 'ไม่ใช่',
  /* Date and time should be within the range of given filter values */
  'search.operator.date-time-range.description':
    '<Field/> <Operator>อยู่ระหว่าง</Operator> <Value/>',
  'search.operator.date-time-range.name': 'อยู่ระหว่าง',
  /* Value should be defined */
  'search.operator.defined.description': '<Field/> <Operator>คือ</Operator> <Value>ไม่ว่าง</Value>',
  'search.operator.defined.name': 'ไม่ว่าง',
  /* Value should not be defined */
  'search.operator.not-defined.description':
    '<Field/> <Operator>คือ</Operator> <Value>ว่าง</Value>',
  'search.operator.not-defined.name': 'ว่าง',
  /* Number should be the given filter value */
  'search.operator.number-equal.description':
    '<Field/> <Operator>คือ</Operator> <Value>{{value}}</Value>',
  'search.operator.number-equal.name': 'คือ',
  /* Number should be greater than given filter value */
  'search.operator.number-gt.description':
    '<Field/> <Operator>มากกว่า</Operator> <Value>{{value}}</Value>',
  'search.operator.number-gt.name': 'มากกว่า',
  /* Number should be greater than or the given filter value */
  'search.operator.number-gte.description':
    '<Field/> <Operator>≥</Operator> <Value>{{value}}</Value>',
  'search.operator.number-gte.name': 'มากกว่าหรือเท่ากับ',
  /* Number should be less than given filter value */
  'search.operator.number-lt.description':
    '<Field/> <Operator><</Operator> <Value>{{value}}</Value>',
  'search.operator.number-lt.name': 'น้อยกว่า',
  /* Number should be less than or the given filter value */
  'search.operator.number-lte.description':
    '<Field/> <Operator>≤</Operator> <Value>{{value}}</Value>',
  'search.operator.number-lte.name': 'น้อยกว่าหรือเท่ากับ',
  /* Number should not be the given filter value */
  'search.operator.number-not-equal.description':
    '<Field/> <Operator>is not</Operator> <Value>{{value}}</Value>',
  'search.operator.number-not-equal.name': 'ไม่เท่ากับ',
  /* Number should be within the range of given filter values */
  'search.operator.number-range.description':
    '<Field/> <Operator>is between</Operator> <Value>{{from}} → {{to}}</Value>',
  'search.operator.number-range.name': 'อยู่ระหว่าง',
  /* Portable Text should contain the given filter value */
  'search.operator.portable-text-contains.description':
    '<Field/> <Operator>contains</Operator> <Value>{{value}}</Value>',
  'search.operator.portable-text-contains.name': 'ประกอบด้วย',
  /* Portable Text should be the given filter value */
  'search.operator.portable-text-equal.description':
    '<Field/> <Operator>is</Operator> <Value>{{value}}</Value>',
  'search.operator.portable-text-equal.name': 'คือ',
  /* Portable Text should not contain the given filter value */
  'search.operator.portable-text-not-contains.description':
    '<Field/> <Operator>does not contain</Operator> <Value>{{value}}</Value>',
  'search.operator.portable-text-not-contains.name': 'ไม่ประกอบด้วย',
  /* Portable Text should not be the given filter value */
  'search.operator.portable-text-not-equal.description':
    '<Field/> <Operator>is not</Operator> <Value>{{value}}</Value>',
  'search.operator.portable-text-not-equal.name': 'ไม่คือ',
  /* References the given asset (file) */
  'search.operator.reference-asset-file.description':
    '<Field/> <Operator>→</Operator> <Value>{{value}}</Value>',
  'search.operator.reference-asset-file.name': 'ไฟล์',
  /* References the given asset (image) */
  'search.operator.reference-asset-image.description':
    '<Field/> <Operator>→</Operator> <Value>{{value}}</Value>',
  'search.operator.reference-asset-image.name': 'รูปภาพ',
  /* References the given document */
  'search.operator.reference-document.description':
    '<Field/> <Operator>→</Operator> <Value>{{value}}</Value>',
  'search.operator.reference-document.name': 'เอกสาร',
  /* Reference should be the given document */
  'search.operator.reference-equal.description':
    '<Field/> <Operator>is</Operator> <Value>{{value}}</Value>',
  'search.operator.reference-equal.name': 'คือ',
  /* Reference should not be the given document */
  'search.operator.reference-not-equal.description':
    '<Field/> <Operator>is not</Operator> <Value>{{value}}</Value>',
  'search.operator.reference-not-equal.name': 'ไม่คือ',
  /* Slug contains the given value */
  'search.operator.slug-contains.description':
    '<Field/> <Operator>contains</Operator> <Value>{{value}}</Value>',
  'search.operator.slug-contains.name': 'ประกอบด้วย',
  /* Slug equals the given filter value */
  'search.operator.slug-equal.description':
    '<Field/> <Operator>คือ</Operator> <Value>{{value}}</Value>',
  'search.operator.slug-equal.name': 'คือ',
  /* Slug does not contain the given value */
  'search.operator.slug-not-contains.description':
    '<Field/> <Operator>ไม่ประกอบด้วย</Operator> <Value>{{value}}</Value>',
  'search.operator.slug-not-contains.name': 'ไม่ประกอบด้วย',
  /* Slug does not equal the given filter value */
  'search.operator.slug-not-equal.description':
    '<Field/> <Operator>ไม่ใช่</Operator> <Value>{{value}}</Value>',
  'search.operator.slug-not-equal.name': 'ไม่ใช่',
  /* String contains the given filter value */
  'search.operator.string-contains.description':
    '<Field/> <Operator>ประกอบด้วย</Operator> <Value>{{value}}</Value>',
  'search.operator.string-contains.name': 'ประกอบด้วย',
  /* String equals the given filter value */
  'search.operator.string-equal.description':
    '<Field/> <Operator>คือ</Operator> <Value>{{value}}</Value>',
  'search.operator.string-equal.name': 'คือ',
  /* String equals one of the predefined allowed values */
  'search.operator.string-list-equal.description':
    '<Field/> <Operator>คือ</Operator> <Value>{{value}}</Value>',
  'search.operator.string-list-equal.name': 'คือ',
  /* String does not equal one of the predefined allowed values */
  'search.operator.string-list-not-equal.description':
    '<Field/> <Operator>ไม่ใช่</Operator> <Value>{{value}}</Value>',
  'search.operator.string-list-not-equal.name': 'ไม่ใช่',
  /* String does not contain the given filter value */
  'search.operator.string-not-contains.description':
    '<Field/> <Operator>ไม่ประกอบด้วย</Operator> <Value>{{value}}</Value>',
  'search.operator.string-not-contains.name': 'ไม่ประกอบด้วย',
  /* String does not equal the given filter value */
  'search.operator.string-not-equal.description':
    '<Field/> <Operator>ไม่ใช่</Operator> <Value>{{value}}</Value>',
  'search.operator.string-not-equal.name': 'ไม่ใช่',
  /** Label for the "Best match" search ordering type */
  'search.ordering.best-match-label': 'ตรงกับที่สุด',
  /** Label for the "Created: Oldest first" search ordering type */
  'search.ordering.created-ascending-label': 'สร้าง: เก่าที่สุดก่อน',
  /** Label for the "Created: Newest first" search ordering type */
  'search.ordering.created-descending-label': 'สร้าง: ใหม่ที่สุดก่อน',
  /** Label for the "Updated: Oldest first" search ordering type */
  'search.ordering.updated-ascending-label': 'อัปเดต: เก่าที่สุดก่อน',
  /** Label for the "Updated: Newest first" search ordering type */
  'search.ordering.updated-descending-label': 'อัปเดต: ใหม่ที่สุดก่อน',
  /** Placeholder text for the global search input field */
  'search.placeholder': 'ค้นหา',
  /** Accessibility label for the recent searches section, shown when no valid search terms has been given */
  'search.recent-searches-aria-label': 'การค้นหาล่าสุด',
  /** Label/heading shown for the recent searches section */
  'search.recent-searches-label': 'การค้นหาล่าสุด',
  /** Accessibility label for the search results section, shown when the user has typed valid terms */
  'search.search-results-aria-label': 'ผลการค้นหา',

  /** Accessibility label for the navbar status button */
  'status-button.aria-label': undefined, // 'Configuration status'

  /** Description for error when the timeline for the given document can't be loaded */
  'timeline.error.load-document-changes-description':
    'การทำธุรกรรมประวัติของเอกสารไม่ได้รับผลกระทบ',
  /** Title for error when the timeline for the given document can't be loaded */
  'timeline.error.load-document-changes-title': 'เกิดข้อผิดพลาดขณะเรียกดูการเปลี่ยนแปลงของเอกสาร',
  /** Error description for when the document doesn't have history */
  'timeline.error.no-document-history-description':
    'เมื่อมีการเปลี่ยนแปลงเนื้อหาของเอกสาร รุ่นของเอกสารจะปรากฏในเมนูนี้',
  /** Error title for when the document doesn't have history */
  'timeline.error.no-document-history-title': 'ไม่มีประวัติเอกสาร',
  /** Error prompt when revision cannot be loaded */
  'timeline.error.unable-to-load-revision': 'ไม่สามารถโหลดการแก้ไข',
  /** Label for when the timeline item is the latest in the history */
  'timeline.latest': 'ล่าสุด',
  /** Label for latest version for timeline menu dropdown */
  'timeline.latest-version': 'รุ่นล่าสุด',
  /** The aria-label for the list of revisions in the timeline */
  'timeline.list.aria-label': 'การแก้ไขเอกสาร',
  /** Label for loading history */
  'timeline.loading-history': 'กำลังโหลดประวัติ...',
  /** Label shown in review changes timeline when a document has been created */
  'timeline.operation.created': 'สร้างแล้ว',
  /** Label shown in review changes timeline when a document has been created, with a timestamp */
  'timeline.operation.created_timestamp': 'สร้างเมื่อ: {{timestamp, datetime}}',
  /** Label shown in review changes timeline when a document was initially created */
  'timeline.operation.created-initial': 'สร้างแล้ว',
  /** Label shown in review changes timeline when a document was initially created, with a timestamp */
  'timeline.operation.created-initial_timestamp': 'สร้างเมื่อ: {{timestamp, datetime}}',
  /** Label shown in review changes timeline when a document has been deleted */
  'timeline.operation.deleted': 'ถูกลบ',
  /** Label shown in review changes timeline when a document has been deleted, with a timestamp */
  'timeline.operation.deleted_timestamp': 'ถูกลบเมื่อ: {{timestamp, datetime}}',
  /** Label shown in review changes timeline when a draft has been discarded */
  'timeline.operation.draft-discarded': 'ร่างถูกทิ้ง',
  /** Label shown in review changes timeline when a draft has been discarded, with a timestamp */
  'timeline.operation.draft-discarded_timestamp': 'ร่างถูกทิ้งเมื่อ: {{timestamp, datetime}}',
  /** Label shown in review changes timeline when a draft has been edited */
  'timeline.operation.edited-draft': 'แก้ไขแล้ว',
  /** Label shown in review changes timeline when a draft has been edited, with a timestamp */
  'timeline.operation.edited-draft_timestamp': 'แก้ไขเมื่อ: {{timestamp, datetime}}',
  /** Label shown in review changes timeline when a document has been edited live */
  'timeline.operation.edited-live': 'แก้ไขสด',
  /** Label shown in review changes timeline when a document has been edited live, with a timestamp */
  'timeline.operation.edited-live_timestamp': 'แก้ไขสดเมื่อ: {{timestamp, datetime}}',
  /** Label shown in review changes timeline when a document was published */
  'timeline.operation.published': 'เผยแพร่แล้ว',
  /** Label shown in review changes timeline when a document was published, with a timestamp */
  'timeline.operation.published_timestamp': 'เผยแพร่: {{timestamp, datetime}}',
  /** Label shown in review changes timeline when a document was unpublished */
  'timeline.operation.unpublished': 'ยกเลิกการเผยแพร่',
  /** Label shown in review changes timeline when a document was unpublished, with a timestamp */
  'timeline.operation.unpublished_timestamp': 'ยกเลิกการเผยแพร่: {{timestamp, datetime}}',
  /**
   * Label for determining since which version the changes for timeline menu dropdown are showing.
   * Receives the time label as a parameter (`timestamp`).
   */
  'timeline.since': 'ตั้งแต่: {{timestamp, datetime}}',
  /** Label for missing change version for timeline menu dropdown are showing */
  'timeline.since-version-missing': 'ตั้งแต่: ไม่ทราบเวอร์ชัน',

  /**Aria label for the action buttons in the PTE toolbar */
  'toolbar.portable-text.action-button-aria-label': undefined, // '{{action}}'

  'user-menu.action.free-trial_other': 'เหลืออีก {{count}} วันในการทดลองใช้',
  /** Label for the button showed after trial ended */
  'user-menu.action.free-trial-finished': 'อัพเกรดจากฟรี',
  /** Label for action to invite members to the current sanity project */
  'user-menu.action.invite-members': 'เชิญสมาชิก',
  /** Accessibility label for action to invite members to the current sanity project */
  'user-menu.action.invite-members-aria-label': 'เชิญสมาชิก',
  /** Label for action to manage the current sanity project */
  'user-menu.action.manage-project': 'จัดการโปรเจ็กต์',
  /** Accessibility label for the action to manage the current project */
  'user-menu.action.manage-project-aria-label': 'จัดการโปรเจ็กต์',
  /** Tooltip helper text when portable text annotation is disabled for empty block*/
  'user-menu.action.portable-text.annotation-disabled_empty-block':
    'ไม่สามารถใช้ {{name}} กับบล็อกที่ว่างเปล่า',
  /** Tooltip helper text when portable text annotation is disabled for multiple blocks */
  'user-menu.action.portable-text.annotation-disabled_multiple-blocks':
    'ไม่สามารถใช้ {{name}} กับหลายบล็อก',
  /** Label for action to sign out of the current sanity project */
  'user-menu.action.sign-out': 'ออกจากระบบ',
  /** Title for appearance section for the current studio (dark / light / system scheme) */
  'user-menu.appearance-title': 'รูปลักษณ์',
  /** Label for close menu button for user menu */
  'user-menu.close-menu': 'ปิดเมนู',
  /** Description for using the "dark theme" in the appearance user menu */
  'user-menu.color-scheme.dark-description': 'ใช้รูปลักษณ์สีเข้ม',
  /** Title for using the "dark theme" in the appearance user menu */
  'user-menu.color-scheme.dark-title': 'สีเข้ม',
  /** Description for using the "light theme" in the appearance user menu */
  'user-menu.color-scheme.light-description': 'ใช้รูปลักษณ์สีสว่าง',
  /** Title for using the "light theme" in the appearance user menu */
  'user-menu.color-scheme.light-title': 'สีสว่าง',
  /** Description for using "system apparence" in the appearance user menu */
  'user-menu.color-scheme.system-description': 'ใช้รูปลักษณ์ของระบบ',
  /** Title for using system apparence in the appearance user menu */
  'user-menu.color-scheme.system-title': 'ระบบ',
  /** Title for locale section for the current studio */
  'user-menu.locale-title': 'ภาษา',
  /** Label for tooltip to show which provider the currently logged in user is using */
  'user-menu.login-provider': 'เข้าสู่ระบบด้วย {{providerTitle}}',
  /** Label for open menu button for user menu */
  'user-menu.open-menu': undefined, // 'Open menu'

  /**
   * Label for action to add a workspace (currently a developer-oriented action, as this will
   * lead to the documentation on workspace configuration)
   */
  'workspaces.action.add-workspace': 'เพิ่มพื้นที่ทำงาน',
  /**
   * Label for action to choose a different workspace, in the case where you are not logged in,
   * have selected a workspace, and are faced with the authentication options for the selected
   * workspace. In other words, label for the action shown when you have reconsidered which
   * workspace to authenticate in.
   */
  'workspaces.action.choose-another-workspace': 'เลือกพื้นที่ทำงานอื่น',
  /** Label for heading that indicates that you can choose your workspace */
  'workspaces.choose-your-workspace-label': 'เลือกพื้นที่ทำงานของคุณ',
  /** Label for the workspace menu */
  'workspaces.select-workspace-aria-label': 'เลือกพื้นที่ทำงาน',
  /** Button label for opening the workspace switcher */
  'workspaces.select-workspace-label': 'เลือกพื้นที่ทำงาน',
  /** Tooltip for the workspace menu */
  'workspaces.select-workspace-tooltip': undefined, // 'Select workspace'
  /** Title for Workplaces dropdown menu */
  'workspaces.title': 'พื้นที่ทำงาน',
})
