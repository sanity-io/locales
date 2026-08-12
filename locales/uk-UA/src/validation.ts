import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Array must have exactly "$wantedLength" items, but has more/less */
  'array.exact-length': 'Має містити рівно {{wantedLength}} елементів',
  /** Portable Text array must have exactly "$wantedLength" blocks, but has more/less */
  'array.exact-length_blocks': 'Має містити рівно {{wantedLength}} блоків',
  /** Array item is a duplicate, but array wants only unique items */
  'array.item-duplicate': 'Не може бути дублікатом',
  /** Array has more than the maximum of "$maxLength" items */
  'array.maximum-length': 'Має містити не більше ніж {{maxLength}} елементів',
  /** Portable Text array has more than the maximum of "$maxLength" items */
  'array.maximum-length_blocks': 'Має містити не більше ніж {{maxLength}} блоків',
  /** Array has less than the minimum of "$minLength" items */
  'array.minimum-length': 'Має містити не менше ніж {{minLength}} елементів',
  /** Portable Text array has less than the minimum of "$minLength" blocks */
  'array.minimum-length_blocks': 'Має містити не менше ніж {{minLength}} блоків',

  /** Date is not valid or not in the correct format (ISO-8601) */
  'date.invalid-format': 'Має бути дійсною датою у форматі ISO-8601',
  /** Date is later than the given maximum date "$maxDate" */
  'date.maximum': 'Має бути до або на {{maxDate}}',
  /** Date is earlier than the given minimum date "$minDate" */
  'date.minimum': 'Має бути після або на {{minDate}}',

  /** A value of incorrect type is found, eg found `number` instead of `string` */
  'generic.incorrect-type': 'Очікуваний тип "{{expectedType}}", отримано "{{actualType}}"',
  /** Value is not one of the values specifically allowed */
  'generic.not-allowed': 'Значення не відповідає жодному дозволеному',
  /** Value "$givenValue" is not one of the values specifically allowed */
  'generic.not-allowed_hint': 'Значення "{{hint}}" не відповідає жодному дозволеному',
  /** A value is expected, but none is provided */
  'generic.required': "Обов'язково",

  /** Number is less than the given minimum threshold value "$threshold" */
  'number.greater-than': 'Має бути більше ніж {{threshold}}',
  /** Number is greater than the given maximum threshold value "$threshold" */
  'number.less-than': 'Має бути менше ніж {{threshold}}',
  /** Number is higher than the given maximum value "$maxNumber" */
  'number.maximum': 'Має бути менше або дорівнювати {{maxNumber}}',
  /** Number has more precision (decimals) than the allowed "$limit" */
  'number.maximum-precision': 'Максимальна точність {{limit}}',
  /** Number is lower than the given minimum value "$minNumber" */
  'number.minimum': 'Має бути більше або дорівнювати {{minNumber}}',
  /** Number is not an integer ("whole number") */
  'number.non-integer': 'Має бути цілим числом',

  /** Object is missing a reference to an asset document in its `asset` field */
  'object.asset-required': "Актив обов'язковий",
  /** Object is missing a reference to a file asset document in its `asset` field */
  'object.asset-required_file': "Файл обов'язковий",
  /** Object is missing a reference to an image asset document in its `asset` field */
  'object.asset-required_image': "Зображення обов'язкове",
  /** Media can't be found in the Media Library */
  'object.media-not-found': 'Актив не можна знайти в Медіатеці',
  /** Media object is missing a reference to a document in its `_ref` field */
  'object.not-media-library-asset': 'Має бути посилання на актив Медіатеки',
  /** Object is not a reference to a document (eg `{_ref: 'documentId'}`) */
  'object.not-reference': 'Має бути посиланням на документ',
  /** Object references a document which is not published */
  'object.reference-not-published': 'Посиланий документ має бути опублікованим',

  /** Accessibility label for closing the validation panel */
  'panel.close-button-aria-label': 'Закрити валідацію',
  /** Message shown when the validation panel is opened but there are no errors/warnings */
  'panel.no-errors-message': 'Немає помилок валідації',
  /** Title for the actual "Validation" panel/feature */
  'panel.title': 'Валідація',
  /** Message shown when the validation panel is opened but the document is going to unpublish */
  'panel.unpublish-message':
    'Документ буде знято з публікації, помилки валідації не відображаються',

  /** Slug is an object, but is missing a `current` string property */
  'slug.missing-current': 'Slug повинен мати значення',
  /** Slug is not an object (eg `{current: 'some-slug'}`) */
  'slug.not-object': "Slug повинен бути об'єктом",
  /** Slug is already in use somewhere else, but needs to be unique */
  'slug.not-unique': 'Slug вже використовується',

  /** String is not a valid email address */
  'string.email': 'Повинен бути дійсною електронною адресою',
  /** String has a different character length than the exact number "$wantedLength" */
  'string.exact-length': 'Повинен бути рівно {{wantedLength}} символів у довжину',
  /** String contains characters that are not in lowercase  */
  'string.lowercase': 'Повинен складатися тільки з маленьких літер',
  /** String is longer than the limit of "$maxLength" characters */
  'string.maximum-length': 'Повинен бути не довшим за {{maxLength}} символів',
  /** String is shorter than the limit of "$minLength" characters */
  'string.minimum-length': 'Повинен бути не коротшим за {{minLength}} символів',
  /** String does not match the given regular expression, but should */
  'string.regex-does-not-match': 'Не відповідає шаблону "{{name}}"',
  /** String matches the given regular expression, but should not */
  'string.regex-match': 'Не повинен відповідати шаблону "{{name}}"',
  /** String contains characters that are not in uppercase */
  'string.uppercase': 'Повинен складатися тільки з великих літер',
  /** String contains a protocol/scheme that is not allowed, eg (`ftp`, `mailto`…) */
  'string.url.disallowed-scheme': 'Не відповідає дозволеним протоколам/схемам',
  /** String contains a URL with a username or password specified before the host */
  'string.url.includes-credentials': "Ім'я користувача/пароль не дозволені",
  /** String is not a valid URL */
  'string.url.invalid': 'Не дійсний URL',
  /** String is not an absolute URL (eg it is missing a protocol/host) */
  'string.url.not-absolute': 'Відносні URL не дозволені',
  /** String is not a relative URL (eg it contains a protocol/host) */
  'string.url.not-relative': 'Дозволені тільки відносні URL',
})
