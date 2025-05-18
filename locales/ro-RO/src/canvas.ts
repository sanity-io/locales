import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** The text for the "Edit in Canvas" action. */
  'action.edit-document': 'Editați în Canvas',
  /** The text for the "Link to Canvas" action. */
  'action.link-document': 'Link către Canvas',
  /** The text for the "Link to Canvas" action when the document is not yet resolved. */
  'action.link-document-disabled.initial-value-not-resolved':
    'Vă rugăm să așteptați până când valorile inițiale ale documentului sunt rezolvate',
  /** The text for the "Link to Canvas" action when the user doesn't have permissions to link the document to Canvas. */
  'action.link-document-disabled.missing-permissions':
    'Nu aveți permisiuni pentru a lega acest document de Canvas',
  /** The text for the "Link to Canvas" action when the document is not in the dashboard. */
  'action.link-document-disabled.not-in-dashboard':
    'Deschideți acest document în Dashboard pentru a-l lega de Canvas',
  /** The text for the "Link to Canvas" action when the document is a version document. */
  'action.link-document-disabled.version-document':
    'Documentele de tip versiune nu sunt încă suportate în Canvas',
  /** The text for the "Unlink from Canvas" action. */
  'action.unlink-document': 'Dezlegați de Canvas',

  /** The text for the action button in the banner when the document is linked to Canvas. */
  'banner.edit-document-in-canvas': 'Editați în Canvas',
  /** The text for the banner when the document is linked to Canvas. */
  'banner.linked-to-canvas': 'Acest document este legat de Canvas',

  /** The text for the "Confirm document changes" dialog cancel button. */
  'dialog.confirm-document-changes.cancel': 'Anulați',
  /** The text for the "Confirm document changes" dialog confirm button. */
  'dialog.confirm-document-changes.confirm': 'Acceptați și continuați',
  /** The description for the "Confirm document changes" dialog. */
  'dialog.confirm-document-changes.description':
    'Acest document trebuie actualizat pentru a fi compatibil cu Canvas.\n Conținutul existent poate fi editat sau eliminat ca parte a acestui proces.',
  /** The description for the "Confirm document changes" dialog footer. */
  'dialog.confirm-document-changes.footer-description': 'Puteți dezlega de Canvas în orice moment',
  /** The title for the "Confirm document changes" dialog. */
  'dialog.confirm-document-changes.title': 'Confirmați modificările documentului',
  /** The text for the Link to Canvas dialog when there is a error. */
  'dialog.link-to-canvas.error': 'Legarea la Canvas a eșuat',
  /** The text for the "Link to Canvas" dialog when the document is being redirected. */
  'dialog.link-to-canvas.redirecting': 'Vă redirecționăm către Canvas pentru a finaliza legarea...',
  /** The title for the "Link to Canvas" dialog. */
  'dialog.link-to-canvas.title': 'Legare la Canvas',
  /** The text for the "Link to Canvas" dialog when the document is being validated. */
  'dialog.link-to-canvas.validating': 'Validare',
  /** The text for the "Unlink from Canvas" dialog cancel button. */
  'dialog.unlink-from-canvas.cancel': 'Anulați',
  /** The text for the "Unlink from Canvas" dialog description. */
  'dialog.unlink-from-canvas.description':
    'Odată dezlegat, va putea fi editat aici, iar modificările viitoare în Canvas nu se vor mai reflecta automat în acest document.',
  /** The text for the "Unlink from Canvas" dialog error message. */
  'dialog.unlink-from-canvas.error': 'Dezlegarea de Canvas a eșuat',
  /** The text for the "Unlink from Canvas" dialog success message. */
  'dialog.unlink-from-canvas.success': 'Dezlegat de Canvas',
  /** The title for the "Unlink from Canvas" dialog. */
  'dialog.unlink-from-canvas.title': 'Dezlegare de Canvas',
  /** The text for the "Unlink from Canvas" dialog unlink button. */
  'dialog.unlink-from-canvas.unlink-action': 'Dezlegați acum',
  /** The text for the "Unlink from Canvas" dialog when the document is being unlinked. */
  'dialog.unlink-from-canvas.unlinking':
    'Dezlegați <strong>“{{documentTitle}}”</strong> de Canvas.',

  /** The text for the "Navigate to Canvas" dialog error message. */
  'navigate-to-canvas-doc.error.missing-permissions':
    'Nu aveți permisiuni pentru a naviga la Canvas',
})
