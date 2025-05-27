import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** The text for the "Edit in Canvas" action. */
  'action.edit-document': 'Szerkesztés a Vásznon',
  /** The text for the "Link to Canvas" action. */
  'action.link-document': 'Hivatkozás a Vászonra',
  /** The text for the "Link to Canvas" action when the document is not yet resolved. */
  'action.link-document-disabled.initial-value-not-resolved':
    'Kérjük, várjon, amíg a dokumentum kezdeti értékei feloldódnak',
  /** The text for the "Link to Canvas" action when the user doesn't have permissions to link the document to Canvas. */
  'action.link-document-disabled.missing-permissions':
    'Nincs jogosultsága a dokumentumot a Vászonhoz kapcsolni',
  /** The text for the "Link to Canvas" action when the document is not in the dashboard. */
  'action.link-document-disabled.not-in-dashboard':
    'Nyissa meg ezt a dokumentumot a Vezérlőpulton, hogy hivatkozhasson a Vászonra',
  /** The text for the "Link to Canvas" action when the document is a version document. */
  'action.link-document-disabled.version-document':
    'A verzió dokumentumok még nem támogatottak a Vásznon',
  /** The text for the "Unlink from Canvas" action. */
  'action.unlink-document': 'Leválasztás a Vászonról',

  /** The text for the action button in the banner when the document is linked to Canvas. */
  'banner.edit-document-in-canvas': 'Szerkesztés a Vásznon',
  /** The text for the banner when the document is linked to Canvas. */
  'banner.linked-to-canvas': 'Ez a dokumentum kapcsolódik a Vászonhoz',

  /** The text for the "Confirm document changes" dialog cancel button. */
  'dialog.confirm-document-changes.cancel': 'Mégse',
  /** The text for the "Confirm document changes" dialog confirm button. */
  'dialog.confirm-document-changes.confirm': 'Elfogadás és folytatás',
  /** The description for the "Confirm document changes" dialog. */
  'dialog.confirm-document-changes.description':
    'Ezt a dokumentumot frissíteni kell, hogy kompatibilis legyen a Vászonnal.\n A meglévő tartalom szerkesztésre vagy eltávolításra kerülhet e folyamat során.',
  /** The description for the "Confirm document changes" dialog footer. */
  'dialog.confirm-document-changes.footer-description': 'Bármikor leválaszthatja a Vászonról',
  /** The title for the "Confirm document changes" dialog. */
  'dialog.confirm-document-changes.title': 'Dokumentum változások megerősítése',
  /** The text for the Link to Canvas dialog when there is a error. */
  'dialog.link-to-canvas.error': 'Nem sikerült a kapcsolódás a Vászonhoz',
  /** The text for the "Link to Canvas" dialog when the document is being redirected. */
  'dialog.link-to-canvas.redirecting': 'Átirányítjuk a Vászonra a kapcsolódás befejezéséhez...',
  /** The title for the "Link to Canvas" dialog. */
  'dialog.link-to-canvas.title': 'Hivatkozás a Vászonra',
  /** The text for the "Link to Canvas" dialog when the document is being validated. */
  'dialog.link-to-canvas.validating': 'Érvényesítés',
  /** The text for the "Unlink from Canvas" dialog cancel button. */
  'dialog.unlink-from-canvas.cancel': 'Mégse',
  /** The text for the "Unlink from Canvas" dialog description. */
  'dialog.unlink-from-canvas.description':
    'Ha leválasztja, itt lesz szerkeszthető, és a jövőbeli szerkesztések a Vásznon már nem fognak automatikusan a dokumentumhoz rendelődni.',
  /** The text for the "Unlink from Canvas" dialog error message. */
  'dialog.unlink-from-canvas.error': 'Nem sikerült leválasztani a Vászonról',
  /** The text for the "Unlink from Canvas" dialog success message. */
  'dialog.unlink-from-canvas.success': 'Leválasztva a Vászonról',
  /** The title for the "Unlink from Canvas" dialog. */
  'dialog.unlink-from-canvas.title': 'Leválasztás a Vászonról',
  /** The text for the "Unlink from Canvas" dialog unlink button. */
  'dialog.unlink-from-canvas.unlink-action': 'Leválasztás most',
  /** The text for the "Unlink from Canvas" dialog when the document is being unlinked. */
  'dialog.unlink-from-canvas.unlinking':
    'Leválasztja a(z) <strong>“{{documentTitle}}”</strong> dokumentumot a Vászonról.',

  /** The text for the "Navigate to Canvas" dialog error message. */
  'navigate-to-canvas-doc.error.missing-permissions':
    'Hiányzó jogosultságok a Vászonra való navigáláshoz',
})
