import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** The text for the "Edit in Canvas" action. */
  'action.edit-document': 'Rediger i Canvas',
  /** The text for the "Link to Canvas" action. */
  'action.link-document': 'Koble til Canvas',
  /** The text for the "Link to Canvas" action when the document is not yet resolved. */
  'action.link-document-disabled.initial-value-not-resolved':
    'Vennligst vent til dokumentets startverdier er klare',
  /** The text for the "Link to Canvas" action when the user doesn't have permissions to link the document to Canvas. */
  'action.link-document-disabled.missing-permissions':
    'Du har ikke tillatelse til å koble dette dokumentet til Canvas',
  /** The text for the "Link to Canvas" action when the document is not in the dashboard. */
  'action.link-document-disabled.not-in-dashboard':
    'Åpne dette dokumentet i Dashboard for å koble til Canvas',
  /** The text for the "Link to Canvas" action when the document is a version document. */
  'action.link-document-disabled.version-document': 'Versjonsdokumenter støttes ikke ennå i Canvas',
  /** The text for the "Unlink from Canvas" action. */
  'action.unlink-document': 'Fjern kobling fra Canvas',

  /** The text for the action button in the banner when the document is linked to Canvas. */
  'banner.edit-document-in-canvas': 'Rediger i Canvas',
  /** The text for the banner when the document is linked to Canvas. */
  'banner.linked-to-canvas': 'Dette dokumentet er koblet til Canvas',

  /** The text for the "Confirm document changes" dialog cancel button. */
  'dialog.confirm-document-changes.cancel': 'Avbryt',
  /** The text for the "Confirm document changes" dialog confirm button. */
  'dialog.confirm-document-changes.confirm': 'Godta og fortsett',
  /** The description for the "Confirm document changes" dialog. */
  'dialog.confirm-document-changes.description':
    'Dette dokumentet må oppdateres for å være kompatibelt med Canvas.\n Eksisterende innhold kan bli redigert eller fjernet som en del av denne prosessen.',
  /** The description for the "Confirm document changes" dialog footer. */
  'dialog.confirm-document-changes.footer-description':
    'Du kan fjerne koblingen til Canvas når som helst',
  /** The title for the "Confirm document changes" dialog. */
  'dialog.confirm-document-changes.title': 'Bekreft dokumentendringer',
  /** The text for the Link to Canvas dialog when there is a error. */
  'dialog.link-to-canvas.error': 'Kunne ikke koble til Canvas',
  /** The text for the "Link to Canvas" dialog when the document is being redirected. */
  'dialog.link-to-canvas.redirecting': 'Tar deg til Canvas for å fullføre kobling...',
  /** The title for the "Link to Canvas" dialog. */
  'dialog.link-to-canvas.title': 'Koble til Canvas',
  /** The text for the "Link to Canvas" dialog when the document is being validated. */
  'dialog.link-to-canvas.validating': 'Validerer',
  /** The text for the "Unlink from Canvas" dialog cancel button. */
  'dialog.unlink-from-canvas.cancel': 'Avbryt',
  /** The text for the "Unlink from Canvas" dialog description. */
  'dialog.unlink-from-canvas.description':
    'Når det er fjernet, vil det være redigerbart her og fremtidige redigeringer i Canvas vil ikke lenger automatisk porteres til dette dokumentet.',
  /** The text for the "Unlink from Canvas" dialog error message. */
  'dialog.unlink-from-canvas.error': 'Kunne ikke fjerne koblingen til Canvas',
  /** The text for the "Unlink from Canvas" dialog success message. */
  'dialog.unlink-from-canvas.success': 'Fjernet koblingen til Canvas',
  /** The title for the "Unlink from Canvas" dialog. */
  'dialog.unlink-from-canvas.title': 'Fjern koblingen til Canvas',
  /** The text for the "Unlink from Canvas" dialog unlink button. */
  'dialog.unlink-from-canvas.unlink-action': 'Fjern koblingen nå',
  /** The text for the "Unlink from Canvas" dialog when the document is being unlinked. */
  'dialog.unlink-from-canvas.unlinking':
    'Du fjerner koblingen mellom <strong>“{{documentTitle}}”</strong> og Canvas.',

  /** The text for the "Navigate to Canvas" dialog error message. */
  'navigate-to-canvas-doc.error.missing-permissions':
    'Mangler tillatelser for å navigere til Canvas',
})
