import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** The text for the "Edit in Canvas" action. */
  'action.edit-document': 'Editar en Canvas',
  /** The text for the "Link to Canvas" action. */
  'action.link-document': 'Enlazar a Canvas',
  /** The text for the "Link to Canvas" action when the document is not yet resolved. */
  'action.link-document-disabled.initial-value-not-resolved':
    'Espere hasta que los valores iniciales del documento estén resueltos',
  /** The text for the "Link to Canvas" action when the user doesn't have permissions to link the document to Canvas. */
  'action.link-document-disabled.missing-permissions':
    'No tienes permisos para enlazar este documento a Canvas',
  /** The text for the "Link to Canvas" action when the document is not in the dashboard. */
  'action.link-document-disabled.not-in-dashboard':
    'Abre este documento en el Dashboard para enlazarlo a Canvas',
  /** The text for the "Link to Canvas" action when the document is a version document. */
  'action.link-document-disabled.version-document':
    'Los documentos de versión aún no son compatibles en Canvas',
  /** The text for the "Unlink from Canvas" action. */
  'action.unlink-document': 'Desenlazar de Canvas',

  /** The text for the action button in the banner when the document is linked to Canvas. */
  'banner.edit-document-in-canvas': 'Editar en Canvas',
  /** The text for the banner when the document is linked to Canvas. */
  'banner.linked-to-canvas': 'Este documento está enlazado a Canvas',

  /** The text for the "Confirm document changes" dialog cancel button. */
  'dialog.confirm-document-changes.cancel': 'Cancelar',
  /** The text for the "Confirm document changes" dialog confirm button. */
  'dialog.confirm-document-changes.confirm': 'Aceptar y continuar',
  /** The description for the "Confirm document changes" dialog. */
  'dialog.confirm-document-changes.description':
    'Este documento necesita ser actualizado para ser compatible con Canvas.\n El contenido existente puede ser editado o eliminado como parte de este proceso.',
  /** The description for the "Confirm document changes" dialog footer. */
  'dialog.confirm-document-changes.footer-description':
    'Puedes desenlazar de Canvas en cualquier momento',
  /** The title for the "Confirm document changes" dialog. */
  'dialog.confirm-document-changes.title': 'Confirmar cambios en el documento',
  /** The text for the Link to Canvas dialog when there is a error. */
  'dialog.link-to-canvas.error': 'Error al enlazar a Canvas',
  /** The text for the "Link to Canvas" dialog when the document is being redirected. */
  'dialog.link-to-canvas.redirecting': 'Te estamos llevando a Canvas para completar el enlace...',
  /** The title for the "Link to Canvas" dialog. */
  'dialog.link-to-canvas.title': 'Enlazar a Canvas',
  /** The text for the "Link to Canvas" dialog when the document is being validated. */
  'dialog.link-to-canvas.validating': 'Validando',
  /** The text for the "Unlink from Canvas" dialog cancel button. */
  'dialog.unlink-from-canvas.cancel': 'Cancelar',
  /** The text for the "Unlink from Canvas" dialog description. */
  'dialog.unlink-from-canvas.description':
    'Una vez desenlazado, será editable aquí y futuras ediciones en Canvas ya no se mapearán automáticamente a este documento.',
  /** The text for the "Unlink from Canvas" dialog error message. */
  'dialog.unlink-from-canvas.error': 'Error al desenlazar de Canvas',
  /** The text for the "Unlink from Canvas" dialog success message. */
  'dialog.unlink-from-canvas.success': 'Desenlazado de Canvas',
  /** The title for the "Unlink from Canvas" dialog. */
  'dialog.unlink-from-canvas.title': 'Desenlazar de Canvas',
  /** The text for the "Unlink from Canvas" dialog unlink button. */
  'dialog.unlink-from-canvas.unlink-action': 'Desenlazar ahora',
  /** The text for the "Unlink from Canvas" dialog when the document is being unlinked. */
  'dialog.unlink-from-canvas.unlinking':
    'Estás desenlazando <strong>“{{documentTitle}}”</strong> de Canvas.',

  /** The text for the "Navigate to Canvas" dialog error message. */
  'navigate-to-canvas-doc.error.missing-permissions': 'Faltan permisos para navegar a Canvas',
})
