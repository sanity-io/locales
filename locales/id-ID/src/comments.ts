import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** The close comments button text */
  'close-pane-button-text': 'Tutup komentar',

  /** The aria label for the close comments button */
  'close-pane-button-text-aria-label': 'Tutup komentar',

  /** When composing a comment, the placeholder text shown when adding a comment to a field with no current comments */
  'compose.add-comment-input-placeholder': 'Tambahkan komentar ke <strong>{{field}}</strong>',
  /** When composing a comment, the placeholder text shown when adding a comment to a field with no current comments and the mode is upsell */
  'compose.add-comment-input-placeholder-upsell': 'Tingkatkan untuk menambahkan komentar',
  /** When composing a comment, the placeholder text shown when the input is empty */
  'compose.create-comment-placeholder': 'Buat komentar baru',
  /** When composing a comment, the aria label for the button to mention a user */
  'compose.mention-user-aria-label': 'Sebutkan pengguna',
  /** When composing a comment, the tooltip text for the button to mention a user */
  'compose.mention-user-tooltip': 'Sebutkan pengguna',
  /** When composing a reply, the placeholder text shown when the input is empty */
  'compose.reply-placeholder': 'Balas',
  /** When composing a reply, the placeholder text shown when the input is empty and the mode is upsell */
  'compose.reply-placeholder-upsell': 'Tingkatkan untuk membalas',
  /** When composing a comment, the aria label for the button to send a comment */
  'compose.send-comment-aria-label': 'Kirim komentar',
  /** When composing a comment, the tooltip text for the button to send a comment */
  'compose.send-comment-tooltip': 'Kirim komentar',

  /** The inspector text when error copying link */
  'copy-link-error-message': 'Tidak dapat menyalin tautan ke papan klip',

  /** The delete dialog body for a comment */
  'delete-comment.body': 'Setelah dihapus, komentar tidak dapat dipulihkan.',
  /** The delete dialog confirm button text for a comment */
  'delete-comment.confirm': 'Hapus komentar',
  /** The delete dialog title for a comment */
  'delete-comment.title': 'Hapus komentar ini?',

  /** The delete dialog error */
  'delete-dialog.error': 'Terjadi kesalahan saat menghapus komentar. Silakan coba lagi.',

  /** The delete dialog body for a thread */
  'delete-thread.body':
    'Komentar ini dan balasannya akan dihapus, dan setelah dihapus tidak dapat dipulihkan.',
  /** The delete dialog conform button text for a thread */
  'delete-thread.confirm': 'Hapus utas',
  /** The delete dialog title for a thread */
  'delete-thread.title': 'Hapus utas komentar ini?',

  /** The button text for confirming discard */
  'discard.button-confirm': 'Buang',
  /** The header for discard comment dialog */
  'discard.header': 'Buang komentar?',
  /** The text for discard comment dialog */
  'discard.text': 'Apakah Anda ingin membuang komentar?',

  /** Sharing feedback on the comments feature: The link title */
  'feature-feedback.link': 'Bagikan umpan balik Anda',
  /** Sharing feedback on the comments feature: The form title  */
  'feature-feedback.title': 'Bantu meningkatkan ',

  /** The name of the comments feature, for use in header. Capitalized, eg "Comments". */
  'feature-name': 'Komentar',

  /** Aria label for button above fields to add a comment, when the field currently do not have any comments */
  'field-button.aria-label-add': 'Tambahkan komentar',
  /** Aria label for button above fields that opens the comments for this field, when there are existing comments */
  'field-button.aria-label-open': 'Buka komentar',
  /** Text shown in popover when hovering the button above fields that opens the comments panel, when there are more than one comment present */
  'field-button.content_other': 'Lihat komentar',
  /** Text shown in popover when hovering the button above fields to add a comment, when the field currently do not have any comments */
  'field-button.title': 'Tambahkan komentar',

  /* The text shown in the inline comment button when the button is disabled due to overlap */
  'inline-add-comment-button.disabled-overlap-title': 'Komentar tidak dapat tumpang tindih',
  /** The text shown in the inline comment button */
  'inline-add-comment-button.title': 'Tambahkan komentar',

  /** Aria label for the breadcrumb button showing the field path. `{{field}}` is the last (most specific) field. */
  'list-item.breadcrumb-button-go-to-field-aria-label': 'Pergi ke bidang {{field}}',
  /** The button tooltip content for the add reaction button */
  'list-item.context-menu-add-reaction': 'Tambahkan reaksi',
  /** The button tooltip aria label for adding a reaction */
  'list-item.context-menu-add-reaction-aria-label': 'Tambahkan reaksi',
  /** The button tooltip content for the add reaction button and mode is upsell */
  'list-item.context-menu-add-reaction-upsell': 'Tingkatkan untuk menambahkan reaksi',
  /** The action menu item for copying a comment link */
  'list-item.copy-link': 'Salin tautan ke komentar',
  /** The action menu item for deleting a comment */
  'list-item.delete-comment': 'Hapus komentar',
  /** The action menu item for editing a comment */
  'list-item.edit-comment': 'Edit komentar',
  /** The action menu item for editing a comment and the mode is upsell */
  'list-item.edit-comment-upsell': 'Tingkatkan untuk mengedit komentar',
  /** Aria label for the button that takes you to the field, which wraps a thread/comment */
  'list-item.go-to-field-button.aria-label': 'Pergi ke bidang',
  /**
   * The text shown below the author and timestamp of a comment including a link back to the context in which the comment was made.
   * Consists of a document title wrapped in a link, and a word or phrase to indicate that the link refers to a location:
   * eg "on Home", "on Coffee Machine | Products", "on Pricing – Sanity"
   */
  'list-item.layout-context': 'di <IntentLink>{{title}}</IntentLink>',
  /** The marker to indicate that a comment has been edited in brackets */
  'list-item.layout-edited': 'diedit',
  /** The error text when sending a comment has failed */
  'list-item.layout-failed-sent': 'Gagal mengirim.',
  /** The loading message when posting a comment is in progress */
  'list-item.layout-posting': 'Mengirim...',
  /** The text for retrying posting a comment */
  'list-item.layout-retry': 'Coba lagi',
  /** The text shown when the value a comment references has been deleted */
  'list-item.missing-referenced-value-tooltip-content': 'Teks yang dikomentari telah dihapus',
  /** The aria label for the comments menu button to open the actions menu */
  'list-item.open-menu-aria-label': 'Buka menu aksi komentar',
  /** The button text to re-open a resolved comment  */
  'list-item.re-open-resolved': 'Buka kembali',
  /** The button aria label to re-open a comment that is resolved */
  'list-item.re-open-resolved-aria-label': 'Buka kembali',
  /** The button aria label to mark a comment as resolved */
  'list-item.resolved-tooltip-aria-label': 'Tandai komentar sebagai terselesaikan',
  /** The button text to mark a comment as resolved */
  'list-item.resolved-tooltip-content': 'Tandai sebagai terselesaikan',

  /** The empty state text for open comments */
  'list-status.empty-state-open-text':
    'Komentar terbuka pada dokumen ini akan ditampilkan di sini.',
  /** The empty state title for open comments */
  'list-status.empty-state-open-title': 'Belum ada komentar terbuka',
  /** The empty state text for resolved comments */
  'list-status.empty-state-resolved-text':
    'Komentar yang telah terselesaikan pada dokumen ini akan ditampilkan di sini.',
  /** The empty state title for resolved comments */
  'list-status.empty-state-resolved-title': 'Belum ada komentar yang terselesaikan',
  /** The list status message for error */
  'list-status.error': 'Terjadi kesalahan',
  /** The list status message for loading status */
  'list-status.loading': 'Memuat komentar',

  /** Text shown when no users can be found to mention */
  'mentions.no-users-found': 'Tidak ada pengguna yang ditemukan',
  /** Label/badge shown for users that are not authorized to see the document, and thus cannot be mentioned */
  'mentions.unauthorized-user': 'Tidak berwenang',
  /** Aria label for the command list for users to mention */
  'mentions.user-list-aria-label': 'Daftar pengguna untuk disebutkan',

  /** The comments onboarding popover text */
  'onboarding.body':
    'Anda dapat menambahkan komentar pada setiap bidang dalam dokumen. Mereka akan muncul di sini, dikelompokkan berdasarkan bidang.',
  /** The comments onboarding dismiss text */
  'onboarding.dismiss': 'Mengerti',
  /** The comments onboarding popover header text */
  'onboarding.header': 'Bidang dokumen sekarang memiliki komentar',

  /** Tooltip for the button to add a reaction to a comment */
  'reactions.add-reaction-tooltip': 'Tambahkan reaksi',
  /** Aria label for the individual reactions you can choose from when reacting to a comment */
  'reactions.react-with-aria-label': 'Bereaksi dengan {{reactionName}}',
  /** When a users' name cannot be resolved, fall back to this name */
  'reactions.user-list.unknown-user-fallback-name': 'Pengguna tidak dikenal',
  /**
   * When showing list of users who have reacted, replaces your own name with "you", eg
   * "Donna, you, James, and Tyler reacted with 👍". A different key (`_leading` suffix)
   * is used when you are the first to react, eg "You, Donna and Tyler reacted with 👍".
   * Use `{{name}}` if you want to instead use the current users' actual name.
   */
  'reactions.user-list.you': 'anda',
  /**
   * When showing list of users who have reacted, replaces your own name with "You", eg
   * "You, Donna, James, and Tyler reacted with 👍". A different key (`_leading` suffix)
   * is used when you are not the first to react, eg "Donna, you, James and Tyler reacted with 👍".
   * Use `{{name}}` if you want to instead use the current users' actual name.
   */
  'reactions.user-list.you_leading': 'Anda',
  /**
   * The text shown for the tooltip that appears when hovering over the reaction count, eg
   * "Donna, James, and Tyler Reacted with 👍". Three components are available for use:
   * - `<UserList/>` - the list of names of users who have reacted, using the locales list format
   * - `<Text>` - should be wrapped around the text describing the action ("reacted with")
   * - `<ReactionName/>` - the name of the reaction emoji, eg ":heavy_plus_sign:"
   */
  'reactions.users-reacted-with-reaction':
    '<UserList/> <Text>telah bereaksi dengan</Text> <ReactionName/>',

  /** Status filter: The short title describing filtering on open (non-resolved) comments */
  'status-filter.status-open': 'Terbuka',
  /** Status filter: The full text for describing filtering on open (non-resolved) comments */
  'status-filter.status-open-full': 'Komentar terbuka',
  /** Status filter: The short title describing filtering on resolved comments */
  'status-filter.status-resolved': 'Terselesaikan',
  /** Status filter: The full text for describing filtering on resolved comments */
  'status-filter.status-resolved-full': 'Komentar yang terselesaikan',
  /** Status filter: The full text for describing filtering on resolved comments and is upsell mode */
  'status-filter.status-resolved-full-upsell':
    'Tingkatkan untuk melihat komentar yang terselesaikan',
})
