import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** The close comments button text */
  'close-pane-button-text': 'コメントを閉じる',

  /** The aria label for the close comments button */
  'close-pane-button-text-aria-label': 'コメントを閉じる',

  /** When composing a comment, the placeholder text shown when adding a comment to a field with no current comments */
  'compose.add-comment-input-placeholder': '<strong>{{field}}</strong>にコメントを追加',
  /** When composing a comment, the placeholder text shown when adding a comment to a field with no current comments and the mode is upsell */
  'compose.add-comment-input-placeholder-upsell': 'コメントを追加するためにアップグレード',
  /** When composing a comment, the placeholder text shown when the input is empty */
  'compose.create-comment-placeholder': '新しいコメントを作成',
  /** When composing a comment, the aria label for the button to mention a user */
  'compose.mention-user-aria-label': 'ユーザーをメンションする',
  /** When composing a comment, the tooltip text for the button to mention a user */
  'compose.mention-user-tooltip': 'ユーザーをメンションする',
  /** When composing a reply, the placeholder text shown when the input is empty */
  'compose.reply-placeholder': '返信',
  /** When composing a reply, the placeholder text shown when the input is empty and the mode is upsell */
  'compose.reply-placeholder-upsell': '返信するためにアップグレード',
  /** When composing a comment, the aria label for the button to send a comment */
  'compose.send-comment-aria-label': 'コメントを送信',
  /** When composing a comment, the tooltip text for the button to send a comment */
  'compose.send-comment-tooltip': 'コメントを送信',

  /** The inspector text when error copying link */
  'copy-link-error-message': 'クリップボードへのリンクのコピーに失敗しました',

  /** The delete dialog body for a comment */
  'delete-comment.body': '一度削除されたコメントは復旧できません。',
  /** The delete dialog confirm button text for a comment */
  'delete-comment.confirm': 'コメントを削除',
  /** The delete dialog title for a comment */
  'delete-comment.title': 'このコメントを削除しますか？',

  /** The delete dialog error */
  'delete-dialog.error': 'コメントの削除中にエラーが発生しました。もう一度お試しください。',

  /** The delete dialog body for a thread */
  'delete-thread.body': 'このコメントとその返信は削除され、一度削除されたら復旧できません。',
  /** The delete dialog conform button text for a thread */
  'delete-thread.confirm': 'スレッドを削除',
  /** The delete dialog title for a thread */
  'delete-thread.title': 'このコメントスレッドを削除しますか？',

  /** The button text for confirming discard */
  'discard.button-confirm': '破棄',
  /** The header for discard comment dialog */
  'discard.header': 'コメントを破棄しますか？',
  /** The text for discard comment dialog */
  'discard.text': 'コメントを破棄しますか？',

  /** Sharing feedback on the comments feature: The link title */
  'feature-feedback.link': 'フィードバックを共有する',
  /** Sharing feedback on the comments feature: The form title  */
  'feature-feedback.title': '改善にご協力ください ',

  /** The name of the comments feature, for use in header. Capitalized, eg "Comments". */
  'feature-name': 'コメント',

  /** Aria label for button above fields to add a comment, when the field currently do not have any comments */
  'field-button.aria-label-add': 'コメントを追加',
  /** Aria label for button above fields that opens the comments for this field, when there are existing comments */
  'field-button.aria-label-open': 'コメントを開く',
  /** Text shown in popover when hovering the button above fields that opens the comments panel, when there are more than one comment present */
  'field-button.content_other': 'コメントを見る',
  /** Text shown in popover when hovering the button above fields to add a comment, when the field currently do not have any comments */
  'field-button.title': 'コメントを追加',

  /* The text shown in the inline comment button when the button is disabled due to overlap */
  'inline-add-comment-button.disabled-overlap-title': 'コメントは重複できません',
  /** The text shown in the inline comment button */
  'inline-add-comment-button.title': 'コメントを追加',

  /** The title of the error card shown in the comments inspector */
  'inspector-error.title': undefined, // 'Something went wrong while loading comments'

  /** Aria label for the breadcrumb button showing the field path. `{{field}}` is the last (most specific) field. */
  'list-item.breadcrumb-button-go-to-field-aria-label': '{{field}}フィールドに移動',
  /** The button tooltip content for the add reaction button */
  'list-item.context-menu-add-reaction': 'リアクションを追加',
  /** The button tooltip aria label for adding a reaction */
  'list-item.context-menu-add-reaction-aria-label': 'リアクションを追加',
  /** The button tooltip content for the add reaction button and mode is upsell */
  'list-item.context-menu-add-reaction-upsell': 'リアクションを追加するためにアップグレード',
  /** The action menu item for copying a comment link */
  'list-item.copy-link': 'コメントへのリンクをコピー',
  /** The action menu item for deleting a comment */
  'list-item.delete-comment': 'コメントを削除',
  /** The action menu item for editing a comment */
  'list-item.edit-comment': 'コメントを編集',
  /** The action menu item for editing a comment and the mode is upsell */
  'list-item.edit-comment-upsell': 'コメントを編集するためにアップグレード',
  /** Aria label for the button that takes you to the field, which wraps a thread/comment */
  'list-item.go-to-field-button.aria-label': 'フィールドに移動',
  /**
   * The text shown below the author and timestamp of a comment including a link back to the context in which the comment was made.
   * Consists of a document title wrapped in a link, and a word or phrase to indicate that the link refers to a location:
   * eg "on Home", "on Coffee Machine | Products", "on Pricing – Sanity"
   */
  'list-item.layout-context': '<IntentLink>{{title}}</IntentLink>の上に',
  /** The marker to indicate that a comment has been edited in brackets */
  'list-item.layout-edited': '編集済み',
  /** The error text when sending a comment has failed */
  'list-item.layout-failed-sent': '送信に失敗しました。',
  /** The loading message when posting a comment is in progress */
  'list-item.layout-posting': '投稿中...',
  /** The text for retrying posting a comment */
  'list-item.layout-retry': '再試行',
  /** The text shown when the value a comment references has been deleted */
  'list-item.missing-referenced-value-tooltip-content': 'コメントされたテキストが削除されました',
  /** The aria label for the comments menu button to open the actions menu */
  'list-item.open-menu-aria-label': 'コメントアクションメニューを開く',
  /** The button text to re-open a resolved comment  */
  'list-item.re-open-resolved': '再開',
  /** The button aria label to re-open a comment that is resolved */
  'list-item.re-open-resolved-aria-label': '再開',
  /** The button aria label to mark a comment as resolved */
  'list-item.resolved-tooltip-aria-label': 'コメントを解決済みとしてマーク',
  /** The button text to mark a comment as resolved */
  'list-item.resolved-tooltip-content': '解決済みとしてマーク',

  /** The empty state text for open comments */
  'list-status.empty-state-open-text':
    'このドキュメントに対するオープンコメントはここに表示されます。',
  /** The empty state title for open comments */
  'list-status.empty-state-open-title': 'まだオープンコメントはありません',
  /** The empty state text for resolved comments */
  'list-status.empty-state-resolved-text':
    'このドキュメントに関する解決済みのコメントはこちらに表示されます。',
  /** The empty state title for resolved comments */
  'list-status.empty-state-resolved-title': 'まだ解決済みのコメントはありません',
  /** The list status message for error */
  'list-status.error': '何か問題が発生しました',
  /** The list status message for loading status */
  'list-status.loading': 'コメントを読み込み中',

  /** Text shown when no users can be found to mention */
  'mentions.no-users-found': 'ユーザーが見つかりません',
  /** Label/badge shown for users that are not authorized to see the document, and thus cannot be mentioned */
  'mentions.unauthorized-user': '未承認',
  /** Aria label for the command list for users to mention */
  'mentions.user-list-aria-label': 'メンションするユーザーのリスト',

  /** The comments onboarding popover text */
  'onboarding.body':
    'ドキュメントの任意のフィールドにコメントを追加できます。それらはここにフィールドごとにグループ化されて表示されます。',
  /** The comments onboarding dismiss text */
  'onboarding.dismiss': '了解しました',
  /** The comments onboarding popover header text */
  'onboarding.header': 'ドキュメントのフィールドにコメントができるようになりました',

  /** Tooltip for the button to add a reaction to a comment */
  'reactions.add-reaction-tooltip': 'リアクションを追加',
  /** Aria label for the individual reactions you can choose from when reacting to a comment */
  'reactions.react-with-aria-label': '{{reactionName}}でリアクションする',
  /** When a users' name cannot be resolved, fall back to this name */
  'reactions.user-list.unknown-user-fallback-name': '不明なユーザー',
  /**
   * When showing list of users who have reacted, replaces your own name with "you", eg
   * "Donna, you, James, and Tyler reacted with 👍". A different key (`_leading` suffix)
   * is used when you are the first to react, eg "You, Donna and Tyler reacted with 👍".
   * Use `{{name}}` if you want to instead use the current users' actual name.
   */
  'reactions.user-list.you': 'あなた',
  /**
   * When showing list of users who have reacted, replaces your own name with "You", eg
   * "You, Donna, James, and Tyler reacted with 👍". A different key (`_leading` suffix)
   * is used when you are not the first to react, eg "Donna, you, James and Tyler reacted with 👍".
   * Use `{{name}}` if you want to instead use the current users' actual name.
   */
  'reactions.user-list.you_leading': 'あなた',
  /**
   * The text shown for the tooltip that appears when hovering over the reaction count, eg
   * "Donna, James, and Tyler Reacted with 👍". Three components are available for use:
   * - `<UserList/>` - the list of names of users who have reacted, using the locales list format
   * - `<Text>` - should be wrapped around the text describing the action ("reacted with")
   * - `<ReactionName/>` - the name of the reaction emoji, eg ":heavy_plus_sign:"
   */
  'reactions.users-reacted-with-reaction':
    '<UserList/> <Text>が</Text> <ReactionName/>でリアクションしました',

  /** Status filter: The short title describing filtering on open (non-resolved) comments */
  'status-filter.status-open': 'オープン',
  /** Status filter: The full text for describing filtering on open (non-resolved) comments */
  'status-filter.status-open-full': 'オープンなコメント',
  /** Status filter: The short title describing filtering on resolved comments */
  'status-filter.status-resolved': '解決済み',
  /** Status filter: The full text for describing filtering on resolved comments */
  'status-filter.status-resolved-full': '解決済みのコメント',
  /** Status filter: The full text for describing filtering on resolved comments and is upsell mode */
  'status-filter.status-resolved-full-upsell':
    '解決済みのコメントを見るためにアップグレードしてください',
})
