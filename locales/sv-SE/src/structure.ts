import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Label for the "Copy Document URL" document action */
  'action.copy-document-url.label': 'Kopiera dokumentets URL',
  /** Tooltip when action button is disabled because the operation is not ready   */
  'action.delete.disabled.not-ready': 'Operationen är inte redo',
  /** Tooltip when action button is disabled because the document does not exist */
  'action.delete.disabled.nothing-to-delete':
    'Detta dokument existerar inte än eller är redan raderat',
  /** Label for the "Delete" document action button */
  'action.delete.label': 'Radera',
  /** Label for the "Delete" document action while the document is being deleted */
  'action.delete.running.label': 'Raderar…',
  /** Tooltip when action is disabled because the document is linked to Canvas */
  'action.disabled-by-canvas.tooltip':
    'Vissa dokumentåtgärder är inaktiverade för dokument länkade till Canvas',
  /** Message prompting the user to confirm discarding changes */
  'action.discard-changes.confirm-dialog.confirm-discard-changes':
    'Är du säker på att du vill kassera alla ändringar sedan senast publicerat?',
  /** Tooltip when action is disabled because the document has no unpublished changes */
  'action.discard-changes.disabled.no-change': 'Detta dokument har inga opubliserade ändringar',
  /** Tooltip when action is disabled because the document is not published */
  'action.discard-changes.disabled.not-published': 'Detta dokument är inte publicerat',
  /** Tooltip when action button is disabled because the operation is not ready   */
  'action.discard-changes.disabled.not-ready': 'Operationen är inte redo',
  /** Label for the "Discard changes" document action */
  'action.discard-changes.label': 'Kassera ändringar',
  /** Tooltip when action is disabled because the operation is not ready   */
  'action.duplicate.disabled.not-ready': 'Operationen är inte redo',
  /** Tooltip when action is disabled because the document doesn't exist */
  'action.duplicate.disabled.nothing-to-duplicate':
    'Detta dokument existerar inte än så det finns inget att duplicera',
  /** Label for the "Duplicate" document action */
  'action.duplicate.label': 'Duplicera',
  /** Label for the "Duplicate" document action while the document is being duplicated */
  'action.duplicate.running.label': 'Duplicerar…',
  /** Tooltip when publish button is disabled because the document is already published, and published time is unavailable.*/
  'action.publish.already-published.no-time-ago.tooltip': 'Redan publicerad',
  /** Tooltip when publish button is disabled because the document is already published.*/
  'action.publish.already-published.tooltip': 'Publicerad för {{timeSincePublished}} sedan',
  /** Tooltip when action is disabled because the studio is not ready.*/
  'action.publish.disabled.not-ready': 'Operationen är inte redo',
  /** Label for action when there are pending changes.*/
  'action.publish.draft.label': 'Publicera',
  /** Label for the "Publish" document action */
  'action.publish.label': 'Publicera',
  /** Label for the "Publish" document action when the document has live edit enabled.*/
  'action.publish.live-edit.label': 'Publicera',
  /** Fallback tooltip for the "Publish" document action when publish is invoked for a document with live edit enabled.*/
  'action.publish.live-edit.publish-disabled':
    'Kan inte publicera eftersom Live Edit är aktiverat för denna dokumenttyp',
  /** Tooltip for the "Publish" document action when the document has live edit enabled.*/
  'action.publish.live-edit.tooltip':
    'Live Edit är aktiverat för denna innehållstyp och publicering sker automatiskt när du gör ändringar',
  /** Tooltip when publish button is disabled because there are no changes.*/
  'action.publish.no-changes.tooltip': 'Inga opubliserade ändringar',
  /** Label for the "Publish" document action when there are no changes.*/
  'action.publish.published.label': 'Publicerad',
  /** Label for the "Publish" document action while publish is being executed.*/
  'action.publish.running.label': 'Publicerar…',
  /** Tooltip when the "Publish" document action is disabled due to validation issues */
  'action.publish.validation-issues.tooltip':
    'Det finns valideringsfel som måste åtgärdas innan detta dokument kan publiceras',
  /** Tooltip when publish button is waiting for validation and async tasks to complete.*/
  'action.publish.waiting': 'Väntar på att uppgifter ska slutföras innan publicering',
  /** Message prompting the user to confirm that they want to restore to an earlier revision*/
  'action.restore.confirm.message': 'Är du säker på att du vill återställa detta dokument?',
  /** Fallback tooltip for when user is looking at the initial revision */
  'action.restore.disabled.cannot-restore-initial':
    'Du kan inte återställa till den ursprungliga versionen',
  /** Label for the "Restore" document action */
  'action.restore.label': 'Återställ',
  /** Default tooltip for the action */
  'action.restore.tooltip': 'Återställ till denna version',
  /** Tooltip when action is disabled because the document is not already published */
  'action.unpublish.disabled.not-published': 'Detta dokument är inte publicerat',
  /** Tooltip when action is disabled because the operation is not ready   */
  'action.unpublish.disabled.not-ready': 'Operationen är inte redo',
  /** Label for the "Unpublish" document action */
  'action.unpublish.label': 'Avpublicera',
  /** Fallback tooltip for the Unpublish document action when publish is invoked for a document with live edit enabled.*/
  'action.unpublish.live-edit.disabled':
    'Detta dokument har live redigering aktiverad och kan inte avpubliceras',

  /** Description for the archived release banner, rendered when viewing the history of a version document from the publihed view */
  'banners.archived-release.description':
    'Du tittar på ett skrivskyddat dokument som arkiverades som en del av <VersionBadge> en release</VersionBadge>. Det kan inte redigeras',
  /** The explanation displayed when a user attempts to create a new draft document, but the draft model is not switched on */
  'banners.choose-new-document-destination.cannot-create-draft-document': undefined, // 'Cannot create a draft document.'
  /** The explanation displayed when a user attempts to create a new published document, but the schema type doesn't support live-editing */
  'banners.choose-new-document-destination.cannot-create-published-document': undefined, // 'Cannot create a published document.'
  /** The prompt displayed when a user must select a different perspective in order to create a document */
  'banners.choose-new-document-destination.choose-destination': undefined, // 'Choose a destination for this document:'
  /** The explanation displayed when a user attempts to create a new document in a release, but the selected release is inactive */
  'banners.choose-new-document-destination.release-inactive': undefined, // 'The <VersionBadge>{{title}}</VersionBadge> release is not active.'
  /** The text for the restore button on the deleted document banner */
  'banners.deleted-document-banner.restore-button.text': 'Återställ senaste versionen',
  /** The text content for the deleted document banner */
  'banners.deleted-document-banner.text': 'Detta dokument har raderats.',
  /** The text content for the deprecated document type banner */
  'banners.deprecated-document-type-banner.text': 'Denna dokumenttyp är inte längre tillgänglig.',
  /** The text for publish action for discarding the version */
  'banners.live-edit-draft-banner.discard.tooltip': 'Kassera utkast',
  /** The text for publish action for the draft banner */
  'banners.live-edit-draft-banner.publish.tooltip': 'Publicera för att fortsätta redigera',
  /** The text content for the live edit document when it's a draft */
  'banners.live-edit-draft-banner.text':
    'Typen <strong>{{schemaType}}</strong> har <code>liveEdit</code> aktiverat, men en utkastversion av detta dokument finns. Publicera eller kassera utkastet för att fortsätta redigera det live.',
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
    'Din roll <Roles/> har inte behörighet att skapa detta dokument.',
  /** The text for the permission check banner if the user only has multiple roles, but they do not allow publishing this document */
  'banners.permission-check-banner.missing-permission_create_other':
    'Dina roller <Roles/> har inte behörighet att skapa detta dokument.',
  /** The text for the permission check banner if the user only has one role, and it does not allow editing this document */
  'banners.permission-check-banner.missing-permission_update_one':
    'Din roll <Roles/> har inte behörighet att uppdatera detta dokument.',
  /** The text for the permission check banner if the user only has multiple roles, but they do not allow editing this document */
  'banners.permission-check-banner.missing-permission_update_other':
    'Dina roller <Roles/> har inte behörighet att uppdatera detta dokument.',
  /** The pending text for the request permission button that appears for viewer roles */
  'banners.permission-check-banner.request-permission-button.sent': 'Redaktörsförfrågan skickad',
  /** The text for the request permission button that appears for viewer roles */
  'banners.permission-check-banner.request-permission-button.text': 'Fråga om att redigera',
  /** Description for the archived release banner, rendered when viewing the history of a version document from the published view */
  'banners.published-release.description':
    'Du tittar på ett skrivskyddat dokument som publicerades som en del av <VersionBadge> en release</VersionBadge>. Det kan inte redigeras',
  /** The text for the reload button */
  'banners.reference-changed-banner.reason-changed.reload-button.text': 'Ladda om referens',
  /** The text for the reference change banner if the reason is that the reference has been changed */
  'banners.reference-changed-banner.reason-changed.text':
    'Denna referens har ändrats sedan du öppnade den.',
  /** The text for the close button */
  'banners.reference-changed-banner.reason-removed.close-button.text': 'Stäng referens',
  /** The text for the reference change banner if the reason is that the reference has been deleted */
  'banners.reference-changed-banner.reason-removed.text':
    'Denna referens har tagits bort sedan du öppnade den.',
  /** The text that appears for the action button to add the current document to the global release */
  'banners.release.action.add-to-release': 'Lägg till i release',
  /** The text that appears for the action button to add the current document to the global release */
  'banners.release.action.open-to-edit': 'Öppna release för att redigera',
  /** Toast description in case an error occurs when adding a document to a release  */
  'banners.release.error.description':
    'Ett fel inträffade när dokumentet lades till i releasen: {{message}}',
  /** Toast title in case an error occurs when adding a document to a release  */
  'banners.release.error.title': 'Fel vid tillägg av dokument till release',
  /** The text for the banner that appears when a document only has versions but is in a draft or published pinned release */
  'banners.release.navigate-to-edit-description': 'Dokumentet finns endast i',
  /** The text for the banner that appears when a document only has versions but is in a draft or published pinned release */
  'banners.release.navigate-to-edit-description-end_one': 'releasen',
  /** The text for the banner that appears when a document only has versions but is in a draft or published pinned release */
  'banners.release.navigate-to-edit-description-end_other': 'releaser',
  /** The text for the banner that appears when there are multiple versions but no drafts or published, only one extra releases */
  'banners.release.navigate-to-edit-description-multiple_one':
    'Detta dokument är en del av <VersionBadge/> releasen och {{count}} ytterligare release.',
  /** The text for the banner that appears when there are multiple versions but no drafts or published, more than one extra releases */
  'banners.release.navigate-to-edit-description-multiple_other':
    'Detta dokument är en del av <VersionBadge/> releasen och {{count}} ytterligare releaser',
  /** The text for the banner that appears when a document only has one version but is in a draft or published pinned release */
  'banners.release.navigate-to-edit-description-single':
    'Detta dokument är en del av <VersionBadge/> releasen',
  /** The text for the banner that appears when a document is not in the current global release */
  'banners.release.not-in-release': 'Inte i <Label>{{title}}</Label> release.',
  /** Description of toast that will appear in case of latency between the user adding a document to a release and the UI reflecting it */
  'banners.release.waiting.description':
    'Vänligen vänta medan dokumentet läggs till i releasen. Det bör inte ta längre än några sekunder.',
  /** Title of toast that will appear in case of latency between the user adding a document to a release and the UI reflecting it */
  'banners.release.waiting.title': 'Lägger till dokument i release…',
  /** The text for the revision not found banner */
  'banners.revision-not-found.description':
    'Vi kunde inte hitta den valda dokumentrevisionen, vänligen välj en annan post från historiklistan.',
  /** The text content for the unpublished document banner when is part of a release */
  'banners.unpublished-release-banner.text':
    'Detta dokument kommer att avpubliceras som en del av <VersionBadge>{{title}}</VersionBadge> releasen',
  /** The text content for the unpublished document banner letting the user know that the current published version is being shown */
  'banners.unpublished-release-banner.text-with-published': undefined, // 'Showing the current <strong>published</strong> version:'

  /** Browser/tab title when creating a new document of a given type */
  'browser-document-title.new-document': 'Ny {{schemaType}}',
  /** Browser/tab title when editing a document where the title cannot be resolved from preview configuration */
  'browser-document-title.untitled-document': 'Namnlös',

  /** The action menu button aria-label */
  'buttons.action-menu-button.aria-label': 'Öppna dokumentåtgärder',
  /** The action menu button tooltip */
  'buttons.action-menu-button.tooltip': 'Dokumentåtgärder',
  /** The aria-label for the split pane button on the document panel header */
  'buttons.split-pane-button.aria-label': 'Dela ruta till höger',
  /** The tool tip for the split pane button on the document panel header */
  'buttons.split-pane-button.tooltip': 'Dela ruta till höger',
  /** The title for the close button on the split pane on the document panel header */
  'buttons.split-pane-close-button.title': 'Stäng delad ruta',
  /** The title for the close group button on the split pane on the document panel header */
  'buttons.split-pane-close-group-button.title': 'Stäng rute grupp',

  /** The text for the canvas linked banner action button */
  'canvas.banner.edit-in-canvas-action': 'Redigera i Canvas',
  /** The text for the canvas linked banner when the document is a draft */
  'canvas.banner.linked-text.draft': 'Detta utkastdokument är länkat till Canvas',
  /** The text for the canvas linked banner when the document is a live document */
  'canvas.banner.linked-text.published': 'Detta live-dokument är länkat till Canvas',
  /** The text for the canvas linked banner when the document is a version document */
  'canvas.banner.linked-text.version': 'Detta versionsdokument är länkat till Canvas',
  /** The text for the canvas linked banner popover button */
  'canvas.banner.popover-button-text': 'Läs mer',
  /** The description for the canvas linked banner popover */
  'canvas.banner.popover-description':
    'Canvas låter dig skapa innehåll i en fri-form redigerare som automatiskt mappas tillbaka till Studion som strukturerat innehåll - medan du skriver.',
  /** The heading for the canvas linked banner popover */
  'canvas.banner.popover-heading': 'Idé först författande',

  /** The description for the changes banner */
  'changes.banner.description':
    'Visar historiken för <strong>{{perspective}}</strong>-versionen av detta dokument.',
  /** The tooltip for the changes banner */
  'changes.banner.tooltip':
    'Denna vy visar de ändringar som skett i en specifik version av detta dokument. Välj en annan version för att se dess ändringar',
  /** The label used in the changes inspector for the from selector */
  'changes.from.label': 'Från',
  /* The label for the history tab in the changes inspector*/
  'changes.tab.history': 'Historik',
  /* The label for the review tab in the changes inspector*/
  'changes.tab.review-changes': 'Granska ändringar',
  /** The label used in the changes inspector for the to selector */
  'changes.to.label': 'Till',

  /** The error message shown when the specified document comparison mode is not supported */
  'compare-version.error.invalidModeParam': '"{{input}}" är inte ett stött dokumentjämförelseläge.',
  /** The error message shown when the next document for comparison could not be extracted from the URL */
  'compare-version.error.invalidNextDocumentParam': 'Nästa dokumentparameter är ogiltig.',
  /** The error message shown when the document comparison URL could not be parsed */
  'compare-version.error.invalidParams.title': 'Kan inte jämföra dokument',
  /** The error message shown when the previous document for comparison could not be extracted from the URL */
  'compare-version.error.invalidPreviousDocumentParam': 'Föregående dokumentparameter är ogiltig.',

  /** The text for the tooltip when the "Compare versions" action for a document is disabled */
  'compare-versions.menu-item.disabled-reason':
    'Det finns inga andra versioner av detta dokument att jämföra med.',
  /** The text for the "Compare versions" action for a document */
  'compare-versions.menu-item.title': 'Jämför versioner',
  /** The string used to label draft documents */
  'compare-versions.status.draft': 'Utkast',
  /** The string used to label published documents */
  'compare-versions.status.published': 'Publicerad',
  /** The title used when comparing versions of a document */
  'compare-versions.title': 'Jämför versioner',

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
  'confirm-delete-dialog.cdr-summary.subtitle_unavailable_one': 'Otillgängligt dataset',
  /** The text that appears in the subtitle `<summary>` that lists the datasets below the title */
  'confirm-delete-dialog.cdr-summary.subtitle_unavailable_other': 'Otillgängliga datasets',
  /** The text that appears in the title `<summary>` that includes the list of CDRs (singular) */
  'confirm-delete-dialog.cdr-summary.title_one': '{{documentCount}} i ett annat dataset',
  /** The text that appears in the title `<summary>` that includes the list of CDRs (plural) */
  'confirm-delete-dialog.cdr-summary.title_other': '{{documentCount}} i {{count}} datasets',
  /** Appears when hovering over the copy button to copy */
  'confirm-delete-dialog.cdr-table.copy-id-button.tooltip': 'Kopiera ID till urklipp',
  /** The header for the dataset column in the list of cross-dataset references found */
  'confirm-delete-dialog.cdr-table.dataset.label': 'Dataset',
  /** The header for the document ID column in the list of cross-dataset references found */
  'confirm-delete-dialog.cdr-table.document-id.label': 'Dokument-ID',
  /** The toast title when the copy button has been clicked but copying failed */
  'confirm-delete-dialog.cdr-table.id-copied-toast.title-failed':
    'Misslyckades med att kopiera dokument-ID',
  /** The header for the project ID column in the list of cross-dataset references found */
  'confirm-delete-dialog.cdr-table.project-id.label': 'Projekt-ID',
  /** The text in the "Delete anyway" button in the confirm delete dialog that confirms the action */
  'confirm-delete-dialog.confirm-anyway-button.text_delete': 'Radera ändå',
  /** The text in the "Unpublish anyway" button in the confirm delete dialog that confirms the action */
  'confirm-delete-dialog.confirm-anyway-button.text_unpublish': 'Avpublicera ändå',
  /** The text in the "Delete now" button in the confirm delete dialog that confirms the action */
  'confirm-delete-dialog.confirm-button.text_delete': 'Radera nu',
  /** The text in the "Unpublish now" button in the confirm delete dialog that confirms the action */
  'confirm-delete-dialog.confirm-button.text_unpublish': 'Avpublicera nu',
  /** If no referring documents are found, this text appears above the cancel and confirmation buttons */
  'confirm-delete-dialog.confirmation.text_delete':
    'Är du säker på att du vill radera “<DocumentTitle/>”?',
  /** If no referring documents are found, this text appears above the cancel and confirmation buttons */
  'confirm-delete-dialog.confirmation.text_unpublish':
    'Är du säker på att du vill avpublicera “<DocumentTitle/>”?',
  /** The text body of the error dialog. */
  'confirm-delete-dialog.error.message.text':
    'Ett fel inträffade vid laddning av refererande dokument.',
  /** The text in the retry button of the confirm delete dialog if an error occurred. */
  'confirm-delete-dialog.error.retry-button.text': 'Försök igen',
  /** The header of the confirm delete dialog if an error occurred while the confirm delete dialog was open. */
  'confirm-delete-dialog.error.title.text': 'Fel',
  /** The header of the confirm delete dialog */
  'confirm-delete-dialog.header.text_delete': 'Radera dokument?',
  /** The header of the confirm delete dialog */
  'confirm-delete-dialog.header.text_unpublish': 'Avpublicera dokument?',
  /** The text that appears while the referring documents are queried */
  'confirm-delete-dialog.loading.text': 'Letar efter refererande dokument…',
  /** Shown if there are references to other documents but the user does not have the permission to see the relevant document IDs */
  'confirm-delete-dialog.other-reference-count.title_one': '1 annan referens visas inte',
  /** Shown if there are references to other documents but the user does not have the permission to see the relevant document IDs */
  'confirm-delete-dialog.other-reference-count.title_other':
    '{{count}} andra referenser visas inte',
  /** Text in the tooltip of this component if hovering over the info icon */
  'confirm-delete-dialog.other-reference-count.tooltip':
    'Vi kan inte visa metadata för dessa referenser på grund av en saknad åtkomsttoken för de relaterade dataseten.',
  /** Appears when unable to render a document preview in the referring document list */
  'confirm-delete-dialog.preview-item.preview-unavailable.subtitle': 'ID: {{documentId}}',
  /** Appears when unable to render a document preview in the referring document list */
  'confirm-delete-dialog.preview-item.preview-unavailable.title':
    'Förhandsvisning inte tillgänglig',
  /** Warns the user of affects to other documents if the action is confirmed (delete) */
  'confirm-delete-dialog.referential-integrity-disclaimer.text_delete':
    'Om du raderar detta dokument kommer dokument som hänvisar till det inte längre att kunna komma åt det.',
  /** Warns the user of affects to other documents if the action is confirmed (unpublish) */
  'confirm-delete-dialog.referential-integrity-disclaimer.text_unpublish':
    'Om du avpublicerar detta dokument kommer dokument som hänvisar till det inte längre att kunna komma åt det.',
  /** Tells the user the count of how many other referring documents there are before listing them. (singular) */
  'confirm-delete-dialog.referring-document-count.text_one':
    '1 dokument hänvisar till “<DocumentTitle/>”',
  /** Tells the user the count of how many other referring documents there are before listing them. (plural) */
  'confirm-delete-dialog.referring-document-count.text_other':
    '{{count}} dokument hänvisar till “<DocumentTitle/>”',
  /** Describes the list of documents that refer to the one trying to be deleted (delete) */
  'confirm-delete-dialog.referring-documents-descriptor.text_delete':
    'Du kanske inte kan radera “<DocumentTitle/>” eftersom följande dokument hänvisar till det:',
  /** Describes the list of documents that refer to the one trying to be deleted (unpublish) */
  'confirm-delete-dialog.referring-documents-descriptor.text_unpublish':
    'Du kanske inte kan avpublicera “<DocumentTitle/>” eftersom följande dokument hänvisar till det:',

  /** The text for the cancel button in the confirm dialog used in document action shortcuts if none is provided */
  'confirm-dialog.cancel-button.fallback-text': 'Avbryt',
  /** The text for the confirm button in the confirm dialog used in document action shortcuts if none is provided */
  'confirm-dialog.confirm-button.fallback-text': 'Bekräfta',

  /** For the default structure definition, the title for the "Content" pane */
  'default-definition.content-title': 'Innehåll',

  /** The text shown if there was an error while getting the document's title via a preview value */
  'doc-title.error.text': 'Fel: {{errorMessage}}',
  /** The text shown if the preview value for a document is non-existent or empty */
  'doc-title.fallback.text': 'Namnlös',
  /** The text shown if a document's title via a preview value cannot be determined due to an unknown schema type */
  'doc-title.unknown-schema-type.text': 'Okänd schematyp: {{schemaType}}',

  /** Tooltip text shown for the close button of the document inspector */
  'document-inspector.close-button.tooltip': 'Stäng',
  /** The title shown in the dialog header, when inspecting a valid document */
  'document-inspector.dialog.title': 'Inspekterar <DocumentTitle/>',
  /** The title shown in the dialog header, when the document being inspected is not created yet/has no value */
  'document-inspector.dialog.title-no-value': 'Inget värde',
  /** Title shown for menu item that opens the "Inspect" dialog */
  'document-inspector.menu-item.title': 'Inspektera',
  /** the placeholder text for the search input on the inspect dialog */
  'document-inspector.search.placeholder': 'Sök',
  /** The "parsed" view mode, meaning the JSON is searchable, collapsible etc */
  'document-inspector.view-mode.parsed': 'Analyserad',
  /** The "raw" view mode, meaning the JSON is presented syntax-highlighted, but with no other features - optimal for copying */
  'document-inspector.view-mode.raw-json': 'Rå JSON',

  /** The text for when a form is hidden */
  'document-view.form-view.form-hidden': 'Detta formulär är dolt',
  /** Fallback title shown when a form title is not provided */
  'document-view.form-view.form-title-fallback': 'Namnlös',
  /** The text for when the form view is loading a document */
  'document-view.form-view.loading': 'Laddar dokument…',
  /** The description of the sync lock toast on the form view */
  'document-view.form-view.sync-lock-toast.description':
    'Vänligen vänta medan dokumentet synkroniseras. Detta sker vanligtvis precis efter att dokumentet har publicerats, och det bör inte ta mer än några sekunder',
  /** The title of the sync lock toast on the form view */
  'document-view.form-view.sync-lock-toast.title': 'Synkroniserar dokument…',

  /** The description for the document favorite action */
  'document.favorites.add-to-favorites': 'Lägg till i favoriter',
  /** The description for the document unfavorite action */
  'document.favorites.remove-from-favorites': 'Ta bort från favoriter',

  /** The description for the events inspector when we can't load the document so we default to compare with published */
  'events.compare-with-published.description':
    'Vi kan inte ladda ändringarna för detta dokument, troligen på grund av historikbevarandepolicyn för din plan, detta visar dig hur <strong>{{version}}</strong>-versionen jämförs med <strong>publicerad</strong> version.',
  /** The title for the events inspector when we can't load the document so we default to compare with published */
  'events.compare-with-published.title': 'Jämför med publicerad',
  /**The title for the menu items that will be shown when expanding a publish release event to inspect the document */
  'events.inspect.release': 'Granska <VersionBadge>{{releaseTitle}}</VersionBadge> dokument',
  /**The title for the menu items that will be shown when expanding a publish draft event to inspect the draft document*/
  'events.open.draft': 'Öppna <VersionBadge>utkast</VersionBadge> dokument',
  /**The title for the menu items that will be shown when expanding a publish release event to inspect the release*/
  'events.open.release': 'Öppna <VersionBadge>{{releaseTitle}}</VersionBadge> release',

  /** The loading messaging for when the tooltip is still loading permission info */
  'insufficient-permissions-message-tooltip.loading-text': 'Laddar…',

  /** --- Menu items --- */
  /** The menu item group title to use for the Action menu items */
  'menu-item-groups.actions-group': 'Åtgärder',
  /** The menu item group title to use for the Layout menu items */
  'menu-item-groups.layout-group': 'Layout',
  /** The menu item group title to use for the Sort menu items */
  'menu-item-groups.sorting-group': 'Sortering',

  /** The menu item title to use the compact view */
  'menu-items.layout.compact-view': 'Kompakt vy',
  /** The menu item title to use the detailed view */
  'menu-items.layout.detailed-view': 'Detaljerad vy',
  /** The menu item title to Sort by Created */
  'menu-items.sort-by.created': 'Sortera efter Skapad',
  /** The menu item title to Sort by Last Edited */
  'menu-items.sort-by.last-edited': 'Sortera efter Senast redigerad',

  /** The link text of the no document type screen that appears directly below the subtitle */
  'no-document-types-screen.link-text': 'Lär dig hur du lägger till en dokumenttyp →',
  /** The subtitle of the no document type screen that appears directly below the title */
  'no-document-types-screen.subtitle': 'Vänligen definiera minst en dokumenttyp i ditt schema.',
  /** The title of the no document type screen */
  'no-document-types-screen.title': 'Inga dokumenttyper',

  /** Text shown on back button visible on smaller breakpoints */
  'pane-header.back-button.text': 'Tillbaka',
  /** tooltip text (via `title` attribute) for the menu button */
  'pane-header.context-menu-button.tooltip': 'Visa meny',
  /** Appears in a document list pane header if there are more than one option for create. This is the label for that menu */
  'pane-header.create-menu.label': 'Skapa',
  /** Tooltip displayed on the create new button in document lists */
  'pane-header.create-new-button.tooltip': 'Skapa nytt dokument',
  /** The `aria-label` for the disabled button in the pane header if create permissions are granted */
  'pane-header.disabled-created-button.aria-label': 'Otillräckliga behörigheter',

  /** The text shown in the tooltip of pane item previews of documents if there are unpublished edits */
  'pane-item.draft-status.has-draft.tooltip': 'Redigerad <RelativeTime/>',
  /** The text shown in the tooltip of pane item previews of documents if there are no unpublished edits */
  'pane-item.draft-status.no-draft.tooltip': 'Inga opublicerade ändringar',
  /** The subtitle tor pane item previews if there isn't a matching schema type found */
  'pane-item.missing-schema-type.subtitle': 'Dokument: <Code>{{documentId}}</Code>',
  /** The title tor pane item previews if there isn't a matching schema type found */
  'pane-item.missing-schema-type.title':
    'Inget schema hittades för typ <Code>{{documentType}}</Code>',
  /** The text shown in the tooltip of pane item previews of documents if there are unpublished edits */
  'pane-item.published-status.has-published.tooltip': 'Publicerad <RelativeTime/>',
  /** The text shown in the tooltip of pane item previews of documents if there are no unpublished edits */
  'pane-item.published-status.no-published.tooltip': 'Inga opublicerade ändringar',

  /** The text used in the document header title if there is an error */
  'panes.document-header-title.error.text': 'Fel: {{error}}',
  /** The text used in the document header title if creating a new item */
  'panes.document-header-title.new.text': 'Ny {{schemaType}}',
  /** The text used in the document header title if no other title can be determined */
  'panes.document-header-title.untitled.text': 'Namnlös',
  /** The help text saying that we'll retry fetching the document list */
  'panes.document-list-pane.error.retrying': 'Försöker igen…',
  /** The error text on the document list pane */
  'panes.document-list-pane.error.text': 'Fel: <Code>{{error}}</Code>',
  /** The error text on the document list pane */
  'panes.document-list-pane.error.text.dev': 'Fel: <Code>{{error}}</Code>',
  /** The error text on the document list pane if the browser appears to be offlline */
  'panes.document-list-pane.error.text.offline': 'Internetanslutningen verkar vara offline.',
  /** The error title on the document list pane */
  'panes.document-list-pane.error.title': 'Kunde inte hämta listobjekt',
  /** The help text saying that we'll retry fetching the document list */
  'panes.document-list-pane.error.will-retry-automatically_one': 'Försöker igen…',
  'panes.document-list-pane.error.will-retry-automatically_other': 'Försöker igen… (#{{count}}).',
  /** The text of the document list pane if more than a maximum number of documents are returned */
  'panes.document-list-pane.max-items.text': 'Visar maximalt {{limit}} dokument',
  /** The text of the document list pane if no documents are found for a specified type */
  'panes.document-list-pane.no-documents-of-type.text': 'Inga dokument av denna typ',
  /** The text of the document list pane if no documents are found */
  'panes.document-list-pane.no-documents.text': 'Inga resultat hittades',
  /** The text of the document list pane if no documents are found matching specified criteria */
  'panes.document-list-pane.no-matching-documents.text': 'Inga matchande dokument',
  /** The search input for the search input on the document list pane */
  'panes.document-list-pane.reconnecting': 'Försöker ansluta…',
  /** The aria-label for the search input on the document list pane */
  'panes.document-list-pane.search-input.aria-label': 'Sök i listan',
  /** The search input for the search input on the document list pane */
  'panes.document-list-pane.search-input.placeholder': 'Sök i listan',
  /** The summary title when displaying an error for a document operation result */
  'panes.document-operation-results.error.summary.title': 'Detaljer',
  /** The text when a generic operation failed (fallback, generally not shown)  */
  'panes.document-operation-results.operation-error': 'Ett fel inträffade under {{context}}',
  /** The text when a delete operation failed  */
  'panes.document-operation-results.operation-error_delete':
    'Ett fel inträffade vid försök att radera detta dokument. Detta betyder vanligtvis att det finns andra dokument som refererar till det.',
  /** The text when an unpublish operation failed  */
  'panes.document-operation-results.operation-error_unpublish':
    'Ett fel inträffade vid försök att avpublicera detta dokument. Detta betyder vanligtvis att det finns andra dokument som refererar till det.',
  /** The text when a generic operation succeeded (fallback, generally not shown)  */
  'panes.document-operation-results.operation-success': 'Lyckades utföra {{context}} på dokumentet',
  /** The text when copy URL operation succeeded  */
  'panes.document-operation-results.operation-success_copy-url':
    'Dokumentets URL kopierad till urklipp',
  /**  */
  'panes.document-operation-results.operation-success_createVersion':
    '<Strong>{{title}}</Strong> lades till i releasen',
  /** The text when a delete operation succeeded  */
  'panes.document-operation-results.operation-success_delete': 'Dokumentet raderades framgångsrikt',
  /** The text when a discard changes operation succeeded  */
  'panes.document-operation-results.operation-success_discardChanges':
    'Alla ändringar sedan senaste publiceringen har nu kasserats. Det kasserade utkastet kan fortfarande återhämtas från historiken',
  /** The text when a duplicate operation succeeded  */
  'panes.document-operation-results.operation-success_duplicate':
    'Dokumentet duplicerades framgångsrikt',
  /** The text when a publish operation succeeded  */
  'panes.document-operation-results.operation-success_publish': 'Dokumentet publicerades',
  /** The text when a restore operation succeeded  */
  'panes.document-operation-results.operation-success_restore':
    '<Strong>{{title}}</Strong> återställdes',
  /** The text when an unpublish operation succeeded  */
  'panes.document-operation-results.operation-success_unpublish':
    'Dokumentet avpublicerades. Ett utkast har skapats från den senaste publicerade versionen.',
  /** The document title shown when document title is "undefined" in operation message */
  'panes.document-operation-results.operation-undefined-title': 'Namnlös',
  /** The loading message for the document not found pane */
  'panes.document-pane.document-not-found.loading': 'Laddar dokument…',
  /** The text of the document not found pane if the schema is known */
  'panes.document-pane.document-not-found.text':
    'Dokumenttypen är inte definierad, och ett dokument med identifieraren <Code>{{id}}</Code> kunde inte hittas.',
  /** The title of the document not found pane if the schema is known */
  'panes.document-pane.document-not-found.title': 'Dokumentet hittades inte',
  /** The text of the document not found pane if the schema is not found */
  'panes.document-pane.document-unknown-type.text':
    'Detta dokument har schematypen <Code>{{documentType}}</Code>, som inte är definierad som en typ i det lokala innehållsstudioschemat.',
  /** The title of the document not found pane if the schema is not found or unknown */
  'panes.document-pane.document-unknown-type.title':
    'Okänd dokumenttyp: <Code>{{documentType}}</Code>',
  /** The title of the document not found pane if the schema is unknown */
  'panes.document-pane.document-unknown-type.without-schema.text':
    'Detta dokument finns inte, och ingen schematyp specificerades för det.',
  /** Default message shown while resolving the structure definition for an asynchronous node */
  'panes.resolving.default-message': 'Laddar…',
  /** Message shown while resolving the structure definition for an asynchronous node and it is taking a while (more than 5s) */
  'panes.resolving.slow-resolve-message': 'Laddar fortfarande…',
  /** The text to display when type is missing */
  'panes.unknown-pane-type.missing-type.text':
    'Strukturelement saknar nödvändig <Code>type</Code>-egenskap.',
  /** The title of the unknown pane */
  'panes.unknown-pane-type.title': 'Okänd paneltyp',
  /** The text to display when type is unknown */
  'panes.unknown-pane-type.unknown-type.text':
    'Strukturelement av typen <Code>{{type}}</Code> är inte en känd entitet.',

  /** The text for the "Open preview" action for a document */
  'production-preview.menu-item.title': 'Öppna förhandsgranskning',

  /** The text for the confirm button in the request permission dialog used in the permissions banner */
  'request-permission-dialog.confirm-button.text': 'Skicka förfrågan',
  /** The description text for the request permission dialog used in the permissions banner */
  'request-permission-dialog.description.text':
    'Din förfrågan kommer att skickas till projektadministratör(erna). Om du vill kan du också inkludera en anteckning',
  /** The header/title for the request permission dialog used in the permissions banner */
  'request-permission-dialog.header.text': 'Be om redigeringsåtkomst',
  /** The text describing the note input for the request permission dialog used in the permissions banner */
  'request-permission-dialog.note-input.description.text':
    'Om du vill kan du lägga till en anteckning',
  /** The placeholder for the note input in the request permission dialog used in the permissions banner */
  'request-permission-dialog.note-input.placeholder.text': 'Lägg till anteckning...',
  /** The error/warning text in the request permission dialog when the user's request has been declined */
  'request-permission-dialog.warning.denied.text':
    'Din förfrågan om åtkomst till detta projekt har avslagits.',
  /** The error/warning text in the request permission dialog when the user's request has been denied due to too many outstanding requests */
  'request-permission-dialog.warning.limit-reached.text':
    'Du har nått gränsen för rollförfrågningar över alla projekt. Vänta innan du skickar fler förfrågningar eller kontakta en administratör för hjälp.',

  /** Label for button when status is saved */
  'status-bar.document-status-pulse.status.saved.text': 'Sparad',
  /** Label for button when status is syncing */
  'status-bar.document-status-pulse.status.syncing.text': 'Sparar...',
  /** Accessibility label indicating when the document was last published, in relative time, eg "3 weeks ago" */
  'status-bar.publish-status-button.last-published-time.aria-label':
    'Senast publicerad {{relativeTime}}',
  /** Text for tooltip showing explanation of timestamp/relative time, eg "Last published <RelativeTime/>" */
  'status-bar.publish-status-button.last-published-time.tooltip':
    'Senast publicerad <RelativeTime/>',
  /** Accessibility label indicating when the document was last updated, in relative time, eg "2 hours ago" */
  'status-bar.publish-status-button.last-updated-time.aria-label':
    'Senast uppdaterad {{relativeTime}}',
  /** Text for tooltip showing explanation of timestamp/relative time, eg "Last updated <RelativeTime/>" */
  'status-bar.publish-status-button.last-updated-time.tooltip': 'Senast uppdaterad <RelativeTime/>',
  /** Aria label for the button */
  'status-bar.review-changes-button.aria-label': 'Granska ändringar',
  /** Label for button when status is saved */
  'status-bar.review-changes-button.status.saved.text': 'Sparad!',
  /** Label for button when status is syncing */
  'status-bar.review-changes-button.status.syncing.text': 'Sparar...',
  /** Text for the secondary text for tooltip for the button */
  'status-bar.review-changes-button.tooltip.changes-saved': 'Ändringar sparade',
  /** Primary text for tooltip for the button */
  'status-bar.review-changes-button.tooltip.text': 'Granska ändringar',

  /** The text that appears in side the documentation link */
  'structure-error.docs-link.text': 'Visa dokumentation',
  /** Labels the error message or error stack of the structure error screen */
  'structure-error.error.label': 'Fel',
  /** The header that appears at the top of the error screen */
  'structure-error.header.text': 'Ett fel uppstod vid läsning av strukturen',
  /** The text in the reload button to retry rendering the structure */
  'structure-error.reload-button.text': 'Ladda om',
  /** Labels the structure path of the structure error screen */
  'structure-error.structure-path.label': 'Strukturväg',

  /** The aria label for the menu button in the timeline item */
  'timeline-item.menu-button.aria-label': 'Öppna åtgärdsmenyn',
  /** The text for the tooltip in menu button the timeline item */
  'timeline-item.menu-button.tooltip': 'Åtgärder',
  /** The text for the collapse action in the timeline item menu */
  'timeline-item.menu.action-collapse': 'Kollapsa',
  /** The text for the expand action in the timeline item menu */
  'timeline-item.menu.action-expand': 'Expandera',
  /** The text for the published event menu tooltip when the release is not found */
  'timeline-item.not-found-release.tooltip': 'Release med id "{{releaseId}}" hittades inte',
})
