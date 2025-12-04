import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** The close comments button text */
  'close-pane-button-text': 'Tanca els comentaris',

  /** The aria label for the close comments button */
  'close-pane-button-text-aria-label': 'Tanca els comentaris',

  /** When composing a comment, the placeholder text shown when adding a comment to a field with no current comments */
  'compose.add-comment-input-placeholder': 'Afegeix un comentari a <strong>{{field}}</strong>',
  /** When composing a comment, the placeholder text shown when adding a comment to a field with no current comments and the mode is upsell */
  'compose.add-comment-input-placeholder-upsell': 'Actualitza per afegir un comentari',
  /** When composing a comment, the placeholder text shown when the input is empty */
  'compose.create-comment-placeholder': 'Crea un nou comentari',
  /** When composing a comment, the aria label for the button to mention a user */
  'compose.mention-user-aria-label': 'Menciona un usuari',
  /** When composing a comment, the tooltip text for the button to mention a user */
  'compose.mention-user-tooltip': 'Menciona un usuari',
  /** When composing a reply, the placeholder text shown when the input is empty */
  'compose.reply-placeholder': 'Respon',
  /** When composing a reply, the placeholder text shown when the input is empty and the mode is upsell */
  'compose.reply-placeholder-upsell': 'Actualitza per respondre',
  /** When composing a comment, the aria label for the button to send a comment */
  'compose.send-comment-aria-label': 'Envia el comentari',
  /** When composing a comment, the tooltip text for the button to send a comment */
  'compose.send-comment-tooltip': 'Envia el comentari',

  /** The inspector text when error copying link */
  'copy-link-error-message': "No s'ha pogut copiar l'enllaç al porta-retalls",

  /** The delete dialog body for a comment */
  'delete-comment.body': 'Un cop eliminat, un comentari no es pot recuperar.',
  /** The delete dialog confirm button text for a comment */
  'delete-comment.confirm': 'Elimina el comentari',
  /** The delete dialog title for a comment */
  'delete-comment.title': 'Vols eliminar aquest comentari?',

  /** The delete dialog error */
  'delete-dialog.error':
    "S'ha produït un error en eliminar el comentari. Si us plau, intenta-ho de nou.",

  /** The delete dialog body for a thread */
  'delete-thread.body':
    'Aquest comentari i les seves respostes seran eliminats, i un cop eliminats no es poden recuperar.',
  /** The delete dialog conform button text for a thread */
  'delete-thread.confirm': 'Elimina el fil',
  /** The delete dialog title for a thread */
  'delete-thread.title': 'Vols eliminar aquest fil de comentaris?',

  /** The button text for confirming discard */
  'discard.button-confirm': 'Descarta',
  /** The header for discard comment dialog */
  'discard.header': 'Vols descartar el comentari?',
  /** The text for discard comment dialog */
  'discard.text': 'Vols descartar el comentari?',

  /** Sharing feedback on the comments feature: The link title */
  'feature-feedback.link': 'Comparteix la teva opinió',
  /** Sharing feedback on the comments feature: The form title  */
  'feature-feedback.title': 'Ajuda a millorar ',

  /** The name of the comments feature, for use in header. Capitalized, eg "Comments". */
  'feature-name': 'Comentaris',

  /** Aria label for button above fields to add a comment, when the field currently do not have any comments */
  'field-button.aria-label-add': 'Afegeix un comentari',
  /** Aria label for button above fields that opens the comments for this field, when there are existing comments */
  'field-button.aria-label-open': 'Obre els comentaris',
  /** Text shown in popover when hovering the button above fields that opens the comments panel, when there is a single comment present */
  'field-button.content_one': 'Veure comentari',
  /** Text shown in popover when hovering the button above fields that opens the comments panel, when there are more than one comment present */
  'field-button.content_other': 'Veure comentaris',
  /** Text shown in popover when hovering the button above fields to add a comment, when the field currently do not have any comments */
  'field-button.title': 'Afegeix un comentari',

  /* The text shown in the inline comment button when the button is disabled due to overlap */
  'inline-add-comment-button.disabled-overlap-title': 'Els comentaris no poden solapar-se',
  /** The text shown in the inline comment button */
  'inline-add-comment-button.title': 'Afegeix un comentari',

  /** The title of the error card shown in the comments inspector */
  'inspector-error.title': 'Alguna cosa ha anat malament en carregar els comentaris',

  /** Aria label for the breadcrumb button showing the field path. `{{field}}` is the last (most specific) field. */
  'list-item.breadcrumb-button-go-to-field-aria-label': 'Vés al camp {{field}}',
  /** The button tooltip content for the add reaction button */
  'list-item.context-menu-add-reaction': 'Afegeix una reacció',
  /** The button tooltip aria label for adding a reaction */
  'list-item.context-menu-add-reaction-aria-label': 'Afegeix una reacció',
  /** The button tooltip content for the add reaction button and mode is upsell */
  'list-item.context-menu-add-reaction-upsell': 'Actualitza per afegir una reacció',
  /** The action menu item for copying a comment link */
  'list-item.copy-link': "Copia l'enllaç al comentari",
  /** The action menu item for deleting a comment */
  'list-item.delete-comment': 'Esborra el comentari',
  /** The action menu item for editing a comment */
  'list-item.edit-comment': 'Edita el comentari',
  /** The action menu item for editing a comment and the mode is upsell */
  'list-item.edit-comment-upsell': 'Actualitza per editar el comentari',
  /** Aria label for the button that takes you to the field, which wraps a thread/comment */
  'list-item.go-to-field-button.aria-label': 'Vés al camp',
  /**
   * The text shown below the author and timestamp of a comment including a link back to the context in which the comment was made.
   * Consists of a document title wrapped in a link, and a word or phrase to indicate that the link refers to a location:
   * eg "on Home", "on Coffee Machine | Products", "on Pricing – Sanity"
   */
  'list-item.layout-context': 'a <IntentLink>{{title}}</IntentLink>',
  /** The marker to indicate that a comment has been edited in brackets */
  'list-item.layout-edited': 'editat',
  /** The error text when sending a comment has failed */
  'list-item.layout-failed-sent': "No s'ha pogut enviar.",
  /** The loading message when posting a comment is in progress */
  'list-item.layout-posting': 'Publicant...',
  /** The text for retrying posting a comment */
  'list-item.layout-retry': 'Torna-ho a provar',
  /** The text shown when the value a comment references has been deleted */
  'list-item.missing-referenced-value-tooltip-content': 'El text comentat ha estat esborrat',
  /** The aria label for the comments menu button to open the actions menu */
  'list-item.open-menu-aria-label': "Obre el menú d'accions del comentari",
  /** The button text to re-open a resolved comment  */
  'list-item.re-open-resolved': 'Reobre',
  /** The button aria label to re-open a comment that is resolved */
  'list-item.re-open-resolved-aria-label': 'Reobre',
  /** The button aria label to mark a comment as resolved */
  'list-item.resolved-tooltip-aria-label': 'Marca el comentari com a resolt',
  /** The button text to mark a comment as resolved */
  'list-item.resolved-tooltip-content': 'Marca com a resolt',

  /** The empty state text for open comments */
  'list-status.empty-state-open-text':
    'Els comentaris oberts en aquest document es mostraran aquí.',
  /** The empty state title for open comments */
  'list-status.empty-state-open-title': 'Encara no hi ha comentaris oberts',
  /** The empty state text for resolved comments */
  'list-status.empty-state-resolved-text':
    'Els comentaris resolts en aquest document es mostraran aquí.',
  /** The empty state title for resolved comments */
  'list-status.empty-state-resolved-title': 'Encara no hi ha comentaris resolts',
  /** The list status message for error */
  'list-status.error': 'Alguna cosa ha anat malament',
  /** The list status message for loading status */
  'list-status.loading': 'Carregant comentaris',

  /** Text shown when no users can be found to mention */
  'mentions.no-users-found': "No s'han trobat usuaris",
  /** Label/badge shown for users that are not authorized to see the document, and thus cannot be mentioned */
  'mentions.unauthorized-user': 'No autoritzat',
  /** Aria label for the command list for users to mention */
  'mentions.user-list-aria-label': "Llista d'usuaris per mencionar",

  /** The comments onboarding popover text */
  'onboarding.body':
    "Pots afegir comentaris a qualsevol camp d'un document. Apareixeran aquí, agrupats per camp.",
  /** The comments onboarding dismiss text */
  'onboarding.dismiss': 'Entès',
  /** The comments onboarding popover header text */
  'onboarding.header': 'Els camps del document ara tenen comentaris',

  /** Tooltip for the button to add a reaction to a comment */
  'reactions.add-reaction-tooltip': 'Afegeix reacció',
  /** Aria label for the individual reactions you can choose from when reacting to a comment */
  'reactions.react-with-aria-label': 'Reacciona amb {{reactionName}}',
  /** When a users' name cannot be resolved, fall back to this name */
  'reactions.user-list.unknown-user-fallback-name': 'Usuari desconegut',
  /**
   * When showing list of users who have reacted, replaces your own name with "you", eg
   * "Donna, you, James, and Tyler reacted with 👍". A different key (`_leading` suffix)
   * is used when you are the first to react, eg "You, Donna and Tyler reacted with 👍".
   * Use `{{name}}` if you want to instead use the current users' actual name.
   */
  'reactions.user-list.you': 'tu',
  /**
   * When showing list of users who have reacted, replaces your own name with "You", eg
   * "You, Donna, James, and Tyler reacted with 👍". A different key (`_leading` suffix)
   * is used when you are not the first to react, eg "Donna, you, James and Tyler reacted with 👍".
   * Use `{{name}}` if you want to instead use the current users' actual name.
   */
  'reactions.user-list.you_leading': 'Tu',
  /**
   * The text shown for the tooltip that appears when hovering over the reaction count, eg
   * "Donna, James, and Tyler Reacted with 👍". Three components are available for use:
   * - `<UserList/>` - the list of names of users who have reacted, using the locales list format
   * - `<Text>` - should be wrapped around the text describing the action ("reacted with")
   * - `<ReactionName/>` - the name of the reaction emoji, eg ":heavy_plus_sign:"
   */
  'reactions.users-reacted-with-reaction':
    '<UserList/> <Text>han reaccionat amb</Text> <ReactionName/>',

  /** Status filter: The short title describing filtering on open (non-resolved) comments */
  'status-filter.status-open': 'Oberts',
  /** Status filter: The full text for describing filtering on open (non-resolved) comments */
  'status-filter.status-open-full': 'Comentaris oberts',
  /** Status filter: The short title describing filtering on resolved comments */
  'status-filter.status-resolved': 'Resolts',
  /** Status filter: The full text for describing filtering on resolved comments */
  'status-filter.status-resolved-full': 'Comentaris resolts',
  /** Status filter: The full text for describing filtering on resolved comments and is upsell mode */
  'status-filter.status-resolved-full-upsell': 'Actualitza per veure els comentaris resolts',
})
