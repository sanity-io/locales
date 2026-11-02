import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Label for action "Copy to clipboard", tied to the "Query URL" field. Also used for accessibility purposes on button */
  'action.copy-url-to-clipboard': 'Sao chép vào clipboard',
  /** Label for deleting a query */
  'action.delete': 'Xóa',
  /** Label for editing a query's title */
  'action.edit-title': 'Chỉnh sửa tiêu đề',
  /** Label for stopping an ongoing listen operation */
  'action.listen-cancel': 'Dừng lại',
  /** Label for setting up a listener */
  'action.listen-execute': 'Lắng nghe',
  /** Label for query loading table */
  'action.load-queries': 'Tải các truy vấn',
  /** Label for loading a query */
  'action.load-query': 'Tải truy vấn',
  /** Label for cancelling an ongoing query */
  'action.query-cancel': 'Hủy bỏ',
  /** Label for executing the query, eg doing a fetch */
  'action.query-execute': 'Truy vấn',
  /** Label for saving a query */
  'action.save-personal-copy': 'Lưu bản sao cá nhân',
  /** Label for saving a personal query */
  'action.save-personal-query': 'Lưu dưới dạng cá nhân',
  /** Label for saving a query */
  'action.save-query': 'Lưu truy vấn',
  /** Label for saving a shared query */
  'action.save-shared-query': 'Lưu dưới dạng chia sẻ',
  /** Label for unsharing a query */
  'action.unshare': 'Hủy chia sẻ',
  /** Label for updating a query */
  'action.update': 'Cập nhật',

  /** Label for actions user can take */
  'label.actions': 'Hành động',
  /** Label for all saved queries */
  'label.all': 'Tất cả',
  /** Label for saved queries that have been edited */
  'label.edited': 'Đã chỉnh sửa',
  /**
   * Some features has a "New" label indicating that the feature was recently introduced.
   * This defines what the text of that label is. Keep it short and sweet.
   */
  'label.new': 'Mới',
  /** Label for query type "personal" */
  'label.personal': 'Cá nhân',
  /** Label for savedAt date */
  'label.saved-at': 'Đã lưu lúc',
  /** Saved queries */
  'label.saved-queries': 'Các truy vấn đã lưu',
  /** Search queries */
  'label.search-queries': 'Tìm kiếm truy vấn',
  /** Share query */
  'label.share': 'Chia sẻ',
  /** Label for query type "shared" */
  'label.shared': 'Đã chia sẻ',
  /** Label for saved query type "team" */
  'label.team': 'Nhóm',
  /** Label for untitled query fallback */
  'label.untitled-query': 'Chưa đặt tên',

  /** Error message for when the "Params" input are not a valid json */
  'params.error.params-invalid-json': 'Tham số không phải là JSON hợp lệ',
  /** Label for "Params" (parameters) editor/input */
  'params.label': 'Tham số',

  /** Label for 'Column' indicator when there is an error within the query */
  'query.error.column': 'Cột',
  /** Label for 'Line' indicator when there is an error within the query */
  'query.error.line': 'Dòng',
  /** Extra explanation when a 400 is returned for a release perspective on an old API version */
  'query.error.unsupported-release-perspective':
    'Phiên bản API này không hỗ trợ các perspective phức tạp. Hãy sử dụng {{apiVersion}} hoặc phiên bản mới hơn.',
  /** Extra explanation when a 400 is returned for a variant on an incompatible API version */
  'query.error.unsupported-variant':
    'Phiên bản API này không hỗ trợ các biến thể nội dung. Hãy sử dụng phiên bản API thử nghiệm ({{apiVersion}}).',
  /** Label for "Query" editor/input */
  'query.label': 'Truy vấn',
  /** Label for the "Query URL" field, shown after executing a query, and allows for copying */
  'query.url': 'URL Truy vấn',

  /** Label for "End to End time" information of the fetched query */
  'result.end-to-end-time-label': 'Thời gian đầu cuối',
  /** Label for "Execution time" information of the fetched query */
  'result.execution-time-label': 'Thời gian thực thi',
  /** Label for "Result" explorer/view */
  'result.label': 'Kết quả',
  /** Tooltip text shown when the query result is not encodable as CSV */
  'result.save-result-as-csv.not-csv-encodable': 'Kết quả không thể mã hóa dưới dạng CSV',
  /** Label for "Save result as" result action */
  'result.save-result-as-format': 'Lưu kết quả dưới dạng <SaveResultButtons/>',
  /**
   * "Not applicable" message for when there is no Execution time or End to End time information
   * available for the query (eg when the query has not been executed, or errored)
   */
  'result.timing-not-applicable': 'không áp dụng',

  /** Query already saved error label */
  'save-query.already-saved': 'Truy vấn đã được lưu',
  /** Save error label */
  'save-query.error': 'Lỗi khi lưu truy vấn',
  /** Save personal copy success label */
  'save-query.personal-copy-success': 'Đã lưu bản sao cá nhân',
  /** Warning displayed before sharing a query */
  'save-query.share-warning':
    'Các truy vấn được chia sẻ được lưu trữ dưới dạng tài liệu trong dataset của bạn và được tính vào hạn mức tài liệu của bạn.',
  /** Save shared query success label */
  'save-query.shared-success': 'Đã lưu truy vấn được chia sẻ',
  /** Save success label */
  'save-query.success': 'Truy vấn đã được lưu',
  /** Save unshared query success label */
  'save-query.unshared-success': 'Truy vấn đã được chuyển sang cá nhân',

  /** Label for the "API version" dropdown in settings */
  'settings.api-version-label': 'Phiên bản API',
  /** Tooltip shown when the API version selector is locked to vX because a variant is selected */
  'settings.api-version-locked-for-variant':
    'Khi một biến thể được chọn, phiên bản API cần phải là vX.',
  /** Label for the "Custom API version" input in settings, shown when "other" is chosen as API version */
  'settings.custom-api-version-label': 'Phiên bản API Tùy chỉnh',
  /** Label for the "Dataset" dropdown in vision settings */
  'settings.dataset-label': 'Dataset',
  /** Error label for when the API version in 'Custom API version' input is invalid */
  'settings.error.invalid-api-version': 'Phiên bản API không hợp lệ',
  /** Label for the "other" versions within the "API version" dropdown */
  'settings.other-api-version-label': 'Khác',
  /**
   * Label for the "Perspective" dropdown in vision settings
   * @see {@link https://www.sanity.io/docs/perspectives}
   */
  'settings.perspective-label': 'Perspective',
  /** Notification about previewDrafts to drafts rename */
  'settings.perspective.preview-drafts-renamed-to-drafts.description':
    'Góc nhìn "<code>previewDrafts</code>" đã được đổi tên thành "<code>drafts</code>" và hiện không còn được sử dụng. Thay đổi này có hiệu lực cho tất cả các phiên bản hỗ trợ góc nhìn (>= v2021-03-25).',
  /** Call to action to read the docs related to "Perspectives" */
  'settings.perspectives.action.docs-link': 'Đọc tài liệu',
  /** Option for selecting default perspective */
  'settings.perspectives.default': 'Không có góc nhìn (mặc định API)',
  /** Description for popover that explains what "Perspectives" are */
  'settings.perspectives.description':
    'Perspectives cho phép truy vấn của bạn chạy trên các "góc nhìn" khác nhau của nội dung trong dataset của bạn',
  /** Description for upcoming default perspective change */
  'settings.perspectives.new-default.description':
    'Góc nhìn mặc định sẽ thay đổi từ "<code>raw</code>" sang "<code>published</code>" trong phiên bản API sắp tới. Vui lòng tham khảo tài liệu để biết thêm chi tiết.',
  /** Label for the pinned release perspective */
  'settings.perspectives.pinned-release-label': 'phiên bản được ghim',
  /** Label for the scheduled drafts perspective */
  'settings.perspectives.scheduled-drafts': 'Bản nháp đã lên lịch',
  /** Title for popover that explains what "Perspectives" are */
  'settings.perspectives.title': 'Perspectives',

  /** Tooltip line of every control that calls Sanity Agent Actions, which bills AI credits */
  'vista.agent-actions.credits': 'Sử dụng một tín dụng AI cho mỗi yêu cầu',
  /** Under an Agent Actions control: the organization's AI credits balance this month */
  'vista.ai-credits.balance':
    'Còn lại {{balance}} trên tổng số {{quota}} tín dụng AI trong tháng này.',
  /** Under an Agent Actions control: the credits used beyond the plan's monthly quota */
  'vista.ai-credits.deficit':
    'Đã sử dụng {{used}} tín dụng AI trong tháng này, nhiều hơn {{deficit}} so với {{quota}} được bao gồm.',
  /** Body of the out-of-credits card, with the credits used and the plan's monthly quota */
  'vista.ai-credits.limit.description':
    'Tổ chức của bạn đã sử dụng {{used}} trên {{quota}} tín dụng AI trong tháng này, vì vậy Sanity Agent Actions sẽ tạm dừng cho đến tháng sau hoặc cho đến khi giới hạn chi tiêu được nâng lên.',
  /** Body of the out-of-credits card when the usage and the quota are unknown */
  'vista.ai-credits.limit.description-unknown':
    'Tổ chức của bạn đã đạt đến giới hạn chi tiêu tín dụng AI, vì vậy Sanity Agent Actions sẽ tạm dừng cho đến tháng sau hoặc cho đến khi giới hạn được nâng lên.',
  /** Link in the out-of-credits card to the documentation of AI credits */
  'vista.ai-credits.limit.learn-more': 'Cách thức hoạt động của tín dụng AI',
  /** Button in the out-of-credits card leading to the organization's spending limits in Manage */
  'vista.ai-credits.limit.manage': 'Quản lý tín dụng AI',
  /** Title of the card shown where the organization is out of AI credits */
  'vista.ai-credits.limit.title': 'Hết tín dụng AI',
  /** Link after the AI credits note, to the organization's AI usage in Manage */
  'vista.ai-credits.usage': 'Mức sử dụng AI',
  /** Under an Agent Actions control: the credits used, on a plan without a quota */
  'vista.ai-credits.used': 'Đã sử dụng {{used}} tín dụng AI trong tháng này.',
  /** Button in the request column's action bar naming the API version requests go out with */
  'vista.api-version.button': 'API {{version}}',
  /** The API version button while queries go through the API CDN */
  'vista.api-version.button-cdn': 'API CDN {{version}}',
  /** The API version button while the "Other" API version input holds an unfinished version */
  'vista.api-version.button-invalid': 'Phiên bản API chưa hoàn chỉnh',
  /** Tooltip of the API version button */
  'vista.api-version.tooltip':
    'Truy vấn chạy trên phiên bản API {{version}}. Chọn để thay đổi trong Tùy chọn.',
  /** Tooltip of the API version button while queries go through the API CDN */
  'vista.api-version.tooltip-cdn':
    'Truy vấn chạy trên API CDN với phiên bản API {{version}}. Chọn để thay đổi trong Tùy chọn.',
  /**
   * Tooltip of the API version button while the API CDN is asked for but the perspective, as the
   * perspective select names it, keeps queries on the API
   */
  'vista.api-version.tooltip-cdn-blocked':
    'Truy vấn chạy trên API với phiên bản API {{version}}, không phải API CDN: nó không phục vụ góc nhìn {{perspective}}. Chọn để thay đổi trong Tùy chọn.',
  /** Tooltip of the API version button while the "Other" input holds an unfinished version */
  'vista.api-version.tooltip-invalid':
    'Phiên bản API trong Tùy chọn chưa hoàn chỉnh, vì vậy không thể tải dữ liệu cho đến khi nó hoàn chỉnh.',
  /** Tooltip of the API version button while a selected variant forces the experimental API */
  'vista.api-version.tooltip-locked':
    'Truy vấn chạy trên phiên bản API {{version}}, mà biến thể đã chọn yêu cầu.',
  /** Label of the document after the change in the Delta panel */
  'vista.delta.after': 'Sau',
  /** Label of the document before the change in the Delta panel */
  'vista.delta.before': 'Trước',
  /** What the Delta panel does */
  'vista.delta.description':
    'Chạy truy vấn ở chế độ delta, như cách các webhook, listener và Sanity Functions sử dụng GROQ thực hiện: before() và after() là tài liệu trước và sau một thay đổi, @ là tài liệu sau khi thay đổi, và delta::changedAny() so sánh chúng. Nó chạy trong trình duyệt bằng groq-js. Một bên trống có nghĩa là không có tài liệu: thay đổi tạo ra hoặc xóa nó.',
  /** Label of the document ID field in the Delta panel */
  'vista.delta.document-id': 'ID tài liệu',
  /** Shown when there is a query but no documents to compare */
  'vista.delta.empty': 'Tải lịch sử của một tài liệu, hoặc viết các tài liệu vào Trước và Sau.',
  /** Shown when the query fails in delta mode */
  'vista.delta.failed': 'Không thể chạy truy vấn ở chế độ delta: {{message}}',
  /** Shown when the After document is not valid JSON */
  'vista.delta.invalid-after': 'Sau không phải là JSON hợp lệ: {{message}}',
  /** Shown when the Before document is not valid JSON */
  'vista.delta.invalid-before': 'Before không phải là JSON hợp lệ: {{message}}',
  /** Button loading the document's revisions from the History API */
  'vista.delta.load': 'Tải lịch sử',
  /** Shown when the history could not be loaded */
  'vista.delta.load-failed': 'Không thể tải lịch sử: {{message}}',
  /** A delta filter that is true for the change */
  'vista.delta.matches': 'Khớp: một webhook hoặc function có bộ lọc này sẽ chạy cho thay đổi này.',
  /** A delta filter that is false for the change */
  'vista.delta.no-match':
    'Không khớp: một webhook hoặc function có bộ lọc này sẽ không chạy cho thay đổi này.',
  /** Shown while the query or its params cannot be sent */
  'vista.delta.no-request': 'Sửa truy vấn và các tham số của nó để chạy ở chế độ delta.',
  /** Heading of the delta result */
  'vista.delta.result': 'Kết quả',
  /** The After choice for a change that deletes the document */
  'vista.delta.revision.none-after': 'Không có gì: thay đổi này xóa tài liệu',
  /** The Before choice for a change that creates the document */
  'vista.delta.revision.none-before': 'Không có gì: thay đổi này tạo tài liệu',
  /** A revision in the Before and After lists */
  'vista.delta.revision.option': '{{time}} · {{revision}}',
  /** Accessible label for the button that closes the sidebar drawer */
  'vista.drawer.close': 'Đóng bảng điều khiển',
  /** Explanation at the top of the Explain panel */
  'vista.explain.description':
    'Kế hoạch truy vấn là cách Content Lake thực thi truy vấn: những gì nó đọc, lọc và sắp xếp trong khi đọc, và những gì được để lại cho các bước sau. Giải thích điều này cho tôi sẽ dùng Sanity Agent Actions để mô tả truy vấn và kế hoạch của nó bằng ngôn ngữ thông thường, tiêu tốn một tín dụng AI.',
  /** Shown in the Explain panel while there is no valid query to explain */
  'vista.explain.empty': 'Viết một truy vấn để giải thích nó.',
  /** Button in the Explain panel asking Agent Actions to explain the query and its plan */
  'vista.explain.explain': 'Giải thích điều này cho tôi',
  /** Shown when the explanation could not be written */
  'vista.explain.failed': 'Không thể giải thích truy vấn: {{message}}',
  /** A count the index computes without reading the documents */
  'vista.explain.insight.aggregate': 'Được đếm trong chỉ mục, mà không cần đọc các tài liệu.',
  /** A subquery the plan runs once for all documents */
  'vista.explain.insight.batched-subquery':
    'Truy vấn con chạy một lần cho tất cả các tài liệu, trong một lần lấy theo lô duy nhất, không phải cho từng tài liệu.',
  /** Part of the filter runs in memory; the expression follows */
  'vista.explain.insight.filter-in-memory':
    'Một phần của bộ lọc chạy trong bộ nhớ, sau khi đọc: mọi tài liệu mà chỉ mục cho qua đều được đọc trước, điều này sẽ chậm trên các dataset lớn. Các phép join (->) và function trong bộ lọc không thể sử dụng chỉ mục.',
  /** The index sorts and limits while reading */
  'vista.explain.insight.index-sort-limit':
    'Chỉ mục sắp xếp và giới hạn các tài liệu trong khi đọc chúng.',
  /** The plan slices in memory */
  'vista.explain.insight.slice-in-memory':
    'Việc cắt lát được thực hiện trong bộ nhớ sau khi đọc, không phải như một giới hạn trong khi đọc.',
  /** The plan sorts in memory */
  'vista.explain.insight.sort-in-memory':
    'Việc sắp xếp diễn ra trong bộ nhớ, sau khi đọc mọi kết quả khớp. Hãy sắp xếp theo các thuộc tính mà chỉ mục có thể sắp xếp.',
  /** Link under the plan insights to the guide on fast queries */
  'vista.explain.insights.guide': 'GROQ hiệu suất cao',
  /** Heading of the plan insights in the Explain panel */
  'vista.explain.insights.title': 'Điểm nổi bật',
  /** Button in the Explain panel fetching the query plan */
  'vista.explain.plan': 'Hiển thị kế hoạch truy vấn',
  /** Shown when the query plan could not be fetched */
  'vista.explain.plan-failed': 'Không thể lấy kế hoạch truy vấn: {{message}}',
  /** Heading of the query plan in the Explain panel */
  'vista.explain.plan-title': 'Kế hoạch truy vấn',
  /** Toast shown after a code snippet was copied */
  'vista.export-query.copied': 'Đã sao chép đoạn mã vào bộ nhớ tạm',
  /** Label for the button that copies a code snippet */
  'vista.export-query.copy': 'Sao chép đoạn mã',
  /** Explanation at the top of the export query dialog */
  'vista.export-query.description':
    'Chạy truy vấn này bên ngoài studio bằng một trong các đoạn mã sau.',
  /** Title of the dialog that exports the query as code snippets */
  'vista.export-query.title': 'Xuất truy vấn',
  /** Note about authentication in the export query dialog */
  'vista.export-query.token-note':
    'Các dataset riêng tư cần có API token. Các dataset công khai có thể bỏ qua tiêu đề Authorization.',
  /** Toast shown after the generated code was copied */
  'vista.export-types.copied': 'Đã sao chép mã vào bộ nhớ tạm',
  /** Label for the button that copies the generated code */
  'vista.export-types.copy': 'Sao chép mã',
  /** Shown in the types dialog when there is neither a schema evaluation nor a result */
  'vista.export-types.empty':
    'Hãy lấy truy vấn trước để có kết quả làm cơ sở suy ra các kiểu dữ liệu.',
  /** Why the workspace schema could not be used for the types; shown with the result fallback */
  'vista.export-types.schema-error': 'Đánh giá schema thất bại: {{message}}',
  /** Note shown when the types were derived from the fetched result instead of the schema */
  'vista.export-types.source.result':
    'Được suy ra từ kết quả đã lấy, vì truy vấn không thể được đánh giá dựa trên schema của workspace.',
  /** Note shown when the types were derived from the workspace schema */
  'vista.export-types.source.schema':
    'Được suy ra từ schema của workspace, theo cách mà sanity typegen thực hiện.',
  /** Shown when the schema cannot be evaluated and the shown result belongs to an older query */
  'vista.export-types.stale-result':
    'Kết quả hiển thị được lấy cho một truy vấn hoặc tham số khác. Hãy lấy truy vấn hiện tại trước để có kết quả làm cơ sở suy ra các kiểu dữ liệu.',
  /** Title of the dialog exporting TypeScript types for the result */
  'vista.export-types.title-typescript': 'Xuất TypeScript',
  /** Title of the dialog exporting a Zod schema for the result */
  'vista.export-types.title-zod': 'Xuất Zod',
  /** Button of a library function the query does not declare, which declares it at the top */
  'vista.functions.add': 'Thêm vào truy vấn',
  /** Shown on a library function the query declares the same way */
  'vista.functions.declared': 'Trong truy vấn này',
  /** Lint action on a call of a library function the query does not declare */
  'vista.functions.editor.add-from-library': 'Khai báo nó',
  /** Note in a function's hover documentation: the API version it needs */
  'vista.functions.editor.api-version': 'Cần API version {{version}} trở lên',
  /** Detail of a completion for a custom function the query declares */
  'vista.functions.editor.completion-declared': 'trong truy vấn này',
  /** Detail of a completion for a library function, which declares it too */
  'vista.functions.editor.completion-library': 'từ thư viện của bạn',
  /** Note in the hover documentation of a custom function the query declares */
  'vista.functions.editor.declared-on': 'Hàm tùy chỉnh, được khai báo ở dòng {{line}}',
  /** Note in the hover documentation of the functions that only work in delta mode */
  'vista.functions.editor.delta-only':
    'Chỉ hoạt động ở chế độ delta, nơi webhook và Sanity Functions chạy các bộ lọc của chúng',
  /** Button over a selected projection in the query editor, turning it into a custom function */
  'vista.functions.editor.extract': 'Trích xuất thành hàm',
  /** Note in the hover documentation of a library function the query does not declare */
  'vista.functions.editor.in-library':
    'Có trong thư viện hàm của bạn, nhưng chưa được khai báo trong truy vấn này',
  /** Link at the end of a built-in function's hover documentation */
  'vista.functions.editor.reference': 'Tài liệu tham khảo hàm GROQ',
  /** Explanation under the library heading in the Functions panel */
  'vista.functions.library.description':
    'Được lưu giữ trong trình duyệt này cho mọi tập dữ liệu của dự án. Tính năng tự động hoàn thành sẽ gợi ý các hàm này, và lint sẽ đề xuất khai báo một hàm từ các lệnh gọi truy vấn.',
  /** Shown in the Functions panel while the library is empty */
  'vista.functions.library.empty':
    'Lưu một hàm mà truy vấn khai báo để sử dụng nó trong các truy vấn khác.',
  /** Heading of the functions library in the Functions panel */
  'vista.functions.library.title': 'Thư viện',
  /** Shown in the Functions panel while the query declares no custom functions */
  'vista.functions.query.empty':
    'Khai báo các hàm tùy chỉnh ở đầu truy vấn, hoặc đặt con trỏ vào một phép chiếu (projection), ví dụ author->{name}, rồi nhấn nút trích xuất phía trên trình soạn thảo ({{shortcut}}).',
  /** Heading of the functions the query declares in the Functions panel */
  'vista.functions.query.title': 'Trong truy vấn này',
  /** Removes a function from the library */
  'vista.functions.remove': 'Xóa khỏi thư viện',
  /** Button of a library function the query declares differently, which puts the library's version in */
  'vista.functions.replace': 'Thay thế trong truy vấn',
  /** Accessible name of a declared function in the Functions panel, which selects it in the editor */
  'vista.functions.reveal': 'Hiển thị {{name}} trong trình soạn thảo',
  /** Button of a function the query declares that is not in the library yet */
  'vista.functions.save': 'Lưu vào thư viện',
  /** Shown on a function the query declares the way the library has it */
  'vista.functions.saved': 'Đã lưu',
  /** Button of a function the query declares differently from the library's version */
  'vista.functions.update': 'Cập nhật thư viện',
  /** Button over the query editor that opens the bar writing a query from a description */
  'vista.generate.button': 'Tạo truy vấn',
  /** Closes the generate query bar */
  'vista.generate.close': 'Đóng',
  /** Explanation under the generate query field */
  'vista.generate.description':
    'Sanity Agent Actions viết GROQ từ mô tả của bạn và các loại tài liệu, và Content Lake kiểm tra từng lần thử; mỗi lần thử sử dụng một credit AI. Nó thay thế truy vấn của tab này và chạy; hoàn tác trong trình soạn thảo sẽ đưa truy vấn trước đó trở lại.',
  /** Shown when no query could be generated, above the reason */
  'vista.generate.failed': 'Không thể tạo truy vấn',
  /** Accessible label of the description field in the generate query bar */
  'vista.generate.label': 'Truy vấn nên lấy dữ liệu gì?',
  /** Opens the last rejected attempt, without running it, to fix it by hand */
  'vista.generate.open-anyway': 'Mở lần thử cuối cùng',
  /** Placeholder of the description field in the generate query bar */
  'vista.generate.placeholder': '10 tác giả gần đây nhất, sắp xếp theo họ rồi đến tên',
  /** Shown while the first attempt at a query is written */
  'vista.generate.progress': 'Đang viết truy vấn…',
  /** Shown while a rejected attempt is retried */
  'vista.generate.progress-retry': 'Đang sửa truy vấn (lần thử {{attempt}} trong {{max}})…',
  /** Button generating the query */
  'vista.generate.submit': 'Tạo',
  /** Badge on a history entry the API CDN answered */
  'vista.history.cdn': 'API CDN',
  /** Badge on a history entry the API CDN answered from its cache */
  'vista.history.cdn-cache-hit': 'Trúng bộ nhớ đệm CDN',
  /** A history entry whose result differs from the previous result, which is no longer kept */
  'vista.history.changed': 'Đã thay đổi',
  /**
   * Toggle on a history entry that shows how its request and result differ from the previous
   * successful fetch
   */
  'vista.history.changes': 'Thay đổi',
  /** Shown instead of the changes when they could not be loaded or rendered */
  'vista.history.changes-failed': 'Không thể hiển thị các thay đổi.',
  /** Button retrying to show the changes of a history entry */
  'vista.history.changes-retry': 'Thử lại',
  /** Above the changes of a history entry: the fetch they are compared with */
  'vista.history.compared-with': 'So sánh với lần lấy dữ liệu lúc {{time}}',
  /** Label of the diff of the GROQ params in a history entry's changes */
  'vista.history.diff.params': 'Tham số',
  /** Label of the diff of the GROQ query in a history entry's changes */
  'vista.history.diff.query': 'Truy vấn',
  /** Instead of the query diff, when the two queries only differ in whitespace and line breaks */
  'vista.history.diff.query-formatting-only': 'Chỉ có định dạng thay đổi',
  /** Label of the diff of the query result in a history entry's changes */
  'vista.history.diff.result': 'Kết quả',
  /**
   * Label of the diff of the request URL in a history entry's changes: the API host, version and
   * dataset, and options such as the perspective
   */
  'vista.history.diff.url': 'URL yêu cầu',
  /** Empty state of the history panel */
  'vista.history.empty': 'Chưa có dữ liệu nào được lấy',
  /** Status label for a failed fetch in the history */
  'vista.history.failed': 'Thất bại',
  /** Button putting the hidden fields back into the diff out of a history entry's changes */
  'vista.history.hide-hidden': 'Ẩn chúng',
  /** Next to a history entry's changes: the fields the diff leaves out */
  'vista.history.hiding': 'Đang ẩn {{fields}}',
  /** A history entry whose result only differs from the previous one in hidden fields */
  'vista.history.only-hidden-changed': 'Chỉ các trường ẩn đã thay đổi',
  /** History reason: a tab opened with a generated query fetched it */
  'vista.history.reason.generated': 'Truy vấn được tạo tự động',
  /** History reason: a link to the tool named a query URL, which opened in a tab and ran */
  'vista.history.reason.link': 'Đã mở liên kết',
  /** History reason: a live event matched the query's sync tags */
  'vista.history.reason.live': 'Cập nhật trực tiếp',
  /** History reason: the live connection asked every client to refetch */
  'vista.history.reason.live-restart': 'Kết nối trực tiếp đã khởi động lại',
  /**
   * History reason: the Live fetch button was pressed, which fetches and then refetches
   * automatically
   */
  'vista.history.reason.live-start': 'Đã bắt đầu lấy dữ liệu trực tiếp',
  /** History reason: a saved query was loaded into a tab that refetches automatically */
  'vista.history.reason.load': 'Đã tải truy vấn',
  /** History reason: the fetch button was pressed */
  'vista.history.reason.manual': 'Nút lấy dữ liệu',
  /** History reason: mutations were applied from the Mutate panel */
  'vista.history.reason.mutation': 'Đã áp dụng các thay đổi (mutations)',
  /** History reason: dataset, API version or perspective changed while refetching automatically */
  'vista.history.reason.options': 'Tùy chọn đã thay đổi',
  /** History reason: a query URL was pasted into the tab, which runs it */
  'vista.history.reason.paste': 'URL đã dán',
  /** History reason: a tab that refetches automatically was opened again, or the studio reloaded */
  'vista.history.reason.resume': 'Đã tiếp tục tự động lấy lại dữ liệu',
  /** History reason: the keyboard shortcut was used */
  'vista.history.reason.shortcut': 'Phím tắt',
  /** A history entry whose result is the same as the previous result, for a changed request */
  'vista.history.same-result': 'Kết quả giống nhau',
  /** Button showing the hidden fields in a history entry's changes */
  'vista.history.show-hidden': 'Hiển thị chúng',
  /** Next to a history entry's changes while the hidden fields are shown */
  'vista.history.showing-hidden': 'Đang hiển thị {{fields}}, mặc định ẩn',
  /** A history entry whose result, or the previous one, is too large to compare */
  'vista.history.too-large': 'Quá lớn để so sánh',
  /** A history entry whose result is the same as the previous result */
  'vista.history.unchanged': 'Không có thay đổi',
  /** Shown in the Lint panel while the query has no lint findings */
  'vista.lint.empty':
    'Không có phát hiện lint nào. Các vấn đề mà trình lint GROQ phát hiện trong truy vấn sẽ được liệt kê ở đây khi bạn gõ; chọn một mục để chọn nó trong trình soạn thảo.',
  /** Where a lint finding sits in the query, shown under its message */
  'vista.lint.position': 'Dòng {{line}}, cột {{column}}',
  /** Severity badge of a lint finding */
  'vista.lint.severity.error': 'Lỗi',
  /** Severity badge of a lint finding */
  'vista.lint.severity.hint': 'Gợi ý',
  /** Severity badge of a lint finding */
  'vista.lint.severity.info': 'Thông tin',
  /** Severity badge of a lint finding */
  'vista.lint.severity.warning': 'Cảnh báo',
  /** Lint action writing the type, field or operator a schema finding suggests */
  'vista.lint.use-suggestion': 'Dùng {{suggestion}}',
  /** Badge shown while a tab refetches automatically */
  'vista.live.active': 'Trực tiếp',
  /** Button in the request column's action bar that fetches and then refetches automatically */
  'vista.live.button': 'Tải trực tiếp',
  /** Tooltip of the Live button while automatic refetching is off */
  'vista.live.button.start': 'Tải, sau đó tải lại mỗi khi tài liệu trong kết quả thay đổi',
  /** Tooltip of the Stop live button, while the tab refetches automatically */
  'vista.live.button.stop':
    'Ngừng tải khi tài liệu trong kết quả thay đổi. Tải vẫn hoạt động theo yêu cầu, đối với các kết quả không bị thay đổi tài liệu nào tác động, như now()',
  /** Error shown when the live connection breaks */
  'vista.live.error': 'Cập nhật trực tiếp đã bị ngắt kết nối: {{message}}',
  /** The Live fetch button while the tab refetches automatically, stopping it */
  'vista.live.stop': 'Dừng trực tiếp',
  /** Button in the Mutate panel adding a mutation to the list */
  'vista.mutate.add': 'Thêm thay đổi (mutation)',
  /** Adds a mutation creating a document, with the type of the result's first document */
  'vista.mutate.add.create': 'Tạo một tài liệu',
  /** Adds a mutation deleting a document, its ID to fill in */
  'vista.mutate.add.delete': 'Xóa một tài liệu',
  /** Adds a mutation deleting the documents of the shown result */
  'vista.mutate.add.delete-result': 'Xóa các tài liệu trong kết quả',
  /** Adds a mutation patching a document, its ID to fill in */
  'vista.mutate.add.patch': 'Vá (patch) một tài liệu',
  /** Adds a mutation patching the documents of the shown result */
  'vista.mutate.add.patch-result': 'Vá (patch) các tài liệu trong kết quả',
  /** Button applying the mutations a dry run showed */
  'vista.mutate.apply': 'Áp dụng cho {{dataset}}',
  /** Heading of the error shown when applying the mutations failed */
  'vista.mutate.apply-failed': 'Các mutation không được áp dụng',
  /** Next to Apply while the mutations as they are have had no dry run */
  'vista.mutate.apply-needs-preview':
    'Áp dụng sẽ gửi những gì một lần chạy thử đã hiển thị: hãy chạy thử trước.',
  /** Option giving array items without a _key one */
  'vista.mutate.auto-keys': 'Thêm _key vào các phần tử mảng chưa có',
  /** Under the option giving array items a _key */
  'vista.mutate.auto-keys.description':
    'Studio cần một _key trên mỗi phần tử mảng để chỉnh sửa nó.',
  /** Button showing a document's changes in the dry run */
  'vista.mutate.changes': 'Thay đổi',
  /** Shown instead of a document's changes when they could not be loaded or rendered */
  'vista.mutate.changes-failed': 'Không thể hiển thị các thay đổi.',
  /** Button retrying to show a document's changes */
  'vista.mutate.changes-retry': 'Thử lại',
  /** What the Mutate panel does */
  'vista.mutate.description':
    'Viết các mutation theo cách Mutations API nhận chúng, trong một danh sách: create, createOrReplace, createIfNotExists, delete và patch, theo ID hoặc theo truy vấn GROQ. Một lần chạy thử sẽ hiển thị những gì chúng sẽ làm với từng tài liệu mà không thay đổi gì cả; sau đó Áp dụng sẽ ghi chúng vào dataset trong một giao dịch, bằng tài khoản của bạn.',
  /** What the API says went wrong with one of the mutations */
  'vista.mutate.failure-item': 'Mutation {{index}}: {{message}}',
  /** Tooltip and accessible label of the button opening the generate mutations field */
  'vista.mutate.generate.button': 'Tạo mutation',
  /** Explanation under the generate mutations field */
  'vista.mutate.generate.description':
    'Sanity Agent Actions viết các mutation từ mô tả của bạn, các tài liệu trong kết quả và loại của chúng, và một lần chạy thử sẽ kiểm tra từng lần thử; mỗi lần thử sử dụng một tín dụng AI. Chúng sẽ thay thế các mutation ở đây, nơi hoàn tác sẽ đưa chúng trở lại; không có gì được ghi cho đến khi bạn áp dụng chúng.',
  /** Shown when no mutations could be generated, above the reason */
  'vista.mutate.generate.failed': 'Không thể tạo các mutation',
  /** Accessible label of the description field in the generate mutations bar */
  'vista.mutate.generate.label': 'Các mutation nên làm gì?',
  /** Placeholder of the description field in the generate mutations bar */
  'vista.mutate.generate.placeholder':
    'Thay đổi tiêu đề của các tài liệu trong kết quả thành foobar',
  /** Shown while the first attempt at the mutations is written */
  'vista.mutate.generate.progress': 'Đang viết các mutation…',
  /** Shown while an attempt the dry run turned down is retried */
  'vista.mutate.generate.progress-retry':
    'Đang sửa các mutation (lần thử {{attempt}} trên {{max}})…',
  /** Under the dry run: the fields the diffs leave out */
  'vista.mutate.hiding': 'Các thay đổi bỏ qua {{fields}}, giống như History.',
  /** Shown when the mutations are not valid JSON */
  'vista.mutate.invalid-json': 'Các mutation không phải là JSON hợp lệ: {{message}}',
  /** Shown when a mutation does not name exactly one thing to do */
  'vista.mutate.invalid-mutation':
    'Mutation {{index}} cần chính xác một trong các loại: create, createOrReplace, createIfNotExists, delete hoặc patch.',
  /** Label of the mutations editor */
  'vista.mutate.mutations': 'Mutation',
  /** The dry run touched no documents */
  'vista.mutate.no-documents': 'Các mutation không ảnh hưởng đến tài liệu nào.',
  /** Shown when the JSON is not a list of mutations */
  'vista.mutate.not-a-list':
    'Hãy viết một danh sách các mutation, một mutation đơn lẻ, hoặc một nội dung yêu cầu chứa danh sách các mutation.',
  /** A document the mutations create */
  'vista.mutate.operation.create': 'Tạo',
  /** A document the mutations delete */
  'vista.mutate.operation.delete': 'Xóa',
  /** A document the mutations touch without changing its content */
  'vista.mutate.operation.none': 'Không thay đổi',
  /** A document the mutations change */
  'vista.mutate.operation.update': 'Cập nhật',
  /** Button running the mutations as a dry run */
  'vista.mutate.preview': 'Chạy thử',
  /** Heading of the error shown when the dry run failed */
  'vista.mutate.preview-failed': 'Chạy thử thất bại',
  /** Heading of the dry run's outcome */
  'vista.mutate.preview-heading': 'Chạy thử',
  /** Shown over a dry run made for other mutations, another dataset or other options */
  'vista.mutate.stale':
    'Các mutation, dataset hoặc tùy chọn đã thay đổi sau lần chạy thử này. Hãy chạy lại để áp dụng chúng.',
  /** How many documents the dry run changes and leaves as they are */
  'vista.mutate.summary': 'Đã thay đổi: {{changed}} · Không thay đổi: {{unchanged}}',
  /** In the Network panel: whether a cache answered the query */
  'vista.network.cache': 'Bộ nhớ đệm',
  /** The API CDN answered from its cache */
  'vista.network.cache.hit': 'Trúng',
  /** Under the details of a CDN cache hit */
  'vista.network.cache.hit-explained':
    'CDN đã trả lời bằng một phản hồi đã được lưu trong bộ nhớ đệm, từ một vị trí gần bạn; truy vấn không đến được API.',
  /** The API CDN answered with a response this session had not seen */
  'vista.network.cache.miss': 'Trượt, theo như phiên này có thể biết',
  /** The API answered, which caches nothing */
  'vista.network.cache.none': 'Không có, API trả lời mọi yêu cầu với nội dung mới',
  /** Shown in the Network panel while there is no response */
  'vista.network.empty':
    'Tìm nạp truy vấn để xem điểm cuối nào đã trả lời nó, có từ bộ nhớ đệm hay không, và nó chạy ở đâu.',
  /** In the Network panel: the endpoint that answered */
  'vista.network.endpoint': 'Được trả lời bởi',
  /** The live API answered */
  'vista.network.endpoint.api': 'API',
  /** The API CDN answered */
  'vista.network.endpoint.cdn': 'API CDN',
  /** In the Network panel: the region the query ran in */
  'vista.network.region': 'Truy vấn chạy tại',
  /** The response did not say where the query ran */
  'vista.network.region.unknown': 'Không được báo cáo',
  /** In the Network panel: the round trip and the time on the server */
  'vista.network.timing': 'Thời gian',
  /** The round trip and the server's time for the query, in milliseconds */
  'vista.network.timing.value': '{{e2e}}ms vòng khứ hồi, {{server}}ms trên máy chủ',
  /** In the Network panel: the trace of the request, for Sanity support */
  'vista.network.trace': 'ID theo dõi',
  /** Hint in the Network panel while queries go to the API */
  'vista.network.use-cdn-hint': 'Bật Sử dụng API CDN trong Tùy chọn để gửi truy vấn qua CDN.',
  /** Label of the browser's marker on the Network panel's globe, placed from its time zone */
  'vista.network.you': 'Bạn',
  /** Hint under the dataset field while the tab follows the workspace's dataset */
  'vista.options.dataset.follows-workspace': 'Theo dataset của workspace',
  /** Button that pins the current dataset so the tab stops following the workspace */
  'vista.options.dataset.pin': 'Ghim một dataset',
  /** Hint under the dataset field while a dataset is pinned */
  'vista.options.dataset.pinned': 'Đã ghim; workspace có thể dùng dataset khác',
  /** Button that makes the tab follow the workspace's dataset again */
  'vista.options.dataset.use-workspace': 'Dùng dataset của workspace',
  /** Label for the "Include content source map" switch */
  'vista.options.include-source-map': 'Bao gồm content source map',
  /** Description for the "Include content source map" switch */
  'vista.options.include-source-map.description':
    'Thêm resultSourceMap vào phản hồi, hiển thị trong tab Content Source Map.',
  /** Perspective option following the studio navbar; the name is the release, published or drafts */
  'vista.options.perspective.global': 'Toàn cục ({{name}})',
  /** Label of the switch that sends queries to the API CDN */
  'vista.options.use-cdn': 'Sử dụng API CDN',
  /** Note under the API CDN switch while the studio signs in with a cookie */
  'vista.options.use-cdn.anonymous':
    'Studio này đăng nhập cho bạn bằng cookie, mà API CDN không bao giờ nhận được: nó phản hồi như đối với một khách truy cập ẩn danh, với những gì một dataset công khai hiển thị.',
  /**
   * Why the API CDN is asked for but not used: the perspective is the one the perspective
   * select shows, such as "Global (drafts)"
   */
  'vista.options.use-cdn.blocked':
    'API CDN không phục vụ drafts hoặc releases, do đó các truy vấn với perspective {{perspective}} sẽ đi đến API. Với published hoặc raw, chúng sẽ dùng CDN.',
  /** Heading of the notice shown while the perspective keeps queries off the API CDN */
  'vista.options.use-cdn.blocked.title': 'Truy vấn đi đến API, không phải CDN',
  /** Description of the API CDN switch */
  'vista.options.use-cdn.description':
    'Gửi truy vấn đến API CDN, giống như useCdn: true trong @sanity/client, với các perspective published và raw: drafts và releases luôn đi đến API. Phản hồi của nó được lưu đệm trong tối đa một phút; bảng Network hiển thị khi nào một phản hồi đến từ bộ đệm.',
  /** Button in the API CDN notice switching the tab to the published perspective */
  'vista.options.use-cdn.use-published': 'Dùng perspective published',
  /** Label of the variant field */
  'vista.options.variant-label': 'Biến thể',
  /** Variant option sending the navbar's variant, named */
  'vista.options.variant.global': 'Toàn cục ({{name}})',
  /** Variant option sending the navbar's variant while none is selected there */
  'vista.options.variant.global-none': 'Toàn cục (chưa chọn)',
  /** Variant option sending no variant */
  'vista.options.variant.none': 'Không có',
  /** Accessible label for collapsing a bottom panel */
  'vista.panel.collapse': 'Thu gọn panel',
  /** Label of the Delta tab in the response panel, which tests the query in delta mode */
  'vista.panel.delta': 'Delta',
  /** Accessible label for expanding a bottom panel */
  'vista.panel.expand': 'Mở rộng panel',
  /** Label of the "Explain" tab in the response panel: the query plan and an explanation */
  'vista.panel.explain': 'Giải thích',
  /** Label of the Functions tab in the response panel */
  'vista.panel.functions': 'Functions',
  /** Label of the "History" tab in the response panel */
  'vista.panel.history': 'Lịch sử',
  /** Label of the "Lint" tab in the response panel, listing the query's lint findings */
  'vista.panel.lint': 'Lint',
  /** Label of the Mutate tab in the response panel, which runs and applies mutations */
  'vista.panel.mutate': 'Mutate',
  /** Label of the Network tab in the response panel */
  'vista.panel.network': 'Network',
  /** Label of the "Options" panel in the request column */
  'vista.panel.options': 'Tùy chọn',
  /** Label of the "Response" tab in the response panel */
  'vista.panel.response': 'Phản hồi',
  /** Label of the "Content Source Map" tab in the response panel */
  'vista.panel.source-map': 'Sơ đồ nguồn nội dung',
  /** Button adding an item to a list param in the params form */
  'vista.params-form.add-item': 'Thêm mục',
  /** Placeholder of a params form field that takes any JSON value */
  'vista.params-form.any-placeholder':
    'Bất kỳ giá trị JSON nào; văn bản khác được gửi dưới dạng chuỗi',
  /** Shown in the params form when the query uses no params */
  'vista.params-form.empty':
    'Truy vấn không sử dụng tham số nào. Mỗi $name trong đó sẽ có một trường ở đây.',
  /** Shown in the params form while the params JSON cannot be parsed */
  'vista.params-form.invalid-json':
    'Các tham số không phải là JSON hợp lệ. Hãy sửa chúng trong chế độ xem JSON để chỉnh sửa tại đây.',
  /** A boolean param's value is not true or false; it is sent anyway */
  'vista.params-form.invalid.boolean': 'Không phải true hay false; được gửi dưới dạng {{value}}',
  /** A document type param's value is not a document type of the workspace; it is sent anyway */
  'vista.params-form.invalid.document-type':
    'Không phải là loại tài liệu trong workspace này; vẫn được gửi',
  /** A whole number param (a slice bound) holds a fraction */
  'vista.params-form.invalid.integer': 'Không phải là số nguyên, điều mà các lát cắt (slices) cần',
  /** A list param's value is not a list; it is sent anyway */
  'vista.params-form.invalid.list': 'Không phải là danh sách; được gửi dưới dạng {{value}}',
  /** A number param's value is not a number; it is sent anyway */
  'vista.params-form.invalid.number': 'Không phải là số; được gửi dưới dạng văn bản',
  /** A param's value is not one of the values the schema allows; it is sent anyway */
  'vista.params-form.invalid.option': 'Không phải là một trong các giá trị đã biết; vẫn được gửi',
  /** A text param's value is not text; it is sent anyway */
  'vista.params-form.invalid.string': 'Không phải là văn bản; được gửi dưới dạng {{value}}',
  /** Accessible label of an item input of a list param in the params form */
  'vista.params-form.item-label': '${{name}}, mục {{index}}',
  /** Placeholder of an item input of a list param in the params form */
  'vista.params-form.item-placeholder': 'Mục',
  /** Under a params form field whose param has no value */
  'vista.params-form.missing': 'Chưa thiết lập: truy vấn sẽ thất bại cho đến khi có giá trị',
  /** Shown in the params form when the workspace schema could not be read */
  'vista.params-form.no-schema':
    'Các kiểu dữ liệu chỉ được lấy từ truy vấn: không thể đọc được schema của workspace.',
  /** Placeholder of a params form field without a value, and the unset choice of a boolean */
  'vista.params-form.not-set': 'Chưa thiết lập',
  /** Button setting a date and time param to the current time */
  'vista.params-form.now': 'Bây giờ',
  /** Button removing a param the query does not use from the params */
  'vista.params-form.remove': 'Xóa',
  /** Accessible label of the button removing an item from a list param */
  'vista.params-form.remove-item': 'Xóa mục',
  /** Shown in the params form when the query does not parse */
  'vista.params-form.syntax-error':
    'Truy vấn không thể phân tích cú pháp, vì vậy các tham số của nó được liệt kê mà không có kiểu dữ liệu.',
  /** Type hint of a params form field: any JSON value */
  'vista.params-form.type.any': 'bất kỳ giá trị JSON nào',
  /** Type hint of a params form field: true or false */
  'vista.params-form.type.boolean': 'true hoặc false',
  /** Type hint of a params form field: an ISO 8601 date and time */
  'vista.params-form.type.datetime': 'ngày và giờ (ISO 8601)',
  /** Type hint of a params form field: a document ID */
  'vista.params-form.type.document-id': 'ID tài liệu',
  /** Type hint of a params form field: one of the workspace's document types */
  'vista.params-form.type.document-type': 'loại tài liệu',
  /** Type hint of a params form field: a whole number */
  'vista.params-form.type.integer': 'số nguyên',
  /** Type hint of a params form field: a list of values */
  'vista.params-form.type.list': 'danh sách, mỗi {{type}}',
  /** Type hint of a params form field: a number */
  'vista.params-form.type.number': 'số',
  /** Type hint of a params form field: text */
  'vista.params-form.type.string': 'văn bản',
  /** Heading of the params the query does not use, listed in the params form */
  'vista.params-form.unused': 'Không được truy vấn sử dụng',
  /** Before the expressions that use a param, in the params form */
  'vista.params-form.used-in': 'Được sử dụng trong',
  /** Value announced for the params resize handle while the panel sizes itself to its content */
  'vista.params.fit-height': 'Kích thước vừa với nội dung, {{height}} pixel',
  /** Accessible label and tooltip of the handle for resizing the params panel */
  'vista.params.resize':
    'Thay đổi kích thước params: kéo hoặc dùng các phím mũi tên; nhấp đúp hoặc nhấn Enter để vừa với nội dung lần nữa',
  /** Tab showing the params as a form inferred from the query */
  'vista.params.view.form': 'Biểu mẫu',
  /** Tab showing the params as JSON */
  'vista.params.view.json': 'JSON',
  /** Accessible label of the tabs switching how the params are edited */
  'vista.params.view.label': 'Chỉnh sửa params dưới dạng',
  /** Toast shown after a query URL was pasted and loaded into the tab */
  'vista.paste.parsed': 'Đã tải truy vấn từ URL đã dán',
  /** Toast shown when a pasted URL used a content variant the tab does not send */
  'vista.paste.unavailable-variant':
    'URL đã dán sử dụng biến thể "{{variant}}"; hãy chọn nó trong thanh điều hướng để chạy truy vấn với biến thể này.',
  /** Toast shown when the dataset of a pasted URL is not available here */
  'vista.paste.unknown-dataset':
    'Dataset "{{dataset}}" trong URL đã dán không khả dụng ở đây, giữ nguyên dataset hiện tại.',
  /** Toast shown when the perspective of a pasted URL cannot be used */
  'vista.paste.unsupported-perspective':
    'Perspective trong URL đã dán không được hỗ trợ ở đây, giữ nguyên perspective hiện tại.',
  /** Toast shown when a pasted URL used a content variant, but this workspace has variants switched off */
  'vista.paste.variants-disabled':
    'URL đã dán sử dụng biến thể "{{variant}}"; workspace này đã tắt các biến thể, vì vậy truy vấn sẽ chạy mà không có nó.',
  /** Accessible label for the query actions menu */
  'vista.query.actions': 'Hành động truy vấn',
  /** Tooltip when automatic refetching is not available for the API version */
  'vista.query.auto-refetch.unsupported': 'Tự động tải lại cần phiên bản API v2021-03-25 trở lên.',
  /** Toast shown after the query was copied */
  'vista.query.copied': 'Đã sao chép truy vấn vào clipboard',
  /** Menu item copying the query text */
  'vista.query.copy': 'Sao chép truy vấn',
  /** Menu item opening the export query dialog */
  'vista.query.export': 'Xuất truy vấn…',
  /** Menu item reformatting the query */
  'vista.query.prettify': 'Định dạng đẹp truy vấn',
  /** Toast shown when the query could not be reformatted */
  'vista.query.prettify.failed': 'Không thể định dạng đẹp truy vấn',
  /** Menu item saving the query to the personal saved queries */
  'vista.query.save': 'Lưu truy vấn',
  /** The Fetch button while a fetch is running, stopping it; paired with Stop live */
  'vista.query.stop': 'Dừng',
  /** Tooltip and accessible label of the Stop button, which stops the running fetch only */
  'vista.query.stop.description': 'Dừng tìm nạp',
  /** Explanation in the settings section about the redesigned experience */
  'vista.redesign.settings.description':
    'Bạn đang sử dụng công cụ Vision được thiết kế lại. Việc chuyển về sẽ giữ nguyên các tab và cài đặt của bạn trong trình duyệt này cho lần thử tiếp theo.',
  /** Title of the settings section about the redesigned experience */
  'vista.redesign.settings.title': 'Vision được thiết kế lại (beta)',
  /** Sidebar item and settings button that return to the classic Vision tool */
  'vista.redesign.switch-to-classic': 'Chuyển sang Vision cổ điển',
  /** Toast button that switches to the redesigned tool */
  'vista.redesign.toast.accept': 'Thử ngay',
  /** Body of the toast inviting users of the classic tool to try the redesign */
  'vista.redesign.toast.description':
    'Các tab truy vấn, tìm nạp lại trực tiếp, chi tiết phản hồi và xuất dữ liệu. Bạn có thể chuyển lại bất cứ lúc nào.',
  /** Toast button that hides the invitation */
  'vista.redesign.toast.dismiss': 'Để sau',
  /** Title of the toast inviting users of the classic tool to try the redesign */
  'vista.redesign.toast.title': 'Hãy thử Vision được thiết kế lại',
  /** Button next to Fetch in the classic tool that switches to the redesigned one */
  'vista.redesign.try': 'Thử bản thiết kế lại',
  /** Tooltip of the button next to Fetch in the classic tool that switches to the redesign */
  'vista.redesign.try.description':
    'Chuyển sang Vision được thiết kế lại, đang trong giai đoạn beta. Bạn có thể chuyển lại bất cứ lúc nào từ thanh bên của nó.',
  /** Empty state of the response panel before anything was fetched */
  'vista.response.empty': 'Chưa có dữ liệu nào được tìm nạp',
  /** Label for the payload size in the response tab */
  'vista.response.payload-size': 'Kích thước payload',
  /** Label for the sync tags in the response tab */
  'vista.response.sync-tags': 'Thẻ đồng bộ',
  /** Shown when the response carried no sync tags */
  'vista.response.sync-tags.none': 'Không có thẻ đồng bộ nào trong phản hồi',
  /** Accessible label for the result actions menu */
  'vista.result.actions': 'Hành động kết quả',
  /** Toast shown after the result was copied */
  'vista.result.copied': 'Đã sao chép kết quả vào khay nhớ tạm',
  /** Toast shown after a value in the result was copied, with its path such as [0].author.name */
  'vista.result.copied-value': 'Đã sao chép {{path}}',
  /** Menu item and button copying the result as JSON */
  'vista.result.copy': 'Sao chép kết quả',
  /** Button next to each property in the result tree, copying its value */
  'vista.result.copy-value': 'Sao chép giá trị',
  /** Empty state of the result view */
  'vista.result.empty': 'Chạy truy vấn để xem kết quả tại đây',
  /** Button exporting the result as CSV */
  'vista.result.export-csv': 'Xuất CSV',
  /** Button exporting the result as JSON */
  'vista.result.export-json': 'Xuất JSON',
  /** Menu item opening the TypeScript export dialog */
  'vista.result.export-typescript': 'Xuất TypeScript…',
  /** Menu item opening the Zod export dialog */
  'vista.result.export-zod': 'Xuất Zod…',
  /** Button on a graph node hiding the objects and arrays it holds */
  'vista.result.graph.collapse': 'Ẩn nội dung bên trong',
  /** Button fitting the whole graph in view */
  'vista.result.graph.fit': 'Vừa khung nhìn',
  /** Accessible label of the graph, saying how to move around in it */
  'vista.result.graph.label':
    'Đồ thị kết quả: kéo để di chuyển, cuộn để thu phóng; khi đang chọn, phím mũi tên để di chuyển, + và - để thu phóng, 0 để vừa khung',
  /** Ends the note on a graph that leaves part of this result out */
  'vista.result.graph.left-out-hint': 'Chế độ xem dạng cây và JSON hiển thị toàn bộ.',
  /** Note on a graph of a result with more objects and arrays than it draws */
  'vista.result.graph.node-limit': 'Chỉ {{nodes}} đối tượng và mảng đầu tiên được vẽ.',
  /**
   * Note on a graph whose objects or arrays have more entries than it lists; the nodes are the
   * ones in this result, each with its number of entries
   */
  'vista.result.graph.partial': 'Chỉ {{rows}} mục đầu tiên được liệt kê cho {{nodes}}.',
  /** An object or array in the note, with how many entries it has (always more than listed) */
  'vista.result.graph.partial.node': '{{name}} ({{entries}} mục)',
  /** Title of the graph node of the result itself */
  'vista.result.graph.root': 'kết quả',
  /** Button zooming into the graph */
  'vista.result.graph.zoom-in': 'Phóng to',
  /** Button zooming out of the graph */
  'vista.result.graph.zoom-out': 'Thu nhỏ',
  /** Tab showing the result as a graph of its objects and arrays */
  'vista.result.view.graph': 'Đồ thị',
  /** Tab showing the result as indented JSON text, to select and copy from */
  'vista.result.view.json': 'JSON',
  /** Accessible label of the tabs that switch how the result shows */
  'vista.result.view.label': 'Chế độ xem kết quả',
  /** Tab showing the result as a tree to browse */
  'vista.result.view.tree': 'Cây',
  /** Empty state of the saved queries panel */
  'vista.saved.empty': 'Chưa có truy vấn nào được lưu. Lưu truy vấn hiện tại bằng nút +.',
  /** Empty state of a query list when the search matches nothing */
  'vista.saved.empty-search': 'Không có truy vấn nào khớp với tìm kiếm của bạn',
  /** Menu item loading a saved query into the active tab */
  'vista.saved.load-in-current-tab': 'Tải vào tab hiện tại',
  /** Menu item opening a saved query in a new tab */
  'vista.saved.open-in-new-tab': 'Mở trong tab mới',
  /** Menu item renaming a saved query */
  'vista.saved.rename': 'Đổi tên',
  /** Accessible label for the button saving the current query */
  'vista.saved.save-current': 'Lưu truy vấn hiện tại',
  /** Toast shown when an opened saved query used a content variant the tab does not send */
  'vista.saved.unavailable-variant':
    'Truy vấn đã lưu này sử dụng biến thể "{{variant}}"; hãy chọn nó trên thanh điều hướng để chạy truy vấn với biến thể đó.',
  /** Toast shown when an opened saved query names a dataset that is not available here */
  'vista.saved.unknown-dataset':
    'Dataset "{{dataset}}" của truy vấn đã lưu này không khả dụng ở đây, giữ nguyên dataset hiện tại.',
  /** Toast shown when an opened saved query used a content variant, but this workspace has variants switched off */
  'vista.saved.variants-disabled':
    'Truy vấn đã lưu này sử dụng biến thể "{{variant}}"; không gian làm việc này đã tắt biến thể, vì vậy truy vấn chạy mà không có nó.',
  /** Button in the settings dialog that clears the stored state */
  'vista.settings.clear-storage': 'Xóa bộ nhớ lưu trữ',
  /** Confirmation button for clearing the storage */
  'vista.settings.clear-storage.confirm': 'Có, xóa bộ nhớ',
  /** Explanation of what clearing the storage does */
  'vista.settings.clear-storage.description':
    'Xóa các truy vấn đã lưu cá nhân của bạn và thư viện hàm, đặt lại các tab đang mở và các cài đặt mặc định này trong trình duyệt, và quay lại công cụ Vision cổ điển. Các truy vấn được chia sẻ sẽ được giữ lại.',
  /** Toast shown when the saved queries could not be cleared */
  'vista.settings.clear-storage.error': 'Không thể xóa các truy vấn đã lưu',
  /** Toast shown after the storage was cleared */
  'vista.settings.clear-storage.success': 'Đã xóa bộ nhớ',
  /** Explanation at the top of the settings dialog */
  'vista.settings.description':
    'Cài đặt mặc định cho các tab mới. Các tab đang mở sẽ giữ nguyên tùy chọn riêng của chúng.',
  /** Explains the setting listing the fields left out of History diffs */
  'vista.settings.history-diff.description':
    'Mỗi dòng một đường dẫn trường. Một đường dẫn sẽ khớp ở bất kỳ độ sâu nào của kết quả, vì vậy _rev sẽ ẩn phiên bản của mọi tài liệu trong đó. Mỗi bản so sánh vẫn có thể hiển thị chúng.',
  /** Button restoring the default fields left out of History diffs */
  'vista.settings.history-diff.reset': 'Đặt lại về mặc định',
  /** Label of the setting listing the fields left out of History diffs */
  'vista.settings.history-diff.title': 'Các trường bị ẩn khỏi bản so sánh Lịch sử',
  /** Title of the settings dialog */
  'vista.settings.title': 'Cài đặt',
  /** Empty state of the shared queries panel */
  'vista.shared.empty':
    'Chưa có truy vấn được chia sẻ nào. Chia sẻ một truy vấn đã lưu để mọi người sử dụng dataset này có thể dùng được.',
  /** Shortcut description: close dialogs and menus */
  'vista.shortcuts.close': 'Đóng hộp thoại và menu',
  /** Shortcut that lists the functions matching the name being typed in the query editor */
  'vista.shortcuts.complete': 'Hoàn thành tên hàm',
  /** Shortcut description: copy the query */
  'vista.shortcuts.copy-query': 'Sao chép truy vấn',
  /** Shortcut that turns the selected projection, or the one around the cursor, into a custom function */
  'vista.shortcuts.extract-function': 'Trích xuất phép chiếu tại con trỏ thành một hàm',
  /** Shortcut description: run the query */
  'vista.shortcuts.fetch': 'Lấy dữ liệu truy vấn',
  /** Shortcut description: move the cursor to the next lint finding in the query editor */
  'vista.shortcuts.next-finding': 'Nhảy đến phát hiện lint tiếp theo',
  /** Shortcut description: reformat the query */
  'vista.shortcuts.prettify': 'Định dạng đẹp truy vấn',
  /** Title of the keyboard shortcuts dialog */
  'vista.shortcuts.title': 'Phím tắt',
  /** Sidebar toggle: show icons only */
  'vista.sidebar.collapse': 'Thu gọn thanh bên',
  /** Sidebar toggle: show labels next to the icons */
  'vista.sidebar.expand': 'Mở rộng thanh bên',
  /** Accessible label for the sidebar navigation */
  'vista.sidebar.label': 'Thanh bên Vista',
  /** Sidebar item and drawer title for personal saved queries */
  'vista.sidebar.saved-queries': 'Truy vấn đã lưu',
  /** Sidebar item opening the settings dialog */
  'vista.sidebar.settings': 'Cài đặt',
  /** Sidebar item and drawer title for shared queries */
  'vista.sidebar.shared-queries': 'Truy vấn được chia sẻ',
  /** Sidebar item opening the keyboard shortcuts dialog */
  'vista.sidebar.shortcuts': 'Phím tắt',
  /** Empty state of the content source map panel */
  'vista.source-map.empty':
    'Không có sơ đồ nguồn nội dung trong phản hồi. Bật "Bao gồm sơ đồ nguồn nội dung" trong phần Tùy chọn và tải lại.',
  /** Accessible label of the divider between the result and the response details panel */
  'vista.split.bottom-panel':
    'Thay đổi kích thước bảng chi tiết phản hồi: kéo hoặc dùng phím mũi tên; Home và End để đến giới hạn, Enter để đặt lại',
  /** Accessible label of the divider between the request and response panes */
  'vista.split.request-response':
    'Thay đổi kích thước các khung yêu cầu và phản hồi: kéo hoặc dùng phím mũi tên; Home và End để đến giới hạn, Enter để đặt lại',
  /** Accessible label for the button closing a query tab */
  'vista.tabs.close-tab': 'Đóng tab',
  /** Accessible label for the list of query tabs */
  'vista.tabs.label': 'Các tab truy vấn',
  /** Accessible label for the button opening a new query tab */
  'vista.tabs.new-tab': 'Tab mới',
  /** Placeholder of the input renaming a tab */
  'vista.tabs.title-placeholder': 'Tiêu đề tab',
  /** Title of a tab whose query is still empty */
  'vista.tabs.untitled': 'Truy vấn chưa đặt tên',
  /** Title the browser shows for the WebMCP tool that lints a query */
  'vista.webmcp.check-query': 'Kiểm tra một truy vấn GROQ trong Vision',
  /** Title the browser shows for the WebMCP tool that describes the workspace schema */
  'vista.webmcp.describe-schema': 'Mô tả schema trong Vision',
  /** Title the browser shows for the WebMCP tool that returns a query plan */
  'vista.webmcp.explain-query': 'Giải thích một truy vấn GROQ trong Vision',
  /** Title the browser shows for the WebMCP tool that reads the active Vision tab */
  'vista.webmcp.get-state': 'Đọc tab Vision đang mở',
  /** Title the browser shows for the WebMCP tool that opens a query in a new tab */
  'vista.webmcp.open-query': 'Mở một truy vấn GROQ trong Vision',
  /** Title the browser shows for the WebMCP tool that runs mutations as a dry run */
  'vista.webmcp.preview-mutations': 'Xem trước các mutation trong Vision',
  /** Title the browser shows for the WebMCP tool that runs a query */
  'vista.webmcp.run-query': 'Chạy một truy vấn GROQ trong Vision',
})
