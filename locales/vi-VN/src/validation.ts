import { removeUndefinedLocaleResources } from "sanity";

export default removeUndefinedLocaleResources({
  /** Array must have exactly "$wantedLength" items, but has more/less */
  "array.exact-length": "Phải có chính xác {{wantedLength}} mục",
  /** Portable Text array must have exactly "$wantedLength" blocks, but has more/less */
  "array.exact-length_blocks": "Phải có chính xác {{wantedLength}} khối",
  /** Array item is a duplicate, but array wants only unique items */
  "array.item-duplicate": "Không thể trùng lặp",
  /** Array has more than the maximum of "$maxLength" items */
  "array.maximum-length": "Phải có nhiều nhất {{maxLength}} mục",
  /** Portable Text array has more than the maximum of "$maxLength" items */
  "array.maximum-length_blocks": "Phải có nhiều nhất {{maxLength}} khối",
  /** Array has less than the minimum of "$minLength" items */
  "array.minimum-length": "Phải có ít nhất {{minLength}} mục",
  /** Portable Text array has less than the minimum of "$minLength" blocks */
  "array.minimum-length_blocks": "Phải có ít nhất {{minLength}} khối",

  /** Date is not valid or not in the correct format (ISO-8601) */
  "date.invalid-format": "Phải là chuỗi ngày có định dạng ISO-8601 hợp lệ",
  /** Date is later than the given maximum date "$maxDate" */
  "date.maximum": "Phải trước hoặc vào ngày {{maxDate}}",
  /** Date is earlier than the given minimum date "$minDate" */
  "date.minimum": "Phải sau hoặc vào ngày {{minDate}}",

  /** A value of incorrect type is found, eg found `number` instead of `string` */
  "generic.incorrect-type":
    'Dự kiến kiểu "{{expectedType}}", nhận được "{{actualType}}"',
  /** Value is not one of the values specifically allowed */
  "generic.not-allowed": "Giá trị không khớp với bất kỳ giá trị cho phép nào",
  /** Value "$givenValue" is not one of the values specifically allowed */
  "generic.not-allowed_hint":
    'Giá trị "{{hint}}" không khớp với bất kỳ giá trị cho phép nào',
  /** A value is expected, but none is provided */
  "generic.required": "Yêu cầu",

  /** Number is less than the given minimum threshold value "$threshold" */
  "number.greater-than": "Phải lớn hơn {{threshold}}",
  /** Number is greater than the given maximum threshold value "$threshold" */
  "number.less-than": "Phải nhỏ hơn {{threshold}}",
  /** Number is higher than the given maximum value "$maxNumber" */
  "number.maximum": "Phải nhỏ hơn hoặc bằng {{maxNumber}}",
  /** Number has more precision (decimals) than the allowed "$limit" */
  "number.maximum-precision": "Độ chính xác tối đa là {{limit}}",
  /** Number is lower than the given minimum value "$minNumber" */
  "number.minimum": "Phải lớn hơn hoặc bằng {{minNumber}}",
  /** Number is not an integer ("whole number") */
  "number.non-integer": "Phải là số nguyên",

  /** Object is missing a reference to an asset document in its `asset` field */
  "object.asset-required": "Yêu cầu tài sản",
  /** Object is missing a reference to a file asset document in its `asset` field */
  "object.asset-required_file": "Yêu cầu tệp",
  /** Object is missing a reference to an image asset document in its `asset` field */
  "object.asset-required_image": "Yêu cầu hình ảnh",
  /** Object is not a reference to a document (eg `{_ref: 'documentId'}`) */
  "object.not-reference": "Phải là tham chiếu đến một tài liệu",
  /** Object references a document which is not published */
  "object.reference-not-published": "Tài liệu tham chiếu phải được xuất bản",

  /** Accessibility label for closing the validation panel */
  "panel.close-button-aria-label": "Đóng bảng kiểm tra",
  /** Message shown when the validation panel is opened but there are no errors/warnings */
  "panel.no-errors-message": "Không có lỗi kiểm tra",
  /** Title for the actual "Validation" panel/feature */
  "panel.title": "Kiểm tra",

  /** Slug is an object, but is missing a `current` string property */
  "slug.missing-current": "Slug phải có một giá trị",
  /** Slug is not an object (eg `{current: 'some-slug'}`) */
  "slug.not-object": "Slug phải là một đối tượng",
  /** Slug is already in use somewhere else, but needs to be unique */
  "slug.not-unique": "Slug đã được sử dụng",

  /** String is not a valid email address */
  "string.email": "Phải là một địa chỉ email hợp lệ",
  /** String has a different character length than the exact number "$wantedLength" */
  "string.exact-length": "Phải đúng {{wantedLength}} ký tự",
  /** String contains characters that are not in lowercase  */
  "string.lowercase": "Phải là tất cả ký tự chữ thường",
  /** String is longer than the limit of "$maxLength" characters */
  "string.maximum-length": "Phải không quá {{maxLength}} ký tự",
  /** String is shorter than the limit of "$minLength" characters */
  "string.minimum-length": "Phải ít nhất {{minLength}} ký tự",
  /** String does not match the given regular expression, but should */
  "string.regex-does-not-match": 'Không khớp với mẫu "{{name}}"',
  /** String matches the given regular expression, but should not */
  "string.regex-match": 'Không nên khớp với mẫu "{{name}}"',
  /** String contains characters that are not in uppercase */
  "string.uppercase": "Phải là tất cả ký tự chữ hoa",
  /** String contains a protocol/scheme that is not allowed, eg (`ftp`, `mailto`…) */
  "string.url.disallowed-scheme":
    "Không khớp với các giao thức/scheme cho phép",
  /** String contains a URL with a username or password specified before the host */
  "string.url.includes-credentials": "Không cho phép tên người dùng/mật khẩu",
  /** String is not a valid URL */
  "string.url.invalid": "Không phải là một URL hợp lệ",
  /** String is not an absolute URL (eg it is missing a protocol/host) */
  "string.url.not-absolute": "Không cho phép URL tương đối",
  /** String is not a relative URL (eg it contains a protocol/host) */
  "string.url.not-relative": "Chỉ cho phép URL tương đối",
});
