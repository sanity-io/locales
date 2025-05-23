import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** The label for the create task action */
  'actions.create.text': 'Tạo nhiệm vụ mới',
  /** The label for the open tasks panel action */
  'actions.open.text': 'Nhiệm vụ',

  /** The label for the button to create a new task */
  'buttons.create.text': 'Tạo Nhiệm Vụ',
  /** The label for the button to discard changes */
  'buttons.discard.text': 'Hủy bỏ',
  /** The label for the button to open the draft */
  'buttons.draft.text': 'Bản nháp',
  /** The label for the button to create a new task */
  'buttons.new.text': 'Nhiệm vụ mới',
  /** The text for tooltip in the create a new task button when mode is upsell */
  'buttons.new.upsell-tooltip': 'Nâng cấp để tạo nhiệm vụ',
  /** The label for the button that will navigate to the next task */
  'buttons.next.tooltip': 'Chuyển đến nhiệm vụ tiếp theo',
  /** The label for the button that will previous to the next task */
  'buttons.previous.tooltip': 'Quay lại nhiệm vụ trước',

  /** Text for the remove task dialog asking for confirmation of deletion */
  'dialog.remove-task.body': 'Bạn có chắc chắn muốn xóa nhiệm vụ này không?',
  /** The label for the cancel button on the remove task dialog */
  'dialog.remove-task.buttons.cancel.text': 'Hủy',
  /** The label for the confirmation button on the remove task dialog */
  'dialog.remove-task.buttons.confirm.text': 'Xóa',
  /** The title for the remove task dialog */
  'dialog.remove-task.title': 'Xóa nhiệm vụ',

  /** The text used as a placeholder for the footer action in a document with multiple tasks */
  'document.footer.open-tasks.placeholder_other': 'Mở nhiệm vụ',
  /** The label used in the button in the footer action in a document with multiple tasks */
  'document.footer.open-tasks.text_other': '{{count}} nhiệm vụ đang mở',

  /** The heading in the tasks sidebar, in the assigned tab, when the user hasn't been assigned to any task*/
  'empty-state.list.assigned.heading': 'Bạn chưa được giao nhiệm vụ nào',
  /** The text in the tasks sidebar, in the assigned tab, when the user hasn't been assigned to any task*/
  'empty-state.list.assigned.text': 'Khi bạn được giao nhiệm vụ, chúng sẽ xuất hiện ở đây',
  /** The text in the tasks sidebar button any of the empty states is rendered*/
  'empty-state.list.create-new': 'Tạo nhiệm vụ mới',
  /** The heading in the tasks sidebar, in the document tab, when the document doesn't have any task*/
  'empty-state.list.document.heading': 'Tài liệu này chưa có nhiệm vụ nào',
  /** The text in the tasks sidebar, in the document tab, when the document doesn't have any task*/
  'empty-state.list.document.text':
    'Khi một tài liệu có nhiệm vụ liên kết, chúng sẽ được hiển thị ở đây.',
  /** The heading in the tasks sidebar, when viewing the document tab, but there is not an active document*/
  'empty-state.list.no-active-document.heading': 'Mở tài liệu để xem nhiệm vụ của nó',
  /** The text in the tasks sidebar, when viewing the document tab, but there is not an active document*/
  'empty-state.list.no-active-document.text':
    'Nhiệm vụ trên tài liệu đang hoạt động của bạn sẽ được hiển thị ở đây.',
  /** The heading in the tasks sidebar, in the subscriber tab, when the user is not subscribed to any task*/
  'empty-state.list.subscribed.heading': 'Bạn chưa đăng ký nhiệm vụ nào',
  /** The text in the tasks sidebar, in the subscriber tab, when the user is not subscribed to any task*/
  'empty-state.list.subscribed.text':
    'Khi bạn tạo, chỉnh sửa, hoặc bình luận về một nhiệm vụ, bạn sẽ được tự động đăng ký',
  /** The heading in the tasks sidebar, in the assigned tab, under the closed details, when it's empty.*/
  'empty-state.status.list.closed.assigned.heading': 'Không có nhiệm vụ hoàn thành',
  /** The text in the tasks sidebar, in the assigned tab, under the closed details, when it's empty.*/
  'empty-state.status.list.closed.assigned.text':
    'Nhiệm vụ của bạn được đánh dấu là đã hoàn thành sẽ xuất hiện ở đây',
  /** The heading in the tasks sidebar, in the document tab, under the closed details, when it's empty.*/
  'empty-state.status.list.closed.document.heading': 'Không có nhiệm vụ hoàn thành',
  /** The heading in the tasks sidebar, in the subscribed tab, under the closed details, when it's empty.*/
  'empty-state.status.list.closed.subscribed.heading': 'Không có nhiệm vụ đã hoàn thành',
  /** The text in the tasks sidebar, in the subscribed tab, under the closed details, when it's empty.*/
  'empty-state.status.list.closed.subscribed.text':
    'Những nhiệm vụ bạn đăng ký và đánh dấu là đã xong sẽ xuất hiện ở đây',
  /** The heading in the tasks sidebar, in the assigned tab, under the open details, when it's empty.*/
  'empty-state.status.list.open.assigned.heading': 'Bạn đã cập nhật xong',
  /** The text in the tasks sidebar, in the assigned tab, under the open details, when it's empty.*/
  'empty-state.status.list.open.assigned.text':
    'Những nhiệm vụ mới được giao cho bạn sẽ xuất hiện ở đây',
  /** The heading in the tasks sidebar, in the document tab, under the open details, when it's empty.*/
  'empty-state.status.list.open.document.heading': 'Không có nhiệm vụ nào trên tài liệu này',
  /** The heading in the tasks sidebar, in the subscribed tab, under the open details, when it's empty.*/
  'empty-state.status.list.open.subscribed.heading': 'Không có nhiệm vụ đăng ký',
  /** The text in the tasks sidebar, in the subscribed tab, under the open details, when it's empty.*/
  'empty-state.status.list.open.subscribed.text': 'Những nhiệm vụ bạn đăng ký sẽ xuất hiện ở đây',

  /** Text used in the assignee input when there is no user assigned */
  'form.input.assignee.no-user-assigned.text': 'Chưa được giao',
  /** Text used in the assignee input tooltip when there is no user assigned */
  'form.input.assignee.no-user-assigned.tooltip': 'Chọn người được giao',
  /** Text used in the assignee input when searching and no users are found */
  'form.input.assignee.search.no-users.text': 'Không tìm thấy người dùng nào',
  /** Placeholder text used in the search box in the assignee input */
  'form.input.assignee.search.placeholder': 'Chọn tên người dùng',
  /** Text used in the assignee input when user is not authorized */
  'form.input.assignee.unauthorized.text': 'Không được phép',
  /** Text used in the assignee input tooltip when there is no user assigned */
  'form.input.assignee.user-assigned.tooltip': 'Thay đổi người được giao',
  /** Text used in the assignee input when user is not found */
  'form.input.assignee.user-not-found.text': 'Không tìm thấy người dùng',
  /** The label used in the create more toggle */
  'form.input.create-more.text': 'Tạo thêm',
  /** The label used in the date input button tooltip when it's empty */
  'form.input.date.buttons.empty.tooltip': 'Đặt hạn chót',
  /** The label used in the date input to remove the current value */
  'form.input.date.buttons.remove.text': 'Xóa bỏ',
  /** The label used in the date input button tooltip when it has value */
  'form.input.date.buttons.tooltip': 'Thay đổi hạn chót',
  /** Placeholder text used in the description input */
  'form.input.description.placeholder': 'Thêm mô tả',
  /**  Text used in the tooltip in the status change button  */
  'form.input.status.button.tooltip': 'Thay đổi trạng thái',
  /** The label used in the target input to remove the current value */
  'form.input.target.buttons.remove.text': 'Xóa nội dung mục tiêu',
  /** The text used in the target input when encountering a schema error */
  'form.input.target.error.schema-not-found': 'Không tìm thấy lược đồ',
  /** The placeholder text used in the target input for the search component */
  'form.input.target.search.placeholder': 'Chọn tài liệu',
  /** The placeholder text for the title input */
  'form.input.title.placeholder': 'Tiêu đề nhiệm vụ',
  /** The status error message presented when the user does not supply a title */
  'form.status.error.title-required': 'Tiêu đề là bắt buộc',
  /** The status message upon successful creation of a task */
  'form.status.success': 'Nhiệm vụ đã được tạo',

  /** The text displayed when no tasks are found */
  'list.empty.text': 'Không có nhiệm vụ',
  /** The text displayed at the bottom of the tasks list inviting users provide feedback */
  'list.feedback.text': 'Giúp chúng tôi cải thiện, <Link>chia sẻ phản hồi về Nhiệm vụ</Link> ',

  /** The label for the copy link menu item */
  'menuitem.copylink.text': 'Sao chép liên kết đến nhiệm vụ',
  /** The label for the delete task menu item */
  'menuitem.delete.text': 'Xóa nhiệm vụ',
  /** The label for the duplicate task menu item */
  'menuitem.duplicate.text': 'Nhân bản nhiệm vụ',
  /** The text for the duplicate task menu item tooltip when mode is upsell */
  'menuitem.duplicate.upsell-tooltip': 'Nâng cấp để nhân bản nhiệm vụ',

  /** Fragment used to construct the first entry in the activity log */
  'panel.activity.created-fragment': 'đã tạo nhiệm vụ này',
  /** The title of the activity section of the task */
  'panel.activity.title': 'Hoạt động',
  /** The text used in the activity log when unable to find the user */
  'panel.activity.unknown-user': 'Người dùng không xác định',
  /** The tooltip for the close button for the task panel */
  'panel.close.tooltip': 'Đóng thanh bên',
  /** The placeholder text for the comment text box */
  'panel.comment.placeholder': 'Thêm bình luận...',
  /** The placeholder text for the comment text box when mode is upsell */
  'panel.comment.placeholder.upsell': 'Nâng cấp để bình luận về nhiệm vụ',
  /** The title used in the task panel when showing the create task form */
  'panel.create.title': 'Tạo',
  /** The title used in the drafts pulldown */
  'panel.drafts.title': 'Bản nháp',
  /** The tooltip for the task navigation component */
  'panel.navigation.tooltip': 'Mở nhiệm vụ',
  /** Title of the Tasks panel   */
  'panel.title': 'Nhiệm vụ',

  /** Label for the Assigned Tab */
  'tab.assigned.label': 'Đã giao',
  /** Label for the Active Document Tab */
  'tab.document.label': 'Tài liệu đang hoạt động',
  /** Label for the Subscribed Tab */
  'tab.subscribed.label': 'Đã đăng ký',

  /** Tooltip for the tasks navbar icon */
  'toolbar.tooltip': 'Nhiệm vụ',
})
