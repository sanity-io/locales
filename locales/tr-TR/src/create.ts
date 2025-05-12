import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Text in badge above header in Create Link info popover */
  'create-link-info-popover.eyebrow-badge': 'Erken erişim',
  /** Text above header in Create Link info popover */
  'create-link-info-popover.eyebrow-title': 'Sanity Create',
  /** Header in Create Link info popover */
  'create-link-info-popover.header': 'Fikir öncelikli yazarlık',
  /** Informational text in Create Link info popover */
  'create-link-info-popover.text':
    'Yapay zeka destekli bir editörde doğal olarak yazın. Yazdıkça içeriğiniz otomatik olarak Studio alanlarına eşlenir.',

  /** Tooltip for Create Link button */
  'create-link-info.tooltip': 'Daha fazla öğren',

  /** Edit in Create button text */
  'edit-in-create-button.text': 'Sanity Create ile Düzenle',

  /** CTA in "Start writing in Create" dialog: Learn more */
  'start-in-create-dialog.cta.learn-more': 'Daha fazla öğren',

  /** Text for the document pane banner informing users that the document is linked to Sanity Create */
  'studio-create-link-banner.text': 'Bu belge Sanity Create ile bağlantılıdır',

  /** Unlink document from Sanity Create button text */
  'unlink-from-create-button.text': 'Bağlantıyı kaldır',

  /** Unlink from Create dialog: Cancel button text */
  'unlink-from-create-dialog.cancel.text': 'İptal',
  /** Unlink from Create dialog: Document title used if no other title can be determined */
  'unlink-from-create-dialog.document.untitled.text': 'Başlıksız',
  /** Unlink from Create dialog – first informational paragraph */
  'unlink-from-create-dialog.first-paragraph':
    '“<strong>{{title}}</strong>” adlı belgenin Sanity Create ile olan bağlantısını kaldırıyorsunuz, böylece burada düzenlenebilir.',
  /** Unlink from Create dialog header */
  'unlink-from-create-dialog.header': "Düzenlemeyi Studio'ya geçir?",
  /** Unlink from Create dialog – second informational paragraph */
  'unlink-from-create-dialog.second-paragraph':
    "İçeriğiniz her iki yerde de korunacak. Sanity Create'teki yeni değişiklikler bu Stüdyo ile senkronize edilmeyecek.",
  /** Unlink from Create dialog: Unlink button text */
  'unlink-from-create-dialog.unlink.text': 'Şimdi bağlantıyı kes',
})
