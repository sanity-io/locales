import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** The status of the channel connection */
  'channel.status_connected': 'Подключено',
  /** The status of the channel connection */
  'channel.status_connecting': 'Подключение',
  /** The status of the channel connection */
  'channel.status_disconnected': 'Отключено',
  /** The status of the channel connection */
  'channel.status_reconnecting': 'Повторное подключение',

  /** The title shown above the document list */
  'document-list-pane.document-list.title': 'Документтер осы бетте',
  /** The text shown if the document list is unable to render */
  'document-list-pane.error.text': 'Документ тізімін көрсету мүмкін болмады',

  /** The text shown if the document editor is unable to render */
  'document-pane.error.text': 'Документ редакторын көрсету мүмкін болмады',

  /** The text shown on the button for bypassing after a connection has failed */
  'error-card.continue-button.text': 'Дегенмен жалғастыру',
  /** The text shown on the button for retrying after a connection has failed */
  'error-card.retry-button.text': 'Қайталап көру',
  /** The title on the card shown after a connection has failed */
  'error-card.title': 'Қате орын алды',

  /** The text shown when the document is used in a single location */
  'locations-banner.locations-count_one': 'Бір бетте қолданылған',
  /** The text shown when a resolver exists but the document is not used in any locations */
  'locations-banner.locations-count_zero': 'Ешбір бетте қолданылмаған',
  /** The text shown whilst the locations resolver is executing */
  'locations-banner.resolving.text': 'Орындар анықталуда...',

  /** The label shown on a main document in the list pane */
  'main-document.label': 'Негізгі құжат',
  /** The warning message text shown when a defined resolver fails to return a main document */
  'main-document.missing.text': '<Code>{{path}}</Code> үшін негізгі құжат жоқ',

  /** The label for the tab that shows the document editor at narrow viewports */
  'narrow-tabs.content-tab.label': 'Құрылым',
  /** The label for the tab that shows the navigator at narrow viewports */
  'narrow-tabs.navigator-tab.label': 'Навигатор',
  /** The label for the tab that shows the preview at narrow viewports */
  'narrow-tabs.preview-tab.label': 'Презентация',

  /** The label for a generic error message */
  'presentation-error.label': 'Қате хабары',

  /** The toast description for the error message explaining that the iframe is blocked from loading due to a security mismatch. */
  'preview-frame.configuration.error.description':
    'Алдын ала қарау iframe <Code>{{targetOrigin}}</Code> жүктеуге конфигурацияланған, бірақ хабарланған шығу тегі <Code>{{reportedOrigin}}</Code>. Presentation Tool қауіпсіздік мақсатында белгісіз шығу тегіне қосыла алмайды. Visual Editing және Loaders-ке қосылуға рұқсат беру үшін <Code>presentationTool.allowOrigins</Code> конфигурациясын жаңартыңыз.',
  /** The title of the error toast that shows when the preview iframe times out while waiting for a connection over comlink to establish, and the root cause is discovered to be that the iframe is loading on an URL origin that's not in the allow list. */
  'preview-frame.configuration.error.title': 'Алдын ала қарау URL шығу тегі сәйкес келмейді',
  /** The text shown when the preview frame cannot connect to Presentation */
  'preview-frame.connection.error.text': 'Алдын ала қарауға қосылу мүмкін болмады',
  /** The text shown on the button for dismissing the error overlay after a timeout */
  'preview-frame.continue-button.text': 'Дегенмен жалғастыру',
  /** The label for the loader's connection status */
  'preview-frame.loader.connection-status.label': 'Loader қосылым күйі',
  /** The `aria-label` for the navigator toggle button */
  'preview-frame.navigator.toggle-button.aria-label': 'Навигаторды қосу/өшіру',
  /** The tooltip text for the navigator toggle button */
  'preview-frame.navigator.toggle-button.tooltip': 'Навигаторды ауыстыру',
  /** The label for the overlay's connection status */
  'preview-frame.overlay.connection-status.label': 'Overlay қосылым күйі',
  /** The text shown on the overlay toggle button */
  'preview-frame.overlay.toggle-button.text': 'Өңдеу',
  /** The text shown on the overlay toggle tooltip when overlays are enabled */
  'preview-frame.overlay.toggle-button.tooltip_disable': 'Өңдеу overlay өшіру',
  /** The text shown on the overlay toggle tooltip when overlays are disabled */
  'preview-frame.overlay.toggle-button.tooltip_enable': 'Өңдеу overlay қосу',
  /** The text description for the published perspective switcher menu item */
  'preview-frame.perspective.published.text': 'Бұл бетті жарияланған мазмұнмен қарау',
  /** The `aria-label` for the refresh button */
  'preview-frame.refresh-button.aria-label': 'Алдын ала қарауды жаңарту',
  /** The tooltip text for the refresh button */
  'preview-frame.refresh-button.tooltip': 'Алдын ала қарауды жаңарту',
  /** The `aria-label` for the button that opens the share menu */
  'preview-frame.share-button.aria-label': 'Осы алдын ала қарауды бөлісу',
  /** Text describing the current status of the preview frame */
  'preview-frame.status_connecting': 'Қосылуда.',
  /** Text describing the current status of the preview frame */
  'preview-frame.status_loading': 'Жүктелуде.',
  /** Text describing the current status of the preview frame */
  'preview-frame.status_refreshing': 'Жаңартылуда.',
  /** Text describing the current status of the preview frame */
  'preview-frame.status_reloading': 'Жаңартылуда.',
  /** Text describing the current status of the preview frame */
  'preview-frame.status_timeout':
    'Қосылу мүмкін болмады, қосымша ақпарат алу үшін браузер консолін тексеріңіз.',
  /** The `aria-label` for the button that switches viewport size */
  'preview-frame.viewport-button.aria-label': 'Viewport өлшемін ауыстыру',
  /** The viewport size button tooltip text when switching to a full width viewport */
  'preview-frame.viewport-button.tooltip_full': 'Толық viewport-қа ауысу',
  /** The viewport size button tooltip text when switching to a narrow viewport */
  'preview-frame.viewport-button.tooltip_narrow': 'Тар viewport-қа ауысу',

  /** The validation error message shown when the preview location input is missing an origin */
  'preview-location-input.error_missing-origin': 'URL мекенжайы {{origin}} деп басталуы керек',
  /** The validation error message shown when the preview location input's base path matches that of the studio */
  'preview-location-input.error_same-base-path':
    'URL мекенжайының Studio {{basePath}} сияқты бірдей негізгі жолы болмауы керек',

  /** The toast description for the error message explaining that the iframe won't navigate to the new preview URL due to an URL origin security mismatch. */
  'preview-search-param.configuration.error.description':
    'Маршрутизатор <Code>{{previewSearchParam}}</Code> мекенжайына өтуге тырысуда, бірақ <Code>{{blockedOrigin}}</Code> шығу тегіне рұқсат берілмеген. Рұқсат беру үшін <Code>presentationTool.allowOrigins</Code> конфигурациясын жаңартыңыз.',
  /** The title of the error toast that shows when attempting to navigate to a preview URL origin that's not in the allow list. */
  'preview-search-param.configuration.error.title': 'Алдын ала қарау URL мекенжайы бұғатталды',

  /** Error toast that notifies that URL Preview Secrets can't be generated as the user lacks ACL grants */
  'preview-url-secret.missing-grants':
    'Сізде URL Preview Secrets жасауға рұқсат жоқ. Бұл алдын ала қарауды жүктеуде сәтсіздікке әкелуі мүмкін.',

  /** Menu item in the share preview menu that allows copying the current preview URL, if sharing is enabled */
  'share-preview-menu.copy-url.text': 'Алдын ала қарау сілтемесін көшіру',
  /** Fallback message shown when the current user is not permitted to share previews */
  'share-preview-menu.error_missing-grants': 'Сізде алдын ала қарауларды бөлісуге рұқсат жоқ. ',
  /** Error message toast that shows the current user does not have permission to toggle sharing of the current preview */
  'share-preview-menu.error_toggle-sharing':
    'Сізде осы алдын ала қарауды бөлісуді ауыстыруға рұқсат жоқ',
  /** The text show below the QR Code SVG, with instructions on how to use it */
  'share-preview-menu.qr-code.instructions':
    'Сканируйте QR-код, чтобы открыть предварительный просмотр на телефоне.',
  /** Placeholder message for the QR Code SVG when sharing is yet to be enabled */
  'share-preview-menu.qr-code.placeholder': 'QR-код появится здесь',
  /** The <title> for the QR Code SVG that shows a link to the current preview */
  'share-preview-menu.qr-code.title': 'QR-код, кодирующий URL-адрес: {{url}}',
  /** The first line of the label that renders next to the sharing toggle, it renders on two rows */
  'share-preview-menu.toggle-button.label_first-line': 'Поделиться этим предпросмотром',
  /** The second line of the label that renders next to the sharing toggle, it renders on two rows */
  'share-preview-menu.toggle-button.label_second-line': 'с любым, у кого есть ссылка',
  /** The text shown on the sharing toggle tooltip when sharing is enabled */
  'share-preview-menu.toggle-button.tooltip_disable': 'Отключить общий доступ',
  /** The text shown on the sharing toggle tooltip when sharing is disabled */
  'share-preview-menu.toggle-button.tooltip_enable': 'Включить общий доступ',

  /** The status of the clipboard operation when copying a URL */
  'share-url.clipboard.status_copying': 'Копирование URL-адреса в буфер обмена…',
  /** The status of the clipboard operation when copying a URL */
  'share-url.clipboard.status_failed': 'Не удалось скопировать',
  /** The status of the clipboard operation when copying a URL */
  'share-url.clipboard.status_success': 'URL-адрес скопирован в буфер обмена',
  /** The status of the clipboard operation when copying a URL */
  'share-url.clipboard.status_unsupported': 'Буфер обмена не поддерживается',
  /** The share URL menu item text for opening a preview window */
  'share-url.menu-item.open.text': 'Открыть предпросмотр',
})
