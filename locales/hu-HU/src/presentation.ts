import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** The status of the channel connection */
  'channel.status_connected': 'Csatlakozva',
  /** The status of the channel connection */
  'channel.status_connecting': 'Csatlakozás',
  /** The status of the channel connection */
  'channel.status_disconnected': 'Lecsatlakozva',
  /** The status of the channel connection */
  'channel.status_reconnecting': 'Újracsatlakozás',

  /** The title shown above the document list */
  'document-list-pane.document-list.title': 'Dokumentumok ezen az oldalon',
  /** The text shown if the document list is unable to render */
  'document-list-pane.error.text': 'A dokumentumlista nem jeleníthető meg',

  /** The text shown if the document editor is unable to render */
  'document-pane.error.text': 'A dokumentumszerkesztő nem jeleníthető meg',

  /** The text shown on the button for bypassing after a connection has failed */
  'error-card.continue-button.text': 'Folytatás mindenképpen',
  /** The text shown on the button for retrying after a connection has failed */
  'error-card.retry-button.text': 'Újrapróbálás',
  /** The title on the card shown after a connection has failed */
  'error-card.title': 'Hiba történt',

  /** The text shown when the document is used in a single location */
  'locations-banner.locations-count_one': 'Egy oldalon használva',
  /** The text shown when the document is used in multiple locations */
  'locations-banner.locations-count_other': '{{count}} oldalon használva',
  /** The text shown when a resolver exists but the document is not used in any locations */
  'locations-banner.locations-count_zero': 'Egyetlen oldalon sem használva',
  /** The text shown whilst the locations resolver is executing */
  'locations-banner.resolving.text': 'Helyek feloldása...',

  /** The label shown on a main document in the list pane */
  'main-document.label': 'Fő dokumentum',
  /** The warning message text shown when a defined resolver fails to return a main document */
  'main-document.missing.text': 'Hiányzik a fő dokumentum a következőhöz: <Code>{{path}}</Code>',

  /** The label for the tab that shows the document editor at narrow viewports */
  'narrow-tabs.content-tab.label': 'Struktúra',
  /** The label for the tab that shows the navigator at narrow viewports */
  'narrow-tabs.navigator-tab.label': 'Navigátor',
  /** The label for the tab that shows the preview at narrow viewports */
  'narrow-tabs.preview-tab.label': 'Prezentáció',

  /** The label for a generic error message */
  'presentation-error.label': 'Hibaüzenet',

  /** The toast description for the error message explaining that the iframe is blocked from loading due to a security mismatch. */
  'preview-frame.configuration.error.description':
    'Az előnézeti iframe úgy van konfigurálva, hogy betöltse a <Code>{{targetOrigin}}</Code> címet, de a jelentett forrás <Code>{{reportedOrigin}}</Code>. A Presentation Tool biztonsági okokból nem tud ismeretlen forrásokhoz csatlakozni. Frissítse a <Code>presentationTool.allowOrigins</Code> konfigurációját, hogy engedélyezze a Visual Editing és a Loaders csatlakozását.',
  /** The title of the error toast that shows when the preview iframe times out while waiting for a connection over comlink to establish, and the root cause is discovered to be that the iframe is loading on an URL origin that's not in the allow list. */
  'preview-frame.configuration.error.title': 'Előnézeti URL-forrás eltérés',
  /** The text shown when the preview frame cannot connect to Presentation */
  'preview-frame.connection.error.text': 'Nem sikerült csatlakozni az előnézethez',
  /** The text shown on the button for dismissing the error overlay after a timeout */
  'preview-frame.continue-button.text': 'Folytatás mindenképpen',
  /** The label for the loader's connection status */
  'preview-frame.loader.connection-status.label': 'Loader kapcsolat állapota',
  /** The `aria-label` for the navigator toggle button */
  'preview-frame.navigator.toggle-button.aria-label': 'Navigátor váltása',
  /** The tooltip text for the navigator toggle button */
  'preview-frame.navigator.toggle-button.tooltip': 'Navigátor váltása',
  /** The label for the overlay's connection status */
  'preview-frame.overlay.connection-status.label': 'Overlay kapcsolat állapota',
  /** The text shown on the overlay toggle button */
  'preview-frame.overlay.toggle-button.text': 'Szerkesztés',
  /** The text shown on the overlay toggle tooltip when overlays are enabled */
  'preview-frame.overlay.toggle-button.tooltip_disable': 'Szerkesztési overlay letiltása',
  /** The text shown on the overlay toggle tooltip when overlays are disabled */
  'preview-frame.overlay.toggle-button.tooltip_enable': 'Szerkesztési overlay engedélyezése',
  /** The text description for the published perspective switcher menu item */
  'preview-frame.perspective.published.text': 'Az oldal megtekintése közzétett tartalommal',
  /** The `aria-label` for the refresh button */
  'preview-frame.refresh-button.aria-label': 'Előnézet frissítése',
  /** The tooltip text for the refresh button */
  'preview-frame.refresh-button.tooltip': 'Előnézet frissítése',
  /** The `aria-label` for the button that opens the share menu */
  'preview-frame.share-button.aria-label': 'Az előnézet megosztása',
  /** Text describing the current status of the preview frame */
  'preview-frame.status_connecting': 'Csatlakozás.',
  /** Text describing the current status of the preview frame */
  'preview-frame.status_loading': 'Betöltés.',
  /** Text describing the current status of the preview frame */
  'preview-frame.status_refreshing': 'Frissítés.',
  /** Text describing the current status of the preview frame */
  'preview-frame.status_reloading': 'Frissítés.',
  /** Text describing the current status of the preview frame */
  'preview-frame.status_timeout':
    'Nem sikerült csatlakozni, további információért ellenőrizze a böngésző konzolját.',
  /** The `aria-label` for the button that switches viewport size */
  'preview-frame.viewport-button.aria-label': 'Nézetméret váltása',
  /** The viewport size button tooltip text when switching to a full width viewport */
  'preview-frame.viewport-button.tooltip_full': 'Váltás teljes nézetre',
  /** The viewport size button tooltip text when switching to a narrow viewport */
  'preview-frame.viewport-button.tooltip_narrow': 'Váltás keskeny nézetre',

  /** The validation error message shown when the preview location input is missing an origin */
  'preview-location-input.error_missing-origin': 'Az URL-nek ezzel kell kezdődnie: {{origin}}',
  /** The validation error message shown when the preview location input's base path matches that of the studio */
  'preview-location-input.error_same-base-path':
    'Az URL nem lehet ugyanolyan alap elérési úttal, mint a Studio {{basePath}}',

  /** The toast description for the error message explaining that the iframe won't navigate to the new preview URL due to an URL origin security mismatch. */
  'preview-search-param.configuration.error.description':
    'Az útválasztó a következő helyre szeretne navigálni: <Code>{{previewSearchParam}}</Code>, de a <Code>{{blockedOrigin}}</Code> forrás nem engedélyezett. Frissítse a <Code>presentationTool.allowOrigins</Code> konfigurációját az engedélyezéshez.',
  /** The title of the error toast that shows when attempting to navigate to a preview URL origin that's not in the allow list. */
  'preview-search-param.configuration.error.title': 'Blokkolt előnézeti URL',

  /** Error toast that notifies that URL Preview Secrets can't be generated as the user lacks ACL grants */
  'preview-url-secret.missing-grants':
    'Nincs jogosultsága URL előnézeti titkos kulcsok létrehozásához. Ez valószínűleg az előnézet betöltésének sikertelenségét okozza.',

  /** Menu item in the share preview menu that allows copying the current preview URL, if sharing is enabled */
  'share-preview-menu.copy-url.text': 'Előnézeti hivatkozás másolása',
  /** Fallback message shown when the current user is not permitted to share previews */
  'share-preview-menu.error_missing-grants': 'Nincs jogosultsága az előnézetek megosztásához.',
  /** Error message toast that shows the current user does not have permission to toggle sharing of the current preview */
  'share-preview-menu.error_toggle-sharing':
    'Nincs jogosultsága az előnézet megosztásának be- és kikapcsolásához',
  /** The text show below the QR Code SVG, with instructions on how to use it */
  'share-preview-menu.qr-code.instructions':
    'Olvassa be a QR-kódot az előnézet megnyitásához telefonján.',
  /** Placeholder message for the QR Code SVG when sharing is yet to be enabled */
  'share-preview-menu.qr-code.placeholder': 'A QR-kód itt jelenik meg',
  /** The <title> for the QR Code SVG that shows a link to the current preview */
  'share-preview-menu.qr-code.title': 'Egy QR-kód, amely a következő URL-t kódolja: {{url}}',
  /** The first line of the label that renders next to the sharing toggle, it renders on two rows */
  'share-preview-menu.toggle-button.label_first-line': 'Ossza meg ezt az előnézetet',
  /** The second line of the label that renders next to the sharing toggle, it renders on two rows */
  'share-preview-menu.toggle-button.label_second-line': 'bárkivel, akinek megvan a link',
  /** The text shown on the sharing toggle tooltip when sharing is enabled */
  'share-preview-menu.toggle-button.tooltip_disable': 'Megosztás letiltása',
  /** The text shown on the sharing toggle tooltip when sharing is disabled */
  'share-preview-menu.toggle-button.tooltip_enable': 'Megosztás engedélyezése',

  /** The status of the clipboard operation when copying a URL */
  'share-url.clipboard.status_copying': 'URL másolása a vágólapra…',
  /** The status of the clipboard operation when copying a URL */
  'share-url.clipboard.status_failed': 'Másolás sikertelen',
  /** The status of the clipboard operation when copying a URL */
  'share-url.clipboard.status_success': 'Az URL a vágólapra lett másolva',
  /** The status of the clipboard operation when copying a URL */
  'share-url.clipboard.status_unsupported': 'A vágólap nem támogatott',
  /** The share URL menu item text for opening a preview window */
  'share-url.menu-item.open.text': 'Előnézet megnyitása',
})
