import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Text in badge above header in Create Link info popover */
  'create-link-info-popover.eyebrow-badge': 'Accesso anticipato',
  /** Text above header in Create Link info popover */
  'create-link-info-popover.eyebrow-title': 'Sanity Create',
  /** Header in Create Link info popover */
  'create-link-info-popover.header': 'Autori guidati dalle idee',
  /** Informational text in Create Link info popover */
  'create-link-info-popover.text':
    "Scrivi naturalmente in un editor potenziato dall'AI. I tuoi contenuti si mappano automaticamente ai campi dello Studio mentre digiti.",

  /** Tooltip for Create Link button */
  'create-link-info.tooltip': 'Scopri di più',

  /** Edit in Create button text */
  'edit-in-create-button.text': 'Modifica con Sanity Create',

  /** CTA in "Start writing in Create" dialog: Learn more */
  'start-in-create-dialog.cta.learn-more': 'Scopri di più',

  /** Text for the document pane banner informing users that the document is linked to Sanity Create */
  'studio-create-link-banner.text': 'Questo documento è collegato a Sanity Create',

  /** Unlink document from Sanity Create button text */
  'unlink-from-create-button.text': 'Scollega',

  /** Unlink from Create dialog: Cancel button text */
  'unlink-from-create-dialog.cancel.text': 'Annulla',
  /** Unlink from Create dialog: Document title used if no other title can be determined */
  'unlink-from-create-dialog.document.untitled.text': 'Senza titolo',
  /** Unlink from Create dialog – first informational paragraph */
  'unlink-from-create-dialog.first-paragraph':
    'Stai scollegando “<strong>{{title}}</strong>” da Sanity Create così può essere modificato qui.',
  /** Unlink from Create dialog header */
  'unlink-from-create-dialog.header': 'Passare alla modifica nello Studio?',
  /** Unlink from Create dialog – second informational paragraph */
  'unlink-from-create-dialog.second-paragraph':
    'Mantieni il tuo contenuto in entrambi i posti. Qualsiasi nuova modifica in Sanity Create smetterà di sincronizzarsi con questo Studio.',
  /** Unlink from Create dialog: Unlink button text */
  'unlink-from-create-dialog.unlink.text': 'Scollega ora',
})
