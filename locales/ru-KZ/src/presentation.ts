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
  'document-list-pane.document-list.title': 'Документы на этой странице',
  /** The text shown if the document list is unable to render */
  'document-list-pane.error.text': 'Не удалось отобразить список документов',

  /** The text shown if the document editor is unable to render */
  'document-pane.error.text': 'Не удалось отобразить редактор документов',

  /** The text shown on the button for bypassing after a connection has failed */
  'error-card.continue-button.text': 'Продолжить в любом случае',
  /** The text shown on the button for retrying after a connection has failed */
  'error-card.retry-button.text': 'Повторить',
  /** The title on the card shown after a connection has failed */
  'error-card.title': 'Произошла ошибка',

  /** The text shown when the document is used in a single location */
  'locations-banner.locations-count_one': 'Используется на одной странице',
  /** The text shown when a resolver exists but the document is not used in any locations */
  'locations-banner.locations-count_zero': 'Не используется ни на одной странице',
  /** The text shown whilst the locations resolver is executing */
  'locations-banner.resolving.text': 'Определение местоположений...',

  /** The label shown on a main document in the list pane */
  'main-document.label': 'Основной документ',
  /** The warning message text shown when a defined resolver fails to return a main document */
  'main-document.missing.text': 'Отсутствует основной документ для <Code>{{path}}</Code>',

  /** The label for the tab that shows the document editor at narrow viewports */
  'narrow-tabs.content-tab.label': 'Структура',
  /** The label for the tab that shows the navigator at narrow viewports */
  'narrow-tabs.navigator-tab.label': 'Навигатор',
  /** The label for the tab that shows the preview at narrow viewports */
  'narrow-tabs.preview-tab.label': 'Презентация',

  /** The label for a generic error message */
  'presentation-error.label': 'Сообщение об ошибке',

  /** The toast description for the error message explaining that the iframe is blocked from loading due to a security mismatch. */
  'preview-frame.configuration.error.description':
    'Предварительный просмотр iframe настроен на загрузку <Code>{{targetOrigin}}</Code>, однако указанный источник — <Code>{{reportedOrigin}}</Code>. Presentation Tool не может подключаться к неизвестным источникам в целях безопасности. Обновите конфигурацию <Code>presentationTool.allowOrigins</Code>, чтобы разрешить подключение к Visual Editing и Loaders.',
  /** The title of the error toast that shows when the preview iframe times out while waiting for a connection over comlink to establish, and the root cause is discovered to be that the iframe is loading on an URL origin that's not in the allow list. */
  'preview-frame.configuration.error.title':
    'Несоответствие источника URL предварительного просмотра',
  /** The text shown when the preview frame cannot connect to Presentation */
  'preview-frame.connection.error.text': 'Не удалось подключиться к предварительному просмотру',
  /** The text shown on the button for dismissing the error overlay after a timeout */
  'preview-frame.continue-button.text': 'Продолжить в любом случае',
  /** The label for the loader's connection status */
  'preview-frame.loader.connection-status.label': 'Статус подключения loader',
  /** The `aria-label` for the navigator toggle button */
  'preview-frame.navigator.toggle-button.aria-label': 'Переключить навигатор',
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
  'preview-location-input.error_missing-origin': 'URL {{origin}} мекенжайынан басталуы тиіс',
  /** The validation error message shown when the preview location input's base path matches that of the studio */
  'preview-location-input.error_same-base-path':
    'URL мекенжайының негізгі жолы Studio {{basePath}} жолымен бірдей бола алмайды',

  /** The toast description for the error message explaining that the iframe won't navigate to the new preview URL due to an URL origin security mismatch. */
  'preview-search-param.configuration.error.description':
    'Маршрутизатор <Code>{{previewSearchParam}}</Code> мекенжайына өтуге тырысуда, бірақ <Code>{{blockedOrigin}}</Code> шығу тегіне рұқсат берілмеген. Рұқсат беру үшін <Code>presentationTool.allowOrigins</Code> конфигурациясын жаңартыңыз.',
  /** The title of the error toast that shows when attempting to navigate to a preview URL origin that's not in the allow list. */
  'preview-search-param.configuration.error.title': 'Алдын ала қарау URL мекенжайы бұғатталды',

  /** Error toast that notifies that URL Preview Secrets can't be generated as the user lacks ACL grants */
  'preview-url-secret.missing-grants':
    'URL алдын ала қарау құпияларын жасауға рұқсатыңыз жоқ. Бұл алдын ала қарауды жүктеуде сәтсіздікке әкелуі мүмкін.',

  /** Menu item in the share preview menu that allows copying the current preview URL, if sharing is enabled */
  'share-preview-menu.copy-url.text': 'Алдын ала қарау сілтемесін көшіру',
  /** Fallback message shown when the current user is not permitted to share previews */
  'share-preview-menu.error_missing-grants': 'Алдын ала қарауларды бөлісуге рұқсатыңыз жоқ.',
  /** Error message toast that shows the current user does not have permission to toggle sharing of the current preview */
  'share-preview-menu.error_toggle-sharing':
    'Осы алдын ала қарауды бөлісуді ауыстыруға рұқсатыңыз жоқ',
  /** The text show below the QR Code SVG, with instructions on how to use it */
  'share-preview-menu.qr-code.instructions':
    'Отсканируйте QR-код, чтобы открыть предварительный просмотр на телефоне.',
  /** Placeholder message for the QR Code SVG when sharing is yet to be enabled */
  'share-preview-menu.qr-code.placeholder': 'QR-код появится здесь',
  /** The <title> for the QR Code SVG that shows a link to the current preview */
  'share-preview-menu.qr-code.title': 'QR-код, кодирующий URL-адрес: {{url}}',
  /** The first line of the label that renders next to the sharing toggle, it renders on two rows */
  'share-preview-menu.toggle-button.label_first-line': 'Поделиться этим предварительным просмотром',
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
  'share-url.menu-item.open.text': 'Открыть предварительный просмотр',
})
