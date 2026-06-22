import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Action text for adding a document to release */
  'action.add-document': 'Agregar documento',
  /** Action text for archiving a release */
  'action.archive': 'Archivar lanzamiento',
  /** Tooltip for when the archive release action is disabled due to release being scheduled  */
  'action.archive.tooltip': 'Desplanifica este lanzamiento para archivarlo',
  /** Action text for showing the archived releases */
  'action.archived': 'Archivados',
  /** Menu item label for copying release ID */
  'action.copy-release-id.label': 'Copiar ID del lanzamiento',
  /** Menu item label for copying release URL */
  'action.copy-release-link.label': 'Copiar URL del lanzamiento',
  /** Menu item label for copying release title */
  'action.copy-release-title.label': 'Copiar título del lanzamiento',
  /** Tooltip for copy release actions button */
  'action.copy-release.label': 'Copiar',
  /** Action text for staging a new revert release */
  'action.create-revert-release': 'Crear un nuevo lanzamiento',
  /** Action text for deleting a release */
  'action.delete-release': 'Eliminar lanzamiento',
  /** Menu item label for showing scheduled drafts */
  'action.drafts': 'Borradores programados',
  /** Action text for duplicating a release */
  'action.duplicate-release': 'Duplicar lanzamiento',
  /** Action text for editing a release */
  'action.edit': 'Editar lanzamiento',
  /** Action text for reverting a release immediately without staging changes */
  'action.immediate-revert-release': 'Revertir ahora',
  /** Action text for opening a release */
  'action.open': 'Activo',
  /** Action text for showing the paused scheduled drafts */
  'action.paused': 'En pausa',
  /** Action text for publishing all documents in a release (and the release itself) */
  'action.publish-all-documents': 'Ejecutar lanzamiento',
  /** Menu item label for showing releases (multi-document releases) */
  'action.releases': 'Lanzamientos',
  /** Action text for reverting a release */
  'action.revert': 'Revertir lanzamiento',
  /** Action message for when document is scheduled for unpublishing a document and you want to no longer unpublish it */
  'action.revert-unpublish-actions': 'Revertir despublicación al lanzar',
  /** Text for the review changes button in release tool */
  'action.review': 'Revisar cambios',
  /** Action text for scheduling a release */
  'action.schedule': 'Programar lanzamiento...',
  /** Action text for scheduling unpublish of a draft document */
  'action.schedule-unpublish': 'Programar despublicación',
  /** Tooltip text for when schedule unpublish is disabled because document is not published */
  'action.schedule-unpublish.disabled.not-published':
    'El documento debe estar publicado para programar su despublicación',
  /** Label for unarchiving a release */
  'action.unarchive': 'Desarchivar lanzamiento',
  /** Action text for unpublishing a document in a release in the context menu */
  'action.unpublish': 'Cancelar publicación',
  /** Action message for scheduling an unpublished of a document  */
  'action.unpublish-doc-actions': 'Cancelar publicación al lanzar',
  /** Action text for unscheduling a release */
  'action.unschedule': 'Cancelar programación del lanzamiento',

  /** Text for the summary button in release tool */
  'actions.summary': 'Resumen',

  /* The text for the activity event when a document is added to a release */
  'activity.event.add-document': 'Se añadió una versión del documento',
  /* The text for the activity event when the release is archived */
  'activity.event.archive': 'Se archivó el lanzamiento <strong>{{releaseTitle}}</strong>',
  /* The text for the activity event when the release is created */
  'activity.event.create':
    'Se creó el lanzamiento <strong>{{releaseTitle}}</strong> <ScheduleTarget>con destino </ScheduleTarget>',
  /* The text for the activity event when a document is removed from a release */
  'activity.event.discard-document': 'Se descartó una versión del documento',
  'activity.event.edit':
    'Se estableció la hora del lanzamiento en <ScheduleTarget></ScheduleTarget>',
  /**The text to display in the changes when the release type changes to asap */
  'activity.event.edit-time-asap': 'Lo antes posible',
  /**The text to display in the changes when the release type changes to undecided */
  'activity.event.edit-time-undecided': 'Sin decidir',
  /* The text for the activity event when the release is published */
  'activity.event.publish': 'Se publicó el lanzamiento <strong>{{releaseTitle}}</strong>',
  /* The text for the activity event when the release is scheduled */
  'activity.event.schedule': 'Marcado como programado',
  /** The text for the activity event when the release is unarchived */
  'activity.event.unarchive': 'Se desarchivó el lanzamiento <strong>{{releaseTitle}}</strong>',
  /** The text for the activity event when the release is unscheduled */
  'activity.event.unschedule': 'Marcado como no programado',
  /** The loading text for when releases are loading */
  'activity.panel.error': 'Se produjo un error al obtener la actividad del lanzamiento',
  /** The loading text for when releases are loading */
  'activity.panel.loading': 'Cargando actividad del lanzamiento',
  /** The title for the activity panel shown in the releases detail screen */
  'activity.panel.title': 'Actividad',

  /** Label for the button to proceed with archiving a release */
  'archive-dialog.confirm-archive-button': 'Sí, archivar lanzamiento',
  /** Description for the dialog confirming the archive of a release with one document */
  'archive-dialog.confirm-archive-description_one': 'Esto archivará 1 versión del documento.',
  /** Description for the dialog confirming the archive of a release with more than one document */
  'archive-dialog.confirm-archive-description_other':
    'Esto archivará {{count}} versiones del documento.',
  /** Header for the dialog confirming the archive of a release */
  'archive-dialog.confirm-archive-header': '¿Estás seguro de que deseas archivar este lanzamiento?',
  /** Title for the dialog confirming the archive of a release */
  'archive-dialog.confirm-archive-title':
    "¿Estás seguro de que deseas archivar el lanzamiento <strong>'{{title}}'</strong>?",

  /** Description for information card on a published or archived release to description retention effects */
  'archive-info.description':
    'Estará disponible durante {{retentionDays}} días y luego se eliminará automáticamente el {{removalDate}}. <Link>Más información sobre la retención</Link>.',
  /** Title for information card on a archived release */
  'archive-info.title': 'Este lanzamiento está archivado',

  /** Banner text showing count of active scheduled drafts requiring confirmation with one draft */
  'banner.confirm-active-scheduled-drafts_one':
    'Hay {{count}} Scheduled Draft que requiere confirmación de programación',
  /** Banner text showing count of active scheduled drafts requiring confirmation with multiple drafts */
  'banner.confirm-active-scheduled-drafts_other':
    'Hay {{count}} Scheduled Drafts que requieren confirmación de programación',
  /** Button text for confirming scheduling of active drafts */
  'banner.confirm-active-scheduled-drafts.button': 'Reanudar programación',
  /** Button text when confirming schedules from paused mode */
  'banner.confirm-active-scheduled-drafts.button-paused': 'Reanudar todas las programaciones',
  /** Banner text shown when drafts mode is disabled but there are still scheduled drafts */
  'banner.drafts-mode-disabled':
    'El modo de borradores ha sido desactivado, pero aún hay Scheduled Drafts pendientes de publicación.',
  /** Banner text shown when navigating to a release that does not exist */
  'banner.release-not-found': 'No se pudo encontrar esta versión',
  /** Tooltip for the dismiss button in the release not found banner */
  'banner.release-not-found.dismiss': 'Descartar',
  /** Banner text shown when scheduled drafts feature is disabled but there are still scheduled drafts */
  'banner.scheduled-drafts-disabled':
    'Los Scheduled Drafts han sido desactivados, pero aún hay Scheduled Drafts pendientes de publicación.',

  /** Title for changes to published documents */
  'changes-published-docs.title': 'Cambios en documentos publicados',

  /** Dialog confirm button text for confirming all scheduled drafts */
  'confirm-active-scheduled-drafts-dialog.confirm-button': 'Confirmar programaciones',
  /** Dialog description for confirming active scheduled drafts */
  'confirm-active-scheduled-drafts-dialog.description':
    'Programar todos los Scheduled Drafts pausados para sus fechas de publicación previstas',
  /** Dialog warning when some scheduled drafts have past dates */
  'confirm-active-scheduled-drafts-dialog.past-dates-warning':
    'Algunos de estos Scheduled Drafts están programados para fechas pasadas. Confirmar las programaciones publicará inmediatamente esas versiones de los documentos.',
  /** Dialog title for confirming active scheduled drafts */
  'confirm-active-scheduled-drafts-dialog.title': 'Reanudar Scheduled Drafts',

  /** Suffix for when a release is a copy of another release */
  'copy-suffix': 'Copia',

  /** Confirm button text for overriding existing draft */
  'copy-to-draft-dialog.confirm-button': 'Sí, reemplazar borrador',
  /** Description for dialog when copying version to draft that already exists */
  'copy-to-draft-dialog.description':
    'Ya existe una versión en borrador de este documento. Copie la versión actual al borrador y reemplace la versión en borrador existente.',
  /** Title for dialog when copying version to draft that already exists */
  'copy-to-draft-dialog.title': 'La versión en borrador ya existe',

  /** Text for when a release / document was created */
  created: 'Creado <RelativeTime/>',

  /** Activity inspector button text */
  'dashboard.details.activity': 'Actividad',
  /** Text for the releases detail screen in the pin release button. */
  'dashboard.details.pin-release': 'Fijar versión al estudio',
  /** Text for the releases detail screen when a release was published ASAP */
  'dashboard.details.published-asap': 'Publicado',
  /** Text for the releases detail screen when a release was published from scheduling */
  'dashboard.details.published-on': 'Publicado el {{date}}',
  /** Text for the releases detail screen in the unpin release button. */
  'dashboard.details.unpin-release': 'Desfijar versión del estudio',

  /** Label for the button to proceed deleting a release */
  'delete-dialog.confirm-delete-button': 'Sí, eliminar versión',
  /** Description for the dialog confirming the deleting of a release with one document */
  'delete-dialog.confirm-delete-description_one': 'Esto eliminará 1 versión del documento.',
  /** Description for the dialog confirming the deleting of a release with more than one document */
  'delete-dialog.confirm-delete-description_other':
    'Esto eliminará {{count}} versiones de documentos.',
  /** Header for deleting a release dialog */
  'delete-dialog.confirm-delete.header': '¿Estás seguro de que deseas eliminar esta release?',

  /** Label when a release has been deleted by a different user */
  'deleted-release': "La release '<strong>{{title}}</strong>' ha sido eliminada",

  /** Text for when there's no changes in a release diff */
  'diff.list-empty': 'La lista de cambios está vacía, ver documento',
  /** Text for when there's no changes in a release diff */
  'diff.no-changes': 'Sin cambios',

  /** Description for discarding a draft of a document dialog */
  'discard-version-dialog.description-draft':
    'Esto eliminará permanentemente todos los cambios realizados en este documento. Esta acción no se puede deshacer.',
  /** Description for discarding a version of a document dialog */
  'discard-version-dialog.description-release':
    "Esto eliminará permanentemente todos los cambios realizados en este documento dentro de la release '<strong>{{releaseTitle}}</strong>'. Esta acción no se puede deshacer.",
  /** Title for dialog for discarding a draft of a document */
  'discard-version-dialog.header-draft': '¿Descartar borrador?',
  /** Header for discarding a version from a release of a document dialog */
  'discard-version-dialog.header-release':
    "¿Eliminar el documento de la release '<strong>{{releaseTitle}}</strong>'?",
  /** Title for dialog for discarding a draft of a document */
  'discard-version-dialog.title-draft': 'Descartar borrador',
  /** Title for dialog for discarding a version of a document */
  'discard-version-dialog.title-release': 'Eliminar de la release',

  /** Label for when a document in a release has a single validation warning */
  'document-validation.error_one': '{{count}} error de validación',
  /** Label for when a document in a release has multiple validation warnings */
  'document-validation.error_other': '{{count}} errores de validación',

  /** Label for the button to proceed with duplicating a release */
  'duplicate-dialog.confirm-duplicate-button': 'Sí, duplicar release',
  /** Description for the dialog confirming the duplicate of a release with one document */
  'duplicate-dialog.confirm-duplicate-description_one':
    'Esto duplicará la release y la 1 versión del documento.',
  /** Description for the dialog confirming the duplicate of a release with more than one document */
  'duplicate-dialog.confirm-duplicate-description_other':
    'Esto duplicará la release y las {{count}} versiones de documentos.',
  /** Header for the dialog confirming the duplicate of a release */
  'duplicate-dialog.confirm-duplicate-header': '¿Estás seguro de que deseas duplicar esta release?',

  /** Title text displayed for technical error details */
  'error-details-title': 'Detalles del error',

  /** Title text when error during release update */
  'failed-edit-title': 'Error al guardar los cambios',

  /** Title text displayed for releases that failed to publish  */
  'failed-publish-title': 'Error al publicar',

  /** Title text displayed for releases that failed to schedule  */
  'failed-schedule-title': 'Error al programar',

  /** Filter tab label for all documents */
  'filter-tab.all': 'Todos',
  /** Filter tab label for documents with validation errors */
  'filter-tab.errors': 'Errores',

  /**The text that will be shown in the footer to indicate the time the release was archived */
  'footer.status.archived': 'Archivado',
  /**The text that will be shown in the footer to indicate the time the release was created */
  'footer.status.created': 'Creado',
  /**The text that will be shown in the footer to indicate the time the release was created */
  'footer.status.edited': 'Editado',
  /**The text that will be shown in the footer to indicate the time the release was published */
  'footer.status.published': 'Publicado',
  /**The text that will be shown in the footer to indicate the time the release was unarchived */
  'footer.status.unarchived': 'Desarchivado',

  /** Label text for the loading state whilst release is being loaded */
  'loading-release': 'Cargando release',

  /** Text for when documents of a release are loading */
  'loading-release-documents': 'Cargando documentos',
  /** Description text for when loading documents on a release failed */
  'loading-release-documents.error.description':
    'No podemos cargar los documentos de este release. Por favor, inténtelo de nuevo más tarde.',
  /** Title text for when loading documents on a release failed */
  'loading-release-documents.error.title': 'Algo salió mal',

  /** Label for title of actions for "when releasing" */
  'menu.group.when-releasing': 'Al publicar el release',
  /** Label for the release menu */
  'menu.label': 'Menú de release',
  /** Tooltip for the release menu */
  'menu.tooltip': 'Acciones',

  /** Text for when no archived releases are found */
  'no-archived-release': 'No hay releases archivados',

  /** Tooltip text when there are no paused scheduled drafts */
  'no-paused-release': 'No hay borradores programados pausados',

  /** Text for when no releases are found */
  'no-releases': 'No hay releases',

  /** Text for when no scheduled drafts are found */
  'no-scheduled-drafts': 'No hay borradores programados',

  /** Text for the button name for the release tool */
  'overview.action.documentation': 'Documentación',
  /** Tooltip for the calendar button in the release overview */
  'overview.calendar.tooltip': 'Ver calendario',
  /** Description for the release tool */
  'overview.description':
    'Los releases son colecciones de cambios en documentos que pueden gestionarse, programarse y revertirse conjuntamente.',
  /** Text for the placeholder in the search release input  */
  'overview.search-releases-placeholder': 'Buscar releases',
  /** Title for the release tool */
  'overview.title': 'Releases',

  /** Tooltip text for releases that have passed their intended publish date */
  'passed-intended-publish-date': 'Este release ha superado su fecha de publicación prevista',

  /** Tooltip text for scheduled drafts that have passed their intended publish date */
  'passed-intended-publish-date-draft':
    'Este borrador ha superado su fecha de publicación prevista',

  /** Description for when a user doesn't have publish or schedule releases */
  'permission-missing-description':
    'Su rol actualmente limita lo que puede ver en este release. Es posible que no pueda publicar ni programar este release.',

  /** Text for when a user doesn't have publish or schedule releases */
  'permission-missing-title': 'Acceso limitado',

  /** Tooltip label when the user doesn't have permission to archive release */
  'permissions.error.archive': 'No tiene permiso para archivar este release',
  /** Tooltip label when the user doesn't have permission to delete release */
  'permissions.error.delete': 'No tiene permiso para eliminar este release',
  /** Tooltip label when the user doesn't have permission for discarding a version */
  'permissions.error.discard-version': 'No tienes permiso para descartar esta versión',
  /** Tooltip label when the user doesn't have permission to duplicate release */
  'permissions.error.duplicate': 'No tienes permiso para duplicar esta release',
  /** Tooltip label when the user doesn't have permission to unarchive release */
  'permissions.error.unarchive': 'No tienes permiso para desarchivar esta release',
  /** Tooltip label when the user doesn't have permission for unpublishing a document */
  'permissions.error.unpublish': 'No tienes permiso para cancelar la publicación de este documento',

  /** Tooltip text for when one user is editing a document in a release */
  'presence.tooltip.one':
    '{{displayName}} está editando este documento en la release "{{releaseTitle}}" ahora mismo',

  /** Tooltip text for publish release action when there are no documents */
  'publish-action.validation.no-documents': 'No hay documentos para publicar',

  /** Description for the dialog confirming the publish of a release with one document */
  'publish-dialog.confirm-publish-description_one':
    "La release '<strong>{{title}}</strong>' y su documento serán publicados.",
  /** Description for the dialog confirming the publish of a release with multiple documents */
  'publish-dialog.confirm-publish-description_other':
    "La release '<strong>{{title}}</strong>' y sus {{releaseDocumentsLength}} documentos serán publicados.",
  /** Title for the dialog confirming the publish of a release */
  'publish-dialog.confirm-publish.title':
    '¿Estás seguro de que deseas publicar la release y todas las versiones de los documentos?',
  /** Label for when documents in release have validation errors */
  'publish-dialog.validation.error': 'Algunos documentos tienen errores de validación',
  /** Label for when documents are being validated */
  'publish-dialog.validation.loading': 'Validando documentos...',
  /** Label for the button when the user doesn't have permissions to publish a release */
  'publish-dialog.validation.no-permission': 'No tienes permiso para publicar',

  /** Title for information card on a published release */
  'publish-info.title': 'Esta release se ha publicado correctamente.',

  /** Placeholder title for a release with no title */
  'release-placeholder.title': 'Sin título',

  /** Description for the dialog confirming the revert of a release with multiple documents */
  'revert-dialog.confirm-revert-description_one':
    'Esto revertirá {{releaseDocumentsLength}} versión del documento.',
  /** Description for the dialog confirming the revert of a release with multiple documents */
  'revert-dialog.confirm-revert-description_other':
    'Esto revertirá {{releaseDocumentsLength}} versiones de documentos.',
  /** Checkbox label to confirm whether to create a staged release for revert or immediately revert */
  'revert-dialog.confirm-revert.stage-revert-checkbox-label': 'Revertir la release inmediatamente',
  /** Title for the dialog confirming the revert of a release */
  'revert-dialog.confirm-revert.title':
    "¿Estás seguro de que deseas revertir la release '{{title}}'?",
  /** Warning card text for when immediately revert a release with history */
  'revert-dialog.confirm-revert.warning-card':
    'Se realizaron cambios en los documentos de esta release después de que fueron publicados. Revertir sobrescribirá estos cambios.',

  /** Description of a reverted release */
  'revert-release.description': 'Revertir cambios en las versiones de documentos en "{{title}}".',
  /** Title of a reverted release */
  'revert-release.title': 'Revirtiendo "{{title}}"',

  /** Description for the review changes button in release tool */
  'review.description': 'Añade documentos a esta release para revisar los cambios',
  /** Text for when a document is edited */
  'review.edited': 'Editado <RelativeTime/>',

  /** Schedule release button tooltip when there are no documents to schedule */
  'schedule-action.validation.no-documents': 'No hay documentos para programar',

  /** Schedule release button tooltip when the release is already scheduled */
  'schedule-button-tooltip.already-scheduled': 'Esta release ya está programada',
  /** Schedule release button tooltip when there are validation errors */
  'schedule-button-tooltip.validation.error': 'Algunos documentos tienen errores de validación',
  /** Schedule release button tooltip when validation is loading */
  'schedule-button-tooltip.validation.loading': 'Validando documentos...',
  /** Schedule release button tooltip when user has no permissions to schedule */
  'schedule-button-tooltip.validation.no-permission': 'No tienes permiso para programar',

  /** Title of unschedule release dialog */
  'schedule-button.tooltip': '¿Estás seguro de que deseas desprogramar el lanzamiento?',

  /** Description for the confirm button for scheduling a release */
  'schedule-dialog.confirm-button': 'Sí, programar',
  /** Description shown in unschedule relaease dialog */
  'schedule-dialog.confirm-description_one':
    "El lanzamiento '<strong>{{title}}</strong>' y su documento se publicarán en la fecha seleccionada.",
  /** Description for the dialog confirming the publish of a release with multiple documents */
  'schedule-dialog.confirm-description_other':
    'El lanzamiento <strong>{{title}}</strong> y sus {{count}} versiones de documentos serán programados.',
  /** Title for unschedule release dialog */
  'schedule-dialog.confirm-title': 'Programar el lanzamiento',
  /** Description for warning that the published schedule time is in the past */
  'schedule-dialog.publish-date-in-past-warning': 'Programa para una fecha y hora futura.',
  /** Label for date picker when scheduling a release */
  'schedule-dialog.select-publish-date-label': 'Programar el',

  /** Confirm button text for the schedule unpublish dialog */
  'schedule-unpublish-dialog.confirm': 'Programar despublicación',
  /** Description for the schedule unpublish dialog */
  'schedule-unpublish-dialog.description': 'Selecciona cuándo debe despublicarse este documento.',
  /** Header for the schedule unpublish dialog */
  'schedule-unpublish-dialog.header': 'Programar borrador para despublicación',

  /** Placeholder for search of documents in a release */
  'search-documents-placeholder': 'Buscar documentos',

  /** Text for when the release has no errors found */
  'summary.all-documents-errors-found': 'Todos los documentos validados, se encontraron problemas',
  /** Text for when the release has validated all documents */
  'summary.all-documents-validated': 'Todos los documentos validados, sin problemas encontrados',
  /** Text for when the release was created */
  'summary.created': 'Creado <RelativeTime/>',
  /** Text for when the release is composed of one document */
  'summary.document-count_one': '{{count}} documento',
  /** Text for when the release is composed of multiple documents */
  'summary.document-count_other': '{{count}} documentos',
  /** Text for when the release has some errors found */
  'summary.errors-found':
    'Para publicar o programar el lanzamiento, por favor resuelve los problemas encontrados en los documentos',
  /** Text for when the release has no documents */
  'summary.no-documents': 'Sin documentos',
  /** Description for the empty state when a cardinality-one release has no documents */
  'summary.no-documents-cardinality-one.description':
    'Este borrador programado no contiene un documento. Es posible que haya sido eliminado.',
  /** Title for the empty state when a cardinality-one release has no documents */
  'summary.no-documents-cardinality-one.title': 'No hay documento en este lanzamiento',
  /** Text for when the release has not published */
  'summary.not-published': 'No publicado',
  /** Text for when the release was published */
  'summary.published': 'Publicado <RelativeTime/>',
  /** Text for when the release has validated documents */
  'summary.validated-documents': '{{validatedCount}} de {{totalCount}} documentos validados',
  /** Text for validation loading indicator */
  'summary.validating-documents': 'Validando documentos: {{validatedCount}} de {{totalCount}}',

  /** add action type that will be shown in the table*/
  'table-body.action.add': 'Agregar',
  /** Change action type that will be shown in the table*/
  'table-body.action.change': 'Cambiar',
  /** Change action type that will be shown in the table*/
  'table-body.action.unpublish': 'Despublicar',

  /** Header for the document table in the release tool - action */
  'table-header.action': 'Acción',
  /** Header for the document table in the release tool - Archived */
  'table-header.archivedAt': 'Archivado',
  /** Header for the document table in the release tool - contributors */
  'table-header.contributors': 'Colaboradores',
  /** Header for the document table in the release tool - created by */
  'table-header.created-by': 'Creado por',
  /** Header for the document table in the release tool - document preview */
  'table-header.document': 'Documento',
  /** Header for the document table in the release tool - title */
  'table-header.documents': 'Documentos',
  /** Header for the document table in the release tool - edited */
  'table-header.edited': 'Editado',
  /** Header for the paused scheduled drafts table - intended for */
  'table-header.intended-for': 'Destinado a',
  /** Header for the document table in the release tool - Published */
  'table-header.published-at': 'Publicado',
  /** Header for the document table in the release tool - Published */
  'table-header.publishedAt': 'Publicado',
  /** Header for the scheduled drafts document table in the release tool - published at */
  'table-header.scheduled-draft.published-at': 'Publicado el',
  /** Header for the scheduled drafts document table in the release tool - scheduled for */
  'table-header.scheduled-for': 'Programado para',
  /** Header for the document table in the release tool - time */
  'table-header.time': 'Hora',
  /** Header for the  document table in the release tool - release title */
  'table-header.title': 'Release',
  /** Header for the document table in the release tool - type */
  'table-header.type': 'Tipo',
  /** Header for the document table in the release tool - when */
  'table-header.when': 'Cuándo',

  /** Text for the release time label for scheduled releases  which has not been scheduled yet*/
  'time.estimated': 'Estimado',
  /** Text for the release time label for scheduled releases  which has been scheduled*/
  'time.scheduled': 'Programado',

  /** Text for toast when release failed to archive */
  'toast.archive.error': "Error al archivar '<strong>{{title}}</strong>': {{error}}",
  /** Toast error message when bulk scheduling of active drafts fails */
  'toast.confirm-active-scheduled-drafts.error': 'Error al programar los borradores: {{error}}',
  /** Toast message after copying release ID */
  'toast.copy-release-id.success': 'ID de release copiado al portapapeles',
  /** Toast message after copying release link */
  'toast.copy-release-link.success': 'Enlace de release copiado al portapapeles',
  /** Toast message after copying release title */
  'toast.copy-release-title.success': 'Título de release copiado al portapapeles',
  /** Description for toast when creating new version of document in release failed */
  'toast.create-version.error': 'Error al agregar el documento al release: {{error}}',
  /** Description for toast when release deletion failed */
  'toast.delete.error': "Error al eliminar '<strong>{{title}}</strong>': {{error}}",
  /** Description for toast when release is successfully deleted */
  'toast.delete.success': "El release '<strong>{{title}}</strong>' fue eliminado correctamente",
  /** Description for toast when release duplication failed */
  'toast.duplicate.error': "Error al duplicar '<strong>{{title}}</strong>': {{error}}",
  /** Description for toast when release is successfully duplicated */
  'toast.duplicate.success': "El release '<strong>{{title}}</strong>' fue duplicado. <Link/>",
  /** Link text for toast link to the duplicated release */
  'toast.duplicate.success-link': 'Ver release duplicado',
  /** Text for toast when release has been reverted immediately */
  'toast.immediate-revert.success': "El release '{{title}}' fue revertido correctamente",
  /** Text for toast when release failed to publish */
  'toast.publish.error': "Error al publicar '<strong>{{title}}</strong>': {{error}}",
  /** Text for toast when release has reverted release successfully staged */
  'toast.revert-stage.success':
    "El release de reversión para '{{title}}' fue creado correctamente. <Link/>",
  /** Link text for toast link to the generated revert release */
  'toast.revert-stage.success-link': 'Ver release de reversión',
  /** Text for toast when release failed to revert */
  'toast.revert.error': 'Error al revertir el release: {{error}}',
  /** Text for toast when release failed to schedule */
  'toast.schedule.error': "Error al programar '<strong>{{title}}</strong>': {{error}}",
  /** Text for toast when release has been scheduled */
  'toast.schedule.success': "El release '<strong>{{title}}</strong>' fue programado.",
  /** Text for toast when release failed to unarchive */
  'toast.unarchive.error': "Error al desarchivar '<strong>{{title}}</strong>': {{error}}",
  /** Text for toast when release failed to unschedule */
  'toast.unschedule.error': "Error al desprogramar '<strong>{{title}}</strong>': {{error}}",

  /** Text for tooltip when a release has been scheduled */
  'type-picker.tooltip.scheduled': 'El release está programado, desprogámelo para cambiar el tipo',

  /** Text action in unpublish dialog to cancel */
  'unpublish-dialog.action.cancel': 'Cancelar',
  /** Text action in unpublish dialog to unpublish */
  'unpublish-dialog.action.unpublish': 'Sí, despublicar al lanzar',
  /** Description for unpublish dialog, explaining that all changes made to this document will be lost */
  'unpublish-dialog.description.lost-changes':
    'Cualquier cambio realizado en esta versión del documento se perderá.',
  /** Description for the unpublish dialog, explaining that it will create a draft if no draft exists at time of release */
  'unpublish-dialog.description.to-draft':
    'Esto despublicará el documento como parte del release <Label>{{title}}</Label> y creará un borrador si no existe ninguno en el momento del lanzamiento.',
  /** Title for the dialog confirming the unpublish of a release */
  'unpublish-dialog.header': '¿Está seguro de que desea despublicar este documento al lanzar?',

  /** Text for when a document is unpublished */
  'unpublish.already-unpublished': 'Este documento ya está despublicado.',
  /** Tooltip label for when a document is unpublished */
  'unpublish.no-published-version': 'No existe una versión publicada de este documento.',

  /** Description shown in unschedule relaease dialog */
  'unschedule-dialog.confirm-description': 'El release ya no se publicará en la fecha programada.',
  /** Title for unschedule release dialog */
  'unschedule-dialog.confirm-title': '¿Estás seguro de que deseas desprogramar el release?',
})
