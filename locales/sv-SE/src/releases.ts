import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Action text for adding a document to release */
  'action.add-document': 'Lägg till dokument',
  /** Action text for archiving a release */
  'action.archive': 'Arkivera release',
  /** Tooltip for when the archive release action is disabled due to release being scheduled  */
  'action.archive.tooltip': 'Avschemalägg denna release för att arkivera den',
  /** Action text for showing the archived releases */
  'action.archived': 'Arkiverade',
  /** Menu item label for copying release ID */
  'action.copy-release-id.label': 'Kopiera release-ID',
  /** Menu item label for copying release URL */
  'action.copy-release-link.label': 'Kopiera release-URL',
  /** Menu item label for copying release title */
  'action.copy-release-title.label': 'Kopiera release-titel',
  /** Tooltip for copy release actions button */
  'action.copy-release.label': 'Kopiera',
  /** Action text for staging a new revert release */
  'action.create-revert-release': 'Skapa en ny release',
  /** Action text for deleting a release */
  'action.delete-release': 'Ta bort release',
  /** Menu item label for showing scheduled drafts */
  'action.drafts': 'Schemalagda utkast',
  /** Action text for duplicating a release */
  'action.duplicate-release': 'Duplicera release',
  /** Action text for editing a release */
  'action.edit': 'Redigera release',
  /** Action text for reverting a release immediately without staging changes */
  'action.immediate-revert-release': 'Återställ nu',
  /** Action text for opening a release */
  'action.open': 'Aktiv',
  /** Action text for showing the paused scheduled drafts */
  'action.paused': 'Pausade',
  /** Action text for publishing all documents in a release (and the release itself) */
  'action.publish-all-documents': 'Kör release',
  /** Menu item label for showing releases (multi-document releases) */
  'action.releases': 'Releases',
  /** Action text for reverting a release */
  'action.revert': 'Återställ release',
  /** Action message for when document is scheduled for unpublishing a document and you want to no longer unpublish it */
  'action.revert-unpublish-actions': 'Återställ avpublicering vid lansering',
  /** Text for the review changes button in release tool */
  'action.review': 'Granska ändringar',
  /** Action text for scheduling a release */
  'action.schedule': 'Schemalägg release...',
  /** Action text for scheduling unpublish of a draft document */
  'action.schedule-unpublish': 'Schemalägg avpublicering',
  /** Tooltip text for when schedule unpublish is disabled because document is not published */
  'action.schedule-unpublish.disabled.not-published':
    'Dokumentet måste vara publicerat för att schemalägga avpublicering',
  /** Label for unarchiving a release */
  'action.unarchive': 'Avarkivera release',
  /** Action text for unpublishing a document in a release in the context menu */
  'action.unpublish': 'Avpublicera',
  /** Action message for scheduling an unpublished of a document  */
  'action.unpublish-doc-actions': 'Avpublicera vid lansering',
  /** Action text for unscheduling a release */
  'action.unschedule': 'Avschemalägg lansering',

  /** Text for the summary button in release tool */
  'actions.summary': 'Sammanfattning',

  /* The text for the activity event when a document is added to a release */
  'activity.event.add-document': 'Lade till en dokumentversion',
  /* The text for the activity event when the release is archived */
  'activity.event.archive': 'Arkiverade lanseringen <strong>{{releaseTitle}}</strong>',
  /* The text for the activity event when the release is created */
  'activity.event.create':
    'Skapade lanseringen <strong>{{releaseTitle}}</strong> <ScheduleTarget>med målet </ScheduleTarget>',
  /* The text for the activity event when a document is removed from a release */
  'activity.event.discard-document': 'Kasserade en dokumentversion',
  'activity.event.edit': 'Ställde in lanseringstid till <ScheduleTarget></ScheduleTarget>',
  /**The text to display in the changes when the release type changes to asap */
  'activity.event.edit-time-asap': 'Så snart som möjligt',
  /**The text to display in the changes when the release type changes to undecided */
  'activity.event.edit-time-undecided': 'Obestämt',
  /* The text for the activity event when the release is published */
  'activity.event.publish': 'Publicerade lanseringen <strong>{{releaseTitle}}</strong>',
  /* The text for the activity event when the release is scheduled */
  'activity.event.schedule': 'Markerad som schemalagd',
  /** The text for the activity event when the release is unarchived */
  'activity.event.unarchive': 'Avarkiverade lanseringen <strong>{{releaseTitle}}</strong>',
  /** The text for the activity event when the release is unscheduled */
  'activity.event.unschedule': 'Markerad som oschemalagd',
  /** The loading text for when releases are loading */
  'activity.panel.error': 'Ett fel uppstod vid hämtning av lanseringsaktivitet',
  /** The loading text for when releases are loading */
  'activity.panel.loading': 'Laddar lanseringsaktivitet',
  /** The title for the activity panel shown in the releases detail screen */
  'activity.panel.title': 'Aktivitet',

  /** Label for the button to proceed with archiving a release */
  'archive-dialog.confirm-archive-button': 'Ja, arkivera lansering',
  /** Description for the dialog confirming the archive of a release with one document */
  'archive-dialog.confirm-archive-description_one': 'Detta kommer att arkivera 1 dokumentversion.',
  /** Description for the dialog confirming the archive of a release with more than one document */
  'archive-dialog.confirm-archive-description_other':
    'Detta kommer att arkivera {{count}} dokumentversioner.',
  /** Header for the dialog confirming the archive of a release */
  'archive-dialog.confirm-archive-header':
    'Är du säker på att du vill arkivera den här lanseringen?',
  /** Title for the dialog confirming the archive of a release */
  'archive-dialog.confirm-archive-title':
    "Är du säker på att du vill arkivera lanseringen <strong>'{{title}}'</strong>?",

  /** Description for information card on a published or archived release to description retention effects */
  'archive-info.description':
    'Den kommer att vara tillgänglig i {{retentionDays}} dagar och sedan automatiskt tas bort den {{removalDate}}. <Link>Läs om lagring</Link>.',
  /** Title for information card on a archived release */
  'archive-info.title': 'Den här lanseringen är arkiverad',

  /** Banner text showing count of active scheduled drafts requiring confirmation with one draft */
  'banner.confirm-active-scheduled-drafts_one':
    'Det finns {{count}} Scheduled Draft som kräver schemaläggningsbekräftelse',
  /** Banner text showing count of active scheduled drafts requiring confirmation with multiple drafts */
  'banner.confirm-active-scheduled-drafts_other':
    'Det finns {{count}} Scheduled Drafts som kräver schemaläggningsbekräftelse',
  /** Button text for confirming scheduling of active drafts */
  'banner.confirm-active-scheduled-drafts.button': 'Återuppta schemaläggning',
  /** Button text when confirming schedules from paused mode */
  'banner.confirm-active-scheduled-drafts.button-paused': 'Återuppta alla scheman',
  /** Banner text shown when drafts mode is disabled but there are still scheduled drafts */
  'banner.drafts-mode-disabled':
    'Drafts-läget har inaktiverats men det finns fortfarande scheduled drafts som ska publiceras.',
  /** Banner text shown when navigating to a release that does not exist */
  'banner.release-not-found': 'Den här releasen kunde inte hittas',
  /** Tooltip for the dismiss button in the release not found banner */
  'banner.release-not-found.dismiss': 'Stäng',
  /** Banner text shown when scheduled drafts feature is disabled but there are still scheduled drafts */
  'banner.scheduled-drafts-disabled':
    'Scheduled drafts har inaktiverats men det finns fortfarande scheduled drafts som ska publiceras.',

  /** Title for changes to published documents */
  'changes-published-docs.title': 'Ändringar i publicerade dokument',

  /** Dialog confirm button text for confirming all scheduled drafts */
  'confirm-active-scheduled-drafts-dialog.confirm-button': 'Bekräfta scheman',
  /** Dialog description for confirming active scheduled drafts */
  'confirm-active-scheduled-drafts-dialog.description':
    'Schemalägg alla pausade Scheduled Drafts för deras avsedda publiceringsdatum',
  /** Dialog warning when some scheduled drafts have past dates */
  'confirm-active-scheduled-drafts-dialog.past-dates-warning':
    'Vissa av dessa Scheduled Drafts är schemalagda för tidigare datum. Att bekräfta scheman kommer omedelbart att publicera dessa versioner av dokumenten.',
  /** Dialog title for confirming active scheduled drafts */
  'confirm-active-scheduled-drafts-dialog.title': 'Återuppta Scheduled Drafts',

  /** Suffix for when a release is a copy of another release */
  'copy-suffix': 'Kopia',

  /** Confirm button text for overriding existing draft */
  'copy-to-draft-dialog.confirm-button': 'Ja, skriv över Draft',
  /** Description for dialog when copying version to draft that already exists */
  'copy-to-draft-dialog.description':
    'En utkastversion av det här dokumentet finns redan. Kopiera den aktuella versionen till utkastet och skriv över den befintliga utkastversionen.',
  /** Title for dialog when copying version to draft that already exists */
  'copy-to-draft-dialog.title': 'Utkastversion finns redan',

  /** Text for when a release / document was created */
  created: 'Skapad <RelativeTime/>',

  /** Activity inspector button text */
  'dashboard.details.activity': 'Aktivitet',
  /** Text for the releases detail screen in the pin release button. */
  'dashboard.details.pin-release': 'Fäst release i studio',
  /** Text for the releases detail screen when a release was published ASAP */
  'dashboard.details.published-asap': 'Publicerad',
  /** Text for the releases detail screen when a release was published from scheduling */
  'dashboard.details.published-on': 'Publicerad den {{date}}',
  /** Text for the releases detail screen in the unpin release button. */
  'dashboard.details.unpin-release': 'Lossa release från studio',

  /** Label for the button to proceed deleting a release */
  'delete-dialog.confirm-delete-button': 'Ja, ta bort release',
  /** Description for the dialog confirming the deleting of a release with one document */
  'delete-dialog.confirm-delete-description_one': 'Detta kommer att ta bort 1 dokumentversion.',
  /** Description for the dialog confirming the deleting of a release with more than one document */
  'delete-dialog.confirm-delete-description_other':
    'Detta kommer att radera {{count}} dokumentversioner.',
  /** Header for deleting a release dialog */
  'delete-dialog.confirm-delete.header': 'Är du säker på att du vill radera den här releasen?',

  /** Label when a release has been deleted by a different user */
  'deleted-release': "Releasen '<strong>{{title}}</strong>' har raderats",

  /** Text for when there's no changes in a release diff */
  'diff.list-empty': 'Ändringslistans är tom, se dokument',
  /** Text for when there's no changes in a release diff */
  'diff.no-changes': 'Inga ändringar',

  /** Description for discarding a draft of a document dialog */
  'discard-version-dialog.description-draft':
    'Detta kommer permanent att ta bort alla ändringar som gjorts i det här dokumentet. Denna åtgärd kan inte ångras.',
  /** Description for discarding a version of a document dialog */
  'discard-version-dialog.description-release':
    "Detta kommer permanent att ta bort alla ändringar som gjorts i det här dokumentet inom releasen '<strong>{{releaseTitle}}</strong>'. Denna åtgärd kan inte ångras.",
  /** Title for dialog for discarding a draft of a document */
  'discard-version-dialog.header-draft': 'Ignorera utkast?',
  /** Header for discarding a version from a release of a document dialog */
  'discard-version-dialog.header-release':
    "Ta bort dokumentet från releasen '<strong>{{releaseTitle}}</strong>'?",
  /** Title for dialog for discarding a draft of a document */
  'discard-version-dialog.title-draft': 'Ignorera utkast',
  /** Title for dialog for discarding a version of a document */
  'discard-version-dialog.title-release': 'Ta bort från release',

  /** Label for when a document in a release has a single validation warning */
  'document-validation.error_one': '{{count}} valideringsfel',
  /** Label for when a document in a release has multiple validation warnings */
  'document-validation.error_other': '{{count}} valideringsfel',

  /** Label for the button to proceed with duplicating a release */
  'duplicate-dialog.confirm-duplicate-button': 'Ja, duplicera release',
  /** Description for the dialog confirming the duplicate of a release with one document */
  'duplicate-dialog.confirm-duplicate-description_one':
    'Detta kommer att duplicera releasen och 1 dokumentversion.',
  /** Description for the dialog confirming the duplicate of a release with more than one document */
  'duplicate-dialog.confirm-duplicate-description_other':
    'Detta kommer att duplicera releasen och {{count}} dokumentversioner.',
  /** Header for the dialog confirming the duplicate of a release */
  'duplicate-dialog.confirm-duplicate-header':
    'Är du säker på att du vill duplicera den här releasen?',

  /** Title text displayed for technical error details */
  'error-details-title': 'Felinformation',

  /** Title text when error during release update */
  'failed-edit-title': 'Det gick inte att spara ändringar',

  /** Title text displayed for releases that failed to publish  */
  'failed-publish-title': 'Det gick inte att publicera',

  /** Title text displayed for releases that failed to schedule  */
  'failed-schedule-title': 'Det gick inte att schemalägga',

  /** Filter tab label for all documents */
  'filter-tab.all': 'Alla',
  /** Filter tab label for documents with validation errors */
  'filter-tab.errors': 'Fel',

  /**The text that will be shown in the footer to indicate the time the release was archived */
  'footer.status.archived': 'Arkiverad',
  /**The text that will be shown in the footer to indicate the time the release was created */
  'footer.status.created': 'Skapad',
  /**The text that will be shown in the footer to indicate the time the release was created */
  'footer.status.edited': 'Redigerad',
  /**The text that will be shown in the footer to indicate the time the release was published */
  'footer.status.published': 'Publicerad',
  /**The text that will be shown in the footer to indicate the time the release was unarchived */
  'footer.status.unarchived': 'Återställd från arkiv',

  /** Label text for the loading state whilst release is being loaded */
  'loading-release': 'Laddar release',

  /** Text for when documents of a release are loading */
  'loading-release-documents': 'Laddar dokument',
  /** Description text for when loading documents on a release failed */
  'loading-release-documents.error.description':
    'Vi kan inte ladda dokumenten för den här releasen. Försök igen senare.',
  /** Title text for when loading documents on a release failed */
  'loading-release-documents.error.title': 'Något gick fel',

  /** Label for title of actions for "when releasing" */
  'menu.group.when-releasing': 'Vid publicering',
  /** Label for the release menu */
  'menu.label': 'Release-meny',
  /** Tooltip for the release menu */
  'menu.tooltip': 'Åtgärder',

  /** Text for when no archived releases are found */
  'no-archived-release': 'Inga arkiverade releases',

  /** Tooltip text when there are no paused scheduled drafts */
  'no-paused-release': 'Inga pausade schemalagda utkast',

  /** Text for when no releases are found */
  'no-releases': 'Inga releases',

  /** Text for when no scheduled drafts are found */
  'no-scheduled-drafts': 'Inga schemalagda utkast',

  /** Text for the button name for the release tool */
  'overview.action.documentation': 'Dokumentation',
  /** Tooltip for the calendar button in the release overview */
  'overview.calendar.tooltip': 'Visa kalender',
  /** Description for the release tool */
  'overview.description':
    'Releases är samlingar av dokumentändringar som kan hanteras, schemaläggas och återställas tillsammans.',
  /** Text for the placeholder in the search release input  */
  'overview.search-releases-placeholder': 'Sök releases',
  /** Title for the release tool */
  'overview.title': 'Releases',

  /** Tooltip text for releases that have passed their intended publish date */
  'passed-intended-publish-date': 'Den här releasen har passerat sitt avsedda publiceringsdatum',

  /** Tooltip text for scheduled drafts that have passed their intended publish date */
  'passed-intended-publish-date-draft':
    'Det här utkastet har passerat sitt avsedda publiceringsdatum',

  /** Description for when a user doesn't have publish or schedule releases */
  'permission-missing-description':
    'Din roll begränsar för närvarande vad du kan se i den här releasen. Du kan varken publicera eller schemalägga den här releasen.',

  /** Text for when a user doesn't have publish or schedule releases */
  'permission-missing-title': 'Begränsad åtkomst',

  /** Tooltip label when the user doesn't have permission to archive release */
  'permissions.error.archive': 'Du har inte behörighet att arkivera den här releasen',
  /** Tooltip label when the user doesn't have permission to delete release */
  'permissions.error.delete': 'Du har inte behörighet att ta bort den här releasen',
  /** Tooltip label when the user doesn't have permission for discarding a version */
  'permissions.error.discard-version': 'Du har inte behörighet att kassera den här versionen',
  /** Tooltip label when the user doesn't have permission to duplicate release */
  'permissions.error.duplicate': 'Du har inte behörighet att duplicera den här releasen',
  /** Tooltip label when the user doesn't have permission to unarchive release */
  'permissions.error.unarchive': 'Du har inte behörighet att avarkivera den här releasen',
  /** Tooltip label when the user doesn't have permission for unpublishing a document */
  'permissions.error.unpublish': 'Du har inte behörighet att avpublicera det här dokumentet',

  /** Tooltip text for when one user is editing a document in a release */
  'presence.tooltip.one':
    '{{displayName}} redigerar det här dokumentet i releasen "{{releaseTitle}}" just nu',

  /** Tooltip text for publish release action when there are no documents */
  'publish-action.validation.no-documents': 'Det finns inga dokument att publicera',

  /** Description for the dialog confirming the publish of a release with one document */
  'publish-dialog.confirm-publish-description_one':
    "Releasen '<strong>{{title}}</strong>' och dess dokument kommer att publiceras.",
  /** Description for the dialog confirming the publish of a release with multiple documents */
  'publish-dialog.confirm-publish-description_other':
    "Releasen '<strong>{{title}}</strong>' och dess {{releaseDocumentsLength}} dokument kommer att publiceras.",
  /** Title for the dialog confirming the publish of a release */
  'publish-dialog.confirm-publish.title':
    'Är du säker på att du vill publicera releasen och alla dokumentversioner?',
  /** Label for when documents in release have validation errors */
  'publish-dialog.validation.error': 'Vissa dokument har valideringsfel',
  /** Label for when documents are being validated */
  'publish-dialog.validation.loading': 'Validerar dokument...',
  /** Label for the button when the user doesn't have permissions to publish a release */
  'publish-dialog.validation.no-permission': 'Du har inte behörighet att publicera',

  /** Title for information card on a published release */
  'publish-info.title': 'Den här releasen har publicerats.',

  /** Placeholder title for a release with no title */
  'release-placeholder.title': 'Namnlös',

  /** Description for the dialog confirming the revert of a release with multiple documents */
  'revert-dialog.confirm-revert-description_one':
    'Detta kommer att återställa {{releaseDocumentsLength}} dokumentversion.',
  /** Description for the dialog confirming the revert of a release with multiple documents */
  'revert-dialog.confirm-revert-description_other':
    'Detta kommer att återställa {{releaseDocumentsLength}} dokumentversioner.',
  /** Checkbox label to confirm whether to create a staged release for revert or immediately revert */
  'revert-dialog.confirm-revert.stage-revert-checkbox-label': 'Återställ releasen omedelbart',
  /** Title for the dialog confirming the revert of a release */
  'revert-dialog.confirm-revert.title':
    "Är du säker på att du vill återställa releasen '{{title}}'?",
  /** Warning card text for when immediately revert a release with history */
  'revert-dialog.confirm-revert.warning-card':
    'Ändringar gjordes i dokument i den här releasen efter att de publicerades. Återställning kommer att skriva över dessa ändringar.',

  /** Description of a reverted release */
  'revert-release.description': 'Återställ ändringar till dokumentversioner i "{{title}}".',
  /** Title of a reverted release */
  'revert-release.title': 'Återställer "{{title}}"',

  /** Description for the review changes button in release tool */
  'review.description': 'Lägg till dokument i den här releasen för att granska ändringar',
  /** Text for when a document is edited */
  'review.edited': 'Redigerad <RelativeTime/>',

  /** Schedule release button tooltip when there are no documents to schedule */
  'schedule-action.validation.no-documents': 'Det finns inga dokument att schemalägga',

  /** Schedule release button tooltip when the release is already scheduled */
  'schedule-button-tooltip.already-scheduled': 'Den här releasen är redan schemalagd',
  /** Schedule release button tooltip when there are validation errors */
  'schedule-button-tooltip.validation.error': 'Vissa dokument har valideringsfel',
  /** Schedule release button tooltip when validation is loading */
  'schedule-button-tooltip.validation.loading': 'Validerar dokument...',
  /** Schedule release button tooltip when user has no permissions to schedule */
  'schedule-button-tooltip.validation.no-permission': 'Du har inte behörighet att schemalägga',

  /** Title of unschedule release dialog */
  'schedule-button.tooltip': 'Är du säker på att du vill avschemalägg releasen?',

  /** Description for the confirm button for scheduling a release */
  'schedule-dialog.confirm-button': 'Ja, schemalägg',
  /** Description shown in unschedule relaease dialog */
  'schedule-dialog.confirm-description_one':
    "Releasen '<strong>{{title}}</strong>' och dess dokument kommer att publiceras på det valda datumet.",
  /** Description for the dialog confirming the publish of a release with multiple documents */
  'schedule-dialog.confirm-description_other':
    'Releasen <strong>{{title}}</strong> och dess {{count}} dokumentversioner kommer att schemaläggas.',
  /** Title for unschedule release dialog */
  'schedule-dialog.confirm-title': 'Schemalägg releasen',
  /** Description for warning that the published schedule time is in the past */
  'schedule-dialog.publish-date-in-past-warning': 'Schemalägg för ett framtida datum och tid.',
  /** Label for date picker when scheduling a release */
  'schedule-dialog.select-publish-date-label': 'Schemalägg den',

  /** Confirm button text for the schedule unpublish dialog */
  'schedule-unpublish-dialog.confirm': 'Schemalägg avpublicering',
  /** Description for the schedule unpublish dialog */
  'schedule-unpublish-dialog.description': 'Välj när detta dokument ska avpubliceras.',
  /** Header for the schedule unpublish dialog */
  'schedule-unpublish-dialog.header': 'Schemalägg utkast för avpublicering',

  /** Placeholder for search of documents in a release */
  'search-documents-placeholder': 'Sök dokument',

  /** Text for when the release has no errors found */
  'summary.all-documents-errors-found': 'Alla dokument validerade, problem hittades',
  /** Text for when the release has validated all documents */
  'summary.all-documents-validated': 'Alla dokument validerade, inga problem hittades',
  /** Text for when the release was created */
  'summary.created': 'Skapad <RelativeTime/>',
  /** Text for when the release is composed of one document */
  'summary.document-count_one': '{{count}} dokument',
  /** Text for when the release is composed of multiple documents */
  'summary.document-count_other': '{{count}} dokument',
  /** Text for when the release has some errors found */
  'summary.errors-found':
    'För att publicera eller schemalägga releasen, vänligen åtgärda problemen som hittades i dokumenten',
  /** Text for when the release has no documents */
  'summary.no-documents': 'Inga dokument',
  /** Description for the empty state when a cardinality-one release has no documents */
  'summary.no-documents-cardinality-one.description':
    'Detta schemalagda utkast innehåller inget dokument. Det kan ha tagits bort.',
  /** Title for the empty state when a cardinality-one release has no documents */
  'summary.no-documents-cardinality-one.title': 'Inget dokument i denna release',
  /** Text for when the release has not published */
  'summary.not-published': 'Inte publicerad',
  /** Text for when the release was published */
  'summary.published': 'Publicerad <RelativeTime/>',
  /** Text for when the release has validated documents */
  'summary.validated-documents': '{{validatedCount}} av {{totalCount}} dokument validerade',
  /** Text for validation loading indicator */
  'summary.validating-documents': 'Validerar dokument: {{validatedCount}} av {{totalCount}}',

  /** add action type that will be shown in the table*/
  'table-body.action.add': 'Lägg till',
  /** Change action type that will be shown in the table*/
  'table-body.action.change': 'Ändra',
  /** Change action type that will be shown in the table*/
  'table-body.action.unpublish': 'Avpublicera',

  /** Header for the document table in the release tool - action */
  'table-header.action': 'Åtgärd',
  /** Header for the document table in the release tool - Archived */
  'table-header.archivedAt': 'Arkiverad',
  /** Header for the document table in the release tool - contributors */
  'table-header.contributors': 'Bidragsgivare',
  /** Header for the document table in the release tool - created by */
  'table-header.created-by': 'Skapad av',
  /** Header for the document table in the release tool - document preview */
  'table-header.document': 'Dokument',
  /** Header for the document table in the release tool - title */
  'table-header.documents': 'Dokument',
  /** Header for the document table in the release tool - edited */
  'table-header.edited': 'Redigerad',
  /** Header for the paused scheduled drafts table - intended for */
  'table-header.intended-for': 'Avsedd för',
  /** Header for the document table in the release tool - Published */
  'table-header.published-at': 'Publicerad',
  /** Header for the document table in the release tool - Published */
  'table-header.publishedAt': 'Publicerad',
  /** Header for the scheduled drafts document table in the release tool - published at */
  'table-header.scheduled-draft.published-at': 'Publicerad den',
  /** Header for the scheduled drafts document table in the release tool - scheduled for */
  'table-header.scheduled-for': 'Schemalagd för',
  /** Header for the document table in the release tool - time */
  'table-header.time': 'Tid',
  /** Header for the  document table in the release tool - release title */
  'table-header.title': 'Release',
  /** Header for the document table in the release tool - type */
  'table-header.type': 'Typ',
  /** Header for the document table in the release tool - when */
  'table-header.when': 'När',

  /** Text for the release time label for scheduled releases  which has not been scheduled yet*/
  'time.estimated': 'Beräknad',
  /** Text for the release time label for scheduled releases  which has been scheduled*/
  'time.scheduled': 'Schemalagd',

  /** Text for toast when release failed to archive */
  'toast.archive.error': "Det gick inte att arkivera '<strong>{{title}}</strong>': {{error}}",
  /** Toast error message when bulk scheduling of active drafts fails */
  'toast.confirm-active-scheduled-drafts.error': 'Det gick inte att schemalägga utkast: {{error}}',
  /** Toast message after copying release ID */
  'toast.copy-release-id.success': 'Release-ID kopierat till urklipp',
  /** Toast message after copying release link */
  'toast.copy-release-link.success': 'Releaselänk kopierad till urklipp',
  /** Toast message after copying release title */
  'toast.copy-release-title.success': 'Releasetitel kopierad till urklipp',
  /** Description for toast when creating new version of document in release failed */
  'toast.create-version.error': 'Det gick inte att lägga till dokumentet i releasen: {{error}}',
  /** Description for toast when release deletion failed */
  'toast.delete.error': "Det gick inte att ta bort '<strong>{{title}}</strong>': {{error}}",
  /** Description for toast when release is successfully deleted */
  'toast.delete.success': "Releasen '<strong>{{title}}</strong>' togs bort.",
  /** Description for toast when release duplication failed */
  'toast.duplicate.error': "Det gick inte att duplicera '<strong>{{title}}</strong>': {{error}}",
  /** Description for toast when release is successfully duplicated */
  'toast.duplicate.success': "Releasen '<strong>{{title}}</strong>' duplicerades. <Link/>",
  /** Link text for toast link to the duplicated release */
  'toast.duplicate.success-link': 'Visa duplicerad release',
  /** Text for toast when release has been reverted immediately */
  'toast.immediate-revert.success': "Releasen '{{title}}' återställdes.",
  /** Text for toast when release failed to publish */
  'toast.publish.error': "Det gick inte att publicera '<strong>{{title}}</strong>': {{error}}",
  /** Text for toast when release has reverted release successfully staged */
  'toast.revert-stage.success': "Återställningsrelease för '{{title}}' skapades. <Link/>",
  /** Link text for toast link to the generated revert release */
  'toast.revert-stage.success-link': 'Visa återställningsrelease',
  /** Text for toast when release failed to revert */
  'toast.revert.error': 'Det gick inte att återställa releasen: {{error}}',
  /** Text for toast when release failed to schedule */
  'toast.schedule.error': "Det gick inte att schemalägga '<strong>{{title}}</strong>': {{error}}",
  /** Text for toast when release has been scheduled */
  'toast.schedule.success': "Releasen '<strong>{{title}}</strong>' schemalagdes.",
  /** Text for toast when release failed to unarchive */
  'toast.unarchive.error': "Det gick inte att avarkivera '<strong>{{title}}</strong>': {{error}}",
  /** Text for toast when release failed to unschedule */
  'toast.unschedule.error':
    "Det gick inte att avschemalägg '<strong>{{title}}</strong>': {{error}}",

  /** Text for tooltip when a release has been scheduled */
  'type-picker.tooltip.scheduled': 'Releasen är schemalagd, avschemalägg den för att ändra typ',

  /** Text action in unpublish dialog to cancel */
  'unpublish-dialog.action.cancel': 'Avbryt',
  /** Text action in unpublish dialog to unpublish */
  'unpublish-dialog.action.unpublish': 'Ja, avpublicera vid lansering',
  /** Description for unpublish dialog, explaining that all changes made to this document will be lost */
  'unpublish-dialog.description.lost-changes':
    'Alla ändringar som gjorts i den här dokumentversionen kommer att gå förlorade.',
  /** Description for the unpublish dialog, explaining that it will create a draft if no draft exists at time of release */
  'unpublish-dialog.description.to-draft':
    'Detta kommer att avpublicera dokumentet som en del av releasen <Label>{{title}}</Label> och skapa ett utkast om inget utkast finns vid tidpunkten för lansering.',
  /** Title for the dialog confirming the unpublish of a release */
  'unpublish-dialog.header':
    'Är du säker på att du vill avpublicera det här dokumentet vid lansering?',

  /** Text for when a document is unpublished */
  'unpublish.already-unpublished': 'Det här dokumentet är redan avpublicerat.',
  /** Tooltip label for when a document is unpublished */
  'unpublish.no-published-version': 'Det finns ingen publicerad version av det här dokumentet.',

  /** Description shown in unschedule relaease dialog */
  'unschedule-dialog.confirm-description':
    'Releasen kommer inte längre att publiceras på det schemalagda datumet.',
  /** Title for unschedule release dialog */
  'unschedule-dialog.confirm-title': 'Är du säker på att du vill avschemalägg releasen?',
})
