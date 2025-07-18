import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Array must have exactly "$wantedLength" items, but has more/less */
  'array.exact-length': 'Må ha nøyaktig {{wantedLength}} elementer',
  /** Portable Text array must have exactly "$wantedLength" blocks, but has more/less */
  'array.exact-length_blocks': 'Må ha nøyaktig {{wantedLength}} blokker',
  /** Array item is a duplicate, but array wants only unique items */
  'array.item-duplicate': 'Kan ikke være en duplikat',
  /** Array has more than the maximum of "$maxLength" items */
  'array.maximum-length': 'Må ha maksimalt {{maxLength}} elementer',
  /** Portable Text array has more than the maximum of "$maxLength" items */
  'array.maximum-length_blocks': 'Må ha maksimalt {{maxLength}} blokker',
  /** Array has less than the minimum of "$minLength" items */
  'array.minimum-length': 'Må ha minst {{minLength}} elementer',
  /** Portable Text array has less than the minimum of "$minLength" blocks */
  'array.minimum-length_blocks': 'Må ha minst {{minLength}} blokker',

  /** Date is not valid or not in the correct format (ISO-8601) */
  'date.invalid-format': 'Må være en gyldig dato i ISO-8601-format',
  /** Date is later than the given maximum date "$maxDate" */
  'date.maximum': 'Må være på eller før {{maxDate}}',
  /** Date is earlier than the given minimum date "$minDate" */
  'date.minimum': 'Må være på eller etter {{minDate}}',

  /** A value of incorrect type is found, eg found `number` instead of `string` */
  'generic.incorrect-type': 'Forventet type "{{expectedType}}", fikk "{{actualType}}"',
  /** Value is not one of the values specifically allowed */
  'generic.not-allowed': 'Verdien samsvarer ikke med tillatte verdier',
  /** Value "$givenValue" is not one of the values specifically allowed */
  'generic.not-allowed_hint': 'Verdien "{{hint}}" samsvarer ikke med tillatte verdier',
  /** A value is expected, but none is provided */
  'generic.required': 'Obligatorisk',

  /** Number is less than the given minimum threshold value "$threshold" */
  'number.greater-than': 'Må være større enn {{threshold}}',
  /** Number is greater than the given maximum threshold value "$threshold" */
  'number.less-than': 'Må være mindre enn {{threshold}}',
  /** Number is higher than the given maximum value "$maxNumber" */
  'number.maximum': 'Må være mindre enn eller lik {{maxNumber}}',
  /** Number has more precision (decimals) than the allowed "$limit" */
  'number.maximum-precision': 'Maksimal presisjon er {{limit}}',
  /** Number is lower than the given minimum value "$minNumber" */
  'number.minimum': 'Må være større enn eller lik {{minNumber}}',
  /** Number is not an integer ("whole number") */
  'number.non-integer': 'Må være et heltall',

  /** Object is missing a reference to an asset document in its `asset` field */
  'object.asset-required': 'Ressurs er påkrevd',
  /** Object is missing a reference to a file asset document in its `asset` field */
  'object.asset-required_file': 'Fil er påkrevd',
  /** Object is missing a reference to an image asset document in its `asset` field */
  'object.asset-required_image': 'Bilde er påkrevd',
  /** Media can't be found in the Media Library */
  'object.media-not-found': undefined, // 'The asset could not found in the Media Library'
  /** Media object is missing a reference to a document in its `_ref` field */
  'object.not-media-library-asset': undefined, // 'Must be a reference to a Media Library asset'
  /** Object is not a reference to a document (eg `{_ref: 'documentId'}`) */
  'object.not-reference': 'Må være en referanse til et dokument',
  /** Object references a document which is not published */
  'object.reference-not-published': 'Referert dokument må være publisert',

  /** Accessibility label for closing the validation panel */
  'panel.close-button-aria-label': 'Lukk validering',
  /** Message shown when the validation panel is opened but there are no errors/warnings */
  'panel.no-errors-message': 'Ingen valideringsfeil',
  /** Title for the actual "Validation" panel/feature */
  'panel.title': 'Validering',
  /** Message shown when the validation panel is opened but the document is going to unpublish */
  'panel.unpublish-message': undefined, // 'Document is going to unpublish, no validation errors are shown'

  /** Slug is an object, but is missing a `current` string property */
  'slug.missing-current': 'Slug må ha en verdi',
  /** Slug is not an object (eg `{current: 'some-slug'}`) */
  'slug.not-object': 'Slug må være et objekt',
  /** Slug is already in use somewhere else, but needs to be unique */
  'slug.not-unique': 'Slug er allerede i bruk et annet sted, og må være unik',

  /** String is not a valid email address */
  'string.email': 'Må være en gyldig e-postadresse',
  /** String has a different character length than the exact number "$wantedLength" */
  'string.exact-length': 'Må være nøyaktig {{wantedLength}} tegn lang',
  /** String contains characters that are not in lowercase  */
  'string.lowercase': 'Må bestå av kun små bokstaver',
  /** String is longer than the limit of "$maxLength" characters */
  'string.maximum-length': 'Må være maksimalt {{maxLength}} tegn lang',
  /** String is shorter than the limit of "$minLength" characters */
  'string.minimum-length': 'Må være minst {{minLength}} tegn lang',
  /** String does not match the given regular expression, but should */
  'string.regex-does-not-match': 'Må stemme overens med "{{name}}"-mønsteret',
  /** String matches the given regular expression, but should not */
  'string.regex-match': 'Må ikke stemme overens med "{{name}}"-mønsteret',
  /** String contains characters that are not in uppercase */
  'string.uppercase': 'Må bestå av kun store bokstaver',
  /** String contains a protocol/scheme that is not allowed, eg (`ftp`, `mailto`…) */
  'string.url.disallowed-scheme': 'Stemmer ikke overens med tillatte protokoller/skjemaer',
  /** String contains a URL with a username or password specified before the host */
  'string.url.includes-credentials': 'Brukernavn/passord er ikke tillatt',
  /** String is not a valid URL */
  'string.url.invalid': 'Ikke en gyldig URL',
  /** String is not an absolute URL (eg it is missing a protocol/host) */
  'string.url.not-absolute': 'Absolutte URL-er er ikke tillatt',
  /** String is not a relative URL (eg it contains a protocol/host) */
  'string.url.not-relative': 'Bare relative URL-er er tillatt',
})
