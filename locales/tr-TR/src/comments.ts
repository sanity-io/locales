import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** The close comments button text */
  'close-pane-button-text': 'Yorumları kapat',

  /** The aria label for the close comments button */
  'close-pane-button-text-aria-label': 'Yorumları kapat',

  /** When composing a comment, the placeholder text shown when adding a comment to a field with no current comments */
  'compose.add-comment-input-placeholder': '<strong>{{field}}</strong> alanına yorum ekle',
  /** When composing a comment, the placeholder text shown when adding a comment to a field with no current comments and the mode is upsell */
  'compose.add-comment-input-placeholder-upsell': 'Yorum eklemek için yükseltme yapın',
  /** When composing a comment, the placeholder text shown when the input is empty */
  'compose.create-comment-placeholder': 'Yeni bir yorum oluştur',
  /** When composing a comment, the aria label for the button to mention a user */
  'compose.mention-user-aria-label': 'Kullanıcıyı etiketle',
  /** When composing a comment, the tooltip text for the button to mention a user */
  'compose.mention-user-tooltip': 'Kullanıcıyı etiketle',
  /** When composing a reply, the placeholder text shown when the input is empty */
  'compose.reply-placeholder': 'Yanıtla',
  /** When composing a reply, the placeholder text shown when the input is empty and the mode is upsell */
  'compose.reply-placeholder-upsell': 'Yanıtlamak için yükseltme yapın',
  /** When composing a comment, the aria label for the button to send a comment */
  'compose.send-comment-aria-label': 'Yorum gönder',
  /** When composing a comment, the tooltip text for the button to send a comment */
  'compose.send-comment-tooltip': 'Yorum gönder',

  /** The inspector text when error copying link */
  'copy-link-error-message': 'Bağlantıyı panoya kopyalamak mümkün değil',

  /** The inspector successfully copied link text */
  'copy-link-success-message': 'Bağlantı panoya kopyalandı',

  /** The delete dialog body for a comment */
  'delete-comment.body': 'Bir kez silindikten sonra, bir yorum geri alınamaz.',
  /** The delete dialog confirm button text for a comment */
  'delete-comment.confirm': 'Yorumu sil',
  /** The delete dialog title for a comment */
  'delete-comment.title': 'Bu yorumu sil?',

  /** The delete dialog error */
  'delete-dialog.error': 'Yorum silinirken bir hata oluştu. Lütfen tekrar deneyin.',

  /** The delete dialog body for a thread */
  'delete-thread.body':
    'Bu yorum ve yanıtları silinecek ve bir kez silindikten sonra geri alınamaz.',
  /** The delete dialog conform button text for a thread */
  'delete-thread.confirm': 'İletiyi sil',
  /** The delete dialog title for a thread */
  'delete-thread.title': 'Bu yorum zincirini sil?',

  /** The button text for confirming discard */
  'discard.button-confirm': 'Vazgeç',
  /** The header for discard comment dialog */
  'discard.header': 'Yorumu silmek istiyor musunuz?',
  /** The text for discard comment dialog */
  'discard.text': 'Yorumu silmek istediğinize emin misiniz?',

  /** Sharing feedback on the comments feature: The link title */
  'feature-feedback.link': 'Geri bildiriminizi paylaşın',
  /** Sharing feedback on the comments feature: The form title  */
  'feature-feedback.title': 'Geliştirmeye yardımcı olun ',

  /** The name of the comments feature, for use in header. Capitalized, eg "Comments". */
  'feature-name': 'Yorumlar',

  /** Aria label for button above fields to add a comment, when the field currently do not have any comments */
  'field-button.aria-label-add': 'Yorum ekle',
  /** Aria label for button above fields that opens the comments for this field, when there are existing comments */
  'field-button.aria-label-open': 'Yorumları aç',
  /** Text shown in popover when hovering the button above fields that opens the comments panel, when there is a single comment present */
  'field-button.content_one': 'Yorumu görüntüle',
  /** Text shown in popover when hovering the button above fields that opens the comments panel, when there are more than one comment present */
  'field-button.content_other': 'Yorumları görüntüle',
  /** Text shown in popover when hovering the button above fields to add a comment, when the field currently do not have any comments */
  'field-button.title': 'Yorum ekle',

  /** Aria label for the breadcrumb button showing the field path. `{{field}}` is the last (most specific) field. */
  'list-item.breadcrumb-button-go-to-field-aria-label': '{{field}} alanına git',
  /** The button tooltip content for the add reaction button */
  'list-item.context-menu-add-reaction': 'Tepki ekle',
  /** The button tooltip aria label for adding a reaction */
  'list-item.context-menu-add-reaction-aria-label': 'Tepki ekle',
  /** The button tooltip content for the add reaction button and mode is upsell */
  'list-item.context-menu-add-reaction-upsell': 'Tepki eklemek için yükseltme yapın',
  /** The action menu item for copying a comment link */
  'list-item.copy-link': 'Yorum bağlantısını kopyala',
  /** The action menu item for deleting a comment */
  'list-item.delete-comment': 'Yorumu sil',
  /** The action menu item for editing a comment */
  'list-item.edit-comment': 'Yorumu düzenle',
  /** The action menu item for editing a comment and the mode is upsell */
  'list-item.edit-comment-upsell': 'Yorumu düzenlemek için yükseltme yapın',
  /** Aria label for the button that takes you to the field, which wraps a thread/comment */
  'list-item.go-to-field-button.aria-label': 'Alana git',
  /** The marker to indicate that a comment has been edited in brackets */
  'list-item.layout-edited': 'düzenlendi',
  /** The error text when sending a comment has failed */
  'list-item.layout-failed-sent': 'Gönderilemedi.',
  /** The loading message when posting a comment is in progress */
  'list-item.layout-posting': 'Gönderiliyor...',
  /** The text for retrying posting a comment */
  'list-item.layout-retry': 'Yeniden dene',
  /** The aria label for the comments menu button to open the actions menu */
  'list-item.open-menu-aria-label': 'Yorum işlemleri menüsünü aç',
  /** The button text to re-open a resolved comment  */
  'list-item.re-open-resolved': 'Yeniden aç',
  /** The button aria label to re-open a comment that is resolved */
  'list-item.re-open-resolved-aria-label': 'Yeniden aç',
  /** The button aria label to mark a comment as resolved */
  'list-item.resolved-tooltip-aria-label': 'Yorumu çözüldü olarak işaretle',
  /** The button text to mark a comment as resolved */
  'list-item.resolved-tooltip-content': 'Çözüldü olarak işaretle',

  /** The empty state text for open comments */
  'list-status.empty-state-open-text': 'Bu belgedeki açık yorumlar burada gösterilecek.',
  /** The empty state title for open comments */
  'list-status.empty-state-open-title': 'Henüz açık yorum yok',
  /** The empty state text for resolved comments */
  'list-status.empty-state-resolved-text': 'Bu belgedeki çözümlenen yorumlar burada gösterilecek.',
  /** The empty state title for resolved comments */
  'list-status.empty-state-resolved-title': 'Henüz çözümlenen yorum yok',
  /** The list status message for error */
  'list-status.error': 'Bir şeyler ters gitti',
  /** The list status message for loading status */
  'list-status.loading': 'Yorumlar yükleniyor',

  /** Text shown when no users can be found to mention */
  'mentions.no-users-found': 'Kullanıcı bulunamadı',
  /** Label/badge shown for users that are not authorized to see the document, and thus cannot be mentioned */
  'mentions.unauthorized-user': 'Yetkisiz',
  /** Aria label for the command list for users to mention */
  'mentions.user-list-aria-label': 'Bahsedilecek kullanıcıların listesi',

  /** The comments onboarding popover text */
  'onboarding.body':
    'Bir belgedeki herhangi bir alana yorum ekleyebilirsiniz. Yorumlar burada, alana göre gruplandırılmış şekilde gösterilecek.',
  /** The comments onboarding dismiss text */
  'onboarding.dismiss': 'Anladım',
  /** The comments onboarding popover header text */
  'onboarding.header': 'Belge alanlarında artık yorumlar var',

  /** Tooltip for the button to add a reaction to a comment */
  'reactions.add-reaction-tooltip': 'Tepki ekle',
  /** Aria label for the individual reactions you can choose from when reacting to a comment */
  'reactions.react-with-aria-label': '{{reactionName}} ile tepki ver',
  /** When a users' name cannot be resolved, fall back to this name */
  'reactions.user-list.unknown-user-fallback-name': 'Bilinmeyen kullanıcı',
  /**
   * When showing list of users who have reacted, replaces your own name with "you", eg
   * "Donna, you, James, and Tyler reacted with 👍". A different key (`_leading` suffix)
   * is used when you are the first to react, eg "You, Donna and Tyler reacted with 👍".
   * Use `{{name}}` if you want to instead use the current users' actual name.
   */
  'reactions.user-list.you': 'sen',
  /**
   * When showing list of users who have reacted, replaces your own name with "You", eg
   * "You, Donna, James, and Tyler reacted with 👍". A different key (`_leading` suffix)
   * is used when you are not the first to react, eg "Donna, you, James and Tyler reacted with 👍".
   * Use `{{name}}` if you want to instead use the current users' actual name.
   */
  'reactions.user-list.you_leading': 'Sen',
  /**
   * The text shown for the tooltip that appears when hovering over the reaction count, eg
   * "Donna, James, and Tyler Reacted with 👍". Three components are available for use:
   * - `<UserList/>` - the list of names of users who have reacted, using the locales list format
   * - `<Text>` - should be wrapped around the text describing the action ("reacted with")
   * - `<ReactionName/>` - the name of the reaction emoji, eg ":heavy_plus_sign:"
   */
  'reactions.users-reacted-with-reaction':
    '<UserList/> <Text>ile tepki verdi</Text> <ReactionName/>',

  /** Status filter: The short title describing filtering on open (non-resolved) comments */
  'status-filter.status-open': 'Açık',
  /** Status filter: The full text for describing filtering on open (non-resolved) comments */
  'status-filter.status-open-full': 'Açık yorumlar',
  /** Status filter: The short title describing filtering on resolved comments */
  'status-filter.status-resolved': 'Çözümlendi',
  /** Status filter: The full text for describing filtering on resolved comments */
  'status-filter.status-resolved-full': 'Çözümlenen yorumlar',
  /** Status filter: The full text for describing filtering on resolved comments and is upsell mode */
  'status-filter.status-resolved-full-upsell': 'Çözümlenen yorumları görmek için yükseltme yapın',
})
