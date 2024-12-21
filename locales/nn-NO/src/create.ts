import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Text in badge above header in Create Link info popover */
  'create-link-info-popover.eyebrow-badge': 'Tidleg tilgang',
  /** Text above header in Create Link info popover */
  'create-link-info-popover.eyebrow-title': 'Sanity Create',
  /** Header in Create Link info popover */
  'create-link-info-popover.header': 'Idé-først forfattarskap',
  /** Informational text in Create Link info popover */
  'create-link-info-popover.text':
    'Skriv naturleg i ein AI-dreven redaktør. Innholdet ditt blir automatisk kartlagt til Studio-felt når du skriv.',

  /** Tooltip for Create Link button */
  'create-link-info.tooltip': 'Lær meir',

  /** Edit in Create button text */
  'edit-in-create-button.text': 'Rediger med Sanity Create',

  /** Details for the "Linking in progress" dialog */
  'linking-in-progress-dialog.details':
    'Når lenkinga er ferdig, vil redigeringane dine visast her i sanntid.',
  /** Header of the "Linking in progress" dialog */
  'linking-in-progress-dialog.header': 'Lenker til Sanity Create',
  /** Lede text for the "Linking in progress" dialog */
  'linking-in-progress-dialog.lede':
    'Gå tilbake til Sanity Create. Dokumentet ditt vil synkroniserast automatisk (vanlegvis tar det nokre sekund).',
  /** "Linking in progress" troubleshooting button title */
  'linking-in-progress-dialog.troubleshooting.button.title': 'Lenking forsinka?',
  /** "Linking in progress" troubleshooting content */
  'linking-in-progress-dialog.troubleshooting.content':
    'Sjekk om ditt Sanity Create-vindauge framleis er opent, eller om prosessen ser ut til å ha stoppa opp. Om problem vedvarer, prøv å oppfriske Studio og prøv igjen.',

  /** Subtitle of the "Start writing in Create" banner */
  'start-in-create-banner.subtitle':
    'Ein fri-form, AI-dreven redigerar som synkroniserer direkte med dokumenta dine i Studio.',
  /** Header of the "Start writing in Create" banner */
  'start-in-create-banner.title': 'Kom i gang med Sanity Create',
  /** Header badge of the "Start writing in Create" banner */
  'start-in-create-banner.title-badge': 'Tidleg tilgang',

  /** CTA in "Start writing in Create" dialog: Learn more */
  'start-in-create-dialog.cta.learn-more': 'Lær meir',
  /** Toast error message when we dont have a resolved Sanity Create url*/
  'start-in-create-dialog.error-toast.unresolved-url': 'Kan ikkje fastsetje Sanity Create URL.',

  /** "Start in Sanity Create" link button text */
  'start-in-create-link.label': 'Start i Create',

  /** Text for the document pane banner informing users that the document is linked to Sanity Create */
  'studio-create-link-banner.text': 'Dette dokumentet er lenka til Sanity Create',

  /** Unlink document from Sanity Create button text */
  'unlink-from-create-button.text': 'Fjern lenke',

  /** Unlink from Create dialog: Cancel button text */
  'unlink-from-create-dialog.cancel.text': 'Avbryt',
  /** Unlink from Create dialog: Document title used if no other title can be determined */
  'unlink-from-create-dialog.document.untitled.text': 'Utan tittel',
  /** Unlink from Create dialog – first informational paragraph */
  'unlink-from-create-dialog.first-paragraph':
    'Du fjernar lenka for “<strong>{{title}}</strong>” frå Sanity Create slik at det kan redigerast her.',
  /** Unlink from Create dialog header */
  'unlink-from-create-dialog.header': 'Bytte redigering til Studio?',
  /** Unlink from Create dialog – second informational paragraph */
  'unlink-from-create-dialog.second-paragraph':
    'Du vil behalde innhaldet begge stader. Alle nye endringar i Sanity Create vil stoppe å synkronisere til dette Studioet.',
  /** Unlink from Create dialog: Unlink button text */
  'unlink-from-create-dialog.unlink.text': 'Koble frå no',
})
