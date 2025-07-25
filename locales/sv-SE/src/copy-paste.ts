import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Text on the field action button to copy a document */
  'copy-paste.field-action-copy-button.document.title': 'Kopiera dokument',
  /** Text on the field action button to copy a field */
  'copy-paste.field-action-copy-button.field.title': 'Kopiera fält',
  /** Text on the field action button to paste a document */
  'copy-paste.field-action-paste-button.document.title': 'Klistra in dokument',
  /** Text on the field action button to paste a field */
  'copy-paste.field-action-paste-button.field.title': 'Klistra in fält',
  /** The error message that is shown when the clipboard is not supported */
  'copy-paste.on-copy.validation.clipboard-not-supported.description':
    'Åtkomst till urklipp krävs för att kopiera detta innehåll. Tillåt urklippsbehörigheter i dina webbläsarinställningar och försök kopiera igen.',
  /** The error message that is shown when the clipboard is not supported */
  'copy-paste.on-copy.validation.clipboard-not-supported.title':
    'Din webbläsare stöder inte denna åtgärd',
  /** The error message that is shown when there is no value to copy */
  'copy-paste.on-copy.validation.no-value.title': 'Tomt värde, inget att kopiera',
  /** --- On copy --- */
  /** The error message that is shown when schema types are incompatible */
  'copy-paste.on-copy.validation.schema-type-incompatible.title':
    'Kunde inte lösa schematyp för sökväg: {{path}}',
  /** The validation message that is shown when array types are incompatible */
  'copy-paste.on-paste.validation.array-type-incompatible.description':
    'Värde av typen "{{type}}" är inte tillåtet i detta arrayfält',
  /** The validation message that is shown when array values are incompatible */
  'copy-paste.on-paste.validation.array-value-incompatible.description':
    'Värde av typen "{{type}}" är inte tillåtet i detta arrayfält',
  /** The validation message that is shown when the clipboard is empty */
  'copy-paste.on-paste.validation.clipboard-empty.title': 'Inget att klistra in',
  /** The validation message that is shown when the clipboard item is invalid */
  'copy-paste.on-paste.validation.clipboard-invalid.title': 'Ogiltigt urklippsobjekt',
  /** The validation message that is shown when image files are incompatible */
  'copy-paste.on-paste.validation.image-file-incompatible.description':
    'En "{{sourceSchemaType}}" är inte tillåten i en "{{targetSchemaType}}"',
  /** The error message that is shown when the MIME type is not accepted */
  'copy-paste.on-paste.validation.mime-type-incompatible.description':
    'MIME-typ "{{mimeType}}" är inte accepterad för detta fält',
  /** The error message that is shown when the MIME type validation fails */
  'copy-paste.on-paste.validation.mime-type-validation-failed.description':
    'Validering av MIME-typ misslyckades',
  /** The warning message that is shown when not all values can be pasted */
  'copy-paste.on-paste.validation.partial-warning.title': 'Kunde inte klistra in alla värden',
  /** The validation message that is shown when primitive types are incompatible */
  'copy-paste.on-paste.validation.primitive-type-incompatible.description':
    'Värde av typen "{{type}}" är inte tillåtet i detta fält',
  /** --- On paste --- */
  /** The validation message that is shown when pasting a value into a read-only target */
  'copy-paste.on-paste.validation.read-only-target.description': 'Målet är skrivskyddat',
  /** The validation message that is shown when reference is incompatible with filter */
  'copy-paste.on-paste.validation.reference-filter-incompatible.description':
    'Referens är inte tillåten i referensfält enligt filter',
  /** The validation message that is shown when reference types are incompatible */
  'copy-paste.on-paste.validation.reference-type-incompatible.description':
    'Referenser av typen "{{sourceReferenceType}}" är inte tillåtna i referensfält som accepterar typer "{{targetReferenceTypes}}"',
  /** The validation message that is shown when reference does not exist */
  'copy-paste.on-paste.validation.reference-validation-failed.description':
    'Det refererade dokumentet "{{ref}}" finns inte',
  /** The validation message that is shown when the source and target schema types are incompatible */
  'copy-paste.on-paste.validation.schema-type-incompatible.description':
    'Käll- och målschematyper är inte kompatibla',
  /** The validation message that is shown when schema types are incompatible */
  'copy-paste.on-paste.validation.schema-type-incompatible.title':
    'Kunde inte lösa schematyp för sökväg: {{path}}',
  /** The validation message that is shown when string values are incompatible */
  'copy-paste.on-paste.validation.string-value-incompatible.description':
    'Värdet "{{value}}" är inte tillåtet i "{{allowedStrings}}"',
})
