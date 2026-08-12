import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** The text for the "Edit in Canvas" action. */
  'action.edit-document': 'Rediger i Canvas',
  /** The text for the "Link to Canvas" action. */
  'action.link-document': 'Link til Canvas',
  /** The text for the "Link to Canvas" action when the document is not yet resolved. */
  'action.link-document-disabled.initial-value-not-resolved':
    'Vent venligst, indtil dokumentets startværdier er løst',
  /** The text for the "Link to Canvas" action when the user doesn't have permissions to link the document to Canvas. */
  'action.link-document-disabled.missing-permissions':
    'Du har ikke tilladelse til at linke dette dokument til Canvas',
  /** The text for the "Link to Canvas" action when the document is not in the dashboard. */
  'action.link-document-disabled.not-in-dashboard':
    'Åbn dette dokument i Dashboard for at linke til Canvas',
  /** The text for the "Link to Canvas" action when the document is a version document. */
  'action.link-document-disabled.version-document':
    'Versionsdokumenter understøttes endnu ikke i Canvas',
  /** The text for the "Unlink from Canvas" action. */
  'action.unlink-document': 'Fjern link fra Canvas',

  /** The text for the action button in the banner when the document is linked to Canvas. */
  'banner.edit-document-in-canvas': 'Rediger i Canvas',
  /** The text for the banner when the document is linked to Canvas. */
  'banner.linked-to-canvas': 'Dette dokument er linket til Canvas',

  /** The text for the "Confirm document changes" dialog cancel button. */
  'dialog.confirm-document-changes.cancel': 'Annuller',
  /** The text for the "Confirm document changes" dialog confirm button. */
  'dialog.confirm-document-changes.confirm': 'Accepter og fortsæt',
  /** The description for the "Confirm document changes" dialog. */
  'dialog.confirm-document-changes.description':
    'Dette dokument skal opdateres for at være kompatibelt med Canvas.\n Eksisterende indhold kan blive redigeret eller fjernet som en del af denne proces.',
  /** The description for the "Confirm document changes" dialog footer. */
  'dialog.confirm-document-changes.footer-description':
    'Du kan fjerne linket fra Canvas når som helst',
  /** The title for the "Confirm document changes" dialog. */
  'dialog.confirm-document-changes.title': 'Bekræft dokumentændringer',
  /** The text for the Link to Canvas dialog when there is a error. */
  'dialog.link-to-canvas.error': 'Kunne ikke linke til Canvas',
  /** The text for the "Link to Canvas" dialog when the document is being redirected. */
  'dialog.link-to-canvas.redirecting': 'Tager dig til Canvas for at fuldføre linkningen...',
  /** The title for the "Link to Canvas" dialog. */
  'dialog.link-to-canvas.title': 'Link til Canvas',
  /** The text for the "Link to Canvas" dialog when the document is being validated. */
  'dialog.link-to-canvas.validating': 'Validerer',
  /** The text for the "Unlink from Canvas" dialog cancel button. */
  'dialog.unlink-from-canvas.cancel': 'Annuller',
  /** The text for the "Unlink from Canvas" dialog description. */
  'dialog.unlink-from-canvas.description':
    'Når det er fjernet, vil det kunne redigeres her, og fremtidige redigeringer i Canvas vil ikke længere automatisk blive overført til dette dokument.',
  /** The text for the "Unlink from Canvas" dialog error message. */
  'dialog.unlink-from-canvas.error': 'Kunne ikke fjerne linket fra Canvas',
  /** The text for the "Unlink from Canvas" dialog success message. */
  'dialog.unlink-from-canvas.success': 'Linket er fjernet fra Canvas',
  /** The title for the "Unlink from Canvas" dialog. */
  'dialog.unlink-from-canvas.title': 'Fjern link fra Canvas',
  /** The text for the "Unlink from Canvas" dialog unlink button. */
  'dialog.unlink-from-canvas.unlink-action': 'Fjern link nu',
  /** The text for the "Unlink from Canvas" dialog when the document is being unlinked. */
  'dialog.unlink-from-canvas.unlinking':
    'Du fjerner linket <strong>“{{documentTitle}}”</strong> fra Canvas.',

  /** The text for the "Navigate to Canvas" dialog error message. */
  'navigate-to-canvas-doc.error.missing-permissions':
    'Manglende tilladelser til at navigere til Canvas',
})
