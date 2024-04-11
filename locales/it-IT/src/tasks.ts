import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** The label for the create task action */
  'actions.create.text': 'Crea nuovo compito',
  /** The label for the open tasks panel action */
  'actions.open.text': 'Compiti',

  /** The label for the button to create a new task */
  'buttons.create.text': 'Crea Compito',
  /** The label for the button to discard changes */
  'buttons.discard.text': 'Annulla',
  /** The label for the button to open the draft */
  'buttons.draft.text': 'Bozza',
  /** The label for the button to create a new task */
  'buttons.new.text': 'Nuovo compito',
  /** The label for the button that will navigate to the next task */
  'buttons.next.tooltip': 'Vai al compito successivo',
  /** The label for the button that will previous to the next task */
  'buttons.previous.tooltip': 'Vai al compito precedente',

  /** Text for the remove task dialog asking for confirmation of deletion */
  'dialog.remove-task.body': 'Sei sicuro di voler eliminare questo compito?',
  /** Text for the remove task dialog clarifying that deletion is permanent */
  'dialog.remove-task.body2': 'Una volta eliminato, non può essere ripristinato.',
  /** The label for the cancel button on the remove task dialog */
  'dialog.remove-task.buttons.cancel.text': 'Annulla',
  /** The label for the confirmation button on the remove task dialog */
  'dialog.remove-task.buttons.confirm.text': 'Rimuovi',
  /** The title for the remove task dialog */
  'dialog.remove-task.title': 'Rimuovi compito',

  /** The text used as a placeholder for the footer action in a document with a single task */
  'document.footer.open-tasks.placeholder_one': 'Apri compito',
  /** The text used as a placeholder for the footer action in a document with multiple tasks */
  'document.footer.open-tasks.placeholder_other': 'Apri compiti',
  /** The label used in the button in the footer action in a document with a single task */
  'document.footer.open-tasks.text_one': '{{count}} compito aperto',
  /** The label used in the button in the footer action in a document with multiple tasks */
  'document.footer.open-tasks.text_other': '{{count}} compiti aperti',

  'empty-state.list.assigned.heading': 'Non ti sono stati assegnati compiti',
  'empty-state.list.assigned.text':
    'Una volta che ti verranno assegnati dei compiti, appariranno qui',
  'empty-state.list.create-new': 'Crea nuovo compito',
  'empty-state.list.document.heading': 'Questo documento non ha ancora compiti',
  'empty-state.list.document.text':
    'Una volta che un documento ha compiti collegati, verranno mostrati qui.',
  'empty-state.list.subscribed.heading': 'Non sei iscritto a nessun compito',
  'empty-state.list.subscribed.text':
    'Quando crei, modifichi o commenti un compito verrai iscritto automaticamente',
  'empty-state.status.list.closed.assigned.heading': 'Nessun compito completato',
  'empty-state.status.list.closed.assigned.text':
    'Le tue attività contrassegnate come completate appariranno qui',
  'empty-state.status.list.closed.document.heading': 'Nessuna attività completata',
  'empty-state.status.list.closed.subscribed.heading': 'Nessuna attività completata',
  'empty-state.status.list.closed.subscribed.text':
    'Le attività a cui sei iscritto e contrassegnate come completate appariranno qui',
  'empty-state.status.list.open.assigned.heading': 'Sei in pari con tutto',
  'empty-state.status.list.open.assigned.text': 'Le nuove attività assegnate a te appariranno qui',
  'empty-state.status.list.open.document.heading': 'Nessuna attività su questo documento',
  'empty-state.status.list.open.subscribed.heading': 'Nessuna attività sottoscritta',
  'empty-state.status.list.open.subscribed.text': 'Le attività a cui sei iscritto appariranno qui',

  /** Text used in the assignee input when there is no user assigned */
  'form.input.assignee.no-user-assigned.text': 'Non assegnato',
  /** Text used in the assignee input when searching and no users are found */
  'form.input.assignee.search.no-users.text': 'Nessun utente trovato',
  /** Placeholder text used in the search box in the assignee input */
  'form.input.assignee.search.placeholder': 'Seleziona nome utente',
  /** Text used in the assignee input when user is not authorized */
  'form.input.assignee.unauthorized.text': 'Non autorizzato',
  /** Text used in the assignee input when user is not found */
  'form.input.assignee.user-not-found.text': 'Utente non trovato',
  /** The label used in the create more toggle */
  'form.input.create-more.text': 'Crea altri',
  /** The label used in the date input to remove the current value */
  'form.input.date.buttons.remove.text': 'Rimuovi',
  /** Placeholder text used in the description input */
  'form.input.description.placeholder': 'Aggiungi descrizione',
  /** The label used in the target input to remove the current value */
  'form.input.target.buttons.remove.text': 'Rimuovi contenuto target',
  /** The text used in the target input when encountering a schema error */
  'form.input.target.error.schema-not-found': 'Schema non trovato',
  /** The placeholder text used in the target input for the search component */
  'form.input.target.search.placeholder': 'Seleziona documento',
  /** The placeholder text for the title input */
  'form.input.title.placeholder': "Titolo dell'attività",
  /** The status error message presented when the user does not supply a title */
  'form.status.error.title-required': 'Il titolo è obbligatorio',
  /** The status message upon successful creation of a task */
  'form.status.success': 'Attività creata',

  /** The text displayed when no tasks are found */
  'list.empty.text': 'Nessuna attività',

  /** The label for the copy link menu item */
  'menuitem.copylink.text': "Copia link all'attività",
  /** The label for the delete task menu item */
  'menuitem.delete.text': 'Elimina compito',
  /** The label for the duplicate task menu item */
  'menuitem.duplicate.text': 'Duplica compito',

  /** Fragment used to construct the first entry in the activity log */
  'panel.activity.created-fragment': 'ha creato questo compito',
  /** The title of the activity section of the task */
  'panel.activity.title': 'Attività',
  /** The text used in the activity log when unable to find the user */
  'panel.activity.unknown-user': 'Utente sconosciuto',
  /** The tooltip for the close button for the task panel */
  'panel.close.tooltip': 'Chiudi barra laterale',
  /** The placeholder text for the comment text box */
  'panel.comment.placeholder': 'Aggiungi un commento...',
  /** The title used in the task panel when showing the create task form */
  'panel.create.title': 'Crea',
  /** The title used in the drafts pulldown */
  'panel.drafts.title': 'Bozze',
  /** The tooltip for the task navigation component */
  'panel.navigation.tooltip': 'Apri compiti',
  /** Title of the Tasks panel   */
  'panel.title': 'Compiti',

  /** Label for the Assigned Tab */
  'tab.assigned.label': 'Assegnati',
  /** Label for the Active Document Tab */
  'tab.document.label': 'Documento attivo',
  /** Label for the Subscribed Tab */
  'tab.subscribed.label': 'Iscritti',
})
