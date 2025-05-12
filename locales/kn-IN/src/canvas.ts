import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** The text for the "Edit in Canvas" action. */
  'action.edit-document': 'ಕ್ಯಾನ್ವಾಸ್‌ನಲ್ಲಿ ಸಂಪಾದಿಸಿ',
  /** The text for the "Link to Canvas" action. */
  'action.link-document': 'ಕ್ಯಾನ್ವಾಸ್‌ಗೆ ಲಿಂಕ್ ಮಾಡಿ',
  /** The text for the "Link to Canvas" action when the document is not yet resolved. */
  'action.link-document-disabled.initial-value-not-resolved':
    'ದಯವಿಟ್ಟು ದಾಖಲೆಯ ಪ್ರಾರಂಭಿಕ ಮೌಲ್ಯಗಳು ಬಗೆಹರಿಯುವವರೆಗೆ ಕಾಯಿರಿ',
  /** The text for the "Link to Canvas" action when the user doesn't have permissions to link the document to Canvas. */
  'action.link-document-disabled.missing-permissions':
    'ಈ ದಾಖಲೆಯನ್ನು ಕ್ಯಾನ್ವಾಸ್‌ಗೆ ಲಿಂಕ್ ಮಾಡಲು ನಿಮಗೆ ಅನುಮತಿಗಳು ಇಲ್ಲ',
  /** The text for the "Link to Canvas" action when the document is not in the dashboard. */
  'action.link-document-disabled.not-in-dashboard':
    'ಕ್ಯಾನ್ವಾಸ್‌ಗೆ ಲಿಂಕ್ ಮಾಡಲು ಈ ದಾಖಲೆಯನ್ನು ಡ್ಯಾಶ್‌ಬೋರ್ಡ್‌ನಲ್ಲಿ ತೆರೆಯಿರಿ',
  /** The text for the "Link to Canvas" action when the document is a version document. */
  'action.link-document-disabled.version-document':
    'ಆವೃತ್ತಿ ದಾಖಲೆಗಳು ಇನ್ನೂ ಕ್ಯಾನ್ವಾಸ್‌ನಲ್ಲಿ ಬೆಂಬಲಿಸಲಾಗಿಲ್ಲ',
  /** The text for the "Unlink from Canvas" action. */
  'action.unlink-document': 'ಕ್ಯಾನ್ವಾಸ್‌ನಿಂದ ಅನ್‌ಲಿಂಕ್ ಮಾಡಿ',

  /** The text for the action button in the banner when the document is linked to Canvas. */
  'banner.edit-document-in-canvas': 'ಕ್ಯಾನ್ವಾಸ್‌ನಲ್ಲಿ ಸಂಪಾದಿಸಿ',
  /** The text for the banner when the document is linked to Canvas. */
  'banner.linked-to-canvas': 'ಈ ದಾಖಲೆ ಕ್ಯಾನ್ವಾಸ್‌ಗೆ ಲಿಂಕ್ ಆಗಿದೆ',

  /** The text for the "Confirm document changes" dialog cancel button. */
  'dialog.confirm-document-changes.cancel': 'ರದ್ದುಮಾಡಿ',
  /** The text for the "Confirm document changes" dialog confirm button. */
  'dialog.confirm-document-changes.confirm': 'ಒಪ್ಪಿಕೊಂಡು ಮುಂದುವರಿಸಿ',
  /** The description for the "Confirm document changes" dialog. */
  'dialog.confirm-document-changes.description':
    'ಈ ದಾಖಲೆಯನ್ನು ಕ್ಯಾನ್ವಾಸ್‌ಗೆ ಅನುಕೂಲವಾಗಿ ನವೀಕರಿಸಲು ಅಗತ್ಯವಿದೆ.\n ಈ ಪ್ರಕ್ರಿಯೆಯ ಭಾಗವಾಗಿ ಇದುವರೆಗಿನ ವಿಷಯವನ್ನು ಸಂಪಾದಿಸಲಾಗುವುದು ಅಥವಾ ತೆಗೆದುಹಾಕಲಾಗುವುದು.',
  /** The description for the "Confirm document changes" dialog footer. */
  'dialog.confirm-document-changes.footer-description':
    'ನೀವು ಯಾವಾಗಲೂ ಕ್ಯಾನ್ವಾಸ್‌ನಿಂದ ಅನ್‌ಲಿಂಕ್ ಮಾಡಬಹುದು',
  /** The title for the "Confirm document changes" dialog. */
  'dialog.confirm-document-changes.title': 'ದಾಖಲೆ ಬದಲಾವಣೆಗಳನ್ನು ದೃಢೀಕರಿಸಿ',
  /** The text for the Link to Canvas dialog when there is a error. */
  'dialog.link-to-canvas.error': 'ಕ್ಯಾನ್ವಾಸ್‌ಗೆ ಲಿಂಕ್ ಮಾಡಲು ವಿಫಲವಾಗಿದೆ',
  /** The text for the "Link to Canvas" dialog when the document is being redirected. */
  'dialog.link-to-canvas.redirecting':
    'ಲಿಂಕ್ ಪೂರ್ಣಗೊಳಿಸಲು ನಿಮ್ಮನ್ನು ಕ್ಯಾನ್ವಾಸ್‌ಗೆ ಕರೆತರುತ್ತಿದ್ದೇನೆ...',
  /** The title for the "Link to Canvas" dialog. */
  'dialog.link-to-canvas.title': 'ಕ್ಯಾನ್ವಾಸ್‌ಗೆ ಲಿಂಕ್ ಮಾಡಿ',
  /** The text for the "Link to Canvas" dialog when the document is being validated. */
  'dialog.link-to-canvas.validating': 'ಮಾನ್ಯತೆ ಪರಿಶೀಲನೆ',
  /** The text for the "Unlink from Canvas" dialog cancel button. */
  'dialog.unlink-from-canvas.cancel': 'ರದ್ದುಮಾಡಿ',
  /** The text for the "Unlink from Canvas" dialog description. */
  'dialog.unlink-from-canvas.description':
    'ಒಮ್ಮೆ ಅನ್‌ಲಿಂಕ್ ಮಾಡಿದ ನಂತರ, ಇದು ಇಲ್ಲಿ ಸಂಪಾದನೆಗೆ ಅರ್ಹವಾಗಿರುತ್ತದೆ ಮತ್ತು ಭವಿಷ್ಯದ ಸಂಪಾದನೆಗಳು ಕ್ಯಾನ್ವಾಸ್‌ನಲ್ಲಿ ಈ ದಾಖಲೆಗೆ ಸ್ವಯಂಚಾಲಿತವಾಗಿ ಮ್ಯಾಪ್ ಆಗುವುದಿಲ್ಲ.',
  /** The text for the "Unlink from Canvas" dialog error message. */
  'dialog.unlink-from-canvas.error': 'ಕ್ಯಾನ್ವಾಸ್‌ನಿಂದ ಅನ್‌ಲಿಂಕ್ ಮಾಡಲು ವಿಫಲವಾಗಿದೆ',
  /** The text for the "Unlink from Canvas" dialog success message. */
  'dialog.unlink-from-canvas.success': 'ಕ್ಯಾನ್ವಾಸ್‌ನಿಂದ ಅನ್‌ಲಿಂಕ್ ಆಗಿದೆ',
  /** The title for the "Unlink from Canvas" dialog. */
  'dialog.unlink-from-canvas.title': 'ಕ್ಯಾನ್ವಾಸ್‌ನಿಂದ ಅನ್‌ಲಿಂಕ್ ಮಾಡಿ',
  /** The text for the "Unlink from Canvas" dialog unlink button. */
  'dialog.unlink-from-canvas.unlink-action': 'ಈಗ ಅನ್‌ಲಿಂಕ್ ಮಾಡಿ',
  /** The text for the "Unlink from Canvas" dialog when the document is being unlinked. */
  'dialog.unlink-from-canvas.unlinking':
    'ನೀವು <strong>“{{documentTitle}}”</strong> ಅನ್ನು ಕ್ಯಾನ್ವಾಸ್‌ನಿಂದ ಅನ್‌ಲಿಂಕ್ ಮಾಡುತ್ತಿದ್ದೀರಿ.',

  /** The text for the "Navigate to Canvas" dialog error message. */
  'navigate-to-canvas-doc.error.missing-permissions':
    'Canvas ಗೆ ನೆವಿಗೇಟ್ ಮಾಡಲು ಅಗತ್ಯವಾದ ಅನುಮತಿಗಳು ಕಾಣೆಯಾಗಿವೆ',
})
