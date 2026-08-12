import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** The status of the channel connection */
  'channel.status_connected': 'Połączono',
  /** The status of the channel connection */
  'channel.status_connecting': 'Łączenie',
  /** The status of the channel connection */
  'channel.status_disconnected': 'Rozłączono',
  /** The status of the channel connection */
  'channel.status_reconnecting': 'Ponowne łączenie',

  /** The title shown above the document list */
  'document-list-pane.document-list.title': 'Dokumenty na tej stronie',
  /** The text shown if the document list is unable to render */
  'document-list-pane.error.text': 'Nie można wyrenderować listy dokumentów',
  /** The label for the ordering that lists documents in the order they appear on the page */
  'document-list-pane.ordering.by-appearance': 'Według kolejności',
  /** The label for the ordering that lists documents by when they were last edited */
  'document-list-pane.ordering.last-edited': 'Ostatnio edytowane',

  /** The text shown if the document editor is unable to render */
  'document-pane.error.text': 'Nie można wyrenderować edytora dokumentów',

  /** The text shown on the button for bypassing after a connection has failed */
  'error-card.continue-button.text': 'Kontynuuj mimo to',
  /** The text shown on the button for retrying after a connection has failed */
  'error-card.retry-button.text': 'Spróbuj ponownie',
  /** The title on the card shown after a connection has failed */
  'error-card.title': 'Wystąpił błąd',

  /** The text shown when the document is used in a single location */
  'locations-banner.locations-count_one': 'Używany na jednej stronie',
  /** The text shown when a resolver exists but the document is not used in any locations */
  'locations-banner.locations-count_zero': 'Nieużywany na żadnej stronie',
  /** The text shown whilst the locations resolver is executing */
  'locations-banner.resolving.text': 'Rozwiązywanie lokalizacji...',

  /** The label shown on a main document in the list pane */
  'main-document.label': 'Główny dokument',
  /** The warning message text shown when a defined resolver fails to return a main document */
  'main-document.missing.text': 'Brak głównego dokumentu dla <Code>{{path}}</Code>',

  /** The label for the tab that shows the document editor at narrow viewports */
  'narrow-tabs.content-tab.label': 'Struktura',
  /** The label for the tab that shows the navigator at narrow viewports */
  'narrow-tabs.navigator-tab.label': 'Nawigator',
  /** The label for the tab that shows the preview at narrow viewports */
  'narrow-tabs.preview-tab.label': 'Prezentacja',

  /** The label for a generic error message */
  'presentation-error.label': 'Komunikat o błędzie',

  /** The toast description for the error message explaining that the iframe is blocked from loading due to a security mismatch. */
  'preview-frame.configuration.error.description':
    'Podgląd iframe jest skonfigurowany do ładowania <Code>{{targetOrigin}}</Code>, ale zgłoszone źródło to <Code>{{reportedOrigin}}</Code>. Presentation Tool nie może łączyć się z nieznanymi źródłami ze względów bezpieczeństwa. Zaktualizuj konfigurację <Code>presentationTool.allowOrigins</Code>, aby zezwolić na połączenie z Visual Editing i Loaders.',
  /** The title of the error toast that shows when the preview iframe times out while waiting for a connection over comlink to establish, and the root cause is discovered to be that the iframe is loading on an URL origin that's not in the allow list. */
  'preview-frame.configuration.error.title': 'Niezgodność źródła URL podglądu',
  /** The text shown when the preview frame cannot connect to Presentation */
  'preview-frame.connection.error.text': 'Nie można połączyć się z podglądem',
  /** The text shown on the button for dismissing the error overlay after a timeout */
  'preview-frame.continue-button.text': 'Kontynuuj mimo to',
  /** The label for the loader's connection status */
  'preview-frame.loader.connection-status.label': 'Status połączenia loadera',
  /** The `aria-label` for the navigator toggle button */
  'preview-frame.navigator.toggle-button.aria-label': 'Przełącz nawigator',
  /** The tooltip text for the navigator toggle button */
  'preview-frame.navigator.toggle-button.tooltip': 'Przełącz nawigator',
  /** The label for the overlay's connection status */
  'preview-frame.overlay.connection-status.label': 'Status połączenia nakładki',
  /** The text shown on the overlay toggle button */
  'preview-frame.overlay.toggle-button.text': 'Edytuj',
  /** The text shown on the overlay toggle tooltip when overlays are enabled */
  'preview-frame.overlay.toggle-button.tooltip_disable': 'Wyłącz nakładkę edycji',
  /** The text shown on the overlay toggle tooltip when overlays are disabled */
  'preview-frame.overlay.toggle-button.tooltip_enable': 'Włącz nakładkę edycji',
  /** The text description for the published perspective switcher menu item */
  'preview-frame.perspective.published.text': 'Wyświetl tę stronę z opublikowaną zawartością',
  /** The `aria-label` for the refresh button */
  'preview-frame.refresh-button.aria-label': 'Odśwież podgląd',
  /** The tooltip text for the refresh button */
  'preview-frame.refresh-button.tooltip': 'Odśwież podgląd',
  /** The `aria-label` for the button that opens the share menu */
  'preview-frame.share-button.aria-label': 'Udostępnij ten podgląd',
  /** Text describing the current status of the preview frame */
  'preview-frame.status_connecting': 'Łączenie.',
  /** Text describing the current status of the preview frame */
  'preview-frame.status_loading': 'Ładowanie.',
  /** Text describing the current status of the preview frame */
  'preview-frame.status_refreshing': 'Odświeżanie.',
  /** Text describing the current status of the preview frame */
  'preview-frame.status_reloading': 'Odświeżanie.',
  /** Text describing the current status of the preview frame */
  'preview-frame.status_timeout':
    'Nie można nawiązać połączenia, sprawdź konsolę przeglądarki, aby uzyskać więcej informacji.',
  /** The `aria-label` for the button that switches viewport size */
  'preview-frame.viewport-button.aria-label': 'Przełącz rozmiar widocznego obszaru',
  /** The viewport size button tooltip text when switching to a full width viewport */
  'preview-frame.viewport-button.tooltip_full': 'Przełącz na pełny widoczny obszar',
  /** The viewport size button tooltip text when switching to a narrow viewport */
  'preview-frame.viewport-button.tooltip_narrow': 'Przełącz na wąski widoczny obszar',

  /** The validation error message shown when the preview location input is missing an origin */
  'preview-location-input.error_missing-origin': 'Adres URL musi zaczynać się od {{origin}}',
  /** The validation error message shown when the preview location input's base path matches that of the studio */
  'preview-location-input.error_same-base-path':
    'Adres URL nie może mieć tej samej ścieżki bazowej co Studio {{basePath}}',

  /** The toast description for the error message explaining that the iframe won't navigate to the new preview URL due to an URL origin security mismatch. */
  'preview-search-param.configuration.error.description':
    'Router chce przejść do <Code>{{previewSearchParam}}</Code>, ale pochodzenie <Code>{{blockedOrigin}}</Code> nie jest dozwolone. Zaktualizuj konfigurację <Code>presentationTool.allowOrigins</Code>, aby to umożliwić.',
  /** The title of the error toast that shows when attempting to navigate to a preview URL origin that's not in the allow list. */
  'preview-search-param.configuration.error.title': 'Zablokowany adres URL podglądu',

  /** Error toast that notifies that URL Preview Secrets can't be generated as the user lacks ACL grants */
  'preview-url-secret.missing-grants':
    'Nie masz uprawnień do tworzenia URL Preview Secrets. Prawdopodobnie spowoduje to błąd podczas ładowania podglądu.',

  /** Menu item in the share preview menu that allows copying the current preview URL, if sharing is enabled */
  'share-preview-menu.copy-url.text': 'Kopiuj link do podglądu',
  /** Fallback message shown when the current user is not permitted to share previews */
  'share-preview-menu.error_missing-grants': 'Nie masz uprawnień do udostępniania podglądów.',
  /** Error message toast that shows the current user does not have permission to toggle sharing of the current preview */
  'share-preview-menu.error_toggle-sharing':
    'Nie masz uprawnień do przełączania udostępniania tego podglądu',
  /** The text show below the QR Code SVG, with instructions on how to use it */
  'share-preview-menu.qr-code.instructions':
    'Zeskanuj kod QR, aby otworzyć podgląd na swoim telefonie.',
  /** Placeholder message for the QR Code SVG when sharing is yet to be enabled */
  'share-preview-menu.qr-code.placeholder': 'Kod QR pojawi się tutaj',
  /** The <title> for the QR Code SVG that shows a link to the current preview */
  'share-preview-menu.qr-code.title': 'Kod QR kodujący adres URL: {{url}}',
  /** The first line of the label that renders next to the sharing toggle, it renders on two rows */
  'share-preview-menu.toggle-button.label_first-line': 'Udostępnij ten podgląd',
  /** The second line of the label that renders next to the sharing toggle, it renders on two rows */
  'share-preview-menu.toggle-button.label_second-line': 'każdemu, kto ma link',
  /** The text shown on the sharing toggle tooltip when sharing is enabled */
  'share-preview-menu.toggle-button.tooltip_disable': 'Wyłącz udostępnianie',
  /** The text shown on the sharing toggle tooltip when sharing is disabled */
  'share-preview-menu.toggle-button.tooltip_enable': 'Włącz udostępnianie',

  /** The status of the clipboard operation when copying a URL */
  'share-url.clipboard.status_copying': 'Kopiowanie adresu URL do schowka…',
  /** The status of the clipboard operation when copying a URL */
  'share-url.clipboard.status_failed': 'Kopiowanie nie powiodło się',
  /** The status of the clipboard operation when copying a URL */
  'share-url.clipboard.status_success': 'Adres URL został skopiowany do schowka',
  /** The status of the clipboard operation when copying a URL */
  'share-url.clipboard.status_unsupported': 'Schowek nie jest obsługiwany',
  /** The share URL menu item text for opening a preview window */
  'share-url.menu-item.open.text': 'Otwórz podgląd',
})
