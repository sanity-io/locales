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
  /** Tooltip shown when the API version selector is locked because a variant is selected */
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
  'vision.agent-actions.credits': 'Sử dụng một tín dụng AI cho mỗi yêu cầu',
  /** Under an Agent Actions control: the organization's AI credits balance this month */
  'vision.ai-credits.balance':
    'Còn lại {{balance}} trong số {{quota}} tín dụng AI trong tháng này.',
  /** Under an Agent Actions control: the credits used beyond the plan's monthly quota */
  'vision.ai-credits.deficit':
    'Đã sử dụng {{used}} tín dụng AI trong tháng này, nhiều hơn {{deficit}} so với {{quota}} được bao gồm.',
  /** Body of the out-of-credits card, with the credits used and the plan's monthly quota */
  'vision.ai-credits.limit.description':
    'Tổ chức của bạn đã sử dụng {{used}} trong số {{quota}} tín dụng AI trong tháng này, vì vậy các Hành động Agent của Sanity sẽ tạm dừng cho đến tháng sau hoặc cho đến khi giới hạn chi tiêu được nâng lên.',
  /** Body of the out-of-credits card when the usage and the quota are unknown */
  'vision.ai-credits.limit.description-unknown':
    'Tổ chức của bạn đã đạt đến giới hạn chi tiêu tín dụng AI, vì vậy các Hành động Agent của Sanity sẽ tạm dừng cho đến tháng sau hoặc cho đến khi giới hạn được nâng lên.',
  /** Link in the out-of-credits card to the documentation of AI credits */
  'vision.ai-credits.limit.learn-more': 'Cách thức hoạt động của tín dụng AI',
  /** Button in the out-of-credits card leading to the organization's spending limits in Manage */
  'vision.ai-credits.limit.manage': 'Quản lý tín dụng AI',
  /** Title of the card shown where the organization is out of AI credits */
  'vision.ai-credits.limit.title': 'Hết tín dụng AI',
  /** Link after the AI credits note, to the organization's AI usage in Manage */
  'vision.ai-credits.usage': 'Mức sử dụng AI',
  /** Under an Agent Actions control: the credits used, on a plan without a quota */
  'vision.ai-credits.used': 'Đã sử dụng {{used}} tín dụng AI trong tháng này.',
  /** Button in the request column's action bar naming the API version requests go out with */
  'vision.api-version.button': 'API {{version}}',
  /** The API version button while queries go through the API CDN */
  'vision.api-version.button-cdn': 'API CDN {{version}}',
  /** The API version button while the "Other" API version input holds an unfinished version */
  'vision.api-version.button-invalid': 'Phiên bản API chưa hoàn tất',
  /** Tooltip of the API version button */
  'vision.api-version.tooltip':
    'Các truy vấn chạy trên phiên bản API {{version}}. Chọn để thay đổi trong Tùy chọn.',
  /** Tooltip of the API version button while queries go through the API CDN */
  'vision.api-version.tooltip-cdn':
    'Các truy vấn chạy trên API CDN với phiên bản API {{version}}. Chọn để thay đổi trong Tùy chọn.',
  /**
   * Tooltip of the API version button while the API CDN is asked for but the perspective, as the
   * perspective select names it, keeps queries on the API
   */
  'vision.api-version.tooltip-cdn-blocked':
    'Các truy vấn chạy trên API với phiên bản API {{version}}, không phải API CDN: API CDN không phục vụ phối cảnh {{perspective}}. Chọn để thay đổi trong Tùy chọn.',
  /** Tooltip of the API version button while the "Other" input holds an unfinished version */
  'vision.api-version.tooltip-invalid':
    'Phiên bản API trong Tùy chọn chưa hoàn tất, vì vậy không thể tải dữ liệu cho đến khi hoàn tất.',
  /** Tooltip of the API version button while a selected variant forces the variants API version */
  'vision.api-version.tooltip-locked':
    'Các truy vấn chạy trên phiên bản API {{version}}, mà biến thể đã chọn yêu cầu.',
  /** Label of the document after the change in the Delta panel */
  'vision.delta.after': 'Sau',
  /** Label of the document before the change in the Delta panel */
  'vision.delta.before': 'Trước',
  /** What the Delta panel does */
  'vision.delta.description':
    'Chạy truy vấn ở chế độ delta, giống như cách các webhook, listener và Sanity Functions dựa trên GROQ thực hiện: before() và after() là tài liệu trước và sau khi thay đổi, @ là tài liệu sau khi thay đổi, và delta::changedAny() so sánh chúng. Nó chạy trong trình duyệt bằng groq-js. Một bên trống có nghĩa là không có tài liệu: thay đổi đã tạo hoặc xóa nó.',
  /** Label of the document ID field in the Delta panel */
  'vision.delta.document-id': 'ID tài liệu',
  /** Shown when there is a query but no documents to compare */
  'vision.delta.empty': 'Tải lịch sử của một tài liệu, hoặc viết các tài liệu vào Trước và Sau.',
  /** Shown when the query fails in delta mode */
  'vision.delta.failed': 'Không thể chạy truy vấn ở chế độ delta: {{message}}',
  /** Shown when the After document is not valid JSON */
  'vision.delta.invalid-after': 'Sau không phải là JSON hợp lệ: {{message}}',
  /** Shown when the Before document is not valid JSON */
  'vision.delta.invalid-before': 'Before không phải là JSON hợp lệ: {{message}}',
  /** Button loading the document's revisions from the History API */
  'vision.delta.load': 'Tải lịch sử',
  /** Shown when the history could not be loaded */
  'vision.delta.load-failed': 'Không thể tải lịch sử: {{message}}',
  /** A delta filter that is true for the change */
  'vision.delta.matches': 'Khớp: webhook hoặc function có bộ lọc này sẽ chạy cho thay đổi này.',
  /** A delta filter that is false for the change */
  'vision.delta.no-match':
    'Không khớp: webhook hoặc function có bộ lọc này sẽ không chạy cho thay đổi này.',
  /** Shown while the query or its params cannot be sent */
  'vision.delta.no-request': 'Hãy sửa truy vấn và các tham số của nó để chạy ở chế độ delta.',
  /** Heading of the delta result */
  'vision.delta.result': 'Kết quả',
  /** The After choice for a change that deletes the document */
  'vision.delta.revision.none-after': 'Không có gì: thay đổi này xóa tài liệu',
  /** The Before choice for a change that creates the document */
  'vision.delta.revision.none-before': 'Không có gì: thay đổi này tạo tài liệu',
  /** A revision in the Before and After lists */
  'vision.delta.revision.option': '{{time}} · {{revision}}',
  /** Accessible label for the button that closes the sidebar drawer */
  'vision.drawer.close': 'Đóng bảng điều khiển',
  /** Explanation at the top of the Explain panel */
  'vision.explain.description':
    'Kế hoạch truy vấn là cách Content Lake thực thi truy vấn: những gì nó đọc, lọc và sắp xếp trong khi đọc, và những gì được để lại cho các bước sau. Tính năng Explain this to me sử dụng Sanity Agent Actions để mô tả truy vấn và kế hoạch của nó bằng ngôn ngữ đơn giản, và sẽ sử dụng một AI credit.',
  /** Shown in the Explain panel while there is no valid query to explain */
  'vision.explain.empty': 'Hãy viết một truy vấn để giải thích nó.',
  /** Button in the Explain panel asking Agent Actions to explain the query and its plan */
  'vision.explain.explain': 'Giải thích điều này cho tôi',
  /** Shown when the explanation could not be written */
  'vision.explain.failed': 'Không thể giải thích truy vấn: {{message}}',
  /** A count the index computes without reading the documents */
  'vision.explain.insight.aggregate': 'Được đếm trong chỉ mục, mà không cần đọc các tài liệu.',
  /** A subquery the plan runs once for all documents */
  'vision.explain.insight.batched-subquery':
    'Truy vấn con chạy một lần cho tất cả các tài liệu, trong một lần lấy dữ liệu theo lô, không phải một lần cho mỗi tài liệu.',
  /** Part of the filter runs in memory; the expression follows */
  'vision.explain.insight.filter-in-memory':
    'Một phần của bộ lọc chạy trong bộ nhớ, sau khi đọc: mọi tài liệu mà chỉ mục cho phép đi qua sẽ được đọc trước, điều này làm chậm quá trình trên các tập dữ liệu lớn. Các join (->) và các function trong bộ lọc không thể sử dụng chỉ mục.',
  /** The index sorts and limits while reading */
  'vision.explain.insight.index-sort-limit':
    'Chỉ mục sắp xếp và giới hạn các tài liệu trong khi đọc chúng.',
  /** The plan slices in memory */
  'vision.explain.insight.slice-in-memory':
    'Phần cắt được lấy trong bộ nhớ sau khi đọc, không phải như một giới hạn trong khi đọc.',
  /** The plan sorts in memory */
  'vision.explain.insight.sort-in-memory':
    'Việc sắp xếp diễn ra trong bộ nhớ, sau khi đọc mọi kết quả khớp. Hãy sắp xếp theo các thuộc tính mà chỉ mục có thể sắp xếp.',
  /** Link under the plan insights to the guide on fast queries */
  'vision.explain.insights.guide': 'GROQ hiệu suất cao',
  /** Heading of the plan insights in the Explain panel */
  'vision.explain.insights.title': 'Những điểm đáng chú ý',
  /** Button in the Explain panel fetching the query plan */
  'vision.explain.plan': 'Hiển thị kế hoạch truy vấn',
  /** Shown when the query plan could not be fetched */
  'vision.explain.plan-failed': 'Không thể lấy kế hoạch truy vấn: {{message}}',
  /** Heading of the query plan in the Explain panel */
  'vision.explain.plan-title': 'Kế hoạch truy vấn',
  /** Toast shown after a code snippet was copied */
  'vision.export-query.copied': 'Đã sao chép đoạn mã vào bộ nhớ tạm',
  /** Label for the button that copies a code snippet */
  'vision.export-query.copy': 'Sao chép đoạn mã',
  /** Explanation at the top of the export query dialog */
  'vision.export-query.description':
    'Chạy truy vấn này bên ngoài studio bằng một trong các đoạn mã sau.',
  /** Note under the curl snippet when the query is sent as a request body rather than in the URL */
  'vision.export-query.post-body-note':
    'Truy vấn và các tham số có tổng cộng {{size}} ký tự dưới dạng tham số tìm kiếm; từ {{limit}} ký tự trở lên, @sanity/client sẽ gửi chúng dưới dạng JSON body thay vì trong URL, vì vậy đoạn mã này cũng làm như vậy.',
  /** Title of the dialog that exports the query as code snippets */
  'vision.export-query.title': 'Xuất truy vấn',
  /** Note about authentication in the export query dialog */
  'vision.export-query.token-note':
    'Các dataset riêng tư cần có API token. Các dataset công khai có thể bỏ qua header Authorization.',
  /** Toast shown after the generated code was copied */
  'vision.export-types.copied': 'Đã sao chép mã vào bộ nhớ tạm',
  /** Label for the button that copies the generated code */
  'vision.export-types.copy': 'Sao chép mã',
  /** Shown in the types dialog when there is neither a schema evaluation nor a result */
  'vision.export-types.empty':
    'Hãy fetch truy vấn trước để có kết quả làm cơ sở suy ra kiểu dữ liệu.',
  /** Why the workspace schema could not be used for the types; shown with the result fallback */
  'vision.export-types.schema-error': 'Đánh giá schema thất bại: {{message}}',
  /** Note shown when the types were derived from the fetched result instead of the schema */
  'vision.export-types.source.result':
    'Được suy ra từ kết quả đã fetch, vì truy vấn không thể được đánh giá dựa trên schema của workspace.',
  /** Note shown when the types were derived from the workspace schema */
  'vision.export-types.source.schema':
    'Được suy ra từ schema của workspace, theo cách mà sanity typegen thực hiện.',
  /** Shown when the schema cannot be evaluated and the shown result belongs to an older query */
  'vision.export-types.stale-result':
    'Kết quả hiển thị được fetch cho một truy vấn hoặc tham số khác. Hãy fetch truy vấn hiện tại trước để có kết quả làm cơ sở suy ra kiểu dữ liệu.',
  /** Title of the dialog exporting TypeScript types for the result */
  'vision.export-types.title-typescript': 'Xuất TypeScript',
  /** Title of the dialog exporting a Zod schema for the result */
  'vision.export-types.title-zod': 'Xuất Zod',
  /** Button of a library function the query does not declare, which declares it at the top */
  'vision.functions.add': 'Thêm vào truy vấn',
  /** Shown on a library function the query declares the same way */
  'vision.functions.declared': 'Trong truy vấn này',
  /** Lint action on a call of a library function the query does not declare */
  'vision.functions.editor.add-from-library': 'Khai báo nó',
  /** Note in a function's hover documentation: the API version it needs */
  'vision.functions.editor.api-version': 'Cần phiên bản API {{version}} trở lên',
  /** Detail of a completion for a custom function the query declares */
  'vision.functions.editor.completion-declared': 'trong truy vấn này',
  /** Detail of a completion for a library function, which declares it too */
  'vision.functions.editor.completion-library': 'từ thư viện của bạn',
  /** Note in the hover documentation of a custom function the query declares */
  'vision.functions.editor.declared-on': 'Hàm tùy chỉnh, được khai báo ở dòng {{line}}',
  /** Note in the hover documentation of the functions that only work in delta mode */
  'vision.functions.editor.delta-only':
    'Chỉ hoạt động ở chế độ delta, nơi webhook và Sanity Functions chạy các bộ lọc của chúng',
  /** Button over a selected projection in the query editor, turning it into a custom function */
  'vision.functions.editor.extract': 'Trích xuất thành hàm',
  /** Note in the hover documentation of a library function the query does not declare */
  'vision.functions.editor.in-library':
    'Trong thư viện hàm của bạn, không được khai báo trong truy vấn này',
  /** Link at the end of a built-in function's hover documentation */
  'vision.functions.editor.reference': 'Tài liệu tham khảo hàm GROQ',
  /** Explanation under the library heading in the Functions panel */
  'vision.functions.library.description':
    'Được lưu giữ trong trình duyệt này cho mọi dataset của dự án. Tính năng tự động hoàn thành cung cấp các hàm này, và lint đề xuất khai báo hàm mà truy vấn gọi tới.',
  /** Shown in the Functions panel while the library is empty */
  'vision.functions.library.empty':
    'Lưu một hàm mà truy vấn khai báo để sử dụng trong các truy vấn khác.',
  /** Heading of the functions library in the Functions panel */
  'vision.functions.library.title': 'Thư viện',
  /** Shown in the Functions panel while the query declares no custom functions */
  'vision.functions.query.empty':
    'Khai báo các hàm tùy chỉnh ở đầu truy vấn, hoặc đặt con trỏ trong một phép chiếu (projection), như author->{name}, và nhấn nút trích xuất phía trên trình soạn thảo ({{shortcut}}).',
  /** Heading of the functions the query declares in the Functions panel */
  'vision.functions.query.title': 'Trong truy vấn này',
  /** Removes a function from the library */
  'vision.functions.remove': 'Xóa khỏi thư viện',
  /** Button of a library function the query declares differently, which puts the library's version in */
  'vision.functions.replace': 'Thay thế trong truy vấn',
  /** Accessible name of a declared function in the Functions panel, which selects it in the editor */
  'vision.functions.reveal': 'Hiển thị {{name}} trong trình soạn thảo',
  /** Button of a function the query declares that is not in the library yet */
  'vision.functions.save': 'Lưu vào thư viện',
  /** Shown on a function the query declares the way the library has it */
  'vision.functions.saved': 'Đã lưu',
  /** Button of a function the query declares differently from the library's version */
  'vision.functions.update': 'Cập nhật thư viện',
  /** Button over the query editor that opens the bar writing a query from a description */
  'vision.generate.button': 'Tạo truy vấn',
  /** Closes the generate query bar */
  'vision.generate.close': 'Đóng',
  /** Explanation under the generate query field */
  'vision.generate.description':
    'Sanity Agent Actions viết GROQ dựa trên mô tả của bạn và các loại tài liệu, và Content Lake kiểm tra từng lần thử; mỗi lần thử sử dụng một tín dụng AI. Nó thay thế truy vấn của tab này và chạy; hoàn tác trong trình soạn thảo sẽ khôi phục lại truy vấn trước đó.',
  /** Shown when no query could be generated, above the reason */
  'vision.generate.failed': 'Không thể tạo truy vấn',
  /** Accessible label of the description field in the generate query bar */
  'vision.generate.label': 'Truy vấn nên lấy dữ liệu gì?',
  /** Opens the last rejected attempt, without running it, to fix it by hand */
  'vision.generate.open-anyway': 'Mở lần thử cuối cùng',
  /** Placeholder of the description field in the generate query bar */
  'vision.generate.placeholder': '10 tác giả gần đây nhất, sắp xếp theo họ rồi đến tên',
  /** Shown while the first attempt at a query is written */
  'vision.generate.progress': 'Đang viết truy vấn…',
  /** Shown while a rejected attempt is retried */
  'vision.generate.progress-retry': 'Đang sửa truy vấn (lần thử {{attempt}} trên {{max}})…',
  /** Button generating the query */
  'vision.generate.submit': 'Tạo',
  /** Badge on a history entry the API CDN answered */
  'vision.history.cdn': 'API CDN',
  /** Badge on a history entry the API CDN answered from its cache */
  'vision.history.cdn-cache-hit': 'Truy cập bộ nhớ đệm CDN thành công',
  /** A history entry whose result differs from the previous result, which is no longer kept */
  'vision.history.changed': 'Đã thay đổi',
  /**
   * Toggle on a history entry that shows how its request and result differ from the previous
   * successful fetch
   */
  'vision.history.changes': 'Thay đổi',
  /** Shown instead of the changes when they could not be loaded or rendered */
  'vision.history.changes-failed': 'Không thể hiển thị các thay đổi.',
  /** Button retrying to show the changes of a history entry */
  'vision.history.changes-retry': 'Thử lại',
  /** Above the changes of a history entry: the fetch they are compared with */
  'vision.history.compared-with': 'So sánh với lần lấy dữ liệu lúc {{time}}',
  /** Label of the diff of the GROQ params in a history entry's changes */
  'vision.history.diff.params': 'Tham số',
  /** Label of the diff of the GROQ query in a history entry's changes */
  'vision.history.diff.query': 'Truy vấn',
  /** Instead of the query diff, when the two queries only differ in whitespace and line breaks */
  'vision.history.diff.query-formatting-only': 'Chỉ có định dạng thay đổi',
  /** Label of the diff of the query result in a history entry's changes */
  'vision.history.diff.result': 'Kết quả',
  /**
   * Label of the diff of the request URL in a history entry's changes: the API host, version and
   * dataset, and options such as the perspective
   */
  'vision.history.diff.url': 'URL yêu cầu',
  /** Empty state of the history panel */
  'vision.history.empty': 'Chưa lấy dữ liệu nào',
  /** Status label for a failed fetch in the history */
  'vision.history.failed': 'Thất bại',
  /** Button putting the hidden fields back into the diff out of a history entry's changes */
  'vision.history.hide-hidden': 'Ẩn chúng',
  /** Next to a history entry's changes: the fields the diff leaves out */
  'vision.history.hiding': 'Đang ẩn {{fields}}',
  /** A history entry whose result only differs from the previous one in hidden fields */
  'vision.history.only-hidden-changed': 'Chỉ các trường ẩn đã thay đổi',
  /** History reason: a tab opened with a generated query fetched it */
  'vision.history.reason.generated': 'Truy vấn được tạo tự động',
  /** History reason: a link to the tool named a query URL, which opened in a tab and ran */
  'vision.history.reason.link': 'Đã mở liên kết',
  /** History reason: a live event matched the query's sync tags */
  'vision.history.reason.live': 'Cập nhật trực tiếp',
  /** History reason: the live connection asked every client to refetch */
  'vision.history.reason.live-restart': 'Kết nối trực tiếp đã khởi động lại',
  /**
   * History reason: the Live fetch button was pressed, which fetches and then refetches
   * automatically
   */
  'vision.history.reason.live-start': 'Đã bắt đầu lấy dữ liệu trực tiếp',
  /** History reason: a saved query was loaded into a tab that refetches automatically */
  'vision.history.reason.load': 'Đã tải truy vấn',
  /** History reason: the fetch button was pressed */
  'vision.history.reason.manual': 'Nút Lấy dữ liệu',
  /** History reason: mutations were applied from the Mutate panel */
  'vision.history.reason.mutation': 'Đã áp dụng các thay đổi (mutations)',
  /** History reason: dataset, API version or perspective changed while refetching automatically */
  'vision.history.reason.options': 'Tùy chọn đã thay đổi',
  /** History reason: a query URL was pasted into the tab, which runs it */
  'vision.history.reason.paste': 'Đã dán URL',
  /** History reason: a tab that refetches automatically was opened again, or the studio reloaded */
  'vision.history.reason.resume': 'Tự động tải lại đã tiếp tục',
  /** History reason: the keyboard shortcut was used */
  'vision.history.reason.shortcut': 'Phím tắt',
  /** A history entry whose result is the same as the previous result, for a changed request */
  'vision.history.same-result': 'Kết quả giống nhau',
  /** Button showing the hidden fields in a history entry's changes */
  'vision.history.show-hidden': 'Hiển thị chúng',
  /** Next to a history entry's changes while the hidden fields are shown */
  'vision.history.showing-hidden': 'Đang hiển thị {{fields}}, mặc định bị ẩn',
  /** A history entry whose result, or the previous one, is too large to compare */
  'vision.history.too-large': 'Quá lớn để so sánh',
  /** A history entry whose result is the same as the previous result */
  'vision.history.unchanged': 'Không có thay đổi',
  /** Shown in the Lint panel while the query has no lint findings */
  'vision.lint.empty':
    'Không có phát hiện lint nào. Các vấn đề mà trình kiểm tra GROQ phát hiện trong truy vấn sẽ được liệt kê ở đây khi bạn gõ; chọn một mục để chọn nó trong trình soạn thảo.',
  /** Where a lint finding sits in the query, shown under its message */
  'vision.lint.position': 'Dòng {{line}}, cột {{column}}',
  /** Severity badge of a lint finding */
  'vision.lint.severity.error': 'Lỗi',
  /** Severity badge of a lint finding */
  'vision.lint.severity.hint': 'Gợi ý',
  /** Severity badge of a lint finding */
  'vision.lint.severity.info': 'Thông tin',
  /** Severity badge of a lint finding */
  'vision.lint.severity.warning': 'Cảnh báo',
  /** Lint action writing the type, field or operator a schema finding suggests */
  'vision.lint.use-suggestion': 'Sử dụng {{suggestion}}',
  /** Badge shown while a tab refetches automatically */
  'vision.live.active': 'Trực tiếp',
  /** Button in the request column's action bar that fetches and then refetches automatically */
  'vision.live.button': 'Tải trực tiếp',
  /** Tooltip of the Live button while automatic refetching is off */
  'vision.live.button.start': 'Tải, sau đó tải lại mỗi khi các tài liệu trong kết quả thay đổi',
  /** Tooltip of the Stop live button, while the tab refetches automatically */
  'vision.live.button.stop':
    'Dừng tải lại khi các tài liệu trong kết quả thay đổi. Tải vẫn hoạt động theo yêu cầu, đối với các kết quả không bị ảnh hưởng bởi thay đổi tài liệu, như now()',
  /** Error shown when the live connection breaks */
  'vision.live.error': 'Cập nhật trực tiếp đã ngắt kết nối: {{message}}',
  /** The Live fetch button while the tab refetches automatically, stopping it */
  'vision.live.stop': 'Dừng trực tiếp',
  /** Button in the Mutate panel adding a mutation to the list */
  'vision.mutate.add': 'Thêm mutation',
  /** Adds a mutation creating a document, with the type of the result's first document */
  'vision.mutate.add.create': 'Tạo một tài liệu',
  /** Adds a mutation deleting a document, its ID to fill in */
  'vision.mutate.add.delete': 'Xóa một tài liệu',
  /** Adds a mutation deleting the documents of the shown result */
  'vision.mutate.add.delete-result': 'Xóa các tài liệu trong kết quả',
  /** Adds a mutation patching a document, its ID to fill in */
  'vision.mutate.add.patch': 'Vá (patch) một tài liệu',
  /** Adds a mutation patching the documents of the shown result */
  'vision.mutate.add.patch-result': 'Vá (patch) các tài liệu trong kết quả',
  /** Button applying the mutations a dry run showed */
  'vision.mutate.apply': 'Áp dụng cho {{dataset}}',
  /** Heading of the error shown when applying the mutations failed */
  'vision.mutate.apply-failed': 'Các mutation đã không được áp dụng',
  /** Next to Apply while the mutations as they are have had no dry run */
  'vision.mutate.apply-needs-preview':
    'Áp dụng sẽ gửi những gì một lần chạy thử (dry run) đã hiển thị: hãy chạy thử trước.',
  /** Option giving array items without a _key one */
  'vision.mutate.auto-keys': 'Thêm _key cho các phần tử mảng chưa có',
  /** Under the option giving array items a _key */
  'vision.mutate.auto-keys.description':
    'Studio cần một _key trên mỗi phần tử mảng để có thể chỉnh sửa nó.',
  /** Button showing a document's changes in the dry run */
  'vision.mutate.changes': 'Thay đổi',
  /** Shown instead of a document's changes when they could not be loaded or rendered */
  'vision.mutate.changes-failed': 'Không thể hiển thị các thay đổi.',
  /** Button retrying to show a document's changes */
  'vision.mutate.changes-retry': 'Thử lại',
  /** What the Mutate panel does */
  'vision.mutate.description':
    'Viết các mutation theo định dạng mà Mutations API nhận, dưới dạng một danh sách: create, createOrReplace, createIfNotExists, delete và patch, theo ID hoặc theo truy vấn GROQ. Một lần chạy thử (dry run) sẽ cho thấy chúng sẽ tác động gì đến từng tài liệu mà không thay đổi gì cả; sau đó Áp dụng sẽ ghi chúng vào dataset trong một giao dịch, bằng tài khoản của bạn.',
  /** What the API says went wrong with one of the mutations */
  'vision.mutate.failure-item': 'Mutation {{index}}: {{message}}',
  /** Tooltip and accessible label of the button opening the generate mutations field */
  'vision.mutate.generate.button': 'Tạo các mutation',
  /** Explanation under the generate mutations field */
  'vision.mutate.generate.description':
    'Sanity Agent Actions viết các mutation dựa trên mô tả của bạn, các tài liệu trong kết quả và kiểu của chúng, và một lần chạy thử sẽ kiểm tra mỗi lần thử; mỗi lần thử sử dụng một tín dụng AI. Chúng sẽ thay thế các mutation ở đây, nơi mà thao tác hoàn tác (undo) sẽ đưa chúng trở lại; không có gì được ghi lại cho đến khi bạn áp dụng chúng.',
  /** Shown when no mutations could be generated, above the reason */
  'vision.mutate.generate.failed': 'Không thể tạo các mutation',
  /** Accessible label of the description field in the generate mutations bar */
  'vision.mutate.generate.label': 'Các mutation nên làm gì?',
  /** Placeholder of the description field in the generate mutations bar */
  'vision.mutate.generate.placeholder': 'Đổi tiêu đề của các tài liệu trong kết quả thành foobar',
  /** Shown while the first attempt at the mutations is written */
  'vision.mutate.generate.progress': 'Đang viết các mutation…',
  /** Shown while an attempt the dry run turned down is retried */
  'vision.mutate.generate.progress-retry':
    'Đang sửa các mutation (lần thử {{attempt}} trên {{max}})…',
  /** Under the dry run: the fields the diffs leave out */
  'vision.mutate.hiding': 'Các thay đổi bỏ qua {{fields}}, giống như trong History.',
  /** Shown when the mutations are not valid JSON */
  'vision.mutate.invalid-json': 'Các mutation không phải là JSON hợp lệ: {{message}}',
  /** Shown when a mutation does not name exactly one thing to do */
  'vision.mutate.invalid-mutation':
    'Mutation {{index}} cần chính xác một trong các loại: create, createOrReplace, createIfNotExists, delete hoặc patch.',
  /** Label of the mutations editor */
  'vision.mutate.mutations': 'Mutations',
  /** The dry run touched no documents */
  'vision.mutate.no-documents': 'Các mutation không tác động đến tài liệu nào.',
  /** Shown when the JSON is not a list of mutations */
  'vision.mutate.not-a-list':
    'Hãy viết một danh sách các mutation, một mutation đơn lẻ, hoặc một request body chứa danh sách các mutation.',
  /** A document the mutations create */
  'vision.mutate.operation.create': 'Tạo',
  /** A document the mutations delete */
  'vision.mutate.operation.delete': 'Xóa',
  /** A document the mutations touch without changing its content */
  'vision.mutate.operation.none': 'Không thay đổi',
  /** A document the mutations change */
  'vision.mutate.operation.update': 'Cập nhật',
  /** Button running the mutations as a dry run */
  'vision.mutate.preview': 'Chạy thử',
  /** Heading of the error shown when the dry run failed */
  'vision.mutate.preview-failed': 'Chạy thử thất bại',
  /** Heading of the dry run's outcome */
  'vision.mutate.preview-heading': 'Chạy thử',
  /** Shown over a dry run made for other mutations, another dataset or other options */
  'vision.mutate.stale':
    'Các thay đổi, dataset hoặc tùy chọn đã thay đổi sau lần chạy thử này. Hãy chạy lại để áp dụng chúng.',
  /** How many documents the dry run changes and leaves as they are */
  'vision.mutate.summary': 'Đã thay đổi: {{changed}} · Không thay đổi: {{unchanged}}',
  /** In the Network panel: whether a cache answered the query */
  'vision.network.cache': 'Bộ nhớ đệm',
  /** The API CDN answered from its cache */
  'vision.network.cache.hit': 'Trúng',
  /** Under the details of a CDN cache hit */
  'vision.network.cache.hit-explained':
    'CDN đã trả lời bằng một phản hồi đã được lưu trong bộ nhớ đệm, từ một vị trí gần bạn; truy vấn không đến được API.',
  /** The API CDN answered with a response this session had not seen */
  'vision.network.cache.miss': 'Trượt, theo như phiên này có thể biết',
  /** The API answered, which caches nothing */
  'vision.network.cache.none': 'Không có, API trả lời mọi yêu cầu bằng nội dung mới',
  /** Shown in the Network panel while there is no response */
  'vision.network.empty':
    'Tìm nạp truy vấn để xem điểm cuối nào đã trả lời, có phải từ bộ nhớ đệm hay không, và nó chạy ở đâu.',
  /** In the Network panel: the endpoint that answered */
  'vision.network.endpoint': 'Trả lời bởi',
  /** The live API answered */
  'vision.network.endpoint.api': 'API',
  /** The API CDN answered */
  'vision.network.endpoint.cdn': 'API CDN',
  /** In the Network panel: the HTTP method the query was sent with */
  'vision.network.method': 'Phương thức',
  /** The query and its params went in the URL */
  'vision.network.method.get': 'GET, với truy vấn và các tham số trong URL',
  /** The query and its params went in the request body */
  'vision.network.method.post': 'POST, với truy vấn và các tham số dưới dạng JSON body',
  /** Under the method of a POST request: why the query was not sent in the URL */
  'vision.network.method.post-explained':
    'Truy vấn và các tham số có độ dài {{size}} ký tự dưới dạng tham số tìm kiếm; từ {{limit}} trở lên, @sanity/client sẽ gửi chúng dưới dạng JSON body, vì API giới hạn độ dài của URL. Các tùy chọn vẫn nằm trong URL.',
  /** In the Network panel: the region the query ran in */
  'vision.network.region': 'Truy vấn chạy tại',
  /** The response did not say where the query ran */
  'vision.network.region.unknown': 'Không được báo cáo',
  /** In the Network panel: the round trip and the time on the server */
  'vision.network.timing': 'Thời gian',
  /** The round trip and the server's time for the query, in milliseconds */
  'vision.network.timing.value': '{{e2e}}ms thời gian khứ hồi, {{server}}ms trên máy chủ',
  /** In the Network panel: the trace of the request, for Sanity support */
  'vision.network.trace': 'ID theo dõi',
  /** Hint in the Network panel while queries go to the API */
  'vision.network.use-cdn-hint': 'Bật Sử dụng API CDN trong Tùy chọn để gửi truy vấn qua CDN.',
  /** Label of the browser's marker on the Network panel's globe, placed from its time zone */
  'vision.network.you': 'Bạn',
  /** Hint under the dataset field while the tab follows the workspace's dataset */
  'vision.options.dataset.follows-workspace': 'Theo không gian làm việc',
  /** Button that pins the current dataset so the tab stops following the workspace */
  'vision.options.dataset.pin': 'Ghim một tập dữ liệu',
  /** Hint under the dataset field while a dataset is pinned */
  'vision.options.dataset.pinned': 'Đã ghim; không gian làm việc có thể dùng tập dữ liệu khác',
  /** Button that makes the tab follow the workspace's dataset again */
  'vision.options.dataset.use-workspace': 'Dùng tập dữ liệu của không gian làm việc',
  /** Label for the "Include content source map" switch */
  'vision.options.include-source-map': 'Bao gồm bản đồ nguồn nội dung',
  /** Description for the "Include content source map" switch */
  'vision.options.include-source-map.description':
    'Thêm resultSourceMap vào phản hồi, hiển thị trong tab Bản đồ nguồn nội dung.',
  /** Perspective option following the studio navbar; the name is the release, published or drafts */
  'vision.options.perspective.global': 'Toàn cục ({{name}})',
  /** Label of the switch that sends queries to the API CDN */
  'vision.options.use-cdn': 'Sử dụng API CDN',
  /** Note under the API CDN switch while the studio signs in with a cookie */
  'vision.options.use-cdn.anonymous':
    'Studio này đăng nhập cho bạn bằng cookie, mà API CDN không bao giờ nhận được: nó trả lời như đối với khách truy cập ẩn danh, với những gì một tập dữ liệu công khai hiển thị.',
  /**
   * Why the API CDN is asked for but not used: the perspective is the one the perspective
   * select shows, such as "Global (drafts)"
   */
  'vision.options.use-cdn.blocked':
    'API CDN không phục vụ bản nháp hoặc phiên bản phát hành, vì vậy các truy vấn với phối cảnh {{perspective}} sẽ đi đến API. Với phối cảnh đã xuất bản hoặc thô, chúng sử dụng CDN.',
  /** Heading of the notice shown while the perspective keeps queries off the API CDN */
  'vision.options.use-cdn.blocked.title': 'Các truy vấn đi đến API, không phải CDN',
  /** Description of the API CDN switch */
  'vision.options.use-cdn.description':
    'Gửi truy vấn đến API CDN, giống như useCdn: true trong @sanity/client, với các phối cảnh đã xuất bản và thô: bản nháp và phiên bản phát hành luôn đi đến API. Các phản hồi được lưu đệm tối đa một phút; bảng Mạng hiển thị khi nào một phản hồi đến từ bộ đệm.',
  /** Button in the API CDN notice switching the tab to the published perspective */
  'vision.options.use-cdn.use-published': 'Sử dụng phối cảnh đã xuất bản',
  /** Label of the variant field */
  'vision.options.variant-label': 'Biến thể',
  /** Variant option sending the navbar's variant, named */
  'vision.options.variant.global': 'Toàn cục ({{name}})',
  /** Variant option sending the navbar's variant while none is selected there */
  'vision.options.variant.global-none': 'Toàn cục (chưa chọn)',
  /** Variant option sending no variant */
  'vision.options.variant.none': 'Không có',
  /** Accessible label for collapsing a bottom panel */
  'vision.panel.collapse': 'Thu gọn bảng',
  /** Label of the Delta tab in the response panel, which tests the query in delta mode */
  'vision.panel.delta': 'Delta',
  /** Accessible label for expanding a bottom panel */
  'vision.panel.expand': 'Mở rộng bảng',
  /** Label of the "Explain" tab in the response panel: the query plan and an explanation */
  'vision.panel.explain': 'Giải thích',
  /** Label of the Functions tab in the response panel */
  'vision.panel.functions': 'Hàm',
  /** Label of the "History" tab in the response panel */
  'vision.panel.history': 'Lịch sử',
  /** Label of the "Lint" tab in the response panel, listing the query's lint findings */
  'vision.panel.lint': 'Lint',
  /** Label of the Mutate tab in the response panel, which runs and applies mutations */
  'vision.panel.mutate': 'Thay đổi',
  /** Label of the Network tab in the response panel */
  'vision.panel.network': 'Mạng',
  /** Label of the "Options" panel in the request column */
  'vision.panel.options': 'Tùy chọn',
  /** Label of the "Response" tab in the response panel */
  'vision.panel.response': 'Phản hồi',
  /** Label of the "Content Source Map" tab in the response panel */
  'vision.panel.source-map': 'Content Source Map',
  /** Button adding an item to a list param in the params form */
  'vision.params-form.add-item': 'Thêm mục',
  /** Placeholder of a params form field that takes any JSON value */
  'vision.params-form.any-placeholder':
    'Bất kỳ giá trị JSON nào; văn bản khác sẽ được gửi dưới dạng chuỗi',
  /** Shown in the params form when the query uses no params */
  'vision.params-form.empty':
    'Truy vấn không sử dụng tham số nào. Mỗi $name trong đó sẽ có một trường ở đây.',
  /** Shown in the params form while the params JSON cannot be parsed */
  'vision.params-form.invalid-json':
    'Các tham số không phải là JSON hợp lệ. Hãy sửa chúng trong chế độ xem JSON để chỉnh sửa tại đây.',
  /** A boolean param's value is not true or false; it is sent anyway */
  'vision.params-form.invalid.boolean': 'Không phải true hay false; được gửi dưới dạng {{value}}',
  /** A document type param's value is not a document type of the workspace; it is sent anyway */
  'vision.params-form.invalid.document-type':
    'Không phải là loại tài liệu trong không gian làm việc này; vẫn được gửi',
  /** A whole number param (a slice bound) holds a fraction */
  'vision.params-form.invalid.integer':
    'Không phải là số nguyên, điều mà các lát cắt (slice) yêu cầu',
  /** A list param's value is not a list; it is sent anyway */
  'vision.params-form.invalid.list': 'Không phải là danh sách; được gửi dưới dạng {{value}}',
  /** A number param's value is not a number; it is sent anyway */
  'vision.params-form.invalid.number': 'Không phải là số; được gửi dưới dạng văn bản',
  /** A param's value is not one of the values the schema allows; it is sent anyway */
  'vision.params-form.invalid.option': 'Không phải là một trong các giá trị đã biết; vẫn được gửi',
  /** A text param's value is not text; it is sent anyway */
  'vision.params-form.invalid.string': 'Không phải là văn bản; được gửi dưới dạng {{value}}',
  /** Accessible label of an item input of a list param in the params form */
  'vision.params-form.item-label': '${{name}}, mục {{index}}',
  /** Placeholder of an item input of a list param in the params form */
  'vision.params-form.item-placeholder': 'Mục',
  /** Under a params form field whose param has no value */
  'vision.params-form.missing': 'Chưa được đặt: truy vấn sẽ thất bại cho đến khi nó có giá trị',
  /** Shown in the params form when the workspace schema could not be read */
  'vision.params-form.no-schema':
    'Các loại chỉ được lấy từ truy vấn: không thể đọc được schema của không gian làm việc.',
  /** Placeholder of a params form field without a value, and the unset choice of a boolean */
  'vision.params-form.not-set': 'Chưa đặt',
  /** Button setting a date and time param to the current time */
  'vision.params-form.now': 'Bây giờ',
  /** Button removing a param the query does not use from the params */
  'vision.params-form.remove': 'Xóa',
  /** Accessible label of the button removing an item from a list param */
  'vision.params-form.remove-item': 'Xóa mục',
  /** Shown in the params form when the query does not parse */
  'vision.params-form.syntax-error':
    'Truy vấn không thể phân tích cú pháp, vì vậy các tham số của nó được liệt kê mà không có kiểu dữ liệu.',
  /** Type hint of a params form field: any JSON value */
  'vision.params-form.type.any': 'bất kỳ giá trị JSON nào',
  /** Type hint of a params form field: true or false */
  'vision.params-form.type.boolean': 'true hoặc false',
  /** Type hint of a params form field: an ISO 8601 date and time */
  'vision.params-form.type.datetime': 'ngày và giờ (ISO 8601)',
  /** Type hint of a params form field: a document ID */
  'vision.params-form.type.document-id': 'ID tài liệu',
  /** Type hint of a params form field: one of the workspace's document types */
  'vision.params-form.type.document-type': 'loại tài liệu',
  /** Type hint of a params form field: a whole number */
  'vision.params-form.type.integer': 'số nguyên',
  /** Type hint of a params form field: a list of values */
  'vision.params-form.type.list': 'danh sách, mỗi {{type}}',
  /** Type hint of a params form field: a number */
  'vision.params-form.type.number': 'số',
  /** Type hint of a params form field: text */
  'vision.params-form.type.string': 'văn bản',
  /** Heading of the params the query does not use, listed in the params form */
  'vision.params-form.unused': 'Không được truy vấn sử dụng',
  /** Before the expressions that use a param, in the params form */
  'vision.params-form.used-in': 'Được dùng trong',
  /** Value announced for the params resize handle while the panel sizes itself to its content */
  'vision.params.fit-height': 'Kích thước vừa với nội dung, {{height}} pixel',
  /** Accessible label and tooltip of the handle for resizing the params panel */
  'vision.params.resize':
    'Thay đổi kích thước tham số: kéo hoặc dùng các phím mũi tên; nhấp đúp hoặc nhấn Enter để vừa với nội dung lần nữa',
  /** Tab showing the params as a form inferred from the query */
  'vision.params.view.form': 'Biểu mẫu',
  /** Tab showing the params as JSON */
  'vision.params.view.json': 'JSON',
  /** Accessible label of the tabs switching how the params are edited */
  'vision.params.view.label': 'Chỉnh sửa tham số dưới dạng',
  /** Toast shown after a query URL was pasted and loaded into the tab */
  'vision.paste.parsed': 'Đã tải truy vấn từ URL đã dán',
  /** Toast shown after a curl command for a query was pasted and loaded into the tab */
  'vision.paste.parsed-curl': 'Đã tải truy vấn từ lệnh cURL đã dán',
  /** Toast shown when a pasted URL used a content variant the tab does not send */
  'vision.paste.unavailable-variant':
    'URL đã dán sử dụng biến thể "{{variant}}"; hãy chọn biến thể đó trên thanh điều hướng để chạy truy vấn với nó.',
  /** Toast shown when the dataset of a pasted URL is not available here */
  'vision.paste.unknown-dataset':
    'Dataset "{{dataset}}" trong URL đã dán không khả dụng ở đây, giữ nguyên dataset hiện tại.',
  /** Toast shown when the perspective of a pasted URL cannot be used */
  'vision.paste.unsupported-perspective':
    'Perspective trong URL đã dán không được hỗ trợ ở đây, giữ nguyên perspective hiện tại.',
  /** Toast shown when a pasted URL used a content variant, but this workspace has variants switched off */
  'vision.paste.variants-disabled':
    'URL đã dán sử dụng biến thể "{{variant}}"; workspace này đã tắt tính năng biến thể, vì vậy truy vấn sẽ chạy mà không có nó.',
  /** Accessible label for the query actions menu */
  'vision.query.actions': 'Hành động truy vấn',
  /** Tooltip when automatic refetching is not available for the API version */
  'vision.query.auto-refetch.unsupported':
    'Tự động tải lại yêu cầu phiên bản API v2021-03-25 trở lên.',
  /** Toast shown after the query was copied */
  'vision.query.copied': 'Đã sao chép truy vấn vào bộ nhớ tạm',
  /** Menu item copying the query text */
  'vision.query.copy': 'Sao chép truy vấn',
  /** Menu item opening the export query dialog */
  'vision.query.export': 'Xuất truy vấn…',
  /** Menu item reformatting the query */
  'vision.query.prettify': 'Định dạng truy vấn',
  /** Toast shown when the query could not be reformatted */
  'vision.query.prettify.failed': 'Không thể định dạng truy vấn',
  /** Menu item saving the query to the personal saved queries */
  'vision.query.save': 'Lưu truy vấn',
  /** The Fetch button while a fetch is running, stopping it; paired with Stop live */
  'vision.query.stop': 'Dừng',
  /** Tooltip and accessible label of the Stop button, which stops the running fetch only */
  'vision.query.stop.description': 'Dừng tải dữ liệu',
  /** Explanation in the settings section about the redesigned experience */
  'vision.redesign.settings.description':
    'Bạn đang sử dụng công cụ Vision được thiết kế lại. Việc chuyển về sẽ giữ lại các tab và cài đặt của bạn trên trình duyệt này cho lần thử tiếp theo.',
  /** Title of the settings section about the redesigned experience */
  'vision.redesign.settings.title': 'Vision thiết kế lại (beta)',
  /** Sidebar item and settings button that return to the classic Vision tool */
  'vision.redesign.switch-to-classic': 'Chuyển sang Vision cổ điển',
  /** Toast button that switches to the redesigned tool */
  'vision.redesign.toast.accept': 'Thử ngay',
  /** Body of the toast inviting users of the classic tool to try the redesign */
  'vision.redesign.toast.description':
    'Các tab truy vấn, tải lại trực tiếp, chi tiết phản hồi và xuất dữ liệu. Bạn có thể chuyển về bất cứ lúc nào.',
  /** Toast button that hides the invitation */
  'vision.redesign.toast.dismiss': 'Để sau',
  /** Title of the toast inviting users of the classic tool to try the redesign */
  'vision.redesign.toast.title': 'Thử Vision được thiết kế lại',
  /** Button next to Fetch in the classic tool that switches to the redesigned one */
  'vision.redesign.try': 'Thử bản thiết kế lại',
  /** Tooltip of the button next to Fetch in the classic tool that switches to the redesign */
  'vision.redesign.try.description':
    'Chuyển sang Vision được thiết kế lại, đang trong giai đoạn beta. Bạn có thể chuyển về bất cứ lúc nào từ thanh bên của nó.',
  /** Empty state of the response panel before anything was fetched */
  'vision.response.empty': 'Chưa tải dữ liệu nào',
  /** Label for the payload size in the response tab */
  'vision.response.payload-size': 'Kích thước dữ liệu',
  /** Label for the sync tags in the response tab */
  'vision.response.sync-tags': 'Thẻ đồng bộ',
  /** Shown when the response carried no sync tags */
  'vision.response.sync-tags.none': 'Không có thẻ đồng bộ nào trong phản hồi',
  /** Under the query URL when the request went out as a POST body rather than that URL */
  'vision.response.url.sent-as-post':
    'Được gửi dưới dạng nội dung POST: truy vấn và tham số quá dài cho một URL, nên @sanity/client đã gửi chúng dưới dạng JSON. Dán URL này vào Vision vẫn sẽ tải truy vấn.',
  /** Accessible label for the result actions menu */
  'vision.result.actions': 'Thao tác với kết quả',
  /** Toast shown after the result was copied */
  'vision.result.copied': 'Đã sao chép kết quả vào bộ nhớ tạm',
  /** Toast shown after a value in the result was copied, with its path such as [0].author.name */
  'vision.result.copied-value': 'Đã sao chép {{path}}',
  /** Menu item and button copying the result as JSON */
  'vision.result.copy': 'Sao chép kết quả',
  /** Button next to each property in the result tree, copying its value */
  'vision.result.copy-value': 'Sao chép giá trị',
  /** Empty state of the result view */
  'vision.result.empty': 'Chạy truy vấn để xem kết quả tại đây',
  /** Button exporting the result as CSV */
  'vision.result.export-csv': 'Xuất CSV',
  /** Button exporting the result as JSON */
  'vision.result.export-json': 'Xuất JSON',
  /** Menu item opening the TypeScript export dialog */
  'vision.result.export-typescript': 'Xuất TypeScript…',
  /** Menu item opening the Zod export dialog */
  'vision.result.export-zod': 'Xuất Zod…',
  /** Button on a graph node hiding the objects and arrays it holds */
  'vision.result.graph.collapse': 'Ẩn nội dung bên trong',
  /** Button fitting the whole graph in view */
  'vision.result.graph.fit': 'Vừa khung nhìn',
  /** Accessible label of the graph, saying how to move around in it */
  'vision.result.graph.label':
    'Biểu đồ kết quả: kéo để di chuyển, cuộn để thu phóng; khi được chọn, dùng phím mũi tên để di chuyển, + và - để thu phóng, 0 để vừa khung',
  /** Ends the note on a graph that leaves part of this result out */
  'vision.result.graph.left-out-hint': 'Chế độ xem dạng cây và JSON hiển thị đầy đủ.',
  /** Note on a graph of a result with more objects and arrays than it draws */
  'vision.result.graph.node-limit': 'Chỉ {{nodes}} đối tượng và mảng đầu tiên được vẽ.',
  /**
   * Note on a graph whose objects or arrays have more entries than it lists; the nodes are the
   * ones in this result, each with its number of entries
   */
  'vision.result.graph.partial': 'Chỉ {{rows}} mục đầu tiên được liệt kê cho {{nodes}}.',
  /** An object or array in the note, with how many entries it has (always more than listed) */
  'vision.result.graph.partial.node': '{{name}} ({{entries}} mục)',
  /** Title of the graph node of the result itself */
  'vision.result.graph.root': 'kết quả',
  /** Button zooming into the graph */
  'vision.result.graph.zoom-in': 'Phóng to',
  /** Button zooming out of the graph */
  'vision.result.graph.zoom-out': 'Thu nhỏ',
  /** Tab showing the result as a graph of its objects and arrays */
  'vision.result.view.graph': 'Biểu đồ',
  /** Tab showing the result as indented JSON text, to select and copy from */
  'vision.result.view.json': 'JSON',
  /** Accessible label of the tabs that switch how the result shows */
  'vision.result.view.label': 'Chế độ xem kết quả',
  /** Tab showing the result as a tree to browse */
  'vision.result.view.tree': 'Cây',
  /** Empty state of the saved queries panel */
  'vision.saved.empty': 'Chưa có truy vấn nào được lưu. Lưu truy vấn hiện tại bằng nút +.',
  /** Empty state of a query list when the search matches nothing */
  'vision.saved.empty-search': 'Không có truy vấn nào khớp với tìm kiếm của bạn',
  /** Menu item loading a saved query into the active tab */
  'vision.saved.load-in-current-tab': 'Tải vào tab hiện tại',
  /** Menu item opening a saved query in a new tab */
  'vision.saved.open-in-new-tab': 'Mở trong tab mới',
  /** Menu item renaming a saved query */
  'vision.saved.rename': 'Đổi tên',
  /** Accessible label for the button saving the current query */
  'vision.saved.save-current': 'Lưu truy vấn hiện tại',
  /** Toast shown when an opened saved query used a content variant the tab does not send */
  'vision.saved.unavailable-variant':
    'Truy vấn đã lưu này sử dụng biến thể "{{variant}}"; hãy chọn biến thể đó trên thanh điều hướng để chạy truy vấn với nó.',
  /** Toast shown when an opened saved query names a dataset that is not available here */
  'vision.saved.unknown-dataset':
    'Dataset "{{dataset}}" của truy vấn đã lưu này không khả dụng ở đây, giữ nguyên dataset hiện tại.',
  /** Toast shown when an opened saved query used a content variant, but this workspace has variants switched off */
  'vision.saved.variants-disabled':
    'Truy vấn đã lưu này sử dụng biến thể "{{variant}}"; không gian làm việc này đã tắt các biến thể, vì vậy truy vấn chạy mà không có nó.',
  /** Button in the settings dialog that clears the stored state */
  'vision.settings.clear-storage': 'Xóa bộ nhớ lưu trữ',
  /** Confirmation button for clearing the storage */
  'vision.settings.clear-storage.confirm': 'Có, xóa bộ nhớ lưu trữ',
  /** Explanation of what clearing the storage does */
  'vision.settings.clear-storage.description':
    'Xóa các truy vấn đã lưu cá nhân của bạn và thư viện hàm, đặt lại các tab đang mở và các giá trị mặc định này trong trình duyệt này, và quay lại công cụ Vision cổ điển. Các truy vấn được chia sẻ vẫn được giữ lại.',
  /** Toast shown when the saved queries could not be cleared */
  'vision.settings.clear-storage.error': 'Không thể xóa các truy vấn đã lưu',
  /** Toast shown after the storage was cleared */
  'vision.settings.clear-storage.success': 'Đã xóa bộ nhớ lưu trữ',
  /** Explanation at the top of the settings dialog */
  'vision.settings.description':
    'Giá trị mặc định cho các tab mới. Các tab đang mở vẫn giữ các tùy chọn riêng của chúng.',
  /** Explains the setting listing the fields left out of History diffs */
  'vision.settings.history-diff.description':
    'Mỗi dòng một đường dẫn trường. Một đường dẫn khớp ở bất kỳ độ sâu nào của kết quả, vì vậy _rev sẽ ẩn phiên bản của mọi tài liệu trong đó. Mỗi diff vẫn có thể hiển thị chúng.',
  /** Button restoring the default fields left out of History diffs */
  'vision.settings.history-diff.reset': 'Đặt lại về mặc định',
  /** Label of the setting listing the fields left out of History diffs */
  'vision.settings.history-diff.title': 'Các trường bị ẩn khỏi diff Lịch sử',
  /** Title of the settings dialog */
  'vision.settings.title': 'Cài đặt',
  /** Empty state of the shared queries panel */
  'vision.shared.empty':
    'Chưa có truy vấn được chia sẻ nào. Chia sẻ một truy vấn đã lưu để mọi người sử dụng dataset này đều có thể truy cập.',
  /** Shortcut description: close dialogs and menus */
  'vision.shortcuts.close': 'Đóng hộp thoại và menu',
  /** Shortcut that lists the functions matching the name being typed in the query editor */
  'vision.shortcuts.complete': 'Hoàn thành tên hàm',
  /** Shortcut description: copy the query */
  'vision.shortcuts.copy-query': 'Sao chép truy vấn',
  /** Shortcut that turns the selected projection, or the one around the cursor, into a custom function */
  'vision.shortcuts.extract-function': 'Trích xuất phép chiếu tại con trỏ thành một hàm',
  /** Shortcut description: run the query */
  'vision.shortcuts.fetch': 'Lấy dữ liệu truy vấn',
  /** Shortcut description: move the cursor to the next lint finding in the query editor */
  'vision.shortcuts.next-finding': 'Chuyển đến phát hiện lint tiếp theo',
  /** Shortcut description: reformat the query */
  'vision.shortcuts.prettify': 'Định dạng đẹp truy vấn',
  /** Title of the keyboard shortcuts dialog */
  'vision.shortcuts.title': 'Phím tắt',
  /** Sidebar toggle: show icons only */
  'vision.sidebar.collapse': 'Thu gọn thanh bên',
  /** Sidebar toggle: show labels next to the icons */
  'vision.sidebar.expand': 'Mở rộng thanh bên',
  /** Accessible label for the sidebar navigation */
  'vision.sidebar.label': 'Thanh bên Vision',
  /** Sidebar item and drawer title for personal saved queries */
  'vision.sidebar.saved-queries': 'Truy vấn đã lưu',
  /** Sidebar item opening the settings dialog */
  'vision.sidebar.settings': 'Cài đặt',
  /** Sidebar item and drawer title for shared queries */
  'vision.sidebar.shared-queries': 'Truy vấn được chia sẻ',
  /** Sidebar item opening the keyboard shortcuts dialog */
  'vision.sidebar.shortcuts': 'Phím tắt',
  /** Empty state of the content source map panel */
  'vision.source-map.empty':
    'Không có bản đồ nguồn nội dung trong phản hồi. Bật "Bao gồm bản đồ nguồn nội dung" trong Tùy chọn và lấy lại.',
  /** Accessible label of the divider between the result and the response details panel */
  'vision.split.bottom-panel':
    'Thay đổi kích thước bảng chi tiết phản hồi: kéo hoặc dùng phím mũi tên; Home và End đến giới hạn, Enter đặt lại',
  /** Accessible label of the divider between the request and response panes */
  'vision.split.request-response':
    'Thay đổi kích thước khung yêu cầu và phản hồi: kéo hoặc dùng phím mũi tên; Home và End đến giới hạn, Enter đặt lại',
  /** Accessible label for the button closing a query tab */
  'vision.tabs.close-tab': 'Đóng tab',
  /** Accessible label for the list of query tabs */
  'vision.tabs.label': 'Các tab truy vấn',
  /** Accessible label for the button opening a new query tab */
  'vision.tabs.new-tab': 'Tab mới',
  /** Placeholder of the input renaming a tab */
  'vision.tabs.title-placeholder': 'Tiêu đề tab',
  /** Title of a tab whose query is still empty */
  'vision.tabs.untitled': 'Truy vấn chưa đặt tên',
  /** Title the browser shows for the WebMCP tool that lints a query */
  'vision.webmcp.check-query': 'Kiểm tra truy vấn GROQ trong Vision',
  /** Title the browser shows for the WebMCP tool that describes the workspace schema */
  'vision.webmcp.describe-schema': 'Mô tả schema trong Vision',
  /** Title the browser shows for the WebMCP tool that returns a query plan */
  'vision.webmcp.explain-query': 'Giải thích truy vấn GROQ trong Vision',
  /** Title the browser shows for the WebMCP tool that reads the active Vision tab */
  'vision.webmcp.get-state': 'Đọc tab Vision đang mở',
  /** Title the browser shows for the WebMCP tool that opens a query in a new tab */
  'vision.webmcp.open-query': 'Mở truy vấn GROQ trong Vision',
  /** Title the browser shows for the WebMCP tool that runs mutations as a dry run */
  'vision.webmcp.preview-mutations': 'Xem trước các thay đổi (mutations) trong Vision',
  /** Title the browser shows for the WebMCP tool that runs a query */
  'vision.webmcp.run-query': 'Chạy truy vấn GROQ trong Vision',
})
