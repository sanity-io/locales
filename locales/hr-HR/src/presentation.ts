import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** The status of the channel connection */
  'channel.status_connected': 'Povezano',
  /** The status of the channel connection */
  'channel.status_connecting': 'Povezivanje',
  /** The status of the channel connection */
  'channel.status_disconnected': 'Odspojeno',
  /** The status of the channel connection */
  'channel.status_reconnecting': 'Ponovno povezivanje',

  /** The title shown above the document list */
  'document-list-pane.document-list.title': 'Dokumenti na ovoj stranici',
  /** The text shown if the document list is unable to render */
  'document-list-pane.error.text': 'Nije moguće prikazati popis dokumenata',

  /** The text shown if the document editor is unable to render */
  'document-pane.error.text': 'Nije moguće prikazati uređivač dokumenata',

  /** The text shown on the button for bypassing after a connection has failed */
  'error-card.continue-button.text': 'Svejedno nastavi',
  /** The text shown on the button for retrying after a connection has failed */
  'error-card.retry-button.text': 'Pokušaj ponovo',
  /** The title on the card shown after a connection has failed */
  'error-card.title': 'Došlo je do pogreške',

  /** The text shown when the document is used in a single location */
  'locations-banner.locations-count_one': 'Koristi se na jednoj stranici',
  /** The text shown when the document is used in multiple locations */
  'locations-banner.locations-count_other': 'Koristi se na {{count}} stranica',
  /** The text shown when a resolver exists but the document is not used in any locations */
  'locations-banner.locations-count_zero': 'Ne koristi se ni na jednoj stranici',
  /** The text shown whilst the locations resolver is executing */
  'locations-banner.resolving.text': 'Razrješavanje lokacija...',

  /** The label shown on a main document in the list pane */
  'main-document.label': 'Glavni dokument',
  /** The warning message text shown when a defined resolver fails to return a main document */
  'main-document.missing.text': 'Nedostaje glavni dokument za <Code>{{path}}</Code>',

  /** The label for the tab that shows the document editor at narrow viewports */
  'narrow-tabs.content-tab.label': 'Struktura',
  /** The label for the tab that shows the navigator at narrow viewports */
  'narrow-tabs.navigator-tab.label': 'Navigator',
  /** The label for the tab that shows the preview at narrow viewports */
  'narrow-tabs.preview-tab.label': 'Prezentacija',

  /** The label for a generic error message */
  'presentation-error.label': 'Poruka o pogrešci',

  /** The toast description for the error message explaining that the iframe is blocked from loading due to a security mismatch. */
  'preview-frame.configuration.error.description':
    'Preview iframe je konfiguriran za učitavanje <Code>{{targetOrigin}}</Code>, ali prijavljeno podrijetlo je <Code>{{reportedOrigin}}</Code>. Presentation Tool se ne može povezati s nepoznatim podrijetlima iz sigurnosnih razloga. Ažurirajte svoju <Code>presentationTool.allowOrigins</Code> konfiguraciju kako biste omogućili povezivanje s Visual Editing i Loaders.',
  /** The title of the error toast that shows when the preview iframe times out while waiting for a connection over comlink to establish, and the root cause is discovered to be that the iframe is loading on an URL origin that's not in the allow list. */
  'preview-frame.configuration.error.title': 'Nepodudaranje podrijetla URL-a pregleda',
  /** The text shown when the preview frame cannot connect to Presentation */
  'preview-frame.connection.error.text': 'Nije moguće povezati se s pregledom',
  /** The text shown on the button for dismissing the error overlay after a timeout */
  'preview-frame.continue-button.text': 'Svejedno nastavi',
  /** The label for the loader's connection status */
  'preview-frame.loader.connection-status.label': 'Status veze loadera',
  /** The `aria-label` for the navigator toggle button */
  'preview-frame.navigator.toggle-button.aria-label': 'Uključi/isključi navigator',
  /** The tooltip text for the navigator toggle button */
  'preview-frame.navigator.toggle-button.tooltip': 'Uključi/isključi navigator',
  /** The label for the overlay's connection status */
  'preview-frame.overlay.connection-status.label': 'Status veze overlaya',
  /** The text shown on the overlay toggle button */
  'preview-frame.overlay.toggle-button.text': 'Uredi',
  /** The text shown on the overlay toggle tooltip when overlays are enabled */
  'preview-frame.overlay.toggle-button.tooltip_disable': 'Onemogući overlay za uređivanje',
  /** The text shown on the overlay toggle tooltip when overlays are disabled */
  'preview-frame.overlay.toggle-button.tooltip_enable': 'Omogući overlay za uređivanje',
  /** The text description for the published perspective switcher menu item */
  'preview-frame.perspective.published.text': 'Pregledaj ovu stranicu s objavljenim sadržajem',
  /** The `aria-label` for the refresh button */
  'preview-frame.refresh-button.aria-label': 'Osvježi pregled',
  /** The tooltip text for the refresh button */
  'preview-frame.refresh-button.tooltip': 'Osvježi pregled',
  /** The `aria-label` for the button that opens the share menu */
  'preview-frame.share-button.aria-label': 'Podijeli ovaj pregled',
  /** Text describing the current status of the preview frame */
  'preview-frame.status_connecting': 'Povezivanje.',
  /** Text describing the current status of the preview frame */
  'preview-frame.status_loading': 'Učitavanje.',
  /** Text describing the current status of the preview frame */
  'preview-frame.status_refreshing': 'Osvježavanje.',
  /** Text describing the current status of the preview frame */
  'preview-frame.status_reloading': 'Osvježavanje.',
  /** Text describing the current status of the preview frame */
  'preview-frame.status_timeout':
    'Nije moguće uspostaviti vezu, provjerite konzolu preglednika za više informacija.',
  /** The `aria-label` for the button that switches viewport size */
  'preview-frame.viewport-button.aria-label': 'Promijeni veličinu prikaza',
  /** The viewport size button tooltip text when switching to a full width viewport */
  'preview-frame.viewport-button.tooltip_full': 'Prebaci na puni prikaz',
  /** The viewport size button tooltip text when switching to a narrow viewport */
  'preview-frame.viewport-button.tooltip_narrow': 'Prebaci na uski prikaz',

  /** The validation error message shown when the preview location input is missing an origin */
  'preview-location-input.error_missing-origin': 'URL mora počinjati s {{origin}}',
  /** The validation error message shown when the preview location input's base path matches that of the studio */
  'preview-location-input.error_same-base-path':
    'URL ne može imati isti osnovni put kao Studio {{basePath}}',

  /** The toast description for the error message explaining that the iframe won't navigate to the new preview URL due to an URL origin security mismatch. */
  'preview-search-param.configuration.error.description':
    'Usmjerivač želi navigirati na <Code>{{previewSearchParam}}</Code>, ali izvor <Code>{{blockedOrigin}}</Code> nije dopušten. Ažurirajte svoju <Code>presentationTool.allowOrigins</Code> konfiguraciju kako biste to dopustili.',
  /** The title of the error toast that shows when attempting to navigate to a preview URL origin that's not in the allow list. */
  'preview-search-param.configuration.error.title': 'Blokiran URL pregleda',

  /** Error toast that notifies that URL Preview Secrets can't be generated as the user lacks ACL grants */
  'preview-url-secret.missing-grants':
    'Nemate dopuštenje za stvaranje URL Preview Secrets. To će vjerojatno uzrokovati neuspješno učitavanje pregleda.',

  /** Menu item in the share preview menu that allows copying the current preview URL, if sharing is enabled */
  'share-preview-menu.copy-url.text': 'Kopiraj vezu za pregled',
  /** Fallback message shown when the current user is not permitted to share previews */
  'share-preview-menu.error_missing-grants': 'Nemate dopuštenje za dijeljenje pregleda.',
  /** Error message toast that shows the current user does not have permission to toggle sharing of the current preview */
  'share-preview-menu.error_toggle-sharing':
    'Nemate dopuštenje za uključivanje/isključivanje dijeljenja ovog pregleda',
  /** The text show below the QR Code SVG, with instructions on how to use it */
  'share-preview-menu.qr-code.instructions':
    'Skenirajte QR kod kako biste otvorili pregled na svom telefonu.',
  /** Placeholder message for the QR Code SVG when sharing is yet to be enabled */
  'share-preview-menu.qr-code.placeholder': 'QR kod će se pojaviti ovdje',
  /** The <title> for the QR Code SVG that shows a link to the current preview */
  'share-preview-menu.qr-code.title': 'QR kod koji kodira URL: {{url}}',
  /** The first line of the label that renders next to the sharing toggle, it renders on two rows */
  'share-preview-menu.toggle-button.label_first-line': 'Podijeli ovaj pregled',
  /** The second line of the label that renders next to the sharing toggle, it renders on two rows */
  'share-preview-menu.toggle-button.label_second-line': 'sa svima koji imaju poveznicu',
  /** The text shown on the sharing toggle tooltip when sharing is enabled */
  'share-preview-menu.toggle-button.tooltip_disable': 'Onemogući dijeljenje',
  /** The text shown on the sharing toggle tooltip when sharing is disabled */
  'share-preview-menu.toggle-button.tooltip_enable': 'Omogući dijeljenje',

  /** The status of the clipboard operation when copying a URL */
  'share-url.clipboard.status_copying': 'Kopiranje URL-a u međuspremnik…',
  /** The status of the clipboard operation when copying a URL */
  'share-url.clipboard.status_failed': 'Kopiranje nije uspjelo',
  /** The status of the clipboard operation when copying a URL */
  'share-url.clipboard.status_success': 'URL je kopiran u međuspremnik',
  /** The status of the clipboard operation when copying a URL */
  'share-url.clipboard.status_unsupported': 'Međuspremnik nije podržan',
  /** The share URL menu item text for opening a preview window */
  'share-url.menu-item.open.text': 'Otvori pregled',
})
