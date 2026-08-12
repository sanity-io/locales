import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** The label for the create task action */
  'actions.create.text': 'Створити нове завдання',
  /** The label for the open tasks panel action */
  'actions.open.text': 'Завдання',

  /** The label for the button to create a new task */
  'buttons.create.text': 'Створити завдання',
  /** The label for the button to discard changes */
  'buttons.discard.text': 'Скасувати',
  /** The label for the button to open the draft */
  'buttons.draft.text': 'Чернетка',
  /** The label for the button to create a new task */
  'buttons.new.text': 'Нове завдання',
  /** The text for tooltip in the create a new task button when mode is upsell */
  'buttons.new.upsell-tooltip': 'Оновіться, щоб створювати завдання',
  /** The label for the button that will navigate to the next task */
  'buttons.next.tooltip': 'Перейти до наступного завдання',
  /** The label for the button that will previous to the next task */
  'buttons.previous.tooltip': 'Перейти до попереднього завдання',

  /** Text for the remove task dialog asking for confirmation of deletion */
  'dialog.remove-task.body': 'Ви впевнені, що хочете видалити це завдання?',
  /** The label for the cancel button on the remove task dialog */
  'dialog.remove-task.buttons.cancel.text': 'Скасувати',
  /** The label for the confirmation button on the remove task dialog */
  'dialog.remove-task.buttons.confirm.text': 'Видалити',
  /** The title for the remove task dialog */
  'dialog.remove-task.title': 'Видалити завдання',

  /** The text used as a placeholder for the footer action in a document with a single task */
  'document.footer.open-tasks.placeholder_one': 'Відкрити завдання',
  /** The label used in the button in the footer action in a document with a single task */
  'document.footer.open-tasks.text_one': '{{count}} відкрите завдання',

  /** The heading in the tasks sidebar, in the assigned tab, when the user hasn't been assigned to any task*/
  'empty-state.list.assigned.heading': 'Вам ще не призначено жодного завдання',
  /** The text in the tasks sidebar, in the assigned tab, when the user hasn't been assigned to any task*/
  'empty-state.list.assigned.text': "Як тільки вам будуть призначені завдання, вони з'являться тут",
  /** The text in the tasks sidebar button any of the empty states is rendered*/
  'empty-state.list.create-new': 'Створити нове завдання',
  /** The heading in the tasks sidebar, in the document tab, when the document doesn't have any task*/
  'empty-state.list.document.heading': 'У цього документа ще немає завдань',
  /** The text in the tasks sidebar, in the document tab, when the document doesn't have any task*/
  'empty-state.list.document.text':
    'Як тільки до документа будуть приєднані завдання, вони будуть показані тут.',
  /** The heading in the tasks sidebar, when viewing the document tab, but there is not an active document*/
  'empty-state.list.no-active-document.heading': 'Відкрийте документ, щоб побачити його завдання',
  /** The text in the tasks sidebar, when viewing the document tab, but there is not an active document*/
  'empty-state.list.no-active-document.text':
    'Завдання у вашому активному документі будуть показані тут.',
  /** The heading in the tasks sidebar, in the subscriber tab, when the user is not subscribed to any task*/
  'empty-state.list.subscribed.heading': 'Ви ще не підписалися на жодне завдання',
  /** The text in the tasks sidebar, in the subscriber tab, when the user is not subscribed to any task*/
  'empty-state.list.subscribed.text':
    'Коли ви створюєте, змінюєте або коментуєте завдання, ви автоматично підписуєтесь на нього',
  /** The heading in the tasks sidebar, in the assigned tab, under the closed details, when it's empty.*/
  'empty-state.status.list.closed.assigned.heading': 'Немає виконаних завдань',
  /** The text in the tasks sidebar, in the assigned tab, under the closed details, when it's empty.*/
  'empty-state.status.list.closed.assigned.text':
    'Тут будуть показані ваші завдання, позначені як виконані',
  /** The heading in the tasks sidebar, in the document tab, under the closed details, when it's empty.*/
  'empty-state.status.list.closed.document.heading': 'Немає виконаних завдань',
  /** The heading in the tasks sidebar, in the subscribed tab, under the closed details, when it's empty.*/
  'empty-state.status.list.closed.subscribed.heading': 'Немає завершених завдань',
  /** The text in the tasks sidebar, in the subscribed tab, under the closed details, when it's empty.*/
  'empty-state.status.list.closed.subscribed.text':
    "Завдання, на які ви підписалися та які відмічені як виконані, з'являться тут",
  /** The heading in the tasks sidebar, in the assigned tab, under the open details, when it's empty.*/
  'empty-state.status.list.open.assigned.heading': 'Ви виконали всі завдання',
  /** The text in the tasks sidebar, in the assigned tab, under the open details, when it's empty.*/
  'empty-state.status.list.open.assigned.text': "Нові завдання, призначені вам, з'являться тут",
  /** The heading in the tasks sidebar, in the document tab, under the open details, when it's empty.*/
  'empty-state.status.list.open.document.heading': 'Немає завдань у цьому документі',
  /** The heading in the tasks sidebar, in the subscribed tab, under the open details, when it's empty.*/
  'empty-state.status.list.open.subscribed.heading': 'Немає підписаних завдань',
  /** The text in the tasks sidebar, in the subscribed tab, under the open details, when it's empty.*/
  'empty-state.status.list.open.subscribed.text': "Завдання, на які ви підписалися, з'являться тут",

  /** Text used in the assignee input when there is no user assigned */
  'form.input.assignee.no-user-assigned.text': 'Не призначено',
  /** Text used in the assignee input tooltip when there is no user assigned */
  'form.input.assignee.no-user-assigned.tooltip': 'Встановити виконавця',
  /** Text used in the assignee input when searching and no users are found */
  'form.input.assignee.search.no-users.text': 'Користувачів не знайдено',
  /** Placeholder text used in the search box in the assignee input */
  'form.input.assignee.search.placeholder': "Виберіть ім'я користувача",
  /** Text used in the assignee input when user is not authorized */
  'form.input.assignee.unauthorized.text': 'Неавторизовано',
  /** Text used in the assignee input tooltip when there is no user assigned */
  'form.input.assignee.user-assigned.tooltip': 'Змінити виконавця',
  /** Text used in the assignee input when user is not found */
  'form.input.assignee.user-not-found.text': 'Користувача не знайдено',
  /** The label used in the create more toggle */
  'form.input.create-more.text': 'Створити ще',
  /** The label used in the date input button tooltip when it's empty */
  'form.input.date.buttons.empty.tooltip': 'Встановити кінцевий термін',
  /** The label used in the date input to remove the current value */
  'form.input.date.buttons.remove.text': 'Видалити',
  /** The label used in the date input button tooltip when it has value */
  'form.input.date.buttons.tooltip': 'Змінити кінцевий термін',
  /** Placeholder text used in the description input */
  'form.input.description.placeholder': 'Додати опис',
  /**  Text used in the tooltip in the status change button  */
  'form.input.status.button.tooltip': 'Змінити статус',
  /** The label used in the target input to remove the current value */
  'form.input.target.buttons.remove.text': 'Видалити цільовий контент',
  /** The text used in the target input when encountering a schema error */
  'form.input.target.error.schema-not-found': 'Схему не знайдено',
  /** The placeholder text used in the target input for the search component */
  'form.input.target.search.placeholder': 'Виберіть документ',
  /** The placeholder text for the title input */
  'form.input.title.placeholder': 'Назва завдання',
  /** The status error message presented when the user does not supply a title */
  'form.status.error.title-required': "Назва обов'язкова",
  /** The status message upon successful creation of a task */
  'form.status.success': 'Завдання створено',

  /** The text displayed when no tasks are found */
  'list.empty.text': 'Немає завдань',
  /** The text displayed at the bottom of the tasks list inviting users provide feedback */
  'list.feedback.text': 'Допоможіть нам стати краще, <Link>поділіться відгуком про Завдання</Link>',

  /** The label for the copy link menu item */
  'menuitem.copylink.text': 'Скопіювати посилання на завдання',
  /** The label for the delete task menu item */
  'menuitem.delete.text': 'Видалити завдання',
  /** The label for the duplicate task menu item */
  'menuitem.duplicate.text': 'Дублювати завдання',
  /** The text for the duplicate task menu item tooltip when mode is upsell */
  'menuitem.duplicate.upsell-tooltip': 'Оновіться, щоб дублювати завдання',

  /** Fragment used to construct the first entry in the activity log */
  'panel.activity.created-fragment': 'створив це завдання',
  /** The title of the activity section of the task */
  'panel.activity.title': 'Активність',
  /** The text used in the activity log when unable to find the user */
  'panel.activity.unknown-user': 'Невідомий користувач',
  /** The tooltip for the close button for the task panel */
  'panel.close.tooltip': 'Закрити бічну панель',
  /** The placeholder text for the comment text box */
  'panel.comment.placeholder': 'Додати коментар...',
  /** The placeholder text for the comment text box when mode is upsell */
  'panel.comment.placeholder.upsell': 'Оновіться, щоб коментувати завдання',
  /** The title used in the task panel when showing the create task form */
  'panel.create.title': 'Створити',
  /** The title used in the drafts pulldown */
  'panel.drafts.title': 'Чернетки',
  /** The tooltip for the task navigation component */
  'panel.navigation.tooltip': 'Відкрити завдання',
  /** Title of the Tasks panel   */
  'panel.title': 'Завдання',

  /** Label for the Assigned Tab */
  'tab.assigned.label': 'Призначені',
  /** Label for the Active Document Tab */
  'tab.document.label': 'Активний документ',
  /** Label for the Subscribed Tab */
  'tab.subscribed.label': 'Підписані',

  /** Tooltip for the tasks navbar icon */
  'toolbar.tooltip': 'Завдання',
})
