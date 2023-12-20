import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Array must have exactly "$wantedLength" items, but has more/less */
  'array.exact-length': 'Павінна мець дакладна {{wantedLength}} элементаў',
  /** Portable Text array must have exactly "$wantedLength" blocks, but has more/less */
  'array.exact-length_blocks': 'Павінна мець дакладна {{wantedLength}} блокаў',
  /** Array item is a duplicate, but array wants only unique items */
  'array.item-duplicate': 'Не можа быць дублікатам',
  /** Array has more than the maximum of "$maxLength" items */
  'array.maximum-length': 'Павінна мець не больш за {{maxLength}} элементаў',
  /** Portable Text array has more than the maximum of "$maxLength" items */
  'array.maximum-length_blocks': 'Павінна мець не больш за {{maxLength}} блокаў',
  /** Array has less than the minimum of "$minLength" items */
  'array.minimum-length': 'Павінна мець прынамсі {{minLength}} элементаў',
  /** Portable Text array has less than the minimum of "$minLength" blocks */
  'array.minimum-length_blocks': 'Павінна мець прынамсі {{minLength}} блокаў',

  /** Date is not valid or not in the correct format (ISO-8601) */
  'date.invalid-format': 'Павінна быць сапраўдным радком даты ў фармаце ISO-8601',
  /** Date is later than the given maximum date "$maxDate" */
  'date.maximum': 'Павінна быць да або перад {{maxDate}}',
  /** Date is earlier than the given minimum date "$minDate" */
  'date.minimum': 'Павінна быць пасля або роўна {{minDate}}',

  /** A value of incorrect type is found, eg found `number` instead of `string` */
  'generic.incorrect-type': 'Чакаецца тып "{{expectedType}}", атрыманы "{{actualType}}"',
  /** Value is not one of the values specifically allowed */
  'generic.not-allowed': 'Значэнне не адпавядае ніводнаму дазволенаму значэнню',
  /** Value "$givenValue" is not one of the values specifically allowed */
  'generic.not-allowed_hint': 'Значэнне "{{hint}}" не адпавядае ніводнаму дазволенаму значэнню',
  /** A value is expected, but none is provided */
  'generic.required': 'Патрабуецца',

  /** Number is less than the given minimum threshold value "$threshold" */
  'number.greater-than': 'Павінна быць больш за {{threshold}}',
  /** Number is greater than the given maximum threshold value "$threshold" */
  'number.less-than': 'Павінна быць менш за {{threshold}}',
  /** Number is higher than the given maximum value "$maxNumber" */
  'number.maximum': 'Павінна быць менш або роўна {{maxNumber}}',
  /** Number has more precision (decimals) than the allowed "$limit" */
  'number.maximum-precision': 'Максімальная дакладнасць складае {{limit}}',
  /** Number is lower than the given minimum value "$minNumber" */
  'number.minimum': 'Павінна быць больш або роўна {{minNumber}}',
  /** Number is not an integer ("whole number") */
  'number.non-integer': 'Павінна быць цэлым лікам',

  /** Object is missing a reference to an asset document in its `asset` field */
  'object.asset-required': 'Патрабуецца актыў',
  /** Object is missing a reference to a file asset document in its `asset` field */
  'object.asset-required_file': 'Патрабуецца файл',
  /** Object is missing a reference to an image asset document in its `asset` field */
  'object.asset-required_image': 'Патрабуецца малюнак',
  /** Object is not a reference to a document (eg `{_ref: 'documentId'}`) */
  'object.not-reference': 'Павінна быць спасылкай на дакумент',
  /** Object references a document which is not published */
  'object.reference-not-published': 'Спасылаемы дакумент павінен быць апублікаваны',

  /** Accessibility label for closing the validation panel */
  'panel.close-button-aria-label': 'Зачыніць праверку',
  /** Message shown when the validation panel is opened but there are no errors/warnings */
  'panel.no-errors-message': 'Няма памылак праверкі',
  /** Title for the actual "Validation" panel/feature */
  'panel.title': 'Праверка',

  /** Slug is an object, but is missing a `current` string property */
  'slug.missing-current': 'Slug павінен мець значэнне',
  /** Slug is not an object (eg `{current: 'some-slug'}`) */
  'slug.not-object': "Slug павінен быць аб'ектам",
  /** Slug is already in use somewhere else, but needs to be unique */
  'slug.not-unique': 'Slug ужо выкарыстоўваецца',

  /** String is not a valid email address */
  'string.email': 'Павінен быць сапраўдны адрас электроннай пошты',
  /** String has a different character length than the exact number "$wantedLength" */
  'string.exact-length': 'Павінен быць роўна {{wantedLength}} сімвалаў у даўжыню',
  /** String contains characters that are not in lowercase  */
  'string.lowercase': 'Павінен складацца толькі з малых літар',
  /** String is longer than the limit of "$maxLength" characters */
  'string.maximum-length': 'Павінен быць не больш за {{maxLength}} сімвалаў у даўжыню',
  /** String is shorter than the limit of "$minLength" characters */
  'string.minimum-length': 'Павінен быць не менш за {{minLength}} сімвалаў у даўжыню',
  /** String does not match the given regular expression, but should */
  'string.regex-does-not-match': 'Не адпавядае ўзору "{{name}}"',
  /** String matches the given regular expression, but should not */
  'string.regex-match': 'Не павінен адпавядаць ўзору "{{name}}"',
  /** String contains characters that are not in uppercase */
  'string.uppercase': 'Павінен складацца толькі з вялікіх літар',
  /** String contains a protocol/scheme that is not allowed, eg (`ftp`, `mailto`…) */
  'string.url.disallowed-scheme': 'Не адпавядае дазволеным пратаколам/схемам',
  /** String contains a URL with a username or password specified before the host */
  'string.url.includes-credentials': 'Імя карыстальніка/пароль не дазваляюцца',
  /** String is not a valid URL */
  'string.url.invalid': 'Несапраўдны URL',
  /** String is not an absolute URL (eg it is missing a protocol/host) */
  'string.url.not-absolute': 'Адносныя URL-адрасы не дазваляюцца',
  /** String is not a relative URL (eg it contains a protocol/host) */
  'string.url.not-relative': 'Дазваляюцца толькі адносныя URL-адрасы',
})
