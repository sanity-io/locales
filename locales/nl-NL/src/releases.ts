import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Action text for adding a document to release */
  'action.add-document': 'Document toevoegen',
  /** Action text for archiving a release */
  'action.archive': 'Release archiveren',
  /** Tooltip for when the archive release action is disabled due to release being scheduled  */
  'action.archive.tooltip': 'Maak de planning van deze release ongedaan om deze te archiveren',
  /** Action text for showing the archived releases */
  'action.archived': 'Gearchiveerd',
  /** Menu item label for copying release ID */
  'action.copy-release-id.label': 'Release-ID kopiëren',
  /** Menu item label for copying release URL */
  'action.copy-release-link.label': 'Release-URL kopiëren',
  /** Menu item label for copying release title */
  'action.copy-release-title.label': 'Releasetitel kopiëren',
  /** Tooltip for copy release actions button */
  'action.copy-release.label': 'Kopiëren',
  /** Action text for staging a new revert release */
  'action.create-revert-release': 'Een nieuwe release aanmaken',
  /** Action text for deleting a release */
  'action.delete-release': 'Release verwijderen',
  /** Menu item label for showing scheduled drafts */
  'action.drafts': 'Geplande concepten',
  /** Action text for duplicating a release */
  'action.duplicate-release': 'Release dupliceren',
  /** Action text for editing a release */
  'action.edit': 'Release bewerken',
  /** Action text for reverting a release immediately without staging changes */
  'action.immediate-revert-release': 'Nu terugdraaien',
  /** Action text for opening a release */
  'action.open': 'Actief',
  /** Action text for showing the paused scheduled drafts */
  'action.paused': 'Gepauzeerd',
  /** Action text for publishing all documents in a release (and the release itself) */
  'action.publish-all-documents': 'Release uitvoeren',
  /** Menu item label for showing releases (multi-document releases) */
  'action.releases': 'Releases',
  /** Action text for reverting a release */
  'action.revert': 'Release terugdraaien',
  /** Action message for when document is scheduled for unpublishing a document and you want to no longer unpublish it */
  'action.revert-unpublish-actions': 'Depubliceren ongedaan maken bij het uitbrengen',
  /** Text for the review changes button in release tool */
  'action.review': 'Wijzigingen bekijken',
  /** Action text for scheduling a release */
  'action.schedule': 'Release plannen...',
  /** Action text for scheduling unpublish of a draft document */
  'action.schedule-unpublish': 'Depubliceren plannen',
  /** Tooltip text for when schedule unpublish is disabled because document is not published */
  'action.schedule-unpublish.disabled.not-published':
    'Document moet gepubliceerd zijn om depubliceren te plannen',
  /** Label for unarchiving a release */
  'action.unarchive': 'Release uit archief halen',
  /** Action text for unpublishing a document in a release in the context menu */
  'action.unpublish': 'Depubliceren',
  /** Action message for scheduling an unpublished of a document  */
  'action.unpublish-doc-actions': 'Depubliceren bij het uitbrengen',
  /** Action text for unscheduling a release */
  'action.unschedule': 'Release de-inplannen',

  /** Text for the summary button in release tool */
  'actions.summary': 'Samenvatting',

  /* The text for the activity event when a document is added to a release */
  'activity.event.add-document': 'Een documentversie toegevoegd',
  /* The text for the activity event when the release is archived */
  'activity.event.archive': 'De <strong>{{releaseTitle}}</strong> release gearchiveerd',
  /* The text for the activity event when the release is created */
  'activity.event.create':
    'De <strong>{{releaseTitle}}</strong> release aangemaakt <ScheduleTarget>gericht op </ScheduleTarget>',
  /* The text for the activity event when a document is removed from a release */
  'activity.event.discard-document': 'Een documentversie verwijderd',
  'activity.event.edit': 'Releasetijd ingesteld op <ScheduleTarget></ScheduleTarget>',
  /**The text to display in the changes when the release type changes to asap */
  'activity.event.edit-time-asap': 'Zo snel mogelijk',
  /**The text to display in the changes when the release type changes to undecided */
  'activity.event.edit-time-undecided': 'Onbeslist',
  /* The text for the activity event when the release is published */
  'activity.event.publish': 'De <strong>{{releaseTitle}}</strong> release gepubliceerd',
  /* The text for the activity event when the release is scheduled */
  'activity.event.schedule': 'Gemarkeerd als ingepland',
  /** The text for the activity event when the release is unarchived */
  'activity.event.unarchive': 'De <strong>{{releaseTitle}}</strong> release gedearchiveerd',
  /** The text for the activity event when the release is unscheduled */
  'activity.event.unschedule': 'Gemarkeerd als niet ingepland',
  /** The loading text for when releases are loading */
  'activity.panel.error': 'Er is een fout opgetreden bij het ophalen van de release-activiteit',
  /** The loading text for when releases are loading */
  'activity.panel.loading': 'Release-activiteit laden',
  /** The title for the activity panel shown in the releases detail screen */
  'activity.panel.title': 'Activiteit',

  /** Label for the button to proceed with archiving a release */
  'archive-dialog.confirm-archive-button': 'Ja, release archiveren',
  /** Description for the dialog confirming the archive of a release with one document */
  'archive-dialog.confirm-archive-description_one': 'Dit archiveert één documentversie.',
  /** Description for the dialog confirming the archive of a release with more than one document */
  'archive-dialog.confirm-archive-description_other': 'Dit archiveert {{count}} documentversies.',
  /** Header for the dialog confirming the archive of a release */
  'archive-dialog.confirm-archive-header': 'Weet u zeker dat u deze release wilt archiveren?',
  /** Title for the dialog confirming the archive of a release */
  'archive-dialog.confirm-archive-title':
    "Weet u zeker dat u de <strong>'{{title}}'</strong> release wilt archiveren?",

  /** Description for information card on a published or archived release to description retention effects */
  'archive-info.description':
    'Deze is beschikbaar voor {{retentionDays}} dagen en wordt daarna automatisch verwijderd op {{removalDate}}. <Link>Meer informatie over retentie</Link>.',
  /** Title for information card on a archived release */
  'archive-info.title': 'Deze release is gearchiveerd',

  /** Banner text showing count of active scheduled drafts requiring confirmation with one draft */
  'banner.confirm-active-scheduled-drafts_one':
    'Er is één Scheduled Draft die planningsbevestiging vereist',
  /** Banner text showing count of active scheduled drafts requiring confirmation with multiple drafts */
  'banner.confirm-active-scheduled-drafts_other':
    'Er zijn {{count}} Scheduled Drafts die planningsbevestiging vereisen',
  /** Button text for confirming scheduling of active drafts */
  'banner.confirm-active-scheduled-drafts.button': 'Planning hervatten',
  /** Button text when confirming schedules from paused mode */
  'banner.confirm-active-scheduled-drafts.button-paused': 'Alle planningen hervatten',
  /** Banner text shown when drafts mode is disabled but there are still scheduled drafts */
  'banner.drafts-mode-disabled':
    'De conceptmodus is uitgeschakeld, maar er zijn nog steeds Scheduled Drafts die gepubliceerd moeten worden.',
  /** Banner text shown when navigating to a release that does not exist */
  'banner.release-not-found': 'Deze release kon niet worden gevonden',
  /** Tooltip for the dismiss button in the release not found banner */
  'banner.release-not-found.dismiss': 'Sluiten',
  /** Banner text shown when scheduled drafts feature is disabled but there are still scheduled drafts */
  'banner.scheduled-drafts-disabled':
    'Scheduled drafts is uitgeschakeld, maar er zijn nog steeds Scheduled Drafts die gepubliceerd moeten worden.',

  /** Title for changes to published documents */
  'changes-published-docs.title': 'Wijzigingen in gepubliceerde documenten',

  /** Dialog confirm button text for confirming all scheduled drafts */
  'confirm-active-scheduled-drafts-dialog.confirm-button': 'Planningen bevestigen',
  /** Dialog description for confirming active scheduled drafts */
  'confirm-active-scheduled-drafts-dialog.description':
    'Plan alle gepauzeerde Scheduled Drafts voor hun beoogde publicatiedatums',
  /** Dialog warning when some scheduled drafts have past dates */
  'confirm-active-scheduled-drafts-dialog.past-dates-warning':
    'Sommige van deze Scheduled Drafts zijn gepland voor datums in het verleden. Het bevestigen van de planningen zal die versies van documenten onmiddellijk publiceren.',
  /** Dialog title for confirming active scheduled drafts */
  'confirm-active-scheduled-drafts-dialog.title': 'Scheduled Drafts hervatten',

  /** Suffix for when a release is a copy of another release */
  'copy-suffix': 'Kopie',

  /** Confirm button text for overriding existing draft */
  'copy-to-draft-dialog.confirm-button': 'Ja, concept overschrijven',
  /** Description for dialog when copying version to draft that already exists */
  'copy-to-draft-dialog.description':
    'Er bestaat al een conceptversie van dit document. Kopieer de huidige versie naar het concept en overschrijf de bestaande conceptversie.',
  /** Title for dialog when copying version to draft that already exists */
  'copy-to-draft-dialog.title': 'Conceptversie bestaat al',

  /** Text for when a release / document was created */
  created: 'Aangemaakt <RelativeTime/>',

  /** Activity inspector button text */
  'dashboard.details.activity': 'Activiteit',
  /** Text for the releases detail screen in the pin release button. */
  'dashboard.details.pin-release': 'Release vastzetten in studio',
  /** Text for the releases detail screen when a release was published ASAP */
  'dashboard.details.published-asap': 'Gepubliceerd',
  /** Text for the releases detail screen when a release was published from scheduling */
  'dashboard.details.published-on': 'Gepubliceerd op {{date}}',
  /** Text for the releases detail screen in the unpin release button. */
  'dashboard.details.unpin-release': 'Release losmaken van studio',

  /** Label for the button to proceed deleting a release */
  'delete-dialog.confirm-delete-button': 'Ja, release verwijderen',
  /** Description for the dialog confirming the deleting of a release with one document */
  'delete-dialog.confirm-delete-description_one': 'Dit zal één documentversie verwijderen.',
  /** Description for the dialog confirming the deleting of a release with more than one document */
  'delete-dialog.confirm-delete-description_other':
    'Dit zal {{count}} documentversies verwijderen.',
  /** Header for deleting a release dialog */
  'delete-dialog.confirm-delete.header': 'Weet u zeker dat u deze release wilt verwijderen?',

  /** Label when a release has been deleted by a different user */
  'deleted-release': "De release '<strong>{{title}}</strong>' is verwijderd",

  /** Text for when there's no changes in a release diff */
  'diff.list-empty': 'Lijst met wijzigingen is leeg, zie document',
  /** Text for when there's no changes in a release diff */
  'diff.no-changes': 'Geen wijzigingen',

  /** Description for discarding a draft of a document dialog */
  'discard-version-dialog.description-draft':
    'Dit zal alle wijzigingen aan dit document permanent verwijderen. Deze actie kan niet ongedaan worden gemaakt.',
  /** Description for discarding a version of a document dialog */
  'discard-version-dialog.description-release':
    "Dit zal alle wijzigingen aan dit document binnen de release '<strong>{{releaseTitle}}</strong>' permanent verwijderen. Deze actie kan niet ongedaan worden gemaakt.",
  /** Title for dialog for discarding a draft of a document */
  'discard-version-dialog.header-draft': 'Concept verwijderen?',
  /** Header for discarding a version from a release of a document dialog */
  'discard-version-dialog.header-release':
    "Document verwijderen uit de release '<strong>{{releaseTitle}}</strong>'?",
  /** Title for dialog for discarding a draft of a document */
  'discard-version-dialog.title-draft': 'Concept verwijderen',
  /** Title for dialog for discarding a version of a document */
  'discard-version-dialog.title-release': 'Verwijderen uit release',

  /** Label for when a document in a release has a single validation warning */
  'document-validation.error_one': '{{count}} validatiefout',
  /** Label for when a document in a release has multiple validation warnings */
  'document-validation.error_other': '{{count}} validatiefouten',

  /** Label for the button to proceed with duplicating a release */
  'duplicate-dialog.confirm-duplicate-button': 'Ja, release dupliceren',
  /** Description for the dialog confirming the duplicate of a release with one document */
  'duplicate-dialog.confirm-duplicate-description_one':
    'Dit zal de release en de 1 documentversie dupliceren.',
  /** Description for the dialog confirming the duplicate of a release with more than one document */
  'duplicate-dialog.confirm-duplicate-description_other':
    'Dit zal de release en de {{count}} documentversies dupliceren.',
  /** Header for the dialog confirming the duplicate of a release */
  'duplicate-dialog.confirm-duplicate-header': 'Weet u zeker dat u deze release wilt dupliceren?',

  /** Title text displayed for technical error details */
  'error-details-title': 'Foutdetails',

  /** Title text when error during release update */
  'failed-edit-title': 'Opslaan van wijzigingen mislukt',

  /** Title text displayed for releases that failed to publish  */
  'failed-publish-title': 'Publiceren mislukt',

  /** Title text displayed for releases that failed to schedule  */
  'failed-schedule-title': 'Plannen mislukt',

  /** Filter tab label for all documents */
  'filter-tab.all': 'Alle',
  /** Filter tab label for documents with validation errors */
  'filter-tab.errors': 'Fouten',

  /**The text that will be shown in the footer to indicate the time the release was archived */
  'footer.status.archived': 'Gearchiveerd',
  /**The text that will be shown in the footer to indicate the time the release was created */
  'footer.status.created': 'Aangemaakt',
  /**The text that will be shown in the footer to indicate the time the release was created */
  'footer.status.edited': 'Bewerkt',
  /**The text that will be shown in the footer to indicate the time the release was published */
  'footer.status.published': 'Gepubliceerd',
  /**The text that will be shown in the footer to indicate the time the release was unarchived */
  'footer.status.unarchived': 'Gedearchiveerd',

  /** Label text for the loading state whilst release is being loaded */
  'loading-release': 'Release laden',

  /** Text for when documents of a release are loading */
  'loading-release-documents': 'Documenten laden',
  /** Description text for when loading documents on a release failed */
  'loading-release-documents.error.description':
    'We kunnen de documenten voor deze release niet laden. Probeer het later opnieuw.',
  /** Title text for when loading documents on a release failed */
  'loading-release-documents.error.title': 'Er is iets misgegaan',

  /** Label for title of actions for "when releasing" */
  'menu.group.when-releasing': 'Bij het uitbrengen',
  /** Label for the release menu */
  'menu.label': 'Release-menu',
  /** Tooltip for the release menu */
  'menu.tooltip': 'Acties',

  /** Text for when no archived releases are found */
  'no-archived-release': 'Geen gearchiveerde releases',

  /** Tooltip text when there are no paused scheduled drafts */
  'no-paused-release': 'Geen gepauzeerde geplande concepten',

  /** Text for when no releases are found */
  'no-releases': 'Geen releases',

  /** Text for when no scheduled drafts are found */
  'no-scheduled-drafts': 'Geen geplande concepten',

  /** Text for the button name for the release tool */
  'overview.action.documentation': 'Documentatie',
  /** Tooltip for the calendar button in the release overview */
  'overview.calendar.tooltip': 'Kalender bekijken',
  /** Description for the release tool */
  'overview.description':
    'Releases zijn verzamelingen van documentwijzigingen die samen beheerd, gepland en teruggedraaid kunnen worden.',
  /** Text for the placeholder in the search release input  */
  'overview.search-releases-placeholder': 'Releases zoeken',
  /** Title for the release tool */
  'overview.title': 'Releases',

  /** Tooltip text for releases that have passed their intended publish date */
  'passed-intended-publish-date': 'Deze release heeft de beoogde publicatiedatum overschreden',

  /** Tooltip text for scheduled drafts that have passed their intended publish date */
  'passed-intended-publish-date-draft': 'Dit concept heeft de beoogde publicatiedatum overschreden',

  /** Description for when a user doesn't have publish or schedule releases */
  'permission-missing-description':
    'Uw rol beperkt momenteel wat u in deze release kunt zien. U kunt deze release niet publiceren of plannen.',

  /** Text for when a user doesn't have publish or schedule releases */
  'permission-missing-title': 'Beperkte toegang',

  /** Tooltip label when the user doesn't have permission to archive release */
  'permissions.error.archive': 'U heeft geen toestemming om deze release te archiveren',
  /** Tooltip label when the user doesn't have permission to delete release */
  'permissions.error.delete': 'U heeft geen toestemming om deze release te verwijderen',
  /** Tooltip label when the user doesn't have permission for discarding a version */
  'permissions.error.discard-version': 'U heeft geen toestemming om deze versie te verwijderen',
  /** Tooltip label when the user doesn't have permission to duplicate release */
  'permissions.error.duplicate': 'U heeft geen toestemming om deze release te dupliceren',
  /** Tooltip label when the user doesn't have permission to unarchive release */
  'permissions.error.unarchive': 'U heeft geen toestemming om deze release te dearchiveren',
  /** Tooltip label when the user doesn't have permission for unpublishing a document */
  'permissions.error.unpublish': 'U heeft geen toestemming om dit document te depubliceren',

  /** Tooltip text for when one user is editing a document in a release */
  'presence.tooltip.one':
    '{{displayName}} bewerkt dit document momenteel in de release "{{releaseTitle}}"',

  /** Tooltip text for publish release action when there are no documents */
  'publish-action.validation.no-documents': 'Er zijn geen documenten om te publiceren',

  /** Description for the dialog confirming the publish of a release with one document */
  'publish-dialog.confirm-publish-description_one':
    "De release '<strong>{{title}}</strong>' en het bijbehorende document worden gepubliceerd.",
  /** Description for the dialog confirming the publish of a release with multiple documents */
  'publish-dialog.confirm-publish-description_other':
    "De release '<strong>{{title}}</strong>' en de bijbehorende {{releaseDocumentsLength}} documenten worden gepubliceerd.",
  /** Title for the dialog confirming the publish of a release */
  'publish-dialog.confirm-publish.title':
    'Weet u zeker dat u de release en alle documentversies wilt publiceren?',
  /** Label for when documents in release have validation errors */
  'publish-dialog.validation.error': 'Sommige documenten bevatten validatiefouten',
  /** Label for when documents are being validated */
  'publish-dialog.validation.loading': 'Documenten valideren...',
  /** Label for the button when the user doesn't have permissions to publish a release */
  'publish-dialog.validation.no-permission': 'U heeft geen toestemming om te publiceren',

  /** Title for information card on a published release */
  'publish-info.title': 'Deze release is succesvol gepubliceerd.',

  /** Placeholder title for a release with no title */
  'release-placeholder.title': 'Naamloos',

  /** Description for the dialog confirming the revert of a release with multiple documents */
  'revert-dialog.confirm-revert-description_one':
    'Dit zal {{releaseDocumentsLength}} documentversie terugzetten.',
  /** Description for the dialog confirming the revert of a release with multiple documents */
  'revert-dialog.confirm-revert-description_other':
    'Dit zal {{releaseDocumentsLength}} documentversies terugzetten.',
  /** Checkbox label to confirm whether to create a staged release for revert or immediately revert */
  'revert-dialog.confirm-revert.stage-revert-checkbox-label': 'De release onmiddellijk terugzetten',
  /** Title for the dialog confirming the revert of a release */
  'revert-dialog.confirm-revert.title':
    "Weet u zeker dat u de release '{{title}}' wilt terugzetten?",
  /** Warning card text for when immediately revert a release with history */
  'revert-dialog.confirm-revert.warning-card':
    'Er zijn wijzigingen aangebracht in documenten in deze release nadat ze zijn gepubliceerd. Het terugzetten zal deze wijzigingen overschrijven.',

  /** Description of a reverted release */
  'revert-release.description': 'Wijzigingen in documentversies in "{{title}}" terugzetten.',
  /** Title of a reverted release */
  'revert-release.title': 'Terugzetten van "{{title}}"',

  /** Description for the review changes button in release tool */
  'review.description': 'Voeg documenten toe aan deze release om wijzigingen te bekijken',
  /** Text for when a document is edited */
  'review.edited': 'Bewerkt <RelativeTime/>',

  /** Schedule release button tooltip when there are no documents to schedule */
  'schedule-action.validation.no-documents': 'Er zijn geen documenten om in te plannen',

  /** Schedule release button tooltip when the release is already scheduled */
  'schedule-button-tooltip.already-scheduled': 'Deze release is al ingepland',
  /** Schedule release button tooltip when there are validation errors */
  'schedule-button-tooltip.validation.error': 'Sommige documenten hebben validatiefouten',
  /** Schedule release button tooltip when validation is loading */
  'schedule-button-tooltip.validation.loading': 'Documenten valideren...',
  /** Schedule release button tooltip when user has no permissions to schedule */
  'schedule-button-tooltip.validation.no-permission': 'U heeft geen toestemming om in te plannen',

  /** Title of unschedule release dialog */
  'schedule-button.tooltip': 'Weet u zeker dat u de release wilt uitplannen?',

  /** Description for the confirm button for scheduling a release */
  'schedule-dialog.confirm-button': 'Ja, inplannen',
  /** Description shown in unschedule relaease dialog */
  'schedule-dialog.confirm-description_one':
    "De release '<strong>{{title}}</strong>' en het bijbehorende document worden gepubliceerd op de geselecteerde datum.",
  /** Description for the dialog confirming the publish of a release with multiple documents */
  'schedule-dialog.confirm-description_other':
    'De release <strong>{{title}}</strong> en de {{count}} documentversies worden ingepland.',
  /** Title for unschedule release dialog */
  'schedule-dialog.confirm-title': 'De release inplannen',
  /** Description for warning that the published schedule time is in the past */
  'schedule-dialog.publish-date-in-past-warning': 'Plan in voor een toekomstig tijdstip en datum.',
  /** Label for date picker when scheduling a release */
  'schedule-dialog.select-publish-date-label': 'Inplannen op',

  /** Confirm button text for the schedule unpublish dialog */
  'schedule-unpublish-dialog.confirm': 'Depublicatie inplannen',
  /** Description for the schedule unpublish dialog */
  'schedule-unpublish-dialog.description':
    'Selecteer wanneer dit document gedepubliceerd moet worden.',
  /** Header for the schedule unpublish dialog */
  'schedule-unpublish-dialog.header': 'Concept inplannen voor depublicatie',

  /** Placeholder for search of documents in a release */
  'search-documents-placeholder': 'Documenten zoeken',

  /** Text for when the release has no errors found */
  'summary.all-documents-errors-found': 'Alle documenten gevalideerd, problemen gevonden',
  /** Text for when the release has validated all documents */
  'summary.all-documents-validated': 'Alle documenten gevalideerd, geen problemen gevonden',
  /** Text for when the release was created */
  'summary.created': 'Aangemaakt <RelativeTime/>',
  /** Text for when the release is composed of one document */
  'summary.document-count_one': '{{count}} document',
  /** Text for when the release is composed of multiple documents */
  'summary.document-count_other': '{{count}} documenten',
  /** Text for when the release has some errors found */
  'summary.errors-found':
    'Om de release te publiceren of in te plannen, lost u de problemen in de documenten op',
  /** Text for when the release has no documents */
  'summary.no-documents': 'Geen documenten',
  /** Description for the empty state when a cardinality-one release has no documents */
  'summary.no-documents-cardinality-one.description':
    'Dit ingeplande concept bevat geen document. Het is mogelijk verwijderd.',
  /** Title for the empty state when a cardinality-one release has no documents */
  'summary.no-documents-cardinality-one.title': 'Geen document in deze release',
  /** Text for when the release has not published */
  'summary.not-published': 'Niet gepubliceerd',
  /** Text for when the release was published */
  'summary.published': 'Gepubliceerd <RelativeTime/>',
  /** Text for when the release has validated documents */
  'summary.validated-documents': '{{validatedCount}} van {{totalCount}} documenten gevalideerd',
  /** Text for validation loading indicator */
  'summary.validating-documents': 'Documenten valideren: {{validatedCount}} van {{totalCount}}',

  /** add action type that will be shown in the table*/
  'table-body.action.add': 'Toevoegen',
  /** Change action type that will be shown in the table*/
  'table-body.action.change': 'Wijzigen',
  /** Change action type that will be shown in the table*/
  'table-body.action.unpublish': 'Depubliceren',

  /** Header for the document table in the release tool - action */
  'table-header.action': 'Actie',
  /** Header for the document table in the release tool - Archived */
  'table-header.archivedAt': 'Gearchiveerd',
  /** Header for the document table in the release tool - contributors */
  'table-header.contributors': 'Bijdragers',
  /** Header for the document table in the release tool - created by */
  'table-header.created-by': 'Aangemaakt door',
  /** Header for the document table in the release tool - document preview */
  'table-header.document': 'Document',
  /** Header for the document table in the release tool - title */
  'table-header.documents': 'Documenten',
  /** Header for the document table in the release tool - edited */
  'table-header.edited': 'Bewerkt',
  /** Header for the paused scheduled drafts table - intended for */
  'table-header.intended-for': 'Bedoeld voor',
  /** Header for the document table in the release tool - Published */
  'table-header.published-at': 'Gepubliceerd',
  /** Header for the document table in the release tool - Published */
  'table-header.publishedAt': 'Gepubliceerd',
  /** Header for the scheduled drafts document table in the release tool - published at */
  'table-header.scheduled-draft.published-at': 'Gepubliceerd op',
  /** Header for the scheduled drafts document table in the release tool - scheduled for */
  'table-header.scheduled-for': 'Gepland voor',
  /** Header for the document table in the release tool - time */
  'table-header.time': 'Tijd',
  /** Header for the  document table in the release tool - release title */
  'table-header.title': 'Release',
  /** Header for the document table in the release tool - type */
  'table-header.type': 'Type',
  /** Header for the document table in the release tool - when */
  'table-header.when': 'Wanneer',

  /** Text for the release time label for scheduled releases  which has not been scheduled yet*/
  'time.estimated': 'Geschat',
  /** Text for the release time label for scheduled releases  which has been scheduled*/
  'time.scheduled': 'Gepland',

  /** Text for toast when release failed to archive */
  'toast.archive.error': "Archiveren van '<strong>{{title}}</strong>' mislukt: {{error}}",
  /** Toast error message when bulk scheduling of active drafts fails */
  'toast.confirm-active-scheduled-drafts.error': 'Plannen van concepten mislukt: {{error}}',
  /** Toast message after copying release ID */
  'toast.copy-release-id.success': 'Release ID gekopieerd naar klembord',
  /** Toast message after copying release link */
  'toast.copy-release-link.success': 'Release link gekopieerd naar klembord',
  /** Toast message after copying release title */
  'toast.copy-release-title.success': 'Release titel gekopieerd naar klembord',
  /** Description for toast when creating new version of document in release failed */
  'toast.create-version.error': 'Mislukt om document aan release toe te voegen: {{error}}',
  /** Description for toast when release deletion failed */
  'toast.delete.error': "Verwijderen van '<strong>{{title}}</strong>' mislukt: {{error}}",
  /** Description for toast when release is successfully deleted */
  'toast.delete.success': "De release '<strong>{{title}}</strong>' is succesvol verwijderd",
  /** Description for toast when release duplication failed */
  'toast.duplicate.error': "Dupliceren van '<strong>{{title}}</strong>' mislukt: {{error}}",
  /** Description for toast when release is successfully duplicated */
  'toast.duplicate.success': "De release '<strong>{{title}}</strong>' is gedupliceerd. <Link/>",
  /** Link text for toast link to the duplicated release */
  'toast.duplicate.success-link': 'Bekijk gedupliceerde release',
  /** Text for toast when release has been reverted immediately */
  'toast.immediate-revert.success': "De release '{{title}}' is succesvol teruggedraaid",
  /** Text for toast when release failed to publish */
  'toast.publish.error': "Publiceren van '<strong>{{title}}</strong>' mislukt: {{error}}",
  /** Text for toast when release has reverted release successfully staged */
  'toast.revert-stage.success':
    "Terugdraai-release voor '{{title}}' is succesvol aangemaakt. <Link/>",
  /** Link text for toast link to the generated revert release */
  'toast.revert-stage.success-link': 'Bekijk terugdraai-release',
  /** Text for toast when release failed to revert */
  'toast.revert.error': 'Terugdraaien van release mislukt: {{error}}',
  /** Text for toast when release failed to schedule */
  'toast.schedule.error': "Inplannen van '<strong>{{title}}</strong>' mislukt: {{error}}",
  /** Text for toast when release has been scheduled */
  'toast.schedule.success': "De release '<strong>{{title}}</strong>' is ingepland.",
  /** Text for toast when release failed to unarchive */
  'toast.unarchive.error': "Dearchiveren van '<strong>{{title}}</strong>' mislukt: {{error}}",
  /** Text for toast when release failed to unschedule */
  'toast.unschedule.error':
    "Verwijderen van planning van '<strong>{{title}}</strong>' mislukt: {{error}}",

  /** Text for tooltip when a release has been scheduled */
  'type-picker.tooltip.scheduled':
    'De release is ingepland, verwijder de planning om het type te wijzigen',

  /** Text action in unpublish dialog to cancel */
  'unpublish-dialog.action.cancel': 'Annuleren',
  /** Text action in unpublish dialog to unpublish */
  'unpublish-dialog.action.unpublish': 'Ja, depubliceren bij het uitbrengen',
  /** Description for unpublish dialog, explaining that all changes made to this document will be lost */
  'unpublish-dialog.description.lost-changes':
    'Alle wijzigingen aan deze documentversie gaan verloren.',
  /** Description for the unpublish dialog, explaining that it will create a draft if no draft exists at time of release */
  'unpublish-dialog.description.to-draft':
    'Dit zal het document depubliceren als onderdeel van de <Label>{{title}}</Label> release, en een concept aanmaken als er geen concept bestaat op het moment van uitbrengen.',
  /** Title for the dialog confirming the unpublish of a release */
  'unpublish-dialog.header':
    'Weet u zeker dat u dit document wilt depubliceren bij het uitbrengen?',

  /** Text for when a document is unpublished */
  'unpublish.already-unpublished': 'Dit document is al gedepubliceerd.',
  /** Tooltip label for when a document is unpublished */
  'unpublish.no-published-version': 'Er is geen gepubliceerde versie van dit document.',

  /** Description shown in unschedule relaease dialog */
  'unschedule-dialog.confirm-description':
    'De release wordt niet langer gepubliceerd op de geplande datum.',
  /** Title for unschedule release dialog */
  'unschedule-dialog.confirm-title':
    'Weet u zeker dat u de planning van de release ongedaan wilt maken?',
})
