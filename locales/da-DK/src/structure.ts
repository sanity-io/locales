import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Tooltip when action button is disabled because the operation is not ready   */
  'action.delete.disabled.not-ready': 'Operationen er ikke klar',
  /** Tooltip when action button is disabled because the document does not exist */
  'action.delete.disabled.nothing-to-delete':
    'Dette dokument eksisterer endnu ikke eller er allerede slettet',
  /** Label for the "Delete" document action button */
  'action.delete.label': 'Slet',
  /** Label for the "Delete" document action while the document is being deleted */
  'action.delete.running.label': 'Sletter…',
  /** Message prompting the user to confirm discarding changes */
  'action.discard-changes.confirm-dialog.confirm-discard-changes':
    'Er du sikker på, at du vil forkaste alle ændringer siden sidst publiceret?',
  /** Tooltip when action is disabled because the document has no unpublished changes */
  'action.discard-changes.disabled.no-change': 'Dette dokument har ingen upublicerede ændringer',
  /** Tooltip when action is disabled because the document is not published */
  'action.discard-changes.disabled.not-published': 'Dette dokument er ikke publiceret',
  /** Tooltip when action button is disabled because the operation is not ready   */
  'action.discard-changes.disabled.not-ready': 'Operationen er ikke klar',
  /** Label for the "Discard changes" document action */
  'action.discard-changes.label': 'Forkast ændringer',
  /** Tooltip when action is disabled because the operation is not ready   */
  'action.duplicate.disabled.not-ready': 'Operationen er ikke klar',
  /** Tooltip when action is disabled because the document doesn't exist */
  'action.duplicate.disabled.nothing-to-duplicate':
    'Dette dokument eksisterer endnu ikke, så der er intet at duplikere',
  /** Label for the "Duplicate" document action */
  'action.duplicate.label': 'Duplikér',
  /** Label for the "Duplicate" document action while the document is being duplicated */
  'action.duplicate.running.label': 'Duplikerer…',
  /** Tooltip when publish button is disabled because the document is already published, and published time is unavailable.*/
  'action.publish.already-published.no-time-ago.tooltip': 'Allerede publiceret',
  /** Tooltip when publish button is disabled because the document is already published.*/
  'action.publish.already-published.tooltip': 'Publiceret for {{timeSincePublished}} siden',
  /** Tooltip when action is disabled because the studio is not ready.*/
  'action.publish.disabled.not-ready': 'Operationen er ikke klar',
  /** Label for action when there are pending changes.*/
  'action.publish.draft.label': 'Publicér',
  /** Label for the "Publish" document action when the document has live edit enabled.*/
  'action.publish.live-edit.label': 'Publicér',
  /** Fallback tooltip for the "Publish" document action when publish is invoked for a document with live edit enabled.*/
  'action.publish.live-edit.publish-disabled':
    'Kan ikke publicere, da Live Edit er aktiveret for denne dokumenttype',
  /** Tooltip for the "Publish" document action when the document has live edit enabled.*/
  'action.publish.live-edit.tooltip':
    'Live Edit er aktiveret for denne indholdstype, og publicering sker automatisk, når du foretager ændringer',
  /** Tooltip when publish button is disabled because there are no changes.*/
  'action.publish.no-changes.tooltip': 'Ingen upublicerede ændringer',
  /** Label for the "Publish" document action when there are no changes.*/
  'action.publish.published.label': 'Publiceret',
  /** Label for the "Publish" document action while publish is being executed.*/
  'action.publish.running.label': 'Publicerer…',
  /** Tooltip when the "Publish" document action is disabled due to validation issues */
  'action.publish.validation-issues.tooltip':
    'Der er valideringsfejl, der skal rettes, før dette dokument kan publiceres',
  /** Tooltip when publish button is waiting for validation and async tasks to complete.*/
  'action.publish.waiting': 'Venter på, at opgaverne er færdige før publicering',
  /** Message prompting the user to confirm that they want to restore to an earlier version*/
  'action.restore.confirm.message': 'Er du sikker på, at du vil gendanne dette dokument?',
  /** Fallback tooltip for when user is looking at the initial version */
  'action.restore.disabled.cannot-restore-initial':
    'Du kan ikke gendanne til den oprindelige version',
  /** Label for the "Restore" document action */
  'action.restore.label': 'Gendan',
  /** Default tooltip for the action */
  'action.restore.tooltip': 'Gendan til denne version',
  /** Tooltip when action is disabled because the document is not already published */
  'action.unpublish.disabled.not-published': 'Dette dokument er ikke offentliggjort',
  /** Tooltip when action is disabled because the operation is not ready   */
  'action.unpublish.disabled.not-ready': 'Operationen er ikke klar',
  /** Label for the "Unpublish" document action */
  'action.unpublish.label': 'Afpublisér',
  /** Fallback tooltip for the Unpublish document action when publish is invoked for a document with live edit enabled.*/
  'action.unpublish.live-edit.disabled':
    'Dette dokument har live redigering aktiveret og kan ikke afpubliseres',

  /** The text for the restore button on the deleted document banner */
  'banners.deleted-document-banner.restore-button.text': 'Gendan seneste version',
  /** The text content for the deleted document banner */
  'banners.deleted-document-banner.text': 'Dette dokument er blevet slettet.',
  /** The text content for the deprecated document type banner */
  'banners.deprecated-document-type-banner.text': 'Denne dokumenttype er blevet udfaset.',
  /** The text for the permission check banner if the user only has one role, and it does not allow updating this document */
  'banners.permission-check-banner.missing-permission_create_one':
    'Din rolle <Roles/> har ikke tilladelse til at oprette dette dokument.',
  /** The text for the permission check banner if the user only has multiple roles, but they do not allow updating this document */
  'banners.permission-check-banner.missing-permission_create_other':
    'Dine roller <Roles/> har ikke tilladelse til at oprette dette dokument.',
  /** The text for the permission check banner if the user only has one role, and it does not allow updating this document */
  'banners.permission-check-banner.missing-permission_update_one':
    'Din rolle <Roles/> har ikke tilladelse til at opdatere dette dokument.',
  /** The text for the permission check banner if the user only has multiple roles, but they do not allow updating this document */
  'banners.permission-check-banner.missing-permission_update_other':
    'Dine roller <Roles/> har ikke tilladelse til at opdatere dette dokument.',
  /** The text for the reload button */
  'banners.reference-changed-banner.reason-changed.reload-button.text': 'Genindlæs reference',
  /** The text for the reference change banner if the reason is that the reference has been changed */
  'banners.reference-changed-banner.reason-changed.text':
    'Denne reference er ændret, siden du åbnede den.',
  /** The text for the close button */
  'banners.reference-changed-banner.reason-removed.close-button.text': 'Luk reference',
  /** The text for the reference change banner if the reason is that the reference has been deleted */
  'banners.reference-changed-banner.reason-removed.text':
    'Denne reference er blevet fjernet, siden du åbnede den.',

  /** Browser/tab title when creating a new document of a given type */
  'browser-document-title.new-document': 'Nyt {{schemaType}}',
  /** Browser/tab title when editing a document where the title cannot be resolved from preview configuration */
  'browser-document-title.untitled-document': 'Uden titel',

  /** The action menu button aria-label */
  'buttons.action-menu-button.aria-label': 'Åbn dokumenthandlinger',
  /** The action menu button tooltip */
  'buttons.action-menu-button.tooltip': 'Dokumenthandlinger',
  /** The aria-label for the split pane button on the document panel header */
  'buttons.split-pane-button.aria-label': 'Opdel rude til højre',
  /** The tool tip for the split pane button on the document panel header */
  'buttons.split-pane-button.tooltip': 'Opdel rude til højre',
  /** The title for the close button on the split pane on the document panel header */
  'buttons.split-pane-close-button.title': 'Luk splitrude',
  /** The title for the close group button on the split pane on the document panel header */
  'buttons.split-pane-close-group-button.title': 'Luk rudesamling',

  /** The text in the "Cancel" button in the confirm delete dialog that cancels the action and closes the dialog */
  'confirm-delete-dialog.cancel-button.text': 'Annuller',
  /** Used in `confirm-delete-dialog.cdr-summary.title` */
  'confirm-delete-dialog.cdr-summary.document-count_one': '1 dokument',
  /** Used in `confirm-delete-dialog.cdr-summary.title` */
  'confirm-delete-dialog.cdr-summary.document-count_other': '{{count}} dokumenter',
  /** The text that appears in the subtitle `<summary>` that lists the datasets below the title */
  'confirm-delete-dialog.cdr-summary.subtitle_one': 'Datasæt: {{datasets}}',
  /** The text that appears in the subtitle `<summary>` that lists the datasets below the title */
  'confirm-delete-dialog.cdr-summary.subtitle_other': 'Datasæt: {{datasets}}',
  /** The text that appears in the subtitle `<summary>` that lists the datasets below the title */
  'confirm-delete-dialog.cdr-summary.subtitle_unavailable_one': 'Utilgængeligt datasæt',
  /** The text that appears in the subtitle `<summary>` that lists the datasets below the title */
  'confirm-delete-dialog.cdr-summary.subtitle_unavailable_other': 'Utilgængelige datasæt',
  /** The text that appears in the title `<summary>` that includes the list of CDRs (singular) */
  'confirm-delete-dialog.cdr-summary.title_one': '{{documentCount}} i et andet datasæt',
  /** The text that appears in the title `<summary>` that includes the list of CDRs (plural) */
  'confirm-delete-dialog.cdr-summary.title_other': '{{documentCount}} i {{count}} datasæt',
  /** Appears when hovering over the copy button to copy */
  'confirm-delete-dialog.cdr-table.copy-id-button.tooltip': 'Kopier ID til udklipsholder',
  /** The header for the dataset column in the list of cross-dataset references found */
  'confirm-delete-dialog.cdr-table.dataset.label': 'Datasæt',
  /** The header for the document ID column in the list of cross-dataset references found */
  'confirm-delete-dialog.cdr-table.document-id.label': 'Dokument-ID',
  /** The toast title when the copy button has been clicked */
  'confirm-delete-dialog.cdr-table.id-copied-toast.title':
    'Kopieret dokument-ID til udklipsholder!',
  /** The header for the project ID column in the list of cross-dataset references found */
  'confirm-delete-dialog.cdr-table.project-id.label': 'Projekt-ID',
  /** The text in the "Delete anyway" button in the confirm delete dialog that confirms the action */
  'confirm-delete-dialog.confirm-anyway-button.text_delete': 'Slet alligevel',
  /** The text in the "Unpublish anyway" button in the confirm delete dialog that confirms the action */
  'confirm-delete-dialog.confirm-anyway-button.text_unpublish': 'Afpublicer alligevel',
  /** The text in the "Delete now" button in the confirm delete dialog that confirms the action */
  'confirm-delete-dialog.confirm-button.text_delete': 'Slet nu',
  /** The text in the "Unpublish now" button in the confirm delete dialog that confirms the action */
  'confirm-delete-dialog.confirm-button.text_unpublish': 'Afpublicer nu',
  /** If no referring documents are found, this text appears above the cancel and confirmation buttons */
  'confirm-delete-dialog.confirmation.text_delete':
    'Er du sikker på, at du vil slette “<DocumentTitle/>”?',
  /** If no referring documents are found, this text appears above the cancel and confirmation buttons */
  'confirm-delete-dialog.confirmation.text_unpublish':
    'Er du sikker på, at du vil afpublicere “<DocumentTitle/>”?',
  /** The text body of the error dialog. */
  'confirm-delete-dialog.error.message.text':
    'Der opstod en fejl under indlæsning af refererende dokumenter.',
  /** The text in the retry button of the confirm delete dialog if an error occurred. */
  'confirm-delete-dialog.error.retry-button.text': 'Prøv igen',
  /** The header of the confirm delete dialog if an error occurred while the confirm delete dialog was open. */
  'confirm-delete-dialog.error.title.text': 'Fejl',
  /** The header of the confirm delete dialog */
  'confirm-delete-dialog.header.text_delete': 'Slet dokument?',
  /** The header of the confirm delete dialog */
  'confirm-delete-dialog.header.text_unpublish': 'Afpublicer dokument?',
  /** The text that appears while the referring documents are queried */
  'confirm-delete-dialog.loading.text': 'Leder efter henvisende dokumenter…',
  /** Shown if there are references to other documents but the user does not have the permission to see the relevant document IDs */
  'confirm-delete-dialog.other-reference-count.title_one': '1 anden reference ikke vist',
  /** Shown if there are references to other documents but the user does not have the permission to see the relevant document IDs */
  'confirm-delete-dialog.other-reference-count.title_other': '{{count}} andre referencer ikke vist',
  /** Text in the tooltip of this component if hovering over the info icon */
  'confirm-delete-dialog.other-reference-count.tooltip':
    'Vi kan ikke vise metadata for disse referencer på grund af en manglende adgangstoken for de relaterede datasæt.',
  /** Appears when unable to render a document preview in the referring document list */
  'confirm-delete-dialog.preview-item.preview-unavailable.subtitle': 'ID: {{documentId}}',
  /** Appears when unable to render a document preview in the referring document list */
  'confirm-delete-dialog.preview-item.preview-unavailable.title':
    'Forhåndsvisning ikke tilgængelig',
  /** Warns the user of affects to other documents if the action is confirmed (delete) */
  'confirm-delete-dialog.referential-integrity-disclaimer.text_delete':
    'Hvis du sletter dette dokument, vil dokumenter, der henviser til det, ikke længere kunne få adgang til det.',
  /** Warns the user of affects to other documents if the action is confirmed (unpublish) */
  'confirm-delete-dialog.referential-integrity-disclaimer.text_unpublish':
    'Hvis du afpublicerer dette dokument, vil dokumenter, der henviser til det, ikke længere kunne få adgang til det.',
  /** Tells the user the count of how many other referring documents there are before listing them. (singular) */
  'confirm-delete-dialog.referring-document-count.text_one':
    '1 dokument henviser til “<DocumentTitle/>”',
  /** Tells the user the count of how many other referring documents there are before listing them. (plural) */
  'confirm-delete-dialog.referring-document-count.text_other':
    '{{count}} dokumenter henviser til “<DocumentTitle/>”',
  /** Describes the list of documents that refer to the one trying to be deleted (delete) */
  'confirm-delete-dialog.referring-documents-descriptor.text_delete':
    'Du kan muligvis ikke slette “<DocumentTitle/>” fordi følgende dokumenter henviser til det:',
  /** Describes the list of documents that refer to the one trying to be deleted (unpublish) */
  'confirm-delete-dialog.referring-documents-descriptor.text_unpublish':
    'Du kan muligvis ikke afpublicere “<DocumentTitle/>” fordi følgende dokumenter henviser til det:',

  /** The text for the cancel button in the confirm dialog used in document action shortcuts if none is provided */
  'confirm-dialog.cancel-button.fallback-text': 'Annuller',
  /** The text for the confirm button in the confirm dialog used in document action shortcuts if none is provided */
  'confirm-dialog.confirm-button.fallback-text': 'Bekræft',

  /** For the default structure definition, the title for the "Content" pane */
  'default-definition.content-title': 'Indhold',

  /** The text shown if there was an error while getting the document's title via a preview value */
  'doc-title.error.text': 'Fejl: {{errorMessage}}',
  /** The text shown if the preview value for a document is non-existent or empty */
  'doc-title.fallback.text': 'Uden titel',
  /** The text shown if a document's title via a preview value cannot be determined due to an unknown schema type */
  'doc-title.unknown-schema-type.text': 'Ukendt skematype: {{schemaType}}',

  /** Tooltip text shown for the close button of the document inspector */
  'document-inspector.close-button.tooltip': 'Luk',
  /** The title shown in the dialog header, when inspecting a valid document */
  'document-inspector.dialog.title': 'Inspekterer <DocumentTitle/>',
  /** The title shown in the dialog header, when the document being inspected is not created yet/has no value */
  'document-inspector.dialog.title-no-value': 'Ingen værdi',
  /** Title shown for menu item that opens the "Inspect" dialog */
  'document-inspector.menu-item.title': 'Inspekter',
  /** the placeholder text for the search input on the inspect dialog */
  'document-inspector.search.placeholder': 'Søg',
  /** The "parsed" view mode, meaning the JSON is searchable, collapsible etc */
  'document-inspector.view-mode.parsed': 'Analyseret',
  /** The "raw" view mode, meaning the JSON is presented syntax-highlighted, but with no other features - optimal for copying */
  'document-inspector.view-mode.raw-json': 'Rå JSON',

  /** The text for when a form is hidden */
  'document-view.form-view.form-hidden': 'Denne formular er skjult',
  /** Fallback title shown when a form title is not provided */
  'document-view.form-view.form-title-fallback': 'Uden titel',
  /** The text for when the form view is loading a document */
  'document-view.form-view.loading': 'Indlæser dokument…',
  /** The description of the sync lock toast on the form view */
  'document-view.form-view.sync-lock-toast.description':
    'Vent venligst mens dokumentet synkroniseres. Dette sker normalt lige efter at dokumentet er blevet offentliggjort, og det burde ikke tage mere end et par sekunder',
  /** The title of the sync lock toast on the form view */
  'document-view.form-view.sync-lock-toast.title': 'Synkroniserer dokument…',

  /** The loading messaging for when the tooltip is still loading permission info */
  'insufficient-permissions-message-tooltip.loading-text': 'Indlæser…',

  /** --- Menu items --- */
  /** The menu item group title to use for the Action menu items */
  'menu-item-groups.actions-group': 'Handlinger',
  /** The menu item group title to use for the Layout menu items */
  'menu-item-groups.layout-group': 'Layout',
  /** The menu item group title to use for the Sort menu items */
  'menu-item-groups.sorting-group': 'Sortering',

  /** The menu item title to use the compact view */
  'menu-items.layout.compact-view': 'Kompakt visning',
  /** The menu item title to use the detailed view */
  'menu-items.layout.detailed-view': 'Detaljeret visning',
  /** The menu item title to Sort by Created */
  'menu-items.sort-by.created': 'Sorter efter Oprettet',
  /** The menu item title to Sort by Last Edited */
  'menu-items.sort-by.last-edited': 'Sorter efter Sidst redigeret',

  /** The link text of the no document type screen that appears directly below the subtitle */
  'no-document-types-screen.link-text': 'Lær hvordan du tilføjer en dokumenttype →',
  /** The subtitle of the no document type screen that appears directly below the title */
  'no-document-types-screen.subtitle': 'Definer venligst mindst én dokumenttype i dit skema.',
  /** The title of the no document type screen */
  'no-document-types-screen.title': 'Ingen dokumenttyper',

  /** Text shown on back button visible on smaller breakpoints */
  'pane-header.back-button.text': 'Tilbage',
  /** tooltip text (via `title` attribute) for the menu button */
  'pane-header.context-menu-button.tooltip': 'Vis menu',
  /** Appears in a document list pane header if there are more than one option for create. This is the label for that menu */
  'pane-header.create-menu.label': 'Opret',
  /** Tooltip displayed on the create new button in document lists */
  'pane-header.create-new-button.tooltip': 'Opret nyt dokument',
  /** The `aria-label` for the disabled button in the pane header if create permissions are granted */
  'pane-header.disabled-created-button.aria-label': 'Utilstrækkelige tilladelser',

  /** The text shown in the tooltip of pane item previews of documents if there are unpublished edits */
  'pane-item.draft-status.has-draft.tooltip': 'Redigeret <RelativeTime/>',
  /** The text shown in the tooltip of pane item previews of documents if there are no unpublished edits */
  'pane-item.draft-status.no-draft.tooltip': 'Ingen upublicerede redigeringer',
  /** The subtitle tor pane item previews if there isn't a matching schema type found */
  'pane-item.missing-schema-type.subtitle': 'Dokument: <Code>{{documentId}}</Code>',
  /** The title tor pane item previews if there isn't a matching schema type found */
  'pane-item.missing-schema-type.title':
    'Intet skema fundet for typen <Code>{{documentType}}</Code>',
  /** The text shown in the tooltip of pane item previews of documents if there are unpublished edits */
  'pane-item.published-status.has-published.tooltip': 'Offentliggjort <RelativeTime/>',
  /** The text shown in the tooltip of pane item previews of documents if there are no unpublished edits */
  'pane-item.published-status.no-published.tooltip': 'Ingen upublicerede redigeringer',

  /** The text used in the document header title if there is an error */
  'panes.document-header-title.error.text': 'Fejl: {{error}}',
  /** The text used in the document header title if creating a new item */
  'panes.document-header-title.new.text': 'Ny {{schemaType}}',
  /** The text used in the document header title if no other title can be determined */
  'panes.document-header-title.untitled.text': 'Uden titel',
  /** The text for the retry button on the document list pane */
  'panes.document-list-pane.error.retry-button.text': 'Prøv igen',
  /** The error text on the document list pane */
  'panes.document-list-pane.error.text': 'Fejl: <Code>{{error}}</Code>',
  /** The error title on the document list pane */
  'panes.document-list-pane.error.title': 'Kunne ikke hente liste elementer',
  /** The text of the document list pane if more than a maximum number of documents are returned */
  'panes.document-list-pane.max-items.text': 'Viser maksimalt {{limit}} dokumenter',
  /** The text of the document list pane if no documents are found for a specified type */
  'panes.document-list-pane.no-documents-of-type.text': 'Ingen dokumenter af denne type',
  /** The text of the document list pane if no documents are found */
  'panes.document-list-pane.no-documents.text': 'Ingen resultater fundet',
  /** The text of the document list pane if no documents are found matching specified criteria */
  'panes.document-list-pane.no-matching-documents.text': 'Ingen matchende dokumenter',
  /** The aria-label for the search input on the document list pane */
  'panes.document-list-pane.search-input.aria-label': 'Søg i liste',
  /** The search input for the search input on the document list pane */
  'panes.document-list-pane.search-input.placeholder': 'Søg i liste',
  /** The summary title when displaying an error for a document operation result */
  'panes.document-operation-results.error.summary.title': 'Detaljer',
  /** The text when a generic operation failed (fallback, generally not shown)  */
  'panes.document-operation-results.operation-error': 'Der opstod en fejl under {{context}}',
  /** The text when a delete operation failed  */
  'panes.document-operation-results.operation-error_delete':
    'Der opstod en fejl under forsøget på at slette dette dokument. Dette betyder normalt, at der er andre dokumenter, der refererer til det.',
  /** The text when an unpublish operation failed  */
  'panes.document-operation-results.operation-error_unpublish':
    'Der opstod en fejl under forsøget på at afpublisere dette dokument. Dette betyder normalt, at der er andre dokumenter, der refererer til det.',
  /** The text when a generic operation succeeded (fallback, generally not shown)  */
  'panes.document-operation-results.operation-success':
    'Handlingen {{context}} på dokumentet blev udført med succes',
  /** The text when a delete operation succeeded  */
  'panes.document-operation-results.operation-success_delete': 'Dokumentet blev slettet med succes',
  /** The text when a discard changes operation succeeded  */
  'panes.document-operation-results.operation-success_discardChanges':
    'Alle ændringer siden sidste offentliggørelse er nu forkastet. Det forkastede udkast kan stadig gendannes fra historikken',
  /** The text when a duplicate operation succeeded  */
  'panes.document-operation-results.operation-success_duplicate':
    'Dokumentet blev kopieret med succes',
  /** The text when a publish operation succeeded  */
  'panes.document-operation-results.operation-success_publish':
    '<Strong>{{title}}</Strong> blev offentliggjort',
  /** The text when a restore operation succeeded  */
  'panes.document-operation-results.operation-success_restore':
    '<Strong>{{title}}</Strong> blev gendannet',
  /** The text when an unpublish operation succeeded  */
  'panes.document-operation-results.operation-success_unpublish':
    '<Strong>{{title}}</Strong> blev afpubliceret. Et udkast er blevet oprettet fra den seneste publicerede version.',
  /** The document title shown when document title is "undefined" in operation message */
  'panes.document-operation-results.operation-undefined-title': 'Uden titel',
  /** The title of the reconnecting toast */
  'panes.document-pane-provider.reconnecting.title':
    'Forbindelsen mistet. Genopretter forbindelse…',
  /** The loading message for the document not found pane */
  'panes.document-pane.document-not-found.loading': 'Indlæser dokument…',
  /** The text of the document not found pane if the schema is known */
  'panes.document-pane.document-not-found.text':
    'Dokumenttypen er ikke defineret, og et dokument med identifikatoren <Code>{{id}}</Code> kunne ikke findes.',
  /** The title of the document not found pane if the schema is known */
  'panes.document-pane.document-not-found.title': 'Dokumentet blev ikke fundet',
  /** The text of the document not found pane if the schema is not found */
  'panes.document-pane.document-unknown-type.text':
    'Dette dokument har skematypen <Code>{{documentType}}</Code>, som ikke er defineret som en type i det lokale content studio-skema.',
  /** The title of the document not found pane if the schema is not found or unknown */
  'panes.document-pane.document-unknown-type.title':
    'Ukendt dokumenttype: <Code>{{documentType}}</Code>',
  /** The title of the document not found pane if the schema is unknown */
  'panes.document-pane.document-unknown-type.without-schema.text':
    'Dette dokument eksisterer ikke, og der blev ikke angivet nogen skematype for det.',
  /** Default message shown while resolving the structure definition for an asynchronous node */
  'panes.resolving.default-message': 'Indlæser…',
  /** Message shown while resolving the structure definition for an asynchronous node and it is taking a while (more than 5s) */
  'panes.resolving.slow-resolve-message': 'Indlæser stadig…',
  /** The text to display when type is missing */
  'panes.unknown-pane-type.missing-type.text':
    'Strukturelement mangler den påkrævede <Code>type</Code> egenskab.',
  /** The title of the unknown pane */
  'panes.unknown-pane-type.title': 'Ukendt paneltype',
  /** The text to display when type is unknown */
  'panes.unknown-pane-type.unknown-type.text':
    'Strukturelement af typen <Code>{{type}}</Code> er ikke en kendt enhed.',

  /** The text for the "Open preview" action for a document */
  'production-preview.menu-item.title': 'Åbn forhåndsvisning',

  /** Label for button when status is saved */
  'status-bar.document-status-pulse.status.saved.text': 'Gemt',
  /** Label for button when status is syncing */
  'status-bar.document-status-pulse.status.syncing.text': 'Gemmer...',
  /** Accessibility label indicating when the document was last published, in relative time, eg "3 weeks ago" */
  'status-bar.publish-status-button.last-published-time.aria-label':
    'Sidst publiceret {{relativeTime}}',
  /** Text for tooltip showing explanation of timestamp/relative time, eg "Last published <RelativeTime/>" */
  'status-bar.publish-status-button.last-published-time.tooltip':
    'Sidst publiceret <RelativeTime/>',
  /** Accessibility label indicating when the document was last updated, in relative time, eg "2 hours ago" */
  'status-bar.publish-status-button.last-updated-time.aria-label':
    'Sidst opdateret {{relativeTime}}',
  /** Text for tooltip showing explanation of timestamp/relative time, eg "Last updated <RelativeTime/>" */
  'status-bar.publish-status-button.last-updated-time.tooltip': 'Sidst opdateret <RelativeTime/>',
  /** Aria label for the button */
  'status-bar.review-changes-button.aria-label': 'Gennemgå ændringer',
  /** Label for button when status is saved */
  'status-bar.review-changes-button.status.saved.text': 'Gemt!',
  /** Label for button when status is syncing */
  'status-bar.review-changes-button.status.syncing.text': 'Gemmer...',
  /** Text for the secondary text for tooltip for the button */
  'status-bar.review-changes-button.tooltip.changes-saved': 'Ændringer gemt',
  /** Primary text for tooltip for the button */
  'status-bar.review-changes-button.tooltip.text': 'Gennemgå ændringer',

  /** The text that appears in side the documentation link */
  'structure-error.docs-link.text': 'Se dokumentation',
  /** Labels the error message or error stack of the structure error screen */
  'structure-error.error.label': 'Fejl',
  /** The header that appears at the top of the error screen */
  'structure-error.header.text': 'Stødte på en fejl under læsning af strukturen',
  /** The text in the reload button to retry rendering the structure */
  'structure-error.reload-button.text': 'Genindlæs',
  /** Labels the structure path of the structure error screen */
  'structure-error.structure-path.label': 'Struktur sti',
})
