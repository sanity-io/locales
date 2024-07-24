import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Text on the field action button to copy a document */
  'copy-paste.field-action-copy-button.document.title': 'Copia documento',
  /** Text on the field action button to copy a field */
  'copy-paste.field-action-copy-button.field.title': 'Copia campo',
  /** Text on the field action button to paste a document */
  'copy-paste.field-action-paste-button.document.title': 'Incolla documento',
  /** Text on the field action button to paste a field */
  'copy-paste.field-action-paste-button.field.title': 'Incolla campo',
  /** The error message that is shown when the clipboard is not supported */
  'copy-paste.on-copy.validation.clipboard-not-supported.title':
    'Il tuo browser non supporta questa azione',
  /** The success message that is shown when a document is copied */
  'copy-paste.on-copy.validation.copy-document-success.title': 'Documento "{{fieldNames}}" copiato',
  /** The success message that is shown when a field is copied */
  'copy-paste.on-copy.validation.copy-field_one-success.title': 'Campo "{{fieldName}}" copiato',
  /** The error message that is shown when there is no value to copy */
  'copy-paste.on-copy.validation.no-value.title': 'Valore vuoto, niente da copiare',
  /** --- On copy --- */
  /** The error message that is shown when schema types are incompatible */
  'copy-paste.on-copy.validation.schema-type-incompatible.title':
    'Impossibile risolvere il tipo di schema per il percorso: {{path}}',
  /** The validation message that is shown when array types are incompatible */
  'copy-paste.on-paste.validation.array-type-incompatible.description':
    'Valore di tipo "{{type}}" non è ammesso in questo campo array',
  /** The validation message that is shown when array values are incompatible */
  'copy-paste.on-paste.validation.array-value-incompatible.description':
    'Valore di tipo "{{type}}" non è ammesso in questo campo array',
  /** The validation message that is shown when the clipboard is empty */
  'copy-paste.on-paste.validation.clipboard-empty.title': 'Niente da incollare',
  /** The validation message that is shown when the clipboard item is invalid */
  'copy-paste.on-paste.validation.clipboard-invalid.title': 'Elemento degli appunti non valido',
  /** The success message that is shown when a document is pasted */
  'copy-paste.on-paste.validation.document-paste-success.title':
    'Documento "{{fieldNames}}" aggiornato',
  /** The success message that is shown when a field is pasted */
  'copy-paste.on-paste.validation.field_one-paste-success.title':
    'Campo "{{fieldName}}" aggiornato',
  /** The validation message that is shown when image files are incompatible */
  'copy-paste.on-paste.validation.image-file-incompatible.description':
    'Un "{{sourceSchemaType}}" non è ammesso in un "{{targetSchemaType}}"',
  /** The error message that is shown when the MIME type is not accepted */
  'copy-paste.on-paste.validation.mime-type-incompatible.description':
    'Il tipo MIME "{{mimeType}}" non è accettato per questo campo',
  /** The error message that is shown when the MIME type validation fails */
  'copy-paste.on-paste.validation.mime-type-validation-failed.description':
    'Validazione del tipo MIME fallita',
  /** The warning message that is shown when not all values can be pasted */
  'copy-paste.on-paste.validation.partial-warning.title': 'Impossibile incollare tutti i valori',
  /** The validation message that is shown when primitive types are incompatible */
  'copy-paste.on-paste.validation.primitive-type-incompatible.description':
    'Valore di tipo "{{type}}" non è ammesso in questo campo',
  /** --- On paste --- */
  /** The validation message that is shown when pasting a value into a read-only target */
  'copy-paste.on-paste.validation.read-only-target.description':
    'La destinazione è di sola lettura',
  /** The validation message that is shown when reference is incompatible with filter */
  'copy-paste.on-paste.validation.reference-filter-incompatible.description':
    'Il riferimento non è ammesso nel campo di riferimento secondo il filtro',
  /** The validation message that is shown when reference types are incompatible */
  'copy-paste.on-paste.validation.reference-type-incompatible.description':
    'I riferimenti di tipo "{{sourceReferenceType}}" non sono ammessi in campo di riferimento che accetta tipi "{{targetReferenceTypes}}"',
  /** The validation message that is shown when the source and target schema types are incompatible */
  'copy-paste.on-paste.validation.schema-type-incompatible.description':
    'I tipi di schema sorgente e destinazione non sono compatibili',
  /** The validation message that is shown when schema types are incompatible */
  'copy-paste.on-paste.validation.schema-type-incompatible.title':
    'Impossibile risolvere il tipo di schema per il percorso: {{path}}',
  /** The validation message that is shown when string values are incompatible */
  'copy-paste.on-paste.validation.string-value-incompatible.description':
    'Il valore "{{value}}" non è consentito in "{{allowedStrings}}"',
})
