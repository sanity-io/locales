import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** The close comments button text */
  'close-pane-button-text': 'إغلاق التعليقات',

  /** The aria label for the close comments button */
  'close-pane-button-text-aria-label': 'إغلاق التعليقات',

  /** When composing a comment, the placeholder text shown when adding a comment to a field with no current comments */
  'compose.add-comment-input-placeholder': 'أضف تعليقًا إلى <strong>{{field}}</strong>',
  /** When composing a comment, the placeholder text shown when adding a comment to a field with no current comments and the mode is upsell */
  'compose.add-comment-input-placeholder-upsell': 'ترقية لإضافة تعليق',
  /** When composing a comment, the placeholder text shown when the input is empty */
  'compose.create-comment-placeholder': 'إنشاء تعليق جديد',
  /** When composing a comment, the aria label for the button to mention a user */
  'compose.mention-user-aria-label': 'ذكر المستخدم',
  /** When composing a comment, the tooltip text for the button to mention a user */
  'compose.mention-user-tooltip': 'ذكر المستخدم',
  /** When composing a reply, the placeholder text shown when the input is empty */
  'compose.reply-placeholder': 'رد',
  /** When composing a reply, the placeholder text shown when the input is empty and the mode is upsell */
  'compose.reply-placeholder-upsell': 'ترقية للرد',
  /** When composing a comment, the aria label for the button to send a comment */
  'compose.send-comment-aria-label': 'إرسال التعليق',
  /** When composing a comment, the tooltip text for the button to send a comment */
  'compose.send-comment-tooltip': 'إرسال التعليق',

  /** The inspector text when error copying link */
  'copy-link-error-message': 'تعذر نسخ الرابط إلى الحافظة',

  /** The inspector successfully copied link text */
  'copy-link-success-message': 'تم نسخ الرابط إلى الحافظة',

  /** The delete dialog body for a comment */
  'delete-comment.body': 'بمجرد الحذف، لا يمكن استرداد التعليق.',
  /** The delete dialog confirm button text for a comment */
  'delete-comment.confirm': 'حذف التعليق',
  /** The delete dialog title for a comment */
  'delete-comment.title': 'حذف هذا التعليق؟',

  /** The delete dialog error */
  'delete-dialog.error': 'حدث خطأ أثناء حذف التعليق. الرجاء المحاولة مرة أخرى.',

  /** The delete dialog body for a thread */
  'delete-thread.body': 'سيتم حذف هذا التعليق وردوده، وبمجرد الحذف لا يمكن استردادها.',
  /** The delete dialog conform button text for a thread */
  'delete-thread.confirm': 'حذف الموضوع',
  /** The delete dialog title for a thread */
  'delete-thread.title': 'حذف موضوع التعليق هذا؟',

  /** The button text for confirming discard */
  'discard.button-confirm': 'تجاهل',
  /** The header for discard comment dialog */
  'discard.header': 'تجاهل التعليق؟',
  /** The text for discard comment dialog */
  'discard.text': 'هل تريد تجاهل التعليق؟',

  /** Sharing feedback on the comments feature: The link title */
  'feature-feedback.link': 'شارك بملاحظاتك',
  /** Sharing feedback on the comments feature: The form title  */
  'feature-feedback.title': 'ساعد في التحسين ',

  /** The name of the comments feature, for use in header. Capitalized, eg "Comments". */
  'feature-name': 'التعليقات',

  /** Aria label for button above fields to add a comment, when the field currently do not have any comments */
  'field-button.aria-label-add': 'أضف تعليقًا',
  /** Aria label for button above fields that opens the comments for this field, when there are existing comments */
  'field-button.aria-label-open': 'افتح التعليقات',
  /** Text shown in popover when hovering the button above fields that opens the comments panel, when there is a single comment present */
  'field-button.content_one': 'عرض التعليق',
  /** Text shown in popover when hovering the button above fields to add a comment, when the field currently do not have any comments */
  'field-button.title': 'أضف تعليقًا',

  /* The text shown in the inline comment button when the button is disabled due to overlap */
  'inline-add-comment-button.disabled-overlap-title': 'لا يمكن أن تتداخل التعليقات',
  /** The text shown in the inline comment button */
  'inline-add-comment-button.title': 'أضف تعليقًا',

  /** Aria label for the breadcrumb button showing the field path. `{{field}}` is the last (most specific) field. */
  'list-item.breadcrumb-button-go-to-field-aria-label': 'اذهب إلى حقل {{field}}',
  /** The button tooltip content for the add reaction button */
  'list-item.context-menu-add-reaction': 'أضف رد فعل',
  /** The button tooltip aria label for adding a reaction */
  'list-item.context-menu-add-reaction-aria-label': 'أضف رد فعل',
  /** The button tooltip content for the add reaction button and mode is upsell */
  'list-item.context-menu-add-reaction-upsell': 'ترقية لإضافة رد فعل',
  /** The action menu item for copying a comment link */
  'list-item.copy-link': 'انسخ رابط التعليق',
  /** The action menu item for deleting a comment */
  'list-item.delete-comment': 'حذف التعليق',
  /** The action menu item for editing a comment */
  'list-item.edit-comment': 'تعديل التعليق',
  /** The action menu item for editing a comment and the mode is upsell */
  'list-item.edit-comment-upsell': 'ترقية لتعديل التعليق',
  /** Aria label for the button that takes you to the field, which wraps a thread/comment */
  'list-item.go-to-field-button.aria-label': 'اذهب إلى الحقل',
  /**
   * The text shown below the author and timestamp of a comment including a link back to the context in which the comment was made.
   * Consists of a document title wrapped in a link, and a word or phrase to indicate that the link refers to a location:
   * eg "on Home", "on Coffee Machine | Products", "on Pricing – Sanity"
   */
  'list-item.layout-context': 'على <IntentLink>{{title}}</IntentLink>',
  /** The marker to indicate that a comment has been edited in brackets */
  'list-item.layout-edited': 'تم التعديل',
  /** The error text when sending a comment has failed */
  'list-item.layout-failed-sent': 'فشل في الإرسال.',
  /** The loading message when posting a comment is in progress */
  'list-item.layout-posting': 'جاري النشر...',
  /** The text for retrying posting a comment */
  'list-item.layout-retry': 'أعد المحاولة',
  /** The text shown when the value a comment references has been deleted */
  'list-item.missing-referenced-value-tooltip-content': 'تم حذف النص المعلق عليه',
  /** The aria label for the comments menu button to open the actions menu */
  'list-item.open-menu-aria-label': 'افتح قائمة إجراءات التعليق',
  /** The button text to re-open a resolved comment  */
  'list-item.re-open-resolved': 'أعد فتح',
  /** The button aria label to re-open a comment that is resolved */
  'list-item.re-open-resolved-aria-label': 'أعد فتح',
  /** The button aria label to mark a comment as resolved */
  'list-item.resolved-tooltip-aria-label': 'وسم التعليق كمحلول',
  /** The button text to mark a comment as resolved */
  'list-item.resolved-tooltip-content': 'وسم كمحلول',

  /** The empty state text for open comments */
  'list-status.empty-state-open-text': 'سيتم عرض التعليقات المفتوحة على هذا المستند هنا.',
  /** The empty state title for open comments */
  'list-status.empty-state-open-title': 'لا يوجد تعليقات مفتوحة بعد',
  /** The empty state text for resolved comments */
  'list-status.empty-state-resolved-text': 'سيتم عرض التعليقات المحلولة على هذا المستند هنا.',
  /** The empty state title for resolved comments */
  'list-status.empty-state-resolved-title': 'لا يوجد تعليقات محلولة بعد',
  /** The list status message for error */
  'list-status.error': 'حدث خطأ ما',
  /** The list status message for loading status */
  'list-status.loading': 'جاري تحميل التعليقات',

  /** Text shown when no users can be found to mention */
  'mentions.no-users-found': 'لم يتم العثور على مستخدمين',
  /** Label/badge shown for users that are not authorized to see the document, and thus cannot be mentioned */
  'mentions.unauthorized-user': 'غير مصرح',
  /** Aria label for the command list for users to mention */
  'mentions.user-list-aria-label': 'قائمة المستخدمين للإشارة إليهم',

  /** The comments onboarding popover text */
  'onboarding.body': 'يمكنك إضافة تعليقات إلى أي حقل في مستند. ستظهر هنا، مجمعة حسب الحقل.',
  /** The comments onboarding dismiss text */
  'onboarding.dismiss': 'فهمت',
  /** The comments onboarding popover header text */
  'onboarding.header': 'حقول المستندات الآن تحتوي على تعليقات',

  /** Tooltip for the button to add a reaction to a comment */
  'reactions.add-reaction-tooltip': 'إضافة رد فعل',
  /** Aria label for the individual reactions you can choose from when reacting to a comment */
  'reactions.react-with-aria-label': 'رد مع {{reactionName}}',
  /** When a users' name cannot be resolved, fall back to this name */
  'reactions.user-list.unknown-user-fallback-name': 'مستخدم غير معروف',
  /**
   * When showing list of users who have reacted, replaces your own name with "you", eg
   * "Donna, you, James, and Tyler reacted with 👍". A different key (`_leading` suffix)
   * is used when you are the first to react, eg "You, Donna and Tyler reacted with 👍".
   * Use `{{name}}` if you want to instead use the current users' actual name.
   */
  'reactions.user-list.you': 'أنت',
  /**
   * When showing list of users who have reacted, replaces your own name with "You", eg
   * "You, Donna, James, and Tyler reacted with 👍". A different key (`_leading` suffix)
   * is used when you are not the first to react, eg "Donna, you, James and Tyler reacted with 👍".
   * Use `{{name}}` if you want to instead use the current users' actual name.
   */
  'reactions.user-list.you_leading': 'أنت',
  /**
   * The text shown for the tooltip that appears when hovering over the reaction count, eg
   * "Donna, James, and Tyler Reacted with 👍". Three components are available for use:
   * - `<UserList/>` - the list of names of users who have reacted, using the locales list format
   * - `<Text>` - should be wrapped around the text describing the action ("reacted with")
   * - `<ReactionName/>` - the name of the reaction emoji, eg ":heavy_plus_sign:"
   */
  'reactions.users-reacted-with-reaction':
    '<UserList/> <Text>قاموا بالرد مع</Text> <ReactionName/>',

  /** Status filter: The short title describing filtering on open (non-resolved) comments */
  'status-filter.status-open': 'مفتوح',
  /** Status filter: The full text for describing filtering on open (non-resolved) comments */
  'status-filter.status-open-full': 'التعليقات المفتوحة',
  /** Status filter: The short title describing filtering on resolved comments */
  'status-filter.status-resolved': 'محلول',
  /** Status filter: The full text for describing filtering on resolved comments */
  'status-filter.status-resolved-full': 'التعليقات المحلولة',
  /** Status filter: The full text for describing filtering on resolved comments and is upsell mode */
  'status-filter.status-resolved-full-upsell': 'ترقية لرؤية التعليقات المحلولة',
})
