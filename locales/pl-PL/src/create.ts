import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Text in badge above header in Create Link info popover */
  'create-link-info-popover.eyebrow-badge': 'Dostęp wczesny',
  /** Text above header in Create Link info popover */
  'create-link-info-popover.eyebrow-title': 'Sanity Create',
  /** Header in Create Link info popover */
  'create-link-info-popover.header': 'Tworzenie zorientowane na pomysły',
  /** Informational text in Create Link info popover */
  'create-link-info-popover.text':
    'Pisz naturalnie w edytorze wspieranym przez AI. Twoja treść automatycznie mapuje się na pola Studio, gdy piszesz.',

  /** Tooltip for Create Link button */
  'create-link-info.tooltip': 'Dowiedz się więcej',

  /** Edit in Create button text */
  'edit-in-create-button.text': 'Edytuj za pomocą Sanity Create',

  /** Details for the "Linking in progress" dialog */
  'linking-in-progress-dialog.details':
    'Po połączeniu twoje zmiany będą się tutaj pojawiać w czasie rzeczywistym.',
  /** Header of the "Linking in progress" dialog */
  'linking-in-progress-dialog.header': 'Łączenie z Sanity Create',
  /** Lede text for the "Linking in progress" dialog */
  'linking-in-progress-dialog.lede':
    'Wróć do Sanity Create. Twój dokument zostanie automatycznie zsynchronizowany (zazwyczaj zajmuje to kilka sekund).',
  /** "Linking in progress" troubleshooting button title */
  'linking-in-progress-dialog.troubleshooting.button.title': 'Opóźnienie w łączeniu?',
  /** "Linking in progress" troubleshooting content */
  'linking-in-progress-dialog.troubleshooting.content':
    'Sprawdź, czy okno Sanity Create jest nadal otwarte, lub czy proces wydaje się być zablokowany. Jeśli problem będzie się powtarzał, odśwież Studio i spróbuj ponownie.',

  /** "Start in Sanity Create" action button text */
  'start-in-create-action.label': 'Rozpocznij w Sanity Create',

  /** CTA in "Start writing in Create" dialog: Continue to create */
  'start-in-create-dialog.cta.continue': 'Kontynuuj',
  /** CTA in "Start writing in Create" dialog: Learn more */
  'start-in-create-dialog.cta.learn-more': 'Dowiedz się więcej',
  /** The details on what "Start writing in Create" implies */
  'start-in-create-dialog.details':
    'Otworzy się to w nowym oknie, bezpośrednio połączonym z tym dokumentem.',
  /** Text for checkbox in "Start writing in Create" dialog for disabling the dialog in the future */
  'start-in-create-dialog.dont-remind-me-checkbox': 'Nie przypominaj mi ponownie',
  /** Toast error message when we dont have a resolved Sanity Create url*/
  'start-in-create-dialog.error-toast.unresolved-url':
    'Nie można określić adresu URL Sanity Create.',
  /** Header of the "Start writing in Create" dialog */
  'start-in-create-dialog.header': 'Pisz naturalnie, publikuj strukturalnie',
  /** The lede text in the "Start writing in Create" dialog */
  'start-in-create-dialog.lede':
    'Twórz treści po swojemu w edytorze wspieranym przez AI. Twoje pisanie automatycznie mapuje się na odpowiednie pola w Sanity Studio, gdy piszesz.',

  /** Text for the document pane banner informing users that the document is linked to Sanity Create */
  'studio-create-link-banner.text': 'Ten dokument jest połączony z Sanity Create',

  /** Unlink document from Sanity Create button text */
  'unlink-from-create-button.text': 'Odłącz',

  /** Unlink from Create dialog: Cancel button text */
  'unlink-from-create-dialog.cancel.text': 'Anuluj',
  /** Unlink from Create dialog: Document title used if no other title can be determined */
  'unlink-from-create-dialog.document.untitled.text': 'Bez tytułu',
  /** Unlink from Create dialog – first informational paragraph */
  'unlink-from-create-dialog.first-paragraph':
    'Odłączasz „<strong>{{title}}</strong>” od Sanity Create, aby można było go edytować tutaj.',
  /** Unlink from Create dialog header */
  'unlink-from-create-dialog.header': 'Przełączyć edycję do Studio?',
  /** Unlink from Create dialog – second informational paragraph */
  'unlink-from-create-dialog.second-paragraph':
    'Twoja zawartość zostanie zachowana w obu miejscach. Wszelkie nowe zmiany w Sanity Create przestaną być synchronizowane z tym Studio.',
  /** Unlink from Create dialog: Unlink button text */
  'unlink-from-create-dialog.unlink.text': 'Odłącz teraz',
})
