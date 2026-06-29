import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** The status of the channel connection */
  'channel.status_connected': 'Připojeno',
  /** The status of the channel connection */
  'channel.status_connecting': 'Připojování',
  /** The status of the channel connection */
  'channel.status_disconnected': 'Odpojeno',
  /** The status of the channel connection */
  'channel.status_reconnecting': 'Opětovné připojování',

  /** The title shown above the document list */
  'document-list-pane.document-list.title': 'Dokumenty na této stránce',
  /** The text shown if the document list is unable to render */
  'document-list-pane.error.text': 'Seznam dokumentů nelze zobrazit',
  /** The label for the ordering that lists documents in the order they appear on the page */
  'document-list-pane.ordering.by-appearance': 'Podle pořadí',
  /** The label for the ordering that lists documents by when they were last edited */
  'document-list-pane.ordering.last-edited': 'Naposledy upraveno',

  /** The text shown if the document editor is unable to render */
  'document-pane.error.text': 'Editor dokumentů nelze zobrazit',

  /** The text shown on the button for bypassing after a connection has failed */
  'error-card.continue-button.text': 'Přesto pokračovat',
  /** The text shown on the button for retrying after a connection has failed */
  'error-card.retry-button.text': 'Zkusit znovu',
  /** The title on the card shown after a connection has failed */
  'error-card.title': 'Došlo k chybě',

  /** The text shown when the document is used in a single location */
  'locations-banner.locations-count_one': 'Použito na jedné stránce',
  /** The text shown when the document is used in multiple locations */
  'locations-banner.locations-count_other': 'Použito na {{count}} stránkách',
  /** The text shown when a resolver exists but the document is not used in any locations */
  'locations-banner.locations-count_zero': 'Nepoužito na žádné stránce',
  /** The text shown whilst the locations resolver is executing */
  'locations-banner.resolving.text': 'Zjišťování umístění...',

  /** The label shown on a main document in the list pane */
  'main-document.label': 'Hlavní dokument',
  /** The warning message text shown when a defined resolver fails to return a main document */
  'main-document.missing.text': 'Chybí hlavní dokument pro <Code>{{path}}</Code>',

  /** The label for the tab that shows the document editor at narrow viewports */
  'narrow-tabs.content-tab.label': 'Struktura',
  /** The label for the tab that shows the navigator at narrow viewports */
  'narrow-tabs.navigator-tab.label': 'Navigátor',
  /** The label for the tab that shows the preview at narrow viewports */
  'narrow-tabs.preview-tab.label': 'Prezentace',

  /** The label for a generic error message */
  'presentation-error.label': 'Chybová zpráva',

  /** The toast description for the error message explaining that the iframe is blocked from loading due to a security mismatch. */
  'preview-frame.configuration.error.description':
    'Náhledový iframe je nakonfigurován pro načítání <Code>{{targetOrigin}}</Code>, ale hlášený původ je <Code>{{reportedOrigin}}</Code>. Presentation Tool se z bezpečnostních důvodů nemůže připojit k neznámým původům. Aktualizujte konfiguraci <Code>presentationTool.allowOrigins</Code>, aby bylo povoleno připojení k Visual Editing a Loaders.',
  /** The title of the error toast that shows when the preview iframe times out while waiting for a connection over comlink to establish, and the root cause is discovered to be that the iframe is loading on an URL origin that's not in the allow list. */
  'preview-frame.configuration.error.title': 'Neshoda původu URL náhledu',
  /** The text shown when the preview frame cannot connect to Presentation */
  'preview-frame.connection.error.text': 'Nelze se připojit k náhledu',
  /** The text shown on the button for dismissing the error overlay after a timeout */
  'preview-frame.continue-button.text': 'Přesto pokračovat',
  /** The label for the loader's connection status */
  'preview-frame.loader.connection-status.label': 'Stav připojení loaderu',
  /** The `aria-label` for the navigator toggle button */
  'preview-frame.navigator.toggle-button.aria-label': 'Přepnout navigátor',
  /** The tooltip text for the navigator toggle button */
  'preview-frame.navigator.toggle-button.tooltip': 'Přepnout navigátor',
  /** The label for the overlay's connection status */
  'preview-frame.overlay.connection-status.label': 'Stav připojení překrytí',
  /** The text shown on the overlay toggle button */
  'preview-frame.overlay.toggle-button.text': 'Upravit',
  /** The text shown on the overlay toggle tooltip when overlays are enabled */
  'preview-frame.overlay.toggle-button.tooltip_disable': 'Zakázat překrytí pro úpravy',
  /** The text shown on the overlay toggle tooltip when overlays are disabled */
  'preview-frame.overlay.toggle-button.tooltip_enable': 'Povolit překrytí pro úpravy',
  /** The text description for the published perspective switcher menu item */
  'preview-frame.perspective.published.text': 'Zobrazit tuto stránku s publikovaným obsahem',
  /** The `aria-label` for the refresh button */
  'preview-frame.refresh-button.aria-label': 'Obnovit náhled',
  /** The tooltip text for the refresh button */
  'preview-frame.refresh-button.tooltip': 'Obnovit náhled',
  /** The `aria-label` for the button that opens the share menu */
  'preview-frame.share-button.aria-label': 'Sdílet tento náhled',
  /** Text describing the current status of the preview frame */
  'preview-frame.status_connecting': 'Připojování.',
  /** Text describing the current status of the preview frame */
  'preview-frame.status_loading': 'Načítání.',
  /** Text describing the current status of the preview frame */
  'preview-frame.status_refreshing': 'Obnovování.',
  /** Text describing the current status of the preview frame */
  'preview-frame.status_reloading': 'Obnovování.',
  /** Text describing the current status of the preview frame */
  'preview-frame.status_timeout':
    'Nelze se připojit, zkontrolujte konzoli prohlížeče pro více informací.',
  /** The `aria-label` for the button that switches viewport size */
  'preview-frame.viewport-button.aria-label': 'Přepnout velikost zobrazení',
  /** The viewport size button tooltip text when switching to a full width viewport */
  'preview-frame.viewport-button.tooltip_full': 'Přepnout na celé zobrazení',
  /** The viewport size button tooltip text when switching to a narrow viewport */
  'preview-frame.viewport-button.tooltip_narrow': 'Přepnout na úzké zobrazení',

  /** The validation error message shown when the preview location input is missing an origin */
  'preview-location-input.error_missing-origin': 'URL musí začínat {{origin}}',
  /** The validation error message shown when the preview location input's base path matches that of the studio */
  'preview-location-input.error_same-base-path':
    'URL nemůže mít stejnou základní cestu jako Studio {{basePath}}',

  /** The toast description for the error message explaining that the iframe won't navigate to the new preview URL due to an URL origin security mismatch. */
  'preview-search-param.configuration.error.description':
    'Router chce přejít na <Code>{{previewSearchParam}}</Code>, ale origin <Code>{{blockedOrigin}}</Code> není povolen. Aktualizujte konfiguraci <Code>presentationTool.allowOrigins</Code>, aby byl povolen.',
  /** The title of the error toast that shows when attempting to navigate to a preview URL origin that's not in the allow list. */
  'preview-search-param.configuration.error.title': 'Zablokovaná URL náhledu',

  /** Error toast that notifies that URL Preview Secrets can't be generated as the user lacks ACL grants */
  'preview-url-secret.missing-grants':
    'Nemáte oprávnění k vytváření URL Preview Secrets. To pravděpodobně způsobí selhání načítání náhledu.',

  /** Menu item in the share preview menu that allows copying the current preview URL, if sharing is enabled */
  'share-preview-menu.copy-url.text': 'Kopírovat odkaz na náhled',
  /** Fallback message shown when the current user is not permitted to share previews */
  'share-preview-menu.error_missing-grants': 'Nemáte oprávnění ke sdílení náhledů.',
  /** Error message toast that shows the current user does not have permission to toggle sharing of the current preview */
  'share-preview-menu.error_toggle-sharing': 'Nemáte oprávnění přepínat sdílení tohoto náhledu',
  /** The text show below the QR Code SVG, with instructions on how to use it */
  'share-preview-menu.qr-code.instructions':
    'Naskenujte QR kód a otevřete náhled na svém telefonu.',
  /** Placeholder message for the QR Code SVG when sharing is yet to be enabled */
  'share-preview-menu.qr-code.placeholder': 'QR kód se zobrazí zde',
  /** The <title> for the QR Code SVG that shows a link to the current preview */
  'share-preview-menu.qr-code.title': 'QR kód zakódující URL adresu: {{url}}',
  /** The first line of the label that renders next to the sharing toggle, it renders on two rows */
  'share-preview-menu.toggle-button.label_first-line': 'Sdílet tento náhled',
  /** The second line of the label that renders next to the sharing toggle, it renders on two rows */
  'share-preview-menu.toggle-button.label_second-line': 's kýmkoli, kdo má odkaz',
  /** The text shown on the sharing toggle tooltip when sharing is enabled */
  'share-preview-menu.toggle-button.tooltip_disable': 'Zakázat sdílení',
  /** The text shown on the sharing toggle tooltip when sharing is disabled */
  'share-preview-menu.toggle-button.tooltip_enable': 'Povolit sdílení',

  /** The status of the clipboard operation when copying a URL */
  'share-url.clipboard.status_copying': 'Kopírování URL adresy do schránky…',
  /** The status of the clipboard operation when copying a URL */
  'share-url.clipboard.status_failed': 'Kopírování se nezdařilo',
  /** The status of the clipboard operation when copying a URL */
  'share-url.clipboard.status_success': 'URL adresa byla zkopírována do schránky',
  /** The status of the clipboard operation when copying a URL */
  'share-url.clipboard.status_unsupported': 'Schránka není podporována',
  /** The share URL menu item text for opening a preview window */
  'share-url.menu-item.open.text': 'Otevřít náhled',
})
