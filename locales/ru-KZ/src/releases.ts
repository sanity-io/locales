import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Action text for adding a document to release */
  'action.add-document': 'Қосу құжатты',
  /** Action text for archiving a release */
  'action.archive': 'Мұрағатқа жіберу',
  /** Tooltip for when the archive release action is disabled due to release being scheduled  */
  'action.archive.tooltip': 'Мұрағатқа жіберу үшін осы релизді жоспардан алып тастаңыз',
  /** Action text for showing the archived releases */
  'action.archived': 'Мұрағатталған',
  /** Menu item label for copying release ID */
  'action.copy-release-id.label': 'Релиз идентификаторын көшіру',
  /** Menu item label for copying release URL */
  'action.copy-release-link.label': 'Релиз URL мекенжайын көшіру',
  /** Menu item label for copying release title */
  'action.copy-release-title.label': 'Релиз атауын көшіру',
  /** Tooltip for copy release actions button */
  'action.copy-release.label': 'Көшіру',
  /** Action text for staging a new revert release */
  'action.create-revert-release': 'Жаңа релиз жасау',
  /** Action text for deleting a release */
  'action.delete-release': 'Релизді жою',
  /** Menu item label for showing scheduled drafts */
  'action.drafts': 'Жоспарланған жобалар',
  /** Action text for duplicating a release */
  'action.duplicate-release': 'Релизді көшірмелеу',
  /** Action text for editing a release */
  'action.edit': 'Релизді өңдеу',
  /** Action text for reverting a release immediately without staging changes */
  'action.immediate-revert-release': 'Қазір қайтару',
  /** Action text for opening a release */
  'action.open': 'Белсенді',
  /** Action text for showing the paused scheduled drafts */
  'action.paused': 'Тоқтатылған',
  /** Action text for publishing all documents in a release (and the release itself) */
  'action.publish-all-documents': 'Релизді іске қосу',
  /** Menu item label for showing releases (multi-document releases) */
  'action.releases': 'Релиздер',
  /** Action text for reverting a release */
  'action.revert': 'Релизді қайтару',
  /** Action message for when document is scheduled for unpublishing a document and you want to no longer unpublish it */
  'action.revert-unpublish-actions': 'Релиз кезінде жариялаудан алуды болдырмау',
  /** Text for the review changes button in release tool */
  'action.review': 'Өзгерістерді қарау',
  /** Action text for scheduling a release */
  'action.schedule': 'Релизді жоспарлау...',
  /** Action text for scheduling unpublish of a draft document */
  'action.schedule-unpublish': 'Жариялаудан алуды жоспарлау',
  /** Tooltip text for when schedule unpublish is disabled because document is not published */
  'action.schedule-unpublish.disabled.not-published':
    'Жариялаудан алуды жоспарлау үшін құжат жарияланған болуы керек',
  /** Label for unarchiving a release */
  'action.unarchive': 'Мұрағаттан шығару',
  /** Action text for unpublishing a document in a release in the context menu */
  'action.unpublish': 'Снять с публикации',
  /** Action message for scheduling an unpublished of a document  */
  'action.unpublish-doc-actions': 'Снять с публикации при выпуске',
  /** Action text for unscheduling a release */
  'action.unschedule': 'Отменить расписание выпуска',

  /** Text for the summary button in release tool */
  'actions.summary': 'Сводка',

  /* The text for the activity event when a document is added to a release */
  'activity.event.add-document': 'Добавлена версия документа',
  /* The text for the activity event when the release is archived */
  'activity.event.archive': 'Выпуск <strong>{{releaseTitle}}</strong> архивирован',
  /* The text for the activity event when the release is created */
  'activity.event.create':
    'Создан выпуск <strong>{{releaseTitle}}</strong> <ScheduleTarget>с целевым временем </ScheduleTarget>',
  /* The text for the activity event when a document is removed from a release */
  'activity.event.discard-document': 'Версия документа удалена',
  'activity.event.edit': 'Время выпуска установлено на <ScheduleTarget></ScheduleTarget>',
  /**The text to display in the changes when the release type changes to asap */
  'activity.event.edit-time-asap': 'Как можно скорее',
  /**The text to display in the changes when the release type changes to undecided */
  'activity.event.edit-time-undecided': 'Не определено',
  /* The text for the activity event when the release is published */
  'activity.event.publish': 'Выпуск <strong>{{releaseTitle}}</strong> опубликован',
  /* The text for the activity event when the release is scheduled */
  'activity.event.schedule': 'Отмечен как запланированный',
  /** The text for the activity event when the release is unarchived */
  'activity.event.unarchive': 'Выпуск <strong>{{releaseTitle}}</strong> разархивирован',
  /** The text for the activity event when the release is unscheduled */
  'activity.event.unschedule': 'Отмечен как незапланированный',
  /** The loading text for when releases are loading */
  'activity.panel.error': 'Произошла ошибка при получении активности выпуска',
  /** The loading text for when releases are loading */
  'activity.panel.loading': 'Загрузка активности выпуска',
  /** The title for the activity panel shown in the releases detail screen */
  'activity.panel.title': 'Активность',

  /** Label for the button to proceed with archiving a release */
  'archive-dialog.confirm-archive-button': 'Да, архивировать выпуск',
  /** Description for the dialog confirming the archive of a release with one document */
  'archive-dialog.confirm-archive-description_one':
    'Это приведёт к архивированию 1 версии документа.',
  /** Header for the dialog confirming the archive of a release */
  'archive-dialog.confirm-archive-header': 'Вы уверены, что хотите архивировать этот выпуск?',
  /** Title for the dialog confirming the archive of a release */
  'archive-dialog.confirm-archive-title':
    "Вы уверены, что хотите архивировать выпуск <strong>'{{title}}'</strong>?",

  /** Description for information card on a published or archived release to description retention effects */
  'archive-info.description':
    'Он будет доступен в течение {{retentionDays}} дней, затем автоматически удалён {{removalDate}}. <Link>Узнать о хранении данных</Link>.',
  /** Title for information card on a archived release */
  'archive-info.title': 'Этот выпуск архивирован',

  /** Banner text showing count of active scheduled drafts requiring confirmation with one draft */
  'banner.confirm-active-scheduled-drafts_one':
    'Есть {{count}} Запланированный черновик, требующий подтверждения расписания',
  /** Button text for confirming scheduling of active drafts */
  'banner.confirm-active-scheduled-drafts.button': 'Возобновить планирование',
  /** Button text when confirming schedules from paused mode */
  'banner.confirm-active-scheduled-drafts.button-paused': 'Возобновить все расписания',
  /** Banner text shown when drafts mode is disabled but there are still scheduled drafts */
  'banner.drafts-mode-disabled':
    'Режим черновиков отключён, но есть запланированные черновики, ожидающие публикации.',
  /** Banner text shown when navigating to a release that does not exist */
  'banner.release-not-found': 'Этот релиз не найден',
  /** Tooltip for the dismiss button in the release not found banner */
  'banner.release-not-found.dismiss': 'Закрыть',
  /** Banner text shown when scheduled drafts feature is disabled but there are still scheduled drafts */
  'banner.scheduled-drafts-disabled':
    'Запланированные черновики отключены, но есть запланированные черновики, ожидающие публикации.',

  /** Title for changes to published documents */
  'changes-published-docs.title': 'Изменения в опубликованных документах',

  /** Dialog confirm button text for confirming all scheduled drafts */
  'confirm-active-scheduled-drafts-dialog.confirm-button': 'Подтвердить расписания',
  /** Dialog description for confirming active scheduled drafts */
  'confirm-active-scheduled-drafts-dialog.description':
    'Запланировать все приостановленные Scheduled Drafts на предполагаемые даты публикации',
  /** Dialog warning when some scheduled drafts have past dates */
  'confirm-active-scheduled-drafts-dialog.past-dates-warning':
    'Некоторые из этих Scheduled Drafts запланированы на прошедшие даты. Подтверждение расписаний немедленно опубликует эти версии документов.',
  /** Dialog title for confirming active scheduled drafts */
  'confirm-active-scheduled-drafts-dialog.title': 'Возобновить Scheduled Drafts',

  /** Suffix for when a release is a copy of another release */
  'copy-suffix': 'Копия',

  /** Confirm button text for overriding existing draft */
  'copy-to-draft-dialog.confirm-button': 'Да, заменить черновик',
  /** Description for dialog when copying version to draft that already exists */
  'copy-to-draft-dialog.description':
    'Черновая версия этого документа уже существует. Скопируйте текущую версию в черновик и замените существующую черновую версию.',
  /** Title for dialog when copying version to draft that already exists */
  'copy-to-draft-dialog.title': 'Черновая версия уже существует',

  /** Text for when a release / document was created */
  created: 'Создано <RelativeTime/>',

  /** Activity inspector button text */
  'dashboard.details.activity': 'Активность',
  /** Text for the releases detail screen in the pin release button. */
  'dashboard.details.pin-release': 'Закрепить релиз в студии',
  /** Text for the releases detail screen when a release was published ASAP */
  'dashboard.details.published-asap': 'Опубликовано',
  /** Text for the releases detail screen when a release was published from scheduling */
  'dashboard.details.published-on': 'Опубликовано {{date}}',
  /** Text for the releases detail screen in the unpin release button. */
  'dashboard.details.unpin-release': 'Открепить релиз от студии',

  /** Label for the button to proceed deleting a release */
  'delete-dialog.confirm-delete-button': 'Да, удалить релиз',
  /** Description for the dialog confirming the deleting of a release with one document */
  'delete-dialog.confirm-delete-description_one': 'Это удалит 1 версию документа.',
  /** Header for deleting a release dialog */
  'delete-dialog.confirm-delete.header': 'Вы уверены, что хотите удалить этот релиз?',

  /** Label when a release has been deleted by a different user */
  'deleted-release': "Релиз '<strong>{{title}}</strong>' был удалён",

  /** Text for when there's no changes in a release diff */
  'diff.list-empty': 'Список изменений пуст, смотрите документ',
  /** Text for when there's no changes in a release diff */
  'diff.no-changes': 'Нет изменений',

  /** Description for discarding a draft of a document dialog */
  'discard-version-dialog.description-draft':
    'Это навсегда удалит все изменения, внесённые в этот документ. Это действие нельзя отменить.',
  /** Description for discarding a version of a document dialog */
  'discard-version-dialog.description-release':
    "Это навсегда удалит все изменения, внесённые в этот документ в рамках релиза '<strong>{{releaseTitle}}</strong>'. Это действие нельзя отменить.",
  /** Title for dialog for discarding a draft of a document */
  'discard-version-dialog.header-draft': 'Отменить черновик?',
  /** Header for discarding a version from a release of a document dialog */
  'discard-version-dialog.header-release':
    "Удалить документ из релиза '<strong>{{releaseTitle}}</strong>'?",
  /** Title for dialog for discarding a draft of a document */
  'discard-version-dialog.title-draft': 'Отменить черновик',
  /** Title for dialog for discarding a version of a document */
  'discard-version-dialog.title-release': 'Удалить из релиза',

  /** Label for when a document in a release has a single validation warning */
  'document-validation.error_one': '{{count}} ошибка валидации',

  /** Label for the button to proceed with duplicating a release */
  'duplicate-dialog.confirm-duplicate-button': 'Да, дублировать релиз',
  /** Description for the dialog confirming the duplicate of a release with one document */
  'duplicate-dialog.confirm-duplicate-description_one':
    'Это продублирует релиз и 1 версию документа.',
  /** Header for the dialog confirming the duplicate of a release */
  'duplicate-dialog.confirm-duplicate-header': 'Вы уверены, что хотите дублировать этот релиз?',

  /** Title text displayed for technical error details */
  'error-details-title': 'Подробности ошибки',

  /** Title text when error during release update */
  'failed-edit-title': 'Не удалось сохранить изменения',

  /** Title text displayed for releases that failed to publish  */
  'failed-publish-title': 'Не удалось опубликовать',

  /** Title text displayed for releases that failed to schedule  */
  'failed-schedule-title': 'Не удалось запланировать',

  /** Filter tab label for all documents */
  'filter-tab.all': 'Все',
  /** Filter tab label for documents with validation errors */
  'filter-tab.errors': 'Ошибки',

  /**The text that will be shown in the footer to indicate the time the release was archived */
  'footer.status.archived': 'В архиве',
  /**The text that will be shown in the footer to indicate the time the release was created */
  'footer.status.created': 'Создан',
  /**The text that will be shown in the footer to indicate the time the release was created */
  'footer.status.edited': 'Изменён',
  /**The text that will be shown in the footer to indicate the time the release was published */
  'footer.status.published': 'Опубликован',
  /**The text that will be shown in the footer to indicate the time the release was unarchived */
  'footer.status.unarchived': 'Разархивирован',

  /** Label text for the loading state whilst release is being loaded */
  'loading-release': 'Загрузка релиза',

  /** Text for when documents of a release are loading */
  'loading-release-documents': 'Загрузка документов',
  /** Description text for when loading documents on a release failed */
  'loading-release-documents.error.description':
    'Нам не удаётся загрузить документы для этого релиза. Пожалуйста, повторите попытку позже.',
  /** Title text for when loading documents on a release failed */
  'loading-release-documents.error.title': 'Что-то пошло не так',

  /** Label for title of actions for "when releasing" */
  'menu.group.when-releasing': 'При выпуске',
  /** Label for the release menu */
  'menu.label': 'Меню релиза',
  /** Tooltip for the release menu */
  'menu.tooltip': 'Действия',

  /** Text for when no archived releases are found */
  'no-archived-release': 'Нет архивных релизов',

  /** Tooltip text when there are no paused scheduled drafts */
  'no-paused-release': 'Нет приостановленных запланированных черновиков',

  /** Text for when no releases are found */
  'no-releases': 'Нет релизов',

  /** Text for when no scheduled drafts are found */
  'no-scheduled-drafts': 'Нет запланированных черновиков',

  /** Text for the button name for the release tool */
  'overview.action.documentation': 'Документация',
  /** Tooltip for the calendar button in the release overview */
  'overview.calendar.tooltip': 'Просмотреть календарь',
  /** Description for the release tool */
  'overview.description':
    'Релизы — это коллекции изменений документов, которыми можно управлять, планировать и откатывать совместно.',
  /** Text for the placeholder in the search release input  */
  'overview.search-releases-placeholder': 'Поиск релизов',
  /** Title for the release tool */
  'overview.title': 'Релизы',

  /** Tooltip text for releases that have passed their intended publish date */
  'passed-intended-publish-date': 'Этот релиз прошёл запланированную дату публикации',

  /** Tooltip text for scheduled drafts that have passed their intended publish date */
  'passed-intended-publish-date-draft': 'Этот черновик прошёл запланированную дату публикации',

  /** Description for when a user doesn't have publish or schedule releases */
  'permission-missing-description':
    'Ваша роль в настоящее время ограничивает то, что вы можете видеть в этом релизе. Вы не можете публиковать или планировать этот релиз.',

  /** Text for when a user doesn't have publish or schedule releases */
  'permission-missing-title': 'Ограниченный доступ',

  /** Tooltip label when the user doesn't have permission to archive release */
  'permissions.error.archive': 'У вас нет разрешения на архивирование этого релиза',
  /** Tooltip label when the user doesn't have permission to delete release */
  'permissions.error.delete': 'У вас нет разрешения на удаление этого релиза',
  /** Tooltip label when the user doesn't have permission for discarding a version */
  'permissions.error.discard-version': 'У вас нет разрешения на отмену этой версии',
  /** Tooltip label when the user doesn't have permission to duplicate release */
  'permissions.error.duplicate': 'У вас нет разрешения на дублирование этого релиза',
  /** Tooltip label when the user doesn't have permission to unarchive release */
  'permissions.error.unarchive': 'У вас нет разрешения на разархивирование этого релиза',
  /** Tooltip label when the user doesn't have permission for unpublishing a document */
  'permissions.error.unpublish': 'У вас нет разрешения на отмену публикации этого документа',

  /** Tooltip text for when one user is editing a document in a release */
  'presence.tooltip.one':
    '{{displayName}} сейчас редактирует этот документ в релизе «{{releaseTitle}}»',

  /** Tooltip text for publish release action when there are no documents */
  'publish-action.validation.no-documents': 'Нет документов для публикации',

  /** Description for the dialog confirming the publish of a release with one document */
  'publish-dialog.confirm-publish-description_one':
    "Релиз '<strong>{{title}}</strong>' и его документ будут опубликованы.",
  /** Title for the dialog confirming the publish of a release */
  'publish-dialog.confirm-publish.title':
    'Вы уверены, что хотите опубликовать релиз и все версии документов?',
  /** Label for when documents in release have validation errors */
  'publish-dialog.validation.error': 'Некоторые документы содержат ошибки валидации',
  /** Label for when documents are being validated */
  'publish-dialog.validation.loading': 'Валидация документов...',
  /** Label for the button when the user doesn't have permissions to publish a release */
  'publish-dialog.validation.no-permission': 'У вас нет разрешения на публикацию',

  /** Title for information card on a published release */
  'publish-info.title': 'Этот релиз успешно опубликован.',

  /** Placeholder title for a release with no title */
  'release-placeholder.title': 'Без названия',

  /** Description for the dialog confirming the revert of a release with multiple documents */
  'revert-dialog.confirm-revert-description_one':
    'Это откатит {{releaseDocumentsLength}} версию документа.',
  /** Checkbox label to confirm whether to create a staged release for revert or immediately revert */
  'revert-dialog.confirm-revert.stage-revert-checkbox-label': 'Немедленно откатить релиз',
  /** Title for the dialog confirming the revert of a release */
  'revert-dialog.confirm-revert.title': "Вы уверены, что хотите откатить релиз '{{title}}'?",
  /** Warning card text for when immediately revert a release with history */
  'revert-dialog.confirm-revert.warning-card':
    'После публикации в документы этого релиза были внесены изменения. Откат перезапишет эти изменения.',

  /** Description of a reverted release */
  'revert-release.description': 'Откат изменений версий документов в "{{title}}".',
  /** Title of a reverted release */
  'revert-release.title': 'Откат "{{title}}"',

  /** Description for the review changes button in release tool */
  'review.description': 'Добавьте документы в этот релиз для просмотра изменений',
  /** Text for when a document is edited */
  'review.edited': 'Изменено <RelativeTime/>',

  /** Schedule release button tooltip when there are no documents to schedule */
  'schedule-action.validation.no-documents': 'Нет документов для планирования',

  /** Schedule release button tooltip when the release is already scheduled */
  'schedule-button-tooltip.already-scheduled': 'Этот релиз уже запланирован',
  /** Schedule release button tooltip when there are validation errors */
  'schedule-button-tooltip.validation.error': 'Некоторые документы содержат ошибки валидации',
  /** Schedule release button tooltip when validation is loading */
  'schedule-button-tooltip.validation.loading': 'Валидация документов...',
  /** Schedule release button tooltip when user has no permissions to schedule */
  'schedule-button-tooltip.validation.no-permission': 'У вас нет разрешения на планирование',

  /** Title of unschedule release dialog */
  'schedule-button.tooltip': 'Вы уверены, что хотите отменить планирование релиза?',

  /** Description for the confirm button for scheduling a release */
  'schedule-dialog.confirm-button': 'Да, запланировать',
  /** Description shown in unschedule relaease dialog */
  'schedule-dialog.confirm-description_one':
    "Релиз '<strong>{{title}}</strong>' и его документ будут опубликованы в выбранную дату.",
  /** Title for unschedule release dialog */
  'schedule-dialog.confirm-title': 'Запланировать релиз',
  /** Description for warning that the published schedule time is in the past */
  'schedule-dialog.publish-date-in-past-warning': 'Запланируйте на будущее время и дату.',
  /** Label for date picker when scheduling a release */
  'schedule-dialog.select-publish-date-label': 'Запланировать на',

  /** Confirm button text for the schedule unpublish dialog */
  'schedule-unpublish-dialog.confirm': 'Запланировать снятие с публикации',
  /** Description for the schedule unpublish dialog */
  'schedule-unpublish-dialog.description':
    'Выберите, когда этот документ должен быть снят с публикации.',
  /** Header for the schedule unpublish dialog */
  'schedule-unpublish-dialog.header': 'Запланировать черновик для снятия с публикации',

  /** Placeholder for search of documents in a release */
  'search-documents-placeholder': 'Поиск документов',

  /** Text for when the release has no errors found */
  'summary.all-documents-errors-found': 'Все документы проверены, обнаружены проблемы',
  /** Text for when the release has validated all documents */
  'summary.all-documents-validated': 'Все документы проверены, проблем не обнаружено',
  /** Text for when the release was created */
  'summary.created': 'Создано <RelativeTime/>',
  /** Text for when the release is composed of one document */
  'summary.document-count_one': '{{count}} документ',
  /** Text for when the release has some errors found */
  'summary.errors-found':
    'Для публикации или планирования релиза, пожалуйста, устраните проблемы, обнаруженные в документах',
  /** Text for when the release has no documents */
  'summary.no-documents': 'Нет документов',
  /** Description for the empty state when a cardinality-one release has no documents */
  'summary.no-documents-cardinality-one.description':
    'Этот запланированный черновик не содержит документа. Возможно, он был удалён.',
  /** Title for the empty state when a cardinality-one release has no documents */
  'summary.no-documents-cardinality-one.title': 'Нет документа в этом релизе',
  /** Text for when the release has not published */
  'summary.not-published': 'Не опубликовано',
  /** Text for when the release was published */
  'summary.published': 'Опубликовано <RelativeTime/>',
  /** Text for when the release has validated documents */
  'summary.validated-documents': '{{validatedCount}} из {{totalCount}} документов проверено',
  /** Text for validation loading indicator */
  'summary.validating-documents': 'Проверка документов: {{validatedCount}} из {{totalCount}}',

  /** add action type that will be shown in the table*/
  'table-body.action.add': 'Добавить',
  /** Change action type that will be shown in the table*/
  'table-body.action.change': 'Изменить',
  /** Change action type that will be shown in the table*/
  'table-body.action.unpublish': 'Снять с публикации',

  /** Header for the document table in the release tool - action */
  'table-header.action': 'Действие',
  /** Header for the document table in the release tool - Archived */
  'table-header.archivedAt': 'Архивировано',
  /** Header for the document table in the release tool - contributors */
  'table-header.contributors': 'Участники',
  /** Header for the document table in the release tool - created by */
  'table-header.created-by': 'Создано',
  /** Header for the document table in the release tool - document preview */
  'table-header.document': 'Документ',
  /** Header for the document table in the release tool - title */
  'table-header.documents': 'Документтер',
  /** Header for the document table in the release tool - edited */
  'table-header.edited': 'Өңделген',
  /** Header for the paused scheduled drafts table - intended for */
  'table-header.intended-for': 'Арналған',
  /** Header for the document table in the release tool - Published */
  'table-header.published-at': 'Жарияланған',
  /** Header for the document table in the release tool - Published */
  'table-header.publishedAt': 'Жарияланған',
  /** Header for the scheduled drafts document table in the release tool - published at */
  'table-header.scheduled-draft.published-at': 'Жарияланған уақыты',
  /** Header for the scheduled drafts document table in the release tool - scheduled for */
  'table-header.scheduled-for': 'Жоспарланған уақыт',
  /** Header for the document table in the release tool - time */
  'table-header.time': 'Уақыт',
  /** Header for the  document table in the release tool - release title */
  'table-header.title': 'Release',
  /** Header for the document table in the release tool - type */
  'table-header.type': 'Түрі',
  /** Header for the document table in the release tool - when */
  'table-header.when': 'Қашан',

  /** Text for the release time label for scheduled releases  which has not been scheduled yet*/
  'time.estimated': 'Болжамды',
  /** Text for the release time label for scheduled releases  which has been scheduled*/
  'time.scheduled': 'Жоспарланған',

  /** Text for toast when release failed to archive */
  'toast.archive.error': "'<strong>{{title}}</strong>' мұрағатқа салу сәтсіз аяқталды: {{error}}",
  /** Toast error message when bulk scheduling of active drafts fails */
  'toast.confirm-active-scheduled-drafts.error': 'Жобаларды жоспарлау сәтсіз аяқталды: {{error}}',
  /** Toast message after copying release ID */
  'toast.copy-release-id.success': 'Release идентификаторы алмасу буферіне көшірілді',
  /** Toast message after copying release link */
  'toast.copy-release-link.success': 'Release сілтемесі алмасу буферіне көшірілді',
  /** Toast message after copying release title */
  'toast.copy-release-title.success': 'Release атауы алмасу буферіне көшірілді',
  /** Description for toast when creating new version of document in release failed */
  'toast.create-version.error': 'Документті release-ке қосу сәтсіз аяқталды: {{error}}',
  /** Description for toast when release deletion failed */
  'toast.delete.error': "'<strong>{{title}}</strong>' жою сәтсіз аяқталды: {{error}}",
  /** Description for toast when release is successfully deleted */
  'toast.delete.success': "'<strong>{{title}}</strong>' release сәтті жойылды",
  /** Description for toast when release duplication failed */
  'toast.duplicate.error':
    "'<strong>{{title}}</strong>' көшірмесін жасау сәтсіз аяқталды: {{error}}",
  /** Description for toast when release is successfully duplicated */
  'toast.duplicate.success': "'<strong>{{title}}</strong>' release көшірмесі жасалды. <Link/>",
  /** Link text for toast link to the duplicated release */
  'toast.duplicate.success-link': 'Көшірілген release-ті қарау',
  /** Text for toast when release has been reverted immediately */
  'toast.immediate-revert.success': "Релиз '{{title}}' успешно откатан",
  /** Text for toast when release failed to publish */
  'toast.publish.error': "Не удалось опубликовать '<strong>{{title}}</strong>': {{error}}",
  /** Text for toast when release has reverted release successfully staged */
  'toast.revert-stage.success': "Откат релиза для '{{title}}' успешно создан. <Link/>",
  /** Link text for toast link to the generated revert release */
  'toast.revert-stage.success-link': 'Просмотреть откат релиза',
  /** Text for toast when release failed to revert */
  'toast.revert.error': 'Не удалось откатить релиз: {{error}}',
  /** Text for toast when release failed to schedule */
  'toast.schedule.error': "Не удалось запланировать '<strong>{{title}}</strong>': {{error}}",
  /** Text for toast when release has been scheduled */
  'toast.schedule.success': "Релиз '<strong>{{title}}</strong>' запланирован.",
  /** Text for toast when release failed to unarchive */
  'toast.unarchive.error': "Не удалось разархивировать '<strong>{{title}}</strong>': {{error}}",
  /** Text for toast when release failed to unschedule */
  'toast.unschedule.error':
    "Не удалось отменить планирование '<strong>{{title}}</strong>': {{error}}",

  /** Text for tooltip when a release has been scheduled */
  'type-picker.tooltip.scheduled': 'Релиз запланирован, отмените планирование, чтобы изменить тип',

  /** Text action in unpublish dialog to cancel */
  'unpublish-dialog.action.cancel': 'Отмена',
  /** Text action in unpublish dialog to unpublish */
  'unpublish-dialog.action.unpublish': 'Иә, жариялауды тоқтату кезінде алып тастау',
  /** Description for unpublish dialog, explaining that all changes made to this document will be lost */
  'unpublish-dialog.description.lost-changes':
    'Осы құжат нұсқасына енгізілген барлық өзгерістер жоғалады.',
  /** Description for the unpublish dialog, explaining that it will create a draft if no draft exists at time of release */
  'unpublish-dialog.description.to-draft':
    'Бұл құжатты <Label>{{title}}</Label> релизінің бөлігі ретінде жарияланымнан алып тастайды және релиз кезінде жоба болмаса, жоба жасайды.',
  /** Title for the dialog confirming the unpublish of a release */
  'unpublish-dialog.header':
    'Релиз кезінде бұл құжатты жарияланымнан алып тастағыңыз келетініне сенімдісіз бе?',

  /** Text for when a document is unpublished */
  'unpublish.already-unpublished': 'Бұл құжат әлдеқашан жарияланымнан алып тасталған.',
  /** Tooltip label for when a document is unpublished */
  'unpublish.no-published-version': 'Бұл құжаттың жарияланған нұсқасы жоқ.',

  /** Description shown in unschedule relaease dialog */
  'unschedule-dialog.confirm-description': 'Релиз жоспарланған күні енді жарияланбайды',
  /** Title for unschedule release dialog */
  'unschedule-dialog.confirm-title': 'Релиздің жоспарлауын шынымен тоқтатқыңыз келе ме?',
})
