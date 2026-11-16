import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Label for action "Copy to clipboard", tied to the "Query URL" field. Also used for accessibility purposes on button */
  'action.copy-url-to-clipboard': '複製到剪貼簿',
  /** Label for deleting a query */
  'action.delete': '刪除',
  /** Label for editing a query's title */
  'action.edit-title': '編輯標題',
  /** Label for stopping an ongoing listen operation */
  'action.listen-cancel': '停止',
  /** Label for setting up a listener */
  'action.listen-execute': '監聽',
  /** Label for query loading table */
  'action.load-queries': '加載查詢',
  /** Label for loading a query */
  'action.load-query': '加載查詢',
  /** Label for cancelling an ongoing query */
  'action.query-cancel': '取消',
  /** Label for executing the query, eg doing a fetch */
  'action.query-execute': '提取',
  /** Label for saving a query */
  'action.save-personal-copy': '儲存個人副本',
  /** Label for saving a personal query */
  'action.save-personal-query': '另存為個人',
  /** Label for saving a query */
  'action.save-query': '保存查詢',
  /** Label for saving a shared query */
  'action.save-shared-query': '另存為共用',
  /** Label for unsharing a query */
  'action.unshare': '取消共用',
  /** Label for updating a query */
  'action.update': '更新',

  /** Label for actions user can take */
  'label.actions': '操作',
  /** Label for all saved queries */
  'label.all': '全部',
  /** Label for saved queries that have been edited */
  'label.edited': '已編輯',
  /**
   * Some features has a "New" label indicating that the feature was recently introduced.
   * This defines what the text of that label is. Keep it short and sweet.
   */
  'label.new': '新登場',
  /** Label for query type "personal" */
  'label.personal': '個人的',
  /** Label for savedAt date */
  'label.saved-at': '保存於',
  /** Saved queries */
  'label.saved-queries': '已保存的查詢',
  /** Search queries */
  'label.search-queries': '搜索查詢',
  /** Share query */
  'label.share': '分享',
  /** Label for query type "shared" */
  'label.shared': '共用',
  /** Label for saved query type "team" */
  'label.team': '團隊',
  /** Label for untitled query fallback */
  'label.untitled-query': '未命名',

  /** Error message for when the "Params" input are not a valid json */
  'params.error.params-invalid-json': '參數不是有效的JSON',
  /** Label for "Params" (parameters) editor/input */
  'params.label': '參數',

  /** Label for 'Column' indicator when there is an error within the query */
  'query.error.column': '列',
  /** Label for 'Line' indicator when there is an error within the query */
  'query.error.line': '行',
  /** Extra explanation when a 400 is returned for a release perspective on an old API version */
  'query.error.unsupported-release-perspective':
    '此 API 版本不支援複雜視角(perspectives)。請使用 {{apiVersion}} 或更新版本。',
  /** Extra explanation when a 400 is returned for a variant on an incompatible API version */
  'query.error.unsupported-variant':
    '此 API 版本不支援內容變體(content variants)。請使用實驗性 API 版本({{apiVersion}})。',
  /** Label for "Query" editor/input */
  'query.label': '查詢',
  /** Label for the "Query URL" field, shown after executing a query, and allows for copying */
  'query.url': '查詢網址',

  /** Label for "End to End time" information of the fetched query */
  'result.end-to-end-time-label': '端到端',
  /** Label for "Execution time" information of the fetched query */
  'result.execution-time-label': '執行',
  /** Label for "Result" explorer/view */
  'result.label': '結果',
  /** Tooltip text shown when the query result is not encodable as CSV */
  'result.save-result-as-csv.not-csv-encodable': '結果無法編碼為 CSV',
  /** Label for "Save result as" result action */
  'result.save-result-as-format': '將結果保存為 <SaveResultButtons/>',
  /**
   * "Not applicable" message for when there is no Execution time or End to End time information
   * available for the query (eg when the query has not been executed, or errored)
   */
  'result.timing-not-applicable': '不適用',

  /** Query already saved error label */
  'save-query.already-saved': '查詢已保存',
  /** Save error label */
  'save-query.error': '保存查詢時出錯',
  /** Save personal copy success label */
  'save-query.personal-copy-success': '個人副本已儲存',
  /** Warning displayed before sharing a query */
  'save-query.share-warning': '共用查詢會以文件形式儲存在您的 dataset 中，並計入您的文件配額。',
  /** Save shared query success label */
  'save-query.shared-success': '共用查詢已儲存',
  /** Save success label */
  'save-query.success': '查詢已保存',
  /** Save unshared query success label */
  'save-query.unshared-success': '查詢已移至個人',

  /** Label for the "API version" dropdown in settings */
  'settings.api-version-label': 'API 版本',
  /** Tooltip shown when the API version selector is locked because a variant is selected */
  'settings.api-version-locked-for-variant': '選取變體時,API 版本需要為 vX。',
  /** Label for the "Custom API version" input in settings, shown when "other" is chosen as API version */
  'settings.custom-api-version-label': '自定義 API 版本',
  /** Label for the "Dataset" dropdown in vision settings */
  'settings.dataset-label': '數據集',
  /** Error label for when the API version in 'Custom API version' input is invalid */
  'settings.error.invalid-api-version': '無效的 API 版本',
  /** Label for the "other" versions within the "API version" dropdown */
  'settings.other-api-version-label': '其它',
  /**
   * Label for the "Perspective" dropdown in vision settings
   * @see {@link https://www.sanity.io/docs/perspectives}
   */
  'settings.perspective-label': '視角',
  /** Notification about previewDrafts to drafts rename */
  'settings.perspective.preview-drafts-renamed-to-drafts.description':
    '「<code>previewDrafts</code>」視角已更名為「<code>drafts</code>」，現已不推薦使用。此更改適用於所有支援視角的版本（>= v2021-03-25）。',
  /** Call to action to read the docs related to "Perspectives" */
  'settings.perspectives.action.docs-link': '閱讀文件',
  /** Option for selecting default perspective */
  'settings.perspectives.default': '無視角（API 預設值）',
  /** Description for popover that explains what "Perspectives" are */
  'settings.perspectives.description': '視角允許您的查詢針對數據集中不同的「視圖」運行',
  /** Description for upcoming default perspective change */
  'settings.perspectives.new-default.description':
    '預設視角將從「<code>raw</code>」更改為「<code>published</code>」在即將到來的 API 版本中。請查閱文檔以獲取更多詳情。',
  /** Label for the pinned release perspective */
  'settings.perspectives.pinned-release-label': '固定發布',
  /** Label for the scheduled drafts perspective */
  'settings.perspectives.scheduled-drafts': '已排程的草稿',
  /** Title for popover that explains what "Perspectives" are */
  'settings.perspectives.title': '視角',

  /** Tooltip line of every control that calls Sanity Agent Actions, which bills AI credits */
  'vision.agent-actions.credits': '每次請求消耗一個 AI 點數',
  /** Under an Agent Actions control: the organization's AI credits balance this month */
  'vision.ai-credits.balance': '本月剩餘 {{balance}} / {{quota}} AI 點數。',
  /** Under an Agent Actions control: the credits used beyond the plan's monthly quota */
  'vision.ai-credits.deficit':
    '本月已使用 {{used}} AI 點數,超出方案內含的 {{quota}} 點數 {{deficit}} 點。',
  /** Body of the out-of-credits card, with the credits used and the plan's monthly quota */
  'vision.ai-credits.limit.description':
    '您的組織本月已使用 {{used}} / {{quota}} AI 點數,因此 Sanity Agent Actions 已暫停,直到下個月或提高消費上限為止。',
  /** Body of the out-of-credits card when the usage and the quota are unknown */
  'vision.ai-credits.limit.description-unknown':
    '您的組織已達到 AI 點數消費上限,因此 Sanity Agent Actions 已暫停,直到下個月或提高上限為止。',
  /** Link in the out-of-credits card to the documentation of AI credits */
  'vision.ai-credits.limit.learn-more': 'AI 點數的運作方式',
  /** Button in the out-of-credits card leading to the organization's spending limits in Manage */
  'vision.ai-credits.limit.manage': '管理 AI 點數',
  /** Title of the card shown where the organization is out of AI credits */
  'vision.ai-credits.limit.title': 'AI 點數已用盡',
  /** Link after the AI credits note, to the organization's AI usage in Manage */
  'vision.ai-credits.usage': 'AI 使用量',
  /** Under an Agent Actions control: the credits used, on a plan without a quota */
  'vision.ai-credits.used': '本月已使用 {{used}} AI 點數。',
  /** Button in the request column's action bar naming the API version requests go out with */
  'vision.api-version.button': 'API {{version}}',
  /** The API version button while queries go through the API CDN */
  'vision.api-version.button-cdn': 'API CDN {{version}}',
  /** The API version button while the "Other" API version input holds an unfinished version */
  'vision.api-version.button-invalid': '未完成的 API 版本',
  /** Tooltip of the API version button */
  'vision.api-version.tooltip': '查詢將以 API 版本 {{version}} 執行。點選以在選項中變更。',
  /** Tooltip of the API version button while queries go through the API CDN */
  'vision.api-version.tooltip-cdn':
    '查詢將透過 API CDN 以 API 版本 {{version}} 執行。點選以在選項中變更。',
  /**
   * Tooltip of the API version button while the API CDN is asked for but the perspective, as the
   * perspective select names it, keeps queries on the API
   */
  'vision.api-version.tooltip-cdn-blocked':
    '查詢將以 API 版本 {{version}} 透過 API 執行,而非 API CDN:因為它不支援 {{perspective}} 透視圖。點選以在選項中變更。',
  /** Tooltip of the API version button while the "Other" input holds an unfinished version */
  'vision.api-version.tooltip-invalid':
    '選項中的 API 版本尚未完成,因此在完成之前無法擷取任何內容。',
  /** Tooltip of the API version button while a selected variant forces the variants API version */
  'vision.api-version.tooltip-locked':
    '查詢將以 API 版本 {{version}} 執行,這是所選變體所需的版本。',
  /** Label of the document after the change in the Delta panel */
  'vision.delta.after': '之後',
  /** Label of the document before the change in the Delta panel */
  'vision.delta.before': '之前',
  /** What the Delta panel does */
  'vision.delta.description':
    '以差異模式執行查詢,如同 GROQ 驅動的 webhook、監聽器和 Sanity Functions 的運作方式:before() 和 after() 分別是變更前後的文件,@ 是變更後的文件,而 delta::changedAny() 則用於比較它們。此操作在瀏覽器中使用 groq-js 執行。任一側為空表示沒有文件:該變更是建立或刪除了它。',
  /** Label of the document ID field in the Delta panel */
  'vision.delta.document-id': '文件 ID',
  /** Shown when there is a query but no documents to compare */
  'vision.delta.empty': '載入文件的歷史紀錄,或將文件寫入「之前」和「之後」。',
  /** Shown when the query fails in delta mode */
  'vision.delta.failed': '無法以差異模式執行查詢:{{message}}',
  /** Shown when the After document is not valid JSON */
  'vision.delta.invalid-after': '「之後」不是有效的 JSON:{{message}}',
  /** Shown when the Before document is not valid JSON */
  'vision.delta.invalid-before': 'Before 不是有效的 JSON:{{message}}',
  /** Button loading the document's revisions from the History API */
  'vision.delta.load': '載入歷史記錄',
  /** Shown when the history could not be loaded */
  'vision.delta.load-failed': '無法載入歷史記錄:{{message}}',
  /** A delta filter that is true for the change */
  'vision.delta.matches': '符合:具有此篩選條件的 webhook 或函式會針對此變更執行。',
  /** A delta filter that is false for the change */
  'vision.delta.no-match': '不符合:具有此篩選條件的 webhook 或函式不會針對此變更執行。',
  /** Shown while the query or its params cannot be sent */
  'vision.delta.no-request': '請修正查詢及其參數,以便以差異模式執行。',
  /** Heading of the delta result */
  'vision.delta.result': '結果',
  /** The After choice for a change that deletes the document */
  'vision.delta.revision.none-after': '無:此變更會刪除文件',
  /** The Before choice for a change that creates the document */
  'vision.delta.revision.none-before': '無:此變更會建立文件',
  /** A revision in the Before and After lists */
  'vision.delta.revision.option': '{{time}} · {{revision}}',
  /** Accessible label for the button that closes the sidebar drawer */
  'vision.drawer.close': '關閉面板',
  /** Explanation at the top of the Explain panel */
  'vision.explain.description':
    '查詢計劃是 Content Lake 執行查詢的方式:在讀取過程中讀取什麼、篩選和排序什麼,以及哪些留待後續步驟處理。「為我解釋這個」會讓 Sanity Agent Actions 以淺顯易懂的文字描述查詢及其計劃,此操作會使用一個 AI 額度。',
  /** Shown in the Explain panel while there is no valid query to explain */
  'vision.explain.empty': '撰寫一個查詢以進行解釋。',
  /** Button in the Explain panel asking Agent Actions to explain the query and its plan */
  'vision.explain.explain': '為我解釋這個',
  /** Shown when the explanation could not be written */
  'vision.explain.failed': '無法解釋此查詢:{{message}}',
  /** A count the index computes without reading the documents */
  'vision.explain.insight.aggregate': '在索引中計算,不需讀取文件。',
  /** A subquery the plan runs once for all documents */
  'vision.explain.insight.batched-subquery':
    '此子查詢會針對所有文件執行一次,以單次批次擷取方式進行,而非逐一文件執行。',
  /** Part of the filter runs in memory; the expression follows */
  'vision.explain.insight.filter-in-memory':
    '部分篩選條件會在讀取後於記憶體中執行:索引允許通過的每份文件都會先被讀取,這在大型資料集上會變慢。篩選條件中的聯結(->)和函式無法使用索引。',
  /** The index sorts and limits while reading */
  'vision.explain.insight.index-sort-limit': '索引會在讀取文件的同時進行排序與限制。',
  /** The plan slices in memory */
  'vision.explain.insight.slice-in-memory': '切片是在讀取後於記憶體中取得,而非作為讀取時的限制。',
  /** The plan sorts in memory */
  'vision.explain.insight.sort-in-memory':
    '排序是在讀取所有符合項目後於記憶體中進行。請依索引可排序的屬性進行排序。',
  /** Link under the plan insights to the guide on fast queries */
  'vision.explain.insights.guide': '高效能 GROQ',
  /** Heading of the plan insights in the Explain panel */
  'vision.explain.insights.title': '值得注意的重點',
  /** Button in the Explain panel fetching the query plan */
  'vision.explain.plan': '顯示查詢計劃',
  /** Shown when the query plan could not be fetched */
  'vision.explain.plan-failed': '無法取得查詢計劃:{{message}}',
  /** Heading of the query plan in the Explain panel */
  'vision.explain.plan-title': '查詢計畫',
  /** Toast shown after a code snippet was copied */
  'vision.export-query.copied': '程式碼片段已複製到剪貼簿',
  /** Label for the button that copies a code snippet */
  'vision.export-query.copy': '複製程式碼片段',
  /** Explanation at the top of the export query dialog */
  'vision.export-query.description': '使用下列其中一個程式碼片段在 Studio 之外執行此查詢。',
  /** Note under the curl snippet when the query is sent as a request body rather than in the URL */
  'vision.export-query.post-body-note':
    '查詢與參數作為搜尋參數時共有 {{size}} 個字元；從 {{limit}} 開始，@sanity/client 會改以 JSON 主體傳送，而非放在網址中，因此此程式碼片段也採用相同方式。',
  /** Title of the dialog that exports the query as code snippets */
  'vision.export-query.title': '匯出查詢',
  /** Note about authentication in the export query dialog */
  'vision.export-query.token-note':
    '私人資料集需要 API 權杖。公開資料集可以省略 Authorization 標頭。',
  /** Toast shown after the generated code was copied */
  'vision.export-types.copied': '程式碼已複製到剪貼簿',
  /** Label for the button that copies the generated code */
  'vision.export-types.copy': '複製程式碼',
  /** Shown in the types dialog when there is neither a schema evaluation nor a result */
  'vision.export-types.empty': '請先擷取查詢結果，才能從中衍生類型。',
  /** Why the workspace schema could not be used for the types; shown with the result fallback */
  'vision.export-types.schema-error': '結構描述評估失敗：{{message}}',
  /** Note shown when the types were derived from the fetched result instead of the schema */
  'vision.export-types.source.result':
    '由於無法根據工作區結構描述評估此查詢，因此由擷取的結果推斷而來。',
  /** Note shown when the types were derived from the workspace schema */
  'vision.export-types.source.schema': '依據工作區結構描述推斷而來，方式與 sanity typegen 相同。',
  /** Shown when the schema cannot be evaluated and the shown result belongs to an older query */
  'vision.export-types.stale-result':
    '顯示的結果是針對不同的查詢或參數擷取的。請先擷取目前的查詢，才能從中衍生類型。',
  /** Title of the dialog exporting TypeScript types for the result */
  'vision.export-types.title-typescript': '匯出 TypeScript',
  /** Title of the dialog exporting a Zod schema for the result */
  'vision.export-types.title-zod': '匯出 Zod',
  /** Button of a library function the query does not declare, which declares it at the top */
  'vision.functions.add': '新增至查詢',
  /** Shown on a library function the query declares the same way */
  'vision.functions.declared': '在此查詢中',
  /** Lint action on a call of a library function the query does not declare */
  'vision.functions.editor.add-from-library': '宣告它',
  /** Note in a function's hover documentation: the API version it needs */
  'vision.functions.editor.api-version': '需要 API 版本 {{version}} 或更新版本',
  /** Detail of a completion for a custom function the query declares */
  'vision.functions.editor.completion-declared': '在此查詢中',
  /** Detail of a completion for a library function, which declares it too */
  'vision.functions.editor.completion-library': '來自您的函式庫',
  /** Note in the hover documentation of a custom function the query declares */
  'vision.functions.editor.declared-on': '自訂函式，於第 {{line}} 行宣告',
  /** Note in the hover documentation of the functions that only work in delta mode */
  'vision.functions.editor.delta-only':
    '僅在差異模式下運作，webhook 與 Sanity Functions 會在此模式下執行其篩選器',
  /** Button over a selected projection in the query editor, turning it into a custom function */
  'vision.functions.editor.extract': '擷取為函式',
  /** Note in the hover documentation of a library function the query does not declare */
  'vision.functions.editor.in-library': '在您的函式庫中，但此查詢未宣告',
  /** Link at the end of a built-in function's hover documentation */
  'vision.functions.editor.reference': 'GROQ 函式參考文件',
  /** Explanation under the library heading in the Functions panel */
  'vision.functions.library.description':
    '保存在此瀏覽器中，供此專案的每個資料集使用。自動完成會提供這些函式，而程式碼檢查會建議宣告查詢所呼叫的函式。',
  /** Shown in the Functions panel while the library is empty */
  'vision.functions.library.empty': '儲存查詢宣告的函式，以便在其他查詢中使用。',
  /** Heading of the functions library in the Functions panel */
  'vision.functions.library.title': '函式庫',
  /** Shown in the Functions panel while the query declares no custom functions */
  'vision.functions.query.empty':
    '在查詢頂部宣告自訂函式，或將游標放在投影中（例如 author->{name}），然後按下編輯器上方的擷取按鈕（{{shortcut}}）。',
  /** Heading of the functions the query declares in the Functions panel */
  'vision.functions.query.title': '在此查詢中',
  /** Removes a function from the library */
  'vision.functions.remove': '從函式庫中移除',
  /** Button of a library function the query declares differently, which puts the library's version in */
  'vision.functions.replace': '在查詢中取代',
  /** Accessible name of a declared function in the Functions panel, which selects it in the editor */
  'vision.functions.reveal': '在編輯器中顯示 {{name}}',
  /** Button of a function the query declares that is not in the library yet */
  'vision.functions.save': '儲存至函式庫',
  /** Shown on a function the query declares the way the library has it */
  'vision.functions.saved': '已儲存',
  /** Button of a function the query declares differently from the library's version */
  'vision.functions.update': '更新函式庫',
  /** Button over the query editor that opens the bar writing a query from a description */
  'vision.generate.button': '產生查詢',
  /** Closes the generate query bar */
  'vision.generate.close': '關閉',
  /** Explanation under the generate query field */
  'vision.generate.description':
    'Sanity Agent Actions 會根據您的描述和文件類型撰寫 GROQ，並由 Content Lake 檢查每次嘗試；每次嘗試會使用一個 AI 點數。這會取代此分頁的查詢並執行；在編輯器中復原可恢復先前的查詢。',
  /** Shown when no query could be generated, above the reason */
  'vision.generate.failed': '無法產生查詢',
  /** Accessible label of the description field in the generate query bar */
  'vision.generate.label': '查詢應擷取什麼內容？',
  /** Opens the last rejected attempt, without running it, to fix it by hand */
  'vision.generate.open-anyway': '開啟上次的嘗試',
  /** Placeholder of the description field in the generate query bar */
  'vision.generate.placeholder': '最近的 10 位作者，依姓氏然後名字排序',
  /** Shown while the first attempt at a query is written */
  'vision.generate.progress': '正在撰寫查詢……',
  /** Shown while a rejected attempt is retried */
  'vision.generate.progress-retry': '正在修正查詢（第 {{attempt}} 次嘗試，共 {{max}} 次）……',
  /** Button generating the query */
  'vision.generate.submit': '產生',
  /** Badge on a history entry the API CDN answered */
  'vision.history.cdn': 'API CDN',
  /** Badge on a history entry the API CDN answered from its cache */
  'vision.history.cdn-cache-hit': 'CDN 快取命中',
  /** A history entry whose result differs from the previous result, which is no longer kept */
  'vision.history.changed': '已變更',
  /**
   * Toggle on a history entry that shows how its request and result differ from the previous
   * successful fetch
   */
  'vision.history.changes': '變更',
  /** Shown instead of the changes when they could not be loaded or rendered */
  'vision.history.changes-failed': '無法顯示變更內容。',
  /** Button retrying to show the changes of a history entry */
  'vision.history.changes-retry': '重試',
  /** Above the changes of a history entry: the fetch they are compared with */
  'vision.history.compared-with': '與 {{time}} 的擷取結果比較',
  /** Label of the diff of the GROQ params in a history entry's changes */
  'vision.history.diff.params': '參數',
  /** Label of the diff of the GROQ query in a history entry's changes */
  'vision.history.diff.query': '查詢',
  /** Instead of the query diff, when the two queries only differ in whitespace and line breaks */
  'vision.history.diff.query-formatting-only': '僅格式有變更',
  /** Label of the diff of the query result in a history entry's changes */
  'vision.history.diff.result': '結果',
  /**
   * Label of the diff of the request URL in a history entry's changes: the API host, version and
   * dataset, and options such as the perspective
   */
  'vision.history.diff.url': '請求網址',
  /** Empty state of the history panel */
  'vision.history.empty': '尚未擷取任何內容',
  /** Status label for a failed fetch in the history */
  'vision.history.failed': '失敗',
  /** Button putting the hidden fields back into the diff out of a history entry's changes */
  'vision.history.hide-hidden': '隱藏它們',
  /** Next to a history entry's changes: the fields the diff leaves out */
  'vision.history.hiding': '隱藏 {{fields}}',
  /** A history entry whose result only differs from the previous one in hidden fields */
  'vision.history.only-hidden-changed': '僅隱藏欄位有變更',
  /** History reason: a tab opened with a generated query fetched it */
  'vision.history.reason.generated': '產生的查詢',
  /** History reason: a link to the tool named a query URL, which opened in a tab and ran */
  'vision.history.reason.link': '已開啟連結',
  /** History reason: a live event matched the query's sync tags */
  'vision.history.reason.live': '即時更新',
  /** History reason: the live connection asked every client to refetch */
  'vision.history.reason.live-restart': '即時連線已重新啟動',
  /**
   * History reason: the Live fetch button was pressed, which fetches and then refetches
   * automatically
   */
  'vision.history.reason.live-start': '已開始即時擷取',
  /** History reason: a saved query was loaded into a tab that refetches automatically */
  'vision.history.reason.load': '已載入查詢',
  /** History reason: the fetch button was pressed */
  'vision.history.reason.manual': '擷取按鈕',
  /** History reason: mutations were applied from the Mutate panel */
  'vision.history.reason.mutation': '已套用變動',
  /** History reason: dataset, API version or perspective changed while refetching automatically */
  'vision.history.reason.options': '選項已變更',
  /** History reason: a query URL was pasted into the tab, which runs it */
  'vision.history.reason.paste': '貼上的網址',
  /** History reason: a tab that refetches automatically was opened again, or the studio reloaded */
  'vision.history.reason.resume': '自動重新擷取已恢復',
  /** History reason: the keyboard shortcut was used */
  'vision.history.reason.shortcut': '鍵盤快速鍵',
  /** A history entry whose result is the same as the previous result, for a changed request */
  'vision.history.same-result': '結果相同',
  /** Button showing the hidden fields in a history entry's changes */
  'vision.history.show-hidden': '顯示它們',
  /** Next to a history entry's changes while the hidden fields are shown */
  'vision.history.showing-hidden': '顯示 {{fields}}，預設為隱藏',
  /** A history entry whose result, or the previous one, is too large to compare */
  'vision.history.too-large': '過大，無法比較',
  /** A history entry whose result is the same as the previous result */
  'vision.history.unchanged': '沒有變更',
  /** Shown in the Lint panel while the query has no lint findings */
  'vision.lint.empty':
    '沒有檢查結果。GROQ 檢查工具在查詢中發現的問題會在您輸入時列在這裡；選擇其中一項即可在編輯器中選取它。',
  /** Where a lint finding sits in the query, shown under its message */
  'vision.lint.position': '第 {{line}} 行，第 {{column}} 欄',
  /** Severity badge of a lint finding */
  'vision.lint.severity.error': '錯誤',
  /** Severity badge of a lint finding */
  'vision.lint.severity.hint': '提示',
  /** Severity badge of a lint finding */
  'vision.lint.severity.info': '資訊',
  /** Severity badge of a lint finding */
  'vision.lint.severity.warning': '警告',
  /** Lint action writing the type, field or operator a schema finding suggests */
  'vision.lint.use-suggestion': '使用 {{suggestion}}',
  /** Badge shown while a tab refetches automatically */
  'vision.live.active': '即時',
  /** Button in the request column's action bar that fetches and then refetches automatically */
  'vision.live.button': '即時擷取',
  /** Tooltip of the Live button while automatic refetching is off */
  'vision.live.button.start': '擷取，然後在結果中的文件變更時再次擷取',
  /** Tooltip of the Stop live button, while the tab refetches automatically */
  'vision.live.button.stop':
    '停止在結果中的文件變更時擷取。擷取仍會依需求執行，適用於不受任何文件變更影響的結果，例如 now()',
  /** Error shown when the live connection breaks */
  'vision.live.error': '即時更新已中斷連線：{{message}}',
  /** The Live fetch button while the tab refetches automatically, stopping it */
  'vision.live.stop': '停止即時',
  /** Button in the Mutate panel adding a mutation to the list */
  'vision.mutate.add': '新增異動',
  /** Adds a mutation creating a document, with the type of the result's first document */
  'vision.mutate.add.create': '建立文件',
  /** Adds a mutation deleting a document, its ID to fill in */
  'vision.mutate.add.delete': '刪除文件',
  /** Adds a mutation deleting the documents of the shown result */
  'vision.mutate.add.delete-result': '刪除結果中的文件',
  /** Adds a mutation patching a document, its ID to fill in */
  'vision.mutate.add.patch': '修補文件',
  /** Adds a mutation patching the documents of the shown result */
  'vision.mutate.add.patch-result': '修補結果中的文件',
  /** Button applying the mutations a dry run showed */
  'vision.mutate.apply': '套用至 {{dataset}}',
  /** Heading of the error shown when applying the mutations failed */
  'vision.mutate.apply-failed': '變更未套用',
  /** Next to Apply while the mutations as they are have had no dry run */
  'vision.mutate.apply-needs-preview': '套用會傳送試執行所顯示的內容：請先執行一次試執行。',
  /** Option giving array items without a _key one */
  'vision.mutate.auto-keys': '為沒有 _key 的陣列項目加上 _key',
  /** Under the option giving array items a _key */
  'vision.mutate.auto-keys.description': '工作室需要每個陣列項目都有一個 _key 才能編輯它。',
  /** Button showing a document's changes in the dry run */
  'vision.mutate.changes': '變更',
  /** Shown instead of a document's changes when they could not be loaded or rendered */
  'vision.mutate.changes-failed': '無法顯示變更。',
  /** Button retrying to show a document's changes */
  'vision.mutate.changes-retry': '重試',
  /** What the Mutate panel does */
  'vision.mutate.description':
    '以 Mutations API 所接受的格式，寫出一份清單的變更操作：create、createOrReplace、createIfNotExists、delete 與 patch，可依 ID 或 GROQ 查詢指定。試執行會顯示這些操作對每份文件的影響，而不會實際改變任何內容；套用後則會以你的帳號，在一次交易中將它們寫入資料集。',
  /** What the API says went wrong with one of the mutations */
  'vision.mutate.failure-item': '變更 {{index}}：{{message}}',
  /** Tooltip and accessible label of the button opening the generate mutations field */
  'vision.mutate.generate.button': '產生變更',
  /** Explanation under the generate mutations field */
  'vision.mutate.generate.description':
    'Sanity Agent Actions 會根據你的描述、結果中的文件及其類型來寫出變更，並由試執行檢查每次嘗試；每次嘗試會消耗一個 AI 額度。它們會取代此處的變更，復原後會恢復原本內容；在你套用前不會寫入任何內容。',
  /** Shown when no mutations could be generated, above the reason */
  'vision.mutate.generate.failed': '無法產生變更',
  /** Accessible label of the description field in the generate mutations bar */
  'vision.mutate.generate.label': '變更應該執行什麼操作？',
  /** Placeholder of the description field in the generate mutations bar */
  'vision.mutate.generate.placeholder': '將結果中文件的標題改為 foobar',
  /** Shown while the first attempt at the mutations is written */
  'vision.mutate.generate.progress': '正在寫出變更……',
  /** Shown while an attempt the dry run turned down is retried */
  'vision.mutate.generate.progress-retry': '正在修正變更（第 {{attempt}} 次嘗試，共 {{max}} 次）……',
  /** Under the dry run: the fields the diffs leave out */
  'vision.mutate.hiding': '變更內容不包含 {{fields}}，如同「歷史紀錄」所做的一樣。',
  /** Shown when the mutations are not valid JSON */
  'vision.mutate.invalid-json': '變更內容不是有效的 JSON：{{message}}',
  /** Shown when a mutation does not name exactly one thing to do */
  'vision.mutate.invalid-mutation':
    '變更 {{index}} 需要恰好指定 create、createOrReplace、createIfNotExists、delete 或 patch 其中一項。',
  /** Label of the mutations editor */
  'vision.mutate.mutations': '變更',
  /** The dry run touched no documents */
  'vision.mutate.no-documents': '此變更未涉及任何文件。',
  /** Shown when the JSON is not a list of mutations */
  'vision.mutate.not-a-list': '請寫出一份變更清單、單一變更，或包含變更清單的請求主體。',
  /** A document the mutations create */
  'vision.mutate.operation.create': '建立',
  /** A document the mutations delete */
  'vision.mutate.operation.delete': '刪除',
  /** A document the mutations touch without changing its content */
  'vision.mutate.operation.none': '無變更',
  /** A document the mutations change */
  'vision.mutate.operation.update': '更新',
  /** Button running the mutations as a dry run */
  'vision.mutate.preview': '試運行',
  /** Heading of the error shown when the dry run failed */
  'vision.mutate.preview-failed': '試運行失敗',
  /** Heading of the dry run's outcome */
  'vision.mutate.preview-heading': '試運行',
  /** Shown over a dry run made for other mutations, another dataset or other options */
  'vision.mutate.stale':
    '在此次試運行後，變更內容、資料集或選項已經改變。請重新執行以套用這些變更。',
  /** How many documents the dry run changes and leaves as they are */
  'vision.mutate.summary': '已變更：{{changed}} · 未變更：{{unchanged}}',
  /** In the Network panel: whether a cache answered the query */
  'vision.network.cache': '快取',
  /** The API CDN answered from its cache */
  'vision.network.cache.hit': '命中',
  /** Under the details of a CDN cache hit */
  'vision.network.cache.hit-explained':
    'CDN 使用其快取的回應作答，該快取來自鄰近您的位置；此查詢並未傳送到 API。',
  /** The API CDN answered with a response this session had not seen */
  'vision.network.cache.miss': '未命中，就此工作階段所知',
  /** The API answered, which caches nothing */
  'vision.network.cache.none': '無，API 對每個請求都回應最新內容',
  /** Shown in the Network panel while there is no response */
  'vision.network.empty': '擷取查詢以查看是哪個端點回應了它、是否來自快取，以及在哪裡執行。',
  /** In the Network panel: the endpoint that answered */
  'vision.network.endpoint': '回應來自',
  /** The live API answered */
  'vision.network.endpoint.api': 'API',
  /** The API CDN answered */
  'vision.network.endpoint.cdn': 'API CDN',
  /** In the Network panel: the HTTP method the query was sent with */
  'vision.network.method': '方法',
  /** The query and its params went in the URL */
  'vision.network.method.get': 'GET，查詢與參數包含在 URL 中',
  /** The query and its params went in the request body */
  'vision.network.method.post': 'POST，查詢與參數以 JSON 主體傳送',
  /** Under the method of a POST request: why the query was not sent in the URL */
  'vision.network.method.post-explained':
    '查詢與參數作為搜尋參數共有 {{size}} 個字元；從 {{limit}} 個字元起，@sanity/client 會以 JSON 主體傳送它們，因為 API 限制了 URL 的長度。選項則仍保留在 URL 中。',
  /** In the Network panel: the region the query ran in */
  'vision.network.region': '查詢執行於',
  /** The response did not say where the query ran */
  'vision.network.region.unknown': '未回報',
  /** In the Network panel: the round trip and the time on the server */
  'vision.network.timing': '時間',
  /** The round trip and the server's time for the query, in milliseconds */
  'vision.network.timing.value': '往返 {{e2e}} 毫秒，伺服器端 {{server}} 毫秒',
  /** In the Network panel: the trace of the request, for Sanity support */
  'vision.network.trace': '追蹤 ID',
  /** Hint in the Network panel while queries go to the API */
  'vision.network.use-cdn-hint': '在選項中開啟「使用 API CDN」,以透過 CDN 傳送查詢。',
  /** Label of the browser's marker on the Network panel's globe, placed from its time zone */
  'vision.network.you': '您',
  /** Hint under the dataset field while the tab follows the workspace's dataset */
  'vision.options.dataset.follows-workspace': '跟隨工作區',
  /** Button that pins the current dataset so the tab stops following the workspace */
  'vision.options.dataset.pin': '釘選資料集',
  /** Hint under the dataset field while a dataset is pinned */
  'vision.options.dataset.pinned': '已釘選;工作區可能使用其他資料集',
  /** Button that makes the tab follow the workspace's dataset again */
  'vision.options.dataset.use-workspace': '使用工作區的資料集',
  /** Label for the "Include content source map" switch */
  'vision.options.include-source-map': '包含內容來源對應',
  /** Description for the "Include content source map" switch */
  'vision.options.include-source-map.description':
    '在回應中加入 resultSourceMap,顯示於「內容來源對應」分頁。',
  /** Perspective option following the studio navbar; the name is the release, published or drafts */
  'vision.options.perspective.global': '全域 ({{name}})',
  /** Label of the switch that sends queries to the API CDN */
  'vision.options.use-cdn': '使用 API CDN',
  /** Note under the API CDN switch while the studio signs in with a cookie */
  'vision.options.use-cdn.anonymous':
    '此工作室以 Cookie 方式為您登入,而 API CDN 永遠不會收到此 Cookie:它會像回應匿名訪客一樣回應,顯示公開資料集所呈現的內容。',
  /**
   * Why the API CDN is asked for but not used: the perspective is the one the perspective
   * select shows, such as "Global (drafts)"
   */
  'vision.options.use-cdn.blocked':
    'API CDN 不提供草稿或發行版本,因此使用 {{perspective}} 視角的查詢會傳送至 API。使用已發布或原始視角時則會使用 CDN。',
  /** Heading of the notice shown while the perspective keeps queries off the API CDN */
  'vision.options.use-cdn.blocked.title': '查詢會傳送至 API,而非 CDN',
  /** Description of the API CDN switch */
  'vision.options.use-cdn.description':
    '將查詢傳送至 API CDN,如同 @sanity/client 中的 useCdn: true,適用於已發布與原始視角:草稿和發行版本一律傳送至 API。其回應會快取最多一分鐘;網路面板會顯示回應是否來自快取。',
  /** Button in the API CDN notice switching the tab to the published perspective */
  'vision.options.use-cdn.use-published': '使用已發布視角',
  /** Label of the variant field */
  'vision.options.variant-label': '變體',
  /** Variant option sending the navbar's variant, named */
  'vision.options.variant.global': '全域 ({{name}})',
  /** Variant option sending the navbar's variant while none is selected there */
  'vision.options.variant.global-none': '全域(未選取)',
  /** Variant option sending no variant */
  'vision.options.variant.none': '無',
  /** Accessible label for collapsing a bottom panel */
  'vision.panel.collapse': '收合面板',
  /** Label of the Delta tab in the response panel, which tests the query in delta mode */
  'vision.panel.delta': '差異',
  /** Accessible label for expanding a bottom panel */
  'vision.panel.expand': '展開面板',
  /** Label of the "Explain" tab in the response panel: the query plan and an explanation */
  'vision.panel.explain': '解釋',
  /** Label of the Functions tab in the response panel */
  'vision.panel.functions': '函式',
  /** Label of the "History" tab in the response panel */
  'vision.panel.history': '歷史記錄',
  /** Label of the "Lint" tab in the response panel, listing the query's lint findings */
  'vision.panel.lint': 'Lint',
  /** Label of the Mutate tab in the response panel, which runs and applies mutations */
  'vision.panel.mutate': '變更',
  /** Label of the Network tab in the response panel */
  'vision.panel.network': '網路',
  /** Label of the "Options" panel in the request column */
  'vision.panel.options': '選項',
  /** Label of the "Response" tab in the response panel */
  'vision.panel.response': '回應',
  /** Label of the "Content Source Map" tab in the response panel */
  'vision.panel.source-map': '內容來源對應',
  /** Button adding an item to a list param in the params form */
  'vision.params-form.add-item': '新增項目',
  /** Placeholder of a params form field that takes any JSON value */
  'vision.params-form.any-placeholder': '任何 JSON 值；其他文字將以字串形式傳送',
  /** Shown in the params form when the query uses no params */
  'vision.params-form.empty': '此查詢未使用任何參數。查詢中的每個 $name 都會在此處對應一個欄位。',
  /** Shown in the params form while the params JSON cannot be parsed */
  'vision.params-form.invalid-json':
    '參數不是有效的 JSON。請在 JSON 檢視中修正它們，才能在此編輯。',
  /** A boolean param's value is not true or false; it is sent anyway */
  'vision.params-form.invalid.boolean': '不是 true 或 false；將以 {{value}} 傳送',
  /** A document type param's value is not a document type of the workspace; it is sent anyway */
  'vision.params-form.invalid.document-type': '不是此工作區中的文件類型；仍會傳送',
  /** A whole number param (a slice bound) holds a fraction */
  'vision.params-form.invalid.integer': '不是切片所需的整數',
  /** A list param's value is not a list; it is sent anyway */
  'vision.params-form.invalid.list': '不是清單；將以 {{value}} 傳送',
  /** A number param's value is not a number; it is sent anyway */
  'vision.params-form.invalid.number': '不是數字；將以文字形式傳送',
  /** A param's value is not one of the values the schema allows; it is sent anyway */
  'vision.params-form.invalid.option': '不是已知的值之一；仍會傳送',
  /** A text param's value is not text; it is sent anyway */
  'vision.params-form.invalid.string': '不是文字；將以 {{value}} 傳送',
  /** Accessible label of an item input of a list param in the params form */
  'vision.params-form.item-label': '${{name}}，項目 {{index}}',
  /** Placeholder of an item input of a list param in the params form */
  'vision.params-form.item-placeholder': '項目',
  /** Under a params form field whose param has no value */
  'vision.params-form.missing': '尚未設定：在有值之前，此查詢會失敗',
  /** Shown in the params form when the workspace schema could not be read */
  'vision.params-form.no-schema': '類型僅來自查詢：無法讀取工作區結構描述。',
  /** Placeholder of a params form field without a value, and the unset choice of a boolean */
  'vision.params-form.not-set': '未設定',
  /** Button setting a date and time param to the current time */
  'vision.params-form.now': '現在',
  /** Button removing a param the query does not use from the params */
  'vision.params-form.remove': '移除',
  /** Accessible label of the button removing an item from a list param */
  'vision.params-form.remove-item': '移除項目',
  /** Shown in the params form when the query does not parse */
  'vision.params-form.syntax-error': '查詢無法解析，因此其參數以不含類型的方式列出。',
  /** Type hint of a params form field: any JSON value */
  'vision.params-form.type.any': '任何 JSON 值',
  /** Type hint of a params form field: true or false */
  'vision.params-form.type.boolean': 'true 或 false',
  /** Type hint of a params form field: an ISO 8601 date and time */
  'vision.params-form.type.datetime': '日期與時間（ISO 8601）',
  /** Type hint of a params form field: a document ID */
  'vision.params-form.type.document-id': '文件 ID',
  /** Type hint of a params form field: one of the workspace's document types */
  'vision.params-form.type.document-type': '文件類型',
  /** Type hint of a params form field: a whole number */
  'vision.params-form.type.integer': '整數',
  /** Type hint of a params form field: a list of values */
  'vision.params-form.type.list': '清單，每個項目皆為 {{type}}',
  /** Type hint of a params form field: a number */
  'vision.params-form.type.number': '數字',
  /** Type hint of a params form field: text */
  'vision.params-form.type.string': '文字',
  /** Heading of the params the query does not use, listed in the params form */
  'vision.params-form.unused': '查詢未使用',
  /** Before the expressions that use a param, in the params form */
  'vision.params-form.used-in': '使用於',
  /** Value announced for the params resize handle while the panel sizes itself to its content */
  'vision.params.fit-height': '依內容調整大小，{{height}} 像素',
  /** Accessible label and tooltip of the handle for resizing the params panel */
  'vision.params.resize': '調整參數大小：拖曳或使用方向鍵；按兩下或按 Enter 以重新符合內容大小',
  /** Tab showing the params as a form inferred from the query */
  'vision.params.view.form': '表單',
  /** Tab showing the params as JSON */
  'vision.params.view.json': 'JSON',
  /** Accessible label of the tabs switching how the params are edited */
  'vision.params.view.label': '編輯參數方式',
  /** Toast shown after a query URL was pasted and loaded into the tab */
  'vision.paste.parsed': '已從貼上的 URL 載入查詢',
  /** Toast shown after a curl command for a query was pasted and loaded into the tab */
  'vision.paste.parsed-curl': '已從貼上的 cURL 指令載入查詢',
  /** Toast shown when a pasted URL used a content variant the tab does not send */
  'vision.paste.unavailable-variant':
    '貼上的 URL 使用了「{{variant}}」變體；請在導覽列中選取它以執行此查詢。',
  /** Toast shown when the dataset of a pasted URL is not available here */
  'vision.paste.unknown-dataset':
    '貼上的 URL 中的資料集「{{dataset}}」在此處無法使用，已保留目前的資料集。',
  /** Toast shown when the perspective of a pasted URL cannot be used */
  'vision.paste.unsupported-perspective':
    '貼上的 URL 中的 perspective 在此處不受支援，已保留目前的 perspective。',
  /** Toast shown when a pasted URL used a content variant, but this workspace has variants switched off */
  'vision.paste.variants-disabled':
    '貼上的 URL 使用了「{{variant}}」變體；此工作區已關閉變體功能，因此查詢將在不使用該變體的情況下執行。',
  /** Accessible label for the query actions menu */
  'vision.query.actions': '查詢動作',
  /** Tooltip when automatic refetching is not available for the API version */
  'vision.query.auto-refetch.unsupported': '自動重新擷取需要 API 版本 v2021-03-25 或更新版本。',
  /** Toast shown after the query was copied */
  'vision.query.copied': '查詢已複製到剪貼簿',
  /** Menu item copying the query text */
  'vision.query.copy': '複製查詢',
  /** Menu item opening the export query dialog */
  'vision.query.export': '匯出查詢…',
  /** Menu item reformatting the query */
  'vision.query.prettify': '美化查詢',
  /** Toast shown when the query could not be reformatted */
  'vision.query.prettify.failed': '無法美化查詢',
  /** Menu item saving the query to the personal saved queries */
  'vision.query.save': '儲存查詢',
  /** The Fetch button while a fetch is running, stopping it; paired with Stop live */
  'vision.query.stop': '停止',
  /** Tooltip and accessible label of the Stop button, which stops the running fetch only */
  'vision.query.stop.description': '停止擷取',
  /** Explanation in the settings section about the redesigned experience */
  'vision.redesign.settings.description':
    '您正在使用重新設計的 Vision 工具。切換回舊版後，您的分頁與設定仍會保留在此瀏覽器中，以供下次嘗試使用。',
  /** Title of the settings section about the redesigned experience */
  'vision.redesign.settings.title': '重新設計的 Vision（測試版）',
  /** Sidebar item and settings button that return to the classic Vision tool */
  'vision.redesign.switch-to-classic': '切換回傳統版 Vision',
  /** Toast button that switches to the redesigned tool */
  'vision.redesign.toast.accept': '立即試用',
  /** Body of the toast inviting users of the classic tool to try the redesign */
  'vision.redesign.toast.description':
    '查詢分頁、即時重新擷取、回應詳情與匯出功能。您隨時可以切換回舊版。',
  /** Toast button that hides the invitation */
  'vision.redesign.toast.dismiss': '暫時不要',
  /** Title of the toast inviting users of the classic tool to try the redesign */
  'vision.redesign.toast.title': '試用重新設計的 Vision',
  /** Button next to Fetch in the classic tool that switches to the redesigned one */
  'vision.redesign.try': '試用重新設計版本',
  /** Tooltip of the button next to Fetch in the classic tool that switches to the redesign */
  'vision.redesign.try.description':
    '切換到重新設計的 Vision（測試版）。您隨時可以從其側邊欄切換回舊版。',
  /** Empty state of the response panel before anything was fetched */
  'vision.response.empty': '尚未擷取任何內容',
  /** Label for the payload size in the response tab */
  'vision.response.payload-size': '負載大小',
  /** Label for the sync tags in the response tab */
  'vision.response.sync-tags': '同步標籤',
  /** Shown when the response carried no sync tags */
  'vision.response.sync-tags.none': '回應中沒有同步標籤',
  /** Under the query URL when the request went out as a POST body rather than that URL */
  'vision.response.url.sent-as-post':
    '以 POST 內文傳送：查詢與參數過長，無法放入 URL，因此 @sanity/client 以 JSON 形式傳送。將此 URL 貼入 Vision 仍可載入查詢。',
  /** Accessible label for the result actions menu */
  'vision.result.actions': '結果操作',
  /** Toast shown after the result was copied */
  'vision.result.copied': '結果已複製到剪貼簿',
  /** Toast shown after a value in the result was copied, with its path such as [0].author.name */
  'vision.result.copied-value': '已複製 {{path}}',
  /** Menu item and button copying the result as JSON */
  'vision.result.copy': '複製結果',
  /** Button next to each property in the result tree, copying its value */
  'vision.result.copy-value': '複製值',
  /** Empty state of the result view */
  'vision.result.empty': '執行查詢以在此查看結果',
  /** Button exporting the result as CSV */
  'vision.result.export-csv': '匯出 CSV',
  /** Button exporting the result as JSON */
  'vision.result.export-json': '匯出 JSON',
  /** Menu item opening the TypeScript export dialog */
  'vision.result.export-typescript': '匯出 TypeScript…',
  /** Menu item opening the Zod export dialog */
  'vision.result.export-zod': '匯出 Zod…',
  /** Button on a graph node hiding the objects and arrays it holds */
  'vision.result.graph.collapse': '隱藏其內容',
  /** Button fitting the whole graph in view */
  'vision.result.graph.fit': '適應畫面',
  /** Accessible label of the graph, saying how to move around in it */
  'vision.result.graph.label':
    '結果圖表：拖曳以移動，捲動以縮放；聚焦時，方向鍵可移動，+ 和 - 可縮放，0 可適應畫面',
  /** Ends the note on a graph that leaves part of this result out */
  'vision.result.graph.left-out-hint': '樹狀圖和 JSON 檢視會顯示全部內容。',
  /** Note on a graph of a result with more objects and arrays than it draws */
  'vision.result.graph.node-limit': '僅繪製前 {{nodes}} 個物件和陣列。',
  /**
   * Note on a graph whose objects or arrays have more entries than it lists; the nodes are the
   * ones in this result, each with its number of entries
   */
  'vision.result.graph.partial': '{{nodes}} 僅列出前 {{rows}} 筆項目。',
  /** An object or array in the note, with how many entries it has (always more than listed) */
  'vision.result.graph.partial.node': '{{name}}（{{entries}} 筆項目）',
  /** Title of the graph node of the result itself */
  'vision.result.graph.root': '結果',
  /** Button zooming into the graph */
  'vision.result.graph.zoom-in': '放大',
  /** Button zooming out of the graph */
  'vision.result.graph.zoom-out': '縮小',
  /** Tab showing the result as a graph of its objects and arrays */
  'vision.result.view.graph': '圖表',
  /** Tab showing the result as indented JSON text, to select and copy from */
  'vision.result.view.json': 'JSON',
  /** Accessible label of the tabs that switch how the result shows */
  'vision.result.view.label': '結果檢視',
  /** Tab showing the result as a tree to browse */
  'vision.result.view.tree': '樹狀圖',
  /** Empty state of the saved queries panel */
  'vision.saved.empty': '尚無已儲存的查詢。使用「+」按鈕儲存目前的查詢。',
  /** Empty state of a query list when the search matches nothing */
  'vision.saved.empty-search': '沒有符合您搜尋條件的查詢',
  /** Menu item loading a saved query into the active tab */
  'vision.saved.load-in-current-tab': '載入到目前分頁',
  /** Menu item opening a saved query in a new tab */
  'vision.saved.open-in-new-tab': '在新分頁開啟',
  /** Menu item renaming a saved query */
  'vision.saved.rename': '重新命名',
  /** Accessible label for the button saving the current query */
  'vision.saved.save-current': '儲存目前查詢',
  /** Toast shown when an opened saved query used a content variant the tab does not send */
  'vision.saved.unavailable-variant':
    '此已儲存查詢使用了「{{variant}}」變體；請在導覽列選取該變體以使用它執行查詢。',
  /** Toast shown when an opened saved query names a dataset that is not available here */
  'vision.saved.unknown-dataset':
    '此已儲存查詢的資料集「{{dataset}}」在此處無法使用，將保留目前的資料集。',
  /** Toast shown when an opened saved query used a content variant, but this workspace has variants switched off */
  'vision.saved.variants-disabled':
    '此已儲存查詢使用了「{{variant}}」變體；此工作區已關閉變體功能，因此查詢將不使用該變體執行。',
  /** Button in the settings dialog that clears the stored state */
  'vision.settings.clear-storage': '清除儲存空間',
  /** Confirmation button for clearing the storage */
  'vision.settings.clear-storage.confirm': '是，清除儲存空間',
  /** Explanation of what clearing the storage does */
  'vision.settings.clear-storage.description':
    '刪除您個人已儲存的查詢與函式庫，重設此瀏覽器中開啟的分頁與這些預設值，並返回傳統版 Vision 工具。共用查詢將會保留。',
  /** Toast shown when the saved queries could not be cleared */
  'vision.settings.clear-storage.error': '無法清除已儲存的查詢',
  /** Toast shown after the storage was cleared */
  'vision.settings.clear-storage.success': '已清除儲存空間',
  /** Explanation at the top of the settings dialog */
  'vision.settings.description': '新分頁的預設值。已開啟的分頁會保留各自的選項。',
  /** Explains the setting listing the fields left out of History diffs */
  'vision.settings.history-diff.description':
    '每行一個欄位路徑。路徑會在結果的任何深度進行比對，因此 _rev 會隱藏其中每份文件的修訂版本。各個差異仍可顯示它們。',
  /** Button restoring the default fields left out of History diffs */
  'vision.settings.history-diff.reset': '重設為預設值',
  /** Label of the setting listing the fields left out of History diffs */
  'vision.settings.history-diff.title': '從歷史記錄差異中隱藏的欄位',
  /** Title of the settings dialog */
  'vision.settings.title': '設定',
  /** Empty state of the shared queries panel */
  'vision.shared.empty': '尚無共用查詢。分享已儲存的查詢，讓使用此資料集的所有人都能使用它。',
  /** Shortcut description: close dialogs and menus */
  'vision.shortcuts.close': '關閉對話方塊與選單',
  /** Shortcut that lists the functions matching the name being typed in the query editor */
  'vision.shortcuts.complete': '自動完成函式名稱',
  /** Shortcut description: copy the query */
  'vision.shortcuts.copy-query': '複製查詢',
  /** Shortcut that turns the selected projection, or the one around the cursor, into a custom function */
  'vision.shortcuts.extract-function': '將游標所在的投影提取為函式',
  /** Shortcut description: run the query */
  'vision.shortcuts.fetch': '擷取查詢',
  /** Shortcut description: move the cursor to the next lint finding in the query editor */
  'vision.shortcuts.next-finding': '跳至下一個檢查結果',
  /** Shortcut description: reformat the query */
  'vision.shortcuts.prettify': '美化查詢格式',
  /** Title of the keyboard shortcuts dialog */
  'vision.shortcuts.title': '鍵盤快速鍵',
  /** Sidebar toggle: show icons only */
  'vision.sidebar.collapse': '收合側邊欄',
  /** Sidebar toggle: show labels next to the icons */
  'vision.sidebar.expand': '展開側邊欄',
  /** Accessible label for the sidebar navigation */
  'vision.sidebar.label': 'Vision 側邊欄',
  /** Sidebar item and drawer title for personal saved queries */
  'vision.sidebar.saved-queries': '已儲存的查詢',
  /** Sidebar item opening the settings dialog */
  'vision.sidebar.settings': '設定',
  /** Sidebar item and drawer title for shared queries */
  'vision.sidebar.shared-queries': '共用查詢',
  /** Sidebar item opening the keyboard shortcuts dialog */
  'vision.sidebar.shortcuts': '鍵盤快速鍵',
  /** Empty state of the content source map panel */
  'vision.source-map.empty':
    '回應中沒有內容來源對應。請在「選項」下開啟「包含內容來源對應」，然後重新擷取。',
  /** Accessible label of the divider between the result and the response details panel */
  'vision.split.bottom-panel':
    '調整回應詳細資料面板大小：拖曳或使用方向鍵；Home 和 End 可移至邊界，Enter 可重設',
  /** Accessible label of the divider between the request and response panes */
  'vision.split.request-response':
    '調整請求和回應窗格大小：拖曳或使用方向鍵；Home 和 End 可移至邊界，Enter 可重設',
  /** Accessible label for the button closing a query tab */
  'vision.tabs.close-tab': '關閉分頁',
  /** Accessible label for the list of query tabs */
  'vision.tabs.label': '查詢分頁',
  /** Accessible label for the button opening a new query tab */
  'vision.tabs.new-tab': '新增分頁',
  /** Placeholder of the input renaming a tab */
  'vision.tabs.title-placeholder': '分頁標題',
  /** Title of a tab whose query is still empty */
  'vision.tabs.untitled': '未命名查詢',
  /** Title the browser shows for the WebMCP tool that lints a query */
  'vision.webmcp.check-query': '在 Vision 中檢查 GROQ 查詢',
  /** Title the browser shows for the WebMCP tool that describes the workspace schema */
  'vision.webmcp.describe-schema': '在 Vision 中描述結構描述',
  /** Title the browser shows for the WebMCP tool that returns a query plan */
  'vision.webmcp.explain-query': '在 Vision 中解釋 GROQ 查詢',
  /** Title the browser shows for the WebMCP tool that reads the active Vision tab */
  'vision.webmcp.get-state': '讀取開啟的 Vision 分頁',
  /** Title the browser shows for the WebMCP tool that opens a query in a new tab */
  'vision.webmcp.open-query': '在 Vision 中開啟 GROQ 查詢',
  /** Title the browser shows for the WebMCP tool that runs mutations as a dry run */
  'vision.webmcp.preview-mutations': '在 Vision 中預覽變動',
  /** Title the browser shows for the WebMCP tool that runs a query */
  'vision.webmcp.run-query': '在 Vision 中執行 GROQ 查詢',
})
