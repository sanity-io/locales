import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** The status of the channel connection */
  'channel.status_connected': 'Bağlandı',
  /** The status of the channel connection */
  'channel.status_connecting': 'Bağlanıyor',
  /** The status of the channel connection */
  'channel.status_disconnected': 'Bağlantı Kesildi',
  /** The status of the channel connection */
  'channel.status_reconnecting': 'Yeniden Bağlanıyor',

  /** The title shown above the document list */
  'document-list-pane.document-list.title': 'Bu sayfadaki belgeler',
  /** The text shown if the document list is unable to render */
  'document-list-pane.error.text': 'Belge listesi oluşturulamadı',

  /** The text shown if the document editor is unable to render */
  'document-pane.error.text': 'Belge düzenleyici oluşturulamadı',

  /** The text shown on the button for bypassing after a connection has failed */
  'error-card.continue-button.text': 'Yine de devam et',
  /** The text shown on the button for retrying after a connection has failed */
  'error-card.retry-button.text': 'Yeniden dene',
  /** The title on the card shown after a connection has failed */
  'error-card.title': 'Bir hata oluştu',

  /** The text shown when the document is used in a single location */
  'locations-banner.locations-count_one': 'Bir sayfada kullanılıyor',
  /** The text shown when the document is used in multiple locations */
  'locations-banner.locations-count_other': '{{count}} sayfada kullanılıyor',
  /** The text shown when a resolver exists but the document is not used in any locations */
  'locations-banner.locations-count_zero': 'Hiçbir sayfada kullanılmıyor',
  /** The text shown whilst the locations resolver is executing */
  'locations-banner.resolving.text': 'Konumlar çözümleniyor...',

  /** The label shown on a main document in the list pane */
  'main-document.label': 'Ana belge',
  /** The warning message text shown when a defined resolver fails to return a main document */
  'main-document.missing.text': '<Code>{{path}}</Code> için ana belge eksik',

  /** The label for the tab that shows the document editor at narrow viewports */
  'narrow-tabs.content-tab.label': 'Yapı',
  /** The label for the tab that shows the navigator at narrow viewports */
  'narrow-tabs.navigator-tab.label': 'Gezgin',
  /** The label for the tab that shows the preview at narrow viewports */
  'narrow-tabs.preview-tab.label': 'Sunum',

  /** The label for a generic error message */
  'presentation-error.label': 'Hata mesajı',

  /** The toast description for the error message explaining that the iframe is blocked from loading due to a security mismatch. */
  'preview-frame.configuration.error.description':
    "Önizleme iframe'i <Code>{{targetOrigin}}</Code> adresini yükleyecek şekilde yapılandırılmış, ancak bildirilen kaynak <Code>{{reportedOrigin}}</Code>. Presentation Tool, güvenlik amacıyla bilinmeyen kaynaklara bağlanamaz. Visual Editing ve Loader'lara bağlanmaya izin vermek için <Code>presentationTool.allowOrigins</Code> yapılandırmanızı güncelleyin.",
  /** The title of the error toast that shows when the preview iframe times out while waiting for a connection over comlink to establish, and the root cause is discovered to be that the iframe is loading on an URL origin that's not in the allow list. */
  'preview-frame.configuration.error.title': 'Önizleme URL kaynağı uyuşmazlığı',
  /** The text shown when the preview frame cannot connect to Presentation */
  'preview-frame.connection.error.text': 'Önizlemeye bağlanılamadı',
  /** The text shown on the button for dismissing the error overlay after a timeout */
  'preview-frame.continue-button.text': 'Yine de devam et',
  /** The label for the loader's connection status */
  'preview-frame.loader.connection-status.label': 'Loader bağlantı durumu',
  /** The `aria-label` for the navigator toggle button */
  'preview-frame.navigator.toggle-button.aria-label': 'Gezgini aç/kapat',
  /** The tooltip text for the navigator toggle button */
  'preview-frame.navigator.toggle-button.tooltip': 'Gezgini aç/kapat',
  /** The label for the overlay's connection status */
  'preview-frame.overlay.connection-status.label': 'Katman bağlantı durumu',
  /** The text shown on the overlay toggle button */
  'preview-frame.overlay.toggle-button.text': 'Düzenle',
  /** The text shown on the overlay toggle tooltip when overlays are enabled */
  'preview-frame.overlay.toggle-button.tooltip_disable': 'Düzenleme katmanını devre dışı bırak',
  /** The text shown on the overlay toggle tooltip when overlays are disabled */
  'preview-frame.overlay.toggle-button.tooltip_enable': 'Düzenleme katmanını etkinleştir',
  /** The text description for the published perspective switcher menu item */
  'preview-frame.perspective.published.text': 'Bu sayfayı yayımlanmış içerikle görüntüle',
  /** The `aria-label` for the refresh button */
  'preview-frame.refresh-button.aria-label': 'Önizlemeyi yenile',
  /** The tooltip text for the refresh button */
  'preview-frame.refresh-button.tooltip': 'Önizlemeyi yenile',
  /** The `aria-label` for the button that opens the share menu */
  'preview-frame.share-button.aria-label': 'Bu önizlemeyi paylaş',
  /** Text describing the current status of the preview frame */
  'preview-frame.status_connecting': 'Bağlanıyor.',
  /** Text describing the current status of the preview frame */
  'preview-frame.status_loading': 'Yükleniyor.',
  /** Text describing the current status of the preview frame */
  'preview-frame.status_refreshing': 'Yenileniyor.',
  /** Text describing the current status of the preview frame */
  'preview-frame.status_reloading': 'Yenileniyor.',
  /** Text describing the current status of the preview frame */
  'preview-frame.status_timeout':
    'Bağlanılamıyor, daha fazla bilgi için tarayıcı konsolunu kontrol edin.',
  /** The `aria-label` for the button that switches viewport size */
  'preview-frame.viewport-button.aria-label': 'Görünüm alanı boyutunu aç/kapat',
  /** The viewport size button tooltip text when switching to a full width viewport */
  'preview-frame.viewport-button.tooltip_full': 'Tam görünüm alanına geç',
  /** The viewport size button tooltip text when switching to a narrow viewport */
  'preview-frame.viewport-button.tooltip_narrow': 'Dar görünüm alanına geç',

  /** The validation error message shown when the preview location input is missing an origin */
  'preview-location-input.error_missing-origin': 'URL, {{origin}} ile başlamalıdır',
  /** The validation error message shown when the preview location input's base path matches that of the studio */
  'preview-location-input.error_same-base-path':
    'URL, Studio {{basePath}} ile aynı temel yola sahip olamaz',

  /** The toast description for the error message explaining that the iframe won't navigate to the new preview URL due to an URL origin security mismatch. */
  'preview-search-param.configuration.error.description':
    'Yönlendirici <Code>{{previewSearchParam}}</Code> adresine gitmek istiyor, ancak <Code>{{blockedOrigin}}</Code> kaynağına izin verilmiyor. İzin vermek için <Code>presentationTool.allowOrigins</Code> yapılandırmanızı güncelleyin.',
  /** The title of the error toast that shows when attempting to navigate to a preview URL origin that's not in the allow list. */
  'preview-search-param.configuration.error.title': "Engellenen önizleme URL'si",

  /** Error toast that notifies that URL Preview Secrets can't be generated as the user lacks ACL grants */
  'preview-url-secret.missing-grants':
    'URL Önizleme Gizli Anahtarları oluşturma izniniz yok. Bu durum büyük ihtimalle önizlemenin yüklenmesini engelleyecektir.',

  /** Menu item in the share preview menu that allows copying the current preview URL, if sharing is enabled */
  'share-preview-menu.copy-url.text': 'Önizleme bağlantısını kopyala',
  /** Fallback message shown when the current user is not permitted to share previews */
  'share-preview-menu.error_missing-grants': 'Önizlemeleri paylaşma izniniz yok.',
  /** Error message toast that shows the current user does not have permission to toggle sharing of the current preview */
  'share-preview-menu.error_toggle-sharing': 'Bu önizlemenin paylaşımını değiştirme izniniz yok',
  /** The text show below the QR Code SVG, with instructions on how to use it */
  'share-preview-menu.qr-code.instructions': 'Önizlemeyi telefonunuzda açmak için QR Kodu tarayın.',
  /** Placeholder message for the QR Code SVG when sharing is yet to be enabled */
  'share-preview-menu.qr-code.placeholder': 'QR kodu burada görünecek',
  /** The <title> for the QR Code SVG that shows a link to the current preview */
  'share-preview-menu.qr-code.title': "URL'yi kodlayan bir QR Kodu: {{url}}",
  /** The first line of the label that renders next to the sharing toggle, it renders on two rows */
  'share-preview-menu.toggle-button.label_first-line': 'Bu önizlemeyi paylaş',
  /** The second line of the label that renders next to the sharing toggle, it renders on two rows */
  'share-preview-menu.toggle-button.label_second-line': 'bağlantıya sahip herkesle',
  /** The text shown on the sharing toggle tooltip when sharing is enabled */
  'share-preview-menu.toggle-button.tooltip_disable': 'Paylaşımı devre dışı bırak',
  /** The text shown on the sharing toggle tooltip when sharing is disabled */
  'share-preview-menu.toggle-button.tooltip_enable': 'Paylaşımı etkinleştir',

  /** The status of the clipboard operation when copying a URL */
  'share-url.clipboard.status_copying': 'URL panoya kopyalanıyor…',
  /** The status of the clipboard operation when copying a URL */
  'share-url.clipboard.status_failed': 'Kopyalama başarısız oldu',
  /** The status of the clipboard operation when copying a URL */
  'share-url.clipboard.status_success': 'URL panoya kopyalandı',
  /** The status of the clipboard operation when copying a URL */
  'share-url.clipboard.status_unsupported': 'Pano desteklenmiyor',
  /** The share URL menu item text for opening a preview window */
  'share-url.menu-item.open.text': 'Önizlemeyi aç',
})
