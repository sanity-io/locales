import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Text on the field action button to copy a document */
  'copy-paste.field-action-copy-button.document.title': '문서 복사',
  /** Text on the field action button to copy a field */
  'copy-paste.field-action-copy-button.field.title': '필드 복사',
  /** Text on the field action button to paste a document */
  'copy-paste.field-action-paste-button.document.title': '문서 붙여넣기',
  /** Text on the field action button to paste a field */
  'copy-paste.field-action-paste-button.field.title': '필드 붙여넣기',
  /** The error message that is shown when the clipboard is not supported */
  'copy-paste.on-copy.validation.clipboard-not-supported.description': undefined, // 'Clipboard access required to copy this content. Allow clipboard permissions in your browser settings, then try copying again.'
  /** The error message that is shown when the clipboard is not supported */
  'copy-paste.on-copy.validation.clipboard-not-supported.title':
    '브라우저가 이 작업을 지원하지 않습니다',
  /** The error message that is shown when there is no value to copy */
  'copy-paste.on-copy.validation.no-value.title': '빈 값, 복사할 것 없음',
  /** --- On copy --- */
  /** The error message that is shown when schema types are incompatible */
  'copy-paste.on-copy.validation.schema-type-incompatible.title':
    '경로에 대한 스키마 유형을 확인할 수 없습니다: {{path}}',
  /** The validation message that is shown when array types are incompatible */
  'copy-paste.on-paste.validation.array-type-incompatible.description':
    '"{{type}}" 유형의 값은 이 배열 필드에 허용되지 않습니다',
  /** The validation message that is shown when array values are incompatible */
  'copy-paste.on-paste.validation.array-value-incompatible.description':
    '"{{type}}" 유형의 값은 이 배열 필드에 허용되지 않습니다',
  /** The validation message that is shown when the clipboard is empty */
  'copy-paste.on-paste.validation.clipboard-empty.title': '붙여넣을 것 없음',
  /** The validation message that is shown when the clipboard item is invalid */
  'copy-paste.on-paste.validation.clipboard-invalid.title': '잘못된 클립보드 항목',
  /** The validation message that is shown when image files are incompatible */
  'copy-paste.on-paste.validation.image-file-incompatible.description':
    '"{{sourceSchemaType}}"은(는) "{{targetSchemaType}}"에 허용되지 않습니다',
  /** The error message that is shown when the MIME type is not accepted */
  'copy-paste.on-paste.validation.mime-type-incompatible.description':
    'MIME 유형 "{{mimeType}}"은(는) 이 필드에 허용되지 않습니다',
  /** The error message that is shown when the MIME type validation fails */
  'copy-paste.on-paste.validation.mime-type-validation-failed.description': 'MIME 유형 검증 실패',
  /** The warning message that is shown when not all values can be pasted */
  'copy-paste.on-paste.validation.partial-warning.title': '모든 값을 붙여넣을 수 없습니다',
  /** The validation message that is shown when primitive types are incompatible */
  'copy-paste.on-paste.validation.primitive-type-incompatible.description':
    '"{{type}}" 유형의 값은 이 필드에 허용되지 않습니다',
  /** --- On paste --- */
  /** The validation message that is shown when pasting a value into a read-only target */
  'copy-paste.on-paste.validation.read-only-target.description': '대상이 읽기 전용입니다',
  /** The validation message that is shown when reference is incompatible with filter */
  'copy-paste.on-paste.validation.reference-filter-incompatible.description':
    '참조가 필터에 따라 참조 필드에 허용되지 않습니다',
  /** The validation message that is shown when reference types are incompatible */
  'copy-paste.on-paste.validation.reference-type-incompatible.description':
    '"{{sourceReferenceType}}" 유형의 참조는 "{{targetReferenceTypes}}" 유형을 허용하는 참조 필드에 허용되지 않습니다',
  /** The validation message that is shown when reference does not exist */
  'copy-paste.on-paste.validation.reference-validation-failed.description':
    '참조된 문서 "{{ref}}"이(가) 존재하지 않습니다',
  /** The validation message that is shown when the source and target schema types are incompatible */
  'copy-paste.on-paste.validation.schema-type-incompatible.description':
    '소스 및 대상 스키마 유형이 호환되지 않습니다',
  /** The validation message that is shown when schema types are incompatible */
  'copy-paste.on-paste.validation.schema-type-incompatible.title':
    '경로에 대한 스키마 유형을 확인할 수 없습니다: {{path}}',
  /** The validation message that is shown when string values are incompatible */
  'copy-paste.on-paste.validation.string-value-incompatible.description':
    '값 "{{value}}"은(는) "{{allowedStrings}}"에 허용되지 않습니다',
})
