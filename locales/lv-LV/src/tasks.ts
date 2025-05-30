import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** The label for the create task action */
  'actions.create.text': 'Izveidot jaunu uzdevumu',
  /** The label for the open tasks panel action */
  'actions.open.text': 'Uzdevumi',

  /** The label for the button to create a new task */
  'buttons.create.text': 'Izveidot uzdevumu',
  /** The label for the button to discard changes */
  'buttons.discard.text': 'Atmest',
  /** The label for the button to open the draft */
  'buttons.draft.text': 'Melnraksts',
  /** The label for the button to create a new task */
  'buttons.new.text': 'Jauns uzdevums',
  /** The text for tooltip in the create a new task button when mode is upsell */
  'buttons.new.upsell-tooltip': 'Jauniniet, lai izveidotu uzdevumus',
  /** The label for the button that will navigate to the next task */
  'buttons.next.tooltip': 'Doties uz nākamo uzdevumu',
  /** The label for the button that will previous to the next task */
  'buttons.previous.tooltip': 'Doties uz iepriekšējo uzdevumu',

  /** Text for the remove task dialog asking for confirmation of deletion */
  'dialog.remove-task.body': 'Reizi dzēsts, uzdevumu nevar atgūt.',
  /** The label for the cancel button on the remove task dialog */
  'dialog.remove-task.buttons.cancel.text': 'Atcelt',
  /** The label for the confirmation button on the remove task dialog */
  'dialog.remove-task.buttons.confirm.text': 'Dzēst',
  /** The title for the remove task dialog */
  'dialog.remove-task.title': 'Dzēst šo uzdevumu?',

  /** The text used as a placeholder for the footer action in a document with a single task */
  'document.footer.open-tasks.placeholder_one': 'Atvērt uzdevumu',
  /** The text used as a placeholder for the footer action in a document with multiple tasks */
  'document.footer.open-tasks.placeholder_other': 'Atvērt uzdevumus',
  /** The label used in the button in the footer action in a document with a single task */
  'document.footer.open-tasks.text_one': '{{count}} atvērts uzdevums',
  /** The label used in the button in the footer action in a document with multiple tasks */
  'document.footer.open-tasks.text_other': '{{count}} atvērti uzdevumi',

  /** The heading in the tasks sidebar, in the assigned tab, when the user hasn't been assigned to any task*/
  'empty-state.list.assigned.heading': 'Jums nav piešķirtu uzdevumu',
  /** The text in the tasks sidebar, in the assigned tab, when the user hasn't been assigned to any task*/
  'empty-state.list.assigned.text': 'Kad jums tiks piešķirti uzdevumi, tie parādīsies šeit',
  /** The text in the tasks sidebar button any of the empty states is rendered*/
  'empty-state.list.create-new': 'Izveidot jaunu uzdevumu',
  /** The heading in the tasks sidebar, in the document tab, when the document doesn't have any task*/
  'empty-state.list.document.heading': 'Šim dokumentam vēl nav uzdevumu',
  /** The text in the tasks sidebar, in the document tab, when the document doesn't have any task*/
  'empty-state.list.document.text': 'Kad dokumentam būs saistīti uzdevumi, tie tiks parādīti šeit.',
  /** The heading in the tasks sidebar, when viewing the document tab, but there is not an active document*/
  'empty-state.list.no-active-document.heading': 'Atveriet dokumentu, lai redzētu tā uzdevumu',
  /** The text in the tasks sidebar, when viewing the document tab, but there is not an active document*/
  'empty-state.list.no-active-document.text': 'Jūsu aktīvā dokumenta uzdevumi tiks parādīti šeit.',
  /** The heading in the tasks sidebar, in the subscriber tab, when the user is not subscribed to any task*/
  'empty-state.list.subscribed.heading': 'Jūs neesat abonējis nevienu uzdevumu',
  /** The text in the tasks sidebar, in the subscriber tab, when the user is not subscribed to any task*/
  'empty-state.list.subscribed.text':
    'Kad izveidosiet, modificēsiet vai komentēsiet uzdevumu, jūs automātiski tiksiet abonēts',
  /** The heading in the tasks sidebar, in the assigned tab, under the closed details, when it's empty.*/
  'empty-state.status.list.closed.assigned.heading': 'Nav pabeigtu uzdevumu',
  /** The text in the tasks sidebar, in the assigned tab, under the closed details, when it's empty.*/
  'empty-state.status.list.closed.assigned.text':
    'Te parādīsies jūsu kā izpildīti atzīmētie uzdevumi',
  /** The heading in the tasks sidebar, in the document tab, under the closed details, when it's empty.*/
  'empty-state.status.list.closed.document.heading': 'Nav pabeigtu uzdevumu',
  /** The heading in the tasks sidebar, in the subscribed tab, under the closed details, when it's empty.*/
  'empty-state.status.list.closed.subscribed.heading': 'Nav pabeigtu uzdevumu',
  /** The text in the tasks sidebar, in the subscribed tab, under the closed details, when it's empty.*/
  'empty-state.status.list.closed.subscribed.text':
    'Te parādīsies uzdevumi, kurus esat abonējis un kas atzīmēti kā izpildīti',
  /** The heading in the tasks sidebar, in the assigned tab, under the open details, when it's empty.*/
  'empty-state.status.list.open.assigned.heading': 'Jūs esat pilnībā atjaunināts',
  /** The text in the tasks sidebar, in the assigned tab, under the open details, when it's empty.*/
  'empty-state.status.list.open.assigned.text':
    'Te parādīsies jauni uzdevumi, kas jums ir piešķirti',
  /** The heading in the tasks sidebar, in the document tab, under the open details, when it's empty.*/
  'empty-state.status.list.open.document.heading': 'Šim dokumentam nav uzdevumu',
  /** The heading in the tasks sidebar, in the subscribed tab, under the open details, when it's empty.*/
  'empty-state.status.list.open.subscribed.heading': 'Nav abonētu uzdevumu',
  /** The text in the tasks sidebar, in the subscribed tab, under the open details, when it's empty.*/
  'empty-state.status.list.open.subscribed.text': 'Te parādīsies uzdevumi, kurus esat abonējis',

  /** Text used in the assignee input when there is no user assigned */
  'form.input.assignee.no-user-assigned.text': 'Nepiešķirts',
  /** Text used in the assignee input tooltip when there is no user assigned */
  'form.input.assignee.no-user-assigned.tooltip': 'Iestatīt izpildītāju',
  /** Text used in the assignee input when searching and no users are found */
  'form.input.assignee.search.no-users.text': 'Lietotāji nav atrasti',
  /** Placeholder text used in the search box in the assignee input */
  'form.input.assignee.search.placeholder': 'Izvēlēties izpildītāju',
  /** Text used in the assignee input when user is not authorized */
  'form.input.assignee.unauthorized.text': 'Neautorizēts',
  /** Text used in the assignee input tooltip when there is no user assigned */
  'form.input.assignee.user-assigned.tooltip': 'Mainīt izpildītāju',
  /** Text used in the assignee input when user is not found */
  'form.input.assignee.user-not-found.text': 'Lietotājs nav atrasts',
  /** The label used in the create more toggle */
  'form.input.create-more.text': 'Izveidot vairāk',
  /** The label used in the date input button tooltip when it's empty */
  'form.input.date.buttons.empty.tooltip': 'Iestatīt izpildes termiņu',
  /** The label used in the date input to remove the current value */
  'form.input.date.buttons.remove.text': 'Noņemt',
  /** The label used in the date input button tooltip when it has value */
  'form.input.date.buttons.tooltip': 'Mainīt izpildes termiņu',
  /** Placeholder text used in the description input */
  'form.input.description.placeholder': 'Pievienot aprakstu',
  /**  Text used in the tooltip in the status change button  */
  'form.input.status.button.tooltip': 'Mainīt statusu',
  /** The label used in the target input to remove the current value */
  'form.input.target.buttons.remove.text': 'Noņemt mērķa saturu',
  /** The text used in the target input when encountering a schema error */
  'form.input.target.error.schema-not-found': 'Shēma nav atrasta',
  /** The placeholder text used in the target input for the search component */
  'form.input.target.search.placeholder': 'Izvēlieties mērķa dokumentu',
  /** The placeholder text for the title input */
  'form.input.title.placeholder': 'Uzdevuma nosaukums',
  /** The status error message presented when the user does not supply a title */
  'form.status.error.title-required': 'Nosaukums ir obligāts',
  /** The status message upon successful creation of a task */
  'form.status.success': 'Uzdevums izveidots',

  /** The text displayed when no tasks are found */
  'list.empty.text': 'Nav uzdevumu',
  /** The text displayed at the bottom of the tasks list inviting users provide feedback */
  'list.feedback.text':
    'Palīdziet mums uzlaboties, <Link>dalieties ar atsauksmēm par Uzdevumiem</Link> ',

  /** The label for the copy link menu item */
  'menuitem.copylink.text': 'Kopēt saiti uz uzdevumu',
  /** The label for the delete task menu item */
  'menuitem.delete.text': 'Dzēst uzdevumu',
  /** The label for the duplicate task menu item */
  'menuitem.duplicate.text': 'Dublēt uzdevumu',
  /** The text for the duplicate task menu item tooltip when mode is upsell */
  'menuitem.duplicate.upsell-tooltip': 'Jauniniet, lai dublētu uzdevumus',

  /** Fragment used to construct the first entry in the activity log */
  'panel.activity.created-fragment': 'izveidoja šo uzdevumu',
  /** The title of the activity section of the task */
  'panel.activity.title': 'Aktivitāte',
  /** The text used in the activity log when unable to find the user */
  'panel.activity.unknown-user': 'Nezināms lietotājs',
  /** The tooltip for the close button for the task panel */
  'panel.close.tooltip': 'Aizvērt sānjoslu',
  /** The placeholder text for the comment text box */
  'panel.comment.placeholder': 'Pievienot komentāru...',
  /** The placeholder text for the comment text box when mode is upsell */
  'panel.comment.placeholder.upsell': 'Jauniniet, lai komentētu uzdevumus',
  /** The title used in the task panel when showing the create task form */
  'panel.create.title': 'Izveidot',
  /** The title used in the drafts pulldown */
  'panel.drafts.title': 'Melnraksti',
  /** The tooltip for the task navigation component */
  'panel.navigation.tooltip': 'Atvērt uzdevumus',
  /** Title of the Tasks panel   */
  'panel.title': 'Uzdevumi',

  /** Label for the Assigned Tab */
  'tab.assigned.label': 'Piešķirts',
  /** Label for the Active Document Tab */
  'tab.document.label': 'Aktīvs Dokuments',
  /** Label for the Subscribed Tab */
  'tab.subscribed.label': 'Abonēts',

  /** Tooltip for the tasks navbar icon */
  'toolbar.tooltip': 'Uzdevumi',
})
