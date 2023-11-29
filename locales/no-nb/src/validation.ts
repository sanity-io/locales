import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Title for the actual "Validation" panel/feature */
  'panel.title': undefined, // 'Validation'
  /** Accessibility label for closing the validation panel */
  'panel.close-button-aria-label': undefined, // 'Close validation'
  /** Message shown when the validation panel is opened but there are no errors/warnings */
  'panel.no-errors-message': undefined, // 'No validation errors'
  /** A value of incorrect type is found, eg found `number` instead of `string` */
  'generic.incorrect-type': undefined, // 'Expected type "{{expectedType}}", got "{{actualType}}"'
  /** A value is expected, but none is provided */
  'generic.required': undefined, // 'Required'
  /** Value is not one of the values specifically allowed */
  'generic.not-allowed': undefined, // 'Value did not match any allowed values'
  /** Value "$givenValue" is not one of the values specifically allowed */
  'generic.not-allowed_hint': undefined, // 'Value "{{hint}}" did not match any allowed values'
  /** Array has less than the minimum of "$minLength" items */
  'array.minimum-length': undefined, // 'Must have at least {{minLength}} items'
  /** Portable Text array has less than the minimum of "$minLength" blocks */
  'array.minimum-length_blocks': undefined, // 'Must have at least {{minLength}} blocks'
  /** Array has more than the maximum of "$maxLength" items */
  'array.maximum-length': undefined, // 'Must have at most {{maxLength}} items'
  /** Portable Text array has more than the maximum of "$maxLength" items */
  'array.maximum-length_blocks': undefined, // 'Must have at most {{maxLength}} blocks'
  /** Array must have exactly "$wantedLength" items, but has more/less */
  'array.exact-length': undefined, // 'Must have exactly {{wantedLength}} items'
  /** Portable Text array must have exactly "$wantedLength" blocks, but has more/less */
  'array.exact-length_blocks': undefined, // 'Must have exactly {{wantedLength}} blocks'
  /** Array item is a duplicate, but array wants only unique items */
  'array.item-duplicate': undefined, // 'Can\'t be a duplicate'
  /** Date is not valid or not in the correct format (ISO-8601) */
  'date.invalid-format': undefined, // 'Must be a valid ISO-8601 formatted date string'
  /** Date is earlier than the given minimum date "$minDate" */
  'date.minimum': undefined, // 'Must be at or after {{minDate}}'
  /** Date is later than the given maximum date "$maxDate" */
  'date.maximum': undefined, // 'Must be at or before {{maxDate}}'
  /** Number is not an integer ("whole number") */
  'number.non-integer': undefined, // 'Must be an integer'
  /** Number has more precision (decimals) than the allowed "$limit" */
  'number.maximum-precision': undefined, // 'Max precision is {{limit}}'
  /** Number is lower than the given minimum value "$minNumber" */
  'number.minimum': undefined, // 'Must be greater than or equal to {{minNumber}}'
  /** Number is higher than the given maximum value "$maxNumber" */
  'number.maximum': undefined, // 'Must be lower than or equal to {{maxNumber}}'
  /** Number is less than the given minimum threshold value "$threshold" */
  'number.greater-than': undefined, // 'Must be greater than {{threshold}}'
  /** Number is greater than the given maximum threshold value "$threshold" */
  'number.less-than': undefined, // 'Must be less than {{threshold}}'
  /** Object is not a reference to a document (eg `{_ref: 'documentId'}`) */
  'object.not-reference': undefined, // 'Must be a reference to a document'
  /** Object references a document which is not published */
  'object.reference-not-published': undefined, // 'Referenced document must be published'
  /** Object is missing a reference to an asset document in its `asset` field */
  'object.asset-required': undefined, // 'Asset is required'
  /** Object is missing a reference to an image asset document in its `asset` field */
  'object.asset-required_image': undefined, // 'Image is required'
  /** Object is missing a reference to a file asset document in its `asset` field */
  'object.asset-required_file': undefined, // 'File is required'
  /** Slug is not an object (eg `{current: 'some-slug'}`) */
  'slug.not-object': undefined, // 'Slug must be an object'
  /** Slug is an object, but is missing a `current` string property */
  'slug.missing-current': undefined, // 'Slug must have a value'
  /** Slug is already in use somewhere else, but needs to be unique */
  'slug.not-unique': undefined, // 'Slug is already in use'
  /** String is shorter than the limit of "$minLength" characters */
  'string.minimum-length': undefined, // 'Must be at least {{minLength}} characters long'
  /** String is longer than the limit of "$maxLength" characters */
  'string.maximum-length': undefined, // 'Must be at most {{maxLength}} characters long'
  /** String has a different character length than the exact number "$wantedLength" */
  'string.exact-length': undefined, // 'Must be exactly {{wantedLength}} characters long'
  /** String contains characters that are not in uppercase */
  'string.uppercase': undefined, // 'Must be all uppercase characters'
  /** String contains characters that are not in lowercase  */
  'string.lowercase': undefined, // 'Must be all lowercase characters'
  /** String matches the given regular expression, but should not */
  'string.regex-match': undefined, // 'Should not match "{{name}}"-pattern'
  /** String does not match the given regular expression, but should */
  'string.regex-does-not-match': undefined, // 'Does not match "{{name}}"-pattern'
  /** String is not a valid email address */
  'string.email': undefined, // 'Must be a valid email address'
  /** String is not a valid URL */
  'string.url.invalid': undefined, // 'Not a valid URL'
  /** String is not a relative URL (eg it contains a protocol/host) */
  'string.url.not-relative': undefined, // 'Only relative URLs are allowed'
  /** String is not an absolute URL (eg it is missing a protocol/host) */
  'string.url.not-absolute': undefined, // 'Relative URLs are not allowed'
  /** String contains a URL with a username or password specified before the host */
  'string.url.includes-credentials': undefined, // 'Username/password not allowed'
  /** String contains a protocol/scheme that is not allowed, eg (`ftp`, `mailto`…) */
  'string.url.disallowed-scheme': undefined, // 'Does not match allowed protocols/schemes'
})
