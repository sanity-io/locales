import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Label for the "Copy Document URL" document action */
  'action.copy-document-url.label': 'Copia URL documento',
  /** Tooltip when action button is disabled because the operation is not ready   */
  'action.delete.disabled.not-ready': 'Operazione non pronta',
  /** Tooltip when action button is disabled because the document does not exist */
  'action.delete.disabled.nothing-to-delete':
    'Questo documento non esiste ancora o è già stato eliminato',
  /** Label for the "Delete" document action button */
  'action.delete.label': 'Elimina',
  /** Label for the "Delete" document action while the document is being deleted */
  'action.delete.running.label': 'Eliminazione in corso…',
  /** Tooltip when action is disabled because the document is linked to Canvas */
  'action.disabled-by-canvas.tooltip':
    'Alcune azioni sui documenti sono disabilitate per i documenti collegati a Canvas',
  /** Message prompting the user to confirm discarding changes */
  'action.discard-changes.confirm-dialog.confirm-discard-changes':
    'Sei sicuro di voler annullare tutte le modifiche dall’ultima pubblicazione?',
  /** Tooltip when action is disabled because the document has no unpublished changes */
  'action.discard-changes.disabled.no-change': 'Questo documento non ha modifiche non pubblicate',
  /** Tooltip when action is disabled because the document is not published */
  'action.discard-changes.disabled.not-published': 'Questo documento non è pubblicato',
  /** Tooltip when action button is disabled because the operation is not ready   */
  'action.discard-changes.disabled.not-ready': 'Operazione non pronta',
  /** Label for the "Discard changes" document action */
  'action.discard-changes.label': 'Annulla modifiche',
  /** Tooltip when action is disabled because the operation is not ready   */
  'action.duplicate.disabled.not-ready': 'Operazione non pronta',
  /** Tooltip when action is disabled because the document doesn't exist */
  'action.duplicate.disabled.nothing-to-duplicate':
    "Questo documento non esiste ancora quindi non c'è nulla da duplicare",
  /** Label for the "Duplicate" document action */
  'action.duplicate.label': 'Duplica',
  /** Label for the "Duplicate" document action while the document is being duplicated */
  'action.duplicate.running.label': 'Duplicazione in corso…',
  /** Tooltip when publish button is disabled because the document is already published, and published time is unavailable.*/
  'action.publish.already-published.no-time-ago.tooltip': 'Già pubblicato',
  /** Tooltip when publish button is disabled because the document is already published.*/
  'action.publish.already-published.tooltip': 'Pubblicato {{timeSincePublished}} fa',
  /** Tooltip when action is disabled because the studio is not ready.*/
  'action.publish.disabled.not-ready': 'Operazione non pronta',
  /** Label for action when there are pending changes.*/
  'action.publish.draft.label': 'Pubblica',
  /** Label for the "Publish" document action */
  'action.publish.label': 'Pubblica',
  /** Label for the "Publish" document action when the document has live edit enabled.*/
  'action.publish.live-edit.label': 'Pubblica',
  /** Fallback tooltip for the "Publish" document action when publish is invoked for a document with live edit enabled.*/
  'action.publish.live-edit.publish-disabled':
    'Impossibile pubblicare poiché la modifica in tempo reale è abilitata per questo tipo di documento',
  /** Tooltip for the "Publish" document action when the document has live edit enabled.*/
  'action.publish.live-edit.tooltip':
    'La modifica in tempo reale è abilitata per questo tipo di contenuto e la pubblicazione avviene automaticamente mentre apporti modifiche',
  /** Tooltip when publish button is disabled because there are no changes.*/
  'action.publish.no-changes.tooltip': 'Nessuna modifica non pubblicata',
  /** Label for the "Publish" document action when there are no changes.*/
  'action.publish.published.label': 'Pubblicato',
  /** Label for the "Publish" document action while publish is being executed.*/
  'action.publish.running.label': 'Pubblicazione in corso…',
  /** Tooltip when the "Publish" document action is disabled due to validation issues */
  'action.publish.validation-issues.tooltip':
    'Ci sono errori di validazione che devono essere risolti prima che questo documento possa essere pubblicato',
  /** Tooltip when publish button is waiting for validation and async tasks to complete.*/
  'action.publish.waiting': 'In attesa che le attività vengano completate prima di pubblicare',
  /** Message prompting the user to confirm that they want to restore to an earlier revision*/
  'action.restore.confirm.message': 'Sei sicuro di voler ripristinare questo documento?',
  /** Fallback tooltip for when user is looking at the initial revision */
  'action.restore.disabled.cannot-restore-initial':
    'Non è possibile ripristinare alla versione iniziale',
  /** Label for the "Restore" document action */
  'action.restore.label': 'Ripristina',
  /** Default tooltip for the action */
  'action.restore.tooltip': 'Ripristina a questa versione',
  /** Tooltip when action is disabled because the document is not already published */
  'action.unpublish.disabled.not-published': 'Questo documento non è pubblicato',
  /** Tooltip when action is disabled because the operation is not ready   */
  'action.unpublish.disabled.not-ready': 'Operazione non pronta',
  /** Label for the "Unpublish" document action */
  'action.unpublish.label': 'Rimuovi pubblicazione',
  /** Fallback tooltip for the Unpublish document action when publish is invoked for a document with live edit enabled.*/
  'action.unpublish.live-edit.disabled':
    'Questo documento ha la modifica in tempo reale abilitata e non può essere ritirato dalla pubblicazione',

  /** Description for the archived release banner, rendered when viewing the history of a version document from the publihed view */
  'banners.archived-release.description':
    'Stai visualizzando un documento in sola lettura che è stato archiviato come parte di <VersionBadge>{{title}}</VersionBadge>. Non può essere modificato',
  /** The explanation displayed when a user attempts to create a new draft document, but the draft model is not switched on */
  'banners.choose-new-document-destination.cannot-create-draft-document': undefined, // 'Cannot create a draft document.'
  /** The explanation displayed when a user attempts to create a new published document, but the schema type doesn't support live-editing */
  'banners.choose-new-document-destination.cannot-create-published-document': undefined, // 'Cannot create a published document.'
  /** The prompt displayed when a user must select a different perspective in order to create a document */
  'banners.choose-new-document-destination.choose-destination': undefined, // 'Choose a destination for this document:'
  /** The explanation displayed when a user attempts to create a new document in a release, but the selected release is inactive */
  'banners.choose-new-document-destination.release-inactive': undefined, // 'The <VersionBadge>{{title}}</VersionBadge> release is not active.'
  /** The text for the restore button on the deleted document banner */
  'banners.deleted-document-banner.restore-button.text': 'Ripristina la versione più recente',
  /** The text content for the deleted document banner */
  'banners.deleted-document-banner.text': 'Questo documento è stato eliminato.',
  /** The text content for the deprecated document type banner */
  'banners.deprecated-document-type-banner.text': 'Questo tipo di documento è stato deprecato.',
  /** The text for publish action for discarding the version */
  'banners.live-edit-draft-banner.discard.tooltip': 'Scarta bozza',
  /** The text for publish action for the draft banner */
  'banners.live-edit-draft-banner.publish.tooltip': 'Pubblica per continuare a modificare',
  /** The text content for the live edit document when it's a draft */
  'banners.live-edit-draft-banner.text':
    'Il tipo <strong>{{schemaType}}</strong> ha <code>liveEdit</code> abilitato, ma esiste una versione bozza di questo documento. Pubblica o scarta la bozza per continuare a modificarlo dal vivo.',
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
    'Il tuo ruolo <Roles/> non ha i permessi per creare questo documento.',
  /** The text for the permission check banner if the user only has multiple roles, but they do not allow publishing this document */
  'banners.permission-check-banner.missing-permission_create_other':
    'I tuoi ruoli <Roles/> non hanno i permessi per creare questo documento.',
  /** The text for the permission check banner if the user only has one role, and it does not allow editing this document */
  'banners.permission-check-banner.missing-permission_update_one':
    'Il tuo ruolo <Roles/> non ha i permessi per aggiornare questo documento.',
  /** The text for the permission check banner if the user only has multiple roles, but they do not allow editing this document */
  'banners.permission-check-banner.missing-permission_update_other':
    'I tuoi ruoli <Roles/> non hanno i permessi per aggiornare questo documento.',
  /** The pending text for the request permission button that appears for viewer roles */
  'banners.permission-check-banner.request-permission-button.sent': 'Richiesta di editor inviata',
  /** The text for the request permission button that appears for viewer roles */
  'banners.permission-check-banner.request-permission-button.text': 'Chiedi di modificare',
  /** Description for the archived release banner, rendered when viewing the history of a version document from the published view */
  'banners.published-release.description':
    'Stai visualizzando un documento in sola lettura che è stato pubblicato come parte di <VersionBadge>{{title}}</VersionBadge>. Non può essere modificato',
  /** The text for the reload button */
  'banners.reference-changed-banner.reason-changed.reload-button.text': 'Ricarica riferimento',
  /** The text for the reference change banner if the reason is that the reference has been changed */
  'banners.reference-changed-banner.reason-changed.text':
    'Questo riferimento è cambiato da quando lo hai aperto.',
  /** The text for the close button */
  'banners.reference-changed-banner.reason-removed.close-button.text': 'Chiudi riferimento',
  /** The text for the reference change banner if the reason is that the reference has been deleted */
  'banners.reference-changed-banner.reason-removed.text':
    'Questo riferimento è stato rimosso da quando lo hai aperto.',
  /** The text that appears for the action button to add the current document to the global release */
  'banners.release.action.add-to-release': 'Aggiungi alla release',
  /** The text that appears for the action button to add the current document to the global release */
  'banners.release.action.open-to-edit': 'Apri la release per modificare',
  /** Toast description in case an error occurs when adding a document to a release  */
  'banners.release.error.description':
    "Si è verificato un errore durante l'aggiunta del documento alla release: {{message}}",
  /** Toast title in case an error occurs when adding a document to a release  */
  'banners.release.error.title': "Errore nell'aggiunta del documento alla release",
  /** The text for the banner that appears when a document only has versions but is in a draft or published pinned release */
  'banners.release.navigate-to-edit-description': 'Il documento esiste solo nella',
  /** The text for the banner that appears when a document only has versions but is in a draft or published pinned release */
  'banners.release.navigate-to-edit-description-end_one': 'release',
  /** The text for the banner that appears when a document only has versions but is in a draft or published pinned release */
  'banners.release.navigate-to-edit-description-end_other': 'releases',
  /** The text for the banner that appears when there are multiple versions but no drafts or published, only one extra releases */
  'banners.release.navigate-to-edit-description-multiple_one':
    'Questo documento fa parte della release <VersionBadge/> e di {{count}} altra release.',
  /** The text for the banner that appears when there are multiple versions but no drafts or published, more than one extra releases */
  'banners.release.navigate-to-edit-description-multiple_other':
    'Questo documento fa parte della release <VersionBadge/> e di altre {{count}} releases',
  /** The text for the banner that appears when a document only has one version but is in a draft or published pinned release */
  'banners.release.navigate-to-edit-description-single':
    'Questo documento fa parte della release <VersionBadge/>',
  /** The text for the banner that appears when a document is not in the current global release */
  'banners.release.not-in-release':
    'Non presente nella release <VersionBadge>{{title}}</VersionBadge>.',
  /** Description of toast that will appear in case of latency between the user adding a document to a release and the UI reflecting it */
  'banners.release.waiting.description':
    'Attendere mentre il documento viene aggiunto alla release. Non dovrebbe richiedere più di qualche secondo.',
  /** Title of toast that will appear in case of latency between the user adding a document to a release and the UI reflecting it */
  'banners.release.waiting.title': 'Aggiunta del documento alla release in corso…',
  /** The text for the revision not found banner */
  'banners.revision-not-found.description':
    "Non siamo riusciti a trovare la revisione del documento selezionata, si prega di selezionare un'altra voce dall'elenco della cronologia.",
  /** The text content for the unpublished document banner when is part of a release */
  'banners.unpublished-release-banner.text':
    'Questo documento sarà ritirato come parte della release <VersionBadge>{{title}}</VersionBadge>',
  /** The text content for the unpublished document banner letting the user know that the current published version is being shown */
  'banners.unpublished-release-banner.text-with-published': undefined, // 'Showing the current <strong>published</strong> version:'

  /** Browser/tab title when creating a new document of a given type */
  'browser-document-title.new-document': 'Nuovo {{schemaType}}',
  /** Browser/tab title when editing a document where the title cannot be resolved from preview configuration */
  'browser-document-title.untitled-document': 'Senza titolo',

  /** The action menu button aria-label */
  'buttons.action-menu-button.aria-label': 'Apri le azioni del documento',
  /** The action menu button tooltip */
  'buttons.action-menu-button.tooltip': 'Azioni documento',
  /** The aria-label for the split pane button on the document panel header */
  'buttons.split-pane-button.aria-label': 'Dividi pannello a destra',
  /** The tool tip for the split pane button on the document panel header */
  'buttons.split-pane-button.tooltip': 'Dividi pannello a destra',
  /** The title for the close button on the split pane on the document panel header */
  'buttons.split-pane-close-button.title': 'Chiudi pannello diviso',
  /** The title for the close group button on the split pane on the document panel header */
  'buttons.split-pane-close-group-button.title': 'Chiudi gruppo di pannelli',

  /** The text for the canvas linked banner action button */
  'canvas.banner.edit-in-canvas-action': 'Modifica in Canvas',
  /** The text for the canvas linked banner when the document is a draft */
  'canvas.banner.linked-text.draft': 'Questo documento bozza è collegato a Canvas',
  /** The text for the canvas linked banner when the document is a live document */
  'canvas.banner.linked-text.published': 'Questo documento live è collegato a Canvas',
  /** The text for the canvas linked banner when the document is a version document */
  'canvas.banner.linked-text.version': 'Questo documento versione è collegato a Canvas',
  /** The text for the canvas linked banner popover button */
  'canvas.banner.popover-button-text': 'Scopri di più',
  /** The description for the canvas linked banner popover */
  'canvas.banner.popover-description':
    'Canvas ti permette di scrivere in un editor libero che mappa automaticamente al Studio come contenuto strutturato - mentre digiti.',
  /** The heading for the canvas linked banner popover */
  'canvas.banner.popover-heading': "Scrittura incentrata sull'idea",

  /** The description for the changes banner */
  'changes.banner.description':
    'Mostra la cronologia per la versione <strong>{{perspective}}</strong> di questo documento.',
  /** The tooltip for the changes banner */
  'changes.banner.tooltip':
    'Questa vista mostra i cambiamenti che sono avvenuti in una specifica versione di questo documento. Seleziona una versione diversa per vedere i suoi cambiamenti',
  /** The label used in the changes inspector for the from selector */
  'changes.from.label': 'Da',
  /* The label for the history tab in the changes inspector*/
  'changes.tab.history': 'Cronologia',
  /* The label for the review tab in the changes inspector*/
  'changes.tab.review-changes': 'Rivedi modifiche',
  /** The label used in the changes inspector for the to selector */
  'changes.to.label': 'A',

  /** The error message shown when the specified document comparison mode is not supported */
  'compare-version.error.invalidModeParam':
    '"{{input}}" non è una modalità di confronto documenti supportata.',
  /** The error message shown when the next document for comparison could not be extracted from the URL */
  'compare-version.error.invalidNextDocumentParam':
    'Il parametro del documento successivo non è valido.',
  /** The error message shown when the document comparison URL could not be parsed */
  'compare-version.error.invalidParams.title': 'Impossibile confrontare i documenti',
  /** The error message shown when the previous document for comparison could not be extracted from the URL */
  'compare-version.error.invalidPreviousDocumentParam':
    'Il parametro del documento precedente non è valido.',

  /** The text for the tooltip when the "Compare versions" action for a document is disabled */
  'compare-versions.menu-item.disabled-reason':
    'Non ci sono altre versioni di questo documento da confrontare.',
  /** The text for the "Compare versions" action for a document */
  'compare-versions.menu-item.title': 'Confronta versioni',
  /** The string used to label draft documents */
  'compare-versions.status.draft': 'Bozza',
  /** The string used to label published documents */
  'compare-versions.status.published': 'Pubblicato',
  /** The title used when comparing versions of a document */
  'compare-versions.title': 'Confronta versioni',

  /** The text in the "Cancel" button in the confirm delete dialog that cancels the action and closes the dialog */
  'confirm-delete-dialog.cancel-button.text': 'Annulla',
  /** Used in `confirm-delete-dialog.cdr-summary.title` */
  'confirm-delete-dialog.cdr-summary.document-count_one': '1 documento',
  /** Used in `confirm-delete-dialog.cdr-summary.title` */
  'confirm-delete-dialog.cdr-summary.document-count_other': '{{count}} documenti',
  /** The text that appears in the subtitle `<summary>` that lists the datasets below the title */
  'confirm-delete-dialog.cdr-summary.subtitle_one': 'Dataset: {{datasets}}',
  /** The text that appears in the subtitle `<summary>` that lists the datasets below the title */
  'confirm-delete-dialog.cdr-summary.subtitle_other': 'Dataset: {{datasets}}',
  /** The text that appears in the subtitle `<summary>` that lists the datasets below the title */
  'confirm-delete-dialog.cdr-summary.subtitle_unavailable_one': 'Dataset non disponibile',
  /** The text that appears in the subtitle `<summary>` that lists the datasets below the title */
  'confirm-delete-dialog.cdr-summary.subtitle_unavailable_other': 'Dataset non disponibili',
  /** The text that appears in the title `<summary>` that includes the list of CDRs (singular) */
  'confirm-delete-dialog.cdr-summary.title_one': '{{documentCount}} in un altro dataset',
  /** The text that appears in the title `<summary>` that includes the list of CDRs (plural) */
  'confirm-delete-dialog.cdr-summary.title_other': '{{documentCount}} in {{count}} dataset',
  /** Appears when hovering over the copy button to copy */
  'confirm-delete-dialog.cdr-table.copy-id-button.tooltip': 'Copia ID negli appunti',
  /** The header for the dataset column in the list of cross-dataset references found */
  'confirm-delete-dialog.cdr-table.dataset.label': 'Dataset',
  /** The header for the document ID column in the list of cross-dataset references found */
  'confirm-delete-dialog.cdr-table.document-id.label': 'ID del documento',
  /** The toast title when the copy button has been clicked but copying failed */
  'confirm-delete-dialog.cdr-table.id-copied-toast.title-failed':
    "Copia dell'ID del documento non riuscita",
  /** The header for the project ID column in the list of cross-dataset references found */
  'confirm-delete-dialog.cdr-table.project-id.label': 'ID del progetto',
  /** The text in the "Delete anyway" button in the confirm delete dialog that confirms the action */
  'confirm-delete-dialog.confirm-anyway-button.text_delete': 'Elimina comunque',
  /** The text in the "Unpublish anyway" button in the confirm delete dialog that confirms the action */
  'confirm-delete-dialog.confirm-anyway-button.text_unpublish': 'Rimuovi pubblicazione comunque',
  /** The text in the "Delete now" button in the confirm delete dialog that confirms the action */
  'confirm-delete-dialog.confirm-button.text_delete': 'Elimina ora',
  /** The text in the "Unpublish now" button in the confirm delete dialog that confirms the action */
  'confirm-delete-dialog.confirm-button.text_unpublish': 'Rimuovi pubblicazione ora',
  /** If no referring documents are found, this text appears above the cancel and confirmation buttons */
  'confirm-delete-dialog.confirmation.text_delete':
    'Sei sicuro di voler eliminare “<DocumentTitle/>”?',
  /** If no referring documents are found, this text appears above the cancel and confirmation buttons */
  'confirm-delete-dialog.confirmation.text_unpublish':
    'Sei sicuro di voler rimuovere la pubblicazione di “<DocumentTitle/>”?',
  /** The text body of the error dialog. */
  'confirm-delete-dialog.error.message.text':
    'Si è verificato un errore durante il caricamento dei documenti di riferimento.',
  /** The text in the retry button of the confirm delete dialog if an error occurred. */
  'confirm-delete-dialog.error.retry-button.text': 'Riprova',
  /** The header of the confirm delete dialog if an error occurred while the confirm delete dialog was open. */
  'confirm-delete-dialog.error.title.text': 'Errore',
  /** The header of the confirm delete dialog */
  'confirm-delete-dialog.header.text_delete': 'Eliminare il documento?',
  /** The header of the confirm delete dialog */
  'confirm-delete-dialog.header.text_unpublish': 'Rimuovere la pubblicazione del documento?',
  /** The text that appears while the referring documents are queried */
  'confirm-delete-dialog.loading.text': 'Ricerca dei documenti di riferimento in corso…',
  /** Shown if there are references to other documents but the user does not have the permission to see the relevant document IDs */
  'confirm-delete-dialog.other-reference-count.title_one': '1 altro riferimento non mostrato',
  /** Shown if there are references to other documents but the user does not have the permission to see the relevant document IDs */
  'confirm-delete-dialog.other-reference-count.title_other':
    '{{count}} altri riferimenti non mostrati',
  /** Text in the tooltip of this component if hovering over the info icon */
  'confirm-delete-dialog.other-reference-count.tooltip':
    'Non possiamo visualizzare i metadati per questi riferimenti a causa di un token di accesso mancante per i dataset correlati.',
  /** Appears when unable to render a document preview in the referring document list */
  'confirm-delete-dialog.preview-item.preview-unavailable.subtitle': 'ID: {{documentId}}',
  /** Appears when unable to render a document preview in the referring document list */
  'confirm-delete-dialog.preview-item.preview-unavailable.title': 'Anteprima non disponibile',
  /** Warns the user of affects to other documents if the action is confirmed (delete) */
  'confirm-delete-dialog.referential-integrity-disclaimer.text_delete':
    'Se elimini questo documento, i documenti che vi fanno riferimento non saranno più in grado di accedervi.',
  /** Warns the user of affects to other documents if the action is confirmed (unpublish) */
  'confirm-delete-dialog.referential-integrity-disclaimer.text_unpublish':
    'Se rimuovi la pubblicazione di questo documento, i documenti che vi fanno riferimento non saranno più in grado di accedervi.',
  /** Tells the user the count of how many other referring documents there are before listing them. (singular) */
  'confirm-delete-dialog.referring-document-count.text_one':
    '1 documento fa riferimento a “<DocumentTitle/>”',
  /** Tells the user the count of how many other referring documents there are before listing them. (plural) */
  'confirm-delete-dialog.referring-document-count.text_other':
    '{{count}} documenti fanno riferimento a “<DocumentTitle/>”',
  /** Describes the list of documents that refer to the one trying to be deleted (delete) */
  'confirm-delete-dialog.referring-documents-descriptor.text_delete':
    'Potresti non essere in grado di eliminare “<DocumentTitle/>” perché i seguenti documenti vi fanno riferimento:',
  /** Describes the list of documents that refer to the one trying to be deleted (unpublish) */
  'confirm-delete-dialog.referring-documents-descriptor.text_unpublish':
    'Potresti non essere in grado di rimuovere la pubblicazione di “<DocumentTitle/>” perché i seguenti documenti vi fanno riferimento:',

  /** The text for the cancel button in the confirm dialog used in document action shortcuts if none is provided */
  'confirm-dialog.cancel-button.fallback-text': 'Annulla',
  /** The text for the confirm button in the confirm dialog used in document action shortcuts if none is provided */
  'confirm-dialog.confirm-button.fallback-text': 'Conferma',

  /** For the default structure definition, the title for the "Content" pane */
  'default-definition.content-title': 'Contenuto',

  /** The text shown if there was an error while getting the document's title via a preview value */
  'doc-title.error.text': 'Errore: {{errorMessage}}',
  /** The text shown if the preview value for a document is non-existent or empty */
  'doc-title.fallback.text': 'Senza titolo',
  /** The text shown if a document's title via a preview value cannot be determined due to an unknown schema type */
  'doc-title.unknown-schema-type.text': 'Tipo di schema sconosciuto: {{schemaType}}',

  /** Tooltip text shown for the close button of the document inspector */
  'document-inspector.close-button.tooltip': 'Chiudi',
  /** The title shown in the dialog header, when inspecting a valid document */
  'document-inspector.dialog.title': 'Ispezione di <DocumentTitle/>',
  /** The title shown in the dialog header, when the document being inspected is not created yet/has no value */
  'document-inspector.dialog.title-no-value': 'Nessun valore',
  /** Title shown for menu item that opens the "Inspect" dialog */
  'document-inspector.menu-item.title': 'Ispeziona',
  /** the placeholder text for the search input on the inspect dialog */
  'document-inspector.search.placeholder': 'Cerca',
  /** The "parsed" view mode, meaning the JSON is searchable, collapsible etc */
  'document-inspector.view-mode.parsed': 'Analizzato',
  /** The "raw" view mode, meaning the JSON is presented syntax-highlighted, but with no other features - optimal for copying */
  'document-inspector.view-mode.raw-json': 'JSON Grezzo',

  /** The text for when a form is hidden */
  'document-view.form-view.form-hidden': 'Questo modulo è nascosto',
  /** Fallback title shown when a form title is not provided */
  'document-view.form-view.form-title-fallback': 'Senza titolo',
  /** The text for when the form view is loading a document */
  'document-view.form-view.loading': 'Caricamento documento in corso…',
  /** The description of the sync lock toast on the form view */
  'document-view.form-view.sync-lock-toast.description':
    'Attendere prego mentre il documento viene sincronizzato. Questo avviene di solito subito dopo che il documento è stato pubblicato e non dovrebbe richiedere più di qualche secondo',
  /** The title of the sync lock toast on the form view */
  'document-view.form-view.sync-lock-toast.title': 'Sincronizzazione documento in corso…',

  /** The description for the document favorite action */
  'document.favorites.add-to-favorites': 'Aggiungi ai preferiti',
  /** The description for the document unfavorite action */
  'document.favorites.remove-from-favorites': 'Rimuovi dai preferiti',

  /** The description for the events inspector when we can't load the document so we default to compare with published */
  'events.compare-with-published.description':
    'Non siamo in grado di caricare i cambiamenti per questo documento, probabilmente a causa della politica di conservazione della cronologia del tuo piano, questo ti mostra come la versione <strong>{{version}}</strong> si confronta con la versione <strong>pubblicata</strong>.',
  /** The title for the events inspector when we can't load the document so we default to compare with published */
  'events.compare-with-published.title': 'Confronto con la versione pubblicata',
  /**The title for the menu items that will be shown when expanding a publish release event to inspect the document */
  'events.inspect.release': 'Ispeziona il documento <VersionBadge>{{releaseTitle}}</VersionBadge>',
  /**The title for the menu items that will be shown when expanding a publish draft event to inspect the draft document*/
  'events.open.draft': 'Apri il documento <VersionBadge>bozza</VersionBadge>',
  /**The title for the menu items that will be shown when expanding a publish release event to inspect the release*/
  'events.open.release': 'Apri la release <VersionBadge>{{releaseTitle}}</VersionBadge>',

  /** The loading messaging for when the tooltip is still loading permission info */
  'insufficient-permissions-message-tooltip.loading-text': 'Caricamento in corso…',

  /** --- Menu items --- */
  /** The menu item group title to use for the Action menu items */
  'menu-item-groups.actions-group': 'Azioni',
  /** The menu item group title to use for the Layout menu items */
  'menu-item-groups.layout-group': 'Layout',
  /** The menu item group title to use for the Sort menu items */
  'menu-item-groups.sorting-group': 'Ordinamento',

  /** The menu item title to use the compact view */
  'menu-items.layout.compact-view': 'Vista compatta',
  /** The menu item title to use the detailed view */
  'menu-items.layout.detailed-view': 'Vista dettagliata',
  /** The menu item title to Sort by Created */
  'menu-items.sort-by.created': 'Ordina per Data di creazione',
  /** The menu item title to Sort by Last Edited */
  'menu-items.sort-by.last-edited': 'Ordina per Ultima modifica',

  /** The link text of the no document type screen that appears directly below the subtitle */
  'no-document-types-screen.link-text': 'Scopri come aggiungere un tipo di documento →',
  /** The subtitle of the no document type screen that appears directly below the title */
  'no-document-types-screen.subtitle': 'Definisci almeno un tipo di documento nel tuo schema.',
  /** The title of the no document type screen */
  'no-document-types-screen.title': 'Nessun tipo di documento',

  /** Text shown on back button visible on smaller breakpoints */
  'pane-header.back-button.text': 'Indietro',
  /** tooltip text (via `title` attribute) for the menu button */
  'pane-header.context-menu-button.tooltip': 'Mostra menu',
  /** Appears in a document list pane header if there are more than one option for create. This is the label for that menu */
  'pane-header.create-menu.label': 'Crea',
  /** Tooltip displayed on the create new button in document lists */
  'pane-header.create-new-button.tooltip': 'Crea nuovo documento',
  /** The `aria-label` for the disabled button in the pane header if create permissions are granted */
  'pane-header.disabled-created-button.aria-label': 'Permessi insufficienti',

  /** The text shown in the tooltip of pane item previews of documents if there are unpublished edits */
  'pane-item.draft-status.has-draft.tooltip': 'Modificato <RelativeTime/>',
  /** The text shown in the tooltip of pane item previews of documents if there are no unpublished edits */
  'pane-item.draft-status.no-draft.tooltip': 'Nessuna modifica non pubblicata',
  /** The subtitle tor pane item previews if there isn't a matching schema type found */
  'pane-item.missing-schema-type.subtitle': 'Documento: <Code>{{documentId}}</Code>',
  /** The title tor pane item previews if there isn't a matching schema type found */
  'pane-item.missing-schema-type.title':
    'Nessuno schema trovato per il tipo <Code>{{documentType}}</Code>',
  /** The text shown in the tooltip of pane item previews of documents if there are unpublished edits */
  'pane-item.published-status.has-published.tooltip': 'Pubblicato <RelativeTime/>',
  /** The text shown in the tooltip of pane item previews of documents if there are no unpublished edits */
  'pane-item.published-status.no-published.tooltip': 'Nessuna pubblicazione',

  /** The text used in the document header title if there is an error */
  'panes.document-header-title.error.text': 'Errore: {{error}}',
  /** The text used in the document header title if creating a new item */
  'panes.document-header-title.new.text': 'Nuovo {{schemaType}}',
  /** The text used in the document header title if no other title can be determined */
  'panes.document-header-title.untitled.text': 'Senza titolo',
  /** The help text saying that we'll retry fetching the document list */
  'panes.document-list-pane.error.retrying': 'Riprova…',
  /** The error text on the document list pane */
  'panes.document-list-pane.error.text': 'Errore: <Code>{{error}}</Code>',
  /** The error text on the document list pane */
  'panes.document-list-pane.error.text.dev': 'Errore: <Code>{{error}}</Code>',
  /** The error text on the document list pane if the browser appears to be offlline */
  'panes.document-list-pane.error.text.offline': 'La connessione Internet sembra essere offline.',
  /** The error title on the document list pane */
  'panes.document-list-pane.error.title': "Impossibile recuperare gli elementi dell'elenco",
  /** The help text saying that we'll retry fetching the document list */
  'panes.document-list-pane.error.will-retry-automatically_one': 'Riprova…',
  'panes.document-list-pane.error.will-retry-automatically_other': 'Riprova… (#{{count}}).',
  /** The text of the document list pane if more than a maximum number of documents are returned */
  'panes.document-list-pane.max-items.text': 'Visualizzazione di un massimo di {{limit}} documenti',
  /** The text of the document list pane if no documents are found for a specified type */
  'panes.document-list-pane.no-documents-of-type.text': 'Nessun documento di questo tipo',
  /** The text of the document list pane if no documents are found */
  'panes.document-list-pane.no-documents.text': 'Nessun risultato trovato',
  /** The text of the document list pane if no documents are found matching specified criteria */
  'panes.document-list-pane.no-matching-documents.text': 'Nessun documento corrispondente',
  /** The search input for the search input on the document list pane */
  'panes.document-list-pane.reconnecting': 'Tentativo di connessione…',
  /** The aria-label for the search input on the document list pane */
  'panes.document-list-pane.search-input.aria-label': 'Cerca nella lista',
  /** The search input for the search input on the document list pane */
  'panes.document-list-pane.search-input.placeholder': 'Cerca nella lista',
  /** The summary title when displaying an error for a document operation result */
  'panes.document-operation-results.error.summary.title': 'Dettagli',
  /** The text when a generic operation failed (fallback, generally not shown)  */
  'panes.document-operation-results.operation-error':
    'Si è verificato un errore durante {{context}}',
  /** The text when a delete operation failed  */
  'panes.document-operation-results.operation-error_delete':
    'Si è verificato un errore durante il tentativo di eliminare questo documento. Questo di solito significa che ci sono altri documenti che lo fanno riferimento.',
  /** The text when an unpublish operation failed  */
  'panes.document-operation-results.operation-error_unpublish':
    'Si è verificato un errore durante il tentativo di annullare la pubblicazione di questo documento. Questo di solito significa che ci sono altri documenti che lo fanno riferimento.',
  /** The text when a generic operation succeeded (fallback, generally not shown)  */
  'panes.document-operation-results.operation-success':
    'Operazione su documento {{context}} eseguita con successo',
  /** The text when copy URL operation succeeded  */
  'panes.document-operation-results.operation-success_copy-url':
    'URL del documento copiato negli appunti',
  /**  */
  'panes.document-operation-results.operation-success_createVersion':
    '<Strong>{{title}}</Strong> è stato aggiunto alla release',
  /** The text when a delete operation succeeded  */
  'panes.document-operation-results.operation-success_delete':
    'Il documento è stato eliminato con successo',
  /** The text when a discard changes operation succeeded  */
  'panes.document-operation-results.operation-success_discardChanges':
    "Tutte le modifiche dall'ultima pubblicazione sono state scartate. La bozza scartata può comunque essere recuperata dalla cronologia",
  /** The text when a duplicate operation succeeded  */
  'panes.document-operation-results.operation-success_duplicate':
    'Il documento è stato duplicato con successo',
  /** The text when a publish operation succeeded  */
  'panes.document-operation-results.operation-success_publish': 'Il documento è stato pubblicato',
  /** The text when a restore operation succeeded  */
  'panes.document-operation-results.operation-success_restore':
    '<Strong>{{title}}</Strong> è stato ripristinato',
  /** The text when an unpublish operation succeeded  */
  'panes.document-operation-results.operation-success_unpublish':
    'La pubblicazione del documento è stata annullata. È stata creata una bozza dalla versione pubblicata più recente.',
  /** The document title shown when document title is "undefined" in operation message */
  'panes.document-operation-results.operation-undefined-title': 'Senza titolo',
  /** The loading message for the document not found pane */
  'panes.document-pane.document-not-found.loading': 'Caricamento documento in corso…',
  /** The text of the document not found pane if the schema is known */
  'panes.document-pane.document-not-found.text':
    "Il tipo di documento non è definito e non è stato possibile trovare un documento con l'identificatore <Code>{{id}}</Code>.",
  /** The title of the document not found pane if the schema is known */
  'panes.document-pane.document-not-found.title': 'Il documento non è stato trovato',
  /** The text of the document not found pane if the schema is not found */
  'panes.document-pane.document-unknown-type.text':
    'Questo documento ha il tipo di schema <Code>{{documentType}}</Code>, che non è definito come tipo nello schema del content studio locale.',
  /** The title of the document not found pane if the schema is not found or unknown */
  'panes.document-pane.document-unknown-type.title':
    'Tipo di documento sconosciuto: <Code>{{documentType}}</Code>',
  /** The title of the document not found pane if the schema is unknown */
  'panes.document-pane.document-unknown-type.without-schema.text':
    'Questo documento non esiste e non è stato specificato alcun tipo di schema per esso.',
  /** Default message shown while resolving the structure definition for an asynchronous node */
  'panes.resolving.default-message': 'Caricamento…',
  /** Message shown while resolving the structure definition for an asynchronous node and it is taking a while (more than 5s) */
  'panes.resolving.slow-resolve-message': 'Ancora in caricamento…',
  /** The text to display when type is missing */
  'panes.unknown-pane-type.missing-type.text':
    "All'elemento di struttura manca la proprietà <Code>type</Code> richiesta.",
  /** The title of the unknown pane */
  'panes.unknown-pane-type.title': 'Tipo di pannello sconosciuto',
  /** The text to display when type is unknown */
  'panes.unknown-pane-type.unknown-type.text':
    "L'elemento di struttura di tipo <Code>{{type}}</Code> non è un'entità conosciuta.",

  /** The text for the "Open preview" action for a document */
  'production-preview.menu-item.title': 'Apri anteprima',

  /** The text for the confirm button in the request permission dialog used in the permissions banner */
  'request-permission-dialog.confirm-button.text': 'Invia richiesta',
  /** The description text for the request permission dialog used in the permissions banner */
  'request-permission-dialog.description.text':
    'La tua richiesta sarà inviata agli amministratori del progetto. Se vuoi, puoi anche includere una nota',
  /** The header/title for the request permission dialog used in the permissions banner */
  'request-permission-dialog.header.text': "Chiedi l'accesso per modificare",
  /** The text describing the note input for the request permission dialog used in the permissions banner */
  'request-permission-dialog.note-input.description.text': 'Se vuoi, puoi aggiungere una nota',
  /** The placeholder for the note input in the request permission dialog used in the permissions banner */
  'request-permission-dialog.note-input.placeholder.text': 'Aggiungi nota...',
  /** The error/warning text in the request permission dialog when the user's request has been declined */
  'request-permission-dialog.warning.denied.text':
    'La tua richiesta di accesso a questo progetto è stata rifiutata.',
  /** The error/warning text in the request permission dialog when the user's request has been denied due to too many outstanding requests */
  'request-permission-dialog.warning.limit-reached.text':
    'Hai raggiunto il limite per le richieste di ruolo in tutti i progetti. Attendere prima di inviare altre richieste o contattare un amministratore per assistenza.',

  /** Label for button when status is saved */
  'status-bar.document-status-pulse.status.saved.text': 'Salvato',
  /** Label for button when status is syncing */
  'status-bar.document-status-pulse.status.syncing.text': 'Salvataggio in corso...',
  /** Accessibility label indicating when the document was last published, in relative time, eg "3 weeks ago" */
  'status-bar.publish-status-button.last-published-time.aria-label':
    'Ultima pubblicazione {{relativeTime}}',
  /** Text for tooltip showing explanation of timestamp/relative time, eg "Last published <RelativeTime/>" */
  'status-bar.publish-status-button.last-published-time.tooltip':
    'Ultima pubblicazione <RelativeTime/>',
  /** Accessibility label indicating when the document was last updated, in relative time, eg "2 hours ago" */
  'status-bar.publish-status-button.last-updated-time.aria-label':
    'Ultimo aggiornamento {{relativeTime}}',
  /** Text for tooltip showing explanation of timestamp/relative time, eg "Last updated <RelativeTime/>" */
  'status-bar.publish-status-button.last-updated-time.tooltip':
    'Ultimo aggiornamento <RelativeTime/>',
  /** Aria label for the button */
  'status-bar.review-changes-button.aria-label': 'Rivedi le modifiche',
  /** Label for button when status is saved */
  'status-bar.review-changes-button.status.saved.text': 'Salvato!',
  /** Label for button when status is syncing */
  'status-bar.review-changes-button.status.syncing.text': 'Salvataggio in corso...',
  /** Text for the secondary text for tooltip for the button */
  'status-bar.review-changes-button.tooltip.changes-saved': 'Modifiche salvate',
  /** Primary text for tooltip for the button */
  'status-bar.review-changes-button.tooltip.text': 'Rivedi le modifiche',

  /** The text that appears in side the documentation link */
  'structure-error.docs-link.text': 'Visualizza la documentazione',
  /** Labels the error message or error stack of the structure error screen */
  'structure-error.error.label': 'Errore',
  /** The header that appears at the top of the error screen */
  'structure-error.header.text': 'Si è verificato un errore durante la lettura della struttura',
  /** The text in the reload button to retry rendering the structure */
  'structure-error.reload-button.text': 'Ricarica',
  /** Labels the structure path of the structure error screen */
  'structure-error.structure-path.label': 'Percorso della struttura',

  /** The aria label for the menu button in the timeline item */
  'timeline-item.menu-button.aria-label': 'Apri il menu delle azioni',
  /** The text for the tooltip in menu button the timeline item */
  'timeline-item.menu-button.tooltip': 'Azioni',
  /** The text for the collapse action in the timeline item menu */
  'timeline-item.menu.action-collapse': 'Comprimi',
  /** The text for the expand action in the timeline item menu */
  'timeline-item.menu.action-expand': 'Espandi',
  /** The text for the published event menu tooltip when the release is not found */
  'timeline-item.not-found-release.tooltip': 'Release con id "{{releaseId}}" non trovata',
})
