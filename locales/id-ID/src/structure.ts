import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Label for the "Copy Document URL" document action */
  'action.copy-document-url.label': 'Salin URL Dokumen',
  /** Tooltip when action button is disabled because the operation is not ready   */
  'action.delete.disabled.not-ready': 'Operasi belum siap',
  /** Tooltip when action button is disabled because the document does not exist */
  'action.delete.disabled.nothing-to-delete': 'Dokumen ini belum ada atau sudah dihapus',
  /** Label for the "Delete" document action button */
  'action.delete.label': 'Hapus',
  /** Label for the "Delete" document action while the document is being deleted */
  'action.delete.running.label': 'Menghapus…',
  /** Tooltip when action is disabled because the document is linked to Canvas */
  'action.disabled-by-canvas.tooltip':
    'Beberapa aksi dokumen dinonaktifkan untuk dokumen yang terhubung ke Canvas',
  /** Message prompting the user to confirm discarding changes */
  'action.discard-changes.confirm-dialog.confirm-discard-changes':
    'Apakah Anda yakin ingin membuang semua perubahan sejak terakhir dipublikasikan?',
  /** Tooltip when action is disabled because the document has no unpublished changes */
  'action.discard-changes.disabled.no-change':
    'Dokumen ini tidak memiliki perubahan yang belum dipublikasikan',
  /** Tooltip when action is disabled because the document is not published */
  'action.discard-changes.disabled.not-published': 'Dokumen ini belum dipublikasikan',
  /** Tooltip when action button is disabled because the operation is not ready   */
  'action.discard-changes.disabled.not-ready': 'Operasi belum siap',
  /** Label for the "Discard changes" document action */
  'action.discard-changes.label': 'Buang perubahan',
  /** Tooltip when action is disabled because the operation is not ready   */
  'action.duplicate.disabled.not-ready': 'Operasi belum siap',
  /** Tooltip when action is disabled because the document doesn't exist */
  'action.duplicate.disabled.nothing-to-duplicate':
    'Dokumen ini belum ada sehingga tidak ada yang bisa diduplikasi',
  /** Label for the "Duplicate" document action */
  'action.duplicate.label': 'Duplikasi',
  /** Label for the "Duplicate" document action while the document is being duplicated */
  'action.duplicate.running.label': 'Menduplikasi…',
  /** Tooltip when publish button is disabled because the document is already published, and published time is unavailable.*/
  'action.publish.already-published.no-time-ago.tooltip': 'Sudah dipublikasikan',
  /** Tooltip when publish button is disabled because the document is already published.*/
  'action.publish.already-published.tooltip': 'Dipublikasikan {{timeSincePublished}}',
  /** Tooltip when action is disabled because the studio is not ready.*/
  'action.publish.disabled.not-ready': 'Operasi belum siap',
  /** Label for action when there are pending changes.*/
  'action.publish.draft.label': 'Publikasikan',
  /** Label for the "Publish" document action */
  'action.publish.label': 'Publikasikan',
  /** Label for the "Publish" document action when the document has live edit enabled.*/
  'action.publish.live-edit.label': 'Publikasikan',
  /** Fallback tooltip for the "Publish" document action when publish is invoked for a document with live edit enabled.*/
  'action.publish.live-edit.publish-disabled':
    'Tidak dapat mempublikasikan karena Live Edit diaktifkan untuk tipe dokumen ini',
  /** Tooltip for the "Publish" document action when the document has live edit enabled.*/
  'action.publish.live-edit.tooltip':
    'Live Edit diaktifkan untuk tipe konten ini dan publikasi terjadi secara otomatis saat Anda melakukan perubahan',
  /** Tooltip when publish button is disabled because there are no changes.*/
  'action.publish.no-changes.tooltip': 'Tidak ada perubahan yang belum dipublikasikan',
  /** Label for the "Publish" document action when there are no changes.*/
  'action.publish.published.label': 'Dipublikasikan',
  /** Label for the "Publish" document action while publish is being executed.*/
  'action.publish.running.label': 'Mempublikasikan…',
  /** Tooltip when the "Publish" document action is disabled due to validation issues */
  'action.publish.validation-issues.tooltip':
    'Ada kesalahan validasi yang perlu diperbaiki sebelum dokumen ini dapat dipublikasikan',
  /** Tooltip when publish button is waiting for validation and async tasks to complete.*/
  'action.publish.waiting': 'Menunggu tugas selesai sebelum mempublikasikan',
  /** Message prompting the user to confirm that they want to restore to an earlier revision*/
  'action.restore.confirm.message': 'Apakah Anda yakin ingin mengembalikan dokumen ini?',
  /** Fallback tooltip for when user is looking at the initial revision */
  'action.restore.disabled.cannot-restore-initial': 'Anda tidak dapat mengembalikan ke revisi awal',
  /** Label for the "Restore" document action */
  'action.restore.label': 'Kembalikan ke revisi',
  /** Default tooltip for the action */
  'action.restore.tooltip': 'Kembalikan ke revisi ini',
  /** Tooltip when action is disabled because the document is not already published */
  'action.unpublish.disabled.not-published': 'Dokumen ini tidak dipublikasikan',
  /** Tooltip when action is disabled because the operation is not ready   */
  'action.unpublish.disabled.not-ready': 'Operasi belum siap',
  /** Label for the "Unpublish" document action */
  'action.unpublish.label': 'Batalkan publikasi',
  /** Fallback tooltip for the Unpublish document action when publish is invoked for a document with live edit enabled.*/
  'action.unpublish.live-edit.disabled':
    'Dokumen ini memiliki fitur sunting langsung aktif dan tidak dapat dibatalkan publikasinya',

  /** Description for the archived release banner, rendered when viewing the history of a version document from the publihed view */
  'banners.archived-release.description':
    'Versi dokumen ini termasuk dalam rilis yang diarsipkan <VersionBadge>{{title}}</VersionBadge>',
  /** The text for the restore button on the deleted document banner */
  'banners.deleted-document-banner.restore-button.text': 'Kembalikan revisi terbaru',
  /** The text content for the deleted document banner */
  'banners.deleted-document-banner.text': 'Dokumen ini telah dihapus.',
  /** The text content for the deprecated document type banner */
  'banners.deprecated-document-type-banner.text': 'Tipe dokumen ini telah usang.',
  /** The text for publish action for discarding the version */
  'banners.live-edit-draft-banner.discard.tooltip': 'Buang draf',
  /** The text for publish action for the draft banner */
  'banners.live-edit-draft-banner.publish.tooltip': 'Publikasikan untuk melanjutkan penyuntingan',
  /** The text content for the live edit document when it's a draft */
  'banners.live-edit-draft-banner.text':
    'Tipe <strong>{{schemaType}}</strong> memiliki <code>liveEdit</code> aktif, tetapi versi draf dari dokumen ini ada. Publikasikan atau buang draf untuk melanjutkan penyuntingan langsung.',
  /** The text for the permission check banner if the user only has multiple roles, but they do not allow publishing this document */
  'banners.permission-check-banner.missing-permission_create_other':
    'Peran Anda <Roles/> tidak memiliki izin untuk mempublikasikan dokumen ini.',
  /** The text for the permission check banner if the user only has multiple roles, but they do not allow editing this document */
  'banners.permission-check-banner.missing-permission_update_other':
    'Peran Anda <Roles/> tidak memiliki izin untuk menyunting dokumen ini.',
  /** The pending text for the request permission button that appears for viewer roles */
  'banners.permission-check-banner.request-permission-button.sent': 'Permintaan editor terkirim',
  /** The text for the request permission button that appears for viewer roles */
  'banners.permission-check-banner.request-permission-button.text': 'Minta untuk menyunting',
  /** Description for the archived release banner, rendered when viewing the history of a version document from the published view */
  'banners.published-release.description':
    'Anda sedang melihat dokumen hanya-baca yang dipublikasikan sebagai bagian dari <VersionBadge>{{title}}</VersionBadge>. Dokumen ini tidak dapat disunting',
  /** The text for the reload button */
  'banners.reference-changed-banner.reason-changed.reload-button.text': 'Muat ulang referensi',
  /** The text for the reference change banner if the reason is that the reference has been changed */
  'banners.reference-changed-banner.reason-changed.text':
    'Referensi ini telah berubah sejak Anda membukanya.',
  /** The text for the close button */
  'banners.reference-changed-banner.reason-removed.close-button.text': 'Tutup referensi',
  /** The text for the reference change banner if the reason is that the reference has been deleted */
  'banners.reference-changed-banner.reason-removed.text':
    'Referensi ini telah dihapus sejak Anda membukanya.',
  /** The text that appears for the action button to add the current document to the global release */
  'banners.release.action.add-to-release': 'Tambahkan ke rilis',
  /** The text that appears for the action button to add the current document to the global release */
  'banners.release.action.open-to-edit': 'Buka rilis untuk diedit',
  /** Toast description in case an error occurs when adding a document to a release  */
  'banners.release.error.description':
    'Terjadi kesalahan saat menambahkan dokumen ke rilis: {{message}}',
  /** Toast title in case an error occurs when adding a document to a release  */
  'banners.release.error.title': 'Kesalahan menambahkan dokumen ke rilis',
  /** The text for the banner that appears when a document only has versions but is in a draft or published pinned release */
  'banners.release.navigate-to-edit-description': 'Dokumen hanya ada di',
  /** The text for the banner that appears when a document only has versions but is in a draft or published pinned release */
  'banners.release.navigate-to-edit-description-end_other': 'rilis',
  /** The text for the banner that appears when there are multiple versions but no drafts or published, more than one extra releases */
  'banners.release.navigate-to-edit-description-multiple_other':
    'Dokumen ini adalah bagian dari rilis <VersionBadge/> dan {{count}} rilis lainnya',
  /** The text for the banner that appears when a document only has one version but is in a draft or published pinned release */
  'banners.release.navigate-to-edit-description-single':
    'Dokumen ini adalah bagian dari rilis <VersionBadge/>',
  /** The text for the banner that appears when a document is not in the current global release */
  'banners.release.not-in-release': 'Tidak dalam rilis <VersionBadge>{{title}}</VersionBadge>.',
  /** Description of toast that will appear in case of latency between the user adding a document to a release and the UI reflecting it */
  'banners.release.waiting.description':
    'Mohon tunggu sebentar sementara dokumen ditambahkan ke rilis. Ini tidak seharusnya memakan waktu lebih dari beberapa detik.',
  /** Title of toast that will appear in case of latency between the user adding a document to a release and the UI reflecting it */
  'banners.release.waiting.title': 'Menambahkan dokumen ke rilis…',
  /** The text content for the unpublished document banner when is part of a release */
  'banners.unpublished-release-banner.text':
    'Dokumen ini akan ditarik dari publikasi sebagai bagian dari rilis <VersionBadge>{{title}}</VersionBadge>',

  /** Browser/tab title when creating a new document of a given type */
  'browser-document-title.new-document': 'Dokumen Baru {{schemaType}}',
  /** Browser/tab title when editing a document where the title cannot be resolved from preview configuration */
  'browser-document-title.untitled-document': 'Tanpa Judul',

  /** The action menu button aria-label */
  'buttons.action-menu-button.aria-label': 'Buka tindakan dokumen',
  /** The action menu button tooltip */
  'buttons.action-menu-button.tooltip': 'Tindakan dokumen',
  /** The aria-label for the split pane button on the document panel header */
  'buttons.split-pane-button.aria-label': 'Pisahkan panel ke kanan',
  /** The tool tip for the split pane button on the document panel header */
  'buttons.split-pane-button.tooltip': 'Pisahkan panel ke kanan',
  /** The title for the close button on the split pane on the document panel header */
  'buttons.split-pane-close-button.title': 'Tutup panel terpisah',
  /** The title for the close group button on the split pane on the document panel header */
  'buttons.split-pane-close-group-button.title': 'Tutup grup panel',

  /** The text for the canvas linked banner action button */
  'canvas.banner.edit-in-canvas-action': 'Edit di Canvas',
  /** The text for the canvas linked banner when the document is a draft */
  'canvas.banner.linked-text.draft': 'Dokumen draf ini terhubung ke Canvas',
  /** The text for the canvas linked banner when the document is a live document */
  'canvas.banner.linked-text.published': 'Dokumen langsung ini terhubung ke Canvas',
  /** The text for the canvas linked banner when the document is a version document */
  'canvas.banner.linked-text.version': 'Dokumen versi ini terhubung ke Canvas',
  /** The text for the canvas linked banner popover button */
  'canvas.banner.popover-button-text': 'Pelajari lebih lanjut',
  /** The description for the canvas linked banner popover */
  'canvas.banner.popover-description':
    'Canvas memungkinkan Anda membuat konten dalam editor bebas yang secara otomatis terhubung kembali ke Studio sebagai konten terstruktur - saat Anda mengetik.',
  /** The heading for the canvas linked banner popover */
  'canvas.banner.popover-heading': 'Pengarangan berbasis ide',

  /** The label used in the changes inspector for the from selector */
  'changes.from.label': 'Dari',
  /* The label for the history tab in the changes inspector*/
  'changes.tab.history': 'Riwayat',
  /* The label for the review tab in the changes inspector*/
  'changes.tab.review-changes': 'Tinjau perubahan',
  /** The label used in the changes inspector for the to selector */
  'changes.to.label': 'Ke',

  /** The error message shown when the specified document comparison mode is not supported */
  'compare-version.error.invalidModeParam':
    '"{{input}}" bukan mode perbandingan dokumen yang didukung.',
  /** The error message shown when the next document for comparison could not be extracted from the URL */
  'compare-version.error.invalidNextDocumentParam': 'Parameter dokumen selanjutnya tidak valid.',
  /** The error message shown when the document comparison URL could not be parsed */
  'compare-version.error.invalidParams.title': 'Tidak dapat membandingkan dokumen',
  /** The error message shown when the previous document for comparison could not be extracted from the URL */
  'compare-version.error.invalidPreviousDocumentParam': 'Parameter dokumen sebelumnya tidak valid.',

  /** The text for the tooltip when the "Compare versions" action for a document is disabled */
  'compare-versions.menu-item.disabled-reason':
    'Tidak ada versi lain dari dokumen ini untuk dibandingkan.',
  /** The text for the "Compare versions" action for a document */
  'compare-versions.menu-item.title': 'Bandingkan versi',
  /** The string used to label draft documents */
  'compare-versions.status.draft': 'Draf',
  /** The string used to label published documents */
  'compare-versions.status.published': 'Diterbitkan',
  /** The title used when comparing versions of a document */
  'compare-versions.title': 'Bandingkan versi',

  /** The text in the "Cancel" button in the confirm delete dialog that cancels the action and closes the dialog */
  'confirm-delete-dialog.cancel-button.text': 'Batal',
  /** Used in `confirm-delete-dialog.cdr-summary.title` */
  'confirm-delete-dialog.cdr-summary.document-count_other': '{{count}} dokumen',
  /** The text that appears in the subtitle `<summary>` that lists the datasets below the title */
  'confirm-delete-dialog.cdr-summary.subtitle_other': 'Dataset: {{datasets}}',
  /** The text that appears in the subtitle `<summary>` that lists the datasets below the title */
  'confirm-delete-dialog.cdr-summary.subtitle_unavailable_other': 'Dataset tidak tersedia',
  /** The text that appears in the title `<summary>` that includes the list of CDRs (plural) */
  'confirm-delete-dialog.cdr-summary.title_other': '{{documentCount}} dalam {{count}} dataset',
  /** Appears when hovering over the copy button to copy */
  'confirm-delete-dialog.cdr-table.copy-id-button.tooltip': 'Salin ID ke papan klip',
  /** The header for the dataset column in the list of cross-dataset references found */
  'confirm-delete-dialog.cdr-table.dataset.label': 'Dataset',
  /** The header for the document ID column in the list of cross-dataset references found */
  'confirm-delete-dialog.cdr-table.document-id.label': 'ID Dokumen',
  /** The toast title when the copy button has been clicked but copying failed */
  'confirm-delete-dialog.cdr-table.id-copied-toast.title-failed': 'Gagal menyalin ID dokumen',
  /** The header for the project ID column in the list of cross-dataset references found */
  'confirm-delete-dialog.cdr-table.project-id.label': 'ID Proyek',
  /** The text in the "Delete anyway" button in the confirm delete dialog that confirms the action */
  'confirm-delete-dialog.confirm-anyway-button.text_delete': 'Hapus saja',
  /** The text in the "Unpublish anyway" button in the confirm delete dialog that confirms the action */
  'confirm-delete-dialog.confirm-anyway-button.text_unpublish': 'Batalkan publikasi saja',
  /** The text in the "Delete now" button in the confirm delete dialog that confirms the action */
  'confirm-delete-dialog.confirm-button.text_delete': 'Hapus sekarang',
  /** The text in the "Unpublish now" button in the confirm delete dialog that confirms the action */
  'confirm-delete-dialog.confirm-button.text_unpublish': 'Batalkan publikasi sekarang',
  /** If no referring documents are found, this text appears above the cancel and confirmation buttons */
  'confirm-delete-dialog.confirmation.text_delete':
    'Apakah Anda yakin ingin menghapus “<DocumentTitle/>”?',
  /** If no referring documents are found, this text appears above the cancel and confirmation buttons */
  'confirm-delete-dialog.confirmation.text_unpublish':
    'Apakah Anda yakin ingin membatalkan publikasi “<DocumentTitle/>”?',
  /** The text body of the error dialog. */
  'confirm-delete-dialog.error.message.text': 'Terjadi kesalahan saat memuat dokumen yang merujuk.',
  /** The text in the retry button of the confirm delete dialog if an error occurred. */
  'confirm-delete-dialog.error.retry-button.text': 'Coba Lagi',
  /** The header of the confirm delete dialog if an error occurred while the confirm delete dialog was open. */
  'confirm-delete-dialog.error.title.text': 'Kesalahan',
  /** The header of the confirm delete dialog */
  'confirm-delete-dialog.header.text_delete': 'Hapus dokumen?',
  /** The header of the confirm delete dialog */
  'confirm-delete-dialog.header.text_unpublish': 'Batalkan publikasi dokumen?',
  /** The text that appears while the referring documents are queried */
  'confirm-delete-dialog.loading.text': 'Mencari dokumen yang merujuk…',
  /** Shown if there are references to other documents but the user does not have the permission to see the relevant document IDs */
  'confirm-delete-dialog.other-reference-count.title_other':
    '{{count}} referensi lain tidak ditampilkan',
  /** Text in the tooltip of this component if hovering over the info icon */
  'confirm-delete-dialog.other-reference-count.tooltip':
    'Kami tidak dapat menampilkan metadata untuk referensi ini karena token akses yang hilang untuk dataset terkait.',
  /** Appears when unable to render a document preview in the referring document list */
  'confirm-delete-dialog.preview-item.preview-unavailable.subtitle': 'ID: {{documentId}}',
  /** Appears when unable to render a document preview in the referring document list */
  'confirm-delete-dialog.preview-item.preview-unavailable.title': 'Pratinjau tidak tersedia',
  /** Warns the user of affects to other documents if the action is confirmed (delete) */
  'confirm-delete-dialog.referential-integrity-disclaimer.text_delete':
    'Jika Anda menghapus dokumen ini, dokumen yang merujuk kepadanya tidak akan dapat mengaksesnya lagi.',
  /** Warns the user of affects to other documents if the action is confirmed (unpublish) */
  'confirm-delete-dialog.referential-integrity-disclaimer.text_unpublish':
    'Jika Anda membatalkan publikasi dokumen ini, dokumen yang merujuk kepadanya tidak akan dapat mengaksesnya lagi.',
  /** Tells the user the count of how many other referring documents there are before listing them. (plural) */
  'confirm-delete-dialog.referring-document-count.text_other':
    '{{count}} dokumen merujuk ke “<DocumentTitle/>”',
  /** Describes the list of documents that refer to the one trying to be deleted (delete) */
  'confirm-delete-dialog.referring-documents-descriptor.text_delete':
    'Anda mungkin tidak dapat menghapus “<DocumentTitle/>” karena dokumen-dokumen berikut merujuk kepadanya:',
  /** Describes the list of documents that refer to the one trying to be deleted (unpublish) */
  'confirm-delete-dialog.referring-documents-descriptor.text_unpublish':
    'Anda mungkin tidak dapat membatalkan publikasi “<DocumentTitle/>” karena dokumen-dokumen berikut merujuk kepadanya:',

  /** The text for the cancel button in the confirm dialog used in document action shortcuts if none is provided */
  'confirm-dialog.cancel-button.fallback-text': 'Batal',
  /** The text for the confirm button in the confirm dialog used in document action shortcuts if none is provided */
  'confirm-dialog.confirm-button.fallback-text': 'Konfirmasi',

  /** For the default structure definition, the title for the "Content" pane */
  'default-definition.content-title': 'Konten',

  /** The text shown if there was an error while getting the document's title via a preview value */
  'doc-title.error.text': 'Kesalahan: {{errorMessage}}',
  /** The text shown if the preview value for a document is non-existent or empty */
  'doc-title.fallback.text': 'Tanpa Judul',
  /** The text shown if a document's title via a preview value cannot be determined due to an unknown schema type */
  'doc-title.unknown-schema-type.text': 'Tipe skema tidak diketahui: {{schemaType}}',

  /** Tooltip text shown for the close button of the document inspector */
  'document-inspector.close-button.tooltip': 'Tutup',
  /** The title shown in the dialog header, when inspecting a valid document */
  'document-inspector.dialog.title': 'Memeriksa <DocumentTitle/>',
  /** The title shown in the dialog header, when the document being inspected is not created yet/has no value */
  'document-inspector.dialog.title-no-value': 'Tidak ada nilai',
  /** Title shown for menu item that opens the "Inspect" dialog */
  'document-inspector.menu-item.title': 'Periksa',
  /** the placeholder text for the search input on the inspect dialog */
  'document-inspector.search.placeholder': 'Cari',
  /** The "parsed" view mode, meaning the JSON is searchable, collapsible etc */
  'document-inspector.view-mode.parsed': 'Diparsing',
  /** The "raw" view mode, meaning the JSON is presented syntax-highlighted, but with no other features - optimal for copying */
  'document-inspector.view-mode.raw-json': 'JSON Mentah',

  /** The text for when a form is hidden */
  'document-view.form-view.form-hidden': 'Formulir ini disembunyikan',
  /** Fallback title shown when a form title is not provided */
  'document-view.form-view.form-title-fallback': 'Tanpa Judul',
  /** The text for when the form view is loading a document */
  'document-view.form-view.loading': 'Memuat dokumen…',
  /** The description of the sync lock toast on the form view */
  'document-view.form-view.sync-lock-toast.description':
    'Mohon tunggu sementara dokumen disinkronkan. Ini biasanya terjadi segera setelah dokumen diterbitkan, dan seharusnya tidak memakan waktu lebih dari beberapa detik',
  /** The title of the sync lock toast on the form view */
  'document-view.form-view.sync-lock-toast.title': 'Menyinkronkan dokumen…',

  /** The description for the document favorite action */
  'document.favorites.add-to-favorites': 'Tambahkan ke favorit',
  /** The description for the document unfavorite action */
  'document.favorites.remove-from-favorites': 'Hapus dari favorit',

  /**The title for the menu items that will be shown when expanding a publish release event to inspect the document */
  'events.inspect.release': 'Periksa dokumen <VersionBadge>{{releaseTitle}}</VersionBadge>',
  /**The title for the menu items that will be shown when expanding a publish draft event to inspect the draft document*/
  'events.open.draft': 'Buka dokumen <VersionBadge>draft</VersionBadge>',
  /**The title for the menu items that will be shown when expanding a publish release event to inspect the release*/
  'events.open.release': 'Buka rilis <VersionBadge>{{releaseTitle}}</VersionBadge>',

  /** The loading messaging for when the tooltip is still loading permission info */
  'insufficient-permissions-message-tooltip.loading-text': 'Memuat…',

  /** --- Menu items --- */
  /** The menu item group title to use for the Action menu items */
  'menu-item-groups.actions-group': 'Aksi',
  /** The menu item group title to use for the Layout menu items */
  'menu-item-groups.layout-group': 'Tata Letak',
  /** The menu item group title to use for the Sort menu items */
  'menu-item-groups.sorting-group': 'Pengurutan',

  /** The menu item title to use the compact view */
  'menu-items.layout.compact-view': 'Tampilan kompak',
  /** The menu item title to use the detailed view */
  'menu-items.layout.detailed-view': 'Tampilan rinci',
  /** The menu item title to Sort by Created */
  'menu-items.sort-by.created': 'Urutkan berdasarkan Dibuat',
  /** The menu item title to Sort by Last Edited */
  'menu-items.sort-by.last-edited': 'Urutkan berdasarkan Terakhir Diedit',

  /** The link text of the no document type screen that appears directly below the subtitle */
  'no-document-types-screen.link-text': 'Pelajari cara menambahkan jenis dokumen →',
  /** The subtitle of the no document type screen that appears directly below the title */
  'no-document-types-screen.subtitle':
    'Harap tentukan setidaknya satu jenis dokumen dalam skema Anda.',
  /** The title of the no document type screen */
  'no-document-types-screen.title': 'Tidak ada jenis dokumen',

  /** Text shown on back button visible on smaller breakpoints */
  'pane-header.back-button.text': 'Kembali',
  /** tooltip text (via `title` attribute) for the menu button */
  'pane-header.context-menu-button.tooltip': 'Tampilkan menu',
  /** Appears in a document list pane header if there are more than one option for create. This is the label for that menu */
  'pane-header.create-menu.label': 'Buat',
  /** Tooltip displayed on the create new button in document lists */
  'pane-header.create-new-button.tooltip': 'Buat dokumen baru',
  /** The `aria-label` for the disabled button in the pane header if create permissions are granted */
  'pane-header.disabled-created-button.aria-label': 'Izin tidak mencukupi',

  /** The text shown in the tooltip of pane item previews of documents if there are unpublished edits */
  'pane-item.draft-status.has-draft.tooltip': 'Diedit <RelativeTime/>',
  /** The text shown in the tooltip of pane item previews of documents if there are no unpublished edits */
  'pane-item.draft-status.no-draft.tooltip': 'Tidak ada suntingan yang belum dipublikasikan',
  /** The subtitle tor pane item previews if there isn't a matching schema type found */
  'pane-item.missing-schema-type.subtitle': 'Dokumen: <Code>{{documentId}}</Code>',
  /** The title tor pane item previews if there isn't a matching schema type found */
  'pane-item.missing-schema-type.title':
    'Tidak ada skema yang ditemukan untuk tipe <Code>{{documentType}}</Code>',
  /** The text shown in the tooltip of pane item previews of documents if there are unpublished edits */
  'pane-item.published-status.has-published.tooltip': 'Dipublikasikan <RelativeTime/>',
  /** The text shown in the tooltip of pane item previews of documents if there are no unpublished edits */
  'pane-item.published-status.no-published.tooltip':
    'Tidak ada suntingan yang belum dipublikasikan',

  /** The text used in the document header title if there is an error */
  'panes.document-header-title.error.text': 'Kesalahan: {{error}}',
  /** The text used in the document header title if creating a new item */
  'panes.document-header-title.new.text': 'Baru {{schemaType}}',
  /** The text used in the document header title if no other title can be determined */
  'panes.document-header-title.untitled.text': 'Tanpa judul',
  /** The error text on the document list pane */
  'panes.document-list-pane.error.text': 'Kesalahan: <Code>{{error}}</Code>',
  /** The error title on the document list pane */
  'panes.document-list-pane.error.title': 'Tidak dapat mengambil item daftar',
  /** The text of the document list pane if more than a maximum number of documents are returned */
  'panes.document-list-pane.max-items.text': 'Menampilkan maksimum {{limit}} dokumen',
  /** The text of the document list pane if no documents are found for a specified type */
  'panes.document-list-pane.no-documents-of-type.text': 'Tidak ada dokumen dari jenis ini',
  /** The text of the document list pane if no documents are found */
  'panes.document-list-pane.no-documents.text': 'Tidak ada hasil yang ditemukan',
  /** The text of the document list pane if no documents are found matching specified criteria */
  'panes.document-list-pane.no-matching-documents.text': 'Tidak ada dokumen yang cocok',
  /** The aria-label for the search input on the document list pane */
  'panes.document-list-pane.search-input.aria-label': 'Cari daftar',
  /** The search input for the search input on the document list pane */
  'panes.document-list-pane.search-input.placeholder': 'Cari daftar',
  /** The summary title when displaying an error for a document operation result */
  'panes.document-operation-results.error.summary.title': 'Detail',
  /** The text when a generic operation failed (fallback, generally not shown)  */
  'panes.document-operation-results.operation-error': 'Terjadi kesalahan selama {{context}}',
  /** The text when a delete operation failed  */
  'panes.document-operation-results.operation-error_delete':
    'Terjadi kesalahan saat mencoba menghapus dokumen ini. Biasanya ini berarti ada dokumen lain yang merujuk kepadanya.',
  /** The text when an unpublish operation failed  */
  'panes.document-operation-results.operation-error_unpublish':
    'Terjadi kesalahan saat mencoba membatalkan penerbitan dokumen ini. Biasanya ini berarti ada dokumen lain yang merujuk kepadanya.',
  /** The text when a generic operation succeeded (fallback, generally not shown)  */
  'panes.document-operation-results.operation-success': 'Berhasil melakukan {{op}} pada dokumen',
  /** The text when copy URL operation succeeded  */
  'panes.document-operation-results.operation-success_copy-url':
    'URL dokumen telah disalin ke papan klip',
  /**  */
  'panes.document-operation-results.operation-success_createVersion':
    '<Strong>{{title}}</Strong> telah ditambahkan ke rilis',
  /** The text when a delete operation succeeded  */
  'panes.document-operation-results.operation-success_delete': 'Dokumen berhasil dihapus',
  /** The text when a discard changes operation succeeded  */
  'panes.document-operation-results.operation-success_discardChanges':
    'Semua perubahan sejak terakhir diterbitkan sekarang telah dibatalkan. Draf yang dibuang masih dapat dipulihkan dari riwayat',
  /** The text when a duplicate operation succeeded  */
  'panes.document-operation-results.operation-success_duplicate': 'Dokumen berhasil diduplikasi',
  /** The text when a publish operation succeeded  */
  'panes.document-operation-results.operation-success_publish':
    '<Strong>{{title}}</Strong> telah diterbitkan',
  /** The text when a restore operation succeeded  */
  'panes.document-operation-results.operation-success_restore':
    '<Strong>{{title}}</Strong> telah dipulihkan',
  /** The text when an unpublish operation succeeded  */
  'panes.document-operation-results.operation-success_unpublish':
    '<Strong>{{title}}</Strong> telah dibatalkan penerbitannya. Sebuah draf telah dibuat dari revisi terakhir yang diterbitkan.',
  /** The document title shown when document title is "undefined" in operation message */
  'panes.document-operation-results.operation-undefined-title': 'Tanpa Judul',
  /** The loading message for the document not found pane */
  'panes.document-pane.document-not-found.loading': 'Memuat dokumen…',
  /** The text of the document not found pane if the schema is known */
  'panes.document-pane.document-not-found.text':
    'Tipe dokumen tidak ditentukan, dan dokumen dengan pengenal <Code>{{id}}</Code> tidak dapat ditemukan.',
  /** The title of the document not found pane if the schema is known */
  'panes.document-pane.document-not-found.title': 'Dokumen tidak ditemukan',
  /** The text of the document not found pane if the schema is not found */
  'panes.document-pane.document-unknown-type.text':
    'Dokumen ini memiliki tipe skema <Code>{{documentType}}</Code>, yang tidak ditentukan sebagai tipe dalam skema studio konten lokal.',
  /** The title of the document not found pane if the schema is not found or unknown */
  'panes.document-pane.document-unknown-type.title':
    'Tipe dokumen tidak dikenal: <Code>{{documentType}}</Code>',
  /** The title of the document not found pane if the schema is unknown */
  'panes.document-pane.document-unknown-type.without-schema.text':
    'Dokumen ini tidak ada, dan tidak ada tipe skema yang ditentukan untuknya.',
  /** Default message shown while resolving the structure definition for an asynchronous node */
  'panes.resolving.default-message': 'Memuat…',
  /** Message shown while resolving the structure definition for an asynchronous node and it is taking a while (more than 5s) */
  'panes.resolving.slow-resolve-message': 'Masih memuat…',
  /** The text to display when type is missing */
  'panes.unknown-pane-type.missing-type.text':
    'Item struktur tidak memiliki properti <Code>type</Code> yang diperlukan.',
  /** The title of the unknown pane */
  'panes.unknown-pane-type.title': 'Tipe panel tidak diketahui',
  /** The text to display when type is unknown */
  'panes.unknown-pane-type.unknown-type.text':
    'Item struktur dengan tipe <Code>{{type}}</Code> bukan entitas yang dikenal.',

  /** The text for the "Open preview" action for a document */
  'production-preview.menu-item.title': 'Buka pratinjau',

  /** The text for the confirm button in the request permission dialog used in the permissions banner */
  'request-permission-dialog.confirm-button.text': 'Kirim permintaan',
  /** The description text for the request permission dialog used in the permissions banner */
  'request-permission-dialog.description.text':
    'Permintaan Anda akan dikirim ke administrator proyek. Jika Anda mau, Anda juga dapat menyertakan catatan',
  /** The header/title for the request permission dialog used in the permissions banner */
  'request-permission-dialog.header.text': 'Minta akses edit',
  /** The text describing the note input for the request permission dialog used in the permissions banner */
  'request-permission-dialog.note-input.description.text':
    'Jika Anda mau, Anda dapat menambahkan catatan',
  /** The placeholder for the note input in the request permission dialog used in the permissions banner */
  'request-permission-dialog.note-input.placeholder.text': 'Tambahkan catatan...',
  /** The error/warning text in the request permission dialog when the user's request has been declined */
  'request-permission-dialog.warning.denied.text':
    'Permintaan Anda untuk mengakses proyek ini telah ditolak.',
  /** The error/warning text in the request permission dialog when the user's request has been denied due to too many outstanding requests */
  'request-permission-dialog.warning.limit-reached.text':
    'Anda telah mencapai batas permintaan peran di semua proyek. Harap tunggu sebelum mengirim lebih banyak permintaan atau hubungi administrator untuk bantuan.',

  /** Label for button when status is saved */
  'status-bar.document-status-pulse.status.saved.text': 'Tersimpan',
  /** Label for button when status is syncing */
  'status-bar.document-status-pulse.status.syncing.text': 'Menyimpan...',
  /** Accessibility label indicating when the document was last published, in relative time, eg "3 weeks ago" */
  'status-bar.publish-status-button.last-published-time.aria-label':
    'Terakhir diterbitkan {{relativeTime}}',
  /** Text for tooltip showing explanation of timestamp/relative time, eg "Last published <RelativeTime/>" */
  'status-bar.publish-status-button.last-published-time.tooltip':
    'Terakhir diterbitkan <RelativeTime/>',
  /** Accessibility label indicating when the document was last updated, in relative time, eg "2 hours ago" */
  'status-bar.publish-status-button.last-updated-time.aria-label':
    'Terakhir diperbarui {{relativeTime}}',
  /** Text for tooltip showing explanation of timestamp/relative time, eg "Last updated <RelativeTime/>" */
  'status-bar.publish-status-button.last-updated-time.tooltip':
    'Terakhir diperbarui <RelativeTime/>',
  /** Aria label for the button */
  'status-bar.review-changes-button.aria-label': 'Tinjau perubahan',
  /** Label for button when status is saved */
  'status-bar.review-changes-button.status.saved.text': 'Tersimpan!',
  /** Label for button when status is syncing */
  'status-bar.review-changes-button.status.syncing.text': 'Menyimpan...',
  /** Text for the secondary text for tooltip for the button */
  'status-bar.review-changes-button.tooltip.changes-saved': 'Perubahan tersimpan',
  /** Primary text for tooltip for the button */
  'status-bar.review-changes-button.tooltip.text': 'Tinjau perubahan',

  /** The text that appears in side the documentation link */
  'structure-error.docs-link.text': 'Lihat dokumentasi',
  /** Labels the error message or error stack of the structure error screen */
  'structure-error.error.label': 'Kesalahan',
  /** The header that appears at the top of the error screen */
  'structure-error.header.text': 'Terjadi kesalahan saat membaca struktur',
  /** The text in the reload button to retry rendering the structure */
  'structure-error.reload-button.text': 'Muat Ulang',
  /** Labels the structure path of the structure error screen */
  'structure-error.structure-path.label': 'Jalur struktur',

  /** The aria label for the menu button in the timeline item */
  'timeline-item.menu-button.aria-label': 'Buka menu aksi',
  /** The text for the tooltip in menu button the timeline item */
  'timeline-item.menu-button.tooltip': 'Aksi',
  /** The text for the collapse action in the timeline item menu */
  'timeline-item.menu.action-collapse': 'Ciutkan',
  /** The text for the expand action in the timeline item menu */
  'timeline-item.menu.action-expand': 'Bentangkan',
})
