import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** The label for the create task action */
  'actions.create.text': 'ಹೊಸ ಕಾರ್ಯ ರಚಿಸಿ',
  /** The label for the open tasks panel action */
  'actions.open.text': 'ಕಾರ್ಯಗಳು',

  /** The label for the button to create a new task */
  'buttons.create.text': 'ಕಾರ್ಯ ರಚಿಸಿ',
  /** The label for the button to discard changes */
  'buttons.discard.text': 'ತ್ಯಜಿಸು',
  /** The label for the button to open the draft */
  'buttons.draft.text': 'ಮುಸದ್ದು',
  /** The label for the button to create a new task */
  'buttons.new.text': 'ಹೊಸ ಕಾರ್ಯ',
  /** The label for the button that will navigate to the next task */
  'buttons.next.tooltip': 'ಮುಂದಿನ ಕಾರ್ಯಕ್ಕೆ ಹೋಗಿ',
  /** The label for the button that will previous to the next task */
  'buttons.previous.tooltip': 'ಹಿಂದಿನ ಕಾರ್ಯಕ್ಕೆ ಹೋಗಿ',

  /** Text for the remove task dialog asking for confirmation of deletion */
  'dialog.remove-task.body': 'ನೀವು ಈ ಕಾರ್ಯವನ್ನು ಅಳಿಸಲು ಖಚಿತವಾಗಿದ್ದೀರಾ?',
  /** Text for the remove task dialog clarifying that deletion is permanent */
  'dialog.remove-task.body2': 'ಒಮ್ಮೆ ಅಳಿಸಿದ ನಂತರ, ಅದನ್ನು ಮರುಸ್ಥಾಪಿಸಲು ಸಾಧ್ಯವಿಲ್ಲ.',
  /** The label for the cancel button on the remove task dialog */
  'dialog.remove-task.buttons.cancel.text': 'ರದ್ದುಮಾಡಿ',
  /** The label for the confirmation button on the remove task dialog */
  'dialog.remove-task.buttons.confirm.text': 'ತೆಗೆದುಹಾಕಿ',
  /** The title for the remove task dialog */
  'dialog.remove-task.title': 'ಕಾರ್ಯ ತೆಗೆದುಹಾಕಿ',

  /** The text used as a placeholder for the footer action in a document with a single task */
  'document.footer.open-tasks.placeholder_one': 'ಕಾರ್ಯ ತೆರೆಯಿರಿ',
  /** The text used as a placeholder for the footer action in a document with multiple tasks */
  'document.footer.open-tasks.placeholder_other': 'ಕಾರ್ಯಗಳನ್ನು ತೆರೆಯಿರಿ',
  /** The label used in the button in the footer action in a document with a single task */
  'document.footer.open-tasks.text_one': '{{count}} ತೆರೆದ ಕಾರ್ಯ',
  /** The label used in the button in the footer action in a document with multiple tasks */
  'document.footer.open-tasks.text_other': '{{count}} ತೆರೆದ ಕಾರ್ಯಗಳು',

  'empty-state.list.assigned.heading': 'ನಿಮಗೆ ಯಾವುದೇ ಕಾರ್ಯಗಳು ನಿಯೋಜಿಸಲಾಗಿಲ್ಲ',
  'empty-state.list.assigned.text': 'ನೀವು ಕಾರ್ಯಗಳಿಗೆ ನಿಯೋಜಿಸಲ್ಪಟ್ಟಾಗ ಅವು ಇಲ್ಲಿ ತೋರಿಸಲ್ಪಡುತ್ತವೆ',
  'empty-state.list.create-new': 'ಹೊಸ ಕಾರ್ಯ ರಚಿಸಿ',
  'empty-state.list.document.heading': 'ಈ ದಾಖಲೆಗೆ ಇನ್ನೂ ಯಾವುದೇ ಕಾರ್ಯಗಳು ಇಲ್ಲ',
  'empty-state.list.document.text':
    'ಒಂದು ದಾಖಲೆಗೆ ಸಂಬಂಧಿಸಿದ ಕಾರ್ಯಗಳು ಇದ್ದಾಗ, ಅವು ಇಲ್ಲಿ ತೋರಿಸಲ್ಪಡುತ್ತವೆ.',
  'empty-state.list.subscribed.heading': 'ನೀವು ಯಾವುದೇ ಕಾರ್ಯಗಳಿಗೆ ಚಂದಾದಾರರಾಗಿಲ್ಲ',
  'empty-state.list.subscribed.text':
    'ನೀವು ಕಾರ್ಯ ರಚಿಸಿದಾಗ, ಬದಲಾವಣೆ ಮಾಡಿದಾಗ ಅಥವಾ ಕಾರ್ಯದ ಮೇಲೆ ಪ್ರತಿಕ್ರಿಯಿಸಿದಾಗ ನೀವು ಸ್ವಯಂ ಚಂದಾದಾರರಾಗುತ್ತೀರಿ',
  'empty-state.status.list.closed.assigned.heading': 'ಪೂರ್ಣಗೊಂಡ ಕಾರ್ಯಗಳು ಇಲ್ಲ',
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
  'menuitem.delete.text': 'ಕಾರ್ಯವನ್ನು ಅಳಿಸು',
  /** The label for the duplicate task menu item */
  'menuitem.duplicate.text': 'ಕಾರ್ಯವನ್ನು ನಕಲಿಸು',

  /** Fragment used to construct the first entry in the activity log */
  'panel.activity.created-fragment': 'ಈ ಕಾರ್ಯವನ್ನು ರಚಿಸಿದೆ',
  /** The title of the activity section of the task */
  'panel.activity.title': 'ಚಟುವಟಿಕೆ',
  /** The text used in the activity log when unable to find the user */
  'panel.activity.unknown-user': 'ಅಜ್ಞಾತ ಬಳಕೆದಾರ',
  /** The tooltip for the close button for the task panel */
  'panel.close.tooltip': 'ಪಾರ್ಶ್ವಪಟ್ಟಿಯನ್ನು ಮುಚ್ಚು',
  /** The placeholder text for the comment text box */
  'panel.comment.placeholder': 'ಪ್ರತಿಕ್ರಿಯೆ ಸೇರಿಸಿ...',
  /** The title used in the task panel when showing the create task form */
  'panel.create.title': 'ರಚಿಸು',
  /** The title used in the drafts pulldown */
  'panel.drafts.title': 'ಕರಡುಗಳು',
  /** The tooltip for the task navigation component */
  'panel.navigation.tooltip': 'ಕಾರ್ಯಗಳನ್ನು ತೆರೆ',
  /** Title of the Tasks panel   */
  'panel.title': 'ಕಾರ್ಯಗಳು',

  /** Label for the Assigned Tab */
  'tab.assigned.label': 'ನಿಯೋಜಿಸಲಾಗಿದೆ',
  /** Label for the Active Document Tab */
  'tab.document.label': 'ಸಕ್ರಿಯ ದಾಖಲೆ',
  /** Label for the Subscribed Tab */
  'tab.subscribed.label': 'ಚಂದಾದಾರಿಕೆ',
})
