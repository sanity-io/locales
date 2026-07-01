import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** The status of the channel connection */
  'channel.status_connected': '已連線',
  /** The status of the channel connection */
  'channel.status_connecting': '連線中',
  /** The status of the channel connection */
  'channel.status_disconnected': '已斷線',
  /** The status of the channel connection */
  'channel.status_reconnecting': '重新連線中',

  /** The title shown above the document list */
  'document-list-pane.document-list.title': '此頁面上的文件',
  /** The text shown if the document list is unable to render */
  'document-list-pane.error.text': '無法呈現文件清單',
  /** The label for the ordering that lists documents in the order they appear on the page */
  'document-list-pane.ordering.by-appearance': undefined, // 'By appearance'
  /** The label for the ordering that lists documents by when they were last edited */
  'document-list-pane.ordering.last-edited': undefined, // 'Last edited'

  /** The text shown if the document editor is unable to render */
  'document-pane.error.text': '無法呈現文件編輯器',

  /** The text shown on the button for bypassing after a connection has failed */
  'error-card.continue-button.text': '仍然繼續',
  /** The text shown on the button for retrying after a connection has failed */
  'error-card.retry-button.text': '重試',
  /** The title on the card shown after a connection has failed */
  'error-card.title': '發生錯誤',

  /** The text shown when the document is used in multiple locations */
  'locations-banner.locations-count_other': '已在 {{count}} 個頁面上使用',
  /** The text shown when a resolver exists but the document is not used in any locations */
  'locations-banner.locations-count_zero': '未在任何頁面上使用',
  /** The text shown whilst the locations resolver is executing */
  'locations-banner.resolving.text': '正在解析位置...',

  /** The label shown on a main document in the list pane */
  'main-document.label': '主文件',
  /** The warning message text shown when a defined resolver fails to return a main document */
  'main-document.missing.text': '缺少 <Code>{{path}}</Code> 的主文件',

  /** The label for the tab that shows the document editor at narrow viewports */
  'narrow-tabs.content-tab.label': '結構',
  /** The label for the tab that shows the navigator at narrow viewports */
  'narrow-tabs.navigator-tab.label': '導覽器',
  /** The label for the tab that shows the preview at narrow viewports */
  'narrow-tabs.preview-tab.label': 'Presentation',

  /** The label for a generic error message */
  'presentation-error.label': '錯誤訊息',

  /** The toast description for the error message explaining that the iframe is blocked from loading due to a security mismatch. */
  'preview-frame.configuration.error.description':
    '預覽 iframe 已設定為載入 <Code>{{targetOrigin}}</Code>，但回報的來源為 <Code>{{reportedOrigin}}</Code>。Presentation Tool 基於安全考量無法連線至未知來源。請更新您的 <Code>presentationTool.allowOrigins</Code> 設定，以允許連線至 Visual Editing 和 Loaders。',
  /** The title of the error toast that shows when the preview iframe times out while waiting for a connection over comlink to establish, and the root cause is discovered to be that the iframe is loading on an URL origin that's not in the allow list. */
  'preview-frame.configuration.error.title': '預覽 URL 來源不符',
  /** The text shown when the preview frame cannot connect to Presentation */
  'preview-frame.connection.error.text': '無法連線至預覽',
  /** The text shown on the button for dismissing the error overlay after a timeout */
  'preview-frame.continue-button.text': '仍然繼續',
  /** The label for the loader's connection status */
  'preview-frame.loader.connection-status.label': 'Loader 連線狀態',
  /** The `aria-label` for the navigator toggle button */
  'preview-frame.navigator.toggle-button.aria-label': '切換導覽器',
  /** The tooltip text for the navigator toggle button */
  'preview-frame.navigator.toggle-button.tooltip': '切換導覽器',
  /** The label for the overlay's connection status */
  'preview-frame.overlay.connection-status.label': 'Overlay 連線狀態',
  /** The text shown on the overlay toggle button */
  'preview-frame.overlay.toggle-button.text': '編輯',
  /** The text shown on the overlay toggle tooltip when overlays are enabled */
  'preview-frame.overlay.toggle-button.tooltip_disable': '停用編輯 overlay',
  /** The text shown on the overlay toggle tooltip when overlays are disabled */
  'preview-frame.overlay.toggle-button.tooltip_enable': '啟用編輯 overlay',
  /** The text description for the published perspective switcher menu item */
  'preview-frame.perspective.published.text': '以已發佈的內容檢視此頁面',
  /** The `aria-label` for the refresh button */
  'preview-frame.refresh-button.aria-label': '重新整理預覽',
  /** The tooltip text for the refresh button */
  'preview-frame.refresh-button.tooltip': '重新整理預覽',
  /** The `aria-label` for the button that opens the share menu */
  'preview-frame.share-button.aria-label': '分享此預覽',
  /** Text describing the current status of the preview frame */
  'preview-frame.status_connecting': '連線中。',
  /** Text describing the current status of the preview frame */
  'preview-frame.status_loading': '載入中。',
  /** Text describing the current status of the preview frame */
  'preview-frame.status_refreshing': '重新整理中。',
  /** Text describing the current status of the preview frame */
  'preview-frame.status_reloading': '重新整理中。',
  /** Text describing the current status of the preview frame */
  'preview-frame.status_timeout': '無法連線，請查看瀏覽器主控台以取得更多資訊。',
  /** The `aria-label` for the button that switches viewport size */
  'preview-frame.viewport-button.aria-label': '切換視窗大小',
  /** The viewport size button tooltip text when switching to a full width viewport */
  'preview-frame.viewport-button.tooltip_full': '切換至全寬視窗',
  /** The viewport size button tooltip text when switching to a narrow viewport */
  'preview-frame.viewport-button.tooltip_narrow': '切換至窄版視窗',

  /** The validation error message shown when the preview location input is missing an origin */
  'preview-location-input.error_missing-origin': 'URL 必須以 {{origin}} 開頭',
  /** The validation error message shown when the preview location input's base path matches that of the studio */
  'preview-location-input.error_same-base-path':
    'URL 不能與 Studio {{basePath}} 使用相同的基礎路徑',

  /** The toast description for the error message explaining that the iframe won't navigate to the new preview URL due to an URL origin security mismatch. */
  'preview-search-param.configuration.error.description':
    '路由器想要導覽至 <Code>{{previewSearchParam}}</Code>，但來源 <Code>{{blockedOrigin}}</Code> 不被允許。請更新您的 <Code>presentationTool.allowOrigins</Code> 設定以允許此來源。',
  /** The title of the error toast that shows when attempting to navigate to a preview URL origin that's not in the allow list. */
  'preview-search-param.configuration.error.title': '已封鎖的預覽 URL',

  /** Error toast that notifies that URL Preview Secrets can't be generated as the user lacks ACL grants */
  'preview-url-secret.missing-grants': '您沒有建立 URL 預覽密鑰的權限。這可能會導致預覽載入失敗。',

  /** Menu item in the share preview menu that allows copying the current preview URL, if sharing is enabled */
  'share-preview-menu.copy-url.text': '複製預覽連結',
  /** Fallback message shown when the current user is not permitted to share previews */
  'share-preview-menu.error_missing-grants': '您沒有分享預覽的權限。',
  /** Error message toast that shows the current user does not have permission to toggle sharing of the current preview */
  'share-preview-menu.error_toggle-sharing': '您沒有切換此預覽分享狀態的權限',
  /** The text show below the QR Code SVG, with instructions on how to use it */
  'share-preview-menu.qr-code.instructions': '掃描 QR Code 以在您的手機上開啟預覽。',
  /** Placeholder message for the QR Code SVG when sharing is yet to be enabled */
  'share-preview-menu.qr-code.placeholder': 'QR Code 將顯示於此',
  /** The <title> for the QR Code SVG that shows a link to the current preview */
  'share-preview-menu.qr-code.title': '編碼網址的 QR Code：{{url}}',
  /** The first line of the label that renders next to the sharing toggle, it renders on two rows */
  'share-preview-menu.toggle-button.label_first-line': '分享此預覽',
  /** The second line of the label that renders next to the sharing toggle, it renders on two rows */
  'share-preview-menu.toggle-button.label_second-line': '給任何擁有連結的人',
  /** The text shown on the sharing toggle tooltip when sharing is enabled */
  'share-preview-menu.toggle-button.tooltip_disable': '停用分享',
  /** The text shown on the sharing toggle tooltip when sharing is disabled */
  'share-preview-menu.toggle-button.tooltip_enable': '啟用分享',

  /** The status of the clipboard operation when copying a URL */
  'share-url.clipboard.status_copying': '正在複製網址至剪貼簿…',
  /** The status of the clipboard operation when copying a URL */
  'share-url.clipboard.status_failed': '複製失敗',
  /** The status of the clipboard operation when copying a URL */
  'share-url.clipboard.status_success': '網址已複製至剪貼簿',
  /** The status of the clipboard operation when copying a URL */
  'share-url.clipboard.status_unsupported': '不支援剪貼簿',
  /** The share URL menu item text for opening a preview window */
  'share-url.menu-item.open.text': '開啟預覽',
})
