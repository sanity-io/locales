import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Text on the field action button to copy a document */
  'copy-paste.field-action-copy-button.document.title': 'Copier le document',
  /** Text on the field action button to copy a field */
  'copy-paste.field-action-copy-button.field.title': 'Copier le champ',
  /** Text on the field action button to paste a document */
  'copy-paste.field-action-paste-button.document.title': 'Coller le document',
  /** Text on the field action button to paste a field */
  'copy-paste.field-action-paste-button.field.title': 'Coller le champ',
  /** The error message that is shown when the clipboard is not supported */
  'copy-paste.on-copy.validation.clipboard-not-supported.title':
    'Votre navigateur ne prend pas en charge cette action',
  /** The success message that is shown when a document is copied */
  'copy-paste.on-copy.validation.copy-document-success.title': 'Document "{{fieldNames}}" copié',
  /** The success message that is shown when a field is copied */
  'copy-paste.on-copy.validation.copy-field_one-success.title': 'Champ "{{fieldName}}" copié',
  /** The error message that is shown when there is no value to copy */
  'copy-paste.on-copy.validation.no-value.title': 'Valeur vide, rien à copier',
  /** --- On copy --- */
  /** The error message that is shown when schema types are incompatible */
  'copy-paste.on-copy.validation.schema-type-incompatible.title':
    'Impossible de résoudre le type de schéma pour le chemin : {{path}}',
  /** The validation message that is shown when array types are incompatible */
  'copy-paste.on-paste.validation.array-type-incompatible.description':
    'La valeur de type "{{type}}" n\'est pas autorisée dans ce champ de tableau',
  /** The validation message that is shown when array values are incompatible */
  'copy-paste.on-paste.validation.array-value-incompatible.description':
    'La valeur de type "{{type}}" n\'est pas autorisée dans ce champ de tableau',
  /** The validation message that is shown when the clipboard is empty */
  'copy-paste.on-paste.validation.clipboard-empty.title': 'Rien à coller',
  /** The validation message that is shown when the clipboard item is invalid */
  'copy-paste.on-paste.validation.clipboard-invalid.title': 'Élément du presse-papiers invalide',
  /** The success message that is shown when a document is pasted */
  'copy-paste.on-paste.validation.document-paste-success.title':
    'Document "{{fieldNames}}" mis à jour',
  /** The success message that is shown when a field is pasted */
  'copy-paste.on-paste.validation.field_one-paste-success.title':
    'Champ "{{fieldName}}" mis à jour',
  /** The validation message that is shown when image files are incompatible */
  'copy-paste.on-paste.validation.image-file-incompatible.description':
    'Un "{{sourceSchemaType}}" n\'est pas autorisé dans un "{{targetSchemaType}}"',
  /** The error message that is shown when the MIME type is not accepted */
  'copy-paste.on-paste.validation.mime-type-incompatible.description':
    'Le type MIME "{{mimeType}}" n\'est pas accepté pour ce champ',
  /** The error message that is shown when the MIME type validation fails */
  'copy-paste.on-paste.validation.mime-type-validation-failed.description':
    'La validation du type MIME a échoué',
  /** The warning message that is shown when not all values can be pasted */
  'copy-paste.on-paste.validation.partial-warning.title': 'Impossible de coller toutes les valeurs',
  /** The validation message that is shown when primitive types are incompatible */
  'copy-paste.on-paste.validation.primitive-type-incompatible.description':
    'La valeur de type "{{type}}" n\'est pas autorisée dans ce champ',
  /** --- On paste --- */
  /** The validation message that is shown when pasting a value into a read-only target */
  'copy-paste.on-paste.validation.read-only-target.description': 'La cible est en lecture seule',
  /** The validation message that is shown when reference is incompatible with filter */
  'copy-paste.on-paste.validation.reference-filter-incompatible.description':
    "La référence n'est pas autorisée dans le champ de référence selon le filtre",
  /** The validation message that is shown when reference types are incompatible */
  'copy-paste.on-paste.validation.reference-type-incompatible.description':
    'Les références de type "{{sourceReferenceType}}" ne sont pas autorisées dans le champ de référence qui accepte les types "{{targetReferenceTypes}}"',
  /** The validation message that is shown when the source and target schema types are incompatible */
  'copy-paste.on-paste.validation.schema-type-incompatible.description':
    'Les types de schéma source et cible ne sont pas compatibles',
  /** The validation message that is shown when schema types are incompatible */
  'copy-paste.on-paste.validation.schema-type-incompatible.title':
    'Impossible de résoudre le type de schéma pour le chemin : {{path}}',
  /** The validation message that is shown when string values are incompatible */
  'copy-paste.on-paste.validation.string-value-incompatible.description':
    'La valeur "{{value}}" n\'est pas autorisée dans "{{allowedStrings}}"',
})
