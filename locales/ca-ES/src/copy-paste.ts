import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Text on the field action button to copy a document */
  'copy-paste.field-action-copy-button.document.title': 'Copia el document',
  /** Text on the field action button to copy a field */
  'copy-paste.field-action-copy-button.field.title': 'Copia el camp',
  /** Text on the field action button to paste a document */
  'copy-paste.field-action-paste-button.document.title': 'Enganxa el document',
  /** Text on the field action button to paste a field */
  'copy-paste.field-action-paste-button.field.title': 'Enganxa el camp',
  /** The error message that is shown when the clipboard is not supported */
  'copy-paste.on-copy.validation.clipboard-not-supported.title':
    'El teu navegador no admet aquesta acció',
  /** The error message that is shown when there is no value to copy */
  'copy-paste.on-copy.validation.no-value.title': 'Valor buit, res per copiar',
  /** --- On copy --- */
  /** The error message that is shown when schema types are incompatible */
  'copy-paste.on-copy.validation.schema-type-incompatible.title':
    "No s'ha pogut resoldre el tipus d'esquema per la ruta: {{path}}",
  /** The validation message that is shown when array types are incompatible */
  'copy-paste.on-paste.validation.array-type-incompatible.description':
    'El valor del tipus "{{type}}" no està permès en aquest camp d\'array',
  /** The validation message that is shown when array values are incompatible */
  'copy-paste.on-paste.validation.array-value-incompatible.description':
    'El valor del tipus "{{type}}" no està permès en aquest camp d\'array',
  /** The validation message that is shown when the clipboard is empty */
  'copy-paste.on-paste.validation.clipboard-empty.title': 'Res per enganxar',
  /** The validation message that is shown when the clipboard item is invalid */
  'copy-paste.on-paste.validation.clipboard-invalid.title': 'Element del porta-retalls invàlid',
  /** The validation message that is shown when image files are incompatible */
  'copy-paste.on-paste.validation.image-file-incompatible.description':
    'Un "{{sourceSchemaType}}" no està permès en un "{{targetSchemaType}}"',
  /** The error message that is shown when the MIME type is not accepted */
  'copy-paste.on-paste.validation.mime-type-incompatible.description':
    'El tipus MIME "{{mimeType}}" no està acceptat per aquest camp',
  /** The error message that is shown when the MIME type validation fails */
  'copy-paste.on-paste.validation.mime-type-validation-failed.description':
    'La validació del tipus MIME ha fallat',
  /** The warning message that is shown when not all values can be pasted */
  'copy-paste.on-paste.validation.partial-warning.title': "No s'han pogut enganxar tots els valors",
  /** The validation message that is shown when primitive types are incompatible */
  'copy-paste.on-paste.validation.primitive-type-incompatible.description':
    'El valor del tipus "{{type}}" no està permès en aquest camp',
  /** --- On paste --- */
  /** The validation message that is shown when pasting a value into a read-only target */
  'copy-paste.on-paste.validation.read-only-target.description': 'El destí és de només lectura',
  /** The validation message that is shown when reference is incompatible with filter */
  'copy-paste.on-paste.validation.reference-filter-incompatible.description':
    'La referència no està permesa en el camp de referència segons el filtre',
  /** The validation message that is shown when reference types are incompatible */
  'copy-paste.on-paste.validation.reference-type-incompatible.description':
    'Les referències del tipus "{{sourceReferenceType}}" no estan permeses en el camp de referència que accepta tipus "{{targetReferenceTypes}}"',
  /** The validation message that is shown when reference does not exist */
  'copy-paste.on-paste.validation.reference-validation-failed.description':
    'El document referenciat "{{ref}}" no existeix',
  /** The validation message that is shown when the source and target schema types are incompatible */
  'copy-paste.on-paste.validation.schema-type-incompatible.description':
    "Els tipus d'esquema d'origen i destí no són compatibles",
  /** The validation message that is shown when schema types are incompatible */
  'copy-paste.on-paste.validation.schema-type-incompatible.title':
    "No s'ha pogut resoldre el tipus d'esquema per la ruta: {{path}}",
  /** The validation message that is shown when string values are incompatible */
  'copy-paste.on-paste.validation.string-value-incompatible.description':
    'El valor "{{value}}" no està permès en "{{allowedStrings}}"',
})
