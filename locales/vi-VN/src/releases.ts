import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Action text for adding a document to release */
  'action.add-document': 'Thêm tài liệu',
  /** Action text for archiving a release */
  'action.archive': 'Lưu trữ release',
  /** Tooltip for when the archive release action is disabled due to release being scheduled  */
  'action.archive.tooltip': 'Hủy lên lịch release này để lưu trữ nó',
  /** Action text for showing the archived releases */
  'action.archived': 'Đã lưu trữ',
  /** Menu item label for copying release ID */
  'action.copy-release-id.label': 'Sao chép ID release',
  /** Menu item label for copying release URL */
  'action.copy-release-link.label': 'Sao chép URL release',
  /** Menu item label for copying release title */
  'action.copy-release-title.label': 'Sao chép tiêu đề release',
  /** Tooltip for copy release actions button */
  'action.copy-release.label': 'Sao chép',
  /** Action text for staging a new revert release */
  'action.create-revert-release': 'Tạo release mới',
  /** Action text for deleting a release */
  'action.delete-release': 'Xóa release',
  /** Menu item label for showing scheduled drafts */
  'action.drafts': 'Bản nháp đã lên lịch',
  /** Action text for duplicating a release */
  'action.duplicate-release': 'Nhân bản release',
  /** Action text for editing a release */
  'action.edit': 'Chỉnh sửa release',
  /** Action text for reverting a release immediately without staging changes */
  'action.immediate-revert-release': 'Hoàn nguyên ngay',
  /** Action text for opening a release */
  'action.open': 'Đang hoạt động',
  /** Action text for showing the paused scheduled drafts */
  'action.paused': 'Đã tạm dừng',
  /** Action text for publishing all documents in a release (and the release itself) */
  'action.publish-all-documents': 'Chạy release',
  /** Menu item label for showing releases (multi-document releases) */
  'action.releases': 'Releases',
  /** Action text for reverting a release */
  'action.revert': 'Hoàn nguyên release',
  /** Action message for when document is scheduled for unpublishing a document and you want to no longer unpublish it */
  'action.revert-unpublish-actions': 'Hoàn nguyên hủy xuất bản khi phát hành',
  /** Text for the review changes button in release tool */
  'action.review': 'Xem lại các thay đổi',
  /** Action text for scheduling a release */
  'action.schedule': 'Lên lịch release...',
  /** Action text for scheduling unpublish of a draft document */
  'action.schedule-unpublish': 'Lên lịch hủy xuất bản',
  /** Tooltip text for when schedule unpublish is disabled because document is not published */
  'action.schedule-unpublish.disabled.not-published':
    'Tài liệu phải được xuất bản trước khi lên lịch hủy xuất bản',
  /** Label for unarchiving a release */
  'action.unarchive': 'Bỏ lưu trữ release',
  /** Action text for unpublishing a document in a release in the context menu */
  'action.unpublish': 'Hủy xuất bản',
  /** Action message for scheduling an unpublished of a document  */
  'action.unpublish-doc-actions': 'Hủy xuất bản khi phát hành',
  /** Action text for unscheduling a release */
  'action.unschedule': 'Hủy lên lịch phát hành',

  /** Text for the summary button in release tool */
  'actions.summary': 'Tóm tắt',

  /* The text for the activity event when a document is added to a release */
  'activity.event.add-document': 'Đã thêm một phiên bản tài liệu',
  /* The text for the activity event when the release is archived */
  'activity.event.archive': 'Đã lưu trữ bản phát hành <strong>{{releaseTitle}}</strong>',
  /* The text for the activity event when the release is created */
  'activity.event.create':
    'Đã tạo bản phát hành <strong>{{releaseTitle}}</strong> <ScheduleTarget>nhắm mục tiêu </ScheduleTarget>',
  /* The text for the activity event when a document is removed from a release */
  'activity.event.discard-document': 'Đã loại bỏ một phiên bản tài liệu',
  'activity.event.edit': 'Đặt thời gian phát hành thành <ScheduleTarget></ScheduleTarget>',
  /**The text to display in the changes when the release type changes to asap */
  'activity.event.edit-time-asap': 'Càng sớm càng tốt',
  /**The text to display in the changes when the release type changes to undecided */
  'activity.event.edit-time-undecided': 'Chưa quyết định',
  /* The text for the activity event when the release is published */
  'activity.event.publish': 'Đã xuất bản bản phát hành <strong>{{releaseTitle}}</strong>',
  /* The text for the activity event when the release is scheduled */
  'activity.event.schedule': 'Đã đánh dấu là đã lên lịch',
  /** The text for the activity event when the release is unarchived */
  'activity.event.unarchive': 'Đã hủy lưu trữ bản phát hành <strong>{{releaseTitle}}</strong>',
  /** The text for the activity event when the release is unscheduled */
  'activity.event.unschedule': 'Đã đánh dấu là chưa lên lịch',
  /** The loading text for when releases are loading */
  'activity.panel.error': 'Đã xảy ra lỗi khi lấy hoạt động phát hành',
  /** The loading text for when releases are loading */
  'activity.panel.loading': 'Đang tải hoạt động phát hành',
  /** The title for the activity panel shown in the releases detail screen */
  'activity.panel.title': 'Hoạt động',

  /** Label for the button to proceed with archiving a release */
  'archive-dialog.confirm-archive-button': 'Có, lưu trữ bản phát hành',
  /** Description for the dialog confirming the archive of a release with more than one document */
  'archive-dialog.confirm-archive-description_other':
    'Thao tác này sẽ lưu trữ {{count}} phiên bản tài liệu.',
  /** Header for the dialog confirming the archive of a release */
  'archive-dialog.confirm-archive-header': 'Bạn có chắc chắn muốn lưu trữ bản phát hành này không?',
  /** Title for the dialog confirming the archive of a release */
  'archive-dialog.confirm-archive-title':
    "Bạn có chắc chắn muốn lưu trữ bản phát hành <strong>'{{title}}'</strong> không?",

  /** Description for information card on a published or archived release to description retention effects */
  'archive-info.description':
    'Nó sẽ khả dụng trong {{retentionDays}} ngày, sau đó tự động bị xóa vào {{removalDate}}. <Link>Tìm hiểu về thời gian lưu trữ</Link>.',
  /** Title for information card on a archived release */
  'archive-info.title': 'Bản phát hành này đã được lưu trữ',

  /** Banner text showing count of active scheduled drafts requiring confirmation with multiple drafts */
  'banner.confirm-active-scheduled-drafts_other':
    'Có {{count}} Bản nháp đã lên lịch yêu cầu xác nhận lên lịch',
  /** Button text for confirming scheduling of active drafts */
  'banner.confirm-active-scheduled-drafts.button': 'Tiếp tục lên lịch',
  /** Button text when confirming schedules from paused mode */
  'banner.confirm-active-scheduled-drafts.button-paused': 'Tiếp tục tất cả lịch',
  /** Banner text shown when drafts mode is disabled but there are still scheduled drafts */
  'banner.drafts-mode-disabled':
    'Chế độ bản nháp đã bị tắt nhưng vẫn còn các bản nháp đã lên lịch chờ xuất bản.',
  /** Banner text shown when navigating to a release that does not exist */
  'banner.release-not-found': 'Không tìm thấy bản phát hành này',
  /** Tooltip for the dismiss button in the release not found banner */
  'banner.release-not-found.dismiss': 'Bỏ qua',
  /** Banner text shown when scheduled drafts feature is disabled but there are still scheduled drafts */
  'banner.scheduled-drafts-disabled':
    'Tính năng bản nháp đã lên lịch đã bị tắt nhưng vẫn còn các bản nháp đã lên lịch chờ xuất bản.',

  /** Title for changes to published documents */
  'changes-published-docs.title': 'Thay đổi đối với các tài liệu đã xuất bản',

  /** Dialog confirm button text for confirming all scheduled drafts */
  'confirm-active-scheduled-drafts-dialog.confirm-button': 'Xác nhận lịch',
  /** Dialog description for confirming active scheduled drafts */
  'confirm-active-scheduled-drafts-dialog.description':
    'Lên lịch tất cả các Bản nháp đã lên lịch bị tạm dừng theo ngày xuất bản dự kiến của chúng',
  /** Dialog warning when some scheduled drafts have past dates */
  'confirm-active-scheduled-drafts-dialog.past-dates-warning':
    'Một số Bản nháp đã lên lịch này được đặt lịch cho các ngày trong quá khứ. Việc xác nhận lịch sẽ xuất bản ngay lập tức các phiên bản tài liệu đó.',
  /** Dialog title for confirming active scheduled drafts */
  'confirm-active-scheduled-drafts-dialog.title': 'Tiếp tục các Bản nháp đã lên lịch',

  /** Suffix for when a release is a copy of another release */
  'copy-suffix': 'Bản sao',

  /** Confirm button text for overriding existing draft */
  'copy-to-draft-dialog.confirm-button': 'Có, ghi đè Bản nháp',
  /** Description for dialog when copying version to draft that already exists */
  'copy-to-draft-dialog.description':
    'Một phiên bản nháp của tài liệu này đã tồn tại. Sao chép phiên bản hiện tại vào bản nháp và ghi đè phiên bản nháp hiện có.',
  /** Title for dialog when copying version to draft that already exists */
  'copy-to-draft-dialog.title': 'Phiên bản nháp đã tồn tại',

  /** Text for when a release / document was created */
  created: 'Đã tạo <RelativeTime/>',

  /** Activity inspector button text */
  'dashboard.details.activity': 'Hoạt động',
  /** Text for the releases detail screen in the pin release button. */
  'dashboard.details.pin-release': 'Ghim bản phát hành vào studio',
  /** Text for the releases detail screen when a release was published ASAP */
  'dashboard.details.published-asap': 'Đã xuất bản',
  /** Text for the releases detail screen when a release was published from scheduling */
  'dashboard.details.published-on': 'Đã xuất bản vào {{date}}',
  /** Text for the releases detail screen in the unpin release button. */
  'dashboard.details.unpin-release': 'Bỏ ghim bản phát hành khỏi studio',

  /** Label for the button to proceed deleting a release */
  'delete-dialog.confirm-delete-button': 'Có, xóa bản phát hành',
  /** Description for the dialog confirming the deleting of a release with more than one document */
  'delete-dialog.confirm-delete-description_other':
    'Thao tác này sẽ xóa {{count}} phiên bản tài liệu.',
  /** Header for deleting a release dialog */
  'delete-dialog.confirm-delete.header': 'Bạn có chắc chắn muốn xóa bản phát hành này không?',

  /** Label when a release has been deleted by a different user */
  'deleted-release': "Bản phát hành '<strong>{{title}}</strong>' đã bị xóa",

  /** Text for when there's no changes in a release diff */
  'diff.list-empty': 'Danh sách thay đổi trống, xem tài liệu',
  /** Text for when there's no changes in a release diff */
  'diff.no-changes': 'Không có thay đổi',

  /** Description for discarding a draft of a document dialog */
  'discard-version-dialog.description-draft':
    'Thao tác này sẽ xóa vĩnh viễn tất cả các thay đổi đã thực hiện đối với tài liệu này. Hành động này không thể hoàn tác.',
  /** Description for discarding a version of a document dialog */
  'discard-version-dialog.description-release':
    "Thao tác này sẽ xóa vĩnh viễn tất cả các thay đổi đã thực hiện đối với tài liệu này trong release '<strong>{{releaseTitle}}</strong>'. Hành động này không thể hoàn tác.",
  /** Title for dialog for discarding a draft of a document */
  'discard-version-dialog.header-draft': 'Hủy bản nháp?',
  /** Header for discarding a version from a release of a document dialog */
  'discard-version-dialog.header-release':
    "Xóa tài liệu khỏi release '<strong>{{releaseTitle}}</strong>'?",
  /** Title for dialog for discarding a draft of a document */
  'discard-version-dialog.title-draft': 'Hủy bản nháp',
  /** Title for dialog for discarding a version of a document */
  'discard-version-dialog.title-release': 'Xóa khỏi release',

  /** Label for when a document in a release has multiple validation warnings */
  'document-validation.error_other': '{{count}} lỗi xác thực',

  /** Label for the button to proceed with duplicating a release */
  'duplicate-dialog.confirm-duplicate-button': 'Có, nhân bản release',
  /** Description for the dialog confirming the duplicate of a release with more than one document */
  'duplicate-dialog.confirm-duplicate-description_other':
    'Thao tác này sẽ nhân bản release và {{count}} phiên bản tài liệu.',
  /** Header for the dialog confirming the duplicate of a release */
  'duplicate-dialog.confirm-duplicate-header': 'Bạn có chắc chắn muốn nhân bản release này không?',

  /** Title text displayed for technical error details */
  'error-details-title': 'Chi tiết lỗi',

  /** Title text when error during release update */
  'failed-edit-title': 'Không thể lưu thay đổi',

  /** Title text displayed for releases that failed to publish  */
  'failed-publish-title': 'Không thể xuất bản',

  /** Title text displayed for releases that failed to schedule  */
  'failed-schedule-title': 'Không thể lên lịch',

  /** Filter tab label for all documents */
  'filter-tab.all': 'Tất cả',
  /** Filter tab label for documents with validation errors */
  'filter-tab.errors': 'Lỗi',

  /**The text that will be shown in the footer to indicate the time the release was archived */
  'footer.status.archived': 'Đã lưu trữ',
  /**The text that will be shown in the footer to indicate the time the release was created */
  'footer.status.created': 'Đã tạo',
  /**The text that will be shown in the footer to indicate the time the release was created */
  'footer.status.edited': 'Đã chỉnh sửa',
  /**The text that will be shown in the footer to indicate the time the release was published */
  'footer.status.published': 'Đã xuất bản',
  /**The text that will be shown in the footer to indicate the time the release was unarchived */
  'footer.status.unarchived': 'Đã hủy lưu trữ',

  /** Label text for the loading state whilst release is being loaded */
  'loading-release': 'Đang tải release',

  /** Text for when documents of a release are loading */
  'loading-release-documents': 'Đang tải tài liệu',
  /** Description text for when loading documents on a release failed */
  'loading-release-documents.error.description':
    'Chúng tôi không thể tải tài liệu cho bản phát hành này. Vui lòng thử lại sau.',
  /** Title text for when loading documents on a release failed */
  'loading-release-documents.error.title': 'Đã xảy ra lỗi',

  /** Label for title of actions for "when releasing" */
  'menu.group.when-releasing': 'Khi phát hành',
  /** Label for the release menu */
  'menu.label': 'Menu phát hành',
  /** Tooltip for the release menu */
  'menu.tooltip': 'Hành động',

  /** Text for when no archived releases are found */
  'no-archived-release': 'Không có bản phát hành đã lưu trữ',

  /** Tooltip text when there are no paused scheduled drafts */
  'no-paused-release': 'Không có bản nháp đã lên lịch bị tạm dừng',

  /** Text for when no releases are found */
  'no-releases': 'Không có bản phát hành',

  /** Text for when no scheduled drafts are found */
  'no-scheduled-drafts': 'Không có bản nháp đã lên lịch',

  /** Text for the button name for the release tool */
  'overview.action.documentation': 'Tài liệu',
  /** Tooltip for the calendar button in the release overview */
  'overview.calendar.tooltip': 'Xem lịch',
  /** Description for the release tool */
  'overview.description':
    'Bản phát hành là tập hợp các thay đổi tài liệu có thể được quản lý, lên lịch và khôi phục cùng nhau.',
  /** Text for the placeholder in the search release input  */
  'overview.search-releases-placeholder': 'Tìm kiếm bản phát hành',
  /** Title for the release tool */
  'overview.title': 'Bản phát hành',

  /** Tooltip text for releases that have passed their intended publish date */
  'passed-intended-publish-date': 'Bản phát hành này đã qua ngày xuất bản dự kiến',

  /** Tooltip text for scheduled drafts that have passed their intended publish date */
  'passed-intended-publish-date-draft': 'Bản nháp này đã qua ngày xuất bản dự kiến',

  /** Description for when a user doesn't have publish or schedule releases */
  'permission-missing-description':
    'Vai trò của bạn hiện giới hạn những gì bạn có thể xem trong bản phát hành này. Bạn không thể xuất bản hoặc lên lịch cho bản phát hành này.',

  /** Text for when a user doesn't have publish or schedule releases */
  'permission-missing-title': 'Quyền truy cập bị giới hạn',

  /** Tooltip label when the user doesn't have permission to archive release */
  'permissions.error.archive': 'Bạn không có quyền lưu trữ bản phát hành này',
  /** Tooltip label when the user doesn't have permission to delete release */
  'permissions.error.delete': 'Bạn không có quyền xóa bản phát hành này',
  /** Tooltip label when the user doesn't have permission for discarding a version */
  'permissions.error.discard-version': 'Bạn không có quyền hủy bỏ phiên bản này',
  /** Tooltip label when the user doesn't have permission to duplicate release */
  'permissions.error.duplicate': 'Bạn không có quyền sao chép bản phát hành này',
  /** Tooltip label when the user doesn't have permission to unarchive release */
  'permissions.error.unarchive': 'Bạn không có quyền hủy lưu trữ bản phát hành này',
  /** Tooltip label when the user doesn't have permission for unpublishing a document */
  'permissions.error.unpublish': 'Bạn không có quyền hủy xuất bản tài liệu này',

  /** Tooltip text for when one user is editing a document in a release */
  'presence.tooltip.one':
    '{{displayName}} đang chỉnh sửa tài liệu này trong bản phát hành "{{releaseTitle}}" ngay lúc này',

  /** Tooltip text for publish release action when there are no documents */
  'publish-action.validation.no-documents': 'Không có tài liệu nào để xuất bản',

  /** Description for the dialog confirming the publish of a release with multiple documents */
  'publish-dialog.confirm-publish-description_other':
    "Bản phát hành '<strong>{{title}}</strong>' và {{releaseDocumentsLength}} tài liệu của nó sẽ được xuất bản.",
  /** Title for the dialog confirming the publish of a release */
  'publish-dialog.confirm-publish.title':
    'Bạn có chắc chắn muốn xuất bản bản phát hành và tất cả các phiên bản tài liệu không?',
  /** Label for when documents in release have validation errors */
  'publish-dialog.validation.error': 'Một số tài liệu có lỗi xác thực',
  /** Label for when documents are being validated */
  'publish-dialog.validation.loading': 'Đang xác thực tài liệu...',
  /** Label for the button when the user doesn't have permissions to publish a release */
  'publish-dialog.validation.no-permission': 'Bạn không có quyền xuất bản',

  /** Title for information card on a published release */
  'publish-info.title': 'Bản phát hành này đã được xuất bản thành công.',

  /** Placeholder title for a release with no title */
  'release-placeholder.title': 'Chưa có tiêu đề',

  /** Description for the dialog confirming the revert of a release with multiple documents */
  'revert-dialog.confirm-revert-description_other':
    'Thao tác này sẽ hoàn nguyên {{releaseDocumentsLength}} phiên bản tài liệu.',
  /** Checkbox label to confirm whether to create a staged release for revert or immediately revert */
  'revert-dialog.confirm-revert.stage-revert-checkbox-label':
    'Hoàn nguyên bản phát hành ngay lập tức',
  /** Title for the dialog confirming the revert of a release */
  'revert-dialog.confirm-revert.title':
    "Bạn có chắc chắn muốn hoàn nguyên bản phát hành '{{title}}' không?",
  /** Warning card text for when immediately revert a release with history */
  'revert-dialog.confirm-revert.warning-card':
    'Các thay đổi đã được thực hiện đối với tài liệu trong bản phát hành này sau khi chúng được xuất bản. Việc hoàn nguyên sẽ ghi đè các thay đổi này.',

  /** Description of a reverted release */
  'revert-release.description':
    'Hoàn nguyên các thay đổi đối với các phiên bản tài liệu trong "{{title}}".',
  /** Title of a reverted release */
  'revert-release.title': 'Đang hoàn nguyên "{{title}}"',

  /** Description for the review changes button in release tool */
  'review.description': 'Thêm tài liệu vào bản phát hành này để xem xét các thay đổi',
  /** Text for when a document is edited */
  'review.edited': 'Đã chỉnh sửa <RelativeTime/>',

  /** Schedule release button tooltip when there are no documents to schedule */
  'schedule-action.validation.no-documents': 'Không có tài liệu nào để lên lịch',

  /** Schedule release button tooltip when the release is already scheduled */
  'schedule-button-tooltip.already-scheduled': 'Bản phát hành này đã được lên lịch',
  /** Schedule release button tooltip when there are validation errors */
  'schedule-button-tooltip.validation.error': 'Một số tài liệu có lỗi xác thực',
  /** Schedule release button tooltip when validation is loading */
  'schedule-button-tooltip.validation.loading': 'Đang xác thực tài liệu...',
  /** Schedule release button tooltip when user has no permissions to schedule */
  'schedule-button-tooltip.validation.no-permission': 'Bạn không có quyền lên lịch',

  /** Title of unschedule release dialog */
  'schedule-button.tooltip': 'Bạn có chắc chắn muốn hủy lịch bản phát hành không?',

  /** Description for the confirm button for scheduling a release */
  'schedule-dialog.confirm-button': 'Có, lên lịch',
  /** Description for the dialog confirming the publish of a release with multiple documents */
  'schedule-dialog.confirm-description_other':
    'Bản phát hành <strong>{{title}}</strong> và {{count}} phiên bản tài liệu của nó sẽ được lên lịch.',
  /** Title for unschedule release dialog */
  'schedule-dialog.confirm-title': 'Lên lịch bản phát hành',
  /** Description for warning that the published schedule time is in the past */
  'schedule-dialog.publish-date-in-past-warning':
    'Lên lịch cho một thời gian và ngày trong tương lai.',
  /** Label for date picker when scheduling a release */
  'schedule-dialog.select-publish-date-label': 'Lên lịch vào',

  /** Confirm button text for the schedule unpublish dialog */
  'schedule-unpublish-dialog.confirm': 'Lên lịch Hủy xuất bản',
  /** Description for the schedule unpublish dialog */
  'schedule-unpublish-dialog.description': 'Chọn thời điểm tài liệu này sẽ bị hủy xuất bản.',
  /** Header for the schedule unpublish dialog */
  'schedule-unpublish-dialog.header': 'Lên lịch bản nháp để Hủy xuất bản',

  /** Placeholder for search of documents in a release */
  'search-documents-placeholder': 'Tìm kiếm tài liệu',

  /** Text for when the release has no errors found */
  'summary.all-documents-errors-found': 'Tất cả tài liệu đã được xác thực, phát hiện sự cố',
  /** Text for when the release has validated all documents */
  'summary.all-documents-validated': 'Tất cả tài liệu đã được xác thực, không có sự cố',
  /** Text for when the release was created */
  'summary.created': 'Đã tạo <RelativeTime/>',
  /** Text for when the release is composed of multiple documents */
  'summary.document-count_other': '{{count}} tài liệu',
  /** Text for when the release has some errors found */
  'summary.errors-found':
    'Để xuất bản hoặc lên lịch phát hành, vui lòng giải quyết các sự cố được tìm thấy trong các tài liệu',
  /** Text for when the release has no documents */
  'summary.no-documents': 'Không có tài liệu',
  /** Description for the empty state when a cardinality-one release has no documents */
  'summary.no-documents-cardinality-one.description':
    'Bản nháp đã lên lịch này không chứa tài liệu nào. Tài liệu có thể đã bị xóa.',
  /** Title for the empty state when a cardinality-one release has no documents */
  'summary.no-documents-cardinality-one.title': 'Không có tài liệu trong bản phát hành này',
  /** Text for when the release has not published */
  'summary.not-published': 'Chưa xuất bản',
  /** Text for when the release was published */
  'summary.published': 'Đã xuất bản <RelativeTime/>',
  /** Text for when the release has validated documents */
  'summary.validated-documents':
    '{{validatedCount}} trong số {{totalCount}} tài liệu đã được xác thực',
  /** Text for validation loading indicator */
  'summary.validating-documents':
    'Đang xác thực tài liệu: {{validatedCount}} trong số {{totalCount}}',

  /** add action type that will be shown in the table*/
  'table-body.action.add': 'Thêm',
  /** Change action type that will be shown in the table*/
  'table-body.action.change': 'Thay đổi',
  /** Change action type that will be shown in the table*/
  'table-body.action.unpublish': 'Hủy xuất bản',

  /** Header for the document table in the release tool - action */
  'table-header.action': 'Hành động',
  /** Header for the document table in the release tool - Archived */
  'table-header.archivedAt': 'Đã lưu trữ',
  /** Header for the document table in the release tool - contributors */
  'table-header.contributors': 'Người đóng góp',
  /** Header for the document table in the release tool - created by */
  'table-header.created-by': 'Được tạo bởi',
  /** Header for the document table in the release tool - document preview */
  'table-header.document': 'Tài liệu',
  /** Header for the document table in the release tool - title */
  'table-header.documents': 'Tài liệu',
  /** Header for the document table in the release tool - edited */
  'table-header.edited': 'Đã chỉnh sửa',
  /** Header for the paused scheduled drafts table - intended for */
  'table-header.intended-for': 'Dành cho',
  /** Header for the document table in the release tool - Published */
  'table-header.published-at': 'Đã xuất bản',
  /** Header for the document table in the release tool - Published */
  'table-header.publishedAt': 'Đã xuất bản',
  /** Header for the scheduled drafts document table in the release tool - published at */
  'table-header.scheduled-draft.published-at': 'Xuất bản lúc',
  /** Header for the scheduled drafts document table in the release tool - scheduled for */
  'table-header.scheduled-for': 'Lên lịch cho',
  /** Header for the document table in the release tool - time */
  'table-header.time': 'Thời gian',
  /** Header for the  document table in the release tool - release title */
  'table-header.title': 'Release',
  /** Header for the document table in the release tool - type */
  'table-header.type': 'Loại',
  /** Header for the document table in the release tool - when */
  'table-header.when': 'Khi nào',

  /** Text for the release time label for scheduled releases  which has not been scheduled yet*/
  'time.estimated': 'Ước tính',
  /** Text for the release time label for scheduled releases  which has been scheduled*/
  'time.scheduled': 'Đã lên lịch',

  /** Text for toast when release failed to archive */
  'toast.archive.error': "Không thể lưu trữ '<strong>{{title}}</strong>': {{error}}",
  /** Toast error message when bulk scheduling of active drafts fails */
  'toast.confirm-active-scheduled-drafts.error': 'Không thể lên lịch các bản nháp: {{error}}',
  /** Toast message after copying release ID */
  'toast.copy-release-id.success': 'Đã sao chép ID release vào clipboard',
  /** Toast message after copying release link */
  'toast.copy-release-link.success': 'Đã sao chép liên kết release vào clipboard',
  /** Toast message after copying release title */
  'toast.copy-release-title.success': 'Đã sao chép tiêu đề release vào clipboard',
  /** Description for toast when creating new version of document in release failed */
  'toast.create-version.error': 'Không thể thêm tài liệu vào release: {{error}}',
  /** Description for toast when release deletion failed */
  'toast.delete.error': "Không thể xóa '<strong>{{title}}</strong>': {{error}}",
  /** Description for toast when release is successfully deleted */
  'toast.delete.success': "Release '<strong>{{title}}</strong>' đã được xóa thành công",
  /** Description for toast when release duplication failed */
  'toast.duplicate.error': "Không thể nhân bản '<strong>{{title}}</strong>': {{error}}",
  /** Description for toast when release is successfully duplicated */
  'toast.duplicate.success': "Release '<strong>{{title}}</strong>' đã được nhân bản. <Link/>",
  /** Link text for toast link to the duplicated release */
  'toast.duplicate.success-link': 'Xem release đã nhân bản',
  /** Text for toast when release has been reverted immediately */
  'toast.immediate-revert.success': "Bản phát hành '{{title}}' đã được hoàn nguyên thành công",
  /** Text for toast when release failed to publish */
  'toast.publish.error': "Không thể xuất bản '<strong>{{title}}</strong>': {{error}}",
  /** Text for toast when release has reverted release successfully staged */
  'toast.revert-stage.success':
    "Bản phát hành hoàn nguyên cho '{{title}}' đã được tạo thành công. <Link/>",
  /** Link text for toast link to the generated revert release */
  'toast.revert-stage.success-link': 'Xem bản phát hành hoàn nguyên',
  /** Text for toast when release failed to revert */
  'toast.revert.error': 'Không thể hoàn nguyên bản phát hành: {{error}}',
  /** Text for toast when release failed to schedule */
  'toast.schedule.error': "Không thể lên lịch '<strong>{{title}}</strong>': {{error}}",
  /** Text for toast when release has been scheduled */
  'toast.schedule.success': "Bản phát hành '<strong>{{title}}</strong>' đã được lên lịch.",
  /** Text for toast when release failed to unarchive */
  'toast.unarchive.error': "Không thể hủy lưu trữ '<strong>{{title}}</strong>': {{error}}",
  /** Text for toast when release failed to unschedule */
  'toast.unschedule.error': "Không thể hủy lịch '<strong>{{title}}</strong>': {{error}}",

  /** Text for tooltip when a release has been scheduled */
  'type-picker.tooltip.scheduled': 'Bản phát hành đã được lên lịch, hãy hủy lịch để thay đổi loại',

  /** Text action in unpublish dialog to cancel */
  'unpublish-dialog.action.cancel': 'Hủy',
  /** Text action in unpublish dialog to unpublish */
  'unpublish-dialog.action.unpublish': 'Có, hủy xuất bản khi phát hành',
  /** Description for unpublish dialog, explaining that all changes made to this document will be lost */
  'unpublish-dialog.description.lost-changes':
    'Mọi thay đổi được thực hiện đối với phiên bản tài liệu này sẽ bị mất.',
  /** Description for the unpublish dialog, explaining that it will create a draft if no draft exists at time of release */
  'unpublish-dialog.description.to-draft':
    'Thao tác này sẽ hủy xuất bản tài liệu như một phần của bản phát hành <Label>{{title}}</Label>, và tạo một bản nháp nếu chưa có bản nháp nào tồn tại tại thời điểm phát hành.',
  /** Title for the dialog confirming the unpublish of a release */
  'unpublish-dialog.header': 'Bạn có chắc chắn muốn hủy xuất bản tài liệu này khi phát hành không?',

  /** Text for when a document is unpublished */
  'unpublish.already-unpublished': 'Tài liệu này đã được hủy xuất bản.',
  /** Tooltip label for when a document is unpublished */
  'unpublish.no-published-version': 'Không có phiên bản đã xuất bản nào của tài liệu này.',

  /** Description shown in unschedule relaease dialog */
  'unschedule-dialog.confirm-description':
    'Bản phát hành sẽ không còn được xuất bản vào ngày đã lên lịch',
  /** Title for unschedule release dialog */
  'unschedule-dialog.confirm-title': 'Bạn có chắc chắn muốn hủy lịch bản phát hành không?',
})
