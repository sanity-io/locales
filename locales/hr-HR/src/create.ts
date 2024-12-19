import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Text in badge above header in Create Link info popover */
  'create-link-info-popover.eyebrow-badge': 'Rani pristup',
  /** Text above header in Create Link info popover */
  'create-link-info-popover.eyebrow-title': 'Sanity Create',
  /** Header in Create Link info popover */
  'create-link-info-popover.header': 'Autorstvo vođeno idejom',
  /** Informational text in Create Link info popover */
  'create-link-info-popover.text':
    'Pišite prirodno u AI-pokretanom uređivaču. Vaš sadržaj se automatski mapira na polja Studija dok tipkate.',

  /** Tooltip for Create Link button */
  'create-link-info.tooltip': 'Saznajte više',

  /** Edit in Create button text */
  'edit-in-create-button.text': 'Uredite s Sanity Create',

  /** Details for the "Linking in progress" dialog */
  'linking-in-progress-dialog.details':
    'Jednom kada se povežete, vaše izmjene će se ovdje pojaviti u stvarnom vremenu.',
  /** Header of the "Linking in progress" dialog */
  'linking-in-progress-dialog.header': 'Povezivanje sa Sanity Create',
  /** Lede text for the "Linking in progress" dialog */
  'linking-in-progress-dialog.lede':
    'Vratite se na Sanity Create. Vaš dokument će se automatski sinkronizirati (obično traje nekoliko sekundi).',
  /** "Linking in progress" troubleshooting button title */
  'linking-in-progress-dialog.troubleshooting.button.title': 'Povezivanje kasni?',
  /** "Linking in progress" troubleshooting content */
  'linking-in-progress-dialog.troubleshooting.content':
    'Provjerite je li vaš prozor Sanity Create još uvijek otvoren, ili ako se proces čini zaglavljenim. Ako problemi i dalje postoje, pokušajte osvježiti Studio i pokušajte ponovno.',

  /** Subtitle of the "Start writing in Create" banner */
  'start-in-create-banner.subtitle':
    'Slobodno oblikovan, AI-pokretan urednik koji se izravno sinkronizira s vašim Studio dokumentima.',
  /** Header of the "Start writing in Create" banner */
  'start-in-create-banner.title': 'Započnite s Sanity Create',
  /** Header badge of the "Start writing in Create" banner */
  'start-in-create-banner.title-badge': 'Rani pristup',

  /** CTA in "Start writing in Create" dialog: Learn more */
  'start-in-create-dialog.cta.learn-more': 'Saznajte više',
  /** Toast error message when we dont have a resolved Sanity Create url*/
  'start-in-create-dialog.error-toast.unresolved-url': 'Nije moguće odrediti URL za Sanity Create.',

  /** "Start in Sanity Create" link button text */
  'start-in-create-link.label': 'Započnite u Create',

  /** Text for the document pane banner informing users that the document is linked to Sanity Create */
  'studio-create-link-banner.text': 'Ovaj dokument je povezan sa Sanity Create',

  /** Unlink document from Sanity Create button text */
  'unlink-from-create-button.text': 'Odspojite',

  /** Unlink from Create dialog: Cancel button text */
  'unlink-from-create-dialog.cancel.text': 'Odustani',
  /** Unlink from Create dialog: Document title used if no other title can be determined */
  'unlink-from-create-dialog.document.untitled.text': 'Bez naslova',
  /** Unlink from Create dialog – first informational paragraph */
  'unlink-from-create-dialog.first-paragraph':
    'Odspajate “<strong>{{title}}</strong>” od Sanity Create kako bi se moglo uređivati ovdje.',
  /** Unlink from Create dialog header */
  'unlink-from-create-dialog.header': 'Prebacite uređivanje na Studio?',
  /** Unlink from Create dialog – second informational paragraph */
  'unlink-from-create-dialog.second-paragraph':
    'Sadržaj će vam ostati na oba mjesta. Bilo kakve nove promjene u Sanity Create prestati će se sinkronizirati s ovim Studiom.',
  /** Unlink from Create dialog: Unlink button text */
  'unlink-from-create-dialog.unlink.text': 'Prekini vezu sada',
})
