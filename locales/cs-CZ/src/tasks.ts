import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** The label for the create task action */
  'actions.create.text': 'Vytvořit nový úkol',
  /** The label for the open tasks panel action */
  'actions.open.text': 'Úkoly',

  /** The label for the button to create a new task */
  'buttons.create.text': 'Vytvořit úkol',
  /** The label for the button to discard changes */
  'buttons.discard.text': 'Zahodit',
  /** The label for the button to open the draft */
  'buttons.draft.text': 'Koncept',
  /** The label for the button to create a new task */
  'buttons.new.text': 'Nový úkol',
  /** The label for the button that will navigate to the next task */
  'buttons.next.tooltip': 'Přejít na další úkol',
  /** The label for the button that will previous to the next task */
  'buttons.previous.tooltip': 'Přejít na předchozí úkol',

  /** Text for the remove task dialog asking for confirmation of deletion */
  'dialog.remove-task.body': 'Jste si jisti, že chcete smazat tento úkol?',
  /** Text for the remove task dialog clarifying that deletion is permanent */
  'dialog.remove-task.body2': 'Po smazání nelze obnovit.',
  /** The label for the cancel button on the remove task dialog */
  'dialog.remove-task.buttons.cancel.text': 'Zrušit',
  /** The label for the confirmation button on the remove task dialog */
  'dialog.remove-task.buttons.confirm.text': 'Odstranit',
  /** The title for the remove task dialog */
  'dialog.remove-task.title': 'Odstranit úkol',

  /** The text used as a placeholder for the footer action in a document with a single task */
  'document.footer.open-tasks.placeholder_one': 'Otevřít úkol',
  /** The text used as a placeholder for the footer action in a document with multiple tasks */
  'document.footer.open-tasks.placeholder_other': 'Otevřít úkoly',
  /** The label used in the button in the footer action in a document with a single task */
  'document.footer.open-tasks.text_one': '{{count}} otevřený úkol',
  /** The label used in the button in the footer action in a document with multiple tasks */
  'document.footer.open-tasks.text_other': '{{count}} otevřených úkolů',

  'empty-state.list.assigned.heading': 'Nebyly vám přiřazeny žádné úkoly',
  'empty-state.list.assigned.text': 'Jakmile vám budou přiřazeny úkoly, objeví se zde',
  'empty-state.list.create-new': 'Vytvořit nový úkol',
  'empty-state.list.document.heading': 'Tento dokument zatím neobsahuje žádné úkoly',
  'empty-state.list.document.text': 'Jakmile bude dokument spojen s úkoly, zobrazí se zde.',
  'empty-state.list.subscribed.heading': 'Nejste přihlášeni k odběru žádných úkolů',
  'empty-state.list.subscribed.text':
    'Když vytvoříte, upravíte nebo okomentujete úkol, budete automaticky přihlášeni k odběru',
  'empty-state.status.list.closed.assigned.heading': 'Žádné dokončené úkoly',
  'empty-state.status.list.closed.assigned.text': 'Vaše úkoly označené jako hotové se zobrazí zde',
  'empty-state.status.list.closed.document.heading': 'Žádné dokončené úkoly',
  'empty-state.status.list.closed.subscribed.heading': 'Žádné dokončené úkoly',
  'empty-state.status.list.closed.subscribed.text':
    'Úkoly, na které jste přihlášeni a jsou označené jako hotové, se zobrazí zde',
  'empty-state.status.list.open.assigned.heading': 'Jste v pořádku',
  'empty-state.status.list.open.assigned.text': 'Nové úkoly přiřazené vám se zobrazí zde',
  'empty-state.status.list.open.document.heading': 'Žádné úkoly v tomto dokumentu',
  'empty-state.status.list.open.subscribed.heading': 'Žádné sledované úkoly',
  'empty-state.status.list.open.subscribed.text': 'Úkoly, na které jste přihlášeni, se zobrazí zde',

  /** Text used in the assignee input when there is no user assigned */
  'form.input.assignee.no-user-assigned.text': 'Nepřiřazeno',
  /** Text used in the assignee input when searching and no users are found */
  'form.input.assignee.search.no-users.text': 'Nenalezeni žádní uživatelé',
  /** Placeholder text used in the search box in the assignee input */
  'form.input.assignee.search.placeholder': 'Vyberte uživatelské jméno',
  /** Text used in the assignee input when user is not authorized */
  'form.input.assignee.unauthorized.text': 'Neoprávněný',
  /** Text used in the assignee input when user is not found */
  'form.input.assignee.user-not-found.text': 'Uživatel nenalezen',
  /** The label used in the create more toggle */
  'form.input.create-more.text': 'Vytvořit více',
  /** The label used in the date input to remove the current value */
  'form.input.date.buttons.remove.text': 'Odstranit',
  /** Placeholder text used in the description input */
  'form.input.description.placeholder': 'Přidat popis',
  /** The label used in the target input to remove the current value */
  'form.input.target.buttons.remove.text': 'Odstranit cílový obsah',
  /** The text used in the target input when encountering a schema error */
  'form.input.target.error.schema-not-found': 'Schéma nenalezeno',
  /** The placeholder text used in the target input for the search component */
  'form.input.target.search.placeholder': 'Vyberte dokument',
  /** The placeholder text for the title input */
  'form.input.title.placeholder': 'Název úkolu',
  /** The status error message presented when the user does not supply a title */
  'form.status.error.title-required': 'Název je vyžadován',
  /** The status message upon successful creation of a task */
  'form.status.success': 'Úkol vytvořen',

  /** The text displayed when no tasks are found */
  'list.empty.text': 'Žádné úkoly',

  /** The label for the copy link menu item */
  'menuitem.copylink.text': 'Kopírovat odkaz na úkol',
  /** The label for the delete task menu item */
  'menuitem.delete.text': 'Smazat úkol',
  /** The label for the duplicate task menu item */
  'menuitem.duplicate.text': 'Duplikovat úkol',

  /** Fragment used to construct the first entry in the activity log */
  'panel.activity.created-fragment': 'vytvořil tento úkol',
  /** The title of the activity section of the task */
  'panel.activity.title': 'Aktivita',
  /** The text used in the activity log when unable to find the user */
  'panel.activity.unknown-user': 'Neznámý uživatel',
  /** The tooltip for the close button for the task panel */
  'panel.close.tooltip': 'Zavřít postranní panel',
  /** The placeholder text for the comment text box */
  'panel.comment.placeholder': 'Přidat komentář...',
  /** The title used in the task panel when showing the create task form */
  'panel.create.title': 'Vytvořit',
  /** The title used in the drafts pulldown */
  'panel.drafts.title': 'Koncepty',
  /** The tooltip for the task navigation component */
  'panel.navigation.tooltip': 'Otevřít úkoly',
  /** Title of the Tasks panel   */
  'panel.title': 'Úkoly',

  /** Label for the Assigned Tab */
  'tab.assigned.label': 'Přiřazeno',
  /** Label for the Active Document Tab */
  'tab.document.label': 'Aktivní dokument',
  /** Label for the Subscribed Tab */
  'tab.subscribed.label': 'Přihlášeno',
})
