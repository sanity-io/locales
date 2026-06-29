import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** The status of the channel connection */
  'channel.status_connected': 'Forbundet',
  /** The status of the channel connection */
  'channel.status_connecting': 'Forbinder',
  /** The status of the channel connection */
  'channel.status_disconnected': 'Afbrudt',
  /** The status of the channel connection */
  'channel.status_reconnecting': 'Genopretter forbindelse',

  /** The title shown above the document list */
  'document-list-pane.document-list.title': 'Dokumenter på denne side',
  /** The text shown if the document list is unable to render */
  'document-list-pane.error.text': 'Kunne ikke vise dokumentlisten',
  /** The label for the ordering that lists documents in the order they appear on the page */
  'document-list-pane.ordering.by-appearance': 'Efter udseende',
  /** The label for the ordering that lists documents by when they were last edited */
  'document-list-pane.ordering.last-edited': 'Sidst redigeret',

  /** The text shown if the document editor is unable to render */
  'document-pane.error.text': 'Kunne ikke vise dokumenteditoren',

  /** The text shown on the button for bypassing after a connection has failed */
  'error-card.continue-button.text': 'Fortsæt alligevel',
  /** The text shown on the button for retrying after a connection has failed */
  'error-card.retry-button.text': 'Prøv igen',
  /** The title on the card shown after a connection has failed */
  'error-card.title': 'Der opstod en fejl',

  /** The text shown when the document is used in a single location */
  'locations-banner.locations-count_one': 'Brugt på én side',
  /** The text shown when the document is used in multiple locations */
  'locations-banner.locations-count_other': 'Brugt på {{count}} sider',
  /** The text shown when a resolver exists but the document is not used in any locations */
  'locations-banner.locations-count_zero': 'Ikke brugt på nogen sider',
  /** The text shown whilst the locations resolver is executing */
  'locations-banner.resolving.text': 'Løser lokationer op...',

  /** The label shown on a main document in the list pane */
  'main-document.label': 'Hoveddokument',
  /** The warning message text shown when a defined resolver fails to return a main document */
  'main-document.missing.text': 'Mangler et hoveddokument for <Code>{{path}}</Code>',

  /** The label for the tab that shows the document editor at narrow viewports */
  'narrow-tabs.content-tab.label': 'Struktur',
  /** The label for the tab that shows the navigator at narrow viewports */
  'narrow-tabs.navigator-tab.label': 'Navigator',
  /** The label for the tab that shows the preview at narrow viewports */
  'narrow-tabs.preview-tab.label': 'Præsentation',

  /** The label for a generic error message */
  'presentation-error.label': 'Fejlbesked',

  /** The toast description for the error message explaining that the iframe is blocked from loading due to a security mismatch. */
  'preview-frame.configuration.error.description':
    'Forhåndsvisningens iframe er konfigureret til at indlæse <Code>{{targetOrigin}}</Code>, men den rapporterede oprindelse er <Code>{{reportedOrigin}}</Code>. Presentation Tool kan ikke oprette forbindelse til ukendte oprindelser af sikkerhedsmæssige årsager. Opdater din <Code>presentationTool.allowOrigins</Code>-konfiguration for at tillade forbindelse til Visual Editing og Loaders.',
  /** The title of the error toast that shows when the preview iframe times out while waiting for a connection over comlink to establish, and the root cause is discovered to be that the iframe is loading on an URL origin that's not in the allow list. */
  'preview-frame.configuration.error.title': 'URL-oprindelsesuoverensstemmelse i forhåndsvisning',
  /** The text shown when the preview frame cannot connect to Presentation */
  'preview-frame.connection.error.text': 'Kunne ikke oprette forbindelse til forhåndsvisningen',
  /** The text shown on the button for dismissing the error overlay after a timeout */
  'preview-frame.continue-button.text': 'Fortsæt alligevel',
  /** The label for the loader's connection status */
  'preview-frame.loader.connection-status.label': 'Loaderens forbindelsesstatus',
  /** The `aria-label` for the navigator toggle button */
  'preview-frame.navigator.toggle-button.aria-label': 'Skift navigator',
  /** The tooltip text for the navigator toggle button */
  'preview-frame.navigator.toggle-button.tooltip': 'Skift navigator',
  /** The label for the overlay's connection status */
  'preview-frame.overlay.connection-status.label': 'Overlay-forbindelsesstatus',
  /** The text shown on the overlay toggle button */
  'preview-frame.overlay.toggle-button.text': 'Rediger',
  /** The text shown on the overlay toggle tooltip when overlays are enabled */
  'preview-frame.overlay.toggle-button.tooltip_disable': 'Deaktiver redigeringsoverlay',
  /** The text shown on the overlay toggle tooltip when overlays are disabled */
  'preview-frame.overlay.toggle-button.tooltip_enable': 'Aktiver redigeringsoverlay',
  /** The text description for the published perspective switcher menu item */
  'preview-frame.perspective.published.text': 'Vis denne side med publiceret indhold',
  /** The `aria-label` for the refresh button */
  'preview-frame.refresh-button.aria-label': 'Opdater forhåndsvisning',
  /** The tooltip text for the refresh button */
  'preview-frame.refresh-button.tooltip': 'Opdater forhåndsvisning',
  /** The `aria-label` for the button that opens the share menu */
  'preview-frame.share-button.aria-label': 'Del denne forhåndsvisning',
  /** Text describing the current status of the preview frame */
  'preview-frame.status_connecting': 'Opretter forbindelse.',
  /** Text describing the current status of the preview frame */
  'preview-frame.status_loading': 'Indlæser.',
  /** Text describing the current status of the preview frame */
  'preview-frame.status_refreshing': 'Opdaterer.',
  /** Text describing the current status of the preview frame */
  'preview-frame.status_reloading': 'Opdaterer.',
  /** Text describing the current status of the preview frame */
  'preview-frame.status_timeout':
    'Kunne ikke oprette forbindelse. Tjek browserkonsollen for mere information.',
  /** The `aria-label` for the button that switches viewport size */
  'preview-frame.viewport-button.aria-label': 'Skift visningsportsstørrelse',
  /** The viewport size button tooltip text when switching to a full width viewport */
  'preview-frame.viewport-button.tooltip_full': 'Skift til fuld visningsport',
  /** The viewport size button tooltip text when switching to a narrow viewport */
  'preview-frame.viewport-button.tooltip_narrow': 'Skift til smal visningsport',

  /** The validation error message shown when the preview location input is missing an origin */
  'preview-location-input.error_missing-origin': 'URL skal starte med {{origin}}',
  /** The validation error message shown when the preview location input's base path matches that of the studio */
  'preview-location-input.error_same-base-path':
    'URL må ikke have samme basissti som Studio {{basePath}}',

  /** The toast description for the error message explaining that the iframe won't navigate to the new preview URL due to an URL origin security mismatch. */
  'preview-search-param.configuration.error.description':
    'Routeren ønsker at navigere til <Code>{{previewSearchParam}}</Code>, men oprindelsen <Code>{{blockedOrigin}}</Code> er ikke tilladt. Opdater din <Code>presentationTool.allowOrigins</Code>-konfiguration for at tillade det.',
  /** The title of the error toast that shows when attempting to navigate to a preview URL origin that's not in the allow list. */
  'preview-search-param.configuration.error.title': 'Blokeret forhåndsvisnings-URL',

  /** Error toast that notifies that URL Preview Secrets can't be generated as the user lacks ACL grants */
  'preview-url-secret.missing-grants':
    'Du har ikke tilladelse til at oprette URL Preview Secrets. Dette vil sandsynligvis medføre, at forhåndsvisningen ikke kan indlæses.',

  /** Menu item in the share preview menu that allows copying the current preview URL, if sharing is enabled */
  'share-preview-menu.copy-url.text': 'Kopiér forhåndsvisningslink',
  /** Fallback message shown when the current user is not permitted to share previews */
  'share-preview-menu.error_missing-grants':
    'Du har ikke tilladelse til at dele forhåndsvisninger.',
  /** Error message toast that shows the current user does not have permission to toggle sharing of the current preview */
  'share-preview-menu.error_toggle-sharing':
    'Du har ikke tilladelse til at slå deling af denne preview til/fra',
  /** The text show below the QR Code SVG, with instructions on how to use it */
  'share-preview-menu.qr-code.instructions': 'Scan QR-koden for at åbne preview på din telefon.',
  /** Placeholder message for the QR Code SVG when sharing is yet to be enabled */
  'share-preview-menu.qr-code.placeholder': 'QR-koden vises her',
  /** The <title> for the QR Code SVG that shows a link to the current preview */
  'share-preview-menu.qr-code.title': "En QR-kode der indkoder URL'en: {{url}}",
  /** The first line of the label that renders next to the sharing toggle, it renders on two rows */
  'share-preview-menu.toggle-button.label_first-line': 'Del denne preview',
  /** The second line of the label that renders next to the sharing toggle, it renders on two rows */
  'share-preview-menu.toggle-button.label_second-line': 'med alle der har linket',
  /** The text shown on the sharing toggle tooltip when sharing is enabled */
  'share-preview-menu.toggle-button.tooltip_disable': 'Deaktiver deling',
  /** The text shown on the sharing toggle tooltip when sharing is disabled */
  'share-preview-menu.toggle-button.tooltip_enable': 'Aktiver deling',

  /** The status of the clipboard operation when copying a URL */
  'share-url.clipboard.status_copying': 'Kopierer URL til udklipsholder…',
  /** The status of the clipboard operation when copying a URL */
  'share-url.clipboard.status_failed': 'Kopiering mislykkedes',
  /** The status of the clipboard operation when copying a URL */
  'share-url.clipboard.status_success': "URL'en er kopieret til udklipsholderen",
  /** The status of the clipboard operation when copying a URL */
  'share-url.clipboard.status_unsupported': 'Udklipsholder understøttes ikke',
  /** The share URL menu item text for opening a preview window */
  'share-url.menu-item.open.text': 'Åbn preview',
})
