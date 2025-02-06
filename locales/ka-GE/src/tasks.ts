import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** The label for the create task action */
  'actions.create.text': 'ახალი დავალების შექმნა',
  /** The label for the open tasks panel action */
  'actions.open.text': 'დავალებები',

  /** The label for the button to create a new task */
  'buttons.create.text': 'დავალების შექმნა',
  /** The label for the button to discard changes */
  'buttons.discard.text': 'გაუქმება',
  /** The label for the button to open the draft */
  'buttons.draft.text': 'დრაფტი',
  /** The label for the button to create a new task */
  'buttons.new.text': 'ახალი დავალება',
  /** The text for tooltip in the create a new task button when mode is upsell */
  'buttons.new.upsell-tooltip': 'განახლება დავალებების შექმნისთვის',
  /** The label for the button that will navigate to the next task */
  'buttons.next.tooltip': 'შემდეგი დავალებისკენ გადასვლა',
  /** The label for the button that will previous to the next task */
  'buttons.previous.tooltip': 'წინა დავალებისკენ გადასვლა',

  /** Text for the remove task dialog asking for confirmation of deletion */
  'dialog.remove-task.body': 'წაშლილი დავალება ვერ აღდგება.',
  /** The label for the cancel button on the remove task dialog */
  'dialog.remove-task.buttons.cancel.text': 'გაუქმება',
  /** The label for the confirmation button on the remove task dialog */
  'dialog.remove-task.buttons.confirm.text': 'წაშლა',
  /** The title for the remove task dialog */
  'dialog.remove-task.title': 'ამ დავალების წაშლა?',

  /** The text used as a placeholder for the footer action in a document with a single task */
  'document.footer.open-tasks.placeholder_one': 'დავალების გახსნა',
  /** The text used as a placeholder for the footer action in a document with multiple tasks */
  'document.footer.open-tasks.placeholder_other': 'დავალებების გახსნა',
  /** The label used in the button in the footer action in a document with a single task */
  'document.footer.open-tasks.text_one': '{{count}} ღია დავალება',
  /** The label used in the button in the footer action in a document with multiple tasks */
  'document.footer.open-tasks.text_other': '{{count}} ღია დავალება',

  /** The heading in the tasks sidebar, in the assigned tab, when the user hasn't been assigned to any task*/
  'empty-state.list.assigned.heading': 'თქვენ ჯერ არ გეკუთვნიათ დავალებები',
  /** The text in the tasks sidebar, in the assigned tab, when the user hasn't been assigned to any task*/
  'empty-state.list.assigned.text': 'როდესაც დაგეკუთვნებათ დავალებები, ისინი აქ გამოჩნდებიან',
  /** The text in the tasks sidebar button any of the empty states is rendered*/
  'empty-state.list.create-new': 'ახალი დავალების შექმნა',
  /** The heading in the tasks sidebar, in the document tab, when the document doesn't have any task*/
  'empty-state.list.document.heading': 'ეს დოკუმენტი ჯერ არ აქვს დავალებები',
  /** The text in the tasks sidebar, in the document tab, when the document doesn't have any task*/
  'empty-state.list.document.text':
    'როდესაც დოკუმენტს ჰქონდეს დაკავშირებული დავალებები, ისინი აქ გამოჩნდებიან.',
  /** The heading in the tasks sidebar, when viewing the document tab, but there is not an active document*/
  'empty-state.list.no-active-document.heading': 'გახსენით დოკუმენტი მისი დავალების ნახვად',
  /** The text in the tasks sidebar, when viewing the document tab, but there is not an active document*/
  'empty-state.list.no-active-document.text':
    'თქვენი აქტიური დოკუმენტის დავალებები აქ გამოჩნდებიან.',
  /** The heading in the tasks sidebar, in the subscriber tab, when the user is not subscribed to any task*/
  'empty-state.list.subscribed.heading': 'თქვენ ჯერ არ გამოგეწერიათ დავალებები',
  /** The text in the tasks sidebar, in the subscriber tab, when the user is not subscribed to any task*/
  'empty-state.list.subscribed.text':
    'როდესაც შექმნით, შეცვლით ან დააკომენტარებთ დავალებას, ავტომატურად გაწერიან მასზე',
  /** The heading in the tasks sidebar, in the assigned tab, under the closed details, when it's empty.*/
  'empty-state.status.list.closed.assigned.heading': 'დასრულებული დავალებები არ არის',
  /** The text in the tasks sidebar, in the assigned tab, under the closed details, when it's empty.*/
  'empty-state.status.list.closed.assigned.text': 'აქ გამოჩნდება თქვენი დასრულებული დავალებები',
  /** The heading in the tasks sidebar, in the document tab, under the closed details, when it's empty.*/
  'empty-state.status.list.closed.document.heading': 'დასრულებული დავალებები არ არის',
  /** The heading in the tasks sidebar, in the subscribed tab, under the closed details, when it's empty.*/
  'empty-state.status.list.closed.subscribed.heading': 'დასრულებული დავალებები არ არის',
  /** The text in the tasks sidebar, in the subscribed tab, under the closed details, when it's empty.*/
  'empty-state.status.list.closed.subscribed.text':
    'აქ გამოჩნდება დასრულებული დავალებები, რომლებზეც გაწერიან',
  /** The heading in the tasks sidebar, in the assigned tab, under the open details, when it's empty.*/
  'empty-state.status.list.open.assigned.heading': 'ყველა დავალება შესრულებულია',
  /** The text in the tasks sidebar, in the assigned tab, under the open details, when it's empty.*/
  'empty-state.status.list.open.assigned.text':
    'აქ გამოჩნდება თქვენთვის მინიჭებული ახალი დავალებები',
  /** The heading in the tasks sidebar, in the document tab, under the open details, when it's empty.*/
  'empty-state.status.list.open.document.heading': 'ამ დოკუმენტზე დავალებები არ არის',
  /** The heading in the tasks sidebar, in the subscribed tab, under the open details, when it's empty.*/
  'empty-state.status.list.open.subscribed.heading': 'გაწერილი დავალებები არ არის',
  /** The text in the tasks sidebar, in the subscribed tab, under the open details, when it's empty.*/
  'empty-state.status.list.open.subscribed.text': 'აქ გამოჩნდება დავალებები, რომლებზეც გაწერიან',

  /** Text used in the assignee input when there is no user assigned */
  'form.input.assignee.no-user-assigned.text': 'დაუმიჯნავი',
  /** Text used in the assignee input tooltip when there is no user assigned */
  'form.input.assignee.no-user-assigned.tooltip': 'მიანიჭეთ პირი',
  /** Text used in the assignee input when searching and no users are found */
  'form.input.assignee.search.no-users.text': 'მომხმარებლები ვერ მოიძებნა',
  /** Placeholder text used in the search box in the assignee input */
  'form.input.assignee.search.placeholder': 'აირჩიეთ პირი',
  /** Text used in the assignee input when user is not authorized */
  'form.input.assignee.unauthorized.text': 'უფლებები არ აქვს',
  /** Text used in the assignee input tooltip when there is no user assigned */
  'form.input.assignee.user-assigned.tooltip': 'შეცვალეთ პირი',
  /** Text used in the assignee input when user is not found */
  'form.input.assignee.user-not-found.text': 'მომხმარებელი ვერ მოიძებნა',
  /** The label used in the create more toggle */
  'form.input.create-more.text': 'შექმენით მეტი',
  /** The label used in the date input button tooltip when it's empty */
  'form.input.date.buttons.empty.tooltip': 'დააყენეთ ვადა',
  /** The label used in the date input to remove the current value */
  'form.input.date.buttons.remove.text': 'წაშლა',
  /** The label used in the date input button tooltip when it has value */
  'form.input.date.buttons.tooltip': 'შეცვალეთ ვადა',
  /** Placeholder text used in the description input */
  'form.input.description.placeholder': 'დაამატეთ აღწერა',
  /**  Text used in the tooltip in the status change button  */
  'form.input.status.button.tooltip': 'შეცვალეთ სტატუსი',
  /** The label used in the target input to remove the current value */
  'form.input.target.buttons.remove.text': 'წაშალეთ მიზნის შინაარსი',
  /** The text used in the target input when encountering a schema error */
  'form.input.target.error.schema-not-found': 'სქემა ვერ მოიძებნა',
  /** The placeholder text used in the target input for the search component */
  'form.input.target.search.placeholder': 'აირჩიეთ სამიზნე დოკუმენტი',
  /** The placeholder text for the title input */
  'form.input.title.placeholder': 'დავალების სათაური',
  /** The status error message presented when the user does not supply a title */
  'form.status.error.title-required': 'სათაურის მითითება საჭიროა',
  /** The status message upon successful creation of a task */
  'form.status.success': 'დავალება შეიქმნა',

  /** The text displayed when no tasks are found */
  'list.empty.text': 'დავალებები არ არის',
  /** The text displayed at the bottom of the tasks list inviting users provide feedback */
  'list.feedback.text':
    'დაგვეხმარეთ გაუმჯობესებაში, <Link>გააზიარეთ კარგი შეფასება დავალებებზე</Link>',

  /** The label for the copy link menu item */
  'menuitem.copylink.text': 'დავალების ბმულის კოპირება',
  /** The label for the delete task menu item */
  'menuitem.delete.text': 'დავალების წაშლა',
  /** The label for the duplicate task menu item */
  'menuitem.duplicate.text': 'დავალების დუბლირება',
  /** The text for the duplicate task menu item tooltip when mode is upsell */
  'menuitem.duplicate.upsell-tooltip': 'გადაიხადეთ დავალების დუბლირების ფუნქციაზე',

  /** Fragment used to construct the first entry in the activity log */
  'panel.activity.created-fragment': 'შექმნა ეს დავალება',
  /** The title of the activity section of the task */
  'panel.activity.title': 'აქტივობა',
  /** The text used in the activity log when unable to find the user */
  'panel.activity.unknown-user': 'უცნობი მომხმარებელი',
  /** The tooltip for the close button for the task panel */
  'panel.close.tooltip': 'დახურეთ გვერდითი პანელი',
  /** The placeholder text for the comment text box */
  'panel.comment.placeholder': 'დაამატეთ კომენტარი...',
  /** The placeholder text for the comment text box when mode is upsell */
  'panel.comment.placeholder.upsell': 'გადაიხადეთ დავალებებზე კომენტარის დამატების ფუნქციაზე',
  /** The title used in the task panel when showing the create task form */
  'panel.create.title': 'შექმნა',
  /** The title used in the drafts pulldown */
  'panel.drafts.title': 'დრაფტები',
  /** The tooltip for the task navigation component */
  'panel.navigation.tooltip': 'გახსენით დავალებები',
  /** Title of the Tasks panel   */
  'panel.title': 'დავალებები',

  /** Label for the Assigned Tab */
  'tab.assigned.label': 'დანიშნული',
  /** Label for the Active Document Tab */
  'tab.document.label': 'აქტიური დოკუმენტი',
  /** Label for the Subscribed Tab */
  'tab.subscribed.label': 'გამოწერილი',

  /** Tooltip for the tasks navbar icon */
  'toolbar.tooltip': undefined, // 'Tasks'
})
