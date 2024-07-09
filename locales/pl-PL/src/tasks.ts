import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** The label for the create task action */
  'actions.create.text': undefined, // 'Create new task'
  /** The label for the open tasks panel action */
  'actions.open.text': undefined, // 'Tasks'

  /** The label for the button to create a new task */
  'buttons.create.text': undefined, // 'Create Task'
  /** The label for the button to discard changes */
  'buttons.discard.text': undefined, // 'Discard'
  /** The label for the button to open the draft */
  'buttons.draft.text': undefined, // 'Draft'
  /** The label for the button to create a new task */
  'buttons.new.text': undefined, // 'New task'
  /** The text for tooltip in the create a new task button when mode is upsell */
  'buttons.new.upsell-tooltip': undefined, // 'Upgrade to create tasks'
  /** The label for the button that will navigate to the next task */
  'buttons.next.tooltip': undefined, // 'Go to next task'
  /** The label for the button that will previous to the next task */
  'buttons.previous.tooltip': undefined, // 'Go to previous task'

  /** Text for the remove task dialog asking for confirmation of deletion */
  'dialog.remove-task.body': undefined, // 'Once deleted, a task cannot be recovered.'
  /** The label for the cancel button on the remove task dialog */
  'dialog.remove-task.buttons.cancel.text': undefined, // 'Cancel'
  /** The label for the confirmation button on the remove task dialog */
  'dialog.remove-task.buttons.confirm.text': undefined, // 'Delete'
  /** The title for the remove task dialog */
  'dialog.remove-task.title': undefined, // 'Delete this task?'

  /** The text used as a placeholder for the footer action in a document with a single task */
  'document.footer.open-tasks.placeholder_one': undefined, // 'Open task'
  /** The label used in the button in the footer action in a document with a single task */
  'document.footer.open-tasks.text_one': undefined, // '{{count}} open task'

  /** The heading in the tasks sidebar, in the assigned tab, when the user hasn't been assigned to any task*/
  'empty-state.list.assigned.heading': undefined, // 'You haven\'t been assigned any tasks'
  /** The text in the tasks sidebar, in the assigned tab, when the user hasn't been assigned to any task*/
  'empty-state.list.assigned.text': undefined, // 'Once you\'re assigned tasks they\'ll show up here'
  /** The text in the tasks sidebar button any of the empty states is rendered*/
  'empty-state.list.create-new': undefined, // 'Create new task'
  /** The heading in the tasks sidebar, in the document tab, when the document doesn't have any task*/
  'empty-state.list.document.heading': undefined, // 'This document doesn\'t have any tasks yet'
  /** The text in the tasks sidebar, in the document tab, when the document doesn't have any task*/
  'empty-state.list.document.text': undefined, // 'Once a document has connected tasks, they will be shown here.'
  /** The heading in the tasks sidebar, when viewing the document tab, but there is not an active document*/
  'empty-state.list.no-active-document.heading': undefined, // 'Open a document to see it\'s task'
  /** The text in the tasks sidebar, when viewing the document tab, but there is not an active document*/
  'empty-state.list.no-active-document.text': undefined, // 'Tasks on your active document will be shown here.'
  /** The heading in the tasks sidebar, in the subscriber tab, when the user is not subscribed to any task*/
  'empty-state.list.subscribed.heading': undefined, // 'You haven\'t subscribed to any tasks'
  /** The text in the tasks sidebar, in the subscriber tab, when the user is not subscribed to any task*/
  'empty-state.list.subscribed.text': undefined, // 'When you create, modify, or comment on a task you will be subscribed automatically'
  /** The heading in the tasks sidebar, in the assigned tab, under the closed details, when it's empty.*/
  'empty-state.status.list.closed.assigned.heading': undefined, // 'No completed tasks'
  /** The text in the tasks sidebar, in the assigned tab, under the closed details, when it's empty.*/
  'empty-state.status.list.closed.assigned.text': undefined, // 'Your tasks marked done will show up here'
  /** The heading in the tasks sidebar, in the document tab, under the closed details, when it's empty.*/
  'empty-state.status.list.closed.document.heading': undefined, // 'No completed tasks'
  /** The heading in the tasks sidebar, in the subscribed tab, under the closed details, when it's empty.*/
  'empty-state.status.list.closed.subscribed.heading': undefined, // 'No completed tasks'
  /** The text in the tasks sidebar, in the subscribed tab, under the closed details, when it's empty.*/
  'empty-state.status.list.closed.subscribed.text': undefined, // 'Tasks you subscribe to marked done will show up here'
  /** The heading in the tasks sidebar, in the assigned tab, under the open details, when it's empty.*/
  'empty-state.status.list.open.assigned.heading': undefined, // 'You\'re all caught up'
  /** The text in the tasks sidebar, in the assigned tab, under the open details, when it's empty.*/
  'empty-state.status.list.open.assigned.text': undefined, // 'New tasks assigned to you will show up here'
  /** The heading in the tasks sidebar, in the document tab, under the open details, when it's empty.*/
  'empty-state.status.list.open.document.heading': undefined, // 'No tasks on this document'
  /** The heading in the tasks sidebar, in the subscribed tab, under the open details, when it's empty.*/
  'empty-state.status.list.open.subscribed.heading': undefined, // 'No subscribed tasks'
  /** The text in the tasks sidebar, in the subscribed tab, under the open details, when it's empty.*/
  'empty-state.status.list.open.subscribed.text': undefined, // 'Tasks you subscribe to will show up here'

  /** Text used in the assignee input when there is no user assigned */
  'form.input.assignee.no-user-assigned.text': undefined, // 'Unassigned'
  /** Text used in the assignee input tooltip when there is no user assigned */
  'form.input.assignee.no-user-assigned.tooltip': undefined, // 'Set assignee'
  /** Text used in the assignee input when searching and no users are found */
  'form.input.assignee.search.no-users.text': undefined, // 'No users found'
  /** Placeholder text used in the search box in the assignee input */
  'form.input.assignee.search.placeholder': undefined, // 'Select assignee'
  /** Text used in the assignee input when user is not authorized */
  'form.input.assignee.unauthorized.text': undefined, // 'Unauthorized'
  /** Text used in the assignee input tooltip when there is no user assigned */
  'form.input.assignee.user-assigned.tooltip': undefined, // 'Change assignee'
  /** Text used in the assignee input when user is not found */
  'form.input.assignee.user-not-found.text': undefined, // 'User not found'
  /** The label used in the create more toggle */
  'form.input.create-more.text': undefined, // 'Create more'
  /** The label used in the date input button tooltip when it's empty */
  'form.input.date.buttons.empty.tooltip': undefined, // 'Set due date'
  /** The label used in the date input to remove the current value */
  'form.input.date.buttons.remove.text': undefined, // 'Remove'
  /** The label used in the date input button tooltip when it has value */
  'form.input.date.buttons.tooltip': undefined, // 'Change due date'
  /** Placeholder text used in the description input */
  'form.input.description.placeholder': undefined, // 'Add description'
  /**  Text used in the tooltip in the status change button  */
  'form.input.status.button.tooltip': undefined, // 'Change status'
  /** The label used in the target input to remove the current value */
  'form.input.target.buttons.remove.text': undefined, // 'Remove target content'
  /** The text used in the target input when encountering a schema error */
  'form.input.target.error.schema-not-found': undefined, // 'Schema not found'
  /** The placeholder text used in the target input for the search component */
  'form.input.target.search.placeholder': undefined, // 'Select target document'
  /** The placeholder text for the title input */
  'form.input.title.placeholder': undefined, // 'Task title'
  /** The status error message presented when the user does not supply a title */
  'form.status.error.title-required': undefined, // 'Title is required'
  /** The status message upon successful creation of a task */
  'form.status.success': undefined, // 'Task created'

  /** The text displayed when no tasks are found */
  'list.empty.text': undefined, // 'No tasks'
  /** The text displayed at the bottom of the tasks list inviting users provide feedback */
  'list.feedback.text': undefined, // 'Help us improve, <Link>share feedback on Tasks</Link> '

  /** The label for the copy link menu item */
  'menuitem.copylink.text': undefined, // 'Copy link to task'
  /** The label for the delete task menu item */
  'menuitem.delete.text': undefined, // 'Delete task'
  /** The label for the duplicate task menu item */
  'menuitem.duplicate.text': undefined, // 'Duplicate task'
  /** The text for the duplicate task menu item tooltip when mode is upsell */
  'menuitem.duplicate.upsell-tooltip': undefined, // 'Upgrade to duplicate tasks'

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
  /** The placeholder text for the comment text box when mode is upsell */
  'panel.comment.placeholder.upsell': undefined, // 'Upgrade to comment on tasks'
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
