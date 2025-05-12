import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** The text for the "Edit in Canvas" action. */
  'action.edit-document': 'Chỉnh sửa trong Canvas',
  /** The text for the "Link to Canvas" action. */
  'action.link-document': 'Liên kết với Canvas',
  /** The text for the "Link to Canvas" action when the document is not yet resolved. */
  'action.link-document-disabled.initial-value-not-resolved':
    'Vui lòng đợi cho đến khi giá trị ban đầu của tài liệu được giải quyết',
  /** The text for the "Link to Canvas" action when the user doesn't have permissions to link the document to Canvas. */
  'action.link-document-disabled.missing-permissions':
    'Bạn không có quyền để liên kết tài liệu này với Canvas',
  /** The text for the "Link to Canvas" action when the document is not in the dashboard. */
  'action.link-document-disabled.not-in-dashboard':
    'Mở tài liệu này trong Dashboard để liên kết với Canvas',
  /** The text for the "Link to Canvas" action when the document is a version document. */
  'action.link-document-disabled.version-document':
    'Tài liệu phiên bản chưa được hỗ trợ trong Canvas',
  /** The text for the "Unlink from Canvas" action. */
  'action.unlink-document': 'Hủy liên kết khỏi Canvas',

  /** The text for the action button in the banner when the document is linked to Canvas. */
  'banner.edit-document-in-canvas': 'Chỉnh sửa trong Canvas',
  /** The text for the banner when the document is linked to Canvas. */
  'banner.linked-to-canvas': 'Tài liệu này đã được liên kết với Canvas',

  /** The text for the "Confirm document changes" dialog cancel button. */
  'dialog.confirm-document-changes.cancel': 'Hủy bỏ',
  /** The text for the "Confirm document changes" dialog confirm button. */
  'dialog.confirm-document-changes.confirm': 'Chấp nhận và tiếp tục',
  /** The description for the "Confirm document changes" dialog. */
  'dialog.confirm-document-changes.description':
    'Tài liệu này cần được cập nhật để tương thích với Canvas.\n Nội dung hiện tại có thể được chỉnh sửa hoặc loại bỏ như một phần của quá trình này.',
  /** The description for the "Confirm document changes" dialog footer. */
  'dialog.confirm-document-changes.footer-description':
    'Bạn có thể hủy liên kết với Canvas bất cứ lúc nào',
  /** The title for the "Confirm document changes" dialog. */
  'dialog.confirm-document-changes.title': 'Xác nhận thay đổi tài liệu',
  /** The text for the Link to Canvas dialog when there is a error. */
  'dialog.link-to-canvas.error': 'Không thể liên kết với Canvas',
  /** The text for the "Link to Canvas" dialog when the document is being redirected. */
  'dialog.link-to-canvas.redirecting': 'Đang đưa bạn đến Canvas để hoàn tất việc liên kết...',
  /** The title for the "Link to Canvas" dialog. */
  'dialog.link-to-canvas.title': 'Liên kết với Canvas',
  /** The text for the "Link to Canvas" dialog when the document is being validated. */
  'dialog.link-to-canvas.validating': 'Đang xác thực',
  /** The text for the "Unlink from Canvas" dialog cancel button. */
  'dialog.unlink-from-canvas.cancel': 'Hủy bỏ',
  /** The text for the "Unlink from Canvas" dialog description. */
  'dialog.unlink-from-canvas.description':
    'Một khi đã hủy liên kết, tài liệu này sẽ có thể chỉnh sửa ở đây và những chỉnh sửa trong tương lai trên Canvas sẽ không tự động ánh xạ với tài liệu này.',
  /** The text for the "Unlink from Canvas" dialog error message. */
  'dialog.unlink-from-canvas.error': 'Không thể hủy liên kết khỏi Canvas',
  /** The text for the "Unlink from Canvas" dialog success message. */
  'dialog.unlink-from-canvas.success': 'Đã hủy liên kết khỏi Canvas',
  /** The title for the "Unlink from Canvas" dialog. */
  'dialog.unlink-from-canvas.title': 'Hủy liên kết khỏi Canvas',
  /** The text for the "Unlink from Canvas" dialog unlink button. */
  'dialog.unlink-from-canvas.unlink-action': 'Hủy liên kết ngay',
  /** The text for the "Unlink from Canvas" dialog when the document is being unlinked. */
  'dialog.unlink-from-canvas.unlinking':
    'Bạn đang hủy liên kết <strong>“{{documentTitle}}”</strong> khỏi Canvas.',

  /** The text for the "Navigate to Canvas" dialog error message. */
  'navigate-to-canvas-doc.error.missing-permissions': 'Thiếu quyền để điều hướng đến Canvas',
})
