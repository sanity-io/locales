import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** The status of the channel connection */
  'channel.status_connected': 'Đã kết nối',
  /** The status of the channel connection */
  'channel.status_connecting': 'Đang kết nối',
  /** The status of the channel connection */
  'channel.status_disconnected': 'Đã ngắt kết nối',
  /** The status of the channel connection */
  'channel.status_reconnecting': 'Đang kết nối lại',

  /** The title shown above the document list */
  'document-list-pane.document-list.title': 'Tài liệu trên trang này',
  /** The text shown if the document list is unable to render */
  'document-list-pane.error.text': 'Không thể hiển thị danh sách tài liệu',

  /** The text shown if the document editor is unable to render */
  'document-pane.error.text': 'Không thể hiển thị trình chỉnh sửa tài liệu',

  /** The text shown on the button for bypassing after a connection has failed */
  'error-card.continue-button.text': 'Tiếp tục dù sao',
  /** The text shown on the button for retrying after a connection has failed */
  'error-card.retry-button.text': 'Thử lại',
  /** The title on the card shown after a connection has failed */
  'error-card.title': 'Đã xảy ra lỗi',

  /** The text shown when the document is used in multiple locations */
  'locations-banner.locations-count_other': 'Được sử dụng trên {{count}} trang',
  /** The text shown when a resolver exists but the document is not used in any locations */
  'locations-banner.locations-count_zero': 'Không được sử dụng trên bất kỳ trang nào',
  /** The text shown whilst the locations resolver is executing */
  'locations-banner.resolving.text': 'Đang phân giải vị trí...',

  /** The label shown on a main document in the list pane */
  'main-document.label': 'Tài liệu chính',
  /** The warning message text shown when a defined resolver fails to return a main document */
  'main-document.missing.text': 'Thiếu tài liệu chính cho <Code>{{path}}</Code>',

  /** The label for the tab that shows the document editor at narrow viewports */
  'narrow-tabs.content-tab.label': 'Cấu trúc',
  /** The label for the tab that shows the navigator at narrow viewports */
  'narrow-tabs.navigator-tab.label': 'Navigator',
  /** The label for the tab that shows the preview at narrow viewports */
  'narrow-tabs.preview-tab.label': 'Presentation',

  /** The label for a generic error message */
  'presentation-error.label': 'Thông báo lỗi',

  /** The toast description for the error message explaining that the iframe is blocked from loading due to a security mismatch. */
  'preview-frame.configuration.error.description':
    'iframe xem trước được cấu hình để tải <Code>{{targetOrigin}}</Code>, nhưng nguồn gốc được báo cáo là <Code>{{reportedOrigin}}</Code>. Presentation Tool không thể kết nối với các nguồn gốc không xác định vì lý do bảo mật. Hãy cập nhật cấu hình <Code>presentationTool.allowOrigins</Code> của bạn để cho phép kết nối với Visual Editing và Loaders.',
  /** The title of the error toast that shows when the preview iframe times out while waiting for a connection over comlink to establish, and the root cause is discovered to be that the iframe is loading on an URL origin that's not in the allow list. */
  'preview-frame.configuration.error.title': 'Nguồn gốc URL xem trước không khớp',
  /** The text shown when the preview frame cannot connect to Presentation */
  'preview-frame.connection.error.text': 'Không thể kết nối với bản xem trước',
  /** The text shown on the button for dismissing the error overlay after a timeout */
  'preview-frame.continue-button.text': 'Tiếp tục dù sao',
  /** The label for the loader's connection status */
  'preview-frame.loader.connection-status.label': 'Trạng thái kết nối của Loader',
  /** The `aria-label` for the navigator toggle button */
  'preview-frame.navigator.toggle-button.aria-label': 'Bật/tắt navigator',
  /** The tooltip text for the navigator toggle button */
  'preview-frame.navigator.toggle-button.tooltip': 'Bật/tắt navigator',
  /** The label for the overlay's connection status */
  'preview-frame.overlay.connection-status.label': 'Trạng thái kết nối overlay',
  /** The text shown on the overlay toggle button */
  'preview-frame.overlay.toggle-button.text': 'Chỉnh sửa',
  /** The text shown on the overlay toggle tooltip when overlays are enabled */
  'preview-frame.overlay.toggle-button.tooltip_disable': 'Tắt overlay chỉnh sửa',
  /** The text shown on the overlay toggle tooltip when overlays are disabled */
  'preview-frame.overlay.toggle-button.tooltip_enable': 'Bật overlay chỉnh sửa',
  /** The text description for the published perspective switcher menu item */
  'preview-frame.perspective.published.text': 'Xem trang này với nội dung đã xuất bản',
  /** The `aria-label` for the refresh button */
  'preview-frame.refresh-button.aria-label': 'Làm mới bản xem trước',
  /** The tooltip text for the refresh button */
  'preview-frame.refresh-button.tooltip': 'Làm mới bản xem trước',
  /** The `aria-label` for the button that opens the share menu */
  'preview-frame.share-button.aria-label': 'Chia sẻ bản xem trước này',
  /** Text describing the current status of the preview frame */
  'preview-frame.status_connecting': 'Đang kết nối.',
  /** Text describing the current status of the preview frame */
  'preview-frame.status_loading': 'Đang tải.',
  /** Text describing the current status of the preview frame */
  'preview-frame.status_refreshing': 'Đang làm mới.',
  /** Text describing the current status of the preview frame */
  'preview-frame.status_reloading': 'Đang làm mới.',
  /** Text describing the current status of the preview frame */
  'preview-frame.status_timeout':
    'Không thể kết nối, hãy kiểm tra bảng điều khiển trình duyệt để biết thêm thông tin.',
  /** The `aria-label` for the button that switches viewport size */
  'preview-frame.viewport-button.aria-label': 'Bật/tắt kích thước khung nhìn',
  /** The viewport size button tooltip text when switching to a full width viewport */
  'preview-frame.viewport-button.tooltip_full': 'Chuyển sang khung nhìn toàn màn hình',
  /** The viewport size button tooltip text when switching to a narrow viewport */
  'preview-frame.viewport-button.tooltip_narrow': 'Chuyển sang khung nhìn hẹp',

  /** The validation error message shown when the preview location input is missing an origin */
  'preview-location-input.error_missing-origin': 'URL phải bắt đầu bằng {{origin}}',
  /** The validation error message shown when the preview location input's base path matches that of the studio */
  'preview-location-input.error_same-base-path':
    'URL không thể có cùng đường dẫn gốc với Studio {{basePath}}',

  /** The toast description for the error message explaining that the iframe won't navigate to the new preview URL due to an URL origin security mismatch. */
  'preview-search-param.configuration.error.description':
    'Router muốn điều hướng đến <Code>{{previewSearchParam}}</Code>, nhưng origin <Code>{{blockedOrigin}}</Code> không được phép. Hãy cập nhật cấu hình <Code>presentationTool.allowOrigins</Code> của bạn để cho phép nó.',
  /** The title of the error toast that shows when attempting to navigate to a preview URL origin that's not in the allow list. */
  'preview-search-param.configuration.error.title': 'URL xem trước bị chặn',

  /** Error toast that notifies that URL Preview Secrets can't be generated as the user lacks ACL grants */
  'preview-url-secret.missing-grants':
    'Bạn không có quyền tạo URL Preview Secrets. Điều này có thể khiến bản xem trước không tải được.',

  /** Menu item in the share preview menu that allows copying the current preview URL, if sharing is enabled */
  'share-preview-menu.copy-url.text': 'Sao chép liên kết xem trước',
  /** Fallback message shown when the current user is not permitted to share previews */
  'share-preview-menu.error_missing-grants': 'Bạn không có quyền chia sẻ bản xem trước. ',
  /** Error message toast that shows the current user does not have permission to toggle sharing of the current preview */
  'share-preview-menu.error_toggle-sharing': 'Bạn không có quyền bật/tắt chia sẻ bản xem trước này',
  /** The text show below the QR Code SVG, with instructions on how to use it */
  'share-preview-menu.qr-code.instructions':
    'Quét mã QR để mở bản xem trước trên điện thoại của bạn.',
  /** Placeholder message for the QR Code SVG when sharing is yet to be enabled */
  'share-preview-menu.qr-code.placeholder': 'Mã QR sẽ xuất hiện ở đây',
  /** The <title> for the QR Code SVG that shows a link to the current preview */
  'share-preview-menu.qr-code.title': 'Mã QR mã hóa URL: {{url}}',
  /** The first line of the label that renders next to the sharing toggle, it renders on two rows */
  'share-preview-menu.toggle-button.label_first-line': 'Chia sẻ bản xem trước này',
  /** The second line of the label that renders next to the sharing toggle, it renders on two rows */
  'share-preview-menu.toggle-button.label_second-line': 'với bất kỳ ai có liên kết',
  /** The text shown on the sharing toggle tooltip when sharing is enabled */
  'share-preview-menu.toggle-button.tooltip_disable': 'Tắt chia sẻ',
  /** The text shown on the sharing toggle tooltip when sharing is disabled */
  'share-preview-menu.toggle-button.tooltip_enable': 'Bật chia sẻ',

  /** The status of the clipboard operation when copying a URL */
  'share-url.clipboard.status_copying': 'Đang sao chép URL vào clipboard…',
  /** The status of the clipboard operation when copying a URL */
  'share-url.clipboard.status_failed': 'Sao chép thất bại',
  /** The status of the clipboard operation when copying a URL */
  'share-url.clipboard.status_success': 'URL đã được sao chép vào clipboard',
  /** The status of the clipboard operation when copying a URL */
  'share-url.clipboard.status_unsupported': 'Clipboard không được hỗ trợ',
  /** The share URL menu item text for opening a preview window */
  'share-url.menu-item.open.text': 'Mở bản xem trước',
})
