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
  /** The text for tooltip in the create a new task button when mode is upsell */
  'buttons.new.upsell-tooltip': 'Faça upgrade para criar tarefas',
  /** The label for the button that will navigate to the next task */
  'buttons.next.tooltip': 'Ir para a próxima tarefa',
  /** The label for the button that will previous to the next task */
  'buttons.previous.tooltip': 'Ir para a tarefa anterior',

  /** Text for the remove task dialog asking for confirmation of deletion */
  'dialog.remove-task.body': 'Você tem certeza de que deseja excluir esta tarefa?',
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

  /** The heading in the tasks sidebar, in the assigned tab, when the user hasn't been assigned to any task*/
  'empty-state.list.assigned.heading': 'Você não foi designado para nenhuma tarefa',
  /** The text in the tasks sidebar, in the assigned tab, when the user hasn't been assigned to any task*/
  'empty-state.list.assigned.text':
    'Uma vez que você for designado para tarefas, elas aparecerão aqui',
  /** The text in the tasks sidebar button any of the empty states is rendered*/
  'empty-state.list.create-new': 'Criar nova tarefa',
  /** The heading in the tasks sidebar, in the document tab, when the document doesn't have any task*/
  'empty-state.list.document.heading': 'Este documento ainda não tem tarefas',
  /** The text in the tasks sidebar, in the document tab, when the document doesn't have any task*/
  'empty-state.list.document.text':
    'Uma vez que um documento tenha tarefas conectadas, elas serão mostradas aqui.',
  /** The heading in the tasks sidebar, when viewing the document tab, but there is not an active document*/
  'empty-state.list.no-active-document.heading': 'Abra um documento para ver a sua tarefa',
  /** The text in the tasks sidebar, when viewing the document tab, but there is not an active document*/
  'empty-state.list.no-active-document.text':
    'As tarefas do seu documento ativo serão mostradas aqui.',
  /** The heading in the tasks sidebar, in the subscriber tab, when the user is not subscribed to any task*/
  'empty-state.list.subscribed.heading': 'Você não está inscrito em nenhuma tarefa',
  /** The text in the tasks sidebar, in the subscriber tab, when the user is not subscribed to any task*/
  'empty-state.list.subscribed.text':
    'Quando você criar, modificar ou comentar em uma tarefa, você será inscrito automaticamente',
  /** The heading in the tasks sidebar, in the assigned tab, under the closed details, when it's empty.*/
  'empty-state.status.list.closed.assigned.heading': 'Nenhuma tarefa concluída',
  /** The text in the tasks sidebar, in the assigned tab, under the closed details, when it's empty.*/
  'empty-state.status.list.closed.assigned.text':
    'Suas tarefas marcadas como concluídas aparecerão aqui',
  /** The heading in the tasks sidebar, in the document tab, under the closed details, when it's empty.*/
  'empty-state.status.list.closed.document.heading': 'Nenhuma tarefa concluída',
  /** The heading in the tasks sidebar, in the subscribed tab, under the closed details, when it's empty.*/
  'empty-state.status.list.closed.subscribed.heading': 'Nenhuma tarefa concluída',
  /** The text in the tasks sidebar, in the subscribed tab, under the closed details, when it's empty.*/
  'empty-state.status.list.closed.subscribed.text':
    'Tarefas nas quais você se inscreveu marcadas como concluídas aparecerão aqui',
  /** The heading in the tasks sidebar, in the assigned tab, under the open details, when it's empty.*/
  'empty-state.status.list.open.assigned.heading': 'Você está em dia',
  /** The text in the tasks sidebar, in the assigned tab, under the open details, when it's empty.*/
  'empty-state.status.list.open.assigned.text': 'Novas tarefas atribuídas a você aparecerão aqui',
  /** The heading in the tasks sidebar, in the document tab, under the open details, when it's empty.*/
  'empty-state.status.list.open.document.heading': 'Nenhuma tarefa neste documento',
  /** The heading in the tasks sidebar, in the subscribed tab, under the open details, when it's empty.*/
  'empty-state.status.list.open.subscribed.heading': 'Nenhuma tarefa inscrita',
  /** The text in the tasks sidebar, in the subscribed tab, under the open details, when it's empty.*/
  'empty-state.status.list.open.subscribed.text':
    'Tarefas nas quais você se inscreveu aparecerão aqui',

  /** Text used in the assignee input when there is no user assigned */
  'form.input.assignee.no-user-assigned.text': 'Não atribuído',
  /** Text used in the assignee input tooltip when there is no user assigned */
  'form.input.assignee.no-user-assigned.tooltip': 'Definir responsável',
  /** Text used in the assignee input when searching and no users are found */
  'form.input.assignee.search.no-users.text': 'Nenhum usuário encontrado',
  /** Placeholder text used in the search box in the assignee input */
  'form.input.assignee.search.placeholder': 'Selecionar nome de usuário',
  /** Text used in the assignee input when user is not authorized */
  'form.input.assignee.unauthorized.text': 'Não autorizado',
  /** Text used in the assignee input tooltip when there is no user assigned */
  'form.input.assignee.user-assigned.tooltip': 'Alterar responsável',
  /** Text used in the assignee input when user is not found */
  'form.input.assignee.user-not-found.text': 'Usuário não encontrado',
  /** The label used in the create more toggle */
  'form.input.create-more.text': 'Criar mais',
  /** The label used in the date input button tooltip when it's empty */
  'form.input.date.buttons.empty.tooltip': 'Definir data de vencimento',
  /** The label used in the date input to remove the current value */
  'form.input.date.buttons.remove.text': 'Remover',
  /** The label used in the date input button tooltip when it has value */
  'form.input.date.buttons.tooltip': 'Alterar data de vencimento',
  /** Placeholder text used in the description input */
  'form.input.description.placeholder': 'Adicionar descrição',
  /**  Text used in the tooltip in the status change button  */
  'form.input.status.button.tooltip': 'Alterar status',
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
  /** The text displayed at the bottom of the tasks list inviting users provide feedback */
  'list.feedback.text':
    'Ajude-nos a melhorar, <Link>compartilhe seu feedback sobre Tarefas</Link> ',

  /** The label for the copy link menu item */
  'menuitem.copylink.text': 'Copiar link para a tarefa',
  /** The label for the delete task menu item */
  'menuitem.delete.text': 'Excluir tarefa',
  /** The label for the duplicate task menu item */
  'menuitem.duplicate.text': 'Duplicar tarefa',
  /** The text for the duplicate task menu item tooltip when mode is upsell */
  'menuitem.duplicate.upsell-tooltip': 'Faça upgrade para duplicar tarefas',

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
  /** The placeholder text for the comment text box when mode is upsell */
  'panel.comment.placeholder.upsell': 'Faça upgrade para comentar nas tarefas',
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

  /** Tooltip for the tasks navbar icon */
  'toolbar.tooltip': 'Tarefas',
})
