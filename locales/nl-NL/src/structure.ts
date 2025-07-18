import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Label for the "Copy Document URL" document action */
  'action.copy-document-url.label': 'Document URL kopiëren',
  /** Tooltip when action button is disabled because the operation is not ready   */
  'action.delete.disabled.not-ready': 'Operatie niet klaar',
  /** Tooltip when action button is disabled because the document does not exist */
  'action.delete.disabled.nothing-to-delete': 'Dit document bestaat nog niet of is al verwijderd',
  /** Label for the "Delete" document action button */
  'action.delete.label': 'Verwijderen',
  /** Label for the "Delete" document action while the document is being deleted */
  'action.delete.running.label': 'Verwijderen…',
  /** Tooltip when action is disabled because the document is linked to Canvas */
  'action.disabled-by-canvas.tooltip':
    'Sommige documentacties zijn uitgeschakeld voor documenten die gekoppeld zijn aan Canvas',
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
  /** Label for the "Publish" document action */
  'action.publish.label': 'Publiceren',
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
  /** Message prompting the user to confirm that they want to restore to an earlier revision*/
  'action.restore.confirm.message': 'Weet u zeker dat u dit document wilt herstellen?',
  /** Fallback tooltip for when user is looking at the initial revision */
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

  /** Description for the archived release banner, rendered when viewing the history of a version document from the publihed view */
  'banners.archived-release.description':
    'U bekijkt een alleen-lezen document dat werd gearchiveerd als onderdeel van <VersionBadge>{{title}}</VersionBadge>. Het kan niet bewerkt worden',
  /** The explanation displayed when a user attempts to create a new draft document, but the draft model is not switched on */
  'banners.choose-new-document-destination.cannot-create-draft-document': undefined, // 'Cannot create a draft document.'
  /** The explanation displayed when a user attempts to create a new published document, but the schema type doesn't support live-editing */
  'banners.choose-new-document-destination.cannot-create-published-document': undefined, // 'Cannot create a published document.'
  /** The prompt displayed when a user must select a different perspective in order to create a document */
  'banners.choose-new-document-destination.choose-destination': undefined, // 'Choose a destination for this document:'
  /** The explanation displayed when a user attempts to create a new document in a release, but the selected release is inactive */
  'banners.choose-new-document-destination.release-inactive': undefined, // 'The <VersionBadge>{{title}}</VersionBadge> release is not active.'
  /** The text for the restore button on the deleted document banner */
  'banners.deleted-document-banner.restore-button.text': 'Herstel meest recente versie',
  /** The text content for the deleted document banner */
  'banners.deleted-document-banner.text': 'Dit document is verwijderd.',
  /** The text content for the deprecated document type banner */
  'banners.deprecated-document-type-banner.text': 'Dit documenttype is verouderd.',
  /** The text for publish action for discarding the version */
  'banners.live-edit-draft-banner.discard.tooltip': 'Concept verwijderen',
  /** The text for publish action for the draft banner */
  'banners.live-edit-draft-banner.publish.tooltip': 'Publiceer om door te gaan met bewerken',
  /** The text content for the live edit document when it's a draft */
  'banners.live-edit-draft-banner.text':
    'Het type <strong>{{schemaType}}</strong> heeft <code>liveEdit</code> ingeschakeld, maar er bestaat een conceptversie van dit document. Publiceer of verwijder het concept om door te gaan met het live bewerken ervan.',
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
    'Uw rol <Roles/> heeft geen toestemming om dit document te creëren.',
  /** The text for the permission check banner if the user only has multiple roles, but they do not allow publishing this document */
  'banners.permission-check-banner.missing-permission_create_other':
    'Uw rollen <Roles/> hebben geen toestemming om dit document te creëren.',
  /** The text for the permission check banner if the user only has one role, and it does not allow editing this document */
  'banners.permission-check-banner.missing-permission_update_one':
    'Uw rol <Roles/> heeft geen toestemming om dit document bij te werken.',
  /** The text for the permission check banner if the user only has multiple roles, but they do not allow editing this document */
  'banners.permission-check-banner.missing-permission_update_other':
    'Uw rollen <Roles/> hebben geen toestemming om dit document bij te werken.',
  /** The pending text for the request permission button that appears for viewer roles */
  'banners.permission-check-banner.request-permission-button.sent': 'Aanvraag verzonden',
  /** The text for the request permission button that appears for viewer roles */
  'banners.permission-check-banner.request-permission-button.text': 'Vraag om te bewerken',
  /** Description for the archived release banner, rendered when viewing the history of a version document from the published view */
  'banners.published-release.description':
    'U bekijkt een alleen-lezen document dat werd gepubliceerd als onderdeel van <VersionBadge>{{title}}</VersionBadge>. Het kan niet bewerkt worden',
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
  /** The text that appears for the action button to add the current document to the global release */
  'banners.release.action.add-to-release': 'Toevoegen aan release',
  /** The text that appears for the action button to add the current document to the global release */
  'banners.release.action.open-to-edit': 'Release openen om te bewerken',
  /** Toast description in case an error occurs when adding a document to a release  */
  'banners.release.error.description':
    'Er is een fout opgetreden bij het toevoegen van het document aan de release: {{message}}',
  /** Toast title in case an error occurs when adding a document to a release  */
  'banners.release.error.title': 'Fout bij het toevoegen van document aan release',
  /** The text for the banner that appears when a document only has versions but is in a draft or published pinned release */
  'banners.release.navigate-to-edit-description': 'Het document bestaat alleen in de',
  /** The text for the banner that appears when a document only has versions but is in a draft or published pinned release */
  'banners.release.navigate-to-edit-description-end_one': 'release',
  /** The text for the banner that appears when a document only has versions but is in a draft or published pinned release */
  'banners.release.navigate-to-edit-description-end_other': 'releases',
  /** The text for the banner that appears when there are multiple versions but no drafts or published, only one extra releases */
  'banners.release.navigate-to-edit-description-multiple_one':
    'Dit document maakt deel uit van de <VersionBadge/> release en {{count}} meer release.',
  /** The text for the banner that appears when there are multiple versions but no drafts or published, more than one extra releases */
  'banners.release.navigate-to-edit-description-multiple_other':
    'Dit document maakt deel uit van de <VersionBadge/> release en {{count}} meer releases',
  /** The text for the banner that appears when a document only has one version but is in a draft or published pinned release */
  'banners.release.navigate-to-edit-description-single':
    'Dit document maakt deel uit van de <VersionBadge/> release',
  /** The text for the banner that appears when a document is not in the current global release */
  'banners.release.not-in-release': 'Niet in de <VersionBadge>{{title}}</VersionBadge> release.',
  /** Description of toast that will appear in case of latency between the user adding a document to a release and the UI reflecting it */
  'banners.release.waiting.description':
    'Even geduld terwijl het document wordt toegevoegd aan de release. Dit zou niet langer dan een paar seconden moeten duren.',
  /** Title of toast that will appear in case of latency between the user adding a document to a release and the UI reflecting it */
  'banners.release.waiting.title': 'Document wordt toegevoegd aan release…',
  /** The text for the revision not found banner */
  'banners.revision-not-found.description':
    'We konden de geselecteerde documentrevisie niet vinden, selecteer een andere invoer uit de geschiedenislijst.',
  /** The text content for the unpublished document banner when is part of a release */
  'banners.unpublished-release-banner.text':
    'Dit document zal niet gepubliceerd worden als onderdeel van de <VersionBadge>{{title}}</VersionBadge> release',
  /** The text content for the unpublished document banner letting the user know that the current published version is being shown */
  'banners.unpublished-release-banner.text-with-published': undefined, // 'Showing the current <strong>published</strong> version:'

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

  /** The text for the canvas linked banner action button */
  'canvas.banner.edit-in-canvas-action': 'Bewerk in Canvas',
  /** The text for the canvas linked banner when the document is a draft */
  'canvas.banner.linked-text.draft': 'Dit conceptdocument is gekoppeld aan Canvas',
  /** The text for the canvas linked banner when the document is a live document */
  'canvas.banner.linked-text.published': 'Dit live document is gekoppeld aan Canvas',
  /** The text for the canvas linked banner when the document is a version document */
  'canvas.banner.linked-text.version': 'Dit versiedocument is gekoppeld aan Canvas',
  /** The text for the canvas linked banner popover button */
  'canvas.banner.popover-button-text': 'Meer leren',
  /** The description for the canvas linked banner popover */
  'canvas.banner.popover-description':
    'Canvas stelt je in staat om in een vrij vormgegeven editor te schrijven die automatisch terugkaart naar de Studio als gestructureerde inhoud - terwijl je typt.',
  /** The heading for the canvas linked banner popover */
  'canvas.banner.popover-heading': 'Idee eerst schrijven',

  /** The description for the changes banner */
  'changes.banner.description':
    'Toont de geschiedenis voor de <strong>{{perspective}}</strong> versie van dit document.',
  /** The tooltip for the changes banner */
  'changes.banner.tooltip':
    'Deze weergave toont de wijzigingen die zijn opgetreden in een specifieke versie van dit document. Selecteer een andere versie om de wijzigingen te zien',
  /** The label used in the changes inspector for the from selector */
  'changes.from.label': 'Van',
  /* The label for the history tab in the changes inspector*/
  'changes.tab.history': 'Historie',
  /* The label for the review tab in the changes inspector*/
  'changes.tab.review-changes': 'Wijzigingen beoordelen',
  /** The label used in the changes inspector for the to selector */
  'changes.to.label': 'Naar',

  /** The error message shown when the specified document comparison mode is not supported */
  'compare-version.error.invalidModeParam':
    '"{{input}}" is geen ondersteunde documentvergelijkingsmodus.',
  /** The error message shown when the next document for comparison could not be extracted from the URL */
  'compare-version.error.invalidNextDocumentParam': 'De volgende documentparameter is ongeldig.',
  /** The error message shown when the document comparison URL could not be parsed */
  'compare-version.error.invalidParams.title': 'Niet in staat om documenten te vergelijken',
  /** The error message shown when the previous document for comparison could not be extracted from the URL */
  'compare-version.error.invalidPreviousDocumentParam': 'De vorige documentparameter is ongeldig.',

  /** The text for the tooltip when the "Compare versions" action for a document is disabled */
  'compare-versions.menu-item.disabled-reason':
    'Er zijn geen andere versies van dit document om te vergelijken.',
  /** The text for the "Compare versions" action for a document */
  'compare-versions.menu-item.title': 'Versies vergelijken',
  /** The string used to label draft documents */
  'compare-versions.status.draft': 'Concept',
  /** The string used to label published documents */
  'compare-versions.status.published': 'Gepubliceerd',
  /** The title used when comparing versions of a document */
  'compare-versions.title': 'Versies vergelijken',

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
  /** The toast title when the copy button has been clicked but copying failed */
  'confirm-delete-dialog.cdr-table.id-copied-toast.title-failed':
    'Kopiëren van document ID mislukt',
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

  /** The description for the document favorite action */
  'document.favorites.add-to-favorites': 'Toevoegen aan favorieten',
  /** The description for the document unfavorite action */
  'document.favorites.remove-from-favorites': 'Verwijderen uit favorieten',

  /** The description for the events inspector when we can't load the document so we default to compare with published */
  'events.compare-with-published.description':
    'We kunnen de wijzigingen voor dit document niet laden, waarschijnlijk vanwege het geschiedenisbehoudbeleid van uw abonnement, dit toont u hoe de <strong>{{version}}</strong> versie zich verhoudt tot de <strong>gepubliceerde</strong> versie.',
  /** The title for the events inspector when we can't load the document so we default to compare with published */
  'events.compare-with-published.title': 'Vergelijken met gepubliceerd',
  /**The title for the menu items that will be shown when expanding a publish release event to inspect the document */
  'events.inspect.release': 'Inspecteer <VersionBadge>{{releaseTitle}}</VersionBadge> document',
  /**The title for the menu items that will be shown when expanding a publish draft event to inspect the draft document*/
  'events.open.draft': 'Open <VersionBadge>concept</VersionBadge> document',
  /**The title for the menu items that will be shown when expanding a publish release event to inspect the release*/
  'events.open.release': 'Open <VersionBadge>{{releaseTitle}}</VersionBadge> release',

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
  /** The help text saying that we'll retry fetching the document list */
  'panes.document-list-pane.error.retrying': 'Opnieuw proberen…',
  /** The error text on the document list pane */
  'panes.document-list-pane.error.text': 'Fout: <Code>{{error}}</Code>',
  /** The error text on the document list pane */
  'panes.document-list-pane.error.text.dev': 'Fout: <Code>{{error}}</Code>',
  /** The error text on the document list pane if the browser appears to be offlline */
  'panes.document-list-pane.error.text.offline': 'De internetverbinding lijkt offline te zijn.',
  /** The error title on the document list pane */
  'panes.document-list-pane.error.title': 'Kon lijstitems niet ophalen',
  /** The help text saying that we'll retry fetching the document list */
  'panes.document-list-pane.error.will-retry-automatically_one': 'Opnieuw proberen…',
  'panes.document-list-pane.error.will-retry-automatically_other':
    'Opnieuw proberen… (#{{count}}).',
  /** The text of the document list pane if more than a maximum number of documents are returned */
  'panes.document-list-pane.max-items.text': 'Er worden maximaal {{limit}} documenten weergegeven',
  /** The text of the document list pane if no documents are found for a specified type */
  'panes.document-list-pane.no-documents-of-type.text': 'Geen documenten van dit type',
  /** The text of the document list pane if no documents are found */
  'panes.document-list-pane.no-documents.text': 'Geen resultaten gevonden',
  /** The text of the document list pane if no documents are found matching specified criteria */
  'panes.document-list-pane.no-matching-documents.text': 'Geen overeenkomende documenten',
  /** The search input for the search input on the document list pane */
  'panes.document-list-pane.reconnecting': 'Proberen te verbinden…',
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
  /** The text when copy URL operation succeeded  */
  'panes.document-operation-results.operation-success_copy-url':
    'Document URL gekopieerd naar klembord',
  /**  */
  'panes.document-operation-results.operation-success_createVersion':
    '<Strong>{{title}}</Strong> is toegevoegd aan de release',
  /** The text when a delete operation succeeded  */
  'panes.document-operation-results.operation-success_delete':
    'Het document is succesvol verwijderd',
  /** The text when a discard changes operation succeeded  */
  'panes.document-operation-results.operation-success_discardChanges':
    'Alle wijzigingen sinds de laatste publicatie zijn nu verworpen. De verworpen conceptversie kan nog steeds worden hersteld uit de geschiedenis',
  /** The text when a duplicate operation succeeded  */
  'panes.document-operation-results.operation-success_duplicate':
    'Het document is succesvol gedupliceerd',
  /** The text when a publish operation succeeded  */
  'panes.document-operation-results.operation-success_publish': 'Het document is gepubliceerd',
  /** The text when a restore operation succeeded  */
  'panes.document-operation-results.operation-success_restore':
    '<Strong>{{title}}</Strong> is hersteld',
  /** The text when an unpublish operation succeeded  */
  'panes.document-operation-results.operation-success_unpublish':
    'De publicatie van het document is ongedaan gemaakt. Er is een concept gemaakt van de laatste gepubliceerde versie.',
  /** The document title shown when document title is "undefined" in operation message */
  'panes.document-operation-results.operation-undefined-title': 'Naamloos',
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

  /** The text for the confirm button in the request permission dialog used in the permissions banner */
  'request-permission-dialog.confirm-button.text': 'Aanvraag versturen',
  /** The description text for the request permission dialog used in the permissions banner */
  'request-permission-dialog.description.text':
    'Uw verzoek zal worden verzonden naar de projectbeheerder(s). Als u wilt, kunt u ook een notitie toevoegen',
  /** The header/title for the request permission dialog used in the permissions banner */
  'request-permission-dialog.header.text': 'Vraag om bewerktoegang',
  /** The text describing the note input for the request permission dialog used in the permissions banner */
  'request-permission-dialog.note-input.description.text':
    'Als u wilt, kunt u een notitie toevoegen',
  /** The placeholder for the note input in the request permission dialog used in the permissions banner */
  'request-permission-dialog.note-input.placeholder.text': 'Voeg notitie toe...',
  /** The error/warning text in the request permission dialog when the user's request has been declined */
  'request-permission-dialog.warning.denied.text':
    'Uw verzoek om toegang tot dit project is afgewezen.',
  /** The error/warning text in the request permission dialog when the user's request has been denied due to too many outstanding requests */
  'request-permission-dialog.warning.limit-reached.text':
    'U heeft de limiet bereikt voor rolverzoeken voor alle projecten. Wacht even voordat u meer verzoeken indient of neem contact op met een beheerder voor hulp.',

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

  /** The aria label for the menu button in the timeline item */
  'timeline-item.menu-button.aria-label': 'Actiemenu openen',
  /** The text for the tooltip in menu button the timeline item */
  'timeline-item.menu-button.tooltip': 'Acties',
  /** The text for the collapse action in the timeline item menu */
  'timeline-item.menu.action-collapse': 'Inklappen',
  /** The text for the expand action in the timeline item menu */
  'timeline-item.menu.action-expand': 'Uitklappen',
  /** The text for the published event menu tooltip when the release is not found */
  'timeline-item.not-found-release.tooltip': 'Release met id "{{releaseId}}" niet gevonden',
})
