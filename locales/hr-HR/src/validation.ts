import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Array must have exactly "$wantedLength" items, but has more/less */
  'array.exact-length': 'Mora imati točno {{wantedLength}} stavki',
  /** Portable Text array must have exactly "$wantedLength" blocks, but has more/less */
  'array.exact-length_blocks': 'Mora imati točno {{wantedLength}} blokova',
  /** Array item is a duplicate, but array wants only unique items */
  'array.item-duplicate': 'Ne smije biti duplikat',
  /** Array has more than the maximum of "$maxLength" items */
  'array.maximum-length': 'Mora imati najviše {{maxLength}} stavki',
  /** Portable Text array has more than the maximum of "$maxLength" items */
  'array.maximum-length_blocks': 'Mora imati najviše {{maxLength}} blokova',
  /** Array has less than the minimum of "$minLength" items */
  'array.minimum-length': 'Mora imati najmanje {{minLength}} stavki',
  /** Portable Text array has less than the minimum of "$minLength" blocks */
  'array.minimum-length_blocks': 'Mora imati najmanje {{minLength}} blokova',

  /** Date is not valid or not in the correct format (ISO-8601) */
  'date.invalid-format': 'Mora biti valjan ISO-8601 formatiran datum',
  /** Date is later than the given maximum date "$maxDate" */
  'date.maximum': 'Mora biti ili prije {{maxDate}}',
  /** Date is earlier than the given minimum date "$minDate" */
  'date.minimum': 'Mora biti ili nakon {{minDate}}',

  /** A value of incorrect type is found, eg found `number` instead of `string` */
  'generic.incorrect-type': 'Očekivani tip "{{expectedType}}", dobio "{{actualType}}"',
  /** Value is not one of the values specifically allowed */
  'generic.not-allowed': 'Vrijednost se ne podudara s dozvoljenim vrijednostima',
  /** Value "$givenValue" is not one of the values specifically allowed */
  'generic.not-allowed_hint': 'Vrijednost "{{hint}}" se ne podudara s dozvoljenim vrijednostima',
  /** A value is expected, but none is provided */
  'generic.required': 'Obavezno',

  /** Number is less than the given minimum threshold value "$threshold" */
  'number.greater-than': 'Mora biti veće od {{threshold}}',
  /** Number is greater than the given maximum threshold value "$threshold" */
  'number.less-than': 'Mora biti manje od {{threshold}}',
  /** Number is higher than the given maximum value "$maxNumber" */
  'number.maximum': 'Mora biti manje ili jednako {{maxNumber}}',
  /** Number has more precision (decimals) than the allowed "$limit" */
  'number.maximum-precision': 'Maksimalna preciznost je {{limit}}',
  /** Number is lower than the given minimum value "$minNumber" */
  'number.minimum': 'Mora biti veće ili jednako {{minNumber}}',
  /** Number is not an integer ("whole number") */
  'number.non-integer': 'Mora biti cijeli broj',

  /** Object is missing a reference to an asset document in its `asset` field */
  'object.asset-required': 'Asset je obavezan',
  /** Object is missing a reference to a file asset document in its `asset` field */
  'object.asset-required_file': 'Datoteka je obavezna',
  /** Object is missing a reference to an image asset document in its `asset` field */
  'object.asset-required_image': 'Slika je obavezna',
  /** Object is not a reference to a document (eg `{_ref: 'documentId'}`) */
  'object.not-reference': 'Mora biti referenca na dokument',
  /** Object references a document which is not published */
  'object.reference-not-published': 'Referencirani dokument mora biti objavljen',

  /** Accessibility label for closing the validation panel */
  'panel.close-button-aria-label': 'Zatvori validaciju',
  /** Message shown when the validation panel is opened but there are no errors/warnings */
  'panel.no-errors-message': 'Nema grešaka u validaciji',
  /** Title for the actual "Validation" panel/feature */
  'panel.title': 'Validacija',

  /** Slug is an object, but is missing a `current` string property */
  'slug.missing-current': 'Slug mora imati vrijednost',
  /** Slug is not an object (eg `{current: 'some-slug'}`) */
  'slug.not-object': 'Slug mora biti objekt',
  /** Slug is already in use somewhere else, but needs to be unique */
  'slug.not-unique': 'Slug se već koristi',

  /** String is not a valid email address */
  'string.email': 'Mora biti valjana email adresa',
  /** String has a different character length than the exact number "$wantedLength" */
  'string.exact-length': 'Mora biti točno {{wantedLength}} znakova dugo',
  /** String contains characters that are not in lowercase  */
  'string.lowercase': 'Mora sadržavati samo mala slova',
  /** String is longer than the limit of "$maxLength" characters */
  'string.maximum-length': 'Mora biti najviše {{maxLength}} znakova dugo',
  /** String is shorter than the limit of "$minLength" characters */
  'string.minimum-length': 'Mora biti najmanje {{minLength}} znakova dugo',
  /** String does not match the given regular expression, but should */
  'string.regex-does-not-match': 'Ne odgovara "{{name}}"-uzorku',
  /** String matches the given regular expression, but should not */
  'string.regex-match': 'Ne smije odgovarati "{{name}}"-uzorku',
  /** String contains characters that are not in uppercase */
  'string.uppercase': 'Mora sadržavati samo velika slova',
  /** String contains a protocol/scheme that is not allowed, eg (`ftp`, `mailto`…) */
  'string.url.disallowed-scheme': 'Ne odgovara dozvoljenim protokolima/shemama',
  /** String contains a URL with a username or password specified before the host */
  'string.url.includes-credentials': 'Korisničko ime/lozinka nisu dozvoljeni',
  /** String is not a valid URL */
  'string.url.invalid': 'Nije valjan URL',
  /** String is not an absolute URL (eg it is missing a protocol/host) */
  'string.url.not-absolute': 'Relativni URL-ovi nisu dozvoljeni',
  /** String is not a relative URL (eg it contains a protocol/host) */
  'string.url.not-relative': 'Dozvoljeni su samo relativni URL-ovi',
})
