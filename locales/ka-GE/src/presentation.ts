import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** The status of the channel connection */
  'channel.status_connected': 'დაკავშირებულია',
  /** The status of the channel connection */
  'channel.status_connecting': 'მიმდინარეობს დაკავშირება',
  /** The status of the channel connection */
  'channel.status_disconnected': 'კავშირი გაწყვეტილია',
  /** The status of the channel connection */
  'channel.status_reconnecting': 'მიმდინარეობს ხელახალი დაკავშირება',

  /** The title shown above the document list */
  'document-list-pane.document-list.title': 'დოკუმენტები ამ გვერდზე',
  /** The text shown if the document list is unable to render */
  'document-list-pane.error.text': 'დოკუმენტების სიის ჩვენება ვერ მოხერხდა',

  /** The text shown if the document editor is unable to render */
  'document-pane.error.text': 'დოკუმენტის რედაქტორის ჩვენება ვერ მოხერხდა',

  /** The text shown on the button for bypassing after a connection has failed */
  'error-card.continue-button.text': 'მაინც გაგრძელება',
  /** The text shown on the button for retrying after a connection has failed */
  'error-card.retry-button.text': 'თავიდან ცდა',
  /** The title on the card shown after a connection has failed */
  'error-card.title': 'მოხდა შეცდომა',

  /** The text shown when the document is used in a single location */
  'locations-banner.locations-count_one': 'გამოყენებულია ერთ გვერდზე',
  /** The text shown when the document is used in multiple locations */
  'locations-banner.locations-count_other': 'გამოყენებულია {{count}} გვერდზე',
  /** The text shown when a resolver exists but the document is not used in any locations */
  'locations-banner.locations-count_zero': 'არ გამოიყენება არცერთ გვერდზე',
  /** The text shown whilst the locations resolver is executing */
  'locations-banner.resolving.text': 'მდებარეობების განსაზღვრა...',

  /** The label shown on a main document in the list pane */
  'main-document.label': 'მთავარი დოკუმენტი',
  /** The warning message text shown when a defined resolver fails to return a main document */
  'main-document.missing.text': 'აკლია მთავარი დოკუმენტი <Code>{{path}}</Code>-სთვის',

  /** The label for the tab that shows the document editor at narrow viewports */
  'narrow-tabs.content-tab.label': 'სტრუქტურა',
  /** The label for the tab that shows the navigator at narrow viewports */
  'narrow-tabs.navigator-tab.label': 'ნავიგატორი',
  /** The label for the tab that shows the preview at narrow viewports */
  'narrow-tabs.preview-tab.label': 'პრეზენტაცია',

  /** The label for a generic error message */
  'presentation-error.label': 'შეცდომის შეტყობინება',

  /** The toast description for the error message explaining that the iframe is blocked from loading due to a security mismatch. */
  'preview-frame.configuration.error.description':
    'გადახედვის iframe კონფიგურირებულია <Code>{{targetOrigin}}</Code>-ის ჩასატვირთად, მაგრამ მოხსენებული წარმოშობა არის <Code>{{reportedOrigin}}</Code>. Presentation Tool ვერ უკავშირდება უცნობ წარმოშობებს უსაფრთხოების მიზნებისთვის. განაახლეთ თქვენი <Code>presentationTool.allowOrigins</Code> კონფიგურაცია Visual Editing-თან და Loaders-თან დასაკავშირებლად.',
  /** The title of the error toast that shows when the preview iframe times out while waiting for a connection over comlink to establish, and the root cause is discovered to be that the iframe is loading on an URL origin that's not in the allow list. */
  'preview-frame.configuration.error.title': 'გადახედვის URL-ის წარმოშობის შეუსაბამობა',
  /** The text shown when the preview frame cannot connect to Presentation */
  'preview-frame.connection.error.text': 'გადახედვასთან დაკავშირება ვერ მოხერხდა',
  /** The text shown on the button for dismissing the error overlay after a timeout */
  'preview-frame.continue-button.text': 'მაინც გაგრძელება',
  /** The label for the loader's connection status */
  'preview-frame.loader.connection-status.label': 'Loader-ის კავშირის სტატუსი',
  /** The `aria-label` for the navigator toggle button */
  'preview-frame.navigator.toggle-button.aria-label': 'ნავიგატორის გადართვა',
  /** The tooltip text for the navigator toggle button */
  'preview-frame.navigator.toggle-button.tooltip': 'ნავიგატორის გადართვა',
  /** The label for the overlay's connection status */
  'preview-frame.overlay.connection-status.label': 'Overlay-ის კავშირის სტატუსი',
  /** The text shown on the overlay toggle button */
  'preview-frame.overlay.toggle-button.text': 'რედაქტირება',
  /** The text shown on the overlay toggle tooltip when overlays are enabled */
  'preview-frame.overlay.toggle-button.tooltip_disable': 'რედაქტირების overlay-ის გამორთვა',
  /** The text shown on the overlay toggle tooltip when overlays are disabled */
  'preview-frame.overlay.toggle-button.tooltip_enable': 'რედაქტირების overlay-ის ჩართვა',
  /** The text description for the published perspective switcher menu item */
  'preview-frame.perspective.published.text': 'ამ გვერდის გამოქვეყნებული კონტენტით ნახვა',
  /** The `aria-label` for the refresh button */
  'preview-frame.refresh-button.aria-label': 'გადახედვის განახლება',
  /** The tooltip text for the refresh button */
  'preview-frame.refresh-button.tooltip': 'გადახედვის განახლება',
  /** The `aria-label` for the button that opens the share menu */
  'preview-frame.share-button.aria-label': 'ამ გადახედვის გაზიარება',
  /** Text describing the current status of the preview frame */
  'preview-frame.status_connecting': 'დაკავშირება.',
  /** Text describing the current status of the preview frame */
  'preview-frame.status_loading': 'ჩატვირთვა.',
  /** Text describing the current status of the preview frame */
  'preview-frame.status_refreshing': 'განახლება.',
  /** Text describing the current status of the preview frame */
  'preview-frame.status_reloading': 'განახლება.',
  /** Text describing the current status of the preview frame */
  'preview-frame.status_timeout':
    'კავშირი ვერ დამყარდა, დამატებითი ინფორმაციისთვის შეამოწმეთ ბრაუზერის კონსოლი.',
  /** The `aria-label` for the button that switches viewport size */
  'preview-frame.viewport-button.aria-label': 'ვიუპორტის ზომის გადართვა',
  /** The viewport size button tooltip text when switching to a full width viewport */
  'preview-frame.viewport-button.tooltip_full': 'სრულ ვიუპორტზე გადართვა',
  /** The viewport size button tooltip text when switching to a narrow viewport */
  'preview-frame.viewport-button.tooltip_narrow': 'ვიწრო ვიუპორტზე გადართვა',

  /** The validation error message shown when the preview location input is missing an origin */
  'preview-location-input.error_missing-origin': 'URL უნდა იწყებოდეს {{origin}}-ით',
  /** The validation error message shown when the preview location input's base path matches that of the studio */
  'preview-location-input.error_same-base-path':
    'URL-ს არ შეიძლება ჰქონდეს იგივე საბაზო გზა, რაც Studio-ს {{basePath}}',

  /** The toast description for the error message explaining that the iframe won't navigate to the new preview URL due to an URL origin security mismatch. */
  'preview-search-param.configuration.error.description':
    'როუტერი ცდილობს გადავიდეს <Code>{{previewSearchParam}}</Code>-ზე, მაგრამ წარმოშობა <Code>{{blockedOrigin}}</Code> დაშვებული არ არის. განაახლეთ თქვენი <Code>presentationTool.allowOrigins</Code> კონფიგურაცია მის დასაშვებად.',
  /** The title of the error toast that shows when attempting to navigate to a preview URL origin that's not in the allow list. */
  'preview-search-param.configuration.error.title': 'დაბლოკილი გადახედვის URL',

  /** Error toast that notifies that URL Preview Secrets can't be generated as the user lacks ACL grants */
  'preview-url-secret.missing-grants':
    'თქვენ არ გაქვთ URL Preview Secrets-ის შექმნის უფლება. ეს სავარაუდოდ გამოიწვევს გადახედვის ჩატვირთვის წარუმატებლობას.',

  /** Menu item in the share preview menu that allows copying the current preview URL, if sharing is enabled */
  'share-preview-menu.copy-url.text': 'გადახედვის ბმულის კოპირება',
  /** Fallback message shown when the current user is not permitted to share previews */
  'share-preview-menu.error_missing-grants': 'თქვენ არ გაქვთ გადახედვების გაზიარების უფლება. ',
  /** Error message toast that shows the current user does not have permission to toggle sharing of the current preview */
  'share-preview-menu.error_toggle-sharing':
    'თქვენ არ გაქვთ ამ გადახედვის გაზიარების ჩართვა/გამორთვის უფლება',
  /** The text show below the QR Code SVG, with instructions on how to use it */
  'share-preview-menu.qr-code.instructions':
    'დაასკანირეთ QR კოდი, რათა გახსნათ გადახედვა თქვენს ტელეფონზე.',
  /** Placeholder message for the QR Code SVG when sharing is yet to be enabled */
  'share-preview-menu.qr-code.placeholder': 'QR კოდი გამოჩნდება აქ',
  /** The <title> for the QR Code SVG that shows a link to the current preview */
  'share-preview-menu.qr-code.title': 'QR კოდი, რომელიც შიფრავს URL-ს: {{url}}',
  /** The first line of the label that renders next to the sharing toggle, it renders on two rows */
  'share-preview-menu.toggle-button.label_first-line': 'გააზიარეთ ეს გადახედვა',
  /** The second line of the label that renders next to the sharing toggle, it renders on two rows */
  'share-preview-menu.toggle-button.label_second-line': 'ყველასთვის, ვისაც აქვს ბმული',
  /** The text shown on the sharing toggle tooltip when sharing is enabled */
  'share-preview-menu.toggle-button.tooltip_disable': 'გაზიარების გამორთვა',
  /** The text shown on the sharing toggle tooltip when sharing is disabled */
  'share-preview-menu.toggle-button.tooltip_enable': 'გაზიარების ჩართვა',

  /** The status of the clipboard operation when copying a URL */
  'share-url.clipboard.status_copying': 'URL კლიპბორდზე კოპირება…',
  /** The status of the clipboard operation when copying a URL */
  'share-url.clipboard.status_failed': 'კოპირება ვერ მოხერხდა',
  /** The status of the clipboard operation when copying a URL */
  'share-url.clipboard.status_success': 'URL კოპირებულია კლიპბორდზე',
  /** The status of the clipboard operation when copying a URL */
  'share-url.clipboard.status_unsupported': 'კლიპბორდი არ არის მხარდაჭერილი',
  /** The share URL menu item text for opening a preview window */
  'share-url.menu-item.open.text': 'გადახედვის გახსნა',
})
