import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Text in badge above header in Create Link info popover */
  'create-link-info-popover.eyebrow-badge': 'Tidig åtkomst',
  /** Text above header in Create Link info popover */
  'create-link-info-popover.eyebrow-title': 'Sanity Create',
  /** Header in Create Link info popover */
  'create-link-info-popover.header': 'Idé-först författande',
  /** Informational text in Create Link info popover */
  'create-link-info-popover.text':
    'Skriv naturligt i en AI-driven redigerare. Ditt innehåll kartläggs automatiskt till Studio-fält när du skriver.',

  /** Tooltip for Create Link button */
  'create-link-info.tooltip': 'Läs mer',

  /** Edit in Create button text */
  'edit-in-create-button.text': 'Redigera med Sanity Create',

  /** CTA in "Start writing in Create" dialog: Learn more */
  'start-in-create-dialog.cta.learn-more': 'Läs mer',

  /** Text for the document pane banner informing users that the document is linked to Sanity Create */
  'studio-create-link-banner.text': 'Detta dokument är länkat till Sanity Create',

  /** Unlink document from Sanity Create button text */
  'unlink-from-create-button.text': 'Avlänka',

  /** Unlink from Create dialog: Cancel button text */
  'unlink-from-create-dialog.cancel.text': 'Avbryt',
  /** Unlink from Create dialog: Document title used if no other title can be determined */
  'unlink-from-create-dialog.document.untitled.text': 'Namnlös',
  /** Unlink from Create dialog – first informational paragraph */
  'unlink-from-create-dialog.first-paragraph':
    'Du avlänkar “<strong>{{title}}</strong>” från Sanity Create så att det kan redigeras här.',
  /** Unlink from Create dialog header */
  'unlink-from-create-dialog.header': 'Byt redigering till Studio?',
  /** Unlink from Create dialog – second informational paragraph */
  'unlink-from-create-dialog.second-paragraph':
    'Du behåller ditt innehåll på båda ställena. Eventuella nya ändringar i Sanity Create kommer att sluta synkroniseras med denna Studio.',
  /** Unlink from Create dialog: Unlink button text */
  'unlink-from-create-dialog.unlink.text': 'Koppla från nu',
})
