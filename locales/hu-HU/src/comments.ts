import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** The close comments button text */
  'close-pane-button-text': 'Hozzászólások bezárása',

  /** The aria label for the close comments button */
  'close-pane-button-text-aria-label': 'Hozzászólások bezárása',

  /** When composing a comment, the placeholder text shown when adding a comment to a field with no current comments */
  'compose.add-comment-input-placeholder':
    '<strong>{{field}}</strong> mezőhöz hozzászólás hozzáadása',
  /** When composing a comment, the placeholder text shown when adding a comment to a field with no current comments and the mode is upsell */
  'compose.add-comment-input-placeholder-upsell': 'Fizess elő a hozzászólás hozzáadásához',
  /** When composing a comment, the placeholder text shown when the input is empty */
  'compose.create-comment-placeholder': 'Új hozzászólás létrehozása',
  /** When composing a comment, the aria label for the button to mention a user */
  'compose.mention-user-aria-label': 'Felhasználó megemlítése',
  /** When composing a comment, the tooltip text for the button to mention a user */
  'compose.mention-user-tooltip': 'Felhasználó megemlítése',
  /** When composing a reply, the placeholder text shown when the input is empty */
  'compose.reply-placeholder': 'Válasz',
  /** When composing a reply, the placeholder text shown when the input is empty and the mode is upsell */
  'compose.reply-placeholder-upsell': 'Fizess elő a válaszadáshoz',
  /** When composing a comment, the aria label for the button to send a comment */
  'compose.send-comment-aria-label': 'Hozzászólás küldése',
  /** When composing a comment, the tooltip text for the button to send a comment */
  'compose.send-comment-tooltip': 'Hozzászólás küldése',

  /** The inspector text when error copying link */
  'copy-link-error-message': 'Nem sikerült a linket a vágólapra másolni',

  /** The delete dialog body for a comment */
  'delete-comment.body': 'A törölt hozzászólás nem állítható vissza.',
  /** The delete dialog confirm button text for a comment */
  'delete-comment.confirm': 'Hozzászólás törlése',
  /** The delete dialog title for a comment */
  'delete-comment.title': 'Törli ezt a hozzászólást?',

  /** The delete dialog error */
  'delete-dialog.error': 'Hiba történt a hozzászólás törlése közben. Kérjük, próbáld újra.',

  /** The delete dialog body for a thread */
  'delete-thread.body':
    'Ez a hozzászólás és válaszai törölve lesznek, és egyszer törölve nem állíthatók helyre.',
  /** The delete dialog conform button text for a thread */
  'delete-thread.confirm': 'Szál törlése',
  /** The delete dialog title for a thread */
  'delete-thread.title': 'Törli ezt a hozzászólás szálat?',

  /** The button text for confirming discard */
  'discard.button-confirm': 'Elvetés',
  /** The header for discard comment dialog */
  'discard.header': 'Hozzászólás elvetése?',
  /** The text for discard comment dialog */
  'discard.text': 'El akarod vetni a hozzászólást?',

  /** Sharing feedback on the comments feature: The link title */
  'feature-feedback.link': 'Oszd meg visszajelzését',
  /** Sharing feedback on the comments feature: The form title  */
  'feature-feedback.title': 'Segíts nekünk fejlődni ',

  /** The name of the comments feature, for use in header. Capitalized, eg "Comments". */
  'feature-name': 'Comments',

  /** Aria label for button above fields to add a comment, when the field currently do not have any comments */
  'field-button.aria-label-add': 'Hozzászólás hozzáadása',
  /** Aria label for button above fields that opens the comments for this field, when there are existing comments */
  'field-button.aria-label-open': 'Hozzászólások megnyitása',
  /** Text shown in popover when hovering the button above fields that opens the comments panel, when there is a single comment present */
  'field-button.content_one': 'Hozzászólás megtekintése',
  /** Text shown in popover when hovering the button above fields that opens the comments panel, when there are more than one comment present */
  'field-button.content_other': 'Hozzászólások megtekintése',
  /** Text shown in popover when hovering the button above fields to add a comment, when the field currently do not have any comments */
  'field-button.title': 'Hozzászólás hozzáadása',

  /* The text shown in the inline comment button when the button is disabled due to overlap */
  'inline-add-comment-button.disabled-overlap-title': 'A hozzászólások nem fedhetik egymást',
  /** The text shown in the inline comment button */
  'inline-add-comment-button.title': 'Hozzászólás hozzáadása',

  /** The title of the error card shown in the comments inspector */
  'inspector-error.title': undefined, // 'Something went wrong while loading comments'

  /** Aria label for the breadcrumb button showing the field path. `{{field}}` is the last (most specific) field. */
  'list-item.breadcrumb-button-go-to-field-aria-label': 'Ugrás a(z) {{field}} mezőhöz',
  /** The button tooltip content for the add reaction button */
  'list-item.context-menu-add-reaction': 'Reakció hozzáadása',
  /** The button tooltip aria label for adding a reaction */
  'list-item.context-menu-add-reaction-aria-label': 'Reakció hozzáadása',
  /** The button tooltip content for the add reaction button and mode is upsell */
  'list-item.context-menu-add-reaction-upsell': 'Frissítés a reakció hozzáadásához',
  /** The action menu item for copying a comment link */
  'list-item.copy-link': 'Hozzászólás linkjének másolása',
  /** The action menu item for deleting a comment */
  'list-item.delete-comment': 'Hozzászólás törlése',
  /** The action menu item for editing a comment */
  'list-item.edit-comment': 'Hozzászólás szerkesztése',
  /** The action menu item for editing a comment and the mode is upsell */
  'list-item.edit-comment-upsell': 'Frissítés a hozzászólás szerkesztéséhez',
  /** Aria label for the button that takes you to the field, which wraps a thread/comment */
  'list-item.go-to-field-button.aria-label': 'Ugrás a mezőhöz',
  /**
   * The text shown below the author and timestamp of a comment including a link back to the context in which the comment was made.
   * Consists of a document title wrapped in a link, and a word or phrase to indicate that the link refers to a location:
   * eg "on Home", "on Coffee Machine | Products", "on Pricing – Sanity"
   */
  'list-item.layout-context': '<IntentLink>{{title}}</IntentLink> helyen',
  /** The marker to indicate that a comment has been edited in brackets */
  'list-item.layout-edited': 'szerkesztve',
  /** The error text when sending a comment has failed */
  'list-item.layout-failed-sent': 'Nem sikerült elküldeni.',
  /** The loading message when posting a comment is in progress */
  'list-item.layout-posting': 'Küldés...',
  /** The text for retrying posting a comment */
  'list-item.layout-retry': 'Újrapróbálkozás',
  /** The text shown when the value a comment references has been deleted */
  'list-item.missing-referenced-value-tooltip-content': 'A komment törölve lett',
  /** The aria label for the comments menu button to open the actions menu */
  'list-item.open-menu-aria-label': 'Hozzászólás műveletek menüjének megnyitása',
  /** The button text to re-open a resolved comment  */
  'list-item.re-open-resolved': 'Újranyitás',
  /** The button aria label to re-open a comment that is resolved */
  'list-item.re-open-resolved-aria-label': 'Újranyitás',
  /** The button aria label to mark a comment as resolved */
  'list-item.resolved-tooltip-aria-label': 'Hozzászólás megjelölése lezártként',
  /** The button text to mark a comment as resolved */
  'list-item.resolved-tooltip-content': 'Megjelölés lezártként',

  /** The empty state text for open comments */
  'list-status.empty-state-open-text':
    'A dokumentumhoz tartozó nyitott hozzászólások itt lesznek megjelenítve.',
  /** The empty state title for open comments */
  'list-status.empty-state-open-title': 'Még nincsenek nyitott megjegyzések',
  /** The empty state text for resolved comments */
  'list-status.empty-state-resolved-text':
    'Az ezen a dokumentumon megoldott megjegyzések itt lesznek megjelenítve.',
  /** The empty state title for resolved comments */
  'list-status.empty-state-resolved-title': 'Még nincsenek megoldott megjegyzések',
  /** The list status message for error */
  'list-status.error': 'Valami hiba történt',
  /** The list status message for loading status */
  'list-status.loading': 'Megjegyzések betöltése',

  /** Text shown when no users can be found to mention */
  'mentions.no-users-found': 'Nem találhatók felhasználók',
  /** Label/badge shown for users that are not authorized to see the document, and thus cannot be mentioned */
  'mentions.unauthorized-user': 'Jogosulatlan',
  /** Aria label for the command list for users to mention */
  'mentions.user-list-aria-label': 'Említendő felhasználók listája',

  /** The comments onboarding popover text */
  'onboarding.body':
    'Bármely mezőhöz hozzáadhat megjegyzéseket egy dokumentumban. Itt fognak megjelenni, mezők szerint csoportosítva.',
  /** The comments onboarding dismiss text */
  'onboarding.dismiss': 'Értem',
  /** The comments onboarding popover header text */
  'onboarding.header': 'A dokumentum mezőihez most már hozzáadhatók megjegyzések',

  /** Tooltip for the button to add a reaction to a comment */
  'reactions.add-reaction-tooltip': 'Reakció hozzáadása',
  /** Aria label for the individual reactions you can choose from when reacting to a comment */
  'reactions.react-with-aria-label': 'Reagálás ezzel: {{reactionName}}',
  /** When a users' name cannot be resolved, fall back to this name */
  'reactions.user-list.unknown-user-fallback-name': 'Ismeretlen felhasználó',
  /**
   * When showing list of users who have reacted, replaces your own name with "you", eg
   * "Donna, you, James, and Tyler reacted with 👍". A different key (`_leading` suffix)
   * is used when you are the first to react, eg "You, Donna and Tyler reacted with 👍".
   * Use `{{name}}` if you want to instead use the current users' actual name.
   */
  'reactions.user-list.you': 'te',
  /**
   * When showing list of users who have reacted, replaces your own name with "You", eg
   * "You, Donna, James, and Tyler reacted with 👍". A different key (`_leading` suffix)
   * is used when you are not the first to react, eg "Donna, you, James and Tyler reacted with 👍".
   * Use `{{name}}` if you want to instead use the current users' actual name.
   */
  'reactions.user-list.you_leading': 'Te',
  /**
   * The text shown for the tooltip that appears when hovering over the reaction count, eg
   * "Donna, James, and Tyler Reacted with 👍". Three components are available for use:
   * - `<UserList/>` - the list of names of users who have reacted, using the locales list format
   * - `<Text>` - should be wrapped around the text describing the action ("reacted with")
   * - `<ReactionName/>` - the name of the reaction emoji, eg ":heavy_plus_sign:"
   */
  'reactions.users-reacted-with-reaction': '<UserList/> <Text>reakcióval</Text> <ReactionName/>',

  /** Status filter: The short title describing filtering on open (non-resolved) comments */
  'status-filter.status-open': 'Nyitott',
  /** Status filter: The full text for describing filtering on open (non-resolved) comments */
  'status-filter.status-open-full': 'Nyitott megjegyzések',
  /** Status filter: The short title describing filtering on resolved comments */
  'status-filter.status-resolved': 'Megoldott',
  /** Status filter: The full text for describing filtering on resolved comments */
  'status-filter.status-resolved-full': 'Megoldott megjegyzések',
  /** Status filter: The full text for describing filtering on resolved comments and is upsell mode */
  'status-filter.status-resolved-full-upsell':
    'Fizess elő a megoldott megjegyzések megtekintéséhez',
})
