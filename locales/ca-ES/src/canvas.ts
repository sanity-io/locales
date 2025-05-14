import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** The text for the "Edit in Canvas" action. */
  'action.edit-document': 'Edita a Canvas',
  /** The text for the "Link to Canvas" action. */
  'action.link-document': 'Enllaça a Canvas',
  /** The text for the "Link to Canvas" action when the document is not yet resolved. */
  'action.link-document-disabled.initial-value-not-resolved':
    'Espereu fins que els valors inicials del document estiguin resolts',
  /** The text for the "Link to Canvas" action when the user doesn't have permissions to link the document to Canvas. */
  'action.link-document-disabled.missing-permissions':
    'No teniu permisos per enllaçar aquest document a Canvas',
  /** The text for the "Link to Canvas" action when the document is not in the dashboard. */
  'action.link-document-disabled.not-in-dashboard':
    'Obriu aquest document al Tauler de control per enllaçar-lo a Canvas',
  /** The text for the "Link to Canvas" action when the document is a version document. */
  'action.link-document-disabled.version-document':
    'Els documents de versió encara no són compatibles amb Canvas',
  /** The text for the "Unlink from Canvas" action. */
  'action.unlink-document': 'Desenllaça de Canvas',

  /** The text for the action button in the banner when the document is linked to Canvas. */
  'banner.edit-document-in-canvas': 'Edita a Canvas',
  /** The text for the banner when the document is linked to Canvas. */
  'banner.linked-to-canvas': 'Aquest document està enllaçat a Canvas',

  /** The text for the "Confirm document changes" dialog cancel button. */
  'dialog.confirm-document-changes.cancel': 'Cancel·la',
  /** The text for the "Confirm document changes" dialog confirm button. */
  'dialog.confirm-document-changes.confirm': 'Accepta i continua',
  /** The description for the "Confirm document changes" dialog. */
  'dialog.confirm-document-changes.description':
    "Aquest document necessita ser actualitzat per ser compatible amb Canvas.\n El contingut existent pot ser editat o eliminat com a part d'aquest procés.",
  /** The description for the "Confirm document changes" dialog footer. */
  'dialog.confirm-document-changes.footer-description':
    'Podeu desenllaçar de Canvas en qualsevol moment',
  /** The title for the "Confirm document changes" dialog. */
  'dialog.confirm-document-changes.title': 'Confirma els canvis del document',
  /** The text for the Link to Canvas dialog when there is a error. */
  'dialog.link-to-canvas.error': "No s'ha pogut enllaçar a Canvas",
  /** The text for the "Link to Canvas" dialog when the document is being redirected. */
  'dialog.link-to-canvas.redirecting': "Us estem redirigint a Canvas per completar l'enllaç...",
  /** The title for the "Link to Canvas" dialog. */
  'dialog.link-to-canvas.title': 'Enllaça a Canvas',
  /** The text for the "Link to Canvas" dialog when the document is being validated. */
  'dialog.link-to-canvas.validating': 'Validant',
  /** The text for the "Unlink from Canvas" dialog cancel button. */
  'dialog.unlink-from-canvas.cancel': 'Cancel·la',
  /** The text for the "Unlink from Canvas" dialog description. */
  'dialog.unlink-from-canvas.description':
    'Un cop desenllaçat, serà editable aquí i les futures edicions a Canvas ja no es mapejaran automàticament a aquest document.',
  /** The text for the "Unlink from Canvas" dialog error message. */
  'dialog.unlink-from-canvas.error': "No s'ha pogut desenllaçar de Canvas",
  /** The text for the "Unlink from Canvas" dialog success message. */
  'dialog.unlink-from-canvas.success': 'Desenllaçat de Canvas',
  /** The title for the "Unlink from Canvas" dialog. */
  'dialog.unlink-from-canvas.title': 'Desenllaça de Canvas',
  /** The text for the "Unlink from Canvas" dialog unlink button. */
  'dialog.unlink-from-canvas.unlink-action': 'Desenllaça ara',
  /** The text for the "Unlink from Canvas" dialog when the document is being unlinked. */
  'dialog.unlink-from-canvas.unlinking':
    'Esteu desenllaçant <strong>“{{documentTitle}}”</strong> de Canvas.',

  /** The text for the "Navigate to Canvas" dialog error message. */
  'navigate-to-canvas-doc.error.missing-permissions': 'Falten permisos per navegar al Canvas',
})
