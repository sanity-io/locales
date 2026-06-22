import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Action text for adding a document to release */
  'action.add-document': 'Afegeix document',
  /** Action text for archiving a release */
  'action.archive': 'Arxiva la versió',
  /** Tooltip for when the archive release action is disabled due to release being scheduled  */
  'action.archive.tooltip': 'Desplanifica aquesta versió per arxivar-la',
  /** Action text for showing the archived releases */
  'action.archived': 'Arxivat',
  /** Menu item label for copying release ID */
  'action.copy-release-id.label': "Copia l'ID de la versió",
  /** Menu item label for copying release URL */
  'action.copy-release-link.label': "Copia l'URL de la versió",
  /** Menu item label for copying release title */
  'action.copy-release-title.label': 'Copia el títol de la versió',
  /** Tooltip for copy release actions button */
  'action.copy-release.label': 'Copia',
  /** Action text for staging a new revert release */
  'action.create-revert-release': 'Crea una nova versió',
  /** Action text for deleting a release */
  'action.delete-release': 'Elimina la versió',
  /** Menu item label for showing scheduled drafts */
  'action.drafts': 'Esborranys planificats',
  /** Action text for duplicating a release */
  'action.duplicate-release': 'Duplica la versió',
  /** Action text for editing a release */
  'action.edit': 'Edita la versió',
  /** Action text for reverting a release immediately without staging changes */
  'action.immediate-revert-release': 'Reverteix ara',
  /** Action text for opening a release */
  'action.open': 'Actiu',
  /** Action text for showing the paused scheduled drafts */
  'action.paused': 'En pausa',
  /** Action text for publishing all documents in a release (and the release itself) */
  'action.publish-all-documents': 'Executa la versió',
  /** Menu item label for showing releases (multi-document releases) */
  'action.releases': 'Versions',
  /** Action text for reverting a release */
  'action.revert': 'Reverteix la versió',
  /** Action message for when document is scheduled for unpublishing a document and you want to no longer unpublish it */
  'action.revert-unpublish-actions': 'Reverteix la despublicació en alliberar',
  /** Text for the review changes button in release tool */
  'action.review': 'Revisa els canvis',
  /** Action text for scheduling a release */
  'action.schedule': 'Planifica la versió...',
  /** Action text for scheduling unpublish of a draft document */
  'action.schedule-unpublish': 'Planifica la despublicació',
  /** Tooltip text for when schedule unpublish is disabled because document is not published */
  'action.schedule-unpublish.disabled.not-published':
    "El document ha d'estar publicat per planificar la despublicació",
  /** Label for unarchiving a release */
  'action.unarchive': 'Desarxiva la versió',
  /** Action text for unpublishing a document in a release in the context menu */
  'action.unpublish': 'Despublicar',
  /** Action message for scheduling an unpublished of a document  */
  'action.unpublish-doc-actions': 'Despublicar en alliberar',
  /** Action text for unscheduling a release */
  'action.unschedule': "Cancel·lar la programació de l'alliberament",

  /** Text for the summary button in release tool */
  'actions.summary': 'Resum',

  /* The text for the activity event when a document is added to a release */
  'activity.event.add-document': "S'ha afegit una versió del document",
  /* The text for the activity event when the release is archived */
  'activity.event.archive': "S'ha arxivat l'alliberament <strong>{{releaseTitle}}</strong>",
  /* The text for the activity event when the release is created */
  'activity.event.create':
    "S'ha creat l'alliberament <strong>{{releaseTitle}}</strong> <ScheduleTarget>amb destinació </ScheduleTarget>",
  /* The text for the activity event when a document is removed from a release */
  'activity.event.discard-document': "S'ha descartat una versió del document",
  'activity.event.edit':
    "S'ha establert l'hora de l'alliberament a <ScheduleTarget></ScheduleTarget>",
  /**The text to display in the changes when the release type changes to asap */
  'activity.event.edit-time-asap': 'Tan aviat com sigui possible',
  /**The text to display in the changes when the release type changes to undecided */
  'activity.event.edit-time-undecided': 'Sense decidir',
  /* The text for the activity event when the release is published */
  'activity.event.publish': "S'ha publicat l'alliberament <strong>{{releaseTitle}}</strong>",
  /* The text for the activity event when the release is scheduled */
  'activity.event.schedule': 'Marcat com a programat',
  /** The text for the activity event when the release is unarchived */
  'activity.event.unarchive': "S'ha desarxivat l'alliberament <strong>{{releaseTitle}}</strong>",
  /** The text for the activity event when the release is unscheduled */
  'activity.event.unschedule': 'Marcat com a no programat',
  /** The loading text for when releases are loading */
  'activity.panel.error': "S'ha produït un error en obtenir l'activitat de l'alliberament",
  /** The loading text for when releases are loading */
  'activity.panel.loading': "S'està carregant l'activitat de l'alliberament",
  /** The title for the activity panel shown in the releases detail screen */
  'activity.panel.title': 'Activitat',

  /** Label for the button to proceed with archiving a release */
  'archive-dialog.confirm-archive-button': "Sí, arxiva l'alliberament",
  /** Description for the dialog confirming the archive of a release with one document */
  'archive-dialog.confirm-archive-description_one': 'Això arxivarà 1 versió del document.',
  /** Description for the dialog confirming the archive of a release with more than one document */
  'archive-dialog.confirm-archive-description_other':
    'Això arxivarà {{count}} versions del document.',
  /** Header for the dialog confirming the archive of a release */
  'archive-dialog.confirm-archive-header': 'Esteu segur que voleu arxivar aquest alliberament?',
  /** Title for the dialog confirming the archive of a release */
  'archive-dialog.confirm-archive-title':
    "Esteu segur que voleu arxivar l'alliberament <strong>'{{title}}'</strong>?",

  /** Description for information card on a published or archived release to description retention effects */
  'archive-info.description':
    "Estarà disponible durant {{retentionDays}} dies i s'eliminarà automàticament el {{removalDate}}. <Link>Més informació sobre la retenció</Link>.",
  /** Title for information card on a archived release */
  'archive-info.title': 'Aquest alliberament està arxivat',

  /** Banner text showing count of active scheduled drafts requiring confirmation with one draft */
  'banner.confirm-active-scheduled-drafts_one':
    'Hi ha {{count}} Scheduled Draft que requereix confirmació de programació',
  /** Banner text showing count of active scheduled drafts requiring confirmation with multiple drafts */
  'banner.confirm-active-scheduled-drafts_other':
    'Hi ha {{count}} Scheduled Drafts que requereixen confirmació de programació',
  /** Button text for confirming scheduling of active drafts */
  'banner.confirm-active-scheduled-drafts.button': 'Reprendre la programació',
  /** Button text when confirming schedules from paused mode */
  'banner.confirm-active-scheduled-drafts.button-paused': 'Reprendre totes les programacions',
  /** Banner text shown when drafts mode is disabled but there are still scheduled drafts */
  'banner.drafts-mode-disabled':
    "El mode d'esborranys s'ha desactivat, però encara hi ha esborranys programats per publicar.",
  /** Banner text shown when navigating to a release that does not exist */
  'banner.release-not-found': "No s'ha pogut trobar aquesta versió",
  /** Tooltip for the dismiss button in the release not found banner */
  'banner.release-not-found.dismiss': 'Descartar',
  /** Banner text shown when scheduled drafts feature is disabled but there are still scheduled drafts */
  'banner.scheduled-drafts-disabled':
    "Els Scheduled Drafts s'han desactivat, però encara hi ha esborranys programats per publicar.",

  /** Title for changes to published documents */
  'changes-published-docs.title': 'Canvis als documents publicats',

  /** Dialog confirm button text for confirming all scheduled drafts */
  'confirm-active-scheduled-drafts-dialog.confirm-button': 'Confirmar programacions',
  /** Dialog description for confirming active scheduled drafts */
  'confirm-active-scheduled-drafts-dialog.description':
    'Programa tots els Scheduled Drafts pausats per a les seves dates de publicació previstes',
  /** Dialog warning when some scheduled drafts have past dates */
  'confirm-active-scheduled-drafts-dialog.past-dates-warning':
    "Alguns d'aquests Scheduled Drafts estan programats per a dates passades. Confirmar les programacions publicarà immediatament aquestes versions dels documents.",
  /** Dialog title for confirming active scheduled drafts */
  'confirm-active-scheduled-drafts-dialog.title': 'Reprendre els Scheduled Drafts',

  /** Suffix for when a release is a copy of another release */
  'copy-suffix': 'Còpia',

  /** Confirm button text for overriding existing draft */
  'copy-to-draft-dialog.confirm-button': "Sí, sobreescriu l'esborrany",
  /** Description for dialog when copying version to draft that already exists */
  'copy-to-draft-dialog.description':
    "Ja existeix una versió en esborrany d'aquest document. Copia la versió actual a l'esborrany i sobreescriu la versió en esborrany existent.",
  /** Title for dialog when copying version to draft that already exists */
  'copy-to-draft-dialog.title': 'Ja existeix una versió en esborrany',

  /** Text for when a release / document was created */
  created: 'Creat <RelativeTime/>',

  /** Activity inspector button text */
  'dashboard.details.activity': 'Activitat',
  /** Text for the releases detail screen in the pin release button. */
  'dashboard.details.pin-release': "Fixa la versió a l'estudi",
  /** Text for the releases detail screen when a release was published ASAP */
  'dashboard.details.published-asap': 'Publicat',
  /** Text for the releases detail screen when a release was published from scheduling */
  'dashboard.details.published-on': 'Publicat el {{date}}',
  /** Text for the releases detail screen in the unpin release button. */
  'dashboard.details.unpin-release': "Desfixa la versió de l'estudi",

  /** Label for the button to proceed deleting a release */
  'delete-dialog.confirm-delete-button': 'Sí, elimina la versió',
  /** Description for the dialog confirming the deleting of a release with one document */
  'delete-dialog.confirm-delete-description_one': 'Això eliminarà 1 versió del document.',
  /** Description for the dialog confirming the deleting of a release with more than one document */
  'delete-dialog.confirm-delete-description_other':
    'Això eliminarà {{count}} versions de documents.',
  /** Header for deleting a release dialog */
  'delete-dialog.confirm-delete.header': 'Esteu segur que voleu eliminar aquesta versió?',

  /** Label when a release has been deleted by a different user */
  'deleted-release': "La versió '<strong>{{title}}</strong>' ha estat eliminada",

  /** Text for when there's no changes in a release diff */
  'diff.list-empty': 'La llista de canvis és buida, vegeu el document',
  /** Text for when there's no changes in a release diff */
  'diff.no-changes': 'Sense canvis',

  /** Description for discarding a draft of a document dialog */
  'discard-version-dialog.description-draft':
    'Això eliminarà permanentment tots els canvis fets a aquest document. Aquesta acció no es pot desfer.',
  /** Description for discarding a version of a document dialog */
  'discard-version-dialog.description-release':
    "Això eliminarà permanentment tots els canvis fets a aquest document dins de la versió '<strong>{{releaseTitle}}</strong>'. Aquesta acció no es pot desfer.",
  /** Title for dialog for discarding a draft of a document */
  'discard-version-dialog.header-draft': "Voleu descartar l'esborrany?",
  /** Header for discarding a version from a release of a document dialog */
  'discard-version-dialog.header-release':
    "Voleu eliminar el document de la versió '<strong>{{releaseTitle}}</strong>'?",
  /** Title for dialog for discarding a draft of a document */
  'discard-version-dialog.title-draft': "Descartar l'esborrany",
  /** Title for dialog for discarding a version of a document */
  'discard-version-dialog.title-release': 'Eliminar de la versió',

  /** Label for when a document in a release has a single validation warning */
  'document-validation.error_one': '{{count}} error de validació',
  /** Label for when a document in a release has multiple validation warnings */
  'document-validation.error_other': '{{count}} errors de validació',

  /** Label for the button to proceed with duplicating a release */
  'duplicate-dialog.confirm-duplicate-button': 'Sí, duplica la versió',
  /** Description for the dialog confirming the duplicate of a release with one document */
  'duplicate-dialog.confirm-duplicate-description_one':
    'Això duplicarà la versió i la 1 versió del document.',
  /** Description for the dialog confirming the duplicate of a release with more than one document */
  'duplicate-dialog.confirm-duplicate-description_other':
    'Això duplicarà la versió i les {{count}} versions del document.',
  /** Header for the dialog confirming the duplicate of a release */
  'duplicate-dialog.confirm-duplicate-header': 'Esteu segur que voleu duplicar aquesta versió?',

  /** Title text displayed for technical error details */
  'error-details-title': "Detalls de l'error",

  /** Title text when error during release update */
  'failed-edit-title': "No s'han pogut desar els canvis",

  /** Title text displayed for releases that failed to publish  */
  'failed-publish-title': "No s'ha pogut publicar",

  /** Title text displayed for releases that failed to schedule  */
  'failed-schedule-title': "No s'ha pogut programar",

  /** Filter tab label for all documents */
  'filter-tab.all': 'Tot',
  /** Filter tab label for documents with validation errors */
  'filter-tab.errors': 'Errors',

  /**The text that will be shown in the footer to indicate the time the release was archived */
  'footer.status.archived': 'Arxivat',
  /**The text that will be shown in the footer to indicate the time the release was created */
  'footer.status.created': 'Creat',
  /**The text that will be shown in the footer to indicate the time the release was created */
  'footer.status.edited': 'Editat',
  /**The text that will be shown in the footer to indicate the time the release was published */
  'footer.status.published': 'Publicat',
  /**The text that will be shown in the footer to indicate the time the release was unarchived */
  'footer.status.unarchived': 'Desarxivat',

  /** Label text for the loading state whilst release is being loaded */
  'loading-release': 'Carregant la versió',

  /** Text for when documents of a release are loading */
  'loading-release-documents': 'Carregant documents',
  /** Description text for when loading documents on a release failed */
  'loading-release-documents.error.description':
    "No hem pogut carregar els documents d'aquesta versió. Torneu-ho a intentar més tard.",
  /** Title text for when loading documents on a release failed */
  'loading-release-documents.error.title': 'Alguna cosa ha anat malament',

  /** Label for title of actions for "when releasing" */
  'menu.group.when-releasing': 'En publicar la versió',
  /** Label for the release menu */
  'menu.label': 'Menú de la versió',
  /** Tooltip for the release menu */
  'menu.tooltip': 'Accions',

  /** Text for when no archived releases are found */
  'no-archived-release': 'No hi ha versions arxivades',

  /** Tooltip text when there are no paused scheduled drafts */
  'no-paused-release': 'No hi ha esborranys programats en pausa',

  /** Text for when no releases are found */
  'no-releases': 'No hi ha versions',

  /** Text for when no scheduled drafts are found */
  'no-scheduled-drafts': 'No hi ha esborranys programats',

  /** Text for the button name for the release tool */
  'overview.action.documentation': 'Documentació',
  /** Tooltip for the calendar button in the release overview */
  'overview.calendar.tooltip': 'Veure el calendari',
  /** Description for the release tool */
  'overview.description':
    'Les versions són col·leccions de canvis en documents que es poden gestionar, programar i revertir conjuntament.',
  /** Text for the placeholder in the search release input  */
  'overview.search-releases-placeholder': 'Cerca versions',
  /** Title for the release tool */
  'overview.title': 'Versions',

  /** Tooltip text for releases that have passed their intended publish date */
  'passed-intended-publish-date': 'Aquesta versió ha superat la data de publicació prevista',

  /** Tooltip text for scheduled drafts that have passed their intended publish date */
  'passed-intended-publish-date-draft':
    'Aquest esborrany ha superat la data de publicació prevista',

  /** Description for when a user doesn't have publish or schedule releases */
  'permission-missing-description':
    'El vostre rol limita actualment el que podeu veure en aquesta versió. És possible que no pugueu publicar ni programar aquesta versió.',

  /** Text for when a user doesn't have publish or schedule releases */
  'permission-missing-title': 'Accés limitat',

  /** Tooltip label when the user doesn't have permission to archive release */
  'permissions.error.archive': 'No teniu permís per arxivar aquesta versió',
  /** Tooltip label when the user doesn't have permission to delete release */
  'permissions.error.delete': 'No teniu permís per eliminar aquesta versió',
  /** Tooltip label when the user doesn't have permission for discarding a version */
  'permissions.error.discard-version': 'No teniu permís per descartar aquesta versió',
  /** Tooltip label when the user doesn't have permission to duplicate release */
  'permissions.error.duplicate': 'No teniu permís per duplicar aquesta release',
  /** Tooltip label when the user doesn't have permission to unarchive release */
  'permissions.error.unarchive': 'No teniu permís per desarxivar aquesta release',
  /** Tooltip label when the user doesn't have permission for unpublishing a document */
  'permissions.error.unpublish': 'No teniu permís per despublicar aquest document',

  /** Tooltip text for when one user is editing a document in a release */
  'presence.tooltip.one':
    '{{displayName}} està editant aquest document a la release "{{releaseTitle}}" ara mateix',

  /** Tooltip text for publish release action when there are no documents */
  'publish-action.validation.no-documents': 'No hi ha documents per publicar',

  /** Description for the dialog confirming the publish of a release with one document */
  'publish-dialog.confirm-publish-description_one':
    "La release '<strong>{{title}}</strong>' i el seu document es publicaran.",
  /** Description for the dialog confirming the publish of a release with multiple documents */
  'publish-dialog.confirm-publish-description_other':
    "La release '<strong>{{title}}</strong>' i els seus {{releaseDocumentsLength}} documents es publicaran.",
  /** Title for the dialog confirming the publish of a release */
  'publish-dialog.confirm-publish.title':
    'Esteu segur que voleu publicar la release i totes les versions dels documents?',
  /** Label for when documents in release have validation errors */
  'publish-dialog.validation.error': 'Alguns documents tenen errors de validació',
  /** Label for when documents are being validated */
  'publish-dialog.validation.loading': 'Validant documents...',
  /** Label for the button when the user doesn't have permissions to publish a release */
  'publish-dialog.validation.no-permission': 'No teniu permís per publicar',

  /** Title for information card on a published release */
  'publish-info.title': "Aquesta release s'ha publicat correctament.",

  /** Placeholder title for a release with no title */
  'release-placeholder.title': 'Sense títol',

  /** Description for the dialog confirming the revert of a release with multiple documents */
  'revert-dialog.confirm-revert-description_one':
    'Això revertirà {{releaseDocumentsLength}} versió del document.',
  /** Description for the dialog confirming the revert of a release with multiple documents */
  'revert-dialog.confirm-revert-description_other':
    'Això revertirà {{releaseDocumentsLength}} versions dels documents.',
  /** Checkbox label to confirm whether to create a staged release for revert or immediately revert */
  'revert-dialog.confirm-revert.stage-revert-checkbox-label': 'Reverteix la release immediatament',
  /** Title for the dialog confirming the revert of a release */
  'revert-dialog.confirm-revert.title': "Esteu segur que voleu revertir la release '{{title}}'?",
  /** Warning card text for when immediately revert a release with history */
  'revert-dialog.confirm-revert.warning-card':
    "S'han fet canvis als documents d'aquesta release després de ser publicats. La reversió sobreescriurà aquests canvis.",

  /** Description of a reverted release */
  'revert-release.description': 'Reverteix els canvis a les versions dels documents a "{{title}}".',
  /** Title of a reverted release */
  'revert-release.title': 'Revertint "{{title}}"',

  /** Description for the review changes button in release tool */
  'review.description': 'Afegiu documents a aquesta release per revisar els canvis',
  /** Text for when a document is edited */
  'review.edited': 'Editat <RelativeTime/>',

  /** Schedule release button tooltip when there are no documents to schedule */
  'schedule-action.validation.no-documents': 'No hi ha documents per programar',

  /** Schedule release button tooltip when the release is already scheduled */
  'schedule-button-tooltip.already-scheduled': 'Aquesta release ja està programada',
  /** Schedule release button tooltip when there are validation errors */
  'schedule-button-tooltip.validation.error': 'Alguns documents tenen errors de validació',
  /** Schedule release button tooltip when validation is loading */
  'schedule-button-tooltip.validation.loading': "S'estan validant els documents...",
  /** Schedule release button tooltip when user has no permissions to schedule */
  'schedule-button-tooltip.validation.no-permission': 'No teniu permís per programar',

  /** Title of unschedule release dialog */
  'schedule-button.tooltip': 'Esteu segur que voleu desprogramar el llançament?',

  /** Description for the confirm button for scheduling a release */
  'schedule-dialog.confirm-button': 'Sí, programa',
  /** Description shown in unschedule relaease dialog */
  'schedule-dialog.confirm-description_one':
    "El llançament '<strong>{{title}}</strong>' i el seu document es publicaran a la data seleccionada.",
  /** Description for the dialog confirming the publish of a release with multiple documents */
  'schedule-dialog.confirm-description_other':
    'El llançament <strong>{{title}}</strong> i les seves {{count}} versions de document es programaran.',
  /** Title for unschedule release dialog */
  'schedule-dialog.confirm-title': 'Programa el llançament',
  /** Description for warning that the published schedule time is in the past */
  'schedule-dialog.publish-date-in-past-warning': 'Programeu per a una hora i data futures.',
  /** Label for date picker when scheduling a release */
  'schedule-dialog.select-publish-date-label': 'Programa el',

  /** Confirm button text for the schedule unpublish dialog */
  'schedule-unpublish-dialog.confirm': 'Programa la despublicació',
  /** Description for the schedule unpublish dialog */
  'schedule-unpublish-dialog.description': "Seleccioneu quan s'ha de despublicar aquest document.",
  /** Header for the schedule unpublish dialog */
  'schedule-unpublish-dialog.header': "Programa l'esborrany per a la despublicació",

  /** Placeholder for search of documents in a release */
  'search-documents-placeholder': 'Cerca documents',

  /** Text for when the release has no errors found */
  'summary.all-documents-errors-found': "Tots els documents validats, s'han trobat problemes",
  /** Text for when the release has validated all documents */
  'summary.all-documents-validated': "Tots els documents validats, no s'han trobat problemes",
  /** Text for when the release was created */
  'summary.created': 'Creat <RelativeTime/>',
  /** Text for when the release is composed of one document */
  'summary.document-count_one': '{{count}} document',
  /** Text for when the release is composed of multiple documents */
  'summary.document-count_other': '{{count}} documents',
  /** Text for when the release has some errors found */
  'summary.errors-found':
    'Per publicar o programar el llançament, resoleu els problemes trobats als documents',
  /** Text for when the release has no documents */
  'summary.no-documents': 'Cap document',
  /** Description for the empty state when a cardinality-one release has no documents */
  'summary.no-documents-cardinality-one.description':
    "Aquest esborrany programat no conté cap document. És possible que s'hagi eliminat.",
  /** Title for the empty state when a cardinality-one release has no documents */
  'summary.no-documents-cardinality-one.title': 'Cap document en aquest llançament',
  /** Text for when the release has not published */
  'summary.not-published': 'No publicat',
  /** Text for when the release was published */
  'summary.published': 'Publicat <RelativeTime/>',
  /** Text for when the release has validated documents */
  'summary.validated-documents': '{{validatedCount}} de {{totalCount}} documents validats',
  /** Text for validation loading indicator */
  'summary.validating-documents': 'Validant documents: {{validatedCount}} de {{totalCount}}',

  /** add action type that will be shown in the table*/
  'table-body.action.add': 'Afegir',
  /** Change action type that will be shown in the table*/
  'table-body.action.change': 'Canviar',
  /** Change action type that will be shown in the table*/
  'table-body.action.unpublish': 'Despublicar',

  /** Header for the document table in the release tool - action */
  'table-header.action': 'Acció',
  /** Header for the document table in the release tool - Archived */
  'table-header.archivedAt': 'Arxivat',
  /** Header for the document table in the release tool - contributors */
  'table-header.contributors': 'Col·laboradors',
  /** Header for the document table in the release tool - created by */
  'table-header.created-by': 'Creat per',
  /** Header for the document table in the release tool - document preview */
  'table-header.document': 'Document',
  /** Header for the document table in the release tool - title */
  'table-header.documents': 'Documents',
  /** Header for the document table in the release tool - edited */
  'table-header.edited': 'Editat',
  /** Header for the paused scheduled drafts table - intended for */
  'table-header.intended-for': 'Destinat a',
  /** Header for the document table in the release tool - Published */
  'table-header.published-at': 'Publicat',
  /** Header for the document table in the release tool - Published */
  'table-header.publishedAt': 'Publicat',
  /** Header for the scheduled drafts document table in the release tool - published at */
  'table-header.scheduled-draft.published-at': 'Publicat el',
  /** Header for the scheduled drafts document table in the release tool - scheduled for */
  'table-header.scheduled-for': 'Programat per a',
  /** Header for the document table in the release tool - time */
  'table-header.time': 'Hora',
  /** Header for the  document table in the release tool - release title */
  'table-header.title': 'Release',
  /** Header for the document table in the release tool - type */
  'table-header.type': 'Tipus',
  /** Header for the document table in the release tool - when */
  'table-header.when': 'Quan',

  /** Text for the release time label for scheduled releases  which has not been scheduled yet*/
  'time.estimated': 'Estimat',
  /** Text for the release time label for scheduled releases  which has been scheduled*/
  'time.scheduled': 'Programat',

  /** Text for toast when release failed to archive */
  'toast.archive.error': "No s'ha pogut arxivar '<strong>{{title}}</strong>': {{error}}",
  /** Toast error message when bulk scheduling of active drafts fails */
  'toast.confirm-active-scheduled-drafts.error':
    "No s'han pogut programar els esborranys: {{error}}",
  /** Toast message after copying release ID */
  'toast.copy-release-id.success': 'ID de la versió copiat al porta-retalls',
  /** Toast message after copying release link */
  'toast.copy-release-link.success': 'Enllaç de la versió copiat al porta-retalls',
  /** Toast message after copying release title */
  'toast.copy-release-title.success': 'Títol de la versió copiat al porta-retalls',
  /** Description for toast when creating new version of document in release failed */
  'toast.create-version.error': "No s'ha pogut afegir el document a la versió: {{error}}",
  /** Description for toast when release deletion failed */
  'toast.delete.error': "No s'ha pogut eliminar '<strong>{{title}}</strong>': {{error}}",
  /** Description for toast when release is successfully deleted */
  'toast.delete.success': "La versió '<strong>{{title}}</strong>' s'ha eliminat correctament",
  /** Description for toast when release duplication failed */
  'toast.duplicate.error': "No s'ha pogut duplicar '<strong>{{title}}</strong>': {{error}}",
  /** Description for toast when release is successfully duplicated */
  'toast.duplicate.success': "La versió '<strong>{{title}}</strong>' s'ha duplicat. <Link/>",
  /** Link text for toast link to the duplicated release */
  'toast.duplicate.success-link': 'Veure la versió duplicada',
  /** Text for toast when release has been reverted immediately */
  'toast.immediate-revert.success': "La versió '{{title}}' s'ha revertit correctament",
  /** Text for toast when release failed to publish */
  'toast.publish.error': "No s'ha pogut publicar '<strong>{{title}}</strong>': {{error}}",
  /** Text for toast when release has reverted release successfully staged */
  'toast.revert-stage.success':
    "La versió de reversió per a '{{title}}' s'ha creat correctament. <Link/>",
  /** Link text for toast link to the generated revert release */
  'toast.revert-stage.success-link': 'Veure la versió de reversió',
  /** Text for toast when release failed to revert */
  'toast.revert.error': "No s'ha pogut revertir la versió: {{error}}",
  /** Text for toast when release failed to schedule */
  'toast.schedule.error': "No s'ha pogut programar '<strong>{{title}}</strong>': {{error}}",
  /** Text for toast when release has been scheduled */
  'toast.schedule.success': "La versió '<strong>{{title}}</strong>' s'ha programat.",
  /** Text for toast when release failed to unarchive */
  'toast.unarchive.error': "No s'ha pogut desarxivar '<strong>{{title}}</strong>': {{error}}",
  /** Text for toast when release failed to unschedule */
  'toast.unschedule.error': "No s'ha pogut desprogramar '<strong>{{title}}</strong>': {{error}}",

  /** Text for tooltip when a release has been scheduled */
  'type-picker.tooltip.scheduled':
    'La versió està programada, desprogrameu-la per canviar el tipus',

  /** Text action in unpublish dialog to cancel */
  'unpublish-dialog.action.cancel': 'Cancel·la',
  /** Text action in unpublish dialog to unpublish */
  'unpublish-dialog.action.unpublish': 'Sí, despublica en publicar la versió',
  /** Description for unpublish dialog, explaining that all changes made to this document will be lost */
  'unpublish-dialog.description.lost-changes':
    'Es perdran tots els canvis fets a aquesta versió del document.',
  /** Description for the unpublish dialog, explaining that it will create a draft if no draft exists at time of release */
  'unpublish-dialog.description.to-draft':
    "Això despublicarà el document com a part de la versió <Label>{{title}}</Label> i crearà un esborrany si no n'hi ha cap en el moment de la publicació.",
  /** Title for the dialog confirming the unpublish of a release */
  'unpublish-dialog.header':
    'Esteu segur que voleu despublicar aquest document en publicar la versió?',

  /** Text for when a document is unpublished */
  'unpublish.already-unpublished': 'Aquest document ja està despublicat.',
  /** Tooltip label for when a document is unpublished */
  'unpublish.no-published-version': "No hi ha cap versió publicada d'aquest document.",

  /** Description shown in unschedule relaease dialog */
  'unschedule-dialog.confirm-description': 'La versió ja no es publicarà en la data programada.',
  /** Title for unschedule release dialog */
  'unschedule-dialog.confirm-title': 'Esteu segur que voleu desprogramar la versió?',
})
