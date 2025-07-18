import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Array must have exactly "$wantedLength" items, but has more/less */
  'array.exact-length': 'უნდა იყოს ზუსტად {{wantedLength}} ელემენტი',
  /** Portable Text array must have exactly "$wantedLength" blocks, but has more/less */
  'array.exact-length_blocks': 'უნდა იყოს ზუსტად {{wantedLength}} ბლოკი',
  /** Array item is a duplicate, but array wants only unique items */
  'array.item-duplicate': 'არ უნდა იყოს დუბლიკატი',
  /** Array has more than the maximum of "$maxLength" items */
  'array.maximum-length': 'უნდა იყოს მაქსიმუმ {{maxLength}} ელემენტი',
  /** Portable Text array has more than the maximum of "$maxLength" items */
  'array.maximum-length_blocks': 'უნდა იყოს მაქსიმუმ {{maxLength}} ბლოკი',
  /** Array has less than the minimum of "$minLength" items */
  'array.minimum-length': 'უნდა იყოს მინიმუმ {{minLength}} ელემენტი',
  /** Portable Text array has less than the minimum of "$minLength" blocks */
  'array.minimum-length_blocks': 'უნდა იყოს მინიმუმ {{minLength}} ბლოკი',

  /** Date is not valid or not in the correct format (ISO-8601) */
  'date.invalid-format': 'უნდა იყოს ვალიდური ISO-8601 ფორმატის თარიღის სტრიქონი',
  /** Date is later than the given maximum date "$maxDate" */
  'date.maximum': 'უნდა იყოს ან მანამდე {{maxDate}}',
  /** Date is earlier than the given minimum date "$minDate" */
  'date.minimum': 'უნდა იყოს ან მერე {{minDate}}',

  /** A value of incorrect type is found, eg found `number` instead of `string` */
  'generic.incorrect-type': 'მოსალოდნელი ტიპია "{{expectedType}}", მიღებულია "{{actualType}}"',
  /** Value is not one of the values specifically allowed */
  'generic.not-allowed': 'მნიშვნელობა არ ემთხვევა ნებადართულ მნიშვნელობებს',
  /** Value "$givenValue" is not one of the values specifically allowed */
  'generic.not-allowed_hint': 'მნიშვნელობა "{{hint}}" არ ემთხვევა ნებადართულ მნიშვნელობებს',
  /** A value is expected, but none is provided */
  'generic.required': 'საჭიროა',

  /** Number is less than the given minimum threshold value "$threshold" */
  'number.greater-than': 'უნდა იყოს მეტი {{threshold}}-ზე',
  /** Number is greater than the given maximum threshold value "$threshold" */
  'number.less-than': 'უნდა იყოს ნაკლები {{threshold}}-ზე',
  /** Number is higher than the given maximum value "$maxNumber" */
  'number.maximum': 'უნდა იყოს ნაკლები ან ტოლი {{maxNumber}}-ს',
  /** Number has more precision (decimals) than the allowed "$limit" */
  'number.maximum-precision': 'მაქსიმუმ სიზუსტეა {{limit}}',
  /** Number is lower than the given minimum value "$minNumber" */
  'number.minimum': 'უნდა იყოს მეტი ან ტოლი {{minNumber}}-ს',
  /** Number is not an integer ("whole number") */
  'number.non-integer': 'უნდა იყოს მთელი რიცხვი',

  /** Object is missing a reference to an asset document in its `asset` field */
  'object.asset-required': 'აქტივი საჭიროა',
  /** Object is missing a reference to a file asset document in its `asset` field */
  'object.asset-required_file': 'ფაილი საჭიროა',
  /** Object is missing a reference to an image asset document in its `asset` field */
  'object.asset-required_image': 'სურათი საჭიროა',
  /** Media can't be found in the Media Library */
  'object.media-not-found': undefined, // 'The asset could not found in the Media Library'
  /** Media object is missing a reference to a document in its `_ref` field */
  'object.not-media-library-asset': undefined, // 'Must be a reference to a Media Library asset'
  /** Object is not a reference to a document (eg `{_ref: 'documentId'}`) */
  'object.not-reference': 'უნდა იყოს დოკუმენტის მითითება',
  /** Object references a document which is not published */
  'object.reference-not-published': 'მითითებული დოკუმენტი უნდა იყოს გამოქვეყნებული',

  /** Accessibility label for closing the validation panel */
  'panel.close-button-aria-label': 'ვალიდაციის პანელის დახურვა',
  /** Message shown when the validation panel is opened but there are no errors/warnings */
  'panel.no-errors-message': 'ვალიდაციის შეცდომები არ არის',
  /** Title for the actual "Validation" panel/feature */
  'panel.title': 'ვალიდაცია',
  /** Message shown when the validation panel is opened but the document is going to unpublish */
  'panel.unpublish-message': undefined, // 'Document is going to unpublish, no validation errors are shown'

  /** Slug is an object, but is missing a `current` string property */
  'slug.missing-current': 'Slug-ის უნდა ჰქონდეს მნიშვნელობა',
  /** Slug is not an object (eg `{current: 'some-slug'}`) */
  'slug.not-object': 'Slug-ის უნდა იყოს ობიექტი',
  /** Slug is already in use somewhere else, but needs to be unique */
  'slug.not-unique': 'Slug უკვე გამოიყენება',

  /** String is not a valid email address */
  'string.email': 'უნდა იყოს ვალიდური ელ-ფოსტის მისამართი',
  /** String has a different character length than the exact number "$wantedLength" */
  'string.exact-length': 'უნდა იყოს ზუსტად {{wantedLength}} სიმბოლოს სიგრძე',
  /** String contains characters that are not in lowercase  */
  'string.lowercase': 'უნდა იყოს ყველა პატარა ასო',
  /** String is longer than the limit of "$maxLength" characters */
  'string.maximum-length': 'უნდა იყოს მაქსიმუმ {{maxLength}} სიმბოლოს სიგრძე',
  /** String is shorter than the limit of "$minLength" characters */
  'string.minimum-length': 'უნდა იყოს მინიმუმ {{minLength}} სიმბოლოს სიგრძე',
  /** String does not match the given regular expression, but should */
  'string.regex-does-not-match': 'არ ემთხვევა "{{name}}"-შაბლონს',
  /** String matches the given regular expression, but should not */
  'string.regex-match': 'არ უნდა ემთხვევა "{{name}}"-შაბლონს',
  /** String contains characters that are not in uppercase */
  'string.uppercase': 'უნდა იყოს ყველა დიდი ასო',
  /** String contains a protocol/scheme that is not allowed, eg (`ftp`, `mailto`…) */
  'string.url.disallowed-scheme': 'არ ემთხვევა დასაშვებ პროტოკოლებს/სქემებს',
  /** String contains a URL with a username or password specified before the host */
  'string.url.includes-credentials': 'მომხმარებლის სახელი/პაროლი არ არის დასაშვები',
  /** String is not a valid URL */
  'string.url.invalid': 'არ არის ვალიდური URL',
  /** String is not an absolute URL (eg it is missing a protocol/host) */
  'string.url.not-absolute': 'მხრივ მისამართები არ არის დასაშვები',
  /** String is not a relative URL (eg it contains a protocol/host) */
  'string.url.not-relative': 'მხოლოდ მხრივ მისამართები არის დასაშვები',
})
