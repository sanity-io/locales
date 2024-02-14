import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** The close comments button text */
  'close-pane-button-text': 'Sulje kommentit',

  /** The aria label for the close comments button */
  'close-pane-button-text-aria-label': 'Sulje kommentit',

  /** When composing a comment, the placeholder text shown when adding a comment to a field with no current comments */
  'compose.add-comment-input-placeholder': 'Lisää kommentti kohteeseen <strong>{{field}}</strong>',
  /** When composing a comment, the placeholder text shown when adding a comment to a field with no current comments and the mode is upsell */
  'compose.add-comment-input-placeholder-upsell': 'Päivitä lisätäksesi kommentin',
  /** When composing a comment, the placeholder text shown when the input is empty */
  'compose.create-comment-placeholder': 'Luo uusi kommentti',
  /** When composing a comment, the aria label for the button to mention a user */
  'compose.mention-user-aria-label': 'Mainitse käyttäjä',
  /** When composing a comment, the tooltip text for the button to mention a user */
  'compose.mention-user-tooltip': 'Mainitse käyttäjä',
  /** When composing a reply, the placeholder text shown when the input is empty */
  'compose.reply-placeholder': 'Vastaa',
  /** When composing a reply, the placeholder text shown when the input is empty and the mode is upsell */
  'compose.reply-placeholder-upsell': 'Päivitä vastataksesi',
  /** When composing a comment, the aria label for the button to send a comment */
  'compose.send-comment-aria-label': 'Lähetä kommentti',
  /** When composing a comment, the tooltip text for the button to send a comment */
  'compose.send-comment-tooltip': 'Lähetä kommentti',

  /** The inspector text when error copying link */
  'copy-link-error-message': 'Linkin kopioiminen leikepöydälle epäonnistui',

  /** The inspector successfully copied link text */
  'copy-link-success-message': 'Linkki kopioitu leikepöydälle',

  /** The delete dialog body for a comment */
  'delete-comment.body': 'Kun kommentti on poistettu, sitä ei voi palauttaa.',
  /** The delete dialog confirm button text for a comment */
  'delete-comment.confirm': 'Poista kommentti',
  /** The delete dialog title for a comment */
  'delete-comment.title': 'Poistetaanko tämä kommentti?',

  /** The delete dialog error */
  'delete-dialog.error': 'Kommentin poistamisessa tapahtui virhe. Yritä uudelleen.',

  /** The delete dialog body for a thread */
  'delete-thread.body': 'Tämä kommentti ja sen vastaukset poistetaan, eikä niitä voi palauttaa.',
  /** The delete dialog conform button text for a thread */
  'delete-thread.confirm': 'Poista ketju',
  /** The delete dialog title for a thread */
  'delete-thread.title': 'Poistetaanko tämä kommenttiketju?',

  /** The button text for confirming discard */
  'discard.button-confirm': 'Hylkää',
  /** The header for discard comment dialog */
  'discard.header': 'Hylätäänkö kommentti?',
  /** The text for discard comment dialog */
  'discard.text': 'Haluatko hylätä kommentin?',

  /** Sharing feedback on the comments feature: The link title */
  'feature-feedback.link': 'Jaa palautteesi',
  /** Sharing feedback on the comments feature: The form title  */
  'feature-feedback.title': 'Auta parantamaan ',

  /** The name of the comments feature, for use in header. Capitalized, eg "Comments". */
  'feature-name': 'Comments',

  /** Aria label for button above fields to add a comment, when the field currently do not have any comments */
  'field-button.aria-label-add': 'Lisää kommentti',
  /** Aria label for button above fields that opens the comments for this field, when there are existing comments */
  'field-button.aria-label-open': 'Avaa kommentit',
  /** Text shown in popover when hovering the button above fields that opens the comments panel, when there is a single comment present */
  'field-button.content_one': 'Katso kommentti',
  /** Text shown in popover when hovering the button above fields that opens the comments panel, when there are more than one comment present */
  'field-button.content_other': 'Katso kommentit',
  /** Text shown in popover when hovering the button above fields to add a comment, when the field currently do not have any comments */
  'field-button.title': 'Lisää kommentti',

  /** Aria label for the breadcrumb button showing the field path. `{{field}}` is the last (most specific) field. */
  'list-item.breadcrumb-button-go-to-field-aria-label': 'Mene kenttään {{field}}',
  /** The button tooltip content for the add reaction button */
  'list-item.context-menu-add-reaction': 'Lisää reaktio',
  /** The button tooltip aria label for adding a reaction */
  'list-item.context-menu-add-reaction-aria-label': 'Lisää reaktio',
  /** The button tooltip content for the add reaction button and mode is upsell */
  'list-item.context-menu-add-reaction-upsell': 'Päivitä lisätäksesi reaktion',
  /** The action menu item for copying a comment link */
  'list-item.copy-link': 'Kopioi linkki kommenttiin',
  /** The action menu item for deleting a comment */
  'list-item.delete-comment': 'Poista kommentti',
  /** The action menu item for editing a comment */
  'list-item.edit-comment': 'Muokkaa kommenttia',
  /** The action menu item for editing a comment and the mode is upsell */
  'list-item.edit-comment-upsell': 'Päivitä muokataksesi kommenttia',
  /** Aria label for the button that takes you to the field, which wraps a thread/comment */
  'list-item.go-to-field-button.aria-label': 'Mene kenttään',
  /** The text showing the comment context */
  'list-item.layout-context': 'on <IntentLink>{{title}}</IntentLink>',
  /** The marker to indicate that a comment has been edited in brackets */
  'list-item.layout-edited': 'muokattu',
  /** The error text when sending a comment has failed */
  'list-item.layout-failed-sent': 'Lähettäminen epäonnistui.',
  /** The loading message when posting a comment is in progress */
  'list-item.layout-posting': 'Lähetetään...',
  /** The text for retrying posting a comment */
  'list-item.layout-retry': 'Yritä uudelleen',
  /** The aria label for the comments menu button to open the actions menu */
  'list-item.open-menu-aria-label': 'Avaa kommentin toimintovalikko',
  /** The button text to re-open a resolved comment  */
  'list-item.re-open-resolved': 'Avaa uudelleen',
  /** The button aria label to re-open a comment that is resolved */
  'list-item.re-open-resolved-aria-label': 'Avaa uudelleen',
  /** The button aria label to mark a comment as resolved */
  'list-item.resolved-tooltip-aria-label': 'Merkitse kommentti ratkaistuksi',
  /** The button text to mark a comment as resolved */
  'list-item.resolved-tooltip-content': 'Merkitse ratkaistuksi',

  /** The empty state text for open comments */
  'list-status.empty-state-open-text': 'Tähän asiakirjaan avatut kommentit näytetään tässä.',
  /** The empty state title for open comments */
  'list-status.empty-state-open-title': 'Ei avoimia kommentteja vielä',
  /** The empty state text for resolved comments */
  'list-status.empty-state-resolved-text':
    'Ratkaistut kommentit tässä dokumentissa näytetään täällä.',
  /** The empty state title for resolved comments */
  'list-status.empty-state-resolved-title': 'Ei ratkaistuja kommentteja vielä',
  /** The list status message for error */
  'list-status.error': 'Jotain meni vikaan',
  /** The list status message for loading status */
  'list-status.loading': 'Ladataan kommentteja',

  /** Text shown when no users can be found to mention */
  'mentions.no-users-found': 'Käyttäjiä ei löytynyt',
  /** Label/badge shown for users that are not authorized to see the document, and thus cannot be mentioned */
  'mentions.unauthorized-user': 'Luvaton',
  /** Aria label for the command list for users to mention */
  'mentions.user-list-aria-label': 'Lista mainittavista käyttäjistä',

  /** The comments onboarding popover text */
  'onboarding.body':
    'Voit lisätä kommentteja mihin tahansa dokumentin kenttään. Ne ilmestyvät tänne, ryhmiteltyinä kentän mukaan.',
  /** The comments onboarding dismiss text */
  'onboarding.dismiss': 'Ymmärretty',
  /** The comments onboarding popover header text */
  'onboarding.header': 'Dokumenttikentillä on nyt kommentteja',

  /** Tooltip for the button to add a reaction to a comment */
  'reactions.add-reaction-tooltip': 'Lisää reaktio',
  /** Aria label for the individual reactions you can choose from when reacting to a comment */
  'reactions.react-with-aria-label': 'Reagoi {{reactionName}}',
  /** When a users' name cannot be resolved, fall back to this name */
  'reactions.user-list.unknown-user-fallback-name': 'Tuntematon käyttäjä',
  /**
   * When showing list of users who have reacted, replaces your own name with "you", eg
   * "Donna, you, James, and Tyler reacted with 👍". A different key (`_leading` suffix)
   * is used when you are the first to react, eg "You, Donna and Tyler reacted with 👍".
   * Use `{{name}}` if you want to instead use the current users' actual name.
   */
  'reactions.user-list.you': 'sinä',
  /**
   * When showing list of users who have reacted, replaces your own name with "You", eg
   * "You, Donna, James, and Tyler reacted with 👍". A different key (`_leading` suffix)
   * is used when you are not the first to react, eg "Donna, you, James and Tyler reacted with 👍".
   * Use `{{name}}` if you want to instead use the current users' actual name.
   */
  'reactions.user-list.you_leading': 'Sinä',
  /**
   * The text shown for the tooltip that appears when hovering over the reaction count, eg
   * "Donna, James, and Tyler Reacted with 👍". Three components are available for use:
   * - `<UserList/>` - the list of names of users who have reacted, using the locales list format
   * - `<Text>` - should be wrapped around the text describing the action ("reacted with")
   * - `<ReactionName/>` - the name of the reaction emoji, eg ":heavy_plus_sign:"
   */
  'reactions.users-reacted-with-reaction': '<UserList/> <Text>reagoi</Text> <ReactionName/>',

  /** Status filter: The short title describing filtering on open (non-resolved) comments */
  'status-filter.status-open': 'Avoimet',
  /** Status filter: The full text for describing filtering on open (non-resolved) comments */
  'status-filter.status-open-full': 'Avoimet kommentit',
  /** Status filter: The short title describing filtering on resolved comments */
  'status-filter.status-resolved': 'Ratkaistu',
  /** Status filter: The full text for describing filtering on resolved comments */
  'status-filter.status-resolved-full': 'Ratkaistut kommentit',
  /** Status filter: The full text for describing filtering on resolved comments and is upsell mode */
  'status-filter.status-resolved-full-upsell': 'Päivitä nähdäksesi ratkaistut kommentit',
})
