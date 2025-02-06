import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** The label for the create task action */
  'actions.create.text': 'Skapa ny uppgift',
  /** The label for the open tasks panel action */
  'actions.open.text': 'Uppgifter',

  /** The label for the button to create a new task */
  'buttons.create.text': 'Skapa uppgift',
  /** The label for the button to discard changes */
  'buttons.discard.text': 'Kassera',
  /** The label for the button to open the draft */
  'buttons.draft.text': 'Utkast',
  /** The label for the button to create a new task */
  'buttons.new.text': 'Ny uppgift',
  /** The text for tooltip in the create a new task button when mode is upsell */
  'buttons.new.upsell-tooltip': 'Uppgradera för att skapa uppgifter',
  /** The label for the button that will navigate to the next task */
  'buttons.next.tooltip': 'Gå till nästa uppgift',
  /** The label for the button that will previous to the next task */
  'buttons.previous.tooltip': 'Gå till föregående uppgift',

  /** Text for the remove task dialog asking for confirmation of deletion */
  'dialog.remove-task.body': 'När en uppgift har raderats går det inte att återställa den.',
  /** The label for the cancel button on the remove task dialog */
  'dialog.remove-task.buttons.cancel.text': 'Avbryt',
  /** The label for the confirmation button on the remove task dialog */
  'dialog.remove-task.buttons.confirm.text': 'Radera',
  /** The title for the remove task dialog */
  'dialog.remove-task.title': 'Radera denna uppgift?',

  /** The text used as a placeholder for the footer action in a document with a single task */
  'document.footer.open-tasks.placeholder_one': 'Öppen uppgift',
  /** The text used as a placeholder for the footer action in a document with multiple tasks */
  'document.footer.open-tasks.placeholder_other': 'Öppna uppgifter',
  /** The label used in the button in the footer action in a document with a single task */
  'document.footer.open-tasks.text_one': '{{count}} öppen uppgift',
  /** The label used in the button in the footer action in a document with multiple tasks */
  'document.footer.open-tasks.text_other': '{{count}} öppna uppgifter',

  /** The heading in the tasks sidebar, in the assigned tab, when the user hasn't been assigned to any task*/
  'empty-state.list.assigned.heading': 'Du har inte blivit tilldelad några uppgifter',
  /** The text in the tasks sidebar, in the assigned tab, when the user hasn't been assigned to any task*/
  'empty-state.list.assigned.text': 'När du tilldelas uppgifter kommer de att visas här',
  /** The text in the tasks sidebar button any of the empty states is rendered*/
  'empty-state.list.create-new': 'Skapa ny uppgift',
  /** The heading in the tasks sidebar, in the document tab, when the document doesn't have any task*/
  'empty-state.list.document.heading': 'Detta dokument har ännu inga uppgifter',
  /** The text in the tasks sidebar, in the document tab, when the document doesn't have any task*/
  'empty-state.list.document.text':
    'När ett dokument har kopplade uppgifter kommer de att visas här.',
  /** The heading in the tasks sidebar, when viewing the document tab, but there is not an active document*/
  'empty-state.list.no-active-document.heading': 'Öppna ett dokument för att se dess uppgifter',
  /** The text in the tasks sidebar, when viewing the document tab, but there is not an active document*/
  'empty-state.list.no-active-document.text':
    'Uppgifter på ditt aktiva dokument kommer att visas här.',
  /** The heading in the tasks sidebar, in the subscriber tab, when the user is not subscribed to any task*/
  'empty-state.list.subscribed.heading': 'Du har inte prenumererat på några uppgifter',
  /** The text in the tasks sidebar, in the subscriber tab, when the user is not subscribed to any task*/
  'empty-state.list.subscribed.text':
    'När du skapar, ändrar eller kommenterar på en uppgift kommer du automatiskt att prenumerera',
  /** The heading in the tasks sidebar, in the assigned tab, under the closed details, when it's empty.*/
  'empty-state.status.list.closed.assigned.heading': 'Inga slutförda uppgifter',
  /** The text in the tasks sidebar, in the assigned tab, under the closed details, when it's empty.*/
  'empty-state.status.list.closed.assigned.text':
    'Dina uppgifter som markerats som klara kommer att visas här',
  /** The heading in the tasks sidebar, in the document tab, under the closed details, when it's empty.*/
  'empty-state.status.list.closed.document.heading': 'Inga slutförda uppgifter',
  /** The heading in the tasks sidebar, in the subscribed tab, under the closed details, when it's empty.*/
  'empty-state.status.list.closed.subscribed.heading': 'Inga slutförda uppgifter',
  /** The text in the tasks sidebar, in the subscribed tab, under the closed details, when it's empty.*/
  'empty-state.status.list.closed.subscribed.text':
    'Uppgifter som du prenumererar på och som markerats som klara kommer att visas här',
  /** The heading in the tasks sidebar, in the assigned tab, under the open details, when it's empty.*/
  'empty-state.status.list.open.assigned.heading': 'Du är helt ikapp',
  /** The text in the tasks sidebar, in the assigned tab, under the open details, when it's empty.*/
  'empty-state.status.list.open.assigned.text':
    'Nya uppgifter som tilldelas dig kommer att visas här',
  /** The heading in the tasks sidebar, in the document tab, under the open details, when it's empty.*/
  'empty-state.status.list.open.document.heading': 'Inga uppgifter på detta dokument',
  /** The heading in the tasks sidebar, in the subscribed tab, under the open details, when it's empty.*/
  'empty-state.status.list.open.subscribed.heading': 'Inga prenumererade uppgifter',
  /** The text in the tasks sidebar, in the subscribed tab, under the open details, when it's empty.*/
  'empty-state.status.list.open.subscribed.text':
    'Uppgifter som du prenumererar på kommer att visas här',

  /** Text used in the assignee input when there is no user assigned */
  'form.input.assignee.no-user-assigned.text': 'Inte tilldelad',
  /** Text used in the assignee input tooltip when there is no user assigned */
  'form.input.assignee.no-user-assigned.tooltip': 'Ange tilldelad',
  /** Text used in the assignee input when searching and no users are found */
  'form.input.assignee.search.no-users.text': 'Inga användare hittades',
  /** Placeholder text used in the search box in the assignee input */
  'form.input.assignee.search.placeholder': 'Välj tilldelad',
  /** Text used in the assignee input when user is not authorized */
  'form.input.assignee.unauthorized.text': 'Obehörig',
  /** Text used in the assignee input tooltip when there is no user assigned */
  'form.input.assignee.user-assigned.tooltip': 'Byt tilldelad',
  /** Text used in the assignee input when user is not found */
  'form.input.assignee.user-not-found.text': 'Användare hittades inte',
  /** The label used in the create more toggle */
  'form.input.create-more.text': 'Skapa fler',
  /** The label used in the date input button tooltip when it's empty */
  'form.input.date.buttons.empty.tooltip': 'Ange förfallodatum',
  /** The label used in the date input to remove the current value */
  'form.input.date.buttons.remove.text': 'Ta bort',
  /** The label used in the date input button tooltip when it has value */
  'form.input.date.buttons.tooltip': 'Ändra förfallodatum',
  /** Placeholder text used in the description input */
  'form.input.description.placeholder': 'Lägg till beskrivning',
  /**  Text used in the tooltip in the status change button  */
  'form.input.status.button.tooltip': 'Ändra status',
  /** The label used in the target input to remove the current value */
  'form.input.target.buttons.remove.text': 'Ta bort målinnehåll',
  /** The text used in the target input when encountering a schema error */
  'form.input.target.error.schema-not-found': 'Schema hittades inte',
  /** The placeholder text used in the target input for the search component */
  'form.input.target.search.placeholder': 'Välj måldokument',
  /** The placeholder text for the title input */
  'form.input.title.placeholder': 'Uppgiftstitel',
  /** The status error message presented when the user does not supply a title */
  'form.status.error.title-required': 'Titel krävs',
  /** The status message upon successful creation of a task */
  'form.status.success': 'Uppgift skapad',

  /** The text displayed when no tasks are found */
  'list.empty.text': 'Inga uppgifter',
  /** The text displayed at the bottom of the tasks list inviting users provide feedback */
  'list.feedback.text': 'Hjälp oss att förbättra, <Link>dela feedback om Uppgifter</Link> ',

  /** The label for the copy link menu item */
  'menuitem.copylink.text': 'Kopiera länk till uppgift',
  /** The label for the delete task menu item */
  'menuitem.delete.text': 'Radera uppgift',
  /** The label for the duplicate task menu item */
  'menuitem.duplicate.text': 'Duplicera uppgift',
  /** The text for the duplicate task menu item tooltip when mode is upsell */
  'menuitem.duplicate.upsell-tooltip': 'Uppgradera för att duplicera uppgifter',

  /** Fragment used to construct the first entry in the activity log */
  'panel.activity.created-fragment': 'skapade denna uppgift',
  /** The title of the activity section of the task */
  'panel.activity.title': 'Aktivitet',
  /** The text used in the activity log when unable to find the user */
  'panel.activity.unknown-user': 'Okänd användare',
  /** The tooltip for the close button for the task panel */
  'panel.close.tooltip': 'Stäng sidopanel',
  /** The placeholder text for the comment text box */
  'panel.comment.placeholder': 'Lägg till en kommentar...',
  /** The placeholder text for the comment text box when mode is upsell */
  'panel.comment.placeholder.upsell': 'Uppgradera för att kommentera på uppgifter',
  /** The title used in the task panel when showing the create task form */
  'panel.create.title': 'Skapa',
  /** The title used in the drafts pulldown */
  'panel.drafts.title': 'Utkast',
  /** The tooltip for the task navigation component */
  'panel.navigation.tooltip': 'Öppna uppgifter',
  /** Title of the Tasks panel   */
  'panel.title': 'Uppgifter',

  /** Label for the Assigned Tab */
  'tab.assigned.label': 'Tilldelad',
  /** Label for the Active Document Tab */
  'tab.document.label': 'Aktivt dokument',
  /** Label for the Subscribed Tab */
  'tab.subscribed.label': 'Prenumererad',

  /** Tooltip for the tasks navbar icon */
  'toolbar.tooltip': undefined, // 'Tasks'
})
