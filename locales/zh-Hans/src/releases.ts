import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Action text for adding a document to release */
  'action.add-document': '添加文档',
  /** Action text for archiving a release */
  'action.archive': '归档发布',
  /** Tooltip for when the archive release action is disabled due to release being scheduled  */
  'action.archive.tooltip': '取消安排此发布以将其归档',
  /** Action text for showing the archived releases */
  'action.archived': '已归档',
  /** Menu item label for copying release ID */
  'action.copy-release-id.label': '复制发布 ID',
  /** Menu item label for copying release URL */
  'action.copy-release-link.label': '复制发布 URL',
  /** Menu item label for copying release title */
  'action.copy-release-title.label': '复制发布标题',
  /** Tooltip for copy release actions button */
  'action.copy-release.label': '复制',
  /** Action text for staging a new revert release */
  'action.create-revert-release': '创建新发布',
  /** Action text for deleting a release */
  'action.delete-release': '删除发布',
  /** Menu item label for showing scheduled drafts */
  'action.drafts': '已计划的草稿',
  /** Action text for duplicating a release */
  'action.duplicate-release': '复制发布',
  /** Action text for editing a release */
  'action.edit': '编辑发布',
  /** Action text for reverting a release immediately without staging changes */
  'action.immediate-revert-release': '立即还原',
  /** Action text for opening a release */
  'action.open': '活跃',
  /** Action text for showing the paused scheduled drafts */
  'action.paused': '已暂停',
  /** Action text for publishing all documents in a release (and the release itself) */
  'action.publish-all-documents': '运行发布',
  /** Menu item label for showing releases (multi-document releases) */
  'action.releases': '发布',
  /** Action text for reverting a release */
  'action.revert': '还原发布',
  /** Action message for when document is scheduled for unpublishing a document and you want to no longer unpublish it */
  'action.revert-unpublish-actions': '发布时还原取消发布',
  /** Text for the review changes button in release tool */
  'action.review': '查看更改',
  /** Action text for scheduling a release */
  'action.schedule': '安排发布...',
  /** Action text for scheduling unpublish of a draft document */
  'action.schedule-unpublish': '安排取消发布',
  /** Tooltip text for when schedule unpublish is disabled because document is not published */
  'action.schedule-unpublish.disabled.not-published': '文档必须已发布才能安排取消发布',
  /** Label for unarchiving a release */
  'action.unarchive': '取消归档发布',
  /** Action text for unpublishing a document in a release in the context menu */
  'action.unpublish': '取消发布',
  /** Action message for scheduling an unpublished of a document  */
  'action.unpublish-doc-actions': '发布时取消发布',
  /** Action text for unscheduling a release */
  'action.unschedule': '取消计划发布',

  /** Text for the summary button in release tool */
  'actions.summary': '摘要',

  /* The text for the activity event when a document is added to a release */
  'activity.event.add-document': '已添加文档版本',
  /* The text for the activity event when the release is archived */
  'activity.event.archive': '已归档 <strong>{{releaseTitle}}</strong> 发布',
  /* The text for the activity event when the release is created */
  'activity.event.create':
    '已创建 <strong>{{releaseTitle}}</strong> 发布 <ScheduleTarget>目标时间为 </ScheduleTarget>',
  /* The text for the activity event when a document is removed from a release */
  'activity.event.discard-document': '已丢弃文档版本',
  'activity.event.edit': '将发布时间设置为 <ScheduleTarget></ScheduleTarget>',
  /**The text to display in the changes when the release type changes to asap */
  'activity.event.edit-time-asap': '尽快',
  /**The text to display in the changes when the release type changes to undecided */
  'activity.event.edit-time-undecided': '未决定',
  /* The text for the activity event when the release is published */
  'activity.event.publish': '已发布 <strong>{{releaseTitle}}</strong> 发布',
  /* The text for the activity event when the release is scheduled */
  'activity.event.schedule': '已标记为已计划',
  /** The text for the activity event when the release is unarchived */
  'activity.event.unarchive': '已取消归档 <strong>{{releaseTitle}}</strong> 发布',
  /** The text for the activity event when the release is unscheduled */
  'activity.event.unschedule': '已标记为未计划',
  /** The loading text for when releases are loading */
  'activity.panel.error': '获取发布活动时发生错误',
  /** The loading text for when releases are loading */
  'activity.panel.loading': '正在加载发布活动',
  /** The title for the activity panel shown in the releases detail screen */
  'activity.panel.title': '活动',

  /** Label for the button to proceed with archiving a release */
  'archive-dialog.confirm-archive-button': '是，归档发布',
  /** Description for the dialog confirming the archive of a release with more than one document */
  'archive-dialog.confirm-archive-description_other': '这将归档 {{count}} 个文档版本。',
  /** Header for the dialog confirming the archive of a release */
  'archive-dialog.confirm-archive-header': '您确定要归档此发布吗？',
  /** Title for the dialog confirming the archive of a release */
  'archive-dialog.confirm-archive-title': "您确定要归档 <strong>'{{title}}'</strong> 发布吗？",

  /** Description for information card on a published or archived release to description retention effects */
  'archive-info.description':
    '它将保留 {{retentionDays}} 天，然后在 {{removalDate}} 自动删除。<Link>了解保留策略</Link>。',
  /** Title for information card on a archived release */
  'archive-info.title': '此发布已归档',

  /** Banner text showing count of active scheduled drafts requiring confirmation with multiple drafts */
  'banner.confirm-active-scheduled-drafts_other': '有 {{count}} 个计划草稿需要确认计划安排',
  /** Button text for confirming scheduling of active drafts */
  'banner.confirm-active-scheduled-drafts.button': '恢复计划',
  /** Button text when confirming schedules from paused mode */
  'banner.confirm-active-scheduled-drafts.button-paused': '恢复所有计划',
  /** Banner text shown when drafts mode is disabled but there are still scheduled drafts */
  'banner.drafts-mode-disabled': '草稿模式已被禁用，但仍有计划中的草稿待发布。',
  /** Banner text shown when navigating to a release that does not exist */
  'banner.release-not-found': '找不到此版本',
  /** Tooltip for the dismiss button in the release not found banner */
  'banner.release-not-found.dismiss': '关闭',
  /** Banner text shown when scheduled drafts feature is disabled but there are still scheduled drafts */
  'banner.scheduled-drafts-disabled': '计划草稿功能已被禁用，但仍有计划中的草稿待发布。',

  /** Title for changes to published documents */
  'changes-published-docs.title': '已发布文档的更改',

  /** Dialog confirm button text for confirming all scheduled drafts */
  'confirm-active-scheduled-drafts-dialog.confirm-button': '确认计划',
  /** Dialog description for confirming active scheduled drafts */
  'confirm-active-scheduled-drafts-dialog.description': '按预定发布日期安排所有已暂停的计划草稿',
  /** Dialog warning when some scheduled drafts have past dates */
  'confirm-active-scheduled-drafts-dialog.past-dates-warning':
    '部分计划草稿的计划日期已过。确认计划将立即发布这些文档版本。',
  /** Dialog title for confirming active scheduled drafts */
  'confirm-active-scheduled-drafts-dialog.title': '恢复计划草稿',

  /** Suffix for when a release is a copy of another release */
  'copy-suffix': '副本',

  /** Confirm button text for overriding existing draft */
  'copy-to-draft-dialog.confirm-button': '是，覆盖草稿',
  /** Description for dialog when copying version to draft that already exists */
  'copy-to-draft-dialog.description':
    '此文档的草稿版本已存在。将当前版本复制到草稿并覆盖现有草稿版本。',
  /** Title for dialog when copying version to draft that already exists */
  'copy-to-draft-dialog.title': '草稿版本已存在',

  /** Text for when a release / document was created */
  created: '创建于 <RelativeTime/>',

  /** Activity inspector button text */
  'dashboard.details.activity': '活动',
  /** Text for the releases detail screen in the pin release button. */
  'dashboard.details.pin-release': '将版本固定到 studio',
  /** Text for the releases detail screen when a release was published ASAP */
  'dashboard.details.published-asap': '已发布',
  /** Text for the releases detail screen when a release was published from scheduling */
  'dashboard.details.published-on': '发布于 {{date}}',
  /** Text for the releases detail screen in the unpin release button. */
  'dashboard.details.unpin-release': '从 studio 取消固定版本',

  /** Label for the button to proceed deleting a release */
  'delete-dialog.confirm-delete-button': '是，删除版本',
  /** Description for the dialog confirming the deleting of a release with more than one document */
  'delete-dialog.confirm-delete-description_other': '这将删除 {{count}} 个文档版本。',
  /** Header for deleting a release dialog */
  'delete-dialog.confirm-delete.header': '您确定要删除此版本吗？',

  /** Label when a release has been deleted by a different user */
  'deleted-release': "'<strong>{{title}}</strong>' 版本已被删除",

  /** Text for when there's no changes in a release diff */
  'diff.list-empty': '更改列表为空，请查看文档',
  /** Text for when there's no changes in a release diff */
  'diff.no-changes': '无更改',

  /** Description for discarding a draft of a document dialog */
  'discard-version-dialog.description-draft':
    '这将永久删除对此文档所做的所有更改。此操作无法撤销。',
  /** Description for discarding a version of a document dialog */
  'discard-version-dialog.description-release':
    '这将永久删除在"<strong>{{releaseTitle}}</strong>"release 中对此文档所做的所有更改。此操作无法撤销。',
  /** Title for dialog for discarding a draft of a document */
  'discard-version-dialog.header-draft': '放弃草稿？',
  /** Header for discarding a version from a release of a document dialog */
  'discard-version-dialog.header-release':
    '从"<strong>{{releaseTitle}}</strong>"release 中移除文档？',
  /** Title for dialog for discarding a draft of a document */
  'discard-version-dialog.title-draft': '放弃草稿',
  /** Title for dialog for discarding a version of a document */
  'discard-version-dialog.title-release': '从 release 中移除',

  /** Label for when a document in a release has multiple validation warnings */
  'document-validation.error_other': '{{count}} 个验证错误',

  /** Label for the button to proceed with duplicating a release */
  'duplicate-dialog.confirm-duplicate-button': '是，复制 release',
  /** Description for the dialog confirming the duplicate of a release with more than one document */
  'duplicate-dialog.confirm-duplicate-description_other':
    '这将复制该 release 及其 {{count}} 个文档版本。',
  /** Header for the dialog confirming the duplicate of a release */
  'duplicate-dialog.confirm-duplicate-header': '确定要复制此 release 吗？',

  /** Title text displayed for technical error details */
  'error-details-title': '错误详情',

  /** Title text when error during release update */
  'failed-edit-title': '保存更改失败',

  /** Title text displayed for releases that failed to publish  */
  'failed-publish-title': '发布失败',

  /** Title text displayed for releases that failed to schedule  */
  'failed-schedule-title': '计划失败',

  /** Filter tab label for all documents */
  'filter-tab.all': '全部',
  /** Filter tab label for documents with validation errors */
  'filter-tab.errors': '错误',

  /**The text that will be shown in the footer to indicate the time the release was archived */
  'footer.status.archived': '已归档',
  /**The text that will be shown in the footer to indicate the time the release was created */
  'footer.status.created': '已创建',
  /**The text that will be shown in the footer to indicate the time the release was created */
  'footer.status.edited': '已编辑',
  /**The text that will be shown in the footer to indicate the time the release was published */
  'footer.status.published': '已发布',
  /**The text that will be shown in the footer to indicate the time the release was unarchived */
  'footer.status.unarchived': '已取消归档',

  /** Label text for the loading state whilst release is being loaded */
  'loading-release': '正在加载 release',

  /** Text for when documents of a release are loading */
  'loading-release-documents': '正在加载文档',
  /** Description text for when loading documents on a release failed */
  'loading-release-documents.error.description': '我们无法加载此版本的文档。请稍后重试。',
  /** Title text for when loading documents on a release failed */
  'loading-release-documents.error.title': '出现错误',

  /** Label for title of actions for "when releasing" */
  'menu.group.when-releasing': '发布时',
  /** Label for the release menu */
  'menu.label': '版本菜单',
  /** Tooltip for the release menu */
  'menu.tooltip': '操作',

  /** Text for when no archived releases are found */
  'no-archived-release': '无已归档版本',

  /** Tooltip text when there are no paused scheduled drafts */
  'no-paused-release': '无已暂停的计划草稿',

  /** Text for when no releases are found */
  'no-releases': '无版本',

  /** Text for when no scheduled drafts are found */
  'no-scheduled-drafts': '无计划草稿',

  /** Text for the button name for the release tool */
  'overview.action.documentation': '文档',
  /** Tooltip for the calendar button in the release overview */
  'overview.calendar.tooltip': '查看日历',
  /** Description for the release tool */
  'overview.description': '版本是文档更改的集合，可以统一进行管理、计划和回滚。',
  /** Text for the placeholder in the search release input  */
  'overview.search-releases-placeholder': '搜索版本',
  /** Title for the release tool */
  'overview.title': '版本',

  /** Tooltip text for releases that have passed their intended publish date */
  'passed-intended-publish-date': '此版本已超过预定发布日期',

  /** Tooltip text for scheduled drafts that have passed their intended publish date */
  'passed-intended-publish-date-draft': '此草稿已超过预定发布日期',

  /** Description for when a user doesn't have publish or schedule releases */
  'permission-missing-description':
    '您的角色目前限制了您在此版本中可查看的内容。您无法发布或计划此版本。',

  /** Text for when a user doesn't have publish or schedule releases */
  'permission-missing-title': '访问受限',

  /** Tooltip label when the user doesn't have permission to archive release */
  'permissions.error.archive': '您没有权限归档此版本',
  /** Tooltip label when the user doesn't have permission to delete release */
  'permissions.error.delete': '您没有权限删除此版本',
  /** Tooltip label when the user doesn't have permission for discarding a version */
  'permissions.error.discard-version': '您没有权限丢弃此版本',
  /** Tooltip label when the user doesn't have permission to duplicate release */
  'permissions.error.duplicate': '您没有权限复制此版本',
  /** Tooltip label when the user doesn't have permission to unarchive release */
  'permissions.error.unarchive': '您没有权限取消归档此版本',
  /** Tooltip label when the user doesn't have permission for unpublishing a document */
  'permissions.error.unpublish': '您没有权限取消发布此文档',

  /** Tooltip text for when one user is editing a document in a release */
  'presence.tooltip.one': '{{displayName}} 正在"{{releaseTitle}}"版本中编辑此文档',

  /** Tooltip text for publish release action when there are no documents */
  'publish-action.validation.no-documents': '没有可发布的文档',

  /** Description for the dialog confirming the publish of a release with multiple documents */
  'publish-dialog.confirm-publish-description_other':
    '"<strong>{{title}}</strong>"版本及其 {{releaseDocumentsLength}} 个文档将被发布。',
  /** Title for the dialog confirming the publish of a release */
  'publish-dialog.confirm-publish.title': '您确定要发布该版本及所有文档版本吗？',
  /** Label for when documents in release have validation errors */
  'publish-dialog.validation.error': '部分文档存在验证错误',
  /** Label for when documents are being validated */
  'publish-dialog.validation.loading': '正在验证文档...',
  /** Label for the button when the user doesn't have permissions to publish a release */
  'publish-dialog.validation.no-permission': '您没有发布权限',

  /** Title for information card on a published release */
  'publish-info.title': '此版本已成功发布。',

  /** Placeholder title for a release with no title */
  'release-placeholder.title': '未命名',

  /** Description for the dialog confirming the revert of a release with multiple documents */
  'revert-dialog.confirm-revert-description_other':
    '这将还原 {{releaseDocumentsLength}} 个文档版本。',
  /** Checkbox label to confirm whether to create a staged release for revert or immediately revert */
  'revert-dialog.confirm-revert.stage-revert-checkbox-label': '立即还原该版本',
  /** Title for the dialog confirming the revert of a release */
  'revert-dialog.confirm-revert.title': '您确定要还原"{{title}}"版本吗？',
  /** Warning card text for when immediately revert a release with history */
  'revert-dialog.confirm-revert.warning-card':
    '此版本中的文档在发布后已被修改。还原将覆盖这些更改。',

  /** Description of a reverted release */
  'revert-release.description': '还原"{{title}}"中文档版本的更改。',
  /** Title of a reverted release */
  'revert-release.title': '正在还原"{{title}}"',

  /** Description for the review changes button in release tool */
  'review.description': '将文档添加到此版本以审查更改',
  /** Text for when a document is edited */
  'review.edited': '已编辑 <RelativeTime/>',

  /** Schedule release button tooltip when there are no documents to schedule */
  'schedule-action.validation.no-documents': '没有可计划的文档',

  /** Schedule release button tooltip when the release is already scheduled */
  'schedule-button-tooltip.already-scheduled': '此版本已计划发布',
  /** Schedule release button tooltip when there are validation errors */
  'schedule-button-tooltip.validation.error': '部分文档存在验证错误',
  /** Schedule release button tooltip when validation is loading */
  'schedule-button-tooltip.validation.loading': '正在验证文档...',
  /** Schedule release button tooltip when user has no permissions to schedule */
  'schedule-button-tooltip.validation.no-permission': '您没有计划发布的权限',

  /** Title of unschedule release dialog */
  'schedule-button.tooltip': '您确定要取消计划发布该版本吗？',

  /** Description for the confirm button for scheduling a release */
  'schedule-dialog.confirm-button': '是的，计划发布',
  /** Description for the dialog confirming the publish of a release with multiple documents */
  'schedule-dialog.confirm-description_other':
    '<strong>{{title}}</strong> 版本及其 {{count}} 个文档版本将被计划发布。',
  /** Title for unschedule release dialog */
  'schedule-dialog.confirm-title': '计划发布该版本',
  /** Description for warning that the published schedule time is in the past */
  'schedule-dialog.publish-date-in-past-warning': '请选择未来的时间和日期。',
  /** Label for date picker when scheduling a release */
  'schedule-dialog.select-publish-date-label': '计划于',

  /** Confirm button text for the schedule unpublish dialog */
  'schedule-unpublish-dialog.confirm': '计划取消发布',
  /** Description for the schedule unpublish dialog */
  'schedule-unpublish-dialog.description': '选择此文档应取消发布的时间。',
  /** Header for the schedule unpublish dialog */
  'schedule-unpublish-dialog.header': '计划草稿以取消发布',

  /** Placeholder for search of documents in a release */
  'search-documents-placeholder': '搜索文档',

  /** Text for when the release has no errors found */
  'summary.all-documents-errors-found': '所有文档已验证，发现问题',
  /** Text for when the release has validated all documents */
  'summary.all-documents-validated': '所有文档已验证，未发现问题',
  /** Text for when the release was created */
  'summary.created': '创建于 <RelativeTime/>',
  /** Text for when the release is composed of multiple documents */
  'summary.document-count_other': '{{count}} 个文档',
  /** Text for when the release has some errors found */
  'summary.errors-found': '要发布或计划发布此版本，请解决文档中发现的问题',
  /** Text for when the release has no documents */
  'summary.no-documents': '无文档',
  /** Description for the empty state when a cardinality-one release has no documents */
  'summary.no-documents-cardinality-one.description': '此计划草稿不包含文档，它可能已被删除。',
  /** Title for the empty state when a cardinality-one release has no documents */
  'summary.no-documents-cardinality-one.title': '此版本中没有文档',
  /** Text for when the release has not published */
  'summary.not-published': '未发布',
  /** Text for when the release was published */
  'summary.published': '发布于 <RelativeTime/>',
  /** Text for when the release has validated documents */
  'summary.validated-documents': '{{totalCount}} 个文档中已验证 {{validatedCount}} 个',
  /** Text for validation loading indicator */
  'summary.validating-documents': '正在验证文档：{{totalCount}} 个中已完成 {{validatedCount}} 个',

  /** add action type that will be shown in the table*/
  'table-body.action.add': '添加',
  /** Change action type that will be shown in the table*/
  'table-body.action.change': '更改',
  /** Change action type that will be shown in the table*/
  'table-body.action.unpublish': '取消发布',

  /** Header for the document table in the release tool - action */
  'table-header.action': '操作',
  /** Header for the document table in the release tool - Archived */
  'table-header.archivedAt': '已归档',
  /** Header for the document table in the release tool - contributors */
  'table-header.contributors': '贡献者',
  /** Header for the document table in the release tool - created by */
  'table-header.created-by': '创建者',
  /** Header for the document table in the release tool - document preview */
  'table-header.document': '文档',
  /** Header for the document table in the release tool - title */
  'table-header.documents': '文档',
  /** Header for the document table in the release tool - edited */
  'table-header.edited': '已编辑',
  /** Header for the paused scheduled drafts table - intended for */
  'table-header.intended-for': '预定用于',
  /** Header for the document table in the release tool - Published */
  'table-header.published-at': '已发布',
  /** Header for the document table in the release tool - Published */
  'table-header.publishedAt': '已发布',
  /** Header for the scheduled drafts document table in the release tool - published at */
  'table-header.scheduled-draft.published-at': '发布于',
  /** Header for the scheduled drafts document table in the release tool - scheduled for */
  'table-header.scheduled-for': '计划于',
  /** Header for the document table in the release tool - time */
  'table-header.time': '时间',
  /** Header for the  document table in the release tool - release title */
  'table-header.title': 'Release',
  /** Header for the document table in the release tool - type */
  'table-header.type': '类型',
  /** Header for the document table in the release tool - when */
  'table-header.when': '时间',

  /** Text for the release time label for scheduled releases  which has not been scheduled yet*/
  'time.estimated': '预计',
  /** Text for the release time label for scheduled releases  which has been scheduled*/
  'time.scheduled': '已计划',

  /** Text for toast when release failed to archive */
  'toast.archive.error': '归档"<strong>{{title}}</strong>"失败：{{error}}',
  /** Toast error message when bulk scheduling of active drafts fails */
  'toast.confirm-active-scheduled-drafts.error': '计划草稿失败：{{error}}',
  /** Toast message after copying release ID */
  'toast.copy-release-id.success': 'Release ID 已复制到剪贴板',
  /** Toast message after copying release link */
  'toast.copy-release-link.success': 'Release 链接已复制到剪贴板',
  /** Toast message after copying release title */
  'toast.copy-release-title.success': 'Release 标题已复制到剪贴板',
  /** Description for toast when creating new version of document in release failed */
  'toast.create-version.error': '将文档添加到 release 失败：{{error}}',
  /** Description for toast when release deletion failed */
  'toast.delete.error': '删除"<strong>{{title}}</strong>"失败：{{error}}',
  /** Description for toast when release is successfully deleted */
  'toast.delete.success': '"<strong>{{title}}</strong>"release 已成功删除',
  /** Description for toast when release duplication failed */
  'toast.duplicate.error': '复制"<strong>{{title}}</strong>"失败：{{error}}',
  /** Description for toast when release is successfully duplicated */
  'toast.duplicate.success': '"<strong>{{title}}</strong>"release 已被复制。<Link/>',
  /** Link text for toast link to the duplicated release */
  'toast.duplicate.success-link': '查看已复制的 release',
  /** Text for toast when release has been reverted immediately */
  'toast.immediate-revert.success': "'{{title}}' 版本已成功还原",
  /** Text for toast when release failed to publish */
  'toast.publish.error': "发布 '<strong>{{title}}</strong>' 失败：{{error}}",
  /** Text for toast when release has reverted release successfully staged */
  'toast.revert-stage.success': "'{{title}}' 的还原版本已成功创建。<Link/>",
  /** Link text for toast link to the generated revert release */
  'toast.revert-stage.success-link': '查看还原版本',
  /** Text for toast when release failed to revert */
  'toast.revert.error': '还原版本失败：{{error}}',
  /** Text for toast when release failed to schedule */
  'toast.schedule.error': "计划发布 '<strong>{{title}}</strong>' 失败：{{error}}",
  /** Text for toast when release has been scheduled */
  'toast.schedule.success': "'<strong>{{title}}</strong>' 版本已计划发布。",
  /** Text for toast when release failed to unarchive */
  'toast.unarchive.error': "取消归档 '<strong>{{title}}</strong>' 失败：{{error}}",
  /** Text for toast when release failed to unschedule */
  'toast.unschedule.error': "取消计划 '<strong>{{title}}</strong>' 失败：{{error}}",

  /** Text for tooltip when a release has been scheduled */
  'type-picker.tooltip.scheduled': '该版本已计划发布，请取消计划后再更改类型',

  /** Text action in unpublish dialog to cancel */
  'unpublish-dialog.action.cancel': '取消',
  /** Text action in unpublish dialog to unpublish */
  'unpublish-dialog.action.unpublish': '是，在发布时取消发布',
  /** Description for unpublish dialog, explaining that all changes made to this document will be lost */
  'unpublish-dialog.description.lost-changes': '对该文档版本所做的任何更改都将丢失。',
  /** Description for the unpublish dialog, explaining that it will create a draft if no draft exists at time of release */
  'unpublish-dialog.description.to-draft':
    '这将在 <Label>{{title}}</Label> 版本发布时取消发布该文档，并在发布时如果不存在草稿则创建一个草稿。',
  /** Title for the dialog confirming the unpublish of a release */
  'unpublish-dialog.header': '您确定要在发布时取消发布此文档吗？',

  /** Text for when a document is unpublished */
  'unpublish.already-unpublished': '此文档已取消发布。',
  /** Tooltip label for when a document is unpublished */
  'unpublish.no-published-version': '此文档没有已发布的版本。',

  /** Description shown in unschedule relaease dialog */
  'unschedule-dialog.confirm-description': '该版本将不再在计划日期发布',
  /** Title for unschedule release dialog */
  'unschedule-dialog.confirm-title': '您确定要取消计划发布该版本吗？',
})
