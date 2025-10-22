import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Label for the "Copy Document URL" document action */
  'action.copy-document-url.label': 'Dokumentum URL másolása',
  /** Tooltip when action button is disabled because the operation is not ready   */
  'action.delete.disabled.not-ready': 'A művelet még nincs kész',
  /** Tooltip when action button is disabled because the document does not exist */
  'action.delete.disabled.nothing-to-delete':
    'Ez a dokumentum még nem létezik vagy már törölve lett',
  /** Label for the "Delete" document action button */
  'action.delete.label': 'Törlés',
  /** Label for the "Delete" document action while the document is being deleted */
  'action.delete.running.label': 'Törlés…',
  /** Tooltip when action is disabled because the document is linked to Canvas */
  'action.disabled-by-canvas.tooltip':
    'Egyes dokumentum műveletek le vannak tiltva a Canvas-hoz kapcsolt dokumentumok esetében',
  /** Message prompting the user to confirm discarding changes */
  'action.discard-changes.confirm-dialog.confirm-discard-changes':
    'Biztosan el akarod vetni az összes változtatást az utolsó közzététel óta?',
  /** Tooltip when action is disabled because the document has no unpublished changes */
  'action.discard-changes.disabled.no-change':
    'Ennek a dokumentumnak nincsenek közzé nem tett változásai',
  /** Tooltip when action is disabled because the document is not published */
  'action.discard-changes.disabled.not-published': 'Ez a dokumentum nincs közzétéve',
  /** Tooltip when action button is disabled because the operation is not ready   */
  'action.discard-changes.disabled.not-ready': 'A művelet még nem kész',
  /** Label for the "Discard changes" document action */
  'action.discard-changes.label': 'Változtatások elvetése',
  /** Tooltip when action is disabled because the operation is not ready   */
  'action.duplicate.disabled.not-ready': 'A művelet még nem kész',
  /** Tooltip when action is disabled because the document doesn't exist */
  'action.duplicate.disabled.nothing-to-duplicate':
    'Ez a dokumentum még nem létezik, így nincs mit duplikálni',
  /** Label for the "Duplicate" document action */
  'action.duplicate.label': 'Duplikálás',
  /** Label for the "Duplicate" document action while the document is being duplicated */
  'action.duplicate.running.label': 'Duplikálás…',
  /** Tooltip when publish button is disabled because the document is already published, and published time is unavailable.*/
  'action.publish.already-published.no-time-ago.tooltip': 'Már közzétéve',
  /** Tooltip when publish button is disabled because the document is already published.*/
  'action.publish.already-published.tooltip': 'Közzétéve {{timeSincePublished}} óta',
  /** Tooltip when action is disabled because the studio is not ready.*/
  'action.publish.disabled.not-ready': 'A művelet még nem kész',
  /** Label for action when there are pending changes.*/
  'action.publish.draft.label': 'Közzététel',
  /** Label for the "Publish" document action */
  'action.publish.label': 'Közzététel',
  /** Label for the "Publish" document action when the document has live edit enabled.*/
  'action.publish.live-edit.label': 'Közzététel',
  /** Fallback tooltip for the "Publish" document action when publish is invoked for a document with live edit enabled.*/
  'action.publish.live-edit.publish-disabled':
    'Nem lehet közzétenni, mivel a Live Edit engedélyezve van ehhez a dokumentumtípushoz',
  /** Tooltip for the "Publish" document action when the document has live edit enabled.*/
  'action.publish.live-edit.tooltip':
    'A Live Edit engedélyezve van ehhez a tartalomtípushoz, és a közzététel automatikusan megtörténik, ahogy változtatásokat végez',
  /** Tooltip when publish button is disabled because there are no changes.*/
  'action.publish.no-changes.tooltip': 'Nincsenek közzé nem tett változások',
  /** Label for the "Publish" document action when there are no changes.*/
  'action.publish.published.label': 'Közzétéve',
  /** Label for the "Publish" document action while publish is being executed.*/
  'action.publish.running.label': 'Közzététel…',
  /** Tooltip when the "Publish" document action is disabled due to validation issues */
  'action.publish.validation-issues.tooltip':
    'Vannak érvényességi hibák, amelyeket ki kell javítani, mielőtt ez a dokumentum közzétehető',
  /** Tooltip when publish button is waiting for validation and async tasks to complete.*/
  'action.publish.waiting': 'Várakozás a feladatok befejezésére a közzététel előtt',
  /** Message prompting the user to confirm that they want to restore to an earlier revision*/
  'action.restore.confirm.message': 'Biztosan vissza szeretnéd állítani ezt a dokumentumot?',
  /** Fallback tooltip for when user is looking at the initial revision */
  'action.restore.disabled.cannot-restore-initial': 'Nem állítható vissza az eredeti verzióra',
  /** Label for the "Restore" document action */
  'action.restore.label': 'Visszaállítás',
  /** Default tooltip for the action */
  'action.restore.tooltip': 'Visszaállítás erre a verzióra',
  /** Tooltip when action is disabled because the document is not already published */
  'action.unpublish.disabled.not-published': 'Ez a dokumentum nincs közzétéve',
  /** Tooltip when action is disabled because the operation is not ready   */
  'action.unpublish.disabled.not-ready': 'A művelet nem kész',
  /** Label for the "Unpublish" document action */
  'action.unpublish.label': 'Közzététel visszavonása',
  /** Fallback tooltip for the Unpublish document action when publish is invoked for a document with live edit enabled.*/
  'action.unpublish.live-edit.disabled':
    'Ez a dokumentum élő szerkesztésre van beállítva és nem vonható vissza',

  /** Description for the archived release banner, rendered when viewing the history of a version document from the publihed view */
  'banners.archived-release.description':
    'Ön egy csak olvasható dokumentumot tekint meg, amely archiválásra került a <VersionBadge>{{title}}</VersionBadge> részeként. Nem szerkeszthető',
  /** Description for the archived scheduled draft banner, rendered when viewing the history of a cardinality one release document */
  'banners.archived-scheduled-draft.description': undefined, // 'This scheduled draft is archived'
  /** The explanation displayed when a user attempts to create a new draft document, but the draft model is not switched on */
  'banners.choose-new-document-destination.cannot-create-draft-document':
    'Nem lehet vázlatdokumentumot létrehozni.',
  /** The explanation displayed when a user attempts to create a new published document, but the schema type doesn't support live-editing */
  'banners.choose-new-document-destination.cannot-create-published-document':
    'Nem lehet közzétett dokumentumot létrehozni.',
  /** The prompt displayed when a user must select a different perspective in order to create a document */
  'banners.choose-new-document-destination.choose-destination':
    'Válasszon célt ennek a dokumentumnak:',
  /** The explanation displayed when a user attempts to create a new document in a release, but the selected release is inactive */
  'banners.choose-new-document-destination.release-inactive':
    'A <VersionBadge>{{title}}</VersionBadge> kiadás nem aktív.',
  /** The text for the restore button on the deleted document banner */
  'banners.deleted-document-banner.restore-button.text': 'Legutóbbi verzió visszaállítása',
  /** The text content for the deleted document banner */
  'banners.deleted-document-banner.text': 'Ez a dokumentum törölve lett.',
  /** The text content for the deprecated document type banner */
  'banners.deprecated-document-type-banner.text': 'Ez a dokumentumtípus elavult.',
  /** The text for publish action for discarding the version */
  'banners.live-edit-draft-banner.discard.tooltip': 'Piszkozat elvetése',
  /** The text for publish action for the draft banner */
  'banners.live-edit-draft-banner.publish.tooltip': 'Közzététel a szerkesztés folytatásához',
  /** The text content for the live edit document when it's a draft */
  'banners.live-edit-draft-banner.text':
    'A(z) <strong>{{schemaType}}</strong> típusnál engedélyezve van a <code>liveEdit</code>, de ennek a dokumentumnak létezik egy piszkozat változata. A valós idejű szerkesztés folytatásához közzé kell tenni vagy el kell vetni a piszkozatot.',
  /** The label for the "compare draft" action */
  'banners.obsolete-draft.actions.compare-draft.text': 'Vázlat összehasonlítása',
  /** The label for the "discard draft" action */
  'banners.obsolete-draft.actions.discard-draft.text': 'Vázlat elvetése',
  /** The label for the "publish draft" action */
  'banners.obsolete-draft.actions.publish-draft.text': 'Vázlat közzététele',
  /** The warning displayed when editing a document that has an obsolete draft because the draft model is not switched on */
  'banners.obsolete-draft.draft-model-inactive.text':
    'A munkaterület nem engedélyezi a vázlatokat, de ennek a dokumentumnak létezik egy vázlat verziója.',
  /** The text for the permission check banner if the user only has one role, and it does not allow publishing this document */
  'banners.permission-check-banner.missing-permission_create_one':
    'A szerepköröd <Roles/> nem rendelkezik jogosultsággal a dokumentum létrehozására.',
  /** The text for the permission check banner if the user only has multiple roles, but they do not allow publishing this document */
  'banners.permission-check-banner.missing-permission_create_other':
    'A szerepköreid <Roles/> nem rendelkeznek jogosultsággal a dokumentum létrehozására.',
  /** The text for the permission check banner if the user only has one role, and it does not allow editing this document */
  'banners.permission-check-banner.missing-permission_update_one':
    'A szerepköreid <Roles/> nem rendelkezik jogosultsággal a dokumentum frissítésére.',
  /** The text for the permission check banner if the user only has multiple roles, but they do not allow editing this document */
  'banners.permission-check-banner.missing-permission_update_other':
    'A szerepköreid <Roles/> nem rendelkeznek jogosultsággal a dokumentum frissítésére.',
  /** The pending text for the request permission button that appears for viewer roles */
  'banners.permission-check-banner.request-permission-button.sent': 'Szerkesztői kérelem elküldve',
  /** The text for the request permission button that appears for viewer roles */
  'banners.permission-check-banner.request-permission-button.text': 'Szerkesztési jog kérése',
  /** Description for the archived release banner, rendered when viewing the history of a version document from the published view */
  'banners.published-release.description':
    'Ön egy csak olvasható dokumentumot tekint meg, amelyet közzétettek a <VersionBadge>{{title}}</VersionBadge> részeként. Nem szerkeszthető',
  /** The text for the reload button */
  'banners.reference-changed-banner.reason-changed.reload-button.text': 'Hivatkozás újratöltése',
  /** The text for the reference change banner if the reason is that the reference has been changed */
  'banners.reference-changed-banner.reason-changed.text':
    'Ez a hivatkozás megváltozott, mióta megnyitottad.',
  /** The text for the close button */
  'banners.reference-changed-banner.reason-removed.close-button.text': 'Hivatkozás bezárása',
  /** The text for the reference change banner if the reason is that the reference has been deleted */
  'banners.reference-changed-banner.reason-removed.text':
    'Ez a hivatkozás eltávolításra került, mióta megnyitottad.',
  /** The text that appears for the action button to add the current document to the global release */
  'banners.release.action.add-to-release': 'Hozzáadás a kiadáshoz',
  /** The text that appears for the action button to add the current document to the global release */
  'banners.release.action.open-to-edit': 'Nyissa meg a kiadást szerkesztésre',
  /** Toast description in case an error occurs when adding a document to a release  */
  'banners.release.error.description':
    'Hiba történt a dokumentum hozzáadásakor a kiadáshoz: {{message}}',
  /** Toast title in case an error occurs when adding a document to a release  */
  'banners.release.error.title': 'Hiba a dokumentum hozzáadásakor a kiadáshoz',
  /** The text for the banner that appears when a document only has versions but is in a draft or published pinned release */
  'banners.release.navigate-to-edit-description': 'A dokumentum csak a',
  /** The text for the banner that appears when a document only has versions but is in a draft or published pinned release */
  'banners.release.navigate-to-edit-description-end_one': 'kiadásban',
  /** The text for the banner that appears when a document only has versions but is in a draft or published pinned release */
  'banners.release.navigate-to-edit-description-end_other': 'kiadásokban',
  /** The text for the banner that appears when there are multiple versions but no drafts or published, only one extra releases */
  'banners.release.navigate-to-edit-description-multiple_one':
    'Ez a dokumentum a <VersionBadge/> kiadás része és még {{count}} további kiadás.',
  /** The text for the banner that appears when there are multiple versions but no drafts or published, more than one extra releases */
  'banners.release.navigate-to-edit-description-multiple_other':
    'Ez a dokumentum a <VersionBadge/> kiadás része és még {{count}} további kiadások.',
  /** The text for the banner that appears when a document only has one version but is in a draft or published pinned release */
  'banners.release.navigate-to-edit-description-single':
    'Ez a dokumentum a <VersionBadge/> kiadás része',
  /** The text for the banner that appears when a document is not in the current global release */
  'banners.release.not-in-release': 'Nincs a <VersionBadge>{{title}}</VersionBadge> kiadásban.',
  /** Description of toast that will appear in case of latency between the user adding a document to a release and the UI reflecting it */
  'banners.release.waiting.description':
    'Kérjük, várjon, amíg a dokumentum hozzáadódik a kiadáshoz. Nem kellene tovább tartania néhány másodpercnél.',
  /** Title of toast that will appear in case of latency between the user adding a document to a release and the UI reflecting it */
  'banners.release.waiting.title': 'Dokumentum hozzáadása a kiadáshoz…',
  /** The text for the revision not found banner */
  'banners.revision-not-found.description':
    'Nem találjuk a kiválasztott dokumentum revízióját, kérjük, válasszon egy másik bejegyzést a történet listából.',
  /** The text content for the scheduled draft override banner */
  'banners.scheduled-draft-override-banner.text': undefined, // 'This document\'s draft is already scheduled for publish. Changes you make here may be overridden by that version.'
  /** The text content for the unpublished document banner when is part of a release */
  'banners.unpublished-release-banner.text':
    'Ez a dokumentum a <VersionBadge>{{title}}</VersionBadge> kiadás részeként lesz közzé nem téve',
  /** The text content for the unpublished document banner letting the user know that the current published version is being shown */
  'banners.unpublished-release-banner.text-with-published':
    'A jelenlegi <strong>közzétett</strong> verzió megjelenítése:',

  /** Browser/tab title when creating a new document of a given type */
  'browser-document-title.new-document': 'Új {{schemaType}}',
  /** Browser/tab title when editing a document where the title cannot be resolved from preview configuration */
  'browser-document-title.untitled-document': 'Cím nélküli',

  /** The action menu button aria-label */
  'buttons.action-menu-button.aria-label': 'Dokumentum műveletek megnyitása',
  /** The action menu button tooltip */
  'buttons.action-menu-button.tooltip': 'Dokumentum műveletek',
  /** The aria-label for the split pane button on the document panel header */
  'buttons.split-pane-button.aria-label': 'Jobbra osztott panel',
  /** The tool tip for the split pane button on the document panel header */
  'buttons.split-pane-button.tooltip': 'Jobbra osztott panel',
  /** The title for the close button on the split pane on the document panel header */
  'buttons.split-pane-close-button.title': 'Osztott panel bezárása',
  /** The title for the close group button on the split pane on the document panel header */
  'buttons.split-pane-close-group-button.title': 'Panelcsoport bezárása',

  /** The text for the canvas linked banner action button */
  'canvas.banner.edit-in-canvas-action': 'Szerkesztés a Canvas-ban',
  /** The text for the canvas linked banner when the document is a draft */
  'canvas.banner.linked-text.draft': 'Ez a vázlat dokumentum a Canvas-hoz van kapcsolva',
  /** The text for the canvas linked banner when the document is a live document */
  'canvas.banner.linked-text.published': 'Ez a közzétett dokumentum a Canvas-hoz van kapcsolva',
  /** The text for the canvas linked banner when the document is a version document */
  'canvas.banner.linked-text.version': 'Ez a verzió dokumentum a Canvas-hoz van kapcsolva',
  /** The text for the canvas linked banner popover button */
  'canvas.banner.popover-button-text': 'Tudj meg többet',
  /** The description for the canvas linked banner popover */
  'canvas.banner.popover-description':
    'A Canvas lehetővé teszi a szabad formátumú szerkesztőben történő szerzői munkát, amely automatikusan visszatérképezi a szerkezetbe foglalt tartalmat a Stúdióba, miközben gépel.',
  /** The heading for the canvas linked banner popover */
  'canvas.banner.popover-heading': 'Az ötlet első szerzője',

  /** The description for the changes banner */
  'changes.banner.description':
    'A dokumentum <strong>{{perspective}}</strong> verziójának történetét mutatja.',
  /** The tooltip for the changes banner */
  'changes.banner.tooltip':
    'Ez a nézet a dokumentum egy adott verziójában bekövetkezett változásokat mutatja. Válasszon egy másik verziót a változások megtekintéséhez',
  /** The label used in the changes inspector for the from selector */
  'changes.from.label': 'Honnan',
  /* The label for the history tab in the changes inspector*/
  'changes.tab.history': 'Előzmények',
  /* The label for the review tab in the changes inspector*/
  'changes.tab.review-changes': 'Változások áttekintése',
  /** The label used in the changes inspector for the to selector */
  'changes.to.label': 'Hová',

  /** The error message shown when the specified document comparison mode is not supported */
  'compare-version.error.invalidModeParam':
    '"{{input}}" nem támogatott dokumentum-összehasonlítási mód.',
  /** The error message shown when the next document for comparison could not be extracted from the URL */
  'compare-version.error.invalidNextDocumentParam':
    'A következő dokumentum paramétere érvénytelen.',
  /** The error message shown when the document comparison URL could not be parsed */
  'compare-version.error.invalidParams.title': 'A dokumentumok összehasonlítása nem lehetséges',
  /** The error message shown when the previous document for comparison could not be extracted from the URL */
  'compare-version.error.invalidPreviousDocumentParam':
    'Az előző dokumentum paramétere érvénytelen.',

  /** The text for the tooltip when the "Compare versions" action for a document is disabled */
  'compare-versions.menu-item.disabled-reason':
    'Nincsenek más verziói ennek a dokumentumnak az összehasonlításhoz.',
  /** The text for the "Compare versions" action for a document */
  'compare-versions.menu-item.title': 'Változatok összehasonlítása',
  /** The string used to label draft documents */
  'compare-versions.status.draft': 'Vázlat',
  /** The string used to label published documents */
  'compare-versions.status.published': 'Közzétéve',
  /** The title used when comparing versions of a document */
  'compare-versions.title': 'Változatok összehasonlítása',

  /** The text in the "Cancel" button in the confirm delete dialog that cancels the action and closes the dialog */
  'confirm-delete-dialog.cancel-button.text': 'Mégse',
  /** Used in `confirm-delete-dialog.cdr-summary.title` */
  'confirm-delete-dialog.cdr-summary.document-count_one': '1 dokumentum',
  /** Used in `confirm-delete-dialog.cdr-summary.title` */
  'confirm-delete-dialog.cdr-summary.document-count_other': '{{count}} dokumentum',
  /** The text that appears in the subtitle `<summary>` that lists the datasets below the title */
  'confirm-delete-dialog.cdr-summary.subtitle_one': 'Dataset: {{datasets}}',
  /** The text that appears in the subtitle `<summary>` that lists the datasets below the title */
  'confirm-delete-dialog.cdr-summary.subtitle_other': 'Datasets: {{datasets}}',
  /** The text that appears in the subtitle `<summary>` that lists the datasets below the title */
  'confirm-delete-dialog.cdr-summary.subtitle_unavailable_one': 'Elérhetetlen dataset',
  /** The text that appears in the subtitle `<summary>` that lists the datasets below the title */
  'confirm-delete-dialog.cdr-summary.subtitle_unavailable_other': 'Elérhetetlen datasets',
  /** The text that appears in the title `<summary>` that includes the list of CDRs (singular) */
  'confirm-delete-dialog.cdr-summary.title_one': '{{documentCount}} egy másik datasetben',
  /** The text that appears in the title `<summary>` that includes the list of CDRs (plural) */
  'confirm-delete-dialog.cdr-summary.title_other': '{{documentCount}} {{count}} datasetben',
  /** Appears when hovering over the copy button to copy */
  'confirm-delete-dialog.cdr-table.copy-id-button.tooltip': 'Azonosító másolása a vágólapra',
  /** The header for the dataset column in the list of cross-dataset references found */
  'confirm-delete-dialog.cdr-table.dataset.label': 'Dataset',
  /** The header for the document ID column in the list of cross-dataset references found */
  'confirm-delete-dialog.cdr-table.document-id.label': 'Dokumentum azonosító',
  /** The toast title when the copy button has been clicked but copying failed */
  'confirm-delete-dialog.cdr-table.id-copied-toast.title-failed':
    'Nem sikerült a dokumentumazonosító másolása',
  /** The header for the project ID column in the list of cross-dataset references found */
  'confirm-delete-dialog.cdr-table.project-id.label': 'Projekt azonosító',
  /** The text in the "Delete anyway" button in the confirm delete dialog that confirms the action */
  'confirm-delete-dialog.confirm-anyway-button.text_delete': 'Mégis töröl',
  /** The text in the "Unpublish anyway" button in the confirm delete dialog that confirms the action */
  'confirm-delete-dialog.confirm-anyway-button.text_unpublish': 'Mégis visszavon',
  /** The text in the "Delete now" button in the confirm delete dialog that confirms the action */
  'confirm-delete-dialog.confirm-button.text_delete': 'Törlés most',
  /** The text in the "Unpublish now" button in the confirm delete dialog that confirms the action */
  'confirm-delete-dialog.confirm-button.text_unpublish': 'Visszavonás most',
  /** If no referring documents are found, this text appears above the cancel and confirmation buttons */
  'confirm-delete-dialog.confirmation.text_delete':
    'Biztosan törölni szeretnéd a(z) “<DocumentTitle/>” dokumentumot?',
  /** If no referring documents are found, this text appears above the cancel and confirmation buttons */
  'confirm-delete-dialog.confirmation.text_unpublish':
    'Biztosan vissza szeretnéd vonni a(z) “<DocumentTitle/>” dokumentumot?',
  /** The text body of the error dialog. */
  'confirm-delete-dialog.error.message.text':
    'Hiba történt a hivatkozó dokumentumok betöltése közben.',
  /** The text in the retry button of the confirm delete dialog if an error occurred. */
  'confirm-delete-dialog.error.retry-button.text': 'Újrapróbál',
  /** The header of the confirm delete dialog if an error occurred while the confirm delete dialog was open. */
  'confirm-delete-dialog.error.title.text': 'Hiba',
  /** The header of the confirm delete dialog */
  'confirm-delete-dialog.header.text_delete': 'Dokumentum törlése?',
  /** The header of the confirm delete dialog */
  'confirm-delete-dialog.header.text_unpublish': 'Dokumentum visszavonása?',
  /** The text that appears while the referring documents are queried */
  'confirm-delete-dialog.loading.text': 'Hivatkozó dokumentumok keresése…',
  /** Shown if there are references to other documents but the user does not have the permission to see the relevant document IDs */
  'confirm-delete-dialog.other-reference-count.title_one': '1 másik, meg nem jelenített hivatkozás',
  /** Shown if there are references to other documents but the user does not have the permission to see the relevant document IDs */
  'confirm-delete-dialog.other-reference-count.title_other':
    '{{count}} másik, meg nem jelenített hivatkozás',
  /** Text in the tooltip of this component if hovering over the info icon */
  'confirm-delete-dialog.other-reference-count.tooltip':
    'Nem tudjuk megjeleníteni ezeknek a hivatkozásoknak a metaadatait, mert hiányzik a hozzáférési token a kapcsolódó adatkészletekhez.',
  /** Appears when unable to render a document preview in the referring document list */
  'confirm-delete-dialog.preview-item.preview-unavailable.subtitle': 'Azonosító: {{documentId}}',
  /** Appears when unable to render a document preview in the referring document list */
  'confirm-delete-dialog.preview-item.preview-unavailable.title': 'Előnézet nem elérhető',
  /** Warns the user of affects to other documents if the action is confirmed (delete) */
  'confirm-delete-dialog.referential-integrity-disclaimer.text_delete':
    'Ha törli ezt a dokumentumot, a hivatkozó dokumentumok már nem férnek hozzá.',
  /** Warns the user of affects to other documents if the action is confirmed (unpublish) */
  'confirm-delete-dialog.referential-integrity-disclaimer.text_unpublish':
    'Ha leveszi a közzétételt erről a dokumentumról, a hivatkozó dokumentumok már nem férnek hozzá.',
  /** Tells the user the count of how many other referring documents there are before listing them. (singular) */
  'confirm-delete-dialog.referring-document-count.text_one':
    '1 dokumentum hivatkozik a(z) „<DocumentTitle/>” dokumentumra',
  /** Tells the user the count of how many other referring documents there are before listing them. (plural) */
  'confirm-delete-dialog.referring-document-count.text_other':
    '{{count}} dokumentum hivatkozik a(z) „<DocumentTitle/>” dokumentumra',
  /** Describes the list of documents that refer to the one trying to be deleted (delete) */
  'confirm-delete-dialog.referring-documents-descriptor.text_delete':
    'Lehet, hogy nem tudod törölni a(z) „<DocumentTitle/>” dokumentumot, mert a következő dokumentumok hivatkoznak rá:',
  /** Describes the list of documents that refer to the one trying to be deleted (unpublish) */
  'confirm-delete-dialog.referring-documents-descriptor.text_unpublish':
    'Lehet, hogy nem tudod leveszi a közzétételt a(z) „<DocumentTitle/>” dokumentumról, mert a következő dokumentumok hivatkoznak rá:',

  /** The text for the cancel button in the confirm dialog used in document action shortcuts if none is provided */
  'confirm-dialog.cancel-button.fallback-text': 'Mégse',
  /** The text for the confirm button in the confirm dialog used in document action shortcuts if none is provided */
  'confirm-dialog.confirm-button.fallback-text': 'Megerősít',

  /** For the default structure definition, the title for the "Content" pane */
  'default-definition.content-title': 'Tartalom',

  /** The text shown if there was an error while getting the document's title via a preview value */
  'doc-title.error.text': 'Hiba: {{errorMessage}}',
  /** The text shown if the preview value for a document is non-existent or empty */
  'doc-title.fallback.text': 'Cím nélkül',
  /** The text shown if a document's title via a preview value cannot be determined due to an unknown schema type */
  'doc-title.unknown-schema-type.text': 'Ismeretlen sémátípus: {{schemaType}}',

  /** Tooltip text shown for the close button of the document inspector */
  'document-inspector.close-button.tooltip': 'Bezárás',
  /** The title shown in the dialog header, when inspecting a valid document */
  'document-inspector.dialog.title': '<DocumentTitle/> megtekintése',
  /** The title shown in the dialog header, when the document being inspected is not created yet/has no value */
  'document-inspector.dialog.title-no-value': 'Nincs érték',
  /** Title shown for menu item that opens the "Inspect" dialog */
  'document-inspector.menu-item.title': 'Megtekintés',
  /** the placeholder text for the search input on the inspect dialog */
  'document-inspector.search.placeholder': 'Keresés',
  /** The "parsed" view mode, meaning the JSON is searchable, collapsible etc */
  'document-inspector.view-mode.parsed': 'Elemzett',
  /** The "raw" view mode, meaning the JSON is presented syntax-highlighted, but with no other features - optimal for copying */
  'document-inspector.view-mode.raw-json': 'Nyers JSON',

  /** The text for when a form is hidden */
  'document-view.form-view.form-hidden': 'Ez az űrlap rejtett',
  /** Fallback title shown when a form title is not provided */
  'document-view.form-view.form-title-fallback': 'Cím nélkül',
  /** The text for when the form view is loading a document */
  'document-view.form-view.loading': 'Dokumentum betöltése…',
  /** The description of the sync lock toast on the form view */
  'document-view.form-view.sync-lock-toast.description':
    'Kérjük, várj, amíg a dokumentum szinkronizálódik. Ez általában közvetlenül a dokumentum közzététele után történik, és nem kellene többet igénybe vennie néhány másodpercnél',
  /** The title of the sync lock toast on the form view */
  'document-view.form-view.sync-lock-toast.title': 'Dokumentum szinkronizálása…',

  /** The description for the document favorite action */
  'document.favorites.add-to-favorites': 'Hozzáadás a kedvencekhez',
  /** The description for the document unfavorite action */
  'document.favorites.remove-from-favorites': 'Eltávolítás a kedvencekből',

  /** The description for the events inspector when we can't load the document so we default to compare with published */
  'events.compare-with-published.description':
    'Nem tudjuk betölteni a dokumentum változásait, valószínűleg a tervek történetmegőrzési szabályzata miatt, ez megmutatja, hogyan hasonlít az <strong>{{version}}</strong> verzió a <strong>publikált</strong> verzióhoz.',
  /** The title for the events inspector when we can't load the document so we default to compare with published */
  'events.compare-with-published.title': 'Összehasonlítás a publikált verzióval',
  /**The title for the menu items that will be shown when expanding a publish release event to inspect the document */
  'events.inspect.release':
    'A <VersionBadge>{{releaseTitle}}</VersionBadge> dokumentum megtekintése',
  /**The title for the menu items that will be shown when expanding a publish draft event to inspect the draft document*/
  'events.open.draft': 'A <VersionBadge>piszkozat</VersionBadge> dokumentum megnyitása',
  /**The title for the menu items that will be shown when expanding a publish release event to inspect the release*/
  'events.open.release': 'A <VersionBadge>{{releaseTitle}}</VersionBadge> kiadás megnyitása',

  /** The loading messaging for when the tooltip is still loading permission info */
  'insufficient-permissions-message-tooltip.loading-text': 'Betöltés…',

  /** --- Menu items --- */
  /** The menu item group title to use for the Action menu items */
  'menu-item-groups.actions-group': 'Műveletek',
  /** The menu item group title to use for the Layout menu items */
  'menu-item-groups.layout-group': 'Elrendezés',
  /** The menu item group title to use for the Sort menu items */
  'menu-item-groups.sorting-group': 'Rendezés',

  /** The menu item title to use the compact view */
  'menu-items.layout.compact-view': 'Tömör nézet',
  /** The menu item title to use the detailed view */
  'menu-items.layout.detailed-view': 'Részletes nézet',
  /** The menu item title to Sort by Created */
  'menu-items.sort-by.created': 'Rendezés létrehozás szerint',
  /** The menu item title to Sort by Last Edited */
  'menu-items.sort-by.last-edited': 'Rendezés utoljára szerkesztett szerint',

  /** The link text of the no document type screen that appears directly below the subtitle */
  'no-document-types-screen.link-text': 'Tudj meg többet a dokumentumtípus hozzáadásáról →',
  /** The subtitle of the no document type screen that appears directly below the title */
  'no-document-types-screen.subtitle':
    'Kérjük, definiálj legalább egy dokumentumtípust a sémájában.',
  /** The title of the no document type screen */
  'no-document-types-screen.title': 'Nincsenek dokumentumtípusok',

  /** Text shown on back button visible on smaller breakpoints */
  'pane-header.back-button.text': 'Vissza',
  /** tooltip text (via `title` attribute) for the menu button */
  'pane-header.context-menu-button.tooltip': 'Menü megjelenítése',
  /** Appears in a document list pane header if there are more than one option for create. This is the label for that menu */
  'pane-header.create-menu.label': 'Létrehozás',
  /** Tooltip displayed on the create new button in document lists */
  'pane-header.create-new-button.tooltip': 'Új dokumentum létrehozása',
  /** The `aria-label` for the disabled button in the pane header if create permissions are granted */
  'pane-header.disabled-created-button.aria-label': 'Nem elegendő jogosultság',

  /** The text shown in the tooltip of pane item previews of documents if there are unpublished edits */
  'pane-item.draft-status.has-draft.tooltip': 'Szerkesztve <RelativeTime/>',
  /** The text shown in the tooltip of pane item previews of documents if there are no unpublished edits */
  'pane-item.draft-status.no-draft.tooltip': 'Nincsenek közzé nem tett szerkesztések',
  /** The subtitle tor pane item previews if there isn't a matching schema type found */
  'pane-item.missing-schema-type.subtitle': 'Dokumentum: <Code>{{documentId}}</Code>',
  /** The title tor pane item previews if there isn't a matching schema type found */
  'pane-item.missing-schema-type.title':
    'Nincs séma található a következő típushoz: <Code>{{documentType}}</Code>',
  /** The text shown in the tooltip of pane item previews of documents if there are unpublished edits */
  'pane-item.published-status.has-published.tooltip': 'Közzétéve <RelativeTime/>',
  /** The text shown in the tooltip of pane item previews of documents if there are no unpublished edits */
  'pane-item.published-status.no-published.tooltip': 'Nincsenek közzé nem tett szerkesztések',

  /** The text used in the document header title if there is an error */
  'panes.document-header-title.error.text': 'Hiba: {{error}}',
  /** The text used in the document header title if creating a new item */
  'panes.document-header-title.new.text': 'Új {{schemaType}}',
  /** The text used in the document header title if no other title can be determined */
  'panes.document-header-title.untitled.text': 'Cím nélkül',
  /** The help text saying that we'll retry fetching the document list */
  'panes.document-list-pane.error.retrying': 'Újrapróbálkozás…',
  /** The error text on the document list pane */
  'panes.document-list-pane.error.text': 'Hiba: <Code>{{error}}</Code>',
  /** The error text on the document list pane */
  'panes.document-list-pane.error.text.dev': 'Hiba: <Code>{{error}}</Code>',
  /** The error text on the document list pane if the browser appears to be offlline */
  'panes.document-list-pane.error.text.offline': 'Az internetkapcsolat offline-nak tűnik.',
  /** The error title on the document list pane */
  'panes.document-list-pane.error.title': 'Nem sikerült a lista elemeket betölteni',
  /** The help text saying that we'll retry fetching the document list */
  'panes.document-list-pane.error.will-retry-automatically_one': 'Újrapróbálkozás…',
  'panes.document-list-pane.error.will-retry-automatically_other': 'Újrapróbálkozás… (#{{count}}).',
  /** The text of the document list pane if more than a maximum number of documents are returned */
  'panes.document-list-pane.max-items.text': 'Maximum {{limit}} dokumentum megjelenítése',
  /** The text of the document list pane if no documents are found for a specified type */
  'panes.document-list-pane.no-documents-of-type.text': 'Nincsenek ilyen típusú dokumentumok',
  /** The text of the document list pane if no documents are found */
  'panes.document-list-pane.no-documents.text': 'Nincs találat',
  /** The text of the document list pane if no documents are found matching specified criteria */
  'panes.document-list-pane.no-matching-documents.text': 'Nincsenek egyező dokumentumok',
  /** The search input for the search input on the document list pane */
  'panes.document-list-pane.reconnecting': 'Kapcsolódás megkísérlése…',
  /** The aria-label for the search input on the document list pane */
  'panes.document-list-pane.search-input.aria-label': 'Lista keresése',
  /** The search input for the search input on the document list pane */
  'panes.document-list-pane.search-input.placeholder': 'Lista keresése',
  /** The summary title when displaying an error for a document operation result */
  'panes.document-operation-results.error.summary.title': 'Részletek',
  /** The text when a generic operation failed (fallback, generally not shown)  */
  'panes.document-operation-results.operation-error': 'Hiba történt a {{context}} során',
  /** The text when a delete operation failed  */
  'panes.document-operation-results.operation-error_delete':
    'Hiba történt a dokumentum törlése közben. Ez általában azt jelenti, hogy más dokumentumok hivatkoznak rá.',
  /** The text when an unpublish operation failed  */
  'panes.document-operation-results.operation-error_unpublish':
    'Hiba történt a dokumentum közzétételének megszüntetése közben. Ez általában azt jelenti, hogy más dokumentumok hivatkoznak rá.',
  /** The text when a generic operation succeeded (fallback, generally not shown)  */
  'panes.document-operation-results.operation-success':
    'Sikeresen végrehajtott {{context}} a dokumentumon',
  /** The text when copy URL operation succeeded  */
  'panes.document-operation-results.operation-success_copy-url':
    'A dokumentum URL másolva a vágólapra',
  /**  */
  'panes.document-operation-results.operation-success_createVersion':
    '<Strong>{{title}}</Strong> hozzáadva a kiadáshoz',
  /** The text when a delete operation succeeded  */
  'panes.document-operation-results.operation-success_delete': 'A dokumentum sikeresen törölve',
  /** The text when a discard changes operation succeeded  */
  'panes.document-operation-results.operation-success_discardChanges':
    'Az utolsó közzététel óta végzett összes változtatás elvetésre került. Az elvetett vázlat még visszaállítható a történetből',
  /** The text when a duplicate operation succeeded  */
  'panes.document-operation-results.operation-success_duplicate':
    'A dokumentum sikeresen duplikálva lett',
  /** The text when a publish operation succeeded  */
  'panes.document-operation-results.operation-success_publish': 'A dokumentum közzétéve',
  /** The text when a restore operation succeeded  */
  'panes.document-operation-results.operation-success_restore':
    '<Strong>{{title}}</Strong> visszaállítása megtörtént',
  /** The text when an unpublish operation succeeded  */
  'panes.document-operation-results.operation-success_unpublish':
    'A dokumentum közzétételét megszüntették. A legutóbbi közzétett verzióból vázlat készült.',
  /** The document title shown when document title is "undefined" in operation message */
  'panes.document-operation-results.operation-undefined-title': 'Cím nélkül',
  /** The loading message for the document not found pane */
  'panes.document-pane.document-not-found.loading': 'Dokumentum betöltése…',
  /** The text of the document not found pane if the schema is known */
  'panes.document-pane.document-not-found.text':
    'A dokumentum típusa nincs meghatározva, és a <Code>{{id}}</Code> azonosítóval rendelkező dokumentum nem található.',
  /** The title of the document not found pane if the schema is known */
  'panes.document-pane.document-not-found.title': 'A dokumentum nem található',
  /** The text of the document not found pane if the schema is not found */
  'panes.document-pane.document-unknown-type.text':
    'Ennek a dokumentumnak a sémája <Code>{{documentType}}</Code>, amely nincs definiálva típusként a helyi tartalomstúdió sémájában.',
  /** The title of the document not found pane if the schema is not found or unknown */
  'panes.document-pane.document-unknown-type.title':
    'Ismeretlen dokumentumtípus: <Code>{{documentType}}</Code>',
  /** The title of the document not found pane if the schema is unknown */
  'panes.document-pane.document-unknown-type.without-schema.text':
    'Ez a dokumentum nem létezik, és nem lett meghatározva hozzá sémátípus.',
  /** Default message shown while resolving the structure definition for an asynchronous node */
  'panes.resolving.default-message': 'Betöltés…',
  /** Message shown while resolving the structure definition for an asynchronous node and it is taking a while (more than 5s) */
  'panes.resolving.slow-resolve-message': 'Még mindig tölt…',
  /** The text to display when type is missing */
  'panes.unknown-pane-type.missing-type.text':
    'A struktúra elem hiányzik a szükséges <Code>type</Code> tulajdonságtól.',
  /** The title of the unknown pane */
  'panes.unknown-pane-type.title': 'Ismeretlen panel típus',
  /** The text to display when type is unknown */
  'panes.unknown-pane-type.unknown-type.text':
    'A <Code>{{type}}</Code> típusú struktúra elem nem ismert entitás.',

  /** The text for the "Open preview" action for a document */
  'production-preview.menu-item.title': 'Előnézet megnyitása',

  /** The text for the confirm button in the request permission dialog used in the permissions banner */
  'request-permission-dialog.confirm-button.text': 'Kérelem elküldése',
  /** The description text for the request permission dialog used in the permissions banner */
  'request-permission-dialog.description.text':
    'A kérelmedet a projekt adminisztrátor(ainak) fogjuk elküldeni. Ha szeretnél, mellékelhetsz egy megjegyzést is',
  /** The header/title for the request permission dialog used in the permissions banner */
  'request-permission-dialog.header.text': 'Szerkesztési hozzáférés kérése',
  /** The text describing the note input for the request permission dialog used in the permissions banner */
  'request-permission-dialog.note-input.description.text':
    'Ha szeretnél, hozzáfűzhetsz egy megjegyzést',
  /** The placeholder for the note input in the request permission dialog used in the permissions banner */
  'request-permission-dialog.note-input.placeholder.text': 'Megjegyzés hozzáadása...',
  /** The error/warning text in the request permission dialog when the user's request has been declined */
  'request-permission-dialog.warning.denied.text':
    'A projektbe való hozzáférési kérelmedet elutasították.',
  /** The error/warning text in the request permission dialog when the user's request has been denied due to too many outstanding requests */
  'request-permission-dialog.warning.limit-reached.text':
    'Elérted a szerepkérési limitet az összes projekten belül. Kérlek várj a további kérelmek benyújtásával vagy vedd fel a kapcsolatot egy adminisztrátorral segítségért.',

  /** Label for button when status is saved */
  'status-bar.document-status-pulse.status.saved.text': 'Mentve',
  /** Label for button when status is syncing */
  'status-bar.document-status-pulse.status.syncing.text': 'Mentés...',
  /** Accessibility label indicating when the document was last published, in relative time, eg "3 weeks ago" */
  'status-bar.publish-status-button.last-published-time.aria-label':
    'Utoljára közzétéve {{relativeTime}}',
  /** Text for tooltip showing explanation of timestamp/relative time, eg "Last published <RelativeTime/>" */
  'status-bar.publish-status-button.last-published-time.tooltip':
    'Utoljára közzétéve <RelativeTime/>',
  /** Accessibility label indicating when the document was last updated, in relative time, eg "2 hours ago" */
  'status-bar.publish-status-button.last-updated-time.aria-label':
    'Utoljára frissítve {{relativeTime}}',
  /** Text for tooltip showing explanation of timestamp/relative time, eg "Last updated <RelativeTime/>" */
  'status-bar.publish-status-button.last-updated-time.tooltip':
    'Utoljára frissítve <RelativeTime/>',
  /** Aria label for the button */
  'status-bar.review-changes-button.aria-label': 'Változások áttekintése',
  /** Label for button when status is saved */
  'status-bar.review-changes-button.status.saved.text': 'Mentve!',
  /** Label for button when status is syncing */
  'status-bar.review-changes-button.status.syncing.text': 'Mentés...',
  /** Text for the secondary text for tooltip for the button */
  'status-bar.review-changes-button.tooltip.changes-saved': 'Változások mentve',
  /** Primary text for tooltip for the button */
  'status-bar.review-changes-button.tooltip.text': 'Változások áttekintése',

  /** The text that appears in side the documentation link */
  'structure-error.docs-link.text': 'Dokumentáció megtekintése',
  /** Labels the error message or error stack of the structure error screen */
  'structure-error.error.label': 'Hiba',
  /** The header that appears at the top of the error screen */
  'structure-error.header.text': 'Hiba történt a struktúra olvasása közben',
  /** The text in the reload button to retry rendering the structure */
  'structure-error.reload-button.text': 'Újratöltés',
  /** Labels the structure path of the structure error screen */
  'structure-error.structure-path.label': 'Struktúra útvonala',

  /** The aria label for the menu button in the timeline item */
  'timeline-item.menu-button.aria-label': 'Műveleti menü megnyitása',
  /** The text for the tooltip in menu button the timeline item */
  'timeline-item.menu-button.tooltip': 'Műveletek',
  /** The text for the collapse action in the timeline item menu */
  'timeline-item.menu.action-collapse': 'Összecsukás',
  /** The text for the expand action in the timeline item menu */
  'timeline-item.menu.action-expand': 'Kibontás',
  /** The text for the published event menu tooltip when the release is not found */
  'timeline-item.not-found-release.tooltip': 'A "{{releaseId}}" azonosítójú kiadás nem található',

  /** The text for the "Inline changes" action, which is used to toggle the visibility of content diffs inside inputs */
  'toggle-inline-changes.menu-item.title': undefined, // 'Inline changes'
})
