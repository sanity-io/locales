import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Action text for adding a document to release */
  'action.add-document': 'Legg til dokument',
  /** Action text for archiving a release */
  'action.archive': 'Arkiver release',
  /** Tooltip for when the archive release action is disabled due to release being scheduled  */
  'action.archive.tooltip': 'Avplanlegg denne releasen for å arkivere den',
  /** Action text for showing the archived releases */
  'action.archived': 'Arkivert',
  /** Menu item label for copying release ID */
  'action.copy-release-id.label': 'Kopier release-ID',
  /** Menu item label for copying release URL */
  'action.copy-release-link.label': 'Kopier release-URL',
  /** Menu item label for copying release title */
  'action.copy-release-title.label': 'Kopier release-tittel',
  /** Tooltip for copy release actions button */
  'action.copy-release.label': 'Kopier',
  /** Action text for staging a new revert release */
  'action.create-revert-release': 'Opprett en ny release',
  /** Action text for deleting a release */
  'action.delete-release': 'Slett release',
  /** Menu item label for showing scheduled drafts */
  'action.drafts': 'Planlagte utkast',
  /** Action text for duplicating a release */
  'action.duplicate-release': 'Dupliser release',
  /** Action text for editing a release */
  'action.edit': 'Rediger release',
  /** Action text for reverting a release immediately without staging changes */
  'action.immediate-revert-release': 'Tilbakestill nå',
  /** Action text for opening a release */
  'action.open': 'Aktiv',
  /** Action text for showing the paused scheduled drafts */
  'action.paused': 'Pauset',
  /** Action text for publishing all documents in a release (and the release itself) */
  'action.publish-all-documents': 'Kjør release',
  /** Menu item label for showing releases (multi-document releases) */
  'action.releases': 'Releases',
  /** Action text for reverting a release */
  'action.revert': 'Tilbakestill release',
  /** Action message for when document is scheduled for unpublishing a document and you want to no longer unpublish it */
  'action.revert-unpublish-actions': 'Tilbakestill avpublisering ved release',
  /** Text for the review changes button in release tool */
  'action.review': 'Se gjennom endringer',
  /** Action text for scheduling a release */
  'action.schedule': 'Planlegg release...',
  /** Action text for scheduling unpublish of a draft document */
  'action.schedule-unpublish': 'Planlegg avpublisering',
  /** Tooltip text for when schedule unpublish is disabled because document is not published */
  'action.schedule-unpublish.disabled.not-published':
    'Dokumentet må være publisert for å planlegge avpublisering',
  /** Label for unarchiving a release */
  'action.unarchive': 'Gjenopprett release fra arkiv',
  /** Action text for unpublishing a document in a release in the context menu */
  'action.unpublish': 'Avpubliser',
  /** Action message for scheduling an unpublished of a document  */
  'action.unpublish-doc-actions': 'Avpubliser ved utsending',
  /** Action text for unscheduling a release */
  'action.unschedule': 'Avplanlegg utsending',

  /** Text for the summary button in release tool */
  'actions.summary': 'Sammendrag',

  /* The text for the activity event when a document is added to a release */
  'activity.event.add-document': 'La til en dokumentversjon',
  /* The text for the activity event when the release is archived */
  'activity.event.archive': 'Arkiverte <strong>{{releaseTitle}}</strong>-utsendingen',
  /* The text for the activity event when the release is created */
  'activity.event.create':
    'Opprettet <strong>{{releaseTitle}}</strong>-utsendingen <ScheduleTarget>med mål </ScheduleTarget>',
  /* The text for the activity event when a document is removed from a release */
  'activity.event.discard-document': 'Forkastet en dokumentversjon',
  'activity.event.edit': 'Satte utsendingstidspunkt til <ScheduleTarget></ScheduleTarget>',
  /**The text to display in the changes when the release type changes to asap */
  'activity.event.edit-time-asap': 'Så snart som mulig',
  /**The text to display in the changes when the release type changes to undecided */
  'activity.event.edit-time-undecided': 'Ubestemt',
  /* The text for the activity event when the release is published */
  'activity.event.publish': 'Publiserte <strong>{{releaseTitle}}</strong>-utsendingen',
  /* The text for the activity event when the release is scheduled */
  'activity.event.schedule': 'Merket som planlagt',
  /** The text for the activity event when the release is unarchived */
  'activity.event.unarchive':
    'Gjenopprettet <strong>{{releaseTitle}}</strong>-utsendingen fra arkivet',
  /** The text for the activity event when the release is unscheduled */
  'activity.event.unschedule': 'Merket som ikke planlagt',
  /** The loading text for when releases are loading */
  'activity.panel.error': 'Det oppstod en feil ved henting av utsendingsaktivitet',
  /** The loading text for when releases are loading */
  'activity.panel.loading': 'Laster utsendingsaktivitet',
  /** The title for the activity panel shown in the releases detail screen */
  'activity.panel.title': 'Aktivitet',

  /** Label for the button to proceed with archiving a release */
  'archive-dialog.confirm-archive-button': 'Ja, arkiver utsendingen',
  /** Description for the dialog confirming the archive of a release with one document */
  'archive-dialog.confirm-archive-description_one': 'Dette vil arkivere 1 dokumentversjon.',
  /** Description for the dialog confirming the archive of a release with more than one document */
  'archive-dialog.confirm-archive-description_other':
    'Dette vil arkivere {{count}} dokumentversjoner.',
  /** Header for the dialog confirming the archive of a release */
  'archive-dialog.confirm-archive-header': 'Er du sikker på at du vil arkivere denne utsendingen?',
  /** Title for the dialog confirming the archive of a release */
  'archive-dialog.confirm-archive-title':
    "Er du sikker på at du vil arkivere <strong>'{{title}}'</strong>-utsendingen?",

  /** Description for information card on a published or archived release to description retention effects */
  'archive-info.description':
    'Den vil være tilgjengelig i {{retentionDays}} dager, og fjernes automatisk den {{removalDate}}. <Link>Les om oppbevaring</Link>.',
  /** Title for information card on a archived release */
  'archive-info.title': 'Denne utsendingen er arkivert',

  /** Banner text showing count of active scheduled drafts requiring confirmation with one draft */
  'banner.confirm-active-scheduled-drafts_one':
    'Det er {{count}} Scheduled Draft som krever bekreftelse for planlegging',
  /** Banner text showing count of active scheduled drafts requiring confirmation with multiple drafts */
  'banner.confirm-active-scheduled-drafts_other':
    'Det er {{count}} Scheduled Drafts som krever bekreftelse for planlegging',
  /** Button text for confirming scheduling of active drafts */
  'banner.confirm-active-scheduled-drafts.button': 'Gjenoppta planlegging',
  /** Button text when confirming schedules from paused mode */
  'banner.confirm-active-scheduled-drafts.button-paused': 'Gjenoppta alle planer',
  /** Banner text shown when drafts mode is disabled but there are still scheduled drafts */
  'banner.drafts-mode-disabled':
    'Utkastmodus er deaktivert, men det finnes fortsatt planlagte utkast som skal publiseres.',
  /** Banner text shown when navigating to a release that does not exist */
  'banner.release-not-found': 'Denne utgivelsen ble ikke funnet',
  /** Tooltip for the dismiss button in the release not found banner */
  'banner.release-not-found.dismiss': 'Lukk',
  /** Banner text shown when scheduled drafts feature is disabled but there are still scheduled drafts */
  'banner.scheduled-drafts-disabled':
    'Scheduled drafts er deaktivert, men det finnes fortsatt planlagte utkast som skal publiseres.',

  /** Title for changes to published documents */
  'changes-published-docs.title': 'Endringer i publiserte dokumenter',

  /** Dialog confirm button text for confirming all scheduled drafts */
  'confirm-active-scheduled-drafts-dialog.confirm-button': 'Bekreft planer',
  /** Dialog description for confirming active scheduled drafts */
  'confirm-active-scheduled-drafts-dialog.description':
    'Planlegg alle pausede Scheduled Drafts for deres tiltenkte publiseringsdatoer',
  /** Dialog warning when some scheduled drafts have past dates */
  'confirm-active-scheduled-drafts-dialog.past-dates-warning':
    'Noen av disse Scheduled Drafts er planlagt for tidligere datoer. Å bekrefte planene vil umiddelbart publisere disse versjonene av dokumentene.',
  /** Dialog title for confirming active scheduled drafts */
  'confirm-active-scheduled-drafts-dialog.title': 'Gjenoppta Scheduled Drafts',

  /** Suffix for when a release is a copy of another release */
  'copy-suffix': 'Kopi',

  /** Confirm button text for overriding existing draft */
  'copy-to-draft-dialog.confirm-button': 'Ja, overstyr utkast',
  /** Description for dialog when copying version to draft that already exists */
  'copy-to-draft-dialog.description':
    'Det finnes allerede en utkastversjon av dette dokumentet. Kopier gjeldende versjon til utkastet og overskriv den eksisterende utkastversjonen.',
  /** Title for dialog when copying version to draft that already exists */
  'copy-to-draft-dialog.title': 'Utkastversjon finnes allerede',

  /** Text for when a release / document was created */
  created: 'Opprettet <RelativeTime/>',

  /** Activity inspector button text */
  'dashboard.details.activity': 'Aktivitet',
  /** Text for the releases detail screen in the pin release button. */
  'dashboard.details.pin-release': 'Fest utgivelse til studio',
  /** Text for the releases detail screen when a release was published ASAP */
  'dashboard.details.published-asap': 'Publisert',
  /** Text for the releases detail screen when a release was published from scheduling */
  'dashboard.details.published-on': 'Publisert den {{date}}',
  /** Text for the releases detail screen in the unpin release button. */
  'dashboard.details.unpin-release': 'Løsne utgivelse fra studio',

  /** Label for the button to proceed deleting a release */
  'delete-dialog.confirm-delete-button': 'Ja, slett utgivelse',
  /** Description for the dialog confirming the deleting of a release with one document */
  'delete-dialog.confirm-delete-description_one': 'Dette vil slette 1 dokumentversjon.',
  /** Description for the dialog confirming the deleting of a release with more than one document */
  'delete-dialog.confirm-delete-description_other': 'Dette vil slette {{count}} dokumentversjoner.',
  /** Header for deleting a release dialog */
  'delete-dialog.confirm-delete.header': 'Er du sikker på at du vil slette denne utgivelsen?',

  /** Label when a release has been deleted by a different user */
  'deleted-release': "'<strong>{{title}}</strong>'-utgivelsen har blitt slettet",

  /** Text for when there's no changes in a release diff */
  'diff.list-empty': 'Endringslisten er tom, se dokument',
  /** Text for when there's no changes in a release diff */
  'diff.no-changes': 'Ingen endringer',

  /** Description for discarding a draft of a document dialog */
  'discard-version-dialog.description-draft':
    'Dette vil permanent fjerne alle endringer gjort i dette dokumentet. Denne handlingen kan ikke angres.',
  /** Description for discarding a version of a document dialog */
  'discard-version-dialog.description-release':
    "Dette vil permanent fjerne alle endringer gjort i dette dokumentet innenfor '<strong>{{releaseTitle}}</strong>'-utgivelsen. Denne handlingen kan ikke angres.",
  /** Title for dialog for discarding a draft of a document */
  'discard-version-dialog.header-draft': 'Forkast utkast?',
  /** Header for discarding a version from a release of a document dialog */
  'discard-version-dialog.header-release':
    "Fjerne dokumentet fra '<strong>{{releaseTitle}}</strong>'-utgivelsen?",
  /** Title for dialog for discarding a draft of a document */
  'discard-version-dialog.title-draft': 'Forkast utkast',
  /** Title for dialog for discarding a version of a document */
  'discard-version-dialog.title-release': 'Fjern fra utgivelse',

  /** Label for when a document in a release has a single validation warning */
  'document-validation.error_one': '{{count}} valideringsfeil',
  /** Label for when a document in a release has multiple validation warnings */
  'document-validation.error_other': '{{count}} valideringsfeil',

  /** Label for the button to proceed with duplicating a release */
  'duplicate-dialog.confirm-duplicate-button': 'Ja, dupliser utgivelse',
  /** Description for the dialog confirming the duplicate of a release with one document */
  'duplicate-dialog.confirm-duplicate-description_one':
    'Dette vil duplisere utgivelsen og 1 dokumentversjon.',
  /** Description for the dialog confirming the duplicate of a release with more than one document */
  'duplicate-dialog.confirm-duplicate-description_other':
    'Dette vil duplisere utgivelsen og {{count}} dokumentversjoner.',
  /** Header for the dialog confirming the duplicate of a release */
  'duplicate-dialog.confirm-duplicate-header':
    'Er du sikker på at du vil duplisere denne utgivelsen?',

  /** Title text displayed for technical error details */
  'error-details-title': 'Feildetaljer',

  /** Title text when error during release update */
  'failed-edit-title': 'Kunne ikke lagre endringer',

  /** Title text displayed for releases that failed to publish  */
  'failed-publish-title': 'Kunne ikke publisere',

  /** Title text displayed for releases that failed to schedule  */
  'failed-schedule-title': 'Kunne ikke planlegge',

  /** Filter tab label for all documents */
  'filter-tab.all': 'Alle',
  /** Filter tab label for documents with validation errors */
  'filter-tab.errors': 'Feil',

  /**The text that will be shown in the footer to indicate the time the release was archived */
  'footer.status.archived': 'Arkivert',
  /**The text that will be shown in the footer to indicate the time the release was created */
  'footer.status.created': 'Opprettet',
  /**The text that will be shown in the footer to indicate the time the release was created */
  'footer.status.edited': 'Redigert',
  /**The text that will be shown in the footer to indicate the time the release was published */
  'footer.status.published': 'Publisert',
  /**The text that will be shown in the footer to indicate the time the release was unarchived */
  'footer.status.unarchived': 'Avarkivert',

  /** Label text for the loading state whilst release is being loaded */
  'loading-release': 'Laster utgivelse',

  /** Text for when documents of a release are loading */
  'loading-release-documents': 'Laster dokumenter',
  /** Description text for when loading documents on a release failed */
  'loading-release-documents.error.description':
    'Vi kan ikke laste dokumentene for denne utgivelsen. Vennligst prøv igjen senere.',
  /** Title text for when loading documents on a release failed */
  'loading-release-documents.error.title': 'Noe gikk galt',

  /** Label for title of actions for "when releasing" */
  'menu.group.when-releasing': 'Ved utgivelse',
  /** Label for the release menu */
  'menu.label': 'Utgivelsesmeny',
  /** Tooltip for the release menu */
  'menu.tooltip': 'Handlinger',

  /** Text for when no archived releases are found */
  'no-archived-release': 'Ingen arkiverte utgivelser',

  /** Tooltip text when there are no paused scheduled drafts */
  'no-paused-release': 'Ingen pausede planlagte utkast',

  /** Text for when no releases are found */
  'no-releases': 'Ingen utgivelser',

  /** Text for when no scheduled drafts are found */
  'no-scheduled-drafts': 'Ingen planlagte utkast',

  /** Text for the button name for the release tool */
  'overview.action.documentation': 'Dokumentasjon',
  /** Tooltip for the calendar button in the release overview */
  'overview.calendar.tooltip': 'Vis kalender',
  /** Description for the release tool */
  'overview.description':
    'Utgivelser er samlinger av dokumentendringer som kan administreres, planlegges og rulles tilbake sammen.',
  /** Text for the placeholder in the search release input  */
  'overview.search-releases-placeholder': 'Søk i utgivelser',
  /** Title for the release tool */
  'overview.title': 'Utgivelser',

  /** Tooltip text for releases that have passed their intended publish date */
  'passed-intended-publish-date': 'Denne utgivelsen har passert den tiltenkte publiseringsdatoen',

  /** Tooltip text for scheduled drafts that have passed their intended publish date */
  'passed-intended-publish-date-draft':
    'Dette utkastet har passert den tiltenkte publiseringsdatoen',

  /** Description for when a user doesn't have publish or schedule releases */
  'permission-missing-description':
    'Din rolle begrenser for øyeblikket hva du kan se i denne utgivelsen. Du kan verken publisere eller planlegge denne utgivelsen.',

  /** Text for when a user doesn't have publish or schedule releases */
  'permission-missing-title': 'Begrenset tilgang',

  /** Tooltip label when the user doesn't have permission to archive release */
  'permissions.error.archive': 'Du har ikke tillatelse til å arkivere denne utgivelsen',
  /** Tooltip label when the user doesn't have permission to delete release */
  'permissions.error.delete': 'Du har ikke tillatelse til å slette denne utgivelsen',
  /** Tooltip label when the user doesn't have permission for discarding a version */
  'permissions.error.discard-version': 'Du har ikke tillatelse til å forkaste denne versjonen',
  /** Tooltip label when the user doesn't have permission to duplicate release */
  'permissions.error.duplicate': 'Du har ikke tillatelse til å duplisere denne release',
  /** Tooltip label when the user doesn't have permission to unarchive release */
  'permissions.error.unarchive':
    'Du har ikke tillatelse til å gjenopprette denne release fra arkiv',
  /** Tooltip label when the user doesn't have permission for unpublishing a document */
  'permissions.error.unpublish': 'Du har ikke tillatelse til å avpublisere dette dokumentet',

  /** Tooltip text for when one user is editing a document in a release */
  'presence.tooltip.one':
    '{{displayName}} redigerer dette dokumentet i release-en «{{releaseTitle}}» akkurat nå',

  /** Tooltip text for publish release action when there are no documents */
  'publish-action.validation.no-documents': 'Det er ingen dokumenter å publisere',

  /** Description for the dialog confirming the publish of a release with one document */
  'publish-dialog.confirm-publish-description_one':
    "Release-en '<strong>{{title}}</strong>' og dokumentet vil bli publisert.",
  /** Description for the dialog confirming the publish of a release with multiple documents */
  'publish-dialog.confirm-publish-description_other':
    "Release-en '<strong>{{title}}</strong>' og dens {{releaseDocumentsLength}} dokumenter vil bli publisert.",
  /** Title for the dialog confirming the publish of a release */
  'publish-dialog.confirm-publish.title':
    'Er du sikker på at du vil publisere release-en og alle dokumentversjoner?',
  /** Label for when documents in release have validation errors */
  'publish-dialog.validation.error': 'Noen dokumenter har valideringsfeil',
  /** Label for when documents are being validated */
  'publish-dialog.validation.loading': 'Validerer dokumenter...',
  /** Label for the button when the user doesn't have permissions to publish a release */
  'publish-dialog.validation.no-permission': 'Du har ikke tillatelse til å publisere',

  /** Title for information card on a published release */
  'publish-info.title': 'Denne release-en er publisert.',

  /** Placeholder title for a release with no title */
  'release-placeholder.title': 'Uten tittel',

  /** Description for the dialog confirming the revert of a release with multiple documents */
  'revert-dialog.confirm-revert-description_one':
    'Dette vil tilbakestille {{releaseDocumentsLength}} dokumentversjon.',
  /** Description for the dialog confirming the revert of a release with multiple documents */
  'revert-dialog.confirm-revert-description_other':
    'Dette vil tilbakestille {{releaseDocumentsLength}} dokumentversjoner.',
  /** Checkbox label to confirm whether to create a staged release for revert or immediately revert */
  'revert-dialog.confirm-revert.stage-revert-checkbox-label': 'Tilbakestill release-en umiddelbart',
  /** Title for the dialog confirming the revert of a release */
  'revert-dialog.confirm-revert.title':
    'Er du sikker på at du vil tilbakestille release-en «{{title}}»?',
  /** Warning card text for when immediately revert a release with history */
  'revert-dialog.confirm-revert.warning-card':
    'Det ble gjort endringer i dokumenter i denne release-en etter at de ble publisert. Tilbakestilling vil overskrive disse endringene.',

  /** Description of a reverted release */
  'revert-release.description': 'Tilbakestill endringer i dokumentversjoner i «{{title}}».',
  /** Title of a reverted release */
  'revert-release.title': 'Tilbakestiller «{{title}}»',

  /** Description for the review changes button in release tool */
  'review.description': 'Legg til dokumenter i denne release-en for å gjennomgå endringer',
  /** Text for when a document is edited */
  'review.edited': 'Redigert <RelativeTime/>',

  /** Schedule release button tooltip when there are no documents to schedule */
  'schedule-action.validation.no-documents': 'Det er ingen dokumenter å planlegge',

  /** Schedule release button tooltip when the release is already scheduled */
  'schedule-button-tooltip.already-scheduled': 'Denne release-en er allerede planlagt',
  /** Schedule release button tooltip when there are validation errors */
  'schedule-button-tooltip.validation.error': 'Noen dokumenter har valideringsfeil',
  /** Schedule release button tooltip when validation is loading */
  'schedule-button-tooltip.validation.loading': 'Validerer dokumenter...',
  /** Schedule release button tooltip when user has no permissions to schedule */
  'schedule-button-tooltip.validation.no-permission': 'Du har ikke tillatelse til å planlegge',

  /** Title of unschedule release dialog */
  'schedule-button.tooltip': 'Er du sikker på at du vil avplanlegge utgivelsen?',

  /** Description for the confirm button for scheduling a release */
  'schedule-dialog.confirm-button': 'Ja, planlegg',
  /** Description shown in unschedule relaease dialog */
  'schedule-dialog.confirm-description_one':
    "Utgivelsen '<strong>{{title}}</strong>' og dokumentet vil bli publisert på valgt dato.",
  /** Description for the dialog confirming the publish of a release with multiple documents */
  'schedule-dialog.confirm-description_other':
    'Utgivelsen <strong>{{title}}</strong> og dens {{count}} dokumentversjoner vil bli planlagt.',
  /** Title for unschedule release dialog */
  'schedule-dialog.confirm-title': 'Planlegg utgivelsen',
  /** Description for warning that the published schedule time is in the past */
  'schedule-dialog.publish-date-in-past-warning': 'Planlegg for et fremtidig tidspunkt og dato.',
  /** Label for date picker when scheduling a release */
  'schedule-dialog.select-publish-date-label': 'Planlegg på',

  /** Confirm button text for the schedule unpublish dialog */
  'schedule-unpublish-dialog.confirm': 'Planlegg avpublisering',
  /** Description for the schedule unpublish dialog */
  'schedule-unpublish-dialog.description': 'Velg når dette dokumentet skal avpubliseres.',
  /** Header for the schedule unpublish dialog */
  'schedule-unpublish-dialog.header': 'Planlegg utkast for avpublisering',

  /** Placeholder for search of documents in a release */
  'search-documents-placeholder': 'Søk i dokumenter',

  /** Text for when the release has no errors found */
  'summary.all-documents-errors-found': 'Alle dokumenter validert, problemer funnet',
  /** Text for when the release has validated all documents */
  'summary.all-documents-validated': 'Alle dokumenter validert, ingen problemer funnet',
  /** Text for when the release was created */
  'summary.created': 'Opprettet <RelativeTime/>',
  /** Text for when the release is composed of one document */
  'summary.document-count_one': '{{count}} dokument',
  /** Text for when the release is composed of multiple documents */
  'summary.document-count_other': '{{count}} dokumenter',
  /** Text for when the release has some errors found */
  'summary.errors-found':
    'For å publisere eller planlegge utgivelsen, vennligst løs problemene som er funnet i dokumentene',
  /** Text for when the release has no documents */
  'summary.no-documents': 'Ingen dokumenter',
  /** Description for the empty state when a cardinality-one release has no documents */
  'summary.no-documents-cardinality-one.description':
    'Dette planlagte utkastet inneholder ikke et dokument. Det kan ha blitt fjernet.',
  /** Title for the empty state when a cardinality-one release has no documents */
  'summary.no-documents-cardinality-one.title': 'Ingen dokument i denne utgivelsen',
  /** Text for when the release has not published */
  'summary.not-published': 'Ikke publisert',
  /** Text for when the release was published */
  'summary.published': 'Publisert <RelativeTime/>',
  /** Text for when the release has validated documents */
  'summary.validated-documents': '{{validatedCount}} av {{totalCount}} dokumenter validert',
  /** Text for validation loading indicator */
  'summary.validating-documents': 'Validerer dokumenter: {{validatedCount}} av {{totalCount}}',

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
  'table-header.contributors': 'Bidragsytere',
  /** Header for the document table in the release tool - created by */
  'table-header.created-by': 'Opprettet av',
  /** Header for the document table in the release tool - document preview */
  'table-header.document': 'Dokument',
  /** Header for the document table in the release tool - title */
  'table-header.documents': 'Dokumenter',
  /** Header for the document table in the release tool - edited */
  'table-header.edited': 'Redigert',
  /** Header for the paused scheduled drafts table - intended for */
  'table-header.intended-for': 'Beregnet for',
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
  'toast.archive.error': "Kunne ikke arkivere '<strong>{{title}}</strong>': {{error}}",
  /** Toast error message when bulk scheduling of active drafts fails */
  'toast.confirm-active-scheduled-drafts.error': 'Kunne ikke planlegge utkast: {{error}}',
  /** Toast message after copying release ID */
  'toast.copy-release-id.success': 'Release-ID kopiert til utklippstavlen',
  /** Toast message after copying release link */
  'toast.copy-release-link.success': 'Release-lenke kopiert til utklippstavlen',
  /** Toast message after copying release title */
  'toast.copy-release-title.success': 'Release-tittel kopiert til utklippstavlen',
  /** Description for toast when creating new version of document in release failed */
  'toast.create-version.error': 'Kunne ikke legge til dokument i release: {{error}}',
  /** Description for toast when release deletion failed */
  'toast.delete.error': "Kunne ikke slette '<strong>{{title}}</strong>': {{error}}",
  /** Description for toast when release is successfully deleted */
  'toast.delete.success': "Release '<strong>{{title}}</strong>' ble slettet",
  /** Description for toast when release duplication failed */
  'toast.duplicate.error': "Kunne ikke duplisere '<strong>{{title}}</strong>': {{error}}",
  /** Description for toast when release is successfully duplicated */
  'toast.duplicate.success': "Release '<strong>{{title}}</strong>' ble duplisert. <Link/>",
  /** Link text for toast link to the duplicated release */
  'toast.duplicate.success-link': 'Vis duplisert release',
  /** Text for toast when release has been reverted immediately */
  'toast.immediate-revert.success': "Release '{{title}}' ble tilbakestilt",
  /** Text for toast when release failed to publish */
  'toast.publish.error': "Kunne ikke publisere '<strong>{{title}}</strong>': {{error}}",
  /** Text for toast when release has reverted release successfully staged */
  'toast.revert-stage.success': "Tilbakestilling av release for '{{title}}' ble opprettet. <Link/>",
  /** Link text for toast link to the generated revert release */
  'toast.revert-stage.success-link': 'Vis tilbakestilt release',
  /** Text for toast when release failed to revert */
  'toast.revert.error': 'Kunne ikke tilbakestille release: {{error}}',
  /** Text for toast when release failed to schedule */
  'toast.schedule.error': "Kunne ikke planlegge '<strong>{{title}}</strong>': {{error}}",
  /** Text for toast when release has been scheduled */
  'toast.schedule.success': "Release '<strong>{{title}}</strong>' ble planlagt.",
  /** Text for toast when release failed to unarchive */
  'toast.unarchive.error':
    "Kunne ikke gjenopprette '<strong>{{title}}</strong>' fra arkiv: {{error}}",
  /** Text for toast when release failed to unschedule */
  'toast.unschedule.error': "Kunne ikke avplanlegge '<strong>{{title}}</strong>': {{error}}",

  /** Text for tooltip when a release has been scheduled */
  'type-picker.tooltip.scheduled': 'Releasen er planlagt – avplanlegg den for å endre type',

  /** Text action in unpublish dialog to cancel */
  'unpublish-dialog.action.cancel': 'Avbryt',
  /** Text action in unpublish dialog to unpublish */
  'unpublish-dialog.action.unpublish': 'Ja, avpubliser ved utsending',
  /** Description for unpublish dialog, explaining that all changes made to this document will be lost */
  'unpublish-dialog.description.lost-changes':
    'Alle endringer gjort i denne dokumentversjonen vil gå tapt.',
  /** Description for the unpublish dialog, explaining that it will create a draft if no draft exists at time of release */
  'unpublish-dialog.description.to-draft':
    'Dette vil avpublisere dokumentet som en del av <Label>{{title}}</Label>-releasen, og opprette et utkast hvis det ikke finnes et utkast på tidspunktet for utsendingen.',
  /** Title for the dialog confirming the unpublish of a release */
  'unpublish-dialog.header':
    'Er du sikker på at du vil avpublisere dette dokumentet ved utsending?',

  /** Text for when a document is unpublished */
  'unpublish.already-unpublished': 'Dette dokumentet er allerede avpublisert.',
  /** Tooltip label for when a document is unpublished */
  'unpublish.no-published-version': 'Det finnes ingen publisert versjon av dette dokumentet.',

  /** Description shown in unschedule relaease dialog */
  'unschedule-dialog.confirm-description':
    'Utgivelsen vil ikke lenger bli publisert på den planlagte datoen',
  /** Title for unschedule release dialog */
  'unschedule-dialog.confirm-title': 'Er du sikker på at du vil avplanlegge utgivelsen?',
})
