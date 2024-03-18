import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** The close comments button text */
  'close-pane-button-text': 'Chiudi commenti',

  /** The aria label for the close comments button */
  'close-pane-button-text-aria-label': 'Chiudi commenti',

  /** When composing a comment, the placeholder text shown when adding a comment to a field with no current comments */
  'compose.add-comment-input-placeholder': 'Aggiungi commento a <strong>{{field}}</strong>',
  /** When composing a comment, the placeholder text shown when adding a comment to a field with no current comments and the mode is upsell */
  'compose.add-comment-input-placeholder-upsell': 'Aggiorna per aggiungere un commento',
  /** When composing a comment, the placeholder text shown when the input is empty */
  'compose.create-comment-placeholder': 'Crea un nuovo commento',
  /** When composing a comment, the aria label for the button to mention a user */
  'compose.mention-user-aria-label': 'Menziona utente',
  /** When composing a comment, the tooltip text for the button to mention a user */
  'compose.mention-user-tooltip': 'Menziona utente',
  /** When composing a reply, the placeholder text shown when the input is empty */
  'compose.reply-placeholder': 'Rispondi',
  /** When composing a reply, the placeholder text shown when the input is empty and the mode is upsell */
  'compose.reply-placeholder-upsell': 'Aggiorna per rispondere',
  /** When composing a comment, the aria label for the button to send a comment */
  'compose.send-comment-aria-label': 'Invia commento',
  /** When composing a comment, the tooltip text for the button to send a comment */
  'compose.send-comment-tooltip': 'Invia commento',

  /** The inspector text when error copying link */
  'copy-link-error-message': 'Impossibile copiare il link negli appunti',

  /** The inspector successfully copied link text */
  'copy-link-success-message': 'Link copiato negli appunti',

  /** The delete dialog body for a comment */
  'delete-comment.body': 'Una volta eliminato, un commento non può essere recuperato.',
  /** The delete dialog confirm button text for a comment */
  'delete-comment.confirm': 'Elimina commento',
  /** The delete dialog title for a comment */
  'delete-comment.title': 'Eliminare questo commento?',

  /** The delete dialog error */
  'delete-dialog.error':
    "Si è verificato un errore durante l'eliminazione del commento. Per favore riprova.",

  /** The delete dialog body for a thread */
  'delete-thread.body':
    'Questo commento e le sue risposte verranno eliminati, e una volta eliminati non possono essere recuperati.',
  /** The delete dialog conform button text for a thread */
  'delete-thread.confirm': 'Elimina thread',
  /** The delete dialog title for a thread */
  'delete-thread.title': 'Eliminare questo thread di commenti?',

  /** The button text for confirming discard */
  'discard.button-confirm': 'Scarta',
  /** The header for discard comment dialog */
  'discard.header': 'Scartare il commento?',
  /** The text for discard comment dialog */
  'discard.text': 'Vuoi scartare il commento?',

  /** Sharing feedback on the comments feature: The link title */
  'feature-feedback.link': 'Condividi il tuo feedback',
  /** Sharing feedback on the comments feature: The form title  */
  'feature-feedback.title': 'Aiuta a migliorare ',

  /** The name of the comments feature, for use in header. Capitalized, eg "Comments". */
  'feature-name': 'Comments',

  /** Aria label for button above fields to add a comment, when the field currently do not have any comments */
  'field-button.aria-label-add': 'Aggiungi commento',
  /** Aria label for button above fields that opens the comments for this field, when there are existing comments */
  'field-button.aria-label-open': 'Apri commenti',
  /** Text shown in popover when hovering the button above fields that opens the comments panel, when there is a single comment present */
  'field-button.content_one': 'Visualizza commento',
  /** Text shown in popover when hovering the button above fields that opens the comments panel, when there are more than one comment present */
  'field-button.content_other': 'Visualizza commenti',
  /** Text shown in popover when hovering the button above fields to add a comment, when the field currently do not have any comments */
  'field-button.title': 'Aggiungi commento',

  /** Aria label for the breadcrumb button showing the field path. `{{field}}` is the last (most specific) field. */
  'list-item.breadcrumb-button-go-to-field-aria-label': 'Vai al campo {{field}}',
  /** The button tooltip content for the add reaction button */
  'list-item.context-menu-add-reaction': 'Aggiungi reazione',
  /** The button tooltip aria label for adding a reaction */
  'list-item.context-menu-add-reaction-aria-label': 'Aggiungi reazione',
  /** The button tooltip content for the add reaction button and mode is upsell */
  'list-item.context-menu-add-reaction-upsell': 'Aggiorna per aggiungere reazione',
  /** The action menu item for copying a comment link */
  'list-item.copy-link': 'Copia link al commento',
  /** The action menu item for deleting a comment */
  'list-item.delete-comment': 'Elimina commento',
  /** The action menu item for editing a comment */
  'list-item.edit-comment': 'Modifica commento',
  /** The action menu item for editing a comment and the mode is upsell */
  'list-item.edit-comment-upsell': 'Aggiorna per modificare il commento',
  /** Aria label for the button that takes you to the field, which wraps a thread/comment */
  'list-item.go-to-field-button.aria-label': 'Vai al campo',
  /**
   * The text shown below the author and timestamp of a comment including a link back to the context in which the comment was made.
   * Consists of a document title wrapped in a link, and a word or phrase to indicate that the link refers to a location:
   * eg "on Home", "on Coffee Machine | Products", "on Pricing – Sanity"
   */
  'list-item.layout-context': 'su <IntentLink>{{title}}</IntentLink>',
  /** The marker to indicate that a comment has been edited in brackets */
  'list-item.layout-edited': 'modificato',
  /** The error text when sending a comment has failed */
  'list-item.layout-failed-sent': 'Invio fallito.',
  /** The loading message when posting a comment is in progress */
  'list-item.layout-posting': 'Pubblicazione in corso...',
  /** The text for retrying posting a comment */
  'list-item.layout-retry': 'Riprova',
  /** The aria label for the comments menu button to open the actions menu */
  'list-item.open-menu-aria-label': 'Apri menu azioni commento',
  /** The button text to re-open a resolved comment  */
  'list-item.re-open-resolved': 'Riapri',
  /** The button aria label to re-open a comment that is resolved */
  'list-item.re-open-resolved-aria-label': 'Riapri',
  /** The button aria label to mark a comment as resolved */
  'list-item.resolved-tooltip-aria-label': 'Segna il commento come risolto',
  /** The button text to mark a comment as resolved */
  'list-item.resolved-tooltip-content': 'Segna come risolto',

  /** The empty state text for open comments */
  'list-status.empty-state-open-text':
    'I commenti aperti su questo documento verranno mostrati qui.',
  /** The empty state title for open comments */
  'list-status.empty-state-open-title': 'Nessun commento aperto ancora',
  /** The empty state text for resolved comments */
  'list-status.empty-state-resolved-text':
    'I commenti risolti su questo documento verranno mostrati qui.',
  /** The empty state title for resolved comments */
  'list-status.empty-state-resolved-title': 'Nessun commento risolto ancora',
  /** The list status message for error */
  'list-status.error': 'Qualcosa è andato storto',
  /** The list status message for loading status */
  'list-status.loading': 'Caricamento commenti',

  /** Text shown when no users can be found to mention */
  'mentions.no-users-found': 'Nessun utente trovato',
  /** Label/badge shown for users that are not authorized to see the document, and thus cannot be mentioned */
  'mentions.unauthorized-user': 'Non autorizzato',
  /** Aria label for the command list for users to mention */
  'mentions.user-list-aria-label': 'Elenco di utenti da menzionare',

  /** The comments onboarding popover text */
  'onboarding.body':
    'Puoi aggiungere commenti a qualsiasi campo in un documento. Appariranno qui, raggruppati per campo.',
  /** The comments onboarding dismiss text */
  'onboarding.dismiss': 'Capito',
  /** The comments onboarding popover header text */
  'onboarding.header': 'I campi del documento hanno ora commenti',

  /** Tooltip for the button to add a reaction to a comment */
  'reactions.add-reaction-tooltip': 'Aggiungi reazione',
  /** Aria label for the individual reactions you can choose from when reacting to a comment */
  'reactions.react-with-aria-label': 'Reagisci con {{reactionName}}',
  /** When a users' name cannot be resolved, fall back to this name */
  'reactions.user-list.unknown-user-fallback-name': 'Utente sconosciuto',
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
    '<UserList/> <Text>ha reagito con</Text> <ReactionName/>',

  /** Status filter: The short title describing filtering on open (non-resolved) comments */
  'status-filter.status-open': 'Aperto',
  /** Status filter: The full text for describing filtering on open (non-resolved) comments */
  'status-filter.status-open-full': 'Commenti aperti',
  /** Status filter: The short title describing filtering on resolved comments */
  'status-filter.status-resolved': 'Risolti',
  /** Status filter: The full text for describing filtering on resolved comments */
  'status-filter.status-resolved-full': 'Commenti risolti',
  /** Status filter: The full text for describing filtering on resolved comments and is upsell mode */
  'status-filter.status-resolved-full-upsell': 'Aggiorna per vedere i commenti risolti',
})
