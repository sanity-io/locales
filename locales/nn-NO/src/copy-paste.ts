import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Text on the field action button to copy a document */
  'copy-paste.field-action-copy-button.document.title': 'Kopier dokument',
  /** Text on the field action button to copy a field */
  'copy-paste.field-action-copy-button.field.title': 'Kopier felt',
  /** Text on the field action button to paste a document */
  'copy-paste.field-action-paste-button.document.title': 'Lim inn dokument',
  /** Text on the field action button to paste a field */
  'copy-paste.field-action-paste-button.field.title': 'Lim inn felt',
  /** The error message that is shown when the clipboard is not supported */
  'copy-paste.on-copy.validation.clipboard-not-supported.title':
    'Nettlesaren din støttar ikkje denne handlinga',
  /** The success message that is shown when a document is copied */
  'copy-paste.on-copy.validation.copy-document-success.title':
    'Dokumentet "{{fieldNames}}" er kopiert',
  /** The success message that is shown when a field is copied */
  'copy-paste.on-copy.validation.copy-field_one-success.title': 'Feltet "{{fieldName}}" er kopiert',
  /** The success message that is shown when a array item is copied */
  'copy-paste.on-copy.validation.copy-item_one-success.title':
    'Elementet "{{typeName}}" er kopiert',
  /** The error message that is shown when there is no value to copy */
  'copy-paste.on-copy.validation.no-value.title': 'Tom verdi, ingenting å kopiere',
  /** --- On copy --- */
  /** The error message that is shown when schema types are incompatible */
  'copy-paste.on-copy.validation.schema-type-incompatible.title':
    'Kunne ikkje løyse skjematypen for sti: {{path}}',
  /** The validation message that is shown when array types are incompatible */
  'copy-paste.on-paste.validation.array-type-incompatible.description':
    'Verdi av typen "{{type}}" er ikkje tillaten i dette matrisefeltet',
  /** The validation message that is shown when array values are incompatible */
  'copy-paste.on-paste.validation.array-value-incompatible.description':
    'Verdi av typen "{{type}}" er ikkje tillaten i dette matrisefeltet',
  /** The validation message that is shown when the clipboard is empty */
  'copy-paste.on-paste.validation.clipboard-empty.title': 'Ingenting å lime inn',
  /** The validation message that is shown when the clipboard item is invalid */
  'copy-paste.on-paste.validation.clipboard-invalid.title': 'Ugyldig utklippselement',
  /** The success message that is shown when a document is pasted */
  'copy-paste.on-paste.validation.document-paste-success.title':
    'Dokumentet "{{fieldNames}}" er oppdatert',
  /** The success message that is shown when a field is pasted */
  'copy-paste.on-paste.validation.field_one-paste-success.title':
    'Feltet "{{fieldName}}" er oppdatert',
  /** The validation message that is shown when image files are incompatible */
  'copy-paste.on-paste.validation.image-file-incompatible.description':
    'Ein "{{sourceSchemaType}}" er ikkje tillaten i ein "{{targetSchemaType}}"',
  /** The error message that is shown when the MIME type is not accepted */
  'copy-paste.on-paste.validation.mime-type-incompatible.description':
    'MIME-typen "{{mimeType}}" er ikkje akseptert for dette feltet',
  /** The error message that is shown when the MIME type validation fails */
  'copy-paste.on-paste.validation.mime-type-validation-failed.description':
    'Validering av MIME-type feila',
  /** The warning message that is shown when not all values can be pasted */
  'copy-paste.on-paste.validation.partial-warning.title': 'Kunne ikkje lime inn alle verdiar',
  /** The validation message that is shown when primitive types are incompatible */
  'copy-paste.on-paste.validation.primitive-type-incompatible.description':
    'Verdi av typen "{{type}}" er ikkje tillaten i dette feltet',
  /** --- On paste --- */
  /** The validation message that is shown when pasting a value into a read-only target */
  'copy-paste.on-paste.validation.read-only-target.description': 'Målet er skrivebeskytta',
  /** The validation message that is shown when reference is incompatible with filter */
  'copy-paste.on-paste.validation.reference-filter-incompatible.description':
    'Referanse er ikkje tillaten i referansefeltet i følge filteret',
  /** The validation message that is shown when reference types are incompatible */
  'copy-paste.on-paste.validation.reference-type-incompatible.description':
    'Referansar av typen "{{sourceReferenceType}}" er ikkje tillaten i referansefelt som aksepterer typar "{{targetReferenceTypes}}"',
  /** The validation message that is shown when reference does not exist */
  'copy-paste.on-paste.validation.reference-validation-failed.description':
    'Det refererte dokumentet "{{ref}}" eksisterer ikkje',
  /** The validation message that is shown when the source and target schema types are incompatible */
  'copy-paste.on-paste.validation.schema-type-incompatible.description':
    'Kjelde- og målskjematypar er ikkje kompatible',
  /** The validation message that is shown when schema types are incompatible */
  'copy-paste.on-paste.validation.schema-type-incompatible.title':
    'Kunne ikkje løyse skjematypen for sti: {{path}}',
  /** The validation message that is shown when string values are incompatible */
  'copy-paste.on-paste.validation.string-value-incompatible.description':
    'Verdien "{{value}}" er ikkje tillaten i "{{allowedStrings}}"',
})
