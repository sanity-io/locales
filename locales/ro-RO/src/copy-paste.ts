import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Text on the field action button to copy a document */
  'copy-paste.field-action-copy-button.document.title': 'Copiază documentul',
  /** Text on the field action button to copy a field */
  'copy-paste.field-action-copy-button.field.title': 'Copiază câmpul',
  /** Text on the field action button to paste a document */
  'copy-paste.field-action-paste-button.document.title': 'Lipește documentul',
  /** Text on the field action button to paste a field */
  'copy-paste.field-action-paste-button.field.title': 'Lipește câmpul',
  /** The error message that is shown when the clipboard is not supported */
  'copy-paste.on-copy.validation.clipboard-not-supported.description': undefined, // 'Clipboard access required to copy this content. Allow clipboard permissions in your browser settings, then try copying again.'
  /** The error message that is shown when the clipboard is not supported */
  'copy-paste.on-copy.validation.clipboard-not-supported.title':
    'Browserul tău nu suportă această acțiune',
  /** The error message that is shown when there is no value to copy */
  'copy-paste.on-copy.validation.no-value.title': 'Câmp gol, nimic de copiat',
  /** --- On copy --- */
  /** The error message that is shown when schema types are incompatible */
  'copy-paste.on-copy.validation.schema-type-incompatible.title':
    'Nu s-a putut rezolva tipul de schemă pentru calea: {{path}}',
  /** The validation message that is shown when array types are incompatible */
  'copy-paste.on-paste.validation.array-type-incompatible.description':
    'Valoarea de tip "{{type}}" nu este permisă în acest câmp de tip array',
  /** The validation message that is shown when array values are incompatible */
  'copy-paste.on-paste.validation.array-value-incompatible.description':
    'Valoarea de tip "{{type}}" nu este permisă în acest câmp de tip array',
  /** The validation message that is shown when the clipboard is empty */
  'copy-paste.on-paste.validation.clipboard-empty.title': 'Nimic de lipit',
  /** The validation message that is shown when the clipboard item is invalid */
  'copy-paste.on-paste.validation.clipboard-invalid.title': 'Elementul din clipboard nu este valid',
  /** The validation message that is shown when image files are incompatible */
  'copy-paste.on-paste.validation.image-file-incompatible.description':
    'Un "{{sourceSchemaType}}" nu este permis într-un "{{targetSchemaType}}"',
  /** The error message that is shown when the MIME type is not accepted */
  'copy-paste.on-paste.validation.mime-type-incompatible.description':
    'Tipul MIME "{{mimeType}}" nu este acceptat pentru acest câmp',
  /** The error message that is shown when the MIME type validation fails */
  'copy-paste.on-paste.validation.mime-type-validation-failed.description':
    'Validarea tipului MIME a eșuat',
  /** The warning message that is shown when not all values can be pasted */
  'copy-paste.on-paste.validation.partial-warning.title': 'Nu s-au putut lipi toate valorile',
  /** The validation message that is shown when primitive types are incompatible */
  'copy-paste.on-paste.validation.primitive-type-incompatible.description':
    'Valoarea de tip "{{type}}" nu este permisă în acest câmp',
  /** --- On paste --- */
  /** The validation message that is shown when pasting a value into a read-only target */
  'copy-paste.on-paste.validation.read-only-target.description':
    'Target-ul este doar pentru citire',
  /** The validation message that is shown when reference is incompatible with filter */
  'copy-paste.on-paste.validation.reference-filter-incompatible.description':
    'Referința nu este permisă în acest câmp conform filtrului',
  /** The validation message that is shown when reference types are incompatible */
  'copy-paste.on-paste.validation.reference-type-incompatible.description':
    'Referințele de tip "{{sourceReferenceType}}" nu sunt permise în câmpul care acceptă tipuri "{{targetReferenceTypes}}"',
  /** The validation message that is shown when reference does not exist */
  'copy-paste.on-paste.validation.reference-validation-failed.description':
    'Documentul la care se face referirea "{{ref}}" nu există',
  /** The validation message that is shown when the source and target schema types are incompatible */
  'copy-paste.on-paste.validation.schema-type-incompatible.description':
    'Tipurile de schemă sursă și țintă nu sunt compatibile',
  /** The validation message that is shown when schema types are incompatible */
  'copy-paste.on-paste.validation.schema-type-incompatible.title':
    'Nu s-a putut rezolva tipul de schemă pentru calea: {{path}}',
  /** The validation message that is shown when string values are incompatible */
  'copy-paste.on-paste.validation.string-value-incompatible.description':
    'Valoarea "{{value}}" nu este permisă în "{{allowedStrings}}"',
})
