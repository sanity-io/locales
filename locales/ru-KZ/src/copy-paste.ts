import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Text on the field action button to copy a document */
  'copy-paste.field-action-copy-button.document.title': undefined, // 'Copy document'
  /** Text on the field action button to copy a field */
  'copy-paste.field-action-copy-button.field.title': undefined, // 'Copy field'
  /** Text on the field action button to paste a document */
  'copy-paste.field-action-paste-button.document.title': undefined, // 'Paste document'
  /** Text on the field action button to paste a field */
  'copy-paste.field-action-paste-button.field.title': undefined, // 'Paste field'
  /** The error message that is shown when the clipboard is not supported */
  'copy-paste.on-copy.validation.clipboard-not-supported.title': undefined, // 'Your browser does not support this action'
  /** The success message that is shown when a document is copied */
  'copy-paste.on-copy.validation.copy-document-success.title': undefined, // 'Document "{{fieldNames}}" copied'
  /** The success message that is shown when a field is copied */
  'copy-paste.on-copy.validation.copy-field_one-success.title': undefined, // 'Field "{{fieldName}}" copied'
  /** The error message that is shown when there is no value to copy */
  'copy-paste.on-copy.validation.no-value.title': undefined, // 'Empty value, nothing to copy'
  /** --- On copy --- */
  /** The error message that is shown when schema types are incompatible */
  'copy-paste.on-copy.validation.schema-type-incompatible.title': undefined, // 'Could not resolve schema type for path: {{path}}'
  /** The validation message that is shown when array types are incompatible */
  'copy-paste.on-paste.validation.array-type-incompatible.description': undefined, // 'Value of type "{{type}}" is not allowed in this array field'
  /** The validation message that is shown when array values are incompatible */
  'copy-paste.on-paste.validation.array-value-incompatible.description': undefined, // 'Value of type "{{type}}" is not allowed in this array field'
  /** The validation message that is shown when the clipboard is empty */
  'copy-paste.on-paste.validation.clipboard-empty.title': undefined, // 'Nothing to paste'
  /** The validation message that is shown when the clipboard item is invalid */
  'copy-paste.on-paste.validation.clipboard-invalid.title': undefined, // 'Invalid clipboard item'
  /** The success message that is shown when a document is pasted */
  'copy-paste.on-paste.validation.document-paste-success.title': undefined, // 'Document "{{fieldNames}}" updated'
  /** The success message that is shown when a field is pasted */
  'copy-paste.on-paste.validation.field_one-paste-success.title': undefined, // 'Field "{{fieldName}}" updated'
  /** The validation message that is shown when image files are incompatible */
  'copy-paste.on-paste.validation.image-file-incompatible.description': undefined, // 'A "{{sourceSchemaType}}" is not allowed in a "{{targetSchemaType}}"'
  /** The error message that is shown when the MIME type is not accepted */
  'copy-paste.on-paste.validation.mime-type-incompatible.description': undefined, // 'MIME type "{{mimeType}}" is not accepted for this field'
  /** The error message that is shown when the MIME type validation fails */
  'copy-paste.on-paste.validation.mime-type-validation-failed.description': undefined, // 'MIME type validation failed'
  /** The warning message that is shown when not all values can be pasted */
  'copy-paste.on-paste.validation.partial-warning.title': undefined, // 'Could not paste all values'
  /** The validation message that is shown when primitive types are incompatible */
  'copy-paste.on-paste.validation.primitive-type-incompatible.description': undefined, // 'Value of type "{{type}}" is not allowed in this field'
  /** --- On paste --- */
  /** The validation message that is shown when pasting a value into a read-only target */
  'copy-paste.on-paste.validation.read-only-target.description': undefined, // 'The target is read-only'
  /** The validation message that is shown when reference is incompatible with filter */
  'copy-paste.on-paste.validation.reference-filter-incompatible.description': undefined, // 'Reference is not allowed in reference field according to filter'
  /** The validation message that is shown when reference types are incompatible */
  'copy-paste.on-paste.validation.reference-type-incompatible.description': undefined, // 'References of type "{{sourceReferenceType}}" is not allowed in reference field that accepts types "{{targetReferenceTypes}}"'
  /** The validation message that is shown when the source and target schema types are incompatible */
  'copy-paste.on-paste.validation.schema-type-incompatible.description': undefined, // 'Source and target schema types are not compatible'
  /** The validation message that is shown when schema types are incompatible */
  'copy-paste.on-paste.validation.schema-type-incompatible.title': undefined, // 'Could not resolve schema type for path: {{path}}'
  /** The validation message that is shown when string values are incompatible */
  'copy-paste.on-paste.validation.string-value-incompatible.description': undefined, // 'Value "{{value}}" is not allowed in "{{allowedStrings}}"'
})
