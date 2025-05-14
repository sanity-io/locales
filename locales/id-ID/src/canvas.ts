import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** The text for the "Edit in Canvas" action. */
  'action.edit-document': 'Edit di Canvas',
  /** The text for the "Link to Canvas" action. */
  'action.link-document': 'Tautkan ke Canvas',
  /** The text for the "Link to Canvas" action when the document is not yet resolved. */
  'action.link-document-disabled.initial-value-not-resolved':
    'Harap tunggu sampai nilai awal dokumen terpecahkan',
  /** The text for the "Link to Canvas" action when the user doesn't have permissions to link the document to Canvas. */
  'action.link-document-disabled.missing-permissions':
    'Anda tidak memiliki izin untuk menautkan dokumen ini ke Canvas',
  /** The text for the "Link to Canvas" action when the document is not in the dashboard. */
  'action.link-document-disabled.not-in-dashboard':
    'Buka dokumen ini di Dashboard untuk menautkan ke Canvas',
  /** The text for the "Link to Canvas" action when the document is a version document. */
  'action.link-document-disabled.version-document': 'Dokumen versi belum didukung di Canvas',
  /** The text for the "Unlink from Canvas" action. */
  'action.unlink-document': 'Putuskan tautan dari Canvas',

  /** The text for the action button in the banner when the document is linked to Canvas. */
  'banner.edit-document-in-canvas': 'Edit di Canvas',
  /** The text for the banner when the document is linked to Canvas. */
  'banner.linked-to-canvas': 'Dokumen ini telah ditautkan ke Canvas',

  /** The text for the "Confirm document changes" dialog cancel button. */
  'dialog.confirm-document-changes.cancel': 'Batal',
  /** The text for the "Confirm document changes" dialog confirm button. */
  'dialog.confirm-document-changes.confirm': 'Terima dan lanjutkan',
  /** The description for the "Confirm document changes" dialog. */
  'dialog.confirm-document-changes.description':
    'Dokumen ini perlu diperbarui agar kompatibel dengan Canvas.\n Konten yang ada mungkin akan diedit atau dihapus sebagai bagian dari proses ini.',
  /** The description for the "Confirm document changes" dialog footer. */
  'dialog.confirm-document-changes.footer-description':
    'Anda dapat memutuskan tautan dari Canvas kapan saja',
  /** The title for the "Confirm document changes" dialog. */
  'dialog.confirm-document-changes.title': 'Konfirmasi perubahan dokumen',
  /** The text for the Link to Canvas dialog when there is a error. */
  'dialog.link-to-canvas.error': 'Gagal menautkan ke Canvas',
  /** The text for the "Link to Canvas" dialog when the document is being redirected. */
  'dialog.link-to-canvas.redirecting': 'Mengarahkan Anda ke Canvas untuk menyelesaikan penautan...',
  /** The title for the "Link to Canvas" dialog. */
  'dialog.link-to-canvas.title': 'Tautkan ke Canvas',
  /** The text for the "Link to Canvas" dialog when the document is being validated. */
  'dialog.link-to-canvas.validating': 'Memvalidasi',
  /** The text for the "Unlink from Canvas" dialog cancel button. */
  'dialog.unlink-from-canvas.cancel': 'Batal',
  /** The text for the "Unlink from Canvas" dialog description. */
  'dialog.unlink-from-canvas.description':
    'Setelah diputuskan tautannya, dokumen ini akan dapat diedit di sini dan editan masa depan di Canvas tidak akan lagi secara otomatis dipetakan ke dokumen ini.',
  /** The text for the "Unlink from Canvas" dialog error message. */
  'dialog.unlink-from-canvas.error': 'Gagal memutuskan tautan dari Canvas',
  /** The text for the "Unlink from Canvas" dialog success message. */
  'dialog.unlink-from-canvas.success': 'Tautan dari Canvas telah diputuskan',
  /** The title for the "Unlink from Canvas" dialog. */
  'dialog.unlink-from-canvas.title': 'Putuskan Tautan dari Canvas',
  /** The text for the "Unlink from Canvas" dialog unlink button. */
  'dialog.unlink-from-canvas.unlink-action': 'Putuskan tautan sekarang',
  /** The text for the "Unlink from Canvas" dialog when the document is being unlinked. */
  'dialog.unlink-from-canvas.unlinking':
    'Anda sedang memutuskan tautan <strong>“{{documentTitle}}”</strong> dari Canvas.',

  /** The text for the "Navigate to Canvas" dialog error message. */
  'navigate-to-canvas-doc.error.missing-permissions':
    'Izin yang diperlukan untuk navigasi ke Canvas tidak ada',
})
