import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** The label for the create task action */
  'actions.create.text': '創建新任務',
  /** The label for the open tasks panel action */
  'actions.open.text': '任務',

  /** The label for the button to create a new task */
  'buttons.create.text': '創建任務',
  /** The label for the button to discard changes */
  'buttons.discard.text': '放棄',
  /** The label for the button to open the draft */
  'buttons.draft.text': '草稿',
  /** The label for the button to create a new task */
  'buttons.new.text': '新任務',
  /** The label for the button that will navigate to the next task */
  'buttons.next.tooltip': '前往下一個任務',
  /** The label for the button that will previous to the next task */
  'buttons.previous.tooltip': '前往上一個任務',

  /** Text for the remove task dialog asking for confirmation of deletion */
  'dialog.remove-task.body': '您確定要刪除這個任務嗎？',
  /** Text for the remove task dialog clarifying that deletion is permanent */
  'dialog.remove-task.body2': '一旦刪除，將無法恢復。',
  /** The label for the cancel button on the remove task dialog */
  'dialog.remove-task.buttons.cancel.text': '取消',
  /** The label for the confirmation button on the remove task dialog */
  'dialog.remove-task.buttons.confirm.text': '移除',
  /** The title for the remove task dialog */
  'dialog.remove-task.title': '移除任務',

  /** The text used as a placeholder for the footer action in a document with multiple tasks */
  'document.footer.open-tasks.placeholder_other': '開啟任務',
  /** The label used in the button in the footer action in a document with multiple tasks */
  'document.footer.open-tasks.text_other': '{{count}} 個開放任務',

  'empty-state.list.assigned.heading': '您還沒有被分配任何任務',
  'empty-state.list.assigned.text': '一旦您被分配任務，它們將顯示在這裡',
  'empty-state.list.create-new': '創建新任務',
  'empty-state.list.document.heading': '這個文件還沒有任何任務',
  'empty-state.list.document.text': '一旦文檔有了相關任務，它們將在這裡顯示。',
  'empty-state.list.subscribed.heading': '您還沒有訂閱任何任務',
  'empty-state.list.subscribed.text': '當您創建、修改或評論任務時，您將自動訂閱',
  'empty-state.status.list.closed.assigned.heading': '沒有已完成的任務',
  'empty-state.status.list.closed.assigned.text': '您標記為完成的任務將顯示在這裡',
  'empty-state.status.list.closed.document.heading': '沒有已完成的任務',
  'empty-state.status.list.closed.subscribed.heading': '沒有已完成的任務',
  'empty-state.status.list.closed.subscribed.text': '您訂閱並標記為完成的任務將顯示在這裡',
  'empty-state.status.list.open.assigned.heading': '您已經趕上了',
  'empty-state.status.list.open.assigned.text': '分配給您的新任務將顯示在這裡',
  'empty-state.status.list.open.document.heading': '這個文件上沒有任務',
  'empty-state.status.list.open.subscribed.heading': '沒有訂閱的任務',
  'empty-state.status.list.open.subscribed.text': '您訂閱的任務將顯示在這裡',

  /** Text used in the assignee input when there is no user assigned */
  'form.input.assignee.no-user-assigned.text': '未指派',
  /** Text used in the assignee input when searching and no users are found */
  'form.input.assignee.search.no-users.text': '找不到用戶',
  /** Placeholder text used in the search box in the assignee input */
  'form.input.assignee.search.placeholder': '選擇用戶名',
  /** Text used in the assignee input when user is not authorized */
  'form.input.assignee.unauthorized.text': '未授權',
  /** Text used in the assignee input when user is not found */
  'form.input.assignee.user-not-found.text': '找不到用戶',
  /** The label used in the create more toggle */
  'form.input.create-more.text': '創建更多',
  /** The label used in the date input to remove the current value */
  'form.input.date.buttons.remove.text': '移除',
  /** Placeholder text used in the description input */
  'form.input.description.placeholder': '添加描述',
  /** The label used in the target input to remove the current value */
  'form.input.target.buttons.remove.text': '移除目標內容',
  /** The text used in the target input when encountering a schema error */
  'form.input.target.error.schema-not-found': '找不到架構',
  /** The placeholder text used in the target input for the search component */
  'form.input.target.search.placeholder': '選擇文件',
  /** The placeholder text for the title input */
  'form.input.title.placeholder': '任務標題',
  /** The status error message presented when the user does not supply a title */
  'form.status.error.title-required': '標題是必需的',
  /** The status message upon successful creation of a task */
  'form.status.success': '任務創建成功',

  /** The text displayed when no tasks are found */
  'list.empty.text': '沒有任務',

  /** The label for the copy link menu item */
  'menuitem.copylink.text': '複製任務連結',
  /** The label for the delete task menu item */
  'menuitem.delete.text': '刪除任務',
  /** The label for the duplicate task menu item */
  'menuitem.duplicate.text': '複製任務',

  /** Fragment used to construct the first entry in the activity log */
  'panel.activity.created-fragment': undefined, // 'created this task'
  /** The title of the activity section of the task */
  'panel.activity.title': undefined, // 'Activity'
  /** The text used in the activity log when unable to find the user */
  'panel.activity.unknown-user': undefined, // 'Unknown user'
  /** The tooltip for the close button for the task panel */
  'panel.close.tooltip': undefined, // 'Close sidebar'
  /** The placeholder text for the comment text box */
  'panel.comment.placeholder': undefined, // 'Add a comment...'
  /** The title used in the task panel when showing the create task form */
  'panel.create.title': undefined, // 'Create'
  /** The title used in the drafts pulldown */
  'panel.drafts.title': undefined, // 'Drafts'
  /** The tooltip for the task navigation component */
  'panel.navigation.tooltip': undefined, // 'Open tasks'
  /** Title of the Tasks panel   */
  'panel.title': undefined, // 'Tasks'

  /** Label for the Assigned Tab */
  'tab.assigned.label': undefined, // 'Assigned'
  /** Label for the Active Document Tab */
  'tab.document.label': undefined, // 'Active Document'
  /** Label for the Subscribed Tab */
  'tab.subscribed.label': undefined, // 'Subscribed'
})
