import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Text in badge above header in Create Link info popover */
  'create-link-info-popover.eyebrow-badge': 'Tidlig tilgang',
  /** Text above header in Create Link info popover */
  'create-link-info-popover.eyebrow-title': 'Sanity Create',
  /** Header in Create Link info popover */
  'create-link-info-popover.header': 'Idea-first authoring',
  /** Informational text in Create Link info popover */
  'create-link-info-popover.text':
    'Skriv naturlig på en AI-drevet flate. Innholdet ditt kartlegges automatisk til Studio-feltene mens du skriver.',

  /** Tooltip for Create Link button */
  'create-link-info.tooltip': 'Lær mer',

  /** Edit in Create button text */
  'edit-in-create-button.text': 'Rediger med Sanity Create',

  /** Details for the "Linking in progress" dialog */
  'linking-in-progress-dialog.details':
    'Når koblingen er etablert, vil redigeringene dine vises her i sanntid.',
  /** Header of the "Linking in progress" dialog */
  'linking-in-progress-dialog.header': 'Kobler til Sanity Create',
  /** Lede text for the "Linking in progress" dialog */
  'linking-in-progress-dialog.lede':
    'Gå tilbake til Sanity Create. Dokumentet ditt vil synkroniseres automatisk (tar vanligvis noen sekunder).',
  /** "Linking in progress" troubleshooting button title */
  'linking-in-progress-dialog.troubleshooting.button.title': 'Treg kobling?',
  /** "Linking in progress" troubleshooting content */
  'linking-in-progress-dialog.troubleshooting.content':
    'Sjekk om ditt Sanity Create-vindu fortsatt er åpent, eller om prosessen ser ut til å være fast. Hvis problemene vedvarer, prøv å oppdatere Studio og prøv igjen.',

  /** Subtitle of the "Start writing in Create" banner */
  'start-in-create-banner.subtitle':
    'En fri form, AI-drevet redaktør som synkroniseres direkte med Studio-dokumentene dine.',
  /** Header of the "Start writing in Create" banner */
  'start-in-create-banner.title': 'Kom i gang med Sanity Create',
  /** Header badge of the "Start writing in Create" banner */
  'start-in-create-banner.title-badge': 'Tidlig tilgang',

  /** CTA in "Start writing in Create" dialog: Learn more */
  'start-in-create-dialog.cta.learn-more': 'Lær mer',
  /** Toast error message when we dont have a resolved Sanity Create url*/
  'start-in-create-dialog.error-toast.unresolved-url': 'Kunne ikke finne URL for Sanity Create.',

  /** "Start in Sanity Create" link button text */
  'start-in-create-link.label': 'Start i Create',

  /** Text for the document pane banner informing users that the document is linked to Sanity Create */
  'studio-create-link-banner.text': 'Dette dokumentet er koblet til Sanity Create',

  /** Unlink document from Sanity Create button text */
  'unlink-from-create-button.text': 'Fjern kobling',

  /** Unlink from Create dialog: Cancel button text */
  'unlink-from-create-dialog.cancel.text': 'Avbryt',
  /** Unlink from Create dialog: Document title used if no other title can be determined */
  'unlink-from-create-dialog.document.untitled.text': 'Uten tittel',
  /** Unlink from Create dialog – first informational paragraph */
  'unlink-from-create-dialog.first-paragraph':
    'Du fjerner koblingen til “<strong>{{title}}</strong>” fra Sanity Create slik at det kan redigeres her.',
  /** Unlink from Create dialog header */
  'unlink-from-create-dialog.header': 'Bytte redigering til Studio?',
  /** Unlink from Create dialog – second informational paragraph */
  'unlink-from-create-dialog.second-paragraph':
    'Du vil beholde innholdet ditt begge steder. Eventuelle nye endringer i Sanity Create vil slutte å synkronisere til dette Studioet.',
  /** Unlink from Create dialog: Unlink button text */
  'unlink-from-create-dialog.unlink.text': 'Koble fra nå',
})
