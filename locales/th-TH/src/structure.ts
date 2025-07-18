import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Label for the "Copy Document URL" document action */
  'action.copy-document-url.label': 'คัดลอก URL เอกสาร',
  /** Tooltip when action button is disabled because the operation is not ready   */
  'action.delete.disabled.not-ready': 'การดำเนินการยังไม่พร้อม',
  /** Tooltip when action button is disabled because the document does not exist */
  'action.delete.disabled.nothing-to-delete': 'เอกสารนี้ยังไม่มีหรือถูกลบไปแล้ว',
  /** Label for the "Delete" document action button */
  'action.delete.label': 'ลบ',
  /** Label for the "Delete" document action while the document is being deleted */
  'action.delete.running.label': 'กำลังลบ…',
  /** Tooltip when action is disabled because the document is linked to Canvas */
  'action.disabled-by-canvas.tooltip':
    'การกระทำบางอย่างถูกปิดใช้งานสำหรับเอกสารที่เชื่อมโยงกับ Canvas',
  /** Message prompting the user to confirm discarding changes */
  'action.discard-changes.confirm-dialog.confirm-discard-changes':
    'คุณแน่ใจหรือไม่ว่าต้องการทิ้งการเปลี่ยนแปลงทั้งหมดนับตั้งแต่การเผยแพร่ครั้งล่าสุด?',
  /** Tooltip when action is disabled because the document has no unpublished changes */
  'action.discard-changes.disabled.no-change': 'เอกสารนี้ไม่มีการเปลี่ยนแปลงที่ยังไม่ได้เผยแพร่',
  /** Tooltip when action is disabled because the document is not published */
  'action.discard-changes.disabled.not-published': 'เอกสารนี้ยังไม่ได้เผยแพร่',
  /** Tooltip when action button is disabled because the operation is not ready   */
  'action.discard-changes.disabled.not-ready': 'การดำเนินการยังไม่พร้อม',
  /** Label for the "Discard changes" document action */
  'action.discard-changes.label': 'ทิ้งการเปลี่ยนแปลง',
  /** Tooltip when action is disabled because the operation is not ready   */
  'action.duplicate.disabled.not-ready': 'การดำเนินการยังไม่พร้อม',
  /** Tooltip when action is disabled because the document doesn't exist */
  'action.duplicate.disabled.nothing-to-duplicate': 'เอกสารนี้ยังไม่มีดังนั้นไม่มีอะไรให้ทำซ้ำ',
  /** Label for the "Duplicate" document action */
  'action.duplicate.label': 'ทำซ้ำ',
  /** Label for the "Duplicate" document action while the document is being duplicated */
  'action.duplicate.running.label': 'กำลังทำซ้ำ…',
  /** Tooltip when publish button is disabled because the document is already published, and published time is unavailable.*/
  'action.publish.already-published.no-time-ago.tooltip': 'เผยแพร่แล้ว',
  /** Tooltip when publish button is disabled because the document is already published.*/
  'action.publish.already-published.tooltip': 'เผยแพร่ไปแล้ว {{timeSincePublished}} ที่ผ่านมา',
  /** Tooltip when action is disabled because the studio is not ready.*/
  'action.publish.disabled.not-ready': 'การดำเนินการยังไม่พร้อม',
  /** Label for action when there are pending changes.*/
  'action.publish.draft.label': 'เผยแพร่',
  /** Label for the "Publish" document action */
  'action.publish.label': 'เผยแพร่',
  /** Label for the "Publish" document action when the document has live edit enabled.*/
  'action.publish.live-edit.label': 'เผยแพร่',
  /** Fallback tooltip for the "Publish" document action when publish is invoked for a document with live edit enabled.*/
  'action.publish.live-edit.publish-disabled':
    'ไม่สามารถเผยแพร่ได้เนื่องจาก Live Edit ถูกเปิดใช้งานสำหรับประเภทเอกสารนี้',
  /** Tooltip for the "Publish" document action when the document has live edit enabled.*/
  'action.publish.live-edit.tooltip':
    'Live Edit ถูกเปิดใช้งานสำหรับประเภทเนื้อหานี้และการเผยแพร่จะเกิดขึ้นโดยอัตโนมัติเมื่อคุณทำการเปลี่ยนแปลง',
  /** Tooltip when publish button is disabled because there are no changes.*/
  'action.publish.no-changes.tooltip': 'ไม่มีการเปลี่ยนแปลงที่ยังไม่ได้เผยแพร่',
  /** Label for the "Publish" document action when there are no changes.*/
  'action.publish.published.label': 'เผยแพร่แล้ว',
  /** Label for the "Publish" document action while publish is being executed.*/
  'action.publish.running.label': 'กำลังเผยแพร่…',
  /** Tooltip when the "Publish" document action is disabled due to validation issues */
  'action.publish.validation-issues.tooltip':
    'มีข้อผิดพลาดในการตรวจสอบที่ต้องแก้ไขก่อนที่เอกสารนี้จะสามารถเผยแพร่ได้',
  /** Tooltip when publish button is waiting for validation and async tasks to complete.*/
  'action.publish.waiting': 'กำลังรอให้งานเสร็จสิ้นก่อนที่จะเผยแพร่',
  /** Message prompting the user to confirm that they want to restore to an earlier revision*/
  'action.restore.confirm.message': 'คุณแน่ใจหรือไม่ว่าต้องการกู้คืนเอกสารนี้?',
  /** Fallback tooltip for when user is looking at the initial revision */
  'action.restore.disabled.cannot-restore-initial': 'คุณไม่สามารถกู้คืนเป็นเวอร์ชันเริ่มต้นได้',
  /** Label for the "Restore" document action */
  'action.restore.label': 'กู้คืน',
  /** Default tooltip for the action */
  'action.restore.tooltip': 'กู้คืนไปยังเวอร์ชันนี้',
  /** Tooltip when action is disabled because the document is not already published */
  'action.unpublish.disabled.not-published': 'เอกสารนี้ยังไม่ได้เผยแพร่',
  /** Tooltip when action is disabled because the operation is not ready   */
  'action.unpublish.disabled.not-ready': 'การดำเนินการยังไม่พร้อม',
  /** Label for the "Unpublish" document action */
  'action.unpublish.label': 'ยกเลิกการเผยแพร่',
  /** Fallback tooltip for the Unpublish document action when publish is invoked for a document with live edit enabled.*/
  'action.unpublish.live-edit.disabled':
    'เอกสารนี้เปิดใช้งานการแก้ไขสดและไม่สามารถยกเลิกการเผยแพร่ได้',

  /** Description for the archived release banner, rendered when viewing the history of a version document from the publihed view */
  'banners.archived-release.description':
    'คุณกำลังดูเอกสารแบบอ่านอย่างเดียวที่ถูกเก็บถาวรเป็นส่วนหนึ่งของ <VersionBadge>การปล่อย</VersionBadge> ไม่สามารถแก้ไขได้',
  /** The explanation displayed when a user attempts to create a new draft document, but the draft model is not switched on */
  'banners.choose-new-document-destination.cannot-create-draft-document': undefined, // 'Cannot create a draft document.'
  /** The explanation displayed when a user attempts to create a new published document, but the schema type doesn't support live-editing */
  'banners.choose-new-document-destination.cannot-create-published-document': undefined, // 'Cannot create a published document.'
  /** The prompt displayed when a user must select a different perspective in order to create a document */
  'banners.choose-new-document-destination.choose-destination': undefined, // 'Choose a destination for this document:'
  /** The explanation displayed when a user attempts to create a new document in a release, but the selected release is inactive */
  'banners.choose-new-document-destination.release-inactive': undefined, // 'The <VersionBadge>{{title}}</VersionBadge> release is not active.'
  /** The text for the restore button on the deleted document banner */
  'banners.deleted-document-banner.restore-button.text': 'กู้คืนเวอร์ชันล่าสุด',
  /** The text content for the deleted document banner */
  'banners.deleted-document-banner.text': 'เอกสารนี้ถูกลบแล้ว',
  /** The text content for the deprecated document type banner */
  'banners.deprecated-document-type-banner.text': 'ประเภทเอกสารนี้ไม่ได้ใช้งานแล้ว',
  /** The text for publish action for discarding the version */
  'banners.live-edit-draft-banner.discard.tooltip': 'ทิ้งร่าง',
  /** The text for publish action for the draft banner */
  'banners.live-edit-draft-banner.publish.tooltip': 'เผยแพร่เพื่อดำเนินการแก้ไขต่อ',
  /** The text content for the live edit document when it's a draft */
  'banners.live-edit-draft-banner.text':
    'ประเภท <strong>{{schemaType}}</strong> มี <code>liveEdit</code> เปิดใช้งานอยู่ แต่มีร่างของเอกสารนี้อยู่ โปรดเผยแพร่หรือทิ้งร่างเพื่อดำเนินการแก้ไขสดต่อไป',
  /** The label for the "compare draft" action */
  'banners.obsolete-draft.actions.compare-draft.text': undefined, // 'Compare draft'
  /** The label for the "discard draft" action */
  'banners.obsolete-draft.actions.discard-draft.text': undefined, // 'Discard draft'
  /** The label for the "publish draft" action */
  'banners.obsolete-draft.actions.publish-draft.text': undefined, // 'Publish draft'
  /** The warning displayed when editing a document that has an obsolete draft because the draft model is not switched on */
  'banners.obsolete-draft.draft-model-inactive.text': undefined, // 'The workspace does not have drafts enabled, but a draft version of this document exists.'
  /** The text for the permission check banner if the user only has multiple roles, but they do not allow publishing this document */
  'banners.permission-check-banner.missing-permission_create_other':
    'บทบาท <Roles/> ของคุณไม่มีสิทธิ์ในการสร้างเอกสารนี้',
  /** The text for the permission check banner if the user only has multiple roles, but they do not allow editing this document */
  'banners.permission-check-banner.missing-permission_update_other':
    'บทบาท <Roles/> ของคุณไม่มีสิทธิ์ในการอัปเดตเอกสารนี้',
  /** The pending text for the request permission button that appears for viewer roles */
  'banners.permission-check-banner.request-permission-button.sent': 'คำขอแก้ไขถูกส่งแล้ว',
  /** The text for the request permission button that appears for viewer roles */
  'banners.permission-check-banner.request-permission-button.text': 'ขอแก้ไข',
  /** Description for the archived release banner, rendered when viewing the history of a version document from the published view */
  'banners.published-release.description':
    'คุณกำลังดูเอกสารแบบอ่านอย่างเดียวที่ถูกเผยแพร่เป็นส่วนหนึ่งของ <VersionBadge>การปล่อย</VersionBadge> ไม่สามารถแก้ไขได้',
  /** The text for the reload button */
  'banners.reference-changed-banner.reason-changed.reload-button.text': 'โหลดข้อมูลอ้างอิงใหม่',
  /** The text for the reference change banner if the reason is that the reference has been changed */
  'banners.reference-changed-banner.reason-changed.text':
    'ข้อมูลอ้างอิงนี้มีการเปลี่ยนแปลงตั้งแต่คุณเปิดมัน',
  /** The text for the close button */
  'banners.reference-changed-banner.reason-removed.close-button.text': 'ปิดข้อมูลอ้างอิง',
  /** The text for the reference change banner if the reason is that the reference has been deleted */
  'banners.reference-changed-banner.reason-removed.text':
    'ข้อมูลอ้างอิงนี้ถูกลบไปแล้วตั้งแต่คุณเปิดมัน',
  /** The text that appears for the action button to add the current document to the global release */
  'banners.release.action.add-to-release': 'เพิ่มเข้าไปในการปล่อย',
  /** The text that appears for the action button to add the current document to the global release */
  'banners.release.action.open-to-edit': 'เปิดการปล่อยเพื่อแก้ไข',
  /** Toast description in case an error occurs when adding a document to a release  */
  'banners.release.error.description': 'เกิดข้อผิดพลาดขณะเพิ่มเอกสารไปยังการปล่อย: {{message}}',
  /** Toast title in case an error occurs when adding a document to a release  */
  'banners.release.error.title': 'ข้อผิดพลาดในการเพิ่มเอกสารไปยังการปล่อย',
  /** The text for the banner that appears when a document only has versions but is in a draft or published pinned release */
  'banners.release.navigate-to-edit-description': 'เอกสารนี้มีอยู่เฉพาะใน',
  /** The text for the banner that appears when a document only has versions but is in a draft or published pinned release */
  'banners.release.navigate-to-edit-description-end_other': 'การปล่อย',
  /** The text for the banner that appears when there are multiple versions but no drafts or published, more than one extra releases */
  'banners.release.navigate-to-edit-description-multiple_other':
    'เอกสารนี้เป็นส่วนหนึ่งของการปล่อย <VersionBadge/> และอีก {{count}} การปล่อย',
  /** The text for the banner that appears when a document only has one version but is in a draft or published pinned release */
  'banners.release.navigate-to-edit-description-single':
    'เอกสารนี้เป็นส่วนหนึ่งของการปล่อย <VersionBadge/>',
  /** The text for the banner that appears when a document is not in the current global release */
  'banners.release.not-in-release': 'ไม่อยู่ในการปล่อย <Label>{{title}}</Label>',
  /** Description of toast that will appear in case of latency between the user adding a document to a release and the UI reflecting it */
  'banners.release.waiting.description':
    'โปรดรอสักครู่ขณะที่เอกสารกำลังถูกเพิ่มไปยังการปล่อย ไม่ควรใช้เวลานานกว่าไม่กี่วินาที',
  /** Title of toast that will appear in case of latency between the user adding a document to a release and the UI reflecting it */
  'banners.release.waiting.title': 'กำลังเพิ่มเอกสารไปยังการปล่อย…',
  /** The text for the revision not found banner */
  'banners.revision-not-found.description':
    'เราไม่พบการแก้ไขเอกสารที่เลือก กรุณาเลือกอีกครั้งจากรายการประวัติ',
  /** The text content for the unpublished document banner when is part of a release */
  'banners.unpublished-release-banner.text':
    'เอกสารนี้จะไม่ได้รับการเผยแพร่เป็นส่วนหนึ่งของการปล่อย <VersionBadge>{{title}}</VersionBadge>',
  /** The text content for the unpublished document banner letting the user know that the current published version is being shown */
  'banners.unpublished-release-banner.text-with-published': undefined, // 'Showing the current <strong>published</strong> version:'

  /** Browser/tab title when creating a new document of a given type */
  'browser-document-title.new-document': 'เอกสารใหม่ {{schemaType}}',
  /** Browser/tab title when editing a document where the title cannot be resolved from preview configuration */
  'browser-document-title.untitled-document': 'ไม่มีชื่อ',

  /** The action menu button aria-label */
  'buttons.action-menu-button.aria-label': 'เปิดการกระทำของเอกสาร',
  /** The action menu button tooltip */
  'buttons.action-menu-button.tooltip': 'การกระทำของเอกสาร',
  /** The aria-label for the split pane button on the document panel header */
  'buttons.split-pane-button.aria-label': 'แยกหน้าต่างไปทางขวา',
  /** The tool tip for the split pane button on the document panel header */
  'buttons.split-pane-button.tooltip': 'แยกหน้าต่างไปทางขวา',
  /** The title for the close button on the split pane on the document panel header */
  'buttons.split-pane-close-button.title': 'ปิดหน้าต่างแยก',
  /** The title for the close group button on the split pane on the document panel header */
  'buttons.split-pane-close-group-button.title': 'ปิดกลุ่มหน้าต่าง',

  /** The text for the canvas linked banner action button */
  'canvas.banner.edit-in-canvas-action': 'แก้ไขใน Canvas',
  /** The text for the canvas linked banner when the document is a draft */
  'canvas.banner.linked-text.draft': 'เอกสารร่างนี้เชื่อมโยงกับ Canvas',
  /** The text for the canvas linked banner when the document is a live document */
  'canvas.banner.linked-text.published': 'เอกสารสดนี้เชื่อมโยงกับ Canvas',
  /** The text for the canvas linked banner when the document is a version document */
  'canvas.banner.linked-text.version': 'เอกสารเวอร์ชันนี้เชื่อมโยงกับ Canvas',
  /** The text for the canvas linked banner popover button */
  'canvas.banner.popover-button-text': 'เรียนรู้เพิ่มเติม',
  /** The description for the canvas linked banner popover */
  'canvas.banner.popover-description':
    'Canvas ช่วยให้คุณสามารถเขียนในตัวแก้ไขแบบอิสระที่สามารถแมปกลับไปยัง Studio เป็นเนื้อหาที่มีโครงสร้างได้อัตโนมัติ - ขณะที่คุณพิมพ์',
  /** The heading for the canvas linked banner popover */
  'canvas.banner.popover-heading': 'การเขียนที่ให้ความสำคัญกับไอเดียเป็นอันดับแรก',

  /** The description for the changes banner */
  'changes.banner.description':
    'กำลังแสดงประวัติสำหรับเวอร์ชัน <strong>{{perspective}}</strong> ของเอกสารนี้',
  /** The tooltip for the changes banner */
  'changes.banner.tooltip':
    'มุมมองนี้แสดงการเปลี่ยนแปลงที่เกิดขึ้นในเวอร์ชันเฉพาะของเอกสารนี้ เลือกเวอร์ชันอื่นเพื่อดูการเปลี่ยนแปลงของมัน',
  /** The label used in the changes inspector for the from selector */
  'changes.from.label': 'จาก',
  /* The label for the history tab in the changes inspector*/
  'changes.tab.history': 'ประวัติ',
  /* The label for the review tab in the changes inspector*/
  'changes.tab.review-changes': 'ตรวจทานการเปลี่ยนแปลง',
  /** The label used in the changes inspector for the to selector */
  'changes.to.label': 'ไปยัง',

  /** The error message shown when the specified document comparison mode is not supported */
  'compare-version.error.invalidModeParam': '"{{input}}" ไม่ใช่โหมดการเปรียบเทียบเอกสารที่รองรับ',
  /** The error message shown when the next document for comparison could not be extracted from the URL */
  'compare-version.error.invalidNextDocumentParam': 'พารามิเตอร์เอกสารถัดไปไม่ถูกต้อง',
  /** The error message shown when the document comparison URL could not be parsed */
  'compare-version.error.invalidParams.title': 'ไม่สามารถเปรียบเทียบเอกสารได้',
  /** The error message shown when the previous document for comparison could not be extracted from the URL */
  'compare-version.error.invalidPreviousDocumentParam': 'พารามิเตอร์เอกสารก่อนหน้าไม่ถูกต้อง',

  /** The text for the tooltip when the "Compare versions" action for a document is disabled */
  'compare-versions.menu-item.disabled-reason': 'ไม่มีเวอร์ชันอื่นของเอกสารนี้ที่จะเปรียบเทียบ',
  /** The text for the "Compare versions" action for a document */
  'compare-versions.menu-item.title': 'เปรียบเทียบเวอร์ชัน',
  /** The string used to label draft documents */
  'compare-versions.status.draft': 'ร่าง',
  /** The string used to label published documents */
  'compare-versions.status.published': 'เผยแพร่แล้ว',
  /** The title used when comparing versions of a document */
  'compare-versions.title': 'เปรียบเทียบเวอร์ชัน',

  /** The text in the "Cancel" button in the confirm delete dialog that cancels the action and closes the dialog */
  'confirm-delete-dialog.cancel-button.text': 'ยกเลิก',
  /** Used in `confirm-delete-dialog.cdr-summary.title` */
  'confirm-delete-dialog.cdr-summary.document-count_other': '{{count}} เอกสาร',
  /** The text that appears in the subtitle `<summary>` that lists the datasets below the title */
  'confirm-delete-dialog.cdr-summary.subtitle_other': 'ชุดข้อมูล: {{datasets}}',
  /** The text that appears in the subtitle `<summary>` that lists the datasets below the title */
  'confirm-delete-dialog.cdr-summary.subtitle_unavailable_other': 'ชุดข้อมูลที่ไม่สามารถใช้งานได้',
  /** The text that appears in the title `<summary>` that includes the list of CDRs (plural) */
  'confirm-delete-dialog.cdr-summary.title_other': '{{documentCount}} ใน {{count}} datasets',
  /** Appears when hovering over the copy button to copy */
  'confirm-delete-dialog.cdr-table.copy-id-button.tooltip': 'คัดลอก ID ไปยังคลิปบอร์ด',
  /** The header for the dataset column in the list of cross-dataset references found */
  'confirm-delete-dialog.cdr-table.dataset.label': 'Dataset',
  /** The header for the document ID column in the list of cross-dataset references found */
  'confirm-delete-dialog.cdr-table.document-id.label': 'Document ID',
  /** The toast title when the copy button has been clicked but copying failed */
  'confirm-delete-dialog.cdr-table.id-copied-toast.title-failed': 'ไม่สามารถคัดลอก ID เอกสารได้',
  /** The header for the project ID column in the list of cross-dataset references found */
  'confirm-delete-dialog.cdr-table.project-id.label': 'Project ID',
  /** The text in the "Delete anyway" button in the confirm delete dialog that confirms the action */
  'confirm-delete-dialog.confirm-anyway-button.text_delete': 'ลบทิ้งไปเลย',
  /** The text in the "Unpublish anyway" button in the confirm delete dialog that confirms the action */
  'confirm-delete-dialog.confirm-anyway-button.text_unpublish': 'ยกเลิกการเผยแพร่ทิ้งไปเลย',
  /** The text in the "Delete now" button in the confirm delete dialog that confirms the action */
  'confirm-delete-dialog.confirm-button.text_delete': 'ลบทันที',
  /** The text in the "Unpublish now" button in the confirm delete dialog that confirms the action */
  'confirm-delete-dialog.confirm-button.text_unpublish': 'ยกเลิกการเผยแพร่ทันที',
  /** If no referring documents are found, this text appears above the cancel and confirmation buttons */
  'confirm-delete-dialog.confirmation.text_delete':
    'คุณแน่ใจหรือไม่ว่าต้องการลบ “<DocumentTitle/>”?',
  /** If no referring documents are found, this text appears above the cancel and confirmation buttons */
  'confirm-delete-dialog.confirmation.text_unpublish':
    'คุณแน่ใจหรือไม่ว่าต้องการยกเลิกการเผยแพร่ “<DocumentTitle/>”?',
  /** The text body of the error dialog. */
  'confirm-delete-dialog.error.message.text': 'เกิดข้อผิดพลาดขณะโหลดเอกสารที่อ้างอิง',
  /** The text in the retry button of the confirm delete dialog if an error occurred. */
  'confirm-delete-dialog.error.retry-button.text': 'ลองใหม่',
  /** The header of the confirm delete dialog if an error occurred while the confirm delete dialog was open. */
  'confirm-delete-dialog.error.title.text': 'ข้อผิดพลาด',
  /** The header of the confirm delete dialog */
  'confirm-delete-dialog.header.text_delete': 'ลบเอกสาร?',
  /** The header of the confirm delete dialog */
  'confirm-delete-dialog.header.text_unpublish': 'ยกเลิกการเผยแพร่เอกสาร?',
  /** The text that appears while the referring documents are queried */
  'confirm-delete-dialog.loading.text': 'กำลังค้นหาเอกสารที่อ้างอิง…',
  /** Shown if there are references to other documents but the user does not have the permission to see the relevant document IDs */
  'confirm-delete-dialog.other-reference-count.title_other': '{{count}} อ้างอิงอื่นๆ ที่ไม่แสดง',
  /** Text in the tooltip of this component if hovering over the info icon */
  'confirm-delete-dialog.other-reference-count.tooltip':
    'เราไม่สามารถแสดงข้อมูลเมตาของการอ้างอิงเหล่านี้ได้เนื่องจากไม่มีโทเค็นการเข้าถึงสำหรับ datasets ที่เกี่ยวข้อง',
  /** Appears when unable to render a document preview in the referring document list */
  'confirm-delete-dialog.preview-item.preview-unavailable.subtitle': 'ID: {{documentId}}',
  /** Appears when unable to render a document preview in the referring document list */
  'confirm-delete-dialog.preview-item.preview-unavailable.title': 'ไม่สามารถแสดงตัวอย่างได้',
  /** Warns the user of affects to other documents if the action is confirmed (delete) */
  'confirm-delete-dialog.referential-integrity-disclaimer.text_delete':
    'หากคุณลบเอกสารนี้ เอกสารที่อ้างถึงจะไม่สามารถเข้าถึงได้อีกต่อไป',
  /** Warns the user of affects to other documents if the action is confirmed (unpublish) */
  'confirm-delete-dialog.referential-integrity-disclaimer.text_unpublish':
    'หากคุณยกเลิกการเผยแพร่เอกสารนี้ เอกสารที่อ้างถึงจะไม่สามารถเข้าถึงได้อีกต่อไป',
  /** Tells the user the count of how many other referring documents there are before listing them. (plural) */
  'confirm-delete-dialog.referring-document-count.text_other':
    '{{count}} เอกสารอ้างถึง “<DocumentTitle/>”',
  /** Describes the list of documents that refer to the one trying to be deleted (delete) */
  'confirm-delete-dialog.referring-documents-descriptor.text_delete':
    'คุณอาจไม่สามารถลบ “<DocumentTitle/>” เนื่องจากเอกสารต่อไปนี้อ้างอิงถึงมัน:',
  /** Describes the list of documents that refer to the one trying to be deleted (unpublish) */
  'confirm-delete-dialog.referring-documents-descriptor.text_unpublish':
    'คุณอาจไม่สามารถยกเลิกการเผยแพร่ “<DocumentTitle/>” เนื่องจากเอกสารต่อไปนี้อ้างอิงถึงมัน:',

  /** The text for the cancel button in the confirm dialog used in document action shortcuts if none is provided */
  'confirm-dialog.cancel-button.fallback-text': 'ยกเลิก',
  /** The text for the confirm button in the confirm dialog used in document action shortcuts if none is provided */
  'confirm-dialog.confirm-button.fallback-text': 'ยืนยัน',

  /** For the default structure definition, the title for the "Content" pane */
  'default-definition.content-title': 'เนื้อหา',

  /** The text shown if there was an error while getting the document's title via a preview value */
  'doc-title.error.text': 'ข้อผิดพลาด: {{errorMessage}}',
  /** The text shown if the preview value for a document is non-existent or empty */
  'doc-title.fallback.text': 'ไม่มีชื่อเรื่อง',
  /** The text shown if a document's title via a preview value cannot be determined due to an unknown schema type */
  'doc-title.unknown-schema-type.text': 'ไม่รู้จักประเภทสคีมา: {{schemaType}}',

  /** Tooltip text shown for the close button of the document inspector */
  'document-inspector.close-button.tooltip': 'ปิด',
  /** The title shown in the dialog header, when inspecting a valid document */
  'document-inspector.dialog.title': 'กำลังตรวจสอบ <DocumentTitle/>',
  /** The title shown in the dialog header, when the document being inspected is not created yet/has no value */
  'document-inspector.dialog.title-no-value': 'ไม่มีค่า',
  /** Title shown for menu item that opens the "Inspect" dialog */
  'document-inspector.menu-item.title': 'ตรวจสอบ',
  /** the placeholder text for the search input on the inspect dialog */
  'document-inspector.search.placeholder': 'ค้นหา',
  /** The "parsed" view mode, meaning the JSON is searchable, collapsible etc */
  'document-inspector.view-mode.parsed': 'วิเคราะห์แล้ว',
  /** The "raw" view mode, meaning the JSON is presented syntax-highlighted, but with no other features - optimal for copying */
  'document-inspector.view-mode.raw-json': 'JSON ดิบ',

  /** The text for when a form is hidden */
  'document-view.form-view.form-hidden': 'ฟอร์มนี้ถูกซ่อน',
  /** Fallback title shown when a form title is not provided */
  'document-view.form-view.form-title-fallback': 'ไม่มีชื่อ',
  /** The text for when the form view is loading a document */
  'document-view.form-view.loading': 'กำลังโหลดเอกสาร…',
  /** The description of the sync lock toast on the form view */
  'document-view.form-view.sync-lock-toast.description':
    'โปรดรอสักครู่ขณะที่เอกสารกำลังถูกซิงค์ สิ่งนี้มักเกิดขึ้นทันทีหลังจากที่เอกสารได้รับการเผยแพร่ และไม่ควรใช้เวลามากกว่าไม่กี่วินาที',
  /** The title of the sync lock toast on the form view */
  'document-view.form-view.sync-lock-toast.title': 'กำลังซิงค์เอกสาร…',

  /** The description for the document favorite action */
  'document.favorites.add-to-favorites': 'เพิ่มลงในรายการโปรด',
  /** The description for the document unfavorite action */
  'document.favorites.remove-from-favorites': 'ลบออกจากรายการโปรด',

  /** The description for the events inspector when we can't load the document so we default to compare with published */
  'events.compare-with-published.description':
    'เราไม่สามารถโหลดการเปลี่ยนแปลงสำหรับเอกสารนี้ได้ อาจเป็นเพราะนโยบายการเก็บรักษาประวัติของแผนของคุณ นี่แสดงให้คุณเห็นว่าเวอร์ชัน <strong>{{version}}</strong> เปรียบเทียบกับเวอร์ชัน <strong>published</strong> อย่างไร',
  /** The title for the events inspector when we can't load the document so we default to compare with published */
  'events.compare-with-published.title': 'การเปรียบเทียบกับเวอร์ชันที่เผยแพร่',
  /**The title for the menu items that will be shown when expanding a publish release event to inspect the document */
  'events.inspect.release': 'ตรวจสอบเอกสาร <VersionBadge>{{releaseTitle}}</VersionBadge>',
  /**The title for the menu items that will be shown when expanding a publish draft event to inspect the draft document*/
  'events.open.draft': 'เปิดเอกสาร <VersionBadge>ร่าง</VersionBadge>',
  /**The title for the menu items that will be shown when expanding a publish release event to inspect the release*/
  'events.open.release': 'เปิดการปล่อย <VersionBadge>{{releaseTitle}}</VersionBadge>',

  /** The loading messaging for when the tooltip is still loading permission info */
  'insufficient-permissions-message-tooltip.loading-text': 'กำลังโหลด…',

  /** --- Menu items --- */
  /** The menu item group title to use for the Action menu items */
  'menu-item-groups.actions-group': 'การกระทำ',
  /** The menu item group title to use for the Layout menu items */
  'menu-item-groups.layout-group': 'เลย์เอาต์',
  /** The menu item group title to use for the Sort menu items */
  'menu-item-groups.sorting-group': 'การเรียงลำดับ',

  /** The menu item title to use the compact view */
  'menu-items.layout.compact-view': 'มุมมองแบบกระชับ',
  /** The menu item title to use the detailed view */
  'menu-items.layout.detailed-view': 'มุมมองแบบละเอียด',
  /** The menu item title to Sort by Created */
  'menu-items.sort-by.created': 'เรียงตามวันที่สร้าง',
  /** The menu item title to Sort by Last Edited */
  'menu-items.sort-by.last-edited': 'เรียงตามการแก้ไขล่าสุด',

  /** The link text of the no document type screen that appears directly below the subtitle */
  'no-document-types-screen.link-text': 'เรียนรู้วิธีการเพิ่มประเภทเอกสาร →',
  /** The subtitle of the no document type screen that appears directly below the title */
  'no-document-types-screen.subtitle': 'กรุณากำหนดประเภทเอกสารอย่างน้อยหนึ่งประเภทในสคีมาของคุณ',
  /** The title of the no document type screen */
  'no-document-types-screen.title': 'ไม่มีประเภทเอกสาร',

  /** Text shown on back button visible on smaller breakpoints */
  'pane-header.back-button.text': 'กลับ',
  /** tooltip text (via `title` attribute) for the menu button */
  'pane-header.context-menu-button.tooltip': 'แสดงเมนู',
  /** Appears in a document list pane header if there are more than one option for create. This is the label for that menu */
  'pane-header.create-menu.label': 'สร้าง',
  /** Tooltip displayed on the create new button in document lists */
  'pane-header.create-new-button.tooltip': 'สร้างเอกสารใหม่',
  /** The `aria-label` for the disabled button in the pane header if create permissions are granted */
  'pane-header.disabled-created-button.aria-label': 'สิทธิ์ไม่เพียงพอ',

  /** The text shown in the tooltip of pane item previews of documents if there are unpublished edits */
  'pane-item.draft-status.has-draft.tooltip': 'แก้ไข <RelativeTime/>',
  /** The text shown in the tooltip of pane item previews of documents if there are no unpublished edits */
  'pane-item.draft-status.no-draft.tooltip': 'ไม่มีการแก้ไขที่ยังไม่ได้เผยแพร่',
  /** The subtitle tor pane item previews if there isn't a matching schema type found */
  'pane-item.missing-schema-type.subtitle': 'เอกสาร: <Code>{{documentId}}</Code>',
  /** The title tor pane item previews if there isn't a matching schema type found */
  'pane-item.missing-schema-type.title': 'ไม่พบสคีมาสำหรับประเภท <Code>{{documentType}}</Code>',
  /** The text shown in the tooltip of pane item previews of documents if there are unpublished edits */
  'pane-item.published-status.has-published.tooltip': 'เผยแพร่ <RelativeTime/>',
  /** The text shown in the tooltip of pane item previews of documents if there are no unpublished edits */
  'pane-item.published-status.no-published.tooltip': 'ไม่มีการแก้ไขที่ยังไม่ได้เผยแพร่',

  /** The text used in the document header title if there is an error */
  'panes.document-header-title.error.text': 'ข้อผิดพลาด: {{error}}',
  /** The text used in the document header title if creating a new item */
  'panes.document-header-title.new.text': 'สร้างใหม่ {{schemaType}}',
  /** The text used in the document header title if no other title can be determined */
  'panes.document-header-title.untitled.text': 'ไม่มีชื่อ',
  /** The help text saying that we'll retry fetching the document list */
  'panes.document-list-pane.error.retrying': 'กำลังลองใหม่…',
  /** The error text on the document list pane */
  'panes.document-list-pane.error.text': 'ข้อผิดพลาด: <Code>{{error}}</Code>',
  /** The error text on the document list pane */
  'panes.document-list-pane.error.text.dev': 'ข้อผิดพลาด: <Code>{{error}}</Code>',
  /** The error text on the document list pane if the browser appears to be offlline */
  'panes.document-list-pane.error.text.offline': 'ดูเหมือนว่าการเชื่อมต่ออินเทอร์เน็ตจะไม่ทำงาน',
  /** The error title on the document list pane */
  'panes.document-list-pane.error.title': 'ไม่สามารถดึงรายการได้',
  'panes.document-list-pane.error.will-retry-automatically_other': 'กำลังลองใหม่… (#{{count}}).',
  /** The text of the document list pane if more than a maximum number of documents are returned */
  'panes.document-list-pane.max-items.text': 'แสดงสูงสุด {{limit}} เอกสาร',
  /** The text of the document list pane if no documents are found for a specified type */
  'panes.document-list-pane.no-documents-of-type.text': 'ไม่มีเอกสารประเภทนี้',
  /** The text of the document list pane if no documents are found */
  'panes.document-list-pane.no-documents.text': 'ไม่พบผลลัพธ์',
  /** The text of the document list pane if no documents are found matching specified criteria */
  'panes.document-list-pane.no-matching-documents.text': 'ไม่มีเอกสารที่ตรงกัน',
  /** The search input for the search input on the document list pane */
  'panes.document-list-pane.reconnecting': 'กำลังพยายามเชื่อมต่อ…',
  /** The aria-label for the search input on the document list pane */
  'panes.document-list-pane.search-input.aria-label': 'ค้นหารายการ',
  /** The search input for the search input on the document list pane */
  'panes.document-list-pane.search-input.placeholder': 'ค้นหารายการ',
  /** The summary title when displaying an error for a document operation result */
  'panes.document-operation-results.error.summary.title': 'รายละเอียด',
  /** The text when a generic operation failed (fallback, generally not shown)  */
  'panes.document-operation-results.operation-error': 'เกิดข้อผิดพลาดระหว่าง {{context}}',
  /** The text when a delete operation failed  */
  'panes.document-operation-results.operation-error_delete':
    'เกิดข้อผิดพลาดขณะพยายามลบเอกสารนี้ ซึ่งโดยปกติหมายความว่ามีเอกสารอื่นที่อ้างอิงถึงมัน',
  /** The text when an unpublish operation failed  */
  'panes.document-operation-results.operation-error_unpublish':
    'เกิดข้อผิดพลาดขณะพยายามยกเลิกการเผยแพร่เอกสารนี้ ซึ่งโดยปกติหมายความว่ามีเอกสารอื่นที่อ้างอิงถึงมัน',
  /** The text when a generic operation succeeded (fallback, generally not shown)  */
  'panes.document-operation-results.operation-success': 'ดำเนินการ {{context}} กับเอกสารสำเร็จ',
  /** The text when copy URL operation succeeded  */
  'panes.document-operation-results.operation-success_copy-url':
    'คัดลอก URL เอกสารไปยังคลิปบอร์ดแล้ว',
  /**  */
  'panes.document-operation-results.operation-success_createVersion':
    '<Strong>{{title}}</Strong> ได้ถูกเพิ่มเข้าไปในการปล่อย',
  /** The text when a delete operation succeeded  */
  'panes.document-operation-results.operation-success_delete': 'เอกสารถูกลบเรียบร้อยแล้ว',
  /** The text when a discard changes operation succeeded  */
  'panes.document-operation-results.operation-success_discardChanges':
    'การเปลี่ยนแปลงทั้งหมดนับตั้งแต่การเผยแพร่ครั้งล่าสุดได้ถูกทิ้งไปแล้ว ร่างที่ถูกทิ้งนี้ยังสามารถกู้คืนได้จากประวัติ',
  /** The text when a duplicate operation succeeded  */
  'panes.document-operation-results.operation-success_duplicate':
    'เอกสารได้รับการทำซ้ำเรียบร้อยแล้ว',
  /** The text when a publish operation succeeded  */
  'panes.document-operation-results.operation-success_publish': 'เอกสารได้รับการเผยแพร่',
  /** The text when a restore operation succeeded  */
  'panes.document-operation-results.operation-success_restore':
    '<Strong>{{title}}</Strong> ได้รับการกู้คืนแล้ว',
  /** The text when an unpublish operation succeeded  */
  'panes.document-operation-results.operation-success_unpublish':
    'เอกสารได้รับการยกเลิกการเผยแพร่ ร่างใหม่ได้ถูกสร้างขึ้นจากเวอร์ชันที่เผยแพร่ล่าสุด',
  /** The document title shown when document title is "undefined" in operation message */
  'panes.document-operation-results.operation-undefined-title': 'ไม่มีชื่อ',
  /** The loading message for the document not found pane */
  'panes.document-pane.document-not-found.loading': 'กำลังโหลดเอกสาร…',
  /** The text of the document not found pane if the schema is known */
  'panes.document-pane.document-not-found.text':
    'ไม่ได้กำหนดประเภทของเอกสาร และไม่พบเอกสารที่มีรหัส <Code>{{id}}</Code>',
  /** The title of the document not found pane if the schema is known */
  'panes.document-pane.document-not-found.title': 'ไม่พบเอกสาร',
  /** The text of the document not found pane if the schema is not found */
  'panes.document-pane.document-unknown-type.text':
    'เอกสารนี้มีประเภทสคีมา <Code>{{documentType}}</Code> ซึ่งไม่ได้ถูกกำหนดเป็นประเภทในสคีมาของสตูดิโอเนื้อหาท้องถิ่น',
  /** The title of the document not found pane if the schema is not found or unknown */
  'panes.document-pane.document-unknown-type.title':
    'ประเภทเอกสารที่ไม่รู้จัก: <Code>{{documentType}}</Code>',
  /** The title of the document not found pane if the schema is unknown */
  'panes.document-pane.document-unknown-type.without-schema.text':
    'เอกสารนี้ไม่มีอยู่ และไม่มีการระบุประเภทสคีมาสำหรับมัน',
  /** Default message shown while resolving the structure definition for an asynchronous node */
  'panes.resolving.default-message': 'กำลังโหลด…',
  /** Message shown while resolving the structure definition for an asynchronous node and it is taking a while (more than 5s) */
  'panes.resolving.slow-resolve-message': 'ยังกำลังโหลด…',
  /** The text to display when type is missing */
  'panes.unknown-pane-type.missing-type.text':
    'รายการโครงสร้างขาดคุณสมบัติ <Code>type</Code> ที่จำเป็น',
  /** The title of the unknown pane */
  'panes.unknown-pane-type.title': 'ประเภทของพาเนลที่ไม่รู้จัก',
  /** The text to display when type is unknown */
  'panes.unknown-pane-type.unknown-type.text':
    'รายการโครงสร้างของประเภท <Code>{{type}}</Code> ไม่ใช่เอนทิตีที่รู้จัก',

  /** The text for the "Open preview" action for a document */
  'production-preview.menu-item.title': 'เปิดตัวอย่าง',

  /** The text for the confirm button in the request permission dialog used in the permissions banner */
  'request-permission-dialog.confirm-button.text': 'ส่งคำขอ',
  /** The description text for the request permission dialog used in the permissions banner */
  'request-permission-dialog.description.text':
    'คำขอของคุณจะถูกส่งไปยังผู้ดูแลโครงการ คุณสามารถรวมข้อความหมายเหตุได้หากต้องการ',
  /** The header/title for the request permission dialog used in the permissions banner */
  'request-permission-dialog.header.text': 'ขอสิทธิ์การแก้ไข',
  /** The text describing the note input for the request permission dialog used in the permissions banner */
  'request-permission-dialog.note-input.description.text': 'หากคุณต้องการ คุณสามารถเพิ่มหมายเหตุ',
  /** The placeholder for the note input in the request permission dialog used in the permissions banner */
  'request-permission-dialog.note-input.placeholder.text': 'เพิ่มหมายเหตุ...',
  /** The error/warning text in the request permission dialog when the user's request has been declined */
  'request-permission-dialog.warning.denied.text': 'คำขอของคุณเข้าถึงโครงการนี้ถูกปฏิเสธ',
  /** The error/warning text in the request permission dialog when the user's request has been denied due to too many outstanding requests */
  'request-permission-dialog.warning.limit-reached.text':
    'คุณได้ถึงขีดจำกัดสำหรับคำขอบทบาทในโครงการทั้งหมดแล้ว กรุณารอก่อนที่จะส่งคำขอเพิ่มเติมหรือติดต่อผู้ดูแลระบบเพื่อขอความช่วยเหลือ',

  /** Label for button when status is saved */
  'status-bar.document-status-pulse.status.saved.text': 'บันทึกแล้ว',
  /** Label for button when status is syncing */
  'status-bar.document-status-pulse.status.syncing.text': 'กำลังบันทึก...',
  /** Accessibility label indicating when the document was last published, in relative time, eg "3 weeks ago" */
  'status-bar.publish-status-button.last-published-time.aria-label':
    'เผยแพร่ครั้งล่าสุด {{relativeTime}}',
  /** Text for tooltip showing explanation of timestamp/relative time, eg "Last published <RelativeTime/>" */
  'status-bar.publish-status-button.last-published-time.tooltip':
    'เผยแพร่ครั้งล่าสุด <RelativeTime/>',
  /** Accessibility label indicating when the document was last updated, in relative time, eg "2 hours ago" */
  'status-bar.publish-status-button.last-updated-time.aria-label':
    'อัปเดตครั้งล่าสุด {{relativeTime}}',
  /** Text for tooltip showing explanation of timestamp/relative time, eg "Last updated <RelativeTime/>" */
  'status-bar.publish-status-button.last-updated-time.tooltip': 'อัปเดตครั้งล่าสุด <RelativeTime/>',
  /** Aria label for the button */
  'status-bar.review-changes-button.aria-label': 'ตรวจสอบการเปลี่ยนแปลง',
  /** Label for button when status is saved */
  'status-bar.review-changes-button.status.saved.text': 'บันทึกแล้ว!',
  /** Label for button when status is syncing */
  'status-bar.review-changes-button.status.syncing.text': 'กำลังบันทึก...',
  /** Text for the secondary text for tooltip for the button */
  'status-bar.review-changes-button.tooltip.changes-saved': 'การเปลี่ยนแปลงถูกบันทึก',
  /** Primary text for tooltip for the button */
  'status-bar.review-changes-button.tooltip.text': 'ตรวจสอบการเปลี่ยนแปลง',

  /** The text that appears in side the documentation link */
  'structure-error.docs-link.text': 'ดูเอกสาร',
  /** Labels the error message or error stack of the structure error screen */
  'structure-error.error.label': 'ข้อผิดพลาด',
  /** The header that appears at the top of the error screen */
  'structure-error.header.text': 'พบข้อผิดพลาดขณะอ่านโครงสร้าง',
  /** The text in the reload button to retry rendering the structure */
  'structure-error.reload-button.text': 'โหลดใหม่',
  /** Labels the structure path of the structure error screen */
  'structure-error.structure-path.label': 'เส้นทางโครงสร้าง',

  /** The aria label for the menu button in the timeline item */
  'timeline-item.menu-button.aria-label': 'เปิดเมนูการกระทำ',
  /** The text for the tooltip in menu button the timeline item */
  'timeline-item.menu-button.tooltip': 'การกระทำ',
  /** The text for the collapse action in the timeline item menu */
  'timeline-item.menu.action-collapse': 'ย่อ',
  /** The text for the expand action in the timeline item menu */
  'timeline-item.menu.action-expand': 'ขยาย',
  /** The text for the published event menu tooltip when the release is not found */
  'timeline-item.not-found-release.tooltip': 'ไม่พบการเผยแพร่ที่มีรหัส "{{releaseId}}"',
})
