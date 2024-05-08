import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** The close comments button text */
  'close-pane-button-text': 'Cerrar comentarios',

  /** The aria label for the close comments button */
  'close-pane-button-text-aria-label': 'Cerrar comentarios',

  /** When composing a comment, the placeholder text shown when adding a comment to a field with no current comments */
  'compose.add-comment-input-placeholder': 'Añadir comentario a <strong>{{field}}</strong>',
  /** When composing a comment, the placeholder text shown when adding a comment to a field with no current comments and the mode is upsell */
  'compose.add-comment-input-placeholder-upsell': 'Actualiza para añadir comentario',
  /** When composing a comment, the placeholder text shown when the input is empty */
  'compose.create-comment-placeholder': 'Crear un nuevo comentario',
  /** When composing a comment, the aria label for the button to mention a user */
  'compose.mention-user-aria-label': 'Mencionar usuario',
  /** When composing a comment, the tooltip text for the button to mention a user */
  'compose.mention-user-tooltip': 'Mencionar usuario',
  /** When composing a reply, the placeholder text shown when the input is empty */
  'compose.reply-placeholder': 'Responder',
  /** When composing a reply, the placeholder text shown when the input is empty and the mode is upsell */
  'compose.reply-placeholder-upsell': 'Actualizar para responder',
  /** When composing a comment, the aria label for the button to send a comment */
  'compose.send-comment-aria-label': 'Enviar comentario',
  /** When composing a comment, the tooltip text for the button to send a comment */
  'compose.send-comment-tooltip': 'Enviar comentario',

  /** The inspector text when error copying link */
  'copy-link-error-message': 'No se pudo copiar el enlace al portapapeles',

  /** The inspector successfully copied link text */
  'copy-link-success-message': 'Enlace copiado al portapapeles',

  /** The delete dialog body for a comment */
  'delete-comment.body': 'Una vez eliminado, un comentario no se puede recuperar.',
  /** The delete dialog confirm button text for a comment */
  'delete-comment.confirm': 'Eliminar comentario',
  /** The delete dialog title for a comment */
  'delete-comment.title': '¿Eliminar este comentario?',

  /** The delete dialog error */
  'delete-dialog.error':
    'Se produjo un error al eliminar el comentario. Por favor, inténtalo de nuevo.',

  /** The delete dialog body for a thread */
  'delete-thread.body':
    'Este comentario y sus respuestas serán eliminados, y una vez eliminados no se pueden recuperar.',
  /** The delete dialog conform button text for a thread */
  'delete-thread.confirm': 'Eliminar hilo',
  /** The delete dialog title for a thread */
  'delete-thread.title': '¿Eliminar este hilo de comentarios?',

  /** The button text for confirming discard */
  'discard.button-confirm': 'Descartar',
  /** The header for discard comment dialog */
  'discard.header': '¿Descartar comentario?',
  /** The text for discard comment dialog */
  'discard.text': '¿Quieres descartar el comentario?',

  /** Sharing feedback on the comments feature: The link title */
  'feature-feedback.link': 'Comparte tu opinión',
  /** Sharing feedback on the comments feature: The form title  */
  'feature-feedback.title': 'Ayuda a mejorar ',

  /** The name of the comments feature, for use in header. Capitalized, eg "Comments". */
  'feature-name': 'Comentarios',

  /** Aria label for button above fields to add a comment, when the field currently do not have any comments */
  'field-button.aria-label-add': 'Agregar comentario',
  /** Aria label for button above fields that opens the comments for this field, when there are existing comments */
  'field-button.aria-label-open': 'Abrir comentarios',
  /** Text shown in popover when hovering the button above fields that opens the comments panel, when there is a single comment present */
  'field-button.content_one': 'Ver comentario',
  /** Text shown in popover when hovering the button above fields that opens the comments panel, when there are more than one comment present */
  'field-button.content_other': 'Ver comentarios',
  /** Text shown in popover when hovering the button above fields to add a comment, when the field currently do not have any comments */
  'field-button.title': 'Agregar comentario',

  /* The text shown in the inline comment button when the button is disabled due to overlap */
  'inline-add-comment-button.disabled-overlap-title': 'Los comentarios no pueden solaparse',
  /** The text shown in the inline comment button */
  'inline-add-comment-button.title': 'Añadir comentario',

  /** Aria label for the breadcrumb button showing the field path. `{{field}}` is the last (most specific) field. */
  'list-item.breadcrumb-button-go-to-field-aria-label': 'Ir al campo {{field}}',
  /** The button tooltip content for the add reaction button */
  'list-item.context-menu-add-reaction': 'Agregar reacción',
  /** The button tooltip aria label for adding a reaction */
  'list-item.context-menu-add-reaction-aria-label': 'Agregar reacción',
  /** The button tooltip content for the add reaction button and mode is upsell */
  'list-item.context-menu-add-reaction-upsell': 'Actualiza para agregar reacción',
  /** The action menu item for copying a comment link */
  'list-item.copy-link': 'Copiar enlace al comentario',
  /** The action menu item for deleting a comment */
  'list-item.delete-comment': 'Eliminar comentario',
  /** The action menu item for editing a comment */
  'list-item.edit-comment': 'Editar comentario',
  /** The action menu item for editing a comment and the mode is upsell */
  'list-item.edit-comment-upsell': 'Actualiza para editar comentario',
  /** Aria label for the button that takes you to the field, which wraps a thread/comment */
  'list-item.go-to-field-button.aria-label': 'Ir al campo',
  /**
   * The text shown below the author and timestamp of a comment including a link back to the context in which the comment was made.
   * Consists of a document title wrapped in a link, and a word or phrase to indicate that the link refers to a location:
   * eg "on Home", "on Coffee Machine | Products", "on Pricing – Sanity"
   */
  'list-item.layout-context': 'en <IntentLink>{{title}}</IntentLink>',
  /** The marker to indicate that a comment has been edited in brackets */
  'list-item.layout-edited': 'editado',
  /** The error text when sending a comment has failed */
  'list-item.layout-failed-sent': 'Error al enviar.',
  /** The loading message when posting a comment is in progress */
  'list-item.layout-posting': 'Publicando...',
  /** The text for retrying posting a comment */
  'list-item.layout-retry': 'Reintentar',
  /** The text shown when the value a comment references has been deleted */
  'list-item.missing-referenced-value-tooltip-content': 'El texto comentado ha sido eliminado',
  /** The aria label for the comments menu button to open the actions menu */
  'list-item.open-menu-aria-label': 'Abrir menú de acciones de comentarios',
  /** The button text to re-open a resolved comment  */
  'list-item.re-open-resolved': 'Reabrir',
  /** The button aria label to re-open a comment that is resolved */
  'list-item.re-open-resolved-aria-label': 'Reabrir',
  /** The button aria label to mark a comment as resolved */
  'list-item.resolved-tooltip-aria-label': 'Marcar comentario como resuelto',
  /** The button text to mark a comment as resolved */
  'list-item.resolved-tooltip-content': 'Marcar como resuelto',

  /** The empty state text for open comments */
  'list-status.empty-state-open-text':
    'Los comentarios abiertos en este documento se mostrarán aquí.',
  /** The empty state title for open comments */
  'list-status.empty-state-open-title': 'Aún no hay comentarios abiertos',
  /** The empty state text for resolved comments */
  'list-status.empty-state-resolved-text':
    'Los comentarios resueltos en este documento se mostrarán aquí.',
  /** The empty state title for resolved comments */
  'list-status.empty-state-resolved-title': 'Aún no hay comentarios resueltos',
  /** The list status message for error */
  'list-status.error': 'Algo salió mal',
  /** The list status message for loading status */
  'list-status.loading': 'Cargando comentarios',

  /** Text shown when no users can be found to mention */
  'mentions.no-users-found': 'No se encontraron usuarios',
  /** Label/badge shown for users that are not authorized to see the document, and thus cannot be mentioned */
  'mentions.unauthorized-user': 'No autorizado',
  /** Aria label for the command list for users to mention */
  'mentions.user-list-aria-label': 'Lista de usuarios para mencionar',

  /** The comments onboarding popover text */
  'onboarding.body':
    'Puedes añadir comentarios a cualquier campo en un documento. Aparecerán aquí, agrupados por campo.',
  /** The comments onboarding dismiss text */
  'onboarding.dismiss': 'Entendido',
  /** The comments onboarding popover header text */
  'onboarding.header': 'Los campos del documento ahora tienen comentarios',

  /** Tooltip for the button to add a reaction to a comment */
  'reactions.add-reaction-tooltip': 'Añadir reacción',
  /** Aria label for the individual reactions you can choose from when reacting to a comment */
  'reactions.react-with-aria-label': 'Reaccionar con {{reactionName}}',
  /** When a users' name cannot be resolved, fall back to this name */
  'reactions.user-list.unknown-user-fallback-name': 'Usuario desconocido',
  /**
   * When showing list of users who have reacted, replaces your own name with "you", eg
   * "Donna, you, James, and Tyler reacted with 👍". A different key (`_leading` suffix)
   * is used when you are the first to react, eg "You, Donna and Tyler reacted with 👍".
   * Use `{{name}}` if you want to instead use the current users' actual name.
   */
  'reactions.user-list.you': 'tú',
  /**
   * When showing list of users who have reacted, replaces your own name with "You", eg
   * "You, Donna, James, and Tyler reacted with 👍". A different key (`_leading` suffix)
   * is used when you are not the first to react, eg "Donna, you, James and Tyler reacted with 👍".
   * Use `{{name}}` if you want to instead use the current users' actual name.
   */
  'reactions.user-list.you_leading': 'Tú',
  /**
   * The text shown for the tooltip that appears when hovering over the reaction count, eg
   * "Donna, James, and Tyler Reacted with 👍". Three components are available for use:
   * - `<UserList/>` - the list of names of users who have reacted, using the locales list format
   * - `<Text>` - should be wrapped around the text describing the action ("reacted with")
   * - `<ReactionName/>` - the name of the reaction emoji, eg ":heavy_plus_sign:"
   */
  'reactions.users-reacted-with-reaction':
    '<UserList/> <Text>han reaccionado con</Text> <ReactionName/>',

  /** Status filter: The short title describing filtering on open (non-resolved) comments */
  'status-filter.status-open': 'Abiertos',
  /** Status filter: The full text for describing filtering on open (non-resolved) comments */
  'status-filter.status-open-full': 'Comentarios abiertos',
  /** Status filter: The short title describing filtering on resolved comments */
  'status-filter.status-resolved': 'Resueltos',
  /** Status filter: The full text for describing filtering on resolved comments */
  'status-filter.status-resolved-full': 'Comentarios resueltos',
  /** Status filter: The full text for describing filtering on resolved comments and is upsell mode */
  'status-filter.status-resolved-full-upsell': 'Actualiza para ver comentarios resueltos',
})
