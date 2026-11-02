import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Label for action "Copy to clipboard", tied to the "Query URL" field. Also used for accessibility purposes on button */
  'action.copy-url-to-clipboard': 'クリップボードにコピー',
  /** Label for deleting a query */
  'action.delete': '削除',
  /** Label for editing a query's title */
  'action.edit-title': 'タイトルを編集',
  /** Label for stopping an ongoing listen operation */
  'action.listen-cancel': '停止',
  /** Label for setting up a listener */
  'action.listen-execute': 'リッスン',
  /** Label for query loading table */
  'action.load-queries': 'クエリを読み込む',
  /** Label for loading a query */
  'action.load-query': 'クエリを読み込む',
  /** Label for cancelling an ongoing query */
  'action.query-cancel': 'キャンセル',
  /** Label for executing the query, eg doing a fetch */
  'action.query-execute': 'フェッチ',
  /** Label for saving a query */
  'action.save-personal-copy': '個人用コピーを保存',
  /** Label for saving a personal query */
  'action.save-personal-query': '個人用として保存',
  /** Label for saving a query */
  'action.save-query': 'クエリを保存',
  /** Label for saving a shared query */
  'action.save-shared-query': '共有として保存',
  /** Label for unsharing a query */
  'action.unshare': '共有を解除',
  /** Label for updating a query */
  'action.update': '更新',

  /** Label for actions user can take */
  'label.actions': 'アクション',
  /** Label for all saved queries */
  'label.all': 'すべて',
  /** Label for saved queries that have been edited */
  'label.edited': '編集済み',
  /**
   * Some features has a "New" label indicating that the feature was recently introduced.
   * This defines what the text of that label is. Keep it short and sweet.
   */
  'label.new': '新規',
  /** Label for query type "personal" */
  'label.personal': '個人',
  /** Label for savedAt date */
  'label.saved-at': '保存日時',
  /** Saved queries */
  'label.saved-queries': '保存されたクエリ',
  /** Search queries */
  'label.search-queries': 'クエリを検索',
  /** Share query */
  'label.share': '共有',
  /** Label for query type "shared" */
  'label.shared': '共有',
  /** Label for saved query type "team" */
  'label.team': 'チーム',
  /** Label for untitled query fallback */
  'label.untitled-query': '無題',

  /** Error message for when the "Params" input are not a valid json */
  'params.error.params-invalid-json': 'パラメータが有効なJSONではありません',
  /** Label for "Params" (parameters) editor/input */
  'params.label': 'パラメータ',

  /** Label for 'Column' indicator when there is an error within the query */
  'query.error.column': '列',
  /** Label for 'Line' indicator when there is an error within the query */
  'query.error.line': '行',
  /** Extra explanation when a 400 is returned for a release perspective on an old API version */
  'query.error.unsupported-release-perspective':
    'このAPIバージョンは複合パースペクティブをサポートしていません。{{apiVersion}}以降を使用してください。',
  /** Extra explanation when a 400 is returned for a variant on an incompatible API version */
  'query.error.unsupported-variant':
    'このAPIバージョンはコンテンツバリアントをサポートしていません。実験的なAPIバージョン({{apiVersion}})を使用してください。',
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
  'save-query.already-saved': 'クエリは既に保存されています',
  /** Save error label */
  'save-query.error': 'クエリの保存中にエラーが発生しました',
  /** Save personal copy success label */
  'save-query.personal-copy-success': '個人用コピーを保存しました',
  /** Warning displayed before sharing a query */
  'save-query.share-warning':
    '共有クエリはdataset内のドキュメントとして保存され、ドキュメントクォータにカウントされます。',
  /** Save shared query success label */
  'save-query.shared-success': '共有クエリを保存しました',
  /** Save success label */
  'save-query.success': 'クエリを保存しました',
  /** Save unshared query success label */
  'save-query.unshared-success': 'クエリを個人用に移動しました',

  /** Label for the "API version" dropdown in settings */
  'settings.api-version-label': 'APIバージョン',
  /** Tooltip shown when the API version selector is locked to vX because a variant is selected */
  'settings.api-version-locked-for-variant':
    'バリアントが選択されている場合、APIバージョンはvXである必要があります。',
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
  /** Label for the scheduled drafts perspective */
  'settings.perspectives.scheduled-drafts': '予定された下書き',
  /** Title for popover that explains what "Perspectives" are */
  'settings.perspectives.title': 'パースペクティブ',

  /** Tooltip line of every control that calls Sanity Agent Actions, which bills AI credits */
  'vista.agent-actions.credits': 'リクエストごとにAIクレジットを1つ使用します',
  /** Under an Agent Actions control: the organization's AI credits balance this month */
  'vista.ai-credits.balance': '今月は{{quota}}個中{{balance}}個のAIクレジットが残っています。',
  /** Under an Agent Actions control: the credits used beyond the plan's monthly quota */
  'vista.ai-credits.deficit':
    '今月は{{used}}個のAIクレジットが使用され、含まれる{{quota}}個より{{deficit}}個多く使用されています。',
  /** Body of the out-of-credits card, with the credits used and the plan's monthly quota */
  'vista.ai-credits.limit.description':
    '組織は今月、{{quota}}個のAIクレジットのうち{{used}}個を使用したため、Sanity Agent Actionsは来月まで、または支出上限が引き上げられるまで一時停止されます。',
  /** Body of the out-of-credits card when the usage and the quota are unknown */
  'vista.ai-credits.limit.description-unknown':
    '組織はAIクレジットの支出上限に達したため、Sanity Agent Actionsは来月まで、または上限が引き上げられるまで一時停止されます。',
  /** Link in the out-of-credits card to the documentation of AI credits */
  'vista.ai-credits.limit.learn-more': 'AIクレジットの仕組みについて',
  /** Button in the out-of-credits card leading to the organization's spending limits in Manage */
  'vista.ai-credits.limit.manage': 'AIクレジットを管理',
  /** Title of the card shown where the organization is out of AI credits */
  'vista.ai-credits.limit.title': 'AIクレジットがありません',
  /** Link after the AI credits note, to the organization's AI usage in Manage */
  'vista.ai-credits.usage': 'AI使用状況',
  /** Under an Agent Actions control: the credits used, on a plan without a quota */
  'vista.ai-credits.used': '今月は{{used}}個のAIクレジットが使用されました。',
  /** Button in the request column's action bar naming the API version requests go out with */
  'vista.api-version.button': 'API {{version}}',
  /** The API version button while queries go through the API CDN */
  'vista.api-version.button-cdn': 'API CDN {{version}}',
  /** The API version button while the "Other" API version input holds an unfinished version */
  'vista.api-version.button-invalid': '未完成のAPIバージョン',
  /** Tooltip of the API version button */
  'vista.api-version.tooltip':
    'クエリはAPIバージョン{{version}}に対して実行されます。オプションで変更するには選択してください。',
  /** Tooltip of the API version button while queries go through the API CDN */
  'vista.api-version.tooltip-cdn':
    'クエリはAPIバージョン{{version}}のAPI CDNに対して実行されます。オプションで変更するには選択してください。',
  /**
   * Tooltip of the API version button while the API CDN is asked for but the perspective, as the
   * perspective select names it, keeps queries on the API
   */
  'vista.api-version.tooltip-cdn-blocked':
    'クエリはAPI CDNではなく、APIバージョン{{version}}のAPIに対して実行されます。{{perspective}}パースペクティブはAPI CDNで提供されていません。オプションで変更するには選択してください。',
  /** Tooltip of the API version button while the "Other" input holds an unfinished version */
  'vista.api-version.tooltip-invalid':
    'オプションのAPIバージョンが未完成のため、完了するまで何も取得できません。',
  /** Tooltip of the API version button while a selected variant forces the experimental API */
  'vista.api-version.tooltip-locked':
    'クエリは、選択したバリアントが必要とするAPIバージョン{{version}}に対して実行されます。',
  /** Label of the document after the change in the Delta panel */
  'vista.delta.after': '変更後',
  /** Label of the document before the change in the Delta panel */
  'vista.delta.before': '変更前',
  /** What the Delta panel does */
  'vista.delta.description':
    'GROQ駆動のwebhook、リスナー、Sanity Functionsと同様に、デルタモードでクエリを実行します。before()は変更前のドキュメント、after()は変更後のドキュメント、@は変更後のドキュメントを指し、delta::changedAny()はそれらを比較します。これはブラウザ内でgroq-jsを使用して実行されます。どちらか一方が空の場合はドキュメントが存在しないことを意味し、変更によってそれが作成または削除されます。',
  /** Label of the document ID field in the Delta panel */
  'vista.delta.document-id': 'ドキュメントID',
  /** Shown when there is a query but no documents to compare */
  'vista.delta.empty':
    'ドキュメントの履歴を読み込むか、変更前と変更後にドキュメントを入力してください。',
  /** Shown when the query fails in delta mode */
  'vista.delta.failed': 'クエリをデルタモードで実行できませんでした: {{message}}',
  /** Shown when the After document is not valid JSON */
  'vista.delta.invalid-after': '変更後が有効なJSONではありません: {{message}}',
  /** Shown when the Before document is not valid JSON */
  'vista.delta.invalid-before': 'Before が有効な JSON ではありません: {{message}}',
  /** Button loading the document's revisions from the History API */
  'vista.delta.load': '履歴を読み込む',
  /** Shown when the history could not be loaded */
  'vista.delta.load-failed': '履歴を読み込めませんでした: {{message}}',
  /** A delta filter that is true for the change */
  'vista.delta.matches':
    '一致: このフィルターを持つ webhook または function はこの変更に対して実行されます。',
  /** A delta filter that is false for the change */
  'vista.delta.no-match':
    '不一致: このフィルターを持つ webhook または function はこの変更に対して実行されません。',
  /** Shown while the query or its params cannot be sent */
  'vista.delta.no-request':
    'デルタモードで実行するには、クエリとそのパラメータを修正してください。',
  /** Heading of the delta result */
  'vista.delta.result': '結果',
  /** The After choice for a change that deletes the document */
  'vista.delta.revision.none-after': 'なし: この変更でドキュメントが削除されます',
  /** The Before choice for a change that creates the document */
  'vista.delta.revision.none-before': 'なし: この変更でドキュメントが作成されます',
  /** A revision in the Before and After lists */
  'vista.delta.revision.option': '{{time}} · {{revision}}',
  /** Accessible label for the button that closes the sidebar drawer */
  'vista.drawer.close': 'パネルを閉じる',
  /** Explanation at the top of the Explain panel */
  'vista.explain.description':
    'クエリプランとは、Content Lake がクエリをどのように実行するかを示すものです。読み取り、フィルタリング、並べ替えの内容と、後続のステップに残される処理が示されます。「これを説明して」をクリックすると、Sanity Agent Actions がクエリとそのプランを平易な言葉で説明します。これには AI クレジットが1つ使用されます。',
  /** Shown in the Explain panel while there is no valid query to explain */
  'vista.explain.empty': '説明するにはクエリを入力してください。',
  /** Button in the Explain panel asking Agent Actions to explain the query and its plan */
  'vista.explain.explain': 'これを説明して',
  /** Shown when the explanation could not be written */
  'vista.explain.failed': '説明を作成できませんでした: {{message}}',
  /** A count the index computes without reading the documents */
  'vista.explain.insight.aggregate':
    'ドキュメントを読み取ることなく、インデックス内でカウントされました。',
  /** A subquery the plan runs once for all documents */
  'vista.explain.insight.batched-subquery':
    'このサブクエリはすべてのドキュメントに対して1回、単一のバッチフェッチで実行され、ドキュメントごとには実行されません。',
  /** Part of the filter runs in memory; the expression follows */
  'vista.explain.insight.filter-in-memory':
    'フィルターの一部はメモリ内で、読み取り後に実行されます。インデックスを通過したすべてのドキュメントがまず読み取られるため、データセットが大きい場合は処理が遅くなります。フィルター内の結合 (->) や関数はインデックスを使用できません。',
  /** The index sorts and limits while reading */
  'vista.explain.insight.index-sort-limit':
    'インデックスは、ドキュメントを読み取りながら並べ替えと制限を行います。',
  /** The plan slices in memory */
  'vista.explain.insight.slice-in-memory':
    'スライスは読み取り中の制限としてではなく、読み取り後にメモリ内で行われます。',
  /** The plan sorts in memory */
  'vista.explain.insight.sort-in-memory':
    '並べ替えは、すべての一致を読み取った後にメモリ内で行われます。インデックスが並べ替え可能な属性で並べ替えてください。',
  /** Link under the plan insights to the guide on fast queries */
  'vista.explain.insights.guide': '高パフォーマンスな GROQ',
  /** Heading of the plan insights in the Explain panel */
  'vista.explain.insights.title': '注目すべき点',
  /** Button in the Explain panel fetching the query plan */
  'vista.explain.plan': 'クエリプランを表示',
  /** Shown when the query plan could not be fetched */
  'vista.explain.plan-failed': 'クエリプランを取得できませんでした: {{message}}',
  /** Heading of the query plan in the Explain panel */
  'vista.explain.plan-title': 'クエリプラン',
  /** Toast shown after a code snippet was copied */
  'vista.export-query.copied': 'スニペットをクリップボードにコピーしました',
  /** Label for the button that copies a code snippet */
  'vista.export-query.copy': 'スニペットをコピー',
  /** Explanation at the top of the export query dialog */
  'vista.export-query.description':
    'これらのスニペットのいずれかを使用して、Studio の外でこのクエリを実行します。',
  /** Title of the dialog that exports the query as code snippets */
  'vista.export-query.title': 'クエリをエクスポート',
  /** Note about authentication in the export query dialog */
  'vista.export-query.token-note':
    '非公開のデータセットには API トークンが必要です。公開データセットでは Authorization ヘッダーを省略できます。',
  /** Toast shown after the generated code was copied */
  'vista.export-types.copied': 'コードをクリップボードにコピーしました',
  /** Label for the button that copies the generated code */
  'vista.export-types.copy': 'コードをコピー',
  /** Shown in the types dialog when there is neither a schema evaluation nor a result */
  'vista.export-types.empty':
    '型を導出するための結果が得られるよう、まずクエリを取得してください。',
  /** Why the workspace schema could not be used for the types; shown with the result fallback */
  'vista.export-types.schema-error': 'スキーマの評価に失敗しました: {{message}}',
  /** Note shown when the types were derived from the fetched result instead of the schema */
  'vista.export-types.source.result':
    'クエリをワークスペースのスキーマに対して評価できなかったため、取得した結果から推論されています。',
  /** Note shown when the types were derived from the workspace schema */
  'vista.export-types.source.schema':
    'sanity typegen と同じ方法で、ワークスペースのスキーマから推論されています。',
  /** Shown when the schema cannot be evaluated and the shown result belongs to an older query */
  'vista.export-types.stale-result':
    '表示されている結果は別のクエリまたはパラメータで取得されたものです。型を導出するための結果が得られるよう、まず現在のクエリを取得してください。',
  /** Title of the dialog exporting TypeScript types for the result */
  'vista.export-types.title-typescript': 'TypeScript をエクスポート',
  /** Title of the dialog exporting a Zod schema for the result */
  'vista.export-types.title-zod': 'Zod をエクスポート',
  /** Button of a library function the query does not declare, which declares it at the top */
  'vista.functions.add': 'クエリに追加',
  /** Shown on a library function the query declares the same way */
  'vista.functions.declared': 'このクエリ内',
  /** Lint action on a call of a library function the query does not declare */
  'vista.functions.editor.add-from-library': '宣言する',
  /** Note in a function's hover documentation: the API version it needs */
  'vista.functions.editor.api-version': 'API バージョン {{version}} 以降が必要です',
  /** Detail of a completion for a custom function the query declares */
  'vista.functions.editor.completion-declared': 'このクエリ内',
  /** Detail of a completion for a library function, which declares it too */
  'vista.functions.editor.completion-library': 'ライブラリから',
  /** Note in the hover documentation of a custom function the query declares */
  'vista.functions.editor.declared-on': 'カスタム関数。{{line}} 行目で宣言されています',
  /** Note in the hover documentation of the functions that only work in delta mode */
  'vista.functions.editor.delta-only':
    'デルタモードでのみ機能します。webhook と Sanity Functions がそのフィルターを実行する場所です',
  /** Button over a selected projection in the query editor, turning it into a custom function */
  'vista.functions.editor.extract': '関数として抽出',
  /** Note in the hover documentation of a library function the query does not declare */
  'vista.functions.editor.in-library':
    '関数ライブラリ内にありますが、このクエリでは宣言されていません',
  /** Link at the end of a built-in function's hover documentation */
  'vista.functions.editor.reference': 'GROQ関数リファレンス',
  /** Explanation under the library heading in the Functions panel */
  'vista.functions.library.description':
    'プロジェクトのすべてのデータセットのために、このブラウザに保存されます。これらの関数は補完で提案され、lintはクエリが呼び出す関数の宣言を提案します。',
  /** Shown in the Functions panel while the library is empty */
  'vista.functions.library.empty': 'クエリが宣言する関数を保存すると、他のクエリでも使用できます。',
  /** Heading of the functions library in the Functions panel */
  'vista.functions.library.title': 'ライブラリ',
  /** Shown in the Functions panel while the query declares no custom functions */
  'vista.functions.query.empty':
    'クエリの先頭でカスタム関数を宣言するか、author->{name} のような投影内にカーソルを置き、エディタ上部の抽出ボタン（{{shortcut}}）を押してください。',
  /** Heading of the functions the query declares in the Functions panel */
  'vista.functions.query.title': 'このクエリ内',
  /** Removes a function from the library */
  'vista.functions.remove': 'ライブラリから削除',
  /** Button of a library function the query declares differently, which puts the library's version in */
  'vista.functions.replace': 'クエリ内を置き換える',
  /** Accessible name of a declared function in the Functions panel, which selects it in the editor */
  'vista.functions.reveal': 'エディタで{{name}}を表示',
  /** Button of a function the query declares that is not in the library yet */
  'vista.functions.save': 'ライブラリに保存',
  /** Shown on a function the query declares the way the library has it */
  'vista.functions.saved': '保存済み',
  /** Button of a function the query declares differently from the library's version */
  'vista.functions.update': 'ライブラリを更新',
  /** Button over the query editor that opens the bar writing a query from a description */
  'vista.generate.button': 'クエリを生成',
  /** Closes the generate query bar */
  'vista.generate.close': '閉じる',
  /** Explanation under the generate query field */
  'vista.generate.description':
    'Sanity Agent Actionsが説明とドキュメントタイプからGROQを記述し、Content Lakeが各試行を確認します。試行ごとに1つのAIクレジットを使用します。このタブのクエリを置き換えて実行します。エディタで元に戻すと以前のクエリに戻ります。',
  /** Shown when no query could be generated, above the reason */
  'vista.generate.failed': 'クエリを生成できませんでした',
  /** Accessible label of the description field in the generate query bar */
  'vista.generate.label': 'クエリは何を取得すべきですか？',
  /** Opens the last rejected attempt, without running it, to fix it by hand */
  'vista.generate.open-anyway': '最後の試行を開く',
  /** Placeholder of the description field in the generate query bar */
  'vista.generate.placeholder': '直近の著者10人を、姓、次に名の順で並べたもの',
  /** Shown while the first attempt at a query is written */
  'vista.generate.progress': 'クエリを作成中…',
  /** Shown while a rejected attempt is retried */
  'vista.generate.progress-retry': 'クエリを修正中（{{max}}回中{{attempt}}回目）…',
  /** Button generating the query */
  'vista.generate.submit': '生成',
  /** Badge on a history entry the API CDN answered */
  'vista.history.cdn': 'API CDN',
  /** Badge on a history entry the API CDN answered from its cache */
  'vista.history.cdn-cache-hit': 'CDNキャッシュヒット',
  /** A history entry whose result differs from the previous result, which is no longer kept */
  'vista.history.changed': '変更されました',
  /**
   * Toggle on a history entry that shows how its request and result differ from the previous
   * successful fetch
   */
  'vista.history.changes': '変更点',
  /** Shown instead of the changes when they could not be loaded or rendered */
  'vista.history.changes-failed': '変更点を表示できませんでした。',
  /** Button retrying to show the changes of a history entry */
  'vista.history.changes-retry': '再試行',
  /** Above the changes of a history entry: the fetch they are compared with */
  'vista.history.compared-with': '{{time}} のフェッチと比較',
  /** Label of the diff of the GROQ params in a history entry's changes */
  'vista.history.diff.params': 'パラメータ',
  /** Label of the diff of the GROQ query in a history entry's changes */
  'vista.history.diff.query': 'クエリ',
  /** Instead of the query diff, when the two queries only differ in whitespace and line breaks */
  'vista.history.diff.query-formatting-only': '書式のみが変更されました',
  /** Label of the diff of the query result in a history entry's changes */
  'vista.history.diff.result': '結果',
  /**
   * Label of the diff of the request URL in a history entry's changes: the API host, version and
   * dataset, and options such as the perspective
   */
  'vista.history.diff.url': 'リクエストURL',
  /** Empty state of the history panel */
  'vista.history.empty': 'まだフェッチされていません',
  /** Status label for a failed fetch in the history */
  'vista.history.failed': '失敗',
  /** Button putting the hidden fields back into the diff out of a history entry's changes */
  'vista.history.hide-hidden': '非表示にする',
  /** Next to a history entry's changes: the fields the diff leaves out */
  'vista.history.hiding': '{{fields}} を非表示にしています',
  /** A history entry whose result only differs from the previous one in hidden fields */
  'vista.history.only-hidden-changed': '非表示のフィールドのみが変更されました',
  /** History reason: a tab opened with a generated query fetched it */
  'vista.history.reason.generated': '生成されたクエリ',
  /** History reason: a link to the tool named a query URL, which opened in a tab and ran */
  'vista.history.reason.link': 'リンクを開きました',
  /** History reason: a live event matched the query's sync tags */
  'vista.history.reason.live': 'ライブアップデート',
  /** History reason: the live connection asked every client to refetch */
  'vista.history.reason.live-restart': 'ライブ接続が再開されました',
  /**
   * History reason: the Live fetch button was pressed, which fetches and then refetches
   * automatically
   */
  'vista.history.reason.live-start': 'ライブフェッチが開始されました',
  /** History reason: a saved query was loaded into a tab that refetches automatically */
  'vista.history.reason.load': 'クエリが読み込まれました',
  /** History reason: the fetch button was pressed */
  'vista.history.reason.manual': 'フェッチボタン',
  /** History reason: mutations were applied from the Mutate panel */
  'vista.history.reason.mutation': 'ミューテーションが適用されました',
  /** History reason: dataset, API version or perspective changed while refetching automatically */
  'vista.history.reason.options': 'オプションが変更されました',
  /** History reason: a query URL was pasted into the tab, which runs it */
  'vista.history.reason.paste': '貼り付けられたURL',
  /** History reason: a tab that refetches automatically was opened again, or the studio reloaded */
  'vista.history.reason.resume': '自動再フェッチが再開されました',
  /** History reason: the keyboard shortcut was used */
  'vista.history.reason.shortcut': 'キーボードショートカット',
  /** A history entry whose result is the same as the previous result, for a changed request */
  'vista.history.same-result': '結果は同じ',
  /** Button showing the hidden fields in a history entry's changes */
  'vista.history.show-hidden': '表示する',
  /** Next to a history entry's changes while the hidden fields are shown */
  'vista.history.showing-hidden': '{{fields}}を表示中(デフォルトでは非表示)',
  /** A history entry whose result, or the previous one, is too large to compare */
  'vista.history.too-large': '大きすぎて比較できません',
  /** A history entry whose result is the same as the previous result */
  'vista.history.unchanged': '変更なし',
  /** Shown in the Lint panel while the query has no lint findings */
  'vista.lint.empty':
    'Lintの検出結果はありません。GROQ linterがクエリ内で検出した問題は、入力中にここに一覧表示されます。項目を選択するとエディタ内で選択されます。',
  /** Where a lint finding sits in the query, shown under its message */
  'vista.lint.position': '{{line}}行目、{{column}}列目',
  /** Severity badge of a lint finding */
  'vista.lint.severity.error': 'エラー',
  /** Severity badge of a lint finding */
  'vista.lint.severity.hint': 'ヒント',
  /** Severity badge of a lint finding */
  'vista.lint.severity.info': '情報',
  /** Severity badge of a lint finding */
  'vista.lint.severity.warning': '警告',
  /** Lint action writing the type, field or operator a schema finding suggests */
  'vista.lint.use-suggestion': '{{suggestion}}を使用する',
  /** Badge shown while a tab refetches automatically */
  'vista.live.active': 'ライブ',
  /** Button in the request column's action bar that fetches and then refetches automatically */
  'vista.live.button': 'ライブ取得',
  /** Tooltip of the Live button while automatic refetching is off */
  'vista.live.button.start': '取得し、その後、結果内のドキュメントが変更されるたびに再取得します',
  /** Tooltip of the Stop live button, while the tab refetches automatically */
  'vista.live.button.stop':
    '結果内のドキュメントが変更されたときの再取得を停止します。now()のようにドキュメントの変更の影響を受けない結果については、Fetchを使えばオンデマンドで取得できます',
  /** Error shown when the live connection breaks */
  'vista.live.error': 'ライブ更新の接続が切断されました: {{message}}',
  /** The Live fetch button while the tab refetches automatically, stopping it */
  'vista.live.stop': 'ライブを停止',
  /** Button in the Mutate panel adding a mutation to the list */
  'vista.mutate.add': 'ミューテーションを追加',
  /** Adds a mutation creating a document, with the type of the result's first document */
  'vista.mutate.add.create': 'ドキュメントを作成する',
  /** Adds a mutation deleting a document, its ID to fill in */
  'vista.mutate.add.delete': 'ドキュメントを削除する',
  /** Adds a mutation deleting the documents of the shown result */
  'vista.mutate.add.delete-result': '結果内のドキュメントを削除する',
  /** Adds a mutation patching a document, its ID to fill in */
  'vista.mutate.add.patch': 'ドキュメントにパッチを適用する',
  /** Adds a mutation patching the documents of the shown result */
  'vista.mutate.add.patch-result': '結果内のドキュメントにパッチを適用する',
  /** Button applying the mutations a dry run showed */
  'vista.mutate.apply': '{{dataset}} に適用',
  /** Heading of the error shown when applying the mutations failed */
  'vista.mutate.apply-failed': 'ミューテーションは適用されませんでした',
  /** Next to Apply while the mutations as they are have had no dry run */
  'vista.mutate.apply-needs-preview':
    '適用はドライランで示された内容を送信します。先にドライランを実行してください。',
  /** Option giving array items without a _key one */
  'vista.mutate.auto-keys': '_key を持たない配列項目に _key を追加する',
  /** Under the option giving array items a _key */
  'vista.mutate.auto-keys.description':
    'スタジオで編集するには、すべての配列項目に _key が必要です。',
  /** Button showing a document's changes in the dry run */
  'vista.mutate.changes': '変更点',
  /** Shown instead of a document's changes when they could not be loaded or rendered */
  'vista.mutate.changes-failed': '変更点を表示できませんでした。',
  /** Button retrying to show a document's changes */
  'vista.mutate.changes-retry': '再試行',
  /** What the Mutate panel does */
  'vista.mutate.description':
    'Mutations API が受け取る形式で、create、createOrReplace、createIfNotExists、delete、patch のミューテーションをリストとして、ID または GROQ クエリで記述します。ドライランでは、各ドキュメントに対して何が行われるかを、何も変更せずに表示します。「適用」を実行すると、1つのトランザクションであなたのアカウントでデータセットに書き込まれます。',
  /** What the API says went wrong with one of the mutations */
  'vista.mutate.failure-item': 'ミューテーション {{index}}: {{message}}',
  /** Tooltip and accessible label of the button opening the generate mutations field */
  'vista.mutate.generate.button': 'ミューテーションを生成',
  /** Explanation under the generate mutations field */
  'vista.mutate.generate.description':
    'Sanity Agent Actions は、あなたの説明、結果内のドキュメントとその型からミューテーションを作成し、ドライランで各試行を検証します。各試行は1つの AI クレジットを使用します。これらはここにあるミューテーションを置き換え、取り消すと元に戻ります。適用するまでは何も書き込まれません。',
  /** Shown when no mutations could be generated, above the reason */
  'vista.mutate.generate.failed': 'ミューテーションを生成できませんでした',
  /** Accessible label of the description field in the generate mutations bar */
  'vista.mutate.generate.label': 'ミューテーションは何をすべきですか？',
  /** Placeholder of the description field in the generate mutations bar */
  'vista.mutate.generate.placeholder': '結果内のドキュメントのタイトルを foobar に変更する',
  /** Shown while the first attempt at the mutations is written */
  'vista.mutate.generate.progress': 'ミューテーションを作成しています…',
  /** Shown while an attempt the dry run turned down is retried */
  'vista.mutate.generate.progress-retry':
    'ミューテーションを修正しています（{{attempt}} / {{max}} 回目の試行）…',
  /** Under the dry run: the fields the diffs leave out */
  'vista.mutate.hiding': '履歴と同様に、変更点では {{fields}} が省略されています。',
  /** Shown when the mutations are not valid JSON */
  'vista.mutate.invalid-json': 'ミューテーションは有効な JSON ではありません: {{message}}',
  /** Shown when a mutation does not name exactly one thing to do */
  'vista.mutate.invalid-mutation':
    'ミューテーション {{index}} は、create、createOrReplace、createIfNotExists、delete、patch のいずれか1つだけを指定する必要があります。',
  /** Label of the mutations editor */
  'vista.mutate.mutations': 'ミューテーション',
  /** The dry run touched no documents */
  'vista.mutate.no-documents': 'ミューテーションが影響するドキュメントはありません。',
  /** Shown when the JSON is not a list of mutations */
  'vista.mutate.not-a-list':
    'ミューテーションのリスト、単一のミューテーション、またはミューテーションのリストを含むリクエストボディを記述してください。',
  /** A document the mutations create */
  'vista.mutate.operation.create': '作成',
  /** A document the mutations delete */
  'vista.mutate.operation.delete': '削除',
  /** A document the mutations touch without changing its content */
  'vista.mutate.operation.none': '変更なし',
  /** A document the mutations change */
  'vista.mutate.operation.update': '更新',
  /** Button running the mutations as a dry run */
  'vista.mutate.preview': 'ドライラン',
  /** Heading of the error shown when the dry run failed */
  'vista.mutate.preview-failed': 'ドライランが失敗しました',
  /** Heading of the dry run's outcome */
  'vista.mutate.preview-heading': 'ドライラン',
  /** Shown over a dry run made for other mutations, another dataset or other options */
  'vista.mutate.stale':
    'このドライランの実行後に、ミューテーション、データセット、またはオプションが変更されました。適用するには再度実行してください。',
  /** How many documents the dry run changes and leaves as they are */
  'vista.mutate.summary': '変更あり: {{changed}} · 変更なし: {{unchanged}}',
  /** In the Network panel: whether a cache answered the query */
  'vista.network.cache': 'キャッシュ',
  /** The API CDN answered from its cache */
  'vista.network.cache.hit': 'ヒット',
  /** Under the details of a CDN cache hit */
  'vista.network.cache.hit-explained':
    'CDNはお近くの場所にキャッシュされたレスポンスで応答しました。クエリはAPIに到達していません。',
  /** The API CDN answered with a response this session had not seen */
  'vista.network.cache.miss': 'ミス（このセッションで確認できる限り）',
  /** The API answered, which caches nothing */
  'vista.network.cache.none': 'なし、APIはすべてのリクエストに最新のコンテンツで応答します',
  /** Shown in the Network panel while there is no response */
  'vista.network.empty':
    'クエリを取得すると、どのエンドポイントが応答したか、キャッシュからかどうか、どこで実行されたかを確認できます。',
  /** In the Network panel: the endpoint that answered */
  'vista.network.endpoint': '応答者',
  /** The live API answered */
  'vista.network.endpoint.api': 'API',
  /** The API CDN answered */
  'vista.network.endpoint.cdn': 'API CDN',
  /** In the Network panel: the region the query ran in */
  'vista.network.region': 'クエリの実行場所',
  /** The response did not say where the query ran */
  'vista.network.region.unknown': '報告なし',
  /** In the Network panel: the round trip and the time on the server */
  'vista.network.timing': '時間',
  /** The round trip and the server's time for the query, in milliseconds */
  'vista.network.timing.value': '往復 {{e2e}}ms、サーバー上 {{server}}ms',
  /** In the Network panel: the trace of the request, for Sanity support */
  'vista.network.trace': 'トレースID',
  /** Hint in the Network panel while queries go to the API */
  'vista.network.use-cdn-hint':
    'オプションで「API CDNを使用」を有効にすると、クエリがCDN経由で送信されます。',
  /** Label of the browser's marker on the Network panel's globe, placed from its time zone */
  'vista.network.you': 'あなた',
  /** Hint under the dataset field while the tab follows the workspace's dataset */
  'vista.options.dataset.follows-workspace': 'ワークスペースに従う',
  /** Button that pins the current dataset so the tab stops following the workspace */
  'vista.options.dataset.pin': 'データセットを固定',
  /** Hint under the dataset field while a dataset is pinned */
  'vista.options.dataset.pinned':
    '固定済み。ワークスペースは別のデータセットを使用している場合があります',
  /** Button that makes the tab follow the workspace's dataset again */
  'vista.options.dataset.use-workspace': 'ワークスペースのデータセットを使用',
  /** Label for the "Include content source map" switch */
  'vista.options.include-source-map': 'コンテンツソースマップを含める',
  /** Description for the "Include content source map" switch */
  'vista.options.include-source-map.description':
    'レスポンスに resultSourceMap を追加し、コンテンツソースマップタブに表示します。',
  /** Perspective option following the studio navbar; the name is the release, published or drafts */
  'vista.options.perspective.global': 'グローバル ({{name}})',
  /** Label of the switch that sends queries to the API CDN */
  'vista.options.use-cdn': 'API CDN を使用',
  /** Note under the API CDN switch while the studio signs in with a cookie */
  'vista.options.use-cdn.anonymous':
    'このスタジオは Cookie でサインインしています。API CDN はこの Cookie を受け取ることがなく、匿名の訪問者と同様に応答するため、公開データセットが表示する内容が返されます。',
  /**
   * Why the API CDN is asked for but not used: the perspective is the one the perspective
   * select shows, such as "Global (drafts)"
   */
  'vista.options.use-cdn.blocked':
    'API CDN は下書きやリリースを提供しないため、{{perspective}} パースペクティブでのクエリは API に送られます。公開済みまたは raw の場合は CDN が使用されます。',
  /** Heading of the notice shown while the perspective keeps queries off the API CDN */
  'vista.options.use-cdn.blocked.title': 'クエリは CDN ではなく API に送られます',
  /** Description of the API CDN switch */
  'vista.options.use-cdn.description':
    '@sanity/client の useCdn: true と同様に、公開済みおよび raw パースペクティブのクエリを API CDN に送信します。下書きとリリースは常に API に送られます。応答は最大1分間キャッシュされ、ネットワークパネルでキャッシュから取得されたかどうかを確認できます。',
  /** Button in the API CDN notice switching the tab to the published perspective */
  'vista.options.use-cdn.use-published': '公開済みパースペクティブを使用',
  /** Label of the variant field */
  'vista.options.variant-label': 'バリアント',
  /** Variant option sending the navbar's variant, named */
  'vista.options.variant.global': 'グローバル ({{name}})',
  /** Variant option sending the navbar's variant while none is selected there */
  'vista.options.variant.global-none': 'グローバル(未選択)',
  /** Variant option sending no variant */
  'vista.options.variant.none': 'なし',
  /** Accessible label for collapsing a bottom panel */
  'vista.panel.collapse': 'パネルを折りたたむ',
  /** Label of the Delta tab in the response panel, which tests the query in delta mode */
  'vista.panel.delta': 'デルタ',
  /** Accessible label for expanding a bottom panel */
  'vista.panel.expand': 'パネルを展開',
  /** Label of the "Explain" tab in the response panel: the query plan and an explanation */
  'vista.panel.explain': '説明',
  /** Label of the Functions tab in the response panel */
  'vista.panel.functions': '関数',
  /** Label of the "History" tab in the response panel */
  'vista.panel.history': '履歴',
  /** Label of the "Lint" tab in the response panel, listing the query's lint findings */
  'vista.panel.lint': 'Lint',
  /** Label of the Mutate tab in the response panel, which runs and applies mutations */
  'vista.panel.mutate': '変更',
  /** Label of the Network tab in the response panel */
  'vista.panel.network': 'ネットワーク',
  /** Label of the "Options" panel in the request column */
  'vista.panel.options': 'オプション',
  /** Label of the "Response" tab in the response panel */
  'vista.panel.response': 'レスポンス',
  /** Label of the "Content Source Map" tab in the response panel */
  'vista.panel.source-map': 'コンテンツソースマップ',
  /** Button adding an item to a list param in the params form */
  'vista.params-form.add-item': '項目を追加',
  /** Placeholder of a params form field that takes any JSON value */
  'vista.params-form.any-placeholder': '任意のJSON値。それ以外のテキストは文字列として送信されます',
  /** Shown in the params form when the query uses no params */
  'vista.params-form.empty':
    'このクエリはパラメーターを使用していません。クエリ内の各$nameがここにフィールドとして表示されます。',
  /** Shown in the params form while the params JSON cannot be parsed */
  'vista.params-form.invalid-json':
    'パラメーターが有効なJSONではありません。ここで編集するにはJSONビューで修正してください。',
  /** A boolean param's value is not true or false; it is sent anyway */
  'vista.params-form.invalid.boolean': 'trueまたはfalseではありません。{{value}}として送信されます',
  /** A document type param's value is not a document type of the workspace; it is sent anyway */
  'vista.params-form.invalid.document-type':
    'このワークスペースのドキュメントタイプではありません。そのまま送信されます',
  /** A whole number param (a slice bound) holds a fraction */
  'vista.params-form.invalid.integer': 'スライスに必要な整数ではありません',
  /** A list param's value is not a list; it is sent anyway */
  'vista.params-form.invalid.list': 'リストではありません。{{value}}として送信されます',
  /** A number param's value is not a number; it is sent anyway */
  'vista.params-form.invalid.number': '数値ではありません。テキストとして送信されます',
  /** A param's value is not one of the values the schema allows; it is sent anyway */
  'vista.params-form.invalid.option': '既知の値のいずれでもありません。そのまま送信されます',
  /** A text param's value is not text; it is sent anyway */
  'vista.params-form.invalid.string': 'テキストではありません。{{value}}として送信されます',
  /** Accessible label of an item input of a list param in the params form */
  'vista.params-form.item-label': '${{name}}、項目 {{index}}',
  /** Placeholder of an item input of a list param in the params form */
  'vista.params-form.item-placeholder': '項目',
  /** Under a params form field whose param has no value */
  'vista.params-form.missing': '未設定: 値が設定されるまでクエリは失敗します',
  /** Shown in the params form when the workspace schema could not be read */
  'vista.params-form.no-schema':
    '型はクエリのみから取得されています。ワークスペースのスキーマを読み取れませんでした。',
  /** Placeholder of a params form field without a value, and the unset choice of a boolean */
  'vista.params-form.not-set': '未設定',
  /** Button setting a date and time param to the current time */
  'vista.params-form.now': '現在時刻',
  /** Button removing a param the query does not use from the params */
  'vista.params-form.remove': '削除',
  /** Accessible label of the button removing an item from a list param */
  'vista.params-form.remove-item': '項目を削除',
  /** Shown in the params form when the query does not parse */
  'vista.params-form.syntax-error':
    'クエリを解析できないため、そのパラメーターは型なしで表示されます。',
  /** Type hint of a params form field: any JSON value */
  'vista.params-form.type.any': '任意のJSON値',
  /** Type hint of a params form field: true or false */
  'vista.params-form.type.boolean': 'trueまたはfalse',
  /** Type hint of a params form field: an ISO 8601 date and time */
  'vista.params-form.type.datetime': '日時 (ISO 8601)',
  /** Type hint of a params form field: a document ID */
  'vista.params-form.type.document-id': 'ドキュメントID',
  /** Type hint of a params form field: one of the workspace's document types */
  'vista.params-form.type.document-type': 'ドキュメントタイプ',
  /** Type hint of a params form field: a whole number */
  'vista.params-form.type.integer': '整数',
  /** Type hint of a params form field: a list of values */
  'vista.params-form.type.list': 'リスト、各{{type}}',
  /** Type hint of a params form field: a number */
  'vista.params-form.type.number': '数値',
  /** Type hint of a params form field: text */
  'vista.params-form.type.string': 'テキスト',
  /** Heading of the params the query does not use, listed in the params form */
  'vista.params-form.unused': 'クエリで使用されていません',
  /** Before the expressions that use a param, in the params form */
  'vista.params-form.used-in': '使用箇所',
  /** Value announced for the params resize handle while the panel sizes itself to its content */
  'vista.params.fit-height': 'コンテンツに合わせたサイズ、{{height}}ピクセル',
  /** Accessible label and tooltip of the handle for resizing the params panel */
  'vista.params.resize':
    'paramsのサイズ変更: ドラッグするか矢印キーを使用してください。ダブルクリックまたはEnterキーでコンテンツに再フィットします',
  /** Tab showing the params as a form inferred from the query */
  'vista.params.view.form': 'フォーム',
  /** Tab showing the params as JSON */
  'vista.params.view.json': 'JSON',
  /** Accessible label of the tabs switching how the params are edited */
  'vista.params.view.label': 'paramsの編集方法',
  /** Toast shown after a query URL was pasted and loaded into the tab */
  'vista.paste.parsed': '貼り付けられたURLからクエリを読み込みました',
  /** Toast shown when a pasted URL used a content variant the tab does not send */
  'vista.paste.unavailable-variant':
    '貼り付けられたURLは「{{variant}}」バリアントを使用していました。このバリアントでクエリを実行するには、ナビバーで選択してください。',
  /** Toast shown when the dataset of a pasted URL is not available here */
  'vista.paste.unknown-dataset':
    '貼り付けられたURLのデータセット「{{dataset}}」はここでは利用できないため、現在のデータセットを維持します。',
  /** Toast shown when the perspective of a pasted URL cannot be used */
  'vista.paste.unsupported-perspective':
    '貼り付けられたURLのperspectiveはここではサポートされていないため、現在のものを維持します。',
  /** Toast shown when a pasted URL used a content variant, but this workspace has variants switched off */
  'vista.paste.variants-disabled':
    '貼り付けられたURLは「{{variant}}」バリアントを使用していましたが、このワークスペースではバリアントが無効になっているため、バリアントなしでクエリが実行されます。',
  /** Accessible label for the query actions menu */
  'vista.query.actions': 'クエリアクション',
  /** Tooltip when automatic refetching is not available for the API version */
  'vista.query.auto-refetch.unsupported': '自動再取得にはAPIバージョンv2021-03-25以降が必要です。',
  /** Toast shown after the query was copied */
  'vista.query.copied': 'クエリをクリップボードにコピーしました',
  /** Menu item copying the query text */
  'vista.query.copy': 'クエリをコピー',
  /** Menu item opening the export query dialog */
  'vista.query.export': 'クエリをエクスポート…',
  /** Menu item reformatting the query */
  'vista.query.prettify': 'クエリを整形',
  /** Toast shown when the query could not be reformatted */
  'vista.query.prettify.failed': 'クエリを整形できませんでした',
  /** Menu item saving the query to the personal saved queries */
  'vista.query.save': 'クエリを保存',
  /** The Fetch button while a fetch is running, stopping it; paired with Stop live */
  'vista.query.stop': '停止',
  /** Tooltip and accessible label of the Stop button, which stops the running fetch only */
  'vista.query.stop.description': 'フェッチを停止',
  /** Explanation in the settings section about the redesigned experience */
  'vista.redesign.settings.description':
    'リデザインされたVisionツールを使用しています。切り替えて元に戻しても、このブラウザにはタブと設定が保存されるため、次回試すときに利用できます。',
  /** Title of the settings section about the redesigned experience */
  'vista.redesign.settings.title': 'リデザインされたVision（ベータ版）',
  /** Sidebar item and settings button that return to the classic Vision tool */
  'vista.redesign.switch-to-classic': 'クラシックVisionに切り替える',
  /** Toast button that switches to the redesigned tool */
  'vista.redesign.toast.accept': '今すぐ試す',
  /** Body of the toast inviting users of the classic tool to try the redesign */
  'vista.redesign.toast.description':
    'クエリタブ、ライブ再フェッチ、レスポンスの詳細、エクスポート機能。いつでも元に戻すことができます。',
  /** Toast button that hides the invitation */
  'vista.redesign.toast.dismiss': '今はしない',
  /** Title of the toast inviting users of the classic tool to try the redesign */
  'vista.redesign.toast.title': 'リデザインされたVisionを試す',
  /** Button next to Fetch in the classic tool that switches to the redesigned one */
  'vista.redesign.try': 'リデザイン版を試す',
  /** Tooltip of the button next to Fetch in the classic tool that switches to the redesign */
  'vista.redesign.try.description':
    'リデザインされたVision（ベータ版）に切り替えます。サイドバーからいつでも元に戻すことができます。',
  /** Empty state of the response panel before anything was fetched */
  'vista.response.empty': 'まだフェッチされていません',
  /** Label for the payload size in the response tab */
  'vista.response.payload-size': 'ペイロードサイズ',
  /** Label for the sync tags in the response tab */
  'vista.response.sync-tags': '同期タグ',
  /** Shown when the response carried no sync tags */
  'vista.response.sync-tags.none': 'レスポンスに同期タグはありません',
  /** Accessible label for the result actions menu */
  'vista.result.actions': '結果のアクション',
  /** Toast shown after the result was copied */
  'vista.result.copied': '結果をクリップボードにコピーしました',
  /** Toast shown after a value in the result was copied, with its path such as [0].author.name */
  'vista.result.copied-value': '{{path}} をコピーしました',
  /** Menu item and button copying the result as JSON */
  'vista.result.copy': '結果をコピー',
  /** Button next to each property in the result tree, copying its value */
  'vista.result.copy-value': '値をコピー',
  /** Empty state of the result view */
  'vista.result.empty': 'クエリを実行すると、ここに結果が表示されます',
  /** Button exporting the result as CSV */
  'vista.result.export-csv': 'CSVをエクスポート',
  /** Button exporting the result as JSON */
  'vista.result.export-json': 'JSONをエクスポート',
  /** Menu item opening the TypeScript export dialog */
  'vista.result.export-typescript': 'TypeScriptをエクスポート…',
  /** Menu item opening the Zod export dialog */
  'vista.result.export-zod': 'Zodをエクスポート…',
  /** Button on a graph node hiding the objects and arrays it holds */
  'vista.result.graph.collapse': '保持する内容を隠す',
  /** Button fitting the whole graph in view */
  'vista.result.graph.fit': 'ビューに合わせる',
  /** Accessible label of the graph, saying how to move around in it */
  'vista.result.graph.label':
    '結果グラフ: ドラッグで移動、スクロールでズーム。フォーカス時は矢印キーで移動、+とーでズーム、0でビューに合わせます',
  /** Ends the note on a graph that leaves part of this result out */
  'vista.result.graph.left-out-hint': 'ツリー表示とJSON表示にはすべて表示されます。',
  /** Note on a graph of a result with more objects and arrays than it draws */
  'vista.result.graph.node-limit': '最初の{{nodes}}個のオブジェクトと配列のみが描画されます。',
  /**
   * Note on a graph whose objects or arrays have more entries than it lists; the nodes are the
   * ones in this result, each with its number of entries
   */
  'vista.result.graph.partial': '{{nodes}}には最初の{{rows}}件のエントリのみが表示されます。',
  /** An object or array in the note, with how many entries it has (always more than listed) */
  'vista.result.graph.partial.node': '{{name}}（{{entries}}件のエントリ）',
  /** Title of the graph node of the result itself */
  'vista.result.graph.root': '結果',
  /** Button zooming into the graph */
  'vista.result.graph.zoom-in': 'ズームイン',
  /** Button zooming out of the graph */
  'vista.result.graph.zoom-out': 'ズームアウト',
  /** Tab showing the result as a graph of its objects and arrays */
  'vista.result.view.graph': 'グラフ',
  /** Tab showing the result as indented JSON text, to select and copy from */
  'vista.result.view.json': 'JSON',
  /** Accessible label of the tabs that switch how the result shows */
  'vista.result.view.label': '結果表示',
  /** Tab showing the result as a tree to browse */
  'vista.result.view.tree': 'ツリー',
  /** Empty state of the saved queries panel */
  'vista.saved.empty':
    '保存されたクエリはまだありません。+ボタンで現在のクエリを保存してください。',
  /** Empty state of a query list when the search matches nothing */
  'vista.saved.empty-search': '検索に一致するクエリがありません',
  /** Menu item loading a saved query into the active tab */
  'vista.saved.load-in-current-tab': '現在のタブに読み込む',
  /** Menu item opening a saved query in a new tab */
  'vista.saved.open-in-new-tab': '新しいタブで開く',
  /** Menu item renaming a saved query */
  'vista.saved.rename': '名前を変更',
  /** Accessible label for the button saving the current query */
  'vista.saved.save-current': '現在のクエリを保存',
  /** Toast shown when an opened saved query used a content variant the tab does not send */
  'vista.saved.unavailable-variant':
    'この保存済みクエリは「{{variant}}」バリアントを使用していました。クエリをこのバリアントで実行するには、ナビバーで選択してください。',
  /** Toast shown when an opened saved query names a dataset that is not available here */
  'vista.saved.unknown-dataset':
    'この保存済みクエリのデータセット「{{dataset}}」はここでは利用できないため、現在のデータセットを維持します。',
  /** Toast shown when an opened saved query used a content variant, but this workspace has variants switched off */
  'vista.saved.variants-disabled':
    'この保存済みクエリは「{{variant}}」バリアントを使用していましたが、このワークスペースではバリアントが無効になっているため、クエリはバリアントなしで実行されます。',
  /** Button in the settings dialog that clears the stored state */
  'vista.settings.clear-storage': 'ストレージをクリア',
  /** Confirmation button for clearing the storage */
  'vista.settings.clear-storage.confirm': 'はい、ストレージをクリアします',
  /** Explanation of what clearing the storage does */
  'vista.settings.clear-storage.description':
    '個人用の保存済みクエリと関数ライブラリを削除し、開いているタブとこのブラウザのデフォルト設定をリセットして、クラシックVisionツールに戻ります。共有クエリは保持されます。',
  /** Toast shown when the saved queries could not be cleared */
  'vista.settings.clear-storage.error': '保存済みクエリをクリアできませんでした',
  /** Toast shown after the storage was cleared */
  'vista.settings.clear-storage.success': 'ストレージをクリアしました',
  /** Explanation at the top of the settings dialog */
  'vista.settings.description':
    '新しいタブのデフォルト設定です。開いているタブは独自のオプションを維持します。',
  /** Explains the setting listing the fields left out of History diffs */
  'vista.settings.history-diff.description':
    '1行につき1つのフィールドパスを指定します。パスは結果内の任意の深さにマッチするため、_revを指定するとその中のすべてのドキュメントのリビジョンが非表示になります。各差分ではそれでも表示できます。',
  /** Button restoring the default fields left out of History diffs */
  'vista.settings.history-diff.reset': 'デフォルトに戻す',
  /** Label of the setting listing the fields left out of History diffs */
  'vista.settings.history-diff.title': 'History差分から非表示にするフィールド',
  /** Title of the settings dialog */
  'vista.settings.title': '設定',
  /** Empty state of the shared queries panel */
  'vista.shared.empty':
    '共有クエリはまだありません。保存済みクエリを共有すると、このデータセットを使用する全員が利用できるようになります。',
  /** Shortcut description: close dialogs and menus */
  'vista.shortcuts.close': 'ダイアログとメニューを閉じる',
  /** Shortcut that lists the functions matching the name being typed in the query editor */
  'vista.shortcuts.complete': '関数名を補完する',
  /** Shortcut description: copy the query */
  'vista.shortcuts.copy-query': 'クエリをコピーする',
  /** Shortcut that turns the selected projection, or the one around the cursor, into a custom function */
  'vista.shortcuts.extract-function': 'カーソル位置のプロジェクションを関数として抽出する',
  /** Shortcut description: run the query */
  'vista.shortcuts.fetch': 'クエリを実行する',
  /** Shortcut description: move the cursor to the next lint finding in the query editor */
  'vista.shortcuts.next-finding': '次のLint検出項目に移動する',
  /** Shortcut description: reformat the query */
  'vista.shortcuts.prettify': 'クエリを整形する',
  /** Title of the keyboard shortcuts dialog */
  'vista.shortcuts.title': 'キーボードショートカット',
  /** Sidebar toggle: show icons only */
  'vista.sidebar.collapse': 'サイドバーを折りたたむ',
  /** Sidebar toggle: show labels next to the icons */
  'vista.sidebar.expand': 'サイドバーを展開する',
  /** Accessible label for the sidebar navigation */
  'vista.sidebar.label': 'Vistaサイドバー',
  /** Sidebar item and drawer title for personal saved queries */
  'vista.sidebar.saved-queries': '保存済みクエリ',
  /** Sidebar item opening the settings dialog */
  'vista.sidebar.settings': '設定',
  /** Sidebar item and drawer title for shared queries */
  'vista.sidebar.shared-queries': '共有クエリ',
  /** Sidebar item opening the keyboard shortcuts dialog */
  'vista.sidebar.shortcuts': 'キーボードショートカット',
  /** Empty state of the content source map panel */
  'vista.source-map.empty':
    'レスポンスにコンテンツソースマップがありません。[オプション]で「コンテンツソースマップを含める」をオンにして、再度取得してください。',
  /** Accessible label of the divider between the result and the response details panel */
  'vista.split.bottom-panel':
    'レスポンス詳細パネルのサイズを変更します：ドラッグするか矢印キーを使用してください。Home と End で端に移動し、Enter でリセットします',
  /** Accessible label of the divider between the request and response panes */
  'vista.split.request-response':
    'リクエストとレスポンスのペインのサイズを変更します：ドラッグするか矢印キーを使用してください。Home と End で端に移動し、Enter でリセットします',
  /** Accessible label for the button closing a query tab */
  'vista.tabs.close-tab': 'タブを閉じる',
  /** Accessible label for the list of query tabs */
  'vista.tabs.label': 'クエリタブ',
  /** Accessible label for the button opening a new query tab */
  'vista.tabs.new-tab': '新しいタブ',
  /** Placeholder of the input renaming a tab */
  'vista.tabs.title-placeholder': 'タブタイトル',
  /** Title of a tab whose query is still empty */
  'vista.tabs.untitled': '無題のクエリ',
  /** Title the browser shows for the WebMCP tool that lints a query */
  'vista.webmcp.check-query': 'Vision で GROQ クエリをチェックする',
  /** Title the browser shows for the WebMCP tool that describes the workspace schema */
  'vista.webmcp.describe-schema': 'Vision でスキーマを説明する',
  /** Title the browser shows for the WebMCP tool that returns a query plan */
  'vista.webmcp.explain-query': 'Vision で GROQ クエリを説明する',
  /** Title the browser shows for the WebMCP tool that reads the active Vision tab */
  'vista.webmcp.get-state': '開いている Vision タブを読み取る',
  /** Title the browser shows for the WebMCP tool that opens a query in a new tab */
  'vista.webmcp.open-query': 'Vision で GROQ クエリを開く',
  /** Title the browser shows for the WebMCP tool that runs mutations as a dry run */
  'vista.webmcp.preview-mutations': 'Vision でミューテーションをプレビューする',
  /** Title the browser shows for the WebMCP tool that runs a query */
  'vista.webmcp.run-query': 'Vision で GROQ クエリを実行する',
})
