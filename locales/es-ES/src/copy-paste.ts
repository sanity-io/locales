import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Text on the field action button to copy a document */
  'copy-paste.field-action-copy-button.document.title': 'Copiar documento',
  /** Text on the field action button to copy a field */
  'copy-paste.field-action-copy-button.field.title': 'Copiar campo',
  /** Text on the field action button to paste a document */
  'copy-paste.field-action-paste-button.document.title': 'Pegar documento',
  /** Text on the field action button to paste a field */
  'copy-paste.field-action-paste-button.field.title': 'Pegar campo',
  /** The error message that is shown when the clipboard is not supported */
  'copy-paste.on-copy.validation.clipboard-not-supported.title':
    'Tu navegador no admite esta acción',
  /** The success message that is shown when a document is copied */
  'copy-paste.on-copy.validation.copy-document-success.title': 'Documento "{{fieldNames}}" copiado',
  /** The success message that is shown when a field is copied */
  'copy-paste.on-copy.validation.copy-field_one-success.title': 'Campo "{{fieldName}}" copiado',
  /** The success message that is shown when a array item is copied */
  'copy-paste.on-copy.validation.copy-item_one-success.title': 'Elemento "{{typeName}}" copiado',
  /** The error message that is shown when there is no value to copy */
  'copy-paste.on-copy.validation.no-value.title': 'Valor vacío, nada que copiar',
  /** --- On copy --- */
  /** The error message that is shown when schema types are incompatible */
  'copy-paste.on-copy.validation.schema-type-incompatible.title':
    'No se pudo resolver el tipo de esquema para la ruta: {{path}}',
  /** The validation message that is shown when array types are incompatible */
  'copy-paste.on-paste.validation.array-type-incompatible.description':
    'Valor de tipo "{{type}}" no está permitido en este campo de arreglo',
  /** The validation message that is shown when array values are incompatible */
  'copy-paste.on-paste.validation.array-value-incompatible.description':
    'Valor de tipo "{{type}}" no está permitido en este campo de arreglo',
  /** The validation message that is shown when the clipboard is empty */
  'copy-paste.on-paste.validation.clipboard-empty.title': 'Nada que pegar',
  /** The validation message that is shown when the clipboard item is invalid */
  'copy-paste.on-paste.validation.clipboard-invalid.title': 'Elemento del portapapeles inválido',
  /** The success message that is shown when a document is pasted */
  'copy-paste.on-paste.validation.document-paste-success.title':
    'Documento "{{fieldNames}}" actualizado',
  /** The success message that is shown when a field is pasted */
  'copy-paste.on-paste.validation.field_one-paste-success.title':
    'Campo "{{fieldName}}" actualizado',
  /** The validation message that is shown when image files are incompatible */
  'copy-paste.on-paste.validation.image-file-incompatible.description':
    'Un "{{sourceSchemaType}}" no está permitido en un "{{targetSchemaType}}"',
  /** The error message that is shown when the MIME type is not accepted */
  'copy-paste.on-paste.validation.mime-type-incompatible.description':
    'Tipo MIME "{{mimeType}}" no aceptado para este campo',
  /** The error message that is shown when the MIME type validation fails */
  'copy-paste.on-paste.validation.mime-type-validation-failed.description':
    'La validación del tipo MIME ha fallado',
  /** The warning message that is shown when not all values can be pasted */
  'copy-paste.on-paste.validation.partial-warning.title': 'No se pudieron pegar todos los valores',
  /** The validation message that is shown when primitive types are incompatible */
  'copy-paste.on-paste.validation.primitive-type-incompatible.description':
    'Valor de tipo "{{type}}" no está permitido en este campo',
  /** --- On paste --- */
  /** The validation message that is shown when pasting a value into a read-only target */
  'copy-paste.on-paste.validation.read-only-target.description': 'El destino es de solo lectura',
  /** The validation message that is shown when reference is incompatible with filter */
  'copy-paste.on-paste.validation.reference-filter-incompatible.description':
    'La referencia no está permitida en el campo de referencia según el filtro',
  /** The validation message that is shown when reference types are incompatible */
  'copy-paste.on-paste.validation.reference-type-incompatible.description':
    'Referencias de tipo "{{sourceReferenceType}}" no están permitidas en campo de referencia que acepta tipos "{{targetReferenceTypes}}"',
  /** The validation message that is shown when reference does not exist */
  'copy-paste.on-paste.validation.reference-validation-failed.description':
    'El documento referenciado "{{ref}}" no existe',
  /** The validation message that is shown when the source and target schema types are incompatible */
  'copy-paste.on-paste.validation.schema-type-incompatible.description':
    'Los tipos de esquema de origen y destino no son compatibles',
  /** The validation message that is shown when schema types are incompatible */
  'copy-paste.on-paste.validation.schema-type-incompatible.title':
    'No se pudo resolver el tipo de esquema para la ruta: {{path}}',
  /** The validation message that is shown when string values are incompatible */
  'copy-paste.on-paste.validation.string-value-incompatible.description':
    'El valor "{{value}}" no está permitido en "{{allowedStrings}}"',
})
