import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Text on the field action button to copy a document */
  'copy-paste.field-action-copy-button.document.title': 'Dokumentum másolása',
  /** Text on the field action button to copy a field */
  'copy-paste.field-action-copy-button.field.title': 'Mező másolása',
  /** Text on the field action button to paste a document */
  'copy-paste.field-action-paste-button.document.title': 'Dokumentum beillesztése',
  /** Text on the field action button to paste a field */
  'copy-paste.field-action-paste-button.field.title': 'Mező beillesztése',
  /** The error message that is shown when the clipboard is not supported */
  'copy-paste.on-copy.validation.clipboard-not-supported.description': undefined, // 'Clipboard access required to copy this content. Allow clipboard permissions in your browser settings, then try copying again.'
  /** The error message that is shown when the clipboard is not supported */
  'copy-paste.on-copy.validation.clipboard-not-supported.title':
    'A böngészője nem támogatja ezt a műveletet',
  /** The error message that is shown when there is no value to copy */
  'copy-paste.on-copy.validation.no-value.title': 'Üres érték, nincs mit másolni',
  /** --- On copy --- */
  /** The error message that is shown when schema types are incompatible */
  'copy-paste.on-copy.validation.schema-type-incompatible.title':
    'Nem sikerült megoldani a sématípust az útvonalhoz: {{path}}',
  /** The validation message that is shown when array types are incompatible */
  'copy-paste.on-paste.validation.array-type-incompatible.description':
    'A "{{type}}" típusú érték nem megengedett ebben a tömb mezőben',
  /** The validation message that is shown when array values are incompatible */
  'copy-paste.on-paste.validation.array-value-incompatible.description':
    'A "{{type}}" típusú érték nem megengedett ebben a tömb mezőben',
  /** The validation message that is shown when the clipboard is empty */
  'copy-paste.on-paste.validation.clipboard-empty.title': 'Nincs mit beilleszteni',
  /** The validation message that is shown when the clipboard item is invalid */
  'copy-paste.on-paste.validation.clipboard-invalid.title': 'Érvénytelen vágólap elem',
  /** The validation message that is shown when image files are incompatible */
  'copy-paste.on-paste.validation.image-file-incompatible.description':
    'A "{{sourceSchemaType}}" nem megengedett a "{{targetSchemaType}}"-ban',
  /** The error message that is shown when the MIME type is not accepted */
  'copy-paste.on-paste.validation.mime-type-incompatible.description':
    'A "{{mimeType}}" MIME típus nem elfogadott ehhez a mezőhöz',
  /** The error message that is shown when the MIME type validation fails */
  'copy-paste.on-paste.validation.mime-type-validation-failed.description':
    'A MIME típus ellenőrzése sikertelen',
  /** The warning message that is shown when not all values can be pasted */
  'copy-paste.on-paste.validation.partial-warning.title':
    'Nem sikerült minden értéket beilleszteni',
  /** The validation message that is shown when primitive types are incompatible */
  'copy-paste.on-paste.validation.primitive-type-incompatible.description':
    'A "{{type}}" típusú érték nem megengedett ebben a mezőben',
  /** --- On paste --- */
  /** The validation message that is shown when pasting a value into a read-only target */
  'copy-paste.on-paste.validation.read-only-target.description': 'A cél csak olvasható',
  /** The validation message that is shown when reference is incompatible with filter */
  'copy-paste.on-paste.validation.reference-filter-incompatible.description':
    'A hivatkozás nem megengedett a hivatkozási mezőben a szűrő szerint',
  /** The validation message that is shown when reference types are incompatible */
  'copy-paste.on-paste.validation.reference-type-incompatible.description':
    'A "{{sourceReferenceType}}" típusú hivatkozások nem megengedettek a "{{targetReferenceTypes}}" típusokat elfogadó hivatkozási mezőben',
  /** The validation message that is shown when reference does not exist */
  'copy-paste.on-paste.validation.reference-validation-failed.description':
    'A hivatkozott dokumentum „{{ref}}” nem létezik',
  /** The validation message that is shown when the source and target schema types are incompatible */
  'copy-paste.on-paste.validation.schema-type-incompatible.description':
    'A forrás és a cél sématípusai nem kompatibilisek',
  /** The validation message that is shown when schema types are incompatible */
  'copy-paste.on-paste.validation.schema-type-incompatible.title':
    'Nem található a sématípus az útvonalon: {{path}}',
  /** The validation message that is shown when string values are incompatible */
  'copy-paste.on-paste.validation.string-value-incompatible.description':
    'A(z) "{{value}}" érték nem megengedett "{{allowedStrings}}"-ben',
})
