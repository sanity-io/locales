import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Label for action "Copy to clipboard", tied to the "Query URL" field. Also used for accessibility purposes on button */
  'action.copy-url-to-clipboard': 'クリップボードにコピー',
  /** Label for stopping an ongoing listen operation */
  'action.listen-cancel': '停止',
  /** Label for setting up a listener */
  'action.listen-execute': 'リッスン',
  /** Label for cancelling an ongoing query */
  'action.query-cancel': 'キャンセル',
  /** Label for executing the query, eg doing a fetch */
  'action.query-execute': 'フェッチ',

  /**
   * Some features has a "New" label indicating that the feature was recently introduced.
   * This defines what the text of that label is. Keep it short and sweet.
   */
  'label.new': '新規',

  /** Error message for when the "Params" input are not a valid json */
  'params.error.params-invalid-json': 'パラメータが有効なJSONではありません',
  /** Label for "Params" (parameters) editor/input */
  'params.label': 'パラメータ',

  /** Label for 'Column' indicator when there is an error within the query */
  'query.error.column': '列',
  /** Label for 'Line' indicator when there is an error within the query */
  'query.error.line': '行',
  /** Label for "Query" editor/input */
  'query.label': 'クエリ',
  /** Label for the "Query URL" field, shown after executing a query, and allows for copying */
  'query.url': 'クエリのURL',

  /** Label for "End to End time" information of the fetched query */
  'result.end-to-end-time-label': 'エンドツーエンド時間',
  /** Label for "Execution time" information of the fetched query */
  'result.execution-time-label': '実行時間',
  /** Label for "Result" explorer/view */
  'result.label': '結果',
  /**
   * "Not applicable" message for when there is no Execution time or End to End time information
   * available for the query (eg when the query has not been executed, or errored)
   */
  'result.timing-not-applicable': '該当なし',

  /** Label for the "API version" dropdown in settings */
  'settings.api-version-label': 'APIバージョン',
  /** Label for the "Custom API version" input in settings, shown when "other" is chosen as API version */
  'settings.custom-api-version-label': 'カスタムAPIバージョン',
  /** Label for the "Dataset" dropdown in vision settings */
  'settings.dataset-label': 'データセット',
  /** Error label for when the API version in 'Custom API version' input is invalid */
  'settings.error.invalid-api-version': '無効なAPIバージョン',
  /** Label for the "other" versions within the "API version" dropdown */
  'settings.other-api-version-label': 'その他',
  /**
   * Label for the "Perspective" dropdown in vision settings
   * @see {@link https://www.sanity.io/docs/perspectives}
   */
  'settings.perspective-label': 'パースペクティブ',
  /** Call to action to read the docs related to "Perspectives" */
  'settings.perspectives.action.docs-link': 'ドキュメントを読む',
  /** Description for popover that explains what "Perspectives" are */
  'settings.perspectives.description':
    'パースペクティブを使用すると、異なる"ビュー"に対してクエリを実行して、データセットのコンテンツを異なる方法で見ることができます',
  /** Title for popover that explains what "Perspectives" are */
  'settings.perspectives.title': 'パースペクティブ',
})
