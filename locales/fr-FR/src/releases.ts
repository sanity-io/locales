import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Action text for adding a document to release */
  'action.add-document': 'Ajouter un document',
  /** Action text for archiving a release */
  'action.archive': 'Archiver la version',
  /** Tooltip for when the archive release action is disabled due to release being scheduled  */
  'action.archive.tooltip': "Déplanifiez cette version pour l'archiver",
  /** Action text for showing the archived releases */
  'action.archived': 'Archivées',
  /** Menu item label for copying release ID */
  'action.copy-release-id.label': "Copier l'ID de la version",
  /** Menu item label for copying release URL */
  'action.copy-release-link.label': "Copier l'URL de la version",
  /** Menu item label for copying release title */
  'action.copy-release-title.label': 'Copier le titre de la version',
  /** Tooltip for copy release actions button */
  'action.copy-release.label': 'Copier',
  /** Action text for staging a new revert release */
  'action.create-revert-release': 'Créer une nouvelle version',
  /** Action text for deleting a release */
  'action.delete-release': 'Supprimer la version',
  /** Menu item label for showing scheduled drafts */
  'action.drafts': 'Brouillons planifiés',
  /** Action text for duplicating a release */
  'action.duplicate-release': 'Dupliquer la version',
  /** Action text for editing a release */
  'action.edit': 'Modifier la version',
  /** Action text for reverting a release immediately without staging changes */
  'action.immediate-revert-release': 'Rétablir maintenant',
  /** Action text for opening a release */
  'action.open': 'Active',
  /** Action text for showing the paused scheduled drafts */
  'action.paused': 'En pause',
  /** Action text for publishing all documents in a release (and the release itself) */
  'action.publish-all-documents': 'Exécuter la version',
  /** Menu item label for showing releases (multi-document releases) */
  'action.releases': 'Versions',
  /** Action text for reverting a release */
  'action.revert': 'Rétablir la version',
  /** Action message for when document is scheduled for unpublishing a document and you want to no longer unpublish it */
  'action.revert-unpublish-actions': 'Annuler la dépublication lors de la mise en ligne',
  /** Text for the review changes button in release tool */
  'action.review': 'Examiner les modifications',
  /** Action text for scheduling a release */
  'action.schedule': 'Planifier la version...',
  /** Action text for scheduling unpublish of a draft document */
  'action.schedule-unpublish': 'Planifier la dépublication',
  /** Tooltip text for when schedule unpublish is disabled because document is not published */
  'action.schedule-unpublish.disabled.not-published':
    'Le document doit être publié pour planifier sa dépublication',
  /** Label for unarchiving a release */
  'action.unarchive': 'Désarchiver la version',
  /** Action text for unpublishing a document in a release in the context menu */
  'action.unpublish': 'Dépublier',
  /** Action message for scheduling an unpublished of a document  */
  'action.unpublish-doc-actions': 'Dépublier lors de la publication de la release',
  /** Action text for unscheduling a release */
  'action.unschedule': 'Annuler la planification de la release',

  /** Text for the summary button in release tool */
  'actions.summary': 'Résumé',

  'activity.event.add-document': 'A ajouté une version de document',
  'activity.event.archive': 'A archivé la release <strong>{{releaseTitle}}</strong>',
  'activity.event.create':
    'A créé la release <strong>{{releaseTitle}}</strong> <ScheduleTarget>ciblant </ScheduleTarget>',
  'activity.event.discard-document': 'A supprimé une version de document',
  'activity.event.edit': "A défini l'heure de la release sur <ScheduleTarget></ScheduleTarget>",
  /**The text to display in the changes when the release type changes to asap */
  'activity.event.edit-time-asap': 'Dès que possible',
  /**The text to display in the changes when the release type changes to undecided */
  'activity.event.edit-time-undecided': 'Indécis',
  'activity.event.publish': 'A publié la release <strong>{{releaseTitle}}</strong>',
  'activity.event.schedule': 'Marqué comme planifié',
  /** The text for the activity event when the release is unarchived */
  'activity.event.unarchive': 'A désarchivé la release <strong>{{releaseTitle}}</strong>',
  /** The text for the activity event when the release is unscheduled */
  'activity.event.unschedule': 'Marqué comme non planifié',
  /** Tooltip/label for the button that closes the activity overlay panel */
  'activity.panel.close': undefined, // 'Close activity'
  /** The loading text for when releases are loading */
  'activity.panel.error':
    "Une erreur s'est produite lors de la récupération de l'activité de la release",
  /** The loading text for when releases are loading */
  'activity.panel.loading': "Chargement de l'activité de la release",
  /** The title for the activity panel shown in the releases detail screen */
  'activity.panel.title': 'Activité',

  /** Label for the button to proceed with archiving a release */
  'archive-dialog.confirm-archive-button': 'Oui, archiver la release',
  /** Description for the dialog confirming the archive of a release with one document */
  'archive-dialog.confirm-archive-description_one': 'Cela archivera 1 version de document.',
  /** Description for the dialog confirming the archive of a release with more than one document */
  'archive-dialog.confirm-archive-description_other':
    'Cela archivera {{count}} versions de document.',
  /** Header for the dialog confirming the archive of a release */
  'archive-dialog.confirm-archive-header': 'Êtes-vous sûr de vouloir archiver cette release ?',
  /** Title for the dialog confirming the archive of a release */
  'archive-dialog.confirm-archive-title':
    "Êtes-vous sûr de vouloir archiver la release <strong>'{{title}}'</strong> ?",

  /** Description for information card on a published or archived release to description retention effects */
  'archive-info.description':
    'Elle sera disponible pendant {{retentionDays}} jours, puis automatiquement supprimée le {{removalDate}}. <Link>En savoir plus sur la rétention</Link>.',
  /** Title for information card on a archived release */
  'archive-info.title': 'Cette release est archivée',

  /** Banner text showing count of active scheduled drafts requiring confirmation with one draft */
  'banner.confirm-active-scheduled-drafts_one':
    'Il y a {{count}} Scheduled Draft qui nécessite une confirmation de planification',
  /** Banner text showing count of active scheduled drafts requiring confirmation with multiple drafts */
  'banner.confirm-active-scheduled-drafts_other':
    'Il y a {{count}} Scheduled Drafts qui nécessitent une confirmation de planification',
  /** Button text for confirming scheduling of active drafts */
  'banner.confirm-active-scheduled-drafts.button': 'Reprendre la planification',
  /** Button text when confirming schedules from paused mode */
  'banner.confirm-active-scheduled-drafts.button-paused': 'Reprendre toutes les planifications',
  /** Banner text shown when drafts mode is disabled but there are still scheduled drafts */
  'banner.drafts-mode-disabled':
    'Le mode Drafts a été désactivé, mais il reste encore des scheduled drafts à publier.',
  /** Banner text shown when navigating to a release that does not exist */
  'banner.release-not-found': 'Cette release est introuvable',
  /** Tooltip for the dismiss button in the release not found banner */
  'banner.release-not-found.dismiss': 'Ignorer',
  /** Banner text shown when scheduled drafts feature is disabled but there are still scheduled drafts */
  'banner.scheduled-drafts-disabled':
    'Les Scheduled Drafts ont été désactivés, mais il reste encore des scheduled drafts à publier.',

  /** Title for changes to published documents */
  'changes-published-docs.title': 'Modifications des documents publiés',

  /** Dialog confirm button text for confirming all scheduled drafts */
  'confirm-active-scheduled-drafts-dialog.confirm-button': 'Confirmer les planifications',
  /** Dialog description for confirming active scheduled drafts */
  'confirm-active-scheduled-drafts-dialog.description':
    'Planifier tous les Scheduled Drafts en pause pour leurs dates de publication prévues',
  /** Dialog warning when some scheduled drafts have past dates */
  'confirm-active-scheduled-drafts-dialog.past-dates-warning':
    'Certains de ces Scheduled Drafts sont planifiés pour des dates passées. La confirmation des planifications publiera immédiatement ces versions de documents.',
  /** Dialog title for confirming active scheduled drafts */
  'confirm-active-scheduled-drafts-dialog.title': 'Reprendre les Scheduled Drafts',

  /** Suffix for when a release is a copy of another release */
  'copy-suffix': 'Copie',

  /** Confirm button text for overriding existing draft */
  'copy-to-draft-dialog.confirm-button': 'Oui, remplacer le Draft',
  /** Description for dialog when copying version to draft that already exists */
  'copy-to-draft-dialog.description':
    'Une version draft de ce document existe déjà. Copiez la version actuelle dans le draft et remplacez la version draft existante.',
  /** Title for dialog when copying version to draft that already exists */
  'copy-to-draft-dialog.title': 'La version draft existe déjà',

  /** Text for when a release / document was created */
  'created': 'Créé <RelativeTime/>',

  /** Activity inspector button text */
  'dashboard.details.activity': 'Activité',
  /** Label for the "created" metadata in the release detail header zone. */
  'dashboard.details.metadata.created': undefined, // 'Created'
  /** Label for the document-count metadata in the release detail header zone. */
  'dashboard.details.metadata.documents': undefined, // 'Documents'
  /** Label for the schedule/type metadata in the release detail header zone. */
  'dashboard.details.metadata.schedule': undefined, // 'Schedule'
  /** Label for the validation status metadata in the release detail header zone. */
  'dashboard.details.metadata.status': undefined, // 'Status'
  /** Status badge value when the release has no documents to validate. */
  'dashboard.details.metadata.status-empty': undefined, // 'No documents'
  /** Status badge value when one or more documents have validation errors. */
  'dashboard.details.metadata.status-errors': undefined, // 'Errors'
  /** Status badge value when every document in the release is valid. */
  'dashboard.details.metadata.status-valid': undefined, // 'Valid'
  /** Status badge value while document validation is still running. */
  'dashboard.details.metadata.status-validating': undefined, // 'Validating'
  /** Text for the releases detail screen in the pin release button. */
  'dashboard.details.pin-release': 'Épingler la release au studio',
  /** Text for the releases detail screen when a release was published ASAP */
  'dashboard.details.published-asap': 'Publié',
  /** Text for the releases detail screen when a release was published from scheduling */
  'dashboard.details.published-on': 'Publié le {{date}}',
  /** Text for the releases detail screen in the unpin release button. */
  'dashboard.details.unpin-release': 'Désépingler la release du studio',

  /** Label for the button to proceed deleting a release */
  'delete-dialog.confirm-delete-button': 'Oui, supprimer la release',
  /** Description for the dialog confirming the deleting of a release with one document */
  'delete-dialog.confirm-delete-description_one': 'Cela supprimera 1 version de document.',
  /** Description for the dialog confirming the deleting of a release with more than one document */
  'delete-dialog.confirm-delete-description_other':
    'Cela supprimera {{count}} versions de documents.',
  /** Header for deleting a release dialog */
  'delete-dialog.confirm-delete.header': 'Êtes-vous sûr de vouloir supprimer cette release ?',

  /** Label when a release has been deleted by a different user */
  'deleted-release': "La release '<strong>{{title}}</strong>' a été supprimée",

  /** Text for when there's no changes in a release diff */
  'diff.list-empty': 'La liste des modifications est vide, voir le document',
  /** Text for when there's no changes in a release diff */
  'diff.no-changes': 'Aucune modification',

  /** Description for discarding a draft of a document dialog */
  'discard-version-dialog.description-draft':
    'Cela supprimera définitivement toutes les modifications apportées à ce document. Cette action est irréversible.',
  /** Description for discarding a version of a document dialog */
  'discard-version-dialog.description-release':
    "Cela supprimera définitivement toutes les modifications apportées à ce document dans la release '<strong>{{releaseTitle}}</strong>'. Cette action est irréversible.",
  /** Title for dialog for discarding a draft of a document */
  'discard-version-dialog.header-draft': 'Abandonner le brouillon ?',
  /** Header for discarding a version from a release of a document dialog */
  'discard-version-dialog.header-release':
    "Retirer le document de la release '<strong>{{releaseTitle}}</strong>' ?",
  /** Title for dialog for discarding a draft of a document */
  'discard-version-dialog.title-draft': 'Abandonner le brouillon',
  /** Title for dialog for discarding a version of a document */
  'discard-version-dialog.title-release': 'Retirer de la release',

  /** Label for when a document in a release has a single validation warning */
  'document-validation.error_one': '{{count}} erreur de validation',
  /** Label for when a document in a release has multiple validation warnings */
  'document-validation.error_other': '{{count}} erreurs de validation',
  /** Tooltip for the validation status when a document has no errors (the "ready" state) */
  'document-validation.valid': undefined, // 'No validation errors'

  /** Label for the button to proceed with duplicating a release */
  'duplicate-dialog.confirm-duplicate-button': 'Oui, dupliquer la release',
  /** Description for the dialog confirming the duplicate of a release with one document */
  'duplicate-dialog.confirm-duplicate-description_one':
    'Cela dupliquera la release et la 1 version de document.',
  /** Description for the dialog confirming the duplicate of a release with more than one document */
  'duplicate-dialog.confirm-duplicate-description_other':
    'Cela dupliquera la release et les {{count}} versions de documents.',
  /** Header for the dialog confirming the duplicate of a release */
  'duplicate-dialog.confirm-duplicate-header': 'Êtes-vous sûr de vouloir dupliquer cette release ?',

  /** Title text displayed for technical error details */
  'error-details-title': "Détails de l'erreur",

  /** Title text when error during release update */
  'failed-edit-title': "Échec de l'enregistrement des modifications",

  /** Title text displayed for releases that failed to publish  */
  'failed-publish-title': 'Échec de la publication',

  /** Title text displayed for releases that failed to schedule  */
  'failed-schedule-title': 'Échec de la planification',

  /** Filter tab label for all documents */
  'filter-tab.all': 'Tous',
  /** Filter tab label for documents with validation errors */
  'filter-tab.errors': 'Erreurs',

  /**The text that will be shown in the footer to indicate the time the release was archived */
  'footer.status.archived': 'Archivée',
  /**The text that will be shown in the footer to indicate the time the release was created */
  'footer.status.created': 'Créée',
  /**The text that will be shown in the footer to indicate the time the release was created */
  'footer.status.edited': 'Modifié',
  /**The text that will be shown in the footer to indicate the time the release was published */
  'footer.status.published': 'Publié',
  /**The text that will be shown in the footer to indicate the time the release was unarchived */
  'footer.status.unarchived': 'Désarchivé',

  /** Label text for the loading state whilst release is being loaded */
  'loading-release': 'Chargement de la version',

  /** Text for when documents of a release are loading */
  'loading-release-documents': 'Chargement des documents',
  /** Description text for when loading documents on a release failed */
  'loading-release-documents.error.description':
    'Nous ne sommes pas en mesure de charger les documents pour cette version. Veuillez réessayer ultérieurement.',
  /** Title text for when loading documents on a release failed */
  'loading-release-documents.error.title': "Une erreur s'est produite",

  /** Label for title of actions for "when releasing" */
  'menu.group.when-releasing': 'Lors de la publication',
  /** Label for the release menu */
  'menu.label': 'Menu de la version',
  /** Tooltip for the release menu */
  'menu.tooltip': 'Actions',

  /** Text for when no archived releases are found */
  'no-archived-release': 'Aucune version archivée',

  /** Tooltip text when there are no paused scheduled drafts */
  'no-paused-release': 'Aucun brouillon planifié en pause',

  /** Text for when no releases are found */
  'no-releases': 'Aucune version',

  /** Text for when no scheduled drafts are found */
  'no-scheduled-drafts': 'Aucun brouillon planifié',

  /** Text for the button name for the release tool */
  'overview.action.documentation': 'Documentation',
  /** Label for the back button on a release detail page (returns to the releases list). The
   * leading arrow already conveys "back", so the label names the destination only. */
  'overview.back-to-all-releases': undefined, // 'All releases'
  /** Tooltip for the calendar button in the release overview */
  'overview.calendar.tooltip': 'Voir le calendrier',
  /** Description for the release tool */
  'overview.description':
    'Les versions sont des collections de modifications de documents qui peuvent être gérées, planifiées et annulées ensemble.',
  /** Text for the placeholder in the search release input  */
  'overview.search-releases-placeholder': 'Rechercher des versions',
  /** Title for the release tool */
  'overview.title': 'Versions',

  /** Tooltip text for releases that have passed their intended publish date */
  'passed-intended-publish-date': 'Cette version a dépassé sa date de publication prévue',

  /** Tooltip text for scheduled drafts that have passed their intended publish date */
  'passed-intended-publish-date-draft': 'Ce brouillon a dépassé sa date de publication prévue',

  /** Description for when a user doesn't have publish or schedule releases */
  'permission-missing-description':
    'Votre rôle limite actuellement ce que vous pouvez voir dans cette version. Vous ne pouvez ni publier ni planifier cette version.',

  /** Text for when a user doesn't have publish or schedule releases */
  'permission-missing-title': 'Accès limité',

  /** Tooltip label when the user doesn't have permission to archive release */
  'permissions.error.archive': "Vous n'avez pas la permission d'archiver cette version",
  /** Tooltip label when the user doesn't have permission to delete release */
  'permissions.error.delete': "Vous n'avez pas la permission de supprimer cette version",
  /** Tooltip label when the user doesn't have permission for discarding a version */
  'permissions.error.discard-version': "Vous n'avez pas la permission de supprimer cette version",
  /** Tooltip label when the user doesn't have permission to duplicate release */
  'permissions.error.duplicate': "Vous n'avez pas la permission de dupliquer cette release",
  /** Tooltip label when the user doesn't have permission to unarchive release */
  'permissions.error.unarchive': "Vous n'avez pas la permission de désarchiver cette release",
  /** Tooltip label when the user doesn't have permission for unpublishing a document */
  'permissions.error.unpublish': "Vous n'avez pas la permission de dépublier ce document",

  /** Tooltip text for when one user is editing a document in a release */
  'presence.tooltip.one':
    '{{displayName}} est en train de modifier ce document dans la release « {{releaseTitle}} » en ce moment',

  /** Tooltip text for publish release action when there are no documents */
  'publish-action.validation.no-documents': "Il n'y a aucun document à publier",

  /** Description for the dialog confirming the publish of a release with one document */
  'publish-dialog.confirm-publish-description_one':
    "La release '<strong>{{title}}</strong>' et son document seront publiés.",
  /** Description for the dialog confirming the publish of a release with multiple documents */
  'publish-dialog.confirm-publish-description_other':
    "La release '<strong>{{title}}</strong>' et ses {{releaseDocumentsLength}} documents seront publiés.",
  /** Title for the dialog confirming the publish of a release */
  'publish-dialog.confirm-publish.title':
    'Êtes-vous sûr de vouloir publier la release et toutes les versions des documents ?',
  /** Label for the checkbox in the publish confirmation dialog for also updating existing drafts to match the release */
  'publish-dialog.confirm-publish.update-drafts-checkbox': 'Mettre à jour les brouillons existants',
  /** Description for the update existing drafts checkbox when one document has an existing draft */
  'publish-dialog.confirm-publish.update-drafts-description_one':
    'Le brouillon existant de {{draftDocumentsLength}} document sera supprimé afin que les brouillons correspondent à la release publiée. Les modifications de brouillon non publiées seront perdues.',
  /** Description for the update existing drafts checkbox when multiple documents have existing drafts */
  'publish-dialog.confirm-publish.update-drafts-description_other':
    'Les brouillons existants de {{draftDocumentsLength}} documents seront supprimés afin que les brouillons correspondent à la release publiée. Les modifications de brouillon non publiées seront perdues.',
  /** Label for when documents in release have validation errors */
  'publish-dialog.validation.error': 'Certains documents contiennent des erreurs de validation',
  /** Label for when documents are being validated */
  'publish-dialog.validation.loading': 'Validation des documents en cours...',
  /** Label for the button when the user doesn't have permissions to publish a release */
  'publish-dialog.validation.no-permission': "Vous n'avez pas la permission de publier",

  /** Title for information card on a published release */
  'publish-info.title': 'Cette release a été publiée avec succès.',

  /** Placeholder title for a release with no title */
  'release-placeholder.title': 'Sans titre',

  /** Description for the dialog confirming the revert of a release with multiple documents */
  'revert-dialog.confirm-revert-description_one':
    'Cela annulera {{releaseDocumentsLength}} version de document.',
  /** Description for the dialog confirming the revert of a release with multiple documents */
  'revert-dialog.confirm-revert-description_other':
    'Cela annulera {{releaseDocumentsLength}} versions de document.',
  /** Checkbox label to confirm whether to create a staged release for revert or immediately revert */
  'revert-dialog.confirm-revert.stage-revert-checkbox-label': 'Annuler immédiatement la release',
  /** Title for the dialog confirming the revert of a release */
  'revert-dialog.confirm-revert.title':
    'Êtes-vous sûr de vouloir annuler la release « {{title}} » ?',
  /** Warning card text for when immediately revert a release with history */
  'revert-dialog.confirm-revert.warning-card':
    "Des modifications ont été apportées aux documents de cette release après leur publication. L'annulation écrasera ces modifications.",

  /** Description of a reverted release */
  'revert-release.description':
    'Annuler les modifications des versions de document dans « {{title}} ».',
  /** Title of a reverted release */
  'revert-release.title': 'Annulation de « {{title}} »',

  /** Description for the review changes button in release tool */
  'review.description': 'Ajoutez des documents à cette release pour examiner les modifications',
  /** Text for when a document is edited */
  'review.edited': 'Modifié <RelativeTime/>',

  /** Schedule release button tooltip when there are no documents to schedule */
  'schedule-action.validation.no-documents': "Il n'y a aucun document à planifier",

  /** Schedule release button tooltip when the release is already scheduled */
  'schedule-button-tooltip.already-scheduled': 'Cette version est déjà planifiée',
  /** Schedule release button tooltip when there are validation errors */
  'schedule-button-tooltip.validation.error':
    'Certains documents contiennent des erreurs de validation',
  /** Schedule release button tooltip when validation is loading */
  'schedule-button-tooltip.validation.loading': 'Validation des documents en cours...',
  /** Schedule release button tooltip when user has no permissions to schedule */
  'schedule-button-tooltip.validation.no-permission': "Vous n'avez pas la permission de planifier",

  /** Title of unschedule release dialog */
  'schedule-button.tooltip': 'Êtes-vous sûr de vouloir annuler la planification de la version ?',

  /** Description for the confirm button for scheduling a release */
  'schedule-dialog.confirm-button': 'Oui, planifier',
  /** Description shown in unschedule relaease dialog */
  'schedule-dialog.confirm-description_one':
    "La version '<strong>{{title}}</strong>' et son document seront publiés à la date sélectionnée.",
  /** Description for the dialog confirming the publish of a release with multiple documents */
  'schedule-dialog.confirm-description_other':
    'La version <strong>{{title}}</strong> et ses {{count}} versions de documents seront planifiées.',
  /** Title for unschedule release dialog */
  'schedule-dialog.confirm-title': 'Planifier la version',
  /** Description for warning that the published schedule time is in the past */
  'schedule-dialog.publish-date-in-past-warning': 'Planifiez pour une date et une heure futures.',
  /** Label for date picker when scheduling a release */
  'schedule-dialog.select-publish-date-label': 'Planifier le',

  /** Confirm button text for the schedule unpublish dialog */
  'schedule-unpublish-dialog.confirm': 'Planifier la dépublication',
  /** Description for the schedule unpublish dialog */
  'schedule-unpublish-dialog.description': 'Sélectionnez quand ce document doit être dépublié.',
  /** Header for the schedule unpublish dialog */
  'schedule-unpublish-dialog.header': 'Planifier le brouillon pour la dépublication',

  /** Placeholder for search of documents in a release */
  'search-documents-placeholder': 'Rechercher des documents',

  /** Text for when the release has no errors found */
  'summary.all-documents-errors-found': 'Tous les documents validés, des problèmes ont été trouvés',
  /** Text for when the release has validated all documents */
  'summary.all-documents-validated': 'Tous les documents validés, aucun problème trouvé',
  /** Text for when the release was created */
  'summary.created': 'Créé <RelativeTime/>',
  /** Text for when the release is composed of one document */
  'summary.document-count_one': '{{count}} document',
  /** Text for when the release is composed of multiple documents */
  'summary.document-count_other': '{{count}} documents',
  /** Text for when the release has some errors found */
  'summary.errors-found':
    'Afin de publier ou de planifier la version, veuillez résoudre les problèmes trouvés dans les documents',
  /** Text for when the release has no documents */
  'summary.no-documents': 'Aucun document',
  /** Description for the empty state when a cardinality-one release has no documents */
  'summary.no-documents-cardinality-one.description':
    'Ce brouillon planifié ne contient pas de document. Il a peut-être été supprimé.',
  /** Title for the empty state when a cardinality-one release has no documents */
  'summary.no-documents-cardinality-one.title': 'Aucun document dans cette version',
  /** Text for when the release has not published */
  'summary.not-published': 'Non publié',
  /** Text for when the release was published */
  'summary.published': 'Publié <RelativeTime/>',
  /** Text for when the release has validated documents */
  'summary.validated-documents': '{{validatedCount}} sur {{totalCount}} documents validés',
  /** Text for validation loading indicator */
  'summary.validating-documents':
    'Validation des documents : {{validatedCount}} sur {{totalCount}}',

  /** add action type that will be shown in the table*/
  'table-body.action.add': 'Ajouter',
  /** Change action type that will be shown in the table*/
  'table-body.action.change': 'Modifier',
  /** Change action type that will be shown in the table*/
  'table-body.action.unpublish': 'Dépublier',

  /** Header for the document table in the release tool - action */
  'table-header.action': 'Action',
  /** Header for the document table in the release tool - Archived */
  'table-header.archivedAt': 'Archivé',
  /** Header for the document table in the release tool - contributors */
  'table-header.contributors': 'Contributeurs',
  /** Header for the document table in the release tool - created by */
  'table-header.created-by': 'Créé par',
  /** Header for the document table in the release tool - document preview */
  'table-header.document': 'Document',
  /** Header for the document table in the release tool - title */
  'table-header.documents': 'Documents',
  /** Header for the document table in the release tool - edited */
  'table-header.edited': 'Modifié',
  /** Header for the document table - last editor (person) column */
  'table-header.edited-by': undefined, // 'Edited by'
  /** Header for the paused scheduled drafts table - intended for */
  'table-header.intended-for': 'Destiné à',
  /** Header for the document table - last edited (relative time) column */
  'table-header.last-edited': undefined, // 'Last edited'
  /** Header for the document table in the release tool - Published */
  'table-header.published-at': 'Publié',
  /** Header for the document table in the release tool - Published */
  'table-header.publishedAt': 'Publié',
  /** Header for the scheduled drafts document table in the release tool - published at */
  'table-header.scheduled-draft.published-at': 'Publié le',
  /** Header for the scheduled drafts document table in the release tool - scheduled for */
  'table-header.scheduled-for': 'Planifié pour',
  /** Header for the document table in the release tool - time */
  'table-header.time': 'Heure',
  /** Header for the  document table in the release tool - release title */
  'table-header.title': 'Version',
  /** Header for the document table in the release tool - type */
  'table-header.type': 'Type',
  /** Header for the document table in the release tool - variant (which variant a document targets) */
  'table-header.variant': undefined, // 'Variant'
  /** Header for the document table in the release tool - when */
  'table-header.when': 'Quand',

  /** Text for the release time label for scheduled releases  which has not been scheduled yet*/
  'time.estimated': 'Estimé',
  /** Text for the release time label for scheduled releases  which has been scheduled*/
  'time.scheduled': 'Planifié',

  /** Text for toast when release failed to archive */
  'toast.archive.error': "Échec de l'archivage de « <strong>{{title}}</strong> » : {{error}}",
  /** Toast error message when bulk scheduling of active drafts fails */
  'toast.confirm-active-scheduled-drafts.error':
    'Échec de la planification des brouillons : {{error}}',
  /** Toast message after copying release ID */
  'toast.copy-release-id.success': "L'ID de la release a été copié dans le presse-papiers",
  /** Toast message after copying release link */
  'toast.copy-release-link.success': 'Le lien de la release a été copié dans le presse-papiers',
  /** Toast message after copying release title */
  'toast.copy-release-title.success': 'Le titre de la release a été copié dans le presse-papiers',
  /** Description for toast when creating new version of document in release failed */
  'toast.create-version.error': "Échec de l'ajout du document à la release : {{error}}",
  /** Description for toast when release deletion failed */
  'toast.delete.error': 'Échec de la suppression de « <strong>{{title}}</strong> » : {{error}}',
  /** Description for toast when release is successfully deleted */
  'toast.delete.success': 'La release « <strong>{{title}}</strong> » a été supprimée avec succès',
  /** Description for toast when release duplication failed */
  'toast.duplicate.error': 'Échec de la duplication de « <strong>{{title}}</strong> » : {{error}}',
  /** Description for toast when release is successfully duplicated */
  'toast.duplicate.success': 'La release « <strong>{{title}}</strong> » a été dupliquée. <Link/>',
  /** Link text for toast link to the duplicated release */
  'toast.duplicate.success-link': 'Voir la release dupliquée',
  /** Text for toast when release has been reverted immediately */
  'toast.immediate-revert.success': 'La release « {{title}} » a été annulée avec succès',
  /** Text for toast when release failed to publish */
  'toast.publish.error': 'Échec de la publication de « <strong>{{title}}</strong> » : {{error}}',
  /** Text for toast when the release was published but the existing drafts could not be updated */
  'toast.publish.update-drafts-error':
    "La release a été publiée, mais les brouillons existants n'ont pas pu être mis à jour : {{error}}",
  /** Text for toast when release has reverted release successfully staged */
  'toast.revert-stage.success':
    'La release de restauration pour « {{title}} » a été créée avec succès. <Link/>',
  /** Link text for toast link to the generated revert release */
  'toast.revert-stage.success-link': 'Voir la release de restauration',
  /** Text for toast when release failed to revert */
  'toast.revert.error': 'Échec de la restauration de la release : {{error}}',
  /** Text for toast when release failed to schedule */
  'toast.schedule.error': 'Échec de la planification de « <strong>{{title}}</strong> » : {{error}}',
  /** Text for toast when release has been scheduled */
  'toast.schedule.success': 'La release « <strong>{{title}}</strong> » a été planifiée.',
  /** Text for toast when release failed to unarchive */
  'toast.unarchive.error': 'Échec du désarchivage de « <strong>{{title}}</strong> » : {{error}}',
  /** Text for toast when release failed to unschedule */
  'toast.unschedule.error':
    'Échec de la déplanification de « <strong>{{title}}</strong> » : {{error}}',

  /** Text for tooltip when a release has been scheduled */
  'type-picker.tooltip.scheduled': 'La release est planifiée, déplanifiez-la pour changer de type',

  /** Text action in unpublish dialog to cancel */
  'unpublish-dialog.action.cancel': 'Annuler',
  /** Text action in unpublish dialog to unpublish */
  'unpublish-dialog.action.unpublish': 'Oui, dépublier lors de la mise en ligne',
  /** Description for unpublish dialog, explaining that all changes made to this document will be lost */
  'unpublish-dialog.description.lost-changes':
    'Toute modification apportée à cette version du document sera perdue.',
  /** Description for the unpublish dialog, explaining that it will create a draft if no draft exists at time of release */
  'unpublish-dialog.description.to-draft':
    "Cela dépubliera le document dans le cadre de la version <Label>{{title}}</Label>, et créera un brouillon si aucun brouillon n'existe au moment de la publication.",
  /** Title for the dialog confirming the unpublish of a release */
  'unpublish-dialog.header':
    'Êtes-vous sûr de vouloir dépublier ce document lors de la publication ?',

  /** Text for when a document is unpublished */
  'unpublish.already-unpublished': 'Ce document est déjà dépublié.',
  /** Tooltip label for when a document is unpublished */
  'unpublish.no-published-version': "Il n'existe pas de version publiée de ce document.",

  /** Description shown in unschedule relaease dialog */
  'unschedule-dialog.confirm-description': 'La version ne sera plus publiée à la date prévue.',
  /** Title for unschedule release dialog */
  'unschedule-dialog.confirm-title':
    'Êtes-vous sûr de vouloir annuler la planification de la version ?',
})
