import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** The close comments button text */
  'close-pane-button-text': 'Kommentare schließen',

  /** The aria label for the close comments button */
  'close-pane-button-text-aria-label': 'Kommentare schließen',

  /** When composing a comment, the placeholder text shown when adding a comment to a field with no current comments */
  'compose.add-comment-input-placeholder': 'Kommentar zu <strong>{{field}}</strong> hinzufügen',
  /** When composing a comment, the placeholder text shown when adding a comment to a field with no current comments and the mode is upsell */
  'compose.add-comment-input-placeholder-upsell': 'Upgrade, um einen Kommentar hinzuzufügen',
  /** When composing a comment, the placeholder text shown when the input is empty */
  'compose.create-comment-placeholder': 'Einen neuen Kommentar erstellen',
  /** When composing a comment, the aria label for the button to mention a user */
  'compose.mention-user-aria-label': 'Benutzer erwähnen',
  /** When composing a comment, the tooltip text for the button to mention a user */
  'compose.mention-user-tooltip': 'Benutzer erwähnen',
  /** When composing a reply, the placeholder text shown when the input is empty */
  'compose.reply-placeholder': 'Antworten',
  /** When composing a reply, the placeholder text shown when the input is empty and the mode is upsell */
  'compose.reply-placeholder-upsell': 'Upgrade, um zu antworten',
  /** When composing a comment, the aria label for the button to send a comment */
  'compose.send-comment-aria-label': 'Kommentar senden',
  /** When composing a comment, the tooltip text for the button to send a comment */
  'compose.send-comment-tooltip': 'Kommentar senden',

  /** The inspector text when error copying link */
  'copy-link-error-message': 'Link konnte nicht in die Zwischenablage kopiert werden',

  /** The inspector successfully copied link text */
  'copy-link-success-message': 'Link in die Zwischenablage kopiert',

  /** The delete dialog body for a comment */
  'delete-comment.body': 'Einmal gelöscht, kann ein Kommentar nicht wiederhergestellt werden.',
  /** The delete dialog confirm button text for a comment */
  'delete-comment.confirm': 'Kommentar löschen',
  /** The delete dialog title for a comment */
  'delete-comment.title': 'Diesen Kommentar löschen?',

  /** The delete dialog error */
  'delete-dialog.error':
    'Beim Löschen des Kommentars ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut.',

  /** The delete dialog body for a thread */
  'delete-thread.body':
    'Dieser Kommentar und seine Antworten werden gelöscht und können nach dem Löschen nicht wiederhergestellt werden.',
  /** The delete dialog conform button text for a thread */
  'delete-thread.confirm': 'Thread löschen',
  /** The delete dialog title for a thread */
  'delete-thread.title': 'Diesen Kommentar-Thread löschen?',

  /** The button text for confirming discard */
  'discard.button-confirm': 'Verwerfen',
  /** The header for discard comment dialog */
  'discard.header': 'Kommentar verwerfen?',
  /** The text for discard comment dialog */
  'discard.text': 'Möchten Sie den Kommentar verwerfen?',

  /** Sharing feedback on the comments feature: The link title */
  'feature-feedback.link': 'Teilen Sie Ihr Feedback',
  /** Sharing feedback on the comments feature: The form title  */
  'feature-feedback.title': 'Helfen Sie mit, zu verbessern ',

  /** The name of the comments feature, for use in header. Capitalized, eg "Comments". */
  'feature-name': 'Kommentare',

  /** Aria label for button above fields to add a comment, when the field currently do not have any comments */
  'field-button.aria-label-add': 'Kommentar hinzufügen',
  /** Aria label for button above fields that opens the comments for this field, when there are existing comments */
  'field-button.aria-label-open': 'Kommentare öffnen',
  /** Text shown in popover when hovering the button above fields that opens the comments panel, when there is a single comment present */
  'field-button.content_one': 'Kommentar ansehen',
  /** Text shown in popover when hovering the button above fields that opens the comments panel, when there are more than one comment present */
  'field-button.content_other': 'Kommentare ansehen',
  /** Text shown in popover when hovering the button above fields to add a comment, when the field currently do not have any comments */
  'field-button.title': 'Kommentar hinzufügen',

  /** Aria label for the breadcrumb button showing the field path. `{{field}}` is the last (most specific) field. */
  'list-item.breadcrumb-button-go-to-field-aria-label': 'Zum {{field}} Feld gehen',
  /** The button tooltip content for the add reaction button */
  'list-item.context-menu-add-reaction': 'Reaktion hinzufügen',
  /** The button tooltip aria label for adding a reaction */
  'list-item.context-menu-add-reaction-aria-label': 'Reaktion hinzufügen',
  /** The button tooltip content for the add reaction button and mode is upsell */
  'list-item.context-menu-add-reaction-upsell': 'Upgrade um Reaktion hinzuzufügen',
  /** The action menu item for copying a comment link */
  'list-item.copy-link': 'Link zum Kommentar kopieren',
  /** The action menu item for deleting a comment */
  'list-item.delete-comment': 'Kommentar löschen',
  /** The action menu item for editing a comment */
  'list-item.edit-comment': 'Kommentar bearbeiten',
  /** The action menu item for editing a comment and the mode is upsell */
  'list-item.edit-comment-upsell': 'Upgrade um Kommentar zu bearbeiten',
  /** Aria label for the button that takes you to the field, which wraps a thread/comment */
  'list-item.go-to-field-button.aria-label': 'Zum Feld gehen',
  /**
   * The text shown below the author and timestamp of a comment including a link back to the context in which the comment was made.
   * Consists of a document title wrapped in a link, and a word or phrase to indicate that the link refers to a location:
   * eg "on Home", "on Coffee Machine | Products", "on Pricing – Sanity"
   */
  'list-item.layout-context': 'auf <IntentLink>{{title}}</IntentLink>',
  /** The marker to indicate that a comment has been edited in brackets */
  'list-item.layout-edited': 'bearbeitet',
  /** The error text when sending a comment has failed */
  'list-item.layout-failed-sent': 'Senden fehlgeschlagen.',
  /** The loading message when posting a comment is in progress */
  'list-item.layout-posting': 'Wird gepostet...',
  /** The text for retrying posting a comment */
  'list-item.layout-retry': 'Erneut versuchen',
  /** The aria label for the comments menu button to open the actions menu */
  'list-item.open-menu-aria-label': 'Kommentar-Aktionsmenü öffnen',
  /** The button text to re-open a resolved comment  */
  'list-item.re-open-resolved': 'Wieder öffnen',
  /** The button aria label to re-open a comment that is resolved */
  'list-item.re-open-resolved-aria-label': 'Wieder öffnen',
  /** The button aria label to mark a comment as resolved */
  'list-item.resolved-tooltip-aria-label': 'Kommentar als gelöst markieren',
  /** The button text to mark a comment as resolved */
  'list-item.resolved-tooltip-content': 'Als gelöst markieren',

  /** The empty state text for open comments */
  'list-status.empty-state-open-text':
    'Offene Kommentare zu diesem Dokument werden hier angezeigt.',
  /** The empty state title for open comments */
  'list-status.empty-state-open-title': 'Noch keine offenen Kommentare',
  /** The empty state text for resolved comments */
  'list-status.empty-state-resolved-text':
    'Gelöste Kommentare zu diesem Dokument werden hier angezeigt.',
  /** The empty state title for resolved comments */
  'list-status.empty-state-resolved-title': 'Noch keine gelösten Kommentare',
  /** The list status message for error */
  'list-status.error': 'Etwas ist schief gelaufen',
  /** The list status message for loading status */
  'list-status.loading': 'Kommentare werden geladen',

  /** Text shown when no users can be found to mention */
  'mentions.no-users-found': 'Keine Benutzer gefunden',
  /** Label/badge shown for users that are not authorized to see the document, and thus cannot be mentioned */
  'mentions.unauthorized-user': 'Unautorisiert',
  /** Aria label for the command list for users to mention */
  'mentions.user-list-aria-label': 'Liste der zu erwähnenden Benutzer',

  /** The comments onboarding popover text */
  'onboarding.body':
    'Sie können jedem Feld in einem Dokument Kommentare hinzufügen. Sie werden hier gruppiert nach Feld angezeigt.',
  /** The comments onboarding dismiss text */
  'onboarding.dismiss': 'Verstanden',
  /** The comments onboarding popover header text */
  'onboarding.header': 'Dokumentfelder haben jetzt Kommentare',

  /** Tooltip for the button to add a reaction to a comment */
  'reactions.add-reaction-tooltip': 'Reaktion hinzufügen',
  /** Aria label for the individual reactions you can choose from when reacting to a comment */
  'reactions.react-with-aria-label': 'Reagieren mit {{reactionName}}',
  /** When a users' name cannot be resolved, fall back to this name */
  'reactions.user-list.unknown-user-fallback-name': 'Unbekannter Benutzer',
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
  'reactions.users-reacted-with-reaction':
    '<UserList/> <Text>haben reagiert mit</Text> <ReactionName/>',

  /** Status filter: The short title describing filtering on open (non-resolved) comments */
  'status-filter.status-open': 'Offen',
  /** Status filter: The full text for describing filtering on open (non-resolved) comments */
  'status-filter.status-open-full': 'Offene Kommentare',
  /** Status filter: The short title describing filtering on resolved comments */
  'status-filter.status-resolved': 'Gelöst',
  /** Status filter: The full text for describing filtering on resolved comments */
  'status-filter.status-resolved-full': 'Gelöste Kommentare',
  /** Status filter: The full text for describing filtering on resolved comments and is upsell mode */
  'status-filter.status-resolved-full-upsell': 'Upgrade, um gelöste Kommentare zu sehen',
})
