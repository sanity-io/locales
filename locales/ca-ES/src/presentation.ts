import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** The status of the channel connection */
  'channel.status_connected': 'Connectat',
  /** The status of the channel connection */
  'channel.status_connecting': 'Connectant',
  /** The status of the channel connection */
  'channel.status_disconnected': 'Desconnectat',
  /** The status of the channel connection */
  'channel.status_reconnecting': 'Reconnectant',

  /** The title shown above the document list */
  'document-list-pane.document-list.title': "Documents d'aquesta pàgina",
  /** The text shown if the document list is unable to render */
  'document-list-pane.error.text': "No s'ha pogut mostrar la llista de documents",
  /** The label for the ordering that lists documents in the order they appear on the page */
  'document-list-pane.ordering.by-appearance': 'Per aparició',
  /** The label for the ordering that lists documents by when they were last edited */
  'document-list-pane.ordering.last-edited': 'Darrerament editat',

  /** The text shown if the document editor is unable to render */
  'document-pane.error.text': "No s'ha pogut mostrar l'editor de documents",

  /** The text shown on the button for bypassing after a connection has failed */
  'error-card.continue-button.text': 'Continua igualment',
  /** The text shown on the button for retrying after a connection has failed */
  'error-card.retry-button.text': 'Torna-ho a intentar',
  /** The title on the card shown after a connection has failed */
  'error-card.title': "S'ha produït un error",

  /** The text shown when the document is used in a single location */
  'locations-banner.locations-count_one': 'Utilitzat en una pàgina',
  /** The text shown when the document is used in multiple locations */
  'locations-banner.locations-count_other': 'Utilitzat en {{count}} pàgines',
  /** The text shown when a resolver exists but the document is not used in any locations */
  'locations-banner.locations-count_zero': "No s'utilitza en cap pàgina",
  /** The text shown whilst the locations resolver is executing */
  'locations-banner.resolving.text': "S'estan resolent les ubicacions...",

  /** The label shown on a main document in the list pane */
  'main-document.label': 'Document principal',
  /** The warning message text shown when a defined resolver fails to return a main document */
  'main-document.missing.text': 'Manca un document principal per a <Code>{{path}}</Code>',

  /** The label for the tab that shows the document editor at narrow viewports */
  'narrow-tabs.content-tab.label': 'Estructura',
  /** The label for the tab that shows the navigator at narrow viewports */
  'narrow-tabs.navigator-tab.label': 'Navegador',
  /** The label for the tab that shows the preview at narrow viewports */
  'narrow-tabs.preview-tab.label': 'Presentació',

  /** The label for a generic error message */
  'presentation-error.label': "Missatge d'error",

  /** The toast description for the error message explaining that the iframe is blocked from loading due to a security mismatch. */
  'preview-frame.configuration.error.description':
    "L'iframe de previsualització està configurat per carregar <Code>{{targetOrigin}}</Code>, però l'origen informat és <Code>{{reportedOrigin}}</Code>. La Presentation Tool no es pot connectar a orígens desconeguts per motius de seguretat. Actualitzeu la configuració de <Code>presentationTool.allowOrigins</Code> per permetre la connexió a Visual Editing i Loaders.",
  /** The title of the error toast that shows when the preview iframe times out while waiting for a connection over comlink to establish, and the root cause is discovered to be that the iframe is loading on an URL origin that's not in the allow list. */
  'preview-frame.configuration.error.title': "Discrepància d'origen de l'URL de previsualització",
  /** The text shown when the preview frame cannot connect to Presentation */
  'preview-frame.connection.error.text': "No s'ha pogut connectar a la previsualització",
  /** The text shown on the button for dismissing the error overlay after a timeout */
  'preview-frame.continue-button.text': 'Continua igualment',
  /** The label for the loader's connection status */
  'preview-frame.loader.connection-status.label': 'Estat de connexió del carregador',
  /** The `aria-label` for the navigator toggle button */
  'preview-frame.navigator.toggle-button.aria-label': 'Commuta el navegador',
  /** The tooltip text for the navigator toggle button */
  'preview-frame.navigator.toggle-button.tooltip': 'Commuta el navegador',
  /** The label for the overlay's connection status */
  'preview-frame.overlay.connection-status.label': 'Estat de connexió de la superposició',
  /** The text shown on the overlay toggle button */
  'preview-frame.overlay.toggle-button.text': 'Edita',
  /** The text shown on the overlay toggle tooltip when overlays are enabled */
  'preview-frame.overlay.toggle-button.tooltip_disable': "Desactiva la superposició d'edició",
  /** The text shown on the overlay toggle tooltip when overlays are disabled */
  'preview-frame.overlay.toggle-button.tooltip_enable': "Activa la superposició d'edició",
  /** The text description for the published perspective switcher menu item */
  'preview-frame.perspective.published.text': 'Visualitza aquesta pàgina amb contingut publicat',
  /** The `aria-label` for the refresh button */
  'preview-frame.refresh-button.aria-label': 'Actualitza la previsualització',
  /** The tooltip text for the refresh button */
  'preview-frame.refresh-button.tooltip': 'Actualitza la previsualització',
  /** The `aria-label` for the button that opens the share menu */
  'preview-frame.share-button.aria-label': 'Comparteix aquesta previsualització',
  /** Text describing the current status of the preview frame */
  'preview-frame.status_connecting': 'Connectant.',
  /** Text describing the current status of the preview frame */
  'preview-frame.status_loading': 'Carregant.',
  /** Text describing the current status of the preview frame */
  'preview-frame.status_refreshing': 'Actualitzant.',
  /** Text describing the current status of the preview frame */
  'preview-frame.status_reloading': 'Actualitzant.',
  /** Text describing the current status of the preview frame */
  'preview-frame.status_timeout':
    "No s'ha pogut connectar, consulteu la consola del navegador per obtenir més informació.",
  /** The `aria-label` for the button that switches viewport size */
  'preview-frame.viewport-button.aria-label': 'Commuta la mida de la finestra gràfica',
  /** The viewport size button tooltip text when switching to a full width viewport */
  'preview-frame.viewport-button.tooltip_full': 'Canvia a la finestra gràfica completa',
  /** The viewport size button tooltip text when switching to a narrow viewport */
  'preview-frame.viewport-button.tooltip_narrow': 'Canvia a la finestra gràfica estreta',

  /** The validation error message shown when the preview location input is missing an origin */
  'preview-location-input.error_missing-origin': "L'URL ha de començar amb {{origin}}",
  /** The validation error message shown when the preview location input's base path matches that of the studio */
  'preview-location-input.error_same-base-path':
    "L'URL no pot tenir el mateix camí base que el Studio {{basePath}}",

  /** The toast description for the error message explaining that the iframe won't navigate to the new preview URL due to an URL origin security mismatch. */
  'preview-search-param.configuration.error.description':
    "El router vol navegar a <Code>{{previewSearchParam}}</Code>, però l'origen <Code>{{blockedOrigin}}</Code> no està permès. Actualitzeu la configuració de <Code>presentationTool.allowOrigins</Code> per permetre-ho.",
  /** The title of the error toast that shows when attempting to navigate to a preview URL origin that's not in the allow list. */
  'preview-search-param.configuration.error.title': 'URL de previsualització bloquejada',

  /** Error toast that notifies that URL Preview Secrets can't be generated as the user lacks ACL grants */
  'preview-url-secret.missing-grants':
    'No teniu permís per crear URL Preview Secrets. Això probablement farà que la previsualització no es carregui correctament.',

  /** Menu item in the share preview menu that allows copying the current preview URL, if sharing is enabled */
  'share-preview-menu.copy-url.text': "Copia l'enllaç de previsualització",
  /** Fallback message shown when the current user is not permitted to share previews */
  'share-preview-menu.error_missing-grants': 'No teniu permís per compartir previsualitzacions. ',
  /** Error message toast that shows the current user does not have permission to toggle sharing of the current preview */
  'share-preview-menu.error_toggle-sharing':
    "No teniu permís per activar o desactivar la compartició d'aquesta previsualització",
  /** The text show below the QR Code SVG, with instructions on how to use it */
  'share-preview-menu.qr-code.instructions':
    'Escanegeu el codi QR per obrir la previsualització al vostre telèfon.',
  /** Placeholder message for the QR Code SVG when sharing is yet to be enabled */
  'share-preview-menu.qr-code.placeholder': 'El codi QR apareixerà aquí',
  /** The <title> for the QR Code SVG that shows a link to the current preview */
  'share-preview-menu.qr-code.title': "Un codi QR que codifica l'URL: {{url}}",
  /** The first line of the label that renders next to the sharing toggle, it renders on two rows */
  'share-preview-menu.toggle-button.label_first-line': 'Comparteix aquesta previsualització',
  /** The second line of the label that renders next to the sharing toggle, it renders on two rows */
  'share-preview-menu.toggle-button.label_second-line': "amb qualsevol persona que tingui l'enllaç",
  /** The text shown on the sharing toggle tooltip when sharing is enabled */
  'share-preview-menu.toggle-button.tooltip_disable': 'Desactiva la compartició',
  /** The text shown on the sharing toggle tooltip when sharing is disabled */
  'share-preview-menu.toggle-button.tooltip_enable': 'Activa la compartició',

  /** The status of the clipboard operation when copying a URL */
  'share-url.clipboard.status_copying': "S'està copiant l'URL al porta-retalls…",
  /** The status of the clipboard operation when copying a URL */
  'share-url.clipboard.status_failed': 'Error en copiar',
  /** The status of the clipboard operation when copying a URL */
  'share-url.clipboard.status_success': "L'URL s'ha copiat al porta-retalls",
  /** The status of the clipboard operation when copying a URL */
  'share-url.clipboard.status_unsupported': 'El porta-retalls no és compatible',
  /** The share URL menu item text for opening a preview window */
  'share-url.menu-item.open.text': 'Obre la previsualització',
})
