import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** The close comments button text */
  'close-pane-button-text': 'Opmerkingen sluiten',

  /** The aria label for the close comments button */
  'close-pane-button-text-aria-label': 'Opmerkingen sluiten',

  /** When composing a comment, the placeholder text shown when adding a comment to a field with no current comments */
  'compose.add-comment-input-placeholder': 'Voeg opmerking toe aan <strong>{{field}}</strong>',
  /** When composing a comment, the placeholder text shown when adding a comment to a field with no current comments and the mode is upsell */
  'compose.add-comment-input-placeholder-upsell': 'Upgrade om opmerkingen toe te voegen',
  /** When composing a comment, the placeholder text shown when the input is empty */
  'compose.create-comment-placeholder': 'Nieuwe opmerking toevoegen',
  /** When composing a comment, the aria label for the button to mention a user */
  'compose.mention-user-aria-label': 'Vermeld gebruiker',
  /** When composing a comment, the tooltip text for the button to mention a user */
  'compose.mention-user-tooltip': 'Vermeld gebruiker',
  /** When composing a reply, the placeholder text shown when the input is empty */
  'compose.reply-placeholder': 'Antwoorden',
  /** When composing a reply, the placeholder text shown when the input is empty and the mode is upsell */
  'compose.reply-placeholder-upsell': 'Upgrade om te antwoorden',
  /** When composing a comment, the aria label for the button to send a comment */
  'compose.send-comment-aria-label': 'Verstuur opmerking',
  /** When composing a comment, the tooltip text for the button to send a comment */
  'compose.send-comment-tooltip': 'Verstuur opmerking',

  /** The inspector text when error copying link */
  'copy-link-error-message': 'Kan link niet naar klembord kopiëren',

  /** The delete dialog body for a comment */
  'delete-comment.body': 'Na het verwijderen kan een opmerking niet worden hersteld.',
  /** The delete dialog confirm button text for a comment */
  'delete-comment.confirm': 'Verwijder opmerking',
  /** The delete dialog title for a comment */
  'delete-comment.title': 'Deze opmerking verwijderen?',

  /** The delete dialog error */
  'delete-dialog.error':
    'Er is een fout opgetreden bij het verwijderen van de opmerking. Probeer het opnieuw.',

  /** The delete dialog body for a thread */
  'delete-thread.body':
    'Deze opmerking en de antwoorden worden verwijderd. Eenmaal verwijderd kunnen ze niet worden hersteld.',
  /** The delete dialog conform button text for a thread */
  'delete-thread.confirm': 'Verwijder draad',
  /** The delete dialog title for a thread */
  'delete-thread.title': 'Deze opmerkingendraad verwijderen?',

  /** The button text for confirming discard */
  'discard.button-confirm': 'Verwerpen',
  /** The header for discard comment dialog */
  'discard.header': 'Opmerking verwerpen?',
  /** The text for discard comment dialog */
  'discard.text': 'Wilt u de opmerking verwerpen?',

  /** Sharing feedback on the comments feature: The link title */
  'feature-feedback.link': 'Deel uw feedback',
  /** Sharing feedback on the comments feature: The form title  */
  'feature-feedback.title': 'Help verbeteren ',

  /** The name of the comments feature, for use in header. Capitalized, eg "Comments". */
  'feature-name': 'Opmerkingen',

  /** Aria label for button above fields to add a comment, when the field currently do not have any comments */
  'field-button.aria-label-add': 'Opmerking toevoegen',
  /** Aria label for button above fields that opens the comments for this field, when there are existing comments */
  'field-button.aria-label-open': 'Opmerking openen',
  /** Text shown in popover when hovering the button above fields that opens the comments panel, when there is a single comment present */
  'field-button.content_one': 'Bekijk opmerking',
  /** Text shown in popover when hovering the button above fields that opens the comments panel, when there are more than one comment present */
  'field-button.content_other': 'Bekijk opmerkingen',
  /** Text shown in popover when hovering the button above fields to add a comment, when the field currently do not have any comments */
  'field-button.title': 'Opmerking toevoegen',

  /* The text shown in the inline comment button when the button is disabled due to overlap */
  'inline-add-comment-button.disabled-overlap-title': 'Opmerkingen kunnen niet overlappen',
  /** The text shown in the inline comment button */
  'inline-add-comment-button.title': 'Voeg opmerking toe',

  /** Aria label for the breadcrumb button showing the field path. `{{field}}` is the last (most specific) field. */
  'list-item.breadcrumb-button-go-to-field-aria-label': 'Ga naar {{field}} veld',
  /** The button tooltip content for the add reaction button */
  'list-item.context-menu-add-reaction': 'Reactie toevoegen',
  /** The button tooltip aria label for adding a reaction */
  'list-item.context-menu-add-reaction-aria-label': 'Reactie toevoegen',
  /** The button tooltip content for the add reaction button and mode is upsell */
  'list-item.context-menu-add-reaction-upsell': 'Upgrade om reactie toe te voegen',
  /** The action menu item for copying a comment link */
  'list-item.copy-link': 'Link naar opmerking kopiëren',
  /** The action menu item for deleting a comment */
  'list-item.delete-comment': 'Opmerking verwijderen',
  /** The action menu item for editing a comment */
  'list-item.edit-comment': 'Opmerking bewerken',
  /** The action menu item for editing a comment and the mode is upsell */
  'list-item.edit-comment-upsell': 'Upgrade om opmerking te bewerken',
  /** Aria label for the button that takes you to the field, which wraps a thread/comment */
  'list-item.go-to-field-button.aria-label': 'Ga naar veld',
  /**
   * The text shown below the author and timestamp of a comment including a link back to the context in which the comment was made.
   * Consists of a document title wrapped in a link, and a word or phrase to indicate that the link refers to a location:
   * eg "on Home", "on Coffee Machine | Products", "on Pricing – Sanity"
   */
  'list-item.layout-context': 'op <IntentLink>{{title}}</IntentLink>',
  /** The marker to indicate that a comment has been edited in brackets */
  'list-item.layout-edited': 'bewerkt',
  /** The error text when sending a comment has failed */
  'list-item.layout-failed-sent': 'Verzenden mislukt.',
  /** The loading message when posting a comment is in progress */
  'list-item.layout-posting': 'Plaatsen...',
  /** The text for retrying posting a comment */
  'list-item.layout-retry': 'Opnieuw proberen',
  /** The text shown when the value a comment references has been deleted */
  'list-item.missing-referenced-value-tooltip-content': 'De becommentarieerde tekst is verwijderd',
  /** The aria label for the comments menu button to open the actions menu */
  'list-item.open-menu-aria-label': 'Menu met opmerkingacties openen',
  /** The button text to re-open a resolved comment  */
  'list-item.re-open-resolved': 'Opnieuw openen',
  /** The button aria label to re-open a comment that is resolved */
  'list-item.re-open-resolved-aria-label': 'Opnieuw openen',
  /** The button aria label to mark a comment as resolved */
  'list-item.resolved-tooltip-aria-label': 'Opmerking als opgelost markeren',
  /** The button text to mark a comment as resolved */
  'list-item.resolved-tooltip-content': 'Als opgelost markeren',

  /** The empty state text for open comments */
  'list-status.empty-state-open-text':
    'Openstaande opmerkingen op dit document worden hier getoond.',
  /** The empty state title for open comments */
  'list-status.empty-state-open-title': 'Nog geen openstaande opmerkingen',
  /** The empty state text for resolved comments */
  'list-status.empty-state-resolved-text':
    'Opgeloste opmerkingen over dit document worden hier getoond.',
  /** The empty state title for resolved comments */
  'list-status.empty-state-resolved-title': 'Nog geen opgeloste opmerkingen',
  /** The list status message for error */
  'list-status.error': 'Er is iets misgegaan',
  /** The list status message for loading status */
  'list-status.loading': 'Opmerkingen laden',

  /** Text shown when no users can be found to mention */
  'mentions.no-users-found': 'Geen gebruikers gevonden',
  /** Label/badge shown for users that are not authorized to see the document, and thus cannot be mentioned */
  'mentions.unauthorized-user': 'Niet geautoriseerd',
  /** Aria label for the command list for users to mention */
  'mentions.user-list-aria-label': 'Lijst van gebruikers om te vermelden',

  /** The comments onboarding popover text */
  'onboarding.body':
    'Je kunt opmerkingen toevoegen aan elk veld in een document. Ze verschijnen hier, gegroepeerd per veld.',
  /** The comments onboarding dismiss text */
  'onboarding.dismiss': 'Begrepen',
  /** The comments onboarding popover header text */
  'onboarding.header': 'Documentvelden hebben nu opmerkingen',

  /** Tooltip for the button to add a reaction to a comment */
  'reactions.add-reaction-tooltip': 'Reactie toevoegen',
  /** Aria label for the individual reactions you can choose from when reacting to a comment */
  'reactions.react-with-aria-label': 'Reageer met {{reactionName}}',
  /** When a users' name cannot be resolved, fall back to this name */
  'reactions.user-list.unknown-user-fallback-name': 'Onbekende gebruiker',
  /**
   * When showing list of users who have reacted, replaces your own name with "you", eg
   * "Donna, you, James, and Tyler reacted with 👍". A different key (`_leading` suffix)
   * is used when you are the first to react, eg "You, Donna and Tyler reacted with 👍".
   * Use `{{name}}` if you want to instead use the current users' actual name.
   */
  'reactions.user-list.you': 'jij',
  /**
   * When showing list of users who have reacted, replaces your own name with "You", eg
   * "You, Donna, James, and Tyler reacted with 👍". A different key (`_leading` suffix)
   * is used when you are not the first to react, eg "Donna, you, James and Tyler reacted with 👍".
   * Use `{{name}}` if you want to instead use the current users' actual name.
   */
  'reactions.user-list.you_leading': 'Jij',
  /**
   * The text shown for the tooltip that appears when hovering over the reaction count, eg
   * "Donna, James, and Tyler Reacted with 👍". Three components are available for use:
   * - `<UserList/>` - the list of names of users who have reacted, using the locales list format
   * - `<Text>` - should be wrapped around the text describing the action ("reacted with")
   * - `<ReactionName/>` - the name of the reaction emoji, eg ":heavy_plus_sign:"
   */
  'reactions.users-reacted-with-reaction':
    '<UserList/> <Text>hebben gereageerd met</Text> <ReactionName/>',

  /** Status filter: The short title describing filtering on open (non-resolved) comments */
  'status-filter.status-open': 'Open',
  /** Status filter: The full text for describing filtering on open (non-resolved) comments */
  'status-filter.status-open-full': 'Open opmerkingen',
  /** Status filter: The short title describing filtering on resolved comments */
  'status-filter.status-resolved': 'Opgelost',
  /** Status filter: The full text for describing filtering on resolved comments */
  'status-filter.status-resolved-full': 'Opgeloste opmerkingen',
  /** Status filter: The full text for describing filtering on resolved comments and is upsell mode */
  'status-filter.status-resolved-full-upsell': 'Upgrade om opgeloste opmerkingen te zien',
})
