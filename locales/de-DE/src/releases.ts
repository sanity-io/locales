import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Action text for adding a document to release */
  'action.add-document': 'Dokument hinzufügen',
  /** Action text for archiving a release */
  'action.archive': 'Release archivieren',
  /** Tooltip for when the archive release action is disabled due to release being scheduled  */
  'action.archive.tooltip': 'Heben Sie die Planung dieses Releases auf, um es zu archivieren',
  /** Action text for showing the archived releases */
  'action.archived': 'Archiviert',
  /** Menu item label for copying release ID */
  'action.copy-release-id.label': 'Release-ID kopieren',
  /** Menu item label for copying release URL */
  'action.copy-release-link.label': 'Release-URL kopieren',
  /** Menu item label for copying release title */
  'action.copy-release-title.label': 'Release-Titel kopieren',
  /** Tooltip for copy release actions button */
  'action.copy-release.label': 'Kopieren',
  /** Action text for staging a new revert release */
  'action.create-revert-release': 'Neues Release erstellen',
  /** Action text for deleting a release */
  'action.delete-release': 'Release löschen',
  /** Menu item label for showing scheduled drafts */
  'action.drafts': 'Geplante Entwürfe',
  /** Action text for duplicating a release */
  'action.duplicate-release': 'Release duplizieren',
  /** Action text for editing a release */
  'action.edit': 'Release bearbeiten',
  /** Action text for reverting a release immediately without staging changes */
  'action.immediate-revert-release': 'Jetzt zurücksetzen',
  /** Action text for opening a release */
  'action.open': 'Aktiv',
  /** Action text for showing the paused scheduled drafts */
  'action.paused': 'Pausiert',
  /** Action text for publishing all documents in a release (and the release itself) */
  'action.publish-all-documents': 'Release ausführen',
  /** Menu item label for showing releases (multi-document releases) */
  'action.releases': 'Releases',
  /** Action text for reverting a release */
  'action.revert': 'Release zurücksetzen',
  /** Action message for when document is scheduled for unpublishing a document and you want to no longer unpublish it */
  'action.revert-unpublish-actions': 'Veröffentlichungsrücknahme beim Release rückgängig machen',
  /** Text for the review changes button in release tool */
  'action.review': 'Änderungen überprüfen',
  /** Action text for scheduling a release */
  'action.schedule': 'Release planen...',
  /** Action text for scheduling unpublish of a draft document */
  'action.schedule-unpublish': 'Veröffentlichungsrücknahme planen',
  /** Tooltip text for when schedule unpublish is disabled because document is not published */
  'action.schedule-unpublish.disabled.not-published':
    'Das Dokument muss veröffentlicht sein, um die Veröffentlichungsrücknahme zu planen',
  /** Label for unarchiving a release */
  'action.unarchive': 'Release aus dem Archiv holen',
  /** Action text for unpublishing a document in a release in the context menu */
  'action.unpublish': 'Unveröffentlichen',
  /** Action message for scheduling an unpublished of a document  */
  'action.unpublish-doc-actions': 'Unveröffentlichen bei Freigabe',
  /** Action text for unscheduling a release */
  'action.unschedule': 'Freigabe-Planung aufheben',

  /** Text for the summary button in release tool */
  'actions.summary': 'Zusammenfassung',

  /* The text for the activity event when a document is added to a release */
  'activity.event.add-document': 'Eine Dokumentversion hinzugefügt',
  /* The text for the activity event when the release is archived */
  'activity.event.archive': 'Die Freigabe <strong>{{releaseTitle}}</strong> archiviert',
  /* The text for the activity event when the release is created */
  'activity.event.create':
    'Die Freigabe <strong>{{releaseTitle}}</strong> erstellt <ScheduleTarget>mit Ziel </ScheduleTarget>',
  /* The text for the activity event when a document is removed from a release */
  'activity.event.discard-document': 'Eine Dokumentversion verworfen',
  'activity.event.edit': 'Freigabezeitpunkt auf <ScheduleTarget></ScheduleTarget> gesetzt',
  /**The text to display in the changes when the release type changes to asap */
  'activity.event.edit-time-asap': 'So bald wie möglich',
  /**The text to display in the changes when the release type changes to undecided */
  'activity.event.edit-time-undecided': 'Unentschieden',
  /* The text for the activity event when the release is published */
  'activity.event.publish': 'Die Freigabe <strong>{{releaseTitle}}</strong> veröffentlicht',
  /* The text for the activity event when the release is scheduled */
  'activity.event.schedule': 'Als geplant markiert',
  /** The text for the activity event when the release is unarchived */
  'activity.event.unarchive':
    'Die Freigabe <strong>{{releaseTitle}}</strong> aus dem Archiv geholt',
  /** The text for the activity event when the release is unscheduled */
  'activity.event.unschedule': 'Als ungeplant markiert',
  /** The loading text for when releases are loading */
  'activity.panel.error': 'Beim Abrufen der Freigabe-Aktivität ist ein Fehler aufgetreten',
  /** The loading text for when releases are loading */
  'activity.panel.loading': 'Freigabe-Aktivität wird geladen',
  /** The title for the activity panel shown in the releases detail screen */
  'activity.panel.title': 'Aktivität',

  /** Label for the button to proceed with archiving a release */
  'archive-dialog.confirm-archive-button': 'Ja, Freigabe archivieren',
  /** Description for the dialog confirming the archive of a release with one document */
  'archive-dialog.confirm-archive-description_one': 'Dies wird 1 Dokumentversion archivieren.',
  /** Description for the dialog confirming the archive of a release with more than one document */
  'archive-dialog.confirm-archive-description_other':
    'Dies wird {{count}} Dokumentversionen archivieren.',
  /** Header for the dialog confirming the archive of a release */
  'archive-dialog.confirm-archive-header': 'Möchten Sie diese Freigabe wirklich archivieren?',
  /** Title for the dialog confirming the archive of a release */
  'archive-dialog.confirm-archive-title':
    "Möchten Sie die Freigabe <strong>'{{title}}'</strong> wirklich archivieren?",

  /** Description for information card on a published or archived release to description retention effects */
  'archive-info.description':
    'Sie ist für {{retentionDays}} Tage verfügbar und wird dann am {{removalDate}} automatisch entfernt. <Link>Mehr über die Aufbewahrung erfahren</Link>.',
  /** Title for information card on a archived release */
  'archive-info.title': 'Diese Freigabe ist archiviert',

  /** Banner text showing count of active scheduled drafts requiring confirmation with one draft */
  'banner.confirm-active-scheduled-drafts_one':
    'Es gibt {{count}} Scheduled Draft, der eine Terminbestätigung erfordert',
  /** Banner text showing count of active scheduled drafts requiring confirmation with multiple drafts */
  'banner.confirm-active-scheduled-drafts_other':
    'Es gibt {{count}} Scheduled Drafts, die eine Terminbestätigung erfordern',
  /** Button text for confirming scheduling of active drafts */
  'banner.confirm-active-scheduled-drafts.button': 'Planung fortsetzen',
  /** Button text when confirming schedules from paused mode */
  'banner.confirm-active-scheduled-drafts.button-paused': 'Alle Planungen fortsetzen',
  /** Banner text shown when drafts mode is disabled but there are still scheduled drafts */
  'banner.drafts-mode-disabled':
    'Der Entwurfsmodus wurde deaktiviert, aber es gibt noch Scheduled Drafts, die veröffentlicht werden sollen.',
  /** Banner text shown when navigating to a release that does not exist */
  'banner.release-not-found': 'Dieses Release konnte nicht gefunden werden',
  /** Tooltip for the dismiss button in the release not found banner */
  'banner.release-not-found.dismiss': 'Schließen',
  /** Banner text shown when scheduled drafts feature is disabled but there are still scheduled drafts */
  'banner.scheduled-drafts-disabled':
    'Scheduled Drafts wurde deaktiviert, aber es gibt noch Scheduled Drafts, die veröffentlicht werden sollen.',

  /** Title for changes to published documents */
  'changes-published-docs.title': 'Änderungen an veröffentlichten Dokumenten',

  /** Dialog confirm button text for confirming all scheduled drafts */
  'confirm-active-scheduled-drafts-dialog.confirm-button': 'Planungen bestätigen',
  /** Dialog description for confirming active scheduled drafts */
  'confirm-active-scheduled-drafts-dialog.description':
    'Alle pausierten Scheduled Drafts für ihre vorgesehenen Veröffentlichungsdaten einplanen',
  /** Dialog warning when some scheduled drafts have past dates */
  'confirm-active-scheduled-drafts-dialog.past-dates-warning':
    'Einige dieser Scheduled Drafts sind für vergangene Daten geplant. Das Bestätigen der Planungen wird diese Dokumentversionen sofort veröffentlichen.',
  /** Dialog title for confirming active scheduled drafts */
  'confirm-active-scheduled-drafts-dialog.title': 'Scheduled Drafts fortsetzen',

  /** Suffix for when a release is a copy of another release */
  'copy-suffix': 'Kopie',

  /** Confirm button text for overriding existing draft */
  'copy-to-draft-dialog.confirm-button': 'Ja, Entwurf überschreiben',
  /** Description for dialog when copying version to draft that already exists */
  'copy-to-draft-dialog.description':
    'Eine Entwurfsversion dieses Dokuments existiert bereits. Die aktuelle Version in den Entwurf kopieren und die vorhandene Entwurfsversion überschreiben.',
  /** Title for dialog when copying version to draft that already exists */
  'copy-to-draft-dialog.title': 'Entwurfsversion bereits vorhanden',

  /** Text for when a release / document was created */
  created: 'Erstellt <RelativeTime/>',

  /** Activity inspector button text */
  'dashboard.details.activity': 'Aktivität',
  /** Text for the releases detail screen in the pin release button. */
  'dashboard.details.pin-release': 'Release im Studio anheften',
  /** Text for the releases detail screen when a release was published ASAP */
  'dashboard.details.published-asap': 'Veröffentlicht',
  /** Text for the releases detail screen when a release was published from scheduling */
  'dashboard.details.published-on': 'Veröffentlicht am {{date}}',
  /** Text for the releases detail screen in the unpin release button. */
  'dashboard.details.unpin-release': 'Release vom Studio lösen',

  /** Label for the button to proceed deleting a release */
  'delete-dialog.confirm-delete-button': 'Ja, Release löschen',
  /** Description for the dialog confirming the deleting of a release with one document */
  'delete-dialog.confirm-delete-description_one': 'Dies wird 1 Dokumentversion löschen.',
  /** Description for the dialog confirming the deleting of a release with more than one document */
  'delete-dialog.confirm-delete-description_other':
    'Dies wird {{count}} Dokumentversionen löschen.',
  /** Header for deleting a release dialog */
  'delete-dialog.confirm-delete.header':
    'Sind Sie sicher, dass Sie diesen Release löschen möchten?',

  /** Label when a release has been deleted by a different user */
  'deleted-release': "Der Release '<strong>{{title}}</strong>' wurde gelöscht",

  /** Text for when there's no changes in a release diff */
  'diff.list-empty': 'Die Änderungsliste ist leer, siehe Dokument',
  /** Text for when there's no changes in a release diff */
  'diff.no-changes': 'Keine Änderungen',

  /** Description for discarding a draft of a document dialog */
  'discard-version-dialog.description-draft':
    'Dies wird alle an diesem Dokument vorgenommenen Änderungen dauerhaft entfernen. Diese Aktion kann nicht rückgängig gemacht werden.',
  /** Description for discarding a version of a document dialog */
  'discard-version-dialog.description-release':
    "Dies wird alle Änderungen, die an diesem Dokument im Release '<strong>{{releaseTitle}}</strong>' vorgenommen wurden, dauerhaft entfernen. Diese Aktion kann nicht rückgängig gemacht werden.",
  /** Title for dialog for discarding a draft of a document */
  'discard-version-dialog.header-draft': 'Entwurf verwerfen?',
  /** Header for discarding a version from a release of a document dialog */
  'discard-version-dialog.header-release':
    "Dokument aus dem Release '<strong>{{releaseTitle}}</strong>' entfernen?",
  /** Title for dialog for discarding a draft of a document */
  'discard-version-dialog.title-draft': 'Entwurf verwerfen',
  /** Title for dialog for discarding a version of a document */
  'discard-version-dialog.title-release': 'Aus Release entfernen',

  /** Label for when a document in a release has a single validation warning */
  'document-validation.error_one': '{{count}} Validierungsfehler',
  /** Label for when a document in a release has multiple validation warnings */
  'document-validation.error_other': '{{count}} Validierungsfehler',

  /** Label for the button to proceed with duplicating a release */
  'duplicate-dialog.confirm-duplicate-button': 'Ja, Release duplizieren',
  /** Description for the dialog confirming the duplicate of a release with one document */
  'duplicate-dialog.confirm-duplicate-description_one':
    'Dies wird den Release und die 1 Dokumentversion duplizieren.',
  /** Description for the dialog confirming the duplicate of a release with more than one document */
  'duplicate-dialog.confirm-duplicate-description_other':
    'Dies wird den Release und die {{count}} Dokumentversionen duplizieren.',
  /** Header for the dialog confirming the duplicate of a release */
  'duplicate-dialog.confirm-duplicate-header':
    'Sind Sie sicher, dass Sie diesen Release duplizieren möchten?',

  /** Title text displayed for technical error details */
  'error-details-title': 'Fehlerdetails',

  /** Title text when error during release update */
  'failed-edit-title': 'Änderungen konnten nicht gespeichert werden',

  /** Title text displayed for releases that failed to publish  */
  'failed-publish-title': 'Veröffentlichung fehlgeschlagen',

  /** Title text displayed for releases that failed to schedule  */
  'failed-schedule-title': 'Planung fehlgeschlagen',

  /** Filter tab label for all documents */
  'filter-tab.all': 'Alle',
  /** Filter tab label for documents with validation errors */
  'filter-tab.errors': 'Fehler',

  /**The text that will be shown in the footer to indicate the time the release was archived */
  'footer.status.archived': 'Archiviert',
  /**The text that will be shown in the footer to indicate the time the release was created */
  'footer.status.created': 'Erstellt',
  /**The text that will be shown in the footer to indicate the time the release was created */
  'footer.status.edited': 'Bearbeitet',
  /**The text that will be shown in the footer to indicate the time the release was published */
  'footer.status.published': 'Veröffentlicht',
  /**The text that will be shown in the footer to indicate the time the release was unarchived */
  'footer.status.unarchived': 'Aus dem Archiv wiederhergestellt',

  /** Label text for the loading state whilst release is being loaded */
  'loading-release': 'Release wird geladen',

  /** Text for when documents of a release are loading */
  'loading-release-documents': 'Dokumente werden geladen',
  /** Description text for when loading documents on a release failed */
  'loading-release-documents.error.description':
    'Die Dokumente für dieses Release können nicht geladen werden. Bitte versuchen Sie es später erneut.',
  /** Title text for when loading documents on a release failed */
  'loading-release-documents.error.title': 'Etwas ist schiefgelaufen',

  /** Label for title of actions for "when releasing" */
  'menu.group.when-releasing': 'Beim Veröffentlichen',
  /** Label for the release menu */
  'menu.label': 'Release-Menü',
  /** Tooltip for the release menu */
  'menu.tooltip': 'Aktionen',

  /** Text for when no archived releases are found */
  'no-archived-release': 'Keine archivierten Releases',

  /** Tooltip text when there are no paused scheduled drafts */
  'no-paused-release': 'Keine pausierten geplanten Entwürfe',

  /** Text for when no releases are found */
  'no-releases': 'Keine Releases',

  /** Text for when no scheduled drafts are found */
  'no-scheduled-drafts': 'Keine geplanten Entwürfe',

  /** Text for the button name for the release tool */
  'overview.action.documentation': 'Dokumentation',
  /** Tooltip for the calendar button in the release overview */
  'overview.calendar.tooltip': 'Kalender anzeigen',
  /** Description for the release tool */
  'overview.description':
    'Releases sind Sammlungen von Dokumentänderungen, die gemeinsam verwaltet, geplant und rückgängig gemacht werden können.',
  /** Text for the placeholder in the search release input  */
  'overview.search-releases-placeholder': 'Releases suchen',
  /** Title for the release tool */
  'overview.title': 'Releases',

  /** Tooltip text for releases that have passed their intended publish date */
  'passed-intended-publish-date':
    'Dieses Release hat sein geplantes Veröffentlichungsdatum überschritten',

  /** Tooltip text for scheduled drafts that have passed their intended publish date */
  'passed-intended-publish-date-draft':
    'Dieser Entwurf hat sein geplantes Veröffentlichungsdatum überschritten',

  /** Description for when a user doesn't have publish or schedule releases */
  'permission-missing-description':
    'Ihre Rolle schränkt derzeit ein, was Sie in diesem Release sehen können. Sie können dieses Release weder veröffentlichen noch planen.',

  /** Text for when a user doesn't have publish or schedule releases */
  'permission-missing-title': 'Eingeschränkter Zugriff',

  /** Tooltip label when the user doesn't have permission to archive release */
  'permissions.error.archive': 'Sie haben keine Berechtigung, dieses Release zu archivieren',
  /** Tooltip label when the user doesn't have permission to delete release */
  'permissions.error.delete': 'Sie haben keine Berechtigung, dieses Release zu löschen',
  /** Tooltip label when the user doesn't have permission for discarding a version */
  'permissions.error.discard-version': 'Sie haben keine Berechtigung, diese Version zu verwerfen',
  /** Tooltip label when the user doesn't have permission to duplicate release */
  'permissions.error.duplicate': 'Sie haben keine Berechtigung, dieses Release zu duplizieren',
  /** Tooltip label when the user doesn't have permission to unarchive release */
  'permissions.error.unarchive': 'Sie haben keine Berechtigung, dieses Release zu dearchivieren',
  /** Tooltip label when the user doesn't have permission for unpublishing a document */
  'permissions.error.unpublish': 'Sie haben keine Berechtigung, dieses Dokument zu depublizieren',

  /** Tooltip text for when one user is editing a document in a release */
  'presence.tooltip.one':
    '{{displayName}} bearbeitet dieses Dokument gerade im Release „{{releaseTitle}}"',

  /** Tooltip text for publish release action when there are no documents */
  'publish-action.validation.no-documents': 'Es sind keine Dokumente zum Veröffentlichen vorhanden',

  /** Description for the dialog confirming the publish of a release with one document */
  'publish-dialog.confirm-publish-description_one':
    "Das Release '<strong>{{title}}</strong>' und sein Dokument werden veröffentlicht.",
  /** Description for the dialog confirming the publish of a release with multiple documents */
  'publish-dialog.confirm-publish-description_other':
    "Das Release '<strong>{{title}}</strong>' und seine {{releaseDocumentsLength}} Dokumente werden veröffentlicht.",
  /** Title for the dialog confirming the publish of a release */
  'publish-dialog.confirm-publish.title':
    'Sind Sie sicher, dass Sie das Release und alle Dokumentversionen veröffentlichen möchten?',
  /** Label for when documents in release have validation errors */
  'publish-dialog.validation.error': 'Einige Dokumente weisen Validierungsfehler auf',
  /** Label for when documents are being validated */
  'publish-dialog.validation.loading': 'Dokumente werden validiert...',
  /** Label for the button when the user doesn't have permissions to publish a release */
  'publish-dialog.validation.no-permission': 'Sie haben keine Berechtigung zum Veröffentlichen',

  /** Title for information card on a published release */
  'publish-info.title': 'Dieses Release wurde erfolgreich veröffentlicht.',

  /** Placeholder title for a release with no title */
  'release-placeholder.title': 'Ohne Titel',

  /** Description for the dialog confirming the revert of a release with multiple documents */
  'revert-dialog.confirm-revert-description_one':
    'Dadurch wird {{releaseDocumentsLength}} Dokumentversion zurückgesetzt.',
  /** Description for the dialog confirming the revert of a release with multiple documents */
  'revert-dialog.confirm-revert-description_other':
    'Dadurch werden {{releaseDocumentsLength}} Dokumentversionen zurückgesetzt.',
  /** Checkbox label to confirm whether to create a staged release for revert or immediately revert */
  'revert-dialog.confirm-revert.stage-revert-checkbox-label': 'Das Release sofort zurücksetzen',
  /** Title for the dialog confirming the revert of a release */
  'revert-dialog.confirm-revert.title':
    'Sind Sie sicher, dass Sie das Release „{{title}}" zurücksetzen möchten?',
  /** Warning card text for when immediately revert a release with history */
  'revert-dialog.confirm-revert.warning-card':
    'An Dokumenten in diesem Release wurden nach der Veröffentlichung Änderungen vorgenommen. Das Zurücksetzen überschreibt diese Änderungen.',

  /** Description of a reverted release */
  'revert-release.description': 'Änderungen an Dokumentversionen in „{{title}}" zurücksetzen.',
  /** Title of a reverted release */
  'revert-release.title': '„{{title}}" wird zurückgesetzt',

  /** Description for the review changes button in release tool */
  'review.description': 'Fügen Sie diesem Release Dokumente hinzu, um Änderungen zu überprüfen',
  /** Text for when a document is edited */
  'review.edited': 'Bearbeitet <RelativeTime/>',

  /** Schedule release button tooltip when there are no documents to schedule */
  'schedule-action.validation.no-documents': 'Es sind keine Dokumente zum Planen vorhanden',

  /** Schedule release button tooltip when the release is already scheduled */
  'schedule-button-tooltip.already-scheduled': 'Dieses Release ist bereits geplant',
  /** Schedule release button tooltip when there are validation errors */
  'schedule-button-tooltip.validation.error': 'Einige Dokumente haben Validierungsfehler',
  /** Schedule release button tooltip when validation is loading */
  'schedule-button-tooltip.validation.loading': 'Dokumente werden validiert...',
  /** Schedule release button tooltip when user has no permissions to schedule */
  'schedule-button-tooltip.validation.no-permission': 'Sie haben keine Berechtigung zum Planen',

  /** Title of unschedule release dialog */
  'schedule-button.tooltip': 'Sind Sie sicher, dass Sie die Veröffentlichung abplanen möchten?',

  /** Description for the confirm button for scheduling a release */
  'schedule-dialog.confirm-button': 'Ja, planen',
  /** Description shown in unschedule relaease dialog */
  'schedule-dialog.confirm-description_one':
    "Die Veröffentlichung '<strong>{{title}}</strong>' und ihr Dokument werden zum ausgewählten Datum veröffentlicht.",
  /** Description for the dialog confirming the publish of a release with multiple documents */
  'schedule-dialog.confirm-description_other':
    'Die Veröffentlichung <strong>{{title}}</strong> und ihre {{count}} Dokumentversionen werden geplant.',
  /** Title for unschedule release dialog */
  'schedule-dialog.confirm-title': 'Veröffentlichung planen',
  /** Description for warning that the published schedule time is in the past */
  'schedule-dialog.publish-date-in-past-warning':
    'Planen Sie für einen zukünftigen Zeitpunkt und ein zukünftiges Datum.',
  /** Label for date picker when scheduling a release */
  'schedule-dialog.select-publish-date-label': 'Planen am',

  /** Confirm button text for the schedule unpublish dialog */
  'schedule-unpublish-dialog.confirm': 'Depublizierung planen',
  /** Description for the schedule unpublish dialog */
  'schedule-unpublish-dialog.description':
    'Wählen Sie, wann dieses Dokument depubliziert werden soll.',
  /** Header for the schedule unpublish dialog */
  'schedule-unpublish-dialog.header': 'Entwurf zur Depublizierung planen',

  /** Placeholder for search of documents in a release */
  'search-documents-placeholder': 'Dokumente suchen',

  /** Text for when the release has no errors found */
  'summary.all-documents-errors-found': 'Alle Dokumente validiert, Probleme gefunden',
  /** Text for when the release has validated all documents */
  'summary.all-documents-validated': 'Alle Dokumente validiert, keine Probleme gefunden',
  /** Text for when the release was created */
  'summary.created': 'Erstellt <RelativeTime/>',
  /** Text for when the release is composed of one document */
  'summary.document-count_one': '{{count}} Dokument',
  /** Text for when the release is composed of multiple documents */
  'summary.document-count_other': '{{count}} Dokumente',
  /** Text for when the release has some errors found */
  'summary.errors-found':
    'Um die Veröffentlichung zu publizieren oder zu planen, beheben Sie bitte die in den Dokumenten gefundenen Probleme',
  /** Text for when the release has no documents */
  'summary.no-documents': 'Keine Dokumente',
  /** Description for the empty state when a cardinality-one release has no documents */
  'summary.no-documents-cardinality-one.description':
    'Dieser geplante Entwurf enthält kein Dokument. Es wurde möglicherweise entfernt.',
  /** Title for the empty state when a cardinality-one release has no documents */
  'summary.no-documents-cardinality-one.title': 'Kein Dokument in dieser Veröffentlichung',
  /** Text for when the release has not published */
  'summary.not-published': 'Nicht veröffentlicht',
  /** Text for when the release was published */
  'summary.published': 'Veröffentlicht <RelativeTime/>',
  /** Text for when the release has validated documents */
  'summary.validated-documents': '{{validatedCount}} von {{totalCount}} Dokumenten validiert',
  /** Text for validation loading indicator */
  'summary.validating-documents':
    'Dokumente werden validiert: {{validatedCount}} von {{totalCount}}',

  /** add action type that will be shown in the table*/
  'table-body.action.add': 'Hinzufügen',
  /** Change action type that will be shown in the table*/
  'table-body.action.change': 'Ändern',
  /** Change action type that will be shown in the table*/
  'table-body.action.unpublish': 'Veröffentlichung aufheben',

  /** Header for the document table in the release tool - action */
  'table-header.action': 'Aktion',
  /** Header for the document table in the release tool - Archived */
  'table-header.archivedAt': 'Archiviert',
  /** Header for the document table in the release tool - contributors */
  'table-header.contributors': 'Mitwirkende',
  /** Header for the document table in the release tool - created by */
  'table-header.created-by': 'Erstellt von',
  /** Header for the document table in the release tool - document preview */
  'table-header.document': 'Dokument',
  /** Header for the document table in the release tool - title */
  'table-header.documents': 'Dokumente',
  /** Header for the document table in the release tool - edited */
  'table-header.edited': 'Bearbeitet',
  /** Header for the paused scheduled drafts table - intended for */
  'table-header.intended-for': 'Vorgesehen für',
  /** Header for the document table in the release tool - Published */
  'table-header.published-at': 'Veröffentlicht',
  /** Header for the document table in the release tool - Published */
  'table-header.publishedAt': 'Veröffentlicht',
  /** Header for the scheduled drafts document table in the release tool - published at */
  'table-header.scheduled-draft.published-at': 'Veröffentlicht am',
  /** Header for the scheduled drafts document table in the release tool - scheduled for */
  'table-header.scheduled-for': 'Geplant für',
  /** Header for the document table in the release tool - time */
  'table-header.time': 'Zeit',
  /** Header for the  document table in the release tool - release title */
  'table-header.title': 'Release',
  /** Header for the document table in the release tool - type */
  'table-header.type': 'Typ',
  /** Header for the document table in the release tool - when */
  'table-header.when': 'Wann',

  /** Text for the release time label for scheduled releases  which has not been scheduled yet*/
  'time.estimated': 'Geschätzt',
  /** Text for the release time label for scheduled releases  which has been scheduled*/
  'time.scheduled': 'Geplant',

  /** Text for toast when release failed to archive */
  'toast.archive.error': "Archivierung von '<strong>{{title}}</strong>' fehlgeschlagen: {{error}}",
  /** Toast error message when bulk scheduling of active drafts fails */
  'toast.confirm-active-scheduled-drafts.error': 'Planung der Entwürfe fehlgeschlagen: {{error}}',
  /** Toast message after copying release ID */
  'toast.copy-release-id.success': 'Release-ID in die Zwischenablage kopiert',
  /** Toast message after copying release link */
  'toast.copy-release-link.success': 'Release-Link in die Zwischenablage kopiert',
  /** Toast message after copying release title */
  'toast.copy-release-title.success': 'Release-Titel in die Zwischenablage kopiert',
  /** Description for toast when creating new version of document in release failed */
  'toast.create-version.error': 'Fehler beim Hinzufügen des Dokuments zum Release: {{error}}',
  /** Description for toast when release deletion failed */
  'toast.delete.error': "Fehler beim Löschen von '<strong>{{title}}</strong>': {{error}}",
  /** Description for toast when release is successfully deleted */
  'toast.delete.success': "Das Release '<strong>{{title}}</strong>' wurde erfolgreich gelöscht",
  /** Description for toast when release duplication failed */
  'toast.duplicate.error': "Fehler beim Duplizieren von '<strong>{{title}}</strong>': {{error}}",
  /** Description for toast when release is successfully duplicated */
  'toast.duplicate.success': "Das Release '<strong>{{title}}</strong>' wurde dupliziert. <Link/>",
  /** Link text for toast link to the duplicated release */
  'toast.duplicate.success-link': 'Duplizierten Release anzeigen',
  /** Text for toast when release has been reverted immediately */
  'toast.immediate-revert.success': "Das Release '{{title}}' wurde erfolgreich zurückgesetzt",
  /** Text for toast when release failed to publish */
  'toast.publish.error': "Fehler beim Veröffentlichen von '<strong>{{title}}</strong>': {{error}}",
  /** Text for toast when release has reverted release successfully staged */
  'toast.revert-stage.success':
    "Der Revert-Release für '{{title}}' wurde erfolgreich erstellt. <Link/>",
  /** Link text for toast link to the generated revert release */
  'toast.revert-stage.success-link': 'Revert-Release anzeigen',
  /** Text for toast when release failed to revert */
  'toast.revert.error': 'Fehler beim Zurücksetzen des Releases: {{error}}',
  /** Text for toast when release failed to schedule */
  'toast.schedule.error': "Fehler beim Planen von '<strong>{{title}}</strong>': {{error}}",
  /** Text for toast when release has been scheduled */
  'toast.schedule.success': "Das Release '<strong>{{title}}</strong>' wurde geplant.",
  /** Text for toast when release failed to unarchive */
  'toast.unarchive.error': "Fehler beim Dearchivieren von '<strong>{{title}}</strong>': {{error}}",
  /** Text for toast when release failed to unschedule */
  'toast.unschedule.error':
    "Fehler beim Aufheben der Planung von '<strong>{{title}}</strong>': {{error}}",

  /** Text for tooltip when a release has been scheduled */
  'type-picker.tooltip.scheduled':
    'Das Release ist geplant. Heben Sie die Planung auf, um den Typ zu ändern',

  /** Text action in unpublish dialog to cancel */
  'unpublish-dialog.action.cancel': 'Abbrechen',
  /** Text action in unpublish dialog to unpublish */
  'unpublish-dialog.action.unpublish': 'Ja, beim Veröffentlichen des Releases depublizieren',
  /** Description for unpublish dialog, explaining that all changes made to this document will be lost */
  'unpublish-dialog.description.lost-changes':
    'Alle an dieser Dokumentversion vorgenommenen Änderungen gehen verloren.',
  /** Description for the unpublish dialog, explaining that it will create a draft if no draft exists at time of release */
  'unpublish-dialog.description.to-draft':
    'Dies depubliziert das Dokument als Teil des Releases <Label>{{title}}</Label> und erstellt einen Entwurf, falls zum Zeitpunkt des Releases kein Entwurf vorhanden ist.',
  /** Title for the dialog confirming the unpublish of a release */
  'unpublish-dialog.header':
    'Sind Sie sicher, dass Sie dieses Dokument beim Veröffentlichen des Releases depublizieren möchten?',

  /** Text for when a document is unpublished */
  'unpublish.already-unpublished': 'Dieses Dokument ist bereits depubliziert.',
  /** Tooltip label for when a document is unpublished */
  'unpublish.no-published-version': 'Es gibt keine veröffentlichte Version dieses Dokuments.',

  /** Description shown in unschedule relaease dialog */
  'unschedule-dialog.confirm-description':
    'Das Release wird nicht mehr zum geplanten Datum veröffentlicht.',
  /** Title for unschedule release dialog */
  'unschedule-dialog.confirm-title':
    'Sind Sie sicher, dass Sie das Release aus dem Zeitplan entfernen möchten?',
})
