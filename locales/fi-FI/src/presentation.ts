import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** The status of the channel connection */
  'channel.status_connected': 'Yhdistetty',
  /** The status of the channel connection */
  'channel.status_connecting': 'Yhdistetään',
  /** The status of the channel connection */
  'channel.status_disconnected': 'Yhteys katkaistu',
  /** The status of the channel connection */
  'channel.status_reconnecting': 'Yhdistetään uudelleen',

  /** The title shown above the document list */
  'document-list-pane.document-list.title': 'Tämän sivun dokumentit',
  /** The text shown if the document list is unable to render */
  'document-list-pane.error.text': 'Dokumenttiluettelon renderöinti epäonnistui',
  /** The label for the ordering that lists documents in the order they appear on the page */
  'document-list-pane.ordering.by-appearance': 'Ulkoasun mukaan',
  /** The label for the ordering that lists documents by when they were last edited */
  'document-list-pane.ordering.last-edited': 'Viimeksi muokattu',

  /** The text shown if the document editor is unable to render */
  'document-pane.error.text': 'Dokumenttieditorin renderöinti epäonnistui',

  /** The text shown on the button for bypassing after a connection has failed */
  'error-card.continue-button.text': 'Jatka silti',
  /** The text shown on the button for retrying after a connection has failed */
  'error-card.retry-button.text': 'Yritä uudelleen',
  /** The title on the card shown after a connection has failed */
  'error-card.title': 'Tapahtui virhe',

  /** The text shown when the document is used in a single location */
  'locations-banner.locations-count_one': 'Käytetty yhdellä sivulla',
  /** The text shown when the document is used in multiple locations */
  'locations-banner.locations-count_other': 'Käytetty {{count}} sivulla',
  /** The text shown when a resolver exists but the document is not used in any locations */
  'locations-banner.locations-count_zero': 'Ei käytetty millään sivulla',
  /** The text shown whilst the locations resolver is executing */
  'locations-banner.resolving.text': 'Ratkaistaan sijainteja...',

  /** The label shown on a main document in the list pane */
  'main-document.label': 'Pääasiakirja',
  /** The warning message text shown when a defined resolver fails to return a main document */
  'main-document.missing.text': 'Pääasiakirja puuttuu kohteelle <Code>{{path}}</Code>',

  /** The label for the tab that shows the document editor at narrow viewports */
  'narrow-tabs.content-tab.label': 'Rakenne',
  /** The label for the tab that shows the navigator at narrow viewports */
  'narrow-tabs.navigator-tab.label': 'Navigaattori',
  /** The label for the tab that shows the preview at narrow viewports */
  'narrow-tabs.preview-tab.label': 'Esitys',

  /** The label for a generic error message */
  'presentation-error.label': 'Virheilmoitus',

  /** The toast description for the error message explaining that the iframe is blocked from loading due to a security mismatch. */
  'preview-frame.configuration.error.description':
    'Esikatselun iframe on määritetty lataamaan <Code>{{targetOrigin}}</Code>, mutta ilmoitettu alkuperä on <Code>{{reportedOrigin}}</Code>. Presentation Tool ei pysty muodostamaan yhteyttä tuntemattomiin alkuperiin tietoturvasyistä. Päivitä <Code>presentationTool.allowOrigins</Code>-määritys salliaksesi yhteyden Visual Editingiin ja Loadersiin.',
  /** The title of the error toast that shows when the preview iframe times out while waiting for a connection over comlink to establish, and the root cause is discovered to be that the iframe is loading on an URL origin that's not in the allow list. */
  'preview-frame.configuration.error.title': 'Esikatselun URL-alkuperä ei täsmää',
  /** The text shown when the preview frame cannot connect to Presentation */
  'preview-frame.connection.error.text': 'Esikatselu ei pystynyt muodostamaan yhteyttä',
  /** The text shown on the button for dismissing the error overlay after a timeout */
  'preview-frame.continue-button.text': 'Jatka silti',
  /** The label for the loader's connection status */
  'preview-frame.loader.connection-status.label': 'Loaderin yhteystila',
  /** The `aria-label` for the navigator toggle button */
  'preview-frame.navigator.toggle-button.aria-label': 'Vaihda navigaattori',
  /** The tooltip text for the navigator toggle button */
  'preview-frame.navigator.toggle-button.tooltip': 'Vaihda navigaattori',
  /** The label for the overlay's connection status */
  'preview-frame.overlay.connection-status.label': 'Overlayn yhteystila',
  /** The text shown on the overlay toggle button */
  'preview-frame.overlay.toggle-button.text': 'Muokkaa',
  /** The text shown on the overlay toggle tooltip when overlays are enabled */
  'preview-frame.overlay.toggle-button.tooltip_disable': 'Poista muokkausoverlay käytöstä',
  /** The text shown on the overlay toggle tooltip when overlays are disabled */
  'preview-frame.overlay.toggle-button.tooltip_enable': 'Ota muokkausoverlay käyttöön',
  /** The text description for the published perspective switcher menu item */
  'preview-frame.perspective.published.text': 'Näytä tämä sivu julkaistulla sisällöllä',
  /** The `aria-label` for the refresh button */
  'preview-frame.refresh-button.aria-label': 'Päivitä esikatselu',
  /** The tooltip text for the refresh button */
  'preview-frame.refresh-button.tooltip': 'Päivitä esikatselu',
  /** The `aria-label` for the button that opens the share menu */
  'preview-frame.share-button.aria-label': 'Jaa tämä esikatselu',
  /** Text describing the current status of the preview frame */
  'preview-frame.status_connecting': 'Yhdistetään.',
  /** Text describing the current status of the preview frame */
  'preview-frame.status_loading': 'Ladataan.',
  /** Text describing the current status of the preview frame */
  'preview-frame.status_refreshing': 'Päivitetään.',
  /** Text describing the current status of the preview frame */
  'preview-frame.status_reloading': 'Päivitetään.',
  /** Text describing the current status of the preview frame */
  'preview-frame.status_timeout':
    'Yhteyden muodostaminen epäonnistui, tarkista lisätiedot selaimen konsolista.',
  /** The `aria-label` for the button that switches viewport size */
  'preview-frame.viewport-button.aria-label': 'Vaihda näkymäkoko',
  /** The viewport size button tooltip text when switching to a full width viewport */
  'preview-frame.viewport-button.tooltip_full': 'Vaihda koko leveyden näkymään',
  /** The viewport size button tooltip text when switching to a narrow viewport */
  'preview-frame.viewport-button.tooltip_narrow': 'Vaihda kapeaan näkymään',

  /** The validation error message shown when the preview location input is missing an origin */
  'preview-location-input.error_missing-origin': 'URL:n täytyy alkaa kohteella {{origin}}',
  /** The validation error message shown when the preview location input's base path matches that of the studio */
  'preview-location-input.error_same-base-path':
    'URL:lla ei voi olla sama peruspolku kuin Studiolla {{basePath}}',

  /** The toast description for the error message explaining that the iframe won't navigate to the new preview URL due to an URL origin security mismatch. */
  'preview-search-param.configuration.error.description':
    'Reititin haluaa navigoida osoitteeseen <Code>{{previewSearchParam}}</Code>, mutta alkuperä <Code>{{blockedOrigin}}</Code> ei ole sallittu. Päivitä <Code>presentationTool.allowOrigins</Code>-asetuksesi salliaksesi sen.',
  /** The title of the error toast that shows when attempting to navigate to a preview URL origin that's not in the allow list. */
  'preview-search-param.configuration.error.title': 'Estetty esikatselun URL',

  /** Error toast that notifies that URL Preview Secrets can't be generated as the user lacks ACL grants */
  'preview-url-secret.missing-grants':
    'Sinulla ei ole oikeutta luoda URL-esikatselusalaisuuksia. Tämä todennäköisesti estää esikatselun lataamisen.',

  /** Menu item in the share preview menu that allows copying the current preview URL, if sharing is enabled */
  'share-preview-menu.copy-url.text': 'Kopioi esikatselulinkki',
  /** Fallback message shown when the current user is not permitted to share previews */
  'share-preview-menu.error_missing-grants': 'Sinulla ei ole oikeutta jakaa esikatseluja.',
  /** Error message toast that shows the current user does not have permission to toggle sharing of the current preview */
  'share-preview-menu.error_toggle-sharing':
    'Sinulla ei ole oikeutta muuttaa tämän esikatselun jakamista',
  /** The text show below the QR Code SVG, with instructions on how to use it */
  'share-preview-menu.qr-code.instructions':
    'Skannaa QR-koodi avataksesi esikatselun puhelimellasi.',
  /** Placeholder message for the QR Code SVG when sharing is yet to be enabled */
  'share-preview-menu.qr-code.placeholder': 'QR-koodi ilmestyy tähän',
  /** The <title> for the QR Code SVG that shows a link to the current preview */
  'share-preview-menu.qr-code.title': 'QR-koodi, joka sisältää URL-osoitteen: {{url}}',
  /** The first line of the label that renders next to the sharing toggle, it renders on two rows */
  'share-preview-menu.toggle-button.label_first-line': 'Jaa tämä esikatselu',
  /** The second line of the label that renders next to the sharing toggle, it renders on two rows */
  'share-preview-menu.toggle-button.label_second-line': 'kaikille, joilla on linkki',
  /** The text shown on the sharing toggle tooltip when sharing is enabled */
  'share-preview-menu.toggle-button.tooltip_disable': 'Poista jakaminen käytöstä',
  /** The text shown on the sharing toggle tooltip when sharing is disabled */
  'share-preview-menu.toggle-button.tooltip_enable': 'Ota jakaminen käyttöön',

  /** The status of the clipboard operation when copying a URL */
  'share-url.clipboard.status_copying': 'Kopioidaan URL-osoitetta leikepöydälle…',
  /** The status of the clipboard operation when copying a URL */
  'share-url.clipboard.status_failed': 'Kopiointi epäonnistui',
  /** The status of the clipboard operation when copying a URL */
  'share-url.clipboard.status_success': 'URL-osoite on kopioitu leikepöydälle',
  /** The status of the clipboard operation when copying a URL */
  'share-url.clipboard.status_unsupported': 'Leikepöytää ei tueta',
  /** The share URL menu item text for opening a preview window */
  'share-url.menu-item.open.text': 'Avaa esikatselu',
})
