import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Text on the field action button to copy a document */
  'copy-paste.field-action-copy-button.document.title': '複製文件',
  /** Text on the field action button to copy a field */
  'copy-paste.field-action-copy-button.field.title': '複製欄位',
  /** Text on the field action button to paste a document */
  'copy-paste.field-action-paste-button.document.title': '粘貼文件',
  /** Text on the field action button to paste a field */
  'copy-paste.field-action-paste-button.field.title': '粘貼欄位',
  /** The error message that is shown when the clipboard is not supported */
  'copy-paste.on-copy.validation.clipboard-not-supported.title': '您的瀏覽器不支持此操作',
  /** The success message that is shown when a document is copied */
  'copy-paste.on-copy.validation.copy-document-success.title': '文件 "{{fieldNames}}" 已複製',
  /** The success message that is shown when a field is copied */
  'copy-paste.on-copy.validation.copy-field_one-success.title': '欄位 "{{fieldName}}" 已複製',
  /** The error message that is shown when there is no value to copy */
  'copy-paste.on-copy.validation.no-value.title': '空值，沒有可複製的內容',
  /** --- On copy --- */
  /** The error message that is shown when schema types are incompatible */
  'copy-paste.on-copy.validation.schema-type-incompatible.title':
    '無法解析路徑的模式類型：{{path}}',
  /** The validation message that is shown when array types are incompatible */
  'copy-paste.on-paste.validation.array-type-incompatible.description':
    '此陣列欄位不允許類型為 "{{type}}" 的值',
  /** The validation message that is shown when array values are incompatible */
  'copy-paste.on-paste.validation.array-value-incompatible.description':
    '此陣列欄位不允許類型為 "{{type}}" 的值',
  /** The validation message that is shown when the clipboard is empty */
  'copy-paste.on-paste.validation.clipboard-empty.title': '沒有可粘貼的內容',
  /** The validation message that is shown when the clipboard item is invalid */
  'copy-paste.on-paste.validation.clipboard-invalid.title': '剪貼板項目無效',
  /** The success message that is shown when a document is pasted */
  'copy-paste.on-paste.validation.document-paste-success.title': '文件 "{{fieldNames}}" 已更新',
  /** The success message that is shown when a field is pasted */
  'copy-paste.on-paste.validation.field_one-paste-success.title': '欄位 "{{fieldName}}" 已更新',
  /** The validation message that is shown when image files are incompatible */
  'copy-paste.on-paste.validation.image-file-incompatible.description':
    '不允許將 "{{sourceSchemaType}}" 放在 "{{targetSchemaType}}" 中',
  /** The error message that is shown when the MIME type is not accepted */
  'copy-paste.on-paste.validation.mime-type-incompatible.description':
    '此欄位不接受 MIME 類型 "{{mimeType}}"',
  /** The error message that is shown when the MIME type validation fails */
  'copy-paste.on-paste.validation.mime-type-validation-failed.description': 'MIME 類型驗證失敗',
  /** The warning message that is shown when not all values can be pasted */
  'copy-paste.on-paste.validation.partial-warning.title': '無法粘貼所有值',
  /** The validation message that is shown when primitive types are incompatible */
  'copy-paste.on-paste.validation.primitive-type-incompatible.description':
    '此欄位不允許類型為 "{{type}}" 的值',
  /** --- On paste --- */
  /** The validation message that is shown when pasting a value into a read-only target */
  'copy-paste.on-paste.validation.read-only-target.description': '目標是唯讀的',
  /** The validation message that is shown when reference is incompatible with filter */
  'copy-paste.on-paste.validation.reference-filter-incompatible.description':
    '根據篩選器，參考不允許在參考欄位中',
  /** The validation message that is shown when reference types are incompatible */
  'copy-paste.on-paste.validation.reference-type-incompatible.description':
    '不允許將類型為 "{{sourceReferenceType}}" 的參考放在接受類型為 "{{targetReferenceTypes}}" 的參考欄位中',
  /** The validation message that is shown when the source and target schema types are incompatible */
  'copy-paste.on-paste.validation.schema-type-incompatible.description': '源和目標模式類型不兼容',
  /** The validation message that is shown when schema types are incompatible */
  'copy-paste.on-paste.validation.schema-type-incompatible.title':
    '無法解析路徑的模式類型：{{path}}',
  /** The validation message that is shown when string values are incompatible */
  'copy-paste.on-paste.validation.string-value-incompatible.description':
    '值 "{{value}}" 不允許在 "{{allowedStrings}}" 中',
})
