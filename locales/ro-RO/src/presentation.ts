import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** The status of the channel connection */
  'channel.status_connected': 'Conectat',
  /** The status of the channel connection */
  'channel.status_connecting': 'Se conectează',
  /** The status of the channel connection */
  'channel.status_disconnected': 'Deconectat',
  /** The status of the channel connection */
  'channel.status_reconnecting': 'Se reconectează',

  /** The title shown above the document list */
  'document-list-pane.document-list.title': 'Documente pe această pagină',
  /** The text shown if the document list is unable to render */
  'document-list-pane.error.text': 'Nu s-a putut reda lista de documente',
  /** The label for the ordering that lists documents in the order they appear on the page */
  'document-list-pane.ordering.by-appearance': undefined, // 'By appearance'
  /** The label for the ordering that lists documents by when they were last edited */
  'document-list-pane.ordering.last-edited': undefined, // 'Last edited'

  /** The text shown if the document editor is unable to render */
  'document-pane.error.text': 'Nu s-a putut reda editorul de documente',

  /** The text shown on the button for bypassing after a connection has failed */
  'error-card.continue-button.text': 'Continuați oricum',
  /** The text shown on the button for retrying after a connection has failed */
  'error-card.retry-button.text': 'Reîncercați',
  /** The title on the card shown after a connection has failed */
  'error-card.title': 'A apărut o eroare',

  /** The text shown when the document is used in a single location */
  'locations-banner.locations-count_one': 'Utilizat pe o pagină',
  /** The text shown when a resolver exists but the document is not used in any locations */
  'locations-banner.locations-count_zero': 'Neutilizat pe nicio pagină',
  /** The text shown whilst the locations resolver is executing */
  'locations-banner.resolving.text': 'Se rezolvă locațiile...',

  /** The label shown on a main document in the list pane */
  'main-document.label': 'Document principal',
  /** The warning message text shown when a defined resolver fails to return a main document */
  'main-document.missing.text': 'Lipsește un document principal pentru <Code>{{path}}</Code>',

  /** The label for the tab that shows the document editor at narrow viewports */
  'narrow-tabs.content-tab.label': 'Structură',
  /** The label for the tab that shows the navigator at narrow viewports */
  'narrow-tabs.navigator-tab.label': 'Navigator',
  /** The label for the tab that shows the preview at narrow viewports */
  'narrow-tabs.preview-tab.label': 'Prezentare',

  /** The label for a generic error message */
  'presentation-error.label': 'Mesaj de eroare',

  /** The toast description for the error message explaining that the iframe is blocked from loading due to a security mismatch. */
  'preview-frame.configuration.error.description':
    'iframe-ul de previzualizare este configurat să încarce <Code>{{targetOrigin}}</Code>, dar originea raportată este <Code>{{reportedOrigin}}</Code>. Presentation Tool nu se poate conecta la origini necunoscute din motive de securitate. Actualizați configurația <Code>presentationTool.allowOrigins</Code> pentru a permite conectarea la Visual Editing și Loaders.',
  /** The title of the error toast that shows when the preview iframe times out while waiting for a connection over comlink to establish, and the root cause is discovered to be that the iframe is loading on an URL origin that's not in the allow list. */
  'preview-frame.configuration.error.title': 'Nepotrivire de origine URL la previzualizare',
  /** The text shown when the preview frame cannot connect to Presentation */
  'preview-frame.connection.error.text': 'Nu s-a putut conecta la previzualizare',
  /** The text shown on the button for dismissing the error overlay after a timeout */
  'preview-frame.continue-button.text': 'Continuați oricum',
  /** The label for the loader's connection status */
  'preview-frame.loader.connection-status.label': 'Starea conexiunii loader-ului',
  /** The `aria-label` for the navigator toggle button */
  'preview-frame.navigator.toggle-button.aria-label': 'Comutați navigatorul',
  /** The tooltip text for the navigator toggle button */
  'preview-frame.navigator.toggle-button.tooltip': 'Comutați navigatorul',
  /** The label for the overlay's connection status */
  'preview-frame.overlay.connection-status.label': 'Starea conexiunii overlay',
  /** The text shown on the overlay toggle button */
  'preview-frame.overlay.toggle-button.text': 'Editați',
  /** The text shown on the overlay toggle tooltip when overlays are enabled */
  'preview-frame.overlay.toggle-button.tooltip_disable': 'Dezactivați overlay-ul de editare',
  /** The text shown on the overlay toggle tooltip when overlays are disabled */
  'preview-frame.overlay.toggle-button.tooltip_enable': 'Activați overlay-ul de editare',
  /** The text description for the published perspective switcher menu item */
  'preview-frame.perspective.published.text': 'Vizualizați această pagină cu conținut publicat',
  /** The `aria-label` for the refresh button */
  'preview-frame.refresh-button.aria-label': 'Reîmprospătați previzualizarea',
  /** The tooltip text for the refresh button */
  'preview-frame.refresh-button.tooltip': 'Reîmprospătați previzualizarea',
  /** The `aria-label` for the button that opens the share menu */
  'preview-frame.share-button.aria-label': 'Distribuiți această previzualizare',
  /** Text describing the current status of the preview frame */
  'preview-frame.status_connecting': 'Se conectează.',
  /** Text describing the current status of the preview frame */
  'preview-frame.status_loading': 'Se încarcă.',
  /** Text describing the current status of the preview frame */
  'preview-frame.status_refreshing': 'Se reîmprospătează.',
  /** Text describing the current status of the preview frame */
  'preview-frame.status_reloading': 'Se reîmprospătează.',
  /** Text describing the current status of the preview frame */
  'preview-frame.status_timeout':
    'Imposibil de conectat, verificați consola browserului pentru mai multe informații.',
  /** The `aria-label` for the button that switches viewport size */
  'preview-frame.viewport-button.aria-label': 'Comutați dimensiunea viewport-ului',
  /** The viewport size button tooltip text when switching to a full width viewport */
  'preview-frame.viewport-button.tooltip_full': 'Comutați la viewport complet',
  /** The viewport size button tooltip text when switching to a narrow viewport */
  'preview-frame.viewport-button.tooltip_narrow': 'Comutați la viewport îngust',

  /** The validation error message shown when the preview location input is missing an origin */
  'preview-location-input.error_missing-origin': 'URL-ul trebuie să înceapă cu {{origin}}',
  /** The validation error message shown when the preview location input's base path matches that of the studio */
  'preview-location-input.error_same-base-path':
    'URL-ul nu poate avea aceeași cale de bază ca Studio-ul {{basePath}}',

  /** The toast description for the error message explaining that the iframe won't navigate to the new preview URL due to an URL origin security mismatch. */
  'preview-search-param.configuration.error.description':
    'Routerul dorește să navigheze la <Code>{{previewSearchParam}}</Code>, dar originea <Code>{{blockedOrigin}}</Code> nu este permisă. Actualizați configurația <Code>presentationTool.allowOrigins</Code> pentru a o permite.',
  /** The title of the error toast that shows when attempting to navigate to a preview URL origin that's not in the allow list. */
  'preview-search-param.configuration.error.title': 'URL de previzualizare blocat',

  /** Error toast that notifies that URL Preview Secrets can't be generated as the user lacks ACL grants */
  'preview-url-secret.missing-grants':
    'Nu aveți permisiunea de a crea URL Preview Secrets. Acest lucru va cauza probabil eșecul încărcării previzualizării.',

  /** Menu item in the share preview menu that allows copying the current preview URL, if sharing is enabled */
  'share-preview-menu.copy-url.text': 'Copiați linkul de previzualizare',
  /** Fallback message shown when the current user is not permitted to share previews */
  'share-preview-menu.error_missing-grants': 'Nu aveți permisiunea de a distribui previzualizări. ',
  /** Error message toast that shows the current user does not have permission to toggle sharing of the current preview */
  'share-preview-menu.error_toggle-sharing':
    'Nu aveți permisiunea de a comuta distribuirea acestei previzualizări',
  /** The text show below the QR Code SVG, with instructions on how to use it */
  'share-preview-menu.qr-code.instructions':
    'Scanați codul QR pentru a deschide previzualizarea pe telefonul dvs.',
  /** Placeholder message for the QR Code SVG when sharing is yet to be enabled */
  'share-preview-menu.qr-code.placeholder': 'Codul QR va apărea aici',
  /** The <title> for the QR Code SVG that shows a link to the current preview */
  'share-preview-menu.qr-code.title': 'Un cod QR care codifică URL-ul: {{url}}',
  /** The first line of the label that renders next to the sharing toggle, it renders on two rows */
  'share-preview-menu.toggle-button.label_first-line': 'Distribuiți această previzualizare',
  /** The second line of the label that renders next to the sharing toggle, it renders on two rows */
  'share-preview-menu.toggle-button.label_second-line': 'oricui deține linkul',
  /** The text shown on the sharing toggle tooltip when sharing is enabled */
  'share-preview-menu.toggle-button.tooltip_disable': 'Dezactivați distribuirea',
  /** The text shown on the sharing toggle tooltip when sharing is disabled */
  'share-preview-menu.toggle-button.tooltip_enable': 'Activați distribuirea',

  /** The status of the clipboard operation when copying a URL */
  'share-url.clipboard.status_copying': 'Se copiază URL-ul în clipboard…',
  /** The status of the clipboard operation when copying a URL */
  'share-url.clipboard.status_failed': 'Copierea a eșuat',
  /** The status of the clipboard operation when copying a URL */
  'share-url.clipboard.status_success': 'URL-ul a fost copiat în clipboard',
  /** The status of the clipboard operation when copying a URL */
  'share-url.clipboard.status_unsupported': 'Clipboard-ul nu este acceptat',
  /** The share URL menu item text for opening a preview window */
  'share-url.menu-item.open.text': 'Deschide previzualizarea',
})
