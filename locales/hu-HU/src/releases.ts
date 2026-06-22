import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Action text for adding a document to release */
  'action.add-document': 'Dokumentum hozzáadása',
  /** Action text for archiving a release */
  'action.archive': 'Release archiválása',
  /** Tooltip for when the archive release action is disabled due to release being scheduled  */
  'action.archive.tooltip': 'A release archiválásához törölje az ütemezést',
  /** Action text for showing the archived releases */
  'action.archived': 'Archivált',
  /** Menu item label for copying release ID */
  'action.copy-release-id.label': 'Release azonosítójának másolása',
  /** Menu item label for copying release URL */
  'action.copy-release-link.label': 'Release URL másolása',
  /** Menu item label for copying release title */
  'action.copy-release-title.label': 'Release címének másolása',
  /** Tooltip for copy release actions button */
  'action.copy-release.label': 'Másolás',
  /** Action text for staging a new revert release */
  'action.create-revert-release': 'Új release létrehozása',
  /** Action text for deleting a release */
  'action.delete-release': 'Release törlése',
  /** Menu item label for showing scheduled drafts */
  'action.drafts': 'Ütemezett piszkozatok',
  /** Action text for duplicating a release */
  'action.duplicate-release': 'Release duplikálása',
  /** Action text for editing a release */
  'action.edit': 'Release szerkesztése',
  /** Action text for reverting a release immediately without staging changes */
  'action.immediate-revert-release': 'Visszaállítás most',
  /** Action text for opening a release */
  'action.open': 'Aktív',
  /** Action text for showing the paused scheduled drafts */
  'action.paused': 'Szüneteltetve',
  /** Action text for publishing all documents in a release (and the release itself) */
  'action.publish-all-documents': 'Release futtatása',
  /** Menu item label for showing releases (multi-document releases) */
  'action.releases': 'Release-ek',
  /** Action text for reverting a release */
  'action.revert': 'Release visszaállítása',
  /** Action message for when document is scheduled for unpublishing a document and you want to no longer unpublish it */
  'action.revert-unpublish-actions': 'Közzétételvisszavonás visszaállítása a release során',
  /** Text for the review changes button in release tool */
  'action.review': 'Változtatások áttekintése',
  /** Action text for scheduling a release */
  'action.schedule': 'Release ütemezése...',
  /** Action text for scheduling unpublish of a draft document */
  'action.schedule-unpublish': 'Közzétételvisszavonás ütemezése',
  /** Tooltip text for when schedule unpublish is disabled because document is not published */
  'action.schedule-unpublish.disabled.not-published':
    'A dokumentumnak közzétettnek kell lennie a közzétételvisszavonás ütemezéséhez',
  /** Label for unarchiving a release */
  'action.unarchive': 'Release archiválásának visszavonása',
  /** Action text for unpublishing a document in a release in the context menu */
  'action.unpublish': 'Közzététel visszavonása',
  /** Action message for scheduling an unpublished of a document  */
  'action.unpublish-doc-actions': 'Közzététel visszavonása a kiadáskor',
  /** Action text for unscheduling a release */
  'action.unschedule': 'Kiadás ütemezésének törlése',

  /** Text for the summary button in release tool */
  'actions.summary': 'Összefoglaló',

  /* The text for the activity event when a document is added to a release */
  'activity.event.add-document': 'Dokumentumverzió hozzáadva',
  /* The text for the activity event when the release is archived */
  'activity.event.archive': 'A <strong>{{releaseTitle}}</strong> kiadás archiválva',
  /* The text for the activity event when the release is created */
  'activity.event.create':
    'A <strong>{{releaseTitle}}</strong> kiadás létrehozva <ScheduleTarget>célozva </ScheduleTarget>',
  /* The text for the activity event when a document is removed from a release */
  'activity.event.discard-document': 'Dokumentumverzió elvetve',
  'activity.event.edit': 'Kiadás időpontja beállítva: <ScheduleTarget></ScheduleTarget>',
  /**The text to display in the changes when the release type changes to asap */
  'activity.event.edit-time-asap': 'Amint lehetséges',
  /**The text to display in the changes when the release type changes to undecided */
  'activity.event.edit-time-undecided': 'Nem meghatározott',
  /* The text for the activity event when the release is published */
  'activity.event.publish': 'A <strong>{{releaseTitle}}</strong> kiadás közzétéve',
  /* The text for the activity event when the release is scheduled */
  'activity.event.schedule': 'Ütemezettként megjelölve',
  /** The text for the activity event when the release is unarchived */
  'activity.event.unarchive': 'A <strong>{{releaseTitle}}</strong> kiadás archiválása visszavonva',
  /** The text for the activity event when the release is unscheduled */
  'activity.event.unschedule': 'Nem ütemezettként megjelölve',
  /** The loading text for when releases are loading */
  'activity.panel.error': 'Hiba történt a kiadás aktivitásának lekérésekor',
  /** The loading text for when releases are loading */
  'activity.panel.loading': 'Kiadás aktivitásának betöltése',
  /** The title for the activity panel shown in the releases detail screen */
  'activity.panel.title': 'Aktivitás',

  /** Label for the button to proceed with archiving a release */
  'archive-dialog.confirm-archive-button': 'Igen, kiadás archiválása',
  /** Description for the dialog confirming the archive of a release with one document */
  'archive-dialog.confirm-archive-description_one': 'Ez 1 dokumentumverziót fog archiválni.',
  /** Description for the dialog confirming the archive of a release with more than one document */
  'archive-dialog.confirm-archive-description_other':
    'Ez {{count}} dokumentumverziót fog archiválni.',
  /** Header for the dialog confirming the archive of a release */
  'archive-dialog.confirm-archive-header': 'Biztosan archiválni szeretné ezt a kiadást?',
  /** Title for the dialog confirming the archive of a release */
  'archive-dialog.confirm-archive-title':
    "Biztosan archiválni szeretné a <strong>'{{title}}'</strong> kiadást?",

  /** Description for information card on a published or archived release to description retention effects */
  'archive-info.description':
    '{{retentionDays}} napig lesz elérhető, majd automatikusan eltávolításra kerül {{removalDate}}-n. <Link>Tudjon meg többet a megőrzésről</Link>.',
  /** Title for information card on a archived release */
  'archive-info.title': 'Ez a kiadás archiválva van',

  /** Banner text showing count of active scheduled drafts requiring confirmation with one draft */
  'banner.confirm-active-scheduled-drafts_one':
    '{{count}} Ütemezett Vázlat van, amely ütemezési megerősítést igényel',
  /** Banner text showing count of active scheduled drafts requiring confirmation with multiple drafts */
  'banner.confirm-active-scheduled-drafts_other':
    '{{count}} Ütemezett Vázlat van, amelyek ütemezési megerősítést igényelnek',
  /** Button text for confirming scheduling of active drafts */
  'banner.confirm-active-scheduled-drafts.button': 'Ütemezés folytatása',
  /** Button text when confirming schedules from paused mode */
  'banner.confirm-active-scheduled-drafts.button-paused': 'Összes ütemezés folytatása',
  /** Banner text shown when drafts mode is disabled but there are still scheduled drafts */
  'banner.drafts-mode-disabled':
    'A vázlat mód le lett tiltva, de még vannak közzétételre váró ütemezett vázlatok.',
  /** Banner text shown when navigating to a release that does not exist */
  'banner.release-not-found': 'Ez a kiadás nem található',
  /** Tooltip for the dismiss button in the release not found banner */
  'banner.release-not-found.dismiss': 'Elvetés',
  /** Banner text shown when scheduled drafts feature is disabled but there are still scheduled drafts */
  'banner.scheduled-drafts-disabled':
    'Az ütemezett vázlatok le lettek tiltva, de még vannak közzétételre váró ütemezett vázlatok.',

  /** Title for changes to published documents */
  'changes-published-docs.title': 'Változások a közzétett dokumentumokban',

  /** Dialog confirm button text for confirming all scheduled drafts */
  'confirm-active-scheduled-drafts-dialog.confirm-button': 'Ütemezések megerősítése',
  /** Dialog description for confirming active scheduled drafts */
  'confirm-active-scheduled-drafts-dialog.description':
    'Az összes szüneteltetett Ütemezett Vázlat ütemezése a tervezett közzétételi dátumokra',
  /** Dialog warning when some scheduled drafts have past dates */
  'confirm-active-scheduled-drafts-dialog.past-dates-warning':
    'Néhány Ütemezett Vázlat múltbeli dátumra van ütemezve. Az ütemezések megerősítése azonnal közzéteszi a dokumentumok ezen verzióit.',
  /** Dialog title for confirming active scheduled drafts */
  'confirm-active-scheduled-drafts-dialog.title': 'Ütemezett Vázlatok folytatása',

  /** Suffix for when a release is a copy of another release */
  'copy-suffix': 'Másolat',

  /** Confirm button text for overriding existing draft */
  'copy-to-draft-dialog.confirm-button': 'Igen, felülírom a vázlatot',
  /** Description for dialog when copying version to draft that already exists */
  'copy-to-draft-dialog.description':
    'Ennek a dokumentumnak már létezik egy vázlat verziója. Másolja az aktuális verziót a vázlatba, és írja felül a meglévő vázlat verziót.',
  /** Title for dialog when copying version to draft that already exists */
  'copy-to-draft-dialog.title': 'A vázlat verzió már létezik',

  /** Text for when a release / document was created */
  created: 'Létrehozva <RelativeTime/>',

  /** Activity inspector button text */
  'dashboard.details.activity': 'Aktivitás',
  /** Text for the releases detail screen in the pin release button. */
  'dashboard.details.pin-release': 'Kiadás rögzítése a stúdióhoz',
  /** Text for the releases detail screen when a release was published ASAP */
  'dashboard.details.published-asap': 'Közzétéve',
  /** Text for the releases detail screen when a release was published from scheduling */
  'dashboard.details.published-on': 'Közzétéve: {{date}}',
  /** Text for the releases detail screen in the unpin release button. */
  'dashboard.details.unpin-release': 'Kiadás rögzítésének feloldása a stúdióból',

  /** Label for the button to proceed deleting a release */
  'delete-dialog.confirm-delete-button': 'Igen, törlöm a kiadást',
  /** Description for the dialog confirming the deleting of a release with one document */
  'delete-dialog.confirm-delete-description_one': 'Ez 1 dokumentumverziót töröl.',
  /** Description for the dialog confirming the deleting of a release with more than one document */
  'delete-dialog.confirm-delete-description_other': 'Ez {{count}} dokumentumverziót fog törölni.',
  /** Header for deleting a release dialog */
  'delete-dialog.confirm-delete.header': 'Biztosan törölni szeretné ezt a kiadást?',

  /** Label when a release has been deleted by a different user */
  'deleted-release': "A '<strong>{{title}}</strong>' kiadás törölve lett",

  /** Text for when there's no changes in a release diff */
  'diff.list-empty': 'A változások listája üres, lásd a dokumentumot',
  /** Text for when there's no changes in a release diff */
  'diff.no-changes': 'Nincs változás',

  /** Description for discarding a draft of a document dialog */
  'discard-version-dialog.description-draft':
    'Ez véglegesen eltávolítja a dokumentumon végzett összes módosítást. Ez a művelet nem vonható vissza.',
  /** Description for discarding a version of a document dialog */
  'discard-version-dialog.description-release':
    "Ez véglegesen eltávolítja a dokumentumon a '<strong>{{releaseTitle}}</strong>' kiadáson belül végzett összes módosítást. Ez a művelet nem vonható vissza.",
  /** Title for dialog for discarding a draft of a document */
  'discard-version-dialog.header-draft': 'Elveti a piszkozatot?',
  /** Header for discarding a version from a release of a document dialog */
  'discard-version-dialog.header-release':
    "Eltávolítja a dokumentumot a '<strong>{{releaseTitle}}</strong>' kiadásból?",
  /** Title for dialog for discarding a draft of a document */
  'discard-version-dialog.title-draft': 'Piszkozat elvetése',
  /** Title for dialog for discarding a version of a document */
  'discard-version-dialog.title-release': 'Eltávolítás a kiadásból',

  /** Label for when a document in a release has a single validation warning */
  'document-validation.error_one': '{{count}} érvényesítési hiba',
  /** Label for when a document in a release has multiple validation warnings */
  'document-validation.error_other': '{{count}} érvényesítési hiba',

  /** Label for the button to proceed with duplicating a release */
  'duplicate-dialog.confirm-duplicate-button': 'Igen, kiadás duplikálása',
  /** Description for the dialog confirming the duplicate of a release with one document */
  'duplicate-dialog.confirm-duplicate-description_one':
    'Ez duplikálja a kiadást és az 1 dokumentumverziót.',
  /** Description for the dialog confirming the duplicate of a release with more than one document */
  'duplicate-dialog.confirm-duplicate-description_other':
    'Ez duplikálja a kiadást és a {{count}} dokumentumverziót.',
  /** Header for the dialog confirming the duplicate of a release */
  'duplicate-dialog.confirm-duplicate-header': 'Biztosan duplikálni szeretné ezt a kiadást?',

  /** Title text displayed for technical error details */
  'error-details-title': 'Hiba részletei',

  /** Title text when error during release update */
  'failed-edit-title': 'Nem sikerült menteni a módosításokat',

  /** Title text displayed for releases that failed to publish  */
  'failed-publish-title': 'Nem sikerült közzétenni',

  /** Title text displayed for releases that failed to schedule  */
  'failed-schedule-title': 'Nem sikerült ütemezni',

  /** Filter tab label for all documents */
  'filter-tab.all': 'Összes',
  /** Filter tab label for documents with validation errors */
  'filter-tab.errors': 'Hibák',

  /**The text that will be shown in the footer to indicate the time the release was archived */
  'footer.status.archived': 'Archiválva',
  /**The text that will be shown in the footer to indicate the time the release was created */
  'footer.status.created': 'Létrehozva',
  /**The text that will be shown in the footer to indicate the time the release was created */
  'footer.status.edited': 'Szerkesztve',
  /**The text that will be shown in the footer to indicate the time the release was published */
  'footer.status.published': 'Közzétéve',
  /**The text that will be shown in the footer to indicate the time the release was unarchived */
  'footer.status.unarchived': 'Archiválásból visszaállítva',

  /** Label text for the loading state whilst release is being loaded */
  'loading-release': 'Kiadás betöltése',

  /** Text for when documents of a release are loading */
  'loading-release-documents': 'Dokumentumok betöltése',
  /** Description text for when loading documents on a release failed */
  'loading-release-documents.error.description':
    'Nem sikerült betölteni a kiadáshoz tartozó dokumentumokat. Kérjük, próbálja meg később.',
  /** Title text for when loading documents on a release failed */
  'loading-release-documents.error.title': 'Valami hiba történt',

  /** Label for title of actions for "when releasing" */
  'menu.group.when-releasing': 'Kiadáskor',
  /** Label for the release menu */
  'menu.label': 'Kiadás menü',
  /** Tooltip for the release menu */
  'menu.tooltip': 'Műveletek',

  /** Text for when no archived releases are found */
  'no-archived-release': 'Nincsenek archivált kiadások',

  /** Tooltip text when there are no paused scheduled drafts */
  'no-paused-release': 'Nincsenek szüneteltetett ütemezett piszkozatok',

  /** Text for when no releases are found */
  'no-releases': 'Nincsenek kiadások',

  /** Text for when no scheduled drafts are found */
  'no-scheduled-drafts': 'Nincsenek ütemezett piszkozatok',

  /** Text for the button name for the release tool */
  'overview.action.documentation': 'Dokumentáció',
  /** Tooltip for the calendar button in the release overview */
  'overview.calendar.tooltip': 'Naptár megtekintése',
  /** Description for the release tool */
  'overview.description':
    'A kiadások dokumentummódosítások gyűjteményei, amelyek együttesen kezelhetők, ütemezhetők és visszaállíthatók.',
  /** Text for the placeholder in the search release input  */
  'overview.search-releases-placeholder': 'Kiadások keresése',
  /** Title for the release tool */
  'overview.title': 'Kiadások',

  /** Tooltip text for releases that have passed their intended publish date */
  'passed-intended-publish-date': 'Ez a kiadás túllépte a tervezett közzétételi dátumát',

  /** Tooltip text for scheduled drafts that have passed their intended publish date */
  'passed-intended-publish-date-draft': 'Ez a piszkozat túllépte a tervezett közzétételi dátumát',

  /** Description for when a user doesn't have publish or schedule releases */
  'permission-missing-description':
    'Az Ön szerepköre jelenleg korlátozza, hogy mit láthat ebben a kiadásban. Előfordulhat, hogy nem tudja közzétenni vagy ütemezni ezt a kiadást.',

  /** Text for when a user doesn't have publish or schedule releases */
  'permission-missing-title': 'Korlátozott hozzáférés',

  /** Tooltip label when the user doesn't have permission to archive release */
  'permissions.error.archive': 'Önnek nincs jogosultsága ennek a kiadásnak az archiválásához',
  /** Tooltip label when the user doesn't have permission to delete release */
  'permissions.error.delete': 'Önnek nincs jogosultsága ennek a kiadásnak a törléséhez',
  /** Tooltip label when the user doesn't have permission for discarding a version */
  'permissions.error.discard-version': 'Nincs jogosultsága elvetni ezt a verziót',
  /** Tooltip label when the user doesn't have permission to duplicate release */
  'permissions.error.duplicate': 'Nincs jogosultsága duplikálni ezt a release-t',
  /** Tooltip label when the user doesn't have permission to unarchive release */
  'permissions.error.unarchive':
    'Nincs jogosultsága archiválás visszavonásához ennél a release-nél',
  /** Tooltip label when the user doesn't have permission for unpublishing a document */
  'permissions.error.unpublish':
    'Nincs jogosultsága visszavonni ennek a dokumentumnak a közzétételét',

  /** Tooltip text for when one user is editing a document in a release */
  'presence.tooltip.one':
    '{{displayName}} éppen ezt a dokumentumot szerkeszti a „{{releaseTitle}}" release-ben',

  /** Tooltip text for publish release action when there are no documents */
  'publish-action.validation.no-documents': 'Nincsenek közzéteendő dokumentumok',

  /** Description for the dialog confirming the publish of a release with one document */
  'publish-dialog.confirm-publish-description_one':
    "A '<strong>{{title}}</strong>' release és a hozzá tartozó dokumentum közzé lesz téve.",
  /** Description for the dialog confirming the publish of a release with multiple documents */
  'publish-dialog.confirm-publish-description_other':
    "A '<strong>{{title}}</strong>' release és a hozzá tartozó {{releaseDocumentsLength}} dokumentum közzé lesz téve.",
  /** Title for the dialog confirming the publish of a release */
  'publish-dialog.confirm-publish.title':
    'Biztosan közzé szeretné tenni a release-t és az összes dokumentumverziót?',
  /** Label for when documents in release have validation errors */
  'publish-dialog.validation.error': 'Egyes dokumentumokban érvényesítési hibák vannak',
  /** Label for when documents are being validated */
  'publish-dialog.validation.loading': 'Dokumentumok érvényesítése...',
  /** Label for the button when the user doesn't have permissions to publish a release */
  'publish-dialog.validation.no-permission': 'Nincs jogosultsága a közzétételhez',

  /** Title for information card on a published release */
  'publish-info.title': 'Ez a release sikeresen közzé lett téve.',

  /** Placeholder title for a release with no title */
  'release-placeholder.title': 'Névtelen',

  /** Description for the dialog confirming the revert of a release with multiple documents */
  'revert-dialog.confirm-revert-description_one':
    'Ez visszaállítja {{releaseDocumentsLength}} dokumentumverziót.',
  /** Description for the dialog confirming the revert of a release with multiple documents */
  'revert-dialog.confirm-revert-description_other':
    'Ez visszaállítja {{releaseDocumentsLength}} dokumentumverziót.',
  /** Checkbox label to confirm whether to create a staged release for revert or immediately revert */
  'revert-dialog.confirm-revert.stage-revert-checkbox-label': 'A release azonnali visszaállítása',
  /** Title for the dialog confirming the revert of a release */
  'revert-dialog.confirm-revert.title':
    'Biztosan vissza szeretné állítani a „{{title}}" release-t?',
  /** Warning card text for when immediately revert a release with history */
  'revert-dialog.confirm-revert.warning-card':
    'A release dokumentumain a közzétételük után módosítások történtek. A visszaállítás felülírja ezeket a változtatásokat.',

  /** Description of a reverted release */
  'revert-release.description':
    'Dokumentumverziók módosításainak visszaállítása a következőben: „{{title}}".',
  /** Title of a reverted release */
  'revert-release.title': '„{{title}}" visszaállítása',

  /** Description for the review changes button in release tool */
  'review.description': 'Adjon dokumentumokat ehhez a release-hez a változtatások áttekintéséhez',
  /** Text for when a document is edited */
  'review.edited': 'Szerkesztve: <RelativeTime/>',

  /** Schedule release button tooltip when there are no documents to schedule */
  'schedule-action.validation.no-documents': 'Nincsenek ütemezendő dokumentumok',

  /** Schedule release button tooltip when the release is already scheduled */
  'schedule-button-tooltip.already-scheduled': 'Ez a release már ütemezve van',
  /** Schedule release button tooltip when there are validation errors */
  'schedule-button-tooltip.validation.error': 'Egyes dokumentumokban érvényesítési hibák vannak',
  /** Schedule release button tooltip when validation is loading */
  'schedule-button-tooltip.validation.loading': 'Dokumentumok érvényesítése...',
  /** Schedule release button tooltip when user has no permissions to schedule */
  'schedule-button-tooltip.validation.no-permission': 'Nincs jogosultsága az ütemezéshez',

  /** Title of unschedule release dialog */
  'schedule-button.tooltip': 'Biztosan törölni szeretné a kiadás ütemezését?',

  /** Description for the confirm button for scheduling a release */
  'schedule-dialog.confirm-button': 'Igen, ütemezés',
  /** Description shown in unschedule relaease dialog */
  'schedule-dialog.confirm-description_one':
    "A '<strong>{{title}}</strong>' kiadás és dokumentuma a kiválasztott időpontban kerül közzétételre.",
  /** Description for the dialog confirming the publish of a release with multiple documents */
  'schedule-dialog.confirm-description_other':
    'A <strong>{{title}}</strong> kiadás és annak {{count}} dokumentumverziója ütemezésre kerül.',
  /** Title for unschedule release dialog */
  'schedule-dialog.confirm-title': 'A kiadás ütemezése',
  /** Description for warning that the published schedule time is in the past */
  'schedule-dialog.publish-date-in-past-warning': 'Jövőbeli időpontra és dátumra ütemezzen.',
  /** Label for date picker when scheduling a release */
  'schedule-dialog.select-publish-date-label': 'Ütemezés időpontja',

  /** Confirm button text for the schedule unpublish dialog */
  'schedule-unpublish-dialog.confirm': 'Közzététel visszavonásának ütemezése',
  /** Description for the schedule unpublish dialog */
  'schedule-unpublish-dialog.description':
    'Válassza ki, mikor szüntesse meg a dokumentum közzétételét.',
  /** Header for the schedule unpublish dialog */
  'schedule-unpublish-dialog.header': 'Vázlat ütemezése a közzététel visszavonásához',

  /** Placeholder for search of documents in a release */
  'search-documents-placeholder': 'Dokumentumok keresése',

  /** Text for when the release has no errors found */
  'summary.all-documents-errors-found': 'Minden dokumentum érvényesítve, problémák találhatók',
  /** Text for when the release has validated all documents */
  'summary.all-documents-validated': 'Minden dokumentum érvényesítve, nem találhatók problémák',
  /** Text for when the release was created */
  'summary.created': 'Létrehozva <RelativeTime/>',
  /** Text for when the release is composed of one document */
  'summary.document-count_one': '{{count}} dokumentum',
  /** Text for when the release is composed of multiple documents */
  'summary.document-count_other': '{{count}} dokumentum',
  /** Text for when the release has some errors found */
  'summary.errors-found':
    'A kiadás közzétételéhez vagy ütemezéséhez kérjük, oldja meg a dokumentumokban talált problémákat',
  /** Text for when the release has no documents */
  'summary.no-documents': 'Nincsenek dokumentumok',
  /** Description for the empty state when a cardinality-one release has no documents */
  'summary.no-documents-cardinality-one.description':
    'Ez az ütemezett vázlat nem tartalmaz dokumentumot. Lehetséges, hogy eltávolításra került.',
  /** Title for the empty state when a cardinality-one release has no documents */
  'summary.no-documents-cardinality-one.title': 'Nincs dokumentum ebben a kiadásban',
  /** Text for when the release has not published */
  'summary.not-published': 'Nincs közzétéve',
  /** Text for when the release was published */
  'summary.published': 'Közzétéve <RelativeTime/>',
  /** Text for when the release has validated documents */
  'summary.validated-documents': '{{validatedCount}} / {{totalCount}} dokumentum érvényesítve',
  /** Text for validation loading indicator */
  'summary.validating-documents': 'Dokumentumok érvényesítése: {{validatedCount}} / {{totalCount}}',

  /** add action type that will be shown in the table*/
  'table-body.action.add': 'Hozzáadás',
  /** Change action type that will be shown in the table*/
  'table-body.action.change': 'Módosítás',
  /** Change action type that will be shown in the table*/
  'table-body.action.unpublish': 'Közzététel visszavonása',

  /** Header for the document table in the release tool - action */
  'table-header.action': 'Művelet',
  /** Header for the document table in the release tool - Archived */
  'table-header.archivedAt': 'Archiválva',
  /** Header for the document table in the release tool - contributors */
  'table-header.contributors': 'Közreműködők',
  /** Header for the document table in the release tool - created by */
  'table-header.created-by': 'Létrehozta',
  /** Header for the document table in the release tool - document preview */
  'table-header.document': 'Dokumentum',
  /** Header for the document table in the release tool - title */
  'table-header.documents': 'Dokumentumok',
  /** Header for the document table in the release tool - edited */
  'table-header.edited': 'Szerkesztve',
  /** Header for the paused scheduled drafts table - intended for */
  'table-header.intended-for': 'Szánva',
  /** Header for the document table in the release tool - Published */
  'table-header.published-at': 'Közzétéve',
  /** Header for the document table in the release tool - Published */
  'table-header.publishedAt': 'Közzétéve',
  /** Header for the scheduled drafts document table in the release tool - published at */
  'table-header.scheduled-draft.published-at': 'Közzétéve ekkor',
  /** Header for the scheduled drafts document table in the release tool - scheduled for */
  'table-header.scheduled-for': 'Ütemezve erre',
  /** Header for the document table in the release tool - time */
  'table-header.time': 'Idő',
  /** Header for the  document table in the release tool - release title */
  'table-header.title': 'Release',
  /** Header for the document table in the release tool - type */
  'table-header.type': 'Típus',
  /** Header for the document table in the release tool - when */
  'table-header.when': 'Mikor',

  /** Text for the release time label for scheduled releases  which has not been scheduled yet*/
  'time.estimated': 'Becsült',
  /** Text for the release time label for scheduled releases  which has been scheduled*/
  'time.scheduled': 'Ütemezett',

  /** Text for toast when release failed to archive */
  'toast.archive.error': "Nem sikerült archiválni: '<strong>{{title}}</strong>': {{error}}",
  /** Toast error message when bulk scheduling of active drafts fails */
  'toast.confirm-active-scheduled-drafts.error': 'Nem sikerült ütemezni a vázlatokat: {{error}}',
  /** Toast message after copying release ID */
  'toast.copy-release-id.success': 'A Release ID a vágólapra másolva',
  /** Toast message after copying release link */
  'toast.copy-release-link.success': 'A release link a vágólapra másolva',
  /** Toast message after copying release title */
  'toast.copy-release-title.success': 'A release címe a vágólapra másolva',
  /** Description for toast when creating new version of document in release failed */
  'toast.create-version.error': 'Nem sikerült hozzáadni a dokumentumot a release-hez: {{error}}',
  /** Description for toast when release deletion failed */
  'toast.delete.error': "Nem sikerült törölni: '<strong>{{title}}</strong>': {{error}}",
  /** Description for toast when release is successfully deleted */
  'toast.delete.success': "A '<strong>{{title}}</strong>' release sikeresen törölve lett",
  /** Description for toast when release duplication failed */
  'toast.duplicate.error': "Nem sikerült duplikálni: '<strong>{{title}}</strong>': {{error}}",
  /** Description for toast when release is successfully duplicated */
  'toast.duplicate.success': "A '<strong>{{title}}</strong>' release duplikálva lett. <Link/>",
  /** Link text for toast link to the duplicated release */
  'toast.duplicate.success-link': 'Duplikált release megtekintése',
  /** Text for toast when release has been reverted immediately */
  'toast.immediate-revert.success': "A '{{title}}' release sikeresen visszaállítva",
  /** Text for toast when release failed to publish */
  'toast.publish.error': "Nem sikerült közzétenni: '<strong>{{title}}</strong>': {{error}}",
  /** Text for toast when release has reverted release successfully staged */
  'toast.revert-stage.success':
    "A '{{title}}' visszaállítási release sikeresen létrehozva. <Link/>",
  /** Link text for toast link to the generated revert release */
  'toast.revert-stage.success-link': 'Visszaállítási release megtekintése',
  /** Text for toast when release failed to revert */
  'toast.revert.error': 'Nem sikerült visszaállítani a release-t: {{error}}',
  /** Text for toast when release failed to schedule */
  'toast.schedule.error': "Nem sikerült ütemezni: '<strong>{{title}}</strong>': {{error}}",
  /** Text for toast when release has been scheduled */
  'toast.schedule.success': "A '<strong>{{title}}</strong>' release ütemezve lett.",
  /** Text for toast when release failed to unarchive */
  'toast.unarchive.error':
    "Nem sikerült archiválásból visszaállítani: '<strong>{{title}}</strong>': {{error}}",
  /** Text for toast when release failed to unschedule */
  'toast.unschedule.error':
    "Nem sikerült az ütemezést törölni: '<strong>{{title}}</strong>': {{error}}",

  /** Text for tooltip when a release has been scheduled */
  'type-picker.tooltip.scheduled':
    'A release ütemezve van, törölje az ütemezést a típus módosításához',

  /** Text action in unpublish dialog to cancel */
  'unpublish-dialog.action.cancel': 'Mégse',
  /** Text action in unpublish dialog to unpublish */
  'unpublish-dialog.action.unpublish': 'Igen, közzététel visszavonása a kiadáskor',
  /** Description for unpublish dialog, explaining that all changes made to this document will be lost */
  'unpublish-dialog.description.lost-changes':
    'A dokumentum ezen verziójában végzett összes módosítás elvész.',
  /** Description for the unpublish dialog, explaining that it will create a draft if no draft exists at time of release */
  'unpublish-dialog.description.to-draft':
    'Ez a dokumentum közzétételét visszavonja a <Label>{{title}}</Label> release részeként, és létrehoz egy piszkozatot, ha a kiadás időpontjában nem létezik piszkozat.',
  /** Title for the dialog confirming the unpublish of a release */
  'unpublish-dialog.header':
    'Biztosan vissza szeretné vonni a dokumentum közzétételét a kiadáskor?',

  /** Text for when a document is unpublished */
  'unpublish.already-unpublished': 'Ez a dokumentum már vissza van vonva.',
  /** Tooltip label for when a document is unpublished */
  'unpublish.no-published-version': 'Ennek a dokumentumnak nincs közzétett verziója.',

  /** Description shown in unschedule relaease dialog */
  'unschedule-dialog.confirm-description':
    'A kiadás a továbbiakban nem kerül közzétételre az ütemezett időpontban.',
  /** Title for unschedule release dialog */
  'unschedule-dialog.confirm-title': 'Biztosan törölni szeretné a kiadás ütemezését?',
})
