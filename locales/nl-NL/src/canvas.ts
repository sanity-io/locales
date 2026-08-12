import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** The text for the "Edit in Canvas" action. */
  'action.edit-document': 'Bewerk in Canvas',
  /** The text for the "Link to Canvas" action. */
  'action.link-document': 'Link naar Canvas',
  /** The text for the "Link to Canvas" action when the document is not yet resolved. */
  'action.link-document-disabled.initial-value-not-resolved':
    'Wacht alstublieft tot de initiële waarden van het document zijn opgelost',
  /** The text for the "Link to Canvas" action when the user doesn't have permissions to link the document to Canvas. */
  'action.link-document-disabled.missing-permissions':
    'U heeft geen toestemming om dit document te linken aan Canvas',
  /** The text for the "Link to Canvas" action when the document is not in the dashboard. */
  'action.link-document-disabled.not-in-dashboard':
    'Open dit document in Dashboard om te linken aan Canvas',
  /** The text for the "Link to Canvas" action when the document is a version document. */
  'action.link-document-disabled.version-document':
    'Versiedocumenten worden nog niet ondersteund in Canvas',
  /** The text for the "Unlink from Canvas" action. */
  'action.unlink-document': 'Ontkoppel van Canvas',

  /** The text for the action button in the banner when the document is linked to Canvas. */
  'banner.edit-document-in-canvas': 'Bewerk in Canvas',
  /** The text for the banner when the document is linked to Canvas. */
  'banner.linked-to-canvas': 'Dit document is gekoppeld aan Canvas',

  /** The text for the "Confirm document changes" dialog cancel button. */
  'dialog.confirm-document-changes.cancel': 'Annuleren',
  /** The text for the "Confirm document changes" dialog confirm button. */
  'dialog.confirm-document-changes.confirm': 'Accepteren en doorgaan',
  /** The description for the "Confirm document changes" dialog. */
  'dialog.confirm-document-changes.description':
    'Dit document moet worden bijgewerkt om compatibel te zijn met Canvas.\n Bestaande inhoud kan worden bewerkt of verwijderd als onderdeel van dit proces.',
  /** The description for the "Confirm document changes" dialog footer. */
  'dialog.confirm-document-changes.footer-description':
    'U kunt op elk moment de koppeling met Canvas ongedaan maken',
  /** The title for the "Confirm document changes" dialog. */
  'dialog.confirm-document-changes.title': 'Bevestig wijzigingen in document',
  /** The text for the Link to Canvas dialog when there is a error. */
  'dialog.link-to-canvas.error': 'Koppelen aan Canvas mislukt',
  /** The text for the "Link to Canvas" dialog when the document is being redirected. */
  'dialog.link-to-canvas.redirecting': 'We brengen u naar Canvas om het koppelen te voltooien...',
  /** The title for the "Link to Canvas" dialog. */
  'dialog.link-to-canvas.title': 'Link naar Canvas',
  /** The text for the "Link to Canvas" dialog when the document is being validated. */
  'dialog.link-to-canvas.validating': 'Valideren',
  /** The text for the "Unlink from Canvas" dialog cancel button. */
  'dialog.unlink-from-canvas.cancel': 'Annuleren',
  /** The text for the "Unlink from Canvas" dialog description. */
  'dialog.unlink-from-canvas.description':
    'Eenmaal ontkoppeld, kan het hier bewerkt worden en zullen toekomstige bewerkingen in Canvas niet meer automatisch gekoppeld worden aan dit document.',
  /** The text for the "Unlink from Canvas" dialog error message. */
  'dialog.unlink-from-canvas.error': 'Ontkoppelen van Canvas mislukt',
  /** The text for the "Unlink from Canvas" dialog success message. */
  'dialog.unlink-from-canvas.success': 'Ontkoppeld van Canvas',
  /** The title for the "Unlink from Canvas" dialog. */
  'dialog.unlink-from-canvas.title': 'Ontkoppel van Canvas',
  /** The text for the "Unlink from Canvas" dialog unlink button. */
  'dialog.unlink-from-canvas.unlink-action': 'Nu ontkoppelen',
  /** The text for the "Unlink from Canvas" dialog when the document is being unlinked. */
  'dialog.unlink-from-canvas.unlinking':
    'U bent <strong>“{{documentTitle}}”</strong> aan het ontkoppelen van Canvas.',

  /** The text for the "Navigate to Canvas" dialog error message. */
  'navigate-to-canvas-doc.error.missing-permissions':
    'Ontbrekende machtigingen om naar Canvas te navigeren',
})
