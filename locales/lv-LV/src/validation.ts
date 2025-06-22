import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Array must have exactly "$wantedLength" items, but has more/less */
  'array.exact-length': 'Jāsatur tieši {{wantedLength}} elementi',
  /** Portable Text array must have exactly "$wantedLength" blocks, but has more/less */
  'array.exact-length_blocks': 'Jāsatur tieši {{wantedLength}} bloki',
  /** Array item is a duplicate, but array wants only unique items */
  'array.item-duplicate': 'Nevar būt dublikāts',
  /** Array has more than the maximum of "$maxLength" items */
  'array.maximum-length': 'Jāsatur ne vairāk kā {{maxLength}} elementi',
  /** Portable Text array has more than the maximum of "$maxLength" items */
  'array.maximum-length_blocks': 'Jāsatur ne vairāk kā {{maxLength}} bloki',
  /** Array has less than the minimum of "$minLength" items */
  'array.minimum-length': 'Jāsatur vismaz {{minLength}} elementi',
  /** Portable Text array has less than the minimum of "$minLength" blocks */
  'array.minimum-length_blocks': 'Jāsatur vismaz {{minLength}} bloki',

  /** Date is not valid or not in the correct format (ISO-8601) */
  'date.invalid-format': 'Jābūt derīgam ISO-8601 formāta datuma virknei',
  /** Date is later than the given maximum date "$maxDate" */
  'date.maximum': 'Jābūt līdz {{maxDate}} vai agrāk',
  /** Date is earlier than the given minimum date "$minDate" */
  'date.minimum': 'Jābūt no {{minDate}} vai vēlāk',

  /** A value of incorrect type is found, eg found `number` instead of `string` */
  'generic.incorrect-type': 'Gaidītais tips "{{expectedType}}", bet saņemts "{{actualType}}"',
  /** Value is not one of the values specifically allowed */
  'generic.not-allowed': 'Vērtība neatbilst nevienai atļautajai vērtībai',
  /** Value "$givenValue" is not one of the values specifically allowed */
  'generic.not-allowed_hint': 'Vērtība "{{hint}}" neatbilst nevienai atļautajai vērtībai',
  /** A value is expected, but none is provided */
  'generic.required': 'Obligāts',

  /** Number is less than the given minimum threshold value "$threshold" */
  'number.greater-than': 'Jābūt lielākam par {{threshold}}',
  /** Number is greater than the given maximum threshold value "$threshold" */
  'number.less-than': 'Jābūt mazākam par {{threshold}}',
  /** Number is higher than the given maximum value "$maxNumber" */
  'number.maximum': 'Jābūt mazākam vai vienādam ar {{maxNumber}}',
  /** Number has more precision (decimals) than the allowed "$limit" */
  'number.maximum-precision': 'Maksimālā precizitāte ir {{limit}}',
  /** Number is lower than the given minimum value "$minNumber" */
  'number.minimum': 'Jābūt lielākam vai vienādam ar {{minNumber}}',
  /** Number is not an integer ("whole number") */
  'number.non-integer': 'Jābūt veselam skaitlim',

  /** Object is missing a reference to an asset document in its `asset` field */
  'object.asset-required': 'Nepieciešams aktīvs',
  /** Object is missing a reference to a file asset document in its `asset` field */
  'object.asset-required_file': 'Nepieciešams fails',
  /** Object is missing a reference to an image asset document in its `asset` field */
  'object.asset-required_image': 'Nepieciešams attēls',
  /** Object is not a reference to a document (eg `{_ref: 'documentId'}`) */
  'object.not-reference': 'Jābūt atsaucei uz dokumentu',
  /** Object references a document which is not published */
  'object.reference-not-published': 'Atsauktajam dokumentam jābūt publicētam',

  /** Accessibility label for closing the validation panel */
  'panel.close-button-aria-label': 'Aizvērt validāciju',
  /** Message shown when the validation panel is opened but there are no errors/warnings */
  'panel.no-errors-message': 'Nav validācijas kļūdu',
  /** Title for the actual "Validation" panel/feature */
  'panel.title': 'Validācija',

  /** Slug is an object, but is missing a `current` string property */
  'slug.missing-current': 'Slug jābūt vērtībai',
  /** Slug is not an object (eg `{current: 'some-slug'}`) */
  'slug.not-object': 'Slug jābūt objektam',
  /** Slug is already in use somewhere else, but needs to be unique */
  'slug.not-unique': 'Slug jau tiek izmantots',

  /** String is not a valid email address */
  'string.email': 'Jābūt derīgai e-pasta adresei',
  /** String has a different character length than the exact number "$wantedLength" */
  'string.exact-length': 'Jābūt tieši {{wantedLength}} rakstzīmju garumā',
  /** String contains characters that are not in lowercase  */
  'string.lowercase': 'Jābūt tikai mazajiem burtiem',
  /** String is longer than the limit of "$maxLength" characters */
  'string.maximum-length': 'Jābūt ne vairāk kā {{maxLength}} rakstzīmju garumā',
  /** String is shorter than the limit of "$minLength" characters */
  'string.minimum-length': 'Jābūt vismaz {{minLength}} rakstzīmju garumā',
  /** String does not match the given regular expression, but should */
  'string.regex-does-not-match': 'Neatbilst "{{name}}"-modelim',
  /** String matches the given regular expression, but should not */
  'string.regex-match': 'Nedrīkst atbilst "{{name}}"-modelim',
  /** String contains characters that are not in uppercase */
  'string.uppercase': 'Jābūt tikai lielajiem burtiem',
  /** String contains a protocol/scheme that is not allowed, eg (`ftp`, `mailto`…) */
  'string.url.disallowed-scheme': 'Neatbilst atļautajiem protokoliem/shēmām',
  /** String contains a URL with a username or password specified before the host */
  'string.url.includes-credentials': 'Lietotājvārds/parole nav atļauti',
  /** String is not a valid URL */
  'string.url.invalid': 'Nav derīgs URL',
  /** String is not an absolute URL (eg it is missing a protocol/host) */
  'string.url.not-absolute': 'Relatīvie URL nav atļauti',
  /** String is not a relative URL (eg it contains a protocol/host) */
  'string.url.not-relative': 'Atļauti tikai relatīvie URL',
})
