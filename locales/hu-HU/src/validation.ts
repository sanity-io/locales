import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Array must have exactly "$wantedLength" items, but has more/less */
  'array.exact-length': 'Pontosan {{wantedLength}} elemet kell tartalmaznia',
  /** Portable Text array must have exactly "$wantedLength" blocks, but has more/less */
  'array.exact-length_blocks': 'Pontosan {{wantedLength}} blokkot kell tartalmaznia',
  /** Array item is a duplicate, but array wants only unique items */
  'array.item-duplicate': 'Nem lehet másolat',
  /** Array has more than the maximum of "$maxLength" items */
  'array.maximum-length': 'Legfeljebb {{maxLength}} elemet tartalmazhat',
  /** Portable Text array has more than the maximum of "$maxLength" items */
  'array.maximum-length_blocks': 'Legfeljebb {{maxLength}} blokkot tartalmazhat',
  /** Array has less than the minimum of "$minLength" items */
  'array.minimum-length': 'Legalább {{minLength}} elemet kell tartalmaznia',
  /** Portable Text array has less than the minimum of "$minLength" blocks */
  'array.minimum-length_blocks': 'Legalább {{minLength}} blokkot kell tartalmaznia',

  /** Date is not valid or not in the correct format (ISO-8601) */
  'date.invalid-format': 'Érvényes ISO-8601 formátumú dátumnak kell lennie',
  /** Date is later than the given maximum date "$maxDate" */
  'date.maximum': 'Legkésőbb {{maxDate}} időpontig tartó dátumnak kell lennie',
  /** Date is earlier than the given minimum date "$minDate" */
  'date.minimum': 'Legkorábban {{minDate}} időponttól kezdődő dátumnak kell lennie',

  /** A value of incorrect type is found, eg found `number` instead of `string` */
  'generic.incorrect-type': 'Várt típus: "{{expectedType}}", kapott: "{{actualType}}"',
  /** Value is not one of the values specifically allowed */
  'generic.not-allowed': 'Az érték nem felel meg egyetlen megengedett értéknek sem',
  /** Value "$givenValue" is not one of the values specifically allowed */
  'generic.not-allowed_hint': 'Az érték "{{hint}}" nem felel meg egyetlen megengedett értéknek sem',
  /** A value is expected, but none is provided */
  'generic.required': 'Kötelező',

  /** Number is less than the given minimum threshold value "$threshold" */
  'number.greater-than': 'Nagyobbnak kell lennie, mint {{threshold}}',
  /** Number is greater than the given maximum threshold value "$threshold" */
  'number.less-than': 'Kisebbnek kell lennie, mint {{threshold}}',
  /** Number is higher than the given maximum value "$maxNumber" */
  'number.maximum': 'Legfeljebb {{maxNumber}} értékű lehet',
  /** Number has more precision (decimals) than the allowed "$limit" */
  'number.maximum-precision': 'A maximális pontosság {{limit}}',
  /** Number is lower than the given minimum value "$minNumber" */
  'number.minimum': 'Legalább {{minNumber}} értékűnek kell lennie',
  /** Number is not an integer ("whole number") */
  'number.non-integer': 'Egész számnak kell lennie',

  /** Object is missing a reference to an asset document in its `asset` field */
  'object.asset-required': 'Médiaerőforrás szükséges',
  /** Object is missing a reference to a file asset document in its `asset` field */
  'object.asset-required_file': 'Fájl szükséges',
  /** Object is missing a reference to an image asset document in its `asset` field */
  'object.asset-required_image': 'Kép szükséges',
  /** Media can't be found in the Media Library */
  'object.media-not-found': undefined, // 'The asset could not found in the Media Library'
  /** Media object is missing a reference to a document in its `_ref` field */
  'object.not-media-library-asset': undefined, // 'Must be a reference to a Media Library asset'
  /** Object is not a reference to a document (eg `{_ref: 'documentId'}`) */
  'object.not-reference': 'Dokumentumra való hivatkozásnak kell lennie',
  /** Object references a document which is not published */
  'object.reference-not-published': 'A hivatkozott dokumentumnak közzétettnek kell lennie',

  /** Accessibility label for closing the validation panel */
  'panel.close-button-aria-label': 'Validálás bezárása',
  /** Message shown when the validation panel is opened but there are no errors/warnings */
  'panel.no-errors-message': 'Nincsenek validálási hibák',
  /** Title for the actual "Validation" panel/feature */
  'panel.title': 'Validálás',
  /** Message shown when the validation panel is opened but the document is going to unpublish */
  'panel.unpublish-message': undefined, // 'Document is going to unpublish, no validation errors are shown'

  /** Slug is an object, but is missing a `current` string property */
  'slug.missing-current': 'A slug-nak értékkel kell rendelkeznie',
  /** Slug is not an object (eg `{current: 'some-slug'}`) */
  'slug.not-object': 'A slug-nak objektumnak kell lennie',
  /** Slug is already in use somewhere else, but needs to be unique */
  'slug.not-unique': 'A slug már használatban van',

  /** String is not a valid email address */
  'string.email': 'Érvényes e-mail címnek kell lennie',
  /** String has a different character length than the exact number "$wantedLength" */
  'string.exact-length': 'Pontosan {{wantedLength}} karakter hosszúnak kell lennie',
  /** String contains characters that are not in lowercase  */
  'string.lowercase': 'Csak kisbetűket tartalmazhat',
  /** String is longer than the limit of "$maxLength" characters */
  'string.maximum-length': 'Legfeljebb {{maxLength}} karakter hosszú lehet',
  /** String is shorter than the limit of "$minLength" characters */
  'string.minimum-length': 'Legalább {{minLength}} karakter hosszúnak kell lennie',
  /** String does not match the given regular expression, but should */
  'string.regex-does-not-match': 'Nem egyezik a(z) "{{name}}" mintával',
  /** String matches the given regular expression, but should not */
  'string.regex-match': 'Nem egyezhet a(z) "{{name}}" mintával',
  /** String contains characters that are not in uppercase */
  'string.uppercase': 'Csak nagybetűket tartalmazhat',
  /** String contains a protocol/scheme that is not allowed, eg (`ftp`, `mailto`…) */
  'string.url.disallowed-scheme': 'Nem egyezik az engedélyezett protokollokkal/sémákkal',
  /** String contains a URL with a username or password specified before the host */
  'string.url.includes-credentials': 'Felhasználónév/jelszó nem engedélyezett',
  /** String is not a valid URL */
  'string.url.invalid': 'Nem érvényes URL',
  /** String is not an absolute URL (eg it is missing a protocol/host) */
  'string.url.not-absolute': 'Relatív URL-ek nem engedélyezettek',
  /** String is not a relative URL (eg it contains a protocol/host) */
  'string.url.not-relative': 'Csak relatív URL-ek engedélyezettek',
})
