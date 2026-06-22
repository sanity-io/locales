import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** The status of the channel connection */
  'channel.status_connected': 'Tengt',
  /** The status of the channel connection */
  'channel.status_connecting': 'Tengist',
  /** The status of the channel connection */
  'channel.status_disconnected': 'Ótengd',
  /** The status of the channel connection */
  'channel.status_reconnecting': 'Endurtengjast',

  /** The title shown above the document list */
  'document-list-pane.document-list.title': 'Skjöl á þessari síðu',
  /** The text shown if the document list is unable to render */
  'document-list-pane.error.text': 'Gat ekki birt skjalalistann',

  /** The text shown if the document editor is unable to render */
  'document-pane.error.text': 'Gat ekki birt skjalaritstjórann',

  /** The text shown on the button for bypassing after a connection has failed */
  'error-card.continue-button.text': 'Halda áfram engu að síður',
  /** The text shown on the button for retrying after a connection has failed */
  'error-card.retry-button.text': 'Reyna aftur',
  /** The title on the card shown after a connection has failed */
  'error-card.title': 'Villa kom upp',

  /** The text shown when the document is used in a single location */
  'locations-banner.locations-count_one': 'Notað á einni síðu',
  /** The text shown when the document is used in multiple locations */
  'locations-banner.locations-count_other': 'Notað á {{count}} síðum',
  /** The text shown when a resolver exists but the document is not used in any locations */
  'locations-banner.locations-count_zero': 'Ekki notað á neinum síðum',
  /** The text shown whilst the locations resolver is executing */
  'locations-banner.resolving.text': 'Leysir staðsetningar...',

  /** The label shown on a main document in the list pane */
  'main-document.label': 'Aðalskjal',
  /** The warning message text shown when a defined resolver fails to return a main document */
  'main-document.missing.text': 'Vantar aðalskjal fyrir <Code>{{path}}</Code>',

  /** The label for the tab that shows the document editor at narrow viewports */
  'narrow-tabs.content-tab.label': 'Uppbygging',
  /** The label for the tab that shows the navigator at narrow viewports */
  'narrow-tabs.navigator-tab.label': 'Flakkar',
  /** The label for the tab that shows the preview at narrow viewports */
  'narrow-tabs.preview-tab.label': 'Kynning',

  /** The label for a generic error message */
  'presentation-error.label': 'Villuskilaboð',

  /** The toast description for the error message explaining that the iframe is blocked from loading due to a security mismatch. */
  'preview-frame.configuration.error.description':
    'Forskoðunar-iframe er stillt til að hlaða <Code>{{targetOrigin}}</Code>, en uppgefið uppruni er <Code>{{reportedOrigin}}</Code>. Presentation Tool getur ekki tengst óþekktum uppruna af öryggisástæðum. Uppfærðu <Code>presentationTool.allowOrigins</Code> stillingarnar þínar til að leyfa tengingu við Visual Editing og Loaders.',
  /** The title of the error toast that shows when the preview iframe times out while waiting for a connection over comlink to establish, and the root cause is discovered to be that the iframe is loading on an URL origin that's not in the allow list. */
  'preview-frame.configuration.error.title': 'Misræmi í uppruna forskoðunar-URL',
  /** The text shown when the preview frame cannot connect to Presentation */
  'preview-frame.connection.error.text': 'Gat ekki tengst forskoðuninni',
  /** The text shown on the button for dismissing the error overlay after a timeout */
  'preview-frame.continue-button.text': 'Halda áfram engu að síður',
  /** The label for the loader's connection status */
  'preview-frame.loader.connection-status.label': 'Tengiststaða loader',
  /** The `aria-label` for the navigator toggle button */
  'preview-frame.navigator.toggle-button.aria-label': 'Kveikja/slökkva á yfirliti',
  /** The tooltip text for the navigator toggle button */
  'preview-frame.navigator.toggle-button.tooltip': 'Kveikja/slökkva á yfirliti',
  /** The label for the overlay's connection status */
  'preview-frame.overlay.connection-status.label': 'Tengingastaða yfirlagningar',
  /** The text shown on the overlay toggle button */
  'preview-frame.overlay.toggle-button.text': 'Breyta',
  /** The text shown on the overlay toggle tooltip when overlays are enabled */
  'preview-frame.overlay.toggle-button.tooltip_disable': 'Slökkva á breytingaryfirlagning',
  /** The text shown on the overlay toggle tooltip when overlays are disabled */
  'preview-frame.overlay.toggle-button.tooltip_enable': 'Kveikja á breytingaryfirlagning',
  /** The text description for the published perspective switcher menu item */
  'preview-frame.perspective.published.text': 'Skoða þessa síðu með birtu efni',
  /** The `aria-label` for the refresh button */
  'preview-frame.refresh-button.aria-label': 'Endurhlaða forskoðun',
  /** The tooltip text for the refresh button */
  'preview-frame.refresh-button.tooltip': 'Endurhlaða forskoðun',
  /** The `aria-label` for the button that opens the share menu */
  'preview-frame.share-button.aria-label': 'Deila þessari forskoðun',
  /** Text describing the current status of the preview frame */
  'preview-frame.status_connecting': 'Tengist.',
  /** Text describing the current status of the preview frame */
  'preview-frame.status_loading': 'Hleður.',
  /** Text describing the current status of the preview frame */
  'preview-frame.status_refreshing': 'Uppfærir.',
  /** Text describing the current status of the preview frame */
  'preview-frame.status_reloading': 'Uppfærir.',
  /** Text describing the current status of the preview frame */
  'preview-frame.status_timeout':
    'Gat ekki tengst, athugaðu vafraglugga fyrir frekari upplýsingar.',
  /** The `aria-label` for the button that switches viewport size */
  'preview-frame.viewport-button.aria-label': 'Skipta um skjástærð',
  /** The viewport size button tooltip text when switching to a full width viewport */
  'preview-frame.viewport-button.tooltip_full': 'Skipta yfir í fulla skjástærð',
  /** The viewport size button tooltip text when switching to a narrow viewport */
  'preview-frame.viewport-button.tooltip_narrow': 'Skipta yfir í þrönga skjástærð',

  /** The validation error message shown when the preview location input is missing an origin */
  'preview-location-input.error_missing-origin': 'Vefslóð verður að byrja á {{origin}}',
  /** The validation error message shown when the preview location input's base path matches that of the studio */
  'preview-location-input.error_same-base-path':
    'Vefslóð má ekki hafa sömu grunnslóð og Studio {{basePath}}',

  /** The toast description for the error message explaining that the iframe won't navigate to the new preview URL due to an URL origin security mismatch. */
  'preview-search-param.configuration.error.description':
    'Beinirinn vill fara á <Code>{{previewSearchParam}}</Code>, en uppruni <Code>{{blockedOrigin}}</Code> er ekki leyfður. Uppfærðu <Code>presentationTool.allowOrigins</Code> stillingar þínar til að leyfa það.',
  /** The title of the error toast that shows when attempting to navigate to a preview URL origin that's not in the allow list. */
  'preview-search-param.configuration.error.title': 'Lokuð forskoðunarslóð',

  /** Error toast that notifies that URL Preview Secrets can't be generated as the user lacks ACL grants */
  'preview-url-secret.missing-grants':
    'Þú hefur ekki leyfi til að búa til URL Preview Secrets. Þetta mun líklega valda því að forskoðunin mistakist við hleðslu.',

  /** Menu item in the share preview menu that allows copying the current preview URL, if sharing is enabled */
  'share-preview-menu.copy-url.text': 'Afrita forskoðunartengil',
  /** Fallback message shown when the current user is not permitted to share previews */
  'share-preview-menu.error_missing-grants': 'Þú hefur ekki leyfi til að deila forskoðunum. ',
  /** Error message toast that shows the current user does not have permission to toggle sharing of the current preview */
  'share-preview-menu.error_toggle-sharing':
    'Þú hefur ekki leyfi til að kveikja eða slökkva á deilingu þessarar forskoðunar',
  /** The text show below the QR Code SVG, with instructions on how to use it */
  'share-preview-menu.qr-code.instructions':
    'Skannaðu QR kóðann til að opna forskoðunina í símanum þínum.',
  /** Placeholder message for the QR Code SVG when sharing is yet to be enabled */
  'share-preview-menu.qr-code.placeholder': 'QR kóði mun birtast hér',
  /** The <title> for the QR Code SVG that shows a link to the current preview */
  'share-preview-menu.qr-code.title': 'QR kóði sem inniheldur slóðina: {{url}}',
  /** The first line of the label that renders next to the sharing toggle, it renders on two rows */
  'share-preview-menu.toggle-button.label_first-line': 'Deildu þessari forskoðun',
  /** The second line of the label that renders next to the sharing toggle, it renders on two rows */
  'share-preview-menu.toggle-button.label_second-line': 'með öllum sem hafa hlekkinn',
  /** The text shown on the sharing toggle tooltip when sharing is enabled */
  'share-preview-menu.toggle-button.tooltip_disable': 'Slökkva á deilingu',
  /** The text shown on the sharing toggle tooltip when sharing is disabled */
  'share-preview-menu.toggle-button.tooltip_enable': 'Kveikja á deilingu',

  /** The status of the clipboard operation when copying a URL */
  'share-url.clipboard.status_copying': 'Afritar slóð á klippiborð…',
  /** The status of the clipboard operation when copying a URL */
  'share-url.clipboard.status_failed': 'Afritun mistókst',
  /** The status of the clipboard operation when copying a URL */
  'share-url.clipboard.status_success': 'Slóðin hefur verið afrituð á klippiborðið',
  /** The status of the clipboard operation when copying a URL */
  'share-url.clipboard.status_unsupported': 'Klippiborð er ekki stutt',
  /** The share URL menu item text for opening a preview window */
  'share-url.menu-item.open.text': 'Opna forskoðun',
})
