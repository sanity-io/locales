import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** The text for the "Edit in Canvas" action. */
  'action.edit-document': 'Modifica in Canvas',
  /** The text for the "Link to Canvas" action. */
  'action.link-document': 'Collega a Canvas',
  /** The text for the "Link to Canvas" action when the document is not yet resolved. */
  'action.link-document-disabled.initial-value-not-resolved':
    'Attendere fino a quando i valori iniziali del documento non sono stati risolti',
  /** The text for the "Link to Canvas" action when the user doesn't have permissions to link the document to Canvas. */
  'action.link-document-disabled.missing-permissions':
    'Non hai i permessi per collegare questo documento a Canvas',
  /** The text for the "Link to Canvas" action when the document is not in the dashboard. */
  'action.link-document-disabled.not-in-dashboard':
    'Apri questo documento in Dashboard per collegarlo a Canvas',
  /** The text for the "Link to Canvas" action when the document is a version document. */
  'action.link-document-disabled.version-document':
    'I documenti di versione non sono ancora supportati in Canvas',
  /** The text for the "Unlink from Canvas" action. */
  'action.unlink-document': 'Scollega da Canvas',

  /** The text for the action button in the banner when the document is linked to Canvas. */
  'banner.edit-document-in-canvas': 'Modifica in Canvas',
  /** The text for the banner when the document is linked to Canvas. */
  'banner.linked-to-canvas': 'Questo documento è collegato a Canvas',

  /** The text for the "Confirm document changes" dialog cancel button. */
  'dialog.confirm-document-changes.cancel': 'Annulla',
  /** The text for the "Confirm document changes" dialog confirm button. */
  'dialog.confirm-document-changes.confirm': 'Accetta e continua',
  /** The description for the "Confirm document changes" dialog. */
  'dialog.confirm-document-changes.description':
    'Questo documento deve essere aggiornato per essere compatibile con Canvas.\n Il contenuto esistente potrebbe essere modificato o rimosso come parte di questo processo.',
  /** The description for the "Confirm document changes" dialog footer. */
  'dialog.confirm-document-changes.footer-description':
    'Puoi scollegarti da Canvas in qualsiasi momento',
  /** The title for the "Confirm document changes" dialog. */
  'dialog.confirm-document-changes.title': 'Conferma le modifiche al documento',
  /** The text for the Link to Canvas dialog when there is a error. */
  'dialog.link-to-canvas.error': 'Impossibile collegarsi a Canvas',
  /** The text for the "Link to Canvas" dialog when the document is being redirected. */
  'dialog.link-to-canvas.redirecting':
    'Ti stiamo portando a Canvas per completare il collegamento...',
  /** The title for the "Link to Canvas" dialog. */
  'dialog.link-to-canvas.title': 'Collega a Canvas',
  /** The text for the "Link to Canvas" dialog when the document is being validated. */
  'dialog.link-to-canvas.validating': 'Validazione in corso',
  /** The text for the "Unlink from Canvas" dialog cancel button. */
  'dialog.unlink-from-canvas.cancel': 'Annulla',
  /** The text for the "Unlink from Canvas" dialog description. */
  'dialog.unlink-from-canvas.description':
    'Una volta scollegato, sarà modificabile qui e le future modifiche in Canvas non verranno più mappate automaticamente su questo documento.',
  /** The text for the "Unlink from Canvas" dialog error message. */
  'dialog.unlink-from-canvas.error': 'Impossibile scollegarsi da Canvas',
  /** The text for the "Unlink from Canvas" dialog success message. */
  'dialog.unlink-from-canvas.success': 'Scollegato da Canvas',
  /** The title for the "Unlink from Canvas" dialog. */
  'dialog.unlink-from-canvas.title': 'Scollega da Canvas',
  /** The text for the "Unlink from Canvas" dialog unlink button. */
  'dialog.unlink-from-canvas.unlink-action': 'Scollega ora',
  /** The text for the "Unlink from Canvas" dialog when the document is being unlinked. */
  'dialog.unlink-from-canvas.unlinking':
    'Stai scollegando <strong>“{{documentTitle}}”</strong> da Canvas.',

  /** The text for the "Navigate to Canvas" dialog error message. */
  'navigate-to-canvas-doc.error.missing-permissions': 'Permessi mancanti per navigare verso Canvas',
})
