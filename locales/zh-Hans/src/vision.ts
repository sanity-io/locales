import { removeUndefinedLocaleResources } from "sanity";

export default removeUndefinedLocaleResources({
  /** Label for action "Copy to clipboard", tied to the "Query URL" field. Also used for accessibility purposes on button */
  "action.copy-url-to-clipboard": "复制到剪贴板",
  /** Label for stopping an ongoing listen operation */
  "action.listen-cancel": "停止",
  /** Label for setting up a listener */
  "action.listen-execute": "监听",
  /** Label for cancelling an ongoing query */
  "action.query-cancel": "取消",
  /** Label for executing the query, eg doing a fetch */
  "action.query-execute": "获取",

  /**
   * Some features has a "New" label indicating that the feature was recently introduced.
   * This defines what the text of that label is. Keep it short and sweet.
   */
  "label.new": "新",

  /** Error message for when the "Params" input are not a valid json */
  "params.error.params-invalid-json": "参数不是有效的JSON",
  /** Label for "Params" (parameters) editor/input */
  "params.label": "参数",

  /** Label for 'Column' indicator when there is an error within the query */
  "query.error.column": "列",
  /** Label for 'Line' indicator when there is an error within the query */
  "query.error.line": "行",
  /** Label for "Query" editor/input */
  "query.label": "查询",
  /** Label for the "Query URL" field, shown after executing a query, and allows for copying */
  "query.url": "查询 URL",

  /** Label for "End to End time" information of the fetched query */
  "result.end-to-end-time-label": "端到端",
  /** Label for "Execution time" information of the fetched query */
  "result.execution-time-label": "执行",
  /** Label for "Result" explorer/view */
  "result.label": "结果",
  /**
   * "Not applicable" message for when there is no Execution time or End to End time information
   * available for the query (eg when the query has not been executed, or errored)
   */
  "result.timing-not-applicable": "不适用",

  /** Label for the "API version" dropdown in settings */
  "settings.api-version-label": "API 版本",
  /** Label for the "Custom API version" input in settings, shown when "other" is chosen as API version */
  "settings.custom-api-version-label": "自定义 API 版本",
  /** Label for the "Dataset" dropdown in vision settings */
  "settings.dataset-label": "数据集",
  /** Error label for when the API version in 'Custom API version' input is invalid */
  "settings.error.invalid-api-version": "无效的 API 版本",
  /** Label for the "other" versions within the "API version" dropdown */
  "settings.other-api-version-label": "其他",
  /**
   * Label for the "Perspective" dropdown in vision settings
   * @see {@link https://www.sanity.io/docs/perspectives}
   */
  "settings.perspective-label": "视角",
  /** Call to action to read the docs related to "Perspectives" */
  "settings.perspectives.action.docs-link": "阅读文档",
  /** Description for popover that explains what "Perspectives" are */
  "settings.perspectives.description":
    "视角允许您的查询针对数据集中不同的“视图”运行",
  /** Title for popover that explains what "Perspectives" are */
  "settings.perspectives.title": "视角",
});
