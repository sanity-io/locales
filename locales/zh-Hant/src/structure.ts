import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Label for the "Copy Document URL" document action */
  'action.copy-document-url.label': '複製文件 URL',
  /** Tooltip when action button is disabled because the operation is not ready   */
  'action.delete.disabled.not-ready': '操作尚未就緒',
  /** Tooltip when action button is disabled because the document does not exist */
  'action.delete.disabled.nothing-to-delete': '此文件尚未存在或已被刪除',
  /** Label for the "Delete" document action button */
  'action.delete.label': '刪除',
  /** Label for the "Delete" document action while the document is being deleted */
  'action.delete.running.label': '正在刪除…',
  /** Tooltip when action is disabled because the document is linked to Canvas */
  'action.disabled-by-canvas.tooltip': undefined, // 'Some document actions are disabled for documents linked to Canvas'
  /** Message prompting the user to confirm discarding changes */
  'action.discard-changes.confirm-dialog.confirm-discard-changes':
    '您確定要放棄自上次發布以來的所有更改嗎？',
  /** Tooltip when action is disabled because the document has no unpublished changes */
  'action.discard-changes.disabled.no-change': '此文件沒有未發布的更改',
  /** Tooltip when action is disabled because the document is not published */
  'action.discard-changes.disabled.not-published': '此文件尚未發布',
  /** Tooltip when action button is disabled because the operation is not ready   */
  'action.discard-changes.disabled.not-ready': '操作尚未就緒',
  /** Label for the "Discard changes" document action */
  'action.discard-changes.label': '捨棄更改',
  /** Tooltip when action is disabled because the operation is not ready   */
  'action.duplicate.disabled.not-ready': '操作尚未就緒',
  /** Tooltip when action is disabled because the document doesn't exist */
  'action.duplicate.disabled.nothing-to-duplicate': '此文件尚未存在，因此沒有可複製的內容',
  /** Label for the "Duplicate" document action */
  'action.duplicate.label': '複製',
  /** Label for the "Duplicate" document action while the document is being duplicated */
  'action.duplicate.running.label': '正在複製…',
  /** Tooltip when publish button is disabled because the document is already published, and published time is unavailable.*/
  'action.publish.already-published.no-time-ago.tooltip': '已經發布',
  /** Tooltip when publish button is disabled because the document is already published.*/
  'action.publish.already-published.tooltip': '{{timeSincePublished}}前發布',
  /** Tooltip when action is disabled because the studio is not ready.*/
  'action.publish.disabled.not-ready': '操作尚未就緒',
  /** Label for action when there are pending changes.*/
  'action.publish.draft.label': '發布',
  /** Label for the "Publish" document action */
  'action.publish.label': '發布',
  /** Label for the "Publish" document action when the document has live edit enabled.*/
  'action.publish.live-edit.label': '發布',
  /** Fallback tooltip for the "Publish" document action when publish is invoked for a document with live edit enabled.*/
  'action.publish.live-edit.publish-disabled': '由於此文件類型啟用了即時編輯，無法發布',
  /** Tooltip for the "Publish" document action when the document has live edit enabled.*/
  'action.publish.live-edit.tooltip': '此內容類型已啟用即時編輯，當您進行更改時將自動發布',
  /** Tooltip when publish button is disabled because there are no changes.*/
  'action.publish.no-changes.tooltip': '沒有未發布的更改',
  /** Label for the "Publish" document action when there are no changes.*/
  'action.publish.published.label': '已發布',
  /** Label for the "Publish" document action while publish is being executed.*/
  'action.publish.running.label': '發布中…',
  /** Tooltip when the "Publish" document action is disabled due to validation issues */
  'action.publish.validation-issues.tooltip': '在此文件可以發布之前，需要修復驗證錯誤',
  /** Tooltip when publish button is waiting for validation and async tasks to complete.*/
  'action.publish.waiting': '等待任務完成後才發布',
  /** Message prompting the user to confirm that they want to restore to an earlier revision*/
  'action.restore.confirm.message': '確定要還原此份文件嗎？',
  /** Fallback tooltip for when user is looking at the initial revision */
  'action.restore.disabled.cannot-restore-initial': '無法還原到初始版本',
  /** Label for the "Restore" document action */
  'action.restore.label': '還原',
  /** Default tooltip for the action */
  'action.restore.tooltip': '還原到此版本',
  /** Tooltip when action is disabled because the document is not already published */
  'action.unpublish.disabled.not-published': '此文件還未發布',
  /** Tooltip when action is disabled because the operation is not ready   */
  'action.unpublish.disabled.not-ready': '操作未就緒',
  /** Label for the "Unpublish" document action */
  'action.unpublish.label': '下架',
  /** Fallback tooltip for the Unpublish document action when publish is invoked for a document with live edit enabled.*/
  'action.unpublish.live-edit.disabled': '此文件已啟用即時編輯，無法下架',

  /** Description for the archived release banner, rendered when viewing the history of a version document from the publihed view */
  'banners.archived-release.description':
    '您正在查看作為<VersionBadge>{{title}}</VersionBadge>一部分而存檔的唯讀文件。它無法被編輯',
  /** The text for the restore button on the deleted document banner */
  'banners.deleted-document-banner.restore-button.text': '還原最新版本',
  /** The text content for the deleted document banner */
  'banners.deleted-document-banner.text': '此文件已刪除。',
  /** The text content for the deprecated document type banner */
  'banners.deprecated-document-type-banner.text': '此文件類型已棄用。',
  /** The text for publish action for discarding the version */
  'banners.live-edit-draft-banner.discard.tooltip': '放棄草稿',
  /** The text for publish action for the draft banner */
  'banners.live-edit-draft-banner.publish.tooltip': '發布以繼續編輯',
  /** The text content for the live edit document when it's a draft */
  'banners.live-edit-draft-banner.text':
    '類型 <strong>{{schemaType}}</strong> 已啟用 <code>liveEdit</code>，但此文件的草稿版本存在。發布或放棄草稿以繼續即時編輯。',
  /** The text for the permission check banner if the user only has multiple roles, but they do not allow publishing this document */
  'banners.permission-check-banner.missing-permission_create_other':
    '你的角色是：<Roles/>，沒有創建此文件的權限。',
  /** The text for the permission check banner if the user only has multiple roles, but they do not allow editing this document */
  'banners.permission-check-banner.missing-permission_update_other':
    '您的角色<Roles/>沒有更新此文件的權限。',
  /** The pending text for the request permission button that appears for viewer roles */
  'banners.permission-check-banner.request-permission-button.sent': '編輯請求已發送',
  /** The text for the request permission button that appears for viewer roles */
  'banners.permission-check-banner.request-permission-button.text': '請求編輯',
  /** Description for the archived release banner, rendered when viewing the history of a version document from the published view */
  'banners.published-release.description':
    '您正在查看作為<VersionBadge>{{title}}</VersionBadge>一部分而發布的唯讀文件。它無法被編輯',
  /** The text for the reload button */
  'banners.reference-changed-banner.reason-changed.reload-button.text': '重新讀取引用',
  /** The text for the reference change banner if the reason is that the reference has been changed */
  'banners.reference-changed-banner.reason-changed.text': '自您打開它以來，此引用已更改。',
  /** The text for the close button */
  'banners.reference-changed-banner.reason-removed.close-button.text': '關閉引用',
  /** The text for the reference change banner if the reason is that the reference has been deleted */
  'banners.reference-changed-banner.reason-removed.text': '自您打開它以來，此引用已刪除。',
  /** The text that appears for the action button to add the current document to the global release */
  'banners.release.action.add-to-release': '添加到發布',
  /** The text that appears for the action button to add the current document to the global release */
  'banners.release.action.open-to-edit': '開啟發布以編輯',
  /** Toast description in case an error occurs when adding a document to a release  */
  'banners.release.error.description': '將文件添加到發布時發生錯誤：{{message}}',
  /** Toast title in case an error occurs when adding a document to a release  */
  'banners.release.error.title': '將文件添加到發布時出錯',
  /** The text for the banner that appears when a document only has versions but is in a draft or published pinned release */
  'banners.release.navigate-to-edit-description': '該文件僅存在於',
  /** The text for the banner that appears when a document only has versions but is in a draft or published pinned release */
  'banners.release.navigate-to-edit-description-end_other': '發布',
  /** The text for the banner that appears when there are multiple versions but no drafts or published, more than one extra releases */
  'banners.release.navigate-to-edit-description-multiple_other':
    '此文件是<VersionBadge/>發布的一部分，以及其他{{count}}個發布',
  /** The text for the banner that appears when a document only has one version but is in a draft or published pinned release */
  'banners.release.navigate-to-edit-description-single': '此文件是<VersionBadge/>發布的一部分',
  /** The text for the banner that appears when a document is not in the current global release */
  'banners.release.not-in-release': '不在<VersionBadge>{{title}}</VersionBadge>發布中。',
  /** Description of toast that will appear in case of latency between the user adding a document to a release and the UI reflecting it */
  'banners.release.waiting.description': '請耐心等待，文件正在添加到發布中。這應該不會超過幾秒鐘。',
  /** Title of toast that will appear in case of latency between the user adding a document to a release and the UI reflecting it */
  'banners.release.waiting.title': '正在將文件添加到發布中…',
  /** The text content for the unpublished document banner when is part of a release */
  'banners.unpublished-release-banner.text':
    '此文件將作為<VersionBadge>{{title}}</VersionBadge>發布的一部分而取消發布',

  /** Browser/tab title when creating a new document of a given type */
  'browser-document-title.new-document': '新建 {{schemaType}}',
  /** Browser/tab title when editing a document where the title cannot be resolved from preview configuration */
  'browser-document-title.untitled-document': '無標題',

  /** The action menu button aria-label */
  'buttons.action-menu-button.aria-label': '打開文件操作',
  /** The action menu button tooltip */
  'buttons.action-menu-button.tooltip': '文件操作',
  /** The aria-label for the split pane button on the document panel header */
  'buttons.split-pane-button.aria-label': '向右分割窗格',
  /** The tool tip for the split pane button on the document panel header */
  'buttons.split-pane-button.tooltip': '向右分割窗格',
  /** The title for the close button on the split pane on the document panel header */
  'buttons.split-pane-close-button.title': '關閉分割窗格',
  /** The title for the close group button on the split pane on the document panel header */
  'buttons.split-pane-close-group-button.title': '關閉窗格組',

  /** The text for the canvas linked banner action button */
  'canvas.banner.edit-in-canvas-action': undefined, // 'Edit in Canvas'
  /** The text for the canvas linked banner when the document is a draft */
  'canvas.banner.linked-text.draft': undefined, // 'This draft document is linked to Canvas'
  /** The text for the canvas linked banner when the document is a live document */
  'canvas.banner.linked-text.published': undefined, // 'This live document is linked to Canvas'
  /** The text for the canvas linked banner when the document is a version document */
  'canvas.banner.linked-text.version': undefined, // 'This version document is linked to Canvas'
  /** The text for the canvas linked banner popover button */
  'canvas.banner.popover-button-text': undefined, // 'Learn more'
  /** The description for the canvas linked banner popover */
  'canvas.banner.popover-description': undefined, // 'Canvas lets you author in a free-form editor that automatically maps back to the Studio as structured content - as you type.'
  /** The heading for the canvas linked banner popover */
  'canvas.banner.popover-heading': undefined, // 'Idea first authoring'

  /** The label used in the changes inspector for the from selector */
  'changes.from.label': '從',
  /* The label for the history tab in the changes inspector*/
  'changes.tab.history': '歷史',
  /* The label for the review tab in the changes inspector*/
  'changes.tab.review-changes': '審查變更',
  /** The label used in the changes inspector for the to selector */
  'changes.to.label': '到',

  /** The error message shown when the specified document comparison mode is not supported */
  'compare-version.error.invalidModeParam': '"{{input}}"不是受支持的文件比較模式。',
  /** The error message shown when the next document for comparison could not be extracted from the URL */
  'compare-version.error.invalidNextDocumentParam': '下一個文件參數無效。',
  /** The error message shown when the document comparison URL could not be parsed */
  'compare-version.error.invalidParams.title': '無法比較文件',
  /** The error message shown when the previous document for comparison could not be extracted from the URL */
  'compare-version.error.invalidPreviousDocumentParam': '上一個文件參數無效。',

  /** The text for the tooltip when the "Compare versions" action for a document is disabled */
  'compare-versions.menu-item.disabled-reason': undefined, // 'There are no other versions of this document to compare.'
  /** The text for the "Compare versions" action for a document */
  'compare-versions.menu-item.title': '比較版本',
  /** The string used to label draft documents */
  'compare-versions.status.draft': '草稿',
  /** The string used to label published documents */
  'compare-versions.status.published': '已發布',
  /** The title used when comparing versions of a document */
  'compare-versions.title': '比較版本',

  /** The text in the "Cancel" button in the confirm delete dialog that cancels the action and closes the dialog */
  'confirm-delete-dialog.cancel-button.text': '取消',
  /** Used in `confirm-delete-dialog.cdr-summary.title` */
  'confirm-delete-dialog.cdr-summary.document-count_other': '{{count}}份文件',
  /** The text that appears in the subtitle `<summary>` that lists the datasets below the title */
  'confirm-delete-dialog.cdr-summary.subtitle_other': '數據集：{{datasets}}',
  /** The text that appears in the subtitle `<summary>` that lists the datasets below the title */
  'confirm-delete-dialog.cdr-summary.subtitle_unavailable_other': '不可用的數據集',
  /** The text that appears in the title `<summary>` that includes the list of CDRs (plural) */
  'confirm-delete-dialog.cdr-summary.title_other':
    '{{documentCount}} 個文件在 {{count}} 個數據集中',
  /** Appears when hovering over the copy button to copy */
  'confirm-delete-dialog.cdr-table.copy-id-button.tooltip': '複製 ID 到剪貼簿',
  /** The header for the dataset column in the list of cross-dataset references found */
  'confirm-delete-dialog.cdr-table.dataset.label': '數據集',
  /** The header for the document ID column in the list of cross-dataset references found */
  'confirm-delete-dialog.cdr-table.document-id.label': '文件 ID',
  /** The toast title when the copy button has been clicked but copying failed */
  'confirm-delete-dialog.cdr-table.id-copied-toast.title-failed': '複製文件 ID 失敗',
  /** The header for the project ID column in the list of cross-dataset references found */
  'confirm-delete-dialog.cdr-table.project-id.label': '項目 ID',
  /** The text in the "Delete anyway" button in the confirm delete dialog that confirms the action */
  'confirm-delete-dialog.confirm-anyway-button.text_delete': '仍要刪除',
  /** The text in the "Unpublish anyway" button in the confirm delete dialog that confirms the action */
  'confirm-delete-dialog.confirm-anyway-button.text_unpublish': '仍要取消發布',
  /** The text in the "Delete now" button in the confirm delete dialog that confirms the action */
  'confirm-delete-dialog.confirm-button.text_delete': '立即刪除',
  /** The text in the "Unpublish now" button in the confirm delete dialog that confirms the action */
  'confirm-delete-dialog.confirm-button.text_unpublish': '立即取消發布',
  /** If no referring documents are found, this text appears above the cancel and confirmation buttons */
  'confirm-delete-dialog.confirmation.text_delete': '確定要刪除「<DocumentTitle/>」嗎？',
  /** If no referring documents are found, this text appears above the cancel and confirmation buttons */
  'confirm-delete-dialog.confirmation.text_unpublish': '確定要下架「<DocumentTitle/>」嗎？',
  /** The text body of the error dialog. */
  'confirm-delete-dialog.error.message.text': '載入引用文件時發生錯誤。',
  /** The text in the retry button of the confirm delete dialog if an error occurred. */
  'confirm-delete-dialog.error.retry-button.text': '重試',
  /** The header of the confirm delete dialog if an error occurred while the confirm delete dialog was open. */
  'confirm-delete-dialog.error.title.text': '錯誤',
  /** The header of the confirm delete dialog */
  'confirm-delete-dialog.header.text_delete': '刪除文件？',
  /** The header of the confirm delete dialog */
  'confirm-delete-dialog.header.text_unpublish': '下架文件？',
  /** The text that appears while the referring documents are queried */
  'confirm-delete-dialog.loading.text': '正在尋找引用文件…',
  /** Shown if there are references to other documents but the user does not have the permission to see the relevant document IDs */
  'confirm-delete-dialog.other-reference-count.title_other': '{{count}} 其他引用未顯示',
  /** Text in the tooltip of this component if hovering over the info icon */
  'confirm-delete-dialog.other-reference-count.tooltip':
    '由於缺少相關數據集的訪問令牌，我們無法顯示這些引用的元數據。',
  /** Appears when unable to render a document preview in the referring document list */
  'confirm-delete-dialog.preview-item.preview-unavailable.subtitle': 'ID: {{documentId}}',
  /** Appears when unable to render a document preview in the referring document list */
  'confirm-delete-dialog.preview-item.preview-unavailable.title': '預覽不可用',
  /** Warns the user of affects to other documents if the action is confirmed (delete) */
  'confirm-delete-dialog.referential-integrity-disclaimer.text_delete':
    '如果您刪除此文件，引用它的文件將無法再訪問它。',
  /** Warns the user of affects to other documents if the action is confirmed (unpublish) */
  'confirm-delete-dialog.referential-integrity-disclaimer.text_unpublish':
    '如果您取消發布此文件，引用它的文件將無法再訪問它。',
  /** Tells the user the count of how many other referring documents there are before listing them. (plural) */
  'confirm-delete-dialog.referring-document-count.text_other':
    '{{count}} 文件引用了“<DocumentTitle/>”',
  /** Describes the list of documents that refer to the one trying to be deleted (delete) */
  'confirm-delete-dialog.referring-documents-descriptor.text_delete':
    '您可能無法刪除“<DocumentTitle/>”，因為以下文件引用了它：',
  /** Describes the list of documents that refer to the one trying to be deleted (unpublish) */
  'confirm-delete-dialog.referring-documents-descriptor.text_unpublish':
    '您可能無法取消發布“<DocumentTitle/>”，因為以下文件引用了它：',

  /** The text for the cancel button in the confirm dialog used in document action shortcuts if none is provided */
  'confirm-dialog.cancel-button.fallback-text': '取消',
  /** The text for the confirm button in the confirm dialog used in document action shortcuts if none is provided */
  'confirm-dialog.confirm-button.fallback-text': '確認',

  /** For the default structure definition, the title for the "Content" pane */
  'default-definition.content-title': '內容',

  /** The text shown if there was an error while getting the document's title via a preview value */
  'doc-title.error.text': '錯誤：{{errorMessage}}',
  /** The text shown if the preview value for a document is non-existent or empty */
  'doc-title.fallback.text': '無標題',
  /** The text shown if a document's title via a preview value cannot be determined due to an unknown schema type */
  'doc-title.unknown-schema-type.text': '未知的架構類型：{{schemaType}}',

  /** Tooltip text shown for the close button of the document inspector */
  'document-inspector.close-button.tooltip': '關閉',
  /** The title shown in the dialog header, when inspecting a valid document */
  'document-inspector.dialog.title': '正在檢查 <DocumentTitle/>',
  /** The title shown in the dialog header, when the document being inspected is not created yet/has no value */
  'document-inspector.dialog.title-no-value': '無值',
  /** Title shown for menu item that opens the "Inspect" dialog */
  'document-inspector.menu-item.title': '檢查',
  /** the placeholder text for the search input on the inspect dialog */
  'document-inspector.search.placeholder': '搜索',
  /** The "parsed" view mode, meaning the JSON is searchable, collapsible etc */
  'document-inspector.view-mode.parsed': '已解析',
  /** The "raw" view mode, meaning the JSON is presented syntax-highlighted, but with no other features - optimal for copying */
  'document-inspector.view-mode.raw-json': '原始 JSON',

  /** The text for when a form is hidden */
  'document-view.form-view.form-hidden': '此表單已隱藏',
  /** Fallback title shown when a form title is not provided */
  'document-view.form-view.form-title-fallback': '無標題',
  /** The text for when the form view is loading a document */
  'document-view.form-view.loading': '正在讀取文件…',
  /** The description of the sync lock toast on the form view */
  'document-view.form-view.sync-lock-toast.description':
    '文件同步時請稍候。這通常在文件發布後立即發生，且不應該超過幾秒鐘',
  /** The title of the sync lock toast on the form view */
  'document-view.form-view.sync-lock-toast.title': '正在同步文件…',

  /** The description for the document favorite action */
  'document.favorites.add-to-favorites': undefined, // 'Add to favorites'
  /** The description for the document unfavorite action */
  'document.favorites.remove-from-favorites': undefined, // 'Remove from favorites'

  /**The title for the menu items that will be shown when expanding a publish release event to inspect the document */
  'events.inspect.release': '檢查<VersionBadge>{{releaseTitle}}</VersionBadge>文件',
  /**The title for the menu items that will be shown when expanding a publish draft event to inspect the draft document*/
  'events.open.draft': '打開<VersionBadge>草稿</VersionBadge>文件',
  /**The title for the menu items that will be shown when expanding a publish release event to inspect the release*/
  'events.open.release': '打開<VersionBadge>{{releaseTitle}}</VersionBadge>發布',

  /** The loading messaging for when the tooltip is still loading permission info */
  'insufficient-permissions-message-tooltip.loading-text': '讀取中…',

  /** --- Menu items --- */
  /** The menu item group title to use for the Action menu items */
  'menu-item-groups.actions-group': '操作',
  /** The menu item group title to use for the Layout menu items */
  'menu-item-groups.layout-group': '佈局',
  /** The menu item group title to use for the Sort menu items */
  'menu-item-groups.sorting-group': '排序',

  /** The menu item title to use the compact view */
  'menu-items.layout.compact-view': '簡易檢視',
  /** The menu item title to use the detailed view */
  'menu-items.layout.detailed-view': '詳細檢視',
  /** The menu item title to Sort by Created */
  'menu-items.sort-by.created': '按創建時間排序',
  /** The menu item title to Sort by Last Edited */
  'menu-items.sort-by.last-edited': '按最後編輯排序',

  /** The link text of the no document type screen that appears directly below the subtitle */
  'no-document-types-screen.link-text': '了解如何新增文件類型 →',
  /** The subtitle of the no document type screen that appears directly below the title */
  'no-document-types-screen.subtitle': '請在架構中至少定義一種文件類型。',
  /** The title of the no document type screen */
  'no-document-types-screen.title': '無文件類型',

  /** Text shown on back button visible on smaller breakpoints */
  'pane-header.back-button.text': '返回',
  /** tooltip text (via `title` attribute) for the menu button */
  'pane-header.context-menu-button.tooltip': '顯示選單',
  /** Appears in a document list pane header if there are more than one option for create. This is the label for that menu */
  'pane-header.create-menu.label': '創建',
  /** Tooltip displayed on the create new button in document lists */
  'pane-header.create-new-button.tooltip': '創建新文件',
  /** The `aria-label` for the disabled button in the pane header if create permissions are granted */
  'pane-header.disabled-created-button.aria-label': '權限不足',

  /** The text shown in the tooltip of pane item previews of documents if there are unpublished edits */
  'pane-item.draft-status.has-draft.tooltip': '<RelativeTime/> 編輯過',
  /** The text shown in the tooltip of pane item previews of documents if there are no unpublished edits */
  'pane-item.draft-status.no-draft.tooltip': '無未發布的編輯',
  /** The subtitle tor pane item previews if there isn't a matching schema type found */
  'pane-item.missing-schema-type.subtitle': '文件：<Code>{{documentId}}</Code>',
  /** The title tor pane item previews if there isn't a matching schema type found */
  'pane-item.missing-schema-type.title': '未找到<Code>{{documentType}}</Code>的架構',
  /** The text shown in the tooltip of pane item previews of documents if there are unpublished edits */
  'pane-item.published-status.has-published.tooltip': '已發布<RelativeTime/>',
  /** The text shown in the tooltip of pane item previews of documents if there are no unpublished edits */
  'pane-item.published-status.no-published.tooltip': '沒有未發布的編輯',

  /** The text used in the document header title if there is an error */
  'panes.document-header-title.error.text': '錯誤：{{error}}',
  /** The text used in the document header title if creating a new item */
  'panes.document-header-title.new.text': '新 {{schemaType}}',
  /** The text used in the document header title if no other title can be determined */
  'panes.document-header-title.untitled.text': '無標題',
  /** The error text on the document list pane */
  'panes.document-list-pane.error.text': '錯誤：<Code>{{error}}</Code>',
  /** The error title on the document list pane */
  'panes.document-list-pane.error.title': '無法獲取列表項目',
  /** The text of the document list pane if more than a maximum number of documents are returned */
  'panes.document-list-pane.max-items.text': '顯示最多{{limit}}份文件',
  /** The text of the document list pane if no documents are found for a specified type */
  'panes.document-list-pane.no-documents-of-type.text': '此類型無文件',
  /** The text of the document list pane if no documents are found */
  'panes.document-list-pane.no-documents.text': '未找到結果',
  /** The text of the document list pane if no documents are found matching specified criteria */
  'panes.document-list-pane.no-matching-documents.text': '沒有相符的文件',
  /** The aria-label for the search input on the document list pane */
  'panes.document-list-pane.search-input.aria-label': '搜索列表',
  /** The search input for the search input on the document list pane */
  'panes.document-list-pane.search-input.placeholder': '搜索列表',
  /** The summary title when displaying an error for a document operation result */
  'panes.document-operation-results.error.summary.title': '詳情',
  /** The text when a generic operation failed (fallback, generally not shown)  */
  'panes.document-operation-results.operation-error': '在{{context}}期間發生錯誤',
  /** The text when a delete operation failed  */
  'panes.document-operation-results.operation-error_delete':
    '嘗試刪除此文件時發生錯誤。這通常意味著有其他文件引用了它。',
  /** The text when an unpublish operation failed  */
  'panes.document-operation-results.operation-error_unpublish':
    '嘗試取消發布此文件時發生錯誤。這通常意味著有其他文件引用了它。',
  /** The text when a generic operation succeeded (fallback, generally not shown)  */
  'panes.document-operation-results.operation-success': '成功對文件執行了{{context}}',
  /** The text when copy URL operation succeeded  */
  'panes.document-operation-results.operation-success_copy-url': '文件 URL 已複製到剪貼簿',
  /**  */
  'panes.document-operation-results.operation-success_createVersion':
    '<Strong>{{title}}</Strong>已添加到發布',
  /** The text when a delete operation succeeded  */
  'panes.document-operation-results.operation-success_delete': '文件已成功刪除',
  /** The text when a discard changes operation succeeded  */
  'panes.document-operation-results.operation-success_discardChanges':
    '自上次發布以來的所有更改現已被丟棄。被丟棄的草稿仍可從歷史記錄中恢復',
  /** The text when a duplicate operation succeeded  */
  'panes.document-operation-results.operation-success_duplicate': '該文件已成功複製',
  /** The text when a publish operation succeeded  */
  'panes.document-operation-results.operation-success_publish': '文件已發布',
  /** The text when a restore operation succeeded  */
  'panes.document-operation-results.operation-success_restore': '<Strong>{{title}}</Strong> 已恢復',
  /** The text when an unpublish operation succeeded  */
  'panes.document-operation-results.operation-success_unpublish':
    '文件已取消發布。已從最新的發布版本創建了一個草稿。',
  /** The document title shown when document title is "undefined" in operation message */
  'panes.document-operation-results.operation-undefined-title': '無標題',
  /** The loading message for the document not found pane */
  'panes.document-pane.document-not-found.loading': '正在讀取文件…',
  /** The text of the document not found pane if the schema is known */
  'panes.document-pane.document-not-found.text':
    '文件類型未定義，無法找到標識符為<Code>{{id}}</Code>的文件。',
  /** The title of the document not found pane if the schema is known */
  'panes.document-pane.document-not-found.title': '未找到文件',
  /** The text of the document not found pane if the schema is not found */
  'panes.document-pane.document-unknown-type.text':
    '此文件的架構類型為<Code>{{documentType}}</Code>，它未在本地內容工作室架構中定義為一種類型。',
  /** The title of the document not found pane if the schema is not found or unknown */
  'panes.document-pane.document-unknown-type.title':
    '未知的文件類型：<Code>{{documentType}}</Code>',
  /** The title of the document not found pane if the schema is unknown */
  'panes.document-pane.document-unknown-type.without-schema.text':
    '此文件不存在，且未為其指定架構類型。',
  /** Default message shown while resolving the structure definition for an asynchronous node */
  'panes.resolving.default-message': '讀取中…',
  /** Message shown while resolving the structure definition for an asynchronous node and it is taking a while (more than 5s) */
  'panes.resolving.slow-resolve-message': '仍在讀取…',
  /** The text to display when type is missing */
  'panes.unknown-pane-type.missing-type.text': '結構項目缺少必需的<Code>type</Code>屬性。',
  /** The title of the unknown pane */
  'panes.unknown-pane-type.title': '未知的面板類型',
  /** The text to display when type is unknown */
  'panes.unknown-pane-type.unknown-type.text':
    '類型為<Code>{{type}}</Code>的結構項目不是已知實體。',

  /** The text for the "Open preview" action for a document */
  'production-preview.menu-item.title': '開啟預覽',

  /** The text for the confirm button in the request permission dialog used in the permissions banner */
  'request-permission-dialog.confirm-button.text': '發送請求',
  /** The description text for the request permission dialog used in the permissions banner */
  'request-permission-dialog.description.text':
    '您的請求將發送給項目管理員。如果您願意，您也可以包括一條註釋',
  /** The header/title for the request permission dialog used in the permissions banner */
  'request-permission-dialog.header.text': '請求編輯訪問權限',
  /** The text describing the note input for the request permission dialog used in the permissions banner */
  'request-permission-dialog.note-input.description.text': '如果您願意，您可以添加一條註釋',
  /** The placeholder for the note input in the request permission dialog used in the permissions banner */
  'request-permission-dialog.note-input.placeholder.text': '添加註釋...',
  /** The error/warning text in the request permission dialog when the user's request has been declined */
  'request-permission-dialog.warning.denied.text': '您訪問此項目的請求已被拒絕。',
  /** The error/warning text in the request permission dialog when the user's request has been denied due to too many outstanding requests */
  'request-permission-dialog.warning.limit-reached.text':
    '您已達到所有項目角色請求的限制。請等待再提交更多請求，或聯繫管理員尋求幫助。',

  /** Label for button when status is saved */
  'status-bar.document-status-pulse.status.saved.text': '已儲存',
  /** Label for button when status is syncing */
  'status-bar.document-status-pulse.status.syncing.text': '儲存中...',
  /** Accessibility label indicating when the document was last published, in relative time, eg "3 weeks ago" */
  'status-bar.publish-status-button.last-published-time.aria-label': '最後發布於{{relativeTime}}',
  /** Text for tooltip showing explanation of timestamp/relative time, eg "Last published <RelativeTime/>" */
  'status-bar.publish-status-button.last-published-time.tooltip': '最後發布於<RelativeTime/>',
  /** Accessibility label indicating when the document was last updated, in relative time, eg "2 hours ago" */
  'status-bar.publish-status-button.last-updated-time.aria-label': '最後更新於{{relativeTime}}',
  /** Text for tooltip showing explanation of timestamp/relative time, eg "Last updated <RelativeTime/>" */
  'status-bar.publish-status-button.last-updated-time.tooltip': '最後更新於<RelativeTime/>',
  /** Aria label for the button */
  'status-bar.review-changes-button.aria-label': '回顧更改',
  /** Label for button when status is saved */
  'status-bar.review-changes-button.status.saved.text': '已儲存！',
  /** Label for button when status is syncing */
  'status-bar.review-changes-button.status.syncing.text': '正在儲存...',
  /** Text for the secondary text for tooltip for the button */
  'status-bar.review-changes-button.tooltip.changes-saved': '已儲存變更',
  /** Primary text for tooltip for the button */
  'status-bar.review-changes-button.tooltip.text': '回顧更改',

  /** The text that appears in side the documentation link */
  'structure-error.docs-link.text': '查看文件',
  /** Labels the error message or error stack of the structure error screen */
  'structure-error.error.label': '錯誤',
  /** The header that appears at the top of the error screen */
  'structure-error.header.text': '讀取結構時遇到錯誤',
  /** The text in the reload button to retry rendering the structure */
  'structure-error.reload-button.text': '重新讀取',
  /** Labels the structure path of the structure error screen */
  'structure-error.structure-path.label': '結構路徑',

  /** The aria label for the menu button in the timeline item */
  'timeline-item.menu-button.aria-label': '開啟操作菜單',
  /** The text for the tooltip in menu button the timeline item */
  'timeline-item.menu-button.tooltip': '操作',
  /** The text for the collapse action in the timeline item menu */
  'timeline-item.menu.action-collapse': '折疊',
  /** The text for the expand action in the timeline item menu */
  'timeline-item.menu.action-expand': '展開',
})
