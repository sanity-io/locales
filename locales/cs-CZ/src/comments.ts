import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** The close comments button text */
  'close-pane-button-text': 'Zavřít komentáře',

  /** The aria label for the close comments button */
  'close-pane-button-text-aria-label': 'Zavřít komentáře',

  /** When composing a comment, the placeholder text shown when adding a comment to a field with no current comments */
  'compose.add-comment-input-placeholder': 'Přidat komentář k <strong>{{field}}</strong>',
  /** When composing a comment, the placeholder text shown when adding a comment to a field with no current comments and the mode is upsell */
  'compose.add-comment-input-placeholder-upsell': 'Vylepšete pro přidání komentáře',
  /** When composing a comment, the placeholder text shown when the input is empty */
  'compose.create-comment-placeholder': 'Vytvořit nový komentář',
  /** When composing a comment, the aria label for the button to mention a user */
  'compose.mention-user-aria-label': 'Zmínit uživatele',
  /** When composing a comment, the tooltip text for the button to mention a user */
  'compose.mention-user-tooltip': 'Zmínit uživatele',
  /** When composing a reply, the placeholder text shown when the input is empty */
  'compose.reply-placeholder': 'Odpovědět',
  /** When composing a reply, the placeholder text shown when the input is empty and the mode is upsell */
  'compose.reply-placeholder-upsell': 'Vylepšete pro odpověď',
  /** When composing a comment, the aria label for the button to send a comment */
  'compose.send-comment-aria-label': 'Odeslat komentář',
  /** When composing a comment, the tooltip text for the button to send a comment */
  'compose.send-comment-tooltip': 'Odeslat komentář',

  /** The inspector text when error copying link */
  'copy-link-error-message': 'Nelze zkopírovat odkaz do schránky',

  /** The delete dialog body for a comment */
  'delete-comment.body': 'Po smazání nelze komentář obnovit.',
  /** The delete dialog confirm button text for a comment */
  'delete-comment.confirm': 'Smazat komentář',
  /** The delete dialog title for a comment */
  'delete-comment.title': 'Smazat tento komentář?',

  /** The delete dialog error */
  'delete-dialog.error': 'Při mazání komentáře došlo k chybě. Zkuste to prosím znovu.',

  /** The delete dialog body for a thread */
  'delete-thread.body': 'Tento komentář a jeho odpovědi budou smazány a po smazání nelze obnovit.',
  /** The delete dialog conform button text for a thread */
  'delete-thread.confirm': 'Smazat vlákno',
  /** The delete dialog title for a thread */
  'delete-thread.title': 'Smazat toto vlákno komentářů?',

  /** The button text for confirming discard */
  'discard.button-confirm': 'Zahodit',
  /** The header for discard comment dialog */
  'discard.header': 'Zahodit komentář?',
  /** The text for discard comment dialog */
  'discard.text': 'Chcete zahodit komentář?',

  /** Sharing feedback on the comments feature: The link title */
  'feature-feedback.link': 'Sdílejte svůj názor',
  /** Sharing feedback on the comments feature: The form title  */
  'feature-feedback.title': 'Pomozte zlepšit ',

  /** The name of the comments feature, for use in header. Capitalized, eg "Comments". */
  'feature-name': 'Comments',

  /** Aria label for button above fields to add a comment, when the field currently do not have any comments */
  'field-button.aria-label-add': 'Přidat komentář',
  /** Aria label for button above fields that opens the comments for this field, when there are existing comments */
  'field-button.aria-label-open': 'Otevřít komentáře',
  /** Text shown in popover when hovering the button above fields that opens the comments panel, when there is a single comment present */
  'field-button.content_one': 'Zobrazit komentář',
  /** Text shown in popover when hovering the button above fields that opens the comments panel, when there are more than one comment present */
  'field-button.content_other': 'Zobrazit komentáře',
  /** Text shown in popover when hovering the button above fields to add a comment, when the field currently do not have any comments */
  'field-button.title': 'Přidat komentář',

  /* The text shown in the inline comment button when the button is disabled due to overlap */
  'inline-add-comment-button.disabled-overlap-title': 'Komentáře se nemohou překrývat',
  /** The text shown in the inline comment button */
  'inline-add-comment-button.title': 'Přidat komentář',

  /** The title of the error card shown in the comments inspector */
  'inspector-error.title': 'Při načítání komentářů došlo k chybě',

  /** Aria label for the breadcrumb button showing the field path. `{{field}}` is the last (most specific) field. */
  'list-item.breadcrumb-button-go-to-field-aria-label': 'Přejít na pole {{field}}',
  /** The button tooltip content for the add reaction button */
  'list-item.context-menu-add-reaction': 'Přidat reakci',
  /** The button tooltip aria label for adding a reaction */
  'list-item.context-menu-add-reaction-aria-label': 'Přidat reakci',
  /** The button tooltip content for the add reaction button and mode is upsell */
  'list-item.context-menu-add-reaction-upsell': 'Upgradujte pro přidání reakce',
  /** The action menu item for copying a comment link */
  'list-item.copy-link': 'Kopírovat odkaz na komentář',
  /** The action menu item for deleting a comment */
  'list-item.delete-comment': 'Smazat komentář',
  /** The action menu item for editing a comment */
  'list-item.edit-comment': 'Upravit komentář',
  /** The action menu item for editing a comment and the mode is upsell */
  'list-item.edit-comment-upsell': 'Upgradujte pro úpravu komentáře',
  /** Aria label for the button that takes you to the field, which wraps a thread/comment */
  'list-item.go-to-field-button.aria-label': 'Přejít na pole',
  /**
   * The text shown below the author and timestamp of a comment including a link back to the context in which the comment was made.
   * Consists of a document title wrapped in a link, and a word or phrase to indicate that the link refers to a location:
   * eg "on Home", "on Coffee Machine | Products", "on Pricing – Sanity"
   */
  'list-item.layout-context': 'na <IntentLink>{{title}}</IntentLink>',
  /** The marker to indicate that a comment has been edited in brackets */
  'list-item.layout-edited': 'upraveno',
  /** The error text when sending a comment has failed */
  'list-item.layout-failed-sent': 'Nepodařilo se odeslat.',
  /** The loading message when posting a comment is in progress */
  'list-item.layout-posting': 'Odesílání...',
  /** The text for retrying posting a comment */
  'list-item.layout-retry': 'Zkusit znovu',
  /** The text shown when the value a comment references has been deleted */
  'list-item.missing-referenced-value-tooltip-content': 'Komentovaný text byl smazán',
  /** The aria label for the comments menu button to open the actions menu */
  'list-item.open-menu-aria-label': 'Otevřít menu akcí komentáře',
  /** The button text to re-open a resolved comment  */
  'list-item.re-open-resolved': 'Znovu otevřít',
  /** The button aria label to re-open a comment that is resolved */
  'list-item.re-open-resolved-aria-label': 'Znovu otevřít',
  /** The button aria label to mark a comment as resolved */
  'list-item.resolved-tooltip-aria-label': 'Označit komentář jako vyřešený',
  /** The button text to mark a comment as resolved */
  'list-item.resolved-tooltip-content': 'Označit jako vyřešené',

  /** The empty state text for open comments */
  'list-status.empty-state-open-text': 'Zde budou zobrazeny otevřené komentáře k tomuto dokumentu.',
  /** The empty state title for open comments */
  'list-status.empty-state-open-title': 'Zatím žádné otevřené komentáře',
  /** The empty state text for resolved comments */
  'list-status.empty-state-resolved-text': 'Vyřešené komentáře k tomuto dokumentu se zobrazí zde.',
  /** The empty state title for resolved comments */
  'list-status.empty-state-resolved-title': 'Zatím žádné vyřešené komentáře',
  /** The list status message for error */
  'list-status.error': 'Něco se pokazilo',
  /** The list status message for loading status */
  'list-status.loading': 'Načítání komentářů',

  /** Text shown when no users can be found to mention */
  'mentions.no-users-found': 'Nenalezeni žádní uživatelé',
  /** Label/badge shown for users that are not authorized to see the document, and thus cannot be mentioned */
  'mentions.unauthorized-user': 'Neautorizovaný',
  /** Aria label for the command list for users to mention */
  'mentions.user-list-aria-label': 'Seznam uživatelů k zobrazení',

  /** The comments onboarding popover text */
  'onboarding.body':
    'K jakémukoli poli v dokumentu můžete přidat komentáře. Zobrazí se zde, seskupené podle pole.',
  /** The comments onboarding dismiss text */
  'onboarding.dismiss': 'Rozumím',
  /** The comments onboarding popover header text */
  'onboarding.header': 'Pole dokumentů nyní mají komentáře',

  /** Tooltip for the button to add a reaction to a comment */
  'reactions.add-reaction-tooltip': 'Přidat reakci',
  /** Aria label for the individual reactions you can choose from when reacting to a comment */
  'reactions.react-with-aria-label': 'Reagovat s {{reactionName}}',
  /** When a users' name cannot be resolved, fall back to this name */
  'reactions.user-list.unknown-user-fallback-name': 'Neznámý uživatel',
  /**
   * When showing list of users who have reacted, replaces your own name with "you", eg
   * "Donna, you, James, and Tyler reacted with 👍". A different key (`_leading` suffix)
   * is used when you are the first to react, eg "You, Donna and Tyler reacted with 👍".
   * Use `{{name}}` if you want to instead use the current users' actual name.
   */
  'reactions.user-list.you': 'vy',
  /**
   * When showing list of users who have reacted, replaces your own name with "You", eg
   * "You, Donna, James, and Tyler reacted with 👍". A different key (`_leading` suffix)
   * is used when you are not the first to react, eg "Donna, you, James and Tyler reacted with 👍".
   * Use `{{name}}` if you want to instead use the current users' actual name.
   */
  'reactions.user-list.you_leading': 'Vy',
  /**
   * The text shown for the tooltip that appears when hovering over the reaction count, eg
   * "Donna, James, and Tyler Reacted with 👍". Three components are available for use:
   * - `<UserList/>` - the list of names of users who have reacted, using the locales list format
   * - `<Text>` - should be wrapped around the text describing the action ("reacted with")
   * - `<ReactionName/>` - the name of the reaction emoji, eg ":heavy_plus_sign:"
   */
  'reactions.users-reacted-with-reaction': '<UserList/> <Text>reagovali s</Text> <ReactionName/>',

  /** Status filter: The short title describing filtering on open (non-resolved) comments */
  'status-filter.status-open': 'Otevřené',
  /** Status filter: The full text for describing filtering on open (non-resolved) comments */
  'status-filter.status-open-full': 'Otevřené komentáře',
  /** Status filter: The short title describing filtering on resolved comments */
  'status-filter.status-resolved': 'Vyřešené',
  /** Status filter: The full text for describing filtering on resolved comments */
  'status-filter.status-resolved-full': 'Vyřešené komentáře',
  /** Status filter: The full text for describing filtering on resolved comments and is upsell mode */
  'status-filter.status-resolved-full-upsell': 'Upgradujte pro zobrazení vyřešených komentářů',
})
