import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Text in badge above header in Create Link info popover */
  'create-link-info-popover.eyebrow-badge': 'Tidlig adgang',
  /** Text above header in Create Link info popover */
  'create-link-info-popover.eyebrow-title': 'Sanity Create',
  /** Header in Create Link info popover */
  'create-link-info-popover.header': 'Idé-først forfatterskab',
  /** Informational text in Create Link info popover */
  'create-link-info-popover.text':
    'Skriv naturligt i en AI-drevet editor. Dit indhold kortlægges automatisk til Studio-felter, mens du skriver.',

  /** Tooltip for Create Link button */
  'create-link-info.tooltip': 'Lær mere',

  /** Edit in Create button text */
  'edit-in-create-button.text': 'Rediger med Sanity Create',

  /** CTA in "Start writing in Create" dialog: Learn more */
  'start-in-create-dialog.cta.learn-more': 'Lær mere',

  /** Text for the document pane banner informing users that the document is linked to Sanity Create */
  'studio-create-link-banner.text': 'Dette dokument er linket til Sanity Create',

  /** Unlink document from Sanity Create button text */
  'unlink-from-create-button.text': 'Fjern link',

  /** Unlink from Create dialog: Cancel button text */
  'unlink-from-create-dialog.cancel.text': 'Annuller',
  /** Unlink from Create dialog: Document title used if no other title can be determined */
  'unlink-from-create-dialog.document.untitled.text': 'Uden titel',
  /** Unlink from Create dialog – first informational paragraph */
  'unlink-from-create-dialog.first-paragraph':
    'Du fjerner linket til “<strong>{{title}}</strong>” fra Sanity Create, så det kan redigeres her.',
  /** Unlink from Create dialog header */
  'unlink-from-create-dialog.header': 'Skift redigering til Studio?',
  /** Unlink from Create dialog – second informational paragraph */
  'unlink-from-create-dialog.second-paragraph':
    'Du beholder dit indhold begge steder. Eventuelle nye ændringer i Sanity Create vil stoppe med at synkronisere til dette Studio.',
  /** Unlink from Create dialog: Unlink button text */
  'unlink-from-create-dialog.unlink.text': 'Fjern link nu',
})
