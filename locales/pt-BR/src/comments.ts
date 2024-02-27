import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** The close comments button text */
  'close-pane-button-text': 'Fechar comentários',

  /** The aria label for the close comments button */
  'close-pane-button-text-aria-label': 'Fechar comentários',

  /** When composing a comment, the placeholder text shown when adding a comment to a field with no current comments */
  'compose.add-comment-input-placeholder': 'Adicionar comentário a <strong>{{field}}</strong>',
  /** When composing a comment, the placeholder text shown when adding a comment to a field with no current comments and the mode is upsell */
  'compose.add-comment-input-placeholder-upsell': 'Atualize para adicionar comentário',
  /** When composing a comment, the placeholder text shown when the input is empty */
  'compose.create-comment-placeholder': 'Criar um novo comentário',
  /** When composing a comment, the aria label for the button to mention a user */
  'compose.mention-user-aria-label': 'Mencionar usuário',
  /** When composing a comment, the tooltip text for the button to mention a user */
  'compose.mention-user-tooltip': 'Mencionar usuário',
  /** When composing a reply, the placeholder text shown when the input is empty */
  'compose.reply-placeholder': 'Responder',
  /** When composing a reply, the placeholder text shown when the input is empty and the mode is upsell */
  'compose.reply-placeholder-upsell': 'Atualize para responder',
  /** When composing a comment, the aria label for the button to send a comment */
  'compose.send-comment-aria-label': 'Enviar comentário',
  /** When composing a comment, the tooltip text for the button to send a comment */
  'compose.send-comment-tooltip': 'Enviar comentário',

  /** The inspector text when error copying link */
  'copy-link-error-message': 'Não foi possível copiar o link para a área de transferência',

  /** The inspector successfully copied link text */
  'copy-link-success-message': 'Link copiado para a área de transferência',

  /** The delete dialog body for a comment */
  'delete-comment.body': 'Uma vez excluído, um comentário não pode ser recuperado.',
  /** The delete dialog confirm button text for a comment */
  'delete-comment.confirm': 'Excluir comentário',
  /** The delete dialog title for a comment */
  'delete-comment.title': 'Excluir este comentário?',

  /** The delete dialog error */
  'delete-dialog.error': 'Ocorreu um erro ao excluir o comentário. Por favor, tente novamente.',

  /** The delete dialog body for a thread */
  'delete-thread.body':
    'Este comentário e suas respostas serão excluídos, e uma vez excluídos não podem ser recuperados.',
  /** The delete dialog conform button text for a thread */
  'delete-thread.confirm': 'Excluir conversa',
  /** The delete dialog title for a thread */
  'delete-thread.title': 'Excluir esta conversa de comentários?',

  /** The button text for confirming discard */
  'discard.button-confirm': 'Descartar',
  /** The header for discard comment dialog */
  'discard.header': 'Descartar comentário?',
  /** The text for discard comment dialog */
  'discard.text': 'Você quer descartar o comentário?',

  /** Sharing feedback on the comments feature: The link title */
  'feature-feedback.link': 'Compartilhe seu feedback',
  /** Sharing feedback on the comments feature: The form title  */
  'feature-feedback.title': 'Ajude a melhorar ',

  /** The name of the comments feature, for use in header. Capitalized, eg "Comments". */
  'feature-name': 'Comments',

  /** Aria label for button above fields to add a comment, when the field currently do not have any comments */
  'field-button.aria-label-add': 'Adicionar comentário',
  /** Aria label for button above fields that opens the comments for this field, when there are existing comments */
  'field-button.aria-label-open': 'Abrir comentários',
  /** Text shown in popover when hovering the button above fields that opens the comments panel, when there is a single comment present */
  'field-button.content_one': 'Ver comentário',
  /** Text shown in popover when hovering the button above fields that opens the comments panel, when there are more than one comment present */
  'field-button.content_other': 'Ver comentários',
  /** Text shown in popover when hovering the button above fields to add a comment, when the field currently do not have any comments */
  'field-button.title': 'Adicionar comentário',

  /** Aria label for the breadcrumb button showing the field path. `{{field}}` is the last (most specific) field. */
  'list-item.breadcrumb-button-go-to-field-aria-label': 'Ir para o campo {{field}}',
  /** The button tooltip content for the add reaction button */
  'list-item.context-menu-add-reaction': 'Adicionar reação',
  /** The button tooltip aria label for adding a reaction */
  'list-item.context-menu-add-reaction-aria-label': 'Adicionar reação',
  /** The button tooltip content for the add reaction button and mode is upsell */
  'list-item.context-menu-add-reaction-upsell': 'Atualize para adicionar reação',
  /** The action menu item for copying a comment link */
  'list-item.copy-link': 'Copiar link para o comentário',
  /** The action menu item for deleting a comment */
  'list-item.delete-comment': 'Excluir comentário',
  /** The action menu item for editing a comment */
  'list-item.edit-comment': 'Editar comentário',
  /** The action menu item for editing a comment and the mode is upsell */
  'list-item.edit-comment-upsell': 'Atualize para editar comentário',
  /** Aria label for the button that takes you to the field, which wraps a thread/comment */
  'list-item.go-to-field-button.aria-label': 'Ir para o campo',
  /**
   * The text shown below the author and timestamp of a comment including a link back to the context in which the comment was made.
   * Consists of a document title wrapped in a link, and a word or phrase to indicate that the link refers to a location:
   * eg "on Home", "on Coffee Machine | Products", "on Pricing – Sanity"
   */
  'list-item.layout-context': 'em <IntentLink>{{title}}</IntentLink>',
  /** The marker to indicate that a comment has been edited in brackets */
  'list-item.layout-edited': 'editado',
  /** The error text when sending a comment has failed */
  'list-item.layout-failed-sent': 'Falha ao enviar.',
  /** The loading message when posting a comment is in progress */
  'list-item.layout-posting': 'Publicando...',
  /** The text for retrying posting a comment */
  'list-item.layout-retry': 'Tentar novamente',
  /** The aria label for the comments menu button to open the actions menu */
  'list-item.open-menu-aria-label': 'Abrir menu de ações do comentário',
  /** The button text to re-open a resolved comment  */
  'list-item.re-open-resolved': 'Reabrir',
  /** The button aria label to re-open a comment that is resolved */
  'list-item.re-open-resolved-aria-label': 'Reabrir',
  /** The button aria label to mark a comment as resolved */
  'list-item.resolved-tooltip-aria-label': 'Marcar comentário como resolvido',
  /** The button text to mark a comment as resolved */
  'list-item.resolved-tooltip-content': 'Marcar como resolvido',

  /** The empty state text for open comments */
  'list-status.empty-state-open-text': 'Comentários abertos neste documento serão mostrados aqui.',
  /** The empty state title for open comments */
  'list-status.empty-state-open-title': 'Ainda não há comentários abertos',
  /** The empty state text for resolved comments */
  'list-status.empty-state-resolved-text':
    'Comentários resolvidos neste documento serão mostrados aqui.',
  /** The empty state title for resolved comments */
  'list-status.empty-state-resolved-title': 'Ainda não há comentários resolvidos',
  /** The list status message for error */
  'list-status.error': 'Algo deu errado',
  /** The list status message for loading status */
  'list-status.loading': 'Carregando comentários',

  /** Text shown when no users can be found to mention */
  'mentions.no-users-found': 'Nenhum usuário encontrado',
  /** Label/badge shown for users that are not authorized to see the document, and thus cannot be mentioned */
  'mentions.unauthorized-user': 'Não autorizado',
  /** Aria label for the command list for users to mention */
  'mentions.user-list-aria-label': 'Lista de usuários para mencionar',

  /** The comments onboarding popover text */
  'onboarding.body':
    'Você pode adicionar comentários a qualquer campo em um documento. Eles aparecerão aqui, agrupados por campo.',
  /** The comments onboarding dismiss text */
  'onboarding.dismiss': 'Entendi',
  /** The comments onboarding popover header text */
  'onboarding.header': 'Os campos do documento agora têm comentários',

  /** Tooltip for the button to add a reaction to a comment */
  'reactions.add-reaction-tooltip': 'Adicionar reação',
  /** Aria label for the individual reactions you can choose from when reacting to a comment */
  'reactions.react-with-aria-label': 'Reagir com {{reactionName}}',
  /** When a users' name cannot be resolved, fall back to this name */
  'reactions.user-list.unknown-user-fallback-name': 'Usuário desconhecido',
  /**
   * When showing list of users who have reacted, replaces your own name with "you", eg
   * "Donna, you, James, and Tyler reacted with 👍". A different key (`_leading` suffix)
   * is used when you are the first to react, eg "You, Donna and Tyler reacted with 👍".
   * Use `{{name}}` if you want to instead use the current users' actual name.
   */
  'reactions.user-list.you': 'você',
  /**
   * When showing list of users who have reacted, replaces your own name with "You", eg
   * "You, Donna, James, and Tyler reacted with 👍". A different key (`_leading` suffix)
   * is used when you are not the first to react, eg "Donna, you, James and Tyler reacted with 👍".
   * Use `{{name}}` if you want to instead use the current users' actual name.
   */
  'reactions.user-list.you_leading': 'Você',
  /**
   * The text shown for the tooltip that appears when hovering over the reaction count, eg
   * "Donna, James, and Tyler Reacted with 👍". Three components are available for use:
   * - `<UserList/>` - the list of names of users who have reacted, using the locales list format
   * - `<Text>` - should be wrapped around the text describing the action ("reacted with")
   * - `<ReactionName/>` - the name of the reaction emoji, eg ":heavy_plus_sign:"
   */
  'reactions.users-reacted-with-reaction': '<UserList/> <Text>reagiram com</Text> <ReactionName/>',

  /** Status filter: The short title describing filtering on open (non-resolved) comments */
  'status-filter.status-open': 'Abertos',
  /** Status filter: The full text for describing filtering on open (non-resolved) comments */
  'status-filter.status-open-full': 'Comentários abertos',
  /** Status filter: The short title describing filtering on resolved comments */
  'status-filter.status-resolved': 'Resolvidos',
  /** Status filter: The full text for describing filtering on resolved comments */
  'status-filter.status-resolved-full': 'Comentários resolvidos',
  /** Status filter: The full text for describing filtering on resolved comments and is upsell mode */
  'status-filter.status-resolved-full-upsell': 'Atualize para ver comentários resolvidos',
})
