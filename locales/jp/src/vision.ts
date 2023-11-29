import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /**
   * Context: "Vision" is a Sanity studio plugin which allows users to execute GROQ-queries
   * against their dataset and see the results in different ways. It is often used to explore
   * a dataset, debug queries and get a better understanding of the data.
   */

  /**
   * Some features has a "New" label indicating that the feature was recently introduced.
   * This defines what the text of that label is. Keep it short and sweet.
   */
  'label.new': '新規',

  /** --- Settings --- */

  /** Label for the "Dataset" dropdown in vision settings */
  'settings.dataset-label': 'データセット',

  /** Label for the "API version" dropdown in settings */
  'settings.api-version-label': 'APIバージョン',

  /** Label for the "other" versions within the "API version" dropdown */
  'settings.other-api-version-label': 'その他',

  /** Label for the "Custom API version" input in settings, shown when "other" is chosen as API version */
  'settings.custom-api-version-label': 'カスタムAPIバージョン',

  /** Error label for when the API version in 'Custom API version' input is invalid */
  'settings.error.invalid-api-version': '無効なAPIバージョン',

  /**
   * Label for the "Perspective" dropdown in vision settings
   * @see {@link https://www.sanity.io/docs/perspectives}
   */
  'settings.perspective-label': 'パースペクティブ',

  /** Title for popover that explains what "Perspectives" are */
  'settings.perspectives.title': 'パースペクティブ',

  /** Description for popover that explains what "Perspectives" are */
  'settings.perspectives.description':
    'パースペクティブを使用すると、異なる"ビュー"に対してクエリを実行して、データセットのコンテンツを異なる方法で見ることができます',
  /** Call to action to read the docs related to "Perspectives" */
  'settings.perspectives.action.docs-link': 'ドキュメントを読む',

  /** --- Query editor --- */

  /** Label for "Query" editor/input */
  'query.label': 'クエリ',

  /** Label for 'Line' indicator when there is an error within the query */
  'query.error.line': '行',

  /** Label for 'Column' indicator when there is an error within the query */
  'query.error.column': '列',

  /** Label for the "Query URL" field, shown after executing a query, and allows for copying */
  'query.url': 'クエリのURL',

  /** --- Params editor --- */

  /** Label for "Params" (parameters) editor/input */
  'params.label': 'パラメータ',

  /** Error message for when the "Params" input are not a valid json */
  'params.error.params-invalid-json': 'パラメータが有効なJSONではありません',

  /** --- Results view/explorer --- */

  /** Label for "Result" explorer/view */
  'result.label': '結果',

  /** Label for "Execution time" information of the fetched query */
  'result.execution-time-label': '実行時間',

  /** Label for "End to End time" information of the fetched query */
  'result.end-to-end-time-label': 'エンドツーエンド時間',

  /** "Not applicable" message for when there is no Execution time or End to End time information
   * available for the query (eg when the query has not been executed, or errored) */
  'result.timing-not-applicable': '該当なし',

  /** --- Actions -- */

  /** Label for executing the query, eg doing a fetch */
  'action.query-execute': 'フェッチ',

  /** Label for cancelling an ongoing query */
  'action.query-cancel': 'キャンセル',

  /** Label for setting up a listener */
  'action.listen-execute': 'リッスン' /** Label for stopping an ongoing listen operation */,
  'action.listen-cancel': '停止',

  /** Label for action "Copy to clipboard", tied to the "Query URL" field. Also used for accessibility purposes on button */
  'action.copy-url-to-clipboard': 'クリップボードにコピー',
})
