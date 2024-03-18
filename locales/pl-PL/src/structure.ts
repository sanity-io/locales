import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Tooltip when action button is disabled because the operation is not ready   */
  'action.delete.disabled.not-ready': 'Operacja nie jest gotowa',
  /** Tooltip when action button is disabled because the document does not exist */
  'action.delete.disabled.nothing-to-delete':
    'Ten dokument jeszcze nie istnieje lub został już usunięty',
  /** Label for the "Delete" document action button */
  'action.delete.label': 'Usuń',
  /** Label for the "Delete" document action while the document is being deleted */
  'action.delete.running.label': 'Usuwanie…',
  /** Message prompting the user to confirm discarding changes */
  'action.discard-changes.confirm-dialog.confirm-discard-changes':
    'Czy na pewno chcesz odrzucić wszystkie zmiany od ostatniej publikacji?',
  /** Tooltip when action is disabled because the document has no unpublished changes */
  'action.discard-changes.disabled.no-change': 'Ten dokument nie ma nieopublikowanych zmian',
  /** Tooltip when action is disabled because the document is not published */
  'action.discard-changes.disabled.not-published': 'Ten dokument nie jest opublikowany',
  /** Tooltip when action button is disabled because the operation is not ready   */
  'action.discard-changes.disabled.not-ready': 'Operacja nie jest gotowa',
  /** Label for the "Discard changes" document action */
  'action.discard-changes.label': 'Odrzuć zmiany',
  /** Tooltip when action is disabled because the operation is not ready   */
  'action.duplicate.disabled.not-ready': 'Operacja nie jest gotowa',
  /** Tooltip when action is disabled because the document doesn't exist */
  'action.duplicate.disabled.nothing-to-duplicate':
    'Ten dokument jeszcze nie istnieje, więc nie ma nic do skopiowania',
  /** Label for the "Duplicate" document action */
  'action.duplicate.label': 'Duplikuj',
  /** Label for the "Duplicate" document action while the document is being duplicated */
  'action.duplicate.running.label': 'Duplikowanie…',
  /** Tooltip when publish button is disabled because the document is already published, and published time is unavailable.*/
  'action.publish.already-published.no-time-ago.tooltip': 'Już opublikowany',
  /** Tooltip when publish button is disabled because the document is already published.*/
  'action.publish.already-published.tooltip': 'Opublikowano {{timeSincePublished}} temu',
  /** Tooltip when action is disabled because the studio is not ready.*/
  'action.publish.disabled.not-ready': 'Operacja nie jest gotowa',
  /** Label for action when there are pending changes.*/
  'action.publish.draft.label': 'Publikuj',
  /** Label for the "Publish" document action when the document has live edit enabled.*/
  'action.publish.live-edit.label': 'Publikuj',
  /** Fallback tooltip for the "Publish" document action when publish is invoked for a document with live edit enabled.*/
  'action.publish.live-edit.publish-disabled':
    'Nie można opublikować, ponieważ dla tego typu dokumentu włączona jest edycja na żywo',
  /** Tooltip for the "Publish" document action when the document has live edit enabled.*/
  'action.publish.live-edit.tooltip':
    'Dla tego typu treści włączona jest edycja na żywo i publikacja odbywa się automatycznie, gdy dokonujesz zmian',
  /** Tooltip when publish button is disabled because there are no changes.*/
  'action.publish.no-changes.tooltip': 'Brak nieopublikowanych zmian',
  /** Label for the "Publish" document action when there are no changes.*/
  'action.publish.published.label': 'Opublikowany',
  /** Label for the "Publish" document action while publish is being executed.*/
  'action.publish.running.label': 'Publikowanie…',
  /** Tooltip when the "Publish" document action is disabled due to validation issues */
  'action.publish.validation-issues.tooltip':
    'Istnieją błędy walidacji, które należy naprawić przed opublikowaniem tego dokumentu',
  /** Tooltip when publish button is waiting for validation and async tasks to complete.*/
  'action.publish.waiting': 'Oczekiwanie na zakończenie zadań przed publikacją',
  /** Message prompting the user to confirm that they want to restore to an earlier version*/
  'action.restore.confirm.message': 'Czy na pewno chcesz przywrócić ten dokument?',
  /** Fallback tooltip for when user is looking at the initial version */
  'action.restore.disabled.cannot-restore-initial': 'Nie możesz przywrócić wersji początkowej',
  /** Label for the "Restore" document action */
  'action.restore.label': 'Przywróć',
  /** Default tooltip for the action */
  'action.restore.tooltip': 'Przywróć do tej wersji',
  /** Tooltip when action is disabled because the document is not already published */
  'action.unpublish.disabled.not-published': 'Ten dokument nie jest opublikowany',
  /** Tooltip when action is disabled because the operation is not ready   */
  'action.unpublish.disabled.not-ready': 'Operacja nie jest gotowa',
  /** Label for the "Unpublish" document action */
  'action.unpublish.label': 'Cofnij publikację',
  /** Fallback tooltip for the Unpublish document action when publish is invoked for a document with live edit enabled.*/
  'action.unpublish.live-edit.disabled':
    'Ten dokument ma włączoną edycję na żywo i nie może zostać cofnięty z publikacji',

  /** The text for the restore button on the deleted document banner */
  'banners.deleted-document-banner.restore-button.text': 'Przywróć najnowszą wersję',
  /** The text content for the deleted document banner */
  'banners.deleted-document-banner.text': 'Ten dokument został usunięty.',
  /** The text content for the deprecated document type banner */
  'banners.deprecated-document-type-banner.text': 'Ten typ dokumentu został wycofany.',
  /** The text for the permission check banner if the user only has one role, and it does not allow updating this document */
  'banners.permission-check-banner.missing-permission_create_one':
    'Twoja rola <Roles/> nie ma uprawnień do utworzenia tego dokumentu.',
  /** The text for the permission check banner if the user only has one role, and it does not allow updating this document */
  'banners.permission-check-banner.missing-permission_update_one':
    'Twoja rola <Roles/> nie ma uprawnień do aktualizacji tego dokumentu.',
  /** The text for the reload button */
  'banners.reference-changed-banner.reason-changed.reload-button.text': 'Przeładuj odniesienie',
  /** The text for the reference change banner if the reason is that the reference has been changed */
  'banners.reference-changed-banner.reason-changed.text':
    'To odniesienie zmieniło się od kiedy je otworzyłeś.',
  /** The text for the close button */
  'banners.reference-changed-banner.reason-removed.close-button.text': 'Zamknij odniesienie',
  /** The text for the reference change banner if the reason is that the reference has been deleted */
  'banners.reference-changed-banner.reason-removed.text':
    'To odniesienie zostało usunięte od kiedy je otworzyłeś.',

  /** Browser/tab title when creating a new document of a given type */
  'browser-document-title.new-document': 'Nowy {{schemaType}}',
  /** Browser/tab title when editing a document where the title cannot be resolved from preview configuration */
  'browser-document-title.untitled-document': 'Bez tytułu',

  /** The action menu button aria-label */
  'buttons.action-menu-button.aria-label': 'Otwórz działania dokumentu',
  /** The action menu button tooltip */
  'buttons.action-menu-button.tooltip': 'Akcje dokumentu',
  /** The aria-label for the split pane button on the document panel header */
  'buttons.split-pane-button.aria-label': 'Podziel panel po prawej',
  /** The tool tip for the split pane button on the document panel header */
  'buttons.split-pane-button.tooltip': 'Podziel panel po prawej',
  /** The title for the close button on the split pane on the document panel header */
  'buttons.split-pane-close-button.title': 'Zamknij podzielony panel',
  /** The title for the close group button on the split pane on the document panel header */
  'buttons.split-pane-close-group-button.title': 'Zamknij grupę paneli',

  /** The text in the "Cancel" button in the confirm delete dialog that cancels the action and closes the dialog */
  'confirm-delete-dialog.cancel-button.text': 'Anuluj',
  /** Used in `confirm-delete-dialog.cdr-summary.title` */
  'confirm-delete-dialog.cdr-summary.document-count_one': '1 dokument',
  /** The text that appears in the subtitle `<summary>` that lists the datasets below the title */
  'confirm-delete-dialog.cdr-summary.subtitle_one': 'Zestaw danych: {{datasets}}',
  /** The text that appears in the subtitle `<summary>` that lists the datasets below the title */
  'confirm-delete-dialog.cdr-summary.subtitle_unavailable_one': 'Niedostępny zestaw danych',
  /** The text that appears in the title `<summary>` that includes the list of CDRs (singular) */
  'confirm-delete-dialog.cdr-summary.title_one': '{{documentCount}} w innym zbiorze danych',
  /** Appears when hovering over the copy button to copy */
  'confirm-delete-dialog.cdr-table.copy-id-button.tooltip': 'Skopiuj ID do schowka',
  /** The header for the dataset column in the list of cross-dataset references found */
  'confirm-delete-dialog.cdr-table.dataset.label': 'Zbiór danych',
  /** The header for the document ID column in the list of cross-dataset references found */
  'confirm-delete-dialog.cdr-table.document-id.label': 'ID dokumentu',
  /** The toast title when the copy button has been clicked */
  'confirm-delete-dialog.cdr-table.id-copied-toast.title': 'Skopiowano ID dokumentu do schowka!',
  /** The header for the project ID column in the list of cross-dataset references found */
  'confirm-delete-dialog.cdr-table.project-id.label': 'ID projektu',
  /** The text in the "Delete anyway" button in the confirm delete dialog that confirms the action */
  'confirm-delete-dialog.confirm-anyway-button.text_delete': 'Usuń mimo to',
  /** The text in the "Unpublish anyway" button in the confirm delete dialog that confirms the action */
  'confirm-delete-dialog.confirm-anyway-button.text_unpublish': 'Cofnij publikację mimo to',
  /** The text in the "Delete now" button in the confirm delete dialog that confirms the action */
  'confirm-delete-dialog.confirm-button.text_delete': 'Usuń teraz',
  /** The text in the "Unpublish now" button in the confirm delete dialog that confirms the action */
  'confirm-delete-dialog.confirm-button.text_unpublish': 'Cofnij publikację teraz',
  /** If no referring documents are found, this text appears above the cancel and confirmation buttons */
  'confirm-delete-dialog.confirmation.text_delete':
    'Czy na pewno chcesz usunąć „<DocumentTitle/>”?',
  /** If no referring documents are found, this text appears above the cancel and confirmation buttons */
  'confirm-delete-dialog.confirmation.text_unpublish':
    'Czy na pewno chcesz cofnąć publikację „<DocumentTitle/>”?',
  /** The text body of the error dialog. */
  'confirm-delete-dialog.error.message.text':
    'Wystąpił błąd podczas ładowania dokumentów odwołujących się.',
  /** The text in the retry button of the confirm delete dialog if an error occurred. */
  'confirm-delete-dialog.error.retry-button.text': 'Ponów próbę',
  /** The header of the confirm delete dialog if an error occurred while the confirm delete dialog was open. */
  'confirm-delete-dialog.error.title.text': 'Błąd',
  /** The header of the confirm delete dialog */
  'confirm-delete-dialog.header.text_delete': 'Usunąć dokument?',
  /** The header of the confirm delete dialog */
  'confirm-delete-dialog.header.text_unpublish': 'Cofnąć publikację dokumentu?',
  /** The text that appears while the referring documents are queried */
  'confirm-delete-dialog.loading.text': 'Wyszukiwanie dokumentów odwołujących się…',
  /** Shown if there are references to other documents but the user does not have the permission to see the relevant document IDs */
  'confirm-delete-dialog.other-reference-count.title_one': '1 inne odniesienie nie pokazane',
  /** Text in the tooltip of this component if hovering over the info icon */
  'confirm-delete-dialog.other-reference-count.tooltip':
    'Nie możemy wyświetlić metadanych dla tych odniesień z powodu braku tokenu dostępu do powiązanych zbiorów danych.',
  /** Appears when unable to render a document preview in the referring document list */
  'confirm-delete-dialog.preview-item.preview-unavailable.subtitle': 'ID: {{documentId}}',
  /** Appears when unable to render a document preview in the referring document list */
  'confirm-delete-dialog.preview-item.preview-unavailable.title': 'Podgląd niedostępny',
  /** Warns the user of affects to other documents if the action is confirmed (delete) */
  'confirm-delete-dialog.referential-integrity-disclaimer.text_delete':
    'Jeśli usuniesz ten dokument, dokumenty, które się do niego odwołują, nie będą mogły go już wykorzystywać.',
  /** Warns the user of affects to other documents if the action is confirmed (unpublish) */
  'confirm-delete-dialog.referential-integrity-disclaimer.text_unpublish':
    'Jeśli cofniesz publikację tego dokumentu, dokumenty, które się do niego odwołują, nie będą mogły go już wykorzystywać.',
  /** Tells the user the count of how many other referring documents there are before listing them. (singular) */
  'confirm-delete-dialog.referring-document-count.text_one':
    '1 dokument odwołuje się do „<DocumentTitle/>”',
  /** Describes the list of documents that refer to the one trying to be deleted (delete) */
  'confirm-delete-dialog.referring-documents-descriptor.text_delete':
    'Nie możesz być w stanie usunąć „<DocumentTitle/>”, ponieważ następujące dokumenty odnoszą się do niego:',
  /** Describes the list of documents that refer to the one trying to be deleted (unpublish) */
  'confirm-delete-dialog.referring-documents-descriptor.text_unpublish':
    'Nie możesz być w stanie cofnąć publikacji „<DocumentTitle/>”, ponieważ następujące dokumenty odnoszą się do niego:',

  /** The text for the cancel button in the confirm dialog used in document action shortcuts if none is provided */
  'confirm-dialog.cancel-button.fallback-text': 'Anuluj',
  /** The text for the confirm button in the confirm dialog used in document action shortcuts if none is provided */
  'confirm-dialog.confirm-button.fallback-text': 'Potwierdź',

  /** For the default structure definition, the title for the "Content" pane */
  'default-definition.content-title': 'Treść',

  /** The text shown if there was an error while getting the document's title via a preview value */
  'doc-title.error.text': 'Błąd: {{errorMessage}}',
  /** The text shown if the preview value for a document is non-existent or empty */
  'doc-title.fallback.text': 'Bez tytułu',
  /** The text shown if a document's title via a preview value cannot be determined due to an unknown schema type */
  'doc-title.unknown-schema-type.text': 'Nieznany typ schematu: {{schemaType}}',

  /** Tooltip text shown for the close button of the document inspector */
  'document-inspector.close-button.tooltip': 'Zamknij',
  /** The title shown in the dialog header, when inspecting a valid document */
  'document-inspector.dialog.title': 'Inspekcja <DocumentTitle/>',
  /** The title shown in the dialog header, when the document being inspected is not created yet/has no value */
  'document-inspector.dialog.title-no-value': 'Brak wartości',
  /** Title shown for menu item that opens the "Inspect" dialog */
  'document-inspector.menu-item.title': 'Inspekcja',
  /** the placeholder text for the search input on the inspect dialog */
  'document-inspector.search.placeholder': 'Szukaj',
  /** The "parsed" view mode, meaning the JSON is searchable, collapsible etc */
  'document-inspector.view-mode.parsed': 'Przetworzony',
  /** The "raw" view mode, meaning the JSON is presented syntax-highlighted, but with no other features - optimal for copying */
  'document-inspector.view-mode.raw-json': 'Surowy JSON',

  /** The text for when a form is hidden */
  'document-view.form-view.form-hidden': 'Ten formularz jest ukryty',
  /** Fallback title shown when a form title is not provided */
  'document-view.form-view.form-title-fallback': 'Bez tytułu',
  /** The text for when the form view is loading a document */
  'document-view.form-view.loading': 'Ładowanie dokumentu…',
  /** The description of the sync lock toast on the form view */
  'document-view.form-view.sync-lock-toast.description':
    'Proszę czekać, aż dokument zostanie zsynchronizowany. Zwykle dzieje się to zaraz po opublikowaniu dokumentu i nie powinno trwać dłużej niż kilka sekund',
  /** The title of the sync lock toast on the form view */
  'document-view.form-view.sync-lock-toast.title': 'Synchronizacja dokumentu…',

  /** The loading messaging for when the tooltip is still loading permission info */
  'insufficient-permissions-message-tooltip.loading-text': 'Ładowanie…',

  /** --- Menu items --- */
  /** The menu item group title to use for the Action menu items */
  'menu-item-groups.actions-group': 'Akcje',
  /** The menu item group title to use for the Layout menu items */
  'menu-item-groups.layout-group': 'Układ',
  /** The menu item group title to use for the Sort menu items */
  'menu-item-groups.sorting-group': 'Sortowanie',

  /** The menu item title to use the compact view */
  'menu-items.layout.compact-view': 'Widok kompaktowy',
  /** The menu item title to use the detailed view */
  'menu-items.layout.detailed-view': 'Widok szczegółowy',
  /** The menu item title to Sort by Created */
  'menu-items.sort-by.created': 'Sortuj według daty utworzenia',
  /** The menu item title to Sort by Last Edited */
  'menu-items.sort-by.last-edited': 'Sortuj według ostatniej edycji',

  /** The link text of the no document type screen that appears directly below the subtitle */
  'no-document-types-screen.link-text': 'Dowiedz się, jak dodać typ dokumentu →',
  /** The subtitle of the no document type screen that appears directly below the title */
  'no-document-types-screen.subtitle':
    'Proszę zdefiniować przynajmniej jeden typ dokumentu w swoim schemacie.',
  /** The title of the no document type screen */
  'no-document-types-screen.title': 'Brak typów dokumentów',

  /** Text shown on back button visible on smaller breakpoints */
  'pane-header.back-button.text': 'Wstecz',
  /** tooltip text (via `title` attribute) for the menu button */
  'pane-header.context-menu-button.tooltip': 'Pokaż menu',
  /** Appears in a document list pane header if there are more than one option for create. This is the label for that menu */
  'pane-header.create-menu.label': 'Utwórz',
  /** Tooltip displayed on the create new button in document lists */
  'pane-header.create-new-button.tooltip': 'Utwórz nowy dokument',
  /** The `aria-label` for the disabled button in the pane header if create permissions are granted */
  'pane-header.disabled-created-button.aria-label': 'Niewystarczające uprawnienia',

  /** The text shown in the tooltip of pane item previews of documents if there are unpublished edits */
  'pane-item.draft-status.has-draft.tooltip': 'Edytowano <RelativeTime/>',
  /** The text shown in the tooltip of pane item previews of documents if there are no unpublished edits */
  'pane-item.draft-status.no-draft.tooltip': 'Brak nieopublikowanych zmian',
  /** The subtitle tor pane item previews if there isn't a matching schema type found */
  'pane-item.missing-schema-type.subtitle': 'Dokument: <Code>{{documentId}}</Code>',
  /** The title tor pane item previews if there isn't a matching schema type found */
  'pane-item.missing-schema-type.title':
    'Nie znaleziono schematu dla typu <Code>{{documentType}}</Code>',
  /** The text shown in the tooltip of pane item previews of documents if there are unpublished edits */
  'pane-item.published-status.has-published.tooltip': 'Opublikowano <RelativeTime/>',
  /** The text shown in the tooltip of pane item previews of documents if there are no unpublished edits */
  'pane-item.published-status.no-published.tooltip': 'Brak nieopublikowanych zmian',

  /** The text used in the document header title if there is an error */
  'panes.document-header-title.error.text': 'Błąd: {{error}}',
  /** The text used in the document header title if creating a new item */
  'panes.document-header-title.new.text': 'Nowy {{schemaType}}',
  /** The text used in the document header title if no other title can be determined */
  'panes.document-header-title.untitled.text': 'Bez tytułu',
  /** The text for the retry button on the document list pane */
  'panes.document-list-pane.error.retry-button.text': 'Ponów próbę',
  /** The error text on the document list pane */
  'panes.document-list-pane.error.text': 'Błąd: <Code>{{error}}</Code>',
  /** The error title on the document list pane */
  'panes.document-list-pane.error.title': 'Nie można pobrać elementów listy',
  /** The text of the document list pane if more than a maximum number of documents are returned */
  'panes.document-list-pane.max-items.text': 'Wyświetlanie maksymalnie {{limit}} dokumentów',
  /** The text of the document list pane if no documents are found for a specified type */
  'panes.document-list-pane.no-documents-of-type.text': 'Brak dokumentów tego typu',
  /** The text of the document list pane if no documents are found */
  'panes.document-list-pane.no-documents.text': 'Nie znaleziono wyników',
  /** The text of the document list pane if no documents are found matching specified criteria */
  'panes.document-list-pane.no-matching-documents.text': 'Brak pasujących dokumentów',
  /** The aria-label for the search input on the document list pane */
  'panes.document-list-pane.search-input.aria-label': 'Szukaj na liście',
  /** The search input for the search input on the document list pane */
  'panes.document-list-pane.search-input.placeholder': 'Szukaj na liście',
  /** The summary title when displaying an error for a document operation result */
  'panes.document-operation-results.error.summary.title': 'Szczegóły',
  /** The text when a generic operation failed (fallback, generally not shown)  */
  'panes.document-operation-results.operation-error': 'Wystąpił błąd podczas {{context}}',
  /** The text when a delete operation failed  */
  'panes.document-operation-results.operation-error_delete':
    'Wystąpił błąd podczas próby usunięcia tego dokumentu. Zazwyczaj oznacza to, że istnieją inne dokumenty, które się do niego odnoszą.',
  /** The text when an unpublish operation failed  */
  'panes.document-operation-results.operation-error_unpublish':
    'Wystąpił błąd podczas próby cofnięcia publikacji tego dokumentu. Zazwyczaj oznacza to, że istnieją inne dokumenty, które się do niego odnoszą.',
  /** The text when a generic operation succeeded (fallback, generally not shown)  */
  'panes.document-operation-results.operation-success':
    'Pomyślnie wykonano {{context}} na dokumencie',
  /** The text when a delete operation succeeded  */
  'panes.document-operation-results.operation-success_delete': 'Dokument został pomyślnie usunięty',
  /** The text when a discard changes operation succeeded  */
  'panes.document-operation-results.operation-success_discardChanges':
    'Wszystkie zmiany od ostatniej publikacji zostały teraz odrzucone. Odrzucony szkic można nadal odzyskać z historii',
  /** The text when a publish operation succeeded  */
  'panes.document-operation-results.operation-success_publish': 'Dokument został opublikowany',
  /** The text when a restore operation succeeded  */
  'panes.document-operation-results.operation-success_restore':
    '<Strong>{{title}}</Strong> został przywrócony',
  /** The text when an unpublish operation succeeded  */
  'panes.document-operation-results.operation-success_unpublish':
    'Dokument został cofnięty z publikacji. Z najnowszej opublikowanej wersji utworzono szkic.',
  /** The document title shown when document title is "undefined" in operation message */
  'panes.document-operation-results.operation-undefined-title': 'Bez tytułu',
  /** The title of the reconnecting toast */
  'panes.document-pane-provider.reconnecting.title': 'Utracono połączenie. Ponowne łączenie…',
  /** The loading message for the document not found pane */
  'panes.document-pane.document-not-found.loading': 'Ładowanie dokumentu…',
  /** The text of the document not found pane if the schema is known */
  'panes.document-pane.document-not-found.text':
    'Typ dokumentu nie jest zdefiniowany, i dokument z identyfikatorem <Code>{{id}}</Code> nie mógł zostać znaleziony.',
  /** The title of the document not found pane if the schema is known */
  'panes.document-pane.document-not-found.title': 'Dokument nie został znaleziony',
  /** The text of the document not found pane if the schema is not found */
  'panes.document-pane.document-unknown-type.text':
    'Ten dokument ma typ schematu <Code>{{documentType}}</Code>, który nie jest zdefiniowany jako typ w lokalnym schemacie studia treści.',
  /** The title of the document not found pane if the schema is not found or unknown */
  'panes.document-pane.document-unknown-type.title':
    'Nieznany typ dokumentu: <Code>{{documentType}}</Code>',
  /** The title of the document not found pane if the schema is unknown */
  'panes.document-pane.document-unknown-type.without-schema.text':
    'Ten dokument nie istnieje i nie został dla niego określony żaden typ schematu.',
  /** Default message shown while resolving the structure definition for an asynchronous node */
  'panes.resolving.default-message': 'Ładowanie…',
  /** Message shown while resolving the structure definition for an asynchronous node and it is taking a while (more than 5s) */
  'panes.resolving.slow-resolve-message': 'Wciąż ładowanie…',
  /** The text to display when type is missing */
  'panes.unknown-pane-type.missing-type.text':
    'Element struktury nie zawiera wymaganej właściwości <Code>type</Code>.',
  /** The title of the unknown pane */
  'panes.unknown-pane-type.title': 'Nieznany typ panelu',
  /** The text to display when type is unknown */
  'panes.unknown-pane-type.unknown-type.text':
    'Element struktury typu <Code>{{type}}</Code> nie jest znaną jednostką.',

  /** The text for the "Open preview" action for a document */
  'production-preview.menu-item.title': 'Otwórz podgląd',

  /** Label for button when status is saved */
  'status-bar.document-status-pulse.status.saved.text': 'Zapisano',
  /** Label for button when status is syncing */
  'status-bar.document-status-pulse.status.syncing.text': 'Zapisywanie...',
  /** Accessibility label indicating when the document was last published, in relative time, eg "3 weeks ago" */
  'status-bar.publish-status-button.last-published-time.aria-label':
    'Ostatnio opublikowano {{relativeTime}}',
  /** Text for tooltip showing explanation of timestamp/relative time, eg "Last published <RelativeTime/>" */
  'status-bar.publish-status-button.last-published-time.tooltip':
    'Ostatnio opublikowano <RelativeTime/>',
  /** Accessibility label indicating when the document was last updated, in relative time, eg "2 hours ago" */
  'status-bar.publish-status-button.last-updated-time.aria-label':
    'Ostatnio zaktualizowano {{relativeTime}}',
  /** Text for tooltip showing explanation of timestamp/relative time, eg "Last updated <RelativeTime/>" */
  'status-bar.publish-status-button.last-updated-time.tooltip':
    'Ostatnio zaktualizowano <RelativeTime/>',
  /** Aria label for the button */
  'status-bar.review-changes-button.aria-label': 'Przejrzyj zmiany',
  /** Label for button when status is saved */
  'status-bar.review-changes-button.status.saved.text': 'Zapisano!',
  /** Label for button when status is syncing */
  'status-bar.review-changes-button.status.syncing.text': 'Zapisywanie...',
  /** Text for the secondary text for tooltip for the button */
  'status-bar.review-changes-button.tooltip.changes-saved': 'Zmiany zapisane',
  /** Primary text for tooltip for the button */
  'status-bar.review-changes-button.tooltip.text': 'Przejrzyj zmiany',

  /** The text that appears in side the documentation link */
  'structure-error.docs-link.text': 'Zobacz dokumentację',
  /** Labels the error message or error stack of the structure error screen */
  'structure-error.error.label': 'Błąd',
  /** The header that appears at the top of the error screen */
  'structure-error.header.text': 'Napotkano błąd podczas odczytywania struktury',
  /** The text in the reload button to retry rendering the structure */
  'structure-error.reload-button.text': 'Przeładuj',
  /** Labels the structure path of the structure error screen */
  'structure-error.structure-path.label': 'Ścieżka struktury',
})
