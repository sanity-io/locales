import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Array must have exactly "$wantedLength" items, but has more/less */
  'array.exact-length': 'ಖಚಿತವಾಗಿ {{wantedLength}} ಐಟಂಗಳು ಇರಬೇಕು',
  /** Portable Text array must have exactly "$wantedLength" blocks, but has more/less */
  'array.exact-length_blocks': 'ಖಚಿತವಾಗಿ {{wantedLength}} ಬ್ಲಾಕ್‌ಗಳು ಇರಬೇಕು',
  /** Array item is a duplicate, but array wants only unique items */
  'array.item-duplicate': 'ನಕಲಿ ಇರಬಾರದು',
  /** Array has more than the maximum of "$maxLength" items */
  'array.maximum-length': 'ಗರಿಷ್ಠ {{maxLength}} ಐಟಂಗಳು ಇರಬೇಕು',
  /** Portable Text array has more than the maximum of "$maxLength" items */
  'array.maximum-length_blocks': 'ಗರಿಷ್ಠ {{maxLength}} ಬ್ಲಾಕ್‌ಗಳು ಇರಬೇಕು',
  /** Array has less than the minimum of "$minLength" items */
  'array.minimum-length': 'ಕನಿಷ್ಠ {{minLength}} ಐಟಂಗಳು ಇರಬೇಕು',
  /** Portable Text array has less than the minimum of "$minLength" blocks */
  'array.minimum-length_blocks': 'ಕನಿಷ್ಠ {{minLength}} ಬ್ಲಾಕ್‌ಗಳು ಇರಬೇಕು',

  /** Date is not valid or not in the correct format (ISO-8601) */
  'date.invalid-format': 'ಮಾನ್ಯ ISO-8601 ಸ್ವರೂಪದ ದಿನಾಂಕ ಸ್ಟ್ರಿಂಗ್ ಆಗಿರಬೇಕು',
  /** Date is later than the given maximum date "$maxDate" */
  'date.maximum': '{{maxDate}} ಅಥವಾ ಅದಕ್ಕೆ ಮೊದಲು ಇರಬೇಕು',
  /** Date is earlier than the given minimum date "$minDate" */
  'date.minimum': '{{minDate}} ಅಥವಾ ಅದರ ನಂತರ ಇರಬೇಕು',

  /** A value of incorrect type is found, eg found `number` instead of `string` */
  'generic.incorrect-type': 'ನಿರೀಕ್ಷಿತ ಪ್ರಕಾರ "{{expectedType}}", ಪ್ರಾಪ್ತವಾದ "{{actualType}}"',
  /** Value is not one of the values specifically allowed */
  'generic.not-allowed': 'ಮೌಲ್ಯವು ಯಾವುದೇ ಅನುಮತಿಸಲಾದ ಮೌಲ್ಯಗಳಿಗೆ ಹೊಂದಿಕೊಂಡಿಲ್ಲ',
  /** Value "$givenValue" is not one of the values specifically allowed */
  'generic.not-allowed_hint': 'ಮೌಲ್ಯ "{{hint}}" ಯಾವುದೇ ಅನುಮತಿಸಲಾದ ಮೌಲ್ಯಗಳಿಗೆ ಹೊಂದಿಕೊಂಡಿಲ್ಲ',
  /** A value is expected, but none is provided */
  'generic.required': 'ಅಗತ್ಯವಿದೆ',

  /** Number is less than the given minimum threshold value "$threshold" */
  'number.greater-than': '{{threshold}} ಗಿಂತ ಹೆಚ್ಚು ಇರಬೇಕು',
  /** Number is greater than the given maximum threshold value "$threshold" */
  'number.less-than': '{{threshold}} ಗಿಂತ ಕಡಿಮೆ ಇರಬೇಕು',
  /** Number is higher than the given maximum value "$maxNumber" */
  'number.maximum': '{{maxNumber}} ಅಥವಾ ಅದಕ್ಕಿಂತ ಕಡಿಮೆ ಇರಬೇಕು',
  /** Number has more precision (decimals) than the allowed "$limit" */
  'number.maximum-precision': 'ಗರಿಷ್ಠ ನಿಖರತೆ {{limit}}',
  /** Number is lower than the given minimum value "$minNumber" */
  'number.minimum': '{{minNumber}} ಅಥವಾ ಅದಕ್ಕಿಂತ ಹೆಚ್ಚು ಇರಬೇಕು',
  /** Number is not an integer ("whole number") */
  'number.non-integer': 'ಪೂರ್ಣಾಂಕ ಇರಬೇಕು',

  /** Object is missing a reference to an asset document in its `asset` field */
  'object.asset-required': 'ಆಸ್ತಿ ಅಗತ್ಯವಿದೆ',
  /** Object is missing a reference to a file asset document in its `asset` field */
  'object.asset-required_file': 'ಫೈಲ್ ಅಗತ್ಯವಿದೆ',
  /** Object is missing a reference to an image asset document in its `asset` field */
  'object.asset-required_image': 'ಚಿತ್ರ ಅಗತ್ಯವಿದೆ',
  /** Media can't be found in the Media Library */
  'object.media-not-found': 'ಮೀಡಿಯಾ ಗ್ರಂಥಾಲಯದಲ್ಲಿ ಆಸ್ತಿಯನ್ನು ಹುಡುಕಲಾಗಲಿಲ್ಲ',
  /** Media object is missing a reference to a document in its `_ref` field */
  'object.not-media-library-asset': 'ಮೀಡಿಯಾ ಗ್ರಂಥಾಲಯ ಆಸ್ತಿಗೆ ಉಲ್ಲೇಖವಾಗಿರಬೇಕು',
  /** Object is not a reference to a document (eg `{_ref: 'documentId'}`) */
  'object.not-reference': 'ದಾಖಲೆಗೆ ಉಲ್ಲೇಖ ಇರಬೇಕು',
  /** Object references a document which is not published */
  'object.reference-not-published': 'ಉಲ್ಲೇಖಿತ ದಾಖಲೆ ಪ್ರಕಟಿಸಲಾಗಿರಬೇಕು',

  /** Accessibility label for closing the validation panel */
  'panel.close-button-aria-label': 'ಪರಿಶೀಲನೆ ಮುಚ್ಚಲು',
  /** Message shown when the validation panel is opened but there are no errors/warnings */
  'panel.no-errors-message': 'ಯಾವುದೇ ಪರಿಶೀಲನೆ ದೋಷಗಳಿಲ್ಲ',
  /** Title for the actual "Validation" panel/feature */
  'panel.title': 'ಪರಿಶೀಲನೆ',
  /** Message shown when the validation panel is opened but the document is going to unpublish */
  'panel.unpublish-message':
    'ದಾಖಲೆಯು ಅಪ್ರಕಟಿಸಲು ಹೋಗುತ್ತಿದೆ, ಯಾವುದೇ ಮಾನ್ಯತಾ ದೋಷಗಳು ತೋರಿಸಲಾಗುವುದಿಲ್ಲ',

  /** Slug is an object, but is missing a `current` string property */
  'slug.missing-current': 'ಸ್ಲಗ್ ಗೆ ಒಂದು ಮೌಲ್ಯವಿರಬೇಕು',
  /** Slug is not an object (eg `{current: 'some-slug'}`) */
  'slug.not-object': 'ಸ್ಲಗ್ ಒಂದು ವಸ್ತುವಾಗಿರಬೇಕು',
  /** Slug is already in use somewhere else, but needs to be unique */
  'slug.not-unique': 'ಸ್ಲಗ್ ಈಗಾಗಲೇ ಬಳಕೆಯಲ್ಲಿದೆ',

  /** String is not a valid email address */
  'string.email': 'ಮಾನ್ಯವಾದ ಇಮೇಲ್ ವಿಳಾಸವಾಗಿರಬೇಕು',
  /** String has a different character length than the exact number "$wantedLength" */
  'string.exact-length': 'ಸರಿಯಾಗಿ {{wantedLength}} ಅಕ್ಷರಗಳ ಉದ್ದವಿರಬೇಕು',
  /** String contains characters that are not in lowercase  */
  'string.lowercase': 'ಎಲ್ಲಾ ಕೀಳುನುಡಿ ಅಕ್ಷರಗಳಾಗಿರಬೇಕು',
  /** String is longer than the limit of "$maxLength" characters */
  'string.maximum-length': 'ಗರಿಷ್ಠ {{maxLength}} ಅಕ್ಷರಗಳ ಉದ್ದಕ್ಕಿಂತ ಹೆಚ್ಚಿರಬಾರದು',
  /** String is shorter than the limit of "$minLength" characters */
  'string.minimum-length': 'ಕನಿಷ್ಠ {{minLength}} ಅಕ್ಷರಗಳ ಉದ್ದವಿರಬೇಕು',
  /** String does not match the given regular expression, but should */
  'string.regex-does-not-match': '"{{name}}"-ಮಾದರಿಯನ್ನು ಹೊಂದಿಲ್ಲ',
  /** String matches the given regular expression, but should not */
  'string.regex-match': '"{{name}}"-ಮಾದರಿಯನ್ನು ಹೊಂದಬಾರದು',
  /** String contains characters that are not in uppercase */
  'string.uppercase': 'ಎಲ್ಲಾ ಮೇಲ್ನುಡಿ ಅಕ್ಷರಗಳಾಗಿರಬೇಕು',
  /** String contains a protocol/scheme that is not allowed, eg (`ftp`, `mailto`…) */
  'string.url.disallowed-scheme': 'ಅನುಮತಿಸಲಾದ ಪ್ರೋಟೋಕಾಲ್‌ಗಳು/ಯೋಜನೆಗಳನ್ನು ಹೊಂದಿಲ್ಲ',
  /** String contains a URL with a username or password specified before the host */
  'string.url.includes-credentials': 'ಬಳಕೆದಾರ ಹೆಸರು/ಪಾಸ್‌ವರ್ಡ್ ಅನುಮತಿಸಲಾಗಿಲ್ಲ',
  /** String is not a valid URL */
  'string.url.invalid': 'ಮಾನ್ಯವಾದ URL ಅಲ್ಲ',
  /** String is not an absolute URL (eg it is missing a protocol/host) */
  'string.url.not-absolute': 'ಸಾಪೇಕ್ಷ URLಗಳು ಅನುಮತಿಸಲಾಗಿಲ್ಲ',
  /** String is not a relative URL (eg it contains a protocol/host) */
  'string.url.not-relative': 'ಕೇವಲ ಸಾಪೇಕ್ಷ URLಗಳು ಅನುಮತಿಸಲಾಗಿವೆ',
})
