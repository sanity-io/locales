import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** The close comments button text */
  'close-pane-button-text': 'Закрыть комментарии',

  /** The aria label for the close comments button */
  'close-pane-button-text-aria-label': 'Закрыть комментарии',

  /** When composing a comment, the placeholder text shown when adding a comment to a field with no current comments */
  'compose.add-comment-input-placeholder': 'Добавить комментарий к <strong>{{field}}</strong>',
  /** When composing a comment, the placeholder text shown when adding a comment to a field with no current comments and the mode is upsell */
  'compose.add-comment-input-placeholder-upsell': 'Обновитесь, чтобы добавить комментарий',
  /** When composing a comment, the placeholder text shown when the input is empty */
  'compose.create-comment-placeholder': 'Создать новый комментарий',
  /** When composing a comment, the aria label for the button to mention a user */
  'compose.mention-user-aria-label': 'Упомянуть пользователя',
  /** When composing a comment, the tooltip text for the button to mention a user */
  'compose.mention-user-tooltip': 'Упомянуть пользователя',
  /** When composing a reply, the placeholder text shown when the input is empty */
  'compose.reply-placeholder': 'Ответить',
  /** When composing a reply, the placeholder text shown when the input is empty and the mode is upsell */
  'compose.reply-placeholder-upsell': 'Обновитесь, чтобы ответить',
  /** When composing a comment, the aria label for the button to send a comment */
  'compose.send-comment-aria-label': 'Отправить комментарий',
  /** When composing a comment, the tooltip text for the button to send a comment */
  'compose.send-comment-tooltip': 'Отправить комментарий',

  /** The inspector text when error copying link */
  'copy-link-error-message': 'Не удалось скопировать ссылку в буфер обмена',

  /** The inspector successfully copied link text */
  'copy-link-success-message': 'Ссылка скопирована в буфер обмена',

  /** The delete dialog body for a comment */
  'delete-comment.body': 'После удаления комментарий нельзя будет восстановить.',
  /** The delete dialog confirm button text for a comment */
  'delete-comment.confirm': 'Удалить комментарий',
  /** The delete dialog title for a comment */
  'delete-comment.title': 'Удалить этот комментарий?',

  /** The delete dialog error */
  'delete-dialog.error':
    'Произошла ошибка при удалении комментария. Пожалуйста, попробуйте еще раз.',

  /** The delete dialog body for a thread */
  'delete-thread.body':
    'Этот комментарий и все ответы на него будут удалены, и после удаления их нельзя будет восстановить.',
  /** The delete dialog conform button text for a thread */
  'delete-thread.confirm': 'Удалить ветку',
  /** The delete dialog title for a thread */
  'delete-thread.title': 'Удалить эту ветку комментариев?',

  /** The button text for confirming discard */
  'discard.button-confirm': 'Отменить',
  /** The header for discard comment dialog */
  'discard.header': 'Отменить комментарий?',
  /** The text for discard comment dialog */
  'discard.text': 'Вы хотите отменить комментарий?',

  /** Sharing feedback on the comments feature: The link title */
  'feature-feedback.link': 'Поделитесь вашим мнением',
  /** Sharing feedback on the comments feature: The form title  */
  'feature-feedback.title': 'Помогите улучшить ',

  /** The name of the comments feature, for use in header. Capitalized, eg "Comments". */
  'feature-name': 'Comments',

  /** Aria label for button above fields to add a comment, when the field currently do not have any comments */
  'field-button.aria-label-add': 'Добавить комментарий',
  /** Aria label for button above fields that opens the comments for this field, when there are existing comments */
  'field-button.aria-label-open': 'Открыть комментарии',
  /** Text shown in popover when hovering the button above fields that opens the comments panel, when there is a single comment present */
  'field-button.content_one': 'Просмотреть комментарий',
  /** Text shown in popover when hovering the button above fields to add a comment, when the field currently do not have any comments */
  'field-button.title': 'Добавить комментарий',

  /** Aria label for the breadcrumb button showing the field path. `{{field}}` is the last (most specific) field. */
  'list-item.breadcrumb-button-go-to-field-aria-label': 'Перейти к полю {{field}}',
  /** The button tooltip content for the add reaction button */
  'list-item.context-menu-add-reaction': 'Добавить реакцию',
  /** The button tooltip aria label for adding a reaction */
  'list-item.context-menu-add-reaction-aria-label': 'Добавить реакцию',
  /** The button tooltip content for the add reaction button and mode is upsell */
  'list-item.context-menu-add-reaction-upsell': 'Обновите, чтобы добавить реакцию',
  /** The action menu item for copying a comment link */
  'list-item.copy-link': 'Скопировать ссылку на комментарий',
  /** The action menu item for deleting a comment */
  'list-item.delete-comment': 'Удалить комментарий',
  /** The action menu item for editing a comment */
  'list-item.edit-comment': 'Редактировать комментарий',
  /** The action menu item for editing a comment and the mode is upsell */
  'list-item.edit-comment-upsell': 'Обновите, чтобы редактировать комментарий',
  /** Aria label for the button that takes you to the field, which wraps a thread/comment */
  'list-item.go-to-field-button.aria-label': 'Перейти к полю',
  /**
   * The text shown below the author and timestamp of a comment including a link back to the context in which the comment was made.
   * Consists of a document title wrapped in a link, and a word or phrase to indicate that the link refers to a location:
   * eg "on Home", "on Coffee Machine | Products", "on Pricing – Sanity"
   */
  'list-item.layout-context': 'на <IntentLink>{{title}}</IntentLink>',
  /** The marker to indicate that a comment has been edited in brackets */
  'list-item.layout-edited': 'отредактировано',
  /** The error text when sending a comment has failed */
  'list-item.layout-failed-sent': 'Не удалось отправить.',
  /** The loading message when posting a comment is in progress */
  'list-item.layout-posting': 'Публикация...',
  /** The text for retrying posting a comment */
  'list-item.layout-retry': 'Повторить',
  /** The aria label for the comments menu button to open the actions menu */
  'list-item.open-menu-aria-label': 'Открыть меню действий комментария',
  /** The button text to re-open a resolved comment  */
  'list-item.re-open-resolved': 'Вновь открыть',
  /** The button aria label to re-open a comment that is resolved */
  'list-item.re-open-resolved-aria-label': 'Вновь открыть',
  /** The button aria label to mark a comment as resolved */
  'list-item.resolved-tooltip-aria-label': 'Отметить комментарий как решённый',
  /** The button text to mark a comment as resolved */
  'list-item.resolved-tooltip-content': 'Отметить как решённый',

  /** The empty state text for open comments */
  'list-status.empty-state-open-text': undefined, // 'Open comments on this document will be shown here.'
  /** The empty state title for open comments */
  'list-status.empty-state-open-title': 'Пока нет открытых комментариев',
  /** The empty state text for resolved comments */
  'list-status.empty-state-resolved-text':
    'Разрешенные комментарии к этому документу будут показаны здесь.',
  /** The empty state title for resolved comments */
  'list-status.empty-state-resolved-title': 'Пока нет разрешенных комментариев',
  /** The list status message for error */
  'list-status.error': 'Что-то пошло не так',
  /** The list status message for loading status */
  'list-status.loading': 'Загрузка комментариев',

  /** Text shown when no users can be found to mention */
  'mentions.no-users-found': 'Пользователи не найдены',
  /** Label/badge shown for users that are not authorized to see the document, and thus cannot be mentioned */
  'mentions.unauthorized-user': 'Неавторизованный',
  /** Aria label for the command list for users to mention */
  'mentions.user-list-aria-label': 'Список пользователей для упоминания',

  /** The comments onboarding popover text */
  'onboarding.body':
    'Вы можете добавлять комментарии к любому полю в документе. Они будут отображаться здесь, сгруппированные по полям.',
  /** The comments onboarding dismiss text */
  'onboarding.dismiss': 'Понял',
  /** The comments onboarding popover header text */
  'onboarding.header': 'Теперь у полей документов есть комментарии',

  /** Tooltip for the button to add a reaction to a comment */
  'reactions.add-reaction-tooltip': 'Добавить реакцию',
  /** Aria label for the individual reactions you can choose from when reacting to a comment */
  'reactions.react-with-aria-label': 'Реагировать с {{reactionName}}',
  /** When a users' name cannot be resolved, fall back to this name */
  'reactions.user-list.unknown-user-fallback-name': 'Неизвестный пользователь',
  /**
   * When showing list of users who have reacted, replaces your own name with "you", eg
   * "Donna, you, James, and Tyler reacted with 👍". A different key (`_leading` suffix)
   * is used when you are the first to react, eg "You, Donna and Tyler reacted with 👍".
   * Use `{{name}}` if you want to instead use the current users' actual name.
   */
  'reactions.user-list.you': 'вы',
  /**
   * When showing list of users who have reacted, replaces your own name with "You", eg
   * "You, Donna, James, and Tyler reacted with 👍". A different key (`_leading` suffix)
   * is used when you are not the first to react, eg "Donna, you, James and Tyler reacted with 👍".
   * Use `{{name}}` if you want to instead use the current users' actual name.
   */
  'reactions.user-list.you_leading': 'Вы',
  /**
   * The text shown for the tooltip that appears when hovering over the reaction count, eg
   * "Donna, James, and Tyler Reacted with 👍". Three components are available for use:
   * - `<UserList/>` - the list of names of users who have reacted, using the locales list format
   * - `<Text>` - should be wrapped around the text describing the action ("reacted with")
   * - `<ReactionName/>` - the name of the reaction emoji, eg ":heavy_plus_sign:"
   */
  'reactions.users-reacted-with-reaction': '<UserList/> <Text>отреагировали</Text> <ReactionName/>',

  /** Status filter: The short title describing filtering on open (non-resolved) comments */
  'status-filter.status-open': 'Открытые',
  /** Status filter: The full text for describing filtering on open (non-resolved) comments */
  'status-filter.status-open-full': 'Открытые комментарии',
  /** Status filter: The short title describing filtering on resolved comments */
  'status-filter.status-resolved': 'Разрешенные',
  /** Status filter: The full text for describing filtering on resolved comments */
  'status-filter.status-resolved-full': 'Разрешенные комментарии',
  /** Status filter: The full text for describing filtering on resolved comments and is upsell mode */
  'status-filter.status-resolved-full-upsell': 'Обновите, чтобы видеть разрешенные комментарии',
})
