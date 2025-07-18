import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Text on the field action button to copy a document */
  'copy-paste.field-action-copy-button.document.title': 'Капіяваць дакумент',
  /** Text on the field action button to copy a field */
  'copy-paste.field-action-copy-button.field.title': 'Капіяваць поле',
  /** Text on the field action button to paste a document */
  'copy-paste.field-action-paste-button.document.title': 'Уставіць дакумент',
  /** Text on the field action button to paste a field */
  'copy-paste.field-action-paste-button.field.title': 'Уставіць поле',
  /** The error message that is shown when the clipboard is not supported */
  'copy-paste.on-copy.validation.clipboard-not-supported.description': undefined, // 'Clipboard access required to copy this content. Allow clipboard permissions in your browser settings, then try copying again.'
  /** The error message that is shown when the clipboard is not supported */
  'copy-paste.on-copy.validation.clipboard-not-supported.title':
    'Ваш браўзер не падтрымлівае гэтую дзеянне',
  /** The error message that is shown when there is no value to copy */
  'copy-paste.on-copy.validation.no-value.title': 'Пустое значэнне, няма чаго капіяваць',
  /** --- On copy --- */
  /** The error message that is shown when schema types are incompatible */
  'copy-paste.on-copy.validation.schema-type-incompatible.title':
    'Не ўдалося вызначыць тып схемы для шляху: {{path}}',
  /** The validation message that is shown when array types are incompatible */
  'copy-paste.on-paste.validation.array-type-incompatible.description':
    'Значэнне тыпу "{{type}}" не дазволенае ў гэтым масіўным полі',
  /** The validation message that is shown when array values are incompatible */
  'copy-paste.on-paste.validation.array-value-incompatible.description':
    'Значэнне тыпу "{{type}}" не дазволена ў гэтым масіўным полі',
  /** The validation message that is shown when the clipboard is empty */
  'copy-paste.on-paste.validation.clipboard-empty.title': 'Няма чаго ўставіць',
  /** The validation message that is shown when the clipboard item is invalid */
  'copy-paste.on-paste.validation.clipboard-invalid.title': 'Няправільны элемент буфера абмену',
  /** The validation message that is shown when image files are incompatible */
  'copy-paste.on-paste.validation.image-file-incompatible.description':
    '"{{sourceSchemaType}}" не дазволена ў "{{targetSchemaType}}"',
  /** The error message that is shown when the MIME type is not accepted */
  'copy-paste.on-paste.validation.mime-type-incompatible.description':
    'MIME-тып "{{mimeType}}" не прыняты для гэтага поля',
  /** The error message that is shown when the MIME type validation fails */
  'copy-paste.on-paste.validation.mime-type-validation-failed.description':
    'Праверка MIME-тыпу не прайшла',
  /** The warning message that is shown when not all values can be pasted */
  'copy-paste.on-paste.validation.partial-warning.title': 'Не ўдалося ўставіць усе значэнні',
  /** The validation message that is shown when primitive types are incompatible */
  'copy-paste.on-paste.validation.primitive-type-incompatible.description':
    'Значэнне тыпу "{{type}}" не дазволена ў гэтым полі',
  /** --- On paste --- */
  /** The validation message that is shown when pasting a value into a read-only target */
  'copy-paste.on-paste.validation.read-only-target.description': 'Мэтавае поле толькі для чытання',
  /** The validation message that is shown when reference is incompatible with filter */
  'copy-paste.on-paste.validation.reference-filter-incompatible.description':
    'Спасылка не дазволена ў полі спасылак згодна з фільтрам',
  /** The validation message that is shown when reference types are incompatible */
  'copy-paste.on-paste.validation.reference-type-incompatible.description':
    'Спасылкі тыпу "{{sourceReferenceType}}" не дазволены ў полі спасылак, якое прымае тыпы "{{targetReferenceTypes}}"',
  /** The validation message that is shown when reference does not exist */
  'copy-paste.on-paste.validation.reference-validation-failed.description':
    'Дакумент на які спасылаецца "{{ref}}" не існуе',
  /** The validation message that is shown when the source and target schema types are incompatible */
  'copy-paste.on-paste.validation.schema-type-incompatible.description':
    'Тыпы схемы крыніцы і мэты не сумяшчальныя',
  /** The validation message that is shown when schema types are incompatible */
  'copy-paste.on-paste.validation.schema-type-incompatible.title':
    'Не ўдалося вызначыць тып схемы для шляху: {{path}}',
  /** The validation message that is shown when string values are incompatible */
  'copy-paste.on-paste.validation.string-value-incompatible.description':
    'Значэнне "{{value}}" не дазволена ў "{{allowedStrings}}"',
})
