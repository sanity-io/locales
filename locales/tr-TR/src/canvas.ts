import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** The text for the "Edit in Canvas" action. */
  'action.edit-document': "Canvas'ta Düzenle",
  /** The text for the "Link to Canvas" action. */
  'action.link-document': "Canvas'a Bağlantı Kur",
  /** The text for the "Link to Canvas" action when the document is not yet resolved. */
  'action.link-document-disabled.initial-value-not-resolved':
    'Lütfen belgenin ilk değerleri çözülene kadar bekleyin',
  /** The text for the "Link to Canvas" action when the user doesn't have permissions to link the document to Canvas. */
  'action.link-document-disabled.missing-permissions':
    "Bu belgeyi Canvas'a bağlamak için izniniz yok",
  /** The text for the "Link to Canvas" action when the document is not in the dashboard. */
  'action.link-document-disabled.not-in-dashboard':
    "Canvas'a bağlamak için bu belgeyi Kontrol Paneli'nde açın",
  /** The text for the "Link to Canvas" action when the document is a version document. */
  'action.link-document-disabled.version-document':
    "Sürüm belgeleri henüz Canvas'ta desteklenmiyor",
  /** The text for the "Unlink from Canvas" action. */
  'action.unlink-document': "Canvas'tan Bağlantıyı Kaldır",

  /** The text for the action button in the banner when the document is linked to Canvas. */
  'banner.edit-document-in-canvas': "Canvas'ta Düzenle",
  /** The text for the banner when the document is linked to Canvas. */
  'banner.linked-to-canvas': "Bu belge Canvas'a bağlandı",

  /** The text for the "Confirm document changes" dialog cancel button. */
  'dialog.confirm-document-changes.cancel': 'İptal',
  /** The text for the "Confirm document changes" dialog confirm button. */
  'dialog.confirm-document-changes.confirm': 'Kabul et ve devam et',
  /** The description for the "Confirm document changes" dialog. */
  'dialog.confirm-document-changes.description':
    'Bu belge Canvas ile uyumlu olacak şekilde güncellenmelidir.\nBu işlem kapsamında mevcut içerik düzenlenebilir veya kaldırılabilir.',
  /** The description for the "Confirm document changes" dialog footer. */
  'dialog.confirm-document-changes.footer-description':
    "Canvas'tan istediğiniz zaman bağlantıyı kesebilirsiniz",
  /** The title for the "Confirm document changes" dialog. */
  'dialog.confirm-document-changes.title': 'Belge değişikliklerini onayla',
  /** The text for the Link to Canvas dialog when there is a error. */
  'dialog.link-to-canvas.error': "Canvas'a bağlantı kurulamadı",
  /** The text for the "Link to Canvas" dialog when the document is being redirected. */
  'dialog.link-to-canvas.redirecting': "Bağlantıyı tamamlamak için sizi Canvas'a yönlendiriyor...",
  /** The title for the "Link to Canvas" dialog. */
  'dialog.link-to-canvas.title': "Canvas'a Bağlantı Kur",
  /** The text for the "Link to Canvas" dialog when the document is being validated. */
  'dialog.link-to-canvas.validating': 'Doğrulanıyor',
  /** The text for the "Unlink from Canvas" dialog cancel button. */
  'dialog.unlink-from-canvas.cancel': 'İptal',
  /** The text for the "Unlink from Canvas" dialog description. */
  'dialog.unlink-from-canvas.description':
    "Bir kez bağlantısı kesildikten sonra, burada düzenlenebilir ve Canvas'taki gelecekteki düzenlemeler bu belgeyle otomatik olarak eşleşmeyecektir.",
  /** The text for the "Unlink from Canvas" dialog error message. */
  'dialog.unlink-from-canvas.error': "Canvas'tan bağlantı kesilemedi",
  /** The text for the "Unlink from Canvas" dialog success message. */
  'dialog.unlink-from-canvas.success': "Canvas'tan bağlantı kesildi",
  /** The title for the "Unlink from Canvas" dialog. */
  'dialog.unlink-from-canvas.title': "Canvas'tan Bağlantıyı Kaldır",
  /** The text for the "Unlink from Canvas" dialog unlink button. */
  'dialog.unlink-from-canvas.unlink-action': 'Şimdi bağlantıyı kes',
  /** The text for the "Unlink from Canvas" dialog when the document is being unlinked. */
  'dialog.unlink-from-canvas.unlinking':
    "<strong>“{{documentTitle}}”</strong> adlı belgenin Canvas'tan bağlantısını kesiyorsunuz.",

  /** The text for the "Navigate to Canvas" dialog error message. */
  'navigate-to-canvas-doc.error.missing-permissions': "Canvas'a gitmek için gerekli izinler eksik",
})
