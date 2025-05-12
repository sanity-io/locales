import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** The text for the "Edit in Canvas" action. */
  'action.edit-document': 'Uredi u Canvasu',
  /** The text for the "Link to Canvas" action. */
  'action.link-document': 'Poveži s Canvasom',
  /** The text for the "Link to Canvas" action when the document is not yet resolved. */
  'action.link-document-disabled.initial-value-not-resolved':
    'Pričekajte dok se ne riješe početne vrijednosti dokumenta',
  /** The text for the "Link to Canvas" action when the user doesn't have permissions to link the document to Canvas. */
  'action.link-document-disabled.missing-permissions':
    'Nemate dozvolu za povezivanje ovog dokumenta s Canvasom',
  /** The text for the "Link to Canvas" action when the document is not in the dashboard. */
  'action.link-document-disabled.not-in-dashboard':
    'Otvorite ovaj dokument u Dashboardu da biste ga povezali s Canvasom',
  /** The text for the "Link to Canvas" action when the document is a version document. */
  'action.link-document-disabled.version-document': 'Dokumenti verzija još nisu podržani u Canvasu',
  /** The text for the "Unlink from Canvas" action. */
  'action.unlink-document': 'Odspoji od Canvasa',

  /** The text for the action button in the banner when the document is linked to Canvas. */
  'banner.edit-document-in-canvas': 'Uredi u Canvasu',
  /** The text for the banner when the document is linked to Canvas. */
  'banner.linked-to-canvas': 'Ovaj dokument je povezan s Canvasom',

  /** The text for the "Confirm document changes" dialog cancel button. */
  'dialog.confirm-document-changes.cancel': 'Odustani',
  /** The text for the "Confirm document changes" dialog confirm button. */
  'dialog.confirm-document-changes.confirm': 'Prihvati i nastavi',
  /** The description for the "Confirm document changes" dialog. */
  'dialog.confirm-document-changes.description':
    'Ovaj dokument treba biti ažuriran da bi bio kompatibilan s Canvasom.\n Postojeći sadržaj može biti uređen ili uklonjen kao dio ovog procesa.',
  /** The description for the "Confirm document changes" dialog footer. */
  'dialog.confirm-document-changes.footer-description':
    'U bilo kojem trenutku možete prekinuti vezu s Canvasom',
  /** The title for the "Confirm document changes" dialog. */
  'dialog.confirm-document-changes.title': 'Potvrdi promjene dokumenta',
  /** The text for the Link to Canvas dialog when there is a error. */
  'dialog.link-to-canvas.error': 'Povezivanje s Canvasom nije uspjelo',
  /** The text for the "Link to Canvas" dialog when the document is being redirected. */
  'dialog.link-to-canvas.redirecting':
    'Preusmjeravamo vas na Canvas kako biste dovršili povezivanje...',
  /** The title for the "Link to Canvas" dialog. */
  'dialog.link-to-canvas.title': 'Poveži s Canvasom',
  /** The text for the "Link to Canvas" dialog when the document is being validated. */
  'dialog.link-to-canvas.validating': 'Validacija',
  /** The text for the "Unlink from Canvas" dialog cancel button. */
  'dialog.unlink-from-canvas.cancel': 'Odustani',
  /** The text for the "Unlink from Canvas" dialog description. */
  'dialog.unlink-from-canvas.description':
    'Jednom kada prekinete vezu, moći ćete ga uređivati ovdje i buduće izmjene u Canvasu više se automatski neće mapirati na ovaj dokument.',
  /** The text for the "Unlink from Canvas" dialog error message. */
  'dialog.unlink-from-canvas.error': 'Prekid veze s Canvasom nije uspio',
  /** The text for the "Unlink from Canvas" dialog success message. */
  'dialog.unlink-from-canvas.success': 'Prekinuta veza s Canvasom',
  /** The title for the "Unlink from Canvas" dialog. */
  'dialog.unlink-from-canvas.title': 'Odspoji od Canvasa',
  /** The text for the "Unlink from Canvas" dialog unlink button. */
  'dialog.unlink-from-canvas.unlink-action': 'Odspoji sada',
  /** The text for the "Unlink from Canvas" dialog when the document is being unlinked. */
  'dialog.unlink-from-canvas.unlinking':
    'Prekidate vezu <strong>“{{documentTitle}}”</strong> s Canvasom.',

  /** The text for the "Navigate to Canvas" dialog error message. */
  'navigate-to-canvas-doc.error.missing-permissions': 'Nedostaju dozvole za navigaciju do Canvasa',
})
