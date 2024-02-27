import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Tooltip when action button is disabled because the operation is not ready   */
  'action.delete.disabled.not-ready': 'A művelet még nincs kész',
  /** Tooltip when action button is disabled because the document does not exist */
  'action.delete.disabled.nothing-to-delete':
    'Ez a dokumentum még nem létezik vagy már törölve lett',
  /** Label for the "Delete" document action button */
  'action.delete.label': 'Törlés',
  /** Label for the "Delete" document action while the document is being deleted */
  'action.delete.running.label': 'Törlés…',
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
  /** Message prompting the user to confirm that they want to restore to an earlier version*/
  'action.restore.confirm.message': 'Biztosan vissza szeretnéd állítani ezt a dokumentumot?',
  /** Fallback tooltip for when user is looking at the initial version */
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

  /** The text for the restore button on the deleted document banner */
  'banners.deleted-document-banner.restore-button.text': 'Legutóbbi verzió visszaállítása',
  /** The text content for the deleted document banner */
  'banners.deleted-document-banner.text': 'Ez a dokumentum törölve lett.',
  /** The text content for the deprecated document type banner */
  'banners.deprecated-document-type-banner.text': 'Ez a dokumentumtípus elavult.',
  /** The text for the permission check banner if the user only has one role, and it does not allow updating this document */
  'banners.permission-check-banner.missing-permission_create_one':
    'A szerepköröd <Roles/> nem rendelkezik jogosultsággal a dokumentum létrehozására.',
  /** The text for the permission check banner if the user only has multiple roles, but they do not allow updating this document */
  'banners.permission-check-banner.missing-permission_create_other':
    'A szerepköreid <Roles/> nem rendelkeznek jogosultsággal a dokumentum létrehozására.',
  /** The text for the permission check banner if the user only has one role, and it does not allow updating this document */
  'banners.permission-check-banner.missing-permission_update_one':
    'A szerepköreid <Roles/> nem rendelkezik jogosultsággal a dokumentum frissítésére.',
  /** The text for the permission check banner if the user only has multiple roles, but they do not allow updating this document */
  'banners.permission-check-banner.missing-permission_update_other':
    'A szerepköreid <Roles/> nem rendelkeznek jogosultsággal a dokumentum frissítésére.',
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
  /** The toast title when the copy button has been clicked */
  'confirm-delete-dialog.cdr-table.id-copied-toast.title':
    'Dokumentum azonosító másolva a vágólapra!',
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
  /** The text for the retry button on the document list pane */
  'panes.document-list-pane.error.retry-button.text': 'Újrapróbálkozás',
  /** The error text on the document list pane */
  'panes.document-list-pane.error.text': 'Hiba: <Code>{{error}}</Code>',
  /** The error title on the document list pane */
  'panes.document-list-pane.error.title': 'Nem sikerült a lista elemeket betölteni',
  /** The text of the document list pane if more than a maximum number of documents are returned */
  'panes.document-list-pane.max-items.text': 'Maximum {{limit}} dokumentum megjelenítése',
  /** The text of the document list pane if no documents are found for a specified type */
  'panes.document-list-pane.no-documents-of-type.text': 'Nincsenek ilyen típusú dokumentumok',
  /** The text of the document list pane if no documents are found */
  'panes.document-list-pane.no-documents.text': 'Nincs találat',
  /** The text of the document list pane if no documents are found matching specified criteria */
  'panes.document-list-pane.no-matching-documents.text': 'Nincsenek egyező dokumentumok',
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
  /** The text when a delete operation succeeded  */
  'panes.document-operation-results.operation-success_delete': 'A dokumentum sikeresen törölve',
  /** The text when a discard changes operation succeeded  */
  'panes.document-operation-results.operation-success_discardChanges':
    'Az utolsó közzététel óta végzett összes változtatás elvetésre került. Az elvetett vázlat még visszaállítható a történetből',
  /** The text when a publish operation succeeded  */
  'panes.document-operation-results.operation-success_publish': 'A dokumentum közzétéve',
  /** The text when a restore operation succeeded  */
  'panes.document-operation-results.operation-success_restore':
    '<Strong>{{title}}</Strong> vissza lett állítva',
  /** The text when an unpublish operation succeeded  */
  'panes.document-operation-results.operation-success_unpublish':
    'A dokumentum közzétételét megszüntették. A legutóbbi közzétett verzióból vázlat készült.',
  /** The document title shown when document title is "undefined" in operation message */
  'panes.document-operation-results.operation-undefined-title': 'Cím nélkül',
  /** The title of the reconnecting toast */
  'panes.document-pane-provider.reconnecting.title': 'A kapcsolat megszakadt. Újracsatlakozás…',
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
})
