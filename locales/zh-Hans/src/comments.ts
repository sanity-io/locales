import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** The close comments button text */
  'close-pane-button-text': '关闭评论',

  /** The aria label for the close comments button */
  'close-pane-button-text-aria-label': '关闭评论',

  /** When composing a comment, the placeholder text shown when adding a comment to a field with no current comments */
  'compose.add-comment-input-placeholder': '添加评论到 <strong>{{field}}</strong>',
  /** When composing a comment, the placeholder text shown when adding a comment to a field with no current comments and the mode is upsell */
  'compose.add-comment-input-placeholder-upsell': '升级以添加评论',
  /** When composing a comment, the placeholder text shown when the input is empty */
  'compose.create-comment-placeholder': '创建新评论',
  /** When composing a comment, the aria label for the button to mention a user */
  'compose.mention-user-aria-label': '提及用户',
  /** When composing a comment, the tooltip text for the button to mention a user */
  'compose.mention-user-tooltip': '提及用户',
  /** When composing a reply, the placeholder text shown when the input is empty */
  'compose.reply-placeholder': '回复',
  /** When composing a reply, the placeholder text shown when the input is empty and the mode is upsell */
  'compose.reply-placeholder-upsell': '升级以回复',
  /** When composing a comment, the aria label for the button to send a comment */
  'compose.send-comment-aria-label': '发送评论',
  /** When composing a comment, the tooltip text for the button to send a comment */
  'compose.send-comment-tooltip': '发送评论',

  /** The inspector text when error copying link */
  'copy-link-error-message': '无法复制链接到剪贴板',

  /** The delete dialog body for a comment */
  'delete-comment.body': '一旦删除，评论将无法恢复。',
  /** The delete dialog confirm button text for a comment */
  'delete-comment.confirm': '删除评论',
  /** The delete dialog title for a comment */
  'delete-comment.title': '删除这条评论？',

  /** The delete dialog error */
  'delete-dialog.error': '删除评论时发生错误。请再试一次。',

  /** The delete dialog body for a thread */
  'delete-thread.body': '此评论及其回复将被删除，一旦删除将无法恢复。',
  /** The delete dialog conform button text for a thread */
  'delete-thread.confirm': '删除线索',
  /** The delete dialog title for a thread */
  'delete-thread.title': '删除这个评论线索？',

  /** The button text for confirming discard */
  'discard.button-confirm': '放弃',
  /** The header for discard comment dialog */
  'discard.header': '放弃评论？',
  /** The text for discard comment dialog */
  'discard.text': '你想放弃这条评论吗？',

  /** Sharing feedback on the comments feature: The link title */
  'feature-feedback.link': '分享你的反馈',
  /** Sharing feedback on the comments feature: The form title  */
  'feature-feedback.title': '帮助改进 ',

  /** The name of the comments feature, for use in header. Capitalized, eg "Comments". */
  'feature-name': '评论',

  /** Aria label for button above fields to add a comment, when the field currently do not have any comments */
  'field-button.aria-label-add': '添加评论',
  /** Aria label for button above fields that opens the comments for this field, when there are existing comments */
  'field-button.aria-label-open': '打开评论',
  /** Text shown in popover when hovering the button above fields that opens the comments panel, when there are more than one comment present */
  'field-button.content_other': '查看评论',
  /** Text shown in popover when hovering the button above fields to add a comment, when the field currently do not have any comments */
  'field-button.title': '添加评论',

  'inline-add-comment-button.disabled-overlap-title': '评论不能重叠',
  /** The text shown in the inline comment button */
  'inline-add-comment-button.title': '添加评论',

  /** The title of the error card shown in the comments inspector */
  'inspector-error.title': '加载评论时出现了问题',

  /** Aria label for the breadcrumb button showing the field path. `{{field}}` is the last (most specific) field. */
  'list-item.breadcrumb-button-go-to-field-aria-label': '前往{{field}}字段',
  /** The button tooltip content for the add reaction button */
  'list-item.context-menu-add-reaction': '添加反应',
  /** The button tooltip aria label for adding a reaction */
  'list-item.context-menu-add-reaction-aria-label': '添加反应',
  /** The button tooltip content for the add reaction button and mode is upsell */
  'list-item.context-menu-add-reaction-upsell': '升级以添加反应',
  /** The action menu item for copying a comment link */
  'list-item.copy-link': '复制评论链接',
  /** The action menu item for deleting a comment */
  'list-item.delete-comment': '删除评论',
  /** The action menu item for editing a comment */
  'list-item.edit-comment': '编辑评论',
  /** The action menu item for editing a comment and the mode is upsell */
  'list-item.edit-comment-upsell': '升级以编辑评论',
  /** Aria label for the button that takes you to the field, which wraps a thread/comment */
  'list-item.go-to-field-button.aria-label': '前往字段',
  /**
   * The text shown below the author and timestamp of a comment including a link back to the context in which the comment was made.
   * Consists of a document title wrapped in a link, and a word or phrase to indicate that the link refers to a location:
   * eg "on Home", "on Coffee Machine | Products", "on Pricing – Sanity"
   */
  'list-item.layout-context': '在 <IntentLink>{{title}}</IntentLink> 上',
  /** The marker to indicate that a comment has been edited in brackets */
  'list-item.layout-edited': '已编辑',
  /** The error text when sending a comment has failed */
  'list-item.layout-failed-sent': '发送失败。',
  /** The loading message when posting a comment is in progress */
  'list-item.layout-posting': '正在发布...',
  /** The text for retrying posting a comment */
  'list-item.layout-retry': '重试',
  /** The text shown when the value a comment references has been deleted */
  'list-item.missing-referenced-value-tooltip-content': '已删除已评论的文本',
  /** The aria label for the comments menu button to open the actions menu */
  'list-item.open-menu-aria-label': '打开评论操作菜单',
  /** The button text to re-open a resolved comment  */
  'list-item.re-open-resolved': '重新打开',
  /** The button aria label to re-open a comment that is resolved */
  'list-item.re-open-resolved-aria-label': '重新打开',
  /** The button aria label to mark a comment as resolved */
  'list-item.resolved-tooltip-aria-label': '标记评论为已解决',
  /** The button text to mark a comment as resolved */
  'list-item.resolved-tooltip-content': '标记为已解决',

  /** The empty state text for open comments */
  'list-status.empty-state-open-text': '此文档上的公开评论将在此处显示。',
  /** The empty state title for open comments */
  'list-status.empty-state-open-title': '还没有公开评论',
  /** The empty state text for resolved comments */
  'list-status.empty-state-resolved-text': '已解决的评论将显示在此处。',
  /** The empty state title for resolved comments */
  'list-status.empty-state-resolved-title': '还没有已解决的评论',
  /** The list status message for error */
  'list-status.error': '出了些问题',
  /** The list status message for loading status */
  'list-status.loading': '正在加载评论',

  /** Text shown when no users can be found to mention */
  'mentions.no-users-found': '未找到用户',
  /** Label/badge shown for users that are not authorized to see the document, and thus cannot be mentioned */
  'mentions.unauthorized-user': '未授权',
  /** Aria label for the command list for users to mention */
  'mentions.user-list-aria-label': '要提及的用户列表',

  /** The comments onboarding popover text */
  'onboarding.body': '您可以在文档的任何字段中添加评论。它们将在这里按字段分组显示。',
  /** The comments onboarding dismiss text */
  'onboarding.dismiss': '知道了',
  /** The comments onboarding popover header text */
  'onboarding.header': '文档字段现在有了评论',

  /** Tooltip for the button to add a reaction to a comment */
  'reactions.add-reaction-tooltip': '添加反应',
  /** Aria label for the individual reactions you can choose from when reacting to a comment */
  'reactions.react-with-aria-label': '用{{reactionName}}反应',
  /** When a users' name cannot be resolved, fall back to this name */
  'reactions.user-list.unknown-user-fallback-name': '未知用户',
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
  'reactions.users-reacted-with-reaction':
    '<UserList/> <Text>对</Text> <ReactionName/> <Text>做出了反应</Text>',

  /** Status filter: The short title describing filtering on open (non-resolved) comments */
  'status-filter.status-open': '开放',
  /** Status filter: The full text for describing filtering on open (non-resolved) comments */
  'status-filter.status-open-full': '开放评论',
  /** Status filter: The short title describing filtering on resolved comments */
  'status-filter.status-resolved': '已解决',
  /** Status filter: The full text for describing filtering on resolved comments */
  'status-filter.status-resolved-full': '已解决的评论',
  /** Status filter: The full text for describing filtering on resolved comments and is upsell mode */
  'status-filter.status-resolved-full-upsell': '升级以查看已解决的评论',
})
