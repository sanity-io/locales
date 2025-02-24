import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Text on the field action button to copy a document */
  'copy-paste.field-action-copy-button.document.title': 'Sao chép tài liệu',
  /** Text on the field action button to copy a field */
  'copy-paste.field-action-copy-button.field.title': 'Sao chép trường',
  /** Text on the field action button to paste a document */
  'copy-paste.field-action-paste-button.document.title': 'Dán tài liệu',
  /** Text on the field action button to paste a field */
  'copy-paste.field-action-paste-button.field.title': 'Dán trường',
  /** The error message that is shown when the clipboard is not supported */
  'copy-paste.on-copy.validation.clipboard-not-supported.title':
    'Trình duyệt của bạn không hỗ trợ hành động này',
  /** The error message that is shown when there is no value to copy */
  'copy-paste.on-copy.validation.no-value.title': 'Giá trị trống, không có gì để sao chép',
  /** --- On copy --- */
  /** The error message that is shown when schema types are incompatible */
  'copy-paste.on-copy.validation.schema-type-incompatible.title':
    'Không thể xác định loại schema cho đường dẫn: {{path}}',
  /** The validation message that is shown when array types are incompatible */
  'copy-paste.on-paste.validation.array-type-incompatible.description':
    'Giá trị loại "{{type}}" không được phép trong trường mảng này',
  /** The validation message that is shown when array values are incompatible */
  'copy-paste.on-paste.validation.array-value-incompatible.description':
    'Giá trị loại "{{type}}" không được phép trong trường mảng này',
  /** The validation message that is shown when the clipboard is empty */
  'copy-paste.on-paste.validation.clipboard-empty.title': 'Không có gì để dán',
  /** The validation message that is shown when the clipboard item is invalid */
  'copy-paste.on-paste.validation.clipboard-invalid.title': 'Mục clipboard không hợp lệ',
  /** The validation message that is shown when image files are incompatible */
  'copy-paste.on-paste.validation.image-file-incompatible.description':
    '"{{sourceSchemaType}}" không được phép trong "{{targetSchemaType}}"',
  /** The error message that is shown when the MIME type is not accepted */
  'copy-paste.on-paste.validation.mime-type-incompatible.description':
    'Loại MIME "{{mimeType}}" không được chấp nhận cho trường này',
  /** The error message that is shown when the MIME type validation fails */
  'copy-paste.on-paste.validation.mime-type-validation-failed.description':
    'Xác thực loại MIME thất bại',
  /** The warning message that is shown when not all values can be pasted */
  'copy-paste.on-paste.validation.partial-warning.title': 'Không thể dán tất cả các giá trị',
  /** The validation message that is shown when primitive types are incompatible */
  'copy-paste.on-paste.validation.primitive-type-incompatible.description':
    'Giá trị loại "{{type}}" không được phép trong trường này',
  /** --- On paste --- */
  /** The validation message that is shown when pasting a value into a read-only target */
  'copy-paste.on-paste.validation.read-only-target.description': 'Mục tiêu chỉ đọc',
  /** The validation message that is shown when reference is incompatible with filter */
  'copy-paste.on-paste.validation.reference-filter-incompatible.description':
    'Tham chiếu không được phép trong trường tham chiếu theo bộ lọc',
  /** The validation message that is shown when reference types are incompatible */
  'copy-paste.on-paste.validation.reference-type-incompatible.description':
    'Tham chiếu loại "{{sourceReferenceType}}" không được phép trong trường tham chiếu chấp nhận các loại "{{targetReferenceTypes}}"',
  /** The validation message that is shown when reference does not exist */
  'copy-paste.on-paste.validation.reference-validation-failed.description':
    'Tài liệu tham khảo "{{ref}}" không tồn tại',
  /** The validation message that is shown when the source and target schema types are incompatible */
  'copy-paste.on-paste.validation.schema-type-incompatible.description':
    'Các loại schema nguồn và đích không tương thích',
  /** The validation message that is shown when schema types are incompatible */
  'copy-paste.on-paste.validation.schema-type-incompatible.title':
    'Không thể xác định loại schema cho đường dẫn: {{path}}',
  /** The validation message that is shown when string values are incompatible */
  'copy-paste.on-paste.validation.string-value-incompatible.description':
    'Giá trị "{{value}}" không được phép trong "{{allowedStrings}}"',
})
