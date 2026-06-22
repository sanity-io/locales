import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Action text for adding a document to release */
  'action.add-document': 'เพิ่มเอกสาร',
  /** Action text for archiving a release */
  'action.archive': 'เก็บถาวร release',
  /** Tooltip for when the archive release action is disabled due to release being scheduled  */
  'action.archive.tooltip': 'ยกเลิกการกำหนดเวลา release นี้เพื่อเก็บถาวร',
  /** Action text for showing the archived releases */
  'action.archived': 'เก็บถาวรแล้ว',
  /** Menu item label for copying release ID */
  'action.copy-release-id.label': 'คัดลอก ID ของ release',
  /** Menu item label for copying release URL */
  'action.copy-release-link.label': 'คัดลอก URL ของ release',
  /** Menu item label for copying release title */
  'action.copy-release-title.label': 'คัดลอกชื่อ release',
  /** Tooltip for copy release actions button */
  'action.copy-release.label': 'คัดลอก',
  /** Action text for staging a new revert release */
  'action.create-revert-release': 'สร้าง release ใหม่',
  /** Action text for deleting a release */
  'action.delete-release': 'ลบ release',
  /** Menu item label for showing scheduled drafts */
  'action.drafts': 'ฉบับร่างที่กำหนดเวลาไว้',
  /** Action text for duplicating a release */
  'action.duplicate-release': 'ทำสำเนา release',
  /** Action text for editing a release */
  'action.edit': 'แก้ไข release',
  /** Action text for reverting a release immediately without staging changes */
  'action.immediate-revert-release': 'เปลี่ยนกลับทันที',
  /** Action text for opening a release */
  'action.open': 'ใช้งานอยู่',
  /** Action text for showing the paused scheduled drafts */
  'action.paused': 'หยุดชั่วคราว',
  /** Action text for publishing all documents in a release (and the release itself) */
  'action.publish-all-documents': 'เรียกใช้ release',
  /** Menu item label for showing releases (multi-document releases) */
  'action.releases': 'Releases',
  /** Action text for reverting a release */
  'action.revert': 'เปลี่ยนกลับ release',
  /** Action message for when document is scheduled for unpublishing a document and you want to no longer unpublish it */
  'action.revert-unpublish-actions': 'เปลี่ยนกลับการยกเลิกเผยแพร่เมื่อ release',
  /** Text for the review changes button in release tool */
  'action.review': 'ตรวจสอบการเปลี่ยนแปลง',
  /** Action text for scheduling a release */
  'action.schedule': 'กำหนดเวลา release...',
  /** Action text for scheduling unpublish of a draft document */
  'action.schedule-unpublish': 'กำหนดเวลายกเลิกเผยแพร่',
  /** Tooltip text for when schedule unpublish is disabled because document is not published */
  'action.schedule-unpublish.disabled.not-published':
    'ต้องเผยแพร่เอกสารก่อนจึงจะกำหนดเวลายกเลิกเผยแพร่ได้',
  /** Label for unarchiving a release */
  'action.unarchive': 'ยกเลิกการเก็บถาวร release',
  /** Action text for unpublishing a document in a release in the context menu */
  'action.unpublish': 'ยกเลิกการเผยแพร่',
  /** Action message for scheduling an unpublished of a document  */
  'action.unpublish-doc-actions': 'ยกเลิกการเผยแพร่เมื่อปล่อย',
  /** Action text for unscheduling a release */
  'action.unschedule': 'ยกเลิกการกำหนดเวลา release',

  /** Text for the summary button in release tool */
  'actions.summary': 'สรุป',

  /* The text for the activity event when a document is added to a release */
  'activity.event.add-document': 'เพิ่มเวอร์ชันเอกสารแล้ว',
  /* The text for the activity event when the release is archived */
  'activity.event.archive': 'เก็บถาวร release <strong>{{releaseTitle}}</strong> แล้ว',
  /* The text for the activity event when the release is created */
  'activity.event.create':
    'สร้าง release <strong>{{releaseTitle}}</strong> แล้ว <ScheduleTarget>โดยกำหนดเป้าหมาย </ScheduleTarget>',
  /* The text for the activity event when a document is removed from a release */
  'activity.event.discard-document': 'ยกเลิกเวอร์ชันเอกสารแล้ว',
  'activity.event.edit': 'ตั้งเวลา release เป็น <ScheduleTarget></ScheduleTarget>',
  /**The text to display in the changes when the release type changes to asap */
  'activity.event.edit-time-asap': 'โดยเร็วที่สุด',
  /**The text to display in the changes when the release type changes to undecided */
  'activity.event.edit-time-undecided': 'ยังไม่ตัดสินใจ',
  /* The text for the activity event when the release is published */
  'activity.event.publish': 'เผยแพร่ release <strong>{{releaseTitle}}</strong> แล้ว',
  /* The text for the activity event when the release is scheduled */
  'activity.event.schedule': 'ทำเครื่องหมายว่ากำหนดเวลาแล้ว',
  /** The text for the activity event when the release is unarchived */
  'activity.event.unarchive': 'ยกเลิกการเก็บถาวร release <strong>{{releaseTitle}}</strong> แล้ว',
  /** The text for the activity event when the release is unscheduled */
  'activity.event.unschedule': 'ทำเครื่องหมายว่ายกเลิกการกำหนดเวลาแล้ว',
  /** The loading text for when releases are loading */
  'activity.panel.error': 'เกิดข้อผิดพลาดในการดึงข้อมูลกิจกรรมของ release',
  /** The loading text for when releases are loading */
  'activity.panel.loading': 'กำลังโหลดกิจกรรมของ release',
  /** The title for the activity panel shown in the releases detail screen */
  'activity.panel.title': 'กิจกรรม',

  /** Label for the button to proceed with archiving a release */
  'archive-dialog.confirm-archive-button': 'ใช่ เก็บถาวร release',
  /** Description for the dialog confirming the archive of a release with more than one document */
  'archive-dialog.confirm-archive-description_other':
    'การดำเนินการนี้จะเก็บถาวรเวอร์ชันเอกสาร {{count}} รายการ',
  /** Header for the dialog confirming the archive of a release */
  'archive-dialog.confirm-archive-header': 'คุณแน่ใจหรือไม่ว่าต้องการเก็บถาวร release นี้?',
  /** Title for the dialog confirming the archive of a release */
  'archive-dialog.confirm-archive-title':
    "คุณแน่ใจหรือไม่ว่าต้องการเก็บถาวร release <strong>'{{title}}'</strong>?",

  /** Description for information card on a published or archived release to description retention effects */
  'archive-info.description':
    'จะพร้อมใช้งานเป็นเวลา {{retentionDays}} วัน จากนั้นจะถูกลบออกโดยอัตโนมัติในวันที่ {{removalDate}} <Link>เรียนรู้เกี่ยวกับการเก็บรักษา</Link>',
  /** Title for information card on a archived release */
  'archive-info.title': 'release นี้ถูกเก็บถาวรแล้ว',

  /** Banner text showing count of active scheduled drafts requiring confirmation with multiple drafts */
  'banner.confirm-active-scheduled-drafts_other':
    'มี Scheduled Drafts จำนวน {{count}} รายการที่ต้องการการยืนยันการกำหนดเวลา',
  /** Button text for confirming scheduling of active drafts */
  'banner.confirm-active-scheduled-drafts.button': 'ดำเนินการกำหนดเวลาต่อ',
  /** Button text when confirming schedules from paused mode */
  'banner.confirm-active-scheduled-drafts.button-paused': 'ดำเนินการกำหนดเวลาทั้งหมดต่อ',
  /** Banner text shown when drafts mode is disabled but there are still scheduled drafts */
  'banner.drafts-mode-disabled':
    'โหมด Drafts ถูกปิดใช้งานแล้ว แต่ยังมี scheduled drafts ที่รอการเผยแพร่อยู่',
  /** Banner text shown when navigating to a release that does not exist */
  'banner.release-not-found': 'ไม่พบ release นี้',
  /** Tooltip for the dismiss button in the release not found banner */
  'banner.release-not-found.dismiss': 'ปิด',
  /** Banner text shown when scheduled drafts feature is disabled but there are still scheduled drafts */
  'banner.scheduled-drafts-disabled':
    'Scheduled drafts ถูกปิดใช้งานแล้ว แต่ยังมี scheduled drafts ที่รอการเผยแพร่อยู่',

  /** Title for changes to published documents */
  'changes-published-docs.title': 'การเปลี่ยนแปลงในเอกสารที่เผยแพร่แล้ว',

  /** Dialog confirm button text for confirming all scheduled drafts */
  'confirm-active-scheduled-drafts-dialog.confirm-button': 'ยืนยันกำหนดเวลา',
  /** Dialog description for confirming active scheduled drafts */
  'confirm-active-scheduled-drafts-dialog.description':
    'กำหนดเวลา Scheduled Drafts ที่หยุดชั่วคราวทั้งหมดตามวันที่เผยแพร่ที่ตั้งใจไว้',
  /** Dialog warning when some scheduled drafts have past dates */
  'confirm-active-scheduled-drafts-dialog.past-dates-warning':
    'Scheduled Drafts บางรายการถูกกำหนดเวลาไว้ในวันที่ผ่านมาแล้ว การยืนยันกำหนดเวลาจะเผยแพร่เอกสารเวอร์ชันเหล่านั้นทันที',
  /** Dialog title for confirming active scheduled drafts */
  'confirm-active-scheduled-drafts-dialog.title': 'ดำเนินการ Scheduled Drafts ต่อ',

  /** Suffix for when a release is a copy of another release */
  'copy-suffix': 'สำเนา',

  /** Confirm button text for overriding existing draft */
  'copy-to-draft-dialog.confirm-button': 'ใช่ แทนที่ Draft',
  /** Description for dialog when copying version to draft that already exists */
  'copy-to-draft-dialog.description':
    'มีเอกสารเวอร์ชัน draft อยู่แล้ว คัดลอกเวอร์ชันปัจจุบันไปยัง draft และแทนที่เวอร์ชัน draft ที่มีอยู่',
  /** Title for dialog when copying version to draft that already exists */
  'copy-to-draft-dialog.title': 'มีเวอร์ชัน Draft อยู่แล้ว',

  /** Text for when a release / document was created */
  created: 'สร้างเมื่อ <RelativeTime/>',

  /** Activity inspector button text */
  'dashboard.details.activity': 'กิจกรรม',
  /** Text for the releases detail screen in the pin release button. */
  'dashboard.details.pin-release': 'ปักหมุด release ไว้ที่ studio',
  /** Text for the releases detail screen when a release was published ASAP */
  'dashboard.details.published-asap': 'เผยแพร่แล้ว',
  /** Text for the releases detail screen when a release was published from scheduling */
  'dashboard.details.published-on': 'เผยแพร่เมื่อ {{date}}',
  /** Text for the releases detail screen in the unpin release button. */
  'dashboard.details.unpin-release': 'ถอดหมุด release ออกจาก studio',

  /** Label for the button to proceed deleting a release */
  'delete-dialog.confirm-delete-button': 'ใช่ ลบ release',
  /** Description for the dialog confirming the deleting of a release with more than one document */
  'delete-dialog.confirm-delete-description_other': 'การดำเนินการนี้จะลบเอกสาร {{count}} เวอร์ชัน',
  /** Header for deleting a release dialog */
  'delete-dialog.confirm-delete.header': 'คุณแน่ใจหรือไม่ว่าต้องการลบ release นี้?',

  /** Label when a release has been deleted by a different user */
  'deleted-release': "release '<strong>{{title}}</strong>' ถูกลบแล้ว",

  /** Text for when there's no changes in a release diff */
  'diff.list-empty': 'รายการการเปลี่ยนแปลงว่างเปล่า ดูเอกสาร',
  /** Text for when there's no changes in a release diff */
  'diff.no-changes': 'ไม่มีการเปลี่ยนแปลง',

  /** Description for discarding a draft of a document dialog */
  'discard-version-dialog.description-draft':
    'การดำเนินการนี้จะลบการเปลี่ยนแปลงทั้งหมดที่ทำกับเอกสารนี้อย่างถาวร การดำเนินการนี้ไม่สามารถยกเลิกได้',
  /** Description for discarding a version of a document dialog */
  'discard-version-dialog.description-release':
    "การดำเนินการนี้จะลบการเปลี่ยนแปลงทั้งหมดที่ทำกับเอกสารนี้ภายใน release '<strong>{{releaseTitle}}</strong>' อย่างถาวร การดำเนินการนี้ไม่สามารถยกเลิกได้",
  /** Title for dialog for discarding a draft of a document */
  'discard-version-dialog.header-draft': 'ยกเลิกแบบร่างหรือไม่?',
  /** Header for discarding a version from a release of a document dialog */
  'discard-version-dialog.header-release':
    "ลบเอกสารออกจาก release '<strong>{{releaseTitle}}</strong>' หรือไม่?",
  /** Title for dialog for discarding a draft of a document */
  'discard-version-dialog.title-draft': 'ยกเลิกแบบร่าง',
  /** Title for dialog for discarding a version of a document */
  'discard-version-dialog.title-release': 'ลบออกจาก release',

  /** Label for when a document in a release has multiple validation warnings */
  'document-validation.error_other': 'ข้อผิดพลาดในการตรวจสอบ {{count}} รายการ',

  /** Label for the button to proceed with duplicating a release */
  'duplicate-dialog.confirm-duplicate-button': 'ใช่ ทำซ้ำ release',
  /** Description for the dialog confirming the duplicate of a release with more than one document */
  'duplicate-dialog.confirm-duplicate-description_other':
    'การดำเนินการนี้จะทำซ้ำ release และเวอร์ชันเอกสาร {{count}} รายการ',
  /** Header for the dialog confirming the duplicate of a release */
  'duplicate-dialog.confirm-duplicate-header': 'คุณแน่ใจหรือไม่ว่าต้องการทำซ้ำ release นี้?',

  /** Title text displayed for technical error details */
  'error-details-title': 'รายละเอียดข้อผิดพลาด',

  /** Title text when error during release update */
  'failed-edit-title': 'ไม่สามารถบันทึกการเปลี่ยนแปลงได้',

  /** Title text displayed for releases that failed to publish  */
  'failed-publish-title': 'ไม่สามารถเผยแพร่ได้',

  /** Title text displayed for releases that failed to schedule  */
  'failed-schedule-title': 'ไม่สามารถกำหนดเวลาได้',

  /** Filter tab label for all documents */
  'filter-tab.all': 'ทั้งหมด',
  /** Filter tab label for documents with validation errors */
  'filter-tab.errors': 'ข้อผิดพลาด',

  /**The text that will be shown in the footer to indicate the time the release was archived */
  'footer.status.archived': 'เก็บถาวรแล้ว',
  /**The text that will be shown in the footer to indicate the time the release was created */
  'footer.status.created': 'สร้างแล้ว',
  /**The text that will be shown in the footer to indicate the time the release was created */
  'footer.status.edited': 'แก้ไขแล้ว',
  /**The text that will be shown in the footer to indicate the time the release was published */
  'footer.status.published': 'เผยแพร่แล้ว',
  /**The text that will be shown in the footer to indicate the time the release was unarchived */
  'footer.status.unarchived': 'ยกเลิกการเก็บถาวรแล้ว',

  /** Label text for the loading state whilst release is being loaded */
  'loading-release': 'กำลังโหลด release',

  /** Text for when documents of a release are loading */
  'loading-release-documents': 'กำลังโหลดเอกสาร',
  /** Description text for when loading documents on a release failed */
  'loading-release-documents.error.description':
    'เราไม่สามารถโหลดเอกสารสำหรับ release นี้ได้ กรุณาลองใหม่อีกครั้งในภายหลัง',
  /** Title text for when loading documents on a release failed */
  'loading-release-documents.error.title': 'เกิดข้อผิดพลาดบางอย่าง',

  /** Label for title of actions for "when releasing" */
  'menu.group.when-releasing': 'เมื่อทำการ release',
  /** Label for the release menu */
  'menu.label': 'เมนู Release',
  /** Tooltip for the release menu */
  'menu.tooltip': 'การดำเนินการ',

  /** Text for when no archived releases are found */
  'no-archived-release': 'ไม่มี release ที่เก็บถาวร',

  /** Tooltip text when there are no paused scheduled drafts */
  'no-paused-release': 'ไม่มีแบบร่างที่กำหนดเวลาซึ่งถูกหยุดชั่วคราว',

  /** Text for when no releases are found */
  'no-releases': 'ไม่มี Release',

  /** Text for when no scheduled drafts are found */
  'no-scheduled-drafts': 'ไม่มีแบบร่างที่กำหนดเวลาไว้',

  /** Text for the button name for the release tool */
  'overview.action.documentation': 'เอกสารประกอบ',
  /** Tooltip for the calendar button in the release overview */
  'overview.calendar.tooltip': 'ดูปฏิทิน',
  /** Description for the release tool */
  'overview.description':
    'Release คือชุดของการเปลี่ยนแปลงเอกสารที่สามารถจัดการ กำหนดเวลา และย้อนกลับได้พร้อมกัน',
  /** Text for the placeholder in the search release input  */
  'overview.search-releases-placeholder': 'ค้นหา release',
  /** Title for the release tool */
  'overview.title': 'Releases',

  /** Tooltip text for releases that have passed their intended publish date */
  'passed-intended-publish-date': 'release นี้เลยวันที่เผยแพร่ที่ตั้งใจไว้แล้ว',

  /** Tooltip text for scheduled drafts that have passed their intended publish date */
  'passed-intended-publish-date-draft': 'แบบร่างนี้เลยวันที่เผยแพร่ที่ตั้งใจไว้แล้ว',

  /** Description for when a user doesn't have publish or schedule releases */
  'permission-missing-description':
    'บทบาทของคุณในปัจจุบันจำกัดสิ่งที่คุณสามารถเห็นใน release นี้ คุณอาจไม่สามารถเผยแพร่หรือกำหนดเวลา release นี้ได้',

  /** Text for when a user doesn't have publish or schedule releases */
  'permission-missing-title': 'การเข้าถึงที่จำกัด',

  /** Tooltip label when the user doesn't have permission to archive release */
  'permissions.error.archive': 'คุณไม่มีสิทธิ์ในการเก็บถาวร release นี้',
  /** Tooltip label when the user doesn't have permission to delete release */
  'permissions.error.delete': 'คุณไม่มีสิทธิ์ในการลบ release นี้',
  /** Tooltip label when the user doesn't have permission for discarding a version */
  'permissions.error.discard-version': 'คุณไม่มีสิทธิ์ในการละทิ้งเวอร์ชันนี้',
  /** Tooltip label when the user doesn't have permission to duplicate release */
  'permissions.error.duplicate': 'คุณไม่มีสิทธิ์ในการทำสำเนา release นี้',
  /** Tooltip label when the user doesn't have permission to unarchive release */
  'permissions.error.unarchive': 'คุณไม่มีสิทธิ์ในการยกเลิกการเก็บถาวร release นี้',
  /** Tooltip label when the user doesn't have permission for unpublishing a document */
  'permissions.error.unpublish': 'คุณไม่มีสิทธิ์ในการยกเลิกการเผยแพร่เอกสารนี้',

  /** Tooltip text for when one user is editing a document in a release */
  'presence.tooltip.one':
    '{{displayName}} กำลังแก้ไขเอกสารนี้ใน release "{{releaseTitle}}" อยู่ในขณะนี้',

  /** Tooltip text for publish release action when there are no documents */
  'publish-action.validation.no-documents': 'ไม่มีเอกสารที่จะเผยแพร่',

  /** Description for the dialog confirming the publish of a release with multiple documents */
  'publish-dialog.confirm-publish-description_other':
    "release '<strong>{{title}}</strong>' และเอกสาร {{releaseDocumentsLength}} รายการจะถูกเผยแพร่",
  /** Title for the dialog confirming the publish of a release */
  'publish-dialog.confirm-publish.title':
    'คุณแน่ใจหรือไม่ว่าต้องการเผยแพร่ release และเอกสารทุกเวอร์ชัน?',
  /** Label for when documents in release have validation errors */
  'publish-dialog.validation.error': 'เอกสารบางรายการมีข้อผิดพลาดในการตรวจสอบ',
  /** Label for when documents are being validated */
  'publish-dialog.validation.loading': 'กำลังตรวจสอบเอกสาร...',
  /** Label for the button when the user doesn't have permissions to publish a release */
  'publish-dialog.validation.no-permission': 'คุณไม่มีสิทธิ์ในการเผยแพร่',

  /** Title for information card on a published release */
  'publish-info.title': 'release นี้ได้รับการเผยแพร่เรียบร้อยแล้ว',

  /** Placeholder title for a release with no title */
  'release-placeholder.title': 'ไม่มีชื่อ',

  /** Description for the dialog confirming the revert of a release with multiple documents */
  'revert-dialog.confirm-revert-description_other':
    'การดำเนินการนี้จะย้อนกลับเอกสาร {{releaseDocumentsLength}} เวอร์ชัน',
  /** Checkbox label to confirm whether to create a staged release for revert or immediately revert */
  'revert-dialog.confirm-revert.stage-revert-checkbox-label': 'ย้อนกลับ release ทันที',
  /** Title for the dialog confirming the revert of a release */
  'revert-dialog.confirm-revert.title': "คุณแน่ใจหรือไม่ว่าต้องการย้อนกลับ release '{{title}}'?",
  /** Warning card text for when immediately revert a release with history */
  'revert-dialog.confirm-revert.warning-card':
    'มีการเปลี่ยนแปลงเอกสารใน release นี้หลังจากที่ถูกเผยแพร่ การย้อนกลับจะเขียนทับการเปลี่ยนแปลงเหล่านี้',

  /** Description of a reverted release */
  'revert-release.description': 'ย้อนกลับการเปลี่ยนแปลงเวอร์ชันเอกสารใน "{{title}}"',
  /** Title of a reverted release */
  'revert-release.title': 'กำลังย้อนกลับ "{{title}}"',

  /** Description for the review changes button in release tool */
  'review.description': 'เพิ่มเอกสารใน release นี้เพื่อตรวจสอบการเปลี่ยนแปลง',
  /** Text for when a document is edited */
  'review.edited': 'แก้ไขแล้ว <RelativeTime/>',

  /** Schedule release button tooltip when there are no documents to schedule */
  'schedule-action.validation.no-documents': 'ไม่มีเอกสารที่จะกำหนดเวลา',

  /** Schedule release button tooltip when the release is already scheduled */
  'schedule-button-tooltip.already-scheduled': 'release นี้ถูกกำหนดเวลาไว้แล้ว',
  /** Schedule release button tooltip when there are validation errors */
  'schedule-button-tooltip.validation.error': 'เอกสารบางรายการมีข้อผิดพลาดในการตรวจสอบ',
  /** Schedule release button tooltip when validation is loading */
  'schedule-button-tooltip.validation.loading': 'กำลังตรวจสอบเอกสาร...',
  /** Schedule release button tooltip when user has no permissions to schedule */
  'schedule-button-tooltip.validation.no-permission': 'คุณไม่มีสิทธิ์ในการกำหนดเวลา',

  /** Title of unschedule release dialog */
  'schedule-button.tooltip': 'คุณแน่ใจหรือไม่ว่าต้องการยกเลิกการกำหนดเวลาของ release?',

  /** Description for the confirm button for scheduling a release */
  'schedule-dialog.confirm-button': 'ใช่, กำหนดเวลา',
  /** Description for the dialog confirming the publish of a release with multiple documents */
  'schedule-dialog.confirm-description_other':
    'release <strong>{{title}}</strong> และเอกสาร {{count}} เวอร์ชันจะถูกกำหนดเวลา',
  /** Title for unschedule release dialog */
  'schedule-dialog.confirm-title': 'กำหนดเวลา release',
  /** Description for warning that the published schedule time is in the past */
  'schedule-dialog.publish-date-in-past-warning': 'กำหนดเวลาและวันที่ในอนาคต',
  /** Label for date picker when scheduling a release */
  'schedule-dialog.select-publish-date-label': 'กำหนดเวลาเผยแพร่เมื่อ',

  /** Confirm button text for the schedule unpublish dialog */
  'schedule-unpublish-dialog.confirm': 'กำหนดเวลายกเลิกการเผยแพร่',
  /** Description for the schedule unpublish dialog */
  'schedule-unpublish-dialog.description': 'เลือกเวลาที่เอกสารนี้ควรถูกยกเลิกการเผยแพร่',
  /** Header for the schedule unpublish dialog */
  'schedule-unpublish-dialog.header': 'กำหนดเวลาแบบร่างสำหรับการยกเลิกการเผยแพร่',

  /** Placeholder for search of documents in a release */
  'search-documents-placeholder': 'ค้นหาเอกสาร',

  /** Text for when the release has no errors found */
  'summary.all-documents-errors-found': 'ตรวจสอบเอกสารทั้งหมดแล้ว พบปัญหา',
  /** Text for when the release has validated all documents */
  'summary.all-documents-validated': 'ตรวจสอบเอกสารทั้งหมดแล้ว ไม่พบปัญหา',
  /** Text for when the release was created */
  'summary.created': 'สร้างแล้ว <RelativeTime/>',
  /** Text for when the release is composed of multiple documents */
  'summary.document-count_other': '{{count}} เอกสาร',
  /** Text for when the release has some errors found */
  'summary.errors-found': 'เพื่อเผยแพร่หรือกำหนดเวลา release กรุณาแก้ไขปัญหาที่พบในเอกสาร',
  /** Text for when the release has no documents */
  'summary.no-documents': 'ไม่มีเอกสาร',
  /** Description for the empty state when a cardinality-one release has no documents */
  'summary.no-documents-cardinality-one.description':
    'แบบร่างที่กำหนดเวลานี้ไม่มีเอกสาร อาจถูกลบออกไปแล้ว',
  /** Title for the empty state when a cardinality-one release has no documents */
  'summary.no-documents-cardinality-one.title': 'ไม่มีเอกสารใน release นี้',
  /** Text for when the release has not published */
  'summary.not-published': 'ยังไม่ได้เผยแพร่',
  /** Text for when the release was published */
  'summary.published': 'เผยแพร่แล้ว <RelativeTime/>',
  /** Text for when the release has validated documents */
  'summary.validated-documents': 'ตรวจสอบแล้ว {{validatedCount}} จาก {{totalCount}} เอกสาร',
  /** Text for validation loading indicator */
  'summary.validating-documents': 'กำลังตรวจสอบเอกสาร: {{validatedCount}} จาก {{totalCount}}',

  /** add action type that will be shown in the table*/
  'table-body.action.add': 'เพิ่ม',
  /** Change action type that will be shown in the table*/
  'table-body.action.change': 'เปลี่ยนแปลง',
  /** Change action type that will be shown in the table*/
  'table-body.action.unpublish': 'ยกเลิกการเผยแพร่',

  /** Header for the document table in the release tool - action */
  'table-header.action': 'การดำเนินการ',
  /** Header for the document table in the release tool - Archived */
  'table-header.archivedAt': 'เก็บถาวรแล้ว',
  /** Header for the document table in the release tool - contributors */
  'table-header.contributors': 'ผู้มีส่วนร่วม',
  /** Header for the document table in the release tool - created by */
  'table-header.created-by': 'สร้างโดย',
  /** Header for the document table in the release tool - document preview */
  'table-header.document': 'เอกสาร',
  /** Header for the document table in the release tool - title */
  'table-header.documents': 'เอกสาร',
  /** Header for the document table in the release tool - edited */
  'table-header.edited': 'แก้ไขแล้ว',
  /** Header for the paused scheduled drafts table - intended for */
  'table-header.intended-for': 'ตั้งใจสำหรับ',
  /** Header for the document table in the release tool - Published */
  'table-header.published-at': 'เผยแพร่แล้ว',
  /** Header for the document table in the release tool - Published */
  'table-header.publishedAt': 'เผยแพร่แล้ว',
  /** Header for the scheduled drafts document table in the release tool - published at */
  'table-header.scheduled-draft.published-at': 'เผยแพร่เมื่อ',
  /** Header for the scheduled drafts document table in the release tool - scheduled for */
  'table-header.scheduled-for': 'กำหนดเวลาสำหรับ',
  /** Header for the document table in the release tool - time */
  'table-header.time': 'เวลา',
  /** Header for the  document table in the release tool - release title */
  'table-header.title': 'Release',
  /** Header for the document table in the release tool - type */
  'table-header.type': 'ประเภท',
  /** Header for the document table in the release tool - when */
  'table-header.when': 'เมื่อ',

  /** Text for the release time label for scheduled releases  which has not been scheduled yet*/
  'time.estimated': 'ประมาณการ',
  /** Text for the release time label for scheduled releases  which has been scheduled*/
  'time.scheduled': 'กำหนดเวลาแล้ว',

  /** Text for toast when release failed to archive */
  'toast.archive.error': "ไม่สามารถเก็บถาวร '<strong>{{title}}</strong>': {{error}}",
  /** Toast error message when bulk scheduling of active drafts fails */
  'toast.confirm-active-scheduled-drafts.error': 'ไม่สามารถกำหนดเวลาแบบร่าง: {{error}}',
  /** Toast message after copying release ID */
  'toast.copy-release-id.success': 'คัดลอก Release ID ไปยังคลิปบอร์ดแล้ว',
  /** Toast message after copying release link */
  'toast.copy-release-link.success': 'คัดลอกลิงก์ Release ไปยังคลิปบอร์ดแล้ว',
  /** Toast message after copying release title */
  'toast.copy-release-title.success': 'คัดลอกชื่อ Release ไปยังคลิปบอร์ดแล้ว',
  /** Description for toast when creating new version of document in release failed */
  'toast.create-version.error': 'ไม่สามารถเพิ่มเอกสารใน Release: {{error}}',
  /** Description for toast when release deletion failed */
  'toast.delete.error': "ไม่สามารถลบ '<strong>{{title}}</strong>': {{error}}",
  /** Description for toast when release is successfully deleted */
  'toast.delete.success': "Release '<strong>{{title}}</strong>' ถูกลบเรียบร้อยแล้ว",
  /** Description for toast when release duplication failed */
  'toast.duplicate.error': "ไม่สามารถทำซ้ำ '<strong>{{title}}</strong>': {{error}}",
  /** Description for toast when release is successfully duplicated */
  'toast.duplicate.success': "Release '<strong>{{title}}</strong>' ถูกทำซ้ำแล้ว <Link/>",
  /** Link text for toast link to the duplicated release */
  'toast.duplicate.success-link': 'ดู Release ที่ทำซ้ำ',
  /** Text for toast when release has been reverted immediately */
  'toast.immediate-revert.success': "รีเวิร์ต release '{{title}}' สำเร็จแล้ว",
  /** Text for toast when release failed to publish */
  'toast.publish.error': "ไม่สามารถเผยแพร่ '<strong>{{title}}</strong>' ได้: {{error}}",
  /** Text for toast when release has reverted release successfully staged */
  'toast.revert-stage.success': "สร้าง revert release สำหรับ '{{title}}' สำเร็จแล้ว <Link/>",
  /** Link text for toast link to the generated revert release */
  'toast.revert-stage.success-link': 'ดู revert release',
  /** Text for toast when release failed to revert */
  'toast.revert.error': 'ไม่สามารถรีเวิร์ต release ได้: {{error}}',
  /** Text for toast when release failed to schedule */
  'toast.schedule.error': "ไม่สามารถกำหนดเวลา '<strong>{{title}}</strong>' ได้: {{error}}",
  /** Text for toast when release has been scheduled */
  'toast.schedule.success': "กำหนดเวลา release '<strong>{{title}}</strong>' เรียบร้อยแล้ว",
  /** Text for toast when release failed to unarchive */
  'toast.unarchive.error': "ไม่สามารถยกเลิกการเก็บถาวร '<strong>{{title}}</strong>' ได้: {{error}}",
  /** Text for toast when release failed to unschedule */
  'toast.unschedule.error': "ไม่สามารถยกเลิกกำหนดเวลา '<strong>{{title}}</strong>' ได้: {{error}}",

  /** Text for tooltip when a release has been scheduled */
  'type-picker.tooltip.scheduled': 'release ถูกกำหนดเวลาไว้แล้ว ยกเลิกกำหนดเวลาเพื่อเปลี่ยนประเภท',

  /** Text action in unpublish dialog to cancel */
  'unpublish-dialog.action.cancel': 'ยกเลิก',
  /** Text action in unpublish dialog to unpublish */
  'unpublish-dialog.action.unpublish': 'ใช่ ยกเลิกการเผยแพร่เมื่อปล่อย',
  /** Description for unpublish dialog, explaining that all changes made to this document will be lost */
  'unpublish-dialog.description.lost-changes':
    'การเปลี่ยนแปลงใดๆ ที่ทำกับเวอร์ชันเอกสารนี้จะสูญหาย',
  /** Description for the unpublish dialog, explaining that it will create a draft if no draft exists at time of release */
  'unpublish-dialog.description.to-draft':
    'การดำเนินการนี้จะยกเลิกการเผยแพร่เอกสารในฐานะส่วนหนึ่งของ release <Label>{{title}}</Label> และสร้างฉบับร่างหากไม่มีฉบับร่างอยู่ในขณะที่ปล่อย',
  /** Title for the dialog confirming the unpublish of a release */
  'unpublish-dialog.header': 'คุณแน่ใจหรือไม่ว่าต้องการยกเลิกการเผยแพร่เอกสารนี้เมื่อปล่อย?',

  /** Text for when a document is unpublished */
  'unpublish.already-unpublished': 'เอกสารนี้ถูกยกเลิกการเผยแพร่แล้ว',
  /** Tooltip label for when a document is unpublished */
  'unpublish.no-published-version': 'ไม่มีเวอร์ชันที่เผยแพร่ของเอกสารนี้',

  /** Description shown in unschedule relaease dialog */
  'unschedule-dialog.confirm-description': 'release จะไม่ถูกเผยแพร่ตามวันที่กำหนดเวลาไว้อีกต่อไป',
  /** Title for unschedule release dialog */
  'unschedule-dialog.confirm-title': 'คุณแน่ใจหรือไม่ว่าต้องการยกเลิกกำหนดเวลา release?',
})
