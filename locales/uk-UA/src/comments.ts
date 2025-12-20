import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** The close comments button text */
  'close-pane-button-text': 'Закрити коментарі',

  /** The aria label for the close comments button */
  'close-pane-button-text-aria-label': 'Закрити коментарі',

  /** When composing a comment, the placeholder text shown when adding a comment to a field with no current comments */
  'compose.add-comment-input-placeholder': 'Додати коментар до <strong>{{field}}</strong>',
  /** When composing a comment, the placeholder text shown when adding a comment to a field with no current comments and the mode is upsell */
  'compose.add-comment-input-placeholder-upsell': 'Оновіться, щоб додати коментар',
  /** When composing a comment, the placeholder text shown when the input is empty */
  'compose.create-comment-placeholder': 'Створити новий коментар',
  /** When composing a comment, the aria label for the button to mention a user */
  'compose.mention-user-aria-label': 'Згадати користувача',
  /** When composing a comment, the tooltip text for the button to mention a user */
  'compose.mention-user-tooltip': 'Згадати користувача',
  /** When composing a reply, the placeholder text shown when the input is empty */
  'compose.reply-placeholder': 'Відповісти',
  /** When composing a reply, the placeholder text shown when the input is empty and the mode is upsell */
  'compose.reply-placeholder-upsell': 'Оновіться, щоб відповісти',
  /** When composing a comment, the aria label for the button to send a comment */
  'compose.send-comment-aria-label': 'Надіслати коментар',
  /** When composing a comment, the tooltip text for the button to send a comment */
  'compose.send-comment-tooltip': 'Надіслати коментар',

  /** The inspector text when error copying link */
  'copy-link-error-message': 'Не вдалося скопіювати посилання в буфер обміну',

  /** The delete dialog body for a comment */
  'delete-comment.body': 'Після видалення коментар неможливо відновити.',
  /** The delete dialog confirm button text for a comment */
  'delete-comment.confirm': 'Видалити коментар',
  /** The delete dialog title for a comment */
  'delete-comment.title': 'Видалити цей коментар?',

  /** The delete dialog error */
  'delete-dialog.error':
    'Під час видалення коментаря сталася помилка. Будь ласка, спробуйте ще раз.',

  /** The delete dialog body for a thread */
  'delete-thread.body':
    'Цей коментар та його відповіді будуть видалені, і після видалення їх неможливо відновити.',
  /** The delete dialog conform button text for a thread */
  'delete-thread.confirm': 'Видалити гілку',
  /** The delete dialog title for a thread */
  'delete-thread.title': 'Видалити цю гілку коментарів?',

  /** The button text for confirming discard */
  'discard.button-confirm': 'Відхилити',
  /** The header for discard comment dialog */
  'discard.header': 'Відхилити коментар?',
  /** The text for discard comment dialog */
  'discard.text': 'Ви хочете відхилити коментар?',

  /** Sharing feedback on the comments feature: The link title */
  'feature-feedback.link': 'Поділіться вашим відгуком',
  /** Sharing feedback on the comments feature: The form title  */
  'feature-feedback.title': 'Допоможіть покращити ',

  /** The name of the comments feature, for use in header. Capitalized, eg "Comments". */
  'feature-name': 'Коментарі',

  /** Aria label for button above fields to add a comment, when the field currently do not have any comments */
  'field-button.aria-label-add': 'Додати коментар',
  /** Aria label for button above fields that opens the comments for this field, when there are existing comments */
  'field-button.aria-label-open': 'Відкрити коментарі',
  /** Text shown in popover when hovering the button above fields that opens the comments panel, when there is a single comment present */
  'field-button.content_one': 'Переглянути коментар',
  /** Text shown in popover when hovering the button above fields to add a comment, when the field currently do not have any comments */
  'field-button.title': 'Додати коментар',

  /* The text shown in the inline comment button when the button is disabled due to overlap */
  'inline-add-comment-button.disabled-overlap-title': 'Коментарі не можуть перекриватися',
  /** The text shown in the inline comment button */
  'inline-add-comment-button.title': 'Додати коментар',

  /** The title of the error card shown in the comments inspector */
  'inspector-error.title': undefined, // 'Something went wrong while loading comments'

  /** Aria label for the breadcrumb button showing the field path. `{{field}}` is the last (most specific) field. */
  'list-item.breadcrumb-button-go-to-field-aria-label': 'Перейти до поля {{field}}',
  /** The button tooltip content for the add reaction button */
  'list-item.context-menu-add-reaction': 'Додати реакцію',
  /** The button tooltip aria label for adding a reaction */
  'list-item.context-menu-add-reaction-aria-label': 'Додати реакцію',
  /** The button tooltip content for the add reaction button and mode is upsell */
  'list-item.context-menu-add-reaction-upsell': 'Оновіться, щоб додати реакцію',
  /** The action menu item for copying a comment link */
  'list-item.copy-link': 'Скопіювати посилання на коментар',
  /** The action menu item for deleting a comment */
  'list-item.delete-comment': 'Видалити коментар',
  /** The action menu item for editing a comment */
  'list-item.edit-comment': 'Редагувати коментар',
  /** The action menu item for editing a comment and the mode is upsell */
  'list-item.edit-comment-upsell': 'Оновіться, щоб редагувати коментар',
  /** Aria label for the button that takes you to the field, which wraps a thread/comment */
  'list-item.go-to-field-button.aria-label': 'Перейти до поля',
  /**
   * The text shown below the author and timestamp of a comment including a link back to the context in which the comment was made.
   * Consists of a document title wrapped in a link, and a word or phrase to indicate that the link refers to a location:
   * eg "on Home", "on Coffee Machine | Products", "on Pricing – Sanity"
   */
  'list-item.layout-context': 'на <IntentLink>{{title}}</IntentLink>',
  /** The marker to indicate that a comment has been edited in brackets */
  'list-item.layout-edited': 'відредаговано',
  /** The error text when sending a comment has failed */
  'list-item.layout-failed-sent': 'Не вдалося відправити.',
  /** The loading message when posting a comment is in progress */
  'list-item.layout-posting': 'Публікація...',
  /** The text for retrying posting a comment */
  'list-item.layout-retry': 'Спробувати знову',
  /** The text shown when the value a comment references has been deleted */
  'list-item.missing-referenced-value-tooltip-content':
    'Текст, на який було залишено коментар, видалено',
  /** The aria label for the comments menu button to open the actions menu */
  'list-item.open-menu-aria-label': 'Відкрити меню дій коментаря',
  /** The button text to re-open a resolved comment  */
  'list-item.re-open-resolved': 'Відновити',
  /** The button aria label to re-open a comment that is resolved */
  'list-item.re-open-resolved-aria-label': 'Відновити',
  /** The button aria label to mark a comment as resolved */
  'list-item.resolved-tooltip-aria-label': 'Позначити коментар як вирішений',
  /** The button text to mark a comment as resolved */
  'list-item.resolved-tooltip-content': 'Позначити як вирішений',

  /** The empty state text for open comments */
  'list-status.empty-state-open-text': 'Тут будуть показані відкриті коментарі до цього документа.',
  /** The empty state title for open comments */
  'list-status.empty-state-open-title': 'Ще немає відкритих коментарів',
  /** The empty state text for resolved comments */
  'list-status.empty-state-resolved-text':
    'Розглянуті коментарі до цього документа будуть показані тут.',
  /** The empty state title for resolved comments */
  'list-status.empty-state-resolved-title': 'Ще немає розглянутих коментарів',
  /** The list status message for error */
  'list-status.error': 'Щось пішло не так',
  /** The list status message for loading status */
  'list-status.loading': 'Завантаження коментарів',

  /** Text shown when no users can be found to mention */
  'mentions.no-users-found': 'Користувачів не знайдено',
  /** Label/badge shown for users that are not authorized to see the document, and thus cannot be mentioned */
  'mentions.unauthorized-user': 'Неавторизований',
  /** Aria label for the command list for users to mention */
  'mentions.user-list-aria-label': 'Список користувачів для згадування',

  /** The comments onboarding popover text */
  'onboarding.body':
    "Ви можете додавати коментарі до будь-якого поля в документі. Вони з'являться тут, згруповані за полями.",
  /** The comments onboarding dismiss text */
  'onboarding.dismiss': 'Зрозуміло',
  /** The comments onboarding popover header text */
  'onboarding.header': 'Поля документів тепер мають коментарі',

  /** Tooltip for the button to add a reaction to a comment */
  'reactions.add-reaction-tooltip': 'Додати реакцію',
  /** Aria label for the individual reactions you can choose from when reacting to a comment */
  'reactions.react-with-aria-label': 'Реагувати з {{reactionName}}',
  /** When a users' name cannot be resolved, fall back to this name */
  'reactions.user-list.unknown-user-fallback-name': 'Невідомий користувач',
  /**
   * When showing list of users who have reacted, replaces your own name with "you", eg
   * "Donna, you, James, and Tyler reacted with 👍". A different key (`_leading` suffix)
   * is used when you are the first to react, eg "You, Donna and Tyler reacted with 👍".
   * Use `{{name}}` if you want to instead use the current users' actual name.
   */
  'reactions.user-list.you': 'ви',
  /**
   * When showing list of users who have reacted, replaces your own name with "You", eg
   * "You, Donna, James, and Tyler reacted with 👍". A different key (`_leading` suffix)
   * is used when you are not the first to react, eg "Donna, you, James and Tyler reacted with 👍".
   * Use `{{name}}` if you want to instead use the current users' actual name.
   */
  'reactions.user-list.you_leading': 'Ви',
  /**
   * The text shown for the tooltip that appears when hovering over the reaction count, eg
   * "Donna, James, and Tyler Reacted with 👍". Three components are available for use:
   * - `<UserList/>` - the list of names of users who have reacted, using the locales list format
   * - `<Text>` - should be wrapped around the text describing the action ("reacted with")
   * - `<ReactionName/>` - the name of the reaction emoji, eg ":heavy_plus_sign:"
   */
  'reactions.users-reacted-with-reaction': '<UserList/> <Text>відреагували</Text> <ReactionName/>',

  /** Status filter: The short title describing filtering on open (non-resolved) comments */
  'status-filter.status-open': 'Відкриті',
  /** Status filter: The full text for describing filtering on open (non-resolved) comments */
  'status-filter.status-open-full': 'Відкриті коментарі',
  /** Status filter: The short title describing filtering on resolved comments */
  'status-filter.status-resolved': 'Розглянуті',
  /** Status filter: The full text for describing filtering on resolved comments */
  'status-filter.status-resolved-full': 'Розглянуті коментарі',
  /** Status filter: The full text for describing filtering on resolved comments and is upsell mode */
  'status-filter.status-resolved-full-upsell': 'Оновіться, щоб бачити розглянуті коментарі',
})
