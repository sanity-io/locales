import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** The status of the channel connection */
  'channel.status_connected': 'Conectado',
  /** The status of the channel connection */
  'channel.status_connecting': 'Conectando',
  /** The status of the channel connection */
  'channel.status_disconnected': 'Desconectado',
  /** The status of the channel connection */
  'channel.status_reconnecting': 'Reconectando',

  /** The title shown above the document list */
  'document-list-pane.document-list.title': 'Documentos en esta página',
  /** The text shown if the document list is unable to render */
  'document-list-pane.error.text': 'No se pudo mostrar la lista de documentos',
  /** The label for the ordering that lists documents in the order they appear on the page */
  'document-list-pane.ordering.by-appearance': 'Por aparición',
  /** The label for the ordering that lists documents by when they were last edited */
  'document-list-pane.ordering.last-edited': 'Última edición',

  /** The text shown if the document editor is unable to render */
  'document-pane.error.text': 'No se pudo mostrar el editor de documentos',

  /** The text shown on the button for bypassing after a connection has failed */
  'error-card.continue-button.text': 'Continuar de todas formas',
  /** The text shown on the button for retrying after a connection has failed */
  'error-card.retry-button.text': 'Reintentar',
  /** The title on the card shown after a connection has failed */
  'error-card.title': 'Se produjo un error',

  /** The text shown when the document is used in a single location */
  'locations-banner.locations-count_one': 'Usado en una página',
  /** The text shown when the document is used in multiple locations */
  'locations-banner.locations-count_other': 'Usado en {{count}} páginas',
  /** The text shown when a resolver exists but the document is not used in any locations */
  'locations-banner.locations-count_zero': 'No se usa en ninguna página',
  /** The text shown whilst the locations resolver is executing */
  'locations-banner.resolving.text': 'Resolviendo ubicaciones...',

  /** The label shown on a main document in the list pane */
  'main-document.label': 'Documento principal',
  /** The warning message text shown when a defined resolver fails to return a main document */
  'main-document.missing.text': 'Falta un documento principal para <Code>{{path}}</Code>',

  /** The label for the tab that shows the document editor at narrow viewports */
  'narrow-tabs.content-tab.label': 'Estructura',
  /** The label for the tab that shows the navigator at narrow viewports */
  'narrow-tabs.navigator-tab.label': 'Navegador',
  /** The label for the tab that shows the preview at narrow viewports */
  'narrow-tabs.preview-tab.label': 'Presentación',

  /** The label for a generic error message */
  'presentation-error.label': 'Mensaje de error',

  /** The toast description for the error message explaining that the iframe is blocked from loading due to a security mismatch. */
  'preview-frame.configuration.error.description':
    'El iframe de vista previa está configurado para cargar <Code>{{targetOrigin}}</Code>, pero el origen reportado es <Code>{{reportedOrigin}}</Code>. Presentation Tool no puede conectarse a orígenes desconocidos por motivos de seguridad. Actualiza tu configuración de <Code>presentationTool.allowOrigins</Code> para permitir la conexión a Visual Editing y Loaders.',
  /** The title of the error toast that shows when the preview iframe times out while waiting for a connection over comlink to establish, and the root cause is discovered to be that the iframe is loading on an URL origin that's not in the allow list. */
  'preview-frame.configuration.error.title': 'Discrepancia de origen de URL de vista previa',
  /** The text shown when the preview frame cannot connect to Presentation */
  'preview-frame.connection.error.text': 'No se pudo conectar a la vista previa',
  /** The text shown on the button for dismissing the error overlay after a timeout */
  'preview-frame.continue-button.text': 'Continuar de todas formas',
  /** The label for the loader's connection status */
  'preview-frame.loader.connection-status.label': 'Estado de conexión del loader',
  /** The `aria-label` for the navigator toggle button */
  'preview-frame.navigator.toggle-button.aria-label': 'Alternar navegador',
  /** The tooltip text for the navigator toggle button */
  'preview-frame.navigator.toggle-button.tooltip': 'Alternar navegador',
  /** The label for the overlay's connection status */
  'preview-frame.overlay.connection-status.label': 'Estado de conexión del overlay',
  /** The text shown on the overlay toggle button */
  'preview-frame.overlay.toggle-button.text': 'Editar',
  /** The text shown on the overlay toggle tooltip when overlays are enabled */
  'preview-frame.overlay.toggle-button.tooltip_disable': 'Desactivar overlay de edición',
  /** The text shown on the overlay toggle tooltip when overlays are disabled */
  'preview-frame.overlay.toggle-button.tooltip_enable': 'Activar overlay de edición',
  /** The text description for the published perspective switcher menu item */
  'preview-frame.perspective.published.text': 'Ver esta página con contenido publicado',
  /** The `aria-label` for the refresh button */
  'preview-frame.refresh-button.aria-label': 'Actualizar vista previa',
  /** The tooltip text for the refresh button */
  'preview-frame.refresh-button.tooltip': 'Actualizar vista previa',
  /** The `aria-label` for the button that opens the share menu */
  'preview-frame.share-button.aria-label': 'Compartir esta vista previa',
  /** Text describing the current status of the preview frame */
  'preview-frame.status_connecting': 'Conectando.',
  /** Text describing the current status of the preview frame */
  'preview-frame.status_loading': 'Cargando.',
  /** Text describing the current status of the preview frame */
  'preview-frame.status_refreshing': 'Actualizando.',
  /** Text describing the current status of the preview frame */
  'preview-frame.status_reloading': 'Actualizando.',
  /** Text describing the current status of the preview frame */
  'preview-frame.status_timeout':
    'No se puede conectar, consulta la consola del navegador para más información.',
  /** The `aria-label` for the button that switches viewport size */
  'preview-frame.viewport-button.aria-label': 'Alternar tamaño de ventana gráfica',
  /** The viewport size button tooltip text when switching to a full width viewport */
  'preview-frame.viewport-button.tooltip_full': 'Cambiar a ventana gráfica completa',
  /** The viewport size button tooltip text when switching to a narrow viewport */
  'preview-frame.viewport-button.tooltip_narrow': 'Cambiar a ventana gráfica estrecha',

  /** The validation error message shown when the preview location input is missing an origin */
  'preview-location-input.error_missing-origin': 'La URL debe comenzar con {{origin}}',
  /** The validation error message shown when the preview location input's base path matches that of the studio */
  'preview-location-input.error_same-base-path':
    'La URL no puede tener la misma ruta base que el Studio {{basePath}}',

  /** The toast description for the error message explaining that the iframe won't navigate to the new preview URL due to an URL origin security mismatch. */
  'preview-search-param.configuration.error.description':
    'El enrutador quiere navegar a <Code>{{previewSearchParam}}</Code>, pero el origen <Code>{{blockedOrigin}}</Code> no está permitido. Actualiza tu configuración de <Code>presentationTool.allowOrigins</Code> para permitirlo.',
  /** The title of the error toast that shows when attempting to navigate to a preview URL origin that's not in the allow list. */
  'preview-search-param.configuration.error.title': 'URL de vista previa bloqueada',

  /** Error toast that notifies that URL Preview Secrets can't be generated as the user lacks ACL grants */
  'preview-url-secret.missing-grants':
    'No tienes permiso para crear URL Preview Secrets. Es probable que esto cause un error al cargar la vista previa.',

  /** Menu item in the share preview menu that allows copying the current preview URL, if sharing is enabled */
  'share-preview-menu.copy-url.text': 'Copiar enlace de vista previa',
  /** Fallback message shown when the current user is not permitted to share previews */
  'share-preview-menu.error_missing-grants': 'No tienes permiso para compartir vistas previas.',
  /** Error message toast that shows the current user does not have permission to toggle sharing of the current preview */
  'share-preview-menu.error_toggle-sharing':
    'No tienes permiso para activar o desactivar el uso compartido de esta vista previa',
  /** The text show below the QR Code SVG, with instructions on how to use it */
  'share-preview-menu.qr-code.instructions':
    'Escanea el código QR para abrir la vista previa en tu teléfono.',
  /** Placeholder message for the QR Code SVG when sharing is yet to be enabled */
  'share-preview-menu.qr-code.placeholder': 'El código QR aparecerá aquí',
  /** The <title> for the QR Code SVG that shows a link to the current preview */
  'share-preview-menu.qr-code.title': 'Un código QR que codifica la URL: {{url}}',
  /** The first line of the label that renders next to the sharing toggle, it renders on two rows */
  'share-preview-menu.toggle-button.label_first-line': 'Compartir esta vista previa',
  /** The second line of the label that renders next to the sharing toggle, it renders on two rows */
  'share-preview-menu.toggle-button.label_second-line': 'con cualquiera que tenga el enlace',
  /** The text shown on the sharing toggle tooltip when sharing is enabled */
  'share-preview-menu.toggle-button.tooltip_disable': 'Desactivar uso compartido',
  /** The text shown on the sharing toggle tooltip when sharing is disabled */
  'share-preview-menu.toggle-button.tooltip_enable': 'Activar uso compartido',

  /** The status of the clipboard operation when copying a URL */
  'share-url.clipboard.status_copying': 'Copiando URL al portapapeles…',
  /** The status of the clipboard operation when copying a URL */
  'share-url.clipboard.status_failed': 'Error al copiar',
  /** The status of the clipboard operation when copying a URL */
  'share-url.clipboard.status_success': 'La URL se ha copiado al portapapeles',
  /** The status of the clipboard operation when copying a URL */
  'share-url.clipboard.status_unsupported': 'Portapapeles no compatible',
  /** The share URL menu item text for opening a preview window */
  'share-url.menu-item.open.text': 'Abrir vista previa',
})
