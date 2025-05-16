import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Text on the field action button to copy a document */
  'copy-paste.field-action-copy-button.document.title': 'Salin dokumen',
  /** Text on the field action button to copy a field */
  'copy-paste.field-action-copy-button.field.title': 'Salin bidang',
  /** Text on the field action button to paste a document */
  'copy-paste.field-action-paste-button.document.title': 'Tempel dokumen',
  /** Text on the field action button to paste a field */
  'copy-paste.field-action-paste-button.field.title': 'Tempel bidang',
  /** The error message that is shown when the clipboard is not supported */
  'copy-paste.on-copy.validation.clipboard-not-supported.title':
    'Browser Anda tidak mendukung tindakan ini',
  /** The error message that is shown when there is no value to copy */
  'copy-paste.on-copy.validation.no-value.title': 'Nilai kosong, tidak ada yang disalin',
  /** --- On copy --- */
  /** The error message that is shown when schema types are incompatible */
  'copy-paste.on-copy.validation.schema-type-incompatible.title':
    'Tidak dapat menyelesaikan tipe skema untuk jalur: {{path}}',
  /** The validation message that is shown when array types are incompatible */
  'copy-paste.on-paste.validation.array-type-incompatible.description':
    'Nilai tipe "{{type}}" tidak diizinkan di bidang array ini',
  /** The validation message that is shown when array values are incompatible */
  'copy-paste.on-paste.validation.array-value-incompatible.description':
    'Nilai tipe "{{type}}" tidak diizinkan di bidang array ini',
  /** The validation message that is shown when the clipboard is empty */
  'copy-paste.on-paste.validation.clipboard-empty.title': 'Tidak ada yang ditempel',
  /** The validation message that is shown when the clipboard item is invalid */
  'copy-paste.on-paste.validation.clipboard-invalid.title': 'Item clipboard tidak valid',
  /** The validation message that is shown when image files are incompatible */
  'copy-paste.on-paste.validation.image-file-incompatible.description':
    '"{{sourceSchemaType}}" tidak diizinkan dalam "{{targetSchemaType}}"',
  /** The error message that is shown when the MIME type is not accepted */
  'copy-paste.on-paste.validation.mime-type-incompatible.description':
    'Tipe MIME "{{mimeType}}" tidak diterima untuk bidang ini',
  /** The error message that is shown when the MIME type validation fails */
  'copy-paste.on-paste.validation.mime-type-validation-failed.description':
    'Validasi tipe MIME gagal',
  /** The warning message that is shown when not all values can be pasted */
  'copy-paste.on-paste.validation.partial-warning.title': 'Tidak dapat menempel semua nilai',
  /** The validation message that is shown when primitive types are incompatible */
  'copy-paste.on-paste.validation.primitive-type-incompatible.description':
    'Nilai tipe "{{type}}" tidak diizinkan di bidang ini',
  /** --- On paste --- */
  /** The validation message that is shown when pasting a value into a read-only target */
  'copy-paste.on-paste.validation.read-only-target.description': 'Target bersifat hanya-baca',
  /** The validation message that is shown when reference is incompatible with filter */
  'copy-paste.on-paste.validation.reference-filter-incompatible.description':
    'Referensi tidak diizinkan di bidang referensi menurut filter',
  /** The validation message that is shown when reference types are incompatible */
  'copy-paste.on-paste.validation.reference-type-incompatible.description':
    'Referensi tipe "{{sourceReferenceType}}" tidak diizinkan di bidang referensi yang menerima tipe "{{targetReferenceTypes}}"',
  /** The validation message that is shown when reference does not exist */
  'copy-paste.on-paste.validation.reference-validation-failed.description':
    'Dokumen referensi "{{ref}}" tidak ada',
  /** The validation message that is shown when the source and target schema types are incompatible */
  'copy-paste.on-paste.validation.schema-type-incompatible.description':
    'Tipe skema sumber dan target tidak kompatibel',
  /** The validation message that is shown when schema types are incompatible */
  'copy-paste.on-paste.validation.schema-type-incompatible.title':
    'Tidak dapat menyelesaikan tipe skema untuk jalur: {{path}}',
  /** The validation message that is shown when string values are incompatible */
  'copy-paste.on-paste.validation.string-value-incompatible.description':
    'Nilai "{{value}}" tidak diizinkan dalam "{{allowedStrings}}"',
})
