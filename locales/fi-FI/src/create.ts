import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Text in badge above header in Create Link info popover */
  'create-link-info-popover.eyebrow-badge': 'Varhainen pääsy',
  /** Text above header in Create Link info popover */
  'create-link-info-popover.eyebrow-title': 'Sanity Create',
  /** Header in Create Link info popover */
  'create-link-info-popover.header': 'Idea-ensin kirjoittaminen',
  /** Informational text in Create Link info popover */
  'create-link-info-popover.text':
    'Kirjoita luonnollisesti tekoälyä hyödyntävässä editorissa. Sisältösi kartoittuu automaattisesti Studio-kenttiin kirjoittaessasi.',

  /** Tooltip for Create Link button */
  'create-link-info.tooltip': 'Lue lisää',

  /** Edit in Create button text */
  'edit-in-create-button.text': 'Muokkaa Sanity Creatella',

  /** CTA in "Start writing in Create" dialog: Learn more */
  'start-in-create-dialog.cta.learn-more': 'Lue lisää',

  /** Text for the document pane banner informing users that the document is linked to Sanity Create */
  'studio-create-link-banner.text': 'Tämä dokumentti on linkitetty Sanity Createen',

  /** Unlink document from Sanity Create button text */
  'unlink-from-create-button.text': 'Poista linkitys',

  /** Unlink from Create dialog: Cancel button text */
  'unlink-from-create-dialog.cancel.text': 'Peruuta',
  /** Unlink from Create dialog: Document title used if no other title can be determined */
  'unlink-from-create-dialog.document.untitled.text': 'Nimetön',
  /** Unlink from Create dialog – first informational paragraph */
  'unlink-from-create-dialog.first-paragraph':
    'Olet irrottamassa “<strong>{{title}}</strong>” Sanity Createsta, jotta sitä voidaan muokata täällä.',
  /** Unlink from Create dialog header */
  'unlink-from-create-dialog.header': 'Vaihda muokkaus Studioon?',
  /** Unlink from Create dialog – second informational paragraph */
  'unlink-from-create-dialog.second-paragraph':
    'Sisältösi säilyy molemmissa paikoissa. Kaikki uudet muutokset Sanity Create:ssa lakkaavat synkronoitumasta tähän Studioon.',
  /** Unlink from Create dialog: Unlink button text */
  'unlink-from-create-dialog.unlink.text': 'Katkaise linkitys nyt',
})
