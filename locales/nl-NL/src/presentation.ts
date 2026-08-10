import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** The status of the channel connection */
  'channel.status_connected': 'Verbonden',
  /** The status of the channel connection */
  'channel.status_connecting': 'Verbinden',
  /** The status of the channel connection */
  'channel.status_disconnected': 'Verbroken',
  /** The status of the channel connection */
  'channel.status_reconnecting': 'Opnieuw verbinden',

  /** The title shown above the document list */
  'document-list-pane.document-list.title': 'Documenten op deze pagina',
  /** The text shown if the document list is unable to render */
  'document-list-pane.error.text': 'Kan de documentenlijst niet weergeven',
  /** The label for the ordering that lists documents in the order they appear on the page */
  'document-list-pane.ordering.by-appearance': 'Op volgorde van verschijning',
  /** The label for the ordering that lists documents by when they were last edited */
  'document-list-pane.ordering.last-edited': 'Laatst bewerkt',

  /** The text shown if the document editor is unable to render */
  'document-pane.error.text': 'Kan de documenteditor niet weergeven',

  /** The text shown on the button for bypassing after a connection has failed */
  'error-card.continue-button.text': 'Toch doorgaan',
  /** The text shown on the button for retrying after a connection has failed */
  'error-card.retry-button.text': 'Opnieuw proberen',
  /** The title on the card shown after a connection has failed */
  'error-card.title': 'Er is een fout opgetreden',

  /** The text shown when the document is used in a single location */
  'locations-banner.locations-count_one': 'Gebruikt op één pagina',
  /** The text shown when the document is used in multiple locations */
  'locations-banner.locations-count_other': "Gebruikt op {{count}} pagina's",
  /** The text shown when a resolver exists but the document is not used in any locations */
  'locations-banner.locations-count_zero': 'Niet gebruikt op enige pagina',
  /** The text shown whilst the locations resolver is executing */
  'locations-banner.resolving.text': 'Locaties oplossen...',

  /** The label shown on a main document in the list pane */
  'main-document.label': 'Hoofddocument',
  /** The warning message text shown when a defined resolver fails to return a main document */
  'main-document.missing.text': 'Ontbrekend hoofddocument voor <Code>{{path}}</Code>',

  /** The label for the tab that shows the document editor at narrow viewports */
  'narrow-tabs.content-tab.label': 'Structuur',
  /** The label for the tab that shows the navigator at narrow viewports */
  'narrow-tabs.navigator-tab.label': 'Navigator',
  /** The label for the tab that shows the preview at narrow viewports */
  'narrow-tabs.preview-tab.label': 'Presentation',

  /** The label for a generic error message */
  'presentation-error.label': 'Foutmelding',

  /** The toast description for the error message explaining that the iframe is blocked from loading due to a security mismatch. */
  'preview-frame.configuration.error.description':
    'Het voorbeeld-iframe is geconfigureerd om <Code>{{targetOrigin}}</Code> te laden, maar de gerapporteerde oorsprong is <Code>{{reportedOrigin}}</Code>. Presentation Tool kan om veiligheidsredenen geen verbinding maken met onbekende oorsprongen. Werk uw <Code>presentationTool.allowOrigins</Code>-configuratie bij om verbinding met Visual Editing en Loaders toe te staan.',
  /** The title of the error toast that shows when the preview iframe times out while waiting for a connection over comlink to establish, and the root cause is discovered to be that the iframe is loading on an URL origin that's not in the allow list. */
  'preview-frame.configuration.error.title': 'Voorbeeld-URL oorsprong komt niet overeen',
  /** The text shown when the preview frame cannot connect to Presentation */
  'preview-frame.connection.error.text': 'Kan geen verbinding maken met het voorbeeld',
  /** The text shown on the button for dismissing the error overlay after a timeout */
  'preview-frame.continue-button.text': 'Toch doorgaan',
  /** The label for the loader's connection status */
  'preview-frame.loader.connection-status.label': 'Loader verbindingsstatus',
  /** The `aria-label` for the navigator toggle button */
  'preview-frame.navigator.toggle-button.aria-label': 'Navigator in-/uitschakelen',
  /** The tooltip text for the navigator toggle button */
  'preview-frame.navigator.toggle-button.tooltip': 'Navigator in-/uitschakelen',
  /** The label for the overlay's connection status */
  'preview-frame.overlay.connection-status.label': 'Verbindingsstatus overlay',
  /** The text shown on the overlay toggle button */
  'preview-frame.overlay.toggle-button.text': 'Bewerken',
  /** The text shown on the overlay toggle tooltip when overlays are enabled */
  'preview-frame.overlay.toggle-button.tooltip_disable': 'Bewerkingsoverlay uitschakelen',
  /** The text shown on the overlay toggle tooltip when overlays are disabled */
  'preview-frame.overlay.toggle-button.tooltip_enable': 'Bewerkingsoverlay inschakelen',
  /** The text description for the published perspective switcher menu item */
  'preview-frame.perspective.published.text': 'Bekijk deze pagina met gepubliceerde inhoud',
  /** The `aria-label` for the refresh button */
  'preview-frame.refresh-button.aria-label': 'Voorbeeld vernieuwen',
  /** The tooltip text for the refresh button */
  'preview-frame.refresh-button.tooltip': 'Voorbeeld vernieuwen',
  /** The `aria-label` for the button that opens the share menu */
  'preview-frame.share-button.aria-label': 'Dit voorbeeld delen',
  /** Text describing the current status of the preview frame */
  'preview-frame.status_connecting': 'Verbinden.',
  /** Text describing the current status of the preview frame */
  'preview-frame.status_loading': 'Laden.',
  /** Text describing the current status of the preview frame */
  'preview-frame.status_refreshing': 'Vernieuwen.',
  /** Text describing the current status of the preview frame */
  'preview-frame.status_reloading': 'Vernieuwen.',
  /** Text describing the current status of the preview frame */
  'preview-frame.status_timeout':
    'Kan geen verbinding maken, controleer de browserconsole voor meer informatie.',
  /** The `aria-label` for the button that switches viewport size */
  'preview-frame.viewport-button.aria-label': 'Viewportgrootte in-/uitschakelen',
  /** The viewport size button tooltip text when switching to a full width viewport */
  'preview-frame.viewport-button.tooltip_full': 'Overschakelen naar volledige viewport',
  /** The viewport size button tooltip text when switching to a narrow viewport */
  'preview-frame.viewport-button.tooltip_narrow': 'Overschakelen naar smalle viewport',

  /** The validation error message shown when the preview location input is missing an origin */
  'preview-location-input.error_missing-origin': 'URL moet beginnen met {{origin}}',
  /** The validation error message shown when the preview location input's base path matches that of the studio */
  'preview-location-input.error_same-base-path':
    'URL mag niet hetzelfde basispad hebben als de Studio {{basePath}}',

  /** The toast description for the error message explaining that the iframe won't navigate to the new preview URL due to an URL origin security mismatch. */
  'preview-search-param.configuration.error.description':
    'De router wil navigeren naar <Code>{{previewSearchParam}}</Code>, maar de origin <Code>{{blockedOrigin}}</Code> is niet toegestaan. Werk uw <Code>presentationTool.allowOrigins</Code>-configuratie bij om dit toe te staan.',
  /** The title of the error toast that shows when attempting to navigate to a preview URL origin that's not in the allow list. */
  'preview-search-param.configuration.error.title': 'Geblokkeerde voorbeeld-URL',

  /** Error toast that notifies that URL Preview Secrets can't be generated as the user lacks ACL grants */
  'preview-url-secret.missing-grants':
    'U heeft geen toestemming om URL Preview Secrets aan te maken. Dit zal waarschijnlijk ertoe leiden dat het voorbeeld niet kan worden geladen.',

  /** Menu item in the share preview menu that allows copying the current preview URL, if sharing is enabled */
  'share-preview-menu.copy-url.text': 'Voorbeeldlink kopiëren',
  /** Fallback message shown when the current user is not permitted to share previews */
  'share-preview-menu.error_missing-grants': 'U heeft geen toestemming om voorbeelden te delen.',
  /** Error message toast that shows the current user does not have permission to toggle sharing of the current preview */
  'share-preview-menu.error_toggle-sharing':
    'Je hebt geen toestemming om het delen van dit voorbeeld in of uit te schakelen',
  /** The text show below the QR Code SVG, with instructions on how to use it */
  'share-preview-menu.qr-code.instructions':
    'Scan de QR Code om het voorbeeld op je telefoon te openen.',
  /** Placeholder message for the QR Code SVG when sharing is yet to be enabled */
  'share-preview-menu.qr-code.placeholder': 'QR code verschijnt hier',
  /** The <title> for the QR Code SVG that shows a link to the current preview */
  'share-preview-menu.qr-code.title': 'Een QR Code die de URL codeert: {{url}}',
  /** The first line of the label that renders next to the sharing toggle, it renders on two rows */
  'share-preview-menu.toggle-button.label_first-line': 'Deel dit voorbeeld',
  /** The second line of the label that renders next to the sharing toggle, it renders on two rows */
  'share-preview-menu.toggle-button.label_second-line': 'met iedereen die de link heeft',
  /** The text shown on the sharing toggle tooltip when sharing is enabled */
  'share-preview-menu.toggle-button.tooltip_disable': 'Delen uitschakelen',
  /** The text shown on the sharing toggle tooltip when sharing is disabled */
  'share-preview-menu.toggle-button.tooltip_enable': 'Delen inschakelen',

  /** The status of the clipboard operation when copying a URL */
  'share-url.clipboard.status_copying': 'URL naar klembord kopiëren…',
  /** The status of the clipboard operation when copying a URL */
  'share-url.clipboard.status_failed': 'Kopiëren mislukt',
  /** The status of the clipboard operation when copying a URL */
  'share-url.clipboard.status_success': 'De URL is gekopieerd naar het klembord',
  /** The status of the clipboard operation when copying a URL */
  'share-url.clipboard.status_unsupported': 'Klembord niet ondersteund',
  /** The share URL menu item text for opening a preview window */
  'share-url.menu-item.open.text': 'Voorbeeld openen',
})
