import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Array must have exactly "$wantedLength" items, but has more/less */
  'array.exact-length': '정확히 {{wantedLength}}개의 항목이 있어야 함',
  /** Portable Text array must have exactly "$wantedLength" blocks, but has more/less */
  'array.exact-length_blocks': '정확히 {{wantedLength}}개의 블록이 있어야 함',
  /** Array item is a duplicate, but array wants only unique items */
  'array.item-duplicate': '중복될 수 없음',
  /** Array has more than the maximum of "$maxLength" items */
  'array.maximum-length': '최대 {{maxLength}}개의 항목을 가질 수 있음',
  /** Portable Text array has more than the maximum of "$maxLength" items */
  'array.maximum-length_blocks': '최대 {{maxLength}}개의 블록을 가질 수 있음',
  /** Array has less than the minimum of "$minLength" items */
  'array.minimum-length': '최소 {{minLength}}개의 항목이 있어야 함',
  /** Portable Text array has less than the minimum of "$minLength" blocks */
  'array.minimum-length_blocks': '최소 {{minLength}}개의 블록이 있어야 함',

  /** Date is not valid or not in the correct format (ISO-8601) */
  'date.invalid-format': '유효한 ISO-8601 형식의 날짜 문자열이어야 합니다',
  /** Date is later than the given maximum date "$maxDate" */
  'date.maximum': '{{maxDate}} 이전의 날짜여야 합니다',
  /** Date is earlier than the given minimum date "$minDate" */
  'date.minimum': '{{minDate}} 이후의 날짜여야 합니다',

  /** A value of incorrect type is found, eg found `number` instead of `string` */
  'generic.incorrect-type': '예상된 타입 "{{expectedType}}", 실제 타입 "{{actualType}}"',
  /** Value is not one of the values specifically allowed */
  'generic.not-allowed': '허용된 값과 일치하지 않음',
  /** Value "$givenValue" is not one of the values specifically allowed */
  'generic.not-allowed_hint': '값 "{{hint}}"이(가) 허용된 값과 일치하지 않음',
  /** A value is expected, but none is provided */
  'generic.required': '필수',

  /** Number is less than the given minimum threshold value "$threshold" */
  'number.greater-than': '{{threshold}}보다 커야 합니다',
  /** Number is greater than the given maximum threshold value "$threshold" */
  'number.less-than': '{{threshold}}보다 작아야 합니다',
  /** Number is higher than the given maximum value "$maxNumber" */
  'number.maximum': '{{maxNumber}} 이하이어야 합니다',
  /** Number has more precision (decimals) than the allowed "$limit" */
  'number.maximum-precision': '최대 정밀도는 {{limit}}입니다',
  /** Number is lower than the given minimum value "$minNumber" */
  'number.minimum': '{{minNumber}} 이상이어야 합니다',
  /** Number is not an integer ("whole number") */
  'number.non-integer': '정수여야 합니다',

  /** Object is missing a reference to an asset document in its `asset` field */
  'object.asset-required': '자산이 필요합니다',
  /** Object is missing a reference to a file asset document in its `asset` field */
  'object.asset-required_file': '파일이 필요합니다',
  /** Object is missing a reference to an image asset document in its `asset` field */
  'object.asset-required_image': '이미지가 필요합니다',
  /** Object is not a reference to a document (eg `{_ref: 'documentId'}`) */
  'object.not-reference': '문서에 대한 참조여야 합니다',
  /** Object references a document which is not published */
  'object.reference-not-published': '참조된 문서는 발행되어야 합니다',

  /** Accessibility label for closing the validation panel */
  'panel.close-button-aria-label': '유효성 검사 패널 닫기',
  /** Message shown when the validation panel is opened but there are no errors/warnings */
  'panel.no-errors-message': '유효성 검사 오류 없음',
  /** Title for the actual "Validation" panel/feature */
  'panel.title': '유효성 검사',

  /** Slug is an object, but is missing a `current` string property */
  'slug.missing-current': 'Slug는 값이 있어야 합니다',
  /** Slug is not an object (eg `{current: 'some-slug'}`) */
  'slug.not-object': 'Slug는 객체여야 합니다',
  /** Slug is already in use somewhere else, but needs to be unique */
  'slug.not-unique': 'Slug가 이미 사용 중입니다',

  /** String is not a valid email address */
  'string.email': '유효한 이메일 주소여야 합니다',
  /** String has a different character length than the exact number "$wantedLength" */
  'string.exact-length': '정확히 {{wantedLength}}자 이어야 합니다',
  /** String contains characters that are not in lowercase  */
  'string.lowercase': '모든 문자가 소문자여야 합니다',
  /** String is longer than the limit of "$maxLength" characters */
  'string.maximum-length': '{{maxLength}}자 이하이어야 합니다',
  /** String is shorter than the limit of "$minLength" characters */
  'string.minimum-length': '{{minLength}}자 이상이어야 합니다',
  /** String does not match the given regular expression, but should */
  'string.regex-does-not-match': '"{{name}}" 패턴과 일치해야 합니다',
  /** String matches the given regular expression, but should not */
  'string.regex-match': '"{{name}}" 패턴과 일치하지 않아야 합니다',
  /** String contains characters that are not in uppercase */
  'string.uppercase': '모든 문자가 대문자여야 합니다',
  /** String contains a protocol/scheme that is not allowed, eg (`ftp`, `mailto`…) */
  'string.url.disallowed-scheme': '허용된 프로토콜/스킴과 일치하지 않습니다',
  /** String contains a URL with a username or password specified before the host */
  'string.url.includes-credentials': '사용자 이름/비밀번호는 허용되지 않습니다',
  /** String is not a valid URL */
  'string.url.invalid': '유효한 URL이 아닙니다',
  /** String is not an absolute URL (eg it is missing a protocol/host) */
  'string.url.not-absolute': '상대 URL은 허용되지 않습니다',
  /** String is not a relative URL (eg it contains a protocol/host) */
  'string.url.not-relative': '상대 URL만 허용됩니다',
})
