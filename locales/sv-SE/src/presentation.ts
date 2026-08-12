import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** The status of the channel connection */
  'channel.status_connected': 'Ansluten',
  /** The status of the channel connection */
  'channel.status_connecting': 'Ansluter',
  /** The status of the channel connection */
  'channel.status_disconnected': 'Frånkopplad',
  /** The status of the channel connection */
  'channel.status_reconnecting': 'Återansluter',

  /** The title shown above the document list */
  'document-list-pane.document-list.title': 'Dokument på den här sidan',
  /** The text shown if the document list is unable to render */
  'document-list-pane.error.text': 'Kunde inte rendera dokumentlistan',
  /** The label for the ordering that lists documents in the order they appear on the page */
  'document-list-pane.ordering.by-appearance': 'Efter utseende',
  /** The label for the ordering that lists documents by when they were last edited */
  'document-list-pane.ordering.last-edited': 'Senast redigerad',

  /** The text shown if the document editor is unable to render */
  'document-pane.error.text': 'Kunde inte rendera dokumentredigeraren',

  /** The text shown on the button for bypassing after a connection has failed */
  'error-card.continue-button.text': 'Fortsätt ändå',
  /** The text shown on the button for retrying after a connection has failed */
  'error-card.retry-button.text': 'Försök igen',
  /** The title on the card shown after a connection has failed */
  'error-card.title': 'Ett fel uppstod',

  /** The text shown when the document is used in a single location */
  'locations-banner.locations-count_one': 'Används på en sida',
  /** The text shown when the document is used in multiple locations */
  'locations-banner.locations-count_other': 'Används på {{count}} sidor',
  /** The text shown when a resolver exists but the document is not used in any locations */
  'locations-banner.locations-count_zero': 'Används inte på några sidor',
  /** The text shown whilst the locations resolver is executing */
  'locations-banner.resolving.text': 'Löser upp platser...',

  /** The label shown on a main document in the list pane */
  'main-document.label': 'Huvuddokument',
  /** The warning message text shown when a defined resolver fails to return a main document */
  'main-document.missing.text': 'Saknar ett huvuddokument för <Code>{{path}}</Code>',

  /** The label for the tab that shows the document editor at narrow viewports */
  'narrow-tabs.content-tab.label': 'Struktur',
  /** The label for the tab that shows the navigator at narrow viewports */
  'narrow-tabs.navigator-tab.label': 'Navigator',
  /** The label for the tab that shows the preview at narrow viewports */
  'narrow-tabs.preview-tab.label': 'Presentation',

  /** The label for a generic error message */
  'presentation-error.label': 'Felmeddelande',

  /** The toast description for the error message explaining that the iframe is blocked from loading due to a security mismatch. */
  'preview-frame.configuration.error.description':
    'Förhandsgranskningens iframe är konfigurerad att läsa in <Code>{{targetOrigin}}</Code>, men det rapporterade ursprunget är <Code>{{reportedOrigin}}</Code>. Presentation Tool kan inte ansluta till okända ursprung av säkerhetsskäl. Uppdatera din <Code>presentationTool.allowOrigins</Code>-konfiguration för att tillåta anslutning till Visual Editing och Loaders.',
  /** The title of the error toast that shows when the preview iframe times out while waiting for a connection over comlink to establish, and the root cause is discovered to be that the iframe is loading on an URL origin that's not in the allow list. */
  'preview-frame.configuration.error.title': 'Ursprungsmismatch för förhandsgransknings-URL',
  /** The text shown when the preview frame cannot connect to Presentation */
  'preview-frame.connection.error.text': 'Kunde inte ansluta till förhandsgranskningen',
  /** The text shown on the button for dismissing the error overlay after a timeout */
  'preview-frame.continue-button.text': 'Fortsätt ändå',
  /** The label for the loader's connection status */
  'preview-frame.loader.connection-status.label': 'Loader-anslutningsstatus',
  /** The `aria-label` for the navigator toggle button */
  'preview-frame.navigator.toggle-button.aria-label': 'Växla navigator',
  /** The tooltip text for the navigator toggle button */
  'preview-frame.navigator.toggle-button.tooltip': 'Växla navigator',
  /** The label for the overlay's connection status */
  'preview-frame.overlay.connection-status.label': 'Anslutningsstatus för overlay',
  /** The text shown on the overlay toggle button */
  'preview-frame.overlay.toggle-button.text': 'Redigera',
  /** The text shown on the overlay toggle tooltip when overlays are enabled */
  'preview-frame.overlay.toggle-button.tooltip_disable': 'Inaktivera redigeringsoverlay',
  /** The text shown on the overlay toggle tooltip when overlays are disabled */
  'preview-frame.overlay.toggle-button.tooltip_enable': 'Aktivera redigeringsoverlay',
  /** The text description for the published perspective switcher menu item */
  'preview-frame.perspective.published.text': 'Visa den här sidan med publicerat innehåll',
  /** The `aria-label` for the refresh button */
  'preview-frame.refresh-button.aria-label': 'Uppdatera förhandsgranskning',
  /** The tooltip text for the refresh button */
  'preview-frame.refresh-button.tooltip': 'Uppdatera förhandsgranskning',
  /** The `aria-label` for the button that opens the share menu */
  'preview-frame.share-button.aria-label': 'Dela den här förhandsgranskningen',
  /** Text describing the current status of the preview frame */
  'preview-frame.status_connecting': 'Ansluter.',
  /** Text describing the current status of the preview frame */
  'preview-frame.status_loading': 'Laddar.',
  /** Text describing the current status of the preview frame */
  'preview-frame.status_refreshing': 'Uppdaterar.',
  /** Text describing the current status of the preview frame */
  'preview-frame.status_reloading': 'Uppdaterar.',
  /** Text describing the current status of the preview frame */
  'preview-frame.status_timeout':
    'Det gick inte att ansluta, kontrollera webbläsarkonsolen för mer information.',
  /** The `aria-label` for the button that switches viewport size */
  'preview-frame.viewport-button.aria-label': 'Växla visningsportsstorlek',
  /** The viewport size button tooltip text when switching to a full width viewport */
  'preview-frame.viewport-button.tooltip_full': 'Byt till full visningsport',
  /** The viewport size button tooltip text when switching to a narrow viewport */
  'preview-frame.viewport-button.tooltip_narrow': 'Byt till smal visningsport',

  /** The validation error message shown when the preview location input is missing an origin */
  'preview-location-input.error_missing-origin': 'URL:en måste börja med {{origin}}',
  /** The validation error message shown when the preview location input's base path matches that of the studio */
  'preview-location-input.error_same-base-path':
    'URL:en kan inte ha samma bassökväg som Studio {{basePath}}',

  /** The toast description for the error message explaining that the iframe won't navigate to the new preview URL due to an URL origin security mismatch. */
  'preview-search-param.configuration.error.description':
    'Routern vill navigera till <Code>{{previewSearchParam}}</Code>, men ursprunget <Code>{{blockedOrigin}}</Code> är inte tillåtet. Uppdatera din <Code>presentationTool.allowOrigins</Code>-konfiguration för att tillåta det.',
  /** The title of the error toast that shows when attempting to navigate to a preview URL origin that's not in the allow list. */
  'preview-search-param.configuration.error.title': 'Blockerad förhandsgransknings-URL',

  /** Error toast that notifies that URL Preview Secrets can't be generated as the user lacks ACL grants */
  'preview-url-secret.missing-grants':
    'Du har inte behörighet att skapa URL Preview Secrets. Detta kommer troligtvis att göra att förhandsgranskningen misslyckas med att läsas in.',

  /** Menu item in the share preview menu that allows copying the current preview URL, if sharing is enabled */
  'share-preview-menu.copy-url.text': 'Kopiera förhandsgranskningslänk',
  /** Fallback message shown when the current user is not permitted to share previews */
  'share-preview-menu.error_missing-grants':
    'Du har inte behörighet att dela förhandsgranskningar. ',
  /** Error message toast that shows the current user does not have permission to toggle sharing of the current preview */
  'share-preview-menu.error_toggle-sharing':
    'Du har inte behörighet att växla delning av den här förhandsgranskningen',
  /** The text show below the QR Code SVG, with instructions on how to use it */
  'share-preview-menu.qr-code.instructions':
    'Skanna QR-koden för att öppna förhandsgranskningen på din telefon.',
  /** Placeholder message for the QR Code SVG when sharing is yet to be enabled */
  'share-preview-menu.qr-code.placeholder': 'QR-koden visas här',
  /** The <title> for the QR Code SVG that shows a link to the current preview */
  'share-preview-menu.qr-code.title': 'En QR-kod som kodar URL:en: {{url}}',
  /** The first line of the label that renders next to the sharing toggle, it renders on two rows */
  'share-preview-menu.toggle-button.label_first-line': 'Dela den här förhandsgranskningen',
  /** The second line of the label that renders next to the sharing toggle, it renders on two rows */
  'share-preview-menu.toggle-button.label_second-line': 'med alla som har länken',
  /** The text shown on the sharing toggle tooltip when sharing is enabled */
  'share-preview-menu.toggle-button.tooltip_disable': 'Inaktivera delning',
  /** The text shown on the sharing toggle tooltip when sharing is disabled */
  'share-preview-menu.toggle-button.tooltip_enable': 'Aktivera delning',

  /** The status of the clipboard operation when copying a URL */
  'share-url.clipboard.status_copying': 'Kopierar URL till urklipp…',
  /** The status of the clipboard operation when copying a URL */
  'share-url.clipboard.status_failed': 'Kopiering misslyckades',
  /** The status of the clipboard operation when copying a URL */
  'share-url.clipboard.status_success': 'URL:en har kopierats till urklipp',
  /** The status of the clipboard operation when copying a URL */
  'share-url.clipboard.status_unsupported': 'Urklipp stöds inte',
  /** The share URL menu item text for opening a preview window */
  'share-url.menu-item.open.text': 'Öppna förhandsgranskning',
})
