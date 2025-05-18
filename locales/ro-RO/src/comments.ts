import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** The close comments button text */
  'close-pane-button-text': 'Închide comentariile',

  /** The aria label for the close comments button */
  'close-pane-button-text-aria-label': 'Închide comentariile',

  /** When composing a comment, the placeholder text shown when adding a comment to a field with no current comments */
  'compose.add-comment-input-placeholder': 'Adaugă comentariu la <strong>{{field}}</strong>',
  /** When composing a comment, the placeholder text shown when adding a comment to a field with no current comments and the mode is upsell */
  'compose.add-comment-input-placeholder-upsell': 'Actualizează pentru a adăuga comentariu',
  /** When composing a comment, the placeholder text shown when the input is empty */
  'compose.create-comment-placeholder': 'Creează un comentariu nou',
  /** When composing a comment, the aria label for the button to mention a user */
  'compose.mention-user-aria-label': 'Menționează utilizator',
  /** When composing a comment, the tooltip text for the button to mention a user */
  'compose.mention-user-tooltip': 'Menționează utilizator',
  /** When composing a reply, the placeholder text shown when the input is empty */
  'compose.reply-placeholder': 'Răspunde',
  /** When composing a reply, the placeholder text shown when the input is empty and the mode is upsell */
  'compose.reply-placeholder-upsell': 'Actualizează pentru a răspunde',
  /** When composing a comment, the aria label for the button to send a comment */
  'compose.send-comment-aria-label': 'Trimite comentariu',
  /** When composing a comment, the tooltip text for the button to send a comment */
  'compose.send-comment-tooltip': 'Trimite comentariu',

  /** The inspector text when error copying link */
  'copy-link-error-message': 'Nu se poate copia linkul în clipboard',

  /** The delete dialog body for a comment */
  'delete-comment.body': 'Odată șters, un comentariu nu poate fi recuperat.',
  /** The delete dialog confirm button text for a comment */
  'delete-comment.confirm': 'Șterge comentariu',
  /** The delete dialog title for a comment */
  'delete-comment.title': 'Șterge acest comentariu?',

  /** The delete dialog error */
  'delete-dialog.error':
    'A apărut o eroare în timpul ștergerii comentariului. Vă rugăm să încercați din nou.',

  /** The delete dialog body for a thread */
  'delete-thread.body':
    'Acest comentariu și răspunsurile sale vor fi șterse, și odată șterse nu pot fi recuperate.',
  /** The delete dialog conform button text for a thread */
  'delete-thread.confirm': 'Șterge thread-ul',
  /** The delete dialog title for a thread */
  'delete-thread.title': 'Vreți să ștergeți acest thread?',

  /** The button text for confirming discard */
  'discard.button-confirm': 'Renunță',
  /** The header for discard comment dialog */
  'discard.header': 'Renunți la comentariu?',
  /** The text for discard comment dialog */
  'discard.text': 'Dorești să renunți la comentariu?',

  /** Sharing feedback on the comments feature: The link title */
  'feature-feedback.link': 'Împărtășește-ți părerea',
  /** Sharing feedback on the comments feature: The form title  */
  'feature-feedback.title': 'Ajută la îmbunătățirea ',

  /** The name of the comments feature, for use in header. Capitalized, eg "Comments". */
  'feature-name': 'Comentarii',

  /** Aria label for button above fields to add a comment, when the field currently do not have any comments */
  'field-button.aria-label-add': 'Adaugă comentariu',
  /** Aria label for button above fields that opens the comments for this field, when there are existing comments */
  'field-button.aria-label-open': 'Deschide comentariile',
  /** Text shown in popover when hovering the button above fields that opens the comments panel, when there is a single comment present */
  'field-button.content_one': 'Vezi comentariul',
  /** Text shown in popover when hovering the button above fields to add a comment, when the field currently do not have any comments */
  'field-button.title': 'Adaugă comentariu',

  /* The text shown in the inline comment button when the button is disabled due to overlap */
  'inline-add-comment-button.disabled-overlap-title': 'Comentariile nu pot suprapune',
  /** The text shown in the inline comment button */
  'inline-add-comment-button.title': 'Adaugă comentariu',

  /** Aria label for the breadcrumb button showing the field path. `{{field}}` is the last (most specific) field. */
  'list-item.breadcrumb-button-go-to-field-aria-label': 'Mergi la câmpul {{field}}',
  /** The button tooltip content for the add reaction button */
  'list-item.context-menu-add-reaction': 'Adaugă reacție',
  /** The button tooltip aria label for adding a reaction */
  'list-item.context-menu-add-reaction-aria-label': 'Adaugă reacție',
  /** The button tooltip content for the add reaction button and mode is upsell */
  'list-item.context-menu-add-reaction-upsell': 'Actualizează pentru a adăuga reacție',
  /** The action menu item for copying a comment link */
  'list-item.copy-link': 'Copiază linkul către comentariu',
  /** The action menu item for deleting a comment */
  'list-item.delete-comment': 'Șterge comentariul',
  /** The action menu item for editing a comment */
  'list-item.edit-comment': 'Editează comentariul',
  /** The action menu item for editing a comment and the mode is upsell */
  'list-item.edit-comment-upsell': 'Actualizează pentru a edita comentariul',
  /** Aria label for the button that takes you to the field, which wraps a thread/comment */
  'list-item.go-to-field-button.aria-label': 'Mergi la câmp',
  /**
   * The text shown below the author and timestamp of a comment including a link back to the context in which the comment was made.
   * Consists of a document title wrapped in a link, and a word or phrase to indicate that the link refers to a location:
   * eg "on Home", "on Coffee Machine | Products", "on Pricing – Sanity"
   */
  'list-item.layout-context': 'pe <IntentLink>{{title}}</IntentLink>',
  /** The marker to indicate that a comment has been edited in brackets */
  'list-item.layout-edited': 'editat',
  /** The error text when sending a comment has failed */
  'list-item.layout-failed-sent': 'Eșec la trimitere.',
  /** The loading message when posting a comment is in progress */
  'list-item.layout-posting': 'Se postează...',
  /** The text for retrying posting a comment */
  'list-item.layout-retry': 'Reîncearcă',
  /** The text shown when the value a comment references has been deleted */
  'list-item.missing-referenced-value-tooltip-content': 'Textul comentat a fost șters',
  /** The aria label for the comments menu button to open the actions menu */
  'list-item.open-menu-aria-label': 'Deschide meniul de acțiuni pentru comentarii',
  /** The button text to re-open a resolved comment  */
  'list-item.re-open-resolved': 'Redeschide',
  /** The button aria label to re-open a comment that is resolved */
  'list-item.re-open-resolved-aria-label': 'Redeschide',
  /** The button aria label to mark a comment as resolved */
  'list-item.resolved-tooltip-aria-label': 'Marchează comentariul ca rezolvat',
  /** The button text to mark a comment as resolved */
  'list-item.resolved-tooltip-content': 'Marchează ca rezolvat',

  /** The empty state text for open comments */
  'list-status.empty-state-open-text':
    'Comentariile active pentru acest document vor apărea aici.',
  /** The empty state title for open comments */
  'list-status.empty-state-open-title': 'Niciun comentariu deschis încă',
  /** The empty state text for resolved comments */
  'list-status.empty-state-resolved-text':
    'Comentariile închise pentru acest document vor apărea aici.',
  /** The empty state title for resolved comments */
  'list-status.empty-state-resolved-title': 'Niciun comentariu rezolvat încă',
  /** The list status message for error */
  'list-status.error': 'Ceva nu a funcționat corect',
  /** The list status message for loading status */
  'list-status.loading': 'Se încarcă comentariile',

  /** Text shown when no users can be found to mention */
  'mentions.no-users-found': 'Niciun utilizator găsit',
  /** Label/badge shown for users that are not authorized to see the document, and thus cannot be mentioned */
  'mentions.unauthorized-user': 'Neautorizat',
  /** Aria label for the command list for users to mention */
  'mentions.user-list-aria-label': 'Lista de utilizatori de menționat',

  /** The comments onboarding popover text */
  'onboarding.body':
    'Puteți adăuga comentarii la orice câmp dintr-un document. Acestea vor apărea aici, grupate pe câmpuri.',
  /** The comments onboarding dismiss text */
  'onboarding.dismiss': 'Am înțeles',
  /** The comments onboarding popover header text */
  'onboarding.header': 'Câmpurile documentelor au acum comentarii',

  /** Tooltip for the button to add a reaction to a comment */
  'reactions.add-reaction-tooltip': 'Adaugă reacție',
  /** Aria label for the individual reactions you can choose from when reacting to a comment */
  'reactions.react-with-aria-label': 'Reacționează cu {{reactionName}}',
  /** When a users' name cannot be resolved, fall back to this name */
  'reactions.user-list.unknown-user-fallback-name': 'Utilizator necunoscut',
  /**
   * When showing list of users who have reacted, replaces your own name with "you", eg
   * "Donna, you, James, and Tyler reacted with 👍". A different key (`_leading` suffix)
   * is used when you are the first to react, eg "You, Donna and Tyler reacted with 👍".
   * Use `{{name}}` if you want to instead use the current users' actual name.
   */
  'reactions.user-list.you': 'tu',
  /**
   * When showing list of users who have reacted, replaces your own name with "You", eg
   * "You, Donna, James, and Tyler reacted with 👍". A different key (`_leading` suffix)
   * is used when you are not the first to react, eg "Donna, you, James and Tyler reacted with 👍".
   * Use `{{name}}` if you want to instead use the current users' actual name.
   */
  'reactions.user-list.you_leading': 'Tu',
  /**
   * The text shown for the tooltip that appears when hovering over the reaction count, eg
   * "Donna, James, and Tyler Reacted with 👍". Three components are available for use:
   * - `<UserList/>` - the list of names of users who have reacted, using the locales list format
   * - `<Text>` - should be wrapped around the text describing the action ("reacted with")
   * - `<ReactionName/>` - the name of the reaction emoji, eg ":heavy_plus_sign:"
   */
  'reactions.users-reacted-with-reaction':
    '<UserList/> <Text>a reacționat cu</Text> <ReactionName/>',

  /** Status filter: The short title describing filtering on open (non-resolved) comments */
  'status-filter.status-open': 'Deschis',
  /** Status filter: The full text for describing filtering on open (non-resolved) comments */
  'status-filter.status-open-full': 'Comentarii deschise',
  /** Status filter: The short title describing filtering on resolved comments */
  'status-filter.status-resolved': 'Rezolvat',
  /** Status filter: The full text for describing filtering on resolved comments */
  'status-filter.status-resolved-full': 'Comentarii rezolvate',
  /** Status filter: The full text for describing filtering on resolved comments and is upsell mode */
  'status-filter.status-resolved-full-upsell':
    'Faceți upgrade pentru a vedea comentariile rezolvate',
})
