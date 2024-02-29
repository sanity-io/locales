import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Tooltip when action button is disabled because the operation is not ready   */
  'action.delete.disabled.not-ready': 'Operação não está pronta',
  /** Tooltip when action button is disabled because the document does not exist */
  'action.delete.disabled.nothing-to-delete': 'Este documento ainda não existe ou já foi excluído',
  /** Label for the "Delete" document action button */
  'action.delete.label': 'Excluir',
  /** Label for the "Delete" document action while the document is being deleted */
  'action.delete.running.label': 'Excluindo…',
  /** Message prompting the user to confirm discarding changes */
  'action.discard-changes.confirm-dialog.confirm-discard-changes':
    'Você tem certeza de que deseja descartar todas as alterações desde a última publicação?',
  /** Tooltip when action is disabled because the document has no unpublished changes */
  'action.discard-changes.disabled.no-change': 'Este documento não tem alterações não publicadas',
  /** Tooltip when action is disabled because the document is not published */
  'action.discard-changes.disabled.not-published': 'Este documento não está publicado',
  /** Tooltip when action button is disabled because the operation is not ready   */
  'action.discard-changes.disabled.not-ready': 'Operação não está pronta',
  /** Label for the "Discard changes" document action */
  'action.discard-changes.label': 'Descartar alterações',
  /** Tooltip when action is disabled because the operation is not ready   */
  'action.duplicate.disabled.not-ready': 'Operação não está pronta',
  /** Tooltip when action is disabled because the document doesn't exist */
  'action.duplicate.disabled.nothing-to-duplicate':
    'Este documento ainda não existe, então não há nada para duplicar',
  /** Label for the "Duplicate" document action */
  'action.duplicate.label': 'Duplicar',
  /** Label for the "Duplicate" document action while the document is being duplicated */
  'action.duplicate.running.label': 'Duplicando…',
  /** Tooltip when publish button is disabled because the document is already published, and published time is unavailable.*/
  'action.publish.already-published.no-time-ago.tooltip': 'Já publicado',
  /** Tooltip when publish button is disabled because the document is already published.*/
  'action.publish.already-published.tooltip': 'Publicado há {{timeSincePublished}}',
  /** Tooltip when action is disabled because the studio is not ready.*/
  'action.publish.disabled.not-ready': 'Operação não está pronta',
  /** Label for action when there are pending changes.*/
  'action.publish.draft.label': 'Publicar',
  /** Label for the "Publish" document action when the document has live edit enabled.*/
  'action.publish.live-edit.label': 'Publicar',
  /** Fallback tooltip for the "Publish" document action when publish is invoked for a document with live edit enabled.*/
  'action.publish.live-edit.publish-disabled':
    'Não é possível publicar pois a Edição ao Vivo está ativada para este tipo de documento',
  /** Tooltip for the "Publish" document action when the document has live edit enabled.*/
  'action.publish.live-edit.tooltip':
    'A Edição ao Vivo está ativada para este tipo de conteúdo e a publicação acontece automaticamente à medida que você faz alterações',
  /** Tooltip when publish button is disabled because there are no changes.*/
  'action.publish.no-changes.tooltip': 'Sem alterações não publicadas',
  /** Label for the "Publish" document action when there are no changes.*/
  'action.publish.published.label': 'Publicado',
  /** Label for the "Publish" document action while publish is being executed.*/
  'action.publish.running.label': 'Publicando…',
  /** Tooltip when the "Publish" document action is disabled due to validation issues */
  'action.publish.validation-issues.tooltip':
    'Existem erros de validação que precisam ser corrigidos antes que este documento possa ser publicado',
  /** Tooltip when publish button is waiting for validation and async tasks to complete.*/
  'action.publish.waiting': 'Aguardando a conclusão das tarefas antes de publicar',
  /** Message prompting the user to confirm that they want to restore to an earlier version*/
  'action.restore.confirm.message': 'Você tem certeza de que deseja restaurar este documento?',
  /** Fallback tooltip for when user is looking at the initial version */
  'action.restore.disabled.cannot-restore-initial': 'Você não pode restaurar para a versão inicial',
  /** Label for the "Restore" document action */
  'action.restore.label': 'Restaurar',
  /** Default tooltip for the action */
  'action.restore.tooltip': 'Restaurar para esta versão',
  /** Tooltip when action is disabled because the document is not already published */
  'action.unpublish.disabled.not-published': 'Este documento não está publicado',
  /** Tooltip when action is disabled because the operation is not ready   */
  'action.unpublish.disabled.not-ready': 'Operação não está pronta',
  /** Label for the "Unpublish" document action */
  'action.unpublish.label': 'Despublicar',
  /** Fallback tooltip for the Unpublish document action when publish is invoked for a document with live edit enabled.*/
  'action.unpublish.live-edit.disabled':
    'Este documento está com a edição ao vivo ativada e não pode ser despublicado',

  /** The text for the restore button on the deleted document banner */
  'banners.deleted-document-banner.restore-button.text': 'Restaurar versão mais recente',
  /** The text content for the deleted document banner */
  'banners.deleted-document-banner.text': 'Este documento foi excluído.',
  /** The text content for the deprecated document type banner */
  'banners.deprecated-document-type-banner.text': undefined, // 'This document type has been deprecated.'
  /** The text for the permission check banner if the user only has one role, and it does not allow updating this document */
  'banners.permission-check-banner.missing-permission_create_one':
    'Seu papel <Roles/> não tem permissão para criar este documento.',
  /** The text for the permission check banner if the user only has multiple roles, but they do not allow updating this document */
  'banners.permission-check-banner.missing-permission_create_other':
    'Seus papéis <Roles/> não têm permissão para criar este documento.',
  /** The text for the permission check banner if the user only has one role, and it does not allow updating this document */
  'banners.permission-check-banner.missing-permission_update_one':
    'Seu papel <Roles/> não tem permissão para atualizar este documento.',
  /** The text for the permission check banner if the user only has multiple roles, but they do not allow updating this document */
  'banners.permission-check-banner.missing-permission_update_other':
    'Seus papéis <Roles/> não têm permissão para atualizar este documento.',
  /** The text for the reload button */
  'banners.reference-changed-banner.reason-changed.reload-button.text': 'Recarregar referência',
  /** The text for the reference change banner if the reason is that the reference has been changed */
  'banners.reference-changed-banner.reason-changed.text':
    'Esta referência foi alterada desde que você a abriu.',
  /** The text for the close button */
  'banners.reference-changed-banner.reason-removed.close-button.text': 'Fechar referência',
  /** The text for the reference change banner if the reason is that the reference has been deleted */
  'banners.reference-changed-banner.reason-removed.text':
    'Esta referência foi removida desde que você a abriu.',

  /** Browser/tab title when creating a new document of a given type */
  'browser-document-title.new-document': undefined, // 'New {{schemaType}}'
  /** Browser/tab title when editing a document where the title cannot be resolved from preview configuration */
  'browser-document-title.untitled-document': undefined, // 'Untitled'

  /** The action menu button aria-label */
  'buttons.action-menu-button.aria-label': 'Abrir ações do documento',
  /** The action menu button tooltip */
  'buttons.action-menu-button.tooltip': 'Ações do documento',
  /** The aria-label for the split pane button on the document panel header */
  'buttons.split-pane-button.aria-label': 'Dividir painel à direita',
  /** The tool tip for the split pane button on the document panel header */
  'buttons.split-pane-button.tooltip': 'Dividir painel à direita',
  /** The title for the close button on the split pane on the document panel header */
  'buttons.split-pane-close-button.title': 'Fechar painel dividido',
  /** The title for the close group button on the split pane on the document panel header */
  'buttons.split-pane-close-group-button.title': 'Fechar grupo de painéis',

  /** The text in the "Cancel" button in the confirm delete dialog that cancels the action and closes the dialog */
  'confirm-delete-dialog.cancel-button.text': 'Cancelar',
  /** Used in `confirm-delete-dialog.cdr-summary.title` */
  'confirm-delete-dialog.cdr-summary.document-count_one': '1 documento',
  /** Used in `confirm-delete-dialog.cdr-summary.title` */
  'confirm-delete-dialog.cdr-summary.document-count_other': '{{count}} documentos',
  /** The text that appears in the subtitle `<summary>` that lists the datasets below the title */
  'confirm-delete-dialog.cdr-summary.subtitle_one': 'Dataset: {{datasets}}',
  /** The text that appears in the subtitle `<summary>` that lists the datasets below the title */
  'confirm-delete-dialog.cdr-summary.subtitle_other': 'Datasets: {{datasets}}',
  /** The text that appears in the subtitle `<summary>` that lists the datasets below the title */
  'confirm-delete-dialog.cdr-summary.subtitle_unavailable_one': 'Dataset indisponível',
  /** The text that appears in the subtitle `<summary>` that lists the datasets below the title */
  'confirm-delete-dialog.cdr-summary.subtitle_unavailable_other': 'Datasets indisponíveis',
  /** The text that appears in the title `<summary>` that includes the list of CDRs (singular) */
  'confirm-delete-dialog.cdr-summary.title_one': '{{documentCount}} em outro dataset',
  /** The text that appears in the title `<summary>` that includes the list of CDRs (plural) */
  'confirm-delete-dialog.cdr-summary.title_other': '{{documentCount}} em {{count}} datasets',
  /** Appears when hovering over the copy button to copy */
  'confirm-delete-dialog.cdr-table.copy-id-button.tooltip':
    'Copiar ID para a área de transferência',
  /** The header for the dataset column in the list of cross-dataset references found */
  'confirm-delete-dialog.cdr-table.dataset.label': 'Dataset',
  /** The header for the document ID column in the list of cross-dataset references found */
  'confirm-delete-dialog.cdr-table.document-id.label': 'ID do Documento',
  /** The toast title when the copy button has been clicked */
  'confirm-delete-dialog.cdr-table.id-copied-toast.title':
    'ID do documento copiado para a área de transferência!',
  /** The header for the project ID column in the list of cross-dataset references found */
  'confirm-delete-dialog.cdr-table.project-id.label': 'ID do Projeto',
  /** The text in the "Delete anyway" button in the confirm delete dialog that confirms the action */
  'confirm-delete-dialog.confirm-anyway-button.text_delete': 'Excluir mesmo assim',
  /** The text in the "Unpublish anyway" button in the confirm delete dialog that confirms the action */
  'confirm-delete-dialog.confirm-anyway-button.text_unpublish': 'Despublicar mesmo assim',
  /** The text in the "Delete now" button in the confirm delete dialog that confirms the action */
  'confirm-delete-dialog.confirm-button.text_delete': 'Excluir agora',
  /** The text in the "Unpublish now" button in the confirm delete dialog that confirms the action */
  'confirm-delete-dialog.confirm-button.text_unpublish': 'Despublicar agora',
  /** If no referring documents are found, this text appears above the cancel and confirmation buttons */
  'confirm-delete-dialog.confirmation.text_delete':
    'Tem certeza de que deseja excluir “<DocumentTitle/>”?',
  /** If no referring documents are found, this text appears above the cancel and confirmation buttons */
  'confirm-delete-dialog.confirmation.text_unpublish':
    'Tem certeza de que deseja despublicar “<DocumentTitle/>”?',
  /** The text body of the error dialog. */
  'confirm-delete-dialog.error.message.text':
    'Ocorreu um erro ao carregar os documentos referenciados.',
  /** The text in the retry button of the confirm delete dialog if an error occurred. */
  'confirm-delete-dialog.error.retry-button.text': 'Tentar novamente',
  /** The header of the confirm delete dialog if an error occurred while the confirm delete dialog was open. */
  'confirm-delete-dialog.error.title.text': 'Erro',
  /** The header of the confirm delete dialog */
  'confirm-delete-dialog.header.text_delete': 'Excluir documento?',
  /** The header of the confirm delete dialog */
  'confirm-delete-dialog.header.text_unpublish': 'Despublicar documento?',
  /** The text that appears while the referring documents are queried */
  'confirm-delete-dialog.loading.text': 'Procurando documentos referenciados…',
  /** Shown if there are references to other documents but the user does not have the permission to see the relevant document IDs */
  'confirm-delete-dialog.other-reference-count.title_one': '1 outra referência não exibida',
  /** Shown if there are references to other documents but the user does not have the permission to see the relevant document IDs */
  'confirm-delete-dialog.other-reference-count.title_other':
    '{{count}} outras referências não exibidas',
  /** Text in the tooltip of this component if hovering over the info icon */
  'confirm-delete-dialog.other-reference-count.tooltip':
    'Não podemos exibir metadados para essas referências devido a um token de acesso ausente para os datasets relacionados.',
  /** Appears when unable to render a document preview in the referring document list */
  'confirm-delete-dialog.preview-item.preview-unavailable.subtitle': 'ID: {{documentId}}',
  /** Appears when unable to render a document preview in the referring document list */
  'confirm-delete-dialog.preview-item.preview-unavailable.title': 'Pré-visualização indisponível',
  /** Warns the user of affects to other documents if the action is confirmed (delete) */
  'confirm-delete-dialog.referential-integrity-disclaimer.text_delete':
    'Se você excluir este documento, os documentos que se referem a ele não poderão mais acessá-lo.',
  /** Warns the user of affects to other documents if the action is confirmed (unpublish) */
  'confirm-delete-dialog.referential-integrity-disclaimer.text_unpublish':
    'Se você despublicar este documento, os documentos que se referem a ele não poderão mais acessá-lo.',
  /** Tells the user the count of how many other referring documents there are before listing them. (singular) */
  'confirm-delete-dialog.referring-document-count.text_one':
    '1 documento refere-se a “<DocumentTitle/>”',
  /** Tells the user the count of how many other referring documents there are before listing them. (plural) */
  'confirm-delete-dialog.referring-document-count.text_other':
    '{{count}} documentos referem-se a “<DocumentTitle/>”',
  /** Describes the list of documents that refer to the one trying to be deleted (delete) */
  'confirm-delete-dialog.referring-documents-descriptor.text_delete':
    'Você pode não conseguir excluir “<DocumentTitle/>” porque os seguintes documentos referem-se a ele:',
  /** Describes the list of documents that refer to the one trying to be deleted (unpublish) */
  'confirm-delete-dialog.referring-documents-descriptor.text_unpublish':
    'Você pode não conseguir despublicar “<DocumentTitle/>” porque os seguintes documentos referem-se a ele:',

  /** The text for the cancel button in the confirm dialog used in document action shortcuts if none is provided */
  'confirm-dialog.cancel-button.fallback-text': 'Cancelar',
  /** The text for the confirm button in the confirm dialog used in document action shortcuts if none is provided */
  'confirm-dialog.confirm-button.fallback-text': 'Confirmar',

  /** For the default structure definition, the title for the "Content" pane */
  'default-definition.content-title': 'Conteúdo',

  /** The text shown if there was an error while getting the document's title via a preview value */
  'doc-title.error.text': 'Erro: {{errorMessage}}',
  /** The text shown if the preview value for a document is non-existent or empty */
  'doc-title.fallback.text': 'Sem título',
  /** The text shown if a document's title via a preview value cannot be determined due to an unknown schema type */
  'doc-title.unknown-schema-type.text': 'Tipo de esquema desconhecido: {{schemaType}}',

  /** Tooltip text shown for the close button of the document inspector */
  'document-inspector.close-button.tooltip': undefined, // 'Close'
  /** The title shown in the dialog header, when inspecting a valid document */
  'document-inspector.dialog.title': 'Inspecionando <DocumentTitle/>',
  /** The title shown in the dialog header, when the document being inspected is not created yet/has no value */
  'document-inspector.dialog.title-no-value': 'Sem valor',
  /** Title shown for menu item that opens the "Inspect" dialog */
  'document-inspector.menu-item.title': 'Inspecionar',
  /** the placeholder text for the search input on the inspect dialog */
  'document-inspector.search.placeholder': 'Pesquisar',
  /** The "parsed" view mode, meaning the JSON is searchable, collapsible etc */
  'document-inspector.view-mode.parsed': 'Analisado',
  /** The "raw" view mode, meaning the JSON is presented syntax-highlighted, but with no other features - optimal for copying */
  'document-inspector.view-mode.raw-json': 'JSON Bruto',

  /** The text for when a form is hidden */
  'document-view.form-view.form-hidden': 'Este formulário está oculto',
  /** Fallback title shown when a form title is not provided */
  'document-view.form-view.form-title-fallback': 'Sem título',
  /** The text for when the form view is loading a document */
  'document-view.form-view.loading': 'Carregando documento…',
  /** The description of the sync lock toast on the form view */
  'document-view.form-view.sync-lock-toast.description':
    'Aguarde enquanto o documento está sendo sincronizado. Isso geralmente acontece logo após o documento ter sido publicado, e não deve levar mais do que alguns segundos',
  /** The title of the sync lock toast on the form view */
  'document-view.form-view.sync-lock-toast.title': 'Sincronizando documento…',

  /** The loading messaging for when the tooltip is still loading permission info */
  'insufficient-permissions-message-tooltip.loading-text': 'Carregando…',

  /** --- Menu items --- */
  /** The menu item group title to use for the Action menu items */
  'menu-item-groups.actions-group': 'Ações',
  /** The menu item group title to use for the Layout menu items */
  'menu-item-groups.layout-group': 'Layout',
  /** The menu item group title to use for the Sort menu items */
  'menu-item-groups.sorting-group': 'Ordenar',

  /** The menu item title to use the compact view */
  'menu-items.layout.compact-view': 'Visualização compacta',
  /** The menu item title to use the detailed view */
  'menu-items.layout.detailed-view': 'Visualização detalhada',
  /** The menu item title to Sort by Created */
  'menu-items.sort-by.created': 'Ordenar por Data de Criação',
  /** The menu item title to Sort by Last Edited */
  'menu-items.sort-by.last-edited': 'Ordenar por Última Edição',

  /** The link text of the no document type screen that appears directly below the subtitle */
  'no-document-types-screen.link-text': 'Aprenda como adicionar um tipo de documento →',
  /** The subtitle of the no document type screen that appears directly below the title */
  'no-document-types-screen.subtitle':
    'Por favor, defina pelo menos um tipo de documento em seu esquema.',
  /** The title of the no document type screen */
  'no-document-types-screen.title': 'Nenhum tipo de documento',

  /** Text shown on back button visible on smaller breakpoints */
  'pane-header.back-button.text': 'Voltar',
  /** tooltip text (via `title` attribute) for the menu button */
  'pane-header.context-menu-button.tooltip': 'Mostrar menu',
  /** Appears in a document list pane header if there are more than one option for create. This is the label for that menu */
  'pane-header.create-menu.label': 'Criar',
  /** Tooltip displayed on the create new button in document lists */
  'pane-header.create-new-button.tooltip': 'Criar novo documento',
  /** The `aria-label` for the disabled button in the pane header if create permissions are granted */
  'pane-header.disabled-created-button.aria-label': 'Permissões insuficientes',

  /** The text shown in the tooltip of pane item previews of documents if there are unpublished edits */
  'pane-item.draft-status.has-draft.tooltip': 'Editado <RelativeTime/>',
  /** The text shown in the tooltip of pane item previews of documents if there are no unpublished edits */
  'pane-item.draft-status.no-draft.tooltip': 'Sem edições não publicadas',
  /** The subtitle tor pane item previews if there isn't a matching schema type found */
  'pane-item.missing-schema-type.subtitle': 'Documento: <Code>{{documentId}}</Code>',
  /** The title tor pane item previews if there isn't a matching schema type found */
  'pane-item.missing-schema-type.title':
    'Nenhum esquema encontrado para o tipo <Code>{{documentType}}</Code>',
  /** The text shown in the tooltip of pane item previews of documents if there are unpublished edits */
  'pane-item.published-status.has-published.tooltip': 'Publicado <RelativeTime/>',
  /** The text shown in the tooltip of pane item previews of documents if there are no unpublished edits */
  'pane-item.published-status.no-published.tooltip': 'Sem publicações',

  /** The text used in the document header title if there is an error */
  'panes.document-header-title.error.text': 'Erro: {{error}}',
  /** The text used in the document header title if creating a new item */
  'panes.document-header-title.new.text': 'Novo {{schemaType}}',
  /** The text used in the document header title if no other title can be determined */
  'panes.document-header-title.untitled.text': 'Sem título',
  /** The text for the retry button on the document list pane */
  'panes.document-list-pane.error.retry-button.text': 'Tentar novamente',
  /** The error text on the document list pane */
  'panes.document-list-pane.error.text': 'Erro: <Code>{{error}}</Code>',
  /** The error title on the document list pane */
  'panes.document-list-pane.error.title': 'Não foi possível buscar os itens da lista',
  /** The text of the document list pane if more than a maximum number of documents are returned */
  'panes.document-list-pane.max-items.text': 'Exibindo no máximo {{limit}} documentos',
  /** The text of the document list pane if no documents are found for a specified type */
  'panes.document-list-pane.no-documents-of-type.text': 'Nenhum documento deste tipo',
  /** The text of the document list pane if no documents are found */
  'panes.document-list-pane.no-documents.text': 'Nenhum resultado encontrado',
  /** The text of the document list pane if no documents are found matching specified criteria */
  'panes.document-list-pane.no-matching-documents.text': 'Nenhum documento correspondente',
  /** The aria-label for the search input on the document list pane */
  'panes.document-list-pane.search-input.aria-label': 'Pesquisar lista',
  /** The search input for the search input on the document list pane */
  'panes.document-list-pane.search-input.placeholder': 'Pesquisar lista',
  /** The summary title when displaying an error for a document operation result */
  'panes.document-operation-results.error.summary.title': 'Detalhes',
  /** The text when a generic operation failed (fallback, generally not shown)  */
  'panes.document-operation-results.operation-error': 'Ocorreu um erro durante {{context}}',
  /** The text when a delete operation failed  */
  'panes.document-operation-results.operation-error_delete':
    'Ocorreu um erro ao tentar excluir este documento. Isso geralmente significa que há outros documentos que se referem a ele.',
  /** The text when an unpublish operation failed  */
  'panes.document-operation-results.operation-error_unpublish':
    'Ocorreu um erro ao tentar retirar a publicação deste documento. Isso geralmente significa que há outros documentos que se referem a ele.',
  /** The text when a generic operation succeeded (fallback, generally not shown)  */
  'panes.document-operation-results.operation-success':
    'Realizado com sucesso {{context}} no documento',
  /** The text when a delete operation succeeded  */
  'panes.document-operation-results.operation-success_delete':
    'O documento foi excluído com sucesso',
  /** The text when a discard changes operation succeeded  */
  'panes.document-operation-results.operation-success_discardChanges':
    'Todas as alterações desde a última publicação foram descartadas. O rascunho descartado ainda pode ser recuperado do histórico',
  /** The text when a publish operation succeeded  */
  'panes.document-operation-results.operation-success_publish': 'O documento foi publicado',
  /** The text when a restore operation succeeded  */
  'panes.document-operation-results.operation-success_restore': undefined, // '<Strong>{{title}}</Strong> was restored'
  /** The text when an unpublish operation succeeded  */
  'panes.document-operation-results.operation-success_unpublish':
    'A publicação do documento foi retirada. Um rascunho foi criado a partir da última versão publicada.',
  /** The document title shown when document title is "undefined" in operation message */
  'panes.document-operation-results.operation-undefined-title': undefined, // 'Untitled'
  /** The title of the reconnecting toast */
  'panes.document-pane-provider.reconnecting.title': 'Conexão perdida. Reconectando…',
  /** The loading message for the document not found pane */
  'panes.document-pane.document-not-found.loading': 'Carregando documento…',
  /** The text of the document not found pane if the schema is known */
  'panes.document-pane.document-not-found.text':
    'O tipo de documento não está definido, e um documento com o identificador <Code>{{id}}</Code> não pôde ser encontrado.',
  /** The title of the document not found pane if the schema is known */
  'panes.document-pane.document-not-found.title': 'O documento não foi encontrado',
  /** The text of the document not found pane if the schema is not found */
  'panes.document-pane.document-unknown-type.text':
    'Este documento tem o tipo de esquema <Code>{{documentType}}</Code>, que não está definido como um tipo no esquema do estúdio de conteúdo local.',
  /** The title of the document not found pane if the schema is not found or unknown */
  'panes.document-pane.document-unknown-type.title':
    'Tipo de documento desconhecido: <Code>{{documentType}}</Code>',
  /** The title of the document not found pane if the schema is unknown */
  'panes.document-pane.document-unknown-type.without-schema.text':
    'Este documento não existe, e nenhum tipo de esquema foi especificado para ele.',
  /** Default message shown while resolving the structure definition for an asynchronous node */
  'panes.resolving.default-message': 'Carregando…',
  /** Message shown while resolving the structure definition for an asynchronous node and it is taking a while (more than 5s) */
  'panes.resolving.slow-resolve-message': 'Ainda carregando…',
  /** The text to display when type is missing */
  'panes.unknown-pane-type.missing-type.text':
    'O item de estrutura está faltando a propriedade <Code>type</Code> necessária.',
  /** The title of the unknown pane */
  'panes.unknown-pane-type.title': 'Tipo de painel desconhecido',
  /** The text to display when type is unknown */
  'panes.unknown-pane-type.unknown-type.text':
    'Item de estrutura do tipo <Code>{{type}}</Code> não é uma entidade conhecida.',

  /** The text for the "Open preview" action for a document */
  'production-preview.menu-item.title': 'Abrir pré-visualização',

  /** Label for button when status is saved */
  'status-bar.document-status-pulse.status.saved.text': 'Salvo',
  /** Label for button when status is syncing */
  'status-bar.document-status-pulse.status.syncing.text': 'Salvando...',
  /** Accessibility label indicating when the document was last published, in relative time, eg "3 weeks ago" */
  'status-bar.publish-status-button.last-published-time.aria-label':
    'Última publicação {{relativeTime}}',
  /** Text for tooltip showing explanation of timestamp/relative time, eg "Last published <RelativeTime/>" */
  'status-bar.publish-status-button.last-published-time.tooltip':
    'Última publicação <RelativeTime/>',
  /** Accessibility label indicating when the document was last updated, in relative time, eg "2 hours ago" */
  'status-bar.publish-status-button.last-updated-time.aria-label':
    'Última atualização {{relativeTime}}',
  /** Text for tooltip showing explanation of timestamp/relative time, eg "Last updated <RelativeTime/>" */
  'status-bar.publish-status-button.last-updated-time.tooltip':
    'Última atualização <RelativeTime/>',
  /** Aria label for the button */
  'status-bar.review-changes-button.aria-label': 'Revisar alterações',
  /** Label for button when status is saved */
  'status-bar.review-changes-button.status.saved.text': 'Salvo!',
  /** Label for button when status is syncing */
  'status-bar.review-changes-button.status.syncing.text': 'Salvando...',
  /** Text for the secondary text for tooltip for the button */
  'status-bar.review-changes-button.tooltip.changes-saved': 'Alterações salvas',
  /** Primary text for tooltip for the button */
  'status-bar.review-changes-button.tooltip.text': 'Revisar alterações',

  /** The text that appears in side the documentation link */
  'structure-error.docs-link.text': 'Ver documentação',
  /** Labels the error message or error stack of the structure error screen */
  'structure-error.error.label': 'Erro',
  /** The header that appears at the top of the error screen */
  'structure-error.header.text': 'Encontrado um erro ao ler a estrutura',
  /** The text in the reload button to retry rendering the structure */
  'structure-error.reload-button.text': 'Recarregar',
  /** Labels the structure path of the structure error screen */
  'structure-error.structure-path.label': 'Caminho da estrutura',
})
