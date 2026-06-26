import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Action text for adding a document to release */
  'action.add-document': 'Bæta við skjali',
  /** Action text for archiving a release */
  'action.archive': 'Geyma útgáfu',
  /** Tooltip for when the archive release action is disabled due to release being scheduled  */
  'action.archive.tooltip': 'Afplanaðu þessa útgáfu til að geyma hana',
  /** Action text for showing the archived releases */
  'action.archived': 'Geymt',
  /** Menu item label for copying release ID */
  'action.copy-release-id.label': 'Afrita útgáfuauðkenni',
  /** Menu item label for copying release URL */
  'action.copy-release-link.label': 'Afrita útgáfuslóð',
  /** Menu item label for copying release title */
  'action.copy-release-title.label': 'Afrita útgáfuheiti',
  /** Tooltip for copy release actions button */
  'action.copy-release.label': 'Afrita',
  /** Action text for staging a new revert release */
  'action.create-revert-release': 'Búa til nýja útgáfu',
  /** Action text for deleting a release */
  'action.delete-release': 'Eyða útgáfu',
  /** Menu item label for showing scheduled drafts */
  'action.drafts': 'Tímasettar drög',
  /** Action text for duplicating a release */
  'action.duplicate-release': 'Tvítaka útgáfu',
  /** Action text for editing a release */
  'action.edit': 'Breyta útgáfu',
  /** Action text for reverting a release immediately without staging changes */
  'action.immediate-revert-release': 'Snúa við núna',
  /** Action text for opening a release */
  'action.open': 'Virkt',
  /** Action text for showing the paused scheduled drafts */
  'action.paused': 'Í bið',
  /** Action text for publishing all documents in a release (and the release itself) */
  'action.publish-all-documents': 'Keyra útgáfu',
  /** Menu item label for showing releases (multi-document releases) */
  'action.releases': 'Útgáfur',
  /** Action text for reverting a release */
  'action.revert': 'Snúa við útgáfu',
  /** Action message for when document is scheduled for unpublishing a document and you want to no longer unpublish it */
  'action.revert-unpublish-actions': 'Snúa við afbirtingu við útgáfu',
  /** Text for the review changes button in release tool */
  'action.review': 'Yfirfara breytingar',
  /** Action text for scheduling a release */
  'action.schedule': 'Tímasetja útgáfu...',
  /** Action text for scheduling unpublish of a draft document */
  'action.schedule-unpublish': 'Tímasetja afbirtingu',
  /** Tooltip text for when schedule unpublish is disabled because document is not published */
  'action.schedule-unpublish.disabled.not-published':
    'Skjalið verður að vera birt til að tímasetja afbirtingu',
  /** Label for unarchiving a release */
  'action.unarchive': 'Taka útgáfu úr geymslu',
  /** Action text for unpublishing a document in a release in the context menu */
  'action.unpublish': 'Taka úr birtingu',
  /** Action message for scheduling an unpublished of a document  */
  'action.unpublish-doc-actions': 'Taka úr birtingu við útgáfu',
  /** Action text for unscheduling a release */
  'action.unschedule': 'Hætta við tímasetningu útgáfu',

  /** Text for the summary button in release tool */
  'actions.summary': 'Samantekt',

  /* The text for the activity event when a document is added to a release */
  'activity.event.add-document': 'Bætti við skjalaútgáfu',
  /* The text for the activity event when the release is archived */
  'activity.event.archive': 'Safnvistað útgáfuna <strong>{{releaseTitle}}</strong>',
  /* The text for the activity event when the release is created */
  'activity.event.create':
    'Stofnaði útgáfuna <strong>{{releaseTitle}}</strong> <ScheduleTarget>með markmiðstíma </ScheduleTarget>',
  /* The text for the activity event when a document is removed from a release */
  'activity.event.discard-document': 'Fleygði skjalaútgáfu',
  'activity.event.edit': 'Stillti útgáfutíma á <ScheduleTarget></ScheduleTarget>',
  /**The text to display in the changes when the release type changes to asap */
  'activity.event.edit-time-asap': 'Eins fljótt og auðið er',
  /**The text to display in the changes when the release type changes to undecided */
  'activity.event.edit-time-undecided': 'Óákveðið',
  /* The text for the activity event when the release is published */
  'activity.event.publish': 'Birti útgáfuna <strong>{{releaseTitle}}</strong>',
  /* The text for the activity event when the release is scheduled */
  'activity.event.schedule': 'Merkt sem tímasett',
  /** The text for the activity event when the release is unarchived */
  'activity.event.unarchive': 'Tók útgáfuna <strong>{{releaseTitle}}</strong> úr safnvistun',
  /** The text for the activity event when the release is unscheduled */
  'activity.event.unschedule': 'Merkt sem ótímasett',
  /** The loading text for when releases are loading */
  'activity.panel.error': 'Villa kom upp við að sækja virkni útgáfunnar',
  /** The loading text for when releases are loading */
  'activity.panel.loading': 'Hleður virkni útgáfunnar',
  /** The title for the activity panel shown in the releases detail screen */
  'activity.panel.title': 'Virkni',

  /** Label for the button to proceed with archiving a release */
  'archive-dialog.confirm-archive-button': 'Já, safnvista útgáfu',
  /** Description for the dialog confirming the archive of a release with one document */
  'archive-dialog.confirm-archive-description_one': 'Þetta mun safnvista 1 skjalaútgáfu.',
  /** Description for the dialog confirming the archive of a release with more than one document */
  'archive-dialog.confirm-archive-description_other':
    'Þetta mun safnvista {{count}} skjalaútgáfur.',
  /** Header for the dialog confirming the archive of a release */
  'archive-dialog.confirm-archive-header': 'Ertu viss um að þú viljir safnvista þessa útgáfu?',
  /** Title for the dialog confirming the archive of a release */
  'archive-dialog.confirm-archive-title':
    "Ertu viss um að þú viljir safnvista útgáfuna <strong>'{{title}}'</strong>?",

  /** Description for information card on a published or archived release to description retention effects */
  'archive-info.description':
    'Hún verður tiltæk í {{retentionDays}} daga og verður síðan sjálfkrafa fjarlægð þann {{removalDate}}. <Link>Lærðu um varðveislutíma</Link>.',
  /** Title for information card on a archived release */
  'archive-info.title': 'Þessi útgáfa er safnvistuð',

  /** Banner text showing count of active scheduled drafts requiring confirmation with one draft */
  'banner.confirm-active-scheduled-drafts_one':
    'Það er {{count}} Scheduled Draft sem þarfnast staðfestingar á tímasetningunni',
  /** Banner text showing count of active scheduled drafts requiring confirmation with multiple drafts */
  'banner.confirm-active-scheduled-drafts_other':
    'Það eru {{count}} Scheduled Drafts sem þarfnast staðfestingar á tímasetningunni',
  /** Button text for confirming scheduling of active drafts */
  'banner.confirm-active-scheduled-drafts.button': 'Halda áfram með tímasetningu',
  /** Button text when confirming schedules from paused mode */
  'banner.confirm-active-scheduled-drafts.button-paused': 'Halda áfram með allar tímasetningar',
  /** Banner text shown when drafts mode is disabled but there are still scheduled drafts */
  'banner.drafts-mode-disabled':
    'Drafts-stilling hefur verið óvirk en það eru enn scheduled drafts sem á að birta.',
  /** Banner text shown when navigating to a release that does not exist */
  'banner.release-not-found': 'Þessa útgáfu var ekki hægt að finna',
  /** Tooltip for the dismiss button in the release not found banner */
  'banner.release-not-found.dismiss': 'Hunsa',
  /** Banner text shown when scheduled drafts feature is disabled but there are still scheduled drafts */
  'banner.scheduled-drafts-disabled':
    'Scheduled drafts hefur verið gert óvirkt en það eru enn scheduled drafts sem á að birta.',

  /** Title for changes to published documents */
  'changes-published-docs.title': 'Breytingar á birtum skjölum',

  /** Dialog confirm button text for confirming all scheduled drafts */
  'confirm-active-scheduled-drafts-dialog.confirm-button': 'Staðfesta tímasetningar',
  /** Dialog description for confirming active scheduled drafts */
  'confirm-active-scheduled-drafts-dialog.description':
    'Tímasetja allar hlédregnar Scheduled Drafts á fyrirhugaðar birtingardagsetningar',
  /** Dialog warning when some scheduled drafts have past dates */
  'confirm-active-scheduled-drafts-dialog.past-dates-warning':
    'Sumar þessara Scheduled Drafts eru tímasettar á liðnar dagsetningar. Staðfesting tímasetninganna mun birta þær útgáfur skjalanna strax.',
  /** Dialog title for confirming active scheduled drafts */
  'confirm-active-scheduled-drafts-dialog.title': 'Halda áfram með Scheduled Drafts',

  /** Suffix for when a release is a copy of another release */
  'copy-suffix': 'Afrit',

  /** Confirm button text for overriding existing draft */
  'copy-to-draft-dialog.confirm-button': 'Já, skrifa yfir Draft',
  /** Description for dialog when copying version to draft that already exists */
  'copy-to-draft-dialog.description':
    'Draft-útgáfa af þessu skjali er þegar til. Afritaðu núverandi útgáfu yfir í draft og skrifaðu yfir núverandi draft-útgáfu.',
  /** Title for dialog when copying version to draft that already exists */
  'copy-to-draft-dialog.title': 'Draft-útgáfa er þegar til',

  /** Text for when a release / document was created */
  created: 'Búið til <RelativeTime/>',

  /** Activity inspector button text */
  'dashboard.details.activity': 'Virkni',
  /** Text for the releases detail screen in the pin release button. */
  'dashboard.details.pin-release': 'Festa útgáfu við studio',
  /** Text for the releases detail screen when a release was published ASAP */
  'dashboard.details.published-asap': 'Birt',
  /** Text for the releases detail screen when a release was published from scheduling */
  'dashboard.details.published-on': 'Birt þann {{date}}',
  /** Text for the releases detail screen in the unpin release button. */
  'dashboard.details.unpin-release': 'Losa útgáfu frá studio',

  /** Label for the button to proceed deleting a release */
  'delete-dialog.confirm-delete-button': 'Já, eyða útgáfu',
  /** Description for the dialog confirming the deleting of a release with one document */
  'delete-dialog.confirm-delete-description_one': 'Þetta mun eyða 1 skjalaútgáfu.',
  /** Description for the dialog confirming the deleting of a release with more than one document */
  'delete-dialog.confirm-delete-description_other': 'Þetta mun eyða {{count}} skjalaútgáfum.',
  /** Header for deleting a release dialog */
  'delete-dialog.confirm-delete.header': 'Ertu viss um að þú viljir eyða þessari útgáfu?',

  /** Label when a release has been deleted by a different user */
  'deleted-release': "Útgáfan '<strong>{{title}}</strong>' hefur verið eytt",

  /** Text for when there's no changes in a release diff */
  'diff.list-empty': 'Breytingalisti er tómur, sjá skjal',
  /** Text for when there's no changes in a release diff */
  'diff.no-changes': 'Engar breytingar',

  /** Description for discarding a draft of a document dialog */
  'discard-version-dialog.description-draft':
    'Þetta mun fjarlægja varanlega allar breytingar sem gerðar voru á þessu skjali. Ekki er hægt að afturkalla þessa aðgerð.',
  /** Description for discarding a version of a document dialog */
  'discard-version-dialog.description-release':
    "Þetta mun fjarlægja varanlega allar breytingar sem gerðar voru á þessu skjali innan '<strong>{{releaseTitle}}</strong>' útgáfunnar. Ekki er hægt að afturkalla þessa aðgerð.",
  /** Title for dialog for discarding a draft of a document */
  'discard-version-dialog.header-draft': 'Fleygja drögum?',
  /** Header for discarding a version from a release of a document dialog */
  'discard-version-dialog.header-release':
    "Fjarlægja skjal úr '<strong>{{releaseTitle}}</strong>' útgáfunni?",
  /** Title for dialog for discarding a draft of a document */
  'discard-version-dialog.title-draft': 'Fleygja drögum',
  /** Title for dialog for discarding a version of a document */
  'discard-version-dialog.title-release': 'Fjarlægja úr útgáfu',

  /** Label for when a document in a release has a single validation warning */
  'document-validation.error_one': '{{count}} villulegt gildi',
  /** Label for when a document in a release has multiple validation warnings */
  'document-validation.error_other': '{{count}} villulegar gildi',

  /** Label for the button to proceed with duplicating a release */
  'duplicate-dialog.confirm-duplicate-button': 'Já, tvítaka útgáfu',
  /** Description for the dialog confirming the duplicate of a release with one document */
  'duplicate-dialog.confirm-duplicate-description_one':
    'Þetta mun tvítaka útgáfuna og 1 skjalaútgáfuna.',
  /** Description for the dialog confirming the duplicate of a release with more than one document */
  'duplicate-dialog.confirm-duplicate-description_other':
    'Þetta mun tvítaka útgáfuna og {{count}} skjalaútgáfurnar.',
  /** Header for the dialog confirming the duplicate of a release */
  'duplicate-dialog.confirm-duplicate-header': 'Ertu viss um að þú viljir tvítaka þessa útgáfu?',

  /** Title text displayed for technical error details */
  'error-details-title': 'Villuupplýsingar',

  /** Title text when error during release update */
  'failed-edit-title': 'Mistókst að vista breytingar',

  /** Title text displayed for releases that failed to publish  */
  'failed-publish-title': 'Mistókst að birta',

  /** Title text displayed for releases that failed to schedule  */
  'failed-schedule-title': 'Mistókst að tímasetja',

  /** Filter tab label for all documents */
  'filter-tab.all': 'Allt',
  /** Filter tab label for documents with validation errors */
  'filter-tab.errors': 'Villur',

  /**The text that will be shown in the footer to indicate the time the release was archived */
  'footer.status.archived': 'Safnvistað',
  /**The text that will be shown in the footer to indicate the time the release was created */
  'footer.status.created': 'Búið til',
  /**The text that will be shown in the footer to indicate the time the release was created */
  'footer.status.edited': 'Breytt',
  /**The text that will be shown in the footer to indicate the time the release was published */
  'footer.status.published': 'Birt',
  /**The text that will be shown in the footer to indicate the time the release was unarchived */
  'footer.status.unarchived': 'Tekið úr safni',

  /** Label text for the loading state whilst release is being loaded */
  'loading-release': 'Hleður útgáfu',

  /** Text for when documents of a release are loading */
  'loading-release-documents': 'Hleður skjölum',
  /** Description text for when loading documents on a release failed */
  'loading-release-documents.error.description':
    'Við getum ekki hlaðið skjölunum fyrir þessa útgáfu. Vinsamlegast reyndu aftur síðar.',
  /** Title text for when loading documents on a release failed */
  'loading-release-documents.error.title': 'Eitthvað fór úrskeiðis',

  /** Label for title of actions for "when releasing" */
  'menu.group.when-releasing': 'Við útgáfu',
  /** Label for the release menu */
  'menu.label': 'Útgáfuvalmynd',
  /** Tooltip for the release menu */
  'menu.tooltip': 'Aðgerðir',

  /** Text for when no archived releases are found */
  'no-archived-release': 'Engar útgáfur í safni',

  /** Tooltip text when there are no paused scheduled drafts */
  'no-paused-release': 'Engar hlédregin tímasett drög',

  /** Text for when no releases are found */
  'no-releases': 'Engar útgáfur',

  /** Text for when no scheduled drafts are found */
  'no-scheduled-drafts': 'Engin tímasett drög',

  /** Text for the button name for the release tool */
  'overview.action.documentation': 'Skjölun',
  /** Tooltip for the calendar button in the release overview */
  'overview.calendar.tooltip': 'Skoða dagatal',
  /** Description for the release tool */
  'overview.description':
    'Útgáfur eru safn skjalabreytinga sem hægt er að stjórna, tímasetja og afturkalla saman.',
  /** Text for the placeholder in the search release input  */
  'overview.search-releases-placeholder': 'Leita að útgáfum',
  /** Title for the release tool */
  'overview.title': 'Útgáfur',

  /** Tooltip text for releases that have passed their intended publish date */
  'passed-intended-publish-date': 'Þessi útgáfa hefur farið fram yfir fyrirhugaðan birtingardag',

  /** Tooltip text for scheduled drafts that have passed their intended publish date */
  'passed-intended-publish-date-draft': 'Þessi drög hafa farið fram yfir fyrirhugaðan birtingardag',

  /** Description for when a user doesn't have publish or schedule releases */
  'permission-missing-description':
    'Hlutverk þitt takmarkar hvað þú getur séð í þessari útgáfu. Þú getur hvorki birt né tímasett þessa útgáfu.',

  /** Text for when a user doesn't have publish or schedule releases */
  'permission-missing-title': 'Takmarkaður aðgangur',

  /** Tooltip label when the user doesn't have permission to archive release */
  'permissions.error.archive': 'Þú hefur ekki leyfi til að setja þessa útgáfu í safn',
  /** Tooltip label when the user doesn't have permission to delete release */
  'permissions.error.delete': 'Þú hefur ekki leyfi til að eyða þessari útgáfu',
  /** Tooltip label when the user doesn't have permission for discarding a version */
  'permissions.error.discard-version': 'Þú hefur ekki leyfi til að fleygja þessari útgáfu',
  /** Tooltip label when the user doesn't have permission to duplicate release */
  'permissions.error.duplicate': 'Þú hefur ekki leyfi til að afrita þessa útgáfu',
  /** Tooltip label when the user doesn't have permission to unarchive release */
  'permissions.error.unarchive': 'Þú hefur ekki leyfi til að taka þessa útgáfu úr safni',
  /** Tooltip label when the user doesn't have permission for unpublishing a document */
  'permissions.error.unpublish': 'Þú hefur ekki leyfi til að taka þetta skjal úr birtingu',

  /** Tooltip text for when one user is editing a document in a release */
  'presence.tooltip.one':
    '{{displayName}} er að breyta þessu skjali í útgáfunni „{{releaseTitle}}" núna',

  /** Tooltip text for publish release action when there are no documents */
  'publish-action.validation.no-documents': 'Engin skjöl eru til að birta',

  /** Description for the dialog confirming the publish of a release with one document */
  'publish-dialog.confirm-publish-description_one':
    "Útgáfan '<strong>{{title}}</strong>' og skjalið hennar verða birt.",
  /** Description for the dialog confirming the publish of a release with multiple documents */
  'publish-dialog.confirm-publish-description_other':
    "Útgáfan '<strong>{{title}}</strong>' og {{releaseDocumentsLength}} skjöl hennar verða birt.",
  /** Title for the dialog confirming the publish of a release */
  'publish-dialog.confirm-publish.title':
    'Ertu viss um að þú viljir birta útgáfuna og allar skjalaútgáfur?',
  /** Label for when documents in release have validation errors */
  'publish-dialog.validation.error': 'Sum skjöl hafa villur í staðfestingu',
  /** Label for when documents are being validated */
  'publish-dialog.validation.loading': 'Staðfesti skjöl...',
  /** Label for the button when the user doesn't have permissions to publish a release */
  'publish-dialog.validation.no-permission': 'Þú hefur ekki leyfi til að birta',

  /** Title for information card on a published release */
  'publish-info.title': 'Þessi útgáfa er birt.',

  /** Placeholder title for a release with no title */
  'release-placeholder.title': 'Án titils',

  /** Description for the dialog confirming the revert of a release with multiple documents */
  'revert-dialog.confirm-revert-description_one':
    'Þetta mun snúa við {{releaseDocumentsLength}} skjalaútgáfu.',
  /** Description for the dialog confirming the revert of a release with multiple documents */
  'revert-dialog.confirm-revert-description_other':
    'Þetta mun snúa við {{releaseDocumentsLength}} skjalaútgáfum.',
  /** Checkbox label to confirm whether to create a staged release for revert or immediately revert */
  'revert-dialog.confirm-revert.stage-revert-checkbox-label': 'Snúa við útgáfunni strax',
  /** Title for the dialog confirming the revert of a release */
  'revert-dialog.confirm-revert.title': "Ertu viss um að þú viljir snúa við útgáfunni '{{title}}'?",
  /** Warning card text for when immediately revert a release with history */
  'revert-dialog.confirm-revert.warning-card':
    'Breytingar voru gerðar á skjölum í þessari útgáfu eftir að þau voru birt. Ef snúið er við mun það skrifa yfir þessar breytingar.',

  /** Description of a reverted release */
  'revert-release.description': 'Snúa við breytingum á skjalaútgáfum í „{{title}}".',
  /** Title of a reverted release */
  'revert-release.title': 'Snýr við „{{title}}"',

  /** Description for the review changes button in release tool */
  'review.description': 'Bættu skjölum við þessa útgáfu til að fara yfir breytingar',
  /** Text for when a document is edited */
  'review.edited': 'Breytt <RelativeTime/>',

  /** Schedule release button tooltip when there are no documents to schedule */
  'schedule-action.validation.no-documents': 'Engin skjöl eru til að tímasetja',

  /** Schedule release button tooltip when the release is already scheduled */
  'schedule-button-tooltip.already-scheduled': 'Þessi útgáfa er þegar tímasett',
  /** Schedule release button tooltip when there are validation errors */
  'schedule-button-tooltip.validation.error': 'Sum skjöl hafa villur við villuleit',
  /** Schedule release button tooltip when validation is loading */
  'schedule-button-tooltip.validation.loading': 'Villuleitar skjöl...',
  /** Schedule release button tooltip when user has no permissions to schedule */
  'schedule-button-tooltip.validation.no-permission': 'Þú hefur ekki leyfi til að tímasetja',

  /** Title of unschedule release dialog */
  'schedule-button.tooltip': 'Ertu viss um að þú viljir hætta við tímasetningu útgáfunnar?',

  /** Description for the confirm button for scheduling a release */
  'schedule-dialog.confirm-button': 'Já, tímasetja',
  /** Description shown in unschedule relaease dialog */
  'schedule-dialog.confirm-description_one':
    "Útgáfan '<strong>{{title}}</strong>' og skjalið hennar verður birt á völdum degi.",
  /** Description for the dialog confirming the publish of a release with multiple documents */
  'schedule-dialog.confirm-description_other':
    'Útgáfan <strong>{{title}}</strong> og {{count}} skjalaútgáfur hennar verða tímasettar.',
  /** Title for unschedule release dialog */
  'schedule-dialog.confirm-title': 'Tímasetja útgáfuna',
  /** Description for warning that the published schedule time is in the past */
  'schedule-dialog.publish-date-in-past-warning': 'Tímasettu fyrir framtíðartíma og -dag.',
  /** Label for date picker when scheduling a release */
  'schedule-dialog.select-publish-date-label': 'Tímasetja þann',

  /** Confirm button text for the schedule unpublish dialog */
  'schedule-unpublish-dialog.confirm': 'Tímasetja birtingarlok',
  /** Description for the schedule unpublish dialog */
  'schedule-unpublish-dialog.description': 'Veldu hvenær þetta skjal á að taka úr birtingu.',
  /** Header for the schedule unpublish dialog */
  'schedule-unpublish-dialog.header': 'Tímasetja drög fyrir birtingarlok',

  /** Placeholder for search of documents in a release */
  'search-documents-placeholder': 'Leita í skjölum',

  /** Text for when the release has no errors found */
  'summary.all-documents-errors-found': 'Öll skjöl villuleit, vandamál fundust',
  /** Text for when the release has validated all documents */
  'summary.all-documents-validated': 'Öll skjöl villuleit, engin vandamál fundust',
  /** Text for when the release was created */
  'summary.created': 'Búið til <RelativeTime/>',
  /** Text for when the release is composed of one document */
  'summary.document-count_one': '{{count}} skjal',
  /** Text for when the release is composed of multiple documents */
  'summary.document-count_other': '{{count}} skjöl',
  /** Text for when the release has some errors found */
  'summary.errors-found':
    'Til að birta eða tímasetja útgáfuna, vinsamlegast leysið vandamálin sem fundust í skjölunum',
  /** Text for when the release has no documents */
  'summary.no-documents': 'Engin skjöl',
  /** Description for the empty state when a cardinality-one release has no documents */
  'summary.no-documents-cardinality-one.description':
    'Þessi tímasetta drög innihalda ekki skjal. Það kann að hafa verið fjarlægt.',
  /** Title for the empty state when a cardinality-one release has no documents */
  'summary.no-documents-cardinality-one.title': 'Ekkert skjal í þessari útgáfu',
  /** Text for when the release has not published */
  'summary.not-published': 'Ekki birt',
  /** Text for when the release was published */
  'summary.published': 'Birt <RelativeTime/>',
  /** Text for when the release has validated documents */
  'summary.validated-documents': '{{validatedCount}} af {{totalCount}} skjölum staðfest',
  /** Text for validation loading indicator */
  'summary.validating-documents': 'Staðfesti skjöl: {{validatedCount}} af {{totalCount}}',

  /** add action type that will be shown in the table*/
  'table-body.action.add': 'Bæta við',
  /** Change action type that will be shown in the table*/
  'table-body.action.change': 'Breyta',
  /** Change action type that will be shown in the table*/
  'table-body.action.unpublish': 'Taka úr birtingu',

  /** Header for the document table in the release tool - action */
  'table-header.action': 'Aðgerð',
  /** Header for the document table in the release tool - Archived */
  'table-header.archivedAt': 'Safnvistað',
  /** Header for the document table in the release tool - contributors */
  'table-header.contributors': 'Þátttakendur',
  /** Header for the document table in the release tool - created by */
  'table-header.created-by': 'Búið til af',
  /** Header for the document table in the release tool - document preview */
  'table-header.document': 'Skjal',
  /** Header for the document table in the release tool - title */
  'table-header.documents': 'Skjöl',
  /** Header for the document table in the release tool - edited */
  'table-header.edited': 'Breytt',
  /** Header for the paused scheduled drafts table - intended for */
  'table-header.intended-for': 'Ætlað fyrir',
  /** Header for the document table in the release tool - Published */
  'table-header.published-at': 'Birt',
  /** Header for the document table in the release tool - Published */
  'table-header.publishedAt': 'Birt',
  /** Header for the scheduled drafts document table in the release tool - published at */
  'table-header.scheduled-draft.published-at': 'Birt þann',
  /** Header for the scheduled drafts document table in the release tool - scheduled for */
  'table-header.scheduled-for': 'Áætlað fyrir',
  /** Header for the document table in the release tool - time */
  'table-header.time': 'Tími',
  /** Header for the  document table in the release tool - release title */
  'table-header.title': 'Release',
  /** Header for the document table in the release tool - type */
  'table-header.type': 'Tegund',
  /** Header for the document table in the release tool - when */
  'table-header.when': 'Hvenær',

  /** Text for the release time label for scheduled releases  which has not been scheduled yet*/
  'time.estimated': 'Áætlað',
  /** Text for the release time label for scheduled releases  which has been scheduled*/
  'time.scheduled': 'Áætlað',

  /** Text for toast when release failed to archive */
  'toast.archive.error': "Tókst ekki að safnvista '<strong>{{title}}</strong>': {{error}}",
  /** Toast error message when bulk scheduling of active drafts fails */
  'toast.confirm-active-scheduled-drafts.error': 'Tókst ekki að áætla drög: {{error}}',
  /** Toast message after copying release ID */
  'toast.copy-release-id.success': 'Auðkenni útgáfu afritað á klippiborð',
  /** Toast message after copying release link */
  'toast.copy-release-link.success': 'Tengill útgáfu afritaður á klippiborð',
  /** Toast message after copying release title */
  'toast.copy-release-title.success': 'Titill útgáfu afritaður á klippiborð',
  /** Description for toast when creating new version of document in release failed */
  'toast.create-version.error': 'Mistókst að bæta skjali við útgáfu: {{error}}',
  /** Description for toast when release deletion failed */
  'toast.delete.error': "Mistókst að eyða '<strong>{{title}}</strong>': {{error}}",
  /** Description for toast when release is successfully deleted */
  'toast.delete.success': "Útgáfan '<strong>{{title}}</strong>' var eytt",
  /** Description for toast when release duplication failed */
  'toast.duplicate.error': "Mistókst að tvítaka '<strong>{{title}}</strong>': {{error}}",
  /** Description for toast when release is successfully duplicated */
  'toast.duplicate.success': "Útgáfan '<strong>{{title}}</strong>' var tvítekin. <Link/>",
  /** Link text for toast link to the duplicated release */
  'toast.duplicate.success-link': 'Skoða tvítekna útgáfu',
  /** Text for toast when release has been reverted immediately */
  'toast.immediate-revert.success': "Útgáfan '{{title}}' var endurreist",
  /** Text for toast when release failed to publish */
  'toast.publish.error': "Mistókst að birta '<strong>{{title}}</strong>': {{error}}",
  /** Text for toast when release has reverted release successfully staged */
  'toast.revert-stage.success': "Endurreisnarútgáfa fyrir '{{title}}' var búin til. <Link/>",
  /** Link text for toast link to the generated revert release */
  'toast.revert-stage.success-link': 'Skoða endurreisnarútgáfu',
  /** Text for toast when release failed to revert */
  'toast.revert.error': 'Mistókst að endurreisa útgáfu: {{error}}',
  /** Text for toast when release failed to schedule */
  'toast.schedule.error': "Mistókst að tímasetja '<strong>{{title}}</strong>': {{error}}",
  /** Text for toast when release has been scheduled */
  'toast.schedule.success': "Útgáfan '<strong>{{title}}</strong>' var tímasett.",
  /** Text for toast when release failed to unarchive */
  'toast.unarchive.error': "Mistókst að taka '<strong>{{title}}</strong>' úr safni: {{error}}",
  /** Text for toast when release failed to unschedule */
  'toast.unschedule.error': "Mistókst að afbóka '<strong>{{title}}</strong>': {{error}}",

  /** Text for tooltip when a release has been scheduled */
  'type-picker.tooltip.scheduled': 'Útgáfan er tímasett, afbókaðu hana til að breyta tegund',

  /** Text action in unpublish dialog to cancel */
  'unpublish-dialog.action.cancel': 'Hætta við',
  /** Text action in unpublish dialog to unpublish */
  'unpublish-dialog.action.unpublish': 'Já, taka úr birtingu við útgáfu',
  /** Description for unpublish dialog, explaining that all changes made to this document will be lost */
  'unpublish-dialog.description.lost-changes':
    'Allar breytingar sem gerðar voru á þessari útgáfu skjalsins munu glatast.',
  /** Description for the unpublish dialog, explaining that it will create a draft if no draft exists at time of release */
  'unpublish-dialog.description.to-draft':
    'Þetta mun taka skjalið úr birtingu sem hluta af <Label>{{title}}</Label> útgáfunni, og búa til drög ef engin drög eru til á útgáfutímanum.',
  /** Title for the dialog confirming the unpublish of a release */
  'unpublish-dialog.header': 'Ertu viss um að þú viljir taka þetta skjal úr birtingu við útgáfu?',

  /** Text for when a document is unpublished */
  'unpublish.already-unpublished': 'Þetta skjal er þegar tekið úr birtingu.',
  /** Tooltip label for when a document is unpublished */
  'unpublish.no-published-version': 'Það er engin birt útgáfa af þessu skjali.',

  /** Description shown in unschedule relaease dialog */
  'unschedule-dialog.confirm-description': 'Útgáfan verður ekki lengur birt á áætluðum degi',
  /** Title for unschedule release dialog */
  'unschedule-dialog.confirm-title': 'Ertu viss um að þú viljir afbóka útgáfuna?',
})
