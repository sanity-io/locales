import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Array must have exactly "$wantedLength" items, but has more/less */
  'array.exact-length': 'Tam olarak {{wantedLength}} öğe içermelidir',
  /** Portable Text array must have exactly "$wantedLength" blocks, but has more/less */
  'array.exact-length_blocks': 'Tam olarak {{wantedLength}} blok içermelidir',
  /** Array item is a duplicate, but array wants only unique items */
  'array.item-duplicate': 'Yinelenemez',
  /** Array has more than the maximum of "$maxLength" items */
  'array.maximum-length': 'En fazla {{maxLength}} öğe içermelidir',
  /** Portable Text array has more than the maximum of "$maxLength" items */
  'array.maximum-length_blocks': 'En fazla {{maxLength}} blok içermelidir',
  /** Array has less than the minimum of "$minLength" items */
  'array.minimum-length': 'En az {{minLength}} öğe içermelidir',
  /** Portable Text array has less than the minimum of "$minLength" blocks */
  'array.minimum-length_blocks': 'En az {{minLength}} blok içermelidir',

  /** Date is not valid or not in the correct format (ISO-8601) */
  'date.invalid-format': 'Geçerli bir ISO-8601 formatlı tarih dizesi olmalıdır',
  /** Date is later than the given maximum date "$maxDate" */
  'date.maximum': '{{maxDate}} tarihinden önce veya bu tarihte olmalıdır',
  /** Date is earlier than the given minimum date "$minDate" */
  'date.minimum': '{{minDate}} tarihinden sonra veya bu tarihte olmalıdır',

  /** A value of incorrect type is found, eg found `number` instead of `string` */
  'generic.incorrect-type': 'Beklenen tür "{{expectedType}}", alınan tür "{{actualType}}"',
  /** Value is not one of the values specifically allowed */
  'generic.not-allowed': 'Değer izin verilen değerlerle eşleşmedi',
  /** Value "$givenValue" is not one of the values specifically allowed */
  'generic.not-allowed_hint': '"{{hint}}" değeri izin verilen değerlerle eşleşmedi',
  /** A value is expected, but none is provided */
  'generic.required': 'Gerekli',

  /** Number is less than the given minimum threshold value "$threshold" */
  'number.greater-than': '{{threshold}} değerinden büyük olmalıdır',
  /** Number is greater than the given maximum threshold value "$threshold" */
  'number.less-than': '{{threshold}} değerinden küçük olmalıdır',
  /** Number is higher than the given maximum value "$maxNumber" */
  'number.maximum': '{{maxNumber}} değerine eşit veya daha düşük olmalıdır',
  /** Number has more precision (decimals) than the allowed "$limit" */
  'number.maximum-precision': 'Maksimum hassasiyet {{limit}}',
  /** Number is lower than the given minimum value "$minNumber" */
  'number.minimum': '{{minNumber}} değerine eşit veya daha yüksek olmalıdır',
  /** Number is not an integer ("whole number") */
  'number.non-integer': 'Tam sayı olmalıdır',

  /** Object is missing a reference to an asset document in its `asset` field */
  'object.asset-required': 'Varlık gerekli',
  /** Object is missing a reference to a file asset document in its `asset` field */
  'object.asset-required_file': 'Dosya gerekli',
  /** Object is missing a reference to an image asset document in its `asset` field */
  'object.asset-required_image': 'Resim gerekli',
  /** Media can't be found in the Media Library */
  'object.media-not-found': undefined, // 'The asset could not found in the Media Library'
  /** Media object is missing a reference to a document in its `_ref` field */
  'object.not-media-library-asset': undefined, // 'Must be a reference to a Media Library asset'
  /** Object is not a reference to a document (eg `{_ref: 'documentId'}`) */
  'object.not-reference': 'Bir belgeye referans olmalıdır',
  /** Object references a document which is not published */
  'object.reference-not-published': 'Referans verilen belge yayınlanmış olmalıdır',

  /** Accessibility label for closing the validation panel */
  'panel.close-button-aria-label': 'Doğrulama panelini kapat',
  /** Message shown when the validation panel is opened but there are no errors/warnings */
  'panel.no-errors-message': 'Doğrulama hataları yok',
  /** Title for the actual "Validation" panel/feature */
  'panel.title': 'Doğrulama',
  /** Message shown when the validation panel is opened but the document is going to unpublish */
  'panel.unpublish-message': undefined, // 'Document is going to unpublish, no validation errors are shown'

  /** Slug is an object, but is missing a `current` string property */
  'slug.missing-current': 'Slug bir değere sahip olmalı',
  /** Slug is not an object (eg `{current: 'some-slug'}`) */
  'slug.not-object': 'Slug bir nesne olmalı',
  /** Slug is already in use somewhere else, but needs to be unique */
  'slug.not-unique': 'Slug zaten kullanılıyor',

  /** String is not a valid email address */
  'string.email': 'Geçerli bir e-posta adresi olmalı',
  /** String has a different character length than the exact number "$wantedLength" */
  'string.exact-length': 'Tam olarak {{wantedLength}} karakter uzunluğunda olmalı',
  /** String contains characters that are not in lowercase  */
  'string.lowercase': 'Tümü küçük harf karakterler olmalı',
  /** String is longer than the limit of "$maxLength" characters */
  'string.maximum-length': 'En fazla {{maxLength}} karakter uzunluğunda olmalı',
  /** String is shorter than the limit of "$minLength" characters */
  'string.minimum-length': 'En az {{minLength}} karakter uzunluğunda olmalı',
  /** String does not match the given regular expression, but should */
  'string.regex-does-not-match': '"{{name}}" deseniyle eşleşmiyor',
  /** String matches the given regular expression, but should not */
  'string.regex-match': '"{{name}}" deseniyle eşleşmemeli',
  /** String contains characters that are not in uppercase */
  'string.uppercase': 'Tümü büyük harf karakterler olmalı',
  /** String contains a protocol/scheme that is not allowed, eg (`ftp`, `mailto`…) */
  'string.url.disallowed-scheme': 'İzin verilen protokollerle/şemalarla eşleşmiyor',
  /** String contains a URL with a username or password specified before the host */
  'string.url.includes-credentials': 'Kullanıcı adı/şifre izin verilmiyor',
  /** String is not a valid URL */
  'string.url.invalid': 'Geçerli bir URL değil',
  /** String is not an absolute URL (eg it is missing a protocol/host) */
  'string.url.not-absolute': "Göreceli URL'ler izin verilmiyor",
  /** String is not a relative URL (eg it contains a protocol/host) */
  'string.url.not-relative': "Sadece göreceli URL'ler izin verilir",
})
