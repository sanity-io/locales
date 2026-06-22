import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** The status of the channel connection */
  'channel.status_connected': 'ಸಂಪರ್ಕಿತವಾಗಿದೆ',
  /** The status of the channel connection */
  'channel.status_connecting': 'ಸಂಪರ್ಕಿಸಲಾಗುತ್ತಿದೆ',
  /** The status of the channel connection */
  'channel.status_disconnected': 'ಸಂಪರ್ಕ ಕಡಿತಗೊಂಡಿದೆ',
  /** The status of the channel connection */
  'channel.status_reconnecting': 'ಮರುಸಂಪರ್ಕಿಸಲಾಗುತ್ತಿದೆ',

  /** The title shown above the document list */
  'document-list-pane.document-list.title': 'ಈ ಪುಟದಲ್ಲಿರುವ ದಾಖಲೆಗಳು',
  /** The text shown if the document list is unable to render */
  'document-list-pane.error.text': 'ದಾಖಲೆಗಳ ಪಟ್ಟಿಯನ್ನು ರೆಂಡರ್ ಮಾಡಲು ಸಾಧ್ಯವಾಗಲಿಲ್ಲ',

  /** The text shown if the document editor is unable to render */
  'document-pane.error.text': 'ದಾಖಲೆ ಸಂಪಾದಕವನ್ನು ರೆಂಡರ್ ಮಾಡಲು ಸಾಧ್ಯವಾಗಲಿಲ್ಲ',

  /** The text shown on the button for bypassing after a connection has failed */
  'error-card.continue-button.text': 'ಹಾಗಿದ್ದರೂ ಮುಂದುವರಿಯಿರಿ',
  /** The text shown on the button for retrying after a connection has failed */
  'error-card.retry-button.text': 'ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ',
  /** The title on the card shown after a connection has failed */
  'error-card.title': 'ದೋಷ ಸಂಭವಿಸಿದೆ',

  /** The text shown when the document is used in a single location */
  'locations-banner.locations-count_one': 'ಒಂದು ಪುಟದಲ್ಲಿ ಬಳಸಲಾಗಿದೆ',
  /** The text shown when the document is used in multiple locations */
  'locations-banner.locations-count_other': '{{count}} ಪುಟಗಳಲ್ಲಿ ಬಳಸಲಾಗಿದೆ',
  /** The text shown when a resolver exists but the document is not used in any locations */
  'locations-banner.locations-count_zero': 'ಯಾವುದೇ ಪುಟಗಳಲ್ಲಿ ಬಳಸಲಾಗಿಲ್ಲ',
  /** The text shown whilst the locations resolver is executing */
  'locations-banner.resolving.text': 'ಸ್ಥಳಗಳನ್ನು ಪರಿಹರಿಸಲಾಗುತ್ತಿದೆ...',

  /** The label shown on a main document in the list pane */
  'main-document.label': 'ಮುಖ್ಯ ದಾಖಲೆ',
  /** The warning message text shown when a defined resolver fails to return a main document */
  'main-document.missing.text': '<Code>{{path}}</Code> ಗಾಗಿ ಮುಖ್ಯ ದಾಖಲೆ ಕಾಣೆಯಾಗಿದೆ',

  /** The label for the tab that shows the document editor at narrow viewports */
  'narrow-tabs.content-tab.label': 'ರಚನೆ',
  /** The label for the tab that shows the navigator at narrow viewports */
  'narrow-tabs.navigator-tab.label': 'Navigator',
  /** The label for the tab that shows the preview at narrow viewports */
  'narrow-tabs.preview-tab.label': 'Presentation',

  /** The label for a generic error message */
  'presentation-error.label': 'ದೋಷ ಸಂದೇಶ',

  /** The toast description for the error message explaining that the iframe is blocked from loading due to a security mismatch. */
  'preview-frame.configuration.error.description':
    'ಪ್ರಿವ್ಯೂ iframe ಅನ್ನು <Code>{{targetOrigin}}</Code> ಲೋಡ್ ಮಾಡಲು ಕಾನ್ಫಿಗರ್ ಮಾಡಲಾಗಿದೆ, ಆದರೆ ವರದಿ ಮಾಡಿದ ಮೂಲವು <Code>{{reportedOrigin}}</Code> ಆಗಿದೆ. ಭದ್ರತಾ ಉದ್ದೇಶಗಳಿಗಾಗಿ Presentation Tool ಅಜ್ಞಾತ ಮೂಲಗಳಿಗೆ ಸಂಪರ್ಕಿಸಲು ಅಸಮರ್ಥವಾಗಿದೆ. Visual Editing ಮತ್ತು Loaders ಗೆ ಸಂಪರ್ಕಿಸಲು ಅನುಮತಿಸಲು ನಿಮ್ಮ <Code>presentationTool.allowOrigins</Code> ಕಾನ್ಫಿಗರೇಶನ್ ಅನ್ನು ನವೀಕರಿಸಿ.',
  /** The title of the error toast that shows when the preview iframe times out while waiting for a connection over comlink to establish, and the root cause is discovered to be that the iframe is loading on an URL origin that's not in the allow list. */
  'preview-frame.configuration.error.title': 'ಪ್ರಿವ್ಯೂ URL ಮೂಲ ಹೊಂದಾಣಿಕೆಯಾಗುತ್ತಿಲ್ಲ',
  /** The text shown when the preview frame cannot connect to Presentation */
  'preview-frame.connection.error.text': 'ಪ್ರಿವ್ಯೂಗೆ ಸಂಪರ್ಕಿಸಲು ಸಾಧ್ಯವಾಗಲಿಲ್ಲ',
  /** The text shown on the button for dismissing the error overlay after a timeout */
  'preview-frame.continue-button.text': 'ಹಾಗಿದ್ದರೂ ಮುಂದುವರಿಯಿರಿ',
  /** The label for the loader's connection status */
  'preview-frame.loader.connection-status.label': 'Loader ಸಂಪರ್ಕ ಸ್ಥಿತಿ',
  /** The `aria-label` for the navigator toggle button */
  'preview-frame.navigator.toggle-button.aria-label': 'ನ್ಯಾವಿಗೇಟರ್ ಟಾಗಲ್ ಮಾಡಿ',
  /** The tooltip text for the navigator toggle button */
  'preview-frame.navigator.toggle-button.tooltip': 'ನ್ಯಾವಿಗೇಟರ್ ಟಾಗಲ್ ಮಾಡಿ',
  /** The label for the overlay's connection status */
  'preview-frame.overlay.connection-status.label': 'Overlay ಸಂಪರ್ಕ ಸ್ಥಿತಿ',
  /** The text shown on the overlay toggle button */
  'preview-frame.overlay.toggle-button.text': 'ಸಂಪಾದಿಸಿ',
  /** The text shown on the overlay toggle tooltip when overlays are enabled */
  'preview-frame.overlay.toggle-button.tooltip_disable': 'ಸಂಪಾದನೆ overlay ನಿಷ್ಕ್ರಿಯಗೊಳಿಸಿ',
  /** The text shown on the overlay toggle tooltip when overlays are disabled */
  'preview-frame.overlay.toggle-button.tooltip_enable': 'ಸಂಪಾದನೆ overlay ಸಕ್ರಿಯಗೊಳಿಸಿ',
  /** The text description for the published perspective switcher menu item */
  'preview-frame.perspective.published.text': 'ಪ್ರಕಟಿತ ವಿಷಯದೊಂದಿಗೆ ಈ ಪುಟವನ್ನು ವೀಕ್ಷಿಸಿ',
  /** The `aria-label` for the refresh button */
  'preview-frame.refresh-button.aria-label': 'ಪ್ರಿವ್ಯೂ ರಿಫ್ರೆಶ್ ಮಾಡಿ',
  /** The tooltip text for the refresh button */
  'preview-frame.refresh-button.tooltip': 'ಪ್ರಿವ್ಯೂ ರಿಫ್ರೆಶ್ ಮಾಡಿ',
  /** The `aria-label` for the button that opens the share menu */
  'preview-frame.share-button.aria-label': 'ಈ ಪ್ರಿವ್ಯೂ ಹಂಚಿಕೊಳ್ಳಿ',
  /** Text describing the current status of the preview frame */
  'preview-frame.status_connecting': 'ಸಂಪರ್ಕಿಸಲಾಗುತ್ತಿದೆ.',
  /** Text describing the current status of the preview frame */
  'preview-frame.status_loading': 'ಲೋಡ್ ಆಗುತ್ತಿದೆ.',
  /** Text describing the current status of the preview frame */
  'preview-frame.status_refreshing': 'ರಿಫ್ರೆಶ್ ಆಗುತ್ತಿದೆ.',
  /** Text describing the current status of the preview frame */
  'preview-frame.status_reloading': 'ರಿಫ್ರೆಶ್ ಆಗುತ್ತಿದೆ.',
  /** Text describing the current status of the preview frame */
  'preview-frame.status_timeout':
    'ಸಂಪರ್ಕಿಸಲು ಸಾಧ್ಯವಾಗಲಿಲ್ಲ, ಹೆಚ್ಚಿನ ಮಾಹಿತಿಗಾಗಿ ಬ್ರೌಸರ್ ಕನ್ಸೋಲ್ ಪರಿಶೀಲಿಸಿ.',
  /** The `aria-label` for the button that switches viewport size */
  'preview-frame.viewport-button.aria-label': 'ವ್ಯೂಪೋರ್ಟ್ ಗಾತ್ರ ಟಾಗಲ್ ಮಾಡಿ',
  /** The viewport size button tooltip text when switching to a full width viewport */
  'preview-frame.viewport-button.tooltip_full': 'ಪೂರ್ಣ ವ್ಯೂಪೋರ್ಟ್‌ಗೆ ಬದಲಿಸಿ',
  /** The viewport size button tooltip text when switching to a narrow viewport */
  'preview-frame.viewport-button.tooltip_narrow': 'ಕಿರಿದಾದ ವ್ಯೂಪೋರ್ಟ್‌ಗೆ ಬದಲಿಸಿ',

  /** The validation error message shown when the preview location input is missing an origin */
  'preview-location-input.error_missing-origin': 'URL {{origin}} ನಿಂದ ಪ್ರಾರಂಭವಾಗಬೇಕು',
  /** The validation error message shown when the preview location input's base path matches that of the studio */
  'preview-location-input.error_same-base-path':
    'URL ಗೆ Studio {{basePath}} ನಂತೆಯೇ ಅದೇ ಬೇಸ್ ಪಾತ್ ಇರಲು ಸಾಧ್ಯವಿಲ್ಲ',

  /** The toast description for the error message explaining that the iframe won't navigate to the new preview URL due to an URL origin security mismatch. */
  'preview-search-param.configuration.error.description':
    'ರೂಟರ್ <Code>{{previewSearchParam}}</Code> ಗೆ ನ್ಯಾವಿಗೇಟ್ ಮಾಡಲು ಬಯಸುತ್ತದೆ, ಆದರೆ <Code>{{blockedOrigin}}</Code> ಮೂಲವನ್ನು ಅನುಮತಿಸಲಾಗಿಲ್ಲ. ಅದನ್ನು ಅನುಮತಿಸಲು ನಿಮ್ಮ <Code>presentationTool.allowOrigins</Code> ಕಾನ್ಫಿಗರೇಶನ್ ಅನ್ನು ನವೀಕರಿಸಿ.',
  /** The title of the error toast that shows when attempting to navigate to a preview URL origin that's not in the allow list. */
  'preview-search-param.configuration.error.title': 'ನಿರ್ಬಂಧಿತ ಪ್ರಿವ್ಯೂ URL',

  /** Error toast that notifies that URL Preview Secrets can't be generated as the user lacks ACL grants */
  'preview-url-secret.missing-grants':
    'URL Preview Secrets ರಚಿಸಲು ನಿಮಗೆ ಅನುಮತಿ ಇಲ್ಲ. ಇದರಿಂದ ಪ್ರಿವ್ಯೂ ಲೋಡ್ ಆಗಲು ವಿಫಲವಾಗಬಹುದು.',

  /** Menu item in the share preview menu that allows copying the current preview URL, if sharing is enabled */
  'share-preview-menu.copy-url.text': 'ಪ್ರಿವ್ಯೂ ಲಿಂಕ್ ನಕಲಿಸಿ',
  /** Fallback message shown when the current user is not permitted to share previews */
  'share-preview-menu.error_missing-grants': 'ಪ್ರಿವ್ಯೂಗಳನ್ನು ಹಂಚಿಕೊಳ್ಳಲು ನಿಮಗೆ ಅನುಮತಿ ಇಲ್ಲ.',
  /** Error message toast that shows the current user does not have permission to toggle sharing of the current preview */
  'share-preview-menu.error_toggle-sharing':
    'ಈ ಪ್ರಿವ್ಯೂನ ಹಂಚಿಕೆಯನ್ನು ಟಾಗಲ್ ಮಾಡಲು ನಿಮಗೆ ಅನುಮತಿ ಇಲ್ಲ',
  /** The text show below the QR Code SVG, with instructions on how to use it */
  'share-preview-menu.qr-code.instructions':
    'ನಿಮ್ಮ ಫೋನ್‌ನಲ್ಲಿ ಪ್ರಿವ್ಯೂ ತೆರೆಯಲು QR Code ಸ್ಕ್ಯಾನ್ ಮಾಡಿ.',
  /** Placeholder message for the QR Code SVG when sharing is yet to be enabled */
  'share-preview-menu.qr-code.placeholder': 'QR code ಇಲ್ಲಿ ಕಾಣಿಸುತ್ತದೆ',
  /** The <title> for the QR Code SVG that shows a link to the current preview */
  'share-preview-menu.qr-code.title': 'URL ಅನ್ನು ಎನ್‌ಕೋಡ್ ಮಾಡುವ QR Code: {{url}}',
  /** The first line of the label that renders next to the sharing toggle, it renders on two rows */
  'share-preview-menu.toggle-button.label_first-line': 'ಈ ಪ್ರಿವ್ಯೂ ಹಂಚಿಕೊಳ್ಳಿ',
  /** The second line of the label that renders next to the sharing toggle, it renders on two rows */
  'share-preview-menu.toggle-button.label_second-line': 'ಲಿಂಕ್ ಹೊಂದಿರುವ ಯಾರಿಗಾದರೂ',
  /** The text shown on the sharing toggle tooltip when sharing is enabled */
  'share-preview-menu.toggle-button.tooltip_disable': 'ಹಂಚಿಕೆಯನ್ನು ನಿಷ್ಕ್ರಿಯಗೊಳಿಸಿ',
  /** The text shown on the sharing toggle tooltip when sharing is disabled */
  'share-preview-menu.toggle-button.tooltip_enable': 'ಹಂಚಿಕೆಯನ್ನು ಸಕ್ರಿಯಗೊಳಿಸಿ',

  /** The status of the clipboard operation when copying a URL */
  'share-url.clipboard.status_copying': 'URL ಅನ್ನು ಕ್ಲಿಪ್‌ಬೋರ್ಡ್‌ಗೆ ನಕಲಿಸಲಾಗುತ್ತಿದೆ…',
  /** The status of the clipboard operation when copying a URL */
  'share-url.clipboard.status_failed': 'ನಕಲು ವಿಫಲವಾಗಿದೆ',
  /** The status of the clipboard operation when copying a URL */
  'share-url.clipboard.status_success': 'URL ಅನ್ನು ಕ್ಲಿಪ್‌ಬೋರ್ಡ್‌ಗೆ ನಕಲಿಸಲಾಗಿದೆ',
  /** The status of the clipboard operation when copying a URL */
  'share-url.clipboard.status_unsupported': 'ಕ್ಲಿಪ್‌ಬೋರ್ಡ್ ಬೆಂಬಲಿತವಾಗಿಲ್ಲ',
  /** The share URL menu item text for opening a preview window */
  'share-url.menu-item.open.text': 'ಪ್ರಿವ್ಯೂ ತೆರೆಯಿರಿ',
})
