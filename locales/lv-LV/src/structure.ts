import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Label for the "Copy Document URL" document action */
  'action.copy-document-url.label': 'Kopēt dokumenta URL',
  /** Tooltip when action button is disabled because the operation is not ready   */
  'action.delete.disabled.not-ready': 'Operācija nav gatava',
  /** Tooltip when action button is disabled because the document does not exist */
  'action.delete.disabled.nothing-to-delete': 'Šis dokuments vēl neeksistē vai jau ir izdzēsts',
  /** Label for the "Delete" document action button */
  'action.delete.label': 'Dzēst',
  /** Label for the "Delete" document action while the document is being deleted */
  'action.delete.running.label': 'Dzēšana…',
  /** Tooltip when action is disabled because the document is linked to Canvas */
  'action.disabled-by-canvas.tooltip':
    'Dažas dokumentu darbības ir atspējotas dokumentiem, kas ir saistīti ar Canvas',
  /** Message prompting the user to confirm discarding changes */
  'action.discard-changes.confirm-dialog.confirm-discard-changes':
    'Vai esat pārliecināts, ka vēlaties atmest visas izmaiņas kopš pēdējās publicēšanas?',
  /** Tooltip when action is disabled because the document has no unpublished changes */
  'action.discard-changes.disabled.no-change': 'Šim dokumentam nav nepublicētu izmaiņu',
  /** Tooltip when action is disabled because the document is not published */
  'action.discard-changes.disabled.not-published': 'Šis dokuments nav publicēts',
  /** Tooltip when action button is disabled because the operation is not ready   */
  'action.discard-changes.disabled.not-ready': 'Operācija nav gatava',
  /** Label for the "Discard changes" document action */
  'action.discard-changes.label': 'Atmest izmaiņas',
  /** Tooltip when action is disabled because the operation is not ready   */
  'action.duplicate.disabled.not-ready': 'Operācija nav gatava',
  /** Tooltip when action is disabled because the document doesn't exist */
  'action.duplicate.disabled.nothing-to-duplicate':
    'Šis dokuments vēl neeksistē, tāpēc nav ko dublēt',
  /** Label for the "Duplicate" document action */
  'action.duplicate.label': 'Dublēt',
  /** Label for the "Duplicate" document action while the document is being duplicated */
  'action.duplicate.running.label': 'Dublēšana…',
  /** Tooltip when publish button is disabled because the document is already published, and published time is unavailable.*/
  'action.publish.already-published.no-time-ago.tooltip': 'Jau publicēts',
  /** Tooltip when publish button is disabled because the document is already published.*/
  'action.publish.already-published.tooltip': 'Publicēts {{timeSincePublished}}',
  /** Tooltip when action is disabled because the studio is not ready.*/
  'action.publish.disabled.not-ready': 'Operācija nav gatava',
  /** Label for action when there are pending changes.*/
  'action.publish.draft.label': 'Publicēt',
  /** Label for the "Publish" document action */
  'action.publish.label': 'Publicēt',
  /** Label for the "Publish" document action when the document has live edit enabled.*/
  'action.publish.live-edit.label': 'Publicēt',
  /** Fallback tooltip for the "Publish" document action when publish is invoked for a document with live edit enabled.*/
  'action.publish.live-edit.publish-disabled':
    'Nevar publicēt, jo šim dokumenta tipam ir iespējota Live Edit funkcija',
  /** Tooltip for the "Publish" document action when the document has live edit enabled.*/
  'action.publish.live-edit.tooltip':
    'Šim satura tipam ir iespējota Live Edit funkcija, un publicēšana notiek automātiski, veicot izmaiņas',
  /** Tooltip when publish button is disabled because there are no changes.*/
  'action.publish.no-changes.tooltip': 'Nav nepublicētu izmaiņu',
  /** Label for the "Publish" document action when there are no changes.*/
  'action.publish.published.label': 'Publicēts',
  /** Label for the "Publish" document action while publish is being executed.*/
  'action.publish.running.label': 'Publicēšana…',
  /** Tooltip when the "Publish" document action is disabled due to validation issues */
  'action.publish.validation-issues.tooltip':
    'Ir validācijas kļūdas, kas jānovērš, pirms šis dokuments var tikt publicēts',
  /** Tooltip when publish button is waiting for validation and async tasks to complete.*/
  'action.publish.waiting': 'Gaida uzdevumu pabeigšanu pirms publicēšanas',
  /** Message prompting the user to confirm that they want to restore to an earlier revision*/
  'action.restore.confirm.message': 'Vai esat pārliecināts, ka vēlaties atjaunot šo dokumentu?',
  /** Fallback tooltip for when user is looking at the initial revision */
  'action.restore.disabled.cannot-restore-initial': 'Nevar atjaunot sākotnējo revīziju',
  /** Label for the "Restore" document action */
  'action.restore.label': 'Atgriezties pie revīzijas',
  /** Default tooltip for the action */
  'action.restore.tooltip': 'Atjaunot šo revīziju',
  /** Tooltip when action is disabled because the document is not already published */
  'action.unpublish.disabled.not-published': 'Šis dokuments nav publicēts',
  /** Tooltip when action is disabled because the operation is not ready   */
  'action.unpublish.disabled.not-ready': 'Operācija nav gatava',
  /** Label for the "Unpublish" document action */
  'action.unpublish.label': 'Atcelt publicēšanu',
  /** Fallback tooltip for the Unpublish document action when publish is invoked for a document with live edit enabled.*/
  'action.unpublish.live-edit.disabled':
    'Šim dokumentam ir iespējota tiešā rediģēšana un to nevar atcelt publicēšanu',

  /** Description for the archived release banner, rendered when viewing the history of a version document from the publihed view */
  'banners.archived-release.description':
    'Šī dokumenta versija pieder pie arhivētās <VersionBadge>{{title}}</VersionBadge> izlaiduma',
  /** The text for the restore button on the deleted document banner */
  'banners.deleted-document-banner.restore-button.text': 'Atjaunot pēdējo revīziju',
  /** The text content for the deleted document banner */
  'banners.deleted-document-banner.text': 'Šis dokuments ir izdzēsts.',
  /** The text content for the deprecated document type banner */
  'banners.deprecated-document-type-banner.text': 'Šis dokumenta tips ir novecojis.',
  /** The text for publish action for discarding the version */
  'banners.live-edit-draft-banner.discard.tooltip': 'Atmest melnrakstu',
  /** The text for publish action for the draft banner */
  'banners.live-edit-draft-banner.publish.tooltip': 'Publicēt, lai turpinātu rediģēšanu',
  /** The text content for the live edit document when it's a draft */
  'banners.live-edit-draft-banner.text':
    'Tipam <strong>{{schemaType}}</strong> ir iespējota <code>liveEdit</code>, bet šim dokumentam pastāv melnraksta versija. Publicējiet vai atmestiet melnrakstu, lai turpinātu tiešo rediģēšanu.',
  /** The text for the permission check banner if the user only has one role, and it does not allow publishing this document */
  'banners.permission-check-banner.missing-permission_create_one':
    'Jūsu loma <Roles/> nedod atļauju publicēt šo dokumentu.',
  /** The text for the permission check banner if the user only has multiple roles, but they do not allow publishing this document */
  'banners.permission-check-banner.missing-permission_create_other':
    'Jūsu lomas <Roles/> nedod atļauju publicēt šo dokumentu.',
  /** The text for the permission check banner if the user only has one role, and it does not allow editing this document */
  'banners.permission-check-banner.missing-permission_update_one':
    'Jūsu loma <Roles/> nedod atļauju rediģēt šo dokumentu.',
  /** The text for the permission check banner if the user only has multiple roles, but they do not allow editing this document */
  'banners.permission-check-banner.missing-permission_update_other':
    'Jūsu lomas <Roles/> nedod atļauju rediģēt šo dokumentu.',
  /** The pending text for the request permission button that appears for viewer roles */
  'banners.permission-check-banner.request-permission-button.sent':
    'Redaktora pieprasījums nosūtīts',
  /** The text for the request permission button that appears for viewer roles */
  'banners.permission-check-banner.request-permission-button.text': 'Lūgt rediģēšanas tiesības',
  /** Description for the archived release banner, rendered when viewing the history of a version document from the published view */
  'banners.published-release.description':
    'Jūs skatāties tikai lasāmu dokumentu, kas tika publicēts kā daļa no <VersionBadge>{{title}}</VersionBadge>. To nevar rediģēt',
  /** The text for the reload button */
  'banners.reference-changed-banner.reason-changed.reload-button.text': 'Pārlādēt atsauci',
  /** The text for the reference change banner if the reason is that the reference has been changed */
  'banners.reference-changed-banner.reason-changed.text':
    'Šī atsauce ir mainījusies kopš tās atvēršanas.',
  /** The text for the close button */
  'banners.reference-changed-banner.reason-removed.close-button.text': 'Aizvērt atsauci',
  /** The text for the reference change banner if the reason is that the reference has been deleted */
  'banners.reference-changed-banner.reason-removed.text':
    'Šī atsauce ir izņemta kopš tās atvēršanas.',
  /** The text that appears for the action button to add the current document to the global release */
  'banners.release.action.add-to-release': 'Pievienot laidienam',
  /** The text that appears for the action button to add the current document to the global release */
  'banners.release.action.open-to-edit': 'Atvērt laidienam rediģēšanai',
  /** Toast description in case an error occurs when adding a document to a release  */
  'banners.release.error.description': 'Pievienojot dokumentu laidienam, radās kļūda: {{message}}',
  /** Toast title in case an error occurs when adding a document to a release  */
  'banners.release.error.title': 'Kļūda pievienojot dokumentu laidienam',
  /** The text for the banner that appears when a document only has versions but is in a draft or published pinned release */
  'banners.release.navigate-to-edit-description': 'Dokuments eksistē tikai',
  /** The text for the banner that appears when a document only has versions but is in a draft or published pinned release */
  'banners.release.navigate-to-edit-description-end_one': 'laidienā',
  /** The text for the banner that appears when a document only has versions but is in a draft or published pinned release */
  'banners.release.navigate-to-edit-description-end_other': 'laidienos',
  /** The text for the banner that appears when there are multiple versions but no drafts or published, only one extra releases */
  'banners.release.navigate-to-edit-description-multiple_one':
    'Šis dokuments ir daļa no <VersionBadge/> laidiena un vēl {{count}} laidiena.',
  /** The text for the banner that appears when there are multiple versions but no drafts or published, more than one extra releases */
  'banners.release.navigate-to-edit-description-multiple_other':
    'Šis dokuments ir daļa no <VersionBadge/> laidiena un vēl {{count}} laidieniem',
  /** The text for the banner that appears when a document only has one version but is in a draft or published pinned release */
  'banners.release.navigate-to-edit-description-single':
    'Šis dokuments ir daļa no <VersionBadge/> laidiena',
  /** The text for the banner that appears when a document is not in the current global release */
  'banners.release.not-in-release': 'Nav <VersionBadge>{{title}}</VersionBadge> laidienā.',
  /** Description of toast that will appear in case of latency between the user adding a document to a release and the UI reflecting it */
  'banners.release.waiting.description':
    'Lūdzu, uzgaidiet, kamēr dokuments tiek pievienots laidienam. Tas neaizņems ilgāk par dažām sekundēm.',
  /** Title of toast that will appear in case of latency between the user adding a document to a release and the UI reflecting it */
  'banners.release.waiting.title': 'Dokumenta pievienošana laidienam…',
  /** The text content for the unpublished document banner when is part of a release */
  'banners.unpublished-release-banner.text':
    'Šis dokuments tiks nepublicēts kā daļa no <VersionBadge>{{title}}</VersionBadge> laidiena',

  /** Browser/tab title when creating a new document of a given type */
  'browser-document-title.new-document': 'Jauns {{schemaType}}',
  /** Browser/tab title when editing a document where the title cannot be resolved from preview configuration */
  'browser-document-title.untitled-document': 'Bez nosaukuma',

  /** The action menu button aria-label */
  'buttons.action-menu-button.aria-label': 'Atvērt dokumenta darbības',
  /** The action menu button tooltip */
  'buttons.action-menu-button.tooltip': 'Dokumenta darbības',
  /** The aria-label for the split pane button on the document panel header */
  'buttons.split-pane-button.aria-label': 'Sadalīt paneli pa labi',
  /** The tool tip for the split pane button on the document panel header */
  'buttons.split-pane-button.tooltip': 'Sadalīt paneli pa labi',
  /** The title for the close button on the split pane on the document panel header */
  'buttons.split-pane-close-button.title': 'Aizvērt sadalīto paneli',
  /** The title for the close group button on the split pane on the document panel header */
  'buttons.split-pane-close-group-button.title': 'Aizvērt paneļu grupu',

  /** The text for the canvas linked banner action button */
  'canvas.banner.edit-in-canvas-action': 'Rediģēt Canvas',
  /** The text for the canvas linked banner when the document is a draft */
  'canvas.banner.linked-text.draft': 'Šis melnraksta dokuments ir saistīts ar Canvas',
  /** The text for the canvas linked banner when the document is a live document */
  'canvas.banner.linked-text.published': 'Šis publicētais dokuments ir saistīts ar Canvas',
  /** The text for the canvas linked banner when the document is a version document */
  'canvas.banner.linked-text.version': 'Šis versijas dokuments ir saistīts ar Canvas',
  /** The text for the canvas linked banner popover button */
  'canvas.banner.popover-button-text': 'Uzzināt vairāk',
  /** The description for the canvas linked banner popover */
  'canvas.banner.popover-description':
    'Canvas ļauj veidot saturu brīvformas redaktorā, kas automātiski tiek kartēts atpakaļ uz Studio kā strukturēts saturs - rakstot.',
  /** The heading for the canvas linked banner popover */
  'canvas.banner.popover-heading': 'Ideju pirmā autortiesība',

  /** The label used in the changes inspector for the from selector */
  'changes.from.label': 'No',
  /* The label for the history tab in the changes inspector*/
  'changes.tab.history': 'Vēsture',
  /* The label for the review tab in the changes inspector*/
  'changes.tab.review-changes': 'Pārskatīt izmaiņas',
  /** The label used in the changes inspector for the to selector */
  'changes.to.label': 'Uz',

  /** The error message shown when the specified document comparison mode is not supported */
  'compare-version.error.invalidModeParam':
    '"{{input}}" nav atbalstīts dokumentu salīdzināšanas režīms.',
  /** The error message shown when the next document for comparison could not be extracted from the URL */
  'compare-version.error.invalidNextDocumentParam': 'Nākamā dokumenta parametrs ir nederīgs.',
  /** The error message shown when the document comparison URL could not be parsed */
  'compare-version.error.invalidParams.title': 'Nevar salīdzināt dokumentus',
  /** The error message shown when the previous document for comparison could not be extracted from the URL */
  'compare-version.error.invalidPreviousDocumentParam':
    'Iepriekšējā dokumenta parametrs ir nederīgs.',

  /** The text for the tooltip when the "Compare versions" action for a document is disabled */
  'compare-versions.menu-item.disabled-reason':
    'Nav citu šī dokumenta versiju, ar kurām salīdzināt.',
  /** The text for the "Compare versions" action for a document */
  'compare-versions.menu-item.title': 'Salīdzināt versijas',
  /** The string used to label draft documents */
  'compare-versions.status.draft': 'Melnraksts',
  /** The string used to label published documents */
  'compare-versions.status.published': 'Publicēts',
  /** The title used when comparing versions of a document */
  'compare-versions.title': 'Salīdzināt versijas',

  /** The text in the "Cancel" button in the confirm delete dialog that cancels the action and closes the dialog */
  'confirm-delete-dialog.cancel-button.text': 'Atcelt',
  /** Used in `confirm-delete-dialog.cdr-summary.title` */
  'confirm-delete-dialog.cdr-summary.document-count_one': '1 dokuments',
  /** Used in `confirm-delete-dialog.cdr-summary.title` */
  'confirm-delete-dialog.cdr-summary.document-count_other': '{{count}} dokumenti',
  /** The text that appears in the subtitle `<summary>` that lists the datasets below the title */
  'confirm-delete-dialog.cdr-summary.subtitle_one': 'Datukopa: {{datasets}}',
  /** The text that appears in the subtitle `<summary>` that lists the datasets below the title */
  'confirm-delete-dialog.cdr-summary.subtitle_other': 'Datukopi: {{datasets}}',
  /** The text that appears in the subtitle `<summary>` that lists the datasets below the title */
  'confirm-delete-dialog.cdr-summary.subtitle_unavailable_one': 'Nav pieejams datukopis',
  /** The text that appears in the subtitle `<summary>` that lists the datasets below the title */
  'confirm-delete-dialog.cdr-summary.subtitle_unavailable_other': 'Nav pieejami datukopji',
  /** The text that appears in the title `<summary>` that includes the list of CDRs (singular) */
  'confirm-delete-dialog.cdr-summary.title_one': '{{documentCount}} citā datukopī',
  /** The text that appears in the title `<summary>` that includes the list of CDRs (plural) */
  'confirm-delete-dialog.cdr-summary.title_other': '{{documentCount}} {{count}} datukopjos',
  /** Appears when hovering over the copy button to copy */
  'confirm-delete-dialog.cdr-table.copy-id-button.tooltip': 'Kopēt ID uz starpliktuvi',
  /** The header for the dataset column in the list of cross-dataset references found */
  'confirm-delete-dialog.cdr-table.dataset.label': 'Datukopis',
  /** The header for the document ID column in the list of cross-dataset references found */
  'confirm-delete-dialog.cdr-table.document-id.label': 'Dokumenta ID',
  /** The toast title when the copy button has been clicked but copying failed */
  'confirm-delete-dialog.cdr-table.id-copied-toast.title-failed': 'Neizdevās nokopēt dokumenta ID',
  /** The header for the project ID column in the list of cross-dataset references found */
  'confirm-delete-dialog.cdr-table.project-id.label': 'Projekta ID',
  /** The text in the "Delete anyway" button in the confirm delete dialog that confirms the action */
  'confirm-delete-dialog.confirm-anyway-button.text_delete': 'Dzēst tomēr',
  /** The text in the "Unpublish anyway" button in the confirm delete dialog that confirms the action */
  'confirm-delete-dialog.confirm-anyway-button.text_unpublish': 'Atsaukt publicēšanu tomēr',
  /** The text in the "Delete now" button in the confirm delete dialog that confirms the action */
  'confirm-delete-dialog.confirm-button.text_delete': 'Dzēst tagad',
  /** The text in the "Unpublish now" button in the confirm delete dialog that confirms the action */
  'confirm-delete-dialog.confirm-button.text_unpublish': 'Atsaukt publicēšanu tagad',
  /** If no referring documents are found, this text appears above the cancel and confirmation buttons */
  'confirm-delete-dialog.confirmation.text_delete':
    'Vai esat pārliecināts, ka vēlaties dzēst “<DocumentTitle/>”?',
  /** If no referring documents are found, this text appears above the cancel and confirmation buttons */
  'confirm-delete-dialog.confirmation.text_unpublish':
    'Vai esat pārliecināts, ka vēlaties atsaukt “<DocumentTitle/>” publicēšanu?',
  /** The text body of the error dialog. */
  'confirm-delete-dialog.error.message.text': 'Ielādējot atsaucējdokumentus, radās kļūda.',
  /** The text in the retry button of the confirm delete dialog if an error occurred. */
  'confirm-delete-dialog.error.retry-button.text': 'Mēģināt vēlreiz',
  /** The header of the confirm delete dialog if an error occurred while the confirm delete dialog was open. */
  'confirm-delete-dialog.error.title.text': 'Kļūda',
  /** The header of the confirm delete dialog */
  'confirm-delete-dialog.header.text_delete': 'Dzēst dokumentu?',
  /** The header of the confirm delete dialog */
  'confirm-delete-dialog.header.text_unpublish': 'Atsaukt dokumenta publicēšanu?',
  /** The text that appears while the referring documents are queried */
  'confirm-delete-dialog.loading.text': 'Meklē atsaucējdokumentus…',
  /** Shown if there are references to other documents but the user does not have the permission to see the relevant document IDs */
  'confirm-delete-dialog.other-reference-count.title_one': '1 cita atsauce nav parādīta',
  /** Shown if there are references to other documents but the user does not have the permission to see the relevant document IDs */
  'confirm-delete-dialog.other-reference-count.title_other':
    '{{count}} citas atsauces nav parādītas',
  /** Text in the tooltip of this component if hovering over the info icon */
  'confirm-delete-dialog.other-reference-count.tooltip':
    'Mēs nevaram parādīt šo atsaucju metadatus, jo trūkst piekļuves žetona saistītajiem datukopjiem.',
  /** Appears when unable to render a document preview in the referring document list */
  'confirm-delete-dialog.preview-item.preview-unavailable.subtitle': 'ID: {{documentId}}',
  /** Appears when unable to render a document preview in the referring document list */
  'confirm-delete-dialog.preview-item.preview-unavailable.title': 'Priekšskatījums nav pieejams',
  /** Warns the user of affects to other documents if the action is confirmed (delete) */
  'confirm-delete-dialog.referential-integrity-disclaimer.text_delete':
    'Ja izdzēsīsiet šo dokumentu, dokumenti, kas uz to atsaucas, vairs nevarēs piekļūt tam.',
  /** Warns the user of affects to other documents if the action is confirmed (unpublish) */
  'confirm-delete-dialog.referential-integrity-disclaimer.text_unpublish':
    'Ja atsauksiet šī dokumenta publicēšanu, dokumenti, kas uz to atsaucas, vairs nevarēs piekļūt tam.',
  /** Tells the user the count of how many other referring documents there are before listing them. (singular) */
  'confirm-delete-dialog.referring-document-count.text_one':
    '1 dokuments atsaucas uz “<DocumentTitle/>”',
  /** Tells the user the count of how many other referring documents there are before listing them. (plural) */
  'confirm-delete-dialog.referring-document-count.text_other':
    '{{count}} dokumenti atsaucas uz “<DocumentTitle/>”',
  /** Describes the list of documents that refer to the one trying to be deleted (delete) */
  'confirm-delete-dialog.referring-documents-descriptor.text_delete':
    'Jūs varat nebūt spējīgs izdzēst “<DocumentTitle/>”, jo sekojoši dokumenti atsaucas uz to:',
  /** Describes the list of documents that refer to the one trying to be deleted (unpublish) */
  'confirm-delete-dialog.referring-documents-descriptor.text_unpublish':
    'Jūs varat nebūt spējīgs atsaukt “<DocumentTitle/>” publicēšanu, jo sekojoši dokumenti atsaucas uz to:',

  /** The text for the cancel button in the confirm dialog used in document action shortcuts if none is provided */
  'confirm-dialog.cancel-button.fallback-text': 'Atcelt',
  /** The text for the confirm button in the confirm dialog used in document action shortcuts if none is provided */
  'confirm-dialog.confirm-button.fallback-text': 'Apstiprināt',

  /** For the default structure definition, the title for the "Content" pane */
  'default-definition.content-title': 'Saturs',

  /** The text shown if there was an error while getting the document's title via a preview value */
  'doc-title.error.text': 'Kļūda: {{errorMessage}}',
  /** The text shown if the preview value for a document is non-existent or empty */
  'doc-title.fallback.text': 'Bez nosaukuma',
  /** The text shown if a document's title via a preview value cannot be determined due to an unknown schema type */
  'doc-title.unknown-schema-type.text': 'Nezināms shēmas tips: {{schemaType}}',

  /** Tooltip text shown for the close button of the document inspector */
  'document-inspector.close-button.tooltip': 'Aizvērt',
  /** The title shown in the dialog header, when inspecting a valid document */
  'document-inspector.dialog.title': 'Pārbauda <DocumentTitle/>',
  /** The title shown in the dialog header, when the document being inspected is not created yet/has no value */
  'document-inspector.dialog.title-no-value': 'Nav vērtības',
  /** Title shown for menu item that opens the "Inspect" dialog */
  'document-inspector.menu-item.title': 'Pārbaudīt',
  /** the placeholder text for the search input on the inspect dialog */
  'document-inspector.search.placeholder': 'Meklēt',
  /** The "parsed" view mode, meaning the JSON is searchable, collapsible etc */
  'document-inspector.view-mode.parsed': 'Analizēts',
  /** The "raw" view mode, meaning the JSON is presented syntax-highlighted, but with no other features - optimal for copying */
  'document-inspector.view-mode.raw-json': 'Neapstrādāts JSON',

  /** The text for when a form is hidden */
  'document-view.form-view.form-hidden': 'Šī forma ir paslēpta',
  /** Fallback title shown when a form title is not provided */
  'document-view.form-view.form-title-fallback': 'Bez nosaukuma',
  /** The text for when the form view is loading a document */
  'document-view.form-view.loading': 'Ielādē dokumentu…',
  /** The description of the sync lock toast on the form view */
  'document-view.form-view.sync-lock-toast.description':
    'Lūdzu, uzgaidiet, kamēr dokuments tiks sinhronizēts. Tas parasti notiek tūlīt pēc dokumenta publicēšanas, un tas nevajadzētu aizņemt vairāk kā dažas sekundes',
  /** The title of the sync lock toast on the form view */
  'document-view.form-view.sync-lock-toast.title': 'Sinhronizē dokumentu…',

  /** The description for the document favorite action */
  'document.favorites.add-to-favorites': 'Pievienot favorītiem',
  /** The description for the document unfavorite action */
  'document.favorites.remove-from-favorites': 'Noņemt no favorītiem',

  /**The title for the menu items that will be shown when expanding a publish release event to inspect the document */
  'events.inspect.release': 'Apskatīt <VersionBadge>{{releaseTitle}}</VersionBadge> dokumentu',
  /**The title for the menu items that will be shown when expanding a publish draft event to inspect the draft document*/
  'events.open.draft': 'Atvērt <VersionBadge>draft</VersionBadge> dokumentu',
  /**The title for the menu items that will be shown when expanding a publish release event to inspect the release*/
  'events.open.release': 'Atvērt <VersionBadge>{{releaseTitle}}</VersionBadge> laidieni',

  /** The loading messaging for when the tooltip is still loading permission info */
  'insufficient-permissions-message-tooltip.loading-text': 'Ielādē…',

  /** --- Menu items --- */
  /** The menu item group title to use for the Action menu items */
  'menu-item-groups.actions-group': 'Darbības',
  /** The menu item group title to use for the Layout menu items */
  'menu-item-groups.layout-group': 'Izkārtojums',
  /** The menu item group title to use for the Sort menu items */
  'menu-item-groups.sorting-group': 'Kārtošana',

  /** The menu item title to use the compact view */
  'menu-items.layout.compact-view': 'Kompakts skats',
  /** The menu item title to use the detailed view */
  'menu-items.layout.detailed-view': 'Detalizēts skats',
  /** The menu item title to Sort by Created */
  'menu-items.sort-by.created': 'Kārtot pēc Izveides',
  /** The menu item title to Sort by Last Edited */
  'menu-items.sort-by.last-edited': 'Kārtot pēc Pēdējās rediģēšanas',

  /** The link text of the no document type screen that appears directly below the subtitle */
  'no-document-types-screen.link-text': 'Uzziniet, kā pievienot dokumenta tipu →',
  /** The subtitle of the no document type screen that appears directly below the title */
  'no-document-types-screen.subtitle': 'Lūdzu, definējiet vismaz vienu dokumenta tipu jūsu shēmā.',
  /** The title of the no document type screen */
  'no-document-types-screen.title': 'Nav dokumentu tipu',

  /** Text shown on back button visible on smaller breakpoints */
  'pane-header.back-button.text': 'Atpakaļ',
  /** tooltip text (via `title` attribute) for the menu button */
  'pane-header.context-menu-button.tooltip': 'Rādīt izvēlni',
  /** Appears in a document list pane header if there are more than one option for create. This is the label for that menu */
  'pane-header.create-menu.label': 'Izveidot',
  /** Tooltip displayed on the create new button in document lists */
  'pane-header.create-new-button.tooltip': 'Izveidot jaunu dokumentu',
  /** The `aria-label` for the disabled button in the pane header if create permissions are granted */
  'pane-header.disabled-created-button.aria-label': 'Nepietiekamas tiesības',

  /** The text shown in the tooltip of pane item previews of documents if there are unpublished edits */
  'pane-item.draft-status.has-draft.tooltip': 'Rediģēts <RelativeTime/>',
  /** The text shown in the tooltip of pane item previews of documents if there are no unpublished edits */
  'pane-item.draft-status.no-draft.tooltip': 'Nav nepublicētu rediģējumu',
  /** The subtitle tor pane item previews if there isn't a matching schema type found */
  'pane-item.missing-schema-type.subtitle': 'Dokuments: <Code>{{documentId}}</Code>',
  /** The title tor pane item previews if there isn't a matching schema type found */
  'pane-item.missing-schema-type.title': 'Nav atrasta shēma tipam <Code>{{documentType}}</Code>',
  /** The text shown in the tooltip of pane item previews of documents if there are unpublished edits */
  'pane-item.published-status.has-published.tooltip': 'Publicēts <RelativeTime/>',
  /** The text shown in the tooltip of pane item previews of documents if there are no unpublished edits */
  'pane-item.published-status.no-published.tooltip': 'Nav nepublicētu labojumu',

  /** The text used in the document header title if there is an error */
  'panes.document-header-title.error.text': 'Kļūda: {{error}}',
  /** The text used in the document header title if creating a new item */
  'panes.document-header-title.new.text': 'Jauns {{schemaType}}',
  /** The text used in the document header title if no other title can be determined */
  'panes.document-header-title.untitled.text': 'Bez nosaukuma',
  /** The error text on the document list pane */
  'panes.document-list-pane.error.text': 'Kļūda: <Code>{{error}}</Code>',
  /** The error title on the document list pane */
  'panes.document-list-pane.error.title': 'Nevarēja ielādēt saraksta vienumus',
  /** The text of the document list pane if more than a maximum number of documents are returned */
  'panes.document-list-pane.max-items.text': 'Tiek rādīts maksimāli {{limit}} dokumenti',
  /** The text of the document list pane if no documents are found for a specified type */
  'panes.document-list-pane.no-documents-of-type.text': 'Nav dokumentu šāda tipa',
  /** The text of the document list pane if no documents are found */
  'panes.document-list-pane.no-documents.text': 'Nav atrasti rezultāti',
  /** The text of the document list pane if no documents are found matching specified criteria */
  'panes.document-list-pane.no-matching-documents.text': 'Nav atbilstošu dokumentu',
  /** The aria-label for the search input on the document list pane */
  'panes.document-list-pane.search-input.aria-label': 'Meklēt sarakstā',
  /** The search input for the search input on the document list pane */
  'panes.document-list-pane.search-input.placeholder': 'Meklēt sarakstā',
  /** The summary title when displaying an error for a document operation result */
  'panes.document-operation-results.error.summary.title': 'Detaļas',
  /** The text when a generic operation failed (fallback, generally not shown)  */
  'panes.document-operation-results.operation-error': 'Kļūda notika veicot {{context}}',
  /** The text when a delete operation failed  */
  'panes.document-operation-results.operation-error_delete':
    'Kļūda mēģinot izdzēst šo dokumentu. Tas parasti nozīmē, ka ir citi dokumenti, kas uz to atsaucas.',
  /** The text when an unpublish operation failed  */
  'panes.document-operation-results.operation-error_unpublish':
    'Kļūda mēģinot atsaukt šī dokumenta publicēšanu. Tas parasti nozīmē, ka ir citi dokumenti, kas uz to atsaucas.',
  /** The text when a generic operation succeeded (fallback, generally not shown)  */
  'panes.document-operation-results.operation-success':
    'Veiksmīgi veikta {{op}} operācija ar dokumentu',
  /** The text when copy URL operation succeeded  */
  'panes.document-operation-results.operation-success_copy-url':
    'Dokumenta URL kopēts starpliktuvē',
  /**  */
  'panes.document-operation-results.operation-success_createVersion':
    '<Strong>{{title}}</Strong> tika pievienots izlaidumam',
  /** The text when a delete operation succeeded  */
  'panes.document-operation-results.operation-success_delete': 'Dokuments tika veiksmīgi izdzēsts',
  /** The text when a discard changes operation succeeded  */
  'panes.document-operation-results.operation-success_discardChanges':
    'Visas izmaiņas kopš pēdējās publicēšanas ir tagad atceltas. Atmestais melnraksts joprojām var tikt atjaunots no vēstures',
  /** The text when a duplicate operation succeeded  */
  'panes.document-operation-results.operation-success_duplicate':
    'Dokuments tika veiksmīgi dublēts',
  /** The text when a publish operation succeeded  */
  'panes.document-operation-results.operation-success_publish':
    '<Strong>{{title}}</Strong> tika publicēts',
  /** The text when a restore operation succeeded  */
  'panes.document-operation-results.operation-success_restore':
    '<Strong>{{title}}</Strong> tika atjaunots',
  /** The text when an unpublish operation succeeded  */
  'panes.document-operation-results.operation-success_unpublish':
    '<Strong>{{title}}</Strong> tika atsaukts. No pēdējās publicētās versijas tika izveidots melnraksts.',
  /** The document title shown when document title is "undefined" in operation message */
  'panes.document-operation-results.operation-undefined-title': 'Bez nosaukuma',
  /** The loading message for the document not found pane */
  'panes.document-pane.document-not-found.loading': 'Ielādē dokumentu…',
  /** The text of the document not found pane if the schema is known */
  'panes.document-pane.document-not-found.text':
    'Dokumenta tips nav definēts, un dokumentu ar identifikatoru <Code>{{id}}</Code> nevarēja atrast.',
  /** The title of the document not found pane if the schema is known */
  'panes.document-pane.document-not-found.title': 'Dokuments nav atrasts',
  /** The text of the document not found pane if the schema is not found */
  'panes.document-pane.document-unknown-type.text':
    'Šim dokumentam ir shēmas tips <Code>{{documentType}}</Code>, kas nav definēts kā tips vietējā satura studijas shēmā.',
  /** The title of the document not found pane if the schema is not found or unknown */
  'panes.document-pane.document-unknown-type.title':
    'Nezināms dokumenta tips: <Code>{{documentType}}</Code>',
  /** The title of the document not found pane if the schema is unknown */
  'panes.document-pane.document-unknown-type.without-schema.text':
    'Šis dokuments neeksistē, un tam nebija norādīts shēmas tips.',
  /** Default message shown while resolving the structure definition for an asynchronous node */
  'panes.resolving.default-message': 'Ielādē…',
  /** Message shown while resolving the structure definition for an asynchronous node and it is taking a while (more than 5s) */
  'panes.resolving.slow-resolve-message': 'Joprojām ielādē…',
  /** The text to display when type is missing */
  'panes.unknown-pane-type.missing-type.text':
    'Struktūras vienībai trūkst nepieciešamā <Code>type</Code> īpašības.',
  /** The title of the unknown pane */
  'panes.unknown-pane-type.title': 'Nezināms pane tips',
  /** The text to display when type is unknown */
  'panes.unknown-pane-type.unknown-type.text':
    'Struktūras vienība ar tipu <Code>{{type}}</Code> nav zināma entitāte.',

  /** The text for the "Open preview" action for a document */
  'production-preview.menu-item.title': 'Atvērt priekšskatījumu',

  /** The text for the confirm button in the request permission dialog used in the permissions banner */
  'request-permission-dialog.confirm-button.text': 'Nosūtīt pieprasījumu',
  /** The description text for the request permission dialog used in the permissions banner */
  'request-permission-dialog.description.text':
    'Jūsu pieprasījums tiks nosūtīts projekta administratoram(-iem). Ja vēlaties, varat pievienot arī piezīmi',
  /** The header/title for the request permission dialog used in the permissions banner */
  'request-permission-dialog.header.text': 'Lūgt rediģēšanas piekļuvi',
  /** The text describing the note input for the request permission dialog used in the permissions banner */
  'request-permission-dialog.note-input.description.text': 'Ja vēlaties, varat pievienot piezīmi',
  /** The placeholder for the note input in the request permission dialog used in the permissions banner */
  'request-permission-dialog.note-input.placeholder.text': 'Pievienot piezīmi...',
  /** The error/warning text in the request permission dialog when the user's request has been declined */
  'request-permission-dialog.warning.denied.text':
    'Jūsu pieprasījums piekļūt šim projektam tika noraidīts.',
  /** The error/warning text in the request permission dialog when the user's request has been denied due to too many outstanding requests */
  'request-permission-dialog.warning.limit-reached.text':
    'Jūs esat sasniedzis pieprasījumu limitu visos projektos. Lūdzu, uzgaidiet pirms iesniegt vairāk pieprasījumu vai sazinieties ar administratoru pēc palīdzības.',

  /** Label for button when status is saved */
  'status-bar.document-status-pulse.status.saved.text': 'Saglabāts',
  /** Label for button when status is syncing */
  'status-bar.document-status-pulse.status.syncing.text': 'Saglabā...',
  /** Accessibility label indicating when the document was last published, in relative time, eg "3 weeks ago" */
  'status-bar.publish-status-button.last-published-time.aria-label':
    'Pēdējo reizi publicēts {{relativeTime}}',
  /** Text for tooltip showing explanation of timestamp/relative time, eg "Last published <RelativeTime/>" */
  'status-bar.publish-status-button.last-published-time.tooltip':
    'Pēdējo reizi publicēts <RelativeTime/>',
  /** Accessibility label indicating when the document was last updated, in relative time, eg "2 hours ago" */
  'status-bar.publish-status-button.last-updated-time.aria-label':
    'Pēdējo reizi atjaunināts {{relativeTime}}',
  /** Text for tooltip showing explanation of timestamp/relative time, eg "Last updated <RelativeTime/>" */
  'status-bar.publish-status-button.last-updated-time.tooltip':
    'Pēdējo reizi atjaunināts <RelativeTime/>',
  /** Aria label for the button */
  'status-bar.review-changes-button.aria-label': 'Pārskatīt izmaiņas',
  /** Label for button when status is saved */
  'status-bar.review-changes-button.status.saved.text': 'Saglabāts!',
  /** Label for button when status is syncing */
  'status-bar.review-changes-button.status.syncing.text': 'Saglabā...',
  /** Text for the secondary text for tooltip for the button */
  'status-bar.review-changes-button.tooltip.changes-saved': 'Izmaiņas saglabātas',
  /** Primary text for tooltip for the button */
  'status-bar.review-changes-button.tooltip.text': 'Pārskatīt izmaiņas',

  /** The text that appears in side the documentation link */
  'structure-error.docs-link.text': 'Skatīt dokumentāciju',
  /** Labels the error message or error stack of the structure error screen */
  'structure-error.error.label': 'Kļūda',
  /** The header that appears at the top of the error screen */
  'structure-error.header.text': 'Struktūras lasīšanas laikā konstatēta kļūda',
  /** The text in the reload button to retry rendering the structure */
  'structure-error.reload-button.text': 'Pārlādēt',
  /** Labels the structure path of the structure error screen */
  'structure-error.structure-path.label': 'Struktūras ceļš',

  /** The aria label for the menu button in the timeline item */
  'timeline-item.menu-button.aria-label': 'Atvērt darbību izvēlni',
  /** The text for the tooltip in menu button the timeline item */
  'timeline-item.menu-button.tooltip': 'Darbības',
  /** The text for the collapse action in the timeline item menu */
  'timeline-item.menu.action-collapse': 'Sakļaut',
  /** The text for the expand action in the timeline item menu */
  'timeline-item.menu.action-expand': 'Izvērst',
})
