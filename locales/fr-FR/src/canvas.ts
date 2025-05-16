import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** The text for the "Edit in Canvas" action. */
  'action.edit-document': 'Modifier dans Canvas',
  /** The text for the "Link to Canvas" action. */
  'action.link-document': 'Lier à Canvas',
  /** The text for the "Link to Canvas" action when the document is not yet resolved. */
  'action.link-document-disabled.initial-value-not-resolved':
    'Veuillez attendre que les valeurs initiales du document soient résolues',
  /** The text for the "Link to Canvas" action when the user doesn't have permissions to link the document to Canvas. */
  'action.link-document-disabled.missing-permissions':
    "Vous n'avez pas les autorisations pour lier ce document à Canvas",
  /** The text for the "Link to Canvas" action when the document is not in the dashboard. */
  'action.link-document-disabled.not-in-dashboard':
    'Ouvrez ce document dans le tableau de bord pour le lier à Canvas',
  /** The text for the "Link to Canvas" action when the document is a version document. */
  'action.link-document-disabled.version-document':
    'Les documents de version ne sont pas encore pris en charge dans Canvas',
  /** The text for the "Unlink from Canvas" action. */
  'action.unlink-document': 'Dissocier de Canvas',

  /** The text for the action button in the banner when the document is linked to Canvas. */
  'banner.edit-document-in-canvas': 'Modifier dans Canvas',
  /** The text for the banner when the document is linked to Canvas. */
  'banner.linked-to-canvas': 'Ce document est lié à Canvas',

  /** The text for the "Confirm document changes" dialog cancel button. */
  'dialog.confirm-document-changes.cancel': 'Annuler',
  /** The text for the "Confirm document changes" dialog confirm button. */
  'dialog.confirm-document-changes.confirm': 'Accepter et continuer',
  /** The description for the "Confirm document changes" dialog. */
  'dialog.confirm-document-changes.description':
    'Ce document doit être mis à jour pour être compatible avec Canvas.\n Le contenu existant peut être modifié ou supprimé dans le cadre de ce processus.',
  /** The description for the "Confirm document changes" dialog footer. */
  'dialog.confirm-document-changes.footer-description':
    'Vous pouvez vous dissocier de Canvas à tout moment',
  /** The title for the "Confirm document changes" dialog. */
  'dialog.confirm-document-changes.title': 'Confirmer les modifications du document',
  /** The text for the Link to Canvas dialog when there is a error. */
  'dialog.link-to-canvas.error': 'Échec de la liaison à Canvas',
  /** The text for the "Link to Canvas" dialog when the document is being redirected. */
  'dialog.link-to-canvas.redirecting':
    'Vous êtes redirigé vers Canvas pour compléter la liaison...',
  /** The title for the "Link to Canvas" dialog. */
  'dialog.link-to-canvas.title': 'Lier à Canvas',
  /** The text for the "Link to Canvas" dialog when the document is being validated. */
  'dialog.link-to-canvas.validating': 'Validation en cours',
  /** The text for the "Unlink from Canvas" dialog cancel button. */
  'dialog.unlink-from-canvas.cancel': 'Annuler',
  /** The text for the "Unlink from Canvas" dialog description. */
  'dialog.unlink-from-canvas.description':
    'Une fois dissocié, il sera modifiable ici et les futures modifications dans Canvas ne seront plus automatiquement appliquées à ce document.',
  /** The text for the "Unlink from Canvas" dialog error message. */
  'dialog.unlink-from-canvas.error': 'Échec de la dissociation de Canvas',
  /** The text for the "Unlink from Canvas" dialog success message. */
  'dialog.unlink-from-canvas.success': 'Dissocié de Canvas',
  /** The title for the "Unlink from Canvas" dialog. */
  'dialog.unlink-from-canvas.title': 'Dissocier de Canvas',
  /** The text for the "Unlink from Canvas" dialog unlink button. */
  'dialog.unlink-from-canvas.unlink-action': 'Dissocier maintenant',
  /** The text for the "Unlink from Canvas" dialog when the document is being unlinked. */
  'dialog.unlink-from-canvas.unlinking':
    'Vous dissociez <strong>“{{documentTitle}}”</strong> de Canvas.',

  /** The text for the "Navigate to Canvas" dialog error message. */
  'navigate-to-canvas-doc.error.missing-permissions':
    'Permissions manquantes pour naviguer vers Canvas',
})
