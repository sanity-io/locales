import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Action text for adding a document to release */
  'action.add-document': 'Aggiungi documento',
  /** Action text for archiving a release */
  'action.archive': 'Archivia release',
  /** Tooltip for when the archive release action is disabled due to release being scheduled  */
  'action.archive.tooltip': 'Annulla la pianificazione di questa release per archiviarla',
  /** Action text for showing the archived releases */
  'action.archived': 'Archiviate',
  /** Menu item label for copying release ID */
  'action.copy-release-id.label': 'Copia ID release',
  /** Menu item label for copying release URL */
  'action.copy-release-link.label': 'Copia URL release',
  /** Menu item label for copying release title */
  'action.copy-release-title.label': 'Copia titolo release',
  /** Tooltip for copy release actions button */
  'action.copy-release.label': 'Copia',
  /** Action text for staging a new revert release */
  'action.create-revert-release': 'Crea una nuova release',
  /** Action text for deleting a release */
  'action.delete-release': 'Elimina release',
  /** Menu item label for showing scheduled drafts */
  'action.drafts': 'Bozze pianificate',
  /** Action text for duplicating a release */
  'action.duplicate-release': 'Duplica release',
  /** Action text for editing a release */
  'action.edit': 'Modifica release',
  /** Action text for reverting a release immediately without staging changes */
  'action.immediate-revert-release': 'Ripristina ora',
  /** Action text for opening a release */
  'action.open': 'Attiva',
  /** Action text for showing the paused scheduled drafts */
  'action.paused': 'In pausa',
  /** Action text for publishing all documents in a release (and the release itself) */
  'action.publish-all-documents': 'Esegui release',
  /** Menu item label for showing releases (multi-document releases) */
  'action.releases': 'Releases',
  /** Action text for reverting a release */
  'action.revert': 'Ripristina release',
  /** Action message for when document is scheduled for unpublishing a document and you want to no longer unpublish it */
  'action.revert-unpublish-actions': 'Annulla la rimozione dalla pubblicazione al rilascio',
  /** Text for the review changes button in release tool */
  'action.review': 'Rivedi modifiche',
  /** Action text for scheduling a release */
  'action.schedule': 'Pianifica release...',
  /** Action text for scheduling unpublish of a draft document */
  'action.schedule-unpublish': 'Pianifica rimozione dalla pubblicazione',
  /** Tooltip text for when schedule unpublish is disabled because document is not published */
  'action.schedule-unpublish.disabled.not-published':
    'Il documento deve essere pubblicato per pianificarne la rimozione dalla pubblicazione',
  /** Label for unarchiving a release */
  'action.unarchive': "Ripristina release dall'archivio",
  /** Action text for unpublishing a document in a release in the context menu */
  'action.unpublish': 'Annulla pubblicazione',
  /** Action message for scheduling an unpublished of a document  */
  'action.unpublish-doc-actions': 'Annulla pubblicazione al rilascio',
  /** Action text for unscheduling a release */
  'action.unschedule': 'Annulla pianificazione release',

  /** Text for the summary button in release tool */
  'actions.summary': 'Riepilogo',

  /* The text for the activity event when a document is added to a release */
  'activity.event.add-document': 'Aggiunta una versione del documento',
  /* The text for the activity event when the release is archived */
  'activity.event.archive': 'Archiviata la release <strong>{{releaseTitle}}</strong>',
  /* The text for the activity event when the release is created */
  'activity.event.create':
    'Creata la release <strong>{{releaseTitle}}</strong> <ScheduleTarget>con destinazione </ScheduleTarget>',
  /* The text for the activity event when a document is removed from a release */
  'activity.event.discard-document': 'Eliminata una versione del documento',
  'activity.event.edit': 'Orario della release impostato su <ScheduleTarget></ScheduleTarget>',
  /**The text to display in the changes when the release type changes to asap */
  'activity.event.edit-time-asap': 'Il prima possibile',
  /**The text to display in the changes when the release type changes to undecided */
  'activity.event.edit-time-undecided': 'Non deciso',
  /* The text for the activity event when the release is published */
  'activity.event.publish': 'Pubblicata la release <strong>{{releaseTitle}}</strong>',
  /* The text for the activity event when the release is scheduled */
  'activity.event.schedule': 'Contrassegnata come pianificata',
  /** The text for the activity event when the release is unarchived */
  'activity.event.unarchive':
    "Ripristinata la release <strong>{{releaseTitle}}</strong> dall'archivio",
  /** The text for the activity event when the release is unscheduled */
  'activity.event.unschedule': 'Contrassegnata come non pianificata',
  /** The loading text for when releases are loading */
  'activity.panel.error':
    "Si è verificato un errore durante il recupero dell'attività della release",
  /** The loading text for when releases are loading */
  'activity.panel.loading': 'Caricamento attività della release',
  /** The title for the activity panel shown in the releases detail screen */
  'activity.panel.title': 'Attività',

  /** Label for the button to proceed with archiving a release */
  'archive-dialog.confirm-archive-button': 'Sì, archivia la release',
  /** Description for the dialog confirming the archive of a release with one document */
  'archive-dialog.confirm-archive-description_one': 'Verrà archiviata 1 versione del documento.',
  /** Description for the dialog confirming the archive of a release with more than one document */
  'archive-dialog.confirm-archive-description_other':
    'Verranno archiviate {{count}} versioni del documento.',
  /** Header for the dialog confirming the archive of a release */
  'archive-dialog.confirm-archive-header': 'Sei sicuro di voler archiviare questa release?',
  /** Title for the dialog confirming the archive of a release */
  'archive-dialog.confirm-archive-title':
    "Sei sicuro di voler archiviare la release <strong>'{{title}}'</strong>?",

  /** Description for information card on a published or archived release to description retention effects */
  'archive-info.description':
    'Sarà disponibile per {{retentionDays}} giorni, poi verrà rimossa automaticamente il {{removalDate}}. <Link>Scopri la conservazione dei dati</Link>.',
  /** Title for information card on a archived release */
  'archive-info.title': 'Questa release è archiviata',

  /** Banner text showing count of active scheduled drafts requiring confirmation with one draft */
  'banner.confirm-active-scheduled-drafts_one':
    "C'è {{count}} Scheduled Draft che richiede la conferma della pianificazione",
  /** Banner text showing count of active scheduled drafts requiring confirmation with multiple drafts */
  'banner.confirm-active-scheduled-drafts_other':
    'Ci sono {{count}} Scheduled Drafts che richiedono la conferma della pianificazione',
  /** Button text for confirming scheduling of active drafts */
  'banner.confirm-active-scheduled-drafts.button': 'Riprendi la pianificazione',
  /** Button text when confirming schedules from paused mode */
  'banner.confirm-active-scheduled-drafts.button-paused': 'Riprendi tutte le pianificazioni',
  /** Banner text shown when drafts mode is disabled but there are still scheduled drafts */
  'banner.drafts-mode-disabled':
    'La modalità bozze è stata disabilitata ma ci sono ancora Scheduled Drafts da pubblicare.',
  /** Banner text shown when navigating to a release that does not exist */
  'banner.release-not-found': 'Questa release non è stata trovata',
  /** Tooltip for the dismiss button in the release not found banner */
  'banner.release-not-found.dismiss': 'Ignora',
  /** Banner text shown when scheduled drafts feature is disabled but there are still scheduled drafts */
  'banner.scheduled-drafts-disabled':
    'Gli Scheduled Drafts sono stati disabilitati ma ci sono ancora Scheduled Drafts da pubblicare.',

  /** Title for changes to published documents */
  'changes-published-docs.title': 'Modifiche ai documenti pubblicati',

  /** Dialog confirm button text for confirming all scheduled drafts */
  'confirm-active-scheduled-drafts-dialog.confirm-button': 'Conferma le pianificazioni',
  /** Dialog description for confirming active scheduled drafts */
  'confirm-active-scheduled-drafts-dialog.description':
    'Pianifica tutti gli Scheduled Drafts in pausa per le rispettive date di pubblicazione previste',
  /** Dialog warning when some scheduled drafts have past dates */
  'confirm-active-scheduled-drafts-dialog.past-dates-warning':
    'Alcuni di questi Scheduled Drafts sono pianificati per date passate. La conferma delle pianificazioni pubblicherà immediatamente quelle versioni dei documenti.',
  /** Dialog title for confirming active scheduled drafts */
  'confirm-active-scheduled-drafts-dialog.title': 'Riprendi gli Scheduled Drafts',

  /** Suffix for when a release is a copy of another release */
  'copy-suffix': 'Copia',

  /** Confirm button text for overriding existing draft */
  'copy-to-draft-dialog.confirm-button': 'Sì, sovrascrivi la bozza',
  /** Description for dialog when copying version to draft that already exists */
  'copy-to-draft-dialog.description':
    'Esiste già una versione bozza di questo documento. Copia la versione corrente nella bozza e sovrascrivi la versione bozza esistente.',
  /** Title for dialog when copying version to draft that already exists */
  'copy-to-draft-dialog.title': 'La versione bozza esiste già',

  /** Text for when a release / document was created */
  created: 'Creato <RelativeTime/>',

  /** Activity inspector button text */
  'dashboard.details.activity': 'Attività',
  /** Text for the releases detail screen in the pin release button. */
  'dashboard.details.pin-release': 'Aggiungi la release allo studio',
  /** Text for the releases detail screen when a release was published ASAP */
  'dashboard.details.published-asap': 'Pubblicato',
  /** Text for the releases detail screen when a release was published from scheduling */
  'dashboard.details.published-on': 'Pubblicato il {{date}}',
  /** Text for the releases detail screen in the unpin release button. */
  'dashboard.details.unpin-release': 'Rimuovi la release dallo studio',

  /** Label for the button to proceed deleting a release */
  'delete-dialog.confirm-delete-button': 'Sì, elimina la release',
  /** Description for the dialog confirming the deleting of a release with one document */
  'delete-dialog.confirm-delete-description_one': 'Verrà eliminata 1 versione del documento.',
  /** Description for the dialog confirming the deleting of a release with more than one document */
  'delete-dialog.confirm-delete-description_other':
    'Questo eliminerà {{count}} versioni del documento.',
  /** Header for deleting a release dialog */
  'delete-dialog.confirm-delete.header': 'Sei sicuro di voler eliminare questa release?',

  /** Label when a release has been deleted by a different user */
  'deleted-release': "La release '<strong>{{title}}</strong>' è stata eliminata",

  /** Text for when there's no changes in a release diff */
  'diff.list-empty': "L'elenco delle modifiche è vuoto, vedi documento",
  /** Text for when there's no changes in a release diff */
  'diff.no-changes': 'Nessuna modifica',

  /** Description for discarding a draft of a document dialog */
  'discard-version-dialog.description-draft':
    'Questo rimuoverà definitivamente tutte le modifiche apportate a questo documento. Questa azione non può essere annullata.',
  /** Description for discarding a version of a document dialog */
  'discard-version-dialog.description-release':
    "Questo rimuoverà definitivamente tutte le modifiche apportate a questo documento nella release '<strong>{{releaseTitle}}</strong>'. Questa azione non può essere annullata.",
  /** Title for dialog for discarding a draft of a document */
  'discard-version-dialog.header-draft': 'Scartare la bozza?',
  /** Header for discarding a version from a release of a document dialog */
  'discard-version-dialog.header-release':
    "Rimuovere il documento dalla release '<strong>{{releaseTitle}}</strong>'?",
  /** Title for dialog for discarding a draft of a document */
  'discard-version-dialog.title-draft': 'Scarta bozza',
  /** Title for dialog for discarding a version of a document */
  'discard-version-dialog.title-release': 'Rimuovi dalla release',

  /** Label for when a document in a release has a single validation warning */
  'document-validation.error_one': '{{count}} errore di validazione',
  /** Label for when a document in a release has multiple validation warnings */
  'document-validation.error_other': '{{count}} errori di validazione',

  /** Label for the button to proceed with duplicating a release */
  'duplicate-dialog.confirm-duplicate-button': 'Sì, duplica la release',
  /** Description for the dialog confirming the duplicate of a release with one document */
  'duplicate-dialog.confirm-duplicate-description_one':
    'Questo duplicherà la release e la versione di 1 documento.',
  /** Description for the dialog confirming the duplicate of a release with more than one document */
  'duplicate-dialog.confirm-duplicate-description_other':
    'Questo duplicherà la release e le {{count}} versioni del documento.',
  /** Header for the dialog confirming the duplicate of a release */
  'duplicate-dialog.confirm-duplicate-header': 'Sei sicuro di voler duplicare questa release?',

  /** Title text displayed for technical error details */
  'error-details-title': "Dettagli dell'errore",

  /** Title text when error during release update */
  'failed-edit-title': 'Salvataggio delle modifiche non riuscito',

  /** Title text displayed for releases that failed to publish  */
  'failed-publish-title': 'Pubblicazione non riuscita',

  /** Title text displayed for releases that failed to schedule  */
  'failed-schedule-title': 'Pianificazione non riuscita',

  /** Filter tab label for all documents */
  'filter-tab.all': 'Tutti',
  /** Filter tab label for documents with validation errors */
  'filter-tab.errors': 'Errori',

  /**The text that will be shown in the footer to indicate the time the release was archived */
  'footer.status.archived': 'Archiviato',
  /**The text that will be shown in the footer to indicate the time the release was created */
  'footer.status.created': 'Creato',
  /**The text that will be shown in the footer to indicate the time the release was created */
  'footer.status.edited': 'Modificato',
  /**The text that will be shown in the footer to indicate the time the release was published */
  'footer.status.published': 'Pubblicato',
  /**The text that will be shown in the footer to indicate the time the release was unarchived */
  'footer.status.unarchived': 'Dearchiviato',

  /** Label text for the loading state whilst release is being loaded */
  'loading-release': 'Caricamento release',

  /** Text for when documents of a release are loading */
  'loading-release-documents': 'Caricamento documenti',
  /** Description text for when loading documents on a release failed */
  'loading-release-documents.error.description':
    'Impossibile caricare i documenti per questa release. Riprova più tardi.',
  /** Title text for when loading documents on a release failed */
  'loading-release-documents.error.title': 'Qualcosa è andato storto',

  /** Label for title of actions for "when releasing" */
  'menu.group.when-releasing': 'Durante il rilascio',
  /** Label for the release menu */
  'menu.label': 'Menu release',
  /** Tooltip for the release menu */
  'menu.tooltip': 'Azioni',

  /** Text for when no archived releases are found */
  'no-archived-release': 'Nessuna release archiviata',

  /** Tooltip text when there are no paused scheduled drafts */
  'no-paused-release': 'Nessuna bozza pianificata in pausa',

  /** Text for when no releases are found */
  'no-releases': 'Nessuna release',

  /** Text for when no scheduled drafts are found */
  'no-scheduled-drafts': 'Nessuna bozza pianificata',

  /** Text for the button name for the release tool */
  'overview.action.documentation': 'Documentazione',
  /** Tooltip for the calendar button in the release overview */
  'overview.calendar.tooltip': 'Visualizza calendario',
  /** Description for the release tool */
  'overview.description':
    'Le release sono raccolte di modifiche ai documenti che possono essere gestite, pianificate e ripristinate insieme.',
  /** Text for the placeholder in the search release input  */
  'overview.search-releases-placeholder': 'Cerca release',
  /** Title for the release tool */
  'overview.title': 'Release',

  /** Tooltip text for releases that have passed their intended publish date */
  'passed-intended-publish-date': 'Questa release ha superato la data di pubblicazione prevista',

  /** Tooltip text for scheduled drafts that have passed their intended publish date */
  'passed-intended-publish-date-draft':
    'Questa bozza ha superato la data di pubblicazione prevista',

  /** Description for when a user doesn't have publish or schedule releases */
  'permission-missing-description':
    'Il tuo ruolo attualmente limita ciò che puoi vedere in questa release. Potresti non essere in grado di pubblicare né pianificare questa release.',

  /** Text for when a user doesn't have publish or schedule releases */
  'permission-missing-title': 'Accesso limitato',

  /** Tooltip label when the user doesn't have permission to archive release */
  'permissions.error.archive': 'Non hai il permesso di archiviare questa release',
  /** Tooltip label when the user doesn't have permission to delete release */
  'permissions.error.delete': 'Non hai il permesso di eliminare questa release',
  /** Tooltip label when the user doesn't have permission for discarding a version */
  'permissions.error.discard-version': 'Non hai il permesso di scartare questa versione',
  /** Tooltip label when the user doesn't have permission to duplicate release */
  'permissions.error.duplicate': 'Non hai il permesso di duplicare questa release',
  /** Tooltip label when the user doesn't have permission to unarchive release */
  'permissions.error.unarchive': 'Non hai il permesso di dearchiviare questa release',
  /** Tooltip label when the user doesn't have permission for unpublishing a document */
  'permissions.error.unpublish':
    'Non hai il permesso di annullare la pubblicazione di questo documento',

  /** Tooltip text for when one user is editing a document in a release */
  'presence.tooltip.one':
    '{{displayName}} sta modificando questo documento nella release "{{releaseTitle}}" in questo momento',

  /** Tooltip text for publish release action when there are no documents */
  'publish-action.validation.no-documents': 'Non ci sono documenti da pubblicare',

  /** Description for the dialog confirming the publish of a release with one document */
  'publish-dialog.confirm-publish-description_one':
    "La release '<strong>{{title}}</strong>' e il suo documento verranno pubblicati.",
  /** Description for the dialog confirming the publish of a release with multiple documents */
  'publish-dialog.confirm-publish-description_other':
    "La release '<strong>{{title}}</strong>' e i suoi {{releaseDocumentsLength}} documenti verranno pubblicati.",
  /** Title for the dialog confirming the publish of a release */
  'publish-dialog.confirm-publish.title':
    'Sei sicuro di voler pubblicare la release e tutte le versioni dei documenti?',
  /** Label for when documents in release have validation errors */
  'publish-dialog.validation.error': 'Alcuni documenti presentano errori di validazione',
  /** Label for when documents are being validated */
  'publish-dialog.validation.loading': 'Validazione dei documenti in corso...',
  /** Label for the button when the user doesn't have permissions to publish a release */
  'publish-dialog.validation.no-permission': 'Non hai il permesso di pubblicare',

  /** Title for information card on a published release */
  'publish-info.title': 'Questa release è stata pubblicata con successo.',

  /** Placeholder title for a release with no title */
  'release-placeholder.title': 'Senza titolo',

  /** Description for the dialog confirming the revert of a release with multiple documents */
  'revert-dialog.confirm-revert-description_one':
    'Questa operazione ripristinerà {{releaseDocumentsLength}} versione del documento.',
  /** Description for the dialog confirming the revert of a release with multiple documents */
  'revert-dialog.confirm-revert-description_other':
    'Questa operazione ripristinerà {{releaseDocumentsLength}} versioni dei documenti.',
  /** Checkbox label to confirm whether to create a staged release for revert or immediately revert */
  'revert-dialog.confirm-revert.stage-revert-checkbox-label':
    'Ripristina immediatamente la release',
  /** Title for the dialog confirming the revert of a release */
  'revert-dialog.confirm-revert.title': "Sei sicuro di voler ripristinare la release '{{title}}'?",
  /** Warning card text for when immediately revert a release with history */
  'revert-dialog.confirm-revert.warning-card':
    'Sono state apportate modifiche ai documenti di questa release dopo la loro pubblicazione. Il ripristino sovrascriverà queste modifiche.',

  /** Description of a reverted release */
  'revert-release.description':
    'Ripristina le modifiche alle versioni dei documenti in "{{title}}".',
  /** Title of a reverted release */
  'revert-release.title': 'Ripristino di "{{title}}"',

  /** Description for the review changes button in release tool */
  'review.description': 'Aggiungi documenti a questa release per esaminare le modifiche',
  /** Text for when a document is edited */
  'review.edited': 'Modificato <RelativeTime/>',

  /** Schedule release button tooltip when there are no documents to schedule */
  'schedule-action.validation.no-documents': 'Non ci sono documenti da pianificare',

  /** Schedule release button tooltip when the release is already scheduled */
  'schedule-button-tooltip.already-scheduled': 'Questa release è già pianificata',
  /** Schedule release button tooltip when there are validation errors */
  'schedule-button-tooltip.validation.error': 'Alcuni documenti presentano errori di validazione',
  /** Schedule release button tooltip when validation is loading */
  'schedule-button-tooltip.validation.loading': 'Validazione dei documenti in corso...',
  /** Schedule release button tooltip when user has no permissions to schedule */
  'schedule-button-tooltip.validation.no-permission': 'Non hai il permesso di pianificare',

  /** Title of unschedule release dialog */
  'schedule-button.tooltip': 'Sei sicuro di voler annullare la pianificazione della release?',

  /** Description for the confirm button for scheduling a release */
  'schedule-dialog.confirm-button': 'Sì, pianifica',
  /** Description shown in unschedule relaease dialog */
  'schedule-dialog.confirm-description_one':
    "La release '<strong>{{title}}</strong>' e il suo documento verranno pubblicati nella data selezionata.",
  /** Description for the dialog confirming the publish of a release with multiple documents */
  'schedule-dialog.confirm-description_other':
    'La release <strong>{{title}}</strong> e le sue {{count}} versioni del documento verranno pianificate.',
  /** Title for unschedule release dialog */
  'schedule-dialog.confirm-title': 'Pianifica la release',
  /** Description for warning that the published schedule time is in the past */
  'schedule-dialog.publish-date-in-past-warning': "Pianifica per una data e un'ora future.",
  /** Label for date picker when scheduling a release */
  'schedule-dialog.select-publish-date-label': 'Pianifica il',

  /** Confirm button text for the schedule unpublish dialog */
  'schedule-unpublish-dialog.confirm': 'Pianifica annullamento pubblicazione',
  /** Description for the schedule unpublish dialog */
  'schedule-unpublish-dialog.description':
    'Seleziona quando questo documento deve essere rimosso dalla pubblicazione.',
  /** Header for the schedule unpublish dialog */
  'schedule-unpublish-dialog.header': 'Pianifica bozza per la rimozione dalla pubblicazione',

  /** Placeholder for search of documents in a release */
  'search-documents-placeholder': 'Cerca documenti',

  /** Text for when the release has no errors found */
  'summary.all-documents-errors-found': 'Tutti i documenti validati, problemi trovati',
  /** Text for when the release has validated all documents */
  'summary.all-documents-validated': 'Tutti i documenti validati, nessun problema trovato',
  /** Text for when the release was created */
  'summary.created': 'Creato <RelativeTime/>',
  /** Text for when the release is composed of one document */
  'summary.document-count_one': '{{count}} documento',
  /** Text for when the release is composed of multiple documents */
  'summary.document-count_other': '{{count}} documenti',
  /** Text for when the release has some errors found */
  'summary.errors-found':
    'Per pubblicare o pianificare la release, risolvi i problemi trovati nei documenti',
  /** Text for when the release has no documents */
  'summary.no-documents': 'Nessun documento',
  /** Description for the empty state when a cardinality-one release has no documents */
  'summary.no-documents-cardinality-one.description':
    'Questa bozza pianificata non contiene un documento. Potrebbe essere stata rimossa.',
  /** Title for the empty state when a cardinality-one release has no documents */
  'summary.no-documents-cardinality-one.title': 'Nessun documento in questa release',
  /** Text for when the release has not published */
  'summary.not-published': 'Non pubblicato',
  /** Text for when the release was published */
  'summary.published': 'Pubblicato <RelativeTime/>',
  /** Text for when the release has validated documents */
  'summary.validated-documents': '{{validatedCount}} di {{totalCount}} documenti validati',
  /** Text for validation loading indicator */
  'summary.validating-documents':
    'Validazione documenti in corso: {{validatedCount}} di {{totalCount}}',

  /** add action type that will be shown in the table*/
  'table-body.action.add': 'Aggiungi',
  /** Change action type that will be shown in the table*/
  'table-body.action.change': 'Modifica',
  /** Change action type that will be shown in the table*/
  'table-body.action.unpublish': 'Annulla pubblicazione',

  /** Header for the document table in the release tool - action */
  'table-header.action': 'Azione',
  /** Header for the document table in the release tool - Archived */
  'table-header.archivedAt': 'Archiviato',
  /** Header for the document table in the release tool - contributors */
  'table-header.contributors': 'Collaboratori',
  /** Header for the document table in the release tool - created by */
  'table-header.created-by': 'Creato da',
  /** Header for the document table in the release tool - document preview */
  'table-header.document': 'Documento',
  /** Header for the document table in the release tool - title */
  'table-header.documents': 'Documenti',
  /** Header for the document table in the release tool - edited */
  'table-header.edited': 'Modificato',
  /** Header for the paused scheduled drafts table - intended for */
  'table-header.intended-for': 'Destinato a',
  /** Header for the document table in the release tool - Published */
  'table-header.published-at': 'Pubblicato',
  /** Header for the document table in the release tool - Published */
  'table-header.publishedAt': 'Pubblicato',
  /** Header for the scheduled drafts document table in the release tool - published at */
  'table-header.scheduled-draft.published-at': 'Pubblicato il',
  /** Header for the scheduled drafts document table in the release tool - scheduled for */
  'table-header.scheduled-for': 'Pianificato per',
  /** Header for the document table in the release tool - time */
  'table-header.time': 'Ora',
  /** Header for the  document table in the release tool - release title */
  'table-header.title': 'Release',
  /** Header for the document table in the release tool - type */
  'table-header.type': 'Tipo',
  /** Header for the document table in the release tool - when */
  'table-header.when': 'Quando',

  /** Text for the release time label for scheduled releases  which has not been scheduled yet*/
  'time.estimated': 'Stimato',
  /** Text for the release time label for scheduled releases  which has been scheduled*/
  'time.scheduled': 'Pianificato',

  /** Text for toast when release failed to archive */
  'toast.archive.error': "Archiviazione di '<strong>{{title}}</strong>' non riuscita: {{error}}",
  /** Toast error message when bulk scheduling of active drafts fails */
  'toast.confirm-active-scheduled-drafts.error':
    'Pianificazione delle bozze non riuscita: {{error}}',
  /** Toast message after copying release ID */
  'toast.copy-release-id.success': 'ID release copiato negli appunti',
  /** Toast message after copying release link */
  'toast.copy-release-link.success': 'Link della release copiato negli appunti',
  /** Toast message after copying release title */
  'toast.copy-release-title.success': 'Titolo della release copiato negli appunti',
  /** Description for toast when creating new version of document in release failed */
  'toast.create-version.error': 'Impossibile aggiungere il documento alla release: {{error}}',
  /** Description for toast when release deletion failed */
  'toast.delete.error': "Impossibile eliminare '<strong>{{title}}</strong>': {{error}}",
  /** Description for toast when release is successfully deleted */
  'toast.delete.success': "La release '<strong>{{title}}</strong>' è stata eliminata con successo",
  /** Description for toast when release duplication failed */
  'toast.duplicate.error': "Impossibile duplicare '<strong>{{title}}</strong>': {{error}}",
  /** Description for toast when release is successfully duplicated */
  'toast.duplicate.success': "La release '<strong>{{title}}</strong>' è stata duplicata. <Link/>",
  /** Link text for toast link to the duplicated release */
  'toast.duplicate.success-link': 'Visualizza la release duplicata',
  /** Text for toast when release has been reverted immediately */
  'toast.immediate-revert.success': "La release '{{title}}' è stata ripristinata con successo",
  /** Text for toast when release failed to publish */
  'toast.publish.error': "Impossibile pubblicare '<strong>{{title}}</strong>': {{error}}",
  /** Text for toast when release has reverted release successfully staged */
  'toast.revert-stage.success':
    "La release di ripristino per '{{title}}' è stata creata con successo. <Link/>",
  /** Link text for toast link to the generated revert release */
  'toast.revert-stage.success-link': 'Visualizza la release di ripristino',
  /** Text for toast when release failed to revert */
  'toast.revert.error': 'Impossibile ripristinare la release: {{error}}',
  /** Text for toast when release failed to schedule */
  'toast.schedule.error': "Impossibile pianificare '<strong>{{title}}</strong>': {{error}}",
  /** Text for toast when release has been scheduled */
  'toast.schedule.success': "La release '<strong>{{title}}</strong>' è stata pianificata.",
  /** Text for toast when release failed to unarchive */
  'toast.unarchive.error': "Impossibile dearchiviare '<strong>{{title}}</strong>': {{error}}",
  /** Text for toast when release failed to unschedule */
  'toast.unschedule.error':
    "Impossibile annullare la pianificazione di '<strong>{{title}}</strong>': {{error}}",

  /** Text for tooltip when a release has been scheduled */
  'type-picker.tooltip.scheduled':
    'La release è pianificata, annulla la pianificazione per cambiare tipo',

  /** Text action in unpublish dialog to cancel */
  'unpublish-dialog.action.cancel': 'Annulla',
  /** Text action in unpublish dialog to unpublish */
  'unpublish-dialog.action.unpublish': 'Sì, annulla la pubblicazione al momento del rilascio',
  /** Description for unpublish dialog, explaining that all changes made to this document will be lost */
  'unpublish-dialog.description.lost-changes':
    'Tutte le modifiche apportate a questa versione del documento andranno perse.',
  /** Description for the unpublish dialog, explaining that it will create a draft if no draft exists at time of release */
  'unpublish-dialog.description.to-draft':
    'Questo annullerà la pubblicazione del documento come parte della release <Label>{{title}}</Label> e creerà una bozza se non ne esiste una al momento del rilascio.',
  /** Title for the dialog confirming the unpublish of a release */
  'unpublish-dialog.header':
    'Sei sicuro di voler annullare la pubblicazione di questo documento al momento del rilascio?',

  /** Text for when a document is unpublished */
  'unpublish.already-unpublished': 'Questo documento è già non pubblicato.',
  /** Tooltip label for when a document is unpublished */
  'unpublish.no-published-version': 'Non esiste una versione pubblicata di questo documento.',

  /** Description shown in unschedule relaease dialog */
  'unschedule-dialog.confirm-description':
    'Il release non verrà più pubblicato alla data pianificata',
  /** Title for unschedule release dialog */
  'unschedule-dialog.confirm-title': 'Sei sicuro di voler annullare la pianificazione del release?',
})
