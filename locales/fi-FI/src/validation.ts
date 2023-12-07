import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Array must have exactly "$wantedLength" items, but has more/less */
  'array.exact-length': 'Täytyy olla tasan {{wantedLength}} alkiota',
  /** Portable Text array must have exactly "$wantedLength" blocks, but has more/less */
  'array.exact-length_blocks': 'Täytyy olla tasan {{wantedLength}} lohkoa',
  /** Array item is a duplicate, but array wants only unique items */
  'array.item-duplicate': 'Ei voi olla kaksoiskappale',
  /** Array has more than the maximum of "$maxLength" items */
  'array.maximum-length': 'Täytyy olla korkeintaan {{maxLength}} alkiota',
  /** Portable Text array has more than the maximum of "$maxLength" items */
  'array.maximum-length_blocks': 'Täytyy olla korkeintaan {{maxLength}} lohkoa',
  /** Array has less than the minimum of "$minLength" items */
  'array.minimum-length': 'Täytyy olla vähintään {{minLength}} alkiota',
  /** Portable Text array has less than the minimum of "$minLength" blocks */
  'array.minimum-length_blocks': 'Täytyy olla vähintään {{minLength}} lohkoa',

  /** Date is not valid or not in the correct format (ISO-8601) */
  'date.invalid-format': 'Täytyy olla kelvollinen ISO-8601 -muotoinen päivämäärämerkkijono',
  /** Date is later than the given maximum date "$maxDate" */
  'date.maximum': 'Täytyy olla viimeistään {{maxDate}}',
  /** Date is earlier than the given minimum date "$minDate" */
  'date.minimum': 'Täytyy olla aikaisintaan {{minDate}}',

  /** A value of incorrect type is found, eg found `number` instead of `string` */
  'generic.incorrect-type': 'Odotettu tyyppi "{{expectedType}}", saatu "{{actualType}}"',
  /** Value is not one of the values specifically allowed */
  'generic.not-allowed': 'Arvo ei vastaa mitään sallittua arvoa',
  /** Value "$givenValue" is not one of the values specifically allowed */
  'generic.not-allowed_hint': 'Arvo "{{hint}}" ei vastaa mitään sallittua arvoa',
  /** A value is expected, but none is provided */
  'generic.required': 'Vaadittu',

  /** Number is less than the given minimum threshold value "$threshold" */
  'number.greater-than': 'Täytyy olla suurempi kuin {{threshold}}',
  /** Number is greater than the given maximum threshold value "$threshold" */
  'number.less-than': 'Täytyy olla pienempi kuin {{threshold}}',
  /** Number is higher than the given maximum value "$maxNumber" */
  'number.maximum': 'Täytyy olla pienempi tai yhtä suuri kuin {{maxNumber}}',
  /** Number has more precision (decimals) than the allowed "$limit" */
  'number.maximum-precision': 'Suurin tarkkuus on {{limit}}',
  /** Number is lower than the given minimum value "$minNumber" */
  'number.minimum': 'Täytyy olla suurempi tai yhtä suuri kuin {{minNumber}}',
  /** Number is not an integer ("whole number") */
  'number.non-integer': 'Täytyy olla kokonaisluku',

  /** Object is missing a reference to an asset document in its `asset` field */
  'object.asset-required': 'Omaisuus on vaadittu',
  /** Object is missing a reference to a file asset document in its `asset` field */
  'object.asset-required_file': 'Tiedosto on vaadittu',
  /** Object is missing a reference to an image asset document in its `asset` field */
  'object.asset-required_image': 'Kuva on vaadittu',
  /** Object is not a reference to a document (eg `{_ref: 'documentId'}`) */
  'object.not-reference': 'Täytyy olla viittaus asiakirjaan',
  /** Object references a document which is not published */
  'object.reference-not-published': 'Viitatun asiakirjan täytyy olla julkaistu',

  /** Accessibility label for closing the validation panel */
  'panel.close-button-aria-label': 'Sulje validointi',
  /** Message shown when the validation panel is opened but there are no errors/warnings */
  'panel.no-errors-message': 'Ei validointivirheitä',
  /** Title for the actual "Validation" panel/feature */
  'panel.title': 'Validointi',

  /** Slug is an object, but is missing a `current` string property */
  'slug.missing-current': 'Slug-arvon on oltava',
  /** Slug is not an object (eg `{current: 'some-slug'}`) */
  'slug.not-object': 'Slug on oltava objekti',
  /** Slug is already in use somewhere else, but needs to be unique */
  'slug.not-unique': 'Slug on jo käytössä',

  /** String is not a valid email address */
  'string.email': 'Täytyy olla kelvollinen sähköpostiosoite',
  /** String has a different character length than the exact number "$wantedLength" */
  'string.exact-length': 'Täytyy olla tarkalleen {{wantedLength}} merkkiä pitkä',
  /** String contains characters that are not in lowercase  */
  'string.lowercase': 'Täytyy olla vain pieniä kirjaimia',
  /** String is longer than the limit of "$maxLength" characters */
  'string.maximum-length': 'Täytyy olla enintään {{maxLength}} merkkiä pitkä',
  /** String is shorter than the limit of "$minLength" characters */
  'string.minimum-length': 'Täytyy olla vähintään {{minLength}} merkkiä pitkä',
  /** String does not match the given regular expression, but should */
  'string.regex-does-not-match': 'Ei vastaa "{{name}}"-kuviota',
  /** String matches the given regular expression, but should not */
  'string.regex-match': 'Ei saa vastata "{{name}}"-kuviota',
  /** String contains characters that are not in uppercase */
  'string.uppercase': 'Täytyy olla vain suuria kirjaimia',
  /** String contains a protocol/scheme that is not allowed, eg (`ftp`, `mailto`…) */
  'string.url.disallowed-scheme': 'Ei vastaa sallittuja protokollia/skeemoja',
  /** String contains a URL with a username or password specified before the host */
  'string.url.includes-credentials': 'Käyttäjänimi/salasana ei sallittu',
  /** String is not a valid URL */
  'string.url.invalid': 'Ei kelvollinen URL',
  /** String is not an absolute URL (eg it is missing a protocol/host) */
  'string.url.not-absolute': 'Suhteelliset URL-osoitteet eivät ole sallittuja',
  /** String is not a relative URL (eg it contains a protocol/host) */
  'string.url.not-relative': 'Vain suhteelliset URL-osoitteet ovat sallittuja',
})
