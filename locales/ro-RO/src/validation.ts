import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Array must have exactly "$wantedLength" items, but has more/less */
  'array.exact-length': 'Trebuie să aibă exact {{wantedLength}} elemente',
  /** Portable Text array must have exactly "$wantedLength" blocks, but has more/less */
  'array.exact-length_blocks': 'Trebuie să aibă exact {{wantedLength}} blocuri',
  /** Array item is a duplicate, but array wants only unique items */
  'array.item-duplicate': 'Nu poate fi duplicat',
  /** Array has more than the maximum of "$maxLength" items */
  'array.maximum-length': 'Trebuie să aibă cel mult {{maxLength}} elemente',
  /** Portable Text array has more than the maximum of "$maxLength" items */
  'array.maximum-length_blocks': 'Trebuie să aibă cel mult {{maxLength}} blocuri',
  /** Array has less than the minimum of "$minLength" items */
  'array.minimum-length': 'Trebuie să aibă cel puțin {{minLength}} elemente',
  /** Portable Text array has less than the minimum of "$minLength" blocks */
  'array.minimum-length_blocks': 'Trebuie să aibă cel puțin {{minLength}} blocuri',

  /** Date is not valid or not in the correct format (ISO-8601) */
  'date.invalid-format': 'Trebuie să fie un șir de caractere formatat ISO-8601 valid',
  /** Date is later than the given maximum date "$maxDate" */
  'date.maximum': 'Trebuie să fie la sau înainte de {{maxDate}}',
  /** Date is earlier than the given minimum date "$minDate" */
  'date.minimum': 'Trebuie să fie la sau după {{minDate}}',

  /** A value of incorrect type is found, eg found `number` instead of `string` */
  'generic.incorrect-type': 'Tipul așteptat "{{expectedType}}", găsit "{{actualType}}"',
  /** Value is not one of the values specifically allowed */
  'generic.not-allowed': 'Valoarea nu se potrivește cu niciuna dintre valorile permise',
  /** Value "$givenValue" is not one of the values specifically allowed */
  'generic.not-allowed_hint':
    'Valoarea "{{hint}}" nu se potrivește cu niciuna dintre valorile permise',
  /** A value is expected, but none is provided */
  'generic.required': 'Obligatoriu',

  /** Number is less than the given minimum threshold value "$threshold" */
  'number.greater-than': 'Trebuie să fie mai mare decât {{threshold}}',
  /** Number is greater than the given maximum threshold value "$threshold" */
  'number.less-than': 'Trebuie să fie mai mic decât {{threshold}}',
  /** Number is higher than the given maximum value "$maxNumber" */
  'number.maximum': 'Trebuie să fie mai mic sau egal cu {{maxNumber}}',
  /** Number has more precision (decimals) than the allowed "$limit" */
  'number.maximum-precision': 'Precizia maximă este {{limit}}',
  /** Number is lower than the given minimum value "$minNumber" */
  'number.minimum': 'Trebuie să fie mai mare sau egal cu {{minNumber}}',
  /** Number is not an integer ("whole number") */
  'number.non-integer': 'Trebuie să fie un număr întreg',

  /** Object is missing a reference to an asset document in its `asset` field */
  'object.asset-required': 'Asset este necesar',
  /** Object is missing a reference to a file asset document in its `asset` field */
  'object.asset-required_file': 'Fișierul este necesar',
  /** Object is missing a reference to an image asset document in its `asset` field */
  'object.asset-required_image': 'Imaginea este necesară',
  /** Object is not a reference to a document (eg `{_ref: 'documentId'}`) */
  'object.not-reference': 'Trebuie să fie o referință la un document',
  /** Object references a document which is not published */
  'object.reference-not-published': 'Documentul referențiat trebuie să fie publicat',

  /** Accessibility label for closing the validation panel */
  'panel.close-button-aria-label': 'Închide validarea',
  /** Message shown when the validation panel is opened but there are no errors/warnings */
  'panel.no-errors-message': 'Nicio eroare de validare',
  /** Title for the actual "Validation" panel/feature */
  'panel.title': 'Validare',

  /** Slug is an object, but is missing a `current` string property */
  'slug.missing-current': 'Slug trebuie să aibă o valoare',
  /** Slug is not an object (eg `{current: 'some-slug'}`) */
  'slug.not-object': 'Slug trebuie să fie un obiect',
  /** Slug is already in use somewhere else, but needs to be unique */
  'slug.not-unique': 'Slug este deja utilizat',

  /** String is not a valid email address */
  'string.email': 'Trebuie să fie o adresă de email validă',
  /** String has a different character length than the exact number "$wantedLength" */
  'string.exact-length': 'Trebuie să aibă exact {{wantedLength}} caractere',
  /** String contains characters that are not in lowercase  */
  'string.lowercase': 'Trebuie să conțină doar caractere minuscule',
  /** String is longer than the limit of "$maxLength" characters */
  'string.maximum-length': 'Trebuie să aibă cel mult {{maxLength}} caractere',
  /** String is shorter than the limit of "$minLength" characters */
  'string.minimum-length': 'Trebuie să aibă cel puțin {{minLength}} caractere',
  /** String does not match the given regular expression, but should */
  'string.regex-does-not-match': 'Nu se potrivește cu modelul "{{name}}"',
  /** String matches the given regular expression, but should not */
  'string.regex-match': 'Nu ar trebui să se potrivească cu modelul "{{name}}"',
  /** String contains characters that are not in uppercase */
  'string.uppercase': 'Trebuie să conțină doar caractere majuscule',
  /** String contains a protocol/scheme that is not allowed, eg (`ftp`, `mailto`…) */
  'string.url.disallowed-scheme': 'Nu se potrivește cu protocoalele/schemele permise',
  /** String contains a URL with a username or password specified before the host */
  'string.url.includes-credentials': 'Numele de utilizator/parola nu sunt permise',
  /** String is not a valid URL */
  'string.url.invalid': 'Nu este un URL valid',
  /** String is not an absolute URL (eg it is missing a protocol/host) */
  'string.url.not-absolute': 'URL-urile relative nu sunt permise',
  /** String is not a relative URL (eg it contains a protocol/host) */
  'string.url.not-relative': 'Doar URL-urile relative sunt permise',
})
