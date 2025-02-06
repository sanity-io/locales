import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** The label for the create task action */
  'actions.create.text': 'Új feladat létrehozása',
  /** The label for the open tasks panel action */
  'actions.open.text': 'Feladatok',

  /** The label for the button to create a new task */
  'buttons.create.text': 'Feladat létrehozása',
  /** The label for the button to discard changes */
  'buttons.discard.text': 'Elvetés',
  /** The label for the button to open the draft */
  'buttons.draft.text': 'Vázlat',
  /** The label for the button to create a new task */
  'buttons.new.text': 'Új feladat',
  /** The text for tooltip in the create a new task button when mode is upsell */
  'buttons.new.upsell-tooltip': 'Fizess elő feladatok létrehozásához',
  /** The label for the button that will navigate to the next task */
  'buttons.next.tooltip': 'Ugrás a következő feladatra',
  /** The label for the button that will previous to the next task */
  'buttons.previous.tooltip': 'Ugrás az előző feladatra',

  /** Text for the remove task dialog asking for confirmation of deletion */
  'dialog.remove-task.body': 'Biztosan törölni szeretnéd ezt a feladatot?',
  /** The label for the cancel button on the remove task dialog */
  'dialog.remove-task.buttons.cancel.text': 'Mégse',
  /** The label for the confirmation button on the remove task dialog */
  'dialog.remove-task.buttons.confirm.text': 'Eltávolítás',
  /** The title for the remove task dialog */
  'dialog.remove-task.title': 'Feladat eltávolítása',

  /** The text used as a placeholder for the footer action in a document with a single task */
  'document.footer.open-tasks.placeholder_one': 'Feladat megnyitása',
  /** The text used as a placeholder for the footer action in a document with multiple tasks */
  'document.footer.open-tasks.placeholder_other': 'Feladatok megnyitása',
  /** The label used in the button in the footer action in a document with a single task */
  'document.footer.open-tasks.text_one': '{{count}} nyitott feladat',
  /** The label used in the button in the footer action in a document with multiple tasks */
  'document.footer.open-tasks.text_other': '{{count}} nyitott feladat',

  /** The heading in the tasks sidebar, in the assigned tab, when the user hasn't been assigned to any task*/
  'empty-state.list.assigned.heading': 'Még nem lett feladat hozzárendelve',
  /** The text in the tasks sidebar, in the assigned tab, when the user hasn't been assigned to any task*/
  'empty-state.list.assigned.text': 'Amint feladatok lesznek hozzárendelve, itt fognak megjelenni',
  /** The text in the tasks sidebar button any of the empty states is rendered*/
  'empty-state.list.create-new': 'Új feladat létrehozása',
  /** The heading in the tasks sidebar, in the document tab, when the document doesn't have any task*/
  'empty-state.list.document.heading': 'Ehhez a dokumentumhoz még nincsenek feladatok',
  /** The text in the tasks sidebar, in the document tab, when the document doesn't have any task*/
  'empty-state.list.document.text':
    'Amint a dokumentumhoz kapcsolódó feladatok lesznek, itt fognak megjelenni.',
  /** The heading in the tasks sidebar, when viewing the document tab, but there is not an active document*/
  'empty-state.list.no-active-document.heading':
    'Nyiss meg egy dokumentumot a feladat megtekintéséhez',
  /** The text in the tasks sidebar, when viewing the document tab, but there is not an active document*/
  'empty-state.list.no-active-document.text':
    'Az aktív dokumentumon lévő feladatok itt jelennek meg.',
  /** The heading in the tasks sidebar, in the subscriber tab, when the user is not subscribed to any task*/
  'empty-state.list.subscribed.heading': 'Még nem iratkozotál fel feladatokra',
  /** The text in the tasks sidebar, in the subscriber tab, when the user is not subscribed to any task*/
  'empty-state.list.subscribed.text':
    'Amikor létrehozol, módosítasz vagy kommentálsz egy feladatot, automatikusan fel leszel rá iratkozva',
  /** The heading in the tasks sidebar, in the assigned tab, under the closed details, when it's empty.*/
  'empty-state.status.list.closed.assigned.heading': 'Nincsenek befejezett feladatok',
  /** The text in the tasks sidebar, in the assigned tab, under the closed details, when it's empty.*/
  'empty-state.status.list.closed.assigned.text':
    'Az késznek jelölt feladatok itt fognak megjelenni',
  /** The heading in the tasks sidebar, in the document tab, under the closed details, when it's empty.*/
  'empty-state.status.list.closed.document.heading': 'Nincsenek befejezett feladatok',
  /** The heading in the tasks sidebar, in the subscribed tab, under the closed details, when it's empty.*/
  'empty-state.status.list.closed.subscribed.heading': 'Nincsenek befejezett feladatok',
  /** The text in the tasks sidebar, in the subscribed tab, under the closed details, when it's empty.*/
  'empty-state.status.list.closed.subscribed.text':
    'Az Ön által követett és késznek jelölt feladatok itt fognak megjelenni',
  /** The heading in the tasks sidebar, in the assigned tab, under the open details, when it's empty.*/
  'empty-state.status.list.open.assigned.heading': 'Minden feladattal végeztél',
  /** The text in the tasks sidebar, in the assigned tab, under the open details, when it's empty.*/
  'empty-state.status.list.open.assigned.text':
    'Az Önnek kijelölt új feladatok itt fognak megjelenni',
  /** The heading in the tasks sidebar, in the document tab, under the open details, when it's empty.*/
  'empty-state.status.list.open.document.heading': 'Nincsenek feladatok ezen a dokumentumon',
  /** The heading in the tasks sidebar, in the subscribed tab, under the open details, when it's empty.*/
  'empty-state.status.list.open.subscribed.heading': 'Nincsenek követett feladatok',
  /** The text in the tasks sidebar, in the subscribed tab, under the open details, when it's empty.*/
  'empty-state.status.list.open.subscribed.text':
    'Az Ön által követett feladatok itt fognak megjelenni',

  /** Text used in the assignee input when there is no user assigned */
  'form.input.assignee.no-user-assigned.text': 'Nincs kijelölt felhasználó',
  /** Text used in the assignee input tooltip when there is no user assigned */
  'form.input.assignee.no-user-assigned.tooltip': 'Felelős beállítása',
  /** Text used in the assignee input when searching and no users are found */
  'form.input.assignee.search.no-users.text': 'Nem található felhasználó',
  /** Placeholder text used in the search box in the assignee input */
  'form.input.assignee.search.placeholder': 'Felelős kiválasztása',
  /** Text used in the assignee input when user is not authorized */
  'form.input.assignee.unauthorized.text': 'Jogosulatlan',
  /** Text used in the assignee input tooltip when there is no user assigned */
  'form.input.assignee.user-assigned.tooltip': 'Felelős megváltoztatása',
  /** Text used in the assignee input when user is not found */
  'form.input.assignee.user-not-found.text': 'Felhasználó nem található',
  /** The label used in the create more toggle */
  'form.input.create-more.text': 'Több létrehozása',
  /** The label used in the date input button tooltip when it's empty */
  'form.input.date.buttons.empty.tooltip': 'Határidő beállítása',
  /** The label used in the date input to remove the current value */
  'form.input.date.buttons.remove.text': 'Eltávolítás',
  /** The label used in the date input button tooltip when it has value */
  'form.input.date.buttons.tooltip': 'Határidő megváltoztatása',
  /** Placeholder text used in the description input */
  'form.input.description.placeholder': 'Leírás hozzáadása',
  /**  Text used in the tooltip in the status change button  */
  'form.input.status.button.tooltip': 'Státusz megváltoztatása',
  /** The label used in the target input to remove the current value */
  'form.input.target.buttons.remove.text': 'Cél tartalom eltávolítása',
  /** The text used in the target input when encountering a schema error */
  'form.input.target.error.schema-not-found': 'Séma nem található',
  /** The placeholder text used in the target input for the search component */
  'form.input.target.search.placeholder': 'Válassza ki a cél dokumentumot',
  /** The placeholder text for the title input */
  'form.input.title.placeholder': 'Feladat címe',
  /** The status error message presented when the user does not supply a title */
  'form.status.error.title-required': 'A cím megadása kötelező',
  /** The status message upon successful creation of a task */
  'form.status.success': 'Feladat létrehozva',

  /** The text displayed when no tasks are found */
  'list.empty.text': 'Nincsenek feladatok',
  /** The text displayed at the bottom of the tasks list inviting users provide feedback */
  'list.feedback.text':
    'Segítsen nekünk fejlődni, <Link>ossza meg visszajelzését a Feladatokról</Link>',

  /** The label for the copy link menu item */
  'menuitem.copylink.text': 'Feladat linkjének másolása',
  /** The label for the delete task menu item */
  'menuitem.delete.text': 'Feladat törlése',
  /** The label for the duplicate task menu item */
  'menuitem.duplicate.text': 'Feladat másolása',
  /** The text for the duplicate task menu item tooltip when mode is upsell */
  'menuitem.duplicate.upsell-tooltip': 'Frissítés a feladatok duplikálásához',

  /** Fragment used to construct the first entry in the activity log */
  'panel.activity.created-fragment': 'létrehozta ezt a feladatot',
  /** The title of the activity section of the task */
  'panel.activity.title': 'Tevékenység',
  /** The text used in the activity log when unable to find the user */
  'panel.activity.unknown-user': 'Ismeretlen felhasználó',
  /** The tooltip for the close button for the task panel */
  'panel.close.tooltip': 'Oldalsáv bezárása',
  /** The placeholder text for the comment text box */
  'panel.comment.placeholder': 'Hozzászólás hozzáadása...',
  /** The placeholder text for the comment text box when mode is upsell */
  'panel.comment.placeholder.upsell': 'Frissítés a feladatok megjegyzéséhez',
  /** The title used in the task panel when showing the create task form */
  'panel.create.title': 'Létrehozás',
  /** The title used in the drafts pulldown */
  'panel.drafts.title': 'Piszkozatok',
  /** The tooltip for the task navigation component */
  'panel.navigation.tooltip': 'Feladatok megnyitása',
  /** Title of the Tasks panel   */
  'panel.title': 'Feladatok',

  /** Label for the Assigned Tab */
  'tab.assigned.label': 'Hozzárendelve',
  /** Label for the Active Document Tab */
  'tab.document.label': 'Aktív Dokumentum',
  /** Label for the Subscribed Tab */
  'tab.subscribed.label': 'Feliratkozva',

  /** Tooltip for the tasks navbar icon */
  'toolbar.tooltip': 'Feladatok',
})
