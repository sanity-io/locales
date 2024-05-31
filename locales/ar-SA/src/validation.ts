import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Array must have exactly "$wantedLength" items, but has more/less */
  'array.exact-length': 'يجب أن يحتوي بالضبط على {{wantedLength}} عناصر',
  /** Portable Text array must have exactly "$wantedLength" blocks, but has more/less */
  'array.exact-length_blocks': 'يجب أن يحتوي بالضبط على {{wantedLength}} كتل',
  /** Array item is a duplicate, but array wants only unique items */
  'array.item-duplicate': 'لا يمكن أن يكون مكررًا',
  /** Array has more than the maximum of "$maxLength" items */
  'array.maximum-length': 'يجب أن يحتوي على الأكثر {{maxLength}} عناصر',
  /** Portable Text array has more than the maximum of "$maxLength" items */
  'array.maximum-length_blocks': 'يجب أن يحتوي على الأكثر {{maxLength}} كتل',
  /** Array has less than the minimum of "$minLength" items */
  'array.minimum-length': 'يجب أن يحتوي على الأقل {{minLength}} عناصر',
  /** Portable Text array has less than the minimum of "$minLength" blocks */
  'array.minimum-length_blocks': 'يجب أن يحتوي على الأقل {{minLength}} كتل',

  /** Date is not valid or not in the correct format (ISO-8601) */
  'date.invalid-format': 'يجب أن يكون تاريخًا صالحًا مُنسقًا وفقًا لـ ISO-8601',
  /** Date is later than the given maximum date "$maxDate" */
  'date.maximum': 'يجب أن يكون في أو قبل {{maxDate}}',
  /** Date is earlier than the given minimum date "$minDate" */
  'date.minimum': 'يجب أن يكون في أو بعد {{minDate}}',

  /** A value of incorrect type is found, eg found `number` instead of `string` */
  'generic.incorrect-type': 'النوع المتوقع "{{expectedType}}"، وجد "{{actualType}}"',
  /** Value is not one of the values specifically allowed */
  'generic.not-allowed': 'القيمة لا تتطابق مع أي من القيم المسموح بها',
  /** Value "$givenValue" is not one of the values specifically allowed */
  'generic.not-allowed_hint': 'القيمة "{{hint}}" لا تتطابق مع أي من القيم المسموح بها',
  /** A value is expected, but none is provided */
  'generic.required': 'مطلوب',

  /** Number is less than the given minimum threshold value "$threshold" */
  'number.greater-than': 'يجب أن يكون أكبر من {{threshold}}',
  /** Number is greater than the given maximum threshold value "$threshold" */
  'number.less-than': 'يجب أن يكون أقل من {{threshold}}',
  /** Number is higher than the given maximum value "$maxNumber" */
  'number.maximum': 'يجب أن يكون أقل من أو يساوي {{maxNumber}}',
  /** Number has more precision (decimals) than the allowed "$limit" */
  'number.maximum-precision': 'الدقة القصوى هي {{limit}}',
  /** Number is lower than the given minimum value "$minNumber" */
  'number.minimum': 'يجب أن يكون أكبر من أو يساوي {{minNumber}}',
  /** Number is not an integer ("whole number") */
  'number.non-integer': 'يجب أن يكون عددًا صحيحًا',

  /** Object is missing a reference to an asset document in its `asset` field */
  'object.asset-required': 'الأصل مطلوب',
  /** Object is missing a reference to a file asset document in its `asset` field */
  'object.asset-required_file': 'الملف مطلوب',
  /** Object is missing a reference to an image asset document in its `asset` field */
  'object.asset-required_image': 'الصورة مطلوبة',
  /** Object is not a reference to a document (eg `{_ref: 'documentId'}`) */
  'object.not-reference': 'يجب أن يكون مرجعًا لمستند',
  /** Object references a document which is not published */
  'object.reference-not-published': 'يجب نشر المستند المُشار إليه',

  /** Accessibility label for closing the validation panel */
  'panel.close-button-aria-label': 'إغلاق التحقق',
  /** Message shown when the validation panel is opened but there are no errors/warnings */
  'panel.no-errors-message': 'لا توجد أخطاء في التحقق',
  /** Title for the actual "Validation" panel/feature */
  'panel.title': 'التحقق',

  /** Slug is an object, but is missing a `current` string property */
  'slug.missing-current': 'يجب أن يحتوي السبيكة على قيمة',
  /** Slug is not an object (eg `{current: 'some-slug'}`) */
  'slug.not-object': 'يجب أن تكون السبيكة عبارة عن كائن',
  /** Slug is already in use somewhere else, but needs to be unique */
  'slug.not-unique': 'السبيكة مستخدمة مسبقًا',

  /** String is not a valid email address */
  'string.email': 'يجب أن يكون عنوان بريد إلكتروني صالح',
  /** String has a different character length than the exact number "$wantedLength" */
  'string.exact-length': 'يجب أن يكون طوله بالضبط {{wantedLength}} حروف',
  /** String contains characters that are not in lowercase  */
  'string.lowercase': 'يجب أن يكون جميع الأحرف صغيرة',
  /** String is longer than the limit of "$maxLength" characters */
  'string.maximum-length': 'يجب ألا يزيد الطول عن {{maxLength}} حروف',
  /** String is shorter than the limit of "$minLength" characters */
  'string.minimum-length': 'يجب ألا يقل الطول عن {{minLength}} حروف',
  /** String does not match the given regular expression, but should */
  'string.regex-does-not-match': 'لا يتطابق مع نمط "{{name}}"',
  /** String matches the given regular expression, but should not */
  'string.regex-match': 'يجب ألا يتطابق مع نمط "{{name}}"',
  /** String contains characters that are not in uppercase */
  'string.uppercase': 'يجب أن يكون جميع الأحرف كبيرة',
  /** String contains a protocol/scheme that is not allowed, eg (`ftp`, `mailto`…) */
  'string.url.disallowed-scheme': 'لا يتطابق مع البروتوكولات/المخططات المسموح بها',
  /** String contains a URL with a username or password specified before the host */
  'string.url.includes-credentials': 'غير مسموح بأسم المستخدم/كلمة المرور',
  /** String is not a valid URL */
  'string.url.invalid': 'ليس عنوان URL صالح',
  /** String is not an absolute URL (eg it is missing a protocol/host) */
  'string.url.not-absolute': 'غير مسموح بعناوين URL النسبية',
  /** String is not a relative URL (eg it contains a protocol/host) */
  'string.url.not-relative': 'مسموح فقط بعناوين URL النسبية',
})
