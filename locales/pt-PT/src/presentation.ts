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
  'document-list-pane.document-list.title': 'Documentos nesta página',
  /** The text shown if the document list is unable to render */
  'document-list-pane.error.text': 'Não foi possível renderizar a lista de documentos',
  /** The label for the ordering that lists documents in the order they appear on the page */
  'document-list-pane.ordering.by-appearance': undefined, // 'By appearance'
  /** The label for the ordering that lists documents by when they were last edited */
  'document-list-pane.ordering.last-edited': undefined, // 'Last edited'

  /** The text shown if the document editor is unable to render */
  'document-pane.error.text': 'Não foi possível renderizar o editor de documentos',

  /** The text shown on the button for bypassing after a connection has failed */
  'error-card.continue-button.text': 'Continuar mesmo assim',
  /** The text shown on the button for retrying after a connection has failed */
  'error-card.retry-button.text': 'Tentar novamente',
  /** The title on the card shown after a connection has failed */
  'error-card.title': 'Ocorreu um erro',

  /** The text shown when the document is used in a single location */
  'locations-banner.locations-count_one': 'Usado em uma página',
  /** The text shown when the document is used in multiple locations */
  'locations-banner.locations-count_other': 'Usado em {{count}} páginas',
  /** The text shown when a resolver exists but the document is not used in any locations */
  'locations-banner.locations-count_zero': 'Não usado em nenhuma página',
  /** The text shown whilst the locations resolver is executing */
  'locations-banner.resolving.text': 'Resolvendo localizações...',

  /** The label shown on a main document in the list pane */
  'main-document.label': 'Documento principal',
  /** The warning message text shown when a defined resolver fails to return a main document */
  'main-document.missing.text': 'Falta um documento principal para <Code>{{path}}</Code>',

  /** The label for the tab that shows the document editor at narrow viewports */
  'narrow-tabs.content-tab.label': 'Estrutura',
  /** The label for the tab that shows the navigator at narrow viewports */
  'narrow-tabs.navigator-tab.label': 'Navegador',
  /** The label for the tab that shows the preview at narrow viewports */
  'narrow-tabs.preview-tab.label': 'Apresentação',

  /** The label for a generic error message */
  'presentation-error.label': 'Mensagem de erro',

  /** The toast description for the error message explaining that the iframe is blocked from loading due to a security mismatch. */
  'preview-frame.configuration.error.description':
    'O iframe de pré-visualização está configurado para carregar <Code>{{targetOrigin}}</Code>, mas a origem informada é <Code>{{reportedOrigin}}</Code>. O Presentation Tool não consegue conectar-se a origens desconhecidas por motivos de segurança. Atualize a sua configuração <Code>presentationTool.allowOrigins</Code> para permitir a conexão com Visual Editing e Loaders.',
  /** The title of the error toast that shows when the preview iframe times out while waiting for a connection over comlink to establish, and the root cause is discovered to be that the iframe is loading on an URL origin that's not in the allow list. */
  'preview-frame.configuration.error.title':
    'Incompatibilidade de origem da URL de pré-visualização',
  /** The text shown when the preview frame cannot connect to Presentation */
  'preview-frame.connection.error.text': 'Não foi possível conectar à pré-visualização',
  /** The text shown on the button for dismissing the error overlay after a timeout */
  'preview-frame.continue-button.text': 'Continuar mesmo assim',
  /** The label for the loader's connection status */
  'preview-frame.loader.connection-status.label': 'Status de conexão do Loader',
  /** The `aria-label` for the navigator toggle button */
  'preview-frame.navigator.toggle-button.aria-label': 'Alternar navegador',
  /** The tooltip text for the navigator toggle button */
  'preview-frame.navigator.toggle-button.tooltip': 'Alternar navegador',
  /** The label for the overlay's connection status */
  'preview-frame.overlay.connection-status.label': 'Status de conexão do overlay',
  /** The text shown on the overlay toggle button */
  'preview-frame.overlay.toggle-button.text': 'Editar',
  /** The text shown on the overlay toggle tooltip when overlays are enabled */
  'preview-frame.overlay.toggle-button.tooltip_disable': 'Desativar overlay de edição',
  /** The text shown on the overlay toggle tooltip when overlays are disabled */
  'preview-frame.overlay.toggle-button.tooltip_enable': 'Ativar overlay de edição',
  /** The text description for the published perspective switcher menu item */
  'preview-frame.perspective.published.text': 'Ver esta página com conteúdo publicado',
  /** The `aria-label` for the refresh button */
  'preview-frame.refresh-button.aria-label': 'Atualizar pré-visualização',
  /** The tooltip text for the refresh button */
  'preview-frame.refresh-button.tooltip': 'Atualizar pré-visualização',
  /** The `aria-label` for the button that opens the share menu */
  'preview-frame.share-button.aria-label': 'Compartilhar esta pré-visualização',
  /** Text describing the current status of the preview frame */
  'preview-frame.status_connecting': 'Conectando.',
  /** Text describing the current status of the preview frame */
  'preview-frame.status_loading': 'Carregando.',
  /** Text describing the current status of the preview frame */
  'preview-frame.status_refreshing': 'Atualizando.',
  /** Text describing the current status of the preview frame */
  'preview-frame.status_reloading': 'Atualizando.',
  /** Text describing the current status of the preview frame */
  'preview-frame.status_timeout':
    'Não foi possível conectar, verifique o console do navegador para mais informações.',
  /** The `aria-label` for the button that switches viewport size */
  'preview-frame.viewport-button.aria-label': 'Alternar tamanho do viewport',
  /** The viewport size button tooltip text when switching to a full width viewport */
  'preview-frame.viewport-button.tooltip_full': 'Alternar para viewport completo',
  /** The viewport size button tooltip text when switching to a narrow viewport */
  'preview-frame.viewport-button.tooltip_narrow': 'Alternar para viewport estreito',

  /** The validation error message shown when the preview location input is missing an origin */
  'preview-location-input.error_missing-origin': 'A URL deve começar com {{origin}}',
  /** The validation error message shown when the preview location input's base path matches that of the studio */
  'preview-location-input.error_same-base-path':
    'A URL não pode ter o mesmo caminho base que o Studio {{basePath}}',

  /** The toast description for the error message explaining that the iframe won't navigate to the new preview URL due to an URL origin security mismatch. */
  'preview-search-param.configuration.error.description':
    'O roteador quer navegar para <Code>{{previewSearchParam}}</Code>, mas a origem <Code>{{blockedOrigin}}</Code> não é permitida. Atualize sua configuração <Code>presentationTool.allowOrigins</Code> para permitir.',
  /** The title of the error toast that shows when attempting to navigate to a preview URL origin that's not in the allow list. */
  'preview-search-param.configuration.error.title': 'URL de pré-visualização bloqueada',

  /** Error toast that notifies that URL Preview Secrets can't be generated as the user lacks ACL grants */
  'preview-url-secret.missing-grants':
    'Você não tem permissão para criar URL Preview Secrets. Isso provavelmente causará falha no carregamento da pré-visualização.',

  /** Menu item in the share preview menu that allows copying the current preview URL, if sharing is enabled */
  'share-preview-menu.copy-url.text': 'Copiar link de pré-visualização',
  /** Fallback message shown when the current user is not permitted to share previews */
  'share-preview-menu.error_missing-grants':
    'Você não tem permissão para compartilhar pré-visualizações.',
  /** Error message toast that shows the current user does not have permission to toggle sharing of the current preview */
  'share-preview-menu.error_toggle-sharing':
    'Você não tem permissão para alternar o compartilhamento desta prévia',
  /** The text show below the QR Code SVG, with instructions on how to use it */
  'share-preview-menu.qr-code.instructions':
    'Escaneie o QR Code para abrir a prévia no seu celular.',
  /** Placeholder message for the QR Code SVG when sharing is yet to be enabled */
  'share-preview-menu.qr-code.placeholder': 'O QR Code aparecerá aqui',
  /** The <title> for the QR Code SVG that shows a link to the current preview */
  'share-preview-menu.qr-code.title': 'Um QR Code que codifica a URL: {{url}}',
  /** The first line of the label that renders next to the sharing toggle, it renders on two rows */
  'share-preview-menu.toggle-button.label_first-line': 'Compartilhar esta prévia',
  /** The second line of the label that renders next to the sharing toggle, it renders on two rows */
  'share-preview-menu.toggle-button.label_second-line': 'com qualquer pessoa que tenha o link',
  /** The text shown on the sharing toggle tooltip when sharing is enabled */
  'share-preview-menu.toggle-button.tooltip_disable': 'Desativar compartilhamento',
  /** The text shown on the sharing toggle tooltip when sharing is disabled */
  'share-preview-menu.toggle-button.tooltip_enable': 'Ativar compartilhamento',

  /** The status of the clipboard operation when copying a URL */
  'share-url.clipboard.status_copying': 'Copiando URL para a área de transferência…',
  /** The status of the clipboard operation when copying a URL */
  'share-url.clipboard.status_failed': 'Falha ao copiar',
  /** The status of the clipboard operation when copying a URL */
  'share-url.clipboard.status_success': 'A URL foi copiada para a área de transferência',
  /** The status of the clipboard operation when copying a URL */
  'share-url.clipboard.status_unsupported': 'Área de transferência não suportada',
  /** The share URL menu item text for opening a preview window */
  'share-url.menu-item.open.text': 'Abrir prévia',
})
