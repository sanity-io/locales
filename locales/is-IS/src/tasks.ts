import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** The label for the create task action */
  'actions.create.text': 'Búa til nýtt verkefni',
  /** The label for the open tasks panel action */
  'actions.open.text': 'Verkefni',

  /** The label for the button to create a new task */
  'buttons.create.text': 'Búa til verkefni',
  /** The label for the button to discard changes */
  'buttons.discard.text': 'Hætta við',
  /** The label for the button to open the draft */
  'buttons.draft.text': 'Drög',
  /** The label for the button to create a new task */
  'buttons.new.text': 'Nýtt verkefni',
  /** The label for the button that will navigate to the next task */
  'buttons.next.tooltip': 'Fara á næsta verkefni',
  /** The label for the button that will previous to the next task */
  'buttons.previous.tooltip': 'Fara á fyrri verkefni',

  /** Text for the remove task dialog asking for confirmation of deletion */
  'dialog.remove-task.body': 'Ertu viss um að þú viljir eyða þessu verkefni?',
  /** Text for the remove task dialog clarifying that deletion is permanent */
  'dialog.remove-task.body2': 'Einu sinni eytt, þá er ekki hægt að endurheimta það.',
  /** The label for the cancel button on the remove task dialog */
  'dialog.remove-task.buttons.cancel.text': 'Hætta við',
  /** The label for the confirmation button on the remove task dialog */
  'dialog.remove-task.buttons.confirm.text': 'Fjarlægja',
  /** The title for the remove task dialog */
  'dialog.remove-task.title': 'Fjarlægja verkefni',

  /** The text used as a placeholder for the footer action in a document with a single task */
  'document.footer.open-tasks.placeholder_one': 'Opna verkefni',
  /** The text used as a placeholder for the footer action in a document with multiple tasks */
  'document.footer.open-tasks.placeholder_other': 'Opna verkefni',
  /** The label used in the button in the footer action in a document with a single task */
  'document.footer.open-tasks.text_one': '{{count}} opið verkefni',
  /** The label used in the button in the footer action in a document with multiple tasks */
  'document.footer.open-tasks.text_other': '{{count}} opin verkefni',

  'empty-state.list.assigned.heading': 'Þér hefur ekki verið úthlutað neinum verkefnum',
  'empty-state.list.assigned.text': 'Þegar þér hefur verið úthlutað verkefnum munu þau birtast hér',
  'empty-state.list.create-new': 'Búa til nýtt verkefni',
  'empty-state.list.document.heading': 'Þetta skjal hefur engin verkefni ennþá',
  'empty-state.list.document.text': 'Þegar skjal hefur tengd verkefni, munu þau birtast hér.',
  'empty-state.list.subscribed.heading': 'Þú hefur ekki skráð þig á nein verkefni',
  'empty-state.list.subscribed.text':
    'Þegar þú býrð til, breytir eða skrifar athugasemd við verkefni munt þú vera sjálfkrafa skráð(ur)',
  'empty-state.status.list.closed.assigned.heading': 'Engin lokið verkefni',
  'empty-state.status.list.closed.assigned.text':
    'Verkefni sem þú hefur merkt sem lokið munu birtast hér',
  'empty-state.status.list.closed.document.heading': 'Engin lokið verkefni',
  'empty-state.status.list.closed.subscribed.heading': 'Engin lokið verkefni',
  'empty-state.status.list.closed.subscribed.text':
    'Verkefni sem þú ert áskrifandi að og eru merkt sem lokið munu birtast hér',
  'empty-state.status.list.open.assigned.heading': 'Þú ert alveg búinn',
  'empty-state.status.list.open.assigned.text':
    'Ný verkefni sem eru úthlutað til þín munu birtast hér',
  'empty-state.status.list.open.document.heading': 'Engin verkefni á þessu skjali',
  'empty-state.status.list.open.subscribed.heading': 'Engin áskriftarverkefni',
  'empty-state.status.list.open.subscribed.text':
    'Verkefni sem þú ert áskrifandi að munu birtast hér',

  /** Text used in the assignee input when there is no user assigned */
  'form.input.assignee.no-user-assigned.text': 'Ekki úthlutað',
  /** Text used in the assignee input when searching and no users are found */
  'form.input.assignee.search.no-users.text': 'Engir notendur fundust',
  /** Placeholder text used in the search box in the assignee input */
  'form.input.assignee.search.placeholder': 'Veldu notendanafn',
  /** Text used in the assignee input when user is not authorized */
  'form.input.assignee.unauthorized.text': 'Óheimilt',
  /** Text used in the assignee input when user is not found */
  'form.input.assignee.user-not-found.text': 'Notandi fannst ekki',
  /** The label used in the create more toggle */
  'form.input.create-more.text': 'Búa til fleiri',
  /** The label used in the date input to remove the current value */
  'form.input.date.buttons.remove.text': 'Fjarlægja',
  /** Placeholder text used in the description input */
  'form.input.description.placeholder': 'Bættu við lýsingu',
  /** The label used in the target input to remove the current value */
  'form.input.target.buttons.remove.text': 'Fjarlægja markmiðsefni',
  /** The text used in the target input when encountering a schema error */
  'form.input.target.error.schema-not-found': 'Skema fannst ekki',
  /** The placeholder text used in the target input for the search component */
  'form.input.target.search.placeholder': 'Veldu skjal',
  /** The placeholder text for the title input */
  'form.input.title.placeholder': 'Titill verkefnis',
  /** The status error message presented when the user does not supply a title */
  'form.status.error.title-required': 'Titill er nauðsynlegur',
  /** The status message upon successful creation of a task */
  'form.status.success': 'Verkefni búið til',

  /** The text displayed when no tasks are found */
  'list.empty.text': 'Engin verkefni',

  /** The label for the copy link menu item */
  'menuitem.copylink.text': 'Afrita tengil á verkefni',
  /** The label for the delete task menu item */
  'menuitem.delete.text': 'Eyða verkefni',
  /** The label for the duplicate task menu item */
  'menuitem.duplicate.text': 'Tvöfalda verkefni',

  /** Fragment used to construct the first entry in the activity log */
  'panel.activity.created-fragment': 'búið til þetta verkefni',
  /** The title of the activity section of the task */
  'panel.activity.title': 'Virkni',
  /** The text used in the activity log when unable to find the user */
  'panel.activity.unknown-user': 'Óþekktur notandi',
  /** The tooltip for the close button for the task panel */
  'panel.close.tooltip': 'Loka hliðarstiku',
  /** The placeholder text for the comment text box */
  'panel.comment.placeholder': 'Bættu við athugasemd...',
  /** The title used in the task panel when showing the create task form */
  'panel.create.title': 'Búa til',
  /** The title used in the drafts pulldown */
  'panel.drafts.title': 'Drög',
  /** The tooltip for the task navigation component */
  'panel.navigation.tooltip': 'Opna verkefni',
  /** Title of the Tasks panel   */
  'panel.title': 'Verkefni',

  /** Label for the Assigned Tab */
  'tab.assigned.label': 'Úthlutað',
  /** Label for the Active Document Tab */
  'tab.document.label': 'Virk skjal',
  /** Label for the Subscribed Tab */
  'tab.subscribed.label': 'Áskrifandi',
})
