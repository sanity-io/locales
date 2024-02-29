import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Tooltip when action button is disabled because the operation is not ready   */
  'action.delete.disabled.not-ready': 'Operazione non pronta',
  /** Tooltip when action button is disabled because the document does not exist */
  'action.delete.disabled.nothing-to-delete':
    'Questo documento non esiste ancora o è già stato eliminato',
  /** Label for the "Delete" document action button */
  'action.delete.label': 'Elimina',
  /** Label for the "Delete" document action while the document is being deleted */
  'action.delete.running.label': 'Eliminazione in corso…',
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
  /** Message prompting the user to confirm that they want to restore to an earlier version*/
  'action.restore.confirm.message': 'Sei sicuro di voler ripristinare questo documento?',
  /** Fallback tooltip for when user is looking at the initial version */
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

  /** The text for the restore button on the deleted document banner */
  'banners.deleted-document-banner.restore-button.text': 'Ripristina la versione più recente',
  /** The text content for the deleted document banner */
  'banners.deleted-document-banner.text': 'Questo documento è stato eliminato.',
  /** The text content for the deprecated document type banner */
  'banners.deprecated-document-type-banner.text': undefined, // 'This document type has been deprecated.'
  /** The text for the permission check banner if the user only has one role, and it does not allow updating this document */
  'banners.permission-check-banner.missing-permission_create_one':
    'Il tuo ruolo <Roles/> non ha i permessi per creare questo documento.',
  /** The text for the permission check banner if the user only has multiple roles, but they do not allow updating this document */
  'banners.permission-check-banner.missing-permission_create_other':
    'I tuoi ruoli <Roles/> non hanno i permessi per creare questo documento.',
  /** The text for the permission check banner if the user only has one role, and it does not allow updating this document */
  'banners.permission-check-banner.missing-permission_update_one':
    'Il tuo ruolo <Roles/> non ha i permessi per aggiornare questo documento.',
  /** The text for the permission check banner if the user only has multiple roles, but they do not allow updating this document */
  'banners.permission-check-banner.missing-permission_update_other':
    'I tuoi ruoli <Roles/> non hanno i permessi per aggiornare questo documento.',
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

  /** Browser/tab title when creating a new document of a given type */
  'browser-document-title.new-document': undefined, // 'New {{schemaType}}'
  /** Browser/tab title when editing a document where the title cannot be resolved from preview configuration */
  'browser-document-title.untitled-document': undefined, // 'Untitled'

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
  /** The toast title when the copy button has been clicked */
  'confirm-delete-dialog.cdr-table.id-copied-toast.title':
    'ID del documento copiato negli appunti!',
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
  'document-inspector.close-button.tooltip': undefined, // 'Close'
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
  /** The text for the retry button on the document list pane */
  'panes.document-list-pane.error.retry-button.text': 'Riprova',
  /** The error text on the document list pane */
  'panes.document-list-pane.error.text': 'Errore: <Code>{{error}}</Code>',
  /** The error title on the document list pane */
  'panes.document-list-pane.error.title': "Impossibile recuperare gli elementi dell'elenco",
  /** The text of the document list pane if more than a maximum number of documents are returned */
  'panes.document-list-pane.max-items.text': 'Visualizzazione di un massimo di {{limit}} documenti',
  /** The text of the document list pane if no documents are found for a specified type */
  'panes.document-list-pane.no-documents-of-type.text': 'Nessun documento di questo tipo',
  /** The text of the document list pane if no documents are found */
  'panes.document-list-pane.no-documents.text': 'Nessun risultato trovato',
  /** The text of the document list pane if no documents are found matching specified criteria */
  'panes.document-list-pane.no-matching-documents.text': 'Nessun documento corrispondente',
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
  /** The text when a delete operation succeeded  */
  'panes.document-operation-results.operation-success_delete':
    'Il documento è stato eliminato con successo',
  /** The text when a discard changes operation succeeded  */
  'panes.document-operation-results.operation-success_discardChanges':
    "Tutte le modifiche dall'ultima pubblicazione sono state scartate. La bozza scartata può comunque essere recuperata dalla cronologia",
  /** The text when a publish operation succeeded  */
  'panes.document-operation-results.operation-success_publish': 'Il documento è stato pubblicato',
  /** The text when a restore operation succeeded  */
  'panes.document-operation-results.operation-success_restore': undefined, // '<Strong>{{title}}</Strong> was restored'
  /** The text when an unpublish operation succeeded  */
  'panes.document-operation-results.operation-success_unpublish':
    'La pubblicazione del documento è stata annullata. È stata creata una bozza dalla versione pubblicata più recente.',
  /** The document title shown when document title is "undefined" in operation message */
  'panes.document-operation-results.operation-undefined-title': undefined, // 'Untitled'
  /** The title of the reconnecting toast */
  'panes.document-pane-provider.reconnecting.title': 'Connessione persa. Riconnessione in corso…',
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

  /** Label for button when status is saved */
  'status-bar.document-status-pulse.status.saved.text': undefined, // 'Saved'
  /** Label for button when status is syncing */
  'status-bar.document-status-pulse.status.syncing.text': undefined, // 'Saving...'
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
})
