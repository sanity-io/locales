import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** The label for the create task action */
  'actions.create.text': 'Utwórz nowe zadanie',
  /** The label for the open tasks panel action */
  'actions.open.text': 'Zadania',

  /** The label for the button to create a new task */
  'buttons.create.text': 'Utwórz zadanie',
  /** The label for the button to discard changes */
  'buttons.discard.text': 'Odrzuć',
  /** The label for the button to open the draft */
  'buttons.draft.text': 'Szkic',
  /** The label for the button to create a new task */
  'buttons.new.text': 'Nowe zadanie',
  /** The text for tooltip in the create a new task button when mode is upsell */
  'buttons.new.upsell-tooltip': 'Zaktualizuj, aby tworzyć zadania',
  /** The label for the button that will navigate to the next task */
  'buttons.next.tooltip': 'Przejdź do następnego zadania',
  /** The label for the button that will previous to the next task */
  'buttons.previous.tooltip': 'Przejdź do poprzedniego zadania',

  /** Text for the remove task dialog asking for confirmation of deletion */
  'dialog.remove-task.body': 'Po usunięciu zadanie nie może zostać odzyskane.',
  /** The label for the cancel button on the remove task dialog */
  'dialog.remove-task.buttons.cancel.text': 'Anuluj',
  /** The label for the confirmation button on the remove task dialog */
  'dialog.remove-task.buttons.confirm.text': 'Usuń',
  /** The title for the remove task dialog */
  'dialog.remove-task.title': 'Usunąć to zadanie?',

  /** The text used as a placeholder for the footer action in a document with a single task */
  'document.footer.open-tasks.placeholder_one': 'Otwórz zadanie',
  /** The label used in the button in the footer action in a document with a single task */
  'document.footer.open-tasks.text_one': '{{count}} otwarte zadanie',

  /** The heading in the tasks sidebar, in the assigned tab, when the user hasn't been assigned to any task*/
  'empty-state.list.assigned.heading': 'Nie masz przypisanych żadnych zadań',
  /** The text in the tasks sidebar, in the assigned tab, when the user hasn't been assigned to any task*/
  'empty-state.list.assigned.text': 'Gdy zostaniesz przypisany do zadań, pojawią się one tutaj',
  /** The text in the tasks sidebar button any of the empty states is rendered*/
  'empty-state.list.create-new': 'Utwórz nowe zadanie',
  /** The heading in the tasks sidebar, in the document tab, when the document doesn't have any task*/
  'empty-state.list.document.heading': 'Ten dokument nie ma jeszcze żadnych zadań',
  /** The text in the tasks sidebar, in the document tab, when the document doesn't have any task*/
  'empty-state.list.document.text':
    'Gdy dokument będzie miał powiązane zadania, zostaną one tutaj wyświetlone.',
  /** The heading in the tasks sidebar, when viewing the document tab, but there is not an active document*/
  'empty-state.list.no-active-document.heading': 'Otwórz dokument, aby zobaczyć jego zadania',
  /** The text in the tasks sidebar, when viewing the document tab, but there is not an active document*/
  'empty-state.list.no-active-document.text':
    'Zadania z aktywnego dokumentu będą wyświetlane tutaj.',
  /** The heading in the tasks sidebar, in the subscriber tab, when the user is not subscribed to any task*/
  'empty-state.list.subscribed.heading': 'Nie subskrybujesz żadnych zadań',
  /** The text in the tasks sidebar, in the subscriber tab, when the user is not subscribed to any task*/
  'empty-state.list.subscribed.text':
    'Gdy utworzysz, zmodyfikujesz lub skomentujesz zadanie, zostaniesz automatycznie zapisany',
  /** The heading in the tasks sidebar, in the assigned tab, under the closed details, when it's empty.*/
  'empty-state.status.list.closed.assigned.heading': 'Brak zakończonych zadań',
  /** The text in the tasks sidebar, in the assigned tab, under the closed details, when it's empty.*/
  'empty-state.status.list.closed.assigned.text':
    'Twoje zadania oznaczone jako wykonane pojawią się tutaj',
  /** The heading in the tasks sidebar, in the document tab, under the closed details, when it's empty.*/
  'empty-state.status.list.closed.document.heading': 'Brak zakończonych zadań',
  /** The heading in the tasks sidebar, in the subscribed tab, under the closed details, when it's empty.*/
  'empty-state.status.list.closed.subscribed.heading': 'Brak zakończonych zadań',
  /** The text in the tasks sidebar, in the subscribed tab, under the closed details, when it's empty.*/
  'empty-state.status.list.closed.subscribed.text':
    'Zadania, do których jesteś zapisany i oznaczone jako wykonane, pojawią się tutaj',
  /** The heading in the tasks sidebar, in the assigned tab, under the open details, when it's empty.*/
  'empty-state.status.list.open.assigned.heading': 'Jesteś na bieżąco',
  /** The text in the tasks sidebar, in the assigned tab, under the open details, when it's empty.*/
  'empty-state.status.list.open.assigned.text':
    'Nowe zadania przypisane do Ciebie pojawią się tutaj',
  /** The heading in the tasks sidebar, in the document tab, under the open details, when it's empty.*/
  'empty-state.status.list.open.document.heading': 'Brak zadań dla tego dokumentu',
  /** The heading in the tasks sidebar, in the subscribed tab, under the open details, when it's empty.*/
  'empty-state.status.list.open.subscribed.heading': 'Brak zadań, do których jesteś zapisany',
  /** The text in the tasks sidebar, in the subscribed tab, under the open details, when it's empty.*/
  'empty-state.status.list.open.subscribed.text':
    'Zadania, do których jesteś zapisany, pojawią się tutaj',

  /** Text used in the assignee input when there is no user assigned */
  'form.input.assignee.no-user-assigned.text': 'Nieprzypisane',
  /** Text used in the assignee input tooltip when there is no user assigned */
  'form.input.assignee.no-user-assigned.tooltip': 'Ustaw osobę przypisaną',
  /** Text used in the assignee input when searching and no users are found */
  'form.input.assignee.search.no-users.text': 'Nie znaleziono użytkowników',
  /** Placeholder text used in the search box in the assignee input */
  'form.input.assignee.search.placeholder': 'Wybierz osobę przypisaną',
  /** Text used in the assignee input when user is not authorized */
  'form.input.assignee.unauthorized.text': 'Nieautoryzowany',
  /** Text used in the assignee input tooltip when there is no user assigned */
  'form.input.assignee.user-assigned.tooltip': 'Zmień osobę przypisaną',
  /** Text used in the assignee input when user is not found */
  'form.input.assignee.user-not-found.text': 'Użytkownik nie znaleziony',
  /** The label used in the create more toggle */
  'form.input.create-more.text': 'Utwórz więcej',
  /** The label used in the date input button tooltip when it's empty */
  'form.input.date.buttons.empty.tooltip': 'Ustaw termin',
  /** The label used in the date input to remove the current value */
  'form.input.date.buttons.remove.text': 'Usuń',
  /** The label used in the date input button tooltip when it has value */
  'form.input.date.buttons.tooltip': 'Zmień termin',
  /** Placeholder text used in the description input */
  'form.input.description.placeholder': 'Dodaj opis',
  /**  Text used in the tooltip in the status change button  */
  'form.input.status.button.tooltip': 'Zmień status',
  /** The label used in the target input to remove the current value */
  'form.input.target.buttons.remove.text': 'Usuń docelowe treści',
  /** The text used in the target input when encountering a schema error */
  'form.input.target.error.schema-not-found': 'Nie znaleziono schematu',
  /** The placeholder text used in the target input for the search component */
  'form.input.target.search.placeholder': 'Wybierz docelowy dokument',
  /** The placeholder text for the title input */
  'form.input.title.placeholder': 'Tytuł zadania',
  /** The status error message presented when the user does not supply a title */
  'form.status.error.title-required': 'Tytuł jest wymagany',
  /** The status message upon successful creation of a task */
  'form.status.success': 'Zadanie utworzone',

  /** The text displayed when no tasks are found */
  'list.empty.text': 'Brak zadań',
  /** The text displayed at the bottom of the tasks list inviting users provide feedback */
  'list.feedback.text': 'Pomóż nam się poprawić, <Link>udostępnij opinię o Zadaniach</Link>',

  /** The label for the copy link menu item */
  'menuitem.copylink.text': 'Kopiuj link do zadania',
  /** The label for the delete task menu item */
  'menuitem.delete.text': 'Usuń zadanie',
  /** The label for the duplicate task menu item */
  'menuitem.duplicate.text': 'Duplikuj zadanie',
  /** The text for the duplicate task menu item tooltip when mode is upsell */
  'menuitem.duplicate.upsell-tooltip': 'Zaktualizuj, aby duplikować zadania',

  /** Fragment used to construct the first entry in the activity log */
  'panel.activity.created-fragment': 'utworzył to zadanie',
  /** The title of the activity section of the task */
  'panel.activity.title': 'Aktywność',
  /** The text used in the activity log when unable to find the user */
  'panel.activity.unknown-user': 'Nieznany użytkownik',
  /** The tooltip for the close button for the task panel */
  'panel.close.tooltip': 'Zamknij pasek boczny',
  /** The placeholder text for the comment text box */
  'panel.comment.placeholder': 'Dodaj komentarz...',
  /** The placeholder text for the comment text box when mode is upsell */
  'panel.comment.placeholder.upsell': 'Zaktualizuj, aby komentować zadania',
  /** The title used in the task panel when showing the create task form */
  'panel.create.title': 'Utwórz',
  /** The title used in the drafts pulldown */
  'panel.drafts.title': 'Szkice',
  /** The tooltip for the task navigation component */
  'panel.navigation.tooltip': 'Otwórz zadania',
  /** Title of the Tasks panel   */
  'panel.title': 'Zadania',

  /** Label for the Assigned Tab */
  'tab.assigned.label': 'Przypisane',
  /** Label for the Active Document Tab */
  'tab.document.label': 'Aktywny dokument',
  /** Label for the Subscribed Tab */
  'tab.subscribed.label': 'Subskrybowane',
})
