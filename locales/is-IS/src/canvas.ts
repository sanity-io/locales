import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** The text for the "Edit in Canvas" action. */
  'action.edit-document': 'Breyta í Canvas',
  /** The text for the "Link to Canvas" action. */
  'action.link-document': 'Tengja við Canvas',
  /** The text for the "Link to Canvas" action when the document is not yet resolved. */
  'action.link-document-disabled.initial-value-not-resolved':
    'Vinsamlegast bíðið þar til upphafsgildi skjalsins eru leyst',
  /** The text for the "Link to Canvas" action when the user doesn't have permissions to link the document to Canvas. */
  'action.link-document-disabled.missing-permissions':
    'Þú hefur ekki heimildir til að tengja þetta skjal við Canvas',
  /** The text for the "Link to Canvas" action when the document is not in the dashboard. */
  'action.link-document-disabled.not-in-dashboard':
    'Opnaðu þetta skjal í mælaborði til að tengja við Canvas',
  /** The text for the "Link to Canvas" action when the document is a version document. */
  'action.link-document-disabled.version-document': 'Útgáfu skjöl eru ekki enn studd í Canvas',
  /** The text for the "Unlink from Canvas" action. */
  'action.unlink-document': 'Aftengja frá Canvas',

  /** The text for the action button in the banner when the document is linked to Canvas. */
  'banner.edit-document-in-canvas': 'Breyta í Canvas',
  /** The text for the banner when the document is linked to Canvas. */
  'banner.linked-to-canvas': 'Þetta skjal er tengt við Canvas',

  /** The text for the "Confirm document changes" dialog cancel button. */
  'dialog.confirm-document-changes.cancel': 'Hætta við',
  /** The text for the "Confirm document changes" dialog confirm button. */
  'dialog.confirm-document-changes.confirm': 'Samþykkja og halda áfram',
  /** The description for the "Confirm document changes" dialog. */
  'dialog.confirm-document-changes.description':
    'Þetta skjal þarf að uppfæra til að vera samhæft við Canvas.\n Núverandi efni gæti verið breytt eða fjarlægt sem hluti af þessu ferli.',
  /** The description for the "Confirm document changes" dialog footer. */
  'dialog.confirm-document-changes.footer-description': 'Þú getur aftengt frá Canvas hvenær sem er',
  /** The title for the "Confirm document changes" dialog. */
  'dialog.confirm-document-changes.title': 'Staðfesta breytingar á skjali',
  /** The text for the Link to Canvas dialog when there is a error. */
  'dialog.link-to-canvas.error': 'Tenging við Canvas mistókst',
  /** The text for the "Link to Canvas" dialog when the document is being redirected. */
  'dialog.link-to-canvas.redirecting': 'Fer með þig til Canvas til að ljúka tengingu...',
  /** The title for the "Link to Canvas" dialog. */
  'dialog.link-to-canvas.title': 'Tengja við Canvas',
  /** The text for the "Link to Canvas" dialog when the document is being validated. */
  'dialog.link-to-canvas.validating': 'Staðfesting',
  /** The text for the "Unlink from Canvas" dialog cancel button. */
  'dialog.unlink-from-canvas.cancel': 'Hætta við',
  /** The text for the "Unlink from Canvas" dialog description. */
  'dialog.unlink-from-canvas.description':
    'Eftir aftengingu verður hægt að breyta því hér og framtíðarbreytingar í Canvas munu ekki lengur sjálfkrafa kortleggjast við þetta skjal.',
  /** The text for the "Unlink from Canvas" dialog error message. */
  'dialog.unlink-from-canvas.error': 'Aftenging frá Canvas mistókst',
  /** The text for the "Unlink from Canvas" dialog success message. */
  'dialog.unlink-from-canvas.success': 'Aftengt frá Canvas',
  /** The title for the "Unlink from Canvas" dialog. */
  'dialog.unlink-from-canvas.title': 'Aftengja frá Canvas',
  /** The text for the "Unlink from Canvas" dialog unlink button. */
  'dialog.unlink-from-canvas.unlink-action': 'Aftengja núna',
  /** The text for the "Unlink from Canvas" dialog when the document is being unlinked. */
  'dialog.unlink-from-canvas.unlinking':
    'Þú ert að aftengja <strong>“{{documentTitle}}”</strong> frá Canvas.',

  /** The text for the "Navigate to Canvas" dialog error message. */
  'navigate-to-canvas-doc.error.missing-permissions': 'Vantar heimildir til að fara í Canvas',
})
