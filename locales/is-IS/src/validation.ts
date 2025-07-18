import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Array must have exactly "$wantedLength" items, but has more/less */
  'array.exact-length': 'Verður að hafa nákvæmlega {{wantedLength}} atriði',
  /** Portable Text array must have exactly "$wantedLength" blocks, but has more/less */
  'array.exact-length_blocks': 'Verður að hafa nákvæmlega {{wantedLength}} blokkir',
  /** Array item is a duplicate, but array wants only unique items */
  'array.item-duplicate': 'Má ekki vera afrit',
  /** Array has more than the maximum of "$maxLength" items */
  'array.maximum-length': 'Má hafa í mesta lagi {{maxLength}} atriði',
  /** Portable Text array has more than the maximum of "$maxLength" items */
  'array.maximum-length_blocks': 'Má hafa í mesta lagi {{maxLength}} blokkir',
  /** Array has less than the minimum of "$minLength" items */
  'array.minimum-length': 'Verður að hafa að minnsta kosti {{minLength}} atriði',
  /** Portable Text array has less than the minimum of "$minLength" blocks */
  'array.minimum-length_blocks': 'Verður að hafa að minnsta kosti {{minLength}} blokkir',

  /** Date is not valid or not in the correct format (ISO-8601) */
  'date.invalid-format': 'Verður að vera gild ISO-8601 sniðin dagsetning',
  /** Date is later than the given maximum date "$maxDate" */
  'date.maximum': 'Verður að vera á eða fyrir {{maxDate}}',
  /** Date is earlier than the given minimum date "$minDate" */
  'date.minimum': 'Verður að vera á eða eftir {{minDate}}',

  /** A value of incorrect type is found, eg found `number` instead of `string` */
  'generic.incorrect-type': 'Væntanleg týpa "{{expectedType}}", fékk "{{actualType}}"',
  /** Value is not one of the values specifically allowed */
  'generic.not-allowed': 'Gildi passaði ekki við nein leyfð gildi',
  /** Value "$givenValue" is not one of the values specifically allowed */
  'generic.not-allowed_hint': 'Gildi "{{hint}}" passaði ekki við nein leyfð gildi',
  /** A value is expected, but none is provided */
  'generic.required': 'Krafist',

  /** Number is less than the given minimum threshold value "$threshold" */
  'number.greater-than': 'Verður að vera meira en {{threshold}}',
  /** Number is greater than the given maximum threshold value "$threshold" */
  'number.less-than': 'Verður að vera minna en {{threshold}}',
  /** Number is higher than the given maximum value "$maxNumber" */
  'number.maximum': 'Verður að vera lægra en eða jafnt og {{maxNumber}}',
  /** Number has more precision (decimals) than the allowed "$limit" */
  'number.maximum-precision': 'Hámarks nákvæmni er {{limit}}',
  /** Number is lower than the given minimum value "$minNumber" */
  'number.minimum': 'Verður að vera meira en eða jafnt og {{minNumber}}',
  /** Number is not an integer ("whole number") */
  'number.non-integer': 'Verður að vera heiltala',

  /** Object is missing a reference to an asset document in its `asset` field */
  'object.asset-required': 'Eign er krafist',
  /** Object is missing a reference to a file asset document in its `asset` field */
  'object.asset-required_file': 'Skrá er krafist',
  /** Object is missing a reference to an image asset document in its `asset` field */
  'object.asset-required_image': 'Mynd er krafist',
  /** Media can't be found in the Media Library */
  'object.media-not-found': undefined, // 'The asset could not found in the Media Library'
  /** Media object is missing a reference to a document in its `_ref` field */
  'object.not-media-library-asset': undefined, // 'Must be a reference to a Media Library asset'
  /** Object is not a reference to a document (eg `{_ref: 'documentId'}`) */
  'object.not-reference': 'Verður að vera tilvísun í skjal',
  /** Object references a document which is not published */
  'object.reference-not-published': 'Tilvísunarskjal verður að vera birt',

  /** Accessibility label for closing the validation panel */
  'panel.close-button-aria-label': 'Loka staðfestingarvalmynd',
  /** Message shown when the validation panel is opened but there are no errors/warnings */
  'panel.no-errors-message': 'Engar staðfestingarvillur',
  /** Title for the actual "Validation" panel/feature */
  'panel.title': 'Staðfesting',
  /** Message shown when the validation panel is opened but the document is going to unpublish */
  'panel.unpublish-message': undefined, // 'Document is going to unpublish, no validation errors are shown'

  /** Slug is an object, but is missing a `current` string property */
  'slug.missing-current': 'Slug verður að hafa gildi',
  /** Slug is not an object (eg `{current: 'some-slug'}`) */
  'slug.not-object': 'Slug verður að vera hlutur',
  /** Slug is already in use somewhere else, but needs to be unique */
  'slug.not-unique': 'Slug er nú þegar í notkun',

  /** String is not a valid email address */
  'string.email': 'Verður að vera gilt netfang',
  /** String has a different character length than the exact number "$wantedLength" */
  'string.exact-length': 'Verður að vera nákvæmlega {{wantedLength}} stafir að lengd',
  /** String contains characters that are not in lowercase  */
  'string.lowercase': 'Verður að vera allt lágstafir',
  /** String is longer than the limit of "$maxLength" characters */
  'string.maximum-length': 'Má vera í mesta lagi {{maxLength}} stafir að lengd',
  /** String is shorter than the limit of "$minLength" characters */
  'string.minimum-length': 'Verður að vera að minnsta kosti {{minLength}} stafir að lengd',
  /** String does not match the given regular expression, but should */
  'string.regex-does-not-match': 'Passar ekki við "{{name}}"-mynstrið',
  /** String matches the given regular expression, but should not */
  'string.regex-match': 'Á ekki að passa við "{{name}}"-mynstrið',
  /** String contains characters that are not in uppercase */
  'string.uppercase': 'Verður að vera allt hástafir',
  /** String contains a protocol/scheme that is not allowed, eg (`ftp`, `mailto`…) */
  'string.url.disallowed-scheme': 'Passar ekki við leyfileg prótókól/snið',
  /** String contains a URL with a username or password specified before the host */
  'string.url.includes-credentials': 'Notandanafn/lykilorð ekki leyft',
  /** String is not a valid URL */
  'string.url.invalid': 'Ekki gild vefslóð',
  /** String is not an absolute URL (eg it is missing a protocol/host) */
  'string.url.not-absolute': 'Afstæðar vefslóðir eru ekki leyfðar',
  /** String is not a relative URL (eg it contains a protocol/host) */
  'string.url.not-relative': 'Aðeins afstæðar vefslóðir eru leyfðar',
})
