import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** The status of the channel connection */
  'channel.status_connected': '已连接',
  /** The status of the channel connection */
  'channel.status_connecting': '连接中',
  /** The status of the channel connection */
  'channel.status_disconnected': '已断开连接',
  /** The status of the channel connection */
  'channel.status_reconnecting': '重新连接中',

  /** The title shown above the document list */
  'document-list-pane.document-list.title': '此页面上的文档',
  /** The text shown if the document list is unable to render */
  'document-list-pane.error.text': '无法渲染文档列表',

  /** The text shown if the document editor is unable to render */
  'document-pane.error.text': '无法渲染文档编辑器',

  /** The text shown on the button for bypassing after a connection has failed */
  'error-card.continue-button.text': '仍然继续',
  /** The text shown on the button for retrying after a connection has failed */
  'error-card.retry-button.text': '重试',
  /** The title on the card shown after a connection has failed */
  'error-card.title': '发生错误',

  /** The text shown when the document is used in multiple locations */
  'locations-banner.locations-count_other': '已在 {{count}} 个页面上使用',
  /** The text shown when a resolver exists but the document is not used in any locations */
  'locations-banner.locations-count_zero': '未在任何页面上使用',
  /** The text shown whilst the locations resolver is executing */
  'locations-banner.resolving.text': '正在解析位置...',

  /** The label shown on a main document in the list pane */
  'main-document.label': '主文档',
  /** The warning message text shown when a defined resolver fails to return a main document */
  'main-document.missing.text': '缺少 <Code>{{path}}</Code> 的主文档',

  /** The label for the tab that shows the document editor at narrow viewports */
  'narrow-tabs.content-tab.label': '结构',
  /** The label for the tab that shows the navigator at narrow viewports */
  'narrow-tabs.navigator-tab.label': '导航器',
  /** The label for the tab that shows the preview at narrow viewports */
  'narrow-tabs.preview-tab.label': 'Presentation',

  /** The label for a generic error message */
  'presentation-error.label': '错误消息',

  /** The toast description for the error message explaining that the iframe is blocked from loading due to a security mismatch. */
  'preview-frame.configuration.error.description':
    '预览 iframe 已配置为加载 <Code>{{targetOrigin}}</Code>，但报告的来源为 <Code>{{reportedOrigin}}</Code>。出于安全原因，Presentation Tool 无法连接到未知来源。请更新您的 <Code>presentationTool.allowOrigins</Code> 配置，以允许连接到 Visual Editing 和 Loaders。',
  /** The title of the error toast that shows when the preview iframe times out while waiting for a connection over comlink to establish, and the root cause is discovered to be that the iframe is loading on an URL origin that's not in the allow list. */
  'preview-frame.configuration.error.title': '预览 URL 来源不匹配',
  /** The text shown when the preview frame cannot connect to Presentation */
  'preview-frame.connection.error.text': '无法连接到预览',
  /** The text shown on the button for dismissing the error overlay after a timeout */
  'preview-frame.continue-button.text': '仍然继续',
  /** The label for the loader's connection status */
  'preview-frame.loader.connection-status.label': 'Loader 连接状态',
  /** The `aria-label` for the navigator toggle button */
  'preview-frame.navigator.toggle-button.aria-label': '切换导航器',
  /** The tooltip text for the navigator toggle button */
  'preview-frame.navigator.toggle-button.tooltip': '切换导航器',
  /** The label for the overlay's connection status */
  'preview-frame.overlay.connection-status.label': 'Overlay 连接状态',
  /** The text shown on the overlay toggle button */
  'preview-frame.overlay.toggle-button.text': '编辑',
  /** The text shown on the overlay toggle tooltip when overlays are enabled */
  'preview-frame.overlay.toggle-button.tooltip_disable': '禁用编辑 overlay',
  /** The text shown on the overlay toggle tooltip when overlays are disabled */
  'preview-frame.overlay.toggle-button.tooltip_enable': '启用编辑 overlay',
  /** The text description for the published perspective switcher menu item */
  'preview-frame.perspective.published.text': '查看此页面的已发布内容',
  /** The `aria-label` for the refresh button */
  'preview-frame.refresh-button.aria-label': '刷新预览',
  /** The tooltip text for the refresh button */
  'preview-frame.refresh-button.tooltip': '刷新预览',
  /** The `aria-label` for the button that opens the share menu */
  'preview-frame.share-button.aria-label': '分享此预览',
  /** Text describing the current status of the preview frame */
  'preview-frame.status_connecting': '连接中。',
  /** Text describing the current status of the preview frame */
  'preview-frame.status_loading': '加载中。',
  /** Text describing the current status of the preview frame */
  'preview-frame.status_refreshing': '刷新中。',
  /** Text describing the current status of the preview frame */
  'preview-frame.status_reloading': '刷新中。',
  /** Text describing the current status of the preview frame */
  'preview-frame.status_timeout': '无法连接，请查看浏览器控制台以获取更多信息。',
  /** The `aria-label` for the button that switches viewport size */
  'preview-frame.viewport-button.aria-label': '切换视口大小',
  /** The viewport size button tooltip text when switching to a full width viewport */
  'preview-frame.viewport-button.tooltip_full': '切换到全宽视口',
  /** The viewport size button tooltip text when switching to a narrow viewport */
  'preview-frame.viewport-button.tooltip_narrow': '切换到窄视口',

  /** The validation error message shown when the preview location input is missing an origin */
  'preview-location-input.error_missing-origin': 'URL 必须以 {{origin}} 开头',
  /** The validation error message shown when the preview location input's base path matches that of the studio */
  'preview-location-input.error_same-base-path':
    'URL 不能与 Studio {{basePath}} 具有相同的基础路径',

  /** The toast description for the error message explaining that the iframe won't navigate to the new preview URL due to an URL origin security mismatch. */
  'preview-search-param.configuration.error.description':
    '路由器想要导航到 <Code>{{previewSearchParam}}</Code>，但来源 <Code>{{blockedOrigin}}</Code> 不被允许。请更新您的 <Code>presentationTool.allowOrigins</Code> 配置以允许该来源。',
  /** The title of the error toast that shows when attempting to navigate to a preview URL origin that's not in the allow list. */
  'preview-search-param.configuration.error.title': '已阻止的预览 URL',

  /** Error toast that notifies that URL Preview Secrets can't be generated as the user lacks ACL grants */
  'preview-url-secret.missing-grants': '您没有权限创建 URL 预览密钥。这可能会导致预览加载失败。',

  /** Menu item in the share preview menu that allows copying the current preview URL, if sharing is enabled */
  'share-preview-menu.copy-url.text': '复制预览链接',
  /** Fallback message shown when the current user is not permitted to share previews */
  'share-preview-menu.error_missing-grants': '您没有权限分享预览。',
  /** Error message toast that shows the current user does not have permission to toggle sharing of the current preview */
  'share-preview-menu.error_toggle-sharing': '您没有权限切换此预览的分享状态',
  /** The text show below the QR Code SVG, with instructions on how to use it */
  'share-preview-menu.qr-code.instructions': '扫描二维码在手机上打开预览。',
  /** Placeholder message for the QR Code SVG when sharing is yet to be enabled */
  'share-preview-menu.qr-code.placeholder': '二维码将显示在此处',
  /** The <title> for the QR Code SVG that shows a link to the current preview */
  'share-preview-menu.qr-code.title': '编码了以下 URL 的二维码：{{url}}',
  /** The first line of the label that renders next to the sharing toggle, it renders on two rows */
  'share-preview-menu.toggle-button.label_first-line': '分享此预览',
  /** The second line of the label that renders next to the sharing toggle, it renders on two rows */
  'share-preview-menu.toggle-button.label_second-line': '给任何拥有链接的人',
  /** The text shown on the sharing toggle tooltip when sharing is enabled */
  'share-preview-menu.toggle-button.tooltip_disable': '禁用分享',
  /** The text shown on the sharing toggle tooltip when sharing is disabled */
  'share-preview-menu.toggle-button.tooltip_enable': '启用分享',

  /** The status of the clipboard operation when copying a URL */
  'share-url.clipboard.status_copying': '正在将 URL 复制到剪贴板…',
  /** The status of the clipboard operation when copying a URL */
  'share-url.clipboard.status_failed': '复制失败',
  /** The status of the clipboard operation when copying a URL */
  'share-url.clipboard.status_success': 'URL 已复制到剪贴板',
  /** The status of the clipboard operation when copying a URL */
  'share-url.clipboard.status_unsupported': '不支持剪贴板',
  /** The share URL menu item text for opening a preview window */
  'share-url.menu-item.open.text': '打开预览',
})
