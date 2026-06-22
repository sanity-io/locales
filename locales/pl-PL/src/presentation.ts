import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** The status of the channel connection */
  'channel.status_connected': undefined, // 'Connected'
  /** The status of the channel connection */
  'channel.status_connecting': undefined, // 'Connecting'
  /** The status of the channel connection */
  'channel.status_disconnected': undefined, // 'Disconnected'
  /** The status of the channel connection */
  'channel.status_reconnecting': undefined, // 'Reconnecting'

  /** The title shown above the document list */
  'document-list-pane.document-list.title': undefined, // 'Documents on this page'
  /** The text shown if the document list is unable to render */
  'document-list-pane.error.text': undefined, // 'Could not render the document list'

  /** The text shown if the document editor is unable to render */
  'document-pane.error.text': undefined, // 'Could not render the document editor'

  /** The text shown on the button for bypassing after a connection has failed */
  'error-card.continue-button.text': undefined, // 'Continue anyway'
  /** The text shown on the button for retrying after a connection has failed */
  'error-card.retry-button.text': undefined, // 'Retry'
  /** The title on the card shown after a connection has failed */
  'error-card.title': undefined, // 'An error occurred'

  /** The text shown when the document is used in a single location */
  'locations-banner.locations-count_one': undefined, // 'Used on one page'
  /** The text shown when a resolver exists but the document is not used in any locations */
  'locations-banner.locations-count_zero': undefined, // 'Not used on any pages'
  /** The text shown whilst the locations resolver is executing */
  'locations-banner.resolving.text': undefined, // 'Resolving locations...'

  /** The label shown on a main document in the list pane */
  'main-document.label': undefined, // 'Main document'
  /** The warning message text shown when a defined resolver fails to return a main document */
  'main-document.missing.text': undefined, // 'Missing a main document for <Code>{{path}}</Code>'

  /** The label for the tab that shows the document editor at narrow viewports */
  'narrow-tabs.content-tab.label': undefined, // 'Structure'
  /** The label for the tab that shows the navigator at narrow viewports */
  'narrow-tabs.navigator-tab.label': undefined, // 'Navigator'
  /** The label for the tab that shows the preview at narrow viewports */
  'narrow-tabs.preview-tab.label': undefined, // 'Presentation'

  /** The label for a generic error message */
  'presentation-error.label': undefined, // 'Error message'

  /** The toast description for the error message explaining that the iframe is blocked from loading due to a security mismatch. */
  'preview-frame.configuration.error.description': undefined, // 'The preview iframe is configured to load <Code>{{targetOrigin}}</Code>, but the reported origin is <Code>{{reportedOrigin}}</Code>. Presentation Tool is unable to connect to unknown origins for security purposes. Update your <Code>presentationTool.allowOrigins</Code> configuration to allow connecting to Visual Editing and Loaders.'
  /** The title of the error toast that shows when the preview iframe times out while waiting for a connection over comlink to establish, and the root cause is discovered to be that the iframe is loading on an URL origin that's not in the allow list. */
  'preview-frame.configuration.error.title': undefined, // 'Preview URL origin mismatch'
  /** The text shown when the preview frame cannot connect to Presentation */
  'preview-frame.connection.error.text': undefined, // 'Could not connect to the preview'
  /** The text shown on the button for dismissing the error overlay after a timeout */
  'preview-frame.continue-button.text': undefined, // 'Continue anyway'
  /** The label for the loader's connection status */
  'preview-frame.loader.connection-status.label': undefined, // 'Loader connection status'
  /** The `aria-label` for the navigator toggle button */
  'preview-frame.navigator.toggle-button.aria-label': undefined, // 'Toggle navigator'
  /** The tooltip text for the navigator toggle button */
  'preview-frame.navigator.toggle-button.tooltip': undefined, // 'Toggle navigator'
  /** The label for the overlay's connection status */
  'preview-frame.overlay.connection-status.label': undefined, // 'Overlay connection status'
  /** The text shown on the overlay toggle button */
  'preview-frame.overlay.toggle-button.text': undefined, // 'Edit'
  /** The text shown on the overlay toggle tooltip when overlays are enabled */
  'preview-frame.overlay.toggle-button.tooltip_disable': undefined, // 'Disable edit overlay'
  /** The text shown on the overlay toggle tooltip when overlays are disabled */
  'preview-frame.overlay.toggle-button.tooltip_enable': undefined, // 'Enable edit overlay'
  /** The text description for the published perspective switcher menu item */
  'preview-frame.perspective.published.text': undefined, // 'View this page with published content'
  /** The `aria-label` for the refresh button */
  'preview-frame.refresh-button.aria-label': undefined, // 'Refresh preview'
  /** The tooltip text for the refresh button */
  'preview-frame.refresh-button.tooltip': undefined, // 'Refresh preview'
  /** The `aria-label` for the button that opens the share menu */
  'preview-frame.share-button.aria-label': undefined, // 'Share this preview'
  /** Text describing the current status of the preview frame */
  'preview-frame.status_connecting': undefined, // 'Connecting.'
  /** Text describing the current status of the preview frame */
  'preview-frame.status_loading': undefined, // 'Loading.'
  /** Text describing the current status of the preview frame */
  'preview-frame.status_refreshing': undefined, // 'Refreshing.'
  /** Text describing the current status of the preview frame */
  'preview-frame.status_reloading': undefined, // 'Refreshing.'
  /** Text describing the current status of the preview frame */
  'preview-frame.status_timeout': undefined, // 'Unable to connect, check the browser console for more information.'
  /** The `aria-label` for the button that switches viewport size */
  'preview-frame.viewport-button.aria-label': undefined, // 'Toggle viewport size'
  /** The viewport size button tooltip text when switching to a full width viewport */
  'preview-frame.viewport-button.tooltip_full': undefined, // 'Switch to full viewport'
  /** The viewport size button tooltip text when switching to a narrow viewport */
  'preview-frame.viewport-button.tooltip_narrow': undefined, // 'Switch to narrow viewport'

  /** The validation error message shown when the preview location input is missing an origin */
  'preview-location-input.error_missing-origin': undefined, // 'URL must start with {{origin}}'
  /** The validation error message shown when the preview location input's base path matches that of the studio */
  'preview-location-input.error_same-base-path': undefined, // 'URL can’t have the same base path as the Studio {{basePath}}'

  /** The toast description for the error message explaining that the iframe won't navigate to the new preview URL due to an URL origin security mismatch. */
  'preview-search-param.configuration.error.description': undefined, // 'The router wants to navigate to <Code>{{previewSearchParam}}</Code>, but the origin <Code>{{blockedOrigin}}</Code> is not allowed. Update your <Code>presentationTool.allowOrigins</Code> configuration to allow it.'
  /** The title of the error toast that shows when attempting to navigate to a preview URL origin that's not in the allow list. */
  'preview-search-param.configuration.error.title': undefined, // 'Blocked preview URL'

  /** Error toast that notifies that URL Preview Secrets can't be generated as the user lacks ACL grants */
  'preview-url-secret.missing-grants': undefined, // 'You don\'t have permission to create URL Preview Secrets. This will likely cause the preview to fail loading.'

  /** Menu item in the share preview menu that allows copying the current preview URL, if sharing is enabled */
  'share-preview-menu.copy-url.text': undefined, // 'Copy preview link'
  /** Fallback message shown when the current user is not permitted to share previews */
  'share-preview-menu.error_missing-grants': undefined, // 'You don\'t have permission to share previews. '
  /** Error message toast that shows the current user does not have permission to toggle sharing of the current preview */
  'share-preview-menu.error_toggle-sharing': undefined, // 'You don\'t have permission to toggle sharing of this preview'
  /** The text show below the QR Code SVG, with instructions on how to use it */
  'share-preview-menu.qr-code.instructions': undefined, // 'Scan the QR Code to open the preview on your phone.'
  /** Placeholder message for the QR Code SVG when sharing is yet to be enabled */
  'share-preview-menu.qr-code.placeholder': undefined, // 'QR code will appear here'
  /** The <title> for the QR Code SVG that shows a link to the current preview */
  'share-preview-menu.qr-code.title': undefined, // 'A QR Code which encodes the URL: {{url}}'
  /** The first line of the label that renders next to the sharing toggle, it renders on two rows */
  'share-preview-menu.toggle-button.label_first-line': undefined, // 'Share this preview'
  /** The second line of the label that renders next to the sharing toggle, it renders on two rows */
  'share-preview-menu.toggle-button.label_second-line': undefined, // 'with anyone who has the link'
  /** The text shown on the sharing toggle tooltip when sharing is enabled */
  'share-preview-menu.toggle-button.tooltip_disable': undefined, // 'Disable sharing'
  /** The text shown on the sharing toggle tooltip when sharing is disabled */
  'share-preview-menu.toggle-button.tooltip_enable': undefined, // 'Enable sharing'

  /** The status of the clipboard operation when copying a URL */
  'share-url.clipboard.status_copying': undefined, // 'Copying URL to clipboard…'
  /** The status of the clipboard operation when copying a URL */
  'share-url.clipboard.status_failed': undefined, // 'Copy failed'
  /** The status of the clipboard operation when copying a URL */
  'share-url.clipboard.status_success': undefined, // 'The URL is copied to the clipboard'
  /** The status of the clipboard operation when copying a URL */
  'share-url.clipboard.status_unsupported': undefined, // 'Clipboard not supported'
  /** The share URL menu item text for opening a preview window */
  'share-url.menu-item.open.text': undefined, // 'Open preview'
})
