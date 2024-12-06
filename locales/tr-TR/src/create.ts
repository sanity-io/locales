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

  /** Details for the "Linking in progress" dialog */
  'linking-in-progress-dialog.details':
    'Bağlandıktan sonra, düzenlemeleriniz burada gerçek zamanlı olarak görünecek.',
  /** Header of the "Linking in progress" dialog */
  'linking-in-progress-dialog.header': "Sanity Create'e Bağlanıyor",
  /** Lede text for the "Linking in progress" dialog */
  'linking-in-progress-dialog.lede':
    "Sanity Create'e geri dönün. Belgeniz otomatik olarak senkronize olacak (genellikle birkaç saniye sürer).",
  /** "Linking in progress" troubleshooting button title */
  'linking-in-progress-dialog.troubleshooting.button.title': 'Bağlantı gecikti mi?',
  /** "Linking in progress" troubleshooting content */
  'linking-in-progress-dialog.troubleshooting.content':
    "Sanity Create pencerenizin hala açık olup olmadığını kontrol edin veya sürecin takılıp takılmadığını kontrol edin. Sorunlar devam ederse, Studio'yu yenileyin ve tekrar deneyin.",

  /** "Start in Sanity Create" action button text */
  'start-in-create-action.label': "Sanity Create'de Başla",

  /** CTA in "Start writing in Create" dialog: Continue to create */
  'start-in-create-dialog.cta.continue': 'Devam et',
  /** CTA in "Start writing in Create" dialog: Learn more */
  'start-in-create-dialog.cta.learn-more': 'Daha fazla öğren',
  /** The details on what "Start writing in Create" implies */
  'start-in-create-dialog.details': 'Bu, bu belgeye doğrudan bağlı yeni bir pencerede açılır.',
  /** Text for checkbox in "Start writing in Create" dialog for disabling the dialog in the future */
  'start-in-create-dialog.dont-remind-me-checkbox': 'Bir daha hatırlatma',
  /** Toast error message when we dont have a resolved Sanity Create url*/
  'start-in-create-dialog.error-toast.unresolved-url': "Sanity Create URL'si belirlenemiyor.",
  /** Header of the "Start writing in Create" dialog */
  'start-in-create-dialog.header': 'Doğal yaz, yapılandırılmış yayınla',
  /** The lede text in the "Start writing in Create" dialog */
  'start-in-create-dialog.lede':
    'Yapay zeka destekli bir editörde kendi yolunuzda içerik oluşturun. Yazdıklarınız yazarken doğru alanlara otomatik olarak eşlenir.',

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
