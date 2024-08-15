import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Text on the field action button to copy a document */
  'copy-paste.field-action-copy-button.document.title': 'คัดลอกเอกสาร',
  /** Text on the field action button to copy a field */
  'copy-paste.field-action-copy-button.field.title': 'คัดลอกฟิลด์',
  /** Text on the field action button to paste a document */
  'copy-paste.field-action-paste-button.document.title': 'วางเอกสาร',
  /** Text on the field action button to paste a field */
  'copy-paste.field-action-paste-button.field.title': 'วางฟิลด์',
  /** The error message that is shown when the clipboard is not supported */
  'copy-paste.on-copy.validation.clipboard-not-supported.title':
    'เบราว์เซอร์ของคุณไม่รองรับการกระทำนี้',
  /** The success message that is shown when a document is copied */
  'copy-paste.on-copy.validation.copy-document-success.title':
    'คัดลอกเอกสาร "{{fieldNames}}" สำเร็จ',
  /** The success message that is shown when a field is copied */
  'copy-paste.on-copy.validation.copy-field_one-success.title':
    'คัดลอกฟิลด์ "{{fieldName}}" สำเร็จ',
  /** The success message that is shown when a array item is copied */
  'copy-paste.on-copy.validation.copy-item_one-success.title': 'ไอเท็ม "{{typeName}}" ถูกคัดลอก',
  /** The error message that is shown when there is no value to copy */
  'copy-paste.on-copy.validation.no-value.title': 'ค่าว่างเปล่า, ไม่มีอะไรให้คัดลอก',
  /** --- On copy --- */
  /** The error message that is shown when schema types are incompatible */
  'copy-paste.on-copy.validation.schema-type-incompatible.title':
    'ไม่สามารถแก้ไขประเภทสคีมาสำหรับเส้นทาง: {{path}}',
  /** The validation message that is shown when array types are incompatible */
  'copy-paste.on-paste.validation.array-type-incompatible.description':
    'ค่าประเภท "{{type}}" ไม่ได้รับอนุญาตในฟิลด์อาร์เรย์นี้',
  /** The validation message that is shown when array values are incompatible */
  'copy-paste.on-paste.validation.array-value-incompatible.description':
    'ค่าประเภท "{{type}}" ไม่ได้รับอนุญาตในฟิลด์อาร์เรย์นี้',
  /** The validation message that is shown when the clipboard is empty */
  'copy-paste.on-paste.validation.clipboard-empty.title': 'ไม่มีอะไรให้วาง',
  /** The validation message that is shown when the clipboard item is invalid */
  'copy-paste.on-paste.validation.clipboard-invalid.title': 'รายการในคลิปบอร์ดไม่ถูกต้อง',
  /** The success message that is shown when a document is pasted */
  'copy-paste.on-paste.validation.document-paste-success.title':
    'อัปเดตเอกสาร "{{fieldNames}}" สำเร็จ',
  /** The success message that is shown when a field is pasted */
  'copy-paste.on-paste.validation.field_one-paste-success.title':
    'อัปเดตฟิลด์ "{{fieldName}}" สำเร็จ',
  /** The validation message that is shown when image files are incompatible */
  'copy-paste.on-paste.validation.image-file-incompatible.description':
    '"{{sourceSchemaType}}" ไม่ได้รับอนุญาตใน "{{targetSchemaType}}"',
  /** The error message that is shown when the MIME type is not accepted */
  'copy-paste.on-paste.validation.mime-type-incompatible.description':
    'ไม่ยอมรับ MIME ประเภท "{{mimeType}}" สำหรับฟิลด์นี้',
  /** The error message that is shown when the MIME type validation fails */
  'copy-paste.on-paste.validation.mime-type-validation-failed.description':
    'การตรวจสอบ MIME ประเภทล้มเหลว',
  /** The warning message that is shown when not all values can be pasted */
  'copy-paste.on-paste.validation.partial-warning.title': 'ไม่สามารถวางค่าทั้งหมดได้',
  /** The validation message that is shown when primitive types are incompatible */
  'copy-paste.on-paste.validation.primitive-type-incompatible.description':
    'ค่าประเภท "{{type}}" ไม่ได้รับอนุญาตในฟิลด์นี้',
  /** --- On paste --- */
  /** The validation message that is shown when pasting a value into a read-only target */
  'copy-paste.on-paste.validation.read-only-target.description': 'เป้าหมายเป็นแบบอ่านอย่างเดียว',
  /** The validation message that is shown when reference is incompatible with filter */
  'copy-paste.on-paste.validation.reference-filter-incompatible.description':
    'อ้างอิงไม่ได้รับอนุญาตในฟิลด์อ้างอิงตามตัวกรอง',
  /** The validation message that is shown when reference types are incompatible */
  'copy-paste.on-paste.validation.reference-type-incompatible.description':
    'อ้างอิงประเภท "{{sourceReferenceType}}" ไม่ได้รับอนุญาตในฟิลด์อ้างอิงที่ยอมรับประเภท "{{targetReferenceTypes}}"',
  /** The validation message that is shown when reference does not exist */
  'copy-paste.on-paste.validation.reference-validation-failed.description':
    'เอกสารที่อ้างอิง "{{ref}}" ไม่มีอยู่',
  /** The validation message that is shown when the source and target schema types are incompatible */
  'copy-paste.on-paste.validation.schema-type-incompatible.description':
    'ประเภทสคีมาต้นทางและเป้าหมายไม่เข้ากัน',
  /** The validation message that is shown when schema types are incompatible */
  'copy-paste.on-paste.validation.schema-type-incompatible.title':
    'ไม่สามารถแก้ไขประเภทสคีมาสำหรับเส้นทาง: {{path}}',
  /** The validation message that is shown when string values are incompatible */
  'copy-paste.on-paste.validation.string-value-incompatible.description':
    'ค่า "{{value}}" ไม่ได้รับอนุญาตใน "{{allowedStrings}}"',
})
