import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Label for the "Copy Document URL" document action */
  'action.copy-document-url.label': 'Kopiraj URL dokumenta',
  /** Tooltip when action button is disabled because the operation is not ready   */
  'action.delete.disabled.not-ready': 'Operacija nije spremna',
  /** Tooltip when action button is disabled because the document does not exist */
  'action.delete.disabled.nothing-to-delete': 'Ovaj dokument ne postoji',
  /** Label for the "Delete" document action button */
  'action.delete.label': 'Izbriši',
  /** Label for the "Delete" document action while the document is being deleted */
  'action.delete.running.label': 'Brisanje…',
  /** Tooltip when action is disabled because the document is linked to Canvas */
  'action.disabled-by-canvas.tooltip':
    'Neke akcije nad dokumentom su onemogućene za dokumente povezane s Canvasom',
  /** Message prompting the user to confirm discarding changes */
  'action.discard-changes.confirm-dialog.confirm-discard-changes':
    'Jeste li sigurni da želite odbaciti sve promjene od posljednjeg objavljivanja?',
  /** Tooltip when action is disabled because the document has no unpublished changes */
  'action.discard-changes.disabled.no-change': 'Ovaj dokument nema neobjavljenih promjena',
  /** Tooltip when action is disabled because the document is not published */
  'action.discard-changes.disabled.not-published': 'Ovaj dokument nije objavljen',
  /** Tooltip when action button is disabled because the operation is not ready   */
  'action.discard-changes.disabled.not-ready': 'Operacija nije spremna',
  /** Label for the "Discard changes" document action */
  'action.discard-changes.label': 'Odbaci promjene',
  /** Tooltip when action is disabled because the operation is not ready   */
  'action.duplicate.disabled.not-ready': 'Operacija nije spremna',
  /** Tooltip when action is disabled because the document doesn't exist */
  'action.duplicate.disabled.nothing-to-duplicate':
    'Ovaj dokument još ne postoji pa se nema što duplicirati',
  /** Label for the "Duplicate" document action */
  'action.duplicate.label': 'Dupliciraj',
  /** Label for the "Duplicate" document action while the document is being duplicated */
  'action.duplicate.running.label': 'Dupliciranje…',
  /** Tooltip when publish button is disabled because the document is already published, and published time is unavailable.*/
  'action.publish.already-published.no-time-ago.tooltip': 'Već objavljeno',
  /** Tooltip when publish button is disabled because the document is already published.*/
  'action.publish.already-published.tooltip': 'Objavljeno prije {{timeSincePublished}}',
  /** Tooltip when action is disabled because the studio is not ready.*/
  'action.publish.disabled.not-ready': 'Operacija nije spremna',
  /** Label for action when there are pending changes.*/
  'action.publish.draft.label': 'Objavi',
  /** Label for the "Publish" document action */
  'action.publish.label': 'Objavi',
  /** Label for the "Publish" document action when the document has live edit enabled.*/
  'action.publish.live-edit.label': 'Objavi',
  /** Fallback tooltip for the "Publish" document action when publish is invoked for a document with live edit enabled.*/
  'action.publish.live-edit.publish-disabled':
    'Ne može se objaviti jer je za ovu vrstu dokumenta omogućen Live Edit',
  /** Tooltip for the "Publish" document action when the document has live edit enabled.*/
  'action.publish.live-edit.tooltip':
    'Za ovu vrstu sadržaja omogućen je Live Edit i objavljivanje se automatski događa dok vršite promjene',
  /** Tooltip when publish button is disabled because there are no changes.*/
  'action.publish.no-changes.tooltip': 'Nema neobjavljenih promjena',
  /** Label for the "Publish" document action when there are no changes.*/
  'action.publish.published.label': 'Objavljeno',
  /** Label for the "Publish" document action while publish is being executed.*/
  'action.publish.running.label': 'Objavljivanje…',
  /** Tooltip when the "Publish" document action is disabled due to validation issues */
  'action.publish.validation-issues.tooltip':
    'Postoje greške u validaciji koje treba ispraviti prije nego što se ovaj dokument može objaviti',
  /** Tooltip when publish button is waiting for validation and async tasks to complete.*/
  'action.publish.waiting': 'Čekanje da se zadaci završe prije objavljivanja',
  /** Message prompting the user to confirm that they want to restore to an earlier revision*/
  'action.restore.confirm.message':
    'Jeste li sigurni da želite vratiti ovaj dokument na raniju verziju?',
  /** Fallback tooltip for when user is looking at the initial revision */
  'action.restore.disabled.cannot-restore-initial': 'Ne možete vratiti na inicijalnu verziju',
  /** Label for the "Restore" document action */
  'action.restore.label': 'Vrati',
  /** Default tooltip for the action */
  'action.restore.tooltip': 'Vrati na ovu verziju',
  /** Tooltip when action is disabled because the document is not already published */
  'action.unpublish.disabled.not-published': 'Ovaj dokument nije objavljen',
  /** Tooltip when action is disabled because the operation is not ready   */
  'action.unpublish.disabled.not-ready': 'Operacija nije spremna',
  /** Label for the "Unpublish" document action */
  'action.unpublish.label': 'Poništi objavu',
  /** Fallback tooltip for the Unpublish document action when publish is invoked for a document with live edit enabled.*/
  'action.unpublish.live-edit.disabled':
    'Ovaj dokument ima omogućen Live Edit i ne može biti poništena objava',

  /** Description for the archived release banner, rendered when viewing the history of a version document from the publihed view */
  'banners.archived-release.description':
    'Pregledavate dokument samo za čitanje koji je arhiviran kao dio <VersionBadge> izdanja</VersionBadge>. Ne može se uređivati',
  /** The explanation displayed when a user attempts to create a new draft document, but the draft model is not switched on */
  'banners.choose-new-document-destination.cannot-create-draft-document':
    'Nije moguće stvoriti dokument nacrta.',
  /** The explanation displayed when a user attempts to create a new published document, but the schema type doesn't support live-editing */
  'banners.choose-new-document-destination.cannot-create-published-document':
    'Nije moguće stvoriti objavljeni dokument.',
  /** The prompt displayed when a user must select a different perspective in order to create a document */
  'banners.choose-new-document-destination.choose-destination':
    'Odaberite odredište za ovaj dokument:',
  /** The explanation displayed when a user attempts to create a new document in a release, but the selected release is inactive */
  'banners.choose-new-document-destination.release-inactive':
    '<VersionBadge>{{title}}</VersionBadge> izdanje nije aktivno.',
  /** The text for the restore button on the deleted document banner */
  'banners.deleted-document-banner.restore-button.text': 'Vrati najnoviju verziju',
  /** The text content for the deleted document banner */
  'banners.deleted-document-banner.text': 'Ovaj dokument je izbrisan.',
  /** The text content for the deprecated document type banner */
  'banners.deprecated-document-type-banner.text': 'Ovaj tip dokumenta je zastario.',
  /** The text for publish action for discarding the version */
  'banners.live-edit-draft-banner.discard.tooltip': 'Odbaci skicu',
  /** The text for publish action for the draft banner */
  'banners.live-edit-draft-banner.publish.tooltip': 'Objavi za nastavak uređivanja',
  /** The text content for the live edit document when it's a draft */
  'banners.live-edit-draft-banner.text':
    'Tip <strong>{{schemaType}}</strong> ima omogućeno <code>liveEdit</code>, ali postoji skica ovog dokumenta. Objavite ili odbacite skicu kako biste nastavili s uređivanjem uživo.',
  /** The label for the "compare draft" action */
  'banners.obsolete-draft.actions.compare-draft.text': 'Usporedi nacrt',
  /** The label for the "discard draft" action */
  'banners.obsolete-draft.actions.discard-draft.text': 'Odbaci nacrt',
  /** The label for the "publish draft" action */
  'banners.obsolete-draft.actions.publish-draft.text': 'Objavi nacrt',
  /** The warning displayed when editing a document that has an obsolete draft because the draft model is not switched on */
  'banners.obsolete-draft.draft-model-inactive.text':
    'Radni prostor nema omogućene nacrte, ali postoji nacrt verzija ovog dokumenta.',
  /** The text for the permission check banner if the user only has one role, and it does not allow publishing this document */
  'banners.permission-check-banner.missing-permission_create_one':
    'Vaša uloga <Roles/> nema dozvolu za kreiranje ovog dokumenta.',
  /** The text for the permission check banner if the user only has multiple roles, but they do not allow publishing this document */
  'banners.permission-check-banner.missing-permission_create_other':
    'Vaše uloge <Roles/> nemaju dozvolu za kreiranje ovog dokumenta.',
  /** The text for the permission check banner if the user only has one role, and it does not allow editing this document */
  'banners.permission-check-banner.missing-permission_update_one':
    'Vaša uloga <Roles/> nema dozvolu za ažuriranje ovog dokumenta.',
  /** The text for the permission check banner if the user only has multiple roles, but they do not allow editing this document */
  'banners.permission-check-banner.missing-permission_update_other':
    'Vaše uloge <Roles/> nemaju dozvolu za ažuriranje ovog dokumenta.',
  /** The pending text for the request permission button that appears for viewer roles */
  'banners.permission-check-banner.request-permission-button.sent': 'Zahtjev za uređivanje poslan',
  /** The text for the request permission button that appears for viewer roles */
  'banners.permission-check-banner.request-permission-button.text': 'Zatraži pravo na uređivanje',
  /** Description for the archived release banner, rendered when viewing the history of a version document from the published view */
  'banners.published-release.description':
    'Pregledavate dokument samo za čitanje koji je objavljen kao dio <VersionBadge> izdanja</VersionBadge>. Ne može se uređivati',
  /** The text for the reload button */
  'banners.reference-changed-banner.reason-changed.reload-button.text': 'Ponovno učitaj referencu',
  /** The text for the reference change banner if the reason is that the reference has been changed */
  'banners.reference-changed-banner.reason-changed.text':
    'Ova referenca se promijenila otkako ste je otvorili.',
  /** The text for the close button */
  'banners.reference-changed-banner.reason-removed.close-button.text': 'Zatvori referencu',
  /** The text for the reference change banner if the reason is that the reference has been deleted */
  'banners.reference-changed-banner.reason-removed.text':
    'Ova referenca je uklonjena otkako ste je otvorili.',
  /** The text that appears for the action button to add the current document to the global release */
  'banners.release.action.add-to-release': 'Dodaj u izdanje',
  /** The text that appears for the action button to add the current document to the global release */
  'banners.release.action.open-to-edit': 'Otvori izdanje za uređivanje',
  /** Toast description in case an error occurs when adding a document to a release  */
  'banners.release.error.description':
    'Došlo je do pogreške prilikom dodavanja dokumenta u izdanje: {{message}}',
  /** Toast title in case an error occurs when adding a document to a release  */
  'banners.release.error.title': 'Pogreška pri dodavanju dokumenta u izdanje',
  /** The text for the banner that appears when a document only has versions but is in a draft or published pinned release */
  'banners.release.navigate-to-edit-description': 'Dokument postoji samo u',
  /** The text for the banner that appears when a document only has versions but is in a draft or published pinned release */
  'banners.release.navigate-to-edit-description-end_one': 'izdanju',
  /** The text for the banner that appears when a document only has versions but is in a draft or published pinned release */
  'banners.release.navigate-to-edit-description-end_other': 'izdanjima',
  /** The text for the banner that appears when there are multiple versions but no drafts or published, only one extra releases */
  'banners.release.navigate-to-edit-description-multiple_one':
    'Ovaj dokument je dio <VersionBadge/> izdanja i još {{count}} izdanja.',
  /** The text for the banner that appears when there are multiple versions but no drafts or published, more than one extra releases */
  'banners.release.navigate-to-edit-description-multiple_other':
    'Ovaj dokument je dio <VersionBadge/> izdanja i još {{count}} izdanja',
  /** The text for the banner that appears when a document only has one version but is in a draft or published pinned release */
  'banners.release.navigate-to-edit-description-single':
    'Ovaj dokument je dio <VersionBadge/> izdanja',
  /** The text for the banner that appears when a document is not in the current global release */
  'banners.release.not-in-release': 'Nije u <Label>{{title}}</Label> izdanju.',
  /** Description of toast that will appear in case of latency between the user adding a document to a release and the UI reflecting it */
  'banners.release.waiting.description':
    'Molimo pričekajte dok se dokument ne doda u izdanje. Ne bi trebalo trajati duže od nekoliko sekundi.',
  /** Title of toast that will appear in case of latency between the user adding a document to a release and the UI reflecting it */
  'banners.release.waiting.title': 'Dodavanje dokumenta u izdanje…',
  /** The text for the revision not found banner */
  'banners.revision-not-found.description':
    'Nismo mogli pronaći odabranu reviziju dokumenta, molimo odaberite drugi unos iz povijesne liste.',
  /** The text content for the unpublished document banner when is part of a release */
  'banners.unpublished-release-banner.text':
    'Ovaj dokument će biti nepublikovan kao dio <VersionBadge>{{title}}</VersionBadge> izdanja',
  /** The text content for the unpublished document banner letting the user know that the current published version is being shown */
  'banners.unpublished-release-banner.text-with-published':
    'Prikazuje se trenutna <strong>objavljena</strong> verzija:',

  /** Browser/tab title when creating a new document of a given type */
  'browser-document-title.new-document': 'Novi {{schemaType}}',
  /** Browser/tab title when editing a document where the title cannot be resolved from preview configuration */
  'browser-document-title.untitled-document': 'Bez naslova',

  /** The action menu button aria-label */
  'buttons.action-menu-button.aria-label': 'Otvori akcije dokumenta',
  /** The action menu button tooltip */
  'buttons.action-menu-button.tooltip': 'Akcije dokumenta',
  /** The aria-label for the split pane button on the document panel header */
  'buttons.split-pane-button.aria-label': 'Podijeli ploču desno',
  /** The tool tip for the split pane button on the document panel header */
  'buttons.split-pane-button.tooltip': 'Podijeli ploču desno',
  /** The title for the close button on the split pane on the document panel header */
  'buttons.split-pane-close-button.title': 'Zatvori podijeljenu ploču',
  /** The title for the close group button on the split pane on the document panel header */
  'buttons.split-pane-close-group-button.title': 'Zatvori grupu ploča',

  /** The text for the canvas linked banner action button */
  'canvas.banner.edit-in-canvas-action': 'Uredi u Canvasu',
  /** The text for the canvas linked banner when the document is a draft */
  'canvas.banner.linked-text.draft': 'Ovaj nacrt dokumenta je povezan s Canvasom',
  /** The text for the canvas linked banner when the document is a live document */
  'canvas.banner.linked-text.published': 'Ovaj objavljeni dokument je povezan s Canvasom',
  /** The text for the canvas linked banner when the document is a version document */
  'canvas.banner.linked-text.version': 'Ova verzija dokumenta je povezana s Canvasom',
  /** The text for the canvas linked banner popover button */
  'canvas.banner.popover-button-text': 'Saznajte više',
  /** The description for the canvas linked banner popover */
  'canvas.banner.popover-description':
    'Canvas vam omogućuje autorstvo u slobodnoj formi uredniku koji se automatski mapira natrag na Studio kao strukturirani sadržaj - dok tipkate.',
  /** The heading for the canvas linked banner popover */
  'canvas.banner.popover-heading': 'Autorstvo s idejom na prvom mjestu',

  /** The description for the changes banner */
  'changes.banner.description':
    'Prikazuje povijest za <strong>{{perspective}}</strong> verziju ovog dokumenta.',
  /** The tooltip for the changes banner */
  'changes.banner.tooltip':
    'Ovaj prikaz pokazuje promjene koje su se dogodile u određenoj verziji ovog dokumenta. Odaberite drugu verziju da biste vidjeli njene promjene',
  /** The label used in the changes inspector for the from selector */
  'changes.from.label': 'Od',
  /* The label for the history tab in the changes inspector*/
  'changes.tab.history': 'Povijest',
  /* The label for the review tab in the changes inspector*/
  'changes.tab.review-changes': 'Pregled promjena',
  /** The label used in the changes inspector for the to selector */
  'changes.to.label': 'Do',

  /** The error message shown when the specified document comparison mode is not supported */
  'compare-version.error.invalidModeParam': '"{{input}}" nije podržani način usporedbe dokumenata.',
  /** The error message shown when the next document for comparison could not be extracted from the URL */
  'compare-version.error.invalidNextDocumentParam': 'Parametar sljedećeg dokumenta je nevažeći.',
  /** The error message shown when the document comparison URL could not be parsed */
  'compare-version.error.invalidParams.title': 'Nemoguće usporediti dokumente',
  /** The error message shown when the previous document for comparison could not be extracted from the URL */
  'compare-version.error.invalidPreviousDocumentParam':
    'Parametar prethodnog dokumenta je nevažeći.',

  /** The text for the tooltip when the "Compare versions" action for a document is disabled */
  'compare-versions.menu-item.disabled-reason': 'Nema drugih verzija ovog dokumenta za usporedbu.',
  /** The text for the "Compare versions" action for a document */
  'compare-versions.menu-item.title': 'Usporedi verzije',
  /** The string used to label draft documents */
  'compare-versions.status.draft': 'Nacrt',
  /** The string used to label published documents */
  'compare-versions.status.published': 'Objavljeno',
  /** The title used when comparing versions of a document */
  'compare-versions.title': 'Usporedi verzije',

  /** The text in the "Cancel" button in the confirm delete dialog that cancels the action and closes the dialog */
  'confirm-delete-dialog.cancel-button.text': 'Odustani',
  /** Used in `confirm-delete-dialog.cdr-summary.title` */
  'confirm-delete-dialog.cdr-summary.document-count_one': '1 dokument',
  /** Used in `confirm-delete-dialog.cdr-summary.title` */
  'confirm-delete-dialog.cdr-summary.document-count_other': '{{count}} dokumenata',
  /** The text that appears in the subtitle `<summary>` that lists the datasets below the title */
  'confirm-delete-dialog.cdr-summary.subtitle_one': 'Dataset: {{datasets}}',
  /** The text that appears in the subtitle `<summary>` that lists the datasets below the title */
  'confirm-delete-dialog.cdr-summary.subtitle_other': 'Datasets: {{datasets}}',
  /** The text that appears in the subtitle `<summary>` that lists the datasets below the title */
  'confirm-delete-dialog.cdr-summary.subtitle_unavailable_one': 'Nedostupan dataset',
  /** The text that appears in the subtitle `<summary>` that lists the datasets below the title */
  'confirm-delete-dialog.cdr-summary.subtitle_unavailable_other': 'Nedostupni datasets',
  /** The text that appears in the title `<summary>` that includes the list of CDRs (singular) */
  'confirm-delete-dialog.cdr-summary.title_one': '{{documentCount}} u drugom datasetu',
  /** The text that appears in the title `<summary>` that includes the list of CDRs (plural) */
  'confirm-delete-dialog.cdr-summary.title_other': '{{documentCount}} u {{count}} datasets',
  /** Appears when hovering over the copy button to copy */
  'confirm-delete-dialog.cdr-table.copy-id-button.tooltip': 'Kopiraj ID u međuspremnik',
  /** The header for the dataset column in the list of cross-dataset references found */
  'confirm-delete-dialog.cdr-table.dataset.label': 'Dataset',
  /** The header for the document ID column in the list of cross-dataset references found */
  'confirm-delete-dialog.cdr-table.document-id.label': 'ID dokumenta',
  /** The toast title when the copy button has been clicked but copying failed */
  'confirm-delete-dialog.cdr-table.id-copied-toast.title-failed':
    'Kopiranje ID-a dokumenta nije uspjelo',
  /** The header for the project ID column in the list of cross-dataset references found */
  'confirm-delete-dialog.cdr-table.project-id.label': 'ID projekta',
  /** The text in the "Delete anyway" button in the confirm delete dialog that confirms the action */
  'confirm-delete-dialog.confirm-anyway-button.text_delete': 'Svejedno izbriši',
  /** The text in the "Unpublish anyway" button in the confirm delete dialog that confirms the action */
  'confirm-delete-dialog.confirm-anyway-button.text_unpublish': 'Svejedno poništi objavu',
  /** The text in the "Delete now" button in the confirm delete dialog that confirms the action */
  'confirm-delete-dialog.confirm-button.text_delete': 'Izbriši sada',
  /** The text in the "Unpublish now" button in the confirm delete dialog that confirms the action */
  'confirm-delete-dialog.confirm-button.text_unpublish': 'Poništi objavu sada',
  /** If no referring documents are found, this text appears above the cancel and confirmation buttons */
  'confirm-delete-dialog.confirmation.text_delete':
    'Jeste li sigurni da želite izbrisati “<DocumentTitle/>”?',
  /** If no referring documents are found, this text appears above the cancel and confirmation buttons */
  'confirm-delete-dialog.confirmation.text_unpublish':
    'Jeste li sigurni da želite poništiti objavu “<DocumentTitle/>”?',
  /** The text body of the error dialog. */
  'confirm-delete-dialog.error.message.text':
    'Došlo je do pogreške prilikom učitavanja referentnih dokumenata.',
  /** The text in the retry button of the confirm delete dialog if an error occurred. */
  'confirm-delete-dialog.error.retry-button.text': 'Pokušaj ponovno',
  /** The header of the confirm delete dialog if an error occurred while the confirm delete dialog was open. */
  'confirm-delete-dialog.error.title.text': 'Greška',
  /** The header of the confirm delete dialog */
  'confirm-delete-dialog.header.text_delete': 'Izbrisati dokument?',
  /** The header of the confirm delete dialog */
  'confirm-delete-dialog.header.text_unpublish': 'Poništiti objavu dokumenta?',
  /** The text that appears while the referring documents are queried */
  'confirm-delete-dialog.loading.text': 'Traženje referentnih dokumenata…',
  /** Shown if there are references to other documents but the user does not have the permission to see the relevant document IDs */
  'confirm-delete-dialog.other-reference-count.title_one': '1 druga referenca nije prikazana',
  /** Shown if there are references to other documents but the user does not have the permission to see the relevant document IDs */
  'confirm-delete-dialog.other-reference-count.title_other':
    '{{count}} druge reference nisu prikazane',
  /** Text in the tooltip of this component if hovering over the info icon */
  'confirm-delete-dialog.other-reference-count.tooltip':
    'Ne možemo prikazati metapodatke za ove reference zbog nedostatka pristupnog tokena za povezane datasetove.',
  /** Appears when unable to render a document preview in the referring document list */
  'confirm-delete-dialog.preview-item.preview-unavailable.subtitle': 'ID: {{documentId}}',
  /** Appears when unable to render a document preview in the referring document list */
  'confirm-delete-dialog.preview-item.preview-unavailable.title': 'Pregled nije dostupan',
  /** Warns the user of affects to other documents if the action is confirmed (delete) */
  'confirm-delete-dialog.referential-integrity-disclaimer.text_delete':
    'Ako izbrišete ovaj dokument, dokumenti koji na njega upućuju više mu neće moći pristupiti.',
  /** Warns the user of affects to other documents if the action is confirmed (unpublish) */
  'confirm-delete-dialog.referential-integrity-disclaimer.text_unpublish':
    'Ako poništite objavu ovog dokumenta, dokumenti koji na njega upućuju više mu neće moći pristupiti.',
  /** Tells the user the count of how many other referring documents there are before listing them. (singular) */
  'confirm-delete-dialog.referring-document-count.text_one':
    '1 dokument upućuje na “<DocumentTitle/>”',
  /** Tells the user the count of how many other referring documents there are before listing them. (plural) */
  'confirm-delete-dialog.referring-document-count.text_other':
    '{{count}} dokumenta upućuju na “<DocumentTitle/>”',
  /** Describes the list of documents that refer to the one trying to be deleted (delete) */
  'confirm-delete-dialog.referring-documents-descriptor.text_delete':
    'Možda nećete moći izbrisati “<DocumentTitle/>” jer sljedeći dokumenti upućuju na njega:',
  /** Describes the list of documents that refer to the one trying to be deleted (unpublish) */
  'confirm-delete-dialog.referring-documents-descriptor.text_unpublish':
    'Možda nećete moći poništiti objavu “<DocumentTitle/>” jer sljedeći dokumenti upućuju na njega:',

  /** The text for the cancel button in the confirm dialog used in document action shortcuts if none is provided */
  'confirm-dialog.cancel-button.fallback-text': 'Odustani',
  /** The text for the confirm button in the confirm dialog used in document action shortcuts if none is provided */
  'confirm-dialog.confirm-button.fallback-text': 'Potvrdi',

  /** For the default structure definition, the title for the "Content" pane */
  'default-definition.content-title': 'Sadržaj',

  /** The text shown if there was an error while getting the document's title via a preview value */
  'doc-title.error.text': 'Greška: {{errorMessage}}',
  /** The text shown if the preview value for a document is non-existent or empty */
  'doc-title.fallback.text': 'Bez naslova',
  /** The text shown if a document's title via a preview value cannot be determined due to an unknown schema type */
  'doc-title.unknown-schema-type.text': 'Nepoznati tip sheme: {{schemaType}}',

  /** Tooltip text shown for the close button of the document inspector */
  'document-inspector.close-button.tooltip': 'Zatvori',
  /** The title shown in the dialog header, when inspecting a valid document */
  'document-inspector.dialog.title': 'Inspekcija <DocumentTitle/>',
  /** The title shown in the dialog header, when the document being inspected is not created yet/has no value */
  'document-inspector.dialog.title-no-value': 'Nema vrijednosti',
  /** Title shown for menu item that opens the "Inspect" dialog */
  'document-inspector.menu-item.title': 'Inspekcija',
  /** the placeholder text for the search input on the inspect dialog */
  'document-inspector.search.placeholder': 'Pretraži',
  /** The "parsed" view mode, meaning the JSON is searchable, collapsible etc */
  'document-inspector.view-mode.parsed': 'Obrađeno',
  /** The "raw" view mode, meaning the JSON is presented syntax-highlighted, but with no other features - optimal for copying */
  'document-inspector.view-mode.raw-json': 'Sirovi JSON',

  /** The text for when a form is hidden */
  'document-view.form-view.form-hidden': 'Ovaj obrazac je skriven',
  /** Fallback title shown when a form title is not provided */
  'document-view.form-view.form-title-fallback': 'Bez naslova',
  /** The text for when the form view is loading a document */
  'document-view.form-view.loading': 'Učitavanje dokumenta…',
  /** The description of the sync lock toast on the form view */
  'document-view.form-view.sync-lock-toast.description':
    'Molimo vas da pričekate dok se dokument sinkronizira. To se obično događa odmah nakon što je dokument objavljen i ne bi trebalo trajati više od nekoliko sekundi',
  /** The title of the sync lock toast on the form view */
  'document-view.form-view.sync-lock-toast.title': 'Sinkronizacija dokumenta…',

  /** The description for the document favorite action */
  'document.favorites.add-to-favorites': 'Dodaj u favorite',
  /** The description for the document unfavorite action */
  'document.favorites.remove-from-favorites': 'Ukloni iz favorita',

  /** The description for the events inspector when we can't load the document so we default to compare with published */
  'events.compare-with-published.description':
    'Nismo u mogućnosti učitati promjene za ovaj dokument, vjerojatno zbog politike zadržavanja povijesti vašeg plana, ovo vam pokazuje kako se <strong>{{version}}</strong> verzija uspoređuje s <strong>objavljenom</strong> verzijom.',
  /** The title for the events inspector when we can't load the document so we default to compare with published */
  'events.compare-with-published.title': 'Usporedba s objavljenim',
  /**The title for the menu items that will be shown when expanding a publish release event to inspect the document */
  'events.inspect.release': 'Pregledaj <VersionBadge>{{releaseTitle}}</VersionBadge> dokument',
  /**The title for the menu items that will be shown when expanding a publish draft event to inspect the draft document*/
  'events.open.draft': 'Otvori <VersionBadge>nacrt</VersionBadge> dokument',
  /**The title for the menu items that will be shown when expanding a publish release event to inspect the release*/
  'events.open.release': 'Otvori <VersionBadge>{{releaseTitle}}</VersionBadge> izdanje',

  /** The loading messaging for when the tooltip is still loading permission info */
  'insufficient-permissions-message-tooltip.loading-text': 'Učitavanje…',

  /** --- Menu items --- */
  /** The menu item group title to use for the Action menu items */
  'menu-item-groups.actions-group': 'Akcije',
  /** The menu item group title to use for the Layout menu items */
  'menu-item-groups.layout-group': 'Raspored',
  /** The menu item group title to use for the Sort menu items */
  'menu-item-groups.sorting-group': 'Sortiranje',

  /** The menu item title to use the compact view */
  'menu-items.layout.compact-view': 'Kompaktan prikaz',
  /** The menu item title to use the detailed view */
  'menu-items.layout.detailed-view': 'Detaljan prikaz',
  /** The menu item title to Sort by Created */
  'menu-items.sort-by.created': 'Sortiraj po datumu stvaranja',
  /** The menu item title to Sort by Last Edited */
  'menu-items.sort-by.last-edited': 'Sortiraj po zadnjoj izmjeni',

  /** The link text of the no document type screen that appears directly below the subtitle */
  'no-document-types-screen.link-text': 'Saznajte kako dodati vrstu dokumenta →',
  /** The subtitle of the no document type screen that appears directly below the title */
  'no-document-types-screen.subtitle':
    'Molimo definirajte barem jednu vrstu dokumenta u vašoj shemi.',
  /** The title of the no document type screen */
  'no-document-types-screen.title': 'Nema vrsta dokumenata',

  /** Text shown on back button visible on smaller breakpoints */
  'pane-header.back-button.text': 'Natrag',
  /** tooltip text (via `title` attribute) for the menu button */
  'pane-header.context-menu-button.tooltip': 'Prikaži izbornik',
  /** Appears in a document list pane header if there are more than one option for create. This is the label for that menu */
  'pane-header.create-menu.label': 'Kreiraj',
  /** Tooltip displayed on the create new button in document lists */
  'pane-header.create-new-button.tooltip': 'Kreiraj novi dokument',
  /** The `aria-label` for the disabled button in the pane header if create permissions are granted */
  'pane-header.disabled-created-button.aria-label': 'Nedovoljne dozvole',

  /** The text shown in the tooltip of pane item previews of documents if there are unpublished edits */
  'pane-item.draft-status.has-draft.tooltip': 'Uređeno <RelativeTime/>',
  /** The text shown in the tooltip of pane item previews of documents if there are no unpublished edits */
  'pane-item.draft-status.no-draft.tooltip': 'Nema neobjavljenih izmjena',
  /** The subtitle tor pane item previews if there isn't a matching schema type found */
  'pane-item.missing-schema-type.subtitle': 'Dokument: <Code>{{documentId}}</Code>',
  /** The title tor pane item previews if there isn't a matching schema type found */
  'pane-item.missing-schema-type.title':
    'Nema pronađene sheme za tip <Code>{{documentType}}</Code>',
  /** The text shown in the tooltip of pane item previews of documents if there are unpublished edits */
  'pane-item.published-status.has-published.tooltip': 'Objavljeno <RelativeTime/>',
  /** The text shown in the tooltip of pane item previews of documents if there are no unpublished edits */
  'pane-item.published-status.no-published.tooltip': 'Nema neobjavljenih izmjena',

  /** The text used in the document header title if there is an error */
  'panes.document-header-title.error.text': 'Greška: {{error}}',
  /** The text used in the document header title if creating a new item */
  'panes.document-header-title.new.text': 'Novi {{schemaType}}',
  /** The text used in the document header title if no other title can be determined */
  'panes.document-header-title.untitled.text': 'Bez naslova',
  /** The help text saying that we'll retry fetching the document list */
  'panes.document-list-pane.error.retrying': 'Ponovni pokušaj…',
  /** The error text on the document list pane */
  'panes.document-list-pane.error.text': 'Greška: <Code>{{error}}</Code>',
  /** The error text on the document list pane */
  'panes.document-list-pane.error.text.dev': 'Greška: <Code>{{error}}</Code>',
  /** The error text on the document list pane if the browser appears to be offlline */
  'panes.document-list-pane.error.text.offline': 'Čini se da je internetska veza u prekidu.',
  /** The error title on the document list pane */
  'panes.document-list-pane.error.title': 'Nije moguće dohvatiti stavke popisa',
  /** The help text saying that we'll retry fetching the document list */
  'panes.document-list-pane.error.will-retry-automatically_one': 'Ponovni pokušaj…',
  'panes.document-list-pane.error.will-retry-automatically_other': 'Ponovni pokušaj… (#{{count}}).',
  /** The text of the document list pane if more than a maximum number of documents are returned */
  'panes.document-list-pane.max-items.text': 'Prikazuje se maksimalno {{limit}} dokumenata',
  /** The text of the document list pane if no documents are found for a specified type */
  'panes.document-list-pane.no-documents-of-type.text': 'Nema dokumenata ove vrste',
  /** The text of the document list pane if no documents are found */
  'panes.document-list-pane.no-documents.text': 'Nema rezultata',
  /** The text of the document list pane if no documents are found matching specified criteria */
  'panes.document-list-pane.no-matching-documents.text': 'Nema odgovarajućih dokumenata',
  /** The search input for the search input on the document list pane */
  'panes.document-list-pane.reconnecting': 'Pokušavam se povezati…',
  /** The aria-label for the search input on the document list pane */
  'panes.document-list-pane.search-input.aria-label': 'Pretraži popis',
  /** The search input for the search input on the document list pane */
  'panes.document-list-pane.search-input.placeholder': 'Pretraži popis',
  /** The summary title when displaying an error for a document operation result */
  'panes.document-operation-results.error.summary.title': 'Detalji',
  /** The text when a generic operation failed (fallback, generally not shown)  */
  'panes.document-operation-results.operation-error': 'Došlo je do greške tijekom {{context}}',
  /** The text when a delete operation failed  */
  'panes.document-operation-results.operation-error_delete':
    'Došlo je do greške pri pokušaju brisanja ovog dokumenta. To obično znači da postoje drugi dokumenti koji upućuju na njega.',
  /** The text when an unpublish operation failed  */
  'panes.document-operation-results.operation-error_unpublish':
    'Došlo je do greške pri pokušaju povlačenja ovog dokumenta. To obično znači da postoje drugi dokumenti koji upućuju na njega.',
  /** The text when a generic operation succeeded (fallback, generally not shown)  */
  'panes.document-operation-results.operation-success': 'Uspješno izveden {{context}} na dokumentu',
  /** The text when copy URL operation succeeded  */
  'panes.document-operation-results.operation-success_copy-url':
    'URL dokumenta kopiran u međuspremnik',
  /**  */
  'panes.document-operation-results.operation-success_createVersion':
    '<Strong>{{title}}</Strong> je dodan u izdanje',
  /** The text when a delete operation succeeded  */
  'panes.document-operation-results.operation-success_delete': 'Dokument je uspješno izbrisan',
  /** The text when a discard changes operation succeeded  */
  'panes.document-operation-results.operation-success_discardChanges':
    'Sve promjene od posljednjeg objavljivanja su sada odbačene. Odbačeni nacrt još uvijek se može oporaviti iz povijesti',
  /** The text when a duplicate operation succeeded  */
  'panes.document-operation-results.operation-success_duplicate': 'Dokument je uspješno dupliciran',
  /** The text when a publish operation succeeded  */
  'panes.document-operation-results.operation-success_publish': 'Dokument je objavljen',
  /** The text when a restore operation succeeded  */
  'panes.document-operation-results.operation-success_restore':
    '<Strong>{{title}}</Strong> je obnovljen',
  /** The text when an unpublish operation succeeded  */
  'panes.document-operation-results.operation-success_unpublish':
    'Dokumentu je poništena objava. Nacrt je stvoren iz posljednje objavljene verzije.',
  /** The document title shown when document title is "undefined" in operation message */
  'panes.document-operation-results.operation-undefined-title': 'Bez naslova',
  /** The loading message for the document not found pane */
  'panes.document-pane.document-not-found.loading': 'Učitavanje dokumenta…',
  /** The text of the document not found pane if the schema is known */
  'panes.document-pane.document-not-found.text':
    'Vrsta dokumenta nije definirana i dokument s identifikatorom <Code>{{id}}</Code> nije mogao biti pronađen.',
  /** The title of the document not found pane if the schema is known */
  'panes.document-pane.document-not-found.title': 'Dokument nije pronađen',
  /** The text of the document not found pane if the schema is not found */
  'panes.document-pane.document-unknown-type.text':
    'Ovaj dokument ima vrstu sheme <Code>{{documentType}}</Code>, koja nije definirana kao tip u lokalnoj shemi sadržaja Studija.',
  /** The title of the document not found pane if the schema is not found or unknown */
  'panes.document-pane.document-unknown-type.title':
    'Nepoznati tip dokumenta: <Code>{{documentType}}</Code>',
  /** The title of the document not found pane if the schema is unknown */
  'panes.document-pane.document-unknown-type.without-schema.text':
    'Ovaj dokument ne postoji i nije definiran tip sheme za njega.',
  /** Default message shown while resolving the structure definition for an asynchronous node */
  'panes.resolving.default-message': 'Učitavanje…',
  /** Message shown while resolving the structure definition for an asynchronous node and it is taking a while (more than 5s) */
  'panes.resolving.slow-resolve-message': 'Još se učitava…',
  /** The text to display when type is missing */
  'panes.unknown-pane-type.missing-type.text':
    'Elementu strukture nedostaje obavezno svojstvo <Code>type</Code>.',
  /** The title of the unknown pane */
  'panes.unknown-pane-type.title': 'Nepoznati tip panela',
  /** The text to display when type is unknown */
  'panes.unknown-pane-type.unknown-type.text':
    'Element strukture tipa <Code>{{type}}</Code> nije poznat.',

  /** The text for the "Open preview" action for a document */
  'production-preview.menu-item.title': 'Otvori pregled',

  /** The text for the confirm button in the request permission dialog used in the permissions banner */
  'request-permission-dialog.confirm-button.text': 'Pošalji zahtjev',
  /** The description text for the request permission dialog used in the permissions banner */
  'request-permission-dialog.description.text':
    'Vaš zahtjev će biti poslan administratoru(ima) projekta. Ako želite, možete uključiti i bilješku',
  /** The header/title for the request permission dialog used in the permissions banner */
  'request-permission-dialog.header.text': 'Zatraži pristup za uređivanje',
  /** The text describing the note input for the request permission dialog used in the permissions banner */
  'request-permission-dialog.note-input.description.text': 'Ako želite, možete dodati bilješku',
  /** The placeholder for the note input in the request permission dialog used in the permissions banner */
  'request-permission-dialog.note-input.placeholder.text': 'Dodaj bilješku...',
  /** The error/warning text in the request permission dialog when the user's request has been declined */
  'request-permission-dialog.warning.denied.text':
    'Vaš zahtjev za pristup ovom projektu je odbijen.',
  /** The error/warning text in the request permission dialog when the user's request has been denied due to too many outstanding requests */
  'request-permission-dialog.warning.limit-reached.text':
    'Dosegli ste limit za zahtjeve uloga u svim projektima. Pričekajte prije slanja novih zahtjeva ili kontaktirajte administratora za pomoć.',

  /** Label for button when status is saved */
  'status-bar.document-status-pulse.status.saved.text': 'Spremljeno',
  /** Label for button when status is syncing */
  'status-bar.document-status-pulse.status.syncing.text': 'Spremanje...',
  /** Accessibility label indicating when the document was last published, in relative time, eg "3 weeks ago" */
  'status-bar.publish-status-button.last-published-time.aria-label':
    'Zadnje objavljeno {{relativeTime}}',
  /** Text for tooltip showing explanation of timestamp/relative time, eg "Last published <RelativeTime/>" */
  'status-bar.publish-status-button.last-published-time.tooltip':
    'Zadnje objavljeno <RelativeTime/>',
  /** Accessibility label indicating when the document was last updated, in relative time, eg "2 hours ago" */
  'status-bar.publish-status-button.last-updated-time.aria-label':
    'Zadnje ažurirano {{relativeTime}}',
  /** Text for tooltip showing explanation of timestamp/relative time, eg "Last updated <RelativeTime/>" */
  'status-bar.publish-status-button.last-updated-time.tooltip': 'Zadnje ažurirano <RelativeTime/>',
  /** Aria label for the button */
  'status-bar.review-changes-button.aria-label': 'Pregledaj promjene',
  /** Label for button when status is saved */
  'status-bar.review-changes-button.status.saved.text': 'Spremljeno!',
  /** Label for button when status is syncing */
  'status-bar.review-changes-button.status.syncing.text': 'Spremanje...',
  /** Text for the secondary text for tooltip for the button */
  'status-bar.review-changes-button.tooltip.changes-saved': 'Promjene spremljene',
  /** Primary text for tooltip for the button */
  'status-bar.review-changes-button.tooltip.text': 'Pregledaj promjene',

  /** The text that appears in side the documentation link */
  'structure-error.docs-link.text': 'Pogledaj dokumentaciju',
  /** Labels the error message or error stack of the structure error screen */
  'structure-error.error.label': 'Greška',
  /** The header that appears at the top of the error screen */
  'structure-error.header.text': 'Došlo je do greške prilikom čitanja strukture',
  /** The text in the reload button to retry rendering the structure */
  'structure-error.reload-button.text': 'Ponovno učitaj',
  /** Labels the structure path of the structure error screen */
  'structure-error.structure-path.label': 'Putanja strukture',

  /** The aria label for the menu button in the timeline item */
  'timeline-item.menu-button.aria-label': 'Otvori izbornik akcija',
  /** The text for the tooltip in menu button the timeline item */
  'timeline-item.menu-button.tooltip': 'Akcije',
  /** The text for the collapse action in the timeline item menu */
  'timeline-item.menu.action-collapse': 'Skupi',
  /** The text for the expand action in the timeline item menu */
  'timeline-item.menu.action-expand': 'Proširi',
  /** The text for the published event menu tooltip when the release is not found */
  'timeline-item.not-found-release.tooltip': 'Izdanje s id-om "{{releaseId}}" nije pronađeno',
})
