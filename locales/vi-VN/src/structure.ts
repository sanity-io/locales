import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Tooltip when action button is disabled because the operation is not ready   */
  'action.delete.disabled.not-ready': 'Thao tác chưa sẵn sàng',
  /** Tooltip when action button is disabled because the document does not exist */
  'action.delete.disabled.nothing-to-delete': 'Tài liệu này chưa tồn tại hoặc đã bị xóa',
  /** Label for the "Delete" document action button */
  'action.delete.label': 'Xóa',
  /** Label for the "Delete" document action while the document is being deleted */
  'action.delete.running.label': 'Đang xóa…',
  /** Message prompting the user to confirm discarding changes */
  'action.discard-changes.confirm-dialog.confirm-discard-changes':
    'Bạn có chắc chắn muốn hủy bỏ tất cả các thay đổi kể từ lần xuất bản cuối cùng không?',
  /** Tooltip when action is disabled because the document has no unpublished changes */
  'action.discard-changes.disabled.no-change': 'Tài liệu này không có thay đổi chưa xuất bản',
  /** Tooltip when action is disabled because the document is not published */
  'action.discard-changes.disabled.not-published': 'Tài liệu này chưa được xuất bản',
  /** Tooltip when action button is disabled because the operation is not ready   */
  'action.discard-changes.disabled.not-ready': 'Thao tác chưa sẵn sàng',
  /** Label for the "Discard changes" document action */
  'action.discard-changes.label': 'Hủy thay đổi',
  /** Tooltip when action is disabled because the operation is not ready   */
  'action.duplicate.disabled.not-ready': 'Thao tác chưa sẵn sàng',
  /** Tooltip when action is disabled because the document doesn't exist */
  'action.duplicate.disabled.nothing-to-duplicate':
    'Tài liệu này chưa tồn tại nên không có gì để sao chép',
  /** Label for the "Duplicate" document action */
  'action.duplicate.label': 'Sao chép',
  /** Label for the "Duplicate" document action while the document is being duplicated */
  'action.duplicate.running.label': 'Đang sao chép…',
  /** Tooltip when publish button is disabled because the document is already published, and published time is unavailable.*/
  'action.publish.already-published.no-time-ago.tooltip': 'Đã xuất bản',
  /** Tooltip when publish button is disabled because the document is already published.*/
  'action.publish.already-published.tooltip': 'Đã xuất bản {{timeSincePublished}} trước',
  /** Tooltip when action is disabled because the studio is not ready.*/
  'action.publish.disabled.not-ready': 'Thao tác chưa sẵn sàng',
  /** Label for action when there are pending changes.*/
  'action.publish.draft.label': 'Xuất bản',
  /** Label for the "Publish" document action when the document has live edit enabled.*/
  'action.publish.live-edit.label': 'Xuất bản',
  /** Fallback tooltip for the "Publish" document action when publish is invoked for a document with live edit enabled.*/
  'action.publish.live-edit.publish-disabled':
    'Không thể xuất bản vì Chế độ Chỉnh sửa Trực tiếp đã được bật cho loại tài liệu này',
  /** Tooltip for the "Publish" document action when the document has live edit enabled.*/
  'action.publish.live-edit.tooltip':
    'Chế độ Chỉnh sửa Trực tiếp đã được bật cho loại nội dung này và việc xuất bản sẽ tự động diễn ra khi bạn thực hiện thay đổi',
  /** Tooltip when publish button is disabled because there are no changes.*/
  'action.publish.no-changes.tooltip': 'Không có thay đổi chưa xuất bản',
  /** Label for the "Publish" document action when there are no changes.*/
  'action.publish.published.label': 'Đã xuất bản',
  /** Label for the "Publish" document action while publish is being executed.*/
  'action.publish.running.label': 'Đang xuất bản…',
  /** Tooltip when the "Publish" document action is disabled due to validation issues */
  'action.publish.validation-issues.tooltip':
    'Có lỗi xác thực cần được khắc phục trước khi tài liệu này có thể được xuất bản',
  /** Tooltip when publish button is waiting for validation and async tasks to complete.*/
  'action.publish.waiting': 'Đang chờ các tác vụ hoàn thành trước khi xuất bản',
  /** Message prompting the user to confirm that they want to restore to an earlier version*/
  'action.restore.confirm.message': 'Bạn có chắc chắn muốn khôi phục tài liệu này không?',
  /** Fallback tooltip for when user is looking at the initial version */
  'action.restore.disabled.cannot-restore-initial': 'Bạn không thể khôi phục về phiên bản ban đầu',
  /** Label for the "Restore" document action */
  'action.restore.label': 'Khôi phục',
  /** Default tooltip for the action */
  'action.restore.tooltip': 'Khôi phục về phiên bản này',
  /** Tooltip when action is disabled because the document is not already published */
  'action.unpublish.disabled.not-published': 'Tài liệu này chưa được xuất bản',
  /** Tooltip when action is disabled because the operation is not ready   */
  'action.unpublish.disabled.not-ready': 'Thao tác chưa sẵn sàng',
  /** Label for the "Unpublish" document action */
  'action.unpublish.label': 'Hủy xuất bản',
  /** Fallback tooltip for the Unpublish document action when publish is invoked for a document with live edit enabled.*/
  'action.unpublish.live-edit.disabled':
    'Tài liệu này có chức năng chỉnh sửa trực tiếp và không thể hủy xuất bản',

  /** The text for the restore button on the deleted document banner */
  'banners.deleted-document-banner.restore-button.text': 'Khôi phục phiên bản gần nhất',
  /** The text content for the deleted document banner */
  'banners.deleted-document-banner.text': 'Tài liệu này đã bị xóa.',
  /** The text content for the deprecated document type banner */
  'banners.deprecated-document-type-banner.text': 'Loại tài liệu này đã không còn được sử dụng.',
  /** The text for the permission check banner if the user only has multiple roles, but they do not allow updating this document */
  'banners.permission-check-banner.missing-permission_create_other':
    'Các vai trò <Roles/> của bạn không có quyền tạo tài liệu này.',
  /** The text for the permission check banner if the user only has multiple roles, but they do not allow updating this document */
  'banners.permission-check-banner.missing-permission_update_other':
    'Các vai trò <Roles/> của bạn không có quyền cập nhật tài liệu này.',
  /** The text for the reload button */
  'banners.reference-changed-banner.reason-changed.reload-button.text': 'Tải lại tham chiếu',
  /** The text for the reference change banner if the reason is that the reference has been changed */
  'banners.reference-changed-banner.reason-changed.text':
    'Tham chiếu này đã thay đổi kể từ khi bạn mở nó.',
  /** The text for the close button */
  'banners.reference-changed-banner.reason-removed.close-button.text': 'Đóng tham chiếu',
  /** The text for the reference change banner if the reason is that the reference has been deleted */
  'banners.reference-changed-banner.reason-removed.text':
    'Tham chiếu này đã bị xóa kể từ khi bạn mở nó.',

  /** Browser/tab title when creating a new document of a given type */
  'browser-document-title.new-document': 'Tạo mới {{schemaType}}',
  /** Browser/tab title when editing a document where the title cannot be resolved from preview configuration */
  'browser-document-title.untitled-document': 'Không tiêu đề',

  /** The action menu button aria-label */
  'buttons.action-menu-button.aria-label': 'Mở hành động tài liệu',
  /** The action menu button tooltip */
  'buttons.action-menu-button.tooltip': 'Hành động tài liệu',
  /** The aria-label for the split pane button on the document panel header */
  'buttons.split-pane-button.aria-label': 'Chia cửa sổ bên phải',
  /** The tool tip for the split pane button on the document panel header */
  'buttons.split-pane-button.tooltip': 'Chia cửa sổ bên phải',
  /** The title for the close button on the split pane on the document panel header */
  'buttons.split-pane-close-button.title': 'Đóng cửa sổ chia',
  /** The title for the close group button on the split pane on the document panel header */
  'buttons.split-pane-close-group-button.title': 'Đóng nhóm cửa sổ',

  /** The text in the "Cancel" button in the confirm delete dialog that cancels the action and closes the dialog */
  'confirm-delete-dialog.cancel-button.text': 'Hủy bỏ',
  /** Used in `confirm-delete-dialog.cdr-summary.title` */
  'confirm-delete-dialog.cdr-summary.document-count_other': '{{count}} tài liệu',
  /** The text that appears in the subtitle `<summary>` that lists the datasets below the title */
  'confirm-delete-dialog.cdr-summary.subtitle_other': 'Datasets: {{datasets}}',
  /** The text that appears in the subtitle `<summary>` that lists the datasets below the title */
  'confirm-delete-dialog.cdr-summary.subtitle_unavailable_other': 'Datasets không khả dụng',
  /** The text that appears in the title `<summary>` that includes the list of CDRs (plural) */
  'confirm-delete-dialog.cdr-summary.title_other': '{{documentCount}} trong {{count}} bộ dữ liệu',
  /** Appears when hovering over the copy button to copy */
  'confirm-delete-dialog.cdr-table.copy-id-button.tooltip': 'Sao chép ID vào bảng tạm',
  /** The header for the dataset column in the list of cross-dataset references found */
  'confirm-delete-dialog.cdr-table.dataset.label': 'Dataset',
  /** The header for the document ID column in the list of cross-dataset references found */
  'confirm-delete-dialog.cdr-table.document-id.label': 'ID Tài liệu',
  /** The toast title when the copy button has been clicked */
  'confirm-delete-dialog.cdr-table.id-copied-toast.title': 'Đã sao chép ID tài liệu vào bảng tạm!',
  /** The header for the project ID column in the list of cross-dataset references found */
  'confirm-delete-dialog.cdr-table.project-id.label': 'ID Dự án',
  /** The text in the "Delete anyway" button in the confirm delete dialog that confirms the action */
  'confirm-delete-dialog.confirm-anyway-button.text_delete': 'Xóa bất kỳ',
  /** The text in the "Unpublish anyway" button in the confirm delete dialog that confirms the action */
  'confirm-delete-dialog.confirm-anyway-button.text_unpublish': 'Gỡ xuất bản bất kỳ',
  /** The text in the "Delete now" button in the confirm delete dialog that confirms the action */
  'confirm-delete-dialog.confirm-button.text_delete': 'Xóa ngay',
  /** The text in the "Unpublish now" button in the confirm delete dialog that confirms the action */
  'confirm-delete-dialog.confirm-button.text_unpublish': 'Gỡ xuất bản ngay',
  /** If no referring documents are found, this text appears above the cancel and confirmation buttons */
  'confirm-delete-dialog.confirmation.text_delete':
    'Bạn có chắc chắn muốn xóa “<DocumentTitle/>” không?',
  /** If no referring documents are found, this text appears above the cancel and confirmation buttons */
  'confirm-delete-dialog.confirmation.text_unpublish':
    'Bạn có chắc chắn muốn gỡ xuất bản “<DocumentTitle/>” không?',
  /** The text body of the error dialog. */
  'confirm-delete-dialog.error.message.text':
    'Đã xảy ra lỗi trong quá trình tải tài liệu tham chiếu.',
  /** The text in the retry button of the confirm delete dialog if an error occurred. */
  'confirm-delete-dialog.error.retry-button.text': 'Thử lại',
  /** The header of the confirm delete dialog if an error occurred while the confirm delete dialog was open. */
  'confirm-delete-dialog.error.title.text': 'Lỗi',
  /** The header of the confirm delete dialog */
  'confirm-delete-dialog.header.text_delete': 'Xóa tài liệu?',
  /** The header of the confirm delete dialog */
  'confirm-delete-dialog.header.text_unpublish': 'Gỡ xuất bản tài liệu?',
  /** The text that appears while the referring documents are queried */
  'confirm-delete-dialog.loading.text': 'Đang tìm kiếm tài liệu tham chiếu…',
  /** Shown if there are references to other documents but the user does not have the permission to see the relevant document IDs */
  'confirm-delete-dialog.other-reference-count.title_other':
    '{{count}} tham chiếu khác không được hiển thị',
  /** Text in the tooltip of this component if hovering over the info icon */
  'confirm-delete-dialog.other-reference-count.tooltip':
    'Chúng tôi không thể hiển thị metadata cho những tham chiếu này do thiếu token truy cập cho các bộ dữ liệu liên quan.',
  /** Appears when unable to render a document preview in the referring document list */
  'confirm-delete-dialog.preview-item.preview-unavailable.subtitle': 'ID: {{documentId}}',
  /** Appears when unable to render a document preview in the referring document list */
  'confirm-delete-dialog.preview-item.preview-unavailable.title': 'Không có bản xem trước',
  /** Warns the user of affects to other documents if the action is confirmed (delete) */
  'confirm-delete-dialog.referential-integrity-disclaimer.text_delete':
    'Nếu bạn xóa tài liệu này, các tài liệu tham chiếu đến nó sẽ không thể truy cập được nữa.',
  /** Warns the user of affects to other documents if the action is confirmed (unpublish) */
  'confirm-delete-dialog.referential-integrity-disclaimer.text_unpublish':
    'Nếu bạn gỡ xuất bản tài liệu này, các tài liệu tham chiếu đến nó sẽ không thể truy cập được nữa.',
  /** Tells the user the count of how many other referring documents there are before listing them. (plural) */
  'confirm-delete-dialog.referring-document-count.text_other':
    '{{count}} tài liệu tham chiếu đến “<DocumentTitle/>”',
  /** Describes the list of documents that refer to the one trying to be deleted (delete) */
  'confirm-delete-dialog.referring-documents-descriptor.text_delete':
    'Bạn có thể không thể xóa “<DocumentTitle/>” vì các tài liệu sau đây tham chiếu đến nó:',
  /** Describes the list of documents that refer to the one trying to be deleted (unpublish) */
  'confirm-delete-dialog.referring-documents-descriptor.text_unpublish':
    'Bạn có thể không thể bỏ xuất bản “<DocumentTitle/>” vì các tài liệu sau đây tham chiếu đến nó:',

  /** The text for the cancel button in the confirm dialog used in document action shortcuts if none is provided */
  'confirm-dialog.cancel-button.fallback-text': 'Hủy bỏ',
  /** The text for the confirm button in the confirm dialog used in document action shortcuts if none is provided */
  'confirm-dialog.confirm-button.fallback-text': 'Xác nhận',

  /** For the default structure definition, the title for the "Content" pane */
  'default-definition.content-title': 'Nội dung',

  /** The text shown if there was an error while getting the document's title via a preview value */
  'doc-title.error.text': 'Lỗi: {{errorMessage}}',
  /** The text shown if the preview value for a document is non-existent or empty */
  'doc-title.fallback.text': 'Không có tiêu đề',
  /** The text shown if a document's title via a preview value cannot be determined due to an unknown schema type */
  'doc-title.unknown-schema-type.text': 'Loại schema không xác định: {{schemaType}}',

  /** Tooltip text shown for the close button of the document inspector */
  'document-inspector.close-button.tooltip': 'Đóng',
  /** The title shown in the dialog header, when inspecting a valid document */
  'document-inspector.dialog.title': 'Đang kiểm tra <DocumentTitle/>',
  /** The title shown in the dialog header, when the document being inspected is not created yet/has no value */
  'document-inspector.dialog.title-no-value': 'Không có giá trị',
  /** Title shown for menu item that opens the "Inspect" dialog */
  'document-inspector.menu-item.title': 'Kiểm tra',
  /** the placeholder text for the search input on the inspect dialog */
  'document-inspector.search.placeholder': 'Tìm kiếm',
  /** The "parsed" view mode, meaning the JSON is searchable, collapsible etc */
  'document-inspector.view-mode.parsed': 'Đã phân tích',
  /** The "raw" view mode, meaning the JSON is presented syntax-highlighted, but with no other features - optimal for copying */
  'document-inspector.view-mode.raw-json': 'JSON thô',

  /** The text for when a form is hidden */
  'document-view.form-view.form-hidden': 'Mẫu này bị ẩn',
  /** Fallback title shown when a form title is not provided */
  'document-view.form-view.form-title-fallback': 'Không tiêu đề',
  /** The text for when the form view is loading a document */
  'document-view.form-view.loading': 'Đang tải tài liệu…',
  /** The description of the sync lock toast on the form view */
  'document-view.form-view.sync-lock-toast.description':
    'Vui lòng chờ trong khi tài liệu được đồng bộ. Điều này thường xảy ra ngay sau khi tài liệu được xuất bản, và nó không nên mất nhiều hơn vài giây',
  /** The title of the sync lock toast on the form view */
  'document-view.form-view.sync-lock-toast.title': 'Đang đồng bộ tài liệu…',

  /** The loading messaging for when the tooltip is still loading permission info */
  'insufficient-permissions-message-tooltip.loading-text': 'Đang tải…',

  /** --- Menu items --- */
  /** The menu item group title to use for the Action menu items */
  'menu-item-groups.actions-group': 'Hành động',
  /** The menu item group title to use for the Layout menu items */
  'menu-item-groups.layout-group': 'Bố cục',
  /** The menu item group title to use for the Sort menu items */
  'menu-item-groups.sorting-group': 'Sắp xếp',

  /** The menu item title to use the compact view */
  'menu-items.layout.compact-view': 'Chế độ xem gọn gàng',
  /** The menu item title to use the detailed view */
  'menu-items.layout.detailed-view': 'Chế độ xem chi tiết',
  /** The menu item title to Sort by Created */
  'menu-items.sort-by.created': 'Sắp xếp theo Ngày tạo',
  /** The menu item title to Sort by Last Edited */
  'menu-items.sort-by.last-edited': 'Sắp xếp theo Lần chỉnh sửa cuối',

  /** The link text of the no document type screen that appears directly below the subtitle */
  'no-document-types-screen.link-text': 'Tìm hiểu cách thêm một loại tài liệu →',
  /** The subtitle of the no document type screen that appears directly below the title */
  'no-document-types-screen.subtitle':
    'Vui lòng định nghĩa ít nhất một loại tài liệu trong schema của bạn.',
  /** The title of the no document type screen */
  'no-document-types-screen.title': 'Không có loại tài liệu',

  /** Text shown on back button visible on smaller breakpoints */
  'pane-header.back-button.text': 'Quay lại',
  /** tooltip text (via `title` attribute) for the menu button */
  'pane-header.context-menu-button.tooltip': 'Hiển thị menu',
  /** Appears in a document list pane header if there are more than one option for create. This is the label for that menu */
  'pane-header.create-menu.label': 'Tạo',
  /** Tooltip displayed on the create new button in document lists */
  'pane-header.create-new-button.tooltip': 'Tạo tài liệu mới',
  /** The `aria-label` for the disabled button in the pane header if create permissions are granted */
  'pane-header.disabled-created-button.aria-label': 'Quyền không đủ',

  /** The text shown in the tooltip of pane item previews of documents if there are unpublished edits */
  'pane-item.draft-status.has-draft.tooltip': 'Đã chỉnh sửa <RelativeTime/>',
  /** The text shown in the tooltip of pane item previews of documents if there are no unpublished edits */
  'pane-item.draft-status.no-draft.tooltip': 'Không có chỉnh sửa chưa xuất bản',
  /** The subtitle tor pane item previews if there isn't a matching schema type found */
  'pane-item.missing-schema-type.subtitle': 'Tài liệu: <Code>{{documentId}}</Code>',
  /** The title tor pane item previews if there isn't a matching schema type found */
  'pane-item.missing-schema-type.title':
    'Không tìm thấy lược đồ cho loại <Code>{{documentType}}</Code>',
  /** The text shown in the tooltip of pane item previews of documents if there are unpublished edits */
  'pane-item.published-status.has-published.tooltip': 'Đã xuất bản <RelativeTime/>',
  /** The text shown in the tooltip of pane item previews of documents if there are no unpublished edits */
  'pane-item.published-status.no-published.tooltip': 'Không có chỉnh sửa chưa xuất bản',

  /** The text used in the document header title if there is an error */
  'panes.document-header-title.error.text': 'Lỗi: {{error}}',
  /** The text used in the document header title if creating a new item */
  'panes.document-header-title.new.text': 'Mới {{schemaType}}',
  /** The text used in the document header title if no other title can be determined */
  'panes.document-header-title.untitled.text': 'Không tiêu đề',
  /** The text for the retry button on the document list pane */
  'panes.document-list-pane.error.retry-button.text': 'Thử lại',
  /** The error text on the document list pane */
  'panes.document-list-pane.error.text': 'Lỗi: <Code>{{error}}</Code>',
  /** The error title on the document list pane */
  'panes.document-list-pane.error.title': 'Không thể tải các mục danh sách',
  /** The text of the document list pane if more than a maximum number of documents are returned */
  'panes.document-list-pane.max-items.text': 'Hiển thị tối đa {{limit}} tài liệu',
  /** The text of the document list pane if no documents are found for a specified type */
  'panes.document-list-pane.no-documents-of-type.text': 'Không có tài liệu của loại này',
  /** The text of the document list pane if no documents are found */
  'panes.document-list-pane.no-documents.text': 'Không tìm thấy kết quả',
  /** The text of the document list pane if no documents are found matching specified criteria */
  'panes.document-list-pane.no-matching-documents.text': 'Không có tài liệu phù hợp',
  /** The aria-label for the search input on the document list pane */
  'panes.document-list-pane.search-input.aria-label': 'Tìm kiếm danh sách',
  /** The search input for the search input on the document list pane */
  'panes.document-list-pane.search-input.placeholder': 'Tìm kiếm danh sách',
  /** The summary title when displaying an error for a document operation result */
  'panes.document-operation-results.error.summary.title': 'Chi tiết',
  /** The text when a generic operation failed (fallback, generally not shown)  */
  'panes.document-operation-results.operation-error': 'Đã xảy ra lỗi trong quá trình {{context}}',
  /** The text when a delete operation failed  */
  'panes.document-operation-results.operation-error_delete':
    'Đã xảy ra lỗi khi cố gắng xóa tài liệu này. Điều này thường có nghĩa là có các tài liệu khác tham chiếu đến nó.',
  /** The text when an unpublish operation failed  */
  'panes.document-operation-results.operation-error_unpublish':
    'Đã xảy ra lỗi khi cố gắng hủy xuất bản tài liệu này. Điều này thường có nghĩa là có các tài liệu khác tham chiếu đến nó.',
  /** The text when a generic operation succeeded (fallback, generally not shown)  */
  'panes.document-operation-results.operation-success':
    'Đã thực hiện thành công {{context}} trên tài liệu',
  /** The text when a delete operation succeeded  */
  'panes.document-operation-results.operation-success_delete': 'Tài liệu đã được xóa thành công',
  /** The text when a discard changes operation succeeded  */
  'panes.document-operation-results.operation-success_discardChanges':
    'Tất cả các thay đổi kể từ lần xuất bản cuối cùng đã được loại bỏ. Bản nháp đã loại bỏ vẫn có thể được khôi phục từ lịch sử',
  /** The text when a publish operation succeeded  */
  'panes.document-operation-results.operation-success_publish': 'Tài liệu đã được xuất bản',
  /** The text when a restore operation succeeded  */
  'panes.document-operation-results.operation-success_restore':
    '<Strong>{{title}}</Strong> đã được khôi phục',
  /** The text when an unpublish operation succeeded  */
  'panes.document-operation-results.operation-success_unpublish':
    'Tài liệu đã được hủy xuất bản. Một bản nháp đã được tạo từ phiên bản xuất bản cuối cùng.',
  /** The document title shown when document title is "undefined" in operation message */
  'panes.document-operation-results.operation-undefined-title': 'Không tiêu đề',
  /** The title of the reconnecting toast */
  'panes.document-pane-provider.reconnecting.title': 'Mất kết nối. Đang kết nối lại…',
  /** The loading message for the document not found pane */
  'panes.document-pane.document-not-found.loading': 'Đang tải tài liệu…',
  /** The text of the document not found pane if the schema is known */
  'panes.document-pane.document-not-found.text':
    'Loại tài liệu không được xác định, và không thể tìm thấy tài liệu với mã định danh <Code>{{id}}</Code>.',
  /** The title of the document not found pane if the schema is known */
  'panes.document-pane.document-not-found.title': 'Không tìm thấy tài liệu',
  /** The text of the document not found pane if the schema is not found */
  'panes.document-pane.document-unknown-type.text':
    'Tài liệu này có loại schema <Code>{{documentType}}</Code>, không được xác định là một loại trong schema của local content studio.',
  /** The title of the document not found pane if the schema is not found or unknown */
  'panes.document-pane.document-unknown-type.title':
    'Loại tài liệu không xác định: <Code>{{documentType}}</Code>',
  /** The title of the document not found pane if the schema is unknown */
  'panes.document-pane.document-unknown-type.without-schema.text':
    'Tài liệu này không tồn tại, và không có loại schema nào được chỉ định cho nó.',
  /** Default message shown while resolving the structure definition for an asynchronous node */
  'panes.resolving.default-message': 'Đang tải…',
  /** Message shown while resolving the structure definition for an asynchronous node and it is taking a while (more than 5s) */
  'panes.resolving.slow-resolve-message': 'Vẫn đang tải…',
  /** The text to display when type is missing */
  'panes.unknown-pane-type.missing-type.text':
    'Mục cấu trúc thiếu thuộc tính <Code>type</Code> bắt buộc.',
  /** The title of the unknown pane */
  'panes.unknown-pane-type.title': 'Loại pane không xác định',
  /** The text to display when type is unknown */
  'panes.unknown-pane-type.unknown-type.text':
    'Mục cấu trúc của loại <Code>{{type}}</Code> không phải là một thực thể đã biết.',

  /** The text for the "Open preview" action for a document */
  'production-preview.menu-item.title': 'Mở xem trước',

  /** Label for button when status is saved */
  'status-bar.document-status-pulse.status.saved.text': 'Đã lưu',
  /** Label for button when status is syncing */
  'status-bar.document-status-pulse.status.syncing.text': 'Đang lưu...',
  /** Accessibility label indicating when the document was last published, in relative time, eg "3 weeks ago" */
  'status-bar.publish-status-button.last-published-time.aria-label':
    'Lần cuối xuất bản {{relativeTime}}',
  /** Text for tooltip showing explanation of timestamp/relative time, eg "Last published <RelativeTime/>" */
  'status-bar.publish-status-button.last-published-time.tooltip':
    'Lần cuối xuất bản <RelativeTime/>',
  /** Accessibility label indicating when the document was last updated, in relative time, eg "2 hours ago" */
  'status-bar.publish-status-button.last-updated-time.aria-label':
    'Lần cuối cập nhật {{relativeTime}}',
  /** Text for tooltip showing explanation of timestamp/relative time, eg "Last updated <RelativeTime/>" */
  'status-bar.publish-status-button.last-updated-time.tooltip': 'Lần cuối cập nhật <RelativeTime/>',
  /** Aria label for the button */
  'status-bar.review-changes-button.aria-label': 'Xem lại thay đổi',
  /** Label for button when status is saved */
  'status-bar.review-changes-button.status.saved.text': 'Đã lưu!',
  /** Label for button when status is syncing */
  'status-bar.review-changes-button.status.syncing.text': 'Đang lưu...',
  /** Text for the secondary text for tooltip for the button */
  'status-bar.review-changes-button.tooltip.changes-saved': 'Thay đổi đã được lưu',
  /** Primary text for tooltip for the button */
  'status-bar.review-changes-button.tooltip.text': 'Xem lại thay đổi',

  /** The text that appears in side the documentation link */
  'structure-error.docs-link.text': 'Xem tài liệu',
  /** Labels the error message or error stack of the structure error screen */
  'structure-error.error.label': 'Lỗi',
  /** The header that appears at the top of the error screen */
  'structure-error.header.text': 'Gặp lỗi khi đọc cấu trúc',
  /** The text in the reload button to retry rendering the structure */
  'structure-error.reload-button.text': 'Tải lại',
  /** Labels the structure path of the structure error screen */
  'structure-error.structure-path.label': 'Đường dẫn cấu trúc',
})
