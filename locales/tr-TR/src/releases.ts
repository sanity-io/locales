import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Action text for adding a document to release */
  'action.add-document': 'Belge ekle',
  /** Action text for archiving a release */
  'action.archive': 'Sürümü arşivle',
  /** Tooltip for when the archive release action is disabled due to release being scheduled  */
  'action.archive.tooltip': 'Arşivlemek için bu sürümün zamanlamasını kaldırın',
  /** Action text for showing the archived releases */
  'action.archived': 'Arşivlendi',
  /** Menu item label for copying release ID */
  'action.copy-release-id.label': 'Sürüm kimliğini kopyala',
  /** Menu item label for copying release URL */
  'action.copy-release-link.label': "Sürüm URL'sini kopyala",
  /** Menu item label for copying release title */
  'action.copy-release-title.label': 'Sürüm başlığını kopyala',
  /** Tooltip for copy release actions button */
  'action.copy-release.label': 'Kopyala',
  /** Action text for staging a new revert release */
  'action.create-revert-release': 'Yeni bir sürüm oluştur',
  /** Action text for deleting a release */
  'action.delete-release': 'Sürümü sil',
  /** Menu item label for showing scheduled drafts */
  'action.drafts': 'Zamanlanmış taslaklar',
  /** Action text for duplicating a release */
  'action.duplicate-release': 'Sürümü çoğalt',
  /** Action text for editing a release */
  'action.edit': 'Sürümü düzenle',
  /** Action text for reverting a release immediately without staging changes */
  'action.immediate-revert-release': 'Şimdi geri al',
  /** Action text for opening a release */
  'action.open': 'Aktif',
  /** Action text for showing the paused scheduled drafts */
  'action.paused': 'Duraklatıldı',
  /** Action text for publishing all documents in a release (and the release itself) */
  'action.publish-all-documents': 'Sürümü çalıştır',
  /** Menu item label for showing releases (multi-document releases) */
  'action.releases': 'Sürümler',
  /** Action text for reverting a release */
  'action.revert': 'Sürümü geri al',
  /** Action message for when document is scheduled for unpublishing a document and you want to no longer unpublish it */
  'action.revert-unpublish-actions': 'Yayımdan kaldırmayı sürüm sırasında geri al',
  /** Text for the review changes button in release tool */
  'action.review': 'Değişiklikleri incele',
  /** Action text for scheduling a release */
  'action.schedule': 'Sürümü zamanla...',
  /** Action text for scheduling unpublish of a draft document */
  'action.schedule-unpublish': 'Yayımdan kaldırmayı zamanla',
  /** Tooltip text for when schedule unpublish is disabled because document is not published */
  'action.schedule-unpublish.disabled.not-published':
    'Yayımdan kaldırmayı zamanlamak için belgenin yayımlanmış olması gerekir',
  /** Label for unarchiving a release */
  'action.unarchive': 'Sürümü arşivden çıkar',
  /** Action text for unpublishing a document in a release in the context menu */
  'action.unpublish': 'Yayından kaldır',
  /** Action message for scheduling an unpublished of a document  */
  'action.unpublish-doc-actions': 'Yayınlanırken kaldır',
  /** Action text for unscheduling a release */
  'action.unschedule': 'Yayın zamanlamasını iptal et',

  /** Text for the summary button in release tool */
  'actions.summary': 'Özet',

  /* The text for the activity event when a document is added to a release */
  'activity.event.add-document': 'Bir belge sürümü eklendi',
  /* The text for the activity event when the release is archived */
  'activity.event.archive': '<strong>{{releaseTitle}}</strong> yayını arşivlendi',
  /* The text for the activity event when the release is created */
  'activity.event.create':
    '<strong>{{releaseTitle}}</strong> yayını oluşturuldu <ScheduleTarget>hedef: </ScheduleTarget>',
  /* The text for the activity event when a document is removed from a release */
  'activity.event.discard-document': 'Bir belge sürümü silindi',
  'activity.event.edit': 'Yayın zamanı <ScheduleTarget></ScheduleTarget> olarak ayarlandı',
  /**The text to display in the changes when the release type changes to asap */
  'activity.event.edit-time-asap': 'En kısa sürede',
  /**The text to display in the changes when the release type changes to undecided */
  'activity.event.edit-time-undecided': 'Belirsiz',
  /* The text for the activity event when the release is published */
  'activity.event.publish': '<strong>{{releaseTitle}}</strong> yayını yayımlandı',
  /* The text for the activity event when the release is scheduled */
  'activity.event.schedule': 'Zamanlandı olarak işaretlendi',
  /** The text for the activity event when the release is unarchived */
  'activity.event.unarchive': '<strong>{{releaseTitle}}</strong> yayını arşivden çıkarıldı',
  /** The text for the activity event when the release is unscheduled */
  'activity.event.unschedule': 'Zamanlanmadı olarak işaretlendi',
  /** The loading text for when releases are loading */
  'activity.panel.error': 'Yayın etkinliği alınırken bir hata oluştu',
  /** The loading text for when releases are loading */
  'activity.panel.loading': 'Yayın etkinliği yükleniyor',
  /** The title for the activity panel shown in the releases detail screen */
  'activity.panel.title': 'Etkinlik',

  /** Label for the button to proceed with archiving a release */
  'archive-dialog.confirm-archive-button': 'Evet, yayını arşivle',
  /** Description for the dialog confirming the archive of a release with one document */
  'archive-dialog.confirm-archive-description_one': 'Bu işlem 1 belge sürümünü arşivleyecek.',
  /** Description for the dialog confirming the archive of a release with more than one document */
  'archive-dialog.confirm-archive-description_other':
    'Bu işlem {{count}} belge sürümünü arşivleyecek.',
  /** Header for the dialog confirming the archive of a release */
  'archive-dialog.confirm-archive-header': 'Bu yayını arşivlemek istediğinizden emin misiniz?',
  /** Title for the dialog confirming the archive of a release */
  'archive-dialog.confirm-archive-title':
    "<strong>'{{title}}'</strong> yayınını arşivlemek istediğinizden emin misiniz?",

  /** Description for information card on a published or archived release to description retention effects */
  'archive-info.description':
    '{{retentionDays}} gün boyunca erişilebilir olacak, ardından {{removalDate}} tarihinde otomatik olarak kaldırılacak. <Link>Saklama hakkında bilgi edinin</Link>.',
  /** Title for information card on a archived release */
  'archive-info.title': 'Bu yayın arşivlendi',

  /** Banner text showing count of active scheduled drafts requiring confirmation with one draft */
  'banner.confirm-active-scheduled-drafts_one':
    'Zamanlama onayı gerektiren {{count}} Scheduled Draft var',
  /** Banner text showing count of active scheduled drafts requiring confirmation with multiple drafts */
  'banner.confirm-active-scheduled-drafts_other':
    'Zamanlama onayı gerektiren {{count}} Scheduled Draft var',
  /** Button text for confirming scheduling of active drafts */
  'banner.confirm-active-scheduled-drafts.button': 'Zamanlamayı sürdür',
  /** Button text when confirming schedules from paused mode */
  'banner.confirm-active-scheduled-drafts.button-paused': 'Tüm zamanlamaları sürdür',
  /** Banner text shown when drafts mode is disabled but there are still scheduled drafts */
  'banner.drafts-mode-disabled':
    "Drafts modu devre dışı bırakıldı ancak hâlâ yayımlanmayı bekleyen scheduled draft'lar mevcut.",
  /** Banner text shown when navigating to a release that does not exist */
  'banner.release-not-found': 'Bu release bulunamadı',
  /** Tooltip for the dismiss button in the release not found banner */
  'banner.release-not-found.dismiss': 'Kapat',
  /** Banner text shown when scheduled drafts feature is disabled but there are still scheduled drafts */
  'banner.scheduled-drafts-disabled':
    "Scheduled drafts devre dışı bırakıldı ancak hâlâ yayımlanmayı bekleyen scheduled draft'lar mevcut.",

  /** Title for changes to published documents */
  'changes-published-docs.title': 'Yayımlanan belgelerdeki değişiklikler',

  /** Dialog confirm button text for confirming all scheduled drafts */
  'confirm-active-scheduled-drafts-dialog.confirm-button': 'Zamanlamaları Onayla',
  /** Dialog description for confirming active scheduled drafts */
  'confirm-active-scheduled-drafts-dialog.description':
    "Duraklatılmış tüm Scheduled Draft'ları hedeflenen yayın tarihlerine göre zamanla",
  /** Dialog warning when some scheduled drafts have past dates */
  'confirm-active-scheduled-drafts-dialog.past-dates-warning':
    "Bu Scheduled Draft'lardan bazıları geçmiş tarihler için zamanlanmış. Zamanlamaları onaylamak, bu belge sürümlerini hemen yayımlayacaktır.",
  /** Dialog title for confirming active scheduled drafts */
  'confirm-active-scheduled-drafts-dialog.title': "Scheduled Draft'ları Sürdür",

  /** Suffix for when a release is a copy of another release */
  'copy-suffix': 'Kopya',

  /** Confirm button text for overriding existing draft */
  'copy-to-draft-dialog.confirm-button': "Evet, Draft'ı geçersiz kıl",
  /** Description for dialog when copying version to draft that already exists */
  'copy-to-draft-dialog.description':
    "Bu belgenin bir draft sürümü zaten mevcut. Mevcut sürümü draft'a kopyala ve mevcut draft sürümünün üzerine yaz.",
  /** Title for dialog when copying version to draft that already exists */
  'copy-to-draft-dialog.title': 'Draft sürümü zaten mevcut',

  /** Text for when a release / document was created */
  created: 'Oluşturuldu <RelativeTime/>',

  /** Activity inspector button text */
  'dashboard.details.activity': 'Etkinlik',
  /** Text for the releases detail screen in the pin release button. */
  'dashboard.details.pin-release': "Release'i studio'ya sabitle",
  /** Text for the releases detail screen when a release was published ASAP */
  'dashboard.details.published-asap': 'Yayımlandı',
  /** Text for the releases detail screen when a release was published from scheduling */
  'dashboard.details.published-on': '{{date}} tarihinde yayımlandı',
  /** Text for the releases detail screen in the unpin release button. */
  'dashboard.details.unpin-release': "Release'i studio'dan kaldır",

  /** Label for the button to proceed deleting a release */
  'delete-dialog.confirm-delete-button': "Evet, release'i sil",
  /** Description for the dialog confirming the deleting of a release with one document */
  'delete-dialog.confirm-delete-description_one': 'Bu işlem 1 belge sürümünü silecek.',
  /** Description for the dialog confirming the deleting of a release with more than one document */
  'delete-dialog.confirm-delete-description_other': 'Bu işlem {{count}} belge sürümünü silecek.',
  /** Header for deleting a release dialog */
  'delete-dialog.confirm-delete.header': "Bu release'i silmek istediğinizden emin misiniz?",

  /** Label when a release has been deleted by a different user */
  'deleted-release': "'<strong>{{title}}</strong>' release'i silindi",

  /** Text for when there's no changes in a release diff */
  'diff.list-empty': 'Değişiklik listesi boş, belgeye bakın',
  /** Text for when there's no changes in a release diff */
  'diff.no-changes': 'Değişiklik yok',

  /** Description for discarding a draft of a document dialog */
  'discard-version-dialog.description-draft':
    'Bu işlem, bu belgede yapılan tüm değişiklikleri kalıcı olarak kaldıracak. Bu işlem geri alınamaz.',
  /** Description for discarding a version of a document dialog */
  'discard-version-dialog.description-release':
    "Bu işlem, '<strong>{{releaseTitle}}</strong>' release'i kapsamında bu belgede yapılan tüm değişiklikleri kalıcı olarak kaldıracak. Bu işlem geri alınamaz.",
  /** Title for dialog for discarding a draft of a document */
  'discard-version-dialog.header-draft': 'Taslak atılsın mı?',
  /** Header for discarding a version from a release of a document dialog */
  'discard-version-dialog.header-release':
    "Belge '<strong>{{releaseTitle}}</strong>' release'inden kaldırılsın mı?",
  /** Title for dialog for discarding a draft of a document */
  'discard-version-dialog.title-draft': 'Taslağı at',
  /** Title for dialog for discarding a version of a document */
  'discard-version-dialog.title-release': "Release'den kaldır",

  /** Label for when a document in a release has a single validation warning */
  'document-validation.error_one': '{{count}} doğrulama hatası',
  /** Label for when a document in a release has multiple validation warnings */
  'document-validation.error_other': '{{count}} doğrulama hatası',

  /** Label for the button to proceed with duplicating a release */
  'duplicate-dialog.confirm-duplicate-button': "Evet, release'i çoğalt",
  /** Description for the dialog confirming the duplicate of a release with one document */
  'duplicate-dialog.confirm-duplicate-description_one':
    "Bu işlem release'i ve 1 belge sürümünü çoğaltacak.",
  /** Description for the dialog confirming the duplicate of a release with more than one document */
  'duplicate-dialog.confirm-duplicate-description_other':
    "Bu işlem release'i ve {{count}} belge sürümünü çoğaltacak.",
  /** Header for the dialog confirming the duplicate of a release */
  'duplicate-dialog.confirm-duplicate-header':
    "Bu release'i çoğaltmak istediğinizden emin misiniz?",

  /** Title text displayed for technical error details */
  'error-details-title': 'Hata ayrıntıları',

  /** Title text when error during release update */
  'failed-edit-title': 'Değişiklikler kaydedilemedi',

  /** Title text displayed for releases that failed to publish  */
  'failed-publish-title': 'Yayınlama başarısız oldu',

  /** Title text displayed for releases that failed to schedule  */
  'failed-schedule-title': 'Zamanlama başarısız oldu',

  /** Filter tab label for all documents */
  'filter-tab.all': 'Tümü',
  /** Filter tab label for documents with validation errors */
  'filter-tab.errors': 'Hatalar',

  /**The text that will be shown in the footer to indicate the time the release was archived */
  'footer.status.archived': 'Arşivlendi',
  /**The text that will be shown in the footer to indicate the time the release was created */
  'footer.status.created': 'Oluşturuldu',
  /**The text that will be shown in the footer to indicate the time the release was created */
  'footer.status.edited': 'Düzenlendi',
  /**The text that will be shown in the footer to indicate the time the release was published */
  'footer.status.published': 'Yayınlandı',
  /**The text that will be shown in the footer to indicate the time the release was unarchived */
  'footer.status.unarchived': 'Arşivden Çıkarıldı',

  /** Label text for the loading state whilst release is being loaded */
  'loading-release': 'Sürüm yükleniyor',

  /** Text for when documents of a release are loading */
  'loading-release-documents': 'Belgeler yükleniyor',
  /** Description text for when loading documents on a release failed */
  'loading-release-documents.error.description':
    'Bu sürüme ait belgeler yüklenemiyor. Lütfen daha sonra tekrar deneyin.',
  /** Title text for when loading documents on a release failed */
  'loading-release-documents.error.title': 'Bir şeyler yanlış gitti',

  /** Label for title of actions for "when releasing" */
  'menu.group.when-releasing': 'Yayınlarken',
  /** Label for the release menu */
  'menu.label': 'Sürüm menüsü',
  /** Tooltip for the release menu */
  'menu.tooltip': 'Eylemler',

  /** Text for when no archived releases are found */
  'no-archived-release': 'Arşivlenmiş sürüm yok',

  /** Tooltip text when there are no paused scheduled drafts */
  'no-paused-release': 'Duraklatılmış zamanlanmış taslak yok',

  /** Text for when no releases are found */
  'no-releases': 'Sürüm yok',

  /** Text for when no scheduled drafts are found */
  'no-scheduled-drafts': 'Zamanlanmış taslak yok',

  /** Text for the button name for the release tool */
  'overview.action.documentation': 'Dokümantasyon',
  /** Tooltip for the calendar button in the release overview */
  'overview.calendar.tooltip': 'Takvimi görüntüle',
  /** Description for the release tool */
  'overview.description':
    'Sürümler, birlikte yönetilebilen, zamanlanabilen ve geri alınabilen belge değişikliklerinin koleksiyonlarıdır.',
  /** Text for the placeholder in the search release input  */
  'overview.search-releases-placeholder': 'Sürümlerde ara',
  /** Title for the release tool */
  'overview.title': 'Sürümler',

  /** Tooltip text for releases that have passed their intended publish date */
  'passed-intended-publish-date': 'Bu sürüm, planlanan yayın tarihini geçti',

  /** Tooltip text for scheduled drafts that have passed their intended publish date */
  'passed-intended-publish-date-draft': 'Bu taslak, planlanan yayın tarihini geçti',

  /** Description for when a user doesn't have publish or schedule releases */
  'permission-missing-description':
    'Rolünüz şu anda bu sürümde görebileceklerinizi kısıtlamaktadır. Bu sürümü yayınlayamaz veya zamanlayamazsınız.',

  /** Text for when a user doesn't have publish or schedule releases */
  'permission-missing-title': 'Sınırlı erişim',

  /** Tooltip label when the user doesn't have permission to archive release */
  'permissions.error.archive': 'Bu sürümü arşivleme izniniz yok',
  /** Tooltip label when the user doesn't have permission to delete release */
  'permissions.error.delete': 'Bu sürümü silme izniniz yok',
  /** Tooltip label when the user doesn't have permission for discarding a version */
  'permissions.error.discard-version': 'Bu sürümü atmak için izniniz yok',
  /** Tooltip label when the user doesn't have permission to duplicate release */
  'permissions.error.duplicate': "Bu release'i çoğaltmak için izniniz yok",
  /** Tooltip label when the user doesn't have permission to unarchive release */
  'permissions.error.unarchive': "Bu release'i arşivden çıkarmak için izniniz yok",
  /** Tooltip label when the user doesn't have permission for unpublishing a document */
  'permissions.error.unpublish': 'Bu belgenin yayımını kaldırmak için izniniz yok',

  /** Tooltip text for when one user is editing a document in a release */
  'presence.tooltip.one':
    '{{displayName}} şu anda bu belgeyi "{{releaseTitle}}" release\'inde düzenliyor',

  /** Tooltip text for publish release action when there are no documents */
  'publish-action.validation.no-documents': 'Yayımlanacak belge yok',

  /** Description for the dialog confirming the publish of a release with one document */
  'publish-dialog.confirm-publish-description_one':
    "'<strong>{{title}}</strong>' release'i ve belgesi yayımlanacak.",
  /** Description for the dialog confirming the publish of a release with multiple documents */
  'publish-dialog.confirm-publish-description_other':
    "'<strong>{{title}}</strong>' release'i ve {{releaseDocumentsLength}} belgesi yayımlanacak.",
  /** Title for the dialog confirming the publish of a release */
  'publish-dialog.confirm-publish.title':
    "Release'i ve tüm belge sürümlerini yayımlamak istediğinizden emin misiniz?",
  /** Label for when documents in release have validation errors */
  'publish-dialog.validation.error': 'Bazı belgelerde doğrulama hataları var',
  /** Label for when documents are being validated */
  'publish-dialog.validation.loading': 'Belgeler doğrulanıyor...',
  /** Label for the button when the user doesn't have permissions to publish a release */
  'publish-dialog.validation.no-permission': 'Yayımlamak için izniniz yok',

  /** Title for information card on a published release */
  'publish-info.title': 'Bu release başarıyla yayımlandı.',

  /** Placeholder title for a release with no title */
  'release-placeholder.title': 'Başlıksız',

  /** Description for the dialog confirming the revert of a release with multiple documents */
  'revert-dialog.confirm-revert-description_one':
    'Bu işlem {{releaseDocumentsLength}} belge sürümünü geri alacak.',
  /** Description for the dialog confirming the revert of a release with multiple documents */
  'revert-dialog.confirm-revert-description_other':
    'Bu işlem {{releaseDocumentsLength}} belge sürümünü geri alacak.',
  /** Checkbox label to confirm whether to create a staged release for revert or immediately revert */
  'revert-dialog.confirm-revert.stage-revert-checkbox-label': "Release'i hemen geri al",
  /** Title for the dialog confirming the revert of a release */
  'revert-dialog.confirm-revert.title':
    "'{{title}}' release'ini geri almak istediğinizden emin misiniz?",
  /** Warning card text for when immediately revert a release with history */
  'revert-dialog.confirm-revert.warning-card':
    "Bu release'deki belgeler yayımlandıktan sonra değiştirildi. Geri alma işlemi bu değişikliklerin üzerine yazacak.",

  /** Description of a reverted release */
  'revert-release.description': '"{{title}}" içindeki belge sürümlerindeki değişiklikleri geri al.',
  /** Title of a reverted release */
  'revert-release.title': '"{{title}}" geri alınıyor',

  /** Description for the review changes button in release tool */
  'review.description': "Değişiklikleri incelemek için bu release'e belgeler ekleyin",
  /** Text for when a document is edited */
  'review.edited': '<RelativeTime/> düzenlendi',

  /** Schedule release button tooltip when there are no documents to schedule */
  'schedule-action.validation.no-documents': 'Zamanlanacak belge yok',

  /** Schedule release button tooltip when the release is already scheduled */
  'schedule-button-tooltip.already-scheduled': 'Bu release zaten zamanlandı',
  /** Schedule release button tooltip when there are validation errors */
  'schedule-button-tooltip.validation.error': 'Bazı belgelerde doğrulama hataları var',
  /** Schedule release button tooltip when validation is loading */
  'schedule-button-tooltip.validation.loading': 'Belgeler doğrulanıyor...',
  /** Schedule release button tooltip when user has no permissions to schedule */
  'schedule-button-tooltip.validation.no-permission': 'Zamanlamak için izniniz yok',

  /** Title of unschedule release dialog */
  'schedule-button.tooltip': 'Yayını zamanlamayı iptal etmek istediğinizden emin misiniz?',

  /** Description for the confirm button for scheduling a release */
  'schedule-dialog.confirm-button': 'Evet, zamanla',
  /** Description shown in unschedule relaease dialog */
  'schedule-dialog.confirm-description_one':
    "'<strong>{{title}}</strong>' yayını ve belgesi seçilen tarihte yayımlanacak.",
  /** Description for the dialog confirming the publish of a release with multiple documents */
  'schedule-dialog.confirm-description_other':
    '<strong>{{title}}</strong> yayını ve {{count}} belge sürümü zamanlanacak.',
  /** Title for unschedule release dialog */
  'schedule-dialog.confirm-title': 'Yayını zamanla',
  /** Description for warning that the published schedule time is in the past */
  'schedule-dialog.publish-date-in-past-warning': 'Gelecekteki bir tarih ve saat için zamanlayın.',
  /** Label for date picker when scheduling a release */
  'schedule-dialog.select-publish-date-label': 'Zamanlama tarihi',

  /** Confirm button text for the schedule unpublish dialog */
  'schedule-unpublish-dialog.confirm': 'Yayından Kaldırmayı Zamanla',
  /** Description for the schedule unpublish dialog */
  'schedule-unpublish-dialog.description': 'Bu belgenin ne zaman yayından kaldırılacağını seçin.',
  /** Header for the schedule unpublish dialog */
  'schedule-unpublish-dialog.header': 'Taslağı Yayından Kaldırmak için Zamanla',

  /** Placeholder for search of documents in a release */
  'search-documents-placeholder': 'Belge ara',

  /** Text for when the release has no errors found */
  'summary.all-documents-errors-found': 'Tüm belgeler doğrulandı, sorunlar bulundu',
  /** Text for when the release has validated all documents */
  'summary.all-documents-validated': 'Tüm belgeler doğrulandı, sorun bulunamadı',
  /** Text for when the release was created */
  'summary.created': '<RelativeTime/> oluşturuldu',
  /** Text for when the release is composed of one document */
  'summary.document-count_one': '{{count}} belge',
  /** Text for when the release is composed of multiple documents */
  'summary.document-count_other': '{{count}} belge',
  /** Text for when the release has some errors found */
  'summary.errors-found': 'Yayını yayımlamak veya zamanlamak için belgelerdeki sorunları çözün',
  /** Text for when the release has no documents */
  'summary.no-documents': 'Belge yok',
  /** Description for the empty state when a cardinality-one release has no documents */
  'summary.no-documents-cardinality-one.description':
    'Bu zamanlanmış taslak bir belge içermiyor. Belge kaldırılmış olabilir.',
  /** Title for the empty state when a cardinality-one release has no documents */
  'summary.no-documents-cardinality-one.title': 'Bu yayında belge yok',
  /** Text for when the release has not published */
  'summary.not-published': 'Yayımlanmadı',
  /** Text for when the release was published */
  'summary.published': '<RelativeTime/> yayımlandı',
  /** Text for when the release has validated documents */
  'summary.validated-documents': '{{validatedCount}} / {{totalCount}} belge doğrulandı',
  /** Text for validation loading indicator */
  'summary.validating-documents': 'Belgeler doğrulanıyor: {{validatedCount}} / {{totalCount}}',

  /** add action type that will be shown in the table*/
  'table-body.action.add': 'Ekle',
  /** Change action type that will be shown in the table*/
  'table-body.action.change': 'Değiştir',
  /** Change action type that will be shown in the table*/
  'table-body.action.unpublish': 'Yayımdan Kaldır',

  /** Header for the document table in the release tool - action */
  'table-header.action': 'Eylem',
  /** Header for the document table in the release tool - Archived */
  'table-header.archivedAt': 'Arşivlendi',
  /** Header for the document table in the release tool - contributors */
  'table-header.contributors': 'Katkıda Bulunanlar',
  /** Header for the document table in the release tool - created by */
  'table-header.created-by': 'Oluşturan',
  /** Header for the document table in the release tool - document preview */
  'table-header.document': 'Belge',
  /** Header for the document table in the release tool - title */
  'table-header.documents': 'Belgeler',
  /** Header for the document table in the release tool - edited */
  'table-header.edited': 'Düzenlendi',
  /** Header for the paused scheduled drafts table - intended for */
  'table-header.intended-for': 'Hedef',
  /** Header for the document table in the release tool - Published */
  'table-header.published-at': 'Yayımlandı',
  /** Header for the document table in the release tool - Published */
  'table-header.publishedAt': 'Yayımlandı',
  /** Header for the scheduled drafts document table in the release tool - published at */
  'table-header.scheduled-draft.published-at': 'Yayımlanma tarihi',
  /** Header for the scheduled drafts document table in the release tool - scheduled for */
  'table-header.scheduled-for': 'Zamanlandı',
  /** Header for the document table in the release tool - time */
  'table-header.time': 'Saat',
  /** Header for the  document table in the release tool - release title */
  'table-header.title': 'Sürüm',
  /** Header for the document table in the release tool - type */
  'table-header.type': 'Tür',
  /** Header for the document table in the release tool - when */
  'table-header.when': 'Ne zaman',

  /** Text for the release time label for scheduled releases  which has not been scheduled yet*/
  'time.estimated': 'Tahmini',
  /** Text for the release time label for scheduled releases  which has been scheduled*/
  'time.scheduled': 'Zamanlandı',

  /** Text for toast when release failed to archive */
  'toast.archive.error': "'<strong>{{title}}</strong>' arşivlenemedi: {{error}}",
  /** Toast error message when bulk scheduling of active drafts fails */
  'toast.confirm-active-scheduled-drafts.error': 'Taslaklar zamanlanamadı: {{error}}',
  /** Toast message after copying release ID */
  'toast.copy-release-id.success': "Yayın ID'si panoya kopyalandı",
  /** Toast message after copying release link */
  'toast.copy-release-link.success': 'Yayın bağlantısı panoya kopyalandı',
  /** Toast message after copying release title */
  'toast.copy-release-title.success': 'Yayın başlığı panoya kopyalandı',
  /** Description for toast when creating new version of document in release failed */
  'toast.create-version.error': 'Belge yayına eklenemedi: {{error}}',
  /** Description for toast when release deletion failed */
  'toast.delete.error': "'<strong>{{title}}</strong>' silinemedi: {{error}}",
  /** Description for toast when release is successfully deleted */
  'toast.delete.success': "'<strong>{{title}}</strong>' yayını başarıyla silindi",
  /** Description for toast when release duplication failed */
  'toast.duplicate.error': "'<strong>{{title}}</strong>' çoğaltılamadı: {{error}}",
  /** Description for toast when release is successfully duplicated */
  'toast.duplicate.success': "'<strong>{{title}}</strong>' yayını çoğaltıldı. <Link/>",
  /** Link text for toast link to the duplicated release */
  'toast.duplicate.success-link': 'Çoğaltılan yayını görüntüle',
  /** Text for toast when release has been reverted immediately */
  'toast.immediate-revert.success': "'{{title}}' yayını başarıyla geri alındı",
  /** Text for toast when release failed to publish */
  'toast.publish.error': "'<strong>{{title}}</strong>' yayınlanamadı: {{error}}",
  /** Text for toast when release has reverted release successfully staged */
  'toast.revert-stage.success': "'{{title}}' için geri alma yayını başarıyla oluşturuldu. <Link/>",
  /** Link text for toast link to the generated revert release */
  'toast.revert-stage.success-link': 'Geri alma yayınını görüntüle',
  /** Text for toast when release failed to revert */
  'toast.revert.error': 'Yayın geri alınamadı: {{error}}',
  /** Text for toast when release failed to schedule */
  'toast.schedule.error': "'<strong>{{title}}</strong>' zamanlanamadı: {{error}}",
  /** Text for toast when release has been scheduled */
  'toast.schedule.success': "'<strong>{{title}}</strong>' yayını zamanlandı.",
  /** Text for toast when release failed to unarchive */
  'toast.unarchive.error': "'<strong>{{title}}</strong>' arşivden çıkarılamadı: {{error}}",
  /** Text for toast when release failed to unschedule */
  'toast.unschedule.error': "'<strong>{{title}}</strong>' zamanlaması iptal edilemedi: {{error}}",

  /** Text for tooltip when a release has been scheduled */
  'type-picker.tooltip.scheduled': 'Yayın zamanlandı, türü değiştirmek için zamanlamayı iptal edin',

  /** Text action in unpublish dialog to cancel */
  'unpublish-dialog.action.cancel': 'İptal',
  /** Text action in unpublish dialog to unpublish */
  'unpublish-dialog.action.unpublish': 'Evet, yayınlarken yayından kaldır',
  /** Description for unpublish dialog, explaining that all changes made to this document will be lost */
  'unpublish-dialog.description.lost-changes':
    'Bu belge sürümünde yapılan tüm değişiklikler kaybolacak.',
  /** Description for the unpublish dialog, explaining that it will create a draft if no draft exists at time of release */
  'unpublish-dialog.description.to-draft':
    'Bu işlem, belgeyi <Label>{{title}}</Label> yayınının bir parçası olarak yayından kaldıracak ve yayın sırasında taslak yoksa bir taslak oluşturacaktır.',
  /** Title for the dialog confirming the unpublish of a release */
  'unpublish-dialog.header':
    'Bu belgeyi yayınlarken yayından kaldırmak istediğinizden emin misiniz?',

  /** Text for when a document is unpublished */
  'unpublish.already-unpublished': 'Bu belge zaten yayından kaldırılmış.',
  /** Tooltip label for when a document is unpublished */
  'unpublish.no-published-version': 'Bu belgenin yayımlanmış bir sürümü yok.',

  /** Description shown in unschedule relaease dialog */
  'unschedule-dialog.confirm-description': 'Yayın, planlanan tarihte artık yayımlanmayacak.',
  /** Title for unschedule release dialog */
  'unschedule-dialog.confirm-title':
    'Yayının zamanlamasını iptal etmek istediğinizden emin misiniz?',
})
