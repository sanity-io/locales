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
  /** The text for tooltip in the create a new task button when mode is upsell */
  'buttons.new.upsell-tooltip': 'Aggiorna per creare compiti',
  /** The label for the button that will navigate to the next task */
  'buttons.next.tooltip': 'Vai al compito successivo',
  /** The label for the button that will previous to the next task */
  'buttons.previous.tooltip': 'Vai al compito precedente',

  /** Text for the remove task dialog asking for confirmation of deletion */
  'dialog.remove-task.body': 'Una volta eliminato, un compito non può essere recuperato.',
  /** The label for the cancel button on the remove task dialog */
  'dialog.remove-task.buttons.cancel.text': 'Annulla',
  /** The label for the confirmation button on the remove task dialog */
  'dialog.remove-task.buttons.confirm.text': 'Elimina',
  /** The title for the remove task dialog */
  'dialog.remove-task.title': 'Eliminare questo compito?',

  /** The text used as a placeholder for the footer action in a document with a single task */
  'document.footer.open-tasks.placeholder_one': 'Apri compito',
  /** The text used as a placeholder for the footer action in a document with multiple tasks */
  'document.footer.open-tasks.placeholder_other': 'Apri compiti',
  /** The label used in the button in the footer action in a document with a single task */
  'document.footer.open-tasks.text_one': '{{count}} compito aperto',
  /** The label used in the button in the footer action in a document with multiple tasks */
  'document.footer.open-tasks.text_other': '{{count}} compiti aperti',

  /** The heading in the tasks sidebar, in the assigned tab, when the user hasn't been assigned to any task*/
  'empty-state.list.assigned.heading': 'Non ti sono stati assegnati compiti',
  /** The text in the tasks sidebar, in the assigned tab, when the user hasn't been assigned to any task*/
  'empty-state.list.assigned.text':
    'Una volta che ti saranno assegnati dei compiti, appariranno qui',
  /** The text in the tasks sidebar button any of the empty states is rendered*/
  'empty-state.list.create-new': 'Crea nuovo compito',
  /** The heading in the tasks sidebar, in the document tab, when the document doesn't have any task*/
  'empty-state.list.document.heading': 'Questo documento non ha ancora compiti',
  /** The text in the tasks sidebar, in the document tab, when the document doesn't have any task*/
  'empty-state.list.document.text':
    'Una volta che un documento ha dei compiti collegati, verranno mostrati qui.',
  /** The heading in the tasks sidebar, when viewing the document tab, but there is not an active document*/
  'empty-state.list.no-active-document.heading': 'Apri un documento per vedere i suoi compiti',
  /** The text in the tasks sidebar, when viewing the document tab, but there is not an active document*/
  'empty-state.list.no-active-document.text':
    'I compiti sul tuo documento attivo verranno mostrati qui.',
  /** The heading in the tasks sidebar, in the subscriber tab, when the user is not subscribed to any task*/
  'empty-state.list.subscribed.heading': 'Non sei iscritto a nessun compito',
  /** The text in the tasks sidebar, in the subscriber tab, when the user is not subscribed to any task*/
  'empty-state.list.subscribed.text':
    'Quando crei, modifichi o commenti un compito sarai automaticamente iscritto',
  /** The heading in the tasks sidebar, in the assigned tab, under the closed details, when it's empty.*/
  'empty-state.status.list.closed.assigned.heading': 'Nessun compito completato',
  /** The text in the tasks sidebar, in the assigned tab, under the closed details, when it's empty.*/
  'empty-state.status.list.closed.assigned.text':
    'I tuoi compiti segnati come completati appariranno qui',
  /** The heading in the tasks sidebar, in the document tab, under the closed details, when it's empty.*/
  'empty-state.status.list.closed.document.heading': 'Nessun compito completato',
  /** The heading in the tasks sidebar, in the subscribed tab, under the closed details, when it's empty.*/
  'empty-state.status.list.closed.subscribed.heading': 'Nessun compito completato',
  /** The text in the tasks sidebar, in the subscribed tab, under the closed details, when it's empty.*/
  'empty-state.status.list.closed.subscribed.text':
    'I compiti a cui sei iscritto segnati come completati appariranno qui',
  /** The heading in the tasks sidebar, in the assigned tab, under the open details, when it's empty.*/
  'empty-state.status.list.open.assigned.heading': 'Sei in pari con tutto',
  /** The text in the tasks sidebar, in the assigned tab, under the open details, when it's empty.*/
  'empty-state.status.list.open.assigned.text': 'I nuovi compiti assegnati a te appariranno qui',
  /** The heading in the tasks sidebar, in the document tab, under the open details, when it's empty.*/
  'empty-state.status.list.open.document.heading': 'Nessun compito su questo documento',
  /** The heading in the tasks sidebar, in the subscribed tab, under the open details, when it's empty.*/
  'empty-state.status.list.open.subscribed.heading': 'Nessun compito a cui sei iscritto',
  /** The text in the tasks sidebar, in the subscribed tab, under the open details, when it's empty.*/
  'empty-state.status.list.open.subscribed.text': 'I compiti a cui sei iscritto appariranno qui',

  /** Text used in the assignee input when there is no user assigned */
  'form.input.assignee.no-user-assigned.text': 'Non assegnato',
  /** Text used in the assignee input tooltip when there is no user assigned */
  'form.input.assignee.no-user-assigned.tooltip': 'Imposta assegnatario',
  /** Text used in the assignee input when searching and no users are found */
  'form.input.assignee.search.no-users.text': 'Nessun utente trovato',
  /** Placeholder text used in the search box in the assignee input */
  'form.input.assignee.search.placeholder': 'Seleziona assegnatario',
  /** Text used in the assignee input when user is not authorized */
  'form.input.assignee.unauthorized.text': 'Non autorizzato',
  /** Text used in the assignee input tooltip when there is no user assigned */
  'form.input.assignee.user-assigned.tooltip': 'Cambia assegnatario',
  /** Text used in the assignee input when user is not found */
  'form.input.assignee.user-not-found.text': 'Utente non trovato',
  /** The label used in the create more toggle */
  'form.input.create-more.text': 'Crea altri',
  /** The label used in the date input button tooltip when it's empty */
  'form.input.date.buttons.empty.tooltip': 'Imposta data di scadenza',
  /** The label used in the date input to remove the current value */
  'form.input.date.buttons.remove.text': 'Rimuovi',
  /** The label used in the date input button tooltip when it has value */
  'form.input.date.buttons.tooltip': 'Cambia data di scadenza',
  /** Placeholder text used in the description input */
  'form.input.description.placeholder': 'Aggiungi descrizione',
  /**  Text used in the tooltip in the status change button  */
  'form.input.status.button.tooltip': 'Cambia stato',
  /** The label used in the target input to remove the current value */
  'form.input.target.buttons.remove.text': 'Rimuovi contenuto target',
  /** The text used in the target input when encountering a schema error */
  'form.input.target.error.schema-not-found': 'Schema non trovato',
  /** The placeholder text used in the target input for the search component */
  'form.input.target.search.placeholder': 'Seleziona documento di destinazione',
  /** The placeholder text for the title input */
  'form.input.title.placeholder': "Titolo dell'incarico",
  /** The status error message presented when the user does not supply a title */
  'form.status.error.title-required': 'Il titolo è obbligatorio',
  /** The status message upon successful creation of a task */
  'form.status.success': 'Incarico creato',

  /** The text displayed when no tasks are found */
  'list.empty.text': 'Nessun incarico',
  /** The text displayed at the bottom of the tasks list inviting users provide feedback */
  'list.feedback.text':
    'Aiutaci a migliorare, <Link>condividi il tuo feedback sugli Incarichi</Link> ',

  /** The label for the copy link menu item */
  'menuitem.copylink.text': "Copia il link all'incarico",
  /** The label for the delete task menu item */
  'menuitem.delete.text': 'Elimina incarico',
  /** The label for the duplicate task menu item */
  'menuitem.duplicate.text': 'Duplica incarico',
  /** The text for the duplicate task menu item tooltip when mode is upsell */
  'menuitem.duplicate.upsell-tooltip': 'Aggiorna per duplicare gli incarichi',

  /** Fragment used to construct the first entry in the activity log */
  'panel.activity.created-fragment': 'ha creato questo incarico',
  /** The title of the activity section of the task */
  'panel.activity.title': 'Attività',
  /** The text used in the activity log when unable to find the user */
  'panel.activity.unknown-user': 'Utente sconosciuto',
  /** The tooltip for the close button for the task panel */
  'panel.close.tooltip': 'Chiudi la barra laterale',
  /** The placeholder text for the comment text box */
  'panel.comment.placeholder': 'Aggiungi un commento...',
  /** The placeholder text for the comment text box when mode is upsell */
  'panel.comment.placeholder.upsell': 'Aggiorna per commentare gli incarichi',
  /** The title used in the task panel when showing the create task form */
  'panel.create.title': 'Crea',
  /** The title used in the drafts pulldown */
  'panel.drafts.title': 'Bozze',
  /** The tooltip for the task navigation component */
  'panel.navigation.tooltip': 'Apri gli incarichi',
  /** Title of the Tasks panel   */
  'panel.title': 'Incarichi',

  /** Label for the Assigned Tab */
  'tab.assigned.label': 'Assegnati',
  /** Label for the Active Document Tab */
  'tab.document.label': 'Documento attivo',
  /** Label for the Subscribed Tab */
  'tab.subscribed.label': 'Iscritti',

  /** Tooltip for the tasks navbar icon */
  'toolbar.tooltip': 'Compiti',
})
