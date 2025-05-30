import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Text on the field action button to copy a document */
  'copy-paste.field-action-copy-button.document.title': 'Kopēt dokumentu',
  /** Text on the field action button to copy a field */
  'copy-paste.field-action-copy-button.field.title': 'Kopēt lauku',
  /** Text on the field action button to paste a document */
  'copy-paste.field-action-paste-button.document.title': 'Ielīmēt dokumentu',
  /** Text on the field action button to paste a field */
  'copy-paste.field-action-paste-button.field.title': 'Ielīmēt lauku',
  /** The error message that is shown when the clipboard is not supported */
  'copy-paste.on-copy.validation.clipboard-not-supported.title':
    'Jūsu pārlūkprogramma neatbalsta šo darbību',
  /** The error message that is shown when there is no value to copy */
  'copy-paste.on-copy.validation.no-value.title': 'Tukša vērtība, nav ko kopēt',
  /** --- On copy --- */
  /** The error message that is shown when schema types are incompatible */
  'copy-paste.on-copy.validation.schema-type-incompatible.title':
    'Nevarēja atrisināt shēmas tipu ceļam: {{path}}',
  /** The validation message that is shown when array types are incompatible */
  'copy-paste.on-paste.validation.array-type-incompatible.description':
    'Vērtība tipa "{{type}}" nav atļauta šajā masīva laukā',
  /** The validation message that is shown when array values are incompatible */
  'copy-paste.on-paste.validation.array-value-incompatible.description':
    'Vērtība tipa "{{type}}" nav atļauta šajā masīva laukā',
  /** The validation message that is shown when the clipboard is empty */
  'copy-paste.on-paste.validation.clipboard-empty.title': 'Nav ko ielīmēt',
  /** The validation message that is shown when the clipboard item is invalid */
  'copy-paste.on-paste.validation.clipboard-invalid.title': 'Nederīgs starpliktuves objekts',
  /** The validation message that is shown when image files are incompatible */
  'copy-paste.on-paste.validation.image-file-incompatible.description':
    '"{{sourceSchemaType}}" nav atļauts "{{targetSchemaType}}"',
  /** The error message that is shown when the MIME type is not accepted */
  'copy-paste.on-paste.validation.mime-type-incompatible.description':
    'MIME tips "{{mimeType}}" nav pieņemams šim laukam',
  /** The error message that is shown when the MIME type validation fails */
  'copy-paste.on-paste.validation.mime-type-validation-failed.description':
    'MIME tipa validācija neizdevās',
  /** The warning message that is shown when not all values can be pasted */
  'copy-paste.on-paste.validation.partial-warning.title': 'Nevarēja ielīmēt visas vērtības',
  /** The validation message that is shown when primitive types are incompatible */
  'copy-paste.on-paste.validation.primitive-type-incompatible.description':
    'Vērtība tipa "{{type}}" nav atļauta šajā laukā',
  /** --- On paste --- */
  /** The validation message that is shown when pasting a value into a read-only target */
  'copy-paste.on-paste.validation.read-only-target.description': 'Mērķis ir tikai lasāms',
  /** The validation message that is shown when reference is incompatible with filter */
  'copy-paste.on-paste.validation.reference-filter-incompatible.description':
    'Atsauce nav atļauta atsauču laukā saskaņā ar filtru',
  /** The validation message that is shown when reference types are incompatible */
  'copy-paste.on-paste.validation.reference-type-incompatible.description':
    'Atsauces tipa "{{sourceReferenceType}}" nav atļautas atsauču laukā, kas pieņem tipus "{{targetReferenceTypes}}"',
  /** The validation message that is shown when reference does not exist */
  'copy-paste.on-paste.validation.reference-validation-failed.description':
    'Atsauktā dokumenta "{{ref}}" neeksistē',
  /** The validation message that is shown when the source and target schema types are incompatible */
  'copy-paste.on-paste.validation.schema-type-incompatible.description':
    'Avota un mērķa shēmas tipi nav savietojami',
  /** The validation message that is shown when schema types are incompatible */
  'copy-paste.on-paste.validation.schema-type-incompatible.title':
    'Nevarēja atrisināt shēmas tipu ceļam: {{path}}',
  /** The validation message that is shown when string values are incompatible */
  'copy-paste.on-paste.validation.string-value-incompatible.description':
    'Vērtība "{{value}}" nav atļauta "{{allowedStrings}}"',
})
