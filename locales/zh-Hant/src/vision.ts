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
  'vista.agent-actions.credits': '每次請求使用一個 AI 點數',
  /** Under an Agent Actions control: the organization's AI credits balance this month */
  'vista.ai-credits.balance': '本月剩餘 {{balance}} / {{quota}} 個 AI 點數。',
  /** Under an Agent Actions control: the credits used beyond the plan's monthly quota */
  'vista.ai-credits.deficit':
    '本月已使用 {{used}} 個 AI 點數，超出方案所含 {{quota}} 個點數 {{deficit}} 個。',
  /** Body of the out-of-credits card, with the credits used and the plan's monthly quota */
  'vista.ai-credits.limit.description':
    '您的組織本月已使用 {{used}} / {{quota}} 個 AI 點數，因此 Sanity Agent Actions 已暫停，直到下個月或提高支出上限為止。',
  /** Body of the out-of-credits card when the usage and the quota are unknown */
  'vista.ai-credits.limit.description-unknown':
    '您的組織已達到 AI 點數支出上限，因此 Sanity Agent Actions 已暫停，直到下個月或提高上限為止。',
  /** Link in the out-of-credits card to the documentation of AI credits */
  'vista.ai-credits.limit.learn-more': '了解 AI 點數的運作方式',
  /** Button in the out-of-credits card leading to the organization's spending limits in Manage */
  'vista.ai-credits.limit.manage': '管理 AI 點數',
  /** Title of the card shown where the organization is out of AI credits */
  'vista.ai-credits.limit.title': 'AI 點數已用盡',
  /** Link after the AI credits note, to the organization's AI usage in Manage */
  'vista.ai-credits.usage': 'AI 使用量',
  /** Under an Agent Actions control: the credits used, on a plan without a quota */
  'vista.ai-credits.used': '本月已使用 {{used}} 個 AI 點數。',
  /** Button in the request column's action bar naming the API version requests go out with */
  'vista.api-version.button': 'API {{version}}',
  /** The API version button while queries go through the API CDN */
  'vista.api-version.button-cdn': 'API CDN {{version}}',
  /** The API version button while the "Other" API version input holds an unfinished version */
  'vista.api-version.button-invalid': '未完成的 API 版本',
  /** Tooltip of the API version button */
  'vista.api-version.tooltip': '查詢將以 API 版本 {{version}} 執行。選取以在選項中變更。',
  /** Tooltip of the API version button while queries go through the API CDN */
  'vista.api-version.tooltip-cdn':
    '查詢將透過 API CDN 以 API 版本 {{version}} 執行。選取以在選項中變更。',
  /**
   * Tooltip of the API version button while the API CDN is asked for but the perspective, as the
   * perspective select names it, keeps queries on the API
   */
  'vista.api-version.tooltip-cdn-blocked':
    '查詢將以 API 版本 {{version}} 透過 API 執行，而非 API CDN：因為它不服務 {{perspective}} 視角。選取以在選項中變更。',
  /** Tooltip of the API version button while the "Other" input holds an unfinished version */
  'vista.api-version.tooltip-invalid':
    '選項中的 API 版本尚未完成，因此在其完成之前無法取得任何內容。',
  /** Tooltip of the API version button while a selected variant forces the variants API version */
  'vista.api-version.tooltip-locked':
    '查詢將以 API 版本 {{version}} 執行，這是所選變體所需的版本。',
  /** Label of the document after the change in the Delta panel */
  'vista.delta.after': '之後',
  /** Label of the document before the change in the Delta panel */
  'vista.delta.before': '之前',
  /** What the Delta panel does */
  'vista.delta.description':
    '以差異（delta）模式執行查詢，如同以 GROQ 驅動的 webhook、監聽器和 Sanity Functions 一樣：before() 和 after() 分別是變更前與變更後的文件，@ 是變更後的文件，而 delta::changedAny() 則比較兩者。此查詢在瀏覽器中以 groq-js 執行。空白的一側表示沒有文件：該變更建立或刪除了它。',
  /** Label of the document ID field in the Delta panel */
  'vista.delta.document-id': '文件 ID',
  /** Shown when there is a query but no documents to compare */
  'vista.delta.empty': '載入文件的歷史記錄，或在「之前」和「之後」中寫入文件。',
  /** Shown when the query fails in delta mode */
  'vista.delta.failed': '無法以差異模式執行查詢：{{message}}',
  /** Shown when the After document is not valid JSON */
  'vista.delta.invalid-after': '「之後」不是有效的 JSON：{{message}}',
  /** Shown when the Before document is not valid JSON */
  'vista.delta.invalid-before': 'Before 不是有效的 JSON：{{message}}',
  /** Button loading the document's revisions from the History API */
  'vista.delta.load': '載入歷史記錄',
  /** Shown when the history could not be loaded */
  'vista.delta.load-failed': '無法載入歷史記錄：{{message}}',
  /** A delta filter that is true for the change */
  'vista.delta.matches': '符合：符合此篩選條件的 webhook 或函式會針對此變更執行。',
  /** A delta filter that is false for the change */
  'vista.delta.no-match': '不符合：符合此篩選條件的 webhook 或函式不會針對此變更執行。',
  /** Shown while the query or its params cannot be sent */
  'vista.delta.no-request': '請修正查詢及其參數，以便以差異模式執行。',
  /** Heading of the delta result */
  'vista.delta.result': '結果',
  /** The After choice for a change that deletes the document */
  'vista.delta.revision.none-after': '無：此變更會刪除文件',
  /** The Before choice for a change that creates the document */
  'vista.delta.revision.none-before': '無：此變更會建立文件',
  /** A revision in the Before and After lists */
  'vista.delta.revision.option': '{{time}} · {{revision}}',
  /** Accessible label for the button that closes the sidebar drawer */
  'vista.drawer.close': '關閉面板',
  /** Explanation at the top of the Explain panel */
  'vista.explain.description':
    '查詢計畫是 Content Lake 執行查詢的方式：讀取過程中讀取、篩選與排序的內容，以及留待後續步驟處理的內容。「向我說明」會使用 Sanity Agent Actions，以淺顯易懂的文字說明查詢及其計畫，此操作會使用 1 個 AI 額度。',
  /** Shown in the Explain panel while there is no valid query to explain */
  'vista.explain.empty': '撰寫查詢以進行說明。',
  /** Button in the Explain panel asking Agent Actions to explain the query and its plan */
  'vista.explain.explain': '向我說明',
  /** Shown when the explanation could not be written */
  'vista.explain.failed': '無法說明此查詢：{{message}}',
  /** A count the index computes without reading the documents */
  'vista.explain.insight.aggregate': '在索引中計數，不需讀取文件。',
  /** A subquery the plan runs once for all documents */
  'vista.explain.insight.batched-subquery':
    '此子查詢只針對所有文件執行一次，以單一批次擷取完成，而非針對每份文件各執行一次。',
  /** Part of the filter runs in memory; the expression follows */
  'vista.explain.insight.filter-in-memory':
    '部分篩選條件是在讀取後於記憶體中執行：索引放行的每份文件都會先被讀取，這在大型資料集上會變慢。篩選條件中的聯結 (->) 與函式無法使用索引。',
  /** The index sorts and limits while reading */
  'vista.explain.insight.index-sort-limit': '索引會在讀取文件的同時進行排序與限制。',
  /** The plan slices in memory */
  'vista.explain.insight.slice-in-memory':
    '切片是在讀取後於記憶體中進行的，而非在讀取時作為限制執行。',
  /** The plan sorts in memory */
  'vista.explain.insight.sort-in-memory':
    '排序是在讀取所有符合項目後於記憶體中進行的。請依索引可排序的屬性進行排序。',
  /** Link under the plan insights to the guide on fast queries */
  'vista.explain.insights.guide': '高效能 GROQ',
  /** Heading of the plan insights in the Explain panel */
  'vista.explain.insights.title': '重點摘要',
  /** Button in the Explain panel fetching the query plan */
  'vista.explain.plan': '顯示查詢計畫',
  /** Shown when the query plan could not be fetched */
  'vista.explain.plan-failed': '無法取得查詢計畫：{{message}}',
  /** Heading of the query plan in the Explain panel */
  'vista.explain.plan-title': '查詢計畫',
  /** Toast shown after a code snippet was copied */
  'vista.export-query.copied': '程式碼片段已複製到剪貼簿',
  /** Label for the button that copies a code snippet */
  'vista.export-query.copy': '複製程式碼片段',
  /** Explanation at the top of the export query dialog */
  'vista.export-query.description': '使用以下其中一個程式碼片段在 studio 外執行此查詢。',
  /** Title of the dialog that exports the query as code snippets */
  'vista.export-query.title': '匯出查詢',
  /** Note about authentication in the export query dialog */
  'vista.export-query.token-note':
    '私人資料集需要 API token。公開資料集可以省略 Authorization 標頭。',
  /** Toast shown after the generated code was copied */
  'vista.export-types.copied': '程式碼已複製到剪貼簿',
  /** Label for the button that copies the generated code */
  'vista.export-types.copy': '複製程式碼',
  /** Shown in the types dialog when there is neither a schema evaluation nor a result */
  'vista.export-types.empty': '請先擷取查詢，才能根據結果推導出類型。',
  /** Why the workspace schema could not be used for the types; shown with the result fallback */
  'vista.export-types.schema-error': '結構描述評估失敗：{{message}}',
  /** Note shown when the types were derived from the fetched result instead of the schema */
  'vista.export-types.source.result':
    '由於無法根據工作區結構描述評估此查詢，因此由擷取的結果推導而來。',
  /** Note shown when the types were derived from the workspace schema */
  'vista.export-types.source.schema': '由工作區結構描述推導而來，方式與 sanity typegen 相同。',
  /** Shown when the schema cannot be evaluated and the shown result belongs to an older query */
  'vista.export-types.stale-result':
    '顯示的結果是針對不同的查詢或參數擷取的。請先擷取目前的查詢，才能根據結果推導出類型。',
  /** Title of the dialog exporting TypeScript types for the result */
  'vista.export-types.title-typescript': '匯出 TypeScript',
  /** Title of the dialog exporting a Zod schema for the result */
  'vista.export-types.title-zod': '匯出 Zod',
  /** Button of a library function the query does not declare, which declares it at the top */
  'vista.functions.add': '新增至查詢',
  /** Shown on a library function the query declares the same way */
  'vista.functions.declared': '在此查詢中',
  /** Lint action on a call of a library function the query does not declare */
  'vista.functions.editor.add-from-library': '宣告它',
  /** Note in a function's hover documentation: the API version it needs */
  'vista.functions.editor.api-version': '需要 API 版本 {{version}} 或更高版本',
  /** Detail of a completion for a custom function the query declares */
  'vista.functions.editor.completion-declared': '在此查詢中',
  /** Detail of a completion for a library function, which declares it too */
  'vista.functions.editor.completion-library': '來自您的函式庫',
  /** Note in the hover documentation of a custom function the query declares */
  'vista.functions.editor.declared-on': '自訂函式，於第 {{line}} 行宣告',
  /** Note in the hover documentation of the functions that only work in delta mode */
  'vista.functions.editor.delta-only':
    '僅適用於差異模式，webhook 與 Sanity Functions 會在此模式下執行其篩選器',
  /** Button over a selected projection in the query editor, turning it into a custom function */
  'vista.functions.editor.extract': '擷取為函式',
  /** Note in the hover documentation of a library function the query does not declare */
  'vista.functions.editor.in-library': '在您的函式庫中，但未在此查詢中宣告',
  /** Link at the end of a built-in function's hover documentation */
  'vista.functions.editor.reference': 'GROQ 函數參考文件',
  /** Explanation under the library heading in the Functions panel */
  'vista.functions.library.description':
    '保留在此瀏覽器中，供專案的每個資料集使用。自動完成會提供這些函數，而程式碼檢查則會建議將查詢呼叫宣告為函數。',
  /** Shown in the Functions panel while the library is empty */
  'vista.functions.library.empty': '儲存查詢宣告的函數，以便在其他查詢中使用。',
  /** Heading of the functions library in the Functions panel */
  'vista.functions.library.title': '函數庫',
  /** Shown in the Functions panel while the query declares no custom functions */
  'vista.functions.query.empty':
    '在查詢頂部宣告自訂函數，或將游標放在投影中（例如 author->{name}），然後按下編輯器上方的擷取按鈕（{{shortcut}}）。',
  /** Heading of the functions the query declares in the Functions panel */
  'vista.functions.query.title': '在此查詢中',
  /** Removes a function from the library */
  'vista.functions.remove': '從函數庫中移除',
  /** Button of a library function the query declares differently, which puts the library's version in */
  'vista.functions.replace': '在查詢中取代',
  /** Accessible name of a declared function in the Functions panel, which selects it in the editor */
  'vista.functions.reveal': '在編輯器中顯示 {{name}}',
  /** Button of a function the query declares that is not in the library yet */
  'vista.functions.save': '儲存至函數庫',
  /** Shown on a function the query declares the way the library has it */
  'vista.functions.saved': '已儲存',
  /** Button of a function the query declares differently from the library's version */
  'vista.functions.update': '更新函數庫',
  /** Button over the query editor that opens the bar writing a query from a description */
  'vista.generate.button': '產生查詢',
  /** Closes the generate query bar */
  'vista.generate.close': '關閉',
  /** Explanation under the generate query field */
  'vista.generate.description':
    'Sanity Agent Actions 會根據您的描述和文件類型撰寫 GROQ，而 Content Lake 會檢查每次嘗試；每次嘗試會使用一個 AI 額度。這會取代此分頁的查詢並執行；在編輯器中復原可恢復先前的查詢。',
  /** Shown when no query could be generated, above the reason */
  'vista.generate.failed': '無法產生查詢',
  /** Accessible label of the description field in the generate query bar */
  'vista.generate.label': '查詢應擷取什麼內容？',
  /** Opens the last rejected attempt, without running it, to fix it by hand */
  'vista.generate.open-anyway': '開啟上次的嘗試',
  /** Placeholder of the description field in the generate query bar */
  'vista.generate.placeholder': '最近的 10 位作者，先依姓氏排序，再依名字排序',
  /** Shown while the first attempt at a query is written */
  'vista.generate.progress': '正在撰寫查詢…',
  /** Shown while a rejected attempt is retried */
  'vista.generate.progress-retry': '正在修正查詢（第 {{attempt}} 次嘗試，共 {{max}} 次）…',
  /** Button generating the query */
  'vista.generate.submit': '產生',
  /** Badge on a history entry the API CDN answered */
  'vista.history.cdn': 'API CDN',
  /** Badge on a history entry the API CDN answered from its cache */
  'vista.history.cdn-cache-hit': 'CDN 快取命中',
  /** A history entry whose result differs from the previous result, which is no longer kept */
  'vista.history.changed': '已變更',
  /**
   * Toggle on a history entry that shows how its request and result differ from the previous
   * successful fetch
   */
  'vista.history.changes': '變更',
  /** Shown instead of the changes when they could not be loaded or rendered */
  'vista.history.changes-failed': '無法顯示變更。',
  /** Button retrying to show the changes of a history entry */
  'vista.history.changes-retry': '重試',
  /** Above the changes of a history entry: the fetch they are compared with */
  'vista.history.compared-with': '與 {{time}} 的擷取進行比較',
  /** Label of the diff of the GROQ params in a history entry's changes */
  'vista.history.diff.params': '參數',
  /** Label of the diff of the GROQ query in a history entry's changes */
  'vista.history.diff.query': '查詢',
  /** Instead of the query diff, when the two queries only differ in whitespace and line breaks */
  'vista.history.diff.query-formatting-only': '僅變更了格式',
  /** Label of the diff of the query result in a history entry's changes */
  'vista.history.diff.result': '結果',
  /**
   * Label of the diff of the request URL in a history entry's changes: the API host, version and
   * dataset, and options such as the perspective
   */
  'vista.history.diff.url': '請求網址',
  /** Empty state of the history panel */
  'vista.history.empty': '尚未擷取任何內容',
  /** Status label for a failed fetch in the history */
  'vista.history.failed': '失敗',
  /** Button putting the hidden fields back into the diff out of a history entry's changes */
  'vista.history.hide-hidden': '隱藏它們',
  /** Next to a history entry's changes: the fields the diff leaves out */
  'vista.history.hiding': '正在隱藏 {{fields}}',
  /** A history entry whose result only differs from the previous one in hidden fields */
  'vista.history.only-hidden-changed': '僅隱藏欄位有變更',
  /** History reason: a tab opened with a generated query fetched it */
  'vista.history.reason.generated': '產生的查詢',
  /** History reason: a link to the tool named a query URL, which opened in a tab and ran */
  'vista.history.reason.link': '已開啟連結',
  /** History reason: a live event matched the query's sync tags */
  'vista.history.reason.live': '即時更新',
  /** History reason: the live connection asked every client to refetch */
  'vista.history.reason.live-restart': '即時連線已重新啟動',
  /**
   * History reason: the Live fetch button was pressed, which fetches and then refetches
   * automatically
   */
  'vista.history.reason.live-start': '即時擷取已開始',
  /** History reason: a saved query was loaded into a tab that refetches automatically */
  'vista.history.reason.load': '已載入查詢',
  /** History reason: the fetch button was pressed */
  'vista.history.reason.manual': '擷取按鈕',
  /** History reason: mutations were applied from the Mutate panel */
  'vista.history.reason.mutation': '已套用變動',
  /** History reason: dataset, API version or perspective changed while refetching automatically */
  'vista.history.reason.options': '選項已變更',
  /** History reason: a query URL was pasted into the tab, which runs it */
  'vista.history.reason.paste': '已貼上網址',
  /** History reason: a tab that refetches automatically was opened again, or the studio reloaded */
  'vista.history.reason.resume': '自動重新擷取已恢復',
  /** History reason: the keyboard shortcut was used */
  'vista.history.reason.shortcut': '鍵盤快捷鍵',
  /** A history entry whose result is the same as the previous result, for a changed request */
  'vista.history.same-result': '結果相同',
  /** Button showing the hidden fields in a history entry's changes */
  'vista.history.show-hidden': '顯示它們',
  /** Next to a history entry's changes while the hidden fields are shown */
  'vista.history.showing-hidden': '顯示 {{fields}}，預設為隱藏',
  /** A history entry whose result, or the previous one, is too large to compare */
  'vista.history.too-large': '過大，無法比較',
  /** A history entry whose result is the same as the previous result */
  'vista.history.unchanged': '無變更',
  /** Shown in the Lint panel while the query has no lint findings */
  'vista.lint.empty':
    '沒有程式碼檢查結果。輸入查詢時，GROQ 程式碼檢查工具在此列出發現的問題；選擇一項即可在編輯器中選取它。',
  /** Where a lint finding sits in the query, shown under its message */
  'vista.lint.position': '第 {{line}} 行，第 {{column}} 欄',
  /** Severity badge of a lint finding */
  'vista.lint.severity.error': '錯誤',
  /** Severity badge of a lint finding */
  'vista.lint.severity.hint': '提示',
  /** Severity badge of a lint finding */
  'vista.lint.severity.info': '資訊',
  /** Severity badge of a lint finding */
  'vista.lint.severity.warning': '警告',
  /** Lint action writing the type, field or operator a schema finding suggests */
  'vista.lint.use-suggestion': '使用 {{suggestion}}',
  /** Badge shown while a tab refetches automatically */
  'vista.live.active': '即時',
  /** Button in the request column's action bar that fetches and then refetches automatically */
  'vista.live.button': '即時擷取',
  /** Tooltip of the Live button while automatic refetching is off */
  'vista.live.button.start': '擷取，並在結果中的文件變更時再次擷取',
  /** Tooltip of the Stop live button, while the tab refetches automatically */
  'vista.live.button.stop':
    '停止在結果中的文件變更時擷取。擷取仍會依需求執行，適用於不受任何文件變更影響的結果，例如 now()',
  /** Error shown when the live connection breaks */
  'vista.live.error': '即時更新已中斷連線：{{message}}',
  /** The Live fetch button while the tab refetches automatically, stopping it */
  'vista.live.stop': '停止即時更新',
  /** Button in the Mutate panel adding a mutation to the list */
  'vista.mutate.add': '新增變動',
  /** Adds a mutation creating a document, with the type of the result's first document */
  'vista.mutate.add.create': '建立文件',
  /** Adds a mutation deleting a document, its ID to fill in */
  'vista.mutate.add.delete': '刪除文件',
  /** Adds a mutation deleting the documents of the shown result */
  'vista.mutate.add.delete-result': '刪除結果中的文件',
  /** Adds a mutation patching a document, its ID to fill in */
  'vista.mutate.add.patch': '修補文件',
  /** Adds a mutation patching the documents of the shown result */
  'vista.mutate.add.patch-result': '修補結果中的文件',
  /** Button applying the mutations a dry run showed */
  'vista.mutate.apply': '套用至 {{dataset}}',
  /** Heading of the error shown when applying the mutations failed */
  'vista.mutate.apply-failed': '變異未被套用',
  /** Next to Apply while the mutations as they are have had no dry run */
  'vista.mutate.apply-needs-preview': '套用會傳送試執行所顯示的內容：請先執行一次。',
  /** Option giving array items without a _key one */
  'vista.mutate.auto-keys': '為沒有 _key 的陣列項目加入 _key',
  /** Under the option giving array items a _key */
  'vista.mutate.auto-keys.description': '工作室需要每個陣列項目都有一個 _key 才能編輯它。',
  /** Button showing a document's changes in the dry run */
  'vista.mutate.changes': '變更',
  /** Shown instead of a document's changes when they could not be loaded or rendered */
  'vista.mutate.changes-failed': '無法顯示變更。',
  /** Button retrying to show a document's changes */
  'vista.mutate.changes-retry': '重試',
  /** What the Mutate panel does */
  'vista.mutate.description':
    '以 Mutations API 所接受的格式，用清單撰寫變異：create、createOrReplace、createIfNotExists、delete 和 patch，依 ID 或 GROQ 查詢指定。試執行會顯示它們對每個文件的影響，而不會更動任何內容；然後「套用」會以你的帳戶將它們寫入 dataset，於單一交易中完成。',
  /** What the API says went wrong with one of the mutations */
  'vista.mutate.failure-item': '變異 {{index}}：{{message}}',
  /** Tooltip and accessible label of the button opening the generate mutations field */
  'vista.mutate.generate.button': '產生變異',
  /** Explanation under the generate mutations field */
  'vista.mutate.generate.description':
    'Sanity Agent Actions 會根據你的描述、結果中的文件及其類型來撰寫變異，而試執行會檢查每次嘗試；每次嘗試都會使用一個 AI 額度。它們會取代此處的變異，而復原可將其還原；在你套用之前，不會寫入任何內容。',
  /** Shown when no mutations could be generated, above the reason */
  'vista.mutate.generate.failed': '無法產生變異',
  /** Accessible label of the description field in the generate mutations bar */
  'vista.mutate.generate.label': '變異應該做什麼？',
  /** Placeholder of the description field in the generate mutations bar */
  'vista.mutate.generate.placeholder': '將結果中文件的標題改為 foobar',
  /** Shown while the first attempt at the mutations is written */
  'vista.mutate.generate.progress': '正在撰寫變異…',
  /** Shown while an attempt the dry run turned down is retried */
  'vista.mutate.generate.progress-retry': '正在修正變異（第 {{attempt}} 次嘗試，共 {{max}} 次）…',
  /** Under the dry run: the fields the diffs leave out */
  'vista.mutate.hiding': '變更省略了 {{fields}}，如同「歷史記錄」一樣。',
  /** Shown when the mutations are not valid JSON */
  'vista.mutate.invalid-json': '變異不是有效的 JSON：{{message}}',
  /** Shown when a mutation does not name exactly one thing to do */
  'vista.mutate.invalid-mutation':
    '變異 {{index}} 需要恰好指定 create、createOrReplace、createIfNotExists、delete 或 patch 其中之一。',
  /** Label of the mutations editor */
  'vista.mutate.mutations': '變異',
  /** The dry run touched no documents */
  'vista.mutate.no-documents': '變異未觸及任何文件。',
  /** Shown when the JSON is not a list of mutations */
  'vista.mutate.not-a-list': '請撰寫變異清單、單一變異，或含有變異清單的請求本文。',
  /** A document the mutations create */
  'vista.mutate.operation.create': '建立',
  /** A document the mutations delete */
  'vista.mutate.operation.delete': '刪除',
  /** A document the mutations touch without changing its content */
  'vista.mutate.operation.none': '無變更',
  /** A document the mutations change */
  'vista.mutate.operation.update': '更新',
  /** Button running the mutations as a dry run */
  'vista.mutate.preview': '試運行',
  /** Heading of the error shown when the dry run failed */
  'vista.mutate.preview-failed': '試運行失敗',
  /** Heading of the dry run's outcome */
  'vista.mutate.preview-heading': '試運行',
  /** Shown over a dry run made for other mutations, another dataset or other options */
  'vista.mutate.stale': '在此次試運行後，變異、資料集或選項已變更。請重新執行以套用變更。',
  /** How many documents the dry run changes and leaves as they are */
  'vista.mutate.summary': '已變更：{{changed}} · 未變更：{{unchanged}}',
  /** In the Network panel: whether a cache answered the query */
  'vista.network.cache': '快取',
  /** The API CDN answered from its cache */
  'vista.network.cache.hit': '命中',
  /** Under the details of a CDN cache hit */
  'vista.network.cache.hit-explained':
    'CDN 以其快取的回應（來自您附近的位置）作出回覆；查詢並未到達 API。',
  /** The API CDN answered with a response this session had not seen */
  'vista.network.cache.miss': '未命中，就此工作階段所能判斷而言',
  /** The API answered, which caches nothing */
  'vista.network.cache.none': '無，API 對每個請求都提供最新內容',
  /** Shown in the Network panel while there is no response */
  'vista.network.empty': '取得查詢以查看是哪個端點回應了它、是否來自快取，以及在哪裡執行。',
  /** In the Network panel: the endpoint that answered */
  'vista.network.endpoint': '回應者',
  /** The live API answered */
  'vista.network.endpoint.api': 'API',
  /** The API CDN answered */
  'vista.network.endpoint.cdn': 'API CDN',
  /** In the Network panel: the region the query ran in */
  'vista.network.region': '查詢執行地點',
  /** The response did not say where the query ran */
  'vista.network.region.unknown': '未回報',
  /** In the Network panel: the round trip and the time on the server */
  'vista.network.timing': '時間',
  /** The round trip and the server's time for the query, in milliseconds */
  'vista.network.timing.value': '往返 {{e2e}} 毫秒，伺服器端 {{server}} 毫秒',
  /** In the Network panel: the trace of the request, for Sanity support */
  'vista.network.trace': '追蹤 ID',
  /** Hint in the Network panel while queries go to the API */
  'vista.network.use-cdn-hint': '在選項中開啟「使用 API CDN」以透過 CDN 傳送查詢。',
  /** Label of the browser's marker on the Network panel's globe, placed from its time zone */
  'vista.network.you': '您',
  /** Hint under the dataset field while the tab follows the workspace's dataset */
  'vista.options.dataset.follows-workspace': '跟隨工作區',
  /** Button that pins the current dataset so the tab stops following the workspace */
  'vista.options.dataset.pin': '釘選資料集',
  /** Hint under the dataset field while a dataset is pinned */
  'vista.options.dataset.pinned': '已釘選；工作區可能使用其他資料集',
  /** Button that makes the tab follow the workspace's dataset again */
  'vista.options.dataset.use-workspace': '使用工作區的資料集',
  /** Label for the "Include content source map" switch */
  'vista.options.include-source-map': '包含內容來源對應',
  /** Description for the "Include content source map" switch */
  'vista.options.include-source-map.description':
    '在回應中加入 resultSourceMap，顯示於內容來源對應分頁中。',
  /** Perspective option following the studio navbar; the name is the release, published or drafts */
  'vista.options.perspective.global': '全域（{{name}}）',
  /** Label of the switch that sends queries to the API CDN */
  'vista.options.use-cdn': '使用 API CDN',
  /** Note under the API CDN switch while the studio signs in with a cookie */
  'vista.options.use-cdn.anonymous':
    '此工作室以 Cookie 讓您登入，而 API CDN 永遠不會收到此 Cookie：它會以匿名訪客的身份回應，顯示公開資料集所呈現的內容。',
  /**
   * Why the API CDN is asked for but not used: the perspective is the one the perspective
   * select shows, such as "Global (drafts)"
   */
  'vista.options.use-cdn.blocked':
    'API CDN 不提供草稿或發行版，因此以 {{perspective}} 視角的查詢會傳送至 API。使用已發布或原始視角時則會使用 CDN。',
  /** Heading of the notice shown while the perspective keeps queries off the API CDN */
  'vista.options.use-cdn.blocked.title': '查詢傳送至 API，而非 CDN',
  /** Description of the API CDN switch */
  'vista.options.use-cdn.description':
    '將查詢傳送至 API CDN，如同 @sanity/client 中的 useCdn: true，適用於已發布與原始視角：草稿與發行版一律傳送至 API。其回應最多快取一分鐘；網路面板會顯示回應是否來自快取。',
  /** Button in the API CDN notice switching the tab to the published perspective */
  'vista.options.use-cdn.use-published': '使用已發布視角',
  /** Label of the variant field */
  'vista.options.variant-label': '變體',
  /** Variant option sending the navbar's variant, named */
  'vista.options.variant.global': '全域（{{name}}）',
  /** Variant option sending the navbar's variant while none is selected there */
  'vista.options.variant.global-none': '全域（未選取）',
  /** Variant option sending no variant */
  'vista.options.variant.none': '無',
  /** Accessible label for collapsing a bottom panel */
  'vista.panel.collapse': '收合面板',
  /** Label of the Delta tab in the response panel, which tests the query in delta mode */
  'vista.panel.delta': '差異',
  /** Accessible label for expanding a bottom panel */
  'vista.panel.expand': '展開面板',
  /** Label of the "Explain" tab in the response panel: the query plan and an explanation */
  'vista.panel.explain': '說明',
  /** Label of the Functions tab in the response panel */
  'vista.panel.functions': '函式',
  /** Label of the "History" tab in the response panel */
  'vista.panel.history': '歷史記錄',
  /** Label of the "Lint" tab in the response panel, listing the query's lint findings */
  'vista.panel.lint': 'Lint',
  /** Label of the Mutate tab in the response panel, which runs and applies mutations */
  'vista.panel.mutate': '變更',
  /** Label of the Network tab in the response panel */
  'vista.panel.network': '網路',
  /** Label of the "Options" panel in the request column */
  'vista.panel.options': '選項',
  /** Label of the "Response" tab in the response panel */
  'vista.panel.response': '回應',
  /** Label of the "Content Source Map" tab in the response panel */
  'vista.panel.source-map': '內容來源對應',
  /** Button adding an item to a list param in the params form */
  'vista.params-form.add-item': '新增項目',
  /** Placeholder of a params form field that takes any JSON value */
  'vista.params-form.any-placeholder': '任何 JSON 值；其他文字將作為字串傳送',
  /** Shown in the params form when the query uses no params */
  'vista.params-form.empty': '此查詢未使用任何參數。其中每個 $name 都會在此處對應一個欄位。',
  /** Shown in the params form while the params JSON cannot be parsed */
  'vista.params-form.invalid-json': '參數不是有效的 JSON。請在 JSON 檢視中修正後，才能在此編輯。',
  /** A boolean param's value is not true or false; it is sent anyway */
  'vista.params-form.invalid.boolean': '不是 true 或 false；將以 {{value}} 傳送',
  /** A document type param's value is not a document type of the workspace; it is sent anyway */
  'vista.params-form.invalid.document-type': '不是此工作區中的文件類型；仍會傳送',
  /** A whole number param (a slice bound) holds a fraction */
  'vista.params-form.invalid.integer': '不是切片所需的整數',
  /** A list param's value is not a list; it is sent anyway */
  'vista.params-form.invalid.list': '不是清單；將以 {{value}} 傳送',
  /** A number param's value is not a number; it is sent anyway */
  'vista.params-form.invalid.number': '不是數字；將以文字傳送',
  /** A param's value is not one of the values the schema allows; it is sent anyway */
  'vista.params-form.invalid.option': '不是已知值之一；仍會傳送',
  /** A text param's value is not text; it is sent anyway */
  'vista.params-form.invalid.string': '不是文字；將以 {{value}} 傳送',
  /** Accessible label of an item input of a list param in the params form */
  'vista.params-form.item-label': '${{name}}，項目 {{index}}',
  /** Placeholder of an item input of a list param in the params form */
  'vista.params-form.item-placeholder': '項目',
  /** Under a params form field whose param has no value */
  'vista.params-form.missing': '未設定：在設定值之前查詢將失敗',
  /** Shown in the params form when the workspace schema could not be read */
  'vista.params-form.no-schema': '類型僅來自查詢本身：無法讀取工作區結構描述。',
  /** Placeholder of a params form field without a value, and the unset choice of a boolean */
  'vista.params-form.not-set': '未設定',
  /** Button setting a date and time param to the current time */
  'vista.params-form.now': '現在',
  /** Button removing a param the query does not use from the params */
  'vista.params-form.remove': '移除',
  /** Accessible label of the button removing an item from a list param */
  'vista.params-form.remove-item': '移除項目',
  /** Shown in the params form when the query does not parse */
  'vista.params-form.syntax-error': '此查詢無法解析，因此其參數將不含類型列出。',
  /** Type hint of a params form field: any JSON value */
  'vista.params-form.type.any': '任何 JSON 值',
  /** Type hint of a params form field: true or false */
  'vista.params-form.type.boolean': 'true 或 false',
  /** Type hint of a params form field: an ISO 8601 date and time */
  'vista.params-form.type.datetime': '日期與時間（ISO 8601）',
  /** Type hint of a params form field: a document ID */
  'vista.params-form.type.document-id': '文件 ID',
  /** Type hint of a params form field: one of the workspace's document types */
  'vista.params-form.type.document-type': '文件類型',
  /** Type hint of a params form field: a whole number */
  'vista.params-form.type.integer': '整數',
  /** Type hint of a params form field: a list of values */
  'vista.params-form.type.list': '清單，每個項目為{{type}}',
  /** Type hint of a params form field: a number */
  'vista.params-form.type.number': '數字',
  /** Type hint of a params form field: text */
  'vista.params-form.type.string': '文字',
  /** Heading of the params the query does not use, listed in the params form */
  'vista.params-form.unused': '查詢未使用',
  /** Before the expressions that use a param, in the params form */
  'vista.params-form.used-in': '使用於',
  /** Value announced for the params resize handle while the panel sizes itself to its content */
  'vista.params.fit-height': '已依內容調整大小，{{height}} 像素',
  /** Accessible label and tooltip of the handle for resizing the params panel */
  'vista.params.resize': '調整參數大小：拖曳或使用方向鍵；按兩下或按 Enter 鍵以重新依內容調整大小',
  /** Tab showing the params as a form inferred from the query */
  'vista.params.view.form': '表單',
  /** Tab showing the params as JSON */
  'vista.params.view.json': 'JSON',
  /** Accessible label of the tabs switching how the params are edited */
  'vista.params.view.label': '編輯參數方式',
  /** Toast shown after a query URL was pasted and loaded into the tab */
  'vista.paste.parsed': '已從貼上的網址載入查詢',
  /** Toast shown when a pasted URL used a content variant the tab does not send */
  'vista.paste.unavailable-variant':
    '貼上的網址使用了「{{variant}}」變體；請在導覽列中選取該變體，以使用它執行查詢。',
  /** Toast shown when the dataset of a pasted URL is not available here */
  'vista.paste.unknown-dataset':
    '貼上的網址中的資料集「{{dataset}}」在此處無法使用，將保留目前的資料集。',
  /** Toast shown when the perspective of a pasted URL cannot be used */
  'vista.paste.unsupported-perspective': '貼上的網址中的視角在此處不受支援，將保留目前的視角。',
  /** Toast shown when a pasted URL used a content variant, but this workspace has variants switched off */
  'vista.paste.variants-disabled':
    '貼上的網址使用了「{{variant}}」變體；此工作區已關閉變體功能，因此查詢將在不使用該變體的情況下執行。',
  /** Accessible label for the query actions menu */
  'vista.query.actions': '查詢動作',
  /** Tooltip when automatic refetching is not available for the API version */
  'vista.query.auto-refetch.unsupported': '自動重新擷取需要 API 版本 v2021-03-25 或更新版本。',
  /** Toast shown after the query was copied */
  'vista.query.copied': '查詢已複製到剪貼簿',
  /** Menu item copying the query text */
  'vista.query.copy': '複製查詢',
  /** Menu item opening the export query dialog */
  'vista.query.export': '匯出查詢…',
  /** Menu item reformatting the query */
  'vista.query.prettify': '美化查詢',
  /** Toast shown when the query could not be reformatted */
  'vista.query.prettify.failed': '無法美化查詢',
  /** Menu item saving the query to the personal saved queries */
  'vista.query.save': '儲存查詢',
  /** The Fetch button while a fetch is running, stopping it; paired with Stop live */
  'vista.query.stop': '停止',
  /** Tooltip and accessible label of the Stop button, which stops the running fetch only */
  'vista.query.stop.description': '停止擷取',
  /** Explanation in the settings section about the redesigned experience */
  'vista.redesign.settings.description':
    '您正在使用重新設計的 Vision 工具。切換回去會在此瀏覽器中保留您的分頁與設定，供下次嘗試時使用。',
  /** Title of the settings section about the redesigned experience */
  'vista.redesign.settings.title': '重新設計的 Vision（測試版）',
  /** Sidebar item and settings button that return to the classic Vision tool */
  'vista.redesign.switch-to-classic': '切換至傳統版 Vision',
  /** Toast button that switches to the redesigned tool */
  'vista.redesign.toast.accept': '立即嘗試',
  /** Body of the toast inviting users of the classic tool to try the redesign */
  'vista.redesign.toast.description':
    '查詢分頁、即時重新擷取、回應詳情與匯出功能。您可以隨時切換回去。',
  /** Toast button that hides the invitation */
  'vista.redesign.toast.dismiss': '暫不需要',
  /** Title of the toast inviting users of the classic tool to try the redesign */
  'vista.redesign.toast.title': '試試重新設計的 Vision',
  /** Button next to Fetch in the classic tool that switches to the redesigned one */
  'vista.redesign.try': '試試新設計',
  /** Tooltip of the button next to Fetch in the classic tool that switches to the redesign */
  'vista.redesign.try.description':
    '切換至重新設計的 Vision（測試版）。您可以隨時從側邊欄切換回去。',
  /** Empty state of the response panel before anything was fetched */
  'vista.response.empty': '尚未擷取任何內容',
  /** Label for the payload size in the response tab */
  'vista.response.payload-size': '酬載大小',
  /** Label for the sync tags in the response tab */
  'vista.response.sync-tags': '同步標籤',
  /** Shown when the response carried no sync tags */
  'vista.response.sync-tags.none': '回應中沒有同步標籤',
  /** Accessible label for the result actions menu */
  'vista.result.actions': '結果動作',
  /** Toast shown after the result was copied */
  'vista.result.copied': '結果已複製到剪貼簿',
  /** Toast shown after a value in the result was copied, with its path such as [0].author.name */
  'vista.result.copied-value': '已複製 {{path}}',
  /** Menu item and button copying the result as JSON */
  'vista.result.copy': '複製結果',
  /** Button next to each property in the result tree, copying its value */
  'vista.result.copy-value': '複製值',
  /** Empty state of the result view */
  'vista.result.empty': '執行查詢以在此處查看結果',
  /** Button exporting the result as CSV */
  'vista.result.export-csv': '匯出 CSV',
  /** Button exporting the result as JSON */
  'vista.result.export-json': '匯出 JSON',
  /** Menu item opening the TypeScript export dialog */
  'vista.result.export-typescript': '匯出 TypeScript…',
  /** Menu item opening the Zod export dialog */
  'vista.result.export-zod': '匯出 Zod…',
  /** Button on a graph node hiding the objects and arrays it holds */
  'vista.result.graph.collapse': '隱藏其內容',
  /** Button fitting the whole graph in view */
  'vista.result.graph.fit': '符合檢視範圍',
  /** Accessible label of the graph, saying how to move around in it */
  'vista.result.graph.label':
    '結果圖表：拖曳以移動，捲動以縮放；取得焦點時，方向鍵可移動，+ 和 - 可縮放，0 可符合檢視範圍',
  /** Ends the note on a graph that leaves part of this result out */
  'vista.result.graph.left-out-hint': '樹狀和 JSON 檢視會顯示全部內容。',
  /** Note on a graph of a result with more objects and arrays than it draws */
  'vista.result.graph.node-limit': '僅繪製前 {{nodes}} 個物件和陣列。',
  /**
   * Note on a graph whose objects or arrays have more entries than it lists; the nodes are the
   * ones in this result, each with its number of entries
   */
  'vista.result.graph.partial': '{{nodes}} 僅列出前 {{rows}} 個項目。',
  /** An object or array in the note, with how many entries it has (always more than listed) */
  'vista.result.graph.partial.node': '{{name}}（{{entries}} 個項目）',
  /** Title of the graph node of the result itself */
  'vista.result.graph.root': '結果',
  /** Button zooming into the graph */
  'vista.result.graph.zoom-in': '放大',
  /** Button zooming out of the graph */
  'vista.result.graph.zoom-out': '縮小',
  /** Tab showing the result as a graph of its objects and arrays */
  'vista.result.view.graph': '圖表',
  /** Tab showing the result as indented JSON text, to select and copy from */
  'vista.result.view.json': 'JSON',
  /** Accessible label of the tabs that switch how the result shows */
  'vista.result.view.label': '結果檢視',
  /** Tab showing the result as a tree to browse */
  'vista.result.view.tree': '樹狀',
  /** Empty state of the saved queries panel */
  'vista.saved.empty': '尚無已儲存的查詢。使用 + 按鈕儲存目前的查詢。',
  /** Empty state of a query list when the search matches nothing */
  'vista.saved.empty-search': '沒有符合您搜尋的查詢',
  /** Menu item loading a saved query into the active tab */
  'vista.saved.load-in-current-tab': '載入目前分頁',
  /** Menu item opening a saved query in a new tab */
  'vista.saved.open-in-new-tab': '在新分頁中開啟',
  /** Menu item renaming a saved query */
  'vista.saved.rename': '重新命名',
  /** Accessible label for the button saving the current query */
  'vista.saved.save-current': '儲存目前的查詢',
  /** Toast shown when an opened saved query used a content variant the tab does not send */
  'vista.saved.unavailable-variant':
    '此已儲存的查詢使用了「{{variant}}」變體；請在導覽列中選取該變體以使用它執行查詢。',
  /** Toast shown when an opened saved query names a dataset that is not available here */
  'vista.saved.unknown-dataset':
    '此已儲存查詢的資料集「{{dataset}}」在此處無法使用，將保留目前的資料集。',
  /** Toast shown when an opened saved query used a content variant, but this workspace has variants switched off */
  'vista.saved.variants-disabled':
    '此已儲存的查詢使用了「{{variant}}」變體；此工作區已關閉變體功能，因此查詢將在不使用變體的情況下執行。',
  /** Button in the settings dialog that clears the stored state */
  'vista.settings.clear-storage': '清除儲存空間',
  /** Confirmation button for clearing the storage */
  'vista.settings.clear-storage.confirm': '是,清除儲存空間',
  /** Explanation of what clearing the storage does */
  'vista.settings.clear-storage.description':
    '刪除您個人儲存的查詢與函式庫,重設此瀏覽器中開啟的分頁與這些預設值,並回到傳統版 Vision 工具。共用的查詢將會保留。',
  /** Toast shown when the saved queries could not be cleared */
  'vista.settings.clear-storage.error': '無法清除已儲存的查詢',
  /** Toast shown after the storage was cleared */
  'vista.settings.clear-storage.success': '儲存空間已清除',
  /** Explanation at the top of the settings dialog */
  'vista.settings.description': '新分頁的預設值。已開啟的分頁會保留自己的選項。',
  /** Explains the setting listing the fields left out of History diffs */
  'vista.settings.history-diff.description':
    '每行一個欄位路徑。路徑會在結果的任何深度進行比對,因此 _rev 會隱藏其中每個文件的修訂版本。但每個差異比較仍可顯示它們。',
  /** Button restoring the default fields left out of History diffs */
  'vista.settings.history-diff.reset': '重設為預設值',
  /** Label of the setting listing the fields left out of History diffs */
  'vista.settings.history-diff.title': '在歷史差異比較中隱藏的欄位',
  /** Title of the settings dialog */
  'vista.settings.title': '設定',
  /** Empty state of the shared queries panel */
  'vista.shared.empty': '尚無共用的查詢。分享一個已儲存的查詢,讓使用此資料集的所有人都能使用它。',
  /** Shortcut description: close dialogs and menus */
  'vista.shortcuts.close': '關閉對話框與選單',
  /** Shortcut that lists the functions matching the name being typed in the query editor */
  'vista.shortcuts.complete': '自動完成函式名稱',
  /** Shortcut description: copy the query */
  'vista.shortcuts.copy-query': '複製查詢',
  /** Shortcut that turns the selected projection, or the one around the cursor, into a custom function */
  'vista.shortcuts.extract-function': '將游標所在的投影擷取為函式',
  /** Shortcut description: run the query */
  'vista.shortcuts.fetch': '擷取查詢',
  /** Shortcut description: move the cursor to the next lint finding in the query editor */
  'vista.shortcuts.next-finding': '跳至下一個檢查結果',
  /** Shortcut description: reformat the query */
  'vista.shortcuts.prettify': '美化查詢',
  /** Title of the keyboard shortcuts dialog */
  'vista.shortcuts.title': '鍵盤快速鍵',
  /** Sidebar toggle: show icons only */
  'vista.sidebar.collapse': '收合側邊欄',
  /** Sidebar toggle: show labels next to the icons */
  'vista.sidebar.expand': '展開側邊欄',
  /** Accessible label for the sidebar navigation */
  'vista.sidebar.label': 'Vista 側邊欄',
  /** Sidebar item and drawer title for personal saved queries */
  'vista.sidebar.saved-queries': '已儲存的查詢',
  /** Sidebar item opening the settings dialog */
  'vista.sidebar.settings': '設定',
  /** Sidebar item and drawer title for shared queries */
  'vista.sidebar.shared-queries': '共用的查詢',
  /** Sidebar item opening the keyboard shortcuts dialog */
  'vista.sidebar.shortcuts': '鍵盤快速鍵',
  /** Empty state of the content source map panel */
  'vista.source-map.empty':
    '回應中沒有內容來源對應表。請在「選項」中開啟「包含內容來源對應表」後再試一次。',
  /** Accessible label of the divider between the result and the response details panel */
  'vista.split.bottom-panel':
    '調整回應詳細資料面板的大小：拖曳或使用方向鍵；Home 和 End 鍵可移至邊界，Enter 鍵可重設',
  /** Accessible label of the divider between the request and response panes */
  'vista.split.request-response':
    '調整要求與回應窗格的大小：拖曳或使用方向鍵；Home 和 End 鍵可移至邊界，Enter 鍵可重設',
  /** Accessible label for the button closing a query tab */
  'vista.tabs.close-tab': '關閉分頁',
  /** Accessible label for the list of query tabs */
  'vista.tabs.label': '查詢分頁',
  /** Accessible label for the button opening a new query tab */
  'vista.tabs.new-tab': '新增分頁',
  /** Placeholder of the input renaming a tab */
  'vista.tabs.title-placeholder': '分頁標題',
  /** Title of a tab whose query is still empty */
  'vista.tabs.untitled': '未命名查詢',
  /** Title the browser shows for the WebMCP tool that lints a query */
  'vista.webmcp.check-query': '在 Vision 中檢查 GROQ 查詢',
  /** Title the browser shows for the WebMCP tool that describes the workspace schema */
  'vista.webmcp.describe-schema': '在 Vision 中描述結構描述',
  /** Title the browser shows for the WebMCP tool that returns a query plan */
  'vista.webmcp.explain-query': '在 Vision 中解釋 GROQ 查詢',
  /** Title the browser shows for the WebMCP tool that reads the active Vision tab */
  'vista.webmcp.get-state': '讀取開啟的 Vision 分頁',
  /** Title the browser shows for the WebMCP tool that opens a query in a new tab */
  'vista.webmcp.open-query': '在 Vision 中開啟 GROQ 查詢',
  /** Title the browser shows for the WebMCP tool that runs mutations as a dry run */
  'vista.webmcp.preview-mutations': '在 Vision 中預覽變更',
  /** Title the browser shows for the WebMCP tool that runs a query */
  'vista.webmcp.run-query': '在 Vision 中執行 GROQ 查詢',
})
