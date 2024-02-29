import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Tooltip when action button is disabled because the operation is not ready   */
  'action.delete.disabled.not-ready': 'Operatie niet klaar',
  /** Tooltip when action button is disabled because the document does not exist */
  'action.delete.disabled.nothing-to-delete': 'Dit document bestaat nog niet of is al verwijderd',
  /** Label for the "Delete" document action button */
  'action.delete.label': 'Verwijderen',
  /** Label for the "Delete" document action while the document is being deleted */
  'action.delete.running.label': 'Verwijderen…',
  /** Message prompting the user to confirm discarding changes */
  'action.discard-changes.confirm-dialog.confirm-discard-changes':
    'Weet u zeker dat u alle wijzigingen wilt verwijderen sinds de laatste publicatie?',
  /** Tooltip when action is disabled because the document has no unpublished changes */
  'action.discard-changes.disabled.no-change':
    'Dit document heeft geen ongepubliceerde wijzigingen',
  /** Tooltip when action is disabled because the document is not published */
  'action.discard-changes.disabled.not-published': 'Dit document is niet gepubliceerd',
  /** Tooltip when action button is disabled because the operation is not ready   */
  'action.discard-changes.disabled.not-ready': 'Operatie niet klaar',
  /** Label for the "Discard changes" document action */
  'action.discard-changes.label': 'Wijzigingen verwijderen',
  /** Tooltip when action is disabled because the operation is not ready   */
  'action.duplicate.disabled.not-ready': 'Operatie niet klaar',
  /** Tooltip when action is disabled because the document doesn't exist */
  'action.duplicate.disabled.nothing-to-duplicate':
    'Dit document bestaat nog niet dus er is niets om te dupliceren',
  /** Label for the "Duplicate" document action */
  'action.duplicate.label': 'Dupliceren',
  /** Label for the "Duplicate" document action while the document is being duplicated */
  'action.duplicate.running.label': 'Dupliceren…',
  /** Tooltip when publish button is disabled because the document is already published, and published time is unavailable.*/
  'action.publish.already-published.no-time-ago.tooltip': 'Al gepubliceerd',
  /** Tooltip when publish button is disabled because the document is already published.*/
  'action.publish.already-published.tooltip': 'Gepubliceerd {{timeSincePublished}} geleden',
  /** Tooltip when action is disabled because the studio is not ready.*/
  'action.publish.disabled.not-ready': 'Operatie niet klaar',
  /** Label for action when there are pending changes.*/
  'action.publish.draft.label': 'Publiceren',
  /** Label for the "Publish" document action when the document has live edit enabled.*/
  'action.publish.live-edit.label': 'Publiceren',
  /** Fallback tooltip for the "Publish" document action when publish is invoked for a document with live edit enabled.*/
  'action.publish.live-edit.publish-disabled':
    'Kan niet publiceren omdat Live Edit is ingeschakeld voor dit documenttype',
  /** Tooltip for the "Publish" document action when the document has live edit enabled.*/
  'action.publish.live-edit.tooltip':
    'Live Edit is ingeschakeld voor dit inhoudstype en publiceren gebeurt automatisch terwijl u wijzigingen maakt',
  /** Tooltip when publish button is disabled because there are no changes.*/
  'action.publish.no-changes.tooltip': 'Geen ongepubliceerde wijzigingen',
  /** Label for the "Publish" document action when there are no changes.*/
  'action.publish.published.label': 'Gepubliceerd',
  /** Label for the "Publish" document action while publish is being executed.*/
  'action.publish.running.label': 'Publiceren…',
  /** Tooltip when the "Publish" document action is disabled due to validation issues */
  'action.publish.validation-issues.tooltip':
    'Er zijn validatiefouten die opgelost moeten worden voordat dit document kan worden gepubliceerd',
  /** Tooltip when publish button is waiting for validation and async tasks to complete.*/
  'action.publish.waiting': 'Wachten op het afronden van taken voordat er gepubliceerd wordt',
  /** Message prompting the user to confirm that they want to restore to an earlier version*/
  'action.restore.confirm.message': 'Weet u zeker dat u dit document wilt herstellen?',
  /** Fallback tooltip for when user is looking at the initial version */
  'action.restore.disabled.cannot-restore-initial':
    'U kunt niet herstellen naar de initiële versie',
  /** Label for the "Restore" document action */
  'action.restore.label': 'Herstellen',
  /** Default tooltip for the action */
  'action.restore.tooltip': 'Herstel naar deze versie',
  /** Tooltip when action is disabled because the document is not already published */
  'action.unpublish.disabled.not-published': 'Dit document is niet gepubliceerd',
  /** Tooltip when action is disabled because the operation is not ready   */
  'action.unpublish.disabled.not-ready': 'Operatie niet klaar',
  /** Label for the "Unpublish" document action */
  'action.unpublish.label': 'Depubliceren',
  /** Fallback tooltip for the Unpublish document action when publish is invoked for a document with live edit enabled.*/
  'action.unpublish.live-edit.disabled':
    'Dit document heeft live bewerken ingeschakeld en kan niet worden gedepubliceerd',

  /** The text for the restore button on the deleted document banner */
  'banners.deleted-document-banner.restore-button.text': 'Herstel meest recente versie',
  /** The text content for the deleted document banner */
  'banners.deleted-document-banner.text': 'Dit document is verwijderd.',
  /** The text content for the deprecated document type banner */
  'banners.deprecated-document-type-banner.text': 'Dit documenttype is verouderd.',
  /** The text for the permission check banner if the user only has one role, and it does not allow updating this document */
  'banners.permission-check-banner.missing-permission_create_one':
    'Uw rol <Roles/> heeft geen toestemming om dit document te creëren.',
  /** The text for the permission check banner if the user only has multiple roles, but they do not allow updating this document */
  'banners.permission-check-banner.missing-permission_create_other':
    'Uw rollen <Roles/> hebben geen toestemming om dit document te creëren.',
  /** The text for the permission check banner if the user only has one role, and it does not allow updating this document */
  'banners.permission-check-banner.missing-permission_update_one':
    'Uw rol <Roles/> heeft geen toestemming om dit document bij te werken.',
  /** The text for the permission check banner if the user only has multiple roles, but they do not allow updating this document */
  'banners.permission-check-banner.missing-permission_update_other':
    'Uw rollen <Roles/> hebben geen toestemming om dit document bij te werken.',
  /** The text for the reload button */
  'banners.reference-changed-banner.reason-changed.reload-button.text': 'Referentie herladen',
  /** The text for the reference change banner if the reason is that the reference has been changed */
  'banners.reference-changed-banner.reason-changed.text':
    'Deze referentie is gewijzigd sinds u deze geopend heeft.',
  /** The text for the close button */
  'banners.reference-changed-banner.reason-removed.close-button.text': 'Referentie sluiten',
  /** The text for the reference change banner if the reason is that the reference has been deleted */
  'banners.reference-changed-banner.reason-removed.text':
    'Deze referentie is verwijderd sinds u deze geopend heeft.',

  /** Browser/tab title when creating a new document of a given type */
  'browser-document-title.new-document': 'Nieuw {{schemaType}}',
  /** Browser/tab title when editing a document where the title cannot be resolved from preview configuration */
  'browser-document-title.untitled-document': 'Naamloos',

  /** The action menu button aria-label */
  'buttons.action-menu-button.aria-label': 'Documentacties openen',
  /** The action menu button tooltip */
  'buttons.action-menu-button.tooltip': 'Documentacties',
  /** The aria-label for the split pane button on the document panel header */
  'buttons.split-pane-button.aria-label': 'Deelvenster rechts splitsen',
  /** The tool tip for the split pane button on the document panel header */
  'buttons.split-pane-button.tooltip': 'Deelvenster rechts splitsen',
  /** The title for the close button on the split pane on the document panel header */
  'buttons.split-pane-close-button.title': 'Sluit deelvenster',
  /** The title for the close group button on the split pane on the document panel header */
  'buttons.split-pane-close-group-button.title': 'Sluit paneelgroep',

  /** The text in the "Cancel" button in the confirm delete dialog that cancels the action and closes the dialog */
  'confirm-delete-dialog.cancel-button.text': 'Annuleren',
  /** Used in `confirm-delete-dialog.cdr-summary.title` */
  'confirm-delete-dialog.cdr-summary.document-count_one': '1 document',
  /** Used in `confirm-delete-dialog.cdr-summary.title` */
  'confirm-delete-dialog.cdr-summary.document-count_other': '{{count}} documenten',
  /** The text that appears in the subtitle `<summary>` that lists the datasets below the title */
  'confirm-delete-dialog.cdr-summary.subtitle_one': 'Dataset: {{datasets}}',
  /** The text that appears in the subtitle `<summary>` that lists the datasets below the title */
  'confirm-delete-dialog.cdr-summary.subtitle_other': 'Datasets: {{datasets}}',
  /** The text that appears in the subtitle `<summary>` that lists the datasets below the title */
  'confirm-delete-dialog.cdr-summary.subtitle_unavailable_one': 'Niet beschikbare dataset',
  /** The text that appears in the subtitle `<summary>` that lists the datasets below the title */
  'confirm-delete-dialog.cdr-summary.subtitle_unavailable_other': 'Niet beschikbare datasets',
  /** The text that appears in the title `<summary>` that includes the list of CDRs (singular) */
  'confirm-delete-dialog.cdr-summary.title_one': '{{documentCount}} in een andere dataset',
  /** The text that appears in the title `<summary>` that includes the list of CDRs (plural) */
  'confirm-delete-dialog.cdr-summary.title_other': '{{documentCount}} in {{count}} datasets',
  /** Appears when hovering over the copy button to copy */
  'confirm-delete-dialog.cdr-table.copy-id-button.tooltip': 'Kopieer ID naar klembord',
  /** The header for the dataset column in the list of cross-dataset references found */
  'confirm-delete-dialog.cdr-table.dataset.label': 'Dataset',
  /** The header for the document ID column in the list of cross-dataset references found */
  'confirm-delete-dialog.cdr-table.document-id.label': 'Document-ID',
  /** The toast title when the copy button has been clicked */
  'confirm-delete-dialog.cdr-table.id-copied-toast.title': 'Document-ID gekopieerd naar klembord!',
  /** The header for the project ID column in the list of cross-dataset references found */
  'confirm-delete-dialog.cdr-table.project-id.label': 'Project-ID',
  /** The text in the "Delete anyway" button in the confirm delete dialog that confirms the action */
  'confirm-delete-dialog.confirm-anyway-button.text_delete': 'Toch verwijderen',
  /** The text in the "Unpublish anyway" button in the confirm delete dialog that confirms the action */
  'confirm-delete-dialog.confirm-anyway-button.text_unpublish': 'Toch ontpubliceren',
  /** The text in the "Delete now" button in the confirm delete dialog that confirms the action */
  'confirm-delete-dialog.confirm-button.text_delete': 'Nu verwijderen',
  /** The text in the "Unpublish now" button in the confirm delete dialog that confirms the action */
  'confirm-delete-dialog.confirm-button.text_unpublish': 'Nu ontpubliceren',
  /** If no referring documents are found, this text appears above the cancel and confirmation buttons */
  'confirm-delete-dialog.confirmation.text_delete':
    'Weet u zeker dat u “<DocumentTitle/>” wilt verwijderen?',
  /** If no referring documents are found, this text appears above the cancel and confirmation buttons */
  'confirm-delete-dialog.confirmation.text_unpublish':
    'Weet u zeker dat u “<DocumentTitle/>” wilt ontpubliceren?',
  /** The text body of the error dialog. */
  'confirm-delete-dialog.error.message.text':
    'Er is een fout opgetreden bij het laden van verwijzende documenten.',
  /** The text in the retry button of the confirm delete dialog if an error occurred. */
  'confirm-delete-dialog.error.retry-button.text': 'Opnieuw proberen',
  /** The header of the confirm delete dialog if an error occurred while the confirm delete dialog was open. */
  'confirm-delete-dialog.error.title.text': 'Fout',
  /** The header of the confirm delete dialog */
  'confirm-delete-dialog.header.text_delete': 'Document verwijderen?',
  /** The header of the confirm delete dialog */
  'confirm-delete-dialog.header.text_unpublish': 'Document ontpubliceren?',
  /** The text that appears while the referring documents are queried */
  'confirm-delete-dialog.loading.text': 'Op zoek naar verwijzende documenten…',
  /** Shown if there are references to other documents but the user does not have the permission to see the relevant document IDs */
  'confirm-delete-dialog.other-reference-count.title_one': '1 andere referentie niet getoond',
  /** Shown if there are references to other documents but the user does not have the permission to see the relevant document IDs */
  'confirm-delete-dialog.other-reference-count.title_other':
    '{{count}} andere referenties niet getoond',
  /** Text in the tooltip of this component if hovering over the info icon */
  'confirm-delete-dialog.other-reference-count.tooltip':
    'We kunnen geen metadata voor deze referenties weergeven vanwege een ontbrekend toegangstoken voor de gerelateerde datasets.',
  /** Appears when unable to render a document preview in the referring document list */
  'confirm-delete-dialog.preview-item.preview-unavailable.subtitle': 'ID: {{documentId}}',
  /** Appears when unable to render a document preview in the referring document list */
  'confirm-delete-dialog.preview-item.preview-unavailable.title': 'Voorbeeld niet beschikbaar',
  /** Warns the user of affects to other documents if the action is confirmed (delete) */
  'confirm-delete-dialog.referential-integrity-disclaimer.text_delete':
    'Als u dit document verwijdert, kunnen documenten die ernaar verwijzen er niet langer toegang toe hebben.',
  /** Warns the user of affects to other documents if the action is confirmed (unpublish) */
  'confirm-delete-dialog.referential-integrity-disclaimer.text_unpublish':
    'Als u dit document niet publiceert, kunnen documenten die ernaar verwijzen er niet langer toegang toe hebben.',
  /** Tells the user the count of how many other referring documents there are before listing them. (singular) */
  'confirm-delete-dialog.referring-document-count.text_one':
    '1 document verwijst naar “<DocumentTitle/>”',
  /** Tells the user the count of how many other referring documents there are before listing them. (plural) */
  'confirm-delete-dialog.referring-document-count.text_other':
    '{{count}} documenten verwijzen naar “<DocumentTitle/>”',
  /** Describes the list of documents that refer to the one trying to be deleted (delete) */
  'confirm-delete-dialog.referring-documents-descriptor.text_delete':
    'Het is mogelijk dat u “<DocumentTitle/>” niet kunt verwijderen omdat de volgende documenten ernaar verwijzen:',
  /** Describes the list of documents that refer to the one trying to be deleted (unpublish) */
  'confirm-delete-dialog.referring-documents-descriptor.text_unpublish':
    'Het is mogelijk dat u “<DocumentTitle/>” niet kunt ontpubliceren omdat de volgende documenten ernaar verwijzen:',

  /** The text for the cancel button in the confirm dialog used in document action shortcuts if none is provided */
  'confirm-dialog.cancel-button.fallback-text': 'Annuleren',
  /** The text for the confirm button in the confirm dialog used in document action shortcuts if none is provided */
  'confirm-dialog.confirm-button.fallback-text': 'Bevestigen',

  /** For the default structure definition, the title for the "Content" pane */
  'default-definition.content-title': 'Inhoud',

  /** The text shown if there was an error while getting the document's title via a preview value */
  'doc-title.error.text': 'Fout: {{errorMessage}}',
  /** The text shown if the preview value for a document is non-existent or empty */
  'doc-title.fallback.text': 'Zonder titel',
  /** The text shown if a document's title via a preview value cannot be determined due to an unknown schema type */
  'doc-title.unknown-schema-type.text': 'Onbekend schema type: {{schemaType}}',

  /** Tooltip text shown for the close button of the document inspector */
  'document-inspector.close-button.tooltip': 'Sluiten',
  /** The title shown in the dialog header, when inspecting a valid document */
  'document-inspector.dialog.title': 'Inspecteren <DocumentTitle/>',
  /** The title shown in the dialog header, when the document being inspected is not created yet/has no value */
  'document-inspector.dialog.title-no-value': 'Geen waarde',
  /** Title shown for menu item that opens the "Inspect" dialog */
  'document-inspector.menu-item.title': 'Inspecteren',
  /** the placeholder text for the search input on the inspect dialog */
  'document-inspector.search.placeholder': 'Zoeken',
  /** The "parsed" view mode, meaning the JSON is searchable, collapsible etc */
  'document-inspector.view-mode.parsed': 'Geanalyseerd',
  /** The "raw" view mode, meaning the JSON is presented syntax-highlighted, but with no other features - optimal for copying */
  'document-inspector.view-mode.raw-json': 'Ruwe JSON',

  /** The text for when a form is hidden */
  'document-view.form-view.form-hidden': 'Dit formulier is verborgen',
  /** Fallback title shown when a form title is not provided */
  'document-view.form-view.form-title-fallback': 'Zonder titel',
  /** The text for when the form view is loading a document */
  'document-view.form-view.loading': 'Document laden…',
  /** The description of the sync lock toast on the form view */
  'document-view.form-view.sync-lock-toast.description':
    'Wacht alstublieft terwijl het document wordt gesynchroniseerd. Dit gebeurt meestal direct nadat het document is gepubliceerd en zou niet meer dan een paar seconden moeten duren',
  /** The title of the sync lock toast on the form view */
  'document-view.form-view.sync-lock-toast.title': 'Document synchroniseren…',

  /** The loading messaging for when the tooltip is still loading permission info */
  'insufficient-permissions-message-tooltip.loading-text': 'Laden…',

  /** --- Menu items --- */
  /** The menu item group title to use for the Action menu items */
  'menu-item-groups.actions-group': 'Acties',
  /** The menu item group title to use for the Layout menu items */
  'menu-item-groups.layout-group': 'Lay-out',
  /** The menu item group title to use for the Sort menu items */
  'menu-item-groups.sorting-group': 'Sorteren',

  /** The menu item title to use the compact view */
  'menu-items.layout.compact-view': 'Compacte weergave',
  /** The menu item title to use the detailed view */
  'menu-items.layout.detailed-view': 'Gedetailleerde weergave',
  /** The menu item title to Sort by Created */
  'menu-items.sort-by.created': 'Sorteren op Aangemaakt',
  /** The menu item title to Sort by Last Edited */
  'menu-items.sort-by.last-edited': 'Sorteren op Laatst bewerkt',

  /** The link text of the no document type screen that appears directly below the subtitle */
  'no-document-types-screen.link-text': 'Leer hoe u een documenttype kunt toevoegen →',
  /** The subtitle of the no document type screen that appears directly below the title */
  'no-document-types-screen.subtitle':
    'Definieer alstublieft ten minste één documenttype in uw schema.',
  /** The title of the no document type screen */
  'no-document-types-screen.title': 'Geen documenttypes',

  /** Text shown on back button visible on smaller breakpoints */
  'pane-header.back-button.text': 'Terug',
  /** tooltip text (via `title` attribute) for the menu button */
  'pane-header.context-menu-button.tooltip': 'Toon menu',
  /** Appears in a document list pane header if there are more than one option for create. This is the label for that menu */
  'pane-header.create-menu.label': 'Creëren',
  /** Tooltip displayed on the create new button in document lists */
  'pane-header.create-new-button.tooltip': 'Nieuw document maken',
  /** The `aria-label` for the disabled button in the pane header if create permissions are granted */
  'pane-header.disabled-created-button.aria-label': 'Onvoldoende rechten',

  /** The text shown in the tooltip of pane item previews of documents if there are unpublished edits */
  'pane-item.draft-status.has-draft.tooltip': 'Bewerkt <RelativeTime/>',
  /** The text shown in the tooltip of pane item previews of documents if there are no unpublished edits */
  'pane-item.draft-status.no-draft.tooltip': 'Geen ongepubliceerde wijzigingen',
  /** The subtitle tor pane item previews if there isn't a matching schema type found */
  'pane-item.missing-schema-type.subtitle': 'Document: <Code>{{documentId}}</Code>',
  /** The title tor pane item previews if there isn't a matching schema type found */
  'pane-item.missing-schema-type.title':
    'Geen schema gevonden voor type <Code>{{documentType}}</Code>',
  /** The text shown in the tooltip of pane item previews of documents if there are unpublished edits */
  'pane-item.published-status.has-published.tooltip': 'Gepubliceerd <RelativeTime/>',
  /** The text shown in the tooltip of pane item previews of documents if there are no unpublished edits */
  'pane-item.published-status.no-published.tooltip': 'Geen ongepubliceerde wijzigingen',

  /** The text used in the document header title if there is an error */
  'panes.document-header-title.error.text': 'Fout: {{error}}',
  /** The text used in the document header title if creating a new item */
  'panes.document-header-title.new.text': 'Nieuw {{schemaType}}',
  /** The text used in the document header title if no other title can be determined */
  'panes.document-header-title.untitled.text': 'Naamloos',
  /** The text for the retry button on the document list pane */
  'panes.document-list-pane.error.retry-button.text': 'Opnieuw proberen',
  /** The error text on the document list pane */
  'panes.document-list-pane.error.text': 'Fout: <Code>{{error}}</Code>',
  /** The error title on the document list pane */
  'panes.document-list-pane.error.title': 'Kon lijstitems niet ophalen',
  /** The text of the document list pane if more than a maximum number of documents are returned */
  'panes.document-list-pane.max-items.text': 'Er worden maximaal {{limit}} documenten weergegeven',
  /** The text of the document list pane if no documents are found for a specified type */
  'panes.document-list-pane.no-documents-of-type.text': 'Geen documenten van dit type',
  /** The text of the document list pane if no documents are found */
  'panes.document-list-pane.no-documents.text': 'Geen resultaten gevonden',
  /** The text of the document list pane if no documents are found matching specified criteria */
  'panes.document-list-pane.no-matching-documents.text': 'Geen overeenkomende documenten',
  /** The aria-label for the search input on the document list pane */
  'panes.document-list-pane.search-input.aria-label': 'Lijst doorzoeken',
  /** The search input for the search input on the document list pane */
  'panes.document-list-pane.search-input.placeholder': 'Lijst doorzoeken',
  /** The summary title when displaying an error for a document operation result */
  'panes.document-operation-results.error.summary.title': 'Details',
  /** The text when a generic operation failed (fallback, generally not shown)  */
  'panes.document-operation-results.operation-error':
    'Er is een fout opgetreden tijdens {{context}}',
  /** The text when a delete operation failed  */
  'panes.document-operation-results.operation-error_delete':
    'Er is een fout opgetreden bij het proberen te verwijderen van dit document. Dit betekent meestal dat er andere documenten zijn die ernaar verwijzen.',
  /** The text when an unpublish operation failed  */
  'panes.document-operation-results.operation-error_unpublish':
    'Er is een fout opgetreden bij het proberen te annuleren van de publicatie van dit document. Dit betekent meestal dat er andere documenten zijn die ernaar verwijzen.',
  /** The text when a generic operation succeeded (fallback, generally not shown)  */
  'panes.document-operation-results.operation-success':
    'Succesvol {{context}} uitgevoerd op document',
  /** The text when a delete operation succeeded  */
  'panes.document-operation-results.operation-success_delete':
    'Het document is succesvol verwijderd',
  /** The text when a discard changes operation succeeded  */
  'panes.document-operation-results.operation-success_discardChanges':
    'Alle wijzigingen sinds de laatste publicatie zijn nu verworpen. De verworpen conceptversie kan nog steeds worden hersteld uit de geschiedenis',
  /** The text when a publish operation succeeded  */
  'panes.document-operation-results.operation-success_publish': 'Het document is gepubliceerd',
  /** The text when a restore operation succeeded  */
  'panes.document-operation-results.operation-success_restore': undefined, // '<Strong>{{title}}</Strong> was restored'
  /** The text when an unpublish operation succeeded  */
  'panes.document-operation-results.operation-success_unpublish':
    'De publicatie van het document is ongedaan gemaakt. Er is een concept gemaakt van de laatste gepubliceerde versie.',
  /** The document title shown when document title is "undefined" in operation message */
  'panes.document-operation-results.operation-undefined-title': 'Naamloos',
  /** The title of the reconnecting toast */
  'panes.document-pane-provider.reconnecting.title': 'Verbinding verloren. Opnieuw verbinden…',
  /** The loading message for the document not found pane */
  'panes.document-pane.document-not-found.loading': 'Document laden…',
  /** The text of the document not found pane if the schema is known */
  'panes.document-pane.document-not-found.text':
    'Het documenttype is niet gedefinieerd, en een document met de <Code>{{id}}</Code> identificatie kon niet worden gevonden.',
  /** The title of the document not found pane if the schema is known */
  'panes.document-pane.document-not-found.title': 'Het document is niet gevonden',
  /** The text of the document not found pane if the schema is not found */
  'panes.document-pane.document-unknown-type.text':
    'Dit document heeft het schema type <Code>{{documentType}}</Code>, dat niet is gedefinieerd als een type in het lokale content studio schema.',
  /** The title of the document not found pane if the schema is not found or unknown */
  'panes.document-pane.document-unknown-type.title':
    'Onbekend documenttype: <Code>{{documentType}}</Code>',
  /** The title of the document not found pane if the schema is unknown */
  'panes.document-pane.document-unknown-type.without-schema.text':
    'Dit document bestaat niet, en er is geen schema type voor gespecificeerd.',
  /** Default message shown while resolving the structure definition for an asynchronous node */
  'panes.resolving.default-message': 'Laden…',
  /** Message shown while resolving the structure definition for an asynchronous node and it is taking a while (more than 5s) */
  'panes.resolving.slow-resolve-message': 'Nog steeds aan het laden…',
  /** The text to display when type is missing */
  'panes.unknown-pane-type.missing-type.text':
    'Structuur item mist de vereiste <Code>type</Code> eigenschap.',
  /** The title of the unknown pane */
  'panes.unknown-pane-type.title': 'Onbekend paneeltype',
  /** The text to display when type is unknown */
  'panes.unknown-pane-type.unknown-type.text':
    'Structuur item van type <Code>{{type}}</Code> is geen bekende entiteit.',

  /** The text for the "Open preview" action for a document */
  'production-preview.menu-item.title': 'Voorbeeld openen',

  /** Label for button when status is saved */
  'status-bar.document-status-pulse.status.saved.text': 'Opgeslagen',
  /** Label for button when status is syncing */
  'status-bar.document-status-pulse.status.syncing.text': 'Opslaan...',
  /** Accessibility label indicating when the document was last published, in relative time, eg "3 weeks ago" */
  'status-bar.publish-status-button.last-published-time.aria-label':
    'Laatst gepubliceerd {{relativeTime}}',
  /** Text for tooltip showing explanation of timestamp/relative time, eg "Last published <RelativeTime/>" */
  'status-bar.publish-status-button.last-published-time.tooltip':
    'Laatst gepubliceerd <RelativeTime/>',
  /** Accessibility label indicating when the document was last updated, in relative time, eg "2 hours ago" */
  'status-bar.publish-status-button.last-updated-time.aria-label':
    'Laatst bijgewerkt {{relativeTime}}',
  /** Text for tooltip showing explanation of timestamp/relative time, eg "Last updated <RelativeTime/>" */
  'status-bar.publish-status-button.last-updated-time.tooltip': 'Laatst bijgewerkt <RelativeTime/>',
  /** Aria label for the button */
  'status-bar.review-changes-button.aria-label': 'Wijzigingen beoordelen',
  /** Label for button when status is saved */
  'status-bar.review-changes-button.status.saved.text': 'Opgeslagen!',
  /** Label for button when status is syncing */
  'status-bar.review-changes-button.status.syncing.text': 'Opslaan...',
  /** Text for the secondary text for tooltip for the button */
  'status-bar.review-changes-button.tooltip.changes-saved': 'Wijzigingen opgeslagen',
  /** Primary text for tooltip for the button */
  'status-bar.review-changes-button.tooltip.text': 'Wijzigingen bekijken',

  /** The text that appears in side the documentation link */
  'structure-error.docs-link.text': 'Bekijk documentatie',
  /** Labels the error message or error stack of the structure error screen */
  'structure-error.error.label': 'Fout',
  /** The header that appears at the top of the error screen */
  'structure-error.header.text': 'Er is een fout opgetreden bij het lezen van de structuur',
  /** The text in the reload button to retry rendering the structure */
  'structure-error.reload-button.text': 'Opnieuw laden',
  /** Labels the structure path of the structure error screen */
  'structure-error.structure-path.label': 'Structuurpad',
})
