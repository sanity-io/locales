import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** The label for the create task action */
  'actions.create.text': 'Crea una nova tasca',
  /** The label for the open tasks panel action */
  'actions.open.text': 'Tasques',

  /** The label for the button to create a new task */
  'buttons.create.text': 'Crea Tasca',
  /** The label for the button to discard changes */
  'buttons.discard.text': 'Descarta',
  /** The label for the button to open the draft */
  'buttons.draft.text': 'Esborrany',
  /** The label for the button to create a new task */
  'buttons.new.text': 'Nova tasca',
  /** The text for tooltip in the create a new task button when mode is upsell */
  'buttons.new.upsell-tooltip': 'Actualitza per crear tasques',
  /** The label for the button that will navigate to the next task */
  'buttons.next.tooltip': 'Vés a la següent tasca',
  /** The label for the button that will previous to the next task */
  'buttons.previous.tooltip': 'Vés a la tasca anterior',

  /** Text for the remove task dialog asking for confirmation of deletion */
  'dialog.remove-task.body': 'Un cop eliminada, una tasca no es pot recuperar.',
  /** The label for the cancel button on the remove task dialog */
  'dialog.remove-task.buttons.cancel.text': 'Cancel·la',
  /** The label for the confirmation button on the remove task dialog */
  'dialog.remove-task.buttons.confirm.text': 'Elimina',
  /** The title for the remove task dialog */
  'dialog.remove-task.title': 'Vols eliminar aquesta tasca?',

  /** The text used as a placeholder for the footer action in a document with a single task */
  'document.footer.open-tasks.placeholder_one': 'Obre tasca',
  /** The text used as a placeholder for the footer action in a document with multiple tasks */
  'document.footer.open-tasks.placeholder_other': 'Obre tasques',
  /** The label used in the button in the footer action in a document with a single task */
  'document.footer.open-tasks.text_one': '{{count}} tasca oberta',
  /** The label used in the button in the footer action in a document with multiple tasks */
  'document.footer.open-tasks.text_other': '{{count}} tasques obertes',

  /** The heading in the tasks sidebar, in the assigned tab, when the user hasn't been assigned to any task*/
  'empty-state.list.assigned.heading': "No t'han assignat cap tasca",
  /** The text in the tasks sidebar, in the assigned tab, when the user hasn't been assigned to any task*/
  'empty-state.list.assigned.text': "Un cop t'assignin tasques, apareixeran aquí",
  /** The text in the tasks sidebar button any of the empty states is rendered*/
  'empty-state.list.create-new': 'Crea una nova tasca',
  /** The heading in the tasks sidebar, in the document tab, when the document doesn't have any task*/
  'empty-state.list.document.heading': 'Aquest document encara no té cap tasca',
  /** The text in the tasks sidebar, in the document tab, when the document doesn't have any task*/
  'empty-state.list.document.text':
    'Un cop un document tingui tasques connectades, es mostraran aquí.',
  /** The heading in the tasks sidebar, when viewing the document tab, but there is not an active document*/
  'empty-state.list.no-active-document.heading': 'Obre un document per veure la seva tasca',
  /** The text in the tasks sidebar, when viewing the document tab, but there is not an active document*/
  'empty-state.list.no-active-document.text':
    'Les tasques del teu document actiu es mostraran aquí.',
  /** The heading in the tasks sidebar, in the subscriber tab, when the user is not subscribed to any task*/
  'empty-state.list.subscribed.heading': "No t'has subscrit a cap tasca",
  /** The text in the tasks sidebar, in the subscriber tab, when the user is not subscribed to any task*/
  'empty-state.list.subscribed.text':
    'Quan creïs, modifiquis o comenteu una tasca, us hi subscriureu automàticament',
  /** The heading in the tasks sidebar, in the assigned tab, under the closed details, when it's empty.*/
  'empty-state.status.list.closed.assigned.heading': 'Cap tasca completada',
  /** The text in the tasks sidebar, in the assigned tab, under the closed details, when it's empty.*/
  'empty-state.status.list.closed.assigned.text':
    'Les vostres tasques marcades com a fetes apareixeran aquí',
  /** The heading in the tasks sidebar, in the document tab, under the closed details, when it's empty.*/
  'empty-state.status.list.closed.document.heading': 'Cap tasca completada',
  /** The heading in the tasks sidebar, in the subscribed tab, under the closed details, when it's empty.*/
  'empty-state.status.list.closed.subscribed.heading': 'Cap tasca completada',
  /** The text in the tasks sidebar, in the subscribed tab, under the closed details, when it's empty.*/
  'empty-state.status.list.closed.subscribed.text':
    'Les tasques a les quals us subscriviu marcades com a fetes apareixeran aquí',
  /** The heading in the tasks sidebar, in the assigned tab, under the open details, when it's empty.*/
  'empty-state.status.list.open.assigned.heading': 'Esteu al dia',
  /** The text in the tasks sidebar, in the assigned tab, under the open details, when it's empty.*/
  'empty-state.status.list.open.assigned.text':
    'Les noves tasques assignades a vosaltres apareixeran aquí',
  /** The heading in the tasks sidebar, in the document tab, under the open details, when it's empty.*/
  'empty-state.status.list.open.document.heading': 'Cap tasca en aquest document',
  /** The heading in the tasks sidebar, in the subscribed tab, under the open details, when it's empty.*/
  'empty-state.status.list.open.subscribed.heading': 'Cap tasca subscrita',
  /** The text in the tasks sidebar, in the subscribed tab, under the open details, when it's empty.*/
  'empty-state.status.list.open.subscribed.text':
    'Les tasques a les quals us subscriviu apareixeran aquí',

  /** Text used in the assignee input when there is no user assigned */
  'form.input.assignee.no-user-assigned.text': 'Sense assignar',
  /** Text used in the assignee input tooltip when there is no user assigned */
  'form.input.assignee.no-user-assigned.tooltip': 'Establir assignatari',
  /** Text used in the assignee input when searching and no users are found */
  'form.input.assignee.search.no-users.text': 'Cap usuari trobat',
  /** Placeholder text used in the search box in the assignee input */
  'form.input.assignee.search.placeholder': 'Seleccionar assignatari',
  /** Text used in the assignee input when user is not authorized */
  'form.input.assignee.unauthorized.text': 'No autoritzat',
  /** Text used in the assignee input tooltip when there is no user assigned */
  'form.input.assignee.user-assigned.tooltip': 'Canviar assignatari',
  /** Text used in the assignee input when user is not found */
  'form.input.assignee.user-not-found.text': 'Usuari no trobat',
  /** The label used in the create more toggle */
  'form.input.create-more.text': 'Crear més',
  /** The label used in the date input button tooltip when it's empty */
  'form.input.date.buttons.empty.tooltip': 'Establir data de venciment',
  /** The label used in the date input to remove the current value */
  'form.input.date.buttons.remove.text': 'Eliminar',
  /** The label used in the date input button tooltip when it has value */
  'form.input.date.buttons.tooltip': 'Canviar data de venciment',
  /** Placeholder text used in the description input */
  'form.input.description.placeholder': 'Afegir descripció',
  /**  Text used in the tooltip in the status change button  */
  'form.input.status.button.tooltip': 'Canviar estat',
  /** The label used in the target input to remove the current value */
  'form.input.target.buttons.remove.text': 'Eliminar contingut objectiu',
  /** The text used in the target input when encountering a schema error */
  'form.input.target.error.schema-not-found': 'Esquema no trobat',
  /** The placeholder text used in the target input for the search component */
  'form.input.target.search.placeholder': 'Selecciona el document de destinació',
  /** The placeholder text for the title input */
  'form.input.title.placeholder': 'Títol de la tasca',
  /** The status error message presented when the user does not supply a title */
  'form.status.error.title-required': 'El títol és obligatori',
  /** The status message upon successful creation of a task */
  'form.status.success': 'Tasca creada',

  /** The text displayed when no tasks are found */
  'list.empty.text': 'No hi ha tasques',
  /** The text displayed at the bottom of the tasks list inviting users provide feedback */
  'list.feedback.text':
    "Ajuda'ns a millorar, <Link>comparteix la teva opinió sobre les Tasques</Link> ",

  /** The label for the copy link menu item */
  'menuitem.copylink.text': "Copia l'enllaç a la tasca",
  /** The label for the delete task menu item */
  'menuitem.delete.text': 'Elimina la tasca',
  /** The label for the duplicate task menu item */
  'menuitem.duplicate.text': 'Duplica la tasca',
  /** The text for the duplicate task menu item tooltip when mode is upsell */
  'menuitem.duplicate.upsell-tooltip': 'Actualitza per duplicar tasques',

  /** Fragment used to construct the first entry in the activity log */
  'panel.activity.created-fragment': 'ha creat aquesta tasca',
  /** The title of the activity section of the task */
  'panel.activity.title': 'Activitat',
  /** The text used in the activity log when unable to find the user */
  'panel.activity.unknown-user': 'Usuari desconegut',
  /** The tooltip for the close button for the task panel */
  'panel.close.tooltip': 'Tanca la barra lateral',
  /** The placeholder text for the comment text box */
  'panel.comment.placeholder': 'Afegeix un comentari...',
  /** The placeholder text for the comment text box when mode is upsell */
  'panel.comment.placeholder.upsell': 'Actualitza per comentar en les tasques',
  /** The title used in the task panel when showing the create task form */
  'panel.create.title': 'Crea',
  /** The title used in the drafts pulldown */
  'panel.drafts.title': 'Esborranys',
  /** The tooltip for the task navigation component */
  'panel.navigation.tooltip': 'Obre les tasques',
  /** Title of the Tasks panel   */
  'panel.title': 'Tasques',

  /** Label for the Assigned Tab */
  'tab.assigned.label': 'Assignat',
  /** Label for the Active Document Tab */
  'tab.document.label': 'Document Actiu',
  /** Label for the Subscribed Tab */
  'tab.subscribed.label': 'Subscrit',

  /** Tooltip for the tasks navbar icon */
  'toolbar.tooltip': 'Tasques',
})
