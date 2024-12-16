import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Text in badge above header in Create Link info popover */
  'create-link-info-popover.eyebrow-badge': 'Vroege toegang',
  /** Text above header in Create Link info popover */
  'create-link-info-popover.eyebrow-title': 'Sanity Create',
  /** Header in Create Link info popover */
  'create-link-info-popover.header': 'Idee-eerst auteurschap',
  /** Informational text in Create Link info popover */
  'create-link-info-popover.text':
    'Schrijf op natuurlijke wijze in een door AI aangedreven editor. Je inhoud wordt automatisch gekoppeld aan Studio velden terwijl je typt.',

  /** Tooltip for Create Link button */
  'create-link-info.tooltip': 'Meer leren',

  /** Edit in Create button text */
  'edit-in-create-button.text': 'Bewerk met Sanity Create',

  /** Details for the "Linking in progress" dialog */
  'linking-in-progress-dialog.details':
    'Eenmaal gekoppeld, zullen je wijzigingen hier in realtime verschijnen.',
  /** Header of the "Linking in progress" dialog */
  'linking-in-progress-dialog.header': 'Koppelen aan Sanity Create',
  /** Lede text for the "Linking in progress" dialog */
  'linking-in-progress-dialog.lede':
    'Ga terug naar Sanity Create. Je document zal automatisch synchroniseren (duurt meestal een paar seconden).',
  /** "Linking in progress" troubleshooting button title */
  'linking-in-progress-dialog.troubleshooting.button.title': 'Koppelen vertraagd?',
  /** "Linking in progress" troubleshooting content */
  'linking-in-progress-dialog.troubleshooting.content':
    'Controleer of je Sanity Create venster nog open is, of als het proces vast lijkt te zitten. Als problemen aanhouden, probeer de Studio te verversen en probeer opnieuw.',

  /** Subtitle of the "Start writing in Create" banner */
  'start-in-create-banner.subtitle':
    'Een vrije vorm, AI-gestuurde editor die direct synchroniseert met uw Studio-documenten.',
  /** Header of the "Start writing in Create" banner */
  'start-in-create-banner.title': 'Begin met Sanity Create',
  /** Header badge of the "Start writing in Create" banner */
  'start-in-create-banner.title-badge': 'Vroege toegang',

  /** CTA in "Start writing in Create" dialog: Learn more */
  'start-in-create-dialog.cta.learn-more': 'Meer leren',
  /** Toast error message when we dont have a resolved Sanity Create url*/
  'start-in-create-dialog.error-toast.unresolved-url': 'Kan de URL van Sanity Create niet bepalen.',

  /** "Start in Sanity Create" link button text */
  'start-in-create-link.label': 'Begin in Create',

  /** Text for the document pane banner informing users that the document is linked to Sanity Create */
  'studio-create-link-banner.text': 'Dit document is gekoppeld aan Sanity Create',

  /** Unlink document from Sanity Create button text */
  'unlink-from-create-button.text': 'Ontkoppelen',

  /** Unlink from Create dialog: Cancel button text */
  'unlink-from-create-dialog.cancel.text': 'Annuleren',
  /** Unlink from Create dialog: Document title used if no other title can be determined */
  'unlink-from-create-dialog.document.untitled.text': 'Geen titel',
  /** Unlink from Create dialog – first informational paragraph */
  'unlink-from-create-dialog.first-paragraph':
    'Je ontkoppelt “<strong>{{title}}</strong>” van Sanity Create zodat het hier bewerkt kan worden.',
  /** Unlink from Create dialog header */
  'unlink-from-create-dialog.header': 'Overschakelen naar bewerken in Studio?',
  /** Unlink from Create dialog – second informational paragraph */
  'unlink-from-create-dialog.second-paragraph':
    'U behoudt uw inhoud op beide plaatsen. Nieuwe wijzigingen in Sanity Create worden niet meer gesynchroniseerd met deze Studio.',
  /** Unlink from Create dialog: Unlink button text */
  'unlink-from-create-dialog.unlink.text': 'Nu ontkoppelen',
})
