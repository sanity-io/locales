import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Label for the "Copy Document URL" document action */
  'action.copy-document-url.label': 'Copiar URL del documento',
  /** Tooltip when action button is disabled because the operation is not ready   */
  'action.delete.disabled.not-ready': 'Operación no disponible',
  /** Tooltip when action button is disabled because the document does not exist */
  'action.delete.disabled.nothing-to-delete': 'Este documento aún no existe o ya se ha eliminado',
  /** Label for the "Delete" document action button */
  'action.delete.label': 'Eliminar',
  /** Label for the "Delete" document action while the document is being deleted */
  'action.delete.running.label': 'Eliminando…',
  /** Tooltip when action is disabled because the document is linked to Canvas */
  'action.disabled-by-canvas.tooltip':
    'Algunas acciones del documento están deshabilitadas para documentos vinculados a Canvas',
  /** Message prompting the user to confirm discarding changes */
  'action.discard-changes.confirm-dialog.confirm-discard-changes':
    '¿Estás seguro de que quieres descartar todos los cambios desde la última publicación?',
  /** Tooltip when action is disabled because the document has no unpublished changes */
  'action.discard-changes.disabled.no-change': 'Este documento no tiene cambios sin publicar',
  /** Tooltip when action is disabled because the document is not published */
  'action.discard-changes.disabled.not-published': 'Este documento no está publicado',
  /** Tooltip when action button is disabled because the operation is not ready   */
  'action.discard-changes.disabled.not-ready': 'Operación no disponible',
  /** Label for the "Discard changes" document action */
  'action.discard-changes.label': 'Descartar cambios',
  /** Tooltip when action is disabled because the operation is not ready   */
  'action.duplicate.disabled.not-ready': 'Operación no disponible',
  /** Tooltip when action is disabled because the document doesn't exist */
  'action.duplicate.disabled.nothing-to-duplicate':
    'Este documento aún no existe, por lo que no hay nada que duplicar',
  /** Label for the "Duplicate" document action */
  'action.duplicate.label': 'Duplicar',
  /** Label for the "Duplicate" document action while the document is being duplicated */
  'action.duplicate.running.label': 'Duplicando…',
  /** Tooltip when publish button is disabled because the document is already published, and published time is unavailable.*/
  'action.publish.already-published.no-time-ago.tooltip': 'Ya publicado',
  /** Tooltip when publish button is disabled because the document is already published.*/
  'action.publish.already-published.tooltip': 'Publicado hace {{timeSincePublished}}',
  /** Tooltip when action is disabled because the studio is not ready.*/
  'action.publish.disabled.not-ready': 'Operación no disponible',
  /** Label for action when there are pending changes.*/
  'action.publish.draft.label': 'Publicar',
  /** Label for the "Publish" document action */
  'action.publish.label': 'Publicar',
  /** Label for the "Publish" document action when the document has live edit enabled.*/
  'action.publish.live-edit.label': 'Publicar',
  /** Fallback tooltip for the "Publish" document action when publish is invoked for a document with live edit enabled.*/
  'action.publish.live-edit.publish-disabled':
    'No se puede publicar ya que la edición en vivo está habilitada para este tipo de documento',
  /** Tooltip for the "Publish" document action when the document has live edit enabled.*/
  'action.publish.live-edit.tooltip':
    'La edición en vivo está habilitada para este tipo de contenido y los cambios se publicarán automáticamente a medida que se realicen',
  /** Tooltip when publish button is disabled because there are no changes.*/
  'action.publish.no-changes.tooltip': 'No hay cambios sin publicar',
  /** Label for the "Publish" document action when there are no changes.*/
  'action.publish.published.label': 'Publicado',
  /** Label for the "Publish" document action while publish is being executed.*/
  'action.publish.running.label': 'Publicando…',
  /** Tooltip when the "Publish" document action is disabled due to validation issues */
  'action.publish.validation-issues.tooltip':
    'Hay errores de validación que necesitan ser corregidos antes de que este documento pueda ser publicado',
  /** Tooltip when publish button is waiting for validation and async tasks to complete.*/
  'action.publish.waiting': 'Esperando a que las tareas terminen antes de publicar',
  /** Message prompting the user to confirm that they want to restore to an earlier revision*/
  'action.restore.confirm.message': '¿Estás seguro de que quieres restaurar este documento?',
  /** Fallback tooltip for when user is looking at the initial revision */
  'action.restore.disabled.cannot-restore-initial': 'No puedes restaurar a la versión inicial',
  /** Label for the "Restore" document action */
  'action.restore.label': 'Restaurar',
  /** Default tooltip for the action */
  'action.restore.tooltip': 'Restaurar a esta versión',
  /** Tooltip when action is disabled because the document is not already published */
  'action.unpublish.disabled.not-published': 'Este documento no está publicado',
  /** Tooltip when action is disabled because the operation is not ready   */
  'action.unpublish.disabled.not-ready': 'Operación no disponible',
  /** Label for the "Unpublish" document action */
  'action.unpublish.label': 'Despublicar',
  /** Fallback tooltip for the Unpublish document action when publish is invoked for a document with live edit enabled.*/
  'action.unpublish.live-edit.disabled':
    'Este documento tiene la edición en vivo activada y no puede ser despublicado',

  /** Description for the archived release banner, rendered when viewing the history of a version document from the publihed view */
  'banners.archived-release.description':
    'Estás viendo un documento de solo lectura que fue archivado como parte de <VersionBadge>{{title}}</VersionBadge>. No se puede editar',
  /** The explanation displayed when a user attempts to create a new draft document, but the draft model is not switched on */
  'banners.choose-new-document-destination.cannot-create-draft-document': undefined, // 'Cannot create a draft document.'
  /** The explanation displayed when a user attempts to create a new published document, but the schema type doesn't support live-editing */
  'banners.choose-new-document-destination.cannot-create-published-document': undefined, // 'Cannot create a published document.'
  /** The prompt displayed when a user must select a different perspective in order to create a document */
  'banners.choose-new-document-destination.choose-destination': undefined, // 'Choose a destination for this document:'
  /** The explanation displayed when a user attempts to create a new document in a release, but the selected release is inactive */
  'banners.choose-new-document-destination.release-inactive': undefined, // 'The <VersionBadge>{{title}}</VersionBadge> release is not active.'
  /** The text for the restore button on the deleted document banner */
  'banners.deleted-document-banner.restore-button.text': 'Restaurar la versión más reciente',
  /** The text content for the deleted document banner */
  'banners.deleted-document-banner.text': 'Este documento ha sido eliminado.',
  /** The text content for the deprecated document type banner */
  'banners.deprecated-document-type-banner.text': 'Este tipo de documento ha sido descontinuado.',
  /** The text for publish action for discarding the version */
  'banners.live-edit-draft-banner.discard.tooltip': 'Descartar borrador',
  /** The text for publish action for the draft banner */
  'banners.live-edit-draft-banner.publish.tooltip': 'Publicar para continuar editando',
  /** The text content for the live edit document when it's a draft */
  'banners.live-edit-draft-banner.text':
    'El tipo <strong>{{schemaType}}</strong> tiene <code>liveEdit</code> habilitado, pero existe una versión borrador de este documento. Publica o descarta el borrador para continuar editándolo en vivo.',
  /** The label for the "compare draft" action */
  'banners.obsolete-draft.actions.compare-draft.text': undefined, // 'Compare draft'
  /** The label for the "discard draft" action */
  'banners.obsolete-draft.actions.discard-draft.text': undefined, // 'Discard draft'
  /** The label for the "publish draft" action */
  'banners.obsolete-draft.actions.publish-draft.text': undefined, // 'Publish draft'
  /** The warning displayed when editing a document that has an obsolete draft because the draft model is not switched on */
  'banners.obsolete-draft.draft-model-inactive.text': undefined, // 'The workspace does not have drafts enabled, but a draft version of this document exists.'
  /** The text for the permission check banner if the user only has one role, and it does not allow publishing this document */
  'banners.permission-check-banner.missing-permission_create_one':
    'Tu rol <Roles/> no tiene permisos para crear este documento.',
  /** The text for the permission check banner if the user only has multiple roles, but they do not allow publishing this document */
  'banners.permission-check-banner.missing-permission_create_other':
    'Tus roles <Roles/> no tienen permisos para crear este documento.',
  /** The text for the permission check banner if the user only has one role, and it does not allow editing this document */
  'banners.permission-check-banner.missing-permission_update_one':
    'Tu rol <Roles/> no tiene permisos para actualizar este documento.',
  /** The text for the permission check banner if the user only has multiple roles, but they do not allow editing this document */
  'banners.permission-check-banner.missing-permission_update_other':
    'Tus roles <Roles/> no tienen permisos para actualizar este documento.',
  /** The pending text for the request permission button that appears for viewer roles */
  'banners.permission-check-banner.request-permission-button.sent': 'Solicitud de editor enviada',
  /** The text for the request permission button that appears for viewer roles */
  'banners.permission-check-banner.request-permission-button.text': 'Solicitar para editar',
  /** Description for the archived release banner, rendered when viewing the history of a version document from the published view */
  'banners.published-release.description':
    'Estás viendo un documento de solo lectura que fue publicado como parte de <VersionBadge>{{title}}</VersionBadge>. No se puede editar',
  /** The text for the reload button */
  'banners.reference-changed-banner.reason-changed.reload-button.text': 'Refrescar referencia',
  /** The text for the reference change banner if the reason is that the reference has been changed */
  'banners.reference-changed-banner.reason-changed.text':
    'Esta referencia ha sido modificada desde que la abriste.',
  /** The text for the close button */
  'banners.reference-changed-banner.reason-removed.close-button.text': 'Cerrar referencia',
  /** The text for the reference change banner if the reason is that the reference has been deleted */
  'banners.reference-changed-banner.reason-removed.text':
    'Esta referencia ha sido eliminada desde que la abriste.',
  /** The text that appears for the action button to add the current document to the global release */
  'banners.release.action.add-to-release': 'Añadir a la publicación',
  /** The text that appears for the action button to add the current document to the global release */
  'banners.release.action.open-to-edit': 'Abrir lanzamiento para editar',
  /** Toast description in case an error occurs when adding a document to a release  */
  'banners.release.error.description':
    'Ocurrió un error al agregar el documento al lanzamiento: {{message}}',
  /** Toast title in case an error occurs when adding a document to a release  */
  'banners.release.error.title': 'Error al agregar documento al lanzamiento',
  /** The text for the banner that appears when a document only has versions but is in a draft or published pinned release */
  'banners.release.navigate-to-edit-description': 'El documento solo existe en el',
  /** The text for the banner that appears when a document only has versions but is in a draft or published pinned release */
  'banners.release.navigate-to-edit-description-end_one': 'lanzamiento',
  /** The text for the banner that appears when a document only has versions but is in a draft or published pinned release */
  'banners.release.navigate-to-edit-description-end_other': 'lanzamientos',
  /** The text for the banner that appears when there are multiple versions but no drafts or published, only one extra releases */
  'banners.release.navigate-to-edit-description-multiple_one':
    'Este documento es parte del lanzamiento <VersionBadge/> y {{count}} lanzamiento más.',
  /** The text for the banner that appears when there are multiple versions but no drafts or published, more than one extra releases */
  'banners.release.navigate-to-edit-description-multiple_other':
    'Este documento es parte del lanzamiento <VersionBadge/> y {{count}} lanzamientos más',
  /** The text for the banner that appears when a document only has one version but is in a draft or published pinned release */
  'banners.release.navigate-to-edit-description-single':
    'Este documento es parte del lanzamiento <VersionBadge/>',
  /** The text for the banner that appears when a document is not in the current global release */
  'banners.release.not-in-release':
    'No está en la publicación <VersionBadge>{{title}}</VersionBadge>.',
  /** Description of toast that will appear in case of latency between the user adding a document to a release and the UI reflecting it */
  'banners.release.waiting.description':
    'Por favor, espere mientras el documento se agrega al lanzamiento. No debería tardar más de unos segundos.',
  /** Title of toast that will appear in case of latency between the user adding a document to a release and the UI reflecting it */
  'banners.release.waiting.title': 'Agregando documento al lanzamiento…',
  /** The text for the revision not found banner */
  'banners.revision-not-found.description':
    'No pudimos encontrar la revisión del documento seleccionada, por favor seleccione otra entrada de la lista de historial.',
  /** The text content for the unpublished document banner when is part of a release */
  'banners.unpublished-release-banner.text':
    'Este documento será despublicado como parte de la publicación <VersionBadge>{{title}}</VersionBadge>',
  /** The text content for the unpublished document banner letting the user know that the current published version is being shown */
  'banners.unpublished-release-banner.text-with-published': undefined, // 'Showing the current <strong>published</strong> version:'

  /** Browser/tab title when creating a new document of a given type */
  'browser-document-title.new-document': 'Nuevo {{schemaType}}',
  /** Browser/tab title when editing a document where the title cannot be resolved from preview configuration */
  'browser-document-title.untitled-document': 'Sin título',

  /** The action menu button aria-label */
  'buttons.action-menu-button.aria-label': 'Abrir acciones del documento',
  /** The action menu button tooltip */
  'buttons.action-menu-button.tooltip': 'Acciones del documento',
  /** The aria-label for the split pane button on the document panel header */
  'buttons.split-pane-button.aria-label': 'Dividir panel a la derecha',
  /** The tool tip for the split pane button on the document panel header */
  'buttons.split-pane-button.tooltip': 'Dividir panel a la derecha',
  /** The title for the close button on the split pane on the document panel header */
  'buttons.split-pane-close-button.title': 'Cerrar panel dividido',
  /** The title for the close group button on the split pane on the document panel header */
  'buttons.split-pane-close-group-button.title': 'Cerrar grupo de paneles',

  /** The text for the canvas linked banner action button */
  'canvas.banner.edit-in-canvas-action': 'Editar en Canvas',
  /** The text for the canvas linked banner when the document is a draft */
  'canvas.banner.linked-text.draft': 'Este documento borrador está vinculado a Canvas',
  /** The text for the canvas linked banner when the document is a live document */
  'canvas.banner.linked-text.published': 'Este documento en vivo está vinculado a Canvas',
  /** The text for the canvas linked banner when the document is a version document */
  'canvas.banner.linked-text.version': 'Este documento de versión está vinculado a Canvas',
  /** The text for the canvas linked banner popover button */
  'canvas.banner.popover-button-text': 'Aprender más',
  /** The description for the canvas linked banner popover */
  'canvas.banner.popover-description':
    'Canvas te permite crear en un editor de forma libre que automáticamente se mapea de vuelta al Studio como contenido estructurado - mientras escribes.',
  /** The heading for the canvas linked banner popover */
  'canvas.banner.popover-heading': 'Autoría con la idea primero',

  /** The description for the changes banner */
  'changes.banner.description':
    'Mostrando el historial para la versión <strong>{{perspective}}</strong> de este documento.',
  /** The tooltip for the changes banner */
  'changes.banner.tooltip':
    'Esta vista muestra los cambios que ocurrieron en una versión específica de este documento. Seleccione una versión diferente para ver sus cambios',
  /** The label used in the changes inspector for the from selector */
  'changes.from.label': 'Desde',
  /* The label for the history tab in the changes inspector*/
  'changes.tab.history': 'Historia',
  /* The label for the review tab in the changes inspector*/
  'changes.tab.review-changes': 'Revisar cambios',
  /** The label used in the changes inspector for the to selector */
  'changes.to.label': 'Hasta',

  /** The error message shown when the specified document comparison mode is not supported */
  'compare-version.error.invalidModeParam':
    '"{{input}}" no es un modo de comparación de documentos compatible.',
  /** The error message shown when the next document for comparison could not be extracted from the URL */
  'compare-version.error.invalidNextDocumentParam':
    'El parámetro del siguiente documento es inválido.',
  /** The error message shown when the document comparison URL could not be parsed */
  'compare-version.error.invalidParams.title': 'Incapaz de comparar documentos',
  /** The error message shown when the previous document for comparison could not be extracted from the URL */
  'compare-version.error.invalidPreviousDocumentParam':
    'El parámetro del documento anterior es inválido.',

  /** The text for the tooltip when the "Compare versions" action for a document is disabled */
  'compare-versions.menu-item.disabled-reason':
    'No hay otras versiones de este documento para comparar.',
  /** The text for the "Compare versions" action for a document */
  'compare-versions.menu-item.title': 'Comparar versiones',
  /** The string used to label draft documents */
  'compare-versions.status.draft': 'Borrador',
  /** The string used to label published documents */
  'compare-versions.status.published': 'Publicado',
  /** The title used when comparing versions of a document */
  'compare-versions.title': 'Comparar versiones',

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
  'confirm-delete-dialog.cdr-summary.subtitle_unavailable_one': 'Dataset no disponible',
  /** The text that appears in the subtitle `<summary>` that lists the datasets below the title */
  'confirm-delete-dialog.cdr-summary.subtitle_unavailable_other': 'Datasets no disponibles',
  /** The text that appears in the title `<summary>` that includes the list of CDRs (singular) */
  'confirm-delete-dialog.cdr-summary.title_one': '{{documentCount}} en otro dataset',
  /** The text that appears in the title `<summary>` that includes the list of CDRs (plural) */
  'confirm-delete-dialog.cdr-summary.title_other': '{{documentCount}} en {{count}} datasets',
  /** Appears when hovering over the copy button to copy */
  'confirm-delete-dialog.cdr-table.copy-id-button.tooltip': 'Copiar ID al portapapeles',
  /** The header for the dataset column in the list of cross-dataset references found */
  'confirm-delete-dialog.cdr-table.dataset.label': 'Dataset',
  /** The header for the document ID column in the list of cross-dataset references found */
  'confirm-delete-dialog.cdr-table.document-id.label': 'ID del Documento',
  /** The toast title when the copy button has been clicked but copying failed */
  'confirm-delete-dialog.cdr-table.id-copied-toast.title-failed':
    'Error al copiar el ID del documento',
  /** The header for the project ID column in the list of cross-dataset references found */
  'confirm-delete-dialog.cdr-table.project-id.label': 'ID del Proyecto',
  /** The text in the "Delete anyway" button in the confirm delete dialog that confirms the action */
  'confirm-delete-dialog.confirm-anyway-button.text_delete': 'Eliminar de todos modos',
  /** The text in the "Unpublish anyway" button in the confirm delete dialog that confirms the action */
  'confirm-delete-dialog.confirm-anyway-button.text_unpublish': 'Despublicar de todos modos',
  /** The text in the "Delete now" button in the confirm delete dialog that confirms the action */
  'confirm-delete-dialog.confirm-button.text_delete': 'Eliminar ahora',
  /** The text in the "Unpublish now" button in the confirm delete dialog that confirms the action */
  'confirm-delete-dialog.confirm-button.text_unpublish': 'Despublicar ahora',
  /** If no referring documents are found, this text appears above the cancel and confirmation buttons */
  'confirm-delete-dialog.confirmation.text_delete':
    '¿Estás seguro de que quieres eliminar “<DocumentTitle/>”?',
  /** If no referring documents are found, this text appears above the cancel and confirmation buttons */
  'confirm-delete-dialog.confirmation.text_unpublish':
    '¿Estás seguro de que quieres despublicar “<DocumentTitle/>”?',
  /** The text body of the error dialog. */
  'confirm-delete-dialog.error.message.text':
    'Ocurrió un error al cargar los documentos referenciados.',
  /** The text in the retry button of the confirm delete dialog if an error occurred. */
  'confirm-delete-dialog.error.retry-button.text': 'Reintentar',
  /** The header of the confirm delete dialog if an error occurred while the confirm delete dialog was open. */
  'confirm-delete-dialog.error.title.text': 'Error',
  /** The header of the confirm delete dialog */
  'confirm-delete-dialog.header.text_delete': '¿Eliminar documento?',
  /** The header of the confirm delete dialog */
  'confirm-delete-dialog.header.text_unpublish': '¿Despublicar documento?',
  /** The text that appears while the referring documents are queried */
  'confirm-delete-dialog.loading.text': 'Buscando documentos relacionados…',
  /** Shown if there are references to other documents but the user does not have the permission to see the relevant document IDs */
  'confirm-delete-dialog.other-reference-count.title_one': '1 otra referencia no mostrada',
  /** Shown if there are references to other documents but the user does not have the permission to see the relevant document IDs */
  'confirm-delete-dialog.other-reference-count.title_other':
    '{{count}} otras referencias no mostradas',
  /** Text in the tooltip of this component if hovering over the info icon */
  'confirm-delete-dialog.other-reference-count.tooltip':
    'No podemos mostrar metadatos para estas referencias debido a la ausencia de un token de acceso a los datasets relacionados.',
  /** Appears when unable to render a document preview in the referring document list */
  'confirm-delete-dialog.preview-item.preview-unavailable.subtitle': 'ID: {{documentId}}',
  /** Appears when unable to render a document preview in the referring document list */
  'confirm-delete-dialog.preview-item.preview-unavailable.title': 'Vista previa no disponible',
  /** Warns the user of affects to other documents if the action is confirmed (delete) */
  'confirm-delete-dialog.referential-integrity-disclaimer.text_delete':
    'Si eliminas este documento, los documentos que lo referencian ya no podrán acceder a él.',
  /** Warns the user of affects to other documents if the action is confirmed (unpublish) */
  'confirm-delete-dialog.referential-integrity-disclaimer.text_unpublish':
    'Si despublicas este documento, los documentos que lo referencian ya no podrán acceder a él.',
  /** Tells the user the count of how many other referring documents there are before listing them. (singular) */
  'confirm-delete-dialog.referring-document-count.text_one':
    '1 documento hace referencia a “<DocumentTitle/>”',
  /** Tells the user the count of how many other referring documents there are before listing them. (plural) */
  'confirm-delete-dialog.referring-document-count.text_other':
    '{{count}} documentos hacen referencia a “<DocumentTitle/>”',
  /** Describes the list of documents that refer to the one trying to be deleted (delete) */
  'confirm-delete-dialog.referring-documents-descriptor.text_delete':
    'Puede que no puedas eliminar “<DocumentTitle/>” porque los siguientes documentos lo están referenciando:',
  /** Describes the list of documents that refer to the one trying to be deleted (unpublish) */
  'confirm-delete-dialog.referring-documents-descriptor.text_unpublish':
    'Puede que no puedas despublicar “<DocumentTitle/>” porque los siguientes documentos lo están referenciando:',

  /** The text for the cancel button in the confirm dialog used in document action shortcuts if none is provided */
  'confirm-dialog.cancel-button.fallback-text': 'Cancelar',
  /** The text for the confirm button in the confirm dialog used in document action shortcuts if none is provided */
  'confirm-dialog.confirm-button.fallback-text': 'Confirmar',

  /** For the default structure definition, the title for the "Content" pane */
  'default-definition.content-title': 'Contenido',

  /** The text shown if there was an error while getting the document's title via a preview value */
  'doc-title.error.text': 'Error: {{errorMessage}}',
  /** The text shown if the preview value for a document is non-existent or empty */
  'doc-title.fallback.text': 'Sin título',
  /** The text shown if a document's title via a preview value cannot be determined due to an unknown schema type */
  'doc-title.unknown-schema-type.text': 'Tipo de esquema desconocido: {{schemaType}}',

  /** Tooltip text shown for the close button of the document inspector */
  'document-inspector.close-button.tooltip': 'Cerrar',
  /** The title shown in the dialog header, when inspecting a valid document */
  'document-inspector.dialog.title': 'Inspeccionando <DocumentTitle/>',
  /** The title shown in the dialog header, when the document being inspected is not created yet/has no value */
  'document-inspector.dialog.title-no-value': 'Sin valor',
  /** Title shown for menu item that opens the "Inspect" dialog */
  'document-inspector.menu-item.title': 'Inspeccionar',
  /** the placeholder text for the search input on the inspect dialog */
  'document-inspector.search.placeholder': 'Buscar',
  /** The "parsed" view mode, meaning the JSON is searchable, collapsible etc */
  'document-inspector.view-mode.parsed': 'Interpretado',
  /** The "raw" view mode, meaning the JSON is presented syntax-highlighted, but with no other features - optimal for copying */
  'document-inspector.view-mode.raw-json': 'JSON sin formato',

  /** The text for when a form is hidden */
  'document-view.form-view.form-hidden': 'Este formulario está oculto',
  /** Fallback title shown when a form title is not provided */
  'document-view.form-view.form-title-fallback': 'Sin título',
  /** The text for when the form view is loading a document */
  'document-view.form-view.loading': 'Cargando documento…',
  /** The description of the sync lock toast on the form view */
  'document-view.form-view.sync-lock-toast.description':
    'Por favor, espera mientras se sincroniza el documento. Esto suele ocurrir justo después de la publicación, y no debería tardar más de unos segundos',
  /** The title of the sync lock toast on the form view */
  'document-view.form-view.sync-lock-toast.title': 'Sincronizando documento…',

  /** The description for the document favorite action */
  'document.favorites.add-to-favorites': 'Añadir a favoritos',
  /** The description for the document unfavorite action */
  'document.favorites.remove-from-favorites': 'Eliminar de favoritos',

  /** The description for the events inspector when we can't load the document so we default to compare with published */
  'events.compare-with-published.description':
    'No podemos cargar los cambios de este documento, probablemente debido a la política de retención de historial de su plan, esto le muestra cómo la versión <strong>{{version}}</strong> se compara con la versión <strong>publicada</strong>.',
  /** The title for the events inspector when we can't load the document so we default to compare with published */
  'events.compare-with-published.title': 'Comparando con la versión publicada',
  /**The title for the menu items that will be shown when expanding a publish release event to inspect the document */
  'events.inspect.release': 'Inspeccionar documento <VersionBadge>{{releaseTitle}}</VersionBadge>',
  /**The title for the menu items that will be shown when expanding a publish draft event to inspect the draft document*/
  'events.open.draft': 'Abrir documento <VersionBadge>draft</VersionBadge>',
  /**The title for the menu items that will be shown when expanding a publish release event to inspect the release*/
  'events.open.release': 'Abrir publicación <VersionBadge>{{releaseTitle}}</VersionBadge>',

  /** The loading messaging for when the tooltip is still loading permission info */
  'insufficient-permissions-message-tooltip.loading-text': 'Cargando…',

  /** --- Menu items --- */
  /** The menu item group title to use for the Action menu items */
  'menu-item-groups.actions-group': 'Acciones',
  /** The menu item group title to use for the Layout menu items */
  'menu-item-groups.layout-group': 'Diseño',
  /** The menu item group title to use for the Sort menu items */
  'menu-item-groups.sorting-group': 'Ordenar',

  /** The menu item title to use the compact view */
  'menu-items.layout.compact-view': 'Vista compacta',
  /** The menu item title to use the detailed view */
  'menu-items.layout.detailed-view': 'Vista detallada',
  /** The menu item title to Sort by Created */
  'menu-items.sort-by.created': 'Ordenar por Creado',
  /** The menu item title to Sort by Last Edited */
  'menu-items.sort-by.last-edited': 'Ordenar por Última edición',

  /** The link text of the no document type screen that appears directly below the subtitle */
  'no-document-types-screen.link-text': 'Aprenda cómo añadir un tipo de documento →',
  /** The subtitle of the no document type screen that appears directly below the title */
  'no-document-types-screen.subtitle':
    'Por favor, defina al menos un tipo de documento en su esquema.',
  /** The title of the no document type screen */
  'no-document-types-screen.title': 'No hay tipos de documento',

  /** Text shown on back button visible on smaller breakpoints */
  'pane-header.back-button.text': 'Atrás',
  /** tooltip text (via `title` attribute) for the menu button */
  'pane-header.context-menu-button.tooltip': 'Mostrar menú',
  /** Appears in a document list pane header if there are more than one option for create. This is the label for that menu */
  'pane-header.create-menu.label': 'Crear',
  /** Tooltip displayed on the create new button in document lists */
  'pane-header.create-new-button.tooltip': 'Crear nuevo documento',
  /** The `aria-label` for the disabled button in the pane header if create permissions are granted */
  'pane-header.disabled-created-button.aria-label': 'Permisos insuficientes',

  /** The text shown in the tooltip of pane item previews of documents if there are unpublished edits */
  'pane-item.draft-status.has-draft.tooltip': 'Editado <RelativeTime/>',
  /** The text shown in the tooltip of pane item previews of documents if there are no unpublished edits */
  'pane-item.draft-status.no-draft.tooltip': 'Sin cambios no publicados',
  /** The subtitle tor pane item previews if there isn't a matching schema type found */
  'pane-item.missing-schema-type.subtitle': 'Documento: <Code>{{documentId}}</Code>',
  /** The title tor pane item previews if there isn't a matching schema type found */
  'pane-item.missing-schema-type.title':
    'No se encontró un esquema para el tipo <Code>{{documentType}}</Code>',
  /** The text shown in the tooltip of pane item previews of documents if there are unpublished edits */
  'pane-item.published-status.has-published.tooltip': 'Publicado <RelativeTime/>',
  /** The text shown in the tooltip of pane item previews of documents if there are no unpublished edits */
  'pane-item.published-status.no-published.tooltip': 'Sin cambios no publicados',

  /** The text used in the document header title if there is an error */
  'panes.document-header-title.error.text': 'Error: {{error}}',
  /** The text used in the document header title if creating a new item */
  'panes.document-header-title.new.text': 'Nuevo {{schemaType}}',
  /** The text used in the document header title if no other title can be determined */
  'panes.document-header-title.untitled.text': 'Sin título',
  /** The help text saying that we'll retry fetching the document list */
  'panes.document-list-pane.error.retrying': 'Reintentando…',
  /** The error text on the document list pane */
  'panes.document-list-pane.error.text': 'Error: <Code>{{error}}</Code>',
  /** The error text on the document list pane */
  'panes.document-list-pane.error.text.dev': 'Error: <Code>{{error}}</Code>',
  /** The error text on the document list pane if the browser appears to be offlline */
  'panes.document-list-pane.error.text.offline':
    'La conexión a Internet parece estar desconectada.',
  /** The error title on the document list pane */
  'panes.document-list-pane.error.title': 'No se pudieron obtener los elementos de la lista',
  /** The help text saying that we'll retry fetching the document list */
  'panes.document-list-pane.error.will-retry-automatically_one': 'Reintentando…',
  'panes.document-list-pane.error.will-retry-automatically_other': 'Reintentando… (#{{count}}).',
  /** The text of the document list pane if more than a maximum number of documents are returned */
  'panes.document-list-pane.max-items.text': 'Mostrando un máximo de {{limit}} documentos',
  /** The text of the document list pane if no documents are found for a specified type */
  'panes.document-list-pane.no-documents-of-type.text': 'No hay documentos de este tipo',
  /** The text of the document list pane if no documents are found */
  'panes.document-list-pane.no-documents.text': 'No se encontraron resultados',
  /** The text of the document list pane if no documents are found matching specified criteria */
  'panes.document-list-pane.no-matching-documents.text':
    'No se encontraron documentos coincidentes',
  /** The search input for the search input on the document list pane */
  'panes.document-list-pane.reconnecting': 'Intentando conectar…',
  /** The aria-label for the search input on the document list pane */
  'panes.document-list-pane.search-input.aria-label': 'Buscar en la lista',
  /** The search input for the search input on the document list pane */
  'panes.document-list-pane.search-input.placeholder': 'Buscar en la lista',
  /** The summary title when displaying an error for a document operation result */
  'panes.document-operation-results.error.summary.title': 'Detalles',
  /** The text when a generic operation failed (fallback, generally not shown)  */
  'panes.document-operation-results.operation-error': 'Ocurrió un error durante {{context}}',
  /** The text when a delete operation failed  */
  'panes.document-operation-results.operation-error_delete':
    'Ocurrió un error al intentar eliminar este documento. Esto generalmente significa que hay otros documentos que lo referencian.',
  /** The text when an unpublish operation failed  */
  'panes.document-operation-results.operation-error_unpublish':
    'Ocurrió un error al intentar despublicar este documento. Esto generalmente significa que hay otros documentos que lo referencian.',
  /** The text when a generic operation succeeded (fallback, generally not shown)  */
  'panes.document-operation-results.operation-success':
    'Se realizó con éxito {{context}} en el documento',
  /** The text when copy URL operation succeeded  */
  'panes.document-operation-results.operation-success_copy-url':
    'URL del documento copiada al portapapeles',
  /**  */
  'panes.document-operation-results.operation-success_createVersion':
    '<Strong>{{title}}</Strong> fue añadido a la publicación',
  /** The text when a delete operation succeeded  */
  'panes.document-operation-results.operation-success_delete':
    'El documento fue eliminado con éxito',
  /** The text when a discard changes operation succeeded  */
  'panes.document-operation-results.operation-success_discardChanges':
    'Todos los cambios desde la última publicación han sido descartados. El borrador descartado todavía puede ser recuperado desde el historial',
  /** The text when a duplicate operation succeeded  */
  'panes.document-operation-results.operation-success_duplicate':
    'El documento se duplicó con éxito',
  /** The text when a publish operation succeeded  */
  'panes.document-operation-results.operation-success_publish': 'El documento fue publicado',
  /** The text when a restore operation succeeded  */
  'panes.document-operation-results.operation-success_restore':
    '<Strong>{{title}}</Strong> fue restaurado',
  /** The text when an unpublish operation succeeded  */
  'panes.document-operation-results.operation-success_unpublish':
    'El documento fue despublicado. Se ha creado un borrador a partir de la última versión publicada.',
  /** The document title shown when document title is "undefined" in operation message */
  'panes.document-operation-results.operation-undefined-title': 'Sin título',
  /** The loading message for the document not found pane */
  'panes.document-pane.document-not-found.loading': 'Cargando documento…',
  /** The text of the document not found pane if the schema is known */
  'panes.document-pane.document-not-found.text':
    'El tipo de documento no está definido, y no se pudo encontrar un documento con el identificador <Code>{{id}}</Code>.',
  /** The title of the document not found pane if the schema is known */
  'panes.document-pane.document-not-found.title': 'El documento no fue encontrado',
  /** The text of the document not found pane if the schema is not found */
  'panes.document-pane.document-unknown-type.text':
    'Este documento tiene el tipo de esquema <Code>{{documentType}}</Code>, que no está definido como un tipo en el esquema del estudio de contenido local.',
  /** The title of the document not found pane if the schema is not found or unknown */
  'panes.document-pane.document-unknown-type.title':
    'Tipo de documento desconocido: <Code>{{documentType}}</Code>',
  /** The title of the document not found pane if the schema is unknown */
  'panes.document-pane.document-unknown-type.without-schema.text':
    'Este documento no existe, y no se especificó un tipo de esquema para él.',
  /** Default message shown while resolving the structure definition for an asynchronous node */
  'panes.resolving.default-message': 'Cargando…',
  /** Message shown while resolving the structure definition for an asynchronous node and it is taking a while (more than 5s) */
  'panes.resolving.slow-resolve-message': 'Todavía cargando…',
  /** The text to display when type is missing */
  'panes.unknown-pane-type.missing-type.text':
    'Falta la propiedad <Code>type</Code> requerida en el elemento de estructura.',
  /** The title of the unknown pane */
  'panes.unknown-pane-type.title': 'Tipo de panel desconocido',
  /** The text to display when type is unknown */
  'panes.unknown-pane-type.unknown-type.text':
    'El elemento de estructura de tipo <Code>{{type}}</Code> no es una entidad conocida.',

  /** The text for the "Open preview" action for a document */
  'production-preview.menu-item.title': 'Abrir vista previa',

  /** The text for the confirm button in the request permission dialog used in the permissions banner */
  'request-permission-dialog.confirm-button.text': 'Enviar solicitud',
  /** The description text for the request permission dialog used in the permissions banner */
  'request-permission-dialog.description.text':
    'Tu solicitud será enviada a los administradores del proyecto. Si lo deseas, también puedes incluir una nota',
  /** The header/title for the request permission dialog used in the permissions banner */
  'request-permission-dialog.header.text': 'Solicitar acceso de edición',
  /** The text describing the note input for the request permission dialog used in the permissions banner */
  'request-permission-dialog.note-input.description.text': 'Si lo deseas, puedes añadir una nota',
  /** The placeholder for the note input in the request permission dialog used in the permissions banner */
  'request-permission-dialog.note-input.placeholder.text': 'Añadir nota...',
  /** The error/warning text in the request permission dialog when the user's request has been declined */
  'request-permission-dialog.warning.denied.text':
    'Tu solicitud para acceder a este proyecto ha sido rechazada.',
  /** The error/warning text in the request permission dialog when the user's request has been denied due to too many outstanding requests */
  'request-permission-dialog.warning.limit-reached.text':
    'Has alcanzado el límite de solicitudes de rol en todos los proyectos. Por favor, espera antes de enviar más solicitudes o contacta a un administrador para asistencia.',

  /** Label for button when status is saved */
  'status-bar.document-status-pulse.status.saved.text': 'Guardado',
  /** Label for button when status is syncing */
  'status-bar.document-status-pulse.status.syncing.text': 'Guardando...',
  /** Accessibility label indicating when the document was last published, in relative time, eg "3 weeks ago" */
  'status-bar.publish-status-button.last-published-time.aria-label':
    'Última publicación hace {{relativeTime}}',
  /** Text for tooltip showing explanation of timestamp/relative time, eg "Last published <RelativeTime/>" */
  'status-bar.publish-status-button.last-published-time.tooltip':
    'Última publicación <RelativeTime/>',
  /** Accessibility label indicating when the document was last updated, in relative time, eg "2 hours ago" */
  'status-bar.publish-status-button.last-updated-time.aria-label':
    'Última actualización hace {{relativeTime}}',
  /** Text for tooltip showing explanation of timestamp/relative time, eg "Last updated <RelativeTime/>" */
  'status-bar.publish-status-button.last-updated-time.tooltip':
    'Última actualización <RelativeTime/>',
  /** Aria label for the button */
  'status-bar.review-changes-button.aria-label': 'Revisar cambios',
  /** Label for button when status is saved */
  'status-bar.review-changes-button.status.saved.text': '¡Guardado!',
  /** Label for button when status is syncing */
  'status-bar.review-changes-button.status.syncing.text': 'Guardando...',
  /** Text for the secondary text for tooltip for the button */
  'status-bar.review-changes-button.tooltip.changes-saved': 'Cambios guardados',
  /** Primary text for tooltip for the button */
  'status-bar.review-changes-button.tooltip.text': 'Revisar cambios',

  /** The text that appears in side the documentation link */
  'structure-error.docs-link.text': 'Ver documentación',
  /** Labels the error message or error stack of the structure error screen */
  'structure-error.error.label': 'Error',
  /** The header that appears at the top of the error screen */
  'structure-error.header.text': 'Se encontró un error al leer la estructura',
  /** The text in the reload button to retry rendering the structure */
  'structure-error.reload-button.text': 'Recargar',
  /** Labels the structure path of the structure error screen */
  'structure-error.structure-path.label': 'Ruta de la estructura',

  /** The aria label for the menu button in the timeline item */
  'timeline-item.menu-button.aria-label': 'Abrir menú de acciones',
  /** The text for the tooltip in menu button the timeline item */
  'timeline-item.menu-button.tooltip': 'Acciones',
  /** The text for the collapse action in the timeline item menu */
  'timeline-item.menu.action-collapse': 'Colapsar',
  /** The text for the expand action in the timeline item menu */
  'timeline-item.menu.action-expand': 'Expandir',
  /** The text for the published event menu tooltip when the release is not found */
  'timeline-item.not-found-release.tooltip':
    'No se encontró el lanzamiento con el id "{{releaseId}}"',
})
