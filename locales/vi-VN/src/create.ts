import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Text in badge above header in Create Link info popover */
  'create-link-info-popover.eyebrow-badge': 'Truy cập sớm',
  /** Text above header in Create Link info popover */
  'create-link-info-popover.eyebrow-title': 'Sanity Create',
  /** Header in Create Link info popover */
  'create-link-info-popover.header': 'Tác giả đặt ý tưởng lên hàng đầu',
  /** Informational text in Create Link info popover */
  'create-link-info-popover.text':
    'Viết một cách tự nhiên trong trình soạn thảo được hỗ trợ bởi AI. Nội dung của bạn tự động được ánh xạ vào các trường của Studio khi bạn đánh máy.',

  /** Tooltip for Create Link button */
  'create-link-info.tooltip': 'Tìm hiểu thêm',

  /** Edit in Create button text */
  'edit-in-create-button.text': 'Chỉnh sửa với Sanity Create',

  /** Details for the "Linking in progress" dialog */
  'linking-in-progress-dialog.details':
    'Một khi đã liên kết, các chỉnh sửa của bạn sẽ xuất hiện ở đây theo thời gian thực.',
  /** Header of the "Linking in progress" dialog */
  'linking-in-progress-dialog.header': 'Đang liên kết với Sanity Create',
  /** Lede text for the "Linking in progress" dialog */
  'linking-in-progress-dialog.lede':
    'Quay lại Sanity Create. Tài liệu của bạn sẽ được đồng bộ hóa tự động (thường mất vài giây).',
  /** "Linking in progress" troubleshooting button title */
  'linking-in-progress-dialog.troubleshooting.button.title': 'Liên kết bị trì hoãn?',
  /** "Linking in progress" troubleshooting content */
  'linking-in-progress-dialog.troubleshooting.content':
    'Kiểm tra xem cửa sổ Sanity Create của bạn có còn mở không, hoặc nếu quá trình có vẻ bị kẹt. Nếu vấn đề vẫn tiếp tục, hãy thử làm mới Studio và thử lại.',

  /** Subtitle of the "Start writing in Create" banner */
  'start-in-create-banner.subtitle':
    'Một trình soạn thảo tự do, được hỗ trợ bởi AI đồng bộ trực tiếp với tài liệu Studio của bạn.',
  /** Header of the "Start writing in Create" banner */
  'start-in-create-banner.title': 'Bắt đầu với Sanity Create',
  /** Header badge of the "Start writing in Create" banner */
  'start-in-create-banner.title-badge': 'Truy cập sớm',

  /** CTA in "Start writing in Create" dialog: Learn more */
  'start-in-create-dialog.cta.learn-more': 'Tìm hiểu thêm',
  /** Toast error message when we dont have a resolved Sanity Create url*/
  'start-in-create-dialog.error-toast.unresolved-url': 'Không thể xác định URL của Sanity Create.',

  /** "Start in Sanity Create" link button text */
  'start-in-create-link.label': 'Bắt đầu với Create',

  /** Text for the document pane banner informing users that the document is linked to Sanity Create */
  'studio-create-link-banner.text': 'Tài liệu này được liên kết với Sanity Create',

  /** Unlink document from Sanity Create button text */
  'unlink-from-create-button.text': 'Hủy liên kết',

  /** Unlink from Create dialog: Cancel button text */
  'unlink-from-create-dialog.cancel.text': 'Hủy bỏ',
  /** Unlink from Create dialog: Document title used if no other title can be determined */
  'unlink-from-create-dialog.document.untitled.text': 'Không tiêu đề',
  /** Unlink from Create dialog – first informational paragraph */
  'unlink-from-create-dialog.first-paragraph':
    'Bạn đang hủy liên kết “<strong>{{title}}</strong>” khỏi Sanity Create để có thể chỉnh sửa ở đây.',
  /** Unlink from Create dialog header */
  'unlink-from-create-dialog.header': 'Chuyển chỉnh sửa sang Studio?',
  /** Unlink from Create dialog – second informational paragraph */
  'unlink-from-create-dialog.second-paragraph':
    'Bạn sẽ giữ nội dung của mình ở cả hai nơi. Bất kỳ thay đổi mới nào trong Sanity Create sẽ ngừng đồng bộ với Studio này.',
  /** Unlink from Create dialog: Unlink button text */
  'unlink-from-create-dialog.unlink.text': 'Ngắt liên kết ngay',
})
