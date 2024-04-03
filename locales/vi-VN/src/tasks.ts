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
  /** The label for the button that will navigate to the next task */
  'buttons.next.tooltip': undefined, // 'Go to next task'
  /** The label for the button that will previous to the next task */
  'buttons.previous.tooltip': undefined, // 'Go to previous task'

  /** Text for the remove task dialog asking for confirmation of deletion */
  'dialog.remove-task.body': undefined, // 'Are you sure you want to delete this task?'
  /** Text for the remove task dialog clarifying that deletion is permanent */
  'dialog.remove-task.body2': undefined, // 'Once deleted, it cannot be restored.'
  /** The label for the cancel button on the remove task dialog */
  'dialog.remove-task.buttons.cancel.text': undefined, // 'Cancel'
  /** The label for the confirmation button on the remove task dialog */
  'dialog.remove-task.buttons.confirm.text': undefined, // 'Remove'
  /** The title for the remove task dialog */
  'dialog.remove-task.title': undefined, // 'Remove task'

  /** The text used as a placeholder for the footer action in a document with multiple tasks */
  'document.footer.open-tasks.placeholder_other': undefined, // 'Open tasks'
  /** The label used in the button in the footer action in a document with multiple tasks */
  'document.footer.open-tasks.text_other': undefined, // '{{count}} open tasks'

  'empty-state.list.assigned.heading': undefined, // 'You haven\'t been assigned any tasks'
  'empty-state.list.assigned.text': undefined, // 'Once you\'re assigned tasks they\'ll show up here'
  'empty-state.list.create-new': undefined, // 'Create new task'
  'empty-state.list.document.heading': undefined, // 'This document doesn\'t have any tasks yet'
  'empty-state.list.document.text': undefined, // 'Once a document has connected tasks, they will be shown here.'
  'empty-state.list.subscribed.heading': undefined, // 'You haven\'t subscribed to any tasks'
  'empty-state.list.subscribed.text': undefined, // 'When you create, modify, or comment on a task you will be subscribed automatically'
  'empty-state.status.list.closed.assigned.heading': undefined, // 'No completed tasks'
  'empty-state.status.list.closed.assigned.text': undefined, // 'Your tasks marked done will show up here'
  'empty-state.status.list.closed.document.heading': undefined, // 'No completed tasks'
  'empty-state.status.list.closed.subscribed.heading': undefined, // 'No completed tasks'
  'empty-state.status.list.closed.subscribed.text': undefined, // 'Tasks you subscribe to marked done will show up here'
  'empty-state.status.list.open.assigned.heading': undefined, // 'You\'re all caught up'
  'empty-state.status.list.open.assigned.text': undefined, // 'New tasks assigned to you will show up here'
  'empty-state.status.list.open.document.heading': undefined, // 'No tasks on this document'
  'empty-state.status.list.open.subscribed.heading': undefined, // 'No subscribed tasks'
  'empty-state.status.list.open.subscribed.text': undefined, // 'Tasks you subscribe to will show up here'

  /** Text used in the assignee input when there is no user assigned */
  'form.input.assignee.no-user-assigned.text': undefined, // 'Not assigned'
  /** Text used in the assignee input when searching and no users are found */
  'form.input.assignee.search.no-users.text': undefined, // 'No users found'
  /** Placeholder text used in the search box in the assignee input */
  'form.input.assignee.search.placeholder': undefined, // 'Select username'
  /** Text used in the assignee input when user is not authorized */
  'form.input.assignee.unauthorized.text': undefined, // 'Unauthorized'
  /** Text used in the assignee input when user is not found */
  'form.input.assignee.user-not-found.text': undefined, // 'User not found'
  /** The label used in the create more toggle */
  'form.input.create-more.text': undefined, // 'Create more'
  /** The label used in the date input to remove the current value */
  'form.input.date.buttons.remove.text': undefined, // 'Remove'
  /** Placeholder text used in the description input */
  'form.input.description.placeholder': undefined, // 'Add description'
  /** The label used in the target input to remove the current value */
  'form.input.target.buttons.remove.text': undefined, // 'Remove target content'
  /** The text used in the target input when encountering a schema error */
  'form.input.target.error.schema-not-found': undefined, // 'Schema not found'
  /** The placeholder text used in the target input for the search component */
  'form.input.target.search.placeholder': undefined, // 'Select document'
  /** The placeholder text for the title input */
  'form.input.title.placeholder': undefined, // 'Task title'
  /** The status error message presented when the user does not supply a title */
  'form.status.error.title-required': undefined, // 'Title is required'
  /** The status message upon successful creation of a task */
  'form.status.success': undefined, // 'Task created'

  /** The text displayed when no tasks are found */
  'list.empty.text': undefined, // 'No tasks'

  /** The label for the copy link menu item */
  'menuitem.copylink.text': undefined, // 'Copy link to task'
  /** The label for the delete task menu item */
  'menuitem.delete.text': undefined, // 'Delete task'
  /** The label for the duplicate task menu item */
  'menuitem.duplicate.text': undefined, // 'Duplicate task'

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
