import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** The close comments button text */
  'close-pane-button-text': 'Fermer les commentaires',

  /** The aria label for the close comments button */
  'close-pane-button-text-aria-label': 'Fermer les commentaires',

  /** When composing a comment, the placeholder text shown when adding a comment to a field with no current comments */
  'compose.add-comment-input-placeholder': 'Ajouter un commentaire à <strong>{{field}}</strong>',
  /** When composing a comment, the placeholder text shown when adding a comment to a field with no current comments and the mode is upsell */
  'compose.add-comment-input-placeholder-upsell': 'Mettre à niveau pour ajouter un commentaire',
  /** When composing a comment, the placeholder text shown when the input is empty */
  'compose.create-comment-placeholder': 'Créer un nouveau commentaire',
  /** When composing a comment, the aria label for the button to mention a user */
  'compose.mention-user-aria-label': "Mentionner l'utilisateur",
  /** When composing a comment, the tooltip text for the button to mention a user */
  'compose.mention-user-tooltip': "Mentionner l'utilisateur",
  /** When composing a reply, the placeholder text shown when the input is empty */
  'compose.reply-placeholder': 'Répondre',
  /** When composing a reply, the placeholder text shown when the input is empty and the mode is upsell */
  'compose.reply-placeholder-upsell': 'Mettre à niveau pour répondre',
  /** When composing a comment, the aria label for the button to send a comment */
  'compose.send-comment-aria-label': 'Envoyer le commentaire',
  /** When composing a comment, the tooltip text for the button to send a comment */
  'compose.send-comment-tooltip': 'Envoyer le commentaire',

  /** The inspector text when error copying link */
  'copy-link-error-message': 'Impossible de copier le lien dans le presse-papiers',

  /** The delete dialog body for a comment */
  'delete-comment.body': 'Une fois supprimé, un commentaire ne peut pas être récupéré.',
  /** The delete dialog confirm button text for a comment */
  'delete-comment.confirm': 'Supprimer le commentaire',
  /** The delete dialog title for a comment */
  'delete-comment.title': 'Supprimer ce commentaire ?',

  /** The delete dialog error */
  'delete-dialog.error':
    "Une erreur s'est produite lors de la suppression du commentaire. Veuillez réessayer.",

  /** The delete dialog body for a thread */
  'delete-thread.body':
    'Ce commentaire et ses réponses seront supprimés, et une fois supprimés ne pourront pas être récupérés.',
  /** The delete dialog conform button text for a thread */
  'delete-thread.confirm': 'Supprimer la discussion',
  /** The delete dialog title for a thread */
  'delete-thread.title': 'Supprimer cette discussion de commentaires ?',

  /** The button text for confirming discard */
  'discard.button-confirm': 'Ignorer',
  /** The header for discard comment dialog */
  'discard.header': 'Ignorer le commentaire ?',
  /** The text for discard comment dialog */
  'discard.text': 'Voulez-vous ignorer le commentaire ?',

  /** Sharing feedback on the comments feature: The link title */
  'feature-feedback.link': 'Partagez votre avis',
  /** Sharing feedback on the comments feature: The form title  */
  'feature-feedback.title': 'Aidez à améliorer ',

  /** The name of the comments feature, for use in header. Capitalized, eg "Comments". */
  'feature-name': 'Comments',

  /** Aria label for button above fields to add a comment, when the field currently do not have any comments */
  'field-button.aria-label-add': 'Ajouter un commentaire',
  /** Aria label for button above fields that opens the comments for this field, when there are existing comments */
  'field-button.aria-label-open': 'Ouvrir les commentaires',
  /** Text shown in popover when hovering the button above fields that opens the comments panel, when there is a single comment present */
  'field-button.content_one': 'Voir le commentaire',
  /** Text shown in popover when hovering the button above fields that opens the comments panel, when there are more than one comment present */
  'field-button.content_other': 'Voir les commentaires',
  /** Text shown in popover when hovering the button above fields to add a comment, when the field currently do not have any comments */
  'field-button.title': 'Ajouter un commentaire',

  /* The text shown in the inline comment button when the button is disabled due to overlap */
  'inline-add-comment-button.disabled-overlap-title':
    'Les commentaires ne peuvent pas se chevaucher',
  /** The text shown in the inline comment button */
  'inline-add-comment-button.title': 'Ajouter un commentaire',

  /** The title of the error card shown in the comments inspector */
  'inspector-error.title': undefined, // 'Something went wrong while loading comments'

  /** Aria label for the breadcrumb button showing the field path. `{{field}}` is the last (most specific) field. */
  'list-item.breadcrumb-button-go-to-field-aria-label': 'Aller au champ {{field}}',
  /** The button tooltip content for the add reaction button */
  'list-item.context-menu-add-reaction': 'Ajouter une réaction',
  /** The button tooltip aria label for adding a reaction */
  'list-item.context-menu-add-reaction-aria-label': 'Ajouter une réaction',
  /** The button tooltip content for the add reaction button and mode is upsell */
  'list-item.context-menu-add-reaction-upsell': 'Mettre à niveau pour ajouter une réaction',
  /** The action menu item for copying a comment link */
  'list-item.copy-link': 'Copier le lien vers le commentaire',
  /** The action menu item for deleting a comment */
  'list-item.delete-comment': 'Supprimer le commentaire',
  /** The action menu item for editing a comment */
  'list-item.edit-comment': 'Modifier le commentaire',
  /** The action menu item for editing a comment and the mode is upsell */
  'list-item.edit-comment-upsell': 'Mettre à niveau pour modifier le commentaire',
  /** Aria label for the button that takes you to the field, which wraps a thread/comment */
  'list-item.go-to-field-button.aria-label': 'Aller au champ',
  /**
   * The text shown below the author and timestamp of a comment including a link back to the context in which the comment was made.
   * Consists of a document title wrapped in a link, and a word or phrase to indicate that the link refers to a location:
   * eg "on Home", "on Coffee Machine | Products", "on Pricing – Sanity"
   */
  'list-item.layout-context': 'sur <IntentLink>{{title}}</IntentLink>',
  /** The marker to indicate that a comment has been edited in brackets */
  'list-item.layout-edited': 'modifié',
  /** The error text when sending a comment has failed */
  'list-item.layout-failed-sent': "Échec de l'envoi.",
  /** The loading message when posting a comment is in progress */
  'list-item.layout-posting': 'Publication...',
  /** The text for retrying posting a comment */
  'list-item.layout-retry': 'Réessayer',
  /** The text shown when the value a comment references has been deleted */
  'list-item.missing-referenced-value-tooltip-content': 'Le texte commenté a été supprimé',
  /** The aria label for the comments menu button to open the actions menu */
  'list-item.open-menu-aria-label': "Ouvrir le menu d'actions des commentaires",
  /** The button text to re-open a resolved comment  */
  'list-item.re-open-resolved': 'Rouvrir',
  /** The button aria label to re-open a comment that is resolved */
  'list-item.re-open-resolved-aria-label': 'Rouvrir',
  /** The button aria label to mark a comment as resolved */
  'list-item.resolved-tooltip-aria-label': 'Marquer le commentaire comme résolu',
  /** The button text to mark a comment as resolved */
  'list-item.resolved-tooltip-content': 'Marquer comme résolu',

  /** The empty state text for open comments */
  'list-status.empty-state-open-text':
    'Les commentaires ouverts sur ce document seront affichés ici.',
  /** The empty state title for open comments */
  'list-status.empty-state-open-title': 'Pas encore de commentaires ouverts',
  /** The empty state text for resolved comments */
  'list-status.empty-state-resolved-text':
    'Les commentaires résolus sur ce document seront affichés ici.',
  /** The empty state title for resolved comments */
  'list-status.empty-state-resolved-title': 'Pas encore de commentaires résolus',
  /** The list status message for error */
  'list-status.error': "Quelque chose s'est mal passé",
  /** The list status message for loading status */
  'list-status.loading': 'Chargement des commentaires',

  /** Text shown when no users can be found to mention */
  'mentions.no-users-found': 'Aucun utilisateur trouvé',
  /** Label/badge shown for users that are not authorized to see the document, and thus cannot be mentioned */
  'mentions.unauthorized-user': 'Non autorisé',
  /** Aria label for the command list for users to mention */
  'mentions.user-list-aria-label': 'Liste des utilisateurs à mentionner',

  /** The comments onboarding popover text */
  'onboarding.body':
    "Vous pouvez ajouter des commentaires à n'importe quel champ d'un document. Ils apparaîtront ici, regroupés par champ.",
  /** The comments onboarding dismiss text */
  'onboarding.dismiss': 'Compris',
  /** The comments onboarding popover header text */
  'onboarding.header': 'Les champs de document ont maintenant des commentaires',

  /** Tooltip for the button to add a reaction to a comment */
  'reactions.add-reaction-tooltip': 'Ajouter une réaction',
  /** Aria label for the individual reactions you can choose from when reacting to a comment */
  'reactions.react-with-aria-label': 'Réagir avec {{reactionName}}',
  /** When a users' name cannot be resolved, fall back to this name */
  'reactions.user-list.unknown-user-fallback-name': 'Utilisateur inconnu',
  /**
   * When showing list of users who have reacted, replaces your own name with "you", eg
   * "Donna, you, James, and Tyler reacted with 👍". A different key (`_leading` suffix)
   * is used when you are the first to react, eg "You, Donna and Tyler reacted with 👍".
   * Use `{{name}}` if you want to instead use the current users' actual name.
   */
  'reactions.user-list.you': 'vous',
  /**
   * When showing list of users who have reacted, replaces your own name with "You", eg
   * "You, Donna, James, and Tyler reacted with 👍". A different key (`_leading` suffix)
   * is used when you are not the first to react, eg "Donna, you, James and Tyler reacted with 👍".
   * Use `{{name}}` if you want to instead use the current users' actual name.
   */
  'reactions.user-list.you_leading': 'Vous',
  /**
   * The text shown for the tooltip that appears when hovering over the reaction count, eg
   * "Donna, James, and Tyler Reacted with 👍". Three components are available for use:
   * - `<UserList/>` - the list of names of users who have reacted, using the locales list format
   * - `<Text>` - should be wrapped around the text describing the action ("reacted with")
   * - `<ReactionName/>` - the name of the reaction emoji, eg ":heavy_plus_sign:"
   */
  'reactions.users-reacted-with-reaction': '<UserList/> <Text>a réagi avec</Text> <ReactionName/>',

  /** Status filter: The short title describing filtering on open (non-resolved) comments */
  'status-filter.status-open': 'Ouvert',
  /** Status filter: The full text for describing filtering on open (non-resolved) comments */
  'status-filter.status-open-full': 'Commentaires ouverts',
  /** Status filter: The short title describing filtering on resolved comments */
  'status-filter.status-resolved': 'Résolu',
  /** Status filter: The full text for describing filtering on resolved comments */
  'status-filter.status-resolved-full': 'Commentaires résolus',
  /** Status filter: The full text for describing filtering on resolved comments and is upsell mode */
  'status-filter.status-resolved-full-upsell': 'Mettez à niveau pour voir les commentaires résolus',
})
