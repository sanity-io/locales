import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Tooltip when action button is disabled because the operation is not ready   */
  'action.delete.disabled.not-ready': 'Operace není připravena',
  /** Tooltip when action button is disabled because the document does not exist */
  'action.delete.disabled.nothing-to-delete': 'Tento dokument ještě neexistuje nebo je již smazán',
  /** Label for the "Delete" document action button */
  'action.delete.label': 'Smazat',
  /** Label for the "Delete" document action while the document is being deleted */
  'action.delete.running.label': 'Maže se…',
  /** Message prompting the user to confirm discarding changes */
  'action.discard-changes.confirm-dialog.confirm-discard-changes':
    'Jste si jisti, že chcete zahodit všechny změny od posledního zveřejnění?',
  /** Tooltip when action is disabled because the document has no unpublished changes */
  'action.discard-changes.disabled.no-change': 'Tento dokument nemá žádné nezveřejněné změny',
  /** Tooltip when action is disabled because the document is not published */
  'action.discard-changes.disabled.not-published': 'Tento dokument není zveřejněn',
  /** Tooltip when action button is disabled because the operation is not ready   */
  'action.discard-changes.disabled.not-ready': 'Operace není připravena',
  /** Label for the "Discard changes" document action */
  'action.discard-changes.label': 'Zahodit změny',
  /** Tooltip when action is disabled because the operation is not ready   */
  'action.duplicate.disabled.not-ready': 'Operace není připravena',
  /** Tooltip when action is disabled because the document doesn't exist */
  'action.duplicate.disabled.nothing-to-duplicate':
    'Tento dokument ještě neexistuje, takže není co duplikovat',
  /** Label for the "Duplicate" document action */
  'action.duplicate.label': 'Duplikovat',
  /** Label for the "Duplicate" document action while the document is being duplicated */
  'action.duplicate.running.label': 'Duplikuje se…',
  /** Tooltip when publish button is disabled because the document is already published, and published time is unavailable.*/
  'action.publish.already-published.no-time-ago.tooltip': 'Již zveřejněno',
  /** Tooltip when publish button is disabled because the document is already published.*/
  'action.publish.already-published.tooltip': 'Zveřejněno před {{timeSincePublished}}',
  /** Tooltip when action is disabled because the studio is not ready.*/
  'action.publish.disabled.not-ready': 'Operace není připravena',
  /** Label for action when there are pending changes.*/
  'action.publish.draft.label': 'Zveřejnit',
  /** Label for the "Publish" document action when the document has live edit enabled.*/
  'action.publish.live-edit.label': 'Zveřejnit',
  /** Fallback tooltip for the "Publish" document action when publish is invoked for a document with live edit enabled.*/
  'action.publish.live-edit.publish-disabled':
    'Nelze zveřejnit, protože pro tento typ dokumentu je povolena funkce Live Edit',
  /** Tooltip for the "Publish" document action when the document has live edit enabled.*/
  'action.publish.live-edit.tooltip':
    'Pro tento typ obsahu je povolena funkce Live Edit a zveřejnění probíhá automaticky, jakmile provádíte změny',
  /** Tooltip when publish button is disabled because there are no changes.*/
  'action.publish.no-changes.tooltip': 'Žádné nezveřejněné změny',
  /** Label for the "Publish" document action when there are no changes.*/
  'action.publish.published.label': 'Zveřejněno',
  /** Label for the "Publish" document action while publish is being executed.*/
  'action.publish.running.label': 'Zveřejňuje se…',
  /** Tooltip when the "Publish" document action is disabled due to validation issues */
  'action.publish.validation-issues.tooltip':
    'Existují validační chyby, které je třeba opravit, než bude možné tento dokument zveřejnit',
  /** Tooltip when publish button is waiting for validation and async tasks to complete.*/
  'action.publish.waiting': 'Čeká se na dokončení úloh před zveřejněním',
  /** Message prompting the user to confirm that they want to restore to an earlier version*/
  'action.restore.confirm.message': 'Jste si jisti, že chcete obnovit tento dokument?',
  /** Fallback tooltip for when user is looking at the initial version */
  'action.restore.disabled.cannot-restore-initial': 'Nemůžete obnovit počáteční verzi',
  /** Label for the "Restore" document action */
  'action.restore.label': 'Obnovit',
  /** Default tooltip for the action */
  'action.restore.tooltip': 'Obnovit na tuto verzi',
  /** Tooltip when action is disabled because the document is not already published */
  'action.unpublish.disabled.not-published': 'Tento dokument není publikován',
  /** Tooltip when action is disabled because the operation is not ready   */
  'action.unpublish.disabled.not-ready': 'Operace není připravena',
  /** Label for the "Unpublish" document action */
  'action.unpublish.label': 'Zrušit publikaci',
  /** Fallback tooltip for the Unpublish document action when publish is invoked for a document with live edit enabled.*/
  'action.unpublish.live-edit.disabled':
    'Tento dokument má povoleno živé úpravy a nemůže být zrušena jeho publikace',

  /** The text for the restore button on the deleted document banner */
  'banners.deleted-document-banner.restore-button.text': 'Obnovit nejnovější verzi',
  /** The text content for the deleted document banner */
  'banners.deleted-document-banner.text': 'Tento dokument byl smazán.',
  /** The text content for the deprecated document type banner */
  'banners.deprecated-document-type-banner.text': 'Tento typ dokumentu byl zastaralý.',
  /** The text for the permission check banner if the user only has one role, and it does not allow updating this document */
  'banners.permission-check-banner.missing-permission_create_one':
    'Vaše role <Roles/> nemá oprávnění vytvořit tento dokument.',
  /** The text for the permission check banner if the user only has multiple roles, but they do not allow updating this document */
  'banners.permission-check-banner.missing-permission_create_other':
    'Vaše role <Roles/> nemají oprávnění vytvořit tento dokument.',
  /** The text for the permission check banner if the user only has one role, and it does not allow updating this document */
  'banners.permission-check-banner.missing-permission_update_one':
    'Vaše role <Roles/> nemá oprávnění aktualizovat tento dokument.',
  /** The text for the permission check banner if the user only has multiple roles, but they do not allow updating this document */
  'banners.permission-check-banner.missing-permission_update_other':
    'Vaše role <Roles/> nemají oprávnění aktualizovat tento dokument.',
  /** The text for the reload button */
  'banners.reference-changed-banner.reason-changed.reload-button.text': 'Znovu načíst referenci',
  /** The text for the reference change banner if the reason is that the reference has been changed */
  'banners.reference-changed-banner.reason-changed.text':
    'Tato reference byla změněna od doby, co jste ji otevřeli.',
  /** The text for the close button */
  'banners.reference-changed-banner.reason-removed.close-button.text': 'Zavřít referenci',
  /** The text for the reference change banner if the reason is that the reference has been deleted */
  'banners.reference-changed-banner.reason-removed.text':
    'Tato reference byla odstraněna od doby, co jste ji otevřeli.',

  /** Browser/tab title when creating a new document of a given type */
  'browser-document-title.new-document': 'Nový {{schemaType}}',
  /** Browser/tab title when editing a document where the title cannot be resolved from preview configuration */
  'browser-document-title.untitled-document': 'Bez názvu',

  /** The action menu button aria-label */
  'buttons.action-menu-button.aria-label': 'Otevřít akce dokumentu',
  /** The action menu button tooltip */
  'buttons.action-menu-button.tooltip': 'Akce dokumentu',
  /** The aria-label for the split pane button on the document panel header */
  'buttons.split-pane-button.aria-label': 'Rozdělit panel vpravo',
  /** The tool tip for the split pane button on the document panel header */
  'buttons.split-pane-button.tooltip': 'Rozdělit panel vpravo',
  /** The title for the close button on the split pane on the document panel header */
  'buttons.split-pane-close-button.title': 'Zavřít rozdělený panel',
  /** The title for the close group button on the split pane on the document panel header */
  'buttons.split-pane-close-group-button.title': 'Zavřít skupinu panelů',

  /** The text in the "Cancel" button in the confirm delete dialog that cancels the action and closes the dialog */
  'confirm-delete-dialog.cancel-button.text': 'Zrušit',
  /** Used in `confirm-delete-dialog.cdr-summary.title` */
  'confirm-delete-dialog.cdr-summary.document-count_one': '1 dokument',
  /** Used in `confirm-delete-dialog.cdr-summary.title` */
  'confirm-delete-dialog.cdr-summary.document-count_other': '{{count}} dokumentů',
  /** The text that appears in the subtitle `<summary>` that lists the datasets below the title */
  'confirm-delete-dialog.cdr-summary.subtitle_one': 'Dataset: {{datasets}}',
  /** The text that appears in the subtitle `<summary>` that lists the datasets below the title */
  'confirm-delete-dialog.cdr-summary.subtitle_other': 'Datasety: {{datasets}}',
  /** The text that appears in the subtitle `<summary>` that lists the datasets below the title */
  'confirm-delete-dialog.cdr-summary.subtitle_unavailable_one': 'Nedostupný dataset',
  /** The text that appears in the subtitle `<summary>` that lists the datasets below the title */
  'confirm-delete-dialog.cdr-summary.subtitle_unavailable_other': 'Nedostupné datasety',
  /** The text that appears in the title `<summary>` that includes the list of CDRs (singular) */
  'confirm-delete-dialog.cdr-summary.title_one': '{{documentCount}} v jiném datasetu',
  /** The text that appears in the title `<summary>` that includes the list of CDRs (plural) */
  'confirm-delete-dialog.cdr-summary.title_other': '{{documentCount}} v {{count}} datasety',
  /** Appears when hovering over the copy button to copy */
  'confirm-delete-dialog.cdr-table.copy-id-button.tooltip': 'Zkopírovat ID do schránky',
  /** The header for the dataset column in the list of cross-dataset references found */
  'confirm-delete-dialog.cdr-table.dataset.label': 'Dataset',
  /** The header for the document ID column in the list of cross-dataset references found */
  'confirm-delete-dialog.cdr-table.document-id.label': 'ID dokumentu',
  /** The toast title when the copy button has been clicked */
  'confirm-delete-dialog.cdr-table.id-copied-toast.title': 'ID dokumentu zkopírováno do schránky!',
  /** The header for the project ID column in the list of cross-dataset references found */
  'confirm-delete-dialog.cdr-table.project-id.label': 'ID projektu',
  /** The text in the "Delete anyway" button in the confirm delete dialog that confirms the action */
  'confirm-delete-dialog.confirm-anyway-button.text_delete': 'Smazat přesto',
  /** The text in the "Unpublish anyway" button in the confirm delete dialog that confirms the action */
  'confirm-delete-dialog.confirm-anyway-button.text_unpublish': 'Zrušit publikaci přesto',
  /** The text in the "Delete now" button in the confirm delete dialog that confirms the action */
  'confirm-delete-dialog.confirm-button.text_delete': 'Smazat nyní',
  /** The text in the "Unpublish now" button in the confirm delete dialog that confirms the action */
  'confirm-delete-dialog.confirm-button.text_unpublish': 'Zrušit publikaci nyní',
  /** If no referring documents are found, this text appears above the cancel and confirmation buttons */
  'confirm-delete-dialog.confirmation.text_delete':
    'Jste si jisti, že chcete smazat „<DocumentTitle/>“?',
  /** If no referring documents are found, this text appears above the cancel and confirmation buttons */
  'confirm-delete-dialog.confirmation.text_unpublish':
    'Jste si jisti, že chcete zrušit publikaci „<DocumentTitle/>“?',
  /** The text body of the error dialog. */
  'confirm-delete-dialog.error.message.text': 'Při načítání odkazujících dokumentů došlo k chybě.',
  /** The text in the retry button of the confirm delete dialog if an error occurred. */
  'confirm-delete-dialog.error.retry-button.text': 'Zkusit znovu',
  /** The header of the confirm delete dialog if an error occurred while the confirm delete dialog was open. */
  'confirm-delete-dialog.error.title.text': 'Chyba',
  /** The header of the confirm delete dialog */
  'confirm-delete-dialog.header.text_delete': 'Smazat dokument?',
  /** The header of the confirm delete dialog */
  'confirm-delete-dialog.header.text_unpublish': 'Zrušit publikaci dokumentu?',
  /** The text that appears while the referring documents are queried */
  'confirm-delete-dialog.loading.text': 'Hledání odkazujících dokumentů…',
  /** Shown if there are references to other documents but the user does not have the permission to see the relevant document IDs */
  'confirm-delete-dialog.other-reference-count.title_one': '1 další odkaz není zobrazen',
  /** Shown if there are references to other documents but the user does not have the permission to see the relevant document IDs */
  'confirm-delete-dialog.other-reference-count.title_other':
    '{{count}} dalších referencí není zobrazeno',
  /** Text in the tooltip of this component if hovering over the info icon */
  'confirm-delete-dialog.other-reference-count.tooltip':
    'Nemůžeme zobrazit metadata pro tyto reference kvůli chybějícímu přístupovému tokenu pro související datasety.',
  /** Appears when unable to render a document preview in the referring document list */
  'confirm-delete-dialog.preview-item.preview-unavailable.subtitle': 'ID: {{documentId}}',
  /** Appears when unable to render a document preview in the referring document list */
  'confirm-delete-dialog.preview-item.preview-unavailable.title': 'Náhled není k dispozici',
  /** Warns the user of affects to other documents if the action is confirmed (delete) */
  'confirm-delete-dialog.referential-integrity-disclaimer.text_delete':
    'Pokud smažete tento dokument, dokumenty, které na něj odkazují, již nebudou moci získat přístup.',
  /** Warns the user of affects to other documents if the action is confirmed (unpublish) */
  'confirm-delete-dialog.referential-integrity-disclaimer.text_unpublish':
    'Pokud zrušíte publikaci tohoto dokumentu, dokumenty, které na něj odkazují, již nebudou moci získat přístup.',
  /** Tells the user the count of how many other referring documents there are before listing them. (singular) */
  'confirm-delete-dialog.referring-document-count.text_one':
    '1 dokument odkazuje na „<DocumentTitle/>“',
  /** Tells the user the count of how many other referring documents there are before listing them. (plural) */
  'confirm-delete-dialog.referring-document-count.text_other':
    '{{count}} dokumentů odkazuje na „<DocumentTitle/>“',
  /** Describes the list of documents that refer to the one trying to be deleted (delete) */
  'confirm-delete-dialog.referring-documents-descriptor.text_delete':
    'Možná nebudete moci smazat „<DocumentTitle/>“, protože na něj odkazují následující dokumenty:',
  /** Describes the list of documents that refer to the one trying to be deleted (unpublish) */
  'confirm-delete-dialog.referring-documents-descriptor.text_unpublish':
    'Možná nebudete moci zrušit publikaci „<DocumentTitle/>“, protože na něj odkazují následující dokumenty:',

  /** The text for the cancel button in the confirm dialog used in document action shortcuts if none is provided */
  'confirm-dialog.cancel-button.fallback-text': 'Zrušit',
  /** The text for the confirm button in the confirm dialog used in document action shortcuts if none is provided */
  'confirm-dialog.confirm-button.fallback-text': 'Potvrdit',

  /** For the default structure definition, the title for the "Content" pane */
  'default-definition.content-title': 'Obsah',

  /** The text shown if there was an error while getting the document's title via a preview value */
  'doc-title.error.text': 'Chyba: {{errorMessage}}',
  /** The text shown if the preview value for a document is non-existent or empty */
  'doc-title.fallback.text': 'Bez názvu',
  /** The text shown if a document's title via a preview value cannot be determined due to an unknown schema type */
  'doc-title.unknown-schema-type.text': 'Neznámý typ schématu: {{schemaType}}',

  /** Tooltip text shown for the close button of the document inspector */
  'document-inspector.close-button.tooltip': 'Zavřít',
  /** The title shown in the dialog header, when inspecting a valid document */
  'document-inspector.dialog.title': 'Inspekce <DocumentTitle/>',
  /** The title shown in the dialog header, when the document being inspected is not created yet/has no value */
  'document-inspector.dialog.title-no-value': 'Bez hodnoty',
  /** Title shown for menu item that opens the "Inspect" dialog */
  'document-inspector.menu-item.title': 'Inspekce',
  /** the placeholder text for the search input on the inspect dialog */
  'document-inspector.search.placeholder': 'Hledat',
  /** The "parsed" view mode, meaning the JSON is searchable, collapsible etc */
  'document-inspector.view-mode.parsed': 'Zpracované',
  /** The "raw" view mode, meaning the JSON is presented syntax-highlighted, but with no other features - optimal for copying */
  'document-inspector.view-mode.raw-json': 'Surový JSON',

  /** The text for when a form is hidden */
  'document-view.form-view.form-hidden': 'Tento formulář je skrytý',
  /** Fallback title shown when a form title is not provided */
  'document-view.form-view.form-title-fallback': 'Nepojmenované',
  /** The text for when the form view is loading a document */
  'document-view.form-view.loading': 'Načítání dokumentu…',
  /** The description of the sync lock toast on the form view */
  'document-view.form-view.sync-lock-toast.description':
    'Vyčkejte, prosím, dokud se dokument synchronizuje. To se obvykle děje ihned po publikaci dokumentu a nemělo by to trvat déle než několik sekund',
  /** The title of the sync lock toast on the form view */
  'document-view.form-view.sync-lock-toast.title': 'Synchronizace dokumentu…',

  /** The loading messaging for when the tooltip is still loading permission info */
  'insufficient-permissions-message-tooltip.loading-text': 'Načítání…',

  /** --- Menu items --- */
  /** The menu item group title to use for the Action menu items */
  'menu-item-groups.actions-group': 'Akce',
  /** The menu item group title to use for the Layout menu items */
  'menu-item-groups.layout-group': 'Rozložení',
  /** The menu item group title to use for the Sort menu items */
  'menu-item-groups.sorting-group': 'Řazení',

  /** The menu item title to use the compact view */
  'menu-items.layout.compact-view': 'Kompaktní zobrazení',
  /** The menu item title to use the detailed view */
  'menu-items.layout.detailed-view': 'Detailní zobrazení',
  /** The menu item title to Sort by Created */
  'menu-items.sort-by.created': 'Seřadit podle data vytvoření',
  /** The menu item title to Sort by Last Edited */
  'menu-items.sort-by.last-edited': 'Seřadit podle poslední úpravy',

  /** The link text of the no document type screen that appears directly below the subtitle */
  'no-document-types-screen.link-text': 'Zjistěte, jak přidat typ dokumentu →',
  /** The subtitle of the no document type screen that appears directly below the title */
  'no-document-types-screen.subtitle':
    'Prosím, definujte alespoň jeden typ dokumentu ve vašem schématu.',
  /** The title of the no document type screen */
  'no-document-types-screen.title': 'Žádné typy dokumentů',

  /** Text shown on back button visible on smaller breakpoints */
  'pane-header.back-button.text': 'Zpět',
  /** tooltip text (via `title` attribute) for the menu button */
  'pane-header.context-menu-button.tooltip': 'Zobrazit menu',
  /** Appears in a document list pane header if there are more than one option for create. This is the label for that menu */
  'pane-header.create-menu.label': 'Vytvořit',
  /** Tooltip displayed on the create new button in document lists */
  'pane-header.create-new-button.tooltip': 'Vytvořit nový dokument',
  /** The `aria-label` for the disabled button in the pane header if create permissions are granted */
  'pane-header.disabled-created-button.aria-label': 'Nedostatečná oprávnění',

  /** The text shown in the tooltip of pane item previews of documents if there are unpublished edits */
  'pane-item.draft-status.has-draft.tooltip': 'Editováno <RelativeTime/>',
  /** The text shown in the tooltip of pane item previews of documents if there are no unpublished edits */
  'pane-item.draft-status.no-draft.tooltip': 'Žádné nezveřejněné úpravy',
  /** The subtitle tor pane item previews if there isn't a matching schema type found */
  'pane-item.missing-schema-type.subtitle': 'Dokument: <Code>{{documentId}}</Code>',
  /** The title tor pane item previews if there isn't a matching schema type found */
  'pane-item.missing-schema-type.title':
    'Pro typ <Code>{{documentType}}</Code> nebylo nalezeno schéma',
  /** The text shown in the tooltip of pane item previews of documents if there are unpublished edits */
  'pane-item.published-status.has-published.tooltip': 'Publikováno <RelativeTime/>',
  /** The text shown in the tooltip of pane item previews of documents if there are no unpublished edits */
  'pane-item.published-status.no-published.tooltip': 'Žádné nezveřejněné úpravy',

  /** The text used in the document header title if there is an error */
  'panes.document-header-title.error.text': 'Chyba: {{error}}',
  /** The text used in the document header title if creating a new item */
  'panes.document-header-title.new.text': 'Nový {{schemaType}}',
  /** The text used in the document header title if no other title can be determined */
  'panes.document-header-title.untitled.text': 'Bez názvu',
  /** The text for the retry button on the document list pane */
  'panes.document-list-pane.error.retry-button.text': 'Zkusit znovu',
  /** The error text on the document list pane */
  'panes.document-list-pane.error.text': 'Chyba: <Code>{{error}}</Code>',
  /** The error title on the document list pane */
  'panes.document-list-pane.error.title': 'Nepodařilo se načíst položky seznamu',
  /** The text of the document list pane if more than a maximum number of documents are returned */
  'panes.document-list-pane.max-items.text': 'Zobrazuje se maximálně {{limit}} dokumentů',
  /** The text of the document list pane if no documents are found for a specified type */
  'panes.document-list-pane.no-documents-of-type.text': 'Žádné dokumenty tohoto typu',
  /** The text of the document list pane if no documents are found */
  'panes.document-list-pane.no-documents.text': 'Nebyly nalezeny žádné výsledky',
  /** The text of the document list pane if no documents are found matching specified criteria */
  'panes.document-list-pane.no-matching-documents.text':
    'Nebyly nalezeny žádné odpovídající dokumenty',
  /** The aria-label for the search input on the document list pane */
  'panes.document-list-pane.search-input.aria-label': 'Prohledat seznam',
  /** The search input for the search input on the document list pane */
  'panes.document-list-pane.search-input.placeholder': 'Prohledat seznam',
  /** The summary title when displaying an error for a document operation result */
  'panes.document-operation-results.error.summary.title': 'Podrobnosti',
  /** The text when a generic operation failed (fallback, generally not shown)  */
  'panes.document-operation-results.operation-error': 'Během {{context}} došlo k chybě',
  /** The text when a delete operation failed  */
  'panes.document-operation-results.operation-error_delete':
    'Při pokusu o smazání tohoto dokumentu došlo k chybě. To obvykle znamená, že na něj odkazují jiné dokumenty.',
  /** The text when an unpublish operation failed  */
  'panes.document-operation-results.operation-error_unpublish':
    'Při pokusu o zrušení publikace tohoto dokumentu došlo k chybě. To obvykle znamená, že na něj odkazují jiné dokumenty.',
  /** The text when a generic operation succeeded (fallback, generally not shown)  */
  'panes.document-operation-results.operation-success':
    'Úspěšně provedeno {{context}} na dokumentu',
  /** The text when a delete operation succeeded  */
  'panes.document-operation-results.operation-success_delete': 'Dokument byl úspěšně smazán',
  /** The text when a discard changes operation succeeded  */
  'panes.document-operation-results.operation-success_discardChanges':
    'Všechny změny od poslední publikace byly nyní zrušeny. Zahozený koncept lze stále obnovit z historie',
  /** The text when a publish operation succeeded  */
  'panes.document-operation-results.operation-success_publish': 'Dokument byl publikován',
  /** The text when a restore operation succeeded  */
  'panes.document-operation-results.operation-success_restore':
    '<Strong>{{title}}</Strong> byl obnoven',
  /** The text when an unpublish operation succeeded  */
  'panes.document-operation-results.operation-success_unpublish':
    'Publikace dokumentu byla zrušena. Z poslední publikované verze byl vytvořen koncept.',
  /** The document title shown when document title is "undefined" in operation message */
  'panes.document-operation-results.operation-undefined-title': 'Bez názvu',
  /** The title of the reconnecting toast */
  'panes.document-pane-provider.reconnecting.title':
    'Spojení bylo přerušeno. Opětovné připojování…',
  /** The loading message for the document not found pane */
  'panes.document-pane.document-not-found.loading': 'Načítání dokumentu…',
  /** The text of the document not found pane if the schema is known */
  'panes.document-pane.document-not-found.text':
    'Typ dokumentu není definován a dokument s identifikátorem <Code>{{id}}</Code> nebyl nalezen.',
  /** The title of the document not found pane if the schema is known */
  'panes.document-pane.document-not-found.title': 'Dokument nebyl nalezen',
  /** The text of the document not found pane if the schema is not found */
  'panes.document-pane.document-unknown-type.text':
    'Tento dokument má schéma typu <Code>{{documentType}}</Code>, které není definováno jako typ v lokálním schématu obsahu studia.',
  /** The title of the document not found pane if the schema is not found or unknown */
  'panes.document-pane.document-unknown-type.title':
    'Neznámý typ dokumentu: <Code>{{documentType}}</Code>',
  /** The title of the document not found pane if the schema is unknown */
  'panes.document-pane.document-unknown-type.without-schema.text':
    'Tento dokument neexistuje a nebyl pro něj určen žádný typ schématu.',
  /** Default message shown while resolving the structure definition for an asynchronous node */
  'panes.resolving.default-message': 'Načítání…',
  /** Message shown while resolving the structure definition for an asynchronous node and it is taking a while (more than 5s) */
  'panes.resolving.slow-resolve-message': 'Stále se načítá…',
  /** The text to display when type is missing */
  'panes.unknown-pane-type.missing-type.text':
    'Strukturní položka postrádá požadovanou vlastnost <Code>type</Code>.',
  /** The title of the unknown pane */
  'panes.unknown-pane-type.title': 'Neznámý typ panelu',
  /** The text to display when type is unknown */
  'panes.unknown-pane-type.unknown-type.text':
    'Strukturní položka typu <Code>{{type}}</Code> není známou entitou.',

  /** The text for the "Open preview" action for a document */
  'production-preview.menu-item.title': 'Otevřít náhled',

  /** Label for button when status is saved */
  'status-bar.document-status-pulse.status.saved.text': 'Uloženo',
  /** Label for button when status is syncing */
  'status-bar.document-status-pulse.status.syncing.text': 'Ukládání...',
  /** Accessibility label indicating when the document was last published, in relative time, eg "3 weeks ago" */
  'status-bar.publish-status-button.last-published-time.aria-label':
    'Naposledy publikováno {{relativeTime}}',
  /** Text for tooltip showing explanation of timestamp/relative time, eg "Last published <RelativeTime/>" */
  'status-bar.publish-status-button.last-published-time.tooltip':
    'Naposledy publikováno <RelativeTime/>',
  /** Accessibility label indicating when the document was last updated, in relative time, eg "2 hours ago" */
  'status-bar.publish-status-button.last-updated-time.aria-label':
    'Naposledy aktualizováno {{relativeTime}}',
  /** Text for tooltip showing explanation of timestamp/relative time, eg "Last updated <RelativeTime/>" */
  'status-bar.publish-status-button.last-updated-time.tooltip':
    'Naposledy aktualizováno <RelativeTime/>',
  /** Aria label for the button */
  'status-bar.review-changes-button.aria-label': 'Zkontrolovat změny',
  /** Label for button when status is saved */
  'status-bar.review-changes-button.status.saved.text': 'Uloženo!',
  /** Label for button when status is syncing */
  'status-bar.review-changes-button.status.syncing.text': 'Ukládání...',
  /** Text for the secondary text for tooltip for the button */
  'status-bar.review-changes-button.tooltip.changes-saved': 'Změny uloženy',
  /** Primary text for tooltip for the button */
  'status-bar.review-changes-button.tooltip.text': 'Zkontrolovat změny',

  /** The text that appears in side the documentation link */
  'structure-error.docs-link.text': 'Zobrazit dokumentaci',
  /** Labels the error message or error stack of the structure error screen */
  'structure-error.error.label': 'Chyba',
  /** The header that appears at the top of the error screen */
  'structure-error.header.text': 'Při čtení struktury došlo k chybě',
  /** The text in the reload button to retry rendering the structure */
  'structure-error.reload-button.text': 'Znovu načíst',
  /** Labels the structure path of the structure error screen */
  'structure-error.structure-path.label': 'Cesta struktury',
})
