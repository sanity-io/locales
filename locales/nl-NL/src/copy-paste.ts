import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Text on the field action button to copy a document */
  'copy-paste.field-action-copy-button.document.title': 'Document kopiëren',
  /** Text on the field action button to copy a field */
  'copy-paste.field-action-copy-button.field.title': 'Veld kopiëren',
  /** Text on the field action button to paste a document */
  'copy-paste.field-action-paste-button.document.title': 'Document plakken',
  /** Text on the field action button to paste a field */
  'copy-paste.field-action-paste-button.field.title': 'Veld plakken',
  /** The error message that is shown when the clipboard is not supported */
  'copy-paste.on-copy.validation.clipboard-not-supported.title':
    'Uw browser ondersteunt deze actie niet',
  /** The error message that is shown when there is no value to copy */
  'copy-paste.on-copy.validation.no-value.title': 'Lege waarde, niets om te kopiëren',
  /** --- On copy --- */
  /** The error message that is shown when schema types are incompatible */
  'copy-paste.on-copy.validation.schema-type-incompatible.title':
    'Kon schema type voor pad niet oplossen: {{path}}',
  /** The validation message that is shown when array types are incompatible */
  'copy-paste.on-paste.validation.array-type-incompatible.description':
    'Waarde van type "{{type}}" is niet toegestaan in dit array veld',
  /** The validation message that is shown when array values are incompatible */
  'copy-paste.on-paste.validation.array-value-incompatible.description':
    'Waarde van type "{{type}}" is niet toegestaan in dit array veld',
  /** The validation message that is shown when the clipboard is empty */
  'copy-paste.on-paste.validation.clipboard-empty.title': 'Niets om te plakken',
  /** The validation message that is shown when the clipboard item is invalid */
  'copy-paste.on-paste.validation.clipboard-invalid.title': 'Ongeldig klembord item',
  /** The validation message that is shown when image files are incompatible */
  'copy-paste.on-paste.validation.image-file-incompatible.description':
    'Een "{{sourceSchemaType}}" is niet toegestaan in een "{{targetSchemaType}}"',
  /** The error message that is shown when the MIME type is not accepted */
  'copy-paste.on-paste.validation.mime-type-incompatible.description':
    'MIME type "{{mimeType}}" wordt niet geaccepteerd voor dit veld',
  /** The error message that is shown when the MIME type validation fails */
  'copy-paste.on-paste.validation.mime-type-validation-failed.description':
    'MIME type validatie mislukt',
  /** The warning message that is shown when not all values can be pasted */
  'copy-paste.on-paste.validation.partial-warning.title': 'Kon niet alle waarden plakken',
  /** The validation message that is shown when primitive types are incompatible */
  'copy-paste.on-paste.validation.primitive-type-incompatible.description':
    'Waarde van type "{{type}}" is niet toegestaan in dit veld',
  /** --- On paste --- */
  /** The validation message that is shown when pasting a value into a read-only target */
  'copy-paste.on-paste.validation.read-only-target.description': 'Het doel is alleen-lezen',
  /** The validation message that is shown when reference is incompatible with filter */
  'copy-paste.on-paste.validation.reference-filter-incompatible.description':
    'Referentie is niet toegestaan in referentieveld volgens filter',
  /** The validation message that is shown when reference types are incompatible */
  'copy-paste.on-paste.validation.reference-type-incompatible.description':
    'Referenties van type "{{sourceReferenceType}}" zijn niet toegestaan in referentieveld dat types "{{targetReferenceTypes}}" accepteert',
  /** The validation message that is shown when reference does not exist */
  'copy-paste.on-paste.validation.reference-validation-failed.description':
    'Het gerefereerde document "{{ref}}" bestaat niet',
  /** The validation message that is shown when the source and target schema types are incompatible */
  'copy-paste.on-paste.validation.schema-type-incompatible.description':
    'Bron- en doelschema types zijn niet compatibel',
  /** The validation message that is shown when schema types are incompatible */
  'copy-paste.on-paste.validation.schema-type-incompatible.title':
    'Kon schema type voor pad niet oplossen: {{path}}',
  /** The validation message that is shown when string values are incompatible */
  'copy-paste.on-paste.validation.string-value-incompatible.description':
    'Waarde "{{value}}" is niet toegestaan in "{{allowedStrings}}"',
})
