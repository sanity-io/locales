import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** The status of the channel connection */
  'channel.status_connected': 'Tilkoblet',
  /** The status of the channel connection */
  'channel.status_connecting': 'Kobler til',
  /** The status of the channel connection */
  'channel.status_disconnected': 'Frakoblet',
  /** The status of the channel connection */
  'channel.status_reconnecting': 'Kobler til på nytt',

  /** The title shown above the document list */
  'document-list-pane.document-list.title': 'Dokumenter på denne siden',
  /** The text shown if the document list is unable to render */
  'document-list-pane.error.text': 'Kunne ikke vise dokumentlisten',
  /** The label for the ordering that lists documents in the order they appear on the page */
  'document-list-pane.ordering.by-appearance': 'Etter utseende',
  /** The label for the ordering that lists documents by when they were last edited */
  'document-list-pane.ordering.last-edited': 'Sist redigert',

  /** The text shown if the document editor is unable to render */
  'document-pane.error.text': 'Kunne ikke vise dokumentredigereren',

  /** The text shown on the button for bypassing after a connection has failed */
  'error-card.continue-button.text': 'Fortsett likevel',
  /** The text shown on the button for retrying after a connection has failed */
  'error-card.retry-button.text': 'Prøv igjen',
  /** The title on the card shown after a connection has failed */
  'error-card.title': 'En feil oppstod',

  /** The text shown when the document is used in a single location */
  'locations-banner.locations-count_one': 'Brukt på én side',
  /** The text shown when the document is used in multiple locations */
  'locations-banner.locations-count_other': 'Brukt på {{count}} sider',
  /** The text shown when a resolver exists but the document is not used in any locations */
  'locations-banner.locations-count_zero': 'Ikke brukt på noen sider',
  /** The text shown whilst the locations resolver is executing */
  'locations-banner.resolving.text': 'Løser opp plasseringer...',

  /** The label shown on a main document in the list pane */
  'main-document.label': 'Hoveddokument',
  /** The warning message text shown when a defined resolver fails to return a main document */
  'main-document.missing.text': 'Mangler et hoveddokument for <Code>{{path}}</Code>',

  /** The label for the tab that shows the document editor at narrow viewports */
  'narrow-tabs.content-tab.label': 'Struktur',
  /** The label for the tab that shows the navigator at narrow viewports */
  'narrow-tabs.navigator-tab.label': 'Navigator',
  /** The label for the tab that shows the preview at narrow viewports */
  'narrow-tabs.preview-tab.label': 'Presentasjon',

  /** The label for a generic error message */
  'presentation-error.label': 'Feilmelding',

  /** The toast description for the error message explaining that the iframe is blocked from loading due to a security mismatch. */
  'preview-frame.configuration.error.description':
    'Forhåndsvisnings-iframen er konfigurert til å laste <Code>{{targetOrigin}}</Code>, men den rapporterte opprinnelsen er <Code>{{reportedOrigin}}</Code>. Presentation Tool kan ikke koble til ukjente opprinnelser av sikkerhetshensyn. Oppdater konfigurasjonen for <Code>presentationTool.allowOrigins</Code> for å tillate tilkobling til Visual Editing og Loaders.',
  /** The title of the error toast that shows when the preview iframe times out while waiting for a connection over comlink to establish, and the root cause is discovered to be that the iframe is loading on an URL origin that's not in the allow list. */
  'preview-frame.configuration.error.title': 'Feil samsvar for forhåndsvisnings-URL-opprinnelse',
  /** The text shown when the preview frame cannot connect to Presentation */
  'preview-frame.connection.error.text': 'Kunne ikke koble til forhåndsvisningen',
  /** The text shown on the button for dismissing the error overlay after a timeout */
  'preview-frame.continue-button.text': 'Fortsett uansett',
  /** The label for the loader's connection status */
  'preview-frame.loader.connection-status.label': 'Tilkoblingsstatus for loader',
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
  'preview-frame.perspective.published.text': 'Vis denne siden med publisert innhold',
  /** The `aria-label` for the refresh button */
  'preview-frame.refresh-button.aria-label': 'Oppdater forhåndsvisning',
  /** The tooltip text for the refresh button */
  'preview-frame.refresh-button.tooltip': 'Oppdater forhåndsvisning',
  /** The `aria-label` for the button that opens the share menu */
  'preview-frame.share-button.aria-label': 'Del denne forhåndsvisningen',
  /** Text describing the current status of the preview frame */
  'preview-frame.status_connecting': 'Kobler til.',
  /** Text describing the current status of the preview frame */
  'preview-frame.status_loading': 'Laster.',
  /** Text describing the current status of the preview frame */
  'preview-frame.status_refreshing': 'Oppdaterer.',
  /** Text describing the current status of the preview frame */
  'preview-frame.status_reloading': 'Oppdaterer.',
  /** Text describing the current status of the preview frame */
  'preview-frame.status_timeout':
    'Kan ikke koble til, sjekk nettleserkonsollen for mer informasjon.',
  /** The `aria-label` for the button that switches viewport size */
  'preview-frame.viewport-button.aria-label': 'Bytt visningsportstørrelse',
  /** The viewport size button tooltip text when switching to a full width viewport */
  'preview-frame.viewport-button.tooltip_full': 'Bytt til full visningsport',
  /** The viewport size button tooltip text when switching to a narrow viewport */
  'preview-frame.viewport-button.tooltip_narrow': 'Bytt til smal visningsport',

  /** The validation error message shown when the preview location input is missing an origin */
  'preview-location-input.error_missing-origin': 'URL må starte med {{origin}}',
  /** The validation error message shown when the preview location input's base path matches that of the studio */
  'preview-location-input.error_same-base-path':
    'URL kan ikke ha samme basissti som Studio {{basePath}}',

  /** The toast description for the error message explaining that the iframe won't navigate to the new preview URL due to an URL origin security mismatch. */
  'preview-search-param.configuration.error.description':
    'Ruteren ønsker å navigere til <Code>{{previewSearchParam}}</Code>, men opprinnelsen <Code>{{blockedOrigin}}</Code> er ikke tillatt. Oppdater konfigurasjonen din for <Code>presentationTool.allowOrigins</Code> for å tillate det.',
  /** The title of the error toast that shows when attempting to navigate to a preview URL origin that's not in the allow list. */
  'preview-search-param.configuration.error.title': 'Blokkert forhåndsvisnings-URL',

  /** Error toast that notifies that URL Preview Secrets can't be generated as the user lacks ACL grants */
  'preview-url-secret.missing-grants':
    'Du har ikke tillatelse til å opprette URL-forhåndsvisningshemmeligheter. Dette vil sannsynligvis føre til at forhåndsvisningen ikke laster.',

  /** Menu item in the share preview menu that allows copying the current preview URL, if sharing is enabled */
  'share-preview-menu.copy-url.text': 'Kopier forhåndsvisningslenke',
  /** Fallback message shown when the current user is not permitted to share previews */
  'share-preview-menu.error_missing-grants':
    'Du har ikke tillatelse til å dele forhåndsvisninger. ',
  /** Error message toast that shows the current user does not have permission to toggle sharing of the current preview */
  'share-preview-menu.error_toggle-sharing':
    'Du har ikke tillatelse til å slå av/på deling av denne forhåndsvisningen',
  /** The text show below the QR Code SVG, with instructions on how to use it */
  'share-preview-menu.qr-code.instructions':
    'Skann QR-koden for å åpne forhåndsvisningen på telefonen din.',
  /** Placeholder message for the QR Code SVG when sharing is yet to be enabled */
  'share-preview-menu.qr-code.placeholder': 'QR-koden vil vises her',
  /** The <title> for the QR Code SVG that shows a link to the current preview */
  'share-preview-menu.qr-code.title': 'En QR-kode som koder URL-en: {{url}}',
  /** The first line of the label that renders next to the sharing toggle, it renders on two rows */
  'share-preview-menu.toggle-button.label_first-line': 'Del denne forhåndsvisningen',
  /** The second line of the label that renders next to the sharing toggle, it renders on two rows */
  'share-preview-menu.toggle-button.label_second-line': 'med alle som har lenken',
  /** The text shown on the sharing toggle tooltip when sharing is enabled */
  'share-preview-menu.toggle-button.tooltip_disable': 'Deaktiver deling',
  /** The text shown on the sharing toggle tooltip when sharing is disabled */
  'share-preview-menu.toggle-button.tooltip_enable': 'Aktiver deling',

  /** The status of the clipboard operation when copying a URL */
  'share-url.clipboard.status_copying': 'Kopierer URL til utklippstavlen…',
  /** The status of the clipboard operation when copying a URL */
  'share-url.clipboard.status_failed': 'Kopiering mislyktes',
  /** The status of the clipboard operation when copying a URL */
  'share-url.clipboard.status_success': 'URL-en er kopiert til utklippstavlen',
  /** The status of the clipboard operation when copying a URL */
  'share-url.clipboard.status_unsupported': 'Utklippstavle støttes ikke',
  /** The share URL menu item text for opening a preview window */
  'share-url.menu-item.open.text': 'Åpne forhåndsvisning',
})
