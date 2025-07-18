import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Array must have exactly "$wantedLength" items, but has more/less */
  'array.exact-length': 'Doit contenir exactement {{wantedLength}} éléments',
  /** Portable Text array must have exactly "$wantedLength" blocks, but has more/less */
  'array.exact-length_blocks': 'Doit contenir exactement {{wantedLength}} blocs',
  /** Array item is a duplicate, but array wants only unique items */
  'array.item-duplicate': 'Ne peut pas être un doublon',
  /** Array has more than the maximum of "$maxLength" items */
  'array.maximum-length': 'Doit contenir au plus {{maxLength}} éléments',
  /** Portable Text array has more than the maximum of "$maxLength" items */
  'array.maximum-length_blocks': 'Doit contenir au plus {{maxLength}} blocs',
  /** Array has less than the minimum of "$minLength" items */
  'array.minimum-length': 'Doit contenir au moins {{minLength}} éléments',
  /** Portable Text array has less than the minimum of "$minLength" blocks */
  'array.minimum-length_blocks': 'Doit contenir au moins {{minLength}} blocs',

  /** Date is not valid or not in the correct format (ISO-8601) */
  'date.invalid-format': 'Doit être une chaîne de date formatée ISO-8601 valide',
  /** Date is later than the given maximum date "$maxDate" */
  'date.maximum': 'Doit être au ou avant {{maxDate}}',
  /** Date is earlier than the given minimum date "$minDate" */
  'date.minimum': 'Doit être au ou après {{minDate}}',

  /** A value of incorrect type is found, eg found `number` instead of `string` */
  'generic.incorrect-type': 'Type attendu "{{expectedType}}", trouvé "{{actualType}}"',
  /** Value is not one of the values specifically allowed */
  'generic.not-allowed': 'La valeur ne correspond à aucune valeur autorisée',
  /** Value "$givenValue" is not one of the values specifically allowed */
  'generic.not-allowed_hint': 'La valeur "{{hint}}" ne correspond à aucune valeur autorisée',
  /** A value is expected, but none is provided */
  'generic.required': 'Requis',

  /** Number is less than the given minimum threshold value "$threshold" */
  'number.greater-than': 'Doit être supérieur à {{threshold}}',
  /** Number is greater than the given maximum threshold value "$threshold" */
  'number.less-than': 'Doit être inférieur à {{threshold}}',
  /** Number is higher than the given maximum value "$maxNumber" */
  'number.maximum': 'Doit être inférieur ou égal à {{maxNumber}}',
  /** Number has more precision (decimals) than the allowed "$limit" */
  'number.maximum-precision': 'La précision maximale est de {{limit}}',
  /** Number is lower than the given minimum value "$minNumber" */
  'number.minimum': 'Doit être supérieur ou égal à {{minNumber}}',
  /** Number is not an integer ("whole number") */
  'number.non-integer': 'Doit être un entier',

  /** Object is missing a reference to an asset document in its `asset` field */
  'object.asset-required': 'Un asset est requis',
  /** Object is missing a reference to a file asset document in its `asset` field */
  'object.asset-required_file': 'Un fichier est requis',
  /** Object is missing a reference to an image asset document in its `asset` field */
  'object.asset-required_image': 'Une image est requise',
  /** Media can't be found in the Media Library */
  'object.media-not-found': undefined, // 'The asset could not found in the Media Library'
  /** Media object is missing a reference to a document in its `_ref` field */
  'object.not-media-library-asset': undefined, // 'Must be a reference to a Media Library asset'
  /** Object is not a reference to a document (eg `{_ref: 'documentId'}`) */
  'object.not-reference': 'Doit être une référence à un document',
  /** Object references a document which is not published */
  'object.reference-not-published': 'Le document référencé doit être publié',

  /** Accessibility label for closing the validation panel */
  'panel.close-button-aria-label': 'Fermer la validation',
  /** Message shown when the validation panel is opened but there are no errors/warnings */
  'panel.no-errors-message': 'Aucune erreur de validation',
  /** Title for the actual "Validation" panel/feature */
  'panel.title': 'Validation',
  /** Message shown when the validation panel is opened but the document is going to unpublish */
  'panel.unpublish-message': undefined, // 'Document is going to unpublish, no validation errors are shown'

  /** Slug is an object, but is missing a `current` string property */
  'slug.missing-current': 'Le slug doit avoir une valeur',
  /** Slug is not an object (eg `{current: 'some-slug'}`) */
  'slug.not-object': 'Le slug doit être un objet',
  /** Slug is already in use somewhere else, but needs to be unique */
  'slug.not-unique': 'Le slug est déjà utilisé',

  /** String is not a valid email address */
  'string.email': 'Doit être une adresse e-mail valide',
  /** String has a different character length than the exact number "$wantedLength" */
  'string.exact-length': 'Doit comporter exactement {{wantedLength}} caractères',
  /** String contains characters that are not in lowercase  */
  'string.lowercase': 'Doit être composé uniquement de caractères minuscules',
  /** String is longer than the limit of "$maxLength" characters */
  'string.maximum-length': 'Doit comporter au plus {{maxLength}} caractères',
  /** String is shorter than the limit of "$minLength" characters */
  'string.minimum-length': 'Doit comporter au moins {{minLength}} caractères',
  /** String does not match the given regular expression, but should */
  'string.regex-does-not-match': 'Ne correspond pas au motif "{{name}}"',
  /** String matches the given regular expression, but should not */
  'string.regex-match': 'Ne doit pas correspondre au motif "{{name}}"',
  /** String contains characters that are not in uppercase */
  'string.uppercase': 'Doit être composé uniquement de caractères majuscules',
  /** String contains a protocol/scheme that is not allowed, eg (`ftp`, `mailto`…) */
  'string.url.disallowed-scheme': 'Ne correspond pas aux protocoles/schémas autorisés',
  /** String contains a URL with a username or password specified before the host */
  'string.url.includes-credentials': 'Nom d’utilisateur/mot de passe non autorisé',
  /** String is not a valid URL */
  'string.url.invalid': 'N’est pas une URL valide',
  /** String is not an absolute URL (eg it is missing a protocol/host) */
  'string.url.not-absolute': 'Les URL relatives ne sont pas autorisées',
  /** String is not a relative URL (eg it contains a protocol/host) */
  'string.url.not-relative': 'Seules les URL relatives sont autorisées',
})
