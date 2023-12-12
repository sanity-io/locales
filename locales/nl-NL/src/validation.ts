import { removeUndefinedLocaleResources } from "sanity";

export default removeUndefinedLocaleResources({
  /** Array must have exactly "$wantedLength" items, but has more/less */
  "array.exact-length": "Moet precies {{wantedLength}} items bevatten",
  /** Portable Text array must have exactly "$wantedLength" blocks, but has more/less */
  "array.exact-length_blocks": "Moet precies {{wantedLength}} blokken bevatten",
  /** Array item is a duplicate, but array wants only unique items */
  "array.item-duplicate": "Mag geen duplicaat zijn",
  /** Array has more than the maximum of "$maxLength" items */
  "array.maximum-length": "Moet maximaal {{maxLength}} items bevatten",
  /** Portable Text array has more than the maximum of "$maxLength" items */
  "array.maximum-length_blocks": "Moet maximaal {{maxLength}} blokken bevatten",
  /** Array has less than the minimum of "$minLength" items */
  "array.minimum-length": "Moet minimaal {{minLength}} items bevatten",
  /** Portable Text array has less than the minimum of "$minLength" blocks */
  "array.minimum-length_blocks": "Moet minimaal {{minLength}} blokken bevatten",

  /** Date is not valid or not in the correct format (ISO-8601) */
  "date.invalid-format":
    "Moet een geldige ISO-8601 geformatteerde datumstring zijn",
  /** Date is later than the given maximum date "$maxDate" */
  "date.maximum": "Moet op of voor {{maxDate}} zijn",
  /** Date is earlier than the given minimum date "$minDate" */
  "date.minimum": "Moet op of na {{minDate}} zijn",

  /** A value of incorrect type is found, eg found `number` instead of `string` */
  "generic.incorrect-type":
    'Verwacht type "{{expectedType}}", maar kreeg "{{actualType}}"',
  /** Value is not one of the values specifically allowed */
  "generic.not-allowed": "Waarde komt niet overeen met toegestane waarden",
  /** Value "$givenValue" is not one of the values specifically allowed */
  "generic.not-allowed_hint":
    'Waarde "{{hint}}" komt niet overeen met toegestane waarden',
  /** A value is expected, but none is provided */
  "generic.required": "Vereist",

  /** Number is less than the given minimum threshold value "$threshold" */
  "number.greater-than": "Moet groter zijn dan {{threshold}}",
  /** Number is greater than the given maximum threshold value "$threshold" */
  "number.less-than": "Moet minder zijn dan {{threshold}}",
  /** Number is higher than the given maximum value "$maxNumber" */
  "number.maximum": "Moet lager zijn dan of gelijk aan {{maxNumber}}",
  /** Number has more precision (decimals) than the allowed "$limit" */
  "number.maximum-precision": "Maximale precisie is {{limit}}",
  /** Number is lower than the given minimum value "$minNumber" */
  "number.minimum": "Moet groter zijn dan of gelijk aan {{minNumber}}",
  /** Number is not an integer ("whole number") */
  "number.non-integer": "Moet een geheel getal zijn",

  /** Object is missing a reference to an asset document in its `asset` field */
  "object.asset-required": "Asset is vereist",
  /** Object is missing a reference to a file asset document in its `asset` field */
  "object.asset-required_file": "Bestand is vereist",
  /** Object is missing a reference to an image asset document in its `asset` field */
  "object.asset-required_image": "Afbeelding is vereist",
  /** Object is not a reference to a document (eg `{_ref: 'documentId'}`) */
  "object.not-reference": "Moet een verwijzing naar een document zijn",
  /** Object references a document which is not published */
  "object.reference-not-published": "Verwezen document moet gepubliceerd zijn",

  /** Accessibility label for closing the validation panel */
  "panel.close-button-aria-label": "Validatie sluiten",
  /** Message shown when the validation panel is opened but there are no errors/warnings */
  "panel.no-errors-message": "Geen validatiefouten",
  /** Title for the actual "Validation" panel/feature */
  "panel.title": "Validatie",

  /** Slug is an object, but is missing a `current` string property */
  "slug.missing-current": "Slug moet een waarde hebben",
  /** Slug is not an object (eg `{current: 'some-slug'}`) */
  "slug.not-object": "Slug moet een object zijn",
  /** Slug is already in use somewhere else, but needs to be unique */
  "slug.not-unique": "Slug is al in gebruik",

  /** String is not a valid email address */
  "string.email": "Moet een geldig e-mailadres zijn",
  /** String has a different character length than the exact number "$wantedLength" */
  "string.exact-length": "Moet precies {{wantedLength}} tekens lang zijn",
  /** String contains characters that are not in lowercase  */
  "string.lowercase": "Moet volledig uit kleine letters bestaan",
  /** String is longer than the limit of "$maxLength" characters */
  "string.maximum-length": "Mag maximaal {{maxLength}} tekens lang zijn",
  /** String is shorter than the limit of "$minLength" characters */
  "string.minimum-length": "Moet minimaal {{minLength}} tekens lang zijn",
  /** String does not match the given regular expression, but should */
  "string.regex-does-not-match": 'Komt niet overeen met "{{name}}"-patroon',
  /** String matches the given regular expression, but should not */
  "string.regex-match": 'Mag niet overeenkomen met "{{name}}"-patroon',
  /** String contains characters that are not in uppercase */
  "string.uppercase": "Moet volledig uit hoofdletters bestaan",
  /** String contains a protocol/scheme that is not allowed, eg (`ftp`, `mailto`…) */
  "string.url.disallowed-scheme":
    "Komt niet overeen met toegestane protocollen/schema's",
  /** String contains a URL with a username or password specified before the host */
  "string.url.includes-credentials":
    "Gebruikersnaam/wachtwoord niet toegestaan",
  /** String is not a valid URL */
  "string.url.invalid": "Geen geldige URL",
  /** String is not an absolute URL (eg it is missing a protocol/host) */
  "string.url.not-absolute": "Relatieve URL's zijn niet toegestaan",
  /** String is not a relative URL (eg it contains a protocol/host) */
  "string.url.not-relative": "Alleen relatieve URL's zijn toegestaan",
});
