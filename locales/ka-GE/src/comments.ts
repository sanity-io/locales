import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** The close comments button text */
  'close-pane-button-text': 'კომენტარების დახურვა',

  /** The aria label for the close comments button */
  'close-pane-button-text-aria-label': 'კომენტარების დახურვა',

  /** When composing a comment, the placeholder text shown when adding a comment to a field with no current comments */
  'compose.add-comment-input-placeholder': '<strong>{{field}}</strong>-ზე კომენტარის დამატება',
  /** When composing a comment, the placeholder text shown when adding a comment to a field with no current comments and the mode is upsell */
  'compose.add-comment-input-placeholder-upsell': 'განახლება კომენტარის დასამატებლად',
  /** When composing a comment, the placeholder text shown when the input is empty */
  'compose.create-comment-placeholder': 'ახალი კომენტარის შექმნა',
  /** When composing a comment, the aria label for the button to mention a user */
  'compose.mention-user-aria-label': 'მომხმარებლის მიმართვა',
  /** When composing a comment, the tooltip text for the button to mention a user */
  'compose.mention-user-tooltip': 'მომხმარებლის მიმართვა',
  /** When composing a reply, the placeholder text shown when the input is empty */
  'compose.reply-placeholder': 'პასუხი',
  /** When composing a reply, the placeholder text shown when the input is empty and the mode is upsell */
  'compose.reply-placeholder-upsell': 'განახლება პასუხის დასაწერად',
  /** When composing a comment, the aria label for the button to send a comment */
  'compose.send-comment-aria-label': 'კომენტარის გაგზავნა',
  /** When composing a comment, the tooltip text for the button to send a comment */
  'compose.send-comment-tooltip': 'კომენტარის გაგზავნა',

  /** The inspector text when error copying link */
  'copy-link-error-message': 'ბმულის ბუფერში ასლის შენახვა ვერ მოხერხდა',

  /** The inspector successfully copied link text */
  'copy-link-success-message': 'ბმული დაკოპებულია',

  /** The delete dialog body for a comment */
  'delete-comment.body': 'წაშლილი კომენტარი ვერ აღდგება.',
  /** The delete dialog confirm button text for a comment */
  'delete-comment.confirm': 'კომენტარის წაშლა',
  /** The delete dialog title for a comment */
  'delete-comment.title': 'ნამდვილად გსურთ კომენტარის წაშლა?',

  /** The delete dialog error */
  'delete-dialog.error': 'კომენტარის წაშლისას შეცდომა მოხდა. გთხოვთ, სცადეთ თავიდან.',

  /** The delete dialog body for a thread */
  'delete-thread.body': 'ეს კომენტარი და მისი პასუხები წაიშლება, და წაშლილი ვერ აღდგება.',
  /** The delete dialog conform button text for a thread */
  'delete-thread.confirm': 'თემის წაშლა',
  /** The delete dialog title for a thread */
  'delete-thread.title': 'ნამდვილად გსურთ კომენტარის წაშლა?',

  /** The button text for confirming discard */
  'discard.button-confirm': 'გაუქმება',
  /** The header for discard comment dialog */
  'discard.header': 'კომენტარის გაუქმება?',
  /** The text for discard comment dialog */
  'discard.text': 'გსურთ კომენტარის გაუქმება?',

  /** Sharing feedback on the comments feature: The link title */
  'feature-feedback.link': 'გაგვიზიარეთ თქვენი შეფასება',
  /** Sharing feedback on the comments feature: The form title  */
  'feature-feedback.title': 'დაეხმარეთ გაუმჯობესებაში ',

  /** The name of the comments feature, for use in header. Capitalized, eg "Comments". */
  'feature-name': 'კომენტარები',

  /** Aria label for button above fields to add a comment, when the field currently do not have any comments */
  'field-button.aria-label-add': 'კომენტარის დამატება',
  /** Aria label for button above fields that opens the comments for this field, when there are existing comments */
  'field-button.aria-label-open': 'კომენტარების გახსნა',
  /** Text shown in popover when hovering the button above fields that opens the comments panel, when there is a single comment present */
  'field-button.content_one': 'კომენტარის ნახვა',
  /** Text shown in popover when hovering the button above fields that opens the comments panel, when there are more than one comment present */
  'field-button.content_other': 'კომენტარების ნახვა',
  /** Text shown in popover when hovering the button above fields to add a comment, when the field currently do not have any comments */
  'field-button.title': 'კომენტარის დამატება',

  /* The text shown in the inline comment button when the button is disabled due to overlap */
  'inline-add-comment-button.disabled-overlap-title': undefined, // 'Comments cannot overlap'
  /** The text shown in the inline comment button */
  'inline-add-comment-button.title': undefined, // 'Add comment'

  /** Aria label for the breadcrumb button showing the field path. `{{field}}` is the last (most specific) field. */
  'list-item.breadcrumb-button-go-to-field-aria-label': '{{field}} ველზე გადასვლა',
  /** The button tooltip content for the add reaction button */
  'list-item.context-menu-add-reaction': 'რეაქციის დამატება',
  /** The button tooltip aria label for adding a reaction */
  'list-item.context-menu-add-reaction-aria-label': 'რეაქციის დამატება',
  /** The button tooltip content for the add reaction button and mode is upsell */
  'list-item.context-menu-add-reaction-upsell': 'განახლება რეაქციის დამატებისთვის',
  /** The action menu item for copying a comment link */
  'list-item.copy-link': 'კომენტარის ბმულის კოპირება',
  /** The action menu item for deleting a comment */
  'list-item.delete-comment': 'კომენტარის წაშლა',
  /** The action menu item for editing a comment */
  'list-item.edit-comment': 'კომენტარის რედაქტირება',
  /** The action menu item for editing a comment and the mode is upsell */
  'list-item.edit-comment-upsell': 'განახლება კომენტარის რედაქტირებისთვის',
  /** Aria label for the button that takes you to the field, which wraps a thread/comment */
  'list-item.go-to-field-button.aria-label': 'ველზე გადასვლა',
  /**
   * The text shown below the author and timestamp of a comment including a link back to the context in which the comment was made.
   * Consists of a document title wrapped in a link, and a word or phrase to indicate that the link refers to a location:
   * eg "on Home", "on Coffee Machine | Products", "on Pricing – Sanity"
   */
  'list-item.layout-context': '<IntentLink>{{title}}</IntentLink>-ზე',
  /** The marker to indicate that a comment has been edited in brackets */
  'list-item.layout-edited': 'რედაქტირებული',
  /** The error text when sending a comment has failed */
  'list-item.layout-failed-sent': 'გაგზავნა ვერ მოხერხდა.',
  /** The loading message when posting a comment is in progress */
  'list-item.layout-posting': 'გაგზავნა...',
  /** The text for retrying posting a comment */
  'list-item.layout-retry': 'ხელახლა ცდა',
  /** The text shown when the value a comment references has been deleted */
  'list-item.missing-referenced-value-tooltip-content': undefined, // 'The commented text has been deleted'
  /** The aria label for the comments menu button to open the actions menu */
  'list-item.open-menu-aria-label': 'კომენტარის მენიუს გახსნა',
  /** The button text to re-open a resolved comment  */
  'list-item.re-open-resolved': 'ხელახლა გახსნა',
  /** The button aria label to re-open a comment that is resolved */
  'list-item.re-open-resolved-aria-label': 'ხელახლა გახსნა',
  /** The button aria label to mark a comment as resolved */
  'list-item.resolved-tooltip-aria-label': 'კომენტარის გადაწყვეტილად მიჩნევა',
  /** The button text to mark a comment as resolved */
  'list-item.resolved-tooltip-content': 'გადაწყვეტილად მიჩნევა',

  /** The empty state text for open comments */
  'list-status.empty-state-open-text': 'ღია კომენტარები ამ დოკუმენტზე აქ იქნება გამოჩენილი.',
  /** The empty state title for open comments */
  'list-status.empty-state-open-title': 'ჯერ არ არის ღია კომენტარები',
  /** The empty state text for resolved comments */
  'list-status.empty-state-resolved-text':
    'გადაწყდებული კომენტარები ამ დოკუმენტზე აქ იქნება გამოჩენილი.',
  /** The empty state title for resolved comments */
  'list-status.empty-state-resolved-title': 'ჯერ არ არის გაცხრილული კომენტარები',
  /** The list status message for error */
  'list-status.error': 'რაღაც შეცდომა მოხდა',
  /** The list status message for loading status */
  'list-status.loading': 'კომენტარების ჩატვირთვა',

  /** Text shown when no users can be found to mention */
  'mentions.no-users-found': 'ვერ მოიძებნა მომხმარებლები',
  /** Label/badge shown for users that are not authorized to see the document, and thus cannot be mentioned */
  'mentions.unauthorized-user': 'უფლებამოსილი',
  /** Aria label for the command list for users to mention */
  'mentions.user-list-aria-label': 'მომხმარებლების სია კომენტარის მიმართვად',

  /** The comments onboarding popover text */
  'onboarding.body':
    'შეგიძლიათ დოკუმენტის ნებისმიერ ველზე დაამატოთ კომენტარები. ისინი აქ გამოჩნდებიან, ველების ჯგუფებად.',
  /** The comments onboarding dismiss text */
  'onboarding.dismiss': 'გასაგებია',
  /** The comments onboarding popover header text */
  'onboarding.header': 'დოკუმენტის ველებს ახლა აქვთ კომენტარები',

  /** Tooltip for the button to add a reaction to a comment */
  'reactions.add-reaction-tooltip': 'რეაქციის დამატება',
  /** Aria label for the individual reactions you can choose from when reacting to a comment */
  'reactions.react-with-aria-label': 'რეაგირება {{reactionName}}-ით',
  /** When a users' name cannot be resolved, fall back to this name */
  'reactions.user-list.unknown-user-fallback-name': 'უცნობი მომხმარებელი',
  /**
   * When showing list of users who have reacted, replaces your own name with "you", eg
   * "Donna, you, James, and Tyler reacted with 👍". A different key (`_leading` suffix)
   * is used when you are the first to react, eg "You, Donna and Tyler reacted with 👍".
   * Use `{{name}}` if you want to instead use the current users' actual name.
   */
  'reactions.user-list.you': 'შენ',
  /**
   * When showing list of users who have reacted, replaces your own name with "You", eg
   * "You, Donna, James, and Tyler reacted with 👍". A different key (`_leading` suffix)
   * is used when you are not the first to react, eg "Donna, you, James and Tyler reacted with 👍".
   * Use `{{name}}` if you want to instead use the current users' actual name.
   */
  'reactions.user-list.you_leading': 'შენ',
  /**
   * The text shown for the tooltip that appears when hovering over the reaction count, eg
   * "Donna, James, and Tyler Reacted with 👍". Three components are available for use:
   * - `<UserList/>` - the list of names of users who have reacted, using the locales list format
   * - `<Text>` - should be wrapped around the text describing the action ("reacted with")
   * - `<ReactionName/>` - the name of the reaction emoji, eg ":heavy_plus_sign:"
   */
  'reactions.users-reacted-with-reaction': '<UserList/> <Text>რეაგირებულია</Text> <ReactionName/>',

  /** Status filter: The short title describing filtering on open (non-resolved) comments */
  'status-filter.status-open': 'გახსნა',
  /** Status filter: The full text for describing filtering on open (non-resolved) comments */
  'status-filter.status-open-full': 'ღია კომენტარები',
  /** Status filter: The short title describing filtering on resolved comments */
  'status-filter.status-resolved': 'გაცხრილული',
  /** Status filter: The full text for describing filtering on resolved comments */
  'status-filter.status-resolved-full': 'გაცხრილული კომენტარები',
  /** Status filter: The full text for describing filtering on resolved comments and is upsell mode */
  'status-filter.status-resolved-full-upsell': 'განახლება გადაწყდებული კომენტარების სანახავად',
})
