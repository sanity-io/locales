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

  /** Details for the "Linking in progress" dialog */
  'linking-in-progress-dialog.details':
    'Una volta collegato, le tue modifiche appariranno qui in tempo reale.',
  /** Header of the "Linking in progress" dialog */
  'linking-in-progress-dialog.header': 'Collegamento a Sanity Create',
  /** Lede text for the "Linking in progress" dialog */
  'linking-in-progress-dialog.lede':
    'Torna a Sanity Create. Il tuo documento si sincronizzerà automaticamente (di solito ci vogliono pochi secondi).',
  /** "Linking in progress" troubleshooting button title */
  'linking-in-progress-dialog.troubleshooting.button.title': 'Collegamento ritardato?',
  /** "Linking in progress" troubleshooting content */
  'linking-in-progress-dialog.troubleshooting.content':
    'Controlla se la finestra di Sanity Create è ancora aperta, o se il processo sembra bloccato. Se i problemi persistono, prova ad aggiornare lo Studio e riprova.',

  /** Subtitle of the "Start writing in Create" banner */
  'start-in-create-banner.subtitle':
    'Un editor libero e alimentato da AI che si sincronizza direttamente con i tuoi documenti Studio.',
  /** Header of the "Start writing in Create" banner */
  'start-in-create-banner.title': 'Inizia con Sanity Create',
  /** Header badge of the "Start writing in Create" banner */
  'start-in-create-banner.title-badge': 'Accesso anticipato',

  /** CTA in "Start writing in Create" dialog: Learn more */
  'start-in-create-dialog.cta.learn-more': 'Scopri di più',
  /** Toast error message when we dont have a resolved Sanity Create url*/
  'start-in-create-dialog.error-toast.unresolved-url':
    "Impossibile determinare l'URL di Sanity Create.",

  /** "Start in Sanity Create" link button text */
  'start-in-create-link.label': 'Inizia in Create',

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
