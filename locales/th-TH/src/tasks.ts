import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** The label for the create task action */
  'actions.create.text': 'สร้างงานใหม่',
  /** The label for the open tasks panel action */
  'actions.open.text': 'งาน',

  /** The label for the button to create a new task */
  'buttons.create.text': 'สร้างงาน',
  /** The label for the button to discard changes */
  'buttons.discard.text': 'ยกเลิก',
  /** The label for the button to open the draft */
  'buttons.draft.text': 'ร่าง',
  /** The label for the button to create a new task */
  'buttons.new.text': 'งานใหม่',
  /** The label for the button that will navigate to the next task */
  'buttons.next.tooltip': 'ไปยังงานถัดไป',
  /** The label for the button that will previous to the next task */
  'buttons.previous.tooltip': 'ไปยังงานก่อนหน้า',

  /** Text for the remove task dialog asking for confirmation of deletion */
  'dialog.remove-task.body': 'คุณแน่ใจหรือไม่ว่าต้องการลบงานนี้?',
  /** Text for the remove task dialog clarifying that deletion is permanent */
  'dialog.remove-task.body2': 'เมื่อลบแล้วจะไม่สามารถกู้คืนได้',
  /** The label for the cancel button on the remove task dialog */
  'dialog.remove-task.buttons.cancel.text': 'ยกเลิก',
  /** The label for the confirmation button on the remove task dialog */
  'dialog.remove-task.buttons.confirm.text': 'ลบ',
  /** The title for the remove task dialog */
  'dialog.remove-task.title': 'ลบงาน',

  /** The text used as a placeholder for the footer action in a document with multiple tasks */
  'document.footer.open-tasks.placeholder_other': 'เปิดงาน',
  /** The label used in the button in the footer action in a document with multiple tasks */
  'document.footer.open-tasks.text_other': '{{count}} งานที่เปิดอยู่',

  'empty-state.list.assigned.heading': 'คุณยังไม่ได้รับมอบหมายงานใดๆ',
  'empty-state.list.assigned.text': 'เมื่อคุณได้รับมอบหมายงาน พวกเขาจะปรากฏที่นี่',
  'empty-state.list.create-new': 'สร้างงานใหม่',
  'empty-state.list.document.heading': 'เอกสารนี้ยังไม่มีงานใดๆ',
  'empty-state.list.document.text': 'เมื่อเอกสารมีงานที่เชื่อมต่อกัน พวกเขาจะถูกแสดงที่นี่',
  'empty-state.list.subscribed.heading': 'คุณยังไม่ได้สมัครรับข้อมูลงานใดๆ',
  'empty-state.list.subscribed.text':
    'เมื่อคุณสร้าง แก้ไข หรือแสดงความคิดเห็นเกี่ยวกับงาน คุณจะถูกสมัครรับข้อมูลโดยอัตโนมัติ',
  'empty-state.status.list.closed.assigned.heading': 'ไม่มีงานที่เสร็จสมบูรณ์',
  'empty-state.status.list.closed.assigned.text':
    'งานของคุณที่ทำเครื่องหมายว่าเสร็จสิ้นจะปรากฏที่นี่',
  'empty-state.status.list.closed.document.heading': 'ไม่มีงานที่เสร็จสมบูรณ์',
  'empty-state.status.list.closed.subscribed.heading': 'ไม่มีงานที่เสร็จสิ้น',
  'empty-state.status.list.closed.subscribed.text':
    'งานที่คุณติดตามและทำเครื่องหมายว่าเสร็จสิ้นจะปรากฏที่นี่',
  'empty-state.status.list.open.assigned.heading': 'คุณทำงานเสร็จหมดแล้ว',
  'empty-state.status.list.open.assigned.text': 'งานใหม่ที่มอบหมายให้คุณจะปรากฏที่นี่',
  'empty-state.status.list.open.document.heading': 'ไม่มีงานในเอกสารนี้',
  'empty-state.status.list.open.subscribed.heading': 'ไม่มีงานที่ติดตาม',
  'empty-state.status.list.open.subscribed.text': 'งานที่คุณติดตามจะปรากฏที่นี่',

  /** Text used in the assignee input when there is no user assigned */
  'form.input.assignee.no-user-assigned.text': 'ไม่ได้มอบหมาย',
  /** Text used in the assignee input when searching and no users are found */
  'form.input.assignee.search.no-users.text': 'ไม่พบผู้ใช้',
  /** Placeholder text used in the search box in the assignee input */
  'form.input.assignee.search.placeholder': 'เลือกชื่อผู้ใช้',
  /** Text used in the assignee input when user is not authorized */
  'form.input.assignee.unauthorized.text': 'ไม่ได้รับอนุญาต',
  /** Text used in the assignee input when user is not found */
  'form.input.assignee.user-not-found.text': 'ไม่พบผู้ใช้',
  /** The label used in the create more toggle */
  'form.input.create-more.text': 'สร้างเพิ่มเติม',
  /** The label used in the date input to remove the current value */
  'form.input.date.buttons.remove.text': 'ลบออก',
  /** Placeholder text used in the description input */
  'form.input.description.placeholder': 'เพิ่มคำอธิบาย',
  /** The label used in the target input to remove the current value */
  'form.input.target.buttons.remove.text': 'ลบเนื้อหาเป้าหมาย',
  /** The text used in the target input when encountering a schema error */
  'form.input.target.error.schema-not-found': 'ไม่พบสคีมา',
  /** The placeholder text used in the target input for the search component */
  'form.input.target.search.placeholder': 'เลือกเอกสาร',
  /** The placeholder text for the title input */
  'form.input.title.placeholder': 'ชื่องาน',
  /** The status error message presented when the user does not supply a title */
  'form.status.error.title-required': 'ต้องการชื่อ',
  /** The status message upon successful creation of a task */
  'form.status.success': 'สร้างงานเสร็จสิ้น',

  /** The text displayed when no tasks are found */
  'list.empty.text': 'ไม่มีงาน',

  /** The label for the copy link menu item */
  'menuitem.copylink.text': 'คัดลอกลิงก์ไปยังงาน',
  /** The label for the delete task menu item */
  'menuitem.delete.text': 'ลบงาน',
  /** The label for the duplicate task menu item */
  'menuitem.duplicate.text': 'ทำซ้ำงาน',

  /** Fragment used to construct the first entry in the activity log */
  'panel.activity.created-fragment': 'สร้างงานนี้',
  /** The title of the activity section of the task */
  'panel.activity.title': 'กิจกรรม',
  /** The text used in the activity log when unable to find the user */
  'panel.activity.unknown-user': 'ผู้ใช้ไม่ทราบชื่อ',
  /** The tooltip for the close button for the task panel */
  'panel.close.tooltip': 'ปิดแถบด้านข้าง',
  /** The placeholder text for the comment text box */
  'panel.comment.placeholder': 'เพิ่มความคิดเห็น...',
  /** The title used in the task panel when showing the create task form */
  'panel.create.title': 'สร้าง',
  /** The title used in the drafts pulldown */
  'panel.drafts.title': 'ร่าง',
  /** The tooltip for the task navigation component */
  'panel.navigation.tooltip': 'เปิดงาน',
  /** Title of the Tasks panel   */
  'panel.title': 'งาน',

  /** Label for the Assigned Tab */
  'tab.assigned.label': 'ที่ได้รับมอบหมาย',
  /** Label for the Active Document Tab */
  'tab.document.label': 'เอกสารที่กำลังใช้งาน',
  /** Label for the Subscribed Tab */
  'tab.subscribed.label': 'ที่ติดตาม',
})
