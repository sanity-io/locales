import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Tooltip when action button is disabled because the operation is not ready   */
  'action.delete.disabled.not-ready': 'Opération pas prête',
  /** Tooltip when action button is disabled because the document does not exist */
  'action.delete.disabled.nothing-to-delete':
    "Ce document n'existe pas encore ou a déjà été supprimé",
  /** Label for the "Delete" document action button */
  'action.delete.label': 'Supprimer',
  /** Label for the "Delete" document action while the document is being deleted */
  'action.delete.running.label': 'Suppression…',
  /** Message prompting the user to confirm discarding changes */
  'action.discard-changes.confirm-dialog.confirm-discard-changes':
    'Êtes-vous sûr de vouloir annuler toutes les modifications depuis la dernière publication ?',
  /** Tooltip when action is disabled because the document has no unpublished changes */
  'action.discard-changes.disabled.no-change': "Ce document n'a pas de modifications non publiées",
  /** Tooltip when action is disabled because the document is not published */
  'action.discard-changes.disabled.not-published': "Ce document n'est pas publié",
  /** Tooltip when action button is disabled because the operation is not ready   */
  'action.discard-changes.disabled.not-ready': "L'opération n'est pas prête",
  /** Label for the "Discard changes" document action */
  'action.discard-changes.label': 'Annuler les modifications',
  /** Tooltip when action is disabled because the operation is not ready   */
  'action.duplicate.disabled.not-ready': "L'opération n'est pas prête",
  /** Tooltip when action is disabled because the document doesn't exist */
  'action.duplicate.disabled.nothing-to-duplicate':
    "Ce document n'existe pas encore, il n'y a donc rien à dupliquer",
  /** Label for the "Duplicate" document action */
  'action.duplicate.label': 'Dupliquer',
  /** Label for the "Duplicate" document action while the document is being duplicated */
  'action.duplicate.running.label': 'Duplication…',
  /** Tooltip when publish button is disabled because the document is already published, and published time is unavailable.*/
  'action.publish.already-published.no-time-ago.tooltip': 'Déjà publié',
  /** Tooltip when publish button is disabled because the document is already published.*/
  'action.publish.already-published.tooltip': 'Publié il y a {{timeSincePublished}}',
  /** Tooltip when action is disabled because the studio is not ready.*/
  'action.publish.disabled.not-ready': 'Opération pas prête',
  /** Label for action when there are pending changes.*/
  'action.publish.draft.label': 'Publier',
  /** Label for the "Publish" document action when the document has live edit enabled.*/
  'action.publish.live-edit.label': 'Publier',
  /** Fallback tooltip for the "Publish" document action when publish is invoked for a document with live edit enabled.*/
  'action.publish.live-edit.publish-disabled':
    'Impossible de publier car l’édition en direct est activée pour ce type de document',
  /** Tooltip for the "Publish" document action when the document has live edit enabled.*/
  'action.publish.live-edit.tooltip':
    'L’édition en direct est activée pour ce type de contenu et la publication se fait automatiquement à mesure que vous apportez des modifications',
  /** Tooltip when publish button is disabled because there are no changes.*/
  'action.publish.no-changes.tooltip': 'Aucun changement non publié',
  /** Label for the "Publish" document action when there are no changes.*/
  'action.publish.published.label': 'Publié',
  /** Label for the "Publish" document action while publish is being executed.*/
  'action.publish.running.label': 'Publication en cours…',
  /** Tooltip when the "Publish" document action is disabled due to validation issues */
  'action.publish.validation-issues.tooltip':
    'Il y a des erreurs de validation qui doivent être corrigées avant que ce document puisse être publié',
  /** Tooltip when publish button is waiting for validation and async tasks to complete.*/
  'action.publish.waiting': 'En attente de la fin des tâches avant publication',
  /** Message prompting the user to confirm that they want to restore to an earlier version*/
  'action.restore.confirm.message': 'Êtes-vous sûr de vouloir restaurer ce document ?',
  /** Fallback tooltip for when user is looking at the initial version */
  'action.restore.disabled.cannot-restore-initial':
    'Vous ne pouvez pas restaurer la version initiale',
  /** Label for the "Restore" document action */
  'action.restore.label': 'Restaurer',
  /** Default tooltip for the action */
  'action.restore.tooltip': 'Restaurer à cette version',
  /** Tooltip when action is disabled because the document is not already published */
  'action.unpublish.disabled.not-published': "Ce document n'est pas publié",
  /** Tooltip when action is disabled because the operation is not ready   */
  'action.unpublish.disabled.not-ready': "L'opération n'est pas prête",
  /** Label for the "Unpublish" document action */
  'action.unpublish.label': 'Supprimer la publication',
  /** Fallback tooltip for the Unpublish document action when publish is invoked for a document with live edit enabled.*/
  'action.unpublish.live-edit.disabled':
    'Ce document a l’édition en direct activée et ne peut pas être dépublié',

  /** The text for the restore button on the deleted document banner */
  'banners.deleted-document-banner.restore-button.text': 'Restaurer la version la plus récente',
  /** The text content for the deleted document banner */
  'banners.deleted-document-banner.text': 'Ce document a été supprimé.',
  /** The text content for the deprecated document type banner */
  'banners.deprecated-document-type-banner.text': 'Ce type de document a été déprécié.',
  /** The text for the permission check banner if the user only has one role, and it does not allow updating this document */
  'banners.permission-check-banner.missing-permission_create_one':
    "Votre rôle <Roles/> n'a pas les autorisations pour créer ce document.",
  /** The text for the permission check banner if the user only has multiple roles, but they do not allow updating this document */
  'banners.permission-check-banner.missing-permission_create_other':
    "Vos rôles <Roles/> n'ont pas les autorisations pour créer ce document.",
  /** The text for the permission check banner if the user only has one role, and it does not allow updating this document */
  'banners.permission-check-banner.missing-permission_update_one':
    "Votre rôle <Roles/> n'a pas les autorisations pour mettre à jour ce document.",
  /** The text for the permission check banner if the user only has multiple roles, but they do not allow updating this document */
  'banners.permission-check-banner.missing-permission_update_other':
    "Vos rôles <Roles/> n'ont pas les autorisations pour mettre à jour ce document.",
  /** The text for the reload button */
  'banners.reference-changed-banner.reason-changed.reload-button.text': 'Recharger la référence',
  /** The text for the reference change banner if the reason is that the reference has been changed */
  'banners.reference-changed-banner.reason-changed.text':
    'Cette référence a changé depuis que vous l’avez ouverte.',
  /** The text for the close button */
  'banners.reference-changed-banner.reason-removed.close-button.text': 'Fermer la référence',
  /** The text for the reference change banner if the reason is that the reference has been deleted */
  'banners.reference-changed-banner.reason-removed.text':
    'Cette référence a été supprimée depuis que vous l’avez ouverte.',

  /** Browser/tab title when creating a new document of a given type */
  'browser-document-title.new-document': 'Nouveau {{schemaType}}',
  /** Browser/tab title when editing a document where the title cannot be resolved from preview configuration */
  'browser-document-title.untitled-document': 'Sans titre',

  /** The action menu button aria-label */
  'buttons.action-menu-button.aria-label': 'Ouvrir les actions du document',
  /** The action menu button tooltip */
  'buttons.action-menu-button.tooltip': 'Actions du document',
  /** The aria-label for the split pane button on the document panel header */
  'buttons.split-pane-button.aria-label': 'Diviser le volet à droite',
  /** The tool tip for the split pane button on the document panel header */
  'buttons.split-pane-button.tooltip': 'Diviser le volet à droite',
  /** The title for the close button on the split pane on the document panel header */
  'buttons.split-pane-close-button.title': 'Fermer le volet divisé',
  /** The title for the close group button on the split pane on the document panel header */
  'buttons.split-pane-close-group-button.title': 'Fermer le groupe de volets',

  /** The text in the "Cancel" button in the confirm delete dialog that cancels the action and closes the dialog */
  'confirm-delete-dialog.cancel-button.text': 'Annuler',
  /** Used in `confirm-delete-dialog.cdr-summary.title` */
  'confirm-delete-dialog.cdr-summary.document-count_one': '1 document',
  /** Used in `confirm-delete-dialog.cdr-summary.title` */
  'confirm-delete-dialog.cdr-summary.document-count_other': '{{count}} documents',
  /** The text that appears in the subtitle `<summary>` that lists the datasets below the title */
  'confirm-delete-dialog.cdr-summary.subtitle_one': 'Dataset : {{datasets}}',
  /** The text that appears in the subtitle `<summary>` that lists the datasets below the title */
  'confirm-delete-dialog.cdr-summary.subtitle_other': 'Datasets : {{datasets}}',
  /** The text that appears in the subtitle `<summary>` that lists the datasets below the title */
  'confirm-delete-dialog.cdr-summary.subtitle_unavailable_one': 'Dataset indisponible',
  /** The text that appears in the subtitle `<summary>` that lists the datasets below the title */
  'confirm-delete-dialog.cdr-summary.subtitle_unavailable_other': 'Datasets indisponibles',
  /** The text that appears in the title `<summary>` that includes the list of CDRs (singular) */
  'confirm-delete-dialog.cdr-summary.title_one': '{{documentCount}} dans un autre dataset',
  /** The text that appears in the title `<summary>` that includes the list of CDRs (plural) */
  'confirm-delete-dialog.cdr-summary.title_other': '{{documentCount}} dans {{count}} datasets',
  /** Appears when hovering over the copy button to copy */
  'confirm-delete-dialog.cdr-table.copy-id-button.tooltip': 'Copier l’ID dans le presse-papiers',
  /** The header for the dataset column in the list of cross-dataset references found */
  'confirm-delete-dialog.cdr-table.dataset.label': 'Dataset',
  /** The header for the document ID column in the list of cross-dataset references found */
  'confirm-delete-dialog.cdr-table.document-id.label': 'ID du document',
  /** The toast title when the copy button has been clicked */
  'confirm-delete-dialog.cdr-table.id-copied-toast.title':
    'ID du document copié dans le presse-papiers !',
  /** The header for the project ID column in the list of cross-dataset references found */
  'confirm-delete-dialog.cdr-table.project-id.label': 'ID du projet',
  /** The text in the "Delete anyway" button in the confirm delete dialog that confirms the action */
  'confirm-delete-dialog.confirm-anyway-button.text_delete': 'Supprimer quand même',
  /** The text in the "Unpublish anyway" button in the confirm delete dialog that confirms the action */
  'confirm-delete-dialog.confirm-anyway-button.text_unpublish': 'Retirer la publication quand même',
  /** The text in the "Delete now" button in the confirm delete dialog that confirms the action */
  'confirm-delete-dialog.confirm-button.text_delete': 'Supprimer maintenant',
  /** The text in the "Unpublish now" button in the confirm delete dialog that confirms the action */
  'confirm-delete-dialog.confirm-button.text_unpublish': 'Retirer la publication maintenant',
  /** If no referring documents are found, this text appears above the cancel and confirmation buttons */
  'confirm-delete-dialog.confirmation.text_delete':
    'Êtes-vous sûr de vouloir supprimer “<DocumentTitle/>” ?',
  /** If no referring documents are found, this text appears above the cancel and confirmation buttons */
  'confirm-delete-dialog.confirmation.text_unpublish':
    'Êtes-vous sûr de vouloir retirer la publication de “<DocumentTitle/>” ?',
  /** The text body of the error dialog. */
  'confirm-delete-dialog.error.message.text':
    'Une erreur s’est produite lors du chargement des documents référencés.',
  /** The text in the retry button of the confirm delete dialog if an error occurred. */
  'confirm-delete-dialog.error.retry-button.text': 'Réessayer',
  /** The header of the confirm delete dialog if an error occurred while the confirm delete dialog was open. */
  'confirm-delete-dialog.error.title.text': 'Erreur',
  /** The header of the confirm delete dialog */
  'confirm-delete-dialog.header.text_delete': 'Supprimer le document ?',
  /** The header of the confirm delete dialog */
  'confirm-delete-dialog.header.text_unpublish': 'Retirer la publication du document ?',
  /** The text that appears while the referring documents are queried */
  'confirm-delete-dialog.loading.text': 'Recherche de documents référents…',
  /** Shown if there are references to other documents but the user does not have the permission to see the relevant document IDs */
  'confirm-delete-dialog.other-reference-count.title_one': '1 autre référence non affichée',
  /** Shown if there are references to other documents but the user does not have the permission to see the relevant document IDs */
  'confirm-delete-dialog.other-reference-count.title_other':
    '{{count}} autres références non affichées',
  /** Text in the tooltip of this component if hovering over the info icon */
  'confirm-delete-dialog.other-reference-count.tooltip':
    "Nous ne pouvons pas afficher les métadonnées pour ces références en raison d'un jeton d'accès manquant pour les datasets concernés.",
  /** Appears when unable to render a document preview in the referring document list */
  'confirm-delete-dialog.preview-item.preview-unavailable.subtitle': 'ID : {{documentId}}',
  /** Appears when unable to render a document preview in the referring document list */
  'confirm-delete-dialog.preview-item.preview-unavailable.title': 'Aperçu indisponible',
  /** Warns the user of affects to other documents if the action is confirmed (delete) */
  'confirm-delete-dialog.referential-integrity-disclaimer.text_delete':
    'Si vous supprimez ce document, les documents qui y font référence ne pourront plus y accéder.',
  /** Warns the user of affects to other documents if the action is confirmed (unpublish) */
  'confirm-delete-dialog.referential-integrity-disclaimer.text_unpublish':
    'Si vous retirez la publication de ce document, les documents qui y font référence ne pourront plus y accéder.',
  /** Tells the user the count of how many other referring documents there are before listing them. (singular) */
  'confirm-delete-dialog.referring-document-count.text_one':
    '1 document fait référence à “<DocumentTitle/>”',
  /** Tells the user the count of how many other referring documents there are before listing them. (plural) */
  'confirm-delete-dialog.referring-document-count.text_other':
    '{{count}} documents font référence à “<DocumentTitle/>”',
  /** Describes the list of documents that refer to the one trying to be deleted (delete) */
  'confirm-delete-dialog.referring-documents-descriptor.text_delete':
    'Vous ne pourrez peut-être pas supprimer “<DocumentTitle/>” car les documents suivants y font référence :',
  /** Describes the list of documents that refer to the one trying to be deleted (unpublish) */
  'confirm-delete-dialog.referring-documents-descriptor.text_unpublish':
    'Vous ne pourrez peut-être pas retirer la publication de “<DocumentTitle/>” car les documents suivants y font référence :',

  /** The text for the cancel button in the confirm dialog used in document action shortcuts if none is provided */
  'confirm-dialog.cancel-button.fallback-text': 'Annuler',
  /** The text for the confirm button in the confirm dialog used in document action shortcuts if none is provided */
  'confirm-dialog.confirm-button.fallback-text': 'Confirmer',

  /** For the default structure definition, the title for the "Content" pane */
  'default-definition.content-title': 'Contenu',

  /** The text shown if there was an error while getting the document's title via a preview value */
  'doc-title.error.text': 'Erreur : {{errorMessage}}',
  /** The text shown if the preview value for a document is non-existent or empty */
  'doc-title.fallback.text': 'Sans titre',
  /** The text shown if a document's title via a preview value cannot be determined due to an unknown schema type */
  'doc-title.unknown-schema-type.text': 'Type de schéma inconnu : {{schemaType}}',

  /** Tooltip text shown for the close button of the document inspector */
  'document-inspector.close-button.tooltip': 'Fermer',
  /** The title shown in the dialog header, when inspecting a valid document */
  'document-inspector.dialog.title': 'Inspection de <DocumentTitle/>',
  /** The title shown in the dialog header, when the document being inspected is not created yet/has no value */
  'document-inspector.dialog.title-no-value': 'Aucune valeur',
  /** Title shown for menu item that opens the "Inspect" dialog */
  'document-inspector.menu-item.title': 'Inspecter',
  /** the placeholder text for the search input on the inspect dialog */
  'document-inspector.search.placeholder': 'Rechercher',
  /** The "parsed" view mode, meaning the JSON is searchable, collapsible etc */
  'document-inspector.view-mode.parsed': 'Analysé',
  /** The "raw" view mode, meaning the JSON is presented syntax-highlighted, but with no other features - optimal for copying */
  'document-inspector.view-mode.raw-json': 'JSON brut',

  /** The text for when a form is hidden */
  'document-view.form-view.form-hidden': 'Ce formulaire est caché',
  /** Fallback title shown when a form title is not provided */
  'document-view.form-view.form-title-fallback': 'Sans titre',
  /** The text for when the form view is loading a document */
  'document-view.form-view.loading': 'Chargement du document…',
  /** The description of the sync lock toast on the form view */
  'document-view.form-view.sync-lock-toast.description':
    'Veuillez patienter pendant que le document se synchronise. Cela se produit généralement juste après la publication du document et cela ne devrait pas prendre plus de quelques secondes',
  /** The title of the sync lock toast on the form view */
  'document-view.form-view.sync-lock-toast.title': 'Synchronisation du document…',

  /** The loading messaging for when the tooltip is still loading permission info */
  'insufficient-permissions-message-tooltip.loading-text': 'Chargement…',

  /** --- Menu items --- */
  /** The menu item group title to use for the Action menu items */
  'menu-item-groups.actions-group': 'Actions',
  /** The menu item group title to use for the Layout menu items */
  'menu-item-groups.layout-group': 'Disposition',
  /** The menu item group title to use for the Sort menu items */
  'menu-item-groups.sorting-group': 'Trier',

  /** The menu item title to use the compact view */
  'menu-items.layout.compact-view': 'Vue compacte',
  /** The menu item title to use the detailed view */
  'menu-items.layout.detailed-view': 'Vue détaillée',
  /** The menu item title to Sort by Created */
  'menu-items.sort-by.created': 'Trier par date de création',
  /** The menu item title to Sort by Last Edited */
  'menu-items.sort-by.last-edited': 'Trier par dernière édition',

  /** The link text of the no document type screen that appears directly below the subtitle */
  'no-document-types-screen.link-text': 'Apprenez comment ajouter un type de document →',
  /** The subtitle of the no document type screen that appears directly below the title */
  'no-document-types-screen.subtitle':
    'Veuillez définir au moins un type de document dans votre schéma.',
  /** The title of the no document type screen */
  'no-document-types-screen.title': 'Aucun type de document',

  /** Text shown on back button visible on smaller breakpoints */
  'pane-header.back-button.text': 'Retour',
  /** tooltip text (via `title` attribute) for the menu button */
  'pane-header.context-menu-button.tooltip': 'Afficher le menu',
  /** Appears in a document list pane header if there are more than one option for create. This is the label for that menu */
  'pane-header.create-menu.label': 'Créer',
  /** Tooltip displayed on the create new button in document lists */
  'pane-header.create-new-button.tooltip': 'Créer un nouveau document',
  /** The `aria-label` for the disabled button in the pane header if create permissions are granted */
  'pane-header.disabled-created-button.aria-label': 'Permissions insuffisantes',

  /** The text shown in the tooltip of pane item previews of documents if there are unpublished edits */
  'pane-item.draft-status.has-draft.tooltip': 'Modifié <RelativeTime/>',
  /** The text shown in the tooltip of pane item previews of documents if there are no unpublished edits */
  'pane-item.draft-status.no-draft.tooltip': 'Aucune modification non publiée',
  /** The subtitle tor pane item previews if there isn't a matching schema type found */
  'pane-item.missing-schema-type.subtitle': 'Document : <Code>{{documentId}}</Code>',
  /** The title tor pane item previews if there isn't a matching schema type found */
  'pane-item.missing-schema-type.title':
    'Aucun schéma trouvé pour le type <Code>{{documentType}}</Code>',
  /** The text shown in the tooltip of pane item previews of documents if there are unpublished edits */
  'pane-item.published-status.has-published.tooltip': 'Publié <RelativeTime/>',
  /** The text shown in the tooltip of pane item previews of documents if there are no unpublished edits */
  'pane-item.published-status.no-published.tooltip': 'Aucune publication',

  /** The text used in the document header title if there is an error */
  'panes.document-header-title.error.text': 'Erreur : {{error}}',
  /** The text used in the document header title if creating a new item */
  'panes.document-header-title.new.text': 'Nouveau {{schemaType}}',
  /** The text used in the document header title if no other title can be determined */
  'panes.document-header-title.untitled.text': 'Sans titre',
  /** The text for the retry button on the document list pane */
  'panes.document-list-pane.error.retry-button.text': 'Réessayer',
  /** The error text on the document list pane */
  'panes.document-list-pane.error.text': 'Erreur : <Code>{{error}}</Code>',
  /** The error title on the document list pane */
  'panes.document-list-pane.error.title': 'Impossible de récupérer les éléments de la liste',
  /** The text of the document list pane if more than a maximum number of documents are returned */
  'panes.document-list-pane.max-items.text': "Affichage d'un maximum de {{limit}} documents",
  /** The text of the document list pane if no documents are found for a specified type */
  'panes.document-list-pane.no-documents-of-type.text': 'Aucun document de ce type',
  /** The text of the document list pane if no documents are found */
  'panes.document-list-pane.no-documents.text': 'Aucun résultat trouvé',
  /** The text of the document list pane if no documents are found matching specified criteria */
  'panes.document-list-pane.no-matching-documents.text': 'Aucun document correspondant',
  /** The aria-label for the search input on the document list pane */
  'panes.document-list-pane.search-input.aria-label': 'Rechercher dans la liste',
  /** The search input for the search input on the document list pane */
  'panes.document-list-pane.search-input.placeholder': 'Rechercher dans la liste',
  /** The summary title when displaying an error for a document operation result */
  'panes.document-operation-results.error.summary.title': 'Détails',
  /** The text when a generic operation failed (fallback, generally not shown)  */
  'panes.document-operation-results.operation-error':
    'Une erreur s’est produite lors de {{context}}',
  /** The text when a delete operation failed  */
  'panes.document-operation-results.operation-error_delete':
    'Une erreur s’est produite lors de la tentative de suppression de ce document. Cela signifie généralement qu’il existe d’autres documents qui y font référence.',
  /** The text when an unpublish operation failed  */
  'panes.document-operation-results.operation-error_unpublish':
    'Une erreur s’est produite lors de la tentative de dépublication de ce document. Cela signifie généralement qu’il existe d’autres documents qui y font référence.',
  /** The text when a generic operation succeeded (fallback, generally not shown)  */
  'panes.document-operation-results.operation-success':
    'L’opération {{context}} sur le document a été réalisée avec succès',
  /** The text when a delete operation succeeded  */
  'panes.document-operation-results.operation-success_delete':
    'Le document a été supprimé avec succès',
  /** The text when a discard changes operation succeeded  */
  'panes.document-operation-results.operation-success_discardChanges':
    'Toutes les modifications depuis la dernière publication ont maintenant été abandonnées. Le brouillon écarté peut toujours être récupéré depuis l’historique',
  /** The text when a publish operation succeeded  */
  'panes.document-operation-results.operation-success_publish': 'Le document a été publié',
  /** The text when a restore operation succeeded  */
  'panes.document-operation-results.operation-success_restore':
    '<Strong>{{title}}</Strong> a été restauré',
  /** The text when an unpublish operation succeeded  */
  'panes.document-operation-results.operation-success_unpublish':
    'Le document a été dépublié. Un brouillon a été créé à partir de la dernière version publiée.',
  /** The document title shown when document title is "undefined" in operation message */
  'panes.document-operation-results.operation-undefined-title': 'Sans titre',
  /** The title of the reconnecting toast */
  'panes.document-pane-provider.reconnecting.title': 'Connexion perdue. Reconnexion…',
  /** The loading message for the document not found pane */
  'panes.document-pane.document-not-found.loading': 'Chargement du document…',
  /** The text of the document not found pane if the schema is known */
  'panes.document-pane.document-not-found.text':
    "Le type de document n'est pas défini, et un document avec l'identifiant <Code>{{id}}</Code> n'a pas pu être trouvé.",
  /** The title of the document not found pane if the schema is known */
  'panes.document-pane.document-not-found.title': "Le document n'a pas été trouvé",
  /** The text of the document not found pane if the schema is not found */
  'panes.document-pane.document-unknown-type.text':
    "Ce document a le type de schéma <Code>{{documentType}}</Code>, qui n'est pas défini comme un type dans le schéma local du studio de contenu.",
  /** The title of the document not found pane if the schema is not found or unknown */
  'panes.document-pane.document-unknown-type.title':
    'Type de document inconnu : <Code>{{documentType}}</Code>',
  /** The title of the document not found pane if the schema is unknown */
  'panes.document-pane.document-unknown-type.without-schema.text':
    "Ce document n'existe pas, et aucun type de schéma n'a été spécifié pour celui-ci.",
  /** Default message shown while resolving the structure definition for an asynchronous node */
  'panes.resolving.default-message': 'Chargement…',
  /** Message shown while resolving the structure definition for an asynchronous node and it is taking a while (more than 5s) */
  'panes.resolving.slow-resolve-message': 'Toujours en chargement…',
  /** The text to display when type is missing */
  'panes.unknown-pane-type.missing-type.text':
    'L’élément de structure manque de la propriété <Code>type</Code> requise.',
  /** The title of the unknown pane */
  'panes.unknown-pane-type.title': 'Type de volet inconnu',
  /** The text to display when type is unknown */
  'panes.unknown-pane-type.unknown-type.text':
    'L’élément de structure de type <Code>{{type}}</Code> n’est pas une entité connue.',

  /** The text for the "Open preview" action for a document */
  'production-preview.menu-item.title': 'Ouvrir l’aperçu',

  /** Label for button when status is saved */
  'status-bar.document-status-pulse.status.saved.text': 'Enregistré',
  /** Label for button when status is syncing */
  'status-bar.document-status-pulse.status.syncing.text': 'Enregistrement...',
  /** Accessibility label indicating when the document was last published, in relative time, eg "3 weeks ago" */
  'status-bar.publish-status-button.last-published-time.aria-label':
    'Dernière publication {{relativeTime}}',
  /** Text for tooltip showing explanation of timestamp/relative time, eg "Last published <RelativeTime/>" */
  'status-bar.publish-status-button.last-published-time.tooltip':
    'Dernière publication <RelativeTime/>',
  /** Accessibility label indicating when the document was last updated, in relative time, eg "2 hours ago" */
  'status-bar.publish-status-button.last-updated-time.aria-label':
    'Dernière mise à jour {{relativeTime}}',
  /** Text for tooltip showing explanation of timestamp/relative time, eg "Last updated <RelativeTime/>" */
  'status-bar.publish-status-button.last-updated-time.tooltip':
    'Dernière mise à jour <RelativeTime/>',
  /** Aria label for the button */
  'status-bar.review-changes-button.aria-label': 'Revoir les modifications',
  /** Label for button when status is saved */
  'status-bar.review-changes-button.status.saved.text': 'Enregistré !',
  /** Label for button when status is syncing */
  'status-bar.review-changes-button.status.syncing.text': 'Enregistrement...',
  /** Text for the secondary text for tooltip for the button */
  'status-bar.review-changes-button.tooltip.changes-saved': 'Modifications enregistrées',
  /** Primary text for tooltip for the button */
  'status-bar.review-changes-button.tooltip.text': 'Revoir les modifications',

  /** The text that appears in side the documentation link */
  'structure-error.docs-link.text': 'Voir la documentation',
  /** Labels the error message or error stack of the structure error screen */
  'structure-error.error.label': 'Erreur',
  /** The header that appears at the top of the error screen */
  'structure-error.header.text': 'Une erreur est survenue lors de la lecture de la structure',
  /** The text in the reload button to retry rendering the structure */
  'structure-error.reload-button.text': 'Recharger',
  /** Labels the structure path of the structure error screen */
  'structure-error.structure-path.label': 'Chemin de la structure',
})
