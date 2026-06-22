import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Action text for adding a document to release */
  'action.add-document': 'Додати документ',
  /** Action text for archiving a release */
  'action.archive': 'Архівувати реліз',
  /** Tooltip for when the archive release action is disabled due to release being scheduled  */
  'action.archive.tooltip': 'Скасуйте планування цього релізу, щоб архівувати його',
  /** Action text for showing the archived releases */
  'action.archived': 'Архівовані',
  /** Menu item label for copying release ID */
  'action.copy-release-id.label': 'Копіювати ID релізу',
  /** Menu item label for copying release URL */
  'action.copy-release-link.label': 'Копіювати URL релізу',
  /** Menu item label for copying release title */
  'action.copy-release-title.label': 'Копіювати назву релізу',
  /** Tooltip for copy release actions button */
  'action.copy-release.label': 'Копіювати',
  /** Action text for staging a new revert release */
  'action.create-revert-release': 'Створити новий реліз',
  /** Action text for deleting a release */
  'action.delete-release': 'Видалити реліз',
  /** Menu item label for showing scheduled drafts */
  'action.drafts': 'Заплановані чернетки',
  /** Action text for duplicating a release */
  'action.duplicate-release': 'Дублювати реліз',
  /** Action text for editing a release */
  'action.edit': 'Редагувати реліз',
  /** Action text for reverting a release immediately without staging changes */
  'action.immediate-revert-release': 'Відновити зараз',
  /** Action text for opening a release */
  'action.open': 'Активний',
  /** Action text for showing the paused scheduled drafts */
  'action.paused': 'Призупинені',
  /** Action text for publishing all documents in a release (and the release itself) */
  'action.publish-all-documents': 'Запустити реліз',
  /** Menu item label for showing releases (multi-document releases) */
  'action.releases': 'Релізи',
  /** Action text for reverting a release */
  'action.revert': 'Відновити реліз',
  /** Action message for when document is scheduled for unpublishing a document and you want to no longer unpublish it */
  'action.revert-unpublish-actions': 'Скасувати зняття з публікації під час релізу',
  /** Text for the review changes button in release tool */
  'action.review': 'Переглянути зміни',
  /** Action text for scheduling a release */
  'action.schedule': 'Запланувати реліз...',
  /** Action text for scheduling unpublish of a draft document */
  'action.schedule-unpublish': 'Запланувати зняття з публікації',
  /** Tooltip text for when schedule unpublish is disabled because document is not published */
  'action.schedule-unpublish.disabled.not-published':
    'Документ має бути опублікований, щоб запланувати зняття з публікації',
  /** Label for unarchiving a release */
  'action.unarchive': 'Розархівувати реліз',
  /** Action text for unpublishing a document in a release in the context menu */
  'action.unpublish': 'Зняти з публікації',
  /** Action message for scheduling an unpublished of a document  */
  'action.unpublish-doc-actions': 'Зняти з публікації під час випуску',
  /** Action text for unscheduling a release */
  'action.unschedule': 'Скасувати планування випуску',

  /** Text for the summary button in release tool */
  'actions.summary': 'Підсумок',

  /* The text for the activity event when a document is added to a release */
  'activity.event.add-document': 'Додано версію документа',
  /* The text for the activity event when the release is archived */
  'activity.event.archive': 'Архівовано випуск <strong>{{releaseTitle}}</strong>',
  /* The text for the activity event when the release is created */
  'activity.event.create':
    'Створено випуск <strong>{{releaseTitle}}</strong> <ScheduleTarget>з ціллю </ScheduleTarget>',
  /* The text for the activity event when a document is removed from a release */
  'activity.event.discard-document': 'Відхилено версію документа',
  'activity.event.edit': 'Встановлено час випуску на <ScheduleTarget></ScheduleTarget>',
  /**The text to display in the changes when the release type changes to asap */
  'activity.event.edit-time-asap': 'Якнайшвидше',
  /**The text to display in the changes when the release type changes to undecided */
  'activity.event.edit-time-undecided': 'Не визначено',
  /* The text for the activity event when the release is published */
  'activity.event.publish': 'Опубліковано випуск <strong>{{releaseTitle}}</strong>',
  /* The text for the activity event when the release is scheduled */
  'activity.event.schedule': 'Позначено як заплановане',
  /** The text for the activity event when the release is unarchived */
  'activity.event.unarchive': 'Розархівовано випуск <strong>{{releaseTitle}}</strong>',
  /** The text for the activity event when the release is unscheduled */
  'activity.event.unschedule': 'Позначено як незаплановане',
  /** The loading text for when releases are loading */
  'activity.panel.error': 'Під час отримання активності випуску сталася помилка',
  /** The loading text for when releases are loading */
  'activity.panel.loading': 'Завантаження активності випуску',
  /** The title for the activity panel shown in the releases detail screen */
  'activity.panel.title': 'Активність',

  /** Label for the button to proceed with archiving a release */
  'archive-dialog.confirm-archive-button': 'Так, архівувати випуск',
  /** Description for the dialog confirming the archive of a release with one document */
  'archive-dialog.confirm-archive-description_one': 'Це архівує 1 версію документа.',
  /** Header for the dialog confirming the archive of a release */
  'archive-dialog.confirm-archive-header': 'Ви впевнені, що хочете архівувати цей випуск?',
  /** Title for the dialog confirming the archive of a release */
  'archive-dialog.confirm-archive-title':
    "Ви впевнені, що хочете архівувати випуск <strong>'{{title}}'</strong>?",

  /** Description for information card on a published or archived release to description retention effects */
  'archive-info.description':
    'Він буде доступний протягом {{retentionDays}} днів, після чого автоматично видалений {{removalDate}}. <Link>Дізнатися про збереження</Link>.',
  /** Title for information card on a archived release */
  'archive-info.title': 'Цей випуск архівовано',

  /** Banner text showing count of active scheduled drafts requiring confirmation with one draft */
  'banner.confirm-active-scheduled-drafts_one':
    'Є {{count}} Запланований чернетковий документ, що потребує підтвердження планування',
  /** Button text for confirming scheduling of active drafts */
  'banner.confirm-active-scheduled-drafts.button': 'Відновити планування',
  /** Button text when confirming schedules from paused mode */
  'banner.confirm-active-scheduled-drafts.button-paused': 'Відновити всі розклади',
  /** Banner text shown when drafts mode is disabled but there are still scheduled drafts */
  'banner.drafts-mode-disabled':
    'Режим чернеток вимкнено, але ще є заплановані чернетки для публікації.',
  /** Banner text shown when navigating to a release that does not exist */
  'banner.release-not-found': 'Цей реліз не вдалося знайти',
  /** Tooltip for the dismiss button in the release not found banner */
  'banner.release-not-found.dismiss': 'Закрити',
  /** Banner text shown when scheduled drafts feature is disabled but there are still scheduled drafts */
  'banner.scheduled-drafts-disabled':
    'Заплановані чернетки вимкнено, але ще є заплановані чернетки для публікації.',

  /** Title for changes to published documents */
  'changes-published-docs.title': 'Зміни до опублікованих документів',

  /** Dialog confirm button text for confirming all scheduled drafts */
  'confirm-active-scheduled-drafts-dialog.confirm-button': 'Підтвердити розклади',
  /** Dialog description for confirming active scheduled drafts */
  'confirm-active-scheduled-drafts-dialog.description':
    'Запланувати всі призупинені заплановані чернетки на їхні заплановані дати публікації',
  /** Dialog warning when some scheduled drafts have past dates */
  'confirm-active-scheduled-drafts-dialog.past-dates-warning':
    'Деякі з цих запланованих чернеток заплановані на минулі дати. Підтвердження розкладів негайно опублікує ці версії документів.',
  /** Dialog title for confirming active scheduled drafts */
  'confirm-active-scheduled-drafts-dialog.title': 'Відновити заплановані чернетки',

  /** Suffix for when a release is a copy of another release */
  'copy-suffix': 'Копія',

  /** Confirm button text for overriding existing draft */
  'copy-to-draft-dialog.confirm-button': 'Так, замінити чернетку',
  /** Description for dialog when copying version to draft that already exists */
  'copy-to-draft-dialog.description':
    'Чернетка цього документа вже існує. Скопіюйте поточну версію до чернетки та замініть наявну версію чернетки.',
  /** Title for dialog when copying version to draft that already exists */
  'copy-to-draft-dialog.title': 'Версія чернетки вже існує',

  /** Text for when a release / document was created */
  created: 'Створено <RelativeTime/>',

  /** Activity inspector button text */
  'dashboard.details.activity': 'Активність',
  /** Text for the releases detail screen in the pin release button. */
  'dashboard.details.pin-release': 'Закріпити реліз у студії',
  /** Text for the releases detail screen when a release was published ASAP */
  'dashboard.details.published-asap': 'Опубліковано',
  /** Text for the releases detail screen when a release was published from scheduling */
  'dashboard.details.published-on': 'Опубліковано {{date}}',
  /** Text for the releases detail screen in the unpin release button. */
  'dashboard.details.unpin-release': 'Відкріпити реліз від студії',

  /** Label for the button to proceed deleting a release */
  'delete-dialog.confirm-delete-button': 'Так, видалити реліз',
  /** Description for the dialog confirming the deleting of a release with one document */
  'delete-dialog.confirm-delete-description_one': 'Це видалить 1 версію документа.',
  /** Header for deleting a release dialog */
  'delete-dialog.confirm-delete.header': 'Ви впевнені, що хочете видалити цей реліз?',

  /** Label when a release has been deleted by a different user */
  'deleted-release': "Реліз '<strong>{{title}}</strong>' було видалено",

  /** Text for when there's no changes in a release diff */
  'diff.list-empty': 'Список змін порожній, дивіться документ',
  /** Text for when there's no changes in a release diff */
  'diff.no-changes': 'Немає змін',

  /** Description for discarding a draft of a document dialog */
  'discard-version-dialog.description-draft':
    'Це назавжди видалить усі зміни, внесені до цього документа. Цю дію неможливо скасувати.',
  /** Description for discarding a version of a document dialog */
  'discard-version-dialog.description-release':
    "Це назавжди видалить усі зміни, внесені до цього документа в рамках релізу '<strong>{{releaseTitle}}</strong>'. Цю дію неможливо скасувати.",
  /** Title for dialog for discarding a draft of a document */
  'discard-version-dialog.header-draft': 'Відхилити чернетку?',
  /** Header for discarding a version from a release of a document dialog */
  'discard-version-dialog.header-release':
    "Видалити документ із релізу '<strong>{{releaseTitle}}</strong>'?",
  /** Title for dialog for discarding a draft of a document */
  'discard-version-dialog.title-draft': 'Відхилити чернетку',
  /** Title for dialog for discarding a version of a document */
  'discard-version-dialog.title-release': 'Видалити з релізу',

  /** Label for when a document in a release has a single validation warning */
  'document-validation.error_one': '{{count}} помилка валідації',

  /** Label for the button to proceed with duplicating a release */
  'duplicate-dialog.confirm-duplicate-button': 'Так, дублювати реліз',
  /** Description for the dialog confirming the duplicate of a release with one document */
  'duplicate-dialog.confirm-duplicate-description_one': 'Це продублює реліз і 1 версію документа.',
  /** Header for the dialog confirming the duplicate of a release */
  'duplicate-dialog.confirm-duplicate-header': 'Ви впевнені, що хочете дублювати цей реліз?',

  /** Title text displayed for technical error details */
  'error-details-title': 'Деталі помилки',

  /** Title text when error during release update */
  'failed-edit-title': 'Не вдалося зберегти зміни',

  /** Title text displayed for releases that failed to publish  */
  'failed-publish-title': 'Не вдалося опублікувати',

  /** Title text displayed for releases that failed to schedule  */
  'failed-schedule-title': 'Не вдалося запланувати',

  /** Filter tab label for all documents */
  'filter-tab.all': 'Усі',
  /** Filter tab label for documents with validation errors */
  'filter-tab.errors': 'Помилки',

  /**The text that will be shown in the footer to indicate the time the release was archived */
  'footer.status.archived': 'Архівовано',
  /**The text that will be shown in the footer to indicate the time the release was created */
  'footer.status.created': 'Створено',
  /**The text that will be shown in the footer to indicate the time the release was created */
  'footer.status.edited': 'Відредаговано',
  /**The text that will be shown in the footer to indicate the time the release was published */
  'footer.status.published': 'Опубліковано',
  /**The text that will be shown in the footer to indicate the time the release was unarchived */
  'footer.status.unarchived': 'Розархівовано',

  /** Label text for the loading state whilst release is being loaded */
  'loading-release': 'Завантаження релізу',

  /** Text for when documents of a release are loading */
  'loading-release-documents': 'Завантаження документів',
  /** Description text for when loading documents on a release failed */
  'loading-release-documents.error.description':
    'Нам не вдається завантажити документи для цього релізу. Будь ласка, спробуйте пізніше.',
  /** Title text for when loading documents on a release failed */
  'loading-release-documents.error.title': 'Щось пішло не так',

  /** Label for title of actions for "when releasing" */
  'menu.group.when-releasing': 'Під час випуску',
  /** Label for the release menu */
  'menu.label': 'Меню релізу',
  /** Tooltip for the release menu */
  'menu.tooltip': 'Дії',

  /** Text for when no archived releases are found */
  'no-archived-release': 'Немає архівних релізів',

  /** Tooltip text when there are no paused scheduled drafts */
  'no-paused-release': 'Немає призупинених запланованих чернеток',

  /** Text for when no releases are found */
  'no-releases': 'Немає релізів',

  /** Text for when no scheduled drafts are found */
  'no-scheduled-drafts': 'Немає запланованих чернеток',

  /** Text for the button name for the release tool */
  'overview.action.documentation': 'Документація',
  /** Tooltip for the calendar button in the release overview */
  'overview.calendar.tooltip': 'Переглянути календар',
  /** Description for the release tool */
  'overview.description':
    'Релізи — це колекції змін документів, якими можна керувати, планувати та відкочувати разом.',
  /** Text for the placeholder in the search release input  */
  'overview.search-releases-placeholder': 'Пошук релізів',
  /** Title for the release tool */
  'overview.title': 'Релізи',

  /** Tooltip text for releases that have passed their intended publish date */
  'passed-intended-publish-date': 'Цей реліз минув запланований термін публікації',

  /** Tooltip text for scheduled drafts that have passed their intended publish date */
  'passed-intended-publish-date-draft': 'Ця чернетка минула запланований термін публікації',

  /** Description for when a user doesn't have publish or schedule releases */
  'permission-missing-description':
    'Ваша роль наразі обмежує те, що ви можете бачити в цьому релізі. Ви не можете публікувати або планувати цей реліз.',

  /** Text for when a user doesn't have publish or schedule releases */
  'permission-missing-title': 'Обмежений доступ',

  /** Tooltip label when the user doesn't have permission to archive release */
  'permissions.error.archive': 'У вас немає дозволу на архівування цього релізу',
  /** Tooltip label when the user doesn't have permission to delete release */
  'permissions.error.delete': 'У вас немає дозволу на видалення цього релізу',
  /** Tooltip label when the user doesn't have permission for discarding a version */
  'permissions.error.discard-version': 'У вас немає дозволу на відхилення цієї версії',
  /** Tooltip label when the user doesn't have permission to duplicate release */
  'permissions.error.duplicate': 'У вас немає дозволу на дублювання цього релізу',
  /** Tooltip label when the user doesn't have permission to unarchive release */
  'permissions.error.unarchive': 'У вас немає дозволу на розархівування цього релізу',
  /** Tooltip label when the user doesn't have permission for unpublishing a document */
  'permissions.error.unpublish': 'У вас немає дозволу на скасування публікації цього документа',

  /** Tooltip text for when one user is editing a document in a release */
  'presence.tooltip.one': '{{displayName}} зараз редагує цей документ у релізі «{{releaseTitle}}»',

  /** Tooltip text for publish release action when there are no documents */
  'publish-action.validation.no-documents': 'Немає документів для публікації',

  /** Description for the dialog confirming the publish of a release with one document */
  'publish-dialog.confirm-publish-description_one':
    "Реліз '<strong>{{title}}</strong>' та його документ буде опубліковано.",
  /** Title for the dialog confirming the publish of a release */
  'publish-dialog.confirm-publish.title':
    'Ви впевнені, що хочете опублікувати реліз та всі версії документів?',
  /** Label for when documents in release have validation errors */
  'publish-dialog.validation.error': 'Деякі документи мають помилки валідації',
  /** Label for when documents are being validated */
  'publish-dialog.validation.loading': 'Валідація документів...',
  /** Label for the button when the user doesn't have permissions to publish a release */
  'publish-dialog.validation.no-permission': 'У вас немає дозволу на публікацію',

  /** Title for information card on a published release */
  'publish-info.title': 'Цей реліз успішно опубліковано.',

  /** Placeholder title for a release with no title */
  'release-placeholder.title': 'Без назви',

  /** Description for the dialog confirming the revert of a release with multiple documents */
  'revert-dialog.confirm-revert-description_one':
    'Це відновить {{releaseDocumentsLength}} версію документа.',
  /** Checkbox label to confirm whether to create a staged release for revert or immediately revert */
  'revert-dialog.confirm-revert.stage-revert-checkbox-label': 'Негайно відновити реліз',
  /** Title for the dialog confirming the revert of a release */
  'revert-dialog.confirm-revert.title': "Ви впевнені, що хочете відновити реліз '{{title}}'?",
  /** Warning card text for when immediately revert a release with history */
  'revert-dialog.confirm-revert.warning-card':
    'Після публікації до документів у цьому релізі були внесені зміни. Відновлення перезапише ці зміни.',

  /** Description of a reverted release */
  'revert-release.description': 'Відновити зміни у версіях документів у «{{title}}».',
  /** Title of a reverted release */
  'revert-release.title': 'Відновлення «{{title}}»',

  /** Description for the review changes button in release tool */
  'review.description': 'Додайте документи до цього релізу, щоб переглянути зміни',
  /** Text for when a document is edited */
  'review.edited': 'Відредаговано <RelativeTime/>',

  /** Schedule release button tooltip when there are no documents to schedule */
  'schedule-action.validation.no-documents': 'Немає документів для планування',

  /** Schedule release button tooltip when the release is already scheduled */
  'schedule-button-tooltip.already-scheduled': 'Цей реліз вже заплановано',
  /** Schedule release button tooltip when there are validation errors */
  'schedule-button-tooltip.validation.error': 'Деякі документи мають помилки валідації',
  /** Schedule release button tooltip when validation is loading */
  'schedule-button-tooltip.validation.loading': 'Валідація документів...',
  /** Schedule release button tooltip when user has no permissions to schedule */
  'schedule-button-tooltip.validation.no-permission': 'У вас немає дозволу на планування',

  /** Title of unschedule release dialog */
  'schedule-button.tooltip': 'Ви впевнені, що хочете скасувати планування релізу?',

  /** Description for the confirm button for scheduling a release */
  'schedule-dialog.confirm-button': 'Так, запланувати',
  /** Description shown in unschedule relaease dialog */
  'schedule-dialog.confirm-description_one':
    "Реліз '<strong>{{title}}</strong>' та його документ буде опубліковано у вибрану дату.",
  /** Title for unschedule release dialog */
  'schedule-dialog.confirm-title': 'Запланувати реліз',
  /** Description for warning that the published schedule time is in the past */
  'schedule-dialog.publish-date-in-past-warning': 'Заплануйте на майбутній час і дату.',
  /** Label for date picker when scheduling a release */
  'schedule-dialog.select-publish-date-label': 'Запланувати на',

  /** Confirm button text for the schedule unpublish dialog */
  'schedule-unpublish-dialog.confirm': 'Запланувати скасування публікації',
  /** Description for the schedule unpublish dialog */
  'schedule-unpublish-dialog.description':
    'Виберіть, коли цей документ має бути знятий з публікації.',
  /** Header for the schedule unpublish dialog */
  'schedule-unpublish-dialog.header': 'Запланувати чернетку для скасування публікації',

  /** Placeholder for search of documents in a release */
  'search-documents-placeholder': 'Пошук документів',

  /** Text for when the release has no errors found */
  'summary.all-documents-errors-found': 'Усі документи перевірено, знайдено проблеми',
  /** Text for when the release has validated all documents */
  'summary.all-documents-validated': 'Усі документи перевірено, проблем не знайдено',
  /** Text for when the release was created */
  'summary.created': 'Створено <RelativeTime/>',
  /** Text for when the release is composed of one document */
  'summary.document-count_one': '{{count}} документ',
  /** Text for when the release has some errors found */
  'summary.errors-found':
    'Щоб опублікувати або запланувати реліз, будь ласка, вирішіть проблеми, знайдені в документах',
  /** Text for when the release has no documents */
  'summary.no-documents': 'Немає документів',
  /** Description for the empty state when a cardinality-one release has no documents */
  'summary.no-documents-cardinality-one.description':
    'Ця запланована чернетка не містить документа. Можливо, його було видалено.',
  /** Title for the empty state when a cardinality-one release has no documents */
  'summary.no-documents-cardinality-one.title': 'Немає документа в цьому релізі',
  /** Text for when the release has not published */
  'summary.not-published': 'Не опубліковано',
  /** Text for when the release was published */
  'summary.published': 'Опубліковано <RelativeTime/>',
  /** Text for when the release has validated documents */
  'summary.validated-documents': '{{validatedCount}} із {{totalCount}} документів перевірено',
  /** Text for validation loading indicator */
  'summary.validating-documents': 'Перевірка документів: {{validatedCount}} із {{totalCount}}',

  /** add action type that will be shown in the table*/
  'table-body.action.add': 'Додати',
  /** Change action type that will be shown in the table*/
  'table-body.action.change': 'Змінити',
  /** Change action type that will be shown in the table*/
  'table-body.action.unpublish': 'Зняти з публікації',

  /** Header for the document table in the release tool - action */
  'table-header.action': 'Дія',
  /** Header for the document table in the release tool - Archived */
  'table-header.archivedAt': 'Архівовано',
  /** Header for the document table in the release tool - contributors */
  'table-header.contributors': 'Учасники',
  /** Header for the document table in the release tool - created by */
  'table-header.created-by': 'Створено',
  /** Header for the document table in the release tool - document preview */
  'table-header.document': 'Документ',
  /** Header for the document table in the release tool - title */
  'table-header.documents': 'Документи',
  /** Header for the document table in the release tool - edited */
  'table-header.edited': 'Відредаговано',
  /** Header for the paused scheduled drafts table - intended for */
  'table-header.intended-for': 'Призначено для',
  /** Header for the document table in the release tool - Published */
  'table-header.published-at': 'Опубліковано',
  /** Header for the document table in the release tool - Published */
  'table-header.publishedAt': 'Опубліковано',
  /** Header for the scheduled drafts document table in the release tool - published at */
  'table-header.scheduled-draft.published-at': 'Опубліковано о',
  /** Header for the scheduled drafts document table in the release tool - scheduled for */
  'table-header.scheduled-for': 'Заплановано на',
  /** Header for the document table in the release tool - time */
  'table-header.time': 'Час',
  /** Header for the  document table in the release tool - release title */
  'table-header.title': 'Release',
  /** Header for the document table in the release tool - type */
  'table-header.type': 'Тип',
  /** Header for the document table in the release tool - when */
  'table-header.when': 'Коли',

  /** Text for the release time label for scheduled releases  which has not been scheduled yet*/
  'time.estimated': 'Орієнтовно',
  /** Text for the release time label for scheduled releases  which has been scheduled*/
  'time.scheduled': 'Заплановано',

  /** Text for toast when release failed to archive */
  'toast.archive.error': "Не вдалося архівувати '<strong>{{title}}</strong>': {{error}}",
  /** Toast error message when bulk scheduling of active drafts fails */
  'toast.confirm-active-scheduled-drafts.error': 'Не вдалося запланувати чернетки: {{error}}',
  /** Toast message after copying release ID */
  'toast.copy-release-id.success': 'ID release скопійовано до буфера обміну',
  /** Toast message after copying release link */
  'toast.copy-release-link.success': 'Посилання на release скопійовано до буфера обміну',
  /** Toast message after copying release title */
  'toast.copy-release-title.success': 'Назву release скопійовано до буфера обміну',
  /** Description for toast when creating new version of document in release failed */
  'toast.create-version.error': 'Не вдалося додати документ до release: {{error}}',
  /** Description for toast when release deletion failed */
  'toast.delete.error': "Не вдалося видалити '<strong>{{title}}</strong>': {{error}}",
  /** Description for toast when release is successfully deleted */
  'toast.delete.success': "Release '<strong>{{title}}</strong>' успішно видалено",
  /** Description for toast when release duplication failed */
  'toast.duplicate.error': "Не вдалося дублювати '<strong>{{title}}</strong>': {{error}}",
  /** Description for toast when release is successfully duplicated */
  'toast.duplicate.success': "Release '<strong>{{title}}</strong>' було дубльовано. <Link/>",
  /** Link text for toast link to the duplicated release */
  'toast.duplicate.success-link': 'Переглянути дубльований release',
  /** Text for toast when release has been reverted immediately */
  'toast.immediate-revert.success': "Реліз '{{title}}' було успішно скасовано",
  /** Text for toast when release failed to publish */
  'toast.publish.error': "Не вдалося опублікувати '<strong>{{title}}</strong>': {{error}}",
  /** Text for toast when release has reverted release successfully staged */
  'toast.revert-stage.success': "Реліз для скасування '{{title}}' було успішно створено. <Link/>",
  /** Link text for toast link to the generated revert release */
  'toast.revert-stage.success-link': 'Переглянути реліз скасування',
  /** Text for toast when release failed to revert */
  'toast.revert.error': 'Не вдалося скасувати реліз: {{error}}',
  /** Text for toast when release failed to schedule */
  'toast.schedule.error': "Не вдалося запланувати '<strong>{{title}}</strong>': {{error}}",
  /** Text for toast when release has been scheduled */
  'toast.schedule.success': "Реліз '<strong>{{title}}</strong>' заплановано.",
  /** Text for toast when release failed to unarchive */
  'toast.unarchive.error': "Не вдалося розархівувати '<strong>{{title}}</strong>': {{error}}",
  /** Text for toast when release failed to unschedule */
  'toast.unschedule.error':
    "Не вдалося скасувати планування '<strong>{{title}}</strong>': {{error}}",

  /** Text for tooltip when a release has been scheduled */
  'type-picker.tooltip.scheduled': 'Реліз заплановано, скасуйте планування, щоб змінити тип',

  /** Text action in unpublish dialog to cancel */
  'unpublish-dialog.action.cancel': 'Скасувати',
  /** Text action in unpublish dialog to unpublish */
  'unpublish-dialog.action.unpublish': 'Так, зняти з публікації під час релізу',
  /** Description for unpublish dialog, explaining that all changes made to this document will be lost */
  'unpublish-dialog.description.lost-changes':
    'Усі зміни, внесені до цієї версії документа, буде втрачено.',
  /** Description for the unpublish dialog, explaining that it will create a draft if no draft exists at time of release */
  'unpublish-dialog.description.to-draft':
    'Це зніме документ з публікації в рамках релізу <Label>{{title}}</Label> та створить чернетку, якщо на момент релізу чернетки не існує.',
  /** Title for the dialog confirming the unpublish of a release */
  'unpublish-dialog.header':
    'Ви впевнені, що хочете зняти цей документ з публікації під час релізу?',

  /** Text for when a document is unpublished */
  'unpublish.already-unpublished': 'Цей документ вже знятий з публікації.',
  /** Tooltip label for when a document is unpublished */
  'unpublish.no-published-version': 'Немає опублікованої версії цього документа.',

  /** Description shown in unschedule relaease dialog */
  'unschedule-dialog.confirm-description': 'Реліз більше не буде опубліковано у запланований час',
  /** Title for unschedule release dialog */
  'unschedule-dialog.confirm-title': 'Ви впевнені, що хочете скасувати планування релізу?',
})
