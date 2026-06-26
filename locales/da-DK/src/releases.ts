import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Action text for adding a document to release */
  'action.add-document': 'Tilføj dokument',
  /** Action text for archiving a release */
  'action.archive': 'Arkiver release',
  /** Tooltip for when the archive release action is disabled due to release being scheduled  */
  'action.archive.tooltip': 'Fjern planlægning af denne release for at arkivere den',
  /** Action text for showing the archived releases */
  'action.archived': 'Arkiveret',
  /** Menu item label for copying release ID */
  'action.copy-release-id.label': 'Kopiér release-ID',
  /** Menu item label for copying release URL */
  'action.copy-release-link.label': 'Kopiér release-URL',
  /** Menu item label for copying release title */
  'action.copy-release-title.label': 'Kopiér release-titel',
  /** Tooltip for copy release actions button */
  'action.copy-release.label': 'Kopiér',
  /** Action text for staging a new revert release */
  'action.create-revert-release': 'Opret en ny release',
  /** Action text for deleting a release */
  'action.delete-release': 'Slet release',
  /** Menu item label for showing scheduled drafts */
  'action.drafts': 'Planlagte kladder',
  /** Action text for duplicating a release */
  'action.duplicate-release': 'Dupliker release',
  /** Action text for editing a release */
  'action.edit': 'Rediger release',
  /** Action text for reverting a release immediately without staging changes */
  'action.immediate-revert-release': 'Gendan nu',
  /** Action text for opening a release */
  'action.open': 'Aktiv',
  /** Action text for showing the paused scheduled drafts */
  'action.paused': 'Sat på pause',
  /** Action text for publishing all documents in a release (and the release itself) */
  'action.publish-all-documents': 'Kør release',
  /** Menu item label for showing releases (multi-document releases) */
  'action.releases': 'Releases',
  /** Action text for reverting a release */
  'action.revert': 'Gendan release',
  /** Action message for when document is scheduled for unpublishing a document and you want to no longer unpublish it */
  'action.revert-unpublish-actions': 'Fortryd afpublicering ved frigivelse',
  /** Text for the review changes button in release tool */
  'action.review': 'Gennemse ændringer',
  /** Action text for scheduling a release */
  'action.schedule': 'Planlæg release...',
  /** Action text for scheduling unpublish of a draft document */
  'action.schedule-unpublish': 'Planlæg afpublicering',
  /** Tooltip text for when schedule unpublish is disabled because document is not published */
  'action.schedule-unpublish.disabled.not-published':
    'Dokumentet skal være publiceret for at planlægge afpublicering',
  /** Label for unarchiving a release */
  'action.unarchive': 'Fjern fra arkiv',
  /** Action text for unpublishing a document in a release in the context menu */
  'action.unpublish': 'Afpublicér',
  /** Action message for scheduling an unpublished of a document  */
  'action.unpublish-doc-actions': 'Afpublicér ved udgivelse',
  /** Action text for unscheduling a release */
  'action.unschedule': 'Annullér planlagt udgivelse',

  /** Text for the summary button in release tool */
  'actions.summary': 'Oversigt',

  /* The text for the activity event when a document is added to a release */
  'activity.event.add-document': 'Tilføjede en dokumentversion',
  /* The text for the activity event when the release is archived */
  'activity.event.archive': 'Arkiverede udgivelsen <strong>{{releaseTitle}}</strong>',
  /* The text for the activity event when the release is created */
  'activity.event.create':
    'Oprettede udgivelsen <strong>{{releaseTitle}}</strong> <ScheduleTarget>med mål </ScheduleTarget>',
  /* The text for the activity event when a document is removed from a release */
  'activity.event.discard-document': 'Kasserede en dokumentversion',
  'activity.event.edit': 'Indstillede udgivelsestidspunkt til <ScheduleTarget></ScheduleTarget>',
  /**The text to display in the changes when the release type changes to asap */
  'activity.event.edit-time-asap': 'Så hurtigt som muligt',
  /**The text to display in the changes when the release type changes to undecided */
  'activity.event.edit-time-undecided': 'Uafgjort',
  /* The text for the activity event when the release is published */
  'activity.event.publish': 'Publicerede udgivelsen <strong>{{releaseTitle}}</strong>',
  /* The text for the activity event when the release is scheduled */
  'activity.event.schedule': 'Markeret som planlagt',
  /** The text for the activity event when the release is unarchived */
  'activity.event.unarchive': 'Gendannede udgivelsen <strong>{{releaseTitle}}</strong> fra arkiv',
  /** The text for the activity event when the release is unscheduled */
  'activity.event.unschedule': 'Markeret som ikke planlagt',
  /** The loading text for when releases are loading */
  'activity.panel.error': 'Der opstod en fejl ved hentning af udgivelsesaktivitet',
  /** The loading text for when releases are loading */
  'activity.panel.loading': 'Indlæser udgivelsesaktivitet',
  /** The title for the activity panel shown in the releases detail screen */
  'activity.panel.title': 'Aktivitet',

  /** Label for the button to proceed with archiving a release */
  'archive-dialog.confirm-archive-button': 'Ja, arkivér udgivelse',
  /** Description for the dialog confirming the archive of a release with one document */
  'archive-dialog.confirm-archive-description_one': 'Dette vil arkivere 1 dokumentversion.',
  /** Description for the dialog confirming the archive of a release with more than one document */
  'archive-dialog.confirm-archive-description_other':
    'Dette vil arkivere {{count}} dokumentversioner.',
  /** Header for the dialog confirming the archive of a release */
  'archive-dialog.confirm-archive-header': 'Er du sikker på, at du vil arkivere denne udgivelse?',
  /** Title for the dialog confirming the archive of a release */
  'archive-dialog.confirm-archive-title':
    "Er du sikker på, at du vil arkivere udgivelsen <strong>'{{title}}'</strong>?",

  /** Description for information card on a published or archived release to description retention effects */
  'archive-info.description':
    'Den vil være tilgængelig i {{retentionDays}} dage og derefter automatisk fjernet den {{removalDate}}. <Link>Læs om opbevaring</Link>.',
  /** Title for information card on a archived release */
  'archive-info.title': 'Denne udgivelse er arkiveret',

  /** Banner text showing count of active scheduled drafts requiring confirmation with one draft */
  'banner.confirm-active-scheduled-drafts_one':
    'Der er {{count}} Scheduled Draft, der kræver bekræftelse af planlægning',
  /** Banner text showing count of active scheduled drafts requiring confirmation with multiple drafts */
  'banner.confirm-active-scheduled-drafts_other':
    'Der er {{count}} Scheduled Drafts, der kræver bekræftelse af planlægning',
  /** Button text for confirming scheduling of active drafts */
  'banner.confirm-active-scheduled-drafts.button': 'Genoptag planlægning',
  /** Button text when confirming schedules from paused mode */
  'banner.confirm-active-scheduled-drafts.button-paused': 'Genoptag alle planlægninger',
  /** Banner text shown when drafts mode is disabled but there are still scheduled drafts */
  'banner.drafts-mode-disabled':
    'Drafts-tilstand er blevet deaktiveret, men der er stadig planlagte kladder, der skal udgives.',
  /** Banner text shown when navigating to a release that does not exist */
  'banner.release-not-found': 'Denne udgivelse kunne ikke findes',
  /** Tooltip for the dismiss button in the release not found banner */
  'banner.release-not-found.dismiss': 'Afvis',
  /** Banner text shown when scheduled drafts feature is disabled but there are still scheduled drafts */
  'banner.scheduled-drafts-disabled':
    'Scheduled drafts er blevet deaktiveret, men der er stadig planlagte kladder, der skal udgives.',

  /** Title for changes to published documents */
  'changes-published-docs.title': 'Ændringer i udgivne dokumenter',

  /** Dialog confirm button text for confirming all scheduled drafts */
  'confirm-active-scheduled-drafts-dialog.confirm-button': 'Bekræft planlægninger',
  /** Dialog description for confirming active scheduled drafts */
  'confirm-active-scheduled-drafts-dialog.description':
    'Planlæg alle pausede Scheduled Drafts til deres tilsigtede udgivelsesdatoer',
  /** Dialog warning when some scheduled drafts have past dates */
  'confirm-active-scheduled-drafts-dialog.past-dates-warning':
    'Nogle af disse Scheduled Drafts er planlagt til tidligere datoer. Bekræftelse af planlægninger vil straks udgive disse versioner af dokumenterne.',
  /** Dialog title for confirming active scheduled drafts */
  'confirm-active-scheduled-drafts-dialog.title': 'Genoptag Scheduled Drafts',

  /** Suffix for when a release is a copy of another release */
  'copy-suffix': 'Kopi',

  /** Confirm button text for overriding existing draft */
  'copy-to-draft-dialog.confirm-button': 'Ja, tilsidesæt kladde',
  /** Description for dialog when copying version to draft that already exists */
  'copy-to-draft-dialog.description':
    'Der findes allerede en kladdeversion af dette dokument. Kopiér den aktuelle version til kladden og tilsidesæt den eksisterende kladdeversion.',
  /** Title for dialog when copying version to draft that already exists */
  'copy-to-draft-dialog.title': 'Kladdeversion findes allerede',

  /** Text for when a release / document was created */
  created: 'Oprettet <RelativeTime/>',

  /** Activity inspector button text */
  'dashboard.details.activity': 'Aktivitet',
  /** Text for the releases detail screen in the pin release button. */
  'dashboard.details.pin-release': 'Fastgør udgivelse til studie',
  /** Text for the releases detail screen when a release was published ASAP */
  'dashboard.details.published-asap': 'Udgivet',
  /** Text for the releases detail screen when a release was published from scheduling */
  'dashboard.details.published-on': 'Udgivet den {{date}}',
  /** Text for the releases detail screen in the unpin release button. */
  'dashboard.details.unpin-release': 'Frigør udgivelse fra studie',

  /** Label for the button to proceed deleting a release */
  'delete-dialog.confirm-delete-button': 'Ja, slet udgivelse',
  /** Description for the dialog confirming the deleting of a release with one document */
  'delete-dialog.confirm-delete-description_one': 'Dette vil slette 1 dokumentversion.',
  /** Description for the dialog confirming the deleting of a release with more than one document */
  'delete-dialog.confirm-delete-description_other': 'Dette vil slette {{count}} dokumentversioner.',
  /** Header for deleting a release dialog */
  'delete-dialog.confirm-delete.header': 'Er du sikker på, at du vil slette denne udgivelse?',

  /** Label when a release has been deleted by a different user */
  'deleted-release': "'<strong>{{title}}</strong>'-udgivelsen er blevet slettet",

  /** Text for when there's no changes in a release diff */
  'diff.list-empty': 'Ændringslisten er tom, se dokument',
  /** Text for when there's no changes in a release diff */
  'diff.no-changes': 'Ingen ændringer',

  /** Description for discarding a draft of a document dialog */
  'discard-version-dialog.description-draft':
    'Dette vil permanent fjerne alle ændringer foretaget i dette dokument. Denne handling kan ikke fortrydes.',
  /** Description for discarding a version of a document dialog */
  'discard-version-dialog.description-release':
    "Dette vil permanent fjerne alle ændringer foretaget i dette dokument inden for '<strong>{{releaseTitle}}</strong>'-udgivelsen. Denne handling kan ikke fortrydes.",
  /** Title for dialog for discarding a draft of a document */
  'discard-version-dialog.header-draft': 'Kassér kladde?',
  /** Header for discarding a version from a release of a document dialog */
  'discard-version-dialog.header-release':
    "Fjern dokument fra '<strong>{{releaseTitle}}</strong>'-udgivelsen?",
  /** Title for dialog for discarding a draft of a document */
  'discard-version-dialog.title-draft': 'Kassér kladde',
  /** Title for dialog for discarding a version of a document */
  'discard-version-dialog.title-release': 'Fjern fra udgivelse',

  /** Label for when a document in a release has a single validation warning */
  'document-validation.error_one': '{{count}} valideringsfejl',
  /** Label for when a document in a release has multiple validation warnings */
  'document-validation.error_other': '{{count}} valideringsfejl',

  /** Label for the button to proceed with duplicating a release */
  'duplicate-dialog.confirm-duplicate-button': 'Ja, duplikér udgivelse',
  /** Description for the dialog confirming the duplicate of a release with one document */
  'duplicate-dialog.confirm-duplicate-description_one':
    'Dette vil duplikere udgivelsen og den 1 dokumentversion.',
  /** Description for the dialog confirming the duplicate of a release with more than one document */
  'duplicate-dialog.confirm-duplicate-description_other':
    'Dette vil duplikere udgivelsen og de {{count}} dokumentversioner.',
  /** Header for the dialog confirming the duplicate of a release */
  'duplicate-dialog.confirm-duplicate-header':
    'Er du sikker på, at du vil duplikere denne udgivelse?',

  /** Title text displayed for technical error details */
  'error-details-title': 'Fejldetaljer',

  /** Title text when error during release update */
  'failed-edit-title': 'Kunne ikke gemme ændringer',

  /** Title text displayed for releases that failed to publish  */
  'failed-publish-title': 'Kunne ikke udgive',

  /** Title text displayed for releases that failed to schedule  */
  'failed-schedule-title': 'Kunne ikke planlægge',

  /** Filter tab label for all documents */
  'filter-tab.all': 'Alle',
  /** Filter tab label for documents with validation errors */
  'filter-tab.errors': 'Fejl',

  /**The text that will be shown in the footer to indicate the time the release was archived */
  'footer.status.archived': 'Arkiveret',
  /**The text that will be shown in the footer to indicate the time the release was created */
  'footer.status.created': 'Oprettet',
  /**The text that will be shown in the footer to indicate the time the release was created */
  'footer.status.edited': 'Redigeret',
  /**The text that will be shown in the footer to indicate the time the release was published */
  'footer.status.published': 'Udgivet',
  /**The text that will be shown in the footer to indicate the time the release was unarchived */
  'footer.status.unarchived': 'Afarkiveret',

  /** Label text for the loading state whilst release is being loaded */
  'loading-release': 'Indlæser release',

  /** Text for when documents of a release are loading */
  'loading-release-documents': 'Indlæser dokumenter',
  /** Description text for when loading documents on a release failed */
  'loading-release-documents.error.description':
    'Vi kan ikke indlæse dokumenterne til denne release. Prøv venligst igen senere.',
  /** Title text for when loading documents on a release failed */
  'loading-release-documents.error.title': 'Noget gik galt',

  /** Label for title of actions for "when releasing" */
  'menu.group.when-releasing': 'Ved udgivelse',
  /** Label for the release menu */
  'menu.label': 'Release-menu',
  /** Tooltip for the release menu */
  'menu.tooltip': 'Handlinger',

  /** Text for when no archived releases are found */
  'no-archived-release': 'Ingen arkiverede releases',

  /** Tooltip text when there are no paused scheduled drafts */
  'no-paused-release': 'Ingen pausede planlagte kladder',

  /** Text for when no releases are found */
  'no-releases': 'Ingen releases',

  /** Text for when no scheduled drafts are found */
  'no-scheduled-drafts': 'Ingen planlagte kladder',

  /** Text for the button name for the release tool */
  'overview.action.documentation': 'Dokumentation',
  /** Tooltip for the calendar button in the release overview */
  'overview.calendar.tooltip': 'Vis kalender',
  /** Description for the release tool */
  'overview.description':
    'Releases er samlinger af dokumentændringer, der kan administreres, planlægges og rulles tilbage samlet.',
  /** Text for the placeholder in the search release input  */
  'overview.search-releases-placeholder': 'Søg i releases',
  /** Title for the release tool */
  'overview.title': 'Releases',

  /** Tooltip text for releases that have passed their intended publish date */
  'passed-intended-publish-date': 'Denne release har overskredet sin planlagte udgivelsesdato',

  /** Tooltip text for scheduled drafts that have passed their intended publish date */
  'passed-intended-publish-date-draft': 'Denne kladde har overskredet sin planlagte udgivelsesdato',

  /** Description for when a user doesn't have publish or schedule releases */
  'permission-missing-description':
    'Din rolle begrænser i øjeblikket, hvad du kan se i denne release. Du kan hverken udgive eller planlægge denne release.',

  /** Text for when a user doesn't have publish or schedule releases */
  'permission-missing-title': 'Begrænset adgang',

  /** Tooltip label when the user doesn't have permission to archive release */
  'permissions.error.archive': 'Du har ikke tilladelse til at arkivere denne release',
  /** Tooltip label when the user doesn't have permission to delete release */
  'permissions.error.delete': 'Du har ikke tilladelse til at slette denne release',
  /** Tooltip label when the user doesn't have permission for discarding a version */
  'permissions.error.discard-version': 'Du har ikke tilladelse til at kassere denne version',
  /** Tooltip label when the user doesn't have permission to duplicate release */
  'permissions.error.duplicate': 'Du har ikke tilladelse til at duplikere denne release',
  /** Tooltip label when the user doesn't have permission to unarchive release */
  'permissions.error.unarchive': 'Du har ikke tilladelse til at fjerne denne release fra arkivet',
  /** Tooltip label when the user doesn't have permission for unpublishing a document */
  'permissions.error.unpublish':
    'Du har ikke tilladelse til at annullere publiceringen af dette dokument',

  /** Tooltip text for when one user is editing a document in a release */
  'presence.tooltip.one':
    '{{displayName}} redigerer dette dokument i releasen "{{releaseTitle}}" lige nu',

  /** Tooltip text for publish release action when there are no documents */
  'publish-action.validation.no-documents': 'Der er ingen dokumenter at publicere',

  /** Description for the dialog confirming the publish of a release with one document */
  'publish-dialog.confirm-publish-description_one':
    "Releasen '<strong>{{title}}</strong>' og dens dokument vil blive publiceret.",
  /** Description for the dialog confirming the publish of a release with multiple documents */
  'publish-dialog.confirm-publish-description_other':
    "Releasen '<strong>{{title}}</strong>' og dens {{releaseDocumentsLength}} dokumenter vil blive publiceret.",
  /** Title for the dialog confirming the publish of a release */
  'publish-dialog.confirm-publish.title':
    'Er du sikker på, at du vil publicere releasen og alle dokumentversioner?',
  /** Label for when documents in release have validation errors */
  'publish-dialog.validation.error': 'Nogle dokumenter har valideringsfejl',
  /** Label for when documents are being validated */
  'publish-dialog.validation.loading': 'Validerer dokumenter...',
  /** Label for the button when the user doesn't have permissions to publish a release */
  'publish-dialog.validation.no-permission': 'Du har ikke tilladelse til at publicere',

  /** Title for information card on a published release */
  'publish-info.title': 'Denne release er publiceret.',

  /** Placeholder title for a release with no title */
  'release-placeholder.title': 'Uden titel',

  /** Description for the dialog confirming the revert of a release with multiple documents */
  'revert-dialog.confirm-revert-description_one':
    'Dette vil gendanne {{releaseDocumentsLength}} dokumentversion.',
  /** Description for the dialog confirming the revert of a release with multiple documents */
  'revert-dialog.confirm-revert-description_other':
    'Dette vil gendanne {{releaseDocumentsLength}} dokumentversioner.',
  /** Checkbox label to confirm whether to create a staged release for revert or immediately revert */
  'revert-dialog.confirm-revert.stage-revert-checkbox-label': 'Gendan releasen med det samme',
  /** Title for the dialog confirming the revert of a release */
  'revert-dialog.confirm-revert.title': "Er du sikker på, at du vil gendanne releasen '{{title}}'?",
  /** Warning card text for when immediately revert a release with history */
  'revert-dialog.confirm-revert.warning-card':
    'Der blev foretaget ændringer i dokumenter i denne release, efter de blev publiceret. Gendannelse vil overskrive disse ændringer.',

  /** Description of a reverted release */
  'revert-release.description': 'Gendan ændringer til dokumentversioner i "{{title}}".',
  /** Title of a reverted release */
  'revert-release.title': 'Gendanner "{{title}}"',

  /** Description for the review changes button in release tool */
  'review.description': 'Tilføj dokumenter til denne release for at gennemgå ændringer',
  /** Text for when a document is edited */
  'review.edited': 'Redigeret <RelativeTime/>',

  /** Schedule release button tooltip when there are no documents to schedule */
  'schedule-action.validation.no-documents': 'Der er ingen dokumenter at planlægge',

  /** Schedule release button tooltip when the release is already scheduled */
  'schedule-button-tooltip.already-scheduled': 'Denne release er allerede planlagt',
  /** Schedule release button tooltip when there are validation errors */
  'schedule-button-tooltip.validation.error': 'Nogle dokumenter har valideringsfejl',
  /** Schedule release button tooltip when validation is loading */
  'schedule-button-tooltip.validation.loading': 'Validerer dokumenter...',
  /** Schedule release button tooltip when user has no permissions to schedule */
  'schedule-button-tooltip.validation.no-permission': 'Du har ikke tilladelse til at planlægge',

  /** Title of unschedule release dialog */
  'schedule-button.tooltip': 'Er du sikker på, at du vil afplanlægge udgivelsen?',

  /** Description for the confirm button for scheduling a release */
  'schedule-dialog.confirm-button': 'Ja, planlæg',
  /** Description shown in unschedule relaease dialog */
  'schedule-dialog.confirm-description_one':
    "Udgivelsen '<strong>{{title}}</strong>' og dens dokument vil blive publiceret på den valgte dato.",
  /** Description for the dialog confirming the publish of a release with multiple documents */
  'schedule-dialog.confirm-description_other':
    'Udgivelsen <strong>{{title}}</strong> og dens {{count}} dokumentversioner vil blive planlagt.',
  /** Title for unschedule release dialog */
  'schedule-dialog.confirm-title': 'Planlæg udgivelsen',
  /** Description for warning that the published schedule time is in the past */
  'schedule-dialog.publish-date-in-past-warning': 'Planlæg til et fremtidigt tidspunkt og dato.',
  /** Label for date picker when scheduling a release */
  'schedule-dialog.select-publish-date-label': 'Planlæg til',

  /** Confirm button text for the schedule unpublish dialog */
  'schedule-unpublish-dialog.confirm': 'Planlæg afpublicering',
  /** Description for the schedule unpublish dialog */
  'schedule-unpublish-dialog.description': 'Vælg, hvornår dette dokument skal afpubliceres.',
  /** Header for the schedule unpublish dialog */
  'schedule-unpublish-dialog.header': 'Planlæg kladde til afpublicering',

  /** Placeholder for search of documents in a release */
  'search-documents-placeholder': 'Søg i dokumenter',

  /** Text for when the release has no errors found */
  'summary.all-documents-errors-found': 'Alle dokumenter valideret, problemer fundet',
  /** Text for when the release has validated all documents */
  'summary.all-documents-validated': 'Alle dokumenter valideret, ingen problemer fundet',
  /** Text for when the release was created */
  'summary.created': 'Oprettet <RelativeTime/>',
  /** Text for when the release is composed of one document */
  'summary.document-count_one': '{{count}} dokument',
  /** Text for when the release is composed of multiple documents */
  'summary.document-count_other': '{{count}} dokumenter',
  /** Text for when the release has some errors found */
  'summary.errors-found':
    'For at publicere eller planlægge udgivelsen skal du løse de problemer, der er fundet i dokumenterne',
  /** Text for when the release has no documents */
  'summary.no-documents': 'Ingen dokumenter',
  /** Description for the empty state when a cardinality-one release has no documents */
  'summary.no-documents-cardinality-one.description':
    'Denne planlagte kladde indeholder ikke et dokument. Det kan være blevet fjernet.',
  /** Title for the empty state when a cardinality-one release has no documents */
  'summary.no-documents-cardinality-one.title': 'Intet dokument i denne udgivelse',
  /** Text for when the release has not published */
  'summary.not-published': 'Ikke publiceret',
  /** Text for when the release was published */
  'summary.published': 'Publiceret <RelativeTime/>',
  /** Text for when the release has validated documents */
  'summary.validated-documents': '{{validatedCount}} af {{totalCount}} dokumenter valideret',
  /** Text for validation loading indicator */
  'summary.validating-documents': 'Validerer dokumenter: {{validatedCount}} af {{totalCount}}',

  /** add action type that will be shown in the table*/
  'table-body.action.add': 'Tilføj',
  /** Change action type that will be shown in the table*/
  'table-body.action.change': 'Ændr',
  /** Change action type that will be shown in the table*/
  'table-body.action.unpublish': 'Afpublicér',

  /** Header for the document table in the release tool - action */
  'table-header.action': 'Handling',
  /** Header for the document table in the release tool - Archived */
  'table-header.archivedAt': 'Arkiveret',
  /** Header for the document table in the release tool - contributors */
  'table-header.contributors': 'Bidragydere',
  /** Header for the document table in the release tool - created by */
  'table-header.created-by': 'Oprettet af',
  /** Header for the document table in the release tool - document preview */
  'table-header.document': 'Dokument',
  /** Header for the document table in the release tool - title */
  'table-header.documents': 'Dokumenter',
  /** Header for the document table in the release tool - edited */
  'table-header.edited': 'Redigeret',
  /** Header for the paused scheduled drafts table - intended for */
  'table-header.intended-for': 'Beregnet til',
  /** Header for the document table in the release tool - Published */
  'table-header.published-at': 'Publiceret',
  /** Header for the document table in the release tool - Published */
  'table-header.publishedAt': 'Publiceret',
  /** Header for the scheduled drafts document table in the release tool - published at */
  'table-header.scheduled-draft.published-at': 'Publiceret den',
  /** Header for the scheduled drafts document table in the release tool - scheduled for */
  'table-header.scheduled-for': 'Planlagt til',
  /** Header for the document table in the release tool - time */
  'table-header.time': 'Tidspunkt',
  /** Header for the  document table in the release tool - release title */
  'table-header.title': 'Release',
  /** Header for the document table in the release tool - type */
  'table-header.type': 'Type',
  /** Header for the document table in the release tool - when */
  'table-header.when': 'Hvornår',

  /** Text for the release time label for scheduled releases  which has not been scheduled yet*/
  'time.estimated': 'Estimeret',
  /** Text for the release time label for scheduled releases  which has been scheduled*/
  'time.scheduled': 'Planlagt',

  /** Text for toast when release failed to archive */
  'toast.archive.error': "Kunne ikke arkivere '<strong>{{title}}</strong>': {{error}}",
  /** Toast error message when bulk scheduling of active drafts fails */
  'toast.confirm-active-scheduled-drafts.error': 'Kunne ikke planlægge kladder: {{error}}',
  /** Toast message after copying release ID */
  'toast.copy-release-id.success': 'Release-ID kopieret til udklipsholder',
  /** Toast message after copying release link */
  'toast.copy-release-link.success': 'Release-link kopieret til udklipsholder',
  /** Toast message after copying release title */
  'toast.copy-release-title.success': 'Release-titel kopieret til udklipsholder',
  /** Description for toast when creating new version of document in release failed */
  'toast.create-version.error': 'Kunne ikke tilføje dokument til release: {{error}}',
  /** Description for toast when release deletion failed */
  'toast.delete.error': "Kunne ikke slette '<strong>{{title}}</strong>': {{error}}",
  /** Description for toast when release is successfully deleted */
  'toast.delete.success': "Releasen '<strong>{{title}}</strong>' blev slettet",
  /** Description for toast when release duplication failed */
  'toast.duplicate.error': "Kunne ikke duplikere '<strong>{{title}}</strong>': {{error}}",
  /** Description for toast when release is successfully duplicated */
  'toast.duplicate.success': "Releasen '<strong>{{title}}</strong>' blev duplikeret. <Link/>",
  /** Link text for toast link to the duplicated release */
  'toast.duplicate.success-link': 'Vis duplikeret release',
  /** Text for toast when release has been reverted immediately */
  'toast.immediate-revert.success': "Releasen '{{title}}' blev genoprettet",
  /** Text for toast when release failed to publish */
  'toast.publish.error': "Kunne ikke udgive '<strong>{{title}}</strong>': {{error}}",
  /** Text for toast when release has reverted release successfully staged */
  'toast.revert-stage.success': "Genopretnings-release for '{{title}}' blev oprettet. <Link/>",
  /** Link text for toast link to the generated revert release */
  'toast.revert-stage.success-link': 'Vis genopretnings-release',
  /** Text for toast when release failed to revert */
  'toast.revert.error': 'Kunne ikke genoprette release: {{error}}',
  /** Text for toast when release failed to schedule */
  'toast.schedule.error': "Kunne ikke planlægge '<strong>{{title}}</strong>': {{error}}",
  /** Text for toast when release has been scheduled */
  'toast.schedule.success': "Releasen '<strong>{{title}}</strong>' blev planlagt.",
  /** Text for toast when release failed to unarchive */
  'toast.unarchive.error': "Kunne ikke fjerne fra arkiv '<strong>{{title}}</strong>': {{error}}",
  /** Text for toast when release failed to unschedule */
  'toast.unschedule.error': "Kunne ikke afplanlægge '<strong>{{title}}</strong>': {{error}}",

  /** Text for tooltip when a release has been scheduled */
  'type-picker.tooltip.scheduled': 'Releasen er planlagt – afplanlæg den for at ændre typen',

  /** Text action in unpublish dialog to cancel */
  'unpublish-dialog.action.cancel': 'Annuller',
  /** Text action in unpublish dialog to unpublish */
  'unpublish-dialog.action.unpublish': 'Ja, afpublicér ved udgivelse',
  /** Description for unpublish dialog, explaining that all changes made to this document will be lost */
  'unpublish-dialog.description.lost-changes':
    'Alle ændringer foretaget i denne dokumentversion vil gå tabt.',
  /** Description for the unpublish dialog, explaining that it will create a draft if no draft exists at time of release */
  'unpublish-dialog.description.to-draft':
    'Dette vil afpublicere dokumentet som en del af <Label>{{title}}</Label>-releasen og oprette et kladde, hvis der ikke findes en kladde på tidspunktet for udgivelsen.',
  /** Title for the dialog confirming the unpublish of a release */
  'unpublish-dialog.header': 'Er du sikker på, at du vil afpublicere dette dokument ved udgivelse?',

  /** Text for when a document is unpublished */
  'unpublish.already-unpublished': 'Dette dokument er allerede afpubliceret.',
  /** Tooltip label for when a document is unpublished */
  'unpublish.no-published-version': 'Der er ingen udgivet version af dette dokument.',

  /** Description shown in unschedule relaease dialog */
  'unschedule-dialog.confirm-description':
    'Udgivelsen vil ikke længere blive publiceret på den planlagte dato',
  /** Title for unschedule release dialog */
  'unschedule-dialog.confirm-title': 'Er du sikker på, at du vil afplanlægge udgivelsen?',
})
