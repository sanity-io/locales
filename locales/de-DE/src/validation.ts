import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Array must have exactly "$wantedLength" items, but has more/less */
  'array.exact-length': 'Muss genau {{wantedLength}} Elemente haben',
  /** Portable Text array must have exactly "$wantedLength" blocks, but has more/less */
  'array.exact-length_blocks': 'Muss genau {{wantedLength}} Blöcke haben',
  /** Array item is a duplicate, but array wants only unique items */
  'array.item-duplicate': 'Darf kein Duplikat sein',
  /** Array has more than the maximum of "$maxLength" items */
  'array.maximum-length': 'Darf höchstens {{maxLength}} Elemente haben',
  /** Portable Text array has more than the maximum of "$maxLength" items */
  'array.maximum-length_blocks': 'Darf höchstens {{maxLength}} Blöcke haben',
  /** Array has less than the minimum of "$minLength" items */
  'array.minimum-length': 'Muss mindestens {{minLength}} Elemente haben',
  /** Portable Text array has less than the minimum of "$minLength" blocks */
  'array.minimum-length_blocks': 'Muss mindestens {{minLength}} Blöcke haben',

  /** Date is not valid or not in the correct format (ISO-8601) */
  'date.invalid-format': 'Muss ein gültiges ISO-8601 formatiertes Datum sein',
  /** Date is later than the given maximum date "$maxDate" */
  'date.maximum': 'Muss am oder vor dem {{maxDate}} sein',
  /** Date is earlier than the given minimum date "$minDate" */
  'date.minimum': 'Muss am oder nach dem {{minDate}} sein',

  /** A value of incorrect type is found, eg found `number` instead of `string` */
  'generic.incorrect-type': 'Erwarteter Typ "{{expectedType}}", erhalten "{{actualType}}"',
  /** Value is not one of the values specifically allowed */
  'generic.not-allowed': 'Wert entspricht nicht den erlaubten Werten',
  /** Value "$givenValue" is not one of the values specifically allowed */
  'generic.not-allowed_hint': 'Wert "{{hint}}" entspricht nicht den erlaubten Werten',
  /** A value is expected, but none is provided */
  'generic.required': 'Erforderlich',

  /** Number is less than the given minimum threshold value "$threshold" */
  'number.greater-than': 'Muss größer als {{threshold}} sein',
  /** Number is greater than the given maximum threshold value "$threshold" */
  'number.less-than': 'Muss kleiner als {{threshold}} sein',
  /** Number is higher than the given maximum value "$maxNumber" */
  'number.maximum': 'Muss kleiner oder gleich {{maxNumber}} sein',
  /** Number has more precision (decimals) than the allowed "$limit" */
  'number.maximum-precision': 'Maximale Genauigkeit ist {{limit}}',
  /** Number is lower than the given minimum value "$minNumber" */
  'number.minimum': 'Muss größer oder gleich {{minNumber}} sein',
  /** Number is not an integer ("whole number") */
  'number.non-integer': 'Muss eine ganze Zahl sein',

  /** Object is missing a reference to an asset document in its `asset` field */
  'object.asset-required': 'Asset ist erforderlich',
  /** Object is missing a reference to a file asset document in its `asset` field */
  'object.asset-required_file': 'Datei ist erforderlich',
  /** Object is missing a reference to an image asset document in its `asset` field */
  'object.asset-required_image': 'Bild ist erforderlich',
  /** Object is not a reference to a document (eg `{_ref: 'documentId'}`) */
  'object.not-reference': 'Muss eine Referenz auf ein Dokument sein',
  /** Object references a document which is not published */
  'object.reference-not-published': 'Referenziertes Dokument muss veröffentlicht sein',

  /** Accessibility label for closing the validation panel */
  'panel.close-button-aria-label': 'Validierung schließen',
  /** Message shown when the validation panel is opened but there are no errors/warnings */
  'panel.no-errors-message': 'Keine Validierungsfehler',
  /** Title for the actual "Validation" panel/feature */
  'panel.title': 'Validierung',

  /** Slug is an object, but is missing a `current` string property */
  'slug.missing-current': 'Slug muss einen Wert haben',
  /** Slug is not an object (eg `{current: 'some-slug'}`) */
  'slug.not-object': 'Slug muss ein Objekt sein',
  /** Slug is already in use somewhere else, but needs to be unique */
  'slug.not-unique': 'Slug wird bereits verwendet',

  /** String is not a valid email address */
  'string.email': 'Muss eine gültige E-Mail-Adresse sein',
  /** String has a different character length than the exact number "$wantedLength" */
  'string.exact-length': 'Muss genau {{wantedLength}} Zeichen lang sein',
  /** String contains characters that are not in lowercase  */
  'string.lowercase': 'Muss komplett aus Kleinbuchstaben bestehen',
  /** String is longer than the limit of "$maxLength" characters */
  'string.maximum-length': 'Darf höchstens {{maxLength}} Zeichen lang sein',
  /** String is shorter than the limit of "$minLength" characters */
  'string.minimum-length': 'Muss mindestens {{minLength}} Zeichen lang sein',
  /** String does not match the given regular expression, but should */
  'string.regex-does-not-match': 'Entspricht nicht dem "{{name}}"-Muster',
  /** String matches the given regular expression, but should not */
  'string.regex-match': 'Sollte nicht dem "{{name}}"-Muster entsprechen',
  /** String contains characters that are not in uppercase */
  'string.uppercase': 'Muss komplett aus Großbuchstaben bestehen',
  /** String contains a protocol/scheme that is not allowed, eg (`ftp`, `mailto`…) */
  'string.url.disallowed-scheme': 'Entspricht nicht den erlaubten Protokollen/Schemata',
  /** String contains a URL with a username or password specified before the host */
  'string.url.includes-credentials': 'Benutzername/Passwort nicht erlaubt',
  /** String is not a valid URL */
  'string.url.invalid': 'Keine gültige URL',
  /** String is not an absolute URL (eg it is missing a protocol/host) */
  'string.url.not-absolute': 'Relative URLs sind nicht erlaubt',
  /** String is not a relative URL (eg it contains a protocol/host) */
  'string.url.not-relative': 'Nur relative URLs sind erlaubt',
})
