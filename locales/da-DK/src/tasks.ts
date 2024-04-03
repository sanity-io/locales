import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** The label for the create task action */
  'actions.create.text': 'Opret ny opgave',
  /** The label for the open tasks panel action */
  'actions.open.text': 'Opgaver',

  /** The label for the button to create a new task */
  'buttons.create.text': 'Opret opgave',
  /** The label for the button to discard changes */
  'buttons.discard.text': 'Kassér',
  /** The label for the button to open the draft */
  'buttons.draft.text': 'Kladde',
  /** The label for the button to create a new task */
  'buttons.new.text': 'Ny opgave',
  /** The label for the button that will navigate to the next task */
  'buttons.next.tooltip': 'Gå til næste opgave',
  /** The label for the button that will previous to the next task */
  'buttons.previous.tooltip': 'Gå til forrige opgave',

  /** Text for the remove task dialog asking for confirmation of deletion */
  'dialog.remove-task.body': 'Er du sikker på, at du vil slette denne opgave?',
  /** Text for the remove task dialog clarifying that deletion is permanent */
  'dialog.remove-task.body2': 'Når den er slettet, kan den ikke gendannes.',
  /** The label for the cancel button on the remove task dialog */
  'dialog.remove-task.buttons.cancel.text': 'Annuller',
  /** The label for the confirmation button on the remove task dialog */
  'dialog.remove-task.buttons.confirm.text': 'Fjern',
  /** The title for the remove task dialog */
  'dialog.remove-task.title': 'Fjern opgave',

  /** The text used as a placeholder for the footer action in a document with a single task */
  'document.footer.open-tasks.placeholder_one': 'Åben opgave',
  /** The text used as a placeholder for the footer action in a document with multiple tasks */
  'document.footer.open-tasks.placeholder_other': 'Åbne opgaver',
  /** The label used in the button in the footer action in a document with a single task */
  'document.footer.open-tasks.text_one': '{{count}} åben opgave',
  /** The label used in the button in the footer action in a document with multiple tasks */
  'document.footer.open-tasks.text_other': '{{count}} åbne opgaver',

  'empty-state.list.assigned.heading': 'Du er ikke blevet tildelt nogen opgaver',
  'empty-state.list.assigned.text': 'Når du bliver tildelt opgaver, vil de blive vist her',
  'empty-state.list.create-new': 'Opret ny opgave',
  'empty-state.list.document.heading': 'Dette dokument har endnu ingen opgaver',
  'empty-state.list.document.text':
    'Når et dokument har tilknyttede opgaver, vil de blive vist her.',
  'empty-state.list.subscribed.heading': 'Du har ikke abonneret på nogen opgaver',
  'empty-state.list.subscribed.text':
    'Når du opretter, ændrer eller kommenterer på en opgave, vil du automatisk blive abonneret',
  'empty-state.status.list.closed.assigned.heading': 'Ingen afsluttede opgaver',
  'empty-state.status.list.closed.assigned.text':
    'Dine opgaver markeret som udført vil blive vist her',
  'empty-state.status.list.closed.document.heading': 'Ingen afsluttede opgaver',
  'empty-state.status.list.closed.subscribed.heading': 'Ingen afsluttede opgaver',
  'empty-state.status.list.closed.subscribed.text':
    'Opgaver du abonnerer på markeret som udført vil blive vist her',
  'empty-state.status.list.open.assigned.heading': 'Du er helt ajour',
  'empty-state.status.list.open.assigned.text': 'Nye opgaver tildelt til dig vil blive vist her',
  'empty-state.status.list.open.document.heading': 'Ingen opgaver på dette dokument',
  'empty-state.status.list.open.subscribed.heading': 'Ingen abonnerede opgaver',
  'empty-state.status.list.open.subscribed.text': 'Opgaver du abonnerer på vil blive vist her',

  /** Text used in the assignee input when there is no user assigned */
  'form.input.assignee.no-user-assigned.text': 'Ikke tildelt',
  /** Text used in the assignee input when searching and no users are found */
  'form.input.assignee.search.no-users.text': 'Ingen brugere fundet',
  /** Placeholder text used in the search box in the assignee input */
  'form.input.assignee.search.placeholder': 'Vælg brugernavn',
  /** Text used in the assignee input when user is not authorized */
  'form.input.assignee.unauthorized.text': 'Uautoriseret',
  /** Text used in the assignee input when user is not found */
  'form.input.assignee.user-not-found.text': 'Bruger ikke fundet',
  /** The label used in the create more toggle */
  'form.input.create-more.text': 'Opret flere',
  /** The label used in the date input to remove the current value */
  'form.input.date.buttons.remove.text': 'Fjern',
  /** Placeholder text used in the description input */
  'form.input.description.placeholder': 'Tilføj beskrivelse',
  /** The label used in the target input to remove the current value */
  'form.input.target.buttons.remove.text': 'Fjern målindhold',
  /** The text used in the target input when encountering a schema error */
  'form.input.target.error.schema-not-found': 'Skema ikke fundet',
  /** The placeholder text used in the target input for the search component */
  'form.input.target.search.placeholder': 'Vælg dokument',
  /** The placeholder text for the title input */
  'form.input.title.placeholder': 'Opgavetitel',
  /** The status error message presented when the user does not supply a title */
  'form.status.error.title-required': 'Titel er påkrævet',
  /** The status message upon successful creation of a task */
  'form.status.success': 'Opgave oprettet',

  /** The text displayed when no tasks are found */
  'list.empty.text': 'Ingen opgaver',

  /** The label for the copy link menu item */
  'menuitem.copylink.text': 'Kopier link til opgave',
  /** The label for the delete task menu item */
  'menuitem.delete.text': 'Slet opgave',
  /** The label for the duplicate task menu item */
  'menuitem.duplicate.text': 'Dupliker opgave',

  /** Fragment used to construct the first entry in the activity log */
  'panel.activity.created-fragment': 'oprettede denne opgave',
  /** The title of the activity section of the task */
  'panel.activity.title': 'Aktivitet',
  /** The text used in the activity log when unable to find the user */
  'panel.activity.unknown-user': 'Ukendt bruger',
  /** The tooltip for the close button for the task panel */
  'panel.close.tooltip': 'Luk sidebar',
  /** The placeholder text for the comment text box */
  'panel.comment.placeholder': 'Tilføj en kommentar...',
  /** The title used in the task panel when showing the create task form */
  'panel.create.title': 'Opret',
  /** The title used in the drafts pulldown */
  'panel.drafts.title': 'Kladder',
  /** The tooltip for the task navigation component */
  'panel.navigation.tooltip': 'Åbn opgaver',
  /** Title of the Tasks panel   */
  'panel.title': 'Opgaver',

  /** Label for the Assigned Tab */
  'tab.assigned.label': 'Tildelt',
  /** Label for the Active Document Tab */
  'tab.document.label': 'Aktivt dokument',
  /** Label for the Subscribed Tab */
  'tab.subscribed.label': 'Abonneret',
})
