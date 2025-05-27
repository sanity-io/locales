import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** The text for the "Edit in Canvas" action. */
  'action.edit-document': 'Rediger i Canvas',
  /** The text for the "Link to Canvas" action. */
  'action.link-document': 'Lenkje til Canvas',
  /** The text for the "Link to Canvas" action when the document is not yet resolved. */
  'action.link-document-disabled.initial-value-not-resolved':
    'Vent til dokumentets initialverdiar er løyste',
  /** The text for the "Link to Canvas" action when the user doesn't have permissions to link the document to Canvas. */
  'action.link-document-disabled.missing-permissions':
    'Du har ikkje løyve til å lenkje dette dokumentet til Canvas',
  /** The text for the "Link to Canvas" action when the document is not in the dashboard. */
  'action.link-document-disabled.not-in-dashboard':
    'Opne dette dokumentet i Dashboard for å lenkje til Canvas',
  /** The text for the "Link to Canvas" action when the document is a version document. */
  'action.link-document-disabled.version-document':
    'Versjonsdokument er enno ikkje støtta i Canvas',
  /** The text for the "Unlink from Canvas" action. */
  'action.unlink-document': 'Fjern lenkje frå Canvas',

  /** The text for the action button in the banner when the document is linked to Canvas. */
  'banner.edit-document-in-canvas': 'Rediger i Canvas',
  /** The text for the banner when the document is linked to Canvas. */
  'banner.linked-to-canvas': 'Dette dokumentet er lenkja til Canvas',

  /** The text for the "Confirm document changes" dialog cancel button. */
  'dialog.confirm-document-changes.cancel': 'Avbryt',
  /** The text for the "Confirm document changes" dialog confirm button. */
  'dialog.confirm-document-changes.confirm': 'Godta og fortsett',
  /** The description for the "Confirm document changes" dialog. */
  'dialog.confirm-document-changes.description':
    'Dette dokumentet må oppdaterast for å vere kompatibelt med Canvas.\n Eksisterande innhald kan bli redigert eller fjerna som ein del av denne prosessen.',
  /** The description for the "Confirm document changes" dialog footer. */
  'dialog.confirm-document-changes.footer-description':
    'Du kan fjerne lenkja frå Canvas når som helst',
  /** The title for the "Confirm document changes" dialog. */
  'dialog.confirm-document-changes.title': 'Stadfest dokumentendringar',
  /** The text for the Link to Canvas dialog when there is a error. */
  'dialog.link-to-canvas.error': 'Klarte ikkje å lenkje til Canvas',
  /** The text for the "Link to Canvas" dialog when the document is being redirected. */
  'dialog.link-to-canvas.redirecting': 'Tar deg til Canvas for å fullføre lenkinga...',
  /** The title for the "Link to Canvas" dialog. */
  'dialog.link-to-canvas.title': 'Lenkje til Canvas',
  /** The text for the "Link to Canvas" dialog when the document is being validated. */
  'dialog.link-to-canvas.validating': 'Validerer',
  /** The text for the "Unlink from Canvas" dialog cancel button. */
  'dialog.unlink-from-canvas.cancel': 'Avbryt',
  /** The text for the "Unlink from Canvas" dialog description. */
  'dialog.unlink-from-canvas.description':
    'Når det er fjerna lenkje, vil det vere redigerbart her og framtidige redigeringar i Canvas vil ikkje lenger automatisk kartleggjast til dette dokumentet.',
  /** The text for the "Unlink from Canvas" dialog error message. */
  'dialog.unlink-from-canvas.error': 'Klarte ikkje å fjerne lenkja frå Canvas',
  /** The text for the "Unlink from Canvas" dialog success message. */
  'dialog.unlink-from-canvas.success': 'Fjerna lenkja frå Canvas',
  /** The title for the "Unlink from Canvas" dialog. */
  'dialog.unlink-from-canvas.title': 'Fjern lenkje frå Canvas',
  /** The text for the "Unlink from Canvas" dialog unlink button. */
  'dialog.unlink-from-canvas.unlink-action': 'Fjern lenkje no',
  /** The text for the "Unlink from Canvas" dialog when the document is being unlinked. */
  'dialog.unlink-from-canvas.unlinking':
    'Du fjernar lenkja for <strong>“{{documentTitle}}”</strong> frå Canvas.',

  /** The text for the "Navigate to Canvas" dialog error message. */
  'navigate-to-canvas-doc.error.missing-permissions':
    'Manglande tillatingar for å navigere til Canvas',
})
