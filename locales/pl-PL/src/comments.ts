import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** The close comments button text */
  'close-pane-button-text': 'Zamknij komentarze',

  /** The aria label for the close comments button */
  'close-pane-button-text-aria-label': 'Zamknij komentarze',

  /** When composing a comment, the placeholder text shown when adding a comment to a field with no current comments */
  'compose.add-comment-input-placeholder': 'Dodaj komentarz do <strong>{{field}}</strong>',
  /** When composing a comment, the placeholder text shown when adding a comment to a field with no current comments and the mode is upsell */
  'compose.add-comment-input-placeholder-upsell': 'Zaktualizuj, aby dodać komentarz',
  /** When composing a comment, the placeholder text shown when the input is empty */
  'compose.create-comment-placeholder': 'Utwórz nowy komentarz',
  /** When composing a comment, the aria label for the button to mention a user */
  'compose.mention-user-aria-label': 'Wspomnij użytkownika',
  /** When composing a comment, the tooltip text for the button to mention a user */
  'compose.mention-user-tooltip': 'Wspomnij użytkownika',
  /** When composing a reply, the placeholder text shown when the input is empty */
  'compose.reply-placeholder': 'Odpowiedz',
  /** When composing a reply, the placeholder text shown when the input is empty and the mode is upsell */
  'compose.reply-placeholder-upsell': 'Zaktualizuj, aby odpowiedzieć',
  /** When composing a comment, the aria label for the button to send a comment */
  'compose.send-comment-aria-label': 'Wyślij komentarz',
  /** When composing a comment, the tooltip text for the button to send a comment */
  'compose.send-comment-tooltip': 'Wyślij komentarz',

  /** The inspector text when error copying link */
  'copy-link-error-message': 'Nie można skopiować linku do schowka',

  /** The inspector successfully copied link text */
  'copy-link-success-message': 'Skopiowano link do schowka',

  /** The delete dialog body for a comment */
  'delete-comment.body': 'Po usunięciu komentarza nie można go odzyskać.',
  /** The delete dialog confirm button text for a comment */
  'delete-comment.confirm': 'Usuń komentarz',
  /** The delete dialog title for a comment */
  'delete-comment.title': 'Usunąć ten komentarz?',

  /** The delete dialog error */
  'delete-dialog.error': 'Wystąpił błąd podczas usuwania komentarza. Proszę spróbować ponownie.',

  /** The delete dialog body for a thread */
  'delete-thread.body':
    'Ten komentarz i jego odpowiedzi zostaną usunięte, i po usunięciu nie można ich odzyskać.',
  /** The delete dialog conform button text for a thread */
  'delete-thread.confirm': 'Usuń wątek',
  /** The delete dialog title for a thread */
  'delete-thread.title': 'Usunąć ten wątek komentarzy?',

  /** The button text for confirming discard */
  'discard.button-confirm': 'Odrzuć',
  /** The header for discard comment dialog */
  'discard.header': 'Odrzucić komentarz?',
  /** The text for discard comment dialog */
  'discard.text': 'Czy chcesz odrzucić komentarz?',

  /** Sharing feedback on the comments feature: The link title */
  'feature-feedback.link': 'Podziel się swoją opinią',
  /** Sharing feedback on the comments feature: The form title  */
  'feature-feedback.title': 'Pomóż ulepszyć ',

  /** The name of the comments feature, for use in header. Capitalized, eg "Comments". */
  'feature-name': 'Comments',

  /** Aria label for button above fields to add a comment, when the field currently do not have any comments */
  'field-button.aria-label-add': 'Dodaj komentarz',
  /** Aria label for button above fields that opens the comments for this field, when there are existing comments */
  'field-button.aria-label-open': 'Otwórz komentarze',
  /** Text shown in popover when hovering the button above fields that opens the comments panel, when there is a single comment present */
  'field-button.content_one': 'Zobacz komentarz',
  /** Text shown in popover when hovering the button above fields to add a comment, when the field currently do not have any comments */
  'field-button.title': 'Dodaj komentarz',

  /** Aria label for the breadcrumb button showing the field path. `{{field}}` is the last (most specific) field. */
  'list-item.breadcrumb-button-go-to-field-aria-label': 'Przejdź do pola {{field}}',
  /** The button tooltip content for the add reaction button */
  'list-item.context-menu-add-reaction': 'Dodaj reakcję',
  /** The button tooltip aria label for adding a reaction */
  'list-item.context-menu-add-reaction-aria-label': 'Dodaj reakcję',
  /** The button tooltip content for the add reaction button and mode is upsell */
  'list-item.context-menu-add-reaction-upsell': 'Zaktualizuj, aby dodać reakcję',
  /** The action menu item for copying a comment link */
  'list-item.copy-link': 'Kopiuj link do komentarza',
  /** The action menu item for deleting a comment */
  'list-item.delete-comment': 'Usuń komentarz',
  /** The action menu item for editing a comment */
  'list-item.edit-comment': 'Edytuj komentarz',
  /** The action menu item for editing a comment and the mode is upsell */
  'list-item.edit-comment-upsell': 'Zaktualizuj, aby edytować komentarz',
  /** Aria label for the button that takes you to the field, which wraps a thread/comment */
  'list-item.go-to-field-button.aria-label': 'Przejdź do pola',
  /**
   * The text shown below the author and timestamp of a comment including a link back to the context in which the comment was made.
   * Consists of a document title wrapped in a link, and a word or phrase to indicate that the link refers to a location:
   * eg "on Home", "on Coffee Machine | Products", "on Pricing – Sanity"
   */
  'list-item.layout-context': 'na <IntentLink>{{title}}</IntentLink>',
  /** The marker to indicate that a comment has been edited in brackets */
  'list-item.layout-edited': 'edytowany',
  /** The error text when sending a comment has failed */
  'list-item.layout-failed-sent': 'Nie udało się wysłać.',
  /** The loading message when posting a comment is in progress */
  'list-item.layout-posting': 'Wysyłanie...',
  /** The text for retrying posting a comment */
  'list-item.layout-retry': 'Ponów próbę',
  /** The aria label for the comments menu button to open the actions menu */
  'list-item.open-menu-aria-label': 'Otwórz menu akcji komentarza',
  /** The button text to re-open a resolved comment  */
  'list-item.re-open-resolved': 'Otwórz ponownie',
  /** The button aria label to re-open a comment that is resolved */
  'list-item.re-open-resolved-aria-label': 'Otwórz ponownie',
  /** The button aria label to mark a comment as resolved */
  'list-item.resolved-tooltip-aria-label': 'Oznacz komentarz jako rozwiązany',
  /** The button text to mark a comment as resolved */
  'list-item.resolved-tooltip-content': 'Oznacz jako rozwiązany',

  /** The empty state text for open comments */
  'list-status.empty-state-open-text':
    'Otwarte komentarze do tego dokumentu będą wyświetlane tutaj.',
  /** The empty state title for open comments */
  'list-status.empty-state-open-title': 'Jeszcze nie ma otwartych komentarzy',
  /** The empty state text for resolved comments */
  'list-status.empty-state-resolved-text':
    'Rozwiązane komentarze do tego dokumentu będą wyświetlane tutaj.',
  /** The empty state title for resolved comments */
  'list-status.empty-state-resolved-title': 'Jeszcze nie ma rozwiązanych komentarzy',
  /** The list status message for error */
  'list-status.error': 'Coś poszło nie tak',
  /** The list status message for loading status */
  'list-status.loading': 'Ładowanie komentarzy',

  /** Text shown when no users can be found to mention */
  'mentions.no-users-found': 'Nie znaleziono użytkowników',
  /** Label/badge shown for users that are not authorized to see the document, and thus cannot be mentioned */
  'mentions.unauthorized-user': 'Nieautoryzowany',
  /** Aria label for the command list for users to mention */
  'mentions.user-list-aria-label': 'Lista użytkowników do wspomnienia',

  /** The comments onboarding popover text */
  'onboarding.body':
    'Możesz dodawać komentarze do dowolnego pola w dokumencie. Zostaną one wyświetlone tutaj, pogrupowane według pola.',
  /** The comments onboarding dismiss text */
  'onboarding.dismiss': 'Rozumiem',
  /** The comments onboarding popover header text */
  'onboarding.header': 'Pola dokumentów mają teraz komentarze',

  /** Tooltip for the button to add a reaction to a comment */
  'reactions.add-reaction-tooltip': 'Dodaj reakcję',
  /** Aria label for the individual reactions you can choose from when reacting to a comment */
  'reactions.react-with-aria-label': 'Zareaguj za pomocą {{reactionName}}',
  /** When a users' name cannot be resolved, fall back to this name */
  'reactions.user-list.unknown-user-fallback-name': 'Nieznany użytkownik',
  /**
   * When showing list of users who have reacted, replaces your own name with "you", eg
   * "Donna, you, James, and Tyler reacted with 👍". A different key (`_leading` suffix)
   * is used when you are the first to react, eg "You, Donna and Tyler reacted with 👍".
   * Use `{{name}}` if you want to instead use the current users' actual name.
   */
  'reactions.user-list.you': 'ty',
  /**
   * When showing list of users who have reacted, replaces your own name with "You", eg
   * "You, Donna, James, and Tyler reacted with 👍". A different key (`_leading` suffix)
   * is used when you are not the first to react, eg "Donna, you, James and Tyler reacted with 👍".
   * Use `{{name}}` if you want to instead use the current users' actual name.
   */
  'reactions.user-list.you_leading': 'Ty',
  /**
   * The text shown for the tooltip that appears when hovering over the reaction count, eg
   * "Donna, James, and Tyler Reacted with 👍". Three components are available for use:
   * - `<UserList/>` - the list of names of users who have reacted, using the locales list format
   * - `<Text>` - should be wrapped around the text describing the action ("reacted with")
   * - `<ReactionName/>` - the name of the reaction emoji, eg ":heavy_plus_sign:"
   */
  'reactions.users-reacted-with-reaction':
    '<UserList/> <Text>zareagowali za pomocą</Text> <ReactionName/>',

  /** Status filter: The short title describing filtering on open (non-resolved) comments */
  'status-filter.status-open': 'Otwarte',
  /** Status filter: The full text for describing filtering on open (non-resolved) comments */
  'status-filter.status-open-full': 'Otwarte komentarze',
  /** Status filter: The short title describing filtering on resolved comments */
  'status-filter.status-resolved': 'Rozwiązane',
  /** Status filter: The full text for describing filtering on resolved comments */
  'status-filter.status-resolved-full': 'Rozwiązane komentarze',
  /** Status filter: The full text for describing filtering on resolved comments and is upsell mode */
  'status-filter.status-resolved-full-upsell': 'Zaktualizuj, aby zobaczyć rozwiązane komentarze',
})
