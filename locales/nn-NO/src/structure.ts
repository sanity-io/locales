import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Tooltip when action button is disabled because the operation is not ready   */
  'action.delete.disabled.not-ready': 'Operasjonen er ikkje klar',
  /** Tooltip when action button is disabled because the document does not exist */
  'action.delete.disabled.nothing-to-delete':
    'Dette dokumentet finst ikkje enno eller er allereie sletta',
  /** Label for the "Delete" document action button */
  'action.delete.label': 'Slett',
  /** Label for the "Delete" document action while the document is being deleted */
  'action.delete.running.label': 'Slettar…',
  /** Message prompting the user to confirm discarding changes */
  'action.discard-changes.confirm-dialog.confirm-discard-changes':
    'Er du sikker på at du vil forkaste alle endringar sidan sist publisert?',
  /** Tooltip when action is disabled because the document has no unpublished changes */
  'action.discard-changes.disabled.no-change': 'Dette dokumentet har ingen upubliserte endringar',
  /** Tooltip when action is disabled because the document is not published */
  'action.discard-changes.disabled.not-published': 'Dette dokumentet er ikkje publisert',
  /** Tooltip when action button is disabled because the operation is not ready   */
  'action.discard-changes.disabled.not-ready': 'Operasjonen er ikkje klar',
  /** Label for the "Discard changes" document action */
  'action.discard-changes.label': 'Forkast endringar',
  /** Tooltip when action is disabled because the operation is not ready   */
  'action.duplicate.disabled.not-ready': 'Operasjonen er ikkje klar',
  /** Tooltip when action is disabled because the document doesn't exist */
  'action.duplicate.disabled.nothing-to-duplicate':
    'Dette dokumentet finst ikkje enno så det er ingenting å duplisere',
  /** Label for the "Duplicate" document action */
  'action.duplicate.label': 'Dupliser',
  /** Label for the "Duplicate" document action while the document is being duplicated */
  'action.duplicate.running.label': 'Dupliserer…',
  /** Tooltip when publish button is disabled because the document is already published, and published time is unavailable.*/
  'action.publish.already-published.no-time-ago.tooltip': 'Allereie publisert',
  /** Tooltip when publish button is disabled because the document is already published.*/
  'action.publish.already-published.tooltip': 'Publisert {{timeSincePublished}} sidan',
  /** Tooltip when action is disabled because the studio is not ready.*/
  'action.publish.disabled.not-ready': 'Operasjonen er ikkje klar',
  /** Label for action when there are pending changes.*/
  'action.publish.draft.label': 'Publiser',
  /** Label for the "Publish" document action when the document has live edit enabled.*/
  'action.publish.live-edit.label': 'Publiser',
  /** Fallback tooltip for the "Publish" document action when publish is invoked for a document with live edit enabled.*/
  'action.publish.live-edit.publish-disabled':
    'Kan ikkje publisere sidan Live Edit er aktivert for denne dokumenttypen',
  /** Tooltip for the "Publish" document action when the document has live edit enabled.*/
  'action.publish.live-edit.tooltip':
    'Live Edit er aktivert for denne innhaldstypen og publisering skjer automatisk når du gjer endringar',
  /** Tooltip when publish button is disabled because there are no changes.*/
  'action.publish.no-changes.tooltip': 'Ingen upubliserte endringar',
  /** Label for the "Publish" document action when there are no changes.*/
  'action.publish.published.label': 'Publisert',
  /** Label for the "Publish" document action while publish is being executed.*/
  'action.publish.running.label': 'Publiserer…',
  /** Tooltip when the "Publish" document action is disabled due to validation issues */
  'action.publish.validation-issues.tooltip':
    'Det er valideringsfeil som må rettast opp før dette dokumentet kan publiserast',
  /** Tooltip when publish button is waiting for validation and async tasks to complete.*/
  'action.publish.waiting': 'Ventar på at oppgåver skal bli ferdige før publisering',
  /** Message prompting the user to confirm that they want to restore to an earlier version*/
  'action.restore.confirm.message': 'Er du sikker på at du vil gjenopprette dette dokumentet?',
  /** Fallback tooltip for when user is looking at the initial version */
  'action.restore.disabled.cannot-restore-initial':
    'Du kan ikkje gjenopprette til den opphavlege versjonen',
  /** Label for the "Restore" document action */
  'action.restore.label': 'Gjenopprett',
  /** Default tooltip for the action */
  'action.restore.tooltip': 'Gjenopprett til denne versjonen',
  /** Tooltip when action is disabled because the document is not already published */
  'action.unpublish.disabled.not-published': 'Dette dokumentet er ikkje publisert',
  /** Tooltip when action is disabled because the operation is not ready   */
  'action.unpublish.disabled.not-ready': 'Operasjonen er ikkje klar',
  /** Label for the "Unpublish" document action */
  'action.unpublish.label': 'Avpubliser',
  /** Fallback tooltip for the Unpublish document action when publish is invoked for a document with live edit enabled.*/
  'action.unpublish.live-edit.disabled':
    'Dette dokumentet har live redigering aktivert og kan ikkje avpubliserast',

  /** The text for the restore button on the deleted document banner */
  'banners.deleted-document-banner.restore-button.text': 'Gjenopprett siste versjon',
  /** The text content for the deleted document banner */
  'banners.deleted-document-banner.text': 'Dette dokumentet har blitt sletta.',
  /** The text content for the deprecated document type banner */
  'banners.deprecated-document-type-banner.text': 'Denne dokumenttypen er utgått.',
  /** The text for the permission check banner if the user only has one role, and it does not allow updating this document */
  'banners.permission-check-banner.missing-permission_create_one':
    'Din rolle <Roles/> har ikkje tillatelse til å opprette dette dokumentet.',
  /** The text for the permission check banner if the user only has multiple roles, but they do not allow updating this document */
  'banners.permission-check-banner.missing-permission_create_other':
    'Dine roller <Roles/> har ikkje tillatelse til å opprette dette dokumentet.',
  /** The text for the permission check banner if the user only has one role, and it does not allow updating this document */
  'banners.permission-check-banner.missing-permission_update_one':
    'Din rolle <Roles/> har ikkje tillatelse til å oppdatere dette dokumentet.',
  /** The text for the permission check banner if the user only has multiple roles, but they do not allow updating this document */
  'banners.permission-check-banner.missing-permission_update_other':
    'Dine roller <Roles/> har ikkje tillatelse til å oppdatere dette dokumentet.',
  /** The text for the reload button */
  'banners.reference-changed-banner.reason-changed.reload-button.text':
    'Last inn referansen på nytt',
  /** The text for the reference change banner if the reason is that the reference has been changed */
  'banners.reference-changed-banner.reason-changed.text':
    'Denne referansen har endra seg sidan du opna den.',
  /** The text for the close button */
  'banners.reference-changed-banner.reason-removed.close-button.text': 'Lukk referansen',
  /** The text for the reference change banner if the reason is that the reference has been deleted */
  'banners.reference-changed-banner.reason-removed.text':
    'Denne referansen har blitt fjerna sidan du opna den.',

  /** Browser/tab title when creating a new document of a given type */
  'browser-document-title.new-document': 'Ny {{schemaType}}',
  /** Browser/tab title when editing a document where the title cannot be resolved from preview configuration */
  'browser-document-title.untitled-document': 'Utan tittel',

  /** The action menu button aria-label */
  'buttons.action-menu-button.aria-label': 'Opne dokumenthandlingar',
  /** The action menu button tooltip */
  'buttons.action-menu-button.tooltip': 'Dokumenthandlinger',
  /** The aria-label for the split pane button on the document panel header */
  'buttons.split-pane-button.aria-label': 'Splitt panel til høgre',
  /** The tool tip for the split pane button on the document panel header */
  'buttons.split-pane-button.tooltip': 'Splitt panel til høgre',
  /** The title for the close button on the split pane on the document panel header */
  'buttons.split-pane-close-button.title': 'Lukk splitta panel',
  /** The title for the close group button on the split pane on the document panel header */
  'buttons.split-pane-close-group-button.title': 'Lukk panelgruppe',

  /** The text in the "Cancel" button in the confirm delete dialog that cancels the action and closes the dialog */
  'confirm-delete-dialog.cancel-button.text': 'Avbryt',
  /** Used in `confirm-delete-dialog.cdr-summary.title` */
  'confirm-delete-dialog.cdr-summary.document-count_one': '1 dokument',
  /** Used in `confirm-delete-dialog.cdr-summary.title` */
  'confirm-delete-dialog.cdr-summary.document-count_other': '{{count}} dokument',
  /** The text that appears in the subtitle `<summary>` that lists the datasets below the title */
  'confirm-delete-dialog.cdr-summary.subtitle_one': 'Dataset: {{datasets}}',
  /** The text that appears in the subtitle `<summary>` that lists the datasets below the title */
  'confirm-delete-dialog.cdr-summary.subtitle_other': 'Datasets: {{datasets}}',
  /** The text that appears in the subtitle `<summary>` that lists the datasets below the title */
  'confirm-delete-dialog.cdr-summary.subtitle_unavailable_one': 'Utilgjengeleg dataset',
  /** The text that appears in the subtitle `<summary>` that lists the datasets below the title */
  'confirm-delete-dialog.cdr-summary.subtitle_unavailable_other': 'Utilgjengelege datasets',
  /** The text that appears in the title `<summary>` that includes the list of CDRs (singular) */
  'confirm-delete-dialog.cdr-summary.title_one': '{{documentCount}} i eit anna dataset',
  /** The text that appears in the title `<summary>` that includes the list of CDRs (plural) */
  'confirm-delete-dialog.cdr-summary.title_other': '{{documentCount}} i {{count}} datasets',
  /** Appears when hovering over the copy button to copy */
  'confirm-delete-dialog.cdr-table.copy-id-button.tooltip': 'Kopier ID til utklippstavla',
  /** The header for the dataset column in the list of cross-dataset references found */
  'confirm-delete-dialog.cdr-table.dataset.label': 'Dataset',
  /** The header for the document ID column in the list of cross-dataset references found */
  'confirm-delete-dialog.cdr-table.document-id.label': 'Dokument-ID',
  /** The toast title when the copy button has been clicked */
  'confirm-delete-dialog.cdr-table.id-copied-toast.title':
    'Kopierte dokument-ID til utklippstavla!',
  /** The header for the project ID column in the list of cross-dataset references found */
  'confirm-delete-dialog.cdr-table.project-id.label': 'Prosjekt-ID',
  /** The text in the "Delete anyway" button in the confirm delete dialog that confirms the action */
  'confirm-delete-dialog.confirm-anyway-button.text_delete': 'Slett likevel',
  /** The text in the "Unpublish anyway" button in the confirm delete dialog that confirms the action */
  'confirm-delete-dialog.confirm-anyway-button.text_unpublish': 'Avpubliser likevel',
  /** The text in the "Delete now" button in the confirm delete dialog that confirms the action */
  'confirm-delete-dialog.confirm-button.text_delete': 'Slett no',
  /** The text in the "Unpublish now" button in the confirm delete dialog that confirms the action */
  'confirm-delete-dialog.confirm-button.text_unpublish': 'Avpubliser no',
  /** If no referring documents are found, this text appears above the cancel and confirmation buttons */
  'confirm-delete-dialog.confirmation.text_delete':
    'Er du sikker på at du vil slette “<DocumentTitle/>”?',
  /** If no referring documents are found, this text appears above the cancel and confirmation buttons */
  'confirm-delete-dialog.confirmation.text_unpublish':
    'Er du sikker på at du vil avpublisere “<DocumentTitle/>”?',
  /** The text body of the error dialog. */
  'confirm-delete-dialog.error.message.text':
    'Ein feil oppstod under lasting av refererande dokument.',
  /** The text in the retry button of the confirm delete dialog if an error occurred. */
  'confirm-delete-dialog.error.retry-button.text': 'Prøv igjen',
  /** The header of the confirm delete dialog if an error occurred while the confirm delete dialog was open. */
  'confirm-delete-dialog.error.title.text': 'Feil',
  /** The header of the confirm delete dialog */
  'confirm-delete-dialog.header.text_delete': 'Slett dokument?',
  /** The header of the confirm delete dialog */
  'confirm-delete-dialog.header.text_unpublish': 'Avpubliser dokument?',
  /** The text that appears while the referring documents are queried */
  'confirm-delete-dialog.loading.text': 'Ser etter refererande dokument…',
  /** Shown if there are references to other documents but the user does not have the permission to see the relevant document IDs */
  'confirm-delete-dialog.other-reference-count.title_one': '1 anna referanse ikkje vist',
  /** Shown if there are references to other documents but the user does not have the permission to see the relevant document IDs */
  'confirm-delete-dialog.other-reference-count.title_other':
    '{{count}} andre referansar ikkje viste',
  /** Text in the tooltip of this component if hovering over the info icon */
  'confirm-delete-dialog.other-reference-count.tooltip':
    'Vi kan ikkje vise metadata for desse referansane på grunn av ein manglande tilgangstoken for dei relaterte datasetta.',
  /** Appears when unable to render a document preview in the referring document list */
  'confirm-delete-dialog.preview-item.preview-unavailable.subtitle': 'ID: {{documentId}}',
  /** Appears when unable to render a document preview in the referring document list */
  'confirm-delete-dialog.preview-item.preview-unavailable.title':
    'Førehandsvising ikkje tilgjengeleg',
  /** Warns the user of affects to other documents if the action is confirmed (delete) */
  'confirm-delete-dialog.referential-integrity-disclaimer.text_delete':
    'Om du slettar dette dokumentet, vil dokument som refererer til det ikkje lenger kunne få tilgang til det.',
  /** Warns the user of affects to other documents if the action is confirmed (unpublish) */
  'confirm-delete-dialog.referential-integrity-disclaimer.text_unpublish':
    'Om du avpubliserer dette dokumentet, vil dokument som refererer til det ikkje lenger kunne få tilgang til det.',
  /** Tells the user the count of how many other referring documents there are before listing them. (singular) */
  'confirm-delete-dialog.referring-document-count.text_one':
    '1 dokument refererer til “<DocumentTitle/>”',
  /** Tells the user the count of how many other referring documents there are before listing them. (plural) */
  'confirm-delete-dialog.referring-document-count.text_other':
    '{{count}} dokument refererer til “<DocumentTitle/>”',
  /** Describes the list of documents that refer to the one trying to be deleted (delete) */
  'confirm-delete-dialog.referring-documents-descriptor.text_delete':
    'Du vil kanskje ikkje kunne slette “<DocumentTitle/>” fordi dei følgjande dokumenta refererer til det:',
  /** Describes the list of documents that refer to the one trying to be deleted (unpublish) */
  'confirm-delete-dialog.referring-documents-descriptor.text_unpublish':
    'Du vil kanskje ikkje kunne avpublisere “<DocumentTitle/>” fordi dei følgjande dokumenta refererer til det:',

  /** The text for the cancel button in the confirm dialog used in document action shortcuts if none is provided */
  'confirm-dialog.cancel-button.fallback-text': 'Avbryt',
  /** The text for the confirm button in the confirm dialog used in document action shortcuts if none is provided */
  'confirm-dialog.confirm-button.fallback-text': 'Stadfest',

  /** For the default structure definition, the title for the "Content" pane */
  'default-definition.content-title': 'Innhald',

  /** The text shown if there was an error while getting the document's title via a preview value */
  'doc-title.error.text': 'Feil: {{errorMessage}}',
  /** The text shown if the preview value for a document is non-existent or empty */
  'doc-title.fallback.text': 'Utan tittel',
  /** The text shown if a document's title via a preview value cannot be determined due to an unknown schema type */
  'doc-title.unknown-schema-type.text': 'Ukjend skjematype: {{schemaType}}',

  /** Tooltip text shown for the close button of the document inspector */
  'document-inspector.close-button.tooltip': 'Lukk',
  /** The title shown in the dialog header, when inspecting a valid document */
  'document-inspector.dialog.title': 'Inspiserar <DocumentTitle/>',
  /** The title shown in the dialog header, when the document being inspected is not created yet/has no value */
  'document-inspector.dialog.title-no-value': 'Ingen verdi',
  /** Title shown for menu item that opens the "Inspect" dialog */
  'document-inspector.menu-item.title': 'Inspiser',
  /** the placeholder text for the search input on the inspect dialog */
  'document-inspector.search.placeholder': 'Søk',
  /** The "parsed" view mode, meaning the JSON is searchable, collapsible etc */
  'document-inspector.view-mode.parsed': 'Analysert',
  /** The "raw" view mode, meaning the JSON is presented syntax-highlighted, but with no other features - optimal for copying */
  'document-inspector.view-mode.raw-json': 'Rå JSON',

  /** The text for when a form is hidden */
  'document-view.form-view.form-hidden': 'Dette skjemaet er skjult',
  /** Fallback title shown when a form title is not provided */
  'document-view.form-view.form-title-fallback': 'Utan tittel',
  /** The text for when the form view is loading a document */
  'document-view.form-view.loading': 'Lastar dokument…',
  /** The description of the sync lock toast on the form view */
  'document-view.form-view.sync-lock-toast.description':
    'Vennligst vent medan dokumentet blir synkronisert. Dette skjer vanligvis rett etter at dokumentet har blitt publisert, og det burde ikkje ta meir enn nokre få sekund',
  /** The title of the sync lock toast on the form view */
  'document-view.form-view.sync-lock-toast.title': 'Synkroniserer dokument…',

  /** The loading messaging for when the tooltip is still loading permission info */
  'insufficient-permissions-message-tooltip.loading-text': 'Lastar…',

  /** --- Menu items --- */
  /** The menu item group title to use for the Action menu items */
  'menu-item-groups.actions-group': 'Handlingar',
  /** The menu item group title to use for the Layout menu items */
  'menu-item-groups.layout-group': 'Oppsett',
  /** The menu item group title to use for the Sort menu items */
  'menu-item-groups.sorting-group': 'Sortering',

  /** The menu item title to use the compact view */
  'menu-items.layout.compact-view': 'Kompakt visning',
  /** The menu item title to use the detailed view */
  'menu-items.layout.detailed-view': 'Detaljert visning',
  /** The menu item title to Sort by Created */
  'menu-items.sort-by.created': 'Sorter etter Oppretta',
  /** The menu item title to Sort by Last Edited */
  'menu-items.sort-by.last-edited': 'Sorter etter Sist redigert',

  /** The link text of the no document type screen that appears directly below the subtitle */
  'no-document-types-screen.link-text': 'Lær korleis du legg til ein dokumenttype →',
  /** The subtitle of the no document type screen that appears directly below the title */
  'no-document-types-screen.subtitle': 'Vennligst definer minst ein dokumenttype i skjemaet ditt.',
  /** The title of the no document type screen */
  'no-document-types-screen.title': 'Ingen dokumenttypar',

  /** Text shown on back button visible on smaller breakpoints */
  'pane-header.back-button.text': 'Tilbake',
  /** tooltip text (via `title` attribute) for the menu button */
  'pane-header.context-menu-button.tooltip': 'Vis meny',
  /** Appears in a document list pane header if there are more than one option for create. This is the label for that menu */
  'pane-header.create-menu.label': 'Opprett',
  /** Tooltip displayed on the create new button in document lists */
  'pane-header.create-new-button.tooltip': 'Opprett nytt dokument',
  /** The `aria-label` for the disabled button in the pane header if create permissions are granted */
  'pane-header.disabled-created-button.aria-label': 'Utilstrekkelege rettar',

  /** The text shown in the tooltip of pane item previews of documents if there are unpublished edits */
  'pane-item.draft-status.has-draft.tooltip': 'Redigert <RelativeTime/>',
  /** The text shown in the tooltip of pane item previews of documents if there are no unpublished edits */
  'pane-item.draft-status.no-draft.tooltip': 'Ingen upubliserte endringar',
  /** The subtitle tor pane item previews if there isn't a matching schema type found */
  'pane-item.missing-schema-type.subtitle': 'Dokument: <Code>{{documentId}}</Code>',
  /** The title tor pane item previews if there isn't a matching schema type found */
  'pane-item.missing-schema-type.title':
    'Ingen skjema funne for type <Code>{{documentType}}</Code>',
  /** The text shown in the tooltip of pane item previews of documents if there are unpublished edits */
  'pane-item.published-status.has-published.tooltip': 'Publisert <RelativeTime/>',
  /** The text shown in the tooltip of pane item previews of documents if there are no unpublished edits */
  'pane-item.published-status.no-published.tooltip': 'Ingen upubliserte endringar',

  /** The text used in the document header title if there is an error */
  'panes.document-header-title.error.text': 'Feil: {{error}}',
  /** The text used in the document header title if creating a new item */
  'panes.document-header-title.new.text': 'Ny {{schemaType}}',
  /** The text used in the document header title if no other title can be determined */
  'panes.document-header-title.untitled.text': 'Utan tittel',
  /** The text for the retry button on the document list pane */
  'panes.document-list-pane.error.retry-button.text': 'Prøv igjen',
  /** The error text on the document list pane */
  'panes.document-list-pane.error.text': 'Feil: <Code>{{error}}</Code>',
  /** The error title on the document list pane */
  'panes.document-list-pane.error.title': 'Kunne ikkje hente liste-element',
  /** The text of the document list pane if more than a maximum number of documents are returned */
  'panes.document-list-pane.max-items.text': 'Viser maksimalt {{limit}} dokument',
  /** The text of the document list pane if no documents are found for a specified type */
  'panes.document-list-pane.no-documents-of-type.text': 'Ingen dokument av denne typen',
  /** The text of the document list pane if no documents are found */
  'panes.document-list-pane.no-documents.text': 'Ingen resultat funne',
  /** The text of the document list pane if no documents are found matching specified criteria */
  'panes.document-list-pane.no-matching-documents.text': 'Ingen passande dokument',
  /** The aria-label for the search input on the document list pane */
  'panes.document-list-pane.search-input.aria-label': 'Søk i liste',
  /** The search input for the search input on the document list pane */
  'panes.document-list-pane.search-input.placeholder': 'Søk i liste',
  /** The summary title when displaying an error for a document operation result */
  'panes.document-operation-results.error.summary.title': 'Detaljar',
  /** The text when a generic operation failed (fallback, generally not shown)  */
  'panes.document-operation-results.operation-error': 'Ein feil oppstod under {{context}}',
  /** The text when a delete operation failed  */
  'panes.document-operation-results.operation-error_delete':
    'Ein feil oppstod under forsøket på å slette dette dokumentet. Dette betyr vanlegvis at det er andre dokument som refererer til det.',
  /** The text when an unpublish operation failed  */
  'panes.document-operation-results.operation-error_unpublish':
    'Ein feil oppstod under forsøket på å avpublisere dette dokumentet. Dette betyr vanlegvis at det er andre dokument som refererer til det.',
  /** The text when a generic operation succeeded (fallback, generally not shown)  */
  'panes.document-operation-results.operation-success': 'Utførte {{context}} på dokumentet',
  /** The text when a delete operation succeeded  */
  'panes.document-operation-results.operation-success_delete': 'Dokumentet blei sletta',
  /** The text when a discard changes operation succeeded  */
  'panes.document-operation-results.operation-success_discardChanges':
    'Alle endringar sidan siste publisering har no blitt forkasta. Det forkasta utkastet kan framleis bli henta tilbake frå historikken',
  /** The text when a publish operation succeeded  */
  'panes.document-operation-results.operation-success_publish': 'Dokumentet blei publisert',
  /** The text when a restore operation succeeded  */
  'panes.document-operation-results.operation-success_restore': undefined, // '<Strong>{{title}}</Strong> was restored'
  /** The text when an unpublish operation succeeded  */
  'panes.document-operation-results.operation-success_unpublish':
    'Dokumentet blei avpublisert. Eit utkast har blitt oppretta frå den siste publiserte versjonen.',
  /** The document title shown when document title is "undefined" in operation message */
  'panes.document-operation-results.operation-undefined-title': 'Utan tittel',
  /** The title of the reconnecting toast */
  'panes.document-pane-provider.reconnecting.title': 'Tilkobling tapt. Kobler til på nytt…',
  /** The loading message for the document not found pane */
  'panes.document-pane.document-not-found.loading': 'Lastar dokument…',
  /** The text of the document not found pane if the schema is known */
  'panes.document-pane.document-not-found.text':
    'Dokumenttypen er ikkje definert, og eit dokument med <Code>{{id}}</Code>-identifikatoren kunne ikkje bli funne.',
  /** The title of the document not found pane if the schema is known */
  'panes.document-pane.document-not-found.title': 'Dokumentet blei ikkje funne',
  /** The text of the document not found pane if the schema is not found */
  'panes.document-pane.document-unknown-type.text':
    'Dette dokumentet har skjematypen <Code>{{documentType}}</Code>, som ikkje er definert som ein type i det lokale innhaldsstudio-skjemaet.',
  /** The title of the document not found pane if the schema is not found or unknown */
  'panes.document-pane.document-unknown-type.title':
    'Ukjent dokumenttype: <Code>{{documentType}}</Code>',
  /** The title of the document not found pane if the schema is unknown */
  'panes.document-pane.document-unknown-type.without-schema.text':
    'Dette dokumentet eksisterer ikkje, og ingen skjematype var spesifisert for det.',
  /** Default message shown while resolving the structure definition for an asynchronous node */
  'panes.resolving.default-message': 'Lastar…',
  /** Message shown while resolving the structure definition for an asynchronous node and it is taking a while (more than 5s) */
  'panes.resolving.slow-resolve-message': 'Lastar framleis…',
  /** The text to display when type is missing */
  'panes.unknown-pane-type.missing-type.text':
    'Strukturelement manglar påkrevd <Code>type</Code>-eigenskap.',
  /** The title of the unknown pane */
  'panes.unknown-pane-type.title': 'Ukjent paneltype',
  /** The text to display when type is unknown */
  'panes.unknown-pane-type.unknown-type.text':
    'Strukturelement av typen <Code>{{type}}</Code> er ikkje ein kjent entitet.',

  /** The text for the "Open preview" action for a document */
  'production-preview.menu-item.title': 'Opne førehandsvising',

  /** Label for button when status is saved */
  'status-bar.document-status-pulse.status.saved.text': 'Lagra',
  /** Label for button when status is syncing */
  'status-bar.document-status-pulse.status.syncing.text': 'Lagrar...',
  /** Accessibility label indicating when the document was last published, in relative time, eg "3 weeks ago" */
  'status-bar.publish-status-button.last-published-time.aria-label':
    'Sist publisert {{relativeTime}}',
  /** Text for tooltip showing explanation of timestamp/relative time, eg "Last published <RelativeTime/>" */
  'status-bar.publish-status-button.last-published-time.tooltip': 'Sist publisert <RelativeTime/>',
  /** Accessibility label indicating when the document was last updated, in relative time, eg "2 hours ago" */
  'status-bar.publish-status-button.last-updated-time.aria-label':
    'Sist oppdatert {{relativeTime}}',
  /** Text for tooltip showing explanation of timestamp/relative time, eg "Last updated <RelativeTime/>" */
  'status-bar.publish-status-button.last-updated-time.tooltip': 'Sist oppdatert <RelativeTime/>',
  /** Aria label for the button */
  'status-bar.review-changes-button.aria-label': 'Gå gjennom endringar',
  /** Label for button when status is saved */
  'status-bar.review-changes-button.status.saved.text': 'Lagra!',
  /** Label for button when status is syncing */
  'status-bar.review-changes-button.status.syncing.text': 'Lagrar...',
  /** Text for the secondary text for tooltip for the button */
  'status-bar.review-changes-button.tooltip.changes-saved': 'Endringar lagra',
  /** Primary text for tooltip for the button */
  'status-bar.review-changes-button.tooltip.text': 'Gå gjennom endringar',

  /** The text that appears in side the documentation link */
  'structure-error.docs-link.text': 'Sjå dokumentasjon',
  /** Labels the error message or error stack of the structure error screen */
  'structure-error.error.label': 'Feil',
  /** The header that appears at the top of the error screen */
  'structure-error.header.text': 'Oppdaga ein feil ved lesing av struktur',
  /** The text in the reload button to retry rendering the structure */
  'structure-error.reload-button.text': 'Last på nytt',
  /** Labels the structure path of the structure error screen */
  'structure-error.structure-path.label': 'Strukturveg',
})
