import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** The status of the channel connection */
  'channel.status_connected': '接続済み',
  /** The status of the channel connection */
  'channel.status_connecting': '接続中',
  /** The status of the channel connection */
  'channel.status_disconnected': '切断済み',
  /** The status of the channel connection */
  'channel.status_reconnecting': '再接続中',

  /** The title shown above the document list */
  'document-list-pane.document-list.title': 'このページのドキュメント',
  /** The text shown if the document list is unable to render */
  'document-list-pane.error.text': 'ドキュメントリストをレンダリングできませんでした',

  /** The text shown if the document editor is unable to render */
  'document-pane.error.text': 'ドキュメントエディターをレンダリングできませんでした',

  /** The text shown on the button for bypassing after a connection has failed */
  'error-card.continue-button.text': 'このまま続ける',
  /** The text shown on the button for retrying after a connection has failed */
  'error-card.retry-button.text': '再試行',
  /** The title on the card shown after a connection has failed */
  'error-card.title': 'エラーが発生しました',

  /** The text shown when the document is used in multiple locations */
  'locations-banner.locations-count_other': '{{count}} ページで使用中',
  /** The text shown when a resolver exists but the document is not used in any locations */
  'locations-banner.locations-count_zero': 'どのページでも使用されていません',
  /** The text shown whilst the locations resolver is executing */
  'locations-banner.resolving.text': 'ロケーションを解決中...',

  /** The label shown on a main document in the list pane */
  'main-document.label': 'メインドキュメント',
  /** The warning message text shown when a defined resolver fails to return a main document */
  'main-document.missing.text': '<Code>{{path}}</Code> のメインドキュメントがありません',

  /** The label for the tab that shows the document editor at narrow viewports */
  'narrow-tabs.content-tab.label': 'ストラクチャー',
  /** The label for the tab that shows the navigator at narrow viewports */
  'narrow-tabs.navigator-tab.label': 'ナビゲーター',
  /** The label for the tab that shows the preview at narrow viewports */
  'narrow-tabs.preview-tab.label': 'プレゼンテーション',

  /** The label for a generic error message */
  'presentation-error.label': 'エラーメッセージ',

  /** The toast description for the error message explaining that the iframe is blocked from loading due to a security mismatch. */
  'preview-frame.configuration.error.description':
    'プレビューiframeは <Code>{{targetOrigin}}</Code> を読み込むように設定されていますが、報告されたオリジンは <Code>{{reportedOrigin}}</Code> です。Presentation Toolはセキュリティ上の理由から不明なオリジンへの接続ができません。Visual EditingおよびLoadersへの接続を許可するには、<Code>presentationTool.allowOrigins</Code> の設定を更新してください。',
  /** The title of the error toast that shows when the preview iframe times out while waiting for a connection over comlink to establish, and the root cause is discovered to be that the iframe is loading on an URL origin that's not in the allow list. */
  'preview-frame.configuration.error.title': 'プレビューURLオリジンの不一致',
  /** The text shown when the preview frame cannot connect to Presentation */
  'preview-frame.connection.error.text': 'プレビューに接続できませんでした',
  /** The text shown on the button for dismissing the error overlay after a timeout */
  'preview-frame.continue-button.text': 'このまま続ける',
  /** The label for the loader's connection status */
  'preview-frame.loader.connection-status.label': 'Loader接続ステータス',
  /** The `aria-label` for the navigator toggle button */
  'preview-frame.navigator.toggle-button.aria-label': 'ナビゲーターの切り替え',
  /** The tooltip text for the navigator toggle button */
  'preview-frame.navigator.toggle-button.tooltip': 'ナビゲーターの切り替え',
  /** The label for the overlay's connection status */
  'preview-frame.overlay.connection-status.label': 'オーバーレイの接続ステータス',
  /** The text shown on the overlay toggle button */
  'preview-frame.overlay.toggle-button.text': '編集',
  /** The text shown on the overlay toggle tooltip when overlays are enabled */
  'preview-frame.overlay.toggle-button.tooltip_disable': '編集オーバーレイを無効にする',
  /** The text shown on the overlay toggle tooltip when overlays are disabled */
  'preview-frame.overlay.toggle-button.tooltip_enable': '編集オーバーレイを有効にする',
  /** The text description for the published perspective switcher menu item */
  'preview-frame.perspective.published.text': '公開済みコンテンツでこのページを表示する',
  /** The `aria-label` for the refresh button */
  'preview-frame.refresh-button.aria-label': 'プレビューを更新',
  /** The tooltip text for the refresh button */
  'preview-frame.refresh-button.tooltip': 'プレビューを更新',
  /** The `aria-label` for the button that opens the share menu */
  'preview-frame.share-button.aria-label': 'このプレビューを共有',
  /** Text describing the current status of the preview frame */
  'preview-frame.status_connecting': '接続中。',
  /** Text describing the current status of the preview frame */
  'preview-frame.status_loading': '読み込み中。',
  /** Text describing the current status of the preview frame */
  'preview-frame.status_refreshing': '更新中。',
  /** Text describing the current status of the preview frame */
  'preview-frame.status_reloading': '更新中。',
  /** Text describing the current status of the preview frame */
  'preview-frame.status_timeout': '接続できません。詳細はブラウザのコンソールを確認してください。',
  /** The `aria-label` for the button that switches viewport size */
  'preview-frame.viewport-button.aria-label': 'ビューポートサイズの切り替え',
  /** The viewport size button tooltip text when switching to a full width viewport */
  'preview-frame.viewport-button.tooltip_full': 'フルビューポートに切り替え',
  /** The viewport size button tooltip text when switching to a narrow viewport */
  'preview-frame.viewport-button.tooltip_narrow': 'ナロービューポートに切り替え',

  /** The validation error message shown when the preview location input is missing an origin */
  'preview-location-input.error_missing-origin': 'URLは{{origin}}で始まる必要があります',
  /** The validation error message shown when the preview location input's base path matches that of the studio */
  'preview-location-input.error_same-base-path':
    'URLにStudio {{basePath}}と同じベースパスを使用することはできません',

  /** The toast description for the error message explaining that the iframe won't navigate to the new preview URL due to an URL origin security mismatch. */
  'preview-search-param.configuration.error.description':
    'ルーターは<Code>{{previewSearchParam}}</Code>へのナビゲートを試みていますが、オリジン<Code>{{blockedOrigin}}</Code>は許可されていません。<Code>presentationTool.allowOrigins</Code>の設定を更新して許可してください。',
  /** The title of the error toast that shows when attempting to navigate to a preview URL origin that's not in the allow list. */
  'preview-search-param.configuration.error.title': 'ブロックされたプレビューURL',

  /** Error toast that notifies that URL Preview Secrets can't be generated as the user lacks ACL grants */
  'preview-url-secret.missing-grants':
    'URL Preview Secretsを作成する権限がありません。これによりプレビューの読み込みが失敗する可能性があります。',

  /** Menu item in the share preview menu that allows copying the current preview URL, if sharing is enabled */
  'share-preview-menu.copy-url.text': 'プレビューリンクをコピー',
  /** Fallback message shown when the current user is not permitted to share previews */
  'share-preview-menu.error_missing-grants': 'プレビューを共有する権限がありません。',
  /** Error message toast that shows the current user does not have permission to toggle sharing of the current preview */
  'share-preview-menu.error_toggle-sharing': 'このプレビューの共有を切り替える権限がありません',
  /** The text show below the QR Code SVG, with instructions on how to use it */
  'share-preview-menu.qr-code.instructions':
    'QR コードをスキャンして、スマートフォンでプレビューを開いてください。',
  /** Placeholder message for the QR Code SVG when sharing is yet to be enabled */
  'share-preview-menu.qr-code.placeholder': 'QR コードがここに表示されます',
  /** The <title> for the QR Code SVG that shows a link to the current preview */
  'share-preview-menu.qr-code.title': 'URL をエンコードした QR コード: {{url}}',
  /** The first line of the label that renders next to the sharing toggle, it renders on two rows */
  'share-preview-menu.toggle-button.label_first-line': 'このプレビューを共有する',
  /** The second line of the label that renders next to the sharing toggle, it renders on two rows */
  'share-preview-menu.toggle-button.label_second-line': 'リンクを持つすべての人と',
  /** The text shown on the sharing toggle tooltip when sharing is enabled */
  'share-preview-menu.toggle-button.tooltip_disable': '共有を無効にする',
  /** The text shown on the sharing toggle tooltip when sharing is disabled */
  'share-preview-menu.toggle-button.tooltip_enable': '共有を有効にする',

  /** The status of the clipboard operation when copying a URL */
  'share-url.clipboard.status_copying': 'URL をクリップボードにコピー中…',
  /** The status of the clipboard operation when copying a URL */
  'share-url.clipboard.status_failed': 'コピーに失敗しました',
  /** The status of the clipboard operation when copying a URL */
  'share-url.clipboard.status_success': 'URL がクリップボードにコピーされました',
  /** The status of the clipboard operation when copying a URL */
  'share-url.clipboard.status_unsupported': 'クリップボードはサポートされていません',
  /** The share URL menu item text for opening a preview window */
  'share-url.menu-item.open.text': 'プレビューを開く',
})
