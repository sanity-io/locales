import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Text on the field action button to copy a document */
  'copy-paste.field-action-copy-button.document.title': '复制文档',
  /** Text on the field action button to copy a field */
  'copy-paste.field-action-copy-button.field.title': '复制字段',
  /** Text on the field action button to paste a document */
  'copy-paste.field-action-paste-button.document.title': '粘贴文档',
  /** Text on the field action button to paste a field */
  'copy-paste.field-action-paste-button.field.title': '粘贴字段',
  /** The error message that is shown when the clipboard is not supported */
  'copy-paste.on-copy.validation.clipboard-not-supported.title': '您的浏览器不支持此操作',
  /** The success message that is shown when a document is copied */
  'copy-paste.on-copy.validation.copy-document-success.title': '文档 "{{fieldNames}}" 已复制',
  /** The success message that is shown when a field is copied */
  'copy-paste.on-copy.validation.copy-field_one-success.title': '字段 "{{fieldName}}" 已复制',
  /** The success message that is shown when a array item is copied */
  'copy-paste.on-copy.validation.copy-item_one-success.title': '项目 "{{typeName}}" 已复制',
  /** The error message that is shown when there is no value to copy */
  'copy-paste.on-copy.validation.no-value.title': '空值，无内容可复制',
  /** --- On copy --- */
  /** The error message that is shown when schema types are incompatible */
  'copy-paste.on-copy.validation.schema-type-incompatible.title':
    '无法解析路径: {{path}} 的模式类型',
  /** The validation message that is shown when array types are incompatible */
  'copy-paste.on-paste.validation.array-type-incompatible.description':
    '类型为 "{{type}}" 的值不允许在此数组字段中',
  /** The validation message that is shown when array values are incompatible */
  'copy-paste.on-paste.validation.array-value-incompatible.description':
    '类型为 "{{type}}" 的值不允许在此数组字段中',
  /** The validation message that is shown when the clipboard is empty */
  'copy-paste.on-paste.validation.clipboard-empty.title': '无内容可粘贴',
  /** The validation message that is shown when the clipboard item is invalid */
  'copy-paste.on-paste.validation.clipboard-invalid.title': '剪贴板项无效',
  /** The success message that is shown when a document is pasted */
  'copy-paste.on-paste.validation.document-paste-success.title': '文档 "{{fieldNames}}" 已更新',
  /** The success message that is shown when a field is pasted */
  'copy-paste.on-paste.validation.field_one-paste-success.title': '字段 "{{fieldName}}" 已更新',
  /** The validation message that is shown when image files are incompatible */
  'copy-paste.on-paste.validation.image-file-incompatible.description':
    '一个 "{{sourceSchemaType}}" 不允许在一个 "{{targetSchemaType}}"',
  /** The error message that is shown when the MIME type is not accepted */
  'copy-paste.on-paste.validation.mime-type-incompatible.description':
    'MIME 类型 "{{mimeType}}" 不被此字段接受',
  /** The error message that is shown when the MIME type validation fails */
  'copy-paste.on-paste.validation.mime-type-validation-failed.description': 'MIME 类型验证失败',
  /** The warning message that is shown when not all values can be pasted */
  'copy-paste.on-paste.validation.partial-warning.title': '无法粘贴所有值',
  /** The validation message that is shown when primitive types are incompatible */
  'copy-paste.on-paste.validation.primitive-type-incompatible.description':
    '类型为 "{{type}}" 的值不允许在此字段中',
  /** --- On paste --- */
  /** The validation message that is shown when pasting a value into a read-only target */
  'copy-paste.on-paste.validation.read-only-target.description': '目标是只读的',
  /** The validation message that is shown when reference is incompatible with filter */
  'copy-paste.on-paste.validation.reference-filter-incompatible.description':
    '根据过滤器，引用不允许在引用字段中',
  /** The validation message that is shown when reference types are incompatible */
  'copy-paste.on-paste.validation.reference-type-incompatible.description':
    '类型为 "{{sourceReferenceType}}" 的引用不允许在接受类型为 "{{targetReferenceTypes}}" 的引用字段中',
  /** The validation message that is shown when reference does not exist */
  'copy-paste.on-paste.validation.reference-validation-failed.description':
    '引用的文档 "{{ref}}" 不存在',
  /** The validation message that is shown when the source and target schema types are incompatible */
  'copy-paste.on-paste.validation.schema-type-incompatible.description': '源和目标模式类型不兼容',
  /** The validation message that is shown when schema types are incompatible */
  'copy-paste.on-paste.validation.schema-type-incompatible.title':
    '无法解析路径: {{path}} 的模式类型',
  /** The validation message that is shown when string values are incompatible */
  'copy-paste.on-paste.validation.string-value-incompatible.description':
    '值 "{{value}}" 不允许在 "{{allowedStrings}}" 中',
})
