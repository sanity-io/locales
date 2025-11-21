import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Label for the "Copy Document URL" document action */
  'action.copy-document-url.label': 'Copiază URL-ul documentului',
  /** Tooltip when action button is disabled because the operation is not ready   */
  'action.delete.disabled.not-ready': 'Operațiunea nu este pregătită',
  /** Tooltip when action button is disabled because the document does not exist */
  'action.delete.disabled.nothing-to-delete': 'Acest document nu există încă sau a fost deja șters',
  /** Label for the "Delete" document action button */
  'action.delete.label': 'Șterge',
  /** Label for the "Delete" document action while the document is being deleted */
  'action.delete.running.label': 'Se șterge…',
  /** Tooltip when action is disabled because the document is linked to Canvas */
  'action.disabled-by-canvas.tooltip':
    'Anumite acțiuni sunt dezactivate pentru documentele conectate la Canvas.',
  /** Message prompting the user to confirm discarding changes */
  'action.discard-changes.confirm-dialog.confirm-discard-changes':
    'Sunteți sigur că doriți să renunțați la toate modificările de la ultima publicare?',
  /** Tooltip when action is disabled because the document has no unpublished changes */
  'action.discard-changes.disabled.no-change': 'Acest document nu are modificări nepublicate',
  /** Tooltip when action is disabled because the document is not published */
  'action.discard-changes.disabled.not-published': 'Acest document nu este publicat',
  /** Tooltip when action button is disabled because the operation is not ready   */
  'action.discard-changes.disabled.not-ready': 'Operațiunea nu este pregătită',
  /** Label for the "Discard changes" document action */
  'action.discard-changes.label': 'Renunță la modificări',
  /** Tooltip when action is disabled because the operation is not ready   */
  'action.duplicate.disabled.not-ready': 'Operațiunea nu este pregătită',
  /** Tooltip when action is disabled because the document doesn't exist */
  'action.duplicate.disabled.nothing-to-duplicate':
    'Acest document nu există încă, deci nu există nimic de duplicat',
  /** Label for the "Duplicate" document action */
  'action.duplicate.label': 'Duplică',
  /** Label for the "Duplicate" document action while the document is being duplicated */
  'action.duplicate.running.label': 'Se duplică…',
  /** Tooltip when publish button is disabled because the document is already published, and published time is unavailable.*/
  'action.publish.already-published.no-time-ago.tooltip': 'Deja publicat',
  /** Tooltip when publish button is disabled because the document is already published.*/
  'action.publish.already-published.tooltip': 'Publicat {{timeSincePublished}}',
  /** Tooltip when action is disabled because the studio is not ready.*/
  'action.publish.disabled.not-ready': 'Operațiunea nu este pregătită',
  /** Label for action when there are pending changes.*/
  'action.publish.draft.label': 'Publică',
  /** Label for the "Publish" document action */
  'action.publish.label': 'Publică',
  /** Label for the "Publish" document action when the document has live edit enabled.*/
  'action.publish.live-edit.label': 'Publică',
  /** Fallback tooltip for the "Publish" document action when publish is invoked for a document with live edit enabled.*/
  'action.publish.live-edit.publish-disabled':
    'Nu se poate publica deoarece Editarea Live este activată pentru acest tip de document',
  /** Tooltip for the "Publish" document action when the document has live edit enabled.*/
  'action.publish.live-edit.tooltip':
    'Editare Live este activată pentru acest tip de conținut, iar publicarea are loc automat pe măsură ce faceți modificări',
  /** Tooltip when publish button is disabled because there are no changes.*/
  'action.publish.no-changes.tooltip': 'Nu există modificări nepublicate',
  /** Label for the "Publish" document action when there are no changes.*/
  'action.publish.published.label': 'Publicat',
  /** Label for the "Publish" document action while publish is being executed.*/
  'action.publish.running.label': 'Se publică…',
  /** Tooltip when the "Publish" document action is disabled due to validation issues */
  'action.publish.validation-issues.tooltip':
    'Există erori de validare care trebuie rezolvate înainte ca acest document să poată fi publicat',
  /** Tooltip when publish button is waiting for validation and async tasks to complete.*/
  'action.publish.waiting': 'Se așteaptă finalizarea sarcinilor înainte de publicare',
  /** Message prompting the user to confirm that they want to restore to an earlier revision*/
  'action.restore.confirm.message': 'Sunteți sigur că doriți să restaurați acest document?',
  /** Fallback tooltip for when user is looking at the initial revision */
  'action.restore.disabled.cannot-restore-initial': 'Nu puteți restaura la revizia inițială',
  /** Label for the "Restore" document action */
  'action.restore.label': 'Revenire la revizie',
  /** Default tooltip for the action */
  'action.restore.tooltip': 'Restaurați la această revizie',
  /** Tooltip when action is disabled because the document is not already published */
  'action.unpublish.disabled.not-published': 'Acest document nu este publicat',
  /** Tooltip when action is disabled because the operation is not ready   */
  'action.unpublish.disabled.not-ready': 'Operațiunea nu este pregătită',
  /** Label for the "Unpublish" document action */
  'action.unpublish.label': 'Anulare publicare',
  /** Fallback tooltip for the Unpublish document action when publish is invoked for a document with live edit enabled.*/
  'action.unpublish.live-edit.disabled':
    'Acest document are editarea live activată și nu poate fi anulată publicarea',

  /** Description for the archived release banner, rendered when viewing the history of a version document from the publihed view */
  'banners.archived-release.description':
    'Această versiune a documentului aparține lansării arhivate <VersionBadge>{{title}}</VersionBadge>',
  /** Description for the archived scheduled draft banner, rendered when viewing the history of a cardinality one release document */
  'banners.archived-scheduled-draft.description': 'Acest draft programat este arhivat',
  /** The explanation displayed when a user attempts to create a new draft document, but the draft model is not switched on */
  'banners.choose-new-document-destination.cannot-create-draft-document':
    'Nu se poate crea un document draft.',
  /** The explanation displayed when a user attempts to create a new published document, but the schema type doesn't support live-editing */
  'banners.choose-new-document-destination.cannot-create-published-document':
    'Nu se poate crea un document publicat.',
  /** The prompt displayed when a user must select a different perspective in order to create a document */
  'banners.choose-new-document-destination.choose-destination':
    'Alegeți o destinație pentru acest document:',
  /** The explanation displayed when a user attempts to create a new document in a release, but the selected release is inactive */
  'banners.choose-new-document-destination.release-inactive':
    'Versiunea <VersionBadge>{{title}}</VersionBadge> nu este activă.',
  /** The text for the restore button on the deleted document banner */
  'banners.deleted-document-banner.restore-button.text': 'Restaurați cea mai recentă revizie',
  /** The text content for the deleted document banner */
  'banners.deleted-document-banner.text': 'Acest document a fost șters.',
  /** The text content for the deprecated document type banner */
  'banners.deprecated-document-type-banner.text': 'Acest tip de document a fost desființat.',
  /** The text for publish action for discarding the version */
  'banners.live-edit-draft-banner.discard.tooltip': 'Renunțați la schiță',
  /** The text for publish action for the draft banner */
  'banners.live-edit-draft-banner.publish.tooltip': 'Publicați pentru a continua editarea',
  /** The text content for the live edit document when it's a draft */
  'banners.live-edit-draft-banner.text':
    'Tipul <strong>{{schemaType}}</strong> are <code>liveEdit</code> activat, dar există o versiune schiță a acestui document. Publicați sau renunțați la schiță pentru a continua editarea live.',
  /** The label for the "compare draft" action */
  'banners.obsolete-draft.actions.compare-draft.text': 'Compară draft',
  /** The label for the "discard draft" action */
  'banners.obsolete-draft.actions.discard-draft.text': 'Descartă draft',
  /** The label for the "publish draft" action */
  'banners.obsolete-draft.actions.publish-draft.text': 'Publică draft',
  /** The warning displayed when editing a document that has an obsolete draft because the draft model is not switched on */
  'banners.obsolete-draft.draft-model-inactive.text':
    'Spațiul de lucru nu are draft-uri activate, dar există o versiune draft a acestui document.',
  /** The text for the permission check banner if the user only has one role, and it does not allow publishing this document */
  'banners.permission-check-banner.missing-permission_create_one':
    'Rolul dumneavoastră <Roles/> nu are permisiunea de a publica acest document.',
  /** The text for the permission check banner if the user only has one role, and it does not allow editing this document */
  'banners.permission-check-banner.missing-permission_update_one':
    'Rolul dumneavoastră <Roles/> nu are permisiunea de a edita acest document.',
  /** The pending text for the request permission button that appears for viewer roles */
  'banners.permission-check-banner.request-permission-button.sent':
    'Cererea de editor a fost trimisă',
  /** The text for the request permission button that appears for viewer roles */
  'banners.permission-check-banner.request-permission-button.text': 'Cereți să editați',
  /** Description for the archived release banner, rendered when viewing the history of a version document from the published view */
  'banners.published-release.description':
    'Vizualizați un document în modul doar-citire care a fost publicat ca parte a <VersionBadge>{{title}}</VersionBadge>. Nu poate fi editat',
  /** The text for the reload button */
  'banners.reference-changed-banner.reason-changed.reload-button.text': 'Reîncărcați referința',
  /** The text for the reference change banner if the reason is that the reference has been changed */
  'banners.reference-changed-banner.reason-changed.text':
    'Această referință s-a schimbat de când ați deschis-o.',
  /** The text for the close button */
  'banners.reference-changed-banner.reason-removed.close-button.text': 'Închide referința',
  /** The text for the reference change banner if the reason is that the reference has been deleted */
  'banners.reference-changed-banner.reason-removed.text':
    'Această referință a fost eliminată de când ați deschis-o.',
  /** The text that appears for the action button to add the current document to the global release */
  'banners.release.action.add-to-release': 'Adaugă la lansare',
  /** The text that appears for the action button to add the current document to the global release */
  'banners.release.action.open-to-edit': 'Deschide lansarea pentru editare',
  /** Toast description in case an error occurs when adding a document to a release  */
  'banners.release.error.description':
    'A apărut o eroare la adăugarea documentului la lansare: {{message}}',
  /** Toast title in case an error occurs when adding a document to a release  */
  'banners.release.error.title': 'Eroare la adăugarea documentului la lansare',
  /** The text for the banner that appears when a document only has versions but is in a draft or published pinned release */
  'banners.release.navigate-to-edit-description': 'Documentul există doar în',
  /** The text for the banner that appears when a document only has versions but is in a draft or published pinned release */
  'banners.release.navigate-to-edit-description-end_one': 'lansare',
  /** The text for the banner that appears when there are multiple versions but no drafts or published, only one extra releases */
  'banners.release.navigate-to-edit-description-multiple_one':
    'Acest document face parte din lansarea <VersionBadge/> și încă {{count}} lansare.',
  /** The text for the banner that appears when a document only has one version but is in a draft or published pinned release */
  'banners.release.navigate-to-edit-description-single':
    'Acest document face parte din lansarea <VersionBadge/>',
  /** The text for the banner that appears when a document is not in the current global release */
  'banners.release.not-in-release': 'Nu este în lansarea <VersionBadge>{{title}}</VersionBadge>.',
  /** Description of toast that will appear in case of latency between the user adding a document to a release and the UI reflecting it */
  'banners.release.waiting.description':
    'Vă rugăm să așteptați în timp ce documentul este adăugat la lansare. Nu ar trebui să dureze mai mult de câteva secunde.',
  /** Title of toast that will appear in case of latency between the user adding a document to a release and the UI reflecting it */
  'banners.release.waiting.title': 'Se adaugă documentul la lansare…',
  /** The text for the revision not found banner */
  'banners.revision-not-found.description':
    'Nu am putut găsi revizia documentului selectată, vă rugăm să selectați o altă intrare din lista istoricului.',
  /** The text content for the scheduled draft override banner */
  'banners.scheduled-draft-override-banner.text':
    'Există un draft programat pentru acest document. Dacă publicați modificări acum, acestea vor fi suprascrise când programarea este executată.',
  /** The text content for the unpublished document banner when is part of a release */
  'banners.unpublished-release-banner.text':
    'Acest document va fi nepublicat ca parte a lansării <VersionBadge>{{title}}</VersionBadge>',
  /** The text content for the unpublished document banner letting the user know that the current published version is being shown */
  'banners.unpublished-release-banner.text-with-published':
    'Se afișează versiunea <strong>publicată</strong> curentă:',

  /** Browser/tab title when creating a new document of a given type */
  'browser-document-title.new-document': 'Document nou {{schemaType}}',
  /** Browser/tab title when editing a document where the title cannot be resolved from preview configuration */
  'browser-document-title.untitled-document': 'Fără titlu',

  /** The action menu button aria-label */
  'buttons.action-menu-button.aria-label': 'Deschide acțiunile documentului',
  /** The action menu button tooltip */
  'buttons.action-menu-button.tooltip': 'Acțiuni document',
  /** The aria-label for the collapse pane button on the document panel header */
  'buttons.focus-pane-button.aria-label.collapse': 'Restrânge toate panourile',
  /** The aria-label for the focus pane button on the document panel header */
  'buttons.focus-pane-button.aria-label.focus': 'Focalizează panoul',
  /** The tooltip for the collapse pane button on the document panel header */
  'buttons.focus-pane-button.tooltip.collapse': 'Restrânge toate panourile',
  /** The tooltip for the focus pane button on the document panel header */
  'buttons.focus-pane-button.tooltip.focus': 'Focalizează panoul',
  /** The aria-label for the split pane button on the document panel header */
  'buttons.split-pane-button.aria-label': 'Împarte panoul dreapta',
  /** The tool tip for the split pane button on the document panel header */
  'buttons.split-pane-button.tooltip': 'Împarte panoul dreapta',
  /** The title for the close button on the split pane on the document panel header */
  'buttons.split-pane-close-button.title': 'Închide panoul împărțit',
  /** The title for the close group button on the split pane on the document panel header */
  'buttons.split-pane-close-group-button.title': 'Închide grupul de panouri',

  /** The text for the canvas linked banner action button */
  'canvas.banner.edit-in-canvas-action': 'Editează în Canvas',
  /** The text for the canvas linked banner when the document is a draft */
  'canvas.banner.linked-text.draft': 'Acest document draft este legat de Canvas',
  /** The text for the canvas linked banner when the document is a live document */
  'canvas.banner.linked-text.published': 'Acest document live este legat de Canvas',
  /** The text for the canvas linked banner when the document is a version document */
  'canvas.banner.linked-text.version': 'Acest document versiune este legat de Canvas',
  /** The text for the canvas linked banner popover button */
  'canvas.banner.popover-button-text': 'Află mai multe',
  /** The description for the canvas linked banner popover */
  'canvas.banner.popover-description':
    'Canvas îți permite să creezi într-un editor liber care se mapează automat înapoi în Studio ca și conținut structurat - pe măsură ce tastezi.',
  /** The heading for the canvas linked banner popover */
  'canvas.banner.popover-heading': 'Creare orientată pe idei',

  /** The description for the changes banner */
  'changes.banner.description':
    'Se afișează istoricul pentru versiunea <strong>{{perspective}}</strong> a acestui document.',
  /** The tooltip for the changes banner */
  'changes.banner.tooltip':
    'Această vizualizare arată schimbările care au avut loc într-o versiune specifică a acestui document. Selectați o versiune diferită pentru a vedea schimbările acesteia',
  /** The label used in the changes inspector for the from selector */
  'changes.from.label': 'De la',
  /* The label for the history tab in the changes inspector*/
  'changes.tab.history': 'Istoric',
  /* The label for the review tab in the changes inspector*/
  'changes.tab.review-changes': 'Revizuiește schimbările',
  /** The label used in the changes inspector for the to selector */
  'changes.to.label': 'La',

  /** The error message shown when the specified document comparison mode is not supported */
  'compare-version.error.invalidModeParam':
    '"{{input}}" nu este un mod de comparare a documentelor suportat.',
  /** The error message shown when the next document for comparison could not be extracted from the URL */
  'compare-version.error.invalidNextDocumentParam': 'Parametrul documentului următor este invalid.',
  /** The error message shown when the document comparison URL could not be parsed */
  'compare-version.error.invalidParams.title': 'Imposibil de comparat documentele',
  /** The error message shown when the previous document for comparison could not be extracted from the URL */
  'compare-version.error.invalidPreviousDocumentParam':
    'Parametrul documentului anterior este invalid.',

  /** The text for the tooltip when the "Compare versions" action for a document is disabled */
  'compare-versions.menu-item.disabled-reason':
    'Nu există alte versiuni ale acestui document pentru a compara.',
  /** The text for the "Compare versions" action for a document */
  'compare-versions.menu-item.title': 'Compară versiunile',
  /** The string used to label draft documents */
  'compare-versions.status.draft': 'Ciornă',
  /** The string used to label published documents */
  'compare-versions.status.published': 'Publicat',
  /** The title used when comparing versions of a document */
  'compare-versions.title': 'Compară versiunile',

  /** The text in the "Cancel" button in the confirm delete dialog that cancels the action and closes the dialog */
  'confirm-delete-dialog.cancel-button.text': 'Anulează',
  /** Used in `confirm-delete-dialog.cdr-summary.title` */
  'confirm-delete-dialog.cdr-summary.document-count_one': '1 document',
  /** The text that appears in the subtitle `<summary>` that lists the datasets below the title */
  'confirm-delete-dialog.cdr-summary.subtitle_one': 'Set de date: {{datasets}}',
  /** The text that appears in the subtitle `<summary>` that lists the datasets below the title */
  'confirm-delete-dialog.cdr-summary.subtitle_unavailable_one': 'Set de date indisponibil',
  /** The text that appears in the title `<summary>` that includes the list of CDRs (singular) */
  'confirm-delete-dialog.cdr-summary.title_one': '{{documentCount}} într-un alt set de date',
  /** Appears when hovering over the copy button to copy */
  'confirm-delete-dialog.cdr-table.copy-id-button.tooltip': 'Copiază ID-ul în clipboard',
  /** The header for the dataset column in the list of cross-dataset references found */
  'confirm-delete-dialog.cdr-table.dataset.label': 'Set de date',
  /** The header for the document ID column in the list of cross-dataset references found */
  'confirm-delete-dialog.cdr-table.document-id.label': 'ID document',
  /** The toast title when the copy button has been clicked but copying failed */
  'confirm-delete-dialog.cdr-table.id-copied-toast.title-failed':
    'Copierea ID-ului documentului a eșuat',
  /** The header for the project ID column in the list of cross-dataset references found */
  'confirm-delete-dialog.cdr-table.project-id.label': 'ID Proiect',
  /** The text in the "Delete anyway" button in the confirm delete dialog that confirms the action */
  'confirm-delete-dialog.confirm-anyway-button.text_delete': 'Șterge oricum',
  /** The text in the "Unpublish anyway" button in the confirm delete dialog that confirms the action */
  'confirm-delete-dialog.confirm-anyway-button.text_unpublish': 'Retrage oricum',
  /** The text in the "Delete now" button in the confirm delete dialog that confirms the action */
  'confirm-delete-dialog.confirm-button.text_delete': 'Șterge acum',
  /** The text in the "Unpublish now" button in the confirm delete dialog that confirms the action */
  'confirm-delete-dialog.confirm-button.text_unpublish': 'Retrage acum',
  /** If no referring documents are found, this text appears above the cancel and confirmation buttons */
  'confirm-delete-dialog.confirmation.text_delete':
    'Sunteți sigur că doriți să ștergeți „<DocumentTitle/>”?',
  /** If no referring documents are found, this text appears above the cancel and confirmation buttons */
  'confirm-delete-dialog.confirmation.text_unpublish':
    'Sunteți sigur că doriți să retrageți „<DocumentTitle/>”?',
  /** The text body of the error dialog. */
  'confirm-delete-dialog.error.message.text':
    'A apărut o eroare în timpul încărcării documentelor referitoare.',
  /** The text in the retry button of the confirm delete dialog if an error occurred. */
  'confirm-delete-dialog.error.retry-button.text': 'Reîncearcă',
  /** The header of the confirm delete dialog if an error occurred while the confirm delete dialog was open. */
  'confirm-delete-dialog.error.title.text': 'Eroare',
  /** The header of the confirm delete dialog */
  'confirm-delete-dialog.header.text_delete': 'Ștergeți documentul?',
  /** The header of the confirm delete dialog */
  'confirm-delete-dialog.header.text_unpublish': 'Retrageți documentul?',
  /** The text that appears while the referring documents are queried */
  'confirm-delete-dialog.loading.text': 'Se caută documente referitoare…',
  /** Shown if there are references to other documents but the user does not have the permission to see the relevant document IDs */
  'confirm-delete-dialog.other-reference-count.title_one': '1 altă referință nu este afișată',
  /** Text in the tooltip of this component if hovering over the info icon */
  'confirm-delete-dialog.other-reference-count.tooltip':
    'Nu putem afișa metadatele pentru aceste referințe din cauza lipsei unui token de acces pentru seturile de date relevante.',
  /** Appears when unable to render a document preview in the referring document list */
  'confirm-delete-dialog.preview-item.preview-unavailable.subtitle': 'ID: {{documentId}}',
  /** Appears when unable to render a document preview in the referring document list */
  'confirm-delete-dialog.preview-item.preview-unavailable.title': 'Previzualizare indisponibilă',
  /** Warns the user of affects to other documents if the action is confirmed (delete) */
  'confirm-delete-dialog.referential-integrity-disclaimer.text_delete':
    'Dacă ștergeți acest document, documentele care se referă la el nu vor mai putea să îl acceseze.',
  /** Warns the user of affects to other documents if the action is confirmed (unpublish) */
  'confirm-delete-dialog.referential-integrity-disclaimer.text_unpublish':
    'Dacă retrageți acest document, documentele care se referă la el nu vor mai putea să îl acceseze.',
  /** Tells the user the count of how many other referring documents there are before listing them. (singular) */
  'confirm-delete-dialog.referring-document-count.text_one':
    '1 document se referă la „<DocumentTitle/>”',
  /** Describes the list of documents that refer to the one trying to be deleted (delete) */
  'confirm-delete-dialog.referring-documents-descriptor.text_delete':
    'Este posibil să nu puteți șterge „<DocumentTitle/>” deoarece următoarele documente se referă la el:',
  /** Describes the list of documents that refer to the one trying to be deleted (unpublish) */
  'confirm-delete-dialog.referring-documents-descriptor.text_unpublish':
    'Este posibil să nu puteți retrage „<DocumentTitle/>” deoarece următoarele documente se referă la el:',

  /** The text for the cancel button in the confirm dialog used in document action shortcuts if none is provided */
  'confirm-dialog.cancel-button.fallback-text': 'Anulează',
  /** The text for the confirm button in the confirm dialog used in document action shortcuts if none is provided */
  'confirm-dialog.confirm-button.fallback-text': 'Confirmă',

  /** For the default structure definition, the title for the "Content" pane */
  'default-definition.content-title': 'Conținut',

  /** The text shown if there was an error while getting the document's title via a preview value */
  'doc-title.error.text': 'Eroare: {{errorMessage}}',
  /** The text shown if the preview value for a document is non-existent or empty */
  'doc-title.fallback.text': 'Fără titlu',
  /** The text shown if a document's title via a preview value cannot be determined due to an unknown schema type */
  'doc-title.unknown-schema-type.text': 'Tip de schemă necunoscut: {{schemaType}}',

  /** Tooltip text shown for the close button of the document inspector */
  'document-inspector.close-button.tooltip': 'Închide',
  /** The title shown in the dialog header, when inspecting a valid document */
  'document-inspector.dialog.title': 'Inspectând <DocumentTitle/>',
  /** The title shown in the dialog header, when the document being inspected is not created yet/has no value */
  'document-inspector.dialog.title-no-value': 'Fără valoare',
  /** Title shown for menu item that opens the "Inspect" dialog */
  'document-inspector.menu-item.title': 'Inspectează',
  /** the placeholder text for the search input on the inspect dialog */
  'document-inspector.search.placeholder': 'Caută',
  /** The "parsed" view mode, meaning the JSON is searchable, collapsible etc */
  'document-inspector.view-mode.parsed': 'Analizat',
  /** The "raw" view mode, meaning the JSON is presented syntax-highlighted, but with no other features - optimal for copying */
  'document-inspector.view-mode.raw-json': 'JSON Brut',

  /** The text for when a form is hidden */
  'document-view.form-view.form-hidden': 'Acest formular este ascuns',
  /** Fallback title shown when a form title is not provided */
  'document-view.form-view.form-title-fallback': 'Fără titlu',
  /** The text for when the form view is loading a document */
  'document-view.form-view.loading': 'Se încarcă documentul…',
  /** The description of the sync lock toast on the form view */
  'document-view.form-view.sync-lock-toast.description':
    'Vă rugăm să așteptați în timp ce documentul este sincronizat. Acest lucru se întâmplă de obicei imediat după ce documentul a fost publicat și nu ar trebui să dureze mai mult de câteva secunde',
  /** The title of the sync lock toast on the form view */
  'document-view.form-view.sync-lock-toast.title': 'Sincronizare document…',

  /** The description for the document favorite action */
  'document.favorites.add-to-favorites': 'Adaugă la favorite',
  /** The description for the document unfavorite action */
  'document.favorites.remove-from-favorites': 'Șterge din favorite',

  /** The description for the events inspector when we can't load the document so we default to compare with published */
  'events.compare-with-published.description':
    'Nu putem încărca schimbările pentru acest document, probabil din cauza politicii de retenție a istoricului planului dumneavoastră, aceasta vă arată cum versiunea <strong>{{version}}</strong> se compară cu versiunea <strong>publicată</strong>.',
  /** The title for the events inspector when we can't load the document so we default to compare with published */
  'events.compare-with-published.title': 'Comparând cu versiunea publicată',
  /**The title for the menu items that will be shown when expanding a publish release event to inspect the document */
  'events.inspect.release': 'Inspectează documentul <VersionBadge>{{releaseTitle}}</VersionBadge>',
  /**The title for the menu items that will be shown when expanding a publish draft event to inspect the draft document*/
  'events.open.draft': 'Deschide documentul <VersionBadge>draft</VersionBadge>',
  /**The title for the menu items that will be shown when expanding a publish release event to inspect the release*/
  'events.open.release': 'Deschide lansarea <VersionBadge>{{releaseTitle}}</VersionBadge>',

  /** The loading messaging for when the tooltip is still loading permission info */
  'insufficient-permissions-message-tooltip.loading-text': 'Se încarcă…',

  /** --- Menu items --- */
  /** The menu item group title to use for the Action menu items */
  'menu-item-groups.actions-group': 'Acțiuni',
  /** The menu item group title to use for the Layout menu items */
  'menu-item-groups.layout-group': 'Aspect',
  /** The menu item group title to use for the Sort menu items */
  'menu-item-groups.sorting-group': 'Sortare',

  /** The menu item title to use the compact view */
  'menu-items.layout.compact-view': 'Vizualizare compactă',
  /** The menu item title to use the detailed view */
  'menu-items.layout.detailed-view': 'Vizualizare detaliată',
  /** The menu item title to Sort by Created */
  'menu-items.sort-by.created': 'Sortează după Data Creării',
  /** The menu item title to Sort by Last Edited */
  'menu-items.sort-by.last-edited': 'Sortează după Ultima Editare',

  /** The link text of the no document type screen that appears directly below the subtitle */
  'no-document-types-screen.link-text': 'Află cum să adaugi un tip de document →',
  /** The subtitle of the no document type screen that appears directly below the title */
  'no-document-types-screen.subtitle':
    'Vă rugăm să definiți cel puțin un tip de document în schema dvs.',
  /** The title of the no document type screen */
  'no-document-types-screen.title': 'Niciun tip de document',

  /** Text shown on back button visible on smaller breakpoints */
  'pane-header.back-button.text': 'Înapoi',
  /** tooltip text (via `title` attribute) for the menu button */
  'pane-header.context-menu-button.tooltip': 'Afișează meniul',
  /** Appears in a document list pane header if there are more than one option for create. This is the label for that menu */
  'pane-header.create-menu.label': 'Creează',
  /** Tooltip displayed on the create new button in document lists */
  'pane-header.create-new-button.tooltip': 'Creează un document nou',
  /** The `aria-label` for the disabled button in the pane header if create permissions are granted */
  'pane-header.disabled-created-button.aria-label': 'Permisiuni insuficiente',

  /** The text shown in the tooltip of pane item previews of documents if there are unpublished edits */
  'pane-item.draft-status.has-draft.tooltip': 'Editat <RelativeTime/>',
  /** The text shown in the tooltip of pane item previews of documents if there are no unpublished edits */
  'pane-item.draft-status.no-draft.tooltip': 'Fără editări nepublicate',
  /** The subtitle tor pane item previews if there isn't a matching schema type found */
  'pane-item.missing-schema-type.subtitle': 'Document: <Code>{{documentId}}</Code>',
  /** The title tor pane item previews if there isn't a matching schema type found */
  'pane-item.missing-schema-type.title':
    'Nu s-a găsit schema pentru tipul <Code>{{documentType}}</Code>',
  /** The text shown in the tooltip of pane item previews of documents if there are unpublished edits */
  'pane-item.published-status.has-published.tooltip': 'Publicat <RelativeTime/>',
  /** The text shown in the tooltip of pane item previews of documents if there are no unpublished edits */
  'pane-item.published-status.no-published.tooltip': 'Fără editări nepublicate',

  /** The text used in the document header title if there is an error */
  'panes.document-header-title.error.text': 'Eroare: {{error}}',
  /** The text used in the document header title if creating a new item */
  'panes.document-header-title.new.text': 'Nou {{schemaType}}',
  /** The text used in the document header title if no other title can be determined */
  'panes.document-header-title.untitled.text': 'Fără titlu',
  /** The help text saying that we'll retry fetching the document list */
  'panes.document-list-pane.error.retrying': 'Se reîncearcă…',
  /** The error text on the document list pane */
  'panes.document-list-pane.error.text': 'Eroare: <Code>{{error}}</Code>',
  /** The error text on the document list pane */
  'panes.document-list-pane.error.text.dev': 'Eroare: <Code>{{error}}</Code>',
  /** The error text on the document list pane if the browser appears to be offlline */
  'panes.document-list-pane.error.text.offline': 'Conexiunea la Internet pare să fie offline.',
  /** The error title on the document list pane */
  'panes.document-list-pane.error.title': 'Nu s-au putut prelua elementele listei',
  /** The help text saying that we'll retry fetching the document list */
  'panes.document-list-pane.error.will-retry-automatically_one': 'Se reîncearcă…',
  /** The text of the document list pane if more than a maximum number of documents are returned */
  'panes.document-list-pane.max-items.text': 'Se afișează un număr maxim de {{limit}} documente',
  /** The text of the document list pane if no documents are found for a specified type */
  'panes.document-list-pane.no-documents-of-type.text': 'Niciun document de acest tip',
  /** The text of the document list pane if no documents are found */
  'panes.document-list-pane.no-documents.text': 'Nu s-au găsit rezultate',
  /** The text of the document list pane if no documents are found matching specified criteria */
  'panes.document-list-pane.no-matching-documents.text': 'Nu există documente corespunzătoare',
  /** The search input for the search input on the document list pane */
  'panes.document-list-pane.reconnecting': 'Se încearcă reconectarea…',
  /** The aria-label for the search input on the document list pane */
  'panes.document-list-pane.search-input.aria-label': 'Caută în listă',
  /** The search input for the search input on the document list pane */
  'panes.document-list-pane.search-input.placeholder': 'Caută în listă',
  /** The summary title when displaying an error for a document operation result */
  'panes.document-operation-results.error.summary.title': 'Detalii',
  /** The text when a generic operation failed (fallback, generally not shown)  */
  'panes.document-operation-results.operation-error': 'A apărut o eroare în timpul {{context}}',
  /** The text when a delete operation failed  */
  'panes.document-operation-results.operation-error_delete':
    'A apărut o eroare în timpul încercării de a șterge acest document. De obicei, acest lucru înseamnă că există alte documente care se referă la el.',
  /** The text when an unpublish operation failed  */
  'panes.document-operation-results.operation-error_unpublish':
    'A apărut o eroare în timpul încercării de a retrage publicarea acestui document. De obicei, acest lucru înseamnă că există alte documente care se referă la el.',
  /** The text when a generic operation succeeded (fallback, generally not shown)  */
  'panes.document-operation-results.operation-success':
    'Operațiunea {{op}} a fost efectuată cu succes pe document',
  /** The text when copy URL operation succeeded  */
  'panes.document-operation-results.operation-success_copy-url':
    'URL-ul documentului a fost copiat în clipboard',
  /**  */
  'panes.document-operation-results.operation-success_createVersion':
    '<Strong>{{title}}</Strong> a fost adăugat la lansare',
  /** The text when a delete operation succeeded  */
  'panes.document-operation-results.operation-success_delete': 'Documentul a fost șters cu succes',
  /** The text when a discard changes operation succeeded  */
  'panes.document-operation-results.operation-success_discardChanges':
    'Toate schimbările de la ultima publicare au fost acum anulate. Schița descartată poate fi încă recuperată din istoric',
  /** The text when a duplicate operation succeeded  */
  'panes.document-operation-results.operation-success_duplicate':
    'Documentul a fost duplicat cu succes',
  /** The text when a publish operation succeeded  */
  'panes.document-operation-results.operation-success_publish':
    '<Strong>{{title}}</Strong> a fost publicat',
  /** The text when a restore operation succeeded  */
  'panes.document-operation-results.operation-success_restore':
    '<Strong>{{title}}</Strong> a fost restaurat',
  /** The text when an unpublish operation succeeded  */
  'panes.document-operation-results.operation-success_unpublish':
    '<Strong>{{title}}</Strong> a fost retras de la publicare. O schiță a fost creată din ultima revizie publicată.',
  /** The document title shown when document title is "undefined" in operation message */
  'panes.document-operation-results.operation-undefined-title': 'Fără titlu',
  /** The loading message for the document not found pane */
  'panes.document-pane.document-not-found.loading': 'Se încarcă documentul…',
  /** The text of the document not found pane if the schema is known */
  'panes.document-pane.document-not-found.text':
    'Tipul documentului nu este definit, și un document cu identificatorul <Code>{{id}}</Code> nu a putut fi găsit.',
  /** The title of the document not found pane if the schema is known */
  'panes.document-pane.document-not-found.title': 'Documentul nu a fost găsit',
  /** The text of the document not found pane if the schema is not found */
  'panes.document-pane.document-unknown-type.text':
    'Acest document are tipul de schemă <Code>{{documentType}}</Code>, care nu este definit ca un tip în schema locală a studioului de conținut.',
  /** The title of the document not found pane if the schema is not found or unknown */
  'panes.document-pane.document-unknown-type.title':
    'Tip de document necunoscut: <Code>{{documentType}}</Code>',
  /** The title of the document not found pane if the schema is unknown */
  'panes.document-pane.document-unknown-type.without-schema.text':
    'Acest document nu există, și niciun tip de schemă nu a fost specificat pentru el.',
  /** Default message shown while resolving the structure definition for an asynchronous node */
  'panes.resolving.default-message': 'Se încarcă…',
  /** Message shown while resolving the structure definition for an asynchronous node and it is taking a while (more than 5s) */
  'panes.resolving.slow-resolve-message': 'Încă se încarcă…',
  /** The text to display when type is missing */
  'panes.unknown-pane-type.missing-type.text':
    'Elementul de structură nu are proprietatea <Code>type</Code> necesară.',
  /** The title of the unknown pane */
  'panes.unknown-pane-type.title': 'Tip de panou necunoscut',
  /** The text to display when type is unknown */
  'panes.unknown-pane-type.unknown-type.text':
    'Elementul de structură de tip <Code>{{type}}</Code> nu este o entitate cunoscută.',

  /** The text for the "Open preview" action for a document */
  'production-preview.menu-item.title': 'Deschide previzualizarea',

  /** The text for the confirm button in the request permission dialog used in the permissions banner */
  'request-permission-dialog.confirm-button.text': 'Trimite cererea',
  /** The description text for the request permission dialog used in the permissions banner */
  'request-permission-dialog.description.text':
    'Cererea dvs. va fi trimisă administratorului (administratorilor) proiectului. Dacă doriți, puteți include și o notă',
  /** The header/title for the request permission dialog used in the permissions banner */
  'request-permission-dialog.header.text': 'Cereți acces pentru editare',
  /** The text describing the note input for the request permission dialog used in the permissions banner */
  'request-permission-dialog.note-input.description.text': 'Dacă doriți, puteți adăuga o notă',
  /** The placeholder for the note input in the request permission dialog used in the permissions banner */
  'request-permission-dialog.note-input.placeholder.text': 'Adaugă notă...',
  /** The error/warning text in the request permission dialog when the user's request has been declined */
  'request-permission-dialog.warning.denied.text':
    'Cererea dvs. de acces la acest proiect a fost refuzată.',
  /** The error/warning text in the request permission dialog when the user's request has been denied due to too many outstanding requests */
  'request-permission-dialog.warning.limit-reached.text':
    'Ați atins limita pentru cererile de roluri în toate proiectele. Vă rugăm să așteptați înainte de a trimite mai multe cereri sau contactați un administrator pentru asistență.',

  /** Label for button when status is saved */
  'status-bar.document-status-pulse.status.saved.text': 'Salvat',
  /** Label for button when status is syncing */
  'status-bar.document-status-pulse.status.syncing.text': 'Se salvează...',
  /** Accessibility label indicating when the document was last published, in relative time, eg "3 weeks ago" */
  'status-bar.publish-status-button.last-published-time.aria-label':
    'Ultima publicare {{relativeTime}}',
  /** Text for tooltip showing explanation of timestamp/relative time, eg "Last published <RelativeTime/>" */
  'status-bar.publish-status-button.last-published-time.tooltip':
    'Ultima publicare <RelativeTime/>',
  /** Accessibility label indicating when the document was last updated, in relative time, eg "2 hours ago" */
  'status-bar.publish-status-button.last-updated-time.aria-label':
    'Ultima actualizare {{relativeTime}}',
  /** Text for tooltip showing explanation of timestamp/relative time, eg "Last updated <RelativeTime/>" */
  'status-bar.publish-status-button.last-updated-time.tooltip':
    'Ultima actualizare <RelativeTime/>',
  /** Aria label for the button */
  'status-bar.review-changes-button.aria-label': 'Revizuiește modificările',
  /** Label for button when status is saved */
  'status-bar.review-changes-button.status.saved.text': 'Salvat!',
  /** Label for button when status is syncing */
  'status-bar.review-changes-button.status.syncing.text': 'Se salvează...',
  /** Text for the secondary text for tooltip for the button */
  'status-bar.review-changes-button.tooltip.changes-saved': 'Modificări salvate',
  /** Primary text for tooltip for the button */
  'status-bar.review-changes-button.tooltip.text': 'Revizuiește modificările',

  /** The text that appears in side the documentation link */
  'structure-error.docs-link.text': 'Vezi documentația',
  /** Labels the error message or error stack of the structure error screen */
  'structure-error.error.label': 'Eroare',
  /** The header that appears at the top of the error screen */
  'structure-error.header.text': 'A fost întâmpinată o eroare în timpul citirii structurii',
  /** The text in the reload button to retry rendering the structure */
  'structure-error.reload-button.text': 'Reîncarcă',
  /** Labels the structure path of the structure error screen */
  'structure-error.structure-path.label': 'Calea structurii',

  /** The aria label for the menu button in the timeline item */
  'timeline-item.menu-button.aria-label': 'Deschide meniul de acțiuni',
  /** The text for the tooltip in menu button the timeline item */
  'timeline-item.menu-button.tooltip': 'Acțiuni',
  /** The text for the collapse action in the timeline item menu */
  'timeline-item.menu.action-collapse': 'Restrânge',
  /** The text for the expand action in the timeline item menu */
  'timeline-item.menu.action-expand': 'Extinde',
  /** The text for the published event menu tooltip when the release is not found */
  'timeline-item.not-found-release.tooltip': 'Lansarea cu id-ul "{{releaseId}}" nu a fost găsită',

  /** The text for the "Inline changes" action, which is used to toggle the visibility of content diffs inside inputs */
  'toggle-inline-changes.menu-item.title': 'Modificări în linie',
})
