import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Label for the "Copy Document URL" document action */
  'action.copy-document-url.label': 'Kopier dokumentets URL',
  /** Tooltip when action button is disabled because the operation is not ready   */
  'action.delete.disabled.not-ready': 'Operasjonen er ikke klar',
  /** Tooltip when action button is disabled because the document does not exist */
  'action.delete.disabled.nothing-to-delete':
    'Dette dokumentet eksisterer ikke eller har allerede blitt slettet',
  /** Label for the "Delete" document action button */
  'action.delete.label': 'Slett',
  /** Label for the "Delete" document action while the document is being deleted */
  'action.delete.running.label': 'Sletter…',
  /** Tooltip when action is disabled because the document is linked to Canvas */
  'action.disabled-by-canvas.tooltip':
    'Noen dokumenthandlinger er deaktivert for dokumenter koblet til Canvas',
  /** Message prompting the user to confirm discarding changes */
  'action.discard-changes.confirm-dialog.confirm-discard-changes':
    'Er du sikker på at du vil forkaste alle endringer siden forrige gang dette dokumentet ble publisert?',
  /** Tooltip when action is disabled because the document has no unpublished changes */
  'action.discard-changes.disabled.no-change': 'Dette dokumentet har ingen endringer',
  /** Tooltip when action is disabled because the document is not published */
  'action.discard-changes.disabled.not-published': 'Dette dokumentet er ikke publisert',
  /** Tooltip when action button is disabled because the operation is not ready   */
  'action.discard-changes.disabled.not-ready': 'Operasjonen er ikke klar',
  /** Label for the "Discard changes" document action */
  'action.discard-changes.label': 'Forkast endringer',
  /** Tooltip when action is disabled because the operation is not ready   */
  'action.duplicate.disabled.not-ready': 'Operasjonen er ikke klar',
  /** Tooltip when action is disabled because the document doesn't exist */
  'action.duplicate.disabled.nothing-to-duplicate':
    'Dette dokumentet er tomt og kan ikke dupliseres',
  /** Label for the "Duplicate" document action */
  'action.duplicate.label': 'Dupliser',
  /** Label for the "Duplicate" document action while the document is being duplicated */
  'action.duplicate.running.label': 'Dupliserer…',
  /** Tooltip when publish button is disabled because the document is already published, and published time is unavailable.*/
  'action.publish.already-published.no-time-ago.tooltip': 'Allerede publisert',
  /** Tooltip when publish button is disabled because the document is already published.*/
  'action.publish.already-published.tooltip': 'Publisert {{timeSincePublished}}',
  /** Tooltip when action is disabled because the studio is not ready.*/
  'action.publish.disabled.not-ready': 'Operasjonen er ikke klar',
  /** Label for action when there are pending changes.*/
  'action.publish.draft.label': 'Publiser',
  /** Label for the "Publish" document action */
  'action.publish.label': 'Publiser',
  /** Label for the "Publish" document action when the document has live edit enabled.*/
  'action.publish.live-edit.label': 'Publiser',
  /** Fallback tooltip for the "Publish" document action when publish is invoked for a document with live edit enabled.*/
  'action.publish.live-edit.publish-disabled':
    'Kan ikke publisere fordi "Live Edit" er skrudd på for denne dokumenttypen.',
  /** Tooltip for the "Publish" document action when the document has live edit enabled.*/
  'action.publish.live-edit.tooltip':
    '"Live Edit" er skrudd på for denne dokumenttypen og publisering skjer automatisk når du gjør endringer',
  /** Tooltip when publish button is disabled because there are no changes.*/
  'action.publish.no-changes.tooltip': 'Ingen upubliserte endringer',
  /** Label for the "Publish" document action when there are no changes.*/
  'action.publish.published.label': 'Publisert',
  /** Label for the "Publish" document action while publish is being executed.*/
  'action.publish.running.label': 'Publiserer…',
  /** Tooltip when the "Publish" document action is disabled due to validation issues */
  'action.publish.validation-issues.tooltip': 'Valideringsfeil må rettes før det kan publiseres',
  /** Tooltip when publish button is waiting for validation and async tasks to complete.*/
  'action.publish.waiting': 'Venter på at andre oppgaver skal fullføre',
  /** Message prompting the user to confirm that they want to restore to an earlier revision*/
  'action.restore.confirm.message': 'Er du sikker på at du vil gjenopprette til valgte versjon?',
  /** Fallback tooltip for when user is looking at the initial revision */
  'action.restore.disabled.cannot-restore-initial': 'Kan ikke gjenopprette til første version',
  /** Label for the "Restore" document action */
  'action.restore.label': 'Gjenopprett',
  /** Default tooltip for the action */
  'action.restore.tooltip': 'Gjenopprett til denne versjonen',
  /** Tooltip when action is disabled because the document is not already published */
  'action.unpublish.disabled.not-published': 'Dette dokumentet er ikke publisert',
  /** Tooltip when action is disabled because the operation is not ready   */
  'action.unpublish.disabled.not-ready': 'Operasjonen er ikke klar',
  /** Label for the "Unpublish" document action */
  'action.unpublish.label': 'Avpubliser',
  /** Fallback tooltip for the Unpublish document action when publish is invoked for a document with live edit enabled.*/
  'action.unpublish.live-edit.disabled':
    'Dette dokumentet har "Live Edit" skrudd på og kan ikke avpubliseres',

  /** Description for the archived release banner, rendered when viewing the history of a version document from the publihed view */
  'banners.archived-release.description':
    'Du ser et skrivebeskyttet dokument som ble arkivert som en del av <VersionBadge>{{title}}</VersionBadge>. Det kan ikke redigeres',
  /** The explanation displayed when a user attempts to create a new draft document, but the draft model is not switched on */
  'banners.choose-new-document-destination.cannot-create-draft-document':
    'Kan ikke opprette et utkast.',
  /** The explanation displayed when a user attempts to create a new published document, but the schema type doesn't support live-editing */
  'banners.choose-new-document-destination.cannot-create-published-document':
    'Kan ikke opprette et publisert dokument.',
  /** The prompt displayed when a user must select a different perspective in order to create a document */
  'banners.choose-new-document-destination.choose-destination':
    'Velg en destinasjon for dette dokumentet:',
  /** The explanation displayed when a user attempts to create a new document in a release, but the selected release is inactive */
  'banners.choose-new-document-destination.release-inactive':
    '<VersionBadge>{{title}}</VersionBadge>-utgivelsen er ikke aktiv.',
  /** The text for the restore button on the deleted document banner */
  'banners.deleted-document-banner.restore-button.text': 'Gjenopprett nyeste versjon',
  /** The text content for the deleted document banner */
  'banners.deleted-document-banner.text': 'Dette dokumentet har blitt slettet.',
  /** The text content for the deprecated document type banner */
  'banners.deprecated-document-type-banner.text': 'Denne dokumenttypen brukes ikke mer.',
  /** The text for publish action for discarding the version */
  'banners.live-edit-draft-banner.discard.tooltip': 'Forkast utkast',
  /** The text for publish action for the draft banner */
  'banners.live-edit-draft-banner.publish.tooltip': 'Publiser for å fortsette redigeringen',
  /** The text content for the live edit document when it's a draft */
  'banners.live-edit-draft-banner.text':
    'Typen <strong>{{schemaType}}</strong> har <code>liveEdit</code> aktivert, men det finnes ett utkast av dette dokumentet. Publiser eller forkast utkastet for å fortsette live-redigeringen.',
  /** The label for the "compare draft" action */
  'banners.obsolete-draft.actions.compare-draft.text': 'Sammenlign utkast',
  /** The label for the "discard draft" action */
  'banners.obsolete-draft.actions.discard-draft.text': 'Forkast utkast',
  /** The label for the "publish draft" action */
  'banners.obsolete-draft.actions.publish-draft.text': 'Publiser utkast',
  /** The warning displayed when editing a document that has an obsolete draft because the draft model is not switched on */
  'banners.obsolete-draft.draft-model-inactive.text':
    'Arbeidsområdet har ikke utkast aktivert, men en utkastversjon av dette dokumentet eksisterer.',
  /** The text for the permission check banner if the user only has one role, and it does not allow publishing this document */
  'banners.permission-check-banner.missing-permission_create_one':
    'Din rolle <Roles/> har ikke tillatelse til å opprette dette dokumentet.',
  /** The text for the permission check banner if the user only has multiple roles, but they do not allow publishing this document */
  'banners.permission-check-banner.missing-permission_create_other':
    'Dine roller <Roles/> har ikke tillatelse til å opprette dette dokumentet.',
  /** The text for the permission check banner if the user only has one role, and it does not allow editing this document */
  'banners.permission-check-banner.missing-permission_update_one':
    'Din rolle <Roles/> har ikke tillatelse til å oppdatere dette dokumentet.',
  /** The text for the permission check banner if the user only has multiple roles, but they do not allow editing this document */
  'banners.permission-check-banner.missing-permission_update_other':
    'Dine roller <Roles/> har ikke tillatelse til å oppdatere dette dokumentet.',
  /** The pending text for the request permission button that appears for viewer roles */
  'banners.permission-check-banner.request-permission-button.sent': 'Forespørsel sendt',
  /** The text for the request permission button that appears for viewer roles */
  'banners.permission-check-banner.request-permission-button.text': 'Be om tilgang',
  /** Description for the archived release banner, rendered when viewing the history of a version document from the published view */
  'banners.published-release.description':
    'Du ser et skrivebeskyttet dokument som ble publisert som en del av <VersionBadge>{{title}}</VersionBadge>. Det kan ikke redigeres',
  /** The text for the reload button */
  'banners.reference-changed-banner.reason-changed.reload-button.text':
    'Last inn referansen på nytt',
  /** The text for the reference change banner if the reason is that the reference has been changed */
  'banners.reference-changed-banner.reason-changed.text':
    'Denne referansen har endret seg siden du åpnet den.',
  /** The text for the close button */
  'banners.reference-changed-banner.reason-removed.close-button.text': 'Lukk referansen',
  /** The text for the reference change banner if the reason is that the reference has been deleted */
  'banners.reference-changed-banner.reason-removed.text':
    'Denne referansen har blitt fjernet siden du åpnet den.',
  /** The text that appears for the action button to add the current document to the global release */
  'banners.release.action.add-to-release': 'Legg til i utgivelsen',
  /** The text that appears for the action button to add the current document to the global release */
  'banners.release.action.open-to-edit': 'Åpne utgivelse for redigering',
  /** Toast description in case an error occurs when adding a document to a release  */
  'banners.release.error.description':
    'En feil oppstod ved legging av dokument til utgivelsen: {{message}}',
  /** Toast title in case an error occurs when adding a document to a release  */
  'banners.release.error.title': 'Feil ved legging av dokument til utgivelsen',
  /** The text for the banner that appears when a document only has versions but is in a draft or published pinned release */
  'banners.release.navigate-to-edit-description': 'Dokumentet eksisterer kun i',
  /** The text for the banner that appears when a document only has versions but is in a draft or published pinned release */
  'banners.release.navigate-to-edit-description-end_one': 'utgivelsen',
  /** The text for the banner that appears when a document only has versions but is in a draft or published pinned release */
  'banners.release.navigate-to-edit-description-end_other': 'utgivelsene',
  /** The text for the banner that appears when there are multiple versions but no drafts or published, only one extra releases */
  'banners.release.navigate-to-edit-description-multiple_one':
    'Dette dokumentet er en del av <VersionBadge/> utgivelsen og {{count}} mer utgivelse.',
  /** The text for the banner that appears when there are multiple versions but no drafts or published, more than one extra releases */
  'banners.release.navigate-to-edit-description-multiple_other':
    'Dette dokumentet er en del av <VersionBadge/> utgivelsen og {{count}} flere utgivelser',
  /** The text for the banner that appears when a document only has one version but is in a draft or published pinned release */
  'banners.release.navigate-to-edit-description-single':
    'Dette dokumentet er en del av <VersionBadge/> utgivelsen',
  /** The text for the banner that appears when a document is not in the current global release */
  'banners.release.not-in-release': 'Ikke i <VersionBadge>{{title}}</VersionBadge> utgivelsen.',
  /** Description of toast that will appear in case of latency between the user adding a document to a release and the UI reflecting it */
  'banners.release.waiting.description':
    'Vennligst vent mens dokumentet legges til i utgivelsen. Det burde ikke ta lenger enn noen sekunder.',
  /** Title of toast that will appear in case of latency between the user adding a document to a release and the UI reflecting it */
  'banners.release.waiting.title': 'Legger dokument til utgivelsen…',
  /** The text for the revision not found banner */
  'banners.revision-not-found.description':
    'Vi kunne ikke finne dokumentrevisjonen som ble valgt, vennligst velg en annen oppføring fra historikklisten.',
  /** The text content for the unpublished document banner when is part of a release */
  'banners.unpublished-release-banner.text':
    'Dette dokumentet vil bli avpublisert som en del av <VersionBadge>{{title}}</VersionBadge> utgivelsen',
  /** The text content for the unpublished document banner letting the user know that the current published version is being shown */
  'banners.unpublished-release-banner.text-with-published':
    'Viser den nåværende <strong>publiserte</strong> versjonen:',

  /** Browser/tab title when creating a new document of a given type */
  'browser-document-title.new-document': 'Ny {{schemaType}}',
  /** Browser/tab title when editing a document where the title cannot be resolved from preview configuration */
  'browser-document-title.untitled-document': 'Uten tittel',

  /** The action menu button aria-label */
  'buttons.action-menu-button.aria-label': 'Åpne dokumenthandlinger',
  /** The action menu button tooltip */
  'buttons.action-menu-button.tooltip': 'Dokumenthandlinger',
  /** The aria-label for the split pane button on the document panel header */
  'buttons.split-pane-button.aria-label': 'Del panel til høyre',
  /** The tool tip for the split pane button on the document panel header */
  'buttons.split-pane-button.tooltip': 'Del panel til høyre',
  /** The title for the close button on the split pane on the document panel header */
  'buttons.split-pane-close-button.title': 'Lukk delt panel',
  /** The title for the close group button on the split pane on the document panel header */
  'buttons.split-pane-close-group-button.title': 'Lukk panelgruppe',

  /** The text for the canvas linked banner action button */
  'canvas.banner.edit-in-canvas-action': 'Rediger i Canvas',
  /** The text for the canvas linked banner when the document is a draft */
  'canvas.banner.linked-text.draft': 'Dette utkastet er koblet til Canvas',
  /** The text for the canvas linked banner when the document is a live document */
  'canvas.banner.linked-text.published': 'Dette levende dokumentet er koblet til Canvas',
  /** The text for the canvas linked banner when the document is a version document */
  'canvas.banner.linked-text.version': 'Dette versjonsdokumentet er koblet til Canvas',
  /** The text for the canvas linked banner popover button */
  'canvas.banner.popover-button-text': 'Les mer',
  /** The description for the canvas linked banner popover */
  'canvas.banner.popover-description':
    'Canvas lar deg skrive i fri-form, og kartlegger automatisk endringer tilbake til Studio som strukturert innhold - mens du skriver.',
  /** The heading for the canvas linked banner popover */
  'canvas.banner.popover-heading': 'Start med en idé',

  /** The description for the changes banner */
  'changes.banner.description':
    'Viser historikken for <strong>{{perspective}}</strong>-versjonen av dette dokumentet.',
  /** The tooltip for the changes banner */
  'changes.banner.tooltip':
    'Denne visningen viser endringene som har skjedd i en spesifikk versjon av dette dokumentet. Velg en annen versjon for å se dens endringer',
  /** The label used in the changes inspector for the from selector */
  'changes.from.label': 'Fra',
  /* The label for the history tab in the changes inspector*/
  'changes.tab.history': 'Historikk',
  /* The label for the review tab in the changes inspector*/
  'changes.tab.review-changes': 'Gjennomgå endringer',
  /** The label used in the changes inspector for the to selector */
  'changes.to.label': 'Til',

  /** The error message shown when the specified document comparison mode is not supported */
  'compare-version.error.invalidModeParam':
    '"{{input}}" er ikke en støttet dokument sammenligningsmodus.',
  /** The error message shown when the next document for comparison could not be extracted from the URL */
  'compare-version.error.invalidNextDocumentParam': 'Neste dokument parameter er ugyldig.',
  /** The error message shown when the document comparison URL could not be parsed */
  'compare-version.error.invalidParams.title': 'Kan ikke sammenligne dokumenter',
  /** The error message shown when the previous document for comparison could not be extracted from the URL */
  'compare-version.error.invalidPreviousDocumentParam': 'Forrige dokument parameter er ugyldig.',

  /** The text for the tooltip when the "Compare versions" action for a document is disabled */
  'compare-versions.menu-item.disabled-reason':
    'Det er ingen andre versjoner av dette dokumentet å sammenligne med.',
  /** The text for the "Compare versions" action for a document */
  'compare-versions.menu-item.title': 'Sammenlign versjoner',
  /** The string used to label draft documents */
  'compare-versions.status.draft': 'Utkast',
  /** The string used to label published documents */
  'compare-versions.status.published': 'Publisert',
  /** The title used when comparing versions of a document */
  'compare-versions.title': 'Sammenlign versjoner',

  /** The text in the "Cancel" button in the confirm delete dialog that cancels the action and closes the dialog */
  'confirm-delete-dialog.cancel-button.text': 'Avbryt',
  /** Used in `confirm-delete-dialog.cdr-summary.title` */
  'confirm-delete-dialog.cdr-summary.document-count_one': '1 dokument',
  /** Used in `confirm-delete-dialog.cdr-summary.title` */
  'confirm-delete-dialog.cdr-summary.document-count_other': '{{count}} dokumenter',
  /** The text that appears in the subtitle `<summary>` that lists the datasets below the title */
  'confirm-delete-dialog.cdr-summary.subtitle_one': 'Datasett: {{datasets}}',
  /** The text that appears in the subtitle `<summary>` that lists the datasets below the title */
  'confirm-delete-dialog.cdr-summary.subtitle_other': 'Datasett: {{datasets}}',
  /** The text that appears in the subtitle `<summary>` that lists the datasets below the title */
  'confirm-delete-dialog.cdr-summary.subtitle_unavailable_one': 'Utilgjengelig datasett',
  /** The text that appears in the subtitle `<summary>` that lists the datasets below the title */
  'confirm-delete-dialog.cdr-summary.subtitle_unavailable_other': 'Utilgjengelige datasett',
  /** The text that appears in the title `<summary>` that includes the list of CDRs (singular) */
  'confirm-delete-dialog.cdr-summary.title_one': '{{documentCount}} i et annet datasett',
  /** The text that appears in the title `<summary>` that includes the list of CDRs (plural) */
  'confirm-delete-dialog.cdr-summary.title_other': '{{documentCount}} i {{count}} datasett',
  /** Appears when hovering over the copy button to copy */
  'confirm-delete-dialog.cdr-table.copy-id-button.tooltip': 'Kopier ID til utklippstavlen',
  /** The header for the dataset column in the list of cross-dataset references found */
  'confirm-delete-dialog.cdr-table.dataset.label': 'Datasett',
  /** The header for the document ID column in the list of cross-dataset references found */
  'confirm-delete-dialog.cdr-table.document-id.label': 'Dokument-ID',
  /** The toast title when the copy button has been clicked but copying failed */
  'confirm-delete-dialog.cdr-table.id-copied-toast.title-failed':
    'Klarte ikke å kopiere dokument-ID',
  /** The header for the project ID column in the list of cross-dataset references found */
  'confirm-delete-dialog.cdr-table.project-id.label': 'Prosjekt-ID',
  /** The text in the "Delete anyway" button in the confirm delete dialog that confirms the action */
  'confirm-delete-dialog.confirm-anyway-button.text_delete': 'Slett uansett',
  /** The text in the "Unpublish anyway" button in the confirm delete dialog that confirms the action */
  'confirm-delete-dialog.confirm-anyway-button.text_unpublish': 'Avpubliser uansett',
  /** The text in the "Delete now" button in the confirm delete dialog that confirms the action */
  'confirm-delete-dialog.confirm-button.text_delete': 'Slett nå',
  /** The text in the "Unpublish now" button in the confirm delete dialog that confirms the action */
  'confirm-delete-dialog.confirm-button.text_unpublish': 'Avpubliser nå',
  /** If no referring documents are found, this text appears above the cancel and confirmation buttons */
  'confirm-delete-dialog.confirmation.text_delete':
    'Er du sikker på at du vil slette «<DocumentTitle/>»?',
  /** If no referring documents are found, this text appears above the cancel and confirmation buttons */
  'confirm-delete-dialog.confirmation.text_unpublish':
    'Er du sikker på at du vil avpublisere «<DocumentTitle/>»?',
  /** The text body of the error dialog. */
  'confirm-delete-dialog.error.message.text':
    'En feil oppsto mens refererende dokumenter ble lastet inn.',
  /** The text in the retry button of the confirm delete dialog if an error occurred. */
  'confirm-delete-dialog.error.retry-button.text': 'Prøv på nytt',
  /** The header of the confirm delete dialog if an error occurred while the confirm delete dialog was open. */
  'confirm-delete-dialog.error.title.text': 'Feil',
  /** The header of the confirm delete dialog */
  'confirm-delete-dialog.header.text_delete': 'Slett dokument?',
  /** The header of the confirm delete dialog */
  'confirm-delete-dialog.header.text_unpublish': 'Avpubliser dokument?',
  /** The text that appears while the referring documents are queried */
  'confirm-delete-dialog.loading.text': 'Ser etter refererende dokumenter…',
  /** Shown if there are references to other documents but the user does not have the permission to see the relevant document IDs */
  'confirm-delete-dialog.other-reference-count.title_one': '1 annen referanse ikke vist',
  /** Shown if there are references to other documents but the user does not have the permission to see the relevant document IDs */
  'confirm-delete-dialog.other-reference-count.title_other': '{{count}} andre referanser ikke vist',
  /** Text in the tooltip of this component if hovering over the info icon */
  'confirm-delete-dialog.other-reference-count.tooltip':
    'Vi kan ikke vise metadata for disse referansene på grunn av en manglende tilgang til de relaterte datasettene.',
  /** Appears when unable to render a document preview in the referring document list */
  'confirm-delete-dialog.preview-item.preview-unavailable.subtitle': 'ID: {{documentId}}',
  /** Appears when unable to render a document preview in the referring document list */
  'confirm-delete-dialog.preview-item.preview-unavailable.title':
    'Forhåndsvisning ikke tilgjengelig',
  /** Warns the user of affects to other documents if the action is confirmed (delete) */
  'confirm-delete-dialog.referential-integrity-disclaimer.text_delete':
    'Hvis du sletter dette dokumentet, vil dokumenter som refererer til det ikke lenger kunne få tilgang til det.',
  /** Warns the user of affects to other documents if the action is confirmed (unpublish) */
  'confirm-delete-dialog.referential-integrity-disclaimer.text_unpublish':
    'Hvis du avpubliserer dette dokumentet, vil dokumenter som refererer til det ikke lenger kunne få tilgang til det.',
  /** Tells the user the count of how many other referring documents there are before listing them. (singular) */
  'confirm-delete-dialog.referring-document-count.text_one':
    '1 dokument refererer til «<DocumentTitle/>»',
  /** Tells the user the count of how many other referring documents there are before listing them. (plural) */
  'confirm-delete-dialog.referring-document-count.text_other':
    '{{count}} dokumenter refererer til «<DocumentTitle/>»',
  /** Describes the list of documents that refer to the one trying to be deleted (delete) */
  'confirm-delete-dialog.referring-documents-descriptor.text_delete':
    'Du kan kanskje ikke slette «<DocumentTitle/>» fordi de følgende dokumentene refererer til det:',
  /** Describes the list of documents that refer to the one trying to be deleted (unpublish) */
  'confirm-delete-dialog.referring-documents-descriptor.text_unpublish':
    'Du kan kanskje ikke avpublisere «<DocumentTitle/>» fordi de følgende dokumentene refererer til det:',

  /** The text for the cancel button in the confirm dialog used in document action shortcuts if none is provided */
  'confirm-dialog.cancel-button.fallback-text': 'Avbryt',
  /** The text for the confirm button in the confirm dialog used in document action shortcuts if none is provided */
  'confirm-dialog.confirm-button.fallback-text': 'Bekreft',

  /** For the default structure definition, the title for the "Content" pane */
  'default-definition.content-title': 'Innhold',

  /** The text shown if there was an error while getting the document's title via a preview value */
  'doc-title.error.text': 'Feil: {{errorMessage}}',
  /** The text shown if the preview value for a document is non-existent or empty */
  'doc-title.fallback.text': 'Uten tittel',
  /** The text shown if a document's title via a preview value cannot be determined due to an unknown schema type */
  'doc-title.unknown-schema-type.text': 'Ukjent skjematype: {{schemaType}}',

  /** Tooltip text shown for the close button of the document inspector */
  'document-inspector.close-button.tooltip': 'Lukk',
  /** The title shown in the dialog header, when inspecting a valid document */
  'document-inspector.dialog.title': 'Inspiserer <DocumentTitle/>',
  /** The title shown in the dialog header, when the document being inspected is not created yet/has no value */
  'document-inspector.dialog.title-no-value': 'Ingen verdi',
  /** Title shown for menu item that opens the "Inspect" dialog */
  'document-inspector.menu-item.title': 'Inspiser',
  /** the placeholder text for the search input on the inspect dialog */
  'document-inspector.search.placeholder': 'Søk',
  /** The "parsed" view mode, meaning the JSON is searchable, collapsible etc */
  'document-inspector.view-mode.parsed': 'Behandlet',
  /** The "raw" view mode, meaning the JSON is presented syntax-highlighted, but with no other features - optimal for copying */
  'document-inspector.view-mode.raw-json': 'Rå JSON',

  /** The text for when a form is hidden */
  'document-view.form-view.form-hidden': 'Dette skjemaet er skjult',
  /** Fallback title shown when a form title is not provided */
  'document-view.form-view.form-title-fallback': 'Uten navn',
  /** The text for when the form view is loading a document */
  'document-view.form-view.loading': 'Laster dokument…',
  /** The description of the sync lock toast on the form view */
  'document-view.form-view.sync-lock-toast.description':
    'Vennligst vent mens dokumentet synkroniseres. Dette skjer vanligvis rett etter at dokumentet har blitt publisert, og det bør ikke ta mer enn noen få sekunder',
  /** The title of the sync lock toast on the form view */
  'document-view.form-view.sync-lock-toast.title': 'Synkroniserer dokument…',

  /** The description for the document favorite action */
  'document.favorites.add-to-favorites': 'Legg til i favoritter',
  /** The description for the document unfavorite action */
  'document.favorites.remove-from-favorites': 'Fjern fra favoritter',

  /** The description for the events inspector when we can't load the document so we default to compare with published */
  'events.compare-with-published.description':
    'Vi klarer ikke å laste endringene for dette dokumentet, sannsynligvis på grunn av historikkbevaringsreglene i din plan, dette viser deg hvordan <strong>{{version}}</strong>-versjonen sammenlignes med <strong>publisert</strong>-versjonen.',
  /** The title for the events inspector when we can't load the document so we default to compare with published */
  'events.compare-with-published.title': 'Sammenligner med publisert',
  /**The title for the menu items that will be shown when expanding a publish release event to inspect the document */
  'events.inspect.release': 'Inspiser <VersionBadge>{{releaseTitle}}</VersionBadge> dokument',
  /**The title for the menu items that will be shown when expanding a publish draft event to inspect the draft document*/
  'events.open.draft': 'Åpne <VersionBadge>utkast</VersionBadge> dokument',
  /**The title for the menu items that will be shown when expanding a publish release event to inspect the release*/
  'events.open.release': 'Åpne <VersionBadge>{{releaseTitle}}</VersionBadge> utgivelsen',

  /** The loading messaging for when the tooltip is still loading permission info */
  'insufficient-permissions-message-tooltip.loading-text': 'Laster…',

  /** --- Menu items --- */
  /** The menu item group title to use for the Action menu items */
  'menu-item-groups.actions-group': 'Handlinger',
  /** The menu item group title to use for the Layout menu items */
  'menu-item-groups.layout-group': 'Visning',
  /** The menu item group title to use for the Sort menu items */
  'menu-item-groups.sorting-group': 'Sortering',

  /** The menu item title to use the compact view */
  'menu-items.layout.compact-view': 'Kompakt visning',
  /** The menu item title to use the detailed view */
  'menu-items.layout.detailed-view': 'Detaljert visning',
  /** The menu item title to Sort by Created */
  'menu-items.sort-by.created': 'Sorter etter Opprettet',
  /** The menu item title to Sort by Last Edited */
  'menu-items.sort-by.last-edited': 'Sorter etter Sist redigert',

  /** The link text of the no document type screen that appears directly below the subtitle */
  'no-document-types-screen.link-text': 'Lær hvordan du legger til en dokumenttype →',
  /** The subtitle of the no document type screen that appears directly below the title */
  'no-document-types-screen.subtitle': 'Vennligst definer minst én dokumenttype i ditt skjema.',
  /** The title of the no document type screen */
  'no-document-types-screen.title': 'Ingen dokumenttyper',

  /** Text shown on back button visible on smaller breakpoints */
  'pane-header.back-button.text': 'Tilbake',
  /** tooltip text (via `title` attribute) for the menu button */
  'pane-header.context-menu-button.tooltip': 'Vis meny',
  /** Appears in a document list pane header if there are more than one option for create. This is the label for that menu */
  'pane-header.create-menu.label': 'Opprett',
  /** Tooltip displayed on the create new button in document lists */
  'pane-header.create-new-button.tooltip': 'Opprett nytt dokument',
  /** The `aria-label` for the disabled button in the pane header if create permissions are granted */
  'pane-header.disabled-created-button.aria-label': 'Utilstrekkelig tilgang',

  /** The text shown in the tooltip of pane item previews of documents if there are unpublished edits */
  'pane-item.draft-status.has-draft.tooltip': 'Redigert <RelativeTime/>',
  /** The text shown in the tooltip of pane item previews of documents if there are no unpublished edits */
  'pane-item.draft-status.no-draft.tooltip': 'Ingen upubliserte endringer',
  /** The subtitle tor pane item previews if there isn't a matching schema type found */
  'pane-item.missing-schema-type.subtitle': 'Dokument: <Code>{{documentId}}</Code>',
  /** The title tor pane item previews if there isn't a matching schema type found */
  'pane-item.missing-schema-type.title':
    'Ingen skjema funnet for type <Code>{{documentType}}</Code>',
  /** The text shown in the tooltip of pane item previews of documents if there are unpublished edits */
  'pane-item.published-status.has-published.tooltip': 'Publisert <RelativeTime/>',
  /** The text shown in the tooltip of pane item previews of documents if there are no unpublished edits */
  'pane-item.published-status.no-published.tooltip': 'Ingen publiserte endringer',

  /** The text used in the document header title if there is an error */
  'panes.document-header-title.error.text': 'Feil: {{error}}',
  /** The text used in the document header title if creating a new item */
  'panes.document-header-title.new.text': 'Ny {{schemaType}}',
  /** The text used in the document header title if no other title can be determined */
  'panes.document-header-title.untitled.text': 'Uten tittel',
  /** The help text saying that we'll retry fetching the document list */
  'panes.document-list-pane.error.retrying': 'Prøver på nytt…',
  /** The error text on the document list pane */
  'panes.document-list-pane.error.text': 'Feil: <Code>{{error}}</Code>',
  /** The error text on the document list pane */
  'panes.document-list-pane.error.text.dev': 'Feil: <Code>{{error}}</Code>',
  /** The error text on the document list pane if the browser appears to be offlline */
  'panes.document-list-pane.error.text.offline':
    'Internettforbindelsen ser ut til å være frakoblet.',
  /** The error title on the document list pane */
  'panes.document-list-pane.error.title': 'Kunne ikke hente listeobjekter',
  /** The help text saying that we'll retry fetching the document list */
  'panes.document-list-pane.error.will-retry-automatically_one': 'Prøver på nytt…',
  'panes.document-list-pane.error.will-retry-automatically_other': 'Prøver på nytt… (#{{count}}).',
  /** The text of the document list pane if more than a maximum number of documents are returned */
  'panes.document-list-pane.max-items.text': 'Viser maksimalt {{limit}} dokumenter',
  /** The text of the document list pane if no documents are found for a specified type */
  'panes.document-list-pane.no-documents-of-type.text': 'Ingen dokumenter av denne typen',
  /** The text of the document list pane if no documents are found */
  'panes.document-list-pane.no-documents.text': 'Ingen resultater funnet',
  /** The text of the document list pane if no documents are found matching specified criteria */
  'panes.document-list-pane.no-matching-documents.text': 'Ingen dokumenter funnet som samsvarer',
  /** The search input for the search input on the document list pane */
  'panes.document-list-pane.reconnecting': 'Prøver å koble til…',
  /** The aria-label for the search input on the document list pane */
  'panes.document-list-pane.search-input.aria-label': 'Søk i liste',
  /** The search input for the search input on the document list pane */
  'panes.document-list-pane.search-input.placeholder': 'Søk i liste',
  /** The summary title when displaying an error for a document operation result */
  'panes.document-operation-results.error.summary.title': 'Detaljer',
  /** The text when a generic operation failed (fallback, generally not shown)  */
  'panes.document-operation-results.operation-error': 'En feil oppstod under {{context}}',
  /** The text when a delete operation failed  */
  'panes.document-operation-results.operation-error_delete':
    'En feil oppstod under forsøket på å slette dette dokumentet. Dette betyr vanligvis at det er andre dokumenter som refererer til det.',
  /** The text when an unpublish operation failed  */
  'panes.document-operation-results.operation-error_unpublish':
    'En feil oppstod under forsøket på å avpublisere dette dokumentet. Dette betyr vanligvis at det er andre dokumenter som refererer til det.',
  /** The text when a generic operation succeeded (fallback, generally not shown)  */
  'panes.document-operation-results.operation-success': 'Utførte {{context}} på dokumentet',
  /** The text when copy URL operation succeeded  */
  'panes.document-operation-results.operation-success_copy-url':
    'Dokumentets URL kopiert til utklippstavlen',
  /**  */
  'panes.document-operation-results.operation-success_createVersion':
    '<Strong>{{title}}</Strong> ble lagt til i utgivelsen',
  /** The text when a delete operation succeeded  */
  'panes.document-operation-results.operation-success_delete': 'Dokumentet ble slettet',
  /** The text when a discard changes operation succeeded  */
  'panes.document-operation-results.operation-success_discardChanges':
    'Alle endringer siden siste publisering har nå blitt forkastet. Det forkastede utkastet kan fortsatt gjenopprettes fra historikken',
  /** The text when a duplicate operation succeeded  */
  'panes.document-operation-results.operation-success_duplicate': 'Dokumentet ble duplisert',
  /** The text when a publish operation succeeded  */
  'panes.document-operation-results.operation-success_publish': 'Dokumentet ble publisert',
  /** The text when a restore operation succeeded  */
  'panes.document-operation-results.operation-success_restore':
    '<Strong>{{title}}</Strong> ble gjenopprettet',
  /** The text when an unpublish operation succeeded  */
  'panes.document-operation-results.operation-success_unpublish':
    'Dokumentet ble avpublisert. Et utkast har blitt opprettet fra den siste publiserte versjonen.',
  /** The document title shown when document title is "undefined" in operation message */
  'panes.document-operation-results.operation-undefined-title': 'Uten tittel',
  /** The loading message for the document not found pane */
  'panes.document-pane.document-not-found.loading': 'Laster dokument…',
  /** The text of the document not found pane if the schema is known */
  'panes.document-pane.document-not-found.text':
    'Dokumenttypen er ikke definert, og et dokument med identifikatoren <Code>{{id}}</Code> kunne ikke bli funnet.',
  /** The title of the document not found pane if the schema is known */
  'panes.document-pane.document-not-found.title': 'Dokumentet ble ikke funnet',
  /** The text of the document not found pane if the schema is not found */
  'panes.document-pane.document-unknown-type.text':
    'Dette dokumentet har skjematypen <Code>{{documentType}}</Code>, som ikke er definert som en type i det lokale innholdsstudioets skjema.',
  /** The title of the document not found pane if the schema is not found or unknown */
  'panes.document-pane.document-unknown-type.title':
    'Ukjent dokumenttype: <Code>{{documentType}}</Code>',
  /** The title of the document not found pane if the schema is unknown */
  'panes.document-pane.document-unknown-type.without-schema.text':
    'Dette dokumentet eksisterer ikke, og ingen skjematype ble spesifisert for det.',
  /** Default message shown while resolving the structure definition for an asynchronous node */
  'panes.resolving.default-message': 'Laster…',
  /** Message shown while resolving the structure definition for an asynchronous node and it is taking a while (more than 5s) */
  'panes.resolving.slow-resolve-message': 'Laster fortsatt…',
  /** The text to display when type is missing */
  'panes.unknown-pane-type.missing-type.text':
    'Strukturelement mangler påkrevd <Code>type</Code>-egenskap.',
  /** The title of the unknown pane */
  'panes.unknown-pane-type.title': 'Ukjent paneltype',
  /** The text to display when type is unknown */
  'panes.unknown-pane-type.unknown-type.text':
    'Strukturelement av type <Code>{{type}}</Code> er ikke en kjent enhet.',

  /** The text for the "Open preview" action for a document */
  'production-preview.menu-item.title': 'Åpne forhåndsvisning',

  /** The text for the confirm button in the request permission dialog used in the permissions banner */
  'request-permission-dialog.confirm-button.text': 'Send forespørsel',
  /** The description text for the request permission dialog used in the permissions banner */
  'request-permission-dialog.description.text':
    'Forespørselen din vil bli sendt til prosjektadministratorene. Hvis du vil, kan du også inkludere en merknad',
  /** The header/title for the request permission dialog used in the permissions banner */
  'request-permission-dialog.header.text': 'Be om redigeringstilgang',
  /** The text describing the note input for the request permission dialog used in the permissions banner */
  'request-permission-dialog.note-input.description.text':
    'Hvis du vil, kan du legge til en kommentar',
  /** The placeholder for the note input in the request permission dialog used in the permissions banner */
  'request-permission-dialog.note-input.placeholder.text': 'Legg til kommentar…',
  /** The error/warning text in the request permission dialog when the user's request has been declined */
  'request-permission-dialog.warning.denied.text':
    'Din forespørsel om tilgang til dette prosjektet har blitt avslått.',
  /** The error/warning text in the request permission dialog when the user's request has been denied due to too many outstanding requests */
  'request-permission-dialog.warning.limit-reached.text':
    'Du har nådd grensen for rolleforespørsler på tvers av alle prosjekter. Vennligst vent før du sender inn flere forespørsler eller kontakt en administrator for hjelp.',

  /** Label for button when status is saved */
  'status-bar.document-status-pulse.status.saved.text': 'Lagret',
  /** Label for button when status is syncing */
  'status-bar.document-status-pulse.status.syncing.text': 'Lagrer...',
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
  'status-bar.review-changes-button.aria-label': 'Se endringer',
  /** Label for button when status is saved */
  'status-bar.review-changes-button.status.saved.text': 'Lagret!',
  /** Label for button when status is syncing */
  'status-bar.review-changes-button.status.syncing.text': 'Lagrer...',
  /** Text for the secondary text for tooltip for the button */
  'status-bar.review-changes-button.tooltip.changes-saved': 'Endringer lagret',
  /** Primary text for tooltip for the button */
  'status-bar.review-changes-button.tooltip.text': 'Se endringer',

  /** The text that appears in side the documentation link */
  'structure-error.docs-link.text': 'Vis dokumentasjon',
  /** Labels the error message or error stack of the structure error screen */
  'structure-error.error.label': 'Feil',
  /** The header that appears at the top of the error screen */
  'structure-error.header.text': 'Oppdaget en feil mens strukturen ble lest',
  /** The text in the reload button to retry rendering the structure */
  'structure-error.reload-button.text': 'Last på nytt',
  /** Labels the structure path of the structure error screen */
  'structure-error.structure-path.label': 'Strukturvei',

  /** The aria label for the menu button in the timeline item */
  'timeline-item.menu-button.aria-label': 'Åpne handlingsmeny',
  /** The text for the tooltip in menu button the timeline item */
  'timeline-item.menu-button.tooltip': 'Handlinger',
  /** The text for the collapse action in the timeline item menu */
  'timeline-item.menu.action-collapse': 'Skjul',
  /** The text for the expand action in the timeline item menu */
  'timeline-item.menu.action-expand': 'Utvid',
  /** The text for the published event menu tooltip when the release is not found */
  'timeline-item.not-found-release.tooltip': 'Utgivelse med id "{{releaseId}}" ikke funnet',
})
