import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Text on the field action button to copy a document */
  'copy-paste.field-action-copy-button.document.title': 'ದಾಖಲೆ ನಕಲಿಸಿ',
  /** Text on the field action button to copy a field */
  'copy-paste.field-action-copy-button.field.title': 'ಕ್ಷೇತ್ರ ನಕಲಿಸಿ',
  /** Text on the field action button to paste a document */
  'copy-paste.field-action-paste-button.document.title': 'ದಾಖಲೆ ಅಂಟಿಸಿ',
  /** Text on the field action button to paste a field */
  'copy-paste.field-action-paste-button.field.title': 'ಕ್ಷೇತ್ರ ಅಂಟಿಸಿ',
  /** The error message that is shown when the clipboard is not supported */
  'copy-paste.on-copy.validation.clipboard-not-supported.title':
    'ನಿಮ್ಮ ಬ್ರೌಸರ್ ಈ ಕ್ರಿಯೆಯನ್ನು ಬೆಂಬಲಿಸುವುದಿಲ್ಲ',
  /** The success message that is shown when a document is copied */
  'copy-paste.on-copy.validation.copy-document-success.title': 'ದಾಖಲೆ "{{fieldNames}}" ನಕಲಿಸಲಾಗಿದೆ',
  /** The success message that is shown when a field is copied */
  'copy-paste.on-copy.validation.copy-field_one-success.title':
    'ಕ್ಷೇತ್ರ "{{fieldName}}" ನಕಲಿಸಲಾಗಿದೆ',
  /** The error message that is shown when there is no value to copy */
  'copy-paste.on-copy.validation.no-value.title': 'ಖಾಲಿ ಮೌಲ್ಯ, ನಕಲಿಸಲು ಏನೂ ಇಲ್ಲ',
  /** --- On copy --- */
  /** The error message that is shown when schema types are incompatible */
  'copy-paste.on-copy.validation.schema-type-incompatible.title':
    'ಮಾರ್ಗ: {{path}} ಗಾಗಿ ಸ್ಕೀಮಾ ಪ್ರಕಾರವನ್ನು ಬಗೆಹರಿಸಲು ಸಾಧ್ಯವಿಲ್ಲ',
  /** The validation message that is shown when array types are incompatible */
  'copy-paste.on-paste.validation.array-type-incompatible.description':
    'ಈ ಅರೆ ಕ್ಷೇತ್ರದಲ್ಲಿ "{{type}}" ಪ್ರಕಾರದ ಮೌಲ್ಯ ಅನುಮತಿಸಲಾಗಿಲ್ಲ',
  /** The validation message that is shown when array values are incompatible */
  'copy-paste.on-paste.validation.array-value-incompatible.description':
    'ಈ ಅರೆ ಕ್ಷೇತ್ರದಲ್ಲಿ "{{type}}" ಪ್ರಕಾರದ ಮೌಲ್ಯ ಅನುಮತಿಸಲಾಗಿಲ್ಲ',
  /** The validation message that is shown when the clipboard is empty */
  'copy-paste.on-paste.validation.clipboard-empty.title': 'ಅಂಟಿಸಲು ಏನೂ ಇಲ್ಲ',
  /** The validation message that is shown when the clipboard item is invalid */
  'copy-paste.on-paste.validation.clipboard-invalid.title': 'ಅಮಾನ್ಯ ಕ್ಲಿಪ್‌ಬೋರ್ಡ್ ಐಟಂ',
  /** The success message that is shown when a document is pasted */
  'copy-paste.on-paste.validation.document-paste-success.title':
    'ದಾಖಲೆ "{{fieldNames}}" ನವೀಕರಿಸಲಾಗಿದೆ',
  /** The success message that is shown when a field is pasted */
  'copy-paste.on-paste.validation.field_one-paste-success.title':
    'ಕ್ಷೇತ್ರ "{{fieldName}}" ನವೀಕರಿಸಲಾಗಿದೆ',
  /** The validation message that is shown when image files are incompatible */
  'copy-paste.on-paste.validation.image-file-incompatible.description':
    '"{{sourceSchemaType}}" ಅನ್ನು "{{targetSchemaType}}" ನಲ್ಲಿ ಅನುಮತಿಸಲಾಗಿಲ್ಲ',
  /** The error message that is shown when the MIME type is not accepted */
  'copy-paste.on-paste.validation.mime-type-incompatible.description':
    'ಈ ಕ್ಷೇತ್ರಕ್ಕೆ "{{mimeType}}" MIME ಪ್ರಕಾರ ಅನುಮತಿಸಲಾಗಿಲ್ಲ',
  /** The error message that is shown when the MIME type validation fails */
  'copy-paste.on-paste.validation.mime-type-validation-failed.description':
    'MIME ಪ್ರಕಾರ ಪರಿಶೀಲನೆ ವಿಫಲವಾಗಿದೆ',
  /** The warning message that is shown when not all values can be pasted */
  'copy-paste.on-paste.validation.partial-warning.title': 'ಎಲ್ಲಾ ಮೌಲ್ಯಗಳನ್ನು ಅಂಟಿಸಲು ಸಾಧ್ಯವಾಗಲಿಲ್ಲ',
  /** The validation message that is shown when primitive types are incompatible */
  'copy-paste.on-paste.validation.primitive-type-incompatible.description':
    'ಈ ಕ್ಷೇತ್ರದಲ್ಲಿ "{{type}}" ಪ್ರಕಾರದ ಮೌಲ್ಯ ಅನುಮತಿಸಲಾಗಿಲ್ಲ',
  /** --- On paste --- */
  /** The validation message that is shown when pasting a value into a read-only target */
  'copy-paste.on-paste.validation.read-only-target.description': 'ಗುರಿ ಕೇವಲ ಓದಲು ಮಾತ್ರ',
  /** The validation message that is shown when reference is incompatible with filter */
  'copy-paste.on-paste.validation.reference-filter-incompatible.description':
    'ಫಿಲ್ಟರ್ ಪ್ರಕಾರ ಉಲ್ಲೇಖ ಕ್ಷೇತ್ರದಲ್ಲಿ ಉಲ್ಲೇಖ ಅನುಮತಿಸಲಾಗಿಲ್ಲ',
  /** The validation message that is shown when reference types are incompatible */
  'copy-paste.on-paste.validation.reference-type-incompatible.description':
    '"{{sourceReferenceType}}" ಪ್ರಕಾರದ ಉಲ್ಲೇಖಗಳು "{{targetReferenceTypes}}" ಪ್ರಕಾರಗಳನ್ನು ಅನುಮತಿಸುವ ಉಲ್ಲೇಖ ಕ್ಷೇತ್ರದಲ್ಲಿ ಅನುಮತಿಸಲಾಗಿಲ್ಲ',
  /** The validation message that is shown when the source and target schema types are incompatible */
  'copy-paste.on-paste.validation.schema-type-incompatible.description':
    'ಮೂಲ ಮತ್ತು ಗುರಿ ಸ್ಕೀಮಾ ಪ್ರಕಾರಗಳು ಹೊಂದಾಣಿಕೆಯಾಗಿಲ್ಲ',
  /** The validation message that is shown when schema types are incompatible */
  'copy-paste.on-paste.validation.schema-type-incompatible.title':
    'ಮಾರ್ಗ: {{path}} ಗಾಗಿ ಸ್ಕೀಮಾ ಪ್ರಕಾರವನ್ನು ಬಗೆಹರಿಸಲು ಸಾಧ್ಯವಿಲ್ಲ',
  /** The validation message that is shown when string values are incompatible */
  'copy-paste.on-paste.validation.string-value-incompatible.description':
    'ಮೌಲ್ಯ "{{value}}" ಅನ್ನು "{{allowedStrings}}" ನಲ್ಲಿ ಅನುಮತಿಸಿಲ್ಲ',
})
