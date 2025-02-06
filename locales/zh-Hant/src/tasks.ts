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
  /** The text for tooltip in the create a new task button when mode is upsell */
  'buttons.new.upsell-tooltip': '升級以創建任務',
  /** The label for the button that will navigate to the next task */
  'buttons.next.tooltip': '前往下一個任務',
  /** The label for the button that will previous to the next task */
  'buttons.previous.tooltip': '前往上一個任務',

  /** Text for the remove task dialog asking for confirmation of deletion */
  'dialog.remove-task.body': '一旦刪除，任務將無法恢復。',
  /** The label for the cancel button on the remove task dialog */
  'dialog.remove-task.buttons.cancel.text': '取消',
  /** The label for the confirmation button on the remove task dialog */
  'dialog.remove-task.buttons.confirm.text': '刪除',
  /** The title for the remove task dialog */
  'dialog.remove-task.title': '刪除這個任務？',

  /** The text used as a placeholder for the footer action in a document with multiple tasks */
  'document.footer.open-tasks.placeholder_other': '開啟任務',
  /** The label used in the button in the footer action in a document with multiple tasks */
  'document.footer.open-tasks.text_other': '{{count}} 個開放任務',

  /** The heading in the tasks sidebar, in the assigned tab, when the user hasn't been assigned to any task*/
  'empty-state.list.assigned.heading': '你還沒有被分配任何任務',
  /** The text in the tasks sidebar, in the assigned tab, when the user hasn't been assigned to any task*/
  'empty-state.list.assigned.text': '一旦你被分配任務，它們將顯示在這裡',
  /** The text in the tasks sidebar button any of the empty states is rendered*/
  'empty-state.list.create-new': '創建新任務',
  /** The heading in the tasks sidebar, in the document tab, when the document doesn't have any task*/
  'empty-state.list.document.heading': '這個文件還沒有任何任務',
  /** The text in the tasks sidebar, in the document tab, when the document doesn't have any task*/
  'empty-state.list.document.text': '一旦文件有了相關任務，它們將會在這裡顯示。',
  /** The heading in the tasks sidebar, when viewing the document tab, but there is not an active document*/
  'empty-state.list.no-active-document.heading': '開啟文件以查看它的任務',
  /** The text in the tasks sidebar, when viewing the document tab, but there is not an active document*/
  'empty-state.list.no-active-document.text': '你活躍文件上的任務將會在這裡顯示。',
  /** The heading in the tasks sidebar, in the subscriber tab, when the user is not subscribed to any task*/
  'empty-state.list.subscribed.heading': '你還沒有訂閱任何任務',
  /** The text in the tasks sidebar, in the subscriber tab, when the user is not subscribed to any task*/
  'empty-state.list.subscribed.text': '當你創建、修改或評論任務時，你將自動訂閱',
  /** The heading in the tasks sidebar, in the assigned tab, under the closed details, when it's empty.*/
  'empty-state.status.list.closed.assigned.heading': '沒有完成的任務',
  /** The text in the tasks sidebar, in the assigned tab, under the closed details, when it's empty.*/
  'empty-state.status.list.closed.assigned.text': '您標記為完成的任務將顯示在這裡',
  /** The heading in the tasks sidebar, in the document tab, under the closed details, when it's empty.*/
  'empty-state.status.list.closed.document.heading': '沒有已完成的任務',
  /** The heading in the tasks sidebar, in the subscribed tab, under the closed details, when it's empty.*/
  'empty-state.status.list.closed.subscribed.heading': '沒有已完成的任務',
  /** The text in the tasks sidebar, in the subscribed tab, under the closed details, when it's empty.*/
  'empty-state.status.list.closed.subscribed.text': '您訂閱並標記完成的任務將顯示在這裡',
  /** The heading in the tasks sidebar, in the assigned tab, under the open details, when it's empty.*/
  'empty-state.status.list.open.assigned.heading': '您已經處理完所有事項',
  /** The text in the tasks sidebar, in the assigned tab, under the open details, when it's empty.*/
  'empty-state.status.list.open.assigned.text': '分配給您的新任務將顯示在這裡',
  /** The heading in the tasks sidebar, in the document tab, under the open details, when it's empty.*/
  'empty-state.status.list.open.document.heading': '這個文件上沒有任務',
  /** The heading in the tasks sidebar, in the subscribed tab, under the open details, when it's empty.*/
  'empty-state.status.list.open.subscribed.heading': '沒有訂閱的任務',
  /** The text in the tasks sidebar, in the subscribed tab, under the open details, when it's empty.*/
  'empty-state.status.list.open.subscribed.text': '您訂閱的任務將顯示在這裡',

  /** Text used in the assignee input when there is no user assigned */
  'form.input.assignee.no-user-assigned.text': '未分配',
  /** Text used in the assignee input tooltip when there is no user assigned */
  'form.input.assignee.no-user-assigned.tooltip': '設定分配人',
  /** Text used in the assignee input when searching and no users are found */
  'form.input.assignee.search.no-users.text': '找不到用戶',
  /** Placeholder text used in the search box in the assignee input */
  'form.input.assignee.search.placeholder': '選擇分配人',
  /** Text used in the assignee input when user is not authorized */
  'form.input.assignee.unauthorized.text': '未授權',
  /** Text used in the assignee input tooltip when there is no user assigned */
  'form.input.assignee.user-assigned.tooltip': '更改分配人',
  /** Text used in the assignee input when user is not found */
  'form.input.assignee.user-not-found.text': '找不到用戶',
  /** The label used in the create more toggle */
  'form.input.create-more.text': '創建更多',
  /** The label used in the date input button tooltip when it's empty */
  'form.input.date.buttons.empty.tooltip': '設定截止日期',
  /** The label used in the date input to remove the current value */
  'form.input.date.buttons.remove.text': '移除',
  /** The label used in the date input button tooltip when it has value */
  'form.input.date.buttons.tooltip': '更改截止日期',
  /** Placeholder text used in the description input */
  'form.input.description.placeholder': '添加描述',
  /**  Text used in the tooltip in the status change button  */
  'form.input.status.button.tooltip': '更改狀態',
  /** The label used in the target input to remove the current value */
  'form.input.target.buttons.remove.text': '移除目標內容',
  /** The text used in the target input when encountering a schema error */
  'form.input.target.error.schema-not-found': '找不到架構',
  /** The placeholder text used in the target input for the search component */
  'form.input.target.search.placeholder': '選擇目標文件',
  /** The placeholder text for the title input */
  'form.input.title.placeholder': '任務標題',
  /** The status error message presented when the user does not supply a title */
  'form.status.error.title-required': '標題為必填',
  /** The status message upon successful creation of a task */
  'form.status.success': '任務已創建',

  /** The text displayed when no tasks are found */
  'list.empty.text': '沒有任務',
  /** The text displayed at the bottom of the tasks list inviting users provide feedback */
  'list.feedback.text': '幫助我們改進，<Link>分享關於任務的反饋</Link>',

  /** The label for the copy link menu item */
  'menuitem.copylink.text': '複製任務連結',
  /** The label for the delete task menu item */
  'menuitem.delete.text': '刪除任務',
  /** The label for the duplicate task menu item */
  'menuitem.duplicate.text': '複製任務',
  /** The text for the duplicate task menu item tooltip when mode is upsell */
  'menuitem.duplicate.upsell-tooltip': '升級以複製任務',

  /** Fragment used to construct the first entry in the activity log */
  'panel.activity.created-fragment': '創建了這個任務',
  /** The title of the activity section of the task */
  'panel.activity.title': '活動',
  /** The text used in the activity log when unable to find the user */
  'panel.activity.unknown-user': '未知用戶',
  /** The tooltip for the close button for the task panel */
  'panel.close.tooltip': '關閉側邊欄',
  /** The placeholder text for the comment text box */
  'panel.comment.placeholder': '添加評論...',
  /** The placeholder text for the comment text box when mode is upsell */
  'panel.comment.placeholder.upsell': '升級以對任務評論',
  /** The title used in the task panel when showing the create task form */
  'panel.create.title': '創建',
  /** The title used in the drafts pulldown */
  'panel.drafts.title': '草稿',
  /** The tooltip for the task navigation component */
  'panel.navigation.tooltip': '打開任務',
  /** Title of the Tasks panel   */
  'panel.title': '任務',

  /** Label for the Assigned Tab */
  'tab.assigned.label': '已分配',
  /** Label for the Active Document Tab */
  'tab.document.label': '活動文件',
  /** Label for the Subscribed Tab */
  'tab.subscribed.label': '已訂閱',

  /** Tooltip for the tasks navbar icon */
  'toolbar.tooltip': '任務',
})
