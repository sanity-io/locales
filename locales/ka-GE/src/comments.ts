import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** The close comments button text */
  'close-pane-button-text': 'გათიშე', // 'Close comments'

  /** The aria label for the close comments button */
  'close-pane-button-text-aria-label': 'გათიშე', // 'Close comments'

  /** When composing a comment, the placeholder text shown when adding a comment to a field with no current comments */
  'compose.add-comment-input-placeholder': 'კომენტარის დამატება', // 'Add comment to <strong>{{field}}</strong>'
  /** When composing a comment, the placeholder text shown when adding a comment to a field with no current comments and the mode is upsell */
  'compose.add-comment-input-placeholder-upsell': 'კომენტარის განახლება', // 'Upgrade to add comment'
  /** When composing a comment, the placeholder text shown when the input is empty */
  'compose.create-comment-placeholder': 'შექმენი ახალი კომენტარი', // 'Create a new comment'
  /** When composing a comment, the aria label for the button to mention a user */
  'compose.mention-user-aria-label': 'მონიშნე მომხმარებელი', // 'Mention user'
  /** When composing a comment, the tooltip text for the button to mention a user */
  'compose.mention-user-tooltip': 'მონიშნე მომხმარებელი', // 'Mention user'
  /** When composing a reply, the placeholder text shown when the input is empty */
  'compose.reply-placeholder': 'ჩაეძიე', // 'Reply'
  /** When composing a reply, the placeholder text shown when the input is empty and the mode is upsell */
  'compose.reply-placeholder-upsell': 'განაახლე ჩაძიება', // 'Upgrade to reply'
  /** When composing a comment, the aria label for the button to send a comment */
  'compose.send-comment-aria-label': 'კომენტარის გაგზავნა', // 'Send comment'
  /** When composing a comment, the tooltip text for the button to send a comment */
  'compose.send-comment-tooltip': 'კომენტარის გაგზავნა', // 'Send comment'

  /** The inspector text when error copying link */
  'copy-link-error-message': 'ვერ მოხერხდა ბმულის დაკოპირება', // 'Unable to copy link to clipboard'

  /** The inspector successfully copied link text */
  'copy-link-success-message': 'ბმული დაკოპირდა', // 'Copied link to clipboard'

  /** The delete dialog body for a comment */
  'delete-comment.body': 'წაშლის შემდგომ, კომენტარს ვეღარ აღადგენ', // 'Once deleted, a comment cannot be recovered.'
  /** The delete dialog confirm button text for a comment */
  'delete-comment.confirm': 'წაშალე კომენტარი', // 'Delete comment'
  /** The delete dialog title for a comment */
  'delete-comment.title': 'გსურს კომენტარის წაშლა?', // 'Delete this comment?'

  /** The delete dialog error */
  'delete-dialog.error':
    'კომენტარის წაშლა ვერ მოხერხდა, გაუთვალისწინებელი მიზეზის გამო, გთხოვთ ცადოთ ხელახლა.', // 'An error occurred while deleting the comment. Please try again.'

  /** The delete dialog body for a thread */
  'delete-thread.body':
    'კომენტარის და მასთან დაკავშირებული საუბრის წაშლის შემდგომ, ვეღარ შეძლებთ აღდგენას.', // 'This comment and its replies will be deleted, and once deleted cannot be recovered.'
  /** The delete dialog conform button text for a thread */
  'delete-thread.confirm': 'წაშალე', // 'Delete thread'
  /** The delete dialog title for a thread */
  'delete-thread.title': 'ნამდვილად გინდა წაიშალოს?', // 'Delete this comment thread?'

  /** The button text for confirming discard */
  'discard.button-confirm': 'გაუქმება', // 'Discard'
  /** The header for discard comment dialog */
  'discard.header': 'გსურს კომენტარის გაუქმება?', // 'Discard comment?'
  /** The text for discard comment dialog */
  'discard.text': 'გსურს კომენტარის გაუქმება?', // 'Do you want to discard the comment?'

  /** Sharing feedback on the comments feature: The link title */
  'feature-feedback.link': 'გაგვიზიარე შენი შეფასება', // 'Share your feedback'
  /** Sharing feedback on the comments feature: The form title  */
  'feature-feedback.title': 'დაგვეხმარე გაუმჯობესებაში', // 'Help improve '

  /** The name of the comments feature, for use in header. Capitalized, eg "Comments". */
  'feature-name': 'კომენტარები', // 'Comments'

  /** Aria label for button above fields to add a comment, when the field currently do not have any comments */
  'field-button.aria-label-add': 'კომენტარის დამატება', // 'Add comment'
  /** Aria label for button above fields that opens the comments for this field, when there are existing comments */
  'field-button.aria-label-open': 'გახსენი კომენტარები', // 'Open comments'
  /** Text shown in popover when hovering the button above fields that opens the comments panel, when there is a single comment present */
  'field-button.content_one': 'კომენტარის ნახვა', // 'View comment'
  /** Text shown in popover when hovering the button above fields that opens the comments panel, when there are more than one comment present */
  'field-button.content_other': 'კომენტარების ნახვა', // 'View comments'
  /** Text shown in popover when hovering the button above fields to add a comment, when the field currently do not have any comments */
  'field-button.title': 'დაამატე კომენტარი', // 'Add comment'

  /** Aria label for the breadcrumb button showing the field path. `{{field}}` is the last (most specific) field. */
  'list-item.breadcrumb-button-go-to-field-aria-label': 'გადადი ველზე', // 'Go to {{field}} field'
  /** The button tooltip content for the add reaction button */
  'list-item.context-menu-add-reaction': 'დაამატე რეაქცია', // 'Add reaction'
  /** The button tooltip aria label for adding a reaction */
  'list-item.context-menu-add-reaction-aria-label': 'დაამატე რეაქცია', // 'Add reaction'
  /** The button tooltip content for the add reaction button and mode is upsell */
  'list-item.context-menu-add-reaction-upsell': 'განაახლე რეაქციის დამატება', // 'Upgrade to add reaction'
  /** The action menu item for copying a comment link */
  'list-item.copy-link': 'დააკოპიტე ბმული კომენტარისთვის', // 'Copy link to comment'
  /** The action menu item for deleting a comment */
  'list-item.delete-comment': 'წაშალე კომენტარი', // 'Delete comment'
  /** The action menu item for editing a comment */
  'list-item.edit-comment': 'გადააკეთე კომენტარი', // 'Edit comment'
  /** The action menu item for editing a comment and the mode is upsell */
  'list-item.edit-comment-upsell': 'გააუმჯობესე კომენტარის გადაკეთება', // 'Upgrade to edit comment'
  /** Aria label for the button that takes you to the field, which wraps a thread/comment */
  'list-item.go-to-field-button.aria-label': 'გადადი ველზე', // 'Go to field'
  /**
   * The text shown below the author and timestamp of a comment including a link back to the context in which the comment was made.
   * Consists of a document title wrapped in a link, and a word or phrase to indicate that the link refers to a location:
   * eg "on Home", "on Coffee Machine | Products", "on Pricing – Sanity"
   */
  'list-item.layout-context': 'on <IntentLink>{{title}}</IntentLink>', // 'on <IntentLink>{{title}}</IntentLink>'
  /** The marker to indicate that a comment has been edited in brackets */
  'list-item.layout-edited': 'გადაკეთებულია', // 'edited'
  /** The error text when sending a comment has failed */
  'list-item.layout-failed-sent': 'გაგზავნა ვერ მოხერხდა', // 'Failed to send.'
  /** The loading message when posting a comment is in progress */
  'list-item.layout-posting': 'ქვეყნდება...', // 'Posting...'
  /** The text for retrying posting a comment */
  'list-item.layout-retry': 'კიდევ ერთხელ', // 'Retry'
  /** The aria label for the comments menu button to open the actions menu */
  'list-item.open-menu-aria-label': 'გახსენი კომენტარების მოქმედებების მენიუ', // 'Open comment actions menu'
  /** The button text to re-open a resolved comment  */
  'list-item.re-open-resolved': 'თავიდან გახსნა', // 'Re-open'
  /** The button aria label to re-open a comment that is resolved */
  'list-item.re-open-resolved-aria-label': 'თავიდან გახსნა', // 'Re-open'
  /** The button aria label to mark a comment as resolved */
  'list-item.resolved-tooltip-aria-label': 'მონიშნე კომენტარი მოგვარებულად.', // 'Mark comment as resolved'
  /** The button text to mark a comment as resolved */
  'list-item.resolved-tooltip-content': 'მონიშნე კომენტარი მოგვარებულად.', // 'Mark as resolved'

  /** The empty state text for open comments */
  'list-status.empty-state-open-text': 'გახსნილი კომენტარები გამოჩნდებიან აქ.', // 'Open comments on this document will be shown here.'
  /** The empty state title for open comments */
  'list-status.empty-state-open-title': 'კომენტარები ჯერ არ გახსნილა', // 'No open comments yet'
  /** The empty state text for resolved comments */
  'list-status.empty-state-resolved-text': 'მოგვარებული კომენტარები გამოჩნდებიან აქ.', // 'Resolved comments on this document will be shown here.'
  /** The empty state title for resolved comments */
  'list-status.empty-state-resolved-title': 'მოგვარებული კომენტარები ჯერ არ არის.', // 'No resolved comments yet'
  /** The list status message for error */
  'list-status.error': 'რაღაც ცუდი ამბავია, არ გამოვიდა.', // 'Something went wrong'
  /** The list status message for loading status */
  'list-status.loading': 'დაელოდე კომენტარებს', // 'Loading comments'

  /** Text shown when no users can be found to mention */
  'mentions.no-users-found': 'მომხმარებლები ვერ ვიპოვნე.', // 'No users found'
  /** Label/badge shown for users that are not authorized to see the document, and thus cannot be mentioned */
  'mentions.unauthorized-user': 'გაუწევრიანებელი', // 'Unauthorized'
  /** Aria label for the command list for users to mention */
  'mentions.user-list-aria-label': 'მონიშნული მომხმარებლების სია', // 'List of users to mention'

  /** The comments onboarding popover text */
  'onboarding.body':
    'შენ შეგიძლია დაამატო კომენტარები ნებისმიერ ველს დოკუმენტში. ისინი ველების მიხედვით დაჯგუფებულნი გამოჩნდებიან აქ.', // 'You can add comments to any field in a document. They\'ll show up here, grouped by field.'
  /** The comments onboarding dismiss text */
  'onboarding.dismiss': 'გასაგებია', // 'Got it'
  /** The comments onboarding popover header text */
  'onboarding.header': 'დოკუმენტის ველებს, ახლა აქვთ კომენტარები.', // 'Document fields now have comments'

  /** Tooltip for the button to add a reaction to a comment */
  'reactions.add-reaction-tooltip': 'დაამატე რეაქცია', // 'Add reaction'
  /** Aria label for the individual reactions you can choose from when reacting to a comment */
  'reactions.react-with-aria-label': 'რეაქცია სახელთან ერთად', // 'React with {{reactionName}}'
  /** When a users' name cannot be resolved, fall back to this name */
  'reactions.user-list.unknown-user-fallback-name': 'უცნობი მომხმარებელი', // 'Unknown user'
  /**
   * When showing list of users who have reacted, replaces your own name with "you", eg
   * "Donna, you, James, and Tyler reacted with 👍". A different key (`_leading` suffix)
   * is used when you are the first to react, eg "You, Donna and Tyler reacted with 👍".
   * Use `{{name}}` if you want to instead use the current users' actual name.
   */
  'reactions.user-list.you': 'შენ', // 'you'
  /**
   * When showing list of users who have reacted, replaces your own name with "You", eg
   * "You, Donna, James, and Tyler reacted with 👍". A different key (`_leading` suffix)
   * is used when you are not the first to react, eg "Donna, you, James and Tyler reacted with 👍".
   * Use `{{name}}` if you want to instead use the current users' actual name.
   */
  'reactions.user-list.you_leading': 'შენ', // 'You'
  /**
   * The text shown for the tooltip that appears when hovering over the reaction count, eg
   * "Donna, James, and Tyler Reacted with 👍". Three components are available for use:
   * - `<UserList/>` - the list of names of users who have reacted, using the locales list format
   * - `<Text>` - should be wrapped around the text describing the action ("reacted with")
   * - `<ReactionName/>` - the name of the reaction emoji, eg ":heavy_plus_sign:"
   */
  'reactions.users-reacted-with-reaction': '<UserList/> <Text>reacted with</Text> <ReactionName/>', // '<UserList/> <Text>reacted with</Text> <ReactionName/>'

  /** Status filter: The short title describing filtering on open (non-resolved) comments */
  'status-filter.status-open': 'გახსენი', // 'Open'
  /** Status filter: The full text for describing filtering on open (non-resolved) comments */
  'status-filter.status-open-full': 'გახსენი კომენტარები', // 'Open comments'
  /** Status filter: The short title describing filtering on resolved comments */
  'status-filter.status-resolved': 'მოგვარებული', // 'Resolved'
  /** Status filter: The full text for describing filtering on resolved comments */
  'status-filter.status-resolved-full': 'მოგვარებული კომენტარები.', // 'Resolved comments'
  /** Status filter: The full text for describing filtering on resolved comments and is upsell mode */
  'status-filter.status-resolved-full-upsell': 'განაახლე რომ ნახო მოგვარებული კომენტარები', // 'Upgrade to see resolved comments'
})
