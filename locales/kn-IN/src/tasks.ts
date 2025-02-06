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
  'buttons.draft.text': 'ಮುಸದ್ದಿ',
  /** The label for the button to create a new task */
  'buttons.new.text': 'ಹೊಸ ಕಾರ್ಯ',
  /** The text for tooltip in the create a new task button when mode is upsell */
  'buttons.new.upsell-tooltip': 'ಕಾರ್ಯಗಳನ್ನು ರಚಿಸಲು ಅಪ್‌ಗ್ರೇಡ್ ಮಾಡಿ',
  /** The label for the button that will navigate to the next task */
  'buttons.next.tooltip': 'ಮುಂದಿನ ಕಾರ್ಯಕ್ಕೆ ಹೋಗಿ',
  /** The label for the button that will previous to the next task */
  'buttons.previous.tooltip': 'ಹಿಂದಿನ ಕಾರ್ಯಕ್ಕೆ ಹೋಗಿ',

  /** Text for the remove task dialog asking for confirmation of deletion */
  'dialog.remove-task.body': 'ಒಮ್ಮೆ ಅಳಿಸಿದ ನಂತರ, ಕಾರ್ಯವನ್ನು ಮರುಪಡೆಯಲು ಸಾಧ್ಯವಿಲ್ಲ.',
  /** The label for the cancel button on the remove task dialog */
  'dialog.remove-task.buttons.cancel.text': 'ರದ್ದುಮಾಡಿ',
  /** The label for the confirmation button on the remove task dialog */
  'dialog.remove-task.buttons.confirm.text': 'ಅಳಿಸಿ',
  /** The title for the remove task dialog */
  'dialog.remove-task.title': 'ಈ ಕಾರ್ಯವನ್ನು ಅಳಿಸಬೇಕೆ?',

  /** The text used as a placeholder for the footer action in a document with a single task */
  'document.footer.open-tasks.placeholder_one': 'ಕಾರ್ಯ ತೆರೆಯಿರಿ',
  /** The text used as a placeholder for the footer action in a document with multiple tasks */
  'document.footer.open-tasks.placeholder_other': 'ಕಾರ್ಯಗಳನ್ನು ತೆರೆಯಿರಿ',
  /** The label used in the button in the footer action in a document with a single task */
  'document.footer.open-tasks.text_one': '{{count}} ತೆರೆದ ಕಾರ್ಯ',
  /** The label used in the button in the footer action in a document with multiple tasks */
  'document.footer.open-tasks.text_other': '{{count}} ತೆರೆದ ಕಾರ್ಯಗಳು',

  /** The heading in the tasks sidebar, in the assigned tab, when the user hasn't been assigned to any task*/
  'empty-state.list.assigned.heading': 'ನಿಮಗೆ ಯಾವುದೇ ಕಾರ್ಯಗಳು ನಿಯೋಜಿಸಲಾಗಿಲ್ಲ',
  /** The text in the tasks sidebar, in the assigned tab, when the user hasn't been assigned to any task*/
  'empty-state.list.assigned.text': 'ನಿಮಗೆ ಕಾರ್ಯಗಳು ನಿಯೋಜಿಸಲಾದಾಗ ಅವು ಇಲ್ಲಿ ತೋರಿಸಲಾಗುವುದು',
  /** The text in the tasks sidebar button any of the empty states is rendered*/
  'empty-state.list.create-new': 'ಹೊಸ ಕಾರ್ಯ ರಚಿಸಿ',
  /** The heading in the tasks sidebar, in the document tab, when the document doesn't have any task*/
  'empty-state.list.document.heading': 'ಈ ದಾಖಲೆಗೆ ಇನ್ನೂ ಯಾವುದೇ ಕಾರ್ಯಗಳು ಇಲ್ಲ',
  /** The text in the tasks sidebar, in the document tab, when the document doesn't have any task*/
  'empty-state.list.document.text':
    'ಒಮ್ಮೆ ದಾಖಲೆಗೆ ಸಂಬಂಧಿಸಿದ ಕಾರ್ಯಗಳು ಇದ್ದರೆ, ಅವು ಇಲ್ಲಿ ತೋರಿಸಲಾಗುವುದು.',
  /** The heading in the tasks sidebar, when viewing the document tab, but there is not an active document*/
  'empty-state.list.no-active-document.heading': 'ಅದರ ಕಾರ್ಯವನ್ನು ನೋಡಲು ದಾಖಲೆಯನ್ನು ತೆರೆಯಿರಿ',
  /** The text in the tasks sidebar, when viewing the document tab, but there is not an active document*/
  'empty-state.list.no-active-document.text': 'ನಿಮ್ಮ ಸಕ್ರಿಯ ದಾಖಲೆಯ ಕಾರ್ಯಗಳು ಇಲ್ಲಿ ತೋರಿಸಲಾಗುವುದು.',
  /** The heading in the tasks sidebar, in the subscriber tab, when the user is not subscribed to any task*/
  'empty-state.list.subscribed.heading': 'ನೀವು ಯಾವುದೇ ಕಾರ್ಯಗಳಿಗೆ ಚಂದಾದಾರರಾಗಿಲ್ಲ',
  /** The text in the tasks sidebar, in the subscriber tab, when the user is not subscribed to any task*/
  'empty-state.list.subscribed.text':
    'ನೀವು ಕೆಲಸವನ್ನು ರಚಿಸಿದಾಗ, ಬದಲಾಯಿಸಿದಾಗ ಅಥವಾ ಕಾಮೆಂಟ್ ಮಾಡಿದಾಗ ನೀವು ಸ್ವಯಂಚಾಲಿತವಾಗಿ ಚಂದಾದಾರರಾಗುತ್ತೀರಿ',
  /** The heading in the tasks sidebar, in the assigned tab, under the closed details, when it's empty.*/
  'empty-state.status.list.closed.assigned.heading': 'ಮುಗಿದ ಕೆಲಸಗಳು ಯಾವುದೂ ಇಲ್ಲ',
  /** The text in the tasks sidebar, in the assigned tab, under the closed details, when it's empty.*/
  'empty-state.status.list.closed.assigned.text':
    'ನೀವು ಮುಗಿಸಿದ ಎಂದು ಗುರುತಿಸಿದ ನಿಮ್ಮ ಕೆಲಸಗಳು ಇಲ್ಲಿ ತೋರಿಸಲಾಗುವುದು',
  /** The heading in the tasks sidebar, in the document tab, under the closed details, when it's empty.*/
  'empty-state.status.list.closed.document.heading': 'ಮುಗಿದ ಕೆಲಸಗಳು ಯಾವುದೂ ಇಲ್ಲ',
  /** The heading in the tasks sidebar, in the subscribed tab, under the closed details, when it's empty.*/
  'empty-state.status.list.closed.subscribed.heading': 'ಮುಗಿದ ಕೆಲಸಗಳು ಯಾವುದೂ ಇಲ್ಲ',
  /** The text in the tasks sidebar, in the subscribed tab, under the closed details, when it's empty.*/
  'empty-state.status.list.closed.subscribed.text':
    'ನೀವು ಚಂದಾದಾರರಾಗಿರುವ ಮತ್ತು ಮುಗಿಸಿದ ಎಂದು ಗುರುತಿಸಿದ ಕೆಲಸಗಳು ಇಲ್ಲಿ ತೋರಿಸಲಾಗುವುದು',
  /** The heading in the tasks sidebar, in the assigned tab, under the open details, when it's empty.*/
  'empty-state.status.list.open.assigned.heading': 'ನೀವು ಎಲ್ಲಾ ಕೆಲಸಗಳನ್ನು ಮುಗಿಸಿದ್ದೀರಿ',
  /** The text in the tasks sidebar, in the assigned tab, under the open details, when it's empty.*/
  'empty-state.status.list.open.assigned.text':
    'ನಿಮಗೆ ಹೊಸದಾಗಿ ನಿಯೋಜಿಸಲಾದ ಕೆಲಸಗಳು ಇಲ್ಲಿ ತೋರಿಸಲಾಗುವುದು',
  /** The heading in the tasks sidebar, in the document tab, under the open details, when it's empty.*/
  'empty-state.status.list.open.document.heading': 'ಈ ದಾಖಲೆಯ ಮೇಲೆ ಯಾವುದೇ ಕೆಲಸಗಳು ಇಲ್ಲ',
  /** The heading in the tasks sidebar, in the subscribed tab, under the open details, when it's empty.*/
  'empty-state.status.list.open.subscribed.heading': 'ಚಂದಾದಾರರಾಗಿರುವ ಕೆಲಸಗಳು ಯಾವುದೂ ಇಲ್ಲ',
  /** The text in the tasks sidebar, in the subscribed tab, under the open details, when it's empty.*/
  'empty-state.status.list.open.subscribed.text': 'ನೀವು ಚಂದಾದಾರರಾಗಿರುವ ಕೆಲಸಗಳು ಇಲ್ಲಿ ತೋರಿಸಲಾಗುವುದು',

  /** Text used in the assignee input when there is no user assigned */
  'form.input.assignee.no-user-assigned.text': 'ನಿಯೋಜಿಸಲಾಗಿಲ್ಲ',
  /** Text used in the assignee input tooltip when there is no user assigned */
  'form.input.assignee.no-user-assigned.tooltip': 'ನಿಯೋಜಿಸುವವರನ್ನು ಹೊಂದಿಸಿ',
  /** Text used in the assignee input when searching and no users are found */
  'form.input.assignee.search.no-users.text': 'ಯಾವುದೇ ಬಳಕೆದಾರರು ಕಂಡುಬಂದಿಲ್ಲ',
  /** Placeholder text used in the search box in the assignee input */
  'form.input.assignee.search.placeholder': 'ನಿಯೋಜಿಸುವವರನ್ನು ಆರಿಸಿ',
  /** Text used in the assignee input when user is not authorized */
  'form.input.assignee.unauthorized.text': 'ಅನಧಿಕೃತ',
  /** Text used in the assignee input tooltip when there is no user assigned */
  'form.input.assignee.user-assigned.tooltip': 'ನಿಯೋಜಿಸುವವರನ್ನು ಬದಲಿಸಿ',
  /** Text used in the assignee input when user is not found */
  'form.input.assignee.user-not-found.text': 'ಬಳಕೆದಾರರು ಕಂಡುಬಂದಿಲ್ಲ',
  /** The label used in the create more toggle */
  'form.input.create-more.text': 'ಹೆಚ್ಚು ರಚಿಸಿ',
  /** The label used in the date input button tooltip when it's empty */
  'form.input.date.buttons.empty.tooltip': 'ಕೊನೆಯ ದಿನಾಂಕ ಹೊಂದಿಸಿ',
  /** The label used in the date input to remove the current value */
  'form.input.date.buttons.remove.text': 'ತೆಗೆದುಹಾಕಿ',
  /** The label used in the date input button tooltip when it has value */
  'form.input.date.buttons.tooltip': 'ಕೊನೆಯ ದಿನಾಂಕ ಬದಲಿಸಿ',
  /** Placeholder text used in the description input */
  'form.input.description.placeholder': 'ವಿವರಣೆ ಸೇರಿಸಿ',
  /**  Text used in the tooltip in the status change button  */
  'form.input.status.button.tooltip': 'ಸ್ಥಿತಿ ಬದಲಿಸಿ',
  /** The label used in the target input to remove the current value */
  'form.input.target.buttons.remove.text': 'ಗುರಿಯಾದ ವಿಷಯವನ್ನು ತೆಗೆದುಹಾಕಿ',
  /** The text used in the target input when encountering a schema error */
  'form.input.target.error.schema-not-found': 'ಸ್ಕೀಮಾ ಕಾಣಿಸಿಲ್ಲ',
  /** The placeholder text used in the target input for the search component */
  'form.input.target.search.placeholder': 'ಗುರಿ ದಾಖಲೆಯನ್ನು ಆರಿಸಿ',
  /** The placeholder text for the title input */
  'form.input.title.placeholder': 'ಕಾರ್ಯದ ಶೀರ್ಷಿಕೆ',
  /** The status error message presented when the user does not supply a title */
  'form.status.error.title-required': 'ಶೀರ್ಷಿಕೆ ಅಗತ್ಯವಿದೆ',
  /** The status message upon successful creation of a task */
  'form.status.success': 'ಕಾರ್ಯ ರಚಿಸಲಾಗಿದೆ',

  /** The text displayed when no tasks are found */
  'list.empty.text': 'ಕಾರ್ಯಗಳು ಇಲ್ಲ',
  /** The text displayed at the bottom of the tasks list inviting users provide feedback */
  'list.feedback.text':
    'ನಮಗೆ ಸುಧಾರಣೆ ಮಾಡಲು ಸಹಾಯ ಮಾಡಿ, <Link>ಕಾರ್ಯಗಳ ಬಗ್ಗೆ ಪ್ರತಿಕ್ರಿಯೆ ಹಂಚಿಕೊಳ್ಳಿ</Link>',

  /** The label for the copy link menu item */
  'menuitem.copylink.text': 'ಕಾರ್ಯಕ್ಕೆ ಲಿಂಕ್ ನಕಲಿಸಿ',
  /** The label for the delete task menu item */
  'menuitem.delete.text': 'ಕಾರ್ಯ ಅಳಿಸಿ',
  /** The label for the duplicate task menu item */
  'menuitem.duplicate.text': 'ಕಾರ್ಯವನ್ನು ನಕಲಿಸಿ',
  /** The text for the duplicate task menu item tooltip when mode is upsell */
  'menuitem.duplicate.upsell-tooltip': 'ಕಾರ್ಯಗಳನ್ನು ನಕಲಿಸಲು ಅಪ್‌ಗ್ರೇಡ್ ಮಾಡಿ',

  /** Fragment used to construct the first entry in the activity log */
  'panel.activity.created-fragment': 'ಈ ಕಾರ್ಯವನ್ನು ರಚಿಸಿದೆ',
  /** The title of the activity section of the task */
  'panel.activity.title': 'ಚಟುವಟಿಕೆ',
  /** The text used in the activity log when unable to find the user */
  'panel.activity.unknown-user': 'ಅಜ್ಞಾತ ಬಳಕೆದಾರ',
  /** The tooltip for the close button for the task panel */
  'panel.close.tooltip': 'ಪಾರ್ಶ್ವಪಟ್ಟಿ ಮುಚ್ಚಿ',
  /** The placeholder text for the comment text box */
  'panel.comment.placeholder': 'ಪ್ರತಿಕ್ರಿಯೆ ಸೇರಿಸಿ...',
  /** The placeholder text for the comment text box when mode is upsell */
  'panel.comment.placeholder.upsell': 'ಕಾರ್ಯಗಳ ಮೇಲೆ ಪ್ರತಿಕ್ರಿಯೆ ನೀಡಲು ಅಪ್‌ಗ್ರೇಡ್ ಮಾಡಿ',
  /** The title used in the task panel when showing the create task form */
  'panel.create.title': 'ರಚಿಸಿ',
  /** The title used in the drafts pulldown */
  'panel.drafts.title': 'ಮುಸದ್ದುಗಳು',
  /** The tooltip for the task navigation component */
  'panel.navigation.tooltip': 'ಕಾರ್ಯಗಳನ್ನು ತೆರೆಯಿರಿ',
  /** Title of the Tasks panel   */
  'panel.title': 'ಕಾರ್ಯಗಳು',

  /** Label for the Assigned Tab */
  'tab.assigned.label': 'ನಿಯೋಜಿಸಲಾಗಿದೆ',
  /** Label for the Active Document Tab */
  'tab.document.label': 'ಸಕ್ರಿಯ ದಾಖಲೆ',
  /** Label for the Subscribed Tab */
  'tab.subscribed.label': 'ಚಂದಾದಾರಿಕೆ ಮಾಡಲಾಗಿದೆ',

  /** Tooltip for the tasks navbar icon */
  'toolbar.tooltip': 'ಕಾರ್ಯಗಳು',
})
