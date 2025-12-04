import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** The close comments button text */
  'close-pane-button-text': 'Lukk kommentarar',

  /** The aria label for the close comments button */
  'close-pane-button-text-aria-label': 'Lukk kommentarar',

  /** When composing a comment, the placeholder text shown when adding a comment to a field with no current comments */
  'compose.add-comment-input-placeholder': 'Legg til kommentar til <strong>{{field}}</strong>',
  /** When composing a comment, the placeholder text shown when adding a comment to a field with no current comments and the mode is upsell */
  'compose.add-comment-input-placeholder-upsell': 'Oppgrader for å legge til kommentar',
  /** When composing a comment, the placeholder text shown when the input is empty */
  'compose.create-comment-placeholder': 'Lag ein ny kommentar',
  /** When composing a comment, the aria label for the button to mention a user */
  'compose.mention-user-aria-label': 'Nemn brukar',
  /** When composing a comment, the tooltip text for the button to mention a user */
  'compose.mention-user-tooltip': 'Nemn brukar',
  /** When composing a reply, the placeholder text shown when the input is empty */
  'compose.reply-placeholder': 'Svar',
  /** When composing a reply, the placeholder text shown when the input is empty and the mode is upsell */
  'compose.reply-placeholder-upsell': 'Oppgrader for å svare',
  /** When composing a comment, the aria label for the button to send a comment */
  'compose.send-comment-aria-label': 'Send kommentar',
  /** When composing a comment, the tooltip text for the button to send a comment */
  'compose.send-comment-tooltip': 'Send kommentar',

  /** The inspector text when error copying link */
  'copy-link-error-message': 'Kunne ikkje kopiere lenke til utklippstavla',

  /** The delete dialog body for a comment */
  'delete-comment.body': 'Når ein kommentar er sletta, kan den ikkje bli henta tilbake.',
  /** The delete dialog confirm button text for a comment */
  'delete-comment.confirm': 'Slett kommentar',
  /** The delete dialog title for a comment */
  'delete-comment.title': 'Slett denne kommentaren?',

  /** The delete dialog error */
  'delete-dialog.error':
    'Ein feil oppstod under sletting av kommentaren. Ver venleg og prøv igjen.',

  /** The delete dialog body for a thread */
  'delete-thread.body':
    'Denne kommentaren og svara vil bli sletta, og når dei er sletta kan dei ikkje bli henta tilbake.',
  /** The delete dialog conform button text for a thread */
  'delete-thread.confirm': 'Slett tråd',
  /** The delete dialog title for a thread */
  'delete-thread.title': 'Slett denne kommentartråden?',

  /** The button text for confirming discard */
  'discard.button-confirm': 'Forkast',
  /** The header for discard comment dialog */
  'discard.header': 'Forkast kommentar?',
  /** The text for discard comment dialog */
  'discard.text': 'Vil du forkaste kommentaren?',

  /** Sharing feedback on the comments feature: The link title */
  'feature-feedback.link': 'Del din tilbakemelding',
  /** Sharing feedback on the comments feature: The form title  */
  'feature-feedback.title': 'Hjelp til med å forbetre ',

  /** The name of the comments feature, for use in header. Capitalized, eg "Comments". */
  'feature-name': 'Comments',

  /** Aria label for button above fields to add a comment, when the field currently do not have any comments */
  'field-button.aria-label-add': 'Legg til kommentar',
  /** Aria label for button above fields that opens the comments for this field, when there are existing comments */
  'field-button.aria-label-open': 'Opne kommentarar',
  /** Text shown in popover when hovering the button above fields that opens the comments panel, when there is a single comment present */
  'field-button.content_one': 'Vis kommentar',
  /** Text shown in popover when hovering the button above fields that opens the comments panel, when there are more than one comment present */
  'field-button.content_other': 'Vis kommentarar',
  /** Text shown in popover when hovering the button above fields to add a comment, when the field currently do not have any comments */
  'field-button.title': 'Legg til kommentar',

  /* The text shown in the inline comment button when the button is disabled due to overlap */
  'inline-add-comment-button.disabled-overlap-title': 'Kommentarar kan ikkje overlappe',
  /** The text shown in the inline comment button */
  'inline-add-comment-button.title': 'Legg til kommentar',

  /** The title of the error card shown in the comments inspector */
  'inspector-error.title': undefined, // 'Something went wrong while loading comments'

  /** Aria label for the breadcrumb button showing the field path. `{{field}}` is the last (most specific) field. */
  'list-item.breadcrumb-button-go-to-field-aria-label': 'Gå til {{field}} felt',
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
  'list-item.layout-failed-sent': 'Klarte ikkje å sende.',
  /** The loading message when posting a comment is in progress */
  'list-item.layout-posting': 'Postar...',
  /** The text for retrying posting a comment */
  'list-item.layout-retry': 'Prøv igjen',
  /** The text shown when the value a comment references has been deleted */
  'list-item.missing-referenced-value-tooltip-content': 'Den kommenterte teksten har blitt sletta',
  /** The aria label for the comments menu button to open the actions menu */
  'list-item.open-menu-aria-label': 'Opne kommentarhandlingsmeny',
  /** The button text to re-open a resolved comment  */
  'list-item.re-open-resolved': 'Opne på nytt',
  /** The button aria label to re-open a comment that is resolved */
  'list-item.re-open-resolved-aria-label': 'Opne på nytt',
  /** The button aria label to mark a comment as resolved */
  'list-item.resolved-tooltip-aria-label': 'Merk kommentar som løyst',
  /** The button text to mark a comment as resolved */
  'list-item.resolved-tooltip-content': 'Merk som løyst',

  /** The empty state text for open comments */
  'list-status.empty-state-open-text': 'Opne kommentarar på dette dokumentet vil bli vist her.',
  /** The empty state title for open comments */
  'list-status.empty-state-open-title': 'Ingen opne kommentarar enno',
  /** The empty state text for resolved comments */
  'list-status.empty-state-resolved-text':
    'Løyste kommentarar på dette dokumentet vil bli vist her.',
  /** The empty state title for resolved comments */
  'list-status.empty-state-resolved-title': 'Ingen løyste kommentarar enno',
  /** The list status message for error */
  'list-status.error': 'Noko gjekk gale',
  /** The list status message for loading status */
  'list-status.loading': 'Lastar kommentarar',

  /** Text shown when no users can be found to mention */
  'mentions.no-users-found': 'Ingen brukarar funne',
  /** Label/badge shown for users that are not authorized to see the document, and thus cannot be mentioned */
  'mentions.unauthorized-user': 'Uautorisert',
  /** Aria label for the command list for users to mention */
  'mentions.user-list-aria-label': 'Liste over brukarar å nemne',

  /** The comments onboarding popover text */
  'onboarding.body':
    'Du kan leggje til kommentarar på eit kvart felt i eit dokument. Dei vil dukke opp her, gruppert etter felt.',
  /** The comments onboarding dismiss text */
  'onboarding.dismiss': 'Skjønar',
  /** The comments onboarding popover header text */
  'onboarding.header': 'Dokumentfelt har no kommentarar',

  /** Tooltip for the button to add a reaction to a comment */
  'reactions.add-reaction-tooltip': 'Legg til reaksjon',
  /** Aria label for the individual reactions you can choose from when reacting to a comment */
  'reactions.react-with-aria-label': 'Reager med {{reactionName}}',
  /** When a users' name cannot be resolved, fall back to this name */
  'reactions.user-list.unknown-user-fallback-name': 'Ukjend brukar',
  /**
   * When showing list of users who have reacted, replaces your own name with "you", eg
   * "Donna, you, James, and Tyler reacted with 👍". A different key (`_leading` suffix)
   * is used when you are the first to react, eg "You, Donna and Tyler reacted with 👍".
   * Use `{{name}}` if you want to instead use the current users' actual name.
   */
  'reactions.user-list.you': 'du',
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
  'status-filter.status-open': 'Opne',
  /** Status filter: The full text for describing filtering on open (non-resolved) comments */
  'status-filter.status-open-full': 'Opne kommentarar',
  /** Status filter: The short title describing filtering on resolved comments */
  'status-filter.status-resolved': 'Løyste',
  /** Status filter: The full text for describing filtering on resolved comments */
  'status-filter.status-resolved-full': 'Løyste kommentarar',
  /** Status filter: The full text for describing filtering on resolved comments and is upsell mode */
  'status-filter.status-resolved-full-upsell': 'Oppgrader for å sjå løyste kommentarar',
})
