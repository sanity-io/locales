import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Array must have exactly "$wantedLength" items, but has more/less */
  'array.exact-length': '必須正好有 {{wantedLength}} 個項目',
  /** Portable Text array must have exactly "$wantedLength" blocks, but has more/less */
  'array.exact-length_blocks': '必須正好有 {{wantedLength}} 個塊',
  /** Array item is a duplicate, but array wants only unique items */
  'array.item-duplicate': '不能重複',
  /** Array has more than the maximum of "$maxLength" items */
  'array.maximum-length': '最多只能有 {{maxLength}} 個項目',
  /** Portable Text array has more than the maximum of "$maxLength" items */
  'array.maximum-length_blocks': '最多只能有 {{maxLength}} 個塊',
  /** Array has less than the minimum of "$minLength" items */
  'array.minimum-length': '至少要有 {{minLength}} 個項目',
  /** Portable Text array has less than the minimum of "$minLength" blocks */
  'array.minimum-length_blocks': '至少要有 {{minLength}} 個塊',

  /** Date is not valid or not in the correct format (ISO-8601) */
  'date.invalid-format': '必須是有效的 ISO-8601 格式日期字符串',
  /** Date is later than the given maximum date "$maxDate" */
  'date.maximum': '必須在 {{maxDate}} 或之前',
  /** Date is earlier than the given minimum date "$minDate" */
  'date.minimum': '必須在 {{minDate}} 或之後',

  /** A value of incorrect type is found, eg found `number` instead of `string` */
  'generic.incorrect-type': '預期類型為 "{{expectedType}}"，實際為 "{{actualType}}"',
  /** Value is not one of the values specifically allowed */
  'generic.not-allowed': '值未匹配任何允許的值',
  /** Value "$givenValue" is not one of the values specifically allowed */
  'generic.not-allowed_hint': '值 "{{hint}}" 未匹配任何允許的值',
  /** A value is expected, but none is provided */
  'generic.required': '必填',

  /** Number is less than the given minimum threshold value "$threshold" */
  'number.greater-than': '必須大於 {{threshold}}',
  /** Number is greater than the given maximum threshold value "$threshold" */
  'number.less-than': '必須小於 {{threshold}}',
  /** Number is higher than the given maximum value "$maxNumber" */
  'number.maximum': '必須小於或等於 {{maxNumber}}',
  /** Number has more precision (decimals) than the allowed "$limit" */
  'number.maximum-precision': '最大精度為 {{limit}}',
  /** Number is lower than the given minimum value "$minNumber" */
  'number.minimum': '必須大於或等於 {{minNumber}}',
  /** Number is not an integer ("whole number") */
  'number.non-integer': '必須是整數',

  /** Object is missing a reference to an asset document in its `asset` field */
  'object.asset-required': '需要資產',
  /** Object is missing a reference to a file asset document in its `asset` field */
  'object.asset-required_file': '需要文件',
  /** Object is missing a reference to an image asset document in its `asset` field */
  'object.asset-required_image': '需要圖片',
  /** Object is not a reference to a document (eg `{_ref: 'documentId'}`) */
  'object.not-reference': '必須是對文檔的引用',
  /** Object references a document which is not published */
  'object.reference-not-published': '引用的文檔必須已發布',

  /** Accessibility label for closing the validation panel */
  'panel.close-button-aria-label': '關閉驗證',
  /** Message shown when the validation panel is opened but there are no errors/warnings */
  'panel.no-errors-message': '沒有驗證錯誤',
  /** Title for the actual "Validation" panel/feature */
  'panel.title': '驗證',

  /** Slug is an object, but is missing a `current` string property */
  'slug.missing-current': 'Slug 必須有一個值',
  /** Slug is not an object (eg `{current: 'some-slug'}`) */
  'slug.not-object': 'Slug 必須是一個物件',
  /** Slug is already in use somewhere else, but needs to be unique */
  'slug.not-unique': 'Slug 已經被使用',

  /** String is not a valid email address */
  'string.email': '必須是有效的電子郵件地址',
  /** String has a different character length than the exact number "$wantedLength" */
  'string.exact-length': '必須恰好是 {{wantedLength}} 個字符長',
  /** String contains characters that are not in lowercase  */
  'string.lowercase': '必須全部是小寫字符',
  /** String is longer than the limit of "$maxLength" characters */
  'string.maximum-length': '最多只能有 {{maxLength}} 個字符長',
  /** String is shorter than the limit of "$minLength" characters */
  'string.minimum-length': '至少要有 {{minLength}} 個字符長',
  /** String does not match the given regular expression, but should */
  'string.regex-does-not-match': '不符合 "{{name}}"-模式',
  /** String matches the given regular expression, but should not */
  'string.regex-match': '不應符合 "{{name}}"-模式',
  /** String contains characters that are not in uppercase */
  'string.uppercase': '必須全部是大寫字符',
  /** String contains a protocol/scheme that is not allowed, eg (`ftp`, `mailto`…) */
  'string.url.disallowed-scheme': '不符合允許的協議/方案',
  /** String contains a URL with a username or password specified before the host */
  'string.url.includes-credentials': '不允許使用者名稱/密碼',
  /** String is not a valid URL */
  'string.url.invalid': '不是有效的 URL',
  /** String is not an absolute URL (eg it is missing a protocol/host) */
  'string.url.not-absolute': '不允許相對 URL',
  /** String is not a relative URL (eg it contains a protocol/host) */
  'string.url.not-relative': '只允許相對 URL',
})
