import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** The close comments button text */
  'close-pane-button-text': 'Loka athugasemdum',

  /** The aria label for the close comments button */
  'close-pane-button-text-aria-label': 'Loka athugasemdum',

  /** When composing a comment, the placeholder text shown when adding a comment to a field with no current comments */
  'compose.add-comment-input-placeholder': 'Bættu við athugasemd við <strong>{{field}}</strong>',
  /** When composing a comment, the placeholder text shown when adding a comment to a field with no current comments and the mode is upsell */
  'compose.add-comment-input-placeholder-upsell': 'Uppfærðu til að bæta við athugasemd',
  /** When composing a comment, the placeholder text shown when the input is empty */
  'compose.create-comment-placeholder': 'Búa til nýja athugasemd',
  /** When composing a comment, the aria label for the button to mention a user */
  'compose.mention-user-aria-label': 'Tilnefna notanda',
  /** When composing a comment, the tooltip text for the button to mention a user */
  'compose.mention-user-tooltip': 'Tilnefna notanda',
  /** When composing a reply, the placeholder text shown when the input is empty */
  'compose.reply-placeholder': 'Svara',
  /** When composing a reply, the placeholder text shown when the input is empty and the mode is upsell */
  'compose.reply-placeholder-upsell': 'Uppfærðu til að svara',
  /** When composing a comment, the aria label for the button to send a comment */
  'compose.send-comment-aria-label': 'Senda athugasemd',
  /** When composing a comment, the tooltip text for the button to send a comment */
  'compose.send-comment-tooltip': 'Senda athugasemd',

  /** The inspector text when error copying link */
  'copy-link-error-message': 'Ekki tókst að afrita tengil á klippiborð',

  /** The delete dialog body for a comment */
  'delete-comment.body': 'Ekki hægt að endurheimta athugasemd eftir að henni er eitt.',
  /** The delete dialog confirm button text for a comment */
  'delete-comment.confirm': 'Eyða athugasemd',
  /** The delete dialog title for a comment */
  'delete-comment.title': 'Eyða þessari athugasemd?',

  /** The delete dialog error */
  'delete-dialog.error': 'Villa kom upp við að eyða athugasemdinni. Vinsamlegast reyndu aftur.',

  /** The delete dialog body for a thread */
  'delete-thread.body':
    'Þessi athugasemd og svörum hennar verða eytt, og ekki er hægt að endurheimta þau eftir að þeim er eytt.',
  /** The delete dialog conform button text for a thread */
  'delete-thread.confirm': 'Eyða þræði',
  /** The delete dialog title for a thread */
  'delete-thread.title': 'Eyða þessum athugasemdum þræði?',

  /** The button text for confirming discard */
  'discard.button-confirm': 'Hafna',
  /** The header for discard comment dialog */
  'discard.header': 'Hafna athugasemd?',
  /** The text for discard comment dialog */
  'discard.text': 'Viltu hafna athugasemdinni?',

  /** Sharing feedback on the comments feature: The link title */
  'feature-feedback.link': 'Deildu þínu áliti',
  /** Sharing feedback on the comments feature: The form title  */
  'feature-feedback.title': 'Hjálpaðu til við að bæta ',

  /** The name of the comments feature, for use in header. Capitalized, eg "Comments". */
  'feature-name': 'Athugasemdir',

  /** Aria label for button above fields to add a comment, when the field currently do not have any comments */
  'field-button.aria-label-add': 'Bæta við athugasemd',
  /** Aria label for button above fields that opens the comments for this field, when there are existing comments */
  'field-button.aria-label-open': 'Opna athugasemdir',
  /** Text shown in popover when hovering the button above fields that opens the comments panel, when there is a single comment present */
  'field-button.content_one': 'Skoða athugasemd',
  /** Text shown in popover when hovering the button above fields that opens the comments panel, when there are more than one comment present */
  'field-button.content_other': 'Skoða athugasemdir',
  /** Text shown in popover when hovering the button above fields to add a comment, when the field currently do not have any comments */
  'field-button.title': 'Bæta við athugasemd',

  /* The text shown in the inline comment button when the button is disabled due to overlap */
  'inline-add-comment-button.disabled-overlap-title':
    'Ekki er hægt að hafa athugasemdir sem skarast',
  /** The text shown in the inline comment button */
  'inline-add-comment-button.title': 'Bæta við athugasemd',

  /** The title of the error card shown in the comments inspector */
  'inspector-error.title': undefined, // 'Something went wrong while loading comments'

  /** Aria label for the breadcrumb button showing the field path. `{{field}}` is the last (most specific) field. */
  'list-item.breadcrumb-button-go-to-field-aria-label': 'Farðu í {{field}} reit',
  /** The button tooltip content for the add reaction button */
  'list-item.context-menu-add-reaction': 'Bæta við viðbrögðum',
  /** The button tooltip aria label for adding a reaction */
  'list-item.context-menu-add-reaction-aria-label': 'Bæta við viðbrögðum',
  /** The button tooltip content for the add reaction button and mode is upsell */
  'list-item.context-menu-add-reaction-upsell': 'Uppfærðu til að bæta við viðbrögðum',
  /** The action menu item for copying a comment link */
  'list-item.copy-link': 'Afrita tengil að athugasemd',
  /** The action menu item for deleting a comment */
  'list-item.delete-comment': 'Eyða athugasemd',
  /** The action menu item for editing a comment */
  'list-item.edit-comment': 'Breyta athugasemd',
  /** The action menu item for editing a comment and the mode is upsell */
  'list-item.edit-comment-upsell': 'Uppfærðu til að breyta athugasemd',
  /** Aria label for the button that takes you to the field, which wraps a thread/comment */
  'list-item.go-to-field-button.aria-label': 'Farðu í reit',
  /**
   * The text shown below the author and timestamp of a comment including a link back to the context in which the comment was made.
   * Consists of a document title wrapped in a link, and a word or phrase to indicate that the link refers to a location:
   * eg "on Home", "on Coffee Machine | Products", "on Pricing – Sanity"
   */
  'list-item.layout-context': 'á <IntentLink>{{title}}</IntentLink>',
  /** The marker to indicate that a comment has been edited in brackets */
  'list-item.layout-edited': 'breytt',
  /** The error text when sending a comment has failed */
  'list-item.layout-failed-sent': 'Mistókst að senda.',
  /** The loading message when posting a comment is in progress */
  'list-item.layout-posting': 'Er að birta...',
  /** The text for retrying posting a comment */
  'list-item.layout-retry': 'Reyna aftur',
  /** The text shown when the value a comment references has been deleted */
  'list-item.missing-referenced-value-tooltip-content':
    'Textinn sem athugasemdin vísaði til hefur verið eytt',
  /** The aria label for the comments menu button to open the actions menu */
  'list-item.open-menu-aria-label': 'Opna valmynd athugasemda',
  /** The button text to re-open a resolved comment  */
  'list-item.re-open-resolved': 'Opna aftur',
  /** The button aria label to re-open a comment that is resolved */
  'list-item.re-open-resolved-aria-label': 'Opna aftur',
  /** The button aria label to mark a comment as resolved */
  'list-item.resolved-tooltip-aria-label': 'Merktu athugasemd sem leysta',
  /** The button text to mark a comment as resolved */
  'list-item.resolved-tooltip-content': 'Merktu sem leysta',

  /** The empty state text for open comments */
  'list-status.empty-state-open-text': 'Opnar athugasemdir á þessu skjali verða sýndar hér.',
  /** The empty state title for open comments */
  'list-status.empty-state-open-title': 'Engar opnar athugasemdir ennþá',
  /** The empty state text for resolved comments */
  'list-status.empty-state-resolved-text': 'Leystar athugasemdir við þetta skjal verða sýndar hér.',
  /** The empty state title for resolved comments */
  'list-status.empty-state-resolved-title': 'Engar leystar athugasemdir ennþá',
  /** The list status message for error */
  'list-status.error': 'Eitthvað fór úrskeiðis',
  /** The list status message for loading status */
  'list-status.loading': 'Hleður athugasemdum',

  /** Text shown when no users can be found to mention */
  'mentions.no-users-found': 'Engir notendur fundust',
  /** Label/badge shown for users that are not authorized to see the document, and thus cannot be mentioned */
  'mentions.unauthorized-user': 'Óheimilt',
  /** Aria label for the command list for users to mention */
  'mentions.user-list-aria-label': 'Listi yfir notendur til að nefna',

  /** The comments onboarding popover text */
  'onboarding.body':
    'Þú getur bætt athugasemdum við hvaða reit í skjali sem er. Þær munu birtast hér, flokkaðar eftir reit.',
  /** The comments onboarding dismiss text */
  'onboarding.dismiss': 'Skiljið',
  /** The comments onboarding popover header text */
  'onboarding.header': 'Skjala reitir hafa nú athugasemdir',

  /** Tooltip for the button to add a reaction to a comment */
  'reactions.add-reaction-tooltip': 'Bættu við viðbragði',
  /** Aria label for the individual reactions you can choose from when reacting to a comment */
  'reactions.react-with-aria-label': 'Bregðast við með {{reactionName}}',
  /** When a users' name cannot be resolved, fall back to this name */
  'reactions.user-list.unknown-user-fallback-name': 'Óþekktur notandi',
  /**
   * When showing list of users who have reacted, replaces your own name with "you", eg
   * "Donna, you, James, and Tyler reacted with 👍". A different key (`_leading` suffix)
   * is used when you are the first to react, eg "You, Donna and Tyler reacted with 👍".
   * Use `{{name}}` if you want to instead use the current users' actual name.
   */
  'reactions.user-list.you': 'þú',
  /**
   * When showing list of users who have reacted, replaces your own name with "You", eg
   * "You, Donna, James, and Tyler reacted with 👍". A different key (`_leading` suffix)
   * is used when you are not the first to react, eg "Donna, you, James and Tyler reacted with 👍".
   * Use `{{name}}` if you want to instead use the current users' actual name.
   */
  'reactions.user-list.you_leading': 'Þú',
  /**
   * The text shown for the tooltip that appears when hovering over the reaction count, eg
   * "Donna, James, and Tyler Reacted with 👍". Three components are available for use:
   * - `<UserList/>` - the list of names of users who have reacted, using the locales list format
   * - `<Text>` - should be wrapped around the text describing the action ("reacted with")
   * - `<ReactionName/>` - the name of the reaction emoji, eg ":heavy_plus_sign:"
   */
  'reactions.users-reacted-with-reaction':
    '<UserList/> <Text>bregðast við með</Text> <ReactionName/>',

  /** Status filter: The short title describing filtering on open (non-resolved) comments */
  'status-filter.status-open': 'Opinn',
  /** Status filter: The full text for describing filtering on open (non-resolved) comments */
  'status-filter.status-open-full': 'Opnar athugasemdir',
  /** Status filter: The short title describing filtering on resolved comments */
  'status-filter.status-resolved': 'Leyst',
  /** Status filter: The full text for describing filtering on resolved comments */
  'status-filter.status-resolved-full': 'Leystar athugasemdir',
  /** Status filter: The full text for describing filtering on resolved comments and is upsell mode */
  'status-filter.status-resolved-full-upsell': 'Uppfærðu til að sjá leystar athugasemdir',
})
