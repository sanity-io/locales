import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** The close comments button text */
  'close-pane-button-text': 'Stäng kommentarer',

  /** The aria label for the close comments button */
  'close-pane-button-text-aria-label': 'Stäng kommentarer',

  /** When composing a comment, the placeholder text shown when adding a comment to a field with no current comments */
  'compose.add-comment-input-placeholder': 'Lägg till kommentar till <strong>{{field}}</strong>',
  /** When composing a comment, the placeholder text shown when adding a comment to a field with no current comments and the mode is upsell */
  'compose.add-comment-input-placeholder-upsell': 'Uppgradera för att lägga till kommentar',
  /** When composing a comment, the placeholder text shown when the input is empty */
  'compose.create-comment-placeholder': 'Skapa en ny kommentar',
  /** When composing a comment, the aria label for the button to mention a user */
  'compose.mention-user-aria-label': 'Nämn användare',
  /** When composing a comment, the tooltip text for the button to mention a user */
  'compose.mention-user-tooltip': 'Nämn användare',
  /** When composing a reply, the placeholder text shown when the input is empty */
  'compose.reply-placeholder': 'Svara',
  /** When composing a reply, the placeholder text shown when the input is empty and the mode is upsell */
  'compose.reply-placeholder-upsell': 'Uppgradera för att svara',
  /** When composing a comment, the aria label for the button to send a comment */
  'compose.send-comment-aria-label': 'Skicka kommentar',
  /** When composing a comment, the tooltip text for the button to send a comment */
  'compose.send-comment-tooltip': 'Skicka kommentar',

  /** The inspector text when error copying link */
  'copy-link-error-message': 'Kunde inte kopiera länk till urklipp',

  /** The delete dialog body for a comment */
  'delete-comment.body': 'När en kommentar har raderats går det inte att återställa den.',
  /** The delete dialog confirm button text for a comment */
  'delete-comment.confirm': 'Radera kommentar',
  /** The delete dialog title for a comment */
  'delete-comment.title': 'Radera denna kommentar?',

  /** The delete dialog error */
  'delete-dialog.error': 'Ett fel uppstod vid radering av kommentaren. Försök igen.',

  /** The delete dialog body for a thread */
  'delete-thread.body':
    'Denna kommentar och dess svar kommer att raderas, och när de väl är raderade kan de inte återställas.',
  /** The delete dialog conform button text for a thread */
  'delete-thread.confirm': 'Radera tråd',
  /** The delete dialog title for a thread */
  'delete-thread.title': 'Radera denna kommentarstråd?',

  /** The button text for confirming discard */
  'discard.button-confirm': 'Kassera',
  /** The header for discard comment dialog */
  'discard.header': 'Kassera kommentar?',
  /** The text for discard comment dialog */
  'discard.text': 'Vill du kassera kommentaren?',

  /** Sharing feedback on the comments feature: The link title */
  'feature-feedback.link': 'Dela din feedback',
  /** Sharing feedback on the comments feature: The form title  */
  'feature-feedback.title': 'Hjälp till att förbättra ',

  /** The name of the comments feature, for use in header. Capitalized, eg "Comments". */
  'feature-name': 'Comments',

  /** Aria label for button above fields to add a comment, when the field currently do not have any comments */
  'field-button.aria-label-add': 'Lägg till kommentar',
  /** Aria label for button above fields that opens the comments for this field, when there are existing comments */
  'field-button.aria-label-open': 'Öppna kommentarer',
  /** Text shown in popover when hovering the button above fields that opens the comments panel, when there is a single comment present */
  'field-button.content_one': 'Visa kommentar',
  /** Text shown in popover when hovering the button above fields that opens the comments panel, when there are more than one comment present */
  'field-button.content_other': 'Visa kommentarer',
  /** Text shown in popover when hovering the button above fields to add a comment, when the field currently do not have any comments */
  'field-button.title': 'Lägg till kommentar',

  /* The text shown in the inline comment button when the button is disabled due to overlap */
  'inline-add-comment-button.disabled-overlap-title': 'Kommentarer kan inte överlappa',
  /** The text shown in the inline comment button */
  'inline-add-comment-button.title': 'Lägg till kommentar',

  /** The title of the error card shown in the comments inspector */
  'inspector-error.title': 'Något gick fel vid inläsning av kommentarer',

  /** Aria label for the breadcrumb button showing the field path. `{{field}}` is the last (most specific) field. */
  'list-item.breadcrumb-button-go-to-field-aria-label': 'Gå till {{field}} fält',
  /** The button tooltip content for the add reaction button */
  'list-item.context-menu-add-reaction': 'Lägg till reaktion',
  /** The button tooltip aria label for adding a reaction */
  'list-item.context-menu-add-reaction-aria-label': 'Lägg till reaktion',
  /** The button tooltip content for the add reaction button and mode is upsell */
  'list-item.context-menu-add-reaction-upsell': 'Uppgradera för att lägga till reaktion',
  /** The action menu item for copying a comment link */
  'list-item.copy-link': 'Kopiera länk till kommentar',
  /** The action menu item for deleting a comment */
  'list-item.delete-comment': 'Radera kommentar',
  /** The action menu item for editing a comment */
  'list-item.edit-comment': 'Redigera kommentar',
  /** The action menu item for editing a comment and the mode is upsell */
  'list-item.edit-comment-upsell': 'Uppgradera för att redigera kommentar',
  /** Aria label for the button that takes you to the field, which wraps a thread/comment */
  'list-item.go-to-field-button.aria-label': 'Gå till fält',
  /**
   * The text shown below the author and timestamp of a comment including a link back to the context in which the comment was made.
   * Consists of a document title wrapped in a link, and a word or phrase to indicate that the link refers to a location:
   * eg "on Home", "on Coffee Machine | Products", "on Pricing – Sanity"
   */
  'list-item.layout-context': 'på <IntentLink>{{title}}</IntentLink>',
  /** The marker to indicate that a comment has been edited in brackets */
  'list-item.layout-edited': 'redigerad',
  /** The error text when sending a comment has failed */
  'list-item.layout-failed-sent': 'Misslyckades med att skicka.',
  /** The loading message when posting a comment is in progress */
  'list-item.layout-posting': 'Skickar...',
  /** The text for retrying posting a comment */
  'list-item.layout-retry': 'Försök igen',
  /** The text shown when the value a comment references has been deleted */
  'list-item.missing-referenced-value-tooltip-content': 'Den kommenterade texten har raderats',
  /** The aria label for the comments menu button to open the actions menu */
  'list-item.open-menu-aria-label': 'Öppna kommentarsåtgärder meny',
  /** The button text to re-open a resolved comment  */
  'list-item.re-open-resolved': 'Öppna igen',
  /** The button aria label to re-open a comment that is resolved */
  'list-item.re-open-resolved-aria-label': 'Öppna igen',
  /** The button aria label to mark a comment as resolved */
  'list-item.resolved-tooltip-aria-label': 'Markera kommentar som löst',
  /** The button text to mark a comment as resolved */
  'list-item.resolved-tooltip-content': 'Markera som löst',

  /** The empty state text for open comments */
  'list-status.empty-state-open-text': 'Öppna kommentarer på detta dokument visas här.',
  /** The empty state title for open comments */
  'list-status.empty-state-open-title': 'Inga öppna kommentarer ännu',
  /** The empty state text for resolved comments */
  'list-status.empty-state-resolved-text':
    'Lösta kommentarer på detta dokument kommer att visas här.',
  /** The empty state title for resolved comments */
  'list-status.empty-state-resolved-title': 'Inga lösta kommentarer ännu',
  /** The list status message for error */
  'list-status.error': 'Något gick fel',
  /** The list status message for loading status */
  'list-status.loading': 'Laddar kommentarer',

  /** Text shown when no users can be found to mention */
  'mentions.no-users-found': 'Inga användare hittades',
  /** Label/badge shown for users that are not authorized to see the document, and thus cannot be mentioned */
  'mentions.unauthorized-user': 'Obehörig',
  /** Aria label for the command list for users to mention */
  'mentions.user-list-aria-label': 'Lista över användare att nämna',

  /** The comments onboarding popover text */
  'onboarding.body':
    'Du kan lägga till kommentarer till vilket fält som helst i ett dokument. De kommer att visas här, grupperade efter fält.',
  /** The comments onboarding dismiss text */
  'onboarding.dismiss': 'Förstått',
  /** The comments onboarding popover header text */
  'onboarding.header': 'Dokumentfält har nu kommentarer',

  /** Tooltip for the button to add a reaction to a comment */
  'reactions.add-reaction-tooltip': 'Lägg till reaktion',
  /** Aria label for the individual reactions you can choose from when reacting to a comment */
  'reactions.react-with-aria-label': 'Reagera med {{reactionName}}',
  /** When a users' name cannot be resolved, fall back to this name */
  'reactions.user-list.unknown-user-fallback-name': 'Okänd användare',
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
  'reactions.users-reacted-with-reaction': '<UserList/> <Text>reagerade med</Text> <ReactionName/>',

  /** Status filter: The short title describing filtering on open (non-resolved) comments */
  'status-filter.status-open': 'Öppna',
  /** Status filter: The full text for describing filtering on open (non-resolved) comments */
  'status-filter.status-open-full': 'Öppna kommentarer',
  /** Status filter: The short title describing filtering on resolved comments */
  'status-filter.status-resolved': 'Lösta',
  /** Status filter: The full text for describing filtering on resolved comments */
  'status-filter.status-resolved-full': 'Lösta kommentarer',
  /** Status filter: The full text for describing filtering on resolved comments and is upsell mode */
  'status-filter.status-resolved-full-upsell': 'Uppgradera för att se lösta kommentarer',
})
