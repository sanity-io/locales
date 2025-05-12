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

  /** Details for the "Linking in progress" dialog */
  'linking-in-progress-dialog.details':
    'Når linket er etableret, vil dine redigeringer vises her i realtid.',
  /** Header of the "Linking in progress" dialog */
  'linking-in-progress-dialog.header': 'Linker til Sanity Create',
  /** Lede text for the "Linking in progress" dialog */
  'linking-in-progress-dialog.lede':
    'Gå tilbage til Sanity Create. Dit dokument vil synkronisere automatisk (tager normalt et par sekunder).',
  /** "Linking in progress" troubleshooting button title */
  'linking-in-progress-dialog.troubleshooting.button.title': 'Link forsinket?',
  /** "Linking in progress" troubleshooting content */
  'linking-in-progress-dialog.troubleshooting.content':
    'Kontroller, om dit Sanity Create-vindue stadig er åbent, eller om processen ser ud til at være gået i stå. Hvis problemerne fortsætter, prøv at opdatere Studio og prøv igen.',

  /** Subtitle of the "Start writing in Create" banner */
  'start-in-create-banner.subtitle':
    'En fri-form, AI-drevet editor, der synkroniserer direkte med dine Studio-dokumenter.',
  /** Header of the "Start writing in Create" banner */
  'start-in-create-banner.title': 'Kom i gang med Sanity Create',
  /** Header badge of the "Start writing in Create" banner */
  'start-in-create-banner.title-badge': 'Tidlig adgang',

  /** CTA in "Start writing in Create" dialog: Learn more */
  'start-in-create-dialog.cta.learn-more': 'Lær mere',
  /** Toast error message when we dont have a resolved Sanity Create url*/
  'start-in-create-dialog.error-toast.unresolved-url': 'Kan ikke fastslå Sanity Create URL.',

  /** "Start in Sanity Create" link button text */
  'start-in-create-link.label': 'Start i Create',

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
