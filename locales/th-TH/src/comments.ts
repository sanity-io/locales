import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** The close comments button text */
  'close-pane-button-text': 'ปิดความคิดเห็น',

  /** The aria label for the close comments button */
  'close-pane-button-text-aria-label': 'ปิดความคิดเห็น',

  /** When composing a comment, the placeholder text shown when adding a comment to a field with no current comments */
  'compose.add-comment-input-placeholder': 'เพิ่มความคิดเห็นใน <strong>{{field}}</strong>',
  /** When composing a comment, the placeholder text shown when adding a comment to a field with no current comments and the mode is upsell */
  'compose.add-comment-input-placeholder-upsell': 'อัพเกรดเพื่อเพิ่มความคิดเห็น',
  /** When composing a comment, the placeholder text shown when the input is empty */
  'compose.create-comment-placeholder': 'สร้างความคิดเห็นใหม่',
  /** When composing a comment, the aria label for the button to mention a user */
  'compose.mention-user-aria-label': 'กล่าวถึงผู้ใช้',
  /** When composing a comment, the tooltip text for the button to mention a user */
  'compose.mention-user-tooltip': 'กล่าวถึงผู้ใช้',
  /** When composing a reply, the placeholder text shown when the input is empty */
  'compose.reply-placeholder': 'ตอบกลับ',
  /** When composing a reply, the placeholder text shown when the input is empty and the mode is upsell */
  'compose.reply-placeholder-upsell': 'อัพเกรดเพื่อตอบกลับ',
  /** When composing a comment, the aria label for the button to send a comment */
  'compose.send-comment-aria-label': 'ส่งความคิดเห็น',
  /** When composing a comment, the tooltip text for the button to send a comment */
  'compose.send-comment-tooltip': 'ส่งความคิดเห็น',

  /** The inspector text when error copying link */
  'copy-link-error-message': 'ไม่สามารถคัดลอกลิงก์ไปยังคลิปบอร์ดได้',

  /** The inspector successfully copied link text */
  'copy-link-success-message': 'คัดลอกลิงก์ไปยังคลิปบอร์ดแล้ว',

  /** The delete dialog body for a comment */
  'delete-comment.body': 'เมื่อลบแล้ว ความคิดเห็นจะไม่สามารถกู้คืนได้',
  /** The delete dialog confirm button text for a comment */
  'delete-comment.confirm': 'ลบความคิดเห็น',
  /** The delete dialog title for a comment */
  'delete-comment.title': 'ลบความคิดเห็นนี้?',

  /** The delete dialog error */
  'delete-dialog.error': 'เกิดข้อผิดพลาดขณะลบความคิดเห็น กรุณาลองอีกครั้ง',

  /** The delete dialog body for a thread */
  'delete-thread.body': 'ความคิดเห็นนี้และคำตอบที่ตามมาจะถูกลบ และเมื่อลบแล้วจะไม่สามารถกู้คืนได้',
  /** The delete dialog conform button text for a thread */
  'delete-thread.confirm': 'ลบสายความคิดเห็น',
  /** The delete dialog title for a thread */
  'delete-thread.title': 'ลบสายความคิดเห็นนี้?',

  /** The button text for confirming discard */
  'discard.button-confirm': 'ทิ้ง',
  /** The header for discard comment dialog */
  'discard.header': 'ทิ้งความคิดเห็น?',
  /** The text for discard comment dialog */
  'discard.text': 'คุณต้องการทิ้งความคิดเห็นนี้หรือไม่?',

  /** Sharing feedback on the comments feature: The link title */
  'feature-feedback.link': 'แบ่งปันความคิดเห็นของคุณ',
  /** Sharing feedback on the comments feature: The form title  */
  'feature-feedback.title': 'ช่วยปรับปรุง ',

  /** The name of the comments feature, for use in header. Capitalized, eg "Comments". */
  'feature-name': 'Comments',

  /** Aria label for button above fields to add a comment, when the field currently do not have any comments */
  'field-button.aria-label-add': 'เพิ่มความคิดเห็น',
  /** Aria label for button above fields that opens the comments for this field, when there are existing comments */
  'field-button.aria-label-open': 'เปิดความคิดเห็น',
  /** Text shown in popover when hovering the button above fields that opens the comments panel, when there are more than one comment present */
  'field-button.content_other': 'ดูความคิดเห็น',
  /** Text shown in popover when hovering the button above fields to add a comment, when the field currently do not have any comments */
  'field-button.title': 'เพิ่มความคิดเห็น',

  /** Aria label for the breadcrumb button showing the field path. `{{field}}` is the last (most specific) field. */
  'list-item.breadcrumb-button-go-to-field-aria-label': 'ไปที่ฟิลด์ {{field}}',
  /** The button tooltip content for the add reaction button */
  'list-item.context-menu-add-reaction': 'เพิ่มการตอบกลับ',
  /** The button tooltip aria label for adding a reaction */
  'list-item.context-menu-add-reaction-aria-label': 'เพิ่มการตอบกลับ',
  /** The button tooltip content for the add reaction button and mode is upsell */
  'list-item.context-menu-add-reaction-upsell': 'อัพเกรดเพื่อเพิ่มการตอบกลับ',
  /** The action menu item for copying a comment link */
  'list-item.copy-link': 'คัดลอกลิงก์ไปยังความคิดเห็น',
  /** The action menu item for deleting a comment */
  'list-item.delete-comment': 'ลบความคิดเห็น',
  /** The action menu item for editing a comment */
  'list-item.edit-comment': 'แก้ไขความคิดเห็น',
  /** The action menu item for editing a comment and the mode is upsell */
  'list-item.edit-comment-upsell': 'อัพเกรดเพื่อแก้ไขความคิดเห็น',
  /** Aria label for the button that takes you to the field, which wraps a thread/comment */
  'list-item.go-to-field-button.aria-label': 'ไปที่ฟิลด์',
  /**
   * The text shown below the author and timestamp of a comment including a link back to the context in which the comment was made.
   * Consists of a document title wrapped in a link, and a word or phrase to indicate that the link refers to a location:
   * eg "on Home", "on Coffee Machine | Products", "on Pricing – Sanity"
   */
  'list-item.layout-context': 'ที่ <IntentLink>{{title}}</IntentLink>',
  /** The marker to indicate that a comment has been edited in brackets */
  'list-item.layout-edited': 'แก้ไขแล้ว',
  /** The error text when sending a comment has failed */
  'list-item.layout-failed-sent': 'ไม่สามารถส่งได้',
  /** The loading message when posting a comment is in progress */
  'list-item.layout-posting': 'กำลังโพสต์...',
  /** The text for retrying posting a comment */
  'list-item.layout-retry': 'ลองใหม่',
  /** The aria label for the comments menu button to open the actions menu */
  'list-item.open-menu-aria-label': 'เปิดเมนูการกระทำของความคิดเห็น',
  /** The button text to re-open a resolved comment  */
  'list-item.re-open-resolved': 'เปิดใหม่',
  /** The button aria label to re-open a comment that is resolved */
  'list-item.re-open-resolved-aria-label': 'เปิดใหม่',
  /** The button aria label to mark a comment as resolved */
  'list-item.resolved-tooltip-aria-label': 'ทำเครื่องหมายความคิดเห็นว่าได้รับการแก้ไขแล้ว',
  /** The button text to mark a comment as resolved */
  'list-item.resolved-tooltip-content': 'ทำเครื่องหมายว่าได้รับการแก้ไข',

  /** The empty state text for open comments */
  'list-status.empty-state-open-text': 'ความคิดเห็นที่เปิดในเอกสารนี้จะแสดงที่นี่',
  /** The empty state title for open comments */
  'list-status.empty-state-open-title': 'ยังไม่มีความคิดเห็นที่เปิดอยู่',
  /** The empty state text for resolved comments */
  'list-status.empty-state-resolved-text': 'ความคิดเห็นที่ได้รับการแก้ไขในเอกสารนี้จะแสดงที่นี่',
  /** The empty state title for resolved comments */
  'list-status.empty-state-resolved-title': 'ยังไม่มีความคิดเห็นที่ได้รับการแก้ไข',
  /** The list status message for error */
  'list-status.error': 'เกิดข้อผิดพลาดบางอย่าง',
  /** The list status message for loading status */
  'list-status.loading': 'กำลังโหลดความคิดเห็น',

  /** Text shown when no users can be found to mention */
  'mentions.no-users-found': 'ไม่พบผู้ใช้',
  /** Label/badge shown for users that are not authorized to see the document, and thus cannot be mentioned */
  'mentions.unauthorized-user': 'ไม่ได้รับอนุญาต',
  /** Aria label for the command list for users to mention */
  'mentions.user-list-aria-label': 'รายชื่อผู้ใช้ที่จะกล่าวถึง',

  /** The comments onboarding popover text */
  'onboarding.body':
    'คุณสามารถเพิ่มความคิดเห็นในฟิลด์ใดก็ได้ในเอกสาร พวกมันจะแสดงที่นี่ จัดกลุ่มตามฟิลด์',
  /** The comments onboarding dismiss text */
  'onboarding.dismiss': 'เข้าใจแล้ว',
  /** The comments onboarding popover header text */
  'onboarding.header': 'ฟิลด์เอกสารตอนนี้มีความคิดเห็น',

  /** Tooltip for the button to add a reaction to a comment */
  'reactions.add-reaction-tooltip': 'เพิ่มการตอบกลับ',
  /** Aria label for the individual reactions you can choose from when reacting to a comment */
  'reactions.react-with-aria-label': 'ตอบกลับด้วย {{reactionName}}',
  /** When a users' name cannot be resolved, fall back to this name */
  'reactions.user-list.unknown-user-fallback-name': 'ผู้ใช้ที่ไม่รู้จัก',
  /**
   * When showing list of users who have reacted, replaces your own name with "you", eg
   * "Donna, you, James, and Tyler reacted with 👍". A different key (`_leading` suffix)
   * is used when you are the first to react, eg "You, Donna and Tyler reacted with 👍".
   * Use `{{name}}` if you want to instead use the current users' actual name.
   */
  'reactions.user-list.you': 'คุณ',
  /**
   * When showing list of users who have reacted, replaces your own name with "You", eg
   * "You, Donna, James, and Tyler reacted with 👍". A different key (`_leading` suffix)
   * is used when you are not the first to react, eg "Donna, you, James and Tyler reacted with 👍".
   * Use `{{name}}` if you want to instead use the current users' actual name.
   */
  'reactions.user-list.you_leading': 'คุณ',
  /**
   * The text shown for the tooltip that appears when hovering over the reaction count, eg
   * "Donna, James, and Tyler Reacted with 👍". Three components are available for use:
   * - `<UserList/>` - the list of names of users who have reacted, using the locales list format
   * - `<Text>` - should be wrapped around the text describing the action ("reacted with")
   * - `<ReactionName/>` - the name of the reaction emoji, eg ":heavy_plus_sign:"
   */
  'reactions.users-reacted-with-reaction':
    '<UserList/> <Text>ได้ตอบกลับด้วย</Text> <ReactionName/>',

  /** Status filter: The short title describing filtering on open (non-resolved) comments */
  'status-filter.status-open': 'เปิด',
  /** Status filter: The full text for describing filtering on open (non-resolved) comments */
  'status-filter.status-open-full': 'ความคิดเห็นที่เปิดอยู่',
  /** Status filter: The short title describing filtering on resolved comments */
  'status-filter.status-resolved': 'ได้รับการแก้ไข',
  /** Status filter: The full text for describing filtering on resolved comments */
  'status-filter.status-resolved-full': 'ความคิดเห็นที่ได้รับการแก้ไข',
  /** Status filter: The full text for describing filtering on resolved comments and is upsell mode */
  'status-filter.status-resolved-full-upsell': 'อัพเกรดเพื่อดูความคิดเห็นที่ได้รับการแก้ไข',
})
