import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Action text for adding a document to release */
  'action.add-document': 'Дадаць дакумент',
  /** Action text for archiving a release */
  'action.archive': 'Архіваваць release',
  /** Tooltip for when the archive release action is disabled due to release being scheduled  */
  'action.archive.tooltip': 'Адмяніце планаванне гэтага release, каб архіваваць яго',
  /** Action text for showing the archived releases */
  'action.archived': 'Архіваваныя',
  /** Menu item label for copying release ID */
  'action.copy-release-id.label': 'Скапіраваць ID release',
  /** Menu item label for copying release URL */
  'action.copy-release-link.label': 'Скапіраваць URL release',
  /** Menu item label for copying release title */
  'action.copy-release-title.label': 'Скапіраваць назву release',
  /** Tooltip for copy release actions button */
  'action.copy-release.label': 'Скапіраваць',
  /** Action text for staging a new revert release */
  'action.create-revert-release': 'Стварыць новы release',
  /** Action text for deleting a release */
  'action.delete-release': 'Выдаліць release',
  /** Menu item label for showing scheduled drafts */
  'action.drafts': 'Запланаваныя чарнавікі',
  /** Action text for duplicating a release */
  'action.duplicate-release': 'Дубліраваць release',
  /** Action text for editing a release */
  'action.edit': 'Рэдагаваць release',
  /** Action text for reverting a release immediately without staging changes */
  'action.immediate-revert-release': 'Адкаціць зараз',
  /** Action text for opening a release */
  'action.open': 'Актыўны',
  /** Action text for showing the paused scheduled drafts */
  'action.paused': 'Прыпынены',
  /** Action text for publishing all documents in a release (and the release itself) */
  'action.publish-all-documents': 'Запусціць release',
  /** Menu item label for showing releases (multi-document releases) */
  'action.releases': 'Releases',
  /** Action text for reverting a release */
  'action.revert': 'Адкаціць release',
  /** Action message for when document is scheduled for unpublishing a document and you want to no longer unpublish it */
  'action.revert-unpublish-actions': 'Адмяніць зняцце з публікацыі пры выпуску',
  /** Text for the review changes button in release tool */
  'action.review': 'Праглядзець змены',
  /** Action text for scheduling a release */
  'action.schedule': 'Запланаваць release...',
  /** Action text for scheduling unpublish of a draft document */
  'action.schedule-unpublish': 'Запланаваць зняцце з публікацыі',
  /** Tooltip text for when schedule unpublish is disabled because document is not published */
  'action.schedule-unpublish.disabled.not-published':
    'Дакумент павінен быць апублікаваны, каб запланаваць зняцце з публікацыі',
  /** Label for unarchiving a release */
  'action.unarchive': 'Разархіваваць release',
  /** Action text for unpublishing a document in a release in the context menu */
  'action.unpublish': 'Зняць з публікацыі',
  /** Action message for scheduling an unpublished of a document  */
  'action.unpublish-doc-actions': 'Зняць з публікацыі пры выпуску',
  /** Action text for unscheduling a release */
  'action.unschedule': 'Адмяніць планаванне выпуску',

  /** Text for the summary button in release tool */
  'actions.summary': 'Зводка',

  /* The text for the activity event when a document is added to a release */
  'activity.event.add-document': 'Дадана версія дакумента',
  /* The text for the activity event when the release is archived */
  'activity.event.archive': 'Выпуск <strong>{{releaseTitle}}</strong> заархіваваны',
  /* The text for the activity event when the release is created */
  'activity.event.create':
    'Створаны выпуск <strong>{{releaseTitle}}</strong> <ScheduleTarget>з мэтай </ScheduleTarget>',
  /* The text for the activity event when a document is removed from a release */
  'activity.event.discard-document': 'Версія дакумента адхілена',
  'activity.event.edit': 'Час выпуску ўсталяваны на <ScheduleTarget></ScheduleTarget>',
  /**The text to display in the changes when the release type changes to asap */
  'activity.event.edit-time-asap': 'Як мага хутчэй',
  /**The text to display in the changes when the release type changes to undecided */
  'activity.event.edit-time-undecided': 'Не вызначана',
  /* The text for the activity event when the release is published */
  'activity.event.publish': 'Выпуск <strong>{{releaseTitle}}</strong> апублікаваны',
  /* The text for the activity event when the release is scheduled */
  'activity.event.schedule': 'Пазначана як запланаванае',
  /** The text for the activity event when the release is unarchived */
  'activity.event.unarchive': 'Выпуск <strong>{{releaseTitle}}</strong> разархіваваны',
  /** The text for the activity event when the release is unscheduled */
  'activity.event.unschedule': 'Пазначана як незапланаванае',
  /** The loading text for when releases are loading */
  'activity.panel.error': 'Пры атрыманні актыўнасці выпуску адбылася памылка',
  /** The loading text for when releases are loading */
  'activity.panel.loading': 'Загрузка актыўнасці выпуску',
  /** The title for the activity panel shown in the releases detail screen */
  'activity.panel.title': 'Актыўнасць',

  /** Label for the button to proceed with archiving a release */
  'archive-dialog.confirm-archive-button': 'Так, заархіваваць выпуск',
  /** Description for the dialog confirming the archive of a release with one document */
  'archive-dialog.confirm-archive-description_one': 'Гэта заархівуе 1 версію дакумента.',
  /** Header for the dialog confirming the archive of a release */
  'archive-dialog.confirm-archive-header': 'Вы ўпэўнены, што хочаце заархіваваць гэты выпуск?',
  /** Title for the dialog confirming the archive of a release */
  'archive-dialog.confirm-archive-title':
    "Вы ўпэўнены, што хочаце заархіваваць выпуск <strong>'{{title}}'</strong>?",

  /** Description for information card on a published or archived release to description retention effects */
  'archive-info.description':
    'Ён будзе даступны на працягу {{retentionDays}} дзён, а потым аўтаматычна выдалены {{removalDate}}. <Link>Даведацца пра захоўванне</Link>.',
  /** Title for information card on a archived release */
  'archive-info.title': 'Гэты выпуск заархіваваны',

  /** Banner text showing count of active scheduled drafts requiring confirmation with one draft */
  'banner.confirm-active-scheduled-drafts_one':
    'Ёсць {{count}} Запланаваны чарнавік, які патрабуе пацверджання планавання',
  /** Button text for confirming scheduling of active drafts */
  'banner.confirm-active-scheduled-drafts.button': 'Аднавіць планаванне',
  /** Button text when confirming schedules from paused mode */
  'banner.confirm-active-scheduled-drafts.button-paused': 'Аднавіць усе раскладу',
  /** Banner text shown when drafts mode is disabled but there are still scheduled drafts */
  'banner.drafts-mode-disabled':
    'Рэжым чарнавікоў быў адключаны, але яшчэ ёсць запланаваныя чарнавікі для публікацыі.',
  /** Banner text shown when navigating to a release that does not exist */
  'banner.release-not-found': 'Гэты рэліз не знойдзены',
  /** Tooltip for the dismiss button in the release not found banner */
  'banner.release-not-found.dismiss': 'Закрыць',
  /** Banner text shown when scheduled drafts feature is disabled but there are still scheduled drafts */
  'banner.scheduled-drafts-disabled':
    'Запланаваныя чарнавікі былі адключаны, але яшчэ ёсць запланаваныя чарнавікі для публікацыі.',

  /** Title for changes to published documents */
  'changes-published-docs.title': 'Змены ў апублікаваных дакументах',

  /** Dialog confirm button text for confirming all scheduled drafts */
  'confirm-active-scheduled-drafts-dialog.confirm-button': 'Пацвердзіць раскладу',
  /** Dialog description for confirming active scheduled drafts */
  'confirm-active-scheduled-drafts-dialog.description':
    'Запланаваць усе прыпыненыя Scheduled Drafts на іх меркаваныя даты публікацыі',
  /** Dialog warning when some scheduled drafts have past dates */
  'confirm-active-scheduled-drafts-dialog.past-dates-warning':
    'Некаторыя з гэтых Scheduled Drafts запланаваны на мінулыя даты. Пацверджанне раскладу неадкладна апублікуе гэтыя версіі дакументаў.',
  /** Dialog title for confirming active scheduled drafts */
  'confirm-active-scheduled-drafts-dialog.title': 'Аднавіць Scheduled Drafts',

  /** Suffix for when a release is a copy of another release */
  'copy-suffix': 'Копія',

  /** Confirm button text for overriding existing draft */
  'copy-to-draft-dialog.confirm-button': 'Так, замяніць чарнавік',
  /** Description for dialog when copying version to draft that already exists */
  'copy-to-draft-dialog.description':
    'Чарнавая версія гэтага дакумента ўжо існуе. Скапіруйце бягучую версію ў чарнавік і замяніце існуючую чарнавую версію.',
  /** Title for dialog when copying version to draft that already exists */
  'copy-to-draft-dialog.title': 'Чарнавая версія ўжо існуе',

  /** Text for when a release / document was created */
  created: 'Створана <RelativeTime/>',

  /** Activity inspector button text */
  'dashboard.details.activity': 'Актыўнасць',
  /** Text for the releases detail screen in the pin release button. */
  'dashboard.details.pin-release': 'Замацаваць рэліз у студыі',
  /** Text for the releases detail screen when a release was published ASAP */
  'dashboard.details.published-asap': 'Апублікавана',
  /** Text for the releases detail screen when a release was published from scheduling */
  'dashboard.details.published-on': 'Апублікавана {{date}}',
  /** Text for the releases detail screen in the unpin release button. */
  'dashboard.details.unpin-release': 'Адмацаваць рэліз ад студыі',

  /** Label for the button to proceed deleting a release */
  'delete-dialog.confirm-delete-button': 'Так, выдаліць рэліз',
  /** Description for the dialog confirming the deleting of a release with one document */
  'delete-dialog.confirm-delete-description_one': 'Гэта выдаліць 1 версію дакумента.',
  /** Header for deleting a release dialog */
  'delete-dialog.confirm-delete.header': 'Вы ўпэўнены, што хочаце выдаліць гэты рэліз?',

  /** Label when a release has been deleted by a different user */
  'deleted-release': "Рэліз '<strong>{{title}}</strong>' быў выдалены",

  /** Text for when there's no changes in a release diff */
  'diff.list-empty': 'Спіс змяненняў пусты, глядзіце дакумент',
  /** Text for when there's no changes in a release diff */
  'diff.no-changes': 'Няма змяненняў',

  /** Description for discarding a draft of a document dialog */
  'discard-version-dialog.description-draft':
    'Гэта назаўжды выдаліць усе змяненні, унесеныя ў гэты дакумент. Гэтае дзеянне немагчыма адмяніць.',
  /** Description for discarding a version of a document dialog */
  'discard-version-dialog.description-release':
    "Гэта назаўжды выдаліць усе змяненні, унесеныя ў гэты дакумент у рамках рэлізу '<strong>{{releaseTitle}}</strong>'. Гэтае дзеянне немагчыма адмяніць.",
  /** Title for dialog for discarding a draft of a document */
  'discard-version-dialog.header-draft': 'Адхіліць чарнавік?',
  /** Header for discarding a version from a release of a document dialog */
  'discard-version-dialog.header-release':
    "Выдаліць дакумент з рэлізу '<strong>{{releaseTitle}}</strong>'?",
  /** Title for dialog for discarding a draft of a document */
  'discard-version-dialog.title-draft': 'Адхіліць чарнавік',
  /** Title for dialog for discarding a version of a document */
  'discard-version-dialog.title-release': 'Выдаліць з рэлізу',

  /** Label for when a document in a release has a single validation warning */
  'document-validation.error_one': '{{count}} памылка валідацыі',

  /** Label for the button to proceed with duplicating a release */
  'duplicate-dialog.confirm-duplicate-button': 'Так, дубляваць рэліз',
  /** Description for the dialog confirming the duplicate of a release with one document */
  'duplicate-dialog.confirm-duplicate-description_one': 'Гэта дубліруе рэліз і 1 версію дакумента.',
  /** Header for the dialog confirming the duplicate of a release */
  'duplicate-dialog.confirm-duplicate-header': 'Вы ўпэўнены, што хочаце дубляваць гэты рэліз?',

  /** Title text displayed for technical error details */
  'error-details-title': 'Падрабязнасці памылкі',

  /** Title text when error during release update */
  'failed-edit-title': 'Не ўдалося захаваць змяненні',

  /** Title text displayed for releases that failed to publish  */
  'failed-publish-title': 'Не ўдалося апублікаваць',

  /** Title text displayed for releases that failed to schedule  */
  'failed-schedule-title': 'Не ўдалося запланаваць',

  /** Filter tab label for all documents */
  'filter-tab.all': 'Усе',
  /** Filter tab label for documents with validation errors */
  'filter-tab.errors': 'Памылкі',

  /**The text that will be shown in the footer to indicate the time the release was archived */
  'footer.status.archived': 'Заархіваваны',
  /**The text that will be shown in the footer to indicate the time the release was created */
  'footer.status.created': 'Створаны',
  /**The text that will be shown in the footer to indicate the time the release was created */
  'footer.status.edited': 'Адрэдагаваны',
  /**The text that will be shown in the footer to indicate the time the release was published */
  'footer.status.published': 'Апублікаваны',
  /**The text that will be shown in the footer to indicate the time the release was unarchived */
  'footer.status.unarchived': 'Разархіваваны',

  /** Label text for the loading state whilst release is being loaded */
  'loading-release': 'Загрузка рэлізу',

  /** Text for when documents of a release are loading */
  'loading-release-documents': 'Загрузка дакументаў',
  /** Description text for when loading documents on a release failed */
  'loading-release-documents.error.description':
    'Мы не можам загрузіць дакументы для гэтага рэлізу. Калі ласка, паспрабуйце пазней.',
  /** Title text for when loading documents on a release failed */
  'loading-release-documents.error.title': 'Нешта пайшло не так',

  /** Label for title of actions for "when releasing" */
  'menu.group.when-releasing': 'Пры выпуску',
  /** Label for the release menu */
  'menu.label': 'Меню рэлізу',
  /** Tooltip for the release menu */
  'menu.tooltip': 'Дзеянні',

  /** Text for when no archived releases are found */
  'no-archived-release': 'Няма архіўных рэлізаў',

  /** Tooltip text when there are no paused scheduled drafts */
  'no-paused-release': 'Няма прыпыненых запланаваных чарнавікоў',

  /** Text for when no releases are found */
  'no-releases': 'Няма рэлізаў',

  /** Text for when no scheduled drafts are found */
  'no-scheduled-drafts': 'Няма запланаваных чарнавікоў',

  /** Text for the button name for the release tool */
  'overview.action.documentation': 'Дакументацыя',
  /** Tooltip for the calendar button in the release overview */
  'overview.calendar.tooltip': 'Прагледзець каляндар',
  /** Description for the release tool */
  'overview.description':
    'Рэлізы — гэта калекцыі змяненняў дакументаў, якімі можна кіраваць, планаваць і адкочваць разам.',
  /** Text for the placeholder in the search release input  */
  'overview.search-releases-placeholder': 'Пошук рэлізаў',
  /** Title for the release tool */
  'overview.title': 'Рэлізы',

  /** Tooltip text for releases that have passed their intended publish date */
  'passed-intended-publish-date': 'Гэты рэліз прапусціў запланаваную дату публікацыі',

  /** Tooltip text for scheduled drafts that have passed their intended publish date */
  'passed-intended-publish-date-draft': 'Гэты чарнавік прапусціў запланаваную дату публікацыі',

  /** Description for when a user doesn't have publish or schedule releases */
  'permission-missing-description':
    'Ваша роля абмяжоўвае тое, што вы можаце бачыць у гэтым рэлізе. Вы не можаце апублікаваць або запланаваць гэты рэліз.',

  /** Text for when a user doesn't have publish or schedule releases */
  'permission-missing-title': 'Абмежаваны доступ',

  /** Tooltip label when the user doesn't have permission to archive release */
  'permissions.error.archive': 'У вас няма дазволу на архіваванне гэтага рэлізу',
  /** Tooltip label when the user doesn't have permission to delete release */
  'permissions.error.delete': 'У вас няма дазволу на выдаленне гэтага рэлізу',
  /** Tooltip label when the user doesn't have permission for discarding a version */
  'permissions.error.discard-version': 'У вас няма дазволу на адхіленне гэтай версіі',
  /** Tooltip label when the user doesn't have permission to duplicate release */
  'permissions.error.duplicate': 'У вас няма дазволу на дубліраванне гэтага рэлізу',
  /** Tooltip label when the user doesn't have permission to unarchive release */
  'permissions.error.unarchive': 'У вас няма дазволу на разархіваванне гэтага рэлізу',
  /** Tooltip label when the user doesn't have permission for unpublishing a document */
  'permissions.error.unpublish': 'У вас няма дазволу на зняцце з публікацыі гэтага дакумента',

  /** Tooltip text for when one user is editing a document in a release */
  'presence.tooltip.one': '{{displayName}} зараз рэдагуе гэты дакумент у рэлізе «{{releaseTitle}}»',

  /** Tooltip text for publish release action when there are no documents */
  'publish-action.validation.no-documents': 'Няма дакументаў для публікацыі',

  /** Description for the dialog confirming the publish of a release with one document */
  'publish-dialog.confirm-publish-description_one':
    "Выпуск '<strong>{{title}}</strong>' і яго дакумент будуць апублікаваны.",
  /** Title for the dialog confirming the publish of a release */
  'publish-dialog.confirm-publish.title':
    'Вы ўпэўнены, што хочаце апублікаваць выпуск і ўсе версіі дакументаў?',
  /** Label for when documents in release have validation errors */
  'publish-dialog.validation.error': 'Некаторыя дакументы маюць памылкі валідацыі',
  /** Label for when documents are being validated */
  'publish-dialog.validation.loading': 'Валідацыя дакументаў...',
  /** Label for the button when the user doesn't have permissions to publish a release */
  'publish-dialog.validation.no-permission': 'У вас няма дазволу на публікацыю',

  /** Title for information card on a published release */
  'publish-info.title': 'Гэты выпуск паспяхова апублікаваны.',

  /** Placeholder title for a release with no title */
  'release-placeholder.title': 'Без назвы',

  /** Description for the dialog confirming the revert of a release with multiple documents */
  'revert-dialog.confirm-revert-description_one':
    'Гэта адкоціць {{releaseDocumentsLength}} версію дакумента.',
  /** Checkbox label to confirm whether to create a staged release for revert or immediately revert */
  'revert-dialog.confirm-revert.stage-revert-checkbox-label': 'Адкаціць выпуск неадкладна',
  /** Title for the dialog confirming the revert of a release */
  'revert-dialog.confirm-revert.title': "Вы ўпэўнены, што хочаце адкаціць выпуск '{{title}}'?",
  /** Warning card text for when immediately revert a release with history */
  'revert-dialog.confirm-revert.warning-card':
    'Пасля публікацыі ў дакументы гэтага выпуску былі ўнесены змены. Адкат перазапіша гэтыя змены.',

  /** Description of a reverted release */
  'revert-release.description': 'Адкаціць змены версій дакументаў у "{{title}}".',
  /** Title of a reverted release */
  'revert-release.title': 'Адкат "{{title}}"',

  /** Description for the review changes button in release tool */
  'review.description': 'Дадайце дакументы ў гэты выпуск, каб праглядзець змены',
  /** Text for when a document is edited */
  'review.edited': 'Адрэдагавана <RelativeTime/>',

  /** Schedule release button tooltip when there are no documents to schedule */
  'schedule-action.validation.no-documents': 'Няма дакументаў для планавання',

  /** Schedule release button tooltip when the release is already scheduled */
  'schedule-button-tooltip.already-scheduled': 'Гэты выпуск ужо запланаваны',
  /** Schedule release button tooltip when there are validation errors */
  'schedule-button-tooltip.validation.error': 'Некаторыя дакументы маюць памылкі валідацыі',
  /** Schedule release button tooltip when validation is loading */
  'schedule-button-tooltip.validation.loading': 'Валідацыя дакументаў...',
  /** Schedule release button tooltip when user has no permissions to schedule */
  'schedule-button-tooltip.validation.no-permission': 'У вас няма дазволу на планаванне',

  /** Title of unschedule release dialog */
  'schedule-button.tooltip': 'Вы ўпэўнены, што хочаце адмяніць планаванне выпуску?',

  /** Description for the confirm button for scheduling a release */
  'schedule-dialog.confirm-button': 'Так, запланаваць',
  /** Description shown in unschedule relaease dialog */
  'schedule-dialog.confirm-description_one':
    "Выпуск '<strong>{{title}}</strong>' і яго дакумент будуць апублікаваны ў выбраную дату.",
  /** Title for unschedule release dialog */
  'schedule-dialog.confirm-title': 'Запланаваць выпуск',
  /** Description for warning that the published schedule time is in the past */
  'schedule-dialog.publish-date-in-past-warning': 'Запланавайце на будучы час і дату.',
  /** Label for date picker when scheduling a release */
  'schedule-dialog.select-publish-date-label': 'Запланаваць на',

  /** Confirm button text for the schedule unpublish dialog */
  'schedule-unpublish-dialog.confirm': 'Запланаваць зняцце з публікацыі',
  /** Description for the schedule unpublish dialog */
  'schedule-unpublish-dialog.description':
    'Выберыце, калі гэты дакумент павінен быць зняты з публікацыі.',
  /** Header for the schedule unpublish dialog */
  'schedule-unpublish-dialog.header': 'Запланаваць чарнавік для зняцця з публікацыі',

  /** Placeholder for search of documents in a release */
  'search-documents-placeholder': 'Пошук дакументаў',

  /** Text for when the release has no errors found */
  'summary.all-documents-errors-found': 'Усе дакументы правераны, знойдзены праблемы',
  /** Text for when the release has validated all documents */
  'summary.all-documents-validated': 'Усе дакументы правераны, праблем не знойдзена',
  /** Text for when the release was created */
  'summary.created': 'Створана <RelativeTime/>',
  /** Text for when the release is composed of one document */
  'summary.document-count_one': '{{count}} дакумент',
  /** Text for when the release has some errors found */
  'summary.errors-found':
    'Каб апублікаваць або запланаваць выпуск, калі ласка, вырашыце праблемы, знойдзеныя ў дакументах',
  /** Text for when the release has no documents */
  'summary.no-documents': 'Няма дакументаў',
  /** Description for the empty state when a cardinality-one release has no documents */
  'summary.no-documents-cardinality-one.description':
    'Гэты запланаваны чарнавік не змяшчае дакумента. Магчыма, ён быў выдалены.',
  /** Title for the empty state when a cardinality-one release has no documents */
  'summary.no-documents-cardinality-one.title': 'Няма дакумента ў гэтым выпуску',
  /** Text for when the release has not published */
  'summary.not-published': 'Не апублікавана',
  /** Text for when the release was published */
  'summary.published': 'Апублікавана <RelativeTime/>',
  /** Text for when the release has validated documents */
  'summary.validated-documents': '{{validatedCount}} з {{totalCount}} дакументаў праверана',
  /** Text for validation loading indicator */
  'summary.validating-documents': 'Праверка дакументаў: {{validatedCount}} з {{totalCount}}',

  /** add action type that will be shown in the table*/
  'table-body.action.add': 'Дадаць',
  /** Change action type that will be shown in the table*/
  'table-body.action.change': 'Змяніць',
  /** Change action type that will be shown in the table*/
  'table-body.action.unpublish': 'Зняць з публікацыі',

  /** Header for the document table in the release tool - action */
  'table-header.action': 'Дзеянне',
  /** Header for the document table in the release tool - Archived */
  'table-header.archivedAt': 'Архівавана',
  /** Header for the document table in the release tool - contributors */
  'table-header.contributors': 'Удзельнікі',
  /** Header for the document table in the release tool - created by */
  'table-header.created-by': 'Створана',
  /** Header for the document table in the release tool - document preview */
  'table-header.document': 'Дакумент',
  /** Header for the document table in the release tool - title */
  'table-header.documents': 'Дакументы',
  /** Header for the document table in the release tool - edited */
  'table-header.edited': 'Адрэдагавана',
  /** Header for the paused scheduled drafts table - intended for */
  'table-header.intended-for': 'Прызначана для',
  /** Header for the document table in the release tool - Published */
  'table-header.published-at': 'Апублікавана',
  /** Header for the document table in the release tool - Published */
  'table-header.publishedAt': 'Апублікавана',
  /** Header for the scheduled drafts document table in the release tool - published at */
  'table-header.scheduled-draft.published-at': 'Апублікавана ў',
  /** Header for the scheduled drafts document table in the release tool - scheduled for */
  'table-header.scheduled-for': 'Запланавана на',
  /** Header for the document table in the release tool - time */
  'table-header.time': 'Час',
  /** Header for the  document table in the release tool - release title */
  'table-header.title': 'Release',
  /** Header for the document table in the release tool - type */
  'table-header.type': 'Тып',
  /** Header for the document table in the release tool - when */
  'table-header.when': 'Калі',

  /** Text for the release time label for scheduled releases  which has not been scheduled yet*/
  'time.estimated': 'Прыблізна',
  /** Text for the release time label for scheduled releases  which has been scheduled*/
  'time.scheduled': 'Запланавана',

  /** Text for toast when release failed to archive */
  'toast.archive.error': "Не ўдалося заархіваваць '<strong>{{title}}</strong>': {{error}}",
  /** Toast error message when bulk scheduling of active drafts fails */
  'toast.confirm-active-scheduled-drafts.error': 'Не ўдалося запланаваць чарнавікі: {{error}}',
  /** Toast message after copying release ID */
  'toast.copy-release-id.success': 'ID release скапіраваны ў буфер абмену',
  /** Toast message after copying release link */
  'toast.copy-release-link.success': 'Спасылка на release скапіравана ў буфер абмену',
  /** Toast message after copying release title */
  'toast.copy-release-title.success': 'Назва release скапіравана ў буфер абмену',
  /** Description for toast when creating new version of document in release failed */
  'toast.create-version.error': 'Не ўдалося дадаць дакумент у release: {{error}}',
  /** Description for toast when release deletion failed */
  'toast.delete.error': "Не ўдалося выдаліць '<strong>{{title}}</strong>': {{error}}",
  /** Description for toast when release is successfully deleted */
  'toast.delete.success': "Release '<strong>{{title}}</strong>' паспяхова выдалены",
  /** Description for toast when release duplication failed */
  'toast.duplicate.error': "Не ўдалося дубліраваць '<strong>{{title}}</strong>': {{error}}",
  /** Description for toast when release is successfully duplicated */
  'toast.duplicate.success': "Release '<strong>{{title}}</strong>' быў дубліраваны. <Link/>",
  /** Link text for toast link to the duplicated release */
  'toast.duplicate.success-link': 'Прагледзець дубліраваны release',
  /** Text for toast when release has been reverted immediately */
  'toast.immediate-revert.success': "Выпуск '{{title}}' быў паспяхова адменены",
  /** Text for toast when release failed to publish */
  'toast.publish.error': "Не ўдалося апублікаваць '<strong>{{title}}</strong>': {{error}}",
  /** Text for toast when release has reverted release successfully staged */
  'toast.revert-stage.success': "Адмена выпуску для '{{title}}' была паспяхова створана. <Link/>",
  /** Link text for toast link to the generated revert release */
  'toast.revert-stage.success-link': 'Прагледзець адменены выпуск',
  /** Text for toast when release failed to revert */
  'toast.revert.error': 'Не ўдалося адмяніць выпуск: {{error}}',
  /** Text for toast when release failed to schedule */
  'toast.schedule.error': "Не ўдалося запланаваць '<strong>{{title}}</strong>': {{error}}",
  /** Text for toast when release has been scheduled */
  'toast.schedule.success': "Выпуск '<strong>{{title}}</strong>' быў запланаваны.",
  /** Text for toast when release failed to unarchive */
  'toast.unarchive.error': "Не ўдалося разархіваваць '<strong>{{title}}</strong>': {{error}}",
  /** Text for toast when release failed to unschedule */
  'toast.unschedule.error':
    "Не ўдалося адмяніць планаванне '<strong>{{title}}</strong>': {{error}}",

  /** Text for tooltip when a release has been scheduled */
  'type-picker.tooltip.scheduled': 'Выпуск запланаваны, адмяніце планаванне, каб змяніць тып',

  /** Text action in unpublish dialog to cancel */
  'unpublish-dialog.action.cancel': 'Адмяніць',
  /** Text action in unpublish dialog to unpublish */
  'unpublish-dialog.action.unpublish': 'Так, зняць з публікацыі пры выпуску',
  /** Description for unpublish dialog, explaining that all changes made to this document will be lost */
  'unpublish-dialog.description.lost-changes':
    'Усе змены, унесеныя ў гэтую версію дакумента, будуць страчаны.',
  /** Description for the unpublish dialog, explaining that it will create a draft if no draft exists at time of release */
  'unpublish-dialog.description.to-draft':
    'Гэта зніме дакумент з публікацыі ў рамках выпуску <Label>{{title}}</Label> і створыць чарнавік, калі на момант выпуску чарнавік адсутнічае.',
  /** Title for the dialog confirming the unpublish of a release */
  'unpublish-dialog.header':
    'Вы ўпэўнены, што хочаце зняць гэты дакумент з публікацыі пры выпуску?',

  /** Text for when a document is unpublished */
  'unpublish.already-unpublished': 'Гэты дакумент ужо зняты з публікацыі.',
  /** Tooltip label for when a document is unpublished */
  'unpublish.no-published-version': 'Апублікаванай версіі гэтага дакумента не існуе.',

  /** Description shown in unschedule relaease dialog */
  'unschedule-dialog.confirm-description': 'Выпуск больш не будзе апублікаваны ў запланаваную дату',
  /** Title for unschedule release dialog */
  'unschedule-dialog.confirm-title': 'Вы ўпэўнены, што хочаце адмяніць планаванне выпуску?',
})
