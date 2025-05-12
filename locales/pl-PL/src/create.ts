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

  /** CTA in "Start writing in Create" dialog: Learn more */
  'start-in-create-dialog.cta.learn-more': 'Dowiedz się więcej',

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
