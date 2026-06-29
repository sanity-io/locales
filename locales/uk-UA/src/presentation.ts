import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** The status of the channel connection */
  'channel.status_connected': 'Підключено',
  /** The status of the channel connection */
  'channel.status_connecting': 'Підключення',
  /** The status of the channel connection */
  'channel.status_disconnected': 'Відключено',
  /** The status of the channel connection */
  'channel.status_reconnecting': 'Перепідключення',

  /** The title shown above the document list */
  'document-list-pane.document-list.title': 'Документи на цій сторінці',
  /** The text shown if the document list is unable to render */
  'document-list-pane.error.text': 'Не вдалося відобразити список документів',
  /** The label for the ordering that lists documents in the order they appear on the page */
  'document-list-pane.ordering.by-appearance': 'За порядком відображення',
  /** The label for the ordering that lists documents by when they were last edited */
  'document-list-pane.ordering.last-edited': 'Останнє редагування',

  /** The text shown if the document editor is unable to render */
  'document-pane.error.text': 'Не вдалося відобразити редактор документів',

  /** The text shown on the button for bypassing after a connection has failed */
  'error-card.continue-button.text': 'Продовжити все одно',
  /** The text shown on the button for retrying after a connection has failed */
  'error-card.retry-button.text': 'Повторити спробу',
  /** The title on the card shown after a connection has failed */
  'error-card.title': 'Сталася помилка',

  /** The text shown when the document is used in a single location */
  'locations-banner.locations-count_one': 'Використовується на одній сторінці',
  /** The text shown when a resolver exists but the document is not used in any locations */
  'locations-banner.locations-count_zero': 'Не використовується на жодній сторінці',
  /** The text shown whilst the locations resolver is executing */
  'locations-banner.resolving.text': 'Визначення розташувань...',

  /** The label shown on a main document in the list pane */
  'main-document.label': 'Головний документ',
  /** The warning message text shown when a defined resolver fails to return a main document */
  'main-document.missing.text': 'Відсутній головний документ для <Code>{{path}}</Code>',

  /** The label for the tab that shows the document editor at narrow viewports */
  'narrow-tabs.content-tab.label': 'Структура',
  /** The label for the tab that shows the navigator at narrow viewports */
  'narrow-tabs.navigator-tab.label': 'Навігатор',
  /** The label for the tab that shows the preview at narrow viewports */
  'narrow-tabs.preview-tab.label': 'Презентація',

  /** The label for a generic error message */
  'presentation-error.label': 'Повідомлення про помилку',

  /** The toast description for the error message explaining that the iframe is blocked from loading due to a security mismatch. */
  'preview-frame.configuration.error.description':
    'Попередній перегляд iframe налаштовано на завантаження <Code>{{targetOrigin}}</Code>, але повідомлене джерело — <Code>{{reportedOrigin}}</Code>. Presentation Tool не може підключатися до невідомих джерел з міркувань безпеки. Оновіть конфігурацію <Code>presentationTool.allowOrigins</Code>, щоб дозволити підключення до Visual Editing та Loaders.',
  /** The title of the error toast that shows when the preview iframe times out while waiting for a connection over comlink to establish, and the root cause is discovered to be that the iframe is loading on an URL origin that's not in the allow list. */
  'preview-frame.configuration.error.title': 'Невідповідність джерела URL попереднього перегляду',
  /** The text shown when the preview frame cannot connect to Presentation */
  'preview-frame.connection.error.text': 'Не вдалося підключитися до попереднього перегляду',
  /** The text shown on the button for dismissing the error overlay after a timeout */
  'preview-frame.continue-button.text': 'Продовжити все одно',
  /** The label for the loader's connection status */
  'preview-frame.loader.connection-status.label': 'Статус підключення loader',
  /** The `aria-label` for the navigator toggle button */
  'preview-frame.navigator.toggle-button.aria-label': 'Перемкнути навігатор',
  /** The tooltip text for the navigator toggle button */
  'preview-frame.navigator.toggle-button.tooltip': 'Перемкнути навігатор',
  /** The label for the overlay's connection status */
  'preview-frame.overlay.connection-status.label': 'Статус підключення оверлею',
  /** The text shown on the overlay toggle button */
  'preview-frame.overlay.toggle-button.text': 'Редагувати',
  /** The text shown on the overlay toggle tooltip when overlays are enabled */
  'preview-frame.overlay.toggle-button.tooltip_disable': 'Вимкнути оверлей редагування',
  /** The text shown on the overlay toggle tooltip when overlays are disabled */
  'preview-frame.overlay.toggle-button.tooltip_enable': 'Увімкнути оверлей редагування',
  /** The text description for the published perspective switcher menu item */
  'preview-frame.perspective.published.text': 'Переглянути цю сторінку з опублікованим вмістом',
  /** The `aria-label` for the refresh button */
  'preview-frame.refresh-button.aria-label': 'Оновити попередній перегляд',
  /** The tooltip text for the refresh button */
  'preview-frame.refresh-button.tooltip': 'Оновити попередній перегляд',
  /** The `aria-label` for the button that opens the share menu */
  'preview-frame.share-button.aria-label': 'Поділитися цим попереднім переглядом',
  /** Text describing the current status of the preview frame */
  'preview-frame.status_connecting': 'Підключення.',
  /** Text describing the current status of the preview frame */
  'preview-frame.status_loading': 'Завантаження.',
  /** Text describing the current status of the preview frame */
  'preview-frame.status_refreshing': 'Оновлення.',
  /** Text describing the current status of the preview frame */
  'preview-frame.status_reloading': 'Оновлення.',
  /** Text describing the current status of the preview frame */
  'preview-frame.status_timeout':
    'Не вдалося підключитися, перевірте консоль браузера для отримання додаткової інформації.',
  /** The `aria-label` for the button that switches viewport size */
  'preview-frame.viewport-button.aria-label': 'Перемкнути розмір вікна перегляду',
  /** The viewport size button tooltip text when switching to a full width viewport */
  'preview-frame.viewport-button.tooltip_full': 'Перейти до повного вікна перегляду',
  /** The viewport size button tooltip text when switching to a narrow viewport */
  'preview-frame.viewport-button.tooltip_narrow': 'Перейти до вузького вікна перегляду',

  /** The validation error message shown when the preview location input is missing an origin */
  'preview-location-input.error_missing-origin': 'URL має починатися з {{origin}}',
  /** The validation error message shown when the preview location input's base path matches that of the studio */
  'preview-location-input.error_same-base-path':
    'URL не може мати той самий базовий шлях, що й Studio {{basePath}}',

  /** The toast description for the error message explaining that the iframe won't navigate to the new preview URL due to an URL origin security mismatch. */
  'preview-search-param.configuration.error.description':
    'Маршрутизатор намагається перейти до <Code>{{previewSearchParam}}</Code>, але джерело <Code>{{blockedOrigin}}</Code> не дозволено. Оновіть конфігурацію <Code>presentationTool.allowOrigins</Code>, щоб дозволити його.',
  /** The title of the error toast that shows when attempting to navigate to a preview URL origin that's not in the allow list. */
  'preview-search-param.configuration.error.title': 'Заблокований URL попереднього перегляду',

  /** Error toast that notifies that URL Preview Secrets can't be generated as the user lacks ACL grants */
  'preview-url-secret.missing-grants':
    'У вас немає дозволу на створення секретів URL попереднього перегляду. Це, ймовірно, призведе до помилки завантаження попереднього перегляду.',

  /** Menu item in the share preview menu that allows copying the current preview URL, if sharing is enabled */
  'share-preview-menu.copy-url.text': 'Копіювати посилання для попереднього перегляду',
  /** Fallback message shown when the current user is not permitted to share previews */
  'share-preview-menu.error_missing-grants':
    'У вас немає дозволу на поширення попередніх переглядів. ',
  /** Error message toast that shows the current user does not have permission to toggle sharing of the current preview */
  'share-preview-menu.error_toggle-sharing':
    'У вас немає дозволу на перемикання спільного доступу до цього попереднього перегляду',
  /** The text show below the QR Code SVG, with instructions on how to use it */
  'share-preview-menu.qr-code.instructions':
    'Відскануйте QR-код, щоб відкрити попередній перегляд на телефоні.',
  /** Placeholder message for the QR Code SVG when sharing is yet to be enabled */
  'share-preview-menu.qr-code.placeholder': "QR-код з'явиться тут",
  /** The <title> for the QR Code SVG that shows a link to the current preview */
  'share-preview-menu.qr-code.title': 'QR-код, який кодує URL-адресу: {{url}}',
  /** The first line of the label that renders next to the sharing toggle, it renders on two rows */
  'share-preview-menu.toggle-button.label_first-line': 'Поділитися цим переглядом',
  /** The second line of the label that renders next to the sharing toggle, it renders on two rows */
  'share-preview-menu.toggle-button.label_second-line': 'з будь-ким, хто має посилання',
  /** The text shown on the sharing toggle tooltip when sharing is enabled */
  'share-preview-menu.toggle-button.tooltip_disable': 'Вимкнути спільний доступ',
  /** The text shown on the sharing toggle tooltip when sharing is disabled */
  'share-preview-menu.toggle-button.tooltip_enable': 'Увімкнути спільний доступ',

  /** The status of the clipboard operation when copying a URL */
  'share-url.clipboard.status_copying': 'Копіювання URL-адреси до буфера обміну…',
  /** The status of the clipboard operation when copying a URL */
  'share-url.clipboard.status_failed': 'Помилка копіювання',
  /** The status of the clipboard operation when copying a URL */
  'share-url.clipboard.status_success': 'URL-адресу скопійовано до буфера обміну',
  /** The status of the clipboard operation when copying a URL */
  'share-url.clipboard.status_unsupported': 'Буфер обміну не підтримується',
  /** The share URL menu item text for opening a preview window */
  'share-url.menu-item.open.text': 'Відкрити попередній перегляд',
})
