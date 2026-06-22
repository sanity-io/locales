import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Action text for adding a document to release */
  'action.add-document': 'Legg til dokument',
  /** Action text for archiving a release */
  'action.archive': 'Arkiver utslepp',
  /** Tooltip for when the archive release action is disabled due to release being scheduled  */
  'action.archive.tooltip': 'Avplanlegg dette utslepet for å arkivere det',
  /** Action text for showing the archived releases */
  'action.archived': 'Arkiverte',
  /** Menu item label for copying release ID */
  'action.copy-release-id.label': 'Kopier utslepps-ID',
  /** Menu item label for copying release URL */
  'action.copy-release-link.label': 'Kopier utslepps-URL',
  /** Menu item label for copying release title */
  'action.copy-release-title.label': 'Kopier utslepp-tittel',
  /** Tooltip for copy release actions button */
  'action.copy-release.label': 'Kopier',
  /** Action text for staging a new revert release */
  'action.create-revert-release': 'Opprett eit nytt utslepp',
  /** Action text for deleting a release */
  'action.delete-release': 'Slett utslepp',
  /** Menu item label for showing scheduled drafts */
  'action.drafts': 'Planlagde utkast',
  /** Action text for duplicating a release */
  'action.duplicate-release': 'Dupliser utslepp',
  /** Action text for editing a release */
  'action.edit': 'Rediger utslepp',
  /** Action text for reverting a release immediately without staging changes */
  'action.immediate-revert-release': 'Tilbakestill no',
  /** Action text for opening a release */
  'action.open': 'Aktiv',
  /** Action text for showing the paused scheduled drafts */
  'action.paused': 'Pausa',
  /** Action text for publishing all documents in a release (and the release itself) */
  'action.publish-all-documents': 'Køyr utslepp',
  /** Menu item label for showing releases (multi-document releases) */
  'action.releases': 'Utslepp',
  /** Action text for reverting a release */
  'action.revert': 'Tilbakestill utslepp',
  /** Action message for when document is scheduled for unpublishing a document and you want to no longer unpublish it */
  'action.revert-unpublish-actions': 'Tilbakestill avpublisering ved utslepp',
  /** Text for the review changes button in release tool */
  'action.review': 'Gjennomgå endringar',
  /** Action text for scheduling a release */
  'action.schedule': 'Planlegg utslepp...',
  /** Action text for scheduling unpublish of a draft document */
  'action.schedule-unpublish': 'Planlegg avpublisering',
  /** Tooltip text for when schedule unpublish is disabled because document is not published */
  'action.schedule-unpublish.disabled.not-published':
    'Dokumentet må vere publisert for å planlegge avpublisering',
  /** Label for unarchiving a release */
  'action.unarchive': 'Gjenopprett utslepp frå arkiv',
  /** Action text for unpublishing a document in a release in the context menu */
  'action.unpublish': 'Avpubliser',
  /** Action message for scheduling an unpublished of a document  */
  'action.unpublish-doc-actions': 'Avpubliser ved utsending',
  /** Action text for unscheduling a release */
  'action.unschedule': 'Avplanlegg utsending',

  /** Text for the summary button in release tool */
  'actions.summary': 'Samandrag',

  /* The text for the activity event when a document is added to a release */
  'activity.event.add-document': 'La til ein dokumentversjon',
  /* The text for the activity event when the release is archived */
  'activity.event.archive': 'Arkiverte utsendinga <strong>{{releaseTitle}}</strong>',
  /* The text for the activity event when the release is created */
  'activity.event.create':
    'Oppretta utsendinga <strong>{{releaseTitle}}</strong> <ScheduleTarget>med mål om </ScheduleTarget>',
  /* The text for the activity event when a document is removed from a release */
  'activity.event.discard-document': 'Forkasta ein dokumentversjon',
  'activity.event.edit': 'Sette utsendingstidspunkt til <ScheduleTarget></ScheduleTarget>',
  /**The text to display in the changes when the release type changes to asap */
  'activity.event.edit-time-asap': 'Så snart som mogleg',
  /**The text to display in the changes when the release type changes to undecided */
  'activity.event.edit-time-undecided': 'Uavgjort',
  /* The text for the activity event when the release is published */
  'activity.event.publish': 'Publiserte utsendinga <strong>{{releaseTitle}}</strong>',
  /* The text for the activity event when the release is scheduled */
  'activity.event.schedule': 'Merkt som planlagt',
  /** The text for the activity event when the release is unarchived */
  'activity.event.unarchive': 'Avarkiverte utsendinga <strong>{{releaseTitle}}</strong>',
  /** The text for the activity event when the release is unscheduled */
  'activity.event.unschedule': 'Merkt som ikkje planlagt',
  /** The loading text for when releases are loading */
  'activity.panel.error': 'Det oppstod ein feil ved henting av aktivitet for utsendinga',
  /** The loading text for when releases are loading */
  'activity.panel.loading': 'Lastar aktivitet for utsendinga',
  /** The title for the activity panel shown in the releases detail screen */
  'activity.panel.title': 'Aktivitet',

  /** Label for the button to proceed with archiving a release */
  'archive-dialog.confirm-archive-button': 'Ja, arkiver utsendinga',
  /** Description for the dialog confirming the archive of a release with one document */
  'archive-dialog.confirm-archive-description_one': 'Dette vil arkivere 1 dokumentversjon.',
  /** Description for the dialog confirming the archive of a release with more than one document */
  'archive-dialog.confirm-archive-description_other':
    'Dette vil arkivere {{count}} dokumentversjonar.',
  /** Header for the dialog confirming the archive of a release */
  'archive-dialog.confirm-archive-header': 'Er du sikker på at du vil arkivere denne utsendinga?',
  /** Title for the dialog confirming the archive of a release */
  'archive-dialog.confirm-archive-title':
    "Er du sikker på at du vil arkivere utsendinga <strong>'{{title}}'</strong>?",

  /** Description for information card on a published or archived release to description retention effects */
  'archive-info.description':
    'Ho vil vere tilgjengeleg i {{retentionDays}} dagar, og vert deretter automatisk fjerna den {{removalDate}}. <Link>Les om oppbevaring</Link>.',
  /** Title for information card on a archived release */
  'archive-info.title': 'Denne utsendinga er arkivert',

  /** Banner text showing count of active scheduled drafts requiring confirmation with one draft */
  'banner.confirm-active-scheduled-drafts_one':
    'Det er {{count}} Scheduled Draft som krev stadfesting av planlegging',
  /** Banner text showing count of active scheduled drafts requiring confirmation with multiple drafts */
  'banner.confirm-active-scheduled-drafts_other':
    'Det er {{count}} Scheduled Drafts som krev stadfesting av planlegging',
  /** Button text for confirming scheduling of active drafts */
  'banner.confirm-active-scheduled-drafts.button': 'Gjenoppta planlegging',
  /** Button text when confirming schedules from paused mode */
  'banner.confirm-active-scheduled-drafts.button-paused': 'Gjenoppta alle planar',
  /** Banner text shown when drafts mode is disabled but there are still scheduled drafts */
  'banner.drafts-mode-disabled':
    'Drafts-modus er deaktivert, men det finst framleis scheduled drafts som skal publiserast.',
  /** Banner text shown when navigating to a release that does not exist */
  'banner.release-not-found': 'Denne utgivinga kunne ikkje finnast',
  /** Tooltip for the dismiss button in the release not found banner */
  'banner.release-not-found.dismiss': 'Avvis',
  /** Banner text shown when scheduled drafts feature is disabled but there are still scheduled drafts */
  'banner.scheduled-drafts-disabled':
    'Scheduled drafts er deaktivert, men det finst framleis scheduled drafts som skal publiserast.',

  /** Title for changes to published documents */
  'changes-published-docs.title': 'Endringar i publiserte dokument',

  /** Dialog confirm button text for confirming all scheduled drafts */
  'confirm-active-scheduled-drafts-dialog.confirm-button': 'Stadfest planar',
  /** Dialog description for confirming active scheduled drafts */
  'confirm-active-scheduled-drafts-dialog.description':
    'Planlegg alle pauserte Scheduled Drafts for dei tiltenkte publiseringsdatoane deira',
  /** Dialog warning when some scheduled drafts have past dates */
  'confirm-active-scheduled-drafts-dialog.past-dates-warning':
    'Nokre av desse Scheduled Drafts er planlagde for tidlegare datoar. Å stadfesta planane vil umiddelbart publisera dei versjonane av dokumenta.',
  /** Dialog title for confirming active scheduled drafts */
  'confirm-active-scheduled-drafts-dialog.title': 'Gjenoppta Scheduled Drafts',

  /** Suffix for when a release is a copy of another release */
  'copy-suffix': 'Kopi',

  /** Confirm button text for overriding existing draft */
  'copy-to-draft-dialog.confirm-button': 'Ja, overstyr Draft',
  /** Description for dialog when copying version to draft that already exists */
  'copy-to-draft-dialog.description':
    'Det finst allereie ein draft-versjon av dette dokumentet. Kopier den gjeldande versjonen til draftet og overstyr den eksisterande draft-versjonen.',
  /** Title for dialog when copying version to draft that already exists */
  'copy-to-draft-dialog.title': 'Draft-versjon finst allereie',

  /** Text for when a release / document was created */
  created: 'Oppretta <RelativeTime/>',

  /** Activity inspector button text */
  'dashboard.details.activity': 'Aktivitet',
  /** Text for the releases detail screen in the pin release button. */
  'dashboard.details.pin-release': 'Fest utgiving til studio',
  /** Text for the releases detail screen when a release was published ASAP */
  'dashboard.details.published-asap': 'Publisert',
  /** Text for the releases detail screen when a release was published from scheduling */
  'dashboard.details.published-on': 'Publisert den {{date}}',
  /** Text for the releases detail screen in the unpin release button. */
  'dashboard.details.unpin-release': 'Løys utgiving frå studio',

  /** Label for the button to proceed deleting a release */
  'delete-dialog.confirm-delete-button': 'Ja, slett utgiving',
  /** Description for the dialog confirming the deleting of a release with one document */
  'delete-dialog.confirm-delete-description_one': 'Dette vil sletta 1 dokumentversjon.',
  /** Description for the dialog confirming the deleting of a release with more than one document */
  'delete-dialog.confirm-delete-description_other': 'Dette vil slette {{count}} dokumentversjonar.',
  /** Header for deleting a release dialog */
  'delete-dialog.confirm-delete.header': 'Er du sikker på at du vil slette denne utgivinga?',

  /** Label when a release has been deleted by a different user */
  'deleted-release': "Utgivinga '<strong>{{title}}</strong>' har vorte sletta",

  /** Text for when there's no changes in a release diff */
  'diff.list-empty': 'Endringslista er tom, sjå dokument',
  /** Text for when there's no changes in a release diff */
  'diff.no-changes': 'Ingen endringar',

  /** Description for discarding a draft of a document dialog */
  'discard-version-dialog.description-draft':
    'Dette vil permanent fjerne alle endringar som er gjort i dette dokumentet. Denne handlinga kan ikkje angrast.',
  /** Description for discarding a version of a document dialog */
  'discard-version-dialog.description-release':
    "Dette vil permanent fjerne alle endringar som er gjort i dette dokumentet i utgivinga '<strong>{{releaseTitle}}</strong>'. Denne handlinga kan ikkje angrast.",
  /** Title for dialog for discarding a draft of a document */
  'discard-version-dialog.header-draft': 'Forkaste utkast?',
  /** Header for discarding a version from a release of a document dialog */
  'discard-version-dialog.header-release':
    "Fjerne dokumentet frå utgivinga '<strong>{{releaseTitle}}</strong>'?",
  /** Title for dialog for discarding a draft of a document */
  'discard-version-dialog.title-draft': 'Forkaste utkast',
  /** Title for dialog for discarding a version of a document */
  'discard-version-dialog.title-release': 'Fjern frå utgjeving',

  /** Label for when a document in a release has a single validation warning */
  'document-validation.error_one': '{{count}} valideringsfeil',
  /** Label for when a document in a release has multiple validation warnings */
  'document-validation.error_other': '{{count}} valideringsfeil',

  /** Label for the button to proceed with duplicating a release */
  'duplicate-dialog.confirm-duplicate-button': 'Ja, dupliser utgjeving',
  /** Description for the dialog confirming the duplicate of a release with one document */
  'duplicate-dialog.confirm-duplicate-description_one':
    'Dette vil duplisere utgjevinga og 1 dokumentversjon.',
  /** Description for the dialog confirming the duplicate of a release with more than one document */
  'duplicate-dialog.confirm-duplicate-description_other':
    'Dette vil duplisere utgjevinga og {{count}} dokumentversjonar.',
  /** Header for the dialog confirming the duplicate of a release */
  'duplicate-dialog.confirm-duplicate-header':
    'Er du sikker på at du vil duplisere denne utgjevinga?',

  /** Title text displayed for technical error details */
  'error-details-title': 'Feildetaljar',

  /** Title text when error during release update */
  'failed-edit-title': 'Klarte ikkje å lagre endringar',

  /** Title text displayed for releases that failed to publish  */
  'failed-publish-title': 'Klarte ikkje å publisere',

  /** Title text displayed for releases that failed to schedule  */
  'failed-schedule-title': 'Klarte ikkje å planlegge',

  /** Filter tab label for all documents */
  'filter-tab.all': 'Alle',
  /** Filter tab label for documents with validation errors */
  'filter-tab.errors': 'Feil',

  /**The text that will be shown in the footer to indicate the time the release was archived */
  'footer.status.archived': 'Arkivert',
  /**The text that will be shown in the footer to indicate the time the release was created */
  'footer.status.created': 'Oppretta',
  /**The text that will be shown in the footer to indicate the time the release was created */
  'footer.status.edited': 'Redigert',
  /**The text that will be shown in the footer to indicate the time the release was published */
  'footer.status.published': 'Publisert',
  /**The text that will be shown in the footer to indicate the time the release was unarchived */
  'footer.status.unarchived': 'Uarkivert',

  /** Label text for the loading state whilst release is being loaded */
  'loading-release': 'Lastar inn utslepp',

  /** Text for when documents of a release are loading */
  'loading-release-documents': 'Lastar inn dokument',
  /** Description text for when loading documents on a release failed */
  'loading-release-documents.error.description':
    'Me klarar ikkje å lasta inn dokumenta for dette utsleppet. Ver venleg og prøv igjen seinare.',
  /** Title text for when loading documents on a release failed */
  'loading-release-documents.error.title': 'Noko gjekk gale',

  /** Label for title of actions for "when releasing" */
  'menu.group.when-releasing': 'Ved utslepp',
  /** Label for the release menu */
  'menu.label': 'Utsleppsmeny',
  /** Tooltip for the release menu */
  'menu.tooltip': 'Handlingar',

  /** Text for when no archived releases are found */
  'no-archived-release': 'Ingen arkiverte utslepp',

  /** Tooltip text when there are no paused scheduled drafts */
  'no-paused-release': 'Ingen sette planlagde utkast på pause',

  /** Text for when no releases are found */
  'no-releases': 'Ingen utslepp',

  /** Text for when no scheduled drafts are found */
  'no-scheduled-drafts': 'Ingen planlagde utkast',

  /** Text for the button name for the release tool */
  'overview.action.documentation': 'Dokumentasjon',
  /** Tooltip for the calendar button in the release overview */
  'overview.calendar.tooltip': 'Vis kalender',
  /** Description for the release tool */
  'overview.description':
    'Utslepp er samlingar av dokumentendringar som kan forvaltast, planleggjast og reverserast saman.',
  /** Text for the placeholder in the search release input  */
  'overview.search-releases-placeholder': 'Søk etter utslepp',
  /** Title for the release tool */
  'overview.title': 'Utslepp',

  /** Tooltip text for releases that have passed their intended publish date */
  'passed-intended-publish-date': 'Dette utsleppet har passert den tiltenkte publiseringsdatoen',

  /** Tooltip text for scheduled drafts that have passed their intended publish date */
  'passed-intended-publish-date-draft':
    'Dette utkastet har passert den tiltenkte publiseringsdatoen',

  /** Description for when a user doesn't have publish or schedule releases */
  'permission-missing-description':
    'Rolla di avgrensar for tida kva du kan sjå i dette utsleppet. Du kan korkje publisera eller planleggja dette utsleppet.',

  /** Text for when a user doesn't have publish or schedule releases */
  'permission-missing-title': 'Avgrensa tilgang',

  /** Tooltip label when the user doesn't have permission to archive release */
  'permissions.error.archive': 'Du har ikkje løyve til å arkivera dette utsleppet',
  /** Tooltip label when the user doesn't have permission to delete release */
  'permissions.error.delete': 'Du har ikkje løyve til å sletta dette utsleppet',
  /** Tooltip label when the user doesn't have permission for discarding a version */
  'permissions.error.discard-version': 'Du har ikkje løyve til å forkaste denne versjonen',
  /** Tooltip label when the user doesn't have permission to duplicate release */
  'permissions.error.duplicate': 'Du har ikkje løyve til å duplisere denne release',
  /** Tooltip label when the user doesn't have permission to unarchive release */
  'permissions.error.unarchive': 'Du har ikkje løyve til å avarkivere denne release',
  /** Tooltip label when the user doesn't have permission for unpublishing a document */
  'permissions.error.unpublish': 'Du har ikkje løyve til å avpublisere dette dokumentet',

  /** Tooltip text for when one user is editing a document in a release */
  'presence.tooltip.one':
    '{{displayName}} redigerer dette dokumentet i release-en «{{releaseTitle}}» akkurat no',

  /** Tooltip text for publish release action when there are no documents */
  'publish-action.validation.no-documents': 'Det finst ingen dokument å publisere',

  /** Description for the dialog confirming the publish of a release with one document */
  'publish-dialog.confirm-publish-description_one':
    "Release-en '<strong>{{title}}</strong>' og dokumentet hennar vil bli publisert.",
  /** Description for the dialog confirming the publish of a release with multiple documents */
  'publish-dialog.confirm-publish-description_other':
    "Release-en '<strong>{{title}}</strong>' og dei {{releaseDocumentsLength}} dokumenta hennar vil bli publiserte.",
  /** Title for the dialog confirming the publish of a release */
  'publish-dialog.confirm-publish.title':
    'Er du sikker på at du vil publisere release-en og alle dokumentversjonane?',
  /** Label for when documents in release have validation errors */
  'publish-dialog.validation.error': 'Nokre dokument har valideringsfeil',
  /** Label for when documents are being validated */
  'publish-dialog.validation.loading': 'Validerer dokument...',
  /** Label for the button when the user doesn't have permissions to publish a release */
  'publish-dialog.validation.no-permission': 'Du har ikkje løyve til å publisere',

  /** Title for information card on a published release */
  'publish-info.title': 'Denne release-en er publisert.',

  /** Placeholder title for a release with no title */
  'release-placeholder.title': 'Utan tittel',

  /** Description for the dialog confirming the revert of a release with multiple documents */
  'revert-dialog.confirm-revert-description_one':
    'Dette vil tilbakestille {{releaseDocumentsLength}} dokumentversjon.',
  /** Description for the dialog confirming the revert of a release with multiple documents */
  'revert-dialog.confirm-revert-description_other':
    'Dette vil tilbakestille {{releaseDocumentsLength}} dokumentversjonar.',
  /** Checkbox label to confirm whether to create a staged release for revert or immediately revert */
  'revert-dialog.confirm-revert.stage-revert-checkbox-label': 'Tilbakestill release-en umiddelbart',
  /** Title for the dialog confirming the revert of a release */
  'revert-dialog.confirm-revert.title':
    'Er du sikker på at du vil tilbakestille release-en «{{title}}»?',
  /** Warning card text for when immediately revert a release with history */
  'revert-dialog.confirm-revert.warning-card':
    'Det vart gjort endringar i dokument i denne release-en etter at dei vart publiserte. Tilbakestilling vil overskrive desse endringane.',

  /** Description of a reverted release */
  'revert-release.description': 'Tilbakestill endringar i dokumentversjonar i «{{title}}».',
  /** Title of a reverted release */
  'revert-release.title': 'Tilbakestiller «{{title}}»',

  /** Description for the review changes button in release tool */
  'review.description': 'Legg til dokument i denne release-en for å gjennomgå endringar',
  /** Text for when a document is edited */
  'review.edited': 'Redigert <RelativeTime/>',

  /** Schedule release button tooltip when there are no documents to schedule */
  'schedule-action.validation.no-documents': 'Det finst ingen dokument å planlegge',

  /** Schedule release button tooltip when the release is already scheduled */
  'schedule-button-tooltip.already-scheduled': 'Denne release-en er allereie planlagd',
  /** Schedule release button tooltip when there are validation errors */
  'schedule-button-tooltip.validation.error': 'Nokre dokument har valideringsfeil',
  /** Schedule release button tooltip when validation is loading */
  'schedule-button-tooltip.validation.loading': 'Validerer dokument...',
  /** Schedule release button tooltip when user has no permissions to schedule */
  'schedule-button-tooltip.validation.no-permission': 'Du har ikkje løyve til å planleggje',

  /** Title of unschedule release dialog */
  'schedule-button.tooltip': 'Er du sikker på at du vil avplanleggje utgivinga?',

  /** Description for the confirm button for scheduling a release */
  'schedule-dialog.confirm-button': 'Ja, planleggje',
  /** Description shown in unschedule relaease dialog */
  'schedule-dialog.confirm-description_one':
    "Utgivinga '<strong>{{title}}</strong>' og dokumentet hennar vil bli publisert på den valde datoen.",
  /** Description for the dialog confirming the publish of a release with multiple documents */
  'schedule-dialog.confirm-description_other':
    'Utgivinga <strong>{{title}}</strong> og dei {{count}} dokumentversjonane hennar vil bli planlagde.',
  /** Title for unschedule release dialog */
  'schedule-dialog.confirm-title': 'Planlegg utgivinga',
  /** Description for warning that the published schedule time is in the past */
  'schedule-dialog.publish-date-in-past-warning': 'Planlegg for eit framtidig tidspunkt og dato.',
  /** Label for date picker when scheduling a release */
  'schedule-dialog.select-publish-date-label': 'Planlegg på',

  /** Confirm button text for the schedule unpublish dialog */
  'schedule-unpublish-dialog.confirm': 'Planlegg avpublisering',
  /** Description for the schedule unpublish dialog */
  'schedule-unpublish-dialog.description': 'Vel når dette dokumentet skal avpubliserast.',
  /** Header for the schedule unpublish dialog */
  'schedule-unpublish-dialog.header': 'Planlegg utkast for avpublisering',

  /** Placeholder for search of documents in a release */
  'search-documents-placeholder': 'Søk i dokument',

  /** Text for when the release has no errors found */
  'summary.all-documents-errors-found': 'Alle dokument validerte, problem funne',
  /** Text for when the release has validated all documents */
  'summary.all-documents-validated': 'Alle dokument validerte, ingen problem funne',
  /** Text for when the release was created */
  'summary.created': 'Oppretta <RelativeTime/>',
  /** Text for when the release is composed of one document */
  'summary.document-count_one': '{{count}} dokument',
  /** Text for when the release is composed of multiple documents */
  'summary.document-count_other': '{{count}} dokument',
  /** Text for when the release has some errors found */
  'summary.errors-found':
    'For å publisere eller planleggje utgivinga, ver venleg og løys problema som er funne i dokumenta',
  /** Text for when the release has no documents */
  'summary.no-documents': 'Ingen dokument',
  /** Description for the empty state when a cardinality-one release has no documents */
  'summary.no-documents-cardinality-one.description':
    'Dette planlagde utkastet inneheld ikkje eit dokument. Det kan ha vorte fjerna.',
  /** Title for the empty state when a cardinality-one release has no documents */
  'summary.no-documents-cardinality-one.title': 'Ingen dokument i denne utgivinga',
  /** Text for when the release has not published */
  'summary.not-published': 'Ikkje publisert',
  /** Text for when the release was published */
  'summary.published': 'Publisert <RelativeTime/>',
  /** Text for when the release has validated documents */
  'summary.validated-documents': '{{validatedCount}} av {{totalCount}} dokument validerte',
  /** Text for validation loading indicator */
  'summary.validating-documents': 'Validerer dokument: {{validatedCount}} av {{totalCount}}',

  /** add action type that will be shown in the table*/
  'table-body.action.add': 'Legg til',
  /** Change action type that will be shown in the table*/
  'table-body.action.change': 'Endre',
  /** Change action type that will be shown in the table*/
  'table-body.action.unpublish': 'Avpubliser',

  /** Header for the document table in the release tool - action */
  'table-header.action': 'Handling',
  /** Header for the document table in the release tool - Archived */
  'table-header.archivedAt': 'Arkivert',
  /** Header for the document table in the release tool - contributors */
  'table-header.contributors': 'Bidragsytarar',
  /** Header for the document table in the release tool - created by */
  'table-header.created-by': 'Oppretta av',
  /** Header for the document table in the release tool - document preview */
  'table-header.document': 'Dokument',
  /** Header for the document table in the release tool - title */
  'table-header.documents': 'Dokument',
  /** Header for the document table in the release tool - edited */
  'table-header.edited': 'Redigert',
  /** Header for the paused scheduled drafts table - intended for */
  'table-header.intended-for': 'Tiltenkt for',
  /** Header for the document table in the release tool - Published */
  'table-header.published-at': 'Publisert',
  /** Header for the document table in the release tool - Published */
  'table-header.publishedAt': 'Publisert',
  /** Header for the scheduled drafts document table in the release tool - published at */
  'table-header.scheduled-draft.published-at': 'Publisert den',
  /** Header for the scheduled drafts document table in the release tool - scheduled for */
  'table-header.scheduled-for': 'Planlagt for',
  /** Header for the document table in the release tool - time */
  'table-header.time': 'Tid',
  /** Header for the  document table in the release tool - release title */
  'table-header.title': 'Release',
  /** Header for the document table in the release tool - type */
  'table-header.type': 'Type',
  /** Header for the document table in the release tool - when */
  'table-header.when': 'Når',

  /** Text for the release time label for scheduled releases  which has not been scheduled yet*/
  'time.estimated': 'Estimert',
  /** Text for the release time label for scheduled releases  which has been scheduled*/
  'time.scheduled': 'Planlagt',

  /** Text for toast when release failed to archive */
  'toast.archive.error': "Klarte ikkje å arkivere '<strong>{{title}}</strong>': {{error}}",
  /** Toast error message when bulk scheduling of active drafts fails */
  'toast.confirm-active-scheduled-drafts.error': 'Klarte ikkje å planlegge utkast: {{error}}',
  /** Toast message after copying release ID */
  'toast.copy-release-id.success': 'Release ID kopiert til utklippstavla',
  /** Toast message after copying release link */
  'toast.copy-release-link.success': 'Release-lenkje kopiert til utklippstavla',
  /** Toast message after copying release title */
  'toast.copy-release-title.success': 'Release-tittel kopiert til utklippstavla',
  /** Description for toast when creating new version of document in release failed */
  'toast.create-version.error': 'Klarte ikkje å leggje til dokument i release: {{error}}',
  /** Description for toast when release deletion failed */
  'toast.delete.error': "Klarte ikkje å slette '<strong>{{title}}</strong>': {{error}}",
  /** Description for toast when release is successfully deleted */
  'toast.delete.success': "Release '<strong>{{title}}</strong>' vart sletta",
  /** Description for toast when release duplication failed */
  'toast.duplicate.error': "Klarte ikkje å duplisere '<strong>{{title}}</strong>': {{error}}",
  /** Description for toast when release is successfully duplicated */
  'toast.duplicate.success': "Release '<strong>{{title}}</strong>' vart duplisert. <Link/>",
  /** Link text for toast link to the duplicated release */
  'toast.duplicate.success-link': 'Vis duplisert release',
  /** Text for toast when release has been reverted immediately */
  'toast.immediate-revert.success': "Release '{{title}}' vart tilbakestilt",
  /** Text for toast when release failed to publish */
  'toast.publish.error': "Klarte ikkje å publisere '<strong>{{title}}</strong>': {{error}}",
  /** Text for toast when release has reverted release successfully staged */
  'toast.revert-stage.success': "Tilbakestilling av release for '{{title}}' vart oppretta. <Link/>",
  /** Link text for toast link to the generated revert release */
  'toast.revert-stage.success-link': 'Vis tilbakestillings-release',
  /** Text for toast when release failed to revert */
  'toast.revert.error': 'Klarte ikkje å tilbakestille release: {{error}}',
  /** Text for toast when release failed to schedule */
  'toast.schedule.error': "Klarte ikkje å planleggje '<strong>{{title}}</strong>': {{error}}",
  /** Text for toast when release has been scheduled */
  'toast.schedule.success': "Release '<strong>{{title}}</strong>' vart planlagd.",
  /** Text for toast when release failed to unarchive */
  'toast.unarchive.error': "Klarte ikkje å avarkivere '<strong>{{title}}</strong>': {{error}}",
  /** Text for toast when release failed to unschedule */
  'toast.unschedule.error': "Klarte ikkje å avplanleggje '<strong>{{title}}</strong>': {{error}}",

  /** Text for tooltip when a release has been scheduled */
  'type-picker.tooltip.scheduled': 'Release er planlagd, avplanlegg han for å endre type',

  /** Text action in unpublish dialog to cancel */
  'unpublish-dialog.action.cancel': 'Avbryt',
  /** Text action in unpublish dialog to unpublish */
  'unpublish-dialog.action.unpublish': 'Ja, avpubliser ved utsending',
  /** Description for unpublish dialog, explaining that all changes made to this document will be lost */
  'unpublish-dialog.description.lost-changes':
    'Alle endringar som er gjort i denne dokumentversjonen vil gå tapt.',
  /** Description for the unpublish dialog, explaining that it will create a draft if no draft exists at time of release */
  'unpublish-dialog.description.to-draft':
    'Dette vil avpublisere dokumentet som ein del av <Label>{{title}}</Label>-release, og opprette eit utkast dersom det ikkje finst eit utkast på tidspunktet for utsendinga.',
  /** Title for the dialog confirming the unpublish of a release */
  'unpublish-dialog.header':
    'Er du sikker på at du vil avpublisere dette dokumentet ved utsending?',

  /** Text for when a document is unpublished */
  'unpublish.already-unpublished': 'Dette dokumentet er allereie avpublisert.',
  /** Tooltip label for when a document is unpublished */
  'unpublish.no-published-version': 'Det finst ingen publisert versjon av dette dokumentet.',

  /** Description shown in unschedule relaease dialog */
  'unschedule-dialog.confirm-description':
    'Utgivinga vil ikkje lenger bli publisert på den planlagde datoen',
  /** Title for unschedule release dialog */
  'unschedule-dialog.confirm-title': 'Er du sikker på at du vil avplanlegge utgivinga?',
})
