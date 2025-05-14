import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** The close comments button text */
  'close-pane-button-text': 'Aizvērt komentārus',

  /** The aria label for the close comments button */
  'close-pane-button-text-aria-label': 'Aizvērt komentārus',

  /** When composing a comment, the placeholder text shown when adding a comment to a field with no current comments */
  'compose.add-comment-input-placeholder': 'Pievienot komentāru laukam <strong>{{field}}</strong>',
  /** When composing a comment, the placeholder text shown when adding a comment to a field with no current comments and the mode is upsell */
  'compose.add-comment-input-placeholder-upsell': 'Jauniniet, lai pievienotu komentāru',
  /** When composing a comment, the placeholder text shown when the input is empty */
  'compose.create-comment-placeholder': 'Izveidot jaunu komentāru',
  /** When composing a comment, the aria label for the button to mention a user */
  'compose.mention-user-aria-label': 'Minēt lietotāju',
  /** When composing a comment, the tooltip text for the button to mention a user */
  'compose.mention-user-tooltip': 'Minēt lietotāju',
  /** When composing a reply, the placeholder text shown when the input is empty */
  'compose.reply-placeholder': 'Atbildēt',
  /** When composing a reply, the placeholder text shown when the input is empty and the mode is upsell */
  'compose.reply-placeholder-upsell': 'Jauniniet, lai atbildētu',
  /** When composing a comment, the aria label for the button to send a comment */
  'compose.send-comment-aria-label': 'Nosūtīt komentāru',
  /** When composing a comment, the tooltip text for the button to send a comment */
  'compose.send-comment-tooltip': 'Nosūtīt komentāru',

  /** The inspector text when error copying link */
  'copy-link-error-message': 'Nevar nokopēt saiti uz starpliktuvi',

  /** The delete dialog body for a comment */
  'delete-comment.body': 'Kad komentārs ir dzēsts, to nevar atjaunot.',
  /** The delete dialog confirm button text for a comment */
  'delete-comment.confirm': 'Dzēst komentāru',
  /** The delete dialog title for a comment */
  'delete-comment.title': 'Dzēst šo komentāru?',

  /** The delete dialog error */
  'delete-dialog.error': 'Dzēšot komentāru radās kļūda. Lūdzu, mēģiniet vēlreiz.',

  /** The delete dialog body for a thread */
  'delete-thread.body':
    'Šis komentārs un tā atbildes tiks dzēsti, un pēc dzēšanas tos nevarēs atjaunot.',
  /** The delete dialog conform button text for a thread */
  'delete-thread.confirm': 'Dzēst pavedienu',
  /** The delete dialog title for a thread */
  'delete-thread.title': 'Dzēst šo komentāru pavedienu?',

  /** The button text for confirming discard */
  'discard.button-confirm': 'Atmest',
  /** The header for discard comment dialog */
  'discard.header': 'Atmest komentāru?',
  /** The text for discard comment dialog */
  'discard.text': 'Vai vēlaties atmest komentāru?',

  /** Sharing feedback on the comments feature: The link title */
  'feature-feedback.link': 'Dalīties ar atsauksmēm',
  /** Sharing feedback on the comments feature: The form title  */
  'feature-feedback.title': 'Palīdziet uzlabot ',

  /** The name of the comments feature, for use in header. Capitalized, eg "Comments". */
  'feature-name': 'Komentāri',

  /** Aria label for button above fields to add a comment, when the field currently do not have any comments */
  'field-button.aria-label-add': 'Pievienot komentāru',
  /** Aria label for button above fields that opens the comments for this field, when there are existing comments */
  'field-button.aria-label-open': 'Atvērt komentārus',
  /** Text shown in popover when hovering the button above fields that opens the comments panel, when there is a single comment present */
  'field-button.content_one': 'Skatīt komentāru',
  /** Text shown in popover when hovering the button above fields that opens the comments panel, when there are more than one comment present */
  'field-button.content_other': 'Skatīt komentārus',
  /** Text shown in popover when hovering the button above fields to add a comment, when the field currently do not have any comments */
  'field-button.title': 'Pievienot komentāru',

  /* The text shown in the inline comment button when the button is disabled due to overlap */
  'inline-add-comment-button.disabled-overlap-title': 'Komentāri nevar pārklāties',
  /** The text shown in the inline comment button */
  'inline-add-comment-button.title': 'Pievienot komentāru',

  /** Aria label for the breadcrumb button showing the field path. `{{field}}` is the last (most specific) field. */
  'list-item.breadcrumb-button-go-to-field-aria-label': 'Doties uz {{field}} lauku',
  /** The button tooltip content for the add reaction button */
  'list-item.context-menu-add-reaction': 'Pievienot reakciju',
  /** The button tooltip aria label for adding a reaction */
  'list-item.context-menu-add-reaction-aria-label': 'Pievienot reakciju',
  /** The button tooltip content for the add reaction button and mode is upsell */
  'list-item.context-menu-add-reaction-upsell': 'Jaunināt, lai pievienotu reakciju',
  /** The action menu item for copying a comment link */
  'list-item.copy-link': 'Kopēt saiti uz komentāru',
  /** The action menu item for deleting a comment */
  'list-item.delete-comment': 'Dzēst komentāru',
  /** The action menu item for editing a comment */
  'list-item.edit-comment': 'Rediģēt komentāru',
  /** The action menu item for editing a comment and the mode is upsell */
  'list-item.edit-comment-upsell': 'Jaunināt, lai rediģētu komentāru',
  /** Aria label for the button that takes you to the field, which wraps a thread/comment */
  'list-item.go-to-field-button.aria-label': 'Doties uz lauku',
  /**
   * The text shown below the author and timestamp of a comment including a link back to the context in which the comment was made.
   * Consists of a document title wrapped in a link, and a word or phrase to indicate that the link refers to a location:
   * eg "on Home", "on Coffee Machine | Products", "on Pricing – Sanity"
   */
  'list-item.layout-context': 'uz <IntentLink>{{title}}</IntentLink>',
  /** The marker to indicate that a comment has been edited in brackets */
  'list-item.layout-edited': 'rediģēts',
  /** The error text when sending a comment has failed */
  'list-item.layout-failed-sent': 'Neizdevās nosūtīt.',
  /** The loading message when posting a comment is in progress */
  'list-item.layout-posting': 'Ierakstīšana...',
  /** The text for retrying posting a comment */
  'list-item.layout-retry': 'Mēģināt vēlreiz',
  /** The text shown when the value a comment references has been deleted */
  'list-item.missing-referenced-value-tooltip-content': 'Komentētais teksts ir izdzēsts',
  /** The aria label for the comments menu button to open the actions menu */
  'list-item.open-menu-aria-label': 'Atvērt komentāru darbību izvēlni',
  /** The button text to re-open a resolved comment  */
  'list-item.re-open-resolved': 'Atkārtoti atvērt',
  /** The button aria label to re-open a comment that is resolved */
  'list-item.re-open-resolved-aria-label': 'Atkārtoti atvērt',
  /** The button aria label to mark a comment as resolved */
  'list-item.resolved-tooltip-aria-label': 'Atzīmēt komentāru kā izskatītu',
  /** The button text to mark a comment as resolved */
  'list-item.resolved-tooltip-content': 'Atzīmēt kā izskatītu',

  /** The empty state text for open comments */
  'list-status.empty-state-open-text': 'Šajā dokumentā atvērtie komentāri tiks rādīti šeit.',
  /** The empty state title for open comments */
  'list-status.empty-state-open-title': 'Vēl nav atvērtu komentāru',
  /** The empty state text for resolved comments */
  'list-status.empty-state-resolved-text': 'Šajā dokumentā izskatītie komentāri tiks rādīti šeit.',
  /** The empty state title for resolved comments */
  'list-status.empty-state-resolved-title': 'Vēl nav izskatītu komentāru',
  /** The list status message for error */
  'list-status.error': 'Kaut kas nogāja greizi',
  /** The list status message for loading status */
  'list-status.loading': 'Ielādē komentārus',

  /** Text shown when no users can be found to mention */
  'mentions.no-users-found': 'Lietotāji nav atrasti',
  /** Label/badge shown for users that are not authorized to see the document, and thus cannot be mentioned */
  'mentions.unauthorized-user': 'Neautorizēts',
  /** Aria label for the command list for users to mention */
  'mentions.user-list-aria-label': 'Lietotāju saraksts, lai pieminētu',

  /** The comments onboarding popover text */
  'onboarding.body':
    'Jūs varat pievienot komentārus jebkuram laukam dokumentā. Tie parādīsies šeit, grupēti pēc lauka.',
  /** The comments onboarding dismiss text */
  'onboarding.dismiss': 'Sapratu',
  /** The comments onboarding popover header text */
  'onboarding.header': 'Dokumenta laukiem tagad ir komentāri',

  /** Tooltip for the button to add a reaction to a comment */
  'reactions.add-reaction-tooltip': 'Pievienot reakciju',
  /** Aria label for the individual reactions you can choose from when reacting to a comment */
  'reactions.react-with-aria-label': 'Reaģēt ar {{reactionName}}',
  /** When a users' name cannot be resolved, fall back to this name */
  'reactions.user-list.unknown-user-fallback-name': 'Nezināms lietotājs',
  /**
   * When showing list of users who have reacted, replaces your own name with "you", eg
   * "Donna, you, James, and Tyler reacted with 👍". A different key (`_leading` suffix)
   * is used when you are the first to react, eg "You, Donna and Tyler reacted with 👍".
   * Use `{{name}}` if you want to instead use the current users' actual name.
   */
  'reactions.user-list.you': 'jūs',
  /**
   * When showing list of users who have reacted, replaces your own name with "You", eg
   * "You, Donna, James, and Tyler reacted with 👍". A different key (`_leading` suffix)
   * is used when you are not the first to react, eg "Donna, you, James and Tyler reacted with 👍".
   * Use `{{name}}` if you want to instead use the current users' actual name.
   */
  'reactions.user-list.you_leading': 'Jūs',
  /**
   * The text shown for the tooltip that appears when hovering over the reaction count, eg
   * "Donna, James, and Tyler Reacted with 👍". Three components are available for use:
   * - `<UserList/>` - the list of names of users who have reacted, using the locales list format
   * - `<Text>` - should be wrapped around the text describing the action ("reacted with")
   * - `<ReactionName/>` - the name of the reaction emoji, eg ":heavy_plus_sign:"
   */
  'reactions.users-reacted-with-reaction': '<UserList/> <Text>reaģēja ar</Text> <ReactionName/>',

  /** Status filter: The short title describing filtering on open (non-resolved) comments */
  'status-filter.status-open': 'Atvērti',
  /** Status filter: The full text for describing filtering on open (non-resolved) comments */
  'status-filter.status-open-full': 'Atvērti komentāri',
  /** Status filter: The short title describing filtering on resolved comments */
  'status-filter.status-resolved': 'Izskatīti',
  /** Status filter: The full text for describing filtering on resolved comments */
  'status-filter.status-resolved-full': 'Izskatīti komentāri',
  /** Status filter: The full text for describing filtering on resolved comments and is upsell mode */
  'status-filter.status-resolved-full-upsell': 'Jauniniet, lai redzētu izskatītos komentārus',
})
