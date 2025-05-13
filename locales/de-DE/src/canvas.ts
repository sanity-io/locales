import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** The text for the "Edit in Canvas" action. */
  'action.edit-document': 'In Canvas bearbeiten',
  /** The text for the "Link to Canvas" action. */
  'action.link-document': 'Mit Canvas verlinken',
  /** The text for the "Link to Canvas" action when the document is not yet resolved. */
  'action.link-document-disabled.initial-value-not-resolved':
    'Bitte warten Sie, bis die Anfangswerte des Dokuments aufgelöst sind',
  /** The text for the "Link to Canvas" action when the user doesn't have permissions to link the document to Canvas. */
  'action.link-document-disabled.missing-permissions':
    'Sie haben keine Berechtigung, dieses Dokument mit Canvas zu verlinken',
  /** The text for the "Link to Canvas" action when the document is not in the dashboard. */
  'action.link-document-disabled.not-in-dashboard':
    'Öffnen Sie dieses Dokument im Dashboard, um es mit Canvas zu verlinken',
  /** The text for the "Link to Canvas" action when the document is a version document. */
  'action.link-document-disabled.version-document':
    'Versionsdokumente werden in Canvas noch nicht unterstützt',
  /** The text for the "Unlink from Canvas" action. */
  'action.unlink-document': 'Verbindung zu Canvas trennen',

  /** The text for the action button in the banner when the document is linked to Canvas. */
  'banner.edit-document-in-canvas': 'In Canvas bearbeiten',
  /** The text for the banner when the document is linked to Canvas. */
  'banner.linked-to-canvas': 'Dieses Dokument ist mit Canvas verlinkt',

  /** The text for the "Confirm document changes" dialog cancel button. */
  'dialog.confirm-document-changes.cancel': 'Abbrechen',
  /** The text for the "Confirm document changes" dialog confirm button. */
  'dialog.confirm-document-changes.confirm': 'Akzeptieren und fortfahren',
  /** The description for the "Confirm document changes" dialog. */
  'dialog.confirm-document-changes.description':
    'Dieses Dokument muss aktualisiert werden, um mit Canvas kompatibel zu sein.\nBestehende Inhalte können im Rahmen dieses Prozesses bearbeitet oder entfernt werden.',
  /** The description for the "Confirm document changes" dialog footer. */
  'dialog.confirm-document-changes.footer-description':
    'Sie können die Verbindung zu Canvas jederzeit trennen',
  /** The title for the "Confirm document changes" dialog. */
  'dialog.confirm-document-changes.title': 'Dokumentänderungen bestätigen',
  /** The text for the Link to Canvas dialog when there is a error. */
  'dialog.link-to-canvas.error': 'Verbindung zu Canvas fehlgeschlagen',
  /** The text for the "Link to Canvas" dialog when the document is being redirected. */
  'dialog.link-to-canvas.redirecting':
    'Sie werden zu Canvas weitergeleitet, um die Verlinkung abzuschließen...',
  /** The title for the "Link to Canvas" dialog. */
  'dialog.link-to-canvas.title': 'Mit Canvas verlinken',
  /** The text for the "Link to Canvas" dialog when the document is being validated. */
  'dialog.link-to-canvas.validating': 'Validierung',
  /** The text for the "Unlink from Canvas" dialog cancel button. */
  'dialog.unlink-from-canvas.cancel': 'Abbrechen',
  /** The text for the "Unlink from Canvas" dialog description. */
  'dialog.unlink-from-canvas.description':
    'Einmal getrennt, kann es hier bearbeitet werden und zukünftige Bearbeitungen in Canvas werden nicht mehr automatisch diesem Dokument zugeordnet.',
  /** The text for the "Unlink from Canvas" dialog error message. */
  'dialog.unlink-from-canvas.error': 'Trennung von Canvas fehlgeschlagen',
  /** The text for the "Unlink from Canvas" dialog success message. */
  'dialog.unlink-from-canvas.success': 'Verbindung zu Canvas getrennt',
  /** The title for the "Unlink from Canvas" dialog. */
  'dialog.unlink-from-canvas.title': 'Verbindung zu Canvas trennen',
  /** The text for the "Unlink from Canvas" dialog unlink button. */
  'dialog.unlink-from-canvas.unlink-action': 'Jetzt trennen',
  /** The text for the "Unlink from Canvas" dialog when the document is being unlinked. */
  'dialog.unlink-from-canvas.unlinking':
    'Sie trennen <strong>„{{documentTitle}}“</strong> von Canvas.',

  /** The text for the "Navigate to Canvas" dialog error message. */
  'navigate-to-canvas-doc.error.missing-permissions':
    'Fehlende Berechtigungen, um zu Canvas zu navigieren',
})
