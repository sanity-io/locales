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

  /** CTA in "Start writing in Create" dialog: Learn more */
  'start-in-create-dialog.cta.learn-more': 'Lær mer',

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
