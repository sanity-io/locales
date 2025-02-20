import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Label for action "Copy to clipboard", tied to the "Query URL" field. Also used for accessibility purposes on button */
  'action.copy-url-to-clipboard': '複製到剪貼簿',
  /** Label for stopping an ongoing listen operation */
  'action.listen-cancel': '停止',
  /** Label for setting up a listener */
  'action.listen-execute': '監聽',
  /** Label for cancelling an ongoing query */
  'action.query-cancel': '取消',
  /** Label for executing the query, eg doing a fetch */
  'action.query-execute': '提取',

  /**
   * Some features has a "New" label indicating that the feature was recently introduced.
   * This defines what the text of that label is. Keep it short and sweet.
   */
  'label.new': '新登場',

  /** Error message for when the "Params" input are not a valid json */
  'params.error.params-invalid-json': '參數不是有效的JSON',
  /** Label for "Params" (parameters) editor/input */
  'params.label': '參數',

  /** Label for 'Column' indicator when there is an error within the query */
  'query.error.column': '列',
  /** Label for 'Line' indicator when there is an error within the query */
  'query.error.line': '行',
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

  /** Label for the "API version" dropdown in settings */
  'settings.api-version-label': 'API 版本',
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
  /** Title for popover that explains what "Perspectives" are */
  'settings.perspectives.title': '視角',
})
