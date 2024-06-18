import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** The label for the create task action */
  'actions.create.text': 'Stvori novi zadatak',
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
  /** The label for the button that will navigate to the next task */
  'buttons.next.tooltip': 'Idi na sljedeći zadatak',
  /** The label for the button that will previous to the next task */
  'buttons.previous.tooltip': 'Idi na prethodni zadatak',

  /** Text for the remove task dialog asking for confirmation of deletion */
  'dialog.remove-task.body': 'Jeste li sigurni da želite izbrisati ovaj zadatak?',
  /** Text for the remove task dialog clarifying that deletion is permanent */
  'dialog.remove-task.body2': 'Jednom izbrisano, ne može se obnoviti.',
  /** The label for the cancel button on the remove task dialog */
  'dialog.remove-task.buttons.cancel.text': 'Odustani',
  /** The label for the confirmation button on the remove task dialog */
  'dialog.remove-task.buttons.confirm.text': 'Ukloni',
  /** The title for the remove task dialog */
  'dialog.remove-task.title': 'Ukloni zadatak',

  /** The text used as a placeholder for the footer action in a document with a single task */
  'document.footer.open-tasks.placeholder_one': 'Otvori zadatak',
  /** The text used as a placeholder for the footer action in a document with multiple tasks */
  'document.footer.open-tasks.placeholder_other': 'Otvori zadatke',
  /** The label used in the button in the footer action in a document with a single task */
  'document.footer.open-tasks.text_one': '{{count}} otvoren zadatak',
  /** The label used in the button in the footer action in a document with multiple tasks */
  'document.footer.open-tasks.text_other': '{{count}} otvorenih zadataka',

  'empty-state.list.assigned.heading': 'Niste dodijeljeni nijednom zadatku',
  'empty-state.list.assigned.text': 'Kada budete dodijeljeni zadacima, oni će se ovdje prikazati',
  'empty-state.list.create-new': 'Stvori novi zadatak',
  'empty-state.list.document.heading': 'Ovaj dokument još nema nijedan zadatak',
  'empty-state.list.document.text':
    'Kada dokument ima povezane zadatke, oni će se ovdje prikazati.',
  'empty-state.list.subscribed.heading': 'Niste pretplaćeni na nijedan zadatak',
  'empty-state.list.subscribed.text':
    'Kada stvorite, izmijenite ili komentirate zadatak, automatski ćete biti pretplaćeni',
  'empty-state.status.list.closed.assigned.heading': 'Nema dovršenih zadataka',
  'empty-state.status.list.closed.assigned.text':
    'Vaši zadaci označeni kao dovršeni prikazat će se ovdje',
  'empty-state.status.list.closed.document.heading': 'Nema dovršenih zadataka',
  'empty-state.status.list.closed.subscribed.heading': 'Nema dovršenih zadataka',
  'empty-state.status.list.closed.subscribed.text':
    'Zadaci na koje ste pretplaćeni i označeni kao dovršeni prikazat će se ovdje',
  'empty-state.status.list.open.assigned.heading': 'Sve ste stigli',
  'empty-state.status.list.open.assigned.text': 'Novi zadaci dodijeljeni vama prikazat će se ovdje',
  'empty-state.status.list.open.document.heading': 'Nema zadataka na ovom dokumentu',
  'empty-state.status.list.open.subscribed.heading': 'Nema pretplaćenih zadataka',
  'empty-state.status.list.open.subscribed.text':
    'Zadaci na koje ste pretplaćeni prikazat će se ovdje',

  /** Text used in the assignee input when there is no user assigned */
  'form.input.assignee.no-user-assigned.text': 'Nije dodijeljeno',
  /** Text used in the assignee input when searching and no users are found */
  'form.input.assignee.search.no-users.text': 'Nema pronađenih korisnika',
  /** Placeholder text used in the search box in the assignee input */
  'form.input.assignee.search.placeholder': 'Odaberite korisničko ime',
  /** Text used in the assignee input when user is not authorized */
  'form.input.assignee.unauthorized.text': 'Neovlašteno',
  /** Text used in the assignee input when user is not found */
  'form.input.assignee.user-not-found.text': 'Korisnik nije pronađen',
  /** The label used in the create more toggle */
  'form.input.create-more.text': 'Stvori više',
  /** The label used in the date input to remove the current value */
  'form.input.date.buttons.remove.text': 'Ukloni',
  /** Placeholder text used in the description input */
  'form.input.description.placeholder': 'Dodajte opis',
  /** The label used in the target input to remove the current value */
  'form.input.target.buttons.remove.text': 'Ukloni ciljani sadržaj',
  /** The text used in the target input when encountering a schema error */
  'form.input.target.error.schema-not-found': 'Shema nije pronađena',
  /** The placeholder text used in the target input for the search component */
  'form.input.target.search.placeholder': 'Odaberite dokument',
  /** The placeholder text for the title input */
  'form.input.title.placeholder': 'Naslov zadatka',
  /** The status error message presented when the user does not supply a title */
  'form.status.error.title-required': 'Naslov je obavezan',
  /** The status message upon successful creation of a task */
  'form.status.success': 'Zadatak stvoren',

  /** The text displayed when no tasks are found */
  'list.empty.text': 'Nema zadataka',

  /** The label for the copy link menu item */
  'menuitem.copylink.text': 'Kopiraj poveznicu na zadatak',
  /** The label for the delete task menu item */
  'menuitem.delete.text': 'Izbriši zadatak',
  /** The label for the duplicate task menu item */
  'menuitem.duplicate.text': 'Dupliciraj zadatak',

  /** Fragment used to construct the first entry in the activity log */
  'panel.activity.created-fragment': 'stvorio/la je ovaj zadatak',
  /** The title of the activity section of the task */
  'panel.activity.title': 'Aktivnost',
  /** The text used in the activity log when unable to find the user */
  'panel.activity.unknown-user': 'Nepoznati korisnik',
  /** The tooltip for the close button for the task panel */
  'panel.close.tooltip': 'Zatvori bočnu traku',
  /** The placeholder text for the comment text box */
  'panel.comment.placeholder': 'Dodajte komentar...',
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
