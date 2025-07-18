import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Array must have exactly "$wantedLength" items, but has more/less */
  'array.exact-length': 'Måste ha exakt {{wantedLength}} objekt',
  /** Portable Text array must have exactly "$wantedLength" blocks, but has more/less */
  'array.exact-length_blocks': 'Måste ha exakt {{wantedLength}} block',
  /** Array item is a duplicate, but array wants only unique items */
  'array.item-duplicate': 'Kan inte vara en dubblett',
  /** Array has more than the maximum of "$maxLength" items */
  'array.maximum-length': 'Måste ha högst {{maxLength}} objekt',
  /** Portable Text array has more than the maximum of "$maxLength" items */
  'array.maximum-length_blocks': 'Måste ha högst {{maxLength}} block',
  /** Array has less than the minimum of "$minLength" items */
  'array.minimum-length': 'Måste ha minst {{minLength}} objekt',
  /** Portable Text array has less than the minimum of "$minLength" blocks */
  'array.minimum-length_blocks': 'Måste ha minst {{minLength}} block',

  /** Date is not valid or not in the correct format (ISO-8601) */
  'date.invalid-format': 'Måste vara en giltig datumsträng i ISO-8601-format',
  /** Date is later than the given maximum date "$maxDate" */
  'date.maximum': 'Måste vara senast {{maxDate}}',
  /** Date is earlier than the given minimum date "$minDate" */
  'date.minimum': 'Måste vara tidigast {{minDate}}',

  /** A value of incorrect type is found, eg found `number` instead of `string` */
  'generic.incorrect-type': 'Förväntad typ "{{expectedType}}", fick "{{actualType}}"',
  /** Value is not one of the values specifically allowed */
  'generic.not-allowed': 'Värdet matchade inte något tillåtet värde',
  /** Value "$givenValue" is not one of the values specifically allowed */
  'generic.not-allowed_hint': 'Värdet "{{hint}}" matchade inte något tillåtet värde',
  /** A value is expected, but none is provided */
  'generic.required': 'Krävs',

  /** Number is less than the given minimum threshold value "$threshold" */
  'number.greater-than': 'Måste vara större än {{threshold}}',
  /** Number is greater than the given maximum threshold value "$threshold" */
  'number.less-than': 'Måste vara mindre än {{threshold}}',
  /** Number is higher than the given maximum value "$maxNumber" */
  'number.maximum': 'Måste vara lägre än eller lika med {{maxNumber}}',
  /** Number has more precision (decimals) than the allowed "$limit" */
  'number.maximum-precision': 'Max precision är {{limit}}',
  /** Number is lower than the given minimum value "$minNumber" */
  'number.minimum': 'Måste vara större än eller lika med {{minNumber}}',
  /** Number is not an integer ("whole number") */
  'number.non-integer': 'Måste vara ett heltal',

  /** Object is missing a reference to an asset document in its `asset` field */
  'object.asset-required': 'Tillgång krävs',
  /** Object is missing a reference to a file asset document in its `asset` field */
  'object.asset-required_file': 'Fil krävs',
  /** Object is missing a reference to an image asset document in its `asset` field */
  'object.asset-required_image': 'Bild krävs',
  /** Media can't be found in the Media Library */
  'object.media-not-found': undefined, // 'The asset could not found in the Media Library'
  /** Media object is missing a reference to a document in its `_ref` field */
  'object.not-media-library-asset': undefined, // 'Must be a reference to a Media Library asset'
  /** Object is not a reference to a document (eg `{_ref: 'documentId'}`) */
  'object.not-reference': 'Måste vara en referens till ett dokument',
  /** Object references a document which is not published */
  'object.reference-not-published': 'Refererat dokument måste vara publicerat',

  /** Accessibility label for closing the validation panel */
  'panel.close-button-aria-label': 'Stäng validering',
  /** Message shown when the validation panel is opened but there are no errors/warnings */
  'panel.no-errors-message': 'Inga valideringsfel',
  /** Title for the actual "Validation" panel/feature */
  'panel.title': 'Validering',
  /** Message shown when the validation panel is opened but the document is going to unpublish */
  'panel.unpublish-message': undefined, // 'Document is going to unpublish, no validation errors are shown'

  /** Slug is an object, but is missing a `current` string property */
  'slug.missing-current': 'Slug måste ha ett värde',
  /** Slug is not an object (eg `{current: 'some-slug'}`) */
  'slug.not-object': 'Slug måste vara ett objekt',
  /** Slug is already in use somewhere else, but needs to be unique */
  'slug.not-unique': 'Slug används redan',

  /** String is not a valid email address */
  'string.email': 'Måste vara en giltig e-postadress',
  /** String has a different character length than the exact number "$wantedLength" */
  'string.exact-length': 'Måste vara exakt {{wantedLength}} tecken lång',
  /** String contains characters that are not in lowercase  */
  'string.lowercase': 'Måste vara alla gemener',
  /** String is longer than the limit of "$maxLength" characters */
  'string.maximum-length': 'Får vara högst {{maxLength}} tecken lång',
  /** String is shorter than the limit of "$minLength" characters */
  'string.minimum-length': 'Måste vara minst {{minLength}} tecken lång',
  /** String does not match the given regular expression, but should */
  'string.regex-does-not-match': 'Matchar inte "{{name}}"-mönstret',
  /** String matches the given regular expression, but should not */
  'string.regex-match': 'Bör inte matcha "{{name}}"-mönstret',
  /** String contains characters that are not in uppercase */
  'string.uppercase': 'Måste vara alla versaler',
  /** String contains a protocol/scheme that is not allowed, eg (`ftp`, `mailto`…) */
  'string.url.disallowed-scheme': 'Matchar inte tillåtna protokoll/scheman',
  /** String contains a URL with a username or password specified before the host */
  'string.url.includes-credentials': 'Användarnamn/lösenord inte tillåtet',
  /** String is not a valid URL */
  'string.url.invalid': 'Inte en giltig URL',
  /** String is not an absolute URL (eg it is missing a protocol/host) */
  'string.url.not-absolute': 'Relativa URL:er är inte tillåtna',
  /** String is not a relative URL (eg it contains a protocol/host) */
  'string.url.not-relative': 'Endast relativa URL:er är tillåtna',
})
