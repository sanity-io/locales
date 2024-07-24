import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Text on the field action button to copy a document */
  'copy-paste.field-action-copy-button.document.title': 'დოკუმენტის კოპირება',
  /** Text on the field action button to copy a field */
  'copy-paste.field-action-copy-button.field.title': 'ველის კოპირება',
  /** Text on the field action button to paste a document */
  'copy-paste.field-action-paste-button.document.title': 'დოკუმენტის ჩასმა',
  /** Text on the field action button to paste a field */
  'copy-paste.field-action-paste-button.field.title': 'ველის ჩასმა',
  /** The error message that is shown when the clipboard is not supported */
  'copy-paste.on-copy.validation.clipboard-not-supported.title':
    'თქვენი ბრაუზერი ამ ქმედებას არ მხარდაჭერს',
  /** The success message that is shown when a document is copied */
  'copy-paste.on-copy.validation.copy-document-success.title':
    'დოკუმენტი "{{fieldNames}}" დაკოპირდა',
  /** The success message that is shown when a field is copied */
  'copy-paste.on-copy.validation.copy-field_one-success.title': 'ველი "{{fieldName}}" დაკოპირდა',
  /** The error message that is shown when there is no value to copy */
  'copy-paste.on-copy.validation.no-value.title': 'ცარიელი მნიშვნელობა, კოპირებადი არაფერია',
  /** --- On copy --- */
  /** The error message that is shown when schema types are incompatible */
  'copy-paste.on-copy.validation.schema-type-incompatible.title':
    'ვერ მოხდა სქემის ტიპის გარჩევა გზისთვის: {{path}}',
  /** The validation message that is shown when array types are incompatible */
  'copy-paste.on-paste.validation.array-type-incompatible.description':
    'ტიპის "{{type}}" მნიშვნელობა არ არის ნებადართული ამ მასივის ველში',
  /** The validation message that is shown when array values are incompatible */
  'copy-paste.on-paste.validation.array-value-incompatible.description':
    'ტიპის "{{type}}" მნიშვნელობა არ არის ნებადართული ამ მასივის ველში',
  /** The validation message that is shown when the clipboard is empty */
  'copy-paste.on-paste.validation.clipboard-empty.title': 'ჩასასმელი არაფერია',
  /** The validation message that is shown when the clipboard item is invalid */
  'copy-paste.on-paste.validation.clipboard-invalid.title': 'კლიპბორდის ელემენტი არასწორია',
  /** The success message that is shown when a document is pasted */
  'copy-paste.on-paste.validation.document-paste-success.title':
    'დოკუმენტი "{{fieldNames}}" განახლდა',
  /** The success message that is shown when a field is pasted */
  'copy-paste.on-paste.validation.field_one-paste-success.title': 'ველი "{{fieldName}}" განახლდა',
  /** The validation message that is shown when image files are incompatible */
  'copy-paste.on-paste.validation.image-file-incompatible.description':
    '"{{sourceSchemaType}}" არ არის ნებადართული "{{targetSchemaType}}"-ში',
  /** The error message that is shown when the MIME type is not accepted */
  'copy-paste.on-paste.validation.mime-type-incompatible.description':
    'MIME ტიპი "{{mimeType}}" არ არის ნებადართული ამ ველისთვის',
  /** The error message that is shown when the MIME type validation fails */
  'copy-paste.on-paste.validation.mime-type-validation-failed.description':
    'MIME ტიპის ვალიდაცია ჩავარდა',
  /** The warning message that is shown when not all values can be pasted */
  'copy-paste.on-paste.validation.partial-warning.title': 'ყველა მნიშვნელობა ვერ ჩაისვა',
  /** The validation message that is shown when primitive types are incompatible */
  'copy-paste.on-paste.validation.primitive-type-incompatible.description':
    'ტიპის "{{type}}" მნიშვნელობა არ არის ნებადართული ამ ველში',
  /** --- On paste --- */
  /** The validation message that is shown when pasting a value into a read-only target */
  'copy-paste.on-paste.validation.read-only-target.description': 'მიმღები არის მხოლოდ კითხვისთვის',
  /** The validation message that is shown when reference is incompatible with filter */
  'copy-paste.on-paste.validation.reference-filter-incompatible.description':
    'რეფერენსი არ არის ნებადართული რეფერენსის ველში ფილტრის მიხედვით',
  /** The validation message that is shown when reference types are incompatible */
  'copy-paste.on-paste.validation.reference-type-incompatible.description':
    '"{{sourceReferenceType}}" ტიპის რეფერენსები არ არის ნებადართული რეფერენსის ველში, რომელიც მიიღებს ტიპებს "{{targetReferenceTypes}}"',
  /** The validation message that is shown when the source and target schema types are incompatible */
  'copy-paste.on-paste.validation.schema-type-incompatible.description':
    'წყაროს და მიმღების სქემის ტიპები არ არის თანამედროვე',
  /** The validation message that is shown when schema types are incompatible */
  'copy-paste.on-paste.validation.schema-type-incompatible.title':
    'ვერ მოხდა სქემის ტიპის გარჩევა გზისთვის: {{path}}',
  /** The validation message that is shown when string values are incompatible */
  'copy-paste.on-paste.validation.string-value-incompatible.description':
    'მნიშვნელობა "{{value}}" არ არის დასაშვები "{{allowedStrings}}"-ში',
})
