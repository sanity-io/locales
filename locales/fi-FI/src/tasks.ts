import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** The label for the create task action */
  'actions.create.text': 'Luo uusi tehtävä',
  /** The label for the open tasks panel action */
  'actions.open.text': 'Tehtävät',

  /** The label for the button to create a new task */
  'buttons.create.text': 'Luo tehtävä',
  /** The label for the button to discard changes */
  'buttons.discard.text': 'Hylkää',
  /** The label for the button to open the draft */
  'buttons.draft.text': 'Luonnos',
  /** The label for the button to create a new task */
  'buttons.new.text': 'Uusi tehtävä',
  /** The text for tooltip in the create a new task button when mode is upsell */
  'buttons.new.upsell-tooltip': 'Päivitä luodaksesi tehtäviä',
  /** The label for the button that will navigate to the next task */
  'buttons.next.tooltip': 'Siirry seuraavaan tehtävään',
  /** The label for the button that will previous to the next task */
  'buttons.previous.tooltip': 'Siirry edelliseen tehtävään',

  /** Text for the remove task dialog asking for confirmation of deletion */
  'dialog.remove-task.body': 'Oletko varma, että haluat poistaa tämän tehtävän?',
  /** The label for the cancel button on the remove task dialog */
  'dialog.remove-task.buttons.cancel.text': 'Peruuta',
  /** The label for the confirmation button on the remove task dialog */
  'dialog.remove-task.buttons.confirm.text': 'Poista',
  /** The title for the remove task dialog */
  'dialog.remove-task.title': 'Poista tehtävä',

  /** The text used as a placeholder for the footer action in a document with a single task */
  'document.footer.open-tasks.placeholder_one': 'Avaa tehtävä',
  /** The text used as a placeholder for the footer action in a document with multiple tasks */
  'document.footer.open-tasks.placeholder_other': 'Avaa tehtävät',
  /** The label used in the button in the footer action in a document with a single task */
  'document.footer.open-tasks.text_one': '{{count}} avoin tehtävä',
  /** The label used in the button in the footer action in a document with multiple tasks */
  'document.footer.open-tasks.text_other': '{{count}} avointa tehtävää',

  /** The heading in the tasks sidebar, in the assigned tab, when the user hasn't been assigned to any task*/
  'empty-state.list.assigned.heading': 'Sinulle ei ole osoitettu yhtään tehtävää',
  /** The text in the tasks sidebar, in the assigned tab, when the user hasn't been assigned to any task*/
  'empty-state.list.assigned.text': 'Kun sinulle osoitetaan tehtäviä, ne näkyvät täällä',
  /** The text in the tasks sidebar button any of the empty states is rendered*/
  'empty-state.list.create-new': 'Luo uusi tehtävä',
  /** The heading in the tasks sidebar, in the document tab, when the document doesn't have any task*/
  'empty-state.list.document.heading': 'Tässä dokumentissa ei ole vielä yhtään tehtävää',
  /** The text in the tasks sidebar, in the document tab, when the document doesn't have any task*/
  'empty-state.list.document.text': 'Kun dokumenttiin liitetään tehtäviä, ne näytetään täällä.',
  /** The heading in the tasks sidebar, when viewing the document tab, but there is not an active document*/
  'empty-state.list.no-active-document.heading': 'Avaa asiakirja nähdäksesi sen tehtävät',
  /** The text in the tasks sidebar, when viewing the document tab, but there is not an active document*/
  'empty-state.list.no-active-document.text': 'Aktiivisen asiakirjasi tehtävät näytetään täällä.',
  /** The heading in the tasks sidebar, in the subscriber tab, when the user is not subscribed to any task*/
  'empty-state.list.subscribed.heading': 'Et ole tilannut yhtään tehtävää',
  /** The text in the tasks sidebar, in the subscriber tab, when the user is not subscribed to any task*/
  'empty-state.list.subscribed.text':
    'Kun luot, muokkaat tai kommentoit tehtävää, tilaat sen automaattisesti',
  /** The heading in the tasks sidebar, in the assigned tab, under the closed details, when it's empty.*/
  'empty-state.status.list.closed.assigned.heading': 'Ei valmiita tehtäviä',
  /** The text in the tasks sidebar, in the assigned tab, under the closed details, when it's empty.*/
  'empty-state.status.list.closed.assigned.text':
    'Tehtävät, jotka olet merkinnyt tehdyiksi, näkyvät täällä',
  /** The heading in the tasks sidebar, in the document tab, under the closed details, when it's empty.*/
  'empty-state.status.list.closed.document.heading': 'Ei valmiita tehtäviä',
  /** The heading in the tasks sidebar, in the subscribed tab, under the closed details, when it's empty.*/
  'empty-state.status.list.closed.subscribed.heading': 'Ei valmiita tehtäviä',
  /** The text in the tasks sidebar, in the subscribed tab, under the closed details, when it's empty.*/
  'empty-state.status.list.closed.subscribed.text':
    'Tehtävät, joihin olet tilannut ja merkinnyt tehdyiksi, näkyvät täällä',
  /** The heading in the tasks sidebar, in the assigned tab, under the open details, when it's empty.*/
  'empty-state.status.list.open.assigned.heading': 'Olet ajan tasalla',
  /** The text in the tasks sidebar, in the assigned tab, under the open details, when it's empty.*/
  'empty-state.status.list.open.assigned.text': 'Uudet sinulle osoitetut tehtävät näkyvät täällä',
  /** The heading in the tasks sidebar, in the document tab, under the open details, when it's empty.*/
  'empty-state.status.list.open.document.heading': 'Ei tehtäviä tässä dokumentissa',
  /** The heading in the tasks sidebar, in the subscribed tab, under the open details, when it's empty.*/
  'empty-state.status.list.open.subscribed.heading': 'Ei tilattuja tehtäviä',
  /** The text in the tasks sidebar, in the subscribed tab, under the open details, when it's empty.*/
  'empty-state.status.list.open.subscribed.text': 'Tehtävät, joihin tilaat, näkyvät täällä',

  /** Text used in the assignee input when there is no user assigned */
  'form.input.assignee.no-user-assigned.text': 'Ei määrätty',
  /** Text used in the assignee input tooltip when there is no user assigned */
  'form.input.assignee.no-user-assigned.tooltip': 'Aseta vastuuhenkilö',
  /** Text used in the assignee input when searching and no users are found */
  'form.input.assignee.search.no-users.text': 'Käyttäjiä ei löytynyt',
  /** Placeholder text used in the search box in the assignee input */
  'form.input.assignee.search.placeholder': 'Valitse käyttäjätunnus',
  /** Text used in the assignee input when user is not authorized */
  'form.input.assignee.unauthorized.text': 'Ei oikeuksia',
  /** Text used in the assignee input tooltip when there is no user assigned */
  'form.input.assignee.user-assigned.tooltip': 'Vaihda vastuuhenkilöä',
  /** Text used in the assignee input when user is not found */
  'form.input.assignee.user-not-found.text': 'Käyttäjää ei löytynyt',
  /** The label used in the create more toggle */
  'form.input.create-more.text': 'Luo lisää',
  /** The label used in the date input button tooltip when it's empty */
  'form.input.date.buttons.empty.tooltip': 'Aseta määräaika',
  /** The label used in the date input to remove the current value */
  'form.input.date.buttons.remove.text': 'Poista',
  /** The label used in the date input button tooltip when it has value */
  'form.input.date.buttons.tooltip': 'Vaihda määräaikaa',
  /** Placeholder text used in the description input */
  'form.input.description.placeholder': 'Lisää kuvaus',
  /**  Text used in the tooltip in the status change button  */
  'form.input.status.button.tooltip': 'Vaihda tilaa',
  /** The label used in the target input to remove the current value */
  'form.input.target.buttons.remove.text': 'Poista kohdesisältö',
  /** The text used in the target input when encountering a schema error */
  'form.input.target.error.schema-not-found': 'Skeemaa ei löytynyt',
  /** The placeholder text used in the target input for the search component */
  'form.input.target.search.placeholder': 'Valitse dokumentti',
  /** The placeholder text for the title input */
  'form.input.title.placeholder': 'Tehtävän otsikko',
  /** The status error message presented when the user does not supply a title */
  'form.status.error.title-required': 'Otsikko vaaditaan',
  /** The status message upon successful creation of a task */
  'form.status.success': 'Tehtävä luotu',

  /** The text displayed when no tasks are found */
  'list.empty.text': 'Ei tehtäviä',
  /** The text displayed at the bottom of the tasks list inviting users provide feedback */
  'list.feedback.text': 'Auta meitä parantamaan, <Link>jaa palautetta tehtävistä</Link>',

  /** The label for the copy link menu item */
  'menuitem.copylink.text': 'Kopioi linkki tehtävään',
  /** The label for the delete task menu item */
  'menuitem.delete.text': 'Poista tehtävä',
  /** The label for the duplicate task menu item */
  'menuitem.duplicate.text': 'Kopioi tehtävä',
  /** The text for the duplicate task menu item tooltip when mode is upsell */
  'menuitem.duplicate.upsell-tooltip': 'Päivitä kopioidaksesi tehtäviä',

  /** Fragment used to construct the first entry in the activity log */
  'panel.activity.created-fragment': 'loi tämän tehtävän',
  /** The title of the activity section of the task */
  'panel.activity.title': 'Aktiviteetti',
  /** The text used in the activity log when unable to find the user */
  'panel.activity.unknown-user': 'Tuntematon käyttäjä',
  /** The tooltip for the close button for the task panel */
  'panel.close.tooltip': 'Sulje sivupalkki',
  /** The placeholder text for the comment text box */
  'panel.comment.placeholder': 'Lisää kommentti...',
  /** The placeholder text for the comment text box when mode is upsell */
  'panel.comment.placeholder.upsell': 'Päivitä kommentoidaksesi tehtäviä',
  /** The title used in the task panel when showing the create task form */
  'panel.create.title': 'Luo',
  /** The title used in the drafts pulldown */
  'panel.drafts.title': 'Luonnokset',
  /** The tooltip for the task navigation component */
  'panel.navigation.tooltip': 'Avaa tehtävät',
  /** Title of the Tasks panel   */
  'panel.title': 'Tehtävät',

  /** Label for the Assigned Tab */
  'tab.assigned.label': 'Määrätty',
  /** Label for the Active Document Tab */
  'tab.document.label': 'Aktiivinen asiakirja',
  /** Label for the Subscribed Tab */
  'tab.subscribed.label': 'Tilattu',
})
