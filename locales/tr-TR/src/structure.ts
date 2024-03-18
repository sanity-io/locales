import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Tooltip when action button is disabled because the operation is not ready   */
  'action.delete.disabled.not-ready': 'İşlem hazır değil',
  /** Tooltip when action button is disabled because the document does not exist */
  'action.delete.disabled.nothing-to-delete': 'Bu belge henüz mevcut değil veya zaten silinmiş',
  /** Label for the "Delete" document action button */
  'action.delete.label': 'Sil',
  /** Label for the "Delete" document action while the document is being deleted */
  'action.delete.running.label': 'Siliniyor…',
  /** Message prompting the user to confirm discarding changes */
  'action.discard-changes.confirm-dialog.confirm-discard-changes':
    'Yayımlanandan bu yana yapılan tüm değişiklikleri atmak istediğinizden emin misiniz?',
  /** Tooltip when action is disabled because the document has no unpublished changes */
  'action.discard-changes.disabled.no-change': 'Bu belgede yayımlanmamış değişiklik yok',
  /** Tooltip when action is disabled because the document is not published */
  'action.discard-changes.disabled.not-published': 'Bu belge yayımlanmamış',
  /** Tooltip when action button is disabled because the operation is not ready   */
  'action.discard-changes.disabled.not-ready': 'İşlem hazır değil',
  /** Label for the "Discard changes" document action */
  'action.discard-changes.label': 'Değişiklikleri at',
  /** Tooltip when action is disabled because the operation is not ready   */
  'action.duplicate.disabled.not-ready': 'İşlem hazır değil',
  /** Tooltip when action is disabled because the document doesn't exist */
  'action.duplicate.disabled.nothing-to-duplicate':
    'Bu belge henüz mevcut olmadığı için çoğaltılacak bir şey yok',
  /** Label for the "Duplicate" document action */
  'action.duplicate.label': 'Çoğalt',
  /** Label for the "Duplicate" document action while the document is being duplicated */
  'action.duplicate.running.label': 'Çoğaltılıyor…',
  /** Tooltip when publish button is disabled because the document is already published, and published time is unavailable.*/
  'action.publish.already-published.no-time-ago.tooltip': 'Zaten yayımlanmış',
  /** Tooltip when publish button is disabled because the document is already published.*/
  'action.publish.already-published.tooltip': '{{timeSincePublished}} önce yayımlandı',
  /** Tooltip when action is disabled because the studio is not ready.*/
  'action.publish.disabled.not-ready': 'İşlem hazır değil',
  /** Label for action when there are pending changes.*/
  'action.publish.draft.label': 'Yayımla',
  /** Label for the "Publish" document action when the document has live edit enabled.*/
  'action.publish.live-edit.label': 'Yayımla',
  /** Fallback tooltip for the "Publish" document action when publish is invoked for a document with live edit enabled.*/
  'action.publish.live-edit.publish-disabled':
    'Bu belge türü için Canlı Düzenleme etkin olduğundan yayımlanamaz',
  /** Tooltip for the "Publish" document action when the document has live edit enabled.*/
  'action.publish.live-edit.tooltip':
    'Bu içerik türü için Canlı Düzenleme etkinleştirilmiş ve değişiklik yaparken otomatik olarak yayımlanır',
  /** Tooltip when publish button is disabled because there are no changes.*/
  'action.publish.no-changes.tooltip': 'Yayımlanmamış değişiklik yok',
  /** Label for the "Publish" document action when there are no changes.*/
  'action.publish.published.label': 'Yayımlandı',
  /** Label for the "Publish" document action while publish is being executed.*/
  'action.publish.running.label': 'Yayımlanıyor…',
  /** Tooltip when the "Publish" document action is disabled due to validation issues */
  'action.publish.validation-issues.tooltip':
    'Bu belgenin yayımlanabilmesi için düzeltilmesi gereken doğrulama hataları var',
  /** Tooltip when publish button is waiting for validation and async tasks to complete.*/
  'action.publish.waiting': 'Yayımlamadan önce görevlerin bitmesi bekleniyor',
  /** Message prompting the user to confirm that they want to restore to an earlier version*/
  'action.restore.confirm.message': 'Bu belgeyi geri yüklemek istediğinizden emin misiniz?',
  /** Fallback tooltip for when user is looking at the initial version */
  'action.restore.disabled.cannot-restore-initial': 'İlk sürüme geri yüklenemez',
  /** Label for the "Restore" document action */
  'action.restore.label': 'Geri Yükle',
  /** Default tooltip for the action */
  'action.restore.tooltip': 'Bu sürüme geri yükle',
  /** Tooltip when action is disabled because the document is not already published */
  'action.unpublish.disabled.not-published': 'Bu belge yayınlanmadı',
  /** Tooltip when action is disabled because the operation is not ready   */
  'action.unpublish.disabled.not-ready': 'İşlem hazır değil',
  /** Label for the "Unpublish" document action */
  'action.unpublish.label': 'Yayından Kaldır',
  /** Fallback tooltip for the Unpublish document action when publish is invoked for a document with live edit enabled.*/
  'action.unpublish.live-edit.disabled':
    'Bu belgede canlı düzenleme etkinleştirildi ve yayından kaldırılamaz',

  /** The text for the restore button on the deleted document banner */
  'banners.deleted-document-banner.restore-button.text': 'En son sürümü geri yükle',
  /** The text content for the deleted document banner */
  'banners.deleted-document-banner.text': 'Bu belge silindi.',
  /** The text content for the deprecated document type banner */
  'banners.deprecated-document-type-banner.text': 'Bu belge türü kullanımdan kaldırılmıştır.',
  /** The text for the permission check banner if the user only has one role, and it does not allow updating this document */
  'banners.permission-check-banner.missing-permission_create_one':
    'Rolünüz <Roles/> bu belgeyi oluşturma iznine sahip değil.',
  /** The text for the permission check banner if the user only has multiple roles, but they do not allow updating this document */
  'banners.permission-check-banner.missing-permission_create_other':
    'Rolleriniz <Roles/> bu belgeyi oluşturma iznine sahip değil.',
  /** The text for the permission check banner if the user only has one role, and it does not allow updating this document */
  'banners.permission-check-banner.missing-permission_update_one':
    'Rolünüz <Roles/> bu belgeyi güncelleme iznine sahip değil.',
  /** The text for the permission check banner if the user only has multiple roles, but they do not allow updating this document */
  'banners.permission-check-banner.missing-permission_update_other':
    'Rolleriniz <Roles/> bu belgeyi güncelleme iznine sahip değil.',
  /** The text for the reload button */
  'banners.reference-changed-banner.reason-changed.reload-button.text': 'Referansı Yeniden Yükle',
  /** The text for the reference change banner if the reason is that the reference has been changed */
  'banners.reference-changed-banner.reason-changed.text': 'Bu referansı açtığınızdan beri değişti.',
  /** The text for the close button */
  'banners.reference-changed-banner.reason-removed.close-button.text': 'Referansı Kapat',
  /** The text for the reference change banner if the reason is that the reference has been deleted */
  'banners.reference-changed-banner.reason-removed.text':
    'Bu referans açtığınızdan beri kaldırıldı.',

  /** Browser/tab title when creating a new document of a given type */
  'browser-document-title.new-document': 'Yeni {{schemaType}}',
  /** Browser/tab title when editing a document where the title cannot be resolved from preview configuration */
  'browser-document-title.untitled-document': 'Başlıksız',

  /** The action menu button aria-label */
  'buttons.action-menu-button.aria-label': 'Belge işlemlerini aç',
  /** The action menu button tooltip */
  'buttons.action-menu-button.tooltip': 'Belge işlemleri',
  /** The aria-label for the split pane button on the document panel header */
  'buttons.split-pane-button.aria-label': 'Sağa bölünmüş paneli aç',
  /** The tool tip for the split pane button on the document panel header */
  'buttons.split-pane-button.tooltip': 'Sağa bölünmüş paneli aç',
  /** The title for the close button on the split pane on the document panel header */
  'buttons.split-pane-close-button.title': 'Bölünmüş paneli kapat',
  /** The title for the close group button on the split pane on the document panel header */
  'buttons.split-pane-close-group-button.title': 'Panel grubunu kapat',

  /** The text in the "Cancel" button in the confirm delete dialog that cancels the action and closes the dialog */
  'confirm-delete-dialog.cancel-button.text': 'İptal',
  /** Used in `confirm-delete-dialog.cdr-summary.title` */
  'confirm-delete-dialog.cdr-summary.document-count_one': '1 belge',
  /** Used in `confirm-delete-dialog.cdr-summary.title` */
  'confirm-delete-dialog.cdr-summary.document-count_other': '{{count}} belge',
  /** The text that appears in the subtitle `<summary>` that lists the datasets below the title */
  'confirm-delete-dialog.cdr-summary.subtitle_one': 'Dataset: {{datasets}}',
  /** The text that appears in the subtitle `<summary>` that lists the datasets below the title */
  'confirm-delete-dialog.cdr-summary.subtitle_other': 'Datasets: {{datasets}}',
  /** The text that appears in the subtitle `<summary>` that lists the datasets below the title */
  'confirm-delete-dialog.cdr-summary.subtitle_unavailable_one': 'Kullanılamayan dataset',
  /** The text that appears in the subtitle `<summary>` that lists the datasets below the title */
  'confirm-delete-dialog.cdr-summary.subtitle_unavailable_other': 'Kullanılamayan datasets',
  /** The text that appears in the title `<summary>` that includes the list of CDRs (singular) */
  'confirm-delete-dialog.cdr-summary.title_one': "Başka bir dataset'te {{documentCount}}",
  /** The text that appears in the title `<summary>` that includes the list of CDRs (plural) */
  'confirm-delete-dialog.cdr-summary.title_other': "{{documentCount}} belge, {{count}} dataset'te",
  /** Appears when hovering over the copy button to copy */
  'confirm-delete-dialog.cdr-table.copy-id-button.tooltip': 'Kimliği panoya kopyala',
  /** The header for the dataset column in the list of cross-dataset references found */
  'confirm-delete-dialog.cdr-table.dataset.label': 'Dataset',
  /** The header for the document ID column in the list of cross-dataset references found */
  'confirm-delete-dialog.cdr-table.document-id.label': 'Belge Kimliği',
  /** The toast title when the copy button has been clicked */
  'confirm-delete-dialog.cdr-table.id-copied-toast.title': 'Belge kimliği panoya kopyalandı!',
  /** The header for the project ID column in the list of cross-dataset references found */
  'confirm-delete-dialog.cdr-table.project-id.label': 'Proje Kimliği',
  /** The text in the "Delete anyway" button in the confirm delete dialog that confirms the action */
  'confirm-delete-dialog.confirm-anyway-button.text_delete': 'Yine de sil',
  /** The text in the "Unpublish anyway" button in the confirm delete dialog that confirms the action */
  'confirm-delete-dialog.confirm-anyway-button.text_unpublish': 'Yine de yayından kaldır',
  /** The text in the "Delete now" button in the confirm delete dialog that confirms the action */
  'confirm-delete-dialog.confirm-button.text_delete': 'Şimdi sil',
  /** The text in the "Unpublish now" button in the confirm delete dialog that confirms the action */
  'confirm-delete-dialog.confirm-button.text_unpublish': 'Şimdi yayından kaldır',
  /** If no referring documents are found, this text appears above the cancel and confirmation buttons */
  'confirm-delete-dialog.confirmation.text_delete':
    '“<DocumentTitle/>” belgesini silmek istediğinizden emin misiniz?',
  /** If no referring documents are found, this text appears above the cancel and confirmation buttons */
  'confirm-delete-dialog.confirmation.text_unpublish':
    '“<DocumentTitle/>” belgesini yayından kaldırmak istediğinizden emin misiniz?',
  /** The text body of the error dialog. */
  'confirm-delete-dialog.error.message.text':
    'Referans veren belgeler yüklenirken bir hata oluştu.',
  /** The text in the retry button of the confirm delete dialog if an error occurred. */
  'confirm-delete-dialog.error.retry-button.text': 'Yeniden dene',
  /** The header of the confirm delete dialog if an error occurred while the confirm delete dialog was open. */
  'confirm-delete-dialog.error.title.text': 'Hata',
  /** The header of the confirm delete dialog */
  'confirm-delete-dialog.header.text_delete': 'Belgeyi sil?',
  /** The header of the confirm delete dialog */
  'confirm-delete-dialog.header.text_unpublish': 'Belgeyi yayından kaldır?',
  /** The text that appears while the referring documents are queried */
  'confirm-delete-dialog.loading.text': 'Referans veren belgeler aranıyor…',
  /** Shown if there are references to other documents but the user does not have the permission to see the relevant document IDs */
  'confirm-delete-dialog.other-reference-count.title_one': '1 diğer referans gösterilmiyor',
  /** Shown if there are references to other documents but the user does not have the permission to see the relevant document IDs */
  'confirm-delete-dialog.other-reference-count.title_other':
    '{{count}} diğer referans gösterilmiyor',
  /** Text in the tooltip of this component if hovering over the info icon */
  'confirm-delete-dialog.other-reference-count.tooltip':
    'İlgili veri kümeleri için eksik erişim belirteci nedeniyle bu referansların meta verilerini gösteremiyoruz.',
  /** Appears when unable to render a document preview in the referring document list */
  'confirm-delete-dialog.preview-item.preview-unavailable.subtitle': 'ID: {{documentId}}',
  /** Appears when unable to render a document preview in the referring document list */
  'confirm-delete-dialog.preview-item.preview-unavailable.title': 'Önizleme kullanılamıyor',
  /** Warns the user of affects to other documents if the action is confirmed (delete) */
  'confirm-delete-dialog.referential-integrity-disclaimer.text_delete':
    'Bu belgeyi silerseniz, ona atıfta bulunan belgeler artık ona erişemeyecek.',
  /** Warns the user of affects to other documents if the action is confirmed (unpublish) */
  'confirm-delete-dialog.referential-integrity-disclaimer.text_unpublish':
    'Bu belgeyi yayından kaldırırsanız, ona atıfta bulunan belgeler artık ona erişemeyecek.',
  /** Tells the user the count of how many other referring documents there are before listing them. (singular) */
  'confirm-delete-dialog.referring-document-count.text_one':
    '1 belge “<DocumentTitle/>” başlığına atıfta bulunuyor',
  /** Tells the user the count of how many other referring documents there are before listing them. (plural) */
  'confirm-delete-dialog.referring-document-count.text_other':
    '{{count}} belge “<DocumentTitle/>” başlığına atıfta bulunuyor',
  /** Describes the list of documents that refer to the one trying to be deleted (delete) */
  'confirm-delete-dialog.referring-documents-descriptor.text_delete':
    '“<DocumentTitle/>” başlıklı belgeyi silmekte zorlanabilirsiniz çünkü aşağıdaki belgeler ona atıfta bulunuyor:',
  /** Describes the list of documents that refer to the one trying to be deleted (unpublish) */
  'confirm-delete-dialog.referring-documents-descriptor.text_unpublish':
    '“<DocumentTitle/>” başlıklı belgeyi yayından kaldırmakta zorlanabilirsiniz çünkü aşağıdaki belgeler ona atıfta bulunuyor:',

  /** The text for the cancel button in the confirm dialog used in document action shortcuts if none is provided */
  'confirm-dialog.cancel-button.fallback-text': 'İptal',
  /** The text for the confirm button in the confirm dialog used in document action shortcuts if none is provided */
  'confirm-dialog.confirm-button.fallback-text': 'Onayla',

  /** For the default structure definition, the title for the "Content" pane */
  'default-definition.content-title': 'İçerik',

  /** The text shown if there was an error while getting the document's title via a preview value */
  'doc-title.error.text': 'Hata: {{errorMessage}}',
  /** The text shown if the preview value for a document is non-existent or empty */
  'doc-title.fallback.text': 'Başlıksız',
  /** The text shown if a document's title via a preview value cannot be determined due to an unknown schema type */
  'doc-title.unknown-schema-type.text': 'Bilinmeyen şema tipi: {{schemaType}}',

  /** Tooltip text shown for the close button of the document inspector */
  'document-inspector.close-button.tooltip': 'Kapat',
  /** The title shown in the dialog header, when inspecting a valid document */
  'document-inspector.dialog.title': '<DocumentTitle/> İnceleme',
  /** The title shown in the dialog header, when the document being inspected is not created yet/has no value */
  'document-inspector.dialog.title-no-value': 'Değer yok',
  /** Title shown for menu item that opens the "Inspect" dialog */
  'document-inspector.menu-item.title': 'İncele',
  /** the placeholder text for the search input on the inspect dialog */
  'document-inspector.search.placeholder': 'Ara',
  /** The "parsed" view mode, meaning the JSON is searchable, collapsible etc */
  'document-inspector.view-mode.parsed': 'Ayrıştırılmış',
  /** The "raw" view mode, meaning the JSON is presented syntax-highlighted, but with no other features - optimal for copying */
  'document-inspector.view-mode.raw-json': 'Ham JSON',

  /** The text for when a form is hidden */
  'document-view.form-view.form-hidden': 'Bu form gizlidir',
  /** Fallback title shown when a form title is not provided */
  'document-view.form-view.form-title-fallback': 'Başlıksız',
  /** The text for when the form view is loading a document */
  'document-view.form-view.loading': 'Belge yükleniyor…',
  /** The description of the sync lock toast on the form view */
  'document-view.form-view.sync-lock-toast.description':
    'Belge senkronize edilirken lütfen bekleyin. Bu genellikle belge yayınlandıktan hemen sonra gerçekleşir ve birkaç saniyeden fazla sürmemesi gerekir',
  /** The title of the sync lock toast on the form view */
  'document-view.form-view.sync-lock-toast.title': 'Belge senkronize ediliyor…',

  /** The loading messaging for when the tooltip is still loading permission info */
  'insufficient-permissions-message-tooltip.loading-text': 'Yükleniyor…',

  /** --- Menu items --- */
  /** The menu item group title to use for the Action menu items */
  'menu-item-groups.actions-group': 'Eylemler',
  /** The menu item group title to use for the Layout menu items */
  'menu-item-groups.layout-group': 'Düzen',
  /** The menu item group title to use for the Sort menu items */
  'menu-item-groups.sorting-group': 'Sıralama',

  /** The menu item title to use the compact view */
  'menu-items.layout.compact-view': 'Kompakt görünüm',
  /** The menu item title to use the detailed view */
  'menu-items.layout.detailed-view': 'Detaylı görünüm',
  /** The menu item title to Sort by Created */
  'menu-items.sort-by.created': 'Oluşturulma Tarihine Göre Sırala',
  /** The menu item title to Sort by Last Edited */
  'menu-items.sort-by.last-edited': 'Son Düzenlenme Tarihine Göre Sırala',

  /** The link text of the no document type screen that appears directly below the subtitle */
  'no-document-types-screen.link-text': 'Belge tipi nasıl ekleneceğini öğrenin →',
  /** The subtitle of the no document type screen that appears directly below the title */
  'no-document-types-screen.subtitle': 'Lütfen şemanızda en az bir belge türü tanımlayın.',
  /** The title of the no document type screen */
  'no-document-types-screen.title': 'Belge türü yok',

  /** Text shown on back button visible on smaller breakpoints */
  'pane-header.back-button.text': 'Geri',
  /** tooltip text (via `title` attribute) for the menu button */
  'pane-header.context-menu-button.tooltip': 'Menüyü göster',
  /** Appears in a document list pane header if there are more than one option for create. This is the label for that menu */
  'pane-header.create-menu.label': 'Oluştur',
  /** Tooltip displayed on the create new button in document lists */
  'pane-header.create-new-button.tooltip': 'Yeni belge oluştur',
  /** The `aria-label` for the disabled button in the pane header if create permissions are granted */
  'pane-header.disabled-created-button.aria-label': 'Yetersiz izinler',

  /** The text shown in the tooltip of pane item previews of documents if there are unpublished edits */
  'pane-item.draft-status.has-draft.tooltip': '<RelativeTime/> tarihinde düzenlendi',
  /** The text shown in the tooltip of pane item previews of documents if there are no unpublished edits */
  'pane-item.draft-status.no-draft.tooltip': 'Yayınlanmamış düzenleme yok',
  /** The subtitle tor pane item previews if there isn't a matching schema type found */
  'pane-item.missing-schema-type.subtitle': 'Belge: <Code>{{documentId}}</Code>',
  /** The title tor pane item previews if there isn't a matching schema type found */
  'pane-item.missing-schema-type.title': 'Türü için şema bulunamadı <Code>{{documentType}}</Code>',
  /** The text shown in the tooltip of pane item previews of documents if there are unpublished edits */
  'pane-item.published-status.has-published.tooltip': '<RelativeTime/> tarihinde yayınlandı',
  /** The text shown in the tooltip of pane item previews of documents if there are no unpublished edits */
  'pane-item.published-status.no-published.tooltip': 'Yayınlanmamış düzenleme yok',

  /** The text used in the document header title if there is an error */
  'panes.document-header-title.error.text': 'Hata: {{error}}',
  /** The text used in the document header title if creating a new item */
  'panes.document-header-title.new.text': 'Yeni {{schemaType}}',
  /** The text used in the document header title if no other title can be determined */
  'panes.document-header-title.untitled.text': 'Başlıksız',
  /** The text for the retry button on the document list pane */
  'panes.document-list-pane.error.retry-button.text': 'Yeniden dene',
  /** The error text on the document list pane */
  'panes.document-list-pane.error.text': 'Hata: <Code>{{error}}</Code>',
  /** The error title on the document list pane */
  'panes.document-list-pane.error.title': 'Liste öğeleri getirilemedi',
  /** The text of the document list pane if more than a maximum number of documents are returned */
  'panes.document-list-pane.max-items.text': 'Maksimum {{limit}} belge gösteriliyor',
  /** The text of the document list pane if no documents are found for a specified type */
  'panes.document-list-pane.no-documents-of-type.text': 'Bu türde belge yok',
  /** The text of the document list pane if no documents are found */
  'panes.document-list-pane.no-documents.text': 'Sonuç bulunamadı',
  /** The text of the document list pane if no documents are found matching specified criteria */
  'panes.document-list-pane.no-matching-documents.text': 'Eşleşen belge yok',
  /** The aria-label for the search input on the document list pane */
  'panes.document-list-pane.search-input.aria-label': 'Listeyi ara',
  /** The search input for the search input on the document list pane */
  'panes.document-list-pane.search-input.placeholder': 'Listeyi ara',
  /** The summary title when displaying an error for a document operation result */
  'panes.document-operation-results.error.summary.title': 'Detaylar',
  /** The text when a generic operation failed (fallback, generally not shown)  */
  'panes.document-operation-results.operation-error': '{{context}} sırasında bir hata oluştu',
  /** The text when a delete operation failed  */
  'panes.document-operation-results.operation-error_delete':
    'Bu belgeyi silmeye çalışırken bir hata oluştu. Bu genellikle diğer belgelerin buna atıfta bulunduğu anlamına gelir.',
  /** The text when an unpublish operation failed  */
  'panes.document-operation-results.operation-error_unpublish':
    'Bu belgeyi yayından kaldırmaya çalışırken bir hata oluştu. Bu genellikle diğer belgelerin buna atıfta bulunduğu anlamına gelir.',
  /** The text when a generic operation succeeded (fallback, generally not shown)  */
  'panes.document-operation-results.operation-success':
    'Belge üzerinde {{context}} başarıyla gerçekleştirildi',
  /** The text when a delete operation succeeded  */
  'panes.document-operation-results.operation-success_delete': 'Belge başarıyla silindi',
  /** The text when a discard changes operation succeeded  */
  'panes.document-operation-results.operation-success_discardChanges':
    'Son yayından bu yana yapılan tüm değişiklikler şimdi atıldı. Atılan taslak hala geçmişten kurtarılabilir',
  /** The text when a publish operation succeeded  */
  'panes.document-operation-results.operation-success_publish': 'Belge yayınlandı',
  /** The text when a restore operation succeeded  */
  'panes.document-operation-results.operation-success_restore':
    '<Strong>{{title}}</Strong> geri yüklendi',
  /** The text when an unpublish operation succeeded  */
  'panes.document-operation-results.operation-success_unpublish':
    'Belge yayından kaldırıldı. En son yayınlanan sürümden bir taslak oluşturuldu.',
  /** The document title shown when document title is "undefined" in operation message */
  'panes.document-operation-results.operation-undefined-title': 'Başlıksız',
  /** The title of the reconnecting toast */
  'panes.document-pane-provider.reconnecting.title': 'Bağlantı kesildi. Yeniden bağlanıyor…',
  /** The loading message for the document not found pane */
  'panes.document-pane.document-not-found.loading': 'Belge yükleniyor…',
  /** The text of the document not found pane if the schema is known */
  'panes.document-pane.document-not-found.text':
    'Belge türü tanımlanmadı ve <Code>{{id}}</Code> tanımlayıcısı olan bir belge bulunamadı.',
  /** The title of the document not found pane if the schema is known */
  'panes.document-pane.document-not-found.title': 'Belge bulunamadı',
  /** The text of the document not found pane if the schema is not found */
  'panes.document-pane.document-unknown-type.text':
    'Bu belgenin <Code>{{documentType}}</Code> şema türü var, bu yerel içerik stüdyo şemasında bir tür olarak tanımlanmamış.',
  /** The title of the document not found pane if the schema is not found or unknown */
  'panes.document-pane.document-unknown-type.title':
    'Bilinmeyen belge türü: <Code>{{documentType}}</Code>',
  /** The title of the document not found pane if the schema is unknown */
  'panes.document-pane.document-unknown-type.without-schema.text':
    'Bu belge mevcut değil ve bunun için belirtilmiş bir şema türü yok.',
  /** Default message shown while resolving the structure definition for an asynchronous node */
  'panes.resolving.default-message': 'Yükleniyor…',
  /** Message shown while resolving the structure definition for an asynchronous node and it is taking a while (more than 5s) */
  'panes.resolving.slow-resolve-message': 'Hala yükleniyor…',
  /** The text to display when type is missing */
  'panes.unknown-pane-type.missing-type.text':
    'Yapı öğesi gerekli <Code>type</Code> özelliğinden yoksun.',
  /** The title of the unknown pane */
  'panes.unknown-pane-type.title': 'Bilinmeyen panel türü',
  /** The text to display when type is unknown */
  'panes.unknown-pane-type.unknown-type.text':
    '<Code>{{type}}</Code> türündeki yapı öğesi bilinen bir varlık değil.',

  /** The text for the "Open preview" action for a document */
  'production-preview.menu-item.title': 'Önizlemeyi aç',

  /** Label for button when status is saved */
  'status-bar.document-status-pulse.status.saved.text': 'Kaydedildi',
  /** Label for button when status is syncing */
  'status-bar.document-status-pulse.status.syncing.text': 'Kaydediliyor...',
  /** Accessibility label indicating when the document was last published, in relative time, eg "3 weeks ago" */
  'status-bar.publish-status-button.last-published-time.aria-label':
    'Son yayınlanma {{relativeTime}}',
  /** Text for tooltip showing explanation of timestamp/relative time, eg "Last published <RelativeTime/>" */
  'status-bar.publish-status-button.last-published-time.tooltip': 'Son yayınlanma <RelativeTime/>',
  /** Accessibility label indicating when the document was last updated, in relative time, eg "2 hours ago" */
  'status-bar.publish-status-button.last-updated-time.aria-label':
    'Son güncelleme {{relativeTime}}',
  /** Text for tooltip showing explanation of timestamp/relative time, eg "Last updated <RelativeTime/>" */
  'status-bar.publish-status-button.last-updated-time.tooltip': 'Son güncelleme <RelativeTime/>',
  /** Aria label for the button */
  'status-bar.review-changes-button.aria-label': 'Değişiklikleri incele',
  /** Label for button when status is saved */
  'status-bar.review-changes-button.status.saved.text': 'Kaydedildi!',
  /** Label for button when status is syncing */
  'status-bar.review-changes-button.status.syncing.text': 'Kaydediliyor...',
  /** Text for the secondary text for tooltip for the button */
  'status-bar.review-changes-button.tooltip.changes-saved': 'Değişiklikler kaydedildi',
  /** Primary text for tooltip for the button */
  'status-bar.review-changes-button.tooltip.text': 'Değişiklikleri incele',

  /** The text that appears in side the documentation link */
  'structure-error.docs-link.text': 'Dokümantasyona göz at',
  /** Labels the error message or error stack of the structure error screen */
  'structure-error.error.label': 'Hata',
  /** The header that appears at the top of the error screen */
  'structure-error.header.text': 'Yapıyı okurken bir hata ile karşılaşıldı',
  /** The text in the reload button to retry rendering the structure */
  'structure-error.reload-button.text': 'Yeniden Yükle',
  /** Labels the structure path of the structure error screen */
  'structure-error.structure-path.label': 'Yapı yolu',
})
