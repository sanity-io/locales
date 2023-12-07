import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Array must have exactly "$wantedLength" items, but has more/less */
  'array.exact-length': 'Musí mít přesně {{wantedLength}} položek',
  /** Portable Text array must have exactly "$wantedLength" blocks, but has more/less */
  'array.exact-length_blocks': 'Musí mít přesně {{wantedLength}} bloků',
  /** Array item is a duplicate, but array wants only unique items */
  'array.item-duplicate': 'Nesmí být duplicitní',
  /** Array has more than the maximum of "$maxLength" items */
  'array.maximum-length': 'Musí mít nejvýše {{maxLength}} položek',
  /** Portable Text array has more than the maximum of "$maxLength" items */
  'array.maximum-length_blocks': 'Musí mít nejvýše {{maxLength}} bloků',
  /** Array has less than the minimum of "$minLength" items */
  'array.minimum-length': 'Musí mít alespoň {{minLength}} položek',
  /** Portable Text array has less than the minimum of "$minLength" blocks */
  'array.minimum-length_blocks': 'Musí mít alespoň {{minLength}} bloků',

  /** Date is not valid or not in the correct format (ISO-8601) */
  'date.invalid-format': 'Musí být platný řetězec formátovaný podle ISO-8601',
  /** Date is later than the given maximum date "$maxDate" */
  'date.maximum': 'Musí být nejpozději {{maxDate}}',
  /** Date is earlier than the given minimum date "$minDate" */
  'date.minimum': 'Musí být nejdříve {{minDate}}',

  /** A value of incorrect type is found, eg found `number` instead of `string` */
  'generic.incorrect-type': 'Očekávaný typ "{{expectedType}}", nalezen "{{actualType}}"',
  /** Value is not one of the values specifically allowed */
  'generic.not-allowed': 'Hodnota neodpovídá žádné povolené hodnotě',
  /** Value "$givenValue" is not one of the values specifically allowed */
  'generic.not-allowed_hint': 'Hodnota "{{hint}}" neodpovídá žádné povolené hodnotě',
  /** A value is expected, but none is provided */
  'generic.required': 'Požadováno',

  /** Number is less than the given minimum threshold value "$threshold" */
  'number.greater-than': 'Musí být větší než {{threshold}}',
  /** Number is greater than the given maximum threshold value "$threshold" */
  'number.less-than': 'Musí být menší než {{threshold}}',
  /** Number is higher than the given maximum value "$maxNumber" */
  'number.maximum': 'Musí být nižší nebo rovno {{maxNumber}}',
  /** Number has more precision (decimals) than the allowed "$limit" */
  'number.maximum-precision': 'Maximální přesnost je {{limit}}',
  /** Number is lower than the given minimum value "$minNumber" */
  'number.minimum': 'Musí být větší nebo rovno {{minNumber}}',
  /** Number is not an integer ("whole number") */
  'number.non-integer': 'Musí být celé číslo',

  /** Object is missing a reference to an asset document in its `asset` field */
  'object.asset-required': 'Asset je požadován',
  /** Object is missing a reference to a file asset document in its `asset` field */
  'object.asset-required_file': 'Soubor je požadován',
  /** Object is missing a reference to an image asset document in its `asset` field */
  'object.asset-required_image': 'Obrázek je požadován',
  /** Object is not a reference to a document (eg `{_ref: 'documentId'}`) */
  'object.not-reference': 'Musí být odkaz na dokument',
  /** Object references a document which is not published */
  'object.reference-not-published': 'Odkazovaný dokument musí být publikován',

  /** Accessibility label for closing the validation panel */
  'panel.close-button-aria-label': 'Zavřít validaci',
  /** Message shown when the validation panel is opened but there are no errors/warnings */
  'panel.no-errors-message': 'Žádné chyby validace',
  /** Title for the actual "Validation" panel/feature */
  'panel.title': 'Validace',

  /** Slug is an object, but is missing a `current` string property */
  'slug.missing-current': 'Slug musí mít hodnotu',
  /** Slug is not an object (eg `{current: 'some-slug'}`) */
  'slug.not-object': 'Slug musí být objekt',
  /** Slug is already in use somewhere else, but needs to be unique */
  'slug.not-unique': 'Slug je již používán',

  /** String is not a valid email address */
  'string.email': 'Musí být platná e-mailová adresa',
  /** String has a different character length than the exact number "$wantedLength" */
  'string.exact-length': 'Musí být přesně {{wantedLength}} znaků dlouhý',
  /** String contains characters that are not in lowercase  */
  'string.lowercase': 'Musí být všechny znaky malá písmena',
  /** String is longer than the limit of "$maxLength" characters */
  'string.maximum-length': 'Musí být nejvýše {{maxLength}} znaků dlouhý',
  /** String is shorter than the limit of "$minLength" characters */
  'string.minimum-length': 'Musí být alespoň {{minLength}} znaků dlouhý',
  /** String does not match the given regular expression, but should */
  'string.regex-does-not-match': 'Neodpovídá vzoru "{{name}}"',
  /** String matches the given regular expression, but should not */
  'string.regex-match': 'Nesmí odpovídat vzoru "{{name}}"',
  /** String contains characters that are not in uppercase */
  'string.uppercase': 'Musí být všechny znaky velká písmena',
  /** String contains a protocol/scheme that is not allowed, eg (`ftp`, `mailto`…) */
  'string.url.disallowed-scheme': 'Neodpovídá povoleným protokolům/schématům',
  /** String contains a URL with a username or password specified before the host */
  'string.url.includes-credentials': 'Uživatelské jméno/heslo není povoleno',
  /** String is not a valid URL */
  'string.url.invalid': 'Neplatná URL',
  /** String is not an absolute URL (eg it is missing a protocol/host) */
  'string.url.not-absolute': 'Relativní URL nejsou povoleny',
  /** String is not a relative URL (eg it contains a protocol/host) */
  'string.url.not-relative': 'Povoleny jsou pouze relativní URL',
})
