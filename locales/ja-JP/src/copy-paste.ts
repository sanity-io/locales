import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Text on the field action button to copy a document */
  'copy-paste.field-action-copy-button.document.title': 'ドキュメントをコピー',
  /** Text on the field action button to copy a field */
  'copy-paste.field-action-copy-button.field.title': 'フィールドをコピー',
  /** Text on the field action button to paste a document */
  'copy-paste.field-action-paste-button.document.title': 'ドキュメントを貼り付け',
  /** Text on the field action button to paste a field */
  'copy-paste.field-action-paste-button.field.title': 'フィールドを貼り付け',
  /** The error message that is shown when the clipboard is not supported */
  'copy-paste.on-copy.validation.clipboard-not-supported.title':
    'お使いのブラウザはこのアクションをサポートしていません',
  /** The success message that is shown when a document is copied */
  'copy-paste.on-copy.validation.copy-document-success.title':
    'ドキュメント "{{fieldNames}}" をコピーしました',
  /** The success message that is shown when a field is copied */
  'copy-paste.on-copy.validation.copy-field_one-success.title':
    'フィールド "{{fieldName}}" をコピーしました',
  /** The error message that is shown when there is no value to copy */
  'copy-paste.on-copy.validation.no-value.title': '空の値、コピーするものがありません',
  /** --- On copy --- */
  /** The error message that is shown when schema types are incompatible */
  'copy-paste.on-copy.validation.schema-type-incompatible.title':
    'パス: {{path}} のスキーマタイプを解決できませんでした',
  /** The validation message that is shown when array types are incompatible */
  'copy-paste.on-paste.validation.array-type-incompatible.description':
    'タイプ "{{type}}" の値はこの配列フィールドでは許可されていません',
  /** The validation message that is shown when array values are incompatible */
  'copy-paste.on-paste.validation.array-value-incompatible.description':
    'タイプ "{{type}}" の値はこの配列フィールドでは許可されていません',
  /** The validation message that is shown when the clipboard is empty */
  'copy-paste.on-paste.validation.clipboard-empty.title': '貼り付けるものがありません',
  /** The validation message that is shown when the clipboard item is invalid */
  'copy-paste.on-paste.validation.clipboard-invalid.title': '無効なクリップボードアイテムです',
  /** The success message that is shown when a document is pasted */
  'copy-paste.on-paste.validation.document-paste-success.title':
    'ドキュメント "{{fieldNames}}" を更新しました',
  /** The success message that is shown when a field is pasted */
  'copy-paste.on-paste.validation.field_one-paste-success.title':
    'フィールド "{{fieldName}}" を更新しました',
  /** The validation message that is shown when image files are incompatible */
  'copy-paste.on-paste.validation.image-file-incompatible.description':
    '"{{sourceSchemaType}}" は "{{targetSchemaType}}" には許可されていません',
  /** The error message that is shown when the MIME type is not accepted */
  'copy-paste.on-paste.validation.mime-type-incompatible.description':
    'MIMEタイプ "{{mimeType}}" はこのフィールドでは受け入れられません',
  /** The error message that is shown when the MIME type validation fails */
  'copy-paste.on-paste.validation.mime-type-validation-failed.description':
    'MIMEタイプの検証に失敗しました',
  /** The warning message that is shown when not all values can be pasted */
  'copy-paste.on-paste.validation.partial-warning.title':
    'すべての値を貼り付けることができませんでした',
  /** The validation message that is shown when primitive types are incompatible */
  'copy-paste.on-paste.validation.primitive-type-incompatible.description':
    'タイプ "{{type}}" の値はこのフィールドでは許可されていません',
  /** --- On paste --- */
  /** The validation message that is shown when pasting a value into a read-only target */
  'copy-paste.on-paste.validation.read-only-target.description': '対象は読み取り専用です',
  /** The validation message that is shown when reference is incompatible with filter */
  'copy-paste.on-paste.validation.reference-filter-incompatible.description':
    '参照はフィルターによる参照フィールドでは許可されていません',
  /** The validation message that is shown when reference types are incompatible */
  'copy-paste.on-paste.validation.reference-type-incompatible.description':
    'タイプ "{{sourceReferenceType}}" の参照はタイプ "{{targetReferenceTypes}}" を受け入れる参照フィールドでは許可されていません',
  /** The validation message that is shown when the source and target schema types are incompatible */
  'copy-paste.on-paste.validation.schema-type-incompatible.description':
    'ソースとターゲットのスキーマタイプが互換性がありません',
  /** The validation message that is shown when schema types are incompatible */
  'copy-paste.on-paste.validation.schema-type-incompatible.title':
    'パス: {{path}} のスキーマタイプを解決できませんでした',
  /** The validation message that is shown when string values are incompatible */
  'copy-paste.on-paste.validation.string-value-incompatible.description':
    '値 "{{value}}" は "{{allowedStrings}}" の範囲内では許可されていません',
})
