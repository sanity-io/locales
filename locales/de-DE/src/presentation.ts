import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** The status of the channel connection */
  'channel.status_connected': 'Verbunden',
  /** The status of the channel connection */
  'channel.status_connecting': 'Verbinde',
  /** The status of the channel connection */
  'channel.status_disconnected': 'Getrennt',
  /** The status of the channel connection */
  'channel.status_reconnecting': 'Erneut verbinden',

  /** The title shown above the document list */
  'document-list-pane.document-list.title': 'Dokumente auf dieser Seite',
  /** The text shown if the document list is unable to render */
  'document-list-pane.error.text': 'Die Dokumentenliste konnte nicht gerendert werden',
  /** The label for the ordering that lists documents in the order they appear on the page */
  'document-list-pane.ordering.by-appearance': 'Nach Erscheinung',
  /** The label for the ordering that lists documents by when they were last edited */
  'document-list-pane.ordering.last-edited': 'Zuletzt bearbeitet',

  /** The text shown if the document editor is unable to render */
  'document-pane.error.text': 'Der Dokumenteneditor konnte nicht gerendert werden',

  /** The text shown on the button for bypassing after a connection has failed */
  'error-card.continue-button.text': 'Trotzdem fortfahren',
  /** The text shown on the button for retrying after a connection has failed */
  'error-card.retry-button.text': 'Erneut versuchen',
  /** The title on the card shown after a connection has failed */
  'error-card.title': 'Ein Fehler ist aufgetreten',

  /** The text shown when the document is used in a single location */
  'locations-banner.locations-count_one': 'Auf einer Seite verwendet',
  /** The text shown when the document is used in multiple locations */
  'locations-banner.locations-count_other': 'Auf {{count}} Seiten verwendet',
  /** The text shown when a resolver exists but the document is not used in any locations */
  'locations-banner.locations-count_zero': 'Auf keiner Seite verwendet',
  /** The text shown whilst the locations resolver is executing */
  'locations-banner.resolving.text': 'Standorte werden aufgelöst...',

  /** The label shown on a main document in the list pane */
  'main-document.label': 'Hauptdokument',
  /** The warning message text shown when a defined resolver fails to return a main document */
  'main-document.missing.text': 'Es fehlt ein Hauptdokument für <Code>{{path}}</Code>',

  /** The label for the tab that shows the document editor at narrow viewports */
  'narrow-tabs.content-tab.label': 'Struktur',
  /** The label for the tab that shows the navigator at narrow viewports */
  'narrow-tabs.navigator-tab.label': 'Navigator',
  /** The label for the tab that shows the preview at narrow viewports */
  'narrow-tabs.preview-tab.label': 'Präsentation',

  /** The label for a generic error message */
  'presentation-error.label': 'Fehlermeldung',

  /** The toast description for the error message explaining that the iframe is blocked from loading due to a security mismatch. */
  'preview-frame.configuration.error.description':
    'Der Vorschau-iframe ist so konfiguriert, dass er <Code>{{targetOrigin}}</Code> lädt, aber der gemeldete Ursprung ist <Code>{{reportedOrigin}}</Code>. Das Presentation Tool kann aus Sicherheitsgründen keine Verbindung zu unbekannten Ursprüngen herstellen. Aktualisieren Sie Ihre <Code>presentationTool.allowOrigins</Code>-Konfiguration, um die Verbindung zu Visual Editing und Loaders zu ermöglichen.',
  /** The title of the error toast that shows when the preview iframe times out while waiting for a connection over comlink to establish, and the root cause is discovered to be that the iframe is loading on an URL origin that's not in the allow list. */
  'preview-frame.configuration.error.title': 'URL-Ursprung der Vorschau stimmt nicht überein',
  /** The text shown when the preview frame cannot connect to Presentation */
  'preview-frame.connection.error.text':
    'Es konnte keine Verbindung zur Vorschau hergestellt werden',
  /** The text shown on the button for dismissing the error overlay after a timeout */
  'preview-frame.continue-button.text': 'Trotzdem fortfahren',
  /** The label for the loader's connection status */
  'preview-frame.loader.connection-status.label': 'Loader-Verbindungsstatus',
  /** The `aria-label` for the navigator toggle button */
  'preview-frame.navigator.toggle-button.aria-label': 'Navigator umschalten',
  /** The tooltip text for the navigator toggle button */
  'preview-frame.navigator.toggle-button.tooltip': 'Navigator umschalten',
  /** The label for the overlay's connection status */
  'preview-frame.overlay.connection-status.label': 'Overlay-Verbindungsstatus',
  /** The text shown on the overlay toggle button */
  'preview-frame.overlay.toggle-button.text': 'Bearbeiten',
  /** The text shown on the overlay toggle tooltip when overlays are enabled */
  'preview-frame.overlay.toggle-button.tooltip_disable': 'Bearbeitungs-Overlay deaktivieren',
  /** The text shown on the overlay toggle tooltip when overlays are disabled */
  'preview-frame.overlay.toggle-button.tooltip_enable': 'Bearbeitungs-Overlay aktivieren',
  /** The text description for the published perspective switcher menu item */
  'preview-frame.perspective.published.text': 'Diese Seite mit veröffentlichten Inhalten anzeigen',
  /** The `aria-label` for the refresh button */
  'preview-frame.refresh-button.aria-label': 'Vorschau aktualisieren',
  /** The tooltip text for the refresh button */
  'preview-frame.refresh-button.tooltip': 'Vorschau aktualisieren',
  /** The `aria-label` for the button that opens the share menu */
  'preview-frame.share-button.aria-label': 'Diese Vorschau teilen',
  /** Text describing the current status of the preview frame */
  'preview-frame.status_connecting': 'Verbinde.',
  /** Text describing the current status of the preview frame */
  'preview-frame.status_loading': 'Lädt.',
  /** Text describing the current status of the preview frame */
  'preview-frame.status_refreshing': 'Aktualisiere.',
  /** Text describing the current status of the preview frame */
  'preview-frame.status_reloading': 'Aktualisiere.',
  /** Text describing the current status of the preview frame */
  'preview-frame.status_timeout':
    'Verbindung nicht möglich. Weitere Informationen finden Sie in der Browser-Konsole.',
  /** The `aria-label` for the button that switches viewport size */
  'preview-frame.viewport-button.aria-label': 'Viewport-Größe umschalten',
  /** The viewport size button tooltip text when switching to a full width viewport */
  'preview-frame.viewport-button.tooltip_full': 'Zum vollständigen Viewport wechseln',
  /** The viewport size button tooltip text when switching to a narrow viewport */
  'preview-frame.viewport-button.tooltip_narrow': 'Zum schmalen Viewport wechseln',

  /** The validation error message shown when the preview location input is missing an origin */
  'preview-location-input.error_missing-origin': 'URL muss mit {{origin}} beginnen',
  /** The validation error message shown when the preview location input's base path matches that of the studio */
  'preview-location-input.error_same-base-path':
    'URL darf nicht denselben Basispfad wie das Studio haben {{basePath}}',

  /** The toast description for the error message explaining that the iframe won't navigate to the new preview URL due to an URL origin security mismatch. */
  'preview-search-param.configuration.error.description':
    'Der Router möchte zu <Code>{{previewSearchParam}}</Code> navigieren, aber der Ursprung <Code>{{blockedOrigin}}</Code> ist nicht erlaubt. Aktualisieren Sie Ihre <Code>presentationTool.allowOrigins</Code>-Konfiguration, um ihn zuzulassen.',
  /** The title of the error toast that shows when attempting to navigate to a preview URL origin that's not in the allow list. */
  'preview-search-param.configuration.error.title': 'Blockierte Vorschau-URL',

  /** Error toast that notifies that URL Preview Secrets can't be generated as the user lacks ACL grants */
  'preview-url-secret.missing-grants':
    'Sie haben keine Berechtigung, URL Preview Secrets zu erstellen. Dies wird wahrscheinlich dazu führen, dass die Vorschau nicht geladen werden kann.',

  /** Menu item in the share preview menu that allows copying the current preview URL, if sharing is enabled */
  'share-preview-menu.copy-url.text': 'Vorschau-Link kopieren',
  /** Fallback message shown when the current user is not permitted to share previews */
  'share-preview-menu.error_missing-grants': 'Sie haben keine Berechtigung, Vorschauen zu teilen.',
  /** Error message toast that shows the current user does not have permission to toggle sharing of the current preview */
  'share-preview-menu.error_toggle-sharing':
    'Sie haben keine Berechtigung, die Freigabe dieser Vorschau umzuschalten',
  /** The text show below the QR Code SVG, with instructions on how to use it */
  'share-preview-menu.qr-code.instructions':
    'Scannen Sie den QR-Code, um die Vorschau auf Ihrem Telefon zu öffnen.',
  /** Placeholder message for the QR Code SVG when sharing is yet to be enabled */
  'share-preview-menu.qr-code.placeholder': 'QR-Code wird hier angezeigt',
  /** The <title> for the QR Code SVG that shows a link to the current preview */
  'share-preview-menu.qr-code.title': 'Ein QR-Code, der die URL kodiert: {{url}}',
  /** The first line of the label that renders next to the sharing toggle, it renders on two rows */
  'share-preview-menu.toggle-button.label_first-line': 'Diese Vorschau teilen',
  /** The second line of the label that renders next to the sharing toggle, it renders on two rows */
  'share-preview-menu.toggle-button.label_second-line': 'mit allen, die den Link haben',
  /** The text shown on the sharing toggle tooltip when sharing is enabled */
  'share-preview-menu.toggle-button.tooltip_disable': 'Freigabe deaktivieren',
  /** The text shown on the sharing toggle tooltip when sharing is disabled */
  'share-preview-menu.toggle-button.tooltip_enable': 'Freigabe aktivieren',

  /** The status of the clipboard operation when copying a URL */
  'share-url.clipboard.status_copying': 'URL wird in die Zwischenablage kopiert…',
  /** The status of the clipboard operation when copying a URL */
  'share-url.clipboard.status_failed': 'Kopieren fehlgeschlagen',
  /** The status of the clipboard operation when copying a URL */
  'share-url.clipboard.status_success': 'Die URL wurde in die Zwischenablage kopiert',
  /** The status of the clipboard operation when copying a URL */
  'share-url.clipboard.status_unsupported': 'Zwischenablage wird nicht unterstützt',
  /** The share URL menu item text for opening a preview window */
  'share-url.menu-item.open.text': 'Vorschau öffnen',
})
