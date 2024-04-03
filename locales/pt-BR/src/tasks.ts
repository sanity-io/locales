import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** The label for the create task action */
  'actions.create.text': 'Criar nova tarefa',
  /** The label for the open tasks panel action */
  'actions.open.text': 'Tarefas',

  /** The label for the button to create a new task */
  'buttons.create.text': 'Criar Tarefa',
  /** The label for the button to discard changes */
  'buttons.discard.text': 'Descartar',
  /** The label for the button to open the draft */
  'buttons.draft.text': 'Rascunho',
  /** The label for the button to create a new task */
  'buttons.new.text': 'Nova tarefa',
  /** The label for the button that will navigate to the next task */
  'buttons.next.tooltip': 'Ir para a próxima tarefa',
  /** The label for the button that will previous to the next task */
  'buttons.previous.tooltip': 'Ir para a tarefa anterior',

  /** Text for the remove task dialog asking for confirmation of deletion */
  'dialog.remove-task.body': 'Você tem certeza de que deseja excluir esta tarefa?',
  /** Text for the remove task dialog clarifying that deletion is permanent */
  'dialog.remove-task.body2': 'Uma vez excluída, ela não pode ser restaurada.',
  /** The label for the cancel button on the remove task dialog */
  'dialog.remove-task.buttons.cancel.text': 'Cancelar',
  /** The label for the confirmation button on the remove task dialog */
  'dialog.remove-task.buttons.confirm.text': 'Remover',
  /** The title for the remove task dialog */
  'dialog.remove-task.title': 'Remover tarefa',

  /** The text used as a placeholder for the footer action in a document with a single task */
  'document.footer.open-tasks.placeholder_one': 'Abrir tarefa',
  /** The text used as a placeholder for the footer action in a document with multiple tasks */
  'document.footer.open-tasks.placeholder_other': 'Abrir tarefas',
  /** The label used in the button in the footer action in a document with a single task */
  'document.footer.open-tasks.text_one': '{{count}} tarefa aberta',
  /** The label used in the button in the footer action in a document with multiple tasks */
  'document.footer.open-tasks.text_other': '{{count}} tarefas abertas',

  'empty-state.list.assigned.heading': 'Você não foi designado para nenhuma tarefa',
  'empty-state.list.assigned.text':
    'Uma vez que você for designado para tarefas, elas aparecerão aqui',
  'empty-state.list.create-new': 'Criar nova tarefa',
  'empty-state.list.document.heading': 'Este documento ainda não tem tarefas',
  'empty-state.list.document.text':
    'Uma vez que um documento tenha tarefas conectadas, elas serão mostradas aqui.',
  'empty-state.list.subscribed.heading': 'Você não está inscrito em nenhuma tarefa',
  'empty-state.list.subscribed.text':
    'Quando você criar, modificar ou comentar em uma tarefa, você será inscrito automaticamente',
  'empty-state.status.list.closed.assigned.heading': 'Nenhuma tarefa concluída',
  'empty-state.status.list.closed.assigned.text':
    'Suas tarefas marcadas como concluídas aparecerão aqui',
  'empty-state.status.list.closed.document.heading': 'Nenhuma tarefa concluída',
  'empty-state.status.list.closed.subscribed.heading': 'Nenhuma tarefa concluída',
  'empty-state.status.list.closed.subscribed.text':
    'Tarefas nas quais você se inscreveu marcadas como concluídas aparecerão aqui',
  'empty-state.status.list.open.assigned.heading': 'Você está em dia',
  'empty-state.status.list.open.assigned.text': 'Novas tarefas atribuídas a você aparecerão aqui',
  'empty-state.status.list.open.document.heading': 'Nenhuma tarefa neste documento',
  'empty-state.status.list.open.subscribed.heading': 'Nenhuma tarefa inscrita',
  'empty-state.status.list.open.subscribed.text':
    'Tarefas nas quais você se inscreveu aparecerão aqui',

  /** Text used in the assignee input when there is no user assigned */
  'form.input.assignee.no-user-assigned.text': 'Não atribuído',
  /** Text used in the assignee input when searching and no users are found */
  'form.input.assignee.search.no-users.text': 'Nenhum usuário encontrado',
  /** Placeholder text used in the search box in the assignee input */
  'form.input.assignee.search.placeholder': 'Selecionar nome de usuário',
  /** Text used in the assignee input when user is not authorized */
  'form.input.assignee.unauthorized.text': 'Não autorizado',
  /** Text used in the assignee input when user is not found */
  'form.input.assignee.user-not-found.text': 'Usuário não encontrado',
  /** The label used in the create more toggle */
  'form.input.create-more.text': 'Criar mais',
  /** The label used in the date input to remove the current value */
  'form.input.date.buttons.remove.text': 'Remover',
  /** Placeholder text used in the description input */
  'form.input.description.placeholder': 'Adicionar descrição',
  /** The label used in the target input to remove the current value */
  'form.input.target.buttons.remove.text': 'Remover conteúdo alvo',
  /** The text used in the target input when encountering a schema error */
  'form.input.target.error.schema-not-found': 'Esquema não encontrado',
  /** The placeholder text used in the target input for the search component */
  'form.input.target.search.placeholder': 'Selecionar documento',
  /** The placeholder text for the title input */
  'form.input.title.placeholder': 'Título da tarefa',
  /** The status error message presented when the user does not supply a title */
  'form.status.error.title-required': 'Título é obrigatório',
  /** The status message upon successful creation of a task */
  'form.status.success': 'Tarefa criada',

  /** The text displayed when no tasks are found */
  'list.empty.text': 'Nenhuma tarefa',

  /** The label for the copy link menu item */
  'menuitem.copylink.text': 'Copiar link para a tarefa',
  /** The label for the delete task menu item */
  'menuitem.delete.text': 'Excluir tarefa',
  /** The label for the duplicate task menu item */
  'menuitem.duplicate.text': 'Duplicar tarefa',

  /** Fragment used to construct the first entry in the activity log */
  'panel.activity.created-fragment': 'criou esta tarefa',
  /** The title of the activity section of the task */
  'panel.activity.title': 'Atividade',
  /** The text used in the activity log when unable to find the user */
  'panel.activity.unknown-user': 'Usuário desconhecido',
  /** The tooltip for the close button for the task panel */
  'panel.close.tooltip': 'Fechar barra lateral',
  /** The placeholder text for the comment text box */
  'panel.comment.placeholder': 'Adicionar um comentário...',
  /** The title used in the task panel when showing the create task form */
  'panel.create.title': 'Criar',
  /** The title used in the drafts pulldown */
  'panel.drafts.title': 'Rascunhos',
  /** The tooltip for the task navigation component */
  'panel.navigation.tooltip': 'Abrir tarefas',
  /** Title of the Tasks panel   */
  'panel.title': 'Tarefas',

  /** Label for the Assigned Tab */
  'tab.assigned.label': 'Atribuídas',
  /** Label for the Active Document Tab */
  'tab.document.label': 'Documento Ativo',
  /** Label for the Subscribed Tab */
  'tab.subscribed.label': 'Inscrito',
})
