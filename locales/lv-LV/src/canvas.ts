import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** The text for the "Edit in Canvas" action. */
  'action.edit-document': 'Rediģēt Canvas',
  /** The text for the "Link to Canvas" action. */
  'action.link-document': 'Saite uz Canvas',
  /** The text for the "Link to Canvas" action when the document is not yet resolved. */
  'action.link-document-disabled.initial-value-not-resolved':
    'Lūdzu, uzgaidiet, kamēr dokumenta sākotnējās vērtības tiks atrisinātas',
  /** The text for the "Link to Canvas" action when the user doesn't have permissions to link the document to Canvas. */
  'action.link-document-disabled.missing-permissions':
    'Jums nav atļauju saistīt šo dokumentu ar Canvas',
  /** The text for the "Link to Canvas" action when the document is not in the dashboard. */
  'action.link-document-disabled.not-in-dashboard':
    'Atveriet šo dokumentu informācijas panelī, lai saistītu to ar Canvas',
  /** The text for the "Link to Canvas" action when the document is a version document. */
  'action.link-document-disabled.version-document':
    'Versiju dokumenti vēl netiek atbalstīti Canvas',
  /** The text for the "Unlink from Canvas" action. */
  'action.unlink-document': 'Atsaistīt no Canvas',

  /** The text for the action button in the banner when the document is linked to Canvas. */
  'banner.edit-document-in-canvas': 'Rediģēt Canvas',
  /** The text for the banner when the document is linked to Canvas. */
  'banner.linked-to-canvas': 'Šis dokuments ir saistīts ar Canvas',

  /** The text for the "Confirm document changes" dialog cancel button. */
  'dialog.confirm-document-changes.cancel': 'Atcelt',
  /** The text for the "Confirm document changes" dialog confirm button. */
  'dialog.confirm-document-changes.confirm': 'Apstiprināt un turpināt',
  /** The description for the "Confirm document changes" dialog. */
  'dialog.confirm-document-changes.description':
    'Šis dokuments ir jāatjaunina, lai tas būtu saderīgs ar Canvas.\n Esošais saturs var tikt rediģēts vai noņemts kā šī procesa daļa.',
  /** The description for the "Confirm document changes" dialog footer. */
  'dialog.confirm-document-changes.footer-description':
    'Jūs varat jebkurā laikā atsaistīt no Canvas',
  /** The title for the "Confirm document changes" dialog. */
  'dialog.confirm-document-changes.title': 'Apstiprināt dokumenta izmaiņas',
  /** The text for the Link to Canvas dialog when there is a error. */
  'dialog.link-to-canvas.error': 'Neizdevās saistīt ar Canvas',
  /** The text for the "Link to Canvas" dialog when the document is being redirected. */
  'dialog.link-to-canvas.redirecting': 'Jūs tiekat novirzīts uz Canvas, lai pabeigtu saistīšanu...',
  /** The title for the "Link to Canvas" dialog. */
  'dialog.link-to-canvas.title': 'Saite uz Canvas',
  /** The text for the "Link to Canvas" dialog when the document is being validated. */
  'dialog.link-to-canvas.validating': 'Validēšana',
  /** The text for the "Unlink from Canvas" dialog cancel button. */
  'dialog.unlink-from-canvas.cancel': 'Atcelt',
  /** The text for the "Unlink from Canvas" dialog description. */
  'dialog.unlink-from-canvas.description':
    'Kad būs atsaistīts, to varēs rediģēt šeit, un nākotnes rediģēšana Canvas vairs automātiski netiks kartēta uz šo dokumentu.',
  /** The text for the "Unlink from Canvas" dialog error message. */
  'dialog.unlink-from-canvas.error': 'Neizdevās atsaistīt no Canvas',
  /** The text for the "Unlink from Canvas" dialog success message. */
  'dialog.unlink-from-canvas.success': 'Atsaistīts no Canvas',
  /** The title for the "Unlink from Canvas" dialog. */
  'dialog.unlink-from-canvas.title': 'Atsaistīt no Canvas',
  /** The text for the "Unlink from Canvas" dialog unlink button. */
  'dialog.unlink-from-canvas.unlink-action': 'Atsaistīt tagad',
  /** The text for the "Unlink from Canvas" dialog when the document is being unlinked. */
  'dialog.unlink-from-canvas.unlinking':
    'Jūs atsaistāt <strong>“{{documentTitle}}”</strong> no Canvas.',

  /** The text for the "Navigate to Canvas" dialog error message. */
  'navigate-to-canvas-doc.error.missing-permissions': 'Trūkst atļauju, lai pārietu uz Canvas',
})
