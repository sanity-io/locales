import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Menu item for deleting the asset */
  'asset-source.asset-list.menu.delete': 'Sil',
  /** Menu item for showing where a particular asset is used */
  'asset-source.asset-list.menu.show-usage': 'Kullanımı Göster',
  /** Header in usage dialog for file assets */
  'asset-source.asset-usage-dialog.header_file': 'Dosyayı kullanan belgeler',
  /** Header in usage dialog for image assets */
  'asset-source.asset-usage-dialog.header_image': 'Resmi kullanan belgeler',
  /** Text shown in usage dialog when loading documents using the selected asset */
  'asset-source.asset-usage-dialog.loading': 'Yükleniyor…',
  /** Text for cancel action in delete-asset dialog */
  'asset-source.delete-dialog.action.cancel': 'İptal',
  /** Text for "confirm delete" action in delete-asset dialog */
  'asset-source.delete-dialog.action.delete': 'Sil',
  /** Dialog header for delete-asset dialog when deleting a file */
  'asset-source.delete-dialog.header_file': 'Dosyayı sil',
  /** Dialog header for delete-asset dialog when deleting an image */
  'asset-source.delete-dialog.header_image': 'Resmi sil',
  /** Text shown in delete dialog when loading documents using the selected asset */
  'asset-source.delete-dialog.loading': 'Yükleniyor…',
  /** Message confirming to delete *named* file */
  'asset-source.delete-dialog.usage-list.confirm-delete-file_named':
    '<strong>{{filename}}}</strong> dosyasını ve metaverilerini silmek üzeresiniz. Emin misiniz?',
  /** Message confirming to delete *unnamed* file */
  'asset-source.delete-dialog.usage-list.confirm-delete-file_unnamed':
    'Dosyayı ve metaverilerini silmek üzeresiniz. Emin misiniz?',
  /** Message confirming to delete *named* image */
  'asset-source.delete-dialog.usage-list.confirm-delete-image_named':
    '<strong>{{filename}}</strong> resmini ve metaverilerini silmek üzeresiniz. Emin misiniz?',
  /** Message confirming to delete *unnamed* image */
  'asset-source.delete-dialog.usage-list.confirm-delete-image_unnamed':
    'Resmi ve metaverilerini silmek üzeresiniz. Emin misiniz?',
  /** Alt text showing on image preview in delete asset dialog  */
  'asset-source.delete-dialog.usage-list.image-preview-alt': 'Resim önizlemesi',
  /** Warning message showing when *named* file can't be deleted because it is in use */
  'asset-source.delete-dialog.usage-list.warning-file-is-in-use_named':
    '{{filename}} silinemez çünkü kullanılmakta. Bu dosyayı silmek için önce tüm kullanımlarını kaldırmanız gerekmektedir.',
  /** Warning message showing when *unnamed* file can't be deleted because it is in use */
  'asset-source.delete-dialog.usage-list.warning-file-is-in-use_unnamed':
    'Bu dosya kullanıldığı için silinemez. Silmek için önce tüm kullanımlarını kaldırmanız gerekmektedir.',
  /** Warning message showing when *named* image can't be deleted because it is in use */
  'asset-source.delete-dialog.usage-list.warning-image-is-in-use_named':
    '{{filename}} silinemez çünkü kullanılmakta. Bu resmi silmek için önce tüm kullanımlarını kaldırmanız gerekmektedir.',
  /** Warning message showing when *unnamed* image can't be deleted because it is in use */
  'asset-source.delete-dialog.usage-list.warning-image-is-in-use_unnamed':
    'Bu resim kullanıldığı için silinemez. Silmek için önce tüm kullanımlarını kaldırmanız gerekmektedir.',
  /** Text shown when the list of assets only include a specific set of types */
  'asset-source.dialog.accept-message':
    'Sadece kabul edilen türlerdeki varlıklar gösteriliyor: <strong>{{acceptTypes}}</strong>',
  /** Keys shared between both image asset source and file asset source */
  /** Select asset dialog title for files */
  'asset-source.dialog.default-title_file': 'Dosya seç',
  /** Select asset dialog title for images */
  'asset-source.dialog.default-title_image': 'Resim seç',
  /** Select asset dialog load more items */
  'asset-source.dialog.load-more': 'Daha fazla yükle',
  /** Text shown when selecting a file but there's no files to select from */
  'asset-source.dialog.no-assets_file': 'Dosya yok',
  /** Text shown when selecting an image but there's no images to select from */
  'asset-source.dialog.no-assets_image': 'Resim yok',
  'asset-source.file.asset-list.action.delete.disabled-cannot-delete-current-file':
    'Şu anda seçili olan dosya silinemez',
  'asset-source.file.asset-list.action.delete.text': 'Sil',
  'asset-source.file.asset-list.action.delete.title': 'Dosyayı sil',
  'asset-source.file.asset-list.action.select-file.title': '{{filename}} dosyasını seç',
  'asset-source.file.asset-list.action.show-usage.title': 'Kullanımı göster',
  'asset-source.file.asset-list.delete-failed': 'Dosya silinemedi',
  'asset-source.file.asset-list.delete-successful': 'Dosya silindi',
  'asset-source.file.asset-list.header.date-added': 'Eklenme tarihi',
  /** File asset source */
  'asset-source.file.asset-list.header.filename': 'Dosya adı',
  'asset-source.file.asset-list.header.size': 'Boyut',
  'asset-source.file.asset-list.header.type': 'Tür',
  /** Text displayed on button or menu invoking the file asset source */
  'asset-source.file.title': 'Yüklenen dosyalar',
  'asset-source.image.asset-list.delete-failed': 'Resim silinemedi',
  /** Image asset source */
  'asset-source.image.asset-list.delete-successful': 'Resim silindi',
  /** Text displayed on button or menu invoking the image asset source */
  'asset-source.image.title': 'Yüklenen resimler',
  'asset-source.usage-list.documents-using-file_named_one':
    'Bir belge <code>{{filename}}</code> dosyasını kullanıyor',
  'asset-source.usage-list.documents-using-file_named_other':
    '{{count}} belge <code>{{filename}}</code> dosyasını kullanıyor',
  /** Text shown in usage dialog for a file asset when there are zero, one or more documents using the *named* file **/
  'asset-source.usage-list.documents-using-file_named_zero':
    'Hiçbir belge <code>{{filename}}</code> dosyasını kullanmıyor',
  'asset-source.usage-list.documents-using-file_unnamed_one': 'Bir belge bu dosyayı kullanıyor',
  'asset-source.usage-list.documents-using-file_unnamed_other':
    '{{count}} belge bu dosyayı kullanıyor',
  /** Text shown in usage dialog for a file asset when there are zero, one or more documents using the *unnamed* file **/
  'asset-source.usage-list.documents-using-file_unnamed_zero':
    'Hiçbir belge bu dosyayı kullanmıyor',
  'asset-source.usage-list.documents-using-image_named_one':
    'Bir belge <code>{{filename}}</code> resmini kullanıyor',
  'asset-source.usage-list.documents-using-image_named_other':
    '{{count}} belge <code>{{filename}}</code> resmini kullanıyor',
  /** Text shown in usage dialog for an image asset when there are zero, one or more documents using the *named* image **/
  'asset-source.usage-list.documents-using-image_named_zero':
    'Hiçbir belge <code>{{filename}}</code> resmini kullanmıyor',
  'asset-source.usage-list.documents-using-image_unnamed_one': 'Bir belge bu resmi kullanıyor',
  'asset-source.usage-list.documents-using-image_unnamed_other':
    '{{count}} belge bu resmi kullanıyor',
  /** Text shown in usage dialog for an image asset when there are zero, one or more documents using the *unnamed* image **/
  'asset-source.usage-list.documents-using-image_unnamed_zero': 'Hiçbir belge bu resmi kullanmıyor',

  /** Action message for navigating to next month */
  'calendar.action.go-to-next-month': 'Bir sonraki aya git',
  /** Action message for navigating to next year */
  'calendar.action.go-to-next-year': 'Bir sonraki yıla git',
  /** Action message for navigating to previous month */
  'calendar.action.go-to-previous-month': 'Bir önceki aya git',
  /** Action message for navigating to previous year */
  'calendar.action.go-to-previous-year': 'Bir önceki yıla git',
  /* Label for navigating the calendar to "today", without _selecting_ today. Short form, eg `Today`, not `Go to today` */
  'calendar.action.go-to-today': 'Bugün',
  /* Accessibility label for navigating the calendar to "today", without _selecting_ today */
  'calendar.action.go-to-today-aria-label': 'Bugüne git',
  /* Label for navigating the calendar to "tomorrow", without _selecting_ tomorrow. Short form, eg `Tomorrow`, not `Go to tomorrow` */
  'calendar.action.go-to-tomorrow': 'Yarın',
  /* Label for navigating the calendar to "yesterday", without _selecting_ yesterday. Short form, eg `Yesterday`, not `Go to yesterday` */
  'calendar.action.go-to-yesterday': 'Dün',
  /** Label for switch that controls whether or not to include time in given timestamp */
  'calendar.action.include-time-label': 'Zamanı dahil et',
  /** Action message for selecting the hour */
  'calendar.action.select-hour': 'Saati seç',
  /** Action message for selecting the minute */
  'calendar.action.select-minute': 'Dakikayı seç',
  /** Action message for setting to the current time */
  'calendar.action.set-to-current-time': 'Şu anki zamana ayarla',
  /** Label for selecting an hour preset. Receives a `time` param as a string on hh:mm format and a `date` param as a Date instance denoting the preset date */
  'calendar.action.set-to-time-preset': '{{time}} tarihinde {{date, datetime}}',
  /** Error message displayed in calendar when entered date is not the correct format */
  'calendar.error.must-be-in-format': '<Emphasis>{{exampleDate}}</Emphasis> formatında olmalıdır',
  /** Month name for April */
  'calendar.month-names.april': 'Nisan',
  /** Month name for August */
  'calendar.month-names.august': 'Ağustos',
  /** Month name for December */
  'calendar.month-names.december': 'Aralık',
  /** Month name for February */
  'calendar.month-names.february': 'Şubat',
  /** Month name for January */
  'calendar.month-names.january': 'Ocak',
  /** Month name for July */
  'calendar.month-names.july': 'Temmuz',
  /** Month name for June */
  'calendar.month-names.june': 'Haziran',
  /** Month name for March */
  'calendar.month-names.march': 'Mart',
  /** Month name for May */
  'calendar.month-names.may': 'Mayıs',
  /** Month name for November */
  'calendar.month-names.november': 'Kasım',
  /** Month name for October */
  'calendar.month-names.october': 'Ekim',
  /** Month name for September */
  'calendar.month-names.september': 'Eylül',
  /** Short weekday name for Friday */
  'calendar.weekday-names.short.friday': 'Cum',
  /** Short weekday name for Monday */
  'calendar.weekday-names.short.monday': 'Pzt',
  /** Short weekday name for Saturdayday */
  'calendar.weekday-names.short.saturday': 'Cmt',
  /** Short weekday name for Sunday */
  'calendar.weekday-names.short.sunday': 'Paz',
  /** Short weekday name for Thursday */
  'calendar.weekday-names.short.thursday': 'Per',
  /** Short weekday name for Tuesday */
  'calendar.weekday-names.short.tuesday': 'Sal',
  /** Short weekday name for Wednesday */
  'calendar.weekday-names.short.wednesday': 'Çar',

  /** Label for the close button label in Review Changes pane */
  'changes.action.close-label': 'Değişiklikleri incelemeyi kapat',
  /** Cancel label for revert button prompt action */
  'changes.action.revert-all-cancel': 'İptal',
  /** Revert all confirm label for revert button action - used on prompt button + review changes pane */
  'changes.action.revert-all-confirm': 'Tümünü geri al',
  /** Prompt for confirming revert change (singular) label for field change action */
  'changes.action.revert-changes-confirm-change_one': 'Değişikliği geri al',
  /** Revert for confirming revert (plural) label for field change action */
  'changes.action.revert-changes-confirm-change_other': 'Değişiklikleri geri al',
  /** Prompt for reverting changes for a field change */
  'changes.action.revert-changes-description':
    'Değişiklikleri geri almak istediğinizden emin misiniz?',
  /** Prompt for reverting changes for a group change, eg multiple changes */
  'changes.action.revert-changes-description_one':
    'Değişikliği geri almak istediğinizden emin misiniz?',
  /** Label for when the action of the change was to set something that was previously empty, eg a field was given a value, an array item was added, an asset was selected or similar */
  'changes.added-label': 'Eklendi',
  /** Array diff: An item was added in a given position (`{{position}}`) */
  'changes.array.item-added-in-position': '{{position}} pozisyonunda eklendi',
  'changes.array.item-moved_down_one': '{{count}} pozisyon aşağı taşındı',
  'changes.array.item-moved_down_other': '{{count}} pozisyon aşağı taşındı',
  /**
   * Array diff: An item was moved within the array.
   * Receives `{{count}}` representing number of positions it moved.
   * Context is the direction of the move, either `up` or `down`.
   */
  'changes.array.item-moved_up_one': '{{count}} pozisyon yukarı taşındı',
  'changes.array.item-moved_up_other': '{{count}} pozisyon yukarı taşındı',
  /** Array diff: An item was removed from a given position (`{{position}}`) */
  'changes.array.item-removed-from-position': '{{position}} pozisyonundan kaldırıldı',
  /** Accessibility label for the "change bar" shown when there are edits on a field-level */
  'changes.change-bar.aria-label': 'Değişiklikleri incele',
  /** Label for when the action of the change was _not_ an add/remove, eg a text field changed value, an image was changed from one asset to another or similar */
  'changes.changed-label': 'Değişti',
  /** Label and text for tooltip that indicates the authors of the changes */
  'changes.changes-by-author': 'Değişiklik yapan',
  /** Additional text shown in development mode when a diff component crashes during rendering */
  'changes.error-boundary.developer-info':
    'Daha fazla bilgi için geliştirici konsolunu kontrol edin',
  /** Text shown when a diff component crashes during rendering, triggering the error boundary */
  'changes.error-boundary.title': 'Bu alanın değişikliklerini işlerken bir hata oluştu',
  /** Error message shown when the value of a field is not the expected one */
  'changes.error.incorrect-type-message':
    'Değer hatası: Değer "<code>{{actualType}}</code>" tipindedir, beklenen "<code>{{expectedType}}</code>"',
  /** File diff: Fallback title for the meta info section when there is no original filename to use  */
  'changes.file.meta-info-fallback-title': 'Başlıksız',
  /** Image diff: Text shown in tooltip when hovering hotspot that has changed in diff view */
  'changes.image.crop-changed': 'Kırpma değişti',
  /** Image diff: Text shown if the previous image asset was deleted (shouldn't theoretically happen) */
  'changes.image.deleted': 'Resim silindi',
  /** Image diff: Text shown if the image failed to be loaded when previewing it */
  'changes.image.error-loading-image': 'Resim yüklenirken hata oluştu',
  /** Image diff: Text shown in tooltip when hovering hotspot that has changed in diff view */
  'changes.image.hotspot-changed': 'Odak noktası değişti',
  /** Image diff: Fallback title for the meta info section when there is no original filename to use  */
  'changes.image.meta-info-fallback-title': 'Başlıksız',
  /** Image diff: Text shown if no asset has been set for the field (but has metadata changes) */
  'changes.image.no-asset-set': 'Resim ayarlanmadı',
  /** Image diff: Text shown when the from/to state has/had no image */
  'changes.image.no-image-placeholder': '(resim yok)',
  /** Label for the "from" value in the change inspector */
  'changes.inspector.from-label': 'Nereden',
  /** Label for the "meta" (field path, action etc) information in the change inspector */
  'changes.inspector.meta-label': 'Meta',
  /** Label for the "to" value in the change inspector */
  'changes.inspector.to-label': 'Nereye',
  /** Loading author of change in the differences tooltip in the review changes pane */
  'changes.loading-author': 'Yükleniyor…',
  /** Loading changes in Review Changes Pane */
  'changes.loading-changes': 'Değişiklikler yükleniyor…',
  /** No Changes description in the Review Changes pane */
  'changes.no-changes-description':
    'Bu panelde bir değişiklik listesinin görünmesi için belgeyi düzenleyin veya zaman çizelgesinde daha eski bir sürümü seçin.',
  /** No Changes title in the Review Changes pane */
  'changes.no-changes-title': 'Değişiklik yok',
  /** Portable Text diff: An annotation was added */
  'changes.portable-text.annotation_added': 'Eklenen not',
  /** Portable Text diff: An annotation was changed */
  'changes.portable-text.annotation_changed': 'Değiştirilen not',
  /** Portable Text diff: An annotation was removed */
  'changes.portable-text.annotation_removed': 'Kaldırılan not',
  /** Portable Text diff: An annotation was left unchanged */
  'changes.portable-text.annotation_unchanged': 'Değişmeyen not',
  /** Portable Text diff: A block changed from one style to another (eg `normal` to `h1` or similar) */
  'changes.portable-text.block-style-changed':
    '"{{fromStyle}}" stilinden "{{toStyle}}" stiline blok stili değişti',
  /** Portable Text diff: Change formatting of text (setting/unsetting marks, eg bold/italic etc) */
  'changes.portable-text.changed-formatting': 'Biçimlendirme değiştirildi',
  /** Portable Text diff: An empty inline object is part of a change */
  'changes.portable-text.empty-inline-object': 'Boş {{inlineObjectType}}',
  /** Portable Text diff: An empty object is the result of adding/removing an annotation */
  'changes.portable-text.empty-object-annotation': 'Boş {{annotationType}}',
  /** Portable Text diff: Added a block containing no text (eg empty block) */
  'changes.portable-text.empty-text_added': 'Boş metin eklendi',
  /** Portable Text diff: Changed a block that contained no text (eg empty block) */
  'changes.portable-text.empty-text_changed': 'Boş metin değiştirildi',
  /** Portable Text diff: Removed a block containing no text (eg empty block) */
  'changes.portable-text.empty-text_removed': 'Boş metin kaldırıldı',
  /** Portable Text diff: An inline object was added */
  'changes.portable-text.inline-object_added': 'Satır içi nesne eklendi',
  /** Portable Text diff: An inline object was changed */
  'changes.portable-text.inline-object_changed': 'Satır içi nesne değiştirildi',
  /** Portable Text diff: An inline object was removed */
  'changes.portable-text.inline-object_removed': 'Satır içi nesne kaldırıldı',
  /** Portable Text diff: An inline object was left unchanged */
  'changes.portable-text.inline-object_unchanged': 'Değişmeyen satır içi nesne',
  /** Portable Text diff: Added a chunk of text */
  'changes.portable-text.text_added': 'Metin eklendi',
  /** Portable Text diff: Removed a chunk of text */
  'changes.portable-text.text_removed': 'Metin kaldırıldı',
  /** Portable Text diff: Annotation has an unknown schema type */
  'changes.portable-text.unknown-annotation-schema-type': 'Bilinmeyen şema tipi',
  /** Portable Text diff: Inline object has an unknown schema type */
  'changes.portable-text.unknown-inline-object-schema-type': 'Bilinmeyen şema tipi',
  /** Label for when the action of the change was a removal, eg a field was cleared, an array item was removed, an asset was deselected or similar */
  'changes.removed-label': 'Kaldırıldı',
  /** Title for the Review Changes pane */
  'changes.title': 'Değişiklikleri İncele',

  /** --- Common components --- */
  /** Tooltip text for context menu buttons */
  'common.context-menu-button.tooltip': 'Daha fazla göster',
  /** Default text for dialog cancel button */
  'common.dialog.cancel-button.text': 'İptal',
  /** Default text for dialog confirm button */
  'common.dialog.confirm-button.text': 'Onayla',
  /** Default text in shared loader text / spinner lockup */
  'common.loading': 'Yükleniyor',

  /** --- Configuration issues --- */
  /** Tooltip displayed on configuration issues button */
  'configuration-issues.button.tooltip': 'Yapılandırma sorunları bulundu',

  /** The fallback title for an ordering menu item if no localized titles are provided. */
  'default-menu-item.fallback-title': 'Sırala {{title}}',

  /** Title for the default ordering/SortOrder if no orderings are provided and the caption field is found */
  'default-orderings.caption': 'Başlığa Göre Sırala',
  /** Title for the default ordering/SortOrder if no orderings are provided and the description field is found */
  'default-orderings.description': 'Açıklamaya Göre Sırala',
  /** Title for the default ordering/SortOrder if no orderings are provided and the header field is found */
  'default-orderings.header': 'Üst Bilgiye Göre Sırala',
  /** Title for the default ordering/SortOrder if no orderings are provided and the heading field is found */
  'default-orderings.heading': 'Başlığa Göre Sırala',
  /** Title for the default ordering/SortOrder if no orderings are provided and the label field is found */
  'default-orderings.label': 'Etikete Göre Sırala',
  /** Title for the default ordering/SortOrder if no orderings are provided and the name field is found */
  'default-orderings.name': 'İsme Göre Sırala',
  /** Title for the default ordering/SortOrder if no orderings are provided and the title field is found */
  'default-orderings.title': 'Başlığa Göre Sırala',

  /** Label to show in the document footer indicating the last edited date of the document */
  'document-status.edited': '{{date}} tarihinde düzenlendi',
  /** Label to show in the document footer indicating the document is not published*/
  'document-status.not-published': 'Yayınlanmadı',
  /** Label to show in the document footer indicating the published date of the document */
  'document-status.published': '{{date}} tarihinde yayınlandı',

  /** The value of the <code>_key</code> property must be a unique string. */
  'form.error.duplicate-keys-alert.details.additional-description':
    '<code>_key</code> özelliğinin değeri benzersiz bir dize olmalıdır.',
  /** This usually happens when items are created using an API client, and the <code>_key</code> property of each elements has been generated non-uniquely. */
  'form.error.duplicate-keys-alert.details.description':
    'Bu genellikle öğeler bir API istemcisi kullanılarak oluşturulduğunda ve her bir elemanın <code>_key</code> özelliği benzersiz olmayan bir şekilde üretildiğinde meydana gelir.',
  /** Developer info */
  'form.error.duplicate-keys-alert.details.title': 'Geliştirici bilgisi',
  /** Generate unique keys */
  'form.error.duplicate-keys-alert.generate-button.text': 'Benzersiz anahtarlar oluştur',
  /** Several items in this list share the same identifier (key). Every item must have an unique identifier. */
  'form.error.duplicate-keys-alert.summary':
    'Bu listedeki birkaç öğe aynı tanımlayıcıyı (anahtar) paylaşıyor. Her öğenin benzersiz bir tanımlayıcısı olmalıdır.',
  /** Non-unique keys */
  'form.error.duplicate-keys-alert.title': 'Benzersiz olmayan anahtarlar',
  /** Error text shown when a field with a given name cannot be found in the schema or is conditionally hidden but explicitly told to render  */
  'form.error.field-not-found':
    '"{{fieldName}}" alanı üyeler arasında bulunamadı – şemanızda tanımlandığından ve koşullu olarak gizlenmediğinden emin olun.',
  /** Add missing keys */
  'form.error.missing-keys-alert.add-button.text': 'Eksik anahtarları ekle',
  /** The value of the <code>_key</code> property must be a unique string. */
  'form.error.missing-keys-alert.details.additional-description':
    '<code>_key</code> özelliğinin değeri benzersiz bir dize olmalıdır.',
  /** This usually happens when items are created using an API client, and the <code>_key</code> property has not been included. */
  'form.error.missing-keys-alert.details.description':
    'Bu genellikle öğeler bir API istemcisi kullanılarak oluşturulduğunda ve <code>_key</code> özelliği dahil edilmemiş olduğunda olur.',
  /** Developer info */
  'form.error.missing-keys-alert.details.title': 'Geliştirici bilgisi',
  /** Some items in the list are missing their keys. This must be fixed in order to edit the list. */
  'form.error.missing-keys-alert.summary':
    'Listedeki bazı öğelerin anahtarları eksik. Listeyi düzenleyebilmek için bu sorunun düzeltilmesi gerekiyor.',
  /** Missing keys */
  'form.error.missing-keys-alert.title': 'Eksik anahtarlar',
  /** This usually happens when items are created using an API client, or when a custom input component has added invalid data to the list. */
  'form.error.mixed-array-alert.details.description':
    'Bu genellikle öğeler bir API istemcisi kullanılarak oluşturulduğunda veya özel bir giriş bileşeni listeye geçersiz veri eklediğinde olur.',
  /** Developer info */
  'form.error.mixed-array-alert.details.title': 'Geliştirici bilgisi',
  /**  Remove non-object values */
  'form.error.mixed-array-alert.remove-button.text': 'Nesne olmayan değerleri kaldır',
  /** Some items in this list are not objects. This must be fixed in order to edit the list. */
  'form.error.mixed-array-alert.summary':
    'Bu listedeki bazı öğeler nesne değil. Listeyi düzenleyebilmek için bu sorunun düzeltilmesi gerekiyor.',
  /** Invalid list values */
  'form.error.mixed-array-alert.title': 'Geçersiz liste değerleri',
  /** Error text shown when form is unable to find an array item at a given indexed path */
  'form.error.no-array-item-at-index':
    'Belirtilen yolda <code>{{index}}</code> indeksinde bir dizi öğesi bulunamadı <code>{{path}}</code>',
  /** Error text shown when form is unable to find an array item at a given keyed path */
  'form.error.no-array-item-at-key':
    'Belirtilen yolda `_key` <code>"{{key}}"</code> ile bir dizi öğesi bulunamadı <code>{{path}}</code>',
  /** Form field deprecated label */
  'form.field.deprecated-label': 'kullanım dışı',
  /** Fallback title shown above field if it has no defined title */
  'form.field.untitled-field-label': 'Başlıksız',
  /** Fallback title shown above fieldset if it has no defined title */
  'form.field.untitled-fieldset-label': 'Başlıksız',
  /** Accessibility label for the icon that indicates the field has a validation error */
  'form.validation.has-error-aria-label': 'Hata var',
  /** Accessibility label for the icon that indicates the field has validation information */
  'form.validation.has-info-aria-label': 'Bilgi var',
  /** Accessibility label for the icon that indicates the field has a validation warning */
  'form.validation.has-warning-aria-label': 'Uyarı var',
  /** Text shown when summarizing validation information, when the field has one or more errors */
  'form.validation.summary.errors-count_one': '{{count}} hata',
  'form.validation.summary.errors-count_other': '{{count}} hata',
  /** Text shown when summarizing validation information, when the field has one or more warnings */
  'form.validation.summary.warnings-count_one': '{{count}} uyarı',
  'form.validation.summary.warnings-count_other': '{{count}} uyarı',

  /** Tooltip for free trial navbar button indicating remaining days */
  'free-trial.tooltip.days-count_one': 'deneme süresinde {{count}} gün kaldı',
  'free-trial.tooltip.days-count_other': 'deneme süresinde {{count}} gün kaldı',
  /** Tooltip for free trial navbar button, once trial has ended */
  'free-trial.tooltip.trial-finished': 'Projeyi yükselt',

  /**
   * Label for "contact sales" call to action
   * These are titles for fallback links in the event the help & resources endpoint isn't able to be fetched
   */
  'help-resources.action.contact-sales': 'Satış ile iletişime geçin',
  /**
   * Label for "help and support" call to action
   * These are titles for fallback links in the event the help & resources endpoint isn't able to be fetched
   */
  'help-resources.action.help-and-support': 'Yardım ve destek',
  /**
   * Label for "join our community" call to action
   * These are titles for fallback links in the event the help & resources endpoint isn't able to be fetched
   */
  'help-resources.action.join-our-community': 'Topluluğumuza katılın',
  /** Information for what the latest sanity version is */
  'help-resources.latest-sanity-version': 'En son sürüm {{latestVersion}}',
  /** Information for what studio version the current studio is running */
  'help-resources.studio-version': 'Sanity Studio sürümü {{studioVersion}}',
  /** Title for help and resources menus */
  'help-resources.title': 'Yardım ve kaynaklar',

  /** Text for button to cancel an ongoing upload */
  'input.files.common.cancel-upload': 'İptal Et',
  /** Text for file input button in upload placeholder */
  'input.files.common.upload-placeholder.file-input-button.text': 'Yükle',
  /** Uploading <FileName/> */
  'input.files.common.upload-progress': '<FileName/> yükleniyor',
  /** The referenced document cannot be opened, because the URL failed to be resolved */
  'input.reference.document-cannot-be-opened.failed-to-resolve-url':
    "Bu belge açılamıyor (URL Studio'ya çözümlenemedi)",

  /** Label for adding item after a specific array item */
  'inputs.array.action.add-after': 'Sonrasına öğe ekle',
  /** Label for adding item before a specific array item */
  'inputs.array.action.add-before': 'Öncesine öğe ekle',
  /** Label for adding array item action when the schema allows for only one schema type */
  'inputs.array.action.add-item': 'Öğe ekle',
  /**
   * Label for adding one array item action when the schema allows for multiple schema types,
   * eg. will prompt the user to select a type once triggered
   */
  'inputs.array.action.add-item-select-type': 'Öğe ekle...',
  /** Array drag handle button tooltip */
  'inputs.array.action.drag.tooltip': 'Sıralamak için sürükleyin',
  /** Label for duplicating an array item  */
  'inputs.array.action.duplicate': 'Çoğalt',
  /** Label for editing the item of a specific type, eg "Edit Person" */
  'inputs.array.action.edit': '{{itemTypeTitle}} Düzenle',
  /** Label for removing an array item action  */
  'inputs.array.action.remove': 'Kaldır',
  /** Label for removing action when an array item has an error  */
  'inputs.array.action.remove-invalid-item': 'Kaldır',
  /** Label for viewing the item of a specific type, eg "View Person" */
  'inputs.array.action.view': '{{itemTypeTitle}} Görüntüle',
  /** Error description for the array item tooltip that explains that the current item can still be moved or deleted but not edited since the schema definition is not found */
  'inputs.array.error.can-delete-but-no-edit-description':
    'Bu öğeyi hala taşıyabilir veya silebilirsiniz, ancak türünün şema tanımı bulunamadığı için düzenlenemez.',
  /** Error label for toast when array could not resolve the initial value */
  'inputs.array.error.cannot-resolve-initial-value-title':
    'Tür için başlangıç değeri çözümlenemiyor: {{schemaTypeTitle}}: {{errorMessage}}.',
  /** Error label for toast when trying to upload one array item of a type that cannot be converted to array */
  'inputs.array.error.cannot-upload-unable-to-convert_one':
    'Aşağıdaki öğe yüklenemiyor çünkü içerik türünden dizi öğesine bilinen bir dönüşüm yok:',
  /** Error label for toast when trying to upload multiple array items of a type that cannot be converted to array */
  'inputs.array.error.cannot-upload-unable-to-convert_other':
    'Aşağıdaki öğeler yüklenemiyor çünkü içerik türlerinden dizi öğesine bilinen bir dönüşüm yok:',
  /** Error description for the array item tooltip that explains that the current type item is not valid for the list  */
  'inputs.array.error.current-schema-not-declare-description':
    'Mevcut şema, bu liste için <code>{{typeName}}</code> türündeki öğeleri geçerli olarak ilan etmiyor. Bu, türün geçerli bir öğe türü olarak kaldırıldığı veya başka birinin henüz dağıtılmamış olan kendi yerel şemalarına eklediği anlamına gelebilir.',
  /** Error description to show how the item is being represented in the json format */
  'inputs.array.error.json-representation-description': 'Bu öğenin JSON temsili:',
  /** Error description for the array item tooltip that explains what the error means with more context */
  'inputs.array.error.type-is-incompatible-prompt':
    'Bu liste için <code>{{typeName}}</code> türündeki öğe geçerli değil',
  /** Error title for when an item type within an array input is incompatible, used in the tooltip */
  'inputs.array.error.type-is-incompatible-title': 'Bu neden oluyor?',
  /** Error label for unexpected errors in the Array Input */
  'inputs.array.error.unexpected-error': 'Beklenmeyen Hata: {{error}}',
  /** Label for when the array input doesn't have any items */
  'inputs.array.no-items-label': 'Öğe yok',
  /** Label for read only array fields */
  'inputs.array.read-only-label': 'Bu alan salt okunurdur',
  /** Label for when the array input is resolving the initial value for the item */
  'inputs.array.resolving-initial-value': 'Başlangıç değeri çözümleniyor…',
  /** Placeholder value for datetime input */
  'inputs.datetime.placeholder': 'örn. {{example}}',
  /** Acessibility label for button to open file options menu */
  'inputs.file.actions-menu.file-options.aria-label': 'Dosya seçenekleri menüsünü aç',
  /** Browse */
  'inputs.file.browse-button.text': 'Göz at',
  /** Select file */
  'inputs.file.dialog.title': 'Dosya seç',
  /** Unknown member kind: `{{kind}}` */
  'inputs.file.error.unknown-member-kind': 'Bilinmeyen üye türü: {{kind}}',
  /** The value of this field is not a valid file. Resetting this field will let you choose a new file. */
  'inputs.file.invalid-file-warning.description':
    'Bu alanın değeri geçerli bir dosya değil. Bu alanı sıfırlamak yeni bir dosya seçmenize olanak tanır.',
  /** Reset value */
  'inputs.file.invalid-file-warning.reset-button.text': 'Değeri sıfırla',
  /** Invalid file value */
  'inputs.file.invalid-file-warning.title': 'Geçersiz dosya değeri',
  /** Select */
  'inputs.file.multi-browse-button.text': 'Seç',
  /** The upload could not be completed at this time. */
  'inputs.file.upload-failed.description': 'Yükleme şu anda tamamlanamadı.',
  /** Upload failed */
  'inputs.file.upload-failed.title': 'Yükleme başarısız',
  /** Clear field */
  'inputs.files.common.actions-menu.clear-field.label': 'Alanı temizle',
  /** Copy URL */
  'inputs.files.common.actions-menu.copy-url.label': "URL'yi kopyala",
  /** Download */
  'inputs.files.common.actions-menu.download.label': 'İndir',
  /** The URL is copied to the clipboard */
  'inputs.files.common.actions-menu.notification.url-copied': 'URL panoya kopyalandı',
  /** Replace */
  'inputs.files.common.actions-menu.replace.label': 'Değiştir',
  /** Upload */
  'inputs.files.common.actions-menu.upload.label': 'Yükle',
  /** Drop to upload */
  'inputs.files.common.drop-message.drop-to-upload': 'Yüklemek için bırak',
  /** Drop to upload `{{count}}` file */
  'inputs.files.common.drop-message.drop-to-upload-multi_one':
    '{{count}} dosyayı yüklemek için bırak',
  /** Drop to upload `{{count}}` files */
  'inputs.files.common.drop-message.drop-to-upload-multi_other':
    '{{count}} dosyayı yüklemek için bırak',
  /** Can't upload this file here */
  'inputs.files.common.drop-message.drop-to-upload.no-accepted-file-message_one':
    'Bu dosya buraya yüklenemez',
  /** Can't upload any of these files here */
  'inputs.files.common.drop-message.drop-to-upload.no-accepted-file-message_other':
    'Bu dosyaların hiçbiri buraya yüklenemez',
  /** `{{count}}` file can't be uploaded here */
  'inputs.files.common.drop-message.drop-to-upload.rejected-file-message_one':
    '{{count}} dosya buraya yüklenemez',
  /** `{{count}}` files can't be uploaded here */
  'inputs.files.common.drop-message.drop-to-upload.rejected-file-message_other':
    '{{count}} dosya buraya yüklenemez',
  /** Cannot upload `{{count}}` files */
  'inputs.files.common.placeholder.cannot-upload-some-files_one': 'Dosya yüklenemiyor',
  'inputs.files.common.placeholder.cannot-upload-some-files_other': '{{count}} dosya yüklenemiyor',
  /** Drag or paste type here */
  'inputs.files.common.placeholder.drag-or-paste-to-upload_file':
    'Dosyayı buraya sürükleyin veya yapıştırın',
  /** Drag or paste image here */
  'inputs.files.common.placeholder.drag-or-paste-to-upload_image':
    'Resmi buraya sürükleyin veya yapıştırın',
  /** Drop to upload file */
  'inputs.files.common.placeholder.drop-to-upload_file': 'Yüklemek için dosyayı bırakın',
  /** Drop to upload image */
  'inputs.files.common.placeholder.drop-to-upload_image': 'Yüklemek için resmi bırakın',
  /** Read only */
  'inputs.files.common.placeholder.read-only': 'Salt okunur',
  /** Can't upload files here */
  'inputs.files.common.placeholder.upload-not-supported': 'Dosyalar buraya yüklenemez',
  /** Clear upload */
  'inputs.files.common.stale-upload-warning.clear': 'Yüklemeyi temizle',
  /** An upload has made no progress for at least `{{staleThresholdMinutes}}` minutes and likely got interrupted. You can safely clear the incomplete upload and try uploading again. */
  'inputs.files.common.stale-upload-warning.description':
    'Bir yükleme en az {{staleThresholdMinutes}} dakika boyunca ilerleme kaydetmedi ve muhtemelen kesildi. Eksik yüklemeyi güvenle temizleyebilir ve tekrar yüklemeyi deneyebilirsiniz.',
  /** Incomplete upload */
  'inputs.files.common.stale-upload-warning.title': 'Eksik yükleme',
  /** Tooltip text for action to crop image */
  'inputs.image.actions-menu.crop-image-tooltip': 'Resmi kırp',
  /** Accessibility label for button to open image edit dialog */
  'inputs.image.actions-menu.edit-details.aria-label': 'Resim düzenleme diyalogunu aç',
  /** Accessibility label for button to open image options menu */
  'inputs.image.actions-menu.options.aria-label': 'Resim seçenekleri menüsünü aç',
  /** Select */
  'inputs.image.browse-menu.text': 'Seç',
  /** Cannot upload this file here */
  'inputs.image.drag-overlay.cannot-upload-here': 'Bu dosya buraya yüklenemez',
  /** Drop image to upload */
  'inputs.image.drag-overlay.drop-to-upload-image': 'Yüklemek için resmi bırakın',
  /** This field is read only */
  'inputs.image.drag-overlay.this-field-is-read-only': 'Bu alan salt okunurdur',
  /** Unknown member kind: `{{kind}}` */
  'inputs.image.error.unknown-member-kind': 'Bilinmeyen üye türü: {{kind}}',
  /** Edit hotspot and crop */
  'inputs.image.hotspot-dialog.title': 'Odak noktasını ve kırpma alanını düzenle',
  /** The value of this field is not a valid image. Resetting this field will let you choose a new image. */
  'inputs.image.invalid-image-warning.description':
    'Bu alanın değeri geçerli bir resim değil. Bu alanı sıfırlamak yeni bir resim seçmenize olanak tanır.',
  /** Reset value */
  'inputs.image.invalid-image-warning.reset-button.text': 'Değeri sıfırla',
  /** Invalid image value */
  'inputs.image.invalid-image-warning.title': 'Geçersiz resim değeri',
  /** Preview of uploaded image */
  'inputs.image.preview-uploaded-image': 'Yüklenen resmin önizlemesi',
  /** The upload could not be completed at this time. */
  'inputs.image.upload-error.description': 'Yükleme şu anda tamamlanamadı.',
  /** Upload failed */
  'inputs.image.upload-error.title': 'Yükleme başarısız',
  /** Adjust the rectangle to crop image. Adjust the circle to specify the area that should always be visible. */
  'inputs.imagetool.description':
    'Dikdörtgeni resmi kırpmak için ayarlayın. Daima görünür olması gereken alanı belirtmek için daireyi ayarlayın.',
  /** Error: `{{errorMessage}}` */
  'inputs.imagetool.load-error': 'Hata: {{errorMessage}}',
  /** Hotspot & Crop */
  'inputs.imagetool.title': 'Hotspot & Crop',
  /** Convert to `{{targetType}}` */
  'inputs.invalid-value.convert-button.text': '<code>{{targetType}}</code> dönüştür',
  /** The current value (<code>`{{actualType}}`</code>) */
  'inputs.invalid-value.current-type': 'Mevcut değer (<code>{{actualType}}</code>)',
  /** The property value is stored as a value type that does not match the expected type. */
  'inputs.invalid-value.description':
    'Özellik değeri, beklenen değer türüyle eşleşmeyen bir değer türü olarak saklanır.',
  /** The value of this property must be of type <code>`{{validType}}`</code> according to the schema. */
  'inputs.invalid-value.details.description':
    'Bu özelliğin değeri, şemaya göre <code>{{validType}}</code> türünde olmalıdır.',
  /** Only the following types are valid here according to schema: */
  'inputs.invalid-value.details.multi-type-description':
    'Şemaya göre burada yalnızca aşağıdaki türler geçerlidir:',
  /** Mismatching value types typically occur when the schema has recently been changed. */
  'inputs.invalid-value.details.possible-reason':
    'Uyuşmayan değer türleri genellikle şema yakın zamanda değiştirildiğinde ortaya çıkar.',
  /** Developer info */
  'inputs.invalid-value.details.title': 'Geliştirici bilgisi',
  /** -- Invalid Value Input -- */
  /** Reset value */
  'inputs.invalid-value.reset-button.text': 'Değeri sıfırla',
  /** Invalid property value */
  'inputs.invalid-value.title': 'Geçersiz özellik değeri',
  /** Field groups */
  'inputs.object.field-group-tabs.aria-label': 'Alan grupları',
  /** Read-only field description */
  'inputs.object.unknown-fields.read-only.description':
    'Bu alan, belgenin şemasına göre <strong>sadece okunabilir</strong> ve kaldırılamaz. Stüdyoda bunu kaldırabilmek istiyorsanız, şemadaki kapsayıcı türden <code>readOnly</code> alanını kaldırdığınızdan emin olun.',
  /** Remove field */
  'inputs.object.unknown-fields.remove-field-button.text': 'Alanı kaldır',
  /** Encountered `{{count}}` fields that are not defined in the schema. */
  'inputs.object.unknown-fields.warning.description_one':
    'Şemada tanımlanmamış bir alanla karşılaşıldı.',
  'inputs.object.unknown-fields.warning.description_other':
    'Şemada tanımlanmamış {{count}} alanla karşılaşıldı.',
  /** Detailed description of unknown field warning */
  'inputs.object.unknown-fields.warning.details.description_one':
    'Bu alan şemada tanımlanmamış, bu da alan tanımının kaldırılmış olabileceği veya bir başkasının kendi yerel projelerine ekleyip henüz değişiklikleri yayınlamamış olabileceği anlamına gelebilir.',
  'inputs.object.unknown-fields.warning.details.description_other':
    'Bu alanlar belgenin şemasında tanımlanmamış, bu da alan tanımlarının kaldırılmış olabileceği veya bir başkasının kendi yerel projelerine ekleyip henüz değişiklikleri yayınlamamış olabileceği anlamına gelebilir.',
  /** Developer info */
  'inputs.object.unknown-fields.warning.details.title': 'Geliştirici bilgisi',
  /** Unknown field found */
  'inputs.object.unknown-fields.warning.title_one': 'Bilinmeyen alan bulundu',
  'inputs.object.unknown-fields.warning.title_other': 'Bilinmeyen alanlar bulundu',
  /** Collapse the editor to save screen space  */
  'inputs.portable-text.action.collapse-editor': 'Editörü daraltarak ekran alanından tasarruf edin',
  /** Aria label for action to edit an existing annotation */
  'inputs.portable-text.action.edit-annotation-aria-label': 'Notu düzenle',
  /** Expand the editor to give more editing space */
  'inputs.portable-text.action.expand-editor': 'Editörü Genişlet',
  /** Label label for action to insert a block of a given type (`{{typeName}}`) */
  'inputs.portable-text.action.insert-block': '{{typeName}} Ekle',
  /** Accessibility label for action to insert a block of a given type (`{{typeName}}`) */
  'inputs.portable-text.action.insert-block-aria-label': '{{typeName}} (blok) Ekle',
  /** Label for action to insert an inline object of a given type (`{{typeName}}`) */
  'inputs.portable-text.action.insert-inline-object': '{{typeName}} Ekle',
  /** Accessibility label for action to insert an inline object of a given type (`{{typeName}}`) */
  'inputs.portable-text.action.insert-inline-object-aria-label': '{{typeName}} (satır içi) Ekle',
  /** Aria label for action to remove an annotation */
  'inputs.portable-text.action.remove-annotation-aria-label': 'Notu kaldır',
  /** Label for activate on focus with context of click and not focused */
  'inputs.portable-text.activate-on-focus-message_click': 'Etkinleştirmek için tıklayın',
  /** Label for activate on focus with context of click and focused */
  'inputs.portable-text.activate-on-focus-message_click-focused':
    'Etkinleştirmek için tıklayın veya boşluk tuşuna basın',
  /** Label for activate on focus with context of tap and not focused */
  'inputs.portable-text.activate-on-focus-message_tap': 'Etkinleştirmek için dokunun',
  /**Aria label for the annotation object */
  'inputs.portable-text.annotation-aria-label': 'Not nesnesi',
  /** Title for dialog that allows editing an annotation */
  'inputs.portable-text.annotation-editor.title': '{{schemaType}} Düzenle',
  /** Title of the default "link" annotation */
  'inputs.portable-text.annotation.link': 'Bağlantı',
  /**Aria label for the block object */
  'inputs.portable-text.block.aria-label': 'Blok nesnesi',
  /** Label for action to edit a block item, in the case where it is editable */
  'inputs.portable-text.block.edit': 'Düzenle',
  /** Accessibility label for the button that opens the actions menu on blocks */
  'inputs.portable-text.block.open-menu-aria-label': 'Menüyü Aç',
  /** Label for action to open a reference, in the case of block-level reference types */
  'inputs.portable-text.block.open-reference': 'Referansı Aç',
  /** Label for action to remove a block item */
  'inputs.portable-text.block.remove': 'Kaldır',
  /** Label for action to view a block item, in the case where it is read-only and thus cannot be edited */
  'inputs.portable-text.block.view': 'Görüntüle',
  /** Title of the "code" decorator */
  'inputs.portable-text.decorator.code': 'Kod',
  /** Title of the "em" (emphasis) decorator */
  'inputs.portable-text.decorator.emphasis': 'İtalik',
  /** Title of the "strike-through" decorator */
  'inputs.portable-text.decorator.strike-through': 'Üstü Çizili',
  /** Title of the "strong" decorator */
  'inputs.portable-text.decorator.strong': 'Kalın',
  /** Title of the "underline" decorator */
  'inputs.portable-text.decorator.underline': 'Altı Çizili',
  /** Placeholder text for when the editor is empty */
  'inputs.portable-text.empty-placeholder': 'Boş',
  /**Aria label for the block object */
  'inputs.portable-text.inline-block.aria-label': 'Satır içi nesne',
  /** Label for action to edit an inline object item */
  'inputs.portable-text.inline-object.edit': 'Nesneyi Düzenle',
  /** Aria label for icon for action to edit an inline object item */
  'inputs.portable-text.inline-object.edit-aria-label': 'Nesneyi düzenle',
  /** Label for action to remove an inline object item */
  'inputs.portable-text.inline-object.remove': 'Nesneyi Kaldır',
  /** Aria label for icon for action to remove an inline object item */
  'inputs.portable-text.inline-object.remove-aria-label': 'Nesneyi kaldır',
  /** Disclaimer text shown on invalid Portable Text value, when an action is available to unblock the user, but it is not guaranteed to be safe */
  'inputs.portable-text.invalid-value.action-disclaimer':
    'NOT: Yukarıdaki işlemi gerçekleştirmek genellikle güvenlidir, ancak şüpheniz varsa stüdyonuzu yapılandıran kişilerle iletişime geçin.',
  /** Action presented when the Portable Text field value is invalid, when block with key `{{key}}` has a child with key `{{childKey}}` of type `{{childType}}` which is not allowed by the schema definition */
  'inputs.portable-text.invalid-value.disallowed-child-type.action': 'Nesneyi kaldır',
  /** Text explaining that the Portable Text field value is invalid, when block with key `{{key}}` has a child with key `{{childKey}}` of type `{{childType}}` which is not allowed by the schema definition */
  'inputs.portable-text.invalid-value.disallowed-child-type.description':
    '<code>{{key}}</code> anahtarlı bloğun <code>{{childType}}</code> tipindeki <code>{{childKey}}</code> anahtarlı çocuğu, şema tanımına göre izin verilmeyen bir türde.',
  /** Action presented when the Portable Text field value is invalid, when child with key `{{key}}` has a type (`{{typeName}}`) that is not an allowed block type for this field */
  'inputs.portable-text.invalid-value.disallowed-type.action': 'Bloğu kaldır',
  /** Text explaining that the Portable Text field value is invalid, when child with key `{{key}}` has a type (`{{typeName}}`) that is not an allowed block type for this field */
  'inputs.portable-text.invalid-value.disallowed-type.description':
    '<code>{{key}}</code> anahtarlı blok <code>{{typeName}}</code> tipinde, bu da şema tarafından bu alan için izin verilen bir blok türü değil.',
  /** Action presented when the Portable Text field value is invalid, when block with key `{{key}}` contains no children */
  'inputs.portable-text.invalid-value.empty-children.action': 'Boş metin aralığı ekle',
  /** Text explaining that the Portable Text field value is invalid, when block with key `{{key}}` contains no children */
  'inputs.portable-text.invalid-value.empty-children.description':
    '<code>{{key}}</code> anahtarlı metin bloğunun hiç metin aralığı yok.',
  /** Label for the button to ignore invalid values in the Portable Text editor */
  'inputs.portable-text.invalid-value.ignore-button.text': 'Yoksay',
  /** Action presented when the Portable Text field value is invalid, when child with key `{{key}}` has a `_type` property that is set to `block`, but the block type defined in schema has a different name (`{{expectedTypeName}}`) */
  'inputs.portable-text.invalid-value.incorrect-block-type.action':
    '<code>{{expectedTypeName}}</code> tipini kullan',
  /** Text explaining that the Portable Text field value is invalid, when child with key `{{key}}` has a `_type` property that is set to `block`, but the block type defined in schema has a different name (`{{expectedTypeName}}`) */
  'inputs.portable-text.invalid-value.incorrect-block-type.description':
    '<code>{{key}}</code> anahtarlı blok geçersiz bir tip adına sahip. Şemaya göre, <code>{{expectedTypeName}}</code> olmalıdır.',
  /** Action presented when the Portable Text field value is invalid, when block with key `{{key}}` has a span with key `{{childKey}}` that has a missing or invalid `text` property */
  'inputs.portable-text.invalid-value.invalid-span-text.action': 'Boş metin değeri ayarla',
  /** Text explaining that the Portable Text field value is invalid, when block with key `{{key}}` has a span with key `{{childKey}}` that has a missing or invalid `text` property */
  'inputs.portable-text.invalid-value.invalid-span-text.description':
    '<code>{{key}}</code> anahtarlı bloğun <code>{{childKey}}</code> anahtarlı aralığının eksik veya geçersiz bir <code>text</code> özelliği var.',
  /** Action presented when the Portable Text field value is invalid, when child with key `{{key}}` is missing a `_type` property, but seems to be a block of type `{{expectedTypeName}}` */
  'inputs.portable-text.invalid-value.missing-block-type.action':
    '<code>{{expectedTypeName}}</code> tipini kullan',
  /** Text explaining that the Portable Text field value is invalid, when child with key `{{key}}` is missing a `_type` property, but seems to be a block of type `{{expectedTypeName}}` */
  'inputs.portable-text.invalid-value.missing-block-type.description':
    '<code>{{key}}</code> anahtarlı blok bir tip adı eksik. Şemaya göre, <code>{{expectedTypeName}}</code> olmalıdır.',
  /** Action presented when the Portable Text field value is invalid, when block with key `{{key}}` has a child at `{{index}}` which is missing `_key` property */
  'inputs.portable-text.invalid-value.missing-child-key.action': 'Rastgele anahtar ata',
  /** Text explaining that the Portable Text field value is invalid, when block with key `{{key}}` has a child at `{{index}}` which is missing `_key` property */
  'inputs.portable-text.invalid-value.missing-child-key.description':
    '<code>{{key}}</code> anahtarlı bloğun <code>{{index}}</code> indeksindeki çocuğun <code>_key</code> özelliği eksik.',
  /** Action presented when the Portable Text field value is invalid, when block with key `{{key}}` has a child with key `{{childKey}}` which is missing a `_type` property */
  'inputs.portable-text.invalid-value.missing-child-type.action': 'Nesneyi kaldır',
  /** Text explaining that the Portable Text field value is invalid, when block with key `{{key}}` has a child with key `{{childKey}}` which is missing a `_type` property */
  'inputs.portable-text.invalid-value.missing-child-type.description':
    '<code>{{key}}</code> anahtarlı bloğun <code>{{childKey}}</code> anahtarlı çocuğu <code>_type</code> özelliği eksik.',
  /** Action presented when the Portable Text field value is invalid, when child at `{{index}}` is missing the required `_key` property */
  'inputs.portable-text.invalid-value.missing-key.action': 'Rastgele anahtar ata',
  /** Text explaining that the Portable Text field value is invalid, when child at `{{index}}` is missing the required `_key` property */
  'inputs.portable-text.invalid-value.missing-key.description':
    '<code>{{index}}</code> indeksindeki blok gerekli <code>_key</code> özelliği eksik.',
  /** Action presented when the Portable Text field value is invalid, when child with key `{{key}}` has a missing or invalid `children` property */
  'inputs.portable-text.invalid-value.missing-or-invalid-children.action': 'Bloğu kaldır',
  /** Text explaining that the Portable Text field value is invalid, when child with key `{{key}}` has a missing or invalid `children` property */
  'inputs.portable-text.invalid-value.missing-or-invalid-children.description':
    '<code>{{key}}</code> anahtarlı metin bloğunun geçersiz veya eksik bir `children` özelliği var.',
  /** Action presented when the Portable Text field value is invalid, when child with key `{{key}}` has a missing or invalid `markDefs` property */
  'inputs.portable-text.invalid-value.missing-or-invalid-markdefs.action': 'Özellik ekle',
  /** Text explaining that the Portable Text field value is invalid, when child with key `{{key}}` has a missing or invalid `markDefs` property */
  'inputs.portable-text.invalid-value.missing-or-invalid-markdefs.description':
    '<code>{{key}}</code> anahtarlı metin bloğunun geçersiz veya eksik bir `markDefs` özelliği var.',
  /** Action presented when the Portable Text field value is invalid, when child with key `{{key}}` is missing a `_type` property  */
  'inputs.portable-text.invalid-value.missing-type.action': 'Bloğu kaldır',
  /** Text explaining that the Portable Text field value is invalid, when child with key `{{key}}` is missing a `_type` property  */
  'inputs.portable-text.invalid-value.missing-type.description':
    '<code>{{key}}</code> anahtarlı blok bir tip adı eksik.',
  /** Action presented when the Portable Text field value is invalid, when block with key `{{key}}` contains a non-object child at index `{{index}}` */
  'inputs.portable-text.invalid-value.non-object-child.action': 'Öğeyi kaldır',
  /** Text explaining that the Portable Text field value is invalid, when block with key `{{key}}` contains a non-object child at index `{{index}}` */
  'inputs.portable-text.invalid-value.non-object-child.description':
    'Key <code>{{key}}</code> değerine sahip bloğun <code>{{index}}</code> indeksindeki çocuk bir nesne değil.',
  /** Action presented when the Portable Text field value is invalid, when the Portable Text field is not an array, or the array is empty */
  'inputs.portable-text.invalid-value.not-an-array.action': 'Değeri kaldır',
  /** Text explaining that the Portable Text field value is invalid, when the Portable Text field is not an array, or the array is empty */
  'inputs.portable-text.invalid-value.not-an-array.description':
    'Değer, Portable Text bloklarının bir dizisi veya tanımsız olmalıdır.',
  /** Action presented when the Portable Text field value is invalid, when child at `{{index}}` is not an object */
  'inputs.portable-text.invalid-value.not-an-object.action': 'Öğeyi kaldır',
  /** Text explaining that the Portable Text field value is invalid, when child at `{{index}}` is not an object */
  'inputs.portable-text.invalid-value.not-an-object.description':
    '<code>{{index}}</code> indeksindeki öğe bir nesne değil,.',
  /** Action presented when the Portable Text field value is invalid, when block with key `{{key}}` contains marks (`{{orphanedMarks}}`) that are not supported by the current schema */
  'inputs.portable-text.invalid-value.orphaned-marks.action': 'İzin verilmeyen işaretleri kaldır',
  /** Text explaining that the Portable Text field value is invalid, when block with key `{{key}}` contains marks (`{{orphanedMarks}}`) that are not supported by the current schema */
  'inputs.portable-text.invalid-value.orphaned-marks.description':
    'Key <code>{{key}}</code> değerine sahip metin bloğu, şemaya göre izin verilmeyen <code>({{orphanedMarks, list}})</code> işaretlerini içeriyor.',
  /** Title for the alert indicating that the Portable Text field has an invalid value */
  'inputs.portable-text.invalid-value.title': 'Geçersiz Portable Text değeri',
  /** Title of "bulleted" list type */
  'inputs.portable-text.list-type.bullet': 'Madde işaretli liste',
  /** Title of numbered list type */
  'inputs.portable-text.list-type.number': 'Numaralı liste',
  /** Title of the "h1" block style */
  'inputs.portable-text.style.h1': 'Başlık 1',
  /** Title of the "h2" block style */
  'inputs.portable-text.style.h2': 'Başlık 2',
  /** Title of the "h3" block style */
  'inputs.portable-text.style.h3': 'Başlık 3',
  /** Title of the "h4" block style */
  'inputs.portable-text.style.h4': 'Başlık 4',
  /** Title of the "h5" block style */
  'inputs.portable-text.style.h5': 'Başlık 5',
  /** Title of the "h6" block style */
  'inputs.portable-text.style.h6': 'Başlık 6',
  /** Title shown when multiple blocks of varying styles is selected */
  'inputs.portable-text.style.multiple': 'Çoklu',
  /** Title of fallback when no style is given for a block */
  'inputs.portable-text.style.none': 'Stil yok',
  /** Title of the "normal" block style */
  'inputs.portable-text.style.normal': 'Normal',
  /** Title of the "quote" block style */
  'inputs.portable-text.style.quote': 'Alıntı',
  /** Label for action to clear the current value of the reference field */
  'inputs.reference.action.clear': 'Temizle',
  /** Label for action to create a new document from the reference input */
  'inputs.reference.action.create-new-document': 'Yeni oluştur',
  /** Label for action to create a new document from the reference input, when there are multiple templates or document types to choose from */
  'inputs.reference.action.create-new-document-select': 'Yeni oluştur…',
  /** Label for action to duplicate the current item to a new item (used within arrays) */
  'inputs.reference.action.duplicate': 'Çoğalt',
  /** Label for action that opens the referenced document in a new tab */
  'inputs.reference.action.open-in-new-tab': 'Yeni sekmede aç',
  /** Label for action to remove the reference from an array */
  'inputs.reference.action.remove': 'Kaldır',
  /** Label for action to replace the current value of the field */
  'inputs.reference.action.replace': 'Değiştir',
  /** Label for action to cancel a previously initiated replace action  */
  'inputs.reference.action.replace-cancel': 'Değiştirmeyi iptal et',
  /** The cross-dataset reference field currently has a reference, but the feature has been disabled since it was created. This explains what can/cannot be done in its current state. */
  'inputs.reference.cross-dataset.feature-disabled-actions':
    'Bu alanın mevcut referansını temizleyebilirsiniz, ancak özellik devre dışı bırakıldığı sürece farklı bir belgeye değiştirilemez.',
  /** A cross-dataset reference field exists but the feature has been disabled. A <DocumentationLink> component is available. */
  'inputs.reference.cross-dataset.feature-disabled-description':
    'Bu özellik devre dışı bırakıldı. Nasıl etkinleştirileceğini <DocumentationLink>dokümantasyonda</DocumentationLink> okuyun.',
  /** Title for a warning telling the user that the current project does not have the "cross dataset references" feature */
  'inputs.reference.cross-dataset.feature-unavailable-title':
    'Kullanılamayan özellik: Çapraz veri seti referansı',
  /** The cross-dataset reference points to a document with an invalid type  */
  'inputs.reference.cross-dataset.invalid-type':
    'Referans gösterilen belge geçersiz türde ({{typeName}}) <JsonValue/>',
  /** The referenced document will open in a new tab (due to external studio) */
  'inputs.reference.document-opens-in-new-tab': 'Bu belge yeni bir sekmede açılır',
  /** Error title for when the document is unavailable (for any possible reason) */
  'inputs.reference.error.document-unavailable-title': 'Belge kullanılamıyor',
  /** Error title for when the referenced document failed to be loaded */
  'inputs.reference.error.failed-to-load-document-title': 'Referans gösterilen belge yüklenemedi',
  /** Error title for when the reference search returned a document that is not an allowed type for the field */
  'inputs.reference.error.invalid-search-result-type-title':
    'Arama, bu referans için geçerli olmayan bir tür döndürdü: "{{returnedType}}"',
  /** Error description for when the document referenced is not one of the types declared as allowed target types in schema */
  'inputs.reference.error.invalid-type-description':
    'Referans gösterilen belge (<code>{{documentId}}</code>) <code>{{actualType}}</code> türünde. Şemaya göre, referans gösterilen belgeler sadece <AllowedTypes /> türünde olabilir.',
  /** Error title for when the document referenced is not one of the types declared as allowed target types in schema */
  'inputs.reference.error.invalid-type-title': 'Geçersiz türde belge',
  /** Error description for when the user does not have permissions to read the referenced document */
  'inputs.reference.error.missing-read-permissions-description':
    'Referans gösterilen belgeye yetersiz izinler nedeniyle erişilemedi',
  /** Error title for when the user does not have permissions to read the referenced document */
  'inputs.reference.error.missing-read-permissions-title': 'Yetersiz izinler',
  /** Error description for when the current reference value points to a document that does not exist (on weak references) */
  'inputs.reference.error.nonexistent-document-description':
    'Referans gösterilen belge mevcut değil (ID: <code>{{documentId}}</code>). Referansı kaldırabilir veya başka bir belge ile değiştirebilirsiniz.',
  /** Error title for when the current reference value points to a document that does not exist (on weak references) */
  'inputs.reference.error.nonexistent-document-title': 'Bulunamadı',
  /** Label for button that clears the reference when it points to a document that does not exist (on weak references) */
  'inputs.reference.error.nonexistent-document.clear-button-label': 'Temizle',
  /** Error title for when the search for a reference failed. Note that the message sent by the backend may not be localized. */
  'inputs.reference.error.search-failed-title': 'Referans araması başarısız oldu',
  /** Alternative text for the image shown in cross-dataset reference input */
  'inputs.reference.image-preview-alt-text': 'Referans gösterilen belgenin resim önizlemesi',
  /** Description for alert shown when a reference in a live-edit document is marked as being weak, the referenced document exists, AND the reference is supposed to be have been strengthened on publish */
  'inputs.reference.incomplete-reference.finalize-action-description':
    '<strong>{{referencedDocument}}</strong> yayınlandı ve bu referansın şimdi tamamlanması gerekiyor.',
  /** Title for alert shown when a reference in a live-edit document is marked as being weak, the referenced document exists, AND the reference is supposed to be have been strengthened on publish */
  'inputs.reference.incomplete-reference.finalize-action-title': 'Referansı tamamla',
  /** Description for alert shown when a reference in a live-edit document points to a document that exists and has been published, but the reference is still marked as weak */
  'inputs.reference.incomplete-reference.strengthen-action-description':
    '<strong>{{referencedDocument}}</strong> yayınlandı ve bu referansın şimdi güçlü bir referansa dönüştürülmesi gerekiyor.',
  /** Title for alert shown when a reference in a live-edit document points to a document that exists and has been published, but the reference is still marked as weak */
  'inputs.reference.incomplete-reference.strengthen-action-title': 'Güçlü referansa dönüştür',
  /** Label for button that triggers the action that strengthen a reference */
  'inputs.reference.incomplete-reference.strengthen-button-label': 'Güçlü referansa dönüştür',
  /** Label for button that triggers a retry attempt for reference metadata  */
  'inputs.reference.metadata-error.retry-button-label': 'Yeniden Dene',
  /** Title for alert shown when reference metadata fails to be loaded */
  'inputs.reference.metadata-error.title': 'Referans metaverisi yüklenemedi',
  /** Message shown when no documents were found that matched the given search string */
  'inputs.reference.no-results-for-query':
    '<strong>“{{searchTerm}}”</strong> için sonuç bulunamadı',
  /** Text for tooltip showing when a document was edited, using relative time (eg "how long ago was it edited?") */
  'inputs.reference.preview.edited-at-time': '<RelativeTime/> tarihinde düzenlendi',
  /** Accessibility label for icon indicating that document does _not_ have any unpublished changes */
  'inputs.reference.preview.has-no-unpublished-changes-aria-label':
    'Yayınlanmamış düzenlemeler yok',
  /** Accessibility label for icon indicating that document has unpublished changes */
  'inputs.reference.preview.has-unpublished-changes-aria-label': 'Düzenlendi',
  /** Accessibility label for icon indicating that document does _not_ have a published version */
  'inputs.reference.preview.is-not-published-aria-label': 'Yayınlanmadı',
  /** Accessibility label for icon indicating that document has a published version */
  'inputs.reference.preview.is-published-aria-label': 'Yayınlandı',
  /** Text for tooltip indicating that a document has no unpublished edits */
  'inputs.reference.preview.no-unpublished-edits': 'Yayınlanmamış düzenlemeler yok',
  /** Text for tooltip indicating that a document has not yet been published */
  'inputs.reference.preview.not-published': 'Yayınlanmadı',
  /** Text for tooltip showing when a document was published, using relative time (eg "how long ago was it published?") */
  'inputs.reference.preview.published-at-time': '<RelativeTime/> tarihinde yayınlandı',
  /** The referenced document no longer exist and might have been deleted (for weak references) */
  'inputs.reference.referenced-document-does-not-exist':
    'Referans gösterilen belge artık mevcut değil ve silinmiş olabilir (belge ID: <code>{{documentId}}</code>).',
  /** The referenced document could not be displayed to the user because of insufficient permissions */
  'inputs.reference.referenced-document-insufficient-permissions':
    'Yetersiz izinler nedeniyle referans gösterilen belgeye erişilemedi',
  /** Label for when the reference input is resolving the initial value for an item */
  'inputs.reference.resolving-initial-value': 'İlk değer çözümleniyor…',
  /** Placeholder shown in a reference input with no current value */
  'inputs.reference.search-placeholder': 'Aramak için yazın',
  /** Explanation of the consequences of leaving the reference as strong instead of weak */
  'inputs.reference.strength-mismatch.is-strong-consquences':
    'Bu referansı kaldırmadan veya zayıf olarak dönüştürmeden referans belgesini silmek mümkün olmayacak.',
  /** Description for alert shown when a reference is supposed to be weak, but the actual value is strong */
  'inputs.reference.strength-mismatch.is-strong-description':
    'Bu referans <em>güçlü</em>, ancak mevcut şemaya göre <em>zayıf</em> olmalı.',
  /** Explanation of the consequences of leaving the reference as weak instead of strong */
  'inputs.reference.strength-mismatch.is-weak-consquences':
    'Bu, bu alanın var olmayan bir belgeye referans vermesine neden olacak şekilde, referans gösterilen belgenin bu referansı silmeden silinmesini mümkün kılar.',
  /** Description for alert shown when a reference is supposed to be strong, but the actual value is weak */
  'inputs.reference.strength-mismatch.is-weak-description':
    'Bu referans <em>zayıf</em>, ancak mevcut şemaya göre <em>güçlü</em> olmalı.',
  /** Label for button that triggers the action that strengthens a reference on strength mismatch */
  'inputs.reference.strength-mismatch.strengthen-button-label': 'Güçlü referansa dönüştür',
  /** Title for alert shown when a reference is supposed to be weak/strong, but the actual value is the opposite of what it is supposed to be */
  'inputs.reference.strength-mismatch.title': 'Referans gücü uyuşmazlığı',
  /** Label for button that triggers the action that weakens a reference on strength mismatch */
  'inputs.reference.strength-mismatch.weaken-button-label': 'Zayıf referansa dönüştür',
  /** Action message for generating the slug */
  'inputs.slug.action.generate': 'Oluştur',
  /** Loading message for when the input is actively generating a slug */
  'inputs.slug.action.generating': 'Oluşturuluyor…',
  /** Error message for when the source to generate a slug from is missing */
  'inputs.slug.error.missing-source':
    'Kaynak eksik. Şema üzerinde {{schemaType}} tipindeki kaynağı kontrol edin',
  /** Placeholder for an empty tag input */
  'inputs.tags.placeholder': "Etiket girin ve ENTER'a basın…",
  /** Placeholder for an empty tag input on touch devices */
  'inputs.tags.placeholder_touch': 'Etiket girin…',
  /** Convert to `{{targetType}}` */
  'inputs.untyped-value.convert-button.text': '<code>{{targetType}}</code> olarak dönüştür',
  /** Encountered an object value without a <code>_type</code> property. */
  'inputs.untyped-value.description':
    '<code>_type</code> özelliği olmayan bir nesne değeriyle karşılaşıldı.',
  /** Either remove the <code>name</code> property of the object declaration, or set <code>_type</code> property on items. */
  'inputs.untyped-value.details.description':
    'Nesne bildirimindeki <code>name</code> özelliğini kaldırın veya öğelerde <code>_type</code> özelliği ayarlayın.',
  /** Current value (<code>object</code>): */
  'inputs.untyped-value.details.json-dump-prefix': 'Mevcut değer (<code>object</code>):',
  /** The following types are valid here according to schema: */
  'inputs.untyped-value.details.multi-type-description': 'Şemaya göre burada geçerli olan tipler:',
  /** Developer info */
  'inputs.untyped-value.details.title': 'Geliştirici bilgisi',
  /** Property value missing <code>_type</code> */
  'inputs.untyped-value.title': '<code>_type</code> özelliği eksik olan özellik değeri',
  /** Unset value */
  'inputs.untyped-value.unset-item-button.text': 'Değeri kaldır',

  /** The fallback explanation if no context is provided */
  'insufficient-permissions-message.not-authorized-explanation': 'Bu özelliğe erişim izniniz yok.',
  /** The explanation when unable to create any document at all */
  'insufficient-permissions-message.not-authorized-explanation_create-any-document':
    'Bir belge oluşturma izniniz yok.',
  /** The explanation when unable to create a particular document */
  'insufficient-permissions-message.not-authorized-explanation_create-document':
    'Bu belgeyi oluşturma izniniz yok.',
  /** The explanation when unable to create a particular type of document */
  'insufficient-permissions-message.not-authorized-explanation_create-document-type':
    'Bu türde bir belge oluşturma izniniz yok.',
  /** The explanation when unable to create a new reference in a document */
  'insufficient-permissions-message.not-authorized-explanation_create-new-reference':
    'Yeni bir referans oluşturma izniniz yok.',
  /** The explanation when unable to delete a particular document */
  'insufficient-permissions-message.not-authorized-explanation_delete-document':
    'Bu belgeyi silme izniniz yok.',
  /** The explanation when unable to discard changes in a particular document */
  'insufficient-permissions-message.not-authorized-explanation_discard-changes':
    'Bu belgedeki değişiklikleri atma izniniz yok.',
  /** The explanation when unable to duplicate a particular document */
  'insufficient-permissions-message.not-authorized-explanation_duplicate-document':
    'Bu belgeyi çoğaltma izniniz yok.',
  /** The explanation when unable to publish a particular document */
  'insufficient-permissions-message.not-authorized-explanation_publish-document':
    'Bu belgeyi yayınlama izniniz yok.',
  /** The explanation when unable to unpublish a particular document */
  'insufficient-permissions-message.not-authorized-explanation_unpublish-document':
    'Bu belgeyi yayından kaldırma izniniz yok.',
  /** Appears after the not-authorized message. Lists the current roles. */
  'insufficient-permissions-message.roles': 'Rolleriniz: <Roles/>',
  /** The title for the insufficient permissions message component */
  'insufficient-permissions-message.title': 'Yetersiz izinler',

  /** Unexpected error: `{{error}}` */
  'member-field-error.unexpected-error': 'Beklenmeyen hata: {{error}}',

  /** Button label for "Create new document" button */
  'new-document.button': 'Oluştur',
  /**
   * Tooltip message displayed when hovering/activating the "Create new document" action,
   * when there are templates/types available for creation
   */
  'new-document.create-new-document-label': 'Yeni belge…',
  /** Placeholder for the "filter" input within the new document menu */
  'new-document.filter-placeholder': 'Filtre',
  /** Loading indicator text within the new document menu */
  'new-document.loading': 'Yükleniyor…',
  /** Accessibility label for the list displaying options in the new document menu */
  'new-document.new-document-aria-label': 'Yeni belge',
  /** Message for when there are no document type options in the new document menu */
  'new-document.no-document-types-found': 'Belge türü bulunamadı',
  /**
   * Tooltip message displayed when hovering/activating the "Create new document" action,
   * when there are no templates/types to create from
   */
  'new-document.no-document-types-label': 'Belge türü yok',
  /** Message for when no results are found for a specific search query in the new document menu */
  'new-document.no-results': '<strong>{{searchQuery}}</strong> için sonuç bulunamadı',
  /** Aria label for the button that opens the "Create new document" popover/dialog */
  'new-document.open-dialog-aria-label': 'Yeni belge oluştur',
  /** Title for "Create new document" dialog */
  'new-document.title': 'Yeni belge oluştur',

  /** Label for action to manage members of the current studio project */
  'presence.action.manage-members': 'Üyeleri yönet',
  /** Accessibility label for presence menu button */
  'presence.aria-label': 'Burada kim var',
  /** Message description for when no one else is currently present */
  'presence.no-one-else-description':
    'Projeye insanları davet edin ve çevrimiçi durumlarını görün.',
  /** Message title for when no one else is currently present */
  'presence.no-one-else-title': 'Başka kimse burada değil',
  /** Message for when a user is not in a document (displayed in the global presence menu) */
  'presence.not-in-a-document': 'Bir belgede değil',
  /** Tooltip content text for presence menu button */
  'presence.tooltip-content': undefined, // 'Who is here'

  /** Fallback title shown when a preview does not provide a title */
  'preview.default.title-fallback': 'Başlıksız',
  /** Fallback preview value for types that have "no value" (eg null, undefined) */
  'preview.fallback.no-value': '(değer yok)',
  /** Alternative text for image being shown while image is being uploaded, in previews */
  'preview.image.file-is-being-uploaded.alt-text': 'Yüklenmekte olan resim',

  /* Relative time, just now */
  'relative-time.just-now': 'az önce',

  /** Accessibility label to open search action when the search would go fullscreen (eg on narrower screens) */
  'search.action-open-aria-label': 'Aramayı aç',
  /** Action label for adding a search filter */
  'search.action.add-filter': 'Filtre ekle',
  /** Action label for clearing search filters */
  'search.action.clear-filters': 'Filtreleri temizle',
  /** Label for action to clear recent searches */
  'search.action.clear-recent-searches': 'Son aramaları temizle',
  /** Accessibility label for action to clear all currently applied document type filters */
  'search.action.clear-type-filters-aria-label': 'İşaretli filtreleri temizle',
  /** Label for action to clear all currently applied document type filters */
  'search.action.clear-type-filters-label': 'Temizle',
  /** Accessibility label for when the search is full screen (on narrow screens) and you want to close the search */
  'search.action.close-search-aria-label': 'Aramayı kapat',
  /** Accessibility label for filtering by document type */
  'search.action.filter-by-document-type-aria-label': 'Belge türüne göre filtrele',
  /** Accessibility action label for removing an already applied search filter */
  'search.action.remove-filter-aria-label': 'Filtreyi kaldır',
  /**
   * Text displayed when either no document type(s) have been selected, or we need a fallback,
   * eg "Search for all types".
   */
  'search.action.search-all-types': 'Tüm belgeleri ara',
  /**
   * Text displayed when we are able to determine one or more document types that will be used for
   * searching, and can fit within the space assigned by the design.
   */
  'search.action.search-specific-types': '{{types, list}} için arama yap',
  /** Dialog title for action to select an asset of unknown type */
  'search.action.select-asset': 'Varlık seç',
  /** Dialog title for action to select a file asset */
  'search.action.select-asset_file': 'Dosya seç',
  /** Dialog title for action to select an image asset */
  'search.action.select-asset_image': 'Resim seç',
  /** Accessibility label for when the search is full screen (on narrow screens) and you want to hide filters */
  'search.action.toggle-filters-aria-label_hide': 'Filtreleri gizle',
  /** Accessibility label for when the search is full screen (on narrow screens) and you want to show filters */
  'search.action.toggle-filters-aria-label_show': 'Filtreleri göster',
  /** Label for when the search is full screen (on narrow screens) and you want to hide filters */
  'search.action.toggle-filters-label_hide': 'Filtreleri gizle',
  /** Label for when the search is full screen (on narrow screens) and you want to show filters */
  'search.action.toggle-filters-label_show': 'Filtreleri göster',
  /** Tooltip text for the global search button */
  'search.button.tooltip': 'Ara',
  /**
   * A list of provided types (use `list` formatter preferably).
   */
  'search.document-type-list': '{{types, list}}',
  /**
   * In the context of a list of document types - no filtering selection has been done,
   * thus the default is "all types".
   */
  'search.document-type-list-all-types': 'Tüm türler',
  /** Accessibility label for list displaying the available document types */
  'search.document-types-aria-label': 'Belge türleri',
  /** Label for when no document types matching the filter are found */
  'search.document-types-no-matches-found': '{{filter}} için eşleşme bulunamadı',
  /** Description for error when a filter cannot be displayed, describes that you should check the schema */
  'search.error.display-filter-description':
    'Bu, şemanızda tanımlanan geçersiz seçenekleri gösterebilir.',
  /** Title for error when a filter cannot be displayed (mainly a developer-oriented error) */
  'search.error.display-filter-title': 'Bu filtre gösterilirken bir hata oluştu.',
  /** Description for error when no valid asset source is found, describes that you should check the the current studio config */
  'search.error.no-valid-asset-source-check-config-description':
    'Lütfen stüdyo yapılandırma dosyanızda etkinleştirildiğinden emin olun.',
  /** Description for error when no valid asset source is found, describes that only the default asset is supported */
  'search.error.no-valid-asset-source-only-default-description':
    'Şu anda yalnızca varsayılan varlık kaynağı desteklenmektedir.',
  /** Title for error when no valid asset sources found */
  'search.error.no-valid-asset-source-title': 'Geçerli varlık kaynakları bulunamadı.',
  /** Helpful description for when search returned an error that we are not able to describe in detail */
  'search.error.unspecified-error-help-description':
    'Lütfen tekrar deneyin veya bağlantınızı kontrol edin',
  /** Title label for when search returned an error that we are not able to describe in detail */
  'search.error.unspecified-error-title': 'Arama yapılırken bir şeyler ters gitti',
  /**
   * Label for "All fields", a label that appears above the list of available fields when filtering.
   * If one or more document type has been chosen as filter, this label is replaced with a group of
   * fields per selected document type
   */
  'search.filter-all-fields-header': 'Tüm alanlar',
  /** Label for the action of changing from one file to a different file in asset search filter */
  'search.filter-asset-change_file': 'Dosyayı değiştir',
  /** Label for the action of changing from one image to a different image in asset search filter */
  'search.filter-asset-change_image': 'Resmi değiştir',
  /** Label for the action of clearing the currently selected asset in an image/file filter */
  'search.filter-asset-clear': 'Temizle',
  /** Label for the action of selecting a file in asset search filter */
  'search.filter-asset-select_file': 'Dosya seç',
  /** Label for the action of selecting an image in asset search filter */
  'search.filter-asset-select_image': 'Resim seç',
  /** Label for boolean filter - false */
  'search.filter-boolean-false': 'Yanlış',
  /** Label for boolean filter - true */
  'search.filter-boolean-true': 'Doğru',
  /** Accessibility label for list that lets you filter fields by title, when adding a new filter in search */
  'search.filter-by-title-aria-label': 'Başlığa göre filtrele',
  /** Accessibility label for date filter input */
  'search.filter-date-aria-label': 'Tarih',
  /** Accessibility label for selecting end date on the date range search filter */
  'search.filter-date-range-end-date-aria-label': 'Bitiş tarihi',
  /** Accessibility label for selecting start date on the date range search filter */
  'search.filter-date-range-start-date-aria-label': 'Başlangıç tarihi',
  /**
   * Label for "Days"/"Months"/"Years" when selecting it as unit in "X days ago" search filter.
   * Capitalized, as it would be listed in a dropdown.
   */
  'search.filter-date-unit_days': 'Günler',
  'search.filter-date-unit_months': 'Aylar',
  'search.filter-date-unit_years': 'Yıllar',
  /** Accessibility label for selecting the unit (day/month/year) when adding "X days ago" search filter */
  'search.filter-date-unit-aria-label': 'Birim seç',
  /** Accessibility label for the input value (days/months/years) when adding "X days ago" search filter */
  'search.filter-date-value-aria-label': 'Birim değeri',
  /** Label for "field description" shown in tooltip when navigating list of possible fields to filter */
  'search.filter-field-tooltip-description': 'Alan açıklaması',
  /** Label for "field name" shown in tooltip when navigating list of possible fields to filter */
  'search.filter-field-tooltip-name': 'Alan adı',
  /** Label for "Used in document types", a list of the document types a field appears in. Shown in tooltip when navigating list of possible fields to filter */
  'search.filter-field-tooltip-used-in-document-types': 'Kullanıldığı döküman türleri',
  /** Label for when no fields/filters are found for the given term */
  'search.filter-no-matches-found': '{{filter}} için eşleşme bulunamadı',
  /** Placeholder value for maximum numeric value filter */
  'search.filter-number-max-value-placeholder': 'Maksimum değer',
  /** Placeholder value for minimum numeric value filter */
  'search.filter-number-min-value-placeholder': 'Minimum değer',
  /** Placeholder value for the number filter */
  'search.filter-number-value-placeholder': 'Değer',
  /** Placeholder for the "Filter" input, when narrowing possible fields/filters */
  'search.filter-placeholder': 'Filtre',
  /** Label for the action of clearing the currently selected document in a reference filter */
  'search.filter-reference-clear': 'Temizle',
  /**
   * Label for "shared fields", a label that appears above a list of fields that all filtered types
   * have in common, when adding a new filter. For instance, if "book" and "employee" both have a
   * "title" field, this field would be listed under "shared fields".
   * */
  'search.filter-shared-fields-header': 'Ortak alanlar',
  /** Placeholder value for the string filter */
  'search.filter-string-value-placeholder': 'Değer',
  /** Label/placeholder prompting user to select one of the predefined, allowed values for a string field */
  'search.filter-string-value-select-predefined-value': 'Seç...',
  /** Accessibility label for the "Filters" list, that is shown when using "Add filter" in search (singular) */
  'search.filters-aria-label_one': 'Filtre',
  /** Accessibility label for the "Filters" list, that is shown when using "Add filter" in search (plural) */
  'search.filters-aria-label_other': 'Filtreler',
  /** Label for instructions on how to use the search - displayed when no recent searches are available */
  'search.instructions': '<ControlsIcon/> kullanarak aramanızı rafine edin',
  /** Helpful description for when no search results are found */
  'search.no-results-help-description':
    'Başka bir anahtar kelime deneyin veya filtrelerinizi ayarlayın',
  /** Title label for when no search results are found */
  'search.no-results-title': 'Sonuç bulunamadı',
  /**
   * Individual search operators.
   *
   * The `name` variant is the form we use when the user is building a query, and selecting from a
   * list of available operators for a field. Keep in mind that since the user knows what the field
   * represents, we do not need to contextualize too much, and that the user may not be a developer
   * eg prefer "quantity is" over "array has length". Additionally, (if applicable in language) use
   * lowercased names.
   *
   * The `description` variant is the form shown once the filter has enough information to apply,
   * and is shown in the list of applied filters. It is passed components that _should_ be used to
   * compose the filter string, and to format them correctly:
   *
   * `<Field/>` - eg "Bird species", "Category", "Date of birth"
   * `<Operator>operator text</Operator>` - eg "has ≤", "includes", "is"
   * `<Value>{{value}}</Value>` - eg "Hawk", "Sparrow", "Eagle"
   *
   * Where applicable, a `count` is passed, allowing you to pluralize where needed, by using
   * suffixes such as `_zero`, `_one`, `_other` etc.
   *
   * Prefer (reasonable) brevity since many filters may be applied. For instance:
   * `<Field/> has ≤ <Value/>` may be better than
   * `<Field/> has less than or equal to <Value/>`
   **/
  /* Array should have a count the given filter value */
  'search.operator.array-count-equal.description_one':
    '<Field/> <Operator>has</Operator> <Value>{{count}} öğe</Value>',
  'search.operator.array-count-equal.description_other':
    '<Field/> <Operator>has</Operator> <Value>{{count}} öğe</Value>',
  'search.operator.array-count-equal.name': 'miktar',
  /* Array should have a count greater than given filter value */
  'search.operator.array-count-gt.description_one':
    '<Field/> <Operator>has ></Operator> <Value>{{count}} öğe</Value>',
  'search.operator.array-count-gt.description_other':
    '<Field/> <Operator>has ></Operator> <Value>{{count}} öğe</Value>',
  'search.operator.array-count-gt.name': 'miktarı şundan büyük',
  /* Array should have a count greater than or equal to the given filter value */
  'search.operator.array-count-gte.description_one':
    '<Field/> <Operator>has ≥</Operator> <Value>{{count}} öğe</Value>',
  'search.operator.array-count-gte.description_other':
    '<Field/> <Operator>has ≥</Operator> <Value>{{count}} öğe</Value>',
  'search.operator.array-count-gte.name': 'miktarı şuna eşit veya daha büyük',
  /* Array should have a count less than given filter value */
  'search.operator.array-count-lt.description_one':
    '<Field/> <Operator>has <</Operator> <Value>{{count}} öğe</Value>',
  'search.operator.array-count-lt.description_other':
    '<Field/> <Operator>has <</Operator> <Value>{{count}} öğe</Value>',
  'search.operator.array-count-lt.name': 'miktarı şundan az',
  /* Array should have a count less than or equal to the given filter value */
  'search.operator.array-count-lte.description_one':
    '<Field/> <Operator>has ≤</Operator> <Value>{{count}} öğe</Value>',
  'search.operator.array-count-lte.description_other':
    '<Field/> <Operator>has ≤</Operator> <Value>{{count}} öğe</Value>',
  'search.operator.array-count-lte.name': 'miktarı şuna eşit veya daha az',
  /* Array should have a count that is not equal to the given filter value */
  'search.operator.array-count-not-equal.description_one':
    '<Field/> <Operator>does not have</Operator> <Value>{{count}} öğe</Value>',
  'search.operator.array-count-not-equal.description_other':
    '<Field/> <Operator>does not have</Operator> <Value>{{count}} öğe</Value>',
  'search.operator.array-count-not-equal.name': 'miktarı şu değil',
  /**
   * Array should have a count within the range of given filter values.
   * Gets passed `{{from}}` and `{{to}}` values.
   **/
  'search.operator.array-count-range.description':
    '<Field/> <Operator>has between</Operator> <Value>{{from}} → {{to}} öğe</Value>',
  'search.operator.array-count-range.name': 'miktarı şu aralıkta',
  /* Array should include the given value */
  'search.operator.array-list-includes.description':
    '<Field/> <Operator>includes</Operator> <Value>{{value}}</Value>',
  'search.operator.array-list-includes.name': 'içerir',
  /* Array should not include the given value */
  'search.operator.array-list-not-includes.description':
    '<Field/> <Operator>does not include</Operator> <Value>{{value}}</Value>',
  'search.operator.array-list-not-includes.name': 'içermez',
  /* Array should include the given reference */
  'search.operator.array-reference-includes.description':
    '<Field/> <Operator> içerir </Operator> <Value>{{value}}</Value>',
  'search.operator.array-reference-includes.name': 'içerir',
  /* Array should not include the given reference */
  'search.operator.array-reference-not-includes.description':
    '<Field/> <Operator> içermez </Operator> <Value>{{value}}</Value>',
  'search.operator.array-reference-not-includes.name': 'içermez',
  /* Asset (file) should be the selected asset */
  'search.operator.asset-file-equal.description':
    '<Field/> <Operator> şudur </Operator> <Value>{{value}}</Value>',
  'search.operator.asset-file-equal.name': 'şudur',
  /* Asset (file) should not be the selected asset */
  'search.operator.asset-file-not-equal.description':
    '<Field/> <Operator> şu değildir </Operator> <Value>{{value}}</Value>',
  'search.operator.asset-file-not-equal.name': 'şu değildir',
  /* Asset (image) should be the selected asset */
  'search.operator.asset-image-equal.description':
    '<Field/> <Operator> şudur </Operator> <Value>{{value}}</Value>',
  'search.operator.asset-image-equal.name': 'şudur',
  /* Asset (image) should not be the selected asset */
  'search.operator.asset-image-not-equal.description':
    '<Field/> <Operator> şu değildir </Operator> <Value>{{value}}</Value>',
  'search.operator.asset-image-not-equal.name': 'şu değildir',
  /**
   * Boolean value should be the given filter value (true/false).
   * Context passed is `true` and `false`, allowing for more specific translations:
   * - `search.operator.boolean-equal.description_true`
   * - `search.operator.boolean-equal.description_false`
   */
  'search.operator.boolean-equal.description':
    '<Field/> <Operator> şudur </Operator> <Value>{{value}}</Value>',
  'search.operator.boolean-equal.name': 'şudur',
  /* Date should be after (later than) given filter value */
  'search.operator.date-after.description':
    '<Field/> <Operator> sonrasıdır </Operator> <Value>{{value}}</Value>',
  'search.operator.date-after.name': 'sonrası',
  /* Date should be before (earlier than) given filter value */
  'search.operator.date-before.description':
    '<Field/> <Operator> öncesidir </Operator> <Value>{{value}}</Value>',
  'search.operator.date-before.name': 'öncesi',
  /* Date should be the given filter value */
  'search.operator.date-equal.description':
    '<Field/> <Operator> şudur </Operator> <Value>{{value}}</Value>',
  'search.operator.date-equal.name': 'şudur',
  /* Date should be within the given filter value range (eg "within the last X days") */
  'search.operator.date-last.description':
    '<Field/> <Operator> son içindedir </Operator> <Value>{{value}}</Value>',
  'search.operator.date-last.name': 'son',
  /* Date should not be the given filter value */
  'search.operator.date-not-equal.description':
    '<Field/> <Operator> şu değildir </Operator> <Value>{{value}}</Value>',
  'search.operator.date-not-equal.name': 'şu değildir',
  /* Date should be within the range of given filter values */
  'search.operator.date-range.description': '<Field/> <Operator> arasındadır </Operator> <Value/>',
  'search.operator.date-range.name': 'arasında',
  /* Date and time should be after (later than) given filter value */
  'search.operator.date-time-after.description':
    '<Field/> <Operator>sonra</Operator> <Value>{{value}}</Value>',
  'search.operator.date-time-after.name': 'sonra',
  /* Date and time should be before (earlier than) given filter value */
  'search.operator.date-time-before.description':
    '<Field/> <Operator>önce</Operator> <Value>{{value}}</Value>',
  'search.operator.date-time-before.name': 'önce',
  /* Date and time should be the given filter value */
  'search.operator.date-time-equal.description':
    '<Field/> <Operator>şu</Operator> <Value>{{value}}</Value>',
  'search.operator.date-time-equal.name': 'şu',
  /* Date and time should be within the given filter value range (eg "within the last X days") */
  'search.operator.date-time-last.description':
    '<Field/> <Operator>son</Operator> <Value>{{value}}</Value>',
  'search.operator.date-time-last.name': 'son',
  /* Date and time should not be the given filter value */
  'search.operator.date-time-not-equal.description':
    '<Field/> <Operator>değil</Operator> <Value>{{value}}</Value>',
  'search.operator.date-time-not-equal.name': 'değil',
  /* Date and time should be within the range of given filter values */
  'search.operator.date-time-range.description': '<Field/> <Operator>arasında</Operator> <Value/>',
  'search.operator.date-time-range.name': 'arasında',
  /* Value should be defined */
  'search.operator.defined.description': '<Field/> <Operator>şu</Operator> <Value>dolu</Value>',
  'search.operator.defined.name': 'dolu',
  /* Value should not be defined */
  'search.operator.not-defined.description': '<Field/> <Operator>şu</Operator> <Value>boş</Value>',
  'search.operator.not-defined.name': 'boş',
  /* Number should be the given filter value */
  'search.operator.number-equal.description':
    '<Field/> <Operator>şu</Operator> <Value>{{value}}</Value>',
  'search.operator.number-equal.name': 'şu',
  /* Number should be greater than given filter value */
  'search.operator.number-gt.description':
    '<Field/> <Operator>></Operator> <Value>{{value}}</Value>',
  'search.operator.number-gt.name': 'büyük',
  /* Number should be greater than or the given filter value */
  'search.operator.number-gte.description':
    '<Field/> <Operator>≥</Operator> <Value>{{value}}</Value>',
  'search.operator.number-gte.name': 'büyük veya eşit',
  /* Number should be less than given filter value */
  'search.operator.number-lt.description':
    '<Field/> <Operator><</Operator> <Value>{{value}}</Value>',
  'search.operator.number-lt.name': 'küçük',
  /* Number should be less than or the given filter value */
  'search.operator.number-lte.description':
    '<Field/> <Operator>≤</Operator> <Value>{{value}}</Value>',
  'search.operator.number-lte.name': 'eşit veya daha küçük',
  /* Number should not be the given filter value */
  'search.operator.number-not-equal.description':
    '<Field/> <Operator>değildir</Operator> <Value>{{value}}</Value>',
  'search.operator.number-not-equal.name': 'değildir',
  /* Number should be within the range of given filter values */
  'search.operator.number-range.description':
    '<Field/> <Operator>arasında</Operator> <Value>{{from}} → {{to}}</Value>',
  'search.operator.number-range.name': 'arasında',
  /* Portable Text should contain the given filter value */
  'search.operator.portable-text-contains.description':
    '<Field/> <Operator>içerir</Operator> <Value>{{value}}</Value>',
  'search.operator.portable-text-contains.name': 'içerir',
  /* Portable Text should be the given filter value */
  'search.operator.portable-text-equal.description':
    '<Field/> <Operator>şudur</Operator> <Value>{{value}}</Value>',
  'search.operator.portable-text-equal.name': 'şudur',
  /* Portable Text should not contain the given filter value */
  'search.operator.portable-text-not-contains.description':
    '<Field/> <Operator>içermez</Operator> <Value>{{value}}</Value>',
  'search.operator.portable-text-not-contains.name': 'içermez',
  /* Portable Text should not be the given filter value */
  'search.operator.portable-text-not-equal.description':
    '<Field/> <Operator>değildir</Operator> <Value>{{value}}</Value>',
  'search.operator.portable-text-not-equal.name': 'değildir',
  /* References the given asset (file) */
  'search.operator.reference-asset-file.description':
    '<Field/> <Operator>→</Operator> <Value>{{value}}</Value>',
  'search.operator.reference-asset-file.name': 'dosya',
  /* References the given asset (image) */
  'search.operator.reference-asset-image.description':
    '<Field/> <Operator>→</Operator> <Value>{{value}}</Value>',
  'search.operator.reference-asset-image.name': 'resim',
  /* References the given document */
  'search.operator.reference-document.description':
    '<Field/> <Operator>→</Operator> <Value>{{value}}</Value>',
  'search.operator.reference-document.name': 'belge',
  /* Reference should be the given document */
  'search.operator.reference-equal.description':
    '<Field/> <Operator>şudur</Operator> <Value>{{value}}</Value>',
  'search.operator.reference-equal.name': 'şudur',
  /* Reference should not be the given document */
  'search.operator.reference-not-equal.description':
    '<Field/> <Operator>değildir</Operator> <Value>{{value}}</Value>',
  'search.operator.reference-not-equal.name': 'değildir',
  /* Slug contains the given value */
  'search.operator.slug-contains.description':
    '<Field/> <Operator>içerir</Operator> <Value>{{value}}</Value>',
  'search.operator.slug-contains.name': 'içerir',
  /* Slug equals the given filter value */
  'search.operator.slug-equal.description':
    '<Field/> <Operator>şudur</Operator> <Value>{{value}}</Value>',
  'search.operator.slug-equal.name': 'şudur',
  /* Slug does not contain the given value */
  'search.operator.slug-not-contains.description':
    '<Field/> <Operator>içermez</Operator> <Value>{{value}}</Value>',
  'search.operator.slug-not-contains.name': 'içermez',
  /* Slug does not equal the given filter value */
  'search.operator.slug-not-equal.description':
    '<Field/> <Operator>şu değildir</Operator> <Value>{{value}}</Value>',
  'search.operator.slug-not-equal.name': 'şu değildir',
  /* String contains the given filter value */
  'search.operator.string-contains.description':
    '<Field/> <Operator>içerir</Operator> <Value>{{value}}</Value>',
  'search.operator.string-contains.name': 'içerir',
  /* String equals the given filter value */
  'search.operator.string-equal.description':
    '<Field/> <Operator>şudur</Operator> <Value>{{value}}</Value>',
  'search.operator.string-equal.name': 'şudur',
  /* String equals one of the predefined allowed values */
  'search.operator.string-list-equal.description':
    '<Field/> <Operator>şudur</Operator> <Value>{{value}}</Value>',
  'search.operator.string-list-equal.name': 'şudur',
  /* String does not equal one of the predefined allowed values */
  'search.operator.string-list-not-equal.description':
    '<Field/> <Operator>şu değildir</Operator> <Value>{{value}}</Value>',
  'search.operator.string-list-not-equal.name': 'şu değildir',
  /* String does not contain the given filter value */
  'search.operator.string-not-contains.description':
    '<Field/> <Operator>içermez</Operator> <Value>{{value}}</Value>',
  'search.operator.string-not-contains.name': 'içermez',
  /* String does not equal the given filter value */
  'search.operator.string-not-equal.description':
    '<Field/> <Operator>şu değildir</Operator> <Value>{{value}}</Value>',
  'search.operator.string-not-equal.name': 'şu değildir',
  /** Label for the "Best match" search ordering type */
  'search.ordering.best-match-label': 'En iyi eşleşme',
  /** Label for the "Created: Oldest first" search ordering type */
  'search.ordering.created-ascending-label': 'Oluşturulma: En eskiden başlayarak',
  /** Label for the "Created: Newest first" search ordering type */
  'search.ordering.created-descending-label': 'Oluşturulma: En yeniden başlayarak',
  /** Label for the "Updated: Oldest first" search ordering type */
  'search.ordering.updated-ascending-label': 'Güncellenme: En eskiden başlayarak',
  /** Label for the "Updated: Newest first" search ordering type */
  'search.ordering.updated-descending-label': 'Güncellenme: En yeniden başlayarak',
  /** Placeholder text for the global search input field */
  'search.placeholder': 'Ara',
  /** Accessibility label for the recent searches section, shown when no valid search terms has been given */
  'search.recent-searches-aria-label': 'Son aramalar',
  /** Label/heading shown for the recent searches section */
  'search.recent-searches-label': 'Son aramalar',
  /** Accessibility label for the search results section, shown when the user has typed valid terms */
  'search.search-results-aria-label': 'Arama sonuçları',

  /** Accessibility label for the navbar status button */
  'status-button.aria-label': undefined, // 'Configuration status'

  /** Description for error when the timeline for the given document can't be loaded */
  'timeline.error.load-document-changes-description': 'Belge geçmişi işlemleri etkilenmedi.',
  /** Title for error when the timeline for the given document can't be loaded */
  'timeline.error.load-document-changes-title': 'Belge değişikliklerini alırken bir hata oluştu.',
  /** Error description for when the document doesn't have history */
  'timeline.error.no-document-history-description':
    'Belgenin içeriğini değiştirirken, belge sürümleri bu menüde görünecektir.',
  /** Error title for when the document doesn't have history */
  'timeline.error.no-document-history-title': 'Belge geçmişi yok',
  /** Error prompt when revision cannot be loaded */
  'timeline.error.unable-to-load-revision': 'Revizyon yüklenemiyor',
  /** Label for when the timeline item is the latest in the history */
  'timeline.latest': 'En son',
  /** Label for latest version for timeline menu dropdown */
  'timeline.latest-version': 'En son sürüm',
  /** The aria-label for the list of revisions in the timeline */
  'timeline.list.aria-label': 'Belge revizyonları',
  /** Label for loading history */
  'timeline.loading-history': 'Geçmiş yükleniyor…',
  /** Label shown in review changes timeline when a document has been created */
  'timeline.operation.created': 'Oluşturuldu',
  /** Label shown in review changes timeline when a document has been created, with a timestamp */
  'timeline.operation.created_timestamp': 'Oluşturuldu: {{timestamp, datetime}}',
  /** Label shown in review changes timeline when a document was initially created */
  'timeline.operation.created-initial': 'Oluşturuldu',
  /** Label shown in review changes timeline when a document was initially created, with a timestamp */
  'timeline.operation.created-initial_timestamp': 'Oluşturuldu: {{timestamp, datetime}}',
  /** Label shown in review changes timeline when a document has been deleted */
  'timeline.operation.deleted': 'Silindi',
  /** Label shown in review changes timeline when a document has been deleted, with a timestamp */
  'timeline.operation.deleted_timestamp': 'Silindi: {{timestamp, datetime}}',
  /** Label shown in review changes timeline when a draft has been discarded */
  'timeline.operation.draft-discarded': 'Taslak atıldı',
  /** Label shown in review changes timeline when a draft has been discarded, with a timestamp */
  'timeline.operation.draft-discarded_timestamp': 'Taslak atıldı: {{timestamp, datetime}}',
  /** Label shown in review changes timeline when a draft has been edited */
  'timeline.operation.edited-draft': 'Düzenlendi',
  /** Label shown in review changes timeline when a draft has been edited, with a timestamp */
  'timeline.operation.edited-draft_timestamp': 'Düzenlendi: {{timestamp, datetime}}',
  /** Label shown in review changes timeline when a document has been edited live */
  'timeline.operation.edited-live': 'Canlı düzenlendi',
  /** Label shown in review changes timeline when a document has been edited live, with a timestamp */
  'timeline.operation.edited-live_timestamp': 'Canlı düzenlendi: {{timestamp, datetime}}',
  /** Label shown in review changes timeline when a document was published */
  'timeline.operation.published': 'Yayınlandı',
  /** Label shown in review changes timeline when a document was published, with a timestamp */
  'timeline.operation.published_timestamp': 'Yayınlandı: {{timestamp, datetime}}',
  /** Label shown in review changes timeline when a document was unpublished */
  'timeline.operation.unpublished': 'Yayından kaldırıldı',
  /** Label shown in review changes timeline when a document was unpublished, with a timestamp */
  'timeline.operation.unpublished_timestamp': 'Yayından kaldırıldı: {{timestamp, datetime}}',
  /**
   * Label for determining since which version the changes for timeline menu dropdown are showing.
   * Receives the time label as a parameter (`timestamp`).
   */
  'timeline.since': 'Şu tarihten beri: {{timestamp, datetime}}',
  /** Label for missing change version for timeline menu dropdown are showing */
  'timeline.since-version-missing': 'Şu tarihten beri: bilinmeyen sürüm',

  /**Aria label for the action buttons in the PTE toolbar */
  'toolbar.portable-text.action-button-aria-label': undefined, // '{{action}}'

  /** Label for button showing the free trial days left */
  'user-menu.action.free-trial_one': 'Deneme sürenizin sonuna {{count}} gün kaldı',
  'user-menu.action.free-trial_other': 'Deneme sürenizin sonuna {{count}} gün kaldı',
  /** Label for the button showed after trial ended */
  'user-menu.action.free-trial-finished': 'Ücretsiz sürümden yükselt',
  /** Label for action to invite members to the current sanity project */
  'user-menu.action.invite-members': 'Üyeleri davet et',
  /** Accessibility label for action to invite members to the current sanity project */
  'user-menu.action.invite-members-aria-label': 'Üyeleri davet et',
  /** Label for action to manage the current sanity project */
  'user-menu.action.manage-project': 'Projeyi yönet',
  /** Accessibility label for the action to manage the current project */
  'user-menu.action.manage-project-aria-label': 'Projeyi yönet',
  /** Tooltip helper text when portable text annotation is disabled for empty block*/
  'user-menu.action.portable-text.annotation-disabled_empty-block':
    'Boş bloğa {{name}} uygulanamaz',
  /** Tooltip helper text when portable text annotation is disabled for multiple blocks */
  'user-menu.action.portable-text.annotation-disabled_multiple-blocks':
    'Birden fazla bloğa {{name}} uygulanamaz',
  /** Label for action to sign out of the current sanity project */
  'user-menu.action.sign-out': 'Oturumu kapat',
  /** Title for appearance section for the current studio (dark / light / system scheme) */
  'user-menu.appearance-title': 'Görünüm',
  /** Label for close menu button for user menu */
  'user-menu.close-menu': 'Menüyü kapat',
  /** Description for using the "dark theme" in the appearance user menu */
  'user-menu.color-scheme.dark-description': 'Karanlık görünümü kullan',
  /** Title for using the "dark theme" in the appearance user menu */
  'user-menu.color-scheme.dark-title': 'Karanlık',
  /** Description for using the "light theme" in the appearance user menu */
  'user-menu.color-scheme.light-description': 'Aydınlık görünümü kullan',
  /** Title for using the "light theme" in the appearance user menu */
  'user-menu.color-scheme.light-title': 'Aydınlık',
  /** Description for using "system apparence" in the appearance user menu */
  'user-menu.color-scheme.system-description': 'Sistem görünümünü kullan',
  /** Title for using system apparence in the appearance user menu */
  'user-menu.color-scheme.system-title': 'Sistem',
  /** Title for locale section for the current studio */
  'user-menu.locale-title': 'Dil',
  /** Label for tooltip to show which provider the currently logged in user is using */
  'user-menu.login-provider': '{{providerTitle}} ile giriş yapıldı',
  /** Label for open menu button for user menu */
  'user-menu.open-menu': 'Menüyü aç',

  /**
   * Label for action to add a workspace (currently a developer-oriented action, as this will
   * lead to the documentation on workspace configuration)
   */
  'workspaces.action.add-workspace': 'Çalışma alanı ekle',
  /**
   * Label for action to choose a different workspace, in the case where you are not logged in,
   * have selected a workspace, and are faced with the authentication options for the selected
   * workspace. In other words, label for the action shown when you have reconsidered which
   * workspace to authenticate in.
   */
  'workspaces.action.choose-another-workspace': 'Başka bir çalışma alanı seç',
  /** Label for heading that indicates that you can choose your workspace */
  'workspaces.choose-your-workspace-label': 'Çalışma alanınızı seçin',
  /** Label for the workspace menu */
  'workspaces.select-workspace-aria-label': 'Çalışma alanı seç',
  /** Button label for opening the workspace switcher */
  'workspaces.select-workspace-label': 'Çalışma alanı seç',
  /** Tooltip for the workspace menu */
  'workspaces.select-workspace-tooltip': 'Çalışma alanını seç',
  /** Title for Workplaces dropdown menu */
  'workspaces.title': 'İş Alanları',
})
