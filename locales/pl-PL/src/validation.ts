import { removeUndefinedLocaleResources } from "sanity";

export default removeUndefinedLocaleResources({
  /** Array must have exactly "$wantedLength" items, but has more/less */
  "array.exact-length": "Musi mieć dokładnie {{wantedLength}} elementów",
  /** Portable Text array must have exactly "$wantedLength" blocks, but has more/less */
  "array.exact-length_blocks": "Musi mieć dokładnie {{wantedLength}} bloków",
  /** Array item is a duplicate, but array wants only unique items */
  "array.item-duplicate": "Nie może być duplikatem",
  /** Array has more than the maximum of "$maxLength" items */
  "array.maximum-length": "Musi mieć najwyżej {{maxLength}} elementów",
  /** Portable Text array has more than the maximum of "$maxLength" items */
  "array.maximum-length_blocks": "Musi mieć najwyżej {{maxLength}} bloków",
  /** Array has less than the minimum of "$minLength" items */
  "array.minimum-length": "Musi mieć przynajmniej {{minLength}} elementów",
  /** Portable Text array has less than the minimum of "$minLength" blocks */
  "array.minimum-length_blocks": "Musi mieć przynajmniej {{minLength}} bloków",

  /** Date is not valid or not in the correct format (ISO-8601) */
  "date.invalid-format":
    "Musi być prawidłowym ciągiem znaków daty w formacie ISO-8601",
  /** Date is later than the given maximum date "$maxDate" */
  "date.maximum": "Musi być w dniu lub przed {{maxDate}}",
  /** Date is earlier than the given minimum date "$minDate" */
  "date.minimum": "Musi być w dniu lub po {{minDate}}",

  /** A value of incorrect type is found, eg found `number` instead of `string` */
  "generic.incorrect-type":
    'Oczekiwany typ "{{expectedType}}", otrzymano "{{actualType}}"',
  /** Value is not one of the values specifically allowed */
  "generic.not-allowed": "Wartość nie pasuje do żadnej z dozwolonych wartości",
  /** Value "$givenValue" is not one of the values specifically allowed */
  "generic.not-allowed_hint":
    'Wartość "{{hint}}" nie pasuje do żadnej z dozwolonych wartości',
  /** A value is expected, but none is provided */
  "generic.required": "Wymagane",

  /** Number is less than the given minimum threshold value "$threshold" */
  "number.greater-than": "Musi być większa niż {{threshold}}",
  /** Number is greater than the given maximum threshold value "$threshold" */
  "number.less-than": "Musi być mniejsza niż {{threshold}}",
  /** Number is higher than the given maximum value "$maxNumber" */
  "number.maximum": "Musi być mniejsza lub równa {{maxNumber}}",
  /** Number has more precision (decimals) than the allowed "$limit" */
  "number.maximum-precision": "Maksymalna precyzja to {{limit}}",
  /** Number is lower than the given minimum value "$minNumber" */
  "number.minimum": "Musi być większa lub równa {{minNumber}}",
  /** Number is not an integer ("whole number") */
  "number.non-integer": "Musi być liczbą całkowitą",

  /** Object is missing a reference to an asset document in its `asset` field */
  "object.asset-required": "Asset jest wymagany",
  /** Object is missing a reference to a file asset document in its `asset` field */
  "object.asset-required_file": "Plik jest wymagany",
  /** Object is missing a reference to an image asset document in its `asset` field */
  "object.asset-required_image": "Obraz jest wymagany",
  /** Object is not a reference to a document (eg `{_ref: 'documentId'}`) */
  "object.not-reference": "Musi być odniesieniem do dokumentu",
  /** Object references a document which is not published */
  "object.reference-not-published": "Odniesiony dokument musi być opublikowany",

  /** Accessibility label for closing the validation panel */
  "panel.close-button-aria-label": "Zamknij panel walidacji",
  /** Message shown when the validation panel is opened but there are no errors/warnings */
  "panel.no-errors-message": "Brak błędów walidacji",
  /** Title for the actual "Validation" panel/feature */
  "panel.title": "Walidacja",

  /** Slug is an object, but is missing a `current` string property */
  "slug.missing-current": "Slug musi mieć wartość",
  /** Slug is not an object (eg `{current: 'some-slug'}`) */
  "slug.not-object": "Slug musi być obiektem",
  /** Slug is already in use somewhere else, but needs to be unique */
  "slug.not-unique": "Slug jest już używany",

  /** String is not a valid email address */
  "string.email": "Musi być prawidłowym adresem e-mail",
  /** String has a different character length than the exact number "$wantedLength" */
  "string.exact-length": "Musi mieć dokładnie {{wantedLength}} znaków",
  /** String contains characters that are not in lowercase  */
  "string.lowercase": "Musi składać się wyłącznie z małych liter",
  /** String is longer than the limit of "$maxLength" characters */
  "string.maximum-length": "Musi mieć maksymalnie {{maxLength}} znaków",
  /** String is shorter than the limit of "$minLength" characters */
  "string.minimum-length": "Musi mieć przynajmniej {{minLength}} znaków",
  /** String does not match the given regular expression, but should */
  "string.regex-does-not-match": 'Nie pasuje do wzorca "{{name}}"',
  /** String matches the given regular expression, but should not */
  "string.regex-match": 'Nie powinno pasować do wzorca "{{name}}"',
  /** String contains characters that are not in uppercase */
  "string.uppercase": "Musi składać się wyłącznie z wielkich liter",
  /** String contains a protocol/scheme that is not allowed, eg (`ftp`, `mailto`…) */
  "string.url.disallowed-scheme":
    "Nie pasuje do dozwolonych protokołów/schematów",
  /** String contains a URL with a username or password specified before the host */
  "string.url.includes-credentials": "Nazwa użytkownika/hasło niedozwolone",
  /** String is not a valid URL */
  "string.url.invalid": "Nieprawidłowy URL",
  /** String is not an absolute URL (eg it is missing a protocol/host) */
  "string.url.not-absolute": "Dozwolone są tylko bezwzględne URL",
  /** String is not a relative URL (eg it contains a protocol/host) */
  "string.url.not-relative": "Dozwolone są tylko względne URL",
});
