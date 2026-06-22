import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Action text for adding a document to release */
  'action.add-document': 'Adaugă document',
  /** Action text for archiving a release */
  'action.archive': 'Arhivează lansarea',
  /** Tooltip for when the archive release action is disabled due to release being scheduled  */
  'action.archive.tooltip': 'Anulați programarea acestei lansări pentru a o arhiva',
  /** Action text for showing the archived releases */
  'action.archived': 'Arhivate',
  /** Menu item label for copying release ID */
  'action.copy-release-id.label': 'Copiază ID-ul lansării',
  /** Menu item label for copying release URL */
  'action.copy-release-link.label': 'Copiază URL-ul lansării',
  /** Menu item label for copying release title */
  'action.copy-release-title.label': 'Copiază titlul lansării',
  /** Tooltip for copy release actions button */
  'action.copy-release.label': 'Copiază',
  /** Action text for staging a new revert release */
  'action.create-revert-release': 'Creează o lansare nouă',
  /** Action text for deleting a release */
  'action.delete-release': 'Șterge lansarea',
  /** Menu item label for showing scheduled drafts */
  'action.drafts': 'Ciorne programate',
  /** Action text for duplicating a release */
  'action.duplicate-release': 'Duplică lansarea',
  /** Action text for editing a release */
  'action.edit': 'Editează lansarea',
  /** Action text for reverting a release immediately without staging changes */
  'action.immediate-revert-release': 'Revenire acum',
  /** Action text for opening a release */
  'action.open': 'Activă',
  /** Action text for showing the paused scheduled drafts */
  'action.paused': 'În pauză',
  /** Action text for publishing all documents in a release (and the release itself) */
  'action.publish-all-documents': 'Rulează lansarea',
  /** Menu item label for showing releases (multi-document releases) */
  'action.releases': 'Lansări',
  /** Action text for reverting a release */
  'action.revert': 'Revenire la lansare',
  /** Action message for when document is scheduled for unpublishing a document and you want to no longer unpublish it */
  'action.revert-unpublish-actions': 'Anulează retragerea publicării la lansare',
  /** Text for the review changes button in release tool */
  'action.review': 'Revizuiește modificările',
  /** Action text for scheduling a release */
  'action.schedule': 'Programează lansarea...',
  /** Action text for scheduling unpublish of a draft document */
  'action.schedule-unpublish': 'Programează retragerea publicării',
  /** Tooltip text for when schedule unpublish is disabled because document is not published */
  'action.schedule-unpublish.disabled.not-published':
    'Documentul trebuie să fie publicat pentru a programa retragerea publicării',
  /** Label for unarchiving a release */
  'action.unarchive': 'Dezarhivează lansarea',
  /** Action text for unpublishing a document in a release in the context menu */
  'action.unpublish': 'Anulare publicare',
  /** Action message for scheduling an unpublished of a document  */
  'action.unpublish-doc-actions': 'Anulare publicare la lansare',
  /** Action text for unscheduling a release */
  'action.unschedule': 'Anulare programare lansare',

  /** Text for the summary button in release tool */
  'actions.summary': 'Rezumat',

  /* The text for the activity event when a document is added to a release */
  'activity.event.add-document': 'A adăugat o versiune de document',
  /* The text for the activity event when the release is archived */
  'activity.event.archive': 'A arhivat lansarea <strong>{{releaseTitle}}</strong>',
  /* The text for the activity event when the release is created */
  'activity.event.create':
    'A creat lansarea <strong>{{releaseTitle}}</strong> <ScheduleTarget>cu ținta </ScheduleTarget>',
  /* The text for the activity event when a document is removed from a release */
  'activity.event.discard-document': 'A eliminat o versiune de document',
  'activity.event.edit': 'A setat ora lansării la <ScheduleTarget></ScheduleTarget>',
  /**The text to display in the changes when the release type changes to asap */
  'activity.event.edit-time-asap': 'Cât mai curând posibil',
  /**The text to display in the changes when the release type changes to undecided */
  'activity.event.edit-time-undecided': 'Nedecis',
  /* The text for the activity event when the release is published */
  'activity.event.publish': 'A publicat lansarea <strong>{{releaseTitle}}</strong>',
  /* The text for the activity event when the release is scheduled */
  'activity.event.schedule': 'Marcat ca programat',
  /** The text for the activity event when the release is unarchived */
  'activity.event.unarchive': 'A dezarhivat lansarea <strong>{{releaseTitle}}</strong>',
  /** The text for the activity event when the release is unscheduled */
  'activity.event.unschedule': 'Marcat ca neprogramat',
  /** The loading text for when releases are loading */
  'activity.panel.error': 'A apărut o eroare la obținerea activității lansării',
  /** The loading text for when releases are loading */
  'activity.panel.loading': 'Se încarcă activitatea lansării',
  /** The title for the activity panel shown in the releases detail screen */
  'activity.panel.title': 'Activitate',

  /** Label for the button to proceed with archiving a release */
  'archive-dialog.confirm-archive-button': 'Da, arhivează lansarea',
  /** Description for the dialog confirming the archive of a release with one document */
  'archive-dialog.confirm-archive-description_one': 'Aceasta va arhiva 1 versiune de document.',
  /** Header for the dialog confirming the archive of a release */
  'archive-dialog.confirm-archive-header': 'Sigur doriți să arhivați această lansare?',
  /** Title for the dialog confirming the archive of a release */
  'archive-dialog.confirm-archive-title':
    "Sigur doriți să arhivați lansarea <strong>'{{title}}'</strong>?",

  /** Description for information card on a published or archived release to description retention effects */
  'archive-info.description':
    'Va fi disponibilă timp de {{retentionDays}} zile, apoi eliminată automat pe {{removalDate}}. <Link>Aflați despre retenție</Link>.',
  /** Title for information card on a archived release */
  'archive-info.title': 'Această lansare este arhivată',

  /** Banner text showing count of active scheduled drafts requiring confirmation with one draft */
  'banner.confirm-active-scheduled-drafts_one':
    'Există {{count}} Ciornă Programată care necesită confirmare de programare',
  /** Button text for confirming scheduling of active drafts */
  'banner.confirm-active-scheduled-drafts.button': 'Reluați programarea',
  /** Button text when confirming schedules from paused mode */
  'banner.confirm-active-scheduled-drafts.button-paused': 'Reluați toate programările',
  /** Banner text shown when drafts mode is disabled but there are still scheduled drafts */
  'banner.drafts-mode-disabled':
    'Modul drafts a fost dezactivat, dar există în continuare drafturi programate pentru publicare.',
  /** Banner text shown when navigating to a release that does not exist */
  'banner.release-not-found': 'Această lansare nu a putut fi găsită',
  /** Tooltip for the dismiss button in the release not found banner */
  'banner.release-not-found.dismiss': 'Închide',
  /** Banner text shown when scheduled drafts feature is disabled but there are still scheduled drafts */
  'banner.scheduled-drafts-disabled':
    'Scheduled drafts a fost dezactivat, dar există în continuare drafturi programate pentru publicare.',

  /** Title for changes to published documents */
  'changes-published-docs.title': 'Modificări ale documentelor publicate',

  /** Dialog confirm button text for confirming all scheduled drafts */
  'confirm-active-scheduled-drafts-dialog.confirm-button': 'Confirmați programările',
  /** Dialog description for confirming active scheduled drafts */
  'confirm-active-scheduled-drafts-dialog.description':
    'Programați toate Scheduled Drafts întrerupte pentru datele de publicare intenționare',
  /** Dialog warning when some scheduled drafts have past dates */
  'confirm-active-scheduled-drafts-dialog.past-dates-warning':
    'Unele dintre aceste Scheduled Drafts sunt programate pentru date trecute. Confirmarea programărilor va publica imediat acele versiuni ale documentelor.',
  /** Dialog title for confirming active scheduled drafts */
  'confirm-active-scheduled-drafts-dialog.title': 'Reluați Scheduled Drafts',

  /** Suffix for when a release is a copy of another release */
  'copy-suffix': 'Copie',

  /** Confirm button text for overriding existing draft */
  'copy-to-draft-dialog.confirm-button': 'Da, suprascrie Draft-ul',
  /** Description for dialog when copying version to draft that already exists */
  'copy-to-draft-dialog.description':
    'O versiune draft a acestui document există deja. Copiați versiunea curentă în draft și suprascrieți versiunea draft existentă.',
  /** Title for dialog when copying version to draft that already exists */
  'copy-to-draft-dialog.title': 'Versiunea draft există deja',

  /** Text for when a release / document was created */
  created: 'Creat <RelativeTime/>',

  /** Activity inspector button text */
  'dashboard.details.activity': 'Activitate',
  /** Text for the releases detail screen in the pin release button. */
  'dashboard.details.pin-release': 'Fixați lansarea în studio',
  /** Text for the releases detail screen when a release was published ASAP */
  'dashboard.details.published-asap': 'Publicat',
  /** Text for the releases detail screen when a release was published from scheduling */
  'dashboard.details.published-on': 'Publicat pe {{date}}',
  /** Text for the releases detail screen in the unpin release button. */
  'dashboard.details.unpin-release': 'Anulați fixarea lansării din studio',

  /** Label for the button to proceed deleting a release */
  'delete-dialog.confirm-delete-button': 'Da, ștergeți lansarea',
  /** Description for the dialog confirming the deleting of a release with one document */
  'delete-dialog.confirm-delete-description_one': 'Aceasta va șterge 1 versiune de document.',
  /** Header for deleting a release dialog */
  'delete-dialog.confirm-delete.header': 'Sigur doriți să ștergeți această lansare?',

  /** Label when a release has been deleted by a different user */
  'deleted-release': "Lansarea '<strong>{{title}}</strong>' a fost ștearsă",

  /** Text for when there's no changes in a release diff */
  'diff.list-empty': 'Lista de modificări este goală, consultați documentul',
  /** Text for when there's no changes in a release diff */
  'diff.no-changes': 'Nicio modificare',

  /** Description for discarding a draft of a document dialog */
  'discard-version-dialog.description-draft':
    'Aceasta va elimina permanent toate modificările aduse acestui document. Această acțiune nu poate fi anulată.',
  /** Description for discarding a version of a document dialog */
  'discard-version-dialog.description-release':
    "Aceasta va elimina permanent toate modificările aduse acestui document în cadrul lansării '<strong>{{releaseTitle}}</strong>'. Această acțiune nu poate fi anulată.",
  /** Title for dialog for discarding a draft of a document */
  'discard-version-dialog.header-draft': 'Renunțați la ciornă?',
  /** Header for discarding a version from a release of a document dialog */
  'discard-version-dialog.header-release':
    "Eliminați documentul din lansarea '<strong>{{releaseTitle}}</strong>'?",
  /** Title for dialog for discarding a draft of a document */
  'discard-version-dialog.title-draft': 'Renunțați la ciornă',
  /** Title for dialog for discarding a version of a document */
  'discard-version-dialog.title-release': 'Eliminați din lansare',

  /** Label for when a document in a release has a single validation warning */
  'document-validation.error_one': '{{count}} eroare de validare',

  /** Label for the button to proceed with duplicating a release */
  'duplicate-dialog.confirm-duplicate-button': 'Da, duplicați lansarea',
  /** Description for the dialog confirming the duplicate of a release with one document */
  'duplicate-dialog.confirm-duplicate-description_one':
    'Aceasta va duplica lansarea și cele 1 versiune de document.',
  /** Header for the dialog confirming the duplicate of a release */
  'duplicate-dialog.confirm-duplicate-header': 'Sigur doriți să duplicați această lansare?',

  /** Title text displayed for technical error details */
  'error-details-title': 'Detalii eroare',

  /** Title text when error during release update */
  'failed-edit-title': 'Salvarea modificărilor a eșuat',

  /** Title text displayed for releases that failed to publish  */
  'failed-publish-title': 'Publicarea a eșuat',

  /** Title text displayed for releases that failed to schedule  */
  'failed-schedule-title': 'Programarea a eșuat',

  /** Filter tab label for all documents */
  'filter-tab.all': 'Toate',
  /** Filter tab label for documents with validation errors */
  'filter-tab.errors': 'Erori',

  /**The text that will be shown in the footer to indicate the time the release was archived */
  'footer.status.archived': 'Arhivat',
  /**The text that will be shown in the footer to indicate the time the release was created */
  'footer.status.created': 'Creat',
  /**The text that will be shown in the footer to indicate the time the release was created */
  'footer.status.edited': 'Editat',
  /**The text that will be shown in the footer to indicate the time the release was published */
  'footer.status.published': 'Publicat',
  /**The text that will be shown in the footer to indicate the time the release was unarchived */
  'footer.status.unarchived': 'Dezarhivat',

  /** Label text for the loading state whilst release is being loaded */
  'loading-release': 'Se încarcă lansarea',

  /** Text for when documents of a release are loading */
  'loading-release-documents': 'Se încarcă documentele',
  /** Description text for when loading documents on a release failed */
  'loading-release-documents.error.description':
    'Nu putem încărca documentele pentru această lansare. Vă rugăm să încercați din nou mai târziu.',
  /** Title text for when loading documents on a release failed */
  'loading-release-documents.error.title': 'Ceva a mers greșit',

  /** Label for title of actions for "when releasing" */
  'menu.group.when-releasing': 'La lansare',
  /** Label for the release menu */
  'menu.label': 'Meniu lansare',
  /** Tooltip for the release menu */
  'menu.tooltip': 'Acțiuni',

  /** Text for when no archived releases are found */
  'no-archived-release': 'Nicio lansare arhivată',

  /** Tooltip text when there are no paused scheduled drafts */
  'no-paused-release': 'Niciun draft programat în pauză',

  /** Text for when no releases are found */
  'no-releases': 'Nicio lansare',

  /** Text for when no scheduled drafts are found */
  'no-scheduled-drafts': 'Niciun draft programat',

  /** Text for the button name for the release tool */
  'overview.action.documentation': 'Documentație',
  /** Tooltip for the calendar button in the release overview */
  'overview.calendar.tooltip': 'Vizualizați calendarul',
  /** Description for the release tool */
  'overview.description':
    'Lansările sunt colecții de modificări ale documentelor care pot fi gestionate, programate și revenite împreună.',
  /** Text for the placeholder in the search release input  */
  'overview.search-releases-placeholder': 'Căutați lansări',
  /** Title for the release tool */
  'overview.title': 'Lansări',

  /** Tooltip text for releases that have passed their intended publish date */
  'passed-intended-publish-date': 'Această lansare a depășit data de publicare intenționată',

  /** Tooltip text for scheduled drafts that have passed their intended publish date */
  'passed-intended-publish-date-draft': 'Acest draft a depășit data de publicare intenționată',

  /** Description for when a user doesn't have publish or schedule releases */
  'permission-missing-description':
    'Rolul dvs. limitează în prezent ceea ce puteți vedea în această lansare. Este posibil să nu puteți publica sau programa această lansare.',

  /** Text for when a user doesn't have publish or schedule releases */
  'permission-missing-title': 'Acces limitat',

  /** Tooltip label when the user doesn't have permission to archive release */
  'permissions.error.archive': 'Nu aveți permisiunea de a arhiva această lansare',
  /** Tooltip label when the user doesn't have permission to delete release */
  'permissions.error.delete': 'Nu aveți permisiunea de a șterge această lansare',
  /** Tooltip label when the user doesn't have permission for discarding a version */
  'permissions.error.discard-version': 'Nu aveți permisiunea de a renunța la această versiune',
  /** Tooltip label when the user doesn't have permission to duplicate release */
  'permissions.error.duplicate': 'Nu aveți permisiunea de a duplica această lansare',
  /** Tooltip label when the user doesn't have permission to unarchive release */
  'permissions.error.unarchive': 'Nu aveți permisiunea de a dezarhiva această lansare',
  /** Tooltip label when the user doesn't have permission for unpublishing a document */
  'permissions.error.unpublish': 'Nu aveți permisiunea de a anula publicarea acestui document',

  /** Tooltip text for when one user is editing a document in a release */
  'presence.tooltip.one':
    '{{displayName}} editează acest document în lansarea „{{releaseTitle}}" chiar acum',

  /** Tooltip text for publish release action when there are no documents */
  'publish-action.validation.no-documents': 'Nu există documente de publicat',

  /** Description for the dialog confirming the publish of a release with one document */
  'publish-dialog.confirm-publish-description_one':
    "Lansarea '<strong>{{title}}</strong>' și documentul său vor fi publicate.",
  /** Title for the dialog confirming the publish of a release */
  'publish-dialog.confirm-publish.title':
    'Sigur doriți să publicați lansarea și toate versiunile documentelor?',
  /** Label for when documents in release have validation errors */
  'publish-dialog.validation.error': 'Unele documente conțin erori de validare',
  /** Label for when documents are being validated */
  'publish-dialog.validation.loading': 'Se validează documentele...',
  /** Label for the button when the user doesn't have permissions to publish a release */
  'publish-dialog.validation.no-permission': 'Nu aveți permisiunea de a publica',

  /** Title for information card on a published release */
  'publish-info.title': 'Această lansare a fost publicată cu succes.',

  /** Placeholder title for a release with no title */
  'release-placeholder.title': 'Fără titlu',

  /** Description for the dialog confirming the revert of a release with multiple documents */
  'revert-dialog.confirm-revert-description_one':
    'Aceasta va reveni la versiunea anterioară a {{releaseDocumentsLength}} document.',
  /** Checkbox label to confirm whether to create a staged release for revert or immediately revert */
  'revert-dialog.confirm-revert.stage-revert-checkbox-label': 'Revenire imediată la lansare',
  /** Title for the dialog confirming the revert of a release */
  'revert-dialog.confirm-revert.title': "Sigur doriți să reveniți la lansarea '{{title}}'?",
  /** Warning card text for when immediately revert a release with history */
  'revert-dialog.confirm-revert.warning-card':
    'Au fost efectuate modificări la documentele din această lansare după ce au fost publicate. Revenirea va suprascrie aceste modificări.',

  /** Description of a reverted release */
  'revert-release.description':
    'Revenire la modificările versiunilor de documente din „{{title}}".',
  /** Title of a reverted release */
  'revert-release.title': 'Se revine la „{{title}}"',

  /** Description for the review changes button in release tool */
  'review.description': 'Adăugați documente la această lansare pentru a revizui modificările',
  /** Text for when a document is edited */
  'review.edited': 'Editat <RelativeTime/>',

  /** Schedule release button tooltip when there are no documents to schedule */
  'schedule-action.validation.no-documents': 'Nu există documente de programat',

  /** Schedule release button tooltip when the release is already scheduled */
  'schedule-button-tooltip.already-scheduled': 'Această lansare este deja programată',
  /** Schedule release button tooltip when there are validation errors */
  'schedule-button-tooltip.validation.error': 'Unele documente conțin erori de validare',
  /** Schedule release button tooltip when validation is loading */
  'schedule-button-tooltip.validation.loading': 'Se validează documentele...',
  /** Schedule release button tooltip when user has no permissions to schedule */
  'schedule-button-tooltip.validation.no-permission': 'Nu aveți permisiunea de a programa',

  /** Title of unschedule release dialog */
  'schedule-button.tooltip': 'Sigur doriți să anulați programarea lansării?',

  /** Description for the confirm button for scheduling a release */
  'schedule-dialog.confirm-button': 'Da, programează',
  /** Description shown in unschedule relaease dialog */
  'schedule-dialog.confirm-description_one':
    "Lansarea '<strong>{{title}}</strong>' și documentul său vor fi publicate la data selectată.",
  /** Title for unschedule release dialog */
  'schedule-dialog.confirm-title': 'Programați lansarea',
  /** Description for warning that the published schedule time is in the past */
  'schedule-dialog.publish-date-in-past-warning': 'Programați pentru o dată și oră viitoare.',
  /** Label for date picker when scheduling a release */
  'schedule-dialog.select-publish-date-label': 'Programează pe',

  /** Confirm button text for the schedule unpublish dialog */
  'schedule-unpublish-dialog.confirm': 'Programează anularea publicării',
  /** Description for the schedule unpublish dialog */
  'schedule-unpublish-dialog.description':
    'Selectați când ar trebui să fie anulată publicarea acestui document.',
  /** Header for the schedule unpublish dialog */
  'schedule-unpublish-dialog.header': 'Programează ciorna pentru anularea publicării',

  /** Placeholder for search of documents in a release */
  'search-documents-placeholder': 'Căutați documente',

  /** Text for when the release has no errors found */
  'summary.all-documents-errors-found':
    'Toate documentele au fost validate, au fost găsite probleme',
  /** Text for when the release has validated all documents */
  'summary.all-documents-validated':
    'Toate documentele au fost validate, nu au fost găsite probleme',
  /** Text for when the release was created */
  'summary.created': 'Creat <RelativeTime/>',
  /** Text for when the release is composed of one document */
  'summary.document-count_one': '{{count}} document',
  /** Text for when the release has some errors found */
  'summary.errors-found':
    'Pentru a publica sau programa lansarea, vă rugăm să rezolvați problemele găsite în documente',
  /** Text for when the release has no documents */
  'summary.no-documents': 'Niciun document',
  /** Description for the empty state when a cardinality-one release has no documents */
  'summary.no-documents-cardinality-one.description':
    'Această ciornă programată nu conține un document. Este posibil să fi fost eliminat.',
  /** Title for the empty state when a cardinality-one release has no documents */
  'summary.no-documents-cardinality-one.title': 'Niciun document în această lansare',
  /** Text for when the release has not published */
  'summary.not-published': 'Nepublicat',
  /** Text for when the release was published */
  'summary.published': 'Publicat <RelativeTime/>',
  /** Text for when the release has validated documents */
  'summary.validated-documents': '{{validatedCount}} din {{totalCount}} documente validate',
  /** Text for validation loading indicator */
  'summary.validating-documents': 'Se validează documentele: {{validatedCount}} din {{totalCount}}',

  /** add action type that will be shown in the table*/
  'table-body.action.add': 'Adăugați',
  /** Change action type that will be shown in the table*/
  'table-body.action.change': 'Modificați',
  /** Change action type that will be shown in the table*/
  'table-body.action.unpublish': 'Anulați publicarea',

  /** Header for the document table in the release tool - action */
  'table-header.action': 'Acțiune',
  /** Header for the document table in the release tool - Archived */
  'table-header.archivedAt': 'Arhivat',
  /** Header for the document table in the release tool - contributors */
  'table-header.contributors': 'Contribuitori',
  /** Header for the document table in the release tool - created by */
  'table-header.created-by': 'Creat de',
  /** Header for the document table in the release tool - document preview */
  'table-header.document': 'Document',
  /** Header for the document table in the release tool - title */
  'table-header.documents': 'Documente',
  /** Header for the document table in the release tool - edited */
  'table-header.edited': 'Editat',
  /** Header for the paused scheduled drafts table - intended for */
  'table-header.intended-for': 'Destinat pentru',
  /** Header for the document table in the release tool - Published */
  'table-header.published-at': 'Publicat',
  /** Header for the document table in the release tool - Published */
  'table-header.publishedAt': 'Publicat',
  /** Header for the scheduled drafts document table in the release tool - published at */
  'table-header.scheduled-draft.published-at': 'Publicat la',
  /** Header for the scheduled drafts document table in the release tool - scheduled for */
  'table-header.scheduled-for': 'Programat pentru',
  /** Header for the document table in the release tool - time */
  'table-header.time': 'Timp',
  /** Header for the  document table in the release tool - release title */
  'table-header.title': 'Release',
  /** Header for the document table in the release tool - type */
  'table-header.type': 'Tip',
  /** Header for the document table in the release tool - when */
  'table-header.when': 'Când',

  /** Text for the release time label for scheduled releases  which has not been scheduled yet*/
  'time.estimated': 'Estimat',
  /** Text for the release time label for scheduled releases  which has been scheduled*/
  'time.scheduled': 'Programat',

  /** Text for toast when release failed to archive */
  'toast.archive.error': "Arhivarea '<strong>{{title}}</strong>' a eșuat: {{error}}",
  /** Toast error message when bulk scheduling of active drafts fails */
  'toast.confirm-active-scheduled-drafts.error': 'Programarea schițelor a eșuat: {{error}}',
  /** Toast message after copying release ID */
  'toast.copy-release-id.success': 'ID-ul release-ului a fost copiat în clipboard',
  /** Toast message after copying release link */
  'toast.copy-release-link.success': 'Linkul release-ului a fost copiat în clipboard',
  /** Toast message after copying release title */
  'toast.copy-release-title.success': 'Titlul release-ului a fost copiat în clipboard',
  /** Description for toast when creating new version of document in release failed */
  'toast.create-version.error': 'Adăugarea documentului la release a eșuat: {{error}}',
  /** Description for toast when release deletion failed */
  'toast.delete.error': "Ștergerea '<strong>{{title}}</strong>' a eșuat: {{error}}",
  /** Description for toast when release is successfully deleted */
  'toast.delete.success': "Release-ul '<strong>{{title}}</strong>' a fost șters cu succes",
  /** Description for toast when release duplication failed */
  'toast.duplicate.error': "Duplicarea '<strong>{{title}}</strong>' a eșuat: {{error}}",
  /** Description for toast when release is successfully duplicated */
  'toast.duplicate.success': "Release-ul '<strong>{{title}}</strong>' a fost duplicat. <Link/>",
  /** Link text for toast link to the duplicated release */
  'toast.duplicate.success-link': 'Vizualizați release-ul duplicat',
  /** Text for toast when release has been reverted immediately */
  'toast.immediate-revert.success': "Lansarea '{{title}}' a fost revenită cu succes",
  /** Text for toast when release failed to publish */
  'toast.publish.error': "Publicarea '<strong>{{title}}</strong>' a eșuat: {{error}}",
  /** Text for toast when release has reverted release successfully staged */
  'toast.revert-stage.success':
    "Revenirea lansării pentru '{{title}}' a fost creată cu succes. <Link/>",
  /** Link text for toast link to the generated revert release */
  'toast.revert-stage.success-link': 'Vizualizați lansarea revenită',
  /** Text for toast when release failed to revert */
  'toast.revert.error': 'Revenirea lansării a eșuat: {{error}}',
  /** Text for toast when release failed to schedule */
  'toast.schedule.error': "Programarea '<strong>{{title}}</strong>' a eșuat: {{error}}",
  /** Text for toast when release has been scheduled */
  'toast.schedule.success': "Lansarea '<strong>{{title}}</strong>' a fost programată.",
  /** Text for toast when release failed to unarchive */
  'toast.unarchive.error': "Dezarhivarea '<strong>{{title}}</strong>' a eșuat: {{error}}",
  /** Text for toast when release failed to unschedule */
  'toast.unschedule.error': "Anularea programării '<strong>{{title}}</strong>' a eșuat: {{error}}",

  /** Text for tooltip when a release has been scheduled */
  'type-picker.tooltip.scheduled':
    'Lansarea este programată, anulați programarea pentru a schimba tipul',

  /** Text action in unpublish dialog to cancel */
  'unpublish-dialog.action.cancel': 'Anulare',
  /** Text action in unpublish dialog to unpublish */
  'unpublish-dialog.action.unpublish': 'Da, anulați publicarea la lansare',
  /** Description for unpublish dialog, explaining that all changes made to this document will be lost */
  'unpublish-dialog.description.lost-changes':
    'Orice modificări aduse acestei versiuni a documentului vor fi pierdute.',
  /** Description for the unpublish dialog, explaining that it will create a draft if no draft exists at time of release */
  'unpublish-dialog.description.to-draft':
    'Aceasta va anula publicarea documentului ca parte a lansării <Label>{{title}}</Label> și va crea o schiță dacă nu există nicio schiță la momentul lansării.',
  /** Title for the dialog confirming the unpublish of a release */
  'unpublish-dialog.header': 'Sigur doriți să anulați publicarea acestui document la lansare?',

  /** Text for when a document is unpublished */
  'unpublish.already-unpublished': 'Acest document este deja nepublicat.',
  /** Tooltip label for when a document is unpublished */
  'unpublish.no-published-version': 'Nu există nicio versiune publicată a acestui document.',

  /** Description shown in unschedule relaease dialog */
  'unschedule-dialog.confirm-description': 'Lansarea nu va mai fi publicată la data programată',
  /** Title for unschedule release dialog */
  'unschedule-dialog.confirm-title': 'Sigur doriți să anulați programarea lansării?',
})
