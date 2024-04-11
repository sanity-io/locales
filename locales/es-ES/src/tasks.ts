import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** The label for the create task action */
  'actions.create.text': 'Crear nueva tarea',
  /** The label for the open tasks panel action */
  'actions.open.text': 'Tareas',

  /** The label for the button to create a new task */
  'buttons.create.text': 'Crear tarea',
  /** The label for the button to discard changes */
  'buttons.discard.text': 'Descartar',
  /** The label for the button to open the draft */
  'buttons.draft.text': 'Borrador',
  /** The label for the button to create a new task */
  'buttons.new.text': 'Nueva tarea',
  /** The label for the button that will navigate to the next task */
  'buttons.next.tooltip': 'Ir a la siguiente tarea',
  /** The label for the button that will previous to the next task */
  'buttons.previous.tooltip': 'Ir a la tarea anterior',

  /** Text for the remove task dialog asking for confirmation of deletion */
  'dialog.remove-task.body': '¿Estás seguro de que quieres eliminar esta tarea?',
  /** Text for the remove task dialog clarifying that deletion is permanent */
  'dialog.remove-task.body2': 'Una vez eliminada, no se puede restaurar.',
  /** The label for the cancel button on the remove task dialog */
  'dialog.remove-task.buttons.cancel.text': 'Cancelar',
  /** The label for the confirmation button on the remove task dialog */
  'dialog.remove-task.buttons.confirm.text': 'Eliminar',
  /** The title for the remove task dialog */
  'dialog.remove-task.title': 'Eliminar tarea',

  /** The text used as a placeholder for the footer action in a document with a single task */
  'document.footer.open-tasks.placeholder_one': 'Abrir tarea',
  /** The text used as a placeholder for the footer action in a document with multiple tasks */
  'document.footer.open-tasks.placeholder_other': 'Abrir tareas',
  /** The label used in the button in the footer action in a document with a single task */
  'document.footer.open-tasks.text_one': '{{count}} tarea pendiente',
  /** The label used in the button in the footer action in a document with multiple tasks */
  'document.footer.open-tasks.text_other': '{{count}} tareas pendientes',

  'empty-state.list.assigned.heading': 'No se te han asignado tareas',
  'empty-state.list.assigned.text': 'Una vez que se te asignen tareas, aparecerán aquí',
  'empty-state.list.create-new': 'Crear nueva tarea',
  'empty-state.list.document.heading': 'Este documento aún no tiene tareas',
  'empty-state.list.document.text':
    'Una vez que un documento tenga tareas conectadas, se mostrarán aquí.',
  'empty-state.list.subscribed.heading': 'No estás suscrito a ninguna tarea',
  'empty-state.list.subscribed.text':
    'Cuando crees, modifiques o comentes en una tarea, te suscribirás automáticamente',
  'empty-state.status.list.closed.assigned.heading': 'No hay tareas completadas',
  'empty-state.status.list.closed.assigned.text': 'Tus tareas marcadas como hechas aparecerán aquí',
  'empty-state.status.list.closed.document.heading': 'No hay tareas completadas',
  'empty-state.status.list.closed.subscribed.heading': 'No hay tareas completadas',
  'empty-state.status.list.closed.subscribed.text':
    'Las tareas a las que te suscribes marcadas como hechas aparecerán aquí',
  'empty-state.status.list.open.assigned.heading': 'Estás al día',
  'empty-state.status.list.open.assigned.text': 'Las nuevas tareas asignadas a ti aparecerán aquí',
  'empty-state.status.list.open.document.heading': 'No hay tareas en este documento',
  'empty-state.status.list.open.subscribed.heading': 'No hay tareas suscritas',
  'empty-state.status.list.open.subscribed.text':
    'Las tareas a las que te suscribes aparecerán aquí',

  /** Text used in the assignee input when there is no user assigned */
  'form.input.assignee.no-user-assigned.text': 'No asignado',
  /** Text used in the assignee input when searching and no users are found */
  'form.input.assignee.search.no-users.text': 'No se encontraron usuarios',
  /** Placeholder text used in the search box in the assignee input */
  'form.input.assignee.search.placeholder': 'Seleccionar nombre de usuario',
  /** Text used in the assignee input when user is not authorized */
  'form.input.assignee.unauthorized.text': 'No autorizado',
  /** Text used in the assignee input when user is not found */
  'form.input.assignee.user-not-found.text': 'Usuario no encontrado',
  /** The label used in the create more toggle */
  'form.input.create-more.text': 'Crear más',
  /** The label used in the date input to remove the current value */
  'form.input.date.buttons.remove.text': 'Eliminar',
  /** Placeholder text used in the description input */
  'form.input.description.placeholder': 'Añadir descripción',
  /** The label used in the target input to remove the current value */
  'form.input.target.buttons.remove.text': 'Eliminar contenido objetivo',
  /** The text used in the target input when encountering a schema error */
  'form.input.target.error.schema-not-found': 'Esquema no encontrado',
  /** The placeholder text used in the target input for the search component */
  'form.input.target.search.placeholder': 'Seleccionar documento',
  /** The placeholder text for the title input */
  'form.input.title.placeholder': 'Título de la tarea',
  /** The status error message presented when the user does not supply a title */
  'form.status.error.title-required': 'El título es obligatorio',
  /** The status message upon successful creation of a task */
  'form.status.success': 'Tarea creada',

  /** The text displayed when no tasks are found */
  'list.empty.text': 'No hay tareas',

  /** The label for the copy link menu item */
  'menuitem.copylink.text': 'Copiar enlace a la tarea',
  /** The label for the delete task menu item */
  'menuitem.delete.text': 'Eliminar tarea',
  /** The label for the duplicate task menu item */
  'menuitem.duplicate.text': 'Duplicar tarea',

  /** Fragment used to construct the first entry in the activity log */
  'panel.activity.created-fragment': 'creó esta tarea',
  /** The title of the activity section of the task */
  'panel.activity.title': 'Actividad',
  /** The text used in the activity log when unable to find the user */
  'panel.activity.unknown-user': 'Usuario desconocido',
  /** The tooltip for the close button for the task panel */
  'panel.close.tooltip': 'Cerrar barra lateral',
  /** The placeholder text for the comment text box */
  'panel.comment.placeholder': 'Añadir un comentario...',
  /** The title used in the task panel when showing the create task form */
  'panel.create.title': 'Crear',
  /** The title used in the drafts pulldown */
  'panel.drafts.title': 'Borradores',
  /** The tooltip for the task navigation component */
  'panel.navigation.tooltip': 'Abrir tareas',
  /** Title of the Tasks panel   */
  'panel.title': 'Tareas',

  /** Label for the Assigned Tab */
  'tab.assigned.label': 'Asignado',
  /** Label for the Active Document Tab */
  'tab.document.label': 'Documento activo',
  /** Label for the Subscribed Tab */
  'tab.subscribed.label': 'Suscrito',
})
