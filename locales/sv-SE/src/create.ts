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

  /** Details for the "Linking in progress" dialog */
  'linking-in-progress-dialog.details':
    'När länkningen är klar kommer dina redigeringar att visas här i realtid.',
  /** Header of the "Linking in progress" dialog */
  'linking-in-progress-dialog.header': 'Länkar till Sanity Create',
  /** Lede text for the "Linking in progress" dialog */
  'linking-in-progress-dialog.lede':
    'Gå tillbaka till Sanity Create. Ditt dokument kommer att synkroniseras automatiskt (tar vanligtvis några sekunder).',
  /** "Linking in progress" troubleshooting button title */
  'linking-in-progress-dialog.troubleshooting.button.title': 'Länkning försenad?',
  /** "Linking in progress" troubleshooting content */
  'linking-in-progress-dialog.troubleshooting.content':
    'Kontrollera om ditt Sanity Create-fönster fortfarande är öppet, eller om processen verkar vara fast. Om problemen kvarstår, prova att uppdatera Studion och försök igen.',

  /** "Start in Sanity Create" action button text */
  'start-in-create-action.label': 'Börja i Sanity Create',

  /** CTA in "Start writing in Create" dialog: Continue to create */
  'start-in-create-dialog.cta.continue': 'Fortsätt',
  /** CTA in "Start writing in Create" dialog: Learn more */
  'start-in-create-dialog.cta.learn-more': 'Läs mer',
  /** The details on what "Start writing in Create" implies */
  'start-in-create-dialog.details':
    'Detta öppnas i ett nytt fönster, länkat direkt till detta dokument.',
  /** Text for checkbox in "Start writing in Create" dialog for disabling the dialog in the future */
  'start-in-create-dialog.dont-remind-me-checkbox': 'Påminn mig inte igen',
  /** Toast error message when we dont have a resolved Sanity Create url*/
  'start-in-create-dialog.error-toast.unresolved-url':
    'Det går inte att fastställa URL för Sanity Create.',
  /** Header of the "Start writing in Create" dialog */
  'start-in-create-dialog.header': 'Skriv naturligt, publicera strukturerat',
  /** The lede text in the "Start writing in Create" dialog */
  'start-in-create-dialog.lede':
    'Skapa innehåll på ditt sätt i en AI-driven redigerare. Ditt skrivande kartläggs automatiskt till rätt fält i Sanity Studio när du skriver.',

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
