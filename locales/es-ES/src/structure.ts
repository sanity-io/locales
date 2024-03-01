import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Tooltip when action button is disabled because the operation is not ready   */
  'action.delete.disabled.not-ready': 'Operación no disponible',
  /** Tooltip when action button is disabled because the document does not exist */
  'action.delete.disabled.nothing-to-delete': 'Este documento aún no existe o ya se ha eliminado',
  /** Label for the "Delete" document action button */
  'action.delete.label': 'Eliminar',
  /** Label for the "Delete" document action while the document is being deleted */
  'action.delete.running.label': 'Eliminando…',
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
  /** Message prompting the user to confirm that they want to restore to an earlier version*/
  'action.restore.confirm.message': '¿Estás seguro de que quieres restaurar este documento?',
  /** Fallback tooltip for when user is looking at the initial version */
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

  /** The text for the restore button on the deleted document banner */
  'banners.deleted-document-banner.restore-button.text': 'Restaurar la versión más reciente',
  /** The text content for the deleted document banner */
  'banners.deleted-document-banner.text': 'Este documento ha sido eliminado.',
  /** The text content for the deprecated document type banner */
  'banners.deprecated-document-type-banner.text': 'Este tipo de documento ha sido descontinuado.',
  /** The text for the permission check banner if the user only has one role, and it does not allow updating this document */
  'banners.permission-check-banner.missing-permission_create_one':
    'Tu rol <Roles/> no tiene permisos para crear este documento.',
  /** The text for the permission check banner if the user only has multiple roles, but they do not allow updating this document */
  'banners.permission-check-banner.missing-permission_create_other':
    'Tus roles <Roles/> no tienen permisos para crear este documento.',
  /** The text for the permission check banner if the user only has one role, and it does not allow updating this document */
  'banners.permission-check-banner.missing-permission_update_one':
    'Tu rol <Roles/> no tiene permisos para actualizar este documento.',
  /** The text for the permission check banner if the user only has multiple roles, but they do not allow updating this document */
  'banners.permission-check-banner.missing-permission_update_other':
    'Tus roles <Roles/> no tienen permisos para actualizar este documento.',
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
  /** The toast title when the copy button has been clicked */
  'confirm-delete-dialog.cdr-table.id-copied-toast.title':
    '¡ID del documento copiado al portapapeles!',
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
  /** The text for the retry button on the document list pane */
  'panes.document-list-pane.error.retry-button.text': 'Reintentar',
  /** The error text on the document list pane */
  'panes.document-list-pane.error.text': 'Error: <Code>{{error}}</Code>',
  /** The error title on the document list pane */
  'panes.document-list-pane.error.title': 'No se pudieron obtener los elementos de la lista',
  /** The text of the document list pane if more than a maximum number of documents are returned */
  'panes.document-list-pane.max-items.text': 'Mostrando un máximo de {{limit}} documentos',
  /** The text of the document list pane if no documents are found for a specified type */
  'panes.document-list-pane.no-documents-of-type.text': 'No hay documentos de este tipo',
  /** The text of the document list pane if no documents are found */
  'panes.document-list-pane.no-documents.text': 'No se encontraron resultados',
  /** The text of the document list pane if no documents are found matching specified criteria */
  'panes.document-list-pane.no-matching-documents.text':
    'No se encontraron documentos coincidentes',
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
  /** The text when a delete operation succeeded  */
  'panes.document-operation-results.operation-success_delete':
    'El documento fue eliminado con éxito',
  /** The text when a discard changes operation succeeded  */
  'panes.document-operation-results.operation-success_discardChanges':
    'Todos los cambios desde la última publicación han sido descartados. El borrador descartado todavía puede ser recuperado desde el historial',
  /** The text when a publish operation succeeded  */
  'panes.document-operation-results.operation-success_publish': 'El documento fue publicado',
  /** The text when a restore operation succeeded  */
  'panes.document-operation-results.operation-success_restore': undefined, // '<Strong>{{title}}</Strong> was restored'
  /** The text when an unpublish operation succeeded  */
  'panes.document-operation-results.operation-success_unpublish':
    'El documento fue despublicado. Se ha creado un borrador a partir de la última versión publicada.',
  /** The document title shown when document title is "undefined" in operation message */
  'panes.document-operation-results.operation-undefined-title': 'Sin título',
  /** The title of the reconnecting toast */
  'panes.document-pane-provider.reconnecting.title': 'Conexión perdida. Reconectando…',
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
})
