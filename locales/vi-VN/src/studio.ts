import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** "Configuration issue" header */
  'about-dialog.configuration-issue.header': 'Phát hiện vấn đề cấu hình',
  /** Message shown if sanity.cli.ts is missing deployment.appId */
  'about-dialog.configuration-issue.missing-appid':
    'Tự động cập nhật được bật, nhưng không có <code>deployment.appId</code> được cấu hình trong <code>sanity.cli.ts</code>. Studio này đang cập nhật dựa trên kênh <strong>mới nhất</strong>.',
  /** "View documentation" link for auto-updating studios */
  'about-dialog.configuration-issue.missing-appid.view-documentation': 'Xem tài liệu',
  /** "Disabled" status for auto-updates in About-dialog */
  'about-dialog.version-info.auto-updates.disabled': 'Vô hiệu hóa',
  /** "Enabled" status for auto-updates in About-dialog */
  'about-dialog.version-info.auto-updates.enabled': 'Đã kích hoạt',
  /** @deprecated "Auto Updates" status header in About-dialog */
  'about-dialog.version-info.auto-updates.header': 'Cập nhật tự động',
  /** "How to enable" next to Disabled state for Auto updates in version info dialog */
  'about-dialog.version-info.auto-updates.how-to-enable': 'Cách kích hoạt',
  /** "Manage version" link text */
  'about-dialog.version-info.auto-updates.manage-version': 'Quản lý phiên bản',
  /** Text displayed on the "Copy to clipboard"-button after clicked */
  'about-dialog.version-info.copy-to-clipboard-button.copied-text':
    'Đã sao chép vào Clipboard. Chúc bạn dán vui vẻ!',
  /** "Copy to Clipboard" button text for copying version details from About-dialog */
  'about-dialog.version-info.copy-to-clipboard-button.text': 'Sao chép vào Clipboard',
  /** "Current version" header in version info dialog  */
  'about-dialog.version-info.current-version.header': 'Phiên bản hiện tại',
  /** @deprecated "How to upgrade" link text */
  'about-dialog.version-info.how-to-upgrade': 'Cách nâng cấp',
  /** "Latest version" header in version info dialog */
  'about-dialog.version-info.latest-version.header': 'Phiên bản mới nhất',
  /** Info text when auto updates is enabled and a new version is available */
  'about-dialog.version-info.new-auto-update-version-available': 'Phiên bản mới có sẵn',
  /** "New version" header in version info dialog - Note that this is not necessary a *higher* version compared to current:
   *  It's a new version configured for auto updates which in some cases could even be a version below current  */
  'about-dialog.version-info.new-version.text': 'Phiên bản mới',
  /** "Reload"-button when auto updates is enabled and a new version is available */
  'about-dialog.version-info.reload': 'Tải lại',
  /** "Reload to update"-tooltip when auto updates is enabled and a new version is available */
  'about-dialog.version-info.reload-to-update': 'Tải lại Studio để cập nhật',
  /** "Development" tooltip in About-dialog */
  'about-dialog.version-info.tooltip.development': 'Phát triển',
  /** "New version available" tooltip in About-dialog */
  'about-dialog.version-info.tooltip.new-version-available': 'Phiên bản mới có sẵn',
  /** "Prerelease" tooltip in About-dialog */
  'about-dialog.version-info.tooltip.prerelease': 'Phiên bản trước',
  /** "Up to date" tooltip in About-dialog */
  'about-dialog.version-info.tooltip.up-to-date': 'Cập nhật',
  /** @deprecated "Up to date" status in About-dialog */
  'about-dialog.version-info.up-to-date': 'Đã cập nhật',
  /** "Upgrade"-button text */
  'about-dialog.version-info.update-button.text': 'Cập nhật',
  /** "Upgrade"-button tooltip text */
  'about-dialog.version-info.update-button.tooltip': 'Tìm hiểu cách cập nhật Sanity Studio',
  /** "User agent" header in About-dialog */
  'about-dialog.version-info.user-agent.header': 'User agent',
  /** "View on GitHub" link from version info dialog */
  'about-dialog.version-info.view-on-github': 'Xem trên GitHub',

  /** The text used in the tooltip shown in the dialog close button */
  'announcement.dialog.close': 'Đóng',
  /** Aria label to be used in the dialog close button */
  'announcement.dialog.close-label': 'Đóng hộp thoại',
  /**Text to be used in the tooltip in the button in the studio announcement card */
  'announcement.floating-button.dismiss': 'Đóng',
  /**Aria label to be used in the floating button in the studio announcement card, to dismiss the card */
  'announcement.floating-button.dismiss-label': 'Bỏ qua thông báo',
  /**Aria label to be used in the floating button in the studio announcement card */
  'announcement.floating-button.open-label': 'Mở thông báo',

  /** Menu item for deleting the asset */
  'asset-source.asset-list.menu.delete': 'Xóa',
  /** Menu item for showing where a particular asset is used */
  'asset-source.asset-list.menu.show-usage': 'Hiển thị cách sử dụng',
  /** Header in usage dialog for file assets */
  'asset-source.asset-usage-dialog.header_file': 'Tài liệu sử dụng tệp',
  /** Header in usage dialog for image assets */
  'asset-source.asset-usage-dialog.header_image': 'Tài liệu sử dụng hình ảnh',
  /** Text shown in usage dialog when loading documents using the selected asset */
  'asset-source.asset-usage-dialog.loading': 'Đang tải…',
  /** Text for cancel action in delete-asset dialog */
  'asset-source.delete-dialog.action.cancel': 'Hủy bỏ',
  /** Text for "confirm delete" action in delete-asset dialog */
  'asset-source.delete-dialog.action.delete': 'Xóa',
  /** Dialog header for delete-asset dialog when deleting a file */
  'asset-source.delete-dialog.header_file': 'Xóa tệp',
  /** Dialog header for delete-asset dialog when deleting an image */
  'asset-source.delete-dialog.header_image': 'Xóa hình ảnh',
  /** Text shown in delete dialog when loading documents using the selected asset */
  'asset-source.delete-dialog.loading': 'Đang tải…',
  /** Message confirming to delete *named* file */
  'asset-source.delete-dialog.usage-list.confirm-delete-file_named':
    'Bạn chuẩn bị xóa tệp <strong>{{filename}}}</strong> và metadata của nó. Bạn có chắc không?',
  /** Message confirming to delete *unnamed* file */
  'asset-source.delete-dialog.usage-list.confirm-delete-file_unnamed':
    'Bạn chuẩn bị xóa tệp và metadata của nó. Bạn có chắc không?',
  /** Message confirming to delete *named* image */
  'asset-source.delete-dialog.usage-list.confirm-delete-image_named':
    'Bạn chuẩn bị xóa hình ảnh <strong>{{filename}}</strong> và metadata của nó. Bạn có chắc không?',
  /** Message confirming to delete *unnamed* image */
  'asset-source.delete-dialog.usage-list.confirm-delete-image_unnamed':
    'Bạn chuẩn bị xóa hình ảnh và metadata của nó. Bạn có chắc không?',
  /** Alt text showing on image preview in delete asset dialog  */
  'asset-source.delete-dialog.usage-list.image-preview-alt': 'Xem trước hình ảnh',
  /** Warning message showing when *named* file can't be deleted because it is in use */
  'asset-source.delete-dialog.usage-list.warning-file-is-in-use_named':
    '{{filename}} không thể xóa vì nó đang được sử dụng. Để xóa tệp này, bạn cần phải gỡ bỏ tất cả các sử dụng của nó.',
  /** Warning message showing when *unnamed* file can't be deleted because it is in use */
  'asset-source.delete-dialog.usage-list.warning-file-is-in-use_unnamed':
    'Tệp này không thể xóa vì nó đang được sử dụng. Để xóa nó, bạn cần phải gỡ bỏ tất cả các sử dụng của nó.',
  /** Warning message showing when *named* image can't be deleted because it is in use */
  'asset-source.delete-dialog.usage-list.warning-image-is-in-use_named':
    '{{filename}} không thể xóa vì nó đang được sử dụng. Để xóa hình ảnh này, bạn cần phải gỡ bỏ tất cả các sử dụng của nó.',
  /** Warning message showing when *unnamed* image can't be deleted because it is in use */
  'asset-source.delete-dialog.usage-list.warning-image-is-in-use_unnamed':
    'Hình ảnh này không thể xóa vì nó đang được sử dụng. Để xóa nó, bạn cần phải gỡ bỏ tất cả các sử dụng của nó.',
  /** Text shown when the list of assets only include a specific set of types */
  'asset-source.dialog.accept-message':
    'Chỉ hiển thị tài sản của các loại được chấp nhận: <strong>{{acceptTypes}}</strong>',
  /** Select asset dialog cancel-button */
  'asset-source.dialog.button.cancel': 'Hủy bỏ',
  /** Select asset dialog select-button */
  'asset-source.dialog.button.select': 'Chọn',
  /** Keys shared between both image asset source and file asset source */
  /** Select asset dialog title for files */
  'asset-source.dialog.default-title_file': 'Chọn tệp',
  /** Select asset dialog title for images */
  'asset-source.dialog.default-title_image': 'Chọn hình ảnh',
  /** Select asset dialog title for videos */
  'asset-source.dialog.default-title_video': undefined, // 'Select video'
  /** Insert asset error */
  'asset-source.dialog.insert-asset-error':
    'Lỗi khi chèn tài sản. Xem console để biết thêm thông tin.',
  /** Select asset dialog load more items */
  'asset-source.dialog.load-more': 'Tải thêm',
  /** Text shown when selecting a file but there's no files to select from
   * @deprecated no longer in use
   */
  'asset-source.dialog.no-assets_file': 'Không có tệp',
  /** Text shown when selecting an image but there's no images to select from
   * @deprecated no longer in use
   */
  'asset-source.dialog.no-assets_image': 'Không có hình ảnh',
  'asset-source.file.asset-list.action.delete.disabled-cannot-delete-current-file':
    'Không thể xóa tệp tin đang được chọn',
  'asset-source.file.asset-list.action.delete.text': 'Xóa',
  'asset-source.file.asset-list.action.delete.title': 'Xóa tệp tin',
  'asset-source.file.asset-list.action.select-file.title': 'Chọn tệp tin {{filename}}',
  'asset-source.file.asset-list.action.show-usage.title': 'Hiển thị cách sử dụng',
  'asset-source.file.asset-list.delete-failed': 'Tệp tin không thể xóa',
  'asset-source.file.asset-list.delete-successful': 'Tệp tin đã được xóa',
  'asset-source.file.asset-list.header.date-added': 'Ngày thêm vào',
  /** File asset source */
  'asset-source.file.asset-list.header.filename': 'Tên tệp tin',
  'asset-source.file.asset-list.header.size': 'Kích thước',
  'asset-source.file.asset-list.header.type': 'Loại',
  /** Text displayed on button or menu invoking the file asset source */
  'asset-source.file.title': 'Tệp tin đã tải lên',
  'asset-source.image.asset-list.delete-failed': 'Hình ảnh không thể xóa',
  /** Image asset source */
  'asset-source.image.asset-list.delete-successful': 'Hình ảnh đã được xóa',
  /** Text displayed on button or menu invoking the image asset source */
  'asset-source.image.title': 'Hình ảnh đã tải lên',
  'asset-source.usage-list.documents-using-file_named_other':
    '{{count}} tài liệu đang sử dụng tệp tin <code>{{filename}}</code>',
  /** Text shown in usage dialog for a file asset when there are zero, one or more documents using the *named* file **/
  'asset-source.usage-list.documents-using-file_named_zero':
    'Không có tài liệu nào sử dụng tệp tin <code>{{filename}}</code>',
  'asset-source.usage-list.documents-using-file_unnamed_other':
    '{{count}} tài liệu đang sử dụng tệp tin này',
  /** Text shown in usage dialog for a file asset when there are zero, one or more documents using the *unnamed* file **/
  'asset-source.usage-list.documents-using-file_unnamed_zero':
    'Không có tài liệu nào sử dụng tệp tin này',
  'asset-source.usage-list.documents-using-image_named_other':
    '{{count}} tài liệu đang sử dụng hình ảnh <code>{{filename}}</code>',
  /** Text shown in usage dialog for an image asset when there are zero, one or more documents using the *named* image **/
  'asset-source.usage-list.documents-using-image_named_zero':
    'Không có tài liệu nào sử dụng hình ảnh <code>{{filename}}</code>',
  'asset-source.usage-list.documents-using-image_unnamed_other':
    '{{count}} tài liệu đang sử dụng hình ảnh này',
  /** Text shown in usage dialog for an image asset when there are zero, one or more documents using the *unnamed* image **/
  'asset-source.usage-list.documents-using-image_unnamed_zero':
    'Không có tài liệu nào sử dụng hình ảnh này',

  /** Common (all) Asset Source texts. Note that all translation keys starting with 'asset-source.' is for the built in asset source. */
  'asset-sources.common.uploader.upload-failed.description': 'Xem console để biết thêm thông tin.',
  'asset-sources.common.uploader.upload-failed.title': 'Tải lên thất bại',
  /** Menu Items for Dataset Asset Source (will be replaced with workspace name by default) */
  'asset-sources.dataset.file.title': 'Tệp Workspace',
  'asset-sources.dataset.image.title': 'Hình ảnh Workspace',
  /** Error messages for the Media Library Asset Source  */
  'asset-sources.media-library.error.library-could-not-be-resolved':
    'Đã xảy ra lỗi khi cố gắng truy cập Thư viện Media cho dự án này.',
  /** Error message shown when no media library has been provisioned for the current organization */
  'asset-sources.media-library.error.no-media-library-provisioned':
    'Không có thư viện media nào được cung cấp cho tổ chức này.',
  /** Menu Items for Media Library Asset Source */
  'asset-sources.media-library.file.title': 'Thư viện Media',
  'asset-sources.media-library.image.title': 'Thư viện Media',
  /** Info messages for the Media Library Asset Source  */
  'asset-sources.media-library.select-dialog.title_file': undefined, // 'Selecting file for {{targetTitle}}'
  'asset-sources.media-library.select-dialog.title_image': undefined, // 'Selecting image for {{targetTitle}}'
  'asset-sources.media-library.select-dialog.title_video': undefined, // 'Selecting video for {{targetTitle}}'
  /** Warning message shown when uploading already existing files to the Media Library Asset Source */
  'asset-sources.media-library.warning.file-already-exist.description':
    'Sử dụng tệp tin đã có trong thư viện.',
  'asset-sources.media-library.warning.file-already-exist.title':
    "Tệp tin: '{{filename}}' đã tồn tại",

  /** Label when a release has been deleted by a different user */
  'banners.deleted-bundle-banner.text': "Phiên bản '<strong>{{title}}</strong>' đã bị xóa.",

  /** Action message for navigating to next month */
  'calendar.action.go-to-next-month': 'Chuyển đến tháng tiếp theo',
  /** Action message for navigating to next year */
  'calendar.action.go-to-next-year': 'Chuyển đến năm tiếp theo',
  /** Action message for navigating to previous month */
  'calendar.action.go-to-previous-month': 'Đi tới tháng trước',
  /** Action message for navigating to previous year */
  'calendar.action.go-to-previous-year': 'Đi tới năm trước',
  /* Label for navigating the calendar to "today", without _selecting_ today. Short form, eg `Today`, not `Go to today` */
  'calendar.action.go-to-today': 'Hôm nay',
  /* Accessibility label for navigating the calendar to "today", without _selecting_ today */
  'calendar.action.go-to-today-aria-label': 'Đi tới hôm nay',
  /* Label for navigating the calendar to "tomorrow", without _selecting_ tomorrow. Short form, eg `Tomorrow`, not `Go to tomorrow` */
  'calendar.action.go-to-tomorrow': 'Ngày mai',
  /* Label for navigating the calendar to "yesterday", without _selecting_ yesterday. Short form, eg `Yesterday`, not `Go to yesterday` */
  'calendar.action.go-to-yesterday': 'Hôm qua',
  /** Label for switch that controls whether or not to include time in given timestamp */
  'calendar.action.include-time-label': 'Bao gồm thời gian',
  /** Action message for selecting the time */
  'calendar.action.select-time': 'Chọn thời gian',
  /** Action message for setting to the current time */
  'calendar.action.set-to-current-time': 'Đặt thành thời gian hiện tại',
  /** Label for selecting an hour preset. Receives a `time` param as a string on hh:mm format and a `date` param as a Date instance denoting the preset date */
  'calendar.action.set-to-time-preset': '{{time}} vào {{date, datetime}}',
  /** Aria label for button to open date picker */
  'calendar.button.aria-label': 'Mở lịch',
  /** Tooltip content for button to open datetime input */
  'calendar.button.tooltip-text': 'Chọn ngày',
  /** Error message displayed in calendar when entered date is not the correct format */
  'calendar.error.must-be-in-format': 'Phải ở định dạng <Emphasis>{{exampleDate}}</Emphasis>',
  /** Month name for April */
  'calendar.month-names.april': 'Tháng Tư',
  /** Month name for August */
  'calendar.month-names.august': 'Tháng Tám',
  /** Month name for December */
  'calendar.month-names.december': 'Tháng Mười Hai',
  /** Month name for February */
  'calendar.month-names.february': 'Tháng Hai',
  /** Month name for January */
  'calendar.month-names.january': 'Tháng Một',
  /** Month name for July */
  'calendar.month-names.july': 'Tháng Bảy',
  /** Month name for June */
  'calendar.month-names.june': 'Tháng Sáu',
  /** Month name for March */
  'calendar.month-names.march': 'Tháng Ba',
  /** Month name for May */
  'calendar.month-names.may': 'Tháng Năm',
  /** Month name for November */
  'calendar.month-names.november': 'Tháng Mười Một',
  /** Month name for October */
  'calendar.month-names.october': 'Tháng Mười',
  /** Month name for September */
  'calendar.month-names.september': 'Tháng Chín',
  /** Short weekday name for Friday */
  'calendar.weekday-names.short.friday': 'Fri',
  /** Short weekday name for Monday */
  'calendar.weekday-names.short.monday': 'Thứ Hai',
  /** Short weekday name for Saturdayday */
  'calendar.weekday-names.short.saturday': 'Thứ Bảy',
  /** Short weekday name for Sunday */
  'calendar.weekday-names.short.sunday': 'Chủ Nhật',
  /** Short weekday name for Thursday */
  'calendar.weekday-names.short.thursday': 'Thứ Năm',
  /** Short weekday name for Tuesday */
  'calendar.weekday-names.short.tuesday': 'Thứ Ba',
  /** Short weekday name for Wednesday */
  'calendar.weekday-names.short.wednesday': 'Thứ Tư',

  /** Label for the close button label in Review Changes pane */
  'changes.action.close-label': 'Đóng xem xét thay đổi',
  /** Cancel label for revert button prompt action */
  'changes.action.revert-all-cancel': 'Hủy bỏ',
  /** Revert all confirm label for revert button action - used on prompt button + review changes pane */
  'changes.action.revert-all-confirm': 'Hoàn tác tất cả',
  /** Revert for confirming revert (plural) label for field change action */
  'changes.action.revert-changes-confirm-change_other': 'Hoàn tác thay đổi',
  /** Prompt for reverting changes for a field change */
  'changes.action.revert-changes-description':
    'Bạn có chắc chắn muốn hoàn tác những thay đổi không?',
  /** Label for when the action of the change was to set something that was previously empty, eg a field was given a value, an array item was added, an asset was selected or similar */
  'changes.added-label': 'Đã thêm',
  /** Array diff: An item was added in a given position (`{{position}}`) */
  'changes.array.item-added-in-position': 'Đã thêm vào vị trí {{position}}',
  'changes.array.item-moved_down_other': 'Đã di chuyển xuống {{count}} vị trí',
  'changes.array.item-moved_up_other': 'Đã di chuyển lên {{count}} vị trí',
  /** Array diff: An item was removed from a given position (`{{position}}`) */
  'changes.array.item-removed-from-position': 'Đã xóa khỏi vị trí {{position}}',
  /** Accessibility label for the "change bar" shown when there are edits on a field-level */
  'changes.change-bar.aria-label': 'Xem xét thay đổi',
  /** Label for when the action of the change was _not_ an add/remove, eg a text field changed value, an image was changed from one asset to another or similar */
  'changes.changed-label': 'Đã thay đổi',
  /** Label and text for tooltip that indicates the authors of the changes */
  'changes.changes-by-author': 'Thay đổi bởi',
  /** Additional text shown in development mode when a diff component crashes during rendering */
  'changes.error-boundary.developer-info':
    'Kiểm tra bảng điều khiển của nhà phát triển để biết thêm thông tin',
  /** Text shown when a diff component crashes during rendering, triggering the error boundary */
  'changes.error-boundary.title': 'Hiển thị các thay đổi cho trường này gây ra lỗi',
  /* Error description when changes could not be loaded */
  'changes.error-description': 'Chúng tôi không thể tải các thay đổi cho tài liệu này.',
  /** Error title when changes could not be loaded */
  'changes.error-title': 'Đã xảy ra lỗi',
  /** Error message shown when the value of a field is not the expected one */
  'changes.error.incorrect-type-message':
    'Lỗi giá trị: Giá trị thuộc loại "<code>{{actualType}}</code>", mong đợi "<code>{{expectedType}}</code>"',
  /** File diff: Fallback title for the meta info section when there is no original filename to use  */
  'changes.file.meta-info-fallback-title': 'Không tiêu đề',
  /** Image diff: Text shown in tooltip when hovering hotspot that has changed in diff view */
  'changes.image.crop-changed': 'Cắt ảnh đã thay đổi',
  /** Image diff: Text shown if the previous image asset was deleted (shouldn't theoretically happen) */
  'changes.image.deleted': 'Ảnh đã xóa',
  /** Image diff: Text shown if the image failed to be loaded when previewing it */
  'changes.image.error-loading-image': 'Lỗi tải hình ảnh',
  /** Image diff: Text shown in tooltip when hovering hotspot that has changed in diff view */
  'changes.image.hotspot-changed': 'Điểm nóng đã thay đổi',
  /** Image diff: Fallback title for the meta info section when there is no original filename to use  */
  'changes.image.meta-info-fallback-title': 'Không tiêu đề',
  /** Image diff: Text shown if no asset has been set for the field (but has metadata changes) */
  'changes.image.no-asset-set': 'Hình ảnh chưa được thiết lập',
  /** Image diff: Text shown when the from/to state has/had no image */
  'changes.image.no-image-placeholder': '(không có hình ảnh)',
  /** Label for the "from" value in the change inspector */
  'changes.inspector.from-label': 'Từ',
  /** Label for the "meta" (field path, action etc) information in the change inspector */
  'changes.inspector.meta-label': 'Meta',
  /** Label for the "to" value in the change inspector */
  'changes.inspector.to-label': 'Đến',
  /** Loading author of change in the differences tooltip in the review changes pane */
  'changes.loading-author': 'Đang tải…',
  /** Loading changes in Review Changes Pane */
  'changes.loading-changes': 'Đang tải thay đổi…',
  /** Error message shown when the document revision could not be found */
  'changes.missing-since-document-error':
    'Chúng tôi không thể tìm thấy phiên bản tài liệu với id: <code>{{revisionId}}</code> mà bạn đang cố gắng so sánh. <Break/> Điều này có thể là do chính sách giữ lịch sử của gói dịch vụ của bạn. <Break/> Vui lòng chọn một mục <strong>Từ</strong> khác.',
  /** No Changes description in the Review Changes pane */
  'changes.no-changes-description':
    'Chỉnh sửa tài liệu hoặc chọn một phiên bản cũ hơn trong dòng thời gian để xem danh sách các thay đổi xuất hiện trong bảng điều khiển này.',
  /** No Changes title in the Review Changes pane */
  'changes.no-changes-title': 'Không có thay đổi',
  /* Label for the tooltip that shows when an action is not selectable*/
  'changes.not-selectable': 'Không thể chọn sự kiện này',
  /** Portable Text diff: An annotation was added */
  'changes.portable-text.annotation_added': 'Đã thêm chú thích',
  /** Portable Text diff: An annotation was changed */
  'changes.portable-text.annotation_changed': 'Đã thay đổi chú thích',
  /** Portable Text diff: An annotation was removed */
  'changes.portable-text.annotation_removed': 'Đã xóa chú thích',
  /** Portable Text diff: An annotation was left unchanged */
  'changes.portable-text.annotation_unchanged': 'Chú thích không thay đổi',
  /** Portable Text diff: A block changed from one style to another (eg `normal` to `h1` or similar) */
  'changes.portable-text.block-style-changed':
    'Đã thay đổi kiểu khối từ "{{fromStyle}}" sang "{{toStyle}}"',
  /** Portable Text diff: Change formatting of text (setting/unsetting marks, eg bold/italic etc) */
  'changes.portable-text.changed-formatting': 'Đã thay đổi định dạng',
  /** Portable Text diff: An empty inline object is part of a change */
  'changes.portable-text.empty-inline-object': 'Đối tượng nội tuyến trống {{inlineObjectType}}',
  /** Portable Text diff: An empty object is the result of adding/removing an annotation */
  'changes.portable-text.empty-object-annotation': 'Chú thích trống {{annotationType}}',
  /** Portable Text diff: Added a block containing no text (eg empty block) */
  'changes.portable-text.empty-text_added': 'Đã thêm văn bản trống',
  /** Portable Text diff: Changed a block that contained no text (eg empty block) */
  'changes.portable-text.empty-text_changed': 'Đã thay đổi văn bản trống',
  /** Portable Text diff: Removed a block containing no text (eg empty block) */
  'changes.portable-text.empty-text_removed': 'Đã xóa văn bản trống',
  /** Portable Text diff: An inline object was added */
  'changes.portable-text.inline-object_added': 'Đã thêm đối tượng nội tuyến',
  /** Portable Text diff: An inline object was changed */
  'changes.portable-text.inline-object_changed': 'Đã thay đổi đối tượng nội tuyến',
  /** Portable Text diff: An inline object was removed */
  'changes.portable-text.inline-object_removed': 'Đã xóa đối tượng nội tuyến',
  /** Portable Text diff: An inline object was left unchanged */
  'changes.portable-text.inline-object_unchanged': 'Đối tượng nội tuyến không thay đổi',
  /** Portable Text diff: Added a chunk of text */
  'changes.portable-text.text_added': 'Đã thêm văn bản',
  /** Portable Text diff: Removed a chunk of text */
  'changes.portable-text.text_removed': 'Đã xóa văn bản',
  /** Portable Text diff: Annotation has an unknown schema type */
  'changes.portable-text.unknown-annotation-schema-type': 'Loại sơ đồ chú thích không xác định',
  /** Portable Text diff: Inline object has an unknown schema type */
  'changes.portable-text.unknown-inline-object-schema-type':
    'Loại sơ đồ đối tượng nội tuyến không xác định',
  /** Label for when the action of the change was a removal, eg a field was cleared, an array item was removed, an asset was deselected or similar */
  'changes.removed-label': 'Đã xóa',
  /** Same Revision Selected description in the Review Changes pane */
  'changes.same-revision-selected-description':
    'Bạn đã chọn cùng một phiên bản <strong>từ</strong> và <strong>đến</strong>, vui lòng chọn các phiên bản khác nhau để so sánh sự thay đổi giữa chúng.',
  /** Same Revision Selected title in the Review Changes pane */
  'changes.same-revision-selected-title': 'Đã chọn cùng một phiên bản',
  /** Title for the Review Changes pane */
  'changes.title': 'Xem lại các thay đổi',
  /**The title that will be shown in the badge inside the events when the item is a draft */
  'changes.versions.draft': 'Bản nháp',

  /** --- Common components --- */
  /** Tooltip text for context menu buttons */
  'common.context-menu-button.tooltip': 'Hiển thị thêm',
  /** Default text for dialog cancel button */
  'common.dialog.cancel-button.text': 'Hủy bỏ',
  /** Default text for dialog confirm button */
  'common.dialog.confirm-button.text': 'Xác nhận',
  /** Default text in shared loader text / spinner lockup */
  'common.loading': 'Đang tải',
  /** The title of the reconnecting toast */
  'common.reconnecting.toast.title': 'Đang cố gắng kết nối…',

  /** --- Configuration issues --- */
  /** Default label text on configuration issues button */
  'configuration-issues.button.label': 'Vấn đề cấu hình',
  /** Tooltip displayed on configuration issues button */
  'configuration-issues.button.tooltip': 'Phát hiện vấn đề cấu hình',

  /** The fallback title for an ordering menu item if no localized titles are provided. */
  'default-menu-item.fallback-title': 'Sắp xếp theo {{title}}',

  /** Title for the default ordering/SortOrder if no orderings are provided and the caption field is found */
  'default-orderings.caption': 'Sắp xếp theo Chú thích',
  /** Title for the default ordering/SortOrder if no orderings are provided and the description field is found */
  'default-orderings.description': 'Sắp xếp theo Mô tả',
  /** Title for the default ordering/SortOrder if no orderings are provided and the header field is found */
  'default-orderings.header': 'Sắp xếp theo Đầu trang',
  /** Title for the default ordering/SortOrder if no orderings are provided and the heading field is found */
  'default-orderings.heading': 'Sắp xếp theo Tiêu đề',
  /** Title for the default ordering/SortOrder if no orderings are provided and the label field is found */
  'default-orderings.label': 'Sắp xếp theo Nhãn',
  /** Title for the default ordering/SortOrder if no orderings are provided and the name field is found */
  'default-orderings.name': 'Sắp xếp theo Tên',
  /** Title for the default ordering/SortOrder if no orderings are provided and the title field is found */
  'default-orderings.title': 'Sắp xếp theo Tiêu đề',

  /** Label to show in the document footer indicating the creation date of the document */
  'document-status.created': 'Đã tạo {{date}}',
  /** Label to show in the document status indicating the date of the status */
  'document-status.date': '{{date}}',
  /** Label to show in the document footer indicating the last edited date of the document */
  'document-status.edited': 'Đã chỉnh sửa {{date}}',
  /** Label to show in the document footer indicating the document is not published*/
  'document-status.not-published': 'Chưa được xuất bản',
  /** Label to show in the document footer indicating the published date of the document */
  'document-status.published': 'Đã xuất bản {{date}}',
  /** Label to show in the document footer indicating the revision from date of the document */
  'document-status.revision-from': 'Phiên bản từ <em>{{date}}</em>',
  /** Label to show in the document footer indicating that the revision was not found */
  'document-status.revision-not-found': 'Không tìm thấy phiên bản',

  /** Label to indicate that a document type was not found */
  'document.type.not-found': 'Không tìm thấy loại tài liệu "{{type}}"',

  /** The value of the <code>_key</code> property must be a unique string. */
  'form.error.duplicate-keys-alert.details.additional-description':
    'Giá trị của thuộc tính <code>_key</code> phải là một chuỗi duy nhất.',
  /** This usually happens when items are created using an API client, and the <code>_key</code> property of each elements has been generated non-uniquely. */
  'form.error.duplicate-keys-alert.details.description':
    'Điều này thường xảy ra khi các mục được tạo ra bằng cách sử dụng một API client, và thuộc tính <code>_key</code> của từng phần tử đã được tạo ra không duy nhất.',
  /** Developer info */
  'form.error.duplicate-keys-alert.details.title': 'Thông tin cho nhà phát triển',
  /** Generate unique keys */
  'form.error.duplicate-keys-alert.generate-button.text': 'Tạo ra các khóa duy nhất',
  /** Several items in this list share the same identifier (key). Every item must have an unique identifier. */
  'form.error.duplicate-keys-alert.summary':
    'Một số mục trong danh sách này chia sẻ cùng một định danh (khóa). Mỗi mục phải có một định danh duy nhất.',
  /** Non-unique keys */
  'form.error.duplicate-keys-alert.title': 'Khóa không duy nhất',
  /** Error text shown when a field with a given name cannot be found in the schema or is conditionally hidden but explicitly told to render  */
  'form.error.field-not-found':
    'Trường "{{fieldName}}" không được tìm thấy trong số các thành viên – xác nhận rằng nó đã được định nghĩa trong sơ đồ và không bị ẩn điều kiện nhưng được yêu cầu hiển thị rõ ràng.',
  /** Add missing keys */
  'form.error.missing-keys-alert.add-button.text': 'Thêm các khóa còn thiếu',
  /** The value of the <code>_key</code> property must be a unique string. */
  'form.error.missing-keys-alert.details.additional-description':
    'Giá trị của thuộc tính <code>_key</code> phải là một chuỗi duy nhất.',
  /** This usually happens when items are created using an API client, and the <code>_key</code> property has not been included. */
  'form.error.missing-keys-alert.details.description':
    'Điều này thường xảy ra khi các mục được tạo ra bằng cách sử dụng một API client, và thuộc tính <code>_key</code> không được bao gồm.',
  /** Developer info */
  'form.error.missing-keys-alert.details.title': 'Thông tin cho nhà phát triển',
  /** Some items in the list are missing their keys. This must be fixed in order to edit the list. */
  'form.error.missing-keys-alert.summary':
    'Một số mục trong danh sách thiếu khóa của chúng. Điều này cần được sửa chữa để có thể chỉnh sửa danh sách.',
  /** Missing keys */
  'form.error.missing-keys-alert.title': 'Thiếu khóa',
  /** This usually happens when items are created using an API client, or when a custom input component has added invalid data to the list. */
  'form.error.mixed-array-alert.details.description':
    'Điều này thường xảy ra khi các mục được tạo ra bằng cách sử dụng một API client, hoặc khi một thành phần nhập liệu tùy chỉnh đã thêm dữ liệu không hợp lệ vào danh sách.',
  /** Developer info */
  'form.error.mixed-array-alert.details.title': 'Thông tin cho nhà phát triển',
  /**  Remove non-object values */
  'form.error.mixed-array-alert.remove-button.text': 'Xóa các giá trị không phải đối tượng',
  /** Some items in this list are not objects. This must be fixed in order to edit the list. */
  'form.error.mixed-array-alert.summary':
    'Một số mục trong danh sách này không phải là đối tượng. Điều này cần được sửa chữa để có thể chỉnh sửa danh sách.',
  /** Invalid list values */
  'form.error.mixed-array-alert.title': 'Giá trị danh sách không hợp lệ',
  /** Error text shown when form is unable to find an array item at a given indexed path */
  'form.error.no-array-item-at-index':
    'Không tìm thấy phần tử mảng tại chỉ mục <code>{{index}}</code> ở đường dẫn <code>{{path}}</code>',
  /** Error text shown when form is unable to find an array item at a given keyed path */
  'form.error.no-array-item-at-key':
    'Không tìm thấy phần tử mảng với `_key` <code>"{{key}}"</code> ở đường dẫn <code>{{path}}</code>',
  /** The title above the error call stack output related to the crash */
  'form.error.unhandled-runtime-error.call-stack.title': 'Ngăn xếp gọi:',
  /** The title above the error component stack provided by React's underlying ErrorBoundary component */
  'form.error.unhandled-runtime-error.component-stack.title': 'Ngăn xếp thành phần:',
  /** The error message for the unhandled error that crashed the Input component during render */
  'form.error.unhandled-runtime-error.error-message': 'Lỗi: {{message}}',
  /** The title for the error card rendered inside a field in place of a crashing input */
  'form.error.unhandled-runtime-error.title': 'Lỗi Runtime Không Xử Lý Được',
  /** Form field deprecated label */
  'form.field.deprecated-label': 'lỗi thời',
  /** Fallback title shown above field if it has no defined title */
  'form.field.untitled-field-label': 'Không tiêu đề',
  /** Accessibility label for the icon that indicates the field has a validation error */
  'form.validation.has-error-aria-label': 'Có lỗi',
  /** Accessibility label for the icon that indicates the field has validation information */
  'form.validation.has-info-aria-label': 'Có thông tin',
  /** Accessibility label for the icon that indicates the field has a validation warning */
  'form.validation.has-warning-aria-label': 'Có cảnh báo',
  'form.validation.summary.errors-count_other': '{{count}} lỗi',
  'form.validation.summary.warnings-count_other': '{{count}} cảnh báo',

  'free-trial.tooltip.days-count_other': '{{count}} ngày còn lại trong thời gian dùng thử',
  /** Tooltip for free trial navbar button, once trial has ended */
  'free-trial.tooltip.trial-finished': 'Nâng cấp dự án của bạn',

  /**
   * Label for "contact sales" call to action
   * These are titles for fallback links in the event the help & resources endpoint isn't able to be fetched
   */
  'help-resources.action.contact-sales': 'Liên hệ bộ phận kinh doanh',
  /**
   * Label for "help and support" call to action
   * These are titles for fallback links in the event the help & resources endpoint isn't able to be fetched
   */
  'help-resources.action.help-and-support': 'Trợ giúp và hỗ trợ',
  /**
   * Label for "join our community" call to action
   * These are titles for fallback links in the event the help & resources endpoint isn't able to be fetched
   */
  'help-resources.action.join-our-community': 'Tham gia cộng đồng của chúng tôi',
  /** Information for what the latest sanity version is */
  'help-resources.latest-sanity-version': 'Phiên bản mới nhất là {{latestVersion}}',
  /** Menu item for reloading Studio to update */
  'help-resources.studio-auto-update-now': 'Tải lại để cập nhật lên v{{newVersion}}',
  /** Information for what studio version the current studio is running */
  'help-resources.studio-version': 'Phiên bản Sanity Studio {{studioVersion}}',
  /** Title for help and resources menus */
  'help-resources.title': 'Trợ giúp và tài nguyên',

  /** Text for button to cancel an ongoing upload */
  'input.files.common.cancel-upload': 'Hủy',
  /** Text for menuitem upload button default asset source */
  'input.files.common.upload-placeholder.file-input-button.default-source.badge': 'Mặc định',
  /** Text for file input button in upload placeholder */
  'input.files.common.upload-placeholder.file-input-button.text': 'Tải lên',
  /** Uploading <FileName/> */
  'input.files.common.upload-progress': 'Đang tải lên <FileName/>',
  /** The referenced document cannot be opened, because the URL failed to be resolved */
  'input.reference.document-cannot-be-opened.failed-to-resolve-url':
    'Không thể mở tài liệu này (không thể giải quyết URL đến Studio)',

  /** Label for adding item after a specific array item */
  'inputs.array.action.add-after': 'Thêm phần tử sau',
  /** Label for adding item before a specific array item */
  'inputs.array.action.add-before': 'Thêm phần tử trước',
  /** Label for adding array item action when the schema allows for only one schema type */
  'inputs.array.action.add-item': 'Thêm phần tử',
  /**
   * Label for adding one array item action when the schema allows for multiple schema types,
   * eg. will prompt the user to select a type once triggered
   */
  'inputs.array.action.add-item-select-type': 'Thêm phần tử...',
  /** Label for copying an array item  */
  'inputs.array.action.copy': 'Sao chép',
  /** Array drag handle button tooltip */
  'inputs.array.action.drag.tooltip': 'Kéo để sắp xếp lại',
  /** Label for duplicating an array item  */
  'inputs.array.action.duplicate': 'Nhân bản',
  /** Label for editing the item of a specific type, eg "Edit Person" */
  'inputs.array.action.edit': 'Chỉnh sửa {{itemTypeTitle}}',
  /** Label for removing an array item action  */
  'inputs.array.action.remove': 'Xóa',
  /** Label for removing action when an array item has an error  */
  'inputs.array.action.remove-invalid-item': 'Xóa',
  /** Label for viewing the item of a specific type, eg "View Person" */
  'inputs.array.action.view': 'Xem {{itemTypeTitle}}',
  /** Error description for the array item tooltip that explains that the current item can still be moved or deleted but not edited since the schema definition is not found */
  'inputs.array.error.can-delete-but-no-edit-description':
    'Bạn vẫn có thể di chuyển hoặc xóa mục này, nhưng không thể chỉnh sửa vì không tìm thấy định nghĩa schema cho loại của nó.',
  /** Error label for toast when array could not resolve the initial value */
  'inputs.array.error.cannot-resolve-initial-value-title':
    'Không thể xác định giá trị ban đầu cho loại: {{schemaTypeTitle}}: {{errorMessage}}.',
  /** Error label for toast when trying to upload multiple array items of a type that cannot be converted to array */
  'inputs.array.error.cannot-upload-unable-to-convert_other':
    'Các mục sau không thể tải lên vì không có phương thức chuyển đổi nào từ loại nội dung sang mục mảng:',
  /** Error description for the array item tooltip that explains that the current type item is not valid for the list  */
  'inputs.array.error.current-schema-not-declare-description':
    'Schema hiện tại không khai báo mục loại <code>{{typeName}}</code> là hợp lệ cho danh sách này. Điều này có thể có nghĩa là loại đã bị loại bỏ khỏi danh sách mục hợp lệ, hoặc có người khác đã thêm nó vào schema cục bộ của họ mà chưa được triển khai.',
  /** Error description to show how the item is being represented in the json format */
  'inputs.array.error.json-representation-description': 'Biểu diễn JSON của mục này:',
  /** Error description for the array item tooltip that explains what the error means with more context */
  'inputs.array.error.type-is-incompatible-prompt':
    'Mục loại <code>{{typeName}}</code> không hợp lệ cho danh sách này',
  /** Error title for when an item type within an array input is incompatible, used in the tooltip */
  'inputs.array.error.type-is-incompatible-title': 'Tại sao điều này lại xảy ra?',
  /** Error label for unexpected errors in the Array Input */
  'inputs.array.error.unexpected-error': 'Lỗi không mong đợi: {{error}}',
  /** Label for the array insert menu all items filter  */
  'inputs.array.insert-menu.filter.all-items': 'Tất cả',
  /** Label for when the array insert menu search shows no items */
  'inputs.array.insert-menu.search.no-results': 'Không tìm thấy mục nào',
  /** Placeholder for the array insert menu search field */
  'inputs.array.insert-menu.search.placeholder': 'Tìm kiếm',
  /** Tooltip for the array insert menu grid view toggle */
  'inputs.array.insert-menu.toggle-grid-view.tooltip': 'Chuyển đổi xem lưới',
  /** Tooltip for the array insert menu list view toggle */
  'inputs.array.insert-menu.toggle-list-view.tooltip': 'Chuyển đổi xem danh sách',
  /** Label for when the array input doesn't have any items */
  'inputs.array.no-items-label': 'Không có mục nào',
  /** Label for read only array fields */
  'inputs.array.read-only-label': 'Trường này chỉ đọc',
  /** Label for when the array input is resolving the initial value for the item */
  'inputs.array.resolving-initial-value': 'Đang xác định giá trị ban đầu…',
  /** Tooltip content when boolean input is disabled */
  'inputs.boolean.disabled': 'Đã tắt',
  /** Warning label when selected datetime is in the past */
  'inputs.dateTime.past-date-warning': 'Chọn một ngày trong tương lai.',
  /** Placeholder value for datetime input */
  'inputs.datetime.placeholder': 'ví dụ: {{example}}',
  /** Acessibility label for button to open file options menu */
  'inputs.file.actions-menu.file-options.aria-label': 'Mở menu tùy chọn tệp',
  /** Browse */
  'inputs.file.browse-button.text': 'Duyệt',
  /** Select file */
  'inputs.file.dialog.title': 'Chọn tệp',
  /** Unknown member kind: `{{kind}}` */
  'inputs.file.error.unknown-member-kind': 'Loại thành viên không xác định: {{kind}}',
  /** The value of this field is not a valid file. Resetting this field will let you choose a new file. */
  'inputs.file.invalid-file-warning.description':
    'Giá trị của trường này không phải là tệp hợp lệ. Đặt lại trường này sẽ cho phép bạn chọn một tệp mới.',
  /** Reset value */
  'inputs.file.invalid-file-warning.reset-button.text': 'Đặt lại giá trị',
  /** Invalid file value */
  'inputs.file.invalid-file-warning.title': 'Giá trị tệp không hợp lệ',
  /** Select */
  'inputs.file.multi-browse-button.text': 'Chọn',
  /** The upload could not be completed at this time. */
  'inputs.file.upload-failed.description': 'Không thể hoàn thành việc tải lên vào lúc này.',
  /** Upload failed */
  'inputs.file.upload-failed.title': 'Tải lên thất bại',
  /** Clear field */
  'inputs.files.common.actions-menu.clear-field.label': 'Xóa trường',
  /** Copy URL */
  'inputs.files.common.actions-menu.copy-url.label': 'Sao chép URL',
  /** Download */
  'inputs.files.common.actions-menu.download.label': 'Tải xuống',
  /** The URL is copied to the clipboard */
  'inputs.files.common.actions-menu.notification.url-copied': 'URL đã được sao chép vào bảng tạm',
  /** Replace */
  'inputs.files.common.actions-menu.replace.label': 'Thay thế',
  /** Upload */
  'inputs.files.common.actions-menu.upload.label': 'Tải lên',
  /** Drop to upload */
  'inputs.files.common.drop-message.drop-to-upload': 'Thả để tải lên',
  /** Drop to upload `{{count}}` files */
  'inputs.files.common.drop-message.drop-to-upload-multi_other': 'Thả để tải lên {{count}} tệp',
  /** Can't upload any of these files here */
  'inputs.files.common.drop-message.drop-to-upload.no-accepted-file-message_other':
    'Không thể tải lên bất kỳ tệp nào ở đây',
  /** `{{count}}` files can't be uploaded here */
  'inputs.files.common.drop-message.drop-to-upload.rejected-file-message_other':
    '{{count}} tệp không thể được tải lên ở đây',
  'inputs.files.common.placeholder.cannot-upload-some-files_other':
    'Không thể tải lên {{count}} tệp',
  /** Drag or paste type here */
  'inputs.files.common.placeholder.drag-or-paste-to-upload_file': 'Kéo hoặc dán tệp vào đây',
  /** Drag or paste image here */
  'inputs.files.common.placeholder.drag-or-paste-to-upload_image': 'Kéo hoặc dán hình ảnh vào đây',
  /** Drop to upload file */
  'inputs.files.common.placeholder.drop-to-upload_file': 'Thả để tải lên tệp',
  /** Drop to upload image */
  'inputs.files.common.placeholder.drop-to-upload_image': 'Thả để tải lên hình ảnh',
  /** Read only */
  'inputs.files.common.placeholder.read-only': 'Chỉ đọc',
  /** Select asset source destination for files to upload */
  'inputs.files.common.placeholder.select-asset-source-upload-destination': 'Tải tệp lên:',
  /** Can't upload files here */
  'inputs.files.common.placeholder.upload-not-supported': 'Không thể tải lên tệp ở đây',
  /** Clear upload */
  'inputs.files.common.stale-upload-warning.clear': 'Xóa tải lên',
  /** An upload has made no progress for at least `{{staleThresholdMinutes}}` minutes and likely got interrupted. You can safely clear the incomplete upload and try uploading again. */
  'inputs.files.common.stale-upload-warning.description':
    'Một tải lên không có tiến triển trong ít nhất {{staleThresholdMinutes}} phút và có thể đã bị gián đoạn. Bạn có thể an toàn xóa tải lên không hoàn chỉnh và thử tải lên lại.',
  /** Incomplete upload */
  'inputs.files.common.stale-upload-warning.title': 'Tải lên không hoàn chỉnh',
  /** Tooltip text for action to crop image */
  'inputs.image.actions-menu.crop-image-tooltip': 'Cắt hình ảnh',
  /** Accessibility label for button to open image edit dialog */
  'inputs.image.actions-menu.edit-details.aria-label': 'Mở hộp thoại chỉnh sửa hình ảnh',
  /** Accessibility label for button to open image options menu */
  'inputs.image.actions-menu.options.aria-label': 'Mở menu tùy chọn hình ảnh',
  /** Select */
  'inputs.image.browse-menu.text': 'Chọn',
  /** Cannot upload this file here */
  'inputs.image.drag-overlay.cannot-upload-here': 'Không thể tải lên tệp này ở đây',
  /** Drop image to upload */
  'inputs.image.drag-overlay.drop-to-upload-image': 'Thả hình ảnh để tải lên',
  /** This field is read only */
  'inputs.image.drag-overlay.this-field-is-read-only': 'Trường này chỉ đọc',
  /** Unknown member kind: `{{kind}}` */
  'inputs.image.error.unknown-member-kind': 'Loại thành viên không xác định: {{kind}}',
  /** Edit hotspot and crop */
  'inputs.image.hotspot-dialog.title': 'Chỉnh sửa hotspot và cắt ảnh',
  /** The value of this field is not a valid image. Resetting this field will let you choose a new image. */
  'inputs.image.invalid-image-warning.description':
    'Giá trị của trường này không phải là hình ảnh hợp lệ. Đặt lại trường này sẽ cho phép bạn chọn một hình ảnh mới.',
  /** Reset value */
  'inputs.image.invalid-image-warning.reset-button.text': 'Đặt lại giá trị',
  /** Invalid image value */
  'inputs.image.invalid-image-warning.title': 'Giá trị hình ảnh không hợp lệ',
  /** Preview of uploaded image */
  'inputs.image.preview-uploaded-image': 'Xem trước hình ảnh đã tải lên',
  /** The upload could not be completed at this time. */
  'inputs.image.upload-error.description': 'Không thể hoàn thành việc tải lên vào lúc này.',
  /** Upload failed */
  'inputs.image.upload-error.title': 'Tải lên thất bại',
  /** Adjust the rectangle to crop image. Adjust the circle to specify the area that should always be visible. */
  'inputs.imagetool.description':
    'Điều chỉnh hình chữ nhật để cắt ảnh. Điều chỉnh vòng tròn để chỉ định khu vực luôn được hiển thị.',
  /** Error: `{{errorMessage}}` */
  'inputs.imagetool.load-error': 'Lỗi: {{errorMessage}}',
  /** Hotspot & Crop */
  'inputs.imagetool.title': 'Hotspot & Cắt ảnh',
  /** Warnings displayed to developers when using the crop/hotspot tool on vector images, notifying them that crops/hotspot are not respected when serving the image in vector format. For the crop/hotspot to apply, images must be served in a raster format such as JPG or PNG, by appending eg `fm=jpg` to the image url, or calling `format('jpg')` if using `@sanity/image-url` */
  'inputs.imagetool.vector-warning.developer-info':
    "Asset Pipeline không hỗ trợ hotspot và crop cho các định dạng vector. Để kích hoạt hotspot & crop, xuất hình ảnh này sang bất kỳ định dạng raster được hỗ trợ nào. Ví dụ: <code>fm=jpg</code> cho <ImageUrlDocumentationLink>URL hình ảnh</ImageUrlDocumentationLink> hoặc gọi <code>.format('png')</code> với <ImageUrlPackageDocumentationLink>@sanity/image-url</ImageUrlPackageDocumentationLink>.",
  /** See developer info */
  'inputs.imagetool.vector-warning.expand-developer-info': 'Xem thông tin nhà phát triển',
  /** Gotcha: Serving vector images with hotspot and crop from the Sanity Image API */
  'inputs.imagetool.vector-warning.title':
    'Cảnh báo: Hotspot và crop có thể không được áp dụng cho hình ảnh này khi nó được trình bày.',
  /** Convert to `{{targetType}}` */
  'inputs.invalid-value.convert-button.text': 'Chuyển đổi thành <code>{{targetType}}</code>',
  /** The current value (<code>`{{actualType}}`</code>) */
  'inputs.invalid-value.current-type': 'Giá trị hiện tại (<code>{{actualType}}</code>)',
  /** The property value is stored as a value type that does not match the expected type. */
  'inputs.invalid-value.description':
    'Giá trị thuộc tính được lưu trữ dưới dạng một loại giá trị không khớp với loại giá trị mong đợi.',
  /** The value of this property must be of type <code>`{{validType}}`</code> according to the schema. */
  'inputs.invalid-value.details.description':
    'Giá trị của thuộc tính này phải là loại <code>{{validType}}</code> theo sơ đồ.',
  /** Only the following types are valid here according to schema: */
  'inputs.invalid-value.details.multi-type-description':
    'Chỉ có các loại sau đây là hợp lệ ở đây theo sơ đồ:',
  /** Mismatching value types typically occur when the schema has recently been changed. */
  'inputs.invalid-value.details.possible-reason':
    'Sự không khớp về loại giá trị thường xảy ra khi sơ đồ gần đây đã được thay đổi.',
  /** Developer info */
  'inputs.invalid-value.details.title': 'Thông tin cho nhà phát triển',
  /** -- Invalid Value Input -- */
  /** Reset value */
  'inputs.invalid-value.reset-button.text': 'Đặt lại giá trị',
  /** Invalid property value */
  'inputs.invalid-value.title': 'Giá trị thuộc tính không hợp lệ',
  /** Title for the "All fields" field group */
  'inputs.object.field-group-tabs.all-fields-title': 'Tất cả các trường',
  /** Aria label for the "Field groups" select control on smaller screens */
  'inputs.object.field-group-tabs.aria-label': 'Nhóm trường',
  /** Read-only field description */
  'inputs.object.unknown-fields.read-only.description':
    'Trường này là <strong>chỉ đọc</strong> theo sơ đồ tài liệu và không thể bỏ chọn. Nếu bạn muốn có thể bỏ chọn này trong Studio, hãy chắc chắn bạn loại bỏ trường <code>readOnly</code> từ loại bao quanh trong sơ đồ.',
  /** Remove field */
  'inputs.object.unknown-fields.remove-field-button.text': 'Xóa trường',
  'inputs.object.unknown-fields.warning.description_other':
    'Đã gặp {{count}} trường không được định nghĩa trong schema.',
  'inputs.object.unknown-fields.warning.details.description_other':
    'Những trường này không được định nghĩa trong schema của tài liệu, có thể là do định nghĩa trường đã bị xóa hoặc ai đó đã thêm chúng vào dự án cá nhân của họ và chưa triển khai thay đổi của họ.',
  /** Developer info */
  'inputs.object.unknown-fields.warning.details.title': 'Thông tin dành cho nhà phát triển',
  'inputs.object.unknown-fields.warning.title_other': 'Phát hiện trường không xác định',
  /** Collapse the editor to save screen space  */
  'inputs.portable-text.action.collapse-editor': 'Thu gọn trình soạn thảo',
  /** Aria label for action to edit an existing annotation */
  'inputs.portable-text.action.edit-annotation-aria-label': 'Chỉnh sửa chú thích',
  /** Expand the editor to give more editing space */
  'inputs.portable-text.action.expand-editor': 'Mở rộng trình soạn thảo',
  /** Label label for action to insert a block of a given type (`{{typeName}}`) */
  'inputs.portable-text.action.insert-block': 'Chèn {{typeName}}',
  /** Accessibility label for action to insert a block of a given type (`{{typeName}}`) */
  'inputs.portable-text.action.insert-block-aria-label': 'Chèn {{typeName}} (khối)',
  /** Label for action to insert an inline object of a given type (`{{typeName}}`) */
  'inputs.portable-text.action.insert-inline-object': 'Chèn {{typeName}}',
  /** Accessibility label for action to insert an inline object of a given type (`{{typeName}}`) */
  'inputs.portable-text.action.insert-inline-object-aria-label': 'Chèn {{typeName}} (nội tuyến)',
  /** Aria label for action to remove an annotation */
  'inputs.portable-text.action.remove-annotation-aria-label': 'Xóa chú thích',
  /** Label for activate on focus with context of click and not focused */
  'inputs.portable-text.activate-on-focus-message_click': 'Nhấp để kích hoạt',
  /** Label for activate on focus with context of click and focused */
  'inputs.portable-text.activate-on-focus-message_click-focused':
    'Nhấp hoặc nhấn không gian để kích hoạt',
  /** Label for activate on focus with context of tap and not focused */
  'inputs.portable-text.activate-on-focus-message_tap': 'Chạm để kích hoạt',
  /** Aria label for the annotation object */
  'inputs.portable-text.annotation-aria-label': 'Đối tượng chú thích',
  /** Title for dialog that allows editing an annotation */
  'inputs.portable-text.annotation-editor.title': 'Chỉnh sửa {{schemaType}}',
  /** Title of the default "link" annotation */
  'inputs.portable-text.annotation.link': 'Liên kết',
  /** Aria label for the block object */
  'inputs.portable-text.block.aria-label': 'Đối tượng khối',
  /** Label for action to edit a block item, in the case where it is editable */
  'inputs.portable-text.block.edit': 'Chỉnh sửa',
  /** Accessibility label for the button that opens the actions menu on blocks */
  'inputs.portable-text.block.open-menu-aria-label': 'Mở menu',
  /** Label for action to open a reference, in the case of block-level reference types */
  'inputs.portable-text.block.open-reference': 'Mở tham chiếu',
  /** Label for action to remove a block item */
  'inputs.portable-text.block.remove': 'Xóa',
  /** Label for action to view a block item, in the case where it is read-only and thus cannot be edited */
  'inputs.portable-text.block.view': 'Xem',
  /** Title of the "code" decorator */
  'inputs.portable-text.decorator.code': 'Mã',
  /** Title of the "em" (emphasis) decorator */
  'inputs.portable-text.decorator.emphasis': 'Nghiêng',
  /** Title of the "strike-through" decorator */
  'inputs.portable-text.decorator.strike-through': 'Gạch ngang',
  /** Title of the "strong" decorator */
  'inputs.portable-text.decorator.strong': 'Đậm',
  /** Title of the "underline" decorator */
  'inputs.portable-text.decorator.underline': 'Gạch dưới',
  /** Placeholder text for when the editor is empty */
  'inputs.portable-text.empty-placeholder': 'Trống',
  /** Aria label for the block object */
  'inputs.portable-text.inline-block.aria-label': 'Đối tượng nội tuyến',
  /** Label for action to edit an inline object item */
  'inputs.portable-text.inline-object.edit': 'Chỉnh sửa đối tượng',
  /** Aria label for icon for action to edit an inline object item */
  'inputs.portable-text.inline-object.edit-aria-label': 'Chỉnh sửa đối tượng',
  /** Label for action to remove an inline object item */
  'inputs.portable-text.inline-object.remove': 'Xóa đối tượng',
  /** Aria label for icon for action to remove an inline object item */
  'inputs.portable-text.inline-object.remove-aria-label': 'Xóa đối tượng',
  /** Disclaimer text shown on invalid Portable Text value, when an action is available to unblock the user, but it is not guaranteed to be safe */
  'inputs.portable-text.invalid-value.action-disclaimer':
    'LƯU Ý: Thông thường việc thực hiện hành động trên là an toàn, nhưng nếu bạn còn nghi ngờ, hãy liên hệ với những người chịu trách nhiệm cấu hình studio của bạn.',
  /** Action presented when the Portable Text field value is invalid, when block with key `{{key}}` has a child with key `{{childKey}}` of type `{{childType}}` which is not allowed by the schema definition */
  'inputs.portable-text.invalid-value.disallowed-child-type.action': 'Xóa đối tượng',
  /** Text explaining that the Portable Text field value is invalid, when block with key `{{key}}` has a child with key `{{childKey}}` of type `{{childType}}` which is not allowed by the schema definition */
  'inputs.portable-text.invalid-value.disallowed-child-type.description':
    'Đối tượng con với khóa {{childKey}} của khối có khóa <code>{{key}}</code> là loại <code>{{childType}}</code>, không được phép theo định nghĩa lược đồ.',
  /** Action presented when the Portable Text field value is invalid, when child with key `{{key}}` has a type (`{{typeName}}`) that is not an allowed block type for this field */
  'inputs.portable-text.invalid-value.disallowed-type.action': 'Xóa khối',
  /** Text explaining that the Portable Text field value is invalid, when child with key `{{key}}` has a type (`{{typeName}}`) that is not an allowed block type for this field */
  'inputs.portable-text.invalid-value.disallowed-type.description':
    'Khối với khóa <code>{{key}}</code> là loại <code>{{typeName}}</code>, không được phép theo định nghĩa lược đồ.',
  /** Action presented when the Portable Text field value is invalid, when block with key `{{key}}` contains no children */
  'inputs.portable-text.invalid-value.empty-children.action': 'Chèn khoảng trắng văn bản',
  /** Text explaining that the Portable Text field value is invalid, when block with key `{{key}}` contains no children */
  'inputs.portable-text.invalid-value.empty-children.description':
    'Khối văn bản với khóa <code>{{key}}</code> không có khoảng trắng văn bản.',
  /** Label for the button to ignore invalid values in the Portable Text editor */
  'inputs.portable-text.invalid-value.ignore-button.text': 'Bỏ qua',
  /** Action presented when the Portable Text field value is invalid, when child with key `{{key}}` has a `_type` property that is set to `block`, but the block type defined in schema has a different name (`{{expectedTypeName}}`) */
  'inputs.portable-text.invalid-value.incorrect-block-type.action':
    'Sử dụng loại <code>{{expectedTypeName}}</code>',
  /** Text explaining that the Portable Text field value is invalid, when child with key `{{key}}` has a `_type` property that is set to `block`, but the block type defined in schema has a different name (`{{expectedTypeName}}`) */
  'inputs.portable-text.invalid-value.incorrect-block-type.description':
    'Khối với khóa <code>{{key}}</code> có tên loại không hợp lệ. Theo lược đồ, nó nên là <code>{{expectedTypeName}}</code>.',
  /** Action presented when the Portable Text field value is invalid, when block with key `{{key}}` has a span with key `{{childKey}}` that has a missing or invalid `text` property */
  'inputs.portable-text.invalid-value.invalid-span-text.action': 'Đặt giá trị văn bản trống',
  /** Text explaining that the Portable Text field value is invalid, when block with key `{{key}}` has a span with key `{{childKey}}` that has a missing or invalid `text` property */
  'inputs.portable-text.invalid-value.invalid-span-text.description':
    'Khoảng trắng với khóa {{childKey}} của khối có khóa <code>{{key}}</code> có thuộc tính <code>text</code> bị thiếu hoặc không hợp lệ.',
  /** Action presented when the Portable Text field value is invalid, when child with key `{{key}}` is missing a `_type` property, but seems to be a block of type `{{expectedTypeName}}` */
  'inputs.portable-text.invalid-value.missing-block-type.action':
    'Sử dụng loại <code>{{expectedTypeName}}</code>',
  /** Text explaining that the Portable Text field value is invalid, when child with key `{{key}}` is missing a `_type` property, but seems to be a block of type `{{expectedTypeName}}` */
  'inputs.portable-text.invalid-value.missing-block-type.description':
    'Khối với khóa <code>{{key}}</code> thiếu tên loại. Theo lược đồ, nó nên là <code>{{expectedTypeName}}</code>.',
  /** Action presented when the Portable Text field value is invalid, when block with key `{{key}}` has a child at `{{index}}` which is missing `_key` property */
  'inputs.portable-text.invalid-value.missing-child-key.action': 'Gán khóa ngẫu nhiên',
  /** Text explaining that the Portable Text field value is invalid, when block with key `{{key}}` has a child at `{{index}}` which is missing `_key` property */
  'inputs.portable-text.invalid-value.missing-child-key.description':
    'Đối tượng con tại chỉ mục <code>{{index}}</code> của khối có khóa <code>{{key}}</code> thiếu thuộc tính <code>_key</code>.',
  /** Action presented when the Portable Text field value is invalid, when block with key `{{key}}` has a child with key `{{childKey}}` which is missing a `_type` property */
  'inputs.portable-text.invalid-value.missing-child-type.action': 'Xóa đối tượng',
  /** Text explaining that the Portable Text field value is invalid, when block with key `{{key}}` has a child with key `{{childKey}}` which is missing a `_type` property */
  'inputs.portable-text.invalid-value.missing-child-type.description':
    'Đối tượng con với khóa {{childKey}} của khối có khóa <code>{{key}}</code> thiếu thuộc tính <code>_type</code>.',
  /** Action presented when the Portable Text field value is invalid, when child at `{{index}}` is missing the required `_key` property */
  'inputs.portable-text.invalid-value.missing-key.action': 'Gán khóa ngẫu nhiên',
  /** Text explaining that the Portable Text field value is invalid, when child at `{{index}}` is missing the required `_key` property */
  'inputs.portable-text.invalid-value.missing-key.description':
    'Khối tại chỉ mục <code>{{index}}</code> thiếu thuộc tính bắt buộc <code>_key</code>.',
  /** Action presented when the Portable Text field value is invalid, when child with key `{{key}}` has a missing or invalid `children` property */
  'inputs.portable-text.invalid-value.missing-or-invalid-children.action': 'Xóa khối',
  /** Text explaining that the Portable Text field value is invalid, when child with key `{{key}}` has a missing or invalid `children` property */
  'inputs.portable-text.invalid-value.missing-or-invalid-children.description':
    'Khối văn bản với khóa <code>{{key}}</code> có thuộc tính `children` không hợp lệ hoặc bị thiếu.',
  /** Action presented when the Portable Text field value is invalid, when child with key `{{key}}` has a missing or invalid `markDefs` property */
  'inputs.portable-text.invalid-value.missing-or-invalid-markdefs.action': 'Thêm thuộc tính',
  /** Text explaining that the Portable Text field value is invalid, when child with key `{{key}}` has a missing or invalid `markDefs` property */
  'inputs.portable-text.invalid-value.missing-or-invalid-markdefs.description':
    'Khối văn bản với khóa <code>{{key}}</code> có thuộc tính `markDefs` không hợp lệ hoặc bị thiếu.',
  /** Action presented when the Portable Text field value is invalid, when child with key `{{key}}` is missing a `_type` property  */
  'inputs.portable-text.invalid-value.missing-type.action': 'Xóa khối',
  /** Text explaining that the Portable Text field value is invalid, when child with key `{{key}}` is missing a `_type` property  */
  'inputs.portable-text.invalid-value.missing-type.description':
    'Khối với khóa <code>{{key}}</code> thiếu tên loại.',
  /** Action presented when the Portable Text field value is invalid, when block with key `{{key}}` contains a non-object child at index `{{index}}` */
  'inputs.portable-text.invalid-value.non-object-child.action': 'Xóa mục',
  /** Text explaining that the Portable Text field value is invalid, when block with key `{{key}}` contains a non-object child at index `{{index}}` */
  'inputs.portable-text.invalid-value.non-object-child.description':
    'Mục tại chỉ mục <code>{{index}}</code> của khối với khóa <code>{{key}}</code> không phải là đối tượng.',
  /** Action presented when the Portable Text field value is invalid, when the Portable Text field is not an array, or the array is empty */
  'inputs.portable-text.invalid-value.not-an-array.action': 'Bỏ thiết lập giá trị',
  /** Text explaining that the Portable Text field value is invalid, when the Portable Text field is not an array, or the array is empty */
  'inputs.portable-text.invalid-value.not-an-array.description':
    'Giá trị phải là một mảng các khối Portable Text, hoặc không xác định.',
  /** Action presented when the Portable Text field value is invalid, when child at `{{index}}` is not an object */
  'inputs.portable-text.invalid-value.not-an-object.action': 'Xóa mục',
  /** Text explaining that the Portable Text field value is invalid, when child at `{{index}}` is not an object */
  'inputs.portable-text.invalid-value.not-an-object.description':
    'Mục tại <code>{{index}}</code> không phải là đối tượng,.',
  /** Action presented when the Portable Text field value is invalid, when block with key `{{key}}` contains marks (`{{orphanedMarks}}`) that are not supported by the current schema */
  'inputs.portable-text.invalid-value.orphaned-marks.action': 'Xóa dấu không được cho phép',
  /** Text explaining that the Portable Text field value is invalid, when block with key `{{key}}` contains marks (`{{orphanedMarks}}`) that are not supported by the current schema */
  'inputs.portable-text.invalid-value.orphaned-marks.description':
    'Khối văn bản với khóa <code>{{key}}</code> chứa dấu <code>({{orphanedMarks, list}})</code> không được cho phép bởi schema.',
  /** Title for the alert indicating that the Portable Text field has an invalid value */
  'inputs.portable-text.invalid-value.title': 'Giá trị Portable Text không hợp lệ',
  /** Title of "bulleted" list type */
  'inputs.portable-text.list-type.bullet': 'Danh sách đánh dấu',
  /** Title of numbered list type */
  'inputs.portable-text.list-type.number': 'Danh sách đánh số',
  /** Title of the "h1" block style */
  'inputs.portable-text.style.h1': 'Tiêu đề 1',
  /** Title of the "h2" block style */
  'inputs.portable-text.style.h2': 'Tiêu đề 2',
  /** Title of the "h3" block style */
  'inputs.portable-text.style.h3': 'Tiêu đề 3',
  /** Title of the "h4" block style */
  'inputs.portable-text.style.h4': 'Tiêu đề 4',
  /** Title of the "h5" block style */
  'inputs.portable-text.style.h5': 'Tiêu đề 5',
  /** Title of the "h6" block style */
  'inputs.portable-text.style.h6': 'Tiêu đề 6',
  /** Title shown when multiple blocks of varying styles is selected */
  'inputs.portable-text.style.multiple': 'Nhiều',
  /** Title of fallback when no style is given for a block */
  'inputs.portable-text.style.none': 'Không có kiểu',
  /** Title of the "normal" block style */
  'inputs.portable-text.style.normal': 'Bình thường',
  /** Title of the "quote" block style */
  'inputs.portable-text.style.quote': 'Trích dẫn',
  /** Label for action to clear the current value of the reference field */
  'inputs.reference.action.clear': 'Xóa',
  /** Label for action to copy the current item (used within arrays) */
  'inputs.reference.action.copy': 'Sao chép',
  /** Label for action to create a new document from the reference input */
  'inputs.reference.action.create-new-document': 'Tạo mới',
  /** Label for action to create a new document from the reference input, when there are multiple templates or document types to choose from */
  'inputs.reference.action.create-new-document-select': 'Tạo mới…',
  /** Label for action to duplicate the current item to a new item (used within arrays) */
  'inputs.reference.action.duplicate': 'Nhân bản',
  /** Label for action that opens the referenced document in a new tab */
  'inputs.reference.action.open-in-new-tab': 'Mở trong tab mới',
  /** Label for action to remove the reference from an array */
  'inputs.reference.action.remove': 'Loại bỏ',
  /** Label for action to replace the current value of the field */
  'inputs.reference.action.replace': 'Thay thế',
  /** Label for action to cancel a previously initiated replace action  */
  'inputs.reference.action.replace-cancel': 'Hủy thay thế',
  /** The cross-dataset reference field currently has a reference, but the feature has been disabled since it was created. This explains what can/cannot be done in its current state. */
  'inputs.reference.cross-dataset.feature-disabled-actions':
    'Bạn vẫn có thể xóa tham chiếu hiện tại của trường này, nhưng không thể thay đổi sang một tài liệu khác khi tính năng bị vô hiệu hóa.',
  /** A cross-dataset reference field exists but the feature has been disabled. A <DocumentationLink> component is available. */
  'inputs.reference.cross-dataset.feature-disabled-description':
    'Tính năng này đã bị vô hiệu hóa. Đọc cách kích hoạt nó trong <DocumentationLink>tài liệu</DocumentationLink>.',
  /** Title for a warning telling the user that the current project does not have the "cross dataset references" feature */
  'inputs.reference.cross-dataset.feature-unavailable-title':
    'Tính năng không khả dụng: Tham chiếu dữ liệu chéo',
  /** The cross-dataset reference points to a document with an invalid type  */
  'inputs.reference.cross-dataset.invalid-type':
    'Tài liệu được tham chiếu có loại không hợp lệ ({{typeName}}) <JsonValue/>',
  /** The referenced document will open in a new tab (due to external studio) */
  'inputs.reference.document-opens-in-new-tab': 'Tài liệu này sẽ mở trong một tab mới',
  /** Error title for when the document is unavailable (for any possible reason) */
  'inputs.reference.error.document-unavailable-title': 'Tài liệu không khả dụng',
  /** Error title for when the referenced document failed to be loaded */
  'inputs.reference.error.failed-to-load-document-title': 'Không tải được tài liệu được tham chiếu',
  /** Error title for when the reference search returned a document that is not an allowed type for the field */
  'inputs.reference.error.invalid-search-result-type-title':
    'Tìm kiếm trả về một loại không hợp lệ cho tham chiếu này: "{{returnedType}}"',
  /** Error description for when the document referenced is not one of the types declared as allowed target types in schema */
  'inputs.reference.error.invalid-type-description':
    'Tài liệu được tham chiếu (<code>{{documentId}}</code>) có loại <code>{{actualType}}</code>. Theo sơ đồ, tài liệu được tham chiếu chỉ có thể có loại <AllowedTypes />.',
  /** Error title for when the document referenced is not one of the types declared as allowed target types in schema */
  'inputs.reference.error.invalid-type-title': 'Tài liệu có loại không hợp lệ',
  /** Error description for when the user does not have permissions to read the referenced document */
  'inputs.reference.error.missing-read-permissions-description':
    'Không thể truy cập tài liệu được tham chiếu do không đủ quyền',
  /** Error title for when the user does not have permissions to read the referenced document */
  'inputs.reference.error.missing-read-permissions-title': 'Quyền không đủ',
  /** Error description for when the current reference value points to a document that does not exist (on weak references) */
  'inputs.reference.error.nonexistent-document-description':
    'Tài liệu được tham chiếu không tồn tại (ID: <code>{{documentId}}</code>). Bạn có thể loại bỏ tham chiếu hoặc thay thế bằng một tài liệu khác.',
  /** Error title for when the current reference value points to a document that does not exist (on weak references) */
  'inputs.reference.error.nonexistent-document-title': 'Không tìm thấy',
  /** Label for button that clears the reference when it points to a document that does not exist (on weak references) */
  'inputs.reference.error.nonexistent-document.clear-button-label': 'Xóa',
  /** Error title for when the search for a reference failed. Note that the message sent by the backend may not be localized. */
  'inputs.reference.error.search-failed-title': 'Tìm kiếm tham chiếu thất bại',
  /** Label for when the GDR points to an invalid type  */
  'inputs.reference.global.invalid-type':
    'Tài liệu được tham chiếu có loại không hợp lệ ({{typeName}})',
  /** Alternative text for the image shown in cross-dataset reference input */
  'inputs.reference.image-preview-alt-text': 'Xem trước hình ảnh của tài liệu được tham chiếu',
  /** Description for alert shown when a reference in a live-edit document is marked as being weak, the referenced document exists, AND the reference is supposed to be have been strengthened on publish */
  'inputs.reference.incomplete-reference.finalize-action-description':
    '<strong>{{referencedDocument}}</strong> đã được xuất bản và tham chiếu này giờ đây nên được hoàn tất.',
  /** Title for alert shown when a reference in a live-edit document is marked as being weak, the referenced document exists, AND the reference is supposed to be have been strengthened on publish */
  'inputs.reference.incomplete-reference.finalize-action-title': 'Hoàn tất tham chiếu',
  /** Description for alert shown when a reference in a live-edit document points to a document that exists and has been published, but the reference is still marked as weak */
  'inputs.reference.incomplete-reference.strengthen-action-description':
    '<strong>{{referencedDocument}}</strong> đã được xuất bản và tham chiếu này giờ đây nên được chuyển thành tham chiếu mạnh.',
  /** Title for alert shown when a reference in a live-edit document points to a document that exists and has been published, but the reference is still marked as weak */
  'inputs.reference.incomplete-reference.strengthen-action-title': 'Chuyển thành tham chiếu mạnh',
  /** Label for button that triggers the action that strengthen a reference */
  'inputs.reference.incomplete-reference.strengthen-button-label': 'Chuyển thành tham chiếu mạnh',
  /** Label for button that triggers a retry attempt for reference metadata  */
  'inputs.reference.metadata-error.retry-button-label': 'Thử lại',
  /** Title for alert shown when reference metadata fails to be loaded */
  'inputs.reference.metadata-error.title': 'Không thể tải metadata tham chiếu',
  /** Message shown when no documents were found that matched the given search string */
  'inputs.reference.no-results-for-query': 'Không có kết quả cho <strong>“{{searchTerm}}”</strong>',
  /** Text for tooltip showing when a document was edited, using relative time (eg "how long ago was it edited?") */
  'inputs.reference.preview.edited-at-time': 'Đã chỉnh sửa <RelativeTime/>',
  /** Accessibility label for icon indicating that document does _not_ have any unpublished changes */
  'inputs.reference.preview.has-no-unpublished-changes-aria-label':
    'Không có chỉnh sửa chưa xuất bản',
  /** Accessibility label for icon indicating that document has unpublished changes */
  'inputs.reference.preview.has-unpublished-changes-aria-label': 'Đã chỉnh sửa',
  /** Accessibility label for icon indicating that document does _not_ have a published version */
  'inputs.reference.preview.is-not-published-aria-label': 'Chưa xuất bản',
  /** Accessibility label for icon indicating that document has a published version */
  'inputs.reference.preview.is-published-aria-label': 'Đã xuất bản',
  /** Text for tooltip indicating that a document has no unpublished edits */
  'inputs.reference.preview.no-unpublished-edits': 'Không có chỉnh sửa chưa xuất bản',
  /** Text for tooltip indicating that a document has not yet been published */
  'inputs.reference.preview.not-published': 'Chưa xuất bản',
  /** Text for tooltip showing when a document was published, using relative time (eg "how long ago was it published?") */
  'inputs.reference.preview.published-at-time': 'Đã xuất bản <RelativeTime/>',
  /** The referenced document no longer exist and might have been deleted (for weak references) */
  'inputs.reference.referenced-document-does-not-exist':
    'Tài liệu được tham chiếu không còn tồn tại và có thể đã bị xóa (ID tài liệu: <code>{{documentId}}</code>).',
  /** The referenced document could not be displayed to the user because of insufficient permissions */
  'inputs.reference.referenced-document-insufficient-permissions':
    'Không thể truy cập tài liệu được tham chiếu do không đủ quyền hạn',
  /** Label for when the reference input is resolving the initial value for an item */
  'inputs.reference.resolving-initial-value': 'Đang giải quyết giá trị ban đầu…',
  /** Placeholder shown in a reference input with no current value */
  'inputs.reference.search-placeholder': 'Gõ để tìm kiếm',
  /** Explanation of the consequences of leaving the reference as strong instead of weak */
  'inputs.reference.strength-mismatch.is-strong-consquences':
    'Sẽ không thể xóa tài liệu tham chiếu mà không cần phải loại bỏ tham chiếu này hoặc chuyển nó thành tham chiếu yếu.',
  /** Description for alert shown when a reference is supposed to be weak, but the actual value is strong */
  'inputs.reference.strength-mismatch.is-strong-description':
    'Tham chiếu này là <em>mạnh</em>, nhưng theo sơ đồ hiện tại nó nên là <em>yếu</em>.',
  /** Explanation of the consequences of leaving the reference as weak instead of strong */
  'inputs.reference.strength-mismatch.is-weak-consquences':
    'Điều này cho phép xóa tài liệu được tham chiếu mà không cần xóa tham chiếu này trước, khiến cho trường này tham chiếu đến một tài liệu không tồn tại.',
  /** Description for alert shown when a reference is supposed to be strong, but the actual value is weak */
  'inputs.reference.strength-mismatch.is-weak-description':
    'Tham chiếu này là <em>yếu</em>, nhưng theo sơ đồ hiện tại nó nên là <em>mạnh</em>.',
  /** Label for button that triggers the action that strengthens a reference on strength mismatch */
  'inputs.reference.strength-mismatch.strengthen-button-label': 'Chuyển thành tham chiếu mạnh',
  /** Title for alert shown when a reference is supposed to be weak/strong, but the actual value is the opposite of what it is supposed to be */
  'inputs.reference.strength-mismatch.title': 'Sự không khớp về độ mạnh của tham chiếu',
  /** Label for button that triggers the action that weakens a reference on strength mismatch */
  'inputs.reference.strength-mismatch.weaken-button-label': 'Chuyển thành tham chiếu yếu',
  /** Action message for generating the slug */
  'inputs.slug.action.generate': 'Tạo',
  /** Loading message for when the input is actively generating a slug */
  'inputs.slug.action.generating': 'Đang tạo…',
  /** Error message for when the source to generate a slug from is missing */
  'inputs.slug.error.missing-source':
    'Nguồn bị thiếu. Kiểm tra nguồn trên loại {{schemaType}} trong sơ đồ',
  /** Placeholder for an empty tag input */
  'inputs.tags.placeholder': 'Nhập thẻ và nhấn ENTER…',
  /** Placeholder for an empty tag input on touch devices */
  'inputs.tags.placeholder_touch': 'Nhập thẻ…',
  /** Convert to `{{targetType}}` */
  'inputs.untyped-value.convert-button.text': 'Chuyển đổi thành <code>{{targetType}}</code>',
  /** Encountered an object value without a <code>_type</code> property. */
  'inputs.untyped-value.description':
    'Gặp giá trị đối tượng không có thuộc tính <code>_type</code>.',
  /** Either remove the <code>name</code> property of the object declaration, or set <code>_type</code> property on items. */
  'inputs.untyped-value.details.description':
    'Hoặc loại bỏ thuộc tính <code>name</code> của khai báo đối tượng, hoặc thiết lập thuộc tính <code>_type</code> trên các mục.',
  /** Current value (<code>object</code>): */
  'inputs.untyped-value.details.json-dump-prefix': 'Giá trị hiện tại (<code>đối tượng</code>):',
  /** The following types are valid here according to schema: */
  'inputs.untyped-value.details.multi-type-description':
    'Các loại sau đây hợp lệ tại đây theo sơ đồ:',
  /** Developer info */
  'inputs.untyped-value.details.title': 'Thông tin cho nhà phát triển',
  /** Property value missing <code>_type</code> */
  'inputs.untyped-value.title': 'Giá trị thuộc tính thiếu <code>_type</code>',
  /** Unset value */
  'inputs.untyped-value.unset-item-button.text': 'Bỏ thiết lập giá trị',

  /** The fallback explanation if no context is provided */
  'insufficient-permissions-message.not-authorized-explanation':
    'Bạn không có quyền truy cập vào tính năng này.',
  /** The explanation when unable to create any document at all */
  'insufficient-permissions-message.not-authorized-explanation_create-any-document':
    'Bạn không có quyền tạo một tài liệu.',
  /** The explanation when unable to create a particular document */
  'insufficient-permissions-message.not-authorized-explanation_create-document':
    'Bạn không có quyền tạo tài liệu này.',
  /** The explanation when unable to create a particular type of document */
  'insufficient-permissions-message.not-authorized-explanation_create-document-type':
    'Bạn không có quyền tạo loại tài liệu này.',
  /** The explanation when unable to create a new reference in a document */
  'insufficient-permissions-message.not-authorized-explanation_create-new-reference':
    'Bạn không có quyền tạo một tham chiếu mới.',
  /** The explanation when unable to delete a particular document */
  'insufficient-permissions-message.not-authorized-explanation_delete-document':
    'Bạn không có quyền xóa tài liệu này.',
  /** The explanation when unable to delete a schedule on scheduled publishing */
  'insufficient-permissions-message.not-authorized-explanation_delete-schedules':
    'Bạn không có quyền xóa lịch trình.',
  /** The explanation when unable to discard changes in a particular document */
  'insufficient-permissions-message.not-authorized-explanation_discard-changes':
    'Bạn không có quyền loại bỏ các thay đổi trong tài liệu này.',
  /** The explanation when unable to duplicate a particular document */
  'insufficient-permissions-message.not-authorized-explanation_duplicate-document':
    'Bạn không có quyền sao chép tài liệu này.',
  /** The explanation when unable to edit a schedule on scheduled publishing */
  'insufficient-permissions-message.not-authorized-explanation_edit-schedules':
    'Bạn không có quyền chỉnh sửa lịch trình.',
  /** The explanation when unable to execute a schedule on scheduled publishing */
  'insufficient-permissions-message.not-authorized-explanation_execute-schedules':
    'Bạn không có quyền thực hiện lịch trình.',
  /** The explanation when unable to publish a particular document */
  'insufficient-permissions-message.not-authorized-explanation_publish-document':
    'Bạn không có quyền xuất bản tài liệu này.',
  /** The explanation when unable to unpublish a particular document */
  'insufficient-permissions-message.not-authorized-explanation_unpublish-document':
    'Bạn không có quyền hủy xuất bản tài liệu này.',
  /** Appears after the not-authorized message. Lists the current roles. */
  'insufficient-permissions-message.roles': 'Vai trò của bạn: <Roles/>',
  /** The title for the insufficient permissions message component */
  'insufficient-permissions-message.title': 'Quyền không đủ',

  /** Unexpected error: `{{error}}` */
  'member-field-error.unexpected-error': 'Lỗi không mong đợi: {{error}}',

  /** Text shown in warning when browser is using HTTP1 to communicate with the Sanity API */
  'network-check.slow-protocol-warning.description':
    'Trình duyệt của bạn đang sử dụng giao thức HTTP lỗi thời để giao tiếp với Sanity. Điều này có thể dẫn đến hiệu suất làm việc giảm đáng kể.',
  /** Text for link that takes the user to the Sanity documentation to learn more about the HTTP1 issue */
  'network-check.slow-protocol-warning.learn-more-button.text': 'Tìm hiểu thêm',
  /** Text for link that takes the user to the Sanity documentation to learn more about the HTTP1 issue */
  'network-check.slow-protocol-warning.snooze-button.text': 'Không hiển thị lại trong phiên này',
  /** Title text for the warning dialog when browser is using HTTP1 to communicate with the Sanity API */
  'network-check.slow-protocol-warning.title': 'Bạn đang bật phanh',

  /** Button label for "Create new document" button */
  'new-document.button': 'Tạo mới',
  /**
   * Tooltip message displayed when hovering/activating the "Create new document" action,
   * when there are templates/types available for creation
   */
  'new-document.create-new-document-label': 'Tài liệu mới…',
  /** Placeholder for the "filter" input within the new document menu */
  'new-document.filter-placeholder': 'Lọc',
  /** Loading indicator text within the new document menu */
  'new-document.loading': 'Đang tải…',
  /** Accessibility label for the list displaying options in the new document menu */
  'new-document.new-document-aria-label': 'Tài liệu mới',
  /** Message for when there are no document type options in the new document menu */
  'new-document.no-document-types-found': 'Không tìm thấy loại tài liệu nào',
  /**
   * Tooltip message displayed when hovering/activating the "Create new document" action,
   * when there are no templates/types to create from
   */
  'new-document.no-document-types-label': 'Không có loại tài liệu',
  /** Message for when no results are found for a specific search query in the new document menu */
  'new-document.no-results': 'Không có kết quả cho <strong>{{searchQuery}}</strong>',
  /** Aria label for the button that opens the "Create new document" popover/dialog */
  'new-document.open-dialog-aria-label': 'Tạo tài liệu mới',
  /** Title for "Create new document" dialog */
  'new-document.title': 'Tạo tài liệu mới',

  /** @deprecated Label for button that will make the browser reload when users' studio version is out-of-date */
  'package-version.new-package-available.reload-button': 'Tải lại',
  /** @deprecated Title of the alert for studio users when packages in their studio are out-of-date */
  'package-version.new-package-available.title': 'Sanity Studio đã được cập nhật',

  /** Label for action to invite members to the current studio project */
  'presence.action.manage-members': 'Quản lý thành viên',
  /** Accessibility label for presence menu button */
  'presence.aria-label': 'Ai đang ở đây',
  /** Message description for when no one else is currently present */
  'presence.no-one-else-description':
    'Mời người khác vào dự án để xem trạng thái trực tuyến của họ.',
  /** Message title for when no one else is currently present */
  'presence.no-one-else-title': 'Không có ai khác ở đây',
  /** Message for when a user is not in a document (displayed in the global presence menu) */
  'presence.not-in-a-document': 'Không trong tài liệu nào',
  /** Tooltip content text for presence menu button */
  'presence.tooltip-content': 'Ai đang ở đây',

  /** Fallback title shown when a preview does not provide a title */
  'preview.default.title-fallback': 'Không tiêu đề',
  /** Fallback preview value for types that have "no value" (eg null, undefined) */
  'preview.fallback.no-value': '(không có giá trị)',
  /** Alternative text for image being shown while image is being uploaded, in previews */
  'preview.image.file-is-being-uploaded.alt-text': 'Hình ảnh đang được tải lên',

  /* Relative time, just now */
  'relative-time.just-now': 'vừa xong',

  /** Action message to add document to new release */
  'release.action.add-to-new-release': 'Thêm vào phiên bản',
  /** Action message to add document to release */
  'release.action.add-to-release': 'Thêm vào {{title}}',
  /** Tooltip message for document that is already added to release */
  'release.action.already-exists-in-release': undefined, // 'Document already exists in release'
  /** Action message for when document is already in release  */
  'release.action.already-in-release': 'Đã có trong phiên bản {{title}}',
  /** Action message for when you click to view all versions you can copy the current document to */
  'release.action.copy-to': 'Sao chép phiên bản vào',
  /** Action message for creating new releases */
  'release.action.create-new': 'Tạo phiên bản mới',
  /** Action message for deleting a scheduled publish */
  'release.action.delete-schedule': 'Xóa lịch trình',
  /** Action message for when document is already in release  */
  'release.action.discard-version': 'Loại bỏ phiên bản',
  /** Description for toast when version discarding failed */
  'release.action.discard-version.failure': 'Không thể loại bỏ phiên bản',
  /** Action message for editing the schedule of a scheduled publish */
  'release.action.edit-schedule': 'Chỉnh sửa lịch trình',
  /** Action message for when a new release is created off an existing version, draft or published document */
  'release.action.new-release': 'Phiên bản mới',
  'release.action.new-release.limit-reached_other':
    'Không gian làm việc này chỉ giới hạn {{count}} bản phát hành',
  /** Tooltip message for not having permissions for creating new releases */
  'release.action.permission.error': 'Bạn không có quyền thực hiện hành động này',
  /** Action message for running a scheduled draft immediately */
  'release.action.publish-now': 'Xuất bản ngay',
  /** Error message description for when a version is reverted from being unpublished */
  'release.action.revert-unpublish-version.failure.description':
    'Vui lòng thử lại hoặc kiểm tra kết nối của bạn. Tài liệu vẫn sẽ không được công bố khi phát hành.',
  /** Error message title for when a version is reverted from being unpublished */
  'release.action.revert-unpublish-version.failure.title':
    'Không thể hoàn tác việc thiết lập không công bố khi phát hành.',
  /** Action message description for when a version is reverted from being unpublished */
  'release.action.revert-unpublish-version.success.description':
    'Bạn có thể chỉnh sửa phiên bản này ngay bây giờ.',
  /** Action message title for when a version is reverted from being unpublished */
  'release.action.revert-unpublish-version.success.title':
    'Đã hoàn tác thành công việc thiết lập không công bố khi phát hành.',
  /** Error message for when a version is set to be unpublished */
  'release.action.unpublish-version.failure':
    'Không thể đặt phiên bản để không xuất bản trên phiên bản',
  /** Action message for when a version is set to be unpublished successfully */
  'release.action.unpublish-version.success':
    'Đã đặt thành công <strong>{{title}}</strong> để không xuất bản trên phiên bản',
  /** Action message for when the view release is pressed */
  'release.action.view-release': 'Xem phiên bản',
  /** Action message for when the view scheduled drafts is pressed */
  'release.action.view-scheduled-drafts': 'Xem bản nháp đã lên lịch',
  /** Label for banner when release is scheduled */
  'release.banner.scheduled-for-publishing-on': 'Đã lên lịch xuất bản vào {{date}}',
  /** Label for Draft chip in document header */
  'release.chip.draft': 'Bản nháp',
  /** Label for Draft chip in global header */
  'release.chip.global.drafts': 'Bản nháp',
  /** Label for Published chip in document header */
  'release.chip.published': 'Đã xuất bản',
  /** Label for tooltip in chip when document is in an archived release */
  'release.chip.tooltip.archived': 'Phiên bản này đã được lưu trữ và không thể chỉnh sửa.',
  /** Label for tooltip in chip with the created date */
  'release.chip.tooltip.created-date': 'Đã tạo {{date}}',
  /** Label for tooltip in draft chip when it's a live edit document */
  'release.chip.tooltip.draft-disabled.live-edit':
    'Tài liệu này đang ở chế độ chỉnh sửa trực tiếp, bản nháp bị vô hiệu hóa',
  /** Label for tooltip in chip with the lasted edited date */
  'release.chip.tooltip.edited-date': 'Đã chỉnh sửa {{date}}',
  /** Label for tooltip in chip when document is intended for a future release that hasn't been scheduled */
  'release.chip.tooltip.intended-for-date': 'Dự kiến cho {{date}}',
  /** Label for tooltip in chip when there is no recent draft edits */
  'release.chip.tooltip.no-edits': 'Không có chỉnh sửa',
  /** Label for tooltip in chip when document isn't published */
  'release.chip.tooltip.not-published': 'Chưa được xuất bản',
  /** Label for tooltip in chip with the published date */
  'release.chip.tooltip.published-date': 'Đã xuất bản {{date}}',
  /** Label for tooltip in chip when document is in a release that has been scheduled */
  'release.chip.tooltip.scheduled-for-date': 'Đã lên lịch cho {{date}}',
  /** Label for tooltip in scheduled chip without a known date */
  'release.chip.tooltip.unknown-date': 'Ngày không xác định',
  /** Label for tooltip on deleted release */
  'release.deleted-tooltip': 'Phiên bản này đã bị xóa',
  /** Title for copying version to a new release dialog */
  'release.dialog.copy-to-release.title': 'Sao chép phiên bản sang phiên bản mới',
  /** Title for action create a release */
  'release.dialog.create.confirm': 'Tạo phiên bản',
  /** Title for creating releases dialog */
  'release.dialog.create.title': 'Tạo phiên bản',
  /** Body text for the dialog confirming deletion of a scheduled draft */
  'release.dialog.delete-schedule-draft.body':
    'Bạn có chắc chắn muốn xóa bản nháp đã lên lịch này không? Hành động này không thể hoàn tác.',
  /** Confirm button text for deleting a scheduled draft */
  'release.dialog.delete-schedule-draft.confirm': 'Vâng, xóa lịch trình',
  /** Header for the dialog confirming deletion of a scheduled draft */
  'release.dialog.delete-schedule-draft.header': 'Xóa bản nháp đã lên lịch',
  /** Body text for change schedule dialog */
  'release.dialog.edit-schedule.body': 'Chọn ngày và giờ mới để xuất bản theo lịch trình.',
  /** Confirm button text for change schedule dialog */
  'release.dialog.edit-schedule.confirm': 'Cập nhật lịch trình',
  /** Header for change schedule dialog */
  'release.dialog.edit-schedule.header': 'Thay đổi lịch trình',
  /** Body text for the dialog confirming running a scheduled draft immediately */
  'release.dialog.publish-scheduled-draft.body':
    'Bạn có chắc chắn muốn xuất bản bản nháp đã lên lịch ngay lập tức không?',
  /** Confirm button text for running a scheduled draft immediately */
  'release.dialog.publish-scheduled-draft.confirm': 'Vâng, chạy ngay',
  /** Header for the dialog confirming running a scheduled draft immediately */
  'release.dialog.publish-scheduled-draft.header': 'Xuất bản bản nháp ngay',
  /** Label for description in tooltip to explain release types */
  'release.dialog.tooltip.description':
    'Điều này giúp có thể hiển thị liệu các tài liệu có xung đột khi làm việc trên nhiều phiên bản.',
  /** Label for noting that a release time is not final */
  'release.dialog.tooltip.note':
    'LƯU Ý: Bạn có thể thay đổi thời gian phát hành và đặt thời gian cụ thể cho việc xuất bản theo lịch trình sau.',
  /** Title for tooltip to explain release time */
  'release.dialog.tooltip.title': 'Thời gian phát hành dự kiến',
  /** The placeholder text when the release doesn't have a description */
  'release.form.placeholder-describe-release': 'Mô tả bản phát hành…',
  /** Tooltip for button to hide release visibility */
  'release.layer.hide': 'Ẩn phiên bản',
  /** Label for the release menu */
  'release.menu.label': 'Menu phát hành',
  /** Tooltip for the release menu */
  'release.menu.tooltip': 'Hành động',
  /** Label for draft perspective in navbar */
  'release.navbar.drafts': 'Bản nháp',
  /** Label for published releases in navbar */
  'release.navbar.published': 'Đã xuất bản',
  /** Tooltip for releases navigation in navbar */
  'release.navbar.tooltip': 'Phiên bản',
  /** The placeholder text when the release doesn't have a title */
  'release.placeholder-untitled-release': 'Phiên bản không tiêu đề',
  /** Description for warning that the published schedule time is in the past */
  'release.schedule-dialog.publish-date-in-past-warning':
    'Lên lịch phát hành này cho một thời gian và ngày trong tương lai.',
  /** Label for date picker when scheduling a release */
  'release.schedule-dialog.select-publish-date-label': 'Lên lịch vào',
  /** The toast description that will be shown when the user has a release perspective which is now archived */
  'release.toast.archived-release.description': 'Phiên bản này đã được gỡ ghim',
  /** The toast title that will be shown when the user has a release perspective which is now archived */
  'release.toast.archived-release.title': "Phiên bản '{{title}}' đã được lưu trữ",
  /** The toast title that will be shown the creating a release fails */
  'release.toast.create-release-error.title': 'Tạo phiên bản không thành công',
  /** Error toast for deleting a scheduled draft */
  'release.toast.delete-schedule-draft.error':
    'Không thể xóa tài liệu bản nháp đã lên lịch <strong>{{title}}</strong>: {{error}}',
  /** Success toast for deleting a scheduled draft */
  'release.toast.delete-schedule-draft.success':
    'Tài liệu bản nháp đã lên lịch <strong>{{title}}</strong> đã bị xóa.',
  /** The toast title that will be shown when the user has a release perspective which is now deleted */
  'release.toast.not-found-release.title': "Không tìm thấy phiên bản '{{title}}'",
  /** Error toast for running a scheduled publish immediately */
  'release.toast.publish-scheduled-draft.error':
    'Không thể xuất bản tài liệu bản nháp đã lên lịch <strong>{{title}}</strong>: {{error}}',
  /** Success toast for running a scheduled publish immediately */
  'release.toast.publish-scheduled-draft.success':
    'Tài liệu bản nháp đã lên lịch <strong>{{title}}</strong> đã được xuất bản.',
  /** The toast description that will be shown when the user has a release perspective which is now published */
  'release.toast.published-release.description': 'Phiên bản này đã được gỡ ghim',
  /** The toast title that will be shown when the user has a release perspective which is now deleted */
  'release.toast.published-release.title': "Phiên bản '{{title}}' đã được xuất bản",
  /** Error toast for rescheduling a draft */
  'release.toast.reschedule-scheduled-draft.error':
    'Không thể lên lịch lại tài liệu bản nháp đã lên lịch <strong>{{title}}</strong>: {{error}}',
  /** Success toast for rescheduling a draft */
  'release.toast.reschedule-scheduled-draft.success':
    'Tài liệu bản nháp đã lên lịch <strong>{{title}}</strong> đã được lên lịch lại.',
  /** Label for when a version of a document has already been added to the release */
  'release.tooltip.already-added': 'Một phiên bản của tài liệu này đã được thêm vào',
  /** Label for when a release is scheduled / scheduling and a user can't add a document version to it */
  'release.tooltip.locked': 'Phiên bản này đã được lên lịch. Hủy lịch để thêm nhiều tài liệu hơn.',
  /** Label for the release type 'as soon as possible' */
  'release.type.asap': 'Càng sớm càng tốt',
  /** Label for the release type 'at time', meaning it's a release with a scheduled date */
  'release.type.scheduled': 'Theo thời gian',
  /** Label for the release type 'undecided' */
  'release.type.undecided': 'Chưa quyết định',
  /** Tooltip for the dropdown to show all versions of document */
  'release.version-list.tooltip': 'Xem tất cả các phiên bản tài liệu',

  /** Confirm button text for the schedule publish dialog */
  'schedule-publish-dialog.confirm': 'Lên lịch',
  /** Description for the schedule publish dialog */
  'schedule-publish-dialog.description': 'Chọn khi nào tài liệu này nên được xuất bản.',
  /** Header for the schedule publish dialog */
  'schedule-publish-dialog.header': 'Lên lịch bản nháp để Xuất bản',

  /** Title for a scheduled draft release */
  'scheduled-drafts.release.title': 'Xuất bản theo lịch trình',

  /** Accessibility label to open search action when the search would go fullscreen (eg on narrower screens) */
  'search.action-open-aria-label': 'Mở tìm kiếm',
  /** Action label for adding a search filter */
  'search.action.add-filter': 'Thêm bộ lọc',
  /** Action label for clearing search filters */
  'search.action.clear-filters': 'Xóa bộ lọc',
  /** Label for action to clear recent searches */
  'search.action.clear-recent-searches': 'Xóa tìm kiếm gần đây',
  /** Accessibility label for action to clear all currently applied document type filters */
  'search.action.clear-type-filters-aria-label': 'Xóa bộ lọc đã chọn',
  /** Label for action to clear all currently applied document type filters */
  'search.action.clear-type-filters-label': 'Xóa',
  /** Accessibility label for when the search is full screen (on narrow screens) and you want to close the search */
  'search.action.close-search-aria-label': 'Đóng tìm kiếm',
  /** Accessibility label for filtering by document type */
  'search.action.filter-by-document-type-aria-label': 'Lọc theo loại tài liệu',
  /** Accessibility action label for removing an already applied search filter */
  'search.action.remove-filter-aria-label': 'Gỡ bỏ bộ lọc',
  /**
   * Text displayed when either no document type(s) have been selected, or we need a fallback,
   * eg "Search for all types".
   */
  'search.action.search-all-types': 'Tìm kiếm tất cả các loại tài liệu',
  /**
   * Text displayed when we are able to determine one or more document types that will be used for
   * searching, and can fit within the space assigned by the design.
   */
  'search.action.search-specific-types': 'Tìm kiếm {{types, list}}',
  /** Dialog title for action to select an asset of unknown type */
  'search.action.select-asset': 'Chọn tài sản',
  /** Dialog title for action to select a file asset */
  'search.action.select-asset_file': 'Chọn tệp',
  /** Dialog title for action to select an image asset */
  'search.action.select-asset_image': 'Chọn hình ảnh',
  /** Accessibility label for when the search is full screen (on narrow screens) and you want to hide filters */
  'search.action.toggle-filters-aria-label_hide': 'Ẩn bộ lọc',
  /** Accessibility label for when the search is full screen (on narrow screens) and you want to show filters */
  'search.action.toggle-filters-aria-label_show': 'Hiển thị bộ lọc',
  /** Label for when the search is full screen (on narrow screens) and you want to hide filters */
  'search.action.toggle-filters-label_hide': 'Ẩn bộ lọc',
  /** Label for when the search is full screen (on narrow screens) and you want to show filters */
  'search.action.toggle-filters-label_show': 'Hiển thị bộ lọc',
  /** Tooltip text for the global search button */
  'search.button.tooltip': 'Tìm kiếm',
  /**
   * A list of provided types (use `list` formatter preferably).
   */
  'search.document-type-list': '{{types, list}}',
  /**
   * In the context of a list of document types - no filtering selection has been done,
   * thus the default is "all types".
   */
  'search.document-type-list-all-types': 'Tất cả các loại',
  /** Accessibility label for list displaying the available document types */
  'search.document-types-aria-label': 'Các loại tài liệu',
  /** Label for when no document types matching the filter are found */
  'search.document-types-no-matches-found': 'Không tìm thấy kết quả cho {{filter}}',
  /** Description for error when a filter cannot be displayed, describes that you should check the schema */
  'search.error.display-filter-description':
    'Điều này có thể chỉ ra các tùy chọn không hợp lệ được định nghĩa trong schema của bạn.',
  /** Title for error when a filter cannot be displayed (mainly a developer-oriented error) */
  'search.error.display-filter-title': 'Đã xảy ra lỗi trong khi hiển thị bộ lọc này.',
  /** Description for error when no valid asset source is found, describes that you should check the the current studio config */
  'search.error.no-valid-asset-source-check-config-description':
    'Vui lòng đảm bảo nó được kích hoạt trong tệp cấu hình studio của bạn.',
  /** Description for error when no valid asset source is found, describes that only the default asset is supported */
  'search.error.no-valid-asset-source-only-default-description':
    'Hiện tại, chỉ nguồn tài sản mặc định được hỗ trợ.',
  /** Title for error when no valid asset sources found */
  'search.error.no-valid-asset-source-title': 'Không tìm thấy nguồn tài sản hợp lệ.',
  /** Helpful description for when search returned an error that we are not able to describe in detail */
  'search.error.unspecified-error-help-description':
    'Vui lòng thử lại hoặc kiểm tra kết nối của bạn',
  /** Title label for when search returned an error that we are not able to describe in detail */
  'search.error.unspecified-error-title': 'Đã xảy ra lỗi trong khi tìm kiếm',
  /**
   * Label for "All fields", a label that appears above the list of available fields when filtering.
   * If one or more document type has been chosen as filter, this label is replaced with a group of
   * fields per selected document type
   */
  'search.filter-all-fields-header': 'Tất cả các trường',
  /** Label for the action of changing from one file to a different file in asset search filter */
  'search.filter-asset-change_file': 'Đổi file',
  /** Label for the action of changing from one image to a different image in asset search filter */
  'search.filter-asset-change_image': 'Đổi hình ảnh',
  /** Label for the action of clearing the currently selected asset in an image/file filter */
  'search.filter-asset-clear': 'Xóa',
  /** Label for the action of selecting a file in asset search filter */
  'search.filter-asset-select_file': 'Chọn file',
  /** Label for the action of selecting an image in asset search filter */
  'search.filter-asset-select_image': 'Chọn hình ảnh',
  /** Label for boolean filter - false */
  'search.filter-boolean-false': 'Sai',
  /** Label for boolean filter - true */
  'search.filter-boolean-true': 'Đúng',
  /** Accessibility label for list that lets you filter fields by title, when adding a new filter in search */
  'search.filter-by-title-aria-label': 'Lọc theo tiêu đề',
  /** Accessibility label for date filter input */
  'search.filter-date-aria-label': 'Ngày',
  /** Accessibility label for selecting end date on the date range search filter */
  'search.filter-date-range-end-date-aria-label': 'Ngày kết thúc',
  /** Accessibility label for selecting start date on the date range search filter */
  'search.filter-date-range-start-date-aria-label': 'Ngày bắt đầu',
  /**
   * Label for "Days"/"Months"/"Years" when selecting it as unit in "X days ago" search filter.
   * Capitalized, as it would be listed in a dropdown.
   */
  'search.filter-date-unit_days': 'Ngày',
  'search.filter-date-unit_months': 'Tháng',
  'search.filter-date-unit_years': 'Năm',
  /** Accessibility label for selecting the unit (day/month/year) when adding "X days ago" search filter */
  'search.filter-date-unit-aria-label': 'Chọn đơn vị',
  /** Accessibility label for the input value (days/months/years) when adding "X days ago" search filter */
  'search.filter-date-value-aria-label': 'Giá trị đơn vị',
  /** Label for "field description" shown in tooltip when navigating list of possible fields to filter */
  'search.filter-field-tooltip-description': 'Mô tả trường',
  /** Label for "field name" shown in tooltip when navigating list of possible fields to filter */
  'search.filter-field-tooltip-name': 'Tên trường',
  /** Label for "Used in document types", a list of the document types a field appears in. Shown in tooltip when navigating list of possible fields to filter */
  'search.filter-field-tooltip-used-in-document-types': 'Được sử dụng trong các loại tài liệu',
  /** Label for when no fields/filters are found for the given term */
  'search.filter-no-matches-found': 'Không tìm thấy kết quả cho {{filter}}',
  /** Placeholder value for maximum numeric value filter */
  'search.filter-number-max-value-placeholder': 'Giá trị tối đa',
  /** Placeholder value for minimum numeric value filter */
  'search.filter-number-min-value-placeholder': 'Giá trị tối thiểu',
  /** Placeholder value for the number filter */
  'search.filter-number-value-placeholder': 'Giá trị',
  /** Placeholder for the "Filter" input, when narrowing possible fields/filters */
  'search.filter-placeholder': 'Lọc',
  /** Label for the action of clearing the currently selected document in a reference filter */
  'search.filter-reference-clear': 'Xóa',
  /**
   * Label for "shared fields", a label that appears above a list of fields that all filtered types
   * have in common, when adding a new filter. For instance, if "book" and "employee" both have a
   * "title" field, this field would be listed under "shared fields".
   * */
  'search.filter-shared-fields-header': 'Các trường chung',
  /** Placeholder value for the string filter */
  'search.filter-string-value-placeholder': 'Giá trị',
  /** Label/placeholder prompting user to select one of the predefined, allowed values for a string field */
  'search.filter-string-value-select-predefined-value': 'Chọn…',
  /** Accessibility label for the "Filters" list, that is shown when using "Add filter" in search (plural) */
  'search.filters-aria-label_other': 'Bộ lọc',
  /** Label for instructions on how to use the search - displayed when no recent searches are available */
  'search.instructions': 'Sử dụng <ControlsIcon/> để tinh chỉnh tìm kiếm của bạn',
  /** Helpful description for when no search results are found */
  'search.no-results-help-description': 'Thử từ khóa khác hoặc điều chỉnh bộ lọc của bạn',
  /** Title label for when no search results are found */
  'search.no-results-title': 'Không tìm thấy kết quả',
  'search.operator.array-count-equal.description_other':
    '<Field/> <Operator>có</Operator> <Value>{{count}} mục</Value>',
  'search.operator.array-count-equal.name': 'số lượng bằng',
  'search.operator.array-count-gt.description_other':
    '<Field/> <Operator>có ></Operator> <Value>{{count}} mục</Value>',
  'search.operator.array-count-gt.name': 'số lượng lớn hơn',
  'search.operator.array-count-gte.description_other':
    '<Field/> <Operator>có ≥</Operator> <Value>{{count}} mục</Value>',
  'search.operator.array-count-gte.name': 'số lượng lớn hơn hoặc bằng',
  'search.operator.array-count-lt.description_other':
    '<Field/> <Operator>có <</Operator> <Value>{{count}} mục</Value>',
  'search.operator.array-count-lt.name': 'số lượng ít hơn',
  'search.operator.array-count-lte.description_other':
    '<Field/> <Operator>có ≤</Operator> <Value>{{count}} mục</Value>',
  'search.operator.array-count-lte.name': 'số lượng ít hơn hoặc bằng',
  'search.operator.array-count-not-equal.description_other':
    '<Field/> <Operator>không có</Operator> <Value>{{count}} mục</Value>',
  'search.operator.array-count-not-equal.name': 'số lượng không bằng',
  /**
   * Array should have a count within the range of given filter values.
   * Gets passed `{{from}}` and `{{to}}` values.
   **/
  'search.operator.array-count-range.description':
    '<Field/> <Operator>có từ</Operator> <Value>{{from}} → {{to}} mục</Value>',
  'search.operator.array-count-range.name': 'số lượng nằm giữa',
  /* Array should include the given value */
  'search.operator.array-list-includes.description':
    '<Field/> <Operator>bao gồm</Operator> <Value>{{value}}</Value>',
  'search.operator.array-list-includes.name': 'bao gồm',
  /* Array should not include the given value */
  'search.operator.array-list-not-includes.description':
    '<Field/> <Operator>không bao gồm</Operator> <Value>{{value}}</Value>',
  'search.operator.array-list-not-includes.name': 'không bao gồm',
  /* Array should include the given reference */
  'search.operator.array-reference-includes.description':
    '<Field/> <Operator>bao gồm</Operator> <Value>{{value}}</Value>',
  'search.operator.array-reference-includes.name': 'bao gồm',
  /* Array should not include the given reference */
  'search.operator.array-reference-not-includes.description':
    '<Field/> <Operator>không bao gồm</Operator> <Value>{{value}}</Value>',
  'search.operator.array-reference-not-includes.name': 'không bao gồm',
  /* Asset (file) should be the selected asset */
  'search.operator.asset-file-equal.description':
    '<Field/> <Operator>là</Operator> <Value>{{value}}</Value>',
  'search.operator.asset-file-equal.name': 'là',
  /* Asset (file) should not be the selected asset */
  'search.operator.asset-file-not-equal.description':
    '<Field/> <Operator>không phải là</Operator> <Value>{{value}}</Value>',
  'search.operator.asset-file-not-equal.name': 'không phải là',
  /* Asset (image) should be the selected asset */
  'search.operator.asset-image-equal.description':
    '<Field/> <Operator>là</Operator> <Value>{{value}}</Value>',
  'search.operator.asset-image-equal.name': 'là',
  /* Asset (image) should not be the selected asset */
  'search.operator.asset-image-not-equal.description':
    '<Field/> <Operator>không phải là</Operator> <Value>{{value}}</Value>',
  'search.operator.asset-image-not-equal.name': 'không phải là',
  /**
   * Boolean value should be the given filter value (true/false).
   * Context passed is `true` and `false`, allowing for more specific translations:
   * - `search.operator.boolean-equal.description_true`
   * - `search.operator.boolean-equal.description_false`
   */
  'search.operator.boolean-equal.description':
    '<Field/> <Operator>là</Operator> <Value>{{value}}</Value>',
  'search.operator.boolean-equal.name': 'là',
  /* Date should be after (later than) given filter value */
  'search.operator.date-after.description':
    '<Field/> <Operator>sau</Operator> <Value>{{value}}</Value>',
  'search.operator.date-after.name': 'sau',
  /* Date should be before (earlier than) given filter value */
  'search.operator.date-before.description':
    '<Field/> <Operator>trước</Operator> <Value>{{value}}</Value>',
  'search.operator.date-before.name': 'trước',
  /* Date should be the given filter value */
  'search.operator.date-equal.description':
    '<Field/> <Operator>là</Operator> <Value>{{value}}</Value>',
  'search.operator.date-equal.name': 'là',
  /* Date should be within the given filter value range (eg "within the last X days") */
  'search.operator.date-last.description':
    '<Field/> <Operator>trong những ngày cuối cùng</Operator> <Value>{{value}}</Value>',
  'search.operator.date-last.name': 'cuối cùng',
  /* Date should not be the given filter value */
  'search.operator.date-not-equal.description':
    '<Field/> <Operator>không phải là</Operator> <Value>{{value}}</Value>',
  'search.operator.date-not-equal.name': 'không phải là',
  /* Date should be within the range of given filter values */
  'search.operator.date-range.description': '<Field/> <Operator>nằm giữa</Operator> <Value/>',
  'search.operator.date-range.name': 'nằm giữa',
  /* Date and time should be after (later than) given filter value */
  'search.operator.date-time-after.description':
    '<Field/> <Operator>sau</Operator> <Value>{{value}}</Value>',
  'search.operator.date-time-after.name': 'sau',
  /* Date and time should be before (earlier than) given filter value */
  'search.operator.date-time-before.description':
    '<Field/> <Operator>trước</Operator> <Value>{{value}}</Value>',
  'search.operator.date-time-before.name': 'trước',
  /* Date and time should be the given filter value */
  'search.operator.date-time-equal.description':
    '<Field/> <Operator>là</Operator> <Value>{{value}}</Value>',
  'search.operator.date-time-equal.name': 'là',
  /* Date and time should be within the given filter value range (eg "within the last X days") */
  'search.operator.date-time-last.description':
    '<Field/> <Operator>trong những ngày cuối cùng</Operator> <Value>{{value}}</Value>',
  'search.operator.date-time-last.name': 'cuối cùng',
  /* Date and time should not be the given filter value */
  'search.operator.date-time-not-equal.description':
    '<Field/> <Operator>không phải là</Operator> <Value>{{value}}</Value>',
  'search.operator.date-time-not-equal.name': 'không phải là',
  /* Date and time should be within the range of given filter values */
  'search.operator.date-time-range.description': '<Field/> <Operator>nằm giữa</Operator> <Value/>',
  'search.operator.date-time-range.name': 'nằm giữa',
  /* Value should be defined */
  'search.operator.defined.description':
    '<Field/> <Operator>là</Operator> <Value>không trống</Value>',
  'search.operator.defined.name': 'không trống',
  /* Value should not be defined */
  'search.operator.not-defined.description':
    '<Field/> <Operator>là</Operator> <Value>trống</Value>',
  'search.operator.not-defined.name': 'trống',
  /* Number should be the given filter value */
  'search.operator.number-equal.description':
    '<Field/> <Operator>là</Operator> <Value>{{value}}</Value>',
  'search.operator.number-equal.name': 'là',
  /* Number should be greater than given filter value */
  'search.operator.number-gt.description':
    '<Field/> <Operator>></Operator> <Value>{{value}}</Value>',
  'search.operator.number-gt.name': 'lớn hơn',
  /* Number should be greater than or the given filter value */
  'search.operator.number-gte.description':
    '<Field/> <Operator>≥</Operator> <Value>{{value}}</Value>',
  'search.operator.number-gte.name': 'lớn hơn hoặc bằng',
  /* Number should be less than given filter value */
  'search.operator.number-lt.description':
    '<Field/> <Operator><</Operator> <Value>{{value}}</Value>',
  'search.operator.number-lt.name': 'nhỏ hơn',
  /* Number should be less than or the given filter value */
  'search.operator.number-lte.description':
    '<Field/> <Operator>≤</Operator> <Value>{{value}}</Value>',
  'search.operator.number-lte.name': 'nhỏ hơn hoặc bằng',
  /* Number should not be the given filter value */
  'search.operator.number-not-equal.description':
    '<Field/> <Operator>không phải là</Operator> <Value>{{value}}</Value>',
  'search.operator.number-not-equal.name': 'không phải là',
  /* Number should be within the range of given filter values */
  'search.operator.number-range.description':
    '<Field/> <Operator>nằm trong khoảng</Operator> <Value>{{from}} → {{to}}</Value>',
  'search.operator.number-range.name': 'nằm trong khoảng',
  /* Portable Text should contain the given filter value */
  'search.operator.portable-text-contains.description':
    '<Field/> <Operator>chứa</Operator> <Value>{{value}}</Value>',
  'search.operator.portable-text-contains.name': 'chứa',
  /* Portable Text should be the given filter value */
  'search.operator.portable-text-equal.description':
    '<Field/> <Operator>là</Operator> <Value>{{value}}</Value>',
  'search.operator.portable-text-equal.name': 'là',
  /* Portable Text should not contain the given filter value */
  'search.operator.portable-text-not-contains.description':
    '<Field/> <Operator>không chứa</Operator> <Value>{{value}}</Value>',
  'search.operator.portable-text-not-contains.name': 'không chứa',
  /* Portable Text should not be the given filter value */
  'search.operator.portable-text-not-equal.description':
    '<Field/> <Operator>không phải là</Operator> <Value>{{value}}</Value>',
  'search.operator.portable-text-not-equal.name': 'không phải là',
  /* References the given asset (file) */
  'search.operator.reference-asset-file.description':
    '<Field/> <Operator>→</Operator> <Value>{{value}}</Value>',
  'search.operator.reference-asset-file.name': 'tệp',
  /* References the given asset (image) */
  'search.operator.reference-asset-image.description':
    '<Field/> <Operator>→</Operator> <Value>{{value}}</Value>',
  'search.operator.reference-asset-image.name': 'hình ảnh',
  /* References the given document */
  'search.operator.reference-document.description':
    '<Field/> <Operator>→</Operator> <Value>{{value}}</Value>',
  'search.operator.reference-document.name': 'tài liệu',
  /* Reference should be the given document */
  'search.operator.reference-equal.description':
    '<Field/> <Operator>là</Operator> <Value>{{value}}</Value>',
  'search.operator.reference-equal.name': 'là',
  /* Reference should not be the given document */
  'search.operator.reference-not-equal.description':
    '<Field/> <Operator>không phải là</Operator> <Value>{{value}}</Value>',
  'search.operator.reference-not-equal.name': 'không phải là',
  /* Slug contains the given value */
  'search.operator.slug-contains.description':
    '<Field/> <Operator>chứa</Operator> <Value>{{value}}</Value>',
  'search.operator.slug-contains.name': 'chứa',
  /* Slug equals the given filter value */
  'search.operator.slug-equal.description':
    '<Field/> <Operator>là</Operator> <Value>{{value}}</Value>',
  'search.operator.slug-equal.name': 'là',
  /* Slug does not contain the given value */
  'search.operator.slug-not-contains.description':
    '<Field/> <Operator>không chứa</Operator> <Value>{{value}}</Value>',
  'search.operator.slug-not-contains.name': 'không chứa',
  /* Slug does not equal the given filter value */
  'search.operator.slug-not-equal.description':
    '<Field/> <Operator>không phải là</Operator> <Value>{{value}}</Value>',
  'search.operator.slug-not-equal.name': 'không phải là',
  /* String contains the given filter value */
  'search.operator.string-contains.description':
    '<Field/> <Operator>chứa</Operator> <Value>{{value}}</Value>',
  'search.operator.string-contains.name': 'chứa',
  /* String equals the given filter value */
  'search.operator.string-equal.description':
    '<Field/> <Operator>là</Operator> <Value>{{value}}</Value>',
  'search.operator.string-equal.name': 'là',
  /* String equals one of the predefined allowed values */
  'search.operator.string-list-equal.description':
    '<Field/> <Operator>là</Operator> <Value>{{value}}</Value>',
  'search.operator.string-list-equal.name': 'là',
  /* String does not equal one of the predefined allowed values */
  'search.operator.string-list-not-equal.description':
    '<Field/> <Operator>không phải là</Operator> <Value>{{value}}</Value>',
  'search.operator.string-list-not-equal.name': 'không phải là',
  /* String does not contain the given filter value */
  'search.operator.string-not-contains.description':
    '<Field/> <Operator>không chứa</Operator> <Value>{{value}}</Value>',
  'search.operator.string-not-contains.name': 'không chứa',
  /* String does not equal the given filter value */
  'search.operator.string-not-equal.description':
    '<Field/> <Operator>không phải là</Operator> <Value>{{value}}</Value>',
  'search.operator.string-not-equal.name': 'không phải là',
  /** Label for the "Best match" search ordering type */
  'search.ordering.best-match-label': 'Kết quả tốt nhất',
  /** Label for the "Created: Oldest first" search ordering type */
  'search.ordering.created-ascending-label': 'Đã tạo: Cũ nhất trước',
  /** Label for the "Created: Newest first" search ordering type */
  'search.ordering.created-descending-label': 'Đã tạo: Mới nhất trước',
  /** Label for the "Updated: Oldest first" search ordering type */
  'search.ordering.updated-ascending-label': 'Đã cập nhật: Cũ nhất trước',
  /** Label for the "Updated: Newest first" search ordering type */
  'search.ordering.updated-descending-label': 'Đã cập nhật: Mới nhất trước',
  /** Placeholder text for the global search input field */
  'search.placeholder': 'Tìm kiếm',
  /** Accessibility label for the recent searches section, shown when no valid search terms has been given */
  'search.recent-searches-aria-label': 'Tìm kiếm gần đây',
  /** Label/heading shown for the recent searches section */
  'search.recent-searches-label': 'Tìm kiếm gần đây',
  /** Accessibility label for the search results section, shown when the user has typed valid terms */
  'search.search-results-aria-label': 'Kết quả tìm kiếm',

  /** Label for the edit columns button to change field visibility in sheet list */
  'sheet-list.edit-columns': 'Chỉnh sửa cột',
  /** Label for the header menu option to hide a field from the sheet list */
  'sheet-list.hide-field': 'Loại bỏ khỏi bảng',
  /** Label for reset column visibilities button */
  'sheet-list.reset-columns': 'Đặt lại cột',
  /** Title for the edit columns menu */
  'sheet-list.select-fields': 'Chọn tối đa 5 loại trường',

  /** Accessibility label for the navbar status button */
  'status-button.aria-label': 'Trạng thái cấu hình',

  /* Time zone handling */
  'time-zone.action.search-for-timezone-placeholder': 'Tìm kiếm một thành phố hoặc múi giờ',
  /* Label for the local time zone button */
  'time-zone.action.select-local-time-zone': 'Chọn múi giờ địa phương',
  /* Dialog info for the time zone dialog */
  'time-zone.dialog-info.content-releases':
    'Múi giờ được chọn sẽ thay đổi cách ngày tháng được biểu diễn trong các bản phát hành nội dung.',
  /* Dialog info for the time zone dialog */
  'time-zone.dialog-info.input':
    'Múi giờ được chọn sẽ thay đổi cách ngày tháng được biểu diễn chỉ cho đầu vào này trong tài liệu này.',
  /* Dialog info for the time zone dialog */
  'time-zone.dialog-info.scheduled-publishing':
    'Múi giờ được chọn sẽ thay đổi cách ngày tháng được biểu diễn trong các lịch trình.',
  /* Label for the local time zone button */
  'time-zone.local-time': 'giờ địa phương',
  /* Label for the time zone button */
  'time-zone.time-zone': 'Múi giờ',
  /* Tooltip content for the time zone dialog */
  'time-zone.time-zone-tooltip-content-releases':
    'Hiển thị các bản phát hành trong {{alternativeName}} GMT{{offset}}',
  /* Tooltip content for the time zone dialog */
  'time-zone.time-zone-tooltip-input':
    'Hiển thị <em>{{title}}</em> trong {{alternativeName}} GMT{{offset}}',
  /* Tooltip content for the time zone dialog */
  'time-zone.time-zone-tooltip-scheduled-publishing':
    'Hiển thị các lịch trình trong {{alternativeName}} GMT{{offset}}',

  /** Title for the changes tooltip in the history inspector*/
  'timeline.changes.title': 'Thay đổi bởi',
  /** Description for error when the timeline for the given document can't be loaded */
  'timeline.error.load-document-changes-description':
    'Lịch sử giao dịch của tài liệu không bị ảnh hưởng.',
  /** Title for error when the timeline for the given document can't be loaded */
  'timeline.error.load-document-changes-title':
    'Đã xảy ra lỗi trong quá trình truy xuất các thay đổi của tài liệu.',
  /** Description for error when the timeline for the given document can't be loaded */
  'timeline.error.load-document-changes-version-description':
    'Kích hoạt API sự kiện thông qua cấu hình Studio để xem lịch sử tài liệu.',
  /** Title for error when the timeline for the given version document can't be loaded */
  'timeline.error.load-document-changes-version-title':
    'Lịch sử phiên bản tài liệu chỉ có sẵn thông qua API Sự kiện.',
  /** Error description for when the document doesn't have history */
  'timeline.error.no-document-history-description':
    'Khi thay đổi nội dung của tài liệu, các phiên bản tài liệu sẽ xuất hiện trong menu này.',
  /** Error title for when the document doesn't have history */
  'timeline.error.no-document-history-title': 'Không có lịch sử tài liệu',
  /** Error prompt when revision cannot be loaded */
  'timeline.error.unable-to-load-revision': 'Không thể tải bản sửa đổi',
  /** Label for when the timeline item is the latest in the history */
  'timeline.latest': 'Mới nhất',
  /** Label for latest revision for timeline menu dropdown */
  'timeline.latest-revision': 'Phiên bản mới nhất',
  /**
   * Label for latest revision for timeline menu dropdown
   * @deprecated as of `v3.47.0` `timeline.latest-revision` should be used instead. Note: _usage_ of this key is deprecated, but Studios on `< v3.47.0` still require this key to be _defined_
   * */
  'timeline.latest-version': 'Phiên bản mới nhất',
  /** The aria-label for the list of revisions in the timeline */
  'timeline.list.aria-label': 'Các bản sửa đổi tài liệu',
  /** Label for loading history */
  'timeline.loading-history': 'Đang tải lịch sử…',
  /* Label for when no previous since events are available*/
  'timeline.no-previous-events': 'Không có sự kiện trước đó',
  /** Label shown in review changes timeline when a document has been created */
  'timeline.operation.created': 'Đã tạo',
  /** Label shown in review changes timeline when a document has been created, with a timestamp */
  'timeline.operation.created_timestamp': 'Đã tạo: {{timestamp, datetime}}',
  /** Label shown in review changes timeline when a document was initially created */
  'timeline.operation.created-initial': 'Đã tạo',
  /** Label shown in review changes timeline when a document was initially created, with a timestamp */
  'timeline.operation.created-initial_timestamp': 'Đã tạo: {{timestamp, datetime}}',
  /** Label shown in review changes timeline when a document has been deleted */
  'timeline.operation.deleted': 'Đã xóa',
  /** Label shown in review changes timeline when a document has been deleted, with a timestamp */
  'timeline.operation.deleted_timestamp': 'Đã xóa: {{timestamp, datetime}}',
  /** Label shown in review changes timeline when a draft document has been created*/
  'timeline.operation.draft-created': 'Bản nháp đã được tạo',
  /** Label shown in review changes timeline when a draft document has been created, with a timestamp */
  'timeline.operation.draft-created_timestamp': 'Bản nháp đã được tạo: {{timestamp, datetime}}',
  /** Label shown in review changes timeline when a draft has been discarded */
  'timeline.operation.draft-discarded': 'Bản nháp đã bỏ',
  /** Label shown in review changes timeline when a draft has been discarded, with a timestamp */
  'timeline.operation.draft-discarded_timestamp': 'Bản nháp đã bỏ: {{timestamp, datetime}}',
  /** Label shown in review changes timeline when a draft has been edited */
  'timeline.operation.edited-draft': 'Đã chỉnh sửa',
  /** Label shown in review changes timeline when a draft has been edited, with a timestamp */
  'timeline.operation.edited-draft_timestamp': 'Đã chỉnh sửa: {{timestamp, datetime}}',
  /** Label shown in review changes timeline when a document has been edited live */
  'timeline.operation.edited-live': 'Chỉnh sửa trực tiếp',
  /** Label shown in review changes timeline when a document has been edited live, with a timestamp */
  'timeline.operation.edited-live_timestamp': 'Chỉnh sửa trực tiếp: {{timestamp, datetime}}',
  /** Label shown in review changes timeline event when transactions have been deleted by retention policy */
  'timeline.operation.history-cleared': 'Đã xóa do chính sách giữ lịch sử',
  /** Label shown in review changes timeline when a document was published */
  'timeline.operation.published': 'Đã xuất bản',
  /** Label shown in review changes timeline when a document was published, with a timestamp */
  'timeline.operation.published_timestamp': 'Đã xuất bản: {{timestamp, datetime}}',
  /** Label shown in review changes timeline when a document was unpublished */
  'timeline.operation.unpublished': 'Chưa xuất bản',
  /** Label shown in review changes timeline when a document was unpublished, with a timestamp */
  'timeline.operation.unpublished_timestamp': 'Chưa xuất bản: {{timestamp, datetime}}',
  /** Label shown in review changes timeline when a document version has been created */
  'timeline.operation.version-created': 'Phiên bản đã được tạo',
  /** Label shown in review changes timeline when a document version has been created, with a timestamp */
  'timeline.operation.version-created_timestamp': 'Phiên bản đã được tạo: {{timestamp, datetime}}',
  /** Label shown in review changes timeline when a document version has been discarded */
  'timeline.operation.version-discarded': 'Phiên bản đã bị loại bỏ',
  /** Label shown in review changes timeline when a document version has been discarded, with a timestamp */
  'timeline.operation.version-discarded_timestamp':
    'Phiên bản đã bị loại bỏ: {{timestamp, datetime}}',
  /**
   * Label for determining since which version the changes for timeline menu dropdown are showing.
   * Receives the time label as a parameter (`timestamp`).
   */
  'timeline.since': 'Từ: {{timestamp, datetime}}',
  /** Label for missing change version for timeline menu dropdown are showing */
  'timeline.since-version-missing': 'Từ: phiên bản không xác định',

  /** Aria label for the action buttons in the PTE toolbar */
  'toolbar.portable-text.action-button-aria-label': '{{action}}',

  /** Accessibility label for the breadcrumb menu */
  'tree-editing-dialog.breadcrumbs.menu': 'Menu đường dẫn',
  /** Title placeholder for search input in array of objects */
  'tree-editing-dialog.search-placeholder': 'Tìm kiếm',
  /** Menu aria label for the search menu */
  'tree-editing-dialog.search.menu-label': 'Menu tìm kiếm',
  /** Title label for when no search results are found on the tree of objects */
  'tree-editing-dialog.search.no-results-title': 'Không tìm thấy kết quả',
  /** Label to close the sidebar */
  'tree-editing-dialog.sidebar.action.close': 'Đóng thanh bên',
  /** Collapse label the menu item in the sidebar  */
  'tree-editing-dialog.sidebar.action.collapse': 'Thu gọn',
  /** Label to close the dialog */
  'tree-editing-dialog.sidebar.action.done': 'Hoàn tất',
  /** Exapnd label the menu item in the sidebar  */
  'tree-editing-dialog.sidebar.action.expand': 'Mở rộng',
  /** Label to open the sidebar */
  'tree-editing-dialog.sidebar.action.open': 'Mở thanh bên',

  'user-menu.action.free-trial_other': 'Còn {{count}} ngày thử nghiệm',
  /** Label for the button showed after trial ended */
  'user-menu.action.free-trial-finished': 'Nâng cấp từ miễn phí',
  /** Label for action to invite members to the current sanity project */
  'user-menu.action.invite-members': 'Mời thành viên',
  /** Accessibility label for action to invite members to the current sanity project */
  'user-menu.action.invite-members-aria-label': 'Mời thành viên',
  /** Label for action to manage the current sanity project */
  'user-menu.action.manage-project': 'Quản lý dự án',
  /** Accessibility label for the action to manage the current project */
  'user-menu.action.manage-project-aria-label': 'Quản lý dự án',
  /** Tooltip helper text when portable text annotation is disabled for empty block*/
  'user-menu.action.portable-text.annotation-disabled_empty-block':
    'Không thể áp dụng {{name}} cho khối trống',
  /** Tooltip helper text when portable text annotation is disabled for multiple blocks */
  'user-menu.action.portable-text.annotation-disabled_multiple-blocks':
    'Không thể áp dụng {{name}} cho nhiều khối',
  /** Label for action to sign out of the current sanity project */
  'user-menu.action.sign-out': 'Đăng xuất',
  /** Title for appearance section for the current studio (dark / light / system scheme) */
  'user-menu.appearance-title': 'Giao diện',
  /** Label for close menu button for user menu */
  'user-menu.close-menu': 'Đóng menu',
  /** Description for using the "dark theme" in the appearance user menu */
  'user-menu.color-scheme.dark-description': 'Sử dụng giao diện tối',
  /** Title for using the "dark theme" in the appearance user menu */
  'user-menu.color-scheme.dark-title': 'Tối',
  /** Description for using the "light theme" in the appearance user menu */
  'user-menu.color-scheme.light-description': 'Sử dụng giao diện sáng',
  /** Title for using the "light theme" in the appearance user menu */
  'user-menu.color-scheme.light-title': 'Sáng',
  /** Description for using "system apparence" in the appearance user menu */
  'user-menu.color-scheme.system-description': 'Sử dụng giao diện hệ thống',
  /** Title for using system apparence in the appearance user menu */
  'user-menu.color-scheme.system-title': 'Hệ thống',
  /** Title for locale section for the current studio */
  'user-menu.locale-title': 'Ngôn ngữ',
  /** Label for tooltip to show which provider the currently logged in user is using */
  'user-menu.login-provider': 'Đăng nhập với {{providerTitle}}',
  /** Label for open menu button for user menu */
  'user-menu.open-menu': 'Mở menu',

  /**
   * Label for action to add a workspace (currently a developer-oriented action, as this will
   * lead to the documentation on workspace configuration)
   */
  'workspaces.action.add-workspace': 'Thêm không gian làm việc',
  /**
   * Label for action to choose a different workspace, in the case where you are not logged in,
   * have selected a workspace, and are faced with the authentication options for the selected
   * workspace. In other words, label for the action shown when you have reconsidered which
   * workspace to authenticate in.
   */
  'workspaces.action.choose-another-workspace': 'Chọn không gian làm việc khác',
  /** Label for title to switch workspace before workspaces are listed */
  'workspaces.action.switch-workspace': 'Chuyển không gian làm việc',
  /** Label for heading that indicates that you can choose your workspace */
  'workspaces.choose-your-workspace-label': 'Chọn không gian làm việc của bạn',
  /** Label for the workspace menu */
  'workspaces.select-workspace-aria-label': 'Chọn không gian làm việc',
  /** Button label for opening the workspace switcher */
  'workspaces.select-workspace-label': 'Chọn không gian làm việc',
  /** Tooltip for the workspace menu */
  'workspaces.select-workspace-tooltip': 'Chọn không gian làm việc',
  /** Title for Workplaces dropdown menu */
  'workspaces.title': 'Không gian làm việc',
})
