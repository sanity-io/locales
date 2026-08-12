import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** The text for the "Edit in Canvas" action. */
  'action.edit-document': 'Upravit v Canvas',
  /** The text for the "Link to Canvas" action. */
  'action.link-document': 'Propojit s Canvas',
  /** The text for the "Link to Canvas" action when the document is not yet resolved. */
  'action.link-document-disabled.initial-value-not-resolved':
    'Počkejte, prosím, dokud nebudou vyřešeny počáteční hodnoty dokumentu',
  /** The text for the "Link to Canvas" action when the user doesn't have permissions to link the document to Canvas. */
  'action.link-document-disabled.missing-permissions':
    'Nemáte oprávnění propojit tento dokument s Canvas',
  /** The text for the "Link to Canvas" action when the document is not in the dashboard. */
  'action.link-document-disabled.not-in-dashboard':
    'Otevřete tento dokument v Dashboardu pro propojení s Canvas',
  /** The text for the "Link to Canvas" action when the document is a version document. */
  'action.link-document-disabled.version-document':
    'Verzové dokumenty zatím nejsou v Canvas podporovány',
  /** The text for the "Unlink from Canvas" action. */
  'action.unlink-document': 'Odpojit od Canvas',

  /** The text for the action button in the banner when the document is linked to Canvas. */
  'banner.edit-document-in-canvas': 'Upravit v Canvas',
  /** The text for the banner when the document is linked to Canvas. */
  'banner.linked-to-canvas': 'Tento dokument je propojen s Canvas',

  /** The text for the "Confirm document changes" dialog cancel button. */
  'dialog.confirm-document-changes.cancel': 'Zrušit',
  /** The text for the "Confirm document changes" dialog confirm button. */
  'dialog.confirm-document-changes.confirm': 'Přijmout a pokračovat',
  /** The description for the "Confirm document changes" dialog. */
  'dialog.confirm-document-changes.description':
    'Tento dokument je třeba aktualizovat, aby byl kompatibilní s Canvas.\n Součástí tohoto procesu může být úprava nebo odstranění stávajícího obsahu.',
  /** The description for the "Confirm document changes" dialog footer. */
  'dialog.confirm-document-changes.footer-description': 'Můžete se kdykoli odpojit od Canvas',
  /** The title for the "Confirm document changes" dialog. */
  'dialog.confirm-document-changes.title': 'Potvrdit změny dokumentu',
  /** The text for the Link to Canvas dialog when there is a error. */
  'dialog.link-to-canvas.error': 'Propojení s Canvas se nezdařilo',
  /** The text for the "Link to Canvas" dialog when the document is being redirected. */
  'dialog.link-to-canvas.redirecting': 'Přesměrováváme vás do Canvas pro dokončení propojení...',
  /** The title for the "Link to Canvas" dialog. */
  'dialog.link-to-canvas.title': 'Propojit s Canvas',
  /** The text for the "Link to Canvas" dialog when the document is being validated. */
  'dialog.link-to-canvas.validating': 'Ověřování',
  /** The text for the "Unlink from Canvas" dialog cancel button. */
  'dialog.unlink-from-canvas.cancel': 'Zrušit',
  /** The text for the "Unlink from Canvas" dialog description. */
  'dialog.unlink-from-canvas.description':
    'Po odpojení bude možné dokument upravovat zde a budoucí úpravy v Canvas již nebudou automaticky mapovány na tento dokument.',
  /** The text for the "Unlink from Canvas" dialog error message. */
  'dialog.unlink-from-canvas.error': 'Odpojení od Canvas se nezdařilo',
  /** The text for the "Unlink from Canvas" dialog success message. */
  'dialog.unlink-from-canvas.success': 'Odpojeno od Canvas',
  /** The title for the "Unlink from Canvas" dialog. */
  'dialog.unlink-from-canvas.title': 'Odpojit od Canvas',
  /** The text for the "Unlink from Canvas" dialog unlink button. */
  'dialog.unlink-from-canvas.unlink-action': 'Odpojit nyní',
  /** The text for the "Unlink from Canvas" dialog when the document is being unlinked. */
  'dialog.unlink-from-canvas.unlinking':
    'Odpojujete <strong>“{{documentTitle}}”</strong> od Canvas.',

  /** The text for the "Navigate to Canvas" dialog error message. */
  'navigate-to-canvas-doc.error.missing-permissions': 'Chybějící oprávnění pro navigaci do Canvas',
})
