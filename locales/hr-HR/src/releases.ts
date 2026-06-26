import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Action text for adding a document to release */
  'action.add-document': 'Dodaj dokument',
  /** Action text for archiving a release */
  'action.archive': 'Arhiviraj izdanje',
  /** Tooltip for when the archive release action is disabled due to release being scheduled  */
  'action.archive.tooltip': 'Poništite zakazivanje ovog izdanja kako biste ga arhivirali',
  /** Action text for showing the archived releases */
  'action.archived': 'Arhivirano',
  /** Menu item label for copying release ID */
  'action.copy-release-id.label': 'Kopiraj ID izdanja',
  /** Menu item label for copying release URL */
  'action.copy-release-link.label': 'Kopiraj URL izdanja',
  /** Menu item label for copying release title */
  'action.copy-release-title.label': 'Kopiraj naslov izdanja',
  /** Tooltip for copy release actions button */
  'action.copy-release.label': 'Kopiraj',
  /** Action text for staging a new revert release */
  'action.create-revert-release': 'Stvori novo izdanje',
  /** Action text for deleting a release */
  'action.delete-release': 'Izbriši izdanje',
  /** Menu item label for showing scheduled drafts */
  'action.drafts': 'Zakazane skice',
  /** Action text for duplicating a release */
  'action.duplicate-release': 'Dupliciraj izdanje',
  /** Action text for editing a release */
  'action.edit': 'Uredi izdanje',
  /** Action text for reverting a release immediately without staging changes */
  'action.immediate-revert-release': 'Vrati odmah',
  /** Action text for opening a release */
  'action.open': 'Aktivno',
  /** Action text for showing the paused scheduled drafts */
  'action.paused': 'Pauzirano',
  /** Action text for publishing all documents in a release (and the release itself) */
  'action.publish-all-documents': 'Pokreni izdanje',
  /** Menu item label for showing releases (multi-document releases) */
  'action.releases': 'Izdanja',
  /** Action text for reverting a release */
  'action.revert': 'Vrati izdanje',
  /** Action message for when document is scheduled for unpublishing a document and you want to no longer unpublish it */
  'action.revert-unpublish-actions': 'Vrati poništavanje objave pri izdavanju',
  /** Text for the review changes button in release tool */
  'action.review': 'Pregledaj promjene',
  /** Action text for scheduling a release */
  'action.schedule': 'Zakaži izdanje...',
  /** Action text for scheduling unpublish of a draft document */
  'action.schedule-unpublish': 'Zakaži poništavanje objave',
  /** Tooltip text for when schedule unpublish is disabled because document is not published */
  'action.schedule-unpublish.disabled.not-published':
    'Dokument mora biti objavljen kako bi se moglo zakazati poništavanje objave',
  /** Label for unarchiving a release */
  'action.unarchive': 'Vrati izdanje iz arhive',
  /** Action text for unpublishing a document in a release in the context menu */
  'action.unpublish': 'Poništi objavu',
  /** Action message for scheduling an unpublished of a document  */
  'action.unpublish-doc-actions': 'Poništi objavu pri izdavanju',
  /** Action text for unscheduling a release */
  'action.unschedule': 'Otkaži zakazivanje izdanja',

  /** Text for the summary button in release tool */
  'actions.summary': 'Sažetak',

  /* The text for the activity event when a document is added to a release */
  'activity.event.add-document': 'Dodana verzija dokumenta',
  /* The text for the activity event when the release is archived */
  'activity.event.archive': 'Arhivirano izdanje <strong>{{releaseTitle}}</strong>',
  /* The text for the activity event when the release is created */
  'activity.event.create':
    'Stvoreno izdanje <strong>{{releaseTitle}}</strong> <ScheduleTarget>s ciljanim </ScheduleTarget>',
  /* The text for the activity event when a document is removed from a release */
  'activity.event.discard-document': 'Odbačena verzija dokumenta',
  'activity.event.edit': 'Postavljeno vrijeme izdanja na <ScheduleTarget></ScheduleTarget>',
  /**The text to display in the changes when the release type changes to asap */
  'activity.event.edit-time-asap': 'Što je prije moguće',
  /**The text to display in the changes when the release type changes to undecided */
  'activity.event.edit-time-undecided': 'Neodlučeno',
  /* The text for the activity event when the release is published */
  'activity.event.publish': 'Objavljeno izdanje <strong>{{releaseTitle}}</strong>',
  /* The text for the activity event when the release is scheduled */
  'activity.event.schedule': 'Označeno kao zakazano',
  /** The text for the activity event when the release is unarchived */
  'activity.event.unarchive': 'Razarhivirano izdanje <strong>{{releaseTitle}}</strong>',
  /** The text for the activity event when the release is unscheduled */
  'activity.event.unschedule': 'Označeno kao nezakazano',
  /** The loading text for when releases are loading */
  'activity.panel.error': 'Došlo je do pogreške pri dohvaćanju aktivnosti izdanja',
  /** The loading text for when releases are loading */
  'activity.panel.loading': 'Učitavanje aktivnosti izdanja',
  /** The title for the activity panel shown in the releases detail screen */
  'activity.panel.title': 'Aktivnost',

  /** Label for the button to proceed with archiving a release */
  'archive-dialog.confirm-archive-button': 'Da, arhiviraj izdanje',
  /** Description for the dialog confirming the archive of a release with one document */
  'archive-dialog.confirm-archive-description_one': 'Ovo će arhivirati 1 verziju dokumenta.',
  /** Description for the dialog confirming the archive of a release with more than one document */
  'archive-dialog.confirm-archive-description_other':
    'Ovo će arhivirati {{count}} verzija dokumenta.',
  /** Header for the dialog confirming the archive of a release */
  'archive-dialog.confirm-archive-header': 'Jeste li sigurni da želite arhivirati ovo izdanje?',
  /** Title for the dialog confirming the archive of a release */
  'archive-dialog.confirm-archive-title':
    "Jeste li sigurni da želite arhivirati izdanje <strong>'{{title}}'</strong>?",

  /** Description for information card on a published or archived release to description retention effects */
  'archive-info.description':
    'Bit će dostupno {{retentionDays}} dana, a zatim automatski uklonjeno {{removalDate}}. <Link>Saznajte više o zadržavanju</Link>.',
  /** Title for information card on a archived release */
  'archive-info.title': 'Ovo izdanje je arhivirano',

  /** Banner text showing count of active scheduled drafts requiring confirmation with one draft */
  'banner.confirm-active-scheduled-drafts_one':
    'Postoji {{count}} Scheduled Draft koji zahtijeva potvrdu raspoređivanja',
  /** Banner text showing count of active scheduled drafts requiring confirmation with multiple drafts */
  'banner.confirm-active-scheduled-drafts_other':
    'Postoji {{count}} Scheduled Drafts koji zahtijevaju potvrdu raspoređivanja',
  /** Button text for confirming scheduling of active drafts */
  'banner.confirm-active-scheduled-drafts.button': 'Nastavi raspoređivanje',
  /** Button text when confirming schedules from paused mode */
  'banner.confirm-active-scheduled-drafts.button-paused': 'Nastavi sve rasporede',
  /** Banner text shown when drafts mode is disabled but there are still scheduled drafts */
  'banner.drafts-mode-disabled':
    'Način rada s nacrtima je onemogućen, ali još uvijek postoje zakazani nacrti za objavu.',
  /** Banner text shown when navigating to a release that does not exist */
  'banner.release-not-found': 'Ovo izdanje nije pronađeno',
  /** Tooltip for the dismiss button in the release not found banner */
  'banner.release-not-found.dismiss': 'Odbaci',
  /** Banner text shown when scheduled drafts feature is disabled but there are still scheduled drafts */
  'banner.scheduled-drafts-disabled':
    'Scheduled drafts je onemogućen, ali još uvijek postoje zakazani nacrti za objavu.',

  /** Title for changes to published documents */
  'changes-published-docs.title': 'Promjene objavljenih dokumenata',

  /** Dialog confirm button text for confirming all scheduled drafts */
  'confirm-active-scheduled-drafts-dialog.confirm-button': 'Potvrdi rasporede',
  /** Dialog description for confirming active scheduled drafts */
  'confirm-active-scheduled-drafts-dialog.description':
    'Rasporedi sve pauzirane Scheduled Drafts za njihove predviđene datume objave',
  /** Dialog warning when some scheduled drafts have past dates */
  'confirm-active-scheduled-drafts-dialog.past-dates-warning':
    'Neki od ovih Scheduled Drafts zakazani su za prošle datume. Potvrdom rasporeda odmah će se objaviti te verzije dokumenata.',
  /** Dialog title for confirming active scheduled drafts */
  'confirm-active-scheduled-drafts-dialog.title': 'Nastavi Scheduled Drafts',

  /** Suffix for when a release is a copy of another release */
  'copy-suffix': 'Kopija',

  /** Confirm button text for overriding existing draft */
  'copy-to-draft-dialog.confirm-button': 'Da, zamijeni nacrt',
  /** Description for dialog when copying version to draft that already exists */
  'copy-to-draft-dialog.description':
    'Verzija nacrta ovog dokumenta već postoji. Kopirajte trenutnu verziju u nacrt i zamijenite postojeću verziju nacrta.',
  /** Title for dialog when copying version to draft that already exists */
  'copy-to-draft-dialog.title': 'Verzija nacrta već postoji',

  /** Text for when a release / document was created */
  created: 'Stvoreno <RelativeTime/>',

  /** Activity inspector button text */
  'dashboard.details.activity': 'Aktivnost',
  /** Text for the releases detail screen in the pin release button. */
  'dashboard.details.pin-release': 'Prikvači izdanje na studio',
  /** Text for the releases detail screen when a release was published ASAP */
  'dashboard.details.published-asap': 'Objavljeno',
  /** Text for the releases detail screen when a release was published from scheduling */
  'dashboard.details.published-on': 'Objavljeno {{date}}',
  /** Text for the releases detail screen in the unpin release button. */
  'dashboard.details.unpin-release': 'Otkači izdanje sa studija',

  /** Label for the button to proceed deleting a release */
  'delete-dialog.confirm-delete-button': 'Da, izbriši izdanje',
  /** Description for the dialog confirming the deleting of a release with one document */
  'delete-dialog.confirm-delete-description_one': 'Ovo će izbrisati 1 verziju dokumenta.',
  /** Description for the dialog confirming the deleting of a release with more than one document */
  'delete-dialog.confirm-delete-description_other':
    'Ovo će izbrisati {{count}} verzija dokumenata.',
  /** Header for deleting a release dialog */
  'delete-dialog.confirm-delete.header': 'Jeste li sigurni da želite izbrisati ovo izdanje?',

  /** Label when a release has been deleted by a different user */
  'deleted-release': "Izdanje '<strong>{{title}}</strong>' je izbrisan",

  /** Text for when there's no changes in a release diff */
  'diff.list-empty': 'Popis promjena je prazan, pogledajte dokument',
  /** Text for when there's no changes in a release diff */
  'diff.no-changes': 'Nema promjena',

  /** Description for discarding a draft of a document dialog */
  'discard-version-dialog.description-draft':
    'Ovo će trajno ukloniti sve promjene napravljene na ovom dokumentu. Ova radnja se ne može poništiti.',
  /** Description for discarding a version of a document dialog */
  'discard-version-dialog.description-release':
    "Ovo će trajno ukloniti sve promjene napravljene na ovom dokumentu unutar releasea '<strong>{{releaseTitle}}</strong>'. Ova radnja se ne može poništiti.",
  /** Title for dialog for discarding a draft of a document */
  'discard-version-dialog.header-draft': 'Odbaciti nacrt?',
  /** Header for discarding a version from a release of a document dialog */
  'discard-version-dialog.header-release':
    "Ukloniti dokument iz releasea '<strong>{{releaseTitle}}</strong>'?",
  /** Title for dialog for discarding a draft of a document */
  'discard-version-dialog.title-draft': 'Odbaci nacrt',
  /** Title for dialog for discarding a version of a document */
  'discard-version-dialog.title-release': 'Ukloni iz izdanja',

  /** Label for when a document in a release has a single validation warning */
  'document-validation.error_one': '{{count}} greška validacije',
  /** Label for when a document in a release has multiple validation warnings */
  'document-validation.error_other': '{{count}} greške/grešaka validacije',

  /** Label for the button to proceed with duplicating a release */
  'duplicate-dialog.confirm-duplicate-button': 'Da, dupliciraj izdanje',
  /** Description for the dialog confirming the duplicate of a release with one document */
  'duplicate-dialog.confirm-duplicate-description_one':
    'Ovo će duplicirati release i 1 verziju dokumenta.',
  /** Description for the dialog confirming the duplicate of a release with more than one document */
  'duplicate-dialog.confirm-duplicate-description_other':
    'Ovo će duplicirati release i {{count}} verzija dokumenata.',
  /** Header for the dialog confirming the duplicate of a release */
  'duplicate-dialog.confirm-duplicate-header':
    'Jeste li sigurni da želite duplicirati ovaj release?',

  /** Title text displayed for technical error details */
  'error-details-title': 'Detalji greške',

  /** Title text when error during release update */
  'failed-edit-title': 'Spremanje promjena nije uspjelo',

  /** Title text displayed for releases that failed to publish  */
  'failed-publish-title': 'Objavljivanje nije uspjelo',

  /** Title text displayed for releases that failed to schedule  */
  'failed-schedule-title': 'Zakazivanje nije uspjelo',

  /** Filter tab label for all documents */
  'filter-tab.all': 'Sve',
  /** Filter tab label for documents with validation errors */
  'filter-tab.errors': 'Greške',

  /**The text that will be shown in the footer to indicate the time the release was archived */
  'footer.status.archived': 'Arhivirano',
  /**The text that will be shown in the footer to indicate the time the release was created */
  'footer.status.created': 'Stvoreno',
  /**The text that will be shown in the footer to indicate the time the release was created */
  'footer.status.edited': 'Uređeno',
  /**The text that will be shown in the footer to indicate the time the release was published */
  'footer.status.published': 'Objavljeno',
  /**The text that will be shown in the footer to indicate the time the release was unarchived */
  'footer.status.unarchived': 'Vraćeno iz arhive',

  /** Label text for the loading state whilst release is being loaded */
  'loading-release': 'Učitavanje izdanja',

  /** Text for when documents of a release are loading */
  'loading-release-documents': 'Učitavanje dokumenata',
  /** Description text for when loading documents on a release failed */
  'loading-release-documents.error.description':
    'Nije moguće učitati dokumente za ovo izdanje. Molimo pokušajte ponovo kasnije.',
  /** Title text for when loading documents on a release failed */
  'loading-release-documents.error.title': 'Nešto je pošlo po krivu',

  /** Label for title of actions for "when releasing" */
  'menu.group.when-releasing': 'Prilikom objavljivanja',
  /** Label for the release menu */
  'menu.label': 'Izbornik izdanja',
  /** Tooltip for the release menu */
  'menu.tooltip': 'Radnje',

  /** Text for when no archived releases are found */
  'no-archived-release': 'Nema arhiviranih izdanja',

  /** Tooltip text when there are no paused scheduled drafts */
  'no-paused-release': 'Nema pauziranih zakazanih nacrta',

  /** Text for when no releases are found */
  'no-releases': 'Nema izdanja',

  /** Text for when no scheduled drafts are found */
  'no-scheduled-drafts': 'Nema zakazanih nacrta',

  /** Text for the button name for the release tool */
  'overview.action.documentation': 'Dokumentacija',
  /** Tooltip for the calendar button in the release overview */
  'overview.calendar.tooltip': 'Prikaži kalendar',
  /** Description for the release tool */
  'overview.description':
    'Izdanja su zbirke promjena dokumenata kojima se može upravljati, zakazivati i vraćati zajedno.',
  /** Text for the placeholder in the search release input  */
  'overview.search-releases-placeholder': 'Pretraži izdanja',
  /** Title for the release tool */
  'overview.title': 'Izdanja',

  /** Tooltip text for releases that have passed their intended publish date */
  'passed-intended-publish-date': 'Ovo izdanje je prošlo predviđeni datum objave',

  /** Tooltip text for scheduled drafts that have passed their intended publish date */
  'passed-intended-publish-date-draft': 'Ovaj nacrt je prošao predviđeni datum objave',

  /** Description for when a user doesn't have publish or schedule releases */
  'permission-missing-description':
    'Vaša uloga trenutno ograničava što možete vidjeti u ovom izdanju. Ne možete objaviti niti zakazati ovo izdanje.',

  /** Text for when a user doesn't have publish or schedule releases */
  'permission-missing-title': 'Ograničen pristup',

  /** Tooltip label when the user doesn't have permission to archive release */
  'permissions.error.archive': 'Nemate dopuštenje za arhiviranje ovog izdanja',
  /** Tooltip label when the user doesn't have permission to delete release */
  'permissions.error.delete': 'Nemate dopuštenje za brisanje ovog izdanja',
  /** Tooltip label when the user doesn't have permission for discarding a version */
  'permissions.error.discard-version': 'Nemate dopuštenje za odbacivanje ove verzije',
  /** Tooltip label when the user doesn't have permission to duplicate release */
  'permissions.error.duplicate': 'Nemate dopuštenje za dupliciranje ovog izdanja',
  /** Tooltip label when the user doesn't have permission to unarchive release */
  'permissions.error.unarchive': 'Nemate dopuštenje za vraćanje ovog izdanja iz arhive',
  /** Tooltip label when the user doesn't have permission for unpublishing a document */
  'permissions.error.unpublish': 'Nemate dopuštenje za poništavanje objave ovog dokumenta',

  /** Tooltip text for when one user is editing a document in a release */
  'presence.tooltip.one':
    '{{displayName}} trenutno uređuje ovaj dokument u izdanju „{{releaseTitle}}"',

  /** Tooltip text for publish release action when there are no documents */
  'publish-action.validation.no-documents': 'Nema dokumenata za objavu',

  /** Description for the dialog confirming the publish of a release with one document */
  'publish-dialog.confirm-publish-description_one':
    "Izdanje '<strong>{{title}}</strong>' i njegov dokument bit će objavljeni.",
  /** Description for the dialog confirming the publish of a release with multiple documents */
  'publish-dialog.confirm-publish-description_other':
    "Izdanje '<strong>{{title}}</strong>' i njegovih {{releaseDocumentsLength}} dokumenata bit će objavljeno.",
  /** Title for the dialog confirming the publish of a release */
  'publish-dialog.confirm-publish.title':
    'Jeste li sigurni da želite objaviti izdanje i sve verzije dokumenata?',
  /** Label for when documents in release have validation errors */
  'publish-dialog.validation.error': 'Neki dokumenti imaju pogreške pri validaciji',
  /** Label for when documents are being validated */
  'publish-dialog.validation.loading': 'Validacija dokumenata...',
  /** Label for the button when the user doesn't have permissions to publish a release */
  'publish-dialog.validation.no-permission': 'Nemate dopuštenje za objavu',

  /** Title for information card on a published release */
  'publish-info.title': 'Ovo izdanje je uspješno objavljeno.',

  /** Placeholder title for a release with no title */
  'release-placeholder.title': 'Bez naslova',

  /** Description for the dialog confirming the revert of a release with multiple documents */
  'revert-dialog.confirm-revert-description_one':
    'Ovo će vratiti {{releaseDocumentsLength}} verziju dokumenta.',
  /** Description for the dialog confirming the revert of a release with multiple documents */
  'revert-dialog.confirm-revert-description_other':
    'Ovo će vratiti {{releaseDocumentsLength}} verzija dokumenata.',
  /** Checkbox label to confirm whether to create a staged release for revert or immediately revert */
  'revert-dialog.confirm-revert.stage-revert-checkbox-label': 'Odmah vrati izdanje',
  /** Title for the dialog confirming the revert of a release */
  'revert-dialog.confirm-revert.title': "Jeste li sigurni da želite vratiti izdanje '{{title}}'?",
  /** Warning card text for when immediately revert a release with history */
  'revert-dialog.confirm-revert.warning-card':
    'Dokumenti u ovom izdanju su izmijenjeni nakon što su objavljeni. Vraćanje će prebrisati te izmjene.',

  /** Description of a reverted release */
  'revert-release.description': 'Vrati promjene na verzijama dokumenata u „{{title}}".',
  /** Title of a reverted release */
  'revert-release.title': 'Vraćanje „{{title}}"',

  /** Description for the review changes button in release tool */
  'review.description': 'Dodajte dokumente u ovo izdanje kako biste pregledali promjene',
  /** Text for when a document is edited */
  'review.edited': 'Uređeno <RelativeTime/>',

  /** Schedule release button tooltip when there are no documents to schedule */
  'schedule-action.validation.no-documents': 'Nema dokumenata za zakazivanje',

  /** Schedule release button tooltip when the release is already scheduled */
  'schedule-button-tooltip.already-scheduled': 'Ovo izdanje je već zakazano',
  /** Schedule release button tooltip when there are validation errors */
  'schedule-button-tooltip.validation.error': 'Neki dokumenti imaju greške u validaciji',
  /** Schedule release button tooltip when validation is loading */
  'schedule-button-tooltip.validation.loading': 'Validacija dokumenata...',
  /** Schedule release button tooltip when user has no permissions to schedule */
  'schedule-button-tooltip.validation.no-permission': 'Nemate dopuštenje za zakazivanje',

  /** Title of unschedule release dialog */
  'schedule-button.tooltip': 'Jeste li sigurni da želite otkazati zakazivanje izdanja?',

  /** Description for the confirm button for scheduling a release */
  'schedule-dialog.confirm-button': 'Da, zakaži',
  /** Description shown in unschedule relaease dialog */
  'schedule-dialog.confirm-description_one':
    "Izdanje '<strong>{{title}}</strong>' i njegov dokument bit će objavljeni na odabrani datum.",
  /** Description for the dialog confirming the publish of a release with multiple documents */
  'schedule-dialog.confirm-description_other':
    'Izdanje <strong>{{title}}</strong> i njegovih {{count}} verzija dokumenata bit će zakazano.',
  /** Title for unschedule release dialog */
  'schedule-dialog.confirm-title': 'Zakaži izdanje',
  /** Description for warning that the published schedule time is in the past */
  'schedule-dialog.publish-date-in-past-warning': 'Zakaži za budući datum i vrijeme.',
  /** Label for date picker when scheduling a release */
  'schedule-dialog.select-publish-date-label': 'Zakaži za',

  /** Confirm button text for the schedule unpublish dialog */
  'schedule-unpublish-dialog.confirm': 'Zakaži poništavanje objave',
  /** Description for the schedule unpublish dialog */
  'schedule-unpublish-dialog.description':
    'Odaberite kada ovaj dokument treba biti povučen iz objave.',
  /** Header for the schedule unpublish dialog */
  'schedule-unpublish-dialog.header': 'Zakaži nacrt za poništavanje objave',

  /** Placeholder for search of documents in a release */
  'search-documents-placeholder': 'Pretraži dokumente',

  /** Text for when the release has no errors found */
  'summary.all-documents-errors-found': 'Svi dokumenti validirani, pronađeni su problemi',
  /** Text for when the release has validated all documents */
  'summary.all-documents-validated': 'Svi dokumenti validirani, nisu pronađeni problemi',
  /** Text for when the release was created */
  'summary.created': 'Stvoreno <RelativeTime/>',
  /** Text for when the release is composed of one document */
  'summary.document-count_one': '{{count}} dokument',
  /** Text for when the release is composed of multiple documents */
  'summary.document-count_other': '{{count}} dokumenata',
  /** Text for when the release has some errors found */
  'summary.errors-found':
    'Kako biste objavili ili zakazali izdanje, molimo riješite probleme pronađene u dokumentima',
  /** Text for when the release has no documents */
  'summary.no-documents': 'Nema dokumenata',
  /** Description for the empty state when a cardinality-one release has no documents */
  'summary.no-documents-cardinality-one.description':
    'Ovaj zakazani nacrt ne sadrži dokument. Možda je uklonjen.',
  /** Title for the empty state when a cardinality-one release has no documents */
  'summary.no-documents-cardinality-one.title': 'Nema dokumenta u ovom izdanju',
  /** Text for when the release has not published */
  'summary.not-published': 'Nije objavljeno',
  /** Text for when the release was published */
  'summary.published': 'Objavljeno <RelativeTime/>',
  /** Text for when the release has validated documents */
  'summary.validated-documents': '{{validatedCount}} od {{totalCount}} dokumenata je validirano',
  /** Text for validation loading indicator */
  'summary.validating-documents': 'Validiranje dokumenata: {{validatedCount}} od {{totalCount}}',

  /** add action type that will be shown in the table*/
  'table-body.action.add': 'Dodaj',
  /** Change action type that will be shown in the table*/
  'table-body.action.change': 'Promijeni',
  /** Change action type that will be shown in the table*/
  'table-body.action.unpublish': 'Povuci objavu',

  /** Header for the document table in the release tool - action */
  'table-header.action': 'Radnja',
  /** Header for the document table in the release tool - Archived */
  'table-header.archivedAt': 'Arhivirano',
  /** Header for the document table in the release tool - contributors */
  'table-header.contributors': 'Suradnici',
  /** Header for the document table in the release tool - created by */
  'table-header.created-by': 'Izradio',
  /** Header for the document table in the release tool - document preview */
  'table-header.document': 'Dokument',
  /** Header for the document table in the release tool - title */
  'table-header.documents': 'Dokumenti',
  /** Header for the document table in the release tool - edited */
  'table-header.edited': 'Uređeno',
  /** Header for the paused scheduled drafts table - intended for */
  'table-header.intended-for': 'Namijenjeno za',
  /** Header for the document table in the release tool - Published */
  'table-header.published-at': 'Objavljeno',
  /** Header for the document table in the release tool - Published */
  'table-header.publishedAt': 'Objavljeno',
  /** Header for the scheduled drafts document table in the release tool - published at */
  'table-header.scheduled-draft.published-at': 'Objavljeno u',
  /** Header for the scheduled drafts document table in the release tool - scheduled for */
  'table-header.scheduled-for': 'Zakazano za',
  /** Header for the document table in the release tool - time */
  'table-header.time': 'Vrijeme',
  /** Header for the  document table in the release tool - release title */
  'table-header.title': 'Izdanje',
  /** Header for the document table in the release tool - type */
  'table-header.type': 'Vrsta',
  /** Header for the document table in the release tool - when */
  'table-header.when': 'Kada',

  /** Text for the release time label for scheduled releases  which has not been scheduled yet*/
  'time.estimated': 'Procijenjeno',
  /** Text for the release time label for scheduled releases  which has been scheduled*/
  'time.scheduled': 'Zakazano',

  /** Text for toast when release failed to archive */
  'toast.archive.error': "Arhiviranje '<strong>{{title}}</strong>' nije uspjelo: {{error}}",
  /** Toast error message when bulk scheduling of active drafts fails */
  'toast.confirm-active-scheduled-drafts.error': 'Zakazivanje nacrta nije uspjelo: {{error}}',
  /** Toast message after copying release ID */
  'toast.copy-release-id.success': 'ID izdanja kopiran u međuspremnik',
  /** Toast message after copying release link */
  'toast.copy-release-link.success': 'Veza izdanja kopirana u međuspremnik',
  /** Toast message after copying release title */
  'toast.copy-release-title.success': 'Naslov izdanja kopiran u međuspremnik',
  /** Description for toast when creating new version of document in release failed */
  'toast.create-version.error': 'Nije uspjelo dodavanje dokumenta u izdanje: {{error}}',
  /** Description for toast when release deletion failed */
  'toast.delete.error': "Nije uspjelo brisanje '<strong>{{title}}</strong>': {{error}}",
  /** Description for toast when release is successfully deleted */
  'toast.delete.success': "Izdanje '<strong>{{title}}</strong>' uspješno je obrisano",
  /** Description for toast when release duplication failed */
  'toast.duplicate.error': "Nije uspjelo dupliciranje '<strong>{{title}}</strong>': {{error}}",
  /** Description for toast when release is successfully duplicated */
  'toast.duplicate.success': "Izdanje '<strong>{{title}}</strong>' je duplicirano. <Link/>",
  /** Link text for toast link to the duplicated release */
  'toast.duplicate.success-link': 'Pogledaj duplicirano izdanje',
  /** Text for toast when release has been reverted immediately */
  'toast.immediate-revert.success': "Izdanje '{{title}}' uspješno je vraćeno na prethodno stanje",
  /** Text for toast when release failed to publish */
  'toast.publish.error': "Nije uspjelo objavljivanje '<strong>{{title}}</strong>': {{error}}",
  /** Text for toast when release has reverted release successfully staged */
  'toast.revert-stage.success':
    "Izdanje za vraćanje na prethodno stanje za '{{title}}' uspješno je kreirano. <Link/>",
  /** Link text for toast link to the generated revert release */
  'toast.revert-stage.success-link': 'Pogledaj izdanje za vraćanje na prethodno stanje',
  /** Text for toast when release failed to revert */
  'toast.revert.error': 'Nije uspjelo vraćanje izdanja na prethodno stanje: {{error}}',
  /** Text for toast when release failed to schedule */
  'toast.schedule.error': "Nije uspjelo zakazivanje '<strong>{{title}}</strong>': {{error}}",
  /** Text for toast when release has been scheduled */
  'toast.schedule.success': "Izdanje '<strong>{{title}}</strong>' je zakazano.",
  /** Text for toast when release failed to unarchive */
  'toast.unarchive.error':
    "Nije uspjelo vraćanje iz arhive '<strong>{{title}}</strong>': {{error}}",
  /** Text for toast when release failed to unschedule */
  'toast.unschedule.error':
    "Nije uspjelo otkazivanje zakazivanja '<strong>{{title}}</strong>': {{error}}",

  /** Text for tooltip when a release has been scheduled */
  'type-picker.tooltip.scheduled':
    'Izdanje je zakazano, otkaži zakazivanje kako bi promijenio vrstu',

  /** Text action in unpublish dialog to cancel */
  'unpublish-dialog.action.cancel': 'Odustani',
  /** Text action in unpublish dialog to unpublish */
  'unpublish-dialog.action.unpublish': 'Da, poništi objavu pri izdavanju',
  /** Description for unpublish dialog, explaining that all changes made to this document will be lost */
  'unpublish-dialog.description.lost-changes':
    'Sve promjene napravljene na ovoj verziji dokumenta bit će izgubljene.',
  /** Description for the unpublish dialog, explaining that it will create a draft if no draft exists at time of release */
  'unpublish-dialog.description.to-draft':
    'Ovo će poništiti objavu dokumenta kao dio izdanja <Label>{{title}}</Label> te kreirati nacrt ako u trenutku izdavanja ne postoji nacrt.',
  /** Title for the dialog confirming the unpublish of a release */
  'unpublish-dialog.header':
    'Jeste li sigurni da želite poništiti objavu ovog dokumenta pri izdavanju?',

  /** Text for when a document is unpublished */
  'unpublish.already-unpublished': 'Ovaj dokument je već neobjavljen.',
  /** Tooltip label for when a document is unpublished */
  'unpublish.no-published-version': 'Ne postoji objavljena verzija ovog dokumenta.',

  /** Description shown in unschedule relaease dialog */
  'unschedule-dialog.confirm-description': 'Izdanje više neće biti objavljeno na zakazani datum.',
  /** Title for unschedule release dialog */
  'unschedule-dialog.confirm-title': 'Jeste li sigurni da želite otkazati raspored izdanja?',
})
