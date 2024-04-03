import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** The label for the create task action */
  'actions.create.text': 'Nieuwe taak aanmaken',
  /** The label for the open tasks panel action */
  'actions.open.text': 'Taken',

  /** The label for the button to create a new task */
  'buttons.create.text': 'Taak aanmaken',
  /** The label for the button to discard changes */
  'buttons.discard.text': 'Verwijderen',
  /** The label for the button to open the draft */
  'buttons.draft.text': 'Concept',
  /** The label for the button to create a new task */
  'buttons.new.text': 'Nieuwe taak',
  /** The label for the button that will navigate to the next task */
  'buttons.next.tooltip': 'Ga naar volgende taak',
  /** The label for the button that will previous to the next task */
  'buttons.previous.tooltip': 'Ga naar vorige taak',

  /** Text for the remove task dialog asking for confirmation of deletion */
  'dialog.remove-task.body': 'Weet u zeker dat u deze taak wilt verwijderen?',
  /** Text for the remove task dialog clarifying that deletion is permanent */
  'dialog.remove-task.body2': 'Eenmaal verwijderd, kan het niet worden hersteld.',
  /** The label for the cancel button on the remove task dialog */
  'dialog.remove-task.buttons.cancel.text': 'Annuleren',
  /** The label for the confirmation button on the remove task dialog */
  'dialog.remove-task.buttons.confirm.text': 'Verwijderen',
  /** The title for the remove task dialog */
  'dialog.remove-task.title': 'Taak verwijderen',

  /** The text used as a placeholder for the footer action in a document with a single task */
  'document.footer.open-tasks.placeholder_one': 'Taak openen',
  /** The text used as a placeholder for the footer action in a document with multiple tasks */
  'document.footer.open-tasks.placeholder_other': 'Taken openen',
  /** The label used in the button in the footer action in a document with a single task */
  'document.footer.open-tasks.text_one': '{{count}} openstaande taak',
  /** The label used in the button in the footer action in a document with multiple tasks */
  'document.footer.open-tasks.text_other': '{{count}} openstaande taken',

  'empty-state.list.assigned.heading': 'Je hebt nog geen taken toegewezen gekregen',
  'empty-state.list.assigned.text': 'Zodra je taken toegewezen krijgt, zullen ze hier verschijnen',
  'empty-state.list.create-new': 'Nieuwe taak aanmaken',
  'empty-state.list.document.heading': 'Dit document heeft nog geen taken',
  'empty-state.list.document.text':
    'Zodra een document verbonden taken heeft, zullen ze hier getoond worden.',
  'empty-state.list.subscribed.heading': 'Je hebt je nog niet ingeschreven voor taken',
  'empty-state.list.subscribed.text':
    'Wanneer je een taak aanmaakt, wijzigt of erop reageert, word je automatisch ingeschreven',
  'empty-state.status.list.closed.assigned.heading': 'Geen voltooide taken',
  'empty-state.status.list.closed.assigned.text':
    'Uw taken gemarkeerd als voltooid zullen hier verschijnen',
  'empty-state.status.list.closed.document.heading': 'Geen voltooide taken',
  'empty-state.status.list.closed.subscribed.heading': 'Geen voltooide taken',
  'empty-state.status.list.closed.subscribed.text':
    'Taken waarop u geabonneerd bent en gemarkeerd als voltooid zullen hier verschijnen',
  'empty-state.status.list.open.assigned.heading': 'Je bent helemaal bij',
  'empty-state.status.list.open.assigned.text':
    'Nieuwe aan jou toegewezen taken zullen hier verschijnen',
  'empty-state.status.list.open.document.heading': 'Geen taken bij dit document',
  'empty-state.status.list.open.subscribed.heading': 'Geen geabonneerde taken',
  'empty-state.status.list.open.subscribed.text':
    'Taken waarop u geabonneerd bent zullen hier verschijnen',

  /** Text used in the assignee input when there is no user assigned */
  'form.input.assignee.no-user-assigned.text': 'Niet toegewezen',
  /** Text used in the assignee input when searching and no users are found */
  'form.input.assignee.search.no-users.text': 'Geen gebruikers gevonden',
  /** Placeholder text used in the search box in the assignee input */
  'form.input.assignee.search.placeholder': 'Selecteer gebruikersnaam',
  /** Text used in the assignee input when user is not authorized */
  'form.input.assignee.unauthorized.text': 'Niet geautoriseerd',
  /** Text used in the assignee input when user is not found */
  'form.input.assignee.user-not-found.text': 'Gebruiker niet gevonden',
  /** The label used in the create more toggle */
  'form.input.create-more.text': 'Meer aanmaken',
  /** The label used in the date input to remove the current value */
  'form.input.date.buttons.remove.text': 'Verwijderen',
  /** Placeholder text used in the description input */
  'form.input.description.placeholder': 'Voeg beschrijving toe',
  /** The label used in the target input to remove the current value */
  'form.input.target.buttons.remove.text': 'Verwijder doelinhoud',
  /** The text used in the target input when encountering a schema error */
  'form.input.target.error.schema-not-found': 'Schema niet gevonden',
  /** The placeholder text used in the target input for the search component */
  'form.input.target.search.placeholder': 'Selecteer document',
  /** The placeholder text for the title input */
  'form.input.title.placeholder': 'Taak titel',
  /** The status error message presented when the user does not supply a title */
  'form.status.error.title-required': 'Titel is vereist',
  /** The status message upon successful creation of a task */
  'form.status.success': 'Taak aangemaakt',

  /** The text displayed when no tasks are found */
  'list.empty.text': 'Geen taken',

  /** The label for the copy link menu item */
  'menuitem.copylink.text': 'Kopieer link naar taak',
  /** The label for the delete task menu item */
  'menuitem.delete.text': 'Taak verwijderen',
  /** The label for the duplicate task menu item */
  'menuitem.duplicate.text': 'Taak dupliceren',

  /** Fragment used to construct the first entry in the activity log */
  'panel.activity.created-fragment': 'heeft deze taak aangemaakt',
  /** The title of the activity section of the task */
  'panel.activity.title': 'Activiteit',
  /** The text used in the activity log when unable to find the user */
  'panel.activity.unknown-user': 'Onbekende gebruiker',
  /** The tooltip for the close button for the task panel */
  'panel.close.tooltip': 'Zijbalk sluiten',
  /** The placeholder text for the comment text box */
  'panel.comment.placeholder': 'Voeg een opmerking toe...',
  /** The title used in the task panel when showing the create task form */
  'panel.create.title': 'Aanmaken',
  /** The title used in the drafts pulldown */
  'panel.drafts.title': 'Concepten',
  /** The tooltip for the task navigation component */
  'panel.navigation.tooltip': 'Taken openen',
  /** Title of the Tasks panel   */
  'panel.title': 'Taken',

  /** Label for the Assigned Tab */
  'tab.assigned.label': 'Toegewezen',
  /** Label for the Active Document Tab */
  'tab.document.label': 'Actief Document',
  /** Label for the Subscribed Tab */
  'tab.subscribed.label': 'Geabonneerd',
})
