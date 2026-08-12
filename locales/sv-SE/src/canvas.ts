import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** The text for the "Edit in Canvas" action. */
  'action.edit-document': 'Redigera i Canvas',
  /** The text for the "Link to Canvas" action. */
  'action.link-document': 'Länka till Canvas',
  /** The text for the "Link to Canvas" action when the document is not yet resolved. */
  'action.link-document-disabled.initial-value-not-resolved':
    'Vänta tills dokumentets initialvärden är lösta',
  /** The text for the "Link to Canvas" action when the user doesn't have permissions to link the document to Canvas. */
  'action.link-document-disabled.missing-permissions':
    'Du har inte behörighet att länka det här dokumentet till Canvas',
  /** The text for the "Link to Canvas" action when the document is not in the dashboard. */
  'action.link-document-disabled.not-in-dashboard':
    'Öppna det här dokumentet i Dashboard för att länka till Canvas',
  /** The text for the "Link to Canvas" action when the document is a version document. */
  'action.link-document-disabled.version-document': 'Versionsdokument stöds ännu inte i Canvas',
  /** The text for the "Unlink from Canvas" action. */
  'action.unlink-document': 'Avlänka från Canvas',

  /** The text for the action button in the banner when the document is linked to Canvas. */
  'banner.edit-document-in-canvas': 'Redigera i Canvas',
  /** The text for the banner when the document is linked to Canvas. */
  'banner.linked-to-canvas': 'Det här dokumentet är länkat till Canvas',

  /** The text for the "Confirm document changes" dialog cancel button. */
  'dialog.confirm-document-changes.cancel': 'Avbryt',
  /** The text for the "Confirm document changes" dialog confirm button. */
  'dialog.confirm-document-changes.confirm': 'Godkänn och fortsätt',
  /** The description for the "Confirm document changes" dialog. */
  'dialog.confirm-document-changes.description':
    'Det här dokumentet behöver uppdateras för att vara kompatibelt med Canvas.\n Befintligt innehåll kan redigeras eller tas bort som en del av denna process.',
  /** The description for the "Confirm document changes" dialog footer. */
  'dialog.confirm-document-changes.footer-description': 'Du kan avlänka från Canvas när som helst',
  /** The title for the "Confirm document changes" dialog. */
  'dialog.confirm-document-changes.title': 'Bekräfta dokumentändringar',
  /** The text for the Link to Canvas dialog when there is a error. */
  'dialog.link-to-canvas.error': 'Misslyckades med att länka till Canvas',
  /** The text for the "Link to Canvas" dialog when the document is being redirected. */
  'dialog.link-to-canvas.redirecting': 'Tar dig till Canvas för att slutföra länkningen...',
  /** The title for the "Link to Canvas" dialog. */
  'dialog.link-to-canvas.title': 'Länka till Canvas',
  /** The text for the "Link to Canvas" dialog when the document is being validated. */
  'dialog.link-to-canvas.validating': 'Validerar',
  /** The text for the "Unlink from Canvas" dialog cancel button. */
  'dialog.unlink-from-canvas.cancel': 'Avbryt',
  /** The text for the "Unlink from Canvas" dialog description. */
  'dialog.unlink-from-canvas.description':
    'När det är avlänkat kommer det att vara redigerbart här och framtida redigeringar i Canvas kommer inte längre att automatiskt mappas till det här dokumentet.',
  /** The text for the "Unlink from Canvas" dialog error message. */
  'dialog.unlink-from-canvas.error': 'Misslyckades med att avlänka från Canvas',
  /** The text for the "Unlink from Canvas" dialog success message. */
  'dialog.unlink-from-canvas.success': 'Avlänkad från Canvas',
  /** The title for the "Unlink from Canvas" dialog. */
  'dialog.unlink-from-canvas.title': 'Avlänka från Canvas',
  /** The text for the "Unlink from Canvas" dialog unlink button. */
  'dialog.unlink-from-canvas.unlink-action': 'Avlänka nu',
  /** The text for the "Unlink from Canvas" dialog when the document is being unlinked. */
  'dialog.unlink-from-canvas.unlinking':
    'Du avlänkar <strong>“{{documentTitle}}”</strong> från Canvas.',

  /** The text for the "Navigate to Canvas" dialog error message. */
  'navigate-to-canvas-doc.error.missing-permissions':
    'Saknar behörigheter för att navigera till Canvas',
})
