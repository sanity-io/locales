import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Label for the "Copy Document URL" document action */
  'action.copy-document-url.label': '复制文档 URL',
  /** Tooltip when action button is disabled because the operation is not ready   */
  'action.delete.disabled.not-ready': '操作尚未准备好',
  /** Tooltip when action button is disabled because the document does not exist */
  'action.delete.disabled.nothing-to-delete': '此文档尚未存在或已被删除',
  /** Label for the "Delete" document action button */
  'action.delete.label': '删除',
  /** Label for the "Delete" document action while the document is being deleted */
  'action.delete.running.label': '正在删除…',
  /** Tooltip when action is disabled because the document is linked to Canvas */
  'action.disabled-by-canvas.tooltip': '由于文档链接到Canvas，某些文档操作被禁用',
  /** Message prompting the user to confirm discarding changes */
  'action.discard-changes.confirm-dialog.confirm-discard-changes':
    '您确定要放弃自上次发布以来的所有更改吗？',
  /** Tooltip when action is disabled because the document has no unpublished changes */
  'action.discard-changes.disabled.no-change': '此文档没有未发布的更改',
  /** Tooltip when action is disabled because the document is not published */
  'action.discard-changes.disabled.not-published': '此文档未发布',
  /** Tooltip when action button is disabled because the operation is not ready   */
  'action.discard-changes.disabled.not-ready': '操作尚未准备好',
  /** Label for the "Discard changes" document action */
  'action.discard-changes.label': '放弃更改',
  /** Tooltip when action is disabled because the operation is not ready   */
  'action.duplicate.disabled.not-ready': '操作尚未准备好',
  /** Tooltip when action is disabled because the document doesn't exist */
  'action.duplicate.disabled.nothing-to-duplicate': '此文档尚未存在，因此没有可复制的内容',
  /** Label for the "Duplicate" document action */
  'action.duplicate.label': '复制',
  /** Label for the "Duplicate" document action while the document is being duplicated */
  'action.duplicate.running.label': '正在复制…',
  /** Tooltip when publish button is disabled because the document is already published, and published time is unavailable.*/
  'action.publish.already-published.no-time-ago.tooltip': '已经发布',
  /** Tooltip when publish button is disabled because the document is already published.*/
  'action.publish.already-published.tooltip': '已发布 {{timeSincePublished}} 前',
  /** Tooltip when action is disabled because the studio is not ready.*/
  'action.publish.disabled.not-ready': '操作尚未准备好',
  /** Label for action when there are pending changes.*/
  'action.publish.draft.label': '发布',
  /** Label for the "Publish" document action */
  'action.publish.label': '发布',
  /** Label for the "Publish" document action when the document has live edit enabled.*/
  'action.publish.live-edit.label': '发布',
  /** Fallback tooltip for the "Publish" document action when publish is invoked for a document with live edit enabled.*/
  'action.publish.live-edit.publish-disabled': '由于此文档类型启用了实时编辑，无法发布',
  /** Tooltip for the "Publish" document action when the document has live edit enabled.*/
  'action.publish.live-edit.tooltip': '此内容类型已启用实时编辑，您进行更改时会自动发布',
  /** Tooltip when publish button is disabled because there are no changes.*/
  'action.publish.no-changes.tooltip': '没有未发布的更改',
  /** Label for the "Publish" document action when there are no changes.*/
  'action.publish.published.label': '已发布',
  /** Label for the "Publish" document action while publish is being executed.*/
  'action.publish.running.label': '正在发布…',
  /** Tooltip when the "Publish" document action is disabled due to validation issues */
  'action.publish.validation-issues.tooltip': '在此文档可以发布之前，需要修复验证错误',
  /** Tooltip when publish button is waiting for validation and async tasks to complete.*/
  'action.publish.waiting': '等待任务完成后才能发布',
  /** Message prompting the user to confirm that they want to restore to an earlier revision*/
  'action.restore.confirm.message': '您确定要还原此文档吗？',
  /** Fallback tooltip for when user is looking at the initial revision */
  'action.restore.disabled.cannot-restore-initial': '您不能还原到初始版本',
  /** Label for the "Restore" document action */
  'action.restore.label': '还原',
  /** Default tooltip for the action */
  'action.restore.tooltip': '还原到此版本',
  /** Tooltip when action is disabled because the document is not already published */
  'action.unpublish.disabled.not-published': '此文档未发布',
  /** Tooltip when action is disabled because the operation is not ready   */
  'action.unpublish.disabled.not-ready': '操作未就绪',
  /** Label for the "Unpublish" document action */
  'action.unpublish.label': '取消发布',
  /** Fallback tooltip for the Unpublish document action when publish is invoked for a document with live edit enabled.*/
  'action.unpublish.live-edit.disabled': '此文档已启用实时编辑，无法取消发布',

  /** Description for the archived release banner, rendered when viewing the history of a version document from the publihed view */
  'banners.archived-release.description':
    '您正在查看作为<VersionBadge>发布</VersionBadge>的一部分而存档的只读文档。它不能被编辑',
  /** The explanation displayed when a user attempts to create a new draft document, but the draft model is not switched on */
  'banners.choose-new-document-destination.cannot-create-draft-document': undefined, // 'Cannot create a draft document.'
  /** The explanation displayed when a user attempts to create a new published document, but the schema type doesn't support live-editing */
  'banners.choose-new-document-destination.cannot-create-published-document': undefined, // 'Cannot create a published document.'
  /** The prompt displayed when a user must select a different perspective in order to create a document */
  'banners.choose-new-document-destination.choose-destination': undefined, // 'Choose a destination for this document:'
  /** The explanation displayed when a user attempts to create a new document in a release, but the selected release is inactive */
  'banners.choose-new-document-destination.release-inactive': undefined, // 'The <VersionBadge>{{title}}</VersionBadge> release is not active.'
  /** The text for the restore button on the deleted document banner */
  'banners.deleted-document-banner.restore-button.text': '还原最新版本',
  /** The text content for the deleted document banner */
  'banners.deleted-document-banner.text': '此文档已被删除。',
  /** The text content for the deprecated document type banner */
  'banners.deprecated-document-type-banner.text': '此文档类型已被弃用。',
  /** The text for publish action for discarding the version */
  'banners.live-edit-draft-banner.discard.tooltip': '放弃草稿',
  /** The text for publish action for the draft banner */
  'banners.live-edit-draft-banner.publish.tooltip': '发布以继续编辑',
  /** The text content for the live edit document when it's a draft */
  'banners.live-edit-draft-banner.text':
    '类型 <strong>{{schemaType}}</strong> 已启用 <code>liveEdit</code>，但此文档的草稿版本存在。发布或放弃草稿以继续实时编辑。',
  /** The label for the "compare draft" action */
  'banners.obsolete-draft.actions.compare-draft.text': undefined, // 'Compare draft'
  /** The label for the "discard draft" action */
  'banners.obsolete-draft.actions.discard-draft.text': undefined, // 'Discard draft'
  /** The label for the "publish draft" action */
  'banners.obsolete-draft.actions.publish-draft.text': undefined, // 'Publish draft'
  /** The warning displayed when editing a document that has an obsolete draft because the draft model is not switched on */
  'banners.obsolete-draft.draft-model-inactive.text': undefined, // 'The workspace does not have drafts enabled, but a draft version of this document exists.'
  /** The text for the permission check banner if the user only has multiple roles, but they do not allow publishing this document */
  'banners.permission-check-banner.missing-permission_create_other':
    '您的角色<Roles/>没有权限创建此文档。',
  /** The text for the permission check banner if the user only has multiple roles, but they do not allow editing this document */
  'banners.permission-check-banner.missing-permission_update_other':
    '您的角色<Roles/>没有权限更新此文档。',
  /** The pending text for the request permission button that appears for viewer roles */
  'banners.permission-check-banner.request-permission-button.sent': '编辑请求已发送',
  /** The text for the request permission button that appears for viewer roles */
  'banners.permission-check-banner.request-permission-button.text': '申请编辑权限',
  /** Description for the archived release banner, rendered when viewing the history of a version document from the published view */
  'banners.published-release.description':
    '您正在查看作为<VersionBadge>发布</VersionBadge>的一部分而发布的只读文档。它不能被编辑',
  /** The text for the reload button */
  'banners.reference-changed-banner.reason-changed.reload-button.text': '重新加载引用',
  /** The text for the reference change banner if the reason is that the reference has been changed */
  'banners.reference-changed-banner.reason-changed.text': '自您打开以来，此引用已更改。',
  /** The text for the close button */
  'banners.reference-changed-banner.reason-removed.close-button.text': '关闭引用',
  /** The text for the reference change banner if the reason is that the reference has been deleted */
  'banners.reference-changed-banner.reason-removed.text': '自您打开以来，此引用已被移除。',
  /** The text that appears for the action button to add the current document to the global release */
  'banners.release.action.add-to-release': '添加到发布',
  /** The text that appears for the action button to add the current document to the global release */
  'banners.release.action.open-to-edit': '打开发布以编辑',
  /** Toast description in case an error occurs when adding a document to a release  */
  'banners.release.error.description': '将文档添加到发布时发生错误：{{message}}',
  /** Toast title in case an error occurs when adding a document to a release  */
  'banners.release.error.title': '添加文档到发布时出错',
  /** The text for the banner that appears when a document only has versions but is in a draft or published pinned release */
  'banners.release.navigate-to-edit-description': '该文档仅存在于',
  /** The text for the banner that appears when a document only has versions but is in a draft or published pinned release */
  'banners.release.navigate-to-edit-description-end_other': '发布中',
  /** The text for the banner that appears when there are multiple versions but no drafts or published, more than one extra releases */
  'banners.release.navigate-to-edit-description-multiple_other':
    '此文档是<VersionBadge/>发布的一部分，以及{{count}}个更多发布',
  /** The text for the banner that appears when a document only has one version but is in a draft or published pinned release */
  'banners.release.navigate-to-edit-description-single': '此文档是<VersionBadge/>发布的一部分',
  /** The text for the banner that appears when a document is not in the current global release */
  'banners.release.not-in-release': '不在<Label>{{title}}</Label>发布中。',
  /** Description of toast that will appear in case of latency between the user adding a document to a release and the UI reflecting it */
  'banners.release.waiting.description': '请耐心等待，文档正在添加到发布中。这通常不会超过几秒钟。',
  /** Title of toast that will appear in case of latency between the user adding a document to a release and the UI reflecting it */
  'banners.release.waiting.title': '正在将文档添加到发布…',
  /** The text for the revision not found banner */
  'banners.revision-not-found.description':
    '我们找不到所选的文档修订版，请从历史列表中选择另一个条目。',
  /** The text content for the unpublished document banner when is part of a release */
  'banners.unpublished-release-banner.text':
    '此文档将作为<VersionBadge>{{title}}</VersionBadge>发布的一部分而被取消发布',
  /** The text content for the unpublished document banner letting the user know that the current published version is being shown */
  'banners.unpublished-release-banner.text-with-published': undefined, // 'Showing the current <strong>published</strong> version:'

  /** Browser/tab title when creating a new document of a given type */
  'browser-document-title.new-document': '新建 {{schemaType}}',
  /** Browser/tab title when editing a document where the title cannot be resolved from preview configuration */
  'browser-document-title.untitled-document': '无标题',

  /** The action menu button aria-label */
  'buttons.action-menu-button.aria-label': '打开文档操作',
  /** The action menu button tooltip */
  'buttons.action-menu-button.tooltip': '文档操作',
  /** The aria-label for the split pane button on the document panel header */
  'buttons.split-pane-button.aria-label': '向右分割窗格',
  /** The tool tip for the split pane button on the document panel header */
  'buttons.split-pane-button.tooltip': '向右分割窗格',
  /** The title for the close button on the split pane on the document panel header */
  'buttons.split-pane-close-button.title': '关闭分割窗格',
  /** The title for the close group button on the split pane on the document panel header */
  'buttons.split-pane-close-group-button.title': '关闭窗格组',

  /** The text for the canvas linked banner action button */
  'canvas.banner.edit-in-canvas-action': '在Canvas中编辑',
  /** The text for the canvas linked banner when the document is a draft */
  'canvas.banner.linked-text.draft': '此草稿文档已链接到Canvas',
  /** The text for the canvas linked banner when the document is a live document */
  'canvas.banner.linked-text.published': '此现行文档已链接到Canvas',
  /** The text for the canvas linked banner when the document is a version document */
  'canvas.banner.linked-text.version': '此版本文档已链接到Canvas',
  /** The text for the canvas linked banner popover button */
  'canvas.banner.popover-button-text': '了解更多',
  /** The description for the canvas linked banner popover */
  'canvas.banner.popover-description':
    'Canvas允许您在一个自由形式的编辑器中创作，这个编辑器会自动将内容映射回Studio作为结构化内容 - 当您输入时。',
  /** The heading for the canvas linked banner popover */
  'canvas.banner.popover-heading': '首先构思创作',

  /** The description for the changes banner */
  'changes.banner.description': '显示此文档<strong>{{perspective}}</strong>版本的历史。',
  /** The tooltip for the changes banner */
  'changes.banner.tooltip': '此视图显示了此文档特定版本中发生的更改。选择不同的版本以查看其更改',
  /** The label used in the changes inspector for the from selector */
  'changes.from.label': '从',
  /* The label for the history tab in the changes inspector*/
  'changes.tab.history': '历史',
  /* The label for the review tab in the changes inspector*/
  'changes.tab.review-changes': '审查变更',
  /** The label used in the changes inspector for the to selector */
  'changes.to.label': '到',

  /** The error message shown when the specified document comparison mode is not supported */
  'compare-version.error.invalidModeParam': '“{{input}}”不是受支持的文档比较模式。',
  /** The error message shown when the next document for comparison could not be extracted from the URL */
  'compare-version.error.invalidNextDocumentParam': '下一个文档参数无效。',
  /** The error message shown when the document comparison URL could not be parsed */
  'compare-version.error.invalidParams.title': '无法比较文档',
  /** The error message shown when the previous document for comparison could not be extracted from the URL */
  'compare-version.error.invalidPreviousDocumentParam': '上一个文档参数无效。',

  /** The text for the tooltip when the "Compare versions" action for a document is disabled */
  'compare-versions.menu-item.disabled-reason': '没有其他版本的文档可以比较。',
  /** The text for the "Compare versions" action for a document */
  'compare-versions.menu-item.title': '比较版本',
  /** The string used to label draft documents */
  'compare-versions.status.draft': '草稿',
  /** The string used to label published documents */
  'compare-versions.status.published': '已发布',
  /** The title used when comparing versions of a document */
  'compare-versions.title': '比较版本',

  /** The text in the "Cancel" button in the confirm delete dialog that cancels the action and closes the dialog */
  'confirm-delete-dialog.cancel-button.text': '取消',
  /** Used in `confirm-delete-dialog.cdr-summary.title` */
  'confirm-delete-dialog.cdr-summary.document-count_other': '{{count}}个文档',
  /** The text that appears in the subtitle `<summary>` that lists the datasets below the title */
  'confirm-delete-dialog.cdr-summary.subtitle_other': '数据集：{{datasets}}',
  /** The text that appears in the subtitle `<summary>` that lists the datasets below the title */
  'confirm-delete-dialog.cdr-summary.subtitle_unavailable_other': '不可用的数据集',
  /** The text that appears in the title `<summary>` that includes the list of CDRs (plural) */
  'confirm-delete-dialog.cdr-summary.title_other': '{{documentCount}} 在 {{count}} 个数据集中',
  /** Appears when hovering over the copy button to copy */
  'confirm-delete-dialog.cdr-table.copy-id-button.tooltip': '复制 ID 到剪贴板',
  /** The header for the dataset column in the list of cross-dataset references found */
  'confirm-delete-dialog.cdr-table.dataset.label': '数据集',
  /** The header for the document ID column in the list of cross-dataset references found */
  'confirm-delete-dialog.cdr-table.document-id.label': '文档 ID',
  /** The toast title when the copy button has been clicked but copying failed */
  'confirm-delete-dialog.cdr-table.id-copied-toast.title-failed': '复制文档 ID 失败',
  /** The header for the project ID column in the list of cross-dataset references found */
  'confirm-delete-dialog.cdr-table.project-id.label': '项目 ID',
  /** The text in the "Delete anyway" button in the confirm delete dialog that confirms the action */
  'confirm-delete-dialog.confirm-anyway-button.text_delete': '仍然删除',
  /** The text in the "Unpublish anyway" button in the confirm delete dialog that confirms the action */
  'confirm-delete-dialog.confirm-anyway-button.text_unpublish': '仍然取消发布',
  /** The text in the "Delete now" button in the confirm delete dialog that confirms the action */
  'confirm-delete-dialog.confirm-button.text_delete': '现在删除',
  /** The text in the "Unpublish now" button in the confirm delete dialog that confirms the action */
  'confirm-delete-dialog.confirm-button.text_unpublish': '现在取消发布',
  /** If no referring documents are found, this text appears above the cancel and confirmation buttons */
  'confirm-delete-dialog.confirmation.text_delete': '您确定要删除“<DocumentTitle/>”吗？',
  /** If no referring documents are found, this text appears above the cancel and confirmation buttons */
  'confirm-delete-dialog.confirmation.text_unpublish': '您确定要取消发布“<DocumentTitle/>”吗？',
  /** The text body of the error dialog. */
  'confirm-delete-dialog.error.message.text': '加载引用文档时发生错误。',
  /** The text in the retry button of the confirm delete dialog if an error occurred. */
  'confirm-delete-dialog.error.retry-button.text': '重试',
  /** The header of the confirm delete dialog if an error occurred while the confirm delete dialog was open. */
  'confirm-delete-dialog.error.title.text': '错误',
  /** The header of the confirm delete dialog */
  'confirm-delete-dialog.header.text_delete': '删除文档？',
  /** The header of the confirm delete dialog */
  'confirm-delete-dialog.header.text_unpublish': '取消发布文档？',
  /** The text that appears while the referring documents are queried */
  'confirm-delete-dialog.loading.text': '正在查找引用文档…',
  /** Shown if there are references to other documents but the user does not have the permission to see the relevant document IDs */
  'confirm-delete-dialog.other-reference-count.title_other': '未显示的其他 {{count}} 个引用',
  /** Text in the tooltip of this component if hovering over the info icon */
  'confirm-delete-dialog.other-reference-count.tooltip':
    '由于相关数据集缺少访问令牌，我们无法显示这些引用的元数据。',
  /** Appears when unable to render a document preview in the referring document list */
  'confirm-delete-dialog.preview-item.preview-unavailable.subtitle': 'ID：{{documentId}}',
  /** Appears when unable to render a document preview in the referring document list */
  'confirm-delete-dialog.preview-item.preview-unavailable.title': '预览不可用',
  /** Warns the user of affects to other documents if the action is confirmed (delete) */
  'confirm-delete-dialog.referential-integrity-disclaimer.text_delete':
    '如果您删除此文档，引用它的文档将无法再访问它。',
  /** Warns the user of affects to other documents if the action is confirmed (unpublish) */
  'confirm-delete-dialog.referential-integrity-disclaimer.text_unpublish':
    '如果您取消发布此文档，引用它的文档将无法再访问它。',
  /** Tells the user the count of how many other referring documents there are before listing them. (plural) */
  'confirm-delete-dialog.referring-document-count.text_other':
    '{{count}} 个文档引用了“<DocumentTitle/>”',
  /** Describes the list of documents that refer to the one trying to be deleted (delete) */
  'confirm-delete-dialog.referring-documents-descriptor.text_delete':
    '您可能无法删除“<DocumentTitle/>”，因为以下文档引用了它：',
  /** Describes the list of documents that refer to the one trying to be deleted (unpublish) */
  'confirm-delete-dialog.referring-documents-descriptor.text_unpublish':
    '您可能无法取消发布“<DocumentTitle/>”，因为以下文档引用了它：',

  /** The text for the cancel button in the confirm dialog used in document action shortcuts if none is provided */
  'confirm-dialog.cancel-button.fallback-text': '取消',
  /** The text for the confirm button in the confirm dialog used in document action shortcuts if none is provided */
  'confirm-dialog.confirm-button.fallback-text': '确认',

  /** For the default structure definition, the title for the "Content" pane */
  'default-definition.content-title': '内容',

  /** The text shown if there was an error while getting the document's title via a preview value */
  'doc-title.error.text': '错误：{{errorMessage}}',
  /** The text shown if the preview value for a document is non-existent or empty */
  'doc-title.fallback.text': '无标题',
  /** The text shown if a document's title via a preview value cannot be determined due to an unknown schema type */
  'doc-title.unknown-schema-type.text': '未知的模式类型：{{schemaType}}',

  /** Tooltip text shown for the close button of the document inspector */
  'document-inspector.close-button.tooltip': '关闭',
  /** The title shown in the dialog header, when inspecting a valid document */
  'document-inspector.dialog.title': '正在检查<DocumentTitle/>',
  /** The title shown in the dialog header, when the document being inspected is not created yet/has no value */
  'document-inspector.dialog.title-no-value': '无值',
  /** Title shown for menu item that opens the "Inspect" dialog */
  'document-inspector.menu-item.title': '检查',
  /** the placeholder text for the search input on the inspect dialog */
  'document-inspector.search.placeholder': '搜索',
  /** The "parsed" view mode, meaning the JSON is searchable, collapsible etc */
  'document-inspector.view-mode.parsed': '已解析',
  /** The "raw" view mode, meaning the JSON is presented syntax-highlighted, but with no other features - optimal for copying */
  'document-inspector.view-mode.raw-json': '原始 JSON',

  /** The text for when a form is hidden */
  'document-view.form-view.form-hidden': '此表单已隐藏',
  /** Fallback title shown when a form title is not provided */
  'document-view.form-view.form-title-fallback': '无标题',
  /** The text for when the form view is loading a document */
  'document-view.form-view.loading': '正在加载文档…',
  /** The description of the sync lock toast on the form view */
  'document-view.form-view.sync-lock-toast.description':
    '文档同步时请稍候。这通常在文档发布后立即发生，不应超过几秒钟',
  /** The title of the sync lock toast on the form view */
  'document-view.form-view.sync-lock-toast.title': '正在同步文档…',

  /** The description for the document favorite action */
  'document.favorites.add-to-favorites': '添加到收藏夹',
  /** The description for the document unfavorite action */
  'document.favorites.remove-from-favorites': '从收藏夹中移除',

  /** The description for the events inspector when we can't load the document so we default to compare with published */
  'events.compare-with-published.description':
    '由于您计划的历史保留政策，我们无法加载此文档的更改，这显示了<strong>{{version}}</strong>版本与<strong>已发布</strong>版本的比较。',
  /** The title for the events inspector when we can't load the document so we default to compare with published */
  'events.compare-with-published.title': '与已发布版本比较',
  /**The title for the menu items that will be shown when expanding a publish release event to inspect the document */
  'events.inspect.release': '检查<VersionBadge>{{releaseTitle}}</VersionBadge>文档',
  /**The title for the menu items that will be shown when expanding a publish draft event to inspect the draft document*/
  'events.open.draft': '打开<VersionBadge>草稿</VersionBadge>文档',
  /**The title for the menu items that will be shown when expanding a publish release event to inspect the release*/
  'events.open.release': '打开<VersionBadge>{{releaseTitle}}</VersionBadge>发布',

  /** The loading messaging for when the tooltip is still loading permission info */
  'insufficient-permissions-message-tooltip.loading-text': '正在加载…',

  /** --- Menu items --- */
  /** The menu item group title to use for the Action menu items */
  'menu-item-groups.actions-group': '操作',
  /** The menu item group title to use for the Layout menu items */
  'menu-item-groups.layout-group': '布局',
  /** The menu item group title to use for the Sort menu items */
  'menu-item-groups.sorting-group': '排序',

  /** The menu item title to use the compact view */
  'menu-items.layout.compact-view': '紧凑视图',
  /** The menu item title to use the detailed view */
  'menu-items.layout.detailed-view': '详细视图',
  /** The menu item title to Sort by Created */
  'menu-items.sort-by.created': '按创建时间排序',
  /** The menu item title to Sort by Last Edited */
  'menu-items.sort-by.last-edited': '按最后编辑排序',

  /** The link text of the no document type screen that appears directly below the subtitle */
  'no-document-types-screen.link-text': '了解如何添加文档类型 →',
  /** The subtitle of the no document type screen that appears directly below the title */
  'no-document-types-screen.subtitle': '请在您的模式中至少定义一个文档类型。',
  /** The title of the no document type screen */
  'no-document-types-screen.title': '无文档类型',

  /** Text shown on back button visible on smaller breakpoints */
  'pane-header.back-button.text': '返回',
  /** tooltip text (via `title` attribute) for the menu button */
  'pane-header.context-menu-button.tooltip': '显示菜单',
  /** Appears in a document list pane header if there are more than one option for create. This is the label for that menu */
  'pane-header.create-menu.label': '创建',
  /** Tooltip displayed on the create new button in document lists */
  'pane-header.create-new-button.tooltip': '创建新文档',
  /** The `aria-label` for the disabled button in the pane header if create permissions are granted */
  'pane-header.disabled-created-button.aria-label': '权限不足',

  /** The text shown in the tooltip of pane item previews of documents if there are unpublished edits */
  'pane-item.draft-status.has-draft.tooltip': '<RelativeTime/>编辑过',
  /** The text shown in the tooltip of pane item previews of documents if there are no unpublished edits */
  'pane-item.draft-status.no-draft.tooltip': '没有未发布的编辑',
  /** The subtitle tor pane item previews if there isn't a matching schema type found */
  'pane-item.missing-schema-type.subtitle': '文档：<Code>{{documentId}}</Code>',
  /** The title tor pane item previews if there isn't a matching schema type found */
  'pane-item.missing-schema-type.title': '未找到类型 <Code>{{documentType}}</Code> 的架构',
  /** The text shown in the tooltip of pane item previews of documents if there are unpublished edits */
  'pane-item.published-status.has-published.tooltip': '已发布 <RelativeTime/>',
  /** The text shown in the tooltip of pane item previews of documents if there are no unpublished edits */
  'pane-item.published-status.no-published.tooltip': '没有未发布的编辑',

  /** The text used in the document header title if there is an error */
  'panes.document-header-title.error.text': '错误：{{error}}',
  /** The text used in the document header title if creating a new item */
  'panes.document-header-title.new.text': '新建 {{schemaType}}',
  /** The text used in the document header title if no other title can be determined */
  'panes.document-header-title.untitled.text': '无标题',
  /** The help text saying that we'll retry fetching the document list */
  'panes.document-list-pane.error.retrying': '正在重试…',
  /** The error text on the document list pane */
  'panes.document-list-pane.error.text': '错误：<Code>{{error}}</Code>',
  /** The error text on the document list pane */
  'panes.document-list-pane.error.text.dev': '错误：<Code>{{error}}</Code>',
  /** The error text on the document list pane if the browser appears to be offlline */
  'panes.document-list-pane.error.text.offline': '互联网连接似乎已断开。',
  /** The error title on the document list pane */
  'panes.document-list-pane.error.title': '无法获取列表项',
  'panes.document-list-pane.error.will-retry-automatically_other': '正在重试… (#{{count}})。',
  /** The text of the document list pane if more than a maximum number of documents are returned */
  'panes.document-list-pane.max-items.text': '最多显示 {{limit}} 个文档',
  /** The text of the document list pane if no documents are found for a specified type */
  'panes.document-list-pane.no-documents-of-type.text': '此类型无文档',
  /** The text of the document list pane if no documents are found */
  'panes.document-list-pane.no-documents.text': '未找到结果',
  /** The text of the document list pane if no documents are found matching specified criteria */
  'panes.document-list-pane.no-matching-documents.text': '没有匹配的文档',
  /** The search input for the search input on the document list pane */
  'panes.document-list-pane.reconnecting': '尝试连接中…',
  /** The aria-label for the search input on the document list pane */
  'panes.document-list-pane.search-input.aria-label': '搜索列表',
  /** The search input for the search input on the document list pane */
  'panes.document-list-pane.search-input.placeholder': '搜索列表',
  /** The summary title when displaying an error for a document operation result */
  'panes.document-operation-results.error.summary.title': '详情',
  /** The text when a generic operation failed (fallback, generally not shown)  */
  'panes.document-operation-results.operation-error': '在 {{context}} 过程中发生错误',
  /** The text when a delete operation failed  */
  'panes.document-operation-results.operation-error_delete':
    '尝试删除此文档时发生错误。这通常意味着有其他文档引用了它。',
  /** The text when an unpublish operation failed  */
  'panes.document-operation-results.operation-error_unpublish':
    '尝试取消发布此文档时发生错误。这通常意味着有其他文档引用了它。',
  /** The text when a generic operation succeeded (fallback, generally not shown)  */
  'panes.document-operation-results.operation-success': '文档 {{context}} 操作成功',
  /** The text when copy URL operation succeeded  */
  'panes.document-operation-results.operation-success_copy-url': '文档 URL 已复制到剪贴板',
  /**  */
  'panes.document-operation-results.operation-success_createVersion':
    '<Strong>{{title}}</Strong>已添加到发布',
  /** The text when a delete operation succeeded  */
  'panes.document-operation-results.operation-success_delete': '文档已成功删除',
  /** The text when a discard changes operation succeeded  */
  'panes.document-operation-results.operation-success_discardChanges':
    '自上次发布以来的所有更改现已被丢弃。被丢弃的草稿仍可从历史记录中恢复',
  /** The text when a duplicate operation succeeded  */
  'panes.document-operation-results.operation-success_duplicate': '文档已成功复制',
  /** The text when a publish operation succeeded  */
  'panes.document-operation-results.operation-success_publish': '文档已发布',
  /** The text when a restore operation succeeded  */
  'panes.document-operation-results.operation-success_restore': '<Strong>{{title}}</Strong> 已恢复',
  /** The text when an unpublish operation succeeded  */
  'panes.document-operation-results.operation-success_unpublish':
    '文档已取消发布。已从最新发布版本创建了一个草稿。',
  /** The document title shown when document title is "undefined" in operation message */
  'panes.document-operation-results.operation-undefined-title': '无标题',
  /** The loading message for the document not found pane */
  'panes.document-pane.document-not-found.loading': '正在加载文档…',
  /** The text of the document not found pane if the schema is known */
  'panes.document-pane.document-not-found.text':
    '文档类型未定义，无法找到标识符为<Code>{{id}}</Code>的文档。',
  /** The title of the document not found pane if the schema is known */
  'panes.document-pane.document-not-found.title': '未找到文档',
  /** The text of the document not found pane if the schema is not found */
  'panes.document-pane.document-unknown-type.text':
    '此文档的模式类型为<Code>{{documentType}}</Code>，它未在本地内容工作室模式中定义为一种类型。',
  /** The title of the document not found pane if the schema is not found or unknown */
  'panes.document-pane.document-unknown-type.title':
    '未知的文档类型：<Code>{{documentType}}</Code>',
  /** The title of the document not found pane if the schema is unknown */
  'panes.document-pane.document-unknown-type.without-schema.text':
    '此文档不存在，且未为其指定模式类型。',
  /** Default message shown while resolving the structure definition for an asynchronous node */
  'panes.resolving.default-message': '加载中…',
  /** Message shown while resolving the structure definition for an asynchronous node and it is taking a while (more than 5s) */
  'panes.resolving.slow-resolve-message': '仍在加载…',
  /** The text to display when type is missing */
  'panes.unknown-pane-type.missing-type.text': '结构项缺少必需的<Code>type</Code>属性。',
  /** The title of the unknown pane */
  'panes.unknown-pane-type.title': '未知的面板类型',
  /** The text to display when type is unknown */
  'panes.unknown-pane-type.unknown-type.text': '类型为<Code>{{type}}</Code>的结构项不是已知实体。',

  /** The text for the "Open preview" action for a document */
  'production-preview.menu-item.title': '打开预览',

  /** The text for the confirm button in the request permission dialog used in the permissions banner */
  'request-permission-dialog.confirm-button.text': '发送请求',
  /** The description text for the request permission dialog used in the permissions banner */
  'request-permission-dialog.description.text':
    '您的请求将发送给项目管理员。如果您愿意，您也可以附加一条备注',
  /** The header/title for the request permission dialog used in the permissions banner */
  'request-permission-dialog.header.text': '请求编辑权限',
  /** The text describing the note input for the request permission dialog used in the permissions banner */
  'request-permission-dialog.note-input.description.text': '如果您愿意，您可以添加备注',
  /** The placeholder for the note input in the request permission dialog used in the permissions banner */
  'request-permission-dialog.note-input.placeholder.text': '添加备注...',
  /** The error/warning text in the request permission dialog when the user's request has been declined */
  'request-permission-dialog.warning.denied.text': '您访问此项目的请求已被拒绝。',
  /** The error/warning text in the request permission dialog when the user's request has been denied due to too many outstanding requests */
  'request-permission-dialog.warning.limit-reached.text':
    '您已达到所有项目角色请求的限制。请稍后再提交请求或联系管理员寻求帮助。',

  /** Label for button when status is saved */
  'status-bar.document-status-pulse.status.saved.text': '已保存',
  /** Label for button when status is syncing */
  'status-bar.document-status-pulse.status.syncing.text': '正在保存...',
  /** Accessibility label indicating when the document was last published, in relative time, eg "3 weeks ago" */
  'status-bar.publish-status-button.last-published-time.aria-label': '最后发布时间{{relativeTime}}',
  /** Text for tooltip showing explanation of timestamp/relative time, eg "Last published <RelativeTime/>" */
  'status-bar.publish-status-button.last-published-time.tooltip': '最后发布时间<RelativeTime/>',
  /** Accessibility label indicating when the document was last updated, in relative time, eg "2 hours ago" */
  'status-bar.publish-status-button.last-updated-time.aria-label': '最后更新时间{{relativeTime}}',
  /** Text for tooltip showing explanation of timestamp/relative time, eg "Last updated <RelativeTime/>" */
  'status-bar.publish-status-button.last-updated-time.tooltip': '最后更新时间<RelativeTime/>',
  /** Aria label for the button */
  'status-bar.review-changes-button.aria-label': '审查更改',
  /** Label for button when status is saved */
  'status-bar.review-changes-button.status.saved.text': '已保存！',
  /** Label for button when status is syncing */
  'status-bar.review-changes-button.status.syncing.text': '正在保存...',
  /** Text for the secondary text for tooltip for the button */
  'status-bar.review-changes-button.tooltip.changes-saved': '更改已保存',
  /** Primary text for tooltip for the button */
  'status-bar.review-changes-button.tooltip.text': '审查更改',

  /** The text that appears in side the documentation link */
  'structure-error.docs-link.text': '查看文档',
  /** Labels the error message or error stack of the structure error screen */
  'structure-error.error.label': '错误',
  /** The header that appears at the top of the error screen */
  'structure-error.header.text': '读取结构时遇到错误',
  /** The text in the reload button to retry rendering the structure */
  'structure-error.reload-button.text': '重新加载',
  /** Labels the structure path of the structure error screen */
  'structure-error.structure-path.label': '结构路径',

  /** The aria label for the menu button in the timeline item */
  'timeline-item.menu-button.aria-label': '打开操作菜单',
  /** The text for the tooltip in menu button the timeline item */
  'timeline-item.menu-button.tooltip': '操作',
  /** The text for the collapse action in the timeline item menu */
  'timeline-item.menu.action-collapse': '折叠',
  /** The text for the expand action in the timeline item menu */
  'timeline-item.menu.action-expand': '展开',
  /** The text for the published event menu tooltip when the release is not found */
  'timeline-item.not-found-release.tooltip': '未找到带有 id "{{releaseId}}" 的发布',
})
