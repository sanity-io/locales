import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Action text for adding a document to release */
  'action.add-document': 'Přidat dokument',
  /** Action text for archiving a release */
  'action.archive': 'Archivovat release',
  /** Tooltip for when the archive release action is disabled due to release being scheduled  */
  'action.archive.tooltip': 'Zrušte plánování tohoto release, abyste ho mohli archivovat',
  /** Action text for showing the archived releases */
  'action.archived': 'Archivované',
  /** Menu item label for copying release ID */
  'action.copy-release-id.label': 'Kopírovat ID release',
  /** Menu item label for copying release URL */
  'action.copy-release-link.label': 'Kopírovat URL release',
  /** Menu item label for copying release title */
  'action.copy-release-title.label': 'Kopírovat název release',
  /** Tooltip for copy release actions button */
  'action.copy-release.label': 'Kopírovat',
  /** Action text for staging a new revert release */
  'action.create-revert-release': 'Vytvořit nový release',
  /** Action text for deleting a release */
  'action.delete-release': 'Smazat release',
  /** Menu item label for showing scheduled drafts */
  'action.drafts': 'Naplánované koncepty',
  /** Action text for duplicating a release */
  'action.duplicate-release': 'Duplikovat release',
  /** Action text for editing a release */
  'action.edit': 'Upravit release',
  /** Action text for reverting a release immediately without staging changes */
  'action.immediate-revert-release': 'Vrátit nyní',
  /** Action text for opening a release */
  'action.open': 'Aktivní',
  /** Action text for showing the paused scheduled drafts */
  'action.paused': 'Pozastavené',
  /** Action text for publishing all documents in a release (and the release itself) */
  'action.publish-all-documents': 'Spustit release',
  /** Menu item label for showing releases (multi-document releases) */
  'action.releases': 'Releases',
  /** Action text for reverting a release */
  'action.revert': 'Vrátit release',
  /** Action message for when document is scheduled for unpublishing a document and you want to no longer unpublish it */
  'action.revert-unpublish-actions': 'Vrátit zrušení publikování při vydání',
  /** Text for the review changes button in release tool */
  'action.review': 'Zkontrolovat změny',
  /** Action text for scheduling a release */
  'action.schedule': 'Naplánovat release...',
  /** Action text for scheduling unpublish of a draft document */
  'action.schedule-unpublish': 'Naplánovat zrušení publikování',
  /** Tooltip text for when schedule unpublish is disabled because document is not published */
  'action.schedule-unpublish.disabled.not-published':
    'Dokument musí být publikován, aby bylo možné naplánovat jeho zrušení publikování',
  /** Label for unarchiving a release */
  'action.unarchive': 'Obnovit release z archivu',
  /** Action text for unpublishing a document in a release in the context menu */
  'action.unpublish': 'Zrušit publikování',
  /** Action message for scheduling an unpublished of a document  */
  'action.unpublish-doc-actions': 'Zrušit publikování při vydání',
  /** Action text for unscheduling a release */
  'action.unschedule': 'Zrušit plánování vydání',

  /** Text for the summary button in release tool */
  'actions.summary': 'Souhrn',

  /* The text for the activity event when a document is added to a release */
  'activity.event.add-document': 'Přidána verze dokumentu',
  /* The text for the activity event when the release is archived */
  'activity.event.archive': 'Vydání <strong>{{releaseTitle}}</strong> bylo archivováno',
  /* The text for the activity event when the release is created */
  'activity.event.create':
    'Vydání <strong>{{releaseTitle}}</strong> bylo vytvořeno <ScheduleTarget>s cílem </ScheduleTarget>',
  /* The text for the activity event when a document is removed from a release */
  'activity.event.discard-document': 'Verze dokumentu byla zahozena',
  'activity.event.edit': 'Čas vydání nastaven na <ScheduleTarget></ScheduleTarget>',
  /**The text to display in the changes when the release type changes to asap */
  'activity.event.edit-time-asap': 'Co nejdříve',
  /**The text to display in the changes when the release type changes to undecided */
  'activity.event.edit-time-undecided': 'Nerozhodnuto',
  /* The text for the activity event when the release is published */
  'activity.event.publish': 'Vydání <strong>{{releaseTitle}}</strong> bylo publikováno',
  /* The text for the activity event when the release is scheduled */
  'activity.event.schedule': 'Označeno jako naplánované',
  /** The text for the activity event when the release is unarchived */
  'activity.event.unarchive': 'Vydání <strong>{{releaseTitle}}</strong> bylo obnoveno z archivu',
  /** The text for the activity event when the release is unscheduled */
  'activity.event.unschedule': 'Označeno jako nenaplánované',
  /** The loading text for when releases are loading */
  'activity.panel.error': 'Při načítání aktivity vydání došlo k chybě',
  /** The loading text for when releases are loading */
  'activity.panel.loading': 'Načítání aktivity vydání',
  /** The title for the activity panel shown in the releases detail screen */
  'activity.panel.title': 'Aktivita',

  /** Label for the button to proceed with archiving a release */
  'archive-dialog.confirm-archive-button': 'Ano, archivovat vydání',
  /** Description for the dialog confirming the archive of a release with one document */
  'archive-dialog.confirm-archive-description_one': 'Tato akce archivuje 1 verzi dokumentu.',
  /** Description for the dialog confirming the archive of a release with more than one document */
  'archive-dialog.confirm-archive-description_other':
    'Tato akce archivuje {{count}} verzí dokumentů.',
  /** Header for the dialog confirming the archive of a release */
  'archive-dialog.confirm-archive-header': 'Opravdu chcete toto vydání archivovat?',
  /** Title for the dialog confirming the archive of a release */
  'archive-dialog.confirm-archive-title':
    "Opravdu chcete archivovat vydání <strong>'{{title}}'</strong>?",

  /** Description for information card on a published or archived release to description retention effects */
  'archive-info.description':
    'Bude dostupné po dobu {{retentionDays}} dní a poté automaticky odstraněno dne {{removalDate}}. <Link>Zjistěte více o uchovávání dat</Link>.',
  /** Title for information card on a archived release */
  'archive-info.title': 'Toto vydání je archivováno',

  /** Banner text showing count of active scheduled drafts requiring confirmation with one draft */
  'banner.confirm-active-scheduled-drafts_one':
    'Je {{count}} Scheduled Draft, který vyžaduje potvrzení plánování',
  /** Banner text showing count of active scheduled drafts requiring confirmation with multiple drafts */
  'banner.confirm-active-scheduled-drafts_other':
    'Je {{count}} Scheduled Drafts, které vyžadují potvrzení plánování',
  /** Button text for confirming scheduling of active drafts */
  'banner.confirm-active-scheduled-drafts.button': 'Obnovit plánování',
  /** Button text when confirming schedules from paused mode */
  'banner.confirm-active-scheduled-drafts.button-paused': 'Obnovit všechna plánování',
  /** Banner text shown when drafts mode is disabled but there are still scheduled drafts */
  'banner.drafts-mode-disabled':
    'Režim konceptů byl deaktivován, ale stále existují naplánované koncepty k publikování.',
  /** Banner text shown when navigating to a release that does not exist */
  'banner.release-not-found': 'Toto vydání nebylo nalezeno',
  /** Tooltip for the dismiss button in the release not found banner */
  'banner.release-not-found.dismiss': 'Zavřít',
  /** Banner text shown when scheduled drafts feature is disabled but there are still scheduled drafts */
  'banner.scheduled-drafts-disabled':
    'Scheduled drafts byly deaktivovány, ale stále existují naplánované koncepty k publikování.',

  /** Title for changes to published documents */
  'changes-published-docs.title': 'Změny publikovaných dokumentů',

  /** Dialog confirm button text for confirming all scheduled drafts */
  'confirm-active-scheduled-drafts-dialog.confirm-button': 'Potvrdit plánování',
  /** Dialog description for confirming active scheduled drafts */
  'confirm-active-scheduled-drafts-dialog.description':
    'Naplánujte všechny pozastavené Scheduled Drafts na jejich zamýšlená data publikování',
  /** Dialog warning when some scheduled drafts have past dates */
  'confirm-active-scheduled-drafts-dialog.past-dates-warning':
    'Některé z těchto Scheduled Drafts jsou naplánovány na minulá data. Potvrzením plánování dojde k okamžitému publikování těchto verzí dokumentů.',
  /** Dialog title for confirming active scheduled drafts */
  'confirm-active-scheduled-drafts-dialog.title': 'Obnovit Scheduled Drafts',

  /** Suffix for when a release is a copy of another release */
  'copy-suffix': 'Kopie',

  /** Confirm button text for overriding existing draft */
  'copy-to-draft-dialog.confirm-button': 'Ano, přepsat koncept',
  /** Description for dialog when copying version to draft that already exists */
  'copy-to-draft-dialog.description':
    'Koncept tohoto dokumentu již existuje. Zkopírujte aktuální verzi do konceptu a přepište stávající verzi konceptu.',
  /** Title for dialog when copying version to draft that already exists */
  'copy-to-draft-dialog.title': 'Verze konceptu již existuje',

  /** Text for when a release / document was created */
  created: 'Vytvořeno <RelativeTime/>',

  /** Activity inspector button text */
  'dashboard.details.activity': 'Aktivita',
  /** Text for the releases detail screen in the pin release button. */
  'dashboard.details.pin-release': 'Připnout vydání do studia',
  /** Text for the releases detail screen when a release was published ASAP */
  'dashboard.details.published-asap': 'Publikováno',
  /** Text for the releases detail screen when a release was published from scheduling */
  'dashboard.details.published-on': 'Publikováno dne {{date}}',
  /** Text for the releases detail screen in the unpin release button. */
  'dashboard.details.unpin-release': 'Odepnout vydání ze studia',

  /** Label for the button to proceed deleting a release */
  'delete-dialog.confirm-delete-button': 'Ano, smazat vydání',
  /** Description for the dialog confirming the deleting of a release with one document */
  'delete-dialog.confirm-delete-description_one': 'Tímto smažete 1 verzi dokumentu.',
  /** Description for the dialog confirming the deleting of a release with more than one document */
  'delete-dialog.confirm-delete-description_other': 'Tímto se odstraní {{count}} verzí dokumentů.',
  /** Header for deleting a release dialog */
  'delete-dialog.confirm-delete.header': 'Opravdu chcete smazat toto vydání?',

  /** Label when a release has been deleted by a different user */
  'deleted-release': "Vydání '<strong>{{title}}</strong>' bylo smazáno",

  /** Text for when there's no changes in a release diff */
  'diff.list-empty': 'Seznam změn je prázdný, viz dokument',
  /** Text for when there's no changes in a release diff */
  'diff.no-changes': 'Žádné změny',

  /** Description for discarding a draft of a document dialog */
  'discard-version-dialog.description-draft':
    'Tímto se trvale odstraní všechny změny provedené v tomto dokumentu. Tuto akci nelze vrátit zpět.',
  /** Description for discarding a version of a document dialog */
  'discard-version-dialog.description-release':
    "Tímto se trvale odstraní všechny změny provedené v tomto dokumentu v rámci vydání '<strong>{{releaseTitle}}</strong>'. Tuto akci nelze vrátit zpět.",
  /** Title for dialog for discarding a draft of a document */
  'discard-version-dialog.header-draft': 'Zahodit koncept?',
  /** Header for discarding a version from a release of a document dialog */
  'discard-version-dialog.header-release':
    "Odebrat dokument z vydání '<strong>{{releaseTitle}}</strong>'?",
  /** Title for dialog for discarding a draft of a document */
  'discard-version-dialog.title-draft': 'Zahodit koncept',
  /** Title for dialog for discarding a version of a document */
  'discard-version-dialog.title-release': 'Odebrat z vydání',

  /** Label for when a document in a release has a single validation warning */
  'document-validation.error_one': '{{count}} chyba ověření',
  /** Label for when a document in a release has multiple validation warnings */
  'document-validation.error_other': '{{count}} chyb ověření',

  /** Label for the button to proceed with duplicating a release */
  'duplicate-dialog.confirm-duplicate-button': 'Ano, duplikovat vydání',
  /** Description for the dialog confirming the duplicate of a release with one document */
  'duplicate-dialog.confirm-duplicate-description_one':
    'Tímto se duplikuje vydání a 1 verze dokumentu.',
  /** Description for the dialog confirming the duplicate of a release with more than one document */
  'duplicate-dialog.confirm-duplicate-description_other':
    'Tímto se duplikuje vydání a {{count}} verzí dokumentů.',
  /** Header for the dialog confirming the duplicate of a release */
  'duplicate-dialog.confirm-duplicate-header': 'Opravdu chcete duplikovat toto vydání?',

  /** Title text displayed for technical error details */
  'error-details-title': 'Podrobnosti chyby',

  /** Title text when error during release update */
  'failed-edit-title': 'Uložení změn se nezdařilo',

  /** Title text displayed for releases that failed to publish  */
  'failed-publish-title': 'Publikování se nezdařilo',

  /** Title text displayed for releases that failed to schedule  */
  'failed-schedule-title': 'Plánování se nezdařilo',

  /** Filter tab label for all documents */
  'filter-tab.all': 'Vše',
  /** Filter tab label for documents with validation errors */
  'filter-tab.errors': 'Chyby',

  /**The text that will be shown in the footer to indicate the time the release was archived */
  'footer.status.archived': 'Archivováno',
  /**The text that will be shown in the footer to indicate the time the release was created */
  'footer.status.created': 'Vytvořeno',
  /**The text that will be shown in the footer to indicate the time the release was created */
  'footer.status.edited': 'Upraveno',
  /**The text that will be shown in the footer to indicate the time the release was published */
  'footer.status.published': 'Publikováno',
  /**The text that will be shown in the footer to indicate the time the release was unarchived */
  'footer.status.unarchived': 'Odarchivováno',

  /** Label text for the loading state whilst release is being loaded */
  'loading-release': 'Načítání vydání',

  /** Text for when documents of a release are loading */
  'loading-release-documents': 'Načítání dokumentů',
  /** Description text for when loading documents on a release failed */
  'loading-release-documents.error.description':
    'Nepodařilo se načíst dokumenty pro toto vydání. Zkuste to prosím znovu později.',
  /** Title text for when loading documents on a release failed */
  'loading-release-documents.error.title': 'Něco se pokazilo',

  /** Label for title of actions for "when releasing" */
  'menu.group.when-releasing': 'Při vydávání',
  /** Label for the release menu */
  'menu.label': 'Nabídka vydání',
  /** Tooltip for the release menu */
  'menu.tooltip': 'Akce',

  /** Text for when no archived releases are found */
  'no-archived-release': 'Žádná archivovaná vydání',

  /** Tooltip text when there are no paused scheduled drafts */
  'no-paused-release': 'Žádné pozastavené naplánované koncepty',

  /** Text for when no releases are found */
  'no-releases': 'Žádná vydání',

  /** Text for when no scheduled drafts are found */
  'no-scheduled-drafts': 'Žádné naplánované koncepty',

  /** Text for the button name for the release tool */
  'overview.action.documentation': 'Dokumentace',
  /** Tooltip for the calendar button in the release overview */
  'overview.calendar.tooltip': 'Zobrazit kalendář',
  /** Description for the release tool */
  'overview.description':
    'Vydání jsou kolekce změn dokumentů, které lze společně spravovat, plánovat a vracet zpět.',
  /** Text for the placeholder in the search release input  */
  'overview.search-releases-placeholder': 'Hledat vydání',
  /** Title for the release tool */
  'overview.title': 'Vydání',

  /** Tooltip text for releases that have passed their intended publish date */
  'passed-intended-publish-date': 'Toto vydání překročilo zamýšlené datum publikování',

  /** Tooltip text for scheduled drafts that have passed their intended publish date */
  'passed-intended-publish-date-draft': 'Tento koncept překročil zamýšlené datum publikování',

  /** Description for when a user doesn't have publish or schedule releases */
  'permission-missing-description':
    'Vaše role aktuálně omezuje, co můžete v tomto vydání vidět. Toto vydání nelze publikovat ani naplánovat.',

  /** Text for when a user doesn't have publish or schedule releases */
  'permission-missing-title': 'Omezený přístup',

  /** Tooltip label when the user doesn't have permission to archive release */
  'permissions.error.archive': 'Nemáte oprávnění k archivaci tohoto vydání',
  /** Tooltip label when the user doesn't have permission to delete release */
  'permissions.error.delete': 'Nemáte oprávnění k odstranění tohoto vydání',
  /** Tooltip label when the user doesn't have permission for discarding a version */
  'permissions.error.discard-version': 'Nemáte oprávnění k zahození této verze',
  /** Tooltip label when the user doesn't have permission to duplicate release */
  'permissions.error.duplicate': 'Nemáte oprávnění k duplikování tohoto release',
  /** Tooltip label when the user doesn't have permission to unarchive release */
  'permissions.error.unarchive': 'Nemáte oprávnění k obnovení tohoto release z archivu',
  /** Tooltip label when the user doesn't have permission for unpublishing a document */
  'permissions.error.unpublish': 'Nemáte oprávnění k zrušení publikování tohoto dokumentu',

  /** Tooltip text for when one user is editing a document in a release */
  'presence.tooltip.one':
    '{{displayName}} právě upravuje tento dokument v release „{{releaseTitle}}"',

  /** Tooltip text for publish release action when there are no documents */
  'publish-action.validation.no-documents': 'Nejsou žádné dokumenty k publikování',

  /** Description for the dialog confirming the publish of a release with one document */
  'publish-dialog.confirm-publish-description_one':
    "Release '<strong>{{title}}</strong>' a jeho dokument budou publikovány.",
  /** Description for the dialog confirming the publish of a release with multiple documents */
  'publish-dialog.confirm-publish-description_other':
    "Release '<strong>{{title}}</strong>' a jeho {{releaseDocumentsLength}} dokumentů bude publikováno.",
  /** Title for the dialog confirming the publish of a release */
  'publish-dialog.confirm-publish.title':
    'Opravdu chcete publikovat release a všechny verze dokumentů?',
  /** Label for when documents in release have validation errors */
  'publish-dialog.validation.error': 'Některé dokumenty obsahují chyby ověření',
  /** Label for when documents are being validated */
  'publish-dialog.validation.loading': 'Ověřování dokumentů...',
  /** Label for the button when the user doesn't have permissions to publish a release */
  'publish-dialog.validation.no-permission': 'Nemáte oprávnění k publikování',

  /** Title for information card on a published release */
  'publish-info.title': 'Tento release byl úspěšně publikován.',

  /** Placeholder title for a release with no title */
  'release-placeholder.title': 'Bez názvu',

  /** Description for the dialog confirming the revert of a release with multiple documents */
  'revert-dialog.confirm-revert-description_one':
    'Tato akce vrátí {{releaseDocumentsLength}} verzi dokumentu.',
  /** Description for the dialog confirming the revert of a release with multiple documents */
  'revert-dialog.confirm-revert-description_other':
    'Tato akce vrátí {{releaseDocumentsLength}} verzí dokumentů.',
  /** Checkbox label to confirm whether to create a staged release for revert or immediately revert */
  'revert-dialog.confirm-revert.stage-revert-checkbox-label': 'Okamžitě vrátit release',
  /** Title for the dialog confirming the revert of a release */
  'revert-dialog.confirm-revert.title': 'Opravdu chcete vrátit release „{{title}}"?',
  /** Warning card text for when immediately revert a release with history */
  'revert-dialog.confirm-revert.warning-card':
    'Po publikování byly v dokumentech tohoto release provedeny změny. Vrácením tyto změny přepíšete.',

  /** Description of a reverted release */
  'revert-release.description': 'Vrátit změny verzí dokumentů v „{{title}}".',
  /** Title of a reverted release */
  'revert-release.title': 'Vracení „{{title}}"',

  /** Description for the review changes button in release tool */
  'review.description': 'Přidejte dokumenty do tohoto release pro kontrolu změn',
  /** Text for when a document is edited */
  'review.edited': 'Upraveno <RelativeTime/>',

  /** Schedule release button tooltip when there are no documents to schedule */
  'schedule-action.validation.no-documents': 'Nejsou žádné dokumenty k naplánování',

  /** Schedule release button tooltip when the release is already scheduled */
  'schedule-button-tooltip.already-scheduled': 'Tento release je již naplánován',
  /** Schedule release button tooltip when there are validation errors */
  'schedule-button-tooltip.validation.error': 'Některé dokumenty mají chyby ověření',
  /** Schedule release button tooltip when validation is loading */
  'schedule-button-tooltip.validation.loading': 'Ověřování dokumentů...',
  /** Schedule release button tooltip when user has no permissions to schedule */
  'schedule-button-tooltip.validation.no-permission': 'Nemáte oprávnění k naplánování',

  /** Title of unschedule release dialog */
  'schedule-button.tooltip': 'Opravdu chcete zrušit naplánování vydání?',

  /** Description for the confirm button for scheduling a release */
  'schedule-dialog.confirm-button': 'Ano, naplánovat',
  /** Description shown in unschedule relaease dialog */
  'schedule-dialog.confirm-description_one':
    "Vydání '<strong>{{title}}</strong>' a jeho dokument budou zveřejněny ve vybraný datum.",
  /** Description for the dialog confirming the publish of a release with multiple documents */
  'schedule-dialog.confirm-description_other':
    'Vydání <strong>{{title}}</strong> a jeho {{count}} verzí dokumentů bude naplánováno.',
  /** Title for unschedule release dialog */
  'schedule-dialog.confirm-title': 'Naplánovat vydání',
  /** Description for warning that the published schedule time is in the past */
  'schedule-dialog.publish-date-in-past-warning': 'Naplánujte na budoucí čas a datum.',
  /** Label for date picker when scheduling a release */
  'schedule-dialog.select-publish-date-label': 'Naplánovat na',

  /** Confirm button text for the schedule unpublish dialog */
  'schedule-unpublish-dialog.confirm': 'Naplánovat zrušení publikace',
  /** Description for the schedule unpublish dialog */
  'schedule-unpublish-dialog.description': 'Vyberte, kdy má být tento dokument zrušen z publikace.',
  /** Header for the schedule unpublish dialog */
  'schedule-unpublish-dialog.header': 'Naplánovat koncept pro zrušení publikace',

  /** Placeholder for search of documents in a release */
  'search-documents-placeholder': 'Hledat dokumenty',

  /** Text for when the release has no errors found */
  'summary.all-documents-errors-found': 'Všechny dokumenty ověřeny, nalezeny problémy',
  /** Text for when the release has validated all documents */
  'summary.all-documents-validated': 'Všechny dokumenty ověřeny, žádné problémy nenalezeny',
  /** Text for when the release was created */
  'summary.created': 'Vytvořeno <RelativeTime/>',
  /** Text for when the release is composed of one document */
  'summary.document-count_one': '{{count}} dokument',
  /** Text for when the release is composed of multiple documents */
  'summary.document-count_other': '{{count}} dokumentů',
  /** Text for when the release has some errors found */
  'summary.errors-found':
    'Chcete-li publikovat nebo naplánovat vydání, vyřešte prosím problémy nalezené v dokumentech',
  /** Text for when the release has no documents */
  'summary.no-documents': 'Žádné dokumenty',
  /** Description for the empty state when a cardinality-one release has no documents */
  'summary.no-documents-cardinality-one.description':
    'Tento naplánovaný koncept neobsahuje žádný dokument. Mohl být odstraněn.',
  /** Title for the empty state when a cardinality-one release has no documents */
  'summary.no-documents-cardinality-one.title': 'V tomto vydání není žádný dokument',
  /** Text for when the release has not published */
  'summary.not-published': 'Nepublikováno',
  /** Text for when the release was published */
  'summary.published': 'Publikováno <RelativeTime/>',
  /** Text for when the release has validated documents */
  'summary.validated-documents': '{{validatedCount}} z {{totalCount}} dokumentů ověřeno',
  /** Text for validation loading indicator */
  'summary.validating-documents': 'Ověřování dokumentů: {{validatedCount}} z {{totalCount}}',

  /** add action type that will be shown in the table*/
  'table-body.action.add': 'Přidat',
  /** Change action type that will be shown in the table*/
  'table-body.action.change': 'Změnit',
  /** Change action type that will be shown in the table*/
  'table-body.action.unpublish': 'Zrušit publikování',

  /** Header for the document table in the release tool - action */
  'table-header.action': 'Akce',
  /** Header for the document table in the release tool - Archived */
  'table-header.archivedAt': 'Archivováno',
  /** Header for the document table in the release tool - contributors */
  'table-header.contributors': 'Přispěvatelé',
  /** Header for the document table in the release tool - created by */
  'table-header.created-by': 'Vytvořil',
  /** Header for the document table in the release tool - document preview */
  'table-header.document': 'Dokument',
  /** Header for the document table in the release tool - title */
  'table-header.documents': 'Dokumenty',
  /** Header for the document table in the release tool - edited */
  'table-header.edited': 'Upraveno',
  /** Header for the paused scheduled drafts table - intended for */
  'table-header.intended-for': 'Určeno pro',
  /** Header for the document table in the release tool - Published */
  'table-header.published-at': 'Publikováno',
  /** Header for the document table in the release tool - Published */
  'table-header.publishedAt': 'Publikováno',
  /** Header for the scheduled drafts document table in the release tool - published at */
  'table-header.scheduled-draft.published-at': 'Publikováno dne',
  /** Header for the scheduled drafts document table in the release tool - scheduled for */
  'table-header.scheduled-for': 'Naplánováno na',
  /** Header for the document table in the release tool - time */
  'table-header.time': 'Čas',
  /** Header for the  document table in the release tool - release title */
  'table-header.title': 'Release',
  /** Header for the document table in the release tool - type */
  'table-header.type': 'Typ',
  /** Header for the document table in the release tool - when */
  'table-header.when': 'Kdy',

  /** Text for the release time label for scheduled releases  which has not been scheduled yet*/
  'time.estimated': 'Odhadováno',
  /** Text for the release time label for scheduled releases  which has been scheduled*/
  'time.scheduled': 'Naplánováno',

  /** Text for toast when release failed to archive */
  'toast.archive.error': "Archivování '<strong>{{title}}</strong>' se nezdařilo: {{error}}",
  /** Toast error message when bulk scheduling of active drafts fails */
  'toast.confirm-active-scheduled-drafts.error': 'Naplánování konceptů se nezdařilo: {{error}}',
  /** Toast message after copying release ID */
  'toast.copy-release-id.success': 'ID vydání bylo zkopírováno do schránky',
  /** Toast message after copying release link */
  'toast.copy-release-link.success': 'Odkaz na vydání byl zkopírován do schránky',
  /** Toast message after copying release title */
  'toast.copy-release-title.success': 'Název vydání byl zkopírován do schránky',
  /** Description for toast when creating new version of document in release failed */
  'toast.create-version.error': 'Nepodařilo se přidat dokument do vydání: {{error}}',
  /** Description for toast when release deletion failed */
  'toast.delete.error': "Nepodařilo se smazat '<strong>{{title}}</strong>': {{error}}",
  /** Description for toast when release is successfully deleted */
  'toast.delete.success': "Vydání '<strong>{{title}}</strong>' bylo úspěšně smazáno",
  /** Description for toast when release duplication failed */
  'toast.duplicate.error': "Nepodařilo se duplikovat '<strong>{{title}}</strong>': {{error}}",
  /** Description for toast when release is successfully duplicated */
  'toast.duplicate.success': "Vydání '<strong>{{title}}</strong>' bylo duplikováno. <Link/>",
  /** Link text for toast link to the duplicated release */
  'toast.duplicate.success-link': 'Zobrazit duplikované vydání',
  /** Text for toast when release has been reverted immediately */
  'toast.immediate-revert.success': "Vydání '{{title}}' bylo úspěšně vráceno",
  /** Text for toast when release failed to publish */
  'toast.publish.error': "Nepodařilo se publikovat '<strong>{{title}}</strong>': {{error}}",
  /** Text for toast when release has reverted release successfully staged */
  'toast.revert-stage.success': "Vydání pro vrácení '{{title}}' bylo úspěšně vytvořeno. <Link/>",
  /** Link text for toast link to the generated revert release */
  'toast.revert-stage.success-link': 'Zobrazit vydání pro vrácení',
  /** Text for toast when release failed to revert */
  'toast.revert.error': 'Nepodařilo se vrátit vydání: {{error}}',
  /** Text for toast when release failed to schedule */
  'toast.schedule.error': "Nepodařilo se naplánovat '<strong>{{title}}</strong>': {{error}}",
  /** Text for toast when release has been scheduled */
  'toast.schedule.success': "Vydání '<strong>{{title}}</strong>' bylo naplánováno.",
  /** Text for toast when release failed to unarchive */
  'toast.unarchive.error':
    "Nepodařilo se obnovit z archivu '<strong>{{title}}</strong>': {{error}}",
  /** Text for toast when release failed to unschedule */
  'toast.unschedule.error':
    "Nepodařilo se zrušit plánování '<strong>{{title}}</strong>': {{error}}",

  /** Text for tooltip when a release has been scheduled */
  'type-picker.tooltip.scheduled': 'Vydání je naplánováno, zrušte plánování pro změnu typu',

  /** Text action in unpublish dialog to cancel */
  'unpublish-dialog.action.cancel': 'Zrušit',
  /** Text action in unpublish dialog to unpublish */
  'unpublish-dialog.action.unpublish': 'Ano, zrušit publikování při vydání',
  /** Description for unpublish dialog, explaining that all changes made to this document will be lost */
  'unpublish-dialog.description.lost-changes':
    'Veškeré změny provedené v této verzi dokumentu budou ztraceny.',
  /** Description for the unpublish dialog, explaining that it will create a draft if no draft exists at time of release */
  'unpublish-dialog.description.to-draft':
    'Toto zruší publikování dokumentu jako součást vydání <Label>{{title}}</Label> a vytvoří koncept, pokud v době vydání žádný neexistuje.',
  /** Title for the dialog confirming the unpublish of a release */
  'unpublish-dialog.header': 'Opravdu chcete zrušit publikování tohoto dokumentu při vydání?',

  /** Text for when a document is unpublished */
  'unpublish.already-unpublished': 'Tento dokument je již nepublikovaný.',
  /** Tooltip label for when a document is unpublished */
  'unpublish.no-published-version': 'Neexistuje žádná publikovaná verze tohoto dokumentu.',

  /** Description shown in unschedule relaease dialog */
  'unschedule-dialog.confirm-description': 'Vydání již nebude publikováno v naplánovaném termínu.',
  /** Title for unschedule release dialog */
  'unschedule-dialog.confirm-title': 'Opravdu chcete zrušit plánování vydání?',
})
