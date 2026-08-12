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
  /** The text for tooltip in the create a new task button when mode is upsell */
  'buttons.new.upsell-tooltip': 'Upgrade, um Aufgaben zu erstellen',
  /** The label for the button that will navigate to the next task */
  'buttons.next.tooltip': 'Zur nächsten Aufgabe gehen',
  /** The label for the button that will previous to the next task */
  'buttons.previous.tooltip': 'Zur vorherigen Aufgabe gehen',

  /** Text for the remove task dialog asking for confirmation of deletion */
  'dialog.remove-task.body': 'Einmal gelöscht, kann eine Aufgabe nicht wiederhergestellt werden.',
  /** The label for the cancel button on the remove task dialog */
  'dialog.remove-task.buttons.cancel.text': 'Abbrechen',
  /** The label for the confirmation button on the remove task dialog */
  'dialog.remove-task.buttons.confirm.text': 'Löschen',
  /** The title for the remove task dialog */
  'dialog.remove-task.title': 'Diese Aufgabe löschen?',

  /** The text used as a placeholder for the footer action in a document with a single task */
  'document.footer.open-tasks.placeholder_one': 'Aufgabe öffnen',
  /** The text used as a placeholder for the footer action in a document with multiple tasks */
  'document.footer.open-tasks.placeholder_other': 'Aufgaben öffnen',
  /** The label used in the button in the footer action in a document with a single task */
  'document.footer.open-tasks.text_one': '{{count}} offene Aufgabe',
  /** The label used in the button in the footer action in a document with multiple tasks */
  'document.footer.open-tasks.text_other': '{{count}} offene Aufgaben',

  /** The heading in the tasks sidebar, in the assigned tab, when the user hasn't been assigned to any task*/
  'empty-state.list.assigned.heading': 'Ihnen wurden noch keine Aufgaben zugewiesen',
  /** The text in the tasks sidebar, in the assigned tab, when the user hasn't been assigned to any task*/
  'empty-state.list.assigned.text': 'Sobald Ihnen Aufgaben zugewiesen werden, erscheinen sie hier',
  /** The text in the tasks sidebar button any of the empty states is rendered*/
  'empty-state.list.create-new': 'Neue Aufgabe erstellen',
  /** The heading in the tasks sidebar, in the document tab, when the document doesn't have any task*/
  'empty-state.list.document.heading': 'Dieses Dokument hat noch keine Aufgaben',
  /** The text in the tasks sidebar, in the document tab, when the document doesn't have any task*/
  'empty-state.list.document.text':
    'Sobald ein Dokument verbundene Aufgaben hat, werden diese hier angezeigt.',
  /** The heading in the tasks sidebar, when viewing the document tab, but there is not an active document*/
  'empty-state.list.no-active-document.heading':
    'Öffnen Sie ein Dokument, um dessen Aufgaben zu sehen',
  /** The text in the tasks sidebar, when viewing the document tab, but there is not an active document*/
  'empty-state.list.no-active-document.text':
    'Aufgaben in Ihrem aktiven Dokument werden hier angezeigt.',
  /** The heading in the tasks sidebar, in the subscriber tab, when the user is not subscribed to any task*/
  'empty-state.list.subscribed.heading': 'Sie haben keine Aufgaben abonniert',
  /** The text in the tasks sidebar, in the subscriber tab, when the user is not subscribed to any task*/
  'empty-state.list.subscribed.text':
    'Wenn Sie eine Aufgabe erstellen, ändern oder kommentieren, werden Sie automatisch abonniert',
  /** The heading in the tasks sidebar, in the assigned tab, under the closed details, when it's empty.*/
  'empty-state.status.list.closed.assigned.heading': 'Keine abgeschlossenen Aufgaben',
  /** The text in the tasks sidebar, in the assigned tab, under the closed details, when it's empty.*/
  'empty-state.status.list.closed.assigned.text':
    'Ihre als erledigt markierten Aufgaben werden hier angezeigt',
  /** The heading in the tasks sidebar, in the document tab, under the closed details, when it's empty.*/
  'empty-state.status.list.closed.document.heading': 'Keine abgeschlossenen Aufgaben',
  /** The heading in the tasks sidebar, in the subscribed tab, under the closed details, when it's empty.*/
  'empty-state.status.list.closed.subscribed.heading': 'Keine abgeschlossenen Aufgaben',
  /** The text in the tasks sidebar, in the subscribed tab, under the closed details, when it's empty.*/
  'empty-state.status.list.closed.subscribed.text':
    'Aufgaben, die Sie abonniert haben und als erledigt markiert sind, werden hier angezeigt',
  /** The heading in the tasks sidebar, in the assigned tab, under the open details, when it's empty.*/
  'empty-state.status.list.open.assigned.heading': 'Sie sind auf dem neuesten Stand',
  /** The text in the tasks sidebar, in the assigned tab, under the open details, when it's empty.*/
  'empty-state.status.list.open.assigned.text': 'Neu zugewiesene Aufgaben werden hier angezeigt',
  /** The heading in the tasks sidebar, in the document tab, under the open details, when it's empty.*/
  'empty-state.status.list.open.document.heading': 'Keine Aufgaben zu diesem Dokument',
  /** The heading in the tasks sidebar, in the subscribed tab, under the open details, when it's empty.*/
  'empty-state.status.list.open.subscribed.heading': 'Keine abonnierten Aufgaben',
  /** The text in the tasks sidebar, in the subscribed tab, under the open details, when it's empty.*/
  'empty-state.status.list.open.subscribed.text':
    'Aufgaben, die Sie abonnieren, werden hier angezeigt',

  /** Text used in the assignee input when there is no user assigned */
  'form.input.assignee.no-user-assigned.text': 'Nicht zugewiesen',
  /** Text used in the assignee input tooltip when there is no user assigned */
  'form.input.assignee.no-user-assigned.tooltip': 'Zuweisenden festlegen',
  /** Text used in the assignee input when searching and no users are found */
  'form.input.assignee.search.no-users.text': 'Keine Benutzer gefunden',
  /** Placeholder text used in the search box in the assignee input */
  'form.input.assignee.search.placeholder': 'Zuweisenden auswählen',
  /** Text used in the assignee input when user is not authorized */
  'form.input.assignee.unauthorized.text': 'Unautorisiert',
  /** Text used in the assignee input tooltip when there is no user assigned */
  'form.input.assignee.user-assigned.tooltip': 'Zuweisenden ändern',
  /** Text used in the assignee input when user is not found */
  'form.input.assignee.user-not-found.text': 'Benutzer nicht gefunden',
  /** The label used in the create more toggle */
  'form.input.create-more.text': 'Mehr erstellen',
  /** The label used in the date input button tooltip when it's empty */
  'form.input.date.buttons.empty.tooltip': 'Fälligkeitsdatum festlegen',
  /** The label used in the date input to remove the current value */
  'form.input.date.buttons.remove.text': 'Entfernen',
  /** The label used in the date input button tooltip when it has value */
  'form.input.date.buttons.tooltip': 'Fälligkeitsdatum ändern',
  /** Placeholder text used in the description input */
  'form.input.description.placeholder': 'Beschreibung hinzufügen',
  /**  Text used in the tooltip in the status change button  */
  'form.input.status.button.tooltip': 'Status ändern',
  /** The label used in the target input to remove the current value */
  'form.input.target.buttons.remove.text': 'Zielinhalt entfernen',
  /** The text used in the target input when encountering a schema error */
  'form.input.target.error.schema-not-found': 'Schema nicht gefunden',
  /** The placeholder text used in the target input for the search component */
  'form.input.target.search.placeholder': 'Zieldokument auswählen',
  /** The placeholder text for the title input */
  'form.input.title.placeholder': 'Aufgabentitel',
  /** The status error message presented when the user does not supply a title */
  'form.status.error.title-required': 'Titel ist erforderlich',
  /** The status message upon successful creation of a task */
  'form.status.success': 'Aufgabe erstellt',

  /** The text displayed when no tasks are found */
  'list.empty.text': 'Keine Aufgaben',
  /** The text displayed at the bottom of the tasks list inviting users provide feedback */
  'list.feedback.text':
    'Helfen Sie uns, besser zu werden, <Link>geben Sie Feedback zu Aufgaben</Link>',

  /** The label for the copy link menu item */
  'menuitem.copylink.text': 'Link zur Aufgabe kopieren',
  /** The label for the delete task menu item */
  'menuitem.delete.text': 'Aufgabe löschen',
  /** The label for the duplicate task menu item */
  'menuitem.duplicate.text': 'Aufgabe duplizieren',
  /** The text for the duplicate task menu item tooltip when mode is upsell */
  'menuitem.duplicate.upsell-tooltip': 'Upgrade, um Aufgaben zu duplizieren',

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
  /** The placeholder text for the comment text box when mode is upsell */
  'panel.comment.placeholder.upsell': 'Upgrade, um Kommentare zu Aufgaben hinzuzufügen',
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

  /** Tooltip for the tasks navbar icon */
  'toolbar.tooltip': 'Aufgaben',
})
