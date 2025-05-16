import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** "Disabled" status for auto-updates in About-dialog */
  'about-dialog.version-info.auto-updates.disabled': 'Dinonaktifkan',
  /** "Enabled" status for auto-updates in About-dialog */
  'about-dialog.version-info.auto-updates.enabled': 'Diaktifkan',
  /** "Auto Updates" status header in About-dialog */
  'about-dialog.version-info.auto-updates.header': 'Pembaruan Otomatis',
  /** "How to enable" next to Disabled state for Auto updates in about dialog */
  'about-dialog.version-info.auto-updates.how-to-enable': 'Cara mengaktifkan',
  /** Text displayed on the "Copy to clipboard"-button after clicked */
  'about-dialog.version-info.copy-to-clipboard-button.copied-text':
    'Disalin ke Papan Klip. Selamat menempel!',
  /** "Copy to Clipboard" button text for copying version details from About-dialog */
  'about-dialog.version-info.copy-to-clipboard-button.text': 'Salin ke Papan Klip',
  /** "Current version" header in about dialog  */
  'about-dialog.version-info.current-version.header': 'Versi saat ini',
  /** "How to upgrade" link text */
  'about-dialog.version-info.how-to-upgrade': 'Cara memperbarui',
  /** "Latest version" header in about dialog */
  'about-dialog.version-info.latest-version.header': 'Versi terbaru',
  /** "Latest version" header in about dialog */
  'about-dialog.version-info.latest-version.text': 'Versi terbaru adalah {{latestVersion}}',
  /** "Up to date" status in About-dialog */
  'about-dialog.version-info.up-to-date': 'Terbaru',
  /** "User agent" header in About-dialog */
  'about-dialog.version-info.user-agent.header': 'Agen pengguna',

  /** The text used in the tooltip shown in the dialog close button */
  'announcement.dialog.close': 'Tutup',
  /** Aria label to be used in the dialog close button */
  'announcement.dialog.close-label': 'Tutup dialog',
  /**Text to be used in the tooltip in the button in the studio announcement card */
  'announcement.floating-button.dismiss': 'Tutup',
  /**Aria label to be used in the floating button in the studio announcement card, to dismiss the card */
  'announcement.floating-button.dismiss-label': 'Tutup pengumuman',
  /**Aria label to be used in the floating button in the studio announcement card */
  'announcement.floating-button.open-label': 'Buka pengumuman',

  /** Menu item for deleting the asset */
  'asset-source.asset-list.menu.delete': 'Hapus',
  /** Menu item for showing where a particular asset is used */
  'asset-source.asset-list.menu.show-usage': 'Tunjukkan penggunaan',
  /** Header in usage dialog for file assets */
  'asset-source.asset-usage-dialog.header_file': 'Dokumen menggunakan file',
  /** Header in usage dialog for image assets */
  'asset-source.asset-usage-dialog.header_image': 'Dokumen menggunakan gambar',
  /** Text shown in usage dialog when loading documents using the selected asset */
  'asset-source.asset-usage-dialog.loading': 'Memuat…',
  /** Text for cancel action in delete-asset dialog */
  'asset-source.delete-dialog.action.cancel': 'Batal',
  /** Text for "confirm delete" action in delete-asset dialog */
  'asset-source.delete-dialog.action.delete': 'Hapus',
  /** Dialog header for delete-asset dialog when deleting a file */
  'asset-source.delete-dialog.header_file': 'Hapus file',
  /** Dialog header for delete-asset dialog when deleting an image */
  'asset-source.delete-dialog.header_image': 'Hapus gambar',
  /** Text shown in delete dialog when loading documents using the selected asset */
  'asset-source.delete-dialog.loading': 'Memuat…',
  /** Message confirming to delete *named* file */
  'asset-source.delete-dialog.usage-list.confirm-delete-file_named':
    'Anda akan menghapus file <strong>{{filename}}</strong> dan metadatanya. Apakah Anda yakin?',
  /** Message confirming to delete *unnamed* file */
  'asset-source.delete-dialog.usage-list.confirm-delete-file_unnamed':
    'Anda akan menghapus file dan metadatanya. Apakah Anda yakin?',
  /** Message confirming to delete *named* image */
  'asset-source.delete-dialog.usage-list.confirm-delete-image_named':
    'Anda akan menghapus gambar <strong>{{filename}}</strong> dan metadatanya. Apakah Anda yakin?',
  /** Message confirming to delete *unnamed* image */
  'asset-source.delete-dialog.usage-list.confirm-delete-image_unnamed':
    'Anda akan menghapus gambar dan metadatanya. Apakah Anda yakin?',
  /** Alt text showing on image preview in delete asset dialog  */
  'asset-source.delete-dialog.usage-list.image-preview-alt': 'Pratinjau gambar',
  /** Warning message showing when *named* file can't be deleted because it is in use */
  'asset-source.delete-dialog.usage-list.warning-file-is-in-use_named':
    '{{filename}} tidak dapat dihapus karena sedang digunakan. Untuk menghapus file ini, Anda harus menghapus semua penggunaannya terlebih dahulu.',
  /** Warning message showing when *unnamed* file can't be deleted because it is in use */
  'asset-source.delete-dialog.usage-list.warning-file-is-in-use_unnamed':
    'File ini tidak dapat dihapus karena sedang digunakan. Untuk menghapusnya, Anda harus menghapus semua penggunaannya terlebih dahulu.',
  /** Warning message showing when *named* image can't be deleted because it is in use */
  'asset-source.delete-dialog.usage-list.warning-image-is-in-use_named':
    '{{filename}} tidak dapat dihapus karena sedang digunakan. Untuk menghapus gambar ini, Anda harus menghapus semua penggunaannya terlebih dahulu.',
  /** Warning message showing when *unnamed* image can't be deleted because it is in use */
  'asset-source.delete-dialog.usage-list.warning-image-is-in-use_unnamed':
    'Gambar ini tidak dapat dihapus karena sedang digunakan. Untuk menghapusnya, Anda harus menghapus semua penggunaannya terlebih dahulu.',
  /** Text shown when the list of assets only include a specific set of types */
  'asset-source.dialog.accept-message':
    'Hanya menampilkan aset dari tipe yang diterima: <strong>{{acceptTypes}}</strong>',
  /** Select asset dialog cancel-button */
  'asset-source.dialog.button.cancel': 'Batal',
  /** Select asset dialog select-button */
  'asset-source.dialog.button.select': 'Pilih',
  /** Keys shared between both image asset source and file asset source */
  /** Select asset dialog title for files */
  'asset-source.dialog.default-title_file': 'Pilih file',
  /** Select asset dialog title for images */
  'asset-source.dialog.default-title_image': 'Pilih gambar',
  /** Insert asset error */
  'asset-source.dialog.insert-asset-error':
    'Kesalahan saat memasukkan aset. Lihat konsol untuk informasi lebih lanjut.',
  /** Select asset dialog load more items */
  'asset-source.dialog.load-more': 'Muat lebih banyak',
  /** Text shown when selecting a file but there's no files to select from */
  'asset-source.dialog.no-assets_file': 'Tidak ada file',
  /** Text shown when selecting an image but there's no images to select from */
  'asset-source.dialog.no-assets_image': 'Tidak ada gambar',
  'asset-source.file.asset-list.action.delete.disabled-cannot-delete-current-file':
    'Tidak dapat menghapus file yang sedang dipilih',
  'asset-source.file.asset-list.action.delete.text': 'Hapus',
  'asset-source.file.asset-list.action.delete.title': 'Hapus file',
  'asset-source.file.asset-list.action.select-file.title': 'Pilih file {{filename}}',
  'asset-source.file.asset-list.action.show-usage.title': 'Tampilkan penggunaan',
  'asset-source.file.asset-list.delete-failed': 'File tidak dapat dihapus',
  'asset-source.file.asset-list.delete-successful': 'File telah dihapus',
  'asset-source.file.asset-list.header.date-added': 'Tanggal ditambahkan',
  /** File asset source */
  'asset-source.file.asset-list.header.filename': 'Nama file',
  'asset-source.file.asset-list.header.size': 'Ukuran',
  'asset-source.file.asset-list.header.type': 'Tipe',
  /** Text displayed on button or menu invoking the file asset source */
  'asset-source.file.title': 'File yang diunggah',
  'asset-source.image.asset-list.delete-failed': 'Gambar tidak dapat dihapus',
  /** Image asset source */
  'asset-source.image.asset-list.delete-successful': 'Gambar telah dihapus',
  /** Text displayed on button or menu invoking the image asset source */
  'asset-source.image.title': 'Gambar yang diunggah',
  'asset-source.usage-list.documents-using-file_named_other':
    '{{count}} dokumen menggunakan file <code>{{filename}}</code>',
  /** Text shown in usage dialog for a file asset when there are zero, one or more documents using the *named* file **/
  'asset-source.usage-list.documents-using-file_named_zero':
    'Tidak ada dokumen yang menggunakan file <code>{{filename}}</code>',
  'asset-source.usage-list.documents-using-file_unnamed_other':
    '{{count}} dokumen menggunakan file ini',
  /** Text shown in usage dialog for a file asset when there are zero, one or more documents using the *unnamed* file **/
  'asset-source.usage-list.documents-using-file_unnamed_zero':
    'Tidak ada dokumen yang menggunakan file ini',
  'asset-source.usage-list.documents-using-image_named_other':
    '{{count}} dokumen menggunakan gambar <code>{{filename}}</code>',
  /** Text shown in usage dialog for an image asset when there are zero, one or more documents using the *named* image **/
  'asset-source.usage-list.documents-using-image_named_zero':
    'Tidak ada dokumen yang menggunakan gambar <code>{{filename}}</code>',
  'asset-source.usage-list.documents-using-image_unnamed_other':
    '{{count}} dokumen menggunakan gambar ini',
  /** Text shown in usage dialog for an image asset when there are zero, one or more documents using the *unnamed* image **/
  'asset-source.usage-list.documents-using-image_unnamed_zero':
    'Tidak ada dokumen yang menggunakan gambar ini',

  /** Common (all) Asset Source texts. Note that all translation keys starting with 'asset-source.' is for the built in asset source. */
  'asset-sources.common.uploader.upload-failed.description':
    'Lihat konsol untuk informasi lebih lanjut.',
  'asset-sources.common.uploader.upload-failed.title': 'Pengunggahan gagal',
  /** Menu Items for Dataset Asset Source (will be replaced with workspace name by default) */
  'asset-sources.dataset.file.title': 'File Workspace',
  'asset-sources.dataset.image.title': 'Gambar Workspace',
  /** Menu Items for Media Library Asset Source */
  'asset-sources.media-library.file.title': 'Perpustakaan Media',
  'asset-sources.media-library.image.title': 'Perpustakaan Media',

  /** Label when a release has been deleted by a different user */
  'banners.deleted-bundle-banner.text': "Rilis '<strong>{{title}}</strong>' telah dihapus.",

  /** Action message for navigating to next month */
  'calendar.action.go-to-next-month': 'Pergi ke bulan depan',
  /** Action message for navigating to next year */
  'calendar.action.go-to-next-year': 'Pergi ke tahun depan',
  /** Action message for navigating to previous month */
  'calendar.action.go-to-previous-month': 'Pergi ke bulan sebelumnya',
  /** Action message for navigating to previous year */
  'calendar.action.go-to-previous-year': 'Pergi ke tahun sebelumnya',
  /* Label for navigating the calendar to "today", without _selecting_ today. Short form, eg `Today`, not `Go to today` */
  'calendar.action.go-to-today': 'Hari ini',
  /* Accessibility label for navigating the calendar to "today", without _selecting_ today */
  'calendar.action.go-to-today-aria-label': 'Pergi ke hari ini',
  /* Label for navigating the calendar to "tomorrow", without _selecting_ tomorrow. Short form, eg `Tomorrow`, not `Go to tomorrow` */
  'calendar.action.go-to-tomorrow': 'Besok',
  /* Label for navigating the calendar to "yesterday", without _selecting_ yesterday. Short form, eg `Yesterday`, not `Go to yesterday` */
  'calendar.action.go-to-yesterday': 'Kemarin',
  /** Label for switch that controls whether or not to include time in given timestamp */
  'calendar.action.include-time-label': 'Sertakan waktu',
  /** Action message for selecting the time */
  'calendar.action.select-time': 'Pilih waktu',
  /** Action message for setting to the current time */
  'calendar.action.set-to-current-time': 'Atur ke waktu saat ini',
  /** Label for selecting an hour preset. Receives a `time` param as a string on hh:mm format and a `date` param as a Date instance denoting the preset date */
  'calendar.action.set-to-time-preset': '{{time}} pada {{date, datetime}}',
  /** Aria label for button to open date picker */
  'calendar.button.aria-label': 'Buka kalender',
  /** Tooltip content for button to open datetime input */
  'calendar.button.tooltip-text': 'Pilih tanggal',
  /** Error message displayed in calendar when entered date is not the correct format */
  'calendar.error.must-be-in-format': 'Harus dalam format: {{exampleDate}}',
  /** Month name for April */
  'calendar.month-names.april': 'April',
  /** Month name for August */
  'calendar.month-names.august': 'Agustus',
  /** Month name for December */
  'calendar.month-names.december': 'Desember',
  /** Month name for February */
  'calendar.month-names.february': 'Februari',
  /** Month name for January */
  'calendar.month-names.january': 'Januari',
  /** Month name for July */
  'calendar.month-names.july': 'Juli',
  /** Month name for June */
  'calendar.month-names.june': 'Juni',
  /** Month name for March */
  'calendar.month-names.march': 'Maret',
  /** Month name for May */
  'calendar.month-names.may': 'Mei',
  /** Month name for November */
  'calendar.month-names.november': 'November',
  /** Month name for October */
  'calendar.month-names.october': 'Oktober',
  /** Month name for September */
  'calendar.month-names.september': 'September',
  /** Short weekday name for Friday */
  'calendar.weekday-names.short.friday': 'Jum',
  /** Short weekday name for Monday */
  'calendar.weekday-names.short.monday': 'Sen',
  /** Short weekday name for Saturdayday */
  'calendar.weekday-names.short.saturday': 'Sab',
  /** Short weekday name for Sunday */
  'calendar.weekday-names.short.sunday': 'Min',
  /** Short weekday name for Thursday */
  'calendar.weekday-names.short.thursday': 'Kam',
  /** Short weekday name for Tuesday */
  'calendar.weekday-names.short.tuesday': 'Sel',
  /** Short weekday name for Wednesday */
  'calendar.weekday-names.short.wednesday': 'Rab',

  /** Label for the close button label in Review Changes pane */
  'changes.action.close-label': 'Tutup riwayat',
  /** Cancel label for revert button prompt action */
  'changes.action.revert-all-cancel': 'Batal',
  /** Revert all confirm label for revert button action - used on prompt button + review changes pane */
  'changes.action.revert-all-confirm': 'Kembalikan semua',
  /** Revert for confirming revert (plural) label for field change action */
  'changes.action.revert-changes-confirm-change_other': 'Kembalikan perubahan',
  /** Prompt for reverting changes for a field change */
  'changes.action.revert-changes-description': 'Apakah Anda yakin ingin mengembalikan perubahan?',
  /** Label for when the action of the change was to set something that was previously empty, eg a field was given a value, an array item was added, an asset was selected or similar */
  'changes.added-label': 'Ditambahkan',
  /** Array diff: An item was added in a given position (`{{position}}`) */
  'changes.array.item-added-in-position': 'Ditambahkan di posisi {{position}}',
  'changes.array.item-moved_down_other': 'Dipindahkan {{count}} posisi ke bawah',
  'changes.array.item-moved_up_other': 'Dipindahkan {{count}} posisi ke atas',
  /** Array diff: An item was removed from a given position (`{{position}}`) */
  'changes.array.item-removed-from-position': 'Dihapus dari posisi {{position}}',
  /** Accessibility label for the "change bar" shown when there are edits on a field-level */
  'changes.change-bar.aria-label': 'Tinjau perubahan',
  /** Label for when the action of the change was _not_ an add/remove, eg a text field changed value, an image was changed from one asset to another or similar */
  'changes.changed-label': 'Diubah',
  /** Label and text for tooltip that indicates the authors of the changes */
  'changes.changes-by-author': 'Perubahan oleh',
  /** Additional text shown in development mode when a diff component crashes during rendering */
  'changes.error-boundary.developer-info': 'Periksa konsol pengembang untuk informasi lebih lanjut',
  /** Text shown when a diff component crashes during rendering, triggering the error boundary */
  'changes.error-boundary.title': 'Menggambarkan perubahan pada bidang ini menyebabkan kesalahan',
  /* Error description when changes could not be loaded */
  'changes.error-description': 'Kami tidak dapat memuat perubahan untuk dokumen ini.',
  /** Error title when changes could not be loaded */
  'changes.error-title': 'Terjadi kesalahan',
  /** Error message shown when the value of a field is not the expected one */
  'changes.error.incorrect-type-message':
    'Kesalahan nilai: Nilai adalah tipe "<code>{{actualType}}</code>", diharapkan "<code>{{expectedType}}</code>"',
  /** File diff: Fallback title for the meta info section when there is no original filename to use  */
  'changes.file.meta-info-fallback-title': 'Tanpa judul',
  /** Image diff: Text shown in tooltip when hovering hotspot that has changed in diff view */
  'changes.image.crop-changed': 'Pemotongan gambar berubah',
  /** Image diff: Text shown if the previous image asset was deleted (shouldn't theoretically happen) */
  'changes.image.deleted': 'Gambar dihapus',
  /** Image diff: Text shown if the image failed to be loaded when previewing it */
  'changes.image.error-loading-image': 'Kesalahan memuat gambar',
  /** Image diff: Text shown in tooltip when hovering hotspot that has changed in diff view */
  'changes.image.hotspot-changed': 'Hotspot berubah',
  /** Image diff: Fallback title for the meta info section when there is no original filename to use  */
  'changes.image.meta-info-fallback-title': 'Tanpa judul',
  /** Image diff: Text shown if no asset has been set for the field (but has metadata changes) */
  'changes.image.no-asset-set': 'Gambar tidak ditetapkan',
  /** Image diff: Text shown when the from/to state has/had no image */
  'changes.image.no-image-placeholder': '(tidak ada gambar)',
  /** Label for the "from" value in the change inspector */
  'changes.inspector.from-label': 'Dari',
  /** Label for the "meta" (field path, action etc) information in the change inspector */
  'changes.inspector.meta-label': 'Meta',
  /** Label for the "to" value in the change inspector */
  'changes.inspector.to-label': 'Ke',
  /** Loading author of change in the differences tooltip in the review changes pane */
  'changes.loading-author': 'Memuat…',
  /** Loading changes in Review Changes Pane */
  'changes.loading-changes': 'Memuat perubahan…',
  /** No Changes description in the Review Changes pane */
  'changes.no-changes-description':
    'Edit dokumen atau pilih versi yang lebih lama di timeline untuk melihat daftar perubahan muncul di panel ini.',
  /** No Changes title in the Review Changes pane */
  'changes.no-changes-title': 'Tidak ada perubahan',
  /* Label for the tooltip that shows when an action is not selectable*/
  'changes.not-selectable': 'Tidak mungkin untuk memilih peristiwa ini',
  /** Portable Text diff: An annotation was added */
  'changes.portable-text.annotation_added': 'Annotasi ditambahkan',
  /** Portable Text diff: An annotation was changed */
  'changes.portable-text.annotation_changed': 'Annotasi diubah',
  /** Portable Text diff: An annotation was removed */
  'changes.portable-text.annotation_removed': 'Annotasi dihapus',
  /** Portable Text diff: An annotation was left unchanged */
  'changes.portable-text.annotation_unchanged': 'Annotasi tidak berubah',
  /** Portable Text diff: A block changed from one style to another (eg `normal` to `h1` or similar) */
  'changes.portable-text.block-style-changed':
    'Gaya blok teks berubah dari "{{fromStyle}}" menjadi "{{toStyle}}"',
  /** Portable Text diff: Change formatting of text (setting/unsetting marks, eg bold/italic etc) */
  'changes.portable-text.changed-formatting': 'Pemformatan berubah',
  /** Portable Text diff: An empty inline object is part of a change */
  'changes.portable-text.empty-inline-object': 'Objek inline kosong {{inlineObjectType}}',
  /** Portable Text diff: An empty object is the result of adding/removing an annotation */
  'changes.portable-text.empty-object-annotation': 'Objek {{annotationType}} kosong',
  /** Portable Text diff: Added a block containing no text (eg empty block) */
  'changes.portable-text.empty-text_added': 'Teks kosong ditambahkan',
  /** Portable Text diff: Changed a block that contained no text (eg empty block) */
  'changes.portable-text.empty-text_changed': 'Teks kosong diubah',
  /** Portable Text diff: Removed a block containing no text (eg empty block) */
  'changes.portable-text.empty-text_removed': 'Teks kosong dihapus',
  /** Portable Text diff: An inline object was added */
  'changes.portable-text.inline-object_added': 'Objek sebaris ditambahkan',
  /** Portable Text diff: An inline object was changed */
  'changes.portable-text.inline-object_changed': 'Objek sebaris diubah',
  /** Portable Text diff: An inline object was removed */
  'changes.portable-text.inline-object_removed': 'Objek sebaris dihapus',
  /** Portable Text diff: An inline object was left unchanged */
  'changes.portable-text.inline-object_unchanged': 'Objek sebaris tidak berubah',
  /** Portable Text diff: Added a chunk of text */
  'changes.portable-text.text_added': 'Teks ditambahkan',
  /** Portable Text diff: Removed a chunk of text */
  'changes.portable-text.text_removed': 'Teks dihapus',
  /** Portable Text diff: Annotation has an unknown schema type */
  'changes.portable-text.unknown-annotation-schema-type': 'Tipe skema anotasi tidak diketahui',
  /** Portable Text diff: Inline object has an unknown schema type */
  'changes.portable-text.unknown-inline-object-schema-type':
    'Tipe skema objek sebaris tidak diketahui',
  /** Label for when the action of the change was a removal, eg a field was cleared, an array item was removed, an asset was deselected or similar */
  'changes.removed-label': 'Dihapus',
  /** Title for the Review Changes pane */
  'changes.title': 'Riwayat',
  /**The title that will be shown in the badge inside the events when the item is a draft */
  'changes.versions.draft': 'Draf',

  /** --- Common components --- */
  /** Tooltip text for context menu buttons */
  'common.context-menu-button.tooltip': 'Tampilkan lebih banyak',
  /** Default text for dialog cancel button */
  'common.dialog.cancel-button.text': 'Batal',
  /** Default text for dialog confirm button */
  'common.dialog.confirm-button.text': 'Konfirmasi',
  /** Default text in shared loader text / spinner lockup */
  'common.loading': 'Memuat',

  /** --- Configuration issues --- */
  /** Default label text on configuration issues button */
  'configuration-issues.button.label': 'Masalah konfigurasi',
  /** Tooltip displayed on configuration issues button */
  'configuration-issues.button.tooltip': 'Ditemukan masalah konfigurasi',

  /** The fallback title for an ordering menu item if no localized titles are provided. */
  'default-menu-item.fallback-title': 'Urutkan berdasarkan {{title}}',

  /** Title for the default ordering/SortOrder if no orderings are provided and the caption field is found */
  'default-orderings.caption': 'Urutkan berdasarkan Keterangan',
  /** Title for the default ordering/SortOrder if no orderings are provided and the description field is found */
  'default-orderings.description': 'Urutkan berdasarkan Deskripsi',
  /** Title for the default ordering/SortOrder if no orderings are provided and the header field is found */
  'default-orderings.header': 'Urutkan berdasarkan Header',
  /** Title for the default ordering/SortOrder if no orderings are provided and the heading field is found */
  'default-orderings.heading': 'Urutkan berdasarkan Heading',
  /** Title for the default ordering/SortOrder if no orderings are provided and the label field is found */
  'default-orderings.label': 'Urutkan berdasarkan Label',
  /** Title for the default ordering/SortOrder if no orderings are provided and the name field is found */
  'default-orderings.name': 'Urutkan berdasarkan Nama',
  /** Title for the default ordering/SortOrder if no orderings are provided and the title field is found */
  'default-orderings.title': 'Urutkan berdasarkan Judul',

  /** Label to show in the document footer indicating the creation date of the document */
  'document-status.created': 'Dibuat {{date}}',
  /** Label to show in the document status indicating the date of the status */
  'document-status.date': '{{date}}',
  /** Label to show in the document footer indicating the last edited date of the document */
  'document-status.edited': 'Diedit {{date}}',
  /** Label to show in the document footer indicating the document is not published*/
  'document-status.not-published': 'Belum dipublikasikan',
  /** Label to show in the document footer indicating the published date of the document */
  'document-status.published': 'Dipublikasikan {{date}}',
  /** Label to show in the document footer indicating the revision from date of the document */
  'document-status.revision-from': 'Revisi dari <em>{{date}}</em>',

  /** Label to indicate that a document type was not found */
  'document.type.not-found': 'Tipe dokumen "{{type}}" tidak ditemukan',

  /** The value of the <code>_key</code> property must be a unique string. */
  'form.error.duplicate-keys-alert.details.additional-description':
    'Nilai dari properti <code>_key</code> harus berupa string yang unik.',
  /** This usually happens when items are created using an API client, and the <code>_key</code> property of each elements has been generated non-uniquely. */
  'form.error.duplicate-keys-alert.details.description':
    'Ini biasanya terjadi ketika item dibuat menggunakan klien API, dan properti <code>_key</code> dari setiap elemen telah dihasilkan secara tidak unik.',
  /** Developer info */
  'form.error.duplicate-keys-alert.details.title': 'Info Pengembang',
  /** Generate unique keys */
  'form.error.duplicate-keys-alert.generate-button.text': 'Hasilkan kunci unik',
  /** Several items in this list share the same identifier (key). Every item must have an unique identifier. */
  'form.error.duplicate-keys-alert.summary':
    'Beberapa item dalam daftar ini berbagi pengenal yang sama (kunci). Setiap item harus memiliki pengenal yang unik.',
  /** Non-unique keys */
  'form.error.duplicate-keys-alert.title': 'Kunci tidak unik',
  /** Error text shown when a field with a given name cannot be found in the schema or is conditionally hidden but explicitly told to render  */
  'form.error.field-not-found':
    'Bidang "{{fieldName}}" tidak ditemukan di antara anggota – verifikasi bahwa itu telah didefinisikan dalam skema dan bahwa itu tidak disembunyikan secara kondisional.',
  /** Add missing keys */
  'form.error.missing-keys-alert.add-button.text': 'Tambahkan kunci yang hilang',
  /** The value of the <code>_key</code> property must be a unique string. */
  'form.error.missing-keys-alert.details.additional-description':
    'Nilai dari properti <code>_key</code> harus berupa string yang unik.',
  /** This usually happens when items are created using an API client, and the <code>_key</code> property has not been included. */
  'form.error.missing-keys-alert.details.description':
    'Ini biasanya terjadi ketika item dibuat menggunakan klien API, dan properti <code>_key</code> tidak disertakan.',
  /** Developer info */
  'form.error.missing-keys-alert.details.title': 'Info Pengembang',
  /** Some items in the list are missing their keys. This must be fixed in order to edit the list. */
  'form.error.missing-keys-alert.summary':
    'Beberapa item dalam daftar kehilangan kunci mereka. Ini harus diperbaiki agar dapat mengedit daftar.',
  /** Missing keys */
  'form.error.missing-keys-alert.title': 'Kunci yang hilang',
  /** This usually happens when items are created using an API client, or when a custom input component has added invalid data to the list. */
  'form.error.mixed-array-alert.details.description':
    'Ini biasanya terjadi ketika item dibuat menggunakan klien API, atau ketika komponen input khusus telah menambahkan data yang tidak valid ke dalam daftar.',
  /** Developer info */
  'form.error.mixed-array-alert.details.title': 'Info Pengembang',
  /**  Remove non-object values */
  'form.error.mixed-array-alert.remove-button.text': 'Hapus nilai yang bukan objek',
  /** Some items in this list are not objects. This must be fixed in order to edit the list. */
  'form.error.mixed-array-alert.summary':
    'Beberapa item dalam daftar ini bukan objek. Ini harus diperbaiki agar daftar dapat diedit.',
  /** Invalid list values */
  'form.error.mixed-array-alert.title': 'Nilai daftar tidak valid',
  /** Error text shown when form is unable to find an array item at a given indexed path */
  'form.error.no-array-item-at-index':
    'Tidak ada item array pada indeks <code>{{index}}</code> ditemukan di jalur <code>{{path}}</code>',
  /** Error text shown when form is unable to find an array item at a given keyed path */
  'form.error.no-array-item-at-key':
    'Tidak ada item array dengan `_key` <code>"{{key}}"</code> ditemukan di jalur <code>{{path}}</code>',
  /** The title above the error call stack output related to the crash */
  'form.error.unhandled-runtime-error.call-stack.title': 'Tumpukan Panggilan:',
  /** The title above the error component stack provided by React's underlying ErrorBoundary component */
  'form.error.unhandled-runtime-error.component-stack.title': 'Tumpukan Komponen:',
  /** The error message for the unhandled error that crashed the Input component during render */
  'form.error.unhandled-runtime-error.error-message': 'Error: {{message}}',
  /** The title for the error card rendered inside a field in place of a crashing input */
  'form.error.unhandled-runtime-error.title': 'Kesalahan Runtime yang Tidak Terduga',
  /** Form field deprecated label */
  'form.field.deprecated-label': 'usang',
  /** Fallback title shown above field if it has no defined title */
  'form.field.untitled-field-label': 'Tanpa Judul',
  /** The title of the reconnecting toast */
  'form.reconnecting.toast.title': 'Koneksi terputus. Menghubungkan kembali…',
  /** Accessibility label for the icon that indicates the field has a validation error */
  'form.validation.has-error-aria-label': 'Memiliki kesalahan',
  /** Accessibility label for the icon that indicates the field has validation information */
  'form.validation.has-info-aria-label': 'Memiliki informasi',
  /** Accessibility label for the icon that indicates the field has a validation warning */
  'form.validation.has-warning-aria-label': 'Memiliki peringatan',
  'form.validation.summary.errors-count_other': '{{count}} kesalahan',
  'form.validation.summary.warnings-count_other': '{{count}} peringatan',

  'free-trial.tooltip.days-count_other': '{{count}} hari tersisa dalam masa percobaan',
  /** Tooltip for free trial navbar button, once trial has ended */
  'free-trial.tooltip.trial-finished': 'Tingkatkan proyek Anda',

  /**
   * Label for "contact sales" call to action
   * These are titles for fallback links in the event the help & resources endpoint isn't able to be fetched
   */
  'help-resources.action.contact-sales': 'Hubungi penjualan',
  /**
   * Label for "help and support" call to action
   * These are titles for fallback links in the event the help & resources endpoint isn't able to be fetched
   */
  'help-resources.action.help-and-support': 'Bantuan dan dukungan',
  /**
   * Label for "join our community" call to action
   * These are titles for fallback links in the event the help & resources endpoint isn't able to be fetched
   */
  'help-resources.action.join-our-community': 'Bergabung dengan komunitas kami',
  /** Information for what the latest sanity version is */
  'help-resources.latest-sanity-version': 'Versi terbaru adalah {{latestVersion}}',
  /** Information for what studio version the current studio is running */
  'help-resources.studio-version': 'Versi Sanity Studio {{studioVersion}}',
  /** Title for help and resources menus */
  'help-resources.title': 'Bantuan dan sumber daya',

  /** Text for button to cancel an ongoing upload */
  'input.files.common.cancel-upload': 'Batalkan',
  /** Text for menuitem upload button default asset source */
  'input.files.common.upload-placeholder.file-input-button.default-source.badge': 'Standar',
  /** Text for file input button in upload placeholder */
  'input.files.common.upload-placeholder.file-input-button.text': 'Unggah',
  /** Uploading <FileName/> */
  'input.files.common.upload-progress': 'Mengunggah <FileName/>',
  /** The referenced document cannot be opened, because the URL failed to be resolved */
  'input.reference.document-cannot-be-opened.failed-to-resolve-url':
    'Dokumen ini tidak dapat dibuka (tidak dapat menyelesaikan URL ke Studio)',

  /** Label for adding item after a specific array item */
  'inputs.array.action.add-after': 'Tambahkan item setelah',
  /** Label for adding item before a specific array item */
  'inputs.array.action.add-before': 'Tambahkan item sebelum',
  /** Label for adding array item action when the schema allows for only one schema type */
  'inputs.array.action.add-item': 'Tambahkan item',
  /**
   * Label for adding one array item action when the schema allows for multiple schema types,
   * eg. will prompt the user to select a type once triggered
   */
  'inputs.array.action.add-item-select-type': 'Tambahkan item...',
  /** Label for copying an array item  */
  'inputs.array.action.copy': 'Salin',
  /** Array drag handle button tooltip */
  'inputs.array.action.drag.tooltip': 'Seret untuk mengurutkan ulang',
  /** Label for duplicating an array item  */
  'inputs.array.action.duplicate': 'Duplikat',
  /** Label for editing the item of a specific type, eg "Edit Person" */
  'inputs.array.action.edit': 'Edit {{itemTypeTitle}}',
  /** Label for removing an array item action  */
  'inputs.array.action.remove': 'Hapus',
  /** Label for removing action when an array item has an error  */
  'inputs.array.action.remove-invalid-item': 'Hapus',
  /** Label for viewing the item of a specific type, eg "View Person" */
  'inputs.array.action.view': 'Lihat {{itemTypeTitle}}',
  /** Error description for the array item tooltip that explains that the current item can still be moved or deleted but not edited since the schema definition is not found */
  'inputs.array.error.can-delete-but-no-edit-description':
    'Anda masih dapat memindahkan atau menghapus item ini, tetapi tidak dapat diedit karena definisi skema untuk tipe itemnya tidak dapat ditemukan.',
  /** Error label for toast when array could not resolve the initial value */
  'inputs.array.error.cannot-resolve-initial-value-title':
    'Tidak dapat menyelesaikan nilai awal untuk tipe: {{schemaTypeTitle}}: {{errorMessage}}.',
  /** Error label for toast when trying to upload multiple array items of a type that cannot be converted to array */
  'inputs.array.error.cannot-upload-unable-to-convert_other':
    'Item berikut tidak dapat diunggah karena tidak ada konversi yang diketahui dari tipe konten ke item array:',
  /** Error description for the array item tooltip that explains that the current type item is not valid for the list  */
  'inputs.array.error.current-schema-not-declare-description':
    'Skema saat ini tidak menyatakan item tipe <code>{{typeName}}</code> sebagai valid untuk daftar ini. Ini bisa berarti bahwa tipe telah dihapus sebagai item tipe yang valid, atau seseorang telah menambahkannya ke skema lokal mereka sendiri yang belum diterapkan.',
  /** Error description to show how the item is being represented in the json format */
  'inputs.array.error.json-representation-description': 'Representasi JSON dari item ini:',
  /** Error description for the array item tooltip that explains what the error means with more context */
  'inputs.array.error.type-is-incompatible-prompt':
    'Item tipe <code>{{typeName}}</code> tidak valid untuk daftar ini',
  /** Error title for when an item type within an array input is incompatible, used in the tooltip */
  'inputs.array.error.type-is-incompatible-title': 'Mengapa ini terjadi?',
  /** Error label for unexpected errors in the Array Input */
  'inputs.array.error.unexpected-error': 'Kesalahan Tak Terduga: {{error}}',
  /** Label for the array insert menu all items filter  */
  'inputs.array.insert-menu.filter.all-items': 'Semua',
  /** Label for when the array insert menu search shows no items */
  'inputs.array.insert-menu.search.no-results': 'Tidak ada item yang ditemukan',
  /** Placeholder for the array insert menu search field */
  'inputs.array.insert-menu.search.placeholder': 'Cari',
  /** Tooltip for the array insert menu grid view toggle */
  'inputs.array.insert-menu.toggle-grid-view.tooltip': 'Beralih ke tampilan grid',
  /** Tooltip for the array insert menu list view toggle */
  'inputs.array.insert-menu.toggle-list-view.tooltip': 'Beralih ke tampilan daftar',
  /** Label for when the array input doesn't have any items */
  'inputs.array.no-items-label': 'Tidak ada item',
  /** Label for read only array fields */
  'inputs.array.read-only-label': 'Bidang ini hanya-baca',
  /** Label for when the array input is resolving the initial value for the item */
  'inputs.array.resolving-initial-value': 'Menyelesaikan nilai awal…',
  /** Tooltip content when boolean input is disabled */
  'inputs.boolean.disabled': 'Dinonaktifkan',
  /** Warning label when selected datetime is in the past */
  'inputs.dateTime.past-date-warning': 'Pilih tanggal di masa depan.',
  /** Placeholder value for datetime input */
  'inputs.datetime.placeholder': 'mis. {{example}}',
  /** Acessibility label for button to open file options menu */
  'inputs.file.actions-menu.file-options.aria-label': 'Buka menu opsi file',
  /** Browse */
  'inputs.file.browse-button.text': 'Pilih',
  /** Select file */
  'inputs.file.dialog.title': 'Pilih file',
  /** Unknown member kind: `{{kind}}` */
  'inputs.file.error.unknown-member-kind': 'Jenis anggota tidak diketahui: {{kind}}',
  /** The value of this field is not a valid file. Resetting this field will let you choose a new file. */
  'inputs.file.invalid-file-warning.description':
    'Nilai dari bidang ini bukan file yang valid. Mengatur ulang bidang ini akan memungkinkan Anda memilih file baru.',
  /** Reset value */
  'inputs.file.invalid-file-warning.reset-button.text': 'Atur Ulang Nilai',
  /** Invalid file value */
  'inputs.file.invalid-file-warning.title': 'Nilai file tidak valid',
  /** Select */
  'inputs.file.multi-browse-button.text': 'Pilih',
  /** The upload could not be completed at this time. */
  'inputs.file.upload-failed.description': 'Pengunggahan tidak dapat diselesaikan saat ini.',
  /** Upload failed */
  'inputs.file.upload-failed.title': 'Pengunggahan gagal',
  /** Clear field */
  'inputs.files.common.actions-menu.clear-field.label': 'Bersihkan bidang',
  /** Copy URL */
  'inputs.files.common.actions-menu.copy-url.label': 'Salin URL',
  /** Download */
  'inputs.files.common.actions-menu.download.label': 'Unduh',
  /** The URL is copied to the clipboard */
  'inputs.files.common.actions-menu.notification.url-copied': 'URL telah disalin ke papan klip',
  /** Replace */
  'inputs.files.common.actions-menu.replace.label': 'Ganti',
  /** Upload */
  'inputs.files.common.actions-menu.upload.label': 'Unggah',
  /** Drop to upload */
  'inputs.files.common.drop-message.drop-to-upload': 'Jatuhkan untuk mengunggah',
  /** Drop to upload `{{count}}` files */
  'inputs.files.common.drop-message.drop-to-upload-multi_other':
    'Jatuhkan untuk mengunggah {{count}} berkas',
  /** Can't upload any of these files here */
  'inputs.files.common.drop-message.drop-to-upload.no-accepted-file-message_other':
    'Tidak dapat mengunggah berkas apa pun di sini',
  /** `{{count}}` files can't be uploaded here */
  'inputs.files.common.drop-message.drop-to-upload.rejected-file-message_other':
    '{{count}} berkas tidak dapat diunggah di sini',
  'inputs.files.common.placeholder.cannot-upload-some-files_other':
    'Tidak dapat mengunggah {{count}} berkas',
  /** Drag or paste type here */
  'inputs.files.common.placeholder.drag-or-paste-to-upload_file':
    'Seret atau tempel berkas di sini',
  /** Drag or paste image here */
  'inputs.files.common.placeholder.drag-or-paste-to-upload_image':
    'Seret atau tempel gambar di sini',
  /** Drop to upload file */
  'inputs.files.common.placeholder.drop-to-upload_file': 'Jatuhkan untuk mengunggah berkas',
  /** Drop to upload image */
  'inputs.files.common.placeholder.drop-to-upload_image': 'Jatuhkan untuk mengunggah gambar',
  /** Read only */
  'inputs.files.common.placeholder.read-only': 'Hanya baca',
  /** Select asset source destination for files to upload */
  'inputs.files.common.placeholder.select-asset-source-upload-destination': 'Unggah berkas ke:',
  /** Can't upload files here */
  'inputs.files.common.placeholder.upload-not-supported': 'Tidak dapat mengunggah berkas di sini',
  /** Clear upload */
  'inputs.files.common.stale-upload-warning.clear': 'Bersihkan unggahan',
  /** An upload has made no progress for at least `{{staleThresholdMinutes}}` minutes and likely got interrupted. You can safely clear the incomplete upload and try uploading again. */
  'inputs.files.common.stale-upload-warning.description':
    'Unggahan tidak ada kemajuan setidaknya selama {{staleThresholdMinutes}} menit dan kemungkinan terganggu. Anda dapat dengan aman membersihkan unggahan yang tidak lengkap dan mencoba mengunggah lagi.',
  /** Incomplete upload */
  'inputs.files.common.stale-upload-warning.title': 'Unggahan tidak lengkap',
  /** Tooltip text for action to crop image */
  'inputs.image.actions-menu.crop-image-tooltip': 'Potong gambar',
  /** Accessibility label for button to open image edit dialog */
  'inputs.image.actions-menu.edit-details.aria-label': 'Buka dialog edit gambar',
  /** Accessibility label for button to open image options menu */
  'inputs.image.actions-menu.options.aria-label': 'Buka menu opsi gambar',
  /** Select */
  'inputs.image.browse-menu.text': 'Pilih',
  /** Cannot upload this file here */
  'inputs.image.drag-overlay.cannot-upload-here': 'Tidak dapat mengunggah berkas ini di sini',
  /** Drop image to upload */
  'inputs.image.drag-overlay.drop-to-upload-image': 'Jatuhkan gambar untuk mengunggah',
  /** This field is read only */
  'inputs.image.drag-overlay.this-field-is-read-only': 'Bidang ini hanya baca',
  /** Unknown member kind: `{{kind}}` */
  'inputs.image.error.unknown-member-kind': 'Jenis anggota tidak diketahui: {{kind}}',
  /** Edit hotspot and crop */
  'inputs.image.hotspot-dialog.title': 'Edit hotspot dan crop',
  /** The value of this field is not a valid image. Resetting this field will let you choose a new image. */
  'inputs.image.invalid-image-warning.description':
    'Nilai dari bidang ini bukan gambar yang valid. Mengatur ulang bidang ini akan memungkinkan Anda memilih gambar baru.',
  /** Reset value */
  'inputs.image.invalid-image-warning.reset-button.text': 'Atur ulang nilai',
  /** Invalid image value */
  'inputs.image.invalid-image-warning.title': 'Nilai gambar tidak valid',
  /** Preview of uploaded image */
  'inputs.image.preview-uploaded-image': 'Pratinjau gambar yang diunggah',
  /** The upload could not be completed at this time. */
  'inputs.image.upload-error.description': 'Pengunggahan tidak dapat diselesaikan pada saat ini.',
  /** Upload failed */
  'inputs.image.upload-error.title': 'Pengunggahan gagal',
  /** Adjust the rectangle to crop image. Adjust the circle to specify the area that should always be visible. */
  'inputs.imagetool.description':
    'Sesuaikan persegi panjang untuk memotong gambar. Sesuaikan lingkaran untuk menentukan area yang harus selalu terlihat.',
  /** Error: `{{errorMessage}}` */
  'inputs.imagetool.load-error': 'Kesalahan: {{errorMessage}}',
  /** Hotspot & Crop */
  'inputs.imagetool.title': 'Hotspot & Crop',
  /** Warnings displayed to developers when using the crop/hotspot tool on vector images, notifying them that crops/hotspot are not respected when serving the image in vector format. For the crop/hotspot to apply, images must be served in a raster format such as JPG or PNG, by appending eg `fm=jpg` to the image url, or calling `format('jpg')` if using `@sanity/image-url` */
  'inputs.imagetool.vector-warning.developer-info':
    "Asset Pipeline tidak mendukung hotspot dan crop untuk format vektor. Untuk mengaktifkan hotspot & crop, keluarkan gambar ini ke salah satu format raster yang didukung. Misalnya: <code>fm=jpg</code> ke <ImageUrlDocumentationLink>URL gambar</ImageUrlDocumentationLink> atau panggil <code>.format('png')</code> dengan <ImageUrlPackageDocumentationLink>@sanity/image-url</ImageUrlPackageDocumentationLink>.",
  /** See developer info */
  'inputs.imagetool.vector-warning.expand-developer-info': 'Lihat info pengembang',
  /** Gotcha: Serving vector images with hotspot and crop from the Sanity Image API */
  'inputs.imagetool.vector-warning.title':
    'Peringatan: Hotspot dan crop mungkin tidak diterapkan pada gambar ini saat ditampilkan.',
  /** Convert to `{{targetType}}` */
  'inputs.invalid-value.convert-button.text': 'Konversi ke {{targetType}}',
  /** The current value (<code>`{{actualType}}`</code>) */
  'inputs.invalid-value.current-type': 'Nilai saat ini (<code>{{actualType}}</code>)',
  /** The property value is stored as a value type that does not match the expected type. */
  'inputs.invalid-value.description':
    'Nilai properti disimpan sebagai tipe nilai yang tidak sesuai dengan tipe yang diharapkan.',
  /** The value of this property must be of type <code>`{{validType}}`</code> according to the schema. */
  'inputs.invalid-value.details.description':
    'Nilai dari properti ini harus berupa tipe <code>{{validType}}</code> menurut skema.',
  /** Only the following types are valid here according to schema: */
  'inputs.invalid-value.details.multi-type-description':
    'Hanya tipe berikut yang valid di sini menurut skema:',
  /** Mismatching value types typically occur when the schema has recently been changed. */
  'inputs.invalid-value.details.possible-reason':
    'Ketidakcocokan tipe nilai biasanya terjadi ketika skema baru-baru ini diubah.',
  /** Developer info */
  'inputs.invalid-value.details.title': 'Info pengembang',
  /** -- Invalid Value Input -- */
  /** Reset value */
  'inputs.invalid-value.reset-button.text': 'Atur ulang nilai',
  /** Invalid property value */
  'inputs.invalid-value.title': 'Nilai properti tidak valid',
  /** Title for the "All fields" field group */
  'inputs.object.field-group-tabs.all-fields-title': 'Semua bidang',
  /** Aria label for the "Field groups" select control on smaller screens */
  'inputs.object.field-group-tabs.aria-label': 'Grup bidang',
  /** Read-only field description */
  'inputs.object.unknown-fields.read-only.description':
    'Bidang ini <strong>hanya baca</strong> menurut skema dokumen dan tidak dapat dihapus. Jika Anda ingin dapat menghapus ini di Studio, pastikan Anda menghapus bidang <code>readOnly</code> dari tipe yang melingkupi dalam skema.',
  /** Remove field */
  'inputs.object.unknown-fields.remove-field-button.text': 'Hapus bidang',
  'inputs.object.unknown-fields.warning.description_other':
    'Menemukan {{count}} bidang yang tidak didefinisikan dalam skema.',
  'inputs.object.unknown-fields.warning.details.description_other':
    'Bidang-bidang ini tidak didefinisikan dalam skema dokumen, yang bisa berarti bahwa definisi bidang telah dihapus atau seseorang telah menambahkannya ke proyek lokal mereka sendiri dan belum menerapkan perubahan mereka.',
  /** Developer info */
  'inputs.object.unknown-fields.warning.details.title': 'Info Pengembang',
  'inputs.object.unknown-fields.warning.title_other': 'Bidang tidak dikenal ditemukan',
  /** Collapse the editor to save screen space  */
  'inputs.portable-text.action.collapse-editor': 'Ciutkan editor',
  /** Aria label for action to edit an existing annotation */
  'inputs.portable-text.action.edit-annotation-aria-label': 'Edit anotasi',
  /** Expand the editor to give more editing space */
  'inputs.portable-text.action.expand-editor': 'Perluas editor',
  /** Label label for action to insert a block of a given type (`{{typeName}}`) */
  'inputs.portable-text.action.insert-block': 'Sisipkan {{typeName}}',
  /** Accessibility label for action to insert a block of a given type (`{{typeName}}`) */
  'inputs.portable-text.action.insert-block-aria-label': 'Sisipkan {{typeName}} (blok)',
  /** Label for action to insert an inline object of a given type (`{{typeName}}`) */
  'inputs.portable-text.action.insert-inline-object': 'Sisipkan {{typeName}}',
  /** Accessibility label for action to insert an inline object of a given type (`{{typeName}}`) */
  'inputs.portable-text.action.insert-inline-object-aria-label': 'Sisipkan {{typeName}} (sebaris)',
  /** Aria label for action to remove an annotation */
  'inputs.portable-text.action.remove-annotation-aria-label': 'Hapus anotasi',
  /** Label for activate on focus with context of click and not focused */
  'inputs.portable-text.activate-on-focus-message_click': 'Klik untuk mengaktifkan',
  /** Label for activate on focus with context of click and focused */
  'inputs.portable-text.activate-on-focus-message_click-focused':
    'Klik atau tekan spasi untuk mengaktifkan',
  /** Label for activate on focus with context of tap and not focused */
  'inputs.portable-text.activate-on-focus-message_tap': 'Ketuk untuk mengaktifkan',
  /** Aria label for the annotation object */
  'inputs.portable-text.annotation-aria-label': 'Objek anotasi',
  /** Title for dialog that allows editing an annotation */
  'inputs.portable-text.annotation-editor.title': 'Edit {{schemaType}}',
  /** Title of the default "link" annotation */
  'inputs.portable-text.annotation.link': 'Tautan',
  /** Aria label for the block object */
  'inputs.portable-text.block.aria-label': 'Objek blok',
  /** Label for action to edit a block item, in the case where it is editable */
  'inputs.portable-text.block.edit': 'Edit',
  /** Accessibility label for the button that opens the actions menu on blocks */
  'inputs.portable-text.block.open-menu-aria-label': 'Buka menu',
  /** Label for action to open a reference, in the case of block-level reference types */
  'inputs.portable-text.block.open-reference': 'Buka referensi',
  /** Label for action to remove a block item */
  'inputs.portable-text.block.remove': 'Hapus',
  /** Label for action to view a block item, in the case where it is read-only and thus cannot be edited */
  'inputs.portable-text.block.view': 'Lihat',
  /** Title of the "code" decorator */
  'inputs.portable-text.decorator.code': 'Kode',
  /** Title of the "em" (emphasis) decorator */
  'inputs.portable-text.decorator.emphasis': 'Miring',
  /** Title of the "strike-through" decorator */
  'inputs.portable-text.decorator.strike-through': 'Coret',
  /** Title of the "strong" decorator */
  'inputs.portable-text.decorator.strong': 'Tebal',
  /** Title of the "underline" decorator */
  'inputs.portable-text.decorator.underline': 'Garis bawah',
  /** Placeholder text for when the editor is empty */
  'inputs.portable-text.empty-placeholder': 'Kosong',
  /** Aria label for the block object */
  'inputs.portable-text.inline-block.aria-label': 'Objek sebaris',
  /** Label for action to edit an inline object item */
  'inputs.portable-text.inline-object.edit': 'Edit objek',
  /** Aria label for icon for action to edit an inline object item */
  'inputs.portable-text.inline-object.edit-aria-label': 'Edit objek',
  /** Label for action to remove an inline object item */
  'inputs.portable-text.inline-object.remove': 'Hapus objek',
  /** Aria label for icon for action to remove an inline object item */
  'inputs.portable-text.inline-object.remove-aria-label': 'Hapus objek',
  /** Disclaimer text shown on invalid Portable Text value, when an action is available to unblock the user, but it is not guaranteed to be safe */
  'inputs.portable-text.invalid-value.action-disclaimer':
    'CATATAN: Umumnya aman untuk melakukan tindakan di atas, tetapi jika Anda ragu, hubungi yang bertanggung jawab atas konfigurasi studio Anda.',
  /** Action presented when the Portable Text field value is invalid, when block with key `{{key}}` has a child with key `{{childKey}}` of type `{{childType}}` which is not allowed by the schema definition */
  'inputs.portable-text.invalid-value.disallowed-child-type.action': 'Hapus objek',
  /** Text explaining that the Portable Text field value is invalid, when block with key `{{key}}` has a child with key `{{childKey}}` of type `{{childType}}` which is not allowed by the schema definition */
  'inputs.portable-text.invalid-value.disallowed-child-type.description':
    'Anak dengan kunci {{childKey}} dari blok dengan kunci <code>{{key}}</code> adalah tipe <code>{{childType}}</code>, yang tidak diizinkan oleh definisi skema.',
  /** Action presented when the Portable Text field value is invalid, when child with key `{{key}}` has a type (`{{typeName}}`) that is not an allowed block type for this field */
  'inputs.portable-text.invalid-value.disallowed-type.action': 'Hapus blok',
  /** Text explaining that the Portable Text field value is invalid, when child with key `{{key}}` has a type (`{{typeName}}`) that is not an allowed block type for this field */
  'inputs.portable-text.invalid-value.disallowed-type.description':
    'Blok dengan kunci <code>{{key}}</code> adalah tipe <code>{{typeName}}</code>, yang tidak diizinkan oleh skema.',
  /** Action presented when the Portable Text field value is invalid, when block with key `{{key}}` contains no children */
  'inputs.portable-text.invalid-value.empty-children.action': 'Sisipkan rentang teks kosong',
  /** Text explaining that the Portable Text field value is invalid, when block with key `{{key}}` contains no children */
  'inputs.portable-text.invalid-value.empty-children.description':
    'Blok teks dengan kunci <code>{{key}}</code> tidak memiliki rentang teks.',
  /** Label for the button to ignore invalid values in the Portable Text editor */
  'inputs.portable-text.invalid-value.ignore-button.text': 'Abaikan',
  /** Action presented when the Portable Text field value is invalid, when child with key `{{key}}` has a `_type` property that is set to `block`, but the block type defined in schema has a different name (`{{expectedTypeName}}`) */
  'inputs.portable-text.invalid-value.incorrect-block-type.action':
    'Gunakan tipe <code>{{expectedTypeName}}</code>',
  /** Text explaining that the Portable Text field value is invalid, when child with key `{{key}}` has a `_type` property that is set to `block`, but the block type defined in schema has a different name (`{{expectedTypeName}}`) */
  'inputs.portable-text.invalid-value.incorrect-block-type.description':
    'Blok dengan kunci <code>{{key}}</code> memiliki nama tipe yang tidak valid. Menurut skema, seharusnya <code>{{expectedTypeName}}</code>.',
  /** Action presented when the Portable Text field value is invalid, when block with key `{{key}}` has a span with key `{{childKey}}` that has a missing or invalid `text` property */
  'inputs.portable-text.invalid-value.invalid-span-text.action': 'Atur nilai teks kosong',
  /** Text explaining that the Portable Text field value is invalid, when block with key `{{key}}` has a span with key `{{childKey}}` that has a missing or invalid `text` property */
  'inputs.portable-text.invalid-value.invalid-span-text.description':
    'Rentang dengan kunci {{childKey}} dari blok dengan kunci <code>{{key}}</code> memiliki properti <code>text</code> yang hilang atau tidak valid.',
  /** Action presented when the Portable Text field value is invalid, when child with key `{{key}}` is missing a `_type` property, but seems to be a block of type `{{expectedTypeName}}` */
  'inputs.portable-text.invalid-value.missing-block-type.action':
    'Gunakan tipe <code>{{expectedTypeName}}</code>',
  /** Text explaining that the Portable Text field value is invalid, when child with key `{{key}}` is missing a `_type` property, but seems to be a block of type `{{expectedTypeName}}` */
  'inputs.portable-text.invalid-value.missing-block-type.description':
    'Blok dengan kunci <code>{{key}}</code> kehilangan nama tipe. Menurut skema, seharusnya <code>{{expectedTypeName}}</code>.',
  /** Action presented when the Portable Text field value is invalid, when block with key `{{key}}` has a child at `{{index}}` which is missing `_key` property */
  'inputs.portable-text.invalid-value.missing-child-key.action': 'Tetapkan kunci acak',
  /** Text explaining that the Portable Text field value is invalid, when block with key `{{key}}` has a child at `{{index}}` which is missing `_key` property */
  'inputs.portable-text.invalid-value.missing-child-key.description':
    'Anak pada indeks <code>{{index}}</code> dari blok dengan kunci <code>{{key}}</code> kehilangan properti <code>_key</code>.',
  /** Action presented when the Portable Text field value is invalid, when block with key `{{key}}` has a child with key `{{childKey}}` which is missing a `_type` property */
  'inputs.portable-text.invalid-value.missing-child-type.action': 'Hapus objek',
  /** Text explaining that the Portable Text field value is invalid, when block with key `{{key}}` has a child with key `{{childKey}}` which is missing a `_type` property */
  'inputs.portable-text.invalid-value.missing-child-type.description':
    'Anak dengan kunci {{childKey}} dari blok dengan kunci <code>{{key}}</code> kehilangan properti <code>_type</code>.',
  /** Action presented when the Portable Text field value is invalid, when child at `{{index}}` is missing the required `_key` property */
  'inputs.portable-text.invalid-value.missing-key.action': 'Tetapkan kunci acak',
  /** Text explaining that the Portable Text field value is invalid, when child at `{{index}}` is missing the required `_key` property */
  'inputs.portable-text.invalid-value.missing-key.description':
    'Blok pada indeks <code>{{index}}</code> kehilangan properti <code>_key</code> yang diperlukan.',
  /** Action presented when the Portable Text field value is invalid, when child with key `{{key}}` has a missing or invalid `children` property */
  'inputs.portable-text.invalid-value.missing-or-invalid-children.action': 'Hapus blok',
  /** Text explaining that the Portable Text field value is invalid, when child with key `{{key}}` has a missing or invalid `children` property */
  'inputs.portable-text.invalid-value.missing-or-invalid-children.description':
    'Blok teks dengan kunci <code>{{key}}</code> memiliki properti `children` yang tidak valid atau hilang.',
  /** Action presented when the Portable Text field value is invalid, when child with key `{{key}}` has a missing or invalid `markDefs` property */
  'inputs.portable-text.invalid-value.missing-or-invalid-markdefs.action': 'Tambahkan properti',
  /** Text explaining that the Portable Text field value is invalid, when child with key `{{key}}` has a missing or invalid `markDefs` property */
  'inputs.portable-text.invalid-value.missing-or-invalid-markdefs.description':
    'Blok teks dengan kunci <code>{{key}}</code> memiliki properti `markDefs` yang tidak valid atau hilang.',
  /** Action presented when the Portable Text field value is invalid, when child with key `{{key}}` is missing a `_type` property  */
  'inputs.portable-text.invalid-value.missing-type.action': 'Hapus blok',
  /** Text explaining that the Portable Text field value is invalid, when child with key `{{key}}` is missing a `_type` property  */
  'inputs.portable-text.invalid-value.missing-type.description':
    'Blok dengan kunci <code>{{key}}</code> kehilangan nama tipe.',
  /** Action presented when the Portable Text field value is invalid, when block with key `{{key}}` contains a non-object child at index `{{index}}` */
  'inputs.portable-text.invalid-value.non-object-child.action': 'Hapus item',
  /** Text explaining that the Portable Text field value is invalid, when block with key `{{key}}` contains a non-object child at index `{{index}}` */
  'inputs.portable-text.invalid-value.non-object-child.description':
    'Anak pada indeks <code>{{index}}</code> dari blok dengan kunci <code>{{key}}</code> bukan objek.',
  /** Action presented when the Portable Text field value is invalid, when the Portable Text field is not an array, or the array is empty */
  'inputs.portable-text.invalid-value.not-an-array.action': 'Hapus nilai',
  /** Text explaining that the Portable Text field value is invalid, when the Portable Text field is not an array, or the array is empty */
  'inputs.portable-text.invalid-value.not-an-array.description':
    'Nilai harus berupa array dari blok Portable Text, atau tidak terdefinisi.',
  /** Action presented when the Portable Text field value is invalid, when child at `{{index}}` is not an object */
  'inputs.portable-text.invalid-value.not-an-object.action': 'Hapus item',
  /** Text explaining that the Portable Text field value is invalid, when child at `{{index}}` is not an object */
  'inputs.portable-text.invalid-value.not-an-object.description':
    'Item pada <code>{{index}}</code> bukan objek,.',
  /** Action presented when the Portable Text field value is invalid, when block with key `{{key}}` contains marks (`{{orphanedMarks}}`) that are not supported by the current schema */
  'inputs.portable-text.invalid-value.orphaned-marks.action': 'Hapus tanda yang tidak diizinkan',
  /** Text explaining that the Portable Text field value is invalid, when block with key `{{key}}` contains marks (`{{orphanedMarks}}`) that are not supported by the current schema */
  'inputs.portable-text.invalid-value.orphaned-marks.description':
    'Blok teks dengan kunci <code>{{key}}</code> mengandung tanda <code>({{orphanedMarks, list}})</code> yang tidak diizinkan oleh skema.',
  /** Title for the alert indicating that the Portable Text field has an invalid value */
  'inputs.portable-text.invalid-value.title': 'Nilai Portable Text tidak valid',
  /** Title of "bulleted" list type */
  'inputs.portable-text.list-type.bullet': 'Daftar Berpoin',
  /** Title of numbered list type */
  'inputs.portable-text.list-type.number': 'Daftar Bernomor',
  /** Title of the "h1" block style */
  'inputs.portable-text.style.h1': 'Judul 1',
  /** Title of the "h2" block style */
  'inputs.portable-text.style.h2': 'Judul 2',
  /** Title of the "h3" block style */
  'inputs.portable-text.style.h3': 'Judul 3',
  /** Title of the "h4" block style */
  'inputs.portable-text.style.h4': 'Judul 4',
  /** Title of the "h5" block style */
  'inputs.portable-text.style.h5': 'Judul 5',
  /** Title of the "h6" block style */
  'inputs.portable-text.style.h6': 'Judul 6',
  /** Title shown when multiple blocks of varying styles is selected */
  'inputs.portable-text.style.multiple': 'Beragam',
  /** Title of fallback when no style is given for a block */
  'inputs.portable-text.style.none': 'Tanpa gaya',
  /** Title of the "normal" block style */
  'inputs.portable-text.style.normal': 'Normal',
  /** Title of the "quote" block style */
  'inputs.portable-text.style.quote': 'Kutipan',
  /** Label for action to clear the current value of the reference field */
  'inputs.reference.action.clear': 'Bersihkan',
  /** Label for action to copy the current item (used within arrays) */
  'inputs.reference.action.copy': 'Salin',
  /** Label for action to create a new document from the reference input */
  'inputs.reference.action.create-new-document': 'Buat',
  /** Label for action to create a new document from the reference input, when there are multiple templates or document types to choose from */
  'inputs.reference.action.create-new-document-select': 'Buat…',
  /** Label for action to duplicate the current item to a new item (used within arrays) */
  'inputs.reference.action.duplicate': 'Duplikat',
  /** Label for action that opens the referenced document in a new tab */
  'inputs.reference.action.open-in-new-tab': 'Buka di tab baru',
  /** Label for action to remove the reference from an array */
  'inputs.reference.action.remove': 'Hapus',
  /** Label for action to replace the current value of the field */
  'inputs.reference.action.replace': 'Ganti',
  /** Label for action to cancel a previously initiated replace action  */
  'inputs.reference.action.replace-cancel': 'Batalkan penggantian',
  /** The cross-dataset reference field currently has a reference, but the feature has been disabled since it was created. This explains what can/cannot be done in its current state. */
  'inputs.reference.cross-dataset.feature-disabled-actions':
    'Anda masih dapat membersihkan referensi yang ada di bidang ini, tetapi tidak dapat diubah ke dokumen yang berbeda selama fitur ini dinonaktifkan.',
  /** A cross-dataset reference field exists but the feature has been disabled. A <DocumentationLink> component is available. */
  'inputs.reference.cross-dataset.feature-disabled-description':
    'Fitur ini telah dinonaktifkan. Baca cara mengaktifkannya di <DocumentationLink>dokumentasi</DocumentationLink>.',
  /** Title for a warning telling the user that the current project does not have the "cross dataset references" feature */
  'inputs.reference.cross-dataset.feature-unavailable-title':
    'Fitur tidak tersedia: Referensi lintas dataset',
  /** The cross-dataset reference points to a document with an invalid type  */
  'inputs.reference.cross-dataset.invalid-type':
    'Dokumen yang dirujuk adalah tipe yang tidak valid ({{typeName}}) <JsonValue/>',
  /** The referenced document will open in a new tab (due to external studio) */
  'inputs.reference.document-opens-in-new-tab': 'Dokumen ini akan terbuka di tab baru',
  /** Error title for when the document is unavailable (for any possible reason) */
  'inputs.reference.error.document-unavailable-title': 'Dokumen tidak tersedia',
  /** Error title for when the referenced document failed to be loaded */
  'inputs.reference.error.failed-to-load-document-title': 'Gagal memuat dokumen yang dirujuk',
  /** Error title for when the reference search returned a document that is not an allowed type for the field */
  'inputs.reference.error.invalid-search-result-type-title':
    'Pencarian mengembalikan tipe yang tidak valid untuk referensi ini: "{{returnedType}}"',
  /** Error description for when the document referenced is not one of the types declared as allowed target types in schema */
  'inputs.reference.error.invalid-type-description':
    'Dokumen yang dirujuk (<code>{{documentId}}</code>) adalah tipe <code>{{actualType}}</code>. Menurut skema, dokumen yang dirujuk hanya bisa berupa tipe <AllowedTypes/>.',
  /** Error title for when the document referenced is not one of the types declared as allowed target types in schema */
  'inputs.reference.error.invalid-type-title': 'Dokumen dengan tipe tidak valid',
  /** Error description for when the user does not have permissions to read the referenced document */
  'inputs.reference.error.missing-read-permissions-description':
    'Dokumen yang dirujuk tidak dapat diakses karena izin yang tidak mencukupi',
  /** Error title for when the user does not have permissions to read the referenced document */
  'inputs.reference.error.missing-read-permissions-title': 'Izin tidak mencukupi',
  /** Error description for when the current reference value points to a document that does not exist (on weak references) */
  'inputs.reference.error.nonexistent-document-description':
    'Dokumen yang dirujuk tidak ada (ID: <code>{{documentId}}</code>). Anda dapat menghapus referensi atau menggantinya dengan dokumen lain.',
  /** Error title for when the current reference value points to a document that does not exist (on weak references) */
  'inputs.reference.error.nonexistent-document-title': 'Tidak ditemukan',
  /** Label for button that clears the reference when it points to a document that does not exist (on weak references) */
  'inputs.reference.error.nonexistent-document.clear-button-label': 'Bersihkan',
  /** Error title for when the search for a reference failed. Note that the message sent by the backend may not be localized. */
  'inputs.reference.error.search-failed-title': 'Pencarian referensi gagal',
  /** Label for when the GDR points to an invalid type  */
  'inputs.reference.global.invalid-type':
    'Dokumen yang dirujuk adalah tipe tidak valid ({{typeName}})',
  /** Alternative text for the image shown in cross-dataset reference input */
  'inputs.reference.image-preview-alt-text': 'Pratinjau gambar dari dokumen yang dirujuk',
  /** Description for alert shown when a reference in a live-edit document is marked as being weak, the referenced document exists, AND the reference is supposed to be have been strengthened on publish */
  'inputs.reference.incomplete-reference.finalize-action-description':
    '<strong>{{referencedDocument}}</strong> telah dipublikasikan dan referensi ini sekarang harus diselesaikan.',
  /** Title for alert shown when a reference in a live-edit document is marked as being weak, the referenced document exists, AND the reference is supposed to be have been strengthened on publish */
  'inputs.reference.incomplete-reference.finalize-action-title': 'Selesaikan referensi',
  /** Description for alert shown when a reference in a live-edit document points to a document that exists and has been published, but the reference is still marked as weak */
  'inputs.reference.incomplete-reference.strengthen-action-description':
    '<strong>{{referencedDocument}}</strong> telah dipublikasikan dan referensi ini sekarang harus diubah menjadi referensi kuat.',
  /** Title for alert shown when a reference in a live-edit document points to a document that exists and has been published, but the reference is still marked as weak */
  'inputs.reference.incomplete-reference.strengthen-action-title': 'Ubah menjadi referensi kuat',
  /** Label for button that triggers the action that strengthen a reference */
  'inputs.reference.incomplete-reference.strengthen-button-label': 'Ubah menjadi referensi kuat',
  /** Label for button that triggers a retry attempt for reference metadata  */
  'inputs.reference.metadata-error.retry-button-label': 'Coba Lagi',
  /** Title for alert shown when reference metadata fails to be loaded */
  'inputs.reference.metadata-error.title': 'Tidak dapat memuat metadata referensi',
  /** Message shown when no documents were found that matched the given search string */
  'inputs.reference.no-results-for-query':
    'Tidak ada hasil untuk <strong>“{{searchTerm}}”</strong>',
  /** Text for tooltip showing when a document was edited, using relative time (eg "how long ago was it edited?") */
  'inputs.reference.preview.edited-at-time': 'Diedit <RelativeTime/>',
  /** Accessibility label for icon indicating that document does _not_ have any unpublished changes */
  'inputs.reference.preview.has-no-unpublished-changes-aria-label':
    'Tidak ada suntingan yang belum dipublikasikan',
  /** Accessibility label for icon indicating that document has unpublished changes */
  'inputs.reference.preview.has-unpublished-changes-aria-label': 'Disunting',
  /** Accessibility label for icon indicating that document does _not_ have a published version */
  'inputs.reference.preview.is-not-published-aria-label': 'Belum dipublikasikan',
  /** Accessibility label for icon indicating that document has a published version */
  'inputs.reference.preview.is-published-aria-label': 'Dipublikasikan',
  /** Text for tooltip indicating that a document has no unpublished edits */
  'inputs.reference.preview.no-unpublished-edits': 'Tidak ada suntingan yang belum dipublikasikan',
  /** Text for tooltip indicating that a document has not yet been published */
  'inputs.reference.preview.not-published': 'Belum dipublikasikan',
  /** Text for tooltip showing when a document was published, using relative time (eg "how long ago was it published?") */
  'inputs.reference.preview.published-at-time': 'Diterbitkan <RelativeTime/>',
  /** The referenced document no longer exist and might have been deleted (for weak references) */
  'inputs.reference.referenced-document-does-not-exist':
    'Dokumen yang dirujuk tidak lagi ada dan mungkin telah dihapus (ID dokumen: <code>{{documentId}}</code>).',
  /** The referenced document could not be displayed to the user because of insufficient permissions */
  'inputs.reference.referenced-document-insufficient-permissions':
    'Dokumen yang dirujuk tidak dapat diakses karena izin yang tidak mencukupi',
  /** Label for when the reference input is resolving the initial value for an item */
  'inputs.reference.resolving-initial-value': 'Menyelesaikan nilai awal…',
  /** Placeholder shown in a reference input with no current value */
  'inputs.reference.search-placeholder': 'Ketik untuk mencari',
  /** Explanation of the consequences of leaving the reference as strong instead of weak */
  'inputs.reference.strength-mismatch.is-strong-consquences':
    'Tidak akan mungkin untuk menghapus dokumen referensi tanpa terlebih dahulu menghapus referensi ini atau mengubahnya menjadi lemah.',
  /** Description for alert shown when a reference is supposed to be weak, but the actual value is strong */
  'inputs.reference.strength-mismatch.is-strong-description':
    'Referensi ini <em>kuat</em>, tetapi menurut skema saat ini seharusnya <em>lemah</em>.',
  /** Explanation of the consequences of leaving the reference as weak instead of strong */
  'inputs.reference.strength-mismatch.is-weak-consquences':
    'Ini memungkinkan penghapusan dokumen yang dirujuk tanpa terlebih dahulu menghapus referensi ini, meninggalkan bidang ini merujuk pada dokumen yang tidak ada.',
  /** Description for alert shown when a reference is supposed to be strong, but the actual value is weak */
  'inputs.reference.strength-mismatch.is-weak-description':
    'Referensi ini <em>lemah</em>, tetapi menurut skema saat ini seharusnya <em>kuat</em>.',
  /** Label for button that triggers the action that strengthens a reference on strength mismatch */
  'inputs.reference.strength-mismatch.strengthen-button-label': 'Ubah menjadi referensi kuat',
  /** Title for alert shown when a reference is supposed to be weak/strong, but the actual value is the opposite of what it is supposed to be */
  'inputs.reference.strength-mismatch.title': 'Ketidakcocokan kekuatan referensi',
  /** Label for button that triggers the action that weakens a reference on strength mismatch */
  'inputs.reference.strength-mismatch.weaken-button-label': 'Ubah menjadi referensi lemah',
  /** Action message for generating the slug */
  'inputs.slug.action.generate': 'Hasilkan',
  /** Loading message for when the input is actively generating a slug */
  'inputs.slug.action.generating': 'Menghasilkan…',
  /** Error message for when the source to generate a slug from is missing */
  'inputs.slug.error.missing-source':
    'Sumber hilang. Periksa sumber pada tipe {{schemaType}} dalam skema',
  /** Placeholder for an empty tag input */
  'inputs.tags.placeholder': 'Masukkan tag dan tekan ENTER…',
  /** Placeholder for an empty tag input on touch devices */
  'inputs.tags.placeholder_touch': 'Masukkan tag…',
  /** Convert to `{{targetType}}` */
  'inputs.untyped-value.convert-button.text': 'Ubah menjadi {{targetType}}',
  /** Encountered an object value without a <code>_type</code> property. */
  'inputs.untyped-value.description': 'Menemukan nilai objek tanpa properti <code>_type</code>.',
  /** Either remove the <code>name</code> property of the object declaration, or set <code>_type</code> property on items. */
  'inputs.untyped-value.details.description':
    'Hapus properti <code>name</code> dari deklarasi objek, atau atur properti <code>_type</code> pada item.',
  /** Current value (<code>object</code>): */
  'inputs.untyped-value.details.json-dump-prefix': 'Nilai saat ini (<code>objek</code>):',
  /** The following types are valid here according to schema: */
  'inputs.untyped-value.details.multi-type-description':
    'Tipe berikut ini valid di sini menurut skema:',
  /** Developer info */
  'inputs.untyped-value.details.title': 'Info Pengembang',
  /** Property value missing <code>_type</code> */
  'inputs.untyped-value.title': 'Nilai properti hilang <code>_type</code>',
  /** Unset value */
  'inputs.untyped-value.unset-item-button.text': 'Hapus nilai',

  /** The fallback explanation if no context is provided */
  'insufficient-permissions-message.not-authorized-explanation':
    'Anda tidak memiliki izin untuk mengakses fitur ini.',
  /** The explanation when unable to create any document at all */
  'insufficient-permissions-message.not-authorized-explanation_create-any-document':
    'Anda tidak memiliki izin untuk membuat dokumen.',
  /** The explanation when unable to create a particular document */
  'insufficient-permissions-message.not-authorized-explanation_create-document':
    'Anda tidak memiliki izin untuk membuat dokumen ini.',
  /** The explanation when unable to create a particular type of document */
  'insufficient-permissions-message.not-authorized-explanation_create-document-type':
    'Anda tidak memiliki izin untuk membuat jenis dokumen ini.',
  /** The explanation when unable to create a new reference in a document */
  'insufficient-permissions-message.not-authorized-explanation_create-new-reference':
    'Anda tidak memiliki izin untuk membuat referensi baru.',
  /** The explanation when unable to delete a particular document */
  'insufficient-permissions-message.not-authorized-explanation_delete-document':
    'Anda tidak memiliki izin untuk menghapus dokumen ini.',
  /** The explanation when unable to delete a schedule on scheduled publishing */
  'insufficient-permissions-message.not-authorized-explanation_delete-schedules':
    'Anda tidak memiliki izin untuk menghapus jadwal.',
  /** The explanation when unable to discard changes in a particular document */
  'insufficient-permissions-message.not-authorized-explanation_discard-changes':
    'Anda tidak memiliki izin untuk membuang perubahan dalam dokumen ini.',
  /** The explanation when unable to duplicate a particular document */
  'insufficient-permissions-message.not-authorized-explanation_duplicate-document':
    'Anda tidak memiliki izin untuk menduplikasi dokumen ini.',
  /** The explanation when unable to edit a schedule on scheduled publishing */
  'insufficient-permissions-message.not-authorized-explanation_edit-schedules':
    'Anda tidak memiliki izin untuk mengedit jadwal.',
  /** The explanation when unable to execute a schedule on scheduled publishing */
  'insufficient-permissions-message.not-authorized-explanation_execute-schedules':
    'Anda tidak memiliki izin untuk menjalankan jadwal.',
  /** The explanation when unable to publish a particular document */
  'insufficient-permissions-message.not-authorized-explanation_publish-document':
    'Anda tidak memiliki izin untuk menerbitkan dokumen ini.',
  /** The explanation when unable to unpublish a particular document */
  'insufficient-permissions-message.not-authorized-explanation_unpublish-document':
    'Anda tidak memiliki izin untuk menarik penerbitan dokumen ini.',
  /** Appears after the not-authorized message. Lists the current roles. */
  'insufficient-permissions-message.roles': 'Peran Anda: <Roles/>',
  /** The title for the insufficient permissions message component */
  'insufficient-permissions-message.title': 'Izin tidak cukup',

  /** Unexpected error: `{{error}}` */
  'member-field-error.unexpected-error': 'Kesalahan tak terduga: {{error}}',

  /** Button label for "Create new document" button */
  'new-document.button': 'Buat',
  /**
   * Tooltip message displayed when hovering/activating the "Create new document" action,
   * when there are templates/types available for creation
   */
  'new-document.create-new-document-label': 'Dokumen baru…',
  /** Tooltip message for add document button when the selected perspective is published  */
  'new-document.disabled-published.tooltip': 'Anda tidak dapat membuat dokumen terbitan baru',
  /** Tooltip message for add document button when the selected perspective is for inactive release */
  'new-document.disabled-release.tooltip': 'Anda tidak dapat menambahkan dokumen ke rilis ini',
  /** Placeholder for the "filter" input within the new document menu */
  'new-document.filter-placeholder': 'Cari jenis dokumen',
  /** Loading indicator text within the new document menu */
  'new-document.loading': 'Memuat…',
  /** Accessibility label for the list displaying options in the new document menu */
  'new-document.new-document-aria-label': 'Dokumen baru',
  /** Message for when there are no document type options in the new document menu */
  'new-document.no-document-types-found': 'Tidak ada jenis dokumen yang ditemukan',
  /**
   * Tooltip message displayed when hovering/activating the "Create new document" action,
   * when there are no templates/types to create from
   */
  'new-document.no-document-types-label': 'Tidak ada jenis dokumen',
  /** Message for when no results are found for a specific search query in the new document menu */
  'new-document.no-results': 'Tidak ada hasil untuk <strong>{{searchQuery}}</strong>',
  /** Aria label for the button that opens the "Create new document" popover/dialog */
  'new-document.open-dialog-aria-label': 'Buat dokumen baru',
  /** Title for "Create new document" dialog */
  'new-document.title': 'Buat dokumen baru',

  /** Label for button that will make the browser reload when users' studio version is out-of-date */
  'package-version.new-package-available.reload-button': 'Tekan untuk memuat ulang',
  /** Title of the alert for studio users when packages in their studio are out-of-date */
  'package-version.new-package-available.title': 'Sanity Studio siap untuk diperbarui!',

  /** Label for action to invite members to the current studio project */
  'presence.action.manage-members': 'Undang anggota',
  /** Accessibility label for presence menu button */
  'presence.aria-label': 'Kehadiran global',
  /** Message description for when no one else is currently present */
  'presence.no-one-else-description': 'Undang orang ke proyek untuk melihat status online mereka.',
  /** Message title for when no one else is currently present */
  'presence.no-one-else-title': 'Tidak ada orang lain di sini',
  /** Message for when a user is not in a document (displayed in the global presence menu) */
  'presence.not-in-a-document': 'Tidak dalam dokumen',
  /** Tooltip content text for presence menu button */
  'presence.tooltip-content': 'Siapa yang ada di sini',

  /** Fallback title shown when a preview does not provide a title */
  'preview.default.title-fallback': 'Tanpa judul',
  /** Fallback preview value for types that have "no value" (eg null, undefined) */
  'preview.fallback.no-value': '(tidak ada nilai)',
  /** Alternative text for image being shown while image is being uploaded, in previews */
  'preview.image.file-is-being-uploaded.alt-text': 'Gambar yang sedang diunggah',

  /* Relative time, just now */
  'relative-time.just-now': 'baru saja',

  /** Action message to add document to new release */
  'release.action.add-to-new-release': 'Tambahkan ke rilis',
  /** Action message to add document to release */
  'release.action.add-to-release': 'Tambahkan ke {{title}}',
  /** Action message for when document is already in release  */
  'release.action.already-in-release': 'Sudah dalam rilis {{title}}',
  /** Action message for when you click to view all versions you can copy the current document to */
  'release.action.copy-to': 'Salin versi ke',
  /** Action message for creating new releases */
  'release.action.create-new': 'Rilis baru',
  /** Action message for when document is already in release  */
  'release.action.discard-version': 'Buang versi',
  /** Description for toast when version discarding failed */
  'release.action.discard-version.failure': 'Gagal membuang versi',
  /** Action message for when a new release is created off an existing version, draft or published document */
  'release.action.new-release': 'Rilis Baru',
  /** Tooltip message for not having permissions for creating new releases */
  'release.action.permission.error': 'Anda tidak memiliki izin untuk melakukan tindakan ini',
  /** Error message for when a version is set to be unpublished */
  'release.action.unpublish-version.failure':
    'Gagal mengatur versi untuk tidak dipublikasikan pada rilis',
  /** Action message for when a version is set to be unpublished successfully */
  'release.action.unpublish-version.success':
    'Berhasil menetapkan <strong>{{title}}</strong> untuk tidak dipublikasikan pada rilis',
  /** Action message for when the view release is pressed */
  'release.action.view-release': 'Lihat rilis',
  /** Label for banner when release is scheduled */
  'release.banner.scheduled-for-publishing-on': 'Dijadwalkan untuk dipublikasikan pada {{date}}',
  /** Label for Draft chip in document header */
  'release.chip.draft': 'Draf',
  /** Label for Draft chip in global header */
  'release.chip.global.drafts': 'Draf',
  /** Label for Published chip in document header */
  'release.chip.published': 'Diterbitkan',
  /** Label for tooltip in chip when document is in an archived release */
  'release.chip.tooltip.archived': 'Rilis ini diarsipkan dan tidak dapat diedit.',
  /** Label for tooltip in chip with the created date */
  'release.chip.tooltip.created-date': 'Dibuat {{date}}',
  /** Label for tooltip in draft chip when it's a live edit document */
  'release.chip.tooltip.draft-disabled.live-edit':
    'Dokumen ini dalam mode edit langsung, draf dinonaktifkan',
  /** Label for tooltip in chip with the lasted edited date */
  'release.chip.tooltip.edited-date': 'Diedit {{date}}',
  /** Label for tooltip in chip when document is intended for a future release that hasn't been scheduled */
  'release.chip.tooltip.intended-for-date': 'Ditujukan untuk {{date}}',
  /** Label for tooltip in chip when there is no recent draft edits */
  'release.chip.tooltip.no-edits': 'Tidak ada suntingan',
  /** Label for tooltip in chip when document isn't published */
  'release.chip.tooltip.not-published': 'Tidak diterbitkan',
  /** Label for tooltip in chip with the published date */
  'release.chip.tooltip.published-date': 'Diterbitkan {{date}}',
  /** Label for tooltip in chip when document is in a release that has been scheduled */
  'release.chip.tooltip.scheduled-for-date': 'Dijadwalkan untuk {{date}}',
  /** Label for tooltip in scheduled chip without a known date */
  'release.chip.tooltip.unknown-date': 'Tanggal tidak diketahui',
  /** Label for tooltip on deleted release */
  'release.deleted-tooltip': 'Rilis ini telah dihapus',
  /** Title for copying version to a new release dialog */
  'release.dialog.copy-to-release.title': 'Salin versi ke rilis baru',
  /** Title for action create a release */
  'release.dialog.create.confirm': 'Buat rilis',
  /** Title for creating releases dialog */
  'release.dialog.create.title': 'Rilis baru',
  /** Label for description in tooltip to explain release types */
  'release.dialog.tooltip.description':
    'Waktu rilis yang dimaksud digunakan untuk membuat pratinjau yang lebih baik dan petunjuk tentang apakah dokumen bertentangan.',
  /** Label for noting that a release time is not final */
  'release.dialog.tooltip.note': 'Anda selalu dapat mengubahnya nanti.',
  /** Title for tooltip to explain release time */
  'release.dialog.tooltip.title': 'Waktu rilis yang diperkirakan',
  /** The placeholder text when the release doesn't have a description */
  'release.form.placeholder-describe-release': 'Jelaskan rilis...',
  /** Tooltip for button to hide release visibility */
  'release.layer.hide': 'Sembunyikan rilis',
  /** Label for draft perspective in navbar */
  'release.navbar.drafts': 'Draf',
  /** Label for published releases in navbar */
  'release.navbar.published': 'Diterbitkan',
  /** Tooltip for releases navigation in navbar */
  'release.navbar.tooltip': 'Rilis',
  /** The placeholder text when the release doesn't have a title */
  'release.placeholder-untitled-release': 'Rilis Tanpa Judul',
  /** The toast description that will be shown when the user has a release perspective which is now archived */
  'release.toast.archived-release.description': 'Rilis ini telah dilepas',
  /** The toast title that will be shown when the user has a release perspective which is now archived */
  'release.toast.archived-release.title': "Rilis '{{title}}' telah diarsipkan",
  /** The toast title that will be shown the creating a release fails */
  'release.toast.create-release-error.title': 'Gagal membuat rilis',
  /**The toast title that will be shown when the user has a release perspective which is now deleted */
  'release.toast.not-found-release.title': "Rilis '{{title}}' tidak dapat ditemukan",
  /** The toast description that will be shown when the user has a release perspective which is now published */
  'release.toast.published-release.description': 'Rilis ini telah dilepas',
  /** The toast title that will be shown when the user has a release perspective which is now deleted */
  'release.toast.published-release.title': "Rilis '{{title}}' telah diterbitkan",
  /** Label for when a version of a document has already been added to the release */
  'release.tooltip.already-added': 'Versi dokumen ini telah ditambahkan',
  /** Label for when a release is scheduled / scheduling and a user can't add a document version to it */
  'release.tooltip.locked':
    'Rilis ini telah dijadwalkan. Batalkan penjadwalannya untuk menambahkan lebih banyak dokumen.',
  /** Label for the release type 'as soon as possible' */
  'release.type.asap': 'Segera',
  /** Label for the release type 'at time', meaning it's a release with a scheduled date */
  'release.type.scheduled': 'Pada waktu',
  /** Label for the release type 'undecided' */
  'release.type.undecided': 'Belum diputuskan',
  /** Tooltip for the dropdown to show all versions of document */
  'release.version-list.tooltip': 'Lihat semua versi dokumen',

  /** Accessibility label to open search action when the search would go fullscreen (eg on narrower screens) */
  'search.action-open-aria-label': 'Buka pencarian',
  /** Action label for adding a search filter */
  'search.action.add-filter': 'Tambahkan filter',
  /** Action label for clearing search filters */
  'search.action.clear-filters': 'Bersihkan filter',
  /** Label for action to clear recent searches */
  'search.action.clear-recent-searches': 'Bersihkan pencarian terbaru',
  /** Accessibility label for action to clear all currently applied document type filters */
  'search.action.clear-type-filters-aria-label': 'Bersihkan filter yang dicentang',
  /** Label for action to clear all currently applied document type filters */
  'search.action.clear-type-filters-label': 'Bersihkan',
  /** Accessibility label for when the search is full screen (on narrow screens) and you want to close the search */
  'search.action.close-search-aria-label': 'Tutup pencarian',
  /** Accessibility label for filtering by document type */
  'search.action.filter-by-document-type-aria-label': 'Filter berdasarkan tipe dokumen',
  /** Accessibility action label for removing an already applied search filter */
  'search.action.remove-filter-aria-label': 'Hapus filter',
  /**
   * Text displayed when either no document type(s) have been selected, or we need a fallback,
   * eg "Search for all types".
   */
  'search.action.search-all-types': 'Cari semua dokumen',
  /**
   * Text displayed when we are able to determine one or more document types that will be used for
   * searching, and can fit within the space assigned by the design.
   */
  'search.action.search-specific-types': 'Cari untuk {{types, list}}',
  /** Dialog title for action to select an asset of unknown type */
  'search.action.select-asset': 'Pilih aset',
  /** Dialog title for action to select a file asset */
  'search.action.select-asset_file': 'Pilih file',
  /** Dialog title for action to select an image asset */
  'search.action.select-asset_image': 'Pilih gambar',
  /** Accessibility label for when the search is full screen (on narrow screens) and you want to hide filters */
  'search.action.toggle-filters-aria-label_hide': 'Sembunyikan filter',
  /** Accessibility label for when the search is full screen (on narrow screens) and you want to show filters */
  'search.action.toggle-filters-aria-label_show': 'Tampilkan filter',
  /** Label for when the search is full screen (on narrow screens) and you want to hide filters */
  'search.action.toggle-filters-label_hide': 'Sembunyikan filter',
  /** Label for when the search is full screen (on narrow screens) and you want to show filters */
  'search.action.toggle-filters-label_show': 'Tampilkan filter',
  /** Tooltip text for the global search button */
  'search.button.tooltip': 'Cari',
  /**
   * A list of provided types (use `list` formatter preferably).
   */
  'search.document-type-list': '{{types, list}}',
  /**
   * In the context of a list of document types - no filtering selection has been done,
   * thus the default is "all types".
   */
  'search.document-type-list-all-types': 'Semua jenis',
  /** Accessibility label for list displaying the available document types */
  'search.document-types-aria-label': 'Jenis dokumen',
  /** Label for when no document types matching the filter are found */
  'search.document-types-no-matches-found': 'Tidak ada yang cocok untuk {{filter}}',
  /** Description for error when a filter cannot be displayed, describes that you should check the schema */
  'search.error.display-filter-description':
    'Ini mungkin menunjukkan opsi yang tidak valid yang ditentukan dalam skema Anda.',
  /** Title for error when a filter cannot be displayed (mainly a developer-oriented error) */
  'search.error.display-filter-title': 'Terjadi kesalahan saat menampilkan filter ini.',
  /** Description for error when no valid asset source is found, describes that you should check the the current studio config */
  'search.error.no-valid-asset-source-check-config-description':
    'Harap pastikan itu diaktifkan dalam file konfigurasi studio Anda.',
  /** Description for error when no valid asset source is found, describes that only the default asset is supported */
  'search.error.no-valid-asset-source-only-default-description':
    'Saat ini, hanya sumber aset default yang didukung.',
  /** Title for error when no valid asset sources found */
  'search.error.no-valid-asset-source-title': 'Tidak ada sumber aset yang valid ditemukan.',
  /** Helpful description for when search returned an error that we are not able to describe in detail */
  'search.error.unspecified-error-help-description': 'Silakan coba lagi atau periksa koneksi Anda',
  /** Title label for when search returned an error that we are not able to describe in detail */
  'search.error.unspecified-error-title': 'Ada yang salah saat mencari',
  /**
   * Label for "All fields", a label that appears above the list of available fields when filtering.
   * If one or more document type has been chosen as filter, this label is replaced with a group of
   * fields per selected document type
   */
  'search.filter-all-fields-header': 'Semua bidang',
  /** Label for the action of changing from one file to a different file in asset search filter */
  'search.filter-asset-change_file': 'Ganti file',
  /** Label for the action of changing from one image to a different image in asset search filter */
  'search.filter-asset-change_image': 'Ganti gambar',
  /** Label for the action of clearing the currently selected asset in an image/file filter */
  'search.filter-asset-clear': 'Bersihkan',
  /** Label for the action of selecting a file in asset search filter */
  'search.filter-asset-select_file': 'Pilih file',
  /** Label for the action of selecting an image in asset search filter */
  'search.filter-asset-select_image': 'Pilih gambar',
  /** Label for boolean filter - false */
  'search.filter-boolean-false': 'Salah',
  /** Label for boolean filter - true */
  'search.filter-boolean-true': 'Benar',
  /** Accessibility label for list that lets you filter fields by title, when adding a new filter in search */
  'search.filter-by-title-aria-label': 'Filter berdasarkan judul',
  /** Accessibility label for date filter input */
  'search.filter-date-aria-label': 'Tanggal',
  /** Accessibility label for selecting end date on the date range search filter */
  'search.filter-date-range-end-date-aria-label': 'Tanggal akhir',
  /** Accessibility label for selecting start date on the date range search filter */
  'search.filter-date-range-start-date-aria-label': 'Tanggal mulai',
  /**
   * Label for "Days"/"Months"/"Years" when selecting it as unit in "X days ago" search filter.
   * Capitalized, as it would be listed in a dropdown.
   */
  'search.filter-date-unit_days': 'Hari',
  'search.filter-date-unit_months': 'Bulan',
  'search.filter-date-unit_years': 'Tahun',
  /** Accessibility label for selecting the unit (day/month/year) when adding "X days ago" search filter */
  'search.filter-date-unit-aria-label': 'Pilih satuan',
  /** Accessibility label for the input value (days/months/years) when adding "X days ago" search filter */
  'search.filter-date-value-aria-label': 'Nilai satuan',
  /** Label for "field description" shown in tooltip when navigating list of possible fields to filter */
  'search.filter-field-tooltip-description': 'Deskripsi bidang',
  /** Label for "field name" shown in tooltip when navigating list of possible fields to filter */
  'search.filter-field-tooltip-name': 'Nama bidang',
  /** Label for "Used in document types", a list of the document types a field appears in. Shown in tooltip when navigating list of possible fields to filter */
  'search.filter-field-tooltip-used-in-document-types': 'Digunakan dalam tipe dokumen',
  /** Label for when no fields/filters are found for the given term */
  'search.filter-no-matches-found': 'Tidak ada kecocokan untuk {{filter}}',
  /** Placeholder value for maximum numeric value filter */
  'search.filter-number-max-value-placeholder': 'Nilai maksimal',
  /** Placeholder value for minimum numeric value filter */
  'search.filter-number-min-value-placeholder': 'Nilai minimal',
  /** Placeholder value for the number filter */
  'search.filter-number-value-placeholder': 'Nilai',
  /** Placeholder for the "Filter" input, when narrowing possible fields/filters */
  'search.filter-placeholder': 'Filter',
  /** Label for the action of clearing the currently selected document in a reference filter */
  'search.filter-reference-clear': 'Bersihkan',
  /**
   * Label for "shared fields", a label that appears above a list of fields that all filtered types
   * have in common, when adding a new filter. For instance, if "book" and "employee" both have a
   * "title" field, this field would be listed under "shared fields".
   * */
  'search.filter-shared-fields-header': 'Bidang bersama',
  /** Placeholder value for the string filter */
  'search.filter-string-value-placeholder': 'Nilai',
  /** Label/placeholder prompting user to select one of the predefined, allowed values for a string field */
  'search.filter-string-value-select-predefined-value': 'Pilih…',
  /** Accessibility label for the "Filters" list, that is shown when using "Add filter" in search (plural) */
  'search.filters-aria-label_other': 'Filter',
  /** Label for instructions on how to use the search - displayed when no recent searches are available */
  'search.instructions': 'Gunakan <ControlsIcon/> untuk menyempurnakan pencarian Anda',
  /** Helpful description for when no search results are found */
  'search.no-results-help-description': 'Coba kata kunci lain atau sesuaikan filter Anda',
  /** Title label for when no search results are found */
  'search.no-results-title': 'Tidak ada hasil yang ditemukan',
  'search.operator.array-count-equal.description_other':
    '<Field/> <Operator>memiliki</Operator> <Value>{{count}} item</Value>',
  'search.operator.array-count-equal.name': 'jumlahnya adalah',
  'search.operator.array-count-gt.description_other':
    '<Field/> <Operator>memiliki ></Operator> <Value>{{count}} item</Value>',
  'search.operator.array-count-gt.name': 'jumlahnya lebih dari',
  'search.operator.array-count-gte.description_other':
    '<Field/> <Operator>memiliki ≥</Operator> <Value>{{count}} item</Value>',
  'search.operator.array-count-gte.name': 'jumlahnya lebih dari atau sama dengan',
  'search.operator.array-count-lt.description_other':
    '<Field/> <Operator>memiliki <</Operator> <Value>{{count}} item</Value>',
  'search.operator.array-count-lt.name': 'jumlahnya kurang dari',
  'search.operator.array-count-lte.description_other':
    '<Field/> <Operator>memiliki ≤</Operator> <Value>{{count}} item</Value>',
  'search.operator.array-count-lte.name': 'jumlahnya kurang dari atau sama dengan',
  'search.operator.array-count-not-equal.description_other':
    '<Field/> <Operator>tidak memiliki</Operator> <Value>{{count}} item</Value>',
  'search.operator.array-count-not-equal.name': 'jumlahnya bukan',
  /**
   * Array should have a count within the range of given filter values.
   * Gets passed `{{from}}` and `{{to}}` values.
   **/
  'search.operator.array-count-range.description':
    '<Field/> <Operator>memiliki antara</Operator> <Value>{{from}} → {{to}} item</Value>',
  'search.operator.array-count-range.name': 'jumlahnya antara',
  /* Array should include the given value */
  'search.operator.array-list-includes.description':
    '<Field/> <Operator>termasuk</Operator> <Value>{{value}}</Value>',
  'search.operator.array-list-includes.name': 'termasuk',
  /* Array should not include the given value */
  'search.operator.array-list-not-includes.description':
    '<Field/> <Operator>tidak termasuk</Operator> <Value>{{value}}</Value>',
  'search.operator.array-list-not-includes.name': 'tidak termasuk',
  /* Array should include the given reference */
  'search.operator.array-reference-includes.description':
    '<Field/> <Operator>termasuk</Operator> <Value>{{value}}</Value>',
  'search.operator.array-reference-includes.name': 'termasuk',
  /* Array should not include the given reference */
  'search.operator.array-reference-not-includes.description':
    '<Field/> <Operator>tidak termasuk</Operator> <Value>{{value}}</Value>',
  'search.operator.array-reference-not-includes.name': 'tidak termasuk',
  /* Asset (file) should be the selected asset */
  'search.operator.asset-file-equal.description':
    '<Field/> <Operator>adalah</Operator> <Value>{{value}}</Value>',
  'search.operator.asset-file-equal.name': 'adalah',
  /* Asset (file) should not be the selected asset */
  'search.operator.asset-file-not-equal.description':
    '<Field/> <Operator>bukan</Operator> <Value>{{value}}</Value>',
  'search.operator.asset-file-not-equal.name': 'bukan',
  /* Asset (image) should be the selected asset */
  'search.operator.asset-image-equal.description':
    '<Field/> <Operator>adalah</Operator> <Value>{{value}}</Value>',
  'search.operator.asset-image-equal.name': 'adalah',
  /* Asset (image) should not be the selected asset */
  'search.operator.asset-image-not-equal.description':
    '<Field/> <Operator>bukan</Operator> <Value>{{value}}</Value>',
  'search.operator.asset-image-not-equal.name': 'bukan',
  /**
   * Boolean value should be the given filter value (true/false).
   * Context passed is `true` and `false`, allowing for more specific translations:
   * - `search.operator.boolean-equal.description_true`
   * - `search.operator.boolean-equal.description_false`
   */
  'search.operator.boolean-equal.description':
    '<Field/> <Operator>adalah</Operator> <Value>{{value}}</Value>',
  'search.operator.boolean-equal.name': 'adalah',
  /* Date should be after (later than) given filter value */
  'search.operator.date-after.description':
    '<Field/> <Operator>setelah</Operator> <Value>{{value}}</Value>',
  'search.operator.date-after.name': 'setelah',
  /* Date should be before (earlier than) given filter value */
  'search.operator.date-before.description':
    '<Field/> <Operator>sebelum</Operator> <Value>{{value}}</Value>',
  'search.operator.date-before.name': 'sebelum',
  /* Date should be the given filter value */
  'search.operator.date-equal.description':
    '<Field/> <Operator>adalah</Operator> <Value>{{value}}</Value>',
  'search.operator.date-equal.name': 'adalah',
  /* Date should be within the given filter value range (eg "within the last X days") */
  'search.operator.date-last.description':
    '<Field/> <Operator>adalah dalam</Operator> <Value>{{value}}</Value>',
  'search.operator.date-last.name': 'terakhir',
  /* Date should not be the given filter value */
  'search.operator.date-not-equal.description':
    '<Field/> <Operator>bukan</Operator> <Value>{{value}}</Value>',
  'search.operator.date-not-equal.name': 'bukan',
  /* Date should be within the range of given filter values */
  'search.operator.date-range.description': '<Field/> <Operator>adalah antara</Operator> <Value/>',
  'search.operator.date-range.name': 'adalah antara',
  /* Date and time should be after (later than) given filter value */
  'search.operator.date-time-after.description':
    '<Field/> <Operator>setelah</Operator> <Value>{{value}}</Value>',
  'search.operator.date-time-after.name': 'setelah',
  /* Date and time should be before (earlier than) given filter value */
  'search.operator.date-time-before.description':
    '<Field/> <Operator>sebelum</Operator> <Value>{{value}}</Value>',
  'search.operator.date-time-before.name': 'sebelum',
  /* Date and time should be the given filter value */
  'search.operator.date-time-equal.description':
    '<Field/> <Operator>adalah</Operator> <Value>{{value}}</Value>',
  'search.operator.date-time-equal.name': 'adalah',
  /* Date and time should be within the given filter value range (eg "within the last X days") */
  'search.operator.date-time-last.description':
    '<Field/> <Operator>adalah dalam</Operator> <Value>{{value}}</Value>',
  'search.operator.date-time-last.name': 'terakhir',
  /* Date and time should not be the given filter value */
  'search.operator.date-time-not-equal.description':
    '<Field/> <Operator>bukan</Operator> <Value>{{value}}</Value>',
  'search.operator.date-time-not-equal.name': 'bukan',
  /* Date and time should be within the range of given filter values */
  'search.operator.date-time-range.description': '<Field/> <Operator>antara</Operator> <Value/>',
  'search.operator.date-time-range.name': 'antara',
  /* Value should be defined */
  'search.operator.defined.description':
    '<Field/> <Operator>adalah</Operator> <Value>tidak kosong</Value>',
  'search.operator.defined.name': 'tidak kosong',
  /* Value should not be defined */
  'search.operator.not-defined.description':
    '<Field/> <Operator>adalah</Operator> <Value>kosong</Value>',
  'search.operator.not-defined.name': 'kosong',
  /* Number should be the given filter value */
  'search.operator.number-equal.description':
    '<Field/> <Operator>adalah</Operator> <Value>{{value}}</Value>',
  'search.operator.number-equal.name': 'adalah',
  /* Number should be greater than given filter value */
  'search.operator.number-gt.description':
    '<Field/> <Operator>></Operator> <Value>{{value}}</Value>',
  'search.operator.number-gt.name': 'lebih besar dari',
  /* Number should be greater than or the given filter value */
  'search.operator.number-gte.description':
    '<Field/> <Operator>≥</Operator> <Value>{{value}}</Value>',
  'search.operator.number-gte.name': 'lebih besar dari atau sama dengan',
  /* Number should be less than given filter value */
  'search.operator.number-lt.description':
    '<Field/> <Operator><</Operator> <Value>{{value}}</Value>',
  'search.operator.number-lt.name': 'kurang dari',
  /* Number should be less than or the given filter value */
  'search.operator.number-lte.description':
    '<Field/> <Operator>≤</Operator> <Value>{{value}}</Value>',
  'search.operator.number-lte.name': 'kurang dari atau sama dengan',
  /* Number should not be the given filter value */
  'search.operator.number-not-equal.description':
    '<Field/> <Operator>bukan</Operator> <Value>{{value}}</Value>',
  'search.operator.number-not-equal.name': 'bukan',
  /* Number should be within the range of given filter values */
  'search.operator.number-range.description':
    '<Field/> <Operator>berada di antara</Operator> <Value>{{from}} → {{to}}</Value>',
  'search.operator.number-range.name': 'berada di antara',
  /* Portable Text should contain the given filter value */
  'search.operator.portable-text-contains.description':
    '<Field/> <Operator>mengandung</Operator> <Value>{{value}}</Value>',
  'search.operator.portable-text-contains.name': 'mengandung',
  /* Portable Text should be the given filter value */
  'search.operator.portable-text-equal.description':
    '<Field/> <Operator>adalah</Operator> <Value>{{value}}</Value>',
  'search.operator.portable-text-equal.name': 'adalah',
  /* Portable Text should not contain the given filter value */
  'search.operator.portable-text-not-contains.description':
    '<Field/> <Operator>tidak mengandung</Operator> <Value>{{value}}</Value>',
  'search.operator.portable-text-not-contains.name': 'tidak mengandung',
  /* Portable Text should not be the given filter value */
  'search.operator.portable-text-not-equal.description':
    '<Field/> <Operator>bukan</Operator> <Value>{{value}}</Value>',
  'search.operator.portable-text-not-equal.name': 'bukan',
  /* References the given asset (file) */
  'search.operator.reference-asset-file.description':
    '<Field/> <Operator>→</Operator> <Value>{{value}}</Value>',
  'search.operator.reference-asset-file.name': 'file',
  /* References the given asset (image) */
  'search.operator.reference-asset-image.description':
    '<Field/> <Operator>→</Operator> <Value>{{value}}</Value>',
  'search.operator.reference-asset-image.name': 'image',
  /* References the given document */
  'search.operator.reference-document.description':
    '<Field/> <Operator>→</Operator> <Value>{{value}}</Value>',
  'search.operator.reference-document.name': 'dokumen',
  /* Reference should be the given document */
  'search.operator.reference-equal.description':
    '<Field/> <Operator>adalah</Operator> <Value>{{value}}</Value>',
  'search.operator.reference-equal.name': 'adalah',
  /* Reference should not be the given document */
  'search.operator.reference-not-equal.description':
    '<Field/> <Operator>bukan</Operator> <Value>{{value}}</Value>',
  'search.operator.reference-not-equal.name': 'bukan',
  /* Slug contains the given value */
  'search.operator.slug-contains.description':
    '<Field/> <Operator>mengandung</Operator> <Value>{{value}}</Value>',
  'search.operator.slug-contains.name': 'mengandung',
  /* Slug equals the given filter value */
  'search.operator.slug-equal.description':
    '<Field/> <Operator>adalah</Operator> <Value>{{value}}</Value>',
  'search.operator.slug-equal.name': 'adalah',
  /* Slug does not contain the given value */
  'search.operator.slug-not-contains.description':
    '<Field/> <Operator>tidak mengandung</Operator> <Value>{{value}}</Value>',
  'search.operator.slug-not-contains.name': 'tidak mengandung',
  /* Slug does not equal the given filter value */
  'search.operator.slug-not-equal.description':
    '<Field/> <Operator>bukan</Operator> <Value>{{value}}</Value>',
  'search.operator.slug-not-equal.name': 'bukan',
  /* String contains the given filter value */
  'search.operator.string-contains.description':
    '<Field/> <Operator>mengandung</Operator> <Value>{{value}}</Value>',
  'search.operator.string-contains.name': 'mengandung',
  /* String equals the given filter value */
  'search.operator.string-equal.description':
    '<Field/> <Operator>adalah</Operator> <Value>{{value}}</Value>',
  'search.operator.string-equal.name': 'adalah',
  /* String equals one of the predefined allowed values */
  'search.operator.string-list-equal.description':
    '<Field/> <Operator>adalah</Operator> <Value>{{value}}</Value>',
  'search.operator.string-list-equal.name': 'adalah',
  /* String does not equal one of the predefined allowed values */
  'search.operator.string-list-not-equal.description':
    '<Field/> <Operator>bukan</Operator> <Value>{{value}}</Value>',
  'search.operator.string-list-not-equal.name': 'bukan',
  /* String does not contain the given filter value */
  'search.operator.string-not-contains.description':
    '<Field/> <Operator>tidak mengandung</Operator> <Value>{{value}}</Value>',
  'search.operator.string-not-contains.name': 'tidak mengandung',
  /* String does not equal the given filter value */
  'search.operator.string-not-equal.description':
    '<Field/> <Operator>bukan</Operator> <Value>{{value}}</Value>',
  'search.operator.string-not-equal.name': 'bukan',
  /** Label for the "Best match" search ordering type */
  'search.ordering.best-match-label': 'Cocokan terbaik',
  /** Label for the "Created: Oldest first" search ordering type */
  'search.ordering.created-ascending-label': 'Dibuat: Terlama terlebih dahulu',
  /** Label for the "Created: Newest first" search ordering type */
  'search.ordering.created-descending-label': 'Dibuat: Terbaru terlebih dahulu',
  /** Label for the "Updated: Oldest first" search ordering type */
  'search.ordering.updated-ascending-label': 'Diperbarui: Terlama terlebih dahulu',
  /** Label for the "Updated: Newest first" search ordering type */
  'search.ordering.updated-descending-label': 'Diperbarui: Terbaru terlebih dahulu',
  /** Placeholder text for the global search input field */
  'search.placeholder': 'Cari',
  /** Accessibility label for the recent searches section, shown when no valid search terms has been given */
  'search.recent-searches-aria-label': 'Pencarian terbaru',
  /** Label/heading shown for the recent searches section */
  'search.recent-searches-label': 'Pencarian terbaru',
  /** Accessibility label for the search results section, shown when the user has typed valid terms */
  'search.search-results-aria-label': 'Hasil pencarian',

  /** Label for the edit columns button to change field visibility in sheet list */
  'sheet-list.edit-columns': 'Edit kolom',
  /** Label for the header menu option to hide a field from the sheet list */
  'sheet-list.hide-field': 'Hapus dari tabel',
  /** Label for reset column visibilities button */
  'sheet-list.reset-columns': 'Reset kolom',
  /** Title for the edit columns menu */
  'sheet-list.select-fields': 'Pilih hingga 5 jenis kolom',

  /** Accessibility label for the navbar status button */
  'status-button.aria-label': 'Status konfigurasi',

  /** Title for the changes tooltip in the history inspector*/
  'timeline.changes.title': 'Perubahan oleh',
  /** Description for error when the timeline for the given document can't be loaded */
  'timeline.error.load-document-changes-description':
    'Transaksi riwayat dokumen tidak terpengaruh.',
  /** Title for error when the timeline for the given document can't be loaded */
  'timeline.error.load-document-changes-title':
    'Terjadi kesalahan saat mengambil perubahan dokumen.',
  /** Description for error when the timeline for the given document can't be loaded */
  'timeline.error.load-document-changes-version-description':
    'Aktifkan API peristiwa melalui konfigurasi Studio untuk melihat riwayat dokumen.',
  /** Title for error when the timeline for the given version document can't be loaded */
  'timeline.error.load-document-changes-version-title':
    'Riwayat dokumen versi hanya tersedia melalui API Peristiwa.',
  /** Error description for when the document doesn't have history */
  'timeline.error.no-document-history-description':
    'Saat mengubah konten dokumen, versi dokumen akan muncul di menu ini.',
  /** Error title for when the document doesn't have history */
  'timeline.error.no-document-history-title': 'Tidak ada riwayat dokumen',
  /** Error prompt when revision cannot be loaded */
  'timeline.error.unable-to-load-revision': 'Tidak dapat memuat revisi',
  /** Label for when the timeline item is the latest in the history */
  'timeline.latest': 'Terbaru',
  /** Label for latest revision for timeline menu dropdown */
  'timeline.latest-revision': 'Revisi terbaru',
  /**
   * Label for latest revision for timeline menu dropdown
   * @deprecated as of `v3.47.0` `timeline.latest-revision` should be used instead. Note: _usage_ of this key is deprecated, but Studios on `< v3.47.0` still require this key to be _defined_
   * */
  'timeline.latest-version': 'Revisi terbaru',
  /** The aria-label for the list of revisions in the timeline */
  'timeline.list.aria-label': 'Revisi dokumen',
  /** Label for loading history */
  'timeline.loading-history': 'Memuat riwayat…',
  /* Label for when no previous since events are available*/
  'timeline.no-previous-events': 'Tidak ada peristiwa sebelumnya',
  /** Label shown in review changes timeline when a document has been created */
  'timeline.operation.created': 'Dibuat',
  /** Label shown in review changes timeline when a document has been created, with a timestamp */
  'timeline.operation.created_timestamp': 'Dibuat: {{timestamp, datetime}}',
  /** Label shown in review changes timeline when a document was initially created */
  'timeline.operation.created-initial': 'Dibuat',
  /** Label shown in review changes timeline when a document was initially created, with a timestamp */
  'timeline.operation.created-initial_timestamp': 'Dibuat: {{timestamp, datetime}}',
  /** Label shown in review changes timeline when a document has been deleted */
  'timeline.operation.deleted': 'Dihapus',
  /** Label shown in review changes timeline when a document has been deleted, with a timestamp */
  'timeline.operation.deleted_timestamp': 'Dihapus: {{timestamp, datetime}}',
  /** Label shown in review changes timeline when a draft has been discarded */
  'timeline.operation.draft-discarded': 'Draf Dibuang',
  /** Label shown in review changes timeline when a draft has been discarded, with a timestamp */
  'timeline.operation.draft-discarded_timestamp': 'Draf Dibuang: {{timestamp, datetime}}',
  /** Label shown in review changes timeline when a draft has been edited */
  'timeline.operation.edited-draft': 'Telah Diedit',
  /** Label shown in review changes timeline when a draft has been edited, with a timestamp */
  'timeline.operation.edited-draft_timestamp': 'Diedit: {{timestamp, datetime}}',
  /** Label shown in review changes timeline when a document has been edited live */
  'timeline.operation.edited-live': 'Diedit Langsung',
  /** Label shown in review changes timeline when a document has been edited live, with a timestamp */
  'timeline.operation.edited-live_timestamp': 'Diedit Langsung: {{timestamp, datetime}}',
  /** Label shown in review changes timeline when a document was published */
  'timeline.operation.published': 'Diterbitkan',
  /** Label shown in review changes timeline when a document was published, with a timestamp */
  'timeline.operation.published_timestamp': 'Diterbitkan: {{timestamp, datetime}}',
  /** Label shown in review changes timeline when a document was unpublished */
  'timeline.operation.unpublished': 'Ditarik',
  /** Label shown in review changes timeline when a document was unpublished, with a timestamp */
  'timeline.operation.unpublished_timestamp': 'Ditarik: {{timestamp, datetime}}',
  /**
   * Label for determining since which version the changes for timeline menu dropdown are showing.
   * Receives the time label as a parameter (`timestamp`).
   */
  'timeline.since': '{{timestamp, datetime}}',
  /** Label for missing change version for timeline menu dropdown are showing */
  'timeline.since-version-missing': 'Sejak: versi tidak diketahui',

  /** Aria label for the action buttons in the PTE toolbar */
  'toolbar.portable-text.action-button-aria-label': '{{action}}',

  /** Accessibility label for the breadcrumb menu */
  'tree-editing-dialog.breadcrumbs.menu': 'Menu Breadcrumb',
  /** Title placeholder for search input in array of objects */
  'tree-editing-dialog.search-placeholder': 'Cari',
  /** Menu aria label for the search menu */
  'tree-editing-dialog.search.menu-label': 'Menu Pencarian',
  /** Title label for when no search results are found on the tree of objects */
  'tree-editing-dialog.search.no-results-title': 'Tidak ada hasil yang ditemukan',
  /** Label to close the sidebar */
  'tree-editing-dialog.sidebar.action.close': 'Tutup sidebar',
  /** Collapse label the menu item in the sidebar  */
  'tree-editing-dialog.sidebar.action.collapse': 'Ciutkan',
  /** Label to close the dialog */
  'tree-editing-dialog.sidebar.action.done': 'Selesai',
  /** Exapnd label the menu item in the sidebar  */
  'tree-editing-dialog.sidebar.action.expand': 'Bentangkan',
  /** Label to open the sidebar */
  'tree-editing-dialog.sidebar.action.open': 'Buka sidebar',

  'user-menu.action.free-trial_other': '{{count}} hari tersisa dalam masa percobaan',
  /** Label for the button showed after trial ended */
  'user-menu.action.free-trial-finished': 'Tingkatkan dari gratis',
  /** Label for action to invite members to the current sanity project */
  'user-menu.action.invite-members': 'Undang anggota',
  /** Accessibility label for action to invite members to the current sanity project */
  'user-menu.action.invite-members-aria-label': 'Undang anggota',
  /** Label for action to manage the current sanity project */
  'user-menu.action.manage-project': 'Kelola proyek',
  /** Accessibility label for the action to manage the current project */
  'user-menu.action.manage-project-aria-label': 'Kelola proyek',
  /** Tooltip helper text when portable text annotation is disabled for empty block*/
  'user-menu.action.portable-text.annotation-disabled_empty-block':
    'Tidak dapat menerapkan {{name}} ke blok yang kosong',
  /** Tooltip helper text when portable text annotation is disabled for multiple blocks */
  'user-menu.action.portable-text.annotation-disabled_multiple-blocks':
    'Tidak dapat menerapkan {{name}} ke beberapa blok',
  /** Label for action to sign out of the current sanity project */
  'user-menu.action.sign-out': 'Keluar',
  /** Title for appearance section for the current studio (dark / light / system scheme) */
  'user-menu.appearance-title': 'Tampilan',
  /** Label for close menu button for user menu */
  'user-menu.close-menu': 'Tutup menu',
  /** Description for using the "dark theme" in the appearance user menu */
  'user-menu.color-scheme.dark-description': 'Gunakan tampilan gelap',
  /** Title for using the "dark theme" in the appearance user menu */
  'user-menu.color-scheme.dark-title': 'Gelap',
  /** Description for using the "light theme" in the appearance user menu */
  'user-menu.color-scheme.light-description': 'Gunakan tampilan terang',
  /** Title for using the "light theme" in the appearance user menu */
  'user-menu.color-scheme.light-title': 'Terang',
  /** Description for using "system apparence" in the appearance user menu */
  'user-menu.color-scheme.system-description': 'Gunakan tampilan sistem',
  /** Title for using system apparence in the appearance user menu */
  'user-menu.color-scheme.system-title': 'Sistem',
  /** Title for locale section for the current studio */
  'user-menu.locale-title': 'Bahasa',
  /** Label for tooltip to show which provider the currently logged in user is using */
  'user-menu.login-provider': 'Masuk dengan {{providerTitle}}',
  /** Label for open menu button for user menu */
  'user-menu.open-menu': 'Buka menu',

  /**
   * Label for action to add a workspace (currently a developer-oriented action, as this will
   * lead to the documentation on workspace configuration)
   */
  'workspaces.action.add-workspace': 'Tambahkan ruang kerja',
  /**
   * Label for action to choose a different workspace, in the case where you are not logged in,
   * have selected a workspace, and are faced with the authentication options for the selected
   * workspace. In other words, label for the action shown when you have reconsidered which
   * workspace to authenticate in.
   */
  'workspaces.action.choose-another-workspace': 'Pilih ruang kerja lain',
  /** Label for heading that indicates that you can choose your workspace */
  'workspaces.choose-your-workspace-label': 'Pilih ruang kerja Anda',
  /** Label for the workspace menu */
  'workspaces.select-workspace-aria-label': 'Pilih ruang kerja',
  /** Button label for opening the workspace switcher */
  'workspaces.select-workspace-label': 'Pilih ruang kerja',
  /** Tooltip for the workspace menu */
  'workspaces.select-workspace-tooltip': 'Pilih ruang kerja',
  /** Title for Workplaces dropdown menu */
  'workspaces.title': 'Ruang Kerja',
})
