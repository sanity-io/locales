import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Label for action "Copy to clipboard", tied to the "Query URL" field. Also used for accessibility purposes on button */
  'action.copy-url-to-clipboard': 'Sao chép vào clipboard',
  /** Label for stopping an ongoing listen operation */
  'action.listen-cancel': 'Dừng lại',
  /** Label for setting up a listener */
  'action.listen-execute': 'Lắng nghe',
  /** Label for cancelling an ongoing query */
  'action.query-cancel': 'Hủy bỏ',
  /** Label for executing the query, eg doing a fetch */
  'action.query-execute': 'Truy vấn',

  /**
   * Some features has a "New" label indicating that the feature was recently introduced.
   * This defines what the text of that label is. Keep it short and sweet.
   */
  'label.new': 'Mới',

  /** Error message for when the "Params" input are not a valid json */
  'params.error.params-invalid-json': 'Tham số không phải là JSON hợp lệ',
  /** Label for "Params" (parameters) editor/input */
  'params.label': 'Tham số',

  /** Label for 'Column' indicator when there is an error within the query */
  'query.error.column': 'Cột',
  /** Label for 'Line' indicator when there is an error within the query */
  'query.error.line': 'Dòng',
  /** Label for "Query" editor/input */
  'query.label': 'Truy vấn',
  /** Label for the "Query URL" field, shown after executing a query, and allows for copying */
  'query.url': 'URL Truy vấn',

  /** Label for "End to End time" information of the fetched query */
  'result.end-to-end-time-label': 'Thời gian đầu cuối',
  /** Label for "Execution time" information of the fetched query */
  'result.execution-time-label': 'Thời gian thực thi',
  /** Label for "Result" explorer/view */
  'result.label': 'Kết quả',
  /** Tooltip text shown when the query result is not encodable as CSV */
  'result.save-result-as-csv.not-csv-encodable': 'Kết quả không thể mã hóa dưới dạng CSV',
  /** Label for "Save result as" result action */
  'result.save-result-as-format': 'Lưu kết quả dưới dạng <SaveResultButtons/>',
  /**
   * "Not applicable" message for when there is no Execution time or End to End time information
   * available for the query (eg when the query has not been executed, or errored)
   */
  'result.timing-not-applicable': 'không áp dụng',

  /** Label for the "API version" dropdown in settings */
  'settings.api-version-label': 'Phiên bản API',
  /** Label for the "Custom API version" input in settings, shown when "other" is chosen as API version */
  'settings.custom-api-version-label': 'Phiên bản API Tùy chỉnh',
  /** Label for the "Dataset" dropdown in vision settings */
  'settings.dataset-label': 'Dataset',
  /** Error label for when the API version in 'Custom API version' input is invalid */
  'settings.error.invalid-api-version': 'Phiên bản API không hợp lệ',
  /** Label for the "other" versions within the "API version" dropdown */
  'settings.other-api-version-label': 'Khác',
  /**
   * Label for the "Perspective" dropdown in vision settings
   * @see {@link https://www.sanity.io/docs/perspectives}
   */
  'settings.perspective-label': 'Perspective',
  /** Call to action to read the docs related to "Perspectives" */
  'settings.perspectives.action.docs-link': 'Đọc tài liệu',
  /** Description for popover that explains what "Perspectives" are */
  'settings.perspectives.description':
    'Perspectives cho phép truy vấn của bạn chạy trên các "góc nhìn" khác nhau của nội dung trong dataset của bạn',
  /** Label for the pinned release perspective */
  'settings.perspectives.pinned-release-label': 'phiên bản được ghim',
  /** Title for popover that explains what "Perspectives" are */
  'settings.perspectives.title': 'Perspectives',
})
