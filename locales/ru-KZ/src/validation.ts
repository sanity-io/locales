import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Array must have exactly "$wantedLength" items, but has more/less */
  'array.exact-length': 'Должно быть ровно {{wantedLength}} элементов',
  /** Portable Text array must have exactly "$wantedLength" blocks, but has more/less */
  'array.exact-length_blocks': 'Должно быть ровно {{wantedLength}} блоков',
  /** Array item is a duplicate, but array wants only unique items */
  'array.item-duplicate': 'Не может быть дубликатом',
  /** Array has more than the maximum of "$maxLength" items */
  'array.maximum-length': 'Должно быть не более {{maxLength}} элементов',
  /** Portable Text array has more than the maximum of "$maxLength" items */
  'array.maximum-length_blocks': 'Должно быть не более {{maxLength}} блоков',
  /** Array has less than the minimum of "$minLength" items */
  'array.minimum-length': 'Должно быть не менее {{minLength}} элементов',
  /** Portable Text array has less than the minimum of "$minLength" blocks */
  'array.minimum-length_blocks': 'Должно быть не менее {{minLength}} блоков',

  /** Date is not valid or not in the correct format (ISO-8601) */
  'date.invalid-format': 'Должна быть действительная строка даты в формате ISO-8601',
  /** Date is later than the given maximum date "$maxDate" */
  'date.maximum': 'Должна быть до или включая {{maxDate}}',
  /** Date is earlier than the given minimum date "$minDate" */
  'date.minimum': 'Должна быть после или включая {{minDate}}',

  /** A value of incorrect type is found, eg found `number` instead of `string` */
  'generic.incorrect-type': 'Ожидаемый тип "{{expectedType}}", получен "{{actualType}}"',
  /** Value is not one of the values specifically allowed */
  'generic.not-allowed': 'Значение не соответствует разрешенным',
  /** Value "$givenValue" is not one of the values specifically allowed */
  'generic.not-allowed_hint': 'Значение "{{hint}}" не соответствует разрешенным',
  /** A value is expected, but none is provided */
  'generic.required': 'Требуется',

  /** Number is less than the given minimum threshold value "$threshold" */
  'number.greater-than': 'Должно быть больше {{threshold}}',
  /** Number is greater than the given maximum threshold value "$threshold" */
  'number.less-than': 'Должно быть меньше {{threshold}}',
  /** Number is higher than the given maximum value "$maxNumber" */
  'number.maximum': 'Должно быть меньше или равно {{maxNumber}}',
  /** Number has more precision (decimals) than the allowed "$limit" */
  'number.maximum-precision': 'Максимальная точность {{limit}}',
  /** Number is lower than the given minimum value "$minNumber" */
  'number.minimum': 'Должно быть больше или равно {{minNumber}}',
  /** Number is not an integer ("whole number") */
  'number.non-integer': 'Должно быть целым числом',

  /** Object is missing a reference to an asset document in its `asset` field */
  'object.asset-required': 'Требуется ресурс',
  /** Object is missing a reference to a file asset document in its `asset` field */
  'object.asset-required_file': 'Требуется файл',
  /** Object is missing a reference to an image asset document in its `asset` field */
  'object.asset-required_image': 'Требуется изображение',
  /** Object is not a reference to a document (eg `{_ref: 'documentId'}`) */
  'object.not-reference': 'Должно быть ссылкой на документ',
  /** Object references a document which is not published */
  'object.reference-not-published': 'Ссылка на документ должна быть опубликована',

  /** Accessibility label for closing the validation panel */
  'panel.close-button-aria-label': 'Закрыть валидацию',
  /** Message shown when the validation panel is opened but there are no errors/warnings */
  'panel.no-errors-message': 'Нет ошибок валидации',
  /** Title for the actual "Validation" panel/feature */
  'panel.title': 'Валидация',

  /** Slug is an object, but is missing a `current` string property */
  'slug.missing-current': 'Slug должен иметь значение',
  /** Slug is not an object (eg `{current: 'some-slug'}`) */
  'slug.not-object': 'Slug должен быть объектом',
  /** Slug is already in use somewhere else, but needs to be unique */
  'slug.not-unique': 'Slug уже используется',

  /** String is not a valid email address */
  'string.email': 'Должен быть действительным адресом электронной почты',
  /** String has a different character length than the exact number "$wantedLength" */
  'string.exact-length': 'Должен быть ровно {{wantedLength}} символов в длину',
  /** String contains characters that are not in lowercase  */
  'string.lowercase': 'Должен состоять только из строчных букв',
  /** String is longer than the limit of "$maxLength" characters */
  'string.maximum-length': 'Должен быть не более {{maxLength}} символов в длину',
  /** String is shorter than the limit of "$minLength" characters */
  'string.minimum-length': 'Должен быть не менее {{minLength}} символов в длину',
  /** String does not match the given regular expression, but should */
  'string.regex-does-not-match': 'Не соответствует шаблону "{{name}}"',
  /** String matches the given regular expression, but should not */
  'string.regex-match': 'Не должен соответствовать шаблону "{{name}}"',
  /** String contains characters that are not in uppercase */
  'string.uppercase': 'Должен состоять только из заглавных букв',
  /** String contains a protocol/scheme that is not allowed, eg (`ftp`, `mailto`…) */
  'string.url.disallowed-scheme': 'Не соответствует разрешенным протоколам/схемам',
  /** String contains a URL with a username or password specified before the host */
  'string.url.includes-credentials': 'Имя пользователя/пароль не допускаются',
  /** String is not a valid URL */
  'string.url.invalid': 'Недействительный URL',
  /** String is not an absolute URL (eg it is missing a protocol/host) */
  'string.url.not-absolute': 'Относительные URL не допускаются',
  /** String is not a relative URL (eg it contains a protocol/host) */
  'string.url.not-relative': 'Допускаются только относительные URL',
})
