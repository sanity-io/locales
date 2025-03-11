import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** The close comments button text */
  'close-pane-button-text': 'Zatvori komentare',

  /** The aria label for the close comments button */
  'close-pane-button-text-aria-label': 'Zatvori komentare',

  /** When composing a comment, the placeholder text shown when adding a comment to a field with no current comments */
  'compose.add-comment-input-placeholder': 'Dodaj komentar na <strong>{{field}}</strong>',
  /** When composing a comment, the placeholder text shown when adding a comment to a field with no current comments and the mode is upsell */
  'compose.add-comment-input-placeholder-upsell': 'Nadogradite za dodavanje komentara',
  /** When composing a comment, the placeholder text shown when the input is empty */
  'compose.create-comment-placeholder': 'Stvori novi komentar',
  /** When composing a comment, the aria label for the button to mention a user */
  'compose.mention-user-aria-label': 'Spomeni korisnika',
  /** When composing a comment, the tooltip text for the button to mention a user */
  'compose.mention-user-tooltip': 'Spomeni korisnika',
  /** When composing a reply, the placeholder text shown when the input is empty */
  'compose.reply-placeholder': 'Odgovori',
  /** When composing a reply, the placeholder text shown when the input is empty and the mode is upsell */
  'compose.reply-placeholder-upsell': 'Nadogradite za odgovor',
  /** When composing a comment, the aria label for the button to send a comment */
  'compose.send-comment-aria-label': 'Pošalji komentar',
  /** When composing a comment, the tooltip text for the button to send a comment */
  'compose.send-comment-tooltip': 'Pošalji komentar',

  /** The inspector text when error copying link */
  'copy-link-error-message': 'Nije moguće kopirati poveznicu u međuspremnik',

  /** The delete dialog body for a comment */
  'delete-comment.body': 'Jednom izbrisan, komentar se ne može povratiti.',
  /** The delete dialog confirm button text for a comment */
  'delete-comment.confirm': 'Izbriši komentar',
  /** The delete dialog title for a comment */
  'delete-comment.title': 'Izbrisati ovaj komentar?',

  /** The delete dialog error */
  'delete-dialog.error':
    'Došlo je do pogreške prilikom brisanja komentara. Molimo pokušajte ponovno.',

  /** The delete dialog body for a thread */
  'delete-thread.body':
    'Ovaj komentar i njegovi odgovori bit će izbrisani, a jednom izbrisani ne mogu se povratiti.',
  /** The delete dialog conform button text for a thread */
  'delete-thread.confirm': 'Izbriši nit',
  /** The delete dialog title for a thread */
  'delete-thread.title': 'Izbrisati ovu nit komentara?',

  /** The button text for confirming discard */
  'discard.button-confirm': 'Odbaci',
  /** The header for discard comment dialog */
  'discard.header': 'Odbaciti komentar?',
  /** The text for discard comment dialog */
  'discard.text': 'Želite li odbaciti komentar?',

  /** Sharing feedback on the comments feature: The link title */
  'feature-feedback.link': 'Podijelite svoje mišljenje',
  /** Sharing feedback on the comments feature: The form title  */
  'feature-feedback.title': 'Pomozite unaprijediti ',

  /** The name of the comments feature, for use in header. Capitalized, eg "Comments". */
  'feature-name': 'Komentari',

  /** Aria label for button above fields to add a comment, when the field currently do not have any comments */
  'field-button.aria-label-add': 'Dodaj komentar',
  /** Aria label for button above fields that opens the comments for this field, when there are existing comments */
  'field-button.aria-label-open': 'Otvori komentare',
  /** Text shown in popover when hovering the button above fields that opens the comments panel, when there is a single comment present */
  'field-button.content_one': 'Pogledaj komentar',
  /** Text shown in popover when hovering the button above fields that opens the comments panel, when there are more than one comment present */
  'field-button.content_other': 'Pogledaj komentare',
  /** Text shown in popover when hovering the button above fields to add a comment, when the field currently do not have any comments */
  'field-button.title': 'Dodaj komentar',

  /* The text shown in the inline comment button when the button is disabled due to overlap */
  'inline-add-comment-button.disabled-overlap-title': 'Komentari se ne mogu preklapati',
  /** The text shown in the inline comment button */
  'inline-add-comment-button.title': 'Dodaj komentar',

  /** Aria label for the breadcrumb button showing the field path. `{{field}}` is the last (most specific) field. */
  'list-item.breadcrumb-button-go-to-field-aria-label': 'Idi na polje {{field}}',
  /** The button tooltip content for the add reaction button */
  'list-item.context-menu-add-reaction': 'Dodaj reakciju',
  /** The button tooltip aria label for adding a reaction */
  'list-item.context-menu-add-reaction-aria-label': 'Dodaj reakciju',
  /** The button tooltip content for the add reaction button and mode is upsell */
  'list-item.context-menu-add-reaction-upsell': 'Nadogradi za dodavanje reakcije',
  /** The action menu item for copying a comment link */
  'list-item.copy-link': 'Kopiraj poveznicu do komentara',
  /** The action menu item for deleting a comment */
  'list-item.delete-comment': 'Izbriši komentar',
  /** The action menu item for editing a comment */
  'list-item.edit-comment': 'Uredi komentar',
  /** The action menu item for editing a comment and the mode is upsell */
  'list-item.edit-comment-upsell': 'Nadogradi za uređivanje komentara',
  /** Aria label for the button that takes you to the field, which wraps a thread/comment */
  'list-item.go-to-field-button.aria-label': 'Idi na polje',
  /**
   * The text shown below the author and timestamp of a comment including a link back to the context in which the comment was made.
   * Consists of a document title wrapped in a link, and a word or phrase to indicate that the link refers to a location:
   * eg "on Home", "on Coffee Machine | Products", "on Pricing – Sanity"
   */
  'list-item.layout-context': 'na <IntentLink>{{title}}</IntentLink>',
  /** The marker to indicate that a comment has been edited in brackets */
  'list-item.layout-edited': 'uređeno',
  /** The error text when sending a comment has failed */
  'list-item.layout-failed-sent': 'Slanje nije uspjelo.',
  /** The loading message when posting a comment is in progress */
  'list-item.layout-posting': 'Objavljivanje...',
  /** The text for retrying posting a comment */
  'list-item.layout-retry': 'Pokušaj ponovno',
  /** The text shown when the value a comment references has been deleted */
  'list-item.missing-referenced-value-tooltip-content': 'Komentirani tekst je izbrisan',
  /** The aria label for the comments menu button to open the actions menu */
  'list-item.open-menu-aria-label': 'Otvori izbornik radnji komentara',
  /** The button text to re-open a resolved comment  */
  'list-item.re-open-resolved': 'Ponovno otvori',
  /** The button aria label to re-open a comment that is resolved */
  'list-item.re-open-resolved-aria-label': 'Ponovno otvori',
  /** The button aria label to mark a comment as resolved */
  'list-item.resolved-tooltip-aria-label': 'Označi komentar kao riješen',
  /** The button text to mark a comment as resolved */
  'list-item.resolved-tooltip-content': 'Označi kao riješeno',

  /** The empty state text for open comments */
  'list-status.empty-state-open-text':
    'Otvoreni komentari na ovom dokumentu će biti prikazani ovdje.',
  /** The empty state title for open comments */
  'list-status.empty-state-open-title': 'Još nema otvorenih komentara',
  /** The empty state text for resolved comments */
  'list-status.empty-state-resolved-text':
    'Riješeni komentari na ovom dokumentu bit će prikazani ovdje.',
  /** The empty state title for resolved comments */
  'list-status.empty-state-resolved-title': 'Još nema riješenih komentara',
  /** The list status message for error */
  'list-status.error': 'Došlo je do pogreške',
  /** The list status message for loading status */
  'list-status.loading': 'Učitavanje komentara',

  /** Text shown when no users can be found to mention */
  'mentions.no-users-found': 'Nisu pronađeni korisnici',
  /** Label/badge shown for users that are not authorized to see the document, and thus cannot be mentioned */
  'mentions.unauthorized-user': 'Neovlašten',
  /** Aria label for the command list for users to mention */
  'mentions.user-list-aria-label': 'Popis korisnika za spomenuti',

  /** The comments onboarding popover text */
  'onboarding.body':
    'Možete dodati komentare na bilo koje polje u dokumentu. Pojavit će se ovdje, grupirani po polju.',
  /** The comments onboarding dismiss text */
  'onboarding.dismiss': 'Razumijem',
  /** The comments onboarding popover header text */
  'onboarding.header': 'Polja dokumenata sada imaju komentare',

  /** Tooltip for the button to add a reaction to a comment */
  'reactions.add-reaction-tooltip': 'Dodaj reakciju',
  /** Aria label for the individual reactions you can choose from when reacting to a comment */
  'reactions.react-with-aria-label': 'Reagirajte s {{reactionName}}',
  /** When a users' name cannot be resolved, fall back to this name */
  'reactions.user-list.unknown-user-fallback-name': 'Nepoznati korisnik',
  /**
   * When showing list of users who have reacted, replaces your own name with "you", eg
   * "Donna, you, James, and Tyler reacted with 👍". A different key (`_leading` suffix)
   * is used when you are the first to react, eg "You, Donna and Tyler reacted with 👍".
   * Use `{{name}}` if you want to instead use the current users' actual name.
   */
  'reactions.user-list.you': 'vi',
  /**
   * When showing list of users who have reacted, replaces your own name with "You", eg
   * "You, Donna, James, and Tyler reacted with 👍". A different key (`_leading` suffix)
   * is used when you are not the first to react, eg "Donna, you, James and Tyler reacted with 👍".
   * Use `{{name}}` if you want to instead use the current users' actual name.
   */
  'reactions.user-list.you_leading': 'Vi',
  /**
   * The text shown for the tooltip that appears when hovering over the reaction count, eg
   * "Donna, James, and Tyler Reacted with 👍". Three components are available for use:
   * - `<UserList/>` - the list of names of users who have reacted, using the locales list format
   * - `<Text>` - should be wrapped around the text describing the action ("reacted with")
   * - `<ReactionName/>` - the name of the reaction emoji, eg ":heavy_plus_sign:"
   */
  'reactions.users-reacted-with-reaction':
    '<UserList/> <Text>je reagirao/la s</Text> <ReactionName/>',

  /** Status filter: The short title describing filtering on open (non-resolved) comments */
  'status-filter.status-open': 'Otvoreno',
  /** Status filter: The full text for describing filtering on open (non-resolved) comments */
  'status-filter.status-open-full': 'Otvoreni komentari',
  /** Status filter: The short title describing filtering on resolved comments */
  'status-filter.status-resolved': 'Riješeno',
  /** Status filter: The full text for describing filtering on resolved comments */
  'status-filter.status-resolved-full': 'Riješeni komentari',
  /** Status filter: The full text for describing filtering on resolved comments and is upsell mode */
  'status-filter.status-resolved-full-upsell': 'Nadogradite kako biste vidjeli riješene komentare',
})
