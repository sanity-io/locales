import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Text on the field action button to copy a document */
  'copy-paste.field-action-copy-button.document.title': 'Kopioi dokumentti',
  /** Text on the field action button to copy a field */
  'copy-paste.field-action-copy-button.field.title': 'Kopioi kenttä',
  /** Text on the field action button to paste a document */
  'copy-paste.field-action-paste-button.document.title': 'Liitä dokumentti',
  /** Text on the field action button to paste a field */
  'copy-paste.field-action-paste-button.field.title': 'Liitä kenttä',
  /** The error message that is shown when the clipboard is not supported */
  'copy-paste.on-copy.validation.clipboard-not-supported.title': 'Selaimesi ei tue tätä toimintoa',
  /** The success message that is shown when a document is copied */
  'copy-paste.on-copy.validation.copy-document-success.title':
    'Dokumentti "{{fieldNames}}" kopioitu',
  /** The success message that is shown when a field is copied */
  'copy-paste.on-copy.validation.copy-field_one-success.title': 'Kenttä "{{fieldName}}" kopioitu',
  /** The success message that is shown when a array item is copied */
  'copy-paste.on-copy.validation.copy-item_one-success.title': 'Kohde "{{typeName}}" kopioitu',
  /** The error message that is shown when there is no value to copy */
  'copy-paste.on-copy.validation.no-value.title': 'Tyhjä arvo, ei mitään kopioitavaa',
  /** --- On copy --- */
  /** The error message that is shown when schema types are incompatible */
  'copy-paste.on-copy.validation.schema-type-incompatible.title':
    'Ei voitu selvittää skeematyyppiä polulle: {{path}}',
  /** The validation message that is shown when array types are incompatible */
  'copy-paste.on-paste.validation.array-type-incompatible.description':
    'Tyyppiä "{{type}}" ei sallita tässä taulukkokentässä',
  /** The validation message that is shown when array values are incompatible */
  'copy-paste.on-paste.validation.array-value-incompatible.description':
    'Tyyppiä "{{type}}" ei sallita tässä taulukkokentässä',
  /** The validation message that is shown when the clipboard is empty */
  'copy-paste.on-paste.validation.clipboard-empty.title': 'Ei mitään liitettävää',
  /** The validation message that is shown when the clipboard item is invalid */
  'copy-paste.on-paste.validation.clipboard-invalid.title': 'Epäkelpo leikepöydän kohde',
  /** The success message that is shown when a document is pasted */
  'copy-paste.on-paste.validation.document-paste-success.title':
    'Dokumentti "{{fieldNames}}" päivitetty',
  /** The success message that is shown when a field is pasted */
  'copy-paste.on-paste.validation.field_one-paste-success.title':
    'Kenttä "{{fieldName}}" päivitetty',
  /** The validation message that is shown when image files are incompatible */
  'copy-paste.on-paste.validation.image-file-incompatible.description':
    '"{{sourceSchemaType}}" ei ole sallittu "{{targetSchemaType}}"-tyypissä',
  /** The error message that is shown when the MIME type is not accepted */
  'copy-paste.on-paste.validation.mime-type-incompatible.description':
    'MIME-tyyppi "{{mimeType}}" ei ole hyväksytty tälle kentälle',
  /** The error message that is shown when the MIME type validation fails */
  'copy-paste.on-paste.validation.mime-type-validation-failed.description':
    'MIME-tyypin validointi epäonnistui',
  /** The warning message that is shown when not all values can be pasted */
  'copy-paste.on-paste.validation.partial-warning.title': 'Kaikkia arvoja ei voitu liittää',
  /** The validation message that is shown when primitive types are incompatible */
  'copy-paste.on-paste.validation.primitive-type-incompatible.description':
    'Tyyppiä "{{type}}" ei sallita tässä kentässä',
  /** --- On paste --- */
  /** The validation message that is shown when pasting a value into a read-only target */
  'copy-paste.on-paste.validation.read-only-target.description': 'Kohde on vain luku -tilassa',
  /** The validation message that is shown when reference is incompatible with filter */
  'copy-paste.on-paste.validation.reference-filter-incompatible.description':
    'Viite ei ole sallittu viitekentässä suodattimen mukaan',
  /** The validation message that is shown when reference types are incompatible */
  'copy-paste.on-paste.validation.reference-type-incompatible.description':
    'Viitetyyppiä "{{sourceReferenceType}}" ei sallita viitekentässä, joka hyväksyy tyypit "{{targetReferenceTypes}}"',
  /** The validation message that is shown when reference does not exist */
  'copy-paste.on-paste.validation.reference-validation-failed.description':
    'Viitatun asiakirjan "{{ref}}" ei ole olemassa',
  /** The validation message that is shown when the source and target schema types are incompatible */
  'copy-paste.on-paste.validation.schema-type-incompatible.description':
    'Lähde- ja kohdeskeematyypit eivät ole yhteensopivia',
  /** The validation message that is shown when schema types are incompatible */
  'copy-paste.on-paste.validation.schema-type-incompatible.title':
    'Ei voitu selvittää skeematyyppiä polulle: {{path}}',
  /** The validation message that is shown when string values are incompatible */
  'copy-paste.on-paste.validation.string-value-incompatible.description':
    'Arvo "{{value}}" ei ole sallittu "{{allowedStrings}}"',
})
