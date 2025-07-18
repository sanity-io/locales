import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Array must have exactly "$wantedLength" items, but has more/less */
  'array.exact-length': '必须恰好有 {{wantedLength}} 个项目',
  /** Portable Text array must have exactly "$wantedLength" blocks, but has more/less */
  'array.exact-length_blocks': '必须恰好有 {{wantedLength}} 个区块',
  /** Array item is a duplicate, but array wants only unique items */
  'array.item-duplicate': '不能重复',
  /** Array has more than the maximum of "$maxLength" items */
  'array.maximum-length': '最多只能有 {{maxLength}} 个项目',
  /** Portable Text array has more than the maximum of "$maxLength" items */
  'array.maximum-length_blocks': '最多只能有 {{maxLength}} 个区块',
  /** Array has less than the minimum of "$minLength" items */
  'array.minimum-length': '至少要有 {{minLength}} 个项目',
  /** Portable Text array has less than the minimum of "$minLength" blocks */
  'array.minimum-length_blocks': '至少要有 {{minLength}} 个区块',

  /** Date is not valid or not in the correct format (ISO-8601) */
  'date.invalid-format': '必须是有效的 ISO-8601 格式日期字符串',
  /** Date is later than the given maximum date "$maxDate" */
  'date.maximum': '必须是在 {{maxDate}} 之前或当天',
  /** Date is earlier than the given minimum date "$minDate" */
  'date.minimum': '必须是在 {{minDate}} 之后或当天',

  /** A value of incorrect type is found, eg found `number` instead of `string` */
  'generic.incorrect-type': '预期类型为 "{{expectedType}}"，实际为 "{{actualType}}"',
  /** Value is not one of the values specifically allowed */
  'generic.not-allowed': '值未匹配任何允许的值',
  /** Value "$givenValue" is not one of the values specifically allowed */
  'generic.not-allowed_hint': '值 "{{hint}}" 未匹配任何允许的值',
  /** A value is expected, but none is provided */
  'generic.required': '必填',

  /** Number is less than the given minimum threshold value "$threshold" */
  'number.greater-than': '必须大于 {{threshold}}',
  /** Number is greater than the given maximum threshold value "$threshold" */
  'number.less-than': '必须小于 {{threshold}}',
  /** Number is higher than the given maximum value "$maxNumber" */
  'number.maximum': '必须小于或等于 {{maxNumber}}',
  /** Number has more precision (decimals) than the allowed "$limit" */
  'number.maximum-precision': '最大精度为 {{limit}}',
  /** Number is lower than the given minimum value "$minNumber" */
  'number.minimum': '必须大于或等于 {{minNumber}}',
  /** Number is not an integer ("whole number") */
  'number.non-integer': '必须是整数',

  /** Object is missing a reference to an asset document in its `asset` field */
  'object.asset-required': '需要资产',
  /** Object is missing a reference to a file asset document in its `asset` field */
  'object.asset-required_file': '需要文件',
  /** Object is missing a reference to an image asset document in its `asset` field */
  'object.asset-required_image': '需要图片',
  /** Media can't be found in the Media Library */
  'object.media-not-found': undefined, // 'The asset could not found in the Media Library'
  /** Media object is missing a reference to a document in its `_ref` field */
  'object.not-media-library-asset': undefined, // 'Must be a reference to a Media Library asset'
  /** Object is not a reference to a document (eg `{_ref: 'documentId'}`) */
  'object.not-reference': '必须是文档的引用',
  /** Object references a document which is not published */
  'object.reference-not-published': '引用的文档必须是已发布的',

  /** Accessibility label for closing the validation panel */
  'panel.close-button-aria-label': '关闭验证',
  /** Message shown when the validation panel is opened but there are no errors/warnings */
  'panel.no-errors-message': '没有验证错误',
  /** Title for the actual "Validation" panel/feature */
  'panel.title': '验证',
  /** Message shown when the validation panel is opened but the document is going to unpublish */
  'panel.unpublish-message': undefined, // 'Document is going to unpublish, no validation errors are shown'

  /** Slug is an object, but is missing a `current` string property */
  'slug.missing-current': 'Slug 必须有一个值',
  /** Slug is not an object (eg `{current: 'some-slug'}`) */
  'slug.not-object': 'Slug 必须是一个对象',
  /** Slug is already in use somewhere else, but needs to be unique */
  'slug.not-unique': 'Slug 已经被使用',

  /** String is not a valid email address */
  'string.email': '必须是一个有效的电子邮件地址',
  /** String has a different character length than the exact number "$wantedLength" */
  'string.exact-length': '必须恰好是 {{wantedLength}} 个字符长',
  /** String contains characters that are not in lowercase  */
  'string.lowercase': '必须全部是小写字符',
  /** String is longer than the limit of "$maxLength" characters */
  'string.maximum-length': '最多必须是 {{maxLength}} 个字符长',
  /** String is shorter than the limit of "$minLength" characters */
  'string.minimum-length': '至少必须是 {{minLength}} 个字符长',
  /** String does not match the given regular expression, but should */
  'string.regex-does-not-match': '不符合 "{{name}}"-模式',
  /** String matches the given regular expression, but should not */
  'string.regex-match': '不应符合 "{{name}}"-模式',
  /** String contains characters that are not in uppercase */
  'string.uppercase': '必须全部是大写字符',
  /** String contains a protocol/scheme that is not allowed, eg (`ftp`, `mailto`…) */
  'string.url.disallowed-scheme': '不符合允许的协议/方案',
  /** String contains a URL with a username or password specified before the host */
  'string.url.includes-credentials': '不允许使用用户名/密码',
  /** String is not a valid URL */
  'string.url.invalid': '不是一个有效的 URL',
  /** String is not an absolute URL (eg it is missing a protocol/host) */
  'string.url.not-absolute': '不允许使用相对 URL',
  /** String is not a relative URL (eg it contains a protocol/host) */
  'string.url.not-relative': '只允许使用相对 URL',
})
