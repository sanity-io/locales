import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** The close comments button text */
  'close-pane-button-text': '關閉留言',

  /** The aria label for the close comments button */
  'close-pane-button-text-aria-label': '關閉留言',

  /** When composing a comment, the placeholder text shown when adding a comment to a field with no current comments */
  'compose.add-comment-input-placeholder': '新增留言到 <strong>{{field}}</strong>',
  /** When composing a comment, the placeholder text shown when adding a comment to a field with no current comments and the mode is upsell */
  'compose.add-comment-input-placeholder-upsell': '需升級來新增留言',
  /** When composing a comment, the placeholder text shown when the input is empty */
  'compose.create-comment-placeholder': '留言',
  /** When composing a comment, the aria label for the button to mention a user */
  'compose.mention-user-aria-label': '標註用戶',
  /** When composing a comment, the tooltip text for the button to mention a user */
  'compose.mention-user-tooltip': '標註用戶',
  /** When composing a reply, the placeholder text shown when the input is empty */
  'compose.reply-placeholder': '回覆',
  /** When composing a reply, the placeholder text shown when the input is empty and the mode is upsell */
  'compose.reply-placeholder-upsell': '需升級來回覆',
  /** When composing a comment, the aria label for the button to send a comment */
  'compose.send-comment-aria-label': '送出留言',
  /** When composing a comment, the tooltip text for the button to send a comment */
  'compose.send-comment-tooltip': '送出留言',

  /** The inspector text when error copying link */
  'copy-link-error-message': '無法複製連結到剪貼簿',

  /** The delete dialog body for a comment */
  'delete-comment.body': '一旦刪除，留言將無法恢復。',
  /** The delete dialog confirm button text for a comment */
  'delete-comment.confirm': '刪除留言',
  /** The delete dialog title for a comment */
  'delete-comment.title': '刪除這條留言？',

  /** The delete dialog error */
  'delete-dialog.error': '刪除留言時發生錯誤。請再試一次。',

  /** The delete dialog body for a thread */
  'delete-thread.body': '這條留言及其回覆將被刪除，一旦刪除將無法恢復。',
  /** The delete dialog conform button text for a thread */
  'delete-thread.confirm': '刪除留言串',
  /** The delete dialog title for a thread */
  'delete-thread.title': '刪除這個留言串？',

  /** The button text for confirming discard */
  'discard.button-confirm': '放棄',
  /** The header for discard comment dialog */
  'discard.header': '放棄留言？',
  /** The text for discard comment dialog */
  'discard.text': '你想放棄這條留言嗎？',

  /** Sharing feedback on the comments feature: The link title */
  'feature-feedback.link': '分享你的回饋',
  /** Sharing feedback on the comments feature: The form title  */
  'feature-feedback.title': '協助改進 ',

  /** The name of the comments feature, for use in header. Capitalized, eg "Comments". */
  'feature-name': '留言',

  /** Aria label for button above fields to add a comment, when the field currently do not have any comments */
  'field-button.aria-label-add': '新增留言',
  /** Aria label for button above fields that opens the comments for this field, when there are existing comments */
  'field-button.aria-label-open': '打開留言',
  /** Text shown in popover when hovering the button above fields that opens the comments panel, when there are more than one comment present */
  'field-button.content_other': '查看留言',
  /** Text shown in popover when hovering the button above fields to add a comment, when the field currently do not have any comments */
  'field-button.title': '新增留言',

  /* The text shown in the inline comment button when the button is disabled due to overlap */
  'inline-add-comment-button.disabled-overlap-title': '評論不能重疊',
  /** The text shown in the inline comment button */
  'inline-add-comment-button.title': '添加評論',

  /** The title of the error card shown in the comments inspector */
  'inspector-error.title': undefined, // 'Something went wrong while loading comments'

  /** Aria label for the breadcrumb button showing the field path. `{{field}}` is the last (most specific) field. */
  'list-item.breadcrumb-button-go-to-field-aria-label': '前往{{field}}字段',
  /** The button tooltip content for the add reaction button */
  'list-item.context-menu-add-reaction': '新增反應',
  /** The button tooltip aria label for adding a reaction */
  'list-item.context-menu-add-reaction-aria-label': '新增反應',
  /** The button tooltip content for the add reaction button and mode is upsell */
  'list-item.context-menu-add-reaction-upsell': '升級以新增反應',
  /** The action menu item for copying a comment link */
  'list-item.copy-link': '複製留言連結',
  /** The action menu item for deleting a comment */
  'list-item.delete-comment': '刪除留言',
  /** The action menu item for editing a comment */
  'list-item.edit-comment': '編輯留言',
  /** The action menu item for editing a comment and the mode is upsell */
  'list-item.edit-comment-upsell': '升級以編輯留言',
  /** Aria label for the button that takes you to the field, which wraps a thread/comment */
  'list-item.go-to-field-button.aria-label': '前往字段',
  /**
   * The text shown below the author and timestamp of a comment including a link back to the context in which the comment was made.
   * Consists of a document title wrapped in a link, and a word or phrase to indicate that the link refers to a location:
   * eg "on Home", "on Coffee Machine | Products", "on Pricing – Sanity"
   */
  'list-item.layout-context': '在 <IntentLink>{{title}}</IntentLink>',
  /** The marker to indicate that a comment has been edited in brackets */
  'list-item.layout-edited': '已編輯',
  /** The error text when sending a comment has failed */
  'list-item.layout-failed-sent': '發送失敗。',
  /** The loading message when posting a comment is in progress */
  'list-item.layout-posting': '正在發布...',
  /** The text for retrying posting a comment */
  'list-item.layout-retry': '重試',
  /** The text shown when the value a comment references has been deleted */
  'list-item.missing-referenced-value-tooltip-content': '已刪除評論的文本',
  /** The aria label for the comments menu button to open the actions menu */
  'list-item.open-menu-aria-label': '打開留言操作選單',
  /** The button text to re-open a resolved comment  */
  'list-item.re-open-resolved': '重新打開',
  /** The button aria label to re-open a comment that is resolved */
  'list-item.re-open-resolved-aria-label': '重新打開',
  /** The button aria label to mark a comment as resolved */
  'list-item.resolved-tooltip-aria-label': '標記留言為已解決',
  /** The button text to mark a comment as resolved */
  'list-item.resolved-tooltip-content': '標記為已解決',

  /** The empty state text for open comments */
  'list-status.empty-state-open-text': '文件上的公開留言將在這裡顯示。',
  /** The empty state title for open comments */
  'list-status.empty-state-open-title': '沒有未解決的留言',
  /** The empty state text for resolved comments */
  'list-status.empty-state-resolved-text': '這份文件的已解決留言將會顯示在這裡。',
  /** The empty state title for resolved comments */
  'list-status.empty-state-resolved-title': '還沒有已解決的留言',
  /** The list status message for error */
  'list-status.error': '出了些問題',
  /** The list status message for loading status */
  'list-status.loading': '正在載入留言',

  /** Text shown when no users can be found to mention */
  'mentions.no-users-found': '找不到用戶',
  /** Label/badge shown for users that are not authorized to see the document, and thus cannot be mentioned */
  'mentions.unauthorized-user': '未授權',
  /** Aria label for the command list for users to mention */
  'mentions.user-list-aria-label': '要標註的用戶列表',

  /** The comments onboarding popover text */
  'onboarding.body': '可以在文件的任何欄位中新增留言。它們將在這裡顯示，按欄位分組。',
  /** The comments onboarding dismiss text */
  'onboarding.dismiss': '知道了',
  /** The comments onboarding popover header text */
  'onboarding.header': '文件欄位現在有了留言功能',

  /** Tooltip for the button to add a reaction to a comment */
  'reactions.add-reaction-tooltip': '新增反應',
  /** Aria label for the individual reactions you can choose from when reacting to a comment */
  'reactions.react-with-aria-label': '用{{reactionName}}來反應',
  /** When a users' name cannot be resolved, fall back to this name */
  'reactions.user-list.unknown-user-fallback-name': '未知用戶',
  /**
   * When showing list of users who have reacted, replaces your own name with "you", eg
   * "Donna, you, James, and Tyler reacted with 👍". A different key (`_leading` suffix)
   * is used when you are the first to react, eg "You, Donna and Tyler reacted with 👍".
   * Use `{{name}}` if you want to instead use the current users' actual name.
   */
  'reactions.user-list.you': '你',
  /**
   * When showing list of users who have reacted, replaces your own name with "You", eg
   * "You, Donna, James, and Tyler reacted with 👍". A different key (`_leading` suffix)
   * is used when you are not the first to react, eg "Donna, you, James and Tyler reacted with 👍".
   * Use `{{name}}` if you want to instead use the current users' actual name.
   */
  'reactions.user-list.you_leading': '你',
  /**
   * The text shown for the tooltip that appears when hovering over the reaction count, eg
   * "Donna, James, and Tyler Reacted with 👍". Three components are available for use:
   * - `<UserList/>` - the list of names of users who have reacted, using the locales list format
   * - `<Text>` - should be wrapped around the text describing the action ("reacted with")
   * - `<ReactionName/>` - the name of the reaction emoji, eg ":heavy_plus_sign:"
   */
  'reactions.users-reacted-with-reaction': '<UserList/> <Text>已用</Text> <ReactionName/>來反應',

  /** Status filter: The short title describing filtering on open (non-resolved) comments */
  'status-filter.status-open': '未解決',
  /** Status filter: The full text for describing filtering on open (non-resolved) comments */
  'status-filter.status-open-full': '未解決的留言',
  /** Status filter: The short title describing filtering on resolved comments */
  'status-filter.status-resolved': '已解決',
  /** Status filter: The full text for describing filtering on resolved comments */
  'status-filter.status-resolved-full': '已解決的留言',
  /** Status filter: The full text for describing filtering on resolved comments and is upsell mode */
  'status-filter.status-resolved-full-upsell': '升級後才可以查看已解決的留言',
})
