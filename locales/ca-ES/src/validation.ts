import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Array must have exactly "$wantedLength" items, but has more/less */
  'array.exact-length': 'Ha de tenir exactament {{wantedLength}} elements',
  /** Portable Text array must have exactly "$wantedLength" blocks, but has more/less */
  'array.exact-length_blocks': 'Ha de tenir exactament {{wantedLength}} blocs',
  /** Array item is a duplicate, but array wants only unique items */
  'array.item-duplicate': 'No pot ser un duplicat',
  /** Array has more than the maximum of "$maxLength" items */
  'array.maximum-length': 'Ha de tenir com a màxim {{maxLength}} elements',
  /** Portable Text array has more than the maximum of "$maxLength" items */
  'array.maximum-length_blocks': 'Ha de tenir com a màxim {{maxLength}} blocs',
  /** Array has less than the minimum of "$minLength" items */
  'array.minimum-length': 'Ha de tenir com a mínim {{minLength}} elements',
  /** Portable Text array has less than the minimum of "$minLength" blocks */
  'array.minimum-length_blocks': 'Ha de tenir com a mínim {{minLength}} blocs',

  /** Date is not valid or not in the correct format (ISO-8601) */
  'date.invalid-format': 'Ha de ser una cadena de text amb data formatada en ISO-8601 vàlida',
  /** Date is later than the given maximum date "$maxDate" */
  'date.maximum': 'Ha de ser igual o anterior a {{maxDate}}',
  /** Date is earlier than the given minimum date "$minDate" */
  'date.minimum': 'Ha de ser igual o posterior a {{minDate}}',

  /** A value of incorrect type is found, eg found `number` instead of `string` */
  'generic.incorrect-type': 'Tipus esperat "{{expectedType}}", trobat "{{actualType}}"',
  /** Value is not one of the values specifically allowed */
  'generic.not-allowed': 'El valor no coincideix amb cap dels valors permesos',
  /** Value "$givenValue" is not one of the values specifically allowed */
  'generic.not-allowed_hint': 'El valor "{{hint}}" no coincideix amb cap dels valors permesos',
  /** A value is expected, but none is provided */
  'generic.required': 'Requerit',

  /** Number is less than the given minimum threshold value "$threshold" */
  'number.greater-than': 'Ha de ser més gran que {{threshold}}',
  /** Number is greater than the given maximum threshold value "$threshold" */
  'number.less-than': 'Ha de ser menor que {{threshold}}',
  /** Number is higher than the given maximum value "$maxNumber" */
  'number.maximum': 'Ha de ser menor o igual a {{maxNumber}}',
  /** Number has more precision (decimals) than the allowed "$limit" */
  'number.maximum-precision': 'La màxima precisió és {{limit}}',
  /** Number is lower than the given minimum value "$minNumber" */
  'number.minimum': 'Ha de ser més gran o igual a {{minNumber}}',
  /** Number is not an integer ("whole number") */
  'number.non-integer': 'Ha de ser un nombre enter',

  /** Object is missing a reference to an asset document in its `asset` field */
  'object.asset-required': 'Es requereix un actiu',
  /** Object is missing a reference to a file asset document in its `asset` field */
  'object.asset-required_file': 'Es requereix un fitxer',
  /** Object is missing a reference to an image asset document in its `asset` field */
  'object.asset-required_image': 'Es requereix una imatge',
  /** Media can't be found in the Media Library */
  'object.media-not-found': "L'actiu no s'ha pogut trobar a la Biblioteca de Mitjans",
  /** Media object is missing a reference to a document in its `_ref` field */
  'object.not-media-library-asset':
    'Ha de ser una referència a un actiu de la Biblioteca de Mitjans',
  /** Object is not a reference to a document (eg `{_ref: 'documentId'}`) */
  'object.not-reference': 'Ha de ser una referència a un document',
  /** Object references a document which is not published */
  'object.reference-not-published': 'El document referenciat ha de ser publicat',

  /** Accessibility label for closing the validation panel */
  'panel.close-button-aria-label': 'Tanca la validació',
  /** Message shown when the validation panel is opened but there are no errors/warnings */
  'panel.no-errors-message': 'No hi ha errors de validació',
  /** Title for the actual "Validation" panel/feature */
  'panel.title': 'Validació',
  /** Message shown when the validation panel is opened but the document is going to unpublish */
  'panel.unpublish-message': 'El document es despublicarà, no es mostren errors de validació',

  /** Slug is an object, but is missing a `current` string property */
  'slug.missing-current': 'El slug ha de tenir un valor',
  /** Slug is not an object (eg `{current: 'some-slug'}`) */
  'slug.not-object': 'El slug ha de ser un objecte',
  /** Slug is already in use somewhere else, but needs to be unique */
  'slug.not-unique': 'El slug ja està en ús',

  /** String is not a valid email address */
  'string.email': 'Ha de ser una adreça de correu electrònic vàlida',
  /** String has a different character length than the exact number "$wantedLength" */
  'string.exact-length': 'Ha de tenir exactament {{wantedLength}} caràcters',
  /** String contains characters that are not in lowercase  */
  'string.lowercase': 'Ha de ser tot en caràcters minúsculs',
  /** String is longer than the limit of "$maxLength" characters */
  'string.maximum-length': 'Ha de tenir com a màxim {{maxLength}} caràcters',
  /** String is shorter than the limit of "$minLength" characters */
  'string.minimum-length': 'Ha de tenir com a mínim {{minLength}} caràcters',
  /** String does not match the given regular expression, but should */
  'string.regex-does-not-match': 'No coincideix amb el patró "{{name}}"',
  /** String matches the given regular expression, but should not */
  'string.regex-match': 'No ha de coincidir amb el patró "{{name}}"',
  /** String contains characters that are not in uppercase */
  'string.uppercase': 'Ha de ser tot en caràcters majúsculs',
  /** String contains a protocol/scheme that is not allowed, eg (`ftp`, `mailto`…) */
  'string.url.disallowed-scheme': 'No coincideix amb els protocols/esquemes permesos',
  /** String contains a URL with a username or password specified before the host */
  'string.url.includes-credentials': "No es permeten nom d'usuari/contrasenya",
  /** String is not a valid URL */
  'string.url.invalid': 'No és una URL vàlida',
  /** String is not an absolute URL (eg it is missing a protocol/host) */
  'string.url.not-absolute': 'No es permeten URLs relatives',
  /** String is not a relative URL (eg it contains a protocol/host) */
  'string.url.not-relative': 'Només es permeten URLs relatives',
})
