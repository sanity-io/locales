import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** The label for the create task action */
  'actions.create.text': 'Creează sarcină nouă',
  /** The label for the open tasks panel action */
  'actions.open.text': 'Sarcini',

  /** The label for the button to create a new task */
  'buttons.create.text': 'Creează sarcină',
  /** The label for the button to discard changes */
  'buttons.discard.text': 'Renunță',
  /** The label for the button to open the draft */
  'buttons.draft.text': 'Schiță',
  /** The label for the button to create a new task */
  'buttons.new.text': 'Sarcină nouă',
  /** The text for tooltip in the create a new task button when mode is upsell */
  'buttons.new.upsell-tooltip': 'Actualizează pentru a crea sarcini',
  /** The label for the button that will navigate to the next task */
  'buttons.next.tooltip': 'Mergi la sarcina următoare',
  /** The label for the button that will previous to the next task */
  'buttons.previous.tooltip': 'Mergi la sarcina anterioară',

  /** Text for the remove task dialog asking for confirmation of deletion */
  'dialog.remove-task.body': 'Odată ștearsă, o sarcină nu poate fi recuperată.',
  /** The label for the cancel button on the remove task dialog */
  'dialog.remove-task.buttons.cancel.text': 'Anulează',
  /** The label for the confirmation button on the remove task dialog */
  'dialog.remove-task.buttons.confirm.text': 'Șterge',
  /** The title for the remove task dialog */
  'dialog.remove-task.title': 'Șterge această sarcină?',

  /** The text used as a placeholder for the footer action in a document with a single task */
  'document.footer.open-tasks.placeholder_one': 'Deschide sarcina',
  /** The label used in the button in the footer action in a document with a single task */
  'document.footer.open-tasks.text_one': '{{count}} sarcină deschisă',

  /** The heading in the tasks sidebar, in the assigned tab, when the user hasn't been assigned to any task*/
  'empty-state.list.assigned.heading': 'Nu ți-au fost atribuite sarcini',
  /** The text in the tasks sidebar, in the assigned tab, when the user hasn't been assigned to any task*/
  'empty-state.list.assigned.text': 'Odată ce ți se atribuie sarcini, acestea vor apărea aici',
  /** The text in the tasks sidebar button any of the empty states is rendered*/
  'empty-state.list.create-new': 'Creează sarcină nouă',
  /** The heading in the tasks sidebar, in the document tab, when the document doesn't have any task*/
  'empty-state.list.document.heading': 'Acest document nu are încă sarcini',
  /** The text in the tasks sidebar, in the document tab, when the document doesn't have any task*/
  'empty-state.list.document.text':
    'Odată ce un document are sarcini conectate, acestea vor fi afișate aici.',
  /** The heading in the tasks sidebar, when viewing the document tab, but there is not an active document*/
  'empty-state.list.no-active-document.heading':
    'Deschide un document pentru a vedea sarcinile sale',
  /** The text in the tasks sidebar, when viewing the document tab, but there is not an active document*/
  'empty-state.list.no-active-document.text':
    'Sarcinile pe documentul tău activ vor fi afișate aici.',
  /** The heading in the tasks sidebar, in the subscriber tab, when the user is not subscribed to any task*/
  'empty-state.list.subscribed.heading': 'Nu te-ai abonat la nicio sarcină',
  /** The text in the tasks sidebar, in the subscriber tab, when the user is not subscribed to any task*/
  'empty-state.list.subscribed.text':
    'Când creezi, modifici sau comentezi la o sarcină vei fi abonat automat',
  /** The heading in the tasks sidebar, in the assigned tab, under the closed details, when it's empty.*/
  'empty-state.status.list.closed.assigned.heading': 'Nicio sarcină completată',
  /** The text in the tasks sidebar, in the assigned tab, under the closed details, when it's empty.*/
  'empty-state.status.list.closed.assigned.text':
    'Sarcinile pe care le-ați marcat ca finalizate vor apărea aici',
  /** The heading in the tasks sidebar, in the document tab, under the closed details, when it's empty.*/
  'empty-state.status.list.closed.document.heading': 'Nicio sarcină completată',
  /** The heading in the tasks sidebar, in the subscribed tab, under the closed details, when it's empty.*/
  'empty-state.status.list.closed.subscribed.heading': 'Nicio sarcină completată',
  /** The text in the tasks sidebar, in the subscribed tab, under the closed details, when it's empty.*/
  'empty-state.status.list.closed.subscribed.text':
    'Sarcinile la care vă abonați și sunt marcate ca finalizate vor apărea aici',
  /** The heading in the tasks sidebar, in the assigned tab, under the open details, when it's empty.*/
  'empty-state.status.list.open.assigned.heading': 'Sunteți la zi',
  /** The text in the tasks sidebar, in the assigned tab, under the open details, when it's empty.*/
  'empty-state.status.list.open.assigned.text': 'Noile sarcini atribuite vouă vor apărea aici',
  /** The heading in the tasks sidebar, in the document tab, under the open details, when it's empty.*/
  'empty-state.status.list.open.document.heading': 'Nicio sarcină pentru acest document',
  /** The heading in the tasks sidebar, in the subscribed tab, under the open details, when it's empty.*/
  'empty-state.status.list.open.subscribed.heading': 'Nicio sarcină la care vă abonați',
  /** The text in the tasks sidebar, in the subscribed tab, under the open details, when it's empty.*/
  'empty-state.status.list.open.subscribed.text': 'Sarcinile la care vă abonați vor apărea aici',

  /** Text used in the assignee input when there is no user assigned */
  'form.input.assignee.no-user-assigned.text': 'Neatribuit',
  /** Text used in the assignee input tooltip when there is no user assigned */
  'form.input.assignee.no-user-assigned.tooltip': 'Setați atribuirea',
  /** Text used in the assignee input when searching and no users are found */
  'form.input.assignee.search.no-users.text': 'Niciun utilizator găsit',
  /** Placeholder text used in the search box in the assignee input */
  'form.input.assignee.search.placeholder': 'Selectați atribuirea',
  /** Text used in the assignee input when user is not authorized */
  'form.input.assignee.unauthorized.text': 'Neautorizat',
  /** Text used in the assignee input tooltip when there is no user assigned */
  'form.input.assignee.user-assigned.tooltip': 'Schimbați atribuirea',
  /** Text used in the assignee input when user is not found */
  'form.input.assignee.user-not-found.text': 'Utilizator negăsit',
  /** The label used in the create more toggle */
  'form.input.create-more.text': 'Creează mai multe',
  /** The label used in the date input button tooltip when it's empty */
  'form.input.date.buttons.empty.tooltip': 'Setați data limită',
  /** The label used in the date input to remove the current value */
  'form.input.date.buttons.remove.text': 'Eliminați',
  /** The label used in the date input button tooltip when it has value */
  'form.input.date.buttons.tooltip': 'Schimbați data limită',
  /** Placeholder text used in the description input */
  'form.input.description.placeholder': 'Adăugați descriere',
  /**  Text used in the tooltip in the status change button  */
  'form.input.status.button.tooltip': 'Schimbați statusul',
  /** The label used in the target input to remove the current value */
  'form.input.target.buttons.remove.text': 'Eliminați conținutul țintă',
  /** The text used in the target input when encountering a schema error */
  'form.input.target.error.schema-not-found': 'Schema nu a fost găsită',
  /** The placeholder text used in the target input for the search component */
  'form.input.target.search.placeholder': 'Selectați documentul țintă',
  /** The placeholder text for the title input */
  'form.input.title.placeholder': 'Titlul sarcinii',
  /** The status error message presented when the user does not supply a title */
  'form.status.error.title-required': 'Titlul este obligatoriu',
  /** The status message upon successful creation of a task */
  'form.status.success': 'Sarcina a fost creată',

  /** The text displayed when no tasks are found */
  'list.empty.text': 'Nicio sarcină',
  /** The text displayed at the bottom of the tasks list inviting users provide feedback */
  'list.feedback.text':
    'Ajutați-ne să ne îmbunătățim, <Link>oferiți feedback despre Sarcini</Link> ',

  /** The label for the copy link menu item */
  'menuitem.copylink.text': 'Copiază linkul sarcinii',
  /** The label for the delete task menu item */
  'menuitem.delete.text': 'Șterge sarcina',
  /** The label for the duplicate task menu item */
  'menuitem.duplicate.text': 'Duplică sarcina',
  /** The text for the duplicate task menu item tooltip when mode is upsell */
  'menuitem.duplicate.upsell-tooltip': 'Actualizează pentru a duplica sarcinile',

  /** Fragment used to construct the first entry in the activity log */
  'panel.activity.created-fragment': 'a creat această sarcină',
  /** The title of the activity section of the task */
  'panel.activity.title': 'Activitate',
  /** The text used in the activity log when unable to find the user */
  'panel.activity.unknown-user': 'Utilizator necunoscut',
  /** The tooltip for the close button for the task panel */
  'panel.close.tooltip': 'Închide bara laterală',
  /** The placeholder text for the comment text box */
  'panel.comment.placeholder': 'Adaugă un comentariu...',
  /** The placeholder text for the comment text box when mode is upsell */
  'panel.comment.placeholder.upsell': 'Actualizează pentru a comenta la sarcini',
  /** The title used in the task panel when showing the create task form */
  'panel.create.title': 'Creează',
  /** The title used in the drafts pulldown */
  'panel.drafts.title': 'Schițe',
  /** The tooltip for the task navigation component */
  'panel.navigation.tooltip': 'Deschide sarcinile',
  /** Title of the Tasks panel   */
  'panel.title': 'Sarcini',

  /** Label for the Assigned Tab */
  'tab.assigned.label': 'Atribuite',
  /** Label for the Active Document Tab */
  'tab.document.label': 'Document activ',
  /** Label for the Subscribed Tab */
  'tab.subscribed.label': 'Abonat',

  /** Tooltip for the tasks navbar icon */
  'toolbar.tooltip': 'Sarcini',
})
