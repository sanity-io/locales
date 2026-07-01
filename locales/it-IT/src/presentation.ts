import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** The status of the channel connection */
  'channel.status_connected': 'Connesso',
  /** The status of the channel connection */
  'channel.status_connecting': 'Connessione in corso',
  /** The status of the channel connection */
  'channel.status_disconnected': 'Disconnesso',
  /** The status of the channel connection */
  'channel.status_reconnecting': 'Riconnessione in corso',

  /** The title shown above the document list */
  'document-list-pane.document-list.title': 'Documenti in questa pagina',
  /** The text shown if the document list is unable to render */
  'document-list-pane.error.text': "Impossibile visualizzare l'elenco dei documenti",
  /** The label for the ordering that lists documents in the order they appear on the page */
  'document-list-pane.ordering.by-appearance': undefined, // 'By appearance'
  /** The label for the ordering that lists documents by when they were last edited */
  'document-list-pane.ordering.last-edited': undefined, // 'Last edited'

  /** The text shown if the document editor is unable to render */
  'document-pane.error.text': "Impossibile visualizzare l'editor del documento",

  /** The text shown on the button for bypassing after a connection has failed */
  'error-card.continue-button.text': 'Continua comunque',
  /** The text shown on the button for retrying after a connection has failed */
  'error-card.retry-button.text': 'Riprova',
  /** The title on the card shown after a connection has failed */
  'error-card.title': 'Si è verificato un errore',

  /** The text shown when the document is used in a single location */
  'locations-banner.locations-count_one': 'Utilizzato in una pagina',
  /** The text shown when the document is used in multiple locations */
  'locations-banner.locations-count_other': 'Utilizzato in {{count}} pagine',
  /** The text shown when a resolver exists but the document is not used in any locations */
  'locations-banner.locations-count_zero': 'Non utilizzato in nessuna pagina',
  /** The text shown whilst the locations resolver is executing */
  'locations-banner.resolving.text': 'Risoluzione delle posizioni in corso...',

  /** The label shown on a main document in the list pane */
  'main-document.label': 'Documento principale',
  /** The warning message text shown when a defined resolver fails to return a main document */
  'main-document.missing.text': 'Documento principale mancante per <Code>{{path}}</Code>',

  /** The label for the tab that shows the document editor at narrow viewports */
  'narrow-tabs.content-tab.label': 'Struttura',
  /** The label for the tab that shows the navigator at narrow viewports */
  'narrow-tabs.navigator-tab.label': 'Navigatore',
  /** The label for the tab that shows the preview at narrow viewports */
  'narrow-tabs.preview-tab.label': 'Presentazione',

  /** The label for a generic error message */
  'presentation-error.label': 'Messaggio di errore',

  /** The toast description for the error message explaining that the iframe is blocked from loading due to a security mismatch. */
  'preview-frame.configuration.error.description':
    "L'iframe di anteprima è configurato per caricare <Code>{{targetOrigin}}</Code>, ma l'origine segnalata è <Code>{{reportedOrigin}}</Code>. Il Presentation Tool non è in grado di connettersi a origini sconosciute per motivi di sicurezza. Aggiorna la configurazione <Code>presentationTool.allowOrigins</Code> per consentire la connessione a Visual Editing e Loaders.",
  /** The title of the error toast that shows when the preview iframe times out while waiting for a connection over comlink to establish, and the root cause is discovered to be that the iframe is loading on an URL origin that's not in the allow list. */
  'preview-frame.configuration.error.title':
    "Mancata corrispondenza dell'origine dell'URL di anteprima",
  /** The text shown when the preview frame cannot connect to Presentation */
  'preview-frame.connection.error.text': "Impossibile connettersi all'anteprima",
  /** The text shown on the button for dismissing the error overlay after a timeout */
  'preview-frame.continue-button.text': 'Continua comunque',
  /** The label for the loader's connection status */
  'preview-frame.loader.connection-status.label': 'Stato della connessione del loader',
  /** The `aria-label` for the navigator toggle button */
  'preview-frame.navigator.toggle-button.aria-label': 'Attiva/disattiva navigatore',
  /** The tooltip text for the navigator toggle button */
  'preview-frame.navigator.toggle-button.tooltip': 'Attiva/disattiva navigatore',
  /** The label for the overlay's connection status */
  'preview-frame.overlay.connection-status.label': 'Stato connessione overlay',
  /** The text shown on the overlay toggle button */
  'preview-frame.overlay.toggle-button.text': 'Modifica',
  /** The text shown on the overlay toggle tooltip when overlays are enabled */
  'preview-frame.overlay.toggle-button.tooltip_disable': 'Disabilita overlay di modifica',
  /** The text shown on the overlay toggle tooltip when overlays are disabled */
  'preview-frame.overlay.toggle-button.tooltip_enable': 'Abilita overlay di modifica',
  /** The text description for the published perspective switcher menu item */
  'preview-frame.perspective.published.text':
    'Visualizza questa pagina con il contenuto pubblicato',
  /** The `aria-label` for the refresh button */
  'preview-frame.refresh-button.aria-label': 'Aggiorna anteprima',
  /** The tooltip text for the refresh button */
  'preview-frame.refresh-button.tooltip': 'Aggiorna anteprima',
  /** The `aria-label` for the button that opens the share menu */
  'preview-frame.share-button.aria-label': 'Condividi questa anteprima',
  /** Text describing the current status of the preview frame */
  'preview-frame.status_connecting': 'Connessione in corso.',
  /** Text describing the current status of the preview frame */
  'preview-frame.status_loading': 'Caricamento in corso.',
  /** Text describing the current status of the preview frame */
  'preview-frame.status_refreshing': 'Aggiornamento in corso.',
  /** Text describing the current status of the preview frame */
  'preview-frame.status_reloading': 'Aggiornamento in corso.',
  /** Text describing the current status of the preview frame */
  'preview-frame.status_timeout':
    'Impossibile connettersi, controlla la console del browser per ulteriori informazioni.',
  /** The `aria-label` for the button that switches viewport size */
  'preview-frame.viewport-button.aria-label': 'Cambia dimensione viewport',
  /** The viewport size button tooltip text when switching to a full width viewport */
  'preview-frame.viewport-button.tooltip_full': 'Passa al viewport intero',
  /** The viewport size button tooltip text when switching to a narrow viewport */
  'preview-frame.viewport-button.tooltip_narrow': 'Passa al viewport stretto',

  /** The validation error message shown when the preview location input is missing an origin */
  'preview-location-input.error_missing-origin': "L'URL deve iniziare con {{origin}}",
  /** The validation error message shown when the preview location input's base path matches that of the studio */
  'preview-location-input.error_same-base-path':
    "L'URL non può avere lo stesso percorso base dello Studio {{basePath}}",

  /** The toast description for the error message explaining that the iframe won't navigate to the new preview URL due to an URL origin security mismatch. */
  'preview-search-param.configuration.error.description':
    "Il router vuole navigare verso <Code>{{previewSearchParam}}</Code>, ma l'origine <Code>{{blockedOrigin}}</Code> non è consentita. Aggiorna la configurazione <Code>presentationTool.allowOrigins</Code> per consentirla.",
  /** The title of the error toast that shows when attempting to navigate to a preview URL origin that's not in the allow list. */
  'preview-search-param.configuration.error.title': 'URL di anteprima bloccato',

  /** Error toast that notifies that URL Preview Secrets can't be generated as the user lacks ACL grants */
  'preview-url-secret.missing-grants':
    "Non hai il permesso di creare URL Preview Secrets. Questo probabilmente causerà un errore nel caricamento dell'anteprima.",

  /** Menu item in the share preview menu that allows copying the current preview URL, if sharing is enabled */
  'share-preview-menu.copy-url.text': 'Copia link di anteprima',
  /** Fallback message shown when the current user is not permitted to share previews */
  'share-preview-menu.error_missing-grants': 'Non hai il permesso di condividere le anteprime.',
  /** Error message toast that shows the current user does not have permission to toggle sharing of the current preview */
  'share-preview-menu.error_toggle-sharing':
    'Non hai il permesso di attivare o disattivare la condivisione di questa anteprima',
  /** The text show below the QR Code SVG, with instructions on how to use it */
  'share-preview-menu.qr-code.instructions':
    "Scansiona il QR Code per aprire l'anteprima sul tuo telefono.",
  /** Placeholder message for the QR Code SVG when sharing is yet to be enabled */
  'share-preview-menu.qr-code.placeholder': 'Il QR Code apparirà qui',
  /** The <title> for the QR Code SVG that shows a link to the current preview */
  'share-preview-menu.qr-code.title': "Un QR Code che codifica l'URL: {{url}}",
  /** The first line of the label that renders next to the sharing toggle, it renders on two rows */
  'share-preview-menu.toggle-button.label_first-line': 'Condividi questa anteprima',
  /** The second line of the label that renders next to the sharing toggle, it renders on two rows */
  'share-preview-menu.toggle-button.label_second-line': 'con chiunque abbia il link',
  /** The text shown on the sharing toggle tooltip when sharing is enabled */
  'share-preview-menu.toggle-button.tooltip_disable': 'Disabilita la condivisione',
  /** The text shown on the sharing toggle tooltip when sharing is disabled */
  'share-preview-menu.toggle-button.tooltip_enable': 'Abilita la condivisione',

  /** The status of the clipboard operation when copying a URL */
  'share-url.clipboard.status_copying': "Copia dell'URL negli appunti in corso…",
  /** The status of the clipboard operation when copying a URL */
  'share-url.clipboard.status_failed': 'Copia non riuscita',
  /** The status of the clipboard operation when copying a URL */
  'share-url.clipboard.status_success': "L'URL è stato copiato negli appunti",
  /** The status of the clipboard operation when copying a URL */
  'share-url.clipboard.status_unsupported': 'Appunti non supportati',
  /** The share URL menu item text for opening a preview window */
  'share-url.menu-item.open.text': 'Apri anteprima',
})
