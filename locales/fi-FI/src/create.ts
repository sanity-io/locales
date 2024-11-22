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

  /** Details for the "Linking in progress" dialog */
  'linking-in-progress-dialog.details':
    'Kun linkitys on valmis, muokkauksesi näkyvät täällä reaaliajassa.',
  /** Header of the "Linking in progress" dialog */
  'linking-in-progress-dialog.header': 'Linkitetään Sanity Createen',
  /** Lede text for the "Linking in progress" dialog */
  'linking-in-progress-dialog.lede':
    'Palaa takaisin Sanity Createen. Dokumenttisi synkronoituu automaattisesti (yleensä vie muutaman sekunnin).',
  /** "Linking in progress" troubleshooting button title */
  'linking-in-progress-dialog.troubleshooting.button.title': 'Linkityksessä viivästyksiä?',
  /** "Linking in progress" troubleshooting content */
  'linking-in-progress-dialog.troubleshooting.content':
    'Tarkista, onko Sanity Create -ikkunasi edelleen auki, tai vaikuttaako prosessi jumittuneelta. Jos ongelmia jatkuu, yritä päivittää Studio ja yritä uudelleen.',

  /** "Start in Sanity Create" action button text */
  'start-in-create-action.label': 'Aloita Sanity Createssa',

  /** CTA in "Start writing in Create" dialog: Continue to create */
  'start-in-create-dialog.cta.continue': 'Jatka',
  /** CTA in "Start writing in Create" dialog: Learn more */
  'start-in-create-dialog.cta.learn-more': 'Lue lisää',
  /** The details on what "Start writing in Create" implies */
  'start-in-create-dialog.details':
    'Tämä avautuu uudessa ikkunassa, linkitettynä suoraan tähän dokumenttiin.',
  /** Text for checkbox in "Start writing in Create" dialog for disabling the dialog in the future */
  'start-in-create-dialog.dont-remind-me-checkbox': 'Älä muistuta minua uudelleen',
  /** Toast error message when we dont have a resolved Sanity Create url*/
  'start-in-create-dialog.error-toast.unresolved-url':
    'Sanity Create URL-osoitetta ei voitu määrittää.',
  /** Header of the "Start writing in Create" dialog */
  'start-in-create-dialog.header': 'Kirjoita luonnollisesti, julkaise rakenteisesti',
  /** The lede text in the "Start writing in Create" dialog */
  'start-in-create-dialog.lede':
    'Luo sisältöä omalla tavallasi tekoälyä hyödyntävässä editorissa. Kirjoituksesi kartoittuvat automaattisesti oikeisiin kenttiin Sanity Studiossa kirjoittaessasi.',

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
