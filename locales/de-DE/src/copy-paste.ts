import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Text on the field action button to copy a document */
  'copy-paste.field-action-copy-button.document.title': 'Dokument kopieren',
  /** Text on the field action button to copy a field */
  'copy-paste.field-action-copy-button.field.title': 'Feld kopieren',
  /** Text on the field action button to paste a document */
  'copy-paste.field-action-paste-button.document.title': 'Dokument einfügen',
  /** Text on the field action button to paste a field */
  'copy-paste.field-action-paste-button.field.title': 'Feld einfügen',
  /** The error message that is shown when the clipboard is not supported */
  'copy-paste.on-copy.validation.clipboard-not-supported.description': undefined, // 'Clipboard access required to copy this content. Allow clipboard permissions in your browser settings, then try copying again.'
  /** The error message that is shown when the clipboard is not supported */
  'copy-paste.on-copy.validation.clipboard-not-supported.title':
    'Ihr Browser unterstützt diese Aktion nicht',
  /** The error message that is shown when there is no value to copy */
  'copy-paste.on-copy.validation.no-value.title': 'Leerer Wert, nichts zum Kopieren',
  /** --- On copy --- */
  /** The error message that is shown when schema types are incompatible */
  'copy-paste.on-copy.validation.schema-type-incompatible.title':
    'Konnte Schema-Typ für Pfad nicht auflösen: {{path}}',
  /** The validation message that is shown when array types are incompatible */
  'copy-paste.on-paste.validation.array-type-incompatible.description':
    'Wert vom Typ "{{type}}" ist in diesem Array-Feld nicht erlaubt',
  /** The validation message that is shown when array values are incompatible */
  'copy-paste.on-paste.validation.array-value-incompatible.description':
    'Wert vom Typ "{{type}}" ist in diesem Array-Feld nicht erlaubt',
  /** The validation message that is shown when the clipboard is empty */
  'copy-paste.on-paste.validation.clipboard-empty.title': 'Nichts zum Einfügen',
  /** The validation message that is shown when the clipboard item is invalid */
  'copy-paste.on-paste.validation.clipboard-invalid.title': 'Ungültiges Zwischenablageelement',
  /** The validation message that is shown when image files are incompatible */
  'copy-paste.on-paste.validation.image-file-incompatible.description':
    'Ein "{{sourceSchemaType}}" ist nicht in einem "{{targetSchemaType}}" erlaubt',
  /** The error message that is shown when the MIME type is not accepted */
  'copy-paste.on-paste.validation.mime-type-incompatible.description':
    'MIME-Typ "{{mimeType}}" wird für dieses Feld nicht akzeptiert',
  /** The error message that is shown when the MIME type validation fails */
  'copy-paste.on-paste.validation.mime-type-validation-failed.description':
    'MIME-Typ-Validierung fehlgeschlagen',
  /** The warning message that is shown when not all values can be pasted */
  'copy-paste.on-paste.validation.partial-warning.title': 'Konnte nicht alle Werte einfügen',
  /** The validation message that is shown when primitive types are incompatible */
  'copy-paste.on-paste.validation.primitive-type-incompatible.description':
    'Wert vom Typ "{{type}}" ist in diesem Feld nicht erlaubt',
  /** --- On paste --- */
  /** The validation message that is shown when pasting a value into a read-only target */
  'copy-paste.on-paste.validation.read-only-target.description': 'Das Ziel ist schreibgeschützt',
  /** The validation message that is shown when reference is incompatible with filter */
  'copy-paste.on-paste.validation.reference-filter-incompatible.description':
    'Referenz ist im Referenzfeld gemäß Filter nicht erlaubt',
  /** The validation message that is shown when reference types are incompatible */
  'copy-paste.on-paste.validation.reference-type-incompatible.description':
    'Referenzen vom Typ "{{sourceReferenceType}}" sind in einem Referenzfeld, das Typen "{{targetReferenceTypes}}" akzeptiert, nicht erlaubt',
  /** The validation message that is shown when reference does not exist */
  'copy-paste.on-paste.validation.reference-validation-failed.description':
    'Das referenzierte Dokument "{{ref}}" existiert nicht',
  /** The validation message that is shown when the source and target schema types are incompatible */
  'copy-paste.on-paste.validation.schema-type-incompatible.description':
    'Quell- und Zielschema-Typen sind nicht kompatibel',
  /** The validation message that is shown when schema types are incompatible */
  'copy-paste.on-paste.validation.schema-type-incompatible.title':
    'Konnte Schema-Typ für Pfad nicht auflösen: {{path}}',
  /** The validation message that is shown when string values are incompatible */
  'copy-paste.on-paste.validation.string-value-incompatible.description':
    'Wert "{{value}}" ist in "{{allowedStrings}}" nicht erlaubt',
})
