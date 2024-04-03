import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** The close comments button text */
  'close-pane-button-text': 'Đóng bình luận',

  /** The aria label for the close comments button */
  'close-pane-button-text-aria-label': 'Đóng bình luận',

  /** When composing a comment, the placeholder text shown when adding a comment to a field with no current comments */
  'compose.add-comment-input-placeholder': 'Thêm bình luận vào <strong>{{field}}</strong>',
  /** When composing a comment, the placeholder text shown when adding a comment to a field with no current comments and the mode is upsell */
  'compose.add-comment-input-placeholder-upsell': 'Nâng cấp để thêm bình luận',
  /** When composing a comment, the placeholder text shown when the input is empty */
  'compose.create-comment-placeholder': 'Tạo bình luận mới',
  /** When composing a comment, the aria label for the button to mention a user */
  'compose.mention-user-aria-label': 'Đề cập đến người dùng',
  /** When composing a comment, the tooltip text for the button to mention a user */
  'compose.mention-user-tooltip': 'Đề cập đến người dùng',
  /** When composing a reply, the placeholder text shown when the input is empty */
  'compose.reply-placeholder': 'Trả lời',
  /** When composing a reply, the placeholder text shown when the input is empty and the mode is upsell */
  'compose.reply-placeholder-upsell': 'Nâng cấp để trả lời',
  /** When composing a comment, the aria label for the button to send a comment */
  'compose.send-comment-aria-label': 'Gửi bình luận',
  /** When composing a comment, the tooltip text for the button to send a comment */
  'compose.send-comment-tooltip': 'Gửi bình luận',

  /** The inspector text when error copying link */
  'copy-link-error-message': 'Không thể sao chép liên kết vào bảng tạm',

  /** The inspector successfully copied link text */
  'copy-link-success-message': 'Đã sao chép liên kết vào bảng tạm',

  /** The delete dialog body for a comment */
  'delete-comment.body': 'Một khi đã xóa, bình luận không thể khôi phục lại.',
  /** The delete dialog confirm button text for a comment */
  'delete-comment.confirm': 'Xóa bình luận',
  /** The delete dialog title for a comment */
  'delete-comment.title': 'Xóa bình luận này?',

  /** The delete dialog error */
  'delete-dialog.error': 'Đã xảy ra lỗi khi xóa bình luận. Vui lòng thử lại.',

  /** The delete dialog body for a thread */
  'delete-thread.body':
    'Bình luận này và các phản hồi của nó sẽ bị xóa, và một khi đã xóa không thể khôi phục lại.',
  /** The delete dialog conform button text for a thread */
  'delete-thread.confirm': 'Xóa chuỗi bình luận',
  /** The delete dialog title for a thread */
  'delete-thread.title': 'Xóa chuỗi bình luận này?',

  /** The button text for confirming discard */
  'discard.button-confirm': 'Hủy bỏ',
  /** The header for discard comment dialog */
  'discard.header': 'Hủy bỏ bình luận?',
  /** The text for discard comment dialog */
  'discard.text': 'Bạn có muốn hủy bỏ bình luận?',

  /** Sharing feedback on the comments feature: The link title */
  'feature-feedback.link': 'Chia sẻ phản hồi của bạn',
  /** Sharing feedback on the comments feature: The form title  */
  'feature-feedback.title': 'Giúp cải thiện ',

  /** The name of the comments feature, for use in header. Capitalized, eg "Comments". */
  'feature-name': 'Comments',

  /** Aria label for button above fields to add a comment, when the field currently do not have any comments */
  'field-button.aria-label-add': 'Thêm bình luận',
  /** Aria label for button above fields that opens the comments for this field, when there are existing comments */
  'field-button.aria-label-open': 'Mở bình luận',
  /** Text shown in popover when hovering the button above fields that opens the comments panel, when there are more than one comment present */
  'field-button.content_other': 'Xem bình luận',
  /** Text shown in popover when hovering the button above fields to add a comment, when the field currently do not have any comments */
  'field-button.title': 'Thêm bình luận',

  /* The text shown in the inline comment button when the button is disabled due to overlap */
  'inline-add-comment-button.disabled-overlap-title': 'Không thể chồng chéo bình luận',
  /** The text shown in the inline comment button */
  'inline-add-comment-button.title': 'Thêm bình luận',

  /** Aria label for the breadcrumb button showing the field path. `{{field}}` is the last (most specific) field. */
  'list-item.breadcrumb-button-go-to-field-aria-label': 'Đi đến trường {{field}}',
  /** The button tooltip content for the add reaction button */
  'list-item.context-menu-add-reaction': 'Thêm phản ứng',
  /** The button tooltip aria label for adding a reaction */
  'list-item.context-menu-add-reaction-aria-label': 'Thêm phản ứng',
  /** The button tooltip content for the add reaction button and mode is upsell */
  'list-item.context-menu-add-reaction-upsell': 'Nâng cấp để thêm phản ứng',
  /** The action menu item for copying a comment link */
  'list-item.copy-link': 'Sao chép liên kết đến bình luận',
  /** The action menu item for deleting a comment */
  'list-item.delete-comment': 'Xóa bình luận',
  /** The action menu item for editing a comment */
  'list-item.edit-comment': 'Chỉnh sửa bình luận',
  /** The action menu item for editing a comment and the mode is upsell */
  'list-item.edit-comment-upsell': 'Nâng cấp để chỉnh sửa bình luận',
  /** Aria label for the button that takes you to the field, which wraps a thread/comment */
  'list-item.go-to-field-button.aria-label': 'Đi đến trường',
  /**
   * The text shown below the author and timestamp of a comment including a link back to the context in which the comment was made.
   * Consists of a document title wrapped in a link, and a word or phrase to indicate that the link refers to a location:
   * eg "on Home", "on Coffee Machine | Products", "on Pricing – Sanity"
   */
  'list-item.layout-context': 'trên <IntentLink>{{title}}</IntentLink>',
  /** The marker to indicate that a comment has been edited in brackets */
  'list-item.layout-edited': 'đã chỉnh sửa',
  /** The error text when sending a comment has failed */
  'list-item.layout-failed-sent': 'Không gửi được.',
  /** The loading message when posting a comment is in progress */
  'list-item.layout-posting': 'Đang đăng...',
  /** The text for retrying posting a comment */
  'list-item.layout-retry': 'Thử lại',
  /** The text shown when the value a comment references has been deleted */
  'list-item.missing-referenced-value-tooltip-content': 'Đoạn văn bản đã bình luận đã bị xóa',
  /** The aria label for the comments menu button to open the actions menu */
  'list-item.open-menu-aria-label': 'Mở menu hành động bình luận',
  /** The button text to re-open a resolved comment  */
  'list-item.re-open-resolved': 'Mở lại',
  /** The button aria label to re-open a comment that is resolved */
  'list-item.re-open-resolved-aria-label': 'Mở lại',
  /** The button aria label to mark a comment as resolved */
  'list-item.resolved-tooltip-aria-label': 'Đánh dấu bình luận đã giải quyết',
  /** The button text to mark a comment as resolved */
  'list-item.resolved-tooltip-content': 'Đánh dấu là đã giải quyết',

  /** The empty state text for open comments */
  'list-status.empty-state-open-text': 'Bình luận mở trên tài liệu này sẽ được hiển thị ở đây.',
  /** The empty state title for open comments */
  'list-status.empty-state-open-title': 'Chưa có bình luận mở',
  /** The empty state text for resolved comments */
  'list-status.empty-state-resolved-text':
    'Các bình luận đã giải quyết trên tài liệu này sẽ được hiển thị ở đây.',
  /** The empty state title for resolved comments */
  'list-status.empty-state-resolved-title': 'Chưa có bình luận nào được giải quyết',
  /** The list status message for error */
  'list-status.error': 'Đã xảy ra lỗi',
  /** The list status message for loading status */
  'list-status.loading': 'Đang tải bình luận',

  /** Text shown when no users can be found to mention */
  'mentions.no-users-found': 'Không tìm thấy người dùng',
  /** Label/badge shown for users that are not authorized to see the document, and thus cannot be mentioned */
  'mentions.unauthorized-user': 'Không được phép',
  /** Aria label for the command list for users to mention */
  'mentions.user-list-aria-label': 'Danh sách người dùng để nhắc đến',

  /** The comments onboarding popover text */
  'onboarding.body':
    'Bạn có thể thêm bình luận vào bất kỳ trường nào trong tài liệu. Chúng sẽ xuất hiện ở đây, được nhóm theo trường.',
  /** The comments onboarding dismiss text */
  'onboarding.dismiss': 'Đã hiểu',
  /** The comments onboarding popover header text */
  'onboarding.header': 'Các trường tài liệu giờ đây có bình luận',

  /** Tooltip for the button to add a reaction to a comment */
  'reactions.add-reaction-tooltip': 'Thêm phản ứng',
  /** Aria label for the individual reactions you can choose from when reacting to a comment */
  'reactions.react-with-aria-label': 'Phản ứng với {{reactionName}}',
  /** When a users' name cannot be resolved, fall back to this name */
  'reactions.user-list.unknown-user-fallback-name': 'Người dùng không xác định',
  /**
   * When showing list of users who have reacted, replaces your own name with "you", eg
   * "Donna, you, James, and Tyler reacted with 👍". A different key (`_leading` suffix)
   * is used when you are the first to react, eg "You, Donna and Tyler reacted with 👍".
   * Use `{{name}}` if you want to instead use the current users' actual name.
   */
  'reactions.user-list.you': 'bạn',
  /**
   * When showing list of users who have reacted, replaces your own name with "You", eg
   * "You, Donna, James, and Tyler reacted with 👍". A different key (`_leading` suffix)
   * is used when you are not the first to react, eg "Donna, you, James and Tyler reacted with 👍".
   * Use `{{name}}` if you want to instead use the current users' actual name.
   */
  'reactions.user-list.you_leading': 'Bạn',
  /**
   * The text shown for the tooltip that appears when hovering over the reaction count, eg
   * "Donna, James, and Tyler Reacted with 👍". Three components are available for use:
   * - `<UserList/>` - the list of names of users who have reacted, using the locales list format
   * - `<Text>` - should be wrapped around the text describing the action ("reacted with")
   * - `<ReactionName/>` - the name of the reaction emoji, eg ":heavy_plus_sign:"
   */
  'reactions.users-reacted-with-reaction':
    '<UserList/> <Text>đã phản ứng với</Text> <ReactionName/>',

  /** Status filter: The short title describing filtering on open (non-resolved) comments */
  'status-filter.status-open': 'Mở',
  /** Status filter: The full text for describing filtering on open (non-resolved) comments */
  'status-filter.status-open-full': 'Bình luận mở',
  /** Status filter: The short title describing filtering on resolved comments */
  'status-filter.status-resolved': 'Đã giải quyết',
  /** Status filter: The full text for describing filtering on resolved comments */
  'status-filter.status-resolved-full': 'Bình luận đã giải quyết',
  /** Status filter: The full text for describing filtering on resolved comments and is upsell mode */
  'status-filter.status-resolved-full-upsell': 'Nâng cấp để xem bình luận đã giải quyết',
})
