import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Label for the "Copy Document URL" document action */
  'action.copy-document-url.label': "Copia l'URL del document",
  /** Tooltip when action button is disabled because the operation is not ready   */
  'action.delete.disabled.not-ready': 'Operació no preparada',
  /** Tooltip when action button is disabled because the document does not exist */
  'action.delete.disabled.nothing-to-delete':
    'Aquest document encara no existeix o ja ha estat eliminat',
  /** Label for the "Delete" document action button */
  'action.delete.label': 'Elimina',
  /** Label for the "Delete" document action while the document is being deleted */
  'action.delete.running.label': 'Eliminant…',
  /** Tooltip when action is disabled because the document is linked to Canvas */
  'action.disabled-by-canvas.tooltip':
    'Algunes accions del document estan desactivades per a documents vinculats a Canvas',
  /** Message prompting the user to confirm discarding changes */
  'action.discard-changes.confirm-dialog.confirm-discard-changes':
    "Estàs segur que vols descartar tots els canvis des de l'última publicació?",
  /** Message prompting the user to confirm discarding changes */
  'action.discard-changes.confirm-dialog.confirm-discard-changes-draft':
    "Esteu segurs que voleu descartar tots els canvis i eliminar aquest document d'esborrany?",
  /**Header for the confirm discard dialog */
  'action.discard-changes.confirm-dialog.header.text': 'Descartar els canvis?',
  /** Tooltip when action is disabled because the document has no unpublished changes */
  'action.discard-changes.disabled.no-change': 'Aquest document no té canvis sense publicar',
  /** Tooltip when action is disabled because the document is not published */
  'action.discard-changes.disabled.not-published': 'Aquest document no està publicat',
  /** Tooltip when action button is disabled because the operation is not ready   */
  'action.discard-changes.disabled.not-ready': 'Operació no preparada',
  /** Label for the "Discard changes" document action */
  'action.discard-changes.label': 'Descarta els canvis',
  /** Tooltip when action is disabled because the operation is not ready   */
  'action.duplicate.disabled.not-ready': 'Operació no preparada',
  /** Tooltip when action is disabled because the document doesn't exist */
  'action.duplicate.disabled.nothing-to-duplicate':
    'Aquest document encara no existeix, així que no hi ha res per duplicar',
  /** Label for the "Duplicate" document action */
  'action.duplicate.label': 'Duplica',
  /** Label for the "Duplicate" document action while the document is being duplicated */
  'action.duplicate.running.label': 'Duplicant…',
  /** Tooltip when publish button is disabled because the document is already published, and published time is unavailable.*/
  'action.publish.already-published.no-time-ago.tooltip': 'Ja publicat',
  /** Tooltip when publish button is disabled because the document is already published.*/
  'action.publish.already-published.tooltip': 'Publicat {{timeSincePublished}}',
  /** Tooltip when action is disabled because the studio is not ready.*/
  'action.publish.disabled.not-ready': 'Operació no preparada',
  /** Label for action when there are pending changes.*/
  'action.publish.draft.label': 'Publica',
  /** Label for the "Publish" document action */
  'action.publish.label': 'Publica',
  /** Label for the "Publish" document action when the document has live edit enabled.*/
  'action.publish.live-edit.label': 'Publica',
  /** Fallback tooltip for the "Publish" document action when publish is invoked for a document with live edit enabled.*/
  'action.publish.live-edit.publish-disabled':
    "No es pot publicar ja que l'Edició en Directe està activada per a aquest tipus de document",
  /** Tooltip for the "Publish" document action when the document has live edit enabled.*/
  'action.publish.live-edit.tooltip':
    "L'Edició en Directe està activada per a aquest tipus de contingut i la publicació es realitza automàticament a mesura que fas canvis",
  /** Tooltip when publish button is disabled because there are no changes.*/
  'action.publish.no-changes.tooltip': 'No hi ha canvis sense publicar',
  /** Label for the "Publish" document action when there are no changes.*/
  'action.publish.published.label': 'Publicat',
  /** Label for the "Publish" document action while publish is being executed.*/
  'action.publish.running.label': 'Publicant…',
  /** Tooltip when the "Publish" document action is disabled due to validation issues */
  'action.publish.validation-issues.tooltip':
    'Hi ha errors de validació que cal corregir abans que aquest document pugui ser publicat',
  /** Tooltip when publish button is waiting for validation and async tasks to complete.*/
  'action.publish.waiting': 'Esperant a que les tasques acabin abans de publicar',
  /** Message prompting the user to confirm that they want to restore to an earlier revision*/
  'action.restore.confirm.message': 'Estàs segur que vols restaurar aquest document?',
  /** Fallback tooltip for when user is looking at the initial revision */
  'action.restore.disabled.cannot-restore-initial': 'No pots restaurar a la revisió inicial',
  /** Label for the "Restore" document action */
  'action.restore.label': 'Revertir a la revisió',
  /** Default tooltip for the action */
  'action.restore.tooltip': 'Restaurar a aquesta revisió',
  /** Tooltip when action is disabled because the document is not already published */
  'action.unpublish.disabled.not-published': 'Aquest document no està publicat',
  /** Tooltip when action is disabled because the operation is not ready   */
  'action.unpublish.disabled.not-ready': 'Operació no preparada',
  /** Label for the "Unpublish" document action */
  'action.unpublish.label': 'Despublicar',
  /** Fallback tooltip for the Unpublish document action when publish is invoked for a document with live edit enabled.*/
  'action.unpublish.live-edit.disabled':
    "Aquest document té l'edició en viu activada i no pot ser despublicat",

  /** Description for the archived release banner, rendered when viewing the history of a version document from the publihed view */
  'banners.archived-release.description':
    'Aquesta versió del document pertany a la versió arxivada <VersionBadge>{{title}}</VersionBadge>',
  /** Description for the archived scheduled draft banner, rendered when viewing the history of a cardinality one release document */
  'banners.archived-scheduled-draft.description': 'Aquest esborrany programat està arxivat',
  /** The explanation displayed when a user attempts to create a new draft document, but the draft model is not switched on */
  'banners.choose-new-document-destination.cannot-create-draft-document':
    "No es pot crear un document d'esborrany.",
  /** The explanation displayed when a user attempts to create a new published document, but the schema type doesn't support live-editing */
  'banners.choose-new-document-destination.cannot-create-published-document':
    'No es pot crear un document publicat.',
  /** The prompt displayed when a user must select a different perspective in order to create a document */
  'banners.choose-new-document-destination.choose-destination':
    'Trieu una destinació per a aquest document:',
  /** The explanation displayed when a user attempts to create a new document in a release, but the selected release is inactive */
  'banners.choose-new-document-destination.release-inactive':
    'La <VersionBadge>{{title}}</VersionBadge> versió no està activa.',
  /** The text for the restore button on the deleted document banner */
  'banners.deleted-document-banner.restore-button.text': 'Restaurar la revisió més recent',
  /** The text content for the deleted document banner */
  'banners.deleted-document-banner.text': 'Aquest document ha estat eliminat.',
  /** The text content for the deprecated document type banner */
  'banners.deprecated-document-type-banner.text': 'Aquest tipus de document ha estat obsolet.',
  /** The text for publish action for discarding the version */
  'banners.live-edit-draft-banner.discard.tooltip': 'Descartar esborrany',
  /** The text for publish action for the draft banner */
  'banners.live-edit-draft-banner.publish.tooltip': 'Publicar per continuar editant',
  /** The text content for the live edit document when it's a draft */
  'banners.live-edit-draft-banner.text':
    "El tipus <strong>{{schemaType}}</strong> té <code>liveEdit</code> activat, però existeix una versió esborrany d'aquest document. Publica o descarta l'esborrany per continuar editant-lo en viu.",
  /** The label for the "compare draft" action */
  'banners.obsolete-draft.actions.compare-draft.text': "Compara l'esborrany",
  /** The label for the "discard draft" action */
  'banners.obsolete-draft.actions.discard-draft.text': "Descarta l'esborrany",
  /** The label for the "publish draft" action */
  'banners.obsolete-draft.actions.publish-draft.text': "Publica l'esborrany",
  /** The warning displayed when editing a document that has an obsolete draft because the draft model is not switched on */
  'banners.obsolete-draft.draft-model-inactive.text':
    "L'espai de treball no té esborranys habilitats, però existeix una versió d'esborrany d'aquest document.",
  /** The text for the permission check banner if the user only has one role, and it does not allow publishing this document */
  'banners.permission-check-banner.missing-permission_create_one':
    'El teu rol <Roles/> no té permís per publicar aquest document.',
  /** The text for the permission check banner if the user only has multiple roles, but they do not allow publishing this document */
  'banners.permission-check-banner.missing-permission_create_other':
    'Els teus rols <Roles/> no tenen permís per publicar aquest document.',
  /** The text for the permission check banner if the user only has one role, and it does not allow editing this document */
  'banners.permission-check-banner.missing-permission_update_one':
    'El teu rol <Roles/> no té permís per editar aquest document.',
  /** The text for the permission check banner if the user only has multiple roles, but they do not allow editing this document */
  'banners.permission-check-banner.missing-permission_update_other':
    'Els teus rols <Roles/> no tenen permís per editar aquest document.',
  /** The pending text for the request permission button that appears for viewer roles */
  'banners.permission-check-banner.request-permission-button.sent': "Sol·licitud d'editor enviada",
  /** The text for the request permission button that appears for viewer roles */
  'banners.permission-check-banner.request-permission-button.text': 'Demanar per editar',
  /** Description for the archived release banner, rendered when viewing the history of a version document from the published view */
  'banners.published-release.description':
    'Estàs veient un document de només lectura que va ser publicat com a part de <VersionBadge>{{title}}</VersionBadge>. No es pot editar',
  /** The text for the reload button */
  'banners.reference-changed-banner.reason-changed.reload-button.text': 'Recarrega la referència',
  /** The text for the reference change banner if the reason is that the reference has been changed */
  'banners.reference-changed-banner.reason-changed.text':
    "Aquesta referència ha canviat des que l'has oberta.",
  /** The text for the close button */
  'banners.reference-changed-banner.reason-removed.close-button.text': 'Tanca la referència',
  /** The text for the reference change banner if the reason is that the reference has been deleted */
  'banners.reference-changed-banner.reason-removed.text':
    "Aquesta referència s'ha eliminat des que l'has oberta.",
  /** The text that appears for the action button to add the current document to the global release */
  'banners.release.action.add-to-release': 'Afegeix a la publicació',
  /** The text that appears for the action button to add the current document to the global release */
  'banners.release.action.open-to-edit': 'Obre la publicació per editar',
  /** Toast description in case an error occurs when adding a document to a release  */
  'banners.release.error.description':
    "S'ha produït un error en afegir el document a la publicació: {{message}}",
  /** Toast title in case an error occurs when adding a document to a release  */
  'banners.release.error.title': 'Error en afegir el document a la publicació',
  /** The text for the banner that appears when a document only has versions but is in a draft or published pinned release */
  'banners.release.navigate-to-edit-description': 'El document només existeix a la',
  /** The text for the banner that appears when a document only has versions but is in a draft or published pinned release */
  'banners.release.navigate-to-edit-description-end_one': 'publicació',
  /** The text for the banner that appears when a document only has versions but is in a draft or published pinned release */
  'banners.release.navigate-to-edit-description-end_other': 'publicacions',
  /** The text for the banner that appears when there are multiple versions but no drafts or published, only one extra releases */
  'banners.release.navigate-to-edit-description-multiple_one':
    'Aquest document forma part de la publicació <VersionBadge/> i {{count}} publicació més.',
  /** The text for the banner that appears when there are multiple versions but no drafts or published, more than one extra releases */
  'banners.release.navigate-to-edit-description-multiple_other':
    'Aquest document forma part de la publicació <VersionBadge/> i {{count}} publicacions més',
  /** The text for the banner that appears when a document is not part of any release
   * @deprecated – no longer in use
   * */
  'banners.release.navigate-to-edit-description-none':
    'Aquest document no forma part de cap llançament',
  /** The text for the banner that appears when a document only has one version but is in a draft or published pinned release */
  'banners.release.navigate-to-edit-description-single':
    'Aquest document forma part de la publicació <VersionBadge/>',
  /** The text for the banner that appears when a document is not in the current global release */
  'banners.release.not-in-release':
    'No està a la publicació <VersionBadge>{{title}}</VersionBadge>.',
  /** Description of toast that will appear in case of latency between the user adding a document to a release and the UI reflecting it */
  'banners.release.waiting.description':
    "Espera mentre el document s'afegeix a la publicació. No hauria de trigar més de uns segons.",
  /** Title of toast that will appear in case of latency between the user adding a document to a release and the UI reflecting it */
  'banners.release.waiting.title': 'Afegint document a la publicació…',
  /** The text for the revision not found banner */
  'banners.revision-not-found.description':
    "No hem pogut trobar la revisió del document seleccionada, si us plau seleccioneu una altra entrada de la llista d'historial.",
  /** The text content for the scheduled draft override banner */
  'banners.scheduled-draft-override-banner.text':
    "Existeix un esborrany programat per a aquest document. Si publiqueu canvis ara, seran sobreescrits quan s'executi la programació.",
  /** The text content for the unpublished document banner when is part of a release */
  'banners.unpublished-release-banner.text':
    'Aquest document serà despublicat com a part de la publicació <VersionBadge>{{title}}</VersionBadge>',
  /** The text content for the unpublished document banner letting the user know that the current published version is being shown */
  'banners.unpublished-release-banner.text-with-published':
    'Mostrant la versió <strong>publicada</strong> actual:',

  /** Browser/tab title when creating a new document of a given type */
  'browser-document-title.new-document': 'Nou {{schemaType}}',
  /** Browser/tab title when editing a document where the title cannot be resolved from preview configuration */
  'browser-document-title.untitled-document': 'Sense títol',

  /** The action menu button aria-label */
  'buttons.action-menu-button.aria-label': 'Obre les accions del document',
  /** The action menu button tooltip */
  'buttons.action-menu-button.tooltip': 'Accions del document',
  /** The aria-label for the collapse pane button on the document panel header */
  'buttons.focus-pane-button.aria-label.collapse': 'Col·lapsa tots els panells',
  /** The aria-label for the focus pane button on the document panel header */
  'buttons.focus-pane-button.aria-label.focus': 'Centra el panell',
  /** The tooltip for the collapse pane button on the document panel header */
  'buttons.focus-pane-button.tooltip.collapse': 'Col·lapsa tots els panells',
  /** The tooltip for the focus pane button on the document panel header */
  'buttons.focus-pane-button.tooltip.focus': 'Centra el panell',
  /** The aria-label for the split pane button on the document panel header */
  'buttons.split-pane-button.aria-label': 'Divideix el panell a la dreta',
  /** The tool tip for the split pane button on the document panel header */
  'buttons.split-pane-button.tooltip': 'Divideix el panell a la dreta',
  /** The title for the close button on the split pane on the document panel header */
  'buttons.split-pane-close-button.title': 'Tanca el panell dividit',
  /** The title for the close group button on the split pane on the document panel header */
  'buttons.split-pane-close-group-button.title': 'Tanca el grup de panells',

  /** The text for the canvas linked banner action button */
  'canvas.banner.edit-in-canvas-action': 'Edita a Canvas',
  /** The text for the canvas linked banner when the document in editable mode*/
  'canvas.banner.editable.linked-text': 'Aquest document es pot editar a Canvas.',
  /** The description for the canvas linked banner popover in editable mode*/
  'canvas.banner.editable.popover-description':
    'Canvas et permet escriure lliurement, després actualitzar el contingut a Studio sense haver de copiar manualment camp per camp.',
  /** The heading for the canvas linked banner popover in editable mode*/
  'canvas.banner.editable.popover-heading': 'Escriptura de forma lliure',
  /** The text for the canvas linked banner when the document is a draft */
  'canvas.banner.linked-text.draft': 'Aquest document esborrany està vinculat a Canvas',
  /** The text for the canvas linked banner when the document is a live document */
  'canvas.banner.linked-text.published': 'Aquest document en viu està vinculat a Canvas',
  /** The text for the canvas linked banner when the document is a version document */
  'canvas.banner.linked-text.version': 'Aquest document de versió està vinculat a Canvas',
  /** The text for the canvas linked banner popover button */
  'canvas.banner.popover-button-text': 'Aprèn més',
  /** The description for the canvas linked banner popover */
  'canvas.banner.popover-description':
    'Canvas et permet crear contingut en un editor de forma lliure que es mapeja automàticament al Studio com a contingut estructurat - mentre escrius.',
  /** The heading for the canvas linked banner popover */
  'canvas.banner.popover-heading': 'Creació prioritzant la idea',

  /** The description for the changes banner */
  'changes.banner.description':
    "Mostrant l'historial per a la versió <strong>{{perspective}}</strong> d'aquest document.",
  /** The tooltip for the changes banner */
  'changes.banner.tooltip':
    "Aquesta vista mostra els canvis que han ocorregut en una versió específica d'aquest document. Seleccioneu una versió diferent per veure els seus canvis",
  /** The label used in the changes inspector for the from selector */
  'changes.from.label': 'Des de',
  /* The label for the history tab in the changes inspector*/
  'changes.tab.history': 'Història',
  /* The label for the review tab in the changes inspector*/
  'changes.tab.review-changes': 'Revisa els canvis',
  /** The label used in the changes inspector for the to selector */
  'changes.to.label': 'A',

  /** The error message shown when the specified document comparison mode is not supported */
  'compare-version.error.invalidModeParam':
    '"{{input}}" no és un mode de comparació de documents suportat.',
  /** The error message shown when the next document for comparison could not be extracted from the URL */
  'compare-version.error.invalidNextDocumentParam': 'El paràmetre del següent document és invàlid.',
  /** The error message shown when the document comparison URL could not be parsed */
  'compare-version.error.invalidParams.title': 'Incapaç de comparar documents',
  /** The error message shown when the previous document for comparison could not be extracted from the URL */
  'compare-version.error.invalidPreviousDocumentParam':
    'El paràmetre del document anterior és invàlid.',

  /** The text for the tooltip when the "Compare versions" action for a document is disabled */
  'compare-versions.menu-item.disabled-reason':
    "No hi ha altres versions d'aquest document per comparar.",
  /** The text for the "Compare versions" action for a document */
  'compare-versions.menu-item.title': 'Compara versions',
  /** The string used to label draft documents */
  'compare-versions.status.draft': 'Esborrany',
  /** The string used to label published documents */
  'compare-versions.status.published': 'Publicat',
  /** The title used when comparing versions of a document */
  'compare-versions.title': 'Compara versions',

  /** The text in the "Cancel" button in the confirm delete dialog that cancels the action and closes the dialog */
  'confirm-delete-dialog.cancel-button.text': 'Cancel·la',
  /** Used in `confirm-delete-dialog.cdr-summary.title` */
  'confirm-delete-dialog.cdr-summary.document-count_one': '1 document',
  /** Used in `confirm-delete-dialog.cdr-summary.title` */
  'confirm-delete-dialog.cdr-summary.document-count_other': '{{count}} documents',
  /** The text that appears in the subtitle `<summary>` that lists the datasets below the title */
  'confirm-delete-dialog.cdr-summary.subtitle_one': 'Conjunt de dades: {{datasets}}',
  /** The text that appears in the subtitle `<summary>` that lists the datasets below the title */
  'confirm-delete-dialog.cdr-summary.subtitle_other': 'Datasets: {{datasets}}',
  /** The text that appears in the subtitle `<summary>` that lists the datasets below the title */
  'confirm-delete-dialog.cdr-summary.subtitle_unavailable_one': 'Dataset no disponible',
  /** The text that appears in the subtitle `<summary>` that lists the datasets below the title */
  'confirm-delete-dialog.cdr-summary.subtitle_unavailable_other': 'Datasets no disponibles',
  /** The text that appears in the title `<summary>` that includes the list of CDRs (singular) */
  'confirm-delete-dialog.cdr-summary.title_one': '{{documentCount}} en un altre dataset',
  /** The text that appears in the title `<summary>` that includes the list of CDRs (plural) */
  'confirm-delete-dialog.cdr-summary.title_other': '{{documentCount}} en {{count}} datasets',
  /** Appears when hovering over the copy button to copy */
  'confirm-delete-dialog.cdr-table.copy-id-button.tooltip': "Copia l'ID al porta-retalls",
  /** The header for the dataset column in the list of cross-dataset references found */
  'confirm-delete-dialog.cdr-table.dataset.label': 'Dataset',
  /** The header for the document ID column in the list of cross-dataset references found */
  'confirm-delete-dialog.cdr-table.document-id.label': 'ID del document',
  /** The toast title when the copy button has been clicked but copying failed */
  'confirm-delete-dialog.cdr-table.id-copied-toast.title-failed':
    "No s'ha pogut copiar l'ID del document",
  /** The header for the project ID column in the list of cross-dataset references found */
  'confirm-delete-dialog.cdr-table.project-id.label': 'ID del projecte',
  /** The text in the "Delete anyway" button in the confirm delete dialog that confirms the action */
  'confirm-delete-dialog.confirm-anyway-button.text_delete': 'Esborra de totes maneres',
  /** The text in the "Unpublish anyway" button in the confirm delete dialog that confirms the action */
  'confirm-delete-dialog.confirm-anyway-button.text_unpublish': 'Despublica de totes maneres',
  /** The text in the "Delete now" button in the confirm delete dialog that confirms the action */
  'confirm-delete-dialog.confirm-button.text_delete': 'Esborra ara',
  /** The text in the "Unpublish now" button in the confirm delete dialog that confirms the action */
  'confirm-delete-dialog.confirm-button.text_unpublish': 'Despublica ara',
  /** If no referring documents are found, this text appears above the cancel and confirmation buttons */
  'confirm-delete-dialog.confirmation.text_delete':
    'Estàs segur que vols esborrar “<DocumentTitle/>”?',
  /** If no referring documents are found, this text appears above the cancel and confirmation buttons */
  'confirm-delete-dialog.confirmation.text_unpublish':
    'Estàs segur que vols despublicar “<DocumentTitle/>”?',
  /** The text body of the error dialog. */
  'confirm-delete-dialog.error.message.text':
    "S'ha produït un error en carregar els documents de referència.",
  /** The text in the retry button of the confirm delete dialog if an error occurred. */
  'confirm-delete-dialog.error.retry-button.text': 'Reintenta',
  /** The header of the confirm delete dialog if an error occurred while the confirm delete dialog was open. */
  'confirm-delete-dialog.error.title.text': 'Error',
  /** The header of the confirm delete dialog */
  'confirm-delete-dialog.header.text_delete': 'Vols esborrar el document?',
  /** The header of the confirm delete dialog */
  'confirm-delete-dialog.header.text_unpublish': 'Vols despublicar el document?',
  /** The text that appears while the referring documents are queried */
  'confirm-delete-dialog.loading.text': 'Buscant documents de referència…',
  /** Shown if there are references to other documents but the user does not have the permission to see the relevant document IDs */
  'confirm-delete-dialog.other-reference-count.title_one': '1 altra referència no mostrada',
  /** Shown if there are references to other documents but the user does not have the permission to see the relevant document IDs */
  'confirm-delete-dialog.other-reference-count.title_other':
    '{{count}} altres referències no mostrades',
  /** Text in the tooltip of this component if hovering over the info icon */
  'confirm-delete-dialog.other-reference-count.tooltip':
    "No podem mostrar les metadades d'aquestes referències a causa d'un token d'accés absent per als datasets relacionats.",
  /** Appears when unable to render a document preview in the referring document list */
  'confirm-delete-dialog.preview-item.preview-unavailable.subtitle': 'ID: {{documentId}}',
  /** Appears when unable to render a document preview in the referring document list */
  'confirm-delete-dialog.preview-item.preview-unavailable.title': 'Vista prèvia no disponible',
  /** Warns the user of affects to other documents if the action is confirmed (delete) */
  'confirm-delete-dialog.referential-integrity-disclaimer.text_delete':
    'Si esborres aquest document, els documents que hi fan referència ja no podran accedir-hi.',
  /** Warns the user of affects to other documents if the action is confirmed (unpublish) */
  'confirm-delete-dialog.referential-integrity-disclaimer.text_unpublish':
    'Si deixes de publicar aquest document, els documents que hi fan referència ja no podran accedir-hi.',
  /** Tells the user the count of how many other referring documents there are before listing them. (singular) */
  'confirm-delete-dialog.referring-document-count.text_one':
    '1 document fa referència a “<DocumentTitle/>”',
  /** Tells the user the count of how many other referring documents there are before listing them. (plural) */
  'confirm-delete-dialog.referring-document-count.text_other':
    '{{count}} documents fan referència a “<DocumentTitle/>”',
  /** Describes the list of documents that refer to the one trying to be deleted (delete) */
  'confirm-delete-dialog.referring-documents-descriptor.text_delete':
    'Potser no podràs esborrar “<DocumentTitle/>” perquè els següents documents hi fan referència:',
  /** Describes the list of documents that refer to the one trying to be deleted (unpublish) */
  'confirm-delete-dialog.referring-documents-descriptor.text_unpublish':
    'Potser no podràs deixar de publicar “<DocumentTitle/>” perquè els següents documents hi fan referència:',

  /** The text for the cancel button in the confirm dialog used in document action shortcuts if none is provided */
  'confirm-dialog.cancel-button.fallback-text': 'Cancel·la',
  /** The text for the confirm button in the confirm dialog used in document action shortcuts if none is provided */
  'confirm-dialog.confirm-button.fallback-text': 'Confirma',

  /** For the default structure definition, the title for the "Content" pane */
  'default-definition.content-title': 'Contingut',

  /** The text shown if there was an error while getting the document's title via a preview value */
  'doc-title.error.text': 'Error: {{errorMessage}}',
  /** The text shown if the preview value for a document is non-existent or empty */
  'doc-title.fallback.text': 'Sense títol',
  /** The text shown if a document's title via a preview value cannot be determined due to an unknown schema type */
  'doc-title.unknown-schema-type.text': "Tipus d'esquema desconegut: {{schemaType}}",

  /** Tooltip text shown for the close button of the document inspector */
  'document-inspector.close-button.tooltip': 'Tanca',
  /** The title shown in the dialog header, when inspecting a valid document */
  'document-inspector.dialog.title': 'Inspeccionant <DocumentTitle/>',
  /** The title shown in the dialog header, when the document being inspected is not created yet/has no value */
  'document-inspector.dialog.title-no-value': 'Sense valor',
  /** Title shown for menu item that opens the "Inspect" dialog */
  'document-inspector.menu-item.title': 'Inspecciona',
  /** the placeholder text for the search input on the inspect dialog */
  'document-inspector.search.placeholder': 'Cerca',
  /** The "parsed" view mode, meaning the JSON is searchable, collapsible etc */
  'document-inspector.view-mode.parsed': 'Analitzat',
  /** The "raw" view mode, meaning the JSON is presented syntax-highlighted, but with no other features - optimal for copying */
  'document-inspector.view-mode.raw-json': 'JSON en brut',

  /** The text for when a form is hidden */
  'document-view.form-view.form-hidden': 'Aquest formulari està ocult',
  /** Fallback title shown when a form title is not provided */
  'document-view.form-view.form-title-fallback': 'Sense títol',
  /** The text for when the form view is loading a document */
  'document-view.form-view.loading': 'Carregant document…',
  /** The description of the sync lock toast on the form view */
  'document-view.form-view.sync-lock-toast.description':
    'Espera mentre el document es sincronitza. Això sol passar just després que el document ha estat publicat, i no hauria de trigar més de uns segons',
  /** The title of the sync lock toast on the form view */
  'document-view.form-view.sync-lock-toast.title': 'Sincronitzant document…',

  /** The description for the document favorite action */
  'document.favorites.add-to-favorites': 'Afegir a preferits',
  /** The description for the document unfavorite action */
  'document.favorites.remove-from-favorites': 'Treure de preferits',

  /** The description for the events inspector when we can't load the document so we default to compare with published */
  'events.compare-with-published.description':
    "No podem carregar els canvis d'aquest document, probablement a causa de la política de retenció d'historial del vostre pla, això us mostra com la versió <strong>{{version}}</strong> es compara amb la versió <strong>publicada</strong>.",
  /** The title for the events inspector when we can't load the document so we default to compare with published */
  'events.compare-with-published.title': 'Comparant amb la publicada',
  /**The title for the menu items that will be shown when expanding a publish release event to inspect the document */
  'events.inspect.release': 'Inspeccionar <VersionBadge>{{releaseTitle}}</VersionBadge> document',
  /**The title for the menu items that will be shown when expanding a publish draft event to inspect the draft document*/
  'events.open.draft': 'Obrir <VersionBadge>esborrany</VersionBadge> document',
  /**The title for the menu items that will be shown when expanding a publish release event to inspect the release*/
  'events.open.release': 'Obrir <VersionBadge>{{releaseTitle}}</VersionBadge> alliberament',

  /** The loading messaging for when the tooltip is still loading permission info */
  'insufficient-permissions-message-tooltip.loading-text': 'Carregant…',

  /** --- Menu items --- */
  /** The menu item group title to use for the Action menu items */
  'menu-item-groups.actions-group': 'Accions',
  /** The menu item group title to use for the Layout menu items */
  'menu-item-groups.layout-group': 'Disposició',
  /** The menu item group title to use for the Sort menu items */
  'menu-item-groups.sorting-group': 'Ordenar',

  /** The menu item title to use the compact view */
  'menu-items.layout.compact-view': 'Vista compacta',
  /** The menu item title to use the detailed view */
  'menu-items.layout.detailed-view': 'Vista detallada',
  /** The menu item title to Sort by Created */
  'menu-items.sort-by.created': 'Ordenar per Creat',
  /** The menu item title to Sort by Last Edited */
  'menu-items.sort-by.last-edited': 'Ordenar per Última edició',

  /** The link text of the no document type screen that appears directly below the subtitle */
  'no-document-types-screen.link-text': 'Aprèn com afegir un tipus de document →',
  /** The subtitle of the no document type screen that appears directly below the title */
  'no-document-types-screen.subtitle':
    'Si us plau, defineix almenys un tipus de document en el teu esquema.',
  /** The title of the no document type screen */
  'no-document-types-screen.title': 'No hi ha tipus de documents',

  /** Text shown on back button visible on smaller breakpoints */
  'pane-header.back-button.text': 'Enrere',
  /** tooltip text (via `title` attribute) for the menu button */
  'pane-header.context-menu-button.tooltip': 'Mostrar menú',
  /** Appears in a document list pane header if there are more than one option for create. This is the label for that menu */
  'pane-header.create-menu.label': 'Crear',
  /** Tooltip displayed on the create new button in document lists */
  'pane-header.create-new-button.tooltip': 'Crear nou document',
  /** The `aria-label` for the disabled button in the pane header if create permissions are granted */
  'pane-header.disabled-created-button.aria-label': 'Permisos insuficients',

  /** The text shown in the tooltip of pane item previews of documents if there are unpublished edits */
  'pane-item.draft-status.has-draft.tooltip': 'Editat <RelativeTime/>',
  /** The text shown in the tooltip of pane item previews of documents if there are no unpublished edits */
  'pane-item.draft-status.no-draft.tooltip': 'Sense edicions no publicades',
  /** The subtitle tor pane item previews if there isn't a matching schema type found */
  'pane-item.missing-schema-type.subtitle': 'Document: <Code>{{documentId}}</Code>',
  /** The title tor pane item previews if there isn't a matching schema type found */
  'pane-item.missing-schema-type.title':
    "No s'ha trobat l'esquema per al tipus <Code>{{documentType}}</Code>",
  /** The text shown in the tooltip of pane item previews of documents if there are unpublished edits */
  'pane-item.published-status.has-published.tooltip': 'Publicat <RelativeTime/>',
  /** The text shown in the tooltip of pane item previews of documents if there are no unpublished edits */
  'pane-item.published-status.no-published.tooltip': 'No hi ha edicions sense publicar',

  /** The text used in the document header title if there is an error */
  'panes.document-header-title.error.text': 'Error: {{error}}',
  /** The text used in the document header title if creating a new item */
  'panes.document-header-title.new.text': 'Nou {{schemaType}}',
  /** The text used in the document header title if no other title can be determined */
  'panes.document-header-title.untitled.text': 'Sense títol',
  /** The help text saying that we'll retry fetching the document list */
  'panes.document-list-pane.error.retrying': 'Tornant a intentar…',
  /** The error text on the document list pane */
  'panes.document-list-pane.error.text': 'Error: <Code>{{error}}</Code>',
  /** The error text on the document list pane */
  'panes.document-list-pane.error.text.dev': 'Error: <Code>{{error}}</Code>',
  /** The error text on the document list pane if the browser appears to be offlline */
  'panes.document-list-pane.error.text.offline':
    'La connexió a Internet sembla estar fora de línia.',
  /** The error title on the document list pane */
  'panes.document-list-pane.error.title': "No s'han pogut obtenir els elements de la llista",
  /** The help text saying that we'll retry fetching the document list */
  'panes.document-list-pane.error.will-retry-automatically_one': 'Tornant a intentar…',
  'panes.document-list-pane.error.will-retry-automatically_other':
    'Tornant a intentar… (#{{count}}).',
  /** The text of the document list pane if more than a maximum number of documents are returned */
  'panes.document-list-pane.max-items.text': 'Mostrant un màxim de {{limit}} documents',
  /** The text of the document list pane if no documents are found for a specified type */
  'panes.document-list-pane.no-documents-of-type.text': "No hi ha documents d'aquest tipus",
  /** The text of the document list pane if no documents are found */
  'panes.document-list-pane.no-documents.text': "No s'han trobat resultats",
  /** The text of the document list pane if no documents are found matching specified criteria */
  'panes.document-list-pane.no-matching-documents.text': 'No hi ha documents coincidents',
  /** The search input for the search input on the document list pane */
  'panes.document-list-pane.reconnecting': 'Intentant connectar…',
  /** The aria-label for the search input on the document list pane */
  'panes.document-list-pane.search-input.aria-label': 'Cerca a la llista',
  /** The search input for the search input on the document list pane */
  'panes.document-list-pane.search-input.placeholder': 'Cerca a la llista',
  /** The summary title when displaying an error for a document operation result */
  'panes.document-operation-results.error.summary.title': 'Detalls',
  /** The text when a generic operation failed (fallback, generally not shown)  */
  'panes.document-operation-results.operation-error': "S'ha produït un error durant {{context}}",
  /** The text when a delete operation failed  */
  'panes.document-operation-results.operation-error_delete':
    "S'ha produït un error en intentar eliminar aquest document. Això normalment significa que hi ha altres documents que el referencien.",
  /** The text when an unpublish operation failed  */
  'panes.document-operation-results.operation-error_unpublish':
    "S'ha produït un error en intentar despublicar aquest document. Això normalment significa que hi ha altres documents que el referencien.",
  /** The text when a generic operation succeeded (fallback, generally not shown)  */
  'panes.document-operation-results.operation-success':
    "S'ha realitzat amb èxit {{op}} en el document",
  /** The text when copy URL operation succeeded  */
  'panes.document-operation-results.operation-success_copy-url':
    "L'URL del document s'ha copiat al porta-retalls",
  /**  */
  'panes.document-operation-results.operation-success_createVersion':
    "<Strong>{{title}}</Strong> s'ha afegit a la publicació",
  /** The text when a delete operation succeeded  */
  'panes.document-operation-results.operation-success_delete': "El document s'ha eliminat amb èxit",
  /** The text when a discard changes operation succeeded  */
  'panes.document-operation-results.operation-success_discardChanges':
    "Tots els canvis des de la darrera publicació s'han descartat. L'esborrany descartat encara es pot recuperar de l'historial",
  /** The text when a duplicate operation succeeded  */
  'panes.document-operation-results.operation-success_duplicate':
    "El document s'ha duplicat amb èxit",
  /** The text when a publish operation succeeded  */
  'panes.document-operation-results.operation-success_publish':
    "<Strong>{{title}}</Strong> s'ha publicat",
  /** The text when a restore operation succeeded  */
  'panes.document-operation-results.operation-success_restore':
    '<Strong>{{title}}</Strong> ha estat restaurat',
  /** The text when an unpublish operation succeeded  */
  'panes.document-operation-results.operation-success_unpublish':
    "<Strong>{{title}}</Strong> ha estat despublicat. S'ha creat un esborrany a partir de l'última revisió publicada.",
  /** The document title shown when document title is "undefined" in operation message */
  'panes.document-operation-results.operation-undefined-title': 'Sense títol',
  /** The loading message for the document not found pane */
  'panes.document-pane.document-not-found.loading': 'Carregant document…',
  /** The text of the document not found pane if the schema is known */
  'panes.document-pane.document-not-found.text':
    "El tipus de document no està definit, i no s'ha pogut trobar un document amb l'identificador <Code>{{id}}</Code>.",
  /** The title of the document not found pane if the schema is known */
  'panes.document-pane.document-not-found.title': "El document no s'ha trobat",
  /** The text of the document not found pane if the schema is not found */
  'panes.document-pane.document-unknown-type.text':
    "Aquest document té el tipus d'esquema <Code>{{documentType}}</Code>, que no està definit com a tipus en l'esquema local del content studio.",
  /** The title of the document not found pane if the schema is not found or unknown */
  'panes.document-pane.document-unknown-type.title':
    'Tipus de document desconegut: <Code>{{documentType}}</Code>',
  /** The title of the document not found pane if the schema is unknown */
  'panes.document-pane.document-unknown-type.without-schema.text':
    "Aquest document no existeix, i no s'ha especificat cap tipus d'esquema per a ell.",
  /** Default message shown while resolving the structure definition for an asynchronous node */
  'panes.resolving.default-message': 'Carregant…',
  /** Message shown while resolving the structure definition for an asynchronous node and it is taking a while (more than 5s) */
  'panes.resolving.slow-resolve-message': 'Encara carregant…',
  /** The text to display when type is missing */
  'panes.unknown-pane-type.missing-type.text':
    "A l'element d'estructura li falta la propietat <Code>type</Code> requerida.",
  /** The title of the unknown pane */
  'panes.unknown-pane-type.title': 'Tipus de panell desconegut',
  /** The text to display when type is unknown */
  'panes.unknown-pane-type.unknown-type.text':
    "L'element d'estructura de tipus <Code>{{type}}</Code> no és una entitat coneguda.",

  /** The text for the "Open preview" action for a document */
  'production-preview.menu-item.title': 'Obrir vista prèvia',

  /** The text for the confirm button in the request permission dialog used in the permissions banner */
  'request-permission-dialog.confirm-button.text': 'Enviar sol·licitud',
  /** The description text for the request permission dialog used in the permissions banner */
  'request-permission-dialog.description.text':
    'La teva sol·licitud serà enviada als administradors del projecte. Si vols, també pots incloure una nota',
  /** The header/title for the request permission dialog used in the permissions banner */
  'request-permission-dialog.header.text': "Demanar accés d'edició",
  /** The text describing the note input for the request permission dialog used in the permissions banner */
  'request-permission-dialog.note-input.description.text': 'Si vols, pots afegir una nota',
  /** The placeholder for the note input in the request permission dialog used in the permissions banner */
  'request-permission-dialog.note-input.placeholder.text': 'Afegir nota...',
  /** The error/warning text in the request permission dialog when the user's request has been declined */
  'request-permission-dialog.warning.denied.text':
    'La teva sol·licitud per accedir a aquest projecte ha estat rebutjada.',
  /** The error/warning text in the request permission dialog when the user's request has been denied due to too many outstanding requests */
  'request-permission-dialog.warning.limit-reached.text':
    'Has arribat al límit de sol·licituds de rol en tots els projectes. Si us plau, espera abans de presentar més sol·licituds o contacta amb un administrador per obtenir ajuda.',

  /** Label for button when status is saved */
  'status-bar.document-status-pulse.status.saved.text': 'Desat',
  /** Label for button when status is syncing */
  'status-bar.document-status-pulse.status.syncing.text': 'Desant...',
  /** Accessibility label indicating when the document was last published, in relative time, eg "3 weeks ago" */
  'status-bar.publish-status-button.last-published-time.aria-label':
    'Última publicació {{relativeTime}}',
  /** Text for tooltip showing explanation of timestamp/relative time, eg "Last published <RelativeTime/>" */
  'status-bar.publish-status-button.last-published-time.tooltip':
    'Darrera publicació <RelativeTime/>',
  /** Accessibility label indicating when the document was last updated, in relative time, eg "2 hours ago" */
  'status-bar.publish-status-button.last-updated-time.aria-label':
    'Darrera actualització {{relativeTime}}',
  /** Text for tooltip showing explanation of timestamp/relative time, eg "Last updated <RelativeTime/>" */
  'status-bar.publish-status-button.last-updated-time.tooltip':
    'Darrera actualització <RelativeTime/>',
  /** Aria label for the button */
  'status-bar.review-changes-button.aria-label': 'Revisar canvis',
  /** Label for button when status is saved */
  'status-bar.review-changes-button.status.saved.text': 'Desat!',
  /** Label for button when status is syncing */
  'status-bar.review-changes-button.status.syncing.text': 'Desant...',
  /** Text for the secondary text for tooltip for the button */
  'status-bar.review-changes-button.tooltip.changes-saved': 'Canvis desats',
  /** Primary text for tooltip for the button */
  'status-bar.review-changes-button.tooltip.text': 'Revisar canvis',

  /** The text that appears in side the documentation link */
  'structure-error.docs-link.text': 'Veure documentació',
  /** Labels the error message or error stack of the structure error screen */
  'structure-error.error.label': 'Error',
  /** The header that appears at the top of the error screen */
  'structure-error.header.text': "S'ha trobat un error en llegir l'estructura",
  /** The text in the reload button to retry rendering the structure */
  'structure-error.reload-button.text': 'Recarregar',
  /** Labels the structure path of the structure error screen */
  'structure-error.structure-path.label': "Camí de l'estructura",

  /** The aria label for the menu button in the timeline item */
  'timeline-item.menu-button.aria-label': "Obrir menú d'accions",
  /** The text for the tooltip in menu button the timeline item */
  'timeline-item.menu-button.tooltip': 'Accions',
  /** The text for the collapse action in the timeline item menu */
  'timeline-item.menu.action-collapse': 'Col·lapsar',
  /** The text for the expand action in the timeline item menu */
  'timeline-item.menu.action-expand': 'Expandir',
  /** The text for the published event menu tooltip when the release is not found */
  'timeline-item.not-found-release.tooltip': 'No s\'ha trobat la publicació amb id "{{releaseId}}"',

  /** The text for the "Inline changes" action, which is used to toggle the visibility of content diffs inside inputs */
  'toggle-inline-changes.menu-item.title': 'Canvis en línia',
})
