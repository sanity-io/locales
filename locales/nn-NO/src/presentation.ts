import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** The status of the channel connection */
  'channel.status_connected': 'Tilkopla',
  /** The status of the channel connection */
  'channel.status_connecting': 'Koplar til',
  /** The status of the channel connection */
  'channel.status_disconnected': 'Fråkopla',
  /** The status of the channel connection */
  'channel.status_reconnecting': 'Koplar til på nytt',

  /** The title shown above the document list */
  'document-list-pane.document-list.title': 'Dokument på denne sida',
  /** The text shown if the document list is unable to render */
  'document-list-pane.error.text': 'Kunne ikkje vise dokumentlista',
  /** The label for the ordering that lists documents in the order they appear on the page */
  'document-list-pane.ordering.by-appearance': 'Etter utsjånad',
  /** The label for the ordering that lists documents by when they were last edited */
  'document-list-pane.ordering.last-edited': 'Sist redigert',

  /** The text shown if the document editor is unable to render */
  'document-pane.error.text': 'Kunne ikkje vise dokumentredigeraren',

  /** The text shown on the button for bypassing after a connection has failed */
  'error-card.continue-button.text': 'Hald fram likevel',
  /** The text shown on the button for retrying after a connection has failed */
  'error-card.retry-button.text': 'Prøv på nytt',
  /** The title on the card shown after a connection has failed */
  'error-card.title': 'Det oppstod ein feil',

  /** The text shown when the document is used in a single location */
  'locations-banner.locations-count_one': 'Brukt på éi side',
  /** The text shown when the document is used in multiple locations */
  'locations-banner.locations-count_other': 'Brukt på {{count}} sider',
  /** The text shown when a resolver exists but the document is not used in any locations */
  'locations-banner.locations-count_zero': 'Ikkje brukt på nokon sider',
  /** The text shown whilst the locations resolver is executing */
  'locations-banner.resolving.text': 'Løyser opp plasseringar...',

  /** The label shown on a main document in the list pane */
  'main-document.label': 'Hovuddokument',
  /** The warning message text shown when a defined resolver fails to return a main document */
  'main-document.missing.text': 'Manglar eit hovuddokument for <Code>{{path}}</Code>',

  /** The label for the tab that shows the document editor at narrow viewports */
  'narrow-tabs.content-tab.label': 'Struktur',
  /** The label for the tab that shows the navigator at narrow viewports */
  'narrow-tabs.navigator-tab.label': 'Navigator',
  /** The label for the tab that shows the preview at narrow viewports */
  'narrow-tabs.preview-tab.label': 'Presentation',

  /** The label for a generic error message */
  'presentation-error.label': 'Feilmelding',

  /** The toast description for the error message explaining that the iframe is blocked from loading due to a security mismatch. */
  'preview-frame.configuration.error.description':
    'Førehandsvisings-iframe-en er konfigurert til å laste <Code>{{targetOrigin}}</Code>, men den rapporterte opprinninga er <Code>{{reportedOrigin}}</Code>. Presentation Tool kan ikkje kopla til ukjende opprinningar av tryggingsomsyn. Oppdater konfigurasjonen din for <Code>presentationTool.allowOrigins</Code> for å tillate tilkopling til Visual Editing og Loaders.',
  /** The title of the error toast that shows when the preview iframe times out while waiting for a connection over comlink to establish, and the root cause is discovered to be that the iframe is loading on an URL origin that's not in the allow list. */
  'preview-frame.configuration.error.title':
    'Feil samsvar for opprinninga til førehandsvisings-URL',
  /** The text shown when the preview frame cannot connect to Presentation */
  'preview-frame.connection.error.text': 'Kunne ikkje kopla til førehandsvisinga',
  /** The text shown on the button for dismissing the error overlay after a timeout */
  'preview-frame.continue-button.text': 'Hald fram likevel',
  /** The label for the loader's connection status */
  'preview-frame.loader.connection-status.label': 'Tilkoplingsstatus for loader',
  /** The `aria-label` for the navigator toggle button */
  'preview-frame.navigator.toggle-button.aria-label': 'Slå av/på navigator',
  /** The tooltip text for the navigator toggle button */
  'preview-frame.navigator.toggle-button.tooltip': 'Slå av/på navigator',
  /** The label for the overlay's connection status */
  'preview-frame.overlay.connection-status.label': 'Tilkoblingsstatus for overlay',
  /** The text shown on the overlay toggle button */
  'preview-frame.overlay.toggle-button.text': 'Rediger',
  /** The text shown on the overlay toggle tooltip when overlays are enabled */
  'preview-frame.overlay.toggle-button.tooltip_disable': 'Deaktiver redigeringsoverlay',
  /** The text shown on the overlay toggle tooltip when overlays are disabled */
  'preview-frame.overlay.toggle-button.tooltip_enable': 'Aktiver redigeringsoverlay',
  /** The text description for the published perspective switcher menu item */
  'preview-frame.perspective.published.text': 'Vis denne sida med publisert innhald',
  /** The `aria-label` for the refresh button */
  'preview-frame.refresh-button.aria-label': 'Oppdater førehandsvisning',
  /** The tooltip text for the refresh button */
  'preview-frame.refresh-button.tooltip': 'Oppdater førehandsvisning',
  /** The `aria-label` for the button that opens the share menu */
  'preview-frame.share-button.aria-label': 'Del denne førehandsvisinga',
  /** Text describing the current status of the preview frame */
  'preview-frame.status_connecting': 'Koplar til.',
  /** Text describing the current status of the preview frame */
  'preview-frame.status_loading': 'Lastar.',
  /** Text describing the current status of the preview frame */
  'preview-frame.status_refreshing': 'Oppdaterer.',
  /** Text describing the current status of the preview frame */
  'preview-frame.status_reloading': 'Oppdaterer.',
  /** Text describing the current status of the preview frame */
  'preview-frame.status_timeout':
    'Klarte ikkje å kopla til, sjå nettlesarkonsollen for meir informasjon.',
  /** The `aria-label` for the button that switches viewport size */
  'preview-frame.viewport-button.aria-label': 'Byt visingsportsstorleik',
  /** The viewport size button tooltip text when switching to a full width viewport */
  'preview-frame.viewport-button.tooltip_full': 'Byt til full visingsport',
  /** The viewport size button tooltip text when switching to a narrow viewport */
  'preview-frame.viewport-button.tooltip_narrow': 'Byt til smal visingsport',

  /** The validation error message shown when the preview location input is missing an origin */
  'preview-location-input.error_missing-origin': 'URL-en må starta med {{origin}}',
  /** The validation error message shown when the preview location input's base path matches that of the studio */
  'preview-location-input.error_same-base-path':
    'URL-en kan ikkje ha same grunnsti som Studio {{basePath}}',

  /** The toast description for the error message explaining that the iframe won't navigate to the new preview URL due to an URL origin security mismatch. */
  'preview-search-param.configuration.error.description':
    'Ruteren vil navigera til <Code>{{previewSearchParam}}</Code>, men opprinninga <Code>{{blockedOrigin}}</Code> er ikkje tillaten. Oppdater konfigurasjonen din for <Code>presentationTool.allowOrigins</Code> for å tillata det.',
  /** The title of the error toast that shows when attempting to navigate to a preview URL origin that's not in the allow list. */
  'preview-search-param.configuration.error.title': 'Blokkert førehandsvisings-URL',

  /** Error toast that notifies that URL Preview Secrets can't be generated as the user lacks ACL grants */
  'preview-url-secret.missing-grants':
    'Du har ikkje løyve til å oppretta URL Preview Secrets. Dette vil truleg føra til at førehandsvisinga ikkje lastar.',

  /** Menu item in the share preview menu that allows copying the current preview URL, if sharing is enabled */
  'share-preview-menu.copy-url.text': 'Kopier førehandsvisingslenke',
  /** Fallback message shown when the current user is not permitted to share previews */
  'share-preview-menu.error_missing-grants': 'Du har ikkje løyve til å dela førehandsvisingar.',
  /** Error message toast that shows the current user does not have permission to toggle sharing of the current preview */
  'share-preview-menu.error_toggle-sharing':
    'Du har ikkje løyve til å slå deling av denne førehandsvisinga av eller på',
  /** The text show below the QR Code SVG, with instructions on how to use it */
  'share-preview-menu.qr-code.instructions':
    'Skann QR-koden for å opna førehandsvisinga på telefonen din.',
  /** Placeholder message for the QR Code SVG when sharing is yet to be enabled */
  'share-preview-menu.qr-code.placeholder': 'QR-koden vil dukka opp her',
  /** The <title> for the QR Code SVG that shows a link to the current preview */
  'share-preview-menu.qr-code.title': 'Ein QR-kode som kodar URL-en: {{url}}',
  /** The first line of the label that renders next to the sharing toggle, it renders on two rows */
  'share-preview-menu.toggle-button.label_first-line': 'Del denne førehandsvisinga',
  /** The second line of the label that renders next to the sharing toggle, it renders on two rows */
  'share-preview-menu.toggle-button.label_second-line': 'med alle som har lenkja',
  /** The text shown on the sharing toggle tooltip when sharing is enabled */
  'share-preview-menu.toggle-button.tooltip_disable': 'Slå av deling',
  /** The text shown on the sharing toggle tooltip when sharing is disabled */
  'share-preview-menu.toggle-button.tooltip_enable': 'Slå på deling',

  /** The status of the clipboard operation when copying a URL */
  'share-url.clipboard.status_copying': 'Koperer URL til utklippstavla…',
  /** The status of the clipboard operation when copying a URL */
  'share-url.clipboard.status_failed': 'Kopiering mislukkast',
  /** The status of the clipboard operation when copying a URL */
  'share-url.clipboard.status_success': 'URL-en er kopiert til utklippstavla',
  /** The status of the clipboard operation when copying a URL */
  'share-url.clipboard.status_unsupported': 'Utklippstavle støttast ikkje',
  /** The share URL menu item text for opening a preview window */
  'share-url.menu-item.open.text': 'Opna førehandsvisinga',
})
