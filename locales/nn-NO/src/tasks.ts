import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** The label for the create task action */
  'actions.create.text': 'Opprett ny oppgåve',
  /** The label for the open tasks panel action */
  'actions.open.text': 'Oppgåver',

  /** The label for the button to create a new task */
  'buttons.create.text': 'Opprett oppgåve',
  /** The label for the button to discard changes */
  'buttons.discard.text': 'Forkast',
  /** The label for the button to open the draft */
  'buttons.draft.text': 'Utkast',
  /** The label for the button to create a new task */
  'buttons.new.text': 'Ny oppgåve',
  /** The label for the button that will navigate to the next task */
  'buttons.next.tooltip': 'Gå til neste oppgåve',
  /** The label for the button that will previous to the next task */
  'buttons.previous.tooltip': 'Gå til førre oppgåve',

  /** Text for the remove task dialog asking for confirmation of deletion */
  'dialog.remove-task.body': 'Er du sikker på at du vil slette denne oppgåva?',
  /** Text for the remove task dialog clarifying that deletion is permanent */
  'dialog.remove-task.body2': 'Når den er sletta, kan den ikkje bli gjenoppretta.',
  /** The label for the cancel button on the remove task dialog */
  'dialog.remove-task.buttons.cancel.text': 'Avbryt',
  /** The label for the confirmation button on the remove task dialog */
  'dialog.remove-task.buttons.confirm.text': 'Fjern',
  /** The title for the remove task dialog */
  'dialog.remove-task.title': 'Fjern oppgåve',

  /** The text used as a placeholder for the footer action in a document with a single task */
  'document.footer.open-tasks.placeholder_one': 'Opne oppgåve',
  /** The text used as a placeholder for the footer action in a document with multiple tasks */
  'document.footer.open-tasks.placeholder_other': 'Opne oppgåver',
  /** The label used in the button in the footer action in a document with a single task */
  'document.footer.open-tasks.text_one': '{{count}} open oppgåve',
  /** The label used in the button in the footer action in a document with multiple tasks */
  'document.footer.open-tasks.text_other': '{{count}} opne oppgåver',

  'empty-state.list.assigned.heading': 'Du har ikkje blitt tildelt nokon oppgåver',
  'empty-state.list.assigned.text': 'Når du blir tildelt oppgåver vil dei dukke opp her',
  'empty-state.list.create-new': 'Opprett ny oppgåve',
  'empty-state.list.document.heading': 'Dette dokumentet har ikkje nokon oppgåver enno',
  'empty-state.list.document.text':
    'Når eit dokument har tilknytta oppgåver, vil dei bli vist her.',
  'empty-state.list.subscribed.heading': 'Du har ikkje abonnert på nokon oppgåver',
  'empty-state.list.subscribed.text':
    'Når du opprettar, endrar, eller kommenterer på ei oppgåve vil du automatisk bli abonnert',
  'empty-state.status.list.closed.assigned.heading': 'Ingen fullførte oppgåver',
  'empty-state.status.list.closed.assigned.text': 'Oppgåvene dine merka som gjort vil visast her',
  'empty-state.status.list.closed.document.heading': 'Ingen fullførte oppgåver',
  'empty-state.status.list.closed.subscribed.heading': 'Ingen fullførte oppgåver',
  'empty-state.status.list.closed.subscribed.text':
    'Oppgåver du abonnerer på merka som gjort vil visast her',
  'empty-state.status.list.open.assigned.heading': 'Du er heilt ajour',
  'empty-state.status.list.open.assigned.text': 'Nye oppgåver tildelt deg vil visast her',
  'empty-state.status.list.open.document.heading': 'Ingen oppgåver på dette dokumentet',
  'empty-state.status.list.open.subscribed.heading': 'Ingen abonnerte oppgåver',
  'empty-state.status.list.open.subscribed.text': 'Oppgåver du abonnerer på vil visast her',

  /** Text used in the assignee input when there is no user assigned */
  'form.input.assignee.no-user-assigned.text': 'Ikkje tildelt',
  /** Text used in the assignee input when searching and no users are found */
  'form.input.assignee.search.no-users.text': 'Ingen brukarar funne',
  /** Placeholder text used in the search box in the assignee input */
  'form.input.assignee.search.placeholder': 'Vel brukarnamn',
  /** Text used in the assignee input when user is not authorized */
  'form.input.assignee.unauthorized.text': 'Uautorisert',
  /** Text used in the assignee input when user is not found */
  'form.input.assignee.user-not-found.text': 'Brukar ikkje funnen',
  /** The label used in the create more toggle */
  'form.input.create-more.text': 'Opprett fleire',
  /** The label used in the date input to remove the current value */
  'form.input.date.buttons.remove.text': 'Fjern',
  /** Placeholder text used in the description input */
  'form.input.description.placeholder': 'Legg til beskriving',
  /** The label used in the target input to remove the current value */
  'form.input.target.buttons.remove.text': 'Fjern målinnhald',
  /** The text used in the target input when encountering a schema error */
  'form.input.target.error.schema-not-found': 'Skjema ikkje funne',
  /** The placeholder text used in the target input for the search component */
  'form.input.target.search.placeholder': 'Vel dokument',
  /** The placeholder text for the title input */
  'form.input.title.placeholder': 'Oppgåvetittel',
  /** The status error message presented when the user does not supply a title */
  'form.status.error.title-required': 'Tittel er påkravd',
  /** The status message upon successful creation of a task */
  'form.status.success': 'Oppgåve oppretta',

  /** The text displayed when no tasks are found */
  'list.empty.text': 'Ingen oppgåver',

  /** The label for the copy link menu item */
  'menuitem.copylink.text': 'Kopier lenke til oppgåva',
  /** The label for the delete task menu item */
  'menuitem.delete.text': 'Slett oppgåve',
  /** The label for the duplicate task menu item */
  'menuitem.duplicate.text': 'Dupliser oppgåve',

  /** Fragment used to construct the first entry in the activity log */
  'panel.activity.created-fragment': 'oppretta denne oppgåva',
  /** The title of the activity section of the task */
  'panel.activity.title': 'Aktivitet',
  /** The text used in the activity log when unable to find the user */
  'panel.activity.unknown-user': 'Ukjend brukar',
  /** The tooltip for the close button for the task panel */
  'panel.close.tooltip': 'Lukk sidefeltet',
  /** The placeholder text for the comment text box */
  'panel.comment.placeholder': 'Legg til ein kommentar...',
  /** The title used in the task panel when showing the create task form */
  'panel.create.title': 'Opprett',
  /** The title used in the drafts pulldown */
  'panel.drafts.title': 'Utkast',
  /** The tooltip for the task navigation component */
  'panel.navigation.tooltip': 'Opne oppgåver',
  /** Title of the Tasks panel   */
  'panel.title': 'Oppgåver',

  /** Label for the Assigned Tab */
  'tab.assigned.label': 'Tildelt',
  /** Label for the Active Document Tab */
  'tab.document.label': 'Aktivt dokument',
  /** Label for the Subscribed Tab */
  'tab.subscribed.label': 'Abonnert',
})
