import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Action text for adding a document to release */
  'action.add-document': 'Dodaj dokument',
  /** Action text for archiving a release */
  'action.archive': 'Archiwizuj wydanie',
  /** Tooltip for when the archive release action is disabled due to release being scheduled  */
  'action.archive.tooltip': 'Odplanuj to wydanie, aby je zarchiwizować',
  /** Action text for showing the archived releases */
  'action.archived': 'Zarchiwizowane',
  /** Menu item label for copying release ID */
  'action.copy-release-id.label': 'Kopiuj ID wydania',
  /** Menu item label for copying release URL */
  'action.copy-release-link.label': 'Kopiuj URL wydania',
  /** Menu item label for copying release title */
  'action.copy-release-title.label': 'Kopiuj tytuł wydania',
  /** Tooltip for copy release actions button */
  'action.copy-release.label': 'Kopiuj',
  /** Action text for staging a new revert release */
  'action.create-revert-release': 'Utwórz nowe wydanie',
  /** Action text for deleting a release */
  'action.delete-release': 'Usuń wydanie',
  /** Menu item label for showing scheduled drafts */
  'action.drafts': 'Zaplanowane wersje robocze',
  /** Action text for duplicating a release */
  'action.duplicate-release': 'Duplikuj wydanie',
  /** Action text for editing a release */
  'action.edit': 'Edytuj wydanie',
  /** Action text for reverting a release immediately without staging changes */
  'action.immediate-revert-release': 'Przywróć teraz',
  /** Action text for opening a release */
  'action.open': 'Aktywne',
  /** Action text for showing the paused scheduled drafts */
  'action.paused': 'Wstrzymane',
  /** Action text for publishing all documents in a release (and the release itself) */
  'action.publish-all-documents': 'Uruchom wydanie',
  /** Menu item label for showing releases (multi-document releases) */
  'action.releases': 'Wydania',
  /** Action text for reverting a release */
  'action.revert': 'Przywróć wydanie',
  /** Action message for when document is scheduled for unpublishing a document and you want to no longer unpublish it */
  'action.revert-unpublish-actions': 'Cofnij cofnięcie publikacji podczas wydawania',
  /** Text for the review changes button in release tool */
  'action.review': 'Przejrzyj zmiany',
  /** Action text for scheduling a release */
  'action.schedule': 'Zaplanuj wydanie...',
  /** Action text for scheduling unpublish of a draft document */
  'action.schedule-unpublish': 'Zaplanuj cofnięcie publikacji',
  /** Tooltip text for when schedule unpublish is disabled because document is not published */
  'action.schedule-unpublish.disabled.not-published':
    'Dokument musi być opublikowany, aby zaplanować cofnięcie publikacji',
  /** Label for unarchiving a release */
  'action.unarchive': 'Przywróć z archiwum',
  /** Action text for unpublishing a document in a release in the context menu */
  'action.unpublish': 'Cofnij publikację',
  /** Action message for scheduling an unpublished of a document  */
  'action.unpublish-doc-actions': 'Cofnij publikację podczas wydawania',
  /** Action text for unscheduling a release */
  'action.unschedule': 'Anuluj harmonogram wydania',

  /** Text for the summary button in release tool */
  'actions.summary': 'Podsumowanie',

  /* The text for the activity event when a document is added to a release */
  'activity.event.add-document': 'Dodano wersję dokumentu',
  /* The text for the activity event when the release is archived */
  'activity.event.archive': 'Zarchiwizowano wydanie <strong>{{releaseTitle}}</strong>',
  /* The text for the activity event when the release is created */
  'activity.event.create':
    'Utworzono wydanie <strong>{{releaseTitle}}</strong> <ScheduleTarget>z celem </ScheduleTarget>',
  /* The text for the activity event when a document is removed from a release */
  'activity.event.discard-document': 'Odrzucono wersję dokumentu',
  'activity.event.edit': 'Ustawiono czas wydania na <ScheduleTarget></ScheduleTarget>',
  /**The text to display in the changes when the release type changes to asap */
  'activity.event.edit-time-asap': 'Jak najszybciej',
  /**The text to display in the changes when the release type changes to undecided */
  'activity.event.edit-time-undecided': 'Niezdecydowany',
  /* The text for the activity event when the release is published */
  'activity.event.publish': 'Opublikowano wydanie <strong>{{releaseTitle}}</strong>',
  /* The text for the activity event when the release is scheduled */
  'activity.event.schedule': 'Oznaczono jako zaplanowane',
  /** The text for the activity event when the release is unarchived */
  'activity.event.unarchive': 'Przywrócono z archiwum wydanie <strong>{{releaseTitle}}</strong>',
  /** The text for the activity event when the release is unscheduled */
  'activity.event.unschedule': 'Oznaczono jako niezaplanowane',
  /** The loading text for when releases are loading */
  'activity.panel.error': 'Wystąpił błąd podczas pobierania aktywności wydania',
  /** The loading text for when releases are loading */
  'activity.panel.loading': 'Ładowanie aktywności wydania',
  /** The title for the activity panel shown in the releases detail screen */
  'activity.panel.title': 'Aktywność',

  /** Label for the button to proceed with archiving a release */
  'archive-dialog.confirm-archive-button': 'Tak, zarchiwizuj wydanie',
  /** Description for the dialog confirming the archive of a release with one document */
  'archive-dialog.confirm-archive-description_one':
    'Spowoduje to zarchiwizowanie 1 wersji dokumentu.',
  /** Header for the dialog confirming the archive of a release */
  'archive-dialog.confirm-archive-header': 'Czy na pewno chcesz zarchiwizować to wydanie?',
  /** Title for the dialog confirming the archive of a release */
  'archive-dialog.confirm-archive-title':
    "Czy na pewno chcesz zarchiwizować wydanie <strong>'{{title}}'</strong>?",

  /** Description for information card on a published or archived release to description retention effects */
  'archive-info.description':
    'Będzie dostępne przez {{retentionDays}} dni, a następnie automatycznie usunięte {{removalDate}}. <Link>Dowiedz się o retencji</Link>.',
  /** Title for information card on a archived release */
  'archive-info.title': 'To wydanie jest zarchiwizowane',

  /** Banner text showing count of active scheduled drafts requiring confirmation with one draft */
  'banner.confirm-active-scheduled-drafts_one':
    'Istnieje {{count}} zaplanowany szkic wymagający potwierdzenia harmonogramu',
  /** Button text for confirming scheduling of active drafts */
  'banner.confirm-active-scheduled-drafts.button': 'Wznów planowanie',
  /** Button text when confirming schedules from paused mode */
  'banner.confirm-active-scheduled-drafts.button-paused': 'Wznów wszystkie harmonogramy',
  /** Banner text shown when drafts mode is disabled but there are still scheduled drafts */
  'banner.drafts-mode-disabled':
    'Tryb wersji roboczych został wyłączony, ale nadal istnieją zaplanowane wersje robocze do opublikowania.',
  /** Banner text shown when navigating to a release that does not exist */
  'banner.release-not-found': 'Nie można znaleźć tego wydania',
  /** Tooltip for the dismiss button in the release not found banner */
  'banner.release-not-found.dismiss': 'Odrzuć',
  /** Banner text shown when scheduled drafts feature is disabled but there are still scheduled drafts */
  'banner.scheduled-drafts-disabled':
    'Zaplanowane wersje robocze zostały wyłączone, ale nadal istnieją zaplanowane wersje robocze do opublikowania.',

  /** Title for changes to published documents */
  'changes-published-docs.title': 'Zmiany w opublikowanych dokumentach',

  /** Dialog confirm button text for confirming all scheduled drafts */
  'confirm-active-scheduled-drafts-dialog.confirm-button': 'Potwierdź harmonogramy',
  /** Dialog description for confirming active scheduled drafts */
  'confirm-active-scheduled-drafts-dialog.description':
    'Zaplanuj wszystkie wstrzymane zaplanowane wersje robocze na zamierzone daty publikacji',
  /** Dialog warning when some scheduled drafts have past dates */
  'confirm-active-scheduled-drafts-dialog.past-dates-warning':
    'Niektóre z tych zaplanowanych wersji roboczych mają daty z przeszłości. Potwierdzenie harmonogramów spowoduje natychmiastowe opublikowanie tych wersji dokumentów.',
  /** Dialog title for confirming active scheduled drafts */
  'confirm-active-scheduled-drafts-dialog.title': 'Wznów zaplanowane wersje robocze',

  /** Suffix for when a release is a copy of another release */
  'copy-suffix': 'Kopia',

  /** Confirm button text for overriding existing draft */
  'copy-to-draft-dialog.confirm-button': 'Tak, nadpisz wersję roboczą',
  /** Description for dialog when copying version to draft that already exists */
  'copy-to-draft-dialog.description':
    'Wersja robocza tego dokumentu już istnieje. Skopiuj bieżącą wersję do wersji roboczej i nadpisz istniejącą wersję roboczą.',
  /** Title for dialog when copying version to draft that already exists */
  'copy-to-draft-dialog.title': 'Wersja robocza już istnieje',

  /** Text for when a release / document was created */
  created: 'Utworzono <RelativeTime/>',

  /** Activity inspector button text */
  'dashboard.details.activity': 'Aktywność',
  /** Text for the releases detail screen in the pin release button. */
  'dashboard.details.pin-release': 'Przypnij wydanie do studia',
  /** Text for the releases detail screen when a release was published ASAP */
  'dashboard.details.published-asap': 'Opublikowano',
  /** Text for the releases detail screen when a release was published from scheduling */
  'dashboard.details.published-on': 'Opublikowano {{date}}',
  /** Text for the releases detail screen in the unpin release button. */
  'dashboard.details.unpin-release': 'Odepnij wydanie od studia',

  /** Label for the button to proceed deleting a release */
  'delete-dialog.confirm-delete-button': 'Tak, usuń wydanie',
  /** Description for the dialog confirming the deleting of a release with one document */
  'delete-dialog.confirm-delete-description_one': 'Spowoduje to usunięcie 1 wersji dokumentu.',
  /** Header for deleting a release dialog */
  'delete-dialog.confirm-delete.header': 'Czy na pewno chcesz usunąć to wydanie?',

  /** Label when a release has been deleted by a different user */
  'deleted-release': "Wydanie '<strong>{{title}}</strong>' zostało usunięte",

  /** Text for when there's no changes in a release diff */
  'diff.list-empty': 'Lista zmian jest pusta, zobacz dokument',
  /** Text for when there's no changes in a release diff */
  'diff.no-changes': 'Brak zmian',

  /** Description for discarding a draft of a document dialog */
  'discard-version-dialog.description-draft':
    'Spowoduje to trwałe usunięcie wszystkich zmian wprowadzonych w tym dokumencie. Tej operacji nie można cofnąć.',
  /** Description for discarding a version of a document dialog */
  'discard-version-dialog.description-release':
    "Spowoduje to trwałe usunięcie wszystkich zmian wprowadzonych w tym dokumencie w ramach wydania '<strong>{{releaseTitle}}</strong>'. Tej operacji nie można cofnąć.",
  /** Title for dialog for discarding a draft of a document */
  'discard-version-dialog.header-draft': 'Odrzucić wersję roboczą?',
  /** Header for discarding a version from a release of a document dialog */
  'discard-version-dialog.header-release':
    "Usunąć dokument z wydania '<strong>{{releaseTitle}}</strong>'?",
  /** Title for dialog for discarding a draft of a document */
  'discard-version-dialog.title-draft': 'Odrzuć wersję roboczą',
  /** Title for dialog for discarding a version of a document */
  'discard-version-dialog.title-release': 'Usuń z wydania',

  /** Label for when a document in a release has a single validation warning */
  'document-validation.error_one': '{{count}} błąd walidacji',

  /** Label for the button to proceed with duplicating a release */
  'duplicate-dialog.confirm-duplicate-button': 'Tak, duplikuj wydanie',
  /** Description for the dialog confirming the duplicate of a release with one document */
  'duplicate-dialog.confirm-duplicate-description_one':
    'Spowoduje to zduplikowanie wydania oraz 1 wersji dokumentu.',
  /** Header for the dialog confirming the duplicate of a release */
  'duplicate-dialog.confirm-duplicate-header': 'Czy na pewno chcesz zduplikować to wydanie?',

  /** Title text displayed for technical error details */
  'error-details-title': 'Szczegóły błędu',

  /** Title text when error during release update */
  'failed-edit-title': 'Nie udało się zapisać zmian',

  /** Title text displayed for releases that failed to publish  */
  'failed-publish-title': 'Nie udało się opublikować',

  /** Title text displayed for releases that failed to schedule  */
  'failed-schedule-title': 'Nie udało się zaplanować',

  /** Filter tab label for all documents */
  'filter-tab.all': 'Wszystkie',
  /** Filter tab label for documents with validation errors */
  'filter-tab.errors': 'Błędy',

  /**The text that will be shown in the footer to indicate the time the release was archived */
  'footer.status.archived': 'Zarchiwizowano',
  /**The text that will be shown in the footer to indicate the time the release was created */
  'footer.status.created': 'Utworzono',
  /**The text that will be shown in the footer to indicate the time the release was created */
  'footer.status.edited': 'Edytowano',
  /**The text that will be shown in the footer to indicate the time the release was published */
  'footer.status.published': 'Opublikowano',
  /**The text that will be shown in the footer to indicate the time the release was unarchived */
  'footer.status.unarchived': 'Przywrócono z archiwum',

  /** Label text for the loading state whilst release is being loaded */
  'loading-release': 'Ładowanie wydania',

  /** Text for when documents of a release are loading */
  'loading-release-documents': 'Ładowanie dokumentów',
  /** Description text for when loading documents on a release failed */
  'loading-release-documents.error.description':
    'Nie możemy załadować dokumentów dla tej wersji. Spróbuj ponownie później.',
  /** Title text for when loading documents on a release failed */
  'loading-release-documents.error.title': 'Coś poszło nie tak',

  /** Label for title of actions for "when releasing" */
  'menu.group.when-releasing': 'Podczas wydawania',
  /** Label for the release menu */
  'menu.label': 'Menu wydania',
  /** Tooltip for the release menu */
  'menu.tooltip': 'Akcje',

  /** Text for when no archived releases are found */
  'no-archived-release': 'Brak zarchiwizowanych wydań',

  /** Tooltip text when there are no paused scheduled drafts */
  'no-paused-release': 'Brak wstrzymanych zaplanowanych wersji roboczych',

  /** Text for when no releases are found */
  'no-releases': 'Brak wydań',

  /** Text for when no scheduled drafts are found */
  'no-scheduled-drafts': 'Brak zaplanowanych wersji roboczych',

  /** Text for the button name for the release tool */
  'overview.action.documentation': 'Dokumentacja',
  /** Tooltip for the calendar button in the release overview */
  'overview.calendar.tooltip': 'Wyświetl kalendarz',
  /** Description for the release tool */
  'overview.description':
    'Wydania to zbiory zmian dokumentów, którymi można zarządzać, planować i wycofywać razem.',
  /** Text for the placeholder in the search release input  */
  'overview.search-releases-placeholder': 'Szukaj wydań',
  /** Title for the release tool */
  'overview.title': 'Wydania',

  /** Tooltip text for releases that have passed their intended publish date */
  'passed-intended-publish-date': 'To wydanie przekroczyło planowaną datę publikacji',

  /** Tooltip text for scheduled drafts that have passed their intended publish date */
  'passed-intended-publish-date-draft': 'Ta wersja robocza przekroczyła planowaną datę publikacji',

  /** Description for when a user doesn't have publish or schedule releases */
  'permission-missing-description':
    'Twoja rola ogranicza to, co możesz zobaczyć w tym wydaniu. Możliwe, że nie będziesz w stanie opublikować ani zaplanować tego wydania.',

  /** Text for when a user doesn't have publish or schedule releases */
  'permission-missing-title': 'Ograniczony dostęp',

  /** Tooltip label when the user doesn't have permission to archive release */
  'permissions.error.archive': 'Nie masz uprawnień do archiwizowania tego wydania',
  /** Tooltip label when the user doesn't have permission to delete release */
  'permissions.error.delete': 'Nie masz uprawnień do usunięcia tego wydania',
  /** Tooltip label when the user doesn't have permission for discarding a version */
  'permissions.error.discard-version': 'Nie masz uprawnień do odrzucenia tej wersji',
  /** Tooltip label when the user doesn't have permission to duplicate release */
  'permissions.error.duplicate': 'Nie masz uprawnień do duplikowania tego wydania',
  /** Tooltip label when the user doesn't have permission to unarchive release */
  'permissions.error.unarchive': 'Nie masz uprawnień do przywrócenia tego wydania z archiwum',
  /** Tooltip label when the user doesn't have permission for unpublishing a document */
  'permissions.error.unpublish': 'Nie masz uprawnień do cofnięcia publikacji tego dokumentu',

  /** Tooltip text for when one user is editing a document in a release */
  'presence.tooltip.one': '{{displayName}} edytuje teraz ten dokument w wydaniu „{{releaseTitle}}"',

  /** Tooltip text for publish release action when there are no documents */
  'publish-action.validation.no-documents': 'Brak dokumentów do opublikowania',

  /** Description for the dialog confirming the publish of a release with one document */
  'publish-dialog.confirm-publish-description_one':
    "Wydanie '<strong>{{title}}</strong>' oraz jego dokument zostaną opublikowane.",
  /** Title for the dialog confirming the publish of a release */
  'publish-dialog.confirm-publish.title':
    'Czy na pewno chcesz opublikować wydanie i wszystkie wersje dokumentów?',
  /** Label for when documents in release have validation errors */
  'publish-dialog.validation.error': 'Niektóre dokumenty zawierają błędy walidacji',
  /** Label for when documents are being validated */
  'publish-dialog.validation.loading': 'Walidowanie dokumentów...',
  /** Label for the button when the user doesn't have permissions to publish a release */
  'publish-dialog.validation.no-permission': 'Nie masz uprawnień do publikowania',

  /** Title for information card on a published release */
  'publish-info.title': 'To wydanie zostało pomyślnie opublikowane.',

  /** Placeholder title for a release with no title */
  'release-placeholder.title': 'Bez tytułu',

  /** Description for the dialog confirming the revert of a release with multiple documents */
  'revert-dialog.confirm-revert-description_one':
    'Spowoduje to przywrócenie {{releaseDocumentsLength}} wersji dokumentu.',
  /** Checkbox label to confirm whether to create a staged release for revert or immediately revert */
  'revert-dialog.confirm-revert.stage-revert-checkbox-label': 'Natychmiast przywróć wydanie',
  /** Title for the dialog confirming the revert of a release */
  'revert-dialog.confirm-revert.title': "Czy na pewno chcesz przywrócić wydanie '{{title}}'?",
  /** Warning card text for when immediately revert a release with history */
  'revert-dialog.confirm-revert.warning-card':
    'Po opublikowaniu dokumentów w tym wydaniu wprowadzono w nich zmiany. Przywrócenie spowoduje nadpisanie tych zmian.',

  /** Description of a reverted release */
  'revert-release.description': 'Przywróć zmiany w wersjach dokumentów w „{{title}}".',
  /** Title of a reverted release */
  'revert-release.title': 'Przywracanie „{{title}}"',

  /** Description for the review changes button in release tool */
  'review.description': 'Dodaj dokumenty do tego wydania, aby przejrzeć zmiany',
  /** Text for when a document is edited */
  'review.edited': 'Edytowano <RelativeTime/>',

  /** Schedule release button tooltip when there are no documents to schedule */
  'schedule-action.validation.no-documents': 'Brak dokumentów do zaplanowania',

  /** Schedule release button tooltip when the release is already scheduled */
  'schedule-button-tooltip.already-scheduled': 'To wydanie jest już zaplanowane',
  /** Schedule release button tooltip when there are validation errors */
  'schedule-button-tooltip.validation.error': 'Niektóre dokumenty zawierają błędy walidacji',
  /** Schedule release button tooltip when validation is loading */
  'schedule-button-tooltip.validation.loading': 'Walidowanie dokumentów...',
  /** Schedule release button tooltip when user has no permissions to schedule */
  'schedule-button-tooltip.validation.no-permission': 'Nie masz uprawnień do planowania',

  /** Title of unschedule release dialog */
  'schedule-button.tooltip': 'Czy na pewno chcesz odplanować wydanie?',

  /** Description for the confirm button for scheduling a release */
  'schedule-dialog.confirm-button': 'Tak, zaplanuj',
  /** Description shown in unschedule relaease dialog */
  'schedule-dialog.confirm-description_one':
    "Wydanie '<strong>{{title}}</strong>' oraz jego dokument zostaną opublikowane w wybranym terminie.",
  /** Title for unschedule release dialog */
  'schedule-dialog.confirm-title': 'Zaplanuj wydanie',
  /** Description for warning that the published schedule time is in the past */
  'schedule-dialog.publish-date-in-past-warning': 'Zaplanuj na przyszłą godzinę i datę.',
  /** Label for date picker when scheduling a release */
  'schedule-dialog.select-publish-date-label': 'Zaplanuj na',

  /** Confirm button text for the schedule unpublish dialog */
  'schedule-unpublish-dialog.confirm': 'Zaplanuj cofnięcie publikacji',
  /** Description for the schedule unpublish dialog */
  'schedule-unpublish-dialog.description':
    'Wybierz, kiedy ten dokument powinien zostać cofnięty do wersji roboczej.',
  /** Header for the schedule unpublish dialog */
  'schedule-unpublish-dialog.header': 'Zaplanuj wersję roboczą do cofnięcia publikacji',

  /** Placeholder for search of documents in a release */
  'search-documents-placeholder': 'Szukaj dokumentów',

  /** Text for when the release has no errors found */
  'summary.all-documents-errors-found': 'Wszystkie dokumenty zweryfikowane, znaleziono problemy',
  /** Text for when the release has validated all documents */
  'summary.all-documents-validated': 'Wszystkie dokumenty zweryfikowane, nie znaleziono problemów',
  /** Text for when the release was created */
  'summary.created': 'Utworzono <RelativeTime/>',
  /** Text for when the release is composed of one document */
  'summary.document-count_one': '{{count}} dokument',
  /** Text for when the release has some errors found */
  'summary.errors-found':
    'Aby opublikować lub zaplanować wydanie, rozwiąż problemy znalezione w dokumentach',
  /** Text for when the release has no documents */
  'summary.no-documents': 'Brak dokumentów',
  /** Description for the empty state when a cardinality-one release has no documents */
  'summary.no-documents-cardinality-one.description':
    'Ten zaplanowany szkic nie zawiera dokumentu. Mógł zostać usunięty.',
  /** Title for the empty state when a cardinality-one release has no documents */
  'summary.no-documents-cardinality-one.title': 'Brak dokumentu w tym wydaniu',
  /** Text for when the release has not published */
  'summary.not-published': 'Nieopublikowane',
  /** Text for when the release was published */
  'summary.published': 'Opublikowano <RelativeTime/>',
  /** Text for when the release has validated documents */
  'summary.validated-documents': '{{validatedCount}} z {{totalCount}} dokumentów zweryfikowanych',
  /** Text for validation loading indicator */
  'summary.validating-documents': 'Weryfikowanie dokumentów: {{validatedCount}} z {{totalCount}}',

  /** add action type that will be shown in the table*/
  'table-body.action.add': 'Dodaj',
  /** Change action type that will be shown in the table*/
  'table-body.action.change': 'Zmień',
  /** Change action type that will be shown in the table*/
  'table-body.action.unpublish': 'Cofnij publikację',

  /** Header for the document table in the release tool - action */
  'table-header.action': 'Akcja',
  /** Header for the document table in the release tool - Archived */
  'table-header.archivedAt': 'Zarchiwizowano',
  /** Header for the document table in the release tool - contributors */
  'table-header.contributors': 'Współtwórcy',
  /** Header for the document table in the release tool - created by */
  'table-header.created-by': 'Utworzone przez',
  /** Header for the document table in the release tool - document preview */
  'table-header.document': 'Dokument',
  /** Header for the document table in the release tool - title */
  'table-header.documents': 'Dokumenty',
  /** Header for the document table in the release tool - edited */
  'table-header.edited': 'Edytowano',
  /** Header for the paused scheduled drafts table - intended for */
  'table-header.intended-for': 'Przeznaczone dla',
  /** Header for the document table in the release tool - Published */
  'table-header.published-at': 'Opublikowano',
  /** Header for the document table in the release tool - Published */
  'table-header.publishedAt': 'Opublikowano',
  /** Header for the scheduled drafts document table in the release tool - published at */
  'table-header.scheduled-draft.published-at': 'Opublikowano o',
  /** Header for the scheduled drafts document table in the release tool - scheduled for */
  'table-header.scheduled-for': 'Zaplanowano na',
  /** Header for the document table in the release tool - time */
  'table-header.time': 'Czas',
  /** Header for the  document table in the release tool - release title */
  'table-header.title': 'Wydanie',
  /** Header for the document table in the release tool - type */
  'table-header.type': 'Typ',
  /** Header for the document table in the release tool - when */
  'table-header.when': 'Kiedy',

  /** Text for the release time label for scheduled releases  which has not been scheduled yet*/
  'time.estimated': 'Szacowany',
  /** Text for the release time label for scheduled releases  which has been scheduled*/
  'time.scheduled': 'Zaplanowany',

  /** Text for toast when release failed to archive */
  'toast.archive.error': "Nie udało się zarchiwizować '<strong>{{title}}</strong>': {{error}}",
  /** Toast error message when bulk scheduling of active drafts fails */
  'toast.confirm-active-scheduled-drafts.error':
    'Nie udało się zaplanować wersji roboczych: {{error}}',
  /** Toast message after copying release ID */
  'toast.copy-release-id.success': 'ID wydania skopiowane do schowka',
  /** Toast message after copying release link */
  'toast.copy-release-link.success': 'Link do wydania skopiowany do schowka',
  /** Toast message after copying release title */
  'toast.copy-release-title.success': 'Tytuł wydania skopiowany do schowka',
  /** Description for toast when creating new version of document in release failed */
  'toast.create-version.error': 'Nie udało się dodać dokumentu do wydania: {{error}}',
  /** Description for toast when release deletion failed */
  'toast.delete.error': "Nie udało się usunąć '<strong>{{title}}</strong>': {{error}}",
  /** Description for toast when release is successfully deleted */
  'toast.delete.success': "Wydanie '<strong>{{title}}</strong>' zostało pomyślnie usunięte",
  /** Description for toast when release duplication failed */
  'toast.duplicate.error': "Nie udało się zduplikować '<strong>{{title}}</strong>': {{error}}",
  /** Description for toast when release is successfully duplicated */
  'toast.duplicate.success': "Wydanie '<strong>{{title}}</strong>' zostało zduplikowane. <Link/>",
  /** Link text for toast link to the duplicated release */
  'toast.duplicate.success-link': 'Zobacz zduplikowane wydanie',
  /** Text for toast when release has been reverted immediately */
  'toast.immediate-revert.success': "Wydanie '{{title}}' zostało pomyślnie cofnięte",
  /** Text for toast when release failed to publish */
  'toast.publish.error': "Nie udało się opublikować '<strong>{{title}}</strong>': {{error}}",
  /** Text for toast when release has reverted release successfully staged */
  'toast.revert-stage.success':
    "Cofnięcie wydania dla '{{title}}' zostało pomyślnie utworzone. <Link/>",
  /** Link text for toast link to the generated revert release */
  'toast.revert-stage.success-link': 'Zobacz cofnięte wydanie',
  /** Text for toast when release failed to revert */
  'toast.revert.error': 'Nie udało się cofnąć wydania: {{error}}',
  /** Text for toast when release failed to schedule */
  'toast.schedule.error': "Nie udało się zaplanować '<strong>{{title}}</strong>': {{error}}",
  /** Text for toast when release has been scheduled */
  'toast.schedule.success': "Wydanie '<strong>{{title}}</strong>' zostało zaplanowane.",
  /** Text for toast when release failed to unarchive */
  'toast.unarchive.error':
    "Nie udało się przywrócić z archiwum '<strong>{{title}}</strong>': {{error}}",
  /** Text for toast when release failed to unschedule */
  'toast.unschedule.error': "Nie udało się odplanować '<strong>{{title}}</strong>': {{error}}",

  /** Text for tooltip when a release has been scheduled */
  'type-picker.tooltip.scheduled': 'Wydanie jest zaplanowane, odplanuj je, aby zmienić typ',

  /** Text action in unpublish dialog to cancel */
  'unpublish-dialog.action.cancel': 'Anuluj',
  /** Text action in unpublish dialog to unpublish */
  'unpublish-dialog.action.unpublish': 'Tak, cofnij publikację podczas wydawania',
  /** Description for unpublish dialog, explaining that all changes made to this document will be lost */
  'unpublish-dialog.description.lost-changes':
    'Wszelkie zmiany wprowadzone w tej wersji dokumentu zostaną utracone.',
  /** Description for the unpublish dialog, explaining that it will create a draft if no draft exists at time of release */
  'unpublish-dialog.description.to-draft':
    'Spowoduje to cofnięcie publikacji dokumentu w ramach wydania <Label>{{title}}</Label> i utworzenie wersji roboczej, jeśli żadna nie istnieje w momencie wydania.',
  /** Title for the dialog confirming the unpublish of a release */
  'unpublish-dialog.header':
    'Czy na pewno chcesz cofnąć publikację tego dokumentu podczas wydawania?',

  /** Text for when a document is unpublished */
  'unpublish.already-unpublished': 'Ten dokument jest już niepublikowany.',
  /** Tooltip label for when a document is unpublished */
  'unpublish.no-published-version': 'Nie istnieje opublikowana wersja tego dokumentu.',

  /** Description shown in unschedule relaease dialog */
  'unschedule-dialog.confirm-description':
    'Wydanie nie zostanie już opublikowane w zaplanowanym terminie',
  /** Title for unschedule release dialog */
  'unschedule-dialog.confirm-title': 'Czy na pewno chcesz odplanować wydanie?',
})
