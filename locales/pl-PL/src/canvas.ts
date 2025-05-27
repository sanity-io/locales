import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** The text for the "Edit in Canvas" action. */
  'action.edit-document': 'Edytuj w Canvas',
  /** The text for the "Link to Canvas" action. */
  'action.link-document': 'Połącz z Canvas',
  /** The text for the "Link to Canvas" action when the document is not yet resolved. */
  'action.link-document-disabled.initial-value-not-resolved':
    'Poczekaj, aż początkowe wartości dokumentu zostaną rozwiązane',
  /** The text for the "Link to Canvas" action when the user doesn't have permissions to link the document to Canvas. */
  'action.link-document-disabled.missing-permissions':
    'Nie masz uprawnień, aby połączyć ten dokument z Canvas',
  /** The text for the "Link to Canvas" action when the document is not in the dashboard. */
  'action.link-document-disabled.not-in-dashboard':
    'Otwórz ten dokument w Dashboard, aby połączyć z Canvas',
  /** The text for the "Link to Canvas" action when the document is a version document. */
  'action.link-document-disabled.version-document':
    'Dokumenty wersji nie są jeszcze obsługiwane w Canvas',
  /** The text for the "Unlink from Canvas" action. */
  'action.unlink-document': 'Odłącz od Canvas',

  /** The text for the action button in the banner when the document is linked to Canvas. */
  'banner.edit-document-in-canvas': 'Edytuj w Canvas',
  /** The text for the banner when the document is linked to Canvas. */
  'banner.linked-to-canvas': 'Ten dokument jest połączony z Canvas',

  /** The text for the "Confirm document changes" dialog cancel button. */
  'dialog.confirm-document-changes.cancel': 'Anuluj',
  /** The text for the "Confirm document changes" dialog confirm button. */
  'dialog.confirm-document-changes.confirm': 'Zaakceptuj i kontynuuj',
  /** The description for the "Confirm document changes" dialog. */
  'dialog.confirm-document-changes.description':
    'Ten dokument musi zostać zaktualizowany, aby był kompatybilny z Canvas.\n Istniejąca zawartość może zostać zmieniona lub usunięta w ramach tego procesu.',
  /** The description for the "Confirm document changes" dialog footer. */
  'dialog.confirm-document-changes.footer-description': 'Możesz w każdej chwili odłączyć od Canvas',
  /** The title for the "Confirm document changes" dialog. */
  'dialog.confirm-document-changes.title': 'Potwierdź zmiany dokumentu',
  /** The text for the Link to Canvas dialog when there is a error. */
  'dialog.link-to-canvas.error': 'Nie udało się połączyć z Canvas',
  /** The text for the "Link to Canvas" dialog when the document is being redirected. */
  'dialog.link-to-canvas.redirecting': 'Przekierowuję do Canvas, aby zakończyć łączenie...',
  /** The title for the "Link to Canvas" dialog. */
  'dialog.link-to-canvas.title': 'Połącz z Canvas',
  /** The text for the "Link to Canvas" dialog when the document is being validated. */
  'dialog.link-to-canvas.validating': 'Walidacja',
  /** The text for the "Unlink from Canvas" dialog cancel button. */
  'dialog.unlink-from-canvas.cancel': 'Anuluj',
  /** The text for the "Unlink from Canvas" dialog description. */
  'dialog.unlink-from-canvas.description':
    'Po odłączeniu będzie można go edytować tutaj, a przyszłe edycje w Canvas nie będą już automatycznie mapowane na ten dokument.',
  /** The text for the "Unlink from Canvas" dialog error message. */
  'dialog.unlink-from-canvas.error': 'Nie udało się odłączyć od Canvas',
  /** The text for the "Unlink from Canvas" dialog success message. */
  'dialog.unlink-from-canvas.success': 'Odłączono od Canvas',
  /** The title for the "Unlink from Canvas" dialog. */
  'dialog.unlink-from-canvas.title': 'Odłącz od Canvas',
  /** The text for the "Unlink from Canvas" dialog unlink button. */
  'dialog.unlink-from-canvas.unlink-action': 'Odłącz teraz',
  /** The text for the "Unlink from Canvas" dialog when the document is being unlinked. */
  'dialog.unlink-from-canvas.unlinking':
    'Odłączasz <strong>„{{documentTitle}}”</strong> od Canvas.',

  /** The text for the "Navigate to Canvas" dialog error message. */
  'navigate-to-canvas-doc.error.missing-permissions': 'Brak uprawnień do nawigacji do Canvas',
})
