import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** The close comments button text */
  'close-pane-button-text': 'Lukk kommentarer',

  /** The aria label for the close comments button */
  'close-pane-button-text-aria-label': 'Lukk kommentarer',

  /** When composing a comment, the placeholder text shown when adding a comment to a field with no current comments */
  'compose.add-comment-input-placeholder': 'Legg til kommentar på <strong>{{field}}</strong>',
  /** When composing a comment, the placeholder text shown when adding a comment to a field with no current comments and the mode is upsell */
  'compose.add-comment-input-placeholder-upsell': 'Oppgrader for å legge til kommentar',
  /** When composing a comment, the placeholder text shown when the input is empty */
  'compose.create-comment-placeholder': 'Kommentér',
  /** When composing a comment, the aria label for the button to mention a user */
  'compose.mention-user-aria-label': 'Nevn bruker',
  /** When composing a comment, the tooltip text for the button to mention a user */
  'compose.mention-user-tooltip': 'Nevn bruker',
  /** When composing a reply, the placeholder text shown when the input is empty */
  'compose.reply-placeholder': 'Svar',
  /** When composing a reply, the placeholder text shown when the input is empty and the mode is upsell */
  'compose.reply-placeholder-upsell': 'Oppgrader for å svare',
  /** When composing a comment, the aria label for the button to send a comment */
  'compose.send-comment-aria-label': 'Send kommentar',
  /** When composing a comment, the tooltip text for the button to send a comment */
  'compose.send-comment-tooltip': 'Send kommentar',

  /** The inspector text when error copying link */
  'copy-link-error-message': 'Kunne ikke kopiere lenke til utklippstavlen',

  /** The delete dialog body for a comment */
  'delete-comment.body': 'Når en kommentar er slettet, kan den ikke gjenopprettes.',
  /** The delete dialog confirm button text for a comment */
  'delete-comment.confirm': 'Slett kommentar',
  /** The delete dialog title for a comment */
  'delete-comment.title': 'Slette denne kommentaren?',

  /** The delete dialog error */
  'delete-dialog.error': 'En feil oppstod under sletting av kommentaren. Vennligst prøv igjen.',

  /** The delete dialog body for a thread */
  'delete-thread.body':
    'Denne kommentaren og dens svar vil bli slettet, og kan ikke gjenopprettes etter sletting.',
  /** The delete dialog conform button text for a thread */
  'delete-thread.confirm': 'Slett tråd',
  /** The delete dialog title for a thread */
  'delete-thread.title': 'Slette denne kommentartråden?',

  /** The button text for confirming discard */
  'discard.button-confirm': 'Forkast',
  /** The header for discard comment dialog */
  'discard.header': 'Forkaste kommentar?',
  /** The text for discard comment dialog */
  'discard.text': 'Vil du forkaste kommentaren?',

  /** Sharing feedback on the comments feature: The link title */
  'feature-feedback.link': 'Del din tilbakemelding',
  /** Sharing feedback on the comments feature: The form title  */
  'feature-feedback.title': 'Hjelp til med å forbedre ',

  /** The name of the comments feature, for use in header. Capitalized, eg "Comments". */
  'feature-name': 'Kommentarer',

  /** Aria label for button above fields to add a comment, when the field currently do not have any comments */
  'field-button.aria-label-add': 'Legg til kommentar',
  /** Aria label for button above fields that opens the comments for this field, when there are existing comments */
  'field-button.aria-label-open': 'Åpne kommentarer',
  /** Text shown in popover when hovering the button above fields that opens the comments panel, when there is a single comment present */
  'field-button.content_one': 'Vis kommentar',
  /** Text shown in popover when hovering the button above fields that opens the comments panel, when there are more than one comment present */
  'field-button.content_other': 'Vis kommentarer',
  /** Text shown in popover when hovering the button above fields to add a comment, when the field currently do not have any comments */
  'field-button.title': 'Legg til kommentar',

  /* The text shown in the inline comment button when the button is disabled due to overlap */
  'inline-add-comment-button.disabled-overlap-title': 'Kommentarer kan ikke overlappe',
  /** The text shown in the inline comment button */
  'inline-add-comment-button.title': 'Legg til kommentar',

  /** The title of the error card shown in the comments inspector */
  'inspector-error.title': undefined, // 'Something went wrong while loading comments'

  /** Aria label for the breadcrumb button showing the field path. `{{field}}` is the last (most specific) field. */
  'list-item.breadcrumb-button-go-to-field-aria-label': 'Gå til {{field}}-feltet',
  /** The button tooltip content for the add reaction button */
  'list-item.context-menu-add-reaction': 'Legg til reaksjon',
  /** The button tooltip aria label for adding a reaction */
  'list-item.context-menu-add-reaction-aria-label': 'Legg til reaksjon',
  /** The button tooltip content for the add reaction button and mode is upsell */
  'list-item.context-menu-add-reaction-upsell': 'Oppgrader for å legge til reaksjon',
  /** The action menu item for copying a comment link */
  'list-item.copy-link': 'Kopier lenke til kommentar',
  /** The action menu item for deleting a comment */
  'list-item.delete-comment': 'Slett kommentar',
  /** The action menu item for editing a comment */
  'list-item.edit-comment': 'Rediger kommentar',
  /** The action menu item for editing a comment and the mode is upsell */
  'list-item.edit-comment-upsell': 'Oppgrader for å redigere kommentar',
  /** Aria label for the button that takes you to the field, which wraps a thread/comment */
  'list-item.go-to-field-button.aria-label': 'Gå til felt',
  /**
   * The text shown below the author and timestamp of a comment including a link back to the context in which the comment was made.
   * Consists of a document title wrapped in a link, and a word or phrase to indicate that the link refers to a location:
   * eg "on Home", "on Coffee Machine | Products", "on Pricing – Sanity"
   */
  'list-item.layout-context': 'på <IntentLink>{{title}}</IntentLink>',
  /** The marker to indicate that a comment has been edited in brackets */
  'list-item.layout-edited': 'redigert',
  /** The error text when sending a comment has failed */
  'list-item.layout-failed-sent': 'Klarte ikke å sende.',
  /** The loading message when posting a comment is in progress */
  'list-item.layout-posting': 'Sender...',
  /** The text for retrying posting a comment */
  'list-item.layout-retry': 'Prøv igjen',
  /** The text shown when the value a comment references has been deleted */
  'list-item.missing-referenced-value-tooltip-content': 'Den kommenterte teksten har blitt slettet',
  /** The aria label for the comments menu button to open the actions menu */
  'list-item.open-menu-aria-label': 'Åpne kommentarmeny',
  /** The button text to re-open a resolved comment  */
  'list-item.re-open-resolved': 'Gjenåpne',
  /** The button aria label to re-open a comment that is resolved */
  'list-item.re-open-resolved-aria-label': 'Gjenåpne',
  /** The button aria label to mark a comment as resolved */
  'list-item.resolved-tooltip-aria-label': 'Merk kommentar som løst',
  /** The button text to mark a comment as resolved */
  'list-item.resolved-tooltip-content': 'Merk som løst',

  /** The empty state text for open comments */
  'list-status.empty-state-open-text': 'Åpne kommentarer på dette dokumentet vil bli vist her.',
  /** The empty state title for open comments */
  'list-status.empty-state-open-title': 'Ingen åpne kommentarer ennå',
  /** The empty state text for resolved comments */
  'list-status.empty-state-resolved-text':
    'Løste kommentarer på dette dokumentet vil bli vist her.',
  /** The empty state title for resolved comments */
  'list-status.empty-state-resolved-title': 'Ingen løste kommentarer ennå',
  /** The list status message for error */
  'list-status.error': 'Noe gikk galt',
  /** The list status message for loading status */
  'list-status.loading': 'Laster kommentarer',

  /** Text shown when no users can be found to mention */
  'mentions.no-users-found': 'Ingen brukere funnet',
  /** Label/badge shown for users that are not authorized to see the document, and thus cannot be mentioned */
  'mentions.unauthorized-user': 'Uautorisert',
  /** Aria label for the command list for users to mention */
  'mentions.user-list-aria-label': 'Liste over brukere du kan nevne',

  /** The comments onboarding popover text */
  'onboarding.body':
    'Du kan legge til kommentarer på hvert av dokumentets felter. De vil dukke opp her, gruppert etter felt.',
  /** The comments onboarding dismiss text */
  'onboarding.dismiss': 'Skjønner',
  /** The comments onboarding popover header text */
  'onboarding.header': 'Felter har nå kommentarer',

  /** Tooltip for the button to add a reaction to a comment */
  'reactions.add-reaction-tooltip': 'Legg til reaksjon',
  /** Aria label for the individual reactions you can choose from when reacting to a comment */
  'reactions.react-with-aria-label': 'Reager med {{reactionName}}',
  /** When a users' name cannot be resolved, fall back to this name */
  'reactions.user-list.unknown-user-fallback-name': 'Ukjent bruker',
  /**
   * When showing list of users who have reacted, replaces your own name with "you", eg
   * "Donna, you, James, and Tyler reacted with 👍". A different key (`_leading` suffix)
   * is used when you are the first to react, eg "You, Donna and Tyler reacted with 👍".
   * Use `{{name}}` if you want to instead use the current users' actual name.
   */
  'reactions.user-list.you': 'deg',
  /**
   * When showing list of users who have reacted, replaces your own name with "You", eg
   * "You, Donna, James, and Tyler reacted with 👍". A different key (`_leading` suffix)
   * is used when you are not the first to react, eg "Donna, you, James and Tyler reacted with 👍".
   * Use `{{name}}` if you want to instead use the current users' actual name.
   */
  'reactions.user-list.you_leading': 'Du',
  /**
   * The text shown for the tooltip that appears when hovering over the reaction count, eg
   * "Donna, James, and Tyler Reacted with 👍". Three components are available for use:
   * - `<UserList/>` - the list of names of users who have reacted, using the locales list format
   * - `<Text>` - should be wrapped around the text describing the action ("reacted with")
   * - `<ReactionName/>` - the name of the reaction emoji, eg ":heavy_plus_sign:"
   */
  'reactions.users-reacted-with-reaction': '<UserList/> <Text>reagerte med</Text> <ReactionName/>',

  /** Status filter: The short title describing filtering on open (non-resolved) comments */
  'status-filter.status-open': 'Åpen',
  /** Status filter: The full text for describing filtering on open (non-resolved) comments */
  'status-filter.status-open-full': 'Åpne kommentarer',
  /** Status filter: The short title describing filtering on resolved comments */
  'status-filter.status-resolved': 'Løst',
  /** Status filter: The full text for describing filtering on resolved comments */
  'status-filter.status-resolved-full': 'Løste kommentarer',
  /** Status filter: The full text for describing filtering on resolved comments and is upsell mode */
  'status-filter.status-resolved-full-upsell': 'Oppgrader for å se løste kommentarer',
})
