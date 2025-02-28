import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** The close comments button text */
  'close-pane-button-text': 'Зачыніць каментары',

  /** The aria label for the close comments button */
  'close-pane-button-text-aria-label': 'Зачыніць каментары',

  /** When composing a comment, the placeholder text shown when adding a comment to a field with no current comments */
  'compose.add-comment-input-placeholder': 'Дадаць каментар да <strong>{{field}}</strong>',
  /** When composing a comment, the placeholder text shown when adding a comment to a field with no current comments and the mode is upsell */
  'compose.add-comment-input-placeholder-upsell': 'Абнавіце, каб дадаць каментар',
  /** When composing a comment, the placeholder text shown when the input is empty */
  'compose.create-comment-placeholder': 'Стварыць новы каментар',
  /** When composing a comment, the aria label for the button to mention a user */
  'compose.mention-user-aria-label': 'Згадаць карыстальніка',
  /** When composing a comment, the tooltip text for the button to mention a user */
  'compose.mention-user-tooltip': 'Згадаць карыстальніка',
  /** When composing a reply, the placeholder text shown when the input is empty */
  'compose.reply-placeholder': 'Адказаць',
  /** When composing a reply, the placeholder text shown when the input is empty and the mode is upsell */
  'compose.reply-placeholder-upsell': 'Абнавіце, каб адказаць',
  /** When composing a comment, the aria label for the button to send a comment */
  'compose.send-comment-aria-label': 'Адправіць каментар',
  /** When composing a comment, the tooltip text for the button to send a comment */
  'compose.send-comment-tooltip': 'Адправіць каментар',

  /** The inspector text when error copying link */
  'copy-link-error-message': 'Не ўдалося скапіраваць спасылку ў буфер абмену',

  /** The delete dialog body for a comment */
  'delete-comment.body': 'Пасля выдалення каментар немагчыма аднавіць.',
  /** The delete dialog confirm button text for a comment */
  'delete-comment.confirm': 'Выдаліць каментар',
  /** The delete dialog title for a comment */
  'delete-comment.title': 'Выдаліць гэты каментар?',

  /** The delete dialog error */
  'delete-dialog.error':
    'Пры выдаленні каментара адбылася памылка. Калі ласка, паспрабуйце яшчэ раз.',

  /** The delete dialog body for a thread */
  'delete-thread.body':
    'Гэты каментар і яго адказы будуць выдалены, і пасля выдалення іх немагчыма будзе аднавіць.',
  /** The delete dialog conform button text for a thread */
  'delete-thread.confirm': 'Выдаліць галіну',
  /** The delete dialog title for a thread */
  'delete-thread.title': 'Выдаліць гэтую галіну каментароў?',

  /** The button text for confirming discard */
  'discard.button-confirm': 'Адхіліць',
  /** The header for discard comment dialog */
  'discard.header': 'Адхіліць каментар?',
  /** The text for discard comment dialog */
  'discard.text': 'Вы хочаце адхіліць каментар?',

  /** Sharing feedback on the comments feature: The link title */
  'feature-feedback.link': 'Падзяліцеся сваімі меркаваннямі',
  /** Sharing feedback on the comments feature: The form title  */
  'feature-feedback.title': 'Дапамажыце палепшыць ',

  /** The name of the comments feature, for use in header. Capitalized, eg "Comments". */
  'feature-name': 'Comments',

  /** Aria label for button above fields to add a comment, when the field currently do not have any comments */
  'field-button.aria-label-add': 'Дадаць каментарый',
  /** Aria label for button above fields that opens the comments for this field, when there are existing comments */
  'field-button.aria-label-open': 'Адкрыць каментарыі',
  /** Text shown in popover when hovering the button above fields that opens the comments panel, when there is a single comment present */
  'field-button.content_one': 'Праглядзець каментарый',
  /** Text shown in popover when hovering the button above fields to add a comment, when the field currently do not have any comments */
  'field-button.title': 'Дадаць каментарый',

  /* The text shown in the inline comment button when the button is disabled due to overlap */
  'inline-add-comment-button.disabled-overlap-title': 'Каментарыі не могуць перакрывацца',
  /** The text shown in the inline comment button */
  'inline-add-comment-button.title': 'Дадаць каментарый',

  /** Aria label for the breadcrumb button showing the field path. `{{field}}` is the last (most specific) field. */
  'list-item.breadcrumb-button-go-to-field-aria-label': 'Перайсці да поля {{field}}',
  /** The button tooltip content for the add reaction button */
  'list-item.context-menu-add-reaction': 'Дадаць рэакцыю',
  /** The button tooltip aria label for adding a reaction */
  'list-item.context-menu-add-reaction-aria-label': 'Дадаць рэакцыю',
  /** The button tooltip content for the add reaction button and mode is upsell */
  'list-item.context-menu-add-reaction-upsell': 'Абнавіць, каб дадаць рэакцыю',
  /** The action menu item for copying a comment link */
  'list-item.copy-link': 'Скапіяваць спасылку на каментарый',
  /** The action menu item for deleting a comment */
  'list-item.delete-comment': 'Выдаліць каментарый',
  /** The action menu item for editing a comment */
  'list-item.edit-comment': 'Рэдагаваць каментарый',
  /** The action menu item for editing a comment and the mode is upsell */
  'list-item.edit-comment-upsell': 'Абнавіць, каб рэдагаваць каментарый',
  /** Aria label for the button that takes you to the field, which wraps a thread/comment */
  'list-item.go-to-field-button.aria-label': 'Перайсці да поля',
  /**
   * The text shown below the author and timestamp of a comment including a link back to the context in which the comment was made.
   * Consists of a document title wrapped in a link, and a word or phrase to indicate that the link refers to a location:
   * eg "on Home", "on Coffee Machine | Products", "on Pricing – Sanity"
   */
  'list-item.layout-context': 'на <IntentLink>{{title}}</IntentLink>',
  /** The marker to indicate that a comment has been edited in brackets */
  'list-item.layout-edited': 'адрэдагавана',
  /** The error text when sending a comment has failed */
  'list-item.layout-failed-sent': 'Не ўдалося адправіць.',
  /** The loading message when posting a comment is in progress */
  'list-item.layout-posting': 'Адпраўленне...',
  /** The text for retrying posting a comment */
  'list-item.layout-retry': 'Паспрабаваць зноў',
  /** The text shown when the value a comment references has been deleted */
  'list-item.missing-referenced-value-tooltip-content': 'Каментаваны тэкст быў выдалены',
  /** The aria label for the comments menu button to open the actions menu */
  'list-item.open-menu-aria-label': 'Адкрыць меню дзеянняў каментарыя',
  /** The button text to re-open a resolved comment  */
  'list-item.re-open-resolved': 'Адкрыць зноў',
  /** The button aria label to re-open a comment that is resolved */
  'list-item.re-open-resolved-aria-label': 'Зноў адкрыць',
  /** The button aria label to mark a comment as resolved */
  'list-item.resolved-tooltip-aria-label': 'Пазначыць каментарый як вырашаны',
  /** The button text to mark a comment as resolved */
  'list-item.resolved-tooltip-content': 'Пазначыць як вырашаны',

  /** The empty state text for open comments */
  'list-status.empty-state-open-text':
    'Тут будуць паказаны адкрытыя каментарыі да гэтага дакумента.',
  /** The empty state title for open comments */
  'list-status.empty-state-open-title': 'Пакуль няма адкрытых каментарыяў',
  /** The empty state text for resolved comments */
  'list-status.empty-state-resolved-text':
    'Вырашаныя каментарыі да гэтага дакумента будуць паказаны тут.',
  /** The empty state title for resolved comments */
  'list-status.empty-state-resolved-title': 'Пакуль што няма вырашаных каментароў',
  /** The list status message for error */
  'list-status.error': 'Нешта пайшло не так',
  /** The list status message for loading status */
  'list-status.loading': 'Загрузка каментароў',

  /** Text shown when no users can be found to mention */
  'mentions.no-users-found': 'Карыстальнікі не знойдзены',
  /** Label/badge shown for users that are not authorized to see the document, and thus cannot be mentioned */
  'mentions.unauthorized-user': 'Неаўтарызаваны',
  /** Aria label for the command list for users to mention */
  'mentions.user-list-aria-label': 'Спіс карыстальнікаў для згадкі',

  /** The comments onboarding popover text */
  'onboarding.body':
    'Вы можаце дадаваць каментарыі да любога поля ў дакуменце. Яны будуць паказаны тут, сгрупаваныя па полі.',
  /** The comments onboarding dismiss text */
  'onboarding.dismiss': 'Зразумела',
  /** The comments onboarding popover header text */
  'onboarding.header': 'Палі дакументаў цяпер маюць каментарыі',

  /** Tooltip for the button to add a reaction to a comment */
  'reactions.add-reaction-tooltip': 'Дадаць рэакцыю',
  /** Aria label for the individual reactions you can choose from when reacting to a comment */
  'reactions.react-with-aria-label': 'Рэагаваць з {{reactionName}}',
  /** When a users' name cannot be resolved, fall back to this name */
  'reactions.user-list.unknown-user-fallback-name': 'Невядомы карыстальнік',
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
  'reactions.users-reacted-with-reaction': '<UserList/> <Text>рэагавалі з</Text> <ReactionName/>',

  /** Status filter: The short title describing filtering on open (non-resolved) comments */
  'status-filter.status-open': 'Адкрытыя',
  /** Status filter: The full text for describing filtering on open (non-resolved) comments */
  'status-filter.status-open-full': 'Адкрытыя каментарыі',
  /** Status filter: The short title describing filtering on resolved comments */
  'status-filter.status-resolved': 'Вырашаныя',
  /** Status filter: The full text for describing filtering on resolved comments */
  'status-filter.status-resolved-full': 'Вырашаныя каментарыі',
  /** Status filter: The full text for describing filtering on resolved comments and is upsell mode */
  'status-filter.status-resolved-full-upsell': 'Абнавіце, каб убачыць вырашаныя каментарыі',
})
