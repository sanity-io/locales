import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** The close comments button text */
  'close-pane-button-text': '댓글 닫기',

  /** The aria label for the close comments button */
  'close-pane-button-text-aria-label': '댓글 닫기',

  /** When composing a comment, the placeholder text shown when adding a comment to a field with no current comments */
  'compose.add-comment-input-placeholder': '<strong>{{field}}</strong>에 댓글 추가',
  /** When composing a comment, the placeholder text shown when adding a comment to a field with no current comments and the mode is upsell */
  'compose.add-comment-input-placeholder-upsell': '댓글을 추가하려면 업그레이드하세요',
  /** When composing a comment, the placeholder text shown when the input is empty */
  'compose.create-comment-placeholder': '새 댓글 작성',
  /** When composing a comment, the aria label for the button to mention a user */
  'compose.mention-user-aria-label': '사용자 언급',
  /** When composing a comment, the tooltip text for the button to mention a user */
  'compose.mention-user-tooltip': '사용자 언급',
  /** When composing a reply, the placeholder text shown when the input is empty */
  'compose.reply-placeholder': '답글',
  /** When composing a reply, the placeholder text shown when the input is empty and the mode is upsell */
  'compose.reply-placeholder-upsell': '답글을 달려면 업그레이드하세요',
  /** When composing a comment, the aria label for the button to send a comment */
  'compose.send-comment-aria-label': '댓글 보내기',
  /** When composing a comment, the tooltip text for the button to send a comment */
  'compose.send-comment-tooltip': '댓글 보내기',

  /** The inspector text when error copying link */
  'copy-link-error-message': '클립보드에 링크를 복사할 수 없습니다',

  /** The inspector successfully copied link text */
  'copy-link-success-message': '클립보드에 링크를 복사했습니다',

  /** The delete dialog body for a comment */
  'delete-comment.body': '한 번 삭제하면 댓글을 복구할 수 없습니다.',
  /** The delete dialog confirm button text for a comment */
  'delete-comment.confirm': '댓글 삭제',
  /** The delete dialog title for a comment */
  'delete-comment.title': '이 댓글을 삭제하시겠습니까?',

  /** The delete dialog error */
  'delete-dialog.error': '댓글을 삭제하는 동안 오류가 발생했습니다. 다시 시도해 주세요.',

  /** The delete dialog body for a thread */
  'delete-thread.body': '이 댓글과 답글이 삭제되며, 삭제하면 복구할 수 없습니다.',
  /** The delete dialog conform button text for a thread */
  'delete-thread.confirm': '스레드 삭제',
  /** The delete dialog title for a thread */
  'delete-thread.title': '이 댓글 스레드를 삭제하시겠습니까?',

  /** The button text for confirming discard */
  'discard.button-confirm': '삭제',
  /** The header for discard comment dialog */
  'discard.header': '댓글을 삭제하시겠습니까?',
  /** The text for discard comment dialog */
  'discard.text': '댓글을 삭제하시겠습니까?',

  /** Sharing feedback on the comments feature: The link title */
  'feature-feedback.link': '피드백 공유',
  /** Sharing feedback on the comments feature: The form title  */
  'feature-feedback.title': '개선을 도와주세요 ',

  /** The name of the comments feature, for use in header. Capitalized, eg "Comments". */
  'feature-name': '댓글',

  /** Aria label for button above fields to add a comment, when the field currently do not have any comments */
  'field-button.aria-label-add': '댓글 추가',
  /** Aria label for button above fields that opens the comments for this field, when there are existing comments */
  'field-button.aria-label-open': '댓글 열기',
  /** Text shown in popover when hovering the button above fields that opens the comments panel, when there are more than one comment present */
  'field-button.content_other': '댓글 보기',
  /** Text shown in popover when hovering the button above fields to add a comment, when the field currently do not have any comments */
  'field-button.title': '댓글 추가',

  /* The text shown in the inline comment button when the button is disabled due to overlap */
  'inline-add-comment-button.disabled-overlap-title': '댓글이 겹칠 수 없습니다',
  /** The text shown in the inline comment button */
  'inline-add-comment-button.title': '댓글 추가',

  /** Aria label for the breadcrumb button showing the field path. `{{field}}` is the last (most specific) field. */
  'list-item.breadcrumb-button-go-to-field-aria-label': '{{field}} 필드로 이동',
  /** The button tooltip content for the add reaction button */
  'list-item.context-menu-add-reaction': '반응 추가',
  /** The button tooltip aria label for adding a reaction */
  'list-item.context-menu-add-reaction-aria-label': '반응 추가',
  /** The button tooltip content for the add reaction button and mode is upsell */
  'list-item.context-menu-add-reaction-upsell': '반응을 추가하려면 업그레이드하세요',
  /** The action menu item for copying a comment link */
  'list-item.copy-link': '댓글 링크 복사',
  /** The action menu item for deleting a comment */
  'list-item.delete-comment': '댓글 삭제',
  /** The action menu item for editing a comment */
  'list-item.edit-comment': '댓글 편집',
  /** The action menu item for editing a comment and the mode is upsell */
  'list-item.edit-comment-upsell': '댓글을 편집하려면 업그레이드하세요',
  /** Aria label for the button that takes you to the field, which wraps a thread/comment */
  'list-item.go-to-field-button.aria-label': '필드로 이동',
  /**
   * The text shown below the author and timestamp of a comment including a link back to the context in which the comment was made.
   * Consists of a document title wrapped in a link, and a word or phrase to indicate that the link refers to a location:
   * eg "on Home", "on Coffee Machine | Products", "on Pricing – Sanity"
   */
  'list-item.layout-context': '<IntentLink>{{title}}</IntentLink>에서',
  /** The marker to indicate that a comment has been edited in brackets */
  'list-item.layout-edited': '편집됨',
  /** The error text when sending a comment has failed */
  'list-item.layout-failed-sent': '전송 실패.',
  /** The loading message when posting a comment is in progress */
  'list-item.layout-posting': '게시 중...',
  /** The text for retrying posting a comment */
  'list-item.layout-retry': '재시도',
  /** The text shown when the value a comment references has been deleted */
  'list-item.missing-referenced-value-tooltip-content': '댓글이 달린 텍스트가 삭제되었습니다',
  /** The aria label for the comments menu button to open the actions menu */
  'list-item.open-menu-aria-label': '댓글 작업 메뉴 열기',
  /** The button text to re-open a resolved comment  */
  'list-item.re-open-resolved': '다시 열기',
  /** The button aria label to re-open a comment that is resolved */
  'list-item.re-open-resolved-aria-label': '다시 열기',
  /** The button aria label to mark a comment as resolved */
  'list-item.resolved-tooltip-aria-label': '댓글을 해결된 것으로 표시',
  /** The button text to mark a comment as resolved */
  'list-item.resolved-tooltip-content': '해결된 것으로 표시',

  /** The empty state text for open comments */
  'list-status.empty-state-open-text': '이 문서에 대한 열린 댓글은 여기에 표시됩니다.',
  /** The empty state title for open comments */
  'list-status.empty-state-open-title': '아직 열린 댓글 없음',
  /** The empty state text for resolved comments */
  'list-status.empty-state-resolved-text': '이 문서에 대한 해결된 댓글은 여기에 표시됩니다.',
  /** The empty state title for resolved comments */
  'list-status.empty-state-resolved-title': '아직 해결된 댓글이 없습니다',
  /** The list status message for error */
  'list-status.error': '문제가 발생했습니다',
  /** The list status message for loading status */
  'list-status.loading': '댓글을 불러오는 중',

  /** Text shown when no users can be found to mention */
  'mentions.no-users-found': '사용자를 찾을 수 없습니다',
  /** Label/badge shown for users that are not authorized to see the document, and thus cannot be mentioned */
  'mentions.unauthorized-user': '권한 없음',
  /** Aria label for the command list for users to mention */
  'mentions.user-list-aria-label': '언급할 사용자 목록',

  /** The comments onboarding popover text */
  'onboarding.body':
    '문서의 어떤 필드에든 댓글을 추가할 수 있습니다. 그러면 필드별로 그룹화되어 여기에 표시됩니다.',
  /** The comments onboarding dismiss text */
  'onboarding.dismiss': '알겠습니다',
  /** The comments onboarding popover header text */
  'onboarding.header': '문서 필드에 댓글이 가능해졌습니다',

  /** Tooltip for the button to add a reaction to a comment */
  'reactions.add-reaction-tooltip': '반응 추가',
  /** Aria label for the individual reactions you can choose from when reacting to a comment */
  'reactions.react-with-aria-label': '{{reactionName}}으로 반응하기',
  /** When a users' name cannot be resolved, fall back to this name */
  'reactions.user-list.unknown-user-fallback-name': '알 수 없는 사용자',
  /**
   * When showing list of users who have reacted, replaces your own name with "you", eg
   * "Donna, you, James, and Tyler reacted with 👍". A different key (`_leading` suffix)
   * is used when you are the first to react, eg "You, Donna and Tyler reacted with 👍".
   * Use `{{name}}` if you want to instead use the current users' actual name.
   */
  'reactions.user-list.you': '당신',
  /**
   * When showing list of users who have reacted, replaces your own name with "You", eg
   * "You, Donna, James, and Tyler reacted with 👍". A different key (`_leading` suffix)
   * is used when you are not the first to react, eg "Donna, you, James and Tyler reacted with 👍".
   * Use `{{name}}` if you want to instead use the current users' actual name.
   */
  'reactions.user-list.you_leading': '당신',
  /**
   * The text shown for the tooltip that appears when hovering over the reaction count, eg
   * "Donna, James, and Tyler Reacted with 👍". Three components are available for use:
   * - `<UserList/>` - the list of names of users who have reacted, using the locales list format
   * - `<Text>` - should be wrapped around the text describing the action ("reacted with")
   * - `<ReactionName/>` - the name of the reaction emoji, eg ":heavy_plus_sign:"
   */
  'reactions.users-reacted-with-reaction': '<UserList/> <Text>님이</Text> <ReactionName/>로 반응함',

  /** Status filter: The short title describing filtering on open (non-resolved) comments */
  'status-filter.status-open': '열림',
  /** Status filter: The full text for describing filtering on open (non-resolved) comments */
  'status-filter.status-open-full': '열린 댓글',
  /** Status filter: The short title describing filtering on resolved comments */
  'status-filter.status-resolved': '해결됨',
  /** Status filter: The full text for describing filtering on resolved comments */
  'status-filter.status-resolved-full': '해결된 댓글',
  /** Status filter: The full text for describing filtering on resolved comments and is upsell mode */
  'status-filter.status-resolved-full-upsell': '해결된 댓글을 보려면 업그레이드하세요',
})
