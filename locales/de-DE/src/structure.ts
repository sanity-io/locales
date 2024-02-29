import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Tooltip when action button is disabled because the operation is not ready   */
  'action.delete.disabled.not-ready': 'Vorgang nicht bereit',
  /** Tooltip when action button is disabled because the document does not exist */
  'action.delete.disabled.nothing-to-delete':
    'Dieses Dokument existiert noch nicht oder wurde bereits gelöscht',
  /** Label for the "Delete" document action button */
  'action.delete.label': 'Löschen',
  /** Label for the "Delete" document action while the document is being deleted */
  'action.delete.running.label': 'Löschen…',
  /** Message prompting the user to confirm discarding changes */
  'action.discard-changes.confirm-dialog.confirm-discard-changes':
    'Sind Sie sicher, dass Sie alle Änderungen seit der letzten Veröffentlichung verwerfen möchten?',
  /** Tooltip when action is disabled because the document has no unpublished changes */
  'action.discard-changes.disabled.no-change':
    'Dieses Dokument hat keine unveröffentlichten Änderungen',
  /** Tooltip when action is disabled because the document is not published */
  'action.discard-changes.disabled.not-published': 'Dieses Dokument ist nicht veröffentlicht',
  /** Tooltip when action button is disabled because the operation is not ready   */
  'action.discard-changes.disabled.not-ready': 'Operation nicht bereit',
  /** Label for the "Discard changes" document action */
  'action.discard-changes.label': 'Änderungen verwerfen',
  /** Tooltip when action is disabled because the operation is not ready   */
  'action.duplicate.disabled.not-ready': 'Operation nicht bereit',
  /** Tooltip when action is disabled because the document doesn't exist */
  'action.duplicate.disabled.nothing-to-duplicate':
    'Dieses Dokument existiert noch nicht, daher gibt es nichts zu duplizieren',
  /** Label for the "Duplicate" document action */
  'action.duplicate.label': 'Duplizieren',
  /** Label for the "Duplicate" document action while the document is being duplicated */
  'action.duplicate.running.label': 'Duplizieren…',
  /** Tooltip when publish button is disabled because the document is already published, and published time is unavailable.*/
  'action.publish.already-published.no-time-ago.tooltip': 'Bereits veröffentlicht',
  /** Tooltip when publish button is disabled because the document is already published.*/
  'action.publish.already-published.tooltip': 'Vor {{timeSincePublished}} veröffentlicht',
  /** Tooltip when action is disabled because the studio is not ready.*/
  'action.publish.disabled.not-ready': 'Vorgang nicht bereit',
  /** Label for action when there are pending changes.*/
  'action.publish.draft.label': 'Veröffentlichen',
  /** Label for the "Publish" document action when the document has live edit enabled.*/
  'action.publish.live-edit.label': 'Veröffentlichen',
  /** Fallback tooltip for the "Publish" document action when publish is invoked for a document with live edit enabled.*/
  'action.publish.live-edit.publish-disabled':
    'Kann nicht veröffentlichen, da Live Edit für diesen Dokumenttyp aktiviert ist',
  /** Tooltip for the "Publish" document action when the document has live edit enabled.*/
  'action.publish.live-edit.tooltip':
    'Live Edit ist für diesen Inhaltstyp aktiviert und die Veröffentlichung erfolgt automatisch, während Sie Änderungen vornehmen',
  /** Tooltip when publish button is disabled because there are no changes.*/
  'action.publish.no-changes.tooltip': 'Keine unveröffentlichten Änderungen',
  /** Label for the "Publish" document action when there are no changes.*/
  'action.publish.published.label': 'Veröffentlicht',
  /** Label for the "Publish" document action while publish is being executed.*/
  'action.publish.running.label': 'Wird veröffentlicht…',
  /** Tooltip when the "Publish" document action is disabled due to validation issues */
  'action.publish.validation-issues.tooltip':
    'Es gibt Validierungsfehler, die behoben werden müssen, bevor dieses Dokument veröffentlicht werden kann',
  /** Tooltip when publish button is waiting for validation and async tasks to complete.*/
  'action.publish.waiting': 'Warten auf den Abschluss von Aufgaben vor der Veröffentlichung',
  /** Message prompting the user to confirm that they want to restore to an earlier version*/
  'action.restore.confirm.message':
    'Sind Sie sicher, dass Sie dieses Dokument wiederherstellen möchten?',
  /** Fallback tooltip for when user is looking at the initial version */
  'action.restore.disabled.cannot-restore-initial':
    'Sie können nicht zur ursprünglichen Version wiederherstellen',
  /** Label for the "Restore" document action */
  'action.restore.label': 'Wiederherstellen',
  /** Default tooltip for the action */
  'action.restore.tooltip': 'Zu dieser Version wiederherstellen',
  /** Tooltip when action is disabled because the document is not already published */
  'action.unpublish.disabled.not-published': 'Dieses Dokument ist nicht veröffentlicht',
  /** Tooltip when action is disabled because the operation is not ready   */
  'action.unpublish.disabled.not-ready': 'Operation nicht bereit',
  /** Label for the "Unpublish" document action */
  'action.unpublish.label': 'Unveröffentlichen',
  /** Fallback tooltip for the Unpublish document action when publish is invoked for a document with live edit enabled.*/
  'action.unpublish.live-edit.disabled':
    'Dieses Dokument hat Live-Bearbeitung aktiviert und kann nicht zurückgezogen werden',

  /** The text for the restore button on the deleted document banner */
  'banners.deleted-document-banner.restore-button.text': 'Letzte Version wiederherstellen',
  /** The text content for the deleted document banner */
  'banners.deleted-document-banner.text': 'Dieses Dokument wurde gelöscht.',
  /** The text content for the deprecated document type banner */
  'banners.deprecated-document-type-banner.text': undefined, // 'This document type has been deprecated.'
  /** The text for the permission check banner if the user only has one role, and it does not allow updating this document */
  'banners.permission-check-banner.missing-permission_create_one':
    'Ihre Rolle <Roles/> hat keine Berechtigungen, um dieses Dokument zu erstellen.',
  /** The text for the permission check banner if the user only has multiple roles, but they do not allow updating this document */
  'banners.permission-check-banner.missing-permission_create_other':
    'Ihre Rollen <Roles/> haben keine Berechtigungen, um dieses Dokument zu erstellen.',
  /** The text for the permission check banner if the user only has one role, and it does not allow updating this document */
  'banners.permission-check-banner.missing-permission_update_one':
    'Ihre Rolle <Roles/> hat keine Berechtigungen, um dieses Dokument zu aktualisieren.',
  /** The text for the permission check banner if the user only has multiple roles, but they do not allow updating this document */
  'banners.permission-check-banner.missing-permission_update_other':
    'Ihre Rollen <Roles/> haben keine Berechtigungen, um dieses Dokument zu aktualisieren.',
  /** The text for the reload button */
  'banners.reference-changed-banner.reason-changed.reload-button.text': 'Referenz neu laden',
  /** The text for the reference change banner if the reason is that the reference has been changed */
  'banners.reference-changed-banner.reason-changed.text':
    'Diese Referenz hat sich geändert, seitdem Sie sie geöffnet haben.',
  /** The text for the close button */
  'banners.reference-changed-banner.reason-removed.close-button.text': 'Referenz schließen',
  /** The text for the reference change banner if the reason is that the reference has been deleted */
  'banners.reference-changed-banner.reason-removed.text':
    'Diese Referenz wurde entfernt, seitdem Sie sie geöffnet haben.',

  /** Browser/tab title when creating a new document of a given type */
  'browser-document-title.new-document': undefined, // 'New {{schemaType}}'
  /** Browser/tab title when editing a document where the title cannot be resolved from preview configuration */
  'browser-document-title.untitled-document': undefined, // 'Untitled'

  /** The action menu button aria-label */
  'buttons.action-menu-button.aria-label': 'Dokumentaktionen öffnen',
  /** The action menu button tooltip */
  'buttons.action-menu-button.tooltip': 'Dokumentaktionen',
  /** The aria-label for the split pane button on the document panel header */
  'buttons.split-pane-button.aria-label': 'Teile das Fenster rechts',
  /** The tool tip for the split pane button on the document panel header */
  'buttons.split-pane-button.tooltip': 'Teile das Fenster rechts',
  /** The title for the close button on the split pane on the document panel header */
  'buttons.split-pane-close-button.title': 'Geteiltes Fenster schließen',
  /** The title for the close group button on the split pane on the document panel header */
  'buttons.split-pane-close-group-button.title': 'Fenstergruppe schließen',

  /** The text in the "Cancel" button in the confirm delete dialog that cancels the action and closes the dialog */
  'confirm-delete-dialog.cancel-button.text': 'Abbrechen',
  /** Used in `confirm-delete-dialog.cdr-summary.title` */
  'confirm-delete-dialog.cdr-summary.document-count_one': '1 Dokument',
  /** Used in `confirm-delete-dialog.cdr-summary.title` */
  'confirm-delete-dialog.cdr-summary.document-count_other': '{{count}} Dokumente',
  /** The text that appears in the subtitle `<summary>` that lists the datasets below the title */
  'confirm-delete-dialog.cdr-summary.subtitle_one': 'Dataset: {{datasets}}',
  /** The text that appears in the subtitle `<summary>` that lists the datasets below the title */
  'confirm-delete-dialog.cdr-summary.subtitle_other': 'Datasets: {{datasets}}',
  /** The text that appears in the subtitle `<summary>` that lists the datasets below the title */
  'confirm-delete-dialog.cdr-summary.subtitle_unavailable_one': 'Nicht verfügbares Dataset',
  /** The text that appears in the subtitle `<summary>` that lists the datasets below the title */
  'confirm-delete-dialog.cdr-summary.subtitle_unavailable_other': 'Nicht verfügbare Datasets',
  /** The text that appears in the title `<summary>` that includes the list of CDRs (singular) */
  'confirm-delete-dialog.cdr-summary.title_one': '{{documentCount}} in einem anderen Dataset',
  /** The text that appears in the title `<summary>` that includes the list of CDRs (plural) */
  'confirm-delete-dialog.cdr-summary.title_other': '{{documentCount}} in {{count}} Datasets',
  /** Appears when hovering over the copy button to copy */
  'confirm-delete-dialog.cdr-table.copy-id-button.tooltip': 'ID in die Zwischenablage kopieren',
  /** The header for the dataset column in the list of cross-dataset references found */
  'confirm-delete-dialog.cdr-table.dataset.label': 'Dataset',
  /** The header for the document ID column in the list of cross-dataset references found */
  'confirm-delete-dialog.cdr-table.document-id.label': 'Dokument-ID',
  /** The toast title when the copy button has been clicked */
  'confirm-delete-dialog.cdr-table.id-copied-toast.title':
    'Dokument-ID in die Zwischenablage kopiert!',
  /** The header for the project ID column in the list of cross-dataset references found */
  'confirm-delete-dialog.cdr-table.project-id.label': 'Projekt-ID',
  /** The text in the "Delete anyway" button in the confirm delete dialog that confirms the action */
  'confirm-delete-dialog.confirm-anyway-button.text_delete': 'Trotzdem löschen',
  /** The text in the "Unpublish anyway" button in the confirm delete dialog that confirms the action */
  'confirm-delete-dialog.confirm-anyway-button.text_unpublish': 'Trotzdem zurückziehen',
  /** The text in the "Delete now" button in the confirm delete dialog that confirms the action */
  'confirm-delete-dialog.confirm-button.text_delete': 'Jetzt löschen',
  /** The text in the "Unpublish now" button in the confirm delete dialog that confirms the action */
  'confirm-delete-dialog.confirm-button.text_unpublish': 'Jetzt zurückziehen',
  /** If no referring documents are found, this text appears above the cancel and confirmation buttons */
  'confirm-delete-dialog.confirmation.text_delete':
    'Sind Sie sicher, dass Sie „<DocumentTitle/>“ löschen möchten?',
  /** If no referring documents are found, this text appears above the cancel and confirmation buttons */
  'confirm-delete-dialog.confirmation.text_unpublish':
    'Sind Sie sicher, dass Sie „<DocumentTitle/>“ zurückziehen möchten?',
  /** The text body of the error dialog. */
  'confirm-delete-dialog.error.message.text':
    'Beim Laden referenzierender Dokumente ist ein Fehler aufgetreten.',
  /** The text in the retry button of the confirm delete dialog if an error occurred. */
  'confirm-delete-dialog.error.retry-button.text': 'Erneut versuchen',
  /** The header of the confirm delete dialog if an error occurred while the confirm delete dialog was open. */
  'confirm-delete-dialog.error.title.text': 'Fehler',
  /** The header of the confirm delete dialog */
  'confirm-delete-dialog.header.text_delete': 'Dokument löschen?',
  /** The header of the confirm delete dialog */
  'confirm-delete-dialog.header.text_unpublish': 'Dokument zurückziehen?',
  /** The text that appears while the referring documents are queried */
  'confirm-delete-dialog.loading.text': 'Suche nach verweisenden Dokumenten…',
  /** Shown if there are references to other documents but the user does not have the permission to see the relevant document IDs */
  'confirm-delete-dialog.other-reference-count.title_one': '1 andere Referenz nicht angezeigt',
  /** Shown if there are references to other documents but the user does not have the permission to see the relevant document IDs */
  'confirm-delete-dialog.other-reference-count.title_other':
    '{{count}} andere Referenzen nicht angezeigt',
  /** Text in the tooltip of this component if hovering over the info icon */
  'confirm-delete-dialog.other-reference-count.tooltip':
    'Wir können die Metadaten für diese Referenzen aufgrund eines fehlenden Zugriffstokens für die zugehörigen Datasets nicht anzeigen.',
  /** Appears when unable to render a document preview in the referring document list */
  'confirm-delete-dialog.preview-item.preview-unavailable.subtitle': 'ID: {{documentId}}',
  /** Appears when unable to render a document preview in the referring document list */
  'confirm-delete-dialog.preview-item.preview-unavailable.title': 'Vorschau nicht verfügbar',
  /** Warns the user of affects to other documents if the action is confirmed (delete) */
  'confirm-delete-dialog.referential-integrity-disclaimer.text_delete':
    'Wenn Sie dieses Dokument löschen, können Dokumente, die darauf verweisen, nicht mehr darauf zugreifen.',
  /** Warns the user of affects to other documents if the action is confirmed (unpublish) */
  'confirm-delete-dialog.referential-integrity-disclaimer.text_unpublish':
    'Wenn Sie dieses Dokument zurückziehen, können Dokumente, die darauf verweisen, nicht mehr darauf zugreifen.',
  /** Tells the user the count of how many other referring documents there are before listing them. (singular) */
  'confirm-delete-dialog.referring-document-count.text_one':
    '1 Dokument verweist auf „<DocumentTitle/>“',
  /** Tells the user the count of how many other referring documents there are before listing them. (plural) */
  'confirm-delete-dialog.referring-document-count.text_other':
    '{{count}} Dokumente verweisen auf „<DocumentTitle/>“',
  /** Describes the list of documents that refer to the one trying to be deleted (delete) */
  'confirm-delete-dialog.referring-documents-descriptor.text_delete':
    'Es könnte sein, dass Sie „<DocumentTitle/>“ nicht löschen können, weil die folgenden Dokumente darauf verweisen:',
  /** Describes the list of documents that refer to the one trying to be deleted (unpublish) */
  'confirm-delete-dialog.referring-documents-descriptor.text_unpublish':
    'Es könnte sein, dass Sie „<DocumentTitle/>“ nicht zurückziehen können, weil die folgenden Dokumente darauf verweisen:',

  /** The text for the cancel button in the confirm dialog used in document action shortcuts if none is provided */
  'confirm-dialog.cancel-button.fallback-text': 'Abbrechen',
  /** The text for the confirm button in the confirm dialog used in document action shortcuts if none is provided */
  'confirm-dialog.confirm-button.fallback-text': 'Bestätigen',

  /** For the default structure definition, the title for the "Content" pane */
  'default-definition.content-title': 'Inhalt',

  /** The text shown if there was an error while getting the document's title via a preview value */
  'doc-title.error.text': 'Fehler: {{errorMessage}}',
  /** The text shown if the preview value for a document is non-existent or empty */
  'doc-title.fallback.text': 'Ohne Titel',
  /** The text shown if a document's title via a preview value cannot be determined due to an unknown schema type */
  'doc-title.unknown-schema-type.text': 'Unbekannter Schema-Typ: {{schemaType}}',

  /** Tooltip text shown for the close button of the document inspector */
  'document-inspector.close-button.tooltip': undefined, // 'Close'
  /** The title shown in the dialog header, when inspecting a valid document */
  'document-inspector.dialog.title': 'Inspektion von <DocumentTitle/>',
  /** The title shown in the dialog header, when the document being inspected is not created yet/has no value */
  'document-inspector.dialog.title-no-value': 'Kein Wert',
  /** Title shown for menu item that opens the "Inspect" dialog */
  'document-inspector.menu-item.title': 'Untersuchen',
  /** the placeholder text for the search input on the inspect dialog */
  'document-inspector.search.placeholder': 'Suchen',
  /** The "parsed" view mode, meaning the JSON is searchable, collapsible etc */
  'document-inspector.view-mode.parsed': 'Geparst',
  /** The "raw" view mode, meaning the JSON is presented syntax-highlighted, but with no other features - optimal for copying */
  'document-inspector.view-mode.raw-json': 'Rohes JSON',

  /** The text for when a form is hidden */
  'document-view.form-view.form-hidden': 'Dieses Formular ist versteckt',
  /** Fallback title shown when a form title is not provided */
  'document-view.form-view.form-title-fallback': 'Ohne Titel',
  /** The text for when the form view is loading a document */
  'document-view.form-view.loading': 'Dokument wird geladen…',
  /** The description of the sync lock toast on the form view */
  'document-view.form-view.sync-lock-toast.description':
    'Bitte warten Sie, während das Dokument synchronisiert wird. Dies geschieht in der Regel unmittelbar nachdem das Dokument veröffentlicht wurde und sollte nicht mehr als ein paar Sekunden dauern',
  /** The title of the sync lock toast on the form view */
  'document-view.form-view.sync-lock-toast.title': 'Dokument wird synchronisiert…',

  /** The loading messaging for when the tooltip is still loading permission info */
  'insufficient-permissions-message-tooltip.loading-text': 'Lädt…',

  /** --- Menu items --- */
  /** The menu item group title to use for the Action menu items */
  'menu-item-groups.actions-group': 'Aktionen',
  /** The menu item group title to use for the Layout menu items */
  'menu-item-groups.layout-group': 'Layout',
  /** The menu item group title to use for the Sort menu items */
  'menu-item-groups.sorting-group': 'Sortierung',

  /** The menu item title to use the compact view */
  'menu-items.layout.compact-view': 'Kompakte Ansicht',
  /** The menu item title to use the detailed view */
  'menu-items.layout.detailed-view': 'Detaillierte Ansicht',
  /** The menu item title to Sort by Created */
  'menu-items.sort-by.created': 'Sortieren nach Erstellung',
  /** The menu item title to Sort by Last Edited */
  'menu-items.sort-by.last-edited': 'Sortieren nach Letzter Bearbeitung',

  /** The link text of the no document type screen that appears directly below the subtitle */
  'no-document-types-screen.link-text': 'Erfahren Sie, wie Sie einen Dokumenttyp hinzufügen →',
  /** The subtitle of the no document type screen that appears directly below the title */
  'no-document-types-screen.subtitle':
    'Bitte definieren Sie mindestens einen Dokumenttyp in Ihrem Schema.',
  /** The title of the no document type screen */
  'no-document-types-screen.title': 'Keine Dokumenttypen',

  /** Text shown on back button visible on smaller breakpoints */
  'pane-header.back-button.text': 'Zurück',
  /** tooltip text (via `title` attribute) for the menu button */
  'pane-header.context-menu-button.tooltip': 'Menü anzeigen',
  /** Appears in a document list pane header if there are more than one option for create. This is the label for that menu */
  'pane-header.create-menu.label': 'Erstellen',
  /** Tooltip displayed on the create new button in document lists */
  'pane-header.create-new-button.tooltip': 'Neues Dokument erstellen',
  /** The `aria-label` for the disabled button in the pane header if create permissions are granted */
  'pane-header.disabled-created-button.aria-label': 'Unzureichende Berechtigungen',

  /** The text shown in the tooltip of pane item previews of documents if there are unpublished edits */
  'pane-item.draft-status.has-draft.tooltip': 'Bearbeitet <RelativeTime/>',
  /** The text shown in the tooltip of pane item previews of documents if there are no unpublished edits */
  'pane-item.draft-status.no-draft.tooltip': 'Keine unveröffentlichten Bearbeitungen',
  /** The subtitle tor pane item previews if there isn't a matching schema type found */
  'pane-item.missing-schema-type.subtitle': 'Dokument: <Code>{{documentId}}</Code>',
  /** The title tor pane item previews if there isn't a matching schema type found */
  'pane-item.missing-schema-type.title':
    'Kein Schema für Typ <Code>{{documentType}}</Code> gefunden',
  /** The text shown in the tooltip of pane item previews of documents if there are unpublished edits */
  'pane-item.published-status.has-published.tooltip': 'Veröffentlicht <RelativeTime/>',
  /** The text shown in the tooltip of pane item previews of documents if there are no unpublished edits */
  'pane-item.published-status.no-published.tooltip': 'Keine unveröffentlichten Bearbeitungen',

  /** The text used in the document header title if there is an error */
  'panes.document-header-title.error.text': 'Fehler: {{error}}',
  /** The text used in the document header title if creating a new item */
  'panes.document-header-title.new.text': 'Neues {{schemaType}}',
  /** The text used in the document header title if no other title can be determined */
  'panes.document-header-title.untitled.text': 'Ohne Titel',
  /** The text for the retry button on the document list pane */
  'panes.document-list-pane.error.retry-button.text': 'Erneut versuchen',
  /** The error text on the document list pane */
  'panes.document-list-pane.error.text': 'Fehler: <Code>{{error}}</Code>',
  /** The error title on the document list pane */
  'panes.document-list-pane.error.title': 'Listenelemente konnten nicht abgerufen werden',
  /** The text of the document list pane if more than a maximum number of documents are returned */
  'panes.document-list-pane.max-items.text': 'Es werden maximal {{limit}} Dokumente angezeigt',
  /** The text of the document list pane if no documents are found for a specified type */
  'panes.document-list-pane.no-documents-of-type.text': 'Keine Dokumente dieses Typs',
  /** The text of the document list pane if no documents are found */
  'panes.document-list-pane.no-documents.text': 'Keine Ergebnisse gefunden',
  /** The text of the document list pane if no documents are found matching specified criteria */
  'panes.document-list-pane.no-matching-documents.text': 'Keine übereinstimmenden Dokumente',
  /** The aria-label for the search input on the document list pane */
  'panes.document-list-pane.search-input.aria-label': 'Liste durchsuchen',
  /** The search input for the search input on the document list pane */
  'panes.document-list-pane.search-input.placeholder': 'Liste durchsuchen',
  /** The summary title when displaying an error for a document operation result */
  'panes.document-operation-results.error.summary.title': 'Details',
  /** The text when a generic operation failed (fallback, generally not shown)  */
  'panes.document-operation-results.operation-error':
    'Während {{context}} ist ein Fehler aufgetreten',
  /** The text when a delete operation failed  */
  'panes.document-operation-results.operation-error_delete':
    'Beim Versuch, dieses Dokument zu löschen, ist ein Fehler aufgetreten. Das bedeutet normalerweise, dass es andere Dokumente gibt, die darauf verweisen.',
  /** The text when an unpublish operation failed  */
  'panes.document-operation-results.operation-error_unpublish':
    'Beim Versuch, dieses Dokument zurückzuziehen, ist ein Fehler aufgetreten. Das bedeutet normalerweise, dass es andere Dokumente gibt, die darauf verweisen.',
  /** The text when a generic operation succeeded (fallback, generally not shown)  */
  'panes.document-operation-results.operation-success':
    '{{context}} am Dokument erfolgreich durchgeführt',
  /** The text when a delete operation succeeded  */
  'panes.document-operation-results.operation-success_delete':
    'Das Dokument wurde erfolgreich gelöscht',
  /** The text when a discard changes operation succeeded  */
  'panes.document-operation-results.operation-success_discardChanges':
    'Alle Änderungen seit der letzten Veröffentlichung wurden verworfen. Der verworfene Entwurf kann noch aus der Historie wiederhergestellt werden',
  /** The text when a publish operation succeeded  */
  'panes.document-operation-results.operation-success_publish': 'Das Dokument wurde veröffentlicht',
  /** The text when a restore operation succeeded  */
  'panes.document-operation-results.operation-success_restore': undefined, // '<Strong>{{title}}</Strong> was restored'
  /** The text when an unpublish operation succeeded  */
  'panes.document-operation-results.operation-success_unpublish':
    'Das Dokument wurde zurückgezogen. Ein Entwurf wurde aus der letzten veröffentlichten Version erstellt.',
  /** The document title shown when document title is "undefined" in operation message */
  'panes.document-operation-results.operation-undefined-title': undefined, // 'Untitled'
  /** The title of the reconnecting toast */
  'panes.document-pane-provider.reconnecting.title': 'Verbindung verloren. Wiederverbindung…',
  /** The loading message for the document not found pane */
  'panes.document-pane.document-not-found.loading': 'Dokument wird geladen…',
  /** The text of the document not found pane if the schema is known */
  'panes.document-pane.document-not-found.text':
    'Der Dokumenttyp ist nicht definiert, und ein Dokument mit dem <Code>{{id}}</Code> Kennzeichen konnte nicht gefunden werden.',
  /** The title of the document not found pane if the schema is known */
  'panes.document-pane.document-not-found.title': 'Das Dokument wurde nicht gefunden',
  /** The text of the document not found pane if the schema is not found */
  'panes.document-pane.document-unknown-type.text':
    'Dieses Dokument hat den Schema-Typ <Code>{{documentType}}</Code>, der nicht als Typ im lokalen Content Studio Schema definiert ist.',
  /** The title of the document not found pane if the schema is not found or unknown */
  'panes.document-pane.document-unknown-type.title':
    'Unbekannter Dokumenttyp: <Code>{{documentType}}</Code>',
  /** The title of the document not found pane if the schema is unknown */
  'panes.document-pane.document-unknown-type.without-schema.text':
    'Dieses Dokument existiert nicht, und es wurde kein Schema-Typ dafür angegeben.',
  /** Default message shown while resolving the structure definition for an asynchronous node */
  'panes.resolving.default-message': 'Laden…',
  /** Message shown while resolving the structure definition for an asynchronous node and it is taking a while (more than 5s) */
  'panes.resolving.slow-resolve-message': 'Lädt immer noch…',
  /** The text to display when type is missing */
  'panes.unknown-pane-type.missing-type.text':
    'Strukturelement fehlt erforderliche <Code>type</Code> Eigenschaft.',
  /** The title of the unknown pane */
  'panes.unknown-pane-type.title': 'Unbekannter Pane-Typ',
  /** The text to display when type is unknown */
  'panes.unknown-pane-type.unknown-type.text':
    'Strukturelement vom Typ <Code>{{type}}</Code> ist keine bekannte Entität.',

  /** The text for the "Open preview" action for a document */
  'production-preview.menu-item.title': 'Vorschau öffnen',

  /** Label for button when status is saved */
  'status-bar.document-status-pulse.status.saved.text': undefined, // 'Saved'
  /** Label for button when status is syncing */
  'status-bar.document-status-pulse.status.syncing.text': undefined, // 'Saving...'
  /** Accessibility label indicating when the document was last published, in relative time, eg "3 weeks ago" */
  'status-bar.publish-status-button.last-published-time.aria-label':
    'Zuletzt veröffentlicht {{relativeTime}}',
  /** Text for tooltip showing explanation of timestamp/relative time, eg "Last published <RelativeTime/>" */
  'status-bar.publish-status-button.last-published-time.tooltip':
    'Zuletzt veröffentlicht <RelativeTime/>',
  /** Accessibility label indicating when the document was last updated, in relative time, eg "2 hours ago" */
  'status-bar.publish-status-button.last-updated-time.aria-label':
    'Zuletzt aktualisiert {{relativeTime}}',
  /** Text for tooltip showing explanation of timestamp/relative time, eg "Last updated <RelativeTime/>" */
  'status-bar.publish-status-button.last-updated-time.tooltip':
    'Zuletzt aktualisiert <RelativeTime/>',
  /** Aria label for the button */
  'status-bar.review-changes-button.aria-label': 'Änderungen überprüfen',
  /** Label for button when status is saved */
  'status-bar.review-changes-button.status.saved.text': 'Gespeichert!',
  /** Label for button when status is syncing */
  'status-bar.review-changes-button.status.syncing.text': 'Speichern...',
  /** Text for the secondary text for tooltip for the button */
  'status-bar.review-changes-button.tooltip.changes-saved': 'Änderungen gespeichert',
  /** Primary text for tooltip for the button */
  'status-bar.review-changes-button.tooltip.text': 'Änderungen überprüfen',

  /** The text that appears in side the documentation link */
  'structure-error.docs-link.text': 'Dokumentation ansehen',
  /** Labels the error message or error stack of the structure error screen */
  'structure-error.error.label': 'Fehler',
  /** The header that appears at the top of the error screen */
  'structure-error.header.text': 'Fehler beim Lesen der Struktur aufgetreten',
  /** The text in the reload button to retry rendering the structure */
  'structure-error.reload-button.text': 'Neu laden',
  /** Labels the structure path of the structure error screen */
  'structure-error.structure-path.label': 'Strukturpfad',
})
