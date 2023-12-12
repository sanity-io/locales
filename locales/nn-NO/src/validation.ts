import { removeUndefinedLocaleResources } from "sanity";

export default removeUndefinedLocaleResources({
  /** Array must have exactly "$wantedLength" items, but has more/less */
  "array.exact-length": "Må ha nøyaktig {{wantedLength}} element",
  /** Portable Text array must have exactly "$wantedLength" blocks, but has more/less */
  "array.exact-length_blocks": "Må ha nøyaktig {{wantedLength}} blokker",
  /** Array item is a duplicate, but array wants only unique items */
  "array.item-duplicate": "Kan ikkje vere ein duplikat",
  /** Array has more than the maximum of "$maxLength" items */
  "array.maximum-length": "Må ha på det meste {{maxLength}} element",
  /** Portable Text array has more than the maximum of "$maxLength" items */
  "array.maximum-length_blocks": "Må ha på det meste {{maxLength}} blokker",
  /** Array has less than the minimum of "$minLength" items */
  "array.minimum-length": "Må ha minst {{minLength}} element",
  /** Portable Text array has less than the minimum of "$minLength" blocks */
  "array.minimum-length_blocks": "Må ha minst {{minLength}} blokker",

  /** Date is not valid or not in the correct format (ISO-8601) */
  "date.invalid-format": "Må vere ein gyldig ISO-8601 formatert dato streng",
  /** Date is later than the given maximum date "$maxDate" */
  "date.maximum": "Må vere på eller før {{maxDate}}",
  /** Date is earlier than the given minimum date "$minDate" */
  "date.minimum": "Må vere på eller etter {{minDate}}",

  /** A value of incorrect type is found, eg found `number` instead of `string` */
  "generic.incorrect-type":
    'Forventa type "{{expectedType}}", fekk "{{actualType}}"',
  /** Value is not one of the values specifically allowed */
  "generic.not-allowed": "Verdien samsvarar ikkje med nokon tillatne verdiar",
  /** Value "$givenValue" is not one of the values specifically allowed */
  "generic.not-allowed_hint":
    'Verdien "{{hint}}" samsvarar ikkje med nokon tillatne verdiar',
  /** A value is expected, but none is provided */
  "generic.required": "Påkravd",

  /** Number is less than the given minimum threshold value "$threshold" */
  "number.greater-than": "Må vere større enn {{threshold}}",
  /** Number is greater than the given maximum threshold value "$threshold" */
  "number.less-than": "Må vere mindre enn {{threshold}}",
  /** Number is higher than the given maximum value "$maxNumber" */
  "number.maximum": "Må vere lågare enn eller lik {{maxNumber}}",
  /** Number has more precision (decimals) than the allowed "$limit" */
  "number.maximum-precision": "Maks presisjon er {{limit}}",
  /** Number is lower than the given minimum value "$minNumber" */
  "number.minimum": "Må vere større enn eller lik {{minNumber}}",
  /** Number is not an integer ("whole number") */
  "number.non-integer": "Må vere eit heiltal",

  /** Object is missing a reference to an asset document in its `asset` field */
  "object.asset-required": "Eigedom er påkravd",
  /** Object is missing a reference to a file asset document in its `asset` field */
  "object.asset-required_file": "Fil er påkravd",
  /** Object is missing a reference to an image asset document in its `asset` field */
  "object.asset-required_image": "Bilete er påkravd",
  /** Object is not a reference to a document (eg `{_ref: 'documentId'}`) */
  "object.not-reference": "Må vere ein referanse til eit dokument",
  /** Object references a document which is not published */
  "object.reference-not-published": "Referert dokument må vere publisert",

  /** Accessibility label for closing the validation panel */
  "panel.close-button-aria-label": "Lukk validering",
  /** Message shown when the validation panel is opened but there are no errors/warnings */
  "panel.no-errors-message": "Ingen valideringsfeil",
  /** Title for the actual "Validation" panel/feature */
  "panel.title": "Validering",

  /** Slug is an object, but is missing a `current` string property */
  "slug.missing-current": "Slug må ha ein verdi",
  /** Slug is not an object (eg `{current: 'some-slug'}`) */
  "slug.not-object": "Slug må vere eit objekt",
  /** Slug is already in use somewhere else, but needs to be unique */
  "slug.not-unique": "Slug er allereie i bruk",

  /** String is not a valid email address */
  "string.email": "Må vere ei gyldig e-postadresse",
  /** String has a different character length than the exact number "$wantedLength" */
  "string.exact-length": "Må vere nøyaktig {{wantedLength}} teikn lang",
  /** String contains characters that are not in lowercase  */
  "string.lowercase": "Må vere berre små bokstavar",
  /** String is longer than the limit of "$maxLength" characters */
  "string.maximum-length": "Må vere på det meste {{maxLength}} teikn lang",
  /** String is shorter than the limit of "$minLength" characters */
  "string.minimum-length": "Må vere minst {{minLength}} teikn lang",
  /** String does not match the given regular expression, but should */
  "string.regex-does-not-match": 'Samsvarar ikkje med "{{name}}"-mønsteret',
  /** String matches the given regular expression, but should not */
  "string.regex-match": 'Bør ikkje samsvara med "{{name}}"-mønsteret',
  /** String contains characters that are not in uppercase */
  "string.uppercase": "Må vere berre store bokstavar",
  /** String contains a protocol/scheme that is not allowed, eg (`ftp`, `mailto`…) */
  "string.url.disallowed-scheme":
    "Samsvarar ikkje med tillatne protokollar/skjema",
  /** String contains a URL with a username or password specified before the host */
  "string.url.includes-credentials": "Brukarnamn/passord ikkje tillate",
  /** String is not a valid URL */
  "string.url.invalid": "Ikkje ein gyldig URL",
  /** String is not an absolute URL (eg it is missing a protocol/host) */
  "string.url.not-absolute": "Relative URL-ar er ikkje tillatne",
  /** String is not a relative URL (eg it contains a protocol/host) */
  "string.url.not-relative": "Berre relative URL-ar er tillatne",
});
