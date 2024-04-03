import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** The label for the create task action */
  'actions.create.text': 'Créer une nouvelle tâche',
  /** The label for the open tasks panel action */
  'actions.open.text': 'Tâches',

  /** The label for the button to create a new task */
  'buttons.create.text': 'Créer une tâche',
  /** The label for the button to discard changes */
  'buttons.discard.text': 'Annuler',
  /** The label for the button to open the draft */
  'buttons.draft.text': 'Brouillon',
  /** The label for the button to create a new task */
  'buttons.new.text': 'Nouvelle tâche',
  /** The label for the button that will navigate to the next task */
  'buttons.next.tooltip': 'Aller à la tâche suivante',
  /** The label for the button that will previous to the next task */
  'buttons.previous.tooltip': 'Aller à la tâche précédente',

  /** Text for the remove task dialog asking for confirmation of deletion */
  'dialog.remove-task.body': 'Êtes-vous sûr de vouloir supprimer cette tâche ?',
  /** Text for the remove task dialog clarifying that deletion is permanent */
  'dialog.remove-task.body2': 'Une fois supprimée, elle ne peut être restaurée.',
  /** The label for the cancel button on the remove task dialog */
  'dialog.remove-task.buttons.cancel.text': 'Annuler',
  /** The label for the confirmation button on the remove task dialog */
  'dialog.remove-task.buttons.confirm.text': 'Supprimer',
  /** The title for the remove task dialog */
  'dialog.remove-task.title': 'Supprimer la tâche',

  /** The text used as a placeholder for the footer action in a document with a single task */
  'document.footer.open-tasks.placeholder_one': 'Ouvrir la tâche',
  /** The text used as a placeholder for the footer action in a document with multiple tasks */
  'document.footer.open-tasks.placeholder_other': 'Ouvrir les tâches',
  /** The label used in the button in the footer action in a document with a single task */
  'document.footer.open-tasks.text_one': '{{count}} tâche ouverte',
  /** The label used in the button in the footer action in a document with multiple tasks */
  'document.footer.open-tasks.text_other': '{{count}} tâches ouvertes',

  'empty-state.list.assigned.heading': 'Aucune tâche ne vous a été assignée',
  'empty-state.list.assigned.text': 'Les tâches qui vous sont assignées apparaîtront ici',
  'empty-state.list.create-new': 'Créer une nouvelle tâche',
  'empty-state.list.document.heading': "Ce document n'a encore aucune tâche",
  'empty-state.list.document.text':
    "Une fois qu'un document a des tâches associées, elles seront affichées ici.",
  'empty-state.list.subscribed.heading': "Vous n'êtes abonné à aucune tâche",
  'empty-state.list.subscribed.text':
    'Lorsque vous créez, modifiez ou commentez une tâche, vous serez automatiquement abonné',
  'empty-state.status.list.closed.assigned.heading': 'Aucune tâche terminée',
  'empty-state.status.list.closed.assigned.text':
    'Vos tâches marquées comme terminées apparaîtront ici',
  'empty-state.status.list.closed.document.heading': 'Aucune tâche terminée',
  'empty-state.status.list.closed.subscribed.heading': 'Aucune tâche terminée',
  'empty-state.status.list.closed.subscribed.text':
    'Les tâches auxquelles vous êtes abonné et marquées comme terminées apparaîtront ici',
  'empty-state.status.list.open.assigned.heading': 'Vous êtes à jour',
  'empty-state.status.list.open.assigned.text':
    'Les nouvelles tâches qui vous sont assignées apparaîtront ici',
  'empty-state.status.list.open.document.heading': 'Aucune tâche sur ce document',
  'empty-state.status.list.open.subscribed.heading': 'Aucune tâche suivie',
  'empty-state.status.list.open.subscribed.text':
    'Les tâches auxquelles vous êtes abonné apparaîtront ici',

  /** Text used in the assignee input when there is no user assigned */
  'form.input.assignee.no-user-assigned.text': 'Non assigné',
  /** Text used in the assignee input when searching and no users are found */
  'form.input.assignee.search.no-users.text': 'Aucun utilisateur trouvé',
  /** Placeholder text used in the search box in the assignee input */
  'form.input.assignee.search.placeholder': "Sélectionnez un nom d'utilisateur",
  /** Text used in the assignee input when user is not authorized */
  'form.input.assignee.unauthorized.text': 'Non autorisé',
  /** Text used in the assignee input when user is not found */
  'form.input.assignee.user-not-found.text': 'Utilisateur non trouvé',
  /** The label used in the create more toggle */
  'form.input.create-more.text': 'Créer plus',
  /** The label used in the date input to remove the current value */
  'form.input.date.buttons.remove.text': 'Supprimer',
  /** Placeholder text used in the description input */
  'form.input.description.placeholder': 'Ajouter une description',
  /** The label used in the target input to remove the current value */
  'form.input.target.buttons.remove.text': 'Supprimer le contenu cible',
  /** The text used in the target input when encountering a schema error */
  'form.input.target.error.schema-not-found': 'Schéma non trouvé',
  /** The placeholder text used in the target input for the search component */
  'form.input.target.search.placeholder': 'Sélectionnez un document',
  /** The placeholder text for the title input */
  'form.input.title.placeholder': 'Titre de la tâche',
  /** The status error message presented when the user does not supply a title */
  'form.status.error.title-required': 'Le titre est requis',
  /** The status message upon successful creation of a task */
  'form.status.success': 'Tâche créée',

  /** The text displayed when no tasks are found */
  'list.empty.text': 'Aucune tâche',

  /** The label for the copy link menu item */
  'menuitem.copylink.text': 'Copier le lien vers la tâche',
  /** The label for the delete task menu item */
  'menuitem.delete.text': 'Supprimer la tâche',
  /** The label for the duplicate task menu item */
  'menuitem.duplicate.text': 'Dupliquer la tâche',

  /** Fragment used to construct the first entry in the activity log */
  'panel.activity.created-fragment': 'a créé cette tâche',
  /** The title of the activity section of the task */
  'panel.activity.title': 'Activité',
  /** The text used in the activity log when unable to find the user */
  'panel.activity.unknown-user': 'Utilisateur inconnu',
  /** The tooltip for the close button for the task panel */
  'panel.close.tooltip': 'Fermer la barre latérale',
  /** The placeholder text for the comment text box */
  'panel.comment.placeholder': 'Ajouter un commentaire...',
  /** The title used in the task panel when showing the create task form */
  'panel.create.title': 'Créer',
  /** The title used in the drafts pulldown */
  'panel.drafts.title': 'Brouillons',
  /** The tooltip for the task navigation component */
  'panel.navigation.tooltip': 'Ouvrir les tâches',
  /** Title of the Tasks panel   */
  'panel.title': 'Tâches',

  /** Label for the Assigned Tab */
  'tab.assigned.label': 'Attribué',
  /** Label for the Active Document Tab */
  'tab.document.label': 'Document actif',
  /** Label for the Subscribed Tab */
  'tab.subscribed.label': 'Abonné',
})
