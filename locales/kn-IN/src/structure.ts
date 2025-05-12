import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Label for the "Copy Document URL" document action */
  'action.copy-document-url.label': 'ಡಾಕ್ಯುಮೆಂಟ್ URL ನಕಲಿಸಿ',
  /** Tooltip when action button is disabled because the operation is not ready   */
  'action.delete.disabled.not-ready': 'ಕಾರ್ಯಾಚರಣೆ ಸಿದ್ಧವಾಗಿಲ್ಲ',
  /** Tooltip when action button is disabled because the document does not exist */
  'action.delete.disabled.nothing-to-delete':
    'ಈ ದಾಖಲೆಯು ಇನ್ನೂ ಅಸ್ತಿತ್ವದಲ್ಲಿಲ್ಲ ಅಥವಾ ಈಗಾಗಲೇ ಅಳಿಸಲಾಗಿದೆ',
  /** Label for the "Delete" document action button */
  'action.delete.label': 'ಅಳಿಸು',
  /** Label for the "Delete" document action while the document is being deleted */
  'action.delete.running.label': 'ಅಳಿಸುತ್ತಿದ್ದಾರೆ…',
  /** Tooltip when action is disabled because the document is linked to Canvas */
  'action.disabled-by-canvas.tooltip':
    'ಕೆಲವು ದಾಖಲೆ ಕ್ರಿಯೆಗಳು Canvas ಗೆ ಲಿಂಕ್ ಮಾಡಲಾದ ದಾಖಲೆಗಳಿಗೆ ಅಶಕ್ತಗೊಳಿಸಲಾಗಿದೆ',
  /** Message prompting the user to confirm discarding changes */
  'action.discard-changes.confirm-dialog.confirm-discard-changes':
    'ನೀವು ಕೊನೆಯ ಬಾರಿ ಪ್ರಕಟಿಸಿದ ನಂತರದ ಎಲ್ಲಾ ಬದಲಾವಣೆಗಳನ್ನು ತ್ಯಜಿಸಲು ಖಚಿತರಾಗಿದ್ದೀರಾ?',
  /** Tooltip when action is disabled because the document has no unpublished changes */
  'action.discard-changes.disabled.no-change': 'ಈ ದಾಖಲೆಯು ಅಪ್ರಕಟಿತ ಬದಲಾವಣೆಗಳಿಲ್ಲ',
  /** Tooltip when action is disabled because the document is not published */
  'action.discard-changes.disabled.not-published': 'ಈ ದಾಖಲೆಯು ಪ್ರಕಟಿಸಲಾಗಿಲ್ಲ',
  /** Tooltip when action button is disabled because the operation is not ready   */
  'action.discard-changes.disabled.not-ready': 'ಕಾರ್ಯಾಚರಣೆ ಸಿದ್ಧವಾಗಿಲ್ಲ',
  /** Label for the "Discard changes" document action */
  'action.discard-changes.label': 'ಬದಲಾವಣೆಗಳನ್ನು ತ್ಯಜಿಸು',
  /** Tooltip when action is disabled because the operation is not ready   */
  'action.duplicate.disabled.not-ready': 'ಕಾರ್ಯಾಚರಣೆ ಸಿದ್ಧವಾಗಿಲ್ಲ',
  /** Tooltip when action is disabled because the document doesn't exist */
  'action.duplicate.disabled.nothing-to-duplicate':
    'ಈ ದಾಖಲೆಯು ಇನ್ನೂ ಅಸ್ತಿತ್ವದಲ್ಲಿಲ್ಲ ಹಾಗಾಗಿ ನಕಲಿಸಲು ಏನೂ ಇಲ್ಲ',
  /** Label for the "Duplicate" document action */
  'action.duplicate.label': 'ನಕಲು',
  /** Label for the "Duplicate" document action while the document is being duplicated */
  'action.duplicate.running.label': 'ನಕಲು ಮಾಡುತ್ತಿದ್ದಾರೆ…',
  /** Tooltip when publish button is disabled because the document is already published, and published time is unavailable.*/
  'action.publish.already-published.no-time-ago.tooltip': 'ಈಗಾಗಲೇ ಪ್ರಕಟಿಸಲಾಗಿದೆ',
  /** Tooltip when publish button is disabled because the document is already published.*/
  'action.publish.already-published.tooltip': 'ಪ್ರಕಟಿಸಿದ {{timeSincePublished}} ಹಿಂದೆ',
  /** Tooltip when action is disabled because the studio is not ready.*/
  'action.publish.disabled.not-ready': 'ಕಾರ್ಯಾಚರಣೆ ಸಿದ್ಧವಾಗಿಲ್ಲ',
  /** Label for action when there are pending changes.*/
  'action.publish.draft.label': 'ಪ್ರಕಟಿಸು',
  /** Label for the "Publish" document action */
  'action.publish.label': 'ಪ್ರಕಟಿಸು',
  /** Label for the "Publish" document action when the document has live edit enabled.*/
  'action.publish.live-edit.label': 'ಪ್ರಕಟಿಸು',
  /** Fallback tooltip for the "Publish" document action when publish is invoked for a document with live edit enabled.*/
  'action.publish.live-edit.publish-disabled':
    'ಈ ದಾಖಲೆ ಪ್ರಕಾರಕ್ಕೆ ಲೈವ್ ಎಡಿಟ್ ಸಕ್ರಿಯವಾಗಿದ್ದು, ಪ್ರಕಟಿಸಲು ಸಾಧ್ಯವಿಲ್ಲ',
  /** Tooltip for the "Publish" document action when the document has live edit enabled.*/
  'action.publish.live-edit.tooltip':
    'ಈ ವಿಷಯ ಪ್ರಕಾರಕ್ಕೆ ಲೈವ್ ಎಡಿಟ್ ಸಕ್ರಿಯವಾಗಿದ್ದು, ನೀವು ಬದಲಾವಣೆಗಳನ್ನು ಮಾಡುವಂತೆಯೇ ಪ್ರಕಟಣೆ ಸ್ವಯಂಚಾಲಿತವಾಗಿ ನಡೆಯುತ್ತದೆ',
  /** Tooltip when publish button is disabled because there are no changes.*/
  'action.publish.no-changes.tooltip': 'ಅಪ್ರಕಟಿತ ಬದಲಾವಣೆಗಳು ಇಲ್ಲ',
  /** Label for the "Publish" document action when there are no changes.*/
  'action.publish.published.label': 'ಪ್ರಕಟಿಸಲಾಗಿದೆ',
  /** Label for the "Publish" document action while publish is being executed.*/
  'action.publish.running.label': 'ಪ್ರಕಟಿಸುತ್ತಿದ್ದಾರೆ…',
  /** Tooltip when the "Publish" document action is disabled due to validation issues */
  'action.publish.validation-issues.tooltip':
    'ಈ ದಾಖಲೆಯನ್ನು ಪ್ರಕಟಿಸುವ ಮೊದಲು ಸರಿಪಡಿಸಬೇಕಾದ ಮಾನ್ಯತಾ ದೋಷಗಳಿವೆ',
  /** Tooltip when publish button is waiting for validation and async tasks to complete.*/
  'action.publish.waiting': 'ಪ್ರಕಟಿಸುವ ಮೊದಲು ಕಾರ್ಯಗಳು ಮುಗಿಯುವವರೆಗೆ ಕಾಯುತ್ತಿದೆ',
  /** Message prompting the user to confirm that they want to restore to an earlier revision*/
  'action.restore.confirm.message': 'ನೀವು ಈ ದಾಖಲೆಯನ್ನು ಹಿಂದಿನ ಆವೃತ್ತಿಗೆ ಮರಳಿಸಲು ಖಚಿತವಾಗಿದ್ದೀರಾ?',
  /** Fallback tooltip for when user is looking at the initial revision */
  'action.restore.disabled.cannot-restore-initial': 'ನೀವು ಮೊದಲ ಆವೃತ್ತಿಗೆ ಮರಳಿಸಲು ಸಾಧ್ಯವಿಲ್ಲ',
  /** Label for the "Restore" document action */
  'action.restore.label': 'ಮರಳಿಸು',
  /** Default tooltip for the action */
  'action.restore.tooltip': 'ಈ ಆವೃತ್ತಿಗೆ ಮರಳಿಸು',
  /** Tooltip when action is disabled because the document is not already published */
  'action.unpublish.disabled.not-published': 'ಈ ದಾಖಲೆ ಪ್ರಕಟಿಸಲಾಗಿಲ್ಲ',
  /** Tooltip when action is disabled because the operation is not ready   */
  'action.unpublish.disabled.not-ready': 'ಕಾರ್ಯಾಚರಣೆ ಸಿದ್ಧವಿಲ್ಲ',
  /** Label for the "Unpublish" document action */
  'action.unpublish.label': 'ಪ್ರಕಟಣೆ ರದ್ದುಗೊಳಿಸು',
  /** Fallback tooltip for the Unpublish document action when publish is invoked for a document with live edit enabled.*/
  'action.unpublish.live-edit.disabled':
    'ಈ ದಾಖಲೆಯಲ್ಲಿ ಲೈವ್ ಎಡಿಟ್ ಸಕ್ರಿಯವಾಗಿದೆ ಮತ್ತು ಅದನ್ನು ಪ್ರಕಟಣೆ ರದ್ದುಗೊಳಿಸಲು ಸಾಧ್ಯವಿಲ್ಲ',

  /** Description for the archived release banner, rendered when viewing the history of a version document from the publihed view */
  'banners.archived-release.description':
    'ನೀವು ಓದಲು ಮಾತ್ರ ಅನುಮತಿಸಿದ ದಾಖಲೆಯನ್ನು ನೋಡುತ್ತಿದ್ದೀರಿ, ಇದು <VersionBadge> ಒಂದು ಬಿಡುಗಡೆಯ</VersionBadge> ಭಾಗವಾಗಿ ಆರ್ಕೈವ್ ಮಾಡಲಾಗಿದೆ. ಇದನ್ನು ಸಂಪಾದಿಸಲು ಸಾಧ್ಯವಿಲ್ಲ',
  /** The text for the restore button on the deleted document banner */
  'banners.deleted-document-banner.restore-button.text': 'ಇತ್ತೀಚಿನ ಆವೃತ್ತಿಯನ್ನು ಮರಳಿಸು',
  /** The text content for the deleted document banner */
  'banners.deleted-document-banner.text': 'ಈ ದಾಖಲೆಯನ್ನು ಅಳಿಸಲಾಗಿದೆ.',
  /** The text content for the deprecated document type banner */
  'banners.deprecated-document-type-banner.text': 'ಈ ದಾಖಲೆ ಪ್ರಕಾರವನ್ನು ಅಪ್ರಚಲಿತಗೊಳಿಸಲಾಗಿದೆ.',
  /** The text for publish action for discarding the version */
  'banners.live-edit-draft-banner.discard.tooltip': 'ಕರಡು ತ್ಯಜಿಸಿ',
  /** The text for publish action for the draft banner */
  'banners.live-edit-draft-banner.publish.tooltip': 'ಸಂಪಾದನೆ ಮುಂದುವರೆಸಲು ಪ್ರಕಟಿಸಿ',
  /** The text content for the live edit document when it's a draft */
  'banners.live-edit-draft-banner.text':
    'ಟೈಪ್ <strong>{{schemaType}}</strong> ಗೆ <code>liveEdit</code> ಸಕ್ರಿಯವಾಗಿದೆ, ಆದರೆ ಈ ದಾಖಲೆಯ ಕರಡು ಆವೃತ್ತಿ ಇದೆ. ನೇರ ಸಂಪಾದನೆ ಮುಂದುವರೆಸಲು ಕರಡು ಪ್ರಕಟಿಸಿ ಅಥವಾ ತ್ಯಜಿಸಿ.',
  /** The text for the permission check banner if the user only has one role, and it does not allow publishing this document */
  'banners.permission-check-banner.missing-permission_create_one':
    'ನಿಮ್ಮ ಪಾತ್ರ <Roles/> ಈ ದಾಖಲೆಯನ್ನು ರಚಿಸಲು ಅನುಮತಿಗಳಿಲ್ಲ.',
  /** The text for the permission check banner if the user only has multiple roles, but they do not allow publishing this document */
  'banners.permission-check-banner.missing-permission_create_other':
    'ನಿಮ್ಮ ಪಾತ್ರಗಳು <Roles/> ಈ ದಾಖಲೆಯನ್ನು ರಚಿಸಲು ಅನುಮತಿಗಳಿಲ್ಲ.',
  /** The text for the permission check banner if the user only has one role, and it does not allow editing this document */
  'banners.permission-check-banner.missing-permission_update_one':
    'ನಿಮ್ಮ ಪಾತ್ರ <Roles/> ಈ ದಾಖಲೆಯನ್ನು ನವೀಕರಿಸಲು ಅನುಮತಿಗಳಿಲ್ಲ.',
  /** The text for the permission check banner if the user only has multiple roles, but they do not allow editing this document */
  'banners.permission-check-banner.missing-permission_update_other':
    'ನಿಮ್ಮ ಪಾತ್ರಗಳು <Roles/> ಈ ದಾಖಲೆಯನ್ನು ನವೀಕರಿಸಲು ಅನುಮತಿಗಳಿಲ್ಲ.',
  /** The pending text for the request permission button that appears for viewer roles */
  'banners.permission-check-banner.request-permission-button.sent': 'ಸಂಪಾದಕರ ವಿನಂತಿ ಕಳುಹಿಸಲಾಗಿದೆ',
  /** The text for the request permission button that appears for viewer roles */
  'banners.permission-check-banner.request-permission-button.text': 'ಸಂಪಾದನೆ ಮಾಡಲು ಕೇಳಿ',
  /** Description for the archived release banner, rendered when viewing the history of a version document from the published view */
  'banners.published-release.description':
    'ನೀವು ಓದಲು ಮಾತ್ರ ಅನುಮತಿಸಿದ ದಾಖಲೆಯನ್ನು ನೋಡುತ್ತಿದ್ದೀರಿ, ಇದು <VersionBadge> ಒಂದು ಬಿಡುಗಡೆಯ</VersionBadge> ಭಾಗವಾಗಿ ಪ್ರಕಟಿಸಲಾಗಿದೆ. ಇದನ್ನು ಸಂಪಾದಿಸಲು ಸಾಧ್ಯವಿಲ್ಲ',
  /** The text for the reload button */
  'banners.reference-changed-banner.reason-changed.reload-button.text': 'ಉಲ್ಲೇಖವನ್ನು ಮರುಲೋಡ್ ಮಾಡಿ',
  /** The text for the reference change banner if the reason is that the reference has been changed */
  'banners.reference-changed-banner.reason-changed.text':
    'ನೀವು ಇದನ್ನು ತೆರೆದ ನಂತರ ಈ ಉಲ್ಲೇಖ ಬದಲಾಗಿದೆ.',
  /** The text for the close button */
  'banners.reference-changed-banner.reason-removed.close-button.text': 'ಉಲ್ಲೇಖವನ್ನು ಮುಚ್ಚಿ',
  /** The text for the reference change banner if the reason is that the reference has been deleted */
  'banners.reference-changed-banner.reason-removed.text':
    'ನೀವು ಇದನ್ನು ತೆರೆದ ನಂತರ ಈ ಉಲ್ಲೇಖವನ್ನು ತೆಗೆದುಹಾಕಲಾಗಿದೆ.',
  /** The text that appears for the action button to add the current document to the global release */
  'banners.release.action.add-to-release': 'ಬಿಡುಗಡೆಗೆ ಸೇರಿಸಿ',
  /** The text that appears for the action button to add the current document to the global release */
  'banners.release.action.open-to-edit': 'ಸಂಪಾದನೆಗೆ ಬಿಡುಗಡೆಯನ್ನು ತೆರೆಯಿರಿ',
  /** Toast description in case an error occurs when adding a document to a release  */
  'banners.release.error.description': 'ದಾಖಲೆಯನ್ನು ಬಿಡುಗಡೆಗೆ ಸೇರಿಸುವಾಗ ದೋಷ ಸಂಭವಿಸಿದೆ: {{message}}',
  /** Toast title in case an error occurs when adding a document to a release  */
  'banners.release.error.title': 'ದಾಖಲೆಯನ್ನು ಬಿಡುಗಡೆಗೆ ಸೇರಿಸುವಲ್ಲಿ ದೋಷ',
  /** The text for the banner that appears when a document only has versions but is in a draft or published pinned release */
  'banners.release.navigate-to-edit-description': 'ದಾಖಲೆಯು ಕೇವಲ',
  /** The text for the banner that appears when a document only has versions but is in a draft or published pinned release */
  'banners.release.navigate-to-edit-description-end_one': 'ಬಿಡುಗಡೆಯಲ್ಲಿ ಮಾತ್ರ ಇದೆ',
  /** The text for the banner that appears when a document only has versions but is in a draft or published pinned release */
  'banners.release.navigate-to-edit-description-end_other': 'ಬಿಡುಗಡೆಗಳಲ್ಲಿ ಮಾತ್ರ ಇದೆ',
  /** The text for the banner that appears when there are multiple versions but no drafts or published, only one extra releases */
  'banners.release.navigate-to-edit-description-multiple_one':
    'ಈ ದಾಖಲೆಯು <VersionBadge/> ಬಿಡುಗಡೆಯ ಭಾಗವಾಗಿದೆ ಮತ್ತು {{count}} ಹೆಚ್ಚುವರಿ ಬಿಡುಗಡೆಯಲ್ಲಿದೆ.',
  /** The text for the banner that appears when there are multiple versions but no drafts or published, more than one extra releases */
  'banners.release.navigate-to-edit-description-multiple_other':
    'ಈ ದಾಖಲೆಯು <VersionBadge/> ಬಿಡುಗಡೆಯ ಭಾಗವಾಗಿದೆ ಮತ್ತು {{count}} ಹೆಚ್ಚುವರಿ ಬಿಡುಗಡೆಗಳಲ್ಲಿದೆ',
  /** The text for the banner that appears when a document only has one version but is in a draft or published pinned release */
  'banners.release.navigate-to-edit-description-single':
    'ಈ ದಾಖಲೆಯು <VersionBadge/> ಬಿಡುಗಡೆಯ ಭಾಗವಾಗಿದೆ',
  /** The text for the banner that appears when a document is not in the current global release */
  'banners.release.not-in-release': '<Label>{{title}}</Label> ಬಿಡುಗಡೆಯಲ್ಲಿ ಇಲ್ಲ.',
  /** Description of toast that will appear in case of latency between the user adding a document to a release and the UI reflecting it */
  'banners.release.waiting.description':
    'ದಾಖಲೆಯನ್ನು ಬಿಡುಗಡೆಗೆ ಸೇರಿಸುವಾಗ ದಯವಿಟ್ಟು ಕಾಯಿರಿ. ಇದು ಕೆಲವು ಸೆಕೆಂಡುಗಳಿಗಿಂತ ಹೆಚ್ಚು ಸಮಯ ತಗೊಳ್ಳಬಾರದು.',
  /** Title of toast that will appear in case of latency between the user adding a document to a release and the UI reflecting it */
  'banners.release.waiting.title': 'ದಾಖಲೆಯನ್ನು ಬಿಡುಗಡೆಗೆ ಸೇರಿಸುತ್ತಿದೆ…',
  /** The text content for the unpublished document banner when is part of a release */
  'banners.unpublished-release-banner.text':
    'ಈ ದಾಖಲೆಯು <VersionBadge>{{title}}</VersionBadge> ಬಿಡುಗಡೆಯ ಭಾಗವಾಗಿ ಅಪ್ರಕಟಿತವಾಗಲಿದೆ',

  /** Browser/tab title when creating a new document of a given type */
  'browser-document-title.new-document': 'ಹೊಸ {{schemaType}}',
  /** Browser/tab title when editing a document where the title cannot be resolved from preview configuration */
  'browser-document-title.untitled-document': 'ಶೀರ್ಷಿಕೆ ಇಲ್ಲದ',

  /** The action menu button aria-label */
  'buttons.action-menu-button.aria-label': 'ದಾಖಲೆ ಕ್ರಿಯೆಗಳನ್ನು ತೆರೆಯಿರಿ',
  /** The action menu button tooltip */
  'buttons.action-menu-button.tooltip': 'ದಾಖಲೆ ಕ್ರಿಯೆಗಳು',
  /** The aria-label for the split pane button on the document panel header */
  'buttons.split-pane-button.aria-label': 'ಪ್ಯಾನೆಲ್ ಬಲಕ್ಕೆ ವಿಭಜಿಸಿ',
  /** The tool tip for the split pane button on the document panel header */
  'buttons.split-pane-button.tooltip': 'ಪ್ಯಾನೆಲ್ ಬಲಕ್ಕೆ ವಿಭಜಿಸಿ',
  /** The title for the close button on the split pane on the document panel header */
  'buttons.split-pane-close-button.title': 'ಸ್ಪ್ಲಿಟ್ ಪೇನ್ ಮುಚ್ಚು',
  /** The title for the close group button on the split pane on the document panel header */
  'buttons.split-pane-close-group-button.title': 'ಪೇನ್ ಗುಂಪು ಮುಚ್ಚು',

  /** The text for the canvas linked banner action button */
  'canvas.banner.edit-in-canvas-action': 'Canvas ನಲ್ಲಿ ಸಂಪಾದಿಸಿ',
  /** The text for the canvas linked banner when the document is a draft */
  'canvas.banner.linked-text.draft': 'ಈ ಮುಸದ್ದೆ ದಾಖಲೆಯು Canvas ಗೆ ಲಿಂಕ್ ಮಾಡಲಾಗಿದೆ',
  /** The text for the canvas linked banner when the document is a live document */
  'canvas.banner.linked-text.published': 'ಈ ಜೀವಂತ ದಾಖಲೆಯು Canvas ಗೆ ಲಿಂಕ್ ಮಾಡಲಾಗಿದೆ',
  /** The text for the canvas linked banner when the document is a version document */
  'canvas.banner.linked-text.version': 'ಈ ಆವೃತ್ತಿ ದಾಖಲೆಯು Canvas ಗೆ ಲಿಂಕ್ ಮಾಡಲಾಗಿದೆ',
  /** The text for the canvas linked banner popover button */
  'canvas.banner.popover-button-text': 'ಇನ್ನಷ್ಟು ತಿಳಿಯಿರಿ',
  /** The description for the canvas linked banner popover */
  'canvas.banner.popover-description':
    'Canvas ನಿಮಗೆ ಸ್ವತಂತ್ರ-ರೂಪದ ಸಂಪಾದಕನಲ್ಲಿ ಲೇಖನ ಮಾಡಲು ಅನುಮತಿಸುತ್ತದೆ, ಅದು ನೀವು ಟೈಪ್ ಮಾಡುವಂತೆಯೇ Studio ಗೆ ಸಂರಚಿತ ವಿಷಯವಾಗಿ ಹಿಂದಿರುಗುತ್ತದೆ.',
  /** The heading for the canvas linked banner popover */
  'canvas.banner.popover-heading': 'ಆದ್ಯತೆಯ ಲೇಖನ',

  /** The label used in the changes inspector for the from selector */
  'changes.from.label': 'ಇಂದ',
  /* The label for the history tab in the changes inspector*/
  'changes.tab.history': 'ಇತಿಹಾಸ',
  /* The label for the review tab in the changes inspector*/
  'changes.tab.review-changes': 'ಪರಿಶೀಲನೆ ಬದಲಾವಣೆಗಳು',
  /** The label used in the changes inspector for the to selector */
  'changes.to.label': 'ಗೆ',

  /** The error message shown when the specified document comparison mode is not supported */
  'compare-version.error.invalidModeParam':
    '"{{input}}" ಎಂಬುದು ದಾಖಲೆ ಹೋಲಿಕೆ ಮೋಡ್‌ಗೆ ಬೆಂಬಲಿಸದ ಪರಿಕರ.',
  /** The error message shown when the next document for comparison could not be extracted from the URL */
  'compare-version.error.invalidNextDocumentParam': 'ಮುಂದಿನ ದಾಖಲೆ ಪ್ಯಾರಾಮೀಟರ್ ಅಮಾನ್ಯವಾಗಿದೆ.',
  /** The error message shown when the document comparison URL could not be parsed */
  'compare-version.error.invalidParams.title': 'ದಾಖಲೆಗಳನ್ನು ಹೋಲಿಸಲು ಅಸಾಧ್ಯ',
  /** The error message shown when the previous document for comparison could not be extracted from the URL */
  'compare-version.error.invalidPreviousDocumentParam': 'ಹಿಂದಿನ ದಾಖಲೆ ಪ್ಯಾರಾಮೀಟರ್ ಅಮಾನ್ಯವಾಗಿದೆ.',

  /** The text for the tooltip when the "Compare versions" action for a document is disabled */
  'compare-versions.menu-item.disabled-reason': 'ಈ ದಾಖಲೆಯ ಇತರ ಆವೃತ್ತಿಗಳನ್ನು ಹೋಲಿಸಲು ಯಾವುದೂ ಇಲ್ಲ.',
  /** The text for the "Compare versions" action for a document */
  'compare-versions.menu-item.title': 'ಆವೃತ್ತಿಗಳನ್ನು ಹೋಲಿಸಿ',
  /** The string used to label draft documents */
  'compare-versions.status.draft': 'ಕರಡು',
  /** The string used to label published documents */
  'compare-versions.status.published': 'ಪ್ರಕಟಿತ',
  /** The title used when comparing versions of a document */
  'compare-versions.title': 'ಆವೃತ್ತಿಗಳನ್ನು ಹೋಲಿಸಿ',

  /** The text in the "Cancel" button in the confirm delete dialog that cancels the action and closes the dialog */
  'confirm-delete-dialog.cancel-button.text': 'ರದ್ದುಮಾಡು',
  /** Used in `confirm-delete-dialog.cdr-summary.title` */
  'confirm-delete-dialog.cdr-summary.document-count_one': '1 ದಾಖಲೆ',
  /** Used in `confirm-delete-dialog.cdr-summary.title` */
  'confirm-delete-dialog.cdr-summary.document-count_other': '{{count}} ದಾಖಲೆಗಳು',
  /** The text that appears in the subtitle `<summary>` that lists the datasets below the title */
  'confirm-delete-dialog.cdr-summary.subtitle_one': 'ಡೇಟಾಸೆಟ್: {{datasets}}',
  /** The text that appears in the subtitle `<summary>` that lists the datasets below the title */
  'confirm-delete-dialog.cdr-summary.subtitle_other': 'ಡೇಟಾಸೆಟ್‌ಗಳು: {{datasets}}',
  /** The text that appears in the subtitle `<summary>` that lists the datasets below the title */
  'confirm-delete-dialog.cdr-summary.subtitle_unavailable_one': 'ಲಭ್ಯವಿಲ್ಲದ ಡೇಟಾಸೆಟ್',
  /** The text that appears in the subtitle `<summary>` that lists the datasets below the title */
  'confirm-delete-dialog.cdr-summary.subtitle_unavailable_other': 'ಲಭ್ಯವಿಲ್ಲದ ಡೇಟಾಸೆಟ್‌ಗಳು',
  /** The text that appears in the title `<summary>` that includes the list of CDRs (singular) */
  'confirm-delete-dialog.cdr-summary.title_one': '{{documentCount}} ಇನ್ನೊಂದು ಡೇಟಾಸೆಟ್‌ನಲ್ಲಿ',
  /** The text that appears in the title `<summary>` that includes the list of CDRs (plural) */
  'confirm-delete-dialog.cdr-summary.title_other': '{{documentCount}} {{count}} ಡೇಟಾಸೆಟ್‌ಗಳಲ್ಲಿ',
  /** Appears when hovering over the copy button to copy */
  'confirm-delete-dialog.cdr-table.copy-id-button.tooltip': 'ಐಡಿಯನ್ನು ಕ್ಲಿಪ್‌ಬೋರ್ಡ್‌ಗೆ ನಕಲಿಸಿ',
  /** The header for the dataset column in the list of cross-dataset references found */
  'confirm-delete-dialog.cdr-table.dataset.label': 'ಡೇಟಾಸೆಟ್',
  /** The header for the document ID column in the list of cross-dataset references found */
  'confirm-delete-dialog.cdr-table.document-id.label': 'ದಾಖಲೆ ಐಡಿ',
  /** The toast title when the copy button has been clicked but copying failed */
  'confirm-delete-dialog.cdr-table.id-copied-toast.title-failed':
    'ಡಾಕ್ಯುಮೆಂಟ್ ID ನಕಲಿಸಲು ವಿಫಲವಾಗಿದೆ',
  /** The header for the project ID column in the list of cross-dataset references found */
  'confirm-delete-dialog.cdr-table.project-id.label': 'ಪ್ರಾಜೆಕ್ಟ್ ಐಡಿ',
  /** The text in the "Delete anyway" button in the confirm delete dialog that confirms the action */
  'confirm-delete-dialog.confirm-anyway-button.text_delete': 'ಹೌದು, ಅಳಿಸಿ',
  /** The text in the "Unpublish anyway" button in the confirm delete dialog that confirms the action */
  'confirm-delete-dialog.confirm-anyway-button.text_unpublish': 'ಹೌದು, ಪ್ರಕಟಣೆ ತೆಗೆದುಹಾಕಿ',
  /** The text in the "Delete now" button in the confirm delete dialog that confirms the action */
  'confirm-delete-dialog.confirm-button.text_delete': 'ಈಗ ಅಳಿಸಿ',
  /** The text in the "Unpublish now" button in the confirm delete dialog that confirms the action */
  'confirm-delete-dialog.confirm-button.text_unpublish': 'ಈಗ ಪ್ರಕಟಣೆ ತೆಗೆದುಹಾಕಿ',
  /** If no referring documents are found, this text appears above the cancel and confirmation buttons */
  'confirm-delete-dialog.confirmation.text_delete':
    'ನೀವು “<DocumentTitle/>” ಅನ್ನು ಅಳಿಸಲು ಖಚಿತರಾಗಿದ್ದೀರಾ?',
  /** If no referring documents are found, this text appears above the cancel and confirmation buttons */
  'confirm-delete-dialog.confirmation.text_unpublish':
    'ನೀವು “<DocumentTitle/>” ಅನ್ನು ಪ್ರಕಟಣೆ ತೆಗೆದುಹಾಕಲು ಖಚಿತರಾಗಿದ್ದೀರಾ?',
  /** The text body of the error dialog. */
  'confirm-delete-dialog.error.message.text': 'ಉಲ್ಲೇಖಿಸುವ ದಾಖಲೆಗಳನ್ನು ಲೋಡ್ ಮಾಡುವಾಗ ದೋಷ ಸಂಭವಿಸಿದೆ.',
  /** The text in the retry button of the confirm delete dialog if an error occurred. */
  'confirm-delete-dialog.error.retry-button.text': 'ಮರುಪ್ರಯತ್ನಿಸಿ',
  /** The header of the confirm delete dialog if an error occurred while the confirm delete dialog was open. */
  'confirm-delete-dialog.error.title.text': 'ದೋಷ',
  /** The header of the confirm delete dialog */
  'confirm-delete-dialog.header.text_delete': 'ದಾಖಲೆಯನ್ನು ಅಳಿಸಲು?',
  /** The header of the confirm delete dialog */
  'confirm-delete-dialog.header.text_unpublish': 'ದಾಖಲೆಯನ್ನು ಅಪ್ರಕಟಿಸಲು?',
  /** The text that appears while the referring documents are queried */
  'confirm-delete-dialog.loading.text': 'ಉಲ್ಲೇಖಿಸುವ ದಾಖಲೆಗಳನ್ನು ಹುಡುಕುತ್ತಿದ್ದೇನೆ…',
  /** Shown if there are references to other documents but the user does not have the permission to see the relevant document IDs */
  'confirm-delete-dialog.other-reference-count.title_one': '1 ಇತರ ಉಲ್ಲೇಖವನ್ನು ತೋರಿಸಲಾಗಿಲ್ಲ',
  /** Shown if there are references to other documents but the user does not have the permission to see the relevant document IDs */
  'confirm-delete-dialog.other-reference-count.title_other':
    '{{count}} ಇತರ ಉಲ್ಲೇಖಗಳನ್ನು ತೋರಿಸಲಾಗಿಲ್ಲ',
  /** Text in the tooltip of this component if hovering over the info icon */
  'confirm-delete-dialog.other-reference-count.tooltip':
    'ಸಂಬಂಧಿತ ಡೇಟಾಸೆಟ್‌ಗಳಿಗೆ ಸಂಬಂಧಿಸಿದ ಪ್ರವೇಶ ಟೋಕನ್ ಇಲ್ಲದ ಕಾರಣ ಈ ಉಲ್ಲೇಖಗಳ ಮೆಟಾಡೇಟಾವನ್ನು ನಾವು ಪ್ರದರ್ಶಿಸಲು ಸಾಧ್ಯವಿಲ್ಲ.',
  /** Appears when unable to render a document preview in the referring document list */
  'confirm-delete-dialog.preview-item.preview-unavailable.subtitle': 'ಐಡಿ: {{documentId}}',
  /** Appears when unable to render a document preview in the referring document list */
  'confirm-delete-dialog.preview-item.preview-unavailable.title': 'ಪ್ರಿವ್ಯೂ ಲಭ್ಯವಿಲ್ಲ',
  /** Warns the user of affects to other documents if the action is confirmed (delete) */
  'confirm-delete-dialog.referential-integrity-disclaimer.text_delete':
    'ನೀವು ಈ ದಾಖಲೆಯನ್ನು ಅಳಿಸಿದರೆ, ಇದಕ್ಕೆ ಉಲ್ಲೇಖಿಸುವ ದಾಖಲೆಗಳು ಇದನ್ನು ಪ್ರವೇಶಿಸಲು ಸಾಧ್ಯವಿಲ್ಲ.',
  /** Warns the user of affects to other documents if the action is confirmed (unpublish) */
  'confirm-delete-dialog.referential-integrity-disclaimer.text_unpublish':
    'ನೀವು ಈ ದಾಖಲೆಯನ್ನು ಅಪ್ರಕಟಿಸಿದರೆ, ಇದಕ್ಕೆ ಉಲ್ಲೇಖಿಸುವ ದಾಖಲೆಗಳು ಇದನ್ನು ಪ್ರವೇಶಿಸಲು ಸಾಧ್ಯವಿಲ್ಲ.',
  /** Tells the user the count of how many other referring documents there are before listing them. (singular) */
  'confirm-delete-dialog.referring-document-count.text_one':
    '1 ದಾಖಲೆ “<DocumentTitle/>”ಗೆ ಉಲ್ಲೇಖಿಸಿದೆ',
  /** Tells the user the count of how many other referring documents there are before listing them. (plural) */
  'confirm-delete-dialog.referring-document-count.text_other':
    '{{count}} ದಾಖಲೆಗಳು “<DocumentTitle/>”ಗೆ ಉಲ್ಲೇಖಿಸಿವೆ',
  /** Describes the list of documents that refer to the one trying to be deleted (delete) */
  'confirm-delete-dialog.referring-documents-descriptor.text_delete':
    'ನೀವು “<DocumentTitle/>” ಅನ್ನು ಅಳಿಸಲು ಸಾಧ್ಯವಿಲ್ಲದಿರಬಹುದು ಏಕೆಂದರೆ ಕೆಳಗಿನ ದಾಖಲೆಗಳು ಇದಕ್ಕೆ ಉಲ್ಲೇಖಿಸಿವೆ:',
  /** Describes the list of documents that refer to the one trying to be deleted (unpublish) */
  'confirm-delete-dialog.referring-documents-descriptor.text_unpublish':
    'ನೀವು “<DocumentTitle/>” ಅನ್ನು ಅಪ್ರಕಟಿಸಲು ಸಾಧ್ಯವಿಲ್ಲದಿರಬಹುದು ಏಕೆಂದರೆ ಕೆಳಗಿನ ದಾಖಲೆಗಳು ಇದಕ್ಕೆ ಉಲ್ಲೇಖಿಸಿವೆ:',

  /** The text for the cancel button in the confirm dialog used in document action shortcuts if none is provided */
  'confirm-dialog.cancel-button.fallback-text': 'ರದ್ದುಗೊಳಿಸಿ',
  /** The text for the confirm button in the confirm dialog used in document action shortcuts if none is provided */
  'confirm-dialog.confirm-button.fallback-text': 'ದೃಢೀಕರಿಸಿ',

  /** For the default structure definition, the title for the "Content" pane */
  'default-definition.content-title': 'ವಿಷಯ',

  /** The text shown if there was an error while getting the document's title via a preview value */
  'doc-title.error.text': 'ದೋಷ: {{errorMessage}}',
  /** The text shown if the preview value for a document is non-existent or empty */
  'doc-title.fallback.text': 'ಶೀರ್ಷಿಕೆ ಇಲ್ಲದ',
  /** The text shown if a document's title via a preview value cannot be determined due to an unknown schema type */
  'doc-title.unknown-schema-type.text': 'ಅಜ್ಞಾತ ಸ್ಕೀಮಾ ಪ್ರಕಾರ: {{schemaType}}',

  /** Tooltip text shown for the close button of the document inspector */
  'document-inspector.close-button.tooltip': 'ಮುಚ್ಚಿ',
  /** The title shown in the dialog header, when inspecting a valid document */
  'document-inspector.dialog.title': '<DocumentTitle/> ಪರಿಶೀಲನೆ',
  /** The title shown in the dialog header, when the document being inspected is not created yet/has no value */
  'document-inspector.dialog.title-no-value': 'ಮೌಲ್ಯವಿಲ್ಲ',
  /** Title shown for menu item that opens the "Inspect" dialog */
  'document-inspector.menu-item.title': 'ಪರಿಶೀಲನೆ',
  /** the placeholder text for the search input on the inspect dialog */
  'document-inspector.search.placeholder': 'ಹುಡುಕಾಟ',
  /** The "parsed" view mode, meaning the JSON is searchable, collapsible etc */
  'document-inspector.view-mode.parsed': 'ಪಾರ್ಸ್ ಮಾಡಲಾಗಿದೆ',
  /** The "raw" view mode, meaning the JSON is presented syntax-highlighted, but with no other features - optimal for copying */
  'document-inspector.view-mode.raw-json': 'ಕಚ್ಚಾ JSON',

  /** The text for when a form is hidden */
  'document-view.form-view.form-hidden': 'ಈ ಫಾರ್ಮ್ ಅಡಗಿಸಲಾಗಿದೆ',
  /** Fallback title shown when a form title is not provided */
  'document-view.form-view.form-title-fallback': 'ಶೀರ್ಷಿಕೆ ಇಲ್ಲದ',
  /** The text for when the form view is loading a document */
  'document-view.form-view.loading': 'ದಾಖಲೆ ಲೋಡ್ ಆಗುತ್ತಿದೆ…',
  /** The description of the sync lock toast on the form view */
  'document-view.form-view.sync-lock-toast.description':
    'ದಾಖಲೆ ಸಿಂಕ್ ಆಗುವವರೆಗೆ ದಯವಿಟ್ಟು ಕಾಯಿರಿ. ಇದು ಸಾಮಾನ್ಯವಾಗಿ ದಾಖಲೆ ಪ್ರಕಟಿಸಲಾದ ನಂತರ ನಡೆಯುತ್ತದೆ, ಮತ್ತು ಇದು ಕೆಲವು ಸೆಕೆಂಡುಗಳಿಗಿಂತ ಹೆಚ್ಚು ಸಮಯ ತಗೊಳ್ಳಬಾರದು',
  /** The title of the sync lock toast on the form view */
  'document-view.form-view.sync-lock-toast.title': 'ದಾಖಲೆ ಸಿಂಕ್ ಆಗುತ್ತಿದೆ…',

  /** The description for the document favorite action */
  'document.favorites.add-to-favorites': 'ಇಷ್ಟಗಳಿಗೆ ಸೇರಿಸಿ',
  /** The description for the document unfavorite action */
  'document.favorites.remove-from-favorites': 'ಇಷ್ಟಗಳಿಂದ ತೆಗೆದುಹಾಕಿ',

  /**The title for the menu items that will be shown when expanding a publish release event to inspect the document */
  'events.inspect.release': '<VersionBadge>{{releaseTitle}}</VersionBadge> ದಾಖಲೆಯನ್ನು ಪರಿಶೀಲಿಸಿ',
  /**The title for the menu items that will be shown when expanding a publish draft event to inspect the draft document*/
  'events.open.draft': '<VersionBadge>ಕರಡು</VersionBadge> ದಾಖಲೆಯನ್ನು ತೆರೆಯಿರಿ',
  /**The title for the menu items that will be shown when expanding a publish release event to inspect the release*/
  'events.open.release': '<VersionBadge>{{releaseTitle}}</VersionBadge> ಬಿಡುಗಡೆಯನ್ನು ತೆರೆಯಿರಿ',

  /** The loading messaging for when the tooltip is still loading permission info */
  'insufficient-permissions-message-tooltip.loading-text': 'ಲೋಡ್ ಆಗುತ್ತಿದೆ…',

  /** --- Menu items --- */
  /** The menu item group title to use for the Action menu items */
  'menu-item-groups.actions-group': 'ಕ್ರಿಯೆಗಳು',
  /** The menu item group title to use for the Layout menu items */
  'menu-item-groups.layout-group': 'ವಿನ್ಯಾಸ',
  /** The menu item group title to use for the Sort menu items */
  'menu-item-groups.sorting-group': 'ವರ್ಗಾವಣೆ',

  /** The menu item title to use the compact view */
  'menu-items.layout.compact-view': 'ಸಂಕ್ಷಿಪ್ತ ನೋಟ',
  /** The menu item title to use the detailed view */
  'menu-items.layout.detailed-view': 'ವಿವರವಾದ ನೋಟ',
  /** The menu item title to Sort by Created */
  'menu-items.sort-by.created': 'ಸೃಷ್ಟಿಸಲಾದ ಪ್ರಕಾರ ವರ್ಗಾವಣೆ',
  /** The menu item title to Sort by Last Edited */
  'menu-items.sort-by.last-edited': 'ಕೊನೆಯಾಗಿ ಸಂಪಾದಿಸಲಾದ ಪ್ರಕಾರ ವರ್ಗಾವಣೆ',

  /** The link text of the no document type screen that appears directly below the subtitle */
  'no-document-types-screen.link-text': 'ದಾಖಲೆ ಪ್ರಕಾರ ಸೇರಿಸುವ ಬಗ್ಗೆ ಕಲಿಯಿರಿ →',
  /** The subtitle of the no document type screen that appears directly below the title */
  'no-document-types-screen.subtitle':
    'ದಯವಿಟ್ಟು ನಿಮ್ಮ ಸ್ಕೀಮಾದಲ್ಲಿ ಕನಿಷ್ಠ ಒಂದು ದಾಖಲೆ ಪ್ರಕಾರ ವ್ಯಾಖ್ಯಾನಿಸಿ.',
  /** The title of the no document type screen */
  'no-document-types-screen.title': 'ದಾಖಲೆ ಪ್ರಕಾರಗಳು ಇಲ್ಲ',

  /** Text shown on back button visible on smaller breakpoints */
  'pane-header.back-button.text': 'ಹಿಂದೆ',
  /** tooltip text (via `title` attribute) for the menu button */
  'pane-header.context-menu-button.tooltip': 'ಮೆನು ತೋರಿಸಿ',
  /** Appears in a document list pane header if there are more than one option for create. This is the label for that menu */
  'pane-header.create-menu.label': 'ಸೃಷ್ಟಿಸಿ',
  /** Tooltip displayed on the create new button in document lists */
  'pane-header.create-new-button.tooltip': 'ಹೊಸ ದಾಖಲೆ ಸೃಷ್ಟಿಸಿ',
  /** The `aria-label` for the disabled button in the pane header if create permissions are granted */
  'pane-header.disabled-created-button.aria-label': 'ಅಪರ್ಯಾಪ್ತ ಅನುಮತಿಗಳು',

  /** The text shown in the tooltip of pane item previews of documents if there are unpublished edits */
  'pane-item.draft-status.has-draft.tooltip': '<RelativeTime/> ಸಂಪಾದಿಸಲಾಗಿದೆ',
  /** The text shown in the tooltip of pane item previews of documents if there are no unpublished edits */
  'pane-item.draft-status.no-draft.tooltip': 'ಅಪ್ರಕಟಿತ ಸಂಪಾದನೆಗಳು ಇಲ್ಲ',
  /** The subtitle tor pane item previews if there isn't a matching schema type found */
  'pane-item.missing-schema-type.subtitle': 'ದಾಖಲೆ: <Code>{{documentId}}</Code>',
  /** The title tor pane item previews if there isn't a matching schema type found */
  'pane-item.missing-schema-type.title':
    'ಪ್ರಕಾರ <Code>{{documentType}}</Code> ಗೆ ಯಾವುದೇ ಸ್ಕೀಮಾ ಕಂಡುಬಂದಿಲ್ಲ',
  /** The text shown in the tooltip of pane item previews of documents if there are unpublished edits */
  'pane-item.published-status.has-published.tooltip': 'ಪ್ರಕಟಿಸಲಾಗಿದೆ <RelativeTime/>',
  /** The text shown in the tooltip of pane item previews of documents if there are no unpublished edits */
  'pane-item.published-status.no-published.tooltip': 'ಅಪ್ರಕಟಿತ ಸಂಪಾದನೆಗಳು ಇಲ್ಲ',

  /** The text used in the document header title if there is an error */
  'panes.document-header-title.error.text': 'ದೋಷ: {{error}}',
  /** The text used in the document header title if creating a new item */
  'panes.document-header-title.new.text': 'ಹೊಸ {{schemaType}}',
  /** The text used in the document header title if no other title can be determined */
  'panes.document-header-title.untitled.text': 'ಶೀರ್ಷಿಕೆ ಇಲ್ಲದ',
  /** The error text on the document list pane */
  'panes.document-list-pane.error.text': 'ದೋಷ: <Code>{{error}}</Code>',
  /** The error title on the document list pane */
  'panes.document-list-pane.error.title': 'ಪಟ್ಟಿ ಐಟಂಗಳನ್ನು ತರಲು ಸಾಧ್ಯವಾಗಲಿಲ್ಲ',
  /** The text of the document list pane if more than a maximum number of documents are returned */
  'panes.document-list-pane.max-items.text': 'ಗರಿಷ್ಠ {{limit}} ದಾಖಲೆಗಳನ್ನು ಪ್ರದರ್ಶಿಸಲಾಗಿದೆ',
  /** The text of the document list pane if no documents are found for a specified type */
  'panes.document-list-pane.no-documents-of-type.text': 'ಈ ಪ್ರಕಾರದ ಯಾವುದೇ ದಾಖಲೆಗಳು ಇಲ್ಲ',
  /** The text of the document list pane if no documents are found */
  'panes.document-list-pane.no-documents.text': 'ಯಾವುದೇ ಫಲಿತಾಂಶಗಳು ಕಂಡುಬಂದಿಲ್ಲ',
  /** The text of the document list pane if no documents are found matching specified criteria */
  'panes.document-list-pane.no-matching-documents.text': 'ಹೊಂದಾಣಿಕೆಯ ದಾಖಲೆಗಳು ಇಲ್ಲ',
  /** The aria-label for the search input on the document list pane */
  'panes.document-list-pane.search-input.aria-label': 'ಪಟ್ಟಿಯನ್ನು ಹುಡುಕಿ',
  /** The search input for the search input on the document list pane */
  'panes.document-list-pane.search-input.placeholder': 'ಪಟ್ಟಿಯನ್ನು ಹುಡುಕಿ',
  /** The summary title when displaying an error for a document operation result */
  'panes.document-operation-results.error.summary.title': 'ವಿವರಗಳು',
  /** The text when a generic operation failed (fallback, generally not shown)  */
  'panes.document-operation-results.operation-error': '{{context}} ವೇಳೆ ದೋಷ ಸಂಭವಿಸಿದೆ',
  /** The text when a delete operation failed  */
  'panes.document-operation-results.operation-error_delete':
    'ಈ ದಾಖಲೆಯನ್ನು ಅಳಿಸಲು ಯತ್ನಿಸುವಾಗ ದೋಷ ಸಂಭವಿಸಿದೆ. ಇದು ಸಾಮಾನ್ಯವಾಗಿ ಇತರ ದಾಖಲೆಗಳು ಇದಕ್ಕೆ ಉಲ್ಲೇಖಿಸಿರುವುದನ್ನು ಅರ್ಥಪಡಿಸುತ್ತದೆ.',
  /** The text when an unpublish operation failed  */
  'panes.document-operation-results.operation-error_unpublish':
    'ಈ ದಾಖಲೆಯನ್ನು ಅಪ್ರಕಟಿತಗೊಳಿಸಲು ಯತ್ನಿಸುವಾಗ ದೋಷ ಸಂಭವಿಸಿದೆ. ಇದು ಸಾಮಾನ್ಯವಾಗಿ ಇತರ ದಾಖಲೆಗಳು ಇದಕ್ಕೆ ಉಲ್ಲೇಖಿಸಿರುವುದನ್ನು ಅರ್ಥಪಡಿಸುತ್ತದೆ.',
  /** The text when a generic operation succeeded (fallback, generally not shown)  */
  'panes.document-operation-results.operation-success':
    'ದಾಖಲೆಯ ಮೇಲೆ {{context}} ಯಶಸ್ವಿಯಾಗಿ ನಡೆಸಲಾಗಿದೆ',
  /** The text when copy URL operation succeeded  */
  'panes.document-operation-results.operation-success_copy-url':
    'ಡಾಕ್ಯುಮೆಂಟ್ URL ಅನ್ನು ಕ್ಲಿಪ್‌ಬೋರ್ಡ್‌ಗೆ ನಕಲಿಸಲಾಗಿದೆ',
  /**  */
  'panes.document-operation-results.operation-success_createVersion':
    '<Strong>{{title}}</Strong> ಬಿಡುಗಡೆಗೆ ಸೇರಿಸಲಾಗಿದೆ',
  /** The text when a delete operation succeeded  */
  'panes.document-operation-results.operation-success_delete': 'ದಾಖಲೆಯನ್ನು ಯಶಸ್ವಿಯಾಗಿ ಅಳಿಸಲಾಗಿದೆ',
  /** The text when a discard changes operation succeeded  */
  'panes.document-operation-results.operation-success_discardChanges':
    'ಕೊನೆಯ ಪ್ರಕಟಣೆಯಿಂದ ಎಲ್ಲಾ ಬದಲಾವಣೆಗಳನ್ನು ಈಗ ತ್ಯಜಿಸಲಾಗಿದೆ. ತ್ಯಜಿಸಲಾದ ಮುಸದ್ದೆಯನ್ನು ಇನ್ನೂ ಇತಿಹಾಸದಿಂದ ಮರುಪಡೆಯಬಹುದು',
  /** The text when a duplicate operation succeeded  */
  'panes.document-operation-results.operation-success_duplicate':
    'ದಾಖಲೆಯನ್ನು ಯಶಸ್ವಿಯಾಗಿ ನಕಲಿಸಲಾಗಿದೆ',
  /** The text when a publish operation succeeded  */
  'panes.document-operation-results.operation-success_publish':
    '<Strong>{{title}}</Strong> ಪ್ರಕಟಿಸಲಾಗಿದೆ',
  /** The text when a restore operation succeeded  */
  'panes.document-operation-results.operation-success_restore':
    '<Strong>{{title}}</Strong> ಮರುಸ್ಥಾಪಿಸಲಾಗಿದೆ',
  /** The text when an unpublish operation succeeded  */
  'panes.document-operation-results.operation-success_unpublish':
    '<Strong>{{title}}</Strong> ಅನ್‌ಪಬ್ಲಿಷ್ ಮಾಡಲಾಗಿದೆ. ಕೊನೆಯ ಪ್ರಕಟಿತ ಆವೃತ್ತಿಯಿಂದ ಒಂದು ಡ್ರಾಫ್ಟ್ ರಚಿಸಲಾಗಿದೆ.',
  /** The document title shown when document title is "undefined" in operation message */
  'panes.document-operation-results.operation-undefined-title': 'ಶೀರ್ಷಿಕೆ ಇಲ್ಲದ',
  /** The loading message for the document not found pane */
  'panes.document-pane.document-not-found.loading': 'ದಾಖಲೆ ಲೋಡ್ ಮಾಡುತ್ತಿದೆ…',
  /** The text of the document not found pane if the schema is known */
  'panes.document-pane.document-not-found.text':
    'ದಾಖಲೆಯ ಪ್ರಕಾರ ನಿರ್ಧಾರಿಸಲಾಗಿಲ್ಲ, ಮತ್ತು <Code>{{id}}</Code> ಗುರುತುವುಳ್ಳ ದಾಖಲೆಯನ್ನು ಹುಡುಕಲಾಗಲಿಲ್ಲ.',
  /** The title of the document not found pane if the schema is known */
  'panes.document-pane.document-not-found.title': 'ದಾಖಲೆಯನ್ನು ಹುಡುಕಲಾಗಲಿಲ್ಲ',
  /** The text of the document not found pane if the schema is not found */
  'panes.document-pane.document-unknown-type.text':
    'ಈ ದಾಖಲೆಗೆ <Code>{{documentType}}</Code> ಎಂಬ ಸ್ಕೀಮಾ ಪ್ರಕಾರವಿದೆ, ಇದು ಸ್ಥಳೀಯ ಕಂಟೆಂಟ್ ಸ್ಟುಡಿಯೋ ಸ್ಕೀಮಾದಲ್ಲಿ ಒಂದು ಪ್ರಕಾರವಾಗಿ ನಿರ್ಧಾರಿಸಲಾಗಿಲ್ಲ.',
  /** The title of the document not found pane if the schema is not found or unknown */
  'panes.document-pane.document-unknown-type.title':
    'ಅಜ್ಞಾತ ದಾಖಲೆ ಪ್ರಕಾರ: <Code>{{documentType}}</Code>',
  /** The title of the document not found pane if the schema is unknown */
  'panes.document-pane.document-unknown-type.without-schema.text':
    'ಈ ದಾಖಲೆ ಅಸ್ತಿತ್ವದಲ್ಲಿಲ್ಲ, ಮತ್ತು ಅದಕ್ಕೆ ಯಾವುದೇ ಸ್ಕೀಮಾ ಪ್ರಕಾರವನ್ನು ನಿಗದಿಪಡಿಸಲಾಗಿಲ್ಲ.',
  /** Default message shown while resolving the structure definition for an asynchronous node */
  'panes.resolving.default-message': 'ಲೋಡ್ ಮಾಡುತ್ತಿದೆ…',
  /** Message shown while resolving the structure definition for an asynchronous node and it is taking a while (more than 5s) */
  'panes.resolving.slow-resolve-message': 'ಇನ್ನೂ ಲೋಡ್ ಮಾಡುತ್ತಿದೆ…',
  /** The text to display when type is missing */
  'panes.unknown-pane-type.missing-type.text':
    'ಸ್ಟ್ರಕ್ಚರ್ ಐಟಂಗೆ ಅಗತ್ಯವಾದ <Code>type</Code> ಗುಣಲಕ್ಷಣ ಇಲ್ಲ.',
  /** The title of the unknown pane */
  'panes.unknown-pane-type.title': 'ಅಜ್ಞಾತ ಪೇನ್ ಪ್ರಕಾರ',
  /** The text to display when type is unknown */
  'panes.unknown-pane-type.unknown-type.text':
    '<Code>{{type}}</Code> ಪ್ರಕಾರದ ಸ್ಟ್ರಕ್ಚರ್ ಐಟಂ ಒಂದು ಪರಿಚಿತ ಘಟಕವಲ್ಲ.',

  /** The text for the "Open preview" action for a document */
  'production-preview.menu-item.title': 'ಪ್ರಿವ್ಯೂ ತೆರೆ',

  /** The text for the confirm button in the request permission dialog used in the permissions banner */
  'request-permission-dialog.confirm-button.text': 'ವಿನಂತಿ ಕಳುಹಿಸಿ',
  /** The description text for the request permission dialog used in the permissions banner */
  'request-permission-dialog.description.text':
    'ನಿಮ್ಮ ವಿನಂತಿಯನ್ನು ಪ್ರಾಜೆಕ್ಟ್ ನಿರ್ವಾಹಕರಿಗೆ ಕಳುಹಿಸಲಾಗುವುದು. ನೀವು ಬಯಸಿದರೆ, ನೀವು ಒಂದು ಟಿಪ್ಪಣಿಯನ್ನು ಸಹ ಸೇರಿಸಬಹುದು',
  /** The header/title for the request permission dialog used in the permissions banner */
  'request-permission-dialog.header.text': 'ಸಂಪಾದನೆ ಪ್ರವೇಶವನ್ನು ಕೇಳಿ',
  /** The text describing the note input for the request permission dialog used in the permissions banner */
  'request-permission-dialog.note-input.description.text':
    'ನೀವು ಬಯಸಿದರೆ, ನೀವು ಒಂದು ಟಿಪ್ಪಣಿ ಸೇರಿಸಬಹುದು',
  /** The placeholder for the note input in the request permission dialog used in the permissions banner */
  'request-permission-dialog.note-input.placeholder.text': 'ಟಿಪ್ಪಣಿ ಸೇರಿಸಿ...',
  /** The error/warning text in the request permission dialog when the user's request has been declined */
  'request-permission-dialog.warning.denied.text':
    'ಈ ಪ್ರಾಜೆಕ್ಟ್ ಪ್ರವೇಶಕ್ಕೆ ನಿಮ್ಮ ವಿನಂತಿಯನ್ನು ನಿರಾಕರಿಸಲಾಗಿದೆ.',
  /** The error/warning text in the request permission dialog when the user's request has been denied due to too many outstanding requests */
  'request-permission-dialog.warning.limit-reached.text':
    'ಎಲ್ಲಾ ಪ್ರಾಜೆಕ್ಟ್‌ಗಳಲ್ಲಿ ಪಾತ್ರ ವಿನಂತಿಗಳ ಮಿತಿಗೆ ನೀವು ತಲುಪಿದ್ದೀರಿ. ಹೆಚ್ಚು ವಿನಂತಿಗಳನ್ನು ಸಲ್ಲಿಸುವ ಮೊದಲು ದಯವಿಟ್ಟು ಕಾಯಿರಿ ಅಥವಾ ಸಹಾಯಕ್ಕಾಗಿ ನಿರ್ವಾಹಕರನ್ನು ಸಂಪರ್ಕಿಸಿ.',

  /** Label for button when status is saved */
  'status-bar.document-status-pulse.status.saved.text': 'ಉಳಿಸಲಾಗಿದೆ',
  /** Label for button when status is syncing */
  'status-bar.document-status-pulse.status.syncing.text': 'ಉಳಿಸುತ್ತಿದೆ...',
  /** Accessibility label indicating when the document was last published, in relative time, eg "3 weeks ago" */
  'status-bar.publish-status-button.last-published-time.aria-label':
    'ಕೊನೆಯ ಬಾರಿ ಪ್ರಕಟಿಸಲಾಗಿದೆ {{relativeTime}}',
  /** Text for tooltip showing explanation of timestamp/relative time, eg "Last published <RelativeTime/>" */
  'status-bar.publish-status-button.last-published-time.tooltip':
    'ಕೊನೆಯ ಬಾರಿ ಪ್ರಕಟಿಸಲಾಗಿದೆ <RelativeTime/>',
  /** Accessibility label indicating when the document was last updated, in relative time, eg "2 hours ago" */
  'status-bar.publish-status-button.last-updated-time.aria-label':
    'ಕೊನೆಯ ಬಾರಿ ನವೀಕರಿಸಲಾಗಿದೆ {{relativeTime}}',
  /** Text for tooltip showing explanation of timestamp/relative time, eg "Last updated <RelativeTime/>" */
  'status-bar.publish-status-button.last-updated-time.tooltip':
    'ಕೊನೆಯ ಬಾರಿ ನವೀಕರಿಸಲಾಗಿದೆ <RelativeTime/>',
  /** Aria label for the button */
  'status-bar.review-changes-button.aria-label': 'ಬದಲಾವಣೆಗಳನ್ನು ಪರಿಶೀಲಿಸಿ',
  /** Label for button when status is saved */
  'status-bar.review-changes-button.status.saved.text': 'ಉಳಿಸಲಾಗಿದೆ!',
  /** Label for button when status is syncing */
  'status-bar.review-changes-button.status.syncing.text': 'ಉಳಿಸುತ್ತಿದೆ...',
  /** Text for the secondary text for tooltip for the button */
  'status-bar.review-changes-button.tooltip.changes-saved': 'ಬದಲಾವಣೆಗಳು ಉಳಿಸಲಾಗಿವೆ',
  /** Primary text for tooltip for the button */
  'status-bar.review-changes-button.tooltip.text': 'ಪರಿಷ್ಕರಣೆಗಳನ್ನು ಪರಿಶೀಲಿಸಿ',

  /** The text that appears in side the documentation link */
  'structure-error.docs-link.text': 'ದಾಖಲೆಗಳನ್ನು ನೋಡಿ',
  /** Labels the error message or error stack of the structure error screen */
  'structure-error.error.label': 'ದೋಷ',
  /** The header that appears at the top of the error screen */
  'structure-error.header.text': 'ರಚನೆಯನ್ನು ಓದುವಾಗ ದೋಷವೊಂದನ್ನು ಎದುರಿಸಲಾಗಿದೆ',
  /** The text in the reload button to retry rendering the structure */
  'structure-error.reload-button.text': 'ಮರುಲೋಡ್ ಮಾಡಿ',
  /** Labels the structure path of the structure error screen */
  'structure-error.structure-path.label': 'ರಚನೆಯ ಹಾದಿ',

  /** The aria label for the menu button in the timeline item */
  'timeline-item.menu-button.aria-label': 'ಕ್ರಿಯಾ ಮೆನು ತೆರೆಯಿರಿ',
  /** The text for the tooltip in menu button the timeline item */
  'timeline-item.menu-button.tooltip': 'ಕ್ರಿಯೆಗಳು',
  /** The text for the collapse action in the timeline item menu */
  'timeline-item.menu.action-collapse': 'ಸಂಕೋಚಿಸಿ',
  /** The text for the expand action in the timeline item menu */
  'timeline-item.menu.action-expand': 'ವಿಸ್ತರಿಸಿ',
})
