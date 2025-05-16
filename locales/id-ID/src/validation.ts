import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Array must have exactly "$wantedLength" items, but has more/less */
  'array.exact-length': 'Harus memiliki tepat {{wantedLength}} item',
  /** Portable Text array must have exactly "$wantedLength" blocks, but has more/less */
  'array.exact-length_blocks': 'Harus memiliki tepat {{wantedLength}} blok',
  /** Array item is a duplicate, but array wants only unique items */
  'array.item-duplicate': 'Tidak boleh duplikat',
  /** Array has more than the maximum of "$maxLength" items */
  'array.maximum-length': 'Harus memiliki paling banyak {{maxLength}} item',
  /** Portable Text array has more than the maximum of "$maxLength" items */
  'array.maximum-length_blocks': 'Harus memiliki paling banyak {{maxLength}} blok',
  /** Array has less than the minimum of "$minLength" items */
  'array.minimum-length': 'Harus memiliki paling sedikit {{minLength}} item',
  /** Portable Text array has less than the minimum of "$minLength" blocks */
  'array.minimum-length_blocks': 'Harus memiliki paling sedikit {{minLength}} blok',

  /** Date is not valid or not in the correct format (ISO-8601) */
  'date.invalid-format': 'Harus berupa string tanggal yang diformat ISO-8601 yang valid',
  /** Date is later than the given maximum date "$maxDate" */
  'date.maximum': 'Harus pada atau sebelum {{maxDate}}',
  /** Date is earlier than the given minimum date "$minDate" */
  'date.minimum': 'Harus pada atau setelah {{minDate}}',

  /** A value of incorrect type is found, eg found `number` instead of `string` */
  'generic.incorrect-type': 'Tipe yang diharapkan "{{expectedType}}", mendapatkan "{{actualType}}"',
  /** Value is not one of the values specifically allowed */
  'generic.not-allowed': 'Nilai tidak cocok dengan nilai yang diizinkan',
  /** Value "$givenValue" is not one of the values specifically allowed */
  'generic.not-allowed_hint': 'Nilai "{{hint}}" tidak cocok dengan nilai yang diizinkan',
  /** A value is expected, but none is provided */
  'generic.required': 'Diperlukan',

  /** Number is less than the given minimum threshold value "$threshold" */
  'number.greater-than': 'Harus lebih besar dari {{threshold}}',
  /** Number is greater than the given maximum threshold value "$threshold" */
  'number.less-than': 'Harus kurang dari {{threshold}}',
  /** Number is higher than the given maximum value "$maxNumber" */
  'number.maximum': 'Harus lebih rendah atau sama dengan {{maxNumber}}',
  /** Number has more precision (decimals) than the allowed "$limit" */
  'number.maximum-precision': 'Presisi maksimal adalah {{limit}}',
  /** Number is lower than the given minimum value "$minNumber" */
  'number.minimum': 'Harus lebih besar atau sama dengan {{minNumber}}',
  /** Number is not an integer ("whole number") */
  'number.non-integer': 'Harus berupa bilangan bulat',

  /** Object is missing a reference to an asset document in its `asset` field */
  'object.asset-required': 'Aset diperlukan',
  /** Object is missing a reference to a file asset document in its `asset` field */
  'object.asset-required_file': 'File diperlukan',
  /** Object is missing a reference to an image asset document in its `asset` field */
  'object.asset-required_image': 'Gambar diperlukan',
  /** Object is not a reference to a document (eg `{_ref: 'documentId'}`) */
  'object.not-reference': 'Harus menjadi referensi ke dokumen',
  /** Object references a document which is not published */
  'object.reference-not-published': 'Dokumen yang dirujuk harus dipublikasikan',

  /** Accessibility label for closing the validation panel */
  'panel.close-button-aria-label': 'Tutup validasi',
  /** Message shown when the validation panel is opened but there are no errors/warnings */
  'panel.no-errors-message': 'Tidak ada kesalahan validasi',
  /** Title for the actual "Validation" panel/feature */
  'panel.title': 'Validasi',

  /** Slug is an object, but is missing a `current` string property */
  'slug.missing-current': 'Slug harus memiliki nilai',
  /** Slug is not an object (eg `{current: 'some-slug'}`) */
  'slug.not-object': 'Slug harus berupa objek',
  /** Slug is already in use somewhere else, but needs to be unique */
  'slug.not-unique': 'Slug sudah digunakan',

  /** String is not a valid email address */
  'string.email': 'Harus alamat email yang valid',
  /** String has a different character length than the exact number "$wantedLength" */
  'string.exact-length': 'Harus tepat {{wantedLength}} karakter',
  /** String contains characters that are not in lowercase  */
  'string.lowercase': 'Harus semua karakter huruf kecil',
  /** String is longer than the limit of "$maxLength" characters */
  'string.maximum-length': 'Harus paling banyak {{maxLength}} karakter',
  /** String is shorter than the limit of "$minLength" characters */
  'string.minimum-length': 'Harus paling sedikit {{minLength}} karakter',
  /** String does not match the given regular expression, but should */
  'string.regex-does-not-match': 'Tidak cocok dengan pola "{{name}}"',
  /** String matches the given regular expression, but should not */
  'string.regex-match': 'Seharusnya tidak cocok dengan pola "{{name}}"',
  /** String contains characters that are not in uppercase */
  'string.uppercase': 'Harus semua karakter huruf besar',
  /** String contains a protocol/scheme that is not allowed, eg (`ftp`, `mailto`…) */
  'string.url.disallowed-scheme': 'Tidak cocok dengan protokol/skema yang diizinkan',
  /** String contains a URL with a username or password specified before the host */
  'string.url.includes-credentials': 'Nama pengguna/kata sandi tidak diizinkan',
  /** String is not a valid URL */
  'string.url.invalid': 'Bukan URL yang valid',
  /** String is not an absolute URL (eg it is missing a protocol/host) */
  'string.url.not-absolute': 'URL relatif tidak diizinkan',
  /** String is not a relative URL (eg it contains a protocol/host) */
  'string.url.not-relative': 'Hanya URL relatif yang diizinkan',
})
