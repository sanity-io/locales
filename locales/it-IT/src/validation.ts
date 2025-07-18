import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Array must have exactly "$wantedLength" items, but has more/less */
  'array.exact-length': 'Deve contenere esattamente {{wantedLength}} elementi',
  /** Portable Text array must have exactly "$wantedLength" blocks, but has more/less */
  'array.exact-length_blocks': 'Deve contenere esattamente {{wantedLength}} blocchi',
  /** Array item is a duplicate, but array wants only unique items */
  'array.item-duplicate': 'Non può essere un duplicato',
  /** Array has more than the maximum of "$maxLength" items */
  'array.maximum-length': 'Deve contenere al massimo {{maxLength}} elementi',
  /** Portable Text array has more than the maximum of "$maxLength" items */
  'array.maximum-length_blocks': 'Deve contenere al massimo {{maxLength}} blocchi',
  /** Array has less than the minimum of "$minLength" items */
  'array.minimum-length': 'Deve contenere almeno {{minLength}} elementi',
  /** Portable Text array has less than the minimum of "$minLength" blocks */
  'array.minimum-length_blocks': 'Deve contenere almeno {{minLength}} blocchi',

  /** Date is not valid or not in the correct format (ISO-8601) */
  'date.invalid-format': 'Deve essere una stringa di data formattata ISO-8601 valida',
  /** Date is later than the given maximum date "$maxDate" */
  'date.maximum': 'Deve essere uguale o precedente a {{maxDate}}',
  /** Date is earlier than the given minimum date "$minDate" */
  'date.minimum': 'Deve essere uguale o successiva a {{minDate}}',

  /** A value of incorrect type is found, eg found `number` instead of `string` */
  'generic.incorrect-type': 'Tipo atteso "{{expectedType}}", trovato "{{actualType}}"',
  /** Value is not one of the values specifically allowed */
  'generic.not-allowed': 'Il valore non corrisponde a nessuno dei valori consentiti',
  /** Value "$givenValue" is not one of the values specifically allowed */
  'generic.not-allowed_hint':
    'Il valore "{{hint}}" non corrisponde a nessuno dei valori consentiti',
  /** A value is expected, but none is provided */
  'generic.required': 'Richiesto',

  /** Number is less than the given minimum threshold value "$threshold" */
  'number.greater-than': 'Deve essere maggiore di {{threshold}}',
  /** Number is greater than the given maximum threshold value "$threshold" */
  'number.less-than': 'Deve essere minore di {{threshold}}',
  /** Number is higher than the given maximum value "$maxNumber" */
  'number.maximum': 'Deve essere minore o uguale a {{maxNumber}}',
  /** Number has more precision (decimals) than the allowed "$limit" */
  'number.maximum-precision': 'La massima precisione è {{limit}}',
  /** Number is lower than the given minimum value "$minNumber" */
  'number.minimum': 'Deve essere maggiore o uguale a {{minNumber}}',
  /** Number is not an integer ("whole number") */
  'number.non-integer': 'Deve essere un numero intero',

  /** Object is missing a reference to an asset document in its `asset` field */
  'object.asset-required': 'Asset è richiesto',
  /** Object is missing a reference to a file asset document in its `asset` field */
  'object.asset-required_file': 'File è richiesto',
  /** Object is missing a reference to an image asset document in its `asset` field */
  'object.asset-required_image': 'Immagine è richiesta',
  /** Media can't be found in the Media Library */
  'object.media-not-found': undefined, // 'The asset could not found in the Media Library'
  /** Media object is missing a reference to a document in its `_ref` field */
  'object.not-media-library-asset': undefined, // 'Must be a reference to a Media Library asset'
  /** Object is not a reference to a document (eg `{_ref: 'documentId'}`) */
  'object.not-reference': 'Deve essere un riferimento a un documento',
  /** Object references a document which is not published */
  'object.reference-not-published': 'Il documento di riferimento deve essere pubblicato',

  /** Accessibility label for closing the validation panel */
  'panel.close-button-aria-label': 'Chiudi validazione',
  /** Message shown when the validation panel is opened but there are no errors/warnings */
  'panel.no-errors-message': 'Nessun errore di validazione',
  /** Title for the actual "Validation" panel/feature */
  'panel.title': 'Validazione',
  /** Message shown when the validation panel is opened but the document is going to unpublish */
  'panel.unpublish-message': undefined, // 'Document is going to unpublish, no validation errors are shown'

  /** Slug is an object, but is missing a `current` string property */
  'slug.missing-current': 'Slug deve avere un valore',
  /** Slug is not an object (eg `{current: 'some-slug'}`) */
  'slug.not-object': 'Slug deve essere un oggetto',
  /** Slug is already in use somewhere else, but needs to be unique */
  'slug.not-unique': 'Slug è già in uso',

  /** String is not a valid email address */
  'string.email': 'Deve essere un indirizzo email valido',
  /** String has a different character length than the exact number "$wantedLength" */
  'string.exact-length': 'Deve essere esattamente {{wantedLength}} caratteri',
  /** String contains characters that are not in lowercase  */
  'string.lowercase': 'Deve essere tutto in caratteri minuscoli',
  /** String is longer than the limit of "$maxLength" characters */
  'string.maximum-length': 'Deve essere lungo al massimo {{maxLength}} caratteri',
  /** String is shorter than the limit of "$minLength" characters */
  'string.minimum-length': 'Deve essere lungo almeno {{minLength}} caratteri',
  /** String does not match the given regular expression, but should */
  'string.regex-does-not-match': 'Non corrisponde al modello "{{name}}"',
  /** String matches the given regular expression, but should not */
  'string.regex-match': 'Non dovrebbe corrispondere al modello "{{name}}"',
  /** String contains characters that are not in uppercase */
  'string.uppercase': 'Deve essere tutto in caratteri maiuscoli',
  /** String contains a protocol/scheme that is not allowed, eg (`ftp`, `mailto`…) */
  'string.url.disallowed-scheme': 'Non corrisponde ai protocolli/schemi consentiti',
  /** String contains a URL with a username or password specified before the host */
  'string.url.includes-credentials': 'Username/password non consentiti',
  /** String is not a valid URL */
  'string.url.invalid': 'URL non valido',
  /** String is not an absolute URL (eg it is missing a protocol/host) */
  'string.url.not-absolute': 'Non sono consentiti URL relativi',
  /** String is not a relative URL (eg it contains a protocol/host) */
  'string.url.not-relative': 'Sono consentiti solo URL relativi',
})
