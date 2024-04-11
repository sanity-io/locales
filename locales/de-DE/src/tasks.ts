import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** The label for the create task action */
  'actions.create.text': 'Neue Aufgabe erstellen',
  /** The label for the open tasks panel action */
  'actions.open.text': 'Aufgaben',

  /** The label for the button to create a new task */
  'buttons.create.text': 'Aufgabe erstellen',
  /** The label for the button to discard changes */
  'buttons.discard.text': 'Verwerfen',
  /** The label for the button to open the draft */
  'buttons.draft.text': 'Entwurf',
  /** The label for the button to create a new task */
  'buttons.new.text': 'Neue Aufgabe',
  /** The label for the button that will navigate to the next task */
  'buttons.next.tooltip': 'Zur nächsten Aufgabe gehen',
  /** The label for the button that will previous to the next task */
  'buttons.previous.tooltip': 'Zur vorherigen Aufgabe gehen',

  /** Text for the remove task dialog asking for confirmation of deletion */
  'dialog.remove-task.body': 'Sind Sie sicher, dass Sie diese Aufgabe löschen möchten?',
  /** Text for the remove task dialog clarifying that deletion is permanent */
  'dialog.remove-task.body2': 'Einmal gelöscht, kann sie nicht wiederhergestellt werden.',
  /** The label for the cancel button on the remove task dialog */
  'dialog.remove-task.buttons.cancel.text': 'Abbrechen',
  /** The label for the confirmation button on the remove task dialog */
  'dialog.remove-task.buttons.confirm.text': 'Entfernen',
  /** The title for the remove task dialog */
  'dialog.remove-task.title': 'Aufgabe entfernen',

  /** The text used as a placeholder for the footer action in a document with a single task */
  'document.footer.open-tasks.placeholder_one': 'Aufgabe öffnen',
  /** The text used as a placeholder for the footer action in a document with multiple tasks */
  'document.footer.open-tasks.placeholder_other': 'Aufgaben öffnen',
  /** The label used in the button in the footer action in a document with a single task */
  'document.footer.open-tasks.text_one': '{{count}} offene Aufgabe',
  /** The label used in the button in the footer action in a document with multiple tasks */
  'document.footer.open-tasks.text_other': '{{count}} offene Aufgaben',

  'empty-state.list.assigned.heading': 'Ihnen wurden noch keine Aufgaben zugewiesen',
  'empty-state.list.assigned.text': 'Sobald Ihnen Aufgaben zugewiesen werden, erscheinen sie hier',
  'empty-state.list.create-new': 'Neue Aufgabe erstellen',
  'empty-state.list.document.heading': 'Dieses Dokument hat noch keine Aufgaben',
  'empty-state.list.document.text':
    'Sobald ein Dokument verbundene Aufgaben hat, werden sie hier angezeigt.',
  'empty-state.list.subscribed.heading': 'Sie haben keine Aufgaben abonniert',
  'empty-state.list.subscribed.text':
    'Wenn Sie eine Aufgabe erstellen, ändern oder kommentieren, werden Sie automatisch abonniert',
  'empty-state.status.list.closed.assigned.heading': 'Keine abgeschlossenen Aufgaben',
  'empty-state.status.list.closed.assigned.text':
    'Ihre als erledigt markierten Aufgaben werden hier angezeigt',
  'empty-state.status.list.closed.document.heading': 'Keine abgeschlossenen Aufgaben',
  'empty-state.status.list.closed.subscribed.heading': 'Keine abgeschlossenen Aufgaben',
  'empty-state.status.list.closed.subscribed.text':
    'Aufgaben, bei denen Sie mitmachen und die als erledigt markiert sind, werden hier angezeigt',
  'empty-state.status.list.open.assigned.heading': 'Sie sind auf dem neuesten Stand',
  'empty-state.status.list.open.assigned.text':
    'Neue Ihnen zugewiesene Aufgaben werden hier angezeigt',
  'empty-state.status.list.open.document.heading': 'Keine Aufgaben zu diesem Dokument',
  'empty-state.status.list.open.subscribed.heading': 'Keine abonnierten Aufgaben',
  'empty-state.status.list.open.subscribed.text':
    'Aufgaben, bei denen Sie mitmachen, werden hier angezeigt',

  /** Text used in the assignee input when there is no user assigned */
  'form.input.assignee.no-user-assigned.text': 'Nicht zugewiesen',
  /** Text used in the assignee input when searching and no users are found */
  'form.input.assignee.search.no-users.text': 'Keine Benutzer gefunden',
  /** Placeholder text used in the search box in the assignee input */
  'form.input.assignee.search.placeholder': 'Benutzernamen auswählen',
  /** Text used in the assignee input when user is not authorized */
  'form.input.assignee.unauthorized.text': 'Unautorisiert',
  /** Text used in the assignee input when user is not found */
  'form.input.assignee.user-not-found.text': 'Benutzer nicht gefunden',
  /** The label used in the create more toggle */
  'form.input.create-more.text': 'Mehr erstellen',
  /** The label used in the date input to remove the current value */
  'form.input.date.buttons.remove.text': 'Entfernen',
  /** Placeholder text used in the description input */
  'form.input.description.placeholder': 'Beschreibung hinzufügen',
  /** The label used in the target input to remove the current value */
  'form.input.target.buttons.remove.text': 'Zielinhalt entfernen',
  /** The text used in the target input when encountering a schema error */
  'form.input.target.error.schema-not-found': 'Schema nicht gefunden',
  /** The placeholder text used in the target input for the search component */
  'form.input.target.search.placeholder': 'Dokument auswählen',
  /** The placeholder text for the title input */
  'form.input.title.placeholder': 'Aufgabentitel',
  /** The status error message presented when the user does not supply a title */
  'form.status.error.title-required': 'Titel ist erforderlich',
  /** The status message upon successful creation of a task */
  'form.status.success': 'Aufgabe erstellt',

  /** The text displayed when no tasks are found */
  'list.empty.text': 'Keine Aufgaben',

  /** The label for the copy link menu item */
  'menuitem.copylink.text': 'Link zur Aufgabe kopieren',
  /** The label for the delete task menu item */
  'menuitem.delete.text': 'Aufgabe löschen',
  /** The label for the duplicate task menu item */
  'menuitem.duplicate.text': 'Aufgabe duplizieren',

  /** Fragment used to construct the first entry in the activity log */
  'panel.activity.created-fragment': 'hat diese Aufgabe erstellt',
  /** The title of the activity section of the task */
  'panel.activity.title': 'Aktivität',
  /** The text used in the activity log when unable to find the user */
  'panel.activity.unknown-user': 'Unbekannter Benutzer',
  /** The tooltip for the close button for the task panel */
  'panel.close.tooltip': 'Seitenleiste schließen',
  /** The placeholder text for the comment text box */
  'panel.comment.placeholder': 'Einen Kommentar hinzufügen...',
  /** The title used in the task panel when showing the create task form */
  'panel.create.title': 'Erstellen',
  /** The title used in the drafts pulldown */
  'panel.drafts.title': 'Entwürfe',
  /** The tooltip for the task navigation component */
  'panel.navigation.tooltip': 'Aufgaben öffnen',
  /** Title of the Tasks panel   */
  'panel.title': 'Aufgaben',

  /** Label for the Assigned Tab */
  'tab.assigned.label': 'Zugewiesen',
  /** Label for the Active Document Tab */
  'tab.document.label': 'Aktives Dokument',
  /** Label for the Subscribed Tab */
  'tab.subscribed.label': 'Abonniert',
})
