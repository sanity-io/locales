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
  'copy-paste.on-copy.validation.clipboard-not-supported.description': undefined, // 'Clipboard access required to copy this content. Allow clipboard permissions in your browser settings, then try copying again.'
  /** The error message that is shown when the clipboard is not supported */
  'copy-paste.on-copy.validation.clipboard-not-supported.title':
    'Nettleseren din støtter ikke denne handlingen',
  /** The error message that is shown when there is no value to copy */
  'copy-paste.on-copy.validation.no-value.title': 'Tom verdi, ingenting å kopiere',
  /** --- On copy --- */
  /** The error message that is shown when schema types are incompatible */
  'copy-paste.on-copy.validation.schema-type-incompatible.title':
    'Kunne ikke finne skjematypen for sti: {{path}}',
  /** The validation message that is shown when array types are incompatible */
  'copy-paste.on-paste.validation.array-type-incompatible.description':
    'Verdi av typen "{{type}}" er ikke tillatt i dette listefeltet',
  /** The validation message that is shown when array values are incompatible */
  'copy-paste.on-paste.validation.array-value-incompatible.description':
    'Verdi av typen "{{type}}" er ikke tillatt i dette listefeltet',
  /** The validation message that is shown when the clipboard is empty */
  'copy-paste.on-paste.validation.clipboard-empty.title': 'Ingenting å lime inn',
  /** The validation message that is shown when the clipboard item is invalid */
  'copy-paste.on-paste.validation.clipboard-invalid.title': 'Ugyldig utklippselement',
  /** The validation message that is shown when image files are incompatible */
  'copy-paste.on-paste.validation.image-file-incompatible.description':
    'En "{{sourceSchemaType}}" er ikke tillatt i en "{{targetSchemaType}}"',
  /** The error message that is shown when the MIME type is not accepted */
  'copy-paste.on-paste.validation.mime-type-incompatible.description':
    'Filtypen "{{mimeType}}" er ikke akseptert for dette feltet',
  /** The error message that is shown when the MIME type validation fails */
  'copy-paste.on-paste.validation.mime-type-validation-failed.description':
    'Validering av filtypen mislyktes',
  /** The warning message that is shown when not all values can be pasted */
  'copy-paste.on-paste.validation.partial-warning.title': 'Kunne ikke lime inn alle verdier',
  /** The validation message that is shown when primitive types are incompatible */
  'copy-paste.on-paste.validation.primitive-type-incompatible.description':
    'Verdi av typen "{{type}}" er ikke tillatt i dette feltet',
  /** --- On paste --- */
  /** The validation message that is shown when pasting a value into a read-only target */
  'copy-paste.on-paste.validation.read-only-target.description': 'Feltet er skrivebeskyttet',
  /** The validation message that is shown when reference is incompatible with filter */
  'copy-paste.on-paste.validation.reference-filter-incompatible.description':
    'Referanse er ikke tillatt i referansefeltet i henhold til filteret',
  /** The validation message that is shown when reference types are incompatible */
  'copy-paste.on-paste.validation.reference-type-incompatible.description':
    'Referanser av typen "{{sourceReferenceType}}" er ikke tillatt i referansefelt som aksepterer typer "{{targetReferenceTypes}}"',
  /** The validation message that is shown when reference does not exist */
  'copy-paste.on-paste.validation.reference-validation-failed.description':
    'Det refererte dokumentet "{{ref}}" eksisterer ikke',
  /** The validation message that is shown when the source and target schema types are incompatible */
  'copy-paste.on-paste.validation.schema-type-incompatible.description':
    'Kilde- og målskjematyper er ikke kompatible',
  /** The validation message that is shown when schema types are incompatible */
  'copy-paste.on-paste.validation.schema-type-incompatible.title':
    'Kunne ikke finne skjematypen for sti: {{path}}',
  /** The validation message that is shown when string values are incompatible */
  'copy-paste.on-paste.validation.string-value-incompatible.description':
    'Verdien "{{value}}" er ikke tillatt i "{{allowedStrings}}"',
})
