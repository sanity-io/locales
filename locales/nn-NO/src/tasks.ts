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
  /** The text for tooltip in the create a new task button when mode is upsell */
  'buttons.new.upsell-tooltip': 'Oppgrader for å opprette oppgåver',
  /** The label for the button that will navigate to the next task */
  'buttons.next.tooltip': 'Gå til neste oppgåve',
  /** The label for the button that will previous to the next task */
  'buttons.previous.tooltip': 'Gå til førre oppgåve',

  /** Text for the remove task dialog asking for confirmation of deletion */
  'dialog.remove-task.body': 'Når ei oppgåve er sletta, kan den ikkje hentast tilbake.',
  /** The label for the cancel button on the remove task dialog */
  'dialog.remove-task.buttons.cancel.text': 'Avbryt',
  /** The label for the confirmation button on the remove task dialog */
  'dialog.remove-task.buttons.confirm.text': 'Slett',
  /** The title for the remove task dialog */
  'dialog.remove-task.title': 'Slett denne oppgåva?',

  /** The text used as a placeholder for the footer action in a document with a single task */
  'document.footer.open-tasks.placeholder_one': 'Opne oppgåve',
  /** The text used as a placeholder for the footer action in a document with multiple tasks */
  'document.footer.open-tasks.placeholder_other': 'Opne oppgåver',
  /** The label used in the button in the footer action in a document with a single task */
  'document.footer.open-tasks.text_one': '{{count}} open oppgåve',
  /** The label used in the button in the footer action in a document with multiple tasks */
  'document.footer.open-tasks.text_other': '{{count}} opne oppgåver',

  /** The heading in the tasks sidebar, in the assigned tab, when the user hasn't been assigned to any task*/
  'empty-state.list.assigned.heading': 'Du har ikkje fått tildelt nokon oppgåver',
  /** The text in the tasks sidebar, in the assigned tab, when the user hasn't been assigned to any task*/
  'empty-state.list.assigned.text': 'Når du får tildelt oppgåver, vil dei dukke opp her',
  /** The text in the tasks sidebar button any of the empty states is rendered*/
  'empty-state.list.create-new': 'Opprett ny oppgåve',
  /** The heading in the tasks sidebar, in the document tab, when the document doesn't have any task*/
  'empty-state.list.document.heading': 'Dette dokumentet har enno ikkje nokon oppgåver',
  /** The text in the tasks sidebar, in the document tab, when the document doesn't have any task*/
  'empty-state.list.document.text':
    'Når eit dokument har tilknytta oppgåver, vil dei bli vist her.',
  /** The heading in the tasks sidebar, when viewing the document tab, but there is not an active document*/
  'empty-state.list.no-active-document.heading': 'Opne eit dokument for å sjå oppgåvene',
  /** The text in the tasks sidebar, when viewing the document tab, but there is not an active document*/
  'empty-state.list.no-active-document.text': 'Oppgåver på ditt aktive dokument vil bli vist her.',
  /** The heading in the tasks sidebar, in the subscriber tab, when the user is not subscribed to any task*/
  'empty-state.list.subscribed.heading': 'Du har ikkje abonnert på nokon oppgåver',
  /** The text in the tasks sidebar, in the subscriber tab, when the user is not subscribed to any task*/
  'empty-state.list.subscribed.text':
    'Når du opprettar, endrar eller kommenterer på ei oppgåve vil du automatisk bli abonnert',
  /** The heading in the tasks sidebar, in the assigned tab, under the closed details, when it's empty.*/
  'empty-state.status.list.closed.assigned.heading': 'Ingen fullførte oppgåver',
  /** The text in the tasks sidebar, in the assigned tab, under the closed details, when it's empty.*/
  'empty-state.status.list.closed.assigned.text':
    'Oppgåvene dine merka som gjort vil dukke opp her',
  /** The heading in the tasks sidebar, in the document tab, under the closed details, when it's empty.*/
  'empty-state.status.list.closed.document.heading': 'Ingen fullførte oppgåver',
  /** The heading in the tasks sidebar, in the subscribed tab, under the closed details, when it's empty.*/
  'empty-state.status.list.closed.subscribed.heading': 'Ingen fullførte oppgåver',
  /** The text in the tasks sidebar, in the subscribed tab, under the closed details, when it's empty.*/
  'empty-state.status.list.closed.subscribed.text':
    'Oppgåver du abonnerer på som er merka som gjort vil dukke opp her',
  /** The heading in the tasks sidebar, in the assigned tab, under the open details, when it's empty.*/
  'empty-state.status.list.open.assigned.heading': 'Du er heilt ajour',
  /** The text in the tasks sidebar, in the assigned tab, under the open details, when it's empty.*/
  'empty-state.status.list.open.assigned.text': 'Nye oppgåver tildelt deg vil dukke opp her',
  /** The heading in the tasks sidebar, in the document tab, under the open details, when it's empty.*/
  'empty-state.status.list.open.document.heading': 'Ingen oppgåver på dette dokumentet',
  /** The heading in the tasks sidebar, in the subscribed tab, under the open details, when it's empty.*/
  'empty-state.status.list.open.subscribed.heading': 'Ingen abonnerte oppgåver',
  /** The text in the tasks sidebar, in the subscribed tab, under the open details, when it's empty.*/
  'empty-state.status.list.open.subscribed.text': 'Oppgåver du abonnerer på vil dukke opp her',

  /** Text used in the assignee input when there is no user assigned */
  'form.input.assignee.no-user-assigned.text': 'Ikkje tildelt',
  /** Text used in the assignee input tooltip when there is no user assigned */
  'form.input.assignee.no-user-assigned.tooltip': 'Sett tildeling',
  /** Text used in the assignee input when searching and no users are found */
  'form.input.assignee.search.no-users.text': 'Ingen brukarar funne',
  /** Placeholder text used in the search box in the assignee input */
  'form.input.assignee.search.placeholder': 'Vel tildeling',
  /** Text used in the assignee input when user is not authorized */
  'form.input.assignee.unauthorized.text': 'Uautorisert',
  /** Text used in the assignee input tooltip when there is no user assigned */
  'form.input.assignee.user-assigned.tooltip': 'Endre tildeling',
  /** Text used in the assignee input when user is not found */
  'form.input.assignee.user-not-found.text': 'Brukar ikkje funnen',
  /** The label used in the create more toggle */
  'form.input.create-more.text': 'Opprett fleire',
  /** The label used in the date input button tooltip when it's empty */
  'form.input.date.buttons.empty.tooltip': 'Sett frist',
  /** The label used in the date input to remove the current value */
  'form.input.date.buttons.remove.text': 'Fjern',
  /** The label used in the date input button tooltip when it has value */
  'form.input.date.buttons.tooltip': 'Endre frist',
  /** Placeholder text used in the description input */
  'form.input.description.placeholder': 'Legg til beskriving',
  /**  Text used in the tooltip in the status change button  */
  'form.input.status.button.tooltip': 'Endre status',
  /** The label used in the target input to remove the current value */
  'form.input.target.buttons.remove.text': 'Fjern målinnhald',
  /** The text used in the target input when encountering a schema error */
  'form.input.target.error.schema-not-found': 'Skjema ikkje funne',
  /** The placeholder text used in the target input for the search component */
  'form.input.target.search.placeholder': 'Vel dokumentmål',
  /** The placeholder text for the title input */
  'form.input.title.placeholder': 'Oppgåvetittel',
  /** The status error message presented when the user does not supply a title */
  'form.status.error.title-required': 'Tittel er påkravd',
  /** The status message upon successful creation of a task */
  'form.status.success': 'Oppgåve oppretta',

  /** The text displayed when no tasks are found */
  'list.empty.text': 'Ingen oppgåver',
  /** The text displayed at the bottom of the tasks list inviting users provide feedback */
  'list.feedback.text': 'Hjelp oss å bli betre, <Link>del tilbakemeldingar om Oppgåver</Link>',

  /** The label for the copy link menu item */
  'menuitem.copylink.text': 'Kopier lenke til oppgåva',
  /** The label for the delete task menu item */
  'menuitem.delete.text': 'Slett oppgåva',
  /** The label for the duplicate task menu item */
  'menuitem.duplicate.text': 'Dupliser oppgåva',
  /** The text for the duplicate task menu item tooltip when mode is upsell */
  'menuitem.duplicate.upsell-tooltip': 'Oppgrader for å duplisere oppgåver',

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
  /** The placeholder text for the comment text box when mode is upsell */
  'panel.comment.placeholder.upsell': 'Oppgrader for å kommentere på oppgåver',
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

  /** Tooltip for the tasks navbar icon */
  'toolbar.tooltip': 'Oppgåver',
})
