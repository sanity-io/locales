import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** The label for the create task action */
  'actions.create.text': 'Stvorite novi zadatak',
  /** The label for the open tasks panel action */
  'actions.open.text': 'Zadaci',

  /** The label for the button to create a new task */
  'buttons.create.text': 'Stvori zadatak',
  /** The label for the button to discard changes */
  'buttons.discard.text': 'Odbaci',
  /** The label for the button to open the draft */
  'buttons.draft.text': 'Nacrt',
  /** The label for the button to create a new task */
  'buttons.new.text': 'Novi zadatak',
  /** The text for tooltip in the create a new task button when mode is upsell */
  'buttons.new.upsell-tooltip': 'Nadogradite za stvaranje zadataka',
  /** The label for the button that will navigate to the next task */
  'buttons.next.tooltip': 'Idi na sljedeći zadatak',
  /** The label for the button that will previous to the next task */
  'buttons.previous.tooltip': 'Idi na prethodni zadatak',

  /** Text for the remove task dialog asking for confirmation of deletion */
  'dialog.remove-task.body': 'Jednom izbrisano, zadatak se ne može povratiti.',
  /** The label for the cancel button on the remove task dialog */
  'dialog.remove-task.buttons.cancel.text': 'Odustani',
  /** The label for the confirmation button on the remove task dialog */
  'dialog.remove-task.buttons.confirm.text': 'Izbriši',
  /** The title for the remove task dialog */
  'dialog.remove-task.title': 'Izbrisati ovaj zadatak?',

  /** The text used as a placeholder for the footer action in a document with a single task */
  'document.footer.open-tasks.placeholder_one': 'Otvori zadatak',
  /** The text used as a placeholder for the footer action in a document with multiple tasks */
  'document.footer.open-tasks.placeholder_other': 'Otvori zadatke',
  /** The label used in the button in the footer action in a document with a single task */
  'document.footer.open-tasks.text_one': '{{count}} otvoren zadatak',
  /** The label used in the button in the footer action in a document with multiple tasks */
  'document.footer.open-tasks.text_other': '{{count}} otvorenih zadataka',

  /** The heading in the tasks sidebar, in the assigned tab, when the user hasn't been assigned to any task*/
  'empty-state.list.assigned.heading': 'Niste dodijeljeni nijednom zadatku',
  /** The text in the tasks sidebar, in the assigned tab, when the user hasn't been assigned to any task*/
  'empty-state.list.assigned.text': 'Kada budete dodijeljeni zadacima, oni će se ovdje prikazati',
  /** The text in the tasks sidebar button any of the empty states is rendered*/
  'empty-state.list.create-new': 'Stvori novi zadatak',
  /** The heading in the tasks sidebar, in the document tab, when the document doesn't have any task*/
  'empty-state.list.document.heading': 'Ovaj dokument još nema zadataka',
  /** The text in the tasks sidebar, in the document tab, when the document doesn't have any task*/
  'empty-state.list.document.text':
    'Kada dokument ima povezane zadatke, oni će se ovdje prikazati.',
  /** The heading in the tasks sidebar, when viewing the document tab, but there is not an active document*/
  'empty-state.list.no-active-document.heading':
    'Otvorite dokument kako biste vidjeli njegov zadatak',
  /** The text in the tasks sidebar, when viewing the document tab, but there is not an active document*/
  'empty-state.list.no-active-document.text':
    'Zadaci na vašem aktivnom dokumentu će se ovdje prikazati.',
  /** The heading in the tasks sidebar, in the subscriber tab, when the user is not subscribed to any task*/
  'empty-state.list.subscribed.heading': 'Niste pretplaćeni ni na jedan zadatak',
  /** The text in the tasks sidebar, in the subscriber tab, when the user is not subscribed to any task*/
  'empty-state.list.subscribed.text':
    'Kada kreirate, mijenjate ili komentirate zadatak, automatski ćete biti pretplaćeni',
  /** The heading in the tasks sidebar, in the assigned tab, under the closed details, when it's empty.*/
  'empty-state.status.list.closed.assigned.heading': 'Nema dovršenih zadataka',
  /** The text in the tasks sidebar, in the assigned tab, under the closed details, when it's empty.*/
  'empty-state.status.list.closed.assigned.text':
    'Vaši zadaci označeni kao dovršeni će se pojaviti ovdje',
  /** The heading in the tasks sidebar, in the document tab, under the closed details, when it's empty.*/
  'empty-state.status.list.closed.document.heading': 'Nema dovršenih zadataka',
  /** The heading in the tasks sidebar, in the subscribed tab, under the closed details, when it's empty.*/
  'empty-state.status.list.closed.subscribed.heading': 'Nema dovršenih zadataka',
  /** The text in the tasks sidebar, in the subscribed tab, under the closed details, when it's empty.*/
  'empty-state.status.list.closed.subscribed.text':
    'Zadaci na koje ste pretplaćeni i označeni kao dovršeni će se pojaviti ovdje',
  /** The heading in the tasks sidebar, in the assigned tab, under the open details, when it's empty.*/
  'empty-state.status.list.open.assigned.heading': 'Sve ste stigli',
  /** The text in the tasks sidebar, in the assigned tab, under the open details, when it's empty.*/
  'empty-state.status.list.open.assigned.text': 'Novi zadaci dodijeljeni vama će se pojaviti ovdje',
  /** The heading in the tasks sidebar, in the document tab, under the open details, when it's empty.*/
  'empty-state.status.list.open.document.heading': 'Nema zadataka na ovom dokumentu',
  /** The heading in the tasks sidebar, in the subscribed tab, under the open details, when it's empty.*/
  'empty-state.status.list.open.subscribed.heading': 'Nema pretplaćenih zadataka',
  /** The text in the tasks sidebar, in the subscribed tab, under the open details, when it's empty.*/
  'empty-state.status.list.open.subscribed.text':
    'Zadaci na koje ste pretplaćeni će se pojaviti ovdje',

  /** Text used in the assignee input when there is no user assigned */
  'form.input.assignee.no-user-assigned.text': 'Nedodijeljeno',
  /** Text used in the assignee input tooltip when there is no user assigned */
  'form.input.assignee.no-user-assigned.tooltip': 'Postavi izvršitelja',
  /** Text used in the assignee input when searching and no users are found */
  'form.input.assignee.search.no-users.text': 'Nema pronađenih korisnika',
  /** Placeholder text used in the search box in the assignee input */
  'form.input.assignee.search.placeholder': 'Odaberite izvršitelja',
  /** Text used in the assignee input when user is not authorized */
  'form.input.assignee.unauthorized.text': 'Neovlašten',
  /** Text used in the assignee input tooltip when there is no user assigned */
  'form.input.assignee.user-assigned.tooltip': 'Promijeni izvršitelja',
  /** Text used in the assignee input when user is not found */
  'form.input.assignee.user-not-found.text': 'Korisnik nije pronađen',
  /** The label used in the create more toggle */
  'form.input.create-more.text': 'Stvori više',
  /** The label used in the date input button tooltip when it's empty */
  'form.input.date.buttons.empty.tooltip': 'Postavi rok',
  /** The label used in the date input to remove the current value */
  'form.input.date.buttons.remove.text': 'Ukloni',
  /** The label used in the date input button tooltip when it has value */
  'form.input.date.buttons.tooltip': 'Promijeni rok',
  /** Placeholder text used in the description input */
  'form.input.description.placeholder': 'Dodajte opis',
  /**  Text used in the tooltip in the status change button  */
  'form.input.status.button.tooltip': 'Promijeni status',
  /** The label used in the target input to remove the current value */
  'form.input.target.buttons.remove.text': 'Ukloni ciljani sadržaj',
  /** The text used in the target input when encountering a schema error */
  'form.input.target.error.schema-not-found': 'Shema nije pronađena',
  /** The placeholder text used in the target input for the search component */
  'form.input.target.search.placeholder': 'Odaberite ciljni dokument',
  /** The placeholder text for the title input */
  'form.input.title.placeholder': 'Naslov zadatka',
  /** The status error message presented when the user does not supply a title */
  'form.status.error.title-required': 'Naslov je obavezan',
  /** The status message upon successful creation of a task */
  'form.status.success': 'Zadatak stvoren',

  /** The text displayed when no tasks are found */
  'list.empty.text': 'Nema zadataka',
  /** The text displayed at the bottom of the tasks list inviting users provide feedback */
  'list.feedback.text':
    'Pomozite nam da se poboljšamo, <Link>podijelite povratne informacije o Zadacima</Link> ',

  /** The label for the copy link menu item */
  'menuitem.copylink.text': 'Kopiraj poveznicu do zadatka',
  /** The label for the delete task menu item */
  'menuitem.delete.text': 'Izbriši zadatak',
  /** The label for the duplicate task menu item */
  'menuitem.duplicate.text': 'Dupliciraj zadatak',
  /** The text for the duplicate task menu item tooltip when mode is upsell */
  'menuitem.duplicate.upsell-tooltip': 'Nadogradite za dupliciranje zadataka',

  /** Fragment used to construct the first entry in the activity log */
  'panel.activity.created-fragment': 'stvorio/la ovaj zadatak',
  /** The title of the activity section of the task */
  'panel.activity.title': 'Aktivnost',
  /** The text used in the activity log when unable to find the user */
  'panel.activity.unknown-user': 'Nepoznati korisnik',
  /** The tooltip for the close button for the task panel */
  'panel.close.tooltip': 'Zatvori bočnu traku',
  /** The placeholder text for the comment text box */
  'panel.comment.placeholder': 'Dodajte komentar...',
  /** The placeholder text for the comment text box when mode is upsell */
  'panel.comment.placeholder.upsell': 'Nadogradite kako biste komentirali zadatke',
  /** The title used in the task panel when showing the create task form */
  'panel.create.title': 'Stvori',
  /** The title used in the drafts pulldown */
  'panel.drafts.title': 'Skice',
  /** The tooltip for the task navigation component */
  'panel.navigation.tooltip': 'Otvori zadatke',
  /** Title of the Tasks panel   */
  'panel.title': 'Zadaci',

  /** Label for the Assigned Tab */
  'tab.assigned.label': 'Dodijeljeno',
  /** Label for the Active Document Tab */
  'tab.document.label': 'Aktivni dokument',
  /** Label for the Subscribed Tab */
  'tab.subscribed.label': 'Pretplaćeno',
})
