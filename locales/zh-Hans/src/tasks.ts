import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** The label for the create task action */
  'actions.create.text': '创建新任务',
  /** The label for the open tasks panel action */
  'actions.open.text': '任务',

  /** The label for the button to create a new task */
  'buttons.create.text': '创建任务',
  /** The label for the button to discard changes */
  'buttons.discard.text': '放弃',
  /** The label for the button to open the draft */
  'buttons.draft.text': '草稿',
  /** The label for the button to create a new task */
  'buttons.new.text': '新任务',
  /** The label for the button that will navigate to the next task */
  'buttons.next.tooltip': '前往下一个任务',
  /** The label for the button that will previous to the next task */
  'buttons.previous.tooltip': '前往上一个任务',

  /** Text for the remove task dialog asking for confirmation of deletion */
  'dialog.remove-task.body': '您确定要删除这个任务吗？',
  /** Text for the remove task dialog clarifying that deletion is permanent */
  'dialog.remove-task.body2': '一旦删除，将无法恢复。',
  /** The label for the cancel button on the remove task dialog */
  'dialog.remove-task.buttons.cancel.text': '取消',
  /** The label for the confirmation button on the remove task dialog */
  'dialog.remove-task.buttons.confirm.text': '移除',
  /** The title for the remove task dialog */
  'dialog.remove-task.title': '移除任务',

  /** The text used as a placeholder for the footer action in a document with multiple tasks */
  'document.footer.open-tasks.placeholder_other': '打开任务',
  /** The label used in the button in the footer action in a document with multiple tasks */
  'document.footer.open-tasks.text_other': '{{count}}个未完成的任务',

  'empty-state.list.assigned.heading': '您还没有被分配任何任务',
  'empty-state.list.assigned.text': '一旦您被分配了任务，它们将显示在这里',
  'empty-state.list.create-new': '创建新任务',
  'empty-state.list.document.heading': '这个文档还没有任何任务',
  'empty-state.list.document.text': '一旦文档连接了任务，它们将会在这里显示。',
  'empty-state.list.subscribed.heading': '您还没有订阅任何任务',
  'empty-state.list.subscribed.text': '当您创建、修改或评论任务时，您将自动订阅',
  'empty-state.status.list.closed.assigned.heading': '没有已完成的任务',
  'empty-state.status.list.closed.assigned.text': '您标记为完成的任务将显示在这里',
  'empty-state.status.list.closed.document.heading': '没有已完成的任务',
  'empty-state.status.list.closed.subscribed.heading': '没有已完成的任务',
  'empty-state.status.list.closed.subscribed.text': '您订阅并标记为已完成的任务将显示在这里',
  'empty-state.status.list.open.assigned.heading': '您已经处理完所有事项',
  'empty-state.status.list.open.assigned.text': '分配给您的新任务将显示在这里',
  'empty-state.status.list.open.document.heading': '此文档上没有任务',
  'empty-state.status.list.open.subscribed.heading': '没有订阅的任务',
  'empty-state.status.list.open.subscribed.text': '您订阅的任务将显示在这里',

  /** Text used in the assignee input when there is no user assigned */
  'form.input.assignee.no-user-assigned.text': '未分配',
  /** Text used in the assignee input when searching and no users are found */
  'form.input.assignee.search.no-users.text': '未找到用户',
  /** Placeholder text used in the search box in the assignee input */
  'form.input.assignee.search.placeholder': '选择用户名',
  /** Text used in the assignee input when user is not authorized */
  'form.input.assignee.unauthorized.text': '未授权',
  /** Text used in the assignee input when user is not found */
  'form.input.assignee.user-not-found.text': '未找到用户',
  /** The label used in the create more toggle */
  'form.input.create-more.text': '创建更多',
  /** The label used in the date input to remove the current value */
  'form.input.date.buttons.remove.text': '移除',
  /** Placeholder text used in the description input */
  'form.input.description.placeholder': '添加描述',
  /** The label used in the target input to remove the current value */
  'form.input.target.buttons.remove.text': '移除目标内容',
  /** The text used in the target input when encountering a schema error */
  'form.input.target.error.schema-not-found': '未找到架构',
  /** The placeholder text used in the target input for the search component */
  'form.input.target.search.placeholder': '选择文档',
  /** The placeholder text for the title input */
  'form.input.title.placeholder': '任务标题',
  /** The status error message presented when the user does not supply a title */
  'form.status.error.title-required': '标题是必需的',
  /** The status message upon successful creation of a task */
  'form.status.success': '任务已创建',

  /** The text displayed when no tasks are found */
  'list.empty.text': '没有任务',

  /** The label for the copy link menu item */
  'menuitem.copylink.text': '复制任务链接',
  /** The label for the delete task menu item */
  'menuitem.delete.text': '删除任务',
  /** The label for the duplicate task menu item */
  'menuitem.duplicate.text': '复制任务',

  /** Fragment used to construct the first entry in the activity log */
  'panel.activity.created-fragment': '创建了这个任务',
  /** The title of the activity section of the task */
  'panel.activity.title': '活动',
  /** The text used in the activity log when unable to find the user */
  'panel.activity.unknown-user': '未知用户',
  /** The tooltip for the close button for the task panel */
  'panel.close.tooltip': '关闭侧边栏',
  /** The placeholder text for the comment text box */
  'panel.comment.placeholder': '添加评论...',
  /** The title used in the task panel when showing the create task form */
  'panel.create.title': '创建',
  /** The title used in the drafts pulldown */
  'panel.drafts.title': '草稿',
  /** The tooltip for the task navigation component */
  'panel.navigation.tooltip': '打开任务',
  /** Title of the Tasks panel   */
  'panel.title': '任务',

  /** Label for the Assigned Tab */
  'tab.assigned.label': '已分配',
  /** Label for the Active Document Tab */
  'tab.document.label': '活动文档',
  /** Label for the Subscribed Tab */
  'tab.subscribed.label': '已订阅',
})
