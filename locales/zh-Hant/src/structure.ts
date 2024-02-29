import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Tooltip when action button is disabled because the operation is not ready   */
  'action.delete.disabled.not-ready': '操作尚未就緒',
  /** Tooltip when action button is disabled because the document does not exist */
  'action.delete.disabled.nothing-to-delete': '此文件尚未存在或已被刪除',
  /** Label for the "Delete" document action button */
  'action.delete.label': '刪除',
  /** Label for the "Delete" document action while the document is being deleted */
  'action.delete.running.label': '正在刪除…',
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
  'action.discard-changes.label': '放棄更改',
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
  'action.publish.already-published.tooltip': '已於{{timeSincePublished}}前發布',
  /** Tooltip when action is disabled because the studio is not ready.*/
  'action.publish.disabled.not-ready': '操作尚未就緒',
  /** Label for action when there are pending changes.*/
  'action.publish.draft.label': '發布',
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
  'action.publish.running.label': '正在發布…',
  /** Tooltip when the "Publish" document action is disabled due to validation issues */
  'action.publish.validation-issues.tooltip': '在此文件可以發布之前，需要修復驗證錯誤',
  /** Tooltip when publish button is waiting for validation and async tasks to complete.*/
  'action.publish.waiting': '等待任務完成後才發布',
  /** Message prompting the user to confirm that they want to restore to an earlier version*/
  'action.restore.confirm.message': '您確定要還原此文件嗎？',
  /** Fallback tooltip for when user is looking at the initial version */
  'action.restore.disabled.cannot-restore-initial': '您不能還原到初始版本',
  /** Label for the "Restore" document action */
  'action.restore.label': '還原',
  /** Default tooltip for the action */
  'action.restore.tooltip': '還原到此版本',
  /** Tooltip when action is disabled because the document is not already published */
  'action.unpublish.disabled.not-published': '此文件未發布',
  /** Tooltip when action is disabled because the operation is not ready   */
  'action.unpublish.disabled.not-ready': '操作未就緒',
  /** Label for the "Unpublish" document action */
  'action.unpublish.label': '取消發布',
  /** Fallback tooltip for the Unpublish document action when publish is invoked for a document with live edit enabled.*/
  'action.unpublish.live-edit.disabled': '此文件已啟用即時編輯，無法取消發布',

  /** The text for the restore button on the deleted document banner */
  'banners.deleted-document-banner.restore-button.text': '還原最新版本',
  /** The text content for the deleted document banner */
  'banners.deleted-document-banner.text': '此文件已被刪除。',
  /** The text content for the deprecated document type banner */
  'banners.deprecated-document-type-banner.text': undefined, // 'This document type has been deprecated.'
  /** The text for the permission check banner if the user only has multiple roles, but they do not allow updating this document */
  'banners.permission-check-banner.missing-permission_create_other':
    '您的角色<Roles/>沒有創建此文件的權限。',
  /** The text for the permission check banner if the user only has multiple roles, but they do not allow updating this document */
  'banners.permission-check-banner.missing-permission_update_other':
    '您的角色<Roles/>沒有更新此文件的權限。',
  /** The text for the reload button */
  'banners.reference-changed-banner.reason-changed.reload-button.text': '重新加載引用',
  /** The text for the reference change banner if the reason is that the reference has been changed */
  'banners.reference-changed-banner.reason-changed.text': '自您打開它以來，此引用已更改。',
  /** The text for the close button */
  'banners.reference-changed-banner.reason-removed.close-button.text': '關閉引用',
  /** The text for the reference change banner if the reason is that the reference has been deleted */
  'banners.reference-changed-banner.reason-removed.text': '自您打開它以來，此引用已被刪除。',

  /** Browser/tab title when creating a new document of a given type */
  'browser-document-title.new-document': undefined, // 'New {{schemaType}}'
  /** Browser/tab title when editing a document where the title cannot be resolved from preview configuration */
  'browser-document-title.untitled-document': undefined, // 'Untitled'

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
  /** The toast title when the copy button has been clicked */
  'confirm-delete-dialog.cdr-table.id-copied-toast.title': '已複製文件 ID 到剪貼簿！',
  /** The header for the project ID column in the list of cross-dataset references found */
  'confirm-delete-dialog.cdr-table.project-id.label': '項目 ID',
  /** The text in the "Delete anyway" button in the confirm delete dialog that confirms the action */
  'confirm-delete-dialog.confirm-anyway-button.text_delete': '仍然刪除',
  /** The text in the "Unpublish anyway" button in the confirm delete dialog that confirms the action */
  'confirm-delete-dialog.confirm-anyway-button.text_unpublish': '仍然取消發布',
  /** The text in the "Delete now" button in the confirm delete dialog that confirms the action */
  'confirm-delete-dialog.confirm-button.text_delete': '現在刪除',
  /** The text in the "Unpublish now" button in the confirm delete dialog that confirms the action */
  'confirm-delete-dialog.confirm-button.text_unpublish': '現在取消發布',
  /** If no referring documents are found, this text appears above the cancel and confirmation buttons */
  'confirm-delete-dialog.confirmation.text_delete': '您確定要刪除“<DocumentTitle/>”嗎？',
  /** If no referring documents are found, this text appears above the cancel and confirmation buttons */
  'confirm-delete-dialog.confirmation.text_unpublish': '您確定要取消發布“<DocumentTitle/>”嗎？',
  /** The text body of the error dialog. */
  'confirm-delete-dialog.error.message.text': '加載引用文件時發生錯誤。',
  /** The text in the retry button of the confirm delete dialog if an error occurred. */
  'confirm-delete-dialog.error.retry-button.text': '重試',
  /** The header of the confirm delete dialog if an error occurred while the confirm delete dialog was open. */
  'confirm-delete-dialog.error.title.text': '錯誤',
  /** The header of the confirm delete dialog */
  'confirm-delete-dialog.header.text_delete': '刪除文件？',
  /** The header of the confirm delete dialog */
  'confirm-delete-dialog.header.text_unpublish': '取消發布文件？',
  /** The text that appears while the referring documents are queried */
  'confirm-delete-dialog.loading.text': '正在查找引用文件…',
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
  'document-inspector.close-button.tooltip': undefined, // 'Close'
  /** The title shown in the dialog header, when inspecting a valid document */
  'document-inspector.dialog.title': '正在檢查<DocumentTitle/>',
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
  'document-view.form-view.loading': '正在加載文件…',
  /** The description of the sync lock toast on the form view */
  'document-view.form-view.sync-lock-toast.description':
    '文件同步時請稍候。這通常在文件發布後立即發生，且不應該超過幾秒鐘',
  /** The title of the sync lock toast on the form view */
  'document-view.form-view.sync-lock-toast.title': '正在同步文件…',

  /** The loading messaging for when the tooltip is still loading permission info */
  'insufficient-permissions-message-tooltip.loading-text': '加載中…',

  /** --- Menu items --- */
  /** The menu item group title to use for the Action menu items */
  'menu-item-groups.actions-group': '操作',
  /** The menu item group title to use for the Layout menu items */
  'menu-item-groups.layout-group': '佈局',
  /** The menu item group title to use for the Sort menu items */
  'menu-item-groups.sorting-group': '排序',

  /** The menu item title to use the compact view */
  'menu-items.layout.compact-view': '緊湊視圖',
  /** The menu item title to use the detailed view */
  'menu-items.layout.detailed-view': '詳細視圖',
  /** The menu item title to Sort by Created */
  'menu-items.sort-by.created': '按創建時間排序',
  /** The menu item title to Sort by Last Edited */
  'menu-items.sort-by.last-edited': '按最後編輯排序',

  /** The link text of the no document type screen that appears directly below the subtitle */
  'no-document-types-screen.link-text': '了解如何添加文檔類型 →',
  /** The subtitle of the no document type screen that appears directly below the title */
  'no-document-types-screen.subtitle': '請在您的架構中至少定義一種文檔類型。',
  /** The title of the no document type screen */
  'no-document-types-screen.title': '無文檔類型',

  /** Text shown on back button visible on smaller breakpoints */
  'pane-header.back-button.text': '返回',
  /** tooltip text (via `title` attribute) for the menu button */
  'pane-header.context-menu-button.tooltip': '顯示菜單',
  /** Appears in a document list pane header if there are more than one option for create. This is the label for that menu */
  'pane-header.create-menu.label': '創建',
  /** Tooltip displayed on the create new button in document lists */
  'pane-header.create-new-button.tooltip': '創建新文件',
  /** The `aria-label` for the disabled button in the pane header if create permissions are granted */
  'pane-header.disabled-created-button.aria-label': '權限不足',

  /** The text shown in the tooltip of pane item previews of documents if there are unpublished edits */
  'pane-item.draft-status.has-draft.tooltip': '<RelativeTime/>編輯過',
  /** The text shown in the tooltip of pane item previews of documents if there are no unpublished edits */
  'pane-item.draft-status.no-draft.tooltip': '無未發布的編輯',
  /** The subtitle tor pane item previews if there isn't a matching schema type found */
  'pane-item.missing-schema-type.subtitle': '文檔：<Code>{{documentId}}</Code>',
  /** The title tor pane item previews if there isn't a matching schema type found */
  'pane-item.missing-schema-type.title': '未找到<Code>{{documentType}}</Code>的架構',
  /** The text shown in the tooltip of pane item previews of documents if there are unpublished edits */
  'pane-item.published-status.has-published.tooltip': '已發布<RelativeTime/>',
  /** The text shown in the tooltip of pane item previews of documents if there are no unpublished edits */
  'pane-item.published-status.no-published.tooltip': '沒有未發布的編輯',

  /** The text used in the document header title if there is an error */
  'panes.document-header-title.error.text': '錯誤：{{error}}',
  /** The text used in the document header title if creating a new item */
  'panes.document-header-title.new.text': '新{{schemaType}}',
  /** The text used in the document header title if no other title can be determined */
  'panes.document-header-title.untitled.text': '無標題',
  /** The text for the retry button on the document list pane */
  'panes.document-list-pane.error.retry-button.text': '重試',
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
  'panes.document-list-pane.no-matching-documents.text': '沒有匹配的文件',
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
  /** The text when a delete operation succeeded  */
  'panes.document-operation-results.operation-success_delete': '文件已成功刪除',
  /** The text when a discard changes operation succeeded  */
  'panes.document-operation-results.operation-success_discardChanges':
    '自上次發布以來的所有更改現已被丟棄。被丟棄的草稿仍可從歷史記錄中恢復',
  /** The text when a publish operation succeeded  */
  'panes.document-operation-results.operation-success_publish': '文件已發布',
  /** The text when a restore operation succeeded  */
  'panes.document-operation-results.operation-success_restore': undefined, // '<Strong>{{title}}</Strong> was restored'
  /** The text when an unpublish operation succeeded  */
  'panes.document-operation-results.operation-success_unpublish':
    '文件已取消發布。已從最新的發布版本創建了一個草稿。',
  /** The document title shown when document title is "undefined" in operation message */
  'panes.document-operation-results.operation-undefined-title': undefined, // 'Untitled'
  /** The title of the reconnecting toast */
  'panes.document-pane-provider.reconnecting.title': '連接丟失。重新連接中…',
  /** The loading message for the document not found pane */
  'panes.document-pane.document-not-found.loading': '正在加載文檔…',
  /** The text of the document not found pane if the schema is known */
  'panes.document-pane.document-not-found.text':
    '文檔類型未定義，無法找到標識符為<Code>{{id}}</Code>的文檔。',
  /** The title of the document not found pane if the schema is known */
  'panes.document-pane.document-not-found.title': '未找到文檔',
  /** The text of the document not found pane if the schema is not found */
  'panes.document-pane.document-unknown-type.text':
    '此文檔的架構類型為<Code>{{documentType}}</Code>，它未在本地內容工作室架構中定義為一種類型。',
  /** The title of the document not found pane if the schema is not found or unknown */
  'panes.document-pane.document-unknown-type.title':
    '未知的文檔類型：<Code>{{documentType}}</Code>',
  /** The title of the document not found pane if the schema is unknown */
  'panes.document-pane.document-unknown-type.without-schema.text':
    '此文檔不存在，且未為其指定架構類型。',
  /** Default message shown while resolving the structure definition for an asynchronous node */
  'panes.resolving.default-message': '加載中…',
  /** Message shown while resolving the structure definition for an asynchronous node and it is taking a while (more than 5s) */
  'panes.resolving.slow-resolve-message': '仍在加載…',
  /** The text to display when type is missing */
  'panes.unknown-pane-type.missing-type.text': '結構項目缺少必需的<Code>type</Code>屬性。',
  /** The title of the unknown pane */
  'panes.unknown-pane-type.title': '未知的面板類型',
  /** The text to display when type is unknown */
  'panes.unknown-pane-type.unknown-type.text':
    '類型為<Code>{{type}}</Code>的結構項目不是已知實體。',

  /** The text for the "Open preview" action for a document */
  'production-preview.menu-item.title': '開啟預覽',

  /** Label for button when status is saved */
  'status-bar.document-status-pulse.status.saved.text': undefined, // 'Saved'
  /** Label for button when status is syncing */
  'status-bar.document-status-pulse.status.syncing.text': undefined, // 'Saving...'
  /** Accessibility label indicating when the document was last published, in relative time, eg "3 weeks ago" */
  'status-bar.publish-status-button.last-published-time.aria-label': '最後發布於{{relativeTime}}',
  /** Text for tooltip showing explanation of timestamp/relative time, eg "Last published <RelativeTime/>" */
  'status-bar.publish-status-button.last-published-time.tooltip': '最後發布於<RelativeTime/>',
  /** Accessibility label indicating when the document was last updated, in relative time, eg "2 hours ago" */
  'status-bar.publish-status-button.last-updated-time.aria-label': '最後更新於{{relativeTime}}',
  /** Text for tooltip showing explanation of timestamp/relative time, eg "Last updated <RelativeTime/>" */
  'status-bar.publish-status-button.last-updated-time.tooltip': '最後更新於<RelativeTime/>',
  /** Aria label for the button */
  'status-bar.review-changes-button.aria-label': '審查更改',
  /** Label for button when status is saved */
  'status-bar.review-changes-button.status.saved.text': '已保存！',
  /** Label for button when status is syncing */
  'status-bar.review-changes-button.status.syncing.text': '正在保存...',
  /** Text for the secondary text for tooltip for the button */
  'status-bar.review-changes-button.tooltip.changes-saved': '更改已保存',
  /** Primary text for tooltip for the button */
  'status-bar.review-changes-button.tooltip.text': '審查更改',

  /** The text that appears in side the documentation link */
  'structure-error.docs-link.text': '查看文檔',
  /** Labels the error message or error stack of the structure error screen */
  'structure-error.error.label': '錯誤',
  /** The header that appears at the top of the error screen */
  'structure-error.header.text': '讀取結構時遇到錯誤',
  /** The text in the reload button to retry rendering the structure */
  'structure-error.reload-button.text': '重新加載',
  /** Labels the structure path of the structure error screen */
  'structure-error.structure-path.label': '結構路徑',
})
