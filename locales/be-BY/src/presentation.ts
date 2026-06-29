import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** The status of the channel connection */
  'channel.status_connected': 'Падключана',
  /** The status of the channel connection */
  'channel.status_connecting': 'Падключэнне',
  /** The status of the channel connection */
  'channel.status_disconnected': 'Адключана',
  /** The status of the channel connection */
  'channel.status_reconnecting': 'Паўторнае падключэнне',

  /** The title shown above the document list */
  'document-list-pane.document-list.title': 'Дакументы на гэтай старонцы',
  /** The text shown if the document list is unable to render */
  'document-list-pane.error.text': 'Не ўдалося адлюстраваць спіс дакументаў',
  /** The label for the ordering that lists documents in the order they appear on the page */
  'document-list-pane.ordering.by-appearance': "Па парадку з'яўлення",
  /** The label for the ordering that lists documents by when they were last edited */
  'document-list-pane.ordering.last-edited': 'Апошнія змены',

  /** The text shown if the document editor is unable to render */
  'document-pane.error.text': 'Не ўдалося адлюстраваць рэдактар дакументаў',

  /** The text shown on the button for bypassing after a connection has failed */
  'error-card.continue-button.text': 'Усё роўна працягнуць',
  /** The text shown on the button for retrying after a connection has failed */
  'error-card.retry-button.text': 'Паўтарыць спробу',
  /** The title on the card shown after a connection has failed */
  'error-card.title': 'Адбылася памылка',

  /** The text shown when the document is used in a single location */
  'locations-banner.locations-count_one': 'Выкарыстоўваецца на адной старонцы',
  /** The text shown when a resolver exists but the document is not used in any locations */
  'locations-banner.locations-count_zero': 'Не выкарыстоўваецца ні на адной старонцы',
  /** The text shown whilst the locations resolver is executing */
  'locations-banner.resolving.text': 'Вызначэнне месцазнаходжанняў...',

  /** The label shown on a main document in the list pane */
  'main-document.label': 'Галоўны дакумент',
  /** The warning message text shown when a defined resolver fails to return a main document */
  'main-document.missing.text': 'Адсутнічае галоўны дакумент для <Code>{{path}}</Code>',

  /** The label for the tab that shows the document editor at narrow viewports */
  'narrow-tabs.content-tab.label': 'Структура',
  /** The label for the tab that shows the navigator at narrow viewports */
  'narrow-tabs.navigator-tab.label': 'Навігатар',
  /** The label for the tab that shows the preview at narrow viewports */
  'narrow-tabs.preview-tab.label': 'Прэзентацыя',

  /** The label for a generic error message */
  'presentation-error.label': 'Паведамленне пра памылку',

  /** The toast description for the error message explaining that the iframe is blocked from loading due to a security mismatch. */
  'preview-frame.configuration.error.description':
    'Iframe прагляду настроены на загрузку <Code>{{targetOrigin}}</Code>, але паведамленае паходжанне — <Code>{{reportedOrigin}}</Code>. Presentation Tool не можа падключацца да невядомых паходжанняў з мэтаў бяспекі. Абнавіце канфігурацыю <Code>presentationTool.allowOrigins</Code>, каб дазволіць падключэнне да Visual Editing і Loaders.',
  /** The title of the error toast that shows when the preview iframe times out while waiting for a connection over comlink to establish, and the root cause is discovered to be that the iframe is loading on an URL origin that's not in the allow list. */
  'preview-frame.configuration.error.title': 'Невадпаведнасць паходжання URL прагляду',
  /** The text shown when the preview frame cannot connect to Presentation */
  'preview-frame.connection.error.text': 'Не ўдалося падключыцца да прагляду',
  /** The text shown on the button for dismissing the error overlay after a timeout */
  'preview-frame.continue-button.text': 'Усё роўна працягнуць',
  /** The label for the loader's connection status */
  'preview-frame.loader.connection-status.label': 'Статус злучэння загрузчыка',
  /** The `aria-label` for the navigator toggle button */
  'preview-frame.navigator.toggle-button.aria-label': 'Пераключыць навігатар',
  /** The tooltip text for the navigator toggle button */
  'preview-frame.navigator.toggle-button.tooltip': 'Пераключыць навігатар',
  /** The label for the overlay's connection status */
  'preview-frame.overlay.connection-status.label': 'Статус злучэння накладання',
  /** The text shown on the overlay toggle button */
  'preview-frame.overlay.toggle-button.text': 'Рэдагаваць',
  /** The text shown on the overlay toggle tooltip when overlays are enabled */
  'preview-frame.overlay.toggle-button.tooltip_disable': 'Адключыць накладанне рэдагавання',
  /** The text shown on the overlay toggle tooltip when overlays are disabled */
  'preview-frame.overlay.toggle-button.tooltip_enable': 'Уключыць накладанне рэдагавання',
  /** The text description for the published perspective switcher menu item */
  'preview-frame.perspective.published.text': 'Прагледзець гэту старонку з апублікаваным змесцівам',
  /** The `aria-label` for the refresh button */
  'preview-frame.refresh-button.aria-label': 'Абнавіць папярэдні прагляд',
  /** The tooltip text for the refresh button */
  'preview-frame.refresh-button.tooltip': 'Абнавіць папярэдні прагляд',
  /** The `aria-label` for the button that opens the share menu */
  'preview-frame.share-button.aria-label': 'Падзяліцца гэтым папярэднім праглядам',
  /** Text describing the current status of the preview frame */
  'preview-frame.status_connecting': 'Злучэнне.',
  /** Text describing the current status of the preview frame */
  'preview-frame.status_loading': 'Загрузка.',
  /** Text describing the current status of the preview frame */
  'preview-frame.status_refreshing': 'Абнаўленне.',
  /** Text describing the current status of the preview frame */
  'preview-frame.status_reloading': 'Абнаўленне.',
  /** Text describing the current status of the preview frame */
  'preview-frame.status_timeout':
    'Не ўдалося падключыцца, праверце кансоль браўзера для атрымання дадатковай інфармацыі.',
  /** The `aria-label` for the button that switches viewport size */
  'preview-frame.viewport-button.aria-label': 'Пераключыць памер вобласці прагляду',
  /** The viewport size button tooltip text when switching to a full width viewport */
  'preview-frame.viewport-button.tooltip_full': 'Перайсці да поўнай вобласці прагляду',
  /** The viewport size button tooltip text when switching to a narrow viewport */
  'preview-frame.viewport-button.tooltip_narrow': 'Перайсці да вузкай вобласці прагляду',

  /** The validation error message shown when the preview location input is missing an origin */
  'preview-location-input.error_missing-origin': 'URL павінен пачынацца з {{origin}}',
  /** The validation error message shown when the preview location input's base path matches that of the studio */
  'preview-location-input.error_same-base-path':
    'URL не можа мець той жа базавы шлях, што і Studio {{basePath}}',

  /** The toast description for the error message explaining that the iframe won't navigate to the new preview URL due to an URL origin security mismatch. */
  'preview-search-param.configuration.error.description':
    'Маршрутызатар хоча перайсці да <Code>{{previewSearchParam}}</Code>, але крыніца <Code>{{blockedOrigin}}</Code> не дазволена. Абнавіце канфігурацыю <Code>presentationTool.allowOrigins</Code>, каб дазволіць яе.',
  /** The title of the error toast that shows when attempting to navigate to a preview URL origin that's not in the allow list. */
  'preview-search-param.configuration.error.title': 'Заблакаваны URL папярэдняга прагляду',

  /** Error toast that notifies that URL Preview Secrets can't be generated as the user lacks ACL grants */
  'preview-url-secret.missing-grants':
    'У вас няма дазволу на стварэнне сакрэтаў URL папярэдняга прагляду. Гэта, верагодна, прывядзе да збою загрузкі папярэдняга прагляду.',

  /** Menu item in the share preview menu that allows copying the current preview URL, if sharing is enabled */
  'share-preview-menu.copy-url.text': 'Скапіраваць спасылку папярэдняга прагляду',
  /** Fallback message shown when the current user is not permitted to share previews */
  'share-preview-menu.error_missing-grants':
    'У вас няма дазволу на абагульванне папярэдніх прагляданняў.',
  /** Error message toast that shows the current user does not have permission to toggle sharing of the current preview */
  'share-preview-menu.error_toggle-sharing':
    'У вас няма дазволу на пераключэнне абагульвання гэтага папярэдняга прагляду',
  /** The text show below the QR Code SVG, with instructions on how to use it */
  'share-preview-menu.qr-code.instructions':
    'Адскануйце QR-код, каб адкрыць папярэдні прагляд на вашым тэлефоне.',
  /** Placeholder message for the QR Code SVG when sharing is yet to be enabled */
  'share-preview-menu.qr-code.placeholder': "QR-код з'явіцца тут",
  /** The <title> for the QR Code SVG that shows a link to the current preview */
  'share-preview-menu.qr-code.title': 'QR-код, які кадуе URL: {{url}}',
  /** The first line of the label that renders next to the sharing toggle, it renders on two rows */
  'share-preview-menu.toggle-button.label_first-line': 'Абагуліць гэты папярэдні прагляд',
  /** The second line of the label that renders next to the sharing toggle, it renders on two rows */
  'share-preview-menu.toggle-button.label_second-line': 'з усімі, у каго ёсць спасылка',
  /** The text shown on the sharing toggle tooltip when sharing is enabled */
  'share-preview-menu.toggle-button.tooltip_disable': 'Адключыць абагульванне',
  /** The text shown on the sharing toggle tooltip when sharing is disabled */
  'share-preview-menu.toggle-button.tooltip_enable': 'Уключыць абагульванне',

  /** The status of the clipboard operation when copying a URL */
  'share-url.clipboard.status_copying': 'Капіраванне URL у буфер абмену…',
  /** The status of the clipboard operation when copying a URL */
  'share-url.clipboard.status_failed': 'Капіраванне не ўдалося',
  /** The status of the clipboard operation when copying a URL */
  'share-url.clipboard.status_success': 'URL скапіраваны ў буфер абмену',
  /** The status of the clipboard operation when copying a URL */
  'share-url.clipboard.status_unsupported': 'Буфер абмену не падтрымліваецца',
  /** The share URL menu item text for opening a preview window */
  'share-url.menu-item.open.text': 'Адкрыць папярэдні прагляд',
})
