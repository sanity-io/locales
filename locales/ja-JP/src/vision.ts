import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Label for action "Copy to clipboard", tied to the "Query URL" field. Also used for accessibility purposes on button */
  'action.copy-url-to-clipboard': 'クリップボードにコピー',
  /** Label for deleting a query */
  'action.delete': undefined, // 'Delete'
  /** Label for editing a query's title */
  'action.edit-title': undefined, // 'Edit title'
  /** Label for stopping an ongoing listen operation */
  'action.listen-cancel': '停止',
  /** Label for setting up a listener */
  'action.listen-execute': 'リッスン',
  /** Label for query loading table */
  'action.load-queries': undefined, // 'Load queries'
  /** Label for loading a query */
  'action.load-query': undefined, // 'Load query'
  /** Label for cancelling an ongoing query */
  'action.query-cancel': 'キャンセル',
  /** Label for executing the query, eg doing a fetch */
  'action.query-execute': 'フェッチ',
  /** Label for saving a query */
  'action.save-query': undefined, // 'Save query'
  /** Label for updating a query */
  'action.update': undefined, // 'Update'

  /** Label for actions user can take */
  'label.actions': undefined, // 'Actions'
  /** Label for saved queries that have been edited */
  'label.edited': undefined, // 'Edited'
  /**
   * Some features has a "New" label indicating that the feature was recently introduced.
   * This defines what the text of that label is. Keep it short and sweet.
   */
  'label.new': '新規',
  /** Label for query type "personal" */
  'label.personal': undefined, // 'Personal'
  /** Label for savedAt date */
  'label.saved-at': undefined, // 'Saved at'
  /** Saved queries */
  'label.saved-queries': undefined, // 'Saved queries'
  /** Search queries */
  'label.search-queries': undefined, // 'Search queries'
  /** Share query */
  'label.share': undefined, // 'Share'
  /** Label for saved query type "team" */
  'label.team': undefined, // 'Team'

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
  /** Tooltip text shown when the query result is not encodable as CSV */
  'result.save-result-as-csv.not-csv-encodable': '結果はCSVとしてエンコードできません',
  /** Label for "Save result as" result action */
  'result.save-result-as-format': '結果を<SaveResultButtons/>として保存',
  /**
   * "Not applicable" message for when there is no Execution time or End to End time information
   * available for the query (eg when the query has not been executed, or errored)
   */
  'result.timing-not-applicable': '該当なし',

  /** Query already saved error label */
  'save-query.already-saved': undefined, // 'Query already saved'
  /** Save error label */
  'save-query.error': undefined, // 'Error saving query'
  /** Save success label */
  'save-query.success': undefined, // 'Query saved'

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
  /** Notification about previewDrafts to drafts rename */
  'settings.perspective.preview-drafts-renamed-to-drafts.description':
    '<code>previewDrafts</code> パースペクティブは <code>drafts</code> に名称変更され、現在非推奨です。この変更はパースペクティブサポートがあるバージョン (>= v2021-03-25) にて有効です。',
  /** Call to action to read the docs related to "Perspectives" */
  'settings.perspectives.action.docs-link': 'ドキュメントを読む',
  /** Option for selecting default perspective */
  'settings.perspectives.default': 'パースペクティブなし（APIデフォルト）',
  /** Description for popover that explains what "Perspectives" are */
  'settings.perspectives.description':
    'パースペクティブを使用すると、異なる"ビュー"に対してクエリを実行して、データセットのコンテンツを異なる方法で見ることができます',
  /** Description for upcoming default perspective change */
  'settings.perspectives.new-default.description':
    'デフォルトのパースペクティブは、今後のAPIバージョンで「<code>raw</code>」から「<code>published</code>」に変更されます。詳細についてはドキュメントを参照してください。',
  /** Label for the pinned release perspective */
  'settings.perspectives.pinned-release-label': 'ピン留めされたリリース',
  /** Title for popover that explains what "Perspectives" are */
  'settings.perspectives.title': 'パースペクティブ',
})
