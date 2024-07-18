import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Text on the field action button to copy a document */
  'copy-paste.field-action-copy-button.document.title': 'Belgeyi Kopyala',
  /** Text on the field action button to copy a field */
  'copy-paste.field-action-copy-button.field.title': 'Alanı Kopyala',
  /** Text on the field action button to paste a document */
  'copy-paste.field-action-paste-button.document.title': 'Belgeyi Yapıştır',
  /** Text on the field action button to paste a field */
  'copy-paste.field-action-paste-button.field.title': 'Alanı Yapıştır',
  /** The error message that is shown when the clipboard is not supported */
  'copy-paste.on-copy.validation.clipboard-not-supported.title':
    'Tarayıcınız bu işlemi desteklemiyor',
  /** The success message that is shown when a document is copied */
  'copy-paste.on-copy.validation.copy-document-success.title': 'Belge "{{fieldNames}}" kopyalandı',
  /** The success message that is shown when a field is copied */
  'copy-paste.on-copy.validation.copy-field_one-success.title': 'Alan "{{fieldName}}" kopyalandı',
  /** The error message that is shown when there is no value to copy */
  'copy-paste.on-copy.validation.no-value.title': 'Boş değer, kopyalanacak bir şey yok',
  /** --- On copy --- */
  /** The error message that is shown when schema types are incompatible */
  'copy-paste.on-copy.validation.schema-type-incompatible.title':
    'Yol için şema tipi çözümlenemedi: {{path}}',
  /** The validation message that is shown when array types are incompatible */
  'copy-paste.on-paste.validation.array-type-incompatible.description':
    '"{{type}}" tipindeki değer bu dizi alanında kabul edilmiyor',
  /** The validation message that is shown when array values are incompatible */
  'copy-paste.on-paste.validation.array-value-incompatible.description':
    '"{{type}}" tipindeki değer bu dizi alanında kabul edilmiyor',
  /** The validation message that is shown when the clipboard is empty */
  'copy-paste.on-paste.validation.clipboard-empty.title': 'Yapıştırılacak bir şey yok',
  /** The validation message that is shown when the clipboard item is invalid */
  'copy-paste.on-paste.validation.clipboard-invalid.title': 'Geçersiz panoya öğesi',
  /** The success message that is shown when a document is pasted */
  'copy-paste.on-paste.validation.document-paste-success.title':
    'Belge "{{fieldNames}}" güncellendi',
  /** The success message that is shown when a field is pasted */
  'copy-paste.on-paste.validation.field_one-paste-success.title':
    'Alan "{{fieldName}}" güncellendi',
  /** The validation message that is shown when image files are incompatible */
  'copy-paste.on-paste.validation.image-file-incompatible.description':
    '"{{sourceSchemaType}}" bir "{{targetSchemaType}}" içinde kabul edilmiyor',
  /** The error message that is shown when the MIME type is not accepted */
  'copy-paste.on-paste.validation.mime-type-incompatible.description':
    '"{{mimeType}}" MIME türü bu alan için kabul edilmiyor',
  /** The error message that is shown when the MIME type validation fails */
  'copy-paste.on-paste.validation.mime-type-validation-failed.description':
    'MIME türü doğrulaması başarısız oldu',
  /** The warning message that is shown when not all values can be pasted */
  'copy-paste.on-paste.validation.partial-warning.title': 'Tüm değerler yapıştırılamadı',
  /** The validation message that is shown when primitive types are incompatible */
  'copy-paste.on-paste.validation.primitive-type-incompatible.description':
    '"{{type}}" tipindeki değer bu alanda kabul edilmiyor',
  /** --- On paste --- */
  /** The validation message that is shown when pasting a value into a read-only target */
  'copy-paste.on-paste.validation.read-only-target.description': 'Hedef salt okunurdur',
  /** The validation message that is shown when reference is incompatible with filter */
  'copy-paste.on-paste.validation.reference-filter-incompatible.description':
    'Referans, filtreye göre referans alanında kabul edilmiyor',
  /** The validation message that is shown when reference types are incompatible */
  'copy-paste.on-paste.validation.reference-type-incompatible.description':
    '"{{sourceReferenceType}}" tipindeki referanslar, "{{targetReferenceTypes}}" türlerini kabul eden referans alanında kabul edilmiyor',
  /** The validation message that is shown when the source and target schema types are incompatible */
  'copy-paste.on-paste.validation.schema-type-incompatible.description':
    'Kaynak ve hedef şema türleri uyumlu değil',
  /** The validation message that is shown when schema types are incompatible */
  'copy-paste.on-paste.validation.schema-type-incompatible.title':
    'Yol için şema tipi çözümlenemedi: {{path}}',
  /** The validation message that is shown when string values are incompatible */
  'copy-paste.on-paste.validation.string-value-incompatible.description':
    'Değer "{{value}}" "{{allowedStrings}}" içinde izin verilmiyor',
})
