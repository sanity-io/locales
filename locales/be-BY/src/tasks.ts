import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** The label for the create task action */
  'actions.create.text': 'Стварыць новае заданне',
  /** The label for the open tasks panel action */
  'actions.open.text': 'Заданні',

  /** The label for the button to create a new task */
  'buttons.create.text': 'Стварыць заданне',
  /** The label for the button to discard changes */
  'buttons.discard.text': 'Адмяніць',
  /** The label for the button to open the draft */
  'buttons.draft.text': 'Чарнавік',
  /** The label for the button to create a new task */
  'buttons.new.text': 'Новае заданне',
  /** The text for tooltip in the create a new task button when mode is upsell */
  'buttons.new.upsell-tooltip': undefined, // 'Upgrade to create tasks'
  /** The label for the button that will navigate to the next task */
  'buttons.next.tooltip': 'Перайсці да наступнага задання',
  /** The label for the button that will previous to the next task */
  'buttons.previous.tooltip': 'Перайсці да папярэдняга задання',

  /** Text for the remove task dialog asking for confirmation of deletion */
  'dialog.remove-task.body': 'Вы ўпэўненыя, што хочаце выдаліць гэтае заданне?',
  /** The label for the cancel button on the remove task dialog */
  'dialog.remove-task.buttons.cancel.text': 'Адмяніць',
  /** The label for the confirmation button on the remove task dialog */
  'dialog.remove-task.buttons.confirm.text': 'Выдаліць',
  /** The title for the remove task dialog */
  'dialog.remove-task.title': 'Выдаліць заданне',

  /** The text used as a placeholder for the footer action in a document with a single task */
  'document.footer.open-tasks.placeholder_one': 'Адкрыць заданне',
  /** The label used in the button in the footer action in a document with a single task */
  'document.footer.open-tasks.text_one': '{{count}} адкрытае заданне',

  /** The heading in the tasks sidebar, in the assigned tab, when the user hasn't been assigned to any task*/
  'empty-state.list.assigned.heading': 'Вам не прызначана ніякіх заданняў',
  /** The text in the tasks sidebar, in the assigned tab, when the user hasn't been assigned to any task*/
  'empty-state.list.assigned.text': "Як толькі вам будуць прызначаны заданні, яны з'явяцца тут",
  /** The text in the tasks sidebar button any of the empty states is rendered*/
  'empty-state.list.create-new': 'Стварыць новае заданне',
  /** The heading in the tasks sidebar, in the document tab, when the document doesn't have any task*/
  'empty-state.list.document.heading': 'У гэтым дакуменце яшчэ няма заданняў',
  /** The text in the tasks sidebar, in the document tab, when the document doesn't have any task*/
  'empty-state.list.document.text':
    'Як толькі да дакумента будуць дададзеныя заданні, яны будуць паказаны тут.',
  /** The heading in the tasks sidebar, when viewing the document tab, but there is not an active document*/
  'empty-state.list.no-active-document.heading': undefined, // 'Open a document to see it\'s task'
  /** The text in the tasks sidebar, when viewing the document tab, but there is not an active document*/
  'empty-state.list.no-active-document.text': undefined, // 'Tasks on your active document will be shown here.'
  /** The heading in the tasks sidebar, in the subscriber tab, when the user is not subscribed to any task*/
  'empty-state.list.subscribed.heading': 'Вы не падпісаліся на ніякія заданні',
  /** The text in the tasks sidebar, in the subscriber tab, when the user is not subscribed to any task*/
  'empty-state.list.subscribed.text':
    'Калі вы стварыце, зменіце або пракаментуеце заданне, вы аўтаматычна падпішацеся на яго',
  /** The heading in the tasks sidebar, in the assigned tab, under the closed details, when it's empty.*/
  'empty-state.status.list.closed.assigned.heading': 'Няма завершаных заданняў',
  /** The text in the tasks sidebar, in the assigned tab, under the closed details, when it's empty.*/
  'empty-state.status.list.closed.assigned.text':
    'Тут будуць паказаны вашы заданні, адзначаныя як завершаныя',
  /** The heading in the tasks sidebar, in the document tab, under the closed details, when it's empty.*/
  'empty-state.status.list.closed.document.heading': 'Няма завершаных заданняў',
  /** The heading in the tasks sidebar, in the subscribed tab, under the closed details, when it's empty.*/
  'empty-state.status.list.closed.subscribed.heading': 'Няма завершаных задач',
  /** The text in the tasks sidebar, in the subscribed tab, under the closed details, when it's empty.*/
  'empty-state.status.list.closed.subscribed.text':
    'Задачы, на якія вы падпісаны і якія адзначаны як завершаныя, будуць паказаны тут',
  /** The heading in the tasks sidebar, in the assigned tab, under the open details, when it's empty.*/
  'empty-state.status.list.open.assigned.heading': 'Вы ўсё зрабілі',
  /** The text in the tasks sidebar, in the assigned tab, under the open details, when it's empty.*/
  'empty-state.status.list.open.assigned.text':
    'Новыя задачы, прызначаныя вам, будуць паказаны тут',
  /** The heading in the tasks sidebar, in the document tab, under the open details, when it's empty.*/
  'empty-state.status.list.open.document.heading': 'Няма задач па гэтым дакуменце',
  /** The heading in the tasks sidebar, in the subscribed tab, under the open details, when it's empty.*/
  'empty-state.status.list.open.subscribed.heading': 'Няма падпісаных задач',
  /** The text in the tasks sidebar, in the subscribed tab, under the open details, when it's empty.*/
  'empty-state.status.list.open.subscribed.text':
    'Задачы, на якія вы падпісаны, будуць паказаны тут',

  /** Text used in the assignee input when there is no user assigned */
  'form.input.assignee.no-user-assigned.text': 'Не прызначана',
  /** Text used in the assignee input tooltip when there is no user assigned */
  'form.input.assignee.no-user-assigned.tooltip': undefined, // 'Set assignee'
  /** Text used in the assignee input when searching and no users are found */
  'form.input.assignee.search.no-users.text': 'Карыстальнікі не знойдзены',
  /** Placeholder text used in the search box in the assignee input */
  'form.input.assignee.search.placeholder': 'Выберыце імя карыстальніка',
  /** Text used in the assignee input when user is not authorized */
  'form.input.assignee.unauthorized.text': 'Неаўтарызаваны',
  /** Text used in the assignee input tooltip when there is no user assigned */
  'form.input.assignee.user-assigned.tooltip': undefined, // 'Change assignee'
  /** Text used in the assignee input when user is not found */
  'form.input.assignee.user-not-found.text': 'Карыстальнік не знойдзены',
  /** The label used in the create more toggle */
  'form.input.create-more.text': 'Стварыць яшчэ',
  /** The label used in the date input button tooltip when it's empty */
  'form.input.date.buttons.empty.tooltip': undefined, // 'Set due date'
  /** The label used in the date input to remove the current value */
  'form.input.date.buttons.remove.text': 'Выдаліць',
  /** The label used in the date input button tooltip when it has value */
  'form.input.date.buttons.tooltip': undefined, // 'Change due date'
  /** Placeholder text used in the description input */
  'form.input.description.placeholder': 'Дадайце апісанне',
  /**  Text used in the tooltip in the status change button  */
  'form.input.status.button.tooltip': undefined, // 'Change status'
  /** The label used in the target input to remove the current value */
  'form.input.target.buttons.remove.text': 'Выдаліць мэтавы кантэнт',
  /** The text used in the target input when encountering a schema error */
  'form.input.target.error.schema-not-found': 'Схема не знойдзена',
  /** The placeholder text used in the target input for the search component */
  'form.input.target.search.placeholder': 'Выбярыце дакумент',
  /** The placeholder text for the title input */
  'form.input.title.placeholder': 'Назва задачы',
  /** The status error message presented when the user does not supply a title */
  'form.status.error.title-required': 'Патрабуецца назва',
  /** The status message upon successful creation of a task */
  'form.status.success': 'Задача створана',

  /** The text displayed when no tasks are found */
  'list.empty.text': 'Няма задач',
  /** The text displayed at the bottom of the tasks list inviting users provide feedback */
  'list.feedback.text': undefined, // 'Help us improve, <Link>share feedback on Tasks</Link> '

  /** The label for the copy link menu item */
  'menuitem.copylink.text': 'Скапіяваць спасылку на задачу',
  /** The label for the delete task menu item */
  'menuitem.delete.text': 'Выдаліць задачу',
  /** The label for the duplicate task menu item */
  'menuitem.duplicate.text': 'Дубляваць задачу',
  /** The text for the duplicate task menu item tooltip when mode is upsell */
  'menuitem.duplicate.upsell-tooltip': undefined, // 'Upgrade to duplicate tasks'

  /** Fragment used to construct the first entry in the activity log */
  'panel.activity.created-fragment': 'стварыў гэта заданне',
  /** The title of the activity section of the task */
  'panel.activity.title': 'Актыўнасць',
  /** The text used in the activity log when unable to find the user */
  'panel.activity.unknown-user': 'Невядомы карыстальнік',
  /** The tooltip for the close button for the task panel */
  'panel.close.tooltip': 'Зачыніць бакавую панэль',
  /** The placeholder text for the comment text box */
  'panel.comment.placeholder': 'Дадайце каментар...',
  /** The placeholder text for the comment text box when mode is upsell */
  'panel.comment.placeholder.upsell': undefined, // 'Upgrade to comment on tasks'
  /** The title used in the task panel when showing the create task form */
  'panel.create.title': 'Стварыць',
  /** The title used in the drafts pulldown */
  'panel.drafts.title': 'Чарнавікі',
  /** The tooltip for the task navigation component */
  'panel.navigation.tooltip': 'Адкрыць заданні',
  /** Title of the Tasks panel   */
  'panel.title': 'Заданні',

  /** Label for the Assigned Tab */
  'tab.assigned.label': 'Прызначаны',
  /** Label for the Active Document Tab */
  'tab.document.label': 'Актыўны дакумент',
  /** Label for the Subscribed Tab */
  'tab.subscribed.label': 'Падпісаны',
})
