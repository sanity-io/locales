import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** The label for the create task action */
  'actions.create.text': 'Создать новую задачу',
  /** The label for the open tasks panel action */
  'actions.open.text': 'Задачи',

  /** The label for the button to create a new task */
  'buttons.create.text': 'Создать задачу',
  /** The label for the button to discard changes */
  'buttons.discard.text': 'Отменить',
  /** The label for the button to open the draft */
  'buttons.draft.text': 'Черновик',
  /** The label for the button to create a new task */
  'buttons.new.text': 'Новая задача',
  /** The label for the button that will navigate to the next task */
  'buttons.next.tooltip': 'Перейти к следующей задаче',
  /** The label for the button that will previous to the next task */
  'buttons.previous.tooltip': 'Перейти к предыдущей задаче',

  /** Text for the remove task dialog asking for confirmation of deletion */
  'dialog.remove-task.body': 'Вы уверены, что хотите удалить эту задачу?',
  /** Text for the remove task dialog clarifying that deletion is permanent */
  'dialog.remove-task.body2': 'После удаления восстановить её будет невозможно.',
  /** The label for the cancel button on the remove task dialog */
  'dialog.remove-task.buttons.cancel.text': 'Отмена',
  /** The label for the confirmation button on the remove task dialog */
  'dialog.remove-task.buttons.confirm.text': 'Удалить',
  /** The title for the remove task dialog */
  'dialog.remove-task.title': 'Удалить задачу',

  /** The text used as a placeholder for the footer action in a document with a single task */
  'document.footer.open-tasks.placeholder_one': 'Открыть задачу',
  /** The label used in the button in the footer action in a document with a single task */
  'document.footer.open-tasks.text_one': '{{count}} открытая задача',

  'empty-state.list.assigned.heading': 'Вам не назначено никаких задач',
  'empty-state.list.assigned.text': 'Как только вам будут назначены задачи, они появятся здесь',
  'empty-state.list.create-new': 'Создать новую задачу',
  'empty-state.list.document.heading': 'У этого документа пока нет задач',
  'empty-state.list.document.text':
    'Как только к документу будут привязаны задачи, они будут отображены здесь.',
  'empty-state.list.subscribed.heading': 'Вы не подписаны ни на одну задачу',
  'empty-state.list.subscribed.text':
    'Когда вы создаете, изменяете или комментируете задачу, вы автоматически подписываетесь на неё',
  'empty-state.status.list.closed.assigned.heading': 'Нет завершенных задач',
  'empty-state.status.list.closed.assigned.text':
    'Здесь будут показаны ваши задачи, отмеченные как выполненные',
  'empty-state.status.list.closed.document.heading': 'Нет завершенных задач',
  'empty-state.status.list.closed.subscribed.heading': 'Нет завершенных задач',
  'empty-state.status.list.closed.subscribed.text':
    'Задачи, на которые вы подписаны и отмечены как выполненные, появятся здесь',
  'empty-state.status.list.open.assigned.heading': 'Вы все сделали',
  'empty-state.status.list.open.assigned.text': 'Новые задачи, назначенные вам, появятся здесь',
  'empty-state.status.list.open.document.heading': 'Нет задач по этому документу',
  'empty-state.status.list.open.subscribed.heading': 'Нет подписанных задач',
  'empty-state.status.list.open.subscribed.text': 'Задачи, на которые вы подписаны, появятся здесь',

  /** Text used in the assignee input when there is no user assigned */
  'form.input.assignee.no-user-assigned.text': 'Не назначено',
  /** Text used in the assignee input when searching and no users are found */
  'form.input.assignee.search.no-users.text': 'Пользователи не найдены',
  /** Placeholder text used in the search box in the assignee input */
  'form.input.assignee.search.placeholder': 'Выберите имя пользователя',
  /** Text used in the assignee input when user is not authorized */
  'form.input.assignee.unauthorized.text': 'Неавторизован',
  /** Text used in the assignee input when user is not found */
  'form.input.assignee.user-not-found.text': 'Пользователь не найден',
  /** The label used in the create more toggle */
  'form.input.create-more.text': 'Создать еще',
  /** The label used in the date input to remove the current value */
  'form.input.date.buttons.remove.text': 'Удалить',
  /** Placeholder text used in the description input */
  'form.input.description.placeholder': 'Добавить описание',
  /** The label used in the target input to remove the current value */
  'form.input.target.buttons.remove.text': 'Удалить целевой контент',
  /** The text used in the target input when encountering a schema error */
  'form.input.target.error.schema-not-found': 'Схема не найдена',
  /** The placeholder text used in the target input for the search component */
  'form.input.target.search.placeholder': 'Выберите документ',
  /** The placeholder text for the title input */
  'form.input.title.placeholder': 'Название задачи',
  /** The status error message presented when the user does not supply a title */
  'form.status.error.title-required': 'Требуется название',
  /** The status message upon successful creation of a task */
  'form.status.success': 'Задача создана',

  /** The text displayed when no tasks are found */
  'list.empty.text': 'Нет задач',

  /** The label for the copy link menu item */
  'menuitem.copylink.text': 'Скопировать ссылку на задачу',
  /** The label for the delete task menu item */
  'menuitem.delete.text': 'Удалить задачу',
  /** The label for the duplicate task menu item */
  'menuitem.duplicate.text': 'Дублировать задачу',

  /** Fragment used to construct the first entry in the activity log */
  'panel.activity.created-fragment': 'создал эту задачу',
  /** The title of the activity section of the task */
  'panel.activity.title': 'Активность',
  /** The text used in the activity log when unable to find the user */
  'panel.activity.unknown-user': 'Неизвестный пользователь',
  /** The tooltip for the close button for the task panel */
  'panel.close.tooltip': 'Закрыть боковую панель',
  /** The placeholder text for the comment text box */
  'panel.comment.placeholder': 'Добавить комментарий...',
  /** The title used in the task panel when showing the create task form */
  'panel.create.title': 'Создать',
  /** The title used in the drafts pulldown */
  'panel.drafts.title': 'Черновики',
  /** The tooltip for the task navigation component */
  'panel.navigation.tooltip': 'Открыть задачи',
  /** Title of the Tasks panel   */
  'panel.title': 'Задачи',

  /** Label for the Assigned Tab */
  'tab.assigned.label': 'Назначенные',
  /** Label for the Active Document Tab */
  'tab.document.label': 'Активный документ',
  /** Label for the Subscribed Tab */
  'tab.subscribed.label': 'Подписанные',
})
