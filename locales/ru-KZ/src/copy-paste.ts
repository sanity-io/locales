import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Text on the field action button to copy a document */
  'copy-paste.field-action-copy-button.document.title': 'Копировать документ',
  /** Text on the field action button to copy a field */
  'copy-paste.field-action-copy-button.field.title': 'Копировать поле',
  /** Text on the field action button to paste a document */
  'copy-paste.field-action-paste-button.document.title': 'Вставить документ',
  /** Text on the field action button to paste a field */
  'copy-paste.field-action-paste-button.field.title': 'Вставить поле',
  /** The error message that is shown when the clipboard is not supported */
  'copy-paste.on-copy.validation.clipboard-not-supported.title':
    'Ваш браузер не поддерживает это действие',
  /** The success message that is shown when a document is copied */
  'copy-paste.on-copy.validation.copy-document-success.title':
    'Документ "{{fieldNames}}" скопирован',
  /** The success message that is shown when a field is copied */
  'copy-paste.on-copy.validation.copy-field_one-success.title': 'Поле "{{fieldName}}" скопировано',
  /** The success message that is shown when a array item is copied */
  'copy-paste.on-copy.validation.copy-item_one-success.title': 'Элемент "{{typeName}}" скопирован',
  /** The error message that is shown when there is no value to copy */
  'copy-paste.on-copy.validation.no-value.title': 'Пустое значение, нечего копировать',
  /** --- On copy --- */
  /** The error message that is shown when schema types are incompatible */
  'copy-paste.on-copy.validation.schema-type-incompatible.title':
    'Не удалось определить тип схемы для пути: {{path}}',
  /** The validation message that is shown when array types are incompatible */
  'copy-paste.on-paste.validation.array-type-incompatible.description':
    'Значение типа "{{type}}" не допускается в этом массиве полей',
  /** The validation message that is shown when array values are incompatible */
  'copy-paste.on-paste.validation.array-value-incompatible.description':
    'Значение типа "{{type}}" не допускается в этом массиве полей',
  /** The validation message that is shown when the clipboard is empty */
  'copy-paste.on-paste.validation.clipboard-empty.title': 'Нечего вставлять',
  /** The validation message that is shown when the clipboard item is invalid */
  'copy-paste.on-paste.validation.clipboard-invalid.title': 'Недопустимый элемент буфера обмена',
  /** The success message that is shown when a document is pasted */
  'copy-paste.on-paste.validation.document-paste-success.title':
    'Документ "{{fieldNames}}" обновлен',
  /** The success message that is shown when a field is pasted */
  'copy-paste.on-paste.validation.field_one-paste-success.title': 'Поле "{{fieldName}}" обновлено',
  /** The validation message that is shown when image files are incompatible */
  'copy-paste.on-paste.validation.image-file-incompatible.description':
    '"{{sourceSchemaType}}" не допускается в "{{targetSchemaType}}"',
  /** The error message that is shown when the MIME type is not accepted */
  'copy-paste.on-paste.validation.mime-type-incompatible.description':
    'MIME-тип "{{mimeType}}" не принимается для этого поля',
  /** The error message that is shown when the MIME type validation fails */
  'copy-paste.on-paste.validation.mime-type-validation-failed.description':
    'Проверка MIME-типа не удалась',
  /** The warning message that is shown when not all values can be pasted */
  'copy-paste.on-paste.validation.partial-warning.title': 'Не удалось вставить все значения',
  /** The validation message that is shown when primitive types are incompatible */
  'copy-paste.on-paste.validation.primitive-type-incompatible.description':
    'Значение типа "{{type}}" не допускается в этом поле',
  /** --- On paste --- */
  /** The validation message that is shown when pasting a value into a read-only target */
  'copy-paste.on-paste.validation.read-only-target.description':
    'Целевое поле доступно только для чтения',
  /** The validation message that is shown when reference is incompatible with filter */
  'copy-paste.on-paste.validation.reference-filter-incompatible.description':
    'Ссылка не допускается в поле ссылки в соответствии с фильтром',
  /** The validation message that is shown when reference types are incompatible */
  'copy-paste.on-paste.validation.reference-type-incompatible.description':
    'Ссылки типа "{{sourceReferenceType}}" не допускаются в поле ссылки, которое принимает типы "{{targetReferenceTypes}}"',
  /** The validation message that is shown when reference does not exist */
  'copy-paste.on-paste.validation.reference-validation-failed.description':
    'Ссылочный документ "{{ref}}" не существует',
  /** The validation message that is shown when the source and target schema types are incompatible */
  'copy-paste.on-paste.validation.schema-type-incompatible.description':
    'Исходные и целевые типы схем несовместимы',
  /** The validation message that is shown when schema types are incompatible */
  'copy-paste.on-paste.validation.schema-type-incompatible.title':
    'Не удалось определить тип схемы для пути: {{path}}',
  /** The validation message that is shown when string values are incompatible */
  'copy-paste.on-paste.validation.string-value-incompatible.description':
    'Значение "{{value}}" не допускается в "{{allowedStrings}}"',
})
