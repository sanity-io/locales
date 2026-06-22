import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Action text for adding a document to release */
  'action.add-document': '新增文件',
  /** Action text for archiving a release */
  'action.archive': '封存發布',
  /** Tooltip for when the archive release action is disabled due to release being scheduled  */
  'action.archive.tooltip': '取消排程此發布以進行封存',
  /** Action text for showing the archived releases */
  'action.archived': '已封存',
  /** Menu item label for copying release ID */
  'action.copy-release-id.label': '複製發布 ID',
  /** Menu item label for copying release URL */
  'action.copy-release-link.label': '複製發布 URL',
  /** Menu item label for copying release title */
  'action.copy-release-title.label': '複製發布標題',
  /** Tooltip for copy release actions button */
  'action.copy-release.label': '複製',
  /** Action text for staging a new revert release */
  'action.create-revert-release': '建立新發布',
  /** Action text for deleting a release */
  'action.delete-release': '刪除發布',
  /** Menu item label for showing scheduled drafts */
  'action.drafts': '已排程草稿',
  /** Action text for duplicating a release */
  'action.duplicate-release': '複製發布',
  /** Action text for editing a release */
  'action.edit': '編輯發布',
  /** Action text for reverting a release immediately without staging changes */
  'action.immediate-revert-release': '立即還原',
  /** Action text for opening a release */
  'action.open': '使用中',
  /** Action text for showing the paused scheduled drafts */
  'action.paused': '已暫停',
  /** Action text for publishing all documents in a release (and the release itself) */
  'action.publish-all-documents': '執行發布',
  /** Menu item label for showing releases (multi-document releases) */
  'action.releases': '發布',
  /** Action text for reverting a release */
  'action.revert': '還原發布',
  /** Action message for when document is scheduled for unpublishing a document and you want to no longer unpublish it */
  'action.revert-unpublish-actions': '發布時還原取消發佈',
  /** Text for the review changes button in release tool */
  'action.review': '審查變更',
  /** Action text for scheduling a release */
  'action.schedule': '排程發布…',
  /** Action text for scheduling unpublish of a draft document */
  'action.schedule-unpublish': '排程取消發佈',
  /** Tooltip text for when schedule unpublish is disabled because document is not published */
  'action.schedule-unpublish.disabled.not-published': '文件必須已發佈才能排程取消發佈',
  /** Label for unarchiving a release */
  'action.unarchive': '取消封存發布',
  /** Action text for unpublishing a document in a release in the context menu */
  'action.unpublish': '取消發佈',
  /** Action message for scheduling an unpublished of a document  */
  'action.unpublish-doc-actions': '發佈版本時取消發佈',
  /** Action text for unscheduling a release */
  'action.unschedule': '取消排程版本',

  /** Text for the summary button in release tool */
  'actions.summary': '摘要',

  /* The text for the activity event when a document is added to a release */
  'activity.event.add-document': '已新增文件版本',
  /* The text for the activity event when the release is archived */
  'activity.event.archive': '已封存 <strong>{{releaseTitle}}</strong> 版本',
  /* The text for the activity event when the release is created */
  'activity.event.create':
    '已建立 <strong>{{releaseTitle}}</strong> 版本 <ScheduleTarget>目標為 </ScheduleTarget>',
  /* The text for the activity event when a document is removed from a release */
  'activity.event.discard-document': '已捨棄文件版本',
  'activity.event.edit': '將版本時間設定為 <ScheduleTarget></ScheduleTarget>',
  /**The text to display in the changes when the release type changes to asap */
  'activity.event.edit-time-asap': '盡快',
  /**The text to display in the changes when the release type changes to undecided */
  'activity.event.edit-time-undecided': '未決定',
  /* The text for the activity event when the release is published */
  'activity.event.publish': '已發佈 <strong>{{releaseTitle}}</strong> 版本',
  /* The text for the activity event when the release is scheduled */
  'activity.event.schedule': '已標記為已排程',
  /** The text for the activity event when the release is unarchived */
  'activity.event.unarchive': '已取消封存 <strong>{{releaseTitle}}</strong> 版本',
  /** The text for the activity event when the release is unscheduled */
  'activity.event.unschedule': '已標記為未排程',
  /** The loading text for when releases are loading */
  'activity.panel.error': '取得版本活動時發生錯誤',
  /** The loading text for when releases are loading */
  'activity.panel.loading': '正在載入版本活動',
  /** The title for the activity panel shown in the releases detail screen */
  'activity.panel.title': '活動',

  /** Label for the button to proceed with archiving a release */
  'archive-dialog.confirm-archive-button': '是，封存版本',
  /** Description for the dialog confirming the archive of a release with more than one document */
  'archive-dialog.confirm-archive-description_other': '這將封存 {{count}} 個文件版本。',
  /** Header for the dialog confirming the archive of a release */
  'archive-dialog.confirm-archive-header': '您確定要封存此版本嗎？',
  /** Title for the dialog confirming the archive of a release */
  'archive-dialog.confirm-archive-title': "您確定要封存 <strong>'{{title}}'</strong> 版本嗎？",

  /** Description for information card on a published or archived release to description retention effects */
  'archive-info.description':
    '此版本將保留 {{retentionDays}} 天，並於 {{removalDate}} 自動移除。<Link>了解保留政策</Link>。',
  /** Title for information card on a archived release */
  'archive-info.title': '此版本已封存',

  /** Banner text showing count of active scheduled drafts requiring confirmation with multiple drafts */
  'banner.confirm-active-scheduled-drafts_other': '有 {{count}} 個排程草稿需要確認排程',
  /** Button text for confirming scheduling of active drafts */
  'banner.confirm-active-scheduled-drafts.button': '恢復排程',
  /** Button text when confirming schedules from paused mode */
  'banner.confirm-active-scheduled-drafts.button-paused': '恢復所有排程',
  /** Banner text shown when drafts mode is disabled but there are still scheduled drafts */
  'banner.drafts-mode-disabled': '草稿模式已停用，但仍有已排程的草稿待發布。',
  /** Banner text shown when navigating to a release that does not exist */
  'banner.release-not-found': '找不到此版本',
  /** Tooltip for the dismiss button in the release not found banner */
  'banner.release-not-found.dismiss': '關閉',
  /** Banner text shown when scheduled drafts feature is disabled but there are still scheduled drafts */
  'banner.scheduled-drafts-disabled': '已排程草稿功能已停用，但仍有已排程的草稿待發布。',

  /** Title for changes to published documents */
  'changes-published-docs.title': '已發布文件的變更',

  /** Dialog confirm button text for confirming all scheduled drafts */
  'confirm-active-scheduled-drafts-dialog.confirm-button': '確認排程',
  /** Dialog description for confirming active scheduled drafts */
  'confirm-active-scheduled-drafts-dialog.description':
    '為所有已暫停的已排程草稿安排其預定發布日期',
  /** Dialog warning when some scheduled drafts have past dates */
  'confirm-active-scheduled-drafts-dialog.past-dates-warning':
    '部分已排程草稿的排程日期已過。確認排程將立即發布這些文件版本。',
  /** Dialog title for confirming active scheduled drafts */
  'confirm-active-scheduled-drafts-dialog.title': '恢復已排程草稿',

  /** Suffix for when a release is a copy of another release */
  'copy-suffix': '複本',

  /** Confirm button text for overriding existing draft */
  'copy-to-draft-dialog.confirm-button': '是，覆蓋草稿',
  /** Description for dialog when copying version to draft that already exists */
  'copy-to-draft-dialog.description':
    '此文件的草稿版本已存在。將目前版本複製到草稿並覆蓋現有的草稿版本。',
  /** Title for dialog when copying version to draft that already exists */
  'copy-to-draft-dialog.title': '草稿版本已存在',

  /** Text for when a release / document was created */
  created: '建立於 <RelativeTime/>',

  /** Activity inspector button text */
  'dashboard.details.activity': '活動',
  /** Text for the releases detail screen in the pin release button. */
  'dashboard.details.pin-release': '將版本固定至 studio',
  /** Text for the releases detail screen when a release was published ASAP */
  'dashboard.details.published-asap': '已發布',
  /** Text for the releases detail screen when a release was published from scheduling */
  'dashboard.details.published-on': '發布於 {{date}}',
  /** Text for the releases detail screen in the unpin release button. */
  'dashboard.details.unpin-release': '從 studio 取消固定版本',

  /** Label for the button to proceed deleting a release */
  'delete-dialog.confirm-delete-button': '是，刪除版本',
  /** Description for the dialog confirming the deleting of a release with more than one document */
  'delete-dialog.confirm-delete-description_other': '這將刪除 {{count}} 個文件版本。',
  /** Header for deleting a release dialog */
  'delete-dialog.confirm-delete.header': '您確定要刪除此版本嗎？',

  /** Label when a release has been deleted by a different user */
  'deleted-release': "'<strong>{{title}}</strong>' 版本已被刪除",

  /** Text for when there's no changes in a release diff */
  'diff.list-empty': '變更清單為空，請查看文件',
  /** Text for when there's no changes in a release diff */
  'diff.no-changes': '無變更',

  /** Description for discarding a draft of a document dialog */
  'discard-version-dialog.description-draft':
    '這將永久移除對此文件所做的所有變更。此操作無法復原。',
  /** Description for discarding a version of a document dialog */
  'discard-version-dialog.description-release':
    '這將永久移除在「<strong>{{releaseTitle}}</strong>」release 中對此文件所做的所有變更。此操作無法復原。',
  /** Title for dialog for discarding a draft of a document */
  'discard-version-dialog.header-draft': '捨棄草稿？',
  /** Header for discarding a version from a release of a document dialog */
  'discard-version-dialog.header-release':
    '從「<strong>{{releaseTitle}}</strong>」release 中移除文件？',
  /** Title for dialog for discarding a draft of a document */
  'discard-version-dialog.title-draft': '捨棄草稿',
  /** Title for dialog for discarding a version of a document */
  'discard-version-dialog.title-release': '從 release 中移除',

  /** Label for when a document in a release has multiple validation warnings */
  'document-validation.error_other': '{{count}} 個驗證錯誤',

  /** Label for the button to proceed with duplicating a release */
  'duplicate-dialog.confirm-duplicate-button': '是，複製 release',
  /** Description for the dialog confirming the duplicate of a release with more than one document */
  'duplicate-dialog.confirm-duplicate-description_other':
    '這將複製此 release 及其 {{count}} 個文件版本。',
  /** Header for the dialog confirming the duplicate of a release */
  'duplicate-dialog.confirm-duplicate-header': '您確定要複製此 release 嗎？',

  /** Title text displayed for technical error details */
  'error-details-title': '錯誤詳情',

  /** Title text when error during release update */
  'failed-edit-title': '儲存變更失敗',

  /** Title text displayed for releases that failed to publish  */
  'failed-publish-title': '發布失敗',

  /** Title text displayed for releases that failed to schedule  */
  'failed-schedule-title': '排程失敗',

  /** Filter tab label for all documents */
  'filter-tab.all': '全部',
  /** Filter tab label for documents with validation errors */
  'filter-tab.errors': '錯誤',

  /**The text that will be shown in the footer to indicate the time the release was archived */
  'footer.status.archived': '已封存',
  /**The text that will be shown in the footer to indicate the time the release was created */
  'footer.status.created': '已建立',
  /**The text that will be shown in the footer to indicate the time the release was created */
  'footer.status.edited': '已編輯',
  /**The text that will be shown in the footer to indicate the time the release was published */
  'footer.status.published': '已發布',
  /**The text that will be shown in the footer to indicate the time the release was unarchived */
  'footer.status.unarchived': '已取消封存',

  /** Label text for the loading state whilst release is being loaded */
  'loading-release': '正在載入 release',

  /** Text for when documents of a release are loading */
  'loading-release-documents': '正在載入文件',
  /** Description text for when loading documents on a release failed */
  'loading-release-documents.error.description': '我們無法載入此版本的文件。請稍後再試。',
  /** Title text for when loading documents on a release failed */
  'loading-release-documents.error.title': '發生錯誤',

  /** Label for title of actions for "when releasing" */
  'menu.group.when-releasing': '發布時',
  /** Label for the release menu */
  'menu.label': '版本選單',
  /** Tooltip for the release menu */
  'menu.tooltip': '操作',

  /** Text for when no archived releases are found */
  'no-archived-release': '無已封存的版本',

  /** Tooltip text when there are no paused scheduled drafts */
  'no-paused-release': '無已暫停的排程草稿',

  /** Text for when no releases are found */
  'no-releases': '無版本',

  /** Text for when no scheduled drafts are found */
  'no-scheduled-drafts': '無排程草稿',

  /** Text for the button name for the release tool */
  'overview.action.documentation': '說明文件',
  /** Tooltip for the calendar button in the release overview */
  'overview.calendar.tooltip': '檢視日曆',
  /** Description for the release tool */
  'overview.description': '版本是文件變更的集合，可一起進行管理、排程及回滾。',
  /** Text for the placeholder in the search release input  */
  'overview.search-releases-placeholder': '搜尋版本',
  /** Title for the release tool */
  'overview.title': '版本',

  /** Tooltip text for releases that have passed their intended publish date */
  'passed-intended-publish-date': '此版本已超過預定發布日期',

  /** Tooltip text for scheduled drafts that have passed their intended publish date */
  'passed-intended-publish-date-draft': '此草稿已超過預定發布日期',

  /** Description for when a user doesn't have publish or schedule releases */
  'permission-missing-description':
    '您目前的角色限制了您在此版本中可查看的內容。您無法發布或排程此版本。',

  /** Text for when a user doesn't have publish or schedule releases */
  'permission-missing-title': '存取受限',

  /** Tooltip label when the user doesn't have permission to archive release */
  'permissions.error.archive': '您沒有封存此版本的權限',
  /** Tooltip label when the user doesn't have permission to delete release */
  'permissions.error.delete': '您沒有刪除此版本的權限',
  /** Tooltip label when the user doesn't have permission for discarding a version */
  'permissions.error.discard-version': '您沒有捨棄此版本的權限',
  /** Tooltip label when the user doesn't have permission to duplicate release */
  'permissions.error.duplicate': '您沒有複製此版本的權限',
  /** Tooltip label when the user doesn't have permission to unarchive release */
  'permissions.error.unarchive': '您沒有取消封存此版本的權限',
  /** Tooltip label when the user doesn't have permission for unpublishing a document */
  'permissions.error.unpublish': '您沒有取消發布此文件的權限',

  /** Tooltip text for when one user is editing a document in a release */
  'presence.tooltip.one': '{{displayName}} 正在「{{releaseTitle}}」版本中編輯此文件',

  /** Tooltip text for publish release action when there are no documents */
  'publish-action.validation.no-documents': '沒有可發布的文件',

  /** Description for the dialog confirming the publish of a release with multiple documents */
  'publish-dialog.confirm-publish-description_other':
    '「<strong>{{title}}</strong>」版本及其 {{releaseDocumentsLength}} 份文件將會發布。',
  /** Title for the dialog confirming the publish of a release */
  'publish-dialog.confirm-publish.title': '您確定要發布此版本及所有文件版本嗎？',
  /** Label for when documents in release have validation errors */
  'publish-dialog.validation.error': '部分文件有驗證錯誤',
  /** Label for when documents are being validated */
  'publish-dialog.validation.loading': '正在驗證文件...',
  /** Label for the button when the user doesn't have permissions to publish a release */
  'publish-dialog.validation.no-permission': '您沒有發布的權限',

  /** Title for information card on a published release */
  'publish-info.title': '此版本已成功發布。',

  /** Placeholder title for a release with no title */
  'release-placeholder.title': '未命名',

  /** Description for the dialog confirming the revert of a release with multiple documents */
  'revert-dialog.confirm-revert-description_other':
    '這將還原 {{releaseDocumentsLength}} 個文件版本。',
  /** Checkbox label to confirm whether to create a staged release for revert or immediately revert */
  'revert-dialog.confirm-revert.stage-revert-checkbox-label': '立即還原此版本',
  /** Title for the dialog confirming the revert of a release */
  'revert-dialog.confirm-revert.title': '您確定要還原「{{title}}」版本嗎？',
  /** Warning card text for when immediately revert a release with history */
  'revert-dialog.confirm-revert.warning-card':
    '此版本中的文件在發布後曾被修改。還原將覆蓋這些變更。',

  /** Description of a reverted release */
  'revert-release.description': '還原「{{title}}」中文件版本的變更。',
  /** Title of a reverted release */
  'revert-release.title': '正在還原「{{title}}」',

  /** Description for the review changes button in release tool */
  'review.description': '將文件新增至此版本以審查變更',
  /** Text for when a document is edited */
  'review.edited': '已編輯 <RelativeTime/>',

  /** Schedule release button tooltip when there are no documents to schedule */
  'schedule-action.validation.no-documents': '沒有可排程的文件',

  /** Schedule release button tooltip when the release is already scheduled */
  'schedule-button-tooltip.already-scheduled': '此版本已排程',
  /** Schedule release button tooltip when there are validation errors */
  'schedule-button-tooltip.validation.error': '部分文件有驗證錯誤',
  /** Schedule release button tooltip when validation is loading */
  'schedule-button-tooltip.validation.loading': '正在驗證文件...',
  /** Schedule release button tooltip when user has no permissions to schedule */
  'schedule-button-tooltip.validation.no-permission': '您沒有排程的權限',

  /** Title of unschedule release dialog */
  'schedule-button.tooltip': '您確定要取消排程此版本嗎？',

  /** Description for the confirm button for scheduling a release */
  'schedule-dialog.confirm-button': '是，排程',
  /** Description for the dialog confirming the publish of a release with multiple documents */
  'schedule-dialog.confirm-description_other':
    '<strong>{{title}}</strong> 版本及其 {{count}} 個文件版本將會排程。',
  /** Title for unschedule release dialog */
  'schedule-dialog.confirm-title': '排程此版本',
  /** Description for warning that the published schedule time is in the past */
  'schedule-dialog.publish-date-in-past-warning': '請選擇未來的時間和日期進行排程。',
  /** Label for date picker when scheduling a release */
  'schedule-dialog.select-publish-date-label': '排程於',

  /** Confirm button text for the schedule unpublish dialog */
  'schedule-unpublish-dialog.confirm': '排程取消發佈',
  /** Description for the schedule unpublish dialog */
  'schedule-unpublish-dialog.description': '選擇此文件應取消發佈的時間。',
  /** Header for the schedule unpublish dialog */
  'schedule-unpublish-dialog.header': '排程草稿以取消發佈',

  /** Placeholder for search of documents in a release */
  'search-documents-placeholder': '搜尋文件',

  /** Text for when the release has no errors found */
  'summary.all-documents-errors-found': '所有文件已驗證，發現問題',
  /** Text for when the release has validated all documents */
  'summary.all-documents-validated': '所有文件已驗證，未發現問題',
  /** Text for when the release was created */
  'summary.created': '建立於 <RelativeTime/>',
  /** Text for when the release is composed of multiple documents */
  'summary.document-count_other': '{{count}} 份文件',
  /** Text for when the release has some errors found */
  'summary.errors-found': '若要發佈或排程此版本，請解決文件中發現的問題',
  /** Text for when the release has no documents */
  'summary.no-documents': '無文件',
  /** Description for the empty state when a cardinality-one release has no documents */
  'summary.no-documents-cardinality-one.description': '此排程草稿不包含任何文件，可能已被移除。',
  /** Title for the empty state when a cardinality-one release has no documents */
  'summary.no-documents-cardinality-one.title': '此版本中沒有文件',
  /** Text for when the release has not published */
  'summary.not-published': '未發佈',
  /** Text for when the release was published */
  'summary.published': '發佈於 <RelativeTime/>',
  /** Text for when the release has validated documents */
  'summary.validated-documents': '{{totalCount}} 份文件中已驗證 {{validatedCount}} 份',
  /** Text for validation loading indicator */
  'summary.validating-documents': '正在驗證文件：{{totalCount}} 份中已完成 {{validatedCount}} 份',

  /** add action type that will be shown in the table*/
  'table-body.action.add': '新增',
  /** Change action type that will be shown in the table*/
  'table-body.action.change': '變更',
  /** Change action type that will be shown in the table*/
  'table-body.action.unpublish': '取消發佈',

  /** Header for the document table in the release tool - action */
  'table-header.action': '操作',
  /** Header for the document table in the release tool - Archived */
  'table-header.archivedAt': '已封存',
  /** Header for the document table in the release tool - contributors */
  'table-header.contributors': '貢獻者',
  /** Header for the document table in the release tool - created by */
  'table-header.created-by': '建立者',
  /** Header for the document table in the release tool - document preview */
  'table-header.document': '文件',
  /** Header for the document table in the release tool - title */
  'table-header.documents': '文件',
  /** Header for the document table in the release tool - edited */
  'table-header.edited': '已編輯',
  /** Header for the paused scheduled drafts table - intended for */
  'table-header.intended-for': '預定用於',
  /** Header for the document table in the release tool - Published */
  'table-header.published-at': '已發佈',
  /** Header for the document table in the release tool - Published */
  'table-header.publishedAt': '已發佈',
  /** Header for the scheduled drafts document table in the release tool - published at */
  'table-header.scheduled-draft.published-at': '發佈於',
  /** Header for the scheduled drafts document table in the release tool - scheduled for */
  'table-header.scheduled-for': '排程於',
  /** Header for the document table in the release tool - time */
  'table-header.time': '時間',
  /** Header for the  document table in the release tool - release title */
  'table-header.title': 'Release',
  /** Header for the document table in the release tool - type */
  'table-header.type': '類型',
  /** Header for the document table in the release tool - when */
  'table-header.when': '時間點',

  /** Text for the release time label for scheduled releases  which has not been scheduled yet*/
  'time.estimated': '預估',
  /** Text for the release time label for scheduled releases  which has been scheduled*/
  'time.scheduled': '已排程',

  /** Text for toast when release failed to archive */
  'toast.archive.error': '封存「<strong>{{title}}</strong>」失敗：{{error}}',
  /** Toast error message when bulk scheduling of active drafts fails */
  'toast.confirm-active-scheduled-drafts.error': '排程草稿失敗：{{error}}',
  /** Toast message after copying release ID */
  'toast.copy-release-id.success': 'Release ID 已複製到剪貼簿',
  /** Toast message after copying release link */
  'toast.copy-release-link.success': 'Release 連結已複製到剪貼簿',
  /** Toast message after copying release title */
  'toast.copy-release-title.success': 'Release 標題已複製到剪貼簿',
  /** Description for toast when creating new version of document in release failed */
  'toast.create-version.error': '將文件新增至 release 失敗：{{error}}',
  /** Description for toast when release deletion failed */
  'toast.delete.error': '刪除「<strong>{{title}}</strong>」失敗：{{error}}',
  /** Description for toast when release is successfully deleted */
  'toast.delete.success': '「<strong>{{title}}</strong>」release 已成功刪除',
  /** Description for toast when release duplication failed */
  'toast.duplicate.error': '複製「<strong>{{title}}</strong>」失敗：{{error}}',
  /** Description for toast when release is successfully duplicated */
  'toast.duplicate.success': '「<strong>{{title}}</strong>」release 已複製。<Link/>',
  /** Link text for toast link to the duplicated release */
  'toast.duplicate.success-link': '檢視已複製的 release',
  /** Text for toast when release has been reverted immediately */
  'toast.immediate-revert.success': '「{{title}}」版本已成功還原',
  /** Text for toast when release failed to publish */
  'toast.publish.error': '發佈「<strong>{{title}}</strong>」失敗：{{error}}',
  /** Text for toast when release has reverted release successfully staged */
  'toast.revert-stage.success': '「{{title}}」的還原版本已成功建立。<Link/>',
  /** Link text for toast link to the generated revert release */
  'toast.revert-stage.success-link': '檢視還原版本',
  /** Text for toast when release failed to revert */
  'toast.revert.error': '還原版本失敗：{{error}}',
  /** Text for toast when release failed to schedule */
  'toast.schedule.error': '排程「<strong>{{title}}</strong>」失敗：{{error}}',
  /** Text for toast when release has been scheduled */
  'toast.schedule.success': '「<strong>{{title}}</strong>」版本已排程。',
  /** Text for toast when release failed to unarchive */
  'toast.unarchive.error': '取消封存「<strong>{{title}}</strong>」失敗：{{error}}',
  /** Text for toast when release failed to unschedule */
  'toast.unschedule.error': '取消排程「<strong>{{title}}</strong>」失敗：{{error}}',

  /** Text for tooltip when a release has been scheduled */
  'type-picker.tooltip.scheduled': '此版本已排程，請取消排程後再變更類型',

  /** Text action in unpublish dialog to cancel */
  'unpublish-dialog.action.cancel': '取消',
  /** Text action in unpublish dialog to unpublish */
  'unpublish-dialog.action.unpublish': '是，發佈時取消發佈',
  /** Description for unpublish dialog, explaining that all changes made to this document will be lost */
  'unpublish-dialog.description.lost-changes': '對此文件版本所做的任何變更都將遺失。',
  /** Description for the unpublish dialog, explaining that it will create a draft if no draft exists at time of release */
  'unpublish-dialog.description.to-draft':
    '這將在 <Label>{{title}}</Label> 版本發佈時取消發佈該文件，並在發佈時若無草稿則建立一份草稿。',
  /** Title for the dialog confirming the unpublish of a release */
  'unpublish-dialog.header': '您確定要在發佈時取消發佈此文件嗎？',

  /** Text for when a document is unpublished */
  'unpublish.already-unpublished': '此文件已取消發佈。',
  /** Tooltip label for when a document is unpublished */
  'unpublish.no-published-version': '此文件沒有已發佈的版本。',

  /** Description shown in unschedule relaease dialog */
  'unschedule-dialog.confirm-description': '此版本將不再於排程日期發佈',
  /** Title for unschedule release dialog */
  'unschedule-dialog.confirm-title': '您確定要取消排程此版本嗎？',
})
