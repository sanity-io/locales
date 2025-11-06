import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Label for action "Copy to clipboard", tied to the "Query URL" field. Also used for accessibility purposes on button */
  'action.copy-url-to-clipboard': 'Sao chép vào clipboard',
  /** Label for deleting a query */
  'action.delete': 'Xóa',
  /** Label for editing a query's title */
  'action.edit-title': 'Chỉnh sửa tiêu đề',
  /** Label for stopping an ongoing listen operation */
  'action.listen-cancel': 'Dừng lại',
  /** Label for setting up a listener */
  'action.listen-execute': 'Lắng nghe',
  /** Label for query loading table */
  'action.load-queries': 'Tải các truy vấn',
  /** Label for loading a query */
  'action.load-query': 'Tải truy vấn',
  /** Label for cancelling an ongoing query */
  'action.query-cancel': 'Hủy bỏ',
  /** Label for executing the query, eg doing a fetch */
  'action.query-execute': 'Truy vấn',
  /** Label for saving a query */
  'action.save-query': 'Lưu truy vấn',
  /** Label for updating a query */
  'action.update': 'Cập nhật',

  /** Label for actions user can take */
  'label.actions': 'Hành động',
  /** Label for saved queries that have been edited */
  'label.edited': 'Đã chỉnh sửa',
  /**
   * Some features has a "New" label indicating that the feature was recently introduced.
   * This defines what the text of that label is. Keep it short and sweet.
   */
  'label.new': 'Mới',
  /** Label for query type "personal" */
  'label.personal': 'Cá nhân',
  /** Label for savedAt date */
  'label.saved-at': 'Đã lưu lúc',
  /** Saved queries */
  'label.saved-queries': 'Các truy vấn đã lưu',
  /** Search queries */
  'label.search-queries': 'Tìm kiếm truy vấn',
  /** Share query */
  'label.share': 'Chia sẻ',
  /** Label for saved query type "team" */
  'label.team': 'Nhóm',

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

  /** Query already saved error label */
  'save-query.already-saved': 'Truy vấn đã được lưu',
  /** Save error label */
  'save-query.error': 'Lỗi khi lưu truy vấn',
  /** Save success label */
  'save-query.success': 'Truy vấn đã được lưu',

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
  /** Notification about previewDrafts to drafts rename */
  'settings.perspective.preview-drafts-renamed-to-drafts.description':
    'Góc nhìn "<code>previewDrafts</code>" đã được đổi tên thành "<code>drafts</code>" và hiện không còn được sử dụng. Thay đổi này có hiệu lực cho tất cả các phiên bản hỗ trợ góc nhìn (>= v2021-03-25).',
  /** Call to action to read the docs related to "Perspectives" */
  'settings.perspectives.action.docs-link': 'Đọc tài liệu',
  /** Option for selecting default perspective */
  'settings.perspectives.default': 'Không có góc nhìn (mặc định API)',
  /** Description for popover that explains what "Perspectives" are */
  'settings.perspectives.description':
    'Perspectives cho phép truy vấn của bạn chạy trên các "góc nhìn" khác nhau của nội dung trong dataset của bạn',
  /** Description for upcoming default perspective change */
  'settings.perspectives.new-default.description':
    'Góc nhìn mặc định sẽ thay đổi từ "<code>raw</code>" sang "<code>published</code>" trong phiên bản API sắp tới. Vui lòng tham khảo tài liệu để biết thêm chi tiết.',
  /** Label for the pinned release perspective */
  'settings.perspectives.pinned-release-label': 'phiên bản được ghim',
  /** Label for the scheduled drafts perspective */
  'settings.perspectives.scheduled-drafts': undefined, // 'Scheduled drafts'
  /** Title for popover that explains what "Perspectives" are */
  'settings.perspectives.title': 'Perspectives',
})
