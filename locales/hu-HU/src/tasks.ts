import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** The label for the create task action */
  'actions.create.text': 'Új feladat létrehozása',
  /** The label for the open tasks panel action */
  'actions.open.text': 'Feladatok',

  /** The label for the button to create a new task */
  'buttons.create.text': 'Feladat létrehozása',
  /** The label for the button to discard changes */
  'buttons.discard.text': 'Elvetés',
  /** The label for the button to open the draft */
  'buttons.draft.text': 'Vázlat',
  /** The label for the button to create a new task */
  'buttons.new.text': 'Új feladat',
  /** The label for the button that will navigate to the next task */
  'buttons.next.tooltip': 'Ugrás a következő feladatra',
  /** The label for the button that will previous to the next task */
  'buttons.previous.tooltip': 'Ugrás az előző feladatra',

  /** Text for the remove task dialog asking for confirmation of deletion */
  'dialog.remove-task.body': 'Biztosan törölni szeretnéd ezt a feladatot?',
  /** Text for the remove task dialog clarifying that deletion is permanent */
  'dialog.remove-task.body2': 'A törlést követően, nem állítható vissza.',
  /** The label for the cancel button on the remove task dialog */
  'dialog.remove-task.buttons.cancel.text': 'Mégse',
  /** The label for the confirmation button on the remove task dialog */
  'dialog.remove-task.buttons.confirm.text': 'Eltávolítás',
  /** The title for the remove task dialog */
  'dialog.remove-task.title': 'Feladat eltávolítása',

  /** The text used as a placeholder for the footer action in a document with a single task */
  'document.footer.open-tasks.placeholder_one': 'Feladat megnyitása',
  /** The text used as a placeholder for the footer action in a document with multiple tasks */
  'document.footer.open-tasks.placeholder_other': 'Feladatok megnyitása',
  /** The label used in the button in the footer action in a document with a single task */
  'document.footer.open-tasks.text_one': '{{count}} nyitott feladat',
  /** The label used in the button in the footer action in a document with multiple tasks */
  'document.footer.open-tasks.text_other': '{{count}} nyitott feladat',

  'empty-state.list.assigned.heading': 'Még nem lett feladat hozzárendelve',
  'empty-state.list.assigned.text': 'Amint feladatok lesznek hozzárendelve, itt fognak megjelenni',
  'empty-state.list.create-new': 'Új feladat létrehozása',
  'empty-state.list.document.heading': 'Ehhez a dokumentumhoz még nincsenek feladatok',
  'empty-state.list.document.text':
    'Amint a dokumentumhoz kapcsolódó feladatok lesznek, itt fognak megjelenni.',
  'empty-state.list.subscribed.heading': 'Még nem iratkozotál fel feladatokra',
  'empty-state.list.subscribed.text':
    'Amikor létrehozol, módosítasz vagy kommentálsz egy feladatot, automatikusan fel leszel rá iratkozva',
  'empty-state.status.list.closed.assigned.heading': 'Nincsenek befejezett feladatok',
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
  'menuitem.delete.text': 'Feladat törlése',
  /** The label for the duplicate task menu item */
  'menuitem.duplicate.text': 'Feladat másolása',

  /** Fragment used to construct the first entry in the activity log */
  'panel.activity.created-fragment': 'létrehozta ezt a feladatot',
  /** The title of the activity section of the task */
  'panel.activity.title': 'Tevékenység',
  /** The text used in the activity log when unable to find the user */
  'panel.activity.unknown-user': 'Ismeretlen felhasználó',
  /** The tooltip for the close button for the task panel */
  'panel.close.tooltip': 'Oldalsáv bezárása',
  /** The placeholder text for the comment text box */
  'panel.comment.placeholder': 'Hozzászólás hozzáadása...',
  /** The title used in the task panel when showing the create task form */
  'panel.create.title': 'Létrehozás',
  /** The title used in the drafts pulldown */
  'panel.drafts.title': 'Piszkozatok',
  /** The tooltip for the task navigation component */
  'panel.navigation.tooltip': 'Feladatok megnyitása',
  /** Title of the Tasks panel   */
  'panel.title': 'Feladatok',

  /** Label for the Assigned Tab */
  'tab.assigned.label': 'Hozzárendelve',
  /** Label for the Active Document Tab */
  'tab.document.label': 'Aktív Dokumentum',
  /** Label for the Subscribed Tab */
  'tab.subscribed.label': 'Feliratkozva',
})
