import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Text on the field action button to copy a document */
  'copy-paste.field-action-copy-button.document.title': 'Afrita skjal',
  /** Text on the field action button to copy a field */
  'copy-paste.field-action-copy-button.field.title': 'Afrita reit',
  /** Text on the field action button to paste a document */
  'copy-paste.field-action-paste-button.document.title': 'Líma inn skjal',
  /** Text on the field action button to paste a field */
  'copy-paste.field-action-paste-button.field.title': 'Líma inn reit',
  /** The error message that is shown when the clipboard is not supported */
  'copy-paste.on-copy.validation.clipboard-not-supported.title':
    'Vafrinn þinn styður ekki þessa aðgerð',
  /** The error message that is shown when there is no value to copy */
  'copy-paste.on-copy.validation.no-value.title': 'Tómt gildi, ekkert til að afrita',
  /** --- On copy --- */
  /** The error message that is shown when schema types are incompatible */
  'copy-paste.on-copy.validation.schema-type-incompatible.title':
    'Gat ekki leyst úr skematýpu fyrir slóð: {{path}}',
  /** The validation message that is shown when array types are incompatible */
  'copy-paste.on-paste.validation.array-type-incompatible.description':
    'Gildi af gerðinni "{{type}}" er ekki leyfilegt í þessum fylkisreit',
  /** The validation message that is shown when array values are incompatible */
  'copy-paste.on-paste.validation.array-value-incompatible.description':
    'Gildi af taginu "{{type}}" er ekki leyfilegt í þessum fylkisreit',
  /** The validation message that is shown when the clipboard is empty */
  'copy-paste.on-paste.validation.clipboard-empty.title': 'Ekkert til að líma inn',
  /** The validation message that is shown when the clipboard item is invalid */
  'copy-paste.on-paste.validation.clipboard-invalid.title': 'Ógilt klippiborðsatriði',
  /** The validation message that is shown when image files are incompatible */
  'copy-paste.on-paste.validation.image-file-incompatible.description':
    '"{{sourceSchemaType}}" er ekki leyfilegt í "{{targetSchemaType}}"',
  /** The error message that is shown when the MIME type is not accepted */
  'copy-paste.on-paste.validation.mime-type-incompatible.description':
    'MIME tag "{{mimeType}}" er ekki samþykkt fyrir þennan reit',
  /** The error message that is shown when the MIME type validation fails */
  'copy-paste.on-paste.validation.mime-type-validation-failed.description':
    'MIME tagstaðfesting mistókst',
  /** The warning message that is shown when not all values can be pasted */
  'copy-paste.on-paste.validation.partial-warning.title': 'Gat ekki límt inn öll gildi',
  /** The validation message that is shown when primitive types are incompatible */
  'copy-paste.on-paste.validation.primitive-type-incompatible.description':
    'Gildi af taginu "{{type}}" er ekki leyfilegt í þessum reit',
  /** --- On paste --- */
  /** The validation message that is shown when pasting a value into a read-only target */
  'copy-paste.on-paste.validation.read-only-target.description': 'Markið er skrifvarið',
  /** The validation message that is shown when reference is incompatible with filter */
  'copy-paste.on-paste.validation.reference-filter-incompatible.description':
    'Tilvísun er ekki leyfileg í tilvísunarreit samkvæmt síu',
  /** The validation message that is shown when reference types are incompatible */
  'copy-paste.on-paste.validation.reference-type-incompatible.description':
    'Tilvísanir af taginu "{{sourceReferenceType}}" eru ekki leyfðar í tilvísunarreit sem samþykkir tög "{{targetReferenceTypes}}"',
  /** The validation message that is shown when reference does not exist */
  'copy-paste.on-paste.validation.reference-validation-failed.description':
    'Tilvísunar skjalið "{{ref}}" er ekki til',
  /** The validation message that is shown when the source and target schema types are incompatible */
  'copy-paste.on-paste.validation.schema-type-incompatible.description':
    'Uppruna- og markskematýpur eru ekki samrýmanlegar',
  /** The validation message that is shown when schema types are incompatible */
  'copy-paste.on-paste.validation.schema-type-incompatible.title':
    'Gat ekki leyst úr skematýpu fyrir slóð: {{path}}',
  /** The validation message that is shown when string values are incompatible */
  'copy-paste.on-paste.validation.string-value-incompatible.description':
    'Gildi "{{value}}" er ekki leyfilegt í "{{allowedStrings}}"',
})
