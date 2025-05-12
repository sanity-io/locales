import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** The text for the "Edit in Canvas" action. */
  'action.edit-document': undefined, // 'Edit in Canvas'
  /** The text for the "Link to Canvas" action. */
  'action.link-document': undefined, // 'Link to Canvas'
  /** The text for the "Link to Canvas" action when the document is not yet resolved. */
  'action.link-document-disabled.initial-value-not-resolved': undefined, // 'Please wait until the document initial values are resolved'
  /** The text for the "Link to Canvas" action when the user doesn't have permissions to link the document to Canvas. */
  'action.link-document-disabled.missing-permissions': undefined, // 'You don\'t have permissions to link this document to Canvas'
  /** The text for the "Link to Canvas" action when the document is not in the dashboard. */
  'action.link-document-disabled.not-in-dashboard': undefined, // 'Open this document in Dashboard to link to Canvas'
  /** The text for the "Link to Canvas" action when the document is a version document. */
  'action.link-document-disabled.version-document': undefined, // 'Version documents are not yet supported in Canvas'
  /** The text for the "Unlink from Canvas" action. */
  'action.unlink-document': undefined, // 'Unlink from Canvas'

  /** The text for the action button in the banner when the document is linked to Canvas. */
  'banner.edit-document-in-canvas': undefined, // 'Edit in Canvas'
  /** The text for the banner when the document is linked to Canvas. */
  'banner.linked-to-canvas': undefined, // 'This document is linked to Canvas'

  /** The text for the "Confirm document changes" dialog cancel button. */
  'dialog.confirm-document-changes.cancel': undefined, // 'Cancel'
  /** The text for the "Confirm document changes" dialog confirm button. */
  'dialog.confirm-document-changes.confirm': undefined, // 'Accept and continue'
  /** The description for the "Confirm document changes" dialog. */
  'dialog.confirm-document-changes.description': undefined, // 'This document needs to be updated to be compatible with Canvas.\n Existing content may be edited or removed as part of this process.'
  /** The description for the "Confirm document changes" dialog footer. */
  'dialog.confirm-document-changes.footer-description': undefined, // 'You can unlink from Canvas at any time'
  /** The title for the "Confirm document changes" dialog. */
  'dialog.confirm-document-changes.title': undefined, // 'Confirm document changes'
  /** The text for the Link to Canvas dialog when there is a error. */
  'dialog.link-to-canvas.error': undefined, // 'Failed to link to Canvas'
  /** The text for the "Link to Canvas" dialog when the document is being redirected. */
  'dialog.link-to-canvas.redirecting': undefined, // 'Taking you to Canvas to complete linking...'
  /** The title for the "Link to Canvas" dialog. */
  'dialog.link-to-canvas.title': undefined, // 'Link to Canvas'
  /** The text for the "Link to Canvas" dialog when the document is being validated. */
  'dialog.link-to-canvas.validating': undefined, // 'Validating'
  /** The text for the "Unlink from Canvas" dialog cancel button. */
  'dialog.unlink-from-canvas.cancel': undefined, // 'Cancel'
  /** The text for the "Unlink from Canvas" dialog description. */
  'dialog.unlink-from-canvas.description': undefined, // 'Once unlinked, it will be editable here and future edits in Canvas will no longer automatically map to this document.'
  /** The text for the "Unlink from Canvas" dialog error message. */
  'dialog.unlink-from-canvas.error': undefined, // 'Failed to unlink from Canvas'
  /** The text for the "Unlink from Canvas" dialog success message. */
  'dialog.unlink-from-canvas.success': undefined, // 'Unlinked from Canvas'
  /** The title for the "Unlink from Canvas" dialog. */
  'dialog.unlink-from-canvas.title': undefined, // 'Unlink from Canvas'
  /** The text for the "Unlink from Canvas" dialog unlink button. */
  'dialog.unlink-from-canvas.unlink-action': undefined, // 'Unlink now'
  /** The text for the "Unlink from Canvas" dialog when the document is being unlinked. */
  'dialog.unlink-from-canvas.unlinking': undefined, // 'You\'re unlinking  <strong>“{{documentTitle}}”</strong> from Canvas.'

  /** The text for the "Navigate to Canvas" dialog error message. */
  'navigate-to-canvas-doc.error.missing-permissions': undefined, // 'Missing permissions to navigate to Canvas'
})
