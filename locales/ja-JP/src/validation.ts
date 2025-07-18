import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Array must have exactly "$wantedLength" items, but has more/less */
  'array.exact-length': '正確に{{wantedLength}}項目でなければなりません',
  /** Portable Text array must have exactly "$wantedLength" blocks, but has more/less */
  'array.exact-length_blocks': '正確に{{wantedLength}}ブロックでなければなりません',
  /** Array item is a duplicate, but array wants only unique items */
  'array.item-duplicate': '重複することはできません',
  /** Array has more than the maximum of "$maxLength" items */
  'array.maximum-length': '最大で{{maxLength}}項目までです',
  /** Portable Text array has more than the maximum of "$maxLength" items */
  'array.maximum-length_blocks': '最大で{{maxLength}}ブロックまでです',
  /** Array has less than the minimum of "$minLength" items */
  'array.minimum-length': '最低でも{{minLength}}項目が必要です',
  /** Portable Text array has less than the minimum of "$minLength" blocks */
  'array.minimum-length_blocks': '最低でも{{minLength}}ブロックが必要です',

  /** Date is not valid or not in the correct format (ISO-8601) */
  'date.invalid-format': '有効なISO-8601形式の日付文字列でなければなりません',
  /** Date is later than the given maximum date "$maxDate" */
  'date.maximum': '{{maxDate}}以前でなければなりません',
  /** Date is earlier than the given minimum date "$minDate" */
  'date.minimum': '{{minDate}}以降でなければなりません',

  /** A value of incorrect type is found, eg found `number` instead of `string` */
  'generic.incorrect-type':
    '期待される型「{{expectedType}}」でしたが、「{{actualType}}」を取得しました',
  /** Value is not one of the values specifically allowed */
  'generic.not-allowed': '許可された値と一致しません',
  /** Value "$givenValue" is not one of the values specifically allowed */
  'generic.not-allowed_hint': '値「{{hint}}」は許可された値と一致しません',
  /** A value is expected, but none is provided */
  'generic.required': '必須',

  /** Number is less than the given minimum threshold value "$threshold" */
  'number.greater-than': '{{threshold}}より大きくなければなりません',
  /** Number is greater than the given maximum threshold value "$threshold" */
  'number.less-than': '{{threshold}}未満でなければなりません',
  /** Number is higher than the given maximum value "$maxNumber" */
  'number.maximum': '{{maxNumber}}以下でなければなりません',
  /** Number has more precision (decimals) than the allowed "$limit" */
  'number.maximum-precision': '最大精度は{{limit}}です',
  /** Number is lower than the given minimum value "$minNumber" */
  'number.minimum': '{{minNumber}}以上でなければなりません',
  /** Number is not an integer ("whole number") */
  'number.non-integer': '整数でなければなりません',

  /** Object is missing a reference to an asset document in its `asset` field */
  'object.asset-required': 'アセットが必要です',
  /** Object is missing a reference to a file asset document in its `asset` field */
  'object.asset-required_file': 'ファイルが必要です',
  /** Object is missing a reference to an image asset document in its `asset` field */
  'object.asset-required_image': '画像が必要です',
  /** Media can't be found in the Media Library */
  'object.media-not-found': undefined, // 'The asset could not found in the Media Library'
  /** Media object is missing a reference to a document in its `_ref` field */
  'object.not-media-library-asset': undefined, // 'Must be a reference to a Media Library asset'
  /** Object is not a reference to a document (eg `{_ref: 'documentId'}`) */
  'object.not-reference': 'ドキュメントへの参照でなければなりません',
  /** Object references a document which is not published */
  'object.reference-not-published': '参照されたドキュメントは公開されていなければなりません',

  /** Accessibility label for closing the validation panel */
  'panel.close-button-aria-label': 'バリデーションを閉じる',
  /** Message shown when the validation panel is opened but there are no errors/warnings */
  'panel.no-errors-message': 'バリデーションエラーはありません',
  /** Title for the actual "Validation" panel/feature */
  'panel.title': 'バリデーション',
  /** Message shown when the validation panel is opened but the document is going to unpublish */
  'panel.unpublish-message': undefined, // 'Document is going to unpublish, no validation errors are shown'

  /** Slug is an object, but is missing a `current` string property */
  'slug.missing-current': 'スラッグには値が必要です',
  /** Slug is not an object (eg `{current: 'some-slug'}`) */
  'slug.not-object': 'スラッグはオブジェクトでなければなりません',
  /** Slug is already in use somewhere else, but needs to be unique */
  'slug.not-unique': 'スラッグは既に使用されています',

  /** String is not a valid email address */
  'string.email': '有効なメールアドレスである必要があります',
  /** String has a different character length than the exact number "$wantedLength" */
  'string.exact-length': '正確に{{wantedLength}}文字である必要があります',
  /** String contains characters that are not in lowercase  */
  'string.lowercase': 'すべて小文字である必要があります',
  /** String is longer than the limit of "$maxLength" characters */
  'string.maximum-length': '{{maxLength}}文字以下である必要があります',
  /** String is shorter than the limit of "$minLength" characters */
  'string.minimum-length': '{{minLength}}文字以上である必要があります',
  /** String does not match the given regular expression, but should */
  'string.regex-does-not-match': '"{{name}}"のパターンと一致しません',
  /** String matches the given regular expression, but should not */
  'string.regex-match': '"{{name}}"のパターンと一致してはいけません',
  /** String contains characters that are not in uppercase */
  'string.uppercase': 'すべて大文字である必要があります',
  /** String contains a protocol/scheme that is not allowed, eg (`ftp`, `mailto`…) */
  'string.url.disallowed-scheme': '許可されているプロトコル/スキームと一致しません',
  /** String contains a URL with a username or password specified before the host */
  'string.url.includes-credentials': 'ユーザー名/パスワードは許可されません',
  /** String is not a valid URL */
  'string.url.invalid': '有効なURLではありません',
  /** String is not an absolute URL (eg it is missing a protocol/host) */
  'string.url.not-absolute': '相対URLは許可されません',
  /** String is not a relative URL (eg it contains a protocol/host) */
  'string.url.not-relative': '相対URLのみが許可されます',
})
