import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Array must have exactly "$wantedLength" items, but has more/less */
  'array.exact-length': 'Skal have præcis {{wantedLength}} elementer',
  /** Portable Text array must have exactly "$wantedLength" blocks, but has more/less */
  'array.exact-length_blocks': 'Skal have præcis {{wantedLength}} blokke',
  /** Array item is a duplicate, but array wants only unique items */
  'array.item-duplicate': 'Kan ikke være en duplikat',
  /** Array has more than the maximum of "$maxLength" items */
  'array.maximum-length': 'Må højst have {{maxLength}} elementer',
  /** Portable Text array has more than the maximum of "$maxLength" items */
  'array.maximum-length_blocks': 'Må højst have {{maxLength}} blokke',
  /** Array has less than the minimum of "$minLength" items */
  'array.minimum-length': 'Skal have mindst {{minLength}} elementer',
  /** Portable Text array has less than the minimum of "$minLength" blocks */
  'array.minimum-length_blocks': 'Skal have mindst {{minLength}} blokke',

  /** Date is not valid or not in the correct format (ISO-8601) */
  'date.invalid-format': 'Skal være en gyldig ISO-8601 formatteret dato streng',
  /** Date is later than the given maximum date "$maxDate" */
  'date.maximum': 'Skal være på eller før {{maxDate}}',
  /** Date is earlier than the given minimum date "$minDate" */
  'date.minimum': 'Skal være på eller efter {{minDate}}',

  /** A value of incorrect type is found, eg found `number` instead of `string` */
  'generic.incorrect-type': 'Forventet type "{{expectedType}}", fik "{{actualType}}"',
  /** Value is not one of the values specifically allowed */
  'generic.not-allowed': 'Værdien matchede ikke nogen tilladte værdier',
  /** Value "$givenValue" is not one of the values specifically allowed */
  'generic.not-allowed_hint': 'Værdien "{{hint}}" matchede ikke nogen tilladte værdier',
  /** A value is expected, but none is provided */
  'generic.required': 'Påkrævet',

  /** Number is less than the given minimum threshold value "$threshold" */
  'number.greater-than': 'Skal være større end {{threshold}}',
  /** Number is greater than the given maximum threshold value "$threshold" */
  'number.less-than': 'Skal være mindre end {{threshold}}',
  /** Number is higher than the given maximum value "$maxNumber" */
  'number.maximum': 'Skal være lavere end eller lig med {{maxNumber}}',
  /** Number has more precision (decimals) than the allowed "$limit" */
  'number.maximum-precision': 'Maksimal præcision er {{limit}}',
  /** Number is lower than the given minimum value "$minNumber" */
  'number.minimum': 'Skal være større end eller lig med {{minNumber}}',
  /** Number is not an integer ("whole number") */
  'number.non-integer': 'Skal være et heltal',

  /** Object is missing a reference to an asset document in its `asset` field */
  'object.asset-required': 'Asset er påkrævet',
  /** Object is missing a reference to a file asset document in its `asset` field */
  'object.asset-required_file': 'Fil er påkrævet',
  /** Object is missing a reference to an image asset document in its `asset` field */
  'object.asset-required_image': 'Billede er påkrævet',
  /** Media can't be found in the Media Library */
  'object.media-not-found': 'Aktivet kunne ikke findes i Mediebiblioteket',
  /** Media object is missing a reference to a document in its `_ref` field */
  'object.not-media-library-asset': 'Skal være en reference til et aktiv i Mediebiblioteket',
  /** Object is not a reference to a document (eg `{_ref: 'documentId'}`) */
  'object.not-reference': 'Skal være en reference til et dokument',
  /** Object references a document which is not published */
  'object.reference-not-published': 'Refereret dokument skal være offentliggjort',

  /** Accessibility label for closing the validation panel */
  'panel.close-button-aria-label': 'Luk validering',
  /** Message shown when the validation panel is opened but there are no errors/warnings */
  'panel.no-errors-message': 'Ingen valideringsfejl',
  /** Title for the actual "Validation" panel/feature */
  'panel.title': 'Validering',
  /** Message shown when the validation panel is opened but the document is going to unpublish */
  'panel.unpublish-message': 'Dokumentet vil blive afpubliceret, ingen valideringsfejl vises',

  /** Slug is an object, but is missing a `current` string property */
  'slug.missing-current': 'Slug skal have en værdi',
  /** Slug is not an object (eg `{current: 'some-slug'}`) */
  'slug.not-object': 'Slug skal være et objekt',
  /** Slug is already in use somewhere else, but needs to be unique */
  'slug.not-unique': 'Slug er allerede i brug',

  /** String is not a valid email address */
  'string.email': 'Skal være en gyldig e-mailadresse',
  /** String has a different character length than the exact number "$wantedLength" */
  'string.exact-length': 'Skal være præcis {{wantedLength}} tegn lang',
  /** String contains characters that are not in lowercase  */
  'string.lowercase': 'Skal være alle små bogstaver',
  /** String is longer than the limit of "$maxLength" characters */
  'string.maximum-length': 'Skal være højst {{maxLength}} tegn lang',
  /** String is shorter than the limit of "$minLength" characters */
  'string.minimum-length': 'Skal være mindst {{minLength}} tegn lang',
  /** String does not match the given regular expression, but should */
  'string.regex-does-not-match': 'Matcher ikke "{{name}}"-mønsteret',
  /** String matches the given regular expression, but should not */
  'string.regex-match': 'Bør ikke matche "{{name}}"-mønsteret',
  /** String contains characters that are not in uppercase */
  'string.uppercase': 'Skal være alle store bogstaver',
  /** String contains a protocol/scheme that is not allowed, eg (`ftp`, `mailto`…) */
  'string.url.disallowed-scheme': 'Matcher ikke tilladte protokoller/skemaer',
  /** String contains a URL with a username or password specified before the host */
  'string.url.includes-credentials': 'Brugernavn/kodeord ikke tilladt',
  /** String is not a valid URL */
  'string.url.invalid': 'Ikke en gyldig URL',
  /** String is not an absolute URL (eg it is missing a protocol/host) */
  'string.url.not-absolute': "Relative URL'er er ikke tilladt",
  /** String is not a relative URL (eg it contains a protocol/host) */
  'string.url.not-relative': "Kun relative URL'er er tilladt",
})
