import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Label for the "Copy Document URL" document action */
  'action.copy-document-url.label': 'Copiar URL do Documento',
  /** Tooltip when action button is disabled because the operation is not ready   */
  'action.delete.disabled.not-ready': 'Operação não pronta',
  /** Tooltip when action button is disabled because the document does not exist */
  'action.delete.disabled.nothing-to-delete': 'Este documento ainda não existe ou já foi excluído',
  /** Label for the "Delete" document action button */
  'action.delete.label': 'Excluir',
  /** Label for the "Delete" document action while the document is being deleted */
  'action.delete.running.label': 'Excluindo…',
  /** Tooltip when action is disabled because the document is linked to Canvas */
  'action.disabled-by-canvas.tooltip':
    'Algumas ações de documento estão desativadas para documentos vinculados ao Canvas',
  /** Message prompting the user to confirm discarding changes */
  'action.discard-changes.confirm-dialog.confirm-discard-changes':
    'Tem certeza de que deseja descartar todas as alterações desde a última publicação?',
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
    'Este documento ainda não existe, portanto, não há nada para duplicar',
  /** Label for the "Duplicate" document action */
  'action.duplicate.label': 'Duplicar',
  /** Label for the "Duplicate" document action while the document is being duplicated */
  'action.duplicate.running.label': 'Duplicando…',
  /** Tooltip when publish button is disabled because the document is already published, and published time is unavailable.*/
  'action.publish.already-published.no-time-ago.tooltip': 'Já publicado',
  /** Tooltip when publish button is disabled because the document is already published.*/
  'action.publish.already-published.tooltip': 'Publicado há {{timeSincePublished}}',
  /** Tooltip when action is disabled because the studio is not ready.*/
  'action.publish.disabled.not-ready': 'Operação não pronta',
  /** Label for action when there are pending changes.*/
  'action.publish.draft.label': 'Publicar',
  /** Label for the "Publish" document action */
  'action.publish.label': 'Publicar',
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
  /** Message prompting the user to confirm that they want to restore to an earlier revision*/
  'action.restore.confirm.message': 'Tem certeza de que deseja restaurar este documento?',
  /** Fallback tooltip for when user is looking at the initial revision */
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
    'Este documento tem edição ao vivo ativada e não pode ser despublicado',

  /** Description for the archived release banner, rendered when viewing the history of a version document from the publihed view */
  'banners.archived-release.description':
    'Você está visualizando um documento somente leitura que foi arquivado como parte de <VersionBadge>{{title}}</VersionBadge>. Ele não pode ser editado',
  /** Description for the archived scheduled draft banner, rendered when viewing the history of a cardinality one release document */
  'banners.archived-scheduled-draft.description': 'Este rascunho agendado está arquivado',
  /** The explanation displayed when a user attempts to create a new draft document, but the draft model is not switched on */
  'banners.choose-new-document-destination.cannot-create-draft-document':
    'Não é possível criar um documento rascunho.',
  /** The explanation displayed when a user attempts to create a new published document, but the schema type doesn't support live-editing */
  'banners.choose-new-document-destination.cannot-create-published-document':
    'Não é possível criar um documento publicado.',
  /** The prompt displayed when a user must select a different perspective in order to create a document */
  'banners.choose-new-document-destination.choose-destination':
    'Escolha um destino para este documento:',
  /** The explanation displayed when a user attempts to create a new document in a release, but the selected release is inactive */
  'banners.choose-new-document-destination.release-inactive':
    'A versão <VersionBadge>{{title}}</VersionBadge> não está ativa.',
  /** The text for the restore button on the deleted document banner */
  'banners.deleted-document-banner.restore-button.text': 'Restaurar versão mais recente',
  /** The text content for the deleted document banner */
  'banners.deleted-document-banner.text': 'Este documento foi excluído.',
  /** The text content for the deprecated document type banner */
  'banners.deprecated-document-type-banner.text': 'Este tipo de documento foi descontinuado.',
  /** The text for publish action for discarding the version */
  'banners.live-edit-draft-banner.discard.tooltip': 'Descartar rascunho',
  /** The text for publish action for the draft banner */
  'banners.live-edit-draft-banner.publish.tooltip': 'Publicar para continuar editando',
  /** The text content for the live edit document when it's a draft */
  'banners.live-edit-draft-banner.text':
    'O tipo <strong>{{schemaType}}</strong> tem <code>liveEdit</code> ativado, mas uma versão de rascunho deste documento existe. Publique ou descarte o rascunho para continuar editando ao vivo.',
  /** The label for the "compare draft" action */
  'banners.obsolete-draft.actions.compare-draft.text': 'Comparar rascunho',
  /** The label for the "discard draft" action */
  'banners.obsolete-draft.actions.discard-draft.text': 'Descartar rascunho',
  /** The label for the "publish draft" action */
  'banners.obsolete-draft.actions.publish-draft.text': 'Publicar rascunho',
  /** The warning displayed when editing a document that has an obsolete draft because the draft model is not switched on */
  'banners.obsolete-draft.draft-model-inactive.text':
    'O espaço de trabalho não tem rascunhos ativados, mas existe uma versão rascunho deste documento.',
  /** The text for the permission check banner if the user only has one role, and it does not allow publishing this document */
  'banners.permission-check-banner.missing-permission_create_one':
    'O seu papel <Roles/> não tem permissões para criar este documento.',
  /** The text for the permission check banner if the user only has multiple roles, but they do not allow publishing this document */
  'banners.permission-check-banner.missing-permission_create_other':
    'Os seus papéis <Roles/> não têm permissões para criar este documento.',
  /** The text for the permission check banner if the user only has one role, and it does not allow editing this document */
  'banners.permission-check-banner.missing-permission_update_one':
    'O seu papel <Roles/> não tem permissões para atualizar este documento.',
  /** The text for the permission check banner if the user only has multiple roles, but they do not allow editing this document */
  'banners.permission-check-banner.missing-permission_update_other':
    'Os seus papéis <Roles/> não têm permissões para atualizar este documento.',
  /** The pending text for the request permission button that appears for viewer roles */
  'banners.permission-check-banner.request-permission-button.sent': 'Pedido de editor enviado',
  /** The text for the request permission button that appears for viewer roles */
  'banners.permission-check-banner.request-permission-button.text': 'Pedir para editar',
  /** Description for the archived release banner, rendered when viewing the history of a version document from the published view */
  'banners.published-release.description':
    'Você está visualizando um documento somente leitura que foi publicado como parte de <VersionBadge>{{title}}</VersionBadge>. Ele não pode ser editado',
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
  /** The text that appears for the action button to add the current document to the global release */
  'banners.release.action.add-to-release': 'Adicionar ao lançamento',
  /** The text that appears for the action button to add the current document to the global release */
  'banners.release.action.open-to-edit': 'Abrir release para editar',
  /** Toast description in case an error occurs when adding a document to a release  */
  'banners.release.error.description':
    'Ocorreu um erro ao adicionar o documento à release: {{message}}',
  /** Toast title in case an error occurs when adding a document to a release  */
  'banners.release.error.title': 'Erro ao adicionar documento à release',
  /** The text for the banner that appears when a document only has versions but is in a draft or published pinned release */
  'banners.release.navigate-to-edit-description': 'O documento só existe na',
  /** The text for the banner that appears when a document only has versions but is in a draft or published pinned release */
  'banners.release.navigate-to-edit-description-end_one': 'release',
  /** The text for the banner that appears when a document only has versions but is in a draft or published pinned release */
  'banners.release.navigate-to-edit-description-end_other': 'releases',
  /** The text for the banner that appears when there are multiple versions but no drafts or published, only one extra releases */
  'banners.release.navigate-to-edit-description-multiple_one':
    'Este documento faz parte da <VersionBadge/> release e mais {{count}} release.',
  /** The text for the banner that appears when there are multiple versions but no drafts or published, more than one extra releases */
  'banners.release.navigate-to-edit-description-multiple_other':
    'Este documento faz parte da <VersionBadge/> release e mais {{count}} releases',
  /** The text for the banner that appears when a document only has one version but is in a draft or published pinned release */
  'banners.release.navigate-to-edit-description-single':
    'Este documento faz parte da <VersionBadge/> release',
  /** The text for the banner that appears when a document is not in the current global release */
  'banners.release.not-in-release':
    'Não está no lançamento <VersionBadge>{{title}}</VersionBadge>.',
  /** Description of toast that will appear in case of latency between the user adding a document to a release and the UI reflecting it */
  'banners.release.waiting.description':
    'Por favor, aguarde enquanto o documento é adicionado à release. Não deve demorar mais do que alguns segundos.',
  /** Title of toast that will appear in case of latency between the user adding a document to a release and the UI reflecting it */
  'banners.release.waiting.title': 'Adicionando documento à release…',
  /** The text for the revision not found banner */
  'banners.revision-not-found.description':
    'Não conseguimos encontrar a revisão do documento selecionada, por favor selecione outra entrada da lista de histórico.',
  /** The text content for the scheduled draft override banner */
  'banners.scheduled-draft-override-banner.text':
    'O rascunho deste documento já está agendado para publicação. As alterações que você fizer aqui podem ser substituídas por essa versão.',
  /** The text content for the unpublished document banner when is part of a release */
  'banners.unpublished-release-banner.text':
    'Este documento será despublicado como parte do lançamento <VersionBadge>{{title}}</VersionBadge>',
  /** The text content for the unpublished document banner letting the user know that the current published version is being shown */
  'banners.unpublished-release-banner.text-with-published':
    'Mostrando a versão <strong>publicada</strong> atual:',

  /** Browser/tab title when creating a new document of a given type */
  'browser-document-title.new-document': 'Novo {{schemaType}}',
  /** Browser/tab title when editing a document where the title cannot be resolved from preview configuration */
  'browser-document-title.untitled-document': 'Sem título',

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

  /** The text for the canvas linked banner action button */
  'canvas.banner.edit-in-canvas-action': 'Editar no Canvas',
  /** The text for the canvas linked banner when the document is a draft */
  'canvas.banner.linked-text.draft': 'Este rascunho de documento está vinculado ao Canvas',
  /** The text for the canvas linked banner when the document is a live document */
  'canvas.banner.linked-text.published': 'Este documento ao vivo está vinculado ao Canvas',
  /** The text for the canvas linked banner when the document is a version document */
  'canvas.banner.linked-text.version': 'Este documento de versão está vinculado ao Canvas',
  /** The text for the canvas linked banner popover button */
  'canvas.banner.popover-button-text': 'Saiba mais',
  /** The description for the canvas linked banner popover */
  'canvas.banner.popover-description':
    'O Canvas permite que você crie em um editor de forma livre que mapeia automaticamente de volta para o Studio como conteúdo estruturado - enquanto você digita.',
  /** The heading for the canvas linked banner popover */
  'canvas.banner.popover-heading': 'Autoria com foco na ideia',

  /** The description for the changes banner */
  'changes.banner.description':
    'Mostrando o histórico para a versão <strong>{{perspective}}</strong> deste documento.',
  /** The tooltip for the changes banner */
  'changes.banner.tooltip':
    'Esta visualização mostra as alterações que ocorreram em uma versão específica deste documento. Selecione uma versão diferente para ver suas alterações',
  /** The label used in the changes inspector for the from selector */
  'changes.from.label': 'De',
  /* The label for the history tab in the changes inspector*/
  'changes.tab.history': 'Histórico',
  /* The label for the review tab in the changes inspector*/
  'changes.tab.review-changes': 'Revisar alterações',
  /** The label used in the changes inspector for the to selector */
  'changes.to.label': 'Para',

  /** The error message shown when the specified document comparison mode is not supported */
  'compare-version.error.invalidModeParam':
    '"{{input}}" não é um modo de comparação de documentos suportado.',
  /** The error message shown when the next document for comparison could not be extracted from the URL */
  'compare-version.error.invalidNextDocumentParam': 'O parâmetro do próximo documento é inválido.',
  /** The error message shown when the document comparison URL could not be parsed */
  'compare-version.error.invalidParams.title': 'Incapaz de comparar documentos',
  /** The error message shown when the previous document for comparison could not be extracted from the URL */
  'compare-version.error.invalidPreviousDocumentParam':
    'O parâmetro do documento anterior é inválido.',

  /** The text for the tooltip when the "Compare versions" action for a document is disabled */
  'compare-versions.menu-item.disabled-reason':
    'Não há outras versões deste documento para comparar.',
  /** The text for the "Compare versions" action for a document */
  'compare-versions.menu-item.title': 'Comparar versões',
  /** The string used to label draft documents */
  'compare-versions.status.draft': 'Rascunho',
  /** The string used to label published documents */
  'compare-versions.status.published': 'Publicado',
  /** The title used when comparing versions of a document */
  'compare-versions.title': 'Comparar versões',

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
  /** The toast title when the copy button has been clicked but copying failed */
  'confirm-delete-dialog.cdr-table.id-copied-toast.title-failed':
    'Falha ao copiar o ID do documento',
  /** The header for the project ID column in the list of cross-dataset references found */
  'confirm-delete-dialog.cdr-table.project-id.label': 'ID do Projeto',
  /** The text in the "Delete anyway" button in the confirm delete dialog that confirms the action */
  'confirm-delete-dialog.confirm-anyway-button.text_delete': 'Excluir mesmo assim',
  /** The text in the "Unpublish anyway" button in the confirm delete dialog that confirms the action */
  'confirm-delete-dialog.confirm-anyway-button.text_unpublish': 'Retirar publicação mesmo assim',
  /** The text in the "Delete now" button in the confirm delete dialog that confirms the action */
  'confirm-delete-dialog.confirm-button.text_delete': 'Excluir agora',
  /** The text in the "Unpublish now" button in the confirm delete dialog that confirms the action */
  'confirm-delete-dialog.confirm-button.text_unpublish': 'Retirar publicação agora',
  /** If no referring documents are found, this text appears above the cancel and confirmation buttons */
  'confirm-delete-dialog.confirmation.text_delete':
    'Tem certeza de que deseja excluir “<DocumentTitle/>”?',
  /** If no referring documents are found, this text appears above the cancel and confirmation buttons */
  'confirm-delete-dialog.confirmation.text_unpublish':
    'Tem certeza de que deseja retirar a publicação de “<DocumentTitle/>”?',
  /** The text body of the error dialog. */
  'confirm-delete-dialog.error.message.text':
    'Ocorreu um erro ao carregar documentos referenciados.',
  /** The text in the retry button of the confirm delete dialog if an error occurred. */
  'confirm-delete-dialog.error.retry-button.text': 'Tentar novamente',
  /** The header of the confirm delete dialog if an error occurred while the confirm delete dialog was open. */
  'confirm-delete-dialog.error.title.text': 'Erro',
  /** The header of the confirm delete dialog */
  'confirm-delete-dialog.header.text_delete': 'Excluir documento?',
  /** The header of the confirm delete dialog */
  'confirm-delete-dialog.header.text_unpublish': 'Retirar publicação do documento?',
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
    'Se você retirar a publicação deste documento, os documentos que se referem a ele não poderão mais acessá-lo.',
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
    'Você pode não conseguir retirar a publicação de “<DocumentTitle/>” porque os seguintes documentos referem-se a ele:',

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
  'document-inspector.close-button.tooltip': 'Fechar',
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
    'Por favor, aguarde enquanto o documento está sendo sincronizado. Isso geralmente acontece logo após o documento ser publicado, e não deve levar mais do que alguns segundos',
  /** The title of the sync lock toast on the form view */
  'document-view.form-view.sync-lock-toast.title': 'Sincronizando documento…',

  /** The description for the document favorite action */
  'document.favorites.add-to-favorites': 'Adicionar aos favoritos',
  /** The description for the document unfavorite action */
  'document.favorites.remove-from-favorites': 'Remover dos favoritos',

  /** The description for the events inspector when we can't load the document so we default to compare with published */
  'events.compare-with-published.description':
    'Não conseguimos carregar as alterações para este documento, provavelmente devido à política de retenção de histórico do seu plano, isso mostra como a versão <strong>{{version}}</strong> se compara à versão <strong>publicada</strong>.',
  /** The title for the events inspector when we can't load the document so we default to compare with published */
  'events.compare-with-published.title': 'Comparando com a publicada',
  /**The title for the menu items that will be shown when expanding a publish release event to inspect the document */
  'events.inspect.release': 'Inspecionar documento <VersionBadge>{{releaseTitle}}</VersionBadge>',
  /**The title for the menu items that will be shown when expanding a publish draft event to inspect the draft document*/
  'events.open.draft': 'Abrir documento <VersionBadge>rascunho</VersionBadge>',
  /**The title for the menu items that will be shown when expanding a publish release event to inspect the release*/
  'events.open.release': 'Abrir lançamento <VersionBadge>{{releaseTitle}}</VersionBadge>',

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
  'menu-items.layout.compact-view': 'Vista compacta',
  /** The menu item title to use the detailed view */
  'menu-items.layout.detailed-view': 'Vista detalhada',
  /** The menu item title to Sort by Created */
  'menu-items.sort-by.created': 'Ordenar por Data de Criação',
  /** The menu item title to Sort by Last Edited */
  'menu-items.sort-by.last-edited': 'Ordenar por Última Edição',

  /** The link text of the no document type screen that appears directly below the subtitle */
  'no-document-types-screen.link-text': 'Saiba como adicionar um tipo de documento →',
  /** The subtitle of the no document type screen that appears directly below the title */
  'no-document-types-screen.subtitle':
    'Por favor, defina pelo menos um tipo de documento no seu esquema.',
  /** The title of the no document type screen */
  'no-document-types-screen.title': 'Sem tipos de documento',

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
  /** The help text saying that we'll retry fetching the document list */
  'panes.document-list-pane.error.retrying': 'Tentando novamente…',
  /** The error text on the document list pane */
  'panes.document-list-pane.error.text': 'Erro: <Code>{{error}}</Code>',
  /** The error text on the document list pane */
  'panes.document-list-pane.error.text.dev': 'Erro: <Code>{{error}}</Code>',
  /** The error text on the document list pane if the browser appears to be offlline */
  'panes.document-list-pane.error.text.offline': 'A conexão com a Internet parece estar offline.',
  /** The error title on the document list pane */
  'panes.document-list-pane.error.title': 'Não foi possível buscar os itens da lista',
  /** The help text saying that we'll retry fetching the document list */
  'panes.document-list-pane.error.will-retry-automatically_one': 'Tentando novamente…',
  'panes.document-list-pane.error.will-retry-automatically_other':
    'Tentando novamente… (#{{count}}).',
  /** The text of the document list pane if more than a maximum number of documents are returned */
  'panes.document-list-pane.max-items.text': 'Exibindo no máximo {{limit}} documentos',
  /** The text of the document list pane if no documents are found for a specified type */
  'panes.document-list-pane.no-documents-of-type.text': 'Nenhum documento deste tipo',
  /** The text of the document list pane if no documents are found */
  'panes.document-list-pane.no-documents.text': 'Nenhum resultado encontrado',
  /** The text of the document list pane if no documents are found matching specified criteria */
  'panes.document-list-pane.no-matching-documents.text': 'Nenhum documento correspondente',
  /** The search input for the search input on the document list pane */
  'panes.document-list-pane.reconnecting': 'Tentando conectar…',
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
    'A operação {{context}} no documento foi realizada com sucesso',
  /** The text when copy URL operation succeeded  */
  'panes.document-operation-results.operation-success_copy-url':
    'URL do Documento copiada para a área de transferência',
  /**  */
  'panes.document-operation-results.operation-success_createVersion':
    '<Strong>{{title}}</Strong> foi adicionado ao lançamento',
  /** The text when a delete operation succeeded  */
  'panes.document-operation-results.operation-success_delete':
    'O documento foi excluído com sucesso',
  /** The text when a discard changes operation succeeded  */
  'panes.document-operation-results.operation-success_discardChanges':
    'Todas as alterações desde a última publicação foram descartadas. O rascunho descartado ainda pode ser recuperado do histórico',
  /** The text when a duplicate operation succeeded  */
  'panes.document-operation-results.operation-success_duplicate':
    'O documento foi duplicado com sucesso',
  /** The text when a publish operation succeeded  */
  'panes.document-operation-results.operation-success_publish': 'O documento foi publicado',
  /** The text when a restore operation succeeded  */
  'panes.document-operation-results.operation-success_restore':
    '<Strong>{{title}}</Strong> foi restaurado',
  /** The text when an unpublish operation succeeded  */
  'panes.document-operation-results.operation-success_unpublish':
    'A publicação do documento foi retirada. Um rascunho foi criado a partir da última versão publicada.',
  /** The document title shown when document title is "undefined" in operation message */
  'panes.document-operation-results.operation-undefined-title': 'Sem título',
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
    'O item de estrutura do tipo <Code>{{type}}</Code> não é uma entidade conhecida.',

  /** The text for the "Open preview" action for a document */
  'production-preview.menu-item.title': 'Abrir pré-visualização',

  /** The text for the confirm button in the request permission dialog used in the permissions banner */
  'request-permission-dialog.confirm-button.text': 'Enviar pedido',
  /** The description text for the request permission dialog used in the permissions banner */
  'request-permission-dialog.description.text':
    'Seu pedido será enviado para o(s) administrador(es) do projeto. Se desejar, você também pode incluir uma nota',
  /** The header/title for the request permission dialog used in the permissions banner */
  'request-permission-dialog.header.text': 'Pedir acesso para edição',
  /** The text describing the note input for the request permission dialog used in the permissions banner */
  'request-permission-dialog.note-input.description.text':
    'Se desejar, você pode adicionar uma nota',
  /** The placeholder for the note input in the request permission dialog used in the permissions banner */
  'request-permission-dialog.note-input.placeholder.text': 'Adicionar nota...',
  /** The error/warning text in the request permission dialog when the user's request has been declined */
  'request-permission-dialog.warning.denied.text':
    'Seu pedido de acesso a este projeto foi recusado.',
  /** The error/warning text in the request permission dialog when the user's request has been denied due to too many outstanding requests */
  'request-permission-dialog.warning.limit-reached.text':
    'Você atingiu o limite de pedidos de função em todos os projetos. Por favor, aguarde antes de enviar mais pedidos ou contate um administrador para assistência.',

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
  'structure-error.header.text': 'Erro encontrado ao ler a estrutura',
  /** The text in the reload button to retry rendering the structure */
  'structure-error.reload-button.text': 'Recarregar',
  /** Labels the structure path of the structure error screen */
  'structure-error.structure-path.label': 'Caminho da estrutura',

  /** The aria label for the menu button in the timeline item */
  'timeline-item.menu-button.aria-label': 'Abrir menu de ação',
  /** The text for the tooltip in menu button the timeline item */
  'timeline-item.menu-button.tooltip': 'Ações',
  /** The text for the collapse action in the timeline item menu */
  'timeline-item.menu.action-collapse': 'Colapsar',
  /** The text for the expand action in the timeline item menu */
  'timeline-item.menu.action-expand': 'Expandir',
  /** The text for the published event menu tooltip when the release is not found */
  'timeline-item.not-found-release.tooltip': 'Lançamento com id "{{releaseId}}" não encontrado',

  /** The text for the "Inline changes" action, which is used to toggle the visibility of content diffs inside inputs */
  'toggle-inline-changes.menu-item.title': 'Alterações em linha',
})
