import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Array must have exactly "$wantedLength" items, but has more/less */
  'array.exact-length': 'ต้องมีจำนวนรายการทั้งหมด {{wantedLength}} รายการเท่านั้น',
  /** Portable Text array must have exactly "$wantedLength" blocks, but has more/less */
  'array.exact-length_blocks': 'ต้องมีจำนวนบล็อกทั้งหมด {{wantedLength}} บล็อกเท่านั้น',
  /** Array item is a duplicate, but array wants only unique items */
  'array.item-duplicate': 'ไม่สามารถเป็นรายการที่ซ้ำกันได้',
  /** Array has more than the maximum of "$maxLength" items */
  'array.maximum-length': 'ต้องมีไม่เกิน {{maxLength}} รายการ',
  /** Portable Text array has more than the maximum of "$maxLength" items */
  'array.maximum-length_blocks': 'ต้องมีไม่เกิน {{maxLength}} บล็อก',
  /** Array has less than the minimum of "$minLength" items */
  'array.minimum-length': 'ต้องมีอย่างน้อย {{minLength}} รายการ',
  /** Portable Text array has less than the minimum of "$minLength" blocks */
  'array.minimum-length_blocks': 'ต้องมีอย่างน้อย {{minLength}} บล็อก',

  /** Date is not valid or not in the correct format (ISO-8601) */
  'date.invalid-format': 'ต้องเป็นวันที่ที่ถูกต้องตามรูปแบบ ISO-8601',
  /** Date is later than the given maximum date "$maxDate" */
  'date.maximum': 'ต้องเป็นวันที่เท่ากับหรือก่อน {{maxDate}}',
  /** Date is earlier than the given minimum date "$minDate" */
  'date.minimum': 'ต้องเป็นวันที่เท่ากับหรือหลังจาก {{minDate}}',

  /** A value of incorrect type is found, eg found `number` instead of `string` */
  'generic.incorrect-type': 'คาดหวังประเภท "{{expectedType}}", แต่ได้ "{{actualType}}"',
  /** Value is not one of the values specifically allowed */
  'generic.not-allowed': 'ค่าไม่ตรงกับค่าที่อนุญาต',
  /** Value "$givenValue" is not one of the values specifically allowed */
  'generic.not-allowed_hint': 'ค่า "{{hint}}" ไม่ตรงกับค่าที่อนุญาตใดๆ',
  /** A value is expected, but none is provided */
  'generic.required': 'จำเป็น',

  /** Number is less than the given minimum threshold value "$threshold" */
  'number.greater-than': 'ต้องมากกว่า {{threshold}}',
  /** Number is greater than the given maximum threshold value "$threshold" */
  'number.less-than': 'ต้องน้อยกว่า {{threshold}}',
  /** Number is higher than the given maximum value "$maxNumber" */
  'number.maximum': 'ต้องน้อยกว่าหรือเท่ากับ {{maxNumber}}',
  /** Number has more precision (decimals) than the allowed "$limit" */
  'number.maximum-precision': 'ความแม่นยำสูงสุดคือ {{limit}}',
  /** Number is lower than the given minimum value "$minNumber" */
  'number.minimum': 'ต้องมากกว่าหรือเท่ากับ {{minNumber}}',
  /** Number is not an integer ("whole number") */
  'number.non-integer': 'ต้องเป็นจำนวนเต็ม',

  /** Object is missing a reference to an asset document in its `asset` field */
  'object.asset-required': 'จำเป็นต้องมีทรัพย์สิน',
  /** Object is missing a reference to a file asset document in its `asset` field */
  'object.asset-required_file': 'จำเป็นต้องมีไฟล์',
  /** Object is missing a reference to an image asset document in its `asset` field */
  'object.asset-required_image': 'จำเป็นต้องมีภาพ',
  /** Media can't be found in the Media Library */
  'object.media-not-found': 'ไม่พบสินทรัพย์ในห้องสมุดสื่อ',
  /** Media object is missing a reference to a document in its `_ref` field */
  'object.not-media-library-asset': 'ต้องเป็นการอ้างอิงไปยังสินทรัพย์ของห้องสมุดสื่อ',
  /** Object is not a reference to a document (eg `{_ref: 'documentId'}`) */
  'object.not-reference': 'ต้องเป็นการอ้างอิงไปยังเอกสาร',
  /** Object references a document which is not published */
  'object.reference-not-published': 'เอกสารที่อ้างอิงต้องเป็นเอกสารที่ได้รับการเผยแพร่',

  /** Accessibility label for closing the validation panel */
  'panel.close-button-aria-label': 'ปิดการตรวจสอบ',
  /** Message shown when the validation panel is opened but there are no errors/warnings */
  'panel.no-errors-message': 'ไม่มีข้อผิดพลาดในการตรวจสอบ',
  /** Title for the actual "Validation" panel/feature */
  'panel.title': 'การตรวจสอบ',
  /** Message shown when the validation panel is opened but the document is going to unpublish */
  'panel.unpublish-message': 'เอกสารกำลังจะไม่เผยแพร่, ไม่มีข้อผิดพลาดในการตรวจสอบที่แสดง',

  /** Slug is an object, but is missing a `current` string property */
  'slug.missing-current': 'Slug ต้องมีค่า',
  /** Slug is not an object (eg `{current: 'some-slug'}`) */
  'slug.not-object': 'Slug ต้องเป็นออบเจ็กต์',
  /** Slug is already in use somewhere else, but needs to be unique */
  'slug.not-unique': 'Slug ถูกใช้ไปแล้ว',

  /** String is not a valid email address */
  'string.email': 'ต้องเป็นที่อยู่อีเมลที่ถูกต้อง',
  /** String has a different character length than the exact number "$wantedLength" */
  'string.exact-length': 'ต้องมีความยาวพอดี {{wantedLength}} ตัวอักษร',
  /** String contains characters that are not in lowercase  */
  'string.lowercase': 'ต้องเป็นตัวอักษรพิมพ์เล็กทั้งหมด',
  /** String is longer than the limit of "$maxLength" characters */
  'string.maximum-length': 'ต้องมีความยาวไม่เกิน {{maxLength}} ตัวอักษร',
  /** String is shorter than the limit of "$minLength" characters */
  'string.minimum-length': 'ต้องมีความยาวอย่างน้อย {{minLength}} ตัวอักษร',
  /** String does not match the given regular expression, but should */
  'string.regex-does-not-match': 'ไม่ตรงกับรูปแบบ "{{name}}"',
  /** String matches the given regular expression, but should not */
  'string.regex-match': 'ไม่ควรตรงกับรูปแบบ "{{name}}"',
  /** String contains characters that are not in uppercase */
  'string.uppercase': 'ต้องเป็นตัวอักษรพิมพ์ใหญ่ทั้งหมด',
  /** String contains a protocol/scheme that is not allowed, eg (`ftp`, `mailto`…) */
  'string.url.disallowed-scheme': 'ไม่ตรงกับโปรโตคอล/สคีมที่อนุญาต',
  /** String contains a URL with a username or password specified before the host */
  'string.url.includes-credentials': 'ไม่อนุญาตให้มีชื่อผู้ใช้/รหัสผ่าน',
  /** String is not a valid URL */
  'string.url.invalid': 'ไม่ใช่ URL ที่ถูกต้อง',
  /** String is not an absolute URL (eg it is missing a protocol/host) */
  'string.url.not-absolute': 'ไม่อนุญาตให้ใช้ URL ที่เป็นสัมพัทธ์',
  /** String is not a relative URL (eg it contains a protocol/host) */
  'string.url.not-relative': 'อนุญาตเฉพาะ URL ที่เป็นสัมพัทธ์เท่านั้น',
})
