import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Label for the "Copy Document URL" document action */
  'action.copy-document-url.label': 'Kopioi dokumentin URL',
  /** Tooltip when action button is disabled because the operation is not ready   */
  'action.delete.disabled.not-ready': 'Toiminto ei ole valmis',
  /** Tooltip when action button is disabled because the document does not exist */
  'action.delete.disabled.nothing-to-delete':
    'Tätä dokumenttia ei ole vielä olemassa tai se on jo poistettu',
  /** Label for the "Delete" document action button */
  'action.delete.label': 'Poista',
  /** Label for the "Delete" document action while the document is being deleted */
  'action.delete.running.label': 'Poistetaan…',
  /** Tooltip when action is disabled because the document is linked to Canvas */
  'action.disabled-by-canvas.tooltip':
    'Jotkin dokumenttitoiminnot on poistettu käytöstä dokumenteille, jotka on linkitetty Canvasiin',
  /** Message prompting the user to confirm discarding changes */
  'action.discard-changes.confirm-dialog.confirm-discard-changes':
    'Oletko varma, että haluat hylätä kaikki muutokset viime julkaisun jälkeen?',
  /** Tooltip when action is disabled because the document has no unpublished changes */
  'action.discard-changes.disabled.no-change':
    'Tässä dokumentissa ei ole julkaisemattomia muutoksia',
  /** Tooltip when action is disabled because the document is not published */
  'action.discard-changes.disabled.not-published': 'Tätä dokumenttia ei ole julkaistu',
  /** Tooltip when action button is disabled because the operation is not ready   */
  'action.discard-changes.disabled.not-ready': 'Toiminto ei ole valmis',
  /** Label for the "Discard changes" document action */
  'action.discard-changes.label': 'Hylkää muutokset',
  /** Tooltip when action is disabled because the operation is not ready   */
  'action.duplicate.disabled.not-ready': 'Toiminto ei ole valmis',
  /** Tooltip when action is disabled because the document doesn't exist */
  'action.duplicate.disabled.nothing-to-duplicate':
    'Tätä dokumenttia ei ole vielä olemassa, joten sitä ei voi kopioida',
  /** Label for the "Duplicate" document action */
  'action.duplicate.label': 'Kopioi',
  /** Label for the "Duplicate" document action while the document is being duplicated */
  'action.duplicate.running.label': 'Kopioidaan…',
  /** Tooltip when publish button is disabled because the document is already published, and published time is unavailable.*/
  'action.publish.already-published.no-time-ago.tooltip': 'Jo julkaistu',
  /** Tooltip when publish button is disabled because the document is already published.*/
  'action.publish.already-published.tooltip': 'Julkaistu {{timeSincePublished}} sitten',
  /** Tooltip when action is disabled because the studio is not ready.*/
  'action.publish.disabled.not-ready': 'Toiminto ei ole valmis',
  /** Label for action when there are pending changes.*/
  'action.publish.draft.label': 'Julkaise',
  /** Label for the "Publish" document action */
  'action.publish.label': 'Julkaise',
  /** Label for the "Publish" document action when the document has live edit enabled.*/
  'action.publish.live-edit.label': 'Julkaise',
  /** Fallback tooltip for the "Publish" document action when publish is invoked for a document with live edit enabled.*/
  'action.publish.live-edit.publish-disabled':
    'Ei voida julkaista, koska Live Edit on käytössä tässä dokumenttityypissä',
  /** Tooltip for the "Publish" document action when the document has live edit enabled.*/
  'action.publish.live-edit.tooltip':
    'Live Edit on käytössä tässä sisältötyypissä ja julkaisu tapahtuu automaattisesti, kun teet muutoksia',
  /** Tooltip when publish button is disabled because there are no changes.*/
  'action.publish.no-changes.tooltip': 'Ei julkaisemattomia muutoksia',
  /** Label for the "Publish" document action when there are no changes.*/
  'action.publish.published.label': 'Julkaistu',
  /** Label for the "Publish" document action while publish is being executed.*/
  'action.publish.running.label': 'Julkaistaan…',
  /** Tooltip when the "Publish" document action is disabled due to validation issues */
  'action.publish.validation-issues.tooltip':
    'Ennen tämän dokumentin julkaisemista on korjattava validointivirheet',
  /** Tooltip when publish button is waiting for validation and async tasks to complete.*/
  'action.publish.waiting': 'Odotetaan tehtävien valmistumista ennen julkaisua',
  /** Message prompting the user to confirm that they want to restore to an earlier revision*/
  'action.restore.confirm.message': 'Oletko varma, että haluat palauttaa tämän asiakirjan?',
  /** Fallback tooltip for when user is looking at the initial revision */
  'action.restore.disabled.cannot-restore-initial': 'Et voi palauttaa alkuperäistä versiota',
  /** Label for the "Restore" document action */
  'action.restore.label': 'Palauta',
  /** Default tooltip for the action */
  'action.restore.tooltip': 'Palauta tähän versioon',
  /** Tooltip when action is disabled because the document is not already published */
  'action.unpublish.disabled.not-published': 'Tätä asiakirjaa ei ole julkaistu',
  /** Tooltip when action is disabled because the operation is not ready   */
  'action.unpublish.disabled.not-ready': 'Toiminto ei ole valmis',
  /** Label for the "Unpublish" document action */
  'action.unpublish.label': 'Poista julkaisu',
  /** Fallback tooltip for the Unpublish document action when publish is invoked for a document with live edit enabled.*/
  'action.unpublish.live-edit.disabled':
    'Tällä asiakirjalla on käytössä live-muokkaus eikä sitä voi poistaa julkaisusta',

  /** Description for the archived release banner, rendered when viewing the history of a version document from the publihed view */
  'banners.archived-release.description':
    'Katsot vain luku -dokumenttia, joka arkistoitiin osana <VersionBadge>julkaisua</VersionBadge>. Sitä ei voi muokata',
  /** The text for the restore button on the deleted document banner */
  'banners.deleted-document-banner.restore-button.text': 'Palauta viimeisin versio',
  /** The text content for the deleted document banner */
  'banners.deleted-document-banner.text': 'Tämä asiakirja on poistettu.',
  /** The text content for the deprecated document type banner */
  'banners.deprecated-document-type-banner.text': 'Tämä dokumenttityyppi on vanhentunut.',
  /** The text for publish action for discarding the version */
  'banners.live-edit-draft-banner.discard.tooltip': 'Hylkää luonnos',
  /** The text for publish action for the draft banner */
  'banners.live-edit-draft-banner.publish.tooltip': 'Julkaise jatkaaksesi muokkausta',
  /** The text content for the live edit document when it's a draft */
  'banners.live-edit-draft-banner.text':
    'Tyypillä <strong>{{schemaType}}</strong> on <code>liveEdit</code> käytössä, mutta tästä dokumentista on olemassa luonnosversio. Julkaise tai hylkää luonnos jatkaaksesi sen live-muokkausta.',
  /** The text for the permission check banner if the user only has one role, and it does not allow publishing this document */
  'banners.permission-check-banner.missing-permission_create_one':
    'Roolisi <Roles/> ei anna oikeuksia luoda tätä asiakirjaa.',
  /** The text for the permission check banner if the user only has multiple roles, but they do not allow publishing this document */
  'banners.permission-check-banner.missing-permission_create_other':
    'Roolisi <Roles/> eivät anna oikeuksia luoda tätä asiakirjaa.',
  /** The text for the permission check banner if the user only has one role, and it does not allow editing this document */
  'banners.permission-check-banner.missing-permission_update_one':
    'Roolisi <Roles/> ei anna oikeuksia päivittää tätä asiakirjaa.',
  /** The text for the permission check banner if the user only has multiple roles, but they do not allow editing this document */
  'banners.permission-check-banner.missing-permission_update_other':
    'Roolisi <Roles/> eivät anna oikeuksia päivittää tätä asiakirjaa.',
  /** The pending text for the request permission button that appears for viewer roles */
  'banners.permission-check-banner.request-permission-button.sent': 'Muokkauspyyntö lähetetty',
  /** The text for the request permission button that appears for viewer roles */
  'banners.permission-check-banner.request-permission-button.text': 'Pyydä muokkausoikeutta',
  /** Description for the archived release banner, rendered when viewing the history of a version document from the published view */
  'banners.published-release.description':
    'Katsot vain luku -dokumenttia, joka julkaistiin osana <VersionBadge>julkaisua</VersionBadge>. Sitä ei voi muokata',
  /** The text for the reload button */
  'banners.reference-changed-banner.reason-changed.reload-button.text': 'Lataa viite uudelleen',
  /** The text for the reference change banner if the reason is that the reference has been changed */
  'banners.reference-changed-banner.reason-changed.text':
    'Tämä viite on muuttunut siitä, kun avasit sen.',
  /** The text for the close button */
  'banners.reference-changed-banner.reason-removed.close-button.text': 'Sulje viite',
  /** The text for the reference change banner if the reason is that the reference has been deleted */
  'banners.reference-changed-banner.reason-removed.text':
    'Tämä viite on poistettu sen jälkeen, kun avasit sen.',
  /** The text that appears for the action button to add the current document to the global release */
  'banners.release.action.add-to-release': 'Lisää julkaisuun',
  /** The text that appears for the action button to add the current document to the global release */
  'banners.release.action.open-to-edit': 'Avaa julkaisu muokattavaksi',
  /** Toast description in case an error occurs when adding a document to a release  */
  'banners.release.error.description':
    'Virhe tapahtui lisättäessä asiakirjaa julkaisuun: {{message}}',
  /** Toast title in case an error occurs when adding a document to a release  */
  'banners.release.error.title': 'Virhe lisättäessä asiakirjaa julkaisuun',
  /** The text for the banner that appears when a document only has versions but is in a draft or published pinned release */
  'banners.release.navigate-to-edit-description': 'Asiakirja on olemassa vain',
  /** The text for the banner that appears when a document only has versions but is in a draft or published pinned release */
  'banners.release.navigate-to-edit-description-end_one': 'julkaisussa',
  /** The text for the banner that appears when a document only has versions but is in a draft or published pinned release */
  'banners.release.navigate-to-edit-description-end_other': 'julkaisuissa',
  /** The text for the banner that appears when there are multiple versions but no drafts or published, only one extra releases */
  'banners.release.navigate-to-edit-description-multiple_one':
    'Tämä asiakirja on osa <VersionBadge/> julkaisua ja {{count}} muuta julkaisua.',
  /** The text for the banner that appears when there are multiple versions but no drafts or published, more than one extra releases */
  'banners.release.navigate-to-edit-description-multiple_other':
    'Tämä asiakirja on osa <VersionBadge/> julkaisua ja {{count}} muuta julkaisua',
  /** The text for the banner that appears when a document only has one version but is in a draft or published pinned release */
  'banners.release.navigate-to-edit-description-single':
    'Tämä asiakirja on osa <VersionBadge/> julkaisua',
  /** The text for the banner that appears when a document is not in the current global release */
  'banners.release.not-in-release': 'Ei ole <Label>{{title}}</Label> julkaisussa.',
  /** Description of toast that will appear in case of latency between the user adding a document to a release and the UI reflecting it */
  'banners.release.waiting.description':
    'Odota hetki, kun asiakirjaa lisätään julkaisuun. Sen ei pitäisi kestää kauempaa kuin muutama sekunti.',
  /** Title of toast that will appear in case of latency between the user adding a document to a release and the UI reflecting it */
  'banners.release.waiting.title': 'Lisätään asiakirjaa julkaisuun…',
  /** The text content for the unpublished document banner when is part of a release */
  'banners.unpublished-release-banner.text':
    'Tämä dokumentti poistetaan julkaisemattomana osana <VersionBadge>{{title}}</VersionBadge> julkaisua',

  /** Browser/tab title when creating a new document of a given type */
  'browser-document-title.new-document': 'Uusi {{schemaType}}',
  /** Browser/tab title when editing a document where the title cannot be resolved from preview configuration */
  'browser-document-title.untitled-document': 'Nimetön',

  /** The action menu button aria-label */
  'buttons.action-menu-button.aria-label': 'Avaa asiakirjan toiminnot',
  /** The action menu button tooltip */
  'buttons.action-menu-button.tooltip': 'Asiakirjatoiminnot',
  /** The aria-label for the split pane button on the document panel header */
  'buttons.split-pane-button.aria-label': 'Jaa ruutu oikealle',
  /** The tool tip for the split pane button on the document panel header */
  'buttons.split-pane-button.tooltip': 'Jaa ruutu oikealle',
  /** The title for the close button on the split pane on the document panel header */
  'buttons.split-pane-close-button.title': 'Sulje jaettu ruutu',
  /** The title for the close group button on the split pane on the document panel header */
  'buttons.split-pane-close-group-button.title': 'Sulje ruuturyhmä',

  /** The text for the canvas linked banner action button */
  'canvas.banner.edit-in-canvas-action': 'Muokkaa Canvasissa',
  /** The text for the canvas linked banner when the document is a draft */
  'canvas.banner.linked-text.draft': 'Tämä luonnosdokumentti on linkitetty Canvasiin',
  /** The text for the canvas linked banner when the document is a live document */
  'canvas.banner.linked-text.published': 'Tämä julkaistu dokumentti on linkitetty Canvasiin',
  /** The text for the canvas linked banner when the document is a version document */
  'canvas.banner.linked-text.version': 'Tämä version dokumentti on linkitetty Canvasiin',
  /** The text for the canvas linked banner popover button */
  'canvas.banner.popover-button-text': 'Lue lisää',
  /** The description for the canvas linked banner popover */
  'canvas.banner.popover-description':
    'Canvas antaa sinun kirjoittaa vapaamuotoisessa editorissa, joka automaattisesti kuvaa takaisin Studioon rakenteellisena sisältönä - kirjoittaessasi.',
  /** The heading for the canvas linked banner popover */
  'canvas.banner.popover-heading': 'Idea ensin kirjoittaminen',

  /** The label used in the changes inspector for the from selector */
  'changes.from.label': 'Alkaen',
  /* The label for the history tab in the changes inspector*/
  'changes.tab.history': 'Historia',
  /* The label for the review tab in the changes inspector*/
  'changes.tab.review-changes': 'Tarkista muutokset',
  /** The label used in the changes inspector for the to selector */
  'changes.to.label': 'Päättyen',

  /** The error message shown when the specified document comparison mode is not supported */
  'compare-version.error.invalidModeParam': '"{{input}}" ei ole tuettu asiakirjojen vertailutila.',
  /** The error message shown when the next document for comparison could not be extracted from the URL */
  'compare-version.error.invalidNextDocumentParam':
    'Seuraavan asiakirjan parametri on virheellinen.',
  /** The error message shown when the document comparison URL could not be parsed */
  'compare-version.error.invalidParams.title': 'Asiakirjoja ei voi verrata',
  /** The error message shown when the previous document for comparison could not be extracted from the URL */
  'compare-version.error.invalidPreviousDocumentParam':
    'Edellisen asiakirjan parametri on virheellinen.',

  /** The text for the tooltip when the "Compare versions" action for a document is disabled */
  'compare-versions.menu-item.disabled-reason':
    'Tästä dokumentista ei ole muita versioita, joihin verrata.',
  /** The text for the "Compare versions" action for a document */
  'compare-versions.menu-item.title': 'Vertaa versioita',
  /** The string used to label draft documents */
  'compare-versions.status.draft': 'Luonnos',
  /** The string used to label published documents */
  'compare-versions.status.published': 'Julkaistu',
  /** The title used when comparing versions of a document */
  'compare-versions.title': 'Vertaa versioita',

  /** The text in the "Cancel" button in the confirm delete dialog that cancels the action and closes the dialog */
  'confirm-delete-dialog.cancel-button.text': 'Peruuta',
  /** Used in `confirm-delete-dialog.cdr-summary.title` */
  'confirm-delete-dialog.cdr-summary.document-count_one': '1 asiakirja',
  /** Used in `confirm-delete-dialog.cdr-summary.title` */
  'confirm-delete-dialog.cdr-summary.document-count_other': '{{count}} dokumenttia',
  /** The text that appears in the subtitle `<summary>` that lists the datasets below the title */
  'confirm-delete-dialog.cdr-summary.subtitle_one': 'Dataset: {{datasets}}',
  /** The text that appears in the subtitle `<summary>` that lists the datasets below the title */
  'confirm-delete-dialog.cdr-summary.subtitle_other': 'Datasets: {{datasets}}',
  /** The text that appears in the subtitle `<summary>` that lists the datasets below the title */
  'confirm-delete-dialog.cdr-summary.subtitle_unavailable_one': 'Saatavilla olematon dataset',
  /** The text that appears in the subtitle `<summary>` that lists the datasets below the title */
  'confirm-delete-dialog.cdr-summary.subtitle_unavailable_other': 'Saatavilla olemattomat datasets',
  /** The text that appears in the title `<summary>` that includes the list of CDRs (singular) */
  'confirm-delete-dialog.cdr-summary.title_one': '{{documentCount}} toisessa datasetissä',
  /** The text that appears in the title `<summary>` that includes the list of CDRs (plural) */
  'confirm-delete-dialog.cdr-summary.title_other': '{{documentCount}} {{count}} datasetissä',
  /** Appears when hovering over the copy button to copy */
  'confirm-delete-dialog.cdr-table.copy-id-button.tooltip': 'Kopioi ID leikepöydälle',
  /** The header for the dataset column in the list of cross-dataset references found */
  'confirm-delete-dialog.cdr-table.dataset.label': 'Dataset',
  /** The header for the document ID column in the list of cross-dataset references found */
  'confirm-delete-dialog.cdr-table.document-id.label': 'Dokumentin ID',
  /** The toast title when the copy button has been clicked but copying failed */
  'confirm-delete-dialog.cdr-table.id-copied-toast.title-failed':
    'Asiakirjan ID:n kopioiminen epäonnistui',
  /** The header for the project ID column in the list of cross-dataset references found */
  'confirm-delete-dialog.cdr-table.project-id.label': 'Projektin ID',
  /** The text in the "Delete anyway" button in the confirm delete dialog that confirms the action */
  'confirm-delete-dialog.confirm-anyway-button.text_delete': 'Poista joka tapauksessa',
  /** The text in the "Unpublish anyway" button in the confirm delete dialog that confirms the action */
  'confirm-delete-dialog.confirm-anyway-button.text_unpublish':
    'Julkaiseminen peruutetaan joka tapauksessa',
  /** The text in the "Delete now" button in the confirm delete dialog that confirms the action */
  'confirm-delete-dialog.confirm-button.text_delete': 'Poista nyt',
  /** The text in the "Unpublish now" button in the confirm delete dialog that confirms the action */
  'confirm-delete-dialog.confirm-button.text_unpublish': 'Peruuta julkaisu nyt',
  /** If no referring documents are found, this text appears above the cancel and confirmation buttons */
  'confirm-delete-dialog.confirmation.text_delete':
    'Oletko varma, että haluat poistaa “<DocumentTitle/>”?',
  /** If no referring documents are found, this text appears above the cancel and confirmation buttons */
  'confirm-delete-dialog.confirmation.text_unpublish':
    'Oletko varma, että haluat peruuttaa “<DocumentTitle/>” julkaisun?',
  /** The text body of the error dialog. */
  'confirm-delete-dialog.error.message.text':
    'Viitattujen dokumenttien lataamisessa tapahtui virhe.',
  /** The text in the retry button of the confirm delete dialog if an error occurred. */
  'confirm-delete-dialog.error.retry-button.text': 'Yritä uudelleen',
  /** The header of the confirm delete dialog if an error occurred while the confirm delete dialog was open. */
  'confirm-delete-dialog.error.title.text': 'Virhe',
  /** The header of the confirm delete dialog */
  'confirm-delete-dialog.header.text_delete': 'Poista dokumentti?',
  /** The header of the confirm delete dialog */
  'confirm-delete-dialog.header.text_unpublish': 'Peruuta dokumentin julkaisu?',
  /** The text that appears while the referring documents are queried */
  'confirm-delete-dialog.loading.text': 'Etsitään viittaavia dokumentteja…',
  /** Shown if there are references to other documents but the user does not have the permission to see the relevant document IDs */
  'confirm-delete-dialog.other-reference-count.title_one': '1 muu viittaus ei näytä',
  /** Shown if there are references to other documents but the user does not have the permission to see the relevant document IDs */
  'confirm-delete-dialog.other-reference-count.title_other':
    '{{count}} muuta viittausta ei näytetä',
  /** Text in the tooltip of this component if hovering over the info icon */
  'confirm-delete-dialog.other-reference-count.tooltip':
    'Emme voi näyttää metatietoja näille viittauksille, koska liittyvien tietokantojen käyttöoikeustunnus puuttuu.',
  /** Appears when unable to render a document preview in the referring document list */
  'confirm-delete-dialog.preview-item.preview-unavailable.subtitle': 'ID: {{documentId}}',
  /** Appears when unable to render a document preview in the referring document list */
  'confirm-delete-dialog.preview-item.preview-unavailable.title': 'Esikatselu ei ole saatavilla',
  /** Warns the user of affects to other documents if the action is confirmed (delete) */
  'confirm-delete-dialog.referential-integrity-disclaimer.text_delete':
    'Jos poistat tämän asiakirjan, asiakirjat, jotka viittaavat siihen, eivät enää pääse siihen käsiksi.',
  /** Warns the user of affects to other documents if the action is confirmed (unpublish) */
  'confirm-delete-dialog.referential-integrity-disclaimer.text_unpublish':
    'Jos poistat tämän asiakirjan julkaisun, asiakirjat, jotka viittaavat siihen, eivät enää pääse siihen käsiksi.',
  /** Tells the user the count of how many other referring documents there are before listing them. (singular) */
  'confirm-delete-dialog.referring-document-count.text_one':
    '1 asiakirja viittaa “<DocumentTitle/>”',
  /** Tells the user the count of how many other referring documents there are before listing them. (plural) */
  'confirm-delete-dialog.referring-document-count.text_other':
    '{{count}} asiakirjaa viittaa “<DocumentTitle/>”',
  /** Describes the list of documents that refer to the one trying to be deleted (delete) */
  'confirm-delete-dialog.referring-documents-descriptor.text_delete':
    'Et ehkä voi poistaa “<DocumentTitle/>”, koska seuraavat asiakirjat viittaavat siihen:',
  /** Describes the list of documents that refer to the one trying to be deleted (unpublish) */
  'confirm-delete-dialog.referring-documents-descriptor.text_unpublish':
    'Et ehkä voi poistaa julkaisua “<DocumentTitle/>”, koska seuraavat asiakirjat viittaavat siihen:',

  /** The text for the cancel button in the confirm dialog used in document action shortcuts if none is provided */
  'confirm-dialog.cancel-button.fallback-text': 'Peruuta',
  /** The text for the confirm button in the confirm dialog used in document action shortcuts if none is provided */
  'confirm-dialog.confirm-button.fallback-text': 'Vahvista',

  /** For the default structure definition, the title for the "Content" pane */
  'default-definition.content-title': 'Sisältö',

  /** The text shown if there was an error while getting the document's title via a preview value */
  'doc-title.error.text': 'Virhe: {{errorMessage}}',
  /** The text shown if the preview value for a document is non-existent or empty */
  'doc-title.fallback.text': 'Nimetön',
  /** The text shown if a document's title via a preview value cannot be determined due to an unknown schema type */
  'doc-title.unknown-schema-type.text': 'Tuntematon skeematyyppi: {{schemaType}}',

  /** Tooltip text shown for the close button of the document inspector */
  'document-inspector.close-button.tooltip': 'Sulje',
  /** The title shown in the dialog header, when inspecting a valid document */
  'document-inspector.dialog.title': 'Tutkitaan <DocumentTitle/>',
  /** The title shown in the dialog header, when the document being inspected is not created yet/has no value */
  'document-inspector.dialog.title-no-value': 'Ei arvoa',
  /** Title shown for menu item that opens the "Inspect" dialog */
  'document-inspector.menu-item.title': 'Tutki',
  /** the placeholder text for the search input on the inspect dialog */
  'document-inspector.search.placeholder': 'Hae',
  /** The "parsed" view mode, meaning the JSON is searchable, collapsible etc */
  'document-inspector.view-mode.parsed': 'Jäsennetty',
  /** The "raw" view mode, meaning the JSON is presented syntax-highlighted, but with no other features - optimal for copying */
  'document-inspector.view-mode.raw-json': 'Raaka JSON',

  /** The text for when a form is hidden */
  'document-view.form-view.form-hidden': 'Tämä lomake on piilotettu',
  /** Fallback title shown when a form title is not provided */
  'document-view.form-view.form-title-fallback': 'Nimetön',
  /** The text for when the form view is loading a document */
  'document-view.form-view.loading': 'Ladataan asiakirjaa…',
  /** The description of the sync lock toast on the form view */
  'document-view.form-view.sync-lock-toast.description':
    'Odota hetki, kunnes asiakirja synkronoidaan. Tämä tapahtuu yleensä heti sen jälkeen, kun asiakirja on julkaistu, eikä sen pitäisi kestää kuin muutama sekunti',
  /** The title of the sync lock toast on the form view */
  'document-view.form-view.sync-lock-toast.title': 'Synkronoidaan asiakirjaa…',

  /** The description for the document favorite action */
  'document.favorites.add-to-favorites': 'Lisää suosikkeihin',
  /** The description for the document unfavorite action */
  'document.favorites.remove-from-favorites': 'Poista suosikeista',

  /**The title for the menu items that will be shown when expanding a publish release event to inspect the document */
  'events.inspect.release': 'Tutki <VersionBadge>{{releaseTitle}}</VersionBadge> dokumenttia',
  /**The title for the menu items that will be shown when expanding a publish draft event to inspect the draft document*/
  'events.open.draft': 'Avaa <VersionBadge>luonnos</VersionBadge> dokumentti',
  /**The title for the menu items that will be shown when expanding a publish release event to inspect the release*/
  'events.open.release': 'Avaa <VersionBadge>{{releaseTitle}}</VersionBadge> julkaisu',

  /** The loading messaging for when the tooltip is still loading permission info */
  'insufficient-permissions-message-tooltip.loading-text': 'Ladataan…',

  /** --- Menu items --- */
  /** The menu item group title to use for the Action menu items */
  'menu-item-groups.actions-group': 'Toiminnot',
  /** The menu item group title to use for the Layout menu items */
  'menu-item-groups.layout-group': 'Asettelu',
  /** The menu item group title to use for the Sort menu items */
  'menu-item-groups.sorting-group': 'Lajittelu',

  /** The menu item title to use the compact view */
  'menu-items.layout.compact-view': 'Tiivis näkymä',
  /** The menu item title to use the detailed view */
  'menu-items.layout.detailed-view': 'Yksityiskohtainen näkymä',
  /** The menu item title to Sort by Created */
  'menu-items.sort-by.created': 'Lajittele luontipäivämäärän mukaan',
  /** The menu item title to Sort by Last Edited */
  'menu-items.sort-by.last-edited': 'Lajittele viimeksi muokatun mukaan',

  /** The link text of the no document type screen that appears directly below the subtitle */
  'no-document-types-screen.link-text': 'Opi lisäämään asiakirjatyyppi →',
  /** The subtitle of the no document type screen that appears directly below the title */
  'no-document-types-screen.subtitle': 'Määrittele ainakin yksi dokumenttityyppi skeemaasi.',
  /** The title of the no document type screen */
  'no-document-types-screen.title': 'Ei dokumenttityyppejä',

  /** Text shown on back button visible on smaller breakpoints */
  'pane-header.back-button.text': 'Takaisin',
  /** tooltip text (via `title` attribute) for the menu button */
  'pane-header.context-menu-button.tooltip': 'Näytä valikko',
  /** Appears in a document list pane header if there are more than one option for create. This is the label for that menu */
  'pane-header.create-menu.label': 'Luo',
  /** Tooltip displayed on the create new button in document lists */
  'pane-header.create-new-button.tooltip': 'Luo uusi asiakirja',
  /** The `aria-label` for the disabled button in the pane header if create permissions are granted */
  'pane-header.disabled-created-button.aria-label': 'Riittämättömät oikeudet',

  /** The text shown in the tooltip of pane item previews of documents if there are unpublished edits */
  'pane-item.draft-status.has-draft.tooltip': 'Muokattu <RelativeTime/>',
  /** The text shown in the tooltip of pane item previews of documents if there are no unpublished edits */
  'pane-item.draft-status.no-draft.tooltip': 'Ei julkaisemattomia muokkauksia',
  /** The subtitle tor pane item previews if there isn't a matching schema type found */
  'pane-item.missing-schema-type.subtitle': 'Dokumentti: <Code>{{documentId}}</Code>',
  /** The title tor pane item previews if there isn't a matching schema type found */
  'pane-item.missing-schema-type.title': 'Skeemaa ei löydy tyypille <Code>{{documentType}}</Code>',
  /** The text shown in the tooltip of pane item previews of documents if there are unpublished edits */
  'pane-item.published-status.has-published.tooltip': 'Julkaistu <RelativeTime/>',
  /** The text shown in the tooltip of pane item previews of documents if there are no unpublished edits */
  'pane-item.published-status.no-published.tooltip': 'Ei julkaisemattomia muokkauksia',

  /** The text used in the document header title if there is an error */
  'panes.document-header-title.error.text': 'Virhe: {{error}}',
  /** The text used in the document header title if creating a new item */
  'panes.document-header-title.new.text': 'Uusi {{schemaType}}',
  /** The text used in the document header title if no other title can be determined */
  'panes.document-header-title.untitled.text': 'Nimetön',
  /** The help text saying that we'll retry fetching the document list */
  'panes.document-list-pane.error.retrying': 'Yritetään uudelleen…',
  /** The error text on the document list pane */
  'panes.document-list-pane.error.text': 'Virhe: <Code>{{error}}</Code>',
  /** The error text on the document list pane */
  'panes.document-list-pane.error.text.dev': 'Virhe: <Code>{{error}}</Code>',
  /** The error text on the document list pane if the browser appears to be offlline */
  'panes.document-list-pane.error.text.offline': 'Internet-yhteys näyttää olevan poissa käytöstä.',
  /** The error title on the document list pane */
  'panes.document-list-pane.error.title': 'Luettelokohteita ei voitu noutaa',
  /** The help text saying that we'll retry fetching the document list */
  'panes.document-list-pane.error.will-retry-automatically_one': 'Yritetään uudelleen…',
  'panes.document-list-pane.error.will-retry-automatically_other':
    'Yritetään uudelleen… (#{{count}}).',
  /** The text of the document list pane if more than a maximum number of documents are returned */
  'panes.document-list-pane.max-items.text': 'Näytetään enintään {{limit}} dokumenttia',
  /** The text of the document list pane if no documents are found for a specified type */
  'panes.document-list-pane.no-documents-of-type.text': 'Tämän tyyppisiä dokumentteja ei ole',
  /** The text of the document list pane if no documents are found */
  'panes.document-list-pane.no-documents.text': 'Tuloksia ei löytynyt',
  /** The text of the document list pane if no documents are found matching specified criteria */
  'panes.document-list-pane.no-matching-documents.text': 'Vastaavia dokumentteja ei löytynyt',
  /** The search input for the search input on the document list pane */
  'panes.document-list-pane.reconnecting': 'Yritetään muodostaa yhteyttä…',
  /** The aria-label for the search input on the document list pane */
  'panes.document-list-pane.search-input.aria-label': 'Etsi listalta',
  /** The search input for the search input on the document list pane */
  'panes.document-list-pane.search-input.placeholder': 'Etsi listalta',
  /** The summary title when displaying an error for a document operation result */
  'panes.document-operation-results.error.summary.title': 'Yksityiskohdat',
  /** The text when a generic operation failed (fallback, generally not shown)  */
  'panes.document-operation-results.operation-error': 'Virhe tapahtui suorittaessa {{context}}',
  /** The text when a delete operation failed  */
  'panes.document-operation-results.operation-error_delete':
    'Virhe tapahtui yrittäessä poistaa tätä dokumenttia. Tämä yleensä tarkoittaa, että muut dokumentit viittaavat siihen.',
  /** The text when an unpublish operation failed  */
  'panes.document-operation-results.operation-error_unpublish':
    'Virhe tapahtui yrittäessä perua tämän dokumentin julkaisu. Tämä yleensä tarkoittaa, että muut dokumentit viittaavat siihen.',
  /** The text when a generic operation succeeded (fallback, generally not shown)  */
  'panes.document-operation-results.operation-success':
    'Toiminto {{context}} suoritettu onnistuneesti dokumentille',
  /** The text when copy URL operation succeeded  */
  'panes.document-operation-results.operation-success_copy-url':
    'Dokumentin URL kopioitu leikepöydälle',
  /**  */
  'panes.document-operation-results.operation-success_createVersion':
    '<Strong>{{title}}</Strong> lisättiin julkaisuun',
  /** The text when a delete operation succeeded  */
  'panes.document-operation-results.operation-success_delete':
    'Dokumentti on poistettu onnistuneesti',
  /** The text when a discard changes operation succeeded  */
  'panes.document-operation-results.operation-success_discardChanges':
    'Kaikki viime julkaisun jälkeiset muutokset on nyt hylätty. Hylätyn luonnoksen voi silti palauttaa historiasta',
  /** The text when a duplicate operation succeeded  */
  'panes.document-operation-results.operation-success_duplicate':
    'Asiakirja kopioitiin onnistuneesti',
  /** The text when a publish operation succeeded  */
  'panes.document-operation-results.operation-success_publish': 'Dokumentti on julkaistu',
  /** The text when a restore operation succeeded  */
  'panes.document-operation-results.operation-success_restore':
    '<Strong>{{title}}</Strong> palautettiin',
  /** The text when an unpublish operation succeeded  */
  'panes.document-operation-results.operation-success_unpublish':
    'Dokumentin julkaisu on peruttu. Uusin julkaistu versio on luotu luonnokseksi.',
  /** The document title shown when document title is "undefined" in operation message */
  'panes.document-operation-results.operation-undefined-title': 'Nimetön',
  /** The loading message for the document not found pane */
  'panes.document-pane.document-not-found.loading': 'Ladataan dokumenttia…',
  /** The text of the document not found pane if the schema is known */
  'panes.document-pane.document-not-found.text':
    'Dokumenttityyppiä ei ole määritelty, eikä dokumenttia tunnisteella <Code>{{id}}</Code> löytynyt.',
  /** The title of the document not found pane if the schema is known */
  'panes.document-pane.document-not-found.title': 'Dokumenttia ei löytynyt',
  /** The text of the document not found pane if the schema is not found */
  'panes.document-pane.document-unknown-type.text':
    'Tällä dokumentilla on skeematyyppi <Code>{{documentType}}</Code>, jota ei ole määritelty paikallisen sisältöstudion skeemassa.',
  /** The title of the document not found pane if the schema is not found or unknown */
  'panes.document-pane.document-unknown-type.title':
    'Tuntematon dokumenttityyppi: <Code>{{documentType}}</Code>',
  /** The title of the document not found pane if the schema is unknown */
  'panes.document-pane.document-unknown-type.without-schema.text':
    'Tätä dokumenttia ei ole olemassa, eikä sille ole määritelty skeematyyppiä.',
  /** Default message shown while resolving the structure definition for an asynchronous node */
  'panes.resolving.default-message': 'Ladataan…',
  /** Message shown while resolving the structure definition for an asynchronous node and it is taking a while (more than 5s) */
  'panes.resolving.slow-resolve-message': 'Ladataan edelleen…',
  /** The text to display when type is missing */
  'panes.unknown-pane-type.missing-type.text':
    'Rakenneosalla puuttuu vaadittu <Code>type</Code> ominaisuus.',
  /** The title of the unknown pane */
  'panes.unknown-pane-type.title': 'Tuntematon paneelityyppi',
  /** The text to display when type is unknown */
  'panes.unknown-pane-type.unknown-type.text':
    'Rakenneosan tyyppi <Code>{{type}}</Code> ei ole tunnettu entiteetti.',

  /** The text for the "Open preview" action for a document */
  'production-preview.menu-item.title': 'Avaa esikatselu',

  /** The text for the confirm button in the request permission dialog used in the permissions banner */
  'request-permission-dialog.confirm-button.text': 'Lähetä pyyntö',
  /** The description text for the request permission dialog used in the permissions banner */
  'request-permission-dialog.description.text':
    'Pyyntösi lähetetään projektin ylläpitäjä(ille). Voit halutessasi liittää mukaan myös viestin',
  /** The header/title for the request permission dialog used in the permissions banner */
  'request-permission-dialog.header.text': 'Pyydä muokkausoikeutta',
  /** The text describing the note input for the request permission dialog used in the permissions banner */
  'request-permission-dialog.note-input.description.text': 'Voit halutessasi lisätä viestin',
  /** The placeholder for the note input in the request permission dialog used in the permissions banner */
  'request-permission-dialog.note-input.placeholder.text': 'Lisää viesti...',
  /** The error/warning text in the request permission dialog when the user's request has been declined */
  'request-permission-dialog.warning.denied.text':
    'Pyyntösi päästä käsiksi tähän projektiin on hylätty.',
  /** The error/warning text in the request permission dialog when the user's request has been denied due to too many outstanding requests */
  'request-permission-dialog.warning.limit-reached.text':
    'Olet saavuttanut roolipyyntöjen rajan kaikissa projekteissa. Odota ennen uusien pyyntöjen lähettämistä tai ota yhteyttä ylläpitäjään saadaksesi apua.',

  /** Label for button when status is saved */
  'status-bar.document-status-pulse.status.saved.text': 'Tallennettu',
  /** Label for button when status is syncing */
  'status-bar.document-status-pulse.status.syncing.text': 'Tallennetaan...',
  /** Accessibility label indicating when the document was last published, in relative time, eg "3 weeks ago" */
  'status-bar.publish-status-button.last-published-time.aria-label':
    'Viimeksi julkaistu {{relativeTime}}',
  /** Text for tooltip showing explanation of timestamp/relative time, eg "Last published <RelativeTime/>" */
  'status-bar.publish-status-button.last-published-time.tooltip':
    'Viimeksi julkaistu <RelativeTime/>',
  /** Accessibility label indicating when the document was last updated, in relative time, eg "2 hours ago" */
  'status-bar.publish-status-button.last-updated-time.aria-label':
    'Viimeksi päivitetty {{relativeTime}}',
  /** Text for tooltip showing explanation of timestamp/relative time, eg "Last updated <RelativeTime/>" */
  'status-bar.publish-status-button.last-updated-time.tooltip':
    'Viimeksi päivitetty <RelativeTime/>',
  /** Aria label for the button */
  'status-bar.review-changes-button.aria-label': 'Tarkastele muutoksia',
  /** Label for button when status is saved */
  'status-bar.review-changes-button.status.saved.text': 'Tallennettu!',
  /** Label for button when status is syncing */
  'status-bar.review-changes-button.status.syncing.text': 'Tallennetaan...',
  /** Text for the secondary text for tooltip for the button */
  'status-bar.review-changes-button.tooltip.changes-saved': 'Muutokset tallennettu',
  /** Primary text for tooltip for the button */
  'status-bar.review-changes-button.tooltip.text': 'Tarkastele muutoksia',

  /** The text that appears in side the documentation link */
  'structure-error.docs-link.text': 'Näytä dokumentaatio',
  /** Labels the error message or error stack of the structure error screen */
  'structure-error.error.label': 'Virhe',
  /** The header that appears at the top of the error screen */
  'structure-error.header.text': 'Rakenteen lukemisessa havaittiin virhe',
  /** The text in the reload button to retry rendering the structure */
  'structure-error.reload-button.text': 'Lataa uudelleen',
  /** Labels the structure path of the structure error screen */
  'structure-error.structure-path.label': 'Rakenteen polku',

  /** The aria label for the menu button in the timeline item */
  'timeline-item.menu-button.aria-label': 'Avaa toimintovalikko',
  /** The text for the tooltip in menu button the timeline item */
  'timeline-item.menu-button.tooltip': 'Toiminnot',
  /** The text for the collapse action in the timeline item menu */
  'timeline-item.menu.action-collapse': 'Tiivistä',
  /** The text for the expand action in the timeline item menu */
  'timeline-item.menu.action-expand': 'Laajenna',
})
