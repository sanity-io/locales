import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** The label for the create task action */
  'actions.create.text': 'Opprett ny oppgave',
  /** The label for the open tasks panel action */
  'actions.open.text': 'Oppgaver',

  /** The label for the button to create a new task */
  'buttons.create.text': 'Opprett oppgave',
  /** The label for the button to discard changes */
  'buttons.discard.text': 'Forkast',
  /** The label for the button to open the draft */
  'buttons.draft.text': 'Utkast',
  /** The label for the button to create a new task */
  'buttons.new.text': 'Ny oppgave',
  /** The label for the button that will navigate to the next task */
  'buttons.next.tooltip': 'Gå til neste oppgave',
  /** The label for the button that will previous to the next task */
  'buttons.previous.tooltip': 'Gå til forrige oppgave',

  /** Text for the remove task dialog asking for confirmation of deletion */
  'dialog.remove-task.body': 'Er du sikker på at du vil slette denne oppgaven?',
  /** Text for the remove task dialog clarifying that deletion is permanent */
  'dialog.remove-task.body2': 'Når den er slettet, kan den ikke gjenopprettes.',
  /** The label for the cancel button on the remove task dialog */
  'dialog.remove-task.buttons.cancel.text': 'Avbryt',
  /** The label for the confirmation button on the remove task dialog */
  'dialog.remove-task.buttons.confirm.text': 'Fjern',
  /** The title for the remove task dialog */
  'dialog.remove-task.title': 'Fjern oppgave',

  /** The text used as a placeholder for the footer action in a document with a single task */
  'document.footer.open-tasks.placeholder_one': 'Åpen oppgave',
  /** The text used as a placeholder for the footer action in a document with multiple tasks */
  'document.footer.open-tasks.placeholder_other': 'Åpne oppgaver',
  /** The label used in the button in the footer action in a document with a single task */
  'document.footer.open-tasks.text_one': '{{count}} åpen oppgave',
  /** The label used in the button in the footer action in a document with multiple tasks */
  'document.footer.open-tasks.text_other': '{{count}} åpne oppgaver',

  'empty-state.list.assigned.heading': 'Du har ikke blitt tildelt noen oppgaver',
  'empty-state.list.assigned.text': 'Når du blir tildelt oppgaver, vil de vises her',
  'empty-state.list.create-new': 'Opprett ny oppgave',
  'empty-state.list.document.heading': 'Dette dokumentet har ikke noen oppgaver ennå',
  'empty-state.list.document.text':
    'Når et dokument har tilknyttede oppgaver, vil de bli vist her.',
  'empty-state.list.subscribed.heading': 'Du har ikke abonnert på noen oppgaver',
  'empty-state.list.subscribed.text':
    'Når du oppretter, endrer eller kommenterer på en oppgave, vil du automatisk bli abonnert',
  'empty-state.status.list.closed.assigned.heading': 'Ingen fullførte oppgaver',
  'empty-state.status.list.closed.assigned.text': 'Oppgavene dine merket som fullført vil vises her',
  'empty-state.status.list.closed.document.heading': 'Ingen fullførte oppgaver',
  'empty-state.status.list.closed.subscribed.heading': 'Ingen fullførte oppgaver',
  'empty-state.status.list.closed.subscribed.text':
    'Oppgaver du abonnerer på som er merket som fullført vil vises her',
  'empty-state.status.list.open.assigned.heading': 'Du er helt ajour',
  'empty-state.status.list.open.assigned.text': 'Nye oppgaver tildelt deg vil vises her',
  'empty-state.status.list.open.document.heading': 'Ingen oppgaver på dette dokumentet',
  'empty-state.status.list.open.subscribed.heading': 'Ingen abonnerte oppgaver',
  'empty-state.status.list.open.subscribed.text': 'Oppgaver du abonnerer på vil vises her',

  /** Text used in the assignee input when there is no user assigned */
  'form.input.assignee.no-user-assigned.text': 'Ikke tildelt',
  /** Text used in the assignee input when searching and no users are found */
  'form.input.assignee.search.no-users.text': 'Ingen brukere funnet',
  /** Placeholder text used in the search box in the assignee input */
  'form.input.assignee.search.placeholder': 'Velg brukernavn',
  /** Text used in the assignee input when user is not authorized */
  'form.input.assignee.unauthorized.text': 'Uautorisert',
  /** Text used in the assignee input when user is not found */
  'form.input.assignee.user-not-found.text': 'Bruker ikke funnet',
  /** The label used in the create more toggle */
  'form.input.create-more.text': 'Opprett flere',
  /** The label used in the date input to remove the current value */
  'form.input.date.buttons.remove.text': 'Fjern',
  /** Placeholder text used in the description input */
  'form.input.description.placeholder': 'Legg til beskrivelse',
  /** The label used in the target input to remove the current value */
  'form.input.target.buttons.remove.text': 'Fjern målrettet innhold',
  /** The text used in the target input when encountering a schema error */
  'form.input.target.error.schema-not-found': 'Skjema ikke funnet',
  /** The placeholder text used in the target input for the search component */
  'form.input.target.search.placeholder': 'Velg dokument',
  /** The placeholder text for the title input */
  'form.input.title.placeholder': 'Oppgavetittel',
  /** The status error message presented when the user does not supply a title */
  'form.status.error.title-required': 'Tittel er påkrevd',
  /** The status message upon successful creation of a task */
  'form.status.success': 'Oppgave opprettet',

  /** The text displayed when no tasks are found */
  'list.empty.text': 'Ingen oppgaver',

  /** The label for the copy link menu item */
  'menuitem.copylink.text': 'Kopier lenke til oppgaven',
  /** The label for the delete task menu item */
  'menuitem.delete.text': 'Slett oppgave',
  /** The label for the duplicate task menu item */
  'menuitem.duplicate.text': 'Dupliser oppgave',

  /** Fragment used to construct the first entry in the activity log */
  'panel.activity.created-fragment': 'opprettet denne oppgaven',
  /** The title of the activity section of the task */
  'panel.activity.title': 'Aktivitet',
  /** The text used in the activity log when unable to find the user */
  'panel.activity.unknown-user': 'Ukjent bruker',
  /** The tooltip for the close button for the task panel */
  'panel.close.tooltip': 'Lukk sidefelt',
  /** The placeholder text for the comment text box */
  'panel.comment.placeholder': 'Legg til en kommentar…',
  /** The title used in the task panel when showing the create task form */
  'panel.create.title': 'Opprett',
  /** The title used in the drafts pulldown */
  'panel.drafts.title': 'Utkast',
  /** The tooltip for the task navigation component */
  'panel.navigation.tooltip': 'Åpne oppgaver',
  /** Title of the Tasks panel   */
  'panel.title': 'Oppgaver',

  /** Label for the Assigned Tab */
  'tab.assigned.label': 'Tildelt',
  /** Label for the Active Document Tab */
  'tab.document.label': 'Aktivt dokument',
  /** Label for the Subscribed Tab */
  'tab.subscribed.label': 'Abonnert',
})
